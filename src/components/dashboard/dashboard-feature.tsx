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
    "22ZSif52SfdiK9scSA5WFfy779isR9roT2sLodc3RKYZTTuGNf8G78rqU1kvj7oQs1fPT3a1ZVuzr6hDxQgNqapD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYYqsMGzQYngQHWFdAiUzCZ3fQfDJhCfzeSeQeP4y8mS3kbmuyZtwqAdhFSUCo5xjYHWzFk2VJQAvuMairCkRxm",
  "key1": "6486VyF2CxrvU2f3KK6yg4QSpv7CbAMEhs29bFfXHfP3TKWfPgmoGtuSKhhSNDVKzVg4rPyZAjJm5V5hG75oJwQa",
  "key2": "3kj2TobwcAqFR9TTkbivkNEVBE9T3CAGsNhXAvKSnukgA2o7WBW9PNRCN2BQHR65P5mjQs51PEYhhanbUXUUCgRg",
  "key3": "5EW39pnE9DJf91zYSN7hcLuWu1zdgrxEDKDCd2GT5FRqJce9GPBf142CYbQVxbNPJfyuTZxx2VfbxrU3cjaTBPQ7",
  "key4": "4AfztwdgEXH8v7ueQzW98uJ7W8b7Ru9GN4zKvdKu94GxGjEL7vQkmk8TcYnrRFwwQR3r2RkRxt5WvwKbcV1EYBxa",
  "key5": "5keZdzw1irrkSeuGm5VjDMeUwHqi2i8v1WGXmsU9r9KnnDe8Jej6DJn3jcEY75no857zE5ByZqAC7JMyvgKsZ6jc",
  "key6": "sHPnnaYR6YjTf4AXbt7BJQhG4Qzq3X9VPXvBvyHNnXhhioHJB4Miu4EDxYEs8pCdi29jSDjLGvWSXxn2kTofzMT",
  "key7": "AKXjL7S9rGUMDBCFQYTft7w2v3hksEAP2Kmh8xVr85Mzpu4FFGCBxDH1Xq5wC8b4FKuhwvd6nWycVPQxENGhuT3",
  "key8": "2eQFC5ftS4kKsJWaZswZPKfy4imbd5xhw2HfmLAc6U51YZRByUjmXK6SANcfhqJGGfv9LwTz6JeH3pRaZChrQnKw",
  "key9": "3rBCnM68YbmFGn9NQcE75xFWQX4vhsPpk153y8baq9S8zBDz2BF2CY9euojPiWinAsBQLZ2K75uWAdCjdid8XBbm",
  "key10": "5px8CH3jSbm2WLDGi3ZCVSSwZYuvUdJSFTE2ymYsQNM9QjxGWfaij9Qi5RF8r8SQSd8XcESJBxR3NrtPM7xV1Yc9",
  "key11": "5hnUjSgBCvzuaD3YuTtVxVmdA1vbPMqiktBqNn6X4XxUijwLNP12KgPsTCePvnUTtyCmYcxS8fo7mTgzsR4Hnaks",
  "key12": "4B6DgLhu6gXRtoxc6Phzg9ic2FsbuWq74YBFfYUCEijctGjcJizm9gNkNMrvtqwbxGa7WEajgM4eY9MAvvLjawEo",
  "key13": "4aVezuMDtcN7MwV2KhcDFTwDRZrXENaRW2i1go1eKkmABSp1RY64eF7nnmFnahbgywBrb2nhaEZNwivP9QaPyXWT",
  "key14": "51ASCKEMoCPwwqH6vaB9AtkyQRgn3JX989mg5kabpbzgoRmLq3BKmzEhWNDMugkXWuNtxtrdm3Vfq4bBzebpKiMW",
  "key15": "2u32ztawjK9D4ZwJ9yHUaAxamPRuJphCiJwMTck7dWzYMGSWXSPQRQKbVCbijMZghSCkfR22q1oUAJJDsvpeQzCy",
  "key16": "66SPeGYwB56m7o8nDSC7C9GxCfnm7ySdZsHC55F22BEiKK1YrqVXbjVFdf1eZWjYo3Am8RW7szAeDQeyKpvc8z6r",
  "key17": "5CYRTh3aiS18J8YNtUMm167t5ycvLXExupCgbB5gpmWygDJHqW4QhzjBv3t9Zmznt7Q6pSMTd1D4BUNESYheyDhh",
  "key18": "2mKxhf1oYAEmyVVAn1aFM48dngGWPiiS3AF9HNmN18piipBeN2Z9scGak7t4jVaki4T2YyLv5hm4xzT15ZgxEsnH",
  "key19": "5xE9qStrTbuzegeqLzwpcE81MaNzUk3RL8TUfdimtB1hC8MDonu63TqBBXKWdG2ZrpqQqNy13rbN6bG4XLirwMk7",
  "key20": "2bcVyNC5GPcotK3fC8967dNSoVyS1XLz39ViGVaUF4tiC5zX3yQv87h88xDys4uDMY6sNmeBzuNfj9n1xGNLJDGc",
  "key21": "3GHoybBEW6SzMZfFFeBTzv5JpqQ1hz8YWLftjJKkXLrGeSxvqUMMbUCqpt9MTabtZursozjS7vnnjTdv4gvTYC4r",
  "key22": "33xcHG26YUuUVn5hHvif8vUKpuCSPawrDxwMLZKfUYefwFEuWBtGcMeA5Hm9Mhyd8zwGUzJSGwzbsF8Y4huvPU51",
  "key23": "36kYxs6rzgQJRnu5YdWLU2gufDQkj7jX57YXuNe7gWHSDsZsG2344gMdM5ComH7ectxo1CRwGYyNMs9NF3KrjSJU",
  "key24": "P4WCbiLYuwSksjiSSqRKXrQJfdGyRfKC7dmhobqzgoFnztvCQLwkrfBnW5CwdeatSLBQDXbpTSsWu3soK99ZsWz",
  "key25": "38G8azkcNyh1mhdJWGK2DLTXHR49zuQV8rJmm5brTS9EPw68tiWwJGGeY74wDVm3doM6aihSgxgL4Y1oSfs71FqA",
  "key26": "4wVm9S7eLi3UjyFoxDZAhZGBtSmk4u8LgtTV6WkkGigNuY3YSZ8tfgQCmq3x1LzJgAFx3QwvmxbwAPcMm84nfFk9",
  "key27": "5ArRnpyN5pp4GZV4xx1FiXPaq5Kzvz6FqG3bejd1Uh6Md66teAvJCcwYwJL34azC18Ax5xdWJPjLHc8rLW1ose3n",
  "key28": "4TkYQQvmn4GeMFKAUgeSADWNJ7CzymwxNo2tbJTWs9cBuP2XQEvXqGxm9UdjVrix4nFnaf1vqxfKazwDqaGtp5gM",
  "key29": "8Gme9eaXgGLFZTD2eyKaoyhPyf56taTK4XeADS5fFc8GQtJdn97SAYrFNzs8HbJWeBRMdP6SAaiDEvdwzo97eCD",
  "key30": "3SuLMttKvtP6MWHpnZP3BZNJLihxv5jRv3N7fVLcLHCfvYd4aV3SotbCPxDLSw8qZjEnu7HX4xZsEbx3PeXWcTQe",
  "key31": "2osBZ6e4pvY1Zyzb5uphNNgAswhg8tZMqvjHYWYWqDcYJWAdMQQab7jhvPjz3xxGuka2rbzn4GenrqFeFqJniR4E",
  "key32": "5Rs7B5G37BCwfJ38MDpqA1NSpxaxYp31Qy5rehizP9g3sfBDUzHJYX73UBMLH1HMW2QtLR5gPYSskQ6fk4zoitWV",
  "key33": "3YLZiTsGiERTNwyxaiJ5dQR5BuPCrptXGM7vJQa9q5G5qubbU9U6LmavjEdNd7Dnhqy2VMnr8bWukTi1fgyk3sou",
  "key34": "3zgvf4eDtc8V24HcJA3kpKxyoZS4uDB3NYEaEynUWen64zCAJuD7bXwFsShhBd6B9jFWUFyDLTFQbXWCCkAgKhZP",
  "key35": "4rEj6AbYPmafRxhHCmgiPXBGZ6pACmKTVPX5ZzAcNJHXevx1uetm1zoD25UN18wcjePmdRkj1se4xbdB4QwMXQq",
  "key36": "ZnytNarTzAhpBeC9bb8aHwVjVjct4S1eEmJ3RX7tBcJ2WTNnJHKSoLTn8EikVQY9ru2FWyb3VXRRBfVJuwfBxZZ",
  "key37": "3i35VLWfUhvpN51Sc3s7nqgbjcNQSvE4Znixitubkscrguq4gkeo8AThhPn1dYvRRXZT4sPh9Rjmn1fG9u43oqdV",
  "key38": "2uPcuV7j8RDQjcHjydvUbkkSoRkmakYmtkSperTDiyMHQD1AY42oXkrvckRJmXAx3V6bNfMcESTL4289MeUe3mKQ",
  "key39": "58cEE1QHKn9HjYTHEbEiKR5Q1ed7cdEvugwZzZ9BobyxxwgNJFtCoFyEBhxmNPpv8Gviu6P1PD5T8RKokzVt3RNy",
  "key40": "4UStC7SCVw6WvaHAxqHoQTU1R1CDeM8js3sHLz21g4NEizY5y76E2oenCmszv6QXFKHhQ4cALVP31MuLNzfzcBKB",
  "key41": "4yafjhDm7QJpVaZwAH8Dn2ZYAvba6Fsar3faXJmj9BkQG3jNfHZcTa9DJd8MxtxYKYRqUUsgJ5i6Gs6JUSJGtkVr",
  "key42": "38RrrY1f1TSvCm7RNQDDBW9PCdTFPAVgxxpDoF56xGS3ZQARHcvSr4HZRWk8PqwySYqjXPjddHXB46CddKSztyTm",
  "key43": "2BPK8HGYZgSgZoaPtrGjCQYrLxikEeN3erjK46xhMjNi9RKhwcn3UNNVgSgCPAmcgwmtJeQ5GXvyiwhiwzdwCbQ6",
  "key44": "4SKS1qBv85ccoEcoB4fPquQDTKFHm79akG9kPwzWvJjSqgbDq6GiqsfNngEqGGbC8SpNHoj9t1iKcLWierVQKrR3",
  "key45": "34SV7iMoPSigEwDfrEkn7WPGxuoBRL2DcTQTNZCThM1AbNiFB1Ee9qZWNBeC21XM98UM6qFEdd8hyNywyJ4EBwYc",
  "key46": "3skXtzJrTALGcB9Ay9AHoQZimcryNWhasEZFXbhQgZyeWXrAgo9qNvRsXdr5HQzxz8hs6BVv44MhoDRPR9LfpiXC",
  "key47": "XaKUUqf4qMzFWqCthdpDxcDEk5yTBMpGJhVCVNBLSTXNgHS6NmmCXeCBHSSqU8iNqt4rGaJyDzMYpsv8hiQhAZj",
  "key48": "2GSzoqM7Ri1rAadEStqbSbq9enuGY3bUEcJZJnQaA8y5h6x5r3KDY9yVBz6b4hjKD4Xd5zqds2LVDPGBb5Q3gre2",
  "key49": "4edfMD3Zd8JQo9jSxSarJrCTgEtDQ8m2eudqeNSJJBgXhTJzDRZvTmEd2chv7HNV7fSa7Xk3iGYAAJrbVgYssRMm"
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
