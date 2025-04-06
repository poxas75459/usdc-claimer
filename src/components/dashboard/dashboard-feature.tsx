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
    "mKde62rrRR2UPPQbee1Y6c2aGJnJZAWH5P68Rfrw2bN3CgSXAXTqHigvjYgUzyd1r1PNqWwBzo3nmWwxXjie1j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHXMiiakDmVfbw6HtKeydFU4pfWvT3zSaaFr5QqusZgjVmdw2e3eWCUQvpADjyxQKSprijtMkNYf3PX6rZ2dzRT",
  "key1": "4eg2WqJqbGiys5V7hKQVR3FeSamqTy1e284RyM1nBEMonuybQZNZCvrJp62V4wzKHC9TdKzcaLMLEDtoGm4ww64z",
  "key2": "5cWi7BgukkjCJXaQLjXSzonjiC4YSHc9cXS3FhU2J1Pa4mreMavakppuQAeJzmDzZEQRPgp3iLn9ZbUFp29kiNFu",
  "key3": "5ArDZns5bfkUgvmupjfAT6wEmFHqZanxE9rDAznXujUXKPdjrmuPSVGmTrtuzcpE9H8Gt1yhTyQVyuxJzhrhm7xL",
  "key4": "2a4WfGwZX9WhtjzSqNBgHRoyGFb1Mmbv9kNbhDRLPFncNfqTDD47EHUbX2copST6PVnQvMVCLqCqK4Lw55mBmDyd",
  "key5": "2CXRFPMmM747ST4oAqeEPLNAyGJCnDrVs13NikMwMt3UhPGdbkgeocNj8CzT7wndJrRwjZEVZ2Zm9Fem1B2PgbNZ",
  "key6": "5zA4mKQMwXRnKgZ1vYZ8KJ6EHTdtH2ZwM2QN1ZbRVuy3wiJWq294R9nwgzJJ2dpJkMobjsTUtpCEy1nmDatKX8E5",
  "key7": "4s6UJz3Q3UqNM7FZEcRYy9aPWS6Xj1zo136P4uDmJiaDgVjZXLShVcTvQS6dLGksgBZcug3icJh2jvEAhzvSECTW",
  "key8": "EvntWLP9u1ck1DQsHcAkJ7LZFKCrJBVP2KKzeqizM95Y2xJu7AkMVQubCH8sjGgi6NnLPpEyVoE4BmzYPSMfuee",
  "key9": "4bBFMiik9mrKuGuhEdqTdcxdCWZcckEYXX64yASFGvRhVTm4j1RRwRGELpw7PfFGzb1XuEo9eQj5o6AjzJxDq9s4",
  "key10": "2MoqeQY6PjeozekBoz9ppPh9ZnUU6JJARC9Lqj8jDe3ErquNG6amHwFjwRBJBoTQuZ5bGbVb4DSz7mic8aUiw9ys",
  "key11": "2doVXjz9XX8AAHLG6PxgkWM2Zs74B27JYakei6JnMD7aLJtzktUkLfY75fU57CiVnam6MVHtEjdHbYTk3r3TgmMc",
  "key12": "5AxWBEVe7f35xcGZ6x57tH5ChBPnHLL5Ua7swGz8WuXcb9nFXAUPQ38iBSjnW87hWy82bmE9sUooxHFASvZk94P8",
  "key13": "4WjiNhuZ168UvfHn2YNznc55D1cxvfZXFd6MAw6JSjCu1Mv7yyb5mRefyDLmdSHkEv7HEiAKsq7idEDK4ZbXJz6N",
  "key14": "2WWda49zHytW7TDTUafBMkVUqSLXjcLcbhqe1rHFJNVMMjjL1uLRNsVHqpmzDiQWRFBq3DCi3CxaZLWWjzm25k4Y",
  "key15": "2wRucckRPaNUnnvTAcX2vgmJif4nvczmGjVKw1LBE68V5xqjSne6GC7x6RV7KK6CRjvNEJMJt1eMfjfakJVrG12M",
  "key16": "3j85Zk5BHVsAgBzzQNc7126wDJDEFpppVJinWjw8U6SCFHQEQVAQdUWYQVNhfntTQr6adpYBsAN7n7YNv39aADTD",
  "key17": "4A3mZvug6gLZYfwjdZD9xsVAMgyFSXdTZQnRmPTWj38bKZrgkUGnrdK2ewiHiD8u2t12yeRm5Nn6rPJXuzJXfgak",
  "key18": "FqPeVaiESBRqtxPqJEkuUJHUDquqHCgVyspHcEFVwrByA5SdbcK1zWGffnLLSbs9uEcL7J8mxhY1EEaQBecRW2q",
  "key19": "5TxMbKX9Gmh1Y2fjPXLtrPwwKGrkmLZH5xkQTJVCxHdRtexWLub27umVcNRXTjbY8bBqwtUu3PSp5e2K74MDBDJ6",
  "key20": "3zaLHvsuyQccj7X1FAxT4ez4A2V7BKLWDiptn5JYYDe8MVekr66BfUuKnQgyMoLFaj482U8BnvzMEL4rsWo6UtJe",
  "key21": "22LbXGKGh38KvDmNPU4Xew5CvJTKo1PpFkUhNCnhcwFhrskBw9cJZpNBBsAjqes4deAsGFjxHyqjVz7D7NsgxnEj",
  "key22": "5KSbb5fyHWnotprbhQqwzfjWqkZiKHqR3JJ8zZSPZ5z7w1aTtASNs9c3bJuq4Sz63pyRUPr67baLdeGWXJovMnZ1",
  "key23": "2sbWQvaupdC62uuEyXn1woBeceHSupz7Nk148xGLpvZbHXXMWeTvevFMta46os3DkCCuV7eE7kKcn6EFbbeu7yvW",
  "key24": "2LdD25DV6GH5AuJ5DMDdNFB4VEw1bz7xPqvKFhSX3dnUTQXV2VXbzN7dtyBTU4X7qZua8j9oRsAMZgEbLXNbFdFH",
  "key25": "vYNCbXGf535TYdJeMTxk7jtsA71qxDr3zJ5YWfJHRZcrofcRr82dKbxZ225kuYZswi2vTdohttbmPL751kpZJ7x",
  "key26": "2HQNRNtgfQE9uR39VJRyxbs3gFzDreiWd5AZeWhz2xx6RuQVQxjdePHhc5mB98VarSeFt7rhBCCtGSYdndprQMxW",
  "key27": "3cqxYiLYWzYhDbPSYj6Y1CgN1BsA9B1fCELoR7KvfunXvQvxQ85gQ2VDeXWEsu7ZFuQY9K7CE3sxMSdKuvxE3wFe",
  "key28": "2zqHifBivtZ2rBgVSrSSj5NfKaX6tB8Xvr6mq9y9PPvDDoUokSAz1776v2o2gFXJyzank8atA8yzDzcCJ7LCxC3S",
  "key29": "22DQPHUz5pVD68NWJq91RAeyFrF3Utxg8yFDPqhw9vPAjo8n6iFvdNggM6qYrvCAJ34S648XggNpaAm9L7NnBTme",
  "key30": "3mcztrnB1CtRrZpWUEaug9yxd2txDWAVYm8B8jEQepiUSMxhMiGtYjgHAaewgD4ZkzvqnzSNrCwnAKrT3q9BKGgE",
  "key31": "5yJcNgrSHaYGuZ6zyMS5XLJCMrVLFumfSbnFeFEFPBYSSWfrdmRqoZwUoiQhuJmGWGjmYiwXjDCQEgAch2xhZDBu",
  "key32": "4G9xvqs4z28ByfJRWESBUGoX1jNd6QXgwHJjVkrmkAUcHCDLPRb5KQYobdQcwshMiR89vQMWCXDTgE3LLGjaALMx",
  "key33": "3BV4NeDEwiNKeMvfCXrEqLcoY8K1jDvNPTiQZqZs2TSipepeT6TuvozUqgp4VoYmR9AfrCuTj34FCrrd45aSF3w3",
  "key34": "MvJNVxmiMuhbkspRrXcdsJAkmQuvx3wQS1A9FCqkE66n7YkYAYxAtJWLg9u5hX6QGAa2qfBU8CnrESdLGZ4bS2D",
  "key35": "45Jzud2nmHh1WVpuuM69KLxe7VwicBBCerDieJXkhuyAB7J61GbYQ2EUJe3ZgZvBowNmytWKMcGJky6LyrZPC3fb",
  "key36": "5KsBzN3DSKs7y6QHWtjr2T2VPs3Wd1PXCBbAeLJxJM5PULGQv2LubX3sBkHJVU8XikfBKXiMC1Wk2PwKsP7tLaGD",
  "key37": "2WJWfTE3mm4fnsMrWZTEMwd6ABYMLU1aYLDQSDbdxkehxwy2N3ig1f3gv7o96Tkz5EJYkUa4ggBj5e7aYupixsXN",
  "key38": "5dW9GyJgY8ZkHyKFGjzDYuXq1J6xRnzfVakivEJ6w39pat4y8TE5ae41cbVVMnmoGNVW7XBjTNHfjMv2nUGkWvv7",
  "key39": "ax2V7SZ97zy1hwH6399MwnCqUPBCC91aUWkTbGVdAN9VgR5k1hWdXuXAfJ79xDxE3gq3EQ4ETTcdmrqCzhMfMx4",
  "key40": "2crCN1QMqjjPngY6aQBVsx9tyXDu6TWEWhM94GSMuciCTjat3VfdiperLuJe13WeGvSTvRyxcCxQ6K23kf9X8bbS",
  "key41": "62cY3kPgq9ZHXdUTdRg2uEA4LstjwoLa7vVvD7Mm99XzrTw83Zv5CzH75qFGGtB9w261WXVxHR7Asti44bTy4zU1",
  "key42": "5kgGgNfkXNaQCT54zPXukr2gQKtWdnEkY8RD8epNppCkpoJvaLWqrDT5eKHedyahGxMH1m7cNsgMqYn6xhsQJ4Aq",
  "key43": "oUZAv7dhg5DN4dnpzKHuV6s16SHtKzESsxJieiDomzw6ECnyaQqDU8zfRAT52ADvxcxuBaGYJmwza9aPJBNqHND",
  "key44": "2vGjGDfPWpBzu6R7nJGm8xin6rvgmjsANpxcRFooGsVQxfuyfoBL73N2wbdsCZpfGp6PQN8xEHr3ysNpV5zKcnFc",
  "key45": "4sGWDovbAMAZGKnWepDn3EyX92rKVF6uivZSnM8zsSwwrQM2PmKAonEraztWvhYdCuvJpBRV6TkQdBDNzxW881e1",
  "key46": "2gud2DRiVyz6Qn1eW2a8WFKj3SWLHo5kXUPdZervxZj7ZxDTgBDWpsoj1YbPxhmR5pD74457fo1HpzB8ehA57q9B"
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
