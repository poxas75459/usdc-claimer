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
    "2nyT4k9K7bZw79AHFskP6TpA1g4JUDqLRAixiiz2RRjzRerV3Fg1frpNEHGHFKdtqsBb5ynqgdfGjXW3dXVQ7oPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gs8UjLvzZr2C28S5kmxvvruqcyT4EWtNQW9x42KSmTpgvdEoVbBDp3uXNV4Qzf9oEpfDq1GWdGgBv4kLay62Gir",
  "key1": "bRDndPEzgpPkf9RBCc8BtByM6hXepfkxVjqYgry3wyZQVsyGrM11S795jH8Bc5riZiaGWTavmg4K9tVMiMZN6Tn",
  "key2": "4wDfuPE22iCGaKiVn2WXx41ZBJ155oNChcxHCSnrfboa6uSxvKBYXJYiYVaRju7Z9ACTyjepyqAPR2pvudYgwUtP",
  "key3": "4QaEfLoEVd53pfwHMRjd1oMn987t5Z6egtiHDugbwWjD3U5Zejk3LihC4wA5227XbCuEyYnyTTrv7JCAKrHYubw6",
  "key4": "2zzYuezUXn8UP3xExSdbkSkVKeUopPsf7KyUgiawUJA7ikSQa71YLVJXZQCTfZfFj7Ppw8T7PTdrZqVH3142L9Lb",
  "key5": "4nywNUxkEiGCouTuGDaqvKudrYUisto9ELe8Qb6XJ21ago9ytayeoP3D2GdjJhyqdasjTmVX8zfJNGT86gSSDJ5",
  "key6": "4iHeSeSYVPNbk5LYh6CuYQYveon751y6wXBrAwXpeCfCqBUmYVNvMw6Zo5DR5KM7CvPV4U2C5eoCqGDfboJFEN12",
  "key7": "2gpT1DX2HaU9D8Mbr2gxtrteikWNtLPLts8JqzBQb16XUReeLX5wAXCpzPiDJhS6rwfFg4aBZykt1TRC7DNqyTM4",
  "key8": "pTjtdRtjQqyuJKnytMjB9d5KH5BdRKGtDMKyCKfrD7QQarQfZRwvU6Zo3UrQezcrawmJveu3HiaFFaXbomRihbo",
  "key9": "c5cXAEC8ShLu5w5tPkBajg7c6SAPXwHi26hzuF8P57rRoKMFqUDHXcqxm9sw2gEdCDjB7prbLM5iXEH484nqp17",
  "key10": "64BnBGFq7yYsNzkAKvSm6QaAxobwUqxrJ6vdj7BBDpF7g1xzoeSYj32nB4jG5hS3dCHstVQkuWrtze5t9aRkgAJo",
  "key11": "3YTNrD1FLr56yo2bBHkCxhKEKJMkFABjZBsReCBMLA6Wvc2qWWSzjs7wfpqrcFGvsNpuXodCFofXYR6LeWvZpyuL",
  "key12": "5zTa2WSvFwB2WFS6EhkztpxFqAYXo9bmLphHQ8n3j6a3gYDrNR42mAmHf9qfo1wqdh238Jcab4pVxeBQapPjSWoN",
  "key13": "5eHiPZmUDJGJgwYK28ujhq815ky6NF7njXAF7Rd8GetH7krAGcNWu6wQyEZdGR6jp1PCxhfwR6K9e35PFsj9VESR",
  "key14": "2Trhs7GnLSbxprF9k93o3BYGEg5jQUwgVDkhA9iRrgatyUbfVTBMdPVrtt4ZbNsMFcyj5tswRWrNRk7TQLMbwS2U",
  "key15": "4a9e4BzajUWaafoHi2EVbNf3KKnVyd1KMqoHqxbHToZpLMM6Rkmva2MyvFy5ykTBjBR22WVAeSjZxAs9PmxdWuji",
  "key16": "3NvCDQsvYpkUb51GcBUVaJKEtPoWph8ew5VzQUM14WEPBN4fV5dqgA2qN2thMoJYBA3yhy4vwrJtCqES3ZMbYg7K",
  "key17": "4cHH4358wtKk4BvaPT2eAUmD51Dg3bAUaZhVK9fHfaRn9xjhGT5P1jtodeDCaC6rrYXVy4hw3HSbHcmmW5WXcUok",
  "key18": "3pYHcdUy55hgWYDNVrnauPuoSZG7P9GQ4wneM4mVkXvXEnUTvWXz9onZrcVNk5UrF4rPeihHDy6zApVyyoooAVVb",
  "key19": "T33oT5n187XYbvQwG7Me26MwMS4tRtb7uuujkc3wtAk8cHJwDQYriXQFgmQAQnfMxv5un2LGFjfrhrNVY6DddvQ",
  "key20": "38DqeKQQ7kFnuibQeahbNsdjiNCRWMsBatk7f2vXgQ2MMHNfcdFvcBRLBHvYxZb2tovvSQVZjpMoH12uKHSYLcKk",
  "key21": "5yDxTazsn3cCrDY5dPFx59BWg7McqADqRcJcm79MxDGGZsGsdAKzMGhjvVo2PTKR4FnDsr882KqWRFQPUC3PEBiW",
  "key22": "2hA9xkt8d1QNT1GUR6E7wPsy6gUBs5qbDiTvJGUhjZfbmENb9W5fBfCKuLpcCEm2q1MsU4xHZpZkLQZ4DEncNaSW",
  "key23": "25Ey53epUMNoT6EC8dD4xJGeddC7Gq3Nz3H6CchGMeHx4kW57MK5Fd2GSUi9CKSBSLjNXBpq8aJ9ztUieNJCeKgx",
  "key24": "GEgXiKsihRZeTDCqY1h9aumbKkuY4ztrRT891d623GbsBascDh2NzGmUxrSiRJhxRChyaVVQZZZVyRk4SvUQGmA",
  "key25": "Aagv4vozAoMHp8HoXBG66mfXCNHP5gL5fjGXWcx4wL4aymDn43VuA6MpgzdXQvpzcv5UsawKEG1J93AR6sSrRNy",
  "key26": "352Td9MnSTDTZ6wjJMtmh6mXdd33jq1iGFsTEEskEDpFrB9JeeMkWiAciH9m9zChPdaYnHjyCUPsd9z22cYLYgaC",
  "key27": "42ZkjyY1UYP8f8BfKzLqg4mmMXya93e5j5VTMy5o15DNNyNH3akmJCnYk4MTzPqCoGnKsnwTuw3Z1WxJ5ykCY4th",
  "key28": "252DSPyX2F79AVPPQNo17piaf6B2yKuE8qULaiQ8meukycWxDkzFFkWWFzbrhgMN9RwNCANtkknsyiuwKzSPV5uN"
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
