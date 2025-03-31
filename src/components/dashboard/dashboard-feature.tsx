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
    "56V1QLX7uqZ9LRcBMNMXpD2ijdNruDmWNjgatJbRU4W9am1w7aKDyhKcyinjFmDzEjJeXznS1B1zjRaW6LoKbx4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sf11AJCRy5BvDwVCwYwLYozxHyqwYjicVhkWEeax5fhkiup8RtF8thWspvX3wZeT8gK4Yy24zzcRejABKpf8cwd",
  "key1": "7xgTZD3d3ghfVYdq7FQQcDzShrRRS8oxgVQY9iymZ9zSEtBL4738YVDQjcz8GC7ngPFWSYsEzagLk3c3TJnqobG",
  "key2": "54FByCp2kWhWcE5EkwYTQpPDnzLCwFyJMTY8Dwqdb3WkXpt82nuegccQ6y8x4wvRsNbek246D4G4vhwZYHHASi7x",
  "key3": "2RNjtxFWAiCBtNm67B58GzmX96wysjUB8kBnTzZKscRFZiQhaghRVCMGK2nYVLwt7uXYLgjDBBD6up6qvEZPcwfu",
  "key4": "3ryGJeR3ES1Hfy4WnBVGSjCScGi1NTJcirHBzxWiUJnRdwuTRhkXU9zmuya1NgvLwvUQhh86RAmFQU1qc2drgXvR",
  "key5": "65htp7U6BSe8htUh9x3ewVA8UgbCT8Cn6Qj2vfaBn4pk8hkS3P1fH6fDwEPKkyEZdYwL33Mf6Y6arWbp98KfTU6p",
  "key6": "3WBkqxvHuDtN7LA25EwrT2q7Hv1g6xHwZfhjUnDHXgN9DPRGtZxSDSJUM7w1sfWnedg7bXEzfvJyNMHMSvjyvz9P",
  "key7": "332qjxnsmKhPV29rxR9q8fQkYHXK21MGiJPmsreFUVUBFZzn2x3VDQzNfrJtZogrDUSxfg8WyiKwadrXPK6MpZpC",
  "key8": "62wEkwwL1xdTMiBLoTXnYGMd96H8AuoScBMLHvPHKzuuD5V1ZPXMPKBM1APst6VGZCxe7Vdk4mEbWewxW2VsguKc",
  "key9": "4W7XFWqFjmJCc3XsFSd5SkR2jQvzSktcxCujHtYnofKdTTYejXZZVVmHqdt6irmvB1VWzgqHymKPeqnYABHEN3CM",
  "key10": "44mrjaaYr3SaEzcs7mSjmFBZopeNq6385mtyvenjqPckmUh5Qyh9DeCrMHBY8vCbnm7JT3yrvgwEn2atgtiYMA18",
  "key11": "3K2BWGvfPtbuvSrARRBBfQdhE3Z2icT67UewUkmgADgpzEGTL1ivpz8WD5fNHz53YE8gGU2dezBCmg2SzJb9SWuT",
  "key12": "HvV9w8crouvJtMsSL8kc7JMUyKNJWr7KkgvSAALccGLAT8KesDpfepN3bRzuYqvSp6C7dwEhgjfG61T4e1oysEM",
  "key13": "5gShwunZ4TBUh44fZ9b6ZPH5UqWgrxEJqtVwQMxMd9EU192GdjaqUa4C8rfsQU5cr9zCEYMn87doATcKPbz1Tgcw",
  "key14": "4JaXdp6A6fVrnGwQUggmEJcQZTxBsn8QXc3XwGHcstrzDFvQ6Mu3M4FBy2nqWAnytTrJ6o76FFEZQpcA71YkckaT",
  "key15": "BTdhSjDq1p3gkvNoKE5v8whHZ8TL4adYLYBvDR75tvXDg7wrTrcc7V5pdQn6Uq31LEmQiXv5qeVHZa8bCyux4Fk",
  "key16": "4rigzLzXHM3ibiQZVdytCbcw8n64RznieXWiEhtWEUZgpttf5PHoqDBCw77xdStcy8PkFEn5hEJdevS8zhMZSUBF",
  "key17": "4ZAC62d2qfp3S9zD1DsScbUm5FtsVCpGZrWfDNpKBWrazJvYuuT2DkCVRnkeyLS1SrVsjYqLDQWD4AMcs3ezs5xa",
  "key18": "2F65YFbcR94tRKevvCvirRpJnBdA1dKPXChvYWcvYpwNXN7nnvk8yoUCpRK1UdwRoA88xf7694JEqBSNRKMbtVCq",
  "key19": "Cir4fmQNkRjztRo6F3Cbwu1vT9upjDya14PbtCTBRSFNQo1FUk3kHmnN1kydhPPeGPE4aEVZukzKqNxeiSdY2rk",
  "key20": "52ZeLUXpvgmNeUdJTssH5FwEo6fcSTs4abPGfjA8aY9eQvQQe8GTk3r8kbF5pRNTTCgErLbHrQHxGpgm3SF6cq8S",
  "key21": "4jRYDCb5Bbb7TYHM9LsSMBYpcYchos4F1eXfFtNQMKtJsmEh7Vzcuvspz5RDX3n4MmSe4YUBgtScjTBrkAHgFHZ5",
  "key22": "3j2ANpxitd33oRA3jJq39rx1RijiYLveE4KevoJJPYXQm8JeQbCNZej8PvkdiWnSGerYroNDPHgespLzkSgRQn1b",
  "key23": "33DG4qVrWpf8NyZbg4jWbb7ciQHS8ZygEgQu3Ec3Rgbjx2yU9b7WqTcGjkgcmyAKPxQZjrEaBrSSabWG5hCeNtLo",
  "key24": "3J2iBb7zfjfxYF3jZpGGgRWtyvGgRHQx8rKyfsEEhNKUETnHaWxryaLFMpsERoLnvBZfixe3FcRrSZHtuyW4TaF4",
  "key25": "4tSvxp4y5KpL25SaiJpP1C74eCEsqJeT38e5Krt8aJfFDnXwyAShKGZDAive2gegXpnCvKEdrT8LhEPTHqTu39xy",
  "key26": "WG8QbVXVUnSuDCGYUmn95VHaENwwusx6CxHRScXvCXDNQeERzHwGRrbgtEwUMrNZ37de4UR2Pni3VNVdkqmR1N5",
  "key27": "3JvfMF2cdHVNH3HmfFQyUpqKqrVKcXLQCRdvjghHjXV64sSTZFci9PZW3Ur22f47EQxbtMxMnKdsmCyDki2SVqZg",
  "key28": "542WjsrjkRjUSmsp1h1GtosXY3BH6qmSByLF251juEytTqyxxtmg3ZQUtdUqgHQFEVwBFYEN9RLBbXDinmF9nd4T",
  "key29": "2aNch9oCWYK29Duy4h7GEkZqtcWgWspJyQhKfBS441YdPLW7iPMnLvz2DtABYTH9Yz1PBS5TN7KPwMNohcny3ajM",
  "key30": "3gRpmo8ZqKDR1TfepKPqW49xiToQhpuxjhbMfKS9HRtrfqYrugEHUJMur4ZqoiyBkrQePBNJauLiEm1jCAEcSNZR",
  "key31": "me8NbJ46cYz8uF7uUXdtnrBswAsNEvqGbVGYhWpaNMaBipbb7uAWBNiHJtiFXGz3gfdfVTKEBTDJqkNxKxkmTZ8",
  "key32": "5gxjE8rrgY7VZpgwZygmL4pfVTqwaBdGUzeFDa55PuErCxmvWQgk9jvxftXvtzxeVJh5rxDKb7fgifxj1A2pf3ti",
  "key33": "3KtzK4LzeyehAoDWMzUHDa5KZw6WJfBBdUyGdFNaPjgvqLE5vc4gw7EinBNzTECABp437CnkynLkV3nodyK9LCnZ"
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
