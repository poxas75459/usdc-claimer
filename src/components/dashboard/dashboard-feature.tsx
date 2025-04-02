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
    "6QX7kRsJWjm313joxTHWnHPSZwA5ubeGgf2YHYr1CcBjMzU1B9qirv5JDD76PrmUm2EGPPQBntk2pqRdj7S5NuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaThzJZPmnVkqPzkGK67UP41pcBUuJ4GzTDx2KGWkBD7aJd9BWn6FDj7eWHFz7jdwG2cmQpRBkAGh8KQ8jk5wzE",
  "key1": "2Mx3Hgj83UddDHuuVNXLijEEEkwoBRhPq3LhRKQ8spy3ERD1VUTdzpf8T5tEW898GLNC5emBY5BK9VDc33Ebjxjx",
  "key2": "21nuLiyfmHEkADRzR5UR3zUw5daG8PFBU8YaoSes2RSc5tHt7v9cg66X3CLY8PUEQTvqtXEd35GijZgYQ2R2h471",
  "key3": "2XPqm5qU6hM67cVHyWtjktFdKD2h9px9aQEsrzSQor1N1iUJwGpftModASpnsWfkpYJM2rpBDTc98h2n5S5p7WS4",
  "key4": "3vj6raQpskb4qdwYLz726E62ewobCMJFjDEvTauS7BRX346LuKvnYDoC3cgLPtZSRraykDa2mzpov1nwdYZVM1NM",
  "key5": "4pfGDdM8uL8Vyx1Kp41Xp4Dp6nAzTkNnt2Mn2Mm2rzBmBvonci3Waypc4WS3hLtsg2J47BhGEYkqLnnz3j4nCuxF",
  "key6": "3yrJMXKVKv8MwRnr7hGNCZzVsKdrmdpeGvdzrxibda5en4hyhxqPsVSmAkPjPxoqCozefu4HNCVXrrDKMYwX4fgX",
  "key7": "1218o1Kg7PPKEMgm1CGNaeSr9n5SiDV3bRmCseeNSAvSLtLbea4WBqzKS32Ltea88u5XQDvcndC8YnojkKw3NpcY",
  "key8": "2R5c22pZn2GK8DsL61YL37CoLqRxEgoMvDWCu3U8njtTQu1ofETVe3uEfHkVa4yQbo7p13dUzAWDZ8SLDRxLpiwd",
  "key9": "45T58BtKBYUEpPYBD5t45yPgqya2eSvHpPAQMrSZRuG84DxHYP4y6knmThHNJv7EHX37o9e3jzif6yjQTt16RTT3",
  "key10": "R9utvGxV3z4hV3DiykYToKeHJSvWm2QeSGQknsVQtYNXjBDC96kHw8aq8VRWbz858cZwJsbDAjCqNCX7X93Z7oj",
  "key11": "2q9JCkmFXcmqEqfMVEBhns9jyTE5cPpZ3FJFXN5cUhkNdkkLr9jkrE9TQfGk2myVAsRiQ5YAkthiqLjx5a8i4bA",
  "key12": "m5vk2hy4CMKuUs6BEitKbWswYGm2KBd571TEZCZETQG8d5ZgcZ5u5je7936vzJ14U46EbRPuqwTEJDXRsrz59Fd",
  "key13": "3DSDB63vjcLkgAnKnP5NztYbZJoWWL2RWmRY2gHk4mPNTHK9MVB4PoCpbKLuDznPdJykfnTMiSRn1BquouC2DcYs",
  "key14": "2vSzjMd9ZMHPRruvAs8tGBJNEuHhhHvAC5NwmutTqXG18nbhARVceWwquSiJcC5rqyFqXEPXC3ZPVNRMYmd3zWka",
  "key15": "28sfcxG31xCYz9Pa9LfoprqnpPdVsfHp8iqcyZQjNdHSQztVh3tJF82ezyTuZ1j3KtxFgApLVocFQj84Jnb9VNzQ",
  "key16": "AeT4y8aMYQ73duDUTqNC8si5v2DT7MhxCX56mFGgEFk3jP8mJwcmiZhL2cnjCDwK6wXyDV1xX9PwSLBXKW49uRo",
  "key17": "573i4mzVS9S8yAam8tdq7AP7vCNbmCoga4QHM17CKvVdiRwrB71StF2fD9v8D7tktgLJVYq163mq33bQFVWcVSms",
  "key18": "5etKPK6A7uhxHgyrPHkmKYcHmd6UzpWbJonZHDqj6ZmBwXow9YwWinQMztzrfKu3vQiamZdvUcSpHoN1vRoXuN6U",
  "key19": "2kiWCRc28suXmsL1Qf9RxyvkB37aHDyEhhu5tHuyi4o6Ya34kifvWrunBHmj8cNz7jRcwAKoMApHEajrztbYbdvM",
  "key20": "4Gw2sob9UaYy2yDvyw5XNBbsR85agdcSi5AZdFws6H1Dxw6c8kCvodzwWunmbN887EGFregVkUdBC4stZUBad9Y9",
  "key21": "5EkUaKvTS5ozZTCoh8E5ajtx2PGsuKLQcyapHdobcBPw7wivDMtrMsynJPqHVXgHoPbqxZKzBF3D7ZYTqTtXDcCc",
  "key22": "3HDQdbGvTYBg2s3FSFCazgYh7mgMHgMhV2jB76nUeNnq3WLo7ZhYi3nbPF9krk5q4HVW46gRiuHnWHW4uGg5xyQx",
  "key23": "27sq2NeFywcAWvLKJxkCrFCogeDtiWoQhgbtsnqZ85yLkDZR4dm1SzGzxhtz67ASSQ8GSpnSNP8BkxLh1xo7gV4T",
  "key24": "2xdjmSpUUyeLeAi7TqMWFyoUNcSRiimALsJJkZvzXfk6VnUDWfwQzNfjdo2QEa6zFGebHwYMtJVam7ehBmy9NVRo",
  "key25": "5Wd855a2tbsu3u7U7rdLzbpxcgfuBdg7digE81rma7huruU6afcVQ5RXCbTSMGWbn5CGHQYLaE5UECFTZTAn7uU9",
  "key26": "2z2cgjXUrMF4B5h5W8Kw1DcRPfRBEVPNabsyVyLxrxoG4oE1Tjxtn11JjMJNWRxDkeixV76s6YDXDBmBPNxQLJFV"
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
