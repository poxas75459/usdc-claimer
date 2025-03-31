/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3MbKQcAb3UDVxXp63iZNazV84sUJ2zftDkWW9H2X7oNDYib48rTGvnTT3yN6G52EEqPpbZPAnEqS2nzpmQoPt4Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EAwFynpyJ5Tz7NeVEE4Tj3nhbDCw6b4S77okSZDUvGTyPaZZQFpfyvDZgMrL9WrAHbpC7gKqNyrvHAwbzaGhV6",
  "key1": "4Du6egLpxh6KfSNRxhuTKQ87PcX937GRfCJgt7AfHchBs3asoLkNxAjBVwSeJTT93J2LkBrsFWQHV4ZEsHEUxdxy",
  "key2": "GA615LpS9BXUzYLmUwZZcnVdoZMkvdZa3co56eLUzQ4sS9gWuoTyrQmfFx7Ys2htJkLknAbZ7MiNjBNDFJ8Y8QK",
  "key3": "31cVVUFbJVHmVZ9kRS2Jo2rgEJZLsd3WZtdwUKk6atZXfiKKVkUjb2gKoUffVE3msDjHF72ckqbaofv7H1UgjeA5",
  "key4": "5LXvEmuqmBFLy8btZV2pZPdniXuf9YY58js1VahwFkWhEUgSi13pxiNrRd935Va8h47DJ46ZujBNdMU7aoM4YZ9c",
  "key5": "tTpSJJopqBXtuNBUcKL6tVGL3TvWWjwgHzSvJous3SfoSGS7gLC9D93K271mVgU2Eai9SL6uTCraZ8Aj6EA811M",
  "key6": "9ALYEzxYoo3sJmiacQhCEhkmLVpmaZ7aiJ6e7ExHxKT3Gx844KtYVd4yVGucaMZaX11GxBbr469gsUsVPeBikTX",
  "key7": "2L8jnLYSwNd6eByGLGTNWgmqbL8Ms2MKfhDE6AokB1NgVMrbAqqVRki5FNA1qvRYyWU32RBL1XtfxeU143psBNNo",
  "key8": "APGtuGvGUKgE1YUNsgiEJSS88bRWaYvnftojDrM2ZGhVRwpZSXJj6d5sDnLutzQWykt1Z5QxVUgwJWucHJiZjUD",
  "key9": "vh9w9D5ppxummxZAq3V6ZRyZb4PPEt6jS3u4K7aVDEPKwf8wy4NY941XeadN8yc1EYkoTEEvcRT3Hkz2v4jQfJ8",
  "key10": "39iDREpykoXWSuaQiySFYct7peHMyEdUQNRFLiLaK6tgVHWiJVzXYGFwu9rLtKhVBXTJwbgs4EwH6QvDBP1B88TE",
  "key11": "3gXZdMuuMdX6uvVBrvFp1Pn43LnJ4THayNRz1yzheudSVY8sKBPczjbmH23ta6WtcQywpGDwyVuyj6F26HDAAUsm",
  "key12": "4DPh3Bp54k4AGDkP77hVoSGA7CgY84zGj61rtPgcLSMAvicQgzFu7RnLaDA5KSiKBFAqrSTbF3NFjqGe4MB4HD6D",
  "key13": "4jnCmUnJsr6DBwtUVsSJFyxez2vLowfNAuVXUatkU5VNBMxrxKaYHJNTH1NGC4wXW2TyqnQVvra7LQdGpmCnZPAB",
  "key14": "hnpc9wPDEbtK68Ggak37qYfB5Tb6qHngVKkQk3Av1f6L92jUfK68tDumTyChmp9J3vDEn98GvvC3r6qRk8BK55y",
  "key15": "4mVNJxpfCSDCC2rNk1Pqnn6kRxZXfNNqzSJUzwfwSHconWYqDTARiEyKQdKaX8YMG3RiGKHoE8t5DnHKZJBYDgKt",
  "key16": "27fmWYyasBdwDKQ5s62daQUhn8godighoEgxfgoZPnJG8HRy8hn7JSxvnJoZxwSyinT7JoC1oN7ToYWJi4G9fdKF",
  "key17": "3bKuSwgdFDxBm2tzRGCdJwkeADAL3K1jU7NFBsD4wgceeCY3ic8pNhfKZ4Sq87eB6GkxUwm8tGRAm2JhE8Fkh9xq",
  "key18": "5mfSr85uSrdNowUyMWnXu187yWSML1XaAyQL4s7Wq6vAQnMNGCggMVPwKdFkihLTdTLoBTRePULSq1Hfj9982Xn9",
  "key19": "4KzDdcWSDnN9XgkXXK37v1D17RHJCaR9KdV2BC4jcet7ZHzJiaojuh16uPuCb7k97qH63GkiuT9EiiiWUb5YXjLi",
  "key20": "3v7fMS8cEUL7Z7PDZgM5ssHzo9hPCbqwmgh6C2d2t4pUyeAtWWsKjErwVuC8QokimHKgriyHGP7HyRFHzaPBZgqC",
  "key21": "63WhWtPncbhXoaNjFMhz7DJyjAVMSRdKtdybhUgkwyocJvbRwFsGTZixM5QNazyVfvqsMxrCwirQuS9acmRPJFkW",
  "key22": "23LKowkGVnXkf1rQr1BKvKPS8bzVroe8MkCHVuVYhhQV3qQDges3MvM6jSsrpNgS178jCNb5NCBYGfsV6bDQGtaY",
  "key23": "ueJVTkE7nvNG61Zk5b6DgQ2jQqGB3fLKWQPQhv6nRw53AaUMhfFjdLoECdXmKVGSDfwSWqm9R6qvJX1sNruEcD7",
  "key24": "41FGBPv2bfSvifXihtEjBMLiKTLHpa9iLxJZXj453RWKB8rDFtKHZ3epz2YFHSLjnoGsSzG6EdzmQHQP5vbUZMaf",
  "key25": "2qiPqCmebeX9TV7jqUe3j3FndxieCPNX5CmPi8zBFEZqgYCV21N3u2pQ2H3aBdv1rRJteodhxr68UKtdc2mcmVpx",
  "key26": "5UQ4gLWiyh7NX5Fow8GVm4W2Lj2j9oGuQ3u6Ln4rD7RMecT5dyJwyZ4cbmj1SAR1rXwk8yiorK83kGmcU2bXJLE2",
  "key27": "a22HDuW2kAsMwfufRg7uqfixhVxNhoX9uE8HPsGa4sHR4T5YRRU6JL82fAPimfGQkWx1JcsHbi7He9oQXD6kuzc",
  "key28": "5PFHXqK1yL6JGerX8VC2WoDpDgph7MY8nNnestvo7bGSJCh6Np17Dsk77RYVgX3XUERHL7N1QJNAqZdUAocvhc9p",
  "key29": "hBuTeAmnRNMWe8LxxFFyMeUNvjryCMR2H1DU4xDf5mBc6GNn4aoo3ogQsuKHGzXsDEBPbmLDjcSDDbuZGrz5fob",
  "key30": "3vqTVYSo8J9sys7rnZpm97sFppbadmJ62gagV2SvTf8Zd4AF4kms3DrxAV3CrLMHC3hq8SAuseKKNHByTDM8qsUD",
  "key31": "23zYSSAHfkTpwVpwsrjP9F8sYYF9t4Zexxduna8JjSYYmEW1t8eDt1KRaBgedBUCDPd5xCjTHrJw1g45CdEhsLdF",
  "key32": "5uFwESQ7P5S2TmiXcbBCmC7ThEMumQsGB5pcJp7iveQA8gH5gEFKG5QQrrJNsZWr6kJ2MrWG4QbeVmUogMMZF5Ci",
  "key33": "W11BLSg4NAaoVX9FQbJF2cF5QiHh75UFgQrJwKZEh9wGp5RkKWVj62JgKJLFhk5B7hRidhH5wYfAnLLuA1XarDF",
  "key34": "46LnZVUWS3V23WW9QAhTiGbNKnakkXoJvaJU4ii6xQQViD21PLYVTcb2SsWve9KJ6nHWzUWFN77shoFEcnfkWd28",
  "key35": "2UK7xA6UpD7uEw8G2HRbBq3A5Y8kWpKtxSVybrgTVAi2aSFpmrLwSzZqm5xbyzHkwJGwXKby6SnK5wdDEDbrj1zV",
  "key36": "Pua5MVPNbgJmbBzGq5FCyENCir21PChhq5c7wEc3dp5Rep4NrRVHCzKw4qfzibqwE9nMVsTmsZR2m9Vg5VwLLWH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
