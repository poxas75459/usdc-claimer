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
    "QPZRv9y8DMqVp4WrH8MEqA7GcT7sp5oQpDZeawGsAvGPf3QJ12XyLfgny6kJFHUBGBahPSRYwunwZxStJM3wGHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5mXqp78vpJJsQV1afN6hj8eduH8vLw8F1eRVYvuR7a3iWuDZSQzVejrGj5W128NWZbajG3nMk2YdMaD1XMrrL6",
  "key1": "4Hs5vQE13eYoYL2UnYaVrMqiDVSGEacDDqdzLCk3YAsbCABhhK22Kv21TfaaAiam8yGSwxNB4mzs9P9mmXtPbXgw",
  "key2": "58dVxCatPHHoTUjmzroQyktufL1MSoRTuxVbxjUtMdMxKeSbEnq2v58MJwTALTiSQXJ3BoUfBovPAeW5meMST9HV",
  "key3": "2iHcxMKQ9bedLxdJ1LGWZ4yRwEhrzgfqamBW2Db3QAPuASEGkwnN4K4WPVUK4MNuTJ7QeqM4qvr19GPJTfHCaiyU",
  "key4": "4sAaHRSa2okbabPEzzYoxMHntdRtHjV3XYbzcrRq4TmpDCCXYHvs5vvCSJWxpuvW7sMbq6gct6mewwVPv8p62Zwa",
  "key5": "4sCAEZVjVy1g5W2wXpD4dcdZ8n8UNVGZhXryA4zC3TaymSZwWmCFKtLg4PdscmfbHLFQE49FHCctqLQXv2RxYR86",
  "key6": "4XjnvZMu86bgo4fi2yZmkBJBY2jc5m9TDD6J85YQEARPkqviNZJh87Tou9B9D3APTdNoH5WXPgNehLntYaEyxuMr",
  "key7": "2JhcXJ7qj39nRJWJNfKZisKKLfKPLXeYXhmdY7krjWiEsvShXxSqrmrPpH7bGtRG4zxYrU5vkjEuCzfX4C5aFRTo",
  "key8": "2UQfqi67tM5DdEjG1MDXYud1ESHSYeFTjywomNfVVbqqWB7D7x9rjBFBZoohkhNjGXXR1Anp9gtmN576mw3hRSCn",
  "key9": "tPvQKDniWWUZGHjPuUkRGmeMyjVzNvZX6qA5gaQVnip9rtW5jUaHTa6JujMV64hQ6HTx7oTthgcNdHrc7BsZd65",
  "key10": "55fYhiRxVAzbEwJC3C1pUSTPvSEJQCBHSTHQG1V9SmsHqJ34qDoC3BGnYY6m6cBU85vqMeF2LPrVbjPJ53nEJok2",
  "key11": "4EfgXWUDhvZpSQvr4jrX7gJ63vz7DTxBppzZREvTTSbW5sgQhwSujQEy8Ko4Tjv9cWk3wbqePbNNWr1nowzFfKtU",
  "key12": "3rMfETPEHvqzVUZqqMDW17VARYjcGi9mkvYZGiVi8sLtdjhwFcGAPy5ooF26iVczZWfJFwWshaLXg83geYpcqNDP",
  "key13": "S9kSW7JyXU9g4TGNyrWGpBhdAthRXiDQtCAMbgkcMrXAt3X7sWvhgJf9bK2U823kFDqEiyWEc4sHmts12fzfH31",
  "key14": "21XSdGsWXJxZ1JDAycRUkaav2qUVDxNnm1weHo68ojdfyySmBYTTnj5hqLK5L4DpaWmxc3mNVJfWtDWbVDj9cLRX",
  "key15": "4xCLekLvWchBQmRga9C3RunEHsFNt8w7YLEj1Vt1S6Z8ZCrxQVqkgGKWSC4RhmEKzozntBcMeUMBi6aSC3eDXbPG",
  "key16": "2HPW1zCEg3VyBdiYKFq3hH73U1kSKrNnixho7E3qKamun528793dbbgXEsP99v8XmoJhkRWCDV3PW6435QNZNxd2",
  "key17": "3TY34b4BSeF2kmnUsGaEYhtGdo8GY5xbXXFfM5WCUVbSCoihcEHgQgzWUW3aqFmWbtqbEKrFffbWiK61hqpuZ2nF",
  "key18": "55xiNiCGzw8ywGETAcrsjwKVt3ugTvw3HJj91YFKYKKyV4owADieJgNToZ79TeyaPmXuvykGmd2xN9zwFR8eqpoj",
  "key19": "2JREcaj4mdPngNHv1DJLTnHtTZzw28ZKMbNBjd1g7ujArUpTptKZhqDZAVRCEi75gHwRq9vSZznm82qv4Svueway",
  "key20": "5AfdRgaSTpvfwixPBptK1VxbX7hRivGRYVz3gsFhAXzQ8GCHufgZcNPiQoDdgdezExZJzdWwT8KfRD8vVyDLbWLC",
  "key21": "3R9rg7t3JmitBGHKHgoGUJz8r2zzCxkNedTZSTgjgC4ydmEhn9u5p6duqKcnZbCPACFPjUKWxNRHKKA1KH9u8PDd",
  "key22": "5TZ385SmbeiU1JZmsgQWMnzA4LWryXBnvh8X1BTG79o6QFh1aBknJq5G8xtVgHN6HhNHox5G9ShWSSMUMbqLmzio",
  "key23": "4WphXroco3hqAEWtTSmMjHoaYCWrzCwwsBVN3NkzbL7cPoktJAejFqi2UBCNUsyLCLSPqvxMi3ACLYxFhUpe9nM8",
  "key24": "5YY699ApX5qnWw7UyXnabT3CN8PHo8vsgH7FZmj6dKYA2AtQ6wDkbWU2GQFEvDDQPK3Tg3BYyGzvsWuT7VvDDEvR",
  "key25": "5r2jkegsuzD9rGfcVbaN3Ha4VqghFJqsXR3fvRAqUFafsk8kTQHY9AoXhS9bGVNWBMjSJWV594vYayVYJyJNFCAC",
  "key26": "64c7ZJEMqxxnmFxPS9TcWehkb9zBhWMFfwG8DhLhXLcgBeZMLC6srfmSsGSK9jLa5u81R5n1774XSCreRhPbAxCu",
  "key27": "2FdgUpHSCkLYdStgYDiQJHyAP4MkxJ3EX53MZtXfd5ikJPCqunif7FgXkHsTvAR8JG3Hze2zppy4ZQcp7dVQac4p",
  "key28": "3usGsZrXRtyZZdNDecuKyeZ8dVbGcUiLb4BsZRaMwJVidQb5hFjcA28jcJNQRXrkDkQ27PjpEUcGCnrUmdUUHpp5",
  "key29": "2E7ejyr3YsyxzXqREeiLB5bvTVDt3KfD5k6WEVc8kCUdKgjbvV5bRbGaZqnPRLji5AtZ2rsG94oa7FCLhSnrvb9c",
  "key30": "5YKsFWB2wyGMgj4rP7GocYzGVDjWV1Y4fFEcwEZpTMrog9HtTWSdTyJaGixiTg7i6zzKCAaNe7gYeuxnqnM4baVs",
  "key31": "4Nfy6zksMKi6L64h4PtbmEXQFqT91gS7yk3SF6CDphERsax526wUBjpiQhfdgEKaEDnbiqZR8d3dxLVgrSCf48bM",
  "key32": "41GVqJVLdPs4G75mWfrXH8CyoKrYASxi9tqXhsYggDK21FFM3MCXscx5XRmB5h1nSbHGT5si5ubVXqn1qQBaHFLo",
  "key33": "2fkjpEqp7otzh73y7LRXkLVQ5KxFvEndd53eTGNrHM7s1M8WVmSdozMBfRDgrQoEYEBnt15uaoZ4BGJ3m896AVPD",
  "key34": "2NHQHPcXvjuCadCYCHJebNmRZMCM7bfBKGezHK7msk1oirKtMe2CQNG9xGAfwa6FvaGjq19hGRaK6KQ2Q918kDJ1",
  "key35": "2C2ajjSmV54fVGMLvYABJ5MvPCvU6UJaZB9EgCXyqgzDLFFUXZkN8JyCiquVt8sujzbKRt9botz3ftr5BvGeVFwk",
  "key36": "EXh1PPitGhsEpcDLCWC49QGWUjhDr7K5Btc9wupTXnS8eR271VnyfcBUYeHG5JqmiKM1jVSZamyvmjTfJB8sPdU"
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
