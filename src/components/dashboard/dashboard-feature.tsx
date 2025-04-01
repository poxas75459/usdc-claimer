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
    "3WBeBsZ3KsezpLy52VUNJS2u4rkxzfgAG5pqXFnW9QGc2xYQAFkrEyzi6rGZnUR1AziQ7ieyyqzyk2VhfyLCPRjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYZw3esmsdF5Y9a3466HVV3AgmzPMQjXuMY8H7BKeBVXUVmTnQFnfK9497x65L6SBKFqz4Byx6RhDEcJpG71X5x",
  "key1": "2gmxNhzai9Ax6PMQP4TUWH9ihpzty1UgNdb7JaEXqigWP77vxtb3pbJ6JUjYHvuSTjGSTfPXBrGUtzrMhrSYjPbT",
  "key2": "hCmbxuzaFJYKzX57e4Z2FxB5RCeU2oJ2gVkGPCRVKCDQLssZakavr6nCXa7Keq96Lq2mzbZxfBkqVV6ZoDsjybq",
  "key3": "2MmqiB6rR39g55GYedS9nGGDTMiUGRFHPjYgDwEsRY2qcyst7p1tk3KssmgJeU4iN84fTz7WSjKqSMNdwHJS6E2V",
  "key4": "nypiFprMcKDfvzcCkfVtFuPosktzwUGh41en4cwbnTt8L6DcZV4zA9DMMri6SFmVDkR7GA8NxuAKSNTwoz2ifBJ",
  "key5": "5FaANzBGQpWe2qg17GH8p93FQpGuMo54XzF4NkSgB6YAyC9fp6Q6Pwiw8KLhSswyLud2Zfa9GKLAR7tKnda69aWj",
  "key6": "5K265Xcx27KCC3XZVmAyxbRZEvRzUf2NMHrAamkVhEYHVcMBANfdMAHWaMkYBQe2cnKyFDZNpbsZpH68bow8Jg58",
  "key7": "2TBp1rvxMteD6fRrEqwgTBf9hzN88sgVzkY5LBGtHwspmf9qo2qF5YgwpBg4gpVqm5U58NTJezMHWeZWSqiUXE9g",
  "key8": "2q18FbZ5EAPeNA6kTxERhsAXJJy1LRuVCLseokW2DTK2KLCsbvnnyiNPd1JGcRXE5yHp9Nkqk5QyaUUJKJUwpYfz",
  "key9": "5oRtdGzHRqmkcvBJikGSgXDyKeD7LhT59cP4jr2VmhX2zQsjF94daEma43wDfss6zfLoBTUANNAfSw84Jo9xB9nY",
  "key10": "4C5waSUkBq9hUXuSRvb4qyPGUJYQ3ySgYci11zpus7PoE3VSsdSS4rEz2Qz3bVq4M2C9N5WLUfcoY35hs9fysfi4",
  "key11": "2t26vhpM9bLP71tfegdbcM8Aty9gMyo6YUXvSXb8VUpGdhPfyfa7BeJXxkNtwXkDqU5XHp4NZSF8yWMG6gD44Pcu",
  "key12": "2k9ZNNjdNCXnCNfPQ5FoaWrFBqMtDELxysA2f9E5iscPRXirGWzBPa9dkeVsWcDxyuqBLt6Q2haDPTW1nGPcepnE",
  "key13": "2vqgfykYeHanNSZXxcDyE5DvE3UDCxrznmVg4h5eTLkFPaFk6P2PGehJYZdvZSht3kcQ8gSanWpUWweSWfsKi4EZ",
  "key14": "2BdgqDE1Y5YYDHG24jrP1q6RL4mLSAeVyn9ytLRmtXyekaan7dTfJLrQiCanokpfaWwfFHX7DKfZWzyhqkhPKD6L",
  "key15": "2AE16666NYeHGjmdfXhbU9unWosU4Cst5md8ZoMnnS1eqXB1W1XGZhH55ye7HAScNZPKSNcYFvtGqxEZRkrmWypv",
  "key16": "5eoqwsdfLd3fZq8t4Kfe7iNouhTn2rhxk2oPNwRPCv1NERPi6QD4varMhbKMGRQ7deKPF4SVFunoA3pQS4UyxX6h",
  "key17": "3m62oXBSPYEEuVUQbaXWZnDFKQRDJbPz5ZejgyqLw1NfgHANRnvZxN2kYxm33VcXv5cdbh2vZGugraYvVk2QTyp8",
  "key18": "eKyXf9hRasd475ZWmJFfCfoCfrTzCuBjTuTHUdSTqZEr3mnHFmZM2GtpjPEj3TU9Xxq1LH1xb64sRP5rdjtfyqo",
  "key19": "2fSJ9BT6PA9extyqsQLWD6yrjj4jJL1xqoGCu7NF4g6uSPRtoQ2DUe9iD5NUWo6L7h4AfNw1ooGXznaLVNHJgc6R",
  "key20": "3Vk4jo3gw5Ng16QTbEfU2ioKm9p9vyiD5YmjSLTsqyFU4cgJVpc2JiWNCSQyoUFsP74pFiCEwrRwf1YxeFCxmfQo",
  "key21": "2thSdyUBofYTaZpawL3pQMxBoopiRuZC161jeCQzRKzEv1JCGJ2hLca82awLgRzQDK8PExtXu3KimQCTf5PGJrUr",
  "key22": "C3L4g8JHUQ3biLiy5fiTxHj4Yq5mwmJeGMgAv7LW3oQq1C3vTS3RPkx9DjG5eDiB88LJJQZbgo6S79NmakodSrY",
  "key23": "3vBCEZxp6ZmW5ppNGxfUhMSY61nqB6shXJCMo3r2teBFtqNpedPhygGS3cnKM6E1frtZjoaPWLriQeghURPm5SF5",
  "key24": "4buVj71VPYFBc2zA2zkWoMPkTQ1eAF3JRdXTJsXu5jDihHLEPH38neLKHpyjq1TZrjdDeywcgBS9avrRDTBWuj8q",
  "key25": "3NXT2tJ1vWwXxt9tBPtRfm2B5RECsW3KLZS97pD7MtxcyvtmthoDpwYWZkHYs8wivXuS8j6s2gyRV9Q9fWYfPwX3",
  "key26": "2t5fgn3ZCbAvUzFbhrHB6E5stht82uVuQqBrG2fD8F7du96eHuszYL5hHkxzJy9MgKbFpt2R3bkAa5sLHdYD21sL",
  "key27": "3nvvcwHTs8N1FnS69iHsyHscMbyX2cne2bCHG79TgXhhJs8dL4XfZ4Fb6EXdbVjC7izDv82wiKFGmTG3syepXtek",
  "key28": "BAuvwGryAy69SWwY4VuptSQpkyMFM2yDmFYxaWMswKBnqLDdxD9SAAYxfmgFJciHRKhBmAsSrfJpofy4g1KhCoo",
  "key29": "36wzyzH2CJYnrr2qvz94XjT89UVy3YDvKXE665s1aGiPfHf5b64GAuNj9Yfa1VW6EauVki5xwqEBq3q4kiFTZtAx"
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
