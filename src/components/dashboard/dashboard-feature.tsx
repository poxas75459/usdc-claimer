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
    "5bQ5j9vbS8pXgzXu4xzHAcR17762XooLtHfK6Y8kcRjvkNLRBvHgLhA8sKRN1QFaCmrZgLB1T9WtAqWop2qNYXAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGET3mMHCTsWax811dM7U6Ne32qQtxrRvKb1nTMLpkqznq3yTC8zchco2yG57TiP5K9CcRdp4yEK8223kym5PPZ",
  "key1": "2xS9T5Uco5QAbqRK8eEkn7YfKUKRQokRxddf5wGnFPXfNr13wroRUJedWtzCrLTgohZtD1n9wn3vUynJn2dfJ3aQ",
  "key2": "3ats836zVJuPyVBxkyrwMdnYKdEcxY9LbfhEe4GxhTS1Um6dv82MGbZaqvn9RyHkczEwRJNX13muFmSx8ghRbzah",
  "key3": "5M3WQ1t7aCfZRXqKf9MXMaupkbKEZVugyP5136KyDfPPwJz5fWHGdGBmqszMgGCdPG8jzPQZqqpB9u8NwjNG6ksK",
  "key4": "5qTVTtE4TV4E5q1rcpUUx6beGSHE6rGHHsjQnv8PYHEzGun4daJtKzGWAcipDfZDToJW4g61sdepTFBMotA3YKu",
  "key5": "3wXYDzb181kH5u4H67Gb23uyuuSFKrZRxtmTkY3xrLgv23bHXVt8EoFXPecteFQmwFZzxk5QWXWLjMxpDPTWx8X4",
  "key6": "rXQ4WaJVpRx6Sn1ARpvBJvdPbpE7pQimHgz8Eox73LQvNS7rcaUfkHJZjcj6UFQKHQ9yyB4UNMgpd8ripjChBsa",
  "key7": "3uqqJxvmrt29hPZKB7eBnu3sfyU2fdukFVdo6vhkUiE7D9MMjwR1RNtx1fKoaa8oiU1mLTbD8V4xLK2E7uc1xR6w",
  "key8": "2uWAt41q98XTfY8yGRsgyqAyxo8v4iDeNPZFpRfxqXcvAcRZuPRQhQ6xDdDkDyaEnp8p2WYG1LdEmRVhCnfXfUu9",
  "key9": "3Ni3vG3cEUps67DBSWUvSgEG14BY4sXD5eN2KeMzeMzAL4hgcgZRFanHgjXczJQ5QuUcrwnL1HZjQAY2U8Q2DNU4",
  "key10": "4RubMdpcnU2FYPpgHnCNCroKLCDj38RJSziDyj9f8VLj7vGVZAWU9DefU1j1NSWESEp1R4eVvp3DR8hdZ9kvf56m",
  "key11": "4TDciqpZymGdkeGpSjFqSCrTcivGQS7FG4yhu7L4bcjYwoZ4LUJcdFFBWBccfwj9oxPMf941xGG2mkpeMX4Ekyxb",
  "key12": "253JKapYmoNNzQAFPqKnuGFqK3Yh9uxK8tiS1C6bExUHjXWWqyS19gryBdqgCYYBBfE9sSZPcwtcbXaL6cnpTra3",
  "key13": "5UbN8ZU6MQTQgo4XdATvSoz6VryAfoiNMGDFzT5hTfRhJg9PhTmRKmGrP6b3GomfDv5NxLSBj36aGASffikCTW9k",
  "key14": "39sMHBNL3MVMzEiEo8NwcWanGVQMv3WbjnXYT5jA6Pb4Msp4Ee4mFFFAEe8faawsGUu4TcxAcpTWeccmf2yE9q76",
  "key15": "4G7CWfkJAZUgLzVqtXH5Tii4fNYiWm8Eo3sqsn6jiEZDmGoBRey2b7XZkVg8N1dY9C1XDAgZW7mqS3fM6bqyM9KQ",
  "key16": "362AhcYhHW4nL1B3kZ2ZoePNKwJDWmFLmmpyuoAkz7S2oRMRjRKvrzxfboSCTQmNjLPA6HpBquDD19q3eBuPK4sG",
  "key17": "2ExRm5G91iyVfASSsLXbeUKop3DxKKgbykosZyWwhEQDbFomjnKpPcivwjuA1GNmxLaZK2ytydULB5efyEHE6p1j",
  "key18": "2mRiEqdvn8SXbWwwcBWbAPxvS7cEYzRvF34rnSwrzLnGmdN2G9nJf7cKcpkPn7toW9Rs515iYRU4cDjfWk8dKVLJ",
  "key19": "3pn1KmcC9oY8pZeqEjeP4q2XW8ibWnrU83eX7HzeXAVTe4hawpDKg488BvhEskQFFZuGQm4kuECjyGULDp8aNE79",
  "key20": "2tDYirFmQD9s8PS9H4nU7YFSyWwU8GqSBkmpRrpai25nq1b631iZ73mVTojagz7khhu1q2mY8Tyq8yxWCcUuwQc4",
  "key21": "3nkoXgXKJEpWSfjDrZmN6uVcYxNhyHKcpzn6qC22mJPNi61Kp2HpZTc2ZF9j1euJRD5Psv61SsKD2S7GUT5QQryt",
  "key22": "38jBV6Ke5L5AHeuWL92VvLRRfzAo5xvYmwMwLrXbRxVG67EJ9iaS7Xkw4BYVGyF6UnW8SGs725AXRwYaDyNETAxw",
  "key23": "2tkM9axyFgi4RvUTV51au3U3fqXBjUvQMQcS3EopAAJ9VRomjyZWX9ypmLuo79mLdw1LewZZSswRpgugDiVXW8PM",
  "key24": "5afkRq3fjBWSbKK969Zubnj584arGrxTZWV17MZLZ9h1wEg6SQ7861VMuzjaXj2sRXBNAEWtN9WdHrketuPGiF6p"
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
