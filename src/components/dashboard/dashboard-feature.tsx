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
    "2kWoCStSsZ1U1iuFCSudm2PgCFa2Vwjx6BSDQXWREb4hX49TGUjAAhwVvUc955v2hxw7KDUrZ3D62BMjpQYLXUcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WE83D9wHBZ7jAb4CBxbH9MxWs1hmhtgPTLL9Wv9WxJyj4QpEbZu352mSjWRM45bYPdXRQV9oCShmtRSpvbhWmpL",
  "key1": "k985YsdkDVBpuLS8KFwohS3vgwt6xD6GVTDCfJVsN7dnxbKzXJhFpS9mhxo5sLGjkgv3UxCNK2cqn6U2U18hopW",
  "key2": "fuF8HWhkQ61Gd3MYRBeWaxD2xMHUo23MaSZpQpPeAQT4BmfK1ZEWMhvx7hnnLy5EfBufM2ZMdML41WdrnAmwpEs",
  "key3": "4hueSTh6ErSzHL3KXwGxfy3BmK7MxnmGUnMrddp9NsjCpoRbxaf12WknHB3poSdGnVjMnj7AiYgU8At1EYem5Vtf",
  "key4": "4wfuD4eoc8aSGfPbfbs4DWbDuTZHKSuNcao7BQAZ1MXUHT7u1grL45z1UCG14CD2Prp2nuNYGi2WNt6RDFj7CCw2",
  "key5": "Udnpg4pJ5Fe572eTCJ7anpBZxdFUbTsvaYdqmk2YqCGagPFNWheh6u2rLaiMLtxrRRXHb9RTqmvHmjCJBnux5VV",
  "key6": "4mYyE8tyNfWQ8wBkyJ7CFWEv6U6fdErD5iFvMRHEjZUwxUnbxTne92dWkN9aHPjinY8rPpkjGXUNyGxsWyDA2ZGp",
  "key7": "4LhQkrE5KQGTKQU6GMSFWkqfWYNaJnjA5U2EsyqpQsFNfPER5oga5fqsJ7KmJpEpFA1KrnzMShrhFPAeF4hMQvqP",
  "key8": "5omzTnozZWpiHhtmuh2TVHLmS7JEQtMUYLfByBkrVmZm6ZwZauz8w1ZoY1676gN28n78pRBxtMeoq7rDDrbbGEyY",
  "key9": "2F6U4BZVX2inv7MQE6P9xTG7veWEcCQvGeRQfJEFwh8tuzrWYHA7goeDEDM3YrmmixEaiSGZ58ioPBsAbhtCPZzs",
  "key10": "33oCp2dN2jTgUgdwTs5xhdaYko4hE1dCmgkrduteBaw6MfC6YByTVuXRhcfX3QkfC9oX1fzXzn61Q4uZUadMUDeJ",
  "key11": "5kuwXSK86AXavo176gjw4fwrR9nvUTeNGi9TRPcjqbAQj7wzirbfPgu2D1vkj8ffVDbDKU3u5UeHaRo1PwY6rgyM",
  "key12": "688NM73NriEz72bZS33Bu1TVQHo4Z9x8RojYu5z3Yv68z3tCFCqsNYqBcmJBRSfHCYkVdkZVsdmAQn4XyJBPRaw",
  "key13": "pfK5HkP3mY2AaEhdWzzhrvwPtBb79CSSSdxb8p9qrmtHMfhh7F6HSSN9u4t3KtP6Rrjnk6i4BNco1Gtzgv7H2TG",
  "key14": "2jLnPbbu9BSpdzdZMiqH8vQwojVQ4rBye2i6PF5AiLfDcjWi1qWuaRUssfE2hUmX9E9ktBVjNcWVCDTGQ5cUo7mq",
  "key15": "5av2cV9k8ADZvG4Yry54EkSnPfqyZFrcrEXtLx5sYrrDQntQ64e9Ee43GGQaCVCcaauywzz2ufqF8BSvNCvoC8wa",
  "key16": "5oNGExv41ggsT2KT5QyQSUNC9d7Z2asT3Lf3TmtxjeQVKqaSMg1WbywMqpiKptC574ExdoE885UbpaM4LaiicUVo",
  "key17": "ieAdoQnczaoetY3DuzbPLp55VATjPXezhUMdLCKAFUSWsbdJksAY5cmjnkP7dffJD7sM5m3wk3ULT2UeHQdAtr2",
  "key18": "TCJwAEPM2zjR2SJuL1QLrqpx8uB4hPpyo782dVgZ2tXxerAhgUx2vKoXBMPM2AmKjJeu9UTtyehzUYc7Y7ev4Dz",
  "key19": "57kbydC7fW2vGspJwsYetMPf3ZhHCYuT6qdkR4vUmVPbutzbqFZDeYwecsJAZT1Ho9A3M1CKFqy9jZDyvsbmBuE2",
  "key20": "4WikkJg5wHYnQWEUfw1gfU88AdGYs8S38vvK5RnZCPDzzR8j6dezfAAZyq84xymKwcLL2veEmzvgmSDpeH7azd5B",
  "key21": "4b1AGiPkHkk8UzHgiHst9kFr2YPUiHko3Jac4SypeQ9LUGDkM9HAogtoAj74kh73BMdLu6zMzGpNbJRpPCnwnCZY",
  "key22": "4vLSh79p11Ccof78xHSFiLnrer3ZEznvaqxTMEEEFRzTw9mWmzriypjw3fUKQAX4KqJojhhgWRuPSSvyPFL4Bnwy",
  "key23": "5x5KsY2ywEpMCQ7SgZdWTCjn4rXKXREMJB9qb6DR92KbFU4cyxVGppDmtK5PPMVeBNhjZh12V47inumpeYGaXyfh",
  "key24": "3z32EXMexQNHMoxsud4iexXqworBcbJvx3qbWpPDtm5emP4yVawxDJ31T1Q3KwArGQZJLaXQWYZ8xjqLQLiAsPwj",
  "key25": "2L3JQhCEPVRZBEddJKExxmmUHG5EE7M36ADK9yYC48pAecDPthZUM2SCEDqz4QmJoMKXfqLEh4wy36zQeS2NN8JE",
  "key26": "4aF6JxVdYpy2LVsNt92QZ1dGd39Up6CRFtrj9Y4aEi8UTAUSy4coJW1VnFB9T2R6NYZV9K3HFM7gSCv3KPhe2e9a",
  "key27": "3SzYbv4UK1gccPcodaTVXJFodhxjg1aPjy6aPQQdyGefi8KNdcN94nH5GhT1aP37N8wAaudC2FrxkqpbzLdnGgwv",
  "key28": "2PQn894M3kxBAFfkVdDvysDGnTYaTL4XEK3Q4NR6sGHg8U8j4fw4YRALrp71a361Nhy4Wd5hpAoiW1Hj7UbR6GMX",
  "key29": "RjihoBUSsCD8MD8RuaU6P4wr6xT5gpgMHp8RpPDLKb3BExbdpDAQA6WbHRiKLM4kLnnU2B5AJoJF35WKFiae8GK",
  "key30": "43ntqcUMTqe6HneacEC5m267oUiAHxHLt9v3kfzCcmFnn4ZRvrc2GUknA8NHeX4PkUXA5zntNdtR9tJQfqxHJTub",
  "key31": "3kNC3LSvEcUYZM8pbDngJsPRkuVCnns2zfzF6qzh4LsQhNPXdEaSxmN8ESbH2UEHTYvEAjn8ouS1N5yV9ckUrAwL",
  "key32": "4N4uHbVHozMgnaen2b3Y47BpDJ8HWGYMoYbPRDMtDEEpWR7SUWRMFmK67Qsv1jvCWzcTYpFnSQzHoC4fuPy7mNbW",
  "key33": "2rJn9s2cLDfx6LrzwgQR4DLFWR4746Tge7urjBsc5acHkYytLvE1bMomhRSvw7AMk9Ph7pScLgRPaRDh8Z8543wx",
  "key34": "DaXnkAyyzbHqUkUBydPT5AC5dSJo8msdCHaqquGbN2vyDNthM3ZMBg91EJrmhoFyRq4p4r4NmCdzydcuB8hJDAG",
  "key35": "61xXQT62Uk5NXVvFvbPzB5Pn5w4FG78SBvZEDNi9WfpscWihKktRqKiLY83Hyg5qSgXqSYxh8WCxAtvLsh3LXCz1",
  "key36": "4g65v5PhNT2Uop1QXU2AUBfj7ZNrnTiFhATwj6vESeJYsspMkVQqYbBBh7yAcHxKwWYjkw5tfTaWvn31FwP5CNJE",
  "key37": "4AzqG7hyoEMTKwaciSyhrNVcq1Wo8KKFiZWjv7nECq4AvTjXDbASh9y6EvFf3wvLALhZm1N6RS1np25eXfgufjA4",
  "key38": "ZguitCvaAZFg4NqKrtxmm3KGrVUDCRHqFutb94XzkxyDvChKAz58VMXD589SoZ83FQrTBf4Vrt9k1YThkejitzy",
  "key39": "2KVvRPoApYZnuLcUXvpvbtEqy9eaCEve8JzDevhaS3rgAdRc6ZXUGk6mMxhH8kzjXFvkH1PAWHrjSdoyrQhoxGhJ"
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
