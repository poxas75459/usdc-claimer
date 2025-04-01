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
    "2hS7qmEehY3pdiKWoXhGUswqdf7TWLRcEnpRVEMuvi8mXtEnt5d12fFiEhNsrNgCSZZPJF8edVwziNLSAzkLpD5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NTQqARYuK5Spo7r1XPJi3W2asBm77KQFVizXz5eGnG1fQjGEEP1F6hhBVySKNQvbvyupaodqcQ1MXjNAYtPsf5",
  "key1": "sxhuuHz6kxDppMnEHWQ73Jg72MkwsPiy6Gk6yG86ATngkKodwLoLnkCX6DomkW4hBjyBVJn9rUNAVekR2ZHKxXb",
  "key2": "3xnhPVix7a9PPGdXTqiq2kNRbcBABQdvXnKobrSbmVJeam3wAs3TeZNzg25K4nyiskmK5m2Lq5rXgxn2ymwPwbKt",
  "key3": "5pAuJ5KMH9CJxRRhpyhDpaLDcRu1cMyT7AQ2rdxhus7qQQ8NyNAA4reKQKH19uA2i4zSxbxPXNQkNTqStZk68vWf",
  "key4": "4or7TX59i4q1kt4L9HVchTvUKQ16XZx8xZTomzpKBUP55zVxGkLoZDqbknA27boLjjx6TLJKrazKQbXj9tWp2h4S",
  "key5": "64jjPdBxH3guBpnCTzgPzbTeWFdcRnMqRhvLBQDGTv24KM35NgWQgNKPkn1LqPWoamMfQqZEQ3ebrpy7R8H3WGty",
  "key6": "4wXPChkd3VpC19t8y1vwm4wNCcSshd9mvgWPqcSmMJtHjutS8k4BW9SgxHJZ6be55bzk5iSps6oAGWjAF1uVcfTw",
  "key7": "CYMXMmoKuQThhhMscEUPWV3uv2aHFYhLoKkxDVjpRvSP3vmpKyESW3Lj8eqGH9CqtRe2VYv5w2CZVKY54KYX78t",
  "key8": "5xsP7kor7MYjBADbA5hLjqQfmtM2BDmvZkHnHCKM3PyPJ3z32bBMSyxKHLfZ9a1vz2hGet3mp2vEQEMLMwhaCd2D",
  "key9": "oYnDciVMaimFcQGhHvAfNr1FD5YyA6yoLALkAQUojWRoJk7TCXTwKJCB7t737qdDfZxaBgDY9DRWCtxRfSXXnzC",
  "key10": "2vYuBcNzhUzoZyLXkgEW1YTpARarDdnAW6sttWH5cNTsfmeLvAnLdjWhaGs3TdyXAHbhkQSRZoCLRGiwAmKBvPrn",
  "key11": "4XjubrXQ33A45d9UHCQyTjLfJTYAjZAk41fZVGrQwCAn9xhoMsKTUfPbya67XMnegsvhaYEfB2qFqo1ub2meaq4k",
  "key12": "cChiDEbTfcBSJjuRz6MKdQ1DrL8Phv1y199aKmNRMrZK7HZj2LVXgpYuahbEyW7zJ4L5JGNAVpYivjSBQkKHrAF",
  "key13": "3rBKx8PmEd7AAS1sGCkLnPAdtfXUQkLBiWmotc83GSapvo1VDBL5CCp4mX3RF3CBBaE8K5LHUctSA9tbvHnzzgVg",
  "key14": "2fppAEveW7jSGwtErxGsfwMJjHBY3wPpomC5tnikWpBT9gESUEzfgkVQ3KCWVk1rMzqQeyK92hc3465VdsveDpFQ",
  "key15": "216gtLRigrc7Lb2ALSgRjbVUBW2nWMgYjPgBCAYEnVMHJ98gpSM2U24L3F2inRRMQNQtv8F1smA4pLiiCathZNVS",
  "key16": "4bhvRdYvaeAKmcACS55xJaruzh743M3TFiiXDhoGG4Gf4JLLNwcvKsE2CUoZFvnstcSV2uLqKt9Ft2RnnNYweTCk",
  "key17": "3B28uHPXC9cmuJJRqrQ25Ehf7mGWCFbxUJ8qitZp6xCVjNLQdVMaYPehoM2E1V2VaakcickeUQusjX1wK7E5U4GG",
  "key18": "4aBBj7v4qkJCceD7WohjJEhes12bFQPmRb7ag3uqoDW4uqVyd8De1iY2zgSD7wawE6DgumeMmBYL9xtkbyNjoMpG",
  "key19": "4UxWve5yyQnBbZ7jtaEVciLJ3EBh4VobU6xiDRGbSY2H17ET5EkuyBvkApSWtGkGgxcbKUWfDjnb3cnLWAozvTUs",
  "key20": "65qgyWNaiFuzupqWTJhYUcmVfpxztSrMpsRAgUaELYmmYfwDBx3XchGC4Pd2Ex3sXwSvqiSJSCdCCrCfGwgqhqna",
  "key21": "6cJvUU2h18AGe68thu65L4imEdQjG3f2VSfUguwRhGusRAXtnSRuvXfZRcFqRzYY2K8QfQd1oNzzzVKyXHdyTn3",
  "key22": "34W5jHea9biALZfKQcVrh56jSnRt4HEfo64NcjQRZ1MvkaTo7i9W5nYvtNbvJ9g8xUuiXXoaSeopzpoH25EJ9PhB",
  "key23": "3cZFgKCRYomCGbFHrpb18wBEPcjj5kBLKiCu8x82nJBjGhdfReijL5GZSKuXHLd3zQTjJqXEzHeGbyzboxxQkpRR",
  "key24": "3PwTpfAK48M84FDDRSyL2jpBSZc1hdKpF45cPPMyDjCk1TWkgFo3d117mBfB3LLD6KkeoSQhDyxxRfXgbuYSycd5",
  "key25": "PH8QtzYjDkADWxs4UwT2jDhV1xjyPq43DCKg4Mf2MFJborZL6xZ3DYibppz9BcLQUSvYWhvamkP4wvMMR1yomJk",
  "key26": "448K96X6SWcc7fmvfsTPfqaGrNaa6ayuiYJMK7YNeNtX1Lzcb7rmXwtu3WyMvZbfZB9fnNcmsYx1TpCWdgBcFdQA"
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
