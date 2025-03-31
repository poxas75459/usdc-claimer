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
    "2TKJ6nmjEdC4Ybajawz4GDTUs6EYZPnjhichGB9BqgcJTYaW4pGhozxnDSN2rvFa3qLjaWTMwQvsQ3tyEweMSsoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWWAChaSPEQETCgqDmhX8v2WoKeJbWWc1vfgvqd8QKhJxmajGp1Kx4Q4HN6qEG8nAo1KAJWFny81z6tteAy41Gy",
  "key1": "3x487masZCiPCMjk3u4UxZYVKGDRdXYp6WdP16rmqTvPhsqLQM1awhUfrFJS3WoR8pmZSVrXWEj8U2uSuz6svTk9",
  "key2": "uAcv2rSQEnc3Qvn39jn4cZ9QaGU2JGucU99uVWcD1DQi1cqTUDBnvx8kyFMBNZ9WpSkajM22Rp5sQAT4MtNz7YN",
  "key3": "5tuLxXUA2wQntHYKSg63HWtLCHrTRrynAbPwR7gMX9rL9tgSJbXMbNnziNuPTeHhnPX6EuP2wivX2az12W2ahcad",
  "key4": "5R9T1bqy5nDUrgBh6q1aUb27XWspFLDhum7WiV8QoRBpDMwe7a16KQx58kTzn5X4qXgaWzGozABZrjwfYnX2d92M",
  "key5": "Ng5Sxjcb83CoJeyFgkVJN7gHa287FYRPVi1QQpaforMjvz2AaLWWuw6X7bQZEAHzQskvCcbZZNwQtMf7eBmHNRa",
  "key6": "3yjLhvwzZDGFGDvZobripC7cRNrp8aWCYdBFSTJhbUcVuzBDKvCE8M7QyCmedywC9ZbqZFG3wDZ4ja2as6i1NgZd",
  "key7": "5rczp8h815a8TDLTNZvHyB8sNZbjhvUrSo9q4HAQ6kNJntNaQD6yNrq2VRkf7yYrrcTWMJ4ekJ8TLzZgtBUm58kt",
  "key8": "3GTg29dwzCQRPS4cS8g5374G3zuHPBJbtaL9tsbDAUCLb6vsXvyRD42wmWgRRJKbVpUU1fA5LmMjuBvetMGY93pU",
  "key9": "4VEh3X5TcG9jiqJGwPggeryVPwoCrMC5NcNDZoYuGtYajALe9Uc3PNvyeb7Tj1s3BGPTHsU8uwHPb14Pq4QtTBop",
  "key10": "5kBjvVinTeLXfn8rhW9xDRLwCZXCUKNGUVmenR5hudaL17aiEdLoc1znDfZC4creYMkMzFF7HYw2sTGDjJUZJQq6",
  "key11": "3PHphWf8PgeUt9PsFzMvRTaRr1Yw8VDvDT2X5vFPQNxVesGzgZybzrJ4sMjE5xzYHtyfqTHZxP1o9bGgZxcsLVyg",
  "key12": "2V3KHQc5jUg8FArXGQWwoT7j1zntSJkKn7FrXp7iVc62sBqTAn1wFpkdaeBKXMvDEKna5d16BTdw3XdoVuggfXrv",
  "key13": "3ghscQAydrNcTnJhDw3Cx2BLgQUYkL1ZyPttLr2yeMT1d1xjAFyCdEQf2F5551VeUHJbGPCez7SYJxtC7THVweHP",
  "key14": "3dzYqkb6GuJuV2dRR4eqHCRXB7g76NmEGttrHRF4opMu8q3p4EH44YEtdCsukDsk3g9refNuXx9mPsRQMxmzAsZA",
  "key15": "3V4FEPvvjfLQiEuHVMzSrbe1Uw9gwMBdzAPeVHZAExjAQYtdeaEQjNKbF17CXEAkTRqYq5MDnWk6j5bYGaVTGuN5",
  "key16": "7H5rbE6Huva1fAyZ5rdgXipGYfRQKSKyP9wwGX9NoS3faC9bvMnG9ttCMdstjzcuRkz7tnECG5qQMkPxsPsR8Xm",
  "key17": "4hY6FAEb2ZGVmULHFXKoqniKZwuRY3Hyu6v5k3YArezxjfeKzvztbq2du2z91XDrGuokSFxtpDkJ85tAwhpTpunY",
  "key18": "5K5WKUJmfbN6RWb6mny23L2DKMHYRWv3pjdNj5uCsT2DyMrhjJHPJzasq4mGsww6FW4cQR6gm5Set8Vva73QEvuu",
  "key19": "29LbLBTb9XXoP5Rf5i8uqB3p4AxhjvNEP76wYKawdLbSURJcJjLSrMnKncFFNFxWPvPY7p5DQWgvWCiXb1qeZnEG",
  "key20": "3LfW1us1ieZvwruDs1AsavwhBAnLi1fhieR9shF9R8NjtJLzQ4QSR59i2qeUbaUfZQyiordpiPEHyc5vqY5aXBcR",
  "key21": "5fBJfJNuAn9KbJmq6rQQMMqGc2H21MVkLLKaRmq4dznJ6poUumxqHBMU6u5zQFiFTXoEzqbCac7QGNUJTiQbvAaS",
  "key22": "5fYjM7PJPnVjzmCKw2SjiYowGdyWVHwdoweomXvUZRecMqP39RyVEaqhpznG7cJfhAEw8djhF3HA7WEYNKW6XSPD",
  "key23": "35gQji5enR3SurhdfJ8jrLGhsPToB8UxZNkq8tBMFuhszCsYTGsaRWCDQsvpMS7NcG8xtN8moKKu6Z6GDWPnm69Q",
  "key24": "5dGQ3bg7WusLQHunAF3HegRpApY1e8VGvjZqrvWAhFW1hC66fAHosAEddEQRai8gzRYtAZC4PBopgP1uzUiH7KaH",
  "key25": "5e44o4xagGPAT6jtiW3ivbBfX6zoQoNXBHhBHxD236LXtsTdgdg1TRwWji2tHbTAmE5ptr7bpn5ozfuQbdefGY5Q",
  "key26": "4nEQ2PnNZzAFZ6PsypERryscJC1r282NXiC66XcXKK1nqLUSWEWVYfFyN9c2u4XxZ47qQvyyKu2CskBwCCWjqGdS",
  "key27": "Tykmk23vUaDQEq2wSEBrjfNdwYRg7ZNRY7dp8HLVDRTR8sitwxsAi9LJvpykqoL1SwprCfbba9hhKM1J9m7SBEm",
  "key28": "64WM8WTevQKTNd1KN6tiPqbrN1QVEHuB2xY3FFVURgmex8v7ZAiW6gTRPhQKY6P91HxsDQAVJViRQJYQZzbx4nmM",
  "key29": "5hR5xgR8FEFuKXfa1KNz9SXgFR9r4pdkuSEdZ9Tcjf2c547tfpbs2FtU3jPN36Fd5BY8nDWtUvRdH3ZwB5j4Fnvo",
  "key30": "58tUj9jdUU94wsQFj8rcRNJheVDf2X1g65p81ntaubzvajzMyswdzkB7q3BUb1FFno7aF6fYc2aXie568KFKwWpw",
  "key31": "4ivruotantFLHUZ43nJ5GKiMt6nN5zskkwuK3EYqeDBQNsMQZN68wU2FvvniFBR8w8UamV8cuV4EefKZKnsk7STM",
  "key32": "XSGJMqnjvcojmh9MZLyDLjeyPhqeAnDk3uFwBT6jc1RwQwHbkVcAKcSQHrBjjhGr9PoLUyKUs2bxdgrKP4uD1ZL",
  "key33": "2tWompfoNEHVP9PsoSrqfrvy5bpzgGcTMXKyPdP54opyqGXUnKozTXhVk71oJs1Rckj44Wq937tmCHPvpzZSr9Ye",
  "key34": "61kKFxVBpo6oehx3TzN31FAATo2xJeSYabDUuTRM9RBT9VDmS3qDnUHLPF7EEocPzTJgsVuwyqEnxvPPa2dXJyGu",
  "key35": "4oWvktUb6FGMyu9wP2S44T8NZDjqbkw94qka8rvQkG3GScTwhPvQ5dKRkJiKwDjAH6rcqNbPqFV9qw6Ttj6MYU8v"
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
