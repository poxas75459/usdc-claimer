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
    "i17eWkrvWsvLGrdyejJZzYdMWimopCKeTa6ebuCZfqAGUL4TY9Wfa71KFX5YwoKEagyCya24aVZnQqnTz9pczRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAGDb5Vgqj5PSRbD39k1VnhG6iZifVeXDVhpXYxuYppZeeXGQAc5qVbTVZQzzBp7RB9AYXkmwATa2cJjPPmnSpg",
  "key1": "4sGciryMNdLCxm4xm6Nxnit2Zhz5VyKuzkktDUmGgF32bx2KMpjqtKZbWSYcsMBAsC1za5EERc2pahsLGfuNr1Gx",
  "key2": "5oGxmpeqyQXwzaQh2K3kfzpgAsCkrui6ptzpzQy5spvVpXiyJXGTePC532osXEaEGatFf3oJSrnbqPgAhxGy31Ao",
  "key3": "5Tr8G9sdAjxzMpV2fvsg4fjhSAYvGEZE24NXfEaRo4DJUVvEr9mEis5GaeGvwZMhRsceGXGwWZRh8wNiuHUcKZAv",
  "key4": "sqYnMH1k8TmebtRKcW2hzVmpqqq1jubgZb414re3hrLvoibge9kMuQMw9Xxdair5hBH1rXcDZyizDUJQgY464xP",
  "key5": "2K7U9Rq1f5mLwA9M3vmgjTfs3FcFdQ5Wa1yUujDcY8zJqUH6wjSkmLk8iwePz7bzzaEqPZduP8xYpTTggr7Z2yk5",
  "key6": "3AySK7wFDdPmcoSSZtJBb6ARYtqLwgX1ABpLJdkqS4JYjxzBNbU5BcMYYMkTP8JfPPqpp2qpXF5JGx5zfnA5nPys",
  "key7": "5c3HjENvjpDnoaXpn3xvDWL4PRGkPXx1RzdeQgNnoK8Zs7jRmDMyYkW78d5xN55W27NMVPu5oncEkPzuFuyUuRiU",
  "key8": "4tEJnqjfNGeFmUJ6iin85DjYKZYpX6z3gKTR5oUVCP8WKwEKHNkqV8WwbaVY5c7Hd33ZdYZamRK9TERSrt2X4vNN",
  "key9": "61nAnWapY6WMBcmdk8repwKByMs7rUQtMZrYsK45Zj8HkRwwSNKCf2eXqQajd8PiWD6sSB1iUvrzzsFw6unZeeYp",
  "key10": "5iHkBzxjRTj1jwfFupNt49Q4NHzo2cqcxYii3ezhxvLTLKg3te9q4c4VuHTRkAJdxxihWYVxBxFPf9h8zGJVKxxc",
  "key11": "3pUTZHzSt6gT3rXUmT9QhvyWipXfUcWyYbQ3iJpNEAfvqT8qCC3k97PE2ienbPqehxpUtqKQYE763JKDvbTa9FpH",
  "key12": "61TsT5CQPa9FF2pW5DMf5EtNC72FFKamDR5DVTJGNNBPtypEH64AiA3mQT5Lckp2ygYcF2NFCFRgY3qmZbLksZK7",
  "key13": "3SNgcMtSm4uG2LmsmY9Wpqn5xFBJwBjfi7nk4NtQn6bhMjgfqFRYyXh45vvJjo6zs5awi6e4HgPKDzRfP6wqnbXz",
  "key14": "55ca885KwoLHnKLXUbyVPxQQwo7YwiGvjPwXSC8yjuWrodT1yogidrrcjut1PuAZcP41UFHC7hGDmqNp4Ag9bdpn",
  "key15": "5pMHRguE8N4r5WvchofG82jc99T5AaNHTS2fVXCgQr6Fzsxcn4Mfj4vTzkwdumf26YjmEppgR2KQXYQF9RZ7nRkq",
  "key16": "2zrJ2VHfHxeZozvkbWunyx9dciJPZo7reWxzCQfAQLQe21durMyKmKPTaeNCDZmFynWPteBbQeFy4X3WZBmpCnUy",
  "key17": "GzCk1wKE4sAHJKtje8LgdToY8xDHzHFqbKeSCSyNRZDR2iydDj7TzzEMLhwrDf4RhoGc8eFBx1DH5XR3PaQGxJh",
  "key18": "4aSyAkzfx6VwTxfVsHANALWEo9FEojftvA6AU4Z5nBDSTz4NSBHDMf2JH4RzDVRcTNjgqCL2dps4EvuAQZqJ2hQe",
  "key19": "biiKoSKX8xPiK5fmXHsWiMma2kTb5SwNJPMPs19prSS5exwpEQ3vnjX288QHDRcNT2vRhCtAsJn7sNoS5seH2pv",
  "key20": "EeXvQwHcxxZFJt9gwwGNKtKoAieceZs5pWTbUbgq47hZA9D99JqZLiMN2cwsEP1UPRTtrpvtjS2z6uAjm8jyEGZ",
  "key21": "2FgNkQDG6cgdQ7tnqDhCYzXR7rcpRxydgeSqLwtFRhS9xxAWs7Xpg4yRtXkctPgfind383AMY87iLBKto81orWUw",
  "key22": "3LvwBXpDVTSpVnjZsU46imPD98NE2mwEMaP3s7songXemNyti84GRzFYFfV5XNAb31dYfREW5P5VXERcE7ovqeqR",
  "key23": "5KFq8YYGK3iPXKw2XVPGNqMbi7qMPkD5DfbPU4xq7JEV4h9Eh5ZmuK688nHLW2pCy5opHFC3EztQbLPgjgGCwNKF",
  "key24": "5UXiDeW915A3TsF3DdQR5Nbzf6UrVboyuG3S3PfS4ZM9idKXKAkNs6kBu35Afs3gfL9HHm4GiA5yNBs9SLdGdyUb",
  "key25": "mxMtqiRkzQZo1yRm9WMBL61ZkL4bJaDireDAvtxQoNYBBzfwFL6yypahgvsHmr6G11tUFSPjruL6uqnchrbjVAy",
  "key26": "3QaYCkzRfZsVZh64mSX1R4qQjKRdr8jdhu4DGEqgYocCuvmpEVd4iaRz5mKqsibeJkvPpZkXK4FQRsTQgYXjmHFB",
  "key27": "4B1EJc3BZJvuYesrJbNamiKjhbNZYadxF2MdqLGVix7Sv4Sz2spXNLKa75tHDp4EMYt32Y7L7zUojNs7fMop46qi",
  "key28": "2qqqJ58b7Fev5gG2KucbuJQBJ14KbzE7KNfmNo8kpvMVEgpVjJgX1QTQzocMjXujsL9Ue28d2XpYAqSmT1e1ahL7",
  "key29": "37bTv4fUHHBALSxATrrVikc9ZyoVFX7CsY3q5PQCxq8MBrSvhNVLZLmGXbxLiggYG4i1eeYDq9kxJhhgmq9bP4Pu",
  "key30": "4ZcMYy3UzrpYr7jP4Ycx3YkehEXw5NoTF7NGBzxyLUazFNKfcvpZ8FSivFRgDUx26msUsfJQHyR8UDiXXrxve7kt",
  "key31": "3nnw2A88TANzRZxGBBTDyeXshXUGEe2r66Jm1HXDVdTYJhVtSq1QHnpiMtZd8nMhSTQfuorrUevhEzfxtuD2VZ3Z"
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
