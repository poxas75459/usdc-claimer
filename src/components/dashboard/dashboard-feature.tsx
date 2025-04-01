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
    "UmQqvmJENFUjKfCJHGFLkz3nuVS2s2QHKW68v6nHpY44K6qXQFu4DyCPHuaMdt6WC4JT7dFXbZ6Np7QEdW1zWsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQrNNjYFx5PkjPVDtz81Wh4L9cAHE3o9CKi4QpNhe1poq1uf5swfdYuMfit3udZxJxdN1EZYkrR8pb5tF7qqWaH",
  "key1": "5sWyk6i1tgJWqX5jWkQv1V1fjqaBj9gKaheJRF3eVBY4XdBbMWp54aYvEndkP44hYGeLPzAurDrfG7k9AiFPWgjm",
  "key2": "5ezPTVLvdW8heXNXFuiVWLw34Ezmq4kuuvPUK7Wo1G3AUHXgwQyNPbPCjFPS4dvKNqBN2UEZToPdi9Gua3UyybdQ",
  "key3": "5bZCscWLZKeYJf4TvWuynoitkchXsenSyaU1HAGpkDXipB5nvgm8Ka8bn4DgJrxmYTWk65Wf5MzLEiHhYTXYdoyX",
  "key4": "4nRcEGwccaoaHo35AvTZRrU4rRVij21Cv4QUyWAa4Z7ewini4HATvx8UbUResFfsoPi6dZ6SYGdTKZwYHZVAcLNW",
  "key5": "2ik2ZKmx5T2NQKgXAed25mMdatM6Q6v7BkHdmZ9ZHfnxjs2VuLNprAZXWDPTwW8SsYQR8snekpN898rQNv9eSVjw",
  "key6": "TyBUnCpAPwWqGiQQvdhYPuZ8ERtRuZiDy2VQ322sLhhDhjiSHeacuT1cgmZcXPKT7ZSpugq7a5vuYorCTyyJdfM",
  "key7": "61Ge7x6c6A7fgL4jLTz74kuJgvfEVLLPRpWdZuyVjkWXKt4RZQcUrnFHnNTCn6ZL5BrLDruWrd6ELoz4uhdAScCW",
  "key8": "5pfXQqbDruzbAJ9UJfGyPvwDRkMbYeKXrx7iyoQzT2s3CyjVv8iFhcjkBKGTHCuJYJTAbXVNd11yA592XNtzUT93",
  "key9": "MGa8YXopcZuoxwDg4MngPkCAH3UWreZ1QVpEtk5cje4KeLyAzZmZAZ46dnB2rAT7Dx8chpmobsvHnuxfDtTihHz",
  "key10": "4kAb86Ea6oELZUHT9NPBTw5jfqXxzgqPVuFZaQsENsuPVknCPmmYgKqwvAzfV1rZedB7s8fz3VoseZHa5q8y8GRW",
  "key11": "61Bt1KbRuyWa8nWK6PXFxWizEer9tgjoJRLZiiAcq8Vv1J6DXGwoDkM1Ne3NrSaoMomRZ6xWPo7XSNFh4yvXawb5",
  "key12": "5qmS1EyUrTryBwsL1i7TyCzd4yjSZwAXyGUzUuwmGocu7NSEZy7xKQ2q71Ju6HnYv2z4zkrXXouFn9JdxbeNrixs",
  "key13": "5teL6YFQqYSjyQtJpzGeEwRAxWnqiG8VbUedJv8HhiNdrXBSkYnyVtS2cZkTaS4t8NDdoh1UPoktxth1Vx6gSkd3",
  "key14": "4qnTrikFMGrQFD3QeTsyB15w9ermtMqkDDJR8srQWxQjPkcCUSGZZARJFuueTKAMJ9LKYTXMrqeLw551iYfQnWbP",
  "key15": "2fEC7fJxqXQhVPPTuQmfCWrUUKJnndRrZQPpMUP8S8S6afqhcP6xr1YpprDodpnX6KRFkQDBKm4myUt9aMRxs6xC",
  "key16": "4sZYbuL5Juw9ZSrxaAkQ8UMBXTEsnmJVMMz6Eu4UpCz6ZvQwKKEyL56H67dSxL1Ci761ngTsyHkZhWj8ks7ZtJys",
  "key17": "cXM3B59Ucb15EmPeE2fZ8AnQU3QiWwy9WULz8eDzywJ6fgUBnYYMtk46WJf7Lpj2RSNjBQz48vKgixurU7ZiQVv",
  "key18": "2u8agmrAgZUrEPA3BUVEE4mLwHLVrgHkwGaYKn6boMubTHm72WhpwuRaP5M5TB1QwNpvCfBVwhEGEBshcWV7bSoF",
  "key19": "2wzVBGH7XwqYD79QDVEDMhfnuZqu69uVD67YcfqofpgC1GroJk37pzfshDaE3opBRkNF8EnbsmsqL94FfZA1xzPt",
  "key20": "zVPA4URmtzFWziV6PALXbjNCua4FrW4WbS4opSSjTABziSZ8JfwegjAELYPXuRXiCBbWHYByBBMzMiAtHDWFhyM",
  "key21": "5q5828WaQ8jk9QSftc7VFLD5Ge9dKq2HcULKVLBMVqdwPuUWff7DFTxkUYZv34uHpjQqZ3DboDCpwivcvaz2nhv2",
  "key22": "HEfymyPuSwE1GoxY3xVbaHH9BMSWmHRaT2a2BA7yUEFERMSM4rug7KyUdQJqEShjzsDw9iy8vRGtKHTU7DoThUA",
  "key23": "4zqMqAB5QZUARsFC6SSrtWy7tjWLnxg8wBuEafWg3ppNrqWPbH9AaSLDB4Pc8wHYwYDZFttAtmU3bpAi4gARWx9a",
  "key24": "4jB5dRfxGN1rwUD4ukcaCBr4koyKXsPtheTkMPj3nuuxPsfGC4SKTLAmFVirYCSxARKP4fHgfPz16MXuM7G635Eh",
  "key25": "3F9VFG585JCKPZduJVjZN3Bw9CbfJk11u4MjKPp6QHFqWAeEPtUBN3q8DHuAphaVmp9bJ5dw3krfZxNYfeKbUCw5",
  "key26": "5aTNReC3o3CeVcjRu3YQH7i3iZ8FeDeJ6zwtKzvezeLCH8tEGCtkhnzC7uNTferhW7KJGm1zwNhs2AafHUwcmJ8P"
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
