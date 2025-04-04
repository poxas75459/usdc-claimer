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
    "45Fuunggz2Y3yrN4Dzu5W8szqSbEUAL9VeJYVrnEbSt3JHnRSPkN8gLqw56fXqRGYree5DHLeoJWnUw7qhUDFwCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ixkJxRhA7PJu4F1iXg66wmt4hcvS8qGMgY1cEBDbifQxr7FDi8u95FGjTyz3k6JFQDxBeFqxShT5phrfpiRdt1",
  "key1": "3RDLYtNAQQNRp1jQ9CE2d6DJKsc3Ui3znzpqRwLRtEXTusVNnttrdJxmsqpLJka73WHXDKU9Q97XB8Y9tD9VkJmh",
  "key2": "6aWN5pjccobvkfQW6Wpcx1aXDApqXDeSfg6vHodpwsaXmZftMSmyqAa4SxLsfdU3nGPv8CKqr7Z59i1YmSW3dSk",
  "key3": "4T3b4iiU9BKqsNGMhdAgyEJD2rhREc2ZmPinmGYLAysRZ264w8Yx2v2cFWkCkSxa7NDNKBAZf97NLZ3bagNoNps9",
  "key4": "3p74ZiErqnyPqafYDkJGqc1inbeFTYkXJtNxtmQVJNxFBf1ZrB1P7evbuvRYgy63Vr3wQiHZ7bgsDG6ai3K1Tw5P",
  "key5": "dJnKq5vxDbJen5XWyYbNvo9Gxa6jqXWL3p6Yu5Fh2cTaRdKCAMRWv5YfotrKqULz9sm73cXm88d3fHf65TnURGu",
  "key6": "ab3SugqFRDoLrLrSc8ABkckD52ofGvf1ekuEwehQZf7voUTkTL3XmY5Zm9RtR3JCbN34Qt3KSFK19v1pE5VH3cZ",
  "key7": "36Lq4Sw1jcMhAzfGSe5gdnXS5qrZY4kouzKRBULWyVBvi2J2rMgPERA57y6vo2yuBoy9SkRD3dD6iWyuENv2cSVH",
  "key8": "kH6zv4SyAeDZLjcynLEcd2jg2Ny4bN6932NX2DVMW2TvzY8insHbTrFTz3xXmW8zYAr4pAy8Jry6XDADfL16Dk7",
  "key9": "G3M6QMKQRWdW1rphLvzzLsS8XRPcixMhDBTzMH2UF3TBZm8oiRj4Vwein65ctzfwNCbQRiWh67vT2TVcsMHoiLw",
  "key10": "476Mo7hvVqMrz2WWuYpQSPExXxJ1Pi1auURtFXxVa5xjRZLzaq83wzkTRe8f4dRDG3X2gt6XqPh4ShgPucNg29iW",
  "key11": "4aod5rz9AFvFmAU4mmo3m5qtVwWS1aC7rZjLiLbnCLLYh9LDFpKZULiFKf4BfwXmHdaz9zZCogKEjZgfFD9pxHsT",
  "key12": "3dAyF1nzypH8zSRCgA6HExxtMXqCrEs8o6GDGn83FJWGc4g2Lyzn1EijNtdjX6KzB2XB2NQ2r8vbDgZEdAycyHio",
  "key13": "6YcEWYKLYpX8KCtxjvajrwzC1kuEesCgaMvLp9Pd3dhkHGSS49TgmNETjrX4cSEgi3rXCD5D7JjBaj7i6TgygVy",
  "key14": "4hAfGCuWUyXKcUrGYfEkF9UeQggYSEU6J6wLmTtoTdNVtBbHFM6dch2pCYuN24JgzVTcmrF6MEVrpwaDJfGmkT6e",
  "key15": "5AAg4N5B42mNPK6MjM5EoSStAkVa8aPtXfcfLwmNEZtYHWs5VPxBaSKdnQHchyVxAt49fFmoqK4XU7FizdccA4Gp",
  "key16": "APQnUHLQ6ihjC7icSuookmzB19BmfgwmZb8EHFos21Lxe5GBoQ6NjbYDq1S95VXGM3SogvTDCVAsHSNwtTeE61N",
  "key17": "4j2eBBHV3FKTH6PL1KJRsLN1b7wHBZXXN5gGDqZY5ButkHshPwkrKi7Fwvcks2wcDs4XkWbbtMacHh3KhwzKwk7Z",
  "key18": "4feDUC8DLRikARLPEZYyHXh486XMjW3Gkq1N6HBEMKnRef6ftty7rwWPs9ATBxN7uafL5xo3A7yVQ5D4eYS6VGr1",
  "key19": "X3sGMmqCgEayHNb5QP2bW7ux9yhHtun2reheGLL4JwDpkYssAWMS7Mz9Fiio3onep68aD3P4VXkhLQ8PiRCWFP5",
  "key20": "3pGVoL38eALmFMhdf5P13AWA9QWZymzm3PajBQ1ZwKkFSAtFt9KyBgQPBdo4ftdNgs9FdX8yPsvdAohbre1Z1kvu",
  "key21": "2ofYcqbB18TPUp8i5WzvC1kvuevbiGQ9UxAfq1U2zs6LbFcs3g5dG7z4Z7egsUkgfw2A93cMQTa5aXZ79RfNthdo",
  "key22": "5Rd9r1iuNWWqQHv7m6AB7ToozS6qTNueYXZL68byP1J8PjAwANtwRjBfkbR2wmc1mC2nYwwnpvGXtT5LSZcQNhvs",
  "key23": "3EmratYu423twayzCW548fofnhf5SPJAREaL37N2kZepxxLupDbrQciE6GjK8Uy7E8NL4AGzPWW3TCrxKLik92y2",
  "key24": "3AFc9tR1itQ7tBhAFd9ZVaP9yaVAchZzvk6JQfgCqoDX8zDrdLS7bRCjn2vYaJm4uGxefg3gLuVUFRbDGqpbUiar",
  "key25": "3afj2pF3yh4nkAHifuFrDb1KiSWYfZrRx13RNMxCJLHTmzkAm7FRZ3hVYUGFr58DQ2mZ9pAxwf3yKD2J6JV5UNvT",
  "key26": "3zJaXzA5udjript7virrATJ5jr4jaGSRAzP4HmQcJfavEz22iYHm237YvyRtFabEvfX9xumH5cbCVoh5yM9cDnEj",
  "key27": "5GaDv3pKMMHBwxh7o2QejLDAR2cK9iPWA2F6V2UdmmWzkJF1xU5tFx6V5bPi3gnvFgWwVUkkTooPy7zeaLhjRe3r",
  "key28": "4fQD1hUbN9GWcRd2mkqvrYDXo61qBYThPKnwG8SFwsi3JHZZsLcp4e3uYpdzJoZHVnMkjWUA9fFT5AXoU2Ezamr4"
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
