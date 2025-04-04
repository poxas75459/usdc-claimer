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
    "43jaDQ747dzkk4HLYD1YcUujniV2FskrqAYtkqVkkBiq2AQt45MZukZf8u7RFo2djHRVsG2dy9Aqf5KNwJup79SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KUeF2Ejc31i9Xded1KkB1H9Xt5CQTbRvx3JYQ4sKUFVVEgxePWqqhpyS2j9YMCBbHNUfF57QBbyJ1LEEM6Xoo1U",
  "key1": "4ttBoc69M5ypRAbTic7dRNzLu8VfbdPxC6vhassfaeNvExp9fgroT2upXnJs9TpC1ztCfgqcMfVYveUTvBBghFRE",
  "key2": "66LZSvKpaf1ow8XM8er1T61YBGZkRsUKCMt53fLLASoPgdcgrV9osJzmt5Wv5LoVtPYnAfrpgvLXsoNboxpHuauz",
  "key3": "RoLRn2sxrDTa48VffzxuUb9XYXbnKWPAuDEqBXK8uUVhN2LsxdEjW6mYAmUQCrqHSAB4WUavz7jQXDveWLHXJ71",
  "key4": "2L5hYAv7U5zcJR6RLX2soNoD8Sj4uDkFjm4D7ArzVgAHH1rZm8JcDDdnPF8uDcDgdwZYwt97oPWsXJQY1k3Bxa2T",
  "key5": "4ghvXwXA9NKui2nAdKVga6j94U1jjqFdBd19czCGkk6Ee1EyLQGGSY8CtYQyDqv4UtQyFtf4mZaAjthGaeWT5yMX",
  "key6": "61TaHPN2K7tMTyzwAFgWV4BRFhMdLnUWfp4mH3M2P44sRAXMrEkndmRPYbjp59JZFpcKZaKPzt8CnFPskJx5oHH8",
  "key7": "3fjLppepZSaVUnBd8XqAEXhXzC6ANTMpUSjPaDL2BWR1ayWEAV8BvS9eYfumtPd75orWYqS9aRwDqUSBPjPLPd7n",
  "key8": "2SQKSsD4jGi2cKfnA6nL5abzzwKMCEnhhRNUQboKiWFgt8QnxEymYniFPLWrPyA7dQC1UQMaVWF2YaDSMWc6iyp8",
  "key9": "5r3jKBmpnvWCjrhpSnw63nEdPY9sjFiAsquSebCzq1kpdVvdvbBY6tD5JC1sPSrLfBp6iVXBL5KChWnSp4utsWgV",
  "key10": "3tcgyFGtTuAkS1zipJMPThSCUJJZ57TjjV7keP4U18PowbsLf1PGKfdKV9MRp7yQZvGtJFLjHzpttrVfyYaYPFko",
  "key11": "w177Smp7kyuow6mB1JdrSP3m3TWw9NxCJ1du1A3oduEbQ83LBVN6b4VfvPbF1rN7kkeuYP79NPYPZAmEbGWd7YQ",
  "key12": "2WtAEpdCynYvGAa8s5wBGkCAMqA7oodMbtcC5B7iNFXxH6vyyzMzmJybs5EVxoJJzjaun5VGVBCuvCXSX9iEkQcf",
  "key13": "284Wr6rm9j743K229UhPDhTRf2Pb8dnF5xBhL57AXAu2ubXf2NvnFVLwErAg67X3dHA8L24UqJtLQAVEsBKaefvj",
  "key14": "2tKrdFk8K9UFJG3TqDdcbDJTsVJh66voAfLom4zT8xAxrijtHiYZuHcn5BnAcpcqs9ZBCFMG6geG48tqzsA8LUGh",
  "key15": "4o6cB5xudTdnApEJi19MWemK7MzbnvQeYQrvt3TGYxArEyp8aJGGx1c1YTuL6XsWDm2vQef7WATLRFXXZ53Uw4t5",
  "key16": "7uTi7JTzvPjRppNz5UV7DbHZFGCL3Tm9c1yRdwrwR6TjKaJypwCkPfw5YfDCN7BAegvMfp1Tf2PWUjv4od18isu",
  "key17": "3AjyLrhQCGXPamMH4YR1gvc19mYVhCQHPX1BKF5XbXtg8fbhgrx7yHM3BK3r1E8CQqaLAGz7cswUM8p2MFUt9PJC",
  "key18": "2Znh81WBiyrQyXXWWSdwnwk4gPn1N82vTZ7ux71Expiidvwo8YQWqQZSywnxk23U6UqDaA2jMTAPF6P7UtTXMEyV",
  "key19": "5zfY9FMJwbPWXbAarv4SRcWT538uAVVoR74HWq5fgA8fBczRXcK1zHSmvbEZzkyYMa6VUL2oZ44TYcoweuC19ZqB",
  "key20": "4E4ULBiJgKM69Fn8kEpvvPX9emCu2ZmQpbJxpt61JJuQtSFqnDum2prEd2amGoc7MAjNTpm5YXDxLQFuGm18r7gd",
  "key21": "NrWVrYYpir4r1MeFWzxUxyZnaZtLNwhmDd3mE2hrSJqFF4fbuDoqp47yEBkvqvUz86Z17aVAMVq8UR7kLLdZ8vP",
  "key22": "2u1oyCoGjYMb7j4bXPfb64vWFTEnG9UyA5kQ4vsYMCD2nbEr4RVX4wizBUyNXKxBGzZgCfGAYonzp69AaJ77VYp5",
  "key23": "4GqpBW6FoYE5cNU5kMacMsDMxv6TE6DvDfcBHh1UAB9JSmVTie7c9nDU9eYZXJrDND2TPBw2crqrgBdUoDD8J2k5",
  "key24": "41RipgrygS2HmGhp3LwpgPdEk7jAhQi8DtQ2UNFKWo39oCmC61exfDjfLR5Fbb7v2gtd4TXA9rX9Vcg9s3rnNPKW",
  "key25": "48ZcyksTq27SDoZnF5gJPKSNcMkdySM4JuJNRxe1VRfFK18QvmAa4aMNrF492xixvQsfwstn6w8ufG6ccvHZ7LPD",
  "key26": "67BYm7uV1m6mCTrduTA2hCt197YRWf8ivqxLkwLb6rmVzWt97uB69UhqzCzCfncDgyBjRD3vvvFWtPGU56Ta12xM",
  "key27": "h5SG2yB4JqopMGxGkHCzPCaMbKrMrUiytm7iTgbx5CuBKtDQrCZ67fbjPUzdf7L7d8sfSi87ggvv4p6j8NgxRr5",
  "key28": "5C5E5cSDXEFd4q36dKMeTsUySp9XvNutkT4NBcN7C8qVpMc8ogZ6fu7SuHKWyqbVzFiiLb3t9JHpze7Yni3tAUFE",
  "key29": "zHhoTfuNUd49whhxULb51YZg2GmxNeRPucjFd1cJgXHicNsaVrL87Z78ntRJV22Jt1nbvLWaSwF5PhqaxdLcQ9c",
  "key30": "7hmvLmYopM6iJf5jqJ2YgwxhBmHhTQf3vEE6h9DuiBDUC1cCuVzrBUd4HSUqbhpg8qzUyFis7GPq5sh9Smap4nD",
  "key31": "61HmzVxchFSNNvmMDuu2CkRUPXw865pR8Kn7unDkX279KGxywU268XJXkrbtffHqesTYEV9KLyGkQioZWwpzZhZp",
  "key32": "5b9dxYYvLgLm72Htkm1ccxQMugFAyET9cTxmraX9mJhokPyyxssLVv3gf6yrSVquuAtP84PiKN9JXB5SSFfczw16",
  "key33": "AnQCbtVefVayyPrXV73NH8KpMuvYQFL6HtcRtSEC51sfvM7mNMrM73fGvLhJykDFZggjKvxojqG4seNVUomyTx5",
  "key34": "i3Rc8WqLEaCqZSWwpn2YA6u6wg4jUDnCSYCf5AqpGhrqj7na5bCttY4uyukyASToei85XoEBe2mjxUXyTi3MbXa",
  "key35": "5e2VK5Vk5zmkS93Vh6KwAJbRshbPA1jeguF42KZD1yX1nBXg6MMFcQK821Fv4Ugv5awe6pATvLuJGqZYSmfRqW1Q",
  "key36": "2zGwGyv6gJJLfVYQ1XxqJq7S3CH3ctoUx8nTA4axkhYFzy4Lr4gaGCUP4sovgHB5wvmVQNw2wxnuD8RqHwEt4wCy",
  "key37": "576Um69od5hx4XRmgvCqDrhfJYc5XFfQW9iyXuno9Y2CNMaDy26TFo8WJq9i6f5Gh9XcWJgjTswGDsQGa8ScJW3J"
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
