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
    "4eNjhwyKdFEaWeXz3qVJU17MYY2LjcWA1Z8n43ky9jNTmg8imxe2qmKyVtAPHqo2xVbbJtrpLhPjpKUuq66kVrup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4JZmmLkNnbWr74XfTxQSRpBv6HTtfouk8iVkQZe1Vx8DZCx96VB83uEBVC5JL46CZdtcuFqoG9jJ9D7f9NZXas",
  "key1": "5H9AhBzvWwvNjTrh4GRJzCLw6i8YAoZzXSRWsVs1HKebSrqRLRL1MCJBEGgLjCHwPjk6URRzotRqDF2YptSEdA65",
  "key2": "2PgLqrqS46BikpmJGpaGeWzvwsV81MyFoBK8qFeCQFUofFyb9SmE8Pi3rLLSYu6E9WAyjXLxpgmcnm2ZX2Bk3unA",
  "key3": "2JJfpv4G4YoU2ejmmkjyjWLzDzwnAs4gqFxXSxKi1nbFGSCvnALnSnDHL3iZA6hNmk9gwtje8akeamxuxFWv8FL4",
  "key4": "5w2ikPkVJ1eBhRfQd1wpYNcU2bxgkmqJ8KmHSDmM6jSnjeqvUMhofz93pKab5ad9jzE3GHewGj7ZYsB524mMULFn",
  "key5": "5UBu4jYrG7b1J25YATBVMGXrX4Le28RMmifg4t3wR6DZtVBUZzSTErphjUSAXxhegMm3VsjrfjD2GiMxWgny4BGP",
  "key6": "SmCuZGdM8DL49txPdPi86gYQAMkBSgkCLJx6hyojrUVBQS9a58nyqM1UoxR6QUgcaixdYR5TVVtATSAA8k3d8qy",
  "key7": "mTKRik2v9TnCHK34yJ4UE1uiVyrFvKfrioCdT1yF2Nb8SpBqTU2okyR6F36xGM9dY7YQnvcnVP9415XRS3ABCAk",
  "key8": "5FhxikDgi6xPjugW4HCoGsA4pZme5iGi9Dx52SMXwPaaRqv5BuFnZQmVEAi2aNNBtQF2PTkrieRj9gEG1konm7px",
  "key9": "oGja87472ZMvJFbQ9pSeH3cZssRRtiseXF9xERyXgdboHgiWyXs4SaRAfeL4QqwuYFHsQPpgeCCfYkJMgYL2QhD",
  "key10": "47kcg3ePEyqmE4EgcWCNSbdLkvxnh3nwZWKeERkJy3pU7kSULkpfWRtUJdB4tpzX5CRKhAieEyWsoedJnu8hT5zb",
  "key11": "33d5DdSYerz8FetLQZmjeKaLUYaHEdDdnBf4YJXH58Ne79bQm558huD5FeLHD29NWLXtW35d7JxMEc7QsnSwSYov",
  "key12": "4R2feLjDL5qjrRJAqtZETvYnDkhuJPwjxxoTpUbaueXR5WpMwWncbqpgPEpDWaRaxu1HvPfXMeBniW3Shm5zYWGP",
  "key13": "3LgYPKEUmhLsjyEJEKyKPacV4VimK9Wg5Lp3jiFRTTHsF6thoAyAjoqoPHn9J7axaak6xtUGgWKuqPsTJTFdkEwC",
  "key14": "2uHGnSfi7etoEcQ3H12L6b7j2nLn3k5xjAUKgBACoVYQTaHger7yVQJkaTrQQun4mq6wHD6hMBhgg9eVMhN4dT5d",
  "key15": "K5RJg5qCavEuX7DDQoFvDNHTBgEN4ued9oQoJH37jUvqs46oNRUSB4QeDv2xMwUG7zT5weEJbYVXZRyLwddDPUh",
  "key16": "4FSyP4vq9FsoSfR7msZ2Ur1X1QasSywKKyPMggMB8LAEW3vwsomU6gUcMFKyDnu9CooDieTNekeG2bmYAtuqsVwo",
  "key17": "4DSbG5vTkYGXBqwCduWWUAYMxTykDgKJq7VqCrRztTRW8eVYXKvB6fYufUqYMVNtsvVkDjKzy3qLrs3JspN8q8fA",
  "key18": "9duJpDgi7Mj4b753o8sAxVohcn7pQyC8ZJady2Q4ANxTab3NtrK1NeEWW4XCSJWoosmX2zNai5HCVm3LNgBz2pf",
  "key19": "4r8rPNxUA9dj5rxfoeTDH9pp2qYLxNhMhhzMuVvNfcoYLhTL4aXmqaL2Wzjpv5kud6kAYmdAwkiAcif71FfQaUYW",
  "key20": "3Zw4KqnPktpYhBnpVCjJbfZgV9Fw8Xvo8sD28nAjyWuHd825DainMQwUvSaiSXUzZwXQ25HkhjeF94xsPAj6tR3S",
  "key21": "3rGkAKKjzCvcqNdeFwyYDBEqeLLE8Q4BgorP7a3cJCVLnUk8ptyqZofRqamS2bimfbs7FK5XNFHAq5ZBW6M2HN2y",
  "key22": "46XHd5HDYfxTeEwWGh3ccRovbUFEuSxJdW5VpPQ4j7XRjvehPNjQ6XbMvfLQEuprSGGe2zexjDLiicqBVUZs55RU",
  "key23": "5xQQKQKj2syQTnX9UiZnNDEWEV7dh68pNAFzjYchvDAkd3bbzbx2aFrkRxiiKSbwR1tXzZj2RarB8wBDk58cRYN2",
  "key24": "3xcmbhNhoc2nApeA8BvdpiiJhUCVbGSEy98NSoENzHo74WFZjSLNa7hnZUQKK2dexENs1rYAp8rLmVvjnmmztajM",
  "key25": "5Kv7K6CCZsyZHCFNz3ZxW1x1SaMnRJvRew2AvU3po2qV5NwfUb114PWKjKZoVxZFk99ZqnrNfZfSg5uksCTuMYXb",
  "key26": "yivdXuDmwqkxfUCcMhGLnwexdbtQNxZXiYdz4ZyCRqcwwTgZHAECHboDJ3F5QU84EEJvN35fJhM7hz5opwkNh3w",
  "key27": "2TyTbre77Btk77655My96D1GGTKoLpvtPA9RHaXu6UGxkH3Z724Rtm6KDH72DtUDKKENDimr1MVovwuKNDJuoBgP",
  "key28": "63RHTapdMX8rjYeHg3Ae63iVXNMK8jkMeXszkMse5e2oXEnbddqxRgQyZphq2DZPo8ojvpMwj44FGG65J18YDQfZ",
  "key29": "2QukSq2o8sdGEzRAbKLR7Mu55v38UywoXwfaLPZdyDZ2NXkZZQEeZvgf1VWLuBaynd8Z7dp3SmsSNQwSQkHYwJnT",
  "key30": "nU1UNVGqA81XLmjttagFLHBox5gC7iLcibs5YMa7TUNnNN736dtkzMt5CmoKkb5RgpAyqhbq34zeD6j8PtTh7HE"
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
