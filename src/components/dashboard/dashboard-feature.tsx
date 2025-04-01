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
    "3331LJtrJDSskBxs4XK5nKf7SjkgpVnFcMGcabWqXyrUd6BtVph629UEpLt5UgBvTS82arkpZRuag8p6KZPys5pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzVR6bVvEGnvjusjEkMDZrW67vjQDooDiwuvvQSwMYxRz5p3eBmBF6uNYWxrT4CMEwsQXM28pQYneVpcjs8d4Z8",
  "key1": "sc78twMR9GcdKJoHPxqhWsvfjzmqUwP8Xw8zQXAfevo2NmN4XYNkZ4tXQpfhk4YLz78W74yUtSH3RXSY9kxqoKX",
  "key2": "oyLnBEBurwgKFqJ7xM8956u96Z2qeqAKkZozP8qCo9sCBKnZaAGNuLCdwUKeSh6iJYSE2yXLyTKkWJo2tFEH9hA",
  "key3": "5YvbUq5ffuPmUxWUP9c9Z3kr8FK6YhZhPWdCjtEE7MrLu3UAX5Rfdrdn7YANk8VJLMEz1BiJECRnh4RsuJxK9mi6",
  "key4": "cV4nNiYAordCemwEngVijnxQYfr5YMpymJwyutojUr82nifu4fxwtF1bBCEW7auMt5XeB7nhE8saCorhVCXj2M6",
  "key5": "5WD2YH3fXW1YoN1hrCVZax7Yg4smKJeFPW8C85w1R4yhXLAqCqgrzkarpwrrYywHjLDAw64mvu1nWu8PEDkn65xe",
  "key6": "447sxKYcXdkauQSv19Gyq2VpGCiBcykAaMmZyDGwdmVNfXD2nUkLRdVTrDG7ZKancmg28wNRkDgjWW7vLXHUxWUo",
  "key7": "tES4hUVMuexWYQ2Caq8KPUjEyb8JUVVK8Q6geWfg1jGUfTXEtknXdV1uEqL95DQfNeAY1XKfQkvhxwnavJeqUi3",
  "key8": "5oSBKmVrLHGC7C4ycQQ8y9KuG41bEnXJiFym3fyY7jThCXFjeX7qzv1eZRug1xDd9ZzVM3osCoYuqF4stc3tBeYg",
  "key9": "5Xiw84RWkeeyVni7Pm3Rn9BzmGvaaKQdFKm4sxywa8robYvhMKoGw7SQbMd6CC8WHFjiLuN52DPzWrGN8wixNKwc",
  "key10": "3ZdAuuL7F3sGZFyn2SN8ueFMuzht3Bcb9ANnDrPgGKNqVwoyM6RxTJVXWdVnaCVkkCLWFRbtdDAyHgtaHGKhHYna",
  "key11": "2UyLZdQgwBuLVjjKLjJugk7eri4RoLbhUMQZHHdydn11bBWnAuesGQdJyWSHFzUV4zLWjbjAuVGDPe2YzDbzEEQM",
  "key12": "5JVDvqpNgR2CZFSK3cnEKpEh329jBxqCyL1DiLc48QZdL8xSaYzWEuvXMCLgYCjrggZnSBWJ8rZGGTAQ6EiiY1UU",
  "key13": "J1Kx3rudRHkhh8H4fMDiLQmQs3APH31v7cFueB1tmPsPSkn1BaEkShTpVaNHFigqVC8x1q72SuAQte9kEVihej5",
  "key14": "oU8JSWmWCZTqTT4UZNYTQZNgzTu3qU8y7ztavLNr6ty7W7vENBUTKRAEXVMvPry3PFKwn7GQVWyrU2wzgNozNzx",
  "key15": "HwJHNW3YFb4FnmyWcx8w97hiGfWPDx72NbM4ANnFX4KCbJchcpmpg7eWjrtRDynd65SWPhnEwoAJQLEAFAVFCQN",
  "key16": "9MNoNeCi8WLf9UJLaFKztiaBCtSqPMGvvbSpz3Xa6mwN4JcayCAsbaZbLYXp3o7DYuF4TAZygm5v9fQmyg2khmT",
  "key17": "3vZrXUSpsTnUmWwFJrzKpoHjMDUjRL9L7Lj4R2VhjeSBZ99T8seHoqcBdUQF2qmJwSX1gXAiKZQDKofG4jVRQXj2",
  "key18": "2Ah9WQ5cRQcCLzsR5Sqy6qtKKBFGjSKNVVEeoJ6DE9X5HjseDSH77uiZNK5kGJCTWXPoX1X7iMAmJcB63ZbzwXPU",
  "key19": "54seRtByjPSE2ekTWCAvZwzKBsJdMDuRmWxtQ5x9YioYedWPipXHSxyPyfXmhD6JN9fpE8eiyWhdejmeuN66cUPT",
  "key20": "5Hq5soAxJSU42MVS8Rkf8Bc3vmcDnNRrTQmdRqZaZwkNaugVKPQTXTKitLntaupLQ5PbJ6b6kiNjgLZxpsYhNmaG",
  "key21": "5BGmjaJrHop631MRsJhHGPW1KjT4UYQiTiyKF5K4FYdUKyHRRd8qXE2uUW95kPqXq5gUJA2hSSnkZwTKRYr9zj3E",
  "key22": "4wUcDiWvW8hcY6rixLn6hsDydXBZCfU6Qme9NXpFa51B4Hx9AkaqKoEqVXHq4JWU1kqVEWvykrxbGrAasDQNrBN4",
  "key23": "5UXfAr7LZotNZZEmX6PRFgTnHAzKBe6L2UNVoh3wxNNPyxGga2U1nLSiFza81YZeVFSoQQXnt1B85G4DjtQHYCHL",
  "key24": "4fNaxDNroc7NmyhRRTmTSFtyA4LKE4PDdzQm2fUuEssTiTiHCX5e63xwrvGcaFW95Csqqc5YcSrFrHLwpm7jVmWZ",
  "key25": "sYfiebMCs1eKoE8Y6Uphpg4fyv78Kz3BvqJSiuZDE777GVLAXKf8an4Yv1Z3aGqZRhXe2FqZ9zG5DkVcvk84dnx",
  "key26": "nsPMzuAGDhBu2GQeasmMboKmcHEDgp4w9Yz2ETsv3fXeEb2DbAVyUuaLQ9YfAqz7oL1a4c7ks1v4zEENaS9HqPL"
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
