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
    "3P73xDKJawYyDRGpkjT4tvB1tipmPwD8KtxTFS9bik6wSzeV8RDxWBfamTvJuFU4RzBJN7sXYXuDZUobLQRraFRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsenXmXjXt99H5gUdJg8DYSgBuFF92c1MqGPn4dDfFrjrvCnpP45K4TXfft6tHgUssWoniZ9VF3H93VtbpPz6bo",
  "key1": "3tgYrsAxUUZ7XGAzWLaBmuCjkZpAdMvt86LCHp8b69wd62tz8ZWjo8fHPfqBVGTzVjUTbjiq6d2Zs93vMiXXEw4q",
  "key2": "3o956474yhkL6vUaRTwyLTQuJ51xvAB7tXNGhkGSqSmPBr87gahchR1dvjKXhbCsF5HDk42WiSX4fFxJKvNDTDwM",
  "key3": "5om6HNs5QSeEWzEbcaqcYP1TKSKD3isqBPE3qFbykJDvvVhAeWcxuWhZkhqYw8oiDGAcnuBz5L8Gj2SnByPeWX9z",
  "key4": "Dsz41FWAj2971RVV2WyYPLiJq1LgLzUUxyc1BF6uJj3AKaaiV36NGjsnCpRFEdXGYhykoP9f1yiT1EhDAzMr8vZ",
  "key5": "dhNB5du1yiKqVEpS75HBEJcMFi6ModzjRJgaLoc7ZetZbCAQqpzLU5748KiUzKHXnqR9kg8gUGgRRNMQ9yjkFRV",
  "key6": "4x4gqjZS9GomTRUuPhs3HSEDCydvP3VLXGPDiTHzu1SC78JPAMowT5GWKpkDR5LT1GxwxmLB4UGZQsRdiV1x88DV",
  "key7": "5LUR5NM98XfFVF3TK8rVSjtEFAP2NZe9ft5w7vmvHdb7wEN4iTfqNQ2ULoXN4BJtLC5x5h7hHz4eASPoNGufzasZ",
  "key8": "3GHke9k4XvDLVC82vo4DAkDUvuLSEBSBZM29ZNXVjxssFx8VxiGfzM7sZGpPkKv1B5xT1898G771iMnCySGmzfVQ",
  "key9": "4Ky3HVAV7at6K7R2xxsCnku9XuqcDjbRkTYiwEcnFarqJY7yYz2DZmi5Y83txoZtb8SRcsLncT6QzMnjkZ3XrmCV",
  "key10": "otdTmFQp2rhqURqTyaBk1Se1xgKMU99r683eYeZomVEnssd6t5F9EhCCAWu9PeZFUQpKGNa5xHv9Gzh1AY9WEp5",
  "key11": "5kNrEH2c4gW1t35iFPg4TebrACGhyFatNWQGBHwB8tgKtuXEjnZq64TgfRWwzYiwSjEfWRXfMBDRbaFHSUAEvKST",
  "key12": "44FwNXrEDFvtJ9zanPhbPJjBih7yaBv864V5AdRX4ubvbRqfjUgRA5cAh7Xrkwt16uPQW9s7hzu7uYo5QbyQsxW5",
  "key13": "p37CBmKAMPYux84ohS7WzvXSt1pKjHidRxzcL4y6ibd76G1HspofGH9KWrQx6RCqcnfD7VEmQeCgvMYnYLzubP8",
  "key14": "4fnciaZSotRtF4nMTAf9iPjsYjbCChuLBFfkPaom16H8VuMNa6LS6MXRhjdDzbv5paJ9rYXXNjMipW5bPhCFTRty",
  "key15": "wEceXG3fTMzXWsaPW4VP3q9GaqGsc7yFW9YBFksdMpNrRH9KBW3GdvHdqEnQRA7ZM2RR63TvufbjAq1PriWRucB",
  "key16": "5ffA4hoCVh3aQohTsHe4MzKbT84wRTVz84eWrGMprjgLXtZ2LUv93LbGSCr32EWMoAYZj922Lw3ExHrRQDY7fdkp",
  "key17": "4sVHpYcD7xbYd8d3Rj9tPn2NuApq9vmAHGXaHotwxxdtQ35jGgAjjqK1ceb8EYgMXtwetk4T5PQvNGPNfbAPj9LM",
  "key18": "3xD95iSBdG4RPWiUFpoXzS6zaaJyR8dN6GkbtbM433feRnUtiUcm4mauRMLut411RTTSFJLrAjL21A1xczvQHdrP",
  "key19": "qVonrYkvBzJCbtGeJTXVwzoS9kDbUQtkZDctb5xMaLtQTW6jgYi2oUC78B6MJfQno5F8B5nqQX9uwqav7YDKy4h",
  "key20": "4ZjwX5kg4VrRr7F3JKuwWSzmNbhVZyD4zHBzvCDan2tuvkdBmXy4KzJfxP8Uzr3uBQ3e3WhdTYWR8N2LBXbSkaAP",
  "key21": "nTzxXy9ZCrUHr1msUz2NYiyudoGRdRns7DUmDgpCXAzw4wVpPr7b4xEwUnbM8r3pqgDchL9zE1nAGVDMaUpAWbq",
  "key22": "5UJN1cZgwpjQJdx8yYkxmgv4p7qRBWA2GBDqakPjwNEcHyCZgCjErDw8CKjU4AQxp8vobGHDNSF4RpA67NZatJs3",
  "key23": "3R3RSRxnx9FUxAGkqXVnzt69RUs41UNhZdhpmJZ5h5u1nJ9qPMzjpxscLJx7ZhVVe8K4jiqKZYm2ACbeCjvswfpQ",
  "key24": "3LmNT4RtVYxt7RYrdrrzsQ624gtbacwapxH2mhk35BrkHdUm47Xo2yYSckSPn3t3Jk3Q85Utt7PkEDJXdSRaP2dP",
  "key25": "KN2r4FtpHrXNnRQF1BAyr9x1gC1RyJKGRegogngfFG7iKGNUt3ywSHz5GebewDnAq9KkCCK1DseXEZvcerDcEK5",
  "key26": "3fFw9yX6G1Fuy5wX6EoYKuupphUHWS2V7cTqw7hRad2b4jtuHvHwU9jFhnxVcf2m21vC3rfTh9QrVmtnPn1PVFrY",
  "key27": "4f85VXHKG1FyXUJgX8AhAPomCXAgPYjZcVSquC4guu6XwXGiAEWqAG3Avkz3DgicwUEXzE1TuSqwvhHzXN4U6max",
  "key28": "4Pq4LTcgnSVzp7r9GuJNV6Jsn1rWwwtGeqvL8jqx2ZGTWMPMis8Eq9UwaYc6SGC7eeZi1Q6WD2CDz2rAoMUeKadx",
  "key29": "4bhD2Q56ywzDeY8GSG6LVVw6uM4TBXqt8YwRaem333AUW7Rf2bRJsU3jgyq4Lgejk2m2n7bZzwfcRTL7UbgT8KvE",
  "key30": "phS8S1Rwx2WUmchqQA5FECPKVj4EfdUDqwB5x6XzVWcbmbb4pV9t32cSsBpRoQ7jHABdHYGneqvgfvDUeEmqn4d",
  "key31": "32kifEf72TwaXMK8RvcyoRmCERh5pTCdwDhveDzPwpx45iwwc9LA5GKo6fe4g8skbZHDS1XuqiUT3S1KGzmAsqNK",
  "key32": "2mk16pfXSnCf12Yx5uhTTsRv15jZXkCQb31bu64gfSnmAHkUuUFTUa5oQF4QNwcz45E57xgkTtHzC11RPEUtgdQ6",
  "key33": "3w2njynUfm87Mrnh9ya8GwWcJ2zCkkx6h5h8Vu563fa746LR5FMPLHRpwrbnGJ1y6HKgkKDxnD7jL4Um79DDEP9Z",
  "key34": "31z16GBEhRTv3u9DwhAfyRWzCKFcaMxSieyt6Sj29WoN1gumse8q9DU6iY4goWFGaN5S4qyhfMPxtmGi8svVMfws",
  "key35": "36WUQZvZx3APEE8Fe1cxxECr7DjFi6Br2AdQn7JNZS2kRy4GAqFLdu5Vq1K5e4hvdLhfVFkcRZ2bDVjRH7T5Atj8",
  "key36": "tJ9ACbBW1gghB5FCJuoj32gprbsr67YSSqDtBHzpyUsC9DAVD6AKWvUssbkEHSHFkGKcpfgh38aAPiUxEppsiMV",
  "key37": "3ycruLCV1kU3BVVPawHpJYdF5RdcVrUE42vYvpdKSDueC3zyN8QhUozmfR81zogPpvDDXtha9cUjDz9jA77BdKGH",
  "key38": "66zrAvtZWVvRNVKrBV6W3C1AyVKj5PUaTUJzf1TpKGZ3Dmm4fhVbxhkSXBwAsfYZ5io6q41nivD4dUYCJ4vVZ891",
  "key39": "42Eh97myGxeNDPgB2YWjM49cctM6mAFKY8DjDKRUabTr6mGCVv5EpzqZtFKwVtNf6MhGtdW2LwpJANQ98Ye8sdMS",
  "key40": "2BYciS4JvVUn9ycaNVHJEdsnVnpY3RoGAMXMdUpjqMC5ZK2nEfchLK5TPm2dBNLviJBPZtrEvmQgV6DSQWi7oy8a",
  "key41": "bWiqtTRrkcp2reNjECPjyhZ6mkZqeWztbx8sM592rnPnJNM77ziL6Pe8WaXCQmgVjnFg7RkzVkqvZmPVtSCucyP",
  "key42": "5hKcVphfystxNfJ7QyMi8H1GqS9m6LzXLNLt69Miv1LjRRVF8CarrPqwp3fau8JsSifyrSrW9FvjPFtMesz7y4FF",
  "key43": "AtnWsvaJcYgizMGMGF1t2Mtx7vpngocX84RvrNjVJYxADRfGKDadZoE8vZ1MRhUWqQL114HZtKdH7WPvR3BKysi",
  "key44": "5fKDex82kwsvRG9pdPgcBY8fXMh58eMuYcKMU1ARS5yTEF36FmSuC7riiDsAE21xvBpRhN8vqVY1uPTMdHXhSGtE",
  "key45": "39ua6YCtAFaZektfEKJqBEuH5tYxXSg27aMQv2cp6VtnWmGTe5sDfxtzuumNxqmBuxTpRcmiMT8ojLWQ7bBzf14J",
  "key46": "33rU4F9rZybiNHET21prPEa4y5uTydeJri8cRRwyS8ic7UdydtmJHBCnxLb2EFmJZVERCAGRpLgbm6RjGUJzqWHj",
  "key47": "4wCXewdCTW2n1cDeTwFzBZV6KutXnCekK8oav5VRpxUqeMay5xYYgWumWb4jtnCoZVi6pUL6BCwiKtLMUMKwttKs",
  "key48": "2fDKRbBrb2brP9QSfE9RsyUNvtFLVwwsZYsbwB2oDW2fb9CzHcFzEeTh7UojETJ7xRF5n8BHL89oNYTzodZxJT8M"
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
