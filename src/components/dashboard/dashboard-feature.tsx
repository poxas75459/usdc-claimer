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
    "yuuj6itjNud476pnk6TGqnEK1Ncpc8z8dPatgDxv5ieRfYgtqx3WC6K55TobaWWgd4QvTvodSYTW3xGj9ii5pga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XbgXHb4Sr6hd3MJ1Q1fMMzeKmLtUtRMzmfuXqxYrEyaE3Wr6BXuVMPkzaZ6nkLrvM5HnfHEEFceSrSfTSyzv2M2",
  "key1": "5TSKBYGvwvW4nTrSLEYiy4RP9UPmSwtvysJvsVs8sLL2aqfazrx5TcejF4RgznMgKkjYcp8Mgs9SbhJkrsywWZXX",
  "key2": "66TQmHbzxhZvYmEjFnvdnJjiuUhn92GywgR4NBYXtv7pbPLjYeuLVCsmSX8qDLbrAKJFSzgd2qPjsFUutkQ3bzkf",
  "key3": "5o6iKDAY9HdsEoMGysb6hsEJpb2HY3XSi7unYboS1Nr13rCYtiDcyv6L3QC7kKNGKof1tbbKtRJDQ47xFeN5Thfa",
  "key4": "2oWQugKQQ8Bdbm3yBr7T41FMXzSvKfX6HFtyidwvGcBwVnbJQ1kojva3hezahzE8W6WL8wyAGa39tyiTi1zRHJXy",
  "key5": "2JPMTAcbueuYefsndwpmaK5j2eVqyyyVbbL4Ap7gUhRMgNg8mbNJn11hQDAmvq9ZcaRuiiSzkycPS5XJeLBhvShu",
  "key6": "oUcaQqyWhaafkktGJ9fAY2RnzWqb2ndfmzAugLerh7xziBU5agCKeGWys2P31RhBsim9MdK8SEnBQtsxS1XSa9S",
  "key7": "49piXR7dkESxgyYNr4PqWWFTazG4WAADMWSXe5SH2ScM71zrd88qEMaZXi1E3xCWZkma2SNuR6XzeCnXXNG9o4Uf",
  "key8": "3iyLujMtXkC3f4wnm1rv7fejpLeH187ThAzT8kfMpYSWBAeL98UXjLufYpj93j87DiXSGx8T77Gqr5pf6HhsKNKn",
  "key9": "4v5HxuoyrvZM1KFrHBdvKCyt8aQKNYqupHCWux4YMqGDmTx1vijr42C2CqAuASDnVcB5bzDFAbJKHGnWwiPKRZFS",
  "key10": "65UXhF5wPbBvkCnzv1VJfZRQs4Sn6fLg7Ssf4WerMtyvGZcSYYxvJxaVQd45mng5ZddjMTFJPL9hkKvdKuLhyRTN",
  "key11": "54j38wV5BdPFaEuUPe5zVRrUeN6M9VL6w8yowwss1dw3kaCDuPCJjdhyX2wdxTgm4YXXN8mUGqWypaHFBNvw1NLQ",
  "key12": "3WY1bHGPs7UwGW1CeKyJFGwf25RLqLj13rcdHbfWiy2Q8nnSV9hWgty4R3a9YAn7T5LBuPo1h4CRPfC3YxGjFWhC",
  "key13": "2LB9Nr8Zsv1W16xrRfgVQDU7uxVoeQSEVmbpgFDZHSjJ5pNDxGqzmsUfTxdRbvfvpBamWnixeb9sDuQyCsgbnBWZ",
  "key14": "5xXqr8545JSkCHucW3e5SwiejyHE9pBvCtyN9tATEoy8UDWwa8LQS9si5MSkQNntAn94jxB7t1jMpd4fwJJevXT",
  "key15": "5Vu7nmdtoRVgNbu5c1zfJPLJvJqPW9sGpNtJSKkjpqe1u7aoYLTppViKuqUaUvpDVUqLjBwMqNFpRKpmhgFQg9ZF",
  "key16": "4rPaGaNTjZ3KuXiGaiPgkKWUuNMiZmdP8LK4CERwJHBFVnZmzKndFrUMvjHzRRPRK98QRaQvM6zhN85oo1TFo7Xu",
  "key17": "3MF1DuniZqWJ3kVZkSaxqKJaVXULJ6G8yagqf7UmWxmYXRCKrTiNHNLaevnkxGBeNjxZxKQHUqpJP38fe9sUMciz",
  "key18": "35HbU5UkhFs1JBj5Z8nHhQth1MHYtkcvktW69goS1kEDX5PeShFV2367HbkxGZKjwVvsR6mAp6U3c4PVvqPzg2J6",
  "key19": "4j34YDdwSvy3Ghr4D9koehAPuXyMH9JjKy2fCnFb9pepzcWoBgfCL7EhLZVpQq2HCU3fL1gCZoMRDGdqddnAnnkf",
  "key20": "2MH95MXBcDjBW3u8DjCMAWQoYBpsJvARrPEYwohpVFgsrmMVFHUDnTrJAfXfXeMAU4jjSHkvMkcpYfZCJWyqZdzK",
  "key21": "4CxnoYj8WmY1kf1VNdf3GAEudSvr9SYbaYU6NcB5pYjBjZoSGYuGL8EnK6XA4CLUPaWZ96d9oCcCSDM7EY19tYQa",
  "key22": "2GyDLbrQTsHYuR8TdgTqXt8CwRouEbB93HAWgHj68n6QdhstPtE7cHUgL51gCuGMn3vjzGdb2MLoYNWQVUrwNigc",
  "key23": "SC9M43v1vhBGwcDL8Lb5Eco3KkaVSphmJLoRaRZRLhk2NKmhimJcGPSTZMKXDte8K39ij5bgjJUYDE2iYoKfqLs",
  "key24": "5ePKGzXq6s28KQkxMuf9Xvs4HmHT3hSmYoSkdsJ3aESVB2TQugq87bLA2ya5jCdZMDzXYqVeXguNxipwB9GWfshv",
  "key25": "4vc2XXBs8RqQrzi8zWCRteXhoyDfMSUeyVG8w5kV6z6LHSRNEjuQmXf9MANspLVeDDo3BdrwxYpgZkNaDG8sULo7",
  "key26": "3saUx2KkEszMCfXWmzSib5dLXGxqkdcD3Y2JhYxKzUH48uEoxzMCFRT9MGXXquVEh6aYcCznF9f514eZyYMSvf5d",
  "key27": "3HCENfQ3Fdk8eRwv4bY4Cc6h5JyEWcEz1anUs9rVWuCP6yXmCBQCJ2pcqiMaC1RqY9LfRK9mpQ85XpHDDzTjxEcG",
  "key28": "n1sYCZ8jgui6GxJYXf1MXaj6WsRidnaTBZ2RhnbgvjKxNdcWZJGqR8YZgNe91Kcge8pN8WeffFr1VRUbVqAzTT5",
  "key29": "3PudhQyL5PxGvgJkNtGxvpD8pPsCSTFnK2bjcgrMFfCg7VPt3rKqZyxqorrs7E4oMwBza3FC4HdyhJjsgPjk5hL3",
  "key30": "4M2ixvHCsaYHiSdPgRSnNW92FXVJp4BX9EUG2EnA7JjfqNTUmXStXjYLBbjmXgX7tt7sSYactiLov4zYGpkGRbzR"
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
