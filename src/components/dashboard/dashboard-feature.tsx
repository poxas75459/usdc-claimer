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
    "2gEcJaKggesNYHwqkcCE7YCd1w5D4BPziEMfriCquygNe8Gbq4bcHML5xcQSADoHLd42dJ7QUf3rLdarPhThkPqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFMYJcWoMG2eKAzPY8tcD3BRmmu7nygt9LX61iPb8m71mr1VqYqpLPSLP3vvDdMw1u66uSwNkM2feBs9Xnj6v7D",
  "key1": "4sFRvFq2JNE1jDsRW8SaWAWD7krqmHgE1XTBF1Lyeba4f8nnxiiCfAmpk9FGQmwjbM6R4zx2Z6CPvjDpjjNqyjho",
  "key2": "63qWxPUM15BLuGUDbovyLM9JTBJCGPL3Mqed4BTEL9GFJw9f5EAtHZUMLowBXLwSSMLRKCgTa7245StcB6xKgSHt",
  "key3": "24dFLe8BKE7ceRtRg2rgpjQx1skJFzuxf3o49qjnHyHRWtpNe5FVUiPnNjuEUo8w3E5psBtzPN5LBXoEK5NkA4q7",
  "key4": "2ND3fxgv4TBb6mgHTU5UgwSuddwVfm37LNrTcFaZPQvXhAEHYEbMGy9MXxQKt1XXaeNYPetwk3pK8zezHpzmMwB4",
  "key5": "3L9k3WkSmf3ZuzZ3AVZJ4NQxGxyWjEgS3Yi4Z4VzySRK2pZPhxZgKWwcRhHY5HgCbGyUP9ecvyLrJ4Zh3GN3zQBc",
  "key6": "5XyWoHGWFqWhSBQeLcB1MjuzE62ppzzPb96wJ7gsdPYn4NKHwm6vke65Pz3B3GLzRG1ysTX8BAGMVgGPky3bzXVv",
  "key7": "5sBNhXbKwJyjgfnHKBdUwU41qwFBwefHVQCQVB5XX6pYPe4pVkLRHFmTW9xAzDLSnEsCGVhMpjGbutmBbLHfXyUq",
  "key8": "2NXGrScEi9s6mb17998McESLPt4rHPmjGfva2BRcq5iVNUbYeYNvnJvwJpuMRWJLFw2iooKQdwuDfKsFUd4DfD9r",
  "key9": "3oF6p8tzxWitBtXpsqC1L4pvbBqZDVUQn7o38vqasiv17VE4UDddvS36cj9JaBL2gHqJ9m3fFLxXUPzNbxxHWsMX",
  "key10": "jiebxnmV1PCRWmQ1fvCT48YSNeQmiX32CTjBuBmvkQL7Z7D6fy4Ux6iCeBhxivPSEnJGXQEy1xHma5VJUgRT9x8",
  "key11": "XdXZ2UQJd3yYvmsZL9W692GA2AHmTSpqxj9LWqER5g5Ce9KXr8rvEePmdK4ZX4yLmc2Xq38SMhgGV94588UdmtV",
  "key12": "2uFVc2dsUTh9dcDaBN3NA6oQsDWGGwuZJi1rPGWYyDBKFeNQ5aMKEQCWKRdHSGgSf1aqXGzJiE9RWVJbHghyWyTY",
  "key13": "ydUoL1FnN2TAJy2S3NpYUfn3N9iwYADYnPyajZLuWbj3532UD8beXyDNc5zuMpZrnWqkdSYbCJksUnxWjQa1upH",
  "key14": "5ivUEDzbiG8mHdCMkGgWcnEcdwyhbcKnw95FrpvKETVfJUBDr2LnfQ9AHYXuwCgt8ZMfR9sGSD8PTtecSdr5pXp3",
  "key15": "3MftNoV9T7sn45mMNseE3GFJuKMC4ry3tXuCscHD2vyQ971mFCYBbtrvMYggeCKr7eb7pbpAiDHVAoaTC7RLrdYr",
  "key16": "5fQKKrSc4VyitnQ668HRHHjYt3iKmCuYopnw9sGviQAYTCdsg1b27Rg6Q4seMnyagN6J5eHYwpDoP5tMbbkSEdjG",
  "key17": "NbUhgfs5s6W8A6QPo63v3vnLrJzzZKkDeuXwqVUvC9D3cWMKg8Fz3BMwW2jxH61qVfeMD69D7YKFrVjHgGGCLk2",
  "key18": "BkLRzQnP6U1CUENpbJhKgsiQZqt9zFiUE1s6AWSqxYW26mWwGdWzf6FsS3naX14gCzaC4pRdHzm5rd2quy1kkvZ",
  "key19": "c6osYbpGh9KJeAKP2bgcDp3yzfeUKkbqgTy9yWb1r7zgSjxfJXxb2pVasPDmTTwNqnKD8HTnoYXiy6S54ETrmXh",
  "key20": "4dbrHruLqgJfrq9LVw1WvP9iAJr82pwpKvs4EF2ZKpuQSshoxPc1R4rLzLw522bbLeqfxBbqrLhZ1b6Gt1eWe6wK",
  "key21": "5wVsubDyad3V1HXxMrtKu2VPhF6meESzwwbeGrMqAWmnf3gyyKoJW9KxBieR1fioKhK1oXAKDKEmvKHqZHCBWvbf",
  "key22": "4nDAebb2KYJ6XzFVmH3f4PpQvnpojKfsdwLxQoLRsJD11YA1EcsGJW8EeQBEPCj1yM4eLxb5D71jE7vd6aHbxpN2",
  "key23": "2t7gT6XevBDVGzNAoct8gfpcxHuPtQr43CbK5y14yehYBasTeQBEMkisVFZApz9hQ8Uaz2smqrXKQG58iiccB6TB",
  "key24": "2Vn2H5J8oTgr8zCu1gsMQVkCwZUa3FWymGbV9qR2aXwXq7x4awStVVEWUELGLLKH5w8Sbgk9wAvo2vReU3kdJGHR",
  "key25": "2GCEAsphyTXLoXAFtRinCz5cDpZvA7yKdWZRNhm6DZ8skXqHWNDafsK1RvjFYHwcf8QCcStf8S4YNv78A4Ag8R8L",
  "key26": "3C9qvcTHMH62K91Fqd8dNWaisppoqX8WygoiYHNBaZeBtszaBrqV42TyDiuredjTyrxjxRM5JiFXLEHHyNEjs8tP",
  "key27": "3wa9MfW7hWtqFJktCr7YBTroMo1uFdt33HUPYLk5hhXcPJpdBNT12woRSSx8W1wM3qt5qLiP5UKCWVR8W2RYmgzS",
  "key28": "4fKb7BGgFPXfZV8F8sCFrBrzQBNz756FWKV2meXo9BVfkPD1J2Kdr8zFtBeuxg2q8RDwyErArE8bzxiHvH3eiUTF",
  "key29": "53ZyPLs5eGib47ETT7y1sbFsqXne6BrhHuvXGbWJzjq7JBkyJJMLwi2ggtWkPu2JGkmGGNNHp32xR85excNHgZC2",
  "key30": "2QtLVk5RPduQ4kmPvJfvDM3YCBmAktEU3EcpifrVnwvSt2akSKt6QAhhSDjrhdXSiM9SJGBAXnWe3HFnucgGvM6E",
  "key31": "5d6aWbbLr2ZnGCeJg4aHyBDTkdSdfdxzu1BdCKFUjkd2n5EUyWBrzYYhPXm626eZtEoGaZSgZDKcEeQE1QaV5TaK",
  "key32": "aPqMjmYhupBGcnSRHyW4x3a552aWtZPe9T7WPzxNdREejvd8XtMofsSAMMBVkDSkXhRzmtC2Pwq79oB1w376ywR",
  "key33": "PSniA38zNaHk2CeB9Jg7jDvxQj6stNsg81TXU8jCFcacgjrqVWrTcyfWKFu9bukqR7akNk9D6u9sgY892Ex9Fig"
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
