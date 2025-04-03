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
    "2PFJ7rp8QMiqcK9rdbGAqg7Qg9htHWTEHuvkktDUpYgNN9tvJRJYTbFdZ25jBGSB8be3MbUqDzUgsJy2Bc1fz1HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ZNXeCfj3nn9YqqCByhkwUBS1ReFTAujPkfDP3wfb3w9rraqwp7WQwsbLJsHTpWDNNVgKcdYBQ1HYc2BFcbcBm4",
  "key1": "52JDPgmGzFzRrFp6MiUGQmuEi7sG7yFXd95FR1zGk56cNHSNKMLTMeZMdCRaqbJ8Eh6atRp1d85aAr8rm7pvXarK",
  "key2": "4HxwJRez1Yn7unAzGwHR2gVwJN3983zLiLSpLQ73GGMmh4qeHqMdAy9QpLmf1oZXu3VzqQoMU94CWA7B6iHKeCJN",
  "key3": "5Rnc5vXzYZm4n8LBbBdMXWN8uUx4QAVMmior14NbHMRztvZ2V7oGmMc1Gwqv4v6FySXaA9kHKgGgaYxouRtn4Scw",
  "key4": "57sBAMpJ35CmMYNKoBcmcfHkyYHDSaWeWwU2f3SD9s8BpeLtLiarznLJUHKRtRX2gjRAAn3waJD34RqaauAdYFUx",
  "key5": "5BYqyc1UH92iTVLSb1g6QZeUSJwMe6sgNnNQtjLaQjESGK8VX5MYNqgjg1NGYzRkzLgJumMT8YeUgJtVtdhw1w22",
  "key6": "23iVufzWEiJqx84gKp8bVpy61yQBAEC8D46p5b5RKApCiWVvzht1A8NJNiLbxrYWSh3ztvT97PfrHjRyGAivg2JA",
  "key7": "2179T2aB8Jma2Terausk7aAsR6pVjtNzqHK7hycC12h1gXL33fuGBfd1xnJWquM9V2hCi1Lh5Epcqvwxpr88FH4K",
  "key8": "5gTaHmySEvD53XMRkKAXT2GUigx7Wtgi2nFsiQYLShwVQaWVD1f8zDpp7XTbPrLGCv4FsBviKRrcMvXtiYPcDPuR",
  "key9": "MfVwbq5SYjifYXL7YSFL8JmXJo1HuYAfNeKyJRVC6PYX3oK9EHxx75mmjJExZED6ZTnWftrykN9ZyCVXELySPEe",
  "key10": "J6kT6CphVPqiitNC4qtEtLauD2AREqgJbCKdeMPdSfYfxPwCi8YL495othaU1tQCjzrAzjQ3XApJ2mb7q75kQkH",
  "key11": "ZcTbUgnbaDKBUHptLQwH5NGEm2BrzrF1P2LgVvW2Wc4njyu6snnapx5LuEcSEsmZrE7CWpBT7puv2xN6SPbouGJ",
  "key12": "3RcGx7SLAYHUXFohRCktoARqVRD7h2pzNc544zgwaDxQPhgCA7DrYuEXVmemV54452ydGhf9DDBhQQo9HAMPn7xd",
  "key13": "3hjBtmx8H6oy8urFVrHfyrLjYzVTwvZuhZGDxogzipNdzM9WEetxtphxzhLP1iXvegq9dcPmEPJZzHz1ebpxHhXo",
  "key14": "4BV3eFhG1TMYGTgz3GMzxhpjZN57VJkWLyaW1Q2bEqAjHzoSbbbejhEMHDzHJmzZdLbs3jdPL4jy2QQ9afkhYD8Y",
  "key15": "5zUH75J7zqEaPzhmBB9EGjQJfiGs1tjE251GBVNNwdHErqsT8H5roogZHT4fbHssQrVQ6mfdcSUtWyRZqG2S7GPG",
  "key16": "34144XxQEXKEX7ReDruXE72gpsZXd3uombf87a4VJArR2EwPiiTpfEFVNZFnbgPFbdNcLsPGTH8tvFXd3QVDtZAe",
  "key17": "2aNqG9ZEdQQRQHgd5XqYVDjUDsuSUmSF3rNSSonM4EjHuJoRuqbmwyXjmZdq9o23ibPfqBHM3N2kZUovU5pVoaDS",
  "key18": "2Qdu4dXZHEUJ3QNnS6WmUN4RzXq6UHBYCKqi5vfJUYkqffDuPxqHb1SPtf6k4SSZY9BCy9e8T3AzHzX8bpfa3pFk",
  "key19": "5jz7Z7CXYo4HxsyRbmG4jMqGQfF8FF8mcXwqnQHGycSK8rzh7MgxnWUExpxjGU3kk3RM76Y25nAL1kj9H9raCbiM",
  "key20": "4qq7jRo2zcGJyehyiEpYwjEpe8UksHvxgLBBwTeNnHqdpSCdGULJojt5HYLmSsYZ2U7YcNNXcfFqZHCFcpiMvyY2",
  "key21": "FzJLY4HxB954RV2ebinbFPHtk9csCqQzhPF3CbVu6acRxtnaSTBZpWexqrLphn7bmgP9ERiFoynujvQxen2mhqP",
  "key22": "X8rNhLtQzY83HjFAkkPVcSwJKRcDvjRDQteWxrZBmeRXaV5PZbBQgw9Jpprq2dYDKRKB45t9FwTBRMuvhWg4gJL",
  "key23": "UE9dHKmzD1zBNM81TCZ8o48Y8i5tj7NAbzBbB5vi8bGbtZwAptFmKQv9SyVEtRJ3k1WnzHGvUvH4kiCGmuYyivW",
  "key24": "3LaN2nnhw1kmrPuWbyTjGCdnpVyJrtFY1a79N7S4e6YAe5gL1Bs3mTrUwDbQ8yzFKjFxghHE3NP8Lv8jNN2ervbQ",
  "key25": "5gZdPC4nv64kPq9SjPtysfNahZWGGmrN1Xpcy6EpovGFnqVxJuEzffkjZNNpZceFnWB9GL2MbWJbZ7DYCtMsj7zT",
  "key26": "45QnMEhT3Db2jf56a3NdASZk9uaqJmpSoB9NiQ6ojjpR98hUxWACqpZuikYYSWy1HQsTyuqsm5xLvqTxVFs9A1fg",
  "key27": "5p7pSJVvow1jSKeA4SC9NyFLqwwWBnBsyXVgbJaJQHEaNt7A381LYS4gxAVhJmXrwzzj7FJgqT9cM5gcaYu7MrHy",
  "key28": "576gZHky5A4v1DY5jKATwRgTKJywPj73UbzYjpqoqL9gMSuGLQuRomgqR5VAs5E4ioq754tarRm4VioHEsmbDSNf"
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
