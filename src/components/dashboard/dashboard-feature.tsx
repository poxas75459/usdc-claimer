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
    "62bKna2gkMDLEcEnqbz4hpLxUPLaTy4RPhUF2pAEwMFs3zTrvM4bQsExnGX1JWypu3ysLrBt6RNuXy17yyKjg5ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibXmW7DENvaVPCZYuo85SzxoXiekoZcjau9D1kWZqoed8vMitdoVcZukhZYLqVnRfYveWLmbLdD4oT4x4p3z4a9",
  "key1": "Xv9DPFyAGiyjp6zEzjFXTMhD8jtsjCfgcrcA189sU7e2UnKXsjM8r2ZrynCtwWhc9ARTZVRuY8dSB38sLPtVZRc",
  "key2": "XB753BgAR4kTf2JeVkkxxkWCwsFTBRG4N6W85XStCSye9wWye8u1tVzj9FbFcaQf6FuWRPz3awT9hToMhqRAXvt",
  "key3": "2U6QW7t1DN275jsMsvwTdYaD7zbRtqQHNZ3pjRWnTL174exDt1GjHXEfyvBnYsNtL4o8K7iNxzmf9ZyEwYGGsGyL",
  "key4": "3E8zr1EiUJiutYPvjpwSozqTuss6jbkC7EPukmBNTtsCFSA99JPdCgzrsfENzbTK6Yp4sjDL3k5T32Xg63aohEmw",
  "key5": "HETSo3hJjBhMiKkUjHDbrQoiXBsydCMngQbYTJkWCVf9BYrdPRCHkbY6K7JUZyM4kPh8e52nWCfHN44DUguW5b3",
  "key6": "2UiYo34njU9z4kra39GTuVKNHWKmfjCmBkkn6LuSb4SRVHjiukFbYLJ3yskkjxqNGX62msvwAprTjSmNxa2WkuVr",
  "key7": "22MSz7hoiW75WiEp14Qejm9rzbr4xE9FUMwtNkWassoahd7TTgBsCmyX2MckmDQTMs9sxsZ9uzUN8w2gM9PUoSgn",
  "key8": "5CeFSUgWDiQ6NZAcMXZa9okjwCXbKc4HmSe1giDxEQjPqKiEnZu7JroPZp6abebSF5bxrz6X9ZcAjN2YMPo7xvyH",
  "key9": "63edZJgLVyuxPBbE1oyCyHYmvkhXbBBRpx9ajLHKwF5w7VCFEHaZrfDNzYazh8upmgQzuY2xUgfg1sfqM4CmYcAV",
  "key10": "225FtZ7xFBLKHrbZEVSRT5kf1xAbwes1jVXnYWr2gKna2tFn4FqGXcpp7uDC6Ti1ibxRM8fV5EaJGMArRRxP9FGb",
  "key11": "2oqepz5PDmBsAhMXpGGLQMAXcpx3Zezr1mD38qHe6ADwYoeMbEXb7vGWWeMTourXyK4X7kFw4URRBuQRU2C8W6Mr",
  "key12": "52YHCQRE81mff4KhNgeNJJ817Qj8QyRVQnei1WhfkrtZBnFQFZmQ8w37SLPADwJWVUT4PqUXmvLaCRCVHngC7cfx",
  "key13": "65xFFvvEbqNBGmYJR5WeE1YbrPvQcY5fZk8hwiGYvAPfUSNrJ8feehgXxhthTkozuzY2CJ6cqVmaV6cSM1iXcGAw",
  "key14": "5DBLzA9SUMcwCR6z8jwRPmU8psEAiRCQ8qhHdxt8hMJWjmLA3Mck1kxir7gudsy6pCZZjuFSaqNNtv73Gb6bhDcj",
  "key15": "5ycxSyDXGkRvUY6oDupR5QxYeoxQsUPB7PEyaZK2zzy1FL9GBa3uEcGRiqtD2qvwGQLK2UvWXS7fg35wW7nKoiSw",
  "key16": "34U9WR5yAtLX3B1NBEihf61sL2Nk99DznFEDBZgeGecxmHVJNfM1wXeifFapNQfGQn84XQgC59JWRpmCyZpk2SDD",
  "key17": "2CzfAtgCeM8byfnB4tEj2r4iw1povs43HQimoEF6znonVZxgPL7Tcs8PbwmmHBjcDXZEAnHy3uRhieUyZ11dkuHC",
  "key18": "57quhcmmpjz4PHphr5YwmF17Wp7UysSnxhhYB1NgNUEwLGFDwo6JgVDkNy9sVg2sYDHPeAnd1r9BbdY14DSq47Dd",
  "key19": "5sp91Zi4quwVXbCoE22EeR62YbEPALmruhp48ReaCBqgYg4UF2tXUrK6XyA1sVESXe1NeFK3wq8omHEEb8ShDxjU",
  "key20": "4D82Sqvn49KFUYNcw17pPshyAxzqQuTT5NFnSWBz7YSTaJjfz8kb1ZMd9LqzQvvUHC5DmHXUa6YmCJZM2mPpWViv",
  "key21": "4nSb6aYGfzCyfuEyT5YZFzGDia5JCVzoecY9EYW6gH63AZLGLGEnGdmTWvNdDK5pJx7f2AFf1ihoXsU67BYgCwyB",
  "key22": "3v4FtazJp2Ez4Ft4hB4zJ36nhTq3fJvdq4iDF7Lr8xWxewDZ5rjninuPNBpeSBfRXtX9rLnvc22hqXQumtXJnpoL",
  "key23": "2PNdZG3SNTLJjG2pfSVY5z5tfppA6TN12veNxj5BPCYpD75kTedNVNxmmswURt61j2VXmERkhtVFWqV2F3d8Qqg1",
  "key24": "5mfPzcBtRZKm67CyXDoSAzaVfAb5bX9jvvNZhq2sB16Qw597VgpzqFMjFLqzC8tBTN7NrBCnSD1HFv8xUtDKU9ou",
  "key25": "5d9zDQ59xgCrMmtoRH2CnjhrmV6d1L9ubpHZTFaXoGvVR8rdEF2qePKypzBfVkKJHaai1Dg73vtiw1YXCqXr3YCR",
  "key26": "sAfq9YGG185SCKxUPH93iydd4ru3zaN2HVtZdfR1kZRHL3K4RDbBVueyyZhBWW7y1cnEAjCS8wSgmGZ86mYFtkx"
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
