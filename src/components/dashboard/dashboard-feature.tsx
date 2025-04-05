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
    "5fsVVLxCkNMZ4FZ1xVyRbj3tUrMJAiHpW45ENE6pmdsK1gjHJrBkU9KCRNdM9SqoLTNaG96VM5uMx9Ji1NV12jpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCg6aLkVzDxMWv8MS2AHqsMFkCPPuZELBTpoRe4gjzHuTWcaqyba1819HZo5xf4BumqZcE2sBHwb4V4D8TQXEWX",
  "key1": "2gTzQENjFTHG7rE9uzWkhrVtXv3KYFX1R6aeLmDEREeuaovapZ2MeHhAnLt2rbSQx4AqFscRnm2fDTC4BcajQwNU",
  "key2": "5ymoH3CT7CG83sSQC9vd832gE8jnP5MwZFFAatyiTrY3G8geDDTCcNhktp7B7dXikt5Ei1QFtADP3CLgejW7jX4u",
  "key3": "29GwhRkY5nbTGVeGvcV2CgtRepz9yf7oqewiFNpsuReWbD8jbkUD2NAPrv7sMzdXzcoLQZtodZyBXU5wmR1Q9exT",
  "key4": "5HSJQncLNxHb1mm8Mz9Xrs3Chvu4AGnXQB96BPFHPEKF9kAynC5hLrZsSvGKwG15GYSNbRJiNTBPAUMr5YiRyXaE",
  "key5": "2Ewp1Gj4hNXEhYXWrW5MhaTLLLWTtPPoSb3ZsHoUW45Y5FasC8c3HjPUkKbGrWVUGd2zHEQjKCybScBRzXTVAkWn",
  "key6": "2kQUuupoSkB28VuDFCrwRvvu97i5qwwSUdzrw1XxUar8gBwsrmDJstjFVoSchgAVjUuJcFuzweEV56Buem2fB2a3",
  "key7": "o3ZBhgM9LjhkhXdutdSdyaihSehvecxe6UfdK8kMohEfavzZRTroeFABnKUhdgwH1QYLg1yihSZ3jHeM8SpoiMG",
  "key8": "wxdJ6Xdct15FWSu8phZQQnmutvrByaieQ1gCEtsu4dojfEkmRe4cWqf5vobM8kM75Srf3c54ktukoCNihzqr8yN",
  "key9": "4LVypWUxTTpBAeeTDUtpSWD1xqh3qGN2a1FqczjYEHAtzPjeEyALWFnosZWugUHwWEWjfkBaQheEjBEaDw6yBHuB",
  "key10": "3tLyYSjsyAGrNX51QvHzJQnnEYbmoSMH5bccv5Q1eV4AJcu3hrC1tJng1w2Gqd4cxBZ1GdjaTT748QqLNEnDEbqc",
  "key11": "5tBWzDmNwTBTerbbLCBbeE4BkPkUrALpbhxh62LvZrdQWfq8njjXkEYnFWyVgoLsFxeWHZibuZr9AVX1wU2rmemF",
  "key12": "3o7T2TQ7pFFZ1HqHKr68fLo1Q7aN97kVvuCb1ZkGatT9uBL9LwAXUwozQDtYzqkk9pfnFfna8UdTLHVLPAxQG7o2",
  "key13": "3WKJjvYXSnx7qaFMY6aAKHNDdmeK9nNPAoiVWyGm4F8eULNqTQqcgyzCYfKXNdTXGCXAeXfmFaZDs78hac8AF5Wa",
  "key14": "64WUm6FXF1eUEgGdBu5Mj5itzSmEAgivFKxBWCd5gCnJHniGq7PDanfoJkCQY4HP7vSHSCcZPPfztk9RF1jVWeL1",
  "key15": "3hnFU1yvXkD8ejeh1AyxE5HLK28fv94LKEndCpvDW3mX1kAC7WREFdmG8q2x2nfeZfo1HgjwsZgQgvoBDD3xnxa1",
  "key16": "L1PLgCNtJbuWuKGtmojjY6LrbJqH9h91MadPiPsUVKKC6LsLReDb34msPfaHuNF6Td43EXu7pNEcjXt4bfH625j",
  "key17": "Kg4ddTmDJhWp26uvBg5bmYJXG8E4oBhdcdyBvNiTpYundTXvTEjRYBudxad6vzLUpYa86vaZx6wNRNGgzSipsdn",
  "key18": "3PvQiFPLLXuMkFgohgCib2eXF2BBs1ZvJHFhRGkos5MbN7gh5vizhQzr82AHSsEbZPTAPkENrS5MM5K1q2XnqpaT",
  "key19": "ByM83ommFzYUzxCkUoKey1bj5JwfaLqqckskGTg2Vx48jrd1a5RoS1TMBm1hxsQqBVsMYHSjE3CJyEBJPXGCTTT",
  "key20": "56RJ5z1kZiJrJLY1fwH2u2bZw98THAmLFtdpr44iqFixNm16JB7HV22HScwh8Csb9KXSdpEPVJW1mTThUBUN4L94",
  "key21": "dqMj5ftvfbt8ogGQBHZDeq8CC8bkvi4StsKvNPFucbbGiSMetAd7nwv8t9LXRcS1xV5DVr41tWjfkYpJGMr5HS9",
  "key22": "56wqDmPyyd1FMirnN7HCieN2DwrAUhbsD9Sh8WzJhJ67TWHofGbCYKGZdNQMDGs9EiMkBL8EUQwX4mrYPqG5AFgJ",
  "key23": "2Gsh4zCvmQyR6sn4UECzMgjrhW1wPyzbKyGh9PmBYyQ8JA5CumhzAP2geGqAyZExFFqqrB3GwHL9Qs7LaJu4FGvz",
  "key24": "4Sc9ZpuNoExR6979cZESc5gnrbpyzh8zV4T4oYAn7sgEvLgw29ni4KMSnBhujNApbvrp1oRZAAQ5cQM2APXAWFrJ",
  "key25": "skopm71wZNovxoTSipTReQbuPyrc9ojExgAq878EfD9fNzPfAvCnZHPAC5ydjgiGiwuEu3KppbXXkYCffZzkv2G",
  "key26": "2onVs1J8EsAfLTgnN1Rtyhmm39v8eHkw63hgqR71Jw4VeUJDCvmJ1hZQFcbvd6aLNAwveFfTTHyRsGgW4nEyNxN5",
  "key27": "2PfYvXbnko61d2YuWXM3NmccNvCiUh5xyi6ErLZJzDNQukbqFYvvLDVbJdAeEBsQArzDTrete2ywWCdn5rZyoyPY",
  "key28": "2SuCdxCyyncKJw7qosj1fCYGykj58oQWWANC5Av9Fuh8v9UJ6ikWGNkBnkm2XVCy3huXTzjWedjDPcKFnN4yxBY6",
  "key29": "5kadepU98G3Fj27HWQZRwx9dBoXAMgkySY5gYSYWnbgzgqo29xMo8UyTvaVphXMwNME3LcL5q1u3dAqo2pYLifrX",
  "key30": "7sf79PWSfTw74NeNfkgB68WHrSaEcxDK8agY1MAJYQGh7VH4rMnrzeqKZWJdQG6dNHm4JgnXeNTRUpDS5cEuqDN",
  "key31": "3ZsZtf8uV1HEnwTSi9HsnLStWoS6DfDmWPJSqo81Rn45gFRaBLPJ8FfuDF5QyQoZyZuNE5GZRiAvjuFaXsoHEfmS"
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
