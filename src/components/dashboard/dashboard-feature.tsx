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
    "2uWmeEstdi25oK72EEfxHZWrbbnutUfxgRPPe66UEx13zKRnkGbRCj66gTZgs97t2gWk9Mt2CEhbaHVfdeTPvgEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXeqp8BxyYPPJWM5nVdtS8wYeZkgYxp49NN51JS2y9Lowc26R4D95jAG3KjnMGr7uyvXs3Tv7ud7ZEgBjuWgzvA",
  "key1": "44yXS78zqzPdKHhbRFwm8LSqVyq5UMiup3N3mFLdBmoMjk649azZEN5jzuki7HoTDx6MRfS5omXL7Uc69kfX7xhz",
  "key2": "xbiAbudFRwBYMgM2qHLtomf7nEM6KfZW417gbxe3VvQce5PrFdTbN5WXE3j9aN216p8ypoCBauUV3J41Vyh2FaT",
  "key3": "gdGTCD7jZj8mfVwSeHZUBgGEvMcsxXjRSZpVLc3jfdihkPDpPjkXqx1hwBoYJKKCsHmGyC6RCRFY3CwhjXe5aYK",
  "key4": "3Fe8uw4BMtrJ7QJU757tbTt2NJigAdHtG3KqmScxEaoAWgkEEGnoGasLG13WgZp884kw9aFE6FB1yZvguWBvq2bA",
  "key5": "4r2N3hACNWQd21oFnYzHDfKfEHeS445x32ofHorLs58gwR8skU2dG4xPeT6qxyhCJRGsFTUnMUrEW649GZKGeXjW",
  "key6": "2tdBKrYvcsZ6NXNzPQjPozRGgFfAzdCPS3DBdwrBgnNVYyBaoZtyCQ44frYDMLJe2UjTUvT3CcqraWy3AY5A5wwp",
  "key7": "2Y1wtxE5FTiahV7ZyDChpsT4hKqWPejEmNtcxtMThvnBnfn3PnzFgkvTnmnJ819UKErzSDbMavMHsNZbupBbVmuC",
  "key8": "FAzqbqPLkJiAVYVaz2p921UmdyWiLt3sHdKCKL9zg8cvRkcjzXd3uYw7pHVNja3vWNYxkK886T1n1CyqU1ugn7u",
  "key9": "5SLYeutp7hTzsBsGq3qY8LkKETuCrytBVLpYXj4C7fHonhg3ZJ2SuZdWtH2YHFbFYDDy8jonZUg1r6nsu2NKSj51",
  "key10": "4WuvB1XUAByGjvHRf1uBkbNdM9ouqFRLsEn4wno5JaNdDvs9yqh9eG6F2ZAgAPTkUf8G515GdyFVZFQS87Eyh6cP",
  "key11": "3QXCvPGrSX8bNN2NnZKgcjt2oZRgpzsuPU2Xpg2WrVB3obA8BeGF1wE4a4nqfyt1mQN6XZLqj1bo3SLRh8LpTh7Z",
  "key12": "39YcRZ2otmp2oTUGigQmFxA9kSuh1zECMKjo2tzE2ySFe1A9ygvWzh2PCTWrb7gijmjnF6eQNGzgSofVhuPimh8N",
  "key13": "5q6rR7YHPDtnxUYYgcbHdUo6Y9RGNno88RxC4g4KaYfkcFcWYwy9Sg5KFf4PYdyPhgqpH5P1e7a9ALgdHAFsmjUx",
  "key14": "26yB1bbqw2Uzc8dNH83EFra9bo9EiXdqJpXXPcZE7bhmZiSvBQjpaVeGBZiLtsARRRaP7T4XKjpt8s5p3v2fGrYm",
  "key15": "wnecrhed6zm8kJwwbmiW9gacDws9HGiNVBS4tsmvqyqBYVKzBDLJxqJpptGrBTFbTfNxfSyYMhNp2DzFUTJ1ZrV",
  "key16": "3RQeRXH1P9NAsNoKpYnzsqW9LxVKi9yFFJ6NdZ1cxu6hQXirAERSjEKWGpF5T6SpXSvHHF9vbBPjJ3Lh6CsTdyhm",
  "key17": "2esHZkRhSosmfHmUaVxj4YVEirb68GbKgPUP5QrWMoGK2pqygSY1GJeFFWe2je3MzQwCLWiffXthPMbZ7s31SZEJ",
  "key18": "2ZKFHCwavifABeos4xS8uR4diQSz6XEKwn2328j2PaQnwu7N2pT8h5F9Z7FpHhqX2r9TinhmW8sqWpe9WVBQVYey",
  "key19": "o7jWRfQPCfNtMYCCa1d86gWReTJTMT59WnEiPHbWzJ9CbfYAXaF4Re5DxV2FCiarMeCC3p4DsscN6kTFfaUb4DD",
  "key20": "RmpkmhJjMK88ytfDfHaszmwauHxXuD3Y1KTaQF25HbhnaAkUxDTjFcTKMfqgwDba5XjiqfgRkgJUsjxSq6B5nw5",
  "key21": "3op9hDV8rJbeLEEFkuy2XGz7EqAG7tgHDh9CzWLZmBzkSpD9EjCXAqD9CrnUmNKz6A9ou2fi5xh2hmRDvrUrtSL3",
  "key22": "4uKLiKjkppVgcXWSLJPDTdV4dLAgkx5WfvoZQshA41nRttEyv93HpeDLxUopQtcYJmrVqFfLG6qFP3U5RM6im5xz",
  "key23": "5gN5UKkwEVucfKVmD3NadjBXkWhjAAvPFLCfRREkpfoP41YtdCh8mgpNeFUJu8jixebBatnPefuEsm5J7xatTgkt",
  "key24": "53Sxgky4VMdw3u1qzEmNbcFWPb81KLXUHkMBKZtvzSCwMD3UW3vKJLoKPmfbDpewYX4tsUPKU6vbrq4QzN1gAYmK",
  "key25": "4tUgWdTE3HKCbETUqYLZBmdDkewRMdRGnPXU9GkzEwrD9jyc4DzgzKa5pMYT36RrmPq2CJhPuAnedokthLxQnge5",
  "key26": "5QewVjuRCbQ8k2p8EBQ5qGtGBceeHZC4raPyCxn2mZri4VHHieDAvkuPcN9Q8qjRf7GYGVJEbDjtB2Y3xwb8eYrc",
  "key27": "RMwFTa6sJ84eSqp91ndtxjo7Hv4XAgADjQi4T3kt5drmBVGsiEXpkub7svGWnzzHJDWvPXL1LSemc2gdJmgkT6r",
  "key28": "5MvdKVEmajnPvwjaaQHARezNDZUqvjFymhDaCwYS9UdTSC14ECAW4gqpkDKygmH2A3jbvGdKnywGzBNqSLpRrhNB",
  "key29": "3wrk9sMmDM4ULexWP3nYWQgMrK5WvDyxH9e7VtVPRkjF9Xn6PW4oJFmJrFhYJ8mvyAhPUFegAWVV4nrhCRXKeybp",
  "key30": "UGAkUA7rJHzZW32kUNg97jnLfivqUAnc8UNemFsszFSfYiZcoWo1yGeiGSquL2fDje8W4GMD1BVqy7y2g67Za2P",
  "key31": "2qcKdEXGrHYWF6qGSVbumBfuyT1ELyXjNZBs6pCPB6upiZPDT9m7gvpyUa2G2nPq2QSbZWnX7PyFBfhnDqjz8mjM",
  "key32": "2ucviSuMRjx9PyQy5TSwfXoyr9xrKhNhLFDUAQLSydh4gFsUMru7vgxuuVeB8cqtsrqa5seJ4TDecZUN2pfYVzZn",
  "key33": "5KpLdE7WE6F57FLDsQpLdFmvuc4C3n3Admhsyq6L5SeZK746d3tyZaHxKwqhqkw5hygTbnnZ6pPByE1BExDHo87L",
  "key34": "5HDfnhnAmbYFLNSWeAEAYf1CY9mZ8h1L1m7mHfXbPCYT5rxQ2HMPCt9T3DPpKeiX9hiLSDGmn2AJUtaHKkDsCbwY",
  "key35": "UGo9U4xdQyVcLVdmShyUhwFdkHgBuPACB868Nfe6wdeazbFBmKL1xdNqJhyvCiMQwvDAZ7qZdZwGLDQ2PZTDcxL",
  "key36": "yNaaKbKPhV7u55Ff62vSWt83vVULfzp62Zhfb4N3RstFfhA1nBCByQkurrFJWFshyjAvHVr3pKJuBcercZkP59Q",
  "key37": "4aRGfPWREYSEpbvmFqSJEFhKoSb2URWWDmH6V64Nwe5dbejZDDLHQ2qqLizBHyDoFGRgtFXTSTjrwatVvpPXDcFi",
  "key38": "3Sh5nojt2DErSn3J8gAFJYLQXkDbiJpQgZx4bXmLsBGqh5epgEseqL9vVTuoHqCbvuSJydb4Z7wYpdyP5UcyvV5v",
  "key39": "4UmrHngzthkJX62j5CdLXY7VcvTJsjPHD8LqHzrFhKrgmUoVYrPZ2Uc2NWvy72qe1unB8EMZVfTrZ1hFH5j1Hp6o",
  "key40": "3oo66KAXtFVjjoDoHbyquDDMv99nG81oftdFMwsE2DDtmBSvQMJvtPQujt21H12UFYskTzb4SL2pDbTZ9XLvqZQm"
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
