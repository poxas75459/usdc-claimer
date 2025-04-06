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
    "66Te4CT4psTEVcjJjART3xdxyZwEzeRG2dBdKwR5nW54z8WiHxgNFUktMc5Atz9ksrv6txU79Gxt1QWQgvTrHxcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4678RcSxSq7QitxhKffaWybr8hEKTmpN7AcTgeu5xvsCr8vUHS32gawmh77jnCivMwUx37d3SxNQUdce7aeRyTje",
  "key1": "3Q7dmz7if7sFCcaKMTSoaEMqfH2PvUa8w1VwhK2TMMS6nphFoDXGsxmjtXz6JsiSidCZKWBwG8RPifMakBKDLfQK",
  "key2": "4fnUZmH8sAzZDcUjM9DTWFtqv3MbaCjGtwbJXo5xnutA9BtbKH6vQ8LdLGnKpaJkCqsx1htViJSdYtZ77xiSSihF",
  "key3": "4ECLvRCRwhqH3u8tMsqxyusokyhHt3qdSaE91kPqfDucxwk3xsM7TrvPfQDTZRcUYnFPMy7z2peWjNYbkWjsmoMb",
  "key4": "64cRofV5on1AC4LEmUcCCLV84DnztSrmmmcsRZpJgzbLkJ326VnUYvfzFbUqhwzJzmwsNNmepqt75ARvAmq2b8un",
  "key5": "3LFjs75kjTeHjfBAykK1ie5nsTRakLMYHo2BJHPE8ri2eg2EMHR6yD2gTHhxwE53zr4SFEENKnYDYK6Fu4G5uM64",
  "key6": "5jAyCKD4z26FPDmuN2fafn5jg5tEewpsNVMD1746aDnThaMFcgqCbYGhbafUBSwSJNEJLVhay5eGo53j1jeXA5Jd",
  "key7": "3v2Zj2heP1xjNfqbCBY6wUK3dqxzwZUnTNAxqZUH5BKb2i6CoQhB2aZ3iB9X6UzXYk9z6YcKnDLzkLSY7WwADU9J",
  "key8": "38UyGaQu3jBtj32tuXQiuT6SSs9XWyEF3hj1zLn36H52eAH6oasLJ2rEAGqkKwLsFLd9josR5qh6bQ1WMxvwgH8f",
  "key9": "54o1nhwZgqsAJzZxjfU4VDZdGjzMVRwGc7nXWjJ8M2zzLptkLVvbHWybdSrJfa6R9XEZVDTxdFjZkmeXnUFmXeYp",
  "key10": "2ggeTBp3oDeXm9P8ub7Ad3fPgyjuXiWVeUtdpX6q6bER3dxhNFoUweh9H3ZEtSkYcsV2Y6dxrYHqAXKzkSvZ5b36",
  "key11": "rJUZxBk3We9fmMnLQqAZASxLRt9BoyKu5Ba6rxAZaDZbQU1Z1f2tWuj1isqADaWUL5kF2iMxPfzcDDmYmUQ7qgA",
  "key12": "4eYqYFuhi81fhe5jKJzu8QuetpQSBDMXJWFWsg3jPJWtJNeHTfiW17TCNmLJ3UxyBJPLcPLs4j8GKmmhz3sADq3r",
  "key13": "2BcHbTVdMwVpZhDjapevDhQoRXXgQ4ih3GxZjBbJAjcqVRneyBLWyi8BaPStE2L6n2otskvCt8SJoYUaAdru2Tq5",
  "key14": "4tborW3KZHKntcCraAFJ2wTADxzsrd1wPR4bj3E1otRTNHYaTWyWBF87ZYPEezYqJBXuR2BbLhjdY8Gp5C8aLnnY",
  "key15": "27qgHd4Z9NPR6rhhZ8gvpWRvNFVvdc11VhtaDPzPxK99tfCW25nSwHuiyzMpzec2S7cbRMLKNsDaMMsS76C8RoUH",
  "key16": "2o7WQDQjwF1ipkeks2GhabndLHtPgeh7RZ23MsXrEUC4MbWtx5QFaghhVZ1N3AfeaYYLj3NjLvHj84rvkcBirSHT",
  "key17": "3w63GwR9FQ1scUcBgpy2z6hHW46h2oCjtcZXNnWVP68GvdTZGF6McXqiXiyJXtffnEQjo7EiwJiz4ceCnUktGaki",
  "key18": "3AorpqWi3WvUVi9XijNZdoT5W2F6fNrjLVWaRF38Ug7Gnte3poTpbwRRjySefaJCYreWpWMaJ3o85uRGwpVyB1U2",
  "key19": "cbZnWGkohsovRfXt1CdsvfRR1J5kuP3N7LcUPNrT6TgXcyQC4REaDZVoWKazzQswYVKwTJTbvakGNtSDKB52Fjn",
  "key20": "2KRvvrSAqWt686p4YvtG9TBHbUCLerDuiE9CfRqr4q3K5J7iAv8EdgkpZ8WKR4U8CS6oZpCwJZkkhBsR8jNXhB6S",
  "key21": "5o4hUU1USArWidXu1WjxAvNkFyebJSKM4s7E2bf9qB6vPBbB8btm4jTaknqHfAH8w1vf8pNg1bZGzh8gnnWAAMiK",
  "key22": "2L98yRWtFDzmNqv9Cj8mhDsDtbiaVVb6H5nqTn5W4aXVcuP5EvW2XFvsHZiPNVTAqJzN5SwLua4RKwoi4AH9C1ds",
  "key23": "xBdqyp14S28yPVBbS95JWbFRaBZReGEyfZsBSRZMWEMYepMfyqpAyWRB8JNfonp9wQELUQtwG9ZePum6N2BNyYo",
  "key24": "41zgWYhWcQe1YaEEV3GijoSNrfL5QiGKnP123ApE6H4Sg6yX1dcwoVuWXNZGmf792KPhNX3rPDHKCA8mRqNkXz1W",
  "key25": "2QW1zXdNvk7cUhejCamnysWrHHWETPYCYNqkvsBBVo7ENYKk6tCXoNddbtVTKcosGsTQELQLZRJ88SqcoASfxxqb",
  "key26": "vGCK8E54epcr2mTENV8jn3UqWdF5mwZePKLNA1fL5ANWz9icuS8Y7dr7M2Z61u7tab2ZrpdfGYuwiDUoByYCFb1",
  "key27": "5cMtzEAjEBAkU5JQnBSAWNrZcK5ZWKx4mr9Ga9qExVgUBJVqGT6ptKE6FYyUq4Csr4sHNSmBPSoWRwYtyQkT3kz8",
  "key28": "3C4XxwfX7hW1ETz522LeTGQ8NpDh9ML8dr9RMFgbMnepejmDayD12zm4KApQEoRJVvPymabgD2TEbgrQ8P9yBzta",
  "key29": "WpfKWVcZZ5DcuqmYJUKBRGUg2MLgt1wNuFsK222UZdCM5KGRSidNhv3UCjVbzPiKk2G6h76j7ijwsoS3E8roEKz",
  "key30": "5czWDxsGw1gKLLvCWpUnS87KTrb4AEYrsTsowuJXqQkUQML7nXS4vA3i9ZdYzYnm4t3vyU7wA7j3Lfu2tBRDRqvC",
  "key31": "5sEy8nhyXbRLnyQqpriryn3MjKBEF3RVG4KjS8yLS8S58RpEUEigUcrD9sV23QJr2WoGRsdNPNr9xUr43H17aNy1",
  "key32": "2GnADWeA57AQPHY24XE7XUHvrkBy9kQ4LDKUWRtmApavEsbhi5Q9MGScVaBaLk5jqxruvsLrwHR515kq9YvazEEC",
  "key33": "5Jv7patCJnaEyfKEujHQ14keSKjoTSgmd9AjPAAvrCe7ynEhnKHZTSNzeaBj94h6PEnfXhsEso9XKNGsbHGr1K67",
  "key34": "32pTfoNo8bnFcNDoZ7Vo3qgbZXyhFLTi1gg8AG9FprZihjcPTF6qNvX8KXjANquRRtiCfT87dPZHE3D4X33HNUS3",
  "key35": "2vkgcTXYyVaPpg5LryNKkLiDu2UNNtLQeWvCzb4AEdLm6fQRhhsgG4zUs2GnjHewDZVQ4AsS6BVJuk7nW7hh6BjL",
  "key36": "5iRxrFDrNHW3UPM8n3JPj9LfR9pE7S3x5zP7ft75GzAuPHtByLqgC2uowN4steK5JsqdPXADBPLhfaKUQqjJQMHR",
  "key37": "Da2SYER7srFt2b4NFTZzCNQURhVXS5YueQ23XW8RLwJtxhhexg5PEWacnK85XNYydEQCC1hxgAhwTRim79AXUCy",
  "key38": "5bGYuSA5RpeZKzXU5wGMCEowr9o1bDfg8iEA13YSBPgG8ezaBTkcwfba8obRzdMtozaBwkHDpFNsFmQsj5ZEB9AV"
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
