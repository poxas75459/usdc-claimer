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
    "2QTAHE3q8893PbKSrKgaxUwbPKKwk2EeJtH5mpRzbmaSvQ9UTRArY4DQZ5X2AgA7WR7kMVD8sLPT1JmHjGsww8Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwnVxUpxuzE4kzyeZqPP7MczaMLevkDFf4wBx8gYrLJt6zswWfJRbajTekXpyo5fE6uaTc7atT7vvdA4g3na5Gw",
  "key1": "hn13it7vDUF3kBy1gzt4nVyZjks4R5B7ANVcdmA4V2vpfp85QPQ4jR4v18drCvKuSx8i3YUsMZ4SdLEePPaHB8K",
  "key2": "31vZecnYduWxLMTq6KTEiwDmjSCpEDgfTR2DuKkSXyri6tXeVbWsFHNUwGBvx5SDmEcRinS6nfcEag8hmymf1hhm",
  "key3": "3DdfXKtp6ZpZdkNx1qjwDE2Grv2cCu5bk1QRyEpQ1irpMKWr4rRU5yo6woT6oPiPydNiSrPH7pnnWtYSE5ZeViLT",
  "key4": "2ZM82f7uZwuTZhLvadcPNsubDFVj4VaidQQ77d8zFr4AT3JXEbp2k77eMyzi2rVncoSUzxp5yBvkVD3116JQwJok",
  "key5": "D4T9xBSQEKFNTx3nCMC7vT6PLprpBB9RjV3VyTN8mC3k4M24sC8Eq4Zft6VDdxcBetY6R3wEkj4HNoqogc8FMbj",
  "key6": "3r8x8Usv691P6gaJUXC8WFSCfJNFRVfE6sxt3eFV37EjGoBHVwP4TRzbj5UR9VgMGMVMmfaC3pX4hrq7B2iJNMM1",
  "key7": "4k8aQwru8iYYt9sGRynz6Pwxy46qGWeD3zLKDEM2UyFJGttVmwJ9DbtAGAZz6TrJhcQ5H3MzHVvvH1uuYHPW1zN6",
  "key8": "Hvpjeo9zRStunG9VmmTAFzUbmwXLKy7wgVphDFsNzrgMk99xcF8fvjsMMk19NdS42oxVu1HhNURxnN8x9qTa4qM",
  "key9": "37Si8LMuYbbsXqr8mnuUNhHYdtMRDLfZnedJWu3heHdCBcgJ1XV478igqQMdpKfc6WjtELWCbTbHGV5df1jFYfFn",
  "key10": "5BFKUe4PwoPUycEK8XFRqAFDH4CkqJ9fViFgzQ77oAz5Ap1dARQ4rRxSKe5bhRsiUsfmM1DeRsVcbKo9QCwXjKiG",
  "key11": "2hJ2ytHy5Lv2V7BfxGayDgcBHmTCqBVXjbB4oJtXKWmc3mHC4AA74Z7ES17ti1bCp6gZHu9tm2dcufTgQAGf1bou",
  "key12": "4asrmD6bQEqN4ZCQgHhQq47EznwT66C5kAdhrdoE7n7XDA3TrvmrhX2bt8QpvxfGqRyxUuNyuGdTSJaBimcyQEEt",
  "key13": "3N9owbhdZnbUrBnV8839VG863fP7YHdWxax6rMyQSeKNgjHugwyUaaQYTeYC379bohLNQYcsn9NELoLTy3gz3Tod",
  "key14": "32zmA3ucA3jmZaeL3DJubGokPKjt38nXuJRr5NCMGfpjbxqVBnmC8mFQ9w464bt7TK4vd6fiuoDdR8tDTNcrkxT2",
  "key15": "4xvhtk4PPz65S358F8a3bip3rGg1uxEB6X1QVdxwAz8YmrX91Qkxc7StBvtZzk9DEB3eLHBP4rdf5S9YpcnxAoLC",
  "key16": "3gFhwrwmWfEUfu1HPX4PQ4pTgnkv5WmePzh4Rw1Mmrvr4axB2F1SkHKqFqFZUmmYgpCUpVpaAeynr7jaQjEJ9uCK",
  "key17": "n3Lq1NqsstLNPZayfgixR4RvjfiNU35N9YaKcYqEdw5CfT34Y9hbBnHWcKTrKGksQXUw79ebjtxFDcSNabjdxiS",
  "key18": "2FJ3hcXCC1xjXeHXXhk4PX7DWhKhqxS5qQ3tkFLgMpigba8cT949V8UpXBmJ8JTcREGYaXZ6hLKQtm4twCkYBNEk",
  "key19": "cErawLCuLufi3fw1ADjYMLKkrrNMUTVCf9QkUFtLNPmpUoJTQEN5LPtPBMEuuu3afiG6Y1xmdgsXTfJ3GSuETQP",
  "key20": "4HnsXDbsAMFekcuTPNLquHpURcyAmq1QGWBGkAmxJTjCVP1thGakQh9D5tXaPT6uPyicEi4pUcR1q9MSdkLFix8G",
  "key21": "5bK2B67oSkKkNiWeym1z9n2FQE2KkeucTvk6MedVAAiLgpVgPG2SojrDnxu5Kvh2WcJANvi1fhVc84Cyp4eiDeAz",
  "key22": "3db3dnJAL3mifNQSV5EAg3XuDGas6EEqFpoZKSr65dwVA3dimzNEARi66i2mznNAntbpmGQYHvWtwrFjWfJ84Ey3",
  "key23": "4Z7aB9LpC2fLkaJpqt7boKmouq8RgmYoKhh39AFYfgywkLcqkAwwwq2Xngzirybmuc6HtJ1mu9Gpxxr537VwH9uX",
  "key24": "5MJSWSvJxpBwG3uVkwxGAUHRPaU7rkBqDhXz7sLBJDCZPCd64epKcuYQv9vojNQYYg19KtBESPRyMVrpd5BqQ3xC",
  "key25": "5BG4q5PTu4YjCLLLigKjQ55RgQQS4ZB84fjDgWNTJ7MDFqj3JSYcujXfHT1bfdHcQTWhdsTUGCxBnCWKQfaRwR6d",
  "key26": "41JWZiBjA4wJp2dU4NCMAD5P6u7fzBDw8zx8wUBAu2j7rkKvSURPFtoPWnb1qm1mApJcmJrPCDtdqQEEExXTYv2u",
  "key27": "4MX52YGvv3znTdKdr7B77oePvCBdYEyN8RiaANhBZgkPoNXYotbsf6mweXkHqWZnd39i3xjFQRkD3fFaML2ceEk5",
  "key28": "VZ6ekArKfcvRvqM3STPhaXiWEDooMQETCVbE6X9gjp78sCZpw3GGwGL17PqmtTmN3uKGg7cYhSMXVRMGU2Ndom6",
  "key29": "45JNPU2pbGnxy5pzhYhNYiUsc7JH7cDAALg2JTrQKca16T4ZZThFRihXKZtjm4SFh9gkiN4TKwfDa1fnuN7nkdU",
  "key30": "3tZVmE968vyC952mCr2bxRV6h8uvuYhbXiVbBxWpTktCSq6duUwb6nxFjdnJmvgyTxjasjpoG9nm2zpkpwsz82pU",
  "key31": "CS1uk14LqanxkhcmHh7AC3C2WvjgHQQfFKyAFetx1V28UPWMuiMi7ws2DPbay9hrJoFEfrptpc8wCxWnRi8w4do",
  "key32": "3ESCodtMeFwuq39bdgmKYiwfJPrYnmWwoSTjPKwgbR9nPQtzC397skzYT3yDsrGdmrtN4mV8n4nUg49Q8URBaPsJ",
  "key33": "5iJqGfibWLcyKySBH9xE5f2v6TU7PtWL6jSB6qt266tbuoV5iwiNfrCyWrA9BJBcFv7x6FWjBs2oNUwYKzBSiXsn",
  "key34": "5xRmqToPoNHoNp7M2FxGZLf2XAnh8heQvDx4ypuxAtMQmSZYiewK4eXYqnn4RcQVYEJnXYawcLdvvRAwXxK6AggV",
  "key35": "41o64kC9WRU6HW9vPBE31VhVMKWp9KUujksites3ZCMwt8PDRPZRneJXcqysYXhkkri63vkR6WMj7e6fij8i8t93",
  "key36": "5JFjyM78t9ynaBM1H8HHQtURHZsdVBv64XMUJVRcGqVuLzinrxu8Quj9wTHFjeFqmEVZojDRXQ1d78GUZvWZY8Fg",
  "key37": "122FqLZhWYNAZ4WYQPukrmGmEWGNoGmXRTN7CEM4fywZFc3Gtthc5GXRJn61bWGbbNLWUR8qotJxuLSTM38uSZWM",
  "key38": "4SLkSbwuvSvphi4yHgkRHb6McLnKFwA1c1iVuNUfPchdy5JzZraJFcgVRy9ZLgyAj7yd1uionHzt7unP4juvcYQX",
  "key39": "5Z7ktr4rs4vZ6eu8bnpLWggkwKtYjzx5gVTRgNeGm6hZbzWv3TFHSqvFt8NjiQj47sQkNEHz2SYM6WZyYTcTVAt7"
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
