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
    "2pTTxHAu1DkFXdcKbx3qGDVCduPt9AY9Vq5ZViS7aDJWmUXwLJ7NQk3MicCp9w9joP8G3qSeRSvBLxZVaga4HTRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2foGwjqhfCKVJGhXb7npsGeXnrLTwZhLVKVWw3J19NjVGwKqpE9ySc5EGbkBMfkxG4Kh6P77QzChkLHwwAqDXwQF",
  "key1": "2nxphFLgs5q9RhoMUZdLer9uaksV9Mm2KJ2FoB1CcpgGE8He7jmKZuHiuYz6KsfeiUL7QStDC2u9n8yNPKtwf5iy",
  "key2": "3DmhQLugU4YKeVXjy6Gm7ddhMtxES6Z2TbEiwY4Z6YTeTR1vknqs2eguutv7jZ1K5x8NMFnTMg718Vgu6ho69mCt",
  "key3": "2jLY2sgKrbSfNWhFGWck6HhZsTwUbJee8xVWFhyK6Jv9uA6VPmDg8Yf5BUPx3DcDHRH7jXhqd6RbpKPRvVxvGkNs",
  "key4": "4Q8chkZb85aVs6ehhd6XaLkNDNdtAjbL1Qw94eb9iEvcLr7rcXuJs6wweUE5YEfvYJEqafXhcqBqqimDFMeq5yb7",
  "key5": "2Zk3Xv5oCwzXwxECoKPwskd9VancQwN43GE2sEeWgjmqCcHixdGY6oBEEHMxRQ79k7ktRssaaXg5RBVKFD3Xdh8M",
  "key6": "SDAsiSn1PvjTxzbpsdFfrYVUPnQhum1HYpxiPDvLaEum1NN4PtERNf1Yo9x4XHHooCALJEqq38yYELGVXJERMGT",
  "key7": "3dsKdiZ3Hvn8v6f6KmKTQAAHrPZ2MoFfsf5Q7PzQMvpYYy6JdFxwM2UBZ6KykC3Yg5SiarJrsUNeNTcmZEtrHtTc",
  "key8": "2wnZNAHzLYGCoAwUW8oF9FsB9PAULtFMSVEbHuQfSWjhCxZ4TS8MxtsxttmJhSWgyvkFFacEsonGZVRzfLJUfkRG",
  "key9": "Nb44DpFxZxAZ4EdTidohcaup5wqTs3Hp1PMuPbxD8VuywGoBEgKTZUAU58WZqRNjoY6gsd3kEJ3iSZxo3cDuwbK",
  "key10": "3eXi7PxnAXoUgDPXqgnivZPHzpXkAWCj99VWaLi7ADXSibR8QuWwUGPXHEP24nh1fgGg5CGjWJZnMoheC9Da3oSc",
  "key11": "46ffpaG2PpgkBnkATjE318eifJE7GRSnNPgBH6yBeQ3aruLwmzLq9RK3Tvg8JJK54e8CJVdAis9TaX2PHdKPo32U",
  "key12": "45QdhoVsH35SVG7q2e7VfYnZMoSy9B2Bh99aAn5iKT8Gktwxzgagm6Kke8qQaP3nBFa19A69ATf4cbc9XaMJbGv9",
  "key13": "2Umt8rsBcA3chjzPabLctLwi6dyVEpKZuCydqwFiW4b8wM5FueJ1KJJ86SFtBX6pZJ1Uf3cKFW23NVey93KofR7V",
  "key14": "2Y2R29fejzBEPiwDkxd4s2KpyVCKxHmiYEdThR2AZ9j3ppr9hic7vnYDpmooNPL83RakpTuMstffTkn5fDBdUqW6",
  "key15": "5SRh7gE4WSSvtabKUQU9EKZSxgU4TPZftt94srWUsne5RigbM1Lo4YQvseDPS4AwzbusneVY3HmA8baUcAvrTfN5",
  "key16": "cggD7gPrdnQqmTmr4mqqx8enFD7RKi9eYASesdxVyg1pE4foioQmRZUeUf6eUCYd41jVJUkxiR92wvNSWJ6x42R",
  "key17": "2Pnz4NwdFEq2AQz8bknfknLJxzwpGAMuYeM9TdacpGjnLCPX84Dgo4D3VD4dxaFYZkBtmNWHssdgP4a5m9YgR7H1",
  "key18": "4J9ua3Lg2rSZvmzhddXyUejKqg2VV3xNetmQpS2svTrzui8stuWcs5WLXavTdVTBFnB6UZ7HQogkrBYH1sBZeTcP",
  "key19": "4ubfzoUkjMuLYGxKjgYxhKxdKi5hq9Fmnz58y9Z3kSTuHb78NRQFRRkYHZsEp94tbgm2GY1M8PcHdtpnLZMFoBLj",
  "key20": "3L4LGGoVaef3dotpL1mYtnmCuDV3XAd1yVJapkp4jcnN2r3XpSQRkPNJknPmrAEZJG489iJf8KSvgCHfqSYSP7di",
  "key21": "42g35Voi7tUhbnnE7xBJhsa8cxo4dsW2LuBKrBczagrHLY1LL5sb4gNUUD7YaE8hYEUWYk3ToAW9UkhV7rCMyVHs",
  "key22": "5qxNQNYmwaKMN8RbYXvKiSX1TPdrogJNgpoUFjE7x63pKQWwVcYxJekJnxtBzLLq7Ft64fc4tY4CcJNFZN8vynLx",
  "key23": "2hsFiUbxzeLoe7y4XraxtDpatkyBrVWMvWAPnr1sWiYwzf7GDNyUKvz1YP5rwXfvLD8Rc1QYdQpX91wMNQ123H6K",
  "key24": "5uU9XsL7MCyRRX3jfqMRdj3KEkknEhCvKsjJ81i9wWmcp89DfBQXwHUV9VbGgMcUMABKx7m92m3D4Swo1jdD3P8",
  "key25": "61SUZjuyZV3aGxuC4fWVNbjr8oVb1pioib65uyrafKV9YWnqPimjNjzCuAd5hD4H9te1UL7MuJ4DdQQUHTMyxvZn",
  "key26": "5zLLb3Ds3V3mgW4JKxQQ3biFPMQeKwuwEEREz9v5XHMvc9GGYhyF9e4iAGr6DwsCoHQq9vpxcJn5mWBS78YjXeFw",
  "key27": "2ynR6RnEUNnPmcvR5z3vKXWkkYids2zUfCAfxEmr7fiP9Ra7Tk1DPMz172r1MBeLUwq2Xw2haawqxv5kY7kjfDKv",
  "key28": "3LoscnrURNdUYcCsZMEL12wvq9Db58wVpoYTbjGmGyVwy3M3p92yHTzCg8uzC48wD55BeGYaotr8cn8WtCWEftBm",
  "key29": "HXb1pJsquwbNZiBxatg2BbHuuL8HorTeS7EEWRWVzzWaCZ6855zC8ofVfQhthtSmHRqni8mYFaKMXuxPrFx1CNc",
  "key30": "5qSEDzuKBSXQx36sGgLn9rtKysxvLx8czu6iivGUnpbGnBzf4JgNGWxK9fnMYxw79ioVDzzsajGrKezSecU8CAa1"
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
