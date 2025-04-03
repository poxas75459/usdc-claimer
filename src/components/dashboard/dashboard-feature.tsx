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
    "2rzepm73Yy2XQkx1QLxPJVUSoXTJ7WRnXqy81goNYJ6iSieXmqqtDBsDYCPZefzDtXqYs78DrAMvhHgTbS7Y1kzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7NrZyty3gcpzvcFxw3uSV9nAb3VAbxNNdFRcbqkkWMi9kUSW6idQt4gPF5Crw86b4tXLgt2W5rxWXNwbg8QuLj",
  "key1": "3aeEgsdunT7qVijdy64ZPWaHaEaDrrjXw2w2Y9nqqBU3aFLHPo8vxbP9aBVo2N1Lxpx6M2bvCgQ6RhdmArGZYCez",
  "key2": "xURver6dEmjvG85TLACoA8sbYxobqnFVffP8maXqXeT7KAcoJ8Pxprk4zqbEppoDUAGuxM4TkSPQU9w4TiZNuJa",
  "key3": "2khN5VMrqLJeNYBy3TMwgvh2CYkHr5FTRkC7znExWqPxZMyahqNyEXNXUZfLvjmM4QU5hTZTijpBbuMTnLcZJtJd",
  "key4": "5Hyt4Hn1V7qr1BmM7M2NNaigzuD415i3srTUCibkPcPXoexpxaDfnHPXK7fZz5TaEUStzdEMpyU7hqgFLRzLEDhP",
  "key5": "61CQoQxkr7V9DNCndKG6UBeL73KSuqACa3dRDYGaNA53ybtUTXW7D9SbwJdfArGUTA43Jec5qW2iE3X1ExY49LmH",
  "key6": "54VpL5dreamjpe9kLnPj9qtQNQq42NG2PEYJT8MyNZ2RASALw9qep6VSCv68M21QW3BdM2djYnncHFNSV5KwL7tn",
  "key7": "2xEnGPGC9naPKrTvgA8vuXnpcT2SniTWycVBUjjA6uASGmaQp8r7cmdbwkzCBa5UYNcGEKRTQXvHJiwksn8fEnu6",
  "key8": "2aAX3KQ1beMBfnmm3Wbjj6AtAiHfJrw8GhQRUh7cjPkLQHJy9AjGwz1NYQc2R8zsWXbvPFw6PEm799h7aTT1fP4g",
  "key9": "2h1WF1oGQ3f13wzn62KJGChNHBYkKFKEoDsvsyBR6gdCmsUshZdqNF7qikBHBNX6wrRJXi9BDGrcGgtioWSbQyhk",
  "key10": "4TFdbus4sweHD13QJvtDmE1voHxCffNdtz8QABCBLzW1XDvfL8FKdJmCTY9ejzqJBiRmPmpMW2wGsSuGM1i1VYTs",
  "key11": "5pNRveM72yWK65dRZ3VjUsgbNA7Hh6ZT5jTwdHUgDuqdugdUYYuZRDPWBiZEcyJ2SZcuwYosxfz4t8qJLFXkMtKv",
  "key12": "4hwmyYpXrKrwvANXoaEiBKkUZL7JWbaasjJg8JHwxqJPgdyNWq4crE9zfUPqgJ1APuy6AMVv3Xj9uzv8dbWctJ5V",
  "key13": "3D4M4c3qrfwtEvnMj52DDnM7YRZQM19w4US86vUzyYNTQgYEQiAit8q6kMsnZB9EuwSoxW8B7Uj6bDq5nPDqgL56",
  "key14": "2rQUWLhdtFUNgiG84LYvZG8LfwAo1A7sGWRsTocyJPBDj6NN13sKWcQLZirzMFYUjds6jnAWi7DYXe3hE3rKNTp8",
  "key15": "2pAY9Ru4JpLKrTMSpRr2T2Uy2LueUtAepEruFRg5ZV75SkDkYnUve91asjxGESvbQQovpytAF8C23GysLsidAfNC",
  "key16": "4v4gwtLey4tX7qAU7TRj6MT4EpeUKyRUp5ZREsGBJkFv7d58prF66sWobfmdAjDK8nBmyTDtohzWhdCBPFcrJpJS",
  "key17": "2AxU5fKRBGnfHXgveE429pqQKq4pRHAyPmk9WVefQ1A6hDV6HGCjggmAZBJJtitF2h45RvQH3p1z69biUAVpyRyS",
  "key18": "gAkWPktSa3XH2akkKqzwG2WKDrdcfAEtvCbiX6yXYpLpfo27RU1MfqRD749DEPcNXy7h3jeAJHfAZaJjbiGRRo4",
  "key19": "2WXSNw2JC9RPgcaijbpCoR9SNjh5qdPzEgZr3PTjbeXtEEnu96LGFphWYeT8f4cS3jJEquyiZQ9p84kkarEpWUGQ",
  "key20": "3NzNc2Po97SVsQ2KPKNgCmLTNRAsn5RSAHtR5gpdTjCDXCUo6SkTrZHHr6xZbXYVYTJQ7YbLFJ1iWptgNgCyvCqu",
  "key21": "4d9MpYXWBnekfUaRwwfb9eDEz5oewfCGHw2jARiPWExWAyKZ5TpGfwWxRjvd8cEkq95EkXiFJgiPU6TsQU77GTDf",
  "key22": "3TdBMW3Yzw4eiZpEs1bzArhrymSA7S47JV1NmqQsnPjdMUMipHhBnBWJFjJ1UBGMPZy2SzqsiguZNLkaQEGv7M8k",
  "key23": "4b9NpbQ1GwbiKBRpuFsmskytL1GcMj2q8euK879nQYJ4E1ynJcgaLyZDBVJ69kkUAEyNmCuzhPnkotc3dZyuTtxe",
  "key24": "2pZ78KB8KFbQCoASWGWkiaP2C4zXKXp4QxWynpkgczTweBb2LwzmHr9moeUTwniy8g3VdcGSDAdtucUt17WF4FWr",
  "key25": "2Zqx6f1SHgazcTWtYURM1kaz8UGgz3poDBD1BPKSDLZu8LMR1P46M57JQT1EuzK2jVkKh76CgK3ci2f8LTnbYfjK",
  "key26": "4eMNz5UmEGiW5uvvKuv2MYFb1FcrxKQbHHigcbFvdb6RazqyRPz5FfFRcovKA8guto4seSJxeySYXghdDbNxzQAS",
  "key27": "5jBCLYEzSFh8Drgk98BJew8eeycQ85yAXXwaVTcDPouSqSN1ZjycY1G49iQALFTH9jnDhco2csf93SmJeGQGx3wa",
  "key28": "59SDTYUJRLBvrptnMTJ1q4VBpZKfRzrSX7UFg7ZASB5euGajXZGbfGFP4x8Ga6rksdMFch47NcmMX5o5M2tFofkJ",
  "key29": "4vxEHYznC1XtCMRBeBgJKpYbjCMY7ggSgtKUWePhB2LUsr44d7AbbcoqxcnbxpSRxsYZ8bKprNDSFbC25yvd6Q5M"
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
