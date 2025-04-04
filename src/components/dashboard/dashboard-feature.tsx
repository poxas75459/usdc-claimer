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
    "2vkJ38Ty976aQDip1paE3Phgvgp4d7xUapehNGD83z1nxSxJqqT4eaRmK9zYGzaUE45GjmqY8NAq2U1odAxW2V6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBJEGYGoSWAAux93JW7R4A4q2yifw5SeuBqfSnHPqzdAVRcZHx7qghJpARM9xnarY7HG54a8cczepQgyRkAAVBB",
  "key1": "4nMjRb9kHbipKqDXU5mxTP7E1K3ouSEPyNgemcN8E987jRQyS5jcLdKZexVGETrJ87Ng2u7jicsMHsMxpF1Vn5vx",
  "key2": "2GA4HVmEaxi4t6AqjjhbiK9xbtoekbAkCCoTYNVe8PDjHT2KHQ21SfAkoWa1Lwmk6X2f8rpQB1H9FZ5zW1Wf1S1K",
  "key3": "4qkcKgW4z3Rxqgc4oJ5bxSc9r32E3wdkVbFWexrJGg2bnd4dQUMcA4QR58g3JfDsaU5GHWaz11EUBAeLKsMvEpT4",
  "key4": "2LkVW5EPQHbH2xaaX7Gttz9yRETP9P8FdH3MQk62bWr6aNjUFu83GVgiS97XjANkCTLL6megga6SxcB2V93SEgKh",
  "key5": "4ngWuu4amKynD8F1caasC9ooH92cQEXcs14wnoqqU8EzaTCkRRxKewzjwy4ji2UqW7G2NwJ1PhfadxMLR5vwmEuV",
  "key6": "5qkPjzAsDAU9oMGTsEJtWvLM7BDZvCpA5WubV5FyoDbGQXkezyMK1wGTVBaiqN4T8hiUBcxthug3rLMMjNktGWr7",
  "key7": "3e6EcFCA7M2N1k9rnqXZBo17diXG6kUfHW8U2qcMYBj4afwhrs1hQJ7w3ZzeKbRjUB1DC7k5FmWmBi52Macxq3J6",
  "key8": "5TwBJB2Neo5U6p3ddG6g7UTBJ8wqQHXG5HNQu58TcE5nK5xnnXpgv3c4qEBjwpVRmStB9JdrUMc59oaaYBiFHiYA",
  "key9": "3hbTa5y4eBNgL2QaWq2v9hWEZi4agJ8DC586C4BxaPgLMdoZavtzvKeexmmL8XiRyBDhnYr7y1z59LjgoZkestQJ",
  "key10": "2oq8CSAaGYomJmiBSDazUPqgW5b5f5KShaVxGdwrbAsGFoJAnMAdJPKE5eBsMJCyVyxPRMkTKUzrKDjgwpsydzev",
  "key11": "5j9nseKr3LkBHGoQYe89NoALXeyf2fXWE1dZw37jvoeXMP2wGYjye8Yb5eHbuv4nhV7nbkbj5731XdXCkZW5ru69",
  "key12": "2Pohaz1YEUErLxL1JwSUKE6ZQ4YJNkRuFmDWSh3qXWhaosNyW4htbbxLxgk2VNDy5FiFbTb9YRzTekfTLoqDNriy",
  "key13": "3gFJqqHHmTh4442Rm7YFZJtTJoLhvr8ooaMTxWETWTAv7pn1VMicjLGVkk3kr8bd95v3AFw5VSFBWB95GXqmqYXE",
  "key14": "2v5X6h5ZrUFqVco1BTsoEBKUmqpkzNdwvwJdRemxhvpuP1JLb2ryFwSKDt5s7FjznKqeAqqefgvKaQb3fwk571XU",
  "key15": "37znFNeSJsaoW74Ndt3Cdcvve829NSLbt7dd9u1ZxhGHff2EVyS8344HnmsUMqP8DrHi7BbsjsCGZucn7ihWbCY",
  "key16": "3dMFLiqCXjfVmCVjL1fobtMuf8iNuu7SG2JdhZ8Hb7pX2qrLSJF7gvj68mENHwE4j2LRAkm6476WzopewpsgUhmv",
  "key17": "2B7rex1wmyuECcuhUmaLr9r4HPA9v8TqxCytRgDZ5zuwzX8tnG8E6afsPwv1e4k8E3kCMYj7A6AJN28zY7CgTe7h",
  "key18": "EV6oaq4nuPXwqujaTyo9bV5fKrjjN3UimWFacXLcQE8YP1CLuRBiUJEEDWKPcBc8h2xLMtyPUgMZsJZwi129236",
  "key19": "5sG2hqrqSvbgd7N7sbrzvwUUxEqn1AfmJWyaE7WeRo2rL1GYE1fK98vAyoiG2Bvntq5Lk3wf47KGh3VAZjfT9kDd",
  "key20": "5mCymmmCJ6KUZ9iFPkcKYjV2KK9e9EDTn8XUq8gAEYmQ1LxXg1sSGpZvhaXAxYqZKnxWmubHq4VoRztJtPvtdh4S",
  "key21": "MLpNGTaP4RLsFAj7DJDcWDDaZoPnhvCZHXz91CwrwHBeDX3uhqiFqdfJZFkvGeEmGF3zrPgHgLPdj5uGh3FzF81",
  "key22": "4utgP8orkh6EHEsYXgLAc3G5XJw6Ep6Eu33W2qkchqdPtQN1JFmVMJCfs9ASK9as2ppdwcDmbE6L6eVHrMzhtD8E",
  "key23": "3NkotuT6ZxnYg7STPSwc3CA6NyB7U6smEuAo3NSwJvsNk19aHvjFsaggvgwhrrM4VoYaBBmUyT8XMizFc7GEaey8",
  "key24": "2P84G71oj1gcCXfo3hgr6r98s3DGLdo3R54JgaHteCKkDJM9ZpjBpwPhyz1BLMyiLRAANuFwebBwehWC3yakcpsN",
  "key25": "36BRw4fnSfKJSBm8hCZGeWtUj13FF9q1xA7v5k7g7QBBBJPzKgQmZBJZTV4zcXnFPF41hM6NzBTKiMjjgRoF8ygb",
  "key26": "4vNK2yA8JLEASnJuDkLaRTXWJSKzdEdY1hyGWpvFbhdA87FyepXHETSnipX3WyPRmAjTo4ySrhC5Z8Qt6dRWojgy"
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
