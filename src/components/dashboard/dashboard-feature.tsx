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
    "4xM3JyW2jaFcgiZaSMjfEKP2XqMiqEucAJjXAr8tPJqxvEkpoA8DcvPn4ahP4EPjASrjSzf7zbv2mMKES2F6ygqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLAcgCmidnqVud2yKiyKNu4WC4UuEswnAbxtvoWqzM3WMNitjPWogUkPXSHQdfKTudpBNEw5em5VeL1CcoNmmsU",
  "key1": "mVoyp6vckwLgKEUDRUBpRDagoRyD7d9yZEfALMTtp9zgu3kPc3jmUPMB3AGyyv2Fdvh9yiCePa92VvrPPNLJYkb",
  "key2": "4HB7aiPTs1n4cP9QcAkgHxWNEei64hnfKqxUJQc6eqcxrqwof4kU1jSCyz1pLCMTwVwQgzNHe2PC37gKCYL9Z5HC",
  "key3": "4BVn34KkrFDDapkSbbk39E3CJd5NwiDyqAx181FTBYBoaEFdk1M2pB48CTjxcY6H9KYmrbh36tfAYxGmFGovKuWG",
  "key4": "633i7S1qn3j782eTR9ttrQvS88rpG5ZwFeCA7U1qUgto99zYTnab2Szx5wPDv9aKEFSetxbsFxsomPjZc44rXp1y",
  "key5": "5xksm5ays1V2wfeVzMGCCf6QMCF3w31ne56ScajQPq8GGf75xEugAwcH8RBJzrzuC6pu16JsaHMR9T1fPY2BhhCn",
  "key6": "26AXPFp2ySw4FKVjrRmshgXXb2P41PSqiaX7Sd4ThgSFszQr1Sw2dUXRWDeQk3p4SyDK23TkcK43fJvUVM1Kf4BU",
  "key7": "HJqHNpyadBky7Aj6xptBfRxeb2Ujf2k6GsYBgZT1pkR2E6G8B1zgjdjDQqkd6D7vP3egHpgxb1HTzY9GvAMX5Ni",
  "key8": "3nbd8E5e9T5CRQDY6VtS34nsvWfV8JkW11eVo7Bf3A2VHu9JYijwhpJF2fNWXHm5xNrrbKimxZyB97RKKwWviuS",
  "key9": "3LgziGc6FJtFFd4JDNL9wfX7TNx626tupLbViFsbwgDQhHcpHBo8wgfuc4jXBGRVUKNrEZzqM5Mb53Hy1EjiJi51",
  "key10": "aUmPkT437wzmp3u7k1ueUNav7YiAkECowCAWk4tBpQ8NHt6kMzXvZmznJFXSMCppxipDSx87yLvpZMFaji5GcLJ",
  "key11": "4XoaSF5xFHVhn5aRDAUk2UhoS2kBuTjmEZ9ekDksj14vLSefzdohwhCivyfJxcE7PZkYLLTaRCAaAN7JU94dTydn",
  "key12": "2dWhLNh8JV5f1TS9NaL1Jtopp9LXbMrWHgSRR5AwzMk1Fhg9PhsFXLGKVm8VFv7TPrakk12aL352xhekAbkNVLaH",
  "key13": "5cpT8r4k4freYaSxA1fg1phYpYuogBFAsdC7X9KDcc6fzgcnEZ1xVpACXGHoiHqp4WMwe8CMqYdmx7CAV44pmsBp",
  "key14": "R5s3ksFqrYSp6H6wdZeUZo2nhSvJdoY8YCZWDm4BZ8bQzX4Lu4QVn31F3RgNxHz6jbu4qeSYYyitD1fvFtyecja",
  "key15": "62apixxVNe3uwYJsAft7iG4LWhthBLfd6YEWkUzaPFrgARZrfLRhqeoyvgTnv7CcDSWuNQV9Q8Wfj9cP5GVNbs5a",
  "key16": "Sg8LDeVkJzyWaUmzaPmo3a3PKZQCkysK9pxUiwoFGp8UTWcLtexfinhoV6McGhuyLMqn5dqigkYtQwTwKsJZnQt",
  "key17": "3FSSeR1YfRq7iLwcVnP2Rb8sYkdZKHAoLQK1T5STPoHq2H2TQytEbvCC7d8Gk4JtYnJCdHSz17BWM1y3kVmDfJc3",
  "key18": "2a6Fj9tdrGsgvsPNToNMrTPG4ccUrhGRUtnYJjoVaY1HfNDLfKw25RB1t4bJ4a872Toj39UCL2qRpZEw9vjbmmdp",
  "key19": "5Goddxq8PmwAi2CoZnEFfBY8FgfqurFk5ZuwP6dzC9MBTZEswLL9Z6Lf2KaGHUXHvRqMeU2jcsmE8ckmyVrKAQev",
  "key20": "avtLKYBxXXoramYrZCdnwJWSQStuyGgwzR2fyjjD996S5dQ15HH4sA7uWd9kYM97nh65wzA4qtUCwwibwFCGpvt",
  "key21": "3g4Dzig3ve3eJBXZHux5M4mCt3VqHrcAYYcD6bKUowKzwUn8mA89Z2L9n2WvbjYVZSxU3f9DdefhH5dycsRDBGef",
  "key22": "4or8xP2pTKuxCVUtBMBtjmt7RnyRdK4guau1QxyTa7Z5QnDaAW1o5SkeUVjs3ZgzSWVuh7LBnQjETq8NGMAPociW",
  "key23": "LCXbAqPMf4drFBA1QrFmqTr4GpUnW6SwkLrr1ADAQkmEXVAAGFxsuVbFd2mr6CHWD7C8SjtQuNXspKUDAiAc66c",
  "key24": "4FZq3W5mPfVEQk3FoLVNH9wB9A5RfjDRrBtzftmieEvyjCtvQepb4iSBMbQ3XWg7W4UAxRa9kzpBkgVEkSkQaYXn",
  "key25": "3ntskkdKiJVHQQsipQZ8SBh8KYiyQLcZywm4pcQGa6MrNjjzJCDQwJnGvVg1c3a7WQfxdBN3BkaHrtTEUbbmqGJb",
  "key26": "2ogkyzPAykWhtmoDNeHF9558UPRjdrFKoLpBn7mjm7EVXykacLSWtkHP9MTKqZydKzURzc4HRP7oV48G5NQqu9Mu",
  "key27": "2CqiRp7UboBPs7zSWxe2ycYXr5RgDrTs8AuxBmugCqpiC5ZkkikAcQQjE7phC8zAxf9MJaTKMojSyF9NWd8B6dLY",
  "key28": "3KVA6VKZRBr4eSwVaQEAXNxm6Gzp7DJB5TBH8supbirDghun8EfNS5hDJjMda81baGVc9bnQasLfeTojwPg3V7FC",
  "key29": "5YL1so3SAugoKBQLhu3iRiP5ZpSZ79NXtKJLkp1gQtdj3zY4vc6jaFtWN5jX7aeyUBxefDDWSKcvPYwB88oZHYEM",
  "key30": "2DWphj9Xa4w2tcYa3o2BaEGc79rvNNRcHqfi1PdHjh9uoX4SkhwgvQzzxm6U3ykgE5aivZk1EEQfQDFMNTBVQtfi",
  "key31": "zaDoPJMHzCHrbXtcZz5MVTrDNRUfS3hZgGQC8DFYbvpVCYJ43iPupzD8i4df2eofHtY8LefesvbmnMxdsqb1zAp",
  "key32": "2BASuDgpMuVYmNe7Va9N6dfbFsBQdvdhS8k8SCYEj3HCPJm3wnvjSbEZoCBDzmYgU18Rkxy4zqBHEevEx4dGsN8i",
  "key33": "5DsFx8PW325NFdwoqaF4itMjkanKmLRAGn6pxZcYLZFkna7KLEJE2PzKgB3qE4i12T8NUTXC3vX4CRsuB7BWHFjK",
  "key34": "4pbRE3qEWs9jb3GGKYDnafPJC3eSQxCyFxLPrtJ1pZ2ADAHHzmmz1qsdJ35topGZJmaA9bWQm1QLnqVRPFJni827",
  "key35": "3Ws8JsBgTTDSg8KN9u5cBV5AJGUAvuEE4KaYHhM5DyUe22W5bEGafLDPLv9oTyEFbxckgDFqYhMFroNDwsa2kmej",
  "key36": "dXx88rom1AAVWB4ARh8aLDujJExdmUR2W6mFq2CMBaWdFyHMMTCko2Q1AfatSdeue8mPboLkJiLN4zjgycmShcZ",
  "key37": "2gMjyMvfB4uGpgvEDRNhWnPTm9aQDGs7TvekUYxAAABYix6sut89Gho9uLZHpDSxi4aSGoP57yqwDNtaY4ETBBKi",
  "key38": "3zWd88i9b8G8CZUAKZYKi8ApWn7RAL9R4kH5Ffuq8UPmwqCYSV9hZA6BDRaTe3GmMqDVGKbHgMBuYognw5qiWMVS",
  "key39": "o7r4Qi8WE93T4soD7cX4t55MfqKqPQ7wtSwxDGZHVUdfEwxfjyCbmZT9ViVBmSqubmgYjz6cE4jvTsSNFjTEdBG",
  "key40": "3NBroyy6xduKBgkty3yBwGsNJMbiaagn5ec9nT3eJqf9G5ZCL8K1oLvnXYK5drsSCExnyMMWBcJBwokCm5TQg4sG",
  "key41": "fEae55mx4YSb3WutdEeavtA2f77hS9JLYaZxy9Zi7Ms7RN57tgvnpgUq7eDk6sPoNwp4ZoeGxL4sAwdtPyat8q7"
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
