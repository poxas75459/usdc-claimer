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
    "4QrbqAU1tEYqhV25fxgDLan2dfTJnXn1KheNg1Fq5v1EJupbttUKgKj8toHPSpAD7wXa4qaKoaSLfjsydf3hNvP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4yjqMjokMfoZ6ewkouKpbFQJBQH4c5Z1hUmPdG9vbvMPJzwsrHVhg6KiR3eKiXC7cxLCTrY4fFBx8416H1GW9e",
  "key1": "2xyHkupT6ww3iYTBwj1NSqNY65ubeuvCB2KpUegFbGRyumbDs1eJ5nRhwjhwDbvdYdA7h7ziRUT24mACb1ivSpfe",
  "key2": "2jZm5J4Vt6hfK6CTWcBPGCStTAQyg7qEuZxx2kgkffZkwvPdMRCHbF7bsfMNvEA8NZ4s7wiu5UsknxgyRF1tvnht",
  "key3": "5YoFKJXsUYbQwLDpKVkweZVcLBUUDzSz8gnMCgiBsSu9p7YrHmz3D189W2mFi3LMY74QwnGgtQ7oQjsnVweRAfpc",
  "key4": "45qbMurJEu3bTbfc5S3psBzdnqX8MqGo92DN5f23aXZYzH2aQw4vxd3rRAWDPEHke6cWrkyVNLF3SfJDyiAs4mH5",
  "key5": "4a6ncXxDaLWdyZEz31N4gqmuZfhne4gYgFn6ZVKgXC8JadheGZiKXBSviH7qJ1X3o7G3h4TPSpjzM6k34JSfijF5",
  "key6": "4USFrbrQyfPonNiB3Gu5gxVHc2BLcqjJptCAvy5UgkWjuBJHDyEGyYMNVk3cYLFXVcR2AM8t1BiDBK5nct2MuUUq",
  "key7": "4nvYtaFJP2ZaAKHwctXYPv7UWEPPRUZ4oAgJEd7xRjyfovagULmKkM6FgQ5LfJXS5prz7heSRm5GdasTUTex2qm1",
  "key8": "3pvjfEBWP3wXgUnqQbpJ7S8e4LqWJVF9ERTdiv4iYEygoJv4ERrPM4CGiYKYDrKvPSABR9YQvSHrBJ1G4qfzb1pN",
  "key9": "27r6U7sN4PZVRjL8EWMVoXVaHnqFkiSuvM3LZApEYSLBsxxSsWKfuGbz8KvnHjL46kvut2Zj4Qq6JAyc3QMqGvTe",
  "key10": "5ktqTWQKemtPWbfVoC37cA1VErvHBBcdUdXjLsAPLrmTf3NH26Zs14P2Z7NJRpUNqsN4RU6T2RELxB3zFWune2pk",
  "key11": "4ngm6viZWBzHUrrZXhEked1P94tAth3x9McLLvpfQiTnVShEmi5uqJWQTrAcNYVKvhqfQMjH1v2EKiP3UtBb339",
  "key12": "4tgeaE8oUdftMMYWoStee2VQEpQfzmirEeFPNdXbWczxnf7GjTKx7fqV36KzQAhmtDkm1QbeudVvtxDcmt44MXFh",
  "key13": "5tZSnNYUPjrhF4t3oFsA4wnXeXzH7zPYxcBpXJPF1HouxeYtckd7WAHEQfYjFoNqUVLPbpEczjppGzwHFZiykRZm",
  "key14": "4ViXdmjEDsZqYRWnokVg4qJDYpETsyKU7EFkBgxYiX3nchxv5zRmAKWMRYVA738vqh1R9gzSDTunXijjEFF3mFEw",
  "key15": "5snKkARAoM65QRoyJooAym6ukU9xN51Dzh5WyUL9d8arCbs6v83oTgL8oCKQS5xrtKvQFgV8HVPWsrU2RnSmJXxY",
  "key16": "5EwLDAeC9mAKWbuK3Log9UzGFaM3WM3tmhgDyMA9rzgTF5rq4BGAGsAwh7ciTAfnLWmjWubgXhjxkoMtVq1vJ2fC",
  "key17": "4J5fJgxXtWjnhEuN9WytfZAmY4m28ngcJw8obfcNbSecmYGAM74NXnzjuw6rUpbpM5jrgxuGdemEoQg7F3E8w1UG",
  "key18": "57CuHmpvRXzf5cwcB8PPxh8eiVNzFwiDi6cxKKpjKJaUW8qxxpkNjRVDWon11HdnYB7B56UhrNMQNWfqGeYm4KnJ",
  "key19": "5zBwCZVhvFVwvx41WjDSzjLAoisWyNd6VMtCSPq7ioEPAu2f1ButCPchJBgq1gfdyUCCcAVYPvBsnosYAzfc3Z2b",
  "key20": "2fQc9rnFM7ukVgqCu5xwFQ9NdhhVG6NGW915ci1zEtyAvvf4Yuxtm4m9GcCMpicbia1DQsxW8A2c67kBwmbYnEwR",
  "key21": "TdDgsQG8mbHiWmYvcd9hXhGvffkfHA4XFLgbTvpQi2DD2aYxE3rj2untrWELsPyVbmseDFyL61uY7VJu7g2iv7C",
  "key22": "quHpjSsJn7gy3vwJTBXeiZtKeHZBay6g8cn368rHzGek5ZEfbgQZ5qMjGz9eX4Fr6gHzhNHV1RG9HFTEqUQJvGA",
  "key23": "3cH9Et7ir3EoFwvnKZDVSqT8cRCAnWDNwHTPy7iwepMbZdC6NmMJ8WaJ9mqUs5Fhj2LcTtMonhQSa2iK1Vwp2h5U",
  "key24": "65NZU2Qir4mejsaTtNDmr3YuvA8My6TLD3xhbftPM3nLqQLfTU6K6HjRmW2DsjVVoBbZ78F6PhKiHDQtGPiQv6R2",
  "key25": "2MKVXTH7TGPi1J3cmADNCN3qyei1QA1qMqsedbgRDrYJr7yxQuPysTeCaT3nREeQ1fSSKLmnDXywyf678Ha8JQFS",
  "key26": "4NpV3WyCJze71TENM1gbe9dZxrfV6GBtFQEpFXL36uYX5ez46p7rFwN9bRcXJJazvQ7eTm8Byd4uvUBDys2oL7xQ",
  "key27": "3tPcMNQKZ6FWGkjSUqJW9XzAG8yFg1SJZoRY7KB75YvRG4vcHcBiKzyPQxAdz6ByKQ4bCc9GJsz2LgXQzzmejPxV",
  "key28": "5dVdmxVXJHVkmVL5yDPLjmXBcVfHAAd8R8uUWpEQswyXqpitm3epkW2yNhfnsqT949TdSZW8NYSTagKszycY1QpQ",
  "key29": "2ts7ifrkykLu7uety7ZuBF8GkD2muZHppaU1z7MrUoV1BwHaA2NwmqCpBdLfULmkL43dHPXDsf424TxsGJc5Yvtp"
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
