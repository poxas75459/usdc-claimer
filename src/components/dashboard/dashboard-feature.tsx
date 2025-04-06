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
    "5GH51iC1mBR8kgHsuBp6azyJ8z9r4MmpocR4C1RWanHdj2eDKgP3PHCeJGoqHoMvJZ9zD7TfxEkLGC2KU9B66Bqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbK95AQNWmFpEeXSB7kStRGccvppcpCQoEqTqutxbJQ8y42Zhm3aFTr8DW4k3ANekBNa8FwtEkt7B3JvLVEa4zG",
  "key1": "47JufFVaSh9A9M5UNisNguCUWYK1v7Ggj6H3n8P3JwctnQkAuP1KxLm2qmmQb4iJm4x1fwicpKg3A3c3AsZ44993",
  "key2": "35oKZzNku8hw2ZPaS2hY7hhDKy6HV5cAAizRZDAkY7xDymXp29rBSBPDdcDw21HYoVeb5wnsuxvuqYkyhNcdfRrD",
  "key3": "2jUe5q86q8B8qRJaafKCVD9uw2hdUdwvjqDrSPBMtbYXeRDLY8DLdHadgEKY3kKFdY34smJWx2cYcfBhR23ybenD",
  "key4": "4LpqxYNmMRsGJtsnTpRKVBAcUPn2EbhJcSBRkujtbtRf26J6uWvuVzYTuEto1NYm3ZbRxLk6VGXkzN9g2fWxsszf",
  "key5": "6aQrmPNV4GD1LRA1UTiHnK71H9nEbxMpSvd57hWnWRVJw7vJScac1PNuFLa4qUmMhyPo4ELRfRm3B75oeVjTHoA",
  "key6": "5yHEPYP61HNvNE2RckUANS9shr8qKVfkeUqNNWitxwCFpt1nhQM8GY245caRwfdsFZmcW9YPHV2PZMvPL4sgHqZi",
  "key7": "4VX95pmViPdbe4Dacfo4gdWorNbd7deEyFUjRGs75hWMjfRm1ZFhSMqwLDA7JW6NPxvQAwqF7u6UtStZ1sWYpEc9",
  "key8": "3at6XYZ13999SB7GFCN2vMqiBMo8gPsGNaxpahFRL6s7tHKXHG69RPVFXEWGrLfLa6boE2YR7HcYEi6nNJGuuxnJ",
  "key9": "3tCbEpBjBi8fpSFqErxhp58NvN9nbMfwbSG3H7KVQohvY1EWqK6y3ZXRGBjFFhisG8usbyzMcmEVns1fHithfNin",
  "key10": "4QThRaTrFkQyTgfU2jeybvuHfTsU3VFFmwZ5czrrHa6xKRJdwiRfLb4zLRLjfB7dCMUUTQHZmKtj32FQyrv4tY1D",
  "key11": "3at573fGvupXAQSomy2NFgktrMfNosfLeEbJR8Sh3rWkGY5NWvRtXWr1okLwY7xuzmKUu1kxCLAtpgJbf2yBmN9Y",
  "key12": "tvoER5Z4bP4LzqPAFbPYBy8CCLh2BeRDMqyLtkU8BehmAPSdbsTvS9K6sHeojb5rwS9q7G777prEyfAirw8VKyy",
  "key13": "u9YSx154H55FYRBXg9RVGLEV5RQNiKpyF2k7Q7AJQf93vjqStPU4BvUcVdx6LEeTDM1WhFqJrgdbquqaa5qdphH",
  "key14": "3jUs5z6e846MVYBoA3j3zmiEPFV3feVHcWS2W3FrFK7kZnC4a64AgcJyrqCPiEUWQqECEuEvgnzvPx2Y2YxnCyjE",
  "key15": "447ya9UZdqywqyWZw5pQNzkgiiFPuJi6NWyoWWLqnPkJeTLebZWE5VeX1W8fxurGoWVsRoEy6egDtkhsZZYc1Aiv",
  "key16": "4sxpdBm89MTXZRdcqHdfFx775aswMGfTs4Y98BGWAHX1YiXQkSGQFMxQH7fuZRHP79bnpxvdK8cfRepn7u2q4eR2",
  "key17": "5xFboziGjxeX7A6aQuC1J4ngoCw7A9j5mhsjNDWmSet3jh2Kkqg8cmMiFRRSrbyfcEFa7nQxvtzRbvax4TbbftVm",
  "key18": "5vEjLbTFFDJoz5hze4TFq8uLZLCuGwmiWBP5At7dyHMJTfoBeWomdYt8WJV3gBTkDUFp4Auo1quFHkV3SoxnSU8M",
  "key19": "2kifekRPPsLUURrxSemizwe5LgQdi7FqR5wsb5mkTdQVX4WJ8Lr3672YRZo623gUxcnysDA8n8Zwv8mWth4dP21o",
  "key20": "5eAcNghsRmjyVMFcZc6iJdFfHGWAjnEYUqEmC7gMZN4hMHamVU1xA1CCtqdejnPWisE9AkDzQF62SDAEcs7HiAW1",
  "key21": "kWUug5NBN2UKqCiZzD5rLGvgeesERJ3qCX7cUxGhniyE1inHna3QyhnZs41zQo7LwjZLoBetRKHEaC2zdZnUmdk",
  "key22": "3wqpfkTCV6qpTaXrG7XnVrqE1UJv26aFsApoERRZ59HhcobcRWiCjbwpQh8fYzFgjjTnEmbws68nmNuCHUeARdNr",
  "key23": "39GNsv1aDKRVJKXWWrsrAHs2gxitshGeDQSSuAUGgeeMqgj2frDd9BDg9GbwtQW8tYDExkc5nK2QpgXaZSkGcjnR",
  "key24": "P8tdxGq1KZnwCxtrhPURrSTwMuEL8Arny7dHWCv88JviKvCUFtcTiN8HCjyyiBshQS5Ys6vVpTG23ccuwduJ1uH",
  "key25": "f2W2LNJ6hUnQcntvHkkeYThwkwbcW71hrUBVDFX7BQXbSwaSK65zhc9gurJ9KBRLeJbuXVTwxvydyEE853p8Fqs",
  "key26": "5CRvRwRAkvJoWM7N4X8kAcV39zGtM5efHjTKpmmc5SkmudoUXn9tt9jyuuifdPJ51i2oMx9mJtsQto8Xi3cGFzYv",
  "key27": "2Y51sj7mWJUkJWTE4FsLqVu3rck86nEC7uWTi9aWeur7GTnSognTZ538mrHS2Evwa8KgoFZRYogmcfMuqWMxC3gX",
  "key28": "4A7L2RfEVvFR7huyKMBJndY1USKWfnSPrsH7CtXX7mApAvejH41KyJHNEhUy5qouFJPmps6ifw8AXgncWG1CVx4U",
  "key29": "3iGXsbBoh8LSqEqwKR2LWxV9xnMbykDcwXJEsqS4z489VLbz9CpHpn9fzNPQS6gWamJrkxBPy3mc6AVYkEWGZCTQ",
  "key30": "8BQU8R5wjNHz9T9o2vbbfqVkapjsXnoPy5EwxxuqZe83LfCvS7PVhyg3UKc4AQPMph4PXXfHEgqZxvff8fu3svj",
  "key31": "xeRa7RY85j7Uj5EwT3gXS2QQUJASxV9xZLXSv3uYbUKi1yGRf2enDMG4F62BuNpLJa8RycfbD1ZT9PojbdUDukv",
  "key32": "3WXUt3vVx85czYjjQfkjn7yP2dLbUaUgJNcpp561yy5hzSJWNGBoZ93HKp1nBXREDZyDiLAZ8o5ja9y3j712NkQD",
  "key33": "2JfFWaUAZu5qLugUdoyVdXQ3p5y1BVn62UV5NdmPhTe5Kj2KdGuXQiRr34En53FLWwcTQi3jCKVDtn33zi4xkHBv",
  "key34": "S8hjabU1h6XiP6iSkRHixR61Bi76hR9DkCAb3PrPQhePCqtiTsx97EWdm2W8wgrdAxeaGppg21tRXyRpPaKqtZw",
  "key35": "qYfvjukTGcfHHxGSyaqcvFge3SsSY62MT9LJbq8woeZFANimiU68ZriKkQsrV4r8h41gkWdkn9y1TdKyBBc43Jq",
  "key36": "mWEp5ngLsyXoeBp4zaVtgtB1e2W9i3Uh3F1WnsP6zMzBzhum2fCLkkRXXDPQXvfMmB4TFqZ6yPVyYy8JYwneq8J",
  "key37": "69DoUCy4fgHsDtRyqeqcCsU4mXafTpXt7apNNGKTLHJBWeJdk16RNu47s9u7kdGhLNFGSKMbV6JyLFi1gYw5XnN",
  "key38": "5r5ZGQVi4cHjzpmXfhLDWdPK5BToUzwbTmLk7bKus92UN96YeXbhNttU47cidHU5WVG6xpWgGinX43sUhqTs7Qcd",
  "key39": "3FMe2V4UftT1wArx1RwdpgsXutJWTv5LbCjfPPLx45neBsTFFLFjg9PreECoQS3EzLMcZTJVHTcDgnENwgC1MX1",
  "key40": "3uhFRfFiv8svinFrRNRs1rTcgBcHm9PZ52vzpHMpj6ZvUpe7LxvpZjrVQnexZfKox21Lm8Ncx3oNRpmBrdv4B4fr"
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
