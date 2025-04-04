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
    "Csy97NtEp6bCoDHXjbBUrQcQ9CnvajPToEHFhxicMAXgLCnkfY7jk6RXvmEG5xnnBzmt2G3KUBcnVd2jfQKWZNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n42w6yXVMqj8Xu7Gjrkv6fESX1rBQykYhPj6kzazM2irTVk1qUVuxikxPnddpakJr5Miy2f9H68RPA6X1H3GkA6",
  "key1": "3cgmia7J6f2JgoNewggdZNBpK45BDZeL8B5Fq5qd5CoTYCzYqSVnnNz3E7yJEwpGqyBhLbrHZozswJtLWpP7qXeK",
  "key2": "3JHEoVaqU1zctfsbgDZwPtsG8CC1SWZoBbhy1ZHGrKNzYa1MP7Y2hN5sdUAjqjULuvfXWsDGYG9jczBCsS74Gq3p",
  "key3": "Q8eUn24KmihBZ1vcvoKQumJsJ2jdGFiMJKgwSaaqiuwzMGJiNoTpCmq5X9hJie33BvR8d2ngkoEXsKajpE5CzSi",
  "key4": "3WVqEigFHejwGCbY6Rw6NMVoDDoNaUbJsuaKE3hxfkxVRVEFcpMSjuTB6xUn4SgSnfhhnZGPfuUo33p9i6RqdLXa",
  "key5": "3DY1fNo4iQu1UQ5Ne5TEuKYiQA2keBRpud6b6VBbamtc8c38teWNLksWfZS1639XHgDfi9eABVA2sRAibPjNEXrV",
  "key6": "kVyPnjMptpyeDA9pEPz4wT7RwYSf4AQwy7stADeVq9nAU7LtZs9hYCs3Gc1hKWH9sn6CfkNzQse62t9bcwvDby8",
  "key7": "4fu8hSq6fEkvGjjvSsqpMzc964QyTPRWMU65hyhNWXbL8JC5uc1yrfTNve84kjY9wf3pe8XQukCA94zT2RN1gJz1",
  "key8": "3iq5Eodw4gXYnqEBn3TCxmPrRQbLtYh3cWUis6D3Avuh9HLH2U5LnDZyaVRueg43zJsCsjzvgzLwMP9RkknzmQnZ",
  "key9": "5LUio8RhkH6D7PsH3RNJnjDpTgJkwx1Mg9zxjoPcvcgUhhBb8zQ6if3pJiPCKFqzyYFAj64XpResp2i3yNJ1huUQ",
  "key10": "5NauP6Ri4jvWX7MomaeruhGFwo14tgFoEkFAFzZa5HadZGAJy6TqEXToo4zjWpe1KMPiTZn6TtS3ievSvmyfRAH9",
  "key11": "EG3KFvsQS3PP52ZJ4CgShhuGSXfpbFLVo2uvrJ369UrymF4MAghvG9binSTkGLMxE9naTRWRwEsKWUz6BXB5ouJ",
  "key12": "4GrybewgiR29iQETfP97w85AY8PBeCeB78sRqNq1h6tJJaHY9gYyMgyupEEcHdQCNTqmaAT2aZbh7CTd5J15sR3Q",
  "key13": "Lmy42M7empY8pb39Yavgje1gh2Bof5JTuet8KCEC9PK9WN47hGuVr6b4V4t1q9pSV8Dwt1TVFuGAmWsGVX1SR1h",
  "key14": "53vUrn2WwLMWZZuw5oZxavZFexVg1kzGVcQDdZ8LKXse1EvjhuKq697hYNk4inUPDEJX7AoSkDn6SdZzchN5sNad",
  "key15": "22sQpprx75GSUmzbVshX5UifQGKc8BhFTEsdnNnCP5cQWQpjinYSAMgamh22QowrY35gpLyk6EXo4qCkpbXinoS7",
  "key16": "2GWKKesmXYTCqtxjS8ATHb8uPaeSZRwgesfbcZzSpBvtxqEXk8shd5sqipbQ85H57bs4ZRQ9BNJi38SySdgEtFDH",
  "key17": "541cVJNsSCD4wt6oNoyXmqUzB15pTQuo6hp41uV6ouBqK8NBSJ5JjPiuv6FogkttTVbTAo9mrXhL4rwXqF2ndsuG",
  "key18": "5zNzsW44Pg2qQ1246qUWRf4SoieFtT39nuiWb3ppKBhaKtejJ4HJ1Sdx6aa12SWBdAaLoDihCh1TgJeWxijdDgEy",
  "key19": "ijoRUVhoYuwM1i27yVBB9wwqboJVq9yVYh3dr31awfvc8dL5owjxe38m1EJDX6UMSaDZ9n8aH9TGwssDamjEchB",
  "key20": "bBmi4jS8V842uPYbdgxHQDbceQ9JdEJ4YGzLc4AseDTP5xopGqDjDjxiMppNACzALwyoKhdGFu5WQQDuaKBB7wi",
  "key21": "5459dqsJy1MrzUMXpT3gbGziLA5D3PuunpCpTuQ4KJZ1GM63kmak5x2u2M91HgRzZyeH8sGx9RcKFbprjjbZkWY7",
  "key22": "57fJoJVYuqRa1qqewG7AC17wfovngNkp6RfmuDMQY9DkjuSbrt6zL9GzWDgww9wwNNLrSeRsKTtW3wauqqtXJpsB",
  "key23": "3yyoy4krfctGpYKmRshunS8AY5ui8954D2kQXnbG2BEYzYyNzD35tKyvhNoPb6joBF3qh8tLwDQHNpPps1ohMQgy",
  "key24": "VofzuZAV882najoXuuM6MMZpVLwyxE7g413Mnp8ZWdNfSqRyTVtkJ8mf8Mm9cVwnqAzRadHGDjK3vwCKExCB5fA",
  "key25": "25qy7c6H1XupzahCFho4aBJiQw48qiZuxhYsNu4Ggw6Eq6QQdUr4eaYP69j16PLidG3js735VyykWvK3icQHTHga",
  "key26": "3z9sMdmWPTRPjHNKij1YAyHn3Nnsw7UsP3dDx1L7mSCMG9RCgK3ybv5bcQzs44LYEZkgundsSFhH9i5UV8jByamK",
  "key27": "3tgkQQV8b2jwYeosnx9pZ9UcLXKSf13Uwt8K8GDfoJnW5pWWep8ZNAn7hNPYWhvvgbihn38Gs4rk7t9acgRHiGJs",
  "key28": "3a6yRab3F46uTn5SrkuS7iYGDULqU4NSR1XHS773SAFZ1jP33M1qttctJirTnAG9h7nTZyhjXphGjGEzmXCgh9gy",
  "key29": "2JPiU7BCRAZztVE4qe9nvYmK1vjHRwHCAHa18a4KaV9oobAMU7CNVcEKkMzE9tP8csz3Wsy8jQiEXQKZnkmUhjhJ",
  "key30": "3D3S1JwXVc2yUkP3uZpJhVubHuwkApc26XwcQEeKQfDHQ6qc87GnTp7a27QJu8PQ4o74q2B7DxUGGMEpydXyY7Fs",
  "key31": "3yNFsQ2xvure7UQoWNsPmq41RiXPFc6UpdkBhxQqRFTVx3bRX5L4JhXHjSctnaew4CbE1NPYr4pSiBUGGeoPDugu",
  "key32": "5pzhoLQQBoWq4SepqXXCSembAJxWkbocqcw8NPC8o4Brc8UektRD8JKNwzC2k155iQyzumjxYckxWdejw7eoP7b5",
  "key33": "4t2KZkjgBafcNft9DijnaYLzrKZkoktRvm4GTmRcaecyxjXcYCPYHAAYvFnUuPbLnkCgCWoJrz6ZWqLi7BeHkevR",
  "key34": "48xsDJ1mZk7FfudNSfo5RiQMQREyN63TVzQifZXoVx3Kk2YpicgMJTDTM6oPV1xtJvF4z3TfGNCyFYzD8fEuxBzM",
  "key35": "9kBYHJgP5WnED3Vms4qn9CfowC7gxCASA1H1rvRQk1L7Fa3yF7CbPSnU2mJ9k4DTGRZ3s6eb5jw39UrWVZW31gk",
  "key36": "4b1de7rUwsr7TFGaeeDrsMVruEYJhs3wbcNuqhcUNZS3f6DNymJ4T32SGRx2TsdR4W3p25LJn4Uqivxh3Vy62uMb",
  "key37": "5pNNzM9hVeJRrMJbQQabfNYxZZshekhy3UBHGXpEVWDRV68AuTiA8T6VqJJducV3W21JJC7MFWiCmUzrnzuRYF5U",
  "key38": "4XjnFksx9eK96Ajw9YfSsFduZSBaV5hk6s92HvaLQpiYGzrGg4AHV266GfeTDkFwhGfGhEk2EbCLfSAxjS6FpeWK",
  "key39": "rsEceqrJPg3Rb2tUZWCfFNsyqaXvf63d8KnhtptHeC5tg85ketpyxei6Q1dbvMimbeSq2HQ9ZwD3XiTBBc3ThjV",
  "key40": "3G8tNEygXN8mU2iHJZ7fsiw7GREvusM9hYzrJEmEVATWeUdZznV8ifBMcq8e3KmdqNakAiyBXg1FqdJvnnjB6uar"
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
