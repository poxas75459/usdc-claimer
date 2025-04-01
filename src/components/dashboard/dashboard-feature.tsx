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
    "2NPVfNFcsX5Vy39rZ1pMF6rHxZwGGGryo9mUezB5ywzfSBC1vSosCWTuXsKBqFuonqX4xoojD4Y8VPnyqXJKVpbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fC5NQqRPjykQBUXQhjLdHbtfaDZfbx8MfgJrJWKB1E8gkdDzeVWZNN2PWF2v7eTquEJ498wJSeozr5AtC1VR8uN",
  "key1": "4x4eQxpcMX5zeYvWSMmv1wvMoj2dVt6CM5nNB2Am19gor3W5J5kjLczaUtGka1f2CgVQqLZmXfSikyeWunYuUUcY",
  "key2": "2mZtBPMtqWzicYtiETUzoX3ctX3Mbzi66mngukT5NC3BBWMHwzo58Emy2PtdNDu4xWRcmjsGgPGTA7Zd66RWoWgu",
  "key3": "64UGZxFtsMNdr9s3KKSURQ5Eq8eescbamnVBBCjYfy1NcB3use5QcMEUMa4RtzXQNbXcyJSkYY4QD3f6Y4kYY5JG",
  "key4": "4yPJn1zYcK719149az1YazrnPKQxzRtwctJWr5AYLreHZQV3aFP5eK25HcFptAkPfuu1m4ehoY6X4rrbzHs4UywG",
  "key5": "5C8T3DpTXvnsMFvbCWhu4mNfk1Q3CPdBBv4NuGiBmaqyYZg8Frb9XtAH1wC879UfLz1fKEeNPBdv63WEprD1gsbU",
  "key6": "5hr14cpw7XKZjXMeCnEKZS4jy6RH6yPRPyNNjYufyFeVNdXXa8XbbQziJGeRYRGHB62DeVSEcYr81ksB8Dp2Fxxf",
  "key7": "4MLpcTjAgCPet77p5VjPmMec5dCLzizUoMLKrPpxhLVdVfn5g2HDDaN4MJEHRr9yDxbjSYUvNXLhJbpAxNFFt7ii",
  "key8": "2Qb9SZucxZtKVD57TgRufyGSFPsz4maRcWijKoMurGfWpunUEhraNasWb4srBjDXSfCo8XTSwQg2dohs3dgVzicx",
  "key9": "4NMpRU5zCvq5ZF2ptv4Zo2w3DKALmopR4Dr1Qba9yydvk4evgfzHGcUCNJ5ZcxDe55m9RwTs3fXn2xLpvEzo4Ejv",
  "key10": "5tvRkS5GTEuFZkAMQAt9qx7pUEpELz4X869WT5EBqs5M2VsLphaqUUfXVxbAjz9kGgZxU96RQKVPfNVHyMgNtjzx",
  "key11": "44mboHy8N21xop3Cr8At9SpFrX3bBrAxqvmCTFxb3YKCD9ktCgrDeQrfogJEhJS2inmga39kFJ6LekCpFV2RHJQW",
  "key12": "YmYLug7XjeMWPwLG5JwdoFTW4aejF6Sdrz7ZV3WTEXu23JfYgqUyt6WfLtmzzF2y2ssrUvrLBLXdTpkd2m7quVT",
  "key13": "3HGXTbM2DRjsQH3h8qg4vbJ9iKSmyaf8Bd4hiLz3sLJKCJ5yQrNBNZZyZysJJVyrFokaxWu4PEpZtiZ6mjrJQNTD",
  "key14": "2kGRWPaaJJSf77uc9XfbxkwC9KZDn2HrJ3ESWZ3E1fb6gLs55piPPDTTofkvDbNbUcWaRzgXxn1wAS1YMPRwYZM4",
  "key15": "5ze5xjEWRKdDBXUpuXeBSGQBdWHMrqpebPcs9gFGsoKXTpvsm7opeHRWUcA2NLa7bySPDz1rfNQTBex3cyp2JSbF",
  "key16": "3DoaE1UQab7mEmeTmeHRnSX6WiRuD17mF3bKYXhKZgwDbMmSambfNipDxihEdJAASvEGDoH2QMnqWCoPic24dQCq",
  "key17": "5chyEWqMbSUHQJ9TxFr1P6bmnh7SFkEvVQ2xTsEp7T9V2hYpAahkQc6LFyYQguXFcw4XoxkPWMPTpMHqdtuwv49h",
  "key18": "2C8hbmZPLFZDQB3iTVbvRu8mkzaf6nVJA5x5R9fQTLLGxyHWJ1s6bgP53D26kit82b733vs1XCyyDN6seghKkF7s",
  "key19": "24WFKwqtMYa2zugEe8ZKBuLkJ3cZjgBJTYLUDV1yUnw5oF3GTz66kV77c16aWxjwT4vav2dVgJKe6ZkuAgzZZXG1",
  "key20": "2vTkX1VwEhhJAZPeEtBvtZbkfrLCekbnWQ7PrYmRL8aQsXznLHFyqCXnu1RLU6Rc3Rzm16QMwcGr8iB5bYnJLSNn",
  "key21": "5eWNSAviTVDMpKnsahphLFFJSaeck4beYpfP9KixChzsRfU6zpCXMhmBLbBtaimAAfqgYyf8scScbEhGzsm12UVQ",
  "key22": "3EzUWYTzNZkSjFNrP1HeoqgbT5vQcyZ4pM5gNqbtKeEVWWbPrKCNPNZMyFWAHEnExqtWU1AQNALfbqiYkCbzYcxp",
  "key23": "3znzEdkur5gtYnoXfNUVjiFd6pe7qThjoFWmCEdDT5je13AktfoHwNJj7kKzQrYpoqHJPM5fi8b9rHdPD8q1yRW4",
  "key24": "5SpbYUfBrMNBGKsUP5KjqwU9MUEdmtmQY6UyVPZMnCascuRkhH2z9BTLaiANMp8pjberGGYi48zSwKe3jqprQw7e",
  "key25": "5gjLQZhm4gD7s8G36mCLCVacbXRc8zoWdvuKnmY2AS6n7ybWSRTJfajCgBFqEs4UfjMifPTAhtn7nBtrNEKjWwyt",
  "key26": "R6tviyPEkdwN1a4AWKbvLCrNqnHhYct3cDGr3h2i38QdE791pGK1XZRVK8EFBzcK7uJ5qhvt8JtFADGkQFQvqjK",
  "key27": "2KsdUVPwArHt8C264v6rmPwqcxsvH6A31V3wcwLCAUvuXfJLehV7WWZxNsCgs2ZCWcoLboYkMZoiLZV78x8YkTFM",
  "key28": "3aNyvBVctc5qYuiBZhdrgUTRKhaqR6qo9YZwePcFxQQoDwaVdc9M15PiD6nPWMq89fCLq27G4RSZZcj65Nz3fUVa",
  "key29": "2LbqTtoTfVcPoDuYfbKKU5hhAbSbSTHHePbKe5zhEwDVUTQe7qwkr41jjWyjXFPoAGEk1gXmzkhTJnVagAcRgN8Z"
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
