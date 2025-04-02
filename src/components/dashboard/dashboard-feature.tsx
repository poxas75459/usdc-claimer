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
    "2gUN3yRvpr65Zg6uwdirAPD7rQmv6JfeeeuBUhWkv1to89R5Pj8PhvixZA7i8rdwt7MmViNbqAy4YqiAqoxFXR8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gc7WKcL42YJZKfYWuwsyXWgX7QEWYGyp8rMAjff87qsbL9JzFXX3YPsjSg7bCEBqqBvQoAv1WjnmLggmF12cmu8",
  "key1": "3Fqx3vAvUGs12j4RHmENqRGebDMjMFgfsHJfknejRRo4hv6Hq4bQgJnxDMwybUFJjgPqdSeFFoLLn1ueB4tLvped",
  "key2": "4NDTgyoeQmWGJ4wDCi4bu7d6zQ6iuBzCJfBWPswXytqhbQnADo8EHSduNvcPXBCZpxnLSPirzLbyZ6LhqybDwSEj",
  "key3": "2Arsnd2RWWWmbgBBcdtAZCDowztvbKoRhyEuC1gcUujf7zNKMf2xuTD7fhrBp19XxVVzaCvygwtVGowXdaoWBsxV",
  "key4": "2dSMVwfb2JfjRHDoee2sTd1HfXQRd5ZRjRrqJefNodewB7Um6WniPL6aUdr9tUiyHihqqzMdz7cA9VAub1FfBgPH",
  "key5": "ngLpPpgoJkq651UNuM5sHtdpdEoVDwc65ze2eMQsj1AwBTYwc8B98tnTr1FApu8oHajgwmGPoxe9Qkaw5J1cPBs",
  "key6": "3fUUvvg9M3dPtRUhpaX9NFwbB7DhZ3G619vjppw6XWUVvE2ixXtPmDCuWCxUBbwopKdiMEPmYFzwpbYfbJejdwpJ",
  "key7": "227ZNYt2drdjm6LXhUY2q7LDB1kQ6UWbWWnmR2J8eF6PgMCx4uAha4Z6kvLNNuibmzfAgwZHMHFr22jj5vzvvEi2",
  "key8": "yJ8vToXpSKaaZ59awzv7Ku6QKuS1oLBA9Wq25Bbh12Tc8Uy1vnyxhtKPS8ccsJGHRu7d8AWPzmNH3EuqmXJUNBF",
  "key9": "41QVN55PkHxqKt4FvSWbx3ktEWH2sBxsFJirunb3ZdxkazM7D74bccWKabnYBTd6LBLmPuGUQgBP8mzCabL9VRPD",
  "key10": "vheFjv7LLBVhoKW1eggJd6Nt6qk2TNUn7tsiqbp3vaqUHLYPMLNf6w16WFeNbKzLfzQdia4q86uuAsDfZq9QUtA",
  "key11": "n3Fxg5WrLJ1Zq2P5dt4KC73KNA3AVufg9NY7pG5Pse3Q43cDATQjdLDoms3D7dMCmgpXecxCtq8Nq2bUdE2gXdT",
  "key12": "4P43NzfPLmrUTAKTMzX286sdh5PvpmYPULdFZ75CkxRPYX2fDhXxNWkxBUEmHmQMLBSH4NayjTk2cvs9P2SBwHnZ",
  "key13": "5WzpHG87xbqnaHyn2XGYZpKJtUwaKEyQYDGHLkQxTGXHDpquk2g2cX4HwR5ChtANWuf7k4Pt8ZfNqXi42sVqQ8tS",
  "key14": "3iWPKAuJV4z1HzrNYDjje2fRGEz4dnEWqnBey8S3VX8DC5UUj9undkmhiFmX6rPVTe67ZA8ZK4axZFLiFVns1kht",
  "key15": "2vo4WHSAvSNTAjE8VQV2rgJDZbqMHMKVZiggsRNLuxZH5SSWLr4GSddMveqXYvSRc7pfo4ngECyDEXsLJ4FKpSsH",
  "key16": "4Pq4mygopKqG8VhiAkGU3N74X8JFC6heRUFNT8wtro7PrYtjiDUX9Yt4oz2Y5XZNx1vucf52MnBYqusueD45w48Q",
  "key17": "39dojmTKpS7rP52TCX9Adkidk7bMuEzEJyfithTjxEAKaZkuu5JMNbEfitoYL5Pw3BfFoWAWm7y4bWQygh374AsW",
  "key18": "2YrYYDC81SZjp5jucm4yEQ4pceHWiRs6C6YhdPH9NwpcQM7Ei6LMKVxVZVqmKtyfdYcPz439D5o92cnV9PH5BkyT",
  "key19": "2ikgrz6Y3PVovw3Wa9DTis8AsYjqqZHkUPVKpcZfkvGSKSe4jLRwaYXAsE18gsjzYu5imxwGbZrue156Y6ueK9e6",
  "key20": "FyvRT3sZsBYDdLvNkRmEN9FwzDAMN6BWv35zHFa18jJqgGjdxrR8qvi5XubmkwDVJzXDWXeyMQVs6dDjBxGorWS",
  "key21": "qgJ8f6cXig9JBGszPdxaJzTgJMuyUq3G2cPEqXhg1ywJ3MevZiguVeETXoapPtmmgAXTydYU3u24GCB3m2CiaEQ",
  "key22": "5xh5utzqzbMFxiaWEMhaN7KzYEGTCeLfJx5otMLMAexE3ViaBwAb9Q4NykhYW64dddy8bBxZPbN1TVm3ig6R1fr",
  "key23": "2aXhnCm24NwTn8wduc2W1ragib6SjDKDL2SkpH1qbdwPpNmdXEfNa73uJKukpcUX9P7drewfTRPqie7wyhyHFLzb",
  "key24": "675DAcdB2br8fvUcQRmDEQaAbUZHM9MBA29hPGUvdxb7zZi1uKPJ3m2EdYVSH9ajQgY6KC7Xw4icgoEjf94jFgYC",
  "key25": "3masv8HLiEViFP91LvRjF74DohmbSU9a4Zf7n8qd9Q5ehgjAnfBpdd55XdKJ55k5big7mfYUJLRKqNBaqr4hqCQQ",
  "key26": "4DRd2CQGFvyxssAE3uCKs6E3N68msqFQZNS6XGxeLEzKwpEQXhP7yjHJLxTkcAniEJHzjMh6zLuFLrJQwgeqCem3",
  "key27": "2JwmfP9RkqdZ1qn4muiJcKTPiXtkZeaRRDreyGs4zvzTZpMzbQfPbnBrKUsrNtoQKaGCGYFa9ZPN4H6bUUX47jaP",
  "key28": "2sxGHufrBAfhvhysncBt9SQe2Z1aK9ERk3MkXnotuLUiaPZEbmhvQeqr6Am2mXbCChaXuWcdkqaLnZwEtcc5y5p9",
  "key29": "2SHPiLSvbUbee98JR9BQpey9Q8XfP9MM1Z4zdqkKTDg3US9Z8fmHoF3sZVZP7vKBFgp7ywMpX1FhFs646MaUUn88",
  "key30": "2v9mvcVCya7KzVoDddQ2SvTtvTU6uZKVRAJERDi2f3gttnfTBm19Zk1o9zxwRtfLCo3RvwgRqHg89mDCFJh2niay",
  "key31": "o3sqQmpKZDC2Py5DigudM3eSrcEcc1en1uxSsNEhUYunYVP953U5ogZHmpKVNDnBQEP7L6YygUPV8WprDFjmWSE",
  "key32": "5HroY8hG6GQ1DQAiWcUvQzHCAAkWqEF3qP2jrjpgWTSVF3qkVDbH9eFd2dWHAFqFbzzJe7Ev3ekSz8uCgpjFj2ZX",
  "key33": "nQkY8eGgJUJKZibi3rmFntVk7Qc3L33CE1DF9Wf6H6ExVW9xVFt5HHrbDc5thucuxrfn1nZpCAHMB6aNNBeZaN5",
  "key34": "bos4vH5MWvCEGgXhwifcttFdwApjsoUgfR2hFqA9Cu9VR6i7oaa5x26wuTtLZJjsr1cQDxXW6DprjK1Pa7bYFe8",
  "key35": "C5D9EHEvWu8LhUnb12wfCevTocDf2eKCUwsTBEfP4cYnd58jTFkQdvgKWXj2w6JKv8TGe1UrL637LbJY4HA5sYT",
  "key36": "3uxZcKLL8MofexExUMJqu92RX5jxuXwdBsrz9Hr29r17hr1jLvWQt3HQZrLRLjiTiZbeQwHzfjwggh31ezAftNSg",
  "key37": "wop88vuwi5Gaewvf5KmiCuAJF3wkbMt9wn3J4x7gzdP8vcz3XQYcGokoZYrPWRmjqV28nCmWG4Bn3Yd1QHaqjQG"
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
