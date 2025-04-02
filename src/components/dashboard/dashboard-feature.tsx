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
    "2pHqvNGMo54sbgCxJMULPTQFDbGEUjQXsW4A9j6zBBC6mrLoDQpd7tLR5NGdQJ5ZwHoHFjxutXiARbnobfFA1ePR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRF5XmBNvDWEW2Scsrf4UaT7bD5DXgXhJMzPStdZ74Lug4NsxPahJZKzQ2tKfnFh9B1TbC1qv4EnXa14ZZQJybJ",
  "key1": "3ddAPPVNmSbuomB96iFzKNPeqYfVVsgD8mpZ2j3Pp9BDCcUJZ51GrTCWTSAnp8uRUmr1MmVe3A62sBX1K2fNNx4A",
  "key2": "2ntAfvsyDU7XsPGNMgGTLTHCVPxzZWwZC89uveTVdyt8KMNrJ3UDH2JmyvpwK7DUCDDeW6Nb2hFV8BkMJDYJGex",
  "key3": "5fus2NKYLUpDLVfbu1DEaYtre4WXfydUT9kMKTCz8hJ9NHwKtQzXPvkPDD9eCMXWAX4Lxcd5DpcKtkcX5dDNyAL8",
  "key4": "5X9Fg5pNYSndg7j1oEwNZXCpEbsKNj9D9M4emB7Ps3zvqVT2HtcpUKjZLDaxvmei2PY5KkPXSrqukeqLqi9LAGwc",
  "key5": "5Y17ENS94XhZeehvTpGL6uBkyVAvixZZbqrvTNGoRc7sGoZnGKWvW8iFf8wmuRFZ9gzh3st62P8zy1u3cJA94fpS",
  "key6": "3BakN85XTyng1Ccv9fga4CHjDi7GSLAGFLggjfuvQNpfEYrTDTAv9RYCQpK1ykDkdATxV4Qxkm6F19MHEbdojxVi",
  "key7": "i9Ydm1bPuipRoKxVYcG2DfKa9o42DeS6u5dnDRJbeXZZQxvaELewUVrHtF9AQcjStMLPERqaUBXzqR5BfthE4cz",
  "key8": "3TPJF45iY85M95UN3sd1SQkbdxFt7dWgMyqiSXfDyngPzKTEKzBkd9YcWwpbsTiSMh7wGVX3KktwoFLgKiePedTH",
  "key9": "pjscUZLEzNG83f4dDPhb73Yq9QK761DsALnMU2iRcKkad9XKsn67fAXtv8SjAhZrLHk5gDb8u7ZTuiCdrqemm5V",
  "key10": "pkGm7EPDtA7QgFNZ4nRKdge4J54xgFg21Lmw7dPnALRvGkxzxj2kd4Gc6r6njpyr6QBFsQFCBGCidzorcEP6YmA",
  "key11": "3gk1HADzs3V8jVrrkT7gCAsDHGJ8UuYgtfsoSaKmZ1Cy2cGfg2xk7TB6qiQ6jEAAueRhypUNDVSpkCEh8VrtrMU4",
  "key12": "3XtTWsgNtNBJNNxseG9B3TFuta6d6YzJ5g49V91bwftFVGKs3HmSPJQ3hRexgCMbo3xXtw7CWVRSTWjbxgdbCqWo",
  "key13": "mFbNW3Vakw3iJGT9z7pBH2ddQH4Hj7tikW4M5WxB99r2RYEirS8A1Jn11ywMcbjziV7aPzYLXTdMFk7X8PyYw3D",
  "key14": "5Ak8J2k6m8swZquY2e8UN96wbUuuVMvJqgMVdpFeD7iffW8goJDwHjrcK9fHRzvHstEFTqhfhnmPWev2rwYcjULa",
  "key15": "3VqyCFGySsHi6wVXtgzTk7Y37yzwVwAhqcoQxHjPnFsrnU721MRWBFNNZm5gLq4kF7mmAHKFyDYpAeKL9b9ZQa5x",
  "key16": "2tPqcaudPjeT77wrfvsimjq8CA7bqwfBhBaAJBWe6Qq79BFr28prewqv5JFSY5XVFwznT4ufNm63WC23eC6VnHAU",
  "key17": "24m2dZdxBFsXJUSY7TWNntvPxvRFu9ZugynYb6g7sPzPLZTema5oEoP9b8JMVAvJsT81NAR58s6gMrJ4XaQjE33S",
  "key18": "37VgxETHMoXMEmEdt27ztYqe4TQQnEK4Bs1eiq9dGbKuBiFUXoDos4ejA3h2mQeLgf8ciT7sqeM7YEFW8arYcou9",
  "key19": "BFWCXmcFwq5dw26GwNSXasH9D7QRT88xVo2ceAnk8mmt7p59xffDxyPZAEHoZeGUwmW8HMx2zskQC72SuVQEsxX",
  "key20": "dm35xFbkAKx1eiMpAZYDeG5nVaNv3YwhfvnrmCW12Cyyp9bnLRV2JWxam43Nu59E8L2uCJC5KmW4f4ncsSwkijk",
  "key21": "5tjxk7QgkJPszNuUy2aiN3tSMH1erNvaoXjvpJfsrjzcTYysYCM2eBvkLqtrRxAyiemZJFhdsAbrqKD3KEU1hT5a",
  "key22": "2m8hgJeyLYCgqnvJSJJVNRkZRnTjLEcUW2zbymq6sT42dxBQANnRi5xvuorKDxRsGg2iYR2kPdjscxwiNrT3SURU",
  "key23": "5qaqqB7QNDYpnZzeygGxQ1dFWqFCMtrzkpKcT4vXLeko6ENAFTL5wEcx1LvRASH1QzYfX5eJTkAz6LuuofGcArpZ",
  "key24": "3mjywKuhw9e8UhuynnBoe62RScFBcGsjqM4sXLWL5s3LparhaUwoX9qKyuxBYHsAX9zMCx5zGiL8se9GFuYzU8DD",
  "key25": "4t26NAj3Zg1G5HMDcqJv2yD28yPBT5iGNHdWRhpKDRdsdNTK9EYFV6BMR1Na2efPGhNeo7KzGKPfA8ygaTHv4Vn2",
  "key26": "5strom2GVW7EAkT57qEgLaQFA5NLPVbHufuCTguBRSkRg28ZKwuQLeRAJWJKb61vQ5mqZRR5nvs1sMs446Y5144U",
  "key27": "2doKhBHAqK1Dew2pBz6EG9VW8csNnmZsUX6BNdTLtp1okFJF3ZCuKBQg6fPFshzQSQycVsA51of87BFq43bjQtiY",
  "key28": "2WuLG9CNXMSkpmStKk8C1AzbNP6qD9Bj9NaiBoDw7g6rqn71dpbTNA1zd8HE1Bnp8sT3St42d3qqdfQiA9RSLUDW",
  "key29": "3V43WE8mJBKkeSUx5dK6nbjByyWxne83mSeF3buvhWWBF4Lmyu49imTwMifXV6TME3cfWKAcQYykWn7Rssx1enb"
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
