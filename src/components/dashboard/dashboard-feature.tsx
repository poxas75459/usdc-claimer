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
    "2NLqER9ceXfhqPP3ALSowWpbqQjgzS8hMtDJCDyVaPuqsh7W2ab9GFmWY6MwYBGnoJEjntGZTHyMKXuGrzi4oeJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xXHw1J2LQdz1PdbAoThHMXBdM9nSqj7fbMeF5iu4wN2m3t2mAVutL1jJFmFftJFcJEDARavsNgrvT9Za4kA7WAA",
  "key1": "pVyFL78AQmWHH5a3orATfpjWgnF2kjASPzniVrt7h3TLr4DmQDwKkvWWgSjxwXXb3GNL2j6bYhLdGKPnvY6Cjh8",
  "key2": "2cc2Tp6h4WxEDhCCC9bhZc625YdAiYobEW2ZZQX6p2GbpH5UCjBCn5Bckev7xbZBeQvosQJprS5yPkaymZB7NcFL",
  "key3": "79as5hA4EKCGtkHtiKnb9QTUgHXJHgJzv7utk57ir8YcbaF1XwSzUea6PLZm6Wjh515oKK3cdQ2zQ2fYiDhej1K",
  "key4": "5JVxwZsG6vZuGVyQpUbSNu3QHEWPZZwCSDHaWudzY9x7c37nXKJC2V4GTYcQpCMo2pS5DedqQ6X4e41JycPPZ5Ay",
  "key5": "47fh6KPjChDHVzFWYD69BFtr6XTC9FcwNxwGoW7guXLAToZFstw8x2wyyTZ9CKi1mq8WJzRpFXMwK83NRJX74hj5",
  "key6": "474ipazy38qaTkzpQHGhWVX3ACBCTn9rAUP4nKdfKhqpmvGAur9ejB9zWpfXNjUem2UKxxcYMmKdA2JC7w4zDJjW",
  "key7": "AQ5GCpfTdfdT7itwjt2h9LNkrHcdqy91pgNdrXaBcmDubJ3P1335YX4FbjVLSYNePASkUk1NeX9yFVMhLSHf4k2",
  "key8": "3mfGcQEuX8gXLXs6ewBKSjfYoJt2tjy4ySxMcaFpYS5jLEy5wNoGML4bBLjnnhQAG28hKGwk57j5bNvHvhKp1NRV",
  "key9": "2mVA8VJkT1jLLXLcUJ2pgUTaEeRXxn1dpQbK8PKpfZCfpXh6pX23qzgGTK6VYeMENadgbvYT79nu3LZHWDfqhr81",
  "key10": "2WRpMQojLsYs4VjgKMweXL24qzLTTnegBo8oC7KhPtdhrfg5fvieFyhRzbMXcfLwxDNhSfpj7YVKG8kTsYMWA6Pn",
  "key11": "3NcK1BuySUAeHAEj62AUrEAEDXK1TN1VyruyLMhdU6ia6m57Nag66k6Laa9KR6Sck71xgLM4soEXxbZW2hVi3SR4",
  "key12": "2iXgMEgLP1KzRLYaZX3wX4LTiCtYcUXyQyxQz8JEsAqZuZ7Jv2a8ER5F942nWnQqPdta14xaEgAjhthSMtycNSJ9",
  "key13": "2F8gmdgCpuDtpNPXf7TDzEgHveBH4YEb6hYSR2c8rJUJm9eP7z9jrforuPkMip1prhnCn4Ejd1dXimBigTP2ZvF3",
  "key14": "5gPSTRjWRhLvZnEWtwpW9HwVnKPLo9BNA32YaXxhHKeZFsRhNREUYPomnWgTvs95ArYLvTjdqDEfBx11XXUES8xK",
  "key15": "Q2vy851HfyGc3rjFxeCrUSkWePacEawG6CU6zKmgA1Uhu4ncc59vf3pyMVzjy4xJKJ2Ss2MKH5akaTYQU5GQSsk",
  "key16": "5Y8e6ZFKm2umJmpyRwuMnLMBBscQfgv4AM1btzS5DJ5hZNZ94mdcebNmfGXZPWVPS9MYEpJdgvtzVYz1bfmr3DeN",
  "key17": "6f1fEmrnDkLG9oi4kzKoUgho3a8fSWtrZ2b6pGVLzHAoT2UMWfW9K6uHfifKvN8GpxegAFT7S9kxVt2KFdRnUbb",
  "key18": "2f4QcXYexASBp3yjVx7Kg3qLVQWErE5yz9qjYYkV6XY4Q7Tm7sfMB4me86psVX7vkC7qsfXJeyEAer16fKhmJ9Mb",
  "key19": "5uYDFiN1Rngseg3rpv4iaKBgi5ALM3jFBcbJzUAGztnJZngoegz8Qccp6L3mU41WxSpjh3r9LW1uwrJ33sWQyZ8E",
  "key20": "2FChm9Vixj412W38XLdD8kkqj5XogvZ6vvEUHzVtzQNaDbV7vhSGJ7tseNfyYyekkYFGqDMkRqzW9UhvHMyWm3kX",
  "key21": "4JWwbPXSkNDwafV6brNtuEU1TwEWNsEpi6A6db2VekpyVw91PEUQGpj7UPayimSwvouBt4CbXqjcDsMnJDV2a82z",
  "key22": "pomrWr7eFWZZibX4FhY2vX1pteMf1JzEbQgPT35HcFNcTHSpAY7LNtp8P4cxWFSNzJFkGHbX8wGYseGN2H9bGPR",
  "key23": "4RkvgUZu3vimhMTkKHKCsp8KhpvEMZHfY5ZNGH7JHAYifZ4weRs3oJBnyhVCaF1cSsQUvWSE3izF81egGuuHBaCp",
  "key24": "3TQteW3GnnEN4mg6TbEVLeX7zqKC6AHqCuZo8sqv74CmPYpwwS4UrYrq3jyeWmqaqEC9mgkx1VoPzmTqbED1CZ12",
  "key25": "3FfTDZeaFkY8bn3eRHZsCiuKsgzdfXoAgsrM2ikoejwaa4Taiczu4KGjXiGE9CRdKDwx4GxwbhkTdRKAaLMEQRZg",
  "key26": "3GbByXyJ5o7YFbiw7tYNpGnoWLqYD49Lg3JYLfhWTa1KsXsBZv7uXzCqL2Y5UyJkGiKjZTh1GdoiKdTJ1pdudFvR",
  "key27": "79FHVjK8WvK5GqEkZo44tJfDQftSugMq5HWeaydMAi67GUBjmU2JGofaiPe4JdzjDSQ6xSJ14A8GDg8xCNUr2Z8",
  "key28": "5guCdN962LTUnRukg9h2xdrkGWb9GpKT1yEogqH953hmMSm2BALgHHW8Rug88UxZo8pWYV4mFEkDLvViMVYYFNna",
  "key29": "ucVE97P1kpujCpFBDHknaA1orPhFPrbGaLk3daG9R5kYFzWmnTNGEVuAk3QaeSD8L3ScaTGUQ2LgxVcqvDGasqJ",
  "key30": "4ECk35oi4zVcmJ3zSS2C9gy5wVpYVvYQrfBTWdXeWsC9XPKBC3PcHntRajhZ3CNE16LxvYye9uLKKiYGgydMfwtx",
  "key31": "3Y8WBofG7RECohNaBUWbi3qpiv5ibNxcj6gtZJUAC3Bw9gQ4Ro5GibXFCgosPvJS4zsHeWXEodEeTXTteRuxLPik",
  "key32": "583gSLYgZgf5qDQDjfsC9yhmxKqtenCoNY1mvyqD3mWBrqpqgchc9kAtoq7Vya8XRzWWrQ2JLyvBSTRjWrHFGoS6",
  "key33": "5kFA8D1UdmJ3xoeMTRFf9QeYKDwnaeg4gS7DyBGZp1mcj4gGwqSqzmrUNXt7GFbTwYLRh2UZJgRUPAYjEtGJEP1w",
  "key34": "4UtJsUggMncE55gtte6BPLmR53hiWKbdBoqEETqvWtmcrtrfzsbrV28gGbpiQbvst9bTmzUokrfAK8c5xus4SBpB",
  "key35": "5TAYF3s9FWHbU7QuY1TNLQzoxsUL1YpCebMvc1fsEe2vmxy2tkFX5ku7xCbhBHyZnXZcbc6QWkvguxAkwykYXBf5",
  "key36": "657BUCQb2hTcAAE8sCehsQxP6cfCi1NXiPbwaVz7BXRtp6V7dT5ZbeP5rhrxExw18Vyps2JtQrQJcdavHZBXTFCr",
  "key37": "4JCUNk2mmwhjSgnhLUErncfpvwaEmK3MVztouC29Nx2d2d4JAxoNSNDfSqDRnhGkBTrWBa3igB2RzvkicpAyx8a7",
  "key38": "3XK72MJdpJkPGMChbYWhEZAbEBkH47prhYPX9WsKKAmkkkCWdns9XBr82wV6SJKF7ZdXKQmxya8W5ZxzEobGHAGA",
  "key39": "5LXnrmy4uhNtnopq1vsiVBF5owSnSBSrnnhpEQrs9DXdmmGx6cNr41hEcVWqFdKCLfow3RmPYbrbfjj1fcF9ctph",
  "key40": "2FhRMKuevwx9Ssq8Cj4R9HTEUQ9Cjna3s679WnKLcVSeJMZV6ZNxsBVJcsZJUFBPdz6eYTTkTLd8YMH6KCv1Wv21",
  "key41": "4EwL6YgqgRG9WcDeJtwYPVup5NFj7D3q1kTjDJ5Axume4cfLFwbT2tNKGG5PkuUaTJK9wJPARts2gcFPmPr7qvDF",
  "key42": "4duwuCW1J5448tyMY3jKeqTjC3JhqydBZyWug4NiiMXrzdevmpVoBLt9i1dosBA8sN8P42gZA8uVvvLASxYQqSUi",
  "key43": "448C4kLAKJz7kDaCknPCJHmGsGJRkqJRyUkijaLdjbuYCXqYJSwwH9e7DCYpsy3nzNcXv93qPByQZE5oHuNBDxgg",
  "key44": "WcFkxipWGAx5bbTuDbKgjZDNzBKP5gJVV4qAsqr5EE9MEPjZick8wgLnZDaa9FdYS9xZ3UtosRVfMSTqxCDMNfj",
  "key45": "3mvZqGdFfvNjcD6U7Pe4482BZzzXZa2yuddvK3ihdW96fofmUL8MoaVjmciDKfX5x4BbWGymNy7DFtLHQJofEkGd",
  "key46": "341WWcbL2eWThJLNgciFi7o2fUB4q3qhPNQmXT4GtE1A6R36jdpshBK4BUqifzd3Xa9qynPTCUucRpJqkzWMxcB5",
  "key47": "9t4f2QiBq3fyw7jq6R2rH2eKbffZZRZkgHH47oidwQg5QLQKceZ598Z3ZDNiGfx3vteMX6xk6bXJ26jei5yUrbn",
  "key48": "8JD2NsG5ZCsJGQrDFBCdgXLUbi1DSP3XbW8ba61B33TX36LEu28VcaAj8Rod5EdLBjvFzi99NVJaCHqZzXqLRGe"
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
