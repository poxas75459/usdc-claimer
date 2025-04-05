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
    "5bQD5CvbM6hGQKQKX3SvMsYpPWk6NBoFG1aa5PVpEUKqj9ynRMmdSsSg1kpH5KPJfzJ1eRxckYLQLH19Bds1Nqxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cqdiyt6bK3MuaKxc96c97xkRiL8EDcUWamEcVQaFpeQKu5SZyFcX5RNj9zRrLe18x8HuFN4MDE6EvUiUmDZVL9P",
  "key1": "2EmT8yo36saX6wnPc7DzjXZN1w5qbdt38YJC43e3Yh7GmjCyEpMgBZjBnYFS3NPUAeyG1Q9MRAFV6GMhxM58BGLp",
  "key2": "FFrezuFWnncHhg8RJ3majMmtKCeKXv5rSsamjWn3aT3m4frHzffJbaHb2VvBvSpbomX1r3ZYJzfm8N1jVYSJ6sc",
  "key3": "28KEvx7nZ6jZGLn2PtmJS6jCgaTXjLxBXcKrSmtzDNK6DB7MskvKWYoqWirLT6SfkDGnQn5TfmmVZ6Xqdm6NWKXs",
  "key4": "4UFb91cNjVP3PqqfJBvS6fjffRVLFATcnaaUpaWznm48PpnskPo1RPMfBDEsdRY5JbH9jAw5pJu7wqbVzhsXB72t",
  "key5": "2eo69hZNDWDRtZ4peHoyoLR2ysJrVBMQAVys7CKMdMwEjEZ8PYF2HUmesxvkhRgNMLufHrTv3wfJRFTm4s3adJvY",
  "key6": "4csUbMxZuJxqYECc2woBXatBGSDaaELtFjAhyotRV4uyuJMvZ9BAn23bQy72KW4sNp7nubcCJaJt6fq2ctWraLqH",
  "key7": "YwfU1vrco6J3bkmEPSDMeE1UKWTpMF76bzN5XRsVBZPv6ixwSk8UsMrFMdf2m2sUeXcAeXMqf3957gB8scWy3dC",
  "key8": "4UYDNvBvCoaJPMGie4XeENp7XKKpXB7ZKZuq1eFzY9VgEJnEhV1DTLx4viFbS6nigDPoKdzckf2i13LemniR4KMH",
  "key9": "2HS8BKGxJTxFbwz5m4Co5VBku2jC1x9AGDFctnbMJQcThLuPBzBZkPsPM3BdEMqKLHVJGo4btdzzVuaEZxUV1UGH",
  "key10": "3xxHFZ7xrhKGJ9NFwu7vNx9PJ9k1TxsRhW1k5ALNzvTwnbveZkH3QLnQDAer5CxAgMb9HGmwth4ShcZm6Jvna6C9",
  "key11": "5CYwYx5xp8mmHnnN5epfBTV5jg9mtnhcjrC9CruUZTDtmucMepWqtvKToHkwLz5AeVWPvfKaBSyoWbLLq5tDLypc",
  "key12": "2Vcy1Bg535uxDj9y3yXqDh3oVMMJXLLMX6NWVPjHrxuq2uAFKnMS9pP9AT5dmePPcTW4uMz3WARGq44wxzt35ReN",
  "key13": "5wTxY3ocPCQzN7MPvpP8vRrBHMz1VpamaFauS5wKGzWMtPiYywKQZRwdbt6AR8PaVNJQKRshe5Kqrr63b2KNMA94",
  "key14": "5AxxLMXmPjSiSaCuQ3nyzqhcvtoV1VnV9s6ySKM7MCvNkdALziLuGnrePsvMVRNShEseahMqoh44do6FVeZnYCeq",
  "key15": "4StQknK8A3g3AKufWWZ4C6HDfK2DK4k5ZfctUpSh3xpCvNkANyUP2AUkEGEKiwWKvsHGLuWC3qoGhT1o8HMbKwsB",
  "key16": "5mcZcbCRG9c8uNVLTuFBDkmufPUJnPZXscPZWMjpgFEbU9hRT3rPGrxbmdCvSKLja3p9bZ1ASBMH3dVERwpFNfgv",
  "key17": "5bPgRxnCtyF5QUmH9MDDz8vfYoHGhUVfzy8FddhEX5cXxSGPLysRNVUX7Qy5xr45RGbWxQ79ErUwJHetwubXS9rA",
  "key18": "2NQE67aG6svG7mFtYZZx15fk4f1kKieundj9z2kvw1PzYskzEYTrSdb8RcxnzhvDmvXh9xLo824icT6CckCeHJCR",
  "key19": "3T4MykcmzR1tTpEoXYgc1YMgnF94daJf997Sdie91drD7senrv6Sv58FHXtXqFGihbqszh1ryk99eCasNAkfN72M",
  "key20": "ZJDniCVegV4Q1UXiEFyv6zK2Spfk739a9tRXpBNhVzr8AxqhJH2XKGpf9NHzQWnpJghHo9SshTAxU6jjdqtskCm",
  "key21": "3haNTc57bm7UyW22QG67pe6jQ4h9FddQP436rGtD5Y8mvmjKAe6QrtaqpnwhxBRRNNJm8Q1BwDSgn6zXfo9yUrHw",
  "key22": "24ahrip8r8nC6XZzN4T7TaMbFo9qQhjwAm6MBKbZNABCBNuGGYLw44xEuF7bVEQPDBLURPbNVAXD4bijPYhjgsRp",
  "key23": "22xhhirE7bd4NZzBrnQEYREaSwLs49BbLzFnzrUfLYVaX2oj1R5VCdXFMkHn4FxGPPeG4Gtrj31hJeAqkVcUyGpi",
  "key24": "4CMx3bjwni7K7ojncpoV1zQL96XCWutem4borL29ZU2yuhn4wHTEfFDyfZsRm74G71kSbRhmuVLna8DsJqnEbaLi",
  "key25": "4r8a16k5c6hMkSTuybarYqj7v76f81fkC58Svuz63qhQNAe8xGXXzvLJsJJNtXEUZvKHPPKX4wPpsHkeuq7EijP7",
  "key26": "4Wgwd2f3basVVSwSdcRDPgkBd8UpzSrWbb9AjoWYPbqBfvzXwJzAXF7vmS1cMeJ14sqaurnYy3MFrTHSG3JonYWx",
  "key27": "4tKVazZ2yhoUjmKWGPHpcuxhYJyq8vZgHCSMy3ExAaCyWBtWifkcHqLwrUQrbwBoBevoEENiQKruWMPVKYEaiuza",
  "key28": "5YjnRzwFg7QyHKnLazqDYYL31ZSsPtZUcZbAU1E8vT4qo25P7Lutyv4VV4jfJYoMWZjrX9JA9ub6cmB1XSxGAua1",
  "key29": "4Yz9dERPv8jwRn76LbBfSGVjCyZEDBn6FZGSuiz7sjR7kTRwQuJXxSxNqj2ba32xpENxQHJynrwwbgNyXY8yt32h",
  "key30": "4NgebH96Fu1eZACxdrpdPkHbfxuMF1rWgEenZFpAhA3KWxm1w4eTLyCunbMiqnhCfJYYGWqkF15RoVS14egTeR2u",
  "key31": "4SdyuJute4VisNBbdhkSqNcBiXzGnn1kyUHZdCYQgGfU4wijqXtt6mcxtCfudphGZAUzCgJHKM4minmiJ19GuYQu",
  "key32": "36A9maRNWaBDw7hrMNjfSFb6Xo8PAqxM2WeWN1Ndf5ob6FCmREvf5XoMCUE2UHDAyU6hPxTGLPBvzLvXESSnE5Q9",
  "key33": "57V672jYQdMWG9B4gYwTBPKsNZ9YwDqH8B776QtxPM4EUA4Gk7ZisjGi4BpA2ay7zMTMHDBDac9w8LJkexpUiFrJ",
  "key34": "3qoVLsWJnxJGqMLACTUKgkb94DLxDKVYh7G31y8Y6QV1cku5GCJTMzQ8S9Rb5fD4NJZ8dohxmzYNgNMLw4BKidn8",
  "key35": "5TDQMVXdAj1GgbRwekGR5JwBX74gqjyWDvzmuWUEK87cFSd17uYCyGgcxmaw6aTXBD4awqdCsiBVyso2UXkUdfr3",
  "key36": "ubuon8k4Wvhk9nXoWmxsQAGvAdsiHu1nuj3bqCrExZjjnyMeL2vF2xYdkK9Pdb6qrVdEnsE7CRywf81Vpk9LAzo",
  "key37": "3YZUMNCGZEvGLGxiwoDbkS1VzETqe8bqLeG2jP6AYQGYM5eRcDvABunC9mbbV9cqd3hmfs5Vuc7Qdfiq5ysYPzYr",
  "key38": "5PyeWVm8j49e7RAQb7CwmsWMsozgchbECzGyVf7bCwE8BTkC8hXzwJgNvaXpfHNnfk1kQGeT2JqdmXXCyuJMpCpY"
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
