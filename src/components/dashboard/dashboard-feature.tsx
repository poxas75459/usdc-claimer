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
    "4tybcKu1HSoJTzQxvPBxH6FggWrL6WJTcgTDnvAB86H4hB3v6vtQ4Hn9eWYqWKSaKRGcPKD76idUpnrMHXyaJcEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njuoeCu1s6oxiX6Yi3uGmans3qDKNMNgTUVUN9sf6Tz28gNiuJ5WVN4rZq4ULfcuedUDG8fY9uFEXHTtXRXSXrg",
  "key1": "29yUs6LukFBGA4EjZmC2aszQV7iN8Zzks1B3YMZRJM2Ud8STFQxcEEDE3DNVxcZ4V4c4KHdWsqkiKvysNiNaPCyo",
  "key2": "4yctsVwKVzMv5xqLJv7k13cYWM6Mwnx1chrd3AZvKp6QLUNYx1bAdHkMi7cdoLmhp2GxW5xW4ZpAbiNPuGF29uNr",
  "key3": "5jJZ8394UnusqzTmuDUs7WCCvEczNi5cut4dBaGGUftAiZKyBkhzSsuVAS6yLJg474WL3PLkWKP8X9XD9YyZd21q",
  "key4": "2NNF6DHKojWTUvrhCfP6FZpCJsUsGjS2if2LxcNbL1YnAxeGAeDvHeSDVXfyKZdRvxuEKxXpAK82YTW3BTNQA8TY",
  "key5": "3AKGonDcxo55fCJqBSp6rPM5t7iJGL6Dh8bn6PPwe6FeUNEyWQqbZxDKDqj99kqzgZrG8tL6QZWAbu9nkUxy5MLe",
  "key6": "2tz2ntoVND8BJ9sLeZg1LGoYkDKHJLNGMkViKWng4DoRwnaRHbogVQTy1ZzmpYGbjiXYCwsvgveFyuDnCUEvFosd",
  "key7": "3aWo5joQ53U9Y5VBaxz37YA6VrRUUZTH4f5AapwyY81AZthPH5xrJWCrFpYuGmwZjDrUWmBmyAjfAgWBrqmPAtD7",
  "key8": "58m25nrFKhX2PLFAT5zXkVv4ec7q4XQko9Bw1fZEKCP7mjWowV1JDbgLUcSFbccxvEVdp26ucKsMNA7ce1ctuiSE",
  "key9": "aZdjomLZVGPNedVM1pghfUkwiL6Vi2YxH26vDv8AD9e2A3h9igCQdiiLBEaqpvs1Vh84kV1KaEmk2FosU571Mkw",
  "key10": "4PUXMQy5xbQYEQY82JZZKLp6chtEKitz4Pyu6BVG2BXsUnTq44faTZLFt9tzqmY7E7pXEAyiCzAKr1qhYYeXLoie",
  "key11": "4qvRi3FMHQk6oESTnQxUai13tGzDYUhFbMAwq1j2KHu4jFeZApHiZHDb1hQX8g5A7852PLttHEGGcgpSnzDSGW9i",
  "key12": "3VYysY1aXS86anu9QqewibnrFVKaLpZJE5ccJi5pA6wMwJQED5oydo7fxGjFCt96Eu22W37ww88G5BHP2aUFzTtp",
  "key13": "2CVkWR2CH5qs6ieFxHCWEpthFwzbcAFPboyGUCpkMVfWN94oYHJVaY2pdGrekTcchqEbSSPB4yi97UjidoTpvYE3",
  "key14": "5d7E6PVthosatUKAND26Av5vgxDUGTV3WAUYJZnGqw4Br9waFBZDVfcDDjpPENfoqdeCTy35XN6KW2mp7o9JZ8GG",
  "key15": "2qa9ZP4tWk9PYiNJEJtrvMkkiyp5QtAMUkkkSWKKnCiDX3jZC1UsfaPQQPoLYEH7Avt4q1kf2trX2wshUTs8Jsnc",
  "key16": "2daA6jS1FcFcsZ9MGHWeZfv5t5nmtHCFZAzsL7cRoCrsBsYJ9inEJzRL7Sxmtj88BmsCiKd1VdSTQA6dV6XJyn6f",
  "key17": "5j56y8xa2og7tLpVmxCXoTmU6xCTmPU9QB3nNFiwWYhqNEfXo1geDo9KRbYzPH3EELanxq5s2kKNghePQ76wacvk",
  "key18": "5bQpm8gUTcDot9nnXSvktaxUb1CHL5n7wYNBJdqTevC92vRQ4JzTgvGMWegxXb43A1TJ75xKepbpLd2NPVgqjNvg",
  "key19": "fdmWCh1BHWKHqrQaZZLrdzTsxTkSpmkM4zXfjYaGxsBA4FkUDXzwuYxkj2WGrVBznZPQ6BFGihtpMVEY3zkeL8b",
  "key20": "2ZDkJyJBveGanNLNEqJBh5sjwEW8u7NpJvQjJj8d143ztGu8iSrvDnRwzFy5RqwRThuB1tqiiP7Ebcijbcw4EPMi",
  "key21": "5MULvUzA7eyTKgjqqZJa2kzYpwDZCA71485kX4vdENQZ7PRz4kpxZpgWS9JKSTp3PL2WRKYitjRZfNoC2nPRJAzv",
  "key22": "2S3d5wX4FCivRmFHvDjZoMphQSVhpZwuBsFq8FST65iJMCjwtzhRNmtJx2qFzUQtKfH4XCCrfgAJMBu5pXRNDbPy",
  "key23": "4auHLFNMRQqVLLBNa2PfhsXcwfyobnWe24g6BGGioWeGBdZFFbz5QktUNMy9u9N5V1XoK3hce6tV2nApG1vJSLqH",
  "key24": "3kK2yqjTMb7Xg4veAzTiMynmCxt1NqkATSz456M9NULhepvW99L8bMqmx62me54mh8CXEYdSxPu5EKoDmfnS7TB6",
  "key25": "5u14yYg6QRMMsKegq4FjuyLgHm8SqLBHEsowsYZWjk1CRc9q7CoBsbuVKxK32pEBTjbcMudm28MX4Z78kQHpQhXH",
  "key26": "3MtfGR5arpUotAn9ZV5tZA9Gw3axbPfz62yBpQSzQcUe2a6L8hfH3j8nLXoMeXfXdegs1M3LSHujUgSe7dVxg2U3",
  "key27": "2Aeohq4HdtW4M8gQjUNmd7WDg5LQMhofgRFbFNorSKox23c2Ae8osSwFmx6UirtyY51zC6eAC82th4ASdsq5VGRo",
  "key28": "qAgdbHZbjtwFA7LaT6DsWW8MyXf3oVf9JuRmk25SksPc8UxXtV4SG52s1QvFgUMttp9DKxG8vqVXLSSZTg1HUoZ",
  "key29": "2VyDL4iqaYBsWUtsrcckCXAGSCn9wvj2uwJ1YVujpwjPuhhvPuTYip45Uzowb4XPxVg3JvQQ2Smx2X4kbv7PQNMq",
  "key30": "3mLBz4tS1ob63VWwRbggzDgdbbNSg8nJ5eDxPmU2Qgfx3w9kkKujngB2F87xqd7ookSfRprb854juk8q7idv9Nw1",
  "key31": "4g2vqnavfEzYfJ6dyZ2pvQgrjjxot9wAuuGC1L85657raE8k4wgqd7XethXtAv234fTRYXB1oMLGRR9bvUeRw9pa"
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
