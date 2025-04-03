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
    "dZBHHroVZdh8tPvX7obSkzi3tLQ3wDbP5CZy2aN3XcwSDsBq63X5ybVT97DuhpyGe8JuPq8aiCFFef8uDwWzL3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DfeVfyRD5w4hZfyk25F65BYQG1gZMZPuJiVZSFYoxm9AQQ4CKaokij5HGSCAKb87agVQb19HXjCAiA2hF8KiED",
  "key1": "3k8xaFNRwZzynm9BcL446u3KEhPS6QX79qZAD8kkZXM9m5zTKvxFuwf5s2XdWFyk1iZmfgekEiSw8aGABddSX4hE",
  "key2": "52YmkycYG3Y4vWaKSPVyN9KyBKK7DjW5zCdyz2491d8HFupuMMmjRtM9awoHR3twAVVWRBuAf8TyDmDMLUXZsC9x",
  "key3": "sWZgartxwZVuvGL3wh7VxTeqYqFAh4vYKL1oHA31Rzm4JFfDcmmcgGc2f4GKuduErvrnPn8uQAKsVBPgvYURnNJ",
  "key4": "5TjdtQd9kkqWFeLeUdjYvxxR4JBcDeFycjybXQQnPWRRRoijyjyS7MLJobpjHSi1SaQLS3yoCvwAxnBWTdzQYSTa",
  "key5": "5H7HbCrbu3QsuEMkWUUd55WH84YXS36imc32LxqDhAAMm6TaWLhFWHCnQYemrdYUvs1SLUZavyu92MWH2MyRsks2",
  "key6": "4GNJiAsZQLGpQsjjU4V3S3UrPUPkJcU6hgmZNuNvG5kgzhLrN1z6Yx7Gi9oBDYwnj1Wp5G81tGy9CepEAaQmngxq",
  "key7": "4wGAmVye89H41BvSV7fJkRCEmKPCbbW7oYw1HYhhUoYhBiXJ4oaQXaEyLx1ZkYA4Ao6KaLRWG7M8J5J4RkjftRpi",
  "key8": "57Q6B4qPZFASmLxDAqcZcuMYb4ci1b3EjXzhpmnUR1yvZaLfHxyZnHusxXnzKxN7mV3M1Xs9F6SwMfgGnBMm8GJp",
  "key9": "4YNwYXHzZQbUynCpsiTn3yTEutcVczXbhTCB1inQh2P66XzTMo3P41gzN97ropihmHA8yURt9EHQcJdr4Vf9hRyN",
  "key10": "28J1C82q4Cw1UPS76gq18Ry6mbZ1D6Zvf3xJg8S21eWyTh31zV7zrmoqhrgRpMUcNspzb8Yhj4Gaqk8KokeU8Y9G",
  "key11": "48ysb1NS9ksbMVyzxJ4p15PRv9FjFrZRNh3uHb7BFuSYsAkCdkwLRtkMhb8H6qRhogD4kV9uqjEJ9PBhNui9oJYa",
  "key12": "2vhndzR3A9i2vWDUKorh5JxBJedBG3gTiTSouQS1wZFvUeCwS9B7LrS6TWVHHGcCZrT771gqVECKgrCk88tG2bVY",
  "key13": "4er7k9YmiANZoKpSHKAjyLm4mwHtJSkK6V7SR8ibhe8Fs4bgLMzmEaUwRkoSQGJoCtQ9KQYsZAUQVF3x6ecBHLb7",
  "key14": "4CUX4qSoeoHR6dsNeQfLkpg75u4ng8JsPfDWbm8boeH9aS5J3m1LfbHWBD9s6u3TQTRhiL8UamtL7j2Gh8EbgHbv",
  "key15": "2Bw8uGbL1TPXLu1RMfZV5eDismh9HDLtWBqg5FQhh2MG7SXCyE6kQU6rkn1pAvMzjK3ZztcDZo3jwQS9zzkmx7NG",
  "key16": "pndahJRPPRVyJvwbidpEbDJm9XDWMTpjo4Fd8VN9AwtXZX9QnZgbiyFoc1eYqkumVoQbnpQJLZQ8Mx99Jxx6sPz",
  "key17": "3hxrdx1zTEKV6ivdesehFMt8UUyGnVojMpDLUWGz1eEjyKdnd1cPwhJkqDqguu7236yBx4igvrZToqJBrpgE6C6n",
  "key18": "59AzDa2fNYD85EzEoLJMAwcLsuuH7Fv3G8sY1LbGY84EfVdgvoJK9XTPZCCUTE5kbnqaL6QtekSrGzCRAHP81AXA",
  "key19": "cjd4nqNVtvduSgRDQxgJsHQatjhDNnLKz4ARZbuxn795BgJqX1RoAt17zdQXKmCpbben8wJGKD3EmqJZ46iU7iv",
  "key20": "2pnYg6JXGczWLH52gJRGznLyrUGFpV7FL3soCSeKsCEQwmkaLUeSbesccbFgMcSzSe8G2saYaVHt69T3PiXAcV2N",
  "key21": "PGy5EkrGpr5MQQwDnuDTReAjCFWbovLchdQnpKgRCxdwjHnvGJZoGBVy8oJHawtiUNt8G7xNTt2QNU88YkbsHTE",
  "key22": "2Xm1SCVYaC3hGbjDr3fL2dvvSq6vsPmn3yVqBiFEVezQKsmsaxMjy5hEqwvyb47ZF7XqYY8GEHyHuPrzwFKfLu3H",
  "key23": "4VVso4n6B4paeo2mWdne8u9kC1iTcc87hbMi9WA5UgsguL3GFPDMUNYphaeCKxP8oht9dHVRcjdKDPenJSPJgCXi",
  "key24": "fKHiTQYCsrw771QXYkdRXWyj5DZTzSJHWKmssB8U2DNgq45SE6tou9qJKmrVCNbLsLzGvN8F8tECB3cDDWxi4cA",
  "key25": "2D4nPaYMEGk6jCwT3T4keLsZBMymph8zFk6Lqo7KfPuKVL2GWBL5hyYs1pJzHsA2wdCaywTZ1JPQdeztTLVsjPDn",
  "key26": "67ZZeLDynX3qUz6SsqiNorFDcVg6Dig83KsPrVFG91vMDGtHrxAxV1pHtMsRcHBpwXQ4qFmavap6Ka9FoCDzqJoG",
  "key27": "2538LAeQGSwRAkAvByTUc2ETdiJWS3kPi8kALyqk16uTafNugkRXhyWgyVv6RbuYLQr5AVZKcZsFWSL7QhFpUhfr",
  "key28": "FC22YdFCBQT9qoibktnZ4xPBargGudb4aN4FKk9NNukwJ5kgjidDoxXvXX6xFn1du4qHrMsSwv15jQnScJzGhpj",
  "key29": "2uufF6YRcgumxktqpDuo1KLXPU6BNjZwPyicrYUVm857kn8uXXfdpmfNaCWx9QJ4fStpcmFypnYDJBAtAgqrNpKB",
  "key30": "3WXkXNmaPnZVo5dTYvRPceCqpta3VLueMUaG29MCGT55HfcmjrE4tQw5fNXviAYWJ1Ts2rugf5Drh9C5gCAJ8LoW",
  "key31": "47fg88RZrjY2meXdMhXaHpL5phecFS4asXdJ2A3tgyMGK3VR4M7occvjgVSY2LH7a963c7hzhRaDn6ZAdjYW1a8Q",
  "key32": "C1tgQ1XsXH7eUXtGuCDRpESKBwZQ8gG2ay6qw8CbDbw4gXi5fb7EyxfQpMaumBNGgJH45Pt2vUhbyPV85S7UcCP",
  "key33": "4LMZ8W3NKuP8VPfA4Z3uUjtGoo6oSs8ivAoAo6S3kBZQRxf8H59pDJqZ9yziTDL4duawwNQ2twJeRZp1ERyK4R6P",
  "key34": "5Kf7fekkmwnRXHNfK74mf5xCHSCnuF42oo6sp9PPkocSfFfwiGesH8dBCSebPWji9aMZPGDjqszM8xJb1btVWcRY",
  "key35": "3wp3TtotgJoPLFBsQ4opHs2eV9yufpYCqs2qHxEjpk9GgAq2M72hFxaPAcmnPDuLDWHdbq4gZc68oXQpQYEoKuXf",
  "key36": "3dKpA78otCYkchB3BkbzcrR5sZzX6aKqyHhZJ7hstPvE9UdvogmbctUdTosULk4rmB6KvuiNvCwGaD14ScpTnLth",
  "key37": "4z1nJpRWDjqg9b4bmTgUoENvT7oqGmX7bqZowsFFp1oj9tcyMojdZCgjQiKGLCSrvNb11HvxZKvJ7mDb53X7tPH7",
  "key38": "34raqdFgGQ1xE55tPnvW97b3nWUNbzGqXftPozm66BHArUsrS1gwM7rgHqtehMhs5ocfeGgdnp9SUVyJmWKJnvJr",
  "key39": "4WooYkBSZXCSDd3cvj7F2g9N77NyM7WAa5Ugu6CsHYg6K1Yibt2hafKdKjBB7iYvrzvf9o642sSdHevA7iTDALdf"
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
