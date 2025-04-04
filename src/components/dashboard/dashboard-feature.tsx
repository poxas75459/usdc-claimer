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
    "39NXeQ86Rzy14FXF8d2Lx57496C9nVPU8meoLHREHcRZMKup63Q6JFpdXHTaGcmDpuP9rhKjGxUqESqcEV8HKDFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QSCKMQHY6qx6RcmeHUfoW4eM3rRmBe5eQ1vL8FQkNSu9QuGGyt6dh2ou9L3JkR267G8mH9KYDxhn2U91sAgA3Tq",
  "key1": "j8zcGhKSxs39ZeN5jpCrH5R7GAtMe3ApWxsVjZdN32MEhcRime29GKEgYRx5wLL2G7wZYRKbr3CNiVrvPSqGvQE",
  "key2": "3cygCL5NqzQ2fUP8wmQ2PzJJHjD4KuiwA1G2MXpWNYhTbrd321K8CovWZLnY6SmwUQt4hhKgETfqkzWd6JMcYVWz",
  "key3": "24pcnQjDMc8hmhEjgG5GAZfbsZRCAFabAWZofAZaE2fqPEes44bnoZQmMH4mGgaC1MWUp9Es6anstKhj2gaxgcH6",
  "key4": "59bK91KezpppxxiJvEpJmdGiqyi4PWK5wG36gWniPDco3iBWKJ4HM9S8wxVWtBMboNJJoyNSNVqdhVupEStokcbW",
  "key5": "5YWMcFC9u4TpAkh5R7U3RqmJTMrZg2j5MUSWXSsNSuaYKNkoX2h9GzfwhBGwu11tM7WQhSYovLrYaHvFBHnryiMf",
  "key6": "2hHPcDNUi8tagCq5tfSr14ZFyHkyyXLKEWcsDjcC2ZzYhFw5rtBrwvpbJLZmUnJtRURD4BpyQZsuh5p8Z9yZP6qr",
  "key7": "3281ret4tt3TL5P2vQJmFu1VBw6pHWRvKjXoPMV8XsbDcb9e2RJQ4RadmBoj94EuBSFxx31qPj8tRexmZQdmxhUJ",
  "key8": "61kZCwtby6f299yxabHVGBg5FbfdB2KunguLwfvCn7Uf3zGJHuA3RrKgXWF6Be3TNSerw7GASA3XJTiUGrE5QKwu",
  "key9": "5UBBHPPeS7AJ2kmZ8Hyhg2zWcmWtsKbB9NX2xCqTCSFFX84FxLu5rcfVHuJMBx7vY5Ctr226UfCXtTyXSebVXWX4",
  "key10": "2ABMRYbZFvtzxa7WHudm3pHvuMuhHc7prVNuBDFmuJp481znxSwaD9xJGS8rLRTt5n9eXNKoyQQcKEputpADKd71",
  "key11": "2RwgQmZiJqCCbifnGFf6dZm8z96daX8qzxXxRdWLomTezYeSq9VJSbhnvS8fYsM3W53S678DKpLVGWRTzVmrgyBi",
  "key12": "MsGP5kVjDfh6MyBubK7NkjPLkgwv4pfVuxVrB1LrdoCvKzo1skJyPbEb5qsx7UtSA2UMD6qPuesy9pK6PYjyBo6",
  "key13": "2xRYPxUVvi5gLatMPony5Hm9pTyqZffiWKuf1ne5LpBct2jvusVBoSYeFHCHq6bumz6SYbPeMUzjG6TAXb8coYXs",
  "key14": "qXot64zbt8Wgx37fXdRbsM1q7bqmc3wJ1q2Ypa7TLVwRGePq79rGkHkDrfEQPJt71LwgERzfDML26YiDvXWqFPw",
  "key15": "45Pwk8hxiYm6xrzRBfgZpkrBAiYachwsX3GpFwvN7NSvPtM1KtCLPVMn8hsjuKddSpWTuTeDFc8YkkNKRg37Y1jc",
  "key16": "3Wevp57LSNK8dPDRpyvnp9nKcmoicifEzSKv37hVvfkddNzxG4uMbwSzRG9Q4TH3D2mo12KT3zRB6qibmwufgJyT",
  "key17": "3eEHwxRr6nC6Ge8h5bvk7veVn2XSfL951vkKGDCNCMgvM6nJ3EYu9wRqxAt3GxYnBWBSLRSmrJhR19Ac3hwrcgy6",
  "key18": "3Gxd4eTpgiyF7zoPxHvSLqMikSMeLTFCQGxzAzQkLqTYuDRQBC5ZiuYJGq66oFySvsZvNUcFxytTumQVBs93eAxF",
  "key19": "L9fLEcb8hBf7cvx2pc4QVmdGSLBPgCzVmu94KMEa4xDjmgsvyUBbpLsNsetdQC3484w5R7Q1xTYRhLNi17EyqtP",
  "key20": "3mUn8ERGwFJAYtsc8BhjXfUrvSdfkKXGpB34ikbKie8tkPMZw3MCxT5MHyXdyJJoBCrU9QMZWH2nXUTw2oKuqeRH",
  "key21": "3t4hUXtNxJax9tt65nwT2QzB4xusCZFmt3cBNfpsURsPT714oWDdVCUe9PLBnfKT9Gz2LtkirGWZcEFzaJZUQaSA",
  "key22": "5N6ZWedtnmv9WcNGUPZNn5UX5iNCGFGcHVbQDStWtb1iAzZqSq9UXp9h3Sjpj2D3PMhPMtm1DdbmpaTs2mvmm3uv",
  "key23": "xaisdcf9PDHy3pKgbTaEhDPK2zmytSezD43VBLndNMNGJDNncsLGLjhFzZxAvT4yFQFSczrhowgrEKXAVQDakBU",
  "key24": "44WHjESdCwPWYoX74Q2n7TEdtWpoyrNLQyGfi28c5m4nS5Tbf8TUU8QbywhKBxTctNn9NDsMQHijFBMUDoowkmoW",
  "key25": "37v24LzdQY8RWTxc1zWP3oNZWEJKGqDjeoeD9nwTDbRuJ4R9CtNJVsZB2SPaiFc84xa6ev2y4tijHNeDFHHwLJji"
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
