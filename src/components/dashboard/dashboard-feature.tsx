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
    "54yJCd1ZM4bAX2kp2CyzhqxxQ4orLBhPxZDqtEpjndsbMV6TTUep9d6MKmVpQE3PR8aqmunELj52CPK6MERXV9pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58KsWaRREzdVjoztE9EdqYV2LKWYEGX85BJZucUDcpCLBHSqBN2r1r5XoUjQutn7CCSjuWVXwhgS5e76qeSd45Ui",
  "key1": "5LLGPb6JoJXT7Ph5ESYaL3os1oxYG5xqRu7VaA3SL4jtftuZgzo8cuDiimZUMHZmDUi6t1FpTYWfq6PTxKc4tMUH",
  "key2": "4PbJvy1y1Q2f3GXXtMfq6nExcpo6KT8zKSFKrSduecTnVTRJUTsj6BpmB8MztgfZ5fFhn56uwqoHTFM2tv6z32PP",
  "key3": "2ZnAzC4177jSiKSbBg1LjLpdUg7YqN17GjTVQfHfNG1uAhFyMNq2kNvJJoNj25KTppcJDxYfpk3hgTyhkqBJBWZR",
  "key4": "2YKfLyarnrNvdGqAd54vN9vQWi7cpG1vnYJtCZNSWTC5UATiGiUE91QLD8TFcA3JF79GFo7mehP44eyKjAnK5Qdt",
  "key5": "2y8c3aVgkGxQSxB5R83NUDYCxcv4Se9LwKadb6uZNTtMnnDfP678M3VwAph9jivHwYFUbJ5n2ZNnxZFs4D7HryTc",
  "key6": "2KB1Q9mgwJiQYRSPepLiCNAW6zynwYFHsvnYPcaBsKLQZtJkTC5kBxx9YnhwxajGUMAQf7cbhGhmBULHecNJ6Ezg",
  "key7": "x17iLMarwMVPS16ozY3ksKh4WqadgAKTD4nXZnFpd1YGL3NT8Qf1AcKNq5YVbLQnt5KebEBzv4iVVTmKyGMH9ie",
  "key8": "2vwGUcANW7j2BNYHpojKGVGTa8qSgJBM4R55cAGUG8gePZF7hqGMr5VXLdjWF2xtzjaPjGtLZPzxJHVmpAKkwL46",
  "key9": "41ynVTUfW4R4V4SL9W3299bPajMwzoJ1UVtBmdt3cHBfHrj1JeRZAfnSujbDpedi2NXsc6FMaoKpEfzEo9FX4Wpv",
  "key10": "2D8uxQm1ZzdPBkZg3CxFX9CnjA6vbVX1W6DHSdKezshZ1qEbzpapToDxLQBXJECbXqW7EJqqN99Bf8EVuTB8H5a2",
  "key11": "mky8m7n5z8odTrGakP6hw6bubuDP8re3NGLGz5qnahenx3QXj9Wpd2BvQgE8mttJuXSoA4KuJghfQgAyeTWHXSi",
  "key12": "51DfRT3F1t65KoKwn1tb94e8ojaHZAJ84FRfh8QJzsDieoN71HLzcCdKB86BptCq3i3L2dKY1tFsiZUzJxmHLPJZ",
  "key13": "26K6QEkorzazwuGuRj28XwLnMdZfQs2mfPF2sMGHDswCF7ZkrMdunAbFrxVRwhDEyudBwPVGL2gJ8meu3VXuCLzD",
  "key14": "2Q3UxuH55AxywVjhemd4HqyfXmYBCquyBz8xjEangRa6QXfrNgDkcd2EfGHaTgKvN9XddJrocrmFkJ7RWFESUDFJ",
  "key15": "4WDbthJXWAQKMHhdDSNiGMoWuNuK87JpqV6demx6kHRCohB5qUMqcde7YNJ2tNhDqXXdTfTUufqYRW6oC1E69Jn6",
  "key16": "26pKvTbWt5Rf1RtEDy7w9KTNKp3kwMvhzDcsFW9H6EJNSYy61WZ87BJqefuyrCHyWLvVpsT2z7HsqzrhzD5hre4T",
  "key17": "3rqGPuE6gvEdXDF2hD1Cu2omCD11YxRDjZMezTgDG7aTYxKFkUm7NacRjvSSe8ageX46ZJYKs2H6rT7vNZKDV6di",
  "key18": "jn3TAt12GXgoQDBzG9Hpkba3FnBUjwag3qg944sypVLsqjj7qTGCmv8gLH5DX9K4rJ4dnpAmVdKEwiNJ3XRnCdD",
  "key19": "57gKSyc85c3c2rKgaLAWHg2Ysx1WaMFZLt4YDt2D2tgCKvGoQHrSSbJchFsq9NoXdRzkxSy95Qg6dFjG23vknPMN",
  "key20": "52xz7e5rf5McjxCNAHXfHagC9VnkZRSX9zqDzHX1ZSLKVdsfmksYMWCg4JfHRd14NMraLBhj7Lq8LHHoFsdrPnpN",
  "key21": "2WvS6oJMDoyn5csxDrcJQPiEidwa2ShtV1buSg26UGuN5TQVn8qB1rEGzvspEK8pqoN7HqqkmnkeQgdtng56zEVo",
  "key22": "2odPmAVT5zcLdGR7B682SvV5vv72Gi9ZeYCzc4vPSummvxFWzaSjsNdEeTu6y3oMp1ipfqEubmui5tKsJYyc3Afh",
  "key23": "GbGapsCpkLvpcjCqHmbtVqsV1Vkh3rzqYknJ3kJTNFo6CAkL4xLMxA4QVgtxA97n61HNKGJhQL4jAnhfEVT9sXR",
  "key24": "2DbHckB5sMdGiktNt4RkE7YTYdNTZNALeuVrEXAcghy9ugvFWzHbFYWJdLU5iWet2N8jn4z2VCdutLt4DckuiSKe"
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
