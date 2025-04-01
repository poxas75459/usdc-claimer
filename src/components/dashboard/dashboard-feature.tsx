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
    "3VMDBWD1o5VzZKTJA6Nv65noeJUssx4sHY57UcXD9naKFq2xw6dMMTrE1wnVZFgBfrEqFEdKL9CBg9p2N38XbTfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muYMJg1sgFTGcTCG9ULvqXVNnA77JLGVKKwwDJdtFC9qa6ibboJvEMeizDzXuLVx9nCNU18JY9rKVKk6yCZn7z8",
  "key1": "2rSq816XKkFttevNZPAYTPJS5EmbPhA3PRFQmHZepoSUUUYtXzf6QXceUx1NpxVQdRfho63sEHKURNT93s6fs9Dv",
  "key2": "59n7DVWrE2S2Ni3qCibAKYafJXHnxkw5NgECTDpNM8KN7acYF3oAA82Y7osWtT23tDriabuT6BCdYRh7ppvyqu27",
  "key3": "64Ebz1dExkyMkxgYthUDKA2CX1fv6MJAuEvabF98FWCZqMLByN4ZaXwKkMBCHYVwDPgqHExMdBWDV1yoveRn1j6f",
  "key4": "65q7Q7aiFVG78setuM3TPeT9v86E7CD5Az8ni1hDU5ugggnKpiRFgbCkAxHwbNkyYYiD6XYkiXBDy4jdf4Ys1YRq",
  "key5": "foe5ZnmYzNwaiPRH5G6aCQqrf1yXgAmJGrbvS8SaSmdnGtZuMPfAovDgPL1TjEUiZNwDZjBWf6pp4J5vu24DpQQ",
  "key6": "5Zcb7V1kkRb15DGE9iXy1mvuaUytiPPhZsTT4fsrmcP6pqek95FUkvrVS9mwUS46R1jmL6mRcHFSWKDpSp3oEUKB",
  "key7": "32VyVn7rwvYmWNgGv9DSJqmYhJZafMzQ4SvWC6hEv8ciRVfpzhkjU3se7Jni3LvTMhHvC2Biuk9ork94AovSgRRh",
  "key8": "4CwuYtRVw83Sxg6LypYXiW7SVPmSErxJNLgFi8WaSbaxL7zkrbfojHomTikQuyBDheVvjmaR1TWC6bcPSScaWUJS",
  "key9": "4PuES4j5PYvvZygceQS8ZeZoydFfE4bLgtZDfaJRTwPRMtyQsmNgWnqTSrPUUp26NQ5mA3YHM4JU6SMUaPthJKgT",
  "key10": "xmvqmhnauQr4DDcLYV7GbuiWrFGKPyDx1XHRn8LENcsVbz83k8hf9oP3U2qqWVMnZKwoYDHmoWTk7KD4BtfmFQ2",
  "key11": "37yTcqTz8wKxZjyTGJ2zahcznhzhZAxCEs8kyMsuu4gPqYxmXkzePLB5M21j3LEMXgaqJgjFvKTYcWVCgJn59EVX",
  "key12": "GPGRiC6Vv8LczwN31duYnj2FEi3CVkAnR3SUDMQEvbvfCAuRYwRo8hM2zV9t8mRgpft5ccp9dktvf1oWeMFroSe",
  "key13": "2JHgXe6cxWUzuyiRabNPx69tSKA5hh415sAXMCKDscQyrzH99pYjPQJ4gvd1NthaXdrBdciEGyvHEHghMgf3Wfcq",
  "key14": "32oakCzfz6grohk1qfBZvoEqBKGFgRcMXgWRAcJsowgsXPmFQDmx1eR95Jek811f4mPHZeg3GpRsGmBnXoeBQdEE",
  "key15": "5gLVcYZuL9Wp5sft3ZevMBBWxsQ68R4VGDXMToXrXc4U3efmPSjZ4p8PAZSeYaFgHuNhwJA7dLQA5bRADRkFd4rE",
  "key16": "5z9HyNwWik5NUKUiFbZCvmUMKdDDcDvSNRoQ43AVXVXuLK62M6zD1QBPp564CPHj5kMVbTUxXjvhhdZviSPd5otB",
  "key17": "4HsXVBKdM3Fcx6wSKBEnJPQgfnqGKbVjmbDze5i6DNkkQyt48wFBEXtrA5hCbEF9yELa1vibsDz1GNwf27kgMhBV",
  "key18": "2PwtDdYKh4TDddHJZeaAVJ8F55hr1NZKhQCRamzjpR79Fi3zkLS1N5P2cH6yK7J5Mpx656gP8QCumgpLYVjJuUca",
  "key19": "5z4WszyB2j2e9zyyeRaktbDaWTSRiWa6FWJipqZWPCg5LjThfGawYwt9PfvotonCUj5UzvKQEvDtLqAYJTaWgpUP",
  "key20": "2ff5HK8sUyoiWjsYZUNm68RUaUwUrEPQEHmy3HLqRdx1MPSm7qiuSeqkGZDiANf4TDJ7CQaBDtLE717ngnz9Egh3",
  "key21": "2XEtDpDHgWNYVtTfJB7J7qfnNPxFtteT47aEWbRqNAG8jT6KvKU8MaaiR6XKBADpvGc3k3HcgbFMGa4v5yhwJ76Q",
  "key22": "ctKD9UJhuTq9DffXRWXFrMFPnbzHHzAGaE2HPicGB4ZHhmEiSvJyP1kHquEyZFWoBYQPnrgVLctwnzdfrmXZ9NB",
  "key23": "2snuN2ncfNN1Re1WLA26YqBf7fLXezWmLty8Mz8LaTgGpjQUiYfqRMpQq3yYXYUdh8Rp7BbFnfc3GyUfPKZsJE9m",
  "key24": "a6WYZFMxTTxhz7C6qJf6Cbj7g8XAQuapPbrnsLgiCVB2gKTBdXBFm52Ui5CeWf3NHtDKqNESR1AJHgD4ds3xmRi",
  "key25": "ZgESmCxmtL44W1H6crMT97ihyZZ4L2sBh9g3uitLhF6EoBVB85bAuSS4pWxhbKJ1Vqg63ZkwwqPnJ5w5JamjsyH",
  "key26": "oKZ2FmxFdXPvePxYraT7T87G11FBj2E8f9c4WUEUtXYDVv2LAW2jVE3dbWY5sGagS9jxEZeEv7xTiY3FN1M8LFc",
  "key27": "5n2EvJLepV2U7RgcTxEVBuaTWo6WnfqzBtuy8DiQUEPX1zWQ5A4CMb5D4eEqPe7QcDW2CnhhT1iSWndTmp5wRZR6",
  "key28": "36vUhgCefEpmFhPcbD7QzTGKr1Xydx4PJpznDBmSd5RPdz1RX4yVps1D3w5uK51p35sAoQw9PkcG7zGdiGupUjUu",
  "key29": "2EEqjHwWEqdAW5CCx2AaVua9w6EWzmMLgGL4c1fX7nRQg6uSCBaHCPf6mSQfca9hvtPhBCCvmpbELnomeYNf2G9r",
  "key30": "4mNeweweKHVmfYMVpLVwwSk8xmsPkisnoBsAWEnA9aYEMFatj6zCgy4HuDfSJumEAoWApuoshdo4Pz5bmWArC2kU",
  "key31": "mGe6CarspZYyKz4C7N5tCknviciP86gLUvpzWCquoTMe1YHD1nHoitj2FEcYmoxNuevF9RW8xKSPcBELnVim4FW",
  "key32": "5bN8LoqUm9vWgsRNPkYrLRYeiVEJx4U42t9c5ZAK6HG5wKfxSXnobj24eJJPHZxoyWVvHi1FXMcwbprd8b3hrkmv",
  "key33": "2p3gL1KjTxUidta3zgKwr1qTxNK8YQZqUbLAN96ErBvSzaW6tRGuZHoPjMUZyyyTiizsAgxBpCdJsxDrN6pYoiCg",
  "key34": "5KhGyDJVf2QPdao6MUapmzt9MTHrMd76KHMQnUs4r2fyDgPC8SdPzvwCDzMnw9h3yqqHXLv8nUVgfN4e4AZXiV2c",
  "key35": "2q2PNptRS1j5zVRRsgfX6BFiGGtYnN8ZXc9KM6gAMddxDoLaBN2pr1UMWcxKHX3QzJ6oeQewZxiEuGbt4AoZYLW",
  "key36": "2AftEieZYpui9vfEm8hP2inystWsRY4ttdyhFJPjfm45E8fJhhvHtoYdYLpGdx4QDgM4kkRNqVCxvEYrs4rX1dK",
  "key37": "63GAB1ojoHzKHCBDLo3nAxqRpDsgbRDi9mwzxE35pKx3DkssKRDh6VLAENFxazPKbAwZTer98swt6g5AGPzqXnjR",
  "key38": "9dy7uMZwHaViy3YcV66wqDYRimT4kQjasjvFxJHqn51FjSLzCixBK1WPvHpfTnHHrCQ2wCQk92BCKG3dbE7Mo3z",
  "key39": "6689Ui33EDWMiv91bPMAQBN7E7pvNXB1vLevj5jS4Xtq7NYQ1W5D1tg8F6GbRHTwejLKuyUqxyRp8C8MafFhSX1F",
  "key40": "5tNYm5NPDZUjTxG3YgjVV4oqQP3WXn8Z3mpnLCdANgxcnTxXchjCq4WrbcoiKCqfn2y4UsUsExLznRPti3AVMNuz",
  "key41": "5fR7LCauTKiNSatDc2FaTiLT83vQGS9DPkdYg2Hp6gEcMmVPmkDkjDPdFiwyttm4azuV5zJqV1rWDYPbVSrrX67v",
  "key42": "5Uk4as1VdQnh8sfU7ZiFCPN2DKhPYBT5n5WSawhp8DNBZ8n3JvVL6eaaPBfDhinCFs9YurUQ9ZqvzHJBmbUCWpma",
  "key43": "4XoVYAVErLf2cHyHYR1tegEwHP4TN6kug1Uo7Kc8VUyUxDvnurjspCX5yCVimxgt9cdMNmSFZ8bzpRnsiCGFJMkk",
  "key44": "3xKBtXjZhDZ91785n9K1jCZkkHcUyJ9P7MsteeyohUqRtSUCWBnsgXmB4j9nxTSZSF6HNBanhhnTb8m3AjpoHx4f"
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
