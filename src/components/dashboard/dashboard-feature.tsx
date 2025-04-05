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
    "3VgLhdrzAk83GHrnQSHM1Jozq3rtRhemxxH87ZA58vegu8EQjiGis8va4H8dYwT38Y4rLhdcQ9YkEcgcXBnbJXYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgPgmguzsvUQRrXtKa7hP8fumh2jxe4vXhH6EtAHrHQokpt3nWWz5JBn9s74xrrt5pJaKTpzLigrNqG4LQ1H4FL",
  "key1": "645Kcg45hTvovqW9AqEvTsty2SrmgZDck7MxrFSLbdo9BYpGJLbHEm1G98ATEdf4Bhu1mDeHpBaVoXyEkJFChUQp",
  "key2": "3apdVuVnwzZhtsxDVQfSbsH7MEHVnz9wApEbA9PyAx4wFnxXNg4LMUvm7LcWsRfSgjQ7jPKycoPKohqCtpC3V4Gq",
  "key3": "3SawG6TtH9yo8GH3rTwN5a6uM5PiRDkxKBXvrowxQL3ju84NDgYGYhVoG47LRiQ23x4CQcuqwx3W6LKi4z5PUpXn",
  "key4": "2eTAqdXmomgyeaC99ZSMDHhN67qvqgppAxDyCcen4vZA6EPp2g1BSEbCQKY59gk83zJsguDp1UechvfatvLQYGsf",
  "key5": "5hkQ4Ynqtx5xCccJoraQdFNramTBDHxBp4apecRwoXnmoApMwGHprDuU73KXxW1DQ17SpGiKkqCowdg5bLoeZYkU",
  "key6": "5DUmGpLBLMqkM96zfgK7dy2ZH8bQd1qzxgGfRrpfpNsGny8FpV7882rGKErZ1FDmUVQsC8182ek1LrJvguXYFr5J",
  "key7": "rmimGUogg2e5G4va73zmR6xGFXNnFgJVKetwixA8YFWKRxM2yaoko9K4eJhLdL3xWVUzY9y3mLJHff8wNxmZUer",
  "key8": "2voqdoRKnWffntnmCV6vFoXkmkXgBWw1rqxptCFEEE7GUHSorXPH8GxuFpLoZizKtUKc2g3rpszXJpPKUPFNF6Gs",
  "key9": "Qd2Lc3KZ5WSkh4AJtGjSGKZducoZ5uhmv3uVPiN5pPuZUe9HTwcAC6mdhUaJm1Z7uij2YcY4HCMpE5etEeYf97J",
  "key10": "5ywRet8M7iUrbCxpUbTVQWcAJvy31K8k2wVyA7mhfVwiTwGVk2KGMU51uzVf7nz2YYmDnTy9XsLhFLTmyCzgqSy3",
  "key11": "4oSadG8afZsMQyjArRRydWTR4fZwqB4szNdMGzRq4G94z3MUZhi3EZwj19fZaRAxGwrM99aUoSiHY4ZpbTq5RY56",
  "key12": "3bqMukD8YdxfHeWTLs1J28wY6JK5SMjRtkNNgjLqmC5WZUyR6YmQjAYFAF5At3vkXPjdK85C8cNPcvFiuhAkaJbd",
  "key13": "D34QzUMGV7GWs3m5m6JetqahtvXuibEWKZL53n9mS2gWzPcRo6PHgn1sgegHKjqPeRY3AMoP7kaxkXcKuPzi5QM",
  "key14": "5PHmQFPXE3hETJv4M6urosgSFf7QYDkbgKma3kMJZmkvRiUK4MAs1n5PgdwhKDvu452eFtpmfNUKhCB9WdCnrFYh",
  "key15": "dxX5RjbuH6h2TeGi4CBQxU4AkK6DPLsRvHrgiCL7sKu35isi1zHBgw5PsLAFdTM5BYzbFQhQjcJkmop22k9MfHt",
  "key16": "2PA1CVP2xYnsShPZo6AxT9BTHjFE7d4i5ScjwfBi2hzp6QPjUpfq7uVJgMpX49VWr8xSh9xgd5JwAAQx6NUpd1tf",
  "key17": "u9tR1aMcqbtvjHoJxwCT8XLkDEh8Kziew4DzF6opr1fbVT76mXmy4pcQQEGZKapYBE4Yxo1PMGsieD9btjrGptj",
  "key18": "K5jDaG6CvN7rMk5GCJNNKGPmb3b3vNz1mFje9j1KtFBtbayDRLKeeuqAQBLF3x99bwPrCRXXhJoeSpYnuH47tkW",
  "key19": "23ngqKCQ3Tvb7pFbG6VFjvXwBAFYcMSaNNk9jxZSnDTfidgqntwnQMyhx4Ct1QaGNaDoXiRwjvPEWeQdMnSFaWBN",
  "key20": "2DeAYy1kA2uejBZLqX2vv75jzKZt7bVUvniuEpHxWUMqMsMvkjQCe5eEb9TKj1AmuXN89Rkqo5uqv7vQYZFzmYsX",
  "key21": "5NgrCegKDTGVFhCdmK4FrEBvpYzSv2TfUabipgH4GikrrePoxknPLX5DH2JfGn2v9JGMjMQUhyi1cXECT5AKGf3Y",
  "key22": "31fBEkSbgL1LKHntsgYKpHawNkK8WU6Kve9ygWwwptrC2ZW11xnMQa3voMSj2FXoqN1Q6TxZzN3rUBBXht2pszbJ",
  "key23": "mnVV88FsJiVTfBW2zP97MYmW6YhNaKNEzJr2NPYziZzYGUhr8Tk5vT1wknFHd6uRu1z5knaNfqAjc84Np9VcZ2C",
  "key24": "4eWLRxcQP4vyNumikMhP9CgsLjm9Qkb2Zeuxd9oxNR44i5cz8ao4aRYhhrVaKnSoL3T2HHtSSXoLCC3jFjSeViwV",
  "key25": "3sCXizARGQ5x95BnvaRdyvwrmbtdc63bPpBqRzLW5hmSFbd7JAK83ThkrdoQ5nzFQKfrW3w1bXbfQPpP6F3u4XFH",
  "key26": "4LdxTTfWGVLr8nW4Hq8MssChvGCfvtSNU8rqDhGaAXgHdzrAovi3ydd4YizgENRAEJWbP8gHuAjNCLFVfCQYschK",
  "key27": "2pyXKHhbCQ6ag7FF3QN4fUm85VUb7cak1HXwEDTSLsd235GMKexmPVKsTWS1P1T81SX4tK2bohHd4QKQ5NNpKBjN",
  "key28": "21VTAm6WLp9yd5BMvKb2D59p1tYyLa7fr8rSW3jhM5QD53zY1HLbAtYVGxDGTHkLFgzs2HUWNmusPTq7aPsrWVbZ",
  "key29": "67E8gFBt6cjdjt6q9RRRdTJHCkqoqzT3X6NbQiVcDVLJ9z4wvxP2oY7eeu3qb35K8njU5Ydkc9EH5DTNg51Fjgk1"
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
