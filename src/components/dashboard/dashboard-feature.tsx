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
    "3wWZdZMiMnFBikJzfnBXoZXNB8P5afjv7cqc4UVjY4KEzyLjeHcpxCMQRGK91AP3EV6iVzRZutmB3expcneEE6Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2UoRK9cBuBitfviNrAqWqeWANPbJoLXaCQQVf9k766wox2GQwfCftMEoEUMR47gnAE9CjX1AWPtP5tQZBx5cE6",
  "key1": "5xN9RNV4C8kxoSixsFPvPCiym4jADzqfkypRRHgt29UiAfxrB9fWC9XfZjzf4MvfaFHF3o42Z6PfpnuX9YNnVFEi",
  "key2": "2ZYTbCQPn4MpNeKLGCfLxMcDTryzmnWxZbjqjPdeyBMU9oSX49MtHXiHCkUVw7fHm8ojVYKzeVAGwFmSbrwCUfZv",
  "key3": "37cA8nJb3XgF8cHA2JWA2CJZVkJFAwzbSXhaiBs6vNL6Jb7dcJM98TtPPEGBLEyRYpeQ6yyoBPbQV5cs4LiEtwWg",
  "key4": "3GSE4HzLwALyynKm1D1fJmTeak5CsjCnfjbEDN7FD5CRNSqvWxsUnYqAqiUQ4ysexC9adWn7oFjmJPden9Kd6ciC",
  "key5": "fiQ7j7k7qrLKQRqyyiPBPr8jGRNYuTyMJpbbHKawsMjzLsqbaXJnzCcWuziJ28dqTGa5htQVhnts56yjNt7i6TZ",
  "key6": "2LM9q8sNRNeMe7pxgmeJNcDFB1op2rt8tM7NHKvb2psd8soPBwb5GrRytwU2g1UkTgU1nCyMLFV5cSyqH1o8YZ6r",
  "key7": "4TTiXs9SyXcTezTBNrd7KJKo32DZaYessEV94MDSKS8dH28vE9WbbFY6q6w8eCyNeWcnSFB5wzr3noMH9gDiBufy",
  "key8": "kYrFkah5e1GH5YCgCAawT6omFLz8Fciob7px1Ni6fz2aDKCiD8NZxLN3hK4TwcpCTDgNRfo8epYrpCgTRrbkSAC",
  "key9": "5w2txcmGwdLoMdajYKaMMcPMRzXioKyAGgR3fiTGLoAhPVirWQw6ED5unBEeUmxGoxJ1RSA48UBLqjpQXaUwqY2c",
  "key10": "2azVabDn9tY2y7cEtp5N6y4btDZPjNUCLxJsCMSu3rvDegp2Vq2r4Gpc3UhyVwa612WHodM3jNZ15pXxtaGnEK6i",
  "key11": "3gYkkpbzCKizk6oHbg73tPsmrxEUSxsVh8wGbzQSZThGte8xfKES8U2u8NHHp1qvEHKHVhb5FLQgMmh5CnHxptq2",
  "key12": "4QdCyqjE7EtaJkcXNHa7v82etjMjbEq2MSb37YJG9jW4wRtLbTPpj3YDuSDwHbSLBbWm4xstXq1kWZAPBDNP3bXn",
  "key13": "ih4samvZTeQY4gVNhHsoVQ1R8AXWUBm5fCeaX8hfZTqViYkMk31k9jEJQ1ECkBWTAoorvyWm3WDTxhBWcGFfwCW",
  "key14": "3rFj4uGYEbCwuESBH7NphdJsroJ2ujyDMwsNEixtMmYMo6biwM2ZSc2Qu8LmHfCJ2mb4cPr8jaV6VkCSskCUygpb",
  "key15": "222ZvammQ4UTRToz7ngLMz9wU7Wddmo8C5Q4kn6Fi2LhCVzGjMb3n4ez428UKti2Jq6WDaiEksrBScnxqYQ73udT",
  "key16": "3LsprvqxsJkDqc4hY4XmEokE5goYGGoZxDa3R7ZWwXGCqGYE5a6EFoJ9nJkov1wP9rshXGrUoBmLfHBip9rQBZDY",
  "key17": "2Twzw3voP2puKPSA4fEWvNCWTvbT3GXzHnWjMwBSnNQ19cfYawSMDjVk89Zc3besYkJVMLjym2K9UDTE8Artaixt",
  "key18": "7Hw1i2CTPxz5Qmo7izkY3a63a4UyvxpmUqae7Rmm5YkaVxHU9CZbHA5g3k9LQpctVzQwunmCNrRdKmjHffCbV78",
  "key19": "5rRtw4xSULY4a3LBpuV29Et5dhzvLsqwtk1zjP6b2cqufRFQeBmQPeNmHUgzTiH7X59RV8qTLdqoLTyCunnSQzUj",
  "key20": "h7aLHFnWY4DYdqTsqUvcBvvw27T7qjZtBx6ZumaSgaJVVEnuage76QjBRG7tgDw8eyNbUeBAAHzWDtKig5Kf92n",
  "key21": "25HQNFghyqYr57KFBxkVLMMPcLMUMf1bVmLvq9xrnKQBCEGutuMSB4d8GTCNMN2TfUh8176kb9YppMormZXGpaKu",
  "key22": "4pDwt5NrDCevptZrpxi9h6hVLVNfSXcXFDbsd2Jf9TjLXd9PWL9zJmxWaQTfTEaAQJcE8Q3nH9a4yEnMikug6VHo",
  "key23": "2kWJtBCxbysUABgmwrib8UVKDmPQu98fbAgepLrX8nR3wECrzg9kAQcbRH3Gi8PXN8uRUkg9c8V6DG8YNUWeP2Db",
  "key24": "2hKvHfsFk911BTDM5kxjfe3m91ArF3vj362hsRJ29NvfwtK9WfVeLr7U2pimmTzZhzGCLh7dZQbP8yCNMzVXyHg1",
  "key25": "2auuMJaYnxcwVUfYWKxC81ErCPaBT8XedGkcFCXFSGcQBdzASZgrjTVvuhmacTr55wcRYo3SxsuPvrFsqfrQe5ZW",
  "key26": "2fr9dXsPcw5c7QSakMWmvcR1uFjqhKwVfmJu4VmYu9vTDdDJqWMdh62pBmd3D4fr9XeW5PfaiaGq2LU8oySn5xpB",
  "key27": "2LBZY2uhX5VpkEfsL5n6nugN1ipSkkVNCpcjw6GtXgxyLvnxC5dkYcBaK4VgCMv64Y68RcQfe3NWydDqmcp4ubXW",
  "key28": "3XMoGSW9vYz9o281VnBTogm8y7BkPKsaBMcmu2NXsmyRjGJN4xUAMVn2y5qvZk3fXKg72FtnbacGhAtn8uSioDUx",
  "key29": "5pLbR3J4Gx92EaWhN87TowyvbhR6xxh7uNyQzw2gETcJTZB5yFw1PrfewZqkxF7TS1CXzt7n4bM1inPNAieuV3um",
  "key30": "5hmZSy6dKN9kjPs8F8gYuczj1aNyupH6nTfr5dkGAaHD2LKwhF8BuSJR85GgznNTomU8o48Dcb3am6Mu6n6UuG3u",
  "key31": "udmraPavUvSLtBMdmw9VbV7HHRG88deWuHMtaZvFupK9G9qW44mDeBCELBKya1RqYTiczvhafk96ZU1JxBEn4LK",
  "key32": "4e1hhHjSsRw8DgQKzue7b8KBemqWq7MUZ16v1QBGSpnDAuBTn2pyKeESi5BqqvH5uZgPsZRNeZdHG75ocXNSypPR",
  "key33": "2sQoXfiVhkxebsEMGcjLziHZ7nPZ3PLnaFTiCtci9XZUTkGRQvF45LawnzFho3nimZM4ZuePbe8a6m1B2fSgvCF3"
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
