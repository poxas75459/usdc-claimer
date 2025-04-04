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
    "41PNCLYLV3Ci4785N1Sp4VWFMK4dmaQzq68E9v1XKs9dpN39acNRcjGB18sUmM12GKVXE2jvXwfAobH3PyG5Y8oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bDCUCKKDRkkmm8jGN9LLtcM6A8eQsp9deVFyR4MegDmqF8pjroj5BPvbZSM1m1FjRrXAyLReYTUHXQCt6LTWD6",
  "key1": "45UgANnySQcELnfv64wdLPLxc5vgFgZyb1H8FomtmA84TXJf9e6uBQumKaXedeMexrve1d3m8ZAihwnUwtUZi2SA",
  "key2": "5WCPacgm63SspZxZcg9QvgyR6Q81pqCDp5wxsEiaNdawJoMyUzergPvfGWCJkNS9GvmoHKuxoCrernnHWYMQT43X",
  "key3": "2iiMT9zDQfs5KB7dCkw5cx9YsFzCoQxq31VpLewCi2vLHVpXfGeH11WNuYm8Xdr85cc46ezU5tHZv8EjP12h9iD8",
  "key4": "3Q9cbFC1LmMXL6BpAPvNzDp6dtgZEHxoHq6kxgkTE1r1pydTEYAw1HuaL6jYUgbfJeTynLs1rcVEwd2SYFKH9oLx",
  "key5": "31AR7RRyEpy99MGemw7zeNxbQWogknGidWLx8o9rnBY3FbvYeq87jXo8vUDzUPbq4nHqGqMPyp8AyaTrPACUw98z",
  "key6": "28FLTJxE9faHSqjzQ8UsgXVpEEgCJG7uH7Y9zfA6Efmvv5dXguR2kPHRpK5aVyQDQB2oYHx3XbXPW6yNdkckG47k",
  "key7": "5Vb39v35pEyaxhLd7ehkNwdDaL8fFeqxX59En1esyHR9tizF8xjFbdVauNd3WiYxjZkRSjXJL3MNEPa6c9tAH9v4",
  "key8": "59C3RmUqX1iyPMPodKnaVVzFyrZS72m33EjQjax8Pos1TEab2LmAQByZP2YixZjT2FQVSnnh66xFgGuqMa5ZrPsA",
  "key9": "61UZb7qNZ8KMnV989qoKtnUzxHeXt2KxRoNK6YkaAFedsNbvuhLexgetSoqSB5zTvRHkQDbpj2XbHqL1neHm5Zxc",
  "key10": "2dmT6Z7SHhc34yXKH6iMiaiNRtGX3q3EyLKWJq11D4DJuentkyUfDdWKMadmeFJGCAFG64TbjYXFpvU47TbbGgoh",
  "key11": "5Sb286Wib1z2RtpKwuPc2QiJS7yJYED9rNjnPtMshdaxJUS28jic3iFhi2MtT8rmRQPCyrgBSXUdspchR4ff3Lm2",
  "key12": "5mKESvbqCBhazgQEiZRhWxipMhCtvXknUxrWRQxU6mu3e6ZFDihdyBQKnv64DDsK3LGPkfRBMivY95SDeXEyTE8E",
  "key13": "3GC2vikNqL9kUGeu2iRjZ27mySatP8FPLDUh27ks2KE1kdDw1AQRxh4F9ieSBZR3ReLY36fscTUaYAMLybRZsKLc",
  "key14": "2FfM2TM3YYHX4ARAFa6fwT8zRGuBEwBn1eEKEqAfp7DWdmaHLRcC8Q9khdL7VLVdUQYooncQsg464CWXRmJx5nFs",
  "key15": "3WdfHmeqMUT8iaumRuvq7mRbhCKfXRwf1FJ4jpKGeXz9mfgKUQY28MmPSE2T6fs8bAtaaNsDXyD75f9NDdwM4YFr",
  "key16": "647JvMAoCDvcc1PT8rMbuUD579SNNpkLE2hXZdWsXfHCLf7nqSrFyDrTDrE7kXocxfEJ5BVNiN1X8mgo5ZF2UP7L",
  "key17": "2iAM81PHihebmW7LUEUbCAXXoPuxcTZ3yLMZVkHMDShpijbJGqkwfbJJRYG2FYiLhDKNfkA94ZbgGTeEVYgpDQ1k",
  "key18": "36zLeHU8Yx82MbykXPCxP5jBBZXbiBZo8qqq6JMe8a9eWMaqMC7E6vnN2x4g3huviSCZmD3yxgTZxX5n6kFEWCvH",
  "key19": "51xfvcX4jVU518HVjQDWKVHXfqfDiAR5bEs3DP292wwj5pn8Xto9tvRQ1PEVUPjaRAaxPHvkMmuFbqCt2NgoY6Ld",
  "key20": "4AvFNx5VJkex6d1MNCfvZLL41kJ8FoELkzgfkF9fhYskypv2dfUtTq31bnhC8i83hWRBiXq6meTNxdgs1TA3KPnL",
  "key21": "671mgv6C1G9EYbQW9qBDC13x16YcLmV9VYE3mTLE5qWQ3uGN3xVEMBYHP7YP8iNwPMFqE427VU9dzCotFLuC9kis",
  "key22": "3gKQuBuRCo76qBZyUzMMNwYE63UFaEMq2sQ4XLRpEYPJnGLkUCADTxRgXwSxhfPfWuCQr6Eb7TFAmGsbYRckSqUX",
  "key23": "2qmhM4nM3DyuCLPzzkavVvhEG3ZW1KaYUDiNjZQ6TUYJT82yHuKGeWJd76dL7PRMeQVKtjnHGJi6Sc5qjWkvcrBq",
  "key24": "5yDN5sPFAoatjEQe2dHrEXbnsakDAkRtChW7yQ8QVLrWDcuCoJoxHqgx6ZWQRdYYxtX8LhUnG4KRon6KhWJSVZeh",
  "key25": "29PySKzfe3a34oox712q2Cr653MQnhVq9xZt4SYrKqHpNoMMEUPq322mQj3jWvzsAsvGTSMiY87rboJC2AxauXVy",
  "key26": "2gNzU1ssNf8Goe28UYd6cGAVfzNE6NWmjjW7aXH8NmMNAW6Lsxn5RuZ6LiQ4kknrR5BVTA85sEuorRrumSjN2uXg",
  "key27": "4X2rHjUVKgg6vyMejBD2vY6rGTu1GCvSAQcnbe47tUkXivwR16BdNB8oofXLGmRKAisAcCyRzrHMYyacJqpKhjcZ",
  "key28": "53hvjDoA6BFeUWUNkUa6Jtm5VkqRTy4KhRF2jH1WUKR2G46ttDSAdFqgdFCqL7YLpb4h6JbPCtmKE7bDhypF9cnf",
  "key29": "27cAn95NEKpTF3R1FFLBW5nAUC8ypiWc7SGD2mgnvc5QEMwAC4W2eFDHTQKrpB3DDUPdcooPCEChMf4xUnpa7kAu",
  "key30": "4JLAAxJ5JNZu3XD4NFUkuB5w9qTk3gwbJHwLwq1VvsSW527jMTXWYVbxVLawgL2oUFivwS23XSjBo73GcN7bxX5d",
  "key31": "42zvU28JoTBfaTHrCiEYT2xN9qba34NzQnNAyufozLnFy5tjoW5ku7VJyApcsG1QVJbNTokhAVaoKt7U4PoaiiiW",
  "key32": "3RkX84RyHxVQL5zVJZbqwUESErXZ6orz3gNq1WveTkeZ3HMRqvQAYoZ3H98JcFNyUeDQqKdvQP6PsqenCutv6SM6",
  "key33": "52DHcBfVUxnesw8KSH7KaYcREX3pBTgohuoKPBX6bRwxo9txxNB8d5LtxeRzbbtBpY6U6G6VBhKRMbH25s3JyNkU",
  "key34": "5XHWPqM86AmhYGEeUsqkWiBLwiKP73fqRKgpDW9Xpn4nHYmos9iojjx1coc8V1hs76RNVMqB4JNo437BxxGVQS62",
  "key35": "44h8SFnXCZsE5GJbFwedC3bA4cBNQGCGEvvARQD4iAbU17Um1iqRi1DDkvT2mXcPoS2BaC2HnEZP3E4wW1hxg4T2",
  "key36": "5NzHEACFRepdoA8GZMF95pmJrctemQVu2x6dxU2R2pF4h3XMJVrCK5J9LGkDFxa3Cxy4i3gm5ApuUGa6Cfs5Ddbb",
  "key37": "58ZPPxkscpJ92xyxcd4YdUXKwfJ87kzAXP1GUoDA7fTdLe6MLTLDyK1Hu9gM32Mvz2fzCBXQPLmYm3fgvQFLu1xS",
  "key38": "LPrwPkSG6vbuatL8G8LCJmGoKCcAS1ubauHYduU8FMCZAUaYwDRyewfDH7T5qp1fXsSmzSbyQQuvCVeibVvBagW",
  "key39": "5zBgnR8CZ9zzrbGxWQeJ3egbGjUscMGVoghpdZDUvXr22UGxABEE1wxtMV1uDgLBiKpJzSSKBBrVihd9qyZ5Nqh3",
  "key40": "2BFf1qmgRm254zMdnM4XTDQd4WkVCcBLX4FiBiRwuSdjzmiqgSrMjdoiCtCx5TePX1fU8Pvn6kcuT1FYyRcANqSf",
  "key41": "5wEcH6BYRm7FPMjAxPGYUow2bw1PppcFE3BYtzBw5eyCTQUShg97xMFEUaqiPjeMniivW3r8gVVb4TEhqqU1YzN7",
  "key42": "3KdbqQPs8tdwpNmyVU5e7DrFibuHtQXjhZ5FNASmkM3VVKLDJCSS3BHAa8GyLahh4yaUm5kHsbbGYemFdNZxadzc",
  "key43": "2kNt69TqRa8a24gJzK2CxYfdi9b8C8YgXwvhczWXw97n4a9pWbsVV4Ny9LW48az1zpj7uHHEiAkRpB2FTLps4Z3q",
  "key44": "2yEHXgyv19DaKdtQaUiQjTrSNfjnhZuY1GYUrM8KX5EPL9TTw5PEps7DX3pgDUGoitw2AFWzUkjTacwSdsVCpX3t",
  "key45": "3N6DCiw9KgWAyYeygzz13xnNN9s3v66siu9pYjrFTaZz6CHDidE4EFaFwnBhBzJWhyFPa4YcRPgvgdsspGuLDou"
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
