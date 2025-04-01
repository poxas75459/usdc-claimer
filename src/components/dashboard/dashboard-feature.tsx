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
    "PTvZmhmqybi6tu7NTWaALLWmfXAD9DjYRd62m3tJLBj9uwuPhBVZhWDQkkXFjp4BT6ou28Y8AigXFAP9PV9rVMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owc4qJu2VDHarre5tPnRwdUQXwZ9C2tkFntU1FjDdTbUdpVMGFLybXztTXyyWT56oJuftA7SHR2BRCkpS1FHYYW",
  "key1": "27bSvwFt688Wvd2Uis4UrsHBggTYfuNB5dHYtWJdZTDhqw6XRsAoWbJK6GcgfTeWLfXeyM5ihqxANomuYbpJJq1V",
  "key2": "3Ks6LKV9JQRiMHhiGiMvkGiVheiQJ5T4utZKwuEbTTBtcSGM2WHnEFsQYEMKAwjSassYku4oZketkAa4Q1jBi3Le",
  "key3": "nzPftPYyZn15EnZ76paSGAMoPm34WYKLwjTxWZb4wNrgcvMnuK4kgqxzbTuM4cXBZZFuwghahH2SisU2ezEyxN9",
  "key4": "4Kn4xNJgXDg2ZWG3BMPTzx83p7iiws5i6x52JjRf7nGWXGjubgxVo5dpWiPkchy6dGVkDD3yhX8DAdk7gVPzFHRd",
  "key5": "2grm5r3qNBBVkX44ufhj2LEERz8D7p58mqz2pjuG8mb6VTHcoydtrsKtdLc5z8qDzNNCovFwkDNhESD45qESyW3b",
  "key6": "2HoAAgrJUtA76z27xwrh54mmrgaoruj339mbox129qJhCDiyVMuDxc2fPGjMSVSMnpkuFrCTBNwhjTCNX56hbjU7",
  "key7": "2vWzn7XndD78re54hxh9iSnqpttUFzCnaZxo8RAfBbG1jjXat4nPD1iBNA8HNE2qep9Sf1kUFLmmRGPJvRmoTSjp",
  "key8": "i1CCLW8SF6kmAiWQXYMgNfRnfN7KB6BaDSjwjMQFRpZYfZxxGTyHSX4LYRu1wgJh7z3k6gGcx72sZeafZfakhV1",
  "key9": "3bXFq5hSJkKKA7JfLusnVUhT4zKLx1yokQpgYiyWFm8tP7JXsxtJdqPcHvN7QVXTFD8P8tzHy8uJQ7XjcwGG7WjF",
  "key10": "3YM2ukwckUoQRYGndJxoisxSVBUVsDC16LREoXgkgzzeCWSzfmd1GVm5iQXQdWqnvWVyUsTesjR9pHLvyGi7uS7E",
  "key11": "5jJkV1J4TznCUbJ6WZhHsjfBcPRfwuVtxkccwQQMTsEVThejhvrMk9ReHBv12wcqxcV9jdYjN8pVHUSh9zfUMLaV",
  "key12": "bqbFnGfqHaWQG9ebbmRcQTjopNR1WzxgvVxjRNoNWnudVB39P8f1u9ovu3RqPrZqoyoazgHChwVjxbJxuznd2tK",
  "key13": "547LyXN4wgXsiG4MTrAugDgbkhwE7R2Ym9kp8AhANMwCBumZLH5WtVEvgWrH4uvv36epn37Z9vwdEzduy9svg64q",
  "key14": "2KsftWqCUhJaU341f6yVt5SHC9GnA9FLJUVmU8scBtdmjJEVg5TpcYt8BYVNYJ3qmMTmYZV6JnPSc7jeqL5FpfPN",
  "key15": "22xmKkPakDsbkMe64QNDnPPVsKKhW7xMAtJWko9rZyjT9AHfFZntprsyXU528dobN7wETX5n8LRJaHJuw496XYLJ",
  "key16": "2nD641sR8jWrwbKKFkYDSG8DAQuZty82Wo1gDMCarPQrgFNDx9FiKi2pNkMoEoCJZn47PAkBjhqti4nPiZAEiEbK",
  "key17": "4qvyhy2RN14vx7heGhrXWwUqTEP177xD7xdqmm6J2BpRDpXmvvw39o3fDpsX4hR8HgWrKk89iShUa9eTXoxoDetK",
  "key18": "55fqKuVLyQkAQ6Y2h1a7r6wooZqfPPfYVwmguWTN4py4JVCGKSZezEhx6wZo2uZkkhSqCpxMPdWESjz4TkDkiZ6A",
  "key19": "3ANkxeBZcKV2QfNxBxCAQBBotTv7TApViZgfYbci4qgyaoNhjyYoiuGkXfjFuyWum6uyzrzBTqybiEcb628jrARy",
  "key20": "3ST3nZc2uViYy43U2Yr8Ce2Q9pvsMeodzRNk2rG3CELq7KdgT6eqMYP56cEzaHdV9nx5muU58BZWozXEDT7oY1xZ",
  "key21": "5ZFWK65FfnkT9un9jmLzzs2ZGQsgS96PskAEBoJvs2H56BPftWKJmoqvndcZ5qSgh3ZwhAeBPoVMYky9rMaMcNNz",
  "key22": "2BoLwi3XLEDh5LYc7s3tqkhM6w9a27Qzuw4vWrT4KBWxYJJB5wam9yGPKFLdRGGZ28S7D7b2GXU1qC31y45PbTaU",
  "key23": "59C52caAeysCkRPDTy3qQMo36bqqFmX7yHJHQHVny6PnGyM1kSpk2XZNkKwzvgztHiyfANCA8fk7NwAk4do1D2kf",
  "key24": "nn6ZaCkT4C7iP8ZkQpjbADcTQFx5Zf1z5d1ZQJRRk6wPz4K5XFVJqjbSkvism9v5xM77vwF5v1MkYVf3puTm8Ds",
  "key25": "3sckvsGsHEyGwtihjyypRY1Mgjedk1uxZ4GgfLhqdQgKsBxhxVD5n3ujB3xwU6CdLW9YDpzEM5q5iTcY1YQ1Fmzj",
  "key26": "4xnjbUQ51egDDuNMVjYwAEcF571U3pjT7iQKxw7mrMYqT23EA6QAuef4cza9G4DHmoMDysTjpbSnFoj9qsYiksQz",
  "key27": "3xAi6xa7MuGHW2Cm6MEBmmkoK3crr8zvxfqL7Sq6mgPpcJhyavruTTXPvmLH9gQZoJEHyawzEY1Xor7DeTjirUbf",
  "key28": "3roKnZX5KRr9CzDhmMKsEZR8RC4iFtajEAegeAMovQkRGnRaf6ki4Xp6Y75Cjhntmy4XZdDn61ppAzz6ojub2x6x",
  "key29": "43UBTmde1t31eW1jV66xbE15Z8QEjnd1UPQKWG7ZnvNria6MF6aCnwBEkY8AoqY7SoSziJ6oZzF8EMC6hEMDgtRu",
  "key30": "5cbwr9qWyW73ifM6ptaRsT4Emp8afqcvAqxq8ikoJBHB8dpFmZn7bQ6CjXxbQ1fPiTJSLkM2jQZ1h2qzZvtGDmCd",
  "key31": "TnDV6m68vhv7A3YrBP5qVQzNZ4YtbTA7weFuoWRtb5DurPZ8Kke6QWxqnN6FqsarLzS27KkUCCRRHuJjrjr37Ro",
  "key32": "3gsJa1kWBiuGZ2A4pd4XfvSvCsirqgiNL6xHMP4Ce1t6PrAsHkK6MvjCSm4mPCodY5wMnkmLPoTyJqy4DgaWJxe3",
  "key33": "5vx1bz5uKbNWdvsueG17pjvZWrrfYaMeMGn5Xn1WQ7oaYvWZjAGjr6bZtaDpeGEoZ8sUq4gATQU5htyhn5e337Vy",
  "key34": "2BVzYL1pGBRWCeBQGxY3Yir7YVqM299F7jZ7EaW1imYkMrbirfwm8B8EsivkY3oLvXaJe8zuw7kmLUwNHb9TaPQU",
  "key35": "5VvMHoP4BC2gvwuo9pE3UWuaYLaNLu6badTx4S8hMgtrPFoWcr1cRumFic5R5UYZL8oMbfFuTq8guF7xRJ6tk5FG",
  "key36": "2Cv4LtL4sA6jwMgk8HuS4XL1ZFFp1w8cXQYUasL32Xkx33MARYtJWE7pozB7TNw3EHLYofho5hNF3XpHdt7xU4qF",
  "key37": "5rNrwPD16q6EUiBKqToVBTnuf64tiCi5gZmF8oeMRxxGZ7cWH5YiE2u9x6vogEqjwUUTr5aUPJioJCu7WSKA91FM",
  "key38": "2AwYk1mtSSEjYHwT6nrfEBYCiFBZcsszHwy3gwH6QbNpZbat7GSqNXLaCd3w7XY2YYmMCzGj9hGcYUCazqJkhy6Y"
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
