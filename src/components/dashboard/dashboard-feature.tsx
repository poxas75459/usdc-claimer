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
    "3ZSYausj6TpTnaTCKreV7c4G23j3AQWbBqPWK9VKKiankwD8FDi7QgmgjRXNa7DRJWSpdNnFVb4NuB3p2eQBtzAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244g615pUJgxQ3FS4gY81mdPEUdT7PSUxTfUbM36suyQcGFmLzcx2bwxdUDLR9oGspGC1RstSgucL7UeMLWhikBP",
  "key1": "47i9Uo7d9ncZo5WzWvHZjkQoxVZMonPCzokmDsSyUA9RdBDAx6QMHBL2Bssx1vX6qSEGnxBA3UCc7a12eLmFNYRe",
  "key2": "5p2yfx6yEhtYuE8Bwoy2SL3jeNjKEjUP1MbSgaeE83ndMUeBmUVnx54MpqiFEeaYFCk7HEB6vaB8EArdhSmyPThy",
  "key3": "RR7VwNm2L54vr9vZUEwyeh8xMWbkUGbQDUo2NfaiaM9BsPweEJVjC5HCAWBhhnHSa3pZygjSwSqztCzgVJUS4kn",
  "key4": "25PBgYCpAxjDogwNTusMwPvDq1Wqmz3oy5Wgkgu16zu3jTpnbAnDp8UWY9AKTH2jbzGPYtqsunuVcH6C2hB1AZbE",
  "key5": "4KFhLHpfUTY7cx5jLqZn2bv83hZ1HWLCGWw2DyiviSWubrMrmeYRtZH7JKAY2erf8i9PM14aH7tHtCqHVwzoLnPQ",
  "key6": "5o5Lasdem8KvvidhE4NnWFBfX63Ze6WaX6Xpr57n6ce5ZiTTQA5PkA1KKympuxunnVWBQxcU1AvX2WA9Ke3GYusk",
  "key7": "57P2uGnsuoGjK3jtXZ4BPdVxoiy5ojatxxmn5hXL8DAeDCeyitoSJEUkYDMQZe8x5x9HSgniNwGvvt9QF7o6NeV8",
  "key8": "2NsGADL4C7KMaXWgXzgnx9aBXrcv38RCXGNzFZjyX7iEuLEAm8NWRGTKaWQb4ATEZ7zSpGEgkgsgAs7HVD8fJGF9",
  "key9": "55hHrpVrxhfJiMqj4JzcUsL4TzHueVXLNmAjjNK33f5VZ64Znab67sQHthbu5di4ewXRr1zTvkJso64fPprTLgYB",
  "key10": "4w4uxv9L2PnKFu6J8dvSYPhu5X5NR6dNSJrEVb4QfzjahxXgnbqQFXTWsvvSKf2EJtn7B5YaZU1FR4AmW7MAYaYR",
  "key11": "3Wbk5zCde8qtWG3pBXbksyG21Dtu8EdCDkGWuGmU3PpfHuaabzWdzLV2ogb78cHEthbE6QMtMtg7c626q8dDrdcG",
  "key12": "5vpjdpb21DtBrmxP4VtHfcLkgVxLbU2ZXfYQ3k6LxxcAfRUntbDkjF1iDPCQjooZ7c16p4HxDceifC4LHUiHFSnV",
  "key13": "yemLD5Lt6A4udNsrNEaJ1aQsLGjWmRwPtcTRT3L32yTVBACbU5kwUXf5MWWekfmGgnV7BFnxDyc5HyRgjvfPWh6",
  "key14": "4AqEfiGzMDhyPL7kv4Guyc6SCmfGaWhhbNUcmRki1KACZiK9aGSzNkEScnqtyqdX1k7syb4g1Tm3P2XduRCJgQdZ",
  "key15": "hiWNhntfGJzCAkyc5fWXJT4398RbaikMd4xCEpjEo4foUTce5GZdd5ibPChjLG75YhqumkBiiYZ3RuksephWs49",
  "key16": "3wW3cRcrps3RU51WFcpXhPbUMNzHbF9gvhT8JtE1v3FJ2BkBTKXQWKKDj9FAo2tqMEbHnMSmdxsMX3V8rZtpJbhH",
  "key17": "4gEe8TZ5EbVQN9r1ikxD83fWk3rc6ntzUTm8znhpPTZVXu9WMKu5zFgSukSPV8CZcgtf3w22U7dSqk7CH1xnLz6w",
  "key18": "wig1oHKjkXJLqUYP5uTRFtBES3FBRxaZfAnkZ4DD3ut2aZuFA7DmHyfBD6QYStrQvoGthn1Rz2t67PiAKUX1sWr",
  "key19": "5eqwBVLWp3Gp6YvhXx1Wdkby9F1JfKMjcY9geRGkSVMNT2fR5V3rNWcfccvVxEzVaoK31uGA6YiiquMPnNz1Ge99",
  "key20": "2TxJ5jKT5Z88CKTEqJnoTKEo5RywTaVnPUGVFL1kbvdcEY2EXWjLMfzMCDoKjb6LCDaPyWbGZ5RwfnwZ35yNvZgZ",
  "key21": "6DXjNch1wM3eN1gNdQe9juTberha3gKXGgX3qLJbQD1LsB7AFbMCXP2tfLMhozsxU6Bpkgz5j53J5c9hgHaGJ2H",
  "key22": "2FvpR6eLymYY2BkptcVErHj2U7ZAb6fAFGiWHQPZ8aYuttbNz7BcnCS2jFyUBeadhatEGtkNJAgYFfr8xQsiCLwL",
  "key23": "33rhTnyAwVeYhXzMss1AAHM74kisrYGuFJTJNknzhpdnBCxGuFS9nyrZujtJbJSgyGaRbWFr8Vm6aZwbMQkUM3J",
  "key24": "45EcnHymoSQ4f5qBEbVpoS8P3wy5aqXdqyRB9DuqaHggovH6Qzmar5CBD7Rk2mzFa8gT1itjuStaDiaweCPqb2dT",
  "key25": "23B91vPPLWDhZVFx3LbfEUSPLxNHDkyjQVphfNcm3LUtZ2LV1T8ycJ4PCp1Df1pApCT5CLQwWz4Ku49SPvcXqbiE",
  "key26": "2f8Np8oiAgtLYbWTnScFRdUiQwrHmT3Tym4kbaivQVT2mfveaRiGtdxi2SYbgJmhSXVrwXq5eijLHP2R7z18qSjQ",
  "key27": "5jgmL4cbgx2FXXUrtT5La2iTtSy5Gawg4iZ3mcY2DeVaSHCk6dWqBo5N2SSfTkjWkzgixXgcgx4X1fVzw9tj422G",
  "key28": "52A5Xq9tizaFMyYw8cbQ8ohTQGhZQHgZYcUkxnSmgidCKu42DoftGjAHs9XqXj32yHtLZruvXdxu8HAVZjwF9P4z",
  "key29": "JS53Z1VKsEJBnCa8njHroxPbDkHFoBdYLAz5ZxA6NATxgn4nPwmE4DQer1bwgiBHcGaWgws5FCimfKCEnFXufzm",
  "key30": "3Q3rAEGD9H7UoEtbeWrptCxkgHgcB4ePxMaqX2cbViJx5v6p5otStwEvKnZDKhEDcnMcvFeJBx8Y13QDFo8ffCCh",
  "key31": "2j6mkd6QWcBuZkvCVxJtYETmCtckGiWFvxy3w8QyXufMwLSbsEb9Hh2EsfNLE6yNjyorhvsu4rQuDGwN3KrLEeCE",
  "key32": "3VdpauW1P6T1aajtDp8FT2Wjbg4J63kGunjhDswb8tUrubxwawXLTMh4PfSFLjkCLewmb2XnW6vXTiTweXSNZugx",
  "key33": "5uhuzpEWZo5tPYaTBqgFXjTLjiEpnrhoAyguB1aKMY4qFWHwsNDR1FeCqVSj8JbkzjaajVNdiB26mwAujUAkxJsz",
  "key34": "27RdiKWgHCxKUeUh6HchUkQWb423w4ojTy984uG6AoHpDqkP699YxvCzUzCrSepHPcenZGqiagoUPaCHPJb6SfTX",
  "key35": "WSnTGboiHmj8rhEFvYz4SPxh7XLnHBExhSha1gsVvWyZrc23jHALLs2ix6SZTgSRiaTtrjqL87oazdph4hxwZf9",
  "key36": "5VH6sKfmKAMVgYV1MXJSVeirGsVkNfR28GAPy2qgKvjdwDM9Ks2NVWYYDCpHEqy556pN2LaZPKE5ztqsgPpporRN",
  "key37": "5C8j6ornVygrvqopxAjnR3mLPx4HkegWfrZfzjwHByWuVWtvFpywHydoc4XLcsvqvdmptHPVk3HXB9PYKGtPXExf",
  "key38": "2rEnWE557sdcudjrxc6sfgV3wbTxxhZUmsSwT6zwtD48akbADnzBSs3bRAeup1cpwVENTq4ZZwVS9W52SVW5qtVX",
  "key39": "2cyEwSJCjqjtJKx53XDS7uadQJYr7XLd8bVEB3fCsy3FKR6kUGKK1RShyv6iVmYS2o9H5W86DwDt9hH79X6YFeeU",
  "key40": "43vytWHoRKWvDeriZwNWeb4HQmrSMWZX4wb3gMEgFVqGdGcp6CrDFZvfooBGW7hX3uik9ccfypRjYE75voVAhhg1",
  "key41": "37R3wVeYEzAz2BZu1EAPU6jDMdctVNHPE3ymkbRExByuceiw8EdVdhJfoF6egQNfzbbTovZM8tFUB8Bq5rWbJovj",
  "key42": "ZrDW2E6iPAZZrzLULX1QkQSAptxnDgvyj1W2X486EPKYsrXXtBAbXJuMmfARYA3pQZzckBL6hhjdAvDzWfeA27v",
  "key43": "2jYnYnW66tkLWPC1BUPFVuYNtMcuqBCHbntZqzw3z7ru8rg1MNtAd3zxHLCP6CRn9jRY3Up2SXZDGQjatBD9F586",
  "key44": "Vv5ekYujtbnr8vFxwMzzXnn28QfzgPazMXs6MpDPDykZ7fRdQoMReDjuxTmjJs4iNzhDKxaSsR2PfUKiAtuhsb4",
  "key45": "sWvB4SdesZYcVVL5qmBeTA6pcJxriBt6412zrQN8RgZBsXp7XyKwFYgcmA88YveMJfkhmPQyanZZPJT1AURofX6",
  "key46": "3gwVGfznmzcteAv9NLCFVC3RGHC4y3Uura9qQcjfCsKTD1nTogmEtfAYyuGTssXYemjpvkW7nKjHr1azn4m6GTm4",
  "key47": "3eLqY8p7WhqmzM9cTZqfcuLgxKsbndcnYntFfwoVdkbeoznqEPpa4525jTLjBqy4NBUWfDy51t6jemsvoVv9u6s2",
  "key48": "vBV8DxFpL4aREjYcfk3ZGpQy2kwagLpguBB8mzRg4GUsm5ue9UoNnYUjEdZXXDks1rr4EMXsDKoZxP48f9Gyd45"
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
