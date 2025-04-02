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
    "w4SBe68JWva3WXzHqJ6M361VbWyLqtJ29dECrc4uShkS39Be8FB5oHHetUfLT1QDnNbWvPEDufnuvyWHKeTJ3Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dN6E4sGQA8kEHBziDD26ur42jZpFRCSeiuMcUJnEStSLLZ8W1aVYZ3N21LbvA7opD3ZVe76oXWwzwPHdV2Sdrav",
  "key1": "2gN17Lo4C8YgE7sW9nkPRBuJAYEFffxEZZK1iPqMSqBYByuVGScxLdiFchMFgPYyx8HjA69pgqrajSuXU7YjyeTt",
  "key2": "4mncJhD5Z8Tt8s6S3nobi6rABZE8zgpSaE6MxyRvgRPefYm1wxqx6woS2jLQV48V7Vs6z58fZzWHFkV1EX8m3GpU",
  "key3": "5gaJo5xp5Jw8Cd94r6WKpV962dbmkn6wyuZJBQkJFCWkP7HFrMAhQHNzs5CRtC36RqWYvpKay2bWGP4w15ToQmkB",
  "key4": "yAn9BaFtsFu3GteawtsmqyZ7Pcq7KN7kxJ6NUzERTG56GKAMQT9YsxxacY44BLVqRz4UHui2hdLug43rBRYiQQo",
  "key5": "5xNNeKKXiJrdbkkY7Qh5v2f9G3GEHmzWeHzDVqKB9Xs8KAWC7JBNfvHQqynaukZkhawaYzr1dEmiDcbqYrLxxsEt",
  "key6": "5AHA75caFEg4mYfjR3Sc5TyWrZZgdxGVFEi6aqG6REKF6seNLh32P8cPuAEQBy8KRuShjtE5zRi4hnu5ZLc9a9iJ",
  "key7": "3L89hvoKwZFsNvJusMx4kGBMh3X2vFgpqddCHDBsVZ8y8v4ZcrZn8QX4GmzKd8sQktgGkfZrWFxdgfaeV3FF1yBT",
  "key8": "5FikeVg9pjWhTN5PPhhasJ9fwCn39FoEJYsdZkiPCAzLawVHbZsVFrD3tRZFcgPn2Uagq5ww6nB9edcvYMupLKTV",
  "key9": "5rDCyNnuBLpMXQcFjqjzZinTcpWawB8t6Ro3dTugncYJboBDW4BUDdQ5gbXzwmTpauzn3hfeZfQx5Buq9vy3osfg",
  "key10": "5UAiPyJgUoiN37b3z9SfyN4Y7c2b3Uj4FYX1hWyz9WY9hfmp9GwrnMeVwn4ZRbdvtmVUhq5jtTEAQmuLSUpZC6NK",
  "key11": "56hWXKFDMrR1PXCAp8dvqprkiniCK3u8wStxSDczc3gM9TRLvydZsBcAkXkLQwEm553HoeuxY5XsqvExvy6zWiEk",
  "key12": "2WNSRPMXtaciD1HX5LKSwDq6xqNt98zNYfPYAVrZZzGabc521s8xfBFYaBhoVMvxGcryN5gcJ2d6fJwPkeUKyKJH",
  "key13": "imJSErSVtrZFwFUAPBR2zsiPp6q8Qxnvwt3fhTRQawxBKJXPFrCbvf71kibQk1Y79sfZGvhvLZpXmeSWt31Mxxy",
  "key14": "3wtTbKvi9iUWgUponVDeaQSuQE86NkMdnn9uHGm1irxNgFVQvZWEYqa3fTmzJXyS4Nicc6Bp8bFgRkZbvcWbLBcG",
  "key15": "2ijTaAMg6fWWFwSMLdY67LUSLqLGuEjjKaDcrypx97ffxbxGz6mWw44h25GaVmePUSsYJ3TFCTCaEKYUHCni355Z",
  "key16": "2juRWWiFrHsVfgRfMrs2o69JkfxjLeKSEN3ESCj5yXXcM3HaS4KiaSjxZaAS435yvRnzqTX6w5QgRknhKyViY9Vs",
  "key17": "5dvQrrjLwLNKbCbhowKGgczKGD3rCLtveVsERF9sVDiHXM2WDa3SU8cMhdBhr4g1YbTxLk6yiZmksnHeM51vwobK",
  "key18": "2mGr4P72zwXn2AxK1F4d6dZfV8waLM1QEomnn2vSwsvA7mbpBQdUTBQZDDTheo7MPPHKu4vXr31Hkyv9yiqW4nKJ",
  "key19": "3c1AwwLx7A1tTk7TLVQ9nrDHwi1H5jnTWJaukZMZwQcLufXsTLZ2QEmToK4kvkGecP8S3oKJ8RVozrivztvCHPn7",
  "key20": "4e4rNcgEWFU6bfrtKbufQPYD3SaJCwprj1sZWXU88otx9zRyfLrmu4CeeFvHV7RN9aoYFsQTbTS1KygVKc9c64Fu",
  "key21": "5wKVTZUgPnPif1cB1cBVSdUNyrzJwWgQKhs6uFrj6LcFKnhzTLrMA55ikKE7ZNkT8V1mBQMLxBcbYcz4buBnzKGV",
  "key22": "3ADP87qdJjYz5gXFx7CGJm5m4Sd1mmWSZcHGW49TqZHkcNxxsNVEXbZzUDUtLEVRLabGTwgRg8G2SunZjrDCvcb8",
  "key23": "2izEZAcNvt1qvrCRCcrXckgN88vU8MKsQwwQBReEWTFd4DG1Y1kTwcxTZ5CoE7B3WyZ579PsmShpM3zp2GUo8ksz",
  "key24": "5y92m3r5a2gmuhZRMY6wEZs1MVdtbTsCZvWRytXqtMagqsWM1FQnaJ57KdysNNnkKRbmSTtespPTikT6dmrAJSUW",
  "key25": "5e4eqcteJPZiUAKNradDiGpBg7jdMHMw1oPtrbAFXUH6ZprgnUiaT8k8ZQKU9HEPPP49p2S7i4JYM4GP5ZmPchbY",
  "key26": "35WQC6pJhvjxrLtDER6txLuc7ejNHrgp2YX1gVg9r6iJJw9TjUNvAT4nrDmApj5KyLVtXcESrWUwL8H3yiK2K7jq",
  "key27": "3kMzswHXseifyRCBr6NmxLkgLT7DyEj7Vck3pMFSN8GH21H7dyrsHYbXgNbAG6Xu6G5cZMuvaH3gWpNWdURn3ajT"
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
