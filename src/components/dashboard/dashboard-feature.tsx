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
    "UP8oAKvUMpdaQ56J3cDgofukXSRqCf7zmEPRiK6rUMzEyxg6ajFT4dP3G5GioD4DqQDr9358GQCGgKYgSq6zemR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qw5yhUJbLNzekLzcW1vWGkALupydQGd6LiVDPNT3qzktHzuWwzVQi9WdyV8L68EQS7QtGB1vkJkE18KuHTs22zF",
  "key1": "37kCUer4KvvmTw7gv9miZXew7DyVyar2ZbvU9aXtaWLEZxx4N8es3yf7pVtKBo78vPYiY5DjNeuQ3nkvZbEadDz8",
  "key2": "3eh9tpMjYMCwQqnJn7A8bYtf82jDWxbnvEUDRwqSszdYkDak8745bZRQdKF64ksQzYba5S9uokiCKrjet85XByWP",
  "key3": "4JiGscpca3WLVdD2Uc6PzdoqLXDcbdNmQj2YbN51FbFWqFd3RUD8FHHLitTen2Lj6ERbzuYz8nhTVe4MWM1tAkSC",
  "key4": "Fb3ieK2pWosxSdNi7PSzvtUuHa2Tvjx2rNuP8634yyqFXd3L3U51L4fnvRpA96BEcp5JZNksw6RQmvxwMcJcf4f",
  "key5": "2uwUPfbo9HHos9H2i6413WH5RmpnfcDQQAg1Vy8RoY9pC5BJBhbWnz4gJgmDT3QowFnANVbg5kT7WnvggzhVVQyi",
  "key6": "3KYRMxdDhaWTukWQaJWCevswZeetQnc4d5VgdgRJcXPcTSR6tQ57XQch8WCgVegoxCUsQ1vguYQh5VUPx6164Pv7",
  "key7": "4kqLi7EcEDAwbkFEvCs98G6zX75swVjzCFp8oSG4Tbjyb4VwekzcPrK3QuQxm6aFmqWPEWyHzvy9ZahBTJy7M6NR",
  "key8": "2VgZxCAZKgDNKFnfuhG1L2mWtyJtQWSYcBDVs6GChD8YSUEDhrUsjS5u33oi4feDPYacte4re8j6HJxXAnJfdi3z",
  "key9": "47vA21mcBhHcLR9VZ6WfUsXTPFfctp8GZdk2hJ5d575iHq8JEbPEYTuHCVi3rhHuW41fcbFSvknHcy1MzweHiAoo",
  "key10": "261M2KMJcokevCKxP1ZELd2vjPKkAvhQBDEWTT64rumjiEKqzkQh5Lzpycg2KchQUbfAPWtAgQbqA1k8d4QVLeVy",
  "key11": "4UgAze99FiptimqjvPspqhoybvvh1TCeh3TQ144xUoY1jBgXd6JFmk3jWyHT5LTTEPG5p4MhfQjdvTSHa7Kb3nuF",
  "key12": "2d6p2DJRva7kSVuKJ8wD3QCP9mYft5H38jQSSMgJ4KAvbyLsE7Gdi45pnuc7wcQh2RUmYksQEXw8CXAnkJ2fhbtY",
  "key13": "22wJ1XqCTuzxjLL49F3dWzjz8fAdij367GDqxrMrH7AmwFcgNuFFerLP3pn9reJNA4Vc27LprzK5trRJF7kcARXG",
  "key14": "XC14SQx6z8yuyCEGBPXaCykSQG36jQpGNr13csFeSyqNsYtVvPZWBTszQaVcChZicJYWpFLHjXJDfYPArJxhzMy",
  "key15": "5Wcakk5JbPGwSNPoUhovCEp8wcAnmCSLp7mGdun7xsMzzbhqzbtZf6uf1EHfL3QrASisrq3yMQxnXVQvN4HTgoiK",
  "key16": "3E2cW93TF1iAJw7jV2vFY2k6SaL8Meg67rTgaPxsJHqTASuHDHdAQzctYKYnJHsF8SACeyQggvbgHCXvrSVWhWcJ",
  "key17": "2EdrtYJDziJTuaYwtd7sLKUGfPyMfG1TmfqXPfxA8kqHV8qFrNFpsyRqHUm8upo8jJ36T5nYWrAhvGpboi5CtEZM",
  "key18": "27RJhQ3gH2Nu7k2V3NaT4rZe2UuuNFy2jx3XUGAyySyQNzgb4a5cKLB3HTf7Mdeqeup8ygtjRKx2rT9eQbsq9qRg",
  "key19": "3ofxbLA9YKJsF4eMs8uctr39nCvLdCzDRAnSZjSVWVfrHRiJNib6bY3Wh3Jk6CTeU1KiRbmwaAaQ5V4aS98rziUd",
  "key20": "Uh61ELBY3AYQUkzKpFy9wc4femLpd3cG7MTMR5DVtbGHKuyp39qpumemnoB8aTzr8GqfqB9qnGkthRvd97WWPwn",
  "key21": "31s276R6XUNddYmgK5gv2p4ZtfbaRWAMpPWwxs3rBUqacFvC2gMh9kNnuH1gTiYwaMX6Dcd3SD4rn1J3pDC3wH1C",
  "key22": "eEvajC4pxQTnDasBC9Zmpc3W51c5Dtn1R2u1FrmUEpWpF6CW9qyQdHVyoJ19MkFqp1eYAzmZ8Wa9gtg8Gc3zBZ9",
  "key23": "2xsqq1um1uQ5zsMeSGoBvMbzKrd98FnK46LK8cRJ693MQ54DfpA3bRZghnf1n3rh8MnBRXzqoWQ7do1J1DtkJ2JG",
  "key24": "2aSTUNakVFfaXsGik5WSMiPiD2Eb33fPj5h7peZUJdZWJsnib3Ua7uJGMjhnSUqxSmdCHqzDQ7wTKp7H9ja4jh2n",
  "key25": "6t29CqdvCnA9YM5vsaGrVpQ3bSNtHQi4nkri2EH5PUfcg5SSgpgg4uSKKafLpEEF9XQjM3UzwpYoe6pumF9Gu9Y",
  "key26": "7ws7UpNevpD152dBHyULGVpq6EuefNZufrVepcTdR9hdZ3jG8Wsyr2zNBnHuYhgYCnWxYh2JLtD9mjZdWgKKkCy",
  "key27": "5XU1G9ENkgm71qM8qqGed1jymCdo19wNbjaXzLUThxkcunvjGTp7YwhdCHxaN5LZECQqKTvz5rVU1QeVeKYG9Qc3",
  "key28": "2nuVPAeJNY2mYVLyUz7HhCN9h6YPKKNvqgFXigmKVYwhV1FL5KpgCAvttYPZ5bvz75mfzAmx8N4i6CpcLFcDYYHM",
  "key29": "64UiSC8i6GqkqyPAm25mbuScHhw6DBF2K31JtdqUCjNyUVm4tHTSwCgsNEXNEqZgXrf34sf8aWCpk5Yedm7CjD6s",
  "key30": "agZkHfehtNvofnEmVerCAfZ1dJrg5kBgAHggxnYm8L9y618M7oEuWJz5XAQU83SrcVzrDrp1ogKrnXyJQxKv8eF",
  "key31": "HL17tRPQsNseMCXviGJhRgo5rociUbeRHB9vQCGRaeQKzZ4Xfef3V1ixgidq81UyjJyA9dNaRs8r5khfJ8x8188",
  "key32": "4PMRHmEPmchBALGP5AQA1jhmnjgz9U7UFDac9F3AaNqvN66VWFwXs3TZoRWC5kJyTQCjV9a1XUKBY34izbsJzfJU",
  "key33": "43Ham71EC27FJ4eDB3VdYWWGzHn18mqjUEKRe11273VGitnTCJAf1d4LdnMV4W9rrRCPLDGB1My3yMvYFwrmveik",
  "key34": "2kU9G6jsNyp9gHFoBYmkmWutovj7s99DPA4zXjp62bwLvaEFF82kYFeRu4b3hf3g5aVpMpGRrQBgKRJ2zkLURMtq",
  "key35": "37ukmTno2agAY79qSdUm57UtxGTcvLTfoudDtfLsR2DxciNJuR12SWu5s6SfszVVmTUfYWnb7X87o6efEaqCJWfe",
  "key36": "2zuSgsddo3fceBjSf3Siyoar2tdPoj9JVNwu4c293ZY5fuqiL2JwGAxVcwzaP3fkBQUSmEB52GspgdAyEpkbvnVo",
  "key37": "NHmcxpuLV6HEosLPpV5CiWtEWysQits8CbZi58HLGxpdBnrVGDzkxWgXTUqntVYhr3P5M5Qxgh6EmXweGgnyd96",
  "key38": "2bh4mrK3QftKm7eUYrihZsFms5xEAxCUpta6uK8wdx4RpPbiQfjyfHPT9mZTmHaMDCG3Gbi2pkY3yj6a78EiZ9Sm",
  "key39": "GfT28UjYLwmCJLKydncjt2bXkgagzfGLAyF4YthMU2Dncz5K75joBNo2SKoJYeJKRWocHG7RZrDGoZx7aZ6cjg4",
  "key40": "2ekH2KRs4XHN8uUvDm3zVj41g7yH63jTW3GsdPGFQjWr36ghdBDPT436s8mFNJWrk7Dnh9ixVPfAj86U8mNw9Fie",
  "key41": "32SMSPfJzPJNej4Jky8kYrhxwczhoG9i4foEfkvBeMbgabRjYgSgw7fweNGGEpCEAgm4ABdjzNo8zq5RaRPBtHAp"
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
