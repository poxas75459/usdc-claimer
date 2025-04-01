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
    "2K4hoveqzt2iCjJHjsmDXLHyHaSemCPBpxqi6oi2UKnkdUY92BYWDTDpe3jdGGtn3gqw9nefVESF4FwpXc8p3PJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L2FbAe4LnYwY5y7dCGWyuR2GYVgmW1ALXj76CpoQrLjJDiPcrmPk4MUCq9rVjKF58S8v4RUa17vJLPxobwgcvW5",
  "key1": "3Bq6HyEZmyXQfdoBQtjr2aA7Z1UMzYmWY1NRfXnLYg7i1uqXFfpgzxF3YCk3cjDWQFme5RaPkJC41MfT2uYD28Xo",
  "key2": "4GsPw9NbYJTBiQ9ejWL53mGy58uApqTMLp9VWVCTBcLm4S1rGz3EiLjs4NxsB897j6YoCdQDeMBcz7zPVhUdgtPN",
  "key3": "4iJnifaS9SbRC98YNo6WK2EhyhEJ5s7Kn7NKaUchoXeQdpR2aL1a8vreuQZGKjVWkKktKxNjrPfDnPrT6sGdntW7",
  "key4": "4Rr21g9LDcVEJaDXUmKZAGVN6aLxWWY4YZ5ZHcQqrTD1nPNfbMDmfiDHDCYqANzHYbE1e4F6LEnKA5MybP9sJB2A",
  "key5": "eVsKoiCimxi7gYbZJRZgzAsT9VwrNeeCeJnU47CqnA4S3XbmFxnTfHzqzmqsBWdbqqchaacjwMfBEjg5gBHpgWa",
  "key6": "3XGSfBPTcggj1UCqffUzuzUwXaNLvNNRaTcsDSrpUSLEumLUoxKWdL4iztYeU9p9wh3WrygFLcnER4j5rYjsmaFT",
  "key7": "2aaS4carQYBemyyEEFAyEBA81rW3oZDozhmCackRaV9Vhrt8AvFp4C23p4hkJ3z6tMqeeJLRb1mnv1ngwddBwTm5",
  "key8": "xwhpZttjuPz25FpPYaFxgmh3amu8xskpXcaTHrfg3hc9TQGpCWDoDD17hd5JzvXzqkgpe8DXX31TeJLba617TxZ",
  "key9": "6KHTw91iBBa9GUj3QK1785fDJ7C5sDgxa1n3GZ66kyZ3CyDoSYjhHig9qHspjQUrJ3xSKFMznS7t3eruoWosNLX",
  "key10": "1zUrZhgvhDx7179ru5gQ4ewBEPvwYTKFm7Z5M2XjKJ5VbhcARoEHHt7Dt6xg2YSp4faKeDpg3vnWpcXg81EQShV",
  "key11": "7R45Xy1PDQHcDt6ekn7xCqLoADsgw3ZGCamtYrnJL29rJTqkqNqncmBeHT8gqoa9JgTGVtCzJREgP5LKqK88T6Y",
  "key12": "4tnPENq1wbriVf8NiMPP6dmafffG2Rvs8CmwLUX52TEZFULNjo1iQaMwERBrxKoMPvuWXr7YyMCYnmA2RuoqTm5K",
  "key13": "37SGvNKwf9WCv4Gcyp6juswxGTAbaPknRMekZyAwqcAAGgLRjYwZik9KUm488HQcUy3SCvr3xcnePJcVzautxtem",
  "key14": "4XdyKKmyqaemVVVddizPipCQWEbp1WasnbENKW6Sig7P3BvH3pxQwWNbLjgpMTGFPWx53YkCsGVskQds9jCBnHwR",
  "key15": "ZNAhMxWd13RBAjJCK5yARfv4WSKMRVG2gixKzbPt9uULFKJ5Q1CNDkWJteQ8tCT5BNffzYd3V4amvm7Jo1LdpqU",
  "key16": "BfKUcmDtineihcUrxC1rz972JgZaUdfHqnEDN2sDeFcpSdkBLXXhUpbjpZ81JAkeEXrLVpna2fck2yQkSrx9BxC",
  "key17": "gRFNPgKQeABGWiBRdZyDu3ndLrkqs9i1JDnPkoaFjntdFvbsxkqnW8MGDx1L1d4VCZoMSDsTxrWw7fjWEu9qdSF",
  "key18": "4oAc2BZWMbDCAvvy5SxBmdKZkxgGtGmu6tVutxYQhQCKCHrZKBC8aR8LKjSbsrgkj8o68yBxM7vdL6i5sKEH3xVd",
  "key19": "2ADUd1ivr1gXo4vdgyEuLSY1t27T2ocb82Av3DEMtpqsPAYhDtXk7iqDJBRPH6gWU2UcmM4BUWjYAaTjCyCLevCb",
  "key20": "2S25fGNtCnM1X9ChF29rGLyWsHd7doP7iHfLXntk6V9HWS1FnzCrAB5mJU9KJR89TDZ8c5FpEYGqUFiTgLziofaf",
  "key21": "XXmSFGCFHWjdVBSXTL7amqdTzY2gQVSSGREwnCJUkcVw7QuE9EW1kqnM84Kexcc8ais4KWk28C27hw1xUsUaTpN",
  "key22": "4EYXCDBghWNzs3yGB7dH53qJfdGxDrxDqEhmy165Rmd3RxtnF4u6W1Y2LDFpYWziJPtnpeK7f8Tjx8msctnzc8ZB",
  "key23": "YbxFsMqyxjMabVnH4G3Tviihi62Xo9XeTUAaa8L63yegCfRbVaUNqc5xyjsUKzWvmgiiX8HBm7LQ2nkqs24SmSW",
  "key24": "5nufhkWdbx3hUxxZmouPzsxn5Z2PWs83ui1opFQJFN4echdssHg4Lde5FpdkQApwCfUg3enjYcaq7PRoR7no4y4u",
  "key25": "444NYoakLrY6Md8hMiofXbgd7MT946vsEDGFgzc9SpSYNc7rWkE61uLzBRWeJCJRVSn8H6ryFtfhQaGXFawKXRAN",
  "key26": "3m3TXq2AoXQ85fYuBxVWG5aruMg5gpdepYAJxsjaPqhd14JUnW36mwyVejQ7uwktXWQCwKz2FAd3UgBGPxKHvAQt",
  "key27": "o395UVSCptFnGyG8yZ6a6H8EuPTta3HgncjsHkgWoE4F9Tqox2i4EySJtPxfuKEFPVFjYSoNga2i7vnXcFZbTTg",
  "key28": "2H3MFHfQrUACKhC69DHr8PaN1xAjteFDMFRr2R2UPAyC7xUrmPhErNHysS59Sgi4kNcWUg7FKYNSKZqyaho56egx",
  "key29": "9MMYjcqoi9ft4rUcdPjYJm6Fk35TfHtuCYTcVCczAuQeDADTNQzcQMmsBahJCMeT1rGxFxaA9zSbKaXEWVoEVkE",
  "key30": "3xUc1SJVHAbqNbzKMPcdPizXbEcVjQRSsTh58yDQvN5T3XmqdMXjiLAWCdzVw8PUGs6xnWakTUpXgb5KzVC29iVQ",
  "key31": "3dDkfr9aQB7yUqLuaHd8A3a39x1Zidgj39ExSpqrsUYZZE8qBtTz3sqKP8pcRSez6ifbbHDVfaF7Tvu22VDXrVmb",
  "key32": "36w16EYpxGmayVf5VprdtfyF5CRkaeCes2UCcwtjvH29CeWTWPWuaKvL8juXVpfY6RqoYSjJu6MwMCqVCVcfVrd9",
  "key33": "4hpeoknCqawkXAsYja5YgpHPn8wFFzq5Xrfj6jSVwNU5RqzEnWMiXV3aDBgkYb5Jnw85Y4Sidw7AyrWG9rDBu8aG",
  "key34": "32tX6MrQXxyEpUYB5qkxA6C53aUfQ7QHWaiFHi8sYTgrNvMzptGaDmZeH6NQZAL2tK4AxRcV5YDGsgFZSu2ZQJSk",
  "key35": "YjhQjANzVe6V47nxEzTieR4ePS52mFAR3WxFxE2YtY6AqSUUVXmpnLE8mGRdY5PLBpEytWaYKcZYK78ACdjGKWt",
  "key36": "2Z5Fj4i8HWY4EZ7htWnkMWXA3aNPqjnYWFwS3C1mWXZ1jBYKUt76KA1FdkzpGSeFFkdzaFqvDtBWb4aJJimYieU9",
  "key37": "2ePBxu2zgJ81XvrNU2qBDxqYzMaHFyZ2FoC84JXCcCYMFtGDtJAXTbN6eEJuS7v1kzxMgRGk45sm6ek4Cqi4HMFi",
  "key38": "3oQLp66Y99kVXxRgZznTbdic81237jEQ32w1eS2nEswg8H3xLUtZUzoJKSWnkjRFsZKJdDEo6oobsVhXkiJQ4aif",
  "key39": "28wu1rThMKBXcQnskizqk3qmdMS6QDQF2QfpioTgJZ1BoigfsyWgxXZqi849TwN6HHzjBA1FKZFso3Et3cMtCLwm",
  "key40": "2Lq5R4C6VdHV4uMSwHZzeZP9Qte4q7p5rR7Hm7gyE4wHzXhcVJVBW8pkmkxr6No3MtpShPxBwC3kncWTXCGZ6759",
  "key41": "21VCCsFPvFq8X9R6xKmhSDyBwokaddBSdB22bYewJfsDdnrTTNoz8QHajuuBQ6jbsfy7K69XRtE4SmCvY6D1nhMM"
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
