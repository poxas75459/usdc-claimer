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
    "5RngzcDvhkiEc38w4FBk69otGfQkY347ECg6JrcueCRj83xeGUu58RuGrqea2bnoJrB96L2AtjUD837ToVQ4iTGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k1AM5bboVkLtsxFdKj8CdiF1to8HiRa47GZQDqpt3k45THQz3eXhs1oEGCgMsDjq3KKPATxxyy5DgqaWJq2V7Jw",
  "key1": "Dvd2mNRm3PGTecF6ZJdkNrXZvgLFkH9qGoAWX7xvsC8jkktRiwzHckNZbfXNFj4rpcckRvCPSfedQEMDgB9cgWB",
  "key2": "ktfr17z97vtYtFJqWYiiRHyrnCcxHdHeM9fcRNp8SxcYHSsZ2Et8V79WPcpmnskJoDp5gS2MqHUs7GikBxi5kBD",
  "key3": "4mx6EvyGraugMmDwrmfjAqwRQEHCUD9XDT44Zs3XEJGRN1q11wt7nJo7k1aLpZ4Sw7wugjAoHc9EcgF4bvFfWkDL",
  "key4": "3LKZcsixgryHWgNXfJ6zrNEokNMqA8qcjediRZP5s2yLJfNFhpXVEV6nyMNjHXsHTdrHPK44Dgc8oHkeMX2CtEgy",
  "key5": "6ebAgavaWh7P72DQaxrnZ6kFmeLZry7xyJPcYSX3HkpDhbe1TytR9yPfUueTroAhdAgJU6itSsizrQrkwotS7AG",
  "key6": "3BiWYWpSNLdRe2sCJzG4Qqya8xxHLTHWj7RiVSKawA1W9M2PtmVXqHCW83CYabbDKf2BZkjrs7K3bNAP3YMH1Pqe",
  "key7": "5q9gmwpJGVttmCLDsQJdWfsyairXabdqUiFE4zJ9FLoJHaBgGQi42WEYikV6J56eyBAmfmKon34DUHoMK6iyWMRL",
  "key8": "3WGnFVAV5cSjyDwDeiaUNnDUKRnrZM1Q1wwP5xjadPWup5ozzzbwrcL6XTNp24h4shCjDBapYSYZYemR29eXCani",
  "key9": "4twZYf5EFNPcNcvQYAvjekeUCtnx3kuztE6AQ13dd4VUvKcPm8jyipXw7qGf2JFPsEBcxCFoXf3zvekzv6xqbadz",
  "key10": "2jLxA7BVfXfLADBHPtRxmWRsD84pYh2ChL1wubhLmpEqTumo6SHoc2AnGeqa8kx2cL8jTSGRajgUgnRx2WQXGb83",
  "key11": "e12GJUTg3okirwjBhFQXXQg5hcvk3NqfcadaGyJi5CiMB7fEmfhi3dmiPWjHMTg6Cx3ZQvNvKzuy8A2ncBRwYbT",
  "key12": "3mTJxXoRqEToEn7k4bLD2f6pkqkKko5EaKkYpb7JJ91UQd9eZavucsYZK3qjAMJhs6US6ebkyfrSUE5YeKG95k8D",
  "key13": "2Lr4n17jj9DCQh9iUSYMt7Rs2eHQA1hNpRX8BaDwCc5EeVLRNPfQJCzP9JyB2wsjqQ9Nrvs64Dm2RKCokVocpf6x",
  "key14": "2Gy1BJgmRHzLpoq9cR83x8Pmc5FGKeR18t8tY7gugXNTjMycmiEch6Bt6n1tLs62dAAQPVanytx9zm5wRmVXqziS",
  "key15": "2DncUoeReRYA7XWzixDJoDvJPncpQD7WgsoCqCfE6hPPC1KbYXaR81UZi72Xfep91N4yC3eKanyXHu8nPZDkeWSR",
  "key16": "3fFZiNsTxERwoEnaFa8iFZeEREQuCenax4N5meYicmCiCyLgmbPbwCqMqPscjgACrQCZHoPLugGRZamQCwkXVgKS",
  "key17": "33RMNXKc1hozh2ANubvvuG5Nbmdxn9YZPBcNf4yNpcaKEsmi7pxEvCHLG2C2tJqcE6TqP8DgepTeFvxcUMiho8hz",
  "key18": "mRvbZKrvxA5eE4FVNcgVZTdVEMu6fymw76KCchucRpW7nKo7U4RJaRzoCcAqbim6zvgAWfViyWPrhHa5HJZmaFG",
  "key19": "2yCDbJhqMk7udnFT1yfAtvKCE8wzYRCSB8mAdy3oyAQTGBC1ExnrZV5Lx2ftYVRJQQ3cwLrbzRSyU4g1bLnQHobg",
  "key20": "3E6hQnAUwzDmrpsDQwBBRVpY1QfirdwtStRWdWsQwfxvKqeZvKoxx7Jyc4uczU9cn2kiZQaED8VVJRyY6Y6YA8Uv",
  "key21": "5kuonZxLrUL1zL2uCn2ADj2kmYJhGS5zDVqmfp2wcKLvatZUT3r2MTiRTi5TKA1Y27rV3tqstsd54XKUjrKReqmy",
  "key22": "2o33YzKArwkwkafiN2roTJJxYyvpCkxZnKKNhcwEXnuvppbDjBKUisw2529mRAP1Pp4T8t7cej5Zak4dEQKDx7gF",
  "key23": "2CgNVWdgNDCgj69GTDmzP3nMx6Cg3WCQFxDn6hAcVHuGCwaGvZzw2Eofru5Eg2kMhJe7iE6LFf4VNEH6Hq5QFNN8",
  "key24": "2mV39oyQk4HLa5oYcvdZECTrnTJdkgqBwheLri82QKjpf4Hw26DiJXQskZdbABQe93hGiU85jGzrkyo3rCtN1Z9K",
  "key25": "5HmV6DceMHTAKsfQDMRVo2XsCDroTsqfuupUWeSPESu7Aadp6nS8KkDRDZm8647z6KiGyZr1cA8gZ9yKTEzuAYmY",
  "key26": "5uRxen8HVrLfuL6yxWTk7uFnuxVtrCi3NiunCKLeZAMzZWaBsUJJzAjTzrde8RHnHn1FnD9kxcmysn2HZRE2Ac1E",
  "key27": "28XyKozSe3DzvKkSuh33qYjdWHYLXhHevqcW4QMf4Zu34SyUHHpoqZY22Mc4ZJaLZKFUc7cU8QZPLSoGVBxR8Ks2",
  "key28": "5e1QKoKyamAzcZ41ZpUFdPMztRVptsJ5Bd1yzx5Zop7t5TMDnErbZnM6ch1awG5SNu2BaCM7Wjcu5NjvtZvsTGpC",
  "key29": "5rdBX6oaT6UyqNmrNRUP4BPUzGN5NyCemap5mjqj4JzftuDzLb1pZyrtzbdojjitRyscNCy2Z4NVPUam87piwtdo",
  "key30": "2uT9gpNevDtnehtUKPzMSuSqmfKGuoXxzFaYKUuy2X1K9pyWFryA5rdTU8aRmR3TzPRsTaEr7WnbabwTQ1axJunc",
  "key31": "2ctNiQYGhpvyi884zJWPKvUrSBT9dVxQvtZ1mSSud9VHBPynxuN4ywX4zX3MA6pZifPDhfEmvB2yop9rBozBzZae"
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
