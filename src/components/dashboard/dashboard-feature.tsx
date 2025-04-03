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
    "3TCPX8sc1CLkAQn4cc45rqwz8P1mWEr5zRdQjNzkJrPnLPxSmHTxGVgLpm9Cos9fZRCXovpj2DXPV8dYPga7GNzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qkQsE5rDSdxntELNJT6Q6j88NtjR8BEbrPbQDqD7DCemsSv1CKzNx3YgPt6gSqQQ2QN4cbALVb1beofAX2rRUA",
  "key1": "3iMTAMUJ86RkY1mTooWiRHkGjRFFcZViys7K1E1ZEP7Aj9pxUCgnt9Jv9nAHXmgip1Yxa6YMKeueQg2Mf7W9SnM4",
  "key2": "3m5jGKVEmt5BchBCHkEHYRF4yE6LNnr9RVZj8MZpNZzWj9Y33FNf1wAcdZxVqm2PTnwNsELXGLycDrLebkMKbBvv",
  "key3": "aVmfbKdiYg7dSKLi6z8HsWAJMLcdtuHPsMYPs5RadAUaZZXq71M3GpJRyfMtZbkA4ZSZwD9jLtud3zjf79qAU6Y",
  "key4": "5WFV18y8Ayy5xPeupKnrLR5Ld1hjuAP6wosqWU1iJUDaooSzHrbnoNtjxm1kgrcFnnuYMZpqy7aK3urdxdvXWuXA",
  "key5": "5cNbtTSpFCLZJFWKLBE5ms8PDeAr7xNS2jGxAVxten3XYHmWQvbJ9pL6japppskw8EBcUZM8QTwg2fgSg5cVXP4y",
  "key6": "mR8tXAvaTMRpyJH5kuw42CfZhRocmPZwjCZ2KQrty5Yu4HUKiSEzUBYYHUEKE3e7WH2E85gAVkViGj2XeNvw8to",
  "key7": "2D1vEA1Xe2WPGsj63cZQqFm8WeB5cZvxRJq3uwLELZcEUqaynLcCikgBGdE8NpLhAKNDwJPrwgiGN8ECxhoh9x76",
  "key8": "2JqC7mjuo5LJyih5GbTU1bD5aZCXfeNyoJTA1c81MFS9dYzJgasem6NftQMBR5wuHSdfDTMEe4YawtQq2VMfKFwf",
  "key9": "2QZ69yuKZtsDje2oSn9MfJjrvdSRi1xupjyrjPZ1SDYL2TeuD5YUkGnf26vmTpbYCtuL8KkwCpRTr35fbJHgSGhS",
  "key10": "59UkaWv6a7QfVk9pBnb3s2YZVQQXys6AcP56r67VjdFiyK8yfgHYd4HWdNDocuXjzW17tnMqseowLRaVqrGbxGrG",
  "key11": "56vPU1tphZZmy6HmDA7mBpMnQg49QxVk6B45WHKm5gWnku3WiVzHBUbbkyTFrpPeFQNuHt1spsjNvDCUQv7DG9zk",
  "key12": "5xrByAFgmZJnF9bRmXxXnFgKNjonaweU5JGd5iUzN5YuTDgUsypZP4cg6RDsEsWk3uHM6NqKL8uabFWgJckuUAn3",
  "key13": "2cBB5XsYEvWj4p8RBdKxKYJg5mqt8c45fzdkisN6cRqegvCBfVFF7dTGBjQ8wzE2Xv2yJufRtvr1hfVgjMzwY64P",
  "key14": "3zBiCmcYyxvv5hmtnGSBqToxhrS3drXTybBzRD96X66UXsgrCGQztgvEKYGZK8QngAtvumb8dbCLkwAzYzfD3PuT",
  "key15": "3XBniTi7ZBZLZAWkUkVsNzVc7CLfT1zcqMtt1akVrYZV8tG1FgMqaXdQdviMYkixoaqGeHGxmFqqLnEEX8E5kK8s",
  "key16": "5YkVMheFvYdRXedEF4wtyTQ25tzHaKwxLkKpmJmxBPDdogB2pp9tGWwMncpmfbiuhthbtb6ivewc5EXXKHbvdTaZ",
  "key17": "3DUy4a3GiCAaQyuxnvwmX6aUzVdmkA1Y5Mun8vKS9SwUPrMFwwa7chHzWJBPQ85SBQ2N2auFFbHwhELvKBng2SVG",
  "key18": "3W9QSo2UYnw3G1qZNr3oybQQRMwigL9EA1CnVCc3SNqzPxZzhbowRHZDTUNaDEg22fFAqEcmShRzctbqcc8t9Bqm",
  "key19": "2HxHcff7n41dBp6F7DAB3pRJgT3mcbjs5xZC23ibvn5RPtNKEYCphVEso4ofJuRQoQrtVSi39YiKrNFYDS4Utccy",
  "key20": "4bBbN6qfivLEHhBRsaxjV5rMnjKpwCAMFw6tigUw7vWyCz9FKPApaZcivNK1qyjM5URX3Ws6iyBGCPt74RmkGJYP",
  "key21": "5kEyzkwoGH9Np3aHSVbhxVeZ4d7tdk4MXwkZcXiJdTK15V7W36zKqgnUBRdqmewY7V39eG1fao449pXfSqLUdxKS",
  "key22": "3pjWky5YtfZYYLyVbGGXsEWw1RskdAAGmuTkufMBCTHBHWt5RjfDxvBkxiYhMg1dV5ikYYzqqoLRAFp8E63H85Vq",
  "key23": "29fPngi4AwBgrS8iLvEygDCvfZFqv1ysnQA7NrpKtD38Qqm7oLDCdMExz4evi2XqfPCHDSqdvsD5V95KGWscNcuM",
  "key24": "2sEXSbUJRp38KVMQC2h3J1FqddWkvV3iUgsEewV7msz7ypDdmH1Pm3DZ2MGkcUsp2NLRDPTYerQQwRGFTDHPuots",
  "key25": "5tXrvYRo4ovNdWtKPWDdUWXzrdVEpVRi7vmKCNWu7G36MpGPGJnW2hbGYAwN2Vp9FVRCPJ5J92FyyTam9qL9h87T",
  "key26": "xa99SHBa8QH2kHA9TzEGzA6ZNDwMXBiKoEMKtJ7mEpRnVSYynhGXDfA8RG12ZuxLixYcd2pQoYaj8bWKHRwE7SG",
  "key27": "5QEocokfu3Zm6JKSC7R5JgiWJ98PDgnHB6cJ9mJjycfchDW9eXhg3vxHMsDzY1qPZ47pn2L8V8xFisHZNcyxJfof",
  "key28": "3YfRAuHMDoYH9LZLXCttR1b4iWfNh8N1WauC77WsXwVda7YpUxzXPMH7AsQ67Na5FAr5r8AfnzLLN9hNxXukDfGx",
  "key29": "62eyqD8aqoUSndfQcd2t4qJzZpGoCEhXkfLV8P413VNitDx5SgpxYkyjVASNjPL6uAtNejRPcnJ4y2P4G4ocohPd",
  "key30": "66b5ut6HuKnyktQFS77ndRWUVgdxirody8gkPRcLeGFYfbvH5GkXWTxhvhERbKbgLuk89QeoBL99vdezgCsLcMvJ",
  "key31": "3a44N2oGg4teQwZmDWUsfUdsRmV8XxeF7zAJGW4NMhRiEpbqeE8u4zN8qw3HWoiGxA29Z33VnB2cxQj2JYU736kR",
  "key32": "4tr7UrzuA31vLrNnamC1Ya5oGieNvVaTHiv3piRNahhx6ztZAFhjSxYcGM7tNcom3jwKREaxsCPzXpAisSm9f5MS",
  "key33": "2NdnP92cg8RK3mhnSoN1ZehS7yAuMxrzmZKJx8EWKbWhHVD8xg3rdZCE4bgn5cAxUywcLuZCumYD2QhbAGzAKW1S",
  "key34": "3ciMEiSH69FE1Ry1zuf8vDwTJJRDqhL8pZ2Kkz29HNAh9DM6v7p9Tnu3tSF25cVSEbsxfg4k8h2bLvTKCtECikQG",
  "key35": "64g8k2koMRiX16g1AdEkqRT62K8VVYfKd1pg35RCUt4Wn4NTvBnqtg4bT2VJPxLXLDKj9xv3JAqoqGwzSBUKLx8w",
  "key36": "3f6vNkgwjgTESgwsff5kD1CJEEHndrxDRnMQTfdN58DNQxamNahbd3nKzwoHqKgVydfXQXzazY3QoEvwc6GA42Xg",
  "key37": "3PPEJs1CxS5YoFoAQNtdTsBCEi3XEyfFPj7QJBTkNAWyUcDWBzWRMDiCDCZ2H4Cnisp3LRqZro2uEBpGXKkD9tuC",
  "key38": "63xmmq5Bay2fBzgH3pK5eCthWFFmNajkhJqAWx82DqTJNkcAWoL4rnGEox5r7prv4z1Vtubc7jAXtkHD7uAPG944",
  "key39": "2H2hLE8TvM4LEzqJ1dtkkEtdReU9cSqXJ41Z1czBSVUn8SeWj3qCqwenmGyquTcHG92SwuJoGPcnJNin21P38yDB",
  "key40": "5GbAavbELbjgZYh2f2NLpf3Z89uwcRrscjaGhqFC5GBv3Ygqdg5dcq6dLZCsmJFv1nFNJW888XsJgMmxsjyJNhwW",
  "key41": "cH43Hyqfo1F9PKg5RuXK2tRNkK2SaJtX4pifurgxpMCnQ2TR5nUDfeSSXcErVitiLt7SP5dsxQhGLTNPAmQK9pJ"
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
