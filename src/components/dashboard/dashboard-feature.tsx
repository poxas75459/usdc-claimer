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
    "4fUe3tDNpnAC5vHm8srZMThN78YzsF6cn8xvi9hFoqvbE1iKSeUtaygw64SgyWKqXDyGQDuKUZ3KdoRScFUmBmKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEzQvubZv4hBJD3Ex92v27cAYLyRwhCzNnqrvkuaMVuHzuP22e6UUz1jNXoGFN1t4Dpj7bybXGhJFrMgPXLhbXa",
  "key1": "5rUgFTcxUSmotaLXegPFwkraemh3GaLqjV2BAjQh4C3SYEs5eXWfVBPZUpgRBrFdqJqRciNmd9wTzjyZ3u6v3Kn",
  "key2": "3G7j7WBGWgrSYr5munvYNU2JyFXiLSLY6BSX7ev8DKfZvih5A4nfq1JZzkFYWNGy4Qqbj64aT3n3M3CWd1g2TNvj",
  "key3": "avUVU7ovx8iC1iNvucvAyTc3EfEo8BTx6rKAN4VezotfedD4D3yH95a6boBYHK3DCX1SKmk74esrshZY84z3pK2",
  "key4": "3Yb8RT1xSnvyRMHWtV6zMP9f8Wx7ntAJaoEh1cHUQWPNmE2ANHB9aLtPvrMT4txSG1scnKKhGJe2AoebJ8FaCKRu",
  "key5": "34qwnrJECirXWupcBFmU8ZMPbvtM38RhCDanPxTtTwaZhqX7XYixy1QnTmf6MiBCNb6dhJMfQMupe8tF6TUHCNHh",
  "key6": "3wFcv6h6mvMV9WjiCTW8WnoL82Wo39iAUxhGYiYfTPorXFm7mn3StZ7vDj563xzNJ5KHNovRgoGpd2FanNbDKNUH",
  "key7": "58gbTJpvSfLoz7WcFrfbnJwmC6XDKmoobEALPx5M5BkZJTtqTxF1yw8ZYLaKkfNZezz2axbLrjeX8qYNdt8PYUqE",
  "key8": "3uoLFNWJnRBuqg9o65uuW9RvQuntTd8b1py6xZRVhneBAxYByvPKy5dWuZeB83jgeEurYwS9FQjNPRfG6AqZzots",
  "key9": "24ZQuC8gt4f56Tgk5SUDUqVaYE5Tb8URZG6ZLEW3d2dPbeWK4gi5rSWWjB5QPvKPCtTRb7hr9dZyaoykbnF2hhts",
  "key10": "1PfFLywxt7eHSTjhiEKgwGkm3MetMUTnXMYUKh5f9z6kFkTWmyLGYYqAB5uwY65QCcDZgxHT5hEq6vkZjdjbu3N",
  "key11": "5M3tXrFQwEHUB8arrRQVbzh3ZxZAchfMZ5GcVq6Y4HAy5pr46KpR52si87fvq2J3nBazUVpBEKwAn5z5yQUg385N",
  "key12": "2qwrxiu1UGRFJSeec7VVKYaWHvxnbWKhnZeM8zHs6ToKMeDy2uFSEMS7ifJSexdCeNkfwdvikA7TW8KTzuZUHDkY",
  "key13": "TyGvFbCvS7kU5nkuaKF8m9ob5LVA1XgUwz5cFQATArEnW7hCAjXSJjZudsfFzYdn634LCwRQnMHjvWTknUShrcz",
  "key14": "5Gi3HL7w9LZ4GARkZ6c69hkzej2bRMiVk2NFtfwoeTRPez6cr2uVXHDg1RQqXGbFeY9vJnZBgDzoM2kx47v216sb",
  "key15": "4LXr6h4vVE2XuuopGzFW2zZGHgjEUuwKxLWM1p4ZekzzJUgd1BnwTkX2rGS6rEVopZHMQPaPmww5hTJpJQ84jrYy",
  "key16": "2P2ZdmanP8uursZwS5QaHkSQuoD88CRfAAmdP4DLfcb7xQ71XZWAAiS4ZgdxM71cSbQqpm3QX7RqceW4kEtNcQsf",
  "key17": "3z1HxHcJYTwJF21Zmfb7hm4XtVGwFv43kJTcvcTN7dXcaNakS6M7yZFNsvca8kXR4kbMBjgAHBr5x3Rncsb75zQr",
  "key18": "5zebPgyy63Jc2hbzdDbijvSuW3nWcZWvCDsBMs7omZReyawNWESxnmop7eW4mbUDxFuUi3qkjhzGshPXE4YW8DHU",
  "key19": "533D5Yko3atBhY8XLHxeSqCSDUQyWqPmkjiqiecxz4bH4tdTpniQCYaNe8FTsuai4FospMN8B95cTHi5hd45P9bo",
  "key20": "5WBQgVoNhEdD3gsjt36LhHq7wnob6BehvaopxV36kWMB8cpPaGufNQfoDYDzJ9iWTWT718fzfierhx5rDdtwDWmD",
  "key21": "37WSbunx8GRckkBUVh7n9SbqUQsN5tUe2ngQ91As7XfTGigYgJywSo4HCy8rvJcYw1f2vFoywz9on7XPFDe8Z2R6",
  "key22": "5jJj5PxdXYwrqKBKUFgdWdmNUuiik3oThmwf9x4jAhQ5iTG4sAn2z5r1FArgFPgjC9joYDwpJkYULP6WHXqHz7jX",
  "key23": "5WV3sU9EHMychi9Rnsh2kMdHVyGPWR585ExhM38JeszrGLarnKF9LaAAoLYowYQv5t37ihSjr54mYAf2PbsqwBXv",
  "key24": "3PFdfeMJpefaooraYV5f2J2UQ6UkQoRhihEoRxL3ckowNenjHf2esG8dDD38rj9Dn6LxtsxiJJq5h1bNNQmSyBc",
  "key25": "4SkWbpTfaF59BMaQGtewy2sBpP46dpFN2L2GWWoZTnuXHQX3XxuGmSfsqGVfoySmPGfdPEcLsfaj3gLg1ZTNbFiz",
  "key26": "3myuzyUd4Fjz9h1k4NRuyPC3VdaeMJwyAqYDkf4K1S7o5Wx9ebLsC6Krc1GZYKhGSehZL6uHnfEotzbojYXuH3ri",
  "key27": "4FzE6xSvqrsHHDqw73u787f2oku59fxUbjpFyVX7fR6uAhZjb6mN57ZbP3MV5zGuZNqCuNtAZQRYxyr64tfQWoyZ",
  "key28": "2qY8aw9ER9HkA4JLAmRkmLusLtyyRCUFCnFt1xWH4ehpjXCNvp6Ghqd8UYsmMVJP9AygWZQXtBGtXU2S1G46n8Kt",
  "key29": "3XdcrgjPxJN2Eo64uzNKjXLmNyQxGyhUfzz27Gx37PVmSdWAFTmrYvbq87GJy39W48x9KMSjVNxS2r6raPe3xRDy",
  "key30": "3K2tZPw6Kr2T548s3wQxr1QfrnFfXJEQstFFgCjkzzBZNCgmxykwaRXfKEKeU9afky11UZpnY9WKzWdybUHTzWEy",
  "key31": "38pwkAi73C7oVgGeQUYmiNNdagsFT1cYL4igayEWRCB44pUiWPSM9jYRCVqTy9qJtAXkGfsmbyXXELUmAj34e56",
  "key32": "5MgReuYRWPQuB9Wn25pZvQMGj61218NNNXuojBZ1SHMGUW7Fu9FWE3eAnfEdNWRGostpkaiwdMaYgqAz2bGhftg8",
  "key33": "4FouL8s7VZagGLhTyjjhR4uDyykseXjyQfT1AoUHtHhWJxw9FfNF2yF1Pqj2CBuG4xyhbbA8oUEf5bm1jcB589AT",
  "key34": "3id6s4AGHJhqS7jw39MFfpuF9EyhJVvGtt6uijD43jr4E3HqZqeVnCW4qnQNMSbaFAxVk5waUfuSnz2Jgw8zhEXr",
  "key35": "2AzJLWfqx2uTDQ1zPca8wtVH76g7Xhm7Ksv6B52g6RKTPrMUnAVY464W8BA3ieWTHnWomCCRyuefGuMZpBtGz91y",
  "key36": "5BYrbBHCKTH4fsijorWXVaAreZbxEd5QJU25xSMdHHaDE9uPj4NvAnS9D4ncMmNpJKFCf2WeGKuf8ZyEWDnLm4RX",
  "key37": "rQtyDdReJBKkY8oUJxTH7sCLzwyxkzGYf2yCwSsDW7YXnpZLK49bZUghw5aPJgnsyBLkNV5bvLoLgRdtVsHK2Nb",
  "key38": "24iRwktgddHpYppKF5TKDuccDihAtyerXGZrgYukLebNXzb5TKK5W9tYxWMjtYzxVYAZwQGvCHja9JyKAXetETX9",
  "key39": "66W6ndyWk66ovt5yuXWrUBfY1Br7oUEacih4AEX1bGLBNDZVrQdRppiwKSraWuXG34uS8G7Lf3eyjo2jzWmQGwnR",
  "key40": "4VtcMX37EM2eN87K2dYQHMkzammKKCgzFLkk3zRFkeidho7pSim9Gwpqu65EqajUSyx9mcB1FD9FaM3em6oChqFK",
  "key41": "4pD8sDNWPkcidFupCG3BnM7kzLRv4wwQXdZ6QNw1jiVSi6dAs2C76mMRGKF3FMLUug6U3oLBs6TpBdnae8aieGFC",
  "key42": "4u6xdCYQu9sycurohFC1m9Dr7d74MN7aDCiZzCX4Ww1Ns3w8X5B86kcFB5qHPGWRZsJV3YHviw8Az8f8rFjHnhre",
  "key43": "Ukk6N2esTPUn17soEQoTUEDicLzn7bnhEKZFvo3j5ET1TSFY36k9RFCCuX3Bm2svXgvgx3f7pdGef5hU7gZe3zY"
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
