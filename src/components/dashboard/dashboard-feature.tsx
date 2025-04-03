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
    "4xCXrwhnEqF8WkJATUf2emKxADdhJ7akVPNs2uQbp2ZGQ4REThuKmAbYk11UAeL1ZcWViki2Lc5itH8sxYtgfYfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bADjWpD733jFSS7Xx7nE5kwuLHHyuTtjPEMg2UR1bTLMZsAVuRgww6WKACy9a81T8jGHS6YimMWxEH9NfZg5Sxh",
  "key1": "z32qWDri2qZRgN2toTif8jKCouBQkqCKbdb67szfPf89p2ExGR16PxyWNGtXKWL4pK2a3dC4qQQY31TSsgJ25Ha",
  "key2": "3wmrvK9VJRiuExtwJJ2HPu3t7Zs5bhaz3Ajy5hTMKSGsasSsqjdaTJ1eHPfS7PyNVDZJSo9Uk2XQYnExs4xLRzYM",
  "key3": "zcU7iddeKXQYFCohTgwhrDcbwKAab5a1rJuAmasCudLoANxXiE3wKZwzQZYT3SZd8FdxgVzvXakFxfZrsTdBQTc",
  "key4": "3Enxr9dKbJzQXnn7jsRaGiWcN3HzoebXL7drttGP9TBn2LJN7o46d7BBNXBwcRPRzVgZqp95dEmJDNaBW5NkADeB",
  "key5": "64bP2Ux6u5XmWfKn24naoEWBXCJEuQrh1Dg8GP8kQTBGPDWTrWrJuAvQ88WG9eSWVrKmTvxyjZEL36CNTvr7wKPF",
  "key6": "3DJhrgaHSRMQLMYZVrp7rbbbyWvCUPyNaF2PTDcfLu4Ajx4YvBaeUXEDWt79fk4ddBQb42LAXU9nXfqJ3JWXH5px",
  "key7": "5nxYJ6Q6VU7NBj7npQUoQs7hpLDE8KLvKw2uNW6DnvBJs92qNxos9cm26mrtJT5MHfTfuAE1h4QHFrjeUuqwC9GK",
  "key8": "VnhDDwN839YwJGTDda2PXUESD9FmtoztjKVtMeVWTMzrd7fAwXZDYtu9XN9ygbryhP44R7XPzP2JkQpPr66R4L4",
  "key9": "28uGFgPsiPgjKvEu6LQy6b13SsVstuLcSyoHbJvfrQMyXJYtryoksCab23JihdPo6XZ1cmpQba3qrEMHG8DgTzVp",
  "key10": "3NhZWwRhTiJ1Qcu9SqEz1vX5WerjqYEs8yvQid9R5WZdJEDNnPSUiBvLEk8bpALUhe7oBxTNUVYveFGWWJsVMBE4",
  "key11": "37Tig1Eq5TRwrAoYd6yb8wrmvKCqJKEug6hFW1wMptDWAkewGdJKF7o6wEhodt8XqWYBJ2sjZvn6y1fTYDcEZnTc",
  "key12": "5zr8pupA8BmbUEZtbupKinUYuQNqq3A6bCHDC7FJgMvLzVYtMK8FDzx4qCt9QkbwV64SaALXXxbwGpjvm1SxogQN",
  "key13": "3qYxTLJn9G715PTDwJfkxpFfHVdfLa4c5DQL8pimG9Wvb7eLATNYwXjPgEcXTF5puZ9Hzx8NVWAXkm7vqALzxhqa",
  "key14": "3d8sMVRMaXxL1iHD3rBfMT4xAJzGTsjnrfmG8QQ4PiTNkdqzwVy2RLFyTYvqSZtmbk1fPZGN3RJbBVSQgD5oJKeC",
  "key15": "616kv8yw3E6r1kP7APPs5gzdeFrFKaYmdbA3rwFkwJ6jVbbCvQR6GUv6oaLnHkytkVUgzeRsRjGvaXuu3PveU6eC",
  "key16": "2AzhWPhD2vM2hZnGJXCTNqfsfU6kbmkioNaPp56Nu65gsjDNMWCv6yGvV1epBpgQ8oJv9RBtxoFksG36sqW6Fuv2",
  "key17": "xVh1xVKocgneHaiLjJ7ZaKjvFWPcz8VKXQddkFUcc8UDprVwVkJmkAsMfRQV1PVhX7gbEQjYiPh7gw3A33m6kxi",
  "key18": "URGmHS1MqExwuG7FuJjEcfvbsqBc1B3CxcARMkspY4V1HUe1NvdRLbv4zAUo9dFc4mwJvh2Sje9NvHVwFGU4dzy",
  "key19": "ot6jUhoHPVw1rTPTvFB9Mwu84HSYiXawzTguzCkhhFzY2XwnhUto1xhtwtVkCGjJznpc28nRB1QzsmnKeN2AoKk",
  "key20": "4hxaoZpsYiRfFJBQe47t9X8BiikedM5iBhYrSZUqRDp7F79mPujycfVy6Hyi813e7NrdYKVonUNeQnmP2BMaAySZ",
  "key21": "Ei3bTH9gLtPeZ6y7N8apQDj32t8x14kQcUvyjWKc7WzXhZGrEmcoYX1gqz9MgMvTqvBqzYoupaJTLPHVEtJynpi",
  "key22": "46bvwMVvQ8zcUrgqssd29UZ7gS51kodjP7JhYkL54WWadKwdaMqYtbpcb86epZY7aMic3LVvuS4gHv7G1tpPdj8w",
  "key23": "5cjBNB7QfUKArPTxsfHJY5kHV8uKH4XPhYH63szsnpx5CBUNhkKkYYv5UJ2h1tMwFvXqoQnmAoenrnHAcYUd2Usx",
  "key24": "2szRmJpjbRQfVD3VoK8BwpsA4QFB7mPUWrHqH77sNk46F7pFWJFriD4PxdKUz4UeJzckbFPt1dVzZVDRLEfW9Zt6",
  "key25": "3rWo1gBWFP1shEDmxMPHxCvsxDq5BoZ8osYud2sFLtf63qjS5yLx9Y7TZx1f6vWfzagPrquTJ1xpweokdy4rwmVo",
  "key26": "3XdpSWnfPbZcyLUfvYqLJed465xvexmVVW7EjhCH4XdskRqJUYjB3CCsME2Uz7WKzDzp3GXgoZVPh4s7Fb8R1Den",
  "key27": "AMkaWb43wHdFnDhFFf9LrM2oWCK11ukYuTL8jAJfoqPUAMhuKAHMQUJ11F8jixvYNgFaCTj9BjmVdzaEL2DEaKZ",
  "key28": "2nZkwGbgKCSizemJppiJZ5chwXTUwcGfy3t4G3KauoXt3rQnnLZu8AxFZFDu83vDwBUbBjSwu9WhjV2gY8d1qgM8",
  "key29": "4ozhCNHDbrqsptUx83b3xTg24WCbdkPkGaFZzqnoNRRQvd5jrQ1KRa32F9qryu6KfEoNJCyfUoAS9pCep3Vs9KpA",
  "key30": "45Rqw4Ygcb6UkFoZodzQhCwTssngTm3Yn9eMe5dLvmbbEzZz1HTYs6Kua8FZBzpHvuofLwdYSrr4FPnC8o8ziSK9",
  "key31": "4otyXbZRYFVPQNCk1DN2ffcX1tLT9Sq7BtTFSESffrk5Bp78VYRNUZ6DstwadXHp5VFzUUsRjx9MM8u847UMDQDQ",
  "key32": "3jHXVoC7gpFGqERDjQNKiEfwNmgzDB6KdXU99KvPXVJBs9LiWoLJzmi3YDGtH6ZvEDcCpppwKqh9bVjXBtrZQLtM",
  "key33": "3JotWDNJPr8WT5jPmxSXeEFWVLGgMpfDvyVrYL6p91KU9uotc95W8rMvGVtuS1v14zYnXypw98891pHjrSCU885E",
  "key34": "2JnPanQbtQ56u4hxp5eBYiCCcXcASfWfy4E7bsxnWFwppGFy7wcARYRjGyMtLSgocbWQprT9fGan4stqnk2vNv6p",
  "key35": "dFk5Lc84koGJ5H9FHnnLiRGZWvQPiLcKKP4HMJNbDj69iLpBPnGR9ZPToU17UoZfs1H5CvpC6m4ZKDVo5QTj5xC",
  "key36": "4Xyv3nEmvjQRHcG36r6PYuyWYs8LRgC7ysjURZzoYZGrf6Kw6yKznP98E4XA8a2Fk1GFLh7ds3zxMgPpUmbSvkcy",
  "key37": "EhnfV3WCJkC5Nc8vRYiff3A2VXEhvPVn8xVjqPt6kLw9TjS9265oc4ZFoG9xRGX29HDW7uodcJRhcsh2qUsXTMk",
  "key38": "qMDmLpR627ToFRKy9cYJwS5J3MBK3R1HzbPYLVmvmry54h6ncw8A6KcBZvivkoWCMDXzJUwqv7Zt1p78BP4y17q",
  "key39": "y5nt5uYxvkAWoPvbm2eE1xJnEB7wrwZHkJcVvF1aj7aMCFAKMaAiuQtQtVgm6ytzBMcxpzNib4zAXHBiiaTvKC7",
  "key40": "3Q6d4qjCPG6VXdQ1F4K7d44vDAbyyJQdxC3VD7HijrbUugBALNTg26oEkMxoNqwSxLn1AkL3uRStHRPDcKumGpr5",
  "key41": "srCMvySitxfogpPB4Ap4L2eiCsms2GqBBAKEK1qZExTB6LEgcEqXeQCzr6YGpWpfNAGjCxQMadXdtuB7R2gsK6v"
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
