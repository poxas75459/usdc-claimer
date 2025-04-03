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
    "3Yd7JKLEnCQVtq9uPthsGMtwk5sGCk7rsSbV5syp4RYHrUAuFZkP5Xm2DxWrT1RXVt24BDcvAeUW7U6GzQEJKEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29y5JnMevzeXVTpFBigaNhU1v27Dxa7zKm3sMJJ3ZMxdHWDytzgj88iHFpeB5FNc31vwJ4ehjiGPL5nFwozpPSvq",
  "key1": "2xD6Fqq7a4haqw5FaqmpKvDfyiGHuCZLrVNKD25zUVXxcvsJ7hWKyeYJw6RkK7UXVfHGYpbmemXagQmywgFconVr",
  "key2": "5v1VFxTJAmheFCZKR2kDbLb5FcSqenrFKsbfvevQcq1E7WFE6WxJXgpBuEY6MxQv4NYLkV3SsLzgPZ1ceeBLLz1i",
  "key3": "5QXqRp68fFcFUtESb1EUfEfTNnHpVdgHrbT32CFwEGbHKWJAyJ7XUxucGcR9VaVinu7HveJJMxBH31oMDXj8mPAT",
  "key4": "5r2FVUDHT4LbYtbvvQbMLhhP4yH8UdPuZVuQz1fvmBY5Ef7nwiji7UUrPM7QioK74n7saNqupT3JhuXubRi2TCSB",
  "key5": "3FQfwibnsDcpJw4hPSDHe6pQ3CkJWN82G1bFoz95bT1sHeDr6Fxv6CA6itqpjskp3eNHurEVwo2AojJ6X4U7XwRZ",
  "key6": "C8HYi67DLNPzgWFYY97NQV78nm4J4Bmi9nzcHjr3Z8AcK4qp2gyfX442h5LpjoqMcFj1SnjeB16bMemAo6hP9zH",
  "key7": "MWXF5qDo3SJtot2Ziw4Pni3T2fa9iivjNCp7HtkKEUayNdyp19EhgvoziTrFzvcax7wyFcbJxauq19U5MkUtyd7",
  "key8": "5uiaD1ZebYBW7t2JARmFaeQL1FCfS1QBVrXfB5fdDmWnw6PuAQKoCD89eGitq5JHwwzyo3dADgXwHGsnYiHsjDBt",
  "key9": "5sUSNhtsF2HH9w8UnawrKH2MFFvUcQf5AUBRvWAbi8kd8z1x1xJNecMaU4PttKN93yTWafEdsPpLYThrhYPjetBA",
  "key10": "2jEcwhibsEzmSXnNi771jRdtsUv4YkK9Q62zX1Zh11zULNaUa2FwFKCk3479cnXAAZg6Vm4pbLKVrFi3KhGJ2bpA",
  "key11": "5wbGy38G15nBALKxg7QarW4pyCexpf8fAtQsbaiRBenj7L6QNQWkRUZacg99sA7uZvwx7UwZw2JVVWZqKsG6ZdTE",
  "key12": "5uGRejbSP2QMiz5dJdtYsaLs6VzhwgUmsAaCPKuEB1Xy2rpPsod7cLe4a54Fb3qqJFfVWgndhNXr3Yo1vS6aNuPa",
  "key13": "423r3pnnDPhapvdiEMuF5fmbNwahKQ9CeaADd5y6CRBe25gWMJZ4JxCxFLMPnfkaPbJyADx4kYF7jLvahgtJx2hr",
  "key14": "58GVoyaxRUWagAyjZPARPvMnABrCgrsSoHStKURpoJGqh84y9sRN1nELEpRt4qk4UZXYUm28RhzkoUmdyXjsU2p4",
  "key15": "jGkLssknvwFhn8AUEGCtu9JHgsRnPfQ3THMEbRT5n8TB9f8xUJJJHiZZxCFJSAG6ayxY2HNdaXGatsyAsgrmNH1",
  "key16": "gPaacyBrNzyStpcNu6QyHxYvSad2W1hZPHVHRXTvEoHJnuy6pYh5Kd6ujg7bcVodax4xFwtBHgQEm62jPtoVeSa",
  "key17": "5GokHLa2Yrxy1rsNDZrtnJNrEuqSp5aAEvgruAHZVwJ8GLaSfgqmYvfkCotr2ygNCKMqoYiTiugv5r71GomWuVNJ",
  "key18": "2s7cVESFeyU4LMswUvUHdPMUKPmHmAzfYvoDESwsjBW6GGDu2rF83jc68dHTjeYR33LsEmfEHqfhvcufMuVU8ovY",
  "key19": "YfDXn51vTpqpeF6MqQare1UsMmmKBku8UdnFreutKWnzcyfD3Hx69Fk6odVhQbg5rntCwuiVChf46JwVro1PgCM",
  "key20": "3df5AQAy52u2mguho7LVpJkNYe14h4x7q8mFRswc59GYRDciSEVeCc2EUBoTESNRdwaCfsHE6BLtVhzhbwz5CkVZ",
  "key21": "HtpP8fPTy42SQ4hutrZ76fGY6cnJk8gDyQjmsSr4tEiKjiuGowh14fZVAe4v5A4eU7zvVYo2mC6JyVhwEtjy5zo",
  "key22": "3zRfsuhXRssqkHYZG3bCwiULrErLxYEA2bGaYG65BKhS8Dh2KnBv1cy1qMxj2QZLmsWMTa7nRwGiNVQWjMy7oeGE",
  "key23": "4Ur3jax34F2FM9FZ4vfqFvbrGNXYGRr1823uJ24zvr4KTFD9gcgZBQ5FYjexhu6xfxX4kS38BTjc8NiPM6feNzCJ",
  "key24": "3d6y8FEWSpqs32PXBdBarTguALffgbtBm28hCMB5hDzVX3wPArQgarmdWUpV8Utc3ePAi8LtKfihVJijubpuSfzb",
  "key25": "4QtxVHLGSwjhpyN97HwfG4W5GMXM52tkijxWAwvctmQJiRQrqtTV8ecze9t4XyqVPRCHhkqPNy2CKugxCQKm6rBo",
  "key26": "ErpGLLKWMwsafyor4u6XDHPZJFnAmZkYzcx7DHXdTFMZqYCPKdgB158SXdeQDf1x3xPTyjWb7c1YnouBJxtnSU8",
  "key27": "4cUiCF6PNJoj6jKXFwgQbzNrfWBCo5t6R9ZnCCuCxgTNmgdFoX7Z1jDoTW11RrZC62KG3RMLEuNAiddUZd3rYo6s",
  "key28": "484XGPeEXMkNukKyqwAVR8rzVYvvEzLvQdkyrcK94c5dfo8hULEpQLShK51heV9CmcNcZJuHE9vjwWwYF6xU3GdM",
  "key29": "5Fbn8gHvgyn2PqynsyQiQHFK9soLVxUxrbCfa2e4UWkaC3qWTNL79Lj9x7HeKJMcwj3EMUVudhmbKYZ87Ee2DmdG",
  "key30": "2MJFZuqnbXPg6qXVDb2PnLT5KT4PcSxaYBLTLoDtoqvFaEsih2ACCe5W7RzxNTCiJYiDXyoix4HyGsGq6tKtBorr",
  "key31": "34o2hP4wWnU66wF2szdi2PRVZopNF97aFNXizdBPqAEJjUr2wRjc4Sp8RXDGy4r5DKwc2Nfnz1iheTH6GjffGTXB",
  "key32": "2fB4GYMfk4eTmog3Cdq17TG5gBaSoHBRch8GmysqpKx1AYKQPQeKKYcT9LwitTEmkcbxcAiLB5AGnmbK8rE1pNYe",
  "key33": "5URia2rYVTHkuFDrRBnzwDxnqxP8Bh5Y2q6rb6i62jzjHjHCKZFGkfSWtKYrijZoTj8jwVK2JejD2kKfyCYeMKgN",
  "key34": "2uyxfX8fdEPfheGQ7vjbKt5Q2Q8wsNDTJHit81D7iyDARPUDGmaZ3CaNVFeqoJRVYCjErQgmLNA8PQUWvqEMs3B2"
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
