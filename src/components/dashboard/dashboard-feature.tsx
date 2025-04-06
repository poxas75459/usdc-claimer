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
    "2GyYtshXbB6t11Dzbn8C8Ft6vYNyJmpBukSEK3ci2EwfvpnUYvDKK9s1CWfWb2s6YzHFy5mFWSEj3asbnb6747QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nggowT1bDZ7PfAQ87zw81QSXeqXaf9VMWvw9Ar4yMNV1XhMFQuFXCxT2Gcz4oogmCygT5tixSuWqjoaZjP1UE4o",
  "key1": "2rAePXdU58ANJJd3Z2sswijp24zRT8u1vtKvt5TbgZ65RQznj6qBAMUXxeqU8VxzxgLC9ZoAk9YXTqtYteLSHZHL",
  "key2": "2NDvS6heYUHpLPo3gyPpuQ3R4mJdX3Z2qYnZ3QMKxXvLigHerJwQSkqT7oycrHEzfctxXFpnDyqHkDAvQYX6VvHk",
  "key3": "4sXGWhyJw5HPLc3V3pYfHxhfFwgukb8hhk6Uu8xboo6iWCTAnrQCcyymDnwSdt1BQ6JKAisAKTi4ZdgBTNyrhSrq",
  "key4": "swYhPV5jfb5qNcfMpvMznr93bhHmhAUBgqGG3DxZ19YfJFzYh8NXKvPsntMSFqb8iesRyof9sBd3DTgqAjFFRLu",
  "key5": "2CPbBaD9yrs9zUUU4am3FMPb4h8Q5r6ecSmuzjdVVkn8BZMEzNqjHv4eLo7Zyq361a1tCiGvXokkUQENjy1DdLMf",
  "key6": "4XhrMbWDkzpGb6tRGrVit3wornvaz5oJg8d8HuFJGJZRkBR67qfk72jCY16ZroTYq5o12LtLX61KKpYMGNdipzZc",
  "key7": "5yQKy19wAjKRsgKqUbfipkeYfMJSVYbyMyqr98MAwLqZSAB72aFDHNKLBNLtQUuspvAa8RkXkFbaPqPxCrxtS4Ph",
  "key8": "82Y8pi8Ntp63vVvkLT9ZSwRJydgxQrSGjybsSdKsmnMDLirVEhVABQVmWY2811uv4Vek8p6cN7QuTBsERkCXC3X",
  "key9": "4DGC4Rnm6UH5jEGfPUfFJTEXX32XJejax1gZFxoTWmYGpHqvhMsDXXH49nUz1xY9En5hTgyisjnBYN9BUwVzwTa",
  "key10": "4qbQbsS2US5FyCj9Gmakit3TisU65vMkRrxMneyL9Dz53EbzE1YbHnSXHN2ymh2uYrbye9XYyECmnsfgbFEZkQyH",
  "key11": "Mc31N9QnftLZ4t6NVnV4AVQxtHAqPgDpA81ccdbRouaXdNpDrDB6ftX1vpuSEEXw52QWxza2gnT9PEAqJeAmwfq",
  "key12": "5jk5cwT3BcQfpNFTjcwFD5E4mahGdbKQGjLxH7sTN3YRxxwSVfyuJcLhJktSDFmke54LK5mR96wpZosBPNYmvLRm",
  "key13": "5WifGMJUpqmymHar3SvxART8YL72SZzhytmcqfWdix1qRUySEdtjF65oy2muTrh6zpJAWnFtCMJxjXvWmVBF8SL7",
  "key14": "5x2EThCNNsMduXVAKg43jKRvxcLVobyR7Qpda2AeHzLB1DxCDiThRabQTySjBEbQXVeF7YEwjUmHpVFyzoMsR5DG",
  "key15": "5pLQCKfvkHNf4bWhymyzvbuJeYQ75m8rAi24L6oTL465pAo3qSt6yq6PyPxHavPXbPhHfRQXEEo5NtcfxeEgAQT1",
  "key16": "53615EXVYF5uRnWRQcY889nzUZCiQcVVdjNGxiE3X53yMwKEBRanzFSAaJNNAuW5UUEWQW9ozuyjf3i3cawRXdPD",
  "key17": "34GxGQa3dpjvkWDZ37ATxJccwKsvdCsdcjsYqvU2gVY2v1xkUpGsBoBCH9Ktjr8wWe5NoRzThG3sYwFncRsSPjb7",
  "key18": "2T13CVaAMDQbyEfzxjA2fq4HDxVqRmhMVcXSYHxuWaXhCfC5anNFmfnpqjykFynaxMaQAbiEb1Uhayg31offfzSU",
  "key19": "2VfXGdaWgEdZ4p3jMkaxJR3rhzCpc9m7T2A3siPdsXti1YdynriHco26D1kWk3VATp8isbzn4NwZfyfmn5mvauxL",
  "key20": "5hqYg7ZSJaE3gTrttpobHsrFXLNUgtMrBVgEvyPo8viyzvAFHBSjNyZhA1PnCbEB4mQv6T3NJFB2i9A1fWTvMYnj",
  "key21": "2B6LVfgqG6PgjDzyE2fbUfxWN3QC4XxAPqcoorG1Gb6ak2NcAp8oTQPtBmfjkEXY31ejmVHoyTGgFtfMbCUxNu97",
  "key22": "32wXdNEzeipqxA9bxwNv481ctUJ8ivVkifxvGW4MUDmNvByAtFNPwVKQcGdy1Lgp3Ttozh4vwXDKUG5NqMtv5mbz",
  "key23": "5Xha8LEkMMzq735a7E3Cpa9y7ken1eFub2k2bmwNKTQWJesYGRRfyASM9tvAdduki19MbkwpdVUhq5Vfd5ch6v7Q",
  "key24": "2R5rYEWnxyBD6dodJASMqRK618D2BRnT3wpJ4sjepzQT19eGM5pnrkGz5gH4r16sHvud1HofcrRp34hd4NaGQK6P"
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
