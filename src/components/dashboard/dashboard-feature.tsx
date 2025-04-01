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
    "zKwpHN2zRNBSi44JqES6Rj6yKWFXfRtSutthFSCT22fPRobtxmTu7WqsdzBDh1eB8kv27WXFnKHaDYrEd1LdEW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QUdyhkweoJdbkQG4Ex6BBk9jqgQDSqoCuTXhBAE3iTm7sBY653Z6P2CvUPbGZivv2D7vhcxtoKbjNd95wBgmpyz",
  "key1": "uYKxXBygeqQ9Vnu6mpKuNuDcZvZYRkdfYdGNK5ttjT7ejQiVLr6CSRD1bRLeQDRXc3X2c89pUw8y3UFfbmsaUUG",
  "key2": "vAF9CiH8PZa6vPqwx9cuye9GCJpUmeFrK9x7QNVqUfQJum7uJzmfVzWRDbjMEWt4FnZL5tYkP3ow7vBjHhD8Vr3",
  "key3": "2zh9TyekMVZG2fSTLMDaarCCTHSiHHLnqqXw3fL7EcyveffqThmFrkQZaBoZcE5oSiwVQxJLFZ2Vm4a1tGjS7ejH",
  "key4": "xJrgUgj9fojqvkQ3N3jkbGwktYJV5amfP5ZesHBEYPh1kWbNwf8hyQRhXn3AKZJyxdnyyQFXaiF99CDPKLNKqHU",
  "key5": "4jaSHsLeo7BvTaUHu8xk5uPtgQ5zaDKrEGgyTCqpJYWnUtDMdhZTDjJ1RZG8jKy4tkTAwWe4B5LWAbpoNcyp4ngz",
  "key6": "3QeqyfQbWJct5N9NEAeFChzywWMPuSmAwJEUrF9SMA2a57hfGhDz9YfA2GHdkqJurSsW7oQnZkUjfmHwVGYuZpd",
  "key7": "57VnaUWadLzdZ1S7wFVoEKUPNcSKEmDdXW1creCT2CieEEgY93e97v64SEpg53g1zarhautHdjb242VnxSnsmgJp",
  "key8": "2i91oQqoFz39BFKAWo3jjR7VaFBJvEAakn4DnaU3n23r311h2yftC2bZXxGzn3xLLAqXj3Tjq2hXHnPk3f7wqVev",
  "key9": "5dxwrPegRNNU3wJnAD7jmz3kKwQKKyUNzUm5bqqud7e7PTPvecsKTwuKCBnLeuYU6zigVePSAjLr8KEAZLVcuFWW",
  "key10": "3ebZMYBtLo94Z1AqXhtrDDmJb5pPxtThE8uNQX9EGpMRumpYchzGgLHSLrwTKoyAMafpc395USyQSjsKrypmmW6k",
  "key11": "5cpjqHCLjCaDu62RMwbc3UaGsPS5KPvYSPrzLAEdveBnzYRDZ4pbEmMCXUqAS13Zq1Mfqs7EnCdzz3jzpmYYRvmE",
  "key12": "Dt6VJPCA1h7sFbGCDsQ38LKipRCVyFg12mVhWdHgYJ33psYHRNGz44XCpdxgQFGqmcbz5Rry61HFoSDDo6iew42",
  "key13": "24VzRBe1mhrdPkrCuQDXex6RM8EwqkByPRYxmEH6v9mcRfpcRA2KCXLLx7ovuU4g7Z4nYkYCn62kJoKhWGPbGuuT",
  "key14": "2FD4oeZypEGyaChRa9j9TXSm9AkWpYpyra6Km9xZR3XRUcExgmDACK4M1sn5kvcgwnJVYxvJFzYgDXQ9xfVFX8uM",
  "key15": "47bWRAXHco7U6sXkMWRzmCKDaJ6CizzbLczckMM4L5CE6xekyWUrj8oTK2xMDJS8j39z9MjSC3MXrmJzPAmnrvRN",
  "key16": "5NwLU4zVA2Ci6142vdXu8NRfod7c41NYjYDmqrEcPU44rBg9ucfVfNMsMAdBUyMoruAyn8PsQ4CNA84RyHPaynVs",
  "key17": "552VGa3dLMiLnnsbGNh21DiBfaaNEAFUEY8gibpcB7SrQyAGn5S6hFhjEoLxdCXetaQY8ryWtYfS6X55ZCeBAz3b",
  "key18": "4pd6S7JvTLUB3eES19iqEN2u9RmmNpT1W7RLgVJKSkBWHZNvTMsryBRADJSnSv7jw9MH32e8JzZFDkzCUUDfgrMD",
  "key19": "2zLhsBAJgo78Loekv3QkQMqZ6CAhxVKmDW99j5HEzzgkW58LPr11MxLG7RhBmQCMaAJojunMVH538f8mccUKQhQd",
  "key20": "4cTxQ5sUHZC6T46XZUqsok4DKddYQqWZTbVaz9Vv3WHwWEQYsG6jJGUHZCRT3BmeKh6qANjgyx5pFarbvtcfXzWd",
  "key21": "5h8j28djvY1DnoXhWSTsG5fk1hVdADPGnwYWyq3g2kH5MWjWPrNi5EKUVuMFw7eCaeNycTAGbjSuxQvFEKKoMJK",
  "key22": "46kgwe41h6dSmU3vW8omGaftn5rjvtsrb8UjzeqTZumDo3iALbbVwgsTV6uC6g6ca2LnYsUe5Vok1EBRYe1w24jN",
  "key23": "4CwchELWD7ca2L9FDaZ53rRcaqrDKhrL5X3PyWbv8iFSf5hLjoUsqJbnRDsAujkz7AwkToK7Nk4HSmjrvL4DK2kJ",
  "key24": "2UXyBiNMBdvq3VMy34ciCeX6TshAyvJMj2TML5nEo2Hqx7mDY6bspB5WDnK8SZKh42rvfaPKSaAYKrmce4rTC9Dr",
  "key25": "4WXmY31ynfcSqxz8qMZqYYELS2Aw6kMayxjqyKVmQJTJt7VUspyb632CakSqk37J4acBa14CjwtKz6iABB1tSTxj",
  "key26": "3ozZsyhM4zdcraDxkvougy34BViT2neRj5BNXjPk7wuZn7xwT2kZoXRfhjQTnQb7dPwdGxn7pAgRQfLGyXs3YikS",
  "key27": "3rpp4RSRqxzkYMkpUCdx2V9WdQ3cZ7HyEZfRiCKwEVCYyRdMiVzAxuUQ3mb8mnAjdxKQG6Fn4S4bMQhQSTBRbSm2",
  "key28": "5Aii4YPWcTuSAEiQ9gEy5q6FmuXPEXSrpRWRimV4EtVWLyRQhZJTdrn2Gb14bqHnbjJmGpxLkE6qdfTWLi6puHv",
  "key29": "FxK6x1yZ4bqnWXFwQms1QTkq9zhFRhBqKC9fk6QfGC7JT9R5K5HppAcLtZGg8PZbVx6BtLfteQLt16dBNcwsWdz",
  "key30": "2rbbivJNnwEV7HqQttWdEV5nZwkvTA9VKH6ynqic28RwJE6cL83q9aG9CYzZzn4w4ou4TzUUs4Jp8oQohsGnxENu",
  "key31": "5wTwZ3aVNuysRHWZPgA7bzR5Xu3oU4WZ9bLB883diiYTKidNmESJsAgLMShagbHeCj6rdx66DyCqE7Q77q84HJd5",
  "key32": "5rW9oTAs1y6wEKUAqq2DUweUKjhjBdbM8rvwZTMaW9zwkwFTgzMvuHSrfdPKtd1cgL8a8EFhKxqT1MiP2k17Nguj",
  "key33": "45k9mQpZjM7nCfhSFgE9EopVoxHSXLYKcM6m8f1293X2BLWf36Yi1EDuyenDXnWhSgW2eoKEDvxk2JYZ1Mt8pxvQ",
  "key34": "629zdVCJvzLZSX8jd5RHYRnADLKjC6CZ7q2HgWx1KTg2r74zLJ8LxeL4eJ18GFmcsXSneoUwyLhkpsZDmf4prjVx",
  "key35": "2uPmcknjk1WL5A2NSNwoLWYNFKSwCd25i2mMZEXjeYBdfTeES5P5Bd3CSxavXGmshjocN4xpViJpYhQ9NVx9kgvM",
  "key36": "4cMWkNzRRofQsTE781rtc9pvL99raEQE4pYvskYbRPabczs7tE9Z3QFtacQUFfmrTxUYEcuGknBgHGx88FsDgkzp",
  "key37": "4zzecmEqbbMMe6QXr9xoAujH145yaYwxnewVZ9Uxxfyu2sCrVR4s6x1nPJBNBAmkrEh6oe7SvvnoJP6fNutRdZbi",
  "key38": "22qG1FyJYTDdjjEE9PL7nrzkx3sctmJ9Cc144KEaQJMoiZzT7wGhAcqFG6kxSrgcMNRWvHJuB7Sw1TyvEvRk5GgL",
  "key39": "4k3KBea7UkkXJm3uvr73kMoJRP3s27QXvAxRDVeJ4RoyxJzuTREtUkibqNfn6R72JpGFm8JpU6fdsezFX4at3tWp",
  "key40": "rWijjuf65x1CTZzSR6LnJsJ4foiAYiyKHvVgF7cyHLjsKw5p3MwEoe1rCDkawpogghsd3zvwj9n4SUfjSQKmKJ3",
  "key41": "5wYtyvQfNWHCUza1VwM3rkNkWQP6DjQsM8VQCkNJPDtknpxdgEHKwdYqekY6tveGJmZoHiUiCBSyryUeNRLRN5nj",
  "key42": "3BgjphTBdKm319B7mozQwoJFAM2o9gpczBrpDwywWkyfBZg5iknTqPXgSr61ZpgXAFmeBRjqST1DvPyNhR8pc4j1"
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
