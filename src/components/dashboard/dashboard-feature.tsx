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
    "4x8Rtbd3R1jg9anCzVweawRwbTC31gDXSQTVvL2aQi8vefYxXzuRLjQwSpFA3yNjDY86DBC3hFjok7Jn5RiMSLxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27wcjtfcKMvENwqioS5TPVVoiZjF2w5Pp98Vksrxi1D5Efns46eeshkqX1qTDJJP3FoxYbQhXhX95PieMU8444h2",
  "key1": "2EXM4T5xbJPDqRuw1UAn97nRq3n2mRuR8Eg1edvELC3ZVyqztJir8ze5WSt4ptWa7zCuvoqyPieLWxZvPqR3dykj",
  "key2": "2Jdsd5Bz4SGmYzomecnCXhmRyAzaTPMdiz1pGgxe4GJ8hn1JbHAeX6juo1nmnmKvf2bRnCvEcGGwEcqm5yH4yhHF",
  "key3": "2prHG9m4f8YzqHu2Qp92hX4Xbdad1ZHUtbGbE1ARq6jdEd5t6XU1EWWCNVuKLbiq4ABawC78dmmFrQ9zbPhwFetn",
  "key4": "4XoS2qjnqjWwsAWeinDYLvcxNnRh9Qv85XYbE5LgTQ6Y4PRFXeWAy2mt1WS8tzSgwPp89kZDSviYcfXXLgGoT94m",
  "key5": "4e8q7TwGXPwNGjcQTatF8z7TXHrc2R1sWHvuJcqG8CQuQvJSwyfdSVBn7jJvjpCVWBN84y6pb5vyLmV6jDgBxC7F",
  "key6": "2nmjnfAdCVcMM6pxQqNgaeHQzDkwnyUQXtUV5t25ubMtVsuQwjPkSB7jvH8A5RUkFBH7xAszkULX4LAxYy6TDVeW",
  "key7": "oficujXVBnsnvtgch8yFHsLkePLqkvYCvKfAfUFLs3JVeLhhH7zFqYq74yFJ59W7pbbRPuCW3i6AXVWZdLf7E2b",
  "key8": "3yqtNWRy8n6JXn6zdg8xf38jUYBExW8eDS64mfXUrfSDDPAAdqothDQ1wwCme8yazmMxEL7vkjjLgFNYCrmgE4fH",
  "key9": "65HKK1nLNoZwx8ZWKS1FzDaqP66vd26DCC6ihaeDdwCnUxL2MYMYMKHNHm8sV6UQxFTz561vnwMtjEtpQSEVuVKU",
  "key10": "X1FFrb96Xq18L4of72jRNwoof5bPdmapVSELNyRuqQ62thZEvni9jgf7cSvRJTGERaKpYuMkKTTVLf1JNnetK8F",
  "key11": "39EmRgX7NhbAXuhxTB5Bw3DtT15cRuGTaZD44yQZ2ksph1LpnGM8u4wcFhTwcUVyQ32oJezLyMu7w11Ppp4bwcqc",
  "key12": "3L71SYugMbcyu7qCbRKGCNmqt3vHL71YrrR2NUvTMxgGHHXtDPHbrDZCE7sscYkxPdVFmQft9jzPpKqLUuzw8LAQ",
  "key13": "47DYgKwLodATEDy1wF3fTXw2hxpUMMaAZidSbKUceGDtSmEZuNu5mHkWa1aKzRWJnjnJRkQeBDKaV3iS6u5BuhLZ",
  "key14": "4hALDekMan5SbwB2XCZXP2aPUqknqb1ZCPYBYdepc5k1f18brNreWhrEnxbWgtb9ZJ3isn6VLLnCcPBKQFimmXPr",
  "key15": "2TmE8Bp2mUyPHTUJN8YBBxn2BrR8QVKG3vugaoBufEXUn81zZtSmSVmE9LJmFW4BANe5dJdWkPwAVKY2TZNsazaM",
  "key16": "2g4buVCkKR5iLGgAkXAZLd3eFretahKu46H5vU9pcUcsBuxC99GWiUHAzX2kh1F8gpJtqCfK9ZnavxXqNUmbEbSe",
  "key17": "3bj2rKWqt1TrWTDjmUSBbgTE8wu3CTgKNn4oRjenGwfN9eLrT5cLWXa7xQNpDqEbXAyL8ntRnmnMAJkfscYyfdT4",
  "key18": "oFNXEJFD42UvVxbUwRHkMzbFb7Qm1qM8u3Xu1Fa5LG2oEhMDTM23mxUALPYoCE6AdSiQcTK65YnD3wCdSaHsd1c",
  "key19": "29g5Zn1fbqedJRnRDy2FgQVtBaFdybtAHHoc3xcJottaN2urs4jFXcor1RhQqBjPqmX1R31YbSdErK3png5wH2kc",
  "key20": "5AwuUaDbAw43zRM7UeYxgEVLBSSWL3hY4HUm6MrhYQFbaX6GjcWaR9zfSkXi4CerP5M5jhUJswfzWRD32wdr2dBU",
  "key21": "4mDwqgtKiPVjfhDR7Be3RqkGwHFnW4YQKKWVVgQbZ6KPU6imDHKmPTFSG59GfHyjVe1Qb3tnYw5hH2bH4Ajwz3wo",
  "key22": "31SNKjbHV6sQryViYVmarFAtsjEH48xPr7JgJ5KH2kXasyaMoFGU1KVSUXXUJrRk6YzggjbyFhNL2S4dDGcNsFac",
  "key23": "S8d7zsvR96X54mKqkSNZawyUqqxfsn4ejmkoJuGxcsoMiaDo8kdFfxs1sMJvj5eQfDkC6VGv1YviHDk8jNamVUx",
  "key24": "5PjUN9RUKjxmPfuV8grja3QkV2awdZGtwsznTB4cBc1jRmVMkFiivYRo1j2S6qdpDRYsHN5ohhbfPsAy2fmT2fsx",
  "key25": "5Wo17W9PbpmiHHjKu9f5qKqKeCDpgiTWWaWipLTVJRgr5ah6XVfMhdmFj9qtBmTpf2BTmCRHnTj7nCA2GpVz6fDo",
  "key26": "4rWzLDq8EMwzC18Bmpsu2L2t7crBFkx4YXZUTkYtZis4bM39EzCfijwhTDe8e2GzH5jkxE3B4CPHQf8ibYqf39hd",
  "key27": "5pmUfkhvhfPu2wNMT6QbCtWGxEWm9tbRxPp2Nfz5LP9yxZYveT5JXu1rtjGm8oBXCQxfoXPwy3kLMsw92ELKeKXx",
  "key28": "5ZUAyuFmvqsEUHfB6rmYGjnS617J6D21DkthJcBXjucmNjmna8ng6gf5G914dSodMzSXaZ3GsVubnWqAxxpJAUo5",
  "key29": "3D2cPWJHDqQ2YaKWTVnrYsSv7b7ZHRVXpLEb6ekADSny977qHLc4wDvz3JXekQY7MPe5eWi8GhKehhXRCKgHtFVr",
  "key30": "28xPvcFqx7g3sKTT7iQ75Ao9yXbbW6KbedBSKkXchhEWHBLxwk56hqhCALFbjLiQNRTybgph8vjybdwk7h865JyA",
  "key31": "476BnatBTG4z6Jw4pczuVkGmdWfcqg7qPrx6r9RSqyUY86MvdLVhk6DfUJLkfY395kK5DMzfou1ikAh8K5iSmGL4",
  "key32": "5rBqp12XoL1T7mNWpcHekBKW8oMoBEBy2rbh5tehoZL1vyZinxvVCqBWogTMky44fJGYZ5kydLzLpTL3CLU4czr1",
  "key33": "2qDuNTu4Z3WUB2kxHydqaBRbLUCdKQ8f5Gni52qidBt6RUKb6Xj6ij8BeCe2mhaCpQ9sNn5qbwFZpTEpNT1uYJvo",
  "key34": "njZE898DQjf5Z8GGdY4Snb9FTR5Zk4JMBNiifs7fEPxy9rk2jTaXK47UHqbvco49dwyEVMNd7v2Ne9qEdszY7DH",
  "key35": "N9fs6BekTeXZ7hFsynijKmtmLLs2Y1MB4tWdyFL3D9btha69VkpPz8uijxzRxX3rbqfbfbk7t4WzsDAfN7ZxsRB",
  "key36": "4n5taohhkK6efkWQWzQq8WUbwWFHmFfvqtNMTiGmrYG2re1y4hxU1YBjtW7D3YpNTddgn5T6CoEMjkTpLy2zACvo",
  "key37": "2mEoBXN66KBb1ejbB7cBmmYhqyVRi7ZMAH145yocQpeS5xmWeaHMFSQbsY8Aux3WnRsFvBXBDjcmNckRg4TCWXzt"
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
