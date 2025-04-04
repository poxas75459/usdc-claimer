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
    "5nrZqNR1V3LgsrKg2HguxHfdxpyMSnKVvvcuknmuHangubgTRqqwKgmmZ6oykzBatxHNYi2sJzY6VU96y4QzYsoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXLa6S2LJehx2TMEy5yA3GCTyVKVgCNfH3JzTcBARd6WrMKjA69UMwhMbGVATo9Lm8JwfktZKM2Bxtrwytbqchn",
  "key1": "HKga738U1hws7gUaBNFuDgnYm8CWoXCwkMSv8kVes5oKj3eLh2rkrBwQpSXeCor8AuUZTtt46VBkDwcNPcwg9rS",
  "key2": "4yf5bcQdzDwMUMrXBzwnXTUeKN2cYicQqpszH7iGh9jFX9XMjYoXpFi9kovpowRsZyWBCR68TCtqFqkEG6zAV8Xv",
  "key3": "TRZjasP1c1c5Jp5iuTMi9NhqZA4yYoaM1TB9fC5e2Cz7vFxVR2aDjS1Py8SkPbm7WGd8f1VurJxNHymh7VWi6bY",
  "key4": "3r39nMLx3oSQN78Ef7JuiXvpq1VnD1uqsukwCvqhe5kWVoNrGEbP7P9RshZrczERLZSfxuDnW8hV58QhGbSMdpEz",
  "key5": "3axfeKYUgkr7U6Nq2iQHgphiij5hTJUbWcR4WfC4wM1FwwQLW4wbwUqq5M1qergEXEif1Y6fCPuvNzrmuPaoyjs8",
  "key6": "2ZM9hoECio1WLutgbKbVL6LLy9cbeCf4JL2dPXCz9seg5weKw6VWEwowhrpekCgJARyShiCZ3Ztnd6XNgb3d11i7",
  "key7": "5TTUeW1SWQw1wdhhfxP7DRoycp7LDEns2PRbxNn35yuwDqoeB8cumJK15ELzk5GCnCrLQ1grzQgBuX2UXJ8bSpNK",
  "key8": "5mExCkJf9dxiWdjxo6SnvJopbDVxDBxW4h8LcduzEkeoCzL4jDPTJCRwHyGFFH5aXR3HbiU3t4K7Uxys1CDiLPap",
  "key9": "4Y7x2WRYHWTYpAdpj6zLoygeCGzdkvDio2nSbCLcVbPvTn6Qpd1pm1C67haBFvfTqNHC6ddurDtdDpp3M8AJD9BV",
  "key10": "5E8LNs54HXyhky8UVEh4FadwEyVwjsXto6ny1gtyNKZD87KgbJfeAvk2dFHNMu3KRRjmoCQC9WpEZh4W3BDiHuz5",
  "key11": "3jpd4yhj3AkYduMqtePZn4UoypGJ8Qt8Z3WZQkfMk7pZkJ8hck4k5ht3KHRxivcJEG3AY5MTJZ8pbvu5gNYtEJ4p",
  "key12": "2gZhjj4nPMiRMEpKV3wwN1bdGdVeo1E36XxnEaaYMaqF7x2T21KwhB4YzR2WxGYzN4KkhBSHHnLY7Fw8x4m8fysb",
  "key13": "4758YtYgdXeWQRDM8CRnXp4Q7BTYdXyCEGNHKe8AJsc6o4YKEr3MLpe93q1vcu1pycRDRXmSR44i1r4ppXLPtJEp",
  "key14": "3c7WrRMk8Cim9JYxs93YjT1iUsvdxGH3rg2rg8jpN8x81L1jmJii86fbLyVUkZ9NTdf1HsrWZ1joCQfMfkyMEHx1",
  "key15": "2oNiwgNkCJQjhNgeeHnJBJd9Wndx8MxTGk6NJwtPCsvQ9dSiLdoHEzCb4dFR3M8tSd3oZZJL8voCx6gB9TWzQc79",
  "key16": "2UwS3PG8cDK1zbdPA5aoj48ogvkkgWjZ3EqoJm5T5BNpfmeN8A9sb5eoMq4roQdeANyy7Y37sTcQyKBKzZ2NFzXQ",
  "key17": "8J2C2T4ymYbRwWYp2YjTAcUv2ebHaWqSur9uu4fZ5JMckHgRtYvKS1g8ziKG7scvYYqS7bfEqyGgGctJ5xPaGFU",
  "key18": "49BYQ4gsSHnhs9fZzipod7DD5cm2voBYyuUoZU76BaNgeCsBc3TwPE9Sibu3nPgwQJGvG9bTjxXRpjJM5nUk153m",
  "key19": "HK48XuhEQFXwM5jReaad2d84dLBHy4ayMtvtiG2PBymMgMa9UxF41FgTbVMFnkiEK68ahL8xw2md2BJbmzxRD3K",
  "key20": "T9SqJtJ563WYGZahK3NdwmwyeNHLzUmHsB6RFVk8L4GagvuTkHTGJTbg8UK7baqmSwnJW2gM9aownx64TKiUEW7",
  "key21": "3KtTS2ehArxgBm9v6CwYQgZ7Ee69AwxzZubhT2LstgQrbmUHqho8gsHM7XgiQee5Wqvzf2bac7oMuWRaGu82XEa9",
  "key22": "4QnRMAvCvDsD9PhGs2epnVpARWzn9EzCHpaAWm228S8HL8fNQXyFs5XiVWXT5Y1azL7fwF8huCG4D6KEoxariPAu",
  "key23": "3YRpuizh4b9ZxWq7RiDPfdMfFFeRQCWPBHZmNsnpxEwx8m8wwK3NtsMkSmCL5t3KqPJYTDr6ijxGt9kuEXKc1gv8",
  "key24": "3KLTAE7jqwmxw4SWYWcz1Zq2mquUA6Ng7HrhjoR2jtY1i5WxHdAZfoBhSk5UT7JyFfyh17GdHb7dcYYGNoyjdXCq",
  "key25": "5T77N972AsSNToYeta1sjbKrzLwJmxDJ36fjfYmzzhD2EdMQw8PPxwWDFt3n2BC4Te3mQCAqj4DYcMNdYq9hTXR8",
  "key26": "5jfE4zNtEhm3NhD1yD6RLkt89s6Fz5BLFqdMbKhFZARyXSFEaSCpn5pdj3ps72kBxuAKFcvdJyaW7AfMgUxkUPid",
  "key27": "etuM8wxkMLLW1B2DDtppKWnu3upX59rGfES1iV73Z2VQS5ikm3GichGiBb2P8dWu86DaDbKkMPGKrYKUg4YNHro",
  "key28": "4rqd6b7piWkLaW7fXAEbVf9Gp7iZSUUHrX9XgKSEV9znPzia2raUFwXKSExfAmyhSgkzYegkg3uFcDaSuL8QbCGV",
  "key29": "4cgnfu1XA3315iVRw895Ua3Ege1S1BPVC5RYGN16C59q6iBrdiYCE3cdZmGnwNAMocCG617f7vqK1PMAgTTKrA8P",
  "key30": "vKf53w9Q35r8cPRyoTq7FgX3QmFfqcV4awR6HRacA5p7BJiN46zYnFiF4QL3SSNASE9CxAdRvhWVagkZNkPgTo4",
  "key31": "2QPnUvt2Axm3Nkrk3pqLNNoQhgYBJEJNt4qZVJ59CH3apUnvY5AsKLosMvgkbveqZRVUtTG11kNTC3xPLQ67eZ8",
  "key32": "yExNPjpjJH4LgVMcmmg6dQDqfh7rPmtGARCsQGYF7KJ1Dcn25g3rb53Syy28f56PvoiFdaLit3xEKKf5k4YFwjx",
  "key33": "3wXEtV4Mj16r21WUBjoFPwh15xvuntoEJXwPYFmKQ5KfVc8W2eRJNmyq7ugzoNgq8ZW8B2HXiFXMbdK85CqmGpT1",
  "key34": "2Sktjf334qGPrNsLNUwbmyuAYkJhKBHd6eXHdJTR3RMumv81e2WGbCHhZVUTCvjQeWXm84oa7WLscePpvXHxm6Lw",
  "key35": "2K3gRGTdB28o21UxjLeqJ9QTr5XcgbMnghi7kpkBcAeTTvXCP9V1RrF5e1KUNxrQeN8GwWgHY4VuSLSiS3mQSqV",
  "key36": "nXDq4pcYJzg57Dj89NVqeLj3pTxnT9BsY1bxW5zZ55SfhXPznj94dAYUVbhRRiNpAMUbBwx4mc3L1hTcekRVeHq"
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
