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
    "35FwKJPAHF6MRX8AZZiYzPxaGr8zcPH2D2YCqPPe9Zr5XiqmY9rqinfYhC7zgj1mSPnW3EwRqweTeawGzMTtnng9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEemD94JhNmFDUhTmbedHzH4TBbRPQ5GTPX9MiKG1annGUtsEnaPVdGrXj2wRHxQw1nqkWbf7L4TiCy3Uazp2Q9",
  "key1": "4gZH4iUcVpdVoqzmaZi2P6j7Nbd8mTGGXMkp9ekRnfNboDneTQ5NEAGdepveYQQMR1XUpT1xiuTzEMjZJvUWjXgh",
  "key2": "3MpQiFHNoX1sZwjp5n9TVRNg4xM3jYc5ugBjdHVQxrP3HCM1HMAtHRHKUDyaNJZej7qw6K7epWP4jMAuFLEx3xVx",
  "key3": "M76TPKZGUzTKxzFXhY6i7ZEsyBHpMpgMRjkSJtEUh3V4W2m9JsSvy9Q9oFPa4ynH1WsFPtfc8eHEvJaBoF7oBZw",
  "key4": "3e3DJmQWpG6F14ViGvDejChrSM6oNGQmTchZEwGn1amqBBe6b6ZxYVhtgMG1gLKkAAMLDGVojNh6CSXbPoqxRjAP",
  "key5": "4UxfXuT3HaapN8EpknWc7Xpaj7caeSywkDWyQPozDNYR76mUnZ6wZmeW9TchryJrWXGjJHheN3f5YA7Qb2ZZ6MEi",
  "key6": "59tb2JkRy7FcAjmiawrAy68R6iGaY7uTQd5mthWY26X4sxFtvKhvBhmkcKLHGG4R4YxZ4134E5MDXBCZYYgnzuAv",
  "key7": "2yjFgi4N68cqYiAUH2wved4zk4s4fjYUgqmtUhTNk6tsDd2MeFcs2LkqBbN4Gx6k1r2ZdmdwZMV9P4aKhTW9sd76",
  "key8": "4vz5nRFv9LuD1JAa823K3A9mn8DeFPjCxfTVv6UGB83UAA3Y1tt7JqUmxv4DHgCsBNtC27Hw4AV6kEweYGYQVmQC",
  "key9": "erkz4Moa8RUtWnuqWsVXspkiAAd49r9Bb8TW7v1Pz1kAv51pWTPQ67naN9CaHpiMZGbwkPTNEqoc86Y7ZnRz7Kh",
  "key10": "2DGjNHT4TdNeLi6sTUL9mkLMbkhH1kRWqg8nxmnrcjEpsVbjXroWZkgS4jiP4QGXhnc8uc7uX4kuYAyPXpka9zMk",
  "key11": "5dpeB9Xy6o15iDTVHceBpm5apsbki1tQrfNR7R7AkL7AxJu14rPSUMQ98wTuLb18WNjra5ha9xfEtioakHKZXibZ",
  "key12": "2rUV2SAS9GwSCoYncukKwiWtVvBDYKXaCQLh1w65XjtWrn67JGdwNSgFR77TkciwD9Y61VCyth3LKjTpkh6seNsi",
  "key13": "3UHRtCUdz4y2nyq98qMRgwwfZs8nQZhYo9NYVCSdx8mLvEJ4Cw8Z3tW44ifZtDeM69gRgkaerqSZhMQg1w4HQQTZ",
  "key14": "661SZSRE6CtBEhmvzb9Wh21E8kn3kvBeGqpkudhNYooGCoUXvhQtykppdvg1WyyDSjjZUXwDuVJ1ghSaC3Sg4D6f",
  "key15": "A4evkFMfSBdPVyw7Qw3MiNhaPkUtQw5x3XMx1gsxrFwabigKmobpjFBPLqDmqsTD9WgU7fVSer6zfcnJ7oViovG",
  "key16": "njvBCZi9DUqtR4CHR4LQP7ebiGSTFnkDZ3r9RQxJQ84p8hjHxxpDRFwpY7JBxpfdUptydrozmKZxxbwgGkrXQcZ",
  "key17": "5Wxy3YgLDjihxmYDNWGPyi1BPbqPEdKXDqzD2rpkEuYAoBi6eovBdQz7u5Mb6Mua6x4R2mCfeqXWrz3MN2eqP7MK",
  "key18": "4hCpvtJxeMbor1PSKgXPheRv2gbPjPocCGgSibBW4ZcxrJhwTzBEkhy4cyh2wkyjnbgtAfjSTWrq6xwFnDHnB7ic",
  "key19": "5Lw8ou5p4jshSV5PsbumQVRarhNU8vw3hmcF2W2Yd8ZaWbStNgkSoNzkd9tSmiYz6XAHdyaC71QpZVpfEDoHkuZ8",
  "key20": "646C5A3QKn2fMUhq6iS1xvQDJZNs7EFK2hyDEhq1ZCh7geY7T1m4myvrpPVAZtnNKVg4MiexAWewP7rpBYeEAPwt",
  "key21": "4jCXyQPmtHSytm34Jcq1H2Wuof9TE4wBrpQJeByiYLr54M51v26tU15sUy1rG9HxcL6B7S9YyxRPyhkkg9az3aMe",
  "key22": "SBFzTGc66wy7MjV8cAZ5PnzMyK2nY9yx2EY6LdSBSiriNByDYgXHeCSgdvE238ANMm82zY5hDBZdv8KYtsavCEh",
  "key23": "wJ5SigcUmbVZ9558W6ZNKwsHu3aiXAyomrt8UEZt8d211uMDHsRhnxbandGN4xWkV12fiZL2tuTdNq6S9AKpiM1",
  "key24": "63GS3mgarFPhkeAyCR3NXTQYfw74T921Wf7AEoAkznCKdTFcR6t8A9kaFWY2nHPokZX2bUh3MhmD8Hvg265zfPPf",
  "key25": "nrhoDg3atVXCRYWN9pe82svowGKvQj2x5DxYB62ArsDUfdm5khYXqZm8G5PTBX9hVDMEnYHeGYU39wizMKS8bev",
  "key26": "4nGUUzTzLTc7KBYMrt1uDtBGMsh2fvmAfDYgFB4aKF8ADQJ92N4GVhS2xksKQVLHmDGzW2YKwAwyw9LaNfd54asR",
  "key27": "2HfWfXAy2bSFYs1zaZaXPYFUYJbuntsvNY2EG3kDy12f5QetxvZ84gPtoNxVfSXjT4V1FMrFFmiZzfWVUY6xnW9M",
  "key28": "5tLH9qVDYJq8Hr5UrXsPLMV1pRt7qMoQ2ajWwyNWyx2ehdohRJoTPqGNsV9FsZsNdkcS5M4fMdnzj5rYcCj4s545",
  "key29": "2afnTjUmodjmBjbQEJa9iTJoG5RBDWHh6CfeKkSmA167CyBrx4yhUHa91NVnGgj56rgh6xzocSQoi1S9r4LpfspX",
  "key30": "3qgL1G5SsN8kaq71X5nEwGKVRMK9ZpSx9CyxdDQC67kTEyX6oaggopsd3VwUu6rCQD5Kf4N8oJm1CJsfJYjFyX5L",
  "key31": "3ydpwJjzyv4mFX9c1Lkv42f4yerAuZjmqnyd831qYyafXZ6ys9hK2bhime9Mg6CBLtgGVQJcpoYei87rNgmnpW6W",
  "key32": "5DjJjZAPzuipuAnJG92p7R8x757rN4yhZC4VbaWAe9YFgG1cqnvMo2YWqVcPBDBXGgEHmMzeKP5Uoik7NE9wCg1T",
  "key33": "4UoZEasiPLTkDZmMAsR3iMACmewNnXJdu4hcxHd2TuhtXBJGXvrnE1c11sUHjgqds2RzXV4PpiJ7UpzaQHXTmfNW",
  "key34": "4tSDA8KpWgfkqVjdsZtwiG4Sj3pxQLVAeP6jReXP5pyVQHYDVtE83LQUqvdXQgrFW8NCUPe3R8SsAB2522W76VaL",
  "key35": "2TxscnCUzQwPVSUQRPGwPoSEM5Jmpa42UaRvihUZTtLzm6zY8wQQKvjWWAW8PVRhkZwf6XtNBKsxFnHucHMq29iw"
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
