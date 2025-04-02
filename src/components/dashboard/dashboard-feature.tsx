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
    "5eVomjzyPFUQ3ynhSpvryCz4yjoiRt7ZgeEg5UJ4EJFMicjWEkbKxroJHCJ9Qv8fTujMqiKLWV5rToj6WFd4oaWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qchfx68fBYYXxQQoWrzvMaoJwVA6tF6xAMPzaiVfXTz7Gu2DDDFvn6wcZCbkw3LWK2DhP6FtjEsAVuatwa71Wiu",
  "key1": "4ep5nwgzUZMEUjKG8CYM3oozXH3sDCXBUr2g3pdEeFnG8jjVH3dGUiYpQJfN1s2hbixK8enC2WA1G9uNsWvw2Ej2",
  "key2": "5hfbAxXDwzc5CnKr4Yrrw8GrWqC63Fft7A7EPgvy5zPrFv3ECe9ULy7G5sCxTeZB5MuC6eEVMv62UrUoDkQGPjKS",
  "key3": "5WDhTjUkm8z9gRZLYgCmqczUffKNMxaeLARXcH2uyYYMg7d7bWJK2cpeZKpV5Hwt3cfnAZ99SLScD51MkFQqCsxD",
  "key4": "5CiBBour5WjKBjzJyzeY9DDwUVoZbevLSq1kayLw2sK9JQQY5eHGbT2tEisbcmwCMMbgm9icrHaz8UzULEK1ofgv",
  "key5": "3X5r1NUUA3myeaBikTNgL6pDjRpyVcxy1zrhQ4wBTHYV3LZ1fbmRXNMqExr6fNiZKqftciQnxaCzmHubiHSi9MoJ",
  "key6": "F8gdAo3TByJEGLuSJY6syLDUoJT4xZfkQZ4bH8HGVy1Cy6B1wRbEiFENkj7sEoKAbLNGVp3UAL5DigotrYDvTYm",
  "key7": "gDZhbPRWfkNQYQuqAyiWJpaQyUpeHuuBpmU8MouRuJrqueaK3v3vcx5GUqe9nou28RGN2rntcvNCKHqrg7sqaAc",
  "key8": "3X41PgLab1YFXBB4x7Deauq7sgcwDqq6LULg81HRHyaorPTX5Tqj9LJz1YXzhzkgy4jKSpCXxqPrtTgpHL9ByThD",
  "key9": "531VPXhfNSVi3dcmQTFBEHYxUh8Z8VZDi54BT5mAGzuumAQWhAmaQ32TtndaeKVrwwFZJnr8WpHgWax8QSHksxUd",
  "key10": "3G6cTend3DGFE5j52nKcqQKizpHvEUqDmoEA7A6BC9aPDXhuCkeynaEp4fF7daxP6Uasi67M8ti3KrBSJEDXwBEu",
  "key11": "3ry9jWLqw8Vipf3kcaTdbMcwCYJHwZLzC9J2zbJZmBud444UPNCvPoszq59KiPysaxUTnh3EfQRM4ykjNphrhuHd",
  "key12": "5ziBqKyLVFRuRD2NrUFeHMJzmSeQKKTFGh1QftmxZsy4VHNd1ncDsEJoBwV9RpK6BLJ13KLXdptTxb6ZzMfdT9f8",
  "key13": "5n2GGZLWMxmTgVDkQpC6H5juKaaCfc6rKJZraxwDS31Tiz57enCHQZZkfr1fPd9aKbsPdXfNkkdiAMPuZfYEBVji",
  "key14": "31kR5t2YQsvA3dkYew5xYVYcP2uGQ7SSpzmAtK1CGBE9iiWpe5RcaryyoRpKGMnApdMyg3LMHvFD8QKh5sfFa2qA",
  "key15": "XSp2Dy2gBWJJixWeU36BV15AuigfkbqLZyBCCw2QZjnAsPDKBAACFXyFpQohWYrVxuJTwEU4kqbGsNkBizhsv1E",
  "key16": "4vuT84wx8H6oHpwySoNSi2g6dYssXMHmbhxZvUmREXhg9c4vrv7aeobRRdL8tJdLX2BD5WXqLJ2rsNvgTNoSu5Fm",
  "key17": "67fv1eqLfDwkQNXrbeSzgBagA8YvdvSeV4kEGA2qpjbGB3V9VrdY3kKX8ibGavArg3ZhYyBDARdbEzhXCmn63eGL",
  "key18": "3W8vrpVaEGTcV1Q6DtY8yU5hw9KE2jaRhU7wRroh2KR9EDM9bbqFbuaxY9QXCv7UV7tDmu3sK98p3shjSUQdgVSy",
  "key19": "xis4vHw9h57zTVkwsZ98FC4d3MqiCAPWBqYYHDiaDnWBNgvswpcWj4xxxff5LpEi9iuhnC8sdnJGgnhJ5QnUdqL",
  "key20": "2B9rqgenKkm951PjjMSwn3YqWrEbZ3xbGnBFhCY5WxwoB1rzTjViLqrUuJFBvghfB9HavuG4w7UeUUhZTXEeTc3V",
  "key21": "4XCqJNs3Avo6ctye743dFaXCQnT1RUF25Xb3zBSYPHDrLJyEoNow8J69CQTvFSoTNHsnXCAN7yo4EgD2vcrpTsSj",
  "key22": "2CF51NDfuLJu14X3GgprP5mTpzj44a3imoaT3qCT1G3EcNnxUDUvBcMCojtvgu4rUhZUyHPhe4fZzGeThcQ9XxY6",
  "key23": "5ZxRpfdpNS9FyiuNeqdPEu62nAFZxY5VrNzo5F3TeFusn759XZAsZaukFcQt6DfdUFSNCLuTdkCeEmJWFEb6yDfC",
  "key24": "5fvHXT8UZherT8Dx942YgHJrgAEeyieq9EnEGS8HZoXXQ7YP4j2B6pvEuUY5AgFV67pS3SWr3E3sLnxkh3pVA3fh",
  "key25": "5AsD9e7t6pSRYD8c5KByhsY71xzkEKgEhcFAmdvxZikGymzNzrbgDF5JZYyMAv41ozXYMJEaSyhH9yErpdfwpjMC"
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
