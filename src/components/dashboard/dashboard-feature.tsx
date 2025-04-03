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
    "9ySh6xkVKgTbdPf242qkb1EKF5QSpPLQDsjieYSFHAh9Ey4bQKGTv3GkQs8asZpN6YaJFGPmXcbSizkptEdEnPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZW6hQ44jpKshtuQqLtGxhox6nAPUmdvv6Mxu63JY9qRrvRjoD3esioZNHgcnAvB3sjBy6KG5vfLeEy8YKSdc9V7",
  "key1": "YLTsN8ZdNfQRdL4SVd16ywZmH1ceL4AuQYcVs1yG15cbXU7dC5fodHEaDyZMd8P8nR3Xrcorac9E5fpvT6gwcri",
  "key2": "2R1NKNTqg5WH6wPXa3kgPZaFR8NWqR4Wsgf227ZpQV7Jn46vJLUHsbYSAzfhhj6gRvUhWA2fny4W5z92CrgVK8Y7",
  "key3": "3XL6o4fjZn7LXQcQGVPCxuaG8gePXgsrTvVa1T6nW8fCzRhZ2eGjk9nWe4Rh384gKqpJuzCH7i1JDph8LNMYKSaf",
  "key4": "MVo31nVqnc1PVqKXFR5sQv83ZyXR8fNmmm9G9iWJxQ4En2bYTZAf8wWehH62BZAFnyqRAVk6PpgtEgexjDGroeL",
  "key5": "3o8kGMfBeJPJzKE45mm3w5yfPfPjbV515sTNiP4A7iLTo1sF7SswcQSMZdEkGexSzuqoBfwkjjBJHBKfiGS8Wbvf",
  "key6": "2DTqyMAtXC18LgoqQ78XimJSGY2cUiMYgoRHEcbKj1CHs9Jx8SdZdoZe9nJ4wQbaLax5UYtfuGbqweV5e71uX8P6",
  "key7": "4XhxESF2t33EX8oD6hjafGpPV9r2s7d9NYZm8nsj8jGF16o2EHKVgLw9Zvc5EDWFxyTT9SfyvZF9WUuAkesBPLPK",
  "key8": "2qx2CJBMjV58Xhccac57ozZ4LDGXUKaFhqjvRCKZjEf7Xaqp5r2mNXdm7pVpHe4mnEr1uwCbkvsjKAQBzzCHzjXH",
  "key9": "2y89efqN8dLaRnLAgvsyv9JfZ7cMyRLzTExhmpBXddeHUCzGoZ6tg4pa7jmivDUa7hy78FKjdnDDwUYZz7qFrJJ5",
  "key10": "5di67hkgznvW8XhD2Cxng44suZiHwqTmhnakqovumkPhJLLdiDxvZCwoZgVa3zeLLMiJksz2LMJufU6kcB9f3NSg",
  "key11": "4AVgxfeuNj7RqE9yRT61KygcTMsVFYcv8eyDTaPNt81CRQe54jYWrfwoBzaDiiiAx5RhGvh1fK1tKnFyQk635UxT",
  "key12": "54TPjrtp7asNCJqgQ1jGKeb4XtdiVaHGuWQDV1RBUXesb6WpnVn2sBjxJnHv8DL1ZFFTG4czuP6x6R1UoBEdWdNE",
  "key13": "3N342tFCNdi9KT9DKg5hcKwzWd7LxoqmpYDfxZ4xMJat5dHvJPe77XTjwWoYjgp1zyB1GBRKxkG48GMbvQtFbcG2",
  "key14": "4bgDfYwao6FZfyEJQsaDuyUxqcrg3HP5JaRBShDq2XM3MrksViAbyHgX8ukycWfHBv5JRax99uVj5Nys85S3PtPf",
  "key15": "4HoN2xfxxz9EAFdPCfa1uQKgsiBmhaVuUu8W4PdHt6MxtFPsrzwgz2FFgaxqWkWyJxhjpGnV1JeDnjPsBimvAFPS",
  "key16": "4VYfKNjLkWuGAXzpKQfNa5bAjhWustePkoDKF62HwtRDRvaHYduXx19yJqLUUY6mtWfDR7wGrBuWLsyM69aevdw9",
  "key17": "58TfAQjHxUtXUv9PAYekQVXj7qbmHYvdwmZuoSKCasxcEWqfPvdxoA5u5tCBwaiwC37KtPst7Cz39hGRVZ7xypqE",
  "key18": "CPNYngwGRkKUGAD88gTqJ58nCqAoMu3UKr9MV3vSDZgeBapQn6nbTQE4PtEdLvRt8e2DPvVs8cfuruHqhKofkax",
  "key19": "48k8opyDiFzqHKEAVHW4EQR5436d44ctqvZXLafMVTPBNdzDAki474HCL2QwnnkYatUP76h7FeosDMsyoWCx8E9R",
  "key20": "3ddSzBVBHPNZDMWWbFnXNHRoawWb8YFBJTWXDn4VnPKQrTaebEPBtDZkWqeNB8rmNzDDKaJPDMa5tk9THwzwy7MG",
  "key21": "3LunPyAAGqu6NeUnipxb7WUE6QNBbnhWVNiS1FwGe6ZNdz9YtMur5vVDaYZctMW8zzVVsr8jVQXrAetfvyC5z8zm",
  "key22": "5LSYoyCdwVoUJGPvV8v9Lr2QmasAoAMdY2Np8vMNm4cNVt5oEGTg3A2vuuuL8X1ENwZW8AsEUucnMzxmMVV2i1KQ",
  "key23": "5voVLnasVrysaLwRXmkNvU4TxTzho2P6CDUi9SG8zbUh9ffZD4qPCAHaqQDXywSSTud7qPqMHWnBQQTsHWbXkPY",
  "key24": "3ixcXTgeHqRT8TepnL282bkgBpgXwNhZVLgYkEKo3qL3yLhD5ACjoDV7XtkwaxPCvbrXrDue7q1KLksQKLCaA3qQ",
  "key25": "2Tbc3CLc8bo1yRF6GmjNd3sTJcUzwtNqjMfgNeZ1qVeT7Uew6FGLyKcsfhp8sSiyQbzK2SZeitfG7QjNoAFtx9Jf",
  "key26": "28BRW5tZPUWTPH9FLrYiuf3XhQt9ZxZSLwvt7mpF7mK76Wa86mYcZ5SdGwZzrS7vjqJcxwGv5RKJYJeKmbFgoPgQ",
  "key27": "3VPjUoDKNiHPhtzWvx4UHAQi7V5Y6B7HD1iH2jXUPkKgpwyKnwjam4qkfUYBcbVSM3qmtrg9u7d9uwATiTghvyH9",
  "key28": "v8A1s3nQ3S7BMb4T53NUnoTBPct1ZWjtWMpqx2gDnQdEXxCxqmTpDVdagaL9wMoxrW7mVBcn9y7on2MdH8KNstk",
  "key29": "5LzpgTcB5woVa8Peqjh7oVRPFKNCXkqBGzGGB7C693EcfvZJk7Dhg3eNSTyKzCVqVyKvYoN1QJDcjEBxEQSqYzux",
  "key30": "4DvbcsHnKZbV74RpLGMgXge1x15vMS2CyCNdcQ5Q1xdrKSqKiDn3kL51doALa42KEDbTm6GtBKS2NbGT77ftp44",
  "key31": "y3qy95gNc4tgbPNLRjQrYHXPi3f3CfgL1EykuYwq4nbVYWk45xoBkeMxqi4LJqoXh9sMGqtQkJJcxtrq5hrL3WK",
  "key32": "3fF4zx1BF7wXtXvDMAfZFyt5uwFqYfWeRmxfZYMaqohH2vdWHb8Ge4GH2vKEGFgvfKcVeUAZ6q5r8p1matYxKbVs",
  "key33": "gSG6kqVcRJGzUtVkHVDa8hhsdoFUhZ8w45Y85aMXfonZUwWB6uomrqczLjWHbzwKJSZQidQ4Xa6zedGy7JiFgtE",
  "key34": "2idBXSWTJMFEianmPn3Js8n3No1WWQaH89Gm54BT1JACJVUDfXmyr4V1Wx5dy2gc9DhXPeDBBfEeeeXKTdYJETAo",
  "key35": "5gY3K2ZQkcriKyuSD4Jvz5oWMGXnznF18m3C7nTXnMhqdXw7Tz3qh3jSpLNGLatUHnBJE4wqNzvHDDyPqm9QUiys",
  "key36": "c3K3XYLchwgcYb719sVSyzm5MQmWf4qth5JWJhdvu743GaDfGBzN28LvieJaD9Joa4wCVYx8nGEBCTpP4iPxF49",
  "key37": "3eLYJvyhgWC7K39eNpnaePxacKvDdRUeNUi9NMGW2KyMQzD3hjo38WkYSEAoAmtLsg777CAyTUEQbS3ftcRZAtRU"
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
