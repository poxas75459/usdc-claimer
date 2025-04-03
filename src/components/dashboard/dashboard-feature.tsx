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
    "5KzxArGZ1ztbRXausqRdF2a2GxYEFJwDjeKVBHVrEdTW5MSwash1SmLDa4Z6J8Lzt9atG9Ljq8z6cGJ2URnenoRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hg5iXxmEiZEJdPCszzAnVzL5qs4PdSU8gwqcUuzas9kukccWEmo5L46XmPHXmr1j8nriMPhkcivV57hAjyS4Wah",
  "key1": "dmKQcd4FNvgh3py6krzrxTqg9BRVXYFfXSCiCPAjBhRH1LxjUwBoq7Vevxws9EmFKfBJnN8UuwN7e3smf7u2iHt",
  "key2": "3HiU7X4yVPfBUiGhAK8dYiNX5GohjL6SgZtsVhhgGLFn6eJTByg6t2NCJjfxXfpuAH1bk3tWoPZMSXWno8HAPn7f",
  "key3": "5H94yQTWJnuLsBRR6aNedzg12SEjQ6VKmAcMSbSmCgyrSrCsDgFTqad9nopKWQquZSxZ6ZdcWbZiZny9HWKmBEwT",
  "key4": "4ittrz58fpkWe4h7sN5HVeEX4Y81egMEmzxWtfDh1mQwsyhY9DwsCzChXMMVnpAHhzFVnzjfHDNxTxU4idiC8ajZ",
  "key5": "4YVaMGfNWJwABhEXjFniLAn7VbFVKcKQWhFTLurFodiwieEgFN5YGZBPcDNipStmY6QGJCRmVG43zMSPiuNiwfcV",
  "key6": "2Jb1K96tuBccdiJ1VemeKVudXrUUENbkAadfdiGeTMB1iWvPjNJnCufsnZf3ad2dCQ9ycDiTxe2r7To3VsXzCREC",
  "key7": "4uxkU5BvfWym8Z4HvtbFvaJ797MD9RwfuXRTFkTPH4sh7TpsMtfeeVChkFzuwj1n22tcB7AcqsWvb4e5tSzoibi6",
  "key8": "4RGJPMG5mo1iYHjLvK9eUPb6yDpDTavSi5rDXBSLdApzAAaP8xoi4e9aFTSxM7wFjc4PVXr8Ut7HTySbCHbeqid7",
  "key9": "2vcsciwuPaZ59QqS9JgjNniwGtLx2wMmnhLH6bKuFLaLe2J3fgFfsqEps88srijeJnzS86bUCUiZpHAi2eaeC22K",
  "key10": "UqiNh88ooUa1G4pfRkXAwpKBCaudxLhUd1WenikTo2KJhVfvpYvmSz5CUJKhXm1HULAhzaercLG5VgWp6MmcAxG",
  "key11": "3sjyLeU9Gmij3vitqGSQ4xBSvkCFmy2wQaVobEbKpeL2rBCKHxGmRUkq6BWFjf7iz3axgMGTwGeqgamigjzP3HE6",
  "key12": "2CPke6V1ax79BirYS6kwNMXoCZXAYTT1AtEat9AbxNqDXufZzbNKAGg2AVPQ1zvNgM3X3VzVr2HowoDxzDP1GYZM",
  "key13": "3dbaUG6uRx3Rb4fYypuYCo2M4rW3fcqmsSmoFk6bcLwfYhptPfg4UUasqA8kcqPbDejTyCWaoRCmUJjUVLjJH7uu",
  "key14": "3fyN6T6AfMgVYbpNzgnud25k8Ancj8qihZ4HbqKCuMN3AHGm6yGByRWxnXATVrh5hjqciF8Rc3Kpu8qPCC1vbWSc",
  "key15": "45fjmePXDp1adGiMXnb5NeDTQ8t7x1sPb2B6pbH7xzUh5Krk75gVuzfvRn7wkagneTJMuAXpcSJo8RrjaBNAHKVK",
  "key16": "2ypBTjb5iZivAeGcNzkbEtwJKAiRsaZDvCsLrDqPXqvqyZX979Wx7SFf7UetmmgsYo3NHKFkyKrskycg33NNLceX",
  "key17": "4j7VK7WXTvCKFAf7HMkiaSLQ9rFdzUCPQ4CE5s9zTvxPVPgFXAiJe4qYegUNX2sTRXwz82xwvURvPUtzhovafqe8",
  "key18": "2kCzjqVDkLbC4GFfUecDt6F3KxBtYQbgHcTdjeTKj1nygfBFfSNoaqtbtWEm1HeDxT6RzJb3b9RaLi5hVjhP31WH",
  "key19": "3vCvNfGqhr2meNkTb7TqMeVfhXaHy612GSLdcrviWDADt6j7QijnmjZAmZZebJUYBh21453ynT8nX1v5jrzZyTZA",
  "key20": "38kkWzwCnnrz2ZGu3LcCekXsGuzE6V98UtZ95iMWYcA27qWDKSfJ5xAAxfWQ5dqxaSciKeRtV1FD8MYfb49StWM6",
  "key21": "1MHDKgVBWrQh2D26gXY95WxA48MR1Xt1Wz4eMFpazAJA3tvEFJu1SFaEQtiG7mAvsvusjciQdcmGLyUhCSRZfU1",
  "key22": "4Fg9eJk3apaeMgX7dwUUEHvSAh2RujHrKJXsSDh9nCDNezp96UAGFFpnibjpBs4Kg2VphMrr8S5sAyGHAY99YwLx",
  "key23": "3A2BwAWsgCpG7bwaAr5ESuMBjvgtHFAwJoGEZfdBMpVsM154dy7kAiErDZqbHzJB9kRd3Y9S7mLYvrLYJDwV8SEu",
  "key24": "2b36qpyidia8dkLGgJYiKCoBwgn5NSJ891BJzaGbT5H2vaLkTH4cfNHNGijShVfB9qHwdLLUZtfWmU3ymZcTCr5i",
  "key25": "mDHFZ7JyyKsge4PHA2TvzTJyqYPfHM9HW376XsGJNCc1VJWsMNNF1ykFgWv6nR5KJqcvrGUdD91o4S4efxguGX4",
  "key26": "3rUAoezxKnVthX9i7fjyAKgeP3F2EGk65fR11SWNqD6bfasXKg3EMccoGAdFkcNNwieMxqmbeH1TJoNRCkUWtQca"
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
