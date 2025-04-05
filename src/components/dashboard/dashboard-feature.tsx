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
    "3q8QVB4BCSBZiceAWThQ3iHdRTM4mLsSzbetpr16QTK8VANoVDwRbnFoy9ywY3BSERDBoVKVnxzYT9yVJkAjVmrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd4ZAdWDho5VVQKJ8U1DMJyvHuFHTWrAFzeeCfrQZiswgTM4CxXR3tBKptps6z9H3cXyjef4hRuyJdUxvPyBESW",
  "key1": "4yq4vfiGRX2aKUTAnXEZgXcB5iJ49Ub6PzUP1SfBAr3BdmfaKeq1AZFYczD1mBhQgWLZNjBg1VTnA6oL2G5hLDYr",
  "key2": "4oRnXTo3NTJgKpnvXBkzYLkZy7vcq8vNsw8odqkFeBEeCXKfd8H5RZ6f4DzSv5ZWAhTh4yMTyCSUVavPNCJYzTr3",
  "key3": "aBzT5VavNmSWnA1qDzJYFX1w2BV7aAPyWCrDgXQWiJEWWfBkzK1uLDfh9Ns1wxPseMhyZ1u1cLKoKZuaMh7J1hF",
  "key4": "2zUD4PgpBPwQgP6NQTStMNkyJSR8FL2czYGVEmFtsVhzhf2GMh5GRb8ybd9e6aCfqzxcGhLdwBKRpv8urqWHxSwS",
  "key5": "2EcnPNvpyB9iHxQXNf9Hw2yGxHSvpJ3YcXVEGWPtigpeyQ5cZA1ugeQYGi6i5kjENfRfFHbmuTNxRYxd7xeyxwe4",
  "key6": "4K1mdEF5ANqiZXyrYCdBQbdzf8N7U9EitYmcycUvQkRrdXfjUK3q6AgLEyQKo5kPP3V2vENvnwgJgFJomwaQx5Qo",
  "key7": "6281gegWasf1oghAivh4VWwAPCinETRgEHHvQrvVmJPYHmq8jZV7n8RMfhJmzAQhvGQ55TW1Z9MNMbRbfeHW2iKr",
  "key8": "2CHTzfrPM7Z4A9M64eF85mB5ZuYLk1JHpGPv1sRV2xV3mKspe1bYW5aPNNvMH1N14bZWMqzqXq5G3NJFKzzyMRQY",
  "key9": "3zz5LqwmHUojpKhEZzg7QE6A4kyaPSkYCkpJnf3vYLexTZ3hA9RTV27ehtby8eBNPNxcMg27BAAH2KdyFYVj3Bo4",
  "key10": "PrUXKPRUxLfaJCD1LuK1TwUHTxuovuBtTDQzEmRStWCgjKzcs1XnxipooJc5tMrvQDd1J27h8GAbBPcH3uScaBx",
  "key11": "5c3MP4qLdcZVe1n3r9D1Q9hmdj3u7esvMCejgxHQBDrBdMhpiDsPT9tP31yfPKqrdrFKK2MZqvgNYcizGuVPWPHM",
  "key12": "5AsSNdXH7ZzYiB88iTu1dKqtzhA56HdKyJAMzkpemrHKh1afjZYXpELZgfknGm1j63kxT7FtPi4vNicsewUwBaKq",
  "key13": "5sa14CbXG6BteP8ftdtScYm1vb2JCmBGP1wsteHVizoHnfFkTo82WZFdXBKkasYpEQn9Pis7hkHDvuE8AoCEW4Zw",
  "key14": "73T2LL88q6p1vMhJiHSPGsgwVptMrcVS8Zsy2nErRAie5Q39uKVumKR7kzpi2rXeEa9JAT91XRpTDrTuDD3QosS",
  "key15": "273HwVabdntpjBpWyLM5ts65BLeQjbw3kdmALBKPpiBcsZEpJgCgkZAK2SDZZAgBsXkhFMQgB67WZXeecYQzXd6i",
  "key16": "2LjSYLSyEp2CeZtDu9AEyUgFGSUS6BFvwkMnZov5NwGsrSFZu25J1A495SBYjhaKU8KFVndZi3aPuLKokaMFQ6PS",
  "key17": "662M6Eanr1C3W18ptGH7wn26XichVm6d8feB5sjkEQ72hdLJYTy89DECFK6R58vyMr4DG3GXXnB7xMCUaCan1FcF",
  "key18": "5an7om33U28hRDCSv9AHDQSMH9yShqYF3gxgB4b5rqBtsCUE3HcM7zkcSEDX3Y9XZziDj3xUSBpXUieqvwUKbzgd",
  "key19": "5HV5bVD1N2eQckkAD2XMGbv9aUVvj4FnW3D5mZZXaB6uNvTzgD9Am9dyRvqZWyYSRgEXCoB7XRR2Gan85Y2fWwmK",
  "key20": "3fmn94Msu9mKVGehUnZsWgwoWqG3tnNkMaLv89CjkhcTVDvqUXs1ZLEGNiqNXKMYDaBECWXoWxpXpHKXzs7fu2Yj",
  "key21": "44GryWAn26RpWyxkeivEpH2gAeAfanLPxEnY5iWHq9Ud3K1raN2Le967RwwzadfknBY5zs8oB4x2usmxikvbTDbT",
  "key22": "4sdiNxECs3xDsvdFP7pDdCkwTeoiJqMuGr5SULRBhA7K28BkithUyMCVRMNRBt4BWk2jngbGbC8emKKn9G9szUnh",
  "key23": "4KFLLYxBVXRGWjU5X3pn9vtAUGo2urbv6vfmF8P6zftigUvaeMHRKc2NN7RxK5RNGhrFJaFZCpYjEpup3zwDaCk",
  "key24": "CfGeCDB85epTpRqsqD3jXSUN8R4JHjjSYtoM7mVvzr1Nh7Zhi2GWQV1oVqehpccqp3S7PVJjhjZBj3CfXW15P7b",
  "key25": "2mXBYjSqyUj7pMvS2daw6mLE1RGTHjUs1Sj3HiPM3PnQJF7zPQEmGwUrJyrXAvTBA9R1gG65xNr7EofPTNJ9KQ6T",
  "key26": "3grHN7fe1RuZ7y9rcebPb4nL5y3oFZbNos1uqjQhg3bpVt8FyNkSC9zh6Y3EcSwzmE3C1p1nNYYHs3a1KcRBmmQ2",
  "key27": "2V385m6zktE5XPnRkaq2JSPF4tPFKrtAt1aX7cX2vHXq6pZ2mAaHfifSjzRSiS5c2ut6T4t8A6hgtjkPPV9rNkf4"
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
