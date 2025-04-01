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
    "f9YyG5vd7Y36DdJ2cwhz9BcYJDkpaLMDPcEpbd2nUAzdAPpinugWwniBt3E8XNbyQ9bHot7uqkHApzyNcuX4DR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3TGp7rHa2seew4tM2SX1E9DjXPXkoXxBaqLrN3fhCE37GPQSDFHd9P4oqwjMHdYsdQ8taaEsmJFNqQgQZjCocL",
  "key1": "5zzxYmCkJA893gZheay8rWAPf3bKgUL2NqTESPR1GK2J597rCdxVbTXjsGRgiJbvu2gSgqULnBTfw6rgJu5Dcd3k",
  "key2": "4txVksTYBcu3jyVhXE2dw86tTna8P6iFzw7hWteArmZRNciXG7mJhqCfwTi6q2Mgkd41abwmaUNegfBEMCg8DZCS",
  "key3": "EEN3rLboZSEkT3bJkTUftE6GaQh67KT1i5xCrN8vF6Lkt23qxYq3pJbUGgPsN6ZFjCp5Y29Z4BD9Nc3Zx4M2NGK",
  "key4": "5eqztdgHNqUWRpAJxrSCNvybahAKPk6sXFvcT8c8finjzFu69jKCXSPJSdC2j6T6537dTEPzezbVTMfEy4jTnVM3",
  "key5": "38qy4hjoc3sBWRjzDJjCKys6GUVkqwKwBpKzhJzza9DYnshWKgHfsbrLkSmz6ZvdmmrFsQaZfwtgtUZEZWcWtnHA",
  "key6": "3T3KuH3EQfsVb423pb5Nq3D2Xwxw9D8c6ftkjCqadVe98noKdj1wm9Za4KZPu386HvpEmgLwyZiTg6v6R56EXQ38",
  "key7": "4Mn3tjbR3bAy9o8V8i8UM7T2krERWXAHXdCsPTjKu6M7HzSWe6cYPyYi8Sg1no2ScnSjSzqEKh5ggtCUq7zcPHcr",
  "key8": "5PG6j4XCG9Gvr2od1rwUKUPKcDVv85UugbNmRKwCKEFBHnA5GfhkTbfpW5zHBX57GqmDhPHtuijJxdDbK1fkNhL5",
  "key9": "5cYQNhsesoRJKdpg8fkTyUZix7ut9PUX1r2BfWLxhFNXa4ZkfYWPjHYiXLp26NtQcvuxjMuFv9GpVwMw5hDxws1U",
  "key10": "55UG7RLFyfCdAM8zLJTuWut27PqWwqJ5HuWKe9bA6c6euw1roDSFR79PbxjLMjyFNAfw3kDWuVXc4hKNWCwNmWxb",
  "key11": "5TqqPhD3CCW6yQ4Qpwa9Y761rQJYGvNh1f1s6biUs4X8hfaNX3C79LAr9Ki4h7q2Gtk6VrV1hjSRnJKQinbhjBBL",
  "key12": "2zyFeKxgzKTetXLumZ1Kmu91vfgWrWLK69yxd8RAJkgjBn367yJFuZY475N3L9UQEPAYQQNKd3y8CQt22dJpjQN2",
  "key13": "4n6uws7FpJEZUrs9dfyCicmkoVW5VcXwxh7SZCAEwGCMSuxscb8MrR2UCFhNZ38Y1uzNHGqwomYUg9ZMnHU7wWZv",
  "key14": "a2DeXF3Zrs21mKUVoKy9jFArxHhgtEQAGe1Y4BA47E5yw6Rww3BDC6bDrA6msLjduiDzvxkmFtfjTVrey2tHjkX",
  "key15": "26sHdFGsyjoTEirrdeohx7LfrvGNTnA6QC3GXe8XFMr1K2XxEeh4fRo3Pz616iVHHZZKNP2Lk9xmdENADpu35bAj",
  "key16": "2oh1zPxTLn9K89Fey6bRfEdCosxhZqvybGzCMar1BqmY6efGSneqcfZRNAeZYQf6g8V1YXYDojBvJ3hByafBonqu",
  "key17": "RfYhdj8nYqKgagPBNqJyr1J5nLQ6Cx5HJQX9iSWKDZfMQfxAWTebYky9j2ynW2ye3HFmzDGpiNVBv5nuRDRXu6t",
  "key18": "5hpW4PCid5aictyAcnBLMdHDRe8sGgQVcWchX8r8iBUdse42192cskKEKTpVRm127UjRxS1x4XLSZqhu12zdNWtz",
  "key19": "5iih73q1sRTqqg9YppLaYaDXHwj1X6xxreXUy9PAg1jufvEGc1yJZjZqv5Mm3AJGD6D7ySm7mjbVuC1dgqgnKo4G",
  "key20": "a7Vqc7TJMMPjcxoK35hUPstShTzoKuuwtGJ6BJkrdedqxXyi5vUStKCwAAJDdrMn5umNaf1gE38CCQBdWUa4Mpz",
  "key21": "3Wv4T8ytVA9bj6kbNuDTGsnbezCwYZh5i5B8mYJzKjZgSyNVsGw6oVNuss1t2dZv94Tad92HsBD4SQt7kGQFhDR7",
  "key22": "22R5wcKK1ujYJRzNJKikcHJFB5WrQKfkqVvRQGU8wviHNM3YSwKRPk5MsUoAzeCnWp3VGAF1BUJP8CjRdZckgRQp",
  "key23": "3nD31coionKnteFUD3DvJ7gwkpxPrrKDVNzYaa9XvnDEwBQUsxrrTek4mYkZz1xnkARHrJZaYEVsGRogxdbEJDyc",
  "key24": "55dkEEadM7WfNnAXH3gpGgAe5VGXkH26yJyUpP9PnGMbEgvwnhXwSGivmM19rJLemYiHDe6Mqf6RpqrwL3pgV9YL",
  "key25": "2h2GBDQy2ZuC7S9pfBYe5GEwo3ReZAoSDTaTwviUwFHcumKyE3SmfSEAP5V4AQgBLAbgtJ9zwKNcEudAd79ju3KH",
  "key26": "51iVUiRmawq7sbA5NX8kwVLtJWNdh5Bvd6V6QryMysgYSeA4wjDzv5fpFpb7HxApNSVdYwCpKoMGxoUDm1AvxN1i",
  "key27": "2st94P4omJ2e9HB5tEpCV4PChYc6AKMiPWY9RfdjmcjmoxuME9EokUXo8ecg9oySyJgwC7GYWhLsvWGGmVrR2PFS",
  "key28": "3Wbtmb7FRJoV4RF6JVsmdqjbfbDsheV37cgbBSJtTBuNeATmoRVf1iksP9hBzwNSNbU4yo7779a2u8aTrvZivj7C"
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
