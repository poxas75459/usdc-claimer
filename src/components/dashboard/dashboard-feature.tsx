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
    "3tjDnTLvhVhypknGe3CuK7qmyy9ifzrgUijM7zqfifnV2CZ1eCo86JLjpGsxxk5eLBK95Rh1p5gV1FzhYfPzVHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdkneCbGGsATntp5St8vbSm61JhJMj6onrQuD49LmB4dqRcMZMJNzT3c6jBTYRMoKMopLXLdDCcJQqnmgwcDHjw",
  "key1": "rHMrxqrjVQpCQF6kv9tYeA8QMXqaTTyiqTg8bXAbffypBAc7cg1fFR7z8Sr6YNAwQDxxG34wCdM6jf8vJQNFE8F",
  "key2": "2XZVc87enUwueyTLJ9zQRcqCTiYNS7E5Anaq5QiTG28b11bQDKs9YLAAQpFohh41K2y31BmMPkhWypdAgoSB8b6F",
  "key3": "4yhrqHChCTgcAjKKvLF3MWADjvUzBDcsjijSwkQGoorhvLpfk8DsqsNAbKDZbJK1PF6Woro6eHoyAPEiRG2NXCjf",
  "key4": "4R3s2rL3qET9HDRjz3hgEy6sjQWZHBfK3bFhHpHNffF4QPhtRJBWZhQjSzsycEQtM4XmpeGXcBjeWSAgYC3siLky",
  "key5": "2SefHZDosPca1xyY3APKjxyFW1o3fQEwmskMttGL33DDsN5hiAfGeGJL2AJHArQYoN5eU4NtD9VzYvbczm4NZw5H",
  "key6": "3UPmxzEN3Y5i7kBfWcMDdNrCm4n6hy3tfs2FyoSwWJpzivw64nyUYkqSqdz6KjQTvJ5TNwh7Mt8YnxXF7BATCh5k",
  "key7": "2dvUkNHJWnre5VaMh6rgXSdLN3U2HY2AWrDNjUe7X5GUEsUrZLtNRk4mt5TFD4w1g8m4xyvMA9e8hKt2bvpb6DyH",
  "key8": "KqR3Fre3N7Ys8QNrB789JZR83QUk57rpRQ4ox94NRHNWU41goAjCdy2UfDiP5wNJkAxGiTdtqQuJTxijoBeTd6S",
  "key9": "2srZicqXWzkLMvUEQBJ5f5dfNAjPottepg46aktiZxpUbW2iV8ayrzXkuKuzhC9aj2Cn27FwYhGfay4sMmrguobQ",
  "key10": "2hTcjyo16ayUgeUWVnsSKRetcwqpQckdQo194ByjFahkJLRMBRbftQ1nZbGt95LrTFCAG18bMBuvfY5va1XQWW9X",
  "key11": "3rNgbEaeNyJK8vtBvhhzxAEzvWR87fSy9DSBmisTQ9D8JGGGX7tA7LrJY9v3F9cs3NcvBQ5ioYy8Zv1SZzUVQ4Et",
  "key12": "5V73o4Cg9TXuSvG9zJD4Y1cRUGv9tvgFjuJz24DaY5W1bpwnKoCADPHcVT4y7EqxyuJsZbot547cFYksPAVCQu44",
  "key13": "Ma27Yn5WQ3FQ626RohLXG8vhPy5SVJy8ryaesP5ZE1bjTUSPhuqFYhH6yg28Hgo9C6YmcjTVk4gHpUp6dDNJnY3",
  "key14": "66JG6Dgs3PLrpojvkMDHVcj2PBD6buU5DCVWXZhgEtswefeP4RYg3KnVbc98jwNTZANuReLeHcRqE873KuDt2NCg",
  "key15": "5dN7NpNvHXYnyqc94sfSiysEDAC3sti8GFvKf8b4QrJEhqCwmSmN3VnJ43XGz8iKGinYmJ9xX9jB96tugvhrYAQo",
  "key16": "3XjAEm64GEcFNkHok9oLbgVkYFBc1L48hK27hwfe3FCwCttdXKbrE3RVLwS2aJaBSk6go6M5q1M3N4DvgCDekMAY",
  "key17": "43vBmE8iEKZJaW1PXTQHS1SQG4uub3CUnM9jmmPtP2T5JTZhGz8gJa1EcXfz4kmRdZY9gUS61tGgCeqThH58NBge",
  "key18": "52e16TY9datBK1LHbwPkyhWCaVaWczgsj9AWevrGBySRPqPeLs4pVoxELbuANX2U5NFy1mRtBJ96fCzWTsWzZD3c",
  "key19": "4pqEMi31gwafBqBm6GzcWADv6Mu86w6axaiFs2B78rpKr3vepnvaDRmbbVLpFfFMqzp6ZaoXbT4n65YH932udV9H",
  "key20": "5RPSiUT1Te3cTwQKqHP2tEnPE7F9a6tyFcxTZpKctvrSLBCCT6xwU2y2yZBbUZAZaAcAVP8rfjAXoWA5fgRSv8AU",
  "key21": "3Z7zC2a5HEXHGZTfYkqxT84SGKy7C9TiaoUzmfhWSTL78Ny2cc1dcrfNNWPqvEXG8mQf2c6FFRBzGgfVDX6F45iE",
  "key22": "3QNXNkpkgy8DjrT53dSPaRHS48roYs9pZZVL5wsttNSnJfmykrMeJjHnWrYUSkA87CzAyQk8FyCb2xhrcJAbnUVT",
  "key23": "GgBDLgvGZJQNzpy4VaKxcUHUoochMvUdw2iqHmobqsLCompGNvUmq3iyXKVoAszvT9Wkw5ipjXKcXLqnmzZeiJP",
  "key24": "43GhnTa9e8i3vTixwX3JcLASvabixpkrHRYM8UUav225f8ckxfhvGA3BA6tAumUPxU61GR84kF5kkJ5mJCEVVsfF",
  "key25": "2K4EDpmqeJTw82BtVT87LM5BWhwsw1A2FgBV6DvEUAtT37HidJbcTqk9pSqaS9d6jt9PRKvF9agYQ5TmfT9sTJ8n",
  "key26": "3DFFFJPgPGrQEtr9nWCER1x672bRqS96JzBGa5NCcPK36dzta3pbbzRxN8bdVd7HN9fmCC7MFPXdgpXhUde9NoVb",
  "key27": "43LigEeLENQvifK2aqRKsXbwTDt7KAnhpMemGav818EiL67xDvC8tBCs29Gq5TfRjwkYMhUWbdNsn5tbh7idhVjY",
  "key28": "2zJfu8FiN5QoNJQaRUH7Fpv96aT5fMLHqRrTRHnaaFLGvSNVY5os1wjgktrqyyMrPrr91e2yBuKcHQfqNxx5GjNH",
  "key29": "4xxfn5ogYuyqpWwcVf85rpWLrZ78pG9a1SHcmsUwczQdfnXDRUEVXvcxcT5XyVrbKVL27zBFKDPqKbvfpfy8ZAtR",
  "key30": "4mEXDW2Q29fr3UuLs54hnLV986kkrLZmcvLU8WvfCXAodFBKrusHz7GKsbLWDbdsgwomvTNsCVW69Y4ZLJCt6p8B",
  "key31": "5vDhd9Xb2k71zdqL726c9yjjgGKwTj59BJ97dfd5rF76mzxYaqUTqX5EY4RZ5nEXgSJDdCqrDhjUKLiuDh4tZW5f",
  "key32": "48RHCGyFbQ4SQsQ6swesWaLMN5zBZ27PyvLCwrGHUGSy77zJxGCuENv3HK8o9Tvtzu9qfvZePRmnkY8CVVhxfGma",
  "key33": "21NdQxEyyNY8rxgeA7qFmS6zQeojzLFU8zmp4u8JPX3b5Rre5Pamyo9iQwuRMeVtNMviJCUxhYGFPXhEMzFbvEPi",
  "key34": "2gVAztpTKPZTqeNyQzGizS3iLwoEoK8m5TFg4V3XFboSujN5FgNwTRdf1CziLMAaYJPYyLVBbFspRpBybCPiPcmz",
  "key35": "5oBVX1CxEceT5DuxJ1XASfQAj299Xc6JLGBDBQv7T6HJLxPkKLciDmQukn8aXbSz99iufPgf2Lv8E5NVoUyWq7gT",
  "key36": "44n6knzUBjhaMMetYiXeUghKQcpNpJ1fYJTzwK4WDXGXe69PezbvyQkYYmbTENz5c5sKLCtKWuh2ijZVW5mpwifF",
  "key37": "cGfyvSZTmnWusSs5HSqzDoihefdZdEN8CNu9aM9e7tEHpe8wTEtaaQP2iiwkbLWP9pLmuXDyBDAGgsMjWofhsTr",
  "key38": "5SpsLkAsxGKGWa6gkWmp1YU9Lq6VADjWpdnvxDBWH6vzkMF3y4ZsTbyXCnyB6RbKDiaN2TBz5yn3RHcz9BFWg26o",
  "key39": "35jfE9rritMJWonUQwSe1cjg9hoYzSdB8wA3CpdyBEEtB21TS8sS4ij1HctF2ZQkgLsnXhN6PHAyNYjsPLxC4GCg",
  "key40": "476nqihGbq1T2tYbRgj9WNTA512d5SB5k7qLSyRLteakMUQQL2GFsi1btbSHLAtAN3BMxWvbbfRFXSDrkUCV57r1"
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
