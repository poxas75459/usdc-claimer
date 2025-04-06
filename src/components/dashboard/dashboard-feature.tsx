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
    "YkHcbvrdkkW22jBoWfEq22MPLKz7EUCUcX4ZaxBpEqmPrFAdSLMAYyY134p1LyGG6v3KW7cNrPEAejPNJ1KmqZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zkAmoomrWYk5JoD6ysfyfS3VVva1gzPQ8NnznogZDiYD2vYR3HqNuZ376s1PvBum6buZDkPzSKicinYwCbkK5eM",
  "key1": "5PWCPi7hqrejfFR85sSfBQpXfkNFaoRp5LvKQ1z5Kkf61QC2XY8aRhytZfZcezkNHvny71RmUPGWBkEAJsx92HoA",
  "key2": "4oB82ELz8aVjKfWamPPKMJi5eGA1jhTDTQqmHwRGDJWb6i99HYKsmzn1MPx7Xxz3NUPLh7uZDR1smYCasKPpGhFj",
  "key3": "63CHumuaCYGSGieuPSEwav85KZQvfeeoMnHyW2MQ3C2KAjdhGPbUcT3P5bmv2KRQKKgw54bTVxben2B5Wrqz4Q4Q",
  "key4": "4nxPfwU4APjpUtMvxHS2k8GvHewtCDv9v9T6x7FjWA76KY6bRwu9WPUeHJKJDS2hh2aQr79Si4caS37wbRg3Bp4c",
  "key5": "4kS8bJxDRi6y2x9nJP4X8DsoFCoDaCTz4uE6ebC4JAXf7u1CByKNwR3z7V7QjU9PDzPEaWfzrDj3eDL43rZ8bsjE",
  "key6": "kZESda7oe9be3hTj43G6bxt6zpp69EzzTfKFC5YDhCBuX6APwo46UnorexNSgPFtSwT76Nb82tJgNf4DbCs1eMy",
  "key7": "2fx2vuB36EPKnKg1zztt6FV2Vss8bWU77WqDH2A63g2bZsoPgNA4rzenC4xAW9y6HVy98vLkoiAfjb4DZBLD1TpZ",
  "key8": "2N7nnoHQia8AVnmim5nUfPBgqv63rxj5EeNh3EVUYsfEaEs5KxybrwccMX9n6meemU5QsiL7hGLUoNNC8Pys4CLA",
  "key9": "Vx3CH8iyvpPrbrMaz63gVTga5o84c2yWmnSJrAfVd3eoggrUryogXXpYdSkfYrJTPNuba6zXQurR3LEBzcbUoa8",
  "key10": "3e43w5LPvD2s3wrxJTxW8akJ8H7FWNALnGgNs9QNPFrT1giEQMUXAtvk7V2382ptsU3QhUejMws6HUuqSpvPiCJF",
  "key11": "5eohu6WQPeEheynkmF3D2VL9qQZNH7dL2qfLsCNJNX16haJNmzpbEkFKi3PvrX2LCkwehgK6unPJ3aoLqbteiRwc",
  "key12": "2Ynudmb9yAfQda1BLsedoArK1c83s6YViHhGYgnaKZsJGkgNcvZwJ8DzfQnHKXZkhRr5qNvC1uABxWAhvPBRZgjZ",
  "key13": "5iu8fHNBPvKpyPwYp6Xi5kBgQGGTeJxBgzeK1UFBnDm19X9Gy8qgLrusKJR5ndUN6KVwJ4VTE99yoNJuFebkKFZA",
  "key14": "28iW6w6qQgCqshGH2pJe2BVRHpnXHeAhWSvZYvvsor6PXFnAc58EB5iSgjMo4VDrF533Teh9T4ThVPSckHiFG5y8",
  "key15": "52pPvgnCtFkN1ivjPgPFDXWThf5PcFHCm57sQen84thAV7NYdPavVQNcfuN84geVK2BW6d4ESJL3Q3DBygs5CsqE",
  "key16": "4S6Vav573xJpKZ3hGWY1nLCiweRGozcskaqM8wpwhufKRHr6urN5JG1YApjPvg5dxTJyPUPrQW1adMDrgk81ir1d",
  "key17": "54Ke9GJzq8WZxcFuSaaq4MYS4xuHzjdZ3biWKuHhXDodASfZxbhy1QrdprbXA8LN6AxiCL3X2qfwopZhwe4LTm4F",
  "key18": "k7AZRrupaEWVhhTv68R5n6HhXhouzx2C4UWC63XH5YjVjJXzswZAyNT5x3DBjtJ6ZwPFz3jrcuM4a1RzRkzAEyz",
  "key19": "DCd6iH4XPxsKNaMmrfmpNH68oiR6mAgCEpd8uDL4iHjXgQE2XaUcydiREBHD7fDL5yr7Dh9jyoJFzSRmqJo79z9",
  "key20": "42cReZGE8dhvmGHJViMGU8fuQNNEdZjqfUwSKZbhyXRVW3yHWDsVJbSXTwsZKJc3RPRw6yjAZqks1TuraDTgw6wB",
  "key21": "P2ce29ccVLBdha3FCTs1EFcU2bTnz6njkZJsCSXnu4DSbr5iTpUKJVPFtN9zwvHNB4tLg2M4dmN1NF3fM3B2pnG",
  "key22": "5dTZAR7JsKCyWLs3U8tbxgWs25hWy5JRVZdxTFRN8aUUDKPhJgy6KPwJ5CWhSiJGHBfZd4Ka9q7yHrjGgAKUBd5F",
  "key23": "36hXRfdZtVPBoifyf4cnxeveBNfoqGZ9UQ5bz9pqeiCAJHtiuHuFJ8omrBUMhgLKVZiSzqpKGNm3UqXy972eCWS1",
  "key24": "66irZGLFphfVoLkifeaokivYC9s58t1oqunKq2kjkqGAsm725aZYiSt13yZuamQfF8oNTX7YeepriReUQZ1MkgxQ",
  "key25": "LJJbWiLtVpXxydJkFt3uzdLRmZUoEwnyhVcoXvy3BkNy4s1vyVtDtnTee9Ff3Sk5weKToyK1gvphXj4ySv8tXtw"
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
