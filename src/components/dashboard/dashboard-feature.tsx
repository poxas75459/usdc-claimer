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
    "5urPiUDbAY2ofnBUCNmeeBcycM6PExpeAPpfCdMDta3rrw8wFELbXgZJJjPNBiaBHXJCrJYExxGV3xVgPj2Vxui7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4LRFUm7vX7PyF6HiS4JdFVMUq9etSqp3i7AxRbhLA7qHWGfeuXxGaBP4x39xK3at4Mmua8TuuaYyMsRyRuPT7G",
  "key1": "4LydPdpa5HgFk4VPQ4gdKZs6AoJypD7NH8NQNHbGbcLF7xoCF3TCGidp6mi1ZfYxj7yyjGJWZvemPniTNzT3gdwj",
  "key2": "2MDpWijuw3t7p8mMNn5CSWkBG7kuNKhhTgkTEv3691sWnV3TusUTfZKC25xj7vU9voFjkuGZXuivaJisxEPZQotK",
  "key3": "4TzSwJheowqKwtt6F5yuUT7qTrYbQctbJ4C3p7LfLJSuXGD26foZAMLmg9qixGqJyX4M9Cna3Su5UQq6LFjRaURs",
  "key4": "4mfP9JEPc9GsTBKpfvnndvkKeJj55yMEt2RiDwGs32ffXrsroZpoZowhZwqszLAnxCwPAVn15aH6HCQhauLdpwj5",
  "key5": "e7Cd4GYdJVzQr18gJXh1u9USP1RomEihrVAuBKsGTpKp2S9tryQdm6sxJA1dvSv3JUDnaxoBQAFGK9jHBq6YqH8",
  "key6": "4Jjry2jxhtd7wuiLAffaJa6fDb6PwAEiWNPd7C3NeQNnvbVxHEApJUaaKdWnJGkW3zpBUpEenRR65QMoLrBpHJaW",
  "key7": "NjALevfp6JQz1fjWtju1ZDo4hhM1fhoTjQ1GfC4QNst4rNCFX3Vs8Mn7hB5mm7g9C3ue1CgMzrsjHQqzBFzswJb",
  "key8": "4qopXjJDGiwJ82gnCvLJSEJA4j88T4Rq7rmri7vX9kgaLzgkGzwy6CWdioMsKaXZPMdD54h1JxPkf8FNTsYTDBoC",
  "key9": "274mKTx3YnnZe3cXbYHo4a4GNQ6bThoqcc6Mapxbg11k6Cm91mNPPuVmEJZy9xv6XchouRUbHArnPSVCkwRELWXG",
  "key10": "4CM7PoPDH7aXqrvYQyUtQFccMKDkWUqjdjMZ87VaNTc5mvzhogcgjieB9fcKq1EYYU3jVm4jZUmmdw6D51649Pri",
  "key11": "3c5ngpzNKoabTk9YUhjmJZkrJdNAUtuDhrv5yCac1oiwAYTNrAEmg146JUe4ZDfa3s8XwvC6rnAC9ALWnQnmMd8o",
  "key12": "5uBL8jncNz8G8k4cMXDJ5vggyf5RPqCmmLnBCfxdtc8hShKrz5Jm5GigB9yC31xyE4Ju5WHwe1FBsQuQVqSMDe1w",
  "key13": "3XbfgZ3rjqegSAZ45qEoG8rYymSxqSgFNn1Fwr2FhCLb16iKDivGDFKF3s6afuxknipDSipBzDYFeYCjzE1chZ3L",
  "key14": "2oGkFX7NaZZ3YuLVYM9Ub3g5bob8es3sfShaMQimm5ViRxtFEvQrYkuTuL1CATtCgonYV4XoaCWW9bqn4TYjsMVp",
  "key15": "5JxD1bxkTyUCHZo2WCxwAAQR6SRxb1yC2AqogNfaaBjS6Typ4RktwSoPrYY2ptBAA28eGX16AC17Ujzjf9SPwABL",
  "key16": "3xaykkSoBW6WQwkSQsgdNDcTWrqLEn23e2BJ4hLkbEmLU6iSaPSgJtmwpcayWo2aDkruhciWYHVLXZmY6z6Cw7kM",
  "key17": "2W9UzA9i9gHQWj9UzLuuKpZf21FUYhWyxhhxysGUYkFz2uAEBSJc6iYU536oN7xxXHoaswL7iQ1Ffu8Nep4U6RqZ",
  "key18": "3L6MyphtdBcoB1TUUUKWKfkin5CG8QxGaMjg7vmnfET6hzdjTcw1zbpH97tMXcvh4SPW5rpnxyqLnJoYmBfmnhd4",
  "key19": "4DVaNBijj6znEwMk7crRCNpYNArsjHV3AseKspTGZZuREjntAg6Haz9zNzhkHKFyc4nVmABosnqjkyRNzP57C9gX",
  "key20": "zA7U2D9RJWghDvZ1HmVK7bTSA6sSfYpprsdihF8vg6fHheVx4tNzL5rxr2NGCNRo3JvhFvhVARb473AiuLZNbrn",
  "key21": "4mXGfgHWvBgHqJMtiQbsPQsREFT3e1mMJCcFSauXPB8dhPPCB2EJ5oh9UBGHrhm95aVSwshz6JgYLsAVvDj3Gtuw",
  "key22": "5F8Krim8yLVG1Dxdr3BDwmYecsxuCBvGFnrhyYKbrYdpwbz8Fry79vVn4Hu4nRbW9ZY74ueBWF6FJzU9oB2zYKVU",
  "key23": "ePzHSvUmjcFKiqA3553qREutveMgEYcvqeZHeKn1WnRzv2tR1aETuNJFezLGL7YiVsuxfzP5L6eJ2CBR5CAuYWT",
  "key24": "64NEXiGbLfNPMCtmth8B3VoF4tXtGMAE2eiPkqqatQWKfid4nuXNy9oN8qnhk4nvScBusQnYXqzcFZarP1kpG7cv",
  "key25": "2qapBa9ic7wFWrgH1CeMCQESWdSfWCUp5qhmtPTY1nvML1GZtdC9z7s7RnaZSsSaAbnHaZL4uZXEHLWAMo1ZE5CQ",
  "key26": "369nTZpLC1mCXQKumeUVAVDapC6RdztNdUG9sxcDBbpAkUbNMYu3Hc9V6fdEsZuCt8eN38M3VacrYEgxvqKUUaoE",
  "key27": "61srAxUxE7aAAgjAJRMuepJ8L9R4uFgD4JmxabfvhRn3oSyoRg6otHcxBkZWpgtx9S3ah5MsHwc8zr5S2AipKhrE",
  "key28": "3AaZ3mXYLUYGU4fzJ6xm5YK1LAgH8CLoKsniHUM7PXd9x3ehPSJEZnyYtzKiCZ63HKa4xCgx73mJL25AqtEDi95d",
  "key29": "5aPZ2i8VdxxLnPEwXuEZo2La6suyAqwt6JRXYmJWkL8A7zhSAYsVMJW2GmxdN88ACaRS2prfNUt5w74UGA8N7crw",
  "key30": "4JdTVVxHqaBHo5aQTk7jqtkeWNR31zUsHX5anbq2LqeMMT1x3zfsJvejZ6K2Wk8wCWm5UhpfT6TeEBABpMRjGLcc",
  "key31": "33d79u86y443CuNuBsgkTqr4UdqUcrk21FuTvqUBWrcrYYYZ2uZizyp13fbWM2UhzDp1dmZgvq3eohmHorZRsMoL",
  "key32": "5qMyTistiFGtKHXzHws4FNPSJo7dp1H3NETLrM55cq7A1LEjHhf11HYkKouURoMF3NSKsjzGnZpQXENZ6JMrhChp",
  "key33": "5dLLwZjftWgCjbbNvpG4J5nbDPBxnN791Qp8jAgNKhZheXxEDpsudYWk4fzPAoer8M437q4Xr88XNvQQxLP4U88e",
  "key34": "3jWSExTz3WKcCXQhVQqZYVfjBRjj6xQdzKGETaTYCT7fzAwXQg2FD7yVv4QAL8g8qPvSsw9DocSLdy76ShKSy6SY",
  "key35": "65No2rNXcxUJYGwmGaM2gp4cuuFDfEabzoQ1Rkp9D78761GDHCY7ukxgjFrigZ9ZEYWoTTeZBntv1PJcwyyc2yyR",
  "key36": "2K8Qf7weDbzBiLAcj9ZQRVDbLdWaqyLHoPpcw3BXesV2kwb95wze3rhpJTrDjQYgNxQChXrdXe9gLjmhgxpCq9bK",
  "key37": "3nmhHhRYxKfd4bULG2nk7h31qdR4LkNqpo9so4KyJBmGx8mjX2JHFCm1Jotc7qpGkQuB3yi6fTGWVmBttrBsmax8",
  "key38": "3etkuMMEvhB4jPwqK9sAtLvjB2nY3y4bZrxM4BRs17Bz3psNejUCebBQ36qVFVwE6fk41AB67uTGixpD47nWex5",
  "key39": "4mJFeRe4kNqnQBBmFhcFYtcHtKNFaxTKXm1pK7GSrg84en836TB9QVhSNW2HibxWW1x7zkSTBnXS3PyfaGV3Usyq",
  "key40": "2q5QpXJYcZv2ddWSGvtCDSWxYzHRsqkF2c37BvEZWNpvJNqx1nhasE6SJyNcW7LJg3h2G7CHsjhvCmaBhx823Sqa",
  "key41": "W6LZmb4rCuKbaUxTS76iQkV2WD5X8HMCQP6rCbpPKA9iuwHBo9xioG9TohxXpA9uyPNXRG74fNUoBAH1TrkXiT1",
  "key42": "FiZvw8GUhrYVoee7oaE4hdrkpawp8HQLzHE9gEDHLE3Xspe2KHK6zsB9NRSbTrgrrpf9ch4eWJXtAg7Yi5iEXVX",
  "key43": "3zGCDwkjRQZXb6XnKukiwnmtNcFnAaCUrNsbpuox9rBpAyMeycE8pnEoA5fxMQdjpAsizRqqqTFnyTPHeLwMfRbG",
  "key44": "4LkdJ2UZGEWXFpwFhA7aiB97DijW86nGKrasRnRTXUvcMEEKVYeoUwKE4iZNL84ozTrJXSeXu5TBhdee8tWk3Vno",
  "key45": "2qxw2U7hXNaWV4p263pi5Fasqj9FX6skLY8ZEkKPHpC9qM9WBc9EYQCamaYx2su2RkV2ECrDa6PC2oSR3GrToiAp",
  "key46": "iQRWfUnLS8jDthfqsLssz9sCr6Ra9JFbE7g6ZBnkuHNz3jtQSRmdYhfwTwJj94o1NdQxCo62Tff5mZQrpq756Kd",
  "key47": "2bDa8wowH84dRv5aqpbmMFaU8viUvSrakBWKu1dTtwvDjeAgcUvpiZj5YwmT7Q85cTctZfvptr81eRkwzhsHMg8f"
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
