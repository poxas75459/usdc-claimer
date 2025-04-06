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
    "53LVGhHC5mMvttKenXMVftkxMJDCNeKf861uDnXpsNLFphT9m9RbFcwpdDpvbYPdGvpaLe97VUbjiR9LJr8nzWnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGhnxt6gjFQPpZYZd321VhVc2x4stjFREKKk2ZC74d5b2MENfESf9otU36Ny6dzv1i8iV2WoX2wUTFtPEaMjDhB",
  "key1": "2RxbfQT2ixGMgHpvx7EZ4cMeupyg6yypoY3fZxzFCY6B6xB2s9SSRzzGUkEYCdZC1xrjB2oJEF1NxLdv3kfb6U8r",
  "key2": "2LJWnup5n5oDXdZSySq7GC6iakPzHo4iTekf7cYU16vUYakHmz5Q8eyLi3KTx8rNFU1Eev5zuhUVPioHawYmVjR5",
  "key3": "4H77StwcMRmYfE3xVXKfBLenKR5hgcFdgJqcnMkFDYUBzBDPqh4uYCsc3uQa57Ukv5wEPywAArrG3a7odBhJ3Q5f",
  "key4": "2mftR3h18g3c8sr9UPMUDEKau29iGMq5tCQoysjaq4KdwW9ATN1uPZgchuZKJ6PYQ6cArVf89T1LTjdn5YQtKpia",
  "key5": "5vJ7w3ENGJVccp931BAGg74Cxonz6pwvi2kXuL54ecu1KHC8btm3jKfh6L8vW5VJ85engRcTUMbko4vdqnvSEFwJ",
  "key6": "swokgSgAfnASATFPt4Z92Rv6qCt7jWAedpugdoZAXJXQDch7FA8tYsiAwLmYnk6sVhvQLNoau5HgxHyghyaoUaK",
  "key7": "3B28aQExh5euTFnYmBMyqgJ9Uoq2naY3gsQ4yEpoTKNeL1Rzoeruy4SuMR9ssP2JRoHKDCmsbtPXimx6vK56MrdA",
  "key8": "66Ucj2oFqUbwwytjA75Hrkg6vX3JMdWPHPPKM5xYBnVJqHJr8dUJAZAuw7kHB4xKsNVCyNih8nyNoPQbmNS9heVw",
  "key9": "FgZgmzDkroB9iSfCrjggtbB4zN5fPc5BmqT6pogq2oH1nJ4xto1T2YXejQTqBm4VGsiuWrvDvJLDeKMMwDam5vk",
  "key10": "36TpDGSTVrFpgrJLEAKJKrYbK12JDqR15X5GeDNShRwsMaXTh9U7oH2ezYcycxF4PRzE9nypp9kCYwf8bXWSzwm3",
  "key11": "HTMa3nRCLEAhqVT8wGAb9bCkunDML3PRWVE7eQFRnnchsdXbsdJhgtChYwjnbqYfJYjMkiaoEQqamyPTAVzM2Me",
  "key12": "1vTRQSSk7Mg39MLbx98UBD4dPWtYTSr24LpC1AQnsNwxyHjDvtCgfg7sPdfFhv6qa3fbAZLEZqz6xGfNUMHmgQ4",
  "key13": "39o58scMvoEhhRZdxP9k7cV3iEQ1uTczF27mRnnbd387zLR14WQX5dHaaaVsfpPZc3RHsmAhKqyjTBhBmjTfZsUv",
  "key14": "5usxm9dyFuFeEaFQ97UN8UKv5dEFkM3wYEVP1aUPq1kDnKZSEa6bv6RNfq3sotkfpekMCyBE2QU5DwNrz8h8iPTp",
  "key15": "PpfrHFEa9SpvhsAjgdsEGKaP6Wczog1dYgx3ZNuEaDmcqFAfUaArf161HWaZrJPFu7MVkcPk87zgWjugEes2kKc",
  "key16": "5qrzvhoJ8RdZHFBVHYKNPzNNfznX91EUzQimFR5BFLZ6rBMy5uRS6veLPoQRJNALFdsKfeFgHVanNRWTZe5f8JRP",
  "key17": "4poypYq6NBuw3d9WFq2MGmXJ59Yjzari8WSXqMdjFsXWeLZ4wgbtn18Day6Zx2qfjjo7pPGe9wQqxGcCXzVpuNj1",
  "key18": "emzLvsPBmvsRUukq7vxBQKxayD2GW9ihz2rpymUhDEtVqUEuaeJubsSB9vHvQwwo3DKfB5et2f8azagrVPPHQrX",
  "key19": "38kHWFjjeEdTqcSyJ9HYeHeB2ey6VzJPZeu3szd9U6DnCcDQZNygT1bubGc2EBMFTXEy3KmQbcCfZk2zwP2mdcaX",
  "key20": "4y5WwBWZvyzTb6wcUHQmk75Nj5HpRmxLbi1SB6GaN59vAmJf2mwcjZr5C9LR4UVqTvVTc81Nwbp3xwd2fEr274zS",
  "key21": "3g6GgCW8RWbW7Yt4fPyxt1sSLd6K9eHY3pgNimfJ71z9CwwvxLiR4bzRfvMfkW3Xj6TE7sfUdvGUHRLUchYHgTAs",
  "key22": "3Wbrn5xUkcpQChihNgmUEoUzFdE6khBSJYRAcjxZbkM4wiHozowr39y26rogz3goHDBWxZVnWppWW9ijmMkDjfrb",
  "key23": "65Z5tgyawcMmuRm4a9LEE4UBRSkwG1z54ZjRNphLzAGkVQWioRZRRefXSfuHFQiYtFbjo6hVGPgU3iruyf9QrzTn",
  "key24": "523ysaswQkfVNvqXAHkGU1H7t3TkV1q6BK7M27Y81gkJsbenEVUs7pWCXykcm4Us1nyqqbTA7GmmWsAZLv9Fe78K",
  "key25": "5yD7KBXETPvAjXKjg1b11xbbYfCnJwGSZY8nXcCZwWZR7mKTeuvkP52Frou85fKPf9Capyx9zy5HE1qum8qb2HoW",
  "key26": "3vAs91Cw9hXAjr5NkoVEu2QuucU4VfSRCribzu9gHj5yvb8rWwfnexar4Er1MgFwqYbRspxQ1SMNxB9r8CGuEiXU",
  "key27": "5jvf2Rp9RzAkqrCDXL7CSp8rgnUpCF5iBmjEdCzmv8Nut5qxrKjHLqDnKZqX12GdKGQGA4vQJHMDH585rTWC9H1",
  "key28": "eWBBvYTAp7CiqE4TZkoyRATgmsYrP56Vp4LdCyZwJJKHTEbDkq6pJBSYSWoMbcTxrb9RhnRT5YYHHGuGXzSDdem",
  "key29": "38qhHzzPybtMSUXznmysKUNFZ463bqvELNf7pQRjZDfoqZ4DanHpcfW3HWaXREhLKQgmPtcQEhYkkGEQqgxK1UB6",
  "key30": "5cvpcW4xwAQtALaREWMLpuXqx1oibtUznLn676FdUfmA6QtiQT3wu46sp7HDMyLbpNR6nJjnawzCgtmv5xFHMof2",
  "key31": "4gFhmskpAT7tNiEn4mJRfDUTfCWDbToKsCPQ8sTkBUY2m1YiESG7xgn9isNQVR4uXT49WQtaXjFrFyEBwjD1zfr9",
  "key32": "5e2Bu92SMecJzMdz8zmiLsQDs5ncKUtuy8Uvqf4ssKPoJLeBMsSdQ7UsXG6RB6PeYcb1T612KqoLfzsJs4hUrEMD",
  "key33": "31YzvxkTFUXzaQeCQAq3kMNjxz7yoYn2hvb5JtvXEJbtaFKh33Dg1ekkseGd2JJXYu352iET9LVKQpXQYrzg5heD",
  "key34": "8u2YejYzBYK7ZYQUWpULrGMMjTgykjdnN1b5vS3WecdhSR3HEoMY6axL1FhtSeoJCkGxhpJM1zbwQUMf7V95jr9",
  "key35": "yJGjeZEtcc1oa9ViuQzbNBCv8BpaJ8Ug9EP4fv2o2HXPAvZg4FCnkup5r9auLo4GeSpL7ShnovYdL2ACbv2GYzg",
  "key36": "2jzEs9moCtxqCq7VvLGSbo5PWawXky2gXRSYYJz8oydTRcrsSo83TnTCbNKzEn8fQxDjKUWR275iQDwrvzhBoKuJ",
  "key37": "imwHEFTfUZem9shZUWdJSiqpuCM7Skfhb1fbCT4PYo4DtRcgSS792kVaSG5Zsc9rosQv5Gup2UjhVjL41pKD1FJ",
  "key38": "2vdFFAVR7NaLGKBeZhUk12Fo3fvShM7MsKMYprHzqDiVjp8FLkhN9bdAXSaMT85AK8kyPnFyyDnNWP3AdW49cUtF",
  "key39": "MhvQsHMRwsy1Qp9ZRF4zEwgWBRR9KhFCEphb2HeLZXaEzZ29jRBznCmHGycBVrV87hCkidJQQ4gWXkErj1Bygc2",
  "key40": "3xEhV6YteWSUwFWdLuz6hZMy4u5wgu5N3oK4HJ1x78i2baymsWqPYYKhtuNWqu8QMBt6Ks7GExiJz53YoyEKKKfz",
  "key41": "3eZbeYEKDaJ9MDQ76SZ2EP6arXawbUAiyoUeF4rBNV1q6SPAzdHHP8Ja37cPDFSBPpv9HEc1pyJP9Rn7MQxVmvAa",
  "key42": "32A8qyJhpmMjyfzD1N12zXFWjsZLn3GmD6MsALCv3Sywg3H4tWs8vqZfXYFxjvxzA4K78djjVWzgcQA8FdvSF9hk"
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
