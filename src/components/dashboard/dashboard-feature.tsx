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
    "2bwctk51NPaK5MgbBSjjNgN73e1bryxCyHMFDGAPF5GVFfYSM3McKTV4R47pBu1h5UTQxTSRgWLoczWmdtuvt633"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4SzKyxmzJxPKA63oJyxq4rKS2ZHXU3W6yH6RZCPy3ryDM3k4ey7B1HijAvoFtFtArDZJeUMmdLyXZShjT7H2s6",
  "key1": "3gM7gtxC8pNybxzv8H7s7uEQtgK5H2QyhWb5npFzuwmKfdC9uJwtC6Q5QPo1PCuQP98PezcHyE1GzNZYsbrFksAq",
  "key2": "2sLGaFzEXkGWoK2XPX4vPutMwjjHZN7cuwnMyrVTuUB5FWvPbSqBeC93UTJWc4wxa219vk3FnxfuWkrb4hiFZKum",
  "key3": "47V7ifzriQKu4yqm5LMQLQ8mXaSKtPQoEjx6cGYBE6cUDUhdEj7m8Z5G3ZBpoUSRshWBt34RVqEUEDwRcxqUtydf",
  "key4": "4EBdRH71Tf7vGGphNx6p45HBGrLjxEGRBD2oVXEW5qsRd2ap9NeBFR5QTKowCLUhftrfCcp7aUT6SBkK5vfNo2DM",
  "key5": "4nYDxP3aMARCacBXKfGW7spKWGN8Pi2QMpLiWxXhJ2tRfgaRLmncoMoKPNQi7h9NU6H3pxHriJZwZyBt1Kucih1Y",
  "key6": "3gGqD86SsHK89bkGzZRoBQ5pJZVANgzZrHfyHS9Cson9dppihN2MKUccxRVg4V48YMDGdmiVweiqY41Q8rbyQwWh",
  "key7": "5a8PEfuAFPdbsi8S1TAV2DrWeESQGTvmXT9WNuhpDxswp7HVq91YRKzBJRaVetUZoanQcRjUhVRAsxsSTLg9BDLD",
  "key8": "63zAhRhKiKDyKgWBaasRAnLfHn4btGfzmTiapUCChB52Z5sp9cKGRU3hsSUqxVbNC5xoxeSynFSNwH9VVSYrSVNz",
  "key9": "4UKJDTr1XjiZjLPp235aFYnagupRcuJBTiqFTS84YMDWjX5yxqAnt2ci6S2GBYqYpAm6TRRgu8ZfRwkWCzEwMzxP",
  "key10": "5H2Ci36if3nftKnogseHLY4jMYvhLa8FAGDRM61x21hmnCnJBBbo9KGxf1QnHJBQuDHHS5riUEFtNTdbkZpNnrsg",
  "key11": "ft7LWfsv9UYXWNxJ47d3WdnXxUBjfTSTYWVy7vFtnqZBP7RPZUqP1NMa5A3vrTC8wghMA1kETmzeu9jRqvrkoHZ",
  "key12": "13RSbJPM24XGwovbHjmniaqNCKvdfgcBWf4nHAJWtPDFQGBJKrnLtfdtAaQ3YMSnfDo5eG47BjASdvUYwkEqbVG",
  "key13": "wBzz2JFKgZMqErKAeHAhYtPFT6NUtx6qyEGnn1dSXqCMEdCXZdq3QXdqXmYmihFPojVHyQZBdvVR9cjy7nKZxGr",
  "key14": "2icrToYsBmsjw4tSEzSGbndFpdn46MRrCiFkwQwyCX5T88iEqLykkW1oQvG8qEurMYXN3jjBt4BbcPTRGLFjUSjJ",
  "key15": "4MRgvRigkePYAfVyxnRwjkkaJTCXeyZHiowdqRcTDdXsgBQNPeHfHqZV9wSKVyn8QWg7Q7CFKdSPWFpufG55MGGf",
  "key16": "3p2cPZ4WquHrDRkfp1Bnw8HdHqq8ep8S4PCWrpCqHfLN8hKGLioRLZdotHUEZTwKQSZ1vwvkT6fa4z7Pt54PvgBT",
  "key17": "2TwUPM41fWWRtjZSJdgB9X6292QxUctAZtYBDNrcHMXfWJ8kGCy1Tafd8vSnibavSbPFdmj3MuxW3hgkrmZC2j7Y",
  "key18": "sg4eno9cWjfqD7oSdhJstXhvkxaJBNLjgSkaEcoGR1uEbERgFXGvUhZgZs8PxgtHDre5CuqYx2Q4UeAndjE3RG8",
  "key19": "5TUw79adVLzwQ3vhwkAt6AFTo3Vh7iFKX3JXWeqi5y3kh21CDMZ84o9ret4tYwr7tK5UNQjCQF2St4YJ7mkeFgWa",
  "key20": "3fE91USinLR2V1zzHbx1XSywtv69ZjdgmyCS4GyhQdwXWAvffpvPv1W2EmKp7ZuGGCBf7gXgj15qgS3i64Pe5pkW",
  "key21": "5FASc1MVvdx9bnbvUXHJtJdXBEM6NXLTTiUafYsrRWTWEbQoA88aoAeMfs1oVLx9zfD3VfkGu9VSKo2GuDeN3Lqq",
  "key22": "4wHTeHsi3f7BDDGq2YU7osWrvfky7TpCD8Q9Ddgxp4jTi4EHfunoq14zE2qsKnVFounYLqR8dWLJGABrfRUst7QU",
  "key23": "2Lc8ykRwJMFmUzATWFuqSyJ4ccLFnXtjdvZqXQEPuZFf5qKDGHzUsbHZ5pnfoPKcFkamnoWU7b2hkXXNdx5J4FzX",
  "key24": "3eFXGX2LtfmVVhGcrMi7mCfr9jiKHcfYtNNinDJAZEP2MacHx9mbjxfRTettUXBiCkx4dSc9v6phJXB7FQsx8qii",
  "key25": "2knSC9bzVjt9ER7usFs4jU6SpJe6ECRmAUyAQLnRAPoXzk3KPHtaGodykPR7JJQZiePqs7aUsFPva7DEFBuS1pi7",
  "key26": "4gNGC6Xfh9Np3UqyUACHg4JhavgEtv5TN4PFX5QjDrsm34AdpMJtYDCnBqYuQGPRNPL2XDf4kJbn6kwM6ueeXSLm",
  "key27": "3mhrZDmnSDjQNZqAfCYp9ZwPYP78oayvC8DQyGg6yxJBhEt4ae4YXYcRPUr8f9GqRW7FtopAVNjehCijVzVmPqwg",
  "key28": "2N9Yxu54gbzjibZia2j9R9JrAmLKNtrwMQjv5zRqCw7cdVSxokB6Y9wmprURJbWmA9DR5PwdLhH7d7EqbteCL27D",
  "key29": "5R5uwRUNrF459G4n2Q4zq5M7niEWGJygTTGTRSZwbYfKeFWbYVP26kM7rYa5Ji9SCBHQW5Pp1ASULaKqJ7fGiXzy",
  "key30": "J96cpq8noYHCYhaxAMx9pXawYtUL9PGwq88QZPvEzk1tfib3kWYfhG9aeebuPBpTN8yjo4jMjxu6xZQWzsWPRoh",
  "key31": "4AZ9ssBLFCMzDZf8ELXvwTLrirep3J37hxvSGDrQYTkLkdg31eMFAm3DrHva2qxJ2fbzttFPgYzvTnDEmEmtb2wT",
  "key32": "5BnZHJa4a1VdF1eMsXufKvRu7CuZMY8NLf4kj7wHomoRF4RDZamYxpQ5cDuhvWucoW45Gu6tvG2GdXfxN7WadURo",
  "key33": "65US94UA9tqwK9KomuPcaQmrYCGZ9zTrZdFBsZmqMxZ8m9kYYoxrKaq2o4mHj7PZba5NtS1a4YPS8bymNAx5wg9Y",
  "key34": "3XXuBzEjfWL59ZZ6pJGHQ4AgNyJDcjq84JUmhZBVtPQaPiBPZ3P2N4BCyMg42QqqSLqFUnfnYmMbK72Ds6ASYQzG"
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
