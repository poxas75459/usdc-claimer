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
    "4foaoQSjEn4QxNcgm8m3Y9MLCbhVXfAHoMbCF3s4Qz1wgFVz3KpcCXfS23nxcA8LHhRCACeuHG1RVtD3mfUnui9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45pE1WZEUqV5bRTCrXYqVNrbH83Hf65xpRh64jSP4EgwYrbUn4rG1GQZDhvehoVEoWBdx9RWJwpC3M4UxA2jVSKD",
  "key1": "eicxtQLtBAgvWtS1vDtw4sbB5XGV969Wtfq9KjX8MX5kazZEJVqgHWqkQQaUE55ZfYv5pNSpcbzZ4dMpEvykrjT",
  "key2": "2HbaqYk4fMkZVMEcUj3qxvt61gdGPtjvLTrXuaYBXgPZjWUdWtG5u5grPQV8W6cgn57wZv5xvpCYf5Cfo9rMvQ8w",
  "key3": "2sFty1bAYacwCRFQzcKRsmFJsBXu4ExH84y8Gq5ThM2br2CWzwdJth8KdYdn9d2MD9ZHTfNLziQgSG9nMTwc9wzJ",
  "key4": "63aDhxoGdXpJ7BxGubvhsfX3yXLMg54F45UA6AsQvvqudeK6ms6n79WXjVBDn3MCZTpSZ8tXDMZRSafxLn9k5189",
  "key5": "2QZFrPYUzHReiXZT77Va5tpqydgwuriMbsAhVw8T2mQpuycWG4WvZ9j8tqDdbfm9uE1rZvqwzSZBADkpTFWGvqa5",
  "key6": "3KGSxzQudytVEcTyaWLeEgUtrnC9ADgjzmBic7VWAzYcG9FLqLxvTzWTv47LwGHpQFciiDFyXRJ4yhjhrrQ7xtp7",
  "key7": "4p4Yp6Pkr2WikLYCpyiPHjukQaL8XkgxZR5cKEnjFPjg1CiPzE2tBavjHHqVHW3ToC4X8drgHC5NbiEUoe9SgPRj",
  "key8": "4evfeTrnoZbiAXr1w9bnzA2axCimri3TSCiNeQKccofUmGR3h3LmzpSaDVZi9vPEQqEp6DzWcMNCQ7kBRCZsXKUg",
  "key9": "3C53JdnaaGYjc9sH7Ch4Fw56e29f5HTbNuE69B6BFtyK6bhQm7W3CmnSfPFHJ3bFrVW1vxyPjtLiCS1LUWxnJa2E",
  "key10": "5tSNdxMbnMzRsDiTtqJWttezdmuWLQ5HSA4T8DzSQGoMxqFE51pZtUcWcnpLWtPpWpWQjW3J9Ua8KnheyHN1gbMP",
  "key11": "u9BJzpMw5Maas84WfDqS7due6NyaUCav6nkyfnRvA7wWbs88XiWjWnYzSq4FjCT9735PgwbmWtrm99gv75cfwHw",
  "key12": "tcEiobnEtM5fkUasvacxQG6Eye6s86xJjD7jEAzkxwjnKALPEDmnc8nVWM2NaxnFJoZ2uGeRCMuJt4rARs6zEV4",
  "key13": "46uv9o1p6axDAFwiUemDnWMiLBUgQ2gMSoPXmMX9p4J8tJydwWeVxwTLgjrDYtcSwv3iSAKhJ95LpKUYKDkpA3xC",
  "key14": "tVir2CCs9bodFzgwG8vosfrzTd2cmTmKJYWv178CuPe9CstWNAjQeqLLXjcqoZGeubYBHhtnEyVRGNdxxSmEprs",
  "key15": "3QwGEXa2s6trrvxM4QcL4wspnh1gevp5VhLx2PCjqaWPzYMukEUEchYbo1fTofMw1mEXHMAPrSU65xFG1oVvnNjw",
  "key16": "2cbne9bYcemhqna9T5cxJwTPAgYQeYJnY13XsaCG6p2Tu7hKv1CcSAXaqwrJwG1oG2zqQugGF9ydiG5Nzwz4wtUA",
  "key17": "2aRkDFFgLu6ddGqciGSfQ3c8JfNaU7C3BbN2nRuuj7RjcnxCyshxsTCWCx4dq9tJg3yRNDfX1S4pJqesQ687EnUd",
  "key18": "2qRd7n7JM2UP37rjz5vzAMQ754TzjogPaowoy5nPTTaqPSrT1iZewC6rsDdYYZpQZUmYjs1r2fQz6q8fr5NwstHT",
  "key19": "d9wu3kRbowdr1ryzeaWU223zHLiYVnNNdAaPayu6puxvnHXiqzwufQgXhH4TJGx5ytuZTFcUzzJL2EbuuaSdkzV",
  "key20": "7tVryrksjG2x6yGmtpznt6GzhcEpiFpEkpZuHTAniwXitKT2BUH8EoY4pS76NY2o2nbSpVCXjf58Snm2ezBbe6f",
  "key21": "4xWmkdqu5tEVqL9rNHKVCGEJeE4UbZNQhLNGG7TEH1B8iLDQRrzANGQAKKuu7ogB19XMh6ggrh97mym9ppLk2mMR",
  "key22": "5AvTbhZBdrKkrQL4FkWCVuK9RoFS6qD35kHXHh3TTJv16d1Di28NNmyEjQeeJs9T3gP1CXwkgNoZJ3qx4jSo6LUo",
  "key23": "39gS1d6LAmWhpqWLegoojhKkBguV6he1vbWTU6xkd3uLvBzU6RJ6fi77hcT4oWijioXBi3KRY7TLF6wzdbuj6dot",
  "key24": "G4rNRNiaRgMFFzhSiSFcodZ2w5fAH1xF7d16VHUqWZ6Nfa1Pp2PwnfXtVkKCZ5XVS4TRf2EpN9AKPyvVsDrp3a2",
  "key25": "4eJny9UrC7n37WQSfno3oFfxjTveKkiax7xx3xx945Zdg3Geu4qpxbbkqruirsr6ghj737PpoYWtERfAfj5YgWth",
  "key26": "5vqWy7cXVSbqGcjdcf7YCS5f6KsTHjYPsXjqm2kvwFy96QbYhr1yeM9JJT9AXffFRWRJYeKPbVAcomK9Mx3uH7Ej",
  "key27": "2WijqnEqSXNDZ7Q2P7h3QXA8jMcBM5hrByoh8FBbPLbTYFH1HL7TcReAn7SSYZxut44KiGP8TqXyQUued1qhra6",
  "key28": "2mnMtS1NE6WDJ6NoSr5H2WUhE4ftBDvpSbt8L1gXygGjqxBNxyHeZuAEVkbpTrRA6yjJ5yC27qke15TxKZP8y56J",
  "key29": "4MoNafCrK6vzSDv5kwN5sGhE3uqCr2YJYBjBqa6PGQJ7iWQ49TBrXFXFDMQdcUDvm7mEi51oZbf8Nr5LYB44EGC7",
  "key30": "29RMRwQuNpvKBH1Kw8D2uEsKfSnviQiTL87rgg1WJ1hfjPHoSHxzXnWTVZUGawtwtV7d8RYD1S7ZxyS8fUnGjFEC",
  "key31": "2WeUMK5PhdSscDeJ7o4LXXWvz87HQpYvKZrAFaNf9CTuqS2EEtRAHN79omVfaSc8Sentf9FxXVujxKGepiaUbdoH",
  "key32": "fVDCuM1jY7vcE3VbTuYXL72KtATrT6FJjJcdQaMy13QtsTkKGeSbmPhW6rYVtVwCKFbexU6zvUMkcTV92DWfVm2",
  "key33": "5HUt5SeSBZoxRxNNSbmVtwo7nfkJBH9eN1fKLvvKCZMhpeKawqbG1KAk46r7KjwyuhDpjAn4S1ukfWFC38GD6ZpK",
  "key34": "xB7FGrVvoAAigSS9miqxu3aQqDwCxnaSoC8i8P88mEoQauJGhDfTb3tDA65DAGbkUzZ4WkkH8Ky2HWqBmfHEEPC",
  "key35": "3gt6rWyAnhEShFHGQsUEMtWExT7SUy2eWSePH3mJJAtyAh46ezV7QEgRVnkqSUBiWDLXxr54L2yuN46JxXWwr72U",
  "key36": "2FX4vRbaZtBC76DbgNDbThAgw4rJJj5PwR739MHQXo5mw7pNsX7n1Tm7UQhkakf7ej1pLATkmdeRf4WC7CGWDxUq",
  "key37": "3ApPhu21aAQzcHfpUCwkYYdLgkHjJCu87C24GT9uqG2rs72KnRojcujTg2GVwKLV2UD4rdiyokLoLmTvUQjHJQzx",
  "key38": "2i7Du8qKhX8RRqepHic8qxyouXa5aNA1rBdtPUYf2xP8sGZooKzzpSizTV4Ugdd8PMXqnwgxq1hKyiVMi2vPGVdg",
  "key39": "4MQAMiwiPjzdc2eSM2aWH4JHgoFxoVji8DGrEnVGud7EnuWV7DCjS63kyYZ8o58oDeZBPbnef2Lmu6915uVtw4WQ",
  "key40": "3Mr8MaSMNgdGWvKXc6JSiRYbj7ttzMfdUfD8ViviFdWXmkDjTs7kev7vAFwje3ywPgSX7Xo6Sw3ua26r1LK2342p",
  "key41": "26vUpgSetqS4LR5STtUemFd1jwDFZV53BtWxdx8JLhedNtAbbr3TzGtT1tpwUTmf8De5KhGwjFReW5EeKoeYeD6x",
  "key42": "2rmwGaYzWgfweWic6guz6akvNPoqrk867UPSpTCzfVeVNq5eyTLKi8zckrXCdNHpyfEoQmveFFUo8tugLV4LjrSR",
  "key43": "tDS2DYFFvdrsAFW7bh5BTiq9rTcoaNmj1Thm2NtYZ4VAjcLBmsaxqnZotHAusLQJ5GwhoyJmPcvjas9Vsxm59bg",
  "key44": "47Fd2tZczNghQ2eS1obKBPQEqTkJbUdcsuzZt1hSdPLmChi6doKjToNSMQGYmLQWVtWNtBc7dpTei5VhJeHiqfiB",
  "key45": "535tgbdZMHJcUJjgHUqNaEiWqjk7NieRMzu8y8pteTtJrWdV2t9332V1h7kJipnhowPpj88ibG9x5TnmpH6xCGng",
  "key46": "2PoA3nj7TwDekLuHUeQstNVJBnSxdGH98JCRV3cksQN3DTeuNNZyyuiaGA4bFvNyKWHEDH3Y1T5yYcmfqot65hch",
  "key47": "5rzNHpwVygGC4aT2Zfe2E9uiF9TqCC3N2cS9X4rj6QSsCJNLt8iA7Zwk9WFFaSvYSM9JZdrSdg3PBkZC2YxDu45p",
  "key48": "3RidkxifZjECYE38fvbipWiZqfPfZYFuSenK179KmZ6Xnrc836AeDmt8fKjUPBUNPnusHeKcZ5L3EgQYFQToEi2D"
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
