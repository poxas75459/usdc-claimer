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
    "5adehwjrKoasriVUsZg97ZnPVccLAjzAP4hFQHxMSyEaukJur1Du6Yc4qWymk1eegtad5Vp5xw1KMja74KHcjUvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNbNEMMhXBCG6MJkERvB52mYd1HLUdTLZxvVGbyBNYeHsu9X4wSiFrnFQEEL7Haj4Kjt3mk7umQJrT2Wspm5qAD",
  "key1": "55y7zsQvuMKp14MtSEXJSrAcBYd6aCB1cPj6TSMJMkUCwxkgTU7o7kFZZFmkALJP2BKeWp5UqrApX8jiHxa22JnD",
  "key2": "634o9ZyB4wpSYvYDraA842Qv2iAqoBavM2PQhvSBLQdFggabuUP4bE4EDvcAumYx25Pn1VJgG9seW5eqdcWZdb5t",
  "key3": "Zs2WsYh2Eqrc5AHu7VvKWintaYCy7Y5wjvAZ7Pkq86j8vfLucr6zrodGGvRwUhXNiD7wyfE19HBUayZcZU7MoLR",
  "key4": "63VkXgd7HSMUhCiLSYpzizuuwcZpx7WqoDZPDVWeMTBz5KDXTVb4fxt8WoGjUoNMQRzXj9rTYisFigjQYVjPzdti",
  "key5": "4MWb89pGfJQdsapGCLSN548NvmPNtV4Mp9yborDGfEhqsqj1d3NKu3gi2GQpjikPnVt5MKX2i4srfuEt3uHSYdYB",
  "key6": "5ZCp1pLMzPfn4gczPikKa1i4qR6wRL6cu8BegjwNZTH5vTimnkvpv9zijgbgiAJsDWnYQryNv7Vz8dL44mW77P7P",
  "key7": "4yXPh3R4BHjzh1FqWCzPBhAzJE1GxHDuPtxUFiqBaPMsgaYQdLsXtX1gEhULPGr9FQRiKDPRxR9EoWD5LRmFyTrM",
  "key8": "3YHSvrWzoKny2jPGEtAwFh77L4WEu2ubX37msdq5fjCUYAd3VNNPZ6DxDGCgpbZq9yZtns1Reog2rPTXZ2X29TYy",
  "key9": "5krszCwAQTRVZAfAv5xmqNS1QQ2d9qnniB6KoNSGx4szQX9FHHi51ZadXJMTGiZ5Us5AXzKoAQqZsz1tsE4eqXbS",
  "key10": "qtCNxgwaWrdXVB676p3s8WGr1ccXKTp9D4MEM6AiXN9bsj75ff92umSuCjP3oegEg6qCUya7a3rVEyoStidSjiJ",
  "key11": "5Mw8HqQRatnnRTteGLg2pYpnpzsj91E9u6HXgvvtY4igp4PrTXQca7VgMWPup48vUSsubnhc5CTp1dUTh2g6YNeE",
  "key12": "35FLhS6tjCEVG4sKpXsj93Dyz7jtKWbKAAWuBchvC9HWQ2qwU7uMUzpBMbNfi1WaRQ9kG5Tnr17kFELutynXLcqU",
  "key13": "366sp2xjGtdiT4y2E46t4PSXdkp6p8YHvLA45SVq13APwDsnfgZmricj3eKLMLQ5oZyubULBmWRj5V6zzSKGHC1g",
  "key14": "5ZX3tpMQhUuaKfSvKMQDJsJbnzQgspq8a68fXzkxxBxrQG3p4fMzHpTGVBAsZxV3WpR7WhfXLvZeYNBJRVGAMGJf",
  "key15": "23VECHQcTTGui5XXwRMYfdbT4kc7iGkxvRF4mPAbk4jDcZGEfEqpFvsJGokN8oGvP62znMW5kfJ4gHMzAJFenCLg",
  "key16": "3HFoW7CbrTp85eUj3xqtxGcN1tUvV13M5qj9BG3gRm9CW6yXysiWJZEZ7vMm26zRuwUJyx6XGcES4nixX92Fa1v",
  "key17": "2iQxrkZ5iCVe39rMkNkuwcqn5sEBBfSpgMNZUaQChRzvgj9jeNbWtjYSBSNFsqXbYe6Nv5poWUr19aMdcUX1o1uJ",
  "key18": "4simzmSkCXs2RcPNWg2DzojKqWyKdxY6zidxTTqg4bspHvb3Jg8CuT162coNSWxQ7D6YgLV6GVUA4kRYZT5etmpi",
  "key19": "2GTsCya2tZA5v5KLV9cJYjdrcCAPNEXFd2SkRQBqH9ikJdbdZu6dQ8VzDxzfkU3whPqCtiwE8R3BNWJCGJBD5ZaX",
  "key20": "56hqE8mB9eHh35xxp9c8tiJqj4hy7r87fUCS2rwCLvqHPb6USTpf3XP1uzc1MtjE2KWMj8PT92HZctW8nxc8MKGk",
  "key21": "3qSCR6TmKXfuoxBP7UddPTWnPKeBXFrgjhJXwN7SACqUvHsssuS1eb3AmN8wARzofUeUVgamy6sZqrte8Mzq7GS7",
  "key22": "35fXFZ7TaKhxb2VxKGWaTRi1MJ2dSR4BdSzgVqkAheeG8ZiJMcKuEG6Vi7pMdBUxBYfj9kbgtNeEkMe9j59Ce9pY",
  "key23": "3yWnBWC6Jj8CHYkDyVsDjJxzpBwEiwsyTjd46vuRWRQisZkF7oaKGzaZX29FPvc6A6miBpeHUc3Kj77cj5AZGe1r",
  "key24": "gYYjkpAyLheCsNJmPTa1mcZhmBHNjCbTDQvXMsFQy5utjxPN5M5mgMZz9HCMZPGVmJ3cUZgPmFVKoWoMu42f8tg",
  "key25": "227w1d9snyHiv8yCmXgdw7PP6qBEjeYLCBBtGRbDKYx1xyo7BzHzfzZFXR259APtpT8mjhMpX2BLAqsp3Sp94Zkw"
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
