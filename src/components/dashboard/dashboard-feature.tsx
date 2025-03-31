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
    "3crwcdPK9USP74F7i2bei5WgjrsLNkiSqSzGfrarzgxJFAsMP5pB8a3toWubr2iaWBn2pNF6T6HLtkU1kKV8ZWoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asmDwwDuBafyzNkxaJMUV4VhSkCQekZa4XGjCRgMJHgqvhBLDcg9hpKK85w7HGDs3o4Fk4rQDm515rRmXD4QJeJ",
  "key1": "5ynyLo8KnkSB15KqvHtpMu5h1koeacxtYEsHcCqycMUJFGZAeVgRtLFpZUwUC3dXfydt1RCR9eUJQzGmfwRdvLMu",
  "key2": "3YTVLaH59S4z1xRUuiGKdBEuMpL4Y3HCjWMDTorRPN9yk1iVBCasnKQqSyFty1uNH3WpdEomBv8x7EB2ee5PyTxd",
  "key3": "UnZcrsWMBFBrVg9hsY9bceyFQ4DwmZShZ4NDFFA8JnYVLSN5MsVvBbTScuYU3zfk4QBxmuEhkmVamVKFAYiBdqZ",
  "key4": "K9pgAC8gM1XzBgod8qEbFqrP1C4tkm44879ubqfn1wkcNhhCfDh3LRrU9119bLozdsRqxQYqDaFobEoCETMab3N",
  "key5": "3DFYG3q42jh4RRmgCMrbYHmZdNGVqcT7jFQ42kkefLqgfx9X7foYkLECqEKLs8WNV5UFUmmRFJ9GRn7A1zvHu4di",
  "key6": "3k5WFssQMuXqdiw5rxuiyW8nGK9BCjfo2Y49oKEG5HQ1m3eVGCgFwuHGoVxvVfnfFr8NLH3QYVw13jk6KerhRN9Y",
  "key7": "GVjq9cA1aNGoxsGBVL96R9Kbaq9oQiRKyszjhWAX69hy7Az6tyv4jWHkRwmCjJ1eu3W7w1KqXR1pgZ6A1Kw3N5D",
  "key8": "T73WeSBxoaawA3xPoY3PcyQiVGHQyd5wFM6yqMJdkvHRnMVputXrXXGCZMpbLDCkdy4XFsAuBCP1wx1i3SLWRVg",
  "key9": "3hQP4yQHJdqQuSqdon6LY8iiVcBQ6XAMAYiTbCMQMRJ2E5YvFTNBx9ph5PHJcv1ma8FWvGZYqTMoJCSK9UvgBedJ",
  "key10": "3kZfBbKxQmu8Lq95Vw5KSpki6c8VVPidY1ey5UZNxZpuDV1tQVL3VddS13VgHXwKnZWHHwHRWMKwmXGUMd6pitUC",
  "key11": "5x7xP5nya8DegTPQDmwc1abmnAsZYV3YqzuP5tVmtQRXkNKb82om1pKCgrG583YBj2QhUBEfLetEj8dNkWveutEg",
  "key12": "2Ce8JR4M5NUQQckaZbQPGnJ4cTtKz3PP2aNgyT7wGqLtLK5P4QFNZBC6EMLPeyeDbWrzJb3rPabJeqQ5LngPZKc8",
  "key13": "58Mqq3Z8ea2fgLb3vhh38FzAdYootCzmopy4M9URiTyvgUWDvrmYcaXqCiBTtqx3ocCvBpvEKhEyTQ8cJqKoJ6ha",
  "key14": "2AC3HjAex3Tsj7dDcomeogyM5zE3qWup5dSUb6zkE66WF58UemKVpFdJyCgLq8fHBiFe3riXar4hvW71ExSDnHB8",
  "key15": "57mg2sgkxtGZS2y4GtNaniJQeMFDUPxjYZAHeXYgigft6zSwiQv2ZeXsXrDkGsaX2yxde6uuN4ySZ6AJcxz2C3R8",
  "key16": "2N4bpRXzDgn5WGXJ9cyYSP7pj8WdP5HqNHGonM8xwjiQrkbSiaJfV6ZAYVprzUrZ8KE2bpc8aLKvE9ohpmFUV8JD",
  "key17": "3CRjztzeJsbsNRk2FKNgSEHdzYPzNLvPqRFmbYkfqBS2zKTWwnpHPz9N1EVmJY6KBgyzw8HmFQQNz4nQ2yasF2fa",
  "key18": "4N4VNmEjgj5LE9h9Pj2yzhdAhpz5LaFmyxBKc7sRcSkyH3FduFTgQQBCTFoTKPu2vB8MvSJ2TFhbkww161GEMYKh",
  "key19": "5f9XA65cV1SaXKe2eDRW1KwzGy6jAgQ7vkHbXahMgS7syazFP6zAdqZW2aAHSQyZaijYCX1fFemazQ1w8Zh3RKvY",
  "key20": "AL83Du1Y9RAMdgfqd9WF9SPAUqnNkLBAYQznJgH2UJYh9YVm6wei2Zu18AiMrf87Fk8V1K3xEorUMYR8WTJSYcT",
  "key21": "3Mo4f43KykFZDgw4MzfRFrmWH31jx93cWLC9pC7wckvxmwku51HmkYdShxRTaWZFzF36EdC2iGQJrrDcpdaVtE6X",
  "key22": "5nyVaUYDpszaAnw2zqPmNU4czrrXo181Zky74EMBs17HVEJBHDWDP4fupDux4ZaEJeM4BJEJxr37tas3o1H4GZFz",
  "key23": "4Ur8yTkqzYTXhYNpW1VtQojdA9sRVUipCGcWmkmPx5USSdZg1KeYSxXFNXtLUv9KgN4L1vqty4aYBEuCipsETCUv",
  "key24": "4BJTHxiaqtXsqBJKRRX84Ug6Y2Jt4o3DLE6nhoEJDVHLHpxqZ4gJoM647dgERuFPA8FmsN4Bp8DKKJMsKSTeR5mC",
  "key25": "4SWkaZ6NEMVJvahKDem5Yx19855NZybM9tTwZfKNQcTV8W2owXfZfFixrtNncHjY6KkJJt4XJmgyZzDr2n7RwSsj",
  "key26": "2fugNjfhcgvXS81Gm9oXXSgyxQTtEXGM8SQrM1GJY3Z4o5bEQL1tEGvSitPQHQpyBscrD2xMH6VsWUSMWJYkEr7R",
  "key27": "2sLu2LVfkj1GBQ2kB2ZgnFjDEqzcnHLRipZEjN5LVpevuhuc3YSfKvtdonMVSBNogw1dFzhhnemGUKGiqzk42CQP",
  "key28": "4j2oVeeS86og9RsrnUeDVTBzAh4qCKTm9kFeeuvCQeubwKWw1TYL2deUqBdQurtvBUSyhYJ1oMEFiuyYbuS4Zjh2",
  "key29": "5aNrJp5AtqfUcT7zMX9WqE12Ch2w9Nmrtc35ukVKs6YEtPakNbH1HxWEu1EWAadgK7vPraL2LirMga873yLTgLU",
  "key30": "5CK8Ksc86fF8NREJcyMvFdisnszq8UzuWTHKnJyFD3nnAJ73mUAzZMp9cDbvRzbAQF1TF5xjNSYfVKkSM8NYNmec"
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
