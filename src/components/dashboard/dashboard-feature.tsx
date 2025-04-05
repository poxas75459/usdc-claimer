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
    "4WpMcYYVWHCWzck7FFyKE3UrfJ8XojnjKVx16GrKLZg5mfECfQkQMiCXrkRTwL4x8sQcindkiE3cnSszZxpxRmJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fjF7eATkimRLPu7tY6XVT6VcThfq9HwgqJAq2VZ4BKFcdBKBaR8EzZZ5PFdwZoH5cuW1q7x3wtuGrmmKk48y39",
  "key1": "4exte56WguiQ8wrD1QNHHkkhse3XjsvEzZH4N655s52ahowpeFK3jBmBk9QUUn4FE6JTxWCZLNgbupTwd7SA9CCP",
  "key2": "5151nYhMkUNLwhBQ6gcRubKcmgfZMWbi3PGDkzvEXtk3Fj3eg2W4K8Kc1w3QZ1e5tx8DxjfgG8hskS6QF9NyK34C",
  "key3": "5QWie5z3A1ac5akUJaEs7oQ5JMtmUmjiSvudytA7nPDHWkfuaFjKTJ2pyDRstTy8LYEKt8dH4Jo5Y4zorgCYqEv8",
  "key4": "4GVhQuAcrT3AHvQVcCwJM7rFRCw3wLAj3tbps89iytDhW1N6mXuipSNakS5RtRKnvSJSehR8kxZXpCsR53rBXAJP",
  "key5": "2CTBupbEdPqaZjx8KV3bbuXFC63nGihMBxYat6FYy1WGh8W7te98KbPKGtffdrmRAs9QUiGatTJUhAQLN4HNiGsv",
  "key6": "4CH7UNs7btkvJky6sc3pw4pf6bj9XMn4jWQXNaMKyZ1V5Anm1fcQh8TA3xH1LXuFTVVXn4srvXeYsnLkT6zHEZa2",
  "key7": "4xG7DGtgZX2Vnm8Ke1QUGUYHkMZycDgWcnZbKzampUe4p2H3NdJo9DtENpafvSz3jhdBvu6jPPndETDbg6He9nih",
  "key8": "3PV47s9gQfG9ZkUzo2F6hVq8M4qGEa54H7mYaHEdoB2fx7kkY6W7NrEtPBppskrJMgDCiqbcv9SkaYSjVp5ZiNSF",
  "key9": "3fNN8UGRKwLA45mx4kXsaJHvo9qLhnGrm22qcd4DQDzWcPGqJJtEQd61D3W98Va9f9rAEKboSwEBJdyGoSqt52kz",
  "key10": "51y2sEtFBVNMKXHwQbQKxa1pVRjm6PMCQSvUJ1qbiRsw53Zu9qdwpkFcA2mFCnpw118ybPc1zph8s4ihyLq2y5hL",
  "key11": "4kAheJKgrsDzf6UaH36zqadBo2AgnRWB2ZMShgCTKndib9oaxZs9upfsKQGfgQE5AzYgQith2WwS44hdhDwFUMVZ",
  "key12": "uWEobAeSZFV3Cd1HfstMBdLPDszf51v66B7GqALcXuKzRJQRUELqK8U6NsbRs5YspdzPbRkzJdWbi8WCYuCAuHj",
  "key13": "2YZoMbzzVN9MSz6ajUdyPgN6zexSqegJvDoLbbvaBh8C4waiP3BLubcbCuBZdNVuWfQdDm8KPzhBkvdYtAUJPe8x",
  "key14": "2tA45kGLST88f42bEmaY4RNiiWmbTfaGf7WWktd8AsJcG5i66ofrErkWwQxCeWzy5GsgQhSa8iWruzK4Z1JQGDfA",
  "key15": "38YZcctE8vbe438yUGFKr7cxErqzu9fdFufqhFTwJN4PNLL5uBLgrZKAgkKm3JNHZhj9nq2m7Ex3So8z3u7W3bsF",
  "key16": "3W2arTwisPaB7R8MGQsP8aFWs2vADKicZnyF4votMRptwweT9c9XLAEpUYWFsMc2d6TyCkt5XjYnnaZZ1cPVSA6n",
  "key17": "XT6cnNdDr22goDABM9izMcCBURwr7QVnkjBBa8jS1aHtBDobyBz1aPW2JjzjB95RJJakRiuZTK9bnVXsQ4FKvoP",
  "key18": "4WXXPQDKD7RRi2FWn3kiT1XHCW1zUuSLok9gGmZouA5Snz1WKBiT9d9UwTXZvuEUnnqBpXz4s2Z8oXoJZfNuWPnq",
  "key19": "3LXJ33tZgcxpFbnzTDuFtGEZeDwyCGYkF4agt6F6wV9K7wYWkUY6VkCK15MqtP87uaa1BfNt9tiYeUz7TfXaNkB2",
  "key20": "RKK1mbkpgeX297W3s46x7A1SchXoAAQrr9GpvZfFpMhzJbjzAfyCiSh8eTP8ZykEAypv91xmyQJZ8ZQxqJMeCrk",
  "key21": "4dib1b2ZgX4iXbPR3Sji5EVoWdAJdcyMRxAtZnzSMeUNmoMcSrWgYfZhSQnKQA3JEHNXTDC87rjecRAW3JmXhrJP",
  "key22": "4Pco4vUgGGQekuamRz3sMdWZyUEwxLhEJrfpL6L2uZ2maCmG7NvbmZ3KzDcuiUCDvYCjkB91EKesdCB6G2RRZjen",
  "key23": "3hmGY2uQU3KPmPC9SSroWQkzwfRZo7ExVMTYUJEWHvKU3MnCxpgM2Tg8b9MsibfcK7rPX6NQ5GbpZa3CC2o8TJpu",
  "key24": "4WcNDFsbhV7TkXfYYma6X8KJJhB6jtCBA7nTYkrLXfT1DYa9rto4hQ1QdWY5ya1BYGEipvdvCqnWWy5PJExM9SuZ",
  "key25": "2THZocV1BcndWHM5ZPQxpBzpyVbHxm1GMBcS2DMpNoY9GfmSzASdoixkC8Z9tGZDi3CxKvcD4pi9mhRZa82qVAtA",
  "key26": "2jPk9GupaBT2Xi74JCNUaayno8BSR6wpbpXzsJGuerqbUmyuuNuncBaeUJwQqwySkc1NgLvCNbhdcZ7KpUUGMckY"
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
