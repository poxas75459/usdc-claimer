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
    "5Jxfz3AsMYCx7CmEcj1ffesZhv8dfQqMQBxW7qtT1cqR5xi9mxH3Zo9szrHdTAuCGJjXKKgy6PbENxjq2ar1ManW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gnvMqkVwE8ZeEdYwy3mMR2XbhQY5USgXqDEFe6rLJd7JER897s2JBzJPvjF3Hg3nWSYohgR1oqjzy5db6UGNXd2",
  "key1": "3EcCTZL7T9FvvEZVk9wDmhb8Ezz4Zn6EQRfBXGaTGMXYXrDgUjF7C1W6m3PRe7ZTfdfTpJM4q6ykoRAoUi2JpvKC",
  "key2": "2dQ5CnapLnZXvbj7u3efSwnoFLwyxVriGYxwbv8ecoczaSzvYbAyjKMgtuctXi6zLkRedHKgQJ4HpZaCiEzm9cM4",
  "key3": "4vEiN5GmpuRwXEYyskGmCN3sB3Nav9BtEDQW5kjCKHrqBQEB9FAPa6k4PvtYpPDbjpm3uAjhmATXDDPVyg8WtxW9",
  "key4": "3Q2engLmwQoYupzMypYN2XT47CxwFWHwsWexj76cGvg3g1CGPAk3vZB5SvgBbNmdoV42cTC6ddYCsqUx9nF6BfYJ",
  "key5": "4pof1dWasiTMKxSPFa1VC9gXj6EHwR4r1QdztrMjwFGFASekFNfrhN52P5E1xQPZPxPJq7igoYNNdsCG4bxVTWzH",
  "key6": "5qrQMLDwZ9fvbPhBW7GqfDYEjUEwz9x7GMY68CrrfnVUytz6RKCkUXAfBgFfSVBug5Cj41d7vQviLT1sBNH4BWwu",
  "key7": "kDvoYzpRtwnEz5vzHJDvMsaFKjbTXTA2wKLMP9412hRFZmRoyde99c2wQvbm1f3TJEzAJzHZ1uZ3zhK8T34hCBo",
  "key8": "2Fsuji2HN5PPZxML4DA1ByXGLrtF2gnQ73S486x9A8JEeMFnUQWJPyMGcjWpP8dj5ThbyjrVYHJQEK6VScj9An5n",
  "key9": "uJ2Gm5NNHAipvEbbuWTzqseRpJYogPiATF8gkJrA3Wvi4CEfZHBEwMeABYyUKtZ7ePT67JmGJPosRPKofyy3JST",
  "key10": "3ZA3ZBaozyCXtygAWAhkNTMQPtVhnrYYfPiG3hHwXgKLW9sRT1V6snk898ToD6XhkdDAVXGz1eUBvqHFeXCTHJxM",
  "key11": "3HQVKUE4CwVdEyyibwqUhUiqKTBA1NZKe3pT3qG64XNTRCNvUytDKvSktxTk2PvG3Fmvp6eEztgr92jd6jmSqAcr",
  "key12": "39ffWXtZqYyAwJK3TjYkgErghANDjc7n1okq3bi6iFNN8VBH1YCEBBCnqScrpou5M3EN3NKub3nd9PYnpsMKLBxC",
  "key13": "63FJGnccX23FuXwQcmwanX2ZqDzqR5Ku7UjtHXmqit9ZyFyHU8fPxtvVq3uDkG5ZUU6fqYqomMXwEC6mSQHBym57",
  "key14": "2WaRB2oHBudCDi6YZtdWsaZhyYfJzPqoWfSsupfvGd1AKEkV8v9G75cHrWiftbL3DzTGiPof1r6R4yaW61kdac6m",
  "key15": "3M8i8VGEdvREBKqtEDVLKnHqqVjF3YiGJRXxEbRQwRBSm84Sk3XEn1GBGp2X4Qo3TZhYsmS2mvLBA8PU7478isMw",
  "key16": "3RJE7LNDvhy46JsDfmoSxACi8Ze8UFVR82c4XwyHeg2X1BtuFM2nsVFY3EcHnmoFwyBVGsSBcTzRHTqMNQarGHq4",
  "key17": "qAAV1gmSrdZUkUpC3ZSrZUfwhgz9fqPy5kwgKeH1xcD4abXmvRgacPEZ3yqw8RiEmxmRTavgXgs4RpP9QA6a3Kz",
  "key18": "5zyvx7TpQmziS2VLVg1K72zdxKFif8SXPwaWhzqeC4sHe7W94M4MFp3BDiJinSF5pQZjA6Nbh3GTXc9RRhpgTRdw",
  "key19": "YZ7D1QJWCP8HstakucTDQahfso3Xj6Jp5r55ABCeLH6PWUfXeBNioPnhHprPpukzXTKN7nPajdVet7QArYKf9xS",
  "key20": "3xT4HBxAxBj9dqb7cZkhNwTxHjHjdcQcM1bi6MpsNuVjUj1W2PzhwNw6D3ZnZgxwdm8vUAqESz3Bv1WNLstqWr4m",
  "key21": "3qVjAeFwodjGQRXAD4ei45KoQsYscogNz8fg1xmx9H1S5K1Y1jmK3DZabctQArQcuBLdDTYj7tn7w2S6MMfNAfg1",
  "key22": "2HttpaCwzRX2YfKmUakqRi5zp2MDmFrxFuVjMmjp1HY93zfb3wga9akSU3L1aUT5nwVfF2j4dzjJZ592AD19EArR",
  "key23": "5SpFHAkQ32xJKQw87m33L5TuwLdiLduQeMAibaeaABT6YRqHpskUh57KBD61HRpZCprqrxgt99rmthp1Hj7xDWfe",
  "key24": "465Yfxp7USbjR2mQaJ91n8jPVfhj6opZtD9Z9RZbB1obea4z8nbGDRZg3FXPnsnpY3y6mDtsZLox5meBKNCcxPVs",
  "key25": "5fZS948ob8Gk4xYYimnEvf1Pd5PNPTiqcF1biA1ojSZZHVG8X6DakkcxAvZGhmkYyPpGRTyYFdG6XvXKDFij5VAb",
  "key26": "4HNDfYiTvjfLwPPNcD8qDXLaBsuRpjQwcqd4nTeAZA9JYr9HSRZtyocSJgx2oPMnqx8vFLGtwX457gcH5yNt4TsA",
  "key27": "GRMYHj7fYgcxbQWKVRZY1NXUMLknRC3Jq2eWrvXQipFLuFhctTnP9DdqFzKf8xntsb9fmfA5JhQhhvD1bEUX16R",
  "key28": "35S1R7DwrLinwmVvpGc3Afd8YiYxVuzVsSBfsugSJqF6jdfzV3zy9Frj7ymo78R5KNFXiNkTdbwWkqMe7vYwvUkQ",
  "key29": "5oafgtNMqubLRuMhWW3gxwmRCP2PJ28917H7EbzxUYKihkRhUBhsE9WBCoW3roYkowVi9adeUWKkJmGfuuZMPygu",
  "key30": "32rUqbN6QtK9UdtumQAr6VWJMSeiaknyS1SKWdUpCCG44aUBwGmMGA4aRaUSozXk44Xo8CUWnibCrGAEwjTRFTnH",
  "key31": "2knPuW5d4vbqvmqnEL8jbENwM7oYmEUfk9f7DniYZYKCFgRbn1gffFfgj1adyLsSBmG8xVHBHDHHj6Ug8vfS52FT",
  "key32": "4aPH53fiBg9hh6gtd6ENC2kWFECNtFu6sDA6Uh3A6Pcy67Yw9BtE19tFyZ3JxwwyzorV6kUDqZVEYouq3wBm3Vir",
  "key33": "2ND6AHsahSzqAWgETEDTkWvRksTQMi8judDGoPrQZu8QxX9MmLaeSmimqe4FXYGf3ecM6MQAsyi1Pqg9DrLn1EcQ",
  "key34": "4VYx69av9CvkfTDq1n6qL7xnh4FQULQnhQ5tAX2WZ8KC81LCBAK2f5tCzFxwukE8fZU3JwsYVRtm8Aj9nhDDDPsi",
  "key35": "2hU3MNn5KuQPfJCaqTdL4hEDk9H5VkydiKC8HYtBjTFrqgrEo6V4Q8osqYsH1cRR38gvmRg8USWxc6fUyeFPKuKE",
  "key36": "4t3p93HQ8H2s92JN6Mpukwp91cM2oEDWer4Hm16dHmFwC52Xm3pWWuKakPN5MuJymMe7rWGQJwzX5yALvHpQWMVq"
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
