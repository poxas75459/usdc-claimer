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
    "32Ck7T7hW6jouexDxGhw7siYTTpYtoRTKqobCe4pEg1ogzrvKqzRFSJSGoo7iTMDneEj6iF24rMaWb7sB3NcD3RY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HUdUCFANXgtfYhkhxR1X7HxozQ2UNLunWxqLarQVak7afTD7kkmjxCiBrSb2svq1tmijMGb1qNpHD1x32esjnv4",
  "key1": "3Do9sXzaSTW4pjbFEquDExD4BRTPJdqjBkui6L4bZ2qwhTHbTjp7Df5eDVp7U1eVHAiFLsyJVKzs3GtmNYavkirU",
  "key2": "3N6UQUPGTCBmaKzodiJmqN9jsvKvYwpUEZqFLiguNggiRLC2ujaTZjJhmpLrsL3HPEEfBve5gTaLZcHd82TgUFoT",
  "key3": "4LiZgTHSnoxdba8DjhPYojNSQM2GSF7pLkpXAH29JeQZAGgDJFWnbTE86SN3Bq5r3SS4EWhqzTSdsdz8Rm98zPec",
  "key4": "4sPqPiT2BuqGhbv6RZx4BEehmUEtDctEVC8yDKx2FFdw9Nn7yaso33Yed2pzk9xoPdi11SNH7h3Rr3GFRrfCzX7m",
  "key5": "5fdD25u2bhgSGbicbPL519JfFbUaDpymbpM9BwENg5mFb9FKYA5iYvPdFqAtdaf9tMZSv1sHqfHVjEpUohzUpJrJ",
  "key6": "2uccj5Mm7oWAmZhdVQMqje5muZ8T3et5exUGzotcGvDoEmXsmFp7DnTNzthnMNy87TydW5RNMUDTc9SNXj155uLX",
  "key7": "3uagWWQtyQ7KZitXhD4cKtP59pcKnPq4dMLrzib17dTxt23mBPwS68y9hTfN3JGfRVqDCrDRLoDiqcWhK2qfJAa9",
  "key8": "5i4iXanY1941QSBS52HKm5Cg2fWU8ZyEkR1YAgcuhLL3Dqoy7TTSxM8tbyP9ETAWoMcXKLZ9aD2DJkTGY5Nc1SXs",
  "key9": "Uk8PHifhiRf4jg1CoVbtCceuEHXj31Y4EGD5FYzxmdXd7UM9HLW1wk3brSkRL8b9nDzwLW1gdcbk6qxidS4kU8i",
  "key10": "648c4cuGeBdVYhjCfUSRvCdMGY7uG18JJLk1w8qnksks3SQydCaP9uxxa6QLWSQAcK73SqLisfaS7tXFGJPm8LBo",
  "key11": "E5V1ZSbZiVyUbXVNDUxDwtSc83ra9zKzsHhxzRkz1fY5DpuJrSvRJfkoXBvKt5yQG2tRpELb7KQKxwZoHWianoV",
  "key12": "4fSey3hUV7xWVLSRwUBWqzBd5RnwxnTh7FxPetTiqFqodWMz4o5TCMG8p5fK73XXxRcfYai7yL6ds6VT8JJ1aFWT",
  "key13": "wTzhas7hHznNh8cDR5MeUcoLjSpnvoZf3qqez4EZ7qsieZ9RGFJhRsr744eVCHGRyaKSdi6dnWyr78w5FJUETua",
  "key14": "3AqCYHKrCZBkdpwjscKNvu7rtJz5hjYYvqeQYwwaiwSXmLXckJWptRi8Ff5E5k8aTYKrWkiAedgLKJnhBTpeJyhm",
  "key15": "4DnPiS2PeUQtJYveou4yPCDbzDCQxHGCBpZpZSsKPPzdCLV8oBq3AVvT9aKf8wXWG7izFhCPo8CS5dG9B7RWGa33",
  "key16": "2EyCSt9rEeV1aR3oiGM9MJUDEoPpr8A8jbNQ76XucqwGZpCqHJwMk2RD8cqf9bvE4UjC73UsEChMUePaVxFZnPwc",
  "key17": "3MgGiy6CDCrcp4ZCaDmd5BjuERh3Ry8WrqH5Fjz4tP4zdeAdXPa57e71dWZ6poGoxL8NB5XAjx9Pv6L7WtroVxgX",
  "key18": "4N7vGd2BNCccghWCsvh8x7gAKLw651N6XNkGcMeqfXAeptSNKWmeHYtmyYTZXNs4R2eq7TTKGQjBbC6PmN3y4Y58",
  "key19": "5g882Zj7Cq36Kw718x25bVuppP1t8vw5uj815KDZCrt5tDCw8FmX5YLKJC36N9mWHyETHocFkssavwvViHkL8iEq",
  "key20": "37hxPe86VqseRqJWYhwnUxYiWU7AeDrDCKUnTyMUf915mFdn8uphp3BuAY8uBsMP522EYG7jBTeqvYsB52P4beKP",
  "key21": "4jsQdKnbNUbVHWojJz9J8Z8zSVAmQG5GqLa8NnTHVzLTTm5W7GKTUfBdxW9XjuaJ35JR3heA4bFZeXy5fE8QiB4X",
  "key22": "3MeNNHF6NA1dBxYWc7armHXvtWbQffLdCG8MeV6rpJrvRhDkQrn2wCvPdJnj33mNVkkMMRjE8AshESPBsNi1Cc6i",
  "key23": "5bHmCz9yUAhR1rz6U5b6tjWJrJzhYrMyDr2qPpgwvqSka8aVvnLqR1Q8XHjmLKwroMo2ncDZgt1XEQcfV8sVmVKR",
  "key24": "2LstpWr5o3ABbpjmPmbHcD7o6jJLHLiQoDUH3yw94KNyhRkXvb6NhCwoAnzDr8p2d1Kwu64F4Gi5zywHpc6ZH2fu",
  "key25": "uQa2AnNUCUWuG6HfwnUwGVMyrAkXK7mquv8ZmX6QWD9zteAtt5AkT5U54aRGxsNwjunPe3FK1DDUZxbvFNJNt2h",
  "key26": "3znxku4DNEE2xZ92wNPNmYyDmpWYTqZzEicLjkkXCWL362TnF27C7UUyqVUNpWZRb8GCz5pkxD2sWYcFYpeYgytq",
  "key27": "3ocrZyzseVhRfCBchbnVCpyUSJ61zfpibppmEL1hwsrjmeEpwRn7MPYYxeyXd5vP8LcbT4AQA6JjMFhcuzDaftoP",
  "key28": "4sr5d6oxZ6kYjhrf3rzh7u4iQ2bYuYTPPb73J4gimEX7GTCd8ph9aa81JiBGLm17juswPrPf2LcjxxrRPBN7dZHk",
  "key29": "4A69JpkEEwSTQWQhRLPna79xG3ytiAe7hz3aMTSX3yipQWJMN4a8TQUE2GHCbbZhPhtGd9gCo1uUxYfNpqhY17vm",
  "key30": "PojYz5weJJqCqMMSnxswtDZ37HeRkg2jXGnqyGLHgQhgv23MS8V5dhLYsMNzsEg865v3PdnqPDegiBrB4rNhHsJ"
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
