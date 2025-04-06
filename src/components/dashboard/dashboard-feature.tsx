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
    "2StjxLhsa5Ju4zDgdAwzn81japmLi3Ea415M32X7ZzjDD7nH1o1bVj7W4u4ZagqHQwHJ6k4kPAFJcAkCnMSZZVBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJcQ3GRbaPetNu3GLxitZKG8Ts7mAJmPdjoz57MJhiQyw8S29vyDhk9TKjjnyv3uTLHJ8oHviJkp27SSD6m7hrW",
  "key1": "5GryhmBsEYi412PMx4vCnzcBrB2KZZYcCGdyMvw1YGSDqP4VkoQtDLbNfmFw1LsQ4Vuvcf12tVfHQuH3PrbgmHXP",
  "key2": "vwVkVgegd8AiD5bw2Bh4Lxh5F511B4YkQamxbKKoH94MujhqqeockQLPmoyTXwS57zkwfmn3gAqDw4fTwjDzTGA",
  "key3": "5L4FdbdKux8mFWLQu8SZgKsqsxtjejMhu3nQuVjBarq3nxAEWGqEpXg72W8uBW4wFvpnERsUDsc8fRfA5gjz4ZNY",
  "key4": "3TJM9mMHy5h4Ufrq5AzeuGJdjfpmmgXYsF5viQ3ScH2DwSkQWGUm7h9iNrK636Tvx12ASgK127aV2WVkTci2XqoY",
  "key5": "4DNy69uv3XawbjjyLT3Lw83WQHtL2sVLchpZFDx9vmmw9kzuij4WYYNWERDeLNp1KJ7dxVaSmnTsD5dR3ewHQf3X",
  "key6": "TLXtWTtdEARSKYDSqsxw2cFvXdsoSnhTuwEFxVrUBjTCghLonDBUsVZfDaiSqGugPzdu299QXUSFaKcY8CbELaP",
  "key7": "37otzbTTTxzWofytt3wZXbHN7e1VnyXUwM9VPTw4AhHmTc8WfDRtPaXS2VKRTvvNa6kQNpossQPhiN6YrwFBdUjK",
  "key8": "Yyjh3rc7U8Lmbhu92CMwR7idr1AnJpWB6EsUFYWijw3qQ3z1HmDCuNBZsQDEikjR8JcmA33nvBARrMK35nBWyGL",
  "key9": "4aFjfrj9sjCK1nkY7JTCDpfN1SnVXMt2TDHGEMyjRR1Z2Gmy51KtyZp4g3MHT45e1g468cQGgtg7cncAbNUKHGK9",
  "key10": "3ULKWiU81Rw7wwTUt5R7dja9WoDnyubacHmXeNxRUJ8kkUzS2wLqYjifcKBPmhfGZK4zGB9FAepAgJFpjWMnnGvh",
  "key11": "4gUR3Aoeo15mSAnsVNozZiBWoDeT9qFwxMdJJCHz6hW5P3YX5oRcQF9xQH8qR42c5xShfSNCJ914C2G1X4A5mY4N",
  "key12": "23PypnYH8vu6kyKmbMQFVDPBen7w3QzmrgHBXnAvwtwVBT9NrvuQS6AUwtKULY7SLvWMKXKMAJY5jPRZLkt9Ne2o",
  "key13": "4UjFNctWVqvzurZPZechjZAyYWpECD15sV7dJZ27CiQGa326HMJGq9DYynnXwKQDmDRt2g19znmkhDB6w51mojE3",
  "key14": "57wMNNMPVCE9HBMMScxzTgWGefCsWJNNsPD3j69wHX4E4vP9gT4EZwdPL32F4EJ7vqTRBfW6YzFs37TADDr24kji",
  "key15": "5TGff2MC9UH3pbu9ZgLxPEt4eq2VQThQ268P5aayiPpni55beK7m4xhXpzrQ53XHTohq61fyntV1NKLtxpj849SW",
  "key16": "2sENVMo9TZqcoNARJof6QA2yfipj228N7ApecLNiTMJNWxHB1jTvcpjeEGU4n9wvK8TuWv8Likutt76Y2CgfGwvU",
  "key17": "51wCCbEp6uhK2HCQghBUJui7tZEJUMg3azf6SLDs5S7AiuphDCBmUqzxdr3ni4gSwCVpzRWkCzjR7JgYeHdjHSgf",
  "key18": "5RbiT8AozbG45yQM21uNGSg8hgLRXwTWZL3hu6nujDe2sv2zm6uezLCQKo3LQLZCepi79U4eEKyWbiy3X7cz4z6U",
  "key19": "HVvsfgTXJpABiGoLC2fqiJqy1Kg5FoPUFY6Z7hTc5SMCeGxGms3BJmEbT55pe4MGHa3WWq3Ra696MgxqdezJQkq",
  "key20": "27rBdjG5f9ssMjVQS4faFXDZaRtpo5B5hJudaW2AAN5pNTT3VZoQpBsHS3ftAkxJoCuG5iv783JrfsArSGqhsK4C",
  "key21": "32PnWw5ok3wAX4RC1DFP6qbgzwE5AqKAiTRTSYbCytHPYFtZ3w4TfHwdJnyR6tRAKTfhwLroG4WMJFcVjXLBeyie",
  "key22": "4S9oBKRguPdJCyZQotiDWGyHfyS93tT4Ja2gN1aRaZanFiL4C71i5MF6ZX7w5rXYJw121zb5FSJZLDV36Z9Pay4Z",
  "key23": "5bAkLZuB14jsQn1u4DNPhH2tqHAUNpooCB3KKGbyiuSjk7ELwgir8zALhPcxf9QKoZvt4GoxRgqygB3qhrSswUJ3",
  "key24": "3egEhnL9Eb3FDF8nEhyDmr5td9EirkfPZX741kafZtX426k53mvDxpLVn7yw34fV58UkCwhKUvzcwuoXFPyRadXU",
  "key25": "5wP3v1566F9oWQLg1qEkfATPfrfEFxePdM2wEx8LfftWpkTvsdCCxGx7be8S9Z2KPwgqSJEffySBou4aDwjXAx5S",
  "key26": "4JajJSpCBauSQokaSMVbFfMo8kuzMqGi6p2NErVdsDUkrSqqPcp76784x8Aw7pzRc9bESBDVUfVEefZQhvwDAf1m",
  "key27": "3frYRoLAzr7p9RVyDqhoK68qeq3Cn5jXay4vimLCc3XYAsxSR7JyUiGHSGZ876YaUh9VZkZgeKsRCeBrk5WKhsgh",
  "key28": "CAqzrrdPkkQGQM6db1GqD2daMv3S4FGn4QxhPVXkwkfuyRmjvYmZdr7UCTeJaX4jaao8gjbsrKZYEBfHzaCoeXr",
  "key29": "3KThBqLAfgJWQWnDYk9G6ixc8Cw8VfsXYE3uXcPmNwydRFWmMU4Q4H5bzicAQD3mECfQ7Rsp5zP7f5eUxyu6UMDH",
  "key30": "3ti6mnoPn9HK7kLvmdN3b4iS4RrAKnVahE9Avak65qGm5moXcqpjyjTvMnBxkznJPrYQ5dUND6gmwSeEQUiExJ14"
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
