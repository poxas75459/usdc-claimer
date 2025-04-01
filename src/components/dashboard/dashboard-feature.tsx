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
    "58JJiKPiUMLWHHujM5km4nSMgUorT3ZGnbh6z4yhnd3iKrVZasSg9notsjDsjkzTsGywR3vcsmKaJ18LmvKcf8fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hBuo5RV6XFbuu1vXsVBo1e8xvsYVXttrhqbHYkdFWhPWzxTHMdz1SMLNCKAHCpZLHRbfg41f5Bikj2BsN5uDa3d",
  "key1": "4Tttde2YfcUmLRCLWvJMVr9pLqzCq7mGDF5xZUsSwAtbskVZMJqH83M5oPYXHveWiEcA7TN7VRDtajD22NsaBdEG",
  "key2": "46BxJMidno48Ug9ycQE7mSey5TjQDfjmT915AgGdrcaQ6Z65L1ftu1yS1daVCr3SyoMi78PeXTeqfHn8tEPLnELM",
  "key3": "67Zb1a86fyVRRNEVvs2hcvn1qLmoUcQGSumt49vq5xCqg9z1XGJLnB4BPEBVMxyHT4Ph6bPDMJo9qJkJWktErK7u",
  "key4": "26ixQmzU6JGg3cubirbr9Q5jEjrzLkkMew1QBg78gSBP4aj1kqppFe7MhrySxyJxPvmZ4YNWs7Z39qHk3R5MWa6s",
  "key5": "5VHhdGXr8PdKqvBmSXUQYQaBUGy5JrFYbvutY6hkxMB64zRGE9dK8cZBCKjEce4wQc9uKUKdBhjHFsZhh5uzATMB",
  "key6": "2Zji315Y4RM2zCZijBfygW6yYsg7jpEzTF9ZWADcA1vkQnB9Noh1qj3HjWd8sETpU7gNfLLCymPjAzRLrjuwbZHR",
  "key7": "5qtSV2C6FoTdNktDWe3866Zw9CWKLDT4Ku1sMSqM8aTMDLRxc4BFsjKK8c91VJ7y5iAR9E6gkFHDuFNi75EfNpF1",
  "key8": "51QRr7N9Ujx6u6T5NXC7Vryjupkn7vQtiTvpouDAeQkMRiNqRPfBRiMviZF3W4krHXZsDXe1VrHrbq78PDGzXpkZ",
  "key9": "5oiieQDTxEVSKVd9BDXCbchA2vgxm7GRMzqeyPXPjBeSLoaRfbpYE4pGpAtLWH8Hn8Wq6LmfFwKCGYJpLLivomys",
  "key10": "5H43U84LB6yrCbfkNeBekAyGmVCTSVEun7st9tv1uHJ7vdCu6YSkbW5PBtw3ahxGPPeEWTp4raK5MznucrTQjf4k",
  "key11": "L9vAKgm3xAxbSJUCCEggKaqzhiG8trCdCddG87r7htiruyqJ48zUKtDzgUBqXv3P6ppNJSUpSZNVECPtfQgJcPV",
  "key12": "3csJUdGJfqPNk53crwCuSeN1u7HmPL6SeC5D5G7bZQTXaS7hSBWY8t9x49u2xmHFdERBLhSKUuabPrDwRsw5NLYw",
  "key13": "4fTofqzfjGu84x7XGNX1s2adLqMack1fq2LHtw7cDTKz89o1bRQsqJrhhSxKoSsVwAUaB2pkjN3QiEQphuA5Bx6z",
  "key14": "7UnGewWwtwRwYZjfTU8pcUPfHbN7rpB2zsdyRHZPa2oYxc3TqK56W4YyTVN2hHUUsJvj79kYTba5bHxPacZzHTM",
  "key15": "5YzJEZPtHYAG5ht3Z8CmL2sd9NPNB7EAaTtTeChqyq7dkAbrWSwQ6eyacHEfBuusg4zdgZGUNay3q7Fi94XTywSX",
  "key16": "4GKR8SbKM5ndGKqaPrHbVEXFu8ntLPYDd49GDCnu38R6oDQpV5AwxTAh2kemNhtjNzquFvYCauVGqs9is22ynpR4",
  "key17": "2iYMTEFnmS4EYjKALfa8RPYrL4eEV83RK2z13AaZBegzqPmnxuLkyERV41c46XkEYGgcNDjTZmYF7jRkDuLj1BEZ",
  "key18": "63n3gjafJY2R9cjjM1nwUN6FdAf8VG7qJ3Hb4r9ZrvhYPS52hbZhgJHUhwmQjQCS5nRXUMZRdx15TMipdDCYz3bv",
  "key19": "2qxrPLmY98bag2rcfj6bo27D9iXF35kg5kDsXd6g2wf8VVNcV1XfWysBCKEcfnvzbvfnjCixMr7mWWYUyaLCY1vd",
  "key20": "66pGGpkj2v3SwDyVqyJVqmqsLKUoRFcNpW4USV3bW2h3AoFBA1oaZZsGzNLGQmU54ab1GdEzwRTJjTzdg4Wismow",
  "key21": "abwqRsvEVc84dyPcUy678mEY7f2ifbh9whJVmJZ3mRGJhddwxRh13qzZT3u4gheJ4t1Jtf95i7yrkbFe3XXE5Dr",
  "key22": "3k5unu6TgQxb71gRWQ9EZrkDdqSNAFGBogeFGHcfPs6kNYzB9pdNZfn7Wfym9Jr99pvsEq9fmeWnjokFa1ZWmyjH",
  "key23": "55Uf7QkZJvtfGLE3CTSewmSPZuUXauwbkiHt5DhwFZvRWUu2FSwsDmKjW1fPSNerfEm9XF3CHT8eeAMCuLeSefPT",
  "key24": "4tBaBqnHq2gtmvPwDWc1eapkdNXaDJ7Z3kENx6knyCDFDpwjA3rXYamVr5iKZkxR5AutgXfqgs46A61fqdWnNUmX",
  "key25": "2f11ZTQQX1Q5HvWTZMX9xLqiJKfsWnGkZoH2ZDiaP5SDtWTmdjsYZD5metL2C1PPsK9B1n5BdpGU3vb374Vbojro",
  "key26": "2f4yYB6Vbp6JriuanMFZrqyJXTunsBBMRgwXDJFTa91DM78wBYx8Xx7282okCNZaoEoddBZTzdrH1NirmD3W442T",
  "key27": "4sk8TtHfDwFXgUD2rWqJhUFfvGEm1fG9y4DDUQezsKgRpbhe4QkeiiCWQNF3kctRvFk8ajsNcDq7Za2f5eKqfKdF",
  "key28": "3cowzLFRG8idht1a12K9eK6gHHsBd4YHtkuJRgQy4RLw1QRzdpqUh5eXacco2QWG6wArc6kTR2RbWau9u7mmVpYv",
  "key29": "ngsEvkfufQhyPdZzaFo5bxvnj8bZ1Y5QzoV9ccXjZgoYNWHuzRPbSmtXMfyfUwNUZLXYyL23kNDmyiM3J78CoDh",
  "key30": "3EhHh2sSQbMW7qiCLrjEoYeBeKTuDdAVqqu49uNYW2HD99VwUnDxY1vjBhtd1PhFKXnbbusw5EQpLCzmaJkPHgvR",
  "key31": "4SRQFqR2bM5Hi8gLAvPo9PGQtFnutZ83FyMRCsBmZo74uGHoUBk4aM3auTBenBKHyAtrXmWZcWJpqxFreLoH2Lw3",
  "key32": "2BZQB8V6K8unUwJobGdQcgsE8dUzrj5QnLnnbA3fbCVe7xJUSaFSRL2esWF5yAC8RVVLnk9V7CNbFfUxwaTAVhnJ",
  "key33": "2rVdxSjboHqAfUs4s9xYSbh7L5G4fQUBFofQDeiPfjLNT96y4wAb7zbxvNWMG2foojHoN7enZGNQKdZjiVRjJkGU",
  "key34": "2Jm3CQSBW2n4K5tHddK5EmFJdb5Ko9DxctReNNgc1AUn9hBJALo7TDZqTmq1KLmFEisciBAVUK6EmS8awRo9c6cd",
  "key35": "3YX2qvtEkS3TngQzJXvqg6LXaZRRXdA6mDwqrzKvinPZq7hC5dvxPRADgGCwJfH48tF7w8JVVGjXLmfnGXJgxVrR",
  "key36": "CGWqJpLu19muUagKvA2TCqo6kJ8Xcn22y1dBge3FU1453qoLT7Zu5XsKhFWYihtxCBKXj6gA4mks4JmhHJf5Aj4",
  "key37": "XfaxPGta51euvzNgfA2NUEZYYFqNVkjgZRtht6vd5gtSeELWTXwgZTM6dfihQJMouvrJCAreqz3F5K8GbJipxup",
  "key38": "5MGSxDywbb1oc5BnpGjwK3iM7SCYRuXuJN45sANYz3uE8d9RSRuA82g8Hqhn1HZ1gWAaWrmfBKXjWMnZ4JBnEh76",
  "key39": "2VdUKJMajYek4jKWPXFqG5GJdUrmYCNUkCDxqeTrnTpj1WwsfgntVsC7dDiXDKhtKwvSuHrPt8nevW9xtiKCpZ2",
  "key40": "5ceLyzEE7XpCkU5PqLyJSiB3ms6Qw6at3KQ6rFzEKQcRaSD9nbHx94hAtNRdCkixXh91AZQtCY2ffEgyyXBh1sEN",
  "key41": "qbHixKKNWA1pRaYQoSSESoehSFNGfDG9FYyscp2gRFekwBDZJMkRRbxNbU3P6wPS3yb22MVKKd9HT42h3wmvWvS",
  "key42": "3mRJVfbJ7kVCyiuBSb1J73oF5zgCCgsraXbNdQAEZ3VHVNBQmBpYJt7USp7zhszawAMumvBfXY13HjNTouC8eA8Y",
  "key43": "49ZC3wUKNz6j6vWyquLqQmcNxj8YZU3ZES2D4R2EGY3YYDvgYDY51nYkze627NufswuXdwgC3xaSuadEcAewh7Tm",
  "key44": "3NT7Lp5hmuB31fpUqpex2C7i443nJwAjymtbV2u2WkeyFg2t3fvmnJ8o3rjVDjFxP8Q7DsFJtRcv8pnb9Rjw3aeK"
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
