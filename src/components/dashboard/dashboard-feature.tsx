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
    "4DLDusWBf8xoJ2ysQgpC45xZ1wa7SzMyeLPxWgT6hxg9SX6RwQQZck7uCQo25b4JashBSUVqqiWZ2F73FPNdP5kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFUic7dWvfJqzu743FM6NLoq4dLwbt6DXXiLqFq1hZUFFQAyHzZ6sUcUZyzVS9y9S1GVoHpcND3i7xFB1ieJ7ru",
  "key1": "2ZvKPPwmrCHCD1wzBVXaSTaRvUCBixj45uCb6QkLPhbsYXntiWxfSNSS3vR7F88RBtBFcXeMgAFySSbvVdw86ByK",
  "key2": "RrwZYuJza2yxBUDEVJqv64yydHKNQoZa3FeSXXXdWRoDaMEKuLgDVsdRzXNm4TP4yQSS2vg6gZAoJ7bfkVDthZb",
  "key3": "36Q3wJLDp1iDNpLHBWGj1TJcEoW1mVx9zeEGxerjxuU2DPpQBit5y28pJynvzoFbqjNXXs2uDAjxAFJTsAtAXouU",
  "key4": "2eZvsjBpdaoBqJUu5H1fhcBf8PuqqRMqJpgJBkGGngst4zEPekNgSiauvrwWktQ7PfgBo2hF5AMGQhZbDKQdERHg",
  "key5": "4ojxmjLMsh9PbyRP1rMPLznYqAT3Wi7uChJTLHx2Xg1hBxBtzAN4QME3UA6Y1UHdKjNYYsJEKA3v2jp2wGEKdxYs",
  "key6": "jgnRCcmrtkroxPRXjWKRKWaYaw5t2dDQACNaou7kMYrKXMCPk8wQBNiy8vqKZYcJiFMV6eoTEp1PjrAfegYv8wd",
  "key7": "vENU4cYHSsj9sUfz33TDKM34sgbeWwKWcMraMZEzkF6KbhjMSSRzse1Bh1egHQx5s6urS6QTnBTcw2dS1tq7uhA",
  "key8": "5DyZ174RHtpUUrumnMt2obKUE8gPN5wKNsGdPMZLrXa1g9tmRBm3PxgqviULVTazYsvgMu1pwzzGUFaqSycCodFB",
  "key9": "3u5LF5WxCSfPy6V2968bgHV7J4FeCmJ12wC9LjySagatKgQutHuKyEoysAHSkSz2JqH48N9wyNmYmYmJbJNA57NB",
  "key10": "5YUwArGJEeFJ5SiwpCbF8tHWue3bLfccASxhNtJkCqzq1bn1fyLGXxwhuRgEZ76BE8wMCQvQh1wmZkiguPWoYhko",
  "key11": "3r7GT1sY1jMeNrtWHKN8zj9XRKc55rdgGDHDGH5tBcFadVsp4hHmhjU3uvVh2dCSDSHVxvjaV7PN3UYzPWgHoZ2t",
  "key12": "3yoapqub4YRYg2bVECAPYor31j56fRXrFpMYCZmSdd7ThtETk23VZ897zchYXe5XMrvaQUNqiHFuwmsTXiaqxYyo",
  "key13": "4Pcix8h9yjD7PzPfN1d3tJtRbewv8dL6srz8hJ8jfr6AgNegjpPUKg3fg1krnF2gTJiXAV4AASbwznAjzzEt85J5",
  "key14": "yEqWh15sZR3KDu71wGiLM2Dyi7Vpx9Bh12tCDSvjXiGA2LsJPa97whyMoGSzAhkrzjmZJV3buoR2A4oyeaFPWyh",
  "key15": "2JoCGsUCn143kVZgnmuhbG8VJ8wHXKFU7UzmDyhXTuczdkVRWks5o7Z92y8X9c581ZfZewxCPhcGPA1MKve8MjCA",
  "key16": "2kF251b3359gPRWMmRbk1HesbYkK6YfG64P5fffHMzdhTjsD8B5kgD96DQGsqSYP3c2PbpbZutG1ECvLnTgww6Ng",
  "key17": "5JpnyndJ5Grh8J9A7Axt3LLsRZtzUhgHhQDRdrXJfmpUjgfUC9aR6congKKjbGAkfexhhPbkPhGiwi8CJyUa1UFJ",
  "key18": "5mWeZU1F2a5uSaaKYdXDyUpSSnK8VT7yRUtRxy83Y8kXtiks42RQy6U76ZtC47qEiEyDipxw77zLMw9uyg6pjjvD",
  "key19": "4LracwRJaYMZbGNFESBp3YJKoSsLTLE33pjxKh6G4kZQFxN8iPLzQemrsar6PSj9PtonzxLnRCLDftU8qKcZycqN",
  "key20": "66y13STZNp5Zs6KFbNWXjMNKKUZsZ5te8YdcMRic7ryCu8vdtcBwQbdCRdzNNGfScaGjucF5bDwVjRQPv8fiRhPU",
  "key21": "k4xcJBQe1XUJ4fPUKtfn2EbdZ8HsibuU5Mv43CqRR6xMCEJ3AmhJ3mM65vZ91QQYsBpaSt7357eCPZCq9oHRJNx",
  "key22": "3cjDAUDtWjR9h5ZArXCjKkxMQY5pLZQ6LaUWB39hy2nR4e98AHD7mt9avjp79C8djasnd34LYYCeX9sKVSGVmfDK",
  "key23": "45x4qXQmrKiqdjS2kANDNRo9ne6bEN2DBGUs8LTb9yZ3dz7v21F7SQP96iHLBKsENYavKkuMpkM2YKuujgDyfK1H",
  "key24": "2vEfmdMVrBDsUahKEgdpgADbRBHRcwgoqRiyWnYsXV5aLRvZd96VxUFzNPeFbahFyW8DepRNeawumtbpWii1EK3s",
  "key25": "2EQ1MLcocvprLgw96VnzVGNEp1adw5jArV3UbZE8xyUcwiCnBqVdDmaue3nigtR8FrwgLbXbYbjdFQEKUUBxwR8r",
  "key26": "2zp5MaPbRh3kCMbRvkg6DkyBADvd1eC5dWYycLwhMLfBDbr31JQyJZzErzvjNknh9zHFefYN7FatpYDU3ZVPcdGK",
  "key27": "rBBYzvfJCuKGeKKez264xh64AEvLUorHsbXYX5mUhrMe1WTF7c9zjh5wdNQrHy4ZNgta5MxuVCPUNaKXZfBKsKv",
  "key28": "FbPPoq6L6xCRt1EEGXN6jGJWsrH8nuW1CSSQ4x4dWytrVoBCsXFb3RmB4apiaCg5KLiQ3nWSZhjrsCnkLnaw9Rb",
  "key29": "4tRb4wFm9AxfqYK2EzsDy2sgS7w7FNub9ibizK5XELdRXNmtXP3deeLSaLvxoEbLBvUHoxGAPaMrb1xRZUTtufNU",
  "key30": "3zTcQ2q8AXpFAyayLNqEGHdVNpn9zSUgzJNvB2EBTph1PvC2CxE39rDNCi6DpRBKHnrz7nYy673y6HHAST4JGhn5",
  "key31": "4sPPGZhYu7RN7aRqZPCSFZ3Roq1VCP9Djh3ZQt9ExpDhJ8X8hpDQfE196eewYxxbw5boRxqgkbhTpPkKmH8PxufW",
  "key32": "5SZkKzyyNeDyxNqaRtjqmnsG33yZ9u3bKWVt6rXLSvh4mPUChpsuXitK9so9VioHhNfYnvGnLyukr3EU44QofShD",
  "key33": "26y5zPHj1qJETcDhwnG2gcafrmTy1aR3zV7DQDu9qK2BikyLR7e3syMx5RQx9xNkCC2cVQvCr67UV5WjH41kzntn",
  "key34": "3oxj2QfC4LCNLSVNjfJJipjdPDq61TppPfXmGSdtPir5aK98DCbTVVQuY7g6AuvwHMnEEtHd1yFXqaf5dkag83X4",
  "key35": "3bo7cdwd9PjcLzPes7AZodYrdWAmyBdJUVC3p365xR62VPoxFDRtzwC1U4ABqu6H5x49eJ6bhVcMZe5QQe44Loji",
  "key36": "kBMkVx1skjqNkiN6HY2MkVaaqWn9fUcEAUy9sXe315Hw7mZB4KJDEHMioamC6jKbH5FWaUc1tZwhi8eaoQP3esN",
  "key37": "26JL3XoHaBvpza4Hc2qb5Uk6eevZ6fLbw9AkZMmSfn4gjWmeipjAbocnyQYkGRtRtVEFfcdJoEDJYeUkjXf5brYu",
  "key38": "58dn1Jdhf1TH77gaBAudw92SBS17nbej3ZUTzNnuRP4T954o7dY7chrJtBy1J7F39J91qUwJdK4hL1iXJNdmPEC1",
  "key39": "Vjw7u4NhvBU5gjWkEmiAcaKdXr5ozNCB87Sm6B9BnsSCQ6aurWTPsH2QynNfs5fF2x397BAzxEQSn6Sb2MJfF9j",
  "key40": "3uyi1gQmipGans6Pm13vdPAVbVXUmjTNbwtapgozgAR9VoS14UjZ5fe45RM2R2fYKVCnWyrenu844yuRQro2hHk4",
  "key41": "3SF2mbvxy5HguALPzdrMa8BF5eVS61Ky6fZNZcDim2H5WTxPNEEXzFZJc3ddzewfaQzUa3kc3kHzEbSu41HJhMro",
  "key42": "4W1wNqzGUSo6ezDQfCMj7NFcaxCXEmvx6o7HFug32JHadTVY6NpXSPMoVt2ezFvjVbVErUtQdfnizCbcxqgx9yNz",
  "key43": "tpKzAbcZMVT1YySCXDyaaNADd4vGZbh7N3Cz6Swgd4XsbBTug1RMDBKbNq2LdHR1R1gAoAZV2txtyw8T93BYvuV",
  "key44": "62TFRdys1jotu5k2F1JNYNRA1ULG3XkTc2eY3JKKV1K67s8Zh1Hm8D2ohSgzg1sSwP4UcLBuodWXm9uQ36NhzhpF",
  "key45": "5PFwM3mSFw8kAr8CZkMPramQhdKkrP17dsUgVWiFPmvwYVcEpDm7mn5XaR1U1chL6VC3nSa1FYLGBdhTvf6GdhPG",
  "key46": "3ma9t7JeddNXaYTeKtbV93xoD5bZy8ZFZN1QFfm7N6u8dCZBb6Si1Dk38EoW6yXmiZuzv8ZpiFdfwPRRvHs3fTVo"
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
