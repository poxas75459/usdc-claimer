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
    "5be4TLW49dM3FwKg7ePaxjc9dGaE8H8Q24QpGFPELTXZcL2YfKyiAFMY1xSHogEEVo5bcmKvmz9t6r6ckfbgfMJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A19fxFmN17Qg5XyNtNbCRpKP8SvfAWcVcBgGaDAgJSWUnbohQ9Y8vX9PE4S6cJPx9vxVbdJJPG6ecMHAH8NjcfV",
  "key1": "YdkmJRUx2aJLSahRsmMDPYbKbMjJnXgvrr7FpZFBfw9MZoRbL3WCKF5XXtZH7n1TKZQVFd5hK9dbgoqoriUSxvM",
  "key2": "5LJ3SgtwYf4graUd4J76TVMokKttYEJgZbw5wVLB9tZ4VusiURLMt6K8ghZfYv1CMscoXiWa6nJAAMHGSsbiQXV8",
  "key3": "sr6zqSSZsnpNytsWWCJPX7VRmADghEdvXDZhdbJNAF3Bb4YWkBSzniFJojEp8bmTXi6DVVd75R3UENT1n64e2b3",
  "key4": "37EXpk8scLKmKvGi6o2pES9NV244oM9kk3h98Cm7zjn6o613nfiVBkzrUQMet5Y9nMmBq4vxQrJmbof4PdqsrF8M",
  "key5": "5qga4jhTuZXCW1QVWQ1GUFRQYwAavYnFvvbhbHMs7AFoUoo2eEfD8cfCCucsPvjfgdigffdPRNBV1d3Mrv6KckqE",
  "key6": "212Uhf4CvobaMZwW7c5jkdKtjso5e5kS7Hbup9UXeonAgw5CpmCecST2YsrQcxebrFK3w12TK859cxtBhabVg3pZ",
  "key7": "3cEsjczgRkMHAMPJ6PLCGZVRY7HsR339VnLmo591qkZcso1iq3NXuTKkyCH188w6ZfmmHw7cnS18WUBJcP9ue4ue",
  "key8": "3n9UXpXfkuswWPZvp48pgdeLrWEc232TMiLo12RNVN5hWzxRsSsXAXvnjvTYYXvVJ4XSjtPnKCgmj3UrwZE4pmgH",
  "key9": "5ZExZoYo8ZJqyVt7haQg6Uvz42dBgtXjCMDAenFQWKSQGYcSP6RSeeTXN6r9dKEJ7AJw5hMpxqa58obtBVf19fLN",
  "key10": "2RDjSo882B6shopP7pUFVvjZBKvC9yvJNvqs1HsxSSt8XHYMxi6dUJYbxibdHMco89CDz9it7h5FtawY4tgzDvxG",
  "key11": "3RJ6gFmqo3xocBwt34Lr7U4cVoeRHnnxz6eubiWfTjPtbpQaFkKoUzi7SjV1y8ZzuLrF5c24MLp2g68SxDLtZqPc",
  "key12": "Xpph9KLtWSoauxcrreqP5tKLK2mBScPqmtamY8mLLa9Q7hW38LXVeLCCBKYTju7U8ySAchrSZ1aMAbMxgq7PQaF",
  "key13": "5vKk7Ad3C9Kag6Kuv64QZsH9zd4T7UjVruDDPdu9stqmB4T3Xftib1bEr5a8jCDXJeva6TqcofiLgpx51wZUwGMN",
  "key14": "47nmGwfLrxvnR6zgCCzQCV1r3yWoQJdF1ZCABrYQFj6oGrmQ9shVXkwC3Wd4jrbv4zb1chGXzTaAX19UQwKvtnUQ",
  "key15": "5WtD8xNdR5bMobFsNqHWDHiiDVia4sTGfVvMRBXyoch6nQwwcNbEPyiFyGtti3txG3KurKJRFvqVPFxwHXA2o1Yf",
  "key16": "5AwwEcDThhzWxR2h6Wen3VRPndomzgGJunku6ZJUyhM9mbqhBbN6ebjSHBmtbyMqARgV1d66WUoxquHeV15wFD5Z",
  "key17": "5Lx2K7rQJKEoXzNSspYZbHtPueNaEyovNtAHboSZX9UjRfPWaq5oB6PsGaaTExRNJKeaK3BFYCUJgRuZewrEu6Sn",
  "key18": "2g4ARjEEFXrxJUgfnWwtCS7VNwrVM12cxDAGcXtT9g2ZULayC6Fc6s7ha3dbL7bqt3EJ2Sy5QaxZTLy6sx22yFdK",
  "key19": "4dBJBRcaTE73L71ff4CNcqgrLS8cHfJSp1ZPyGtLLm35fEN71jC78tu4oLagWep9uHq4bxLMxiuMZiDPnV7vzt3M",
  "key20": "5i7hcWLzr3EhXAiFknuPdnLKP5n5GpqnCgRsEP1n8mep9p5nCnjMUWM98BqH5G2rm3Q5GeRKpUkGbQ78YscaH8mH",
  "key21": "315FQPLAV8gXrh6jekmUNTLYDGt8pkFJ5s7kse24HoUA7sTK1EsxWmMRTTzR4QjvLH9FYLWYfmaPn1Q42o52WmZX",
  "key22": "QAt7DqWtxbBN5atES1K5d2mtRDTiRf8ikyho1LWEckttwWg2DgnQ8SFpeHFc8hcXBdSBRT6gMuR9kFUjHuHcgfD",
  "key23": "38P5KJ6rEKtm94yteTJ7RCcUZvePji5Tckj9bKcHcVBRrRymsFT3BgbuGCSbyBWm5YsFmDbgA1GNPk2RtMxvfrGG",
  "key24": "126Pcd2RwfE7ittgakBxBsDmrmgAmtU3UTcjmt9p48VQmADHC5heT8tHFKRu27Cnn9GufqccNW9DLzquk1ZwqjFE",
  "key25": "5dzYwk5k1DkMhPG8DBY9rPvUwShCi7cwDusuanuPhaNGoZhx7LKFJt2WcqBP741L7foTRigFy6fcsdqvycJznEiQ",
  "key26": "28vZyY7EHEn1W4FA1xBFq7pkdg8CwCP51hMqoMesjiopSK9kvMK9fpuugJ8mBnCvfJpJvKmbmZdafM7QkWRYY7aU",
  "key27": "MqCDokTRv4p6DCfhpwJsEQDVtjgVfRpWrpN8NhgpdutLdz9BeaZXKTTpit6ftCHATVZ8mb1xGThx4UfL7Vmzqex",
  "key28": "44PoBuTXQtEV5ToUasTF46po2f4VWzqSv9wydFSDX4F96fbJJvvt2FjNr94yxuQkT5R2dKPJdxUGtW89RUjRfjX",
  "key29": "48fTzpFwG86jo5TN9kUwAFR8FMDkJpnT1cJVcYLycG65VYR9tCaSLDgTEBa979GC4Benf2ycjmGTV6QGEUsqk2iz",
  "key30": "25GeaJkNXWxK3zQNNY8tFwKjwqQj31CqmGsVm7guoLpMKoVNh6oTdiNLxSCEuQDydd8sGCL5kodK46GZkRDJw41n",
  "key31": "2mouNHFKiMmQDBmu2HPWjaaKgtMBYJnVUfXSK1pKXWVmxJZK6zms5w7XLBVXXUMiZzJ9AmPUMewu26eFjX2SL4Kn",
  "key32": "2cFZMLCC8cWeWMBUW58CzyWC43oKDiEPAEMfTQ7fUQjZsi2q9epRhgKsA86SKhsz5NZ6rZo5Lc3aTTw6XZgqnJCC",
  "key33": "2UU5rmosETwpX41etdVB4UueT1uvH42vmbNhFCDa4B8NHKQXkRhGNXSFaBqwsSxkVzU7D9vgQx2prkV8cif9rxYd",
  "key34": "xz8cUqUaGEyaMRjmpB6ASaagtd4dih6DEhxVxwqF5M5e3JdrGsjbJZbLF8RotKUhccTytXmisxE8Zcf4bfW2eAU",
  "key35": "vH3tE4pNSGeLWtpxFpD2guVUiJ5enL9rbJ2rfAdHK8krcHhJGARUxedch3kd2DTi5iNWzNE491chU1xHrwPXvCy",
  "key36": "48SFkPGvFpjSE1ddtbWjWfDLCXsbDTf48RWCkfmzgXr6eLgAK6VT37yugzeLWRN9kBGnX5SVoCikuNqdEcd58LTj",
  "key37": "2oa2Q6ZQpL2Fm8uD2mhh1eNX3iNw9zui59aN6zMjR8tBNDZMp6QUkY8rRf3XSXdmmPwUSdcCRXizJ63WYsWyYVco",
  "key38": "38qKERXztYk5L3KLgy4q4UBv8zcZ9LXQqFBFEo1s5EFokQ13fbq194m7P8BeYwiTAqDJpS7m8dXYKQdDP7WzMk8C",
  "key39": "krEPsr1BYUBNH9uTjuWJdyBVDNtgYBU8gFiDzpFZygxWpyj2CY8bpdNPRvjYZuCJaYe4nWU4RNwCQtFCS8jrxHK",
  "key40": "5HjYTGhDnhjRUDgXuLzbc8xXVMrnZ7wprBXhUoqaEHkrWCJtKefGa4Y63B8ahUvZN41ganj964SSi82Y2spqzykG"
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
