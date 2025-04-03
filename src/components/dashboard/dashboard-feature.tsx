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
    "4ZSECPQQY1PFbpyDYmzN9nSYvbaVFEedbkAPbs99hRcy2qs6EQpaXxE7vZAbeSYmP6ahCpAPzFeC8FBJZ1A3qsCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VUb6vtzhwNuV5TDSfXrh2Axk4fBWu31YZn5MApxgdrHUwQAoRiqyPCamRpaZTwJMwKQtvGepxMr8Ern9iQppdDq",
  "key1": "58uRnk2P8uxbEDVoXErY2LK2Mz75mFRpDYKfzXX7QjvrPTFQq8M9yof8qNTjRGfQmzduxqGoHLxraJyJcpU86HuR",
  "key2": "3WZnbC7r62RicATi725VDZEm45pKRACWy4xHZTtpFcqDWjrgrxSvKgtbc1PKf78zpzmsbDbdRiJNSJHxLdYpScwA",
  "key3": "2F48Q6otnD1oPAfYdBvpfemmmGoP2jrChMJjbmp729y344aSBgQLAus4C7A3xdyrfz6NdciZrBiH8e4gTuhBUtYB",
  "key4": "49f71Nw1jBF71Kx7jcaS8pRZXzcJoou1KmeaDYQVCMC9hCN29dPLYgjBMZEN9X2ntkXYQZba8GnJTSfTD4MLNmeF",
  "key5": "5Jq3Zi2MGpegmUTXDRsX8pFwRFY9kWudAZcuW91yz2n1SA5nQb5hMvwRNyAYbBmwoy5tJDmwemawuMLH3EafpCnE",
  "key6": "5N43z9ayGDkFr8FqBKu16Gorcm6WZ1zFtYZrEBSvVVVCcC9DzEahGLwz2i3mvvDyURMF1Y2hi4udrVB9n1ZGH6wH",
  "key7": "62mNcZjbFtxmPn6r9RJxssmEhWmtz4NC8VTjHL9dUwDA2A4GXEWPEYukpDNuNNVx8UXq6h3k3bnU5QmGQKoRodZe",
  "key8": "xnXUA5UYy3HeWRzKGbapZWYT2Zgq3sduydMgcW3DEpTm3wKF4eWgHEkGt1QpHiUQUeWsgRh8TEDqfQCXVbz2tks",
  "key9": "Us4BRBMGBLZsJRC3mn277RMdhi1EcFiDu1bYRkY51GHL8DEfEczQ7SRkjPpT5GcKXcoDfypgWTSYGsqjh4KxoNu",
  "key10": "5ygDZ2AykoQxk7yjzMNdxv2D2cdoVJknUt9GbfLpKzFcurE4j3AvhQUXqEVPEJfE9Hvj5V4shTZfjWSwtBiBeY7V",
  "key11": "3EAV2qrtUR5uPWTjYyDPpNR4Zzd5FHemoipNYucHHPjjJ4Crjs7btuCKwtrMLK9PugD83GapsCUujMZ6r73K2K3K",
  "key12": "4u1S7J46SYQfGQZZmWLAFCMrffe6v28R6hXdkJpX2Xav4Mnk53WF9VXG7MfehYMb4RJeteffimvk8qeXBHNuU2hW",
  "key13": "3HdV7NcBVRHoqbSkycMzvDEzozNigEMEGFZmFZx2v2wuhRKF2YHsh9pWhjwAcM2pkgWafs37JFwvbawSaBDfc24d",
  "key14": "4g7pvqBqcnqYjkQgRDmdPNc5NnWLJE466Z5v8vy9vEjzqPVKZUMGVizYvwLX3PkVf6vxAhEppwpVz72daJZAzg2d",
  "key15": "2kU5fLMTKPf41jFhfGggx2P3P8qctp3GaYrN5aJ2XiAFgdP2bnQu4xjgiJ8Z8xYvuDYaSzP6g2FBXJBZqCwPGYaL",
  "key16": "2uShSGdiCzpS9Ki21QrjDTR5tLf2Azwbkjsh8thKBvwLinNHxAepaUUL3svNAQeH7poWvqGWeWf9o92cqaiCfMAE",
  "key17": "4eR3oKDj5VsLDAabMbnaYiaKmsiz7iQF2P7NMakwLDBLAjE5XZBgkigwUnQT98c37NLJypNqSsnL9CnRBLoBn791",
  "key18": "iVfYUnTSpL22iKkRVkqxDFP94i5XdJLqZa9b12PgCU5anPBUV7XKyiWFxTae5tr4p487eef3GHZGpN1RqNtF3Qd",
  "key19": "2RNcCHdpBmTs8THWKYLRummDJnbPLBatpMbQfhx3YAaKYb7bSmgrbiNLW5KfDkCs9TWKfkSpo615xCGXYv9KMzTJ",
  "key20": "3r47JRLGaAPbBGApYzKF3RJ5wSCX8H6Jc8kkJgAaDEb8Qe6wXfgX7ufmZPH4coid5BJTAYmXgvTy5eGvJa5PXxBX",
  "key21": "2373vZSi2iT1BLnAQ3Zy8EjpJkwrAdiuZZWPdQc4oCKD9m2G89ygRKdeVJh8C7tz9Rvnvhow5RBR6oJ52iJ5UR7C",
  "key22": "4SfCN1nZcv5Ua1ABLCoAxRxXE9usmhe2Tb4TmGZ1zdtjPZvaZdhKRFj739krLd2MPoXgLxvMjMruEzAXgn1T5FH",
  "key23": "TgFXABsSZp2XD9Rj92Zb2SJ5sXFtaqEwoRaTJDKvJ4wyh1Pxom1r7mhsp7AwhaxnkYqonUXVePcMhv42YbaXzij",
  "key24": "Q7qdgPJmgEXpThPPuW4QfwmPhEN523kAVHhhEDHjWLqH7t4kE5mwE93Bn3oHAAi7dG11jNKTsJDCyfAsPjhMUCv",
  "key25": "2yMjyjtKoe9XqMesVaMgGsZEecJBeWeSvpUHJMRe5Mixbn8YHSFWhHgGpMjMknXcHZEYekyB8VDKgJ8Z4M8eAZW6",
  "key26": "5Rt9Vjb8pZtKUiSJV9WmP3xtJwo2PMkENoXzT4mXXbjsf7G7v8qmL4xux2hXiqquTRijBGFKq7dnzAbNXCYJbRGs",
  "key27": "4vVGv6KHHtjfHJ9XPzCZbLjAwBsAhLXLfdgMze6imqFpR9VeuAYtmg8SiJHPSRYP5mq2gp8abkjHWr9xP7YoR2Mm",
  "key28": "5Sc2sKFXpXnoRij9vtP3TqpJXgtvRnffVaqkjQAuMcR4cQUvJqoE26iNrcnTWt7fcLxdHk6v6qT1ZMo2Vxe9mYUc",
  "key29": "g25DKvnV9npnePAiD1FDcHW7pYFcbJoNNX9KwDjsMxtfUY6gzWoonZYSpYGwRUaigDhpbKznmgj3ff6TuzC8dbc",
  "key30": "4ZSFo3FxUHbTrkf7eBz4oayF1u5AHYJmZ82v3NN9DYWgKDEm2mT8iENytwoXLQoPrBhHMNUWxj9pXM6fgZWvYNmQ",
  "key31": "2axAActwjpKEqnyaRTYcvqdioERQLDHGxkHhWk8PKw4RMCUoUKzoBStWRa1VAT98AcVYziAeqwGHTmkZ9Bw4YS7d",
  "key32": "5H6AWuWKWh42ZLoHMzBkD1uX33MRNTcP8VA2GJDwLXeUqtJiaAYsAK7Pun2ySEStD8EghBuDVPSnv6USPiiDzLRG",
  "key33": "8X1yfJ1MHXQrbdyR1ipswMHY2fK5ULAmhT5a5ze224dNnXqcQNMTuCSa4p1b5UANxcLm8e8kK4m2dH6KSRZtfCp",
  "key34": "4pnteLFe9anp2bVPcUXHh4fdqwbHXyZ7PevNmALn7dm4Y2RmgURHnRktL8kgFB4CKaxiUQmg9nSbUDFsMgMyfazn",
  "key35": "4nAV8qzJ2NoPYjkX6uLJUxGcfj4MNMyvzCzq55WYHvxr99qutGAAfKSdz9wJwD5tfzj571deVytRuJP71C8s7khP",
  "key36": "2C8Ed5NtYfzyGbGnnvXdenr422d8PtLX9s8uvj3qwnG9ByGi9TKMdjbfr9cDmFxdw16qcehk3AHU3C78ha6YeE6S",
  "key37": "38MZUMQBGQGXzjDCEdXQq89vRsM6W6JY5ENjqmNoTCNQsun9JmAo7eudTxJDnaHteE3DS2Hv472BS184RNiHe1F",
  "key38": "4SJ36mmvPy5xNbXK4xwA65gZtJwzJFED19CdbEccYtFjq2mCrxCGWcXi9QSwTPNRA5ohK2TNnRYy6q8bdWRkK9hR",
  "key39": "3FAK39eRDoVvjHdcmNXdFEoGWbSYYvHsPYMShSAmdoagaHP376t3x2fNEToSRUK6yFhoqKkeYWxNjscnfZX29WTi",
  "key40": "2VURxNJqpP1ZMo1bft8mn3kXwWFHDMjS9jWUtxna7iWyTpH54H6ZcuJrYZq5aARjxfpZmgWERTX8ouqAvSRHAy6",
  "key41": "4VtSrgNTc74TmYc7nj6cpYVgzhCgyxDFuDKM6UevENnT3v4CcbaiZLU3ZnHdZkvPfk1FofE2dC75DF6j19XmDpLY",
  "key42": "5dt3KcrGdLjbjhZbmaj2A87MtDQsf5pxXgCoihhGeQKZKfvgodsrJFLoc9QJQVMyBkZEEwQCA9pAz9YjbYauGdeD",
  "key43": "5mrCmQovzS4rAx7QAHNpctjboftfiQHm2dS7QLfC4jRjXyJoZLPmMyid2tbz723gBHqEzoqmL58WJrTen8amicDp",
  "key44": "4eiVFY6EYpEjLmbaZZDoVnJfTnc3EDpPrXUmsGMT26pz26gdXrrcBPRtSd8Gr3VB55dJEva1Ejqq5CCdh3SdRWGa"
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
