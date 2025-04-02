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
    "2ZuqVfmH3D76Qu9qeuG1RzRoga7tXLSN6Y2Q7YCNuM4AbQTSf3XDqYfMtxxUqkhCQg3JLkecGk1EEKty8NvqL9CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fj2YbNGbw13R1PKqhFX2Y17XiZB6PpMRGfFfrJzb1ApFysaxooZjCtsd4btNDRcn7mecYgedwGQPFEgYw48c12W",
  "key1": "3wUw4YUsNvQiswcm4qhBatxu2nbZrmJykyQxYu3mwHAN1UoAQ5rxASBZBTDQCRX3yfDWpmfuGHrPJZf7QLStxUz9",
  "key2": "yH5LFKnbLKxPMyiHkwkNKWqvN74cK5PgCxPmG7EAbHfXH6US29B4xwrFCsgXu1cDCFiCy7EDjKBFntfxKaUrgGP",
  "key3": "5uXY1UWwbVhqkRgeDzXYGPCFeGwGUeqjDvYiBX5PvVxFWo4w8Yj1BWwA82mMhAN24FQ4u6pLmc7Bt8tmmdSBWyC7",
  "key4": "3RneLs3KR75RVRdxRrLWnzwvEE9o5Pk9vqUp4k8cthQH1LJpYYwQUBymYrY7NHaPCpreChDjseijDtzs9R4oStK4",
  "key5": "4fTTNbvDuDKUHJhy7zXgxfYnrKkTkHA3o3GeqqxLq6MM8jD4zuBaUZEhFt1JRM8dLa1FbjfKB2yuYsAJo44y5HJH",
  "key6": "4y6Kc7tW12uktAAdwWt9LYN9Uj1TfCB275dJY6zo8mTMxDKPZ4NQNMd7FbmzvD7fYCShscy5Xn7b5C8ZeBCzorVc",
  "key7": "3kLUG2yscVBiGybLaZDksbqfwpjwzBnVdmkmiTCmxVos4GY1LEEqEmWHLyeuw8PBAKbnhMzEnufUGsVvjY5sJvE",
  "key8": "3Ta6ogg28uXjBBmMArWhxX4KzcF9u3iSpQhW189FacqfDDYyouGLe5wkoR9nGpFkDAG4cRw8AXCuN6qfoQ4neEdw",
  "key9": "3Fide7m1XQtGTVsBQQf1vXJJehPqVX6zuNbRTC8qTXuLbc75SmQ3D3stbhuaBUU2Wn78SrEEFuMJevTXMQy7w8tC",
  "key10": "5if2NbP86JAjvxd7Sukct2MUZU7U5DXhaFbB2vB4QBQfLqMTm3ACV1nEnXj5ogucuzKGPPtR46tfvKC4FTb5fPkL",
  "key11": "4j2CJyQsFs5UCUX2592n3nQ3vtpNvJEHQnK4sxsqTVtrgE73WKH4nD1sDYcTNU7viyPjcsAnKrUjGpd6iHbUtmus",
  "key12": "5N9EvX5jMERkU7wBEifhmj1JYV5RBPJMbtNzPuqP7EtR3fg4QbTBpeLBg21hAPhxuVqYSknYZQJxyqcfu1vqs8mC",
  "key13": "4niFtWggHgPHqaNjMjjjvBfboxgGVTKgPfjsGkAPEvRwxmGU4L3pimZJnPvqeMNtiuuD6JPkW3ysjJk9C6Rj2BxH",
  "key14": "39Z4NAEpKVcFs1CY1V9615Yrbck2FyRhRmrNj6y9ppHoUVihNGmnq2TVgqM48ztt4ipMvRP7VPYb64FicZEFxy1Z",
  "key15": "5BA5WUnUZuHLeFryTVUZ7oHLzaHqTou8L86JWnhbM33BNZt3J1Qe7zh95QqhJLF8Ao4cV3hDoC4PLHrNEvmc7hXu",
  "key16": "2iAm3Gf325PBdC8DGueMmWqJhkCT7mNBijAVRbA1DhUrgNgafsKzYsyQeMYwMZTTVPAvQUPN3ev72RUZYbqWfh1i",
  "key17": "3Cq52UndGPrEPXTXGTtMUCLdLDSXSPuhqVrEF3UjQbnSg1sraevNHKTyP6S2sjNEbVeCyiYEXrubo757bwX9KCB",
  "key18": "fjxpT4vPea4oCyggjdoKfb2JCqn9qgLtFudW5fh4Taj8WoZVDVQ7Qphvp5F7NoL1LxoWmVWXsHZ4XYW3EHEn1C9",
  "key19": "4jZicvS5jSdHvm3zqeinXeNaK5UTAFehYGV2JB9GdBdnVzzjj7KkWbuHT36UEGXEn6A6an1cY93TEd9iR4WDJJZ4",
  "key20": "AqwctqvLVNdErsCZzd7QZ4Af4DWrjnmz9JF3swEuvpcA8kgSEXpctuzPKC7eGvtwvL8cLm8Sn6MC4DSjoyBbbeq",
  "key21": "8nfHEt8MLZ6VJMmCAx2Z8JpQAgThyxXrdTvDPcXqKiot1yxpnmStdZchqnkHiw8owhb8nGY2bTomcqUNqgyEGo4",
  "key22": "38NHWPBdGpbrPGh24aizfXEKy38V4KZK17uzfBeaoXrSFozce7XSUuvyp2h4ur993GXNNiN1hGSCfKmdJivCc6TC",
  "key23": "21hQRDohfosLpWX7Y5JSsTBLqk6iJAkfEf66dM1hrCzqG9hsKhPv8TAZDM6ocNSp5s2affrjLGibYL2ixpmYk3yj",
  "key24": "2s5FJouhNVyVtcwpHU3ghMgrNQbs7vez5VWRVQ4wvsa2DHYHnjTu68HC5dCYUNRho1ZYs9LG4XXz7UK6MfH8kmtw",
  "key25": "583t625Pqi8Mawz2QqJbsCdv4ziYbDou742J2kULbMm6bUmZwbRA8Jc2m5Cd7PzxNRqHPDTnYW74e3uGcHWqJREJ"
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
