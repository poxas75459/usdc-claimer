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
    "oN6ibjMngVCeyTyToPFxcCDt6BkvpsTMW27hwz2pDnWvLTvsddohGN4asAte2if51NSnnsp82NbAKB22CPKDVF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsStQZVdxWpb8qxKgUy8fJPf8tPayVoWLZiRz4p2CaxmLN7QCXNPYvor3SeXdSRiKXL6Wh2kmGp563YW67j4qKd",
  "key1": "5RDWp2sduK3ADi5FnnbDbCKbvyDuiFZtzq87WQgQBp2aqXgifge9iyH7c69G4FdxMUAhA9D2vZzchW6KyQF3sVDR",
  "key2": "2rDqfcRS6qnn2UzRZZeURxxTdSH6sdvzYWBwnsbfzkZRLxU6EvZrquwozax7BQcL43Q5fybxLxnVjrWxsKS1jVec",
  "key3": "5Fe2hFaUyhBouZAHt99w93yoaRG8oWkyBbPYazpap1NihHX8HLFuQ83dFNCWf15nNfiAXHfZ5cHbZLsW2fRgiYeR",
  "key4": "pdV4ujRynj4tdbW8fNjvAxm51Baa7spypSRd5bS8wmzsCQoM9mgFVNjBwUaYBE13wG7YZ26XZJeDzFoLdZZFNPP",
  "key5": "5uQYt5djSeojHTubJBUpFR9JAmFeTs4ZQSPgbDcFqmtV5FMN9YfPy2mzMYfkYAxiiFn7vCMsMGSm4Q62pPjTgKn3",
  "key6": "228B5ENUoEBaJoYGtnwHKibD4HtWMj1cBtXHPUwLTWZDvJb7u6wsgMQrZ6oEnrj9546V2Hc4Sw8knq75Ua5FiKig",
  "key7": "tqdVYiroRYXYxCMcd2MFaNUPthnEPGL6Yi7ZfiQ8iWxuBDQt64HmcVW3Z1iDW8ZUg59TrizYFYa6FffCNNLcjmV",
  "key8": "riUU3phtVvALvNYx63kMt4DGRgXfZCq49qcfZYYGrWfBYSknsrPcBtEEex42DMphF4KuKWBzLpnNL4dcT5g3KX3",
  "key9": "6HezGR4NaT76qaa41knjrJjVESpfM5vjEuvNYYdXvo5QBak9t7Gwuap8b54TS135fwhUkwijuwu5wa1CAjeAfyf",
  "key10": "424KQxVkjaGtgA4i4MdjHBAYMsVDFSAedVYdmNoyvpwy7RgEpJR6wZV5cJTg8sk5Vrbw52mrbCep2HHv2JyqNtS",
  "key11": "5qLpuH8ScMvQs4DL4Lw33jiHj9tN5nS8JM9ri4wYwWcyPPkdQhHnddDj9R6g8UE5z15CaEafbACTTXVXpSbJqnPL",
  "key12": "2N1AUeMZLrkYPvq1B2opeTs5dztzDX4iD6SwAo6Gv93UtPETE1GzDJmmNb3HyBvhZF11TiALiyzvCTwPW5ZfXd6A",
  "key13": "4rKz1majMZ6zoMKMzSSSUeht9WZNjS2nZymNv7Pay43HQM9WNYvvQwaTT33GYBiYxbF2Z5hyHLsXs3iBo9zyvDn",
  "key14": "3LV8om1Cx5dYZnpCQBz2M5ZbFt4qXzwwYHNQPiUJbhKJhr4QqGizrVLdWKfUFXnfPyypFFqfUyHSyXFWfcz8BqTv",
  "key15": "46Zpv5yUSc4Aq7cNbGbkjGk2wAXqX2pBDptJWw4QVHmP26b4B7j2SzzbhFkfAdg1hQc5KCtbwSKyoPrRA5wNoEzQ",
  "key16": "2nL2kJG4g8CThGVtFmCL5UnoUgTmh3Uyh7mdsUVZGZLFxbA2FvB94Kw41dJJnrtvbWrFQa6wtHmK3EJ9vVEfGKQd",
  "key17": "25qNhEUc3dNuC35hhLVTMz9sYvnUegYmsiaD7zJHudAWn9tRvt4XQKKhkGK5kxVBDhAQcX96de6HZpc4ExMwMEq2",
  "key18": "3J2SUm5G45GEPNUv7pjS7ii64AyqfAf4LQVBWDhrchxZQicws5Ss8x75RUUrVwtHYYxRFffpVrBPn1qZiwvNu1JP",
  "key19": "5FxKEKYp4Xuyd6XyvwoiwHrAT2hfapmvsJJYEkM9yZcC1MVm23qDkF1RLATQBGsDpvPqzMg5PCBnX9LyMBjE7zGt",
  "key20": "4mCCy1bpQqeNaQWfXCK8ogg3TifS5UkVCUyi6RbHoWzeGtKdTuGgJjrmP5PcoNmoPUzEuCaXDgj1pwfeigfKWsu5",
  "key21": "3B2cqgdB5xVB43s42423Rr9df6bsBQGMdpYVSEnx977p1UVBPajbiKv347KUTYpjgm8rddiV1BTwzci9PTskWp1p",
  "key22": "5v7KJELeLDiU6tbKR8PEduAZYbjXQzEX7zsxAaf13nUooHib6mw7Fqh2vPKAGVDT9FTsCVgK5cRms2uou8eW1BEC",
  "key23": "217mx3vn8rJwNjNq1XQ4V7nKTr7Tcc7P1FBdU2zdbRA5LYABH2QMa2d7nqCAha4EV3UbWGDwEjAAPteHZvjuTVir",
  "key24": "2gJKptXxvLJcd2zro87cc9x18ZT7tuNKoM3iqS1a4PUCjWXzzAv1fzwRRwGqWSuBecRuGCNeDw8e55Ay5iM689vT",
  "key25": "Fezhd5fSWLV4aguAacaFj3FNhYWo35k9JpACLFtUPD9Brp6ZfGmfkrHWWFbKfoUGFv2xaYMrne2A7LE6PcZ5eL9",
  "key26": "3bsUa318RT2rcxXhtah84cNtrFEnS4jXvw4apjXWyCCLE3wTNKqM1nXSUR97FEtJVHxXZQ5meX1aJNtgADS859es",
  "key27": "3KHEfM4MrhysPQUkizCYjXXgNR1sFqXHni7u7rcjpoZPwhBVn9G7arScSBSewGisGUNjhyC8NKdJb6oy3uabMxEs",
  "key28": "TvYw6DFSNidLgtKr1GTF8TPxfAKhGZGXMFt5kehGofuH98vP1crVfoK6Q8hDWXgN53mSm3kumsCBvuRYDib64LD",
  "key29": "xyTkjyUEZZibPdVbhogREVFXocMwkvqiMKQwRcqARy3ouPufcxYs2KPEZ8pxbPXhMZm7Z9277p69fyG3SqkugXG",
  "key30": "omzK25x7oR7uUHhCoXsEMVcGNSNMQ6G7wDuwte24MP8Sd7DiVpGtAT93ro7jo3wHTpcJ9thbWiGzMS9rrJL91rU",
  "key31": "2XDVqzwMFnMDu6BS4TLo76WbicKVGzVNhMQaLQMz4PJy2zbnZejzdY9nYhEEGJRBEyAtkxn9dTv5VoRs24CDphQq",
  "key32": "3Nf8tvYiavTTWfBwWWcLWT8JukmcDMHZsV9svkBi5kkP2SQ6vA52NacDSVbfc7iBEFBn61PyAeFK4AXwWcZrVSk",
  "key33": "4QfCBdbT5eAsTXzzS25sYzjYdaAU3MgTK7pxXeLoFyxzmLkpsw7H3qgLkBBbdLHPyh48rjxB1EsNx5ncb26qdkDH",
  "key34": "KFzHtsCCDqEfnkUfC7JdQZ9HzzdG1r2ozG1HNw4WtADgZSRYAVASZrL45EfwHRgVU4XAvJoKaCwcxXtSi9PY5mQ",
  "key35": "ECy5Le4dyVHBbKKdXcGxo4UhRDHHPRxt2rcn9ALM3dX6qbZ97MHirLVMGxGesPt6SYbLSKxhVRAdHxPeMAHe7Q1",
  "key36": "56unfn6ac52QT9FNk92v3fV9ZDTdCQXjAeVYBJxB1LL76bT4Wah1RGCSyPD5g5SJrsngjWo8LFvsFRgd5TAvhkT8",
  "key37": "p8rjP383hLf97fvMsLeYWLg4kbmETCEdPncMvu2RDSnUtz4DxpCJVjQfdeDk5Sdo9GPxGspMCqEx7mWSx2c9K74",
  "key38": "3wBmpBxjuHWGEmUrJ2vjvsJJg3PTuoDU7mCdzwFZ3nj4r7CdZiq8sRc5KX8tTXrja5jFbDs9ocSnHqdxaxENwpnQ"
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
