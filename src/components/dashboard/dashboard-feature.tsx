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
    "32vUStputV1vnFV5EjpCfc4ofNNLnDAjxGi6FWmFtVMxXTH97JdJAN997xw9zH7PcXoEtWZw4VVFHpnkFrYe3PUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77RycyhyfM7F4hs7u5Xk98eQDdVQ5CLnKG9zSz827KUEBWryDLWCAL9eaFWmsqDsEJjV5tWMshCeXJMXmt3wEdG",
  "key1": "2LLw4uAdKkN4Z6JHzSQqkYpjq3qt5PJfgDv1mVZsrwdAHBHnX4T1U5XM22fXmyATUCWZJmwEMXJ4aUYfC2X8oojJ",
  "key2": "2MafQoByjKA18r3cfBHJYgzDB8wXD1tJguW9bGMQhhyNP9kWFVB3GCB8nuQvoz2cJwjXgs5T2GTte5mS2KgDWhab",
  "key3": "3cgZcprpWwWfD5gLscpseZdP7zZeqKUetAwdDzFLBGoELkkv3PESvDLxUm1fYzkxDCeZdhafxh6LTAqrzzRN7VAQ",
  "key4": "H5h1612vmS1u2UYSuM2vKGsz6gvaCDwnZNgamymbETGAy1wtbpMxGqiAT4oVz1gQU6zngqPKjrMhrZrvzsR85kj",
  "key5": "B6qKKeBQjN4VJPadHGArxidZu5jfCBCKDToBj5XZDKqCdvx6AcuG8bnFjdrazK7jRWD2rSCmwvfyjqAUJ5dvD7g",
  "key6": "51a57y5ZpPZ1nkEKUJscHtAKRrJXRJjc2RTKm8pa2pPzMSMyvhhDeL7daT6txu7x99DLar77iLAPhUKP1wxTB6jq",
  "key7": "2Zvo5Nzo6Pvy5qsuSCwU7uXVP8btuWGCtPvtgkc7FvJrJVpsTBgmz2HDsKjDEt8SpFmptxFqh16R9BPJGMtX6BfQ",
  "key8": "5Jtdvyj6NkjyLDNqxJgDLEs6VMW85oFvRPAN2yCMDmvGJyMXxKSq7DCYy2y6fqaRrXX4jDXJhCeb6NqJtNdDBA5j",
  "key9": "4cTDb4h17VM6U9eP5CAR1wZUSYkXQ72o8YfkrXTGrs63AytybbRMyGFKZTb5DmTBdE9b8nhZ8MaeJCH1SeYmQQYy",
  "key10": "2V9Cp1ddzXr3SeodnL3z8QjrmiZ1mC5ARA4HErqPn9HXRainBNrEe3Mvn4UaCv5Z8SrsbrGQUAeVTQTvk7a8CGfM",
  "key11": "5RcHkd4ekatyPhpP9PWdJGbEvNUKT5bSkZRdV7NSgQA3BwhYpcf1fSC6xcAv3KEKTA7Kvom6H2xWqxfTFhRbw5p1",
  "key12": "ALaxTfum3s4BV6hoba4ytzBcHrPwHVm6Fzon7shwtFDQZT52W8bSWVkuhUYR7K4tifpiKdbNyjDnXaFEQy5sUtb",
  "key13": "4dgJ5FErufh3iJShXaTodvS14P2kbZdy4XTe3azdR2EDUctNgKzgzRFGyennUrxn2bUcqvkpURGEoBEmctYBnxCL",
  "key14": "ELo51EQSjf7WqADximTY69VeDJdc1cbVfA188t3FCiFcKRiLr9RhFbNsiiNTRkubkZkQYyndrvGpJZSUkoFn6dp",
  "key15": "UmmAr37SFnhusbdC5MtSq3L6EW3x18pwWgTqY9pZvHrSk57ucr7tyA2nYe3sWMQaqu4GSCxpfkqFqd6CRjTnfkF",
  "key16": "2BCVZVk6S8ciFFRzeK5qGtjCFyGoYvTX7TQYhKQWtEgtn8zojahd1GKGFgXNphDwpXDMvGTEsr4cHyeTkvUFQtTS",
  "key17": "5AQBWr2UFouL1RFq17tVro947NypeQeeuc4NhCDfAWK9dUg2sVdGx5vQSBebu5vsL3p6swbsWUHAHufiEhfiWAut",
  "key18": "3m7PSspqCYLvEzfhxJnArX9XmV6Pm7AfEW7BHaWbjYFZHZQHgW5xSXVYskAU9FKCHgZkGUBtt1SS4e7n8sJfbGm1",
  "key19": "2rEvtG3oXDHFbewRMtaRZMY8RP55wVWd1oN9vSPyeJaoEu8QfQZAVYSCMFWJK5ZifVPU6tkbhZVPsT7Sy5hZUXuy",
  "key20": "2PYovXidcL2jrjrpz3TAhbMZtJ4YBWU592BZ7GXHbwpyMpzDDaBBnPedgd2R9mFx7XDLRXBAw3tD1YjXMSqj6vYk",
  "key21": "3eUaCe2sYriAntFvPfBpdr3xhKnWXK4TFg4pteRSEk9yDfHZCrhiBrXiyBR9mNtfrtSSy85ymntkZDp7vdLNrMXW",
  "key22": "vzh9cWvopeLfQFNgtFVMfX6FTWCXayL9oqSM4BuajezApXuxPsSnMUzZjNDp426gGkvejhuW92zqTPMmxuvQj81",
  "key23": "22xTpUgJSMNfUVjyUxBymGGwsreLEq7qPGby1wqh6TszMVyBEuBnrhCag9MDqq8xHnYLgwPVyrrh4yhe6GrBPuXZ",
  "key24": "66yTd7S4yGhYnPDnC27jLZjvY1b15hKwMRtCd6VXHfSDPuT5UmwMHfXaen2AzJFYPNxJbiqqJDpmVjbbBz4VqBDk",
  "key25": "REN8XCTYH3Vk7ySJuCNaxGUTFcvUCLFgHjELebMuhksruAgPwm6bcvyyykM9utPLARVWyseMAdh2pWvhpUZzvtT",
  "key26": "57uw7WCcvZfbqsYqwVNpx98shqmVt4oteJRRLM5jtL62j4oWFV1kqBho77ZhuWgWsb4pVK6QMdETouW4P86dMyDP",
  "key27": "3o7AqUyZQ119QwqLFzVRejYJvzAoX8euWr9Gv2upc53W4wLp5sewQAhvZFPKTP8aaCMsAtVVc8s8aKVGbaFMhFiR",
  "key28": "35UH3jKfZTtRsMCPYpYKM9SHKxA6UXpHABg2tBjunkapRcrUfecWBSxnBBjXxXugHXyNZFD3mkgoXX2ZjmPFUV88",
  "key29": "3kTA2VU6tNMJNNV7kF3BqFLG3EU9uz2P4TSWTYHgzoRfyEJqaHVugj4mcTFVqc6ChBKbMbxpUSJppFhNbzjC2ry2",
  "key30": "XXndNnUjkp1r5nhhL3tdZQzc2A7HbyFL8cgJtMHAgQufeZuV8qrB61Q3gbf68CZChJtmZvhYoAdaZkTS35a3KHQ",
  "key31": "ft9UDuroFq6tq6D8Dm1F4iNREM1henpCVhDwVzzdZSGg27sZqL5z5kjExQrG8RFZMZKfxocMpjs7KhPAmcarYnN",
  "key32": "2HaLAS5ajTdG5xXDnHth5PFk2wb3hAh6cVgmz26NE9HSWKJYtNkbUkgNguo5fnu9K3y7BEjqRcaMiDJp8pwBZvCU",
  "key33": "3JD8pVPnku2RZXKE3kcno4Ye4njxwHDSHxYQonuWw6h8eN83ohNQsvZU7FEJetnFxHMH69PJB685PDBnabjBLDRC",
  "key34": "384FdYQccxjVCYPG8HxtsvnuZXLCWBqXFtdZWxBcoAMbkW1rnEWtYnnbcNZSjbYSRZdyFz5TdzkSqn3yBgh8htXF",
  "key35": "5xr6u7nyZvqBNB8D5kWgjyz9bU75qMDu3kE275or7JegzgghwGSmJnnurSvvJqxgS57mZGNyV9GBzn2RdT6AApNV",
  "key36": "3GNuBBGpaZe4dd9BSPGkU1G43Twm6948SrbtF61cZzWMEnMLSDDAnCWE948y8zgz5sbcuU87Dd4sFDsr6weSoXbS",
  "key37": "JUA7TSPvc1RthHu8uWKPf8X47H98wK8AvjpZmzHXCcFAcAjkoPzZiaSRYsdELMqKGntfWabqN7dK7SHJ1GPny7C",
  "key38": "4Kv91iPry6Hza5mo1uPHshRQCEqnaa2y1pJboUeCfZp812dJohaVAmQCsyx9TRbKXC9hAomJFmpjNsycrGXgZDFi",
  "key39": "2aqtxQv1jXWEfdJ6SQnk6A3va4Ppt6SiR4LWwrbMtQc4cRNg7L2yf7KMScsnCHmfVtv6Yi1rA5KYs9QFJmB55sj2",
  "key40": "4R9rPgtgmZfCm1G9ijG5FEDsnmQgDBV3KyF5k8dZsJwhQtVFC1tshxH6uP5LKnzPiqfcmkeRUP7mG4ZEhu7HHCMe",
  "key41": "38Q4gS1PMNKkipWkHxn8rQsF7hKsdEQHZ3gMjfFMVtviDbFjQLq9xeYFUZKVh7Lo2CiNFNfSdPXFLyxcQaKkbr2s",
  "key42": "YLUSzj78tHqREpACfsa1f8FHCVg1k5GLNiyYPEe9P1XbuYYJQZxP6NuJXrcepWvH6FnaR8QRsezw9G1FoJv3N4h"
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
