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
    "3dCxZP3oKokuxhFZh9VhEy88ZL6tqSWCJwaZW6EriphKFtVyCCVNujw3FLzaJdJYGCrCkShCPjcAj9MjYzxUkjia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HDe2egXjQBGJrvC4XUmbcFZHX5tpfQwB43xuviikcm9CkuUJ2co8CL3YnfhYUGhN8eaC4dC8rH6ZkCsRuf6BuL9",
  "key1": "47HbjyReAo79ZQ4ZcXcvGpoAKukA68L2yUmthZkyH7bZM44pNnFmv8CA7rp1HUDkAMSkBFLdCTWh54MEP2AGAxEJ",
  "key2": "4dQUimBggTx5sMYr3JhUD2aKysVt45YjxWZVtb61LGHSPPnirBxZ8c9XGwm2SvzzYjf3niJfRUU2WHTBJwm7is3u",
  "key3": "jfiZv5tCwxC3AfhZoRnCN9n16LFuCymfaqHaqxvTcobzymKgguxK4B96GUtFfJBdZT4kBk9e27KgsLKvhWrCfLY",
  "key4": "5zwK44b7adcH8eFXGdAh7MTNgh87GVidAR4qEtu85eSYC7aK7hk3jEnEZqvQfqvRFDEnpap4hEK9QNczVvn5wYQs",
  "key5": "2WV2Zc2K3AhR7QhX8KNdfNodmigqs9hbRxbuQBYirodwMXtFfVn9BNyLaUXb8x2RkgFrrUxWrHRidzgR8sBgYL6",
  "key6": "5MJxhxSfE3VbSUZxHQ5reEKMEkD42fV7kbgsXEhLMs3SPkfGVrNd6c2KxwnMCwBxKWbKaStJM6jzNJHw6tPx4w21",
  "key7": "3C31ZBGCYf5MJZZvc4kccsR5YSr4DiMEHYtbx83HNyVGS39Qr8zhmhtLS1NntEYQ9dr3HBWaag8FWgSUWS7xgQYt",
  "key8": "4VPGVkRpdLndHhtLxwGN6uPr9UUHYeNNpnwGACgZvBpKuqDWNcnoJ2SpgaR6sbuZ37x6Fc9aJiQFpqkT9rK5cKGs",
  "key9": "PD95sgFz2vmUVw454nGUUPa3748jM9cFgrxG4ccbAXxs5ited7PeX36zd6JvBztVoduFXmzKyJUN5QvZ5MJmNMa",
  "key10": "S9V1y3z5Sh4A6MSD16ZR8NfmLAD53DwFD65L5hE8FKmBui2L7bf9jGUXKAq1B5TRHA5RCcY7kjhXvUAx4PbKgdL",
  "key11": "8vfpEZGkaHEFxW6QxunoarYXCh6me6xTqerNh2rknPnWSeGVgRjdp3E2RYnyYAUyf7vfVuAtjgQHANvvJHWCdnE",
  "key12": "4uDVG9uvVWme4n2NTEdVx8mhbG6Ueykuw4JH5NYWkdc6Dga7WV1txEZMoL8KTg7yACgmHasUEtKanxxQAdq3jqqU",
  "key13": "39LKKXwFqXc3Qp89YYU3rGftBseUJToKC1XFLUqToFp5wm2SfruQNgtPBZnkuzijkLsTep8Nbyjk8WdLPcdRfLuE",
  "key14": "4FTzbArTS25kfkvU5Lq76DC1zhtzYVVCDbUbv72iL7eUqYK9wEjEvrV67hgdVpcsJB7ncv36jmrt4UzE4kNqKgQi",
  "key15": "48kCeLuq3W3YJ1f1udfGVnmkjFS9abaXp2H7Npvoxq85eFoRwynwZY6QH71aXqiKZ86L1s5r29wXZEE9P3nt4ezT",
  "key16": "2D7cHFCEtgw9wNDv2k2Wr1YQuguhWtn36pC7Rtd8b6VW2C97mfBHncDG9u1DCb3x6GVW9wcjFvf9sQiEmgZiWfKE",
  "key17": "4NPmSoyFeU12j6q72iPDFHzKixV3ogPrcWnskmWMxEUB2CuwwHR6j26WHSEYm9eLE16NTntQNmsb7XBHUahxWE72",
  "key18": "3n6US9Dj1Mz8yqHNHaBuNdrqNPq1crdndSnhQNyFvGsyUq7PqH4sXg13UqGFzjtLWNBDDqQUHUG6uiS9WRqitRaN",
  "key19": "D7eHV8DioPiXTKA8Rsy8C8yYYBTPyfxQRD66AgUVMmLmiKJPMDRKLWUhAPJS5BGgFiATwpD9AsvrHZG7FGvnpoE",
  "key20": "3jCWNrptCyjPErie7kL2xRiQ59uTniya22pEoiPrBuFQr2nNxXm3EqAkxdD74FTUPuXSv4AcNKb15tGvWmKieCrn",
  "key21": "5kBdjKWxvkMhPLiPtmYqvh6hpNPTh4uM6YLsAT2QntfmkbpMRsaYCsDZJXqQydjF8Uu2sX9ZsUe6K3mhrF1AJiY9",
  "key22": "3NVNTEF13TrbdycBdi5my91UXo1kuVyHdpnRfFh8ELQv7YNSMyQZBpC9cYxpDvPPCQLp8Dp66sHfVoTiBxZA4boi",
  "key23": "2dEPsth1dGUsYGdgd3ET4ULh7qLbaYobFWpdegzEVGCjQNtL8vomHFZ6tGpxci7fxxPpJXJLJeviNZJHvzEReSqX",
  "key24": "3Hcrjrt7nKC6P9P89CztL84uxWoZrEEaqPkujv2dxT6u9ELfHmZ44NQGQkEFpbC3GPxXA5qbQY4DUnjpcd7akgmh",
  "key25": "3BD1HYAAHidn5ZkYoa7KhAxKZWJLiH32sAX1noc6YGRxTuxtuopYff6WCfn18Gi4CSFRcs5q2TM3pHXXFhRBWKyS",
  "key26": "6ENuXhauwtJjhmQ6GRBCNWGvUcrW1CAT9AgnSEz5mrUw4fE2R637DwZEYfyW3EYbrBP7UoS3oGvP6JmQLJX1kUp",
  "key27": "4pf52Q9FpSQXnD9NRsd9QUFDsVgUx8MVmwFYxT7Gy5DHJfx7PTDz3gseWmsHSM1QV7mq2bZuaKeQ8K8tp6Y3Kom8",
  "key28": "5wP8dYoNiUjGHQy51geVAVBQo5hN3o74NAwJcNdxu9Z6N8qWACgwz181sttvXsHgq4FZ6Uk11KY5p91bsT63k2NE",
  "key29": "2uJGVbByv8WQMtm9oqZMc5c36R2ugyZvPoagAEDb4Fp83nZXzdjv9aR2NXjovkYm2ySdW1iLkamzGwUgkinJvKgT",
  "key30": "2kzJ6HxwaeajAn92MKLX7r6xjxFtNwbzGKhx881fJGauaininytaZrqiK4QqCrRQGps9erhHrbiN1j8Ee5onKD7v",
  "key31": "4qJAvRSeYikwFpZihFnCZFt3fhzA4wbiYMyQCiLeNgC464cy2Uay7JoiNxdJw7yGThsabPQFkeR9LX2cCEDKDEdm",
  "key32": "4XyBH9tKjkUR8vkuof3otU56rynWzXEsFcbVGHVr7b3om4qCZT7p6TcmbM8MCBqm1BbNv1Krmxgkpn3mc8ooniwF"
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
