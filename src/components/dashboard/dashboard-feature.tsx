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
    "4B8iRNwRmFhLe31Ahh23kmzxMzwq3aS9D463UDs6APDjZqrEs9UfTZXKm7TQ4SocGPaAF6hWRiE1KHTPmSHNn7JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gDSjKsemwpPW1yNTbg4VeH2FeoumA4HKCRzXhpkBCaEGTvkgdUZGK6dCxfvPR11weV2wkDnfX8zTXGqmrCmKTZo",
  "key1": "3rhpxo65EQYZ2kEHtvj7dceU91vzmer6eRGGetxe8SNigYGi8RVfx7LJfrfhnL5bcskhHbzYi2rcKiEySf8r3DtK",
  "key2": "4i8LxewhqDAPpTRLuS8LvoDqjmykD1ToyCXKsqmXrwMG4RiADXMptGjnrcxtc6X6zmo7sQvspW2XSbBToit91oiW",
  "key3": "4xAqHtA2zQzqgmedAcTQeJ91jxYMZ9DreXeQ2QNkxRcnfcKkGigTcaw796b2WLCLLSYxYcGKrZoW6kfuQNhuvxaL",
  "key4": "4Q7WJUEFqBuNc9UuwN9bpSxRMNP7RdoCu46QX6nM5BPZ7D4VahuLrMPRwqdcrXRQS17eN9v6FVG8bz9KeXb7vLjt",
  "key5": "3W2Mxys4C4kf8jiUzBQC8GJrerTKHy8SposrxGZ3PcBMVvhU2FneZdWebNYNNWYHzgZpiT3VP2rvLqzPr3roXez9",
  "key6": "3NRsEJs9YUJjANuwp3oXYiVS1r3Q5MLhWVRyVodEx6HBQL7YJ7QZVU3NGWjwL3k7xSX1PSSTAMDnpM4RMCJQXqZC",
  "key7": "3KHfq9Es3gyXvu76GZ2SG2eMfvZGBXdHteNzERAgPYi4nTBdL4NwHWSSUMCBRkqFVEzED59E52ExK12cpwDpqZy9",
  "key8": "5Cxp1mEZhru2cTWkWXssndAmma6exJJvf7X7EhtNYuAAMXoXeebneSEgU4kt34GPvMPe7WdWnRq8tn5wYkdejp26",
  "key9": "2zFJfd1HWqEqrRath3aSm2cXgYG7F6n6kYWsKGEFLes6BRcJLmEgpwhAjeybcD9BYAcFP3Mjbuyb6vg8Smanepzp",
  "key10": "2Cspxnj2Fszw6iaTjjtZZAMksQ1WEYAasZ1vhxf8T8KLdkj5Nq9tg2fmtGc9XfEnspPDRPyb6DySKESS3V3JA7Uw",
  "key11": "54tqF83XtNeacLtBfp3xTvyL9wf8rqWW5jogQRdQ1tPNmVUsE3W2reo7BeCGrD2c1QssHRPjDzsvk4ACXhd9sP96",
  "key12": "5RUTLx7Qpi2PN8CSd6EVLqPuaZF7XCNjat7te5iVCQ3imE13sHP3VCquy7mnG8rQQZ5PmqF7emvaY1cnaM5cicxh",
  "key13": "2fKY7SBm63dCKDN7cKFgN9j8UmFFvWUMxWSTYZ6BJbvp5gyUXPsW11kusQVFCeEfcaHQ88YcsEDubv7FaGGvkv5h",
  "key14": "3UzMAcc3eotaqV46gw8zGXoEBBdHYPe7yzLvYmyM6ZxiwtsDZLJFrNwprehikv6CtTwJoAjFDFxwVLQViPvB3HS5",
  "key15": "2LqGvvk3t7hf4N3Pc4jPyLKoodpz3rWrP95bArcop5Ly4U1dWrMCUxuTLV7fMM2LWW7FJF5Dp56qD9NCvoHoJhUn",
  "key16": "2SX5Zwa5VrdCRBzi2LqDbbnXo67kyv7sbJva3gHWGmYonfsYocYvQ8RT6RZoUzRdxezfg4M2HsPpyFt6CNb4VQNu",
  "key17": "5xEDXtwYyvUQmDfpef8GiLu2TFAG1vbomiBTSMMS5H35VQ8ABuuQxuwA794vLedzwoYiXLUuAknQ2UumoRhQp9W4",
  "key18": "4hnuYkbkk2gn4fHPu7nDcW5V9T4FmZkf5EgiQ5iffHJhevnnR2rGoF73Gn4edmgyGgcYvVs7h9xaYYTXG6akgrpj",
  "key19": "2p7ivTBDxAB8LkMbYnat4ShQEP8oBMnA4nHpdRfMwJgrpZuGQa4ki7vAbzbmLwRgkwTJ6aXgx3brgSUCzrUEVJDN",
  "key20": "LH9tLe2865R1Gjs6kk2dSwaYS4ajFBzW6YXLNXX4K87KPG3YTT3wFonPiUJ2AkbAwX4NLTgSEFn28mWEH2nTMhU",
  "key21": "673qEENyCvZKrNELATtgknt518UYxzvpVZgJEu5whUbo74oiZeSb3Er4EAohREBHAd4i847BfKbms5gGw3TBekCx",
  "key22": "CnodoXfA5bQwvdxZFzgT9cXQXepZsLkRuKAonf57wHrCxiZ1XjSMD2KNQLTFwmn8w4esYEC5EgSgzBWnN6PDcnU",
  "key23": "6grg5X7uPs6PMmhLz1KaRTkuCWMqackdxNJneXQUcPwhjUFtBaxnzeTHkgp5RVGbjpvMQbryPERpyzwC9fKGu8Q",
  "key24": "2D2DTwPiuBQrwVhFr8iSKotqyKa5tAzWMNngRPQMpFAnm1mRXKtxtw462zFGU82gFpKXd51Vd4ACbvsQXhoH3rr1",
  "key25": "4bC4h7o5Ei5ad1UBkLj1rFyEMjopVYLWn2kUZktneexd3qTizn5XCioQd9jnnkok7J3CvCoQHjQXLNHzkapWEPBL",
  "key26": "5y6Jk2RSMZozGMjFBHtX7nyksTxxdYuPJpF85o1vxqhrgrrTGkHPxdhB3JwedDmhBmGoGgckg9DAScNraWAZtNXz",
  "key27": "3dpcxr3r6eXRoBWPLZema5VofYLHDaFZWasQnkoBztTQaMLXwvPhXbUyaVYGWEuFyAoxQKm7FaHRu44T3VpEByC4",
  "key28": "gjwawXxRvVLRcxAFXNjWWPpkvVG7X9AFiK9xJquG6rBZYJdSQdTf3rDYkFCpXRp2Nz1Gptf6WcYPfMH9dvRdVWk",
  "key29": "62k61Bs6Lk5oqrLDmhXEn88gjuYBHKxvXkxAA6TeF71i22ZThra14w94Yzdh9fcF4pSaqfahVhxW6ZNztXLo2TDa",
  "key30": "5nMRgqsz4EhHzTF5ao2pnyM11erwBbCSLiRTcbf3YH3a41vVepL4LtWF9r4s1qnDPok5AWMQABAQTjbbBgWWDth9",
  "key31": "4k2peJt4R9wpdFJ7Cy8XVvHzU1Cytjif1bJNtUT2jjzbbvSP2kBVDqehqSGMKKg2ajuvj8xApFecgrZMw4k5SJ8q"
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
