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
    "47pk4J82g1L8uo1geyWNmjjePKVmCEwrD3EiXBVBkAKqwTeCxGQRhEwBDcT2bEnJ99tzj2pqFP3z7pEJdfiGqmec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wX5oJ6FHgnxEQ3JHPBvfD9wTtMoiJM3FAxpYRnjoPGnxcSB9UPGYDk3vjk8HR18j3dm9PBDohuB4V31u2fGitJY",
  "key1": "2bYuRTVb4DQVZzx6MgvTMVPWiidUk5m2VqwasuthHvV6wGNE39VqybfQ8vfYsP6TB5oECZUJP4AedPdzvDVqXUiN",
  "key2": "5RrAD8wrDfrLEKwrDDfa46DJX7YwSny7Q3897K5X5Ti5MDgcHjgh8qqvp5iKnkzvtzBEMv1zQnRteAii7vZb3za",
  "key3": "4uZsvQPtnCGcybjNcAMgoNNs1mUhP9CL4iAsW25vWshY4VB5yCdni1256mhwzDvgEBUx2Lhkoz594GJHkVpXV3Hs",
  "key4": "3TZLZDzWqM4PeDXgNz3z3z5rVkjDFqjixkgAX1cAmBXjnew4merh1Asmn4hEBbdry3FhvSyo14e2bk9LQXGFDdD4",
  "key5": "3RaYKmLWCBuXhf4n1Vwsj1Qvg4yM92oYQDw7ECCHDgtwTgNSnagaBMo83wDhSQGZFL9RSNrJX2zVJLY4Pqu8zmnQ",
  "key6": "3zHw3VMpzYCmgewHGhdVzi41hNq9JxSHLc9dkGQa8QWCmS5fDKEaMyGSKnKWvXPbnXBnFf6M7AMc3EsUPr8D3KfC",
  "key7": "39LeunknkEZwjaYuDJKHD8rAjMAkwF87FGNFNuGR9rQaLEeSduLYMc8gbn4N3wqAPLtDmrBzgcn4e2qe8sKMAxQS",
  "key8": "5cLEVR9iT6iVmwz8kVSo11PDhbeu6P8QfpavgkcP854Bd9KS5UPRfk4SU8DqDGxYHZEjkmC6nk2eKyAfpJYAeCGz",
  "key9": "4knzmB7VUhZkptdKBtjSuzx61YDZb3CBA4YfbZg9vjm6bhafK8TWmkazXgKM4t74WE1KninKjhPG5mjBMHgAbUAX",
  "key10": "3MPVtpPGjQ7K24DcqWUBcuMEZub1rsTE7RCNvGPRP2PhKcQtKJep8Uy4VtMzSBdQtpfHQdqGrsviuo4n4nWZMWgU",
  "key11": "3TCRnertkeekcfqFkaoknQacXXS1uNseevioqkHBReGD1zvXqACcgkiY1CQoadSHTP55xZ8UGNVeNt8PHNrgmNCm",
  "key12": "5V35yaUZ4iR46Azwp4koVFsWxGVTGgDt5hBt5nk78zLArryNYt81X7eGyuor4iMu6nDsnSvgoEHcoFhARhiPFemG",
  "key13": "nd8ix9kGdiq9XxkmGmuEi4gao74auMZbdoCTJtVFj9E4NGzGGBPDBU6ZkxWichLzP4GshLMRAUkgr1E8yy1XC23",
  "key14": "2Cjgib29KVyFth9pN4deRDkipZZVaeaDBYLfUVzWhmTFxbt5tdhgTDfzVJmra6oAmyEcEANPR7nZUXp2au3Tk4eG",
  "key15": "3QNQCc7aEDL8qcuY3NRGgLLuAgwiCkB3WUrag7KNowVTAqqBr8V7QazF7fUMoaNsPbKrZdYBMx6JVwfUhPcJT6i",
  "key16": "T2YJWs9MMMgdAdhtRV1CKSPcbzbViMo1hmq7rYzsxsqKojo8RrduL9PrUojrjAkg6r6pCTkme8XUBUNKXzFvVVB",
  "key17": "2RNkpxuJ3rA1xNmJUgSF6Pma83Ts7G475o8RGTQMsLJDzHDpDiqepAhV5rbxHqHnuQsKj31vTwSZ42sw3iECurBU",
  "key18": "5CFn36xxmZfWzX3GDrEHLuXAULUN45zGi9dfkXLvmjsVJg6ifhho7rLxTep5KbQZHMEdu3NcJbeYJqCxjqPnVWy1",
  "key19": "5J1VmRMDBTtFJcWPeSNLkTobhty8sBHNspky4DmXp69SdQNZttWwT6caK3DYtvoereQ3N5cGBzEnsTDFgKtyWKUV",
  "key20": "4Zmq443jg5rwD5kkHVCRnmKnMnWpuA96pLjrzHtkDqnBCx9cJK445jZzwjAqZDu6CgEM5zZiXmd8n4cE4LjUtstE",
  "key21": "5V794DZkyBzTucPN1VjAMB4CRARhFXJHBe932AgW6xgJ6eELu3caQfTS2RWorzXpPmRUXxEbXntjW3wiHFNBAgg3",
  "key22": "2vEpEKktDtxGbHPkuvKcbwaazaFDZo3RxcZBwrWFnhNppQCtkSnXoWY5NuoAreWcVhpFNnPNUefjrReeK8uTE4RD",
  "key23": "2h1QnYVopHeQcdE7s6bAfjpEtYeENbzfxArEpRNHVcTGTQSwBiPkFrKFhafHuXKTfr2hN38AytM5muVtT8DYvVJH",
  "key24": "2Sj9jRxRfTxyeiBVxbNDGq6CaYM1nHLimXZA1tga82wGCSvWfjzx6jS94AaRZMMBpYkN2eZWsKqSXggQm8T8MVRA",
  "key25": "5kjdcQEothC3rBghBxppKoXKEQ1AJ1ZZV4BxDMFDHqxPunvfPLwjKAHnGeU1k1SWhoZocTNwc6hGTtrv9AnDUnGs"
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
