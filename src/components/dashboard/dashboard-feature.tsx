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
    "3Ynfzi7uHGpJFC1g9wufoHyjaC6DpHqDL9CxtC7bHZG8VX4g71M6G6Liaect2QJxxRt2pS44p3Gjqc6ctwsjcsVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3Jo8Lppxh6pu1jxZ3FKci4k48ZrnnLyDS7mX3qko34VAuLrseE37cad9bcZHbw9XgRHx5tN1dXZHGU62KjzHis",
  "key1": "3k2C1de5H1afdGmKG7ta1HQYZ2gCcVKWX3bhgGqyqYn2L37GKwZXAPSnaGg5aVk9PRd7j1dvfYAjJBmzGGT2pGEk",
  "key2": "mZfSp4REvG5AEeLxavLSNPHTJHG5fZ4BVEQBUjRziUwRcqRGhVUB2vr7TQBpWZwThN11aZP2aER8ZtNG8BFZvMX",
  "key3": "2qZkzwQLE2N5Jq9F8QCqhdjGZKa3LoP8nnhTCNd1tnjxXREDzDz3ZiVduzk9hXhE6cSFfbMthQnoARyrmmxwmgiY",
  "key4": "2QXr15p2NR97M5ywu51stGj9Q4oFCFbYYDCzW4tPj21tbRHJ2dS3pAKEgDCdv4bdePjx6xsZYaWh1ox5nFRykZsu",
  "key5": "4pnp7ZSBJCF1J9Q91uzL3XVENwxAHQRcSatJubrgnT9UKk9W8sGgcPuuNJNd38r4sSHLRqsSnRhNszaktiGNngcQ",
  "key6": "m2kEgYKLfsqLhqvDPkbmdo1LbHj2MLJUornV73CgyswFrHQQ4PfsFrWCL1gFyq5dPKePUzKYA3MUijZeJYhEMj2",
  "key7": "36nfFvWU1di5R2f5MfTYyUdQ5QeXJdiDF1MrTa9aF18KfZzAJN5KDYxAaRyahPY3c5K7hBv79DKsfaiZ5RKLn2WN",
  "key8": "5BkFcucZB2op13yZ6MCZwYkfK2ATGx6iRQL6b5tpXVTDXWAMwb77QmjTxdULBK4YpaX7TpWfoUYaWubmTT88cUGo",
  "key9": "32hC9kVpRE9SZmvKPFEE3rVaXhsAQciKCgJW7ScPvjxWGFfh7Kc45eXRReqK2RgkNjurPW5KdQi3L4Ux4ENCn1mz",
  "key10": "42SbLY7596PNSPifZk3nAgacpkLM5AHta1KYcZW3eENCAFvrx9MoS4gU2pcfSackWHfWLh5mWfd3weHgr7DEMF6X",
  "key11": "2rXRv2tasUS47WSbc5zP9JFwuv3Y2x9ZJXqPuKQs32X8G6uuEk4Uz8CJVyvqcAwwG1w8R8JNjxkws5KcwPnc1pbq",
  "key12": "wJibx6rYxC8e4XrvN54ba6JwKn3EFGoFeA3oUX8nwnBdQ1k1C8pvYHPax1iQbeYS5ZXxqLgmot2NBJPpy1XJeNJ",
  "key13": "49N5SRiQ1SEifdBcWwEwupL2RcwLX5sHPxCr5zyFimkQYg5mrHUudhbVPK2PekSQqiY9Vqyhy6aBE8zyET6YxcwQ",
  "key14": "45DX29QMGkauSwWciWmKnj6siDDsJcn89RNxGhtc3YKRSDgtun2Hh6RnT1GRhaWq1oJLMGkhPsX2RqxboYGr4taU",
  "key15": "3GCkvTsybaVhki94MxTT9PX2Z8TKbgsVopUZUvByV9pUJGeYk2MGkHcUZmw4jrRvmzz6CbZsiKArK9yVsxbjkMHk",
  "key16": "2bX6tLY472XwoC5nv5Fh6USh1ZLeK6b11XYp4ePNZnuZvgk8EtCUHH5YdqmdxYezLSogx9wdnn23uDNLRPBJiQQN",
  "key17": "2YVr4GbSdJAwMbbJKzXPkrrpfHLoD9NLfgnpZYQ8nHKwLJJVxuW6ZiRzBhTHWt4kRpzGmkw5AvazdkkqLaJBVma8",
  "key18": "24qMRacCfi86FmuzzbkxHp6RzyirmkcK3qLMQvpcgA7cZKdunj4ZRP9VFWQ3SxbNw8zL1iFmvNrKNyTY3PxUEYMn",
  "key19": "57UxmQsrVQHpCvsoeUJpZMsB85Eb6yRtgVApgSitD4xG4GDZSiJhCzxVGVwa8fGACqNq4FDHgRg9GAx3f6p2ynuT",
  "key20": "2x7PdpzyH4PLDQR6k6BaGYHbsW52MqmVQTCkYWKJmV2fTKBVZeUBy8nGkSbcnqW9TvASxQ3CxLLhPqCW9a3U1Ejq",
  "key21": "PJ9Cmrf6A4ZzpQwZamJcVdPu7h5yyeYen8BQfkJpGXhLnWBhyrJkZhjSDUaXbvzDHh1i36h4peaeVqfRfUvvQuV",
  "key22": "4gvCqd6egSCtZaYKTXxNheEC7sqBd9hY4qL4p1JDeP2L9x9V8jyBhAaa1mNyV3p8u3FnRuCFR9u84EjEGdSepFtU",
  "key23": "5pVZTBSy1ULdSuwFEBFfEKr5PVKy731esKTP1295rdMFrnTviRniUbscDiuyu536fQ13RVSFDnTccdQnzVrZ4ps",
  "key24": "28qjPG4H8q8iGBPVy3buckb1rZ33gAKM1HAdyDmneTUuELhkigL73MYSqKTkszfHnwdGSh4X1sUgpxjv8vDvWyjH",
  "key25": "3nwUhTM9egN8T38ek1JaT6YGWwkjWw485deCLNsbVmpXZgrdKHLgBbSV51uD6yiYvq9wtGPf9zQ7X6BTdkW5zeZg",
  "key26": "45UG16t8TpD1uLZYeBERYzKM2gkXyWxhJh4xfmjRXX9zmcoLygKaeeQporqigK5LJTwAFRFGKBB4yM4sx3yKWbC",
  "key27": "4z6wVDGyVRFj7iBH5yvYa5SGzgcUfhxRH2uuhAhLMSLEMcrkRxazKBydavMTjC9GiEvRnjegDriPcj3WBHNoLG7v",
  "key28": "52dSfscivU4xu37Lg5zVUB2rqcH334SYn9VveqW1sx6x9Yix45aGvsPKVEYgZUCW9UmYwn66oaj7vBqvWVkLZu9K",
  "key29": "5spGJxs9vLpQPkBqRtfPRBMs8qmSmXayndEYB6WK6jMzGFPRJCDdfJtJNFZWBsMQQgVnwtwiMa9K4orsqWxYEEzu",
  "key30": "2V7SYv1t9My7yZfQMWoUeinxhVBgL2yy9b85ndzCo9SgykZw2DHYRxiT6P1mGHR1VGyHHsVTdpv9AAQGQVMyQcuj",
  "key31": "52YhyedQZp7yTQfD1X6ZqPmQ7QrpPD52B2Y2MbLQT81Xa2dJfxpwSCUJaYNmTavA9KU1JdqTWH9s8LdKXcjLcUuD",
  "key32": "5w5snprzPqiTjs94SgusDSLT8cYx4qpKzwYJ8qVuW4jHejjbTrBaax5WezJ3RmB24Aq2xYRq5tze3vyVsy7pKjL6",
  "key33": "3BG9zk4f2unPDyzMokkFJvcbPAcuyTAweBhu28ScUoUpEsc4e2Rw9QvERRQcjBBN7uTEVxukGzgPF7XPsLY43iix",
  "key34": "31wFEBJhBGCs3m35Rj1mumsUrgZUfiwqNpdfHDBsG6qa1VYY3CykkX3MEb3UjHEX8QzCH7cquBuHXiPm1VooEPrk",
  "key35": "5y7gEL5XkQsKbq1de4tW3QhyDjML5r8FQVc3U8y4GDhwARNEfK5cpL7JUvbMpxFcgPczgryJUXdsPzqTrVeHfamh",
  "key36": "2YfMVMCAFjr3n6xMCKhFFq1K8haa3UMZGqh2KQ6cJVMCrnCES1UkrBbrCmMRcN7emyqqg8pFu6kRiLvN79fUXsUL",
  "key37": "q7kLTmnGRDu5eFebnsfUGJKvBmrLksPiEgKA4wqSkVGnh3z5NAW3yetGrdaHVKK2e4WFB7hw4fswBxQwYDQayS4",
  "key38": "43oiBL42g2fvSaJxAKjuGrCCsgY7Wpk9TSxMpQKZcT4ZkKHt9UwQv6tEaQzVG2DuqJHWQWiRLmxNaidBz8mKivBr",
  "key39": "5U31XiBZ2vawgCkpv5stS5T5etb3Xzg1sWmwdbkzRZ7YUBa4oXeUj5EaqEPrW6n9wJXJqCYCQEM4ELx9oqpTy58S",
  "key40": "45HZ5ZjmvFSBRrFZJy3n5osHcrBK7KEoK1tS6DhQwnvvbe8ek7SNynPFq5Bzy9UDBpiDqJc17DtTrbUCgYmXZgQf",
  "key41": "5oCfjQYZCU9nejMasfzNCKmgzNQwn5fFvBi1yQdtmMnZkKCT2PpkGQQKZjGrdjUC8S9qozW4DuAzbwVA2qboTfBA",
  "key42": "5oCqxjxTueCJJFeLwRt6Z1L8bdnNjCRZPr2weshq4kwEsSmYGPMHJof87WKhzrgNmUxEPmQMimxX877B7Cq5UN3q",
  "key43": "4UncfQmzitQStj4fHEq4tTM3o3tQPPdJr7ao5HpoM4bhvXfsCdsaXDp3oPLo2wUzm1Ewgkn9FXpZgeJgMTBVKMyy"
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
