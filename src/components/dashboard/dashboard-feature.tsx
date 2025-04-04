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
    "fM8TSUhQdb4MUbWVSZchJ8yRUp6d7DaTzjzZNG6Zn3nUhGYQMCJyYruXGMYzMdwxoTt6XWTJtSnHRM8MfpjkXnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2efH2GoVWRJA2xddUAWMPV4qdz1shNDxevAxU8eu1V9C8uTxsrcmSm791M3KifZGSh5K9iDxGtHsyqMh6B9Wmht3",
  "key1": "61w5SuvwpsMrq4kqRsUA1ePe1VCCt2QN1QzuSgGmBBJEBwB58qHpbffiouHLwyiq1UwVTymttuQuGWc6RWgHG4NF",
  "key2": "4eXxxue8foZrgWbUy5Naqc9nf8RnziQN9ydXrhBaMq6Sbx59BGiZ8tnA3EFkB4gJhx6Vnujr3P4coXDT5TiDvo9T",
  "key3": "4jTVq1nCtY5gmeeR9zE6TMTG1c21CiG5N6HYz4bAPLQELntDHJ9KM9VCXXHFu8Ya2BTHRgBwTARexHSQbrD3VXvX",
  "key4": "2S5QgvpYLCgx4x5DSuQegz8vYtEcAnsGZxjjt7ZL4CZw73ezQxUtVNznMYw4fFYAzTLAS3PGN4LbHeBugAo34gqJ",
  "key5": "5nfyvJ1UE4eDm742uH7mbiGJPX5UEk7EsD1nW1uB2zSNbeLiXzdBh6xjZXaBAMWHeM3XZRgr9REqWPfWDANb7PGB",
  "key6": "5eTpgc6YMigUrCd5kxzY6h1UV7JMP31UaxmZsQYJ3MJSMvFejcEcQfM6P5rdMraFcaFZeYU6QYP4NKQR3rjS6KUp",
  "key7": "3wUxG1aS9ixdMXqisBMBgZ144JJRtmYcatWjCLhKwdfPaWjmCEzAAzRAt1tJZjWENRzS3dX5d56NYtci85Y1gxWt",
  "key8": "5DnxTdqcY9HCctFjovkYpQoViZuHZDk4VNEiTDrDbBuA4yPN1CKB6F9jWoifPg883n5tBcAH6J963LEpTVoudDQA",
  "key9": "21j3EXpSU1zhKXG3zu1eMBWQeae7a3Y7pZiyLCjr4GSXJRUcDedyXbBcU8wd9HtHNEazqdpuENvZynUGtWZBodVH",
  "key10": "3p57s4zC9KsaHdfHgZaANq2ZjT6njUsQQDNfgvnuRK5tHe7KrEqXSDjVaTNnsvoJHMBoguRnVFJaU3cjUz6C6Wgn",
  "key11": "5KqWz5GUc5fENQPu1YfmEtHeGWijjfP5qy4uEHMHq3bk3iDWJvMN5EagjCCfLcqU3564QSAhn7C3uQpjP3SSA7TM",
  "key12": "62bwVWXo6fuEUeV35VNk3NL7A7rBDqjVBp9ovKysn189NJcq7KfN5ncBmCzc3fGZfU3rTHN1ED7mVA3aeEJMhJKM",
  "key13": "3Z8vjm5cgqDy2Mxbxe5oe2Qa2iGKyZtznqLVLrAeBARhZosUMshYEcx1eCWr3fFSzzvEn5dSEoqeURHQvVG5m8Vx",
  "key14": "4duE3ZBooSvwTjmkvFeS3U4V8aPkHX71n4wbv297YCK2tDY7W3mhT7zHjZ6EeQ974dCbDkeiESh7UDC7tFxFt6c",
  "key15": "3A7tushKH1AEr28A4mUXMhQASSkdyhGK7r9D7Ht2XzsrBgY5ikVb3w3z6HjppRPAfFDLgGLdUNyNMifrBfw5FtyT",
  "key16": "5VLYFA7rawrwMLk67bHLCgDm6WMRjzM2nmK1WNomppeVhoouMmmgMbFvHNzZ4NJPEkPEMTbr4ERPFVpXpWS8PdMA",
  "key17": "6185DKdA4wHphesrkgjgupqixUKvjy8XYGqJqb44dwyqFXyg4964ED581KnuDwA7wEL69a6QtPna3fn8zBQGmXT3",
  "key18": "2txXFCfXhTVrxBxAZ4TzZxMGhgvNxZkx67Tiyb1EJ4tS2dXsNSv1Fjt43M5A1xaVxgFd5b5UevDNbsRoEkpX5ofS",
  "key19": "356UyCkYHbecxz9T5aT3EJEqnfbpUCumcbQT2tVrPVwXwRS2Rh5c5VkLgQBFFM2JgwkPWbjzMu7fh8wPc3Nx4WWa",
  "key20": "4XEKoMgqUDXw5vD539wRs3BRA7cQNhLKzjU61TCfEzs94AHxeJ85aQy8Kyog9KQZkbCr3zwAXKDHL14zjifKXvNW",
  "key21": "5T2KGoGYxrjfCP8kZjeUSYWKXsPNcYG2ZNfWwzW8Hi8W8nCRTn9M4y323dkZ3TTEPHPWqKZvVSQRjTZJshpigvSt",
  "key22": "55tdRMyasrRV2NPtVZrX55RQA8Q9aXjskbJjpGd8LGbDu9Jc7Y5jMz75JLv5sVthUT16ZAUdA222RwL9SHUHvnvw",
  "key23": "4pzeNm6Ts1bqAJcwEoy7SN7QJ9sywfEx93N1Hi8rTRjZhf514B5Ze1jsjZdm1FyDKRZ6GUXhwupoKeWRWjkHLNpv",
  "key24": "3hTDdpxtsznG6QgfF6uVBzGkt2d4ZXGq2mnhhZL3Tm5FqpkEdL8DwUFJk3kz6bsm8Jz4pF5458SeC4QwSsTXJVuc",
  "key25": "2mtEsatWNahRSC3A2h6y5ZSDmaKK2VoejNqJAuMHFroD1N1vMNDUZVrpiLu8f5fWL1rnaYpKT9AYTt67X4jDLtjZ",
  "key26": "3uKRAMYws23aPpJYAsnxvcraGWRaxF6QFckFL2mjtirJfX9arZff6FpGUWR4PeVS8yNUb54btJUQAME8FTs32TQ",
  "key27": "45gZzYVeBQaKMxPDCHw7BvzWkVuY4JbUCRmtPceZ7e7CCqLNZCoFzQrRGLrZrB1rrqHbuGY15V3rjZMBAa69mfoU",
  "key28": "4cCdcunh6GFR7QBGX6UTTKJrc7VTAzX4kbjGaVeKJm3fHzBd7w368wdiZpYHSBN87Q7iXSXvRd9z961zBMmrZAUq",
  "key29": "46NQGcLV6UZa8P2tFi7hCeMWEnUeks5cfLiTHc24SAnXw9MbLfnueEfViXNYbPn6MqVhNy3aTrnGkXAeopnQhrLj",
  "key30": "32oXMpkrsCj2nwGQnssh17tw8cyKMbrxBPEF2bqjMdFjPawUSsDc2q8AAdNYFFYWxXgyZr3VzB42qJXzstf9keeJ",
  "key31": "3FtzakxqWQSuCY1t9pcCMWVqFmiQbPEGaJy34ZQUsPjWDmghjYWViZKEasE1m36uh3fw2neKbj8AefZFCHJCJzs6",
  "key32": "4ifyVmew7nzDX9hS4upS1hwNKTYJcNTSQyKLEFhSWPw3nnrH5XkNbDqgbbJw7npajqzUtXPdu6kg73W3meBpvRpn",
  "key33": "gVbaH9PHnGFpUzeMt4SQZvocDM6hKmwBrYrC1G4MWrgpR8dtyLMM36KzgEmDpBr1iKEwwSXoYPE5NTmURLpQ9gt",
  "key34": "2kjC2CHAcDR38LA7C7mhxX6jYH9VzVMxGz3jsBAWhEpeuKJL8mp7wTyJZy2bYjna4T67ENZ7Z6pKaayCYRtYFBAs",
  "key35": "MiWtTw7RjZzsCKEXsoFxjuc8GYHopjWZ8MRjDA26KES4AhE4eDCU1NW3qmxjSZToQvpLAVSSgYcz46bTDhXasgj",
  "key36": "5rEw9XWNy3kPNTG9BiDFqAPCmEM4BHujHCNNNpaFQGTgY1Yu63joe6ZGGgXzzQbtzVgk6aXAuKz2bDfSFWWRVSyV",
  "key37": "3KQDL9HwwLw9rXd3pBbE54KqkUqkw9T1MyLVWimf5RxsFcCMpyZq5xjQwiCSb8G4dkGtpY57V8SYkaugdbBm39sa",
  "key38": "3e1Qvw5MybifQzskZ4Zdv8jMP4KCD6W6DKuNqK3wFdR7qeEN5AMstph23rhhkrcZXqXQmhjQCPT35DfcUi5sKpRR",
  "key39": "34vY3aEyjaQcUcikZxbQ82MerqmyZtYyny4MVrv1NADWNuBWGpTm2zk8AbTdfpHWZLs6PuygNTygTdPeNRduYXLg",
  "key40": "3d1DK2s5qBBfSPqenVeLeVyCS7qe4zct8mLzZR7PgDgo4WHWWJfVM8EcTDjjwnCCF8qpygJ7xbeP2tYyLPZwTr7b",
  "key41": "4V29ryBA1d5CWqHAiX4v1J2duXd6hgeQZtNUnVXpVZ7mgpQTx4cewqHmruVXaYsCW5wCAZGEsNJ2H6k7WLMctQff",
  "key42": "6598qAeG7nF1LjQs61aVQo2Eq2xePq1eAzrzae6RPmRQEHXtL3sJ5w4ncCoazJpqhEGEhAGnRpLzhc5WKP62zSVj",
  "key43": "3Ab3uVAm5XF8hK1qKE6B9wob9p8CXVTdnhvP8ks6AevghXN9YLQwcssErEwfbMSQJGodCVJ5tny7CkGHpJCa4Qa8",
  "key44": "3CqhvZNWuDmfriKkwVGTNro9DaPAe4KiGsvBsG1Tf4rVvgBvjSQ9tKSxdqJgsS77w43g7YedmjB2ZCqdMtGvgH9C",
  "key45": "4ZM2WtbWMjF1HuHwCjMbzETDwtx7usBiznA8kCXdB8pZJxhGABD9YoUAh1mxibkKU3KywAgeHw7X2sUGn3WZQLKj",
  "key46": "VfTBiS8AvVPCCsLoRXtKXtUfVcukmwzoatZcgiS5xzUkKgPUUPDsg148ESAdFWdbYxRtSrkZ92MqmoLmWTy8XTa"
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
