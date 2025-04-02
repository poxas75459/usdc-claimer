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
    "4kTaHNdvH2c38DKjBA2uB78z5it9iHoy16ErUDM3VgqSo1pxr5Miao1AC94wau3PGirUftvNs55NeobygEuNzvpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmoxSxT8ugbj9grkZ3BDy9gHaUCAbG8u9dxhzMqQ9DGUisU2JN3BT3Ce3NEcbuAjaQ446brGWNVKWTVENrYzwX5",
  "key1": "5e5HFkFVZs6dsShzfTsmWMn13zLgxiShoVHrSqXUFG8RGhYLFy33Xvu8muzZucjSwS41Zn6yQRGJC3cDvgWHKapG",
  "key2": "mPWSADcBRRoDKYmsrmDXVLiswifHneA5PZEokEE42jBSZriBvfLybwFjYiBbTseyVBFNt8TfWELL3bX3W2iZQFT",
  "key3": "5H39VdJMtCgg4SHpgRKmSaX5DrJRtAfNRKNPw9NjwzFtiFUVnn2udBTodkBiDvjwuHMTJM83usgh8rKZbxFUUYtx",
  "key4": "4Yk4M2b1e7ktF8du4vBuuMFC1SHuCeEdTVnxGoKPJkh7w31fR3nXe24n1vcCYfPibTcRGBEiCo1T4T3QV8w3eso2",
  "key5": "2f683aVHqN6kyBi7p9p9tjpALJFpEDxE3xQqTYFDR38BXWXRw42wHyuLJGxZvL4NhU7QGE8abpaWPV1ZSLkMseSA",
  "key6": "oJYKuZedGr1vZLkpjWcMEXcBkVw8mMWsGFinJpwq1RAc6KaR4wfRqpFWj14cmG9MyBQP5TBa3WQ5W2C3xsy1WkB",
  "key7": "HuiPLJgUMKWt891nXTPTjXYkYau3DHs3ZVMEgQe8PtLb1zsyL8EdbZ7arz6QQ8iXCxpFPbv3VhUYLRHuQ41FDY9",
  "key8": "5JxWBVAhkjadRii1sMrpqWZaFP9hh21uVCPyh1XuHQfTxkNoYv9mHPvDWoYprX5jq5usUEmgyVdW9uGiZ2oBDnBw",
  "key9": "3wJKGT2V5RUrk99kjZiguzJA8AMVgN1t7HDanfwwrLF8xBm5XjHaCNyh4rq3vrsmpavc7Rbium8FC3SeWRa6qNcp",
  "key10": "5keW9GvHtjpYHzUxgnBn4wor4NiLFSoQ3hBWpucZJot5UVnHYZbCtphNrh3RyMQwReuzoZcG196eFjKLnCregwiq",
  "key11": "48SCBwxu1VkXusRU2SG3KL7PhzzLAiToLpz9R7SefFS9rVn4UY69gWBtLzKr2BvZY9VDxtmzyWmG1pujEY9gH1NY",
  "key12": "TQ38aukBq99TStSkmyVNwHumwQuz95p5AkUpdpXiboqUPx2cwP7L3qD82e4NsPxSXqBD3ySstnARkopmZMY8EcR",
  "key13": "5wyXKpFaFfc6tHyzdzcwSJSoWVaYzE7GpSj7s1EfnSuJXrFZQM9E9Z33zQuvCUNLtrziCVDudvD4GY7Ecg4eNa2h",
  "key14": "2kGaWHVDyKKMccyckro5XhYxzfHndWqUk25mx2uviDRLFPwfiJaLTnErW6yiq9dZNsjAY9YEY9T6Hci798qPGFu",
  "key15": "5PFuKC9Rcsri3KWuRrVxWQx3Q6tgfhycmg4Wn7q2FrRDQdpFpSGonJhSSEL57RLhGAaMAbb5rwHA8T3rBysu28z6",
  "key16": "2mLdUq88Z6i1rwxkEMUWaD4Voc9X2PP58uQY6vZ3wXDCYZkE2kC4wZrEqt1G64R31MLsarL4JxWdb8uFKHSDQLZF",
  "key17": "352eLwrFeLjdPdw8Yn1duhnZNCaXWCXi1ENq79reWYTbygCprjvfW9tfQJcci64m6zCSsLdotFHLEUnWn8J6dUmB",
  "key18": "5ZSXeXDFh4Vk4bTawyyz58dQc6n28RsHieV9fc3uecXuZsWvskWsL1QErxyyHA7JmZjtVjKjZ4F4MwuHc7X5m6RM",
  "key19": "LBfbzqFiMiwUSMCjqw45hBB9fzWQfJqvDrXcXqFkRcpN2hLYNwvVNAu2PCWkUvcBpHY9AMjQD6zfrkHfAuxp5gZ",
  "key20": "QPyrF94a1EajR1pfr1PoFdFgrQKHxgg7fesJZMCt5Z9nV24mpjojBfvCXEMKL5MJKJuoCmz3PRuVcsphCzu4EKb",
  "key21": "2vCyvzmRDKrzSeFkPumoHgVgmar88WyjtFN9EtN4YzarvW8HajKY6PQVjBaQGdHXJUfzUfCnCCpdagivFQ4uqah6",
  "key22": "5zAMTYr222wXn91yUiopgmLdBCervQE8QYSw6WEFkG8xCUeGzZmLkAywn4MFzbPJ3N5h3uhvWXqFE63NHDY7AmT9",
  "key23": "cEoJ1YzUWutDvBNfDtkNLsZa9CHpkcCGdpp2Jicj6YHRdpKjsUXoRzffz91w6chB1TYtw2SY9mrDNJG8dhZYfeq",
  "key24": "5xopYZ6yffB5wq3GNURSFJwDMY286UKomv6tucJXWiSbWgmUU5Ax2Q6oHThBUs6TBc6ybjCvAfQxgvxfQYwS3g84",
  "key25": "4L9bXvBBVSbvsNwFNvLb3fnc6Xs4JWXg3LPJnkchMp1X3HS9U4rPGicPD6MrWhViG4vfcdpsoZRwapK7QYKoMiWB",
  "key26": "2wCAc3RVahc2UJVjXpLqkKps34F7bts23nqYmcDYxqbLa3T9z8TRKNh5g5CZ64vre2XXHRRy8jTC6mnhX2rewQmQ",
  "key27": "4fQwBrSb4uq19KQuY77yP7WgTXhwnWfbLMSg6syej9YgeSf2U6HXN6RtaW7FNwJHBMHgwrLYBEHfGjAcLLTmb7V7"
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
