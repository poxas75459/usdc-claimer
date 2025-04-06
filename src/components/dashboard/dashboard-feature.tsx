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
    "36qtNyYWPDtSHU7DnqeN7WMsrc3VnK8CXX9k2ecqLKKfSUAUiktAcVaUjx6BtPVevoYvAcvXpSfpWQd5hLdeU9i7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWiXuL8gpeP6t8XXyZPdF7kDDrowh7kBmbumGPzEzz5JHzgJ3oagJX5PQEibFzVa9uVwZ1G7J9kY8c7fiWfi2kY",
  "key1": "4LpPHAfoafk4km6AP7cGuWYWMDe6xifVqSy2ZZtXJyPb3v92KWCpbJxBnSnT5pTDyxLhNqPojmCxs84Cj8R96dxy",
  "key2": "38RTczqfNoz83W4ZuyyLmDLCtTs8TqYJ1ZNFjnXWnMtryUcERETXdUdgsbRHs3jDWipxzZEaNXbbMSdyJCajSkic",
  "key3": "3iGBpnjakyyXTZabtUcU4eHbhfK33xFu7i8fspEizeDwh7PDM4m9vsvc3bv4ibh3eoLqHu5rgsrQ2jbWYLAG3RQb",
  "key4": "3v5iJSYFPeWNii7a79A2XNTAMocLQ6Yt6Urqts2QXfrf3b2Aw9xTVk8yvM33j3frVK3MGyXm8auMWCeHWhPwgiJr",
  "key5": "9SH4JUHQibjdYBayJNc7WV7WtuQdFPrf3pUJVF2jBJyXrKLQWU1xwkUhmzXoQGNDqtpaLSyuDGzLMXE7BP3Y17Y",
  "key6": "4ZhGZL62WMRrKoqRcdg4NPVvaxjpdzopqrwovt5CZ4QzsH37XqCDxc4Rpyu2zkMr1wmfhTC1e6xfEcSGtFDCtmLp",
  "key7": "5UNtyTgWyEhNgt6Fjoh57C2WwGaWgeP764JrYMigzbTBg7vwnvgv9cRbHadZ4yRxaL6XjaQ1VxT7wFks5ja1GN49",
  "key8": "3nRpVSb2YdtNLFhuSxSQ9bCyfWWXJVtSLwzg4GPVvGnRNLewLEyemvu7zio1YzuwrZVApBK2WXWv8k31iqj6vrXs",
  "key9": "2tB5sV8e6xbBfFbuySM1xuCVQTLVQbrimQtEdPcFpPq8YQTkdXUhWq6iSpJtZ8L1H3YxvY8cmTiwG2VbvSa3yL43",
  "key10": "5FZkb2G8jgJszFpoH5TT28o3DM1Kwtv8YGEgajhQhpqjyKbEHdLpVPGapaCZ3Ey9Bc1bozVueZuRmhgpi1GYvZoW",
  "key11": "4qXMSKsaXpPwkbLaFV6oa5WAN8Tcukbni6z7p3HyQfvbFf1vVUPQsoYZTKW6eJr9ayrc6qnU9Di33gwm4MvxyFMK",
  "key12": "hyydVPtuH6u9F2GoY8fy422evyBcGtmMkJ16EtCUuEiq8uCJi8cYErqV2ozbka7RHGrBGHN3LbczQdnySisyU6M",
  "key13": "3sqqCwmxvkishhgePe2fwxcZGLi4p2RzptN7fxfjDMzVeM5XBPdHYya8javij2fgMx3iWG9RnvJRdfuynAyrjykF",
  "key14": "h8MFRc8z8KGxbDeea2WaTF2KqzCPJSHVjRvZZdm9skLb4aV3LkXC1N4HEJeEk29qQtfTtEuZaE1ezwE58gFeHrX",
  "key15": "2tUjbCkADp7iVcwVcBF3rW25wChMSTu6yTdxEJzrNaXKHs1YM6Ec9KQ6bDNJ8Y9KetYhFeRyBJ8F9HeHieTkdsD",
  "key16": "2a73VSk1o2B7rDPstcJwY1P7oS2nPYoYmbMLKBoNssGiLSS19drs6fbgNp3L9xzRDQ5CBodUD1sQccsDRWunrB8X",
  "key17": "2h1Pb1WWxj3FndSbrpzcZH1d7VhakSUtbkrSL88D3rMuYDRtHQLZDgvFFodA2AoYzh3UngusaCQuQBDkTD6xwjx8",
  "key18": "4Xpj8iKzjSUeQigbi3WBmojHfu6ThefmdHCuF8hrypPWhuDoFpuKdpyUb9KnS9X3uy8RiQctvSfBKrQVQob5sdve",
  "key19": "SF9sWEk7Z5xzt2d5izwRVSC699RTv2MNdPRrjm7sHSDLErcCW6F3VhBLdcqVmDnR6TSrEZ7sQj3YLFLzcW645Dr",
  "key20": "5zNp5FLEXR51G7hhEEVMRvM6ca2wXFbufGien5oYwEyXkF3C2eyKCZQjhBoE6cCV4pXUnuBzci7Vyee5S78msmFL",
  "key21": "5473A1GJ5UTeZaKkAUF4hyhAsf1Z8hzrCkLTQ3nvS2tHn7yLknXE4uA3o77NxxA3LExmc1RLgvVGm3KjktetL8Qu",
  "key22": "3Qq3A5Q8867EH7sVSKL991NGtZWp33opLJpSFKmLyWTDyrNbXu751u2JzmbQhnDhFuzhvDnvzKu1voAY9FN22dYN",
  "key23": "4ioGBhueXLtJL5hbTvJ9reKDKbaRDuP37ZrxNnnDS4DRpcqNyqqCxGoCNTSXZnquz5fJCFChMdqiuJMXcLkgKBTP",
  "key24": "5tmirdnPzFqVwULVJxW8Z7jS9k2CagH7fv9peW26dMEFMH57yeMF9rRrdhUVB2TjsSsv33zeKy38viSf4YE7AR85",
  "key25": "31hvRBKTLgfN67Shd8LiUBzvSPMLDXi9S1D26iNpqrvQWsRq8wpW3K4GNC9X96c8QtgygZW6KpgeS5i5vTxb6kPg",
  "key26": "4qv9mKFcZWZSTUGGLXQWzPduqnbnYW27XRdUZnzthUTudXh155wMETYazGpL3GsjkyQbtiE9uGsni2Dm6GucF9kW",
  "key27": "3pUm47pt63oKgUBCG1je3T3sAEhhcr4t2XqbJfurJNhhdMcbTeKtCeG1mgCuP4c9A8rAsxTSjqKRsGiuhJuxuGbX",
  "key28": "64cAZHcsxVFcfwGR3BNrhFcWLBmisf2NWroeKb96PYM6N8bnSR4tqR44WKay8Faydx8gYiSco659t8EweQc8mNYo",
  "key29": "24dWvvDGYPXqfSnt99ZyS3qEyJPf7GMhxz2uWy861iepDKApDwxpqsQx86VUoiK1dPH2nn4TaKma3zDyCnanvsT5",
  "key30": "5oUzjkf1ZrusgyU6QoERNjWLtPSVRrR4p6c5pXXDox36iZdfEmW3iYA3w2apaJdVrsoUwiw7MZUptZ1Q6nVj1aFf",
  "key31": "2kfPwC7wBvWMRD7uTLy52ewjw6wXoQvEdm6MxmTyH187kmALMNtHhrEE5FE2gLY3hY4ad1WvVVrH3ghnbpzfP4CU",
  "key32": "LaWiovLdpsFLcreqNW97X3Gd8NKRTfZnLRtWR8u4yiYKKYqkBFnmzsLL9qK3wdXMQv66xiWfm32ffCNQMrwWzrz",
  "key33": "QdvaPaZzufjA1F9NkxKVEyqo6RiyRefyULipqKxEL1dkHFsa7WVRdeDKxJT16q1V42THStSQpqFHmz29SFPN4SH",
  "key34": "2UqCAaJYWGbUenE1Knk85jbKWrJZyKigbK68cojEXC4ySkGSjUu9cTdTY7AhBHRCjsJsUSu36PwZ2GVipCgrDAv9",
  "key35": "3yvVouJigfcL6f7qN1pjh75MGVET2GALKZPf1vmiokRu26hY8g7iqRjv6EPphHLZRQmj5WmCspYqbJPMKW6HLjLL",
  "key36": "5eevGLktTvjDTQrqFG44VSXJY2qg3JdjvqAVtqhSbaaMDzJqoquUqjErvjaRL7nHdK61eEywmjosW2cS3bFrTWrA",
  "key37": "2Z9FnD2s1rRV3VFvqcso46WP1fEPK1TeP1TmWiSvczr9VPvdH4it9bKKeU7VtH1JyjUk43MRMtPBY1cZjeUcDy6K",
  "key38": "3XyCB1WAUFpuEeQPthz26HZZJvT6TWJXLizyYZtD31jYTCNJSptUtsocNwZQ8Qv46mZCE4htB6axf2rjNZNG2yQu",
  "key39": "wWsVniXkndJPfvvgpKYukfhWxh7evYqEG5VwZrujgqbqtC8N33ZiUGx9HDsMEteYjXzL57YvNbkWrFPxoGX7rXb"
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
