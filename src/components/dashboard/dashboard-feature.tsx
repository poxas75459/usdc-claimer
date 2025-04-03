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
    "4YiPHNazC2gRFKAs8k43goFirQLrpfzYM7cjt6tgWhSUJPknjRUNmp2LK546frKBt2mrnXeg6tmwv6PDTBNY64yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTdiGgGQqnEQ17nuaEQPi6rHAAG7T6DhaioR63N7TZpnZG4La4FWppAvhhwcnfx6NaWm16RyL9tuWAExYv4jhNq",
  "key1": "FZkL5reGaYnQ2yFCPsKP7utxiTgZq9EML3z1CaVQGdqDBsVLi7nFxjjCciTzhaGNh1SjpaUnnqnb5F8myunwC8h",
  "key2": "2N4eSdk43QhUMXzJExWHn4p589VaC1i1oHcHj7aGCuDun7xNHk9jMcA13DzSk8R7p2ZRLRF8kPpSoB2QtsSSmNTX",
  "key3": "4dqDe3guBMoyhY5ZsBDTUhzkBAUq5KTfysqtopBsoFqQeCz7NBaJstwuXGKY5gsvokdYMtnqVwcHLDekkUMJfkKY",
  "key4": "2BVbTJ8QZADjYk2z3Xqxs7rnELiL9YGPiGVb5mugtx2uEuUbbDdw642G6WW24F27LeZo4bfNNGRJ4RWADihDyJNq",
  "key5": "5VVAkSHYGXuB4SiiJVk6gr6pziPKTP5gHFsYTaFFmwWAY6qCDh8ivokygHjFChPDjtw43fvrA7FwJ9PdMezwWGe2",
  "key6": "4oQitQGxYwf6G78myVRATQYKUVvmQKYU4Hv6MkhXhqNv2JYXPqrWnXRVuFn1ew2ftV7PsTakT4K7bEQSH8efnJnE",
  "key7": "4AMaeWk48mt1eY49mHPTFW1myNVbxJBX4Ve3ch7wDkrFAxjphfYPAhLiYXjXRQAL2CpAu1CeKR5dKEs7tvDbhZos",
  "key8": "3oV8Cm93wYSP5gk6Ng4p5Ph6YQwtJFjcyTx6A4VDw6mnxaSJYDXTjbQR2GjX3og6CsAzacvAZucnaqiNpCsz9nUa",
  "key9": "actoyuf9Bz2VL368T1NVxSF2fp4Z2trUJh9Q3HL9aaKQA97mfuYppDEjrCfoUYCQGkoBveQJpy5sDENvErVExRA",
  "key10": "4rhNUYvHJVmXFHpCqArCt7ruKKLM1a6LUYVQBbSTQehMRMk4DCBRbrUPHuo1RsU5JVM57cGC4dvYwq8XHAACmVyV",
  "key11": "431wxdPrCNDzsEEmYj79KHSeBerPzxazNfcswDvFTGkixrJNF7Zkoo1bumCHNNC4UEvwchRqmiQZJJiWQVbW32mK",
  "key12": "67JveGz7SXun9hwtAM8A5aNxUC1KYqVSpCo8iazd7w75Mq8PxqG7QhmAi3BaG6WHUW45ySLaHeZdC1KpaUVE4y1k",
  "key13": "Rcc74AQbeV5X3sewFYCyQShGHETc8KgrzAWiRDxNF9fSB7z5K1iwsTWj1twi4XWVs9sJHVqH3g57MGJaH14NuH6",
  "key14": "44cxWmnYjKrYxgkoo25fXrPQqru1xMpgKs96qoNC49kf4jaQjLh1QG3DQYim8WRNvwNPpasTy5uVj12aKhSTWsYs",
  "key15": "5HXBXzwaAMAhXnVNipK22F7aFBkfLiZxvAuRkUFJduSP1UnvrxoSxHnnahYhJUdgkc4d6BhBXmHvuhHqws38Cq6n",
  "key16": "4ZzyjDZ24ps1U8ptYUhdqtDXW1chnJmox1ymRvqZFCsxkCEzpa1UFzNQzeRq4p7siHcJreYFeuiQYrnSszarPY1c",
  "key17": "3VU2ciBZLjy8n4kAHzfVXYNPgmXGfTZodpGHV4vYpWooKed131C211ED8ZVdnLqLHWpnGuYrcxLJJ1nwq5oLaZBH",
  "key18": "5BVoUwgc1NmLG91EAkvpNHwxPYKn3UBpHiu8PZNba6Um6rkmX2juz8ym24wVwL2MEAcmToyayeacrWdnRJTokdZJ",
  "key19": "3M1zgUniRNWA2eQDKLKq8vocRhoKiA79o8HFbipDcKFqv18MXD58T9F7TsWUoviJtgtyNbDogizQ3YS6Fmv2hmYy",
  "key20": "4FD1AJQY2APsMzv1brQMfnMUDj85mmUBxkw28tuPWPSkJVMxtEBnPfqHr3CGxNMdeLnrNkDyE1LwNrpUpodnK9RX",
  "key21": "4iabxDgti6f9c8Hy7tzjkP6CfSahe5ehzToS7ZnaQBMBgnp5yrruJuAAwYRhF26jNRV1c5JNYSpK8G5CzR1DB165",
  "key22": "CnaXoMXkUgksvKfLpH82qnJXiaNoUra2UD6bK9DahNNrRRbU2MxsBrtHHze7ssQpfD4bMD4LRaahxvd99bfcL4y",
  "key23": "2qzByWFcNJ2RX8WoiTMvogTuN8K1mU5P7dXVGRQhSwFdRP6aeBSHmgK4ArwUaWVY823gGtoZ4bNrJpfo1zYUJVe6",
  "key24": "h6622ChZYdiqj4mHcBxkjYcXj8X9ne3qQiDMWoKPJgNWzviYLoRm9mByNyzBbZB2Wxo4FSm8jyZ3NUWoQkYhHH7",
  "key25": "5kMSDmEiLJ7JJSRrNG6RXLSTyuibuULVfS3cTvwcGFtHQRiosNQ5nZNkfYaVeQLodiVqXUdYKMXTGk54UEC5gnAk",
  "key26": "Wto47Rzz8auwRPcMKCACHuXV8bn3ZUQUfj9Kgq2LY2KHpTwHjZ47pCDvCyd6NXddmPXu4vJSocNdGMwLkwj5GLZ",
  "key27": "2m6WyF9aw3P5y5BHF3kJqSEdgTMZuYfQA2YV8aXmmFTY2yMx89QxgqoWWQiSU9q1qBAEeo7vEWzbXZSmaoQsWRm3",
  "key28": "4LikDz6qB2gPc7rZbYES6uT1A3iyMDek6kdoZtFd71NTEm1Rhjtxo3NpbVMZGHCrvM4iy6ZQ51oDeZJwWrKzCY7b",
  "key29": "2QqoV2fhGpxKk6ZqA4mEJbsn3nD17n8jYdigWoV2vwiz6KG3GWoW538zsMfuVDLSGEyfyrufFYsTtWu4Bp2NNfAe",
  "key30": "2GfFXGpa64Q9fbdDP19AmWtKJxP8kJz62zCVLMfqKNJwmmAvC88rZvZsAZmUyy2df7tNXpFjjbavgzwmKsnf1JyY",
  "key31": "5gekvTiZNYY1H1QYUrz3Nau8KGQXWvLiS83CjAMY8XoLujzzeEqDsLx3NXEVGXB9rdf5QvpCdGzutaYCCLtv4ngS",
  "key32": "5a6YTotVhMvcp1LNZ8kR4LJ85ZLcyFVPHBCJvDRyXdngbBJuVd8LGc4XA2gk3jFrz8duQ5guinCLfZJRN7yn7Etw",
  "key33": "3a44TfkNnSB2ubx8uP3bD7AafnoSqrHEHdMLzxSpZamMRPS2thHs9zw9N2FbBGkWzy5CzGpS7PdPE4Ea97xznKBV",
  "key34": "3yF6spWqCWkGn7k1pmkPdywooPCGvKi7d49WbwGH4sM9NmGqcEokB281SYkv8BC9wTXNSxFK55Tdo1iheXhGpzrf"
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
