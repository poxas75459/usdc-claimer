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
    "pRcVFAU7NUkA2nJ1fNxfS16B5unhPYkRbUXd6TqE49LwXabCkNzLp6gMku2vzKW2iCU16qeijT1UDNX2XZb4UVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5bcq1i8QztKadnMuduFgz3w8aD4qQaJUFYXaGiRjsabTtVpiWxQf5XPk2XWzcgnuTVPBaQu5hZXvGyyrFjy4rb",
  "key1": "5t2EC4uiVDcaX1tD4ktqkWc6hHXc1AxodmfC59PGTfSUMdcvih3HdLAReEq5CRazMwy1Prb8j6XqRzkSJGuj7Yak",
  "key2": "m9iyw4rTiXzXuJP6Ed2uzvYaAk8E4C94aPVJpF9PFsozUThehSBZazyQkmUGnMpUjebS915gormpTZKvZKUUG4A",
  "key3": "5V6QxwDaHfotpjcbz5gR7RS4mKacS8TzLEq5jiww82MDPwAJWYXkVefdXS5UR14icYgjTCp3fCDZYW9e28KRhURW",
  "key4": "625e72mDRZ4ZMd2Wzy2fBtdNFYbwVsMDoqCSdEHeEy8G7MsWWdyetUs9Ryd6ytMAARZJsVjEJEXGoammLpkcSE4K",
  "key5": "4Z57QJkpwFtz34pqx5VDrQeVvLKsziBwest4WR8baP3Rub33NrghZrQg88dYtdZLb1HHrjt6EDTBY4ncWxVAVXfE",
  "key6": "61j8RrT8fVGpM92iJBQ53t3D19pDsy7s6hXcJznw6T7xrMF15JNjYmmQCPBS3oNFENn4zixAPmmLfhRJrbzdxLi1",
  "key7": "2q8cMcK795YCdCJv7BzNK48pJFEXZSthjdXubA7zPHzUjkmZAJkGdMbXFTVokhaQfFYre9gDnn2MuysJAtijSbr1",
  "key8": "5RXVgsSMMAB4TQX2Y47qp7aCG4TPsD7fJFUaAmKxDYGUbxhSL57VhATudJeUCTSkzDUJK3JEH9Gxa9GKpTMTKHVH",
  "key9": "KwJJUusXfGwVJecxYA9wCfhoG2pxqnUKBCjD2cEMutkc6LtJ9AfMhwBrwxSgvyPx38We369Vj7yFyXCSvThhzV8",
  "key10": "3xypiLJz5VysFZjsp98EkqXNQSaKybD42KTQwLj6foYwr1XJT1JZumXi6t4ZoAoZvdkwoHqKbucueMe8UNb3tFN1",
  "key11": "3sSBmbb1x8fcJkUhd8t4eX8qiCWSm2RKAMxRTM2JVtQjqAYdZ1dEoiZiB3cRiZnvuK7yzZzZAjHE1ZBJ33Leu3P3",
  "key12": "338F9jN53vR8dh1CAiqDfBdJ6vWGKjvV57QCzqhdjsi33fErvdiynQvFjGmgaLzVQNcQ1emakHsSqxaoT5qYnsW8",
  "key13": "yw3upjPCGEuyjwHFe6At2So7RECCKUqYoieS9C1mAFZCkeYGLHjzMMxMoPbwtmchoE9YeLR24Pt5ZJD1exAgSrM",
  "key14": "4omcqCxTWtixarqsG7TF1biNykAXvXwM6cRBBjne9NERDoDQeUceZjgGTk5e3aMuENqcp5Zj7a2UKBFbPJHVoNMg",
  "key15": "5dGuKb24HGU6E1SFwbEBeXJFh8NaomFi4VqUnGWKnGPHDUdr7fxUfEH2tSqPnoCVybeL5hUWvNrXskV2DqPwyymV",
  "key16": "EDBv1T6ADWk7oF1jdPo5KbthY7BdZvQmSbmf8sw9MzG6MQjKTVz7Pg9rbpKYvGXVMay93xpQgyLZQbXbFj3Cqjw",
  "key17": "56983qNYz52GLJAgETLndAmM5aBuKSPVa3QYHhu3HVygLdYAdqmjzQvZFdZgb5xCu7MyqUaiJnXHmfvSuBTQCZbG",
  "key18": "ckxSFDQDEBbKmem9Dmg14mtFmgczTvWgkbMkxDPENpTXFY4jJKJYQAZrpHALwU3j7mD6vwREAoKLP4mmyU1TFEC",
  "key19": "5rBFW6BJFqXrYHjH6aXhzeNfquFbP5SoHCKR3hGXMiYYhDcUH3PyKfz3qFUgepjSnSoTJPuk8eFid2zYYkmZNJ2f",
  "key20": "4iSA4yeSaxL1r8dBKcpwDWzX4x1KkwqowanP1tdi3jz9kWvkPoLZP4xSC7GgMyu1zWdFEQLqFF8scMokFztsVei9",
  "key21": "2pUB75jLJSMDxVbUoJKZchG99gJTPRJpsiGkDmQehyTqaFF4JEJc7NnaHHkcdUu7JnFNbpBF9GaMQCvghBCsrkDY",
  "key22": "4uJNEfTkndFDaEnW68FnBdJFSHh1xCXjaoZM6hLuzRPatrh7RHZH6VLaxgfTQHH8NfMwoLqpq97S7jNAif1HKB5S",
  "key23": "3iw5PMH8yVyE7UFAqqE6qpgxyNDTeqUc2TAHBem1ARKM3NJ6yjsP3TNoEQXTGsAgBmMGkRi4qbMpX2hNpBvaxAAc",
  "key24": "fnp5CsB6nZm6hYZrijMTCrz7pbuw9GAVofNnWhgfiqfegGH6eoFATantCPDPyZfbfdGFvoShUcRYWLTu3Qdspef",
  "key25": "5rcn2scbctugUcKXrCcFPTBDYfvBr3wXKE5id6Xw6svqfxjZeWxBFSMe7ZSjNfng3yhuPzdKtF5hrqecuuyytsjF",
  "key26": "67LQjaXdZrVDBs5KEw4HVVSW6iSuYVjNPMD7NhXvEGXhBwVSACeewBKfEFjD7NcicqM1JapfCG4nLeUzHk69EqMb",
  "key27": "4dgTVEdqxN6gjBHbAurYviQKDmiZkTUaARC8SzTH2UXFoD189T16CUcrkaebtGybYEdfdKFKBfHxVNVgEZQmAjJv",
  "key28": "4iLz7Jfc7BgLzqLfSBjBR29oUMUoQPMYdNiyVLFar12tGJRjoJmgwEMkRieULDWLy8ELQne7iMGerqpDcfP8CPty"
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
