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
    "2jZtJnEGaJ3asgb8vosgUDJFztUYjZaeqpcgwHHEbmbaQHb9pH1Sqm1THSB8owePKCNfFzZEQCpbqTiiqggfMQWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5f6CoHUqSXAbQA55axpP3zFVtWkEmBhPDjYrMZDpQKzx1LyqaAdbcqnSPwF18ZkLdRcKsMXFPw32Js2GT4p2NB",
  "key1": "2nb6JPJNEFRx7vf3ocUocTdvoN76oJxZhoi768ZAZcawR2e2vawLUoZGJrVwKuV8jmHy3xah5T6GBodHWJCxd7q8",
  "key2": "2fAqQWPcJ99Y7bf2AxpAJbxTdpkWMFJAVJkAwWiYhPah4wwfLb6Vu8LhEJSRn5D3eLhY7whwFvn5xMELYbkWSqSa",
  "key3": "WWBx6p5neJLJTQwtT1qnPP99u4uQgNMD4g6Aihm4TfN6KmxjNGufeEFVHLssreWcMr81DzkZPjohkFygMcjJEB5",
  "key4": "4Dywf5482fdnCvZantXukeDcQaVzdG6UzUiR866rBSZnBazwFBpgC1xsJNmnd1YubKNKFgJa8SooK68XkEhJATFA",
  "key5": "3BAdkX9Roq5QEoRwNCsz76fc9UF3ud4vh1xM6w4AjzU1CerootTrzKj3gJS6ASkcAdJpUPwEpkWJc6as7JSre5eg",
  "key6": "31bM3xYvEm8hXtftWwvKtPPhykmcFQ3u32f1k4RzPekMHCCZPTPN6MScFZTeaqMBdep41yV2GEYZAUwXvVoTrH7F",
  "key7": "2PcXBF6SRkSqYwNeKxoReGVQmgZcijofwNrfLyNt8VKg47YPddT7gmAmH1mgBuKxd3oqfGhARcW7S6fbDPoaKKwU",
  "key8": "5rQc4admdqoCnkJhNLovBybkPtTkJr5HVicymdbAd6XNiQxJRGvw9Aojnt915noPU4KLzaaWPAbzDCRZgp54AHCv",
  "key9": "vwvVUev3RYhXdhYJ621WG2nBDjnAPPWiJqKcUn4r9WiDatefeLQX72yvkLVXLZLyCcs8fE4FYMgbmBhNvoC26m1",
  "key10": "3xdhv55QAwVrezhp9fSSz8NPwvjNTGZ1qWgvsgTJpe23msXcWW8dNixVYrX1SamGXh2LHzC6y1NQt5K7qrx6g8jn",
  "key11": "2B5ZKJLkai324UVDQ8Nj1DfvYCt3MWP6gPvZe21tCDexJQZk4dbXxaEKTFL7CfbUHcu63ih7taaRj3QzerNZH3uz",
  "key12": "44HxqVFNJ5MoeiYtx5ZZ68o85tiu4mFwSbyCVzAXz1nUVLK4GmhiExc8F1XqTuGtD6btuPHUSmnYKoyGwh3yuLvV",
  "key13": "2sNne7LXWUnC8YJMp5Fe4oRAW6vajpRzD37hiKgzBPZgjRoRk5APvtRvHEYmmEirKwYrtUZoUEZzakCmTxjmHxxU",
  "key14": "5mdbuBW9N682eMzxmA6dt7r1vdYrdxU6YQBTdDaT3YfkKMmDkTsFw1xBz3NanLyQdBs2c52teAPDEwEo9FmiMQdc",
  "key15": "3KD3NAECS119ajDVcTTAgsqs577v1KX2Nu47qHc47eJrYJFVC4is52QzFg7Ju7418NZBGTko23d3pbYYXaghtGcK",
  "key16": "5vtHVbkLSaW3gEaJZp64hNxvJNmppSLsqnzr5G3R1ZzZK3swrG2r65G8L6fpHGAwKgqX7EH8r7uHUaTVncKmox4a",
  "key17": "3GnoEKSed6Q7mHTGF9bsx7PPeoDC53a9CfdJCr7ughS3E8mnsEMu3p4fchA9pQPSHQoUQyGGfE3fLNTD3Yh7yR3B",
  "key18": "4XhsbPYfBeU1DDqxKBEv46RPDyihmeK1R5ufExVcAmbAEaPJNWxQhJ82thUKnJZwpfAYLVfLoJopWwEVVv3GRBtF",
  "key19": "Mccpy8ajCkKqnGZKwNqitAFWHMtjk3Xdnaw3gcUzHGBrD1h6xCm37ZSvBB3jgzbfvrrtMoDfFEy6v7zQ1aDiBfR",
  "key20": "45P6Y4w5ACPPmz6xU8jYgnEFjh878EzbRwrHZtDuKnSuHv2U4kBCBpXckxRU5fiukhJVcXbj8poMLYWwad2cYN2S",
  "key21": "5YLbKm8fdRpr99NEiita9RY2FT13rKR1mn2RD8qhp7RukRZXAQ9qUevHc27jV8N7bdcDyhBPQBGG6wY6fE1FzoYK",
  "key22": "2fnPdhyGP1KCo9G47mXPpqPR1zqy2QeYxqKS1BZSW4T6tGwMkca8XmuitXTJAYFF5x8V3Pu4Sk6xFhERBWyBcLEE",
  "key23": "247fcmuVnNUzCmFybxFeNKtQoJT4SmBYP6jy6zozRNU8DTdSEyjG8KvHGSSKAbb41ZfDhqQayNfuWY379fU4ijHe",
  "key24": "5x7dXrSTfqaQXyWjZkhwFLq4uBZANv6XR3eaTmiMMrNDtB7YwMDRupC1QQJes6yNG4dFw2R3uoYifDyGwt8Gvto5",
  "key25": "4iUVPoFurEDKzbm6fRHoSwjUgiJ7enwzauqacCrAHEe4qgt22Stmu39rztPvCypr7EaTsH5iHuaUrdBifmKYsyM2",
  "key26": "5m7e6RGCukXVx8QSzt3vWa1HVFrhohEN8wnvQmywXsTxi8jsKz57UH112aW13NNnj2pTHJXCcSi2GygJXYhsSt35",
  "key27": "5kyGnCV1dNyTYkN55EmmE6Hvue6BU3Eves3HJwNXf4VwfnbxZ1qRt44hZKut8WGxC6TdSqHe52ukh9b1wjoe6nzg",
  "key28": "5gse32E1EJw4odJ9m9Ykywy65nRSL3DvCEBa9b9Q5ruNFZPBYsKoD8QSSbCJbxdXBiXS4kaYEnnMDJ4F4mmqAjbe"
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
