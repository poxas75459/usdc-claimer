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
    "39tWSdkoNVbRsMzc9mkCwbcTJNZU8aEqj8uiSSsVr1YBe3Dag6sSAgoFAgSyGGbE3NQFeUVnBTHSgquuWGrt2F5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Z3UapSobHMNSrE1Ew9CKZ5uUs1LG54rGjpMHTY5eQzqjeictEBrJHYUd78kDtsoNkkEA1Bptp9XaYhTrzf4dDU",
  "key1": "pakmFyWELkq3U4R5nAGMQNiMpaJiCmb4ceYHzqdYmznnzs3LJvdmKa848hfCHLnyRfyqeSczZkHF4eM86QuntEf",
  "key2": "5gL5DdiCmindrdD3YKZin7mEPGg8qbaqubwcPyJpnCLpoN6W8TxNbYGKDh7XPQ2FqNLMzks9dtiBQbUARDZ8zTQA",
  "key3": "UJ1bcq4yDftVirwzXBgN8T8vkyg75AGTJCSKb3UZqz7wLcTV8JxCixRqZ2bEh8X3d7nwpv367vZwUJhoKpbJbLo",
  "key4": "3mjw48YfgVkJuTdqyvMtyPKthhVFpwfe515SDRY3FwmbE4ZgkqjYETyWDxdt9Kd5rrRKpmBFi6gYdFRZdGUhbMZ2",
  "key5": "3DtLhzTs3x36erKmMiX1Q4DyXx4FM95zWArdzXCjkAq6BkE3TyD1rQeW5R5yGP2MWZdkqqBGWaGghiQy6bVqU6kz",
  "key6": "gw9MxSEBqtPKThv4yHVoEMLitHsApt8UG2UCdxRZtQdUJtd4a5mDBNPtieQJQ9FHEgSW4JZvTtjc8oJoLu9Stu3",
  "key7": "86dxxUkGqWZRZkSXxDURs3pZxqa2srGFQc2pL3TDf7XP2PHbuscBuiBCH6k47h1ch5SuNdHaBQFiJ59qruRhM6L",
  "key8": "62BEfhje4M28aQzh3ktwd3d9o8RK16taoh7KEJcGKDNSjwpGNrCKtgP9PbPvWJKRok8bVp97FfwMg9GHGwtFEBVy",
  "key9": "5iZigjeZzfJPg9g7bxwqoqJGAzX2SSAZe97k1n7tHcw6XejqqMiQ2D6DF53uddxYTQnCSmGi9F7Tjj2ivEfu9HWs",
  "key10": "5D5twePDEighGHRA1j9bCZ9VDgMsbDX2HZ89FhLRW2vHPnQU3xRguiPdYiDFtT8xUstXgrDBauXNbwRZ5VfbEFBZ",
  "key11": "2v7H1eVMFdSyoA9pXnD5Yb6JRPQLdHF1Gwn7Ktwh4Ygqg7i4Fq6yuAeChpFaoRC6jTviEit24EFEadPzg4qDbH3r",
  "key12": "65KczuFJ9tu2e8ND6vbS6XMmWAWmfEfPf4CqoPj31cvnkwYws5ACxLptYEnyPnSmEZmVYhPfdUbbBTggGCL8NAb8",
  "key13": "athrzPGEp7xTU7nVVRJuPopShx4zeTK8EnrLRdxQimDyjm3YoCW1FaHbQ4UhHu17Nfnvu4FU6TMfH82BkUUdr2x",
  "key14": "4N4btXunWsSoxquC33kg9qMxYGhcxKtpRVy1AqkM5PjnstCH1r4xhWS917QpeU6tiRbdUFbCUvBoQQG54e7BWih4",
  "key15": "3MpNds2iaz8F1fNa4zLLBZsTNkxiVK8RpT4bNii6qrvVNLjrcpmsJiWdN4xrqYPgJpzCB7GQ3Y6atjkeV4QLep1t",
  "key16": "5WxPrtFZFqr6LC1YYenCNTicFfNgq3GswXjAwdEyNCf4Sg7itZ5fwSh79dgsThuGogrQKKaU5rZQici7qL1crAeX",
  "key17": "4mD1n63LWBqFSsemrjQT18W1UsXGq2mVS6dZjUEyWt7SjgRA8CdkerS6BJM3CjKcqnxFqU3gP8Y31V1yCunXgpCc",
  "key18": "5dDRc723S8MTxZSy33GQNzMFP3UkeyHsdUQgPtnxQaESbsUn4eG5tA69ekaV16L2zhb63Gjv66HK3cGS6gPtZhHZ",
  "key19": "k7GTxyKwjniZAgAvneyHe3FrL7CcRfB9aN1V7Tc518mCWxPCKWHLJwC17dT9uuQK6N7HMPUEpQDPfiLYoZE8iR7",
  "key20": "3pJSeBzHLpu2AA6uCTXAXz5xkK4B6HW9SNAhBokUWUvLAwVVni5HJhE7ErCCAnFaD7TEjrQtncRUcpUdWdcqqmvv",
  "key21": "3RQThxC9gypMw9T9b1eBKW2ZsbchSGMevagHRpcxpRAe67ZfcDrn3FT9dpvYNTWLwMNtZWrbZrSSNDNtnQpmUcgL",
  "key22": "4i3c3afDsZTmYCibKTkLkySLpewHysq9dYtuxvtB9ot5w5T7aqzsxZozUMAZZ3QK6msjuymZE6TbRMT8cXcwLHCE",
  "key23": "5BR4fT4wHa9F7GbUcH7rb4v9y2oo7V3a1eZPADEpoSthqSAH4zhqUuDx6FtWH3KT7RSad5wFGoR8wVRBhBypyhuY",
  "key24": "A8h1TWRSvMW17RZ8ARXtY43Rz6ePoxUGci4k8jLGibY41cCgnM36XqYeTcEe8y8LD9eH6DnxEnK1x4VwvK2wyLG",
  "key25": "4NKcSq9sRTnK1ExvZZpxCDUGfTkATUv6VY1CFhcQYXH8rA938Dhp2Z9GA2ZCQs665uLwzdT2JnVohzYWs8NQe661",
  "key26": "5b3kRxK2WLD5dVLNY1QdR3CYSZHCSqoRo4dvbGDeMv8knEt3PjfdKn7yaqcvtUj7EVfh7jYJoidfEKUDBH2Hy2yx",
  "key27": "5Exww23XFxomEXxNuiuRnTz8kBr15s4JyuKZNcSSyQkHiKeceAaGxsSEa39rN2xbaPwjwdV2BTcnf5iv56t5ogFr",
  "key28": "52VPJvGo7JKEn4sDF8sav77MZ49Skr9v5AASrLWjKYHgrsDcnU8e9hopvULEQvn4gccpqLL919EGPsqm6YsBcf8S",
  "key29": "3XZyJs2sNvxiNqRmNapWmScG4dB5hkjLt1JKPQHWbkiZdcYj5VDmuvScpPADNkFQiQaKqen7da9fArveeiowoxMF",
  "key30": "5yYwQkV2HjQ6aZmeuZiTnGLuT15nZ9871qY1nJbTuGE4JNqrtrKusZVhPbZxJ1M3E8nERZ2QCZedkQii8pWoJNWa",
  "key31": "AWffo4sbsTaTxwAwYZuLf783PgkqqGyoVXuAfQm5tYnSpuGMvtzcak4FVKE4Mt9T6N9AAHR25KT4Gm5UjGyXhQu",
  "key32": "3v13FZ3iLenJCTGJZ79KPrM1zhReokh5Kv99r8SupFx7w3j3cBDA4YG9BfBu9cu9fSmCrPYLGLxyxAmrp529cv4a",
  "key33": "5LoV1jf6omJgja8Tb6YAyWVz6JE1S3X5tZ2dguWuZuUMyQybxDn16nfymVmsrrNGizS5zx451xsZxv163BchTrEr",
  "key34": "qSujvHr7AYCLApB3VhQnPTMY5aPmxmj6Bfd4gewjndxHy5ZaG4DuhHCsFjeAWE5J1qq4oL5nGqQYeCKNcsVjZqb",
  "key35": "3ben7FS5K1ghnpEwAS8FW9hR3BGKejZdLPGDRpdUQcdprJS7juPNaa54tzx48mZ7v61nugrgyWjh8T61ar5GPF7L"
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
