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
    "5Sa8zGZEdZEZF69fME74Uok5dzrpwpyPyvGzR8TxL13Zf3ZFUq4SiPGnN82jKiUKKEDkmVP2pBPjZoXntDJZerkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHfdM3Urh7RiPAdMrDbVUXEZzkHhoAqecQXmgSpVK4WfnRnwCJEqgQukC9SFuFx2ksc1P8CVCoccBGnWwrxxLKe",
  "key1": "226umFnY1rVwcaY5PCXU5RkvwwAi7UAehSnofkEcoMagb3aETECeWNo1jygBeJTA9FVRTnRF85S5N62Le378PHo6",
  "key2": "41Tr7ugeFxMQxCprXPS9JJhuJpMcQfF9tcdX3gGWCqf9GfszdrR4s5HNyHsWTQRi9mGbNPYFgsDMvrrvSsr5nFjK",
  "key3": "4nyeD7L6dWBbZCej66Ki3m25jv6DKfTSK4zJEXfhzUgsNZiUsfzYmRWW3t5HSWaVgJyoJV8oNCnJtjmBHZZNzMck",
  "key4": "3i2TdRwaDEwqQfLfj3JK4hLr7gceoFXLMz3xdXYYqoh4cCa44WKAcATD6aCzw49M9xt3noLDBP7EdBbkoVcZa2Qj",
  "key5": "5PCYnW6aqojyzHVU6aNKpKV9YXqSsfBFAd81DkbajXsRcV5pAP1LmiDgdc9EXhyByo1RctyVy2zrqHBewK8pStPG",
  "key6": "Qga9PCw15rCscBiKFC7ekMBAM23XWQk8fxJy28xp1JVmz8kCbiDiyX4FUPc9x9jWjM75twTEbwZptXCN84Qi2BK",
  "key7": "2SWAv6TmKHd8YDZHqYp1aKQ2EDp2n968aDczf5mGmnPqY63fyciMak1vt7UZohUMUaAaVY968nzL3QoEQzAeeWyo",
  "key8": "4wSfPAbTDkbHqMZMzBU9hTovUDDSPsKUZuoduLdb3ixaAwn18eb76scPCYDC6rfbKawU3xBHRvtMnH1UGeYpoo13",
  "key9": "4NERmp5VVc7ncT3WZLCi9dm3kmQPJvBzA8xgsyafRebcqcMM7omRTZHpVKo9C5DxA2yaC5pSoEdxxNS5U5QzwXbY",
  "key10": "423mWmYpXHwSSgin3ZHmb5f7F5EevpqxFdDwrsiH3h6jzW2fqf6ue3TGygQ3kV8mZfhfWL7np8cYdr9wqrRdYx6z",
  "key11": "2a8KRg1AhozrM2UoSrMg2dbbjkvAudnZLR7BqxZozaJFoGNZ8kffHM9MJaBWYiUarQnvPZdHENFF6fZSxNTVX4jg",
  "key12": "3tXuXWr88XcrHW2aWCNog2VMzrJBRJtKSXNQciUDnLAf11ezG9nN1GhbmCLLzRmm9jbjZG37GiPpaP8xFDfCzBaF",
  "key13": "3CUdhBzTN8ydAgkqDagDWpcUah9aGoQ9kfVyEgLbCqKKBw3XsXYZ5b6uYCvap9E1Zvt4BcSB98Hbhr6weQPdEMxH",
  "key14": "jKWGsw97T29G8s58rx8QNLtHPNGvNn6kymF9AxHkQVMT7cj9ckZVxQUd2FYokkVgwtBMzsVtUmEz7pCsHZC9Kpj",
  "key15": "3uzRYpZpykPVMAvq2iaezzw2Tq9TVdn3YTMNPKZpjEA55XnU7aJaSJ8nkCzsJv9jG7k5dTzNfrBUVnMmtNzLxpK4",
  "key16": "3tz7DpQyXGqqXmqMBhf31vTKXTNJ8NLEbTq8vCTRgtvEbckhn9zQDvcgbaiG93C63BJUetANbLk746BPxc6HY6Aq",
  "key17": "4SLyZwsN86yD4hnv7wYmFod6UwkmD1EGWybQsmpoftwwiNyKXwnozR1mwiAGCDsjViFgtYucNTmaFasf5VBdW835",
  "key18": "2v3beaykWrRxtPGbB84xcjXsYuJ8PvxBjsdSgQU2TGvtsAYR3v6otV7VjvaPwdrntXM5mh87KCsRjtE1ZMX571Vm",
  "key19": "2GUr7QX6maUWpMv9vAkpcxm5Ts7km3ALJ2Tn6eVBxNc96sSDgNG2WXJWjsgSiQwQwyiP39tnGtj4ovDtQPZtKPph",
  "key20": "3F5prDybZLLW1XhfUuYjLdA6KN2cbQ4B8szcCEjFPwAzHUo2VPZM1G78Y84RZ66nj6VU3M3LSMPd23kqYEzsoUhD",
  "key21": "5jyDQctA7RxWdUoeXoTA4ESn445YCRZGkEo4vEMKCkm3Qmw9wqQP4cQ3k5AiAKsioeUU5Tnkdq56aNogb4VSGWqa",
  "key22": "4m7P9UWnCt1cMJBzwKtFDLKuc1mgYUcGat8PPNj3odWhtacXpk7gT1Cxoc8ALSe8BpvnhTjhsJfQZmF166KPKQrb",
  "key23": "4vDJQYvh5haHSteVWR8urqtqw6oUbNzMsbZ4hFwnRFuRQcwf1EcChRjjmGUVNpTFUQmt4A4HhoKDNHmm3xZyaMr3",
  "key24": "vpBMBHNcTmxhf5CVYkArBhAJeRbh7ysG5WEPDJs7TWoQFwbqxr2BJZ4DydQXAy4h11zR3DcCcV13irn8MQ9ixH5",
  "key25": "5XKvvQiv8nH8SANo32GaXK4KF3ap1Xo2uStnbKUakrpqq2AMeSZv7zwvhyzciorhacxeDYeEd9YN42PB3Bv8bbv7",
  "key26": "3nYuowmWPhDmjBYbGfSJ86CwKAFQqpT92CtjM7MbNNvDGcTN98BBNEwiN9bU7v8V8opbfLe8uEdQ86Lo2T66LRuB",
  "key27": "3eUQcEa4V6hYGF6Ss4dZTjUju18RfP8KfMvqUXquHj6P321yRic34uZdzFCwzUEewuvfVG6BYMCLhTKFHkKopyoF",
  "key28": "4bSV2Q3FM4YAPFKsHJirZwWdFjgv7ooQEEUnAX27dBFoGqYkmzf11NGLLzFF4RQBkXFhB66paLUv7bNkMoggAQjA",
  "key29": "3erpN8VXdWuG1WhnADbjPNxqdeNAPfbviPfZcdoB5ie3VBaQ9Ay7GkSeJ6nkToWzgUjmgLNy9pNXp6hy6YLUAdjq",
  "key30": "hmE4WnjrjmDza8M3Tk4iHR5MepKBzW251fpgMM7VuDXg63f4mVqGbZwEx92d4WK1KPAsAFm46gdVYU66KDgUba5",
  "key31": "AE7uSrYU56kdKgAgJuycFP2zv2uiyxVfPxDjHSYHNRvx4LE6KZKB2DUsosoxSzafWb7vSf9e2roA79N9EmZCyAq",
  "key32": "34TgUq7C3Lw9LfgxufkzU9G41XLfCb5nhrFZVHqNokZDySXn4gUCd1i3sYc9SoCBV4Rq5s6YjSXTkynHiVAR8eHo",
  "key33": "24baceb7VefVV7cgi5EG1XJv9hQoHsvPRu25WTG9Gj7QM4Aqks1nvGNHXrVSHnJ3HFa2mnGCBBQikBcR6SnV8tSB",
  "key34": "4rFtR1zL1JhoT1dXg12daVxMWp5b5NAiYAnZAiWX7JdX2cE7mE2yocprQZFwNh4H9sLXJZV8hGxFyaLbkdwqxMnY",
  "key35": "5Zk6PnZzGBFhVwxwXZafj6vKirxdWwh57YLb6BLTipv1cyuw2dzTwzAbsnmmBNWv4oUtyYEnYih7oZQRiio4YeXg"
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
