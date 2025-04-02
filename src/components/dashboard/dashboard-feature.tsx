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
    "UjDBJ9UH9tiWVUmDw2qQVySh41Hmjf58WVFfWKa9DTGiCFvsEpXDiUkxv7QpRbHBvSXYsHXDue68q2jzQfnB5eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmRajvE5ofgDPddXGHSWCbKLLRsoX6x5mQztwunmEL7oo3bYBNpUrLGs6mvBwWwJbCLSSYbBtjBZJj1GkB9Xk3o",
  "key1": "28MUxetGhzpDobfxaGmnCbarf2GNGAQQLc5JnfxmfsbfTxGQCRTe6XJdz6p9rQG4jqKqNRx4tHyJxLCnKYN6mt2G",
  "key2": "5fUZqM6NeNLVggGA6BSLC8NmqSSMa8Lin6P92oLirxFZ3nqjuTEqBQqeBJWqzskZb4CW9UGpz6WuQRSqnEAqDeme",
  "key3": "48HJhmHBdGpP368D9jd9jzAP2BuEhXsBEgT8xyswddvYoe8y1F3eAZBppLuzyczGxpYXHNdSx6e3eEBjJcSN8ES7",
  "key4": "2EP8oeorPNdti1fpeLVdniRT1TWjr2gXcLuvex9xDoxtFZCajeLQ6qupbZchrX82tEpcp1CsWf6keTN8u7wakeEy",
  "key5": "32zgUUQxwCDaqDyBh2gyxNSG8LgcDiwePhLfkJAta92doGtnVUjF7eRhC6rPgt7auwGqZuA4K79GK3DYpB3YRVpE",
  "key6": "5brrYHfztjrtmecFo4gJqrZ3a7DfknGkKL1CZnDQQyGRtSonVwTBgh2s5pUpq59pa1WttDqKMxpcE2J2dkXBgQyr",
  "key7": "YagHVbvmw7aXkppwZ8iwawjcyvcdqgGvdEB3buTHSqCcFLrdstLLgifop3UwvqfWMYs5GPGyx2ijfMae13g9r8f",
  "key8": "4LkQ6pWSm5YiFuzyC46XmV3kk1YEMNGCzrESGmWPo12hYXZux1vNqzFm7Sbu4w8tg8SoS7MuqU6XaqcKXWftYTY3",
  "key9": "41QCdez7PJqy5h67mXjtXjRdvM1xThvzMreprdG3dkR19xCZxXPNRuKLGaJwUeVdqG3kkK5ip3myKTWge7JZovCJ",
  "key10": "GtSUenXLZM9eHRjCW33Pozw8UzBCgFxQRE7X1HiUpoMEWhnqoxJfnWXwetgsexGkkULsM2tgVYikZTooobZQMpe",
  "key11": "4qJzaYSDbGBJsCZtpzK9UpN6VhpMAA4ZzvgqsaxUU1RsHPyw6ncpttkRrz2T3J7TvHt4Qde4bNMPBrv2Gybw3wU",
  "key12": "4T5Ry4acZj2YQHPphMqqGvU2SJULxAg9MJyMqYzc3PVRt9fungSht8gEpxnVbZsuhM8RECAG4QSwWcX4Y7XqZVPk",
  "key13": "59zAw9dLWiSrmaguE7r9HRKTcYcbu3aMx7WwFtTjVeB3cE837aMqiE8zzsveTop3gFm3gzxtsw5qB84ZruNwJtmJ",
  "key14": "3ajV26Utd1wq86T7gjF4226ZNqGP5dtJGjxrELLjxsSRjM6CkoGND6xWJ5ALAhVkXFNQApueupr8KqNEHwcT8TBX",
  "key15": "5t5DPsNJwGYgLu6PwdWrx7eKwxERjDkMUbkGMEQfhhkiN7u4LTyZqD6bMp2JoMMYqMURquDnHSxpLGZY1YRDeP23",
  "key16": "2emdPaDn18ZRpRdGA7BE1aFBkQ7anUmSMmg2GpL8vNLGjwvMU873MqhKwehge1LGLCskhSfMs2nC985b8tnWehK7",
  "key17": "5xMkDmgKTC36tcyss3gLTRDkUjYYud6oJ84UuCErxqkJ79q8xX14bd6oVufnQpsLyPk3Vc6Y1Er5D3rL28tRBL9p",
  "key18": "4NY9iFBpMrLeZZcJrsb5utyEHktpFt7Rk2oMVRTr1RfZZq31Z6h5A9uiVh7frhcAqY7uQbLV8BFwJXfoP5LKo1SD",
  "key19": "3MCGtW2ak8DtMTAmpR6bFuUFCNxrxoK37PDZXdF3e8bTBc5x1qB82epQPUHu75v8n8prdPu6K9bWdYgLrNcxm2K4",
  "key20": "djumb6K7N8ZS3BfYiW2L6JE7NPodfKzHevdPV6CjsaRw6CoXehCR8hyViDVngbs1pNxpFaAfFoaZ2S7Wbifxpma",
  "key21": "5giHwri5Gy76BLxeUmi7x4uDpFHj3WUfU4Pvoc7gMyjHCCp8oXAutK8oK6J89rPeb7zWPJssB3HNHpXyhxSCvoFK",
  "key22": "4GL7YWv1JiBnwFzTf7DnGJeP9DBipVqGsJS3JLxqFJEk7JFiWRH7GL2QScuZG7zrn8wqxgQxiBGRvRjECaNYNVr1",
  "key23": "589TAMGQGtcpd7DtRGL3eXbTWKg6QU3eouSsqNjthQLEkqQjAK55HCUf6ud4pWuqyWqgPCxWmuAYsU1E5eYv4dyn",
  "key24": "56tztEJHF4yiJ8h3HCUJJkMcFrgfV7R3mQFxyvCQVxfvqJBTxP2YTCh9CoiWBsLc9eX3Atz4PUxNmVTUhpoxpvRQ",
  "key25": "kfCrEUCXBSDQL7PTqyztRd192i7HpeAz9MiZMETGQzxrfpmc8XSZQSq4jqeh4f8JqVAW4gJQzQkfurbQrHizg8c",
  "key26": "2784sc3qq6pGkJoXEaw89uBUgjqW767JbU4WEs7vfDTbuumSzb6PTnyiXzj7zC3TRzH1vTxf1gNMdgKpDgEQk6wW",
  "key27": "43FKRxzzmrDBwH2wqSB6rH5m3NTBLdayCHEMBsQ9GkBzQX7runxgPJE7Usj3hTHmZ4MZwD8hjqNcqL2VeHRLH3VL",
  "key28": "4ik8sTE7gNJi5ypiRqkiggvXbWJsGsi5k46kWKip8DM4TDDx2raus1Nz3yzmyKqU6hBWdchiRTW7GWR2joZZEXqN",
  "key29": "5fALHkvZBnX8fgKasBkHSgcTK6jptwv5kZuoePkqiQPQGNVKPUoXbZGC7x5csBjNbUjuT5En6H8dXHrceFPcf6rw",
  "key30": "3JJBDu1fFw9ezpbEAbY6sDaMiqe6ffoqVoDCH74ZGWbDfevstZTnC3Bvz3UUiCxEQxjodAW34mA79y7f2A19eX5P",
  "key31": "2c9bu41ipeRb9Yf77Egx6ToAe57dKXHenfYYBgYpJAHqqpzaDckStn6XCxvqhhrrVMBH46VodJzYVb8ENZRX5f1",
  "key32": "5KiFiKqX54sX3HJL4b6sPg1DscvNK9uffNN8GBm3BmsCvy4EiFgRAq7QqMwcKegjnPx7rMxXHdTNt9NDvw8WkYT2",
  "key33": "5ybV4YFpN4zBWVbkawsDAFtMuGC15WgmRRGLqmbKiKggdLuj1T3cSJBPtxBxrC3mFCmXvo54widi4vE31xWYmyo8",
  "key34": "4i5tc8LL1NkyY1ec6CaE6JqG4dtdkmDj9wmmBY27Q8QWubfPNQU1socTp1QKzWSXTf9C7HuYbfsrFHKhFGnhgkJ5",
  "key35": "43PcGt5e8iPJoNMPAUc4qYGBx8rsdAiK4tn4iHg5gCP3XnRx1waB6WB3AdjB1R4B4Q66iw4B9CsJFs4nVPhtqFBk",
  "key36": "35H1WQuMpPtMANoQgDx2FJhFoRi5GTPbfK947nP2pDEfPNyrJdYtLLaVhRPLzZ72vcEyfNjcq6kyULhaLvtFp5Wa",
  "key37": "4JzSqhqU46FTrrTn2tbWoN1LKLW8UBxWwLu6MvfFMsSiJA4xSmWHUxZ6iRGseTgb2VmnM3a6QQSk61iXGBEZ3BBm",
  "key38": "5a33bBVnDAqqmgFqyGwMPnXmKqnHXRQmFJnCQbzNLvJ3vcRQCHXaH2KvphdwkgQcW8vbTb5VtBjiWZ1XKKF2t8Bf",
  "key39": "3mWsmFnbs7s42EKG6C8p95GGhgMrpTCgPBRmweemWMH7e6cA2ozgjg6TVoFQBPy24hKXfwX2caWRbH6nyRXm8TDR",
  "key40": "fDkSaSi9eVUvp2zqyAdwHJZcYo2H3B4TEwzWR2EVyGiWnzqnPvcRoeoDa6bCYFWXcLQakXLaR1tFY9Jw1Qjr1R5",
  "key41": "2n2YS2MsSCa7oXgkmguxL1e2EK6mqj7nd2uVgoRKme7vkDnq1MQAnYoAUpXBjjbi4iLGSrG6zrV1oYotqQ1Q7pNn",
  "key42": "43LfmmVBH7e1Aas1mU1twAd5oXzrTbf7YoKtdL8C6ZTirpcwn7GZxartQQ2jXWtoWCu79v1tQ9Nyeh9ZWzyQUMRR",
  "key43": "AfKuoiJQShCv6XJiYLuNnagogPFAYAdZaqkAsCGWofQ7g7uCa5ewE97NouWoJUnd7XUoAMSvAqwKVBbUnP99Hcg",
  "key44": "4AjRKYv1qDmVU4MJPFnq7LgUNgeF71xKjoU74a3BKmpasHCbRPKChFjiCTaMWQFhfUwYiGCPqvGZaG93GESGvp6r",
  "key45": "5QLpHNrmjhKYxDWfdtBhHhzrqSFc8Ap4yW88o3kpfLSPSbk9n5V2zQgwGYa1F3H9PbGhkTzBr73X2nDnQRD4KEQ9",
  "key46": "4XiPNNanxMdeTphftUFfbU4GucL1vHu9UAGSFb5MUKeAfWcVbmaetFTwhkPivo6rqKMhQ6WTyLEdBVxvswaqV7S1",
  "key47": "4sNbj3Kvg9n2oZLMRhLoKQ5TVLPP9VFQ7Q7iHuwLQwTJuXnm1ao94nie8hwu2AsZkUAaD3tPE1i1gNqUCMBwn5ZQ",
  "key48": "33Y3cR6yCD7VGupb2FFxm4jj2JJQedemFFeU9LrpRG4Dg3Xoro8shAH2YnMTr9SfYgSFiNhFWEMgnTH7cZLwsYaY",
  "key49": "4DVJvYcybLQRXuE2tT4Y2HJgo7tu8mzz3CaKw5f6sZqAGjtgjUZRHwTsHtj3CX9ayVeDDDDZq1JrfuCQuFgcDQn3"
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
