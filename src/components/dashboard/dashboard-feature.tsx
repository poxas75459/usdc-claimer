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
    "52LGoJ6Dr6xagLvSst6623Zas88bsEG8X1FLR8QnHSsDjbY31Ya3Yj4cUduW7PrSPu7TUTZEgwSKdwTwcSCi4Sgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbgvNigyjGGdxj4YWZ1LMP4ZLZqpQtx7XcuccqGbizbgfWhx6MtUGpGQx5AQErc3iEZoKFJamKNFf2xnhgCoBmA",
  "key1": "5XFxSNFcqQBbyxmPNSDBMhzjhVWxmSAFLk16q7CRWzTToSZD8RMvDe9zWNioJm3qTjLZ6mydAYQqJ76a4WvAQiX",
  "key2": "4oumtiykwCv1ge2KU6UfTnDXt7YpKQnVwZ3TcveWjLE4hgYW2MLtiKKnKyBSfTzDebzRo96m3oZ7esHzZiKf3R6h",
  "key3": "5gbG8uD1DWdopKoebArpq2UeB53RGczUfMYTKrKyNHrCceC9xTjefJbX22WxocKC6y24y7jDeKaBnZQw2U4WuKG1",
  "key4": "ZFrzUsF25f4tq9BRLrCY4EwPM8hHYSxmFT1JMn9qf78CX6X1tQfBaqBb3eXT2TuWHvC4bA9uQxfdepjGzutuxTr",
  "key5": "56Mm6u54YZHi7RxgcdpDiC3MoqwtFvVuxe61oSZMFW4iZLhTjLTGiip5yAtWBJUAyvCkmdttqg774NfxV67gdw3H",
  "key6": "26to4NbU8KhzhTfed2cimbbkuc5wW73Uw8AE6kNCkHPoW7WaFmjky4qijUYgpCeCV5FcKtU5DP5YNqGGt5dyjEam",
  "key7": "2YRgbC2HLcAbWnb52HZ4JcHSvGdgyFGtAiSGGHhjQetcVURaS7vMKyrEfd8jj6VJdgxB4bLhEdLobsC8Z5Gjy458",
  "key8": "4uK5BnN3jV1bxE9SJVwcZf5rPyuMhSJeJmpC7vEzwNVnmCBPJ7nyMfB9uuwqnTmFCjimqcGAUYgNJyKkQbY7KBCX",
  "key9": "5DuF6GxA3DKPoAcoCsY4mgZg3CReaFGbecQRxQWbQhtepnpWi4Vir8X7H2X4ZAWKYv7mT3fBQYSHWncKt6TfHzXW",
  "key10": "3av8vWn99pKAypJso5NhVToSikVf9DdEHJRFvY4Yy9xR6DjaYsejBDwdZ9N277vGsHmdYfhMD7Axk1PfAE5yd86",
  "key11": "YhFjQRCsZ8LGCQmtVnmSQ5Anmf4XhGZTA6Wu337RJXDPUf9ANvkccGAc8dccWSo7TotuGuhr3xJBZWjSt1eyyBt",
  "key12": "wRSdp4FK8BHqDXivt64oEXgims6GRX7pquf4wCXFRD8CKc2eVAT6UXoRjfBXZFbiPYXg2FVTUKTuwnJ8V6jLA4d",
  "key13": "4Gw98ShseFWcHjYWDoLgruoE9CCKRqBR3965YJnbBR9bmymnatrvfC9as9tGo1Ytg5eEQTzpWqQxsgfE95JcYJB5",
  "key14": "3urHCTwAu8SEBRAbKhcHdfY9XnVCPQ6UUst5oK19BwbVCfnUpKouMWzb1jutMs75epBScxM97aK9DoahWM22hxMm",
  "key15": "53eaLWJComeAVvreHDTftRTWTJiHsBin8GaqRcCf3HZEvAsb9kEoeDdKkk9iqXgrMY3rwj6SJG6U7Kctah5URK9h",
  "key16": "216ggxFQ7KafjFNemXY2LV1eHNq64AXavkvk7vj9RbNqRJ2zMU84sjPnepx1FpE1ctKPAyn3dq7AZuapynbVEwpb",
  "key17": "33XiuQWSeX4iXvNJNZAVhmCEpQGWLT91XkSUm56thM5bVwzg6SSX6FdMc2P2JNLNR3U6MF472FeZ3Jms1P2A7ffk",
  "key18": "2mD2FfR62zB8q4qC9JALUrQPsexWich8gjA9GLZ1wiKEdP5An7JFadc1TGdQQvxihtkoMK3dXBa2GBpKHBKCADFY",
  "key19": "1ivrEPEPFyxJ83PDwpyPME1A2nFzdx4mkEwWnrdC2AhMxjbCZb5udrZeVS9fTAchmcLWBMujAiyoD46yf8N8SkJ",
  "key20": "ZWi6VwrP8URPuvrY6eE9xMuZKQiT9aTAbYD3AgKBshhZqZAh6kbhXy8rYjkUMcSvZ8QnR9HudDGVMtgJvXtQR3j",
  "key21": "3ptr5w7qSne3KCQec12Z3Zx6QLBqx4nx2azjhApphYc1H3P1nmTR5aXxLWhRLptD8G1Qyz2Rz5yTyfD6tPxTFMwN",
  "key22": "GQMSV34sNYshYQzsGWdGtr9q1zCsbQ9p57bh45Vp2pZpE4eC6c56zvCQESYMhjHA8GqPmiW61PvJFYqSQqHd1wB",
  "key23": "3SG83cKacMhS2DEea7YP8ZifCkvx2rf493L7ZxnRt3QX7219P7j3JodHGpLtdCUt272vDR4h1imcxZaWUCEXFGK",
  "key24": "3TGhiNVz9aHo9W6vk4oQcePpPdayJsGqxv1GU36Pu7fNFsmkcjJ1gjdyDvmccAuoLQDFzGQjXha2ZkcQBoKH1pUo",
  "key25": "iqbhBsSEHhCoiPHJNQatPH9DifRsx2WoSdb9SHXxEHheRyXexUWo5ByM4kSgaFVnVMqS4ixeJUZsnMrh1MEpoFx",
  "key26": "uYBbCewXcdRBNNWKew37a5Z5FW4Tk9wW8PEQMeDodc2sFyRJu9JeRshNB6eAdCsSm8SMzJU3oEuhw4fA9agN5wj",
  "key27": "3PuydmZ87BVQBDWWhnjhqyq3FXpKTR5D3NBdTn4exkWbAzFyMgNxYsCkwEfPP8Tbo8eeQKYHKUYkuzYgp7tNp1QY",
  "key28": "5JLju26PuMUhncZhwp4ukrzTnxFE57Q9Hv9SQPRZRYRhM4DcFPD5Yr975iPxtSHEYWSkV8YHzW3myM2mrh1i3cwM",
  "key29": "wue1sL5QUVRiUU9uX2CPwdZMU5omEHhvM3stxvuq1R23DHMu9gPiAxkfRGjicxVZLn3SZPoEzZmUu4P1eMPEDen",
  "key30": "41TBRh6aqYWAegi2M5ELMB7wSo5CJBkLfCo4yDkbv3nayiaJFfFV6CjzyCPCXiNGgpKEmWA7kitPHN2ux9h5Pyft"
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
