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
    "2rw33Hz9wQz2gSVe968uThfKZkmGvoBJty1rMDuZim49LkDM25UMDYBbsTYxFqiAUJJcReXk8rzzcY2WsLxaLkVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JdLcRtdtRVkXyVguzDVKMqzwn3vhm7GrV4jaVksAiw6rZwFs6MAkGWZC4c5DeCkkod6KgFcg84eqVeFmkypNgYw",
  "key1": "3133T7VXwZ9sBgYaK2kaVtVvQaCRWBeAUpcvCvnHG6zyEFf7oetwW1h3DXqQt7ZtxoVc7kn3AikN4h5KWPfST2bg",
  "key2": "2ZtknXgf31BuZ5dYwWH9iaLKn6FQoiva7q5eDmbcxvsB6T1Hp7Wh5CvfsDgybVcuVQgHEmDE9jSujMNbhGp96dUG",
  "key3": "5pz221jG1Xv1bH8efu9RAtWg9eHrmMtcsCQ5YtkMSxEd7ykD37LyufgYcikxfsuiUPXqzrw9wrho6PE7539tmsLc",
  "key4": "3u9uEezQkk3zSYMoAgeDh2RFkKzPS3i4pjAFK6Xa8TMG8zWwAkcBq63CmKh7bUHtVn8wYwx6Z7akBZ37gZNZ9Vps",
  "key5": "34mzjFy7uEjz5NK4Sh3MdXWtXVmwkAhU3nhWzAY5cH4vKyD8ZFNUdJj3mSVqhsyMfLu46A57HaW1Z9Rmdyjsxz6R",
  "key6": "3SUV7jV6QSLHrLsVo1vVKosdvf7PsUczeRZsodQC8DBC7Mf5uTSc1r9U8VJcgd8TPwBvKHAX2H87vkZEaUBrbaz7",
  "key7": "4sGi3AZg3Thkdba9vksZpGh9boyB8DeCnKaQ5uAg4JEy56Mh67KcLTFauPernjiYjsXs2XcMKZnzUSn7Q1NC5qxd",
  "key8": "KFRLjUFcRzoeiRKTRZpM6KC9r3C4nMM26cRMLnjti6byhHqHF9Ajna931EGSCokZ52iZ8XoQQHnkg6hpVUyn8XX",
  "key9": "2NehzH6tq6fiQUwwJh7RPHT6GcNDWUKWEtjYgv9HuteUNjCmuEfa3x3DSKxz2qXFsc1PmfaYKkKYuPDDr2eQ6FPo",
  "key10": "57PYhKCJfV7hykAcDtxV2bWakGNohRUj1e82XzQCtZ7Q28CNHNbpPTaUzTAkap6sfnP7yWWhABoHwGVjPQXsKfNY",
  "key11": "QLHYvM8svgoWdrj7qMNc5hZJoGZDg9yteXSaFw1bYJME5K9akZVq7hdCkK77a6Uv1Gd1vJaBAaUCxZAf8ZFXFvb",
  "key12": "38sNL3xq8mvFrhTSEkg2ivNTNVaKeFKYNMAf9LLx8cYBBssP1QeNssRa2HAodoBdCRjHqrG6RNjuexuFdbyYd4vj",
  "key13": "5j8uVxQacPTCE4zPkXJpvQvzzdP59fKTZAQ1HDd1rbHSntzLpcGt4cz3ib89t1ik9guYeDGCUoWAEjZ1Z3LRfYW1",
  "key14": "3LsYdFckiACsg1Zfbmy6M5x4AwWsCG56Pvx5HgriCp8KC1E9DXh5jssxx9Ts52q37u5PgNwsnNt8q1cNMoKYipPf",
  "key15": "5Te9NRxbf99uafUJKZC2GjZ3H3XHx2LjTAdbMqtZLDyRh88K2AfCVSQo78zFqKLeMiken2ei3jXzxcsZmhb5FbR8",
  "key16": "57ZsTyvNx8QDwNqYsoiymb8DbvaHKhJguhLvbkB6BwMvFWqtytNzoEufZRNZzPLuMVymWNWzfxbbs4gcu5VD9NTs",
  "key17": "5vSCKFDtU7vnNM1AsptYLuB1n5avSyFDEG1Cn7Nk1fq3M7MaRJ7NCQuTwMqo3koXNihUdR5GLzwGybfXRajntDzJ",
  "key18": "5AmPuRPsatTT5gytaNK4uv6YyUty2BeRnEwpsHzEMoZyYuXXXwVfKEmEpLsbAcT2vA4C7KRjZBpjn4uJsW6sjM8r",
  "key19": "ta2dfcQ9rWkkKQ2L1qrh8FLGqfNfyuEHMzQmY2N7Zdt4x1y8KMiLrnUfyZ84bzRR8frdGvWFL9GiVrXhW9xGC6Z",
  "key20": "5z7GrphwXJN9jSxbDvD4sVzmA6nqqzM1RdS8ttHjM5poCrP5jsHhY7682tybGKaYCB5wMxMfPSBeKAifq6yZdJSB",
  "key21": "4cjCWGD9X6i9SdXerMmigRmXUvNt42WoBxgsxkBsZkZfXGTcdtyHgPWhaa2ijE8FeoEtechG7DciUP2vaSFNzfKs",
  "key22": "3C79mrExumZbmMKPdSPyUaCHt6mRmLhDzSAV9dK5tiA6tyS6uidGTW3XWRz7bN26iSxb27XmFUcQ2n8grvaiAAfN",
  "key23": "2jqw4synuXykkAgmg3NeWuT8obthYWg4jyLmH67yKSpuCRa67LU5m2EkomJTdF1b1k92Q3B8wdjFm1JtVgnjKyay",
  "key24": "2rW33oqEjYDgi2VyHhXdqBJxiQdD4tbuBBGsBRF8Xyutefsxx4BoVmRPWkHHATL4yaVv28zGoc473XkTw9Mykh3o",
  "key25": "27dm9Jq3pwGn1QfhQ5EfUT9GKnU6bn7BQ754v9h7H7KnkDjmBUCgSHMPevLrgzdj4s3QgVru9xb33v1ojZpsvN5e",
  "key26": "AaS7xZGmHNAEsLvkdL555q1tv9gjdXZgA8WADTsxXDx3rs1BELLv416TGBgRwCL3Wsz7kJQiBa25pqHBPhxYBkH",
  "key27": "3xxUJp6qRpkAuHSm1532wmwmWTuVq7JSzXN3gThu5R5GMuuwbC5DCLttb35wVW7FND8hPCTkryELhGQXj32fx7ic",
  "key28": "HbEcJZg3zhxxMEMkf3SH9TxMnkAgDR4rYmCP2gMEkXEP3p9JELEJbQEnL2HUmPN9cWDRuMDMmpk3W3eNKUsoeAb",
  "key29": "224GcW8Binf4Up9Modxe5TDGKUy7SuveG464XwNZkBFojqhreiz9Ehdu73BaZMwyShuFYD5WB4Y2DkiobP7e8i4a",
  "key30": "FoqZ8GSVGDpi7HZGD9Y16y1mU9AViUejg1uHWTZaeEUW4gGgfsfiqsfXdfKd8CYmsUq7wrvxoCwVn1FFS6ZsSCe"
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
