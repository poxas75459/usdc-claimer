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
    "bdHRv6Fmip77XBVKcNoSDKD2TFYBcLjRaJ489iozKaFXkYQZSrobSzZ5tQND2WuU7hrAVGi8ah62BAy25PPoJub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqQ8pkvvM8A4WwvddxKDugpkgtRivtfZ6tEZFqwoBNFq4YaPczo35qWbwQPecRmmPXqc4XHEiMqBwaGcTwq2ApU",
  "key1": "5eTZpNbp6GUuTY5MAetBa4xHupSg9Vx8uC22Sxh2R5Ta18prFR3aRZ7dJzeZrGXt2JAQWXaKqb4WMqSFvTXQA24Q",
  "key2": "KffL3CHTcj8BSfTvBaHYhC3L9gKGcJ8j2jac4WDMu4Qu4a6xArP3cjTa4Kw72RvbhN9ovnXhoz544Bm5gHBsTux",
  "key3": "43tYwVv3SMPYweo9kpjjSytweHbdTksuMsgCzk5n8yoAkfNhAZnztGzaqXS6mUoq4eQPnyTU8t5yF83GkMhrXK5",
  "key4": "28qJJGy7ZxN9mfpnzMUY79LJhcNZNLTuNu8VhWmEikEZo8PPJtNsgNpwFCzp5eBFUs15ZZHjUgYmz2PG2nemTkss",
  "key5": "5RsZtb4PgAqmsu1YfHpjnxwjLeRQBQLDPyVB8atQ55L2xTwPkPyvQvhFdu1kGgSwyt4u28s2Fnek1hcVr3UKyMut",
  "key6": "2xHuZerA18YhjU6ZupJ78hKjvTERNQSnANQeLrvTa1y2sh9hKQdDCMxMwZGQvYMDYSTEfgzx1JY9Fz4LZ7T9zfYj",
  "key7": "q1dR3jg48wSna7qLifUGH4X1mL2VGmM9gbQNHGbdvcr2VkprcrVejM6Fvw3GF8aW6ByJk7JNHTffqisupjep5Me",
  "key8": "2KSu9yP35eqU2XyThVm8octrzgvWsZ7tVTQSPfveQqyWABFbbr2jEjF8sWfue9xNgGY9J1XWgFXgwNnwG6dZadxg",
  "key9": "3wWL78HtRAyPgR7YocECToxbWMR66ECKHmd8tdNkFw9TRu4QyCHrqkw6UieNSNjyQHLYKs6LyWDVi7wjpxDZZ6vm",
  "key10": "5DmdUNw4sSALUFeTCH5jcWAwUCYwzMQH9hZiofGCLUNZ1VP3FFqqCPZPW8F6Aq1NH3WF8CAoFEdv2ggE8NH2PvAq",
  "key11": "3KN8csSFCebqtXZeatqbwjMbHbWf3Z1M2aqyQQjJvZvVVQZRR5E4RDkZeWwvuSfZbyV5goUks2cpNZGGynUzyCvc",
  "key12": "4dFFcw1Vz2jjeBcx2QHyoPZZRXpeznMTuxKzghfDUFiGLqVoHz3RmtWmZ6h6WdJfMMoQ3TUw2y57MCSgetonoonG",
  "key13": "9RGbBzcArCyqxcZxKxcy5srVcxpYe1nPUxf1zYFzywoLjbxhgT3R4FNb2Nxw2mtRy3eioxYnnprUNnRf3BVHSJN",
  "key14": "4iUWWdrLAbfCYYzJ4pdvkhDdhUJvzbc43x8wnufd2DRjn5Yx5LWQXy4hskcfUbamZobYCBjwfrA4frf1PVcDcfKH",
  "key15": "Ue9tqQJjSQ7cvA8sJaWnt82ES7EYBe9AzoG3ansMmkbryysYPiqxxDKoi2cShne9bH29Mg17SGESq9CpCESMAhT",
  "key16": "3XZbyqWfQfQxHmZGYFY2o3eDi4TSNjtFmUZffNCEAKstvyTM8EwU4LBtiqdauspgTopBGvimNLoZ5RLuAQaDqMiE",
  "key17": "27oiaTsGGFr3wJn34NKKhkoq19Xad28ZHvNZf28Xc77M97Yr7TSjAanKSJTwE8uzZQ6wSLrtYxKh3WC2X2whosmH",
  "key18": "K6wf8uhLL29mRahyzy47ZEQaDjzct81CrddQGgSZAgk3DjeDckFGkipwC7AYqrT6Jh9YJEeiMGq6P6DatytQrMC",
  "key19": "RuY8FDUe5NKBQyGe45LSmC1m3xSppW822d9qV6R6QzDxvxnhT5xdTfHER33CParFGNeqAzh3Liy1qYJ3AxghWvP",
  "key20": "63HDMwkb2ewxVgoWHKrWZZnejaHNsZ7ZQDw4n51dNu5vAFJog1G1Y4rzbGLEjWmkwBpocXF2zh4ASRubz5KXL2ZT",
  "key21": "2Un9ZTaMuo1NStSPNzzyhKdsFQVBxv8eDXMzgYWCwVUFGiyWwTCWyutAjCfum78XM5GC5FhYebkwPGHVRRm1rRK",
  "key22": "4G94GgMjwKCZJe8akrjMm3sUgWhUB7Sus4HXDABCNhxa6cM8XAHGtxR8w3yes17j8GM4FKRREuitkEVJXibng7du",
  "key23": "4Gox6enjSDtoDoFM2zu7X1PBmiRvaa2L9PexwAj9QcinQ2CvB8JuYDz526tPhq7A5fjtj3iFA5dbwrxa3dU76U7h",
  "key24": "iaRGWSSsZiQr72yx4G8rNzN43pbDYhpbHAA33RpMXXECjtUyKkHDfKRGM49kAq4xj4F9d5U1XUC4WogjzrzTgxj",
  "key25": "eAZReJAo7T2EntVcAqBvYGg4UoCtLvAKfUmgScxfTe6mazmUiDe65Lak9E47J1jjeoeGFmnU5YjeypVyzi87ZbL",
  "key26": "2j4CBqCmp4AsHZe1zBUJUcizvK45cVLie1pHgq99i3YX8RncsTukKpmkKxjVMP6a8QCtmgaBgkDXNPFtgBzwGMnP",
  "key27": "578cdFLUiahputogx7WB8pUwDtRTYGKGYDzNp8eDRCgtPRavfmkGRiAGt6LxA2DXDrUGoLSPiy4DdysFRyuTWbZx"
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
