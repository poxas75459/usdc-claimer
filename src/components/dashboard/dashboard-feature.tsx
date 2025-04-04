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
    "oZUN1M2taPz8saeLgv5rz5cHzonk9Gu8nSLgr3xT4GvHiUxk4aSsWKK5ZDuU38ud6Ry3WfaVG3wq3HqRVCftLAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVWkc4aR7fV9t76M1mj8kA4piDyapiMGwstNbkzoWCZ3CHdPY8nUQp5Ckdz36veY48dzWxBLu8SNqnFxdSNo8aq",
  "key1": "27becFiwjQjykx9rMq9KP42auD6rPL35dmuzVgfCqv1GLNKB1MNN6jpZR3jzYgDZksCqKYERj6cuP3dyViSknDwZ",
  "key2": "26TH8ymFQBPijWmWyb5b8AWNEtZBsUTTbZxUtAbGWpwvC3Fgw2XRpZ8vxefxHUfynnCNcxoSoZ7gcbiPsu5ouHE5",
  "key3": "bJCRJaFNbCc1YogGz5gouEveQRuurnz78ZH3d6KgF6feNpeDZsP4aQdEPHJyd4Tk65wZhwKDSZZv9vnMDjpc4WY",
  "key4": "3V51Y8bjMvYmZ1d4tsdXh1ex2KnTyPnsDVzPHmvvBXC3xRQS811HR6SM2PqZyDwFD2D66Jtbyp5n8eVMxP9c4d1b",
  "key5": "eopPC1uR9SCYEmKvo3uCWcj67zHGphxvNhc14G8Q3yPRxfGynxHi63orn9m5j4pRXkgei921xdThvS21TbWqfqC",
  "key6": "1smdXB2wSz9xsY6gguapsfLoiK7fLB5CLXYLMHjAzvGCJHcLz821k9pkqRnuTcewmBDMxohwaJk2FiEXsAcPVQn",
  "key7": "3gsFzVDt4KZ8j6fzLbr6UjfWJFYuSX3gYig6CyfPGArsTV2F1hdfgq2ZLcRNu6BUpQ8BAdjrrxbQc2baPCobLAB7",
  "key8": "5ux224USs58j7CLr2kGYHrxb4nU5c7XPeKZw8ShvP7Yk6o8evfcif1vawakNW7kNQMJ8oLy8hkwutNB6PpuLL67B",
  "key9": "64PCkP7PJMJMstB23kad3WSGkg9sNbtHamQttE8qhUvK1DDzEDm9oUsSRJhtFz2iamPjoqx782QRfGYr1D2Jgidz",
  "key10": "4maonoWsGZmPvfJEHaESVeUqbjbgzseAbSrfEbiyLkCkKudDzadccGEziW8GPXEn2UWd2SUEiCPQ73rNF2BF4EtN",
  "key11": "E31T8ke7D1xcKMUXz3B3SuHa7WnKX3D9QoiEGENiFoZQU3C2Z9kvRnCJXf3VQJEywoWSBhVnACFEmxJSNmXur7Q",
  "key12": "2TsGZbavrufY8bHznG8tQog7WMt6kUykGzXTpAGye1SLj2KALbp8Hb4fvNzvQX4JAE5Wb2yhpk71ZULMiKznhmzL",
  "key13": "2kzs52h8sqprvVNZDFqRw56w3fKUZfqt2VzLxnzPXHHZCd2iSw4Dn3va2fp15e3RBztFNsXXKsCVXbPw3onhR91v",
  "key14": "3np8CToGjWY1wTjrEGbcRLqUTNKHDb5YGYgNKeqEfL1ho2zcbwdNG7WsamdWzcynEX19zsHRyyA6XHbjS61ApuX8",
  "key15": "2smZMuXXmhk6wq6B2EwggvqhEAi3gp84qD4onD58aTsmgREJbhmtVqhTagS49dCh7HCkytPjXERD4qRiDPf65p9N",
  "key16": "4YKC1mVJJ5sUm5bdypNsF7jpQsNdvcFzy7uGMzGipmgkfikmVhfzkmNkYfujFNcWjertMrqTptM8sdQ5btQCJmT2",
  "key17": "4Becf79Q43MhzxQw2SD5Nn81HjStDYN53uKkyU4JedtxbEjhYaP8DW71gkmxgAGj8eWRfMFGiy7FJoXGbocPowvU",
  "key18": "3MqPg7FaNRXBtUfiWsJtYLvpEedEETzNhQ1BT6AJaCZpJJPigT78edsSVh6yNeSRB3cDVmL7PUKu5QuswCadTfhQ",
  "key19": "3CrY3U8qARNPjtMBZ9zqKjV4fYvVMAt3qZHqcVQ7B6gztz6bTt7zQMXuog8ZVBsSHMV9H33xpFRAg3VSix7uVzGp",
  "key20": "4NoKqJKkVbixrWYN2Da5TTwn95LxtvdPrE4LTV6jZwEJ1y7x5XrXY7cdSxrfNT7SkwP2sjchUFYUF9GRMDhbjy78",
  "key21": "5dLob8Y6vP58855LtUMV6DaxCtqmzevYDaihoJEbDmH2vHrA1ddbt16AEqbBqG8TD2aLtHahMhqVLGChq5g2hVT5",
  "key22": "3R9zpGnwTr8d7VrBgTba1JZq5vkFXHSA4dxPz5hEdnPQXuxVjA14CbPFsstrp9mrXGjqCJcfy3tt6hdWMHes5wLB",
  "key23": "2bUPvWs6KnzRconokjhzJjLKQpk1CXWRYMjJEzf9KK6wsEBgWc2sUaBGdtDnDdxvwat4ZVvL4JNWTz4LvT3sMVaG",
  "key24": "2oMMESf98bVenntBAATFpALevxtoKios3Yi3WY2ksmDhMiF38z155RpUMfdTK5mZq9NfZf6FTQYpnNgjT1dkQyKw",
  "key25": "sZJfjw3rNhd52WdBSoa9Eudvfz4tgpzcfnAyxbHJxPHhfz6FMoe7irCtnsTa9qwzSRfXkLEMVvVXchferDCpuEQ"
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
