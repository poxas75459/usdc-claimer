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
    "3Ng9zKyima1f7LQdLYX67f3jBCkDH8gsu1NoFGUL5CHt5bJkV12MYo5HDjgnAGeaJ7R3cVA7rKt3p7RaWLrCB4cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyGkm2YbYPX1uWixSVsHUzJEjoTNuHWTinzZnmFh41MdBeehPoJffdUdWVASpPkheAWLUo6LKMjrLnE7Ry2iJSN",
  "key1": "24PedUtdoVRuH5kmjXjEv4pDt5cukbQfPkKwbneGDHn2z9u9H1BTfb7WVh77YreHQiCWWLc59FAf3tnYgW4KTwz7",
  "key2": "3H94vLNfv2iwy5Fq52eRpn9czFizTPTSqawWFbp14DNRd4iE3RuFKCcqGqSyh1TkZbfvCfigzhkQhbvRZQVV6kKE",
  "key3": "2taTkZZDvR15tcnWQjZkZMBK8JGaoZjYfuhVrZrWeFn2RKk1efRYpCaMAfwrMqYVfG1KXVuiYnNnXvmrDGiRVUhe",
  "key4": "4xPziA7gKx5dgcCymiQgDgTJQm16UwyF83DrL5h4zUVYmxfaS5isZBnjek8jMbWPpxD6GiSJnGHvYo5En4TK34mX",
  "key5": "thPXtMv1dJZKVfTCD61t9fUh7Bgv5wkGPCM2sx1t8Spuc4bJtVitQJuffvzCCWdDHBUhGGVQmh2VBhmpTJkvsdc",
  "key6": "mxxDKGzUVXYYaYZVJ3hfycHGbgzizqFL3fyX1jp9bCiwMkw1Mou61aqx3CMvjE9rpWnoD1t4QPwbcK4CjB1gpwX",
  "key7": "2y34gFo61tskW8om1D7pkbSZS88TzjpSygEqHYEwhiU5H51oPvUwT48aoNXwHnD4hZHf5pG8sbLeFRtGmEU7P7Fn",
  "key8": "2VUgf1oX13iRKMaVXV3qcfagg8s6kN1C6eK6rzAX9xMu8akG7JTyV8LJECj7jJKus2nysBd3BW2JDfzvaYdYcnhk",
  "key9": "4sPgafnAprfsGQaqJsHNmpAYkDwtT4ptXisPeSjAV2FeNbF8Si8yKv9mhRDo5nkdcfkjJjzdJvWwyB8RxGQXSvHk",
  "key10": "42o1iz5Ra9b7SpxTWePwDUmn3tSVVi7A7gkiruQymqVPYftCMvmUhYkF7Qc39FyKtEKMbv3UrDy9FbSrTTBEf2mL",
  "key11": "3QtHuLGemK2Ti2GTePyrLiVjDpnzKdQCTSYt4LUqha3137RuYCNMng5kCNXbgFCtgP7LURnKmirniRDE8RwSkzmw",
  "key12": "3GD1DvKKPhgn841CZjd7FtTmhsCQR3JAx4cpQ8Sdkw4fKcMVX614c8rCZy7DS9nddXeNVoxRWLXdonJ5bn7QNqku",
  "key13": "4wtntLSPErYqHDzoS1ePjXHpLVB6DM8cAGneUbUKeCd4y8gmJi9tgo8ciVZUExYMfXVrc5Vz18foBBqZVfJxhNdb",
  "key14": "2YYPV8iLxrEbRcw3tfHbmPqUTE9EmSRxqF4kDxVmkDAREN6UDkRDRT1Btyb2vmpsQsTGokhYd96bSoRzspRL3tRK",
  "key15": "4mScb9tbrXXekA5uAZiDivmNNZYgyFTFGVxnphVfuCRhYUqhWhT2sftr1vJy6tVZYiPKdZFCmdLyJNoCpG8g9Z4Z",
  "key16": "3fPw7GskYFrTXkgsrSLTiFAYrnryWwjWTyyf2yYWMwF56aFcBV831wfeHqdctRkDsCthULosre6wyLFmExPnQMzZ",
  "key17": "2ieSBapwUv39Q6x14LPQB8KzJF36uEcaZRnjTJGD9iKz5KdkFAjAxsm5p73LYZPxaVe2appo4UkenQpKpJ3t6ypA",
  "key18": "4FxZ5bysfZ9mJnF6w3h5jChHpbRw1xP7Mh9FjmpAnHGNGEA8ADazqwASqtzZMHCh7DGbduCuyzxBbLNYXEQVtS8M",
  "key19": "4CLnnZL9V3tSzb4yfTmUbgnCEcpkzmsY6mQQoiTAGTtbNGoqedhw26awRrXm3dyuast7At6NxZweKtdRaCeJdoQU",
  "key20": "3a5JV5WwUQNkE6tWYBBrtzK1XT23W4DvEL1sh7QK5WbnKmrmjniLfJyvBCGiq8LV979Dd5Dp73AKakYgJAz2QrRz",
  "key21": "5uzMRpG1d3TV4Yvmfvnid8WVbfesJNp8o6s7BU39AWNLGLsZfZQbNR4EJnBjkw7okC8iSTuHXkb9ZxTH95T9xefe",
  "key22": "3Xbf8AGNiikE1DBw1pTXVnsJN5x7i1Lk7eLDZx9JNEEFjrigAdN98o2PR2Q95cauTW4WZnDYsiQNHmYxeLcCNCaf",
  "key23": "411dBCdjgpchwTCz97a5BvKv2qzceGe4BdXnDLFZYQfSQCgE18gLKrMo1SCX7iYprKN7YqZdefiei391ats3cbW5",
  "key24": "3wzeCP4cfo1B5t2obyPJa6otTXrDH7EqY9BP9nY5CgUQznaALtBdxDZk4BWwMEi6RXHknZCmbzvSMpztAoMVFyaA",
  "key25": "bX3bqRQBrnh2zqpmvW7ohGnRUTwGU8pcpziqv8CMNgAW4ogdh7HjfKjYAQNNKtRi4urEm5Th9MkJYsJ2VTkuTBg",
  "key26": "3uSYoqb6ubCCoaK5W8ZBmcCEwpAF55gqM16PM9QKbNRs3czEJkosFAqvd5x6gyyAejm6dkHuFVVoN2cSUkjbBZ6r",
  "key27": "3sHrXcT43KVvWy5g2KhSL6j2muUfjPFXyxMXcP5Av3nhKUVTKbVARhXGSdFbNEV1mfSqcrhm4n8RwmJoHegQm2aa",
  "key28": "5amGHBrT8UG4oN1tgc9aTfCQWmKhB7aNXNDCWJrYzdB4Bx8KDJa9JmDYDCBKXaP5A83xLSkrzK8ngrAn5H5rt11C",
  "key29": "2vseWgmQ69VhJPQLSB6P3whGJxyvHLrUoATRbnsMnqCHw447ZvbRpEjtk2iqz1CyRRudFD7sGtCUVG8aN89iaEcJ",
  "key30": "4sHnDMk5QLNPXvqRNXq7i9phCgPiecppgRUCNWw31vAp4pf6U7FzbQJ9NMYVJ81NwjNZQJRLhUx6TetaDb2kyKNe",
  "key31": "4gNT1m27vy3MAAzoDuJaMpw3EyeAzHCrVAocrvZVrnwVvvnwM94s1cx4Fj91M7Z6u63GVRHQgVRyNfwCHg5yAxUy",
  "key32": "3c7HEohsm7SJUEhaoBESK7nRdcZZM4DdfPEJNB9eqUDfgQC44CGxQ3P5kLGCKizdhu4yA7HzgfE4USURzRuRv3k4",
  "key33": "jgRZyxhRDtpsBUjYBrJZq9hqJxAMT3koiosRRF54EnimDCKZy7VWQAEAxQ7GaEhPPbPRooYQxJoM51XrnG8htNS",
  "key34": "2gpiffPSLf2W7MTyigF6DPDYp6uhNVx9E874diAvoR9VaVVahUpyv6GV7CiR2niC9sucXMtgUPcoLYs1pfTneuYu",
  "key35": "43aAuYLYYj7s1vA89N6u7mj1bHBjrdtDiyufHKo8hfxDmSYR1DkzkCk64m1qAkfRZK1FwF2ZafTpJ3YzZoA8rS3K",
  "key36": "26nornq3y8cHPjxyiugc85CpLn7FsgUbM9nG7qTZTGA2JjNaGgZrj2eNKxBR8gkRTZMHDNe57HkCBgFMkzwm5z9Y",
  "key37": "wK3K567yhHHUmqaANG6SNjCe4mXvu8z8B7wQbth6cBiUaWkstm5dACErU244zd2QpewSedbcyAVCNUkN2J96KcL",
  "key38": "16sVtYST2kHsxQ6sJcr1EZBn7QujMM2D7ZQTjnWN1bR1GjPnW4Jk5Gf2opTA4RJufjXNGmD6fFk4ZNpgW8WZUVZ",
  "key39": "KDfDPWwnTZ6dBNPvZkrgYR9yUiDSqTLx55yEPSGbDL5mpEowV6SBB5TpLh7BBXPTDnnVPchKeGjSueuaxxvyPsb"
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
