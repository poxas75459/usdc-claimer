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
    "3Huy6M6Q5eF9nX5gsXm1Za7zzCePKUrX9AiqLLbQRM6iUXerpTQ7w6NEGnBgzCnHxCpuUjVk2D5u8s5ZsysmvTEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sDgtE5UQWSyWrUCLbANYZwoNqMCwcYApwuHUkkxibeaFmrqLgMNdyJTLa4yUwxio5hcoeNGCJS7uouM3vsX3L2",
  "key1": "ZS7kPxp6RQtLig8RrrvThdoRwMfthsqLEMZrPnK5iYnruLpJ2kCatN8LuZgdAUwfVMCqMoUqbffbbJSpGPrpVVk",
  "key2": "5LcJDsYumrwAaQaKENK7bW8voHqW3PSAz2fNrUqkWiE3HixNsFX9DCXagTB8ssYAJ1oUrfa2XAPNadRb8LuepPG6",
  "key3": "2zRWhAFarVivdobP1N9o8CU5WYimw3DTE8vUUQQnAgjgDJwZfWRQGZCPat6Q11G8HdjgQFw5wMC2eFc7Jc1iH8XU",
  "key4": "5D2Lg34JfMk5HxRCpAXBNsY7ZnkN8hz8KF4XPkxsnu53x2FrNy8jGi3twwnD4jnYbwRk4Ns3kMsBgN6iVwL64nSA",
  "key5": "5cnxDxmbwenmcdDonP9xyznru7MViB5KAgd8juevDJ4oawuNkbc7JuDzgJXtKSd3BGiyj4VrMGevSQWUY8ZidPjw",
  "key6": "2ErjzaufSDShgjH1mPcaRKUEvCHnpmBUELWiZukFqSiqMVBf5Pcn6rDi7mHKwa9hBih2nBV9ACTkmhsLsFErzH6a",
  "key7": "4NqU2k43QwigJPEf42ZhUdaY7fUu2JL9tsLYMN5nb3tEmPxmxXY1RyAKbTV6CD5tMcpZjxkkiMe3wGLzURAEgAiL",
  "key8": "641L758tTi3as9B59hpFSnis6RCbx5erCxsbhcXX42SmRJMkqXPcLKZfZCDxBUTxTiggdUVnMHA5sxmdFxt4bYzk",
  "key9": "5tgaY4j4iYsRBqpAsmqVx1pFKqZabxM8TJQeGek2vVayPnxs44AtMyHnYdMdbFxU7c7GznrTZAF5SsmMDnfbKyFg",
  "key10": "3zFhW3ncgozjrJLQrz25gByPkuwsLPqh2Ga6Qgxd2V9oi4zHukusWnwcfA24dzAjqkFnTtmEDsCFmHGwT1SbW3d1",
  "key11": "ek32nFkZoyyXk9xkExq8f1SwtoBnRyPAY7ScqGaBuJmPSkTDQzwfHfEUixbUuutosWhCdhsQJ5dqsQ3v4nsRbbK",
  "key12": "3s4SzMrXvjFfW24yA6nbuz5KjYM22iHa23atswGPBHjRw37e9VpBX1xxL7k7UDRvo1PoKZ5m5jb74Yufc1uQ61tG",
  "key13": "3N732m57YWf2dsFvrSyfrFZTiR2rZ9tABwDmqhzBvNkrJgWS8M1eJy1QZKffmsnQie1aaYQGiNxntmmNdrCVC9XJ",
  "key14": "3Ak1yxhpKpH8tmQwPpr27MgeUZjkZR9CW8dbbsJZDgeFUs7YbrMKpBjC6y1EPJEtbkPZQfxqTveLyb3EoNoLfQrS",
  "key15": "2dsZN9UriSeegkVuVLhWXCw8kuCW4r7trbq6seSw6AK8NrjbRbUNSZemsRUBoJh3TJZfQpiUE4TsgYjs4TihJ1bk",
  "key16": "4Ydgiveb1pcRUycrtmHF9vhhqbw381G4z1hJE5VZn1brSZ1efVN6mLFKVGm3iR4gTPCtQKUv78VNXu8yGYUeRyNq",
  "key17": "QAhmMf7BAcTD5XoZEXNtkRx431fSkrW4ZvDJ91poT7cH7wCqe6yDMvSXFftKEYtwEVmbmN7ynKoRLU2NhgpSzfp",
  "key18": "5a8b6qj9odoH5mcBFDy169136ihAMoLeCGAw6Df6sBRYj8mZGmpeLcgnLkbgnHAmaBBdLhbMogY42bysrsyzj6Ch",
  "key19": "3oCWsWnYufgd98mwzLP9cHYHpg7rWWoN1nFMUdktnJbNGHFV9Coo6GFW6ZFXzWEXcp7FHzwZ4s4Z8pMcuzVZri1i",
  "key20": "5w4mgCrJgxY7obVhAcsjqLjrTrtvTDJD3ym5RniP6ppEbrf9MbeQHssenjnjKBw5W1kJpzyqHWMXmqe68JsLXNjG",
  "key21": "d34d1EE3zg86U5kXC9z5PfvbC9bEs1CZBooVDXm2t6dCrEHhkanUkexDHHnHBi8RyqYjXtY5iCVynefkZgSDcn5",
  "key22": "4fDCcaYCPUACPK2nVEGz2jkXp3Ar1JLaeZozdn8um4xMD2eiaXJrWEhxJFAX86pP3HZnwMZHCB5VYRXbq8xcNZoZ",
  "key23": "4mFAeYZXRLnDrnGqFwsCbgZkrN4vUBb8661qAMFAW8ZGykzeQMaHqmWURnNmMvNkj7grbAb9b8GpxQQJonSM8VcN",
  "key24": "3s6rgnPMDygcaWgwexunnHuoKsFXz75JTTWmUbcVLC5XuWEoJkwLydLB1XXs1YGc5aqiPBadPjFiAN1PJKV3xH9h",
  "key25": "44wzTLqFdcjmwK6hgG8BJrgvBJERUqMnQsjEUy43iDgFN74QDibNBNbiisPMqgXizaUazuMHaUSxSsf4wjFBgu3S",
  "key26": "2yymLAG7NWeqqRi6uB6mHDvGmfwJ6HNNkvHFMKfFiPEDsa7XWa8DFZ6KE3hH1LkyimtGeQz6vAidPAkLPnTyuNDD",
  "key27": "3cPcHv62px7ic5WETC4wR69kqaL2DKkxrYj9wmvJsRQ2YWFyFJiQkK4n7hymsndZQQDnjmj6WMUWJLbiEUyDYqzQ",
  "key28": "FrdpmUSonUtrbZdNoPVtoYtGV6vieMrwdLPHmsmyqRgUffndv8FDN1Vc58GuSbY98PZRkTAkPC9wynbewZ2YzSB"
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
