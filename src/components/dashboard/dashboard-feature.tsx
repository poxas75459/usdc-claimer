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
    "3e5JbzfvCtMcFcYK469gBaCYozu2TJb6EPZTTfZMxdsNGvYWrJeUSisFiQQCZRdVWPVRezuug6hJgwsMcgWBkRNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbzWwyCee14Xm8mqD2pSFzAYAqpUrbB8tMvG7aWpJJPKnuRV4auoLgE1rXsvq35xSGXYrJTFVfG3zZhNAw7GtWi",
  "key1": "5rZ87YCeUxVXbR44i7FXVEBa8JU6hvUAApqqFPL2ioHWfgmiG27gfdCuDCSNArwBTAj3QjjFA1qLCeaezi4tpLiQ",
  "key2": "5fTJejKiKoAebGf8RJRsPorQYtwCBpRKTmR96TWinCyPQ5b8KZVtYQ8FWNwmywj9xrrCjTJkcbKBG8pt8s7sZWa9",
  "key3": "Yw2runGVVQKxJ2hCnAzr2FkDsBb1NcXi7o3S3HgSMCL1AB76quatcwffUMfpy67jt5PbYheJPRUgEupB768k7wd",
  "key4": "XnBqKdUPDzsy2yQdCfsF3PNQio6e61a1XKG3h8Aj1YCszEvCNpCMTwKSX8x48KD7WhWDNDmUWvzUv8WDC86o18t",
  "key5": "3z8i8mQZxNMpgThWUPK5uoeTHiNkQihc1Kxx8kA8xGLjUP8kwgHdYWY5a5a6UiUDuyuoURuGBJmxdVewsY6ppUR5",
  "key6": "5tJaCjfQLqk7FhrxNr8EYz5XzRPs5iDtR2dmtAW7SMJ6Ubq6xLhHjN3Jamw1PhAQbzd8fcBaRHHCY86Wb6vT6ryD",
  "key7": "2R6cQvnH5WH3dAgyFg9MAoQZG88oMn2sGbeU9GDaLF8KqDUv1XRyLpcp7zCCBCNhfMWzTyXN2HCifz1YoXHrdnXd",
  "key8": "2fZvx4BcPKsckb8LjXfZskKZWtnuWr4oidiVsWWdFswPEKkv4bg1MqmDT4Lh41FJzEzDeB6krpbTEtujHppx1ytd",
  "key9": "5ji11vYUTzuUkLTAgavrZaA3AVHzKnWwmuJRZSE7cdVQzr7j11kHMqXrpd8TFyngzqe12p6SZconEifnCoHyPjEi",
  "key10": "EBvvRAXbn5198jxR3DafZc6XjQU3a79aYxsPc79K7XHH2CFdQY2rGZvNHGBL83BHq5KDGVcGs4AbRn35DqVi8S4",
  "key11": "6b7PDobn2hjDasXe1P26vUyyHEK5aBjL4qMwfHpKBujJkbgZqvU8L47DXCQh5VojekgE2RTY46pBRAJNNqWPF3J",
  "key12": "5WT7i2HT2yxtJGH5LqtdHpu5t6VTSdU8rzePt6QssojoXtcDop7bmKcap2pKdH2YSLrZtiqRViP6uSDcmLwmgnqC",
  "key13": "5gxQh8aSvhgoSmDMtPdQbCkjPo9YdNH6JpGuEdoPjucntH4sUUnJuugPMYnTFysAu7X1CukawRncSavoBQx9deEo",
  "key14": "2BcmGYyLncySDbeEBJxrzu3kCZf2dtAa6uyZb3iBiRaLaAZL1MoPQoJZrXQ8L9fKuMDicHgVB9UnrraihezJYQmT",
  "key15": "1oVWhtxysFj1qY772eqzSSm1QSfzuwDsctwjLbCBB6C1AjQqFhBMFUaFJsAHduXo62Nz4CXvL1v2tfXoYcgTg1r",
  "key16": "4FQ6owbgfEP9bAqWCb31iD6CFvzYzL6Z5U5oT4K3LNfP4SwzS8BJR81zXfwRntk8tRznL7tXtPR73UNQpSBf5GrL",
  "key17": "3uYBUdhg1v6a4JUWRyPSbnaBWwgb9g1BVqFBBubZuuC9mtFjDzjg8CDP1jmLT4DTVxWBuPz46pveyMzp4ksUG4uX",
  "key18": "4NyQCgJt7bhLtYAuHrKfvRnYXemfExbJnvBtKwsvyRt6cZw2nyniYCRXcL6GXuYT9A3FBpag3jQYQvYFMwKdamve",
  "key19": "3nuYXHBTevVQuVq1t1EZkZsRYpZ2s3wUJmXgvFjnXs35b61k7uCCM3rDDggQ1esXgKgm35vv1j6a1Le9xknqL1C4",
  "key20": "4EpXN91EX9rNwvu1yzcjrYhQ3Ypj8bfZNVJs1veZE6fVXLdtubmJSWZMBM5Pj6AFNs5HVT5KkzxdkcPKo5Nupoz6",
  "key21": "3RNGZa9N21kEfgnkR89UmwAeaP1WxP1b7ZPSQu2uJhUPRQUWwZjCpp7jTmoM1iooRYG3TWJCd1x46RHQEDAjCHST",
  "key22": "53AgQCJcoVtVU7xWmcj3nDkzo4gE9mtLJYofgoC3dmFNQQ8UQjmRLACYWi2Sh6UGiUrfZR88FgM376YpPEVS8dFJ",
  "key23": "4nVAMo6WYwhpdZxtvEUzCEJYZf6smbtwQAxxQsCnYp2fUjsgoZYaX2rbrW4QFmbgefnk75ThqHniWVsVtH18prV4",
  "key24": "N7vJLK8qYNcc8eqYxxqZ2Ex81p9251n4p8AgN7fTXi5eJFuEFHXaihn2EuMf1quXuvYwq1cBh7gkYzCJVFB4c9B",
  "key25": "2ntNzXHyGAymjQNBb5qoXFicuxgRJNmu9L2d1FFbPdUgWVzcDyASDwZ5qUQnRsj3mbJbHmL54Jj3cE9hyAfRajWQ",
  "key26": "5oiYkoY55Z6X62SwqerjoaA3TyKjmP1u8GwvsMTiYYSzE5JZuQnuQngUvRzFSyNoctL3ZZxLe4EfbpbV8TxyiEQt",
  "key27": "5paRffsqP3cLkqJAyKUW6zYBp8qrU5D19NSHKANUPhPaKpMbC8k89ugLvYo23zbaBC949eVFzetjMwDGkLKuevXK",
  "key28": "3saESxwLyyrbpDGz7yX9NdxCKv7ivGw4b86W7FUemTWfqtDEMuiUPAoNDBcskLqcYg8mZSjscgKK6tyD2cGXFyU9",
  "key29": "31GqMe9G4erq2awZVDRmR3udTjSD2RVpSugyqSMqeAuaAF3uf2hmoDPXrARBxA8TA9B8khr3FURkXFiJgKiAvH2u",
  "key30": "27VzhmtM5BJQvPmambmYi18W51KaVxQWWMJJKW6NfgDxvGumzvbDecwFjjUjzLcztGgq2hpegEZ5Pn6Cfg4yp2c9",
  "key31": "2YmTHv71nxcPooDvTkdmz3eMkPhaXH9me7UFfXA1vSrVjudRrjSKen7ZPXr6pKu5JFHSQAJf7N8kKLnUYYHWurLn",
  "key32": "4dfqZXghHq8UttzVfLjzLNfgza3w2ro7Mf5MYQ26gg4B3aEnmBPGRpABdndNqQWn9ep1WF1hCHfehYViQeMTkaAN",
  "key33": "5G7oGXWBv2DPgnMQBwBBgqiQGN97QA2YxM4vumgwm18NuoTibiQWkHSkSqzyN5AZzza1hexZoHBRQ11P3D1SLQFJ",
  "key34": "2ANZJkscbnWbc6f7jZNqjnuzCwwF4icLVTrsJXBYKJ7awQoJzXUrgrPFervFEp47Jb14ZCo78offaZ7QRktrhY5",
  "key35": "59GpSDcoZjn17Bf93W7Y9LKjuyKRcAcK8gL3FUrX6GNT2gH8VwV9Er9CfrVx39b8agnd298C4ShmDZmrc7n866JY",
  "key36": "3Kg6SPLSG8kNSHaQgfJiPYpoRrudb1QZtdMutWHD82RWbNMMQPL7cYF2imSU92LkmdsEGbJdLgmw9HUvUuJyZUyq"
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
