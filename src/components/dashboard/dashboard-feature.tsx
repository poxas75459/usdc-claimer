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
    "GY3fP8ba35UcfMbVpCGKf21Cxn3cjrJeUYeXJ7u9J2a5TwxhBeys6ApxBCj14YEas8ddN43dVWBkz8zp4oHnVZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTti8gNfFcHUJdScp47Yfw635N2HbGoP9uf47aqSGH9hK1u6Yoo5r44yz9aCVcmYKvX3p6qxiSePBTdXWA1ppb5",
  "key1": "sXRCpTjRT9BwzYrwnkiZM5c7FCwTpRp2QXgE4nJ9Awb1Kq6dNtGQm59uKZpCcqiidaHxHG8QXCUo38nzWXgceVg",
  "key2": "4mb5AJDpxtXzq2FjhpNWCjUQkaUSm9UPGxo4LrqagsTb6RVCnf4sJjyY2m99SyhUn6d2tnfgFXx74hf27wK2Rzqn",
  "key3": "5RKFurdTt6DVkUz236g1jovnAi7BrHJKrZqVUcYX35BNZ4xitqnG8XmRjVchBE2Nbdkukbr9rzNa7C6jb3Vzrh8g",
  "key4": "yC74x2EULVb4osB3K3HTpsnPezQd1MMNBkSs6MKfsURFtazaUjJ6jW4p99gDFrF2xtp8uaVUfLyy8HaAHdcREUW",
  "key5": "4WD5rPFbcyJKAT1PWK3DNhzvqXkEqWkeuan9ccKmEMagEhQGPfJigKRcGusBbNHn9nouzR3sqXdvjWV6zQzQxUG4",
  "key6": "32s4eAZaSsffB9jm4jZykP73XpYGAKgYmYXXtXmCF63HkBrPwcRHou9kLGxBnzMUSe2KkJa5eftCry1J3qVAiQpv",
  "key7": "2pKjWvffQPBWug3uDf5vb3X1jXK5UpdjhSuxeamuXFHEE1cz9fzpAqcubUoknXB2emstPuAL7eFMXvxkFK2wQwu2",
  "key8": "naf8m4GaP5S42okfnRJBfzg9UnKMFB2amq1q2VuMYypDwVp7yehDag9TntPrpGkpwMKm1PLBJk6qU7kZLyHBkw9",
  "key9": "zcj9qYy4VtUeB4CcUakQodacQrxA8p2a1dWj9JjrRsbdLxakqKXx56K7X7DoyQLd9vb9xBSu1Wf58sLLHbMRyCB",
  "key10": "2r93uPgYom2AiZU3WFKVgpn6kcBNkeYa33ALA9k9gL7S9oJDsKaW6uWiuE5Wev8ySb8uLLTugpbmU1G9vdMeKieW",
  "key11": "Vc9d1mZ9gqdMqipKu992H1ErYtDFMWBvbaSqPNRKppajvfSXrrdaRdbPR6DMBVWKKt2sDbmT68x7MfeM8ebRPk7",
  "key12": "3pBjnFfjhjjsb5rXN316JrogbPGc2EqyJXpAXwPqfpMmPfmHDou3m5YByjV5rsz112cHv9kEPBEP13UbC73YQcNu",
  "key13": "315aNSejaitgECoptzHhzCQQCREChwHJ8bRoWAKuQgqV64YCVTZ2SpFK3Fv7p3JPnbcdzQiFwLbAwqrrxSmkpXjB",
  "key14": "4w6gdTJpQLreMkcCRhv7S814TEpjiJGyAgsj4VX1b1LrA1hi1g9ZTRdfED4nHiJbkCz4wFNVQFVfNkVevzaEWUUM",
  "key15": "4wxrWL4qTo1Bgu2obtLQAEw7Ckxd4nuVWdSw7QWAeyjj4XqvtvUJs1SDrjQGcNr24jGGBBESUp1LeY9QpgeLkazd",
  "key16": "5qTPYSjtjyfPQn1TVc6fV4jpsfiLnEp1DCuzQDQRP6usHxrvwrW2Q8AYwG3Gw8xbo9XmychcYuULj6wxsTDVRw5w",
  "key17": "42TYZ9mz9nkUbJjVECqj2j36ce4jpT77N3rvBMi7FT71rQw74U6A8SibewmBteEYyMG7CW4qQBLtmAX5KNhbfT5e",
  "key18": "3DPxsxEjGPiR7jeguzZLopHEAtJMHSB8EveFGmwxT8rHqq6VQgUDNQevx959V2ZhKXRo4A8dKkgZ8XrWCHyjp1Cn",
  "key19": "AAqQP2ZiJhc7671gBVmoFxC93cQZeTDPhy85q7EGN1jfQrVVYHX8beqvauwCZcdCiB1MRVY1qqKZrc7WmvTWfgB",
  "key20": "5JsBjMsYwDmpnDPXt4F84urcPxdoJMt55VJQoPMebaif4DXYunod9kBiaE6k2d2i84nnjXCr13qbtZokKczfnjxB",
  "key21": "mjc15hhparY9Y1tuCS3bZmXAyhEQF87jgJyX6tcAipDKjzwcBx2eAAWvzx1FqHnb3jVJmPr14Tzw1MY68FGqXNa",
  "key22": "64ZZnVDqrKD9JTRqhLYsgfDmLRRS4dNw9EJCeRpyDs7TrarBziT2oohxGgdjcW59hYbrRQG7Esbnk5bG4oVqPFBv",
  "key23": "3diCR9eyM9yxf6xamF7d34kjwA3mUH2nBoNgec8qxSvafcnV6bs134is6Ar6RgVoqTntJWTSKEp4WwYNmWiwAEvb",
  "key24": "2VXk9APKu9JoSTtXqmHU9PB3nvt7kkZ48W8T7bArMaXg4abZCHWofFbH4DLjwrZVwo2gM98QuwBErXCnYZnjq4CK",
  "key25": "4CQDJ7RQHMCkDS6RocF3jPtP22J6dNtm8iBBRAEWURuRg1k1omcShempB8Lx7kbzDjnFQYomwrJEzwEQp4kdKAcx",
  "key26": "2E7HuqKU5SxjFWVddJ33a9uSxfw3QhAfv6CeRpjJLawoQ1KGuaNRhAKPvKaw5sMxk4gswbQJ8tcPNFc5K3SJu8aj",
  "key27": "49FThxhMiXZQuhpPDMkFBBRtbwLgjTxGPkYhhN1RT76y4JxaYpct71x7CZg3ML6rjD4CyBsR55bVrpgxP362jY1F",
  "key28": "413Dtj1Mxh2eRnGyoQaPpAA5nqHNpm4c7igADD2ZSvMV1CVhVcWbVnLauxAjRzsjivGoCopDfGNj3mcSJK7hTaQW",
  "key29": "5cDKW1BnrxFueZqRVoTCwe9G69AsG29x744Dd8WQqed5aG7hbki6uZeVypvCMo4ksGEzhCw4J7nU7xa4L4eUDrPk",
  "key30": "2NnVP1Y5pNokhEyGUxYxzjV12tSkXwPqtSkQcu8ks8kMPPi8geLe9neTxuoHsNuDy7WBY3tv6NQbzkfWCMAZ5fCM",
  "key31": "3Rtycpp3HHzu4KLWRvvAQsvz7VmzKDXH79agsG2tHEo2RJLtRX2NmfyTNKcHVaAunyp2ha5QJ3UHvYjxLDf9mJnb"
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
