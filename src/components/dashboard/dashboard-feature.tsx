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
    "2yWXYkTpQgZ9aPKwzEXwP1BDuzwksr5g2C14FnRiv1YTqYZejBX4YjbypeePddVw4kvMC5LSLZDG2mBgJ9RTsV7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fZPXLjuZe3qAEbcgLU1NHRLM8dH5aJ5GKBWoVkpkGEVeeT3Nc7TicRya2Nre9NcVwcC3UAa7DTv9AUeovmMgNA",
  "key1": "2xqfFyVwFMqjr1z3mayNwJcbpQin5B7giC9XiFBeyGx7c3bsSkS2SJ9a5CD8FpyLoTdc9wJrhwAv6C55kxBjtV4g",
  "key2": "3v42nHVkXWpPeFn8ZCWXB1iGbix7Tu1d6nNxsdMB3mYwTzPpA4TMCpqFtTMCsxjunaTuY6jxSMKBe74q4HEHMRcA",
  "key3": "5drbrJiiN1M7sGroxKMA5FJdr3XVaoz5Fwyb6Thw78dFU3TKPYj74F6hGPqcAqZBqgBvJbJQzwrsonKtFzSBUUa7",
  "key4": "2jnyeBokFej1JQ3Eyeh1UdzsxZKV5kyggHggecoWh3xySdQVAEu1Qu9Jbt8d8gpGFPHRwTwznpSayiFSuu4vxgjC",
  "key5": "2LRnTMQ1keWwKKneRLtRiXpTpMqZDXUn6QxciHc3DZen1nY53VKvgqpnD7eeai8o9EEEnxcGsojsDUFPcygtKSLF",
  "key6": "4TTBaPFunQZ61iVTc8feqse5LoNSU4G6BNJGZXH1FfdeUC14vMvELSRXm4MfoJWHQeGgm84nVVHUFLseG7DJnecq",
  "key7": "S749eWy7UUx7iydoDPDkcrFECgLWaLG26bgR93DF8x73mZhefsgvVPMgS649iT6Cv8BdPFZLPjMDcX7S7kFrrqL",
  "key8": "3oSWCTEzeSh1ecXWhX4HQoA1n3aLm5izvwfxXfdQnXMxQcYzDds9LFMF1XtYBqhEFcu8YmVD7mjdP41fHSVNE8mS",
  "key9": "3mn8rqexfZtSMo9ZzYdt1uVvdtgHK8aPyAxc5xCZWeQofxwDXURskQYFKB9br4rgww8MdVekurLGGNg2z8oiVM5u",
  "key10": "g5JNpGibuNYXbFn4WzVQAaVCjy5bACrMGvZs8awsBSNfrZULfTEmV9bLRMdaUPVw4dxateSf36LUaQwDdzqq132",
  "key11": "29bg2h58T662z9LLTpfPMpXr4EVMEmKqbid52TjYpBBHmtCtz44neMapzN2SZopwxe2mtppSfxu5HfDnT2LjjbfS",
  "key12": "3VgSv9TxbWDBGrqQfnsLuXkSBAhRL96MfN4sDULz3XRs6fxKWsLWLpW6imXnWUWQi8PLahQsrxn9xAhZ91WFuz3L",
  "key13": "2YS9NzUDmNNKeSTsN8VkYdB9N1r5LRwJ1dJW4V7R3UNhJtx3QXPjRnNBKR99v5mUSZ4ebFEuQqMy8Cs7A7TdKrkt",
  "key14": "2udAsn3PNzmLxhSyyoSEiGRmGcBafL8NrwriNT51dGB3tTx4QbXgDeXSfEwAZex66ubJ59nmKmrJa8wR86t863Wz",
  "key15": "Pi5MyonCB7a56fUXa5uwkPmrGWyRikVPhmboTYJxahcHX3q7C9egkCXVmpcLrXsuooDrHggXHdFVcsF7EXPGgmQ",
  "key16": "5uWw2yz1KbnUg1ESQKjY4zmeV3JAJgaM2oFA9MGya7caELwsV5V5pEN4cDt5Yt8zTsLWGBLA2hLcyFV5i4LsjQSN",
  "key17": "4SYSZahLjtionE9UL4yp1wRvVN38JiVMKbC6sQUCD8DptzKrmT6QKQzeBhPBnE13g5qCySgmWBBbjzQpDBhMELcV",
  "key18": "UBY62rqbFwfpsg8Y7KUmooxEu32Kvf4CA9oALGsS1oyf7UYBijBzwAYAWb1aNPzYiixXVShKaLbVepGcSuyRx4V",
  "key19": "3Smx7Zt82E9We4X9YBsUCxAZExh8t7NVJzgDzkEH4yAmqFrSH7E3sNx9jXywSyQ7CE9RyDifNjyZjunjXA8CqdXw",
  "key20": "3szoBYLFhTMRTzkbve8Vv2CSnTVhVZ3VPfUyg4PwxQg8gpTHd1LLfT4QctoppMxuHdFDqTjgFbqA6miwPwbyzRtj",
  "key21": "5W4eGq7SgpMHhRNrmaLENgpeGWYnwB7631H4Cz2RGWEfC9M9N1CkGHDmwfdKcFGyQw2AyFj9ruLkz95zuUkgbXrU",
  "key22": "4xxGUVf3rUBxaHDuB3APcSv3yZ4hziQg8SCsVGqDrvshik2scPUVqwa4CkxBFWk1GhaGEPv8TzDeuLZys7G71n3L",
  "key23": "4LYe2uSfbZPEjSsFHhapp1igYumu8PQofPe3iqhU3XPz1gN1zGNsBygRoPkuTZhLan2F46Z7igUViHiEELDoLUoZ",
  "key24": "4WoZoQpaa9uzWcYjhQQnh15N2bf4UmmuvLBenqn8ULEE7SpdADcafQjyWDqeqW7WhSfAuFWmU5ey4Q2f7n8oAx88",
  "key25": "5qHd3UJvMVX17om7rkMR8SAtN9HqDs9f2ZeKMB2wqn2SmGnfCKDRZEb9zoodpEAJqRPXwNxmwEj1okyPTpN7DC8m",
  "key26": "4UG2wxAD7gMMCo5EgtrdrbCVzAxppA2n5VxGcUvLgeHAtwecDrmfzuEVoaNRXrxBhKHQQyfCtvMQdLQ4c5avJU2Q",
  "key27": "sc5kCG2JBe7xytS1T1zGZ9EkxwEvKFde8zHvYBQa6uKzZhifc5pmAuigsKueUNne4WqgF1xKWBQBFEbXCUkg2u9",
  "key28": "5WpDJfWkEK2EraiGPcDHbgJDpbNUuvZuWMvmjp7hCtKAyF9mLes5wTWSsGj2mxAngvJWPpM2omM3yGK1gNEt8U35",
  "key29": "475kE9XbswYgV8NfiTrh4zzh1yhY4eGgh7F9Xoy8kSZD9TVrQ9k45RE7uhiLaanckRBaZQPZyZLXL1MJRiuxsvri"
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
