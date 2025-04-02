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
    "2zPDWgNQTqc69wV2peWnmV3N9Gmkj8BdYFgqTpWzAaR4KRpbdwCgcS2LcxJdLVLXH96dYfxVjiLm7L4Jo9vhWi5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BBWFKZFkHCujSMv9xFJmibC7u7dE7ciEEGrGzeRfAMtbAHyRF7VyHfuvYWhx14s3iXmhvvMyJtNHrzuM617a3KS",
  "key1": "63eGp5wLFT3ts2Z9VyRtckYfr6pmyUu9Dx8Dx2irqfwi8SUPk8pSQafC9865M3hKJKEVVBJvM6To6tVvtHjXvVXW",
  "key2": "34vm7ykTXnYE3Ns6hLVshX99JDAMEEGbXasDj5cSvf5BkUH3ixB8VEgK13Lme39stALkezSWGY5yj6YgJg667Ucm",
  "key3": "2Eue19EcvG5kHgoP9uGbrYn7dzBibj9zp8QCjLg1PaQyNHePhev7aGcpFa1kphLfZsEDnFnBrWrsATkUEatmju3q",
  "key4": "5xCSey1jdyySAugt4ag2HKYV3HMgvDs4UFrVz8KLAnM3V3gMPoRhTgNDhYQdNdrEYeoxLyDa1qyRxbrp1baijTfA",
  "key5": "2njzfTCXfhTc2v1PLJawkkg5nNZsZXXUEo97tKAtrixSBEd2oxeqj6D45g9vWwPc6ndaqFuoMA2NERcjnwAQL9Hk",
  "key6": "L2bMW3ywoUp7CUrZ4asmK3JB6VeRTHy3fpnqpeCkaCRxi8ptwUHyPFQZm2CEKKZNicGip427FzNLNemZS6om2VQ",
  "key7": "51RPLVAqGryZB4c7UyBqsYco7xSE9Vb5gTW99LpyaiDv9KMo69qHUUWJqjZH2P4ifQaHquYMFvSRmjnqX4MoSRPg",
  "key8": "3uq7kQgQ7JFGqEd4oos1k36B3RgFYZiAZJL7MtPNwe3MmA5Vbp8ynQkt8q1oNnrdV5vTtyQfEFF5a3S7LkBLnUsU",
  "key9": "5iQrT1bsLj7SNJ61aESffL1UyNHcpiguYgyJfnW8WS4e2fbrXWaRo3aK7fKjXPMgEShAEy99TptMggffVEPsBPxp",
  "key10": "GDXBDtNhkEpqwKxdup2YrZDfCYEHA1JRRvMkm629bS5CMkX7NqnX5yy2JFgjFpyiLdGTWjNAWwprJcpcV9yLciz",
  "key11": "arUZsrYjJuqKSFP3mzNVKttkKZ3yEqY55wiNuCRGXAKBMaswXTgtCvLiPnXEcR3fF4X4cuzt6gx2MQRToz5BmNw",
  "key12": "2LZPpRNrU8RZmutpzEYDMobvojVQwjPcwHsDR75NfR7jgHR8PoEu1Xp2AoBh7eREZc8yZow8nt1fdxwf6arhvLzk",
  "key13": "BbJoS95yMoW8Q1pSKvZ1zMGCZHPLBnpZc73LsVToeD71vgaWxZFjPpHp4cEHFKNKTomxacCv4VB1ALEkbwkuGzw",
  "key14": "66BV65LAqr21bi2UU4MvskGUA9eiHVDac3MdZSUC9gvBaKqPCsMGATYmCuZpEWn1KSjcgff5jdw4Wz8pNpumi5m1",
  "key15": "28xTnYA669Jv4eXrEtAuG9whA6MrQGsuVXDEgRkR2hEajhNayNqVqZica97r9gFb281T1DGaXrZ2qviT1poTBRve",
  "key16": "5e79BgK8Yk4eMoFHtHH8HfeRsVmCwJjwqCs1TCYmmX8Gt78Ao3gb4ZTR9PZzAxXbSfBvBoNhhJyv2o8whApU3WZn",
  "key17": "356Xf3aPzpJ462Jo9ho3kDXiGr525uYnAtgMMKA5iDGqMEUisbCb1hutXd5insgm5vBuiUzDFcUA5unP39Yn3KQk",
  "key18": "3ysrc3iPHaB2WwyKwcZAHboiQfYeXzMoxbT6GecoPhoyXn7FkPNbPjMjJgbAPT1U1pxPwxucxidK5MAe9Coobsrf",
  "key19": "wKufbGchXiurJGBT5ybqadPRC9A5mFiD5saJ86fUECM282VVBnGruNZfoKLqLQbYq5EFERYQUM9ig5o11R2DN6S",
  "key20": "1i99fvTMCdmgUktWA8dW3WEV5iv92P2Y51MMrYv3VJ4hx9QEwrigPEHbNPwXStFqijMpZomNGkqSrCz7HGLvJna",
  "key21": "k7YeEvR4RWqNz7ET6Uf62t8XkcnrNHt2UnTm9v1JaHc13iuRbhTAGwAbmzbKqLgicHpbMuqHYHPb8XVZjf1cQBx",
  "key22": "4VtR6BNeMJhpTc7DwTFL2fz2VvXKpxg1MM9bxdRLrP1gg1RhHEvH4AbXD95Hq48SGQRLdR3PqvnaT6U6ErtVMvjW",
  "key23": "5zn1yA7GUWKFgdPyxCrxGzYE5UmzAAJk92AxmPfBTkkZVHccTSzECPwNsUo8ArZ5ShztyRgMDru7iDJi6nGBhshA",
  "key24": "Tu3DXpLUjCfvRpYskcWefGjeJMZanGsGY2jDBH71PCB1AxaJqT4ECxVHL2LGdufb12Tv4yqUKTopHX967UVNwtT",
  "key25": "3vriwNZ7KChMfvbdZwwZTXk4mvr36GKv1jRWrMzohBkdzj8iry7QFvpJwfrvJRCzdShXxLmuqxrW4R69zi1k2GQY",
  "key26": "5HhF9VAKcZZFFoRTANqnFs1Q9oWvbTtd2XZ2V62mmkgPjSN4HNsnbdtJgaeUkMocftBo3GyKvyVA6PNdXrT64jFq",
  "key27": "4HkDc2KCAhGTEaKkZRdud27ogw7v5HTbNFLumvNV2TW3jfjvG3NQimYpnc9SRC28cTeHaqYFRidTsE5XYgaZXSS3",
  "key28": "3b17KAVA4QqYRrLzesu6E6Q5Y73CPthj4ftdUeJrgqfhuEucNP1GaT8Dh4epaHwCuZH15kb2SUGNvt9SXAXyYF3u",
  "key29": "2S7bhqqYXSLjMHdb3X6PAa2TbtuTPhX8rC8f4Db9sgE3AcnBbskRGmSafLHHgp9g1F6JorjnCPXGumQ9EYw6jFCA",
  "key30": "67TfkLQbY8vfs1435QbApUuhypRrrwKBxs473czNGmnBUbAN8kBA6vCQ5Ln4spkviLHNPtUhPhgZmCUHUjcRZb7o",
  "key31": "H9v1esUv6enCWvGsuUMNomKr9AmhsAhqSwVxT6KGQSV5yGrNQZLX25ReXKaZ9nLTixibB44dRKQNsG61tMWf6H8",
  "key32": "5miHxWUbqXYxwv7PAV28TBQ4fxKDd5UGhq2Q59ubCyYXxK6LVTV5oUoRH91xRKBQGf9jn8Mmv6T7g3CJCw5wHeda",
  "key33": "32rkPeGaRA2gTDyA7AiLFCW4NT6HJQg4VUJjYgKSQ96yJKjVUU3SRzLVHM1BaoZvuEFuK4HQYCSkPUW5rQTptfZZ",
  "key34": "28dTjtkgdhR2M4p2bJBkiWQff1wdw8LTaPHmNV8Xjx4KUf4vyswmwcExveXy5KgEX4PSrCcf1p18GPEEkSQLadcJ"
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
