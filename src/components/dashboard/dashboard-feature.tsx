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
    "5JLG6euY6d3drBguNYzAxC828MpnYVEwCgeZP5VFbfEUw2t9XhGphZm2AMxRAahWvzBSo2UgvtDHzBUqCSiYGFzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fmg6En5c9Abi2zSMEoBwzRn8JYKKLcnsVrngPrZbnu5kbyJmWhrGvhCEH2BUN2V3mMFgK5cRGmFJxyMLsppRvYP",
  "key1": "4Wp5quspFDHLVziEKXV7LA8S4zywpzRQ1SYBapZG2LtEgPy8nUgBxk7vz2rLSJ5ioYAeUrXeMJ4bjCNsdwGVBEPG",
  "key2": "2kTTCCJsoP2uMywTSFSkDz6eqVwdVE7aezCqaWZ7PxFGATa5fbEHZr6z6aSNQWzaxBwDSTSE5HtWJQApKnuNzjQ1",
  "key3": "4KDYxzbo92ems5ALsk71vDu8GEwRFfyKF2a5nKwKdU52TVuFmdRZUEg7TH6wAfMJRCNtaSehFcxEazaFmMLxXcCf",
  "key4": "3qVRVLcZwMTkudJuowBLT7XD8GiXbdkGPjA54RBxPhkfZL8vEGS3cZbR5wpomgywyE49eSS5c78nc647SYz2wQ1H",
  "key5": "3mVc1NH4m6kM5b4XdE8qMfD22YAV97dXjjT2bzU5fHJHJWioL7ReqCZ7rV1Prg5MuxASaV4AbfACxsfZWac2Y3F2",
  "key6": "58fHriEgfX3Evmju5urVmNhHdWVsze9rz7c7WFPWoNF7Vrk2dzMjf4KiMuSLZ2yGnqVTbj5ggVNEhPqN4YCJc7mP",
  "key7": "4yS6ZEXs6wVgoiWf9NDAEkE8x8X31W3D22CNptghGow5CHi7cRfr1VdgDAM5DnTt3AoaS26vNFqC2PNNokK7x4bc",
  "key8": "57jJNuF9fgyMZ7GwzYjA4wA9f8PRgCkcys2eatPbukBAE6PYuEfV6CULCKgsaNmWyqxvpv72LZDEn37TvVafF2n5",
  "key9": "24dRshJBDc45yRxLE74AJkewVK1wEjwfY5LSH2q6fXtHA9tWE627HuVKt2aukyy6q9FCAZUpR4cqgw8Ne6Kb5DbM",
  "key10": "4mrCmpJjAX62U8cbJWyF5DoYQuRCBdN8KSJJULDn4cPmdTMTnjA1KqzGKzVHajLYF2MVY9kxhPCXLzAM6pFBngRj",
  "key11": "26imYueRxMt4AHChaPS1va38b8HpZpxkCm1xR9BoVMt2c6VbAxGSS8Yq1NaSLhwLizFKHMmznyA2ZXhmx251c4jk",
  "key12": "4mGjnUpf2aW6ETzL1pXUbDh67UNrYsNZMyJv5wVRyLGsC6YnL4qd73FnFx8N6aDzwCxhYxwJ9Pa35WovU7JbZ9j4",
  "key13": "4oXBDUrjGzfszg89rbEsVMby9P4poLBUHH2Mgq59jrnwYk9j3vphShymRBRh9kxJR9AydMVTzHReYBtjgJMET6yy",
  "key14": "2NebSwbP6zGCKj4quqvZ6Pztm4kJFk6o9D7GsqZhLmN69W6XgHwisXK4HFa66hebjFR6haP24PgAMvxiNjmdsSz6",
  "key15": "4Dj71LfgeVNr43rzPsB46MBgR3U85aERzQ6B65fhgCnjnYTPvgaEkutNEQA6e2UdQzEFsdfn3366U4GaEpkuChSe",
  "key16": "39gJ8CiG6AZsHrtFfGFpUicvAa1QVuHTbYL338Bq286pvc2LdwpEGQt5WYJV8qbFxc3vXBLe1DqpxifH4AwxvQpn",
  "key17": "2LEeoNjdtjJCPm11L6CwwHxTL55ACP8brLgmSbyVAfgjbmQCmuJ2kUursLQLeAjBjTeycspLJUtMQ6ggryeQX6x7",
  "key18": "G3vZKJyrjv8qvL13oSXkkyFEEucLyg6puj5SkccHsNjEf4qaLKNRoeCrcQWEGbQDQSgNqiKzya8f4SFJnoHV9J7",
  "key19": "43Dadb8K6sYT4znphpo74wxTPcnWUv31S1qLd7VXixRVCxL2zf8iAb79LXNwYsgmJSuDyR9dLbmWAs71kPGW49yq",
  "key20": "4gpfoxpg8nJtdFhxyeofxsFC6EtX4y9hXRRMoEggUFVkx8eXK4HpR2aMbJPFudNeD9Ad854Hyrgf6tKgVruQAdP4",
  "key21": "2Fm2Q35cNoVPdHnwrVGhBBhsnx7aENWKqqKKT9qnPiz6GxaWUdzRuuufJ87HXkEN5q3vpXEVZteCvmsTSw1krqz3",
  "key22": "jWCSpHPnLgSABgJvN8N79CUeSbm5vRJK2EGFN26TzSJ3LUJwySUbyyMsSkqXSekumMFCaBeo19nbcsR5SBQvq6Y",
  "key23": "5Q9QAa1rnquNM5DCnmQAEVDuokJH3bt9hq1dvd8Lfhx3pd51sQeiG9TAhuvF8p6ionPkGRBoh7RctJLYRKgjYfAq",
  "key24": "PQGXEEqkkJQhNrDGpV9wfPjyPqyNVoi56DAXawWFp7YdyfuCDbEVmNfFJHeqcxDWw65XBDJfKYbuQ4gcwxh7Yc5",
  "key25": "5C26TT2Dae2o68ZBjswPxtAmavbQgWmMYjAxb6pwN4WXr8z9iAdJ4jXrHzhhcHMF7Bch51rGbJ7kYuSf1G6MSJFm",
  "key26": "xduRGZqGdWSEc12hr9VX11Fv5ZFrc7Fc45Ny3hLi9wDEtPMLJdTv4iB6nmAwFKmgPbm4Gb4CaTxxvxrxybR4r6D",
  "key27": "611ijboAUwK4bXX9yNoTbNNF5wSxa1kTKM7AofMpCybJYyhzoL5QNv5RLuLLwXkxY8EX6hRsd9RFvFDqdXyDfMxN",
  "key28": "4KcQ3GgozotVNYCpyRrj7jZ3xgbztpYCs6MNn7CaUQMU6pE9h3nzjTJQ56o8NVbcHBDWvnPFMz8vxHTARcrF9T2y",
  "key29": "4R8ywkHnMjnJdcrpwDbxxGDGTsdV3S58CwZrNoWWaCRR6NkH8BSeWXN9cfAVGqxqe6gtWjCqwyzpQsUZ7R4b5M4H",
  "key30": "3af7DSzYg9FPGDa8MUL1An9J6PJoYNx5fPSLoCAkiPK5atJcZxeFZFwSzMBXjYNtwn14KGnGu7QjQzrZjs7Uau8c",
  "key31": "3AkzUzNdu7B8K2f4hyhfexmFAj68AJkWme7hdBD1o3WQyaGjPQu62fLNSRCLfqcwUXp9uHTAbgTGs2k5oYvuUoJB",
  "key32": "2cDzKdNsPvbDxxvLZg2dNy7UmJZiaD6t4FM5Tcqu8vqCCLZSmLbHga3PACYF4pLo4GsFZcusRkthyriv9KB2vTMy",
  "key33": "4zwTfLLzVGF5C9krNNCAhjUX6z22ojm9qERrMW4gxJTYxVpDYpxnF7i5Lr5SLboovUqrrtHjyZdGtsFoHgvu5NQp"
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
