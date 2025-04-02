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
    "5BB3ZNrtUpBAAxeE6mDvVAdY5JA8SwLj8mgK4xxszboK3XErrbm6CwjRveRNeYhF26tQvyfwqddkUXmRb8TowYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43EcB8xa6Lr3ARsh5ZY199xAphgFPxgnUsss5NmTxtnw6aiecKCgz1r5T1YNEE9QFbu4qjQ1HjHDPSCvtQidFGX6",
  "key1": "sCPMgMibsoT7kaUCvf8LyW2oFV7MTvWNARimJbZfu68YQ6UcQS5onFxmddttgBGYZCmj13R9C8dYoqFWtFcKrny",
  "key2": "2VTi3yDykGzdsNgyE1GUwBk5mTds6TC19vrVgAWtMwUbA939zNggpb7PERWxHqSjz3obAV58KnCQ8GQGPVR4wH5b",
  "key3": "5t1ryM2Zw4zYn6cFjLRiUC3wb4mmrJJKUz2WwRGQuXm12rcm5YfGAo5Q94MpmLfvn2o2zMTsTZYKKnMeF94xg2o1",
  "key4": "RENpBjYpP5MhJzQepqeB7TgLg9CY9FZ9audJd6MaN9z5bgF3hiVfsrVvy8viVnxLtEBgzT8Afcm7NUH2cbuorjn",
  "key5": "3ZpCRk8oHBhPS6GoEuH5hbwKFwo7GWWqEiwRdfFYjSmxKRBgGhdUrwNGzYYqd2HRbudDq9FS8UwydwAMZHoxou7b",
  "key6": "2SejpDiaFYSuJRk9PUjsdAGccWmcRPNFb9pn4Q8TkUcwPUSmJYo3xn8Grmoo4kFb5QqfiBNKhV2aio6Nq7ejphkX",
  "key7": "3GFexMaXp8HCs5C3rcF1FiExHf5g99bD7Ewx7VWmWV4eZSjqNoc8WTEj5pCzjYwmdJsEkb59Dpq3XgmJMaADBai7",
  "key8": "3KMtFpirVLAjv1tHm4nyrt6QMVUx6kq9rMiW1dx3TUNfJ5Y2y9a1Wa3BX2UivYHxNxfBVYhyENiB56zfxsK83awh",
  "key9": "5n7pdXE7M9kt3c3fmvQDMc3XRokjfaZEenvs73G1sA6f1xJQqmBitV7LyNV1rbtimLALMxWTPHNj9st3c7gRr2Fn",
  "key10": "2t8ZcLGucbYya2FdM5BVqySX1RvPfiQme2hq14cHYTSQrcAHhLnWFTkdczLYHxfb2CxVk6eS3amVmias7QbVpwve",
  "key11": "4pjygKwm7STsZtgEYGU8j3pyh9Qv3D1pMkdxzF39aKhh8vWWNPeGtDwPpe52Gv83fbXkaE9wa6J4F6ycNWP16Cs",
  "key12": "jXayG4ua3XFqfXpNxuA8vPfdMcuA9STJ3k1ddqQ8nTZ3ricKTXaw7ZHL55qEnX8DLJKEJEXvW5C1kXSJW7WaVy4",
  "key13": "3yUdvbyro7EJadhWiDGtzGgDwZyL6XTVrXSUMBPGFB1F59114RBHmTePne1L9AgMV7Mz9rcbKg3uNp6TnZv9JGXx",
  "key14": "3a9G9G99worouVh2t8SuGxev6skY2bcGZvBeBtYHzCyfqiq6mgVGPbaEqKCiScA2BRL3Nmi5KZZuNKzk9io3CHkV",
  "key15": "3FyTB5KcUGgwki1F6hmubeq9btxjFJG7UUXpXkJ6nZfQnDroJ3MtUgQyhyaggFq3bSsTR5MVYTpBTzwjhod7tdQj",
  "key16": "5ycdF4ju96U1v7RXkp9rKquopYS9ZAcUqiZ8uvDWNRpUNxoES8xUk6wbcammhMsadJ82jKHZckAWe98WG2aZCsHn",
  "key17": "2pjqYR9mSS2b8CPmA7fuB2Ca5tAfcnXMRTFHFMj8NNRhgnJu1ugHLQgB5GVyxTx4wqSYU9c1APzDPY5qXjczJhN6",
  "key18": "izQWbBRCyJS5zJs7XpTWjcR4XDrxVZphsruXaHo2hM6kPMRgW2s9rEBiXHqCPuHq7LwVNbdkSvdEqtxCqHJX18N",
  "key19": "5KreiAf3JWk6hotN5ZeaYF5NiugUrQEyYHyaAASPtU5VtoRPFG9QJpUEr9XqmNGfAMKzc3ZFF6tX6xjjmaXXd9A2",
  "key20": "2XY7pge3qXoGAY9JRLEW5vNWJtYveq6TfjDVTirGjLW3mXtbUJWMVJcXgywY41kAdNVqCtGuAWZN1QpUxsC7zqK4",
  "key21": "3GpEWMrpZRu2Bj8AGQvZ2EH3T7XeyQZxJUigztFh1UoEyQZ3cPXHvM19u9tNvZGwfBU16jA8Vr477oFVUxv25Kdx",
  "key22": "4YV3EuTYnrEphVcUsoSXvWEhjxQ6Dzw4tuQBK2bPC2iaJrwL77wcZKFJsi8kUB4FpeB5fZjdejeuQg3EZNGWmtF4",
  "key23": "4QB8htEMPtGLM4CTAga75boKKx1XMLnUEb4fzkncwVghyoNTAeBmiJXrHcEfkUnu9FF2Dj5jtsmM3SDCM3BpYJmy",
  "key24": "3oB5kMHnW4Xq8YjToZftsrMttiuStas7Ln6yVTqXmeoWDzhc5z1ptj9bBK8dYcK1p6ehK9QEpg16CEoUwLH9EFgy",
  "key25": "4MTqcxmTbFDz83WMYXUBPB6b4n2pYSFcGTiHYDU5fpHiMMKVFdLYNTWfm29Hb8xE4FFYfXut8pXD2NppCJW2YuW7",
  "key26": "3F3hMw2dA3bp1A95kQLsbAvZ8EF94rpTYbLAFTCcNyD85pXu8Ws1pTwcd2XJtEGLruRwG76nQYDv1rA2Dm8PStTw",
  "key27": "oxP5nVHMtshXkgrqB8rsKwcuqxSM3yTNo8Ug1gpoLVvfughsufbPtjmXUzirw4KH38X28QMQdu2b9rp1dHK45r9",
  "key28": "xNXuEa7YfQpQj5jxXyNnspSvG3qWckF3qCfx3nzPaS7xBDeqvdTwzZFFo4DCTMHTaiDMjxv824sTh1FxqrY2Twv",
  "key29": "5o2B8Uuw3M4tQTUgS7WrQVhuCqNBKbuPKPw2PbkfnuCguEv319gmNCFs6DUphRNDWa9RoedmXnoHL1VBQWnJkf7p",
  "key30": "KSyhprpTT3vyTxzp1FJj7W3fmrR2cuaZQ5PRGmhxFX2oiDe3oq2XnSBV7T2gVSs3Kr1JtVWNXoSLND9rnoiMeb5",
  "key31": "3VNW2u3fEfE5M8xoD1mHiM4LbgcRJqNzZ9EPCABC2ToNkMJPSPZt8PxWEECh4Y5DvHpoe7eSewKFiAgoXC3HhSai",
  "key32": "5tE7uawumi1jkyLk9bwEw9SjpXDoZPtcxDVmRMooWsLBvpdg7ZKujDCvLLM5Zi6E1oySN138Q8aWu7t2rPzk5d2v",
  "key33": "4jjDWcMRwCTjQ4zxxGUHS1j7qmSJEZN24e2ZGWNWejKrf6Lk5PNHHaWsivg1s9GX7Ud29ZmwSaxjPtEVe5bpGNmr",
  "key34": "39Dy4E7YPhftcETY3q9Q9NtsXWHH8bo6U7rQX4JmBsWcDkG8vZHCzsnaxeiS4Qb2pjxoscHTHNGe8zS4VnAS2MPW",
  "key35": "5JwCvo7EBCguPiBjxKUVvptueXcLfkBLNL2Yh2tFkMhEoErDKdT8NvVoheGuNGpUWLs3ZpoDtU9R3TT3kNGPzx8r",
  "key36": "qZXdXun44ykr7gy4ZyH1wUajzA3TgTUEgYPG3swfUTyH3kLe3q86gndUJd5B2RPtCrwJfxEqck7BeQ9tZHrBKPk",
  "key37": "2gTTZLmMxWBZHsSjevvAdwVnqGGFc1RBcqfcVhYZyVdhMWt1r8QCrcEN5qSrYyQa51yNEDGzJhhR3oFDhuuufN8g",
  "key38": "vT1U91tsVxzYWQmJ2wCsJyJoRcWgReyHqcDuMJcGQRTgH2JHZbj9npkgYJcptAMw1eMMqpkaiX53BPnki2waicT",
  "key39": "4RQxfrp9FFBBYbQwFmF2tiQeWkBQYmbSax4VFcL9hQbQaiiqztG28uj9hrU2hCm2mYprw8izfPp5WnZbhXziE66d",
  "key40": "3Ri6qtzDXaqUpgk8KG9GsTyZYuA1k7X3ibiK4FyUMCB2AsG4jWNiaLajt3YLhbN3NUweCDbRGtk78axrGBRaJ2fv",
  "key41": "4ErURQ64mX7AJ3jXm6iPstZvA6eVYW8deFBuQdezwd1X3WtCntydjhMoUdmaJ8iSJhc4sk6RU6YS85KLJZyZFjJ9",
  "key42": "31nVSCeckJJYioHUVu9q92isgZVxfHxpHFQ8V63KbRsVy5bq6zowgedbAHp15ZPVFNYpzqvxFSzA6sTSYHF6Y8hw"
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
