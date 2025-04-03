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
    "3k49SY53wCo7v6TbhrkiZkqbUu2Gir3spiS7DX3kBDCLwSefsMMXw6zPwK4Mds5mNDzAKzkzhAS6jaDUGZZhaJdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HpigsS9mCEW1yRMvL8EdacZN3RKoykbfYFY8FYwNWoN8AgEjgDV1TRYpLweafX8TT4ie5daocs2m9jTx3inNZq",
  "key1": "3GYfgezZkJ19NRZEU6g32tAGFQ62tXkz4ocg5qc5YNq14bR95E2u6ZuVmpCgzBMxtSgnLJECjhg2hsqrWiDwvCDq",
  "key2": "5M6akHGf3DWZwLg7cr4zUjchBUkkqVYwGbX7WNNzqoWSGvPsnkr5oNEBVY5pfCmQgTP1Xw9qbyKHPVsiBVRPo8vv",
  "key3": "3aNi2GVsoexis84cJZXRgRpz7prgxmaGYsQQd47s88apWZJUBnoP2hkW3x7VXqgnJ7kMucNDVfbXW2AY8mRicvGW",
  "key4": "4SjbxQaSdMkge2M2cZnaMsPG83yT1Fin1KJnNwrC2uCykcV8jFH2NPEMyRbebp6CbosHU6dkMdxJFJVQjnRFKvQH",
  "key5": "2939Fsi3zsye23rRG2AkSzp1hTeQxw7ZA2wDNQHvEpCFzLkW4ptEE2yvjf5GgBL4DnMHTeaeKHyWSYS2xv5jRdiT",
  "key6": "2wDkoobwEKGGNuh8f2LBNTrUtXuGoqFHYGCEBBCcKQtLKzy3LMeB2RpKuFLx9xbPSJthy1JLcNSbLoo5uMhBmj6c",
  "key7": "2nGKzFgna3me65mAVjHmrRrYZrbxMgJZ4HBVhZ5UeabGaWYB6Nu1ydHR16dQauvFWkRtuvPs56AE6itchQF1a54u",
  "key8": "5joeS3dmhD61HRZWUkDbR27pcrLQiu8EDnjYM2Lfsf7NEMnKD6UJNrp53XJHRpECLi8jcJn81MNeYic76uddYokw",
  "key9": "2zE365Vd3hDUmDS4tcdUprsMDASkY64xstdQiYvRWafRuLTQQMncRd3hVgFdZFGGKqmGYjGTUXbGXprHsjCewknR",
  "key10": "63Gh5epJ8swFqqknHj9Gj1zeK3oNBcgV6bHFRYCh8WR6CT6J5xPS38kmVxn4FPNvNzrR1u5iZMopCgJvV45Xtwmo",
  "key11": "5AeCFPfppWsXcCvdA8MKCJDML2RLc262ATQ4GEUoz4a4o2LytzGMEqk7YXvoACiR3Sk9bCsMbSSivkKP6FrgxXfH",
  "key12": "2RTHierMis99JcpoHopHabrfEidKCMUPXiA1o6gvv9fQR6S3e8tRV6PyY2VQQXac6o1FHtEJ6ZrFB4324GsETSYz",
  "key13": "oZ76823gWmYZp5aYPPbxAfa6cdmz2f7rQYZTUhazc5Dc6U6fZE8kHbgeBHK4hZhXhaJrpLRGveeSGdVpSoXP1Pu",
  "key14": "2XztgDDJGZJTUac3nNR4FiMqw9EMhyUWEVzJJVkSt2N1jbch9psrZoAoWxAp7zYmjzx7RgZgzR1DuiUceDHeTH2z",
  "key15": "az8Pgx36BYwFS6ueDNeU9AWcmmyD61FwGtTRZ5UEpFuYi12GqC4YM8U34EmeygLxDq62trgNJhzTCt357JfdGEW",
  "key16": "4dwuMJo8jKCrcEWQjjjLhSNv9zh2fzAx4DrT25P6zZVxtRvjZqpmmWzjoeGynaGePQju3iwKzx4HpF18PWxhxfsD",
  "key17": "qqGvepLAwWEgRngycm6jye96h7XB44KeiTZMw7HdMo7h14vpQE6QafqaF4drp95er2kc8tw3vHxRhvqo9GJFaTK",
  "key18": "2nAeGa3HjPthA6SFUJ9qGtYYez84r321Xsir8dgFGVs88j852FNZ8JMtTWrvHC82dTRrWWQhZECqsy68ZAyts6LH",
  "key19": "5NVqaAbuWGpB2WLGM3DcTtW36zry44HxhTjcENCCNpE47EpigPKUs3W7qKcpbQZ6yBpo6gk5pnrwWPPMovkrfm8Y",
  "key20": "4Er52k6EMhkCEVag7fuWRUjgcch1oHC1YAJ9Kh8RE24iMuNrPoNYa3yonqtZ47gNvQWdR9CzMuQeiPy5VSXF245d",
  "key21": "2DSUfzEW4WU9Hcwp84UzdZzfwfkVk8WPE4VHcaJfwTtJadQuXoJCCRqcyqaN1c3kY3CofFMJWfVrFwmwzZAo9d4w",
  "key22": "59UbuMiqEjW8rjsbmmJqA1MDhs5PZDkAnkiw2K5PazFpVMC31TnbGZBzL6AdgDVU99QL4yqK1os957rdEAEpkGUC",
  "key23": "61ofM4Y2YmkYx9Dpn8GVZT2oSEJwxjHcxYv3TJ6iuKyGgxcQ6PZ2bYhErjXLSaR7G5VTdeY9n1UM2Tx9iLtis6m2",
  "key24": "2YH6CavT4DQ3KENbt7PVLQ9y92ahc3ttmFMSs3cZzYFu9mbwyX9fMrYStrAxjUP4H8D5QVqCBgbMmu3BKWRDP4Pq",
  "key25": "3qNWT4SLSd2BqmFEEozy3YLLcz29SwCWJDSedndY1VbFsjzVNsmyiqJfNf82E5tx7rm6NF2SJHzyGvhgzBE1d1cP",
  "key26": "4MTdEtrdRcgz2JjCwsYRFxAnr2xZ2Q7nrx8B9bAmtYFyEmHBusSXPSGZ4KQz68xurCGU5TY3p7gQQu1Z5NueyVRS",
  "key27": "2hx1ckuoe2HUUcTyKMxJkP6BkVykCggKFTXhdMSEgvWMQfQhwbjh9C4pw5m9TmZprh3C8TCuUa685ckEztr413Pt",
  "key28": "pXkJUNhhZtCTiQ57e82Qv72pLFvgzttDs3XEKvo78hZkBKFEWwT54XZfB19FVP1FvbdhcZ3oLqsfneGrdsKKpgN",
  "key29": "3LMLu1WHsCUq599gw5AQ71afivmBfDrFmkv4neZvsejKKR1RH6NReJxaecPP61UP4dzL3sVRjbJ8xjxu2FX3WoUk",
  "key30": "5XaMQNnCHt5P4rrnYNxt9PxszK8TXmeMJTWUXgDnZhv39uxNkCSrkemEs18KPDgDKpxcSv8ymLgYP8E9xnBits4p",
  "key31": "523Ce7cV9NgnUF9Fp242L8tHWdwgsq1d2wGyb7CDo9KDSMT8imkmxjDkqCnjQWMTeoXjReN5qPCoKC7UWMzMRDei",
  "key32": "5u6mb8VgGWjFdmdLaTgc1PjxgkZJWzfGDcARkWsCd8WbA2sUaxShYG4k6tXxmousJuHmQtY7vWymNGzXFENWufUU",
  "key33": "4mx87Nngy2d1nqa2BBRiSzM2XwSJJMMxD2jb3u5V35Wpvpm2i3S2wSaWpWA4HHbmhpqConoSCCM7xNX2F74fNLMK",
  "key34": "3dqG7hqeLFxr31SMf1V5ihpUubK17QVPBE2KgKccUaWMdExBvcV2FHVWvZgYL93VPYbs7iDvUqrhv3SmLXK2B2XP",
  "key35": "36aNxYpHCuv49ZGkrxx5gn6hxX7RrjXEtnHhhykovB4Y3ABYd9dRNncLMh18JcsRxFNNXWqmGheSjWiS9MV5Bx1S",
  "key36": "Y18P67bjbtGD7eTUYgcahd8JAbkHs1DWrCoKZ84bwPSqvMqeWZUFRfWceLM1LoRcie7i8Dndv5LRGESymysfFeU",
  "key37": "2TonfzReoNgdWonLbYCbXqrF6Ef79Wr97kYAfs1icZJxrFxGsxVTvWopN6dMjRnMQ2a7EvatFnKFXzqdzfhDUybf",
  "key38": "Yw8Wg6JBtqW5vjrSoA4bWut8PfRbRLt2oJNw5s48HrsVKkRMUqNBgZZGK6x2Ugor6EUWkJtBqgpC3dvBE1snEmG",
  "key39": "3qGbiuyqLXk9prkxxQSXyJS4ytgVGgRGn6UYo7BVYerUjq24LfN17PgFvvLS7wEYjGdJQwZM2KrboPu2Q2DNftbB",
  "key40": "4Whs8YxWqeXU3VN4QUKB8fqKd8rcaHfPD81e6kHQJCSbMGXrx4zJzHMhqQXKxxmnwTfXUN7ro16kCHS8fgmbADZm",
  "key41": "5Eg6QwKmiURJDQiiTsn55WKEvSM4VDjpKucLPreuyKXw5Mtn86o7rQ7TabMKKGAXJ6CZyracRjCBs2rmURfBg1tE",
  "key42": "2H55ncwD5CPMMfCBXDLBhtbQwfzTk6eYn5yje93mJHfu1wvd93MK8omXJUt3CKz2N4ceaCQonqi9wKF8JFHzTsMs"
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
