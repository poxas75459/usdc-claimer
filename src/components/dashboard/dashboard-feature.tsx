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
    "2Gy3942cpV4aTZSWuLJ17gCHkLmTa6JgrGJcCC3U8wTEJ1J7nufLeQnqBAoTtfxodxi95RsdUWcShY7ai2m9ffsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N79NviExRS1k7ui21GXJUMEe6MWsLnfS1rFTWrFKViP3tGVMdV57k7FcXqrDbTXEgHnFbM8xqAxxUjDvchgn8Ju",
  "key1": "3rnRHSPUYFhqQXAEaqnCw7KdNGCZprdu2Q8cZ6T1f5LUpCMc5KaGALrAQqW6xZ7o64nsHZz7gV56sj426vXjSaxQ",
  "key2": "2rWJHaWnBrer6ZqF8LLB6GCZurrHqQpGzKaj3XZFgTVq6Qenk12LrNJUztb81saH5sywQ78N7ue2wCAnimr6dkxm",
  "key3": "3fyst2yRwgj3Z3hM2Fk4KFtwSLEvuumQSpm6orch5omBnaCCo8bdMo5Ur48NtfGuaZeipubYmhCi82zcVbFLJ7Rg",
  "key4": "2rmRf9f3mVLEaodb5GwWDfDd1YcWL3EZZq3ksVqU8MRmsnzssgEhVffsHVCrTAkC4VpyG2EXZiaY2T4fsFqhSJu5",
  "key5": "34maJegBwgvazRzs55orDBmVa4e822VfViqW3DHpEjKjuN5ALzDdf2mLq7PWTAR5tu2fVGafxnRubkVFrstmbiCm",
  "key6": "5wmjYxuguvML53rSChkqgGVabJGxSkyST3Gm6tptN6rV823AKDSY5LZjTPFm3p9KAxfJx3ZH685rj9ywhBZy5529",
  "key7": "27yikdEA5VHbn9yhNM4uyFF91iieV4Hybq7efMopXfHCK8CboAbofKJaGhPcU32MWSCuWk6KGNzaDxMmdrMfg6Vh",
  "key8": "46b5KrHpNwSSaEmSBgALghGzJFcqRy6tvhS1RiM54Waband79KzkGwJ3YJjaGeY7B6gT29C9KJ3YmMKKaPshvcQd",
  "key9": "5pq5HEo9b96b1SJHA8tXbjeoypo3FMoWg13hZNBFYM72rwem2DPVp1h2g5LwDCMt8nu5rfUzePZtzLjnCcP665mb",
  "key10": "2HuHEGoghdtevGpkxkuS1poEj9YvurtrvzJY819cno6i2KA3LZxtHd62meGxhr1SoGGxC5zfBiVjwKByteuQ4e4Q",
  "key11": "3QjS2DoTjRgcj5Bjht9r15MDDesnF34ZaRyXk9yx3tYwxx7k1DYyffcfbXbfE6NXU4oqFroAVFfbatz8BHSjcrMq",
  "key12": "5PJVwy258CWftvZsoy91fWDivesjmyd41ZHJXbp2zwnEp5aYFBf6WuM3iHhM31uQJ8EH3mtk78MXdoP3WEeDptTA",
  "key13": "39VXYNAaX5peyw5NTLPY1b4gSVFBNALQA7P9TUuTqv4vjud9MDDhfjBsqKjTcBU6AoPHUD5NG1v2HCRsySR8x4wf",
  "key14": "5VSjfUiAZ1YmXf4z9hus5ybLSGthdJT6oKmttqXfdy8eXmBJQ9enCAJJnhqJ9L2JBDCakUGbqi5oqF9kxpxdf5mb",
  "key15": "7M9Kwz91ZAbWsfjf2FxXy6ozCKqVFKF91NkL2hAtr4Y6eB4kczrdMd9jGt65EVmUJA18DTVLr4EoabWpbYQ942Y",
  "key16": "3XWeg8miCdkr3AXtbB3crCawi5VhDuZDuxb7vDAHFf1PPv5dK2pkDjs1ZiRsNPMiT7tX1zNh7h6ENCLQDrUpWkHZ",
  "key17": "5nsx8BhXpDhMG8nqk6RNJSFG58tmKHiW8x8ooRvR64d7gKpu9oakJhjg2QxueTXoB2CMRPU2gMtQf3JE8QiM1KN7",
  "key18": "5wTruhN6PLSv722XjyaYiaCS9bfxb1srLnkcWvfbpk3ABNwnaEM3qURRG8yJuDb5Lvqg45Qqagu3fwqXjLv3TZ2w",
  "key19": "4hE7yDbKWVnE1q13e4vcGAU3g3wQytubmrdwAa5BCzMKLKF739NHEDrM4BSig5LTQGie56KpnHLxEN9i5QzF7tfx",
  "key20": "3uRRXbcqm8T6Xp9vNxxy99Kb2eS8Vp8Nev5NjSN4B37eVkvNFRmmu4sVAFRBXTqeQGmK9EhuqDAqub9eNBbPPpqs",
  "key21": "4H4hA59o4gFBdEyLcto6P7pcJZDpmCRef3LwP9kbrM4RX5wDFQrdmpgoL5azLJye7EvqjBsJ2MqjPCPRSD7fJkuH",
  "key22": "3k4FygdnwYc9wFjB4rA6ipcSzmEEpKyzAFkF87SLfhzaPNiJXqS33n8dCFJd9Stah2qa31AgJfbTVxLF4qqEuaVe",
  "key23": "54p3qatrDDe4E2s3RsgjtAENh4cKB5i7rXNKS8TAEjDFC6VA9raJcPvwWq4w9ifFDgksy7yBS5Svg4Lew6n8HMnH",
  "key24": "2mLiwPMDcPqr562VWcbvAxYr3VL55w3aNr8YZeJumw4DnVbdHf6oqCXzTkpt5NuvsynNGiAU8RKMBgBGq2pXyHpx",
  "key25": "BtfcUeB93w28UkVcWY1CW8o3otHvg6pte1hi7oRfMMQF8VuHB5JtzxNkjQJkrN5EMsA5HC9dYSM4S28GqijakpR",
  "key26": "5kjUsTCJg7qir5xuP5mHCPMAJEDS4V8TuZ7YQgfyfVtkA4kCAZSWq2rX9p6iCSJjVPKejnV1PXeS1AikbjEBHgNt",
  "key27": "2oX9U4isk3JLkiQDMNMoVcfWYYUuHse4Ew4FAg6T1rpdr3N5PwxQoqVybJFyRuwR4dUQQV8CsAqUzTnBuWUtqyN3",
  "key28": "5JehDPowa2757Bi2i68kkpbXMxphG1vHtdFdrKaF4YFmD6SEzvySjv6MCBtipLBBn9UdNhidHvJ2yHMJogfu4tRr"
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
