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
    "eQTXLr5dY8umkFYo1aSqXebN5MwpYLh4nru7kGVeq85WHEbG6VcNeadeinrfhwvHUiWqAzBn4bKk2Qa1LYDVeHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vpt4nNthGinEZbsJNFtcEMvc5nojf4h9S1U55Efq6m7L38QnJhXNh25jwRBWpaRfbFsMQoChUcHH6uaJefu7Lf6",
  "key1": "4CEdEuqCa7DAq5WeCfM9xkVymuE1nCUg1ac6Pd8GBDhYCkD1XNKL8gaaLYD6yRDojGvYb9GdcMns72GB2FD7t21i",
  "key2": "2GzSJN9yRfwJjaiccvZH5vsP4uszJpEXchxcZ1TDy8kChx2ai47DXWjkLAW655CiYVTACbYCvxVh5yV7rqLdyeYZ",
  "key3": "2KL8MGyvA1R4VBG4iqxqP7QZ4MVyPQRYWDHPrwkWsLwjPKQC2EV5oF9TmFax8WP7t17nCfoMYp7CVqrPrAg3cjD4",
  "key4": "4bTLknsCdecJW9Z6Yy5D6WiLshKx6EAXUBAYBFBSNsG4AijWHmpi33XeZs9A9JvpDJvussGtoqTMWUoTvUYhets8",
  "key5": "5W5viLzuNR7sY88vvq2XtzJ1D5AdaH3vK9NDUNxNma9KiLgHaZ7uYMdXbmDdN34HzRF8Z3JML6o4pMt7WhWKjaJb",
  "key6": "58xRgYPrpf8BtB9jk54AiwF1Ao7ZAY5sXwaNvAzBL2g514tw1dAeyZJqMT6RvTBBzapmSbtgV9HPcngTXt3pFC3W",
  "key7": "4budKrESYxpNZGiVdDPe7KmSAKaCegSSZaL5mnatRKWPNN4DkZgZ7Ax7wE5P2Zn423mpF3JVsDjYKUkoFTqNkQi",
  "key8": "4szKnbdpQ6bvM56tmFTfdKLyt4unuZ5731d18KMvyTshjahUZfXfRHLS5tfZnzjKaHFfPfNik8JKY5webLDfZ1rd",
  "key9": "31nRw7U88oei5JAGfjwAQtpgik5UJmQcwAckRh1W36jRxPQjcJ3TfNBB93Q4qkNgTSk6fj33mJNzj31w9PbZoED5",
  "key10": "5Bv1nvFpazJbxJf2pXZeEB5udJzNfzw4PcBjRNgd8oKTdXnzofYAMEGRm4EhXehx1SAJhLzd9mXSvKRDUtcVWoZX",
  "key11": "3ZCmoKavZcA395JfZHGKs7TpGZEF8AbWoK2Qunn6c6Ga6f5ZSRz19HENwnEiAjbA6GFqfevfujMZfBNKWdeaeYky",
  "key12": "5KmoS1BrCPRMwXWYicVVJWgKZ4jWnaaNpaDhb3rhR2p6FWHw1YW2EyjLgDmsDqfdcVmeAidojqBAtDpgfEkZ2G2s",
  "key13": "3vaXAhQF23L6v3PSNW3C6sRaSvEp9nzLSswHK2nU7KsXtvWDnrf7sbdtisBZHSmKUUD6KisUQt7KZDCZUtLAPxDD",
  "key14": "b8reG2RbpK7YwthMWDzuYwmgjVYZ6S5LMVoyi2okELvh2Rk7vhg98xfzdYvKX3wVkYGbFecPS7srY8W8JuxNPyL",
  "key15": "5FxaiSGJP1hG8eK38qy6DJRtc63C1PtMuCwTYcu5hoMKX6sE3aPBjNj7vyR5LkLDwWPp9XgHngSopX55UpL63Soy",
  "key16": "2dZkwKAFqJEf2MkWp1rYBXVCtELcRqaYCceeiUw2zoZ2oHLHjmvGngqTpJ8Tfqh5pJhyLUeDbMRS5UyWrMvPNHjN",
  "key17": "2XQ1vqaC9E69LmD8pKgpA3UwQyWGjz8bsCZvkyX4j1kevDY5bPhFQK7oMrgFCJsi1gygAHhMGXg1GgPnrPuLdLdL",
  "key18": "5RUUmpFH7C46a8fDfLG61m7dGBGkhBdh5sANijPKLRNtPvrGpTUveh55G7sqV9AXtBdR8xaKJEHxF8wAiz83FVEJ",
  "key19": "3aDP3s8ERamUYF31bsgpYjAD4fHYA4PbTZeZFdVcoupGti5TCgQtJzCNQRs8XRQmY4aH5EEQZBp9aaCPx7TkrgRE",
  "key20": "2e9BmWkEka6ed4yT4F4gmPPSCrUhUS5h29Vj3ABdKLZnH65wZWPThtyTL3mcbrwVXBeCHujJmY88uFp1G3FpPsTV",
  "key21": "4tKGyAi4VJmTBkKk9izwuZQqLkZXNAZSzw9JYk3J1pYwHQEBfnTpEJosYaYxudarfivTE5CsuYkNNi1x8MAJeG4y",
  "key22": "5Zcee1ExNGR7XMYdhMDxavrK9gRrLymuRUimpuen5yCrqPT7b5tZESdbPw14WViJEBzfqKnDkBB4RcABsKpUMFSM",
  "key23": "128QtXaXeHNnDL8daa1uZkCPJoRLmAHYtwMH5T9re8ZaoZ7SXE75sZLpWXNTCc2r2FNAWcxTANhVeGPCRt99Lp6L",
  "key24": "2F3NT1EPwQ92ez4QbqKoY5C1ZSufXUo4e5j6Udc3VSGK728VtkPsM55sEpNFGdtDJ2QpGGJWKzs4VbthyULVkWBS",
  "key25": "JLNWDQ8BByAQsNgsQkYw58ThKHNsVc2V6av6EnnRzBDeQDpGz2h7qxGWrkjDX1rTxywHFfgAVMX3oejQx9Wvkg4",
  "key26": "LxW9GPNGCRLpZymvwqrs3XujkbAXRZck3vmewSGBHW1MEHJ7qcPnQ4cwuJykJQ5XUCQm46Hyoe5iRL6DNpJdZDy",
  "key27": "2mBzMR7hAQoJu5yXzCSLQ3tLM7vjpukwhDnUTEBdHk3HAeyo1aTybrykn3PTCGLCwdT1BJsBBgxamVYy39ZrerV",
  "key28": "4SzCLMvEVRgRkv5VjfMjfhxwAQRUrq8vScQ2AEAAB4AiCNoTeAXBE9rr2ajbppNWCTwd73CVev4JPgLzkCoc5GBZ",
  "key29": "5dLJkoqiHCSY5KWd9v9KB9VLkXYqE8AVobFbfoSanqZKDReAWo1F5DhwbuCL8aMZbGHZcc4TnXCnpiqV8nvbKtKi",
  "key30": "29tJNvTzJ6q7TquBQ9B1BMq3Wg4GjVNgsPi3BawvZybxhF9YPZZtTLaYqGz624VYapPy2ujhRhWpV6ZhLSmpXddr",
  "key31": "2a3SNhRqKsVpPYNoe8RMEaHZugjVmVWjN1afv4rZeKccD9a9yGmftpxvGU6JnKQcYpAAtk7S1CuoetErqrwP3SKy",
  "key32": "2YDre3QYiKPV7yytpCkoE4Xt3gVjeQCx9B329r3t3CgHDn9nZwpkixZwUzVKiwsSGRKj8KZUWUjwd6LsWgZr4RH7",
  "key33": "5xjvfkXaWB4aSSnufC8Kqu1BzzPJCLTY44wd86N4VTecdU327FH7W6z2c26umxZLu6oe3Au9x5NGKovFpWqcFKox",
  "key34": "3J6vWGTC2qT7eKVnSn3TPRkDK9eRncBHksC43pxTNxzCQv6pQWRWtr2tA2DKevTixqwQMRJ9LWtKxRrhZ2Z85cpf",
  "key35": "5PEwANGp51tR4wGNKipZLyvZjnVjA7Uw5posLW6s8E1avEpaQUFM2m3Y6J9JZcvtDMiC3C9MYDoSzP1oRqhFQ6J4",
  "key36": "2m91bh6w8Lis14xV1h2AK6TCY9M6NPdH8DYKVvph6L89eDj5cDHDcLKEtNoQiuMFerFwYEv9fidjmCfafFJSkMUz",
  "key37": "2nXwAYXj8zdgzwhm3LSUW6XQbqJEeZkKJkRBTrF7VwYWwtzMn164qZ8jEn8fNBStPeYPnHazBGXi3DUTuZdSWxtH",
  "key38": "5vJunv7VdMMuBhS8JLbZEckVwvs37yPLo6yesLtdm4tdtibXXN4Ufkgy7ksdP6g9Z7gXpgRNFMRp812WqBFUZHLp",
  "key39": "3Q4WNi4Wn4bH4PMU9YdFB93euW9tfS5PaNZDWK4PcFeXWQeJSdupMpMiezmoZ7zaxZ8KrEexFHCyDWnQXz1jJzsS",
  "key40": "3rB89354NHVZxdQk6TbDPHKKvp261EaFtGsfk1SV7sntbCbcdcrRwkQ4E1FzDdZh8SMVHVFRkXFHKcNctkpFTue9",
  "key41": "46Loiws4fETej3HnU1r16nzDNqHDzXVPDYBWMVEds4VJ5GstiGwmd5FDnJByKMzeQobLv2DGn76eZ2Sb7VS6VFmR",
  "key42": "5cftdPVgD59tuhzqgqM5yvJynVjfvdqUWoBuB8xLiP1bFqpYwPaQ9NDCWmgYiBNjpwt5VxnAMBTo6TauXfT2aR6x",
  "key43": "3FCLvTM959gWyzwojeuxkB4FtZd93CEpPPXcjtUaq14sJG87GgJrZoVrAk31j5Y9L9iNkDXQtoZANoLnYWush47a"
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
