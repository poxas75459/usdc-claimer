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
    "4v84vyADHAfaphMYa12J1ku9sThb3S2sTngKUdKDkSF8ikGtyLgkMDxUCekXfuf9EHoM6ggPXNttX9ie37VthrPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJkkh7CscPrRZVciDnHN3GAUiuAZDKgaVX3gryrykdebPMSkEwnRxXgTAJBvn89PfvW9QEN9o4W1LL27qsASibC",
  "key1": "3Co5rTxFf9RKQGMfz8rJK4VctyXDtYfYBJbTeWSYLecjEt8yWS8gEpsAgdWWRNKqPvEACWi5J5PvdxSfFLjVxa3i",
  "key2": "2orxSfBLeJeeHy6fJpV9XAcu5S3PbBsC152AHM82q3TT3yTT2BppdMAS28rvrzULm5cDSwZMoTZAk3jDZ4kjJnnn",
  "key3": "2VagfSYG7Hy56vTxZbg9QDpogYDdjhhhUX2HYFYvyQ3PJVkJev3K7mSQrrqowkBDUYfMHSwnsDyFbWmYrFMYG75t",
  "key4": "4sDYjUxQTq96zHWYFDL67uDRuJPDMuyvzXPvrunG9Z3wCTauwUGykz3HD7niUJfkkVZiBW8r477THmVb8ApqeRr7",
  "key5": "3oPsXnpx1irdLazF2aVut8bC8v1pWYFC61hzzRS1UJ5L4UAiopE367ecwQMzKpbjktAymR7CdvcpqSY2ttBPTqYk",
  "key6": "4n24ab1BfNwghuSDn3GHMiz24KjriE8WRg1jrVJYyiW89zndWVfVZ8XQzsg2VZECSn11b71C8pqpFgQC8kVc7gUg",
  "key7": "3AhsbGwJbkfq6j87ZwrwQJWEsS3yFbsG6nirt9HhHKSyJga2yJHDskKHYMjKwgzwAUtvwvvn9x1tDis6h5B7pDFb",
  "key8": "5rFvdgsyFMW51oxAZkV6rLtW5fPi3KKx8ryvaPPXp9XZYZdDZMYZkGCft43hkh7HyQ9xsv9XPPfck1DjaTrGfMvW",
  "key9": "4A7aHGmHdGzaeoffnXwAtZbZHDdM31qytZvGcmRLjs9vA22MJnZNqj2pnRxfX9wdzNgRnjCDxuCoD345wGo2xYBY",
  "key10": "6XDQ67F5p2aKS9JVuguAEisv1YtVtp5JXZArsqe11cyjLTPi1BecnSxZj3ep6fHsq37WSBeZkzZ1YUVLiMdWFm5",
  "key11": "44XBpoM7wCx8DetDhvCZgpdi9kPv2Ri7k5G1QfP22jTk5PzvXscvasQDpqAjbaBPsoDBtGGX8Tvz4AdJUAUqHAzD",
  "key12": "2eVLjBhma5KGrHdEYSWK2R5mxHn5TzhRjqeUn1tX4oVP8c28eChEgt53idx3DyxkhCLPvtnkLd9Nwssyh3kqmeSx",
  "key13": "3CbiSdms3mkJFHmLTYW98HPszuhxByT4t9616JYL5nV68vuCBSY7kzhsJVDCBdwRDrCToD5siFhsReBUvQvcgKmC",
  "key14": "2FxpFtcy3wcJTqwBmFavduznRtfcSijf5CDWYRf6PWPwW1jnraQzud121Aw8F5fDqaHBdw7Ze3KEnhwvqEWeKE88",
  "key15": "317n7QhL3XbTFDaEHNUZwrfgc8y2xuhXdEfm3mg36YLH1C7WpknEsT5wUuYyksNscqqjkFVZwCstrRAcwaP33tUt",
  "key16": "rnvhaqET7sfQRCCJ4qFfkNQgML9pBPF7gLKoi9tQrTqqKKwyNoSaB4y73Yu7tkCeSxbojnagfF6H7bnZUkynyDv",
  "key17": "rrhTTbJJHbLsqMLwxxxzniq5tBoxchus6CWef6CqpLAYLpiiDUqYmFqKmiuXcRHkXiAkGoDmjasufz9RW72RKsP",
  "key18": "4g7pZQND1avncV5TunqvhWuC44J59RKb1EUQShDLRy8MKdQJYZPXmtt2jcbBqtSmsuqBDy4gMYSEnqcup2DLWSRK",
  "key19": "5QWBxAwg2KRezuZNH7Fv8VQAPcS7BuNB2uct5ouCTZ7xckmyzSLgHbYTN2Y6yZgAjaUmxkCQ5PR1NwV8jcujhLdd",
  "key20": "dJ6Q3oMLeQLGtmFBUdiyKtbPf99zt8CR8L41AFwZNdzbdZq3A9EvbZQDHfDkzdynr4mvMrqLF3Eau8vYKShHDc2",
  "key21": "47QJSQBPScz5ekERRtZXhWPgjeE78RP3iWED9JjC5mjvkVybXWCZK4MjMAqKmb8BsrpFhBE8c6Uj54MFbCmHTBYP",
  "key22": "h4tPtJ7P45z1VGQTUt8cuCE56nfZtVGvk1CHH7tDcwFjGkzm4XTfnQc4mommc5z7G2vSngqhJJX9qd8Tfi4mXEW",
  "key23": "jvDHZzgLjXMVqofw3cFvyuNhXqeZCsD11dhpqQLn1QA1PvmRQLba3Pt25hDQchrk9qP4RywqVohsGEeJttF3s1Z",
  "key24": "5Xiw9QbSqRyaFfJSmbVjdF2BnF348zXJkRCfV4zwZkVLgvGoy7UQYhWWMkXqzUEoD33KkHVzJerCrZBvrEWUvmPy",
  "key25": "4EUcaoGVTSGDHQhiegQKkCt5keqUtp7feWp5upSbzyN1p97dPGrKBuvCAVDJB8QR5b8JTLyrpWLSyV5Cggwg2Qhw",
  "key26": "gRa7kggGUZX41n519UX14A7WFhcrjD5mroC8ddz3ZQQEcJgZNkGJE8jYXwJCNLFbzNQE3CHv5EzUFuCzq9dYC79"
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
