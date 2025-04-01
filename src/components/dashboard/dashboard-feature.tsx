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
    "2GUzgXAz95YW9yqZXuks2y7NPHpApsaMATRcdaNX3jgmbES1URwVKkywTN32PmkrQDs6s4h1cF84WFGoXMCF9bkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47w2pyc7UpcRguvPA5ANfYgwPzPgV8fisS6L2M9EfFovUeCQjKwLFqrmDKq9Ys7XF9arJR9x4gHNrvaXUSz4Wjkd",
  "key1": "2PcbVaCgbbuCZWyT1oBiCyr35TnJkUiNYbyeEn2GezSu3wuNLdi3YLYKurxP1uNyp4EqKwZ4AJMB3R55ffNMYU4G",
  "key2": "5XsuoaZkpY8Mm5sRNfGCDTbYe3od2zDDDeX55Ez34f67KZQJHdA8FzjVYkMU6unNrqvxL4cks2bvnVcGozfW25KJ",
  "key3": "3kBPuykovjTK6Ut2Q24kN4iswg6oZvsoKCYKwNGL6MPgT2Pef5dNECLK3MPUazWQsaui9R5cUMdA3fbDsHp5yub9",
  "key4": "3L226kQW7K6q5iUyXTGhy3BNaVAJqvFuFEc2v7VWqdk1bwD8ZdtczczgB2BYL8XsnLh5SEtVyYP5gaeYsB8KWSoV",
  "key5": "49pFwgQJU8FCBgh4bFUPHHQtfKFyK5AoKNyUSvuRajCT8pSDhAEzHE7A5A8FvJLL64HcGV3gGXexTtAmtjJ4vQer",
  "key6": "36ctA8QbLHN1nL7Y3oL4oFprZmm6m9tUHUk8Xg5TpPgUY4WXeWZsXqm2x3EYucFQivU93E72uQvNe7nprhbmR1PD",
  "key7": "9pkhzKqYEZknbb4nc7nrXvBU34xWwjGVT4c3gmTvNenTovEDEBQ1PKdrVBzH8XweztHkV5xW1dcCEW7WziNPsJM",
  "key8": "2AQrHrmEH4WxVKYaVDXmhHch4e4GkrAmDpPfnWyJR8FDAUVFvvHa97MzSA3TYMLN1rikNoyAauamKmRbEfNtGVAf",
  "key9": "4tvBKhFv4rMkrqmasizQrjWXZWYiofTGBEJxDfcFpggBUhWAzQttZkARsBL6DKRpf4v1P4VX5NjUHZF8Mnr2cgZX",
  "key10": "4JZ7M62hGY2iPRBZaRB6VyE4vgoNGyk5vFxU184sp8Lp6LPhwENo4RXCt4WRVUBtGyzV5CoqNADyFJLsXYCvZ9X6",
  "key11": "DLytDkDjkg8WfMZKnoUpJUUk8Y9zYwzRo6ms7S3NVyC1N2r6D6nVeAAbCGAxUPjWHjgFBdtgsVbfJpYsivCCfFj",
  "key12": "4QHHpe1NmK4ZEbf9Q5ZXHVNbCVdyZu9U9beWzP7WLXbf4qbiScdVmTKbRpLfR7CCremisTNMULLrFjeC1tbt1RU5",
  "key13": "sQ8kHG2yUjX5Lp6nDuJ9uiFfVHFJ5mPEhRwNDFU5mkQDfSYJy32SZCJsJS1MJkDMiHmrxfbQfG2PV4iNK5sCgn5",
  "key14": "5a3zEeR3RQmCGfVsFpof6mSj1HKM98ttEQz4AuHKeQKDJYuJ99A1Fq5UMg1e5T9oeZWutBqpd8WUdPMzQfp7H5RY",
  "key15": "4GqckswSNJV9X4GVC3LVqEASrESiPeRHRFGhXySb92BqwWiw29EnTpGbDgihBU6ps4udaLWWCGpt54PPfXkpN8Gq",
  "key16": "5Ry5Cz6fwcEXbZdLr4eX8qjAo7jmpcKEHcKK74ehdATAoBwPjwrMn5d4crrmMxnNLTzfR97H2Cop42JHYryv8SRi",
  "key17": "3eoU3EVWiU5iyquce11NfB9xAZUCurFJyEGNJpWP13pFvJhdP12jZa4fMrYwfCBGFVNKNaAwHv8SyLcsX7AvXJpH",
  "key18": "2N1vAp5x3xBj4ATaLRDzzY2NPeuiyEVoSGBkAW7M1APNpvKLoevTfApACZTiSF1qdEfM2CWa22XG7qFiCRcWTTA",
  "key19": "495gy3jgeU9Nv2N8ADunx3KVKVKgQnigd3p3BMehrnys76FCqXzP17N4FSESRaBXH4LLo2w78oYreCZyq7U3w4Jg",
  "key20": "3Dx8JCFhBc5WwBR1HFiLWGEACMkm2bBranCPh2gT7ZrDAvFKzAm6Wg49SJ1Pq67tMheYoWEy8KmUSo8ndaZ8bYvH",
  "key21": "xBEnU5JsETbxjMrAsQaHUEt8Ms6FviNhZhbta3zjxxa524wEQXxcnTwYrv5fojdEzaAd3erFKVBJLCjaauLHw54",
  "key22": "4hFWpso1ZXYs8ztAbETcAo6q4yAXF7JsCvcAsMLmx9A9raSvRN6oJ8vB5wYJQ3K6vA7G3KtAyHJpZPaDVP1DmL1q",
  "key23": "3AQ94Y4wTcfmr4Km2yoFXzJypQ8Q5GcUErgvKbYhJgPzqFAK67uU6VxHHcUbQqz4dpB5gXdTRDP5ZxX37oikRxFs",
  "key24": "4wBwmgSfLHdGpziPi5EaVLSmzedvjXAvTekVXCjCnmM7faNsBARztBgrWP7TQdS5QrWyJnYTcUqiT1HPVEcRf3HY",
  "key25": "2ZvoXps8NRaMgSDM6upGcwzc5vkDH9eE3xuWrd3WhowfQyjjyj68eWnSV4QxkvNZ2zs7yvfA8tsjGeHZRdWJ8ork",
  "key26": "Cmo4vRiup8Q2vMHGQvR1uZxDPbNukiSJnYQth1UkZKHcjHJifmSFhZEfUME7XHM2tPxeZu2F2N8Yrq23vzh7cwx"
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
