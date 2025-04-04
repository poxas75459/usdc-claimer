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
    "5RXHYEmc4oRdGu2R4zkKS93rZtmctpD24SXDqFMncfv6EjrKLLfRBmtyFgYxcFb2RZ5vkeHy9gzGqmxnqUPo8aFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493W69ALtCkkJtYR65YbYJhgq8mfmZJJh51xuAvz3KQw5o7dzZZJbhLCQv7PX7cbHfQPj6JHAuo179jBS1Yc4cZP",
  "key1": "4P8dVau5Wqr4VvV1Ci8puHQeMbb9wF7WjprckzFSckT8dJ8TRTYekLr5buTeRBgQqgjMYnyc8Toz6NyQqeYxDV6w",
  "key2": "5SaRamnuxkZZY6tvfkXKVwtXiHwhxjkKUt3YMChozZ9EkH8oQZfRyrLJW6XsMSoHdWW6LxYzAbksgfCotewW1sXR",
  "key3": "4kdujMv6JD6GUDLMBNuFquCbZaLKqiojT5pUvvSfGjNj5oPGxghSUfokvesALpqqGYxogk4XDtwCvZ1kDe2EsnCa",
  "key4": "5x1RDrTjGsLnC5CWQ48q7JtMtWpmZGie86QnUVS1xXNaYWTAjz8UNocCK3xb4i5K3U2PviFNJnDLLhDiCbc8Vq5T",
  "key5": "3gni8HWGKQ3erzynuWLVeQhLgMvvz71Gcz8Z7UuMh6AqdxSN9bQ5gA4mGH4kweC4LWsBoDs77bgJagNGQadvdpBc",
  "key6": "39DGuwYMweLtTAQALU1HHLCTbma9xUVH8o46d1ydvKQJdiYgJfPBVWhjRoDWJ5Y4fH7YzYBeApnkZRqk9xfydv1e",
  "key7": "5R7AS26oWwqeZw981PcErKWpX1jquiaWJLfWqvKnG1cH3UsWg3tp75tDaToNTPsija2fqRKuW8ZH9ZMbSLEhKMRS",
  "key8": "xGTuzNDriL1iULqFqbnUwbCbcBkFyDmCMqrDFUF7ca5hv5ZvLkTiWp3djFD4UaQ682kk8zVytjPhqHgWuCA5PHQ",
  "key9": "39QfeswweTZDprNhBd78b8hwQSip3zK93jYbpW8wpQJvYrmr33tDxrMU6qEDFTLcsi3PH9CgfHaZ4vYaTRuVzCB2",
  "key10": "2abqxJLtTbsgGZ5FcHp5WUpJhrB3enNVw7QeNnbqwsXgjtYQSG8NR8pRHPyHRAfabjV1jK5MNM8NLWA84RuddhAW",
  "key11": "32meK5AgFxQuPZcy3PsbX8EBfDwyNbp2FHyficBsshAQ7sGMjxY6hGgvpFELahgmQsrbbbW7q46GARmXmDCNNzZH",
  "key12": "2bHTPF89LVBWtyXNhDB9oVJapAUtkj3vVeQcUrCo4tuPEMU2yRnr8ViGy5bzV9eydkw1j1q22WGCsLxgQseaoo7v",
  "key13": "JNmpzR7swSWgmCzoP8LVqDpjGbteGcUdWMoHBFuoYP6FnHcWDxYdc85FjQPtcTu4J4J4ovKFUhPHswXKGMs2nth",
  "key14": "2ocTEuf3smqh9qaNJbLdZraDFkuiw2qmqNwmjseycqu6YLC3Ywtx6t4stgzHfm1ZMxPsdC5CkyYN181HX4uwAQHQ",
  "key15": "3oV6Wu3cHDBsGEvwXXo91246tQ42fJ5ygV7xT2GTUpUFNvCgKAn9iS1TSUC1dE1hQigCCHv5U8eigfXRWpRXkcf4",
  "key16": "5XasXk1Zfg4NpzG8eRxqsSZXmfbNn4JXB7sK9WHYARYQAKwESVwjsxxRQYaRrZm3grwcuR9YkJ8yT29mGRUKZXL2",
  "key17": "5v3ubjNkJ94X7HH2gEdDpnEoefk4uQNYt9zXkCdPkAyvwB4Faapo2S4ovSAtjqpPwafv6iYFL73nNrdu5CoMD6Uh",
  "key18": "Lxjx6wFGX9Hjhr7PpKZh3CSzzu7q9CT1VaibAtq5FWBbkq6T4Am57vSxzBLKNmyJdHbqyy4wA6w7BkeR2e65wmX",
  "key19": "2dXTj9RYR63KYDL9pg6C4R2fKoydwedjYn7jTEDycqFHMKAt6DwwQpPegE9WEwTrotqpGd8Bwfjua8QL2iU6gvZm",
  "key20": "29ivWBWTPXNLf3upudkM1TXWj1fPRqJvY8TwdfQu6xbeQQ5wu8EKcFZBRPAJDdeLTdipgay3U6MM5ncFLGNaQYGJ",
  "key21": "dpaAs1uh3hwVyTx8nQkzhPXKpQ6R2LcQ7f74GVgEQbTTfJGghd3nLzi5GWWpYtRo4ZEU4mdfLt6m4PKBLvh9vqz",
  "key22": "LLSp3GZRzwtmwEPCALWPF9pqhRDamD1R2CvCD5vn4sfi5HiUcoRrUEXviw7q11YVsTeg86cpkHLW3B6pwBoN9tS",
  "key23": "3e3jBXfmNbYEqZRCDGyQ1cuLXhXm1HNffmyrscF1p59cy7icGqG3WRMHZyQ8pGDBcH3Ee29hx3URJyB7vQ9Hst5H",
  "key24": "41BwHEeahjjTjrN8HoHyHrijS772phWMgAJpcTyHJqo8N3gTvaN4GPyQUwBKQpaDoigVzVmJjmD4KpTLSnRoWrWk"
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
