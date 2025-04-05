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
    "5nA2hv2SDEzc74Xx52mAbGAv1goJ6zgNE5GtzPMfANwym11mBi1g34foLAZKruFvtdRXAzNVJGdTq1W9g6jnfRLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMYcB4rvbh57dvFKhWULS7vFdVNJCKQsbXi2Y38xiNzng7y7Tai29nCvMLKrgS3r75Q9mAYjsA3sAXUMPbHYSyj",
  "key1": "G8KPGKqYbKUGfkYfuXNtkgkTAN2RYcGsiBbTi3Qrtv2GFUVY3TQWBtBnDJJwiQDxrjmyEikfCQQuQ64AzJyqdvz",
  "key2": "4a8fgXjovNbqU2R7zMYexqGtBcYswTyEGiLkvq4RtiZszX9DdxmejUhJhvwExaStQnES4yttQQCp3zva4zFU6gjY",
  "key3": "5QxnYJp13q7rm4EiwTkvU6TXDaWEKeBsHCZuTpEphuDc4aksJ47RzgciuLwR8nv43ma9Zy6HJePJ1SEemCnVWwqk",
  "key4": "4wdSE5azwaCJrKG4bLzLBDY136A2oYRuV2aPBwqW9DfBBohF9oQeuziocDhSdG6GMkyvptd6typmgX2apENwkBuA",
  "key5": "3zqB5jJkb9KwMEUC12ZPx1LNByJVQggMaeJwNFcgDbAf5G7NjBEAMUNXqkFPP7EUTGpMMGzsb2gZrZojVSW4WACR",
  "key6": "3rR5jdxD5NK9iFBLR7sXKuE5VYFkVVKwfguz2WvYeecTTXanyTVYHX6TUnboJcXGRURHc23tFSD5hApJ3GLV5Q1o",
  "key7": "KKFuww42k7fqnskNnPHVzQjmyH612P3gKJzjCUSTRp1oM2eSkTnJ7GUUykKWsb92LG99YQZAa86R3R2upJenJy9",
  "key8": "2YFCJDYCK8FNGuwNC8Wksi8Kqk8F6vNbyUBCKKGNRWGz4gDaK4DKqu4pFBb8377vEhsHrT6fX1C5C1Jv1mVf3GNW",
  "key9": "5MqUAr7pLCNFViwc54prYmLFpCw84C7XJTGyPxEx7E1HjPu7vHCZKRpGiZyR1Cgwzx8HeHFFvu4oqwKv5mSFRMsB",
  "key10": "efL5qE6qgZwEFktupugaVzn7ZfLdX3c88CZn1MPvvArsPYnBTK42rquC1kqa5nUrYG636BygWo3zqz8tGHA759S",
  "key11": "3arUr5nDvn3FSufYiZcUaFauiCNFSDFAYTTJk63K2PH15KMD4UZQqELgRQ8ECHCc2rvUudb4PzLyx6TmGqyDL2w6",
  "key12": "59QX5TmvXepVeEs1T9r7c52KUmejEMN53FiwMppWitUTmiKdjAwkWFguNGF5xbepG4Unz4dG6aSB6utpaWzPT4RN",
  "key13": "3mZzd8G4oDNm4vWEMGEcSCGKLrpyx19H8LgTYdvAN6KRKd37qvrDX4dUCG1gB4JCAwLKQZpcnXVWMk8nkCke7Tsq",
  "key14": "63ZimnZFvG5jkGNxuwWhD4sGBrcXqjZoSgYxp4WCzcPQ9Upv4AA8m29TvWBxkRLthnrGFDynVbxskwXunzco32Qo",
  "key15": "4ms9e57g2rCTmDRESMiP9dGrkFQTXEC8fesfuJeDLyYd6NEqw3YXzDV1Q49MXcK8rtMW1X1dL921FQLgz2CDs67Y",
  "key16": "28RKqDL7gc5UMJwXJMiR2LvhSvCXJgnQDcdjM5EML4M82U6zN3LaGrgUHmRzgcqg3gQetXxNNTgtVVy2urgUc3Nt",
  "key17": "3EdcNBXQsuQwH2WoKiQ93kbgpDioDzfoaP6cWdTdbCQn6W4SJ1zEgXxE5kxD39Yrs2VYh5drxMkRYPq3SpEZevzz",
  "key18": "2Zp19HsDV2WVg7Bfxq8U5Gfjo1F1PatWb8GCqXC6Dg6LWGjGswnD6rEk1GbA6URrakAYKdmD8c6PNxamNupe1QKD",
  "key19": "4RERMXfcawtZE6BWDcMtSAcbsE9j2a2qxK7VKR3zU6ZURNZCm5T63jNyoS9Q2rJMn3iKAYoZAshUzzswph9pfuLc",
  "key20": "3AU9GVY4QamaUydeXPxdMfNgna3YyqFr2dbvPACGnLDMnnN5RS9qswoNLCc1FKyVWuVA1CQDmHfWRXRqsbAyMcBH",
  "key21": "46mDTedMNQP4WsvfzS3e1SyQSoijkSHUaXhz5V1yEPWAz1HVG32oRjmNpr24hjWb4XFXkWtcsDiaeQNmeDspxhvT",
  "key22": "YZNsBocKRRsFVh94LJTaYVJD6zcMSN5mQggrDiawPmSbEKXqs1unDUHkBvnjVE6wKB7tokciJJgk3CpNgbRdkPE",
  "key23": "58j2BzXBHrcLuvuKosYdN9pM3HqrrUKXfoSRRShWK79fxz56DdFk5Hn8hea2yFniTRxAZ83TfYwj7VLkKbcX6fxh",
  "key24": "4P6FEE7qveN1KcVuEdzbRbZVMrmHpyA2Ao2dsV8neGXiSN26YGnn7Hvr4Nd5AqDiEpPq4ZLwaXi8n64mHjBZdcD4",
  "key25": "4WftfXG4UkNeEofiTv6CpsZt932e7nmQe8ES5cNLmq5mMggBNUic2PQNozGXU8yHQRQLxc6v7F5P8gZXPZVFZkoz",
  "key26": "2WmFnXfEEscRZVAiehiwnF8ZY4kdK6P2Dinq92s5iEZFP6sWpk2eRsRQWtwRpnHK7tBWEwEz1GPmH1AfHDkutoBE",
  "key27": "3XxaQKPcdp3kYKJCBQFoqd245GaBYq4dSLBRT6KiWy2TTWDbzX6PrSCvzS1WKEFpuG26Kz5gAWWsjDhCCdcuytvm",
  "key28": "3wMUjMWWpqrbcNQknt2Jdz4B8TxnEQXuH67V6wbDRwNx3qLrnwLVbBQrkAnmWLG8MkUfi93khReykZZRFHmAZrJc",
  "key29": "2dVrDSssoCiXZETG5hXUQdiDsJztgNd3J9JQicFaHhpdP4bT116S2HqUbUmJL3DVqc5c9EGNPWMFeXkCH4ckdwiR",
  "key30": "BBExvZMKYyWJTUCWebioaV2GmRXX4UG6oWiKprfWvgvjJBt7CZ2fQyuT4sii6drNCAs8mQcFkNq8xBF9frJMMqG",
  "key31": "bcqXXfs5pyw7ZRJkQdmqdQuFuGS5LExv9DBwkYPH4ARazeHvBJ3seR4rSL7NyL6a48CUWANabEHmyQLKjTn1q1V",
  "key32": "38A6QTnriSpw4tEnkhkqkvznAKdn5pP3dhW6wMEQHXYmQj2oTJ2JgpkW8jJmoGLHWvJkvugnyQAMPsA1GqJp4uwM",
  "key33": "H8ycYpPqBkg5bVcHzWVMjUHN992c5ccAs3Y5i5GoV13HaEftCEthCNiLWEk8W3ertiNVuPAt41MW3t3EZDzGKTS",
  "key34": "26AqC2pd93Jm7PGeobwYjd5CqmhgaqCJ2mQJsYozLRbHAj6aXkkoWH74p37D5W29eTUgBjYVAKK1YbbhzkUnnT3X",
  "key35": "5GsmL4KoJw8SJqoa4g75o39e9aTVmjFypeUH7ShhGRvEgPRL8BB5CoNRxC7ApwhieyenvFL4D5BeuThfs4EHKrCP",
  "key36": "484AaQj7mpvHuR8KhBgRX2Ei7hz9zFA3jBUWwiaLt7aSPUvEDZoYRY43U93MxaAkQ4HMkFwyAVF6v7dEPm8iTsAk",
  "key37": "2joiRQ7vQHQoXaBP1iJYrHy8mujngAkeCRdUbowR5VN9efodbM3rVRxodqhanPas4dKb98jwFbgZcHr2542ve9QW",
  "key38": "3FQBVTEDVE2nciCuCLadQZKDwfnkNmfauq4CmCHc5pU3P1ThLm7HqJCsD1eDwDkZscbdpPCrzKyRrgtwM5fXvxjw"
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
