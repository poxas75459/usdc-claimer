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
    "34FqQT7o2uT1iWqdqNBLmWk6sdDtKXSUNZkn9bb5WknovX5uETFjdYEDKeQXz8B5Wspyv6auKXb6bpModTRgsukm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFRT1Hvz3dE5i7EZuXvfRcByokejyBq3FYUNZrHxMrm3zBEDVEpZ94QqJvugojNVS8Am9xevzt3Krhn3BxmgRqL",
  "key1": "2rKEZ7j4AHvcXa6Eiw5KYErHteBftRv7viNZVKU9C7Piv8aTnr4MMNotfnFN3N3fFsRYFmECipEvQE7Knvk7qZiv",
  "key2": "3b4eQ4ydES83MZRKbK1x2jDLmGkhhwVYQ1GKmzREQP3DwqVMvm7L3P8HNApW5UD8YHA4z6762rNuoBvEJRX2eKpj",
  "key3": "2Z8eSVeuv5r4EXBHKezBDWmwvASiePT1E1qeRsCK3BrgvitzsKjMg56Hf8yqJENuhztzbhwefWhprg8kRJHkSD5k",
  "key4": "3rUMCWcMnHxR913J3SWdaE8YBkiFmvg4pRS9wAeVA4CQgBUsgnZR69RgkftCQzFfQvNqYUYaJjTc4s5R4Yx8NESE",
  "key5": "4fPrw9xEiyGLwJezeoit2LUAbX921bwxBpib1L2DA2zJ7vN3pEZyZpFCEtCUi12FB1CDTZUu1Rs7imCmhFRqNuzy",
  "key6": "3Y5AVPycf8W721aRgapH1p2i4AhB5CEYrFB1UC4wdeSgXNhqkqjGe7eZ5WhTSL8UR4UZvgxZV4jL6gY9VdFefttR",
  "key7": "39swcUip14dMQkjER15qdH8GKek2oG7jFHhfLtiEru2WFWzf6ZUTuv55rcWvpfZhAt55BZJAFhY1988qRpEQWg2w",
  "key8": "5wpG4P2phpNWQ3hDXzLbE22j7iSut7Y6fKextjwDonqgT71HvQ6QbwEiQdJts15eJKjK2wJXAZdHu9T4G1QE2E77",
  "key9": "3i34rsPMfuS1PjXqGvgrtTd16AMf68MLd4rnE3TbfS1r5i1BmNgmi3gX6c5JP3MPq1qbu73LMj41fijX8NFcrgP3",
  "key10": "48YxvAyE218TkfsvQRvfNVoLu2R6jcrG4ax4ZL35WrkMzJWQ4v326j4kUYLt2pkqscyiMJhsQbvsduBX96XFvWYY",
  "key11": "4fvZy14u2UPuhVhvah48LMi4ek9oCHb3rE63ammzzi6UrbwsigiDv4UWJcV63rzGFG3wBipNTVBnJrxGwFSptLsE",
  "key12": "5khacWzBrjSu9eKPkrixXwkSNxXRvZ7Y6R8Sga3RHfm4pxQAVdGgSytRGwgXQaR1fw8wVaGZHn7UKGURshUPf1MC",
  "key13": "1wSfYJKREhpubvpL3sAn1T8VxYfYMXwfkZMGhf5EGAXmmTHLuKUwjjrjXUAH5KLBBYQPChV3MLyz9X43afRw3Pr",
  "key14": "2Ve5ctVqnYndZF22kg9aQ63a4kaq4wNbpivHQ3ikfMxKp73nNTmMqCzDXKHgx6fprcH6R1SCCeC3S4dP6uvgaFYY",
  "key15": "4cpwwUxcqYnKSNS4gSWbVHpPfZbVnGchsr5ESvnVX6LVpjuCWeK1246zfWs6gjMzmmqCnrzhXLo4XiEphaULuAoB",
  "key16": "5yFtJn59Bgbexggd9dxLcGHZzXfvetkJYcp2osa5fLwMNhHxWgCcdeeR8RxrQkt8ppTojbJ1BfxNXr6RLACsWJGU",
  "key17": "2Echg7fuTRaABpZNsmuNyVW9QLi5W1VXPn1bVbKzXkCN2RpvqNZqdSKsEm43sJyiT5aKbmN1bsXCmiBb46CiLSD1",
  "key18": "29dwutHz4aJJHBof7dpFPdcAUoSCGLvj2kEASf45DTZMSE5zPCqLpDRAq7uA3rxyb67rzTdECMToifLXcrnhb89P",
  "key19": "2SnivhTnJbKSMMifmitkTR8nBbYvoX31EuqqTDbkT3ZePVzFQBczRadwzhmra3WYWXVo9hAaVKBE5CGhYhDFFSK4",
  "key20": "2u57DzPH8MYhTSTDstCm6PbD9wPvnDAh84xnse5Dfjx7HxhmMchzVXVrPppg2AgHArDVu6co6grQS2ssdXbE5Npe",
  "key21": "3bQy9eEYikgXXMyxWKty4M7eTs41AbbX1iEjcjp8ZjVvT7JnmV9zTYyAA7Bj2pCtTH9WXJ7aVE213qK1Dfjhcg4R",
  "key22": "y6x1xq62PPpwpGQW8oYej5rPRHc7rPn3QSTsbv8USLsFm7KDD1giUEbKeNfKewNwZfDZTjmucU4GkuD2k29ZqN8",
  "key23": "CfubcXVqtPd4rSyjXo5yfJ6m12veZanUGkcaGZJ4oBbsM3xF3BD1sPtQC8ALBAcXcmfHFevDbLXLzZv4beZcX4B",
  "key24": "5yRfW9CmRPyTwjhagUhfeig697HzPo7bpiX5ywE5FLRRAJsC4RFxL2PFQ68y36eJrWJtN3jzTnaqccKv3RRmMG3D",
  "key25": "51bWJZxiTMYxRqARYqEyrXPpdon2jcudi5S5tP9ZJvzynrvpsyX31d49t1jHc266UCbnAppB9BqQDGkofpYHhjzX",
  "key26": "U2582uTLT96eG7BXsxNefno9UyNJg13DPjAKNh78ZdzSHwjNgXsD89pbwqdW8AeCycTLEJb2Uy5Q34etifDBbS3",
  "key27": "3fS73Y8EZkzzMME9GsFxNcE9gvwNv7RkgzcJWebZ1ycswyDQggQwMib1S5dAkxRyAmpCULz5t62ZcDvWan1sMFKg",
  "key28": "XqVGhVSngVTY3rJxjyWhKb3uidtMzvRqDnZgPAPtR3RirLDLbA2PP8hDV15EgoM4TcccpFL2ddRb1sxrm18S8US",
  "key29": "3rS7kNUNhLLwGdMSUzrVmL3oMFUnApyefrPYZyA4LxZKAxav6zraay7uEMrdWMa39q4a9WhxtWJZ3yRnUitqErZL",
  "key30": "4vXWV8Fhuh7yYJp7NMM212kSxrDWMSAj1xDJbKmPBaNdHn6ggRsWvPLAmdxDK1Vcszouoh1PHNic7aR3tAyiyrPY",
  "key31": "2jRfL3YRmqZKB21iCTyC7hJENqpS3JxH8nJAqBSJsCvK72s4GyTk23tFnc21RWQBc1myBq2iyWKDYzzQigNVQ9vf",
  "key32": "373WeDmvEqHdqH6X6B22SAAMzT73i4J8cbfWMgaeiwcQxfn76vWVLP9hcn3d151TCLZuN9FM4jWjbuhGB6cxKtQq"
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
