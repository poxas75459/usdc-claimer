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
    "32sdEJrAyG9DGcXdRHwLXBLDG2tnN7JKB51knyVH4jeCYgppmjCND2w7gfZjrMKW6b3zaKZUQp7umMekaiqUZRSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vn8bqb5mRbwe2QBxY8vuN1ZCW4Aysnaf3opg5Fc6zW6M6YLyumTvmxBVFDwYw6wmT4jRQWyaojc3jYTisE5eUkM",
  "key1": "479V43zYd4VyFY3HSgb4doJYaHxc82SeSUQ9Ueq1mfgqUEAVF4djU17J6k8a5aDigtp9WZxSkdQ4DoZjfm9fvGwR",
  "key2": "2xrm8rhkXZ3YsYpUJ85p4cMYitaf5x5v4vZew57uA3pnED1K3T9doJvqQbLTW6LcwN26dteGK8b7EvyDAhenjofW",
  "key3": "62k6ZGGcgUJWQHc1pAzsj2q3U1ad2D3nFft6QewEh9EkSVNssy6r4avAXX8oxxins66fichKi3MipCX3BTa2zMpk",
  "key4": "gWVLoTPoDrpjbYJkFKgJ1cyH8MeDKVyW1HVYdtfbn27kgJ26Rsoct6j5eHV5sX9ayh1p1vwWt1Z9b9uFWuZvojT",
  "key5": "5mpAQt4bdaYyhwGd27rUPfW6DfDQqS2LnyFSTg5QbAT8SKPGB5ccYfrM8fHXfuQvrRJykHJDxiVebm8tH9ufWpTX",
  "key6": "3HdopBJJjXLvBntqpeH2PYqxgpTrPFKKKfHNHVXN9bwsskkT29TyCCQici1wFmpXs6ctxR3CykyA9nykgr3YXtbM",
  "key7": "5LtKeRdMcGLchY93bW4tBEoRNPFm4HWAL7bmezDnV34e2Zs6AJV237yDmeFmV14wQJWMxGYTqwa4DsYAJbQvqH9x",
  "key8": "ARse1nSJ2gZvA4bjCUaUz17wGMePoiRaLgLwz5Brc9vWfoUcB4RCpMEhRLtF8nJMxEEZD8oF5Vx9Lx6eTAidpkD",
  "key9": "24F4kzQKEXCFvxTJJ7gSQS1kvnHhd9aGycwymNR4e8jxzNJZUDvpgtYiscxNUGeGHqnMsz6HNRdQiobFDqthmGXX",
  "key10": "XR8agHcTTBZ1dH6DT9MwVHx2d27TjAj9P9xqZ8jp8NssssNRJZDXTZJ3D6ndHBiJpzToRjcPkMm5cnMjN53pvFT",
  "key11": "5rm7Rmp8XkK6WNCn33hVhnfdDp7GMWozc4u8S9G8wjy2Ehwqfrv46fKZSn6nEsfyA9dXPL3KKaC4hujLfRjAE2Ln",
  "key12": "2mjjaABwgEoBF29fKT15N17FGGRpXCfesLMpoQSToKaEtoD9MUzxwHjbP4GoLmLsCMbD3TKrw3bSKgAiCo7r8hQv",
  "key13": "4GTkFJ2sz7it2GgQffKhyugPMvDRrvcBaBCrZ1vxw4d52h8ZG2qF9nDp58h8JguFrH6ER7kXyfE5ESnJVRUpZewQ",
  "key14": "3pcBpCLdcYCCT87v8pUdGpmvevVH1kDUqBnV1X1xrFVifSUw63PYLHUB7s2WAMHs9KphqhcVqg72ajfBh6GFNkAb",
  "key15": "2J7xQni88EWKpGDTQH5EvSHmPWap6Yo3YCAj6FwsfHpm8nfj7YuB9csBFdWiqj2k8Y51bQrL7dYTM5WtcDzQLeJT",
  "key16": "5gPQigBUVza9omoGAdHo4uHyqaDaGFg68aKWnyoKjvkqWK5qvHzTkKf9wNRBuKih9WrtGhbdzd3PdvWr8fUKq9Bd",
  "key17": "5qF6GZXsiHs4wmy2iyqFzUtCvB2SvXvpywCsyreXeMrFuJsuRpVaZVBg3smKzXckk9gGrXp27Gmv4sXskAKbrbE4",
  "key18": "4ftWZ1Sn3RA7ejssJt9i41t8wVBEM3HFLqGNfV66CQ11unuKww7pujDMmmayBEbQNqNXC45musUXWB2s63RMaBe1",
  "key19": "2XLsxYuGy5dynXhfzzxCnETc8y5dC69czh8CvXrxi6dMNWAyo5MfimV7eiBQUPfjmmrs4TPZvGfLofTfRaxkmepy",
  "key20": "2e831VafCsA9xLL4J2139JnubZTCAHEfgXWo5GfCwCC7i3m8S39eDV6BnftKM5vtK1bSK8zNnwaNDvvVWPp7ESeN",
  "key21": "4ELiS42cCosf3NfSoocmmM9keXBVMSSQFA2MbeRKrXk7cLNAzTQqAtVQPx8svztb81oMAciyGZyvZJ4iPqAZyWn3",
  "key22": "5vGcVNbaUbG3DPmya6TmSzDTE6cSjYR9oGJ24TFBpsNnqWc345AG5TaEouhRPexE9poVeQQcs5aMMvaD96mjfuM",
  "key23": "2HfdbF3ubXd5jEvqzgyMrb6zmPbPZH9L1k5CnVnDeHpGQ3QwKd2v7nAa6PxAum3mawQMX3b5388NYLwH1on54xeW",
  "key24": "4ssGcpNaQKZH5roGTKXvtV2UhPjM8eKtvSyi4rBC27cKRoNzvJ5HZpAPWDsNyiU3YBxPnfq1tyTsHp77nmZCzqt1",
  "key25": "MdVLWczv62Po1CSwqyudarWLBEyTq3U9UfFbA9uv89V6a7xWgFfSpZNkCuN6dNCGUez7MgWvb2Nu6NyEQm2mCb9",
  "key26": "5RvMr1wZU5sTbkUQseH5c11ocqkswfTLaZydvVtXKtJw2JcWugGWfAPFhRe7GdyiJ2NeBpojC11koVMUG5vtE4dm"
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
