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
    "2Qwx6YYJSiHX6J2KMwxayWviukE1ciThoY2mshmcgd7kYHJf9WtTT6HF7Mfvx43ogUGNGKJyuxVoXrxx3KM8CadV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Atv1hoUAJJRXVCjDYzeVptrcvRwmNkKBv1SYmKAJGWv9M5Yy85ZBMNGi4myKnQus4uFGnsW2ykvZjxrKVPeentA",
  "key1": "3AGZuHb4Er6FzTNX4c43BkiH7c8QssCWx6cae1oudDB3ytx1zjD5geTGUmkaJSy59noTQesKc9x9AjCGB6Gtsqxb",
  "key2": "4KXW6SVasqBCaXARhrcWjZMftgmq4FpgUPgDQpxqx79bLXzt6L7vBZXGWY6StYM31wWe7ithKW6Zgu84Q5Ctk9S6",
  "key3": "3jxY5F7ym4Jv5rYf1GsF89PGUsMWVdNeQgY9PB81241jAavZNXmwEReZpMZZG7GK5eNoAcY79g65snyNbwVFrqCo",
  "key4": "2fo8Arj25pYk53F3aWVcfnDXCx61YvJzvkMyZM2sYq5nkrd64cgQ4WpxbTQfy11kgYeVS9CzXVvmFpYk8iJdiUD6",
  "key5": "5N9JKmNapykeMfWbpcBK2hQTKKm2LQV55SYUrRwuZ9Ag8wCL7cKxMhnhi2jGQrHYnmNQQTFm1Z2nw5RekP1c9grr",
  "key6": "yQVuNb1T3g1YJ2vT6ZUVuXe7xrqMqoMBw9Rpa1SUE4BAmWLhvN8ANkeZnESQg5YFRthc2LAy4LK6wN6nVt7t7Kd",
  "key7": "ki5r8xk6z2ei2ji5MEwK7BKNJTUAvoYMBcGPP42BvAdpbZMcvvxkKnY7T9C9G4ABTuEYbNuQqT2ggv3izh2RuuA",
  "key8": "2WDJD1f2U7aSjCwkeoK8EC8oKdAvmgXAaJq7USCsRQkeZKn35T5mY63qcTM3BDkvREeWRLCFiVq5f3wXahgWEp7B",
  "key9": "4yLzNo6NLPRBHQiYt1JkwRXF13XpBi1ruECpwhoeWHkAou757rKja4eUa3NjebkRLiW8QkrECwx1oifda9zX4Xvj",
  "key10": "3Tvi53LpU5i6eqcR5PV1BxKjQkW3HsVqvTaxHPqhLfzACCXbnD1cNAU7h8VtKMykuShfQaTfr2ntgimimcRpsqAX",
  "key11": "4vcbNUAdjCiNoFuh3oFcnSggNDTW6LFBYsyDCFxmiZqzd17fHh3Z54qkjfeMN2B3vJibi7KbbAv1C6CeKWYEyQWi",
  "key12": "4KJGaN2jjCDSkDkq38fJvqDqTqRfgu927ChTxAz2PvD1PyrD4oFUViDJyQBR6Fs4ihrd4MbzzKVdowEKGXAaf3Lz",
  "key13": "5HLdK6XcGv63nbqhhNiibacyDbWWxxfspvZ1jgjpMrnXVmPkJQUKDwqzZAJSdSSZsg46jcUGCdGoPSmibsv6fkkh",
  "key14": "49wWTzkYgwVUqqbrttENTkKDijDN436r6YsUBvjrW4PBLgNJvBqUuyJeQW3CABJNq5XUaEqhkk3Mq67PK67i6rgT",
  "key15": "4GFPRKHbzAa2g6QugCeatn2oY8wkhbKUEPeyWdKVeL1LmTm2Fn6A58c1whUJaM4EbuppKBaize9q2XR4AbnAzYw7",
  "key16": "4hmjY4ZjhUhJFi7VrcnWemuRjYsXCGjiTVYLeg7PqGse6Xof5MfVaSKN4SXDmw8E8tqvEzSe9tVX78bKQAAjKJU2",
  "key17": "eKvghhFCASD7zNrRe4u2wbFVGAJ8bWHumbj8xYjKFYyJszbtihQmkCJfUhPa8eZrSuTGN3GR6LvHScEtG3ERWFK",
  "key18": "4oVbwbKdvbKss5eDJdrfarQFTiQpKD9jwMGRoFd2CyojqX11xJ2cEeRnUS9VQQaqbhCNzfaftiYrwDD51xpzXA3R",
  "key19": "snXB2Wxj3sZboXrE1rYfvhaNVGvNPjMnm3Gvz1tHrfkpPjG7F6pfey854dVYPgdsE6v6H6pwsvYgbadVASmmRPn",
  "key20": "2qd3QNhsffg3UBYUvdzhGZSmjpEJjyyYHyAwzr5JsLJ6QaoBRdfBkh7dYbTqewgzTsmCznZH2xUpEoNB6ezRUsCV",
  "key21": "5fujZktwJstfzJUAZS5fhemP5uyxfNRmEKz7V1mhtoHRqrL9wg6KArRsQ46NbVP8raGCSLAVRSABuPVofetr9wab",
  "key22": "3oYJrkkpYCGxMvYxAq6xc9GuYcC3gjUqHkKGhohHwPAqnykXNbu3dGktRQH3uwdwaRJTsFCPHSYkuEvPRggYcxfn",
  "key23": "5E6jL8RhV5H7jgP8v9PdKr6DyV9px8ywq7o2xEjb2quRKSUjcNwwt8w3oEQi1XPqh8X2dqmaWt4Uh8bKGFKEHkb3",
  "key24": "kcRmv3YNnF6C7b6MDAHc25sTR6atPsxy3u4YNPgtcqMM5WTBWmNQhHPWFd2qm7NGoEtNwACBJA3a34oAmWDT1Xc",
  "key25": "2M5zhFobrLy8osjDJYCTY4R8FWfF8niBCevJpzocSpsMvD3FFvwWiv1Zn59vDgWsiwykqpxqgkZ9ztrrrBrmUUTu",
  "key26": "3AKKUFV2oaen83N4SwtRZJ2DBSYW5n4JvwN8xDLk6W9sHU3DWPFVkPtAykVVCZfHxiNd4usjK9ANHbEKSKtZSazH",
  "key27": "2QYn8en6NY6kGhP8pqwjTzqm1BcYJYjZkJKGjyZoNqcXEgDBXLLb4LXzHeuZXuwsCrYNrsztYciBi2swpsSziuu4",
  "key28": "2YkdAFwiCo33vcC83GF6PMcPmvM7aVemSmoqK3hq138JjA69HzSpPF7Tee5vAA9ZvJjDvptiGKTLBZUG1TCsqhZ6",
  "key29": "9UxCkFHvAUis7oHkiaA9RTKS3p7zsNT8Gi3QREEsRy7TeVusLuJKtxgx86uc5cp4FAZNtV9rcpcGFRH65hgxCNE",
  "key30": "mjxnqnrK8KfZPA5WirJkEmfoyqt7jo9qUsPaqScY7zdLLx37eafgzRtSuCxN7ABe9WYoF72i3hLfzu5cs2ZxgjG",
  "key31": "2krAUyNS4KBxkay6rK98p3JVWyxXysCAXHEW48QtRKJ95gEhMGfuhC367FSVAQ9R8BMSxkPxGzksCnokyvoZnCzA",
  "key32": "5B1SqZ5Zz6Lb8aHbw6zEr99HActFnB7AneuMoHc7CizUTtybx648AxMMjU4BaWfTgy624qD75gddyrWG4NceLQeF",
  "key33": "5CQfXqBpmk85pjaNHZgSPik1BZQqMKm5VSpufZuXPu84PPBgJqptu8YwBpsAVopAwn5NSQNahRZxCspquEMiDWBS",
  "key34": "2RWbm59RwPfLk5AVE5jhymMjCpNHeVfCvySQPEihqFqfvxAdnbjv3MJrYMFupvo71jGUdq97QDK3Tz2x7CytKoyj",
  "key35": "4iSZemcC19PXfeFFXdd3Y8hX8AhC3BPmmKpf3XZE37cmmFoBpdUzctknSjYMvhApBg5UrXfcKsrUhPQ4bZzik1Eq"
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
