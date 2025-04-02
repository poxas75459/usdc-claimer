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
    "4tFE2C6ud5nQLxKWLnHBt6LqYcgs1JKYmh3nNfnhiUSvgmLgeekRu7hZp5NCxgged2ZZjrn1iSNTnt4jcdAGHuaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbNKariQNW3A9XKDo4DVbTyy33LZE5FVeqQb7wnMQwDMhyrqjjnSKbfRVVDpKYR9Thq6Lo1M7MRpwXCEjCo3uL1",
  "key1": "uwjRc9zNB9gzxD9CDk5oY6SHtdMr2BucvzPFo59HQFMPeb9nrjY3mbcZMLShxnE8EctPHnwBiEfcAR8g3YrFpsJ",
  "key2": "3roiZtr9TbSJu2PayJkhU9bsqXCRu6Yan79yVJaRHPdLpxpLWEzCAontY4pUhmXaPjPthhh5ouiDGCPwLbz2nGM8",
  "key3": "3K9CmFrmFZMCNLmJWp6kjGjtnWrSUJEEexFjFmUb89z81TgL2znR7TvKraJFyQDoEk2H9ctfVw3JJp8xzQbG5kY",
  "key4": "VAdsjH1gcgebVavPc4R1HPoAhog1NysWzirwkjM1gPuuzZHC3eHfvH6LKwfXnMwoCjKxK4ds8VZ35qM3Jd9rFyo",
  "key5": "3o1bQBPbxX9kbUhGvRSoWhzWPoPNJTnougvKG81LrMqVzhV8C3FKzdy4xKELqPLhXeHhaXB2f4QFqTaZqNFSfPH7",
  "key6": "5n74UGFBMCkNAocjefoFn2rjqQ5FTeYL8DgAjpYRFmVkS25QsvJ64nYAattFTrGhVNaoAP4M2bkPmVh7ZbDY7h3d",
  "key7": "4t16vE5aDLVptReQWx3BbApFKnt5PV8eTvFxYRqnsnzupu8enVR3QMT7RnmTgd9uzwcioyEESw7qFWJzHDWAvAFv",
  "key8": "5GxZn7edqWGZyk8ama3FVxcXGj7H75XVt3uhXzvAqc9DyBW5cmzUykoci2eP9zpZNsjsc7KBqiRN4W8Wb9PEe6if",
  "key9": "4vQZGEC3TA2YzN2XqJeLXVXyYTCo76xdb6qXWWyg52LBRFemwT2uo4ekBQ3Z4LMhb2gbFiYqPqWjNeCVZeaenjWg",
  "key10": "4jR6KAJXfyk42zpUNpGjUdWZoPwrpQi5EyXwWhv41HAjdqFmsdsrrDdjkDXgF3hKAQ5gV4E41PJW2w3psgvR5zX3",
  "key11": "J6uo7tkCae3njzXXPryycrURMo1yqthGTASMdRQbunzYmFPrvD2FxphMPcApKGPByxV6zvYu9Kw2ZDS2habjFSe",
  "key12": "2Cfz3ENdQujXH9M3zRn15zCZdAKnnGe8DVi1LPzLzwMn99JS9oDU8ZagyywSmy7PdC4PSBcpxCuJHydFzkmx4zfp",
  "key13": "65rUCNbWVE98WH2XaY8CPpKUJrGbqvFKV9TiYvtU9bmsGbAPjCnrJEosjNhrBhkJuBaFzaav9P86achv7Q3BvBiK",
  "key14": "2TqmsX9Ga3bd82VN9G1BsBws8yQwPgnGKGgsv2AvcwZkWoEVUnoeDyHoBkeSGPW86nojdsfYuLg2X4dLH278yDho",
  "key15": "5wH2bkpAn5MuJPYG5DrxtQZz5U6QeNTY1s1n9LJFHBWMhhgh7vV4enAtvviqoetvkUPBeFhrW2Rv5L581EZvNveb",
  "key16": "2fqUvAecdDd1t4D6A15QuHEobeCU9NmcUyaJ9awoeAu426nZ5Uu5q7j4VoLL7QsWW15HDzxuG2P6tF1hSKYHg1GX",
  "key17": "5B8gi4F4Xednew9iRuTyseo54wRvDrydJ3nBdZ8Q6TCeh7TMVpcXa7k7UopHr5JrqsmYLmQ3TXhaj3fW99Th7LNZ",
  "key18": "4GJiLeFe89rrwE5kbqFrFFNR5w8EiWdmPXvVqyrhPBmyR4sF5SgeECJGSSsTeVQq55nwramup3tjKAdceyFFxtor",
  "key19": "3SvYJtne3YVhisYhEtDG399av7jSAjWHhZux43VwWrvDY2qm2nFBzQbPPNNK8p6feNj2N6f1ywjmd5w5n3VRY2Zh",
  "key20": "bzYF8LhBoSK4UA91MRRJAEe3Bqo6cakyici8973Wk4iAqJ65235ES9xvyyjkZFtHWxp33USRtxQdnR1YtxYMDm6",
  "key21": "3A8Xh3Uox4uci2exhCvM2Uywz7DDkJJUF6UqHBr31bMm8j6Bs89yyZztc5DF1yW6qRsNUrwBcv9pYuqjT9TVyviF",
  "key22": "2Xg5aEYwmznDVyAoEikrwC2LyskEey9oyKkmUjRWgmwAtvgqEppsxfcQwtHtUPAcWqrPEdbrGjtnA7zDGjSpQhVT",
  "key23": "2k5BsPzev4n2RcN1FxzvyCrunndAe6aLMPiqUGCbXb8Ua88pDY1ezYugg3Y9VGi5xrqgoaLYU5vnmASd73x2QjoF",
  "key24": "4QnHDSufGLkZtvXfDFF3bCpTrJ5wJhXc7gfz2nLKjzbSJ9nxccoSMEP3j7pf8Q9zKYcHRg6fpHooiCmRmMnurbMY"
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
