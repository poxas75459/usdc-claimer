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
    "63giaLAetG9Mxc2TLWTdUchxbHAh8KsxoJQx4r5UedSNkdsU2YUsacRcDdXFZKBZXkvtEttsT67XWoRJB6ZdSbsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyWBjfneNYdMUUj7zN2JN8YPJeyrKQ2KXEHC7T5oaFRYgeqove7E5roDQF3mUi1NyGAhYeTVfXsJ3S3AXQbGYEF",
  "key1": "47UEuCwKz76eJsn6GBN7zUYarAUt4RWw2jqN8qESjzj7SBX36uS6Xaq2giX8NfbHmXnhV1k1Ur6xszCmb2ZoKVff",
  "key2": "64FFK1gyvUMPkVWEEJC8hwaKHAbHsnpBmcCfCpD6iU4rRMUMKiGrwsLWiG7knPyMVH5yLsTYdnNZZjsFfZX79AhU",
  "key3": "5w7gEGTRrsonJw8hDsYiPYkKaQFdJLiRnd9gQWsgUjzstehUGknuLnRiwZT5qoGV9mJjekBe5LxWbUV9TsTFKTaa",
  "key4": "34xadxq1biNg6gYbDNbyuT52huF7xFwNPXZuXhAS8mLimEEiDsYu7Q5NmToGDPe6KkXmL5s9gHrUoYKD6WBAQqaj",
  "key5": "3YL2CJeUFSzN7ezx2qLSXsAcxVPE3fK2ipExx6bs2fKEJNa9yCwiD2TUksY66VLTXbYCEjApikZbAqagpDsLDt9u",
  "key6": "4dshfhAKBtyhxfNtFaNvCHM9tAG75iWgxbSK2HpMM7uZWjpEYhbsZc82D3hxQFrsbqBboy5CyS5u9jVgTWCipJW6",
  "key7": "2SSH55Nj95CKf6nBKvrEui3rTcwsuncni92n4et2uvcCkbrsbzhQKE96VmocZUi92zXB6mwyHH8TgFVx7NAxLatR",
  "key8": "4Dio7qtKgsHVhHUtYZSp565NyZPp2dzh8bkrdWgMkeMTerPzKZs2zy97r5XXHqwvi5ZhmS9QpJ1Qur44HtzuMPsV",
  "key9": "2LXxJUtRHCfozHk7Gk7tvjcv9mW3LXb2r9bPVLB7LNztbgTRDYqvCywYe25ZQrVxSoexse22db98T3jw3vURh6E7",
  "key10": "2ePse3RcYjyaJVnzGwh9Yhx42YZgrVX7jpLcMVydiEDsHUxTtvWu1sSY7SSwnJfXTKgBzUvghvidC9iKqhvy9eoj",
  "key11": "2zMwMM5qE2d2ffa8mmJs97ubVyJDDjxBCgtVeogZe5qpf5VpcpEy9zeDyQFykmo8y2vxsjLVxyjPE7dwpSGsDEN3",
  "key12": "2YXMqFUpNXTSD6fjsRNsbupjCW8SzWQetEz1GG4ReC9UCBqcY5SRmAX2JYux3z19G2WbWhETcwwtQoXNrBabaafj",
  "key13": "5CVHnXH34UTKJoqbEM742k1yVJYFugTbkZ3wsYVFL7YV8pzJZiK1HTUuhZFrPMZKnz4KWBSPh3nPAPePpjDkVwTw",
  "key14": "Z9DZSWVG5fS57TkYg4NQomwSMyZQYeKZS9JzSXW1FCbVT3tiDrPJ9LMCNS65ZdXkYjEPLs8TUsNG7LhfWT7mPDk",
  "key15": "4G9dwahURr6JM4DmXcv4DPPSgXEgyhY4SmA2ANBEcp3SDVjdV1CBr8erwpxF4GdiXxnyFBxozU7uLmZZgM6ijeHZ",
  "key16": "72E6H6CkiXh5vbWmya9jVQgPoufTKEhqqZErMkSgddkQYi8jXTvZC5euCygmjEDUuCey3BXFajyrrx4nD8bYt3K",
  "key17": "34YMLmtumNrDLABjFNAJnvrPhGrXcWHa4mhFs97gLpyoVRjG8h1PmVqCcif2zrtey1w82LzzyHs8BZQifit4vpHp",
  "key18": "4MF34Thic6GLmo2A2DEdENTJf9HYRfJqeJ4Kocb8DkXQZALwEbaUEttvbDaaFUaP6jzmMYLqJUkyyGxkNNaT51Yo",
  "key19": "45hwKVQA1P4feiahDcpmEcF6DcQytBzhEVGJ4da2e79XERqTQ46JNPkfe2DKnXZ3tqonpBnqwAoHyZYeLJcGjFih",
  "key20": "21wrV3rpam9Y4riiwzCN3Te49tGbDygzATsYGuFqyenLnWSgNPSK5PYBG4ck23rXy2WzzMbFiZLAMwtUX7WDGwYN",
  "key21": "5Ax8r6ZgfMBcjsz3535CMRMSawMtZyJxzoAGinA9SWXVNpm2KRtohckAyftYfeKqft5XdVw8ijYmTXZzEbGr24Zq",
  "key22": "4s4qWWNBqtrsbgc6aKHqdfjYQJAjWFGn9zzBKih57mbGgWrGRN6gGSJCx3sX7XbDdHeDxqoGKyP9eMDPuHg6iZGw",
  "key23": "4oC9GHP38MscViPwASB5T3Ma898NDgx6JXp2EETiJdb8MEFCsjVaDyi2CbX6F5JoCfGbennYzeUjvZQ46ab9m2ap",
  "key24": "31NhSeKPcoVWXTUMMGo76kgNJpJmCpvMFWoLfvF3WaEvkDhpNeHVtWiG45VvQ9mFbDGx1NQmqfDAdi7D5tisH1p9",
  "key25": "2jY2L3n3MxU7qavDfsbuv4WM5G4Nej71jurH6sMghLgb8mvtiXci5Le3UrYM8kEwtT9Jtwk6DJtXFbkJ6tN9dDMM",
  "key26": "61edvAuL37BfoVy1TFXb3DNBTJ1TfrfZ7TcFDVmR75J1XL5yzsNtL1sLrGbqMSbUyiNuSdoN5pkPAs3HZZydubNc"
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
