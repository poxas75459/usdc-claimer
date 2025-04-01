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
    "3Sc2KUreWyPTYynk5R7GBtN4UYN8bseQM3TY8tsyFpbNZTE1WoYiL96cy1vqrgZcbpXA1NpugmCs4bvYZxFTZgdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kmRTLW6J7rF1W7WK1sDZCAkCStxGsbdvkMhdV8Zit3NZiJe2YXeoQz3EW2Mg3CQdS3okJSGjYoD4GMXJhdBPcjR",
  "key1": "51a2hPyaWkpjn9q57NN3LD8YfX6oKJyW233VmQmYqxALGmvZG9Vc4BnN6krCxGRiT4uRdhSRV3v6zJBGBLprgv5J",
  "key2": "5ZSoPE21us81C5KA6nEs96fkFhWtKyEJjsjmXdNsd9JUxCoH7iKSjh37qWac7e7JfWzdL5DM6xj5j2aQBQQy6mdy",
  "key3": "2Uu6edvyX7siSYgfhcq4g8SjukmPhnV5DJmD9pfHKUtf6SXM9CeF4D84JjvYzVnrPMbnQCPpGJb39XMxqYLGp5Rt",
  "key4": "53oDeuMjZeaKifG4LiHpoYWMKuHt71yCxXorimGQtpWX4dKN4nkPE83bXoKdCkWqYXeQsebvmAwJsQYP2V7yJQeJ",
  "key5": "3NYMFqRk8PF9WKbwmSuvxsCu2bBaLC9Sgv3597iysqrChHtsaRGVAAR2JkHzmSRQCFgfVzYNzGN8vxM8JNE8KX69",
  "key6": "NWZBCKDRuXHgoCXYKsE6pgyi6B6APyqwG59gT1F4RM6neXC1zdfxdRFAmvhbTBndMTrMcSKbbQ441FDDjJNoMrB",
  "key7": "4rMGvqS5xthDHBfB3cxC1LKxGWBApJyoV3GsAUXZduCKPgq3MGNddPDu2z4p4DnbVLXXnGnkCkrWLFF7TrDQYThN",
  "key8": "5vM2mxXhJK6ogUH8z3MxEfapFtLM62V2iQPM8bNNcRxNYcgtxWHpq4kncSFh7cBHns7yi1BUTw6j4BEjY5tSLEUe",
  "key9": "4GVE1NSwqMBHNP294HiR5Ne5SLuPKvZv3JdFYkGw6cyjQSf2UHchrZCV2ibetRc7YWNcLdZBZZARo3CFGiXredtS",
  "key10": "1y5ux83gxawTn1gvTFNNhCj4MkgiVJcgYw3NbtUNYnEbykmGG2jfFiijjFgCfNNqMaFobVpSEJ3cvZxYuV5262K",
  "key11": "4brr4SgaXjWW7YX47GkFcodBGBnZjLKVgQo7MniWxUqXvNUgEDSUDAqJwx55FiXfVeX49ZATpBNyoTBfPWqoTwFM",
  "key12": "kSUK3Ny6ih2cYB25Skqx9CESxutgyTj6SHHrrEVw4yeokVW5KuCmxWmCsU4z23MLsfttFAJZWChtHQiY2AasgR8",
  "key13": "ZvKAQDptK1PdC3MEDUVkZGhZanoSV9cWtrtyUW2LgsAwHx3Ktap5uABKHUzg1J9LakYFqnUAKm5NEdYFWRNAGSr",
  "key14": "5nL8s5GUgH67U1ZPrFtD6wKixwatvbxcnSJL5JBMiAgXPhgfx14rNgEPHmoDL1WuFg3mP2BM77JMtzcoRJt7PnJe",
  "key15": "3nynSpuVySxQnKbUHVVQ4PzUixJ8J9b1tonWzFcEFFdqG8xpmHmYWmiAzt2AZwNnooRtP1xwkENV9mSoH7T1ibfr",
  "key16": "5LPF93rvzifQLRY95bEEgWfAModQV5eQBoxYuqDGJ5njSwVq4bp5Le3aQQXQKYCGSwcwP5Ue59MYaDwvxcYbGyd9",
  "key17": "67Fmz8NeFM8hiULKTLEAbSWmo9p6emiF1CCHK9VCbwm3GN8HwNPqLVHxieZm9Muh7Zz2XoKW7bgVd4Ah62vxhRF4",
  "key18": "569Kce194yavf3SgtLz53Lsc5qfa9RT4ZiEkdWGvPs3Gin1khVcpvvjuviXtCMEtfUeu7mz8sf6v8oSaY7AAecg8",
  "key19": "senA9RPyddqWJDfvbRZecdosEXmi3Kq8r34wGRrRHjz2eY59yRdiHxq3yhkBMK4nE2CtqqJTmmLwbTj2pQFJBKh",
  "key20": "4Bp799fRotmZMjpuLHs1XRjAVQXNPME9G3WZ63V2Vn1q3eY5LiKVTUYwXoiDQqvEEe4pgmXKgpTR1FjPZKnM53pu",
  "key21": "4VJEEUWMFA1Rjqzv7PX5p46uopMNEPxQ7urXAMSkTDNCPje4diZ1R5cVrMK2921gPqqT6A4MHRmq8pChP1ddA5Bn",
  "key22": "29mT9YRFbhHVy8neWpXnzCCvRoQdUiGbhFgWyGUB9EHE16jWCMX2dgSHUyxmdc2LsxN7DVS3orcTT4XLoGRzbUpy",
  "key23": "4cWzQ7FSAF2hDrjgokwSZ4XHyFqwegqLHYHZhpay1QzmMaXnNFnC6kwA6Qindxd6YhRqweYccaRSK5naQDqTdJwE",
  "key24": "5knG3NiQqvhm2FUdAqEW7ik3qURKY2mD98NeU5Db2XfLgQLb9hNnvyA6VaxzKZ36fL5My3z7VRiLcjXH4Zt8du86",
  "key25": "yDN8UFv3Ha2VrdQAho8t16Nkhqero12ZUwnuC5wvrYw3QDuBQHZV7GHRmXFNQHrbsPusoQ5t7521P22GhhNGJMY",
  "key26": "4Zu8UkedviGA9j78JS4PhK5RwzGFR9WRcCM4nzupLS88actHCob8N4tNY2wWymBBRgEsFvKEYparYXn8iCd94h8a",
  "key27": "kWjbqaTrhMMiEpKjWhFSyKDjyLm9jdUgux4m5Khx1AbdTYGUTQS11qFUpu16Tm68CJQkg4y4B7wiXFToaFmHEHV",
  "key28": "2yuBYpqM9k5iCHJGHzKYih5hsYYAvqkTPsTAvLXurGe1g7KVwMveeZzRqLC1tTMMLvVWe9DFK1ntvByNzUmooEZy",
  "key29": "4H415GjeztFpvtfbyphURTWAeNtvnbvBP8k1PRWDj5bsaNrKR1NDAmvyu5hngEDabiR76XLWu4gBeh5EkZgPdMif",
  "key30": "GeKb9wBd5hkvB28s2geFsNKpLYWMunGBRhzp1UdMdrueySPde16UfTxVRaAQm73TrSVd1ex52fiqmXgvXoECt6x",
  "key31": "35o6xpnAWwGZGjJ22QVwr3LJtv84uoLY7MUSshcf1UytZKJMNmQ1ihVTdsLGohdg3YxcB5kmCpLbdGUHExeoySMj",
  "key32": "4fef73eYio13fFfHDTwUpozV1GTTMGvHdGbeLGfEMdtDYWvqvjhU4p9Bz2NDLtVuqL1ee5H9VLRYD1SzterDHfse",
  "key33": "22XiPQo4FaKe7YCNLQDJa4mEEGAZZSnqvWPbbyxuKG6ajBiHmUFLjt4zu9YFzb25DXLTFKozf1xQ1j4eVSeNmLCQ",
  "key34": "4XTseansYYsN2Gxxdz1kj2U3D9sszGUcHPpuqiqdAGV6uGeRMGBry7wjD5Xijgx61xFYF2YUuXxMtcbAuinwUnH7",
  "key35": "5MLArVtQXtz96Dovu2DMeL3DCwuJrNsmU2j7GzUNqfPDu8wcpGcQ8fngkgWAeExRtfxLF5XXDdSHeUUcHqbg6rpB",
  "key36": "4hetsSUT6JVSYv6SjMCwtK6mzKBom4fSv3nqZeDG3V3yoPhQoNntvGFSt7gWbgFY4J47cHGvc2aKt1YSSAC8Q1Wn",
  "key37": "5cbJzCX9CcJAYaLFqStss9BzzeJVzjsc8Mh96bsTZj7kJj2rqCB1C5ThfaAyHDPMR97QyxAhYEBxo5ZRUhaafmTU",
  "key38": "63eZ4HrcyhDxdgLPwreXhMc8F5YgCwpxx4AzgGPnWhz7G7SgSszKZ3GFyp8GyKvvZqdhfn5HHmfrdQ8rpzjHHoU4",
  "key39": "57XykfQ6MYdtLBrqUae3EG5899GBrhAh3Bq2WLNv4Rs48pLoqGNrWPq41yYhCJvsJwt9b1otvo3Qrx2yuLZJSA7R",
  "key40": "4GTvALG3SDq2ngGo27TjsdhbtDpcJHLqWBwvYnpCp1yVJGWoBnNwU1GG7Rct6STRdRJ1FAB9zfh7YH9xZFJFDCCW",
  "key41": "4fShM5cmqmvmpXMNDxuF5hf4mrLMaaLvcca49tneqNduJ3daCfXUNspgRPZUyq4uiQobugkWyiAtBNRXSHM7Mgy8"
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
