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
    "4NL3BaMtNnZsZm568GMZRkHaf62zhdE67qgypo7UGXv6B11xwR52wpBWWih2UTV2oGQVEWxwx7aBcowAfkhxGSaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkzQTJzBcvvpTpEwajgYsCYsHzbwARnx8T4hpzdJHmjC5cWvg7DhbB8aQ34SjAJYbvBwDyLPh3RrAFjqweodU2c",
  "key1": "5tKuMCMZYp9QPagYXMvYexzBxGx1BfZPG5ESkEoQQKvvJQaAVnkeT73dDGayrPwKTJfJRdDo7JSYvp2tY5fjjMir",
  "key2": "3KP2F5nVYKSNQBuxUi9SX19t3Ag4zrVW24xS2VPGKqJZWrNWpDYhGFxoX11FrvwmodebLwrHtHU764DCRTHuDUfk",
  "key3": "jhssY3CQQck1EAQksyh23CMw36UpsaqcFxfuXfd1WytmW7mMzGg377bGHereSQogf88HWeYpz3cVU97TyZXExAH",
  "key4": "4mV3qCaqsP7y1duzM2FoD7Bo4Kq4JKBnk8bkyTDJ83giUczunempDSSXhcy2pToTFKkKFD9XEWBGiCVa4cpkvuME",
  "key5": "2WwWaBK8nMTdZ7Wa7xwTAgfqYSJABXba7yRKRG3VBdTxTpzMUCmmPdEtV4iXcjoc55J6efXUyj1goiaDiY6QjzZ6",
  "key6": "BzQx9JUufiCwezgJBGyTkquzDGw3HrTd2MSD3J6KmUTBRYXyjxaT5HzwmTWhYqfUVe7nf4dApfoo9Ax6saZxnLQ",
  "key7": "2Vqanfmjyp4TiVhiBPFZWWgukcbdB9aPDSErVjtximWxm4VUWNLNdVCJ66GBnmLfnb3cjy6FJv3TkhaJCUCZQtcZ",
  "key8": "4HigwjPTsumdbe7iQttNhFVKVgspG6TcFfd1TaNCrwtA23PuovHS5waJHJE9YDjqTk8dDx95VbP81wTcXjDZSDsi",
  "key9": "RKodZvQB62bCmAacBHbyCgyRwiWgcJ32eAZKWGM52MoGy4q5wykHthxyUayLp2vna6RGcw2JfThcTJfA55p2cxB",
  "key10": "4iyYFskyx42y7tm4FBWGyc8jbvmZp48M8hXwxYp8WX5ukbjz4PsxACw5MVDE9LxuzYirMsVYQyRrhs9dbCB1Q8Pd",
  "key11": "KuVc6kAKUaNEcJx45MTbPZEisHFHZ6q6PX6k9J9AatJxNdt5H2nTeqPQdMK5JYvsiSGSsnXJveiaZ9KPvAcp98J",
  "key12": "2GnCw8JbRErm3dsGPVLGbfs3vKPp3zAGAXCj4h1A6XP56XTtAVV5mVdg9tMBFKMSJYiQXGsZRpXEXevfayMf9BfL",
  "key13": "2ExAYrBa36BQBaRnL7CvxtDJeHhkngFogjv1R9YSfdyhuafML7CMX7mmLmYH9wkMNUQUtiq91sFGVGTMiJdFsvEv",
  "key14": "5KB1pbr2P4hwYCx9Vz5BGaPbJiNYq6vSTdZtbRd4orRVALLmmJ57RNVc8xDAwW16STcLkVsdj3sBakjou9Tc27bj",
  "key15": "YHg3N9jnj2PmVE3Uhn1JL8fpP4BTsEnG6qSLxDgNV8vxmaQKug8YdqikvLhreEMH5Wq966Bt4R9rdrAEx3TMntR",
  "key16": "4TLJRXHNbgRzk14BenzQ2wjW2HVeKy7pUUGyj7ev2EgPd3kB6iScKkShRRiGNjXe1kC7Du7X3va9wydw8ESz2gX2",
  "key17": "5CZ5SkqCYU6KoYAM6GyqLXfzLcAhKan7qsJeunddKiB6SYub1Vs9thN3hgnQi41JtLXv8dWwjkkCzNQMcTExvMRN",
  "key18": "2Gd3hfNNQcVMTpsLNsGGEM9bGVXdXL6vvp22zH1UXzjHsP5Y6M4pWsGKHbii8NCftHFxQvtB3gAJT3PghVgERfaF",
  "key19": "yFQr6ErgUj1jjj8jkgZBmuE5TygHAQ4bTkguR3STBofTGLq6UG4U9UFCDkVB5aC7Tqzgdsgf6ZSCkdxStZwq4yM",
  "key20": "2rgLg3nnAdDgejRfxhpC7PVYPS5DMGQexkdYAdkeYCGhfnZWrYz7rJse8Bpn1wjioFBfUUUKE3BbRsdcGDEFpoWc",
  "key21": "51sXFFTsGfjp9LUYuy9ochGc7M4YEK8cL514B5fBKpZxxKAqE9J3gYdBRpS2AYVqyXU8X7VRnGb8gp8DVSSF5pcn",
  "key22": "2hCaV4CwX9z7uq2HnXUr6szt34XhN8EaXFxwTMW1kPUjqr7wCGFExev6XBVV7feoLgidRZDbgUjjWKtkS8fd9xDf",
  "key23": "22HvrfhkduAxwG2cE1B9LjAzyaiprmRWJy8tUou6GR5L7c6DPWCjRZ1B9ufmntzGyevfoY9yHDjUCmJkf985VWxB",
  "key24": "41Mj4hDLfxVagRajtAkTpG8t5vEoFoS8kPWhEDUgfdb64aV3hFL8RmMdXPeXFgFxDo4HBYfoQksfuMBFTVWSWM5x",
  "key25": "3ridEnzRKdrayR8fZntCaicSNaQ67GiYpo88QHXD7LVMjsw5toGi5rb4Q9rM2ADABPi1mUWPF18ivwHBKXR6y2tP",
  "key26": "53YZGiStGyQPEn8sS8AbWj5Y3GySypsorV1zYdR6CW1rtEr3cXa69BNEyJAvG2FhiRYy6jcuMgbhUYLGQQKWVSgD",
  "key27": "4VtM5v1heBqWXdHZsKzpqywYpFRJWipw7ghd5WVXQSoYuAa4XGzqQ7SV7KPZQe61n76wHrBNsiURBxv8rnrVFapd",
  "key28": "5dryLRbrwcNpnPzmbzugbCoQKXHSiETq9kjVVYx7tXvAH9w36f4LnAqBWarSDM45QQcfDatSiSeuHTPCtkNMNoX9",
  "key29": "2wtJayUUBBouLt2dy7J6YHY6m9gSJHRcvWA2GVkzQc6BH1CVK5kPnDNyokDje6KD676ueio1hEw5xAydE9gY9Nr9",
  "key30": "4pCFqM1M7mQ3NqBxsc2ypmYs4VoBcT2Qc7Z7prCX6AzjkLnrX4f6QZvimganpKoXLTgRV7gfzbpa8pfKHfWStsy1",
  "key31": "3xmAc72fPxp7YM9pkS6AyB866ThNVd8gXoswApgsXhT7PgCBzWLiG1HLC3CTbpNaKQ5WmihA4uRZNAzqV1h2LnW4",
  "key32": "4q3LQgBHjGRw3Tu8jzMj13V7KDTX8VwiQa4Xkcf8W5vPpHuP6qu1sTbCbEN6x5861921GPpjiUhXg6MfXY5dtXWv",
  "key33": "5JKRkofD8DwxvjEJvTmVt4fErs3zcJpEa3aw6zHKmTNzt9m7cmdP5Qq2XMRRRsJVNbb4RSkXac21U67eELJTmh4R",
  "key34": "4V37ibbJasdpzdtUX7kNV4AWJphdJMd2iJVvFTSBSKrT4hkYPj3GAqimFz3VRWo75NdKWYNWTBDPirvTgRJ7nWwf",
  "key35": "5gJ5f6KxjW2vEoHcgJnBTPAnjEjZbU4XJx1RPoqRsBsHasxmEBjNTZojj43AMvREwx5RYZTNmEFyGUkQaypenCWQ",
  "key36": "5ZHTax9hrEgtan6wEmtYQLjWn54tVeeyQsVK5XChR2BiZmyudAxuLhG5bXpCWGP8LWqcJDtAPdFu8EeajmyyruiY",
  "key37": "3Fzj99EdUR4nhScR871Hu7zNcQ4XAjJBsQ46W5noMfcW35njcfd9XmdE2WGESgbehKXwL9rhGBnpGMJ1z59vQ2jx",
  "key38": "jz9YNifMNZ2YD1n5E4AHcMvyNc7a1y4tgTM9ECXEsENgNJ6SBtk3r8K7pDUN5n5RqGb3TJ8pn6AtX935N1wQwhq",
  "key39": "3Pz3us1HaMN5r7mAVBKzaqF1ruuqQLG9GCQycWWgScWFtcwf4Q8Jye7yWCz6MYHgRYiBaK1XRHabtDpcNtUHX5Q6",
  "key40": "3pJjq33hKojVDVwJF8yGTADtjzg8jDNGAYxsq39KZvqUbL7piVmhZZXc6kJsEcvEMyZAf5VgxAdmxmQf92KHWnZg",
  "key41": "4X5fyrePNYAa1DvncCSxGJmPgaPgmJDNXnbexsd9vWHnTbcnrPCsEfP4pE8DPpxMVrYf5cq9b2EqfjGsuVax3fh4",
  "key42": "5sukQ1J8bnesqLbXT2UrVpYwVf3uYgW9XgNjtSfC17fRkMT1r5gftA36ocvfjxi9fQn4CC3spJEZuJ1FJhauK7SE"
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
