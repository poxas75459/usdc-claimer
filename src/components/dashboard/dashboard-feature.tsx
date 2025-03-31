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
    "637DAyEwY55MCVuFPKtk6sTzoUu8JYBnMskKEu1w9SXLrriedHnUm3krxW636rNVTsdtYNFFwcjye9wiuJMpzUow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkmjN1JcaQPN6E2m9DhpQ8dhvnPcyZtBYCZsBxUVjbdZZRAUJtftxU96LJPtSCXwD1zXX8fh7JVh4jEfBAdR2xR",
  "key1": "pV4CvgsiyAC1eczxL9gLbTP3Uvu1K4C8yTN7nmnwRwAenEazxiWB8Jd7cHeERHqvf3E6Zb2RqvoSkSmZac6mJyb",
  "key2": "28P6yKZkgDhmAZievWLvG5f6dkuLy2mvPvnKVQTqCFzG1Js4ZhckDHPbUgMmGNH9s6tGtrx1jkiZoKH76YNCxt9A",
  "key3": "2Aendf8U1eSReLdjf33cHLBnsFfPjMhCaUtcRcFwoAN4PBHekci4A9djZobRhDDYKi5s5wbaRDadWpLP2jV3AqHA",
  "key4": "2eVtzDKnFoiWstJWVyCCDxU6RPfmeqNyNdoy4p3hmMPJsGHsco8LyVd66hmLoosRJF92JLvLKHxM7WQsp4RDvrVH",
  "key5": "1NRasqEn4YgVe5ku11ec81qszsvWUSYSE9uiqfsKxSCZNoV2y1JePNyPZR4sdT5K8GoF3kR4WaA45CgUe2fdcvj",
  "key6": "4rDgzUyaadZSr8493g7itqK9gYTWW29LXcjW8FuPy2pnxQtisgprFm7b1p9hSQEu3q4D2eMCCrKHQc3cU7gC82iY",
  "key7": "58Kd8UcuToHf5kukL64EnCUjMvDCR2D8FmrrYm3yaK8avoTknjJMQPfhYRdrVjPDFcMjqdkyggLc4q9tzhZMRmpT",
  "key8": "vLRrCa2AsM4vZiwMiA1oEJ6WcoydMmQRivAa7vGVNu9D8huwwMGKhmEzoc8SFDTTmFoKs9EH2YGxR1KJ2qJvmim",
  "key9": "67GzTA7rCoi6GGsxy7mkMkvfnLb2XDpHK4hxDvdf1TAKS7FAdqqAYuut1HYQShi1rsQb5FXd9YcDh7mvvFwDTyVv",
  "key10": "4equ8wsZXtpSyG2baqnYZi82SWq9Fe2KaxcaTrgtxFY14WEMw9VzKt5YRwNcm3vwMcT6ypfduYXc1SDCsuGXhYxe",
  "key11": "LCVHTmkgiLjcXtxzkrpAo5sefeSCy7ZubxkM5iZAqNqyYGgbg744iaza3AP23mj1YPL1NGTfjnonyMNy9CJD8RS",
  "key12": "5WDsng8kmTi536EvcTQaKo6Vmvuetv5p5fj1VsgKL3GGk81gGeVmWPYi4Q9h4ZeDooCHhXcYahytg4LRBgZwngSP",
  "key13": "45CitUQUh6dmn2rUxTS5xngE6ttRgsp4rEfbsoetAob7sDbvhoeA2x9sKLCf2eFdV9UbEEZqcKRariLCh1V8jvcn",
  "key14": "4LAEiBWJcEwydoWbs6pGgWE22V3BmRo5WqpW9yjx6kXcayojafwSh4kefZePMM8phCySfxNLjCmNFCnW8AHNa5D",
  "key15": "3js8sQMAWFsCcd1wKxmMJzoeBVRnpfkBTFsNBunjaC4fzCxY9r7vYZhd6U95J7XdfuVathJcsvKz9YGJwQCF9gex",
  "key16": "5Jg4vsqkzBWrgCuVKQX5ZXWwnPSsprEg5Magj8cbGsGjUdmcra21wec8Rx2v7UfHAK8kKQ85qsKULkZ2VL8ZhFbJ",
  "key17": "3v4yAQwAxzH6otxgEsfUmsNL2PpU4e8kmGCkdM4Ki6AKTR4AdiRQEghbJcVhP9fc5xpUjd6KNZHK2WUGu7GfwZnD",
  "key18": "3uvrbfvYJXPd6JJ1X74UXmwxDhKoQAME81g6PzbfBKwdv85N7s8Cko8DRkiYk7JjxjBubnMZJEZqn2qMqwVp4ZKi",
  "key19": "47N7SKmap9ymxJjUNCYzkyT8xxa59mwAxuuTJC5rrokdHPYMy3HPKokBtNJ6raUcqSfJs99uJDXGqdijz3V26tPM",
  "key20": "2zNbjqNtD2vbX4c1Z17c9w2hYjbaqzeCcM7S5ZW4tAH1Fq1xwSSa5nLSfRj7FWbDogLfSQbC6zydctwX6iXxzqWD",
  "key21": "4Wy8vH5E4ijH8QUWa3Y78o6m2nADKTg3EGtSkdDARoMezjEkdGzmwD7VY5eJ98t5s1m2EzCkpXHzfDHgBT5hCMzU",
  "key22": "3vMPvfXjZfxEztxV11aM87TvkHVR4JdthsCHBd5eZtFR4ByEqoQsELrUFz6kFPHPsWXBVQjAJYtE2BR8bVj1ZCjh",
  "key23": "4tWbCNXhLp2FJmWYLj8jAQBdUdppMWTnZfdQvf9dy58QbvAbrVfR63ZRmzHktHHdK6yy2H6UTGABDMGhDPBLxKbj",
  "key24": "5Fv9WBMH4zavwwKseVirEusSaTofg4FRvC8NBCV6UNG4JMJyDuKrXeUGiJYkvQJ62qWXe87WZFkXjC72rqVs7Jhi",
  "key25": "5vzMdiTAmnV8U6r2hNAeGZMWfp6jYaStzc83QheBCaUTM3uwXGwhuMSnZQh4yHDE5EybAVG1pHTAfBBA3141CtHt",
  "key26": "59bW8SX1FukeAhf1yniwGeaLd9o4wf2QUAF7gsEVRRXgGdxPBJL92j7mKjMLTQTTGf1BnrrKzofhXK39Ko4VX7M5",
  "key27": "126qBxRBZGddE3go1aRuqGxHZq1mmAPMSQFCUf9rzQvu9aqVDZKddPR7a5doosEm742Whj7sB1AWAosSAAFRJ5kJ"
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
