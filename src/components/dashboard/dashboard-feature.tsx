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
    "3P5Diua2tUxdSmZAW1PNrU68WEfh2QoyhpQTwEFYGwHSjMTuWuWq6x3V8qs9x65MaM1HFLArTEULnBnTSmaH48En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyjApnGKbWwhCbivEfuUALfSJNsgbjrRwAtJnytnWUPWkWQPDmKq4keaNNQA91dso533Z4juRTk63h38dzd7NeK",
  "key1": "3Uuq34xszTECzKu8Ym5qn5HtDajdz8GEwhuCyPJKYoegNjj4SpiuJ8VZPg5oonyL2DkvLyohzDux9qgVXhDfiLtM",
  "key2": "2cJXMdVipmttUWdu6kAAmQAZzLa4nuUNVGvwpvoj1QGmkNNpC7sXYTqxL5tCbTca5uNbhJa9vQscpFFAQTXXPPRr",
  "key3": "2psk7JVBYVrvvWBywpUc3mJd7dx5baZevFXjxhAxhjY45jNRehBZ4bK7WM87XJUtvq6QbHTJHPuweiSLg6uNXnDF",
  "key4": "5iFL1xstya9wzxvAQQSizzGq1wP6QzvN3CGVyCcXbdSJha92BUkb8kkVtSi1Tu3PBzGGSSMmkCG1vPtP4zqdPe2W",
  "key5": "5Br5wLNz59h4Twv7bb1RsahSYhqptzMqveCjiLUAdz8zPcGK74ckN4k3jrJvDV7yTCoqSsqe7Eti1bu6wtTpzdWU",
  "key6": "27ayA7c6eUgD4YhBgHtxbL5xfxucj51xhnWPyDT7sWuQFpjQJkiUceTmP3ekxEfNR5HMVwivDRbU6iGf9nL8fpQn",
  "key7": "LzMDogzxHbkWr1D1UVrF3D2mF29pvJ6t3WrFJZ1DfWNs3msibiDcLmGPSvRH5iZvsMvS3NRGzLLSi2WsqiTdPCk",
  "key8": "4TuYXCdscbcqGHLLvBnsLEHYWt449MGzBP15hTyiSVj4rwXbbEzkRCzEhSVsgeMUre1BpfhZgJsaaBVz1d4xpk3C",
  "key9": "3XiAdvFSpKFsoicn139RpXyNWyYGwPgen7JX9NsPyWvPZUwx6k8s5y3MTtxV2KAGwkRL8A7NcYgSDsreXtxPMqr",
  "key10": "64ogzKTygLvzL6W2CrY35ziQgPVbb1DwFiwT36JXYQqUbXWaPPBt3rBBra99eQawi8PVCaD3PrF6PVDEkfyrGkJZ",
  "key11": "4P2x4zFFaBxaWQNLTHwphYfJL35SWb9iU5V8sVBtxnQJ2iHZY4HMrD3hhHktbNv6Ys6T4yXDddoFc5xV9po1wfEu",
  "key12": "4zChZuPU3rbdvMNSwJwLgEnoAFF6GGwri6uqJA5o64mr4uEw9X5T1xKXJ2wMneng5ZH3XStRKLyHk4WYxe4oBAZs",
  "key13": "5UL3V4mMoUW98hS8v7dC7Wm63hq1woEi7hTYsrqgvG2ELwZmAPGWnNoxcGqBagbvDBfZsmqSXNLxX48ju2JC6vk7",
  "key14": "FYF6dfcJQ33JSz9g7n7KNjfDiERFERbEitfT7vJiXJAiY57T4LiyUdHjKV3rfpuAhE9RhAGYfS31mdYgjKyAdwz",
  "key15": "xhmAJ57upvh3Eqht9w27zeKEV96qpdj4AZavqH92Xp654WHQn8sdpAcDzfE1jinQSoKfn1hVkuPKqiQ5kyGV9h1",
  "key16": "4iv3fj9N8ytjx1rJPcrrpx6HxPiUF3UHTV9U8F8ui1ufrqCZp51WrdpGngWZJ6xRUCiovVtAvMLHwTPpgrLiVSNb",
  "key17": "3ouLN8AkSgtbr3QJjzRRCKQddgaYFEp5NK4kYsn9M23Svf64y3WjLasg4cvMBryZqtAz24rMhuD8FzPLwaUJnr4Z",
  "key18": "5KghcvJoUGTmZM5DfWxqHKWFFf8ovQKPZj3Vak3hApuNvoN56ZakwHpxCqoj5yEEuLF15pxRP9gxAZdfTNDQxXgQ",
  "key19": "3EMF36fSPo2k7mheeQn1jUVtJYsHKAwNVYthpBdu9Z4172HjEqLVDAGPfX3uYFPLeoSGcwqwgQK9RH3ML3Bw8D37",
  "key20": "55tXpCmkhPyg2pg79q9VNMJ5Mw3M5ZLRdakCoHeNGf95Keeq5rBDDdRo9us7Rfc4vb74b1EPKkFmRCand7MhoJN9",
  "key21": "HHueHyt2EtF7pSVAxZF5ZtfRFeGWhXjcdCX7H85xfWLAj5em4xBs3Qghg2WA2eRvutRHarzhqTsYBnfpMbNFJ2d",
  "key22": "5xqahTcnqnngZf7ygFgT9DDZhUScV1gzYVk47qTJQ9zKAvAbh5QX4yQ7ssZtToN1ewNEf37xJK5vXt6VBM2AatLx",
  "key23": "rdfuMRmm9xHYvbEoZyAouUH92oHgQGuqY6hpPaHVnRPoiQ4LDZ2jm88HXwVqSbFfsjfKj4PYeM2MWM3hNwEzvZb",
  "key24": "4LQ1zLoZGUdwdp9QVu13waiRLSmLjC6Gbj95KZDJWAfHsYWbT6Uw96avzRyBBmNVchWuJFTcB73qdy9PojYP9n7m",
  "key25": "Zo9FnMyttJbFZQku4CwYkBPbAdVc4zrmow1gfLFcRKc2PoNRNez2x9v8fXDx9kgMBcounQpfxnjWn33Ck4J98mg"
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
