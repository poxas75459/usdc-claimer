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
    "5X4a8785pf87WbdBRnDDT8bUXNWCYPVCFaDLMVWwBHmr84HDuMQA1B6t1tFunFM5XoEBeEQEgtErYWZKmsYa2YW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCBq2p6mBVd96RMgZsKhfUF39NmZfMxE4LjDntmPKj5VLwBnNJvXiZbXHpKfnGxUddZajHfckCSGmjgUmzsZBRV",
  "key1": "2HfLjigrdJ3p2SBCWdFfEtizrqiJHkw5TgNKRrDL9ETYgMzKSYibbLpPFCtBtUGsmR5BRaTv6ux88nxqDCpiugsn",
  "key2": "586hmo39v6vd2DyZ78gpM83A23UBaqcAHRwcLgBUkNC2CGiupwg2xQCynu5M2vXdKjQZSKFv8M8i2kvzPs8xNqGB",
  "key3": "35gzdTkziE6TyyooSWjwNUiwTi1eEnnR1aAkuprgciqJwPgyduxCbCmxorYqypr2q71M9VyDNJHjhyCAGnWZxnbv",
  "key4": "5CYyNkrctEHF7uWq9tDfE4GM2Ygcr6nuajx3N9A2iT3YUMEnDf9L58zaKAqXrsj6S7sCXyNgNjFFyBmPjDdSAafd",
  "key5": "3AoSwNLXgG6XttNbDQxW3tDDrZsY4GJhXJGdw4AEnLK9cTCnjoPV71fV7vv3VbtjGGLuB4UGp718v8U4QbCuimWY",
  "key6": "4GY3G8uYJidAGJeW3ym5qtVkrNfVig438u7W3HMUmGtbgnTRGgApzGqNnG1pcU2y7JVxeoTmm1oWDgHBE19w9ePw",
  "key7": "2GuXeBDvKKDm6uQb9hExXnrpFxuocvURAfe6So7J9s4KrAcaFck7BLPxrL39sSJciTyWrsBH3ngWumKiRx8XDXqr",
  "key8": "2yBuLsBJwCffXiht73nQQGWmk3YHhw4k1sT8bLUt7SLcd9THKRxwREnQsQxb6xZBMFX2R2EV4itXEkzCem6es1Sd",
  "key9": "5K1zXwhjbhYWvExME477Jq3GambzvrYtnTwJMq65ZLSXfpEPs8yA9HYGRHz7dkDhjJS2rCLgk1shY5Sq5ExgVgZu",
  "key10": "4hKerbtK1bwWzuKqjXvJ23bur7GmJk9HMXC9TpG4bZGhQp8CWr3n5tkXE2RPYkesE44fmwqrzcPxZSMxvey2nQUF",
  "key11": "35nUt6kaVQwBJ9RmrCqC9KF1xbjinUv7u7v4DWyK81AhWTsZxCLcSK3KT4hwBomJwkXVpXFZtPjzEaZm8ebTiJLn",
  "key12": "5r3GCodCy4criku3KNkZF7tkQsDWXQU1tJa7pUrxf6abYCiqq4mYDMsHwSM8QYU9PdUiS9aKPFHwxQJzU3FeYuBP",
  "key13": "4qS5gE5G752ywiEUDv7gNzkJGC441r1XRdR8DF9xaLz3wRLWBcjSzRcDYc9hdjW97wn65ULK29Y7HkqAbpWDV5Z8",
  "key14": "5NnDoqtTHkZZosG3hsXWhGdQVyyecrVGAVwBoo97Dxv4QAQaTeQuTAseeSH3dhe2fqxftBkZsKZdTVTCAHn6bFzz",
  "key15": "ksBNicVjGceXXVcmQ3eQheX86XWpsjB3DVnRKCJoqxpSabir3brtT2kGtKKLfF6KBnuwaWg3Nm7AUZZn7A4FNiV",
  "key16": "5MjDTCdrWCoYrob3HpLgkBZNHeocJxFmJoyxctu8rEZZU8R6yzJdj5aRNU8wfR6t6S5JR8v6kgC26Bqxj5BS4ag6",
  "key17": "43BespqNYVXpALmvKh1RsL5Jt3qg98xy7b9jZQNRLz8MGVgLWJdjJ7Ry5vp9YGSqv4vrszo3f7NfNuvorGB4QBkC",
  "key18": "3WYLz8eTpRku9rWZ9DDMzPczvaw6yNQMfJzkjCurKijM3Z3BN8eiALsXdACvWfw4WrVjgPVPScxpMiWjndxqokEb",
  "key19": "2hpGkqDF1kt1djbm6GdDm7q2B3TLGpRDFKywp37NmLddaMH5rPVXE5S8XrByaW834gT4meH1qta88wX7JudwG2Zu",
  "key20": "3PwGEyQMz9SZiLdp8vQC7BpKaFMTbTS19EnuwuV67qXNaGtoFkaZz21iinNxyxsJkaR62dDk2ZycKnj6CjCG3RgH",
  "key21": "3xh4vMwigvg72MTScuzEdnuwcU9fpnoKoMPtqmPPMpeRE5F14uSk1a8mgV9BK6xoTWQrxvBR3QLujDC5urtBuj9c",
  "key22": "6E3g8WvrZzZ6Af8fWJAS6UYQ21qTanxPLoPcoxmaZtdA9KGAgPCySpif8UKGsQQXVuV1mRQaTGR7QbJMF6cP7wG",
  "key23": "DLDwc7i2XdLaUnUXix6YHq1Wkx8Eouqb626wTqg1Hcdtt8ddzByxkVGTYdWk2pw5ZF8ZyEoPVm62Lw72kV62kX6",
  "key24": "2xD3AJPLuTrVR74xA5eHom6whux65YEkCpQ9hm76s5rwazMiL3MNp6Z8SuWvfhKgnGYEXyLmT1EnytLFEH3aCyAo",
  "key25": "2uTApSJoEZgPFWSSdJEaXoQrX4nsEWgjQxdvUjVZdKH5tkLmrMZ3gbndcEQKaLVMPcAwtqMrzxho7oUZJQUoS9fJ",
  "key26": "hSvpZYENYFBTAR9gDp3uycmoHZRBdAB7q1gHizSf5BetGmhpXXvi1pMHzUBKZvp8Cbzs8gsz1HHhGnWP7Nip1v3",
  "key27": "4C2W9Yh9Sb4hkBntjDRuKvjfqoo8p4N8NkZrcfHepKaq6ZzcVMCViHX2Bat1DRkyEqoJUBgye8BP1RLvvq6WQ5VM",
  "key28": "49bkAmPRxuP4e4o44BKkwBMpD1XN7Uwm6TuDGnLsERA4g4KkKNf3vaEwjbJXmS9aTEMV8EYanoiEEjy5x6bQVfFf"
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
