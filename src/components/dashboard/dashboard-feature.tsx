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
    "5Gn3DtbBphNMLgjXsDD32qpy9aE3xsrAQbUtDqYdKU9gRSkzqmgEE83TwMdnk62HeRiz5HyYjSzPeJAvvAT12hkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVXeHn2xewDrC77GmtFSEyP4ShU8poDQCJ4ruznPDgKHiiwDW2vwUqUXRfQjqqghhHKY4H8mTkMzNTrcvpVv8Xg",
  "key1": "kuRzP7KdAjT3raXvHJBMAVa1W45TtHKSfPHrvoAGMRv6yPY9eeVWPsCR83AGcTTissNzLNJ4ECfV6cGkGLK8iab",
  "key2": "2g6yt1T1tVYkMLPdA9qfifMwLnapUSTUd3dTVu1CvCNmSR3FjpugknbWTfTYYN5uNpNRWh4RRLeNjGD26w2PezwC",
  "key3": "3DFoH3XqshQB52aDaMyXY28T4t6CWYTTbca3RkeUhNpxuoiY9EEyHUYM18RZp5FjNrmKMPSr2BUqG2yFTHjmgSkG",
  "key4": "56mCmFoJeL3JsCK9RQoUnpgoQ2Rfdqg6NZUEe4vgvnjiyNKBuP8SfQRwrjuAy37qvGPjmGGi5n4paiyVyhd96HMe",
  "key5": "2pr38gr1YDRSBUkW3otxaDvBupUTGURjd8qtpiAKSb9epun3uEnToNasPU9adMDY445UNyKLWK4MC3GL5k3PxXY",
  "key6": "3AsKkPj31BJE2BX4p1Ke5VmQ53SyHLf5eoNY9BrXKj5RgJrJuEFPHbJt65gwmjAezN9TD6kMbHbbSMwbQWVRVEmJ",
  "key7": "2YTkSdyGcG346pQR9D9cPEBb4Beo3jt9DH9QkncacxgEdtyewKZtZxtuaa68mH4zj1HQGuhqJ1FzdZ1c41hxy24d",
  "key8": "ThEVZvKx8F78xPokkhmg5JJBT3PKgfyvmubQh3dw5VJ6Vbgk4exBUG7qM5BpQPH1NtJRAGXVMv4Ke9Rz8YPSLbe",
  "key9": "5Dqmu65k6dgRs8koGEJu1rL6jLABTUK4s9GaoaYXMZg3JkN2wWZBYR1UUKw7nyFpxz5cKP2UBVR2bZDXRqGdvomR",
  "key10": "4BorJzzzB5XCZ8JzyvyHVnpFk8sK7WsQevtPsvKdtjkuQAdbKbay78JdqWKSkmPkGSKYsKsutMFznooTjGsMTCQ1",
  "key11": "25CU94JNgGNKuDL7VLNJPH4rRPutWaxUrFBpaxYvgAWYk4ZRQqMfgSH5X3yDUHrBZrSUTTQmBLdjm9ckWW2x6jMq",
  "key12": "4R5ok3VXF59ATgxD66XtoASE3LZzV6oDZwa14zt2QfrjgjKrzVoL1QdGhMWicFQ8pPKLcWcRF3evqN5zxYE95ux2",
  "key13": "5DX8pdnqNxhMyPFyFLxZsuKEqGcBFXbn25btqqVRqqFPbLw2oL7u4vCZbsGU787jsNjSnbowxgEGYkgLLaKsbeXj",
  "key14": "33GNW6Di1S7igMmMEkCBJb7sWyuyZsyGgotsDVxqs2fJ7bVCwjCtyCXasWLjqeEby2CAcm31YFJikgfciKVFMQ17",
  "key15": "1RJSSpZxJbYVGxxtozVfF7PbQ3ey2Rhoromj3AyQXsvSiCVFcQMEpaBYyPE25myEgTBJAz6HgtXuPr9Zaw18ANg",
  "key16": "3Bm8HEeDNEgXZ9FUM2rhxATKZLdmFSBwRCJN2FDgcAqbLc4UJes1AKiamC8RkqNQAJr8vsJvymp7VpeqJHEeCgfM",
  "key17": "MW9UG6jocyCqNEGKKUbpjWQ7hNysjjKrcZsT9V1jf8jUEyEZfozC46LBXp1uDZEACJ3irJvfFUhSwm3XTyde27j",
  "key18": "5fnUaJN7MaTX5BL39YdfTBf4CKRUCusXC2EWuS14mPE8L6gjun2FtEkiXhvxSiTY4UoXePEfAfk5cy6wKs54U4v2",
  "key19": "3bXHajd9VBPiDaJ9sdZ3iEV5sEGDfiUfBACpeGbZnZQ1Lm6aktU5bwCZt89QyJXix4imnxo9hydznQesk4y5hY8w",
  "key20": "54Lw1VpYkgLeQ33S4mQLrSazei33ZXH34m94PY8QBe4kkLBGfJnPkwairmFU4Cz31WdoXtRRSNVoAJ976GejR3d7",
  "key21": "32rVh1cqHPk4Kcosze2uqenKhDQiPchbn7rWh971VLQ7Ge6UWzmbGbnw4X4s2uNHUpyevRYwmF37Z2Zo8jhxABxB",
  "key22": "KqARcusBYQHGm17vTD1amaEBnAPezQFMpCTkUWdFa4qgYtuAsbNrQaNVAPz5Yggb9iPtXBnSn6RoQrRAMuEigV2",
  "key23": "4mdhFC414QDKdwoMvpBFZ6URYtVLmDNmgqgMRQffvatm7fLn8gPz6zMuvkaGSc4iM1UkPqBo7gJzidonRU9j3Xo2",
  "key24": "2NhtdF6jG8P6C1FvTLfKg7abbsWk6mrkTDkVc1quZ1158f13S4AnE9a2fKnJ2siUAYT2P675cqmfxNknqf48YXi6",
  "key25": "5rbFQFBKUQSrDfK8sHBZEHwZW3hNEUiYSw4VTnKvNwZBkspX2FZNmHmBGLhM8HGDHydELv8ndTQwa377nbYMdtRg",
  "key26": "5gAzWE94tYY7dNP2JsyuyGpoYmcjSDwobVLUk9J8i3Cq8f37YhsKrXRXsi5Kaeob4XdDG3jxXc9sENbRxQw8X9Jv",
  "key27": "57CfMZ3QSgPMdYxBLHtxxaHT9pCwUC8fkSRon8MZTsXwTAa5CQxnBdFXkbcHf4RD8PW8QAvWM3W5xWPak12kuFQv"
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
