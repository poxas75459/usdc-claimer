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
    "4dZ4jqYhYpAVcpokH8HQLdnq6y83yKKcFt5WteHbWpUqWrghvp1QeucoZRnz4XsaUcugfeHaQy6ghDwtE1XzxgCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuAEx1dHk1cZRjMwbkeD4nnErZfaZVTENuJZxZ2BJoh3N9pNAJYW7kjQayTRB8BrDnZE1vyG3dpJ2wUsRNkhy4z",
  "key1": "2NeGScb22EP9AHCbEe31ZF2PXnywf96p3g6GUyydgqnj2TTcSv1uCfCYJxU5inoFsF9VNoyfmVCLmnDpkh7qCHJP",
  "key2": "YnrFXm22CiXPsetnjyi8CsmhE5bCZAFNh1JRDurfhT5JzdiZQqePVdHxKsZXUbjCxeSn6ihcURi42WYMq3gzAig",
  "key3": "4Zo6GxefHjsSSRjvpVwmBcoJn8dqHPLWkdBfcAQAzSUhqswqWg1mjSpZVH38FKu7eMHGgDPaVhg6CJgSqEJJtb2a",
  "key4": "3rBQjszG4UMXn6PdxK8xiRSy3a8VvKahkGvqvWXmvMZb2PeHKyWn7bRAX9GpYc6A9iSs52NmvM5Fw8YitVvsS8BL",
  "key5": "29oAuYqcVyxDJ32eoZHsm29ja9QubiGiWkG9NoJfpTEiyLWu4JxKwHueGqnNqaevqFAFyjHnij7roPyGd1JJdLZ9",
  "key6": "5rpt2ju8yHhmvs6QWwJH9856JPjJnZLNR4qQPZpU9gBeNgZxWFKS7R2YCJBgKfqiVCUTMSruoEg3ekQU3yVgWznj",
  "key7": "3QZ19EGELSo4KjwrwoCw66CJrUxJzCqHWgnreRLDtfAD88YY9VuRwYzT3wyjKMdDrWo9hJbopvELnp8iFFUdswMP",
  "key8": "4ea8TvhAXjm95hRFzaTMDnxAUfAvqwumECa5AKtd4Cy8UjDfax57BZzJ8iN84fgP3wr8cLK2BTJSuM2ZWDHCvZuT",
  "key9": "4CjiqTm8Dyapwi3UV7ccuK1dnUewZjE9DcMsPXxJycYTCPv6B1S1PiwqVih1KbTuQXGFXE47q4Dqz5Z4Gd8n9iZ3",
  "key10": "3kMZrf7XtCkCjNDNxrpGFP7cJCkV4jCFEBshfkBNgwYCFzLnRzTiScLMNbEvXVJyym2qduKoNFQoGhP8andcN7vQ",
  "key11": "2kNMhvqbLQmtsP2ktG4unGAJyUHzyUWpGkH5E38y4oDtvpR4t1oQLWkhSX7W28E37gdPnqc1W8aJaum5uVhV3Qct",
  "key12": "3EdCSG8Yb3YNo4m3iynwCCDzK2pMjbztyGfnWzFf4B9KXcTxfi2HMFnZhZA1SwLedcnSnXGQPBJ5D6TKEZqtFijU",
  "key13": "jgRYEt6PsjFxDhiyrdcv3mD3AXh5H6aESv1GbigrDepe1szi3D9krkXgHCN73Z9AB5ixdkHZBt9gdukjauYiR3z",
  "key14": "5nfYq7gpXXwNuLnSehX4CbAfVvP4CvjiiozphDKKAP1MQ5C5nGmm1rX5QuecCsfrtTmwVFAa1v9gazxTrGXQpmeD",
  "key15": "3ojV51xdDAZaMyt6XkLor7sE1ApSLpshnWvdbtSYfyASWNJeY1btxkQB8ZRU9UZExcJeyrhnqcfuniiN3EWyeSko",
  "key16": "2j1KSQJtiHbRaLNenqS6xHShueFU7MB7wFEsqb84dHfeWgUHEE3g5VmoBxxes5kdSThGaTGZgyyXuuU6VmWR1Yem",
  "key17": "5qdRjArBNGJedP1JxWjj7UKrFP5fE55ptdTahup1ajkBRgmt3eJTespT5wJz5YshYUPK9ekNznXqDmeyxoNz1KJ1",
  "key18": "5wkJXtY2w1hpm23zDeaAHgi1MCe2p4bxyJ7t7tdwt2KJ9Lvpq8H4MBzQj4ZPAi3cFyqENhANeDa6warZwtY3dsg",
  "key19": "2rHT6wfXEHREbRd94JhPw8KQjhkawipMAJ95esuiuNZkpXHFy5R76eBgTA3j7BaP3AY6LiWBcm7CpF436yq73ERG",
  "key20": "5iJTBtXw6uzD5t4FnwMTWhiPkTLuKuppgU4QTVmmNKnaFoYphcaLGkaedjXM95uUHQVwSX5wN64JGrgdCzbLYaqs",
  "key21": "5Cp7E9SLNwULesr9w6cBadZuhQba96Z9spMTm7iJvvDFtScNEnpZ5yFbp6YZxXg3USuRb6kU4m7Uo1AuMguHPDDL",
  "key22": "5BuEqALbqrXJUXVeLix9iCAs96mwTJ6tUi4RWmmBvdDAZBDhaDS5NiQ8M7mb6U7b24LSiRGeNVspeW5zrPr3xyYk",
  "key23": "4ca55KqVsVeWV4WFfRRLbnBMEE6SFj5JWwJwcvpwxnUcxaeDK7aG3QsrXcytkkSZbcvkji9m2t4rF6XwfeonavZs",
  "key24": "5MpKFMZZJQ8vHw4eP9jFowDo6ebyB87rQADyAGLBAqhX4RkDNUBLhoDx2ZdPqfrKfGs4ThfwojHMzxcMdMX2s4KJ",
  "key25": "55T8Efqr7y3zwx6x5U9tD6Q6oU2hrP1oHkoevb7hrMuf4dm5ZNNqKcmbcP1VjPv65ypvXPu64XtsB3GQqY54JL7M",
  "key26": "GSXDnRVspU3mxpMPgCuEhmo1BgQLTFfEYSHXQ2beYf2GkjG1YnQn69xq9ksWFqa68VrF5pvxwVKgqA1riLF8ftH",
  "key27": "aE5aCs7vSczZhNBkwuXtnUj5j4jTwD948aNMeQmTaEdZhSCqekc29LSnMHHTuiFFg5yH2KGdrUJmYTuAbws7wSm",
  "key28": "4rd17t9oCp3W1rs8UXE2xVv1kC9BvZPQRNSoMNRkuJX4Fu2NgBnbhkg3cDKsbkDHpwjUH2jvEqaVtpj92G9rsufD",
  "key29": "XqdaQAt6bYwysEpeA4zyqE5TB2TL3p5wAVw94y27HNFPt5kMZ92ssqTXS576a2X94Ht4HwDjKhYGwQPBbACsxtm",
  "key30": "4uB3Mo1dGYVuzkzJEAMGUw9P8HSffbbCFDTXpFMCfj9ZTqh7yGeHuFb3mC66Ls8ubLghPq6SdKaFjwXbVwpv28Ct",
  "key31": "4V2qumcvZPJ8JdvRdcWwuM7KwAaEPn7AJS6QuT8yechxBnGgfzGEievjwgVVARppPK3eJm5pKFWnLbTC65To1pn6",
  "key32": "3zYHPA69oW6z2cbha2eq7GMeit6T8i7gmn8cymaqmH11fp9wic35UMFbGWdHMBUpkqeGAg5en7epXwPv9nokmN3x",
  "key33": "PX1ESaCpNCBXoDa94poUncyuJYcnh6PewPWWgqN2ZNSwtBPDa8x8FTyxRYBvLuFhZnw4wzPTx2hq8p4uq59Y85R",
  "key34": "4uTFuVSpGvwzrZmu9jBa1LEBFagfmDphRfsipLiEjCJassFLYZWXVCUxLwZ8dufuqSLzYE2cpv8m4UGD9AVAKGaz",
  "key35": "mzxPNi7xYxJgDgDj7ezEenCfSM6g9XCQ4q5p3XarYsVfDeterk7U7dmBfyESHwvxEtdLtBRZ4Kz7y1snzMCw26v",
  "key36": "4iY94e1vzwZLXPRemfM2WRAPJMAvTx7bgquxgE8J3Mr1sjgeC2iYMyf9zw1xq4TwREBr9wiEZaxtZcfXgSyELGLu"
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
