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
    "4xT7dMVAd1Hcxv359Vj5xzRP4TEaFS4ZHo79vqitDK7p4dL3S66rCE8amYg3YHa4dLwoeCdQW24m8NG3EKiUnJVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28zCoY5TdooXbEEpYEHkCQCp3NqYGq9KDEBZZZHsN64m47yWzDrauvTDMui6MCLk4tYdF8TgDaQjd13osnLJG4qK",
  "key1": "Aq9K2qZK3L6wf564AjFHjV2fLYRzVpwhiipZy1nw2fUstKZgLefpJPnQq7TqHP17jq1kJXJjSdy8ynT1E3FvGwF",
  "key2": "2ocgXgP5zLRmdKBqeiGTuu3JoKwpr6QikqAiWQjVKDSHRE9EtvvC8azLKBgW1mGXtiPJvZmuiKaAXQ2VddZE2GfA",
  "key3": "3QUa9ucrW8MiKnD4wWFGVcUFHzKf26DUaZQVaTTMuQbN2z8og1r7izpkohEJpxjKu13EipobF6JRdiTmgrYH4wd7",
  "key4": "2MsHur2TvJEsAx2ApxC1faKK1ieuaRVuvbeEHAJFpcdPCGko88K1nYddBBgksuBSRFXx1qXa3m2rvqcuHYyM7wxw",
  "key5": "2d7RSeHptXqeMsQ3CrXPC5eSuvVpBz52Q2CHhE8kFzWBb4c2awxzHkmfnydg1PS3DwZqaqKSbp3WddqeEr52v5GT",
  "key6": "39vdi5kqHEefXNodx7jqnWXcFrgPUNJTmw4mbM3J2EiR9WrCL6JKfjvj2pKd6M2654VWGfm6DTPrnzXT3HqfWHeA",
  "key7": "4W42VVad7tFy7YQ8f3AaQZdCgNJ1VSCBh2eWCAd4kKLK1Ez61jpMwE52hyufN5kWcpNkU2AoW7P5LrtSoDLpvRj4",
  "key8": "5X4MzXXtsJ2pXmtNCYzK4FpGRsnR2HEMg95NUJGSFZqZzfSNPkRG9ko995gRJsz4cV7Zrs3uK6Qfboryh4QqTjMi",
  "key9": "gXqwKspanSjo8zYfXr1ZyQmvpCF4us8sRseuhaKjgQSFsKfbFLW9jN1UqpaajvwEZ8XzG9Ym9vhbPuCKYNC9cgM",
  "key10": "3nvAUJzqqmPkMr94NaypC3xxEFZJySJu1t5NTquVFEyHuUwST17tuC5bFMpqB1hkU2fEHqnEEJjY5c57v8eirPX6",
  "key11": "65xrAdUBHV4zyco8ADgmsB4aRKwuwYvHVMWgLqqreDnh9JSexDmnbZq4QidrTHBgYEGRBhwBcofHyu9NpCuH9KkL",
  "key12": "2nyBxY1KQRLZg3MWcLLEHbrmsyTn3jXX33DkhVc1ig8ybXxKuVMBpuH2vtYew3L7o3FxT7dLnTKGue8po2wg3BGw",
  "key13": "3fQTcA1wUvgLTRy41eZXmVeWsfUKYUZfUh2fX6fqFWGTewGHL9MtJvJ6ntsTpsNSqXWA6pP4uRidKHF2kkrqdRvB",
  "key14": "46CZXHgpGyqrZ7iTYZcPYWdzLx12aznrQfCpD398p8t5T984eeq2fMn3bMPqTBYTFQBkUxkcorQji8Q63F4fahuQ",
  "key15": "3gcq3Sg5A6nwVgnBj1dvnGLFsVsFT2LjPHqeCJAtUhct5GbaxevTsgFXQ3B6fmJsdP4xg65Ywt5WMM5hgr2Taj6b",
  "key16": "2acjixi1PSDW7m44qBtp5FPFDmbbsbammqwyLoHsei33dGLEsxUBQnoFK1dFe6NFwpqJumyJxMdTWXRA1bCBuyJt",
  "key17": "5XhyS7myTHTDuotGLFr2vDXP6SWYDqpjDHovhW17D7qS7FAkRjnH6hHCgSgJkLvVsiUgSmyFycL2ZBmNXdnxYAc9",
  "key18": "MoZdzxu8EfqEn5A1CMHxpVH3nWtVv9uHR3Bu2gSoTXxvivKBCqvrVS9FFFuP5gSWAws5ZKfwpLeHeGgKJJqd9X9",
  "key19": "2eeq3aKQ1WLknPDuW7QAWsGsuN6ufjviEBVUTNRYkEdjirDDr2NzKjxDoeuQSgZddpaYXaB9t2nbqzftTmJEvtTT",
  "key20": "3XE2WV1gHDrZd6iCLxNT6aviSU4ysbvzhf24NbGXhfg6o61MuNdFK7bwD5CHD1HH5maGLx7RSeupugvNpiyTyef3",
  "key21": "27AD4GdeFd4wN2qmx5FLWHRqu4bmEwm5zoy481B4pB8MzckkVgFJKNh2APn3okqrsQDWLXRdHoi9MPePJ3FJFW5Y",
  "key22": "3VsosckDiDYCLT4sAN7HAYwpN8QPe5TeioV88zvMw1UiXJ1C6fK8S4WnFrZs3Cru8ZEh2PaPkqc38Sk9c86LQvP5",
  "key23": "uT12KwpNMSvVrkcmQRVKz2x97oUetp5VxS71omeT5Wtar7FMSLzFgEYks258ycQWZ1TinWvmaGFyfW7qzZ8vrUb",
  "key24": "4Bd4KXZqq73GeCPimqRjyP5LHKLnW9gDMzxpGTU4M8fmYQ2fWBa88kuVjopMgehKwZS6yTNu442fR7orS759u6ha",
  "key25": "wtoNm9AzhxWjPsG4XShewrX9v3aAWvAF7s5VKGDXr299PzRnzWWLQkS2MJjgEiAJJcCx6UnAkmFow8Ypn2jSE7c",
  "key26": "5mKhoiWW8TutLiUYB9ZGRwFXcnAhewyavecRfRm4pHhGhHTxnHaXKsFpm88cJXp1gDL35iumyJ3uzMdSAp5AonTs",
  "key27": "y48wZ1bnUFwigFHnoSHM9tBEyavzC3C5LVonFYQ5BF53Y9eZsLvDhr43e5L88uugJUPPcPGHptrDqzUEryHU9Uc",
  "key28": "mpMyFpNuWmb33UNGQ5LacU5y7tTnUpaDZtHmUH97bzTznnHhoenf1beS24M1ecm17kvwdXGt14rx3Yv56WuZBRC"
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
