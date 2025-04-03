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
    "5YmVZcsQSAL7iMoYHQLifDY8DuU9Nf6nDrxYGhypieC8BzshuhMWF8Tt8VVE1f1bjDJFiU758euRSEWXVVSrN4Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgmgJ13Ym5UEyXB93Pd87NHtrEEB8XtQcSY1k67oKPpmpbqTXEZGqJXxmpLDvnkHRmeUYfxYP1yStM69i4Ydq6r",
  "key1": "4JiWk9ebACzFxs42xUTXgD1jwpo7GG98cB8DgHC5ar6h19d9C5tZ3qozbsRbHMyix7AHsU2yWbW1umz2CDGr3Q7m",
  "key2": "4yJKQ2Suf3g4EjyGEGtnuGUcbqgSUpYWohdtVhEQpMH9Mebyfdaxkxe6u7UaVGDEy37nx25Jgoe2meesvvjaLce3",
  "key3": "5JsBmYiuCaEJsJb8gdtKSPkB6x7Kqq6DnNmdkhLNLF2CPjNxuz7PVYAq4qeexioHYgx7iYLqLXKri9Qd59rdLzSs",
  "key4": "5zTiQbqEWtfNrAFCWUkkggCa9c4ojrpKziseBo5PJzL6HUYWFizTwYFZ59FZMfFks4mSAfoWw5g8vUxNQjr2Js27",
  "key5": "4hVJ1jond1D3V659PJnfSK8V7ck5eG5q4mc7L5rhxZb2FQFP8tNUxMLoDgbbgwkmSRFq9YkkPxnFRsdoBYgmT21Q",
  "key6": "3cPYFzVUBt9ePqrCVaEfQEt3xxsWwce1EEgxBbiKNZcjhSb3rqmQBUqwb1AMdPi7VUSxKrUzBVgCcwwfwGvzHdNT",
  "key7": "4eUThDW4crBEPio6nRUMEkyMZiBEaW9YNSHDLTVpEW4pfx7xeeUdq9hhd7ELYnymMjEHVu3Pn6C9AX8xnwGH3WLD",
  "key8": "aD2SSrPy5jJHxm15BUx1RjdcErcvH63Souc1ypxYNvSPU9ojutdjGt2uXjDRw8imG9SUhuFii3Wn6VeQKdqtq8E",
  "key9": "3SZHiJPAeJdcu5QpjczJagHPGzw4LLHYXSomneSqHEqnH1mAG7eH6iFTzZ2zB24C1jjBXmaHqx1RFRptvHWybKoq",
  "key10": "5qfWQ6qZWYaqctrTzcaJ7LNjWQJfyxFuvLQwgrouhjjoofXZbHDkkdFJ9rdBoCZWqa6UrTxeZHGvhTe5QxGtjidg",
  "key11": "5TaZoFiVGnv6wmPptXHhUVTArvKKNtWGhDBC58e2xbCaoXxQ94cVX9EdRXvEhB1YrW8Tzx8FChYuZvs6uWFwNJr",
  "key12": "4W1xYmJt7Uy1GajzjR1M8hwsDSFFLCZgo9PULdJe6dCckaRfMZ7jUD23qhhWKKHFr9TZx9BDGK9g8JPjJ7vRdqpL",
  "key13": "64PRiApuhBUKU5Y1B8y96kDqrzpotJK8ofPqRpdmzwgumwtqCyMfwb1sKCsT6Lt6iQKZVNvy8UbM4a7tUjNCP1Gj",
  "key14": "3hwBvJttXDnoCJrsUwM2Rzi74L8dzqbyqsEe28gA1uwBtPC8Hntut6zJxLH9mvvimhqcDx4gnWpnZniUky1zi8F9",
  "key15": "4Cm8jLLYaJaHFdbgReSaxoDkvGnqmPb3Tn4eGVASmCL4pTyzAPyWQPwRB4MPz3Vu5ooBFazKgsjeWRmxaG5vkrny",
  "key16": "5qHUKNTUrC7UJJZHsezxoGvXWodydsKnnhVxFK8BhEYnWfzbk6g8Dn3PGHCZcpgGCp3Z67Umak9JbkqBEK162F97",
  "key17": "2MqFWr2iUkLjoSaURakLsqjyW3hPxdHAdfEdAni59dTjkzmGYjky6v7PB8RyoQQikcruSe32BaA4jQYYGHHpSiNa",
  "key18": "2pQmrHFcBkwzBZ55P5dowh9Zk4WypemNJavJJXR5CrytoeAjStbvamEUQuquGiMBLcxsKArm4nh9sQwy174BMJnq",
  "key19": "dya9YXmASo4fZbTyA47cqELN9v7Ld9mdxshh3kgeJrQnjefnZLh1iCyHJQhKcQpae2CUsxxuwUx1dm7UApFMeMD",
  "key20": "5pHkwnTMkaosx6tNH8hgCK6NUxhZNfmRxsKLe2GAHx4GQahgSg26mHfzL4cDHBanW6fRgZd2cy5VZuC6NftiSWX5",
  "key21": "52Y9EWFMp2mrsRdLRKpQRrkWvqMHjTMLaKCpFao4bAB1TE8L7ZYjkEzwXTdjgkXN5dzt5km14UAKkPGrUbpzuKVC",
  "key22": "5RLGqrrcNtH9jx8WGNMj8SSWUuPLDR9LJZXFsTFCv1t7wSymKqdAd5qG5w5oK2PZnC3anFWcCVcMyphV1WzX2fbg",
  "key23": "grsQ5UW94HNiHPEkPB8Pn6P4N3hafc6XXVACsD2MigNDy66o4LK3yBbsGwArrqnu7zWUUc2Qf1gZ9mX9k8PL76n",
  "key24": "3jvdwPxCEEUHzekjFX2yS5tJCb3MCznLCRMT4wG3sud87M3spZwRJZ75wp19UZe78MurAUV4zxoQMq4sminPQNEn",
  "key25": "29uRXT1EUaRvsw4SSruBLfkLMshJRBNgT6busL4zU4oGsAfNTSTmSismYKMu7z1q1B2RSUVL7zZWFKKGRV2rHhzE",
  "key26": "5oPfWP5jssrZaE7oLgAprsCgv9ADHDniYGp5jUwFVTVfvoaJP91dbwugtXdYMp1c8SfrGMzMEEdQVTmj3GxUVr5L",
  "key27": "rRJoruiLcPZZnGfwrn1v4PSNREoJ1vxcM4o5vosQHxzCNK8G9Ccv1dTRCgS4z4LNo85vxGB3teDW6Yu9HhLHzfd",
  "key28": "2h1cpqiXXpQAEU6hJh6VPLopKv3pddfYjucaiXLFbWYDpazuvF3g53tPXVmBrWowz7eE4yf8Nap3qgcADZzmiMq3",
  "key29": "VmwPvEuxHudeh9ah47qcNFhDisAysxBqYE4t3Ta397hNPTCc7ZzAeo9ihk5zi3HuoNQYsZJsseZXod3baGkYAEu",
  "key30": "443uHJZW6xHWkWab5F3msgzobVAHAYAMbULTq9GUkzPKNHKdxjYGFWncratiDK4VhfUpnPfzCHRMnhZxtKwK2bri",
  "key31": "5SmX5MbXbSTwpWnyujDsrGv6Z1GYgrtKwL7FPik7AekJX9Nd44NPtAmMtZjgEW7uPYwntoHGUdJUcPR6zhHJUmWj"
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
