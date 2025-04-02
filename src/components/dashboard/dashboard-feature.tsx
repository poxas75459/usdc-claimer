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
    "3cw6raXgyqZoAR52YFDHWGJSUDTaUe7izATtUZhFogu1JNiDdHnF8K9EbLnQqSd9NGCTgP622mkotQgMvsp8ioHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6AFUg39JQJh4eTETW4Jq2RqFywoJapLbADMZqbVVibXHdm5D9hxTVXbG23f3e41xwTR5qm7gXRFCKxoUuhbqE5U",
  "key1": "BABtcE6e98AVrpLzCvdvippYQUMc8J4hf54M3SkeEQtkaJhaDi61aF4bFSGkVhWKmUB4xfPebr2LaV7iLc4vYBg",
  "key2": "2DeERD3FYaco7a9VMbtRA9JwwbgfUvKhFRGcaF52yzTsq8K2GnyqVtw5qdn3DVTyG5v1yinrA8uKY6UNC2vmHeBW",
  "key3": "2nVFQdAxCtUWVT4fyDFbJJWmdwL5438DjtjLnEM3hX69pqscTAvLrjUUbUj6E21V41yAcrtrRB1PQwpr6nzNLuJE",
  "key4": "yZrvQSB31oR7YpjEJDNUJkfmsvsGbneLa2cPrm2TggGaWFY1Dc6PvNvwU75mEJXxpgS8XKNMys78rhieEZgTGNs",
  "key5": "4f7iTABre1YkMkQyjjbX9DEaX8kVqmFAD9qSp3o1L1e9PgB8Mwa4KTwMyJcThtLV2gtc6znTdYNWoSyHYMZKCzmb",
  "key6": "2d7DoHtjh7wdE21W15MUMEPs4eM4x7Vv2QWQeZx7L3jKQUSFpPczSmRqXQ7MaAwdzWFGATvqF9DmBvherKKD3KXM",
  "key7": "5TA1ArGren9LHwmF48t3g6McX6299juG7cPrjk3zoYBXoAMWqw5af1nmb8Qgs1RbTFBwyjmxS8Ky1DqiKGVRFdJS",
  "key8": "36n8MqqvHkW9CWeJTHKvMjTC7UDJAWMNs2NqDCcQF6BbYoymyHz4V5APVG2qzcJ2AxhZLvz2koXacDucYRt5t5vq",
  "key9": "2816wDDz1JYDst9cu5btSW3RdEJbbtCtJpK2jjEHwAk4KjGEou4eBddyZS8SFJ8nUiohDenKAHR3iDtvwPzTFGNj",
  "key10": "4AucZvMu6rrg3QQWZGkK3f2MVWLtmwixM7DrgKgJcRTM6LQYbngbCBVc38qaZ8BkRs9asQAnAnwdmZ9rL9P3tPGd",
  "key11": "2scyucvYHxQ19iU5RQhmpK1KPPcTJ9Y8E2GX53quThxp7qRM3sCWhdmD55PqvpkygGqxhSSnAoWtC5mrkNxrRnT7",
  "key12": "3nqPAqWNmXirqcVGhAbyMgciWY2HDTCZsnJ2udgGM8r5q6551ChHcSUCXRojDTgcaMytBu396zWbgnXussn3AEbE",
  "key13": "BnGJ7Sq1PppTRnjQNbDY3sKsv7ra8jFRNGcLGFTtJW7MVDN3usfwXCptd3GtLWYvYsxMSM4xA3oNaG43ww1Z1Hy",
  "key14": "5oJqibwSH6uMazWs4qpvGEamDbGkaFu6grRc81Ra3f6UzrfGDCbBHr5Rd1p69WqJ3LvGzdjymHKswiXKDSCBiPFj",
  "key15": "2EpSN1oxxdnZ9aQA2VpHRVMmmU6kC3Grn1SLqmcLhhCnk5XgYX67aS3Bus7hNMchWFcjR2vz73q6RKHZ1twtgPNk",
  "key16": "4hVRhig5wwXPaHoFmdG8MrySgaT9FAyPJzXsfLYy1EVRCeB2FhF4He62Ls7UWbkopZD2PJcH1CAb3iJ67wMNyb57",
  "key17": "MbkwQZqU31Njwcx9MFkpepgFawJj5vmUH73uGii2PFNBW1bNeEuA5z38EiBd2qqEM5R8bfG3vyxoiacBhdG8kTq",
  "key18": "3e2mWS75nnkJDSTyeM8Lkvwtb2o4BUMCMZqoTmpGucnA5FAQbsSZYYGfAEGQBWwc9et2sNNMDtdeia39FwJHnEh7",
  "key19": "J8dmfwvc5Rid8nUJ6XUTWupUD7tAvyobgrRNZoqLY2FJzCfMC6zM9CQNDixHaYmaHAEEQYZDzvdVgPEyoH4qE3N",
  "key20": "3eotUUMWtYSiXYJ2nwwSt3xZDPeJzEDuKxGy6pYMT6stGzjmHMvHWNiwME1ZrRG9ArxUSDeLb6n2fHcJZ1CF7UGQ",
  "key21": "424LtrWVwUiR616vLiDFcHQdDR9gpB18x5hvNC91Vn5ia2Jy5jJpa8hh8PJFbC4pEQZLaAqa3AsUhxrWnB7MfCtF",
  "key22": "oLdtnRZFwEjKD73RfowN42rKLGueYuDQdUyGmh4HjJGFkuPQbeFdVatCrd8CBVZeH51oYx4aWPeobtjTt49ptPt",
  "key23": "1k6kS3qnR9857hxWmsaZjVSBXqgkbysxi64jwLsJFRGTdHG53jTdENoUGajyDbLZnyRdho9w8yfQg6stVhAazoq",
  "key24": "szxBfgNscPnH24nXgaNPa9Q5T32vaZXW4ArWK37myArqS4RkE1dELpaXXdtcNwm6BTE1yNwmo1ppPcwBcFzkxTS",
  "key25": "2FKcwGpyeNru528tr6ERakwXk53ifDqkFZ4NTiq5Hiy6dkobJiKCg4Ebcj1gK7jBzXjzKjVeWcNjo6rsuvCDWtfJ",
  "key26": "2dmhKwyQwc3G9yUYYBSDku81cdRgsCLRnmekVa4gquni8i1etTPSQDPRPnG5XMrsFyoQcDy4Ny8tMdzpK58dgxo3",
  "key27": "4TNAgg4EoW9j6xeC3MoSohNEUSK17s1wwjbu9tQqj6LtHZ3ZUMx5FivjG2jzK2QojEWhQfF3CtCeVS3qt6AWzJHq",
  "key28": "66YfCYmqsBLBc8r3cm6zYEJ7zDs8jUDsZY8ef2myhWAZhYJmQy3kBAWTdXYCzWDGouejjrjHnzjGz7NmdBxtKp3w",
  "key29": "5Ypoo2WTsiB6PhA3qVPXTWQMJGeS5rf9fZmKnK7ttobhx4U1s15D1dhNmBnnK8D582EaEneZDdCgHvoJ9N7rdtPo",
  "key30": "2RYsiCfmWZZwFDNvhMY2TGK3gFRyP8E1GQ9UWdPNpHCxHBCxp5gPnEXqF9AFXhup5Q75uM81BxAHoSzPeKC8uLgz",
  "key31": "3bP98boGtebf66AQxJUqi4q7eAGwrmKzKfGHNiuTdPxCTkFiQMuCUGfH2CpS7PrJK9XM77nRWXJJSsK7GaLVGck4",
  "key32": "4LFyTQ8hnqTfTiskzmMuPbgviu56Du7qd9KLXm9zcey1a6jKTu87bhCrn6JQJekKjEYeES6FXHanaH5TAKDrQn93",
  "key33": "33UybLvukphaKbgqTnbtFWUVhp4cRtjaKh1WFj1z3fAuuf4rJDG8pZR35byUUJxx8hXN66HbgX3GESwZtM2E25i1",
  "key34": "3JDKkPNHUpQUYixpeeXB2yRTW2hxMwpNNjW76FQzA4wWcs17DT12gaSARsNNSV88QtfjXFjQJyE4omqncTdtZx16",
  "key35": "5VUwfKxwHfjuiUQSwDk4C4L427GZXpjzVPCdtnch6aU95bZ1YLfoSWboUAgvP88Wq9RuTV6hcxGDRh73nhSjG4wQ",
  "key36": "2KEZSQy7JXwZ7KcbttSDVRfXkHQVTPZNm2kPzrr6dr99dLDVfVPJoQ3cigXQS95SuFKpwv9HSrYWP9bHNCKE28ro",
  "key37": "2dn2E8FWT7AwaNW3toiDAXCP5YgVWsDiigMFGet3YRr8AF1pdQpLHpH95EX6DppDHc9CxwvkSDETBe2athJMNG56",
  "key38": "SsovqgyH6xsEjb5PgNxy41j6GqQg3WU73pVMNtu499uxSajcu59YcyvULHpRUfzRzbt1BkqDtg26AwvrAunmhUL",
  "key39": "5VxYvY19VbrJsCKHDnBU2jtts4jD69NYFGEA36hfsRtvcBp5pBGy9mdRCa3hofrHpAWAbNKjM7WD47wGXGfHDiMJ",
  "key40": "46tVWjLKbPyjCRoH1GGntgLayjBmJY1LHfedqCtdBAGvpbDQxbGqGZQTgWiogyxDYdMW7BKeLhSLgYgdn97LzaSe",
  "key41": "2KxTyZ1hXJqsfwoSeBx4CSsBaoBZAA3BUhUpBBvX2ir5QqrnqjUv3LAmJpZ1LC2WS1fYG5T7C24EJJxtdWhDpMGJ",
  "key42": "3qHuzGcV4c9KYsjLAggP3VrVbX4Yk2fTQzyqXneLE1S3z61Sg4isiWXfwG1TDTcZA2dwzKFniybx7gVFaLrWr5uQ",
  "key43": "YV22izUrezD7hotegFmLJ9KXFRsbMuvELsUiFj5GCxS9YTpJqWaxRWJQcdAmkwUkrzx6Gwhbo6zjFQU37bJusvL",
  "key44": "3DEWySmP8qAifZ7qHVgeW6uJmYBxuP9RVgYYfnoEqPW7fJB3CDvx1pNm8TnktNUSqYN8TSDeZaFPeVxWMHtgfUoF",
  "key45": "4Qynjpd2gY4b95txNZpaPGUBfzaDPj8di39QgEti6Xc4kAaYK9LBAGW5BmvymiZRMQPj7GYKmM1sF3cqkLhmHaEY",
  "key46": "4GQGzx3dUshinm9RBgAWHeAGC1L9sua3iEW91fJLQcX28AAcPha4TQnzVodnfaoaiDwESmXujE1E7QoQJgFSCAUx"
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
