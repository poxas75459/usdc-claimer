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
    "TTNqfd9RZdqHSxhn5JTPnLZEPCZ68R3Su8GEhLuRyaxHPEVn2EX6LAaTRatD15ztGRLKP5T7wnw1GCiudAjvuXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3pNsBRNzVe5o6cnFnhionJEEmEdiNXrdN3zi3iTxnTnRfnB5LEMpHZTEWRxJ5hBMDyxQZYJhCHkHiEBAGCYZqt",
  "key1": "2XsHnpmy7qy4DpSkyHmyQ8QkCu2oU9QQVzcNTTiNX1T4o5wgwJ4C8CvRRumH4VczQ39VfwuzFrNsEbTXan2QVWDX",
  "key2": "5eHH139EMee7G7Jqw5ofAA87B6KptuVcUKGKug7Vtmy1JisfD42VovLhLcCEn6x3GJAxgG78ZspHGvotUwuTQv7g",
  "key3": "sWERtNiZu3sX8GSDHjYp9bmkitDVwnj6psvvRxDDFBHWsJSWBr2eYRWh6Ytfsnk9t6Ym8jWG2aes5PzXFTFyS3P",
  "key4": "5q6sRBtD8gwa9MZJZwGErBo4ANu9YMADZ3KurqQKgGWJcn6FizzPB77rTE2knzkT35TmnGGPQBrF7WrFHWm6v1cg",
  "key5": "5RgW1pdEoDvPau1nedtZZrX4WsX7EJwwuDBpvHMWF6ET27aKw5HDq3cyEMBvTswTQfAr6mvafBzhsgxGZsRFMHp5",
  "key6": "4XdvrKFuY5TRpJwEgRu8jo7EKig5XfSkmu2PstZuV39HrxzecuWa1D5LsPkP14ykozWEQvKo16Z2C7op3fYG8ZK3",
  "key7": "p69dfe5iU6p7DiBQjZJRzHpvS15w9887HZon9zFHWcC38YrCWYRFZjKaP9AZ2aghJwt44Q2nR9whpqkdmms74aM",
  "key8": "HcUbJuaGNevuxyuvynfHmJygPDaeSVBUQVKUWArxah1mYhhGn9iFKHQD5uMLVfmX63ayP52sfHgqsft8zcepGeT",
  "key9": "4DFG1VQ9wCDAXk4gHJeofaBjWHRY12HSccso2Sw9CgB5SdnZtjdaGbpZ9Dc7b1svkrUoG48nShkonqNJd5LMbMSJ",
  "key10": "4TzTWxP67bJUYojR2coNLE3GdmMTsHf62CS6VHB2sviEwAvHi98bGTULA93YbFi8mTxY7xq4Wpg8b5JvmB8yYTV3",
  "key11": "3XREQN4MKYgYqkH5p4dnTuHA7VGBHwon4xwVBMLWk8oPnfNfbtFm6iVA2VYe4fUvX48UvSgFztcVSmryt11KUHFE",
  "key12": "3JVTg8WxvRt7rz3Z6scDjfnEDrWDNQbpS8CVk33PFSjhmzzVPErnRMRTr9Rimpqq3HLoVABe78A2tG1CACTfNxts",
  "key13": "5u9L1SjmhTV76vdxaxiShvgQG2DCJbgNKL292DtbDLV5tFiaKsyo8ufafyT2o2AwP83e25xND7H2tGVthgGyKnUT",
  "key14": "2JPoWU3gPWJ2mBPSLgJAtrkCJZXYsaZ7pMfA1Xb3pFahC4LmtvhLkP8qFdCCjapyADdRqMt7taqTpMtibxTv3LUQ",
  "key15": "614jQE4XmY38E9XHkCuFiowZykE5cZebjJzYpxjuidnCw5GwytjWGbG2pJhHivMGLD7caPfMPf76vpHUJW4GPJNC",
  "key16": "23b6ck7seLNV52VALje87hWXTVqWECoZffp5eiCkA6eKmgTJByxp39VazWMqAcB7DKiizk7oPZf8VJQpCnJFLgQy",
  "key17": "THsJyWZcaXjjS5jZM5pbdcag9FRodDtnFqgRpnkk42MptaqXje7L8rb7YQjrBX8yPtC4Asj6Fur1pC1oE8cqFft",
  "key18": "4DR1hzdDFnr4nEty2WoyJ1xsuuaNa77zQWjFoxyP5USoDTMDwY4VpSt8q3j7r4aPdH5xx148gBcte2JtASzcJT64",
  "key19": "2kVU7wFmpJbwa1ZVPt3CrdM5yGaHeaPEufT1x2q5zvgiTVRir6PXVzymhQhFtuLyrkhMVS6vBcWBDMcYibLqKQLi",
  "key20": "23wHbUJo74PxtdjMyb7C2DSGfwEefeYTyYGVrSkfjXncDh3Tbut9r5Bp7qaRRd271Y4GzTfbAnmNFSXsho3NKpNd",
  "key21": "62CUAWSh57j8kwiVkAA1RjSetH19mujztSMuT8RVwn45yzoiz2CttXqJhRkep6uYeDSrLf3XTiKtCDxgRD5x3qPw",
  "key22": "rRcvL2ydctBDHVWQATAWtNofZeHdk1swmVC6fyc81b2fronawMzhnxSPzevjb79eTUhoSHjmC53MFXynTjVPK3P",
  "key23": "4iM2uHu64SLJTFZhDGZorTv69F28PjzJRKQrbNi22THhSZ47ooNogiwKrRrxhc3uSUpaq3Csfnx6VDkfRVCTom3e",
  "key24": "362GJMRzV9UGSoGS3bsZWJ743RJvtQhtgYx5zrtuN6mc845B9YUQ1FUkqZHAzGnZ1QpXZddSVmLbfkU1bPaZoE5o",
  "key25": "5nYrQ3bthWLggRpRnYe7Wz65aoJyLJqTQ2vdAPYLuo5y3qAjyEti7gcVY7Pvm7wrWVNKrC1LEZcxBjMqWA5FoDFK",
  "key26": "RgJ14S2XUXxrdpabxirfDxVxoNr4qT43FmViAits5AWbj1dBDFqiwcVtj2gaN9t3pNkNJ5NL2p3Ap4FCvrr8cJF",
  "key27": "2u4nvWscHMGA3fbRad1GU86qtRQHYEWS5T119XXbwQcp6KEScr2cCxpZVTTRDnY7BFPV7AieUJrujG8bq625DCJq",
  "key28": "5GGSkgNmrMv3Z2GtefnKFeLYeXKVtV9dTE7rXbC5mRFic3T1GM6y4Xnbo7ViF63cXbgXmr8gq146HBWMA8mHUZd9",
  "key29": "JrdpEoRLT1xJoqajqEJwxorjQJQAxu3VhWPzDoY1BH8UTrVySBdLRionJKAncgzPBdcvZCzLh26HX2uu9wybQ2E",
  "key30": "3amV68yTYGtRT9HxZP26q7uYmvELtKKGhYXVbvCJvwxcLEWepgiXxVxANwBgaAkPthZ2Sijj1TAGWdd5yv6vSc75",
  "key31": "2k666FURyYhYnX6bBsWoGjb5SUKa5SrFtTaSKB7Nu8j3GMaseytnEyTA51P4gijJipN9aHzpvnkeiX4XzQzBWdrA",
  "key32": "5GNHdN68vPKqcAsEyXX3My1V5YEzKTnfJWunpAhEVCzt9fHhRoWC8VgsBLi1j2AMHs2hKZQoSKTG2Bj8Njma9ojg",
  "key33": "29TqchmXaHqyRRYLTgAE3mLCGaPxdD5NfoRaZZtwmhvXLJCaYoW9iYii9EAqpVfaZgCjszqT2jLi64F1sKvFx9X9",
  "key34": "5oAvj32MTQyvfk7uyVJVNBZQwwRYhmqaU9mwKRcRV17mMEek1HvTD6Nj4DweVvBhkvpLcDjktUN8aJm6NmM9dKzp",
  "key35": "3Uge6NSE1NxAMjFSxFetSbYY37Vmdb9CJ7BvDZ14SMqrp7DgxRJeXesDo5uJNWCBbfZ6j1Td7hhAAkCtAj1GSB6y",
  "key36": "25cChg26J4F74Q2ttGkG5J3ZdKurFczXhVuUq6f183ptT6vzmHWMpGwqUUSBM4AJggTqfFhAJmXkAVJwCAyYkeQN",
  "key37": "2kGoEQjg5M2HAg5AH6Loky4hvWkMEjn98a2KmSs3E4oTecup7oZMBwNcahcUb9htteWQ9ntUfMiR5JiNGw3T1ci7",
  "key38": "3T1CWMetBMWcZcnCvcFxK45EnS38nVUvMu3ZJqKsKt58ArWPt3A7E3K937uz3yJu6Jqsm75u6pv8T14uNPRZFPZ4",
  "key39": "wqYcBxyDMFzwxTRW4bn9631YxUPwFUtbsQHpankPsWR9qznCbSxAfX4sdphrjnH1o2CpdpYxYz1s9beY8TgRinK",
  "key40": "5unLxLcGPUKyMcCxUL3yXkoV6Z26g8Y4xnKLNpYufitvQcU8yLn1x1LCq1fGTYuhQUkHCpctcWKNKr77YzNA7GfU",
  "key41": "5bHAVy8orZx7bg6KiPYZtJhiJELrnmzQwdVwPKLuN3pQzj1SaTxnzRAbesZ1HDxs5a6btWfVqkuvbrxz1Boo1GjC",
  "key42": "5Jac5EwWPUbZsS78f6bSbzTKyY4LByFqeCe5Zpat4ZRbKV84n3mnYtA7Ky92w1aGsZUdacnRre7i2YTYu4475GMh",
  "key43": "3eHbyvwKs6GMus1KD9rYVjJwH2mSCGAsskb4eUzVzKFEDGe13vJU1XeA9yrJa2XMNmoNomzLXoteaQxsEHZe1EC6",
  "key44": "5cWYxC6geaHd9M9G3WA5PjSKXVA5tsDdW4FNKhdDdJgqjJvUUoq3CcEB8S55AyxzHDJoYATPFfMvDWux9SkEntpT",
  "key45": "4ha5juTYr1thNYE17dsqAb4BfBsxfBdQtTfZFwZ78kuh49agbzshNApTJ6QgCmhKtCAXy5Xx23bdsX6oy5VKnTYi",
  "key46": "3EFAR1fqV9x9vFnogYYdQKFwcsSQgu1uKPhDwzC9AhwoNkgdYFKhPe3Jnv8ESvczpygA5ARRVeUcUzdVNeNYMoce",
  "key47": "jwJPeNnoyW6Dn3SGsJ7dG6KNVbBNqmBGaPxiFNeWfF4XYAWrmhrC9ufNXFjRyFN9MuoGSACxBL9GvRUheVMQ4Un",
  "key48": "4PHMMMMNCUeTghgqi8vrjDQXs3G38hDNJvovbXt9ENBWpFdyPohgpGjWk9ypGSAkKHZU7XCDuwVCwQbLLBt9hUdi",
  "key49": "5V24pdJY7aHEhkjUQFfLduKsh7xiuQs23QExfEZCpYAVifp6oZzdLwCak5Frdo3gGXz3vd8iLQMUdozJqX24qEfy"
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
