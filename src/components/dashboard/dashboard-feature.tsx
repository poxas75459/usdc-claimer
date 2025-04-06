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
    "25R3wQrY3M4ifxSZEZ4Y8bvrde6dpZMxt53Cgnivi3Cqu5Y9X2FkAmayNMyE9URj1myLLGmih3cAn8GAMeEHVhH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DH52FUjfw7draYRxTYZWyQWHyRBgPVew912wTLaTh2UmJQQR3jQyFeWBWzRW7avufuWQ4vFiaR2iBZkJWTcyWC6",
  "key1": "4chfB6PiEV5jifxPydGY1QQL61TTigbjy4791XRKwwshSWVC9r1dohdHXXATshYNa8G7tduqJ5AwtDsse5NQkimj",
  "key2": "5f66ep9Aj4Q6eKGmNu67KJj8KRTUCQ3yPYx9B3gDvn3t2z6beC6y33sgg7rJHKfVmEh2cT1yR459uNRA1Y9C8w72",
  "key3": "2jpXTTbGF7AgRUqUFLj13h8bLiA7L3PWyC12WJFpEVWSewwAdEue7rH27HBeUVA3xCMfhZfi8wK6XL1Ycbn1ye8o",
  "key4": "2ai94yHBW9Xg6A6DZVT9m2KxC72rsdoBRtizzZUQojvCVn9LyMBE7KpNg5UBRVZVx9Yg6wiUKcJ3zdya6YcyE5eq",
  "key5": "5VvtTu98EbLNUMRKvcx3h7SGtZa5Uiyfracjqa7WfxaKg6SWFBrVug8fJVKork8yRhBj2pEaejWSaeKXcMEJJzkW",
  "key6": "AjUsFftQ8a8gVjSMam2JoCsqGykx2myW4bCXDH9skkAnmQioVeK6bNYDvhbPEmULn8YxkY64EqQrvrTv47PkA7b",
  "key7": "4GJQ6pf9BDR8MX8ZbLWSCXbdJB91ppVqZPTXeAzPRRVsr2w2NqcC5PYzZxX8j7ZguUMmph6MeCaxXmT7nD64wqe2",
  "key8": "4NjhaUsCZX8zLCnVc1u3uaDRaUZEYYPfKs9XNZ5oUoUn2qHVJvNiFqV8zDtcJMGBZGs1RVyMfmpz4wR6hQZRyY7v",
  "key9": "5ojN6LxSji87XVVqukKTKZFwULnbLoGqmZeqPMCPfEPDLFj7XTkiA1N8WTHeDpYm4UWsPY9hLihp5PEfgP6ydMoa",
  "key10": "3f5UAJwHwt5xZH4TjUNz4a2NPar1VqqRaoxFdZGMmE3ZeXrogj5ikecjQmbkoEEhaXjF5vVPBt5piScwSWYKsF4G",
  "key11": "2679h7CRY2VXdPcfMXwVX5Qj6WjL2fvDN7XPjAiPvCCASdcVwdzMLu2iYskhDGjJd83BMHBbV8K2KeKokY48mbUo",
  "key12": "4GUkTPMU4ggwJpyJttZUsqTUCbQzcbbtDE9NmZ6FXX2hzEeJksBWGkFRndqaS9J7jbocd6re4qp3PsvU4t5XFaTD",
  "key13": "4rZt6vCSjHUbyg9RxVD7LyeSVmGhAx3YpvChq7XsnLoD6VV74zLUyuJAsbHoix9dCkNrWbaV9tjPVcNJ4rw3hMDD",
  "key14": "dDnehDMuK63VdroEZDPpLyDXnyVx6HTWyTUpq76CdxZBPaZmdL5xNYCzYDMA1gURhzmHBjFvVQn7aVqChwiiuN1",
  "key15": "2RQ36ffW4ovKHftGEf5tzSxGxJgmSgfT5ACXaSoezBNgAiCvsyTFWqL7KC2WavrAj2ZRDW4tfy4N2bU4VbRYoCLP",
  "key16": "4K1rkoaw9dbhy64e136M3kWUCXVpHQWpS7uqABTdCLarcjAhw9RTq2f7YEt9ySqkYaXrb1haS4cnr38eGcqRYm25",
  "key17": "3BWLC2PjbRaLcUNF3noUKRS6C7nobs6zq9jKYWSW5EgYCZft15RBGAwhF1pY2cNwLQAEoYbGMiCpTjXBPHdt2oe1",
  "key18": "2LYfhRU73zXbTbCNY4EGKTDqLN1KE3G2XrKAexJ6shkeT34abff8h1bbHTX6mh7geRUZRhFLwKaV2UYhz6DxRgpS",
  "key19": "31Sy9M6PcGsb7LrQezrETFbxaM8YXYWDGdxinRo89uii9DNwBtYWV3eCKCGYMuqWnyeMAgWL6j5QnBwwyU9RjbW5",
  "key20": "3Yx8gBKMPthPg4hbdELnSiWrezrJddi4dzrXeRUJqkWTTwrjn8ZnMUfR9hwTiTvm7qAFiRePh7RtxspGJrS14HY2",
  "key21": "46qzsf4RKpLf2WjLusTdDWuW4mVRQBeYnNyydw6HZgp6NjAAe7dcfHae88mxRD53g9bupnR97ggRV24yD8q3vN4X",
  "key22": "2VGem4zLzMonGhi7xA8Y55282sKZEZsSjHzk4qLWNVRn8REDQXE5xWGXV3nLkcvBrMhi9wcrLYvmTdqxDNVuuiAf",
  "key23": "4LUFwgWJTnVYqtixEfUnrm85uBWGnRSpCH5fvbc2viuepr5hymfFiL9UxzrWUQN22ATqzoBTdtWyAR8Y898ZPwXj",
  "key24": "5nayQC45EeqVugZqB1fx4XicNXvxVrFGCMsT8Uxh8qhmvmtj6Ggntmx739Bn4xdaj2EmgHR7Qo5joRDGXkukfbXt",
  "key25": "3d6WgPWgfJYbhHuxYSwGwzZ1wUaUcLxFuMASNpd7Vi43faqngmJ8JTtQKQ9AG7hQrLWNVSKPoNpJhXhVQfNbqP2R",
  "key26": "3FQcCdoLNc3ykqtp55FRjKFuvxZG7sTFKzpKPz4SE7U5m6VS4b9K7z2taBKcDgKAb3jxv9euvQA4iSo5RBGsvomQ",
  "key27": "7zxLG8E89W8dFr3BKAw8kxpygFzBHVjAUNUgEUoJSpSYvLMZ9YyBLVTi7LrG4hn9iCQ6tQmRv6GbUyZJu3S696B",
  "key28": "DeFX9ci7novezYnf4G1AKwdvPLM6oie7vAsSDz8GiwwuLS18hhgAmw2y77c9bqVkWsjwP4ibuNPEeaXTboYfYPV",
  "key29": "16oisSgrJht5TpE8oG1EAEfNzfFmJLByW6BcJHN78BqpntcDuPNow5g6MKF9kB7DEbQtgCpLD36ZXjm1Mziw9fQ",
  "key30": "3uF5efYbMQDHENkvvZ3DmxELDt9qYdoYFWLLgXVmAmsauazgZpPTJoE5HCmxvxguYKTSxZftJx3h465dmTVPGFj9",
  "key31": "2rZW4aMWeaLmReKTjKB9J2Y2yAqWJgMkyHi1w2K5jR1G29vrfCraLmPJnJppGE4ANGenhwd61zVxAkhd3GrZKWcA",
  "key32": "vG2GA341s3nZnNdaP4PM1cPVjMW5mxvDNJRqMrUDjS4FQ9DrtipGST3Tr2LF7aNfU6oReEJ1w7qmHFfyoUjbe4Z"
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
