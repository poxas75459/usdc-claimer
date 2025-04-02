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
    "5V9zijhEBx6ubUPw2YkrbUW4VZDcEu7e6k2iodLcbmpNNE9AWhKckk3yCEk2BS1fTnLX4Xy1TNe1w9c5AefZ1YnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXKeXawGmfCwaeDDMtq11aWAoDvpsqkcCCADoLQFkc5hUsabgGTivPu3ndpeedtdoRJoyTS1nieFBAZw4zqedtb",
  "key1": "f4SoiEzM1Ex5WHgVDexWnykx7szCSBmVkwbQkPAcPbYW6a9ogWdNAtBS8n3dxG6eqrMFMqDEyHKupHYfyUhKfkE",
  "key2": "5pvg6iHW45u6ZzoEmf6SGDgjChYKBAA44WEuNdwxmzzN3wcr9p3orGyZnPv6UMgzkviVaVYULmuyT8EX2AXJhG83",
  "key3": "3Sd8yE94krSow18GTujjDcp1xa9KupdqkrEdcbMDKpf2PGXVQjNyqzhDHpEqpVuJf1LbdcRP8MgmgcvzfW7vXfUh",
  "key4": "iowZnmVX7WBbqBpoCwVkRppSFQqAY95wJSPiwWYBPD9QvqmMQghwdA5df2vhbB1YJ1ERrVtmDKFotu37UAMQbR3",
  "key5": "2HXYwbuhHSoAhL9QU7BmpmNHtTRsDzgt81GCmAoTD9XW1y61HmXSctEy2qqpfR6mthhkVkzPkbqZhgRYMEekQ3u2",
  "key6": "4D8AFLPXadhmC9XMGhiq9rWE64HN3hTnUrgAspU1MLYj8G3Sf8TSoYEGZpxtZtiq8vYStvM8GrrjxVDdHWTBdCrv",
  "key7": "5AXMXdijdc7yiZ23noUuAxa3w6JgEGMbtSY9xTwmPkNVHV1oG6PJ6q8K6KsBbgH9V1j2dGgBwLpBiWGTcAP4c5mU",
  "key8": "4pz5r5FZfFHykdnArHzGdc7gzi7g231wtjUz6FL6KMrTQtb6iY4izJfBbTkCLuDQYzp6v3NXYtRU71i1mbTXan92",
  "key9": "2tBdfj1eTdon6FKd895XNZMjDD3acYxygRwMQkyE4MFYskTYBG3BtSGAeAKD5smaB5LpqyPzXufsK63aWJKrEG84",
  "key10": "6LBzAWKUbHWTm8H8scafASX6DagYLwbyJAyAio2LHjFEGfa8i5u3MGaeLwKRJCAJM3WEvGhPZiFzS8nuXHfDXBW",
  "key11": "2xJWpFQqupzNnNw84XY58UfVZH6TVmeF7yZWT3jBi58ZtHKGMFTVr8JzKfcEm9GqmQLWeW5Gmhga1yZA2jfE9Hek",
  "key12": "5RbEbs43Y5pEhShSFUd4ya5aESa6MCLBQY389fyKd6BPkYPGjNz8nmJu8dwunmFbK2Tc9Re6umfkLSgZjPVVRPsQ",
  "key13": "3DNUBpbw6dLCbYoBaiQ25hZY8zRNQBpUrDg6hENN5GeYDBuDfprh2VwwtjsKnt2KimkUXCMmAPTGc44UjVmV4jaR",
  "key14": "54FnEM1dZB4zYmDFzNdhSnPhoMGioGtUuaqytmhzg9zySr2z1ocwtucjTQ6ZsDV6P3ZqvLyx5Tt4cuyVDeiSwHQF",
  "key15": "3g3gt7rCTPNsANN8PdEVpQ4L38vUzVZWNF9Qdnk2V1GNuNvzUes7f1nL3sZ6iXmzxubKmDda3uo5vmgBoAoPZ9eW",
  "key16": "5TUGrwa6aDD1CexvdxaapfFjgAh7v6yH6Aixa5hyTPdhpw9iFP3M4cQBJaJs1LBdGFVv8HhyRthH7PR9M7FinJ5h",
  "key17": "375jd855VGFgG2GqszVToA5V77ZRrr6JDmaJFUHgMcMkFffdenKucTdGuH1Mk5d9uH51RVEV3N6dNUiW9KsyzNsT",
  "key18": "2HP95VfSnDpjchkJZqQ8oGCaQ8MbTjaZPFWS8sEfphEahyHTcEPvQkqxT3bkNJ8JawLvbmZNj4YjDBX85gz5Gu9N",
  "key19": "4g7fSxBfYDGztZQsH4HgTwwUrhWKxFUVHNGX7EfaW3VA6hPUwgZAeneEpHXVWFKa1Ti8gt69qnCroJbfcP54qSRq",
  "key20": "2WVZhKPUfHQsqPSyQwbpTQYBtQwR3Tsej4g7cxtr6Msk2ijsc126yj49H2kuDV84KjWXokuPLs6Z44TJ9gmhQPw4",
  "key21": "2FSgeFxrEgpBZwjhSpK2bDMYuvikUzrbEnMUa8ZDtpieXG2jD6REe7cZzQ71pcDw5ut4K8FA7YeRsXuZksNFqQxN",
  "key22": "3KFRTe1RMw5MNaCzjG13iUh3gNVymJesjem9HWtFayff4Sj3keDKaXoTuniWcCDia6xm6y3s8cXc6dkekDDJiKxU",
  "key23": "4sAkC1nxypVWV7kibZReU1AQ4SVgBrJjm3iqtD9fiu6VQfDSmjnhaHqbEemNTmrPdwDQiaxh5joiuHj2soiL7m5g",
  "key24": "34c5aa2mGZa2Z8oAErGqUBTyhVZoZu9c5sUP9hHfeYoZMPvCxeeZEjBm2MrMi44uYjq9atouto86Ff8ZwWZDtDQ7",
  "key25": "5mDyfY6qNJw4uSZqG95hzUxgwpxa1hHyvxc7Vqfwoa92qj7vD5PxYp6oQNVBoNNFD3WnpLSTbi12a2hdsN7Umqmp",
  "key26": "XbtDMFdBocDnrd1KHBNtBxDmqJSmnTMmD38Jn1tSDYGYfnENf7tpkgLZFHnrQqtqkJs6MHJnqYvdwTYuaLDst9D",
  "key27": "2QbQpBr3wfW5gAwn9FUPHRk97URXqGLKVcexo2DUubtCrDyufPuuvdqWWNAjcws5jxMjpwaVXBKGYESyBjaSM6Pe",
  "key28": "2J4UbimMEdkohnizkhqwHEALqLJSWPBLh7QXWApHddVipGKL2FMTtuXfkGiUtiigzdrqjijZauoVL87Y8yqGZWHe",
  "key29": "5KSXPNQmJAn7TP9B6PjATztCZu1GRbMWGTYpHutFxsm5bgPdCmsxqvygauLmVPFtvm9QGdvmYdxLWwCbhZFvG2zK",
  "key30": "Jhfo1he6ZioiQs82j9rRBib679bqohBBYhanUpshaA3vTxL8yz6L6xGTpnfo43nGe7yZuTZtMdc1UWoJiqT3Ctc",
  "key31": "3LamrNqeax9EeQMd7mdZWjuRizdDNjwCijqxPhKWCR6piCupDpiPrcUsr8g4wPb6618F56u5EYDQeCZEuXAU58cb",
  "key32": "5JSRkYdfoL1Qjhr6UANJ7VRXzR7FmxGwWy7csYtotEXV3tgp8Z9BqgH9P2cukzYJiXPgur7r8h2kWWePhkkEmSxq",
  "key33": "28aFhc341V7eZsBWVud47eDh8TDwsuViYvzrMtXEuSR6LBiftcXmG1GQ3qPw12g3fjqzqKBbfQiFSkap4x3WCts7",
  "key34": "2ovLJynBY7386WPLLoDxYsPkNU7wsaeWsDULPDXaxZ6vZJMiy7SNxzksKjfU7qbK9viJbdEx3ZFHxp9yPDdWZWMR",
  "key35": "4UAZxD3FU7KwARa2ezG5S7Rh18eqzFUbRNbLyoUVjP1DLeNC89JJLVfWuEMZN3r2o3tAFenSfkoouLuaUyqDjueA",
  "key36": "yWm33tQQLkJp9LCxF2pM1QgEob2abE8qBMuqSFn7TvNZMfLr1Cf6rrfkHnzviw3yLctqufSJFCp3L1L9w2iofSL",
  "key37": "64BbpYQ9uL3aFwFZZewc8cF3xJGbJ6P1MPEqmnbMhBgVreDRCF9mXdJ4mrTbvDxchAeBcAX1T8wuiCy77TTyqNYK",
  "key38": "2FhSqdiUb3N95kHJATcAgSFqUTdz49c5wyeW4xCdYDCQtB93Bj3H168ygUQc94Le9C7G5iW6anMA6fQLcpq4wLds",
  "key39": "4JpkbxHavSmZAPVBuRL9XRXn1UKqzZTBxS5NX9HySjAS49zYfSAf9Cjpb1VqmUc6oZpsaFR8MtjTLMbhDwxrQh2z",
  "key40": "4T7kqQXxiesiiF5ZnLKKNfq276JQPekq2S14QUSdN14zNNC36gPQwxDFK7bpTH5QF6AjAtmcMaQ1DZpgk2U6tbjm",
  "key41": "Z6qjDQavrcq6nGkhq7Zm4iYpBZXboLS9HkxEHR9KePBSwq3QYPKxuDCv2Qn7ufGj56FpoFRnhdE4TKq3LDi8Qzj",
  "key42": "3kksSBmSrn2uRPnamut67qntD34p1iBHfcrEBpcALdHFgRXeTqbpyexMMsoFH8voLtNVtvSFkJVskmGNSFjvd9BA",
  "key43": "5YKU1nCBW39BnNuMaGSFs2SQcqvXSfTTv8ChbS6fog26XnT81t1ZoHNcVyd9duTKPSgRZkicGNxL9FFco4ZVFXzm",
  "key44": "3ezDN3ddFyjBrCxidy7tzDasugePKm3JbNhNdEXjQqNMbjXAsc28BbpfGwerWgy9M2jd8uB6CATGehMMxb31YuyW",
  "key45": "BEM19Z9XSS4zVDoRiEpkRDPGPRnm5X8iq5ZunR3HmMURA75BHSTGqy74kPBni6cmtQWDqyTaNqjumWQC8WuXw7L",
  "key46": "2HgUK9BKpHX3Ga4BxYBgnV5cekX8cNpjkJc9SGkjE5ZmKLTQUeu5ahdSPxPXzWVpkGtrmgXQbm6TkuiXKvTjqnVt",
  "key47": "3fJGfVB4nEbQxh8Nk9SPJGuP8XJrNGcre7TUdJVuSkFPAz3X4eDAmhYnfqAj1VfwpZKkMqaNzyM7Gyq4EhNmnwu3",
  "key48": "2ezCDtJ58BXV4PSzvgKZWbgTrtMp9d7FDxTkMBNcUoNeQ6xVfS8i2BAcxDGMCDKenko3cJRwKRbPou3e1xeUtThp",
  "key49": "5WfD4CaPbwnu9hzEwbwZ6vM1wn4C2F7BW7zFj4SDvT9VKnCZPmTX96kuH9nzomFaKnrG2LBkgvZmxWGwgGcqogGk"
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
