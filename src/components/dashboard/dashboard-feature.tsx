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
    "5665ySazM3fm2sXnnutSgnjs5SrGjeM8c85WhFZ8ZXM4CpnV8NQUvJMe1S1DSc8Tpy5y6VhZL8tb8xabQBTuzNmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27izQDwKiRuTtDkit1uYQmaELUihnWRhh5FiuCd4B2dmEXdoipgRxWxVqzEAAVReZzJ71qJnXuWJ3W7r9i7vhXCQ",
  "key1": "eiHFJM5qjePGnLyfT8CBmeWpKoJPhj9Ab8dUiHpPz6zPCpMXtKRBeNqqwWyxGceXCqTaD9qHhoWhQyndUCjMCqn",
  "key2": "nLsxrs9FiAXTj4QFKh6NVHRaVdiTMovqYgJ7pL5nk5seDM8CdQMu3kQwiqBeGWJfSfc5hArdL7Tq1vpMDw9oRxp",
  "key3": "4qqvErH9z6DVw855gPgT695WrDbmZV9BkX8rjvxaG6TEGnoezVijPjtPLymCNg5rTuamvfJenRGJJc271EP1X1La",
  "key4": "uTLXt7FmJc45wQuXhc42Z6NwdG9viRA7WPoAHvrYjyPfapZLTTQcaUcETQMGaeDMdtoivELj77Tx8fHYiYzWske",
  "key5": "65vtvqmqdtwqLunfZBYNdK3xA6T4k1yHtFfVyJQN5VjbjxKonkiH6YqDwW5heudoG6YztQiAQkNhp7CHvgJ4bMek",
  "key6": "4fqRvPzyTwGh4KFrUsJGBRNwUGRS3PUHToMztpWdttbrcAaFtDd1hZdkQ37nDrWcWigroRG3PyiqTa26sudmmsen",
  "key7": "5BGegnxZRQtBLcFt3JnEkipgaCAZfYK64kxZ3kswMPYNCrdB11E6f5bdhz38zJQ35RVmXbSudoeUKThQJXrDr8pe",
  "key8": "6Ewgm6Y2ckyaqjgCf1EZcBNzDJuBzdR1D35mj9NYXpkSPY622sXrRVCRz81a4ws9vit7LvUvyg77g26KSxQTTp3",
  "key9": "H5eLz6SJCKzR4J4wDiGh1PaKHnH2tyfCPaNbkbn2e7Uzt9gsjrTPwjNiBea5PMokcqLSHwr8fNjXfoPKYt6thNn",
  "key10": "4gLob4mEiT95qsXBGdWv6PoiFTXuy6VZJuBiJyGSsNsgzZQr4DZcTqmGyyNoF2eFHS5XhRRXA11hq1tGEANGqx77",
  "key11": "2uuSrc83wBCu4cuXNXJAV6Wmn53NLLvSP3ULQmDdMhQFM6ukmgQbr54Cu1o1C8FmpfgTyYsWcD2kmnZ5xL4d4NoZ",
  "key12": "fBW4TZQPrFmEYi4F67jgo3Npnnh1cKZmFgqQCoW6TQJpduCyT1UtnbuLVdnZUkhuxMDxdMWpdx35zRyvTtsH1So",
  "key13": "4CUAVcyQtPUy6hCBT1gWZ5rqqX1Q5XpM2QTeCuwfaAsJfEam7649XVtsyRJdCNi7zmHq2ad2votLh8SQCAcTU5Ac",
  "key14": "5YKxFmHLrHUSg9fmPBVGaqQTC8k9E9hN4zX4CznVt1CbhXYYLrYszfCmwrDV1Q2sTKGUBtoAcQvjsBLeKVCqZReY",
  "key15": "5HNz5pxpAigFMuuTabbRJoYUu3FEM7CTwfaSaXCydPiV8JEGdDPTfEjHsVqU2yJXgvEtR35Lpo9befP1wnTMKs8K",
  "key16": "5nUTymq34x2Gxnheezt2Ks4FKScGkNjBLU1Uky29UidAq5WotjqiPpc7ZLxXMerdn9SRSJJo4rckDRSYLtp9wTUh",
  "key17": "63pd8YX9Ns5iAkE5TWFfhyUgwtvfJuxdHaZJt798FLzDrvhADqA5AjjXq81Pn62JbmRkyrqsDWa5hbWWd9Ka23sD",
  "key18": "32YE5KVTWDMT4HeEXDJH95s1kaVbsMiCG5X8RrHFVTicouqTsCQqs1RM2zymGP6MSS7wBWzbuyZPT8VWJKerZV5",
  "key19": "3yWRqX4Fygk4pC24mqW87DWJ3Uctaxxzbxvcr2nRxjnpZqXVtX2JCEjhCHiemVPhqrw2arXDd65PnvgeRcjG7rqp",
  "key20": "BGcH29oHGXNwiMvTwNJX91Ynr6nn39yjvLbnEYDiGQbBNxC4K1gui15B7TkxzDetpmxj3m2zbqxT2DgFBej8Pt6",
  "key21": "mpL43dzWcNsemEWnZzqLSvd8PRiNf4G83LomMLuMEQsRaKtWTiub5VBLur1GHAx3ZMJLuX3zaUyhT4wLjSssbpf",
  "key22": "WFBVPCcCc9r6nHgiaExyd7riR45kxVYAkqx1GKB6bF13h1SxBHdMwQoueLwNARJBnnJ7wT6HUPPaiJ9mcw4jDaC",
  "key23": "by7Aeqtmk5Q9Q3J12GcRWbZy3npB3JPGq5Nk6uySZfLsksBmAknHWG1oySbzZk3NtAJwm5MB8jSmqpwBB8wee1N",
  "key24": "3PiqsNk8eJMdxTTbc7VLWgTWn9ozXT6vftcWiKJ9tuwh1ZerqDGrNLgrbdBs1Li7wf1L7wz3cBBYs7yeYwXLQbTu",
  "key25": "CJAvRANryvPjSNbmBybYm3Z2oiJEvkBBsRziYeeiaTFocyaV4KoZUiUsz65c7PJLUxpUEkXaLLXDcec2acSVuY6",
  "key26": "4sxDvNypVRdVUaMMabDpDhCaAX4kmFEavARANrBZkmAaXh5tYFG38tESD1HgRV2w5F24xtvkJiZnDfZwJoZPWmw1",
  "key27": "dFAZwGXFJQYC3TmTircFaPtHEhZjwCEeiQFMVE9zdE9teMe9NxunWFB5RLN1qXMcK6PsgoD7Vd8kcLGfx4FkkZM",
  "key28": "4sfymviziFCD52kqSp1EG2bAePaSSF2V7EvJzf7V1EDAno8ogLVyjq4BBUo3RbFtZnSbXHLxQQRGuC7KWcnpk3eq",
  "key29": "4UW1Qe4RZ4RyQVFYJCwMURZ4H5MWHRq7kLbHt9WQAiPeSm1pxHRaJhVCckuYa95QZCF4KCg9AhQSayxcZAsZwzP",
  "key30": "462gKzHF5y8XbRgphAY3GbMnH63iWtk2bAHCV5PcPfdCYrhnRKxUsEJetwXPppHyp7T2J7hPaLAhCgjfPRgjxrSW",
  "key31": "497JfJRtobda3Co3fHbsPj53boWPBg38MVME6s2mBzHhAgpE5u2tftaFnVnonBtFS5gsb7j98YJgDXEmGjuTb2Ux",
  "key32": "5SxX1qxPxdBJn1ifG3LL9hN3H7yEamN6gQuyxeQbRBofqRetjnHtYHpFxqmdRUnv8HzuAtxp9kFXGeaGUjYruh4U",
  "key33": "GESCUvFaT6w52nVJD1yd7sL3fmp4tyXQaARCKokNCGo9acXk3s7oewDS3sussnkSkRqLyrrfXPoAMUBcCHGaLEq",
  "key34": "5jhV7MzAzq8bUWir1nwHa6prHh27AVghGeQNp6NRUZHKsHm7mtXLcUFttWAtdwVt7WLFyGaDdwQon2d164uXcRP4",
  "key35": "4aYnVL9WU6834pRPuobJ7F5STVJhJb36ARFExktyPqNitsvUqfeu1Ly8VifNkCmRdAnWdxEodUM15ENZ8JcEJ7PL",
  "key36": "2Yd5ryRNd27jvdGNvAedoLMZkaqVM3xrLDdjFzHqbDkHhq291DFvkyUhcM5MFyrErV5emqnnoVfTkckNhRpqFhQm",
  "key37": "2gzowHG5rC5sw3b4aH2ksyrvrLdFwdicAQXWx5VBQHGbdh9WgrdxHM1xrMsxGx4GkVLYm9ineuSNJmSQKKwPxePz",
  "key38": "5UEGrUduRHbVMnNYsqLR7T1Ju8uemkG7BNBb1CEojEMqPq6oN9S6skGQnDmcrxt3iTDiHZ1VaUTTZXFakhDTjee8",
  "key39": "33jT3hFMXxqgucVVhURvpNpwwWiha9SYsAAnyppmspGHFjLuGxV6d4CEp3pgxUBm35QJAwNVQ5cU3ABtYB2B1q76",
  "key40": "qmryxV8LaXEWEtWTbb6xA6SiLsoacvehyfGMvCksyG4CZQicMaz3hSqzkpG48TxMzEQZbTgGGghBeRBFhYRHztZ",
  "key41": "5QWHJQoeeT7hPqwFfq3MAkJGcCvmnrwsPAeopF5YMZrd2nxHhyappqGvHFzMQJZCBzL6MEcq9ETDiBCiJTNaKEPU",
  "key42": "3fXjnvuWGa2NwKy9FdwstpyGnqS6XPXWKZTNpwMgueLgFZKVPzvoxQwcjfrdKW3v8XGTwxKQe34NcJeqtWuk3qMC",
  "key43": "2PNfVAoMw6WoRsWYCy5sRu1TGNUuFCBJzADa8KjPJPYvoUytE6ZCwsFQn5mhgXMTU8kadBqHbyua8PrUEjAGxb4D",
  "key44": "3HMfdAeg83AAoVADjA4FxoMJRdd2XvB7vfF5UXHXqpbcBEmuDdaoAVi4gMFQqkRBpptZoK3VDXUokk8UFJiCfimt",
  "key45": "5SHSwkxTTV7MXU5Qor4qLR3bzp282uStojW3oUQiQtG3Nb6qaFDGj9bhggqZhSePY2ik9uGAvF1LtjsCNxubG4xx",
  "key46": "2V6N1NFhGsbzDvHW6K4dPyYmbJoDCwJ2YmESxvZUYD3crmsjnhVa9i712XxDBh3wMk9SMCa6M812j7jBfjZCwXRK",
  "key47": "2wyFjk4vaZZrUKpALYudtfs5kT9DXHKG2TDr1hDrryLsJc9iLHcnB6YiY1TokXxo9G45aGe3rnUgizF6WvjkKMxS",
  "key48": "34TBq2Ji6NaQ5TaUH1Hvu92grT9UroT6Mkm2hVzkMAtfqrStdEeaboYkNd74HLaUhi4WaK2dJMio9AjgAm5SMK2V"
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
