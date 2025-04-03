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
    "2o8S1rb556gw331YNKLpoqAwi96aZ5KcR58v4Pe8AVAoxzfxSvJ35CPAG4R9QNTBMrRtknbkqVUv4NY9BejxiRyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkcbPGkacyvunS5xhBLtNrQ8gu9LhTMm9i6xqjN3acRCjzaTq6SF4hcQdQViKB2Apco3YZ5rgDSBT5FSmUvCrPm",
  "key1": "2QsWmjLoDCnJHNLwbwbp5ZRZjA5gdfLsRU1CApnCu7bK91DLiKMyGnroUo6XzxDXebzytFFpTipjrKFjWFGgBbuc",
  "key2": "3rVHYxtNzZHm7CoLxcs95Y1fhW2YqgzbjMkR4Yech1mgqvBdPrhZEdcxj5s2MBTMZL4FHCDSTDea4Vz13goG2oaB",
  "key3": "2oGDQyTBq27UfNYZmcu4FjNsZ9cJR3jtrvvQTZKaHA9Z3iD6Z6vsW2ccCgXikP4cHwiR4Qt3mw4hX3mufY59XZwa",
  "key4": "3wXD49Nw593gQFw3SoEe6PmtWFiLgUzcfk5U9NeUdBubVmajzXSa5TiCxxNHqqjFZkDydLfQvuUrVfJVJwfYj5dy",
  "key5": "cP1xKibJgJaHViVgWNVJtNff7mY4owwXrix4LYBiNJBLBkSYywMZRUhEuwpAQ2ziYJwKzH6aj7uz6vogB7oDkiV",
  "key6": "JEPDwM5edb4KLeQ3gRiKGE8dTZUXWWzGS8ittXvsa6CueahHpnNWEzumANneCf5ZBJPaDxV3Ys8uc28DZL9Srkd",
  "key7": "2EsHxhtKu5w4fAtyWjDqwPtJRjfcsKuM6hycBahAWe8prWCSRbcpCdPbwfFKuWKS2GnK8SQzJhdRs4mPd1HaRV3F",
  "key8": "2P7n3F9mKPutfn8dFZN13rNaZtZLUMRAixJbrjzwRc54gVoHzSVQ6J3nGFDsD3VfrgYYM65tbdCNxzhaiHT2GuDh",
  "key9": "56m8gAKJDgrzWRrbivs1FLu8ayM73EXBWewK99LFPiShTkNtHJ9QUNUiyr3aThg8ZmXCYkSg45CtZxzCYCYFoQRL",
  "key10": "3wLfSoDm89y2MhT6fRqTLxdHrS4UmPNeuMGSecic8iRGKJBWQ7VvhVFhEYqRtTAhW5bWZCyg4Bitkdi2MiJumkRL",
  "key11": "2HeUofR1Vv4GUsfA2WyN7yTQaAW5VQcv53mfYpTzD9h7avbgZJMfSoMcJdzPDbatKRoGixVBKMewFk4b8YnbvSpo",
  "key12": "3B2rAZjRXkuo5oUkdbVuZi9w3awwT89R8mEi3cphEXZe5PD41h3PQuJNh3YemAzV7S6HoapS4aSfmhYuUCa5cw9F",
  "key13": "4Z5Dc9P6pAvfRV7aDoVcMxn3U1dQnd916RMdY8EiaCzWAq4hxdma6V7eF3c3apKPYoa7cdhVJ21xUDc6UzNHkUKd",
  "key14": "3eVwpojgJ4mKqVXdNjwE5uaJffGHG7GNrpTr8mQoc3HgqHj2NQueCt8xEJmVVXgrmRg4yeKJ5jfBcy4kTxbVxbLs",
  "key15": "3JPm35buKNBEM877sihAuQ4ee7zhEJMPEEQjYVfdfeLhcsqSzAfZjCFiEiTdSL7eGXXFqoH8qfS4VDCNCViHCGRi",
  "key16": "4Gwj7onmzniTMt7e2rfKE6N1si5gJqT6J19dj8n3wEZ94T4SdZicDn6HPCBiTremtiGHSpk3TpQWgbpXTtoEziEb",
  "key17": "5mJgwBeNW2Re3Nve31yXRDfRXw1aP1GLXBgiuHxdYzc6ErBtvVbjqfQrsochEX4WEJ433wsjZye7Ht1chhjtve3H",
  "key18": "4fEqv65wADHe2KMjYKjcLkDkwS2f9Xj8ye5zDqaCyJkmeBMDao5Mtx2nQ1MYfnxuXrxRFBuDkRsh2btxraiFGJ3r",
  "key19": "3bPBTiTsAGRRtZAk2NrodPvNP3jKqNTE5jpqHxRBj4fw1wfoEJZeZbMn2Wi9yPgcLNHrgz6Rz4EdTm9BXGyaZzC6",
  "key20": "2oeE3JAUv8q8zk4sDaoNj7fyNAE5kVvsaeRYmQ2dUQrFkJ7KaqHTvcJFoAhYbdNpLgkWtoiLfw6NL1M14uGWa58g",
  "key21": "5DdGhhdE3e6z1J9dYFvQa597bUUQS4YkorRzD6CajC9x5UgtxeEuNdPUbbdck2sjujxpvr6VY8579RBxTMPNWJEj",
  "key22": "2JLRCPT4aUQ7BNPUj7cMGLsstrxmBtbYT8NA17FfnLwYhy1fyLMzPK9eg3ArYyJ68PbXJiNkC7kSHM9baKDnb9ai",
  "key23": "3cbRrPfuMX42cMRBzT2GpaDLuFdHdGzpCkZ2GbkuAk2quxebwvmHdxphmpFsEfUXHBGCFNt5Zj1E3oYY8VuxjLFw",
  "key24": "6252h6cxzqJJXncG5Vzd2qbYe9Ha63aum8mtM5jLsc6nF3UNSfEDZUrhPPFurAuzYJrLJygz1x1GXBh7dG7V337N",
  "key25": "4L31ibYRNwSZQcNuyo4rkrydELoHFWHL8XH2S5coFsfDGCdwtNBNv8ocyuxHS7H7kVaB6tejv8k6Ag2rcmMbvrqt",
  "key26": "5ZNGN4Ybb6mmdoELttCScXscCBnsoYSapJfHoeBtJcyWFMfKjGETkeGiREDRZyAS8WoZVogN9aQPDiEQWpr9FT7Q",
  "key27": "24wroi9cW13KywACDRT1AZp6SnVD2V1Y7juUvqxKo3yQiTgi1cWr3zWKcetHNDB1ubfiRAWKP9cZyeCJxkKeWqfK",
  "key28": "H6kf8Gfn6F528eHes9EACucmUnEMEZsgodzkC7iXw7kJ9DPwcp7LeHMbP4kSHyx5k2EKoE9hByRVznT6zfkD2kK",
  "key29": "5NXbbxNqFi6A1kC1iXAqa4LbASB8APksD8hgHRChn1C3z4pZ9Z9LxiUNzTkUDXEwCdauSzB9GQBV5VVZTpmRe9eC",
  "key30": "5rHQPstDT9hL1MehoaN6X61Pg8cokgh8MWArdFhmU2yEmDtr2zVmr1cFFw1qpspD9DvGeU8ZZzw8pFU4jCcd8k82",
  "key31": "63G2bpj8TkJSmnxrXoUQ5EBqZ5wzJBHt9BdF4pj9LuLHBdGYTTvRyQMjzG6gn8VqUuENw6ivNvoUR5u7NxgdHLP3",
  "key32": "52PjK2555bY5ofAnCYM78ugMaMFiNpqsQBVtyE4SLsgKCDNu6riEsg7BCoC99XseVDF3YyuShhmg2oj1CfQYtEuY",
  "key33": "2JkzbSMo4i8mb58J5usibb8wxpeMP5JjQs3M4ReB9eDJjxbLsZQGLMT3se15oqr7aLEsSPVEng4sYUsUT9yEPXPd",
  "key34": "RbS8n4fjoVtceVqPjZxs3vip7PQnLr9nXi4UGWkhZEAkAM3EfFUT6L4oaQyP6Gr5RxUxRdVgU8WYvNJq75Dan1r",
  "key35": "AoGsPPKnqGwHTsiC2tt6Lq3F196PHjKDus9isnTe1bKTBjyCq7ppa9wZCatsmWTZSd7bDqpDDbYHdhUzcR2afRm",
  "key36": "5Dj279fCzJCRh9qZSDqxHDakknU4mg4Whm9PsoJXECuoKiGGPzco9dvuwjakua5nhezW2gogu6a6CXDGEgk2bgZN",
  "key37": "4f8nD6ZHTijcnyUN8EZDEirmiQhyhgAoNGpLuaaspKBr4NQ8DrruJGo81EkiXSUBGqR2rW4meSHpg3WkhdS1R7Qb",
  "key38": "4sZhtH4iEQVYPqRjwBbnLdUQL6vuYJpxPdAd8eJovaHhniBkkcob7wdP4BMai4Tv48Us78oGWG39FBu49LERmdui",
  "key39": "5MRN79u42ZTnTGkh1P2o5n743teahchy4xn6dF6yZKxFnntyjsV3Wjn9rFubfeHzTHjj5aWtSoebnP3tahXJDMSb"
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
