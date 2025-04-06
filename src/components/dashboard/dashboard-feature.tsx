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
    "3byJD9seMtE2H98Kh5iY2NXVGmkx1U2VetU1SGmmDt2qohC1GqcPfVvMvTGwRnkgLNP4AjSprZTmGdu3kgiRd3kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HecZkkvix4gudLM9zeQiUGwQGB6TVBJfjqErie73YXAEfGfBDHSgCwB1ggcn8QPZ2moFocBJ8s1M7YuASjQZ3tM",
  "key1": "5qhekFowRFneocDbo8iz46bHThemiGgx2tt2gT6196kn7ydCg9rCfGCcLoZLCeRLPktzQ5DLi6rF4wneBrckudh4",
  "key2": "kvgP4ED4STccQyUCmpfdMSoJek9YEbX5mbcnQHz9KTWbMPJBcTRtYiW8q9f4LqwSM2XYvJa1UZC7gVxDRaicX3w",
  "key3": "3aFHCCdgdxf9MiLCdN3y5it38z9rh1jieg1eHhbUusEWHG5QR1S2J24dDtff58MpPKfACcMqQujw49yZijS4SWQC",
  "key4": "5ZLdTaujchQzov63guj9KK58ufQeT9Vv8VDveXsPMRmqVVTaGbyqyascAQgqM94QDM14Y6pJKJem26pCYrjPg4e3",
  "key5": "5cCDULaMA8mPVaNqTfg97NiKXWwQgNvvR1P3Z1vsP4aYzo8mGgJ4yg8GpUSRTNtiYdyJUm46EMj96TJE5KGcUteM",
  "key6": "3DJWCgEJYfBWdFN9uFetU6gTD5pECwWgcDubQDz78yXakoxRX1D4TFHEb8BohzxpRYvbnfVMtSsj6uBr3CTGHzE4",
  "key7": "LCXUi3aCKYu3rqkH6sk87gVRrf8RcJw2neyAL1YW66dJiypWctc875pX7zcqPtzwXqEL7S6FXR73xJyxEUmKHhS",
  "key8": "2dsuN7Zcqp4nuUUxZDxmWYVfBPu1ndARnUL39oJE2F6faVT2BApAmFHzBJyHmXenqS6VKwAHozyLzQW9mzB9cBnU",
  "key9": "d8MamRr5tF8r3VboK7Ue3xvGf39d5pqqfJ5tgyef86wvubcjro7Yp3m9hLcefZbqvVYox3aqXHoUXxyCfXBN35e",
  "key10": "5L32xwwaAtEK7nUUNUkaSLUtXGvRwTb2AcLAPZJ4vECQStM5UAuEgfhSpEkUuieWa15URAEASBhYM7N4XnHFkgzE",
  "key11": "U8qjUSFRqWSVpDQ33VcvFvMsmNvdkTKCQ9AkgEXKjzRNpHyqxSNCV2KVk4NqPqePVSDdKaC4CEaL4vRHyAUKQs7",
  "key12": "2xAc5PtjkDr16858cSyweW97oSASzcgVydd9mkzDLkKTzDyUy9BbczwkYN5BkoCiP2NTmdAvB9L53foZLRzrAshm",
  "key13": "5ekLhMfdmDsn7cr8BtGnXCuJz37gZKrSueymmbXW5TvoxM8hsY8Hj33gn8XEopNJXTJ7Jv3i4RWargHXqzEwdpwW",
  "key14": "4q6wWD4FA9hnKWbYh93DkaoAreRetD8g5FaxJL9r5HgE7TveUCv5uemyADLJYZvPSHfnbGZ9izVTFtg9yc1wHfCn",
  "key15": "56R72T7YkGdZxAywQkphvncvXPazygoSGFjWfFJGNhTr4eEj6AFf2NDsW5hcnZNa2uA7coZ4DA19kwQP2e7Yvzvo",
  "key16": "23jkHXFXfdGUNQTK2UnYoXt9psbEQ2PN3VMxndq2Vs8JvVS8hfTT2zpyWi5hnm7diBR4hpHdkZgunaNyQmYcPgPd",
  "key17": "4Ln7rUE8vx85CShqdrWmJZNB9wk39uuLvLNJaD7yvoV9yEXrheNJv786v9e8BodTFo3V1QgAhDib2WtyikgtJUpn",
  "key18": "4ihtHH5JGw69i1p9YfBA3VqPW38iEM4akcPudp1JvTwhDzoTVwgADJkZYinNKqg8HpZLcfPFxnKtDW62YHMvXfv8",
  "key19": "2wkkertBZm29AZtqc59WwVqmhM3nueZqbs9JxZhkEjvyw1LQRKZzPVCBWDSEqQkDzs4JeKUWmCk31XmptB9cVMYD",
  "key20": "5zWXHcFYGVubJ6FNoJnrLL7u2gbrNqUuGgByw484qZmqedScCx9PcqQebtMqFtu3VjRejA5rNNnVBo4oSRQytjgE",
  "key21": "3GwMgMe7GvQ6MkRXmGV3GJf1vXLtk8Hq3uCb4hUUEWA4Ww4btYBf8EmRrzJEET84bHVnLo7nfvTWUhz9h42M4PvS",
  "key22": "Q8qhFMjUPUxG3RhAhcVQao97uVTykgVdj68LM2Q84Y7aYZBU6rcsnUewwVhZMeHMZ5Aq8h6jW6UGDbtK95eReY7",
  "key23": "7P2jQUEQpKSEMFYy16HxNzcm28Qzfyu4g3isXR2tsaYpEi6VjVCH6yai5AJS2WQmKwePhYTLvJSWM5XbiCuJPT3",
  "key24": "49VXxMMcdjFukhxRDzBmScbHL5ZboSQasnv835qc6jLTq6yy4W9eghc37e77fZZwFGdtURufqvmbpC7e1rNzu4ok",
  "key25": "5377Ex4ypfu1mPRztgit2YX9mK8c31E1Mx28sAXSXjm5zcNFsFn1i5GZKKHt7PAvJmz1hXwS2qX7YrBwgSAb9oTm"
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
