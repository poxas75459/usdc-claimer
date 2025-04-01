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
    "275f7f2cGCezzC9q3oxALpUgcePpz9so219oceAzkjFWDhzXwYwvtLBF7evSVqEj5zEupNhuE4KSGQjT435kbnRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41knPUzPtTw9sEfwp2Qy8NLUvRGwD7cXeudhHWaca9vSoYCtvZUVSYGBVk2hKr3g7S5tRe2A4HGEpQAhYkShpA3v",
  "key1": "5MjgqE4oeWYVCLpx3JZ6nQiHkcNXpCo5ZAkgFvgTdR21TP1JVvzrfzk3s1ecimPnPbwnkEi3kd1y9EDUb2SKEP2d",
  "key2": "5NEbb1k881a4iyLXiWCFVzJsxNLZKjn6zP2CMzjH5JTYm5EjhVRAhomHWkmoEUar52VJbcUFVeoyJVUe1tK6FiZi",
  "key3": "4SRUPhmxGkDQqj3KrRRhjsNtwRxCBbKVDgivL15ZsjoyLN8wuWXG4cR4msn6RhRyi7k6eAupWGtf9niHs9dTfiTB",
  "key4": "2kVqQM2oBF88GBJDHyUj17W2XhRpgBbhR949baeyZuPc8s31uov4cjTcW7Fwtimb3pMLs4PMwY3dHtfaX5iQgqDM",
  "key5": "2kqTuQWjcERxzmxQmbycu3BE87CHYw17aD2CGtJjMB8rfYBXp7F1n4ahp1T3pF41SfpDZuUQHYCE4zjuiT3G5pE6",
  "key6": "3XgzuJ56wszVDfZLgKc4aR4rU5vgNT1uZxFFH8WCYKp89eP4LX5dmTfPSe8yb8sBX1Q76BZBPxosxdxkChr5bdin",
  "key7": "4kKxTDjrtU6vWQubwx5pdamb3K5QioFhnYE6EFgJsdsZiSPJ1MKUwsNZQYkUraF4QhKkXyeaijNCw2KWVTj8bsER",
  "key8": "323hfKSsVm4M4Lq8rUAe3AxZd8Zpif4dkXSg3sbTPkSzNWY5pyBxeDoD8QxsrFBhvXRmd7j6TvNHkVGsqiZ8zMNH",
  "key9": "2AnUD6cCUgd6f9twodcH87WAGbDBEPYsvGkTP69XRy3cQxQAooiYNsnsGocVWLzQudXiHgq5Vikpo4ThZi365CCT",
  "key10": "vrjGjAKWBsHrDz6dj8w2J6k2yMQFmEo7sct8dXWu1sRfhnVKhMHcWKzVGdzutUiBPqNHW5Q5dckZWUiLtzFMnHY",
  "key11": "57Qcw8dB4yazA3M4ECR8TfhuMs8XqBFCibx9uT91eqPGUNrgHUSDUEBX4o7ZrJDeWrqyAuc2UMpnD1VwoF1P8Myr",
  "key12": "4A9A6CHnYTRWHF8Bpijh21bbnZvwARKmVk6Uq2UuJxSfGD5pT7nKZuxFh8X8chudS594f5gVZAtRSKJaDXF5cB3a",
  "key13": "5ZUphBrgvgpbNNNeTZ5w3ZmjtborTu9E7XdZyWUKeCs8SBd1NapMiWfED93RRZXuLarfJFLJCeMU3LKnboHw5vdn",
  "key14": "2Zp8LNX6Ka3FJyPumRWBY6d5nc6dninquqwCCJ3xGU24E3XT4d85y87pcSNPWfMwZfCxCSeGdcgzHxTodTqzJ92x",
  "key15": "5wAQL7qnDETDKn9aD5i1FNPdh3N7RjEzrmzg1ErnmvDPyBtjKe3VaVphsPSuGv25CgBBRWzLTzGwxurUn8VP834D",
  "key16": "2qWkojyrCy9mLrBmJb5LVdvUkgCQHr8uMR5yYhnKBPbFYGUq69sqHwtmVosGUFi5hEPtcQ1rSdHx1HZfBzU8jdeQ",
  "key17": "63f6aTheDX4K2ko7CQQkxNcgFwPyQ6MHiYHU55woP8WJAQZzfDFd8qEJySTAxkBtPcCak2ssncansnb1tf34UVW7",
  "key18": "3Yd1Avsn5Bg1GD5w9DAnEH72ZXxA9jaRUx9mcHXJ45hZ16XECWPXxACnZsXQ9wHSYDAX3ZP3VJ44KKuca83egxnP",
  "key19": "2YAfGBP1xYpeVg2NGsux1u9LVsc1ShsumVJz9EqNZD2ErWakBthxnJpHCDTQVGxcaLh3CAUvZ2ok1gyKvRnDkwBE",
  "key20": "26CZkHhW9i1f3KSBgg2xWf75NR1SvyYUn8FMMZr9PfgA5VJFq7kjf8uwcvaMgpMXKcsyXmHg1VcW9k3Nvq4pX6tf",
  "key21": "4pMB1hoLUfPqChLF3mKgrChPW7NrV46QwpHqtRJYULPusrkPzR6rTuXRhZQShULhhZYi4Uv6uEyt2mUpiLNK5SXx",
  "key22": "67d8QteuPATZizWxNmvZ6JyTHr2V92Xo4xd869dk4r2a3JCnGYgthaquuRhgD1sdoP1BG7uiEM7k89mupxDujctb",
  "key23": "382AY2eXn3a5as7TLnKqe7rTRnAFYdYvoquqrChRMn66WucTD1qVfK5kUrsE4qc4eWmnJwAjcY8PRLgBT74AHNEF",
  "key24": "3bHw76NJ5GV4S8W1XxGSsqB7hWVvffmoWGUnyDSP1WEWVZChoJXTGg1VMcDVyrLAo7GYEnz4b3oaCfkbRCR9cQ7r",
  "key25": "2Gge5dXu8rFzuqFtWXPhyoN83up9w8Hv8YHr6i52yN6unqtgB8vJetdSUoCurmcCzvGezrvf5vcm1XuQFJcg46J9",
  "key26": "41Efgd1BH2QZwaefcCLU9RTfKXcxAoqRo4NkLDVwmcCuqGccMcpuDFmUvUSFW2Ed4XqAVKNuhoox8eRaCd35y3wg",
  "key27": "67Uti93Lu2ngPb73Zfy9C5ZvH6JaMsFBHyRz6EPjitfZ3kXi6N6Bq4QHzQ2saJhsjgJnqPhb48dGJMq4fvMnqo6m"
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
