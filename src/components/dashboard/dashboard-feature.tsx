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
    "5X9Tob9gFepidNmuoaqJR1cZ6RU7PTSpZt9rRoAX8kuxyGTDU6SpMzZAz4Q1vNZaQudViq5mHWj9wUGGfpHDcXz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLpeJaXnLGdQ3UYwDJEtK354xJRCvW78kV5nVXpAt9kvBTVQr7wNeC6JvjTCZbnhsaUkJE2exTNtPDoSJyeWfM2",
  "key1": "2FAnLz1Aj8nzKLPtG1SamDEPtgVQkUxvyaXW26Z9yHrtBbnzj8ZaJRn3oPbJDxnndKL8vBY2PDGsVCwnnzmCw3VQ",
  "key2": "5CPUT4omhyHJuuK5LDAfydWPYWAiSJGTEK1L7TPZafksbnzxxRrhv8BTWK7HMo9PQ78vZy8fFBDyWjUoffjk6mq2",
  "key3": "23G5AP3JLcrwKnVKqVtT5oj2Vko7LAqEqQ3LTnNJ7YU2GkduwUQFXjD4FhRBNZnNMnghx3LkaPv5rfZD81KNq9th",
  "key4": "4Rig67ZdBkSjc18BGmJJJ9im8HM3PzUqP8oCyDJzhYXV4qkFNgii28BfF2xAQ8X6wRD5Aj6NhPzQehEUyBKoHz2v",
  "key5": "5pB74RFJziNbTgu6BZ1rvBECntwwdRT6LonELEaRf8zM9QCRE3tfSVPEVKg2HfphNaTNUvBNuQ6GkEoZbJVg1NLZ",
  "key6": "tizTBD5S7s6x8LnrRUKcs1f9Tt6XLbmeT73Wng3wJGZzAvouuqh6jhEwgVmHPCacSq1Vrahsjf29BfhbzHbgTZr",
  "key7": "4eNXVh1tGUbo9wQJjtpkw53GL8aiBZC5VWuJeVeTaS3uSykfQrMz3C3yfE9eya5djPnpHdTuAxmh14c1zGQApavw",
  "key8": "2PN3D1yMQx49pXe62n9qK319VDurHFpEjwn4ev4zkHqeDh7EqJ2DtwQ5Za1qayupkfCkKC5SjxtTGw4t5V6tPc15",
  "key9": "eJNYNifm1C4XF5G9iD8TJZwd6HVfE8wkJ8aDS1F6uNJ99hSpaRpGYoaRFdqgfcWEzUULkGGNJGxv4ujmCz7JnmZ",
  "key10": "r59WUqrAUckDxxC5WdGBRHA7A88AAcqd5vYoEzTKrJpmdoWGGVosruC9kyiyEJocp8YPUKc5y5XPHrrCo3ZueHv",
  "key11": "EhrQ5z61swR8SoTJGi8XVvN1CHECA5tibWy828yfBWJ5v3984e1hCN6Haif2c69W9aA58E6F35pMq2FKbNivcuM",
  "key12": "zK7vzXBthPbKnaiVVsDJverqjJLQnMUXh1gd1sYP7uhMsZprqJb9tPnZ9KRKdR8EKdJgH9FcPwFCKHe3JZXgMht",
  "key13": "5NsHrpgVRwEREx2Ck3UhN1KrcnopipC6asUtpnbrMsquJeK5bAgxGwN4jbGX6NaFGeNA2a9SXWVQiBJHc1D8fuGZ",
  "key14": "4BLgYhVa9z4dGCz2VhmLyY1qNQBH8gCyowgqPyKzQ2iBhNzFREgzTPFpUA3zNCcqZWa1r8kP45vWdETBf9FHaiBJ",
  "key15": "37B23QBrSen5QJtN93yhYi2CygwyMs51yQRpBM4WpU1w76fhUj48ptG4MAVHhbZkGEUrYF5M29eAmn85MveENY5H",
  "key16": "5Zd4UWF3bbDv8hg1zdVxa3a7QxfNJ38WSK9xLc3WeqdacN4JTzxFJHhqU33KF1tmvez7cQMWDbuZmMduhRLCDWou",
  "key17": "2f6FgStF6cUdFZfCtKMwLqFUqFx65kZmKA64UuVXgGXDntTU6n2ArjcWcDU8ndzzT7yxcvRynqKRThFVGYtpHtgR",
  "key18": "3heQh57JHfpmccGDBAecwZSm62BEbMFxAm22vDFnYrMLuFttr1PRNVc1P1g3Cr46rqHdtXT4gkWqU26MfKFFvHj7",
  "key19": "2U75Q1AQP91xib5TPVpj42W5CKQcoTyvEf4pcDrzUigt8gZNyZarJnr2jAYGnpJoTDGEYCgTzuA7tEA34bzgb9vj",
  "key20": "SQM2qrcbJTaAiuvKm2qbmXKNmJmYbi6hboCirAnDFFY9JfyMMqiDF2C6CgAsXe7U7xpwYkrWY1HTHpCJGAEgzKN",
  "key21": "4893S3PhkpjeHUGRpH9LaRiMY48P8BUajFzYH9moy4ksLAxCBNVoDqTcGVEsCjkhqE4EYAEo1du1712DfYgUHxCM",
  "key22": "ThXqxQNhnaAWweDPEYNwiEvFWrpY2BY1tRMAQ3JFgY763ZBkuoWRJDFuUfAGXD8qtSpnqi87zgRfC6RLobeCwGz",
  "key23": "2ZDGYBbNWkWzvbN8We7TfP6yB49ptzgq2XFhbTFAJ1J3mYfPtapDKvtD2cc8wmiDf18t1tRNrspwHBh5P57ytKKR",
  "key24": "4nDQwaM5PqYJynySbPooUkFwA2bPmUhjvxARdudRqGX3xogiYyPQf3Ygob6z1iDPbnivYUeoDTctvCS7WKQHF8kK"
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
