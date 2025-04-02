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
    "2cdcczqedRsp6wU6LVU377f7UHdrD94dYuZFEhXFpMY7v9yz3iyL82fSr4JkYtrJ4EPmiZvftCUQYgK27wiDvrqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EcokLFTVhwLCxdk9yTgHdQVcW1vpNPjxMvqtHnECiEpajy28kBaD3mdweQstudsfF6HpBLir2FpjL4SaSjcUVdJ",
  "key1": "2qcvC7k5S8AxNLtc9zw6KyhdCMuEUokpevTACj69R8193YC3Zq6HEYTHRLWZzERaQFGzGoyEH3bLfg51Eoe9ufwN",
  "key2": "2ZgJ1akCqnwP1e4muWs433bKsu7VkWBqCXst3TRtQr453PJq5gRK7rc8dpvhB2TjL4EnfEd8cfJvjEf1hMJVyWV9",
  "key3": "2eVnnWhq571poxUVoLTqbwujXbgqcb96Khfi1MWouasJhuRuRM7Qs2ebTtjbapnVekuRQCFHWE4XRCbgVGygwhnX",
  "key4": "5HCnNSGQDE2zduQhmJRSZZECyrvmtDzZ2VhQj2Esc2Nwsw2cigHVoJSBm33y4R6PoCh7pjMzsqBVJ1HezhQHobNb",
  "key5": "3zZHbvJQPYMNJngfWyufyUXEmAonVtyJ5QK52kZco31FAC2uQndkN9UMU78iA9SPmPyG7e28QuW9fC82dceQtQZZ",
  "key6": "pJ9AR6SMwHN15xJxv1UVb6xqi8KJYpiEXw6bFayxME7CWSd5oJZgdSW1dRoHgojA3fcrpSwwNgYztTtCRU3zjVL",
  "key7": "26d3XD8dkZWvGnCwUXPkU7iEVSUw5HzfwDr7LpJDPZcUR8ayn2Zn44dsMGCTU9ui5ztCAEwiW3nFHB6vtoH5HJPV",
  "key8": "F5LLexdkhJ6fJbrCiFHyVdMme14ZPBcJoToxFc64MFgDJHXLBoVEmy3kqNL8HANFx9cjXtSreaaLnfX6FYGnYA5",
  "key9": "3WfNXDgm5ViXFaP5T7PrHct2NxD4ZAxQCiqVVXq4z5k1VQdaEpYbvTQxSriD4Tg1jdKqE95wM9HqMzha35R1wFWR",
  "key10": "5muM52iNhkPayQ5e7BF8adGhfYP5op5sCEJVSvyHhJzmjsDyFWQsSDttXEb7tEJeaYacsGcQTbJrwtPW88bxiabd",
  "key11": "2uGLPEgihu1Ep6TjBAxkKVBHua3FNepYduiWdNyA6H63b9QpwHBztts21kGxtRP8VUJrpFA2pEry7RnchoAQTnK",
  "key12": "4vVu796MCKKN5cPWFEPdKCAB4Dy2nPefXNESoE9ojiUUfawP1RrR2EjqTPiQsGfd8Y2AhMAN8p9dRP3gtMbafYwo",
  "key13": "2aeK3MFeXTKMzjk9MgtjyGXRQnXc4XoRAe1rvnsYvrN69LCwWW5ZNnvrxVkgaCCgSK8cxBmwWSGngjtDJtMrEm4v",
  "key14": "22CmNeGAaP5f1aqEeWRsnneQ12SC7ghGnrnCeGvkHiLx8Q8S719KKqnqjvpajEnuyL8NFasFyebtDwY7A9cXZz3o",
  "key15": "3B5tYVqYS2WbcVLXvp9N1FqJbCwEgPRF4nXsBpQg2MSoSGwpNSiWuLga7rzY5NccG8TYjejLLbkPD7gR7CfD1jcq",
  "key16": "3EnzzKimuzPQ7yvahbpgbUshAL1z1MRfKo2AkTmWeKT3D8eDUsRyM4fxbmACrP3SPQV82Ku1xLqGfgMjDfPBt5y9",
  "key17": "5u66ZzZq6cNiAykcT1sCbrDEt9v6oBR2Szd94tBDTJKwmpJhNMAkjYFCntRMvamJks3ywN1PoHVBF4gSGpBXQ7XV",
  "key18": "4BjuphqhieHWCapyUKGD3P5s33yARPNsrBg5UPDaseJtqwt49kZuwec9vGbD1PjbvjWkgXAMyRrdA5xxkgS5bXjP",
  "key19": "5B92j5s8S9uXYNHmVbBTryBTnFzyEq5v8BRNfrbeYebFtKz5475fstQ7PxHodyKj52RMsxjEXDQWxfWWB4DZaUFa",
  "key20": "5v9dTbpKomRLrCn2eEb6uTPcyLwthD6AQSAk9xHtpkJ72kufpXJHvwjABfyZjBkgMpasdVdbYK4yJrDQh89w2Tfa",
  "key21": "3SVmdKUJeGSDSWXPgh9oZMJinLmDjX2qq3xktHPGYZ3cZX4t31Tju2fwnfymduD2KqMLbEkw99uz7yuFHKF5tBcK",
  "key22": "2mW5m1gfqHU7zbBjUA6Yc3DRPC3EW25Z3nAdUWZ7hG9zdxmHSE8c2Fy1LvgDy4xoZW9r9qb9nxDknsNxji2pibCu",
  "key23": "2mLx6iYWdMfn6fLXZBin31xXpVstwrxEvDcPmMkLnhzM2WpgQixjfiquEN6UYCzM6bZz5d97QZ268rwfw7khDS59",
  "key24": "tBo1CXYXeRqA2DwSmAkU3UETaH75fgSydBUbUTqkKQFjTDTcH8TawCbkahL8GXcECaeZEbQuDqDtFXAL3Btr2H7",
  "key25": "Gdc6MLH9TLybi8pgWjroM66TEQdxcksYg9ZWW5GhCX3pRWnPP4ELGQQwgp79C6hYoaD9G6fv94vNVX71BozmBTu",
  "key26": "4DFPVDQfFZPFt5ghCVmDXuQKyS8ES5mkFqxDm3UBXERevWPf7qWekDhMQKwt7u6zgpedBbXz2z4UuQB9KFdeMvfs",
  "key27": "36g9ZQd9qgEmvrfz9jnDybNLLZNwUdYwtkK6YkRjKAfZC4bDrReWtkVvAxQLERejt5u2uwkdSfAXtDFYa13SWPaU",
  "key28": "JLNP5Y8yhj6a4ubUfmTeP5sohCVPrrUJNm1jaYWWmkv4SVgkKSydDmQkaoX1PUYXWYExtk3x2eYeWymu2kuhMm5",
  "key29": "4PcJHeNjFtPWmZWXu9LXtrbEh7xQNZSVWBxvXU2WT6okW5tRZZi6o8MRLz1URMiH6Xswpb6sEaTF6Ayx5CN76Adi",
  "key30": "22jhPb7XyFZbm1r7BL2RWTePvU1sZ33wxXUsQnVSZCQ8W3XuY4tsVi2UNkTmh3fmAPktAk6DkRyMCQLsBFi31rLU",
  "key31": "3f83x9NfLUGtX92KF29JXDJRyyuE3EPPxX23P4XSAe1iyxKi6sDRvQMWpY25WEDGc4QTZGnMMu3x5C1urpR4eJ2M",
  "key32": "5CTX3XyaqbFkTEPrfpYCGVujgVgTCPLNYnKoAsWAQEn73gz9yZC76HDs3PCkc29xnhput3BXB7Zsji95tkpQSJXJ",
  "key33": "3Q2Ky5JQ6yA4HtYzotQi3pYqjmdeowdZeSaDYjZwn6uPxBSn9Mxrqu93sVnuT1ceXjZW3h3p3A15A4GMbVqxAM8C",
  "key34": "61Lp2TXiFJUtSkGdWxXr9ZuDJ2zvBtJUuRaypcWN6vUc2vUoWafbyGem2G33tZGtwv1orJeSgFdvXiurSk6ToTMp",
  "key35": "4TTmeecx1C549BMDa2ek6oY9DGW3dcutvbzUHgBs8xqRhArLk9njU2C8SDbrqGzRiL6sdqgwS4v1C3MJzSD3EcJr",
  "key36": "385PPssqyGaUHUr9k4xCmRJoj96an1fTuSA2z7u73EmkX1tBRYRz4AEhZtRMTN4TH29xvW9jghVsCSHz4vVLj7Pw",
  "key37": "4NECEBSpHXUm1yo95U3sdRaUbEFAvEku3K6Kazksk1GP376ETQD11R6mgy1tmweu6nbRh4RB9ZnxSsTd3VxyEQcW"
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
