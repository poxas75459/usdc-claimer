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
    "5jHCwhkksGCHx92QaLbnrnJpWth7FJvNAY3TMX6XjiG6xiwfNWi7X6o3bZdzCuqS1Y6XidE7bGxjBHy9UfdoQ9SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2xVxAeGc6iAiWvhpxVuf1tGsNuvagj9sosvoLCjXRrFV9sxNJPw1EUueixcwasxGTXW6PfkQa8ArPDKh6vwzhS",
  "key1": "vdrBD1RrQSr7YA4QdZckYXKBtN3yxtVcdrp1fpuc5ENTzVaZnYfvq2m1KjU2VG1iwjjZmCFzwd6UsDdRkZnJiTt",
  "key2": "245oontfn2a6fb689joxFRYqZmTyx5haobQWwRKbz6kdJzTpHzZoi9qK87HtPnXJda7XWGtyRodSPXKAJSP5e9Ms",
  "key3": "4vGgvZMfNPWzqcZSkiyJW5sWoxXsaCb1Fe8MfgWei6n4prNQHAGd4GxNoRCePZFuzFbsgcyjuyZF5UXZcCeaVgme",
  "key4": "iBKycA8QfX9L6eLQdxGoGXHUAvoUGDzWv79AakVJGRLvt19p4nwNuUd3qNrzYuKi2KX26yUKDWxumT4pHaprAD2",
  "key5": "2vHN2SkDeGCxRTeckdDEvTakzBw6By8jiiPnWDxmhrjHGfSKFCJYgMwT8t2nUJGyGi3MdqeU1HXXeakP6JtpukBs",
  "key6": "5H1AARS468CowNU57JRdyuSXmeQacEkoMDFbQJh6JAppEi35cxjcZfQmVw3KzporBRge9DkN7YX8TznD7giEb2f7",
  "key7": "3MLaMre2R34im1dtcEaCmpNkRLcQ6jMmyJGVNxCq3DPaAxh4cErVXw56xz5Kxa6aK6tHd6RY9JeAgJXjbiDaHzwg",
  "key8": "3aKSarHNL17UTRZBFwaBeqNvy25qFnUVkAFS9xQSVB53Wvi6AJUebqSJqj5e9KUXtEqjuFJjDs1wsBwZdt6zW8Jg",
  "key9": "4VWdEaKkFPcgAdWYTi6mU6n8isH2ECxXdSaQJdHJAi9F6iWiuJDJDHGc8rcUoNUB2cgidzCsFFvxrCnuko4QhtHp",
  "key10": "M6Gw86CW6g8f9fbadqEEwy4eTZnSHfUYn1JjCYYLTsVw2bkWTYPit8BNjmy9AU9UhoC2m4qKWf78wKQVMZGHLWV",
  "key11": "3QERRCK4Qc5JEWoUxCjtifSs3qPL2w8K3u17v7DdXXiBRmzfPCGFvxqBAf6wfMNmRffBW4yqospyhuvqkT4KJbeu",
  "key12": "42R6bvN6t8TKtGGNaPbeAb4JX41N391PeHTxDSeP7hbKNyc5SUsnZnMzHM44rTp4AeMMzraW7ZCWafcQjkjAS24c",
  "key13": "3CJiBHsqLffCSYCooD9zzhRxkD7rdS3bitzS5xXhPtVVQ7q8NmkJ6mdoSgizaKjMbBP9prZnatQPW2LUhFuUz3C3",
  "key14": "2edscBEQjcHPdGcogYo1HcW2SuWqLZkF42Lgwq7JyUeQZcuXaNNzhB9PMjNhMEzNxkkWcffJLpGDYKkZwBZiYdfQ",
  "key15": "4EjGTpCnZ1Bbrw6fZgW1bpfoeVY5aWYihThTS4JjVV5Fzpd5jxhRbm24rjbsFBB8uw84FACj1zakzDSW4a25SFZW",
  "key16": "5JY8Q22Qc5RGoTtnsgvCbmwCyrEg6Jfeo7921oTsHz7qDS1v6mjcmLm7wyAL2X7MJxBAeyPru7q19Qja7VGQzKPK",
  "key17": "4xkZDNEHHVhkMvBMosb9QieFRAv6M8ujFYCkT6CBzAF2B8kcDxiVAV6BmZReSoLmuCu8Wai5KunMcGfmi6kXschQ",
  "key18": "aE8BUjcSE9mewaZYMRMDYcEe1MAqUzS4xa5MUUNCn9mgPaoewD2cTiNEguk4m2sy4uy4ZQCzgSLewThM7HnFmUc",
  "key19": "66DGX5WAaxXxkANSDaBibQS6Mg6s7F35TzSr9RFAMhc3u3NbLu6KLRYqYDqQtmSXUucHtuwyBnMBTuqcXaJYsBsa",
  "key20": "5PYpHujw6Ht26ebJg6agoTAFTBSb86em7oV7f5qJLW6zJWmFAa36VqZcDTgb638HzHrqkphnxvCktgsijBxwKaw5",
  "key21": "5ir3H2aiQ7JS9n1xwF5FN6a9pFVMwE6nyyzBDWG2K3Rmtgx5E2K15MCLQBT54TeZ1iU6vFci27QCFLvdZ3jL12Ys",
  "key22": "27FfaSXsBxc3ZhzD9NCHx7iioYusHCQDDL4NJf9JY6MBffhm7KiawSqCkzv4FUWF8EwQdwkcsQzuSoHiyi3on4vx",
  "key23": "5HNadGxTpgQK2u3rwF8ZzHbfCPSYJHvT3ivmGP8D84A9EKxs5CZStEBgbEE98GsAfqiUnWR3E5888JWC9UJcY9Ue",
  "key24": "5s4woccF7XDmeM6W5LqM4hv1WPFoXXeV63tQ73gVRUeRAzJvZ8BdMC4YtStJ4WpmLoH2xxhES94VxYAXe7E4JDtH",
  "key25": "2rySgr1HuZkFAFyVVANVKp36ZbJVAewuccQx5Wo9pLXUEGJsPZptFqF2S7WNZwWokPeoEXiB6WxWLscQPAeMS9Tw",
  "key26": "5QazCCy3vBdUsuNfuDctfNGHxZhbE4LApify86kabmrfFBNdDP7zKP1WgJEciGAwMGLo9qWsCrVmY9QTyPcuGW7B",
  "key27": "4QYJDyVbQUYMmeLfAofVy3dSoFjguXCq3xhYMGAphVYxndteoiaGVxXiZG8AgTtzi5mrA7Mf2Nrk2UzGFnwzwvkp",
  "key28": "3e62ndnXaSynDCJVesoSHLuEqd7vXeNqYtGBDQXPQc7k3UfaxUeGL97pB127539syxtpSWvEKdpTVBznHbXg1m4B"
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
