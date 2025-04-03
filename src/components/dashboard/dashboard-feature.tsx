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
    "2XFnoVf4saezr5ppJjMwLZgWCsfar56KYSp8CmJhKiX8iPyj1Dk3BjmtSMguH49LQhWJV1Jrckfwzd9RVrUQj4UP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eHwYxu4mcSji82CSXx1ZqZ9FnRnNDkQDRWenAJkamiyTK77ZntyogkGEWqW798MGGWgxXtWgxUckFVWCLxvbZ5d",
  "key1": "27ry1G2PtGHN3qoK5A8GGi8bD1pxE76dNkNCGoBEzRNTd72MgjzyNHr5u3vTVytNBfSCfKx7UKTHBfpRXayJx28U",
  "key2": "4z3ujhZkrwXkDzDxSJpcFePcGZ8V22UtTNvExx5jc4D1vVDjAvaDJk3ZtAQZmzXWQFek7BBAn1Q3vk1f5oAec1hy",
  "key3": "5eU41kWWBLGgMoTDYhMSL6n7tPvddmes1krpfJm6MYKMkTFrfVcQD96j3qpbFtHZh5QcsE115UFK1e8XYuv4sTj4",
  "key4": "WDoeQppWYMPzpL52FM8KcZzviHt9hpErA5dxJ9LdYz16Htdz4cxMbFzkxeHVms2j8nPzBpxurs2cy7oeQFmA5kG",
  "key5": "5amWrERTw4im3w5dzn8f6nJgYpvwENwaAsyLUzipkX9z7k56tt2bWxRg5o5XB73T3xvvnSKJKLJoFCfTHZhJnrMm",
  "key6": "5XCBEhFBRN6EbESVasa6z3vE3sXscNAHCHK4tWKEnYyBKzLdJ88MbVKfDw6k6J5coHwmgNTiW4gVfRaTZtPJVdjo",
  "key7": "AptzE7aTJ1k2L7vabjDvhUkfrAwDhWsdteQTLa3iN2hJqDSXTTMstkCc4Lzf9TSgz1hka5Duvpotgs8h8sHbXk7",
  "key8": "2q84JZvRz4JeGmUsw3GTDmjfpoe1bTSJirTVbz6A5ccHL87VbjijD67zphJcWHSMW5hARwFoLxD2TBk9ps2pKMTS",
  "key9": "3LWZSNKVdbFYsqikLATa1vKzpgnzKSp722CD6wa6muc1CdoZ6ybqZMHJrJqb6gAp2RJacj4eKPsF5t4AjMd1K26h",
  "key10": "msepbJ7yvFXvqDcDYBQ9LCnNCB23hVzVcL6fv3sEvofy3sumyFzGt5TNJVgXkoQ7PBHWnBzDKWXvMLoDgdSiciN",
  "key11": "2xyrxnube8VJLXWY6qnntB9dDnUFB5scDr6grLAKWzp7pb5BUC4eARuMiafZv7RT7wcKMhqzh9K18b4Jh8TAdJA9",
  "key12": "5PnYzi9ynwv4DSxzHGY5M2dp1DDcvaH4Aam9c88ZT5FabxV9NsKLYHTaduGbntiNJEqAAsThHmAGjKD3Af3zhpY4",
  "key13": "3TzkZsts6CRfcTkQs8AAG19zopfMgZfvGv2WR542gvZyRmqUQEqTCBTfxPibb9BXg6Ae1vCCBMTPZ4CeQcVBLQWs",
  "key14": "2kVNc12pXXEEnRGaXGW59bHqDXJnvw6EK1poofZCpQ2bxnoVCDExabYUEf3ncf8nq3VYEyJRHLFJXfBVwXLhBGjs",
  "key15": "3PRyQJsB71hMqfbX7qZYp4xfeAJBCDNjQgZqSq7VA6UHBSxkV9CsrNap477jVYxXysB15bLn6dnJiJz6r46ajZmN",
  "key16": "3eHKEfwp4pbFtCTazQGxL6C5Um7sw9nxeWtdLDa2g2sACKqsVRCwH1C58vNCooTHHKHUywNHoPX7pjscV5yDX48x",
  "key17": "5UT4rdR7ok6EjbBTZKKvMzvwV9JTfPRvp8GjfgyCPVUcbCMgb54qGziN74KjvH3YeGmBnzpitaQTcPe9evkgmpwi",
  "key18": "4FQA2tVnwTDjtRLSeok3F8Rx5gNotpQSNtjtVq3wuiMtct7FatYopq7X8HetmgjpMgvYM8nseGspnXPYzuKnXM1F",
  "key19": "5zcBpXjnMUU4yNEuUXqDEF4D9eKsY6akW3Kg6xzaNjFn7kZHKhe9DKi7WsrM2TQEwkhWyQ1jmjuwF46hZgJen8Un",
  "key20": "fP9tseJ1UxzmhMj4bnNxWkFWHnKBrPmZcraDkDvDM54y5UpAngsRx521ahi7zVniJPdg8T5m3i9PXdjRQzwdkFa",
  "key21": "2zzXPxcgdcyhqs7Kt4qiXdcDp6k2BoP1dmPp71Te1C2GBkER4bd2JyHRAUua4cfK4ViN7Nm7n2AsZy4kDS5KGQjj",
  "key22": "63hj7QndxYhY9QosBPUKcW3TNVBsEYoysEnfrwRvBSd44SWwqqf2sGbkV5YjQirAeH1aNBtfNCxsLfoqnijKkmkg",
  "key23": "3oFDa2V1J84cHBeYRECSgxC7c4tHKXgaTuw6YwGBMLwf4MuoXhd51mxJ3RCZCXPf1Y1Y148bt2uLVhs6kCRek4Fq",
  "key24": "2jiHyb4Ao5Lt9K5uV8soTXChHeA5D96vUXzeqmsLr4MYJvUrBTX18M8vJ85pP2NeCKkxCiWjx9crv2A7E4J93M3E",
  "key25": "4yaHeF1KGwdWxCHYRjZuid87CVFwCHmrK1cFQCRAXnFwLQWZJq9ncq4inSNByAyLmjsMmeDCS3e5dDHQeLQ4ujCR",
  "key26": "2VWRkUyYTsKnb4M4ZTmrBhW6G5dukk8JiVkV5Tk9KEKq3NpghhsobwiCcebhuyqN9S9CLtF4c7ePUYGVChUjtqfs",
  "key27": "5Q1mD5ySfC61Gwtuf6d9UHWaixWWGT1UWnY8oNofSGd1yLGDWE754riLwoAdJTGNv8wnk4tPznEu7gV5TAz7TV4A",
  "key28": "57XhB6ESEi5BeB6qKSHXLBYnUrTsFgad892u8bQBS7RoDPWpvk6eZcnay3BZuFmprkfz98UJ4YSTVmR3Vfp9mK1n",
  "key29": "5p41VyAygCxeRN1o3SLxbZEGkjCcDkcWxBGwjYoGCnUANVzgnijfyzjBMSzdeZGRdFaNtM4MQq1oZdK1487Z7Lk7",
  "key30": "5PcXeZbrxCukzeNki29NPF6hbQwQjvApT78L6iowzuY2bBgoaJJMMXhF47xGhjMfKghfrYcDUxrABVAqtgFDE7QP",
  "key31": "5HjTN7GaNGtEAKMZMU8drgRYyEiWMtFddP19s2WRcz3oHSKVF6FPnLyXjRR4nNktvixQn8VSfhqrt9AtXfsPWfrv",
  "key32": "26e28AZ1yoPqqRw49QSMvYAuxnk5zfK5H2bLqGb4oxNPm16F5QiS9RLDgohwTLr7Uq9F3c8o9127N5b3nUQUet2o",
  "key33": "5wZbXgahXVF8DGB2q4DarP5kiHvzxo3v6Mdz5oGJHEXDLLP38EXYMNMpFw4WormgBS16FpobmaXgnvjaPtLYDfYc",
  "key34": "2LTsqnU4hsy71tw2mXvDKisoSyYMBUF59ERSQT5xnwb66J1TPae3AgcsUsYGCT3cUGBxKN1jajcQSRXgv7Cwtdg5",
  "key35": "EMD7snAJ6CUr8a94kabHXGfvXkq86qbZysiL6tvTVSU6HzpdUFG7W39tC64tWzeZcdyBaGXmSkkFjTxuJwTKcdG",
  "key36": "XmENjCMASCzukq5xQyeud59FUX6DsSm5zsX4nAQ7U5RVximHE3d7DsUDGhb7TvsQkXRtTFhKbioXHyjN4pv8vAe",
  "key37": "3ogYUZZCtVtLWH95VbziqVwumPozFWLm9Zd7oNhpxPiZtwhZvBFjrSqK9kFzDT1nBwgCkVhsVW4Va7CwnmrVbeGd",
  "key38": "2GibUmuXnikJHwkTHdJ6VPm4bCYJv5zGQqBBrPxYNeTxGe1QJEttoPf6HEDNDcPK6am67yPtMgGwN2g2A53pRg24",
  "key39": "BEpakuaHCqqr2JUzrvYQrNSaPN7hz7kDdLjpCiS7ZzTQY4ForArk7RaHYRcJCKBZiBQh88xVdXfo2ayCg66y1FW",
  "key40": "3ZtdbkSu2u9n4cAhkLrtYadjhhjM86HyTk1xHzRiSBUxN8J36jHusKdbpDPgTRKKBnEYC36VEJiF4261gbTTbJ22",
  "key41": "4SqPUUF3MR3WwkfdsA1JMznbe9kWxtBsgPAzj1RoAW9VgSWwv49pSpvQadBUYAgjPh8xX4wwzLutRt4abKv4wUN9",
  "key42": "44KLktnpJAMKRfXxrHBqLSNL4vdET99m5exKDL1uPvUgE58TinKQhEQoHJVrFww4oFuMRb2iFqpjfk4rqwubqug3"
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
