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
    "3G74Pii241vN3o32EBUsorMe5khnx4FJYxNocXbAkeHFeP8vzbuk2GY77e5z1WuEEN7AWbV1WqP5tuEDp3myjxLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Khb2UKkbxMkW1y4LWHE4DxPVNP9TWf22U5TFwL3SjyA3YQ5ggAoHwEJdCACBSyHRSnniGx2raQzyFazPPXi1JLb",
  "key1": "67gi7bLeZVmvVgmjZnW4bH37oTR1xXfWXn31pq5m6b11yU5BjvafFjDy56qMQJzhNPLHHpWQq7dBUyAjmbtiUH64",
  "key2": "ebDQMDjXXR7FDoF5EimnHn5EVZponskD9EdFxjHZauxUCKxhWemUawvTzPctWYurKtZhWVfoJX11DtL1UHKKmxV",
  "key3": "3DfyZKCqLTivsNTqeoYXzj8mhp9z48nM9iKKL9wqU85fpCofNAzM6hHcTmQBYpnzFPdbRu3UqSNuXAhyKfwySRbm",
  "key4": "y1wCR2bbCPhkMh7vTbHvthMXSzftZZmh5oy41hc7uHDyWzhMGaP8pTYvVofjnx31LKDeSYfwcnL3iSVWNYQKYHb",
  "key5": "2ZbjMF7dLPWAmYw7a62DfMr3oRLbYvcE2uSg8hntHaQWVhhP8vGBVVZQzV74jfK5X6AuMo4DnxQLRwiTmd5KhvVV",
  "key6": "6fjkpEaT4MszfBxZFdVz6pueNT3t85D4rh5fhtEEhj8bEZ1s9Cd5T4zVSGPDwLqv3daCn4ju7Ps1ubo4YKGDz8u",
  "key7": "4YzzgzL4kmXykuFFAJj1kPpZLTp3w5gx35SLh75aGEHBj8sJJRfjsz4tt6E2KyLQFDQ8FX3jcEQX4aPtA2TnVT6h",
  "key8": "4gXw87xARsm4MdzSQEsoGxwesgkDRshjiJUXpvpxuG1k9NVW9kZRXnGaBvuf2WZkVyP2tuuUDjA17QEko2LX3V3K",
  "key9": "3dmJgqBYrBXyPD9hN9ohoE2vy6hcnDfC89uaquy1ibWZiKscAYiXv7FWmZSTUmkw3pJkdccoc4y9tQwVn2PVuxqA",
  "key10": "S5Ys5hDCya8VAJT9gWcnbRDb242QhC6uwstsQ9Spx7NhktHFxpQZiFjuLYDic8QYbBAnwscHdxL2nUmHndUqX4R",
  "key11": "5j6Hnb25NagkbqrEfSjqhXG8X8b7YnqXSwxZbUB8UPgTsGXpUWwf6q8f7VuBHaArUBXXrGBtScEE3KMK71rvgnBU",
  "key12": "ypZn2BPyyNh3APCtuapd4mKyHNuWXYKvumavv9KYczbxPdFex1sgEmXM5D3ghhgSx4HfHrcjvJt7DmGT94aQggR",
  "key13": "3PY4VfZgjqHM7BuwYpi3ToyViDpYGvYzD4KDRPTxdHhsQMLZ946SxAFkmuTGtC3gzfHWxhMDC172Mnkpz2E1r3cp",
  "key14": "3FDMykkho4e6KXymrQWRBWC6UHPv5nz1tu3snpDSWYzMRNzJTHdPKYXSGxXiadqWKczUqkTnGVLrDCWvMfPJdrop",
  "key15": "66UsQgHNA7zQc4x8CHH3Mg8KSk5J7HDuX6mUcXigXBigSy2DAck2sFNMsbenQuHEQeGUWoTYPecYQrhfWh6hJfUZ",
  "key16": "4yhJepM2UNgwRUSYUQUbzYQM6H6xaqB2VJCuq79WQgceGWmFJF1RBuCELKgrUyuLvWsMmC5BGMdh7Pzp3FGA2FqU",
  "key17": "AZuSvyj7ATqgpyBimyrPeHE4xUahBrifFfwEUurKvNcQt2AFbBEDkpZKT3HC4hrekHpw5S2qkMthzA6bCfwYVfC",
  "key18": "3SXE6sBCR7oEXbt4f9KZjZS7hdpXn5WuDguwSWKtfcCpvdVenM3rDtK4SVAKBwZTx49oYskPLKj2iXF7awMcPYk9",
  "key19": "55yr2J8QUbf9DrUPTCdsuv7NAXHjpJSwBRC9UGJge31cF5Y4AxNHLpyTDw9ucY8bZKrLpG7pJm9Epr4svoYPKPqF",
  "key20": "48CEhmcRfhseS1grAi6rLsYxRbwixk8VjYkGDDwjX7EmBejsYSQEVXSMaVyn63NnLhruAwW2yCm1VHF5UwY9h9Uj",
  "key21": "2xwjn72o9Xm8EknvaFMUPWrS2YdNx5Je3vhDwwSEQ7ikTsiKbugooo9jqPM69DfFRbA4CTNdCpdMmYiprf3ESDse",
  "key22": "5SzcknH8EFqyAbtwqfk9E1gi772JTUCEnf2vkN1AkJsuzj22974WYVKbTtEepoAu4fX4BFSyGuZXgMMrjccobpHx",
  "key23": "3v4t5JLWT5bH1yJXvCSGR547nSnSuhdyL8nHR84QXbkvDBkq92RCWRxGxmbd7TAfRxxPBqNN5unguSJ5oyMMah2x",
  "key24": "5u6vph9xup4v63Xtk172DrTUP4jkTgiXUAnZzcxDuV6QZRpx5BWLANT43HjtTX4cRFGfLUKFsGqXwA771zFtR1Ly",
  "key25": "2Trz1atLtVoE1j5bxjNz6wXHCfMe34nneQDb7jvGKmNKV2XXeE1s3qHgdhKgiKdYLwJr9UC3yHBeED2AkRjq3fP",
  "key26": "2FancHBQ5ptSdXabJy1Q1mcwxw9ZKCqqLgcc28JCxSzp62Xv6zAGDeBjgV4z8i1fTRcN2nvcs26g78X6f8e6NyzM",
  "key27": "59k749QPZyZEJHsjDsDarho54GHuLmVF27UwmKyztz9QCW8A1gNuSwshZKMJuYhNTu6jwDNq73sZjeUQDKnHSWP4",
  "key28": "Wz3vdWD3Ppbo9g2hjgBqzohETuAProTmJ3U3PgpMaBVree7x4SNuwSqrXFuPiA3fAgPyZNgxdQYGPK2uF14XeR2"
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
