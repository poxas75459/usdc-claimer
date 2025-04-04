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
    "XC5aVsgyMvQUhMoQSEBmR5CyqMQAmevBNPTBXB5v4ZQWjDtCho3L2eCE7234QPNuW1WRJ9r2ackqMdbYCJEzocm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytGnoYKiAMaSHVoQyM7oNAAFrUjQxy41w4wBz6T2xjvNyhXW3fLdw5bFzuj9v546ar4xgPXZ5zdM15LDak1ueQX",
  "key1": "4jSpPu185r92XrhEx6ComM23yPfVwPis3eEXsMEpYLWVrKKsLmYrQEf4h3Ph8iSzq8DEptT2z65pxcNqmXo1neMH",
  "key2": "4zaNmfRyTmH72ozjLeLPj4n3zwcQAYvAoN5sn5pNHKMo1LRhMTwCZFKBdUZsjR1MXH5CncBHvS9XTfg4tqTzKTTG",
  "key3": "4TtZfhjrYWQ381abNAN7NuVCsorBuP5b2VHsT1eb6ui6Dvz5Ge9zYZ46ryQEMZa4VUto52uT89KBHLXLsi8u8J6o",
  "key4": "5foYXsfk9Jd777TVKwvDaN4NNKXLgvLRCC66BqwgXcCYPM9KEHnF6AzCKrRLQ2DKa3dqQ37eyw4ypkQwpTNa3HUh",
  "key5": "43RnUWDfWAqvyvBQnVt51i2JCNiYt1pQM2W14CCEKTRiDSLnnrxxYo6e6jSpvJv6W3ZwEwhB2KTVyDwhXKBns2hc",
  "key6": "64iRVC2jsKr5a7XL3MxcypVtEFQq4TcuTkLthY9BJxDXpZ3vYKyhHgFARqjF2jJ8AwBVPBmG1VpMBuJ2XhSXhirS",
  "key7": "2U6aGFZ95g2oyxy4fWRxTUHvUw9odNjBvhsMP1ATYii2yQKoPQLLaY68QQVnijj8b9rquVZV27HScwjo7rcc8E9K",
  "key8": "5SWbPgcaMAHrdyA8o1oiBHsFv3tBFBsrnPbNf5Pxm2nKdXhgkmmg1JA4scz7FCXSF81Z54GDEamqzHZeEzcvWd92",
  "key9": "4cvFqvShyCTZLvSJ74mYnjZ89V8vtkpywfyFJ2j5R7A3ew6c782ch7vCXC9YNpZCtVJBUUn3T1hpqCfXaN8wvtwd",
  "key10": "4irG7s4AZ5xgzgR7dMVxviTASpBEVrUQM2ttpaiPu31xKBgxqdJxMjTpfZooodAvG5w19H1WxxQwnEd6rKj8ALyp",
  "key11": "4EywAj3dGTNcfpavqEsmPrv5W1mXn4XABh63of5n9f4ZG2s2Wndi7Txq88FMCRHK4faukAuogaGQGiUux5JUqgeb",
  "key12": "sWwpJEFgRGXASPcLC4aUrShU8oKNjP2wp3yRxHsuqq8NLxpYiV6yfpRfZmf3itFQh9Ht3PfP6q56j6NbWA1qgQh",
  "key13": "537eJ675vCMoy6aKBfj3YDKn5zW7gHa7sbPeEzfxudk6ZNCyXhxxkxeA1Yw8KVTtyM65T6QwCxETxP4924BThu8p",
  "key14": "242Lmsrqb2McjUJZ86TrXxZ24SPsBmKcxMi54AvfvDcmv4zfaUVfFgn9yfDx2baCWzPTFMjiHGYQDRpbgivBSVkH",
  "key15": "5FDubdAaqRSjR6BAHvtXR1LUQs91JF5sxQKia9PFfU9CfFZUr9fj1jEoVjZe2M5sV2o7kQHG9SGwH3NCFLh1xMAx",
  "key16": "3TVWXwh2ZJw2omvUF5wboS8y6tceD8jkGuJtNF94dNofhzj1iop5hUuD9FzTfG3neWRzDzUmGxmHEiKFY6DyMBCJ",
  "key17": "2ii5DFDFKQfqxMh43tmyG1mxUM5RENajdA7re7xzCbUUrvuWJUaNR6hQYrwwPHrxfB3M7isFKnk1LfhCcDPEu4iz",
  "key18": "4ZELsornwuunAqr4BeLQEZG9CcYWudqm4vYKb5pAQbiaja3aUBMz8suFavWwkFE1CY3uP9UCdhiLB7HS4ocPD3ng",
  "key19": "4UVWiWXfE2wbcKDYTXZGLPRyQA4RXim8w9jVUhMyCepR49QBC5pWFfGsBWcCC5v6QXCUsoeqk5G1Q1MBdbfun3jz",
  "key20": "5HDNejbCWLYo1kSgHyPuc1DbGovK8KAbudueXxYtLwbJEjcFb4Jffh6xdbPo18FK5sgkUaJ4FByYE2dgxgT6kNoi",
  "key21": "M5W4ymb1JucWEFsNfrhEtd9LLAxfMqra6xBpF6zFm9iWqrCQqcevpxdaGzJd8WA9QN27ED9iidcnKF7PH39QS66",
  "key22": "2J3QWa1fKqySAecDhA4Y8eFAvGowWWC6uv8wuNHK6iijU1ALNqiELbX74Vd4eyEhepB8VFJ8gKCYqiArLctQu1na",
  "key23": "4nRVfYns1E5cvGmCGxVhQx6GvcPj8mCHZyDYKsMrP8Jbi8a8LkyDQQWY1wXp7MHg24R92bLgTJn19DraW4zt3nbh",
  "key24": "25yyjVsvEqMwoXqz6D1HTmGJENDxRDkJP6Z2iRoDKd8rWhgrffceS4SNLKmGVra24yg8rtaT1FJab2zP1uW7mgT6",
  "key25": "5KbTRL5eXFjtRvvN1T6MBJAuQDt43Cs3jzhpgzr34AB9s4VwoFsqkpKDipZGRBjt8ersfFVtAXJhgdQEiuku4zcA",
  "key26": "39bBx7QVxepqPJ2kpAwK4kk3UzV21KQoUYCcRLgAqScLjFwEGCM8fmnHSKYaoMqjBqm52KvfSKhucEaRC6GJcrZ7",
  "key27": "bNHtFk8oVT9gcbevmjx2TpsVKwaDSHdHRSzByU3GrbRaKUNyvDba5hXGQQxeuYKhDTguzvHXtBVEAY5kXY3jsiM",
  "key28": "2FCSraRhZAier3PbZUfC4FDFWUi7V7ecB4yfz95Dn5Hy1cQxAdx7acqrjkrAg3t5pHzP3hz695ZxCTjmXQqaNcUY",
  "key29": "2B6mw1B5ikkFo5V7F3v9dfPW9MzzNmFR6jw3piE36LGtMu6YGnbMqcsugL56NfVp3v7R4pzaVfK69AmEN2UMENer",
  "key30": "4qRaRkTiQoUgZygSyz2q6bZnBDE6V4H9VzFMB8NMk8Zo7BbUs4zQkai3vSbq5NpyxSiyx7zEDf4oLnoqYcPHZusG",
  "key31": "3r9aESCd3LzNQaapVHJacbnaBnZ1FK2aGZJ7oLd6L3shQLcJFGnRKGB5CMevFBiaRUfnoE3uypwiTkHzUksdqnE4",
  "key32": "4Y1rdkGzJqgfdKeSqJJDEqvDgprQ8kLKA7Rv8HobsSLtkCRQTdi1RRfsR92Kh8U9D5tHpcNMewWRqurUMsHqHjTE",
  "key33": "2yphmfY5eSM4wMxnpvsc5pAhcqbD625zvvcgZHHZUsZfBsCw7orLLYcpvfmSj5t2pTde3BQpQihTKAMMrJPRC8Z",
  "key34": "5brEs1MfRMqSHJjckFvhrzHjsh5QTrDUxGvdhH6kdWJFPkaDqGLvSE67nGXeLiysryaghpgPYTbuFHvj4y4JgFit",
  "key35": "2anHUFfi1gVeo2QqYfYYpVNJqzcsoU6eym3RT1Day1ABtjpzk5cFt136fGvoczUgywq5zwVqyc2WxKBLnYUwnNFz",
  "key36": "2NpjFN5on98aHzgBzC92HTYEcd28NZofjss3DrfwpTQ8p79n7udhyQKHNPs919VPYAiocem2thNvzaWUmu4YLwXr",
  "key37": "Q1cqGLtG65jWgHfzDXCEhvqqkRjh8hy9ddEq5F65FC5XoL2fFBXy187x4RoT5u2QtMDcumx159TwypPouqatwnC"
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
