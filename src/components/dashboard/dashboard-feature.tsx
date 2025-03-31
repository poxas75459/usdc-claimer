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
    "4FrfhivLqgw33UqLMPwt7egxQFnArJaJpX6Rji1fDuQSqq84ZWNmWudBUiLcdSmKVt8V6WyJRRV74ddHfLgPcJep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJbc1y763DtM16Xu2s4xi6j5umNPPEneWBxTujioQexbE3AkcVhSAB2EGdvne6FSbPb3rUncEq33CeuRPjJeVd4",
  "key1": "5dcVuGgMnqhtyGYVxZZ3JvDzgCHfkSQQiQeubqGzbqBzyG6XuKP5JVEJGYbVxR8UDp8uXEW4tXdkqFRTYP7pVNSU",
  "key2": "3zW5YeUnCHZ59RFyxSZH3LjCe21mfYSaHUVtF4h8zSBY6hjQpfthVJ6maaTUUAYyLR6PbnDEUjrrSqTg9SSSCPi9",
  "key3": "4Na8rHD69qEG5mg8bGJt3mkckUdsc3dbMQbev85vrJMoWLye1B6Mn24CTcAfhtky8C4VxWZD99BqwjXzaKt17Aag",
  "key4": "4tb9uw1yH3p8t7XSVpVNQwifXuuQG92KuemCpegUpnpBRiy8WbHAFotBnJ2mSqbwhRPcmYb6E6QN8NnpV5kkh3er",
  "key5": "65CAyyuMuZoVBCitXZAUnV9CGaEmeSgjvHdPkdkMWinZvx62UUcznpdU2qRb62b1voQsisXT2YFU9o7jG4UAYLXF",
  "key6": "CYMERYfPZTWxGH2xNKSLaqB9n5pujWmUc7qNiULjoqAMWq9yeUWEucREVzW3CwEbPgNS33UjvEYeqkfduMqZVuZ",
  "key7": "2PmQ4G5KeHkf5WkP8vzPHwHVymaD24Y3RuCXfyggKHjKy6c7DibherNR5Hb8NQ4JaojDg1jSYcXLboRsP6e1ktdg",
  "key8": "5peQHdNeWJU8bjUVyvbdE7RdYs2eKjoFcgr1qiQp6wr1XZK9JAbAmhgPcwnUsWUVx39zAdgDqWDgorN2fDpzQ2GS",
  "key9": "59Sx98m4hUZUyGLQVLkYE8J649B6ArxakqLGRWewmq42JsDeq9aunaTcAcc9xzN8kTyNmhX94DcrTMpZx5EMfFq6",
  "key10": "4xi54JSnbqhrjz1SJuLvP68iqiCPUpW33AuXUYeQSJrvTkn6ru7LwmMofoHdsk8odvGWGzqJzLD7Yu4agAjPd4MB",
  "key11": "KPC5S9fWbnHq3YeDCt1yiJ7tbCSmg2nHWBRKcK1ujzj2oGHRDnEF6Vj3rJs8uenD4TTmvS6t1UFRBHWfpf7tnnc",
  "key12": "3BcpNn4wUrsA7P1MAV8DoYqC7eXPhZZUhCuKfw8pZHFqsSKRCrnhAJsLdTxec6DqqA1R8NJj89VLo3zPmzqeSNUA",
  "key13": "4D6FhsszwbR8eCVonUuCxe4VcH29QhPGMkaDBeYMyv7ESzfPtCzchtwD5CoU4JbeLoGfktiZUfZ1Lqrv9gv2ijC9",
  "key14": "4Su7AkXw1coQsKJye9kVsoWNPqvSnDPEXUjmP2bUQazDJ1qmPN7YoLRgvgecghDcKgrv2d91dNqLDctqeFM62xw5",
  "key15": "4Ni9mN865f7142who1DUrTJkfVjYgfnH46KvJ3pxWEPieQnQ94dmifoq3SZdfR9fnWYbpbts8UoNtJvP7LsraNy1",
  "key16": "5RqL8czcJC982QTd5xuCv8iHSxd6pAqAczhYFxp49VuWMnjU6cjFAe4AKBZZdPBnSsKv1CyK1iBsUPss7DYr8WeB",
  "key17": "2uGqd23gtF2hUJScAbGkYurm89NicfynTHjLpEK9zsVNUesfeNkhxtSo5NMPxfntfpu5YmHBdynZdHKkJwVq626W",
  "key18": "4LpiLsfAJUsbSwnt8m3Ftd1T4LUuPcRUMBgim9nvdHpEuewJMtTeqCpasoh2sPPRCvpF41FaWpgzMn44AtsTx6qu",
  "key19": "2xCV6MrGqWChNS9zueJ4KsfxFq153uLrAtEqJYwNLgN2YcULr5akxvhwNu36Gawypw4x6pPaZ33ftYj2zLXVVYmm",
  "key20": "53uLE2kd9buYgSBALn1jDNKt5ETsQDCqcvv5PMdnbZW8iLxiPxLvR4c41FRC2G37UCyKYnPYscHHAC21M8vK5PMh",
  "key21": "47aMcGawkxyy6fKpVDn5j7erScfd2H7Cn1vp32PPzTRaubm54xF2gVmr87B2WxvhbQsZUsC8j3WHNqZHzQTxMQGM",
  "key22": "67crNiBKXsfwyogKcJkkJvmEg7Mdu4fbkGtmrdoqEWuNdGG3jtnZa1VXb8k32DxXMJjut3v5vcgi7Pm8HHiAjwmg",
  "key23": "5D69Uzoimom9SRodPCogwNsrYSCZA8F5Cv4tdeJcjC8239K6kngM6SNrt8pmeFfxVt7Mje7ju3dRbq2e75BXEkKh",
  "key24": "2DfDnpZyZEsRaKyTBY3WcXDCvssuzKgyQ4j32LbJor8T73E6DtgHBhdHv1wKSQdBLvXrdz5vuHgK5kdPpmgxMkmw",
  "key25": "wT4ms2SokrunSQuyTCv1Uk77kd3yXpYvkQCygQrus8HJJg34neDtxYvja14eRA8zocJ4kt8nid13qDZMLT5fU68",
  "key26": "5CkEzZRX1f2ScEDAg6rtTgbgnd1ohjEhm7jEiho5jeLQhdLAAuRJYsvY3CrJTyDGRLKzVpa2swm9wtXVDT3Y9Atx",
  "key27": "JBZfcWMuQ8Q34URuWkw6f7TmX5h7oyjXiKR1N2ZFmkKq5yBpsbEyE6B6V6oGmu8EDSYFNweLPNb4tN1RWLQ1DeF",
  "key28": "66DPjFjXEdbt4YuodB4aTNdTd6mmv1LmK8GsiXGDwLgMth5zwLJ9iZ3qyv3EESqmg6PaYvjJMCE61Siwmt6njh1k",
  "key29": "55zMNtXQmwWY7VP37JPrqkvDQszt38wQ6UMEVndgQA7KCQzbnJfUBCXncm57Z9mRN2dBxnYoraEUcY95cgAyNfm7",
  "key30": "4bHakV3pFMZvkeyLZUfWJgENpJiyz68NvPr2NP5jk97Gpox5Yxj1i3jfYAu5eHjtH6jxdsKjDtgq1kptoQg1mtbW",
  "key31": "y4no3p2rk7B7amEjtKFaTYrnTqU8aTqemUcVrbFKJvoD2z7D2hs8JcvwQwEE1HcZkehRTRm4hvfVSra82SSZfxi",
  "key32": "284ghBrnVZr1uafnaNUjhkcnezWec3HuUZ8EjPXAbhNKhKNPXKN7KoZqjeqnEUyP4NAMSaaua49FDAz9BCYh3k7n",
  "key33": "3y2CiQKX4JYJx3sJs8xLCfpfqy5XiKsxaf6sdxyiKjZthzT7UyhzgUTiqk3EPukbpgw53LCnsEydq4DRKainjKxx",
  "key34": "51aWAkHQ1wu6uUXwf4ck5DqgPqHEpRyX8Gm6BBEZmrcnNLcw3v2gf6ryag7wBBdd1U9E3fpA7Xiszec8y2ZbUNwg",
  "key35": "4N5NXWYNTTwAQXpDFG7VXn7WEHWgyhtSnsRF1isXdM18cgseysZyLoUpMJ6aNs4eUhjARGqmr661rLrHBSKZJBYB"
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
