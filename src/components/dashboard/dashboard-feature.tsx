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
    "5K7YmhMmUDhnnBPAAToKd8RdXmKhrq72vcBJNErqJoDJMHBCZ1SZFjwUUY7hY8RAAZi6U9JKpX3G4RyTcrsvfprU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wk1us1cJMVBA1BJfM51D7D7jzTC68RHNKMRkmsY7x6AQipMCpXDgtkHxkPWs3Jz5KSqkjcRYhuAdmzY2e9gGfmq",
  "key1": "ZReZrWi48M8MmZ8mxvYEJjSkxCvfm2GovnEM76nfVjeZkQyVMBFN3YDrA9J4NLTe691JTPoGovs7GbML67STWqM",
  "key2": "3hz2H4ESi3vvuEaP3BtPvtn3uFy5EYnkxSzRoAoXs8CSyiTZgtkhZ7Wz3jbfAU5g2A7fNfULV9JB16BfAdways1w",
  "key3": "4iJkh7YpmKJFyGbBKf5ueywsi3Uzrab3pNLMvgZkLBVf86AEQMvUEQCsGBk8FuctgCHZP61Vay9e34sZCTz7Vagx",
  "key4": "2PWrJywi17hBPq4Xz4YY5oQ78h6MMtzySjGujbK4S26iMp1mJRvwhPDHzGULWsGGwnNJnQX7FjwucHErx7AXti8G",
  "key5": "aJ2a6kWCw2jtAkzPMHeSmEsoi5L7zkWHn26FVz4L6iUSeTc56vfEhRBqsq3mCQtnLEXLuhubWFqX557ZbLugg5N",
  "key6": "2jQci625xz9KKAMwNSHrzYdcRRSN9jrH1cPq5kmf3YBXVdc89hkt8SyML1roCNeTrCSj5PKTz2A5mMXSChJ5GuDb",
  "key7": "2vFSUfnjaHiN5HLHhqBszGoYtxvK9CuqQ3PTDhW2cyt9TQBpRuLFTXPwVGz9MaMRtF5LcsWdKgTguFzuATXFcvJ5",
  "key8": "hPWgymWkxkV2B8HZAMBB99ng4UvP3XJW5BGrsqw4FYnER5R8CV45UCKc1c6RLcnUu2Gxq3QkRgbyszu81WQ3bGc",
  "key9": "2ZbUtRMpraBodJTjQkv9ibHnnSsrMRZKXwh81fLYKc5sbJXeNyPqVHxPeV2YseF2cQ22KBHthX1xfuGgTzeFAjZ",
  "key10": "5ncSRqk9QzApemA1rf2y3SyfuPLb2xeP6CxM6dwJNn9TkXZ8UuarJVagQYb2WeEfpUihSsVBcTwwFCAbeKqwYYkS",
  "key11": "PRyLwkFk8CKHeHJPzDAUyi5oFGU7pvSTeJ724WEmKw68Waf42kuTHH9TaQZ6DJ7ZCvLnRcMHcyVZ8aqCyVZx7nM",
  "key12": "3AiLdPtCFWH9oJunEnmc6TtXNsJ36YTjxVQbJfFKiJtNUBq6rUmR3s8UiMBvLj5XdGW2bHpZcVrxzzBX7SLzmkqF",
  "key13": "2ymkpW5cHdMmmuHGyCTNogtqFdG5k9ubSzhVxnmk3ioJCWWkxQF2CLKUsHCta6RuRj8paresMJiNzfGFK6oSFNqg",
  "key14": "3XPi4hfq3dBWYsTAj9qrVCrnkjA4RA2rZFLrJtMfBCMRdW1dC3zWT7MW9EGHYYNYQUT9sPKm9BKqJjx5hWV7Ugya",
  "key15": "zykTR2MJveLmz1SozSocEQQE3JK3yuW6cFAYxLpYnHRRhEWa1XLMMGSLy45kDaYqBeHfDB2G5rdRGfBFVdxQVD6",
  "key16": "3yCuoh9fGKvkdQNgZ76zBJLKKNM1KprQ4fowGtTCJeer6hRWXGbDi85rW4qsYdeZukEUpPLjuZopDmRjHtH1PuAu",
  "key17": "5thj3aQGBWqCbndmd2xDzNbU3cfV6q7ocTWmeBuc6QxXeZZGnf7twTHoz5UwKvw7F5E6UA32JCu13FMbiVhZwwtR",
  "key18": "2b4W6X74S29qdMEQFKosgZJB4e2fPXc1a71rJgyfki3u2GMsUGFZisz6e7fsW9nV4iADtE157Abv7mXtQzX8TZm9",
  "key19": "2H8uFJqDhkTkb8ozEmBTEdx5xvoPjbXEUSXN6CbFRJnJYGJQeje3cc9KhhyLjPa8oMiFMsNsMsgpizQpjMwVaR5T",
  "key20": "hTPFzyqUms8T1rmked9DtxFZfDzHypcoPzjndFo3iGmCtPuED4LCEWumam5CsJVsKHeGgr21QNUUX1vpR8b44Ji",
  "key21": "65neG6shQxcDiDG7aPfad3WxNPPxuTvM9icMmD1MUeL2R56x6FKK8fnLSmgtV8RLUi3tWygp34CEGiHYnMs3qmoq",
  "key22": "4aiwfARxQs8qE89KGkPwKAJz3nwRaMrCgjDxg111KHK7irmm7BCG3GuXajPnC6Evq4PNy1r93PPxkQdxYVCJ7KYB",
  "key23": "3FXut919qBtnu3bY87DaVd98AcDA9etZjRchtpvducZ3rUvZx1RrHxf6WDTSNhuEhzBv4pZEHDfUGP36A2RZ1zXb",
  "key24": "5z6nXgR1yB95x9FpU39RkLV9zYxNmZiZQPiauEEsLcx2f3x4mCKZGQ8cEc4rDU6BBTvhV8Xx4Zw8NrzeBaKtG4tN",
  "key25": "3pWBHHMs2VkxTJZz79L1avhJ5tnSzgXyG2pT41uDZZd91jcVrw4nBs31R9zarvFzo6Q2ur2HVeRxfHuT7MywWjUL",
  "key26": "4KZBCpkB8NWYu6DUrYkRuJwUvXjFDHFLmMZM1sgptLgHR9kTsapDRz3c1g3KnCp9PTLhJgngUSpti6UqM7LddgUy",
  "key27": "676tYGCKNVguweDqxW3K6JsKMAa7sw3nn3htVfXovTFVYfMefgiUZBc3iw4GcGC54eY9HLatZ2h6FPTXK3L8FGvL",
  "key28": "3bqT7WQypGoWJnp3LYpVnQoNAEkfE5dDsXLhrEDFsbjgg3iAyL9Vwt1Dt7fFiGiCucxedxHW8V1zgyKnVPrARdUn"
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
