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
    "4NCrm2Si14PC4TaRFkqEJc12Hcr2Lt6BENaMz5HFowGo1ijPmv4WLAGKwmxQy4QfNMU6XS8J3HTvJCbJTWwR6CYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TcfBCStsxmPUBbSJwSKbLLZoB9DNX4rhXiwaHVLWviAtsiPoSpuMdgZJMYgHY1sxBfBWY5oNLDP7jqXwRcdW8J",
  "key1": "3isxKe88S73mx3PCmk1TKuSF8pvKLeZfcsZXr6duakb6pfR3QiHg8W45EYZc9xLYZ6TTz28L4kMaFUZGm5m9XynY",
  "key2": "4tz889adLAh4xaer1RGszhFLcmg5k5aMAcC5jvL4Bsw9Dh7ZzYMqaz2m4DGyFh3Yz5Lyv1kaPJBGcLefsRMejDSY",
  "key3": "474eoUUQz5okcNdmM38Cjrr6bY3dfMzCr1G3eABARJ8EG9b1NJto9fA8f5kN6ifP8GXBU3Gu7yZN1c9YV1B2nbp2",
  "key4": "4zWQ58gdWDasXogpvZ7KdsESC2vyhE4fivzA6W4rcEHxXVEKTUiG8JLWMbakjnueZYYBDe7kWYynP2LcFiYbpEer",
  "key5": "4bQerKc5s55TAcJg2PNC9EiJenvPgE1F9ccZrw99nNvxmtjSCNy2373PARBqvMofHB6TC38co9gTsCLMqDrKbayP",
  "key6": "2HDcTmjyexcx8TVUiPuF6tUN4C1iYHxrLsTgsM73oTNCzBVgDgFQ9FfqLbPoNnbZ7HvtVistEpFGh8kWG17PVgCt",
  "key7": "2BXzMKqArzQmkEntWLUHCagCegWYfMReaBpez6JLT7NgjUKHyZW18Cvhuhh8BfGVhXE19xUcYjyWh9Q9xYpwTt9b",
  "key8": "46AVurhoMAffmRcM8KC4mdTh4hCHSf8K7zwxdY4p4RjM8UcEYLtQQJXKqmrRBTGAK2mVSsvngcog3QCJeTJNFNru",
  "key9": "3VU5yVs8Wi3ovFM3PNK16NB1XjCQ8HQTPjuuNQfTGuiZi9PKnUYZFi5ezDS9MM7efSdwQHrCJ2RyrKjsdaaui4nY",
  "key10": "5wWuuWNoYg6diFre6AQmStdeU5Mn2xF441z1pVzGwZHZ1K9ooZ2LhubsJ8qqL6NoBiTGAJ1meMepRaBbn7KSeovh",
  "key11": "5UojWD92mvzbzKudihcrkWhtJfT8sp1mhmdoqpu3GuxnUmCyg5qSLfaVy1CP3Le8qxKc5tSdiKRNT2EY3cVM9Lmy",
  "key12": "3rF1Jy8U1GiifJrXiQYJj9Qtaxk6V31LBRvrXUpf6HNXXGS1rKjs7vYvn872y75YX4U7B65V1nPaqjifuSaigvgw",
  "key13": "5BKDQRvp9fWXYEjpGWYHB3NEYjLBfoDdFx6jyxuuSmdUsUVFJTjbVhni69QpLzCVSviomdJ873Vx8xHGHickyFR3",
  "key14": "22LWXL5d9XA7oY5nfp2cxWQ1gEU5UAffLxWj9tCkpQjUToXD971XJpGVphE5iBU6WPzmv1n7EzJJ4CCUxA2SUwsK",
  "key15": "5S9oJK6kbrNYnrnzaY2qqysQoSeqy3uzvG9XUkjTRahrbN1KRQp4ns34Mt8U8kbTC15g376WdCBsZurxWAWP8f8W",
  "key16": "33BtyCwGLu1GTaPWyBtXcZGv43TZCU29P4pHcRpCYPEcyLM78Wdf2QBGeenJ9hAs9CjjW28goBn4bYCDLpT4pxwe",
  "key17": "5t8Nh5dy5MfLui32YdXPDMMX8bY6iapszh71U6maKwMT2ZGuCGfLZa2bBLCu1fH9NRhFaKnwjswY4HirvyV7PsTt",
  "key18": "4xGFmRQ8HZJeBUMX38WX7x5i8JFZGnbDsZFFQkfHgFTpk2ChwA5cJU7SCkDbdu9mcz34BhzDWAo2XQqg9gWdSBfj",
  "key19": "3yBX8m9HpG5qmzBzqsHE3ixZu7tLR1pc6m4yL61xHv1dWfcXv6ocnraNux7oHDWZCcJx4GDSC4pm7MqWVWMay4WB",
  "key20": "2ia3TbRTLNupCpxNwpa59PWfsyaaraFqUDkgseSjYnad194j1haGByZA2VupeYXUQKUJ4xAgLBaHmMmfq87cm2Ao",
  "key21": "3gBCt63PVBq4rEfpZB6QoMnwdjYjFix3aHng4wKPj2Nu1T7CyWSoSvKqgGogTDEoqSqhYJ1VHwEQaLFwW1GhDJmY",
  "key22": "2wyhqvSxACL9Ze46EcrogbFUhvMbU6aLLBDp8xukRKJJuWvHqL4QQLqiDg5wJDUyB5SyK9Yjik56DQRwhrPq3B3t",
  "key23": "3T8sbzBkEFDR6jjGiy1nrrevSLbJbgKBZRaW3HeCiPKK353U8dSSA8qosPEewuHKwrmC43gXP1wjdQCEvECVFnJz",
  "key24": "4wMxeH7hc3nbFvxxvG2FNDRSTVsVPVDkBKAYnouU3jUNSVGWZMnYqMRJDYMQsLQNBpKpQk28LtHpxonCXrvT11hY",
  "key25": "5dtaTk2Lg5poVKr7kpZBjmPL37tB4W2dhCK6LoWkBnDQbBsD2fLEZH2rmTHfbyedUqw1GDUktivfLTH8QZSyRWYe",
  "key26": "4ZSRdkpHH2Yz5bQdR1YnhXrbChj9kLYW5GDdg1ryE91vUz73XV37xHpJifSfqAvLYYCc39uJL1LLPd2fqMC7hkL7",
  "key27": "wysYUHMMs1845RQtwqM1G9QWjdmkDDVzfj7P4W8SUMv9PGmesvsQyK39deRXKg65BjWhhAkHBEPQpL9a8fcV6Sx",
  "key28": "2kcD6vLat5zHaCbs1fxzWgckgf4AtLTJ1XyKEpCydYeWxSyBZ74iSA6rqhnwhYg2wxGectsnaiBqUaGqbwAwjPuN",
  "key29": "6VJq1iy2m1a8VBvKfu1wbY4tu16ccjS7bVf4n7o7BYhpBH2kzYxxqZzoU6fH2aCHwt47DFsoCYJQQP5gPbkNZSr",
  "key30": "64oKZF5YRBTxC9ngZY6BBhRsFJ7moSuhagh2A95CXgM47KzEVE9hSWZoZYwoPbvrPCi5pNSA92RNqncY3dFpe7hP",
  "key31": "3y9LJYdmXcaQJwdeq7xcCz5gG6sbr5Ce9E7d6HXERFszn9LkqCPAXZPs1YUiFMpo6oqxau7dQD74GW1KcCNHBnQC",
  "key32": "4gdSEuh3XQMAEesByynf4sQLcke7yxaqJg8ZxUHUmuhZGGbNkqpBeBXE1i8tZ4oMJw9nFrW7s1KF5hsvVTTfNzt",
  "key33": "2w2fykhxCq1y43ypbqdT8of1SBhSuoLhjTQDwnax3vBMQqRUsFrCf2LNS3Exh6MGjYbNoDc4nyAR7mZcyhLqqMwK",
  "key34": "5ybu6ACpGQBJQps4K3jcQZnjEKjRLYEbpbpFf7Qp44ZVoPR3UKQVKx7vGeAHj1K1rPHAZWztFFo3aXEXctUk4wy3"
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
