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
    "4xfLsvtExWnKj31g3RvdxTdTZbBN4vkuN5Y73oz8K5cyRHz32LoRSkg9F3WmsBicB2FxS8xA6zz64ZfoHG159Hpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s47veimoGvb7nzJRNrp25KBSYgXXpSc3kLD5oVE4dzbDK9oAGUiGJvxUymMemGqqNzxAm2Jy3BHoxDQXupts43w",
  "key1": "4B2nS9hZynMTweEUSrt6Zi5YR1tNMZ99HzMfTN7bfySvUNB43hYqKNSP4vsrRH1Ww883AbW5DJFRHkmYvVKgx1zU",
  "key2": "XcfU6dHASfDdNKfPprzGqDh5nauL4L3cWXuugyzFu68n84QfSCWEWNmro14QwA1qdS1FWB89KDt3aXdCCuEEnwL",
  "key3": "55KdEVyjpaqpgv3LZDhpvSMoCerZPhBNtsmYMJAwCn2eem6jnERSYxBfcCFxRiJ1PiKD6p7Tuswt8KfAF6C3wJgb",
  "key4": "5SYHXPxny8EGcUTu4tjjVbzi3vfHNdqU3YQTjsfjvpoJmEopYuK45P9nJkmYUmxvvWcZqA7sUwHXXNKHURxnYwje",
  "key5": "3qv7QXLhVxG5PNj5hJqpjf3bZBFoBtJN5mJiVcD46yz1WaduzEQQcU17jYYeQMtxt1GEWtkCD37XAe9fqVZGaLaz",
  "key6": "4TmDJbhwhafCGxDfdMp2mBSY8ppDPXfxxr3tL6DC2PnGMd19Kt6nU2hJ3WQ3WCQqET1yLCa9nQ481ei8qEJaGap8",
  "key7": "4Kzv29p5tcHcPmNa6ZPWaDyfMtrWRuNu217wmokVdqdrHP2J2Cqznt6EPX7a9FPYoSG5b6Q3bsu8zwGDxToK5wCm",
  "key8": "41V3XgwS1F8Y3eL3HVyiVN8VqtmMU8bZ8UprXDT2HkZFgBpQNWfGfWTDSpgdjtpDaofgMNBgGSnvoGahYun9PTcM",
  "key9": "4PvgMuJaAMKHFYq3G8dtFcqyRPwHCv896atabqrBbu5NmwNMzQYKJUHxWrdDfGLtHxCcRVZAM6LSn8nL1axy6HE6",
  "key10": "3tzEt8jbuWsf8FF649rfyseprSdBYkvk48kadtxthnj4tZNsWzUERdgNGQsZUDBo4fBTKAZzMq7LpP3rYox695UH",
  "key11": "5uxhstvHr2v1fJ3cNuaCBXxzBAKbG6MAP6vryMUTV6khpwWZ2dcDxmZvC3WcxtW5GXargQ2CJfu3kpBEuQA6oMSF",
  "key12": "5dH7KaoKTaTyS8pSzP2mxrTL2sSpxM1zvYNasuu6dAEsKkYxQ2D1FbVkBBuaGfCjgi4R8UaWTGhkhd3t119P1M5J",
  "key13": "34HYy3aMJS8qfdTp1aUKDj4mFHvGiCNo2iuBy6jcUjrjFsyUi4LxcQmfQitC9BfP8KVuU9mmKaHuH8j8UfLrZMSb",
  "key14": "35nsBzZbupkJXcDc4Dr5JjXaPjNDGdzMsmA3uZZoRSaydSRYhh6bt2LzFvuxeYzSsCsUgXoeEfs6mquXDgETQkR6",
  "key15": "LFnJgL82NmtNs4SBDfTreUX3uJyrcmns3YQ2nbcGq5XNJ3zrtHUSEcHSTR91yH5Jv6xGbcr1w1tjwfHri9eDW1e",
  "key16": "2cb1A7ZB4Mcayif6AmMDMtgrbUv1YUbpJNE9ZQZ3QpB2HwXBWL5Zv6BS9t4uN9UDeiZrcivF5qZRBxCJHomRYDDc",
  "key17": "5QYJUNKuxP98fSLwFZKvXjHyrWkXULG1GUitBp81qHpuiLCamHLRfpn5GNKfeoSeFF4H4JV7Z59oUGEoJFtoopr3",
  "key18": "5MbSXG2s7v34decbqrBVsGsHmXzfimArTyxgMeP9nKvHL8gRQJiJSGMpT5aVAiEEVBzzzsRFz1iQ6o8Tm9f2egq",
  "key19": "4RaXJ76jpaQivCb9wBCNAVvPJk8TYoYy8KPhRgcBhKZn9mT7KWg2YGWYNTe6eHy9HgtL76MnJxdHpfDZ62sA1msm",
  "key20": "FV41o3AbAJNfFQadNTKWSCQhzXTWk17vuRMa1AqEXDkKY1L5ikVGbfvcmBmDHU9qKQp7kenfvxDwVS9V3JJNKWg",
  "key21": "m59K7JruGFgtkHGczu6pMhM7PHE79Hkzwcq8ii4psjCp2zpeNvQhjXe8sGLWQjvZwwqmRZYUaXvM27jCZStoQa1",
  "key22": "RFbZHoJoAQ8aGFKMtnxiiBpBK8PQCQLvVQ67jwmu11JspiSViYqfTXjozY9xsxXZGHgkXCAun2A85wpsEFcE71B",
  "key23": "3jam82Jh9UrKvfqaQs9fDfmj4ZJuXDZkccUUNeEpXu3Eb57ArVuqEBHXz6euW4qJJHhMdiWheWYYzYYEgKNyB9qX",
  "key24": "1fqLpTTeDUoFSinXNBGmE4vqbZjz9Hcobim87Hmgvc1vSk5zs93cBEP7TgSWwXg4iv59DcfeP2PchStzcezjcMn",
  "key25": "2TXcFgbewhrRXouNy72hcFpF1cvgo6xurMu1AXotUq6tJDBwhGwMZvFZVYVocnWRspSCLLFZG8BGHTyvdp7s4ZpB",
  "key26": "W64Wjm7ULC1JPVLgUc5g6sXeMi3iMyHnw7W1y1JRifywEjyEfnLYsfpm8efMjvPhLrgDhrbEPBNy4J5nS6Y22m8",
  "key27": "3qgCqidFHEkFBTE9iQmy2nJnmLTDc8LjJyYBFogMG1zHrq5ceCvXSbXrpJJDbcpw2FhZCQL7VKxfBbA5XcEHpzZ",
  "key28": "676ZEv1RttaPwQhHjAnemBaQNoX2AKg1XViB8GUVF6QHi6yJNhPLAUkiaMX5PM3g6XoxmpB6fxmzdGconzWny8H9",
  "key29": "3GXC1kgRmmgSqKfDKYahkAgj3q2GvyLVPLq8guB8mYFUXZt6U9WMjc8ErqxtBhLq3GvS2NZsQx45AJBB2qVKiB9A",
  "key30": "5kkFQSyyaTB6wZB7sC3QeUDykbgbzHZh5xfWpmrUzBkoRw7o6R4j4gNxFET8rCtnd3YHYe52njw7yhaLs2rYoFfm",
  "key31": "4R83k3kgmo8ab5xuE3giXuiMPynm4W1jQ9DrNoGD6cmS1zsyHg7Dgg1Y55R5CupEtMfdFCJbCoDmszJCKFzgtSvV",
  "key32": "HSg1eEb9GKz3AZprsjZAY7pdUg6FnYWk9qf4r45hiX2CT7V5kjgjz6ZpNMVTayGhEBJ3PWBXQ4XK8e9dWoFVFHM",
  "key33": "633ZysYrHUVT8nVzDXnwgmtueDxydGvCzJHekLZFj2RoEUyCaedQPJDQrf1VJNEcYVApXFH59FKPXRRhmtbhxAzU",
  "key34": "QSAzComwvMHauQVNk2QuaEvcY4kTM1Shtaj8w1a16N1zvJgiMu56ZCAzFkpqabU9BA6uJqDC5eqGhRYkeNNtv7S",
  "key35": "2rHvYJcZjY5Pq3So1DSibzYhZdSdfMoFaM3989UXg583kcJm5CKS21bVXuT3HhgDzw9wcEKhepXoRF3SQkoZZQbu",
  "key36": "59tZNZwAzX88KoUoSoBNoMkaGS7C1sAf4USYNM4vDgcfeqCdqsQ4AS26ASor7JBv5hDUXd9WENcKsMimE46n9YMG",
  "key37": "msvkuXi8CYFDhpr3hKm8ctYdVtnz8Aw1JjhwyD84mziHAkhxW3is61pEvq5YbT7dMrpTw6eMYe9sQvgvRcTQXff",
  "key38": "3vpGk8b9Y4mLmfXSULwiFuBKWLBaMdYxeHdt5WPPyfe3jmqvDZKZ6pmdFJYgqcSkV57of5x9ZnF8zUQcErHw7xax",
  "key39": "3eaRpXmoci88vEETmdt3XC1gPS4fTCAp5dRAiMs7DxqQmSm75HPRcpcUyyaLwmaJfHZBuaap9PSFZrNkkaLFKru8"
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
