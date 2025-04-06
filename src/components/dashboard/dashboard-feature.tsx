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
    "924SFtjVoecUSTAqxaUUeDZsJfUw6eeT6uwSVgUquksbL7Ajq1TRsskEDZFHaBZjkjm29JsWrjoynA442RHUr3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zN9tG7mCdmbjHhNKyA1v4bzPFxgqC9U7DeVVkNQHzoWwhd8vXGWX3cRzzzHPoPHmpRZKry6MP9AsWSixhLdwQp",
  "key1": "3gpJJ9wkkCDDazpaXpngo7pNUs1JTmcPxEbouiyBEXSbsuFsC49Z67cyERcCkMYz9BdM8tUubeWGhpGkq5pAf5GU",
  "key2": "3pfCjTngWQvPXQYTy5r2KwEUNDBepdRBqWG2rxtLNSE9WEfgfa4Vqg397SaCq8rycfFH1ktXL9eZ78rStGdjBUT1",
  "key3": "MXG9yRpVLdRNsobE1xXR95T5Q3LbRzv6C2qXUypM6TMStf3sBMHm2XVe3B7iMiA6ZBWLVU7X4qJsbaodfcSwefL",
  "key4": "2oq3JXm4c3B64sBYUdadXyW8J65aPZXE5qQ5JQorKmDA87qkTLpT4JhNLVPiKVFNazJJoadjkcDzwag9Mzr3Ksxt",
  "key5": "3aCfqWnLQq7LAm4D1rGNxTBsT5uSuf7Cr6EHMu8SJgEKrcUCsDAMmpGqRZdE22ifcfcqb1Mmx2gwqmNb5nmszL7X",
  "key6": "3dMuyJ2YtVZd38M2px8gMHyMaNt39LFxootA3aigcMhH6AFiZW1Pu5aV9pHXaZMEkpDecWhrLNXreG9vAGXiPq3",
  "key7": "3Zh5i6ooBXgPZpHdzgXjjGUFH9giy82AxSC9hkZQJxXHZ7NLreUf5mSNBDy15vDCZizz8DwZDzLejbDFiAvZ1CcU",
  "key8": "2bhxM9KResJQXesudzGK4Vrep5fjMBTaVNupqxVrmtmacQ2jhgNbqVm5b8TXttWVzjryRCKQ96P1S3C1zx4zEhKi",
  "key9": "3E154rQ7mHBZ3TkZRHVDdTiqYjWxb6RJw7VgzaYaTuDAVrUbyu8qijErsBVX1pt64qxZBmyh5VdikbjM32dPGEhq",
  "key10": "5jx8Ede5SrEQYkhyCXoSArruNb4KiBMLHkKYCYGNocsenoHzapf1JXvq3FP785RXZ9R8794TBPvMuYg9dHeLRk8w",
  "key11": "4AexPyBtQ8NAZouuV9oaZusDqbV9Dcag7Wm2rZ1FyCaTJWZqzKo5DNXTs9N3XBTHPtuZPUxdKditnduA5Dkpvcpa",
  "key12": "2M49eBJaxgBYVSo3Rzzre6VAHroa2xFqgtriWJSZeDc57sz76d3SeiUjLWJKNQbMgWcAS3UuiZeTvYPJkHgW2erP",
  "key13": "2L9Mn8eAJikYonZ72XL7XCdL9Egazz1He69E4J4L1W2XkDJSYE5zhTmGi6jMtyArRKj7tBtc68GgRJN2dfkuF7jX",
  "key14": "5TN27pw18Sxv5KUh8oCcSp7ZEDTVkT4xS67EBEqbBU7h4SWPhL3j6r66iTKPorzuz74UCm5rBcbaxARMoymc8kxq",
  "key15": "4cvrqj8G9xCHEzM4NCYrAbnwX1M2z5VEwjGNmSV129CiTpC1TYRPAP65Mo11PCz6Jqj28z8tx6W2X5ysASVaLTR",
  "key16": "35vUdm9PMTeebcUhxdnJscpECMkBALrRRyLMwyyS2FZab4aUjBk5Fn7oiagu5TofW29AMPaU1TZP3ScP4bRzitH3",
  "key17": "2kBSr1ni8sbgUQVebedTAGiGfR1qi2rSKTnRuwuZjzzsgjeruGaEqc2j2T936WxDWuQYeF6GTPdEGeg7rxQwpTTv",
  "key18": "X1WcowNFeFuYvgodFMtMW6qTYY35Vezd9QNncgttK1vw8JG1rY1fwk443nymAE9xfcrXgAE7oCX7jpiGp8Nzzrg",
  "key19": "5enzakBtxtCrQ2gwTitbXQggTTVWV5syYR9bLTRdozZwspv5L4fXyyitXE4t7CvrYxFxqa4zWYRgJQzNXBnW15Jr",
  "key20": "32MxunQyCBbryWaABHFu6hUjPER6AjYoQS2sweMQptYCJkYnEbA8QYF4hr4TguJAmH57FCvayQSuwsiXTdtZ5gJ4",
  "key21": "5SdwoNgmM9cBYwKTAr6xC7ohurHzyxHQRthdfHss256PnUGkxS9fqUXZvos9YpzC7PHkV5XMA3fYfrKQyJosixHV",
  "key22": "vbrKbBiJEj5xcnsCbB95Qtrrd2bYMg8oBTysK2ZXnvr3PZbooLXn2NvhwuLXmsX6f1S36DGPwUzhVSPb4NYnSLp",
  "key23": "5XQ3m86StboeozRXd264j2m2pi5mFDerMNEsE2K2LbyimPnVTWC9ZVxBQfbjwV1w4EvkXsmgFXBYT9DHzLZ7j9Mi",
  "key24": "41eCJ6NpDSFjWtk6WUAks17CND5BQfZSsa1dVjdevae1LaA8HH4AMKkJEG3puQVbG6jeaJgQBgtXMyLJhxsGmExc",
  "key25": "hvM7hEdq4yGV7ybtforZULzGhEetX8LE9pXxQLz7c8WLVcgxtWtdz1zMVXgErJ9p7mLKs4pahjcTVs2jsHaDvyr",
  "key26": "4pKBfo8gWS6HksdE5kYmaA5R39KC4bG3HKF2cHx6b8ge9c69GyVHX2D8zZ5Y6tTapN5bpEnpBMemJDK1KmS7CmZR",
  "key27": "36dJNsoWvi5BS5CwNraoBiZmy9VgbQnkQmu3cGJdqHPacPzzMuXt88ZP8PE3ipfxayFsLMEhJ1p8YqaohCEHLp7P",
  "key28": "4UxAFe8P2posexGJYvVNLvV5eaQAPmUHnCp4HB9bvoampVEk9JtBH6fmjew15E5HSgnb1TN24PsReeDhYXtaXxB9",
  "key29": "3Mi36E1DihkXk4APfcPntEAvHUXXSVtJ7x5G9Sa1CEiEbZEzSznQjPZCSFAx7uuGfSEcMpjrB6hddgRaPHh6xqKc",
  "key30": "4Fcky3myvCTmk6YfR25XGKg4pk41r1E7io6cRVcwB6iTyTQjVgQsKYkK3FyPxe2RgMrHoGTj2Pq4b3rgUSnQb4mR",
  "key31": "2sGhNePGGafYiSfr9qaGmPbUVRaBPK2AP8NPwfJ5modL8GEvVWJy2bL9d8RcXB1JsxZVDBJJUXfVmYt3eUQyAZWm",
  "key32": "4hSNmwaoNNYKcoCeYA5KeGsDcVgdEEM1UAgRnbiofXQzvw94aeLkYuKq7e7fF4VvHNBJFnuBmdvTi5h2otAeWg1u",
  "key33": "AJT4b6V8hLWeGLQYwT2VDXrvaFzok14ivWFKXefN6HS7VnevXbgttZQeLwbcdReNnYRZPUABV1TpdFpmKVER6kJ"
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
