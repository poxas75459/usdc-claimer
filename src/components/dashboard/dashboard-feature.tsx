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
    "3VFY28wwsao8QUbKnrugaGPrjzZvgvfquea8GE5nZFNDKaewSffASZQwFy5y7e9Rpa672ppXDs1FSjB6MZmx8Qp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UarJjANKPvuz6zD6UAPgDuvUvCgbdKKdy8Ys29jU58LPt2bxkw7qPXMtT37yLWRbdZce8sXeaH7HX7j8ytskTzK",
  "key1": "WU2W2FK9XYciBSSHdopE69JdKMnSezPczwdiTt5jEHLVY7W8rtXVDCEVz26SJ3hDiGcjsfPDDv2XhjTrXuTP4yq",
  "key2": "5wVLHhWak8YGyK6Y4uxjCuhzfvzPrFh4i6BT6SaSzr1kCiz1onj9cBGWqR8f42uiodNCdUiF6HM5d9ShNkVJa8Hf",
  "key3": "2hB8d2K3iWnXzyJdVJQaW9tRdtHo6fxborKEQUtXkK31SgzcXhnyxekzDScvAjoeGFUEiZSf5nMogY8mb8MioK2u",
  "key4": "3vX1a8az73vu9eiVweTHLn3vMEatJ4SdVTG9yH1dLjxriru9TAJiYSrpKh9Xd5xxff14gGbShzLDpE84GLvcv1i3",
  "key5": "649vbEwKrMHsbeqJmxNkMWZd6nnh9RP18cU9C4ueMvofySiP6DbgAUnz7B8rnz18wRj8HgzMxTRiK1beDj1qmP1c",
  "key6": "48m8uEhxkmX6qbF8Bk5uusfuYEr6bG5ZS122S4qzqDDamo2LVCqnsrYpgg9D76AsY3caaat5ziADqfpz8D8Q3dU6",
  "key7": "2ujQ6KfyGEuUKbM7KrLvDKQYkPNLjMTTUKzgw9L669GZfcJT76mk96PtKsqw3rdYPQjFZbB1tPGHxm24U2LGBtTz",
  "key8": "4NqerBc3Rqr2pgnYUZUyj3JF36WtNvQCcfV46BAo3ZaFufDHp82sDou7puHeMpqWxHCxBHYPq4knanh5sWVBur9V",
  "key9": "4ESKL3WqVdyYDj3qE2aCsHogSuM3E9KqeLRFAxdA7g9k8KJwf6ZadN8xZbWjTo3sRyrz7Y9iVc2miH9tpJL1mVbW",
  "key10": "3zi8vF9C1n5MVGTGUym9eKhx2aduP1JUpkGZn8TcAKQKe3f1SYS7Kk5zNvKPchv2o73R9d74i4DK7geHqtYki4Sw",
  "key11": "3cBkYTk9z5taVJKHudbrQrbybJhdCCa66cimUCEQ38LmCD6DUrzBkCLKvJ4tV4BTeMDjDDRjHTJ8uXp9HXsitqGj",
  "key12": "3ifJQPiGRSMKm3b4Qm7uEXuiwCwtodWozrmeFpTdxs3SAKkf5DGE9Yvq2sfdxgyBTLpzHzXWt4RU35hJW26z1sR8",
  "key13": "3TSHv8was3ScMMVg8sRC5hgsakEXACh38KvabEgiePdoD5JQBLJr1NyhnKjxW979tf6vrq7i6i4fiVEpXLnuA82C",
  "key14": "5agYh2QyERU4DW74RX6hVFzCpFdtGgxCdLPh2KyWoHpmDr8WdLzdF6FmYuhJKP4no2otUKGn5BbLZHrCtzAw1ckW",
  "key15": "2911erQtTsacMrBSFMDaNBYn2JaBLoNQPokxDNhXDpSRvHgWKrPDZE51YoYuLJyFpqFStzqJWtMEU2bKexiNz45V",
  "key16": "nymSzXmruo1xdiCwwaWPT8KjDHJ3bzVuGMmg2vdrvTeaUWA6cCQ9n2gs9qosc1u3R96kuuixr7XXzYp732JLsDE",
  "key17": "4aJNqn56syH5kmJUP2iLcXUM8bAxU1diLan1Yevhm8mFkh9eFsVmhUWBDMT2rMvRCfr8Ma5Cc8NhzBw6gX26CPSg",
  "key18": "2jkwdYMmtjrv9Roy7Y94NW17JF3ZK9bfW1sbj7ET9yfu8o68TeNsLpx7Kb2mps1mjaKfgbuW1WKnWXYJqi8n3XMh",
  "key19": "5bSSESpmZBqwWX9kEuoZMJ1m1neGehWgDJm3AgbsRvw2n2H8ZHnHC9x4A1PXiq7M3tN2YDnLU5BTnDLg22c7yZu9",
  "key20": "2bU8PHnnAWMp7FFXAwAAX2EbyjvzW2AQTvd8Eer9xJozwMBx3nZGiEQcemSrjZYqjd6JAHjx4MY8BAp4xhCaN8jb",
  "key21": "5GvvUrTGYB8kSUeeyGijHZxdXQgL8dw13Gx94VrTmJDBKS1FFq1qhZ3imQtCyfzL4St6SVCvm8y6MDtSuBtPWdFq",
  "key22": "2a2TLyU5RPR3d6LcXbSqHjjE6mYbo6ZWA8JptQ9hy4qcQCg7X5ba3A4E1jLux5gXsLB4CbHxyjEq3tvKkGomE3tK",
  "key23": "4a6242D7SAiWtWToUrfsUmnUEFaDhKWypdEmXexbgfzBmhkfMu6cR2xnNBFxvSTJDe9Vr368hwdSZU1CzYr5U6dK",
  "key24": "2T2YD4rK8mbsyjftrbNJgTenq8pUh6twWWQ2cWBnPZJVvCVALN4iVhoD8YUQGCM2cJgz65d5pAPq6rT5dmFuz65r",
  "key25": "22eoCBSndrANcoxDadE2KEGGLpFiSvwy1csPccwPZmR3My2EHpWcBezJPFWnz1zi3sEwprtDnGPMM4dMHAQAdK6H",
  "key26": "3waRYyThDyCZArSo1CMtdXyDDLsC2HCCLRb82pAGjxzKjwpVoinqmXVLRmGwCq2mbDApRXRMWAXZZu77cwAajun6",
  "key27": "rhken3bb8xGYhYHEDKMZYDJNPDkHX8WJ19tdVN3yVB1yMUgAkPDmvrBCVDTp3BxQNN8Ew48oAqeXpvNMBUuSZPq",
  "key28": "3MQDYC6wQJcwa8dJXWZt53sLCVZtLQLHztXg92YQB2WPtVPtyRKGJHaaQfsP59WevcBGWejFMVfRw5bERQL3nW3",
  "key29": "22FkUZ96HVnjop19mjh1Qd1qxDjvQ8jPFVACHCP5WCDcJqVzvFHK9Yi6Jtr83iZPnF5ZX7HX18qQKJGyFEjooGkC",
  "key30": "y6tVbLMaG12fFk3PjjyefeiNg2NAQDGdjRCN6e8wC7xvC4RmrM8k8iRf7mnvUDWqvsbUPxtacNZr24wb5iKpBAF",
  "key31": "4L2oQQXt3cAWNmt49qAsjRgofKqm4an9ZT2mo54ActTrg4wW2aKQbtbJPBnUaQX71Chk67dDdwWhzEEWF5eN3ox2",
  "key32": "59mGLwvkW1CUVUW9p6aonVg1P6Y9CeUweYAuncD1i5y9z4BACHWbfR5cRL2fJw6nhFQj8DgUCNcxincS5ud7qYM7",
  "key33": "37Z9583Y8f9B641MSkE3xYNTXwnZM7zNEVz474CG92w5K2zKJTH6QUrNtunkxwqtqg4v8CpNr4G8scs9xzQc2ron",
  "key34": "62LQMaNmucWXt4BZfJ8bYGNry1zGZzpYF6GPgVUejAEcFKJWQPoDQM7FPeQ3Em3pLLttuEqrUUJAPqBRKeDL8N7m",
  "key35": "64tArR9GqLDJWd7N6eET8eSmFrXmZo6FY6Qvno1ZPUrrToPcw4s2FJ1HxgrxkcdKdEHZAusGPfhwr1MRt3ebg5Ye",
  "key36": "3fSdBGaksvQwgzrU6yCPUPfD6wZSQxxeZWTRZrFQp2ya6xaiAVedKfBAUA4dhiKVTbVzbFzj9V4qu1GqHwYcDGA6",
  "key37": "3Z6cwY85C75qYpJgYV8SH1BgPK1XkdjJhQWddk8VP4XVtEeMKYbXwi8HRNohCNgMNumZn4gAeSef5dm8fi6Rtob1"
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
