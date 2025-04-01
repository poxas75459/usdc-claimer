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
    "3oj3AHHEX9FXCWPetq4gK8pXTiZjTgRKhGF1R86i1Dr58gFHE2SeAfvHkRve7vfoXboZ8ANcpdsdict38zKnefeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PL8Yh7j8fLf1HkuyaPs3Ntar4Z4TLJsavgfx2MoAtJqTyNMdETjEs1jF3VasA3URRbMKgWSxdxbNcX3GqoVeUEz",
  "key1": "66h337yEzSjUpV4iMDjBT9DAtCGEqTybLieGR9hXRSFpB3XiYro1p88ydnwkX6nZJocpwNQ1R7PsAoh6BaFDGzGv",
  "key2": "3Dk7Nh7QARNUZRuCG6dUpdbkphY3eJYUSZLVLCC7eYCWMdSoxne61jAdsbaeMHA8a8vTXAZWcXoR8yLkAgzLmrWx",
  "key3": "3GkXndwRGnT44gWnaXey6v9H7yoCVuBHafTfutctaAt8VFh7EbvNW4jYzHddVPhZubDjPXghNydemHQoz3o28Qup",
  "key4": "58XZ8Tb1RPbT3hzv5x26JeJ6CtEFX5MnAAbXTvZbqgvdLBwYZFdgtMPwgueutwC5TsgbJXy58qs5hBd4rX2Vbq4q",
  "key5": "5toXiVkVvZkhcrbpCUxPWjYsGi2yuraxm3sYH4kQpT4KawvhXHUVZHz2MVcQrUMhUuxG2QTCUSgwhWZ2nPZw9Xhy",
  "key6": "5FZSQUUbqB9X83E9vCkW2pQ5uemCW3icTQn7dx5JCepBx6714rDz6LiYdrFUSiqRxXcpaR2zHMiNrSs1BbaxkNxt",
  "key7": "23syp5tdiBEqvsDGYgTkpewZPW6o84dCN1tYqQDzcNiCFqxD8hfyMifM5w4BBoW4VGtJ7d2SS9BRiXeF1JuGVbgr",
  "key8": "5Lh4w8F7yv5bNwLbhTYwS6GwNRVqW6f8jJnySvxmdt4gjkhhSeGuucbq7ErSmubnibu6XGvSgTQzt16327cyhZfp",
  "key9": "WCnCLfkdSddWahXiBYbdBnvdP84gHYxXjuUy7chrbKhVUq4Gz4c6nfh5waiejSmyx3JQA4Xqc26hywuaodHVVW6",
  "key10": "3Dhq6znnH6cYfkinhQG8tWSsaqXKxBugCui7pmefKStVFjMTD55dQmgmNN5VMLs8tcpHDz1XPw8bQL3rnU1kYdce",
  "key11": "5dZPsahXUe1ybWwzVX4Ru9wthWsxDG3Z8t3itf6qNq8Sxcq4AU2qBgMNuWvPKEBBWVdj368DJWR8LkHqciQ4QNnj",
  "key12": "2gqL3Wkd24ZToghGQyhLdiwgbGWDaAknAyzShqYFnyjYt4rbnpDGTe9DEcxLT8Lqf92JUktUbx6FdozBgBw6pMCW",
  "key13": "32hy7Bn2WWMvq4x8McJD1TVdkvRLJQNkyfuMZxF6Pw2vxLmmfJ8QNxv4DzdbVTYYfvQ523isqziR1AFPpGzCJk8S",
  "key14": "Y5Xe6mu7D2MsDr8JayEHXjuH4D7rRbvnuG2dLLQv5UaMZcpKBcpV2V9ZNAwsS5HmH7riiryXycj6BuLjEtPeH9U",
  "key15": "3nibxTq9Q3oP24ecuDdXM4KakXn7TdibUZHPwoov5mTt3dBVgWHAwG1aWPkeyBL3YhVsHh89DkTMG8CjC38AUa9F",
  "key16": "3bc3iXz6xhAiG9jMLivS7NrMf2LwXYwFBNt6kKTcSukYyBouJNCVWYvfqdKsJBHzGVATbYt5eKXYXspNHCkuLneu",
  "key17": "4KDEi2LQHqnyh2BPt88Madz3uY7skBvoKCjRJFju4rBVbkuUZgadx1LcYw5q8goZeb6ZjoTGHPAPyCrQ4XJgPs7Y",
  "key18": "2nmQYRk3KYFcj4DAZbJL4txUtoA1WEA3LD4XgTJ6qmFnwGmrY9rDHVTsJczTY39FNzmExeDfqvdzzrNrqrU7hp6q",
  "key19": "FdirqduFBEAYLPofxCnLnc39XB9ux3FxER1CFr7M1wK8B6xeP12DkMP1GS4rwx53UtiAiDBnfpC23bbMMZsXWoR",
  "key20": "2TkZpnCcVB3bLQaXhip77nngB54RwmCgJ9ibvRgDYovsgQyn2ko9f5Ct2etJarVvaxMVC4d7pbZBSjp6ab4bbwYt",
  "key21": "4CHtXP84gHzvFK115ptmd6ogdWFKvqSs8HKTcJsZX4rNnEUtawxArACkts1DkCdgQZe8ngxcVnp96GEmyfxjTCzb",
  "key22": "622i8y6QwRyorQR3Ys9baML7zYsDz3eFGkBUTLtLC186n6cWUgDoZS2YPD8pwEaKxj6cATaPLUzN7HBwMeRu5CMy",
  "key23": "2bMj2rj7mFq4mFoK2ydM5PotDmXLZwzvYwHHMsixUJoKD85kWcGCMUaKt9tQ4YWZpzw5eJmPt6XijyQqpbQcZu2j",
  "key24": "5uka57wa7iMsqtzj32zP29S4TmQuAYRopAY9ThEKckk5d8TfFWvD4D8YDAtCJkX3ztgYM73Vjto3B3zWt9PDhqXD",
  "key25": "31oZr36FEG58PSabMUhvZsTPWuw6AEZDVddmXXC5pStkHM6oU1BEsD8gTNr9kWB45H35M1HC6LFvNpUcWQtMp9mr",
  "key26": "3jFY6TRu3SpVHS1cLdTa6AbT3sw6AawUqjyBFSTYSxfAFA2w4fWuTFKH2itameuvai1FTJD1bLHNn5B3MQbJuwmb",
  "key27": "54DDZX1mZZwxCabyXFAVTvmJFXQdc8tRTHutSMy6rsVVQMys5JqQPHqNZMw7E6xEjo756Z8F4tvNK9ar4wF5bdzh"
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
