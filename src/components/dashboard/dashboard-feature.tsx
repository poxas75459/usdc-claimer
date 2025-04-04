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
    "LPmYWcB7JHRormLS7NBmJf1jEdKpAYkHwQvCQK9ZgP5kXaBraJVr8ie7YkLVKapTPMKh4vAJmCntLxZTQ8hhyPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LbkMU6Y3VhobHfiKgr4iKYr3g2wjykSC4tEWo5pXYrL53ozgiXVPbeSezPurDUMxJSSguWA49Q9tQcRpk1K8xxP",
  "key1": "28WRCJ1vF6hyduxf3sJxqav9Wcqo2PmaHmfJe2vjD5FtqPRcfWMWMLVZNNN1z146MWJzUsEh2fZ57a4ViN6Ejc2r",
  "key2": "36FbZ9arGFJtnvhEEdYUPcAhNVAGXcY3nffmTcUj8sbFLDcD2bU5HjRchX6ACJBWMpW8yKzy5bQhxSmEjZ3M5NTq",
  "key3": "Dsm9QefezNpH5sfdtAvdswjftZCZvAXHzjHpbzaLXSPbpuiaiKNh9tBreQVraNemAXfKoNN7h1RADRTxcXNrPGk",
  "key4": "2G3QYK9WwUU6xSrAaFanN8w3BKMo3QyfFgjJjZTnqBvy3PJvvLBp7SfpDSG6CcTisv53BbesvxqXRX5Yg5vCNRea",
  "key5": "42gDZo9r9L2WH6rctSXcg8cmo4BrkVFPqVrFf3cZ6x4NajoL6kGZjhegcmdYvFX6X9Fv7GgXZKV5b3dvk4mdYL7n",
  "key6": "37PC8TbqmEmWkWq83P47ou24ni6m1T9D9LBgXMBiuPLEJsddeN69o4yVSf1vToSjgqi6K2Qurezb1Qun6wS2fjit",
  "key7": "5A7868BpQsoHyLQQJh9BLbLJoegt59aU1YPRR9sfkYZajc3QCHZny8HQcEgBAB6WmHKverX7d1uhhL35EsuEkH3m",
  "key8": "3epzTwd9ZuNhH14tqfW6Q12e27bn7CaRw6aphua3fbDs53rzQyPEWquDbQpqpKSYo8rep3VspHGKChbJiC3YbYML",
  "key9": "2T11mQFEYnqm9ARcKupDDp1CSAjkHEC4jkcMrpX957AuLVKtr3ujTR6c6abZ5fjPV9sxGSeQ4Kip3V8fjWmgqAsk",
  "key10": "4KxsnJvNrMSFccTizJkho3FAgu6447eSQVvP5V6yDYB7ZqB7J8QGJKqzxvkh7Qkv5k7XMSNcJo3Ann88kwNgKWLR",
  "key11": "2cUDB5oM16CaLCBSMpEK2K46p9Q99s4PNtwgqW77NDcbwfFGNCmt2RtYWKqe3b8caLfWKurASCGefTuHdngqPW3U",
  "key12": "5Xvy7PwEwXDPrx9mJznWkkL8mm86GwwH4VMc2mQV2ZD6MEwyfqxTM9kevfPhHL1Z9bdtSc84WjGdjmcBbQJBfXAx",
  "key13": "83XYhwAhApiw56Q9SyB9JHmWcSV3ekQEkyCVPwyKqurT2xi1Sn48CwYFmE4xvMYQEr1EuUwT8x8RkRFJLAfkkJF",
  "key14": "63PWWgj4PF44MMZX2zTVpjY8yptS5j1458eMVMCs92f9ktxUeJjNRAG96FCZvMonja47RYdLKA8XPByeACAJCsBo",
  "key15": "yKd65LBNuMGF1oWtMbMGZz9N7tDpe8ienLt4ePtdYUVr2jh57fU476GxhMGToBQvLowsWxyNoTVqMM1v9siP6Du",
  "key16": "2VrMdALw5JL13FBNoj75GuWmmbfKSKTS4sJUjZwMx12bdDagH2XQP7DYC3EJVPDuFAnRqpStvXrhkzvLqq1Ww9Ye",
  "key17": "5ca9hD9ZF39NRsQiZnfGfxwreiNJPAC46ABi4Aox2JqwmTJoX6cwaNdAs9FnfufhU4EqQyEJLvTd22RAjEYzPgBU",
  "key18": "58JUxo31a5EEDLWe5B5MBtsLtqLfFJRojLnv4HSkMe5jq8tBK28N1aAtvH3Lag9YCtmkVWgEVFjUjqFQBYtCVwcW",
  "key19": "4em77kCuRZtfoRZ1HgqZxUaJVr3kD7GYXf2kSUC5VaecvUcciraJF733U9MhC2RoFGghf2cKhm42faUYduWjfhVk",
  "key20": "3inB7F3isoVHds84VFfCHhuyu1ot7kqPgQoUHZ15PDPV9b1nD9jawpB3ij1TVTw5SAfYSmtEtMJqRGZQLMvsKMyt",
  "key21": "EfhxNYefYfwPNPmJT3vdioezeBNx9yR5PmomF1apffEtvGWvskW9ppacppfVxMbnLVisb1ABfHBKCPWrTqQPc9v",
  "key22": "526iWyKZvLEjtskUDMscq2LiLNbB7CDwqXQ6W1kA7hgQuYWFpSzarpkNfeLj1MDJ7mbEpM9ybotQj5zFMwfQJP8u",
  "key23": "2XpU5ktkExVhw2RJ7Q8pacQBhVnBcxmRyVVqpCB9x1JiDH4HzGkH5AXAWCXw4YnANTkcMgzTk8PAW5GRgF7mhHwc",
  "key24": "3fyFgfEh2ddsHSVyykJGDCKZGdMRUpiPznf2iHBPfB8rXDNqeH7b66eHbsekErN987oY84LfEVPUwEP38QrayT1m",
  "key25": "549vJMnP1MENLJU9N7TdiB2VDZUZtTp4PfN61p76uh3gqnwpnLruBdksnBiHaWk6JMkmvHpKy5hzZW9YfbjrD34r",
  "key26": "5JaEQRGhhoLAXFwySt6jmXo2cootrZvAUeWSaFqTAXRcedoZeKaF7mtDbmPzmCQpXHjCxUHtGtDGZCs52FJeaVL4",
  "key27": "PUQf2Jrs3m1FfUZuxCXwhaXuownwk1Q5pp1dkCrEJ7gFXrMqDDLTZswK8QcSKLZgjJ9fkAk842mL21YvJF9WAND",
  "key28": "2sLauWtExdUFoRiVypgjDjbV3gwJwxMNJCmcyvKjdvnjK2SdpbHkM5AwwaLBxQ3TEcZJQqbkywNMmicFSDbMR3TE"
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
