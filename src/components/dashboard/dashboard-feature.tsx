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
    "Sas2LJQ7QuWtZesKGPeaF68TajHCRnVS5pA2cs51XZ3rjZWto5cXoGsC7bpkMhns98kcWWg2ogu8Q8zvzgwLP5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RckaZRpCrZdrxWkaghHBXZxzoLYgfEJw3Pp8qek6H8qvKT4SnCXGpEKmLfZNvCvtLsFTZp2QjD3xyJCN6ZA2Td",
  "key1": "2tqkQHcnrsmg1ymnMz1TJZmxn6CWXNZVXqKNGZw4EiWFfMmg861vSDCydCknPXLDxYpiHHzwXLGc6BPVkzBKQLmS",
  "key2": "21u5Yrq513PeccYd8VYtgd2jdNB3HTYVxWevbi3cvCVb3G83DYp9k2tdWbXHp8nbpypUdvr8fefvT1dPK7UKUzxd",
  "key3": "3ckFsnvuALaTYq7iQYhmJcNAbJxNHNkquEMejyoXdmGRLJ25UaT7VURdvBTsjPE7VJwHL1C3ynFetBFUZYL3P8aG",
  "key4": "2HGsV5JQyWsejbxrV9Hm6uDEcckoQaqV8td5PBo9omUY7n1whQwjofknTrnvWHq81a8b2DHnNVFwYFS6CpQZ878M",
  "key5": "4SyoD91pYdANiK6yqYqbCioBW5ozLuZj4Uf96Qyny4tpCKaR3DndsCuMnJ74tnxoqzsd3RrK93bAoYJEAFEEYW8f",
  "key6": "675Rw3iwpePFU3oaCqCP1e85fDu3sj3G1yPwDtJERe7GAty8xBPBjtZygYCAkiVD4799FCTyA3To7j1jcGPBNy7d",
  "key7": "2pFCMexFMnJaUQy6N4eFq8KXdutbxYG1wnmv1F2PegB4RJd88BG8Jw6rx5nRJTguJoP8Moe557awc4DdT5FNu4YF",
  "key8": "2vg2NdZSVq3rZ8thrPMtWiazRcHg2UWTJyYLTtVuQ8LnAHKWi1nKuQ65jjzSS9HYqmfvUruhjXUxBbzMgeEa7eLU",
  "key9": "jaKu9Sq74LiM9spbAuDTnrgAFeTDkWFTrwFydHF54Wtt4SHuZBRXtRmHK4Fx4ML5oM4SwukJGukCWipqbPavzDy",
  "key10": "4RJi3fgq2DLwaQj8MKU5PMzsaVRjAc3uwSc8qCsS5C76VnVQqJngXESXLLxhafLiXNi33fTZqr4SH5K9Atb2TwAT",
  "key11": "5GNzzKZMTEPjz6kdCjigrVEZwugpSmYfBDS1Z9g8FoXCf4faZkepbTuQA67eDR4fBrzKeUoDJk359WqiFkACWmoP",
  "key12": "6muvP5LETUhHxNTXgmrM5cGQNmrMcX1xEh6NzhVMAJoGWa1aFXtqY1sFmNrm4d5JUTZJc5rqcnFQQcsx6V4cpEW",
  "key13": "YaJRb2n7P21fx9bLXrmxEyCzR72CDqjhz4bY2owRv3Tuwmq2utvrxJM2txVjKEbra8Bq9SDrsNmJp9Vk23QbCe3",
  "key14": "k3MdA7X69rkrZaBgoEjpoLg999pa71mMXJh8p6fb9GacCg8ujh8pEYPR1G1ZfYQXuZmpsbTDeZytroerooCbYaJ",
  "key15": "4AbU3KceJysuNczgQzKJroW85q4V7tsWBXxj96R7hg9ZRtpf22nMSSDx8ffdDxPHTp5wAJuvcbttRXa4bxv7xvmu",
  "key16": "d7dm59zmwvYeahB95eL3hm64aHccMeEDjRfjhmKBU3LYZdaBxkCWYEojZxPW2jtYEZpDKTjzsKNJEfM3Y3xywdg",
  "key17": "uxCwx8PR2c4exGapEWmb92PDVaesnfBiiSPmQJyCkov3o255fB8Kig7VZUcEee5hMaUNVBEWEGpNizy5hP8YkLU",
  "key18": "5MnzuwdMKWYugqd6vBEtYLHDffMUW8anarU4rhrML9YrcGwFhVKFWaKrff1AgQbCikbhvQGh2jj6PzR12X6KcPPW",
  "key19": "2L9bkL1fst2uGNvx7jCq4ieq2FX99sp3tbany4GMCio9D5GRK7BVgpiNJ1SN3Zks6h7vKmxtN2cZoqxceUYmXymi",
  "key20": "2Hs92CW4ae8ahp2FJtB8gYCKmsSFfSSdUCEvFUS3YM4p8DkSN23PyDS9BxYy79kU4a8PXB8BmVzwnjfioKu3WS9a",
  "key21": "2BQ8DrU1mXkXwQsCYqKttRTwb7tryknMpgNzg9RN8Qq8A8kVkessn95WM6V2Pq49vtJZLRVrRNVXtkyueADDz2n8",
  "key22": "48Ytz524sJYy1D4zta2fjo4WGR69u4cSiW1JVergxdvbTcN59BeM2y8Vb4EqZ715b2nujbJe5Cs44TDR7DBC9pbD",
  "key23": "AHkPajacSZGeQ3Ds8HbMkE7c7vrZifSsshsDP5QTKpEcuNDqXh8LpK1A8e7j43eNDafP6ByVwTGmwWskFp6oofF",
  "key24": "DTSM3EWWgqWRXNvbPWJwNw4RxPk91WAx1XWKbhfCa6bhnApZCW6HzN1MSELbt8QuTSdkQ9ZCWs6Ai5T39jwvaRe",
  "key25": "4959GkyjdjKCbN7fmmW7weDUmaS7izeSfG5utn1LxBWJnb33kJ9rFbnJyMn6CVfeooaBtPFqSXirNMXho1HX19Tg",
  "key26": "4ML7xu93kC6gYxxCGHivo35Z4xmVkjZtMKG9hj4XUqcpyPga5AqrGdVYmKUNqynbRS5PM4bKDmESxUSbdEYFepCh",
  "key27": "2QvfKLgAykbyLP475phEdHiqZ9bfjTjBKxu5mWtXJmci5TE4WnjFcYmJHjhYp1XdERJEjKT8vd3QEyqDLLW1dBCo",
  "key28": "3CpdaGbBcd1y2RLTaw6oekobLxm9K3rNwwaVzXraf3UDNFtrZaAsMQVHZxvuaCYu9nPpwrzKEBb2ViyHbqP8KjRC",
  "key29": "2n1RGyZZPzPrqSgqTJMHBpQBpebRZUFgxkeV7NL6SJAJKDpHB6MoHfqp4q9kJUFhpYcsU4HE6tSDteDaRawtRmpA",
  "key30": "2JGYKTyGtMns27foCJNubFo1zgRFMdhM43ZhyKk2sqzEUKq39wZegDXTm1knzeaqnoyKTy2xh72UUE2sUg7t89u5",
  "key31": "5FuMsipqHqtqSj1BZcBYvbvbwxPBiSz5pkW12tVt2nWkwvGGbk3dUQXhk4MB9HVmaDeqZHyUd7AEiNsJCSEHrWnS",
  "key32": "3zGXEU9i8usbyafCLhdVwoMBXuVCe9Wv68r3EMonzj1eyHjmxQLbTcpq4o98e9zVsayvgVV1aytNpDcqCYUmKkau",
  "key33": "2s6srzjkwJ986JLhVGMDi8SdEqnuXEREi8SiR3h8ha34QDKXSf8b1h1nSv4xDa5aDbaajYKcd9th9w9DikvYbkst",
  "key34": "5oyZpfpwXKGgKMR9G9kfhMMKEPym8KKjhbDDU3EhFqtLLJiQW4QiQiLk3rMvhNWtyJRjFEFgVnbJPAPPVP97X4CS"
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
