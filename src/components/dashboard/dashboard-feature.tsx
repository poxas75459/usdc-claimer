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
    "aYtFTW53bYgaqbvbMr8jKQpNcAtDBMFkA5ycgrf4TkrCgQBBmmBucsqZ2A9iQzBqXrkJzxPdeWWgRB1NUFQ4UMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKS8sCYRxL67fBTrFreas3Cei2V3KiZgXaUbQzhaEUsG47d5bB9NaDYZ7vYwp2TAoYEFxVq6cuCHuMXxspE1Geq",
  "key1": "rKq8jxwrm2rcy4cScvYPWroMAHN3oYaUN2QaQunDkZRNmV8KyNjqjUszZnRVmiQqqXcM16uuk282YywQHsV8XfL",
  "key2": "2Qf4tRUnbHk38XZiTMBs4jKdZz61UncEikDsnVkTcEz8SwyrPWRkCPF2YRw7xidioYQZDuhK35fzbxmzMaoHo4v4",
  "key3": "2USTNGHENTxgegYrCEWtMs9nT1BHEigqKeYr4bGi422NzcJJzGogLN7rMnRBd45yxTCUD9hwoufbN3kmdPJ3EjjG",
  "key4": "5yUTg5yxk4P28VAvQBNBdJLeGtjLERu42EDyLsUX5gyX5rR75zsMyja5xYUMjgdLSG1GXq1PKKqoo87BbVBSAsQ6",
  "key5": "3JfZjzvUWqrgh4G5wPPPbnfzfnkDscBFgvjXcnaVCJBdyd8Yr3av86owj2x7BrtBGakGBewHuRGisMsSdXVGpdVb",
  "key6": "3ncRFojwcEWT3fmiNSY1AP8Yth7nTM1wbQAfME2QcFsXDq2uK5SUyVSRu9dQtbHjYV9LUxZ6J72iRuBcj8oE2ch5",
  "key7": "26mroF9KYzGsUwVtKGTAQLtQVHUeqXKHb359iydqfv3iPDk1hYoAqM55tnYSX9XNujHxzWEU4CaL46t1T3z15nv2",
  "key8": "3jpGWVLMvvwvyANR4EnVoGRHT5pMGi1czdUgEt8bwYhmoVj4MpTKu5mh518zECKDDvajhNnrrWmk73ALRvQkGW4N",
  "key9": "5wnevHGzkpNpSznpSfCF33RtGiKf37mQjmkgC2VCBvexJYr3CVFDnsf7eHf3J18evPBzP3ytVfeutt87D7nRQbJd",
  "key10": "KKLwVf8trqx3JNaiknKYznhk5v67FVD4fsvAY48CaNaktWyvM92M9Cu5gsCesGpEm8iK7sR4XokDAvobor1oHhG",
  "key11": "4qNKvyZPwPHHpxqJEK9Wu3LKxxEemoxAp8uDc4TnMVBmbTrn2hb3JyEF6JpNTcvk3RaCd7g4MQjXc48xnGKY7ne1",
  "key12": "32sJB367SDJ3RyTi4jpfVm7eNd4PCeyftNNzDGwy7NyAFDzGUwdDpebWV4hSSDnEn84gQj6URKwUuaV2SNYKDLAt",
  "key13": "43iDodrQvWxVYoXwEZcqTdJoVxxzwUSLca2yAHxwPZ4nAnxk7hJXTKUG4ZfoctLX11SZWogdZ76SqYMmmcV5gYFo",
  "key14": "2w422JoqdzQXqyKZq7pWAU3v4gb3TzcgCyP7bQ1ZjzKjdb3K7SWQ5oDEBj66Ncrc8WH2LwbLoxGiynPFSsCpu2uj",
  "key15": "baAy1vvk1XrfQb15z613FtinEJ9qtDwesJB8cHnssYmXXHvjhRGYxk2KDFm1kTCnVXyNaiSNDphmeWAR4QsL2sG",
  "key16": "3RmYNzn1sFFKkS6imXE7FcPS345d6oN6N3qx9xeXE7T79HyeDTmktye8rKmPK6S9UknApGfgYaRNKys8yxNrGi2X",
  "key17": "5etvmzqtCEECqD37zJEdYcaUafew2ssd6t9MYCfudZZDuAp7kYAEsMPCHbYoBKnsEhBmYVfngqQjUeVNoYM8vNzE",
  "key18": "3qr7tTDe9GnPQeFfJ9yJx8aPhMykr4hkEwQaBwjgh2DxtosMdpB2vAQvu81qzdS6nDcD2zQRmYzbeYqPNATJQJqw",
  "key19": "5GpUgCbgDBhEHgHPqE6QxceC6gR7oX95uVJh7AYAvBtr8qtYbTebwcZi3SCoAmZACb9AMSfHeZMajHu5bzqxxoft",
  "key20": "oWqgeiW1qtKEcf3EXu6mZonyg17a58Uf9mgbKm7MJ7m7v68HEeki8MM2XZRnZzEeM7vBXTaixxWEwUFtsDJpQXx",
  "key21": "9D3U8SZ4JX5r26SykoRwJKSHrYBe7fxuE63JsQYGAw4kVZW4GJFjQpYUSTa9VgA7iArfU4NNQtBC3L7g9QjAp4k",
  "key22": "3yzUwJASWQit4tdHqmnFni2gLuMNLFBR7S8LMtnaRchMVD7aBu7m9HrVQ7PdkakkLWuqRbBb2EzAbYKAQ6C2RhqU",
  "key23": "2pSUqvT77ALtMTrHrkeJuWLdNhDvPH78nLKjKxp8CD7CFWbJCgUah48pmJH6cypiVgQHUuUX9L6CX3TwpP9xJAVW",
  "key24": "4NpurxsNmtKc6gGe3mjYqwJwq796TcMs9Wdn7EsqZ7YkYekTxroST3qx4taTyCBdrQyE7ebvm4xihSiiX9k2SYz",
  "key25": "2eaP3zMV86k3jDfT2h4ypJCP8qpJ2jNkcCQZh8ryKo9quJzq7DR4Y2GkVshn5gvE4ZXdbsKE67skibcTKvwo9Yp",
  "key26": "49QLPC6DKUUUAUF6iQnXfC31z75NS2J1UxSV4hRhzmNYVuzqqrJQpa5QG3FZTjagZM2WTR87xyvVbKz67G8foLkV",
  "key27": "2d4TgSwu4L3WCHKo1mvxLHA7J5Juh9Te1p4MewtjdYNpM6mEYZKQW7SVidnWHXXVDs5xMx6TciNdeGrLfFVN678u",
  "key28": "5QF98SQxGtbKodB62QsbEhAuQGnQtLzCjYRtFGdYMYVmGNpaUrFgXrTQ9qf5GwCYy8RUfXq4aE8UofxZ8rUDK2De",
  "key29": "3jrqL75odZiumG6RDJCzgMmQ6Yu5fz5ZQQqmgY2wJ4wuLz6gnGuHbrHMdkut53FBH8Pfsu15b46oNe8qjaauKv1Z"
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
