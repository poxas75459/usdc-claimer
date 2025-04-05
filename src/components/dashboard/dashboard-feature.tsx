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
    "3odaxoLhq2WfksMhUb87AM1AKwrLWbL1SjjJgs3MXGcBUYtQ8SPYG5bkGMcMqDV37nq5gaTaK82fYKfowyXM3ETP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LdBcn7Foiq7xBMRVtLGVeWsxgAwD26N18aT4n3scTM5J9sR1BGZd4gVmymJhoNNpnxZWB9bRwGh4c3cgoSVfoh",
  "key1": "5DYY4pYjGsPoffApeoXBZvQka8C2QJcFbnoCKUJtEnrGgih2qm8Hca447fWBaqiUJyYEss1tCs4RwNNeCGLbapc5",
  "key2": "2SDkK8mJCWjz8Kis3AU5sdf6gy3qA7ebCT6pJpPT7JogYvt66dawi7Vkt8cCm72Arbb1E5mxXFBqH1J8oXiWUC6A",
  "key3": "3KqT4QoFpXUaJg6HueE3aXqEFT7hEoQECrKfGLnR7vWc63LybYcprmnFNiTS1kXsPtkXDHoG7wzDcaP7F2m4DdNN",
  "key4": "5nPWjFLQe58HX88HzUenoDPMKtSk3A9h7y1a5d1cTkRtvLA8inaD8exZfqzS5ZmEzgcENETtEHTz6AatZ9mpmJte",
  "key5": "4Jv3sKxTygoyhN19CdhHDYuh8dQ542oUptWPZsbtTnJpuBXPmJVd2Tj7n2STmbEMJuoTLp2ieFgdhfskQkwXajxW",
  "key6": "yoTKPwDX7YaJ1ZmyAnf7cH6mMuc66TxQDyU5uZxpuTHWvHVHEaLPaV2SEuoSv8uD1sV3Wj3pS6Xm62s3yMiW57j",
  "key7": "4WwTh5g2okVeBEdy3KaYfm47e3ED3EVbiB6guxXw877PYBzpBYPDnaP9hTVTyBFbSzSMz5yAoXfUaCt7xeeGcmkj",
  "key8": "24DCGpBXSUKBmbPTrHGTmMryHwrYh3fM2RUhmfjJesjPU3oDaQ4TdJ629nXwDFAUgCzuqAkn6RyK5uSKfdjbdrE1",
  "key9": "2TzAx1AdYfnsVz7oeM4VocEFA31cG7AS54PPjnVnY29APa333TcUco8k7CMTQVKh7Rtcr9c1QfdRb8FpFCyJFf4t",
  "key10": "4Nq9RdzrC1btnXCJr5GcMk3uZnn1yp3PNJRhEChXnXW72NNpxYtuvH17eY1H6k1k9shVtBLn8G3QymEcwLd8jwRA",
  "key11": "ibf8RYDiPgZNEzPjfr7Jr6mEHUVV8rCtU5EMudSsVchTVhtViSRGwCm2SfwciCzqMLT4xSq3iYWZCQQhj9P5cYn",
  "key12": "2qPsTJxjTpckyFVRxeUdjBxSewwXW3XaiAd67ccvjJ1LAxouRU3z8GLko493yTmpurK5tgwa7g3XX7AfzYNvKa15",
  "key13": "4ah967jmtZzddwpm8SFgXkzY3QVNrh3LZu7Cq88PhpoCnsxURYgv2Czo73mqccsSwZVgmws59u8MtTTMhQ4LS53e",
  "key14": "4r9cv2dbM8x429y7Ug9onVfUuNX3Hr32LXKt8SQYWjm3pVVt5nuK9kAVWuVqYJYAArAj9hoGaP265A1v51YhSsa7",
  "key15": "3LMmD2ZY2fTseUBN8DnG85LTUEwW1TaCwQqGh8Noji813k2XwK21xGMqKgAFxwMxmSz8qUmvAkCCJzWturpWsNme",
  "key16": "1T2P4eGn4FxfhzjVEjB8MhgLRw7MJPZ47DRKAa5ekcHzkWEyuTSDWsUgYrWZfoxZdFKspeLarSL9x1gR36Qykam",
  "key17": "36s5k9jCAW5n4mmTW8rB3qAe8QRnaEiET3Uztjq5eTiPmaioY2nu2tr4TDXrzQBBa5HYXe4Ftv42T4dqMFzMyp74",
  "key18": "4djExUe8ZwkPvL7VfdgCU4oF9FMbkfMbLaSMxYiJ3ymXViZkNDuFRDyrctZ1v9dT2ju3fdtno63PZBL7GLCe179V",
  "key19": "5uvy7am6DfNii8kVnEWAUhpCsac6dwvTb9eNMUXDrS9cYnhKj93EX68qUWCMpprdN64XKJ5gusynKnqobqhrnHfA",
  "key20": "3vMaF5Mx79MRW1751NZGMnjrEog75VDxpa6iLa6zRq48qerrv5LsFBPvRvPyGXYiLxHBnke4bnzwCGGwQ2S4xLVo",
  "key21": "3T5vUyBeoDN7a8M2jPdFr3SywLZ5e33pJheqsGBpkZwhtQSLTasaiLmWukJ3UKy4etrfq4SPSDF8NLZFi5g4E8Tt",
  "key22": "29jgKpxQvCTAYvvcxjTxsyAQNdbDG6AjXSqdMZqFwBcvKUiYMjBx48hPDdrXgt2NjBm2D3BJUwjDfdSXoJyHLdmd",
  "key23": "gi4s3XDmEUh2ghXMHDzVZo96o2y9gu9BxrDNzypvMrLMw1mt9BHHSu7BBPCugXmK8R3kZbjhX8B78cha1xpacLD",
  "key24": "4sewX4Y8MnTMttWJf5HSErK9tdYaCoB8YSd3SsAHuQNTkRek5bNKysvrpQzVzeQJ7Fhc3DNyweEUwNpHSJHADE4",
  "key25": "44YMb9cP4RKCxEWJHVKFtE9L5bJa1Lk3KDUadX3XVNQzLTzvssKK4EEPK4KxdnrttRzyrXocjBhfnvxcQCWxrhqo",
  "key26": "3sB12s5Z74wNZ5bfyfaxyPchTeKbtzCRuimAYZV71AzQ73295Z8rq8KZTeXJJW3faXyfo5iqJ1JKQBJ9QSbzktDo",
  "key27": "4Ei7Df36cW12ruFry2ZgwzePeQppiVVwPUdNC5f5JzqXcfKAfALczXgSNxZPVsU5TWhtwYKnvLVydpx7mMM5hXCm",
  "key28": "2Z5Sgs6PYKKjHJRpfyF1pqrLiyPhsDd9GJ8YKrJBBLh3Wex4QPP1ZaUr4tkt5g2AE42oM6CWhgWYgM5zHuQCx1H7",
  "key29": "2CnjechQm7BQKsoqEjYyiNDzwwfB9Yfv4ombAgoUib1uWiZdjABJ8oHmuihU57aCT7j4URosXDHNhy4NsA1XGa5V",
  "key30": "3oXvTaci4r84tKxdecAR7D9p5DXTo1ATSuveQ9BowG7vuTqdTcBdHu166KcQ5Mp96x7qxQHNySVw3w71nYiGkS1n",
  "key31": "5nyyRMsStcngyPnWM2CDk8RmLFxjLeEynzTAnHpsfnjb9c9VtKz4rjTYNRUrHcJPQExWCbmjvP2niFkY35Y8XVsc",
  "key32": "4Fpq1D4zKZ8xvsxdJDgT7dJoHeQc5GLh8sBs29SUkuxEmRqEmZgmoubBmJ7wDdcuu5SoZP37LrHuYyL2swFoxe1r",
  "key33": "5rXyfhHy5FHJoZr98LCBB7gJ4HCcyHEZbDAtURU1zni4pYU18EmJPWfbo1cP7EYtVshMJqdZbBH88XHrBBzjDDSw",
  "key34": "vaHkztZDqWfkHhRPD25QYXFn5oqfNsKu2QFw8TdnqBzHtDUkrnR384sa2En4q8Qob5nPc4LRTBV2JQuVTSBjESp",
  "key35": "26KCfwK5biNJqusJfJUtpT8uLbHiVVDLHXBx65E1dWHa36ZfZ9aE7Bgpq3r5L9aPS2zVW8Z1ZKxpikw2p5bwpB2o",
  "key36": "Jb3JeE3ybDQTfhFtfjHioXemxcPiQoA9t6VU5CAZ5bs8TadinrgfxWjkYBdGuJf6dVNoRTKajRbKgua4mrP3uZr",
  "key37": "P6tjEEBEMz9cQ2MyLxBBxPq36zgpXGg3mUMNGrJHLBYZvWz2xsLKvPBb7nEoMfxFwqZCpZownKvjti4PFWKFrhJ",
  "key38": "46BuKuNHBQSKFCm8AwtKCfMzMu9D5kAxtszVeURwWj8U8pWr4YhykTTNaKGtMB34nmyUcU7JWiu2tTqH2mv7qyyX"
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
