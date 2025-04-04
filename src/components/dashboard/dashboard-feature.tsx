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
    "5XBd3zZ3mqU7ktvALj9zEDktrxnmNEwYqiNokqjzg24GnXNFz6QNqAd3A3G39dEySNNfvm6pV3waFuKeX3U9ZLNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23JhGGec6Y1JgLpsDJDWdBoqm9nV2ULnvScngRQmzKRyrhtFd11kS7LKPzbPUyQjMgBGECqKHYMVZVuGaPneZ7Mz",
  "key1": "4dfJTWfnkJVencfcxGTWyFtCn19FWaMnnGDBCejtSZqBtdCNsRVszw6sLTux2hsfkC8V5fR3hj2ayFi8jodCGDjU",
  "key2": "2uP2Q913gpo5ohFMHuBfHX6N3acPZ1c8LmxpvD8eZgzb58j8e4mAQUwfmhxz7CSN7qn43ig82ZtTcXoPARBp1Jma",
  "key3": "1VMsy7YodTLVCxJyvXGb88KA6ruxKnvLR79rYTXT9XqkB3WD1AK9CQC489GYKL8xDNXMMLrjx8MpuwWHLaVrX9V",
  "key4": "2LeimjvZhX1qKgprouFM8xGmgRTVpv5rEbFBQM8ESnEUnGEbRwbRoaxZ7cTT11t44zvjvMufCZp6XLLddvSbuUyb",
  "key5": "62376c7P5DtFUcpB2HTUzts2jb1EGNPwQh4qEQv3nW9u2UY4dBo9dmGudAcvYzX9RgJV1VRPJrS1MEVGXw8q3pt5",
  "key6": "D8pPzub19btcEhjvXVwHx5jteyua25FLR4vS7oPs97iPv3S4LpWgDe6719n5q2dAmx8mcFkQHJQ53gQaARSLWtS",
  "key7": "3XqNaSypM2rfEFrw9fR1gXfV9GHQfPQHJpVakEC1FrQCNTaCsnTkr35x6BFaFpCaxTPrwVUsofD8Q1PMALhQA16S",
  "key8": "2y4HNT4U8YJArgV3pEYNEFM8ggiBkzMPvLZmdK75p9iNsQj6zCnfjs6JSsjoNNYvKb7TE62LAWk2CR4xrgQK4qsk",
  "key9": "4kR9S7EkATn99JVD8jyccTQpnq5vjNTxv2cdtKd8vnSKcLWvasSz4PFEWGUzhqY66MnNda9WorXd3MwGyWcWMyje",
  "key10": "4Y5YM7axRNPa3R6NH6fUTcX61xvDXFLuVxJ3ZgbRQZDymBPQ2MugLC84z1HDKyWUe6qbidkd5k7vTBRwxUrmRD1T",
  "key11": "7CrwZ4rBtZBepaLnTKXYxX9akKbdMF8kQDYzB9pXMR8L85n4SZjEoN44uN3M9WEWcVjgA5znK6FzSe9PLUHpzMS",
  "key12": "p4z916NsGdpYY63ZThxkKmTd2AwXxsg4y7qsrFLjHpvGHgXFSuebnbSBx1MpfEaVzDwGkhPK5xUrrhczRGcdXaA",
  "key13": "4Fkbymsyp24k6BhiguudqG6NtEroKqPzMgVCxTK63MJ71sDeC8JVneUepb8FP8i7rCtXfF65p62sokVaDiGKVuyj",
  "key14": "5PANFdcgZtKReBbNCaL4Stfhs8VvbS6H5nJZ2AfkdjN1q2rvLxtZVnGSZGcBGLuXRHZm7payfmJT941wzDtVqbvt",
  "key15": "2J3dkno5uqB6niBXvrNELz8xFam68Z8Auo7XCkrcbKpfLUxqcgxYYooNHd1odugEH55RXWQEUfkxrendmEMkuFTJ",
  "key16": "2kgCR1T8EQCWDGFpt2R6uFMzBFRG1KC4NvQnFDsJPCz7qttu2mJe76s24pnd3vwPPJ4FvXeTFwbtpgAoY76nmz5p",
  "key17": "2mYZ2rBxq2NkFd1qxpU3GNX7EgGphXKUYiEVCNix2KEnyZgHFrBJkeXif5ij55xd6ahF7TR8VyyQDFtqLU62wYGp",
  "key18": "59CZRxHVqETMhTcHtZqFxPMbSWd61E4572Q1WyvGTxwTUZ465WN6wPSkB325agh61sqMEexxAjkd6rRTmqCTC8Bk",
  "key19": "3Lv4bYB8hJoBpUbicTUjhzTRtwWk3dsxaKSZ1e5tWqFNhfm8zhDQhsmNxRCXqkPoSeTS4APNvR5y9e2msBKDHJiN",
  "key20": "2w3fHfgW4rijPxE3kHq8f6posR2LqCmvqoY39jVzjwm9YG4E1M4FxvSEcCT72AC9kKemPxoWWGTcLzBbRGQUVAVc",
  "key21": "4wh9Kq7M8YsJCRj4BADXkRuSxSBnjF7CM7JidnK67D5LoKW37bBxe8Qk5zSMbnbLSEF3hcV7gU41493pFHbbqf71",
  "key22": "r7Ce2trSdRirz7iqnyVN2Eb1HFEhwrrNZ6BqDk5paFji9ewDrdzzANXP85TYSBGi5JvVse4qqHF6WkiqQWXEqwR",
  "key23": "2R3wozjxizZFxFxpmY1i6mzPK8qoeQF7ceSCqN4g8UnaAp9Sw2QzSuETWaqYaR156jnRKVZJxYS1pmYjpjRJZc8c",
  "key24": "4jtdxBTCrx7x8aCXhQzjF5fuVanb7h1Tyt6PZskT3bBxaFDSbp6k8jz5vDhiyhRucrrhGFLDaWGpib7EyWNBDhZn",
  "key25": "29imx8ptfvMDrgxSow1yEBinxPR3kFDafvRykecUYBJwDWksKyK1NCF4MRhDSZU9P45f6Vk45YSKNDXFJhtaaZdK",
  "key26": "2TwatKzrDYwSxSgaRuyizn4qtQeerPdoenESWSqfxUVyYPFJUv3Pimwx7BvKFGNw9HPWDNb9Jg5PgDCNVdY5RYyv",
  "key27": "3ByZi9598FjweZQvjutaQemAYBDz4eFA8KEWQe9ZDyMRiUirTAJteW1wc9CJmQFkk165cpiMZta2X4CXZECRpZb1",
  "key28": "xKDKLJXomv9oQFUGRuXesZ4bnqKtJXGCYVdGHXHUnKu6ayUyHD3d7bpKWcDcmSHp4cg3Vei7XWunzycqMyVkdaD",
  "key29": "4B8hnsHHcwamVB1UNF69Qt5wXQD6TsKW9X4hp88vBrL9Uxphz1CeNCWg84hMKy3Bh82HDVJBtzWArtGQnyZjKzgf",
  "key30": "5Tc6TPCZY574TD2dSSz6uKQ62gCwAiR6bbYTsMnFKt6VoR97BP8i4n97JUf6FU5fcMRaqbHJqj8ybFxsFQUDNj4G",
  "key31": "33mKRH4jYnUmi6tFZf3xqpfkFuVbYkESfpFLE6G3EmN97wFy7KXsEMJG2imxdghV2imLHfk87cwJbkg5xGxPgUaf"
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
