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
    "5husG1fEr44ZvWTg2us9N7vRZF57JgYr3NFa2F1NF3eWb7T8Q2w8pt8kcnCCUApkbFeurATuWPqLQTL4JeWcmKry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCwZMGfS1gczLG9Q41jogxFbqMyVw93cMAjKnmfRV7NMqGNhynuv54qaJ1DSZCbMPNCJZkrfNGMucEQuPvkagST",
  "key1": "2gDBsgX2b7rnC1coJzBhFYtppG2Kveo2CDet7m2yAWRDPNZFDqFNmAFim9AywYBrsY2zY4efzk8VHqgtUNPAMCQf",
  "key2": "65MPmAgCvcJDYbo2YzzCtVJcW5CJ2fizKp9i6Q1egVmHRbPWxkFkrKxeirUbZzm1hqBdWEaAAZz6NYzeX5wPGo9r",
  "key3": "2dafug13pTFtprE7rhQMV6RagF1jb6FnTiGmvPm2qz3CY9muo4MGvKdtG5FmenD1ZyT5vDPG2gEmSbXKhP26DZ2z",
  "key4": "2KoXpT9HR1MkWmcTYPHvhCa29cTfgW2Gdiwto7hiJxnn2huyou5UguhhPYYiUmnujCHA1tVVZPVCE9QtCTWYRoEy",
  "key5": "3gLWBJkSrZeZWgMzp75vBpMVtAUqyzJ2WaaWp3TMuBAq2S7XDPv3tVo5vq1Nx9LYiJEFt5WLBhankcopZTTjHS2L",
  "key6": "53P6wkLT5ZXx5JCQSk1PaMtQ5UZudfSbkWuMNsmLqJiUSg4z55RC5JFr68VUx3nCHs93QcY1kBv5xWrqdTwdoyCW",
  "key7": "5S8FMzaoGkdRjXHCzwqVksZSreB5dXmnvRBU9FeBGPy5Xo4ziPdtS4cCdfc2uLYZLyy5zdozCBQgSFkXPfLFufK8",
  "key8": "4X32Ti2WkAZXbC37QPAbsMomGPAiTULQUCV2ob31rDVutZwMzXbzn92mSXk6qEaqTKiAvHR64B1E6vgs28Jmz97P",
  "key9": "Xe8hQttPbGhKy558cHEyb197T4t7BmDVgYaWL3UrVECYDH45oEXjPhQcFKs9EE8V64ui3RMBCKhuKERXKowKCDR",
  "key10": "4epFFK19J5ATgRGRuSzSRfAj5UHvmhK9AdH9EviX4fXsDSriiPUG1faKMq1M7hNDiH5kqYHhiUbXAnwUzyZAhKaj",
  "key11": "4Z4sumidj8bccVJGk7GCv9U1h58E55q7xPwqGexvK1uLz8c7E7V6SgU9mpVcopxNTDV7fUDiksaKFW9xztAhSjTN",
  "key12": "3thzWcQQMHyrubBWMfT2CQ5tt2ZeqbipfS9KGtXThS5sdxECg98iUvGd2u5zyCqPNssTUFgitxjmLf2g9wrYkBLc",
  "key13": "cJNfCYwmfFQoTmrxppX74RdUpFv5mpsY7pZAheevEY1WkJ3XdTkkqYSVuyuaG6uqaHLDPtUjhfQ8M4qvkU83Gaq",
  "key14": "vm2LxTe1LBgXj8FhGzAK4Q8aGMFuGHTxLDovX2VUzo5HWhYtzqYm3gLGseqFGp3DJC6343Kk2N1T5e2cYGfAton",
  "key15": "4xgawxTmbbnqZ3mmqkFxJDTjgfqVc7auPTLoF3rJ2rzGUv6oWJz4CMn7DjtbkeF4Ly8SWBRRQuzmu4ZfmKbuPkWM",
  "key16": "3Wbee4ct2cRCFBzXTrwYBiwQ88txmDDxgyPtHJ7ZYRLmRJ797AffBrG9LWGToF4DN2HJQeKNkXuGvWua25PD3e2h",
  "key17": "5FreKQX6NAqARNbCAd9snVdGQdfP6MvkAP8Qn8LsuvTuMBy1YzbzUMSGEQXPb3ADxDxST6BJky5fjj8ASo168wXE",
  "key18": "3xLSPTSUbUqwF85dydwnFguzwHWyPGDQPcbUiR6e2HuGJchFkPFDUiXkE7TcQaCJKSp6n4eq7fLUaQrnUMLXoba5",
  "key19": "54TdFdS2Zfrh9TijJb6Z8uS2q6zQsW5enjq1FrZMUq4gk6gSDA8QoQtTMuzXggrqDVXp9FGe1eKJCeZqPmqbCzmC",
  "key20": "4VKyJrZ2CMGcNVPkr3mG4U85DjUCHE6Aht2hEQajRB6xgApDVWQ5WF4oCaotKXFVYN96owjq75nRTWSQPvjEsUsd",
  "key21": "nekVJ69tXt9F9aH7rCo16htK8pVxXY4yUkzDrEi4wsaimQecdA8G1nc2pRJVEJFA479wxSRXfnYjtx56STHhb79",
  "key22": "5t6E2sck2jTrnmdyMt8QEHtbp6JeUt9LwT4BLLho9jU1B36MfpCCzN5KaQjAfoUMuZVjuw1vrFamK7ukkVzqmi7m",
  "key23": "28376XMhXzSuVqd9RWRkGjMTiHCYB1e6pvzGAkWEd5ByQVKwzrw9ipWL2hnk2sQwhba3qLJfsAnbj92ZLuqADvcq",
  "key24": "4fkgJeCzNAdKvn73xTeWesZN9USHDP7Kq9oihQVnQNcaWS31wysbGo3u5MGdx3CiyRV8zW87hRX5PJS3YhZJyeWT",
  "key25": "4b2C2KMFR8ns1vBCY1k5jWYEk1uTT8H4Titad2dvff8BLTZX8Xs7FsFp6MfynSuLzEraqcvMHW5MMVpxtNKBFDKR",
  "key26": "2Mr9gomyncQKZjxHNMSDMWLDYbG5evosGoFopNZSepULEF7EviqN8B9jJsmMabcuT9UkNFJxV8GBgeGDAV7h7xsA",
  "key27": "5tZdMX547UvjGWLCtg4A3GxostZWSUKjv5hjKjX6px4jVwLrkNDP4Ev6gqk61w2xFE2WKx64RnRk5c8GT18V9Kkv",
  "key28": "38bTLeBgk2vLPydMyXP1JdHGW2xeu1wbbKH6md5AvrNjncNtLrrFbtnHNLQxGMh5wocmENz3C46QCavV8FVcErC",
  "key29": "5bxBqb1jPgDYCYjyWys2bCCMFaMJ1eMtJm9wL4Nk9VCDAkvS1E15EMqTSm4e8sagpLYjDRoox1fi3EBLXKZpVeVy",
  "key30": "dNFecyDFoXvmXoqNjqTSqefXm9krtexhQBXToVZHQaqnAz3zZzzuDRVUs35Y7MMyU2yympRVoxfRRseEcFVQiG3",
  "key31": "5Qjnk6A8ErCFDf6eRrfKCD9N7GbhnuR3dcqXCBN9TENMWFVowsH9Sownandc6kNQGHScvFzcYKm4cyp5nTzrjAne",
  "key32": "5dwbFwuTbWNT78SP3BSyPJGs7yF6t2UE4SDFqxjuUTkN3fhqGwtyWjCnHDRKPgJZeYU8TzoxotoyyPeeMrNby4qv",
  "key33": "3QwMbk64MzvNHaBoXf6e4B6RJRv4QXW6VtF4EFP3DqqpcQFFcfLwVfcvAgg3nW6459LKPMwkV47JfbB8y7zpgCyj",
  "key34": "44bHnyfjfyFFMf58bGKFCQzuzGDBYAyseFdnXKfHrVj7ybY1L4f32PrZGkvnfH17jqF9iw2rU58K81VMtuDyNbgs",
  "key35": "61LkBZqruhq34YgTc8CQxBR9mxXhT71tfZjUTAyeVomw4Q86prHCAch1dXtYxSFVRfW3C4ATsfNi7x7G8DuwZfEd",
  "key36": "5xSghFee2xnJtTgN1k2K5NvgigqKvp1idu9Ggb18rsNo13Dsn3iZUQcNnZjxgLYwS5XzuQ3GfAT7iFyJHiVUxeJm",
  "key37": "5P2RW8RXBn7TkxjUmYoReynB7BUcvrNBnb1eWFpTNPE6N4xpSg7kY1dSsyWL7kZoC7MbfgapLAULQ7KMbXYn33Pw",
  "key38": "46at8cv86aBYZQqcvRJNDDS8UBF7CwPEqM2j97LLb6dy2HJG9wuRYNgJ5qrppKmoP5yHCucHT2SLGxbag8QfWMPi",
  "key39": "2rEVr3BHvcEo2T5ArLhmwESPhURv3dTe4hQCKNr8wKF1AmFdsnPW56G9oumGmAz4jtMoxnD3jnCeJDAfQhhGcgni",
  "key40": "jXBGm3cuAYQfCMnkgsbfj2WxXr4thmr1UMyC8ybmV47F4PY9LmjKr9zmVKwK2pAjKZGNthobG3uu48M2VcbSmDA",
  "key41": "N1xcoiD28v4GpMSAsQTsMJUFXKPEzbRRc2nzorTuSZjD1LUZzqVsS9xFxUsbqfBhoVrHVzoNrG5JpcXvpQ4PQP9",
  "key42": "5Q4Tm7cJxUnsvpNFX42nLzEFzXjaQNuZduELQoKUunYaHUz87bAFG7W1t3mS161pppmADfkdhRfsaEteNNZf5H53"
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
