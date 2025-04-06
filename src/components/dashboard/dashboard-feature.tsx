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
    "62P6v5HwzzpqcX5t6X8mm5W7AH3LToGMYsv5MXiFLajZcmioNnFF698DZRrR4eL2Q7Zug6p4FeVKFoz53srMRDnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwecGajGv7DidSXs5NSXqe7sXohpX8Q1PrptsfDPKcwnP3Hkpom6DYBMTA7rSYvo73KGYZmWUuCF5pet8hjCor5",
  "key1": "5ix1kt9VnT1aiBEunBMYBZnceWFs1VoKuWSxLMX2sqQmyRYHw6DqCb6CRHb9H2Jc5wGV443aqkDyd87eWEcpyYpE",
  "key2": "58FUkeHVcFfFrcmPb4izXV1b7mcfNSzzA9Rdg5B3ytM13cx3yNf5U3NKaD7B6aHxvtdNmGQVmMvDVU9YkKRamsdA",
  "key3": "2jzime9CpvFCM3Aums23YrfePkJsbkbAEX3atfoiQksqcKsDDfTfHbX8m9osx15KJHopDon7UTF5TCRsyrug1Zgq",
  "key4": "4KH8cpQPbhKHcxppsibCxpmHMMyoi6WSsz141XGoz1WWRTyeyamdgkNGXe6P55aCEqTovvadpHKcT2WEk9meJpr9",
  "key5": "3fWYhpoNhUazCrimBRFRUR1Bo5sgxLF24fNjQYFAmrRJpgjthqckaBA53crFdWMia7nYKkfCv7jFT3JzNMhi11nU",
  "key6": "4tXpzn5SoHgFzS7TnniY372pKnjvjURnjavmmavDzWhRW7q1FB2Zxtj3XtoMhG1e7UHRVtY1WQZcgSEqdD8ey8D5",
  "key7": "RMVeywprPNnrPebNFh9LLz3NUpqDgsmJuv78y2AcuVQ1q2UwEC6PJyTCicW7yLT6qRXRBL6785zBhKK3sKwBSJu",
  "key8": "E9aCJtMCuNHfXqeH4rrGZRdP25hGtt6m9opnBW3tQ9uE3DPU9GpLXcQvD5a7gGzxvVVagKZnERYmhytmAdPoEGB",
  "key9": "21ToRe4zaJkd4iqtGYt2CudUnQV1vtdxeHhLdZ45U8TMdcxwfB2EV1Uayir3xXaFEPiQ1VE8LmpeJJtqXDNhnUix",
  "key10": "3hGJovSTY9N8KE8uqb7p2ftGgXt9KpDpS2BfCyjwhoSgrVNEt3YGRrpgL2xigkVry6X1RgFisyT75KsLzLcakmub",
  "key11": "476RLS91w3UFpRRMzCre9mY3xUJbJCMqCPCAYijkntj3Rhcvejj5E6oFtXLJBwt2uoHLYztsGgfJgtzq7Rf4jZ7k",
  "key12": "4gCivBhDgpRVoaq2txvPRBgdHJ5k4SNXVzzCVsSWbkiaEiHwQdftSsLjyeb6FjrHvzmPLaZKfB8UETx7ncMaJDuK",
  "key13": "qyFVbdyA3vMEvYh5gK5Bpadqx9q439YB4fHRPLhJwgXqizffHbwkhPpAn28SMhZqTBZkE6EChHcMVJAVTUm83Mu",
  "key14": "3RXN248azFimiLooDhDRg6iZSCQGtDz7kBw9joGNBeyUd4NKfwJ7RgXhLqcKjNGFEsDyAreHi6FsQSjpwqGsEYLL",
  "key15": "4mnhL3Lke25mwixn6Dm6bKzAZuDEuTbzWuNoP4hg12tGLvKiSJtzgTe365qidtRkjUQkQ9WEHF5Tjyf5omCTLgpN",
  "key16": "2Mz2V79PU69Mtz7hdJxYDXYbLSKycoxg2vV1M1aFb1bhAiDK2Soioaisa313Jh4wKNNh22wVuJrZNbWxeSGc8omf",
  "key17": "5iidXSsvcQaop3MMJHpUSaDAdFrf7e5toCoxfHSfvnkeXKaVLAxhH9oVhWW6eqNaVPrT4Uu8md4HuX4dVdHjZhNM",
  "key18": "45QbKFP4NUUFHzs3qEWByuYAVKN29qBs46UCzcPVDSqdJ6Aiu6t1YMdTxMhv9DMsfwrQDRzcXFMNgwsQK9w7RmJg",
  "key19": "5eEbPSHGuqa18mL7xvtNdbsSgfPJPi75TFjMTaaHiUgnku7BrdBXAndeFMf77nkHa75jbVvvDLbxnvrk85LJF74b",
  "key20": "2L8EG6AyddM726szczTAcrKrRgBEsKVnDue7vwyp4ENWNjh9S346DmTYLCYKXxCuz7GMi8Roi5cmLFEr94UPFZfx",
  "key21": "2MhFLuiwqoP9ruZAqPAymUppshVFhKK4ox8rskUrBZ6DypXVdwmbsVSQShfpqUQSv97GvknMyuWVj96A4NeTZBpn",
  "key22": "34uHMpE5AR7R2UQL6EuWfznyKwY1TnCz2F4mG1vVFF5qJ9gLh3qbH5PfpRRAuwqB77Gpn3UC5WsG1XaFqY4nENZW",
  "key23": "4uFkymGMs3KMqNa1ijo9nV1vcezbfeHbGkUySVeMSuxtkU7NVLhitoQWUYAagT8pRQuNPnbKtmqUGhMwHKdFGygx",
  "key24": "33X18Hpk2DFK9ZYiV5ZeaEnkVuu3VfWCaE4uKcpznuFcFjsTm8btCkFx8iiEhLVwJSmF3qzD9u7DJLNnB3fLzGX3",
  "key25": "3T1UwbGYhAuNtwKXgcj1G97ngh7onp3sqi7eTn4xqGaeXsJjs9mAZGZaV7mCQe8ezBWKzXtN1pJHAxHt9PfZprzD",
  "key26": "3QQ7oyVZcw6e2vFQBcWy44StAJCmMn8ahDe7HPeAdd2UAzvJQcU3y581QevcS5vtG2HGpptDtnMJEE7Sq4zPL6sf",
  "key27": "5jrrenpHZ9AfsQjDX4Tr4cXbXTUHu6D8nh7PWkQxS9uDpAJTwvFvo36gCHirGDDeDMtwUpKY9PUhGL3AfXAQAQzr",
  "key28": "5kG1WudEVEgmAG51GjEVJzbuEi5b2XjybNwip3epwf9JMkaRbR3YuwYTCCxJGcF3pqMrZryKNh1AAfYJRe2tkNcR",
  "key29": "3DxL9Q9h2eYaXotcJAiZZwquhrabinxSSmoRunNaCbDqzDpTk6AoGv6LuMzjUGDb6qYZtpSGqzgMUkkmGP6iHKVm",
  "key30": "22excfrt3amZ8h7xdFjaev1JYeWg9Np4cMxkzSiZfR8yEWwGtub13gRNFRqKjr6mhAFRVmR8UQjSp5TcfG8N59FP",
  "key31": "62NCMaWi9RbmLaWNVTFvd89utgy19vzuPHHcrQxQAubosqF1XYFRnormxmXhmyfCFdEyTrAQYGB3mffbacP5fd9u",
  "key32": "4Y7BC7Sk5UpN8becHQKKeBF5a654EUxDeRJZNEPpqwago6W8PuDqFuZzkKpKW1NHgVVma6myZZLHo8mb3iC4k3wQ",
  "key33": "5MUrRBXKhUDj1Zkb5FbRw1nB7oxrsNCSCQHWqywqZKendnm3eEwqy54tP6zshnuCRbmfBVPkRPi6T8YuELfLmQDr",
  "key34": "4fUZEHmpmQZXfHdSMtx3iFYV1beKV2gCnBZyRoKuGhhmBSgyWTewBo66mfAK47HaMu4nWYMxiKcbmRMypFLUGDq7",
  "key35": "4tb1j8omyJY4FoF6y2wRGReeMYgRCY7V9PqXv2MWdbULMzzdHk9JfJ2GYMV8SkeNmqiBYfK62Tvo6wLVDK8nuGFW",
  "key36": "4CjXK9ZhjvP4T1ue6fbDZrNwi1eebimG5jY5Q2G1hm98fkoLwMmqpmWRfDRGxRH2aDHxxPNiBKVPRTCRLYZwqkRU",
  "key37": "zBH5996TMQ2LXA5MxsrmUXa2BAv6zAATYPsWh7P94QcMPobpzLGbjcDD4kucqFSykXFT3FZnDzD69qhoCzuT3Zc",
  "key38": "5pD2R22QQ7PhwukWYBxcKjhBc3T1airoCaKPDGSEBELsHnzpVMMnPNDmJ9Z4xGThKisem7ZRaJfKD8ocf6wwhzH",
  "key39": "46wDrAhCcA1codm38VAYTgBXra6YQt1V2E8GP3FJWzWLum2p7Ayw9Qt1ggF9QiHGYkAQA27AzEBMrHNdCDYH9EKk",
  "key40": "5UHfgVEf7pwUAXDCiieoi6sM8uL2FuwVfifyh8jjoAwyNAGKHhLVY86ZM8XXZrW4nsLXQNKMf2xMp2JZReXG7o6d",
  "key41": "2FSYVjmZKAXtdSdcw9Yeo5iQFNb27fBKJmyEWfcpj9YujhTXKuKACVFwUjtJi4ZEKzgQE3n1ktZHcaAtKV15sZTZ",
  "key42": "61pTippZtXtPJbemdKEUNJvZjo18AULdTDt18QTBt25wexNp7QFgDRw7fern2DovuK1fTLVBcJ5gHvdArCfypRAe",
  "key43": "5mBhbp5yCtQH2w2iExTJn2AJv9YsiwJUMvAUsPxY5u8rESaXLZxXzmxE7owewkBwZsDWvUJekPAJFppf1o69TBX6",
  "key44": "2d5ZjHDHHrFh2cfMVX826BPk4ToL1g7eZpn9LS5egRCUbPt8DsnDcns8j5gbAV6H17aew9MehRZaZ9fr6EEddEWV",
  "key45": "4tQWJAPw9B3fm795ke4MNL4znm6HrTKHjvERLkzqw8F7joJSgAN4RukRpy4VjJvuyEdNEEKnLXG1HHTnh2AwZ2r3"
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
