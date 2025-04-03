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
    "3uCJ7DjYHHD7e74UQf13144xqxjKF8EKxzUoQJWxbCdKJQrvutzS5KUUCurVJ5Pjh3CmRuWu7gzFNvR9qy6xyDjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYy3gaLX8BAuQrdm9VKk4wAfELK8WvZb6P4QLUmJnonDKa9gMrhyT9d6prowzLU9TWmEZPWSEeP1u4Hz5Kw9ScD",
  "key1": "5KP5y6T3pgt2m8GMsCA5Nq9zuCyzWxVMhW72xMLZvoK6huEv91VgaSJTBnkNirV8nHDv3gBxsBScBJQwkK4UAwb2",
  "key2": "2kZbR36vJEPGrYm2tfG8ucKgwmiQALvVnXMMphkKp1fGjw26y1eSiuqXbcpmmyBuzpJNwje4ejBdb8LDozEbkhUC",
  "key3": "4PiStuwLg4e6xYZBKqhsmwqGp3GMk62GYtrZvcek18h5ke7DAszKDGo8CL8vW17XkR9JNai5vmdivnHZyknUQ5e1",
  "key4": "4XoyJ9q7MUT84josHnQxD2vYT4VDEj5MQ3EANYN32uxhG5A5rJcCPTfGqCcd5XNTeid5iUukKGe9KG6eiVjBhw8J",
  "key5": "4c7pr6obvVeLX6Jpmq2D3MDsZiZbBceqyUFWJBUkZPLDmPoibJAQQJqyeDmFM2vG5toRuxb9psUhcZ6EudVNtfZu",
  "key6": "4XJ7MTWARK5eznwB3svYxHPPyLRGuKen4rjNz62ssL6gm2eiwGWHKNA17fk5vgKxxwfrWtb8i7i1PhT2aVyazKLY",
  "key7": "4TyBRKFoZJk3pfjzx5Ejn8M3PBX87t1z2bZocpXyTwm3Wy5VCnhUKTWCrL3UUcnvYWJLnXVGeqcQdTii6M2aPY5E",
  "key8": "JEVjU7ZisNKXamcA3Q9PLV3x7nLYZfN7jtA3nFH6wSMexB7XqwidwexEnrSprGHkvYK2VKyqk2NQfzmrC6F185p",
  "key9": "2XsCjyUujVktgWWDw2NKDenvTsKco3thSKNyraXvs2AymrML4D7hC1tj5hgMsn7sWZYTUX4up65K7km1HPcjtDtH",
  "key10": "3gZ3TnGckZwSPGQTeznx9CdpRAUSJiFpRCApxzagkx7xoyQPB41sTfsy1utEHrmaATGaNbepozj6uQaJhEfDNsKY",
  "key11": "39eGJj58n8AVYPZVt7hoWsotuhM3g9aqqz83dDvFoUJQa9ymqwCo8ArfFqm11uibz9MXqL6NBXNFP1HVKgAdfMk6",
  "key12": "4JMbm87GuKfqbsBG8z9dZWdnJVEYnP2vnhK9qLmKdzwkT2c51LmGkj3AQQLmZ1WzaAsH6pJp2Da8NWLGJp7NijK",
  "key13": "5GG25VW1izDRj1rFoDucRKWwrSaHcPVe1uec8R694CvuGdSsAH3NZXZFd3jg3Fni3AmFFKZ47AegeBhXxVpxSxx2",
  "key14": "VS7g43Cv9bLciHaXbZ35evJSmdNLtmhQPJtDrYURvhWeg2g72fk2w45p8j1pDtoKy9ujrgSoPyQ8xCfCWAGEhXM",
  "key15": "4G6LVsYAysY5bDby3M4MfXxFMa599BDqtEbvBSpYj9Ne9cAquJjNTv5bPCZB5E8QM7ScMgV4qt7tkaPjREFBxpGP",
  "key16": "2DzDhcTjhztgeUPqFPpepgukEkA1RrvLtA4LvNhBEs1mJM1GPzYb9rDWCoqDpXUNepyeFqaBw69dryu28kkVqjug",
  "key17": "2mW24sEQtRCd5nU4JXig1c9HcTJ32Dn6FHuUfBsFEf3DXeJxkCRHkRYcwkEqcmtThuasZ8x3vS9ce1u8iRevpuHu",
  "key18": "5YoqpZAbnUkr7vubEeyae8iG2Msi6tAYcYsk3MNLxdzfYedSpvw3ssNBmDc81NzLyP2Qvy6rApEbVEV1MawdQUoZ",
  "key19": "3CrUksi3mKzTVXqd3aZQNPZAijcsUugMfj8mQU1mtXKyMdtHMN6dX3ez7auBAGxyr9h1C3pEvN4xsCvzbTQUUii",
  "key20": "4gHwBzyyPzekbE9eQ2WPhA2beSFgYQKc3vaP4QUKwQweg1k1uDqvMXJmrU4AedYDsYM2SSDA46cP4LKiC4tJ3HQC",
  "key21": "HyHPUP44MdoxE6RgMSa1zzxQCajGmUVPaZLLmr7zyH2DmpzWDNz2Ad1tLVxEWDAEjcDvjn8VBb2dP7WWBdG7Rp1",
  "key22": "3SECeQhuksnq5yA3ieDo3eKLXmVPET47fqvwSpxNBBzYJVdZxZ27KGmTgH1FktemdavzMdCkQpxEmRa6fcUJSmEu",
  "key23": "3x65i4f1ZTbs3AsCRFukeDn6aet8e8qo95h1tjD7TqugZqL7KKa7stL3XSnzoZzs5T1B7umTUv6wiLnCVP7AnB3M",
  "key24": "5n91M4hxFFTSUNN7F4T3SjPMxRuuzVnVUujMZoWS9TtjP5XtgA2j9wAJysjRg1u48TjPwCKDcBaWxdCz5sP97LSp",
  "key25": "5cdnYuXdFzwizxyuCUHASnvkY8gwEdyZNeBdx5KLAfFkSbjv5temnCn7Qeuj2t3drkwr17jhg66adYbcPwkY85Qs",
  "key26": "4zSQ8EvZhMMpxG1EQnGL4fTimWiYy7XbSyrBqVTMhpYfAPvPQ1BuQW5UxQJXcddVszMvF95HqMkPvtZQsjGdnub4",
  "key27": "4q6eewKtnAakMzpxUjCQfgbNu4v8XVkmuZN3GqkR5Hus17C9TkSuoL2F9C89twEtf6r9pUSngptnFLGUnJRBuQQ5",
  "key28": "2xjpQkzYHsi3JSBAcGRFSUEdcDJosyuTdECWMeZ93V6Yx7qp1S49Gr7jRHCJZdDWb4cQhaNtUqL94DmenKbvahZq",
  "key29": "2gyeDCR2YUHBmtBTLjJg4SzyeJkamMUSt8yKVzAZ1U6wa11uMFjJqo8EGdSShfDE19iQr2c5xbFFcQQqoZVtEc1p",
  "key30": "qLorVozwnRGJo93YZhgx9ne4URr5UWX53QhqunEmRx36J9usVPey6yw8fuebs8tGcXpVbjT26SANLYTESrfUiKd",
  "key31": "43huo6Ph3sEbyYkfKQnAzRvzMR2W1Ggtc2Rugp43hZJ7CnEu5JF7GTQgddRyxq3wH3JJPNhm8vbZRUejpuzhBKtK",
  "key32": "2UfNuBVAEFMSk6VUUTfhbNQcq6TdaSuJUSij3trPLc5HgDXA2zAjK7XH8ZaMBTz2QWExYo2nAYZm35NLCF7TTitX",
  "key33": "4Q1QghBYWvYioVRJDLthoVEWUW9rJN5Ct2N23oaX3xhazZ8DjkfbdK8WnKdvJKVVYYC42xYszAx3KAKYE4CwjFGm",
  "key34": "4KEo5SthN6MRWAL2fYJpfDcnyQfrzbWuuLhb6NckcopZgKRTRmPMCCW7w2HTSg53WeqKWVTrXLki5twTfaxAM2wk",
  "key35": "42DNPf1QZPaiYhbyHnBRjFBBLfDpVxTkDpbeD5CFZpK2fhRrBAQf1JuTRGWxzG1WRGmLE7k1TN1VERmTvmDDN52p",
  "key36": "Yy16QdbTyFcxjkvNs4dKnUEtDqKsT2mv4Ex7Vj9HAfZsJyw3vswmiQs3QuiMeUSPZhrem3vfuFYmCzgRdLo7kNF",
  "key37": "4xNNJcsykuWCQWGoidU4V1hTFTzvqQRxz7Aj3EoPV11hPVgGr8SDGev9gndDaSRdX5fL2H941HjxnBhGNSJTtUes",
  "key38": "64yvmZUzXgwo6nX5w8JmjABGMTz7bd9zHdYS5NeRMBxHYta7WaD7WCP7tZpXzJrUwQXD4w9so9E7yeqkkVWtydaR",
  "key39": "3v5LJ5FMpuzro2GGkkCDDExG7quXSHuZopH44wGRDWCs4pcn7kWQGXvfhWNJFNPtNCbHnBF7XXcEU1XAZMB8YY3C",
  "key40": "3Kf7VD7KDcJ4r9mmEyhdSSBxuQ9KfE6G8uG8HWX2FPfA1tpHZQm22PyDWMKNVZgisa2n8gMhRQAq3nkiH4dJVSs9",
  "key41": "4VssRtxoRtVaPTun3w19oFAHV2cPbFnCK1UxXMwJ2YDD4e86i8brLpeA3wc3pwR5zwYx1Fg1Fnvf5GFHq6xo9cEg",
  "key42": "2qE3Ue623E8Sm4btEAG43SEpqM4BEFQGVnJS8rJfZ48RSDUA5ZS8Es6KjrohHTFi2zKU4sVu5edqCSDd84msA79Q",
  "key43": "22YqD5XBRbDkxYRpwkJiBrfjEjraqj2JPUo3Ssdmh53RgfCCyaumUg4ZWyyqozGe8Yw1AoAZE6PoQntrr6pb2XV2",
  "key44": "2Ws6ecgP3uvy54hPmAS4sUboaSBzwjNeKS1Z6xgM52XDH55uciBaskqLDVD8jJxCbXqL2YT13k73qhs5YeQjRhk5",
  "key45": "2CCqRwbqM5vmuWnkjAWBPvuUtTN13mn6dqy4w6bMBmnXdL9Yg86Bo65ZQLBP44xTP56UaFeCaD76955apnkZ855v",
  "key46": "4jNL5x4jbqi5Te5SPGfU9P1UneSQHR9ZQ2RUv3WhBGAscvxUFuYUQV5zypc6bUCEDTGwSLgR2rZwAdoG9FiZAeoq"
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
