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
    "3hAJidY12XNCxhpCL7VLBFNPAmDf8pq8Z2xTDPTmJCaAjxc2CEf8CTYgrHAi5hr1PKhFPafz43xa2WYw23FJZbxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YT79DyMhJDkbVKW4NkWYUXzPwGqBhrKNbDin3Q4dWyGUookttbsWLmzzK4nsqajqTeX9Hpvq6XmAzUxQSVPUCh5",
  "key1": "QvUCBKvMhS5cqMtmRGcqZGw51Qi2zsTc5dih7i6TMckN3G8ifdVCDvV8EgfMLyJ7VSQTdEwAfiD1swQqxzcbjDG",
  "key2": "31evVU8ASfwSNpcRNbXzzYHQ5r3g3WfinCFoJNrRXw4cMXBPqntGmcQxK8XMYWKUgigd4CjCH9a546fWKmyCNmr3",
  "key3": "576FewRoj9UBza3FGtUAyiucEc8BZ3KkNzBuycMEqjojQaGyskksoU4C3F8yhJkcyY8QgZSECe9nRf7cqNLaSyEr",
  "key4": "5GEPn8dSPCRukxJw8CqoDprGetfwj7kaGyNm7mdpZikLoqt5fGxZEKcAGcVEFMZ2ZdbdjqAu91wveFVywzmmHN4m",
  "key5": "Wb2s4H8iHo3RnwsssjHQzTWHLejd4SkcmLth5VKgvohCHYgMCdUEKXVC8EadEJBhA5MqLLxy5PuoM3eL8nXNFZb",
  "key6": "6KsJuffk8yLarUCBnd88P5bFcU3mo8juBbwzSCRnpTh4kEtnjGKwnMTruvbS5J3jnTrVfo685ojyJipGDeK9dmu",
  "key7": "ks8WMkuEj4esfMkix8DnPFJUMEQGuri5DwcjVaB117QoPR9s4JY4KasDAhvpfDwbA1yf3wTPvUwtttpN2c6NxRv",
  "key8": "rEkMz3ZQeoEkbeB66GsDEjzu4XHDf5AiBh66NbpKpooG2tsbGkkgpjXSUR9hffjFRwsLVZ4TkvD8sZWY4eV4KDh",
  "key9": "3VvU5MuL3KCKetfxwjjpfkeWUFYC9wTLHF7YCvzREVMMnugaeCaDfSoS4bKJwrzPHiofuqkZk5AV5DH7RnXzCuK8",
  "key10": "4cY4EKq4PFPwbcH6vKVMaW9wvVCzPhwVicTGEyFyG5wF1223AKsthiyW7daw4sExoJvz28WM7VNDpEufjdfJdZ3H",
  "key11": "3rq87zJLwBqVHSjcmV7KirUchwVCprrEuGVx4f1QbfcawX9cPSp2te5CBWAR4eDBoPUvRfP66oYccwFw6GyxV1km",
  "key12": "34Sqbk1ciDeWPC7iNkycr5iWSHkc1jp7XL8pwRNiJHDUpLThZDfQp17YNKvMU2ZBjhm2xXeEnVsnpYP3LyGowB2M",
  "key13": "tCYRizwF4JBoXrBQLtRLiSUJ9ENbx7hSL2dMM9NWXt52wyuus4fNAbABGHHxJ3dG3TrWnrNH1gsQvUiywj2brjN",
  "key14": "5Uf4j2RPiQuoMEJvPnb5MVrFSkbJq65Zngx4UK8Fi8QCyKcehynPip49yFgaMxAfpH6io2ahFVUPPjWgbhMLBfaY",
  "key15": "37TLd2JjQdFZNvJHek1aRFabCpJyg19ra9Y487JdZUfixsKEmFLzpRxT5Uk5qkSMLivJLu9EAbiAEohWQHNovgYh",
  "key16": "3AmzWsURjRtdF6UScT5af2oukEw6uvXcKSsEUybHxjy91nahuxMXwnj51Q2LnXooFiVw9Ts6UiynQMrqab7mfyk",
  "key17": "5AzdZKHCmMTWTfkAW4fM5frMhpbmBxuxYNkkNmjMcV56mqyKmswa5cj6QdsnW9CXt21qApburan4KHyFUNvCeKAn",
  "key18": "3BxZLDmGV7dUgeEitpTMnLieJ1R7Fd7u7acsqot61G17FSEjqBLD7E1vrP71SRRwQ2HpzqVcJhA8UwQFc66S1x1q",
  "key19": "3VCiqNAZ8e1VrBmct9pr2ibeRV2qcXBVeQx3wGsXEFpW3rRfjB7EunEFcCWRdwCtjvdFqi36FBJj15SyauAgHCf3",
  "key20": "2fmj2JEVb6M6NrzictV2NAznzBTSuqXeBxKFEFcDVv5jsdQvXCR3GCMVXvXN3cYiHw1XMKH94Jis5jWGq6N8dC3d",
  "key21": "TNmx3CDoLt5kkYw7kphNAY9Dpxcz35Mv1kAQCVxc16jSKEHkeAEX4DfaENeUPFPntw9BpvqLrVyJcVGtBnQeJ5F",
  "key22": "5TSvSRVWDLr5iMRzn1UrnDP7JbXHdk9hbxnbyXzAbrVs3KAWoxwbpUnXr2hMRQhrTJFXD4kKDXFNiRuLs7ZKv1AJ",
  "key23": "2v4a1Li5XYsUJ2VYV1r3kd1dJpM59gDBawNajQT1hQKfELXcVeAMPSZ4MA5g941xaBhmsLN8vj5vMm9YHQXGUrcN",
  "key24": "27r24mMrGubiE4HSfioLWcT7ubAJMTTwfWAvDto1J7Yn3oFbc6kQv8bSzqYLcyiAE1feRNttMH6N2j1VNDtAVz1x",
  "key25": "2RFmeQPtHn4RWbay8gtmQD5SacNag3HgpjtkTk8FaxbEEqPSrCcxabbm4A2vVxiriZzLcmQKwmTxzPrVPpVe7Jm1"
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
