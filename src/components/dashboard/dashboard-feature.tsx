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
    "4EYpZL3SyK6F4nve71X7erUqK6Jkj3WKQbTbfkq4GFoUYnsnJwSDSNPuW8YqbGXGgk9unbTjbJTsGHRakgBUuTDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAJyvrHzCMrikUCk5axYPoCrcMoPbAVzwWAgVGut3yQPeNJoHYBjP5VDZa3fiVDMjWitep46XKT2KiqQi3ZTs85",
  "key1": "3ycLpH49aKCCioJPB8TpFB5r5gBYKM75TtFTm78UZqwURMrJRKECYrzn1djrTznfArege93YBuWkuzkfMAWgT6Pd",
  "key2": "yeFow1kcKqqpBJyZNKk3xbyY5P6GkboDSBnpukjfRUdkuwQMTQy2GiVJhJtC5oiM15WJaKYr9zE7H1XThdm6LQk",
  "key3": "2Z68f9HZbDaeDMNpeGtbJsKDWxveaGTXM6dNLUWEce71Tvd21GdQ2paJE8HCpy6R31BoQ9xvoTj7iG3T5H7gCN4v",
  "key4": "5WBUR3RJKwxW1BgPtFmQ6R5m79i7ogb4YTpJbb6HWNbTWoFFJFkRsCEyc4kE2xndpQoCR9m1b9wgyhwcLY6BjKr2",
  "key5": "46jUL7RqS5ho6dJDB214SbkTYSJwkHkQXwDacvdX2in2wvwrF6d4wPT82yvPus4r2dymyrPc59QLgJTQXFH2nkHL",
  "key6": "4QkHnnGBeadnaxA24AgB2W3gbNeD46F6BkaWExZjqx4UNxRXGxDiNB9jKpn8XRRKhVCnpEKEEcG2eV3FujLm9dR7",
  "key7": "5KP9whRJZKdwzGA56jUk56T44BagXvVUn3ewuJnwoUpQwkU5pX7RRYtHVvRZvgVGj4CSZ5WMs1cLjJBZFv3uNr7Y",
  "key8": "2TguYHvVZpoqNBgiQwVcZKxzHnEFo2WZpVXjhG3LC9yZxdGFoEUxKTQpBjZFSYf5vhENZXq4snZueeDKhK4cuCJq",
  "key9": "ePRT8XppcqmbU2sJCdGpwAkfadWD48BpuCBX5a7nTQnp2PbcQ9erUMH4XUR9H6MppWrJ1jj3iRABSaLYZqoC8u9",
  "key10": "4TDMidsg878LGmsEB1Wk3gD7ajFpWq6VUPwc7wZxvnjSTQFNpw4B37y3MkhJFLPa7wucq9fo5aCEFCxQSQAYJ4Ti",
  "key11": "3mgSdQtQ6LHZnRZn1wN1WGsAmqF94f6mKXKtWPpcaf1kZ5D8CYwBcJCwwZioQdSPDhifw8TCMVs1Y85siifzTYfP",
  "key12": "25XrV5kDVAqXPAWqaBVLhAdWwyGTyeXQHmF4MkNG1SWRUP94YuRQjwRjNtoCYPw4YB8NTMwyYwRXvPvZ8Vz3PNXV",
  "key13": "3eQvrmeNR5bN25CpCqSMNprGkJdrPsxCo4UorqQBUSoaXGvW1GmKupHcqkATAbp7umH2EA2Z2awTAwodp7gBqGQ7",
  "key14": "3xLAp68hZ6Uy4u81j92KdTGqwoai4Rxnk9QEEAimdrmxKPAg3kVaN6ndhnB3LN4gMPJ5CdKbJSAH7sSHn8r65Qvz",
  "key15": "4UAy2FQLLPryPvowjgqzm3wHLeiBvkq1GVMxKX43WhTgsMLsVatRWTjTkA1XUAuJ3JJp88aK5qNLU9ctNE5eGHt4",
  "key16": "3xGR5whksEt1y6Vag6xFPiDdTnVZ9YnLJLFnN5vEeZ7A1PvFsDwQkH3QJFEvwpPzppP8iufsFXPXanV481UR8Qq5",
  "key17": "4qAUA6Pa7e7CWPoxPRukoSKypsu46PwMnPY6P1QCeSDVUSTF95yxY7TRwv7mDQH7j1rFDS4nvytuFEmEDdyoPWoX",
  "key18": "3n1wtywMW8Cpm2HTqJz4ewkV5WbdfAkjvtnEdQEQKWfr6uGEH6ZfxohFik769wLWEavtHN7AVBMpQ2WaGeaDyDFp",
  "key19": "2sSUanHZufPbS3BgyNDi5dyxm5iXbekRqQNR4wGWMFoz5agC79RcJhpxQCvWnQDzRH5oqyrNkRZS9Lbu7hbLjmee",
  "key20": "65hjAbf9wf2z3yzKHqiCE1W8YcXgK19vhs3kWafZ4Qw2TxrbMFERD2y9aAFiZFmex6jwCgSBp8UhjiQyKkLv4bwv",
  "key21": "2XEjQAgLL2oLZM6AJ2RDRziQzE5WM1RJFvU3BvVjAFpNBZYvpy4JJa5WHjut9xbDzoxKFxQH5htVUqd54wMyjFXE",
  "key22": "4xCakXbhMcjEPG1DPbgM7ADExzvoUoVpgVrmQVSDvvw8TWD1DDyZ7jqPWrmqryTasBE6gSsA2PySeXxrPePVcafJ",
  "key23": "K3odJKdH9cjvmp5NobnijfUae3MQmZio1LuLLyZmHeFx88rSPQ51nT6W5pMR1VL2xRtRg4NobmVm8vNntda6qvA",
  "key24": "57spgMyJN52tAodLsPfzoc9Q7cgBHZuA96jz7y9cqBZjs5S6XUd9b4GhU5sfawhN4ghWw1vrRggWF4YR9ihLUTji",
  "key25": "39k2bdYQDE7wmWwEXGXSLQiTsRJRzJDG61FHYNqNYNUj9Gi6qe5swgdjLpFhzQ2GnNLziGg7XVqVPMBLeBf5G4M2",
  "key26": "2nJZXbAzL36k8WCbN1Txid2733BqnV9tmDSNi9k5PdFtSF9M8JJiB7WBmEhjRgjyv2Syvx85D5mRMHDnnrzmwxKB",
  "key27": "Wd1q5Ge2ZMPjRuR2u3UXckwN8fkXSfqudw4KDnNhQP9oLd2ZxDKyL7uU1PemRTSk5nrrXgBr3kJW7UAiVq8e49J",
  "key28": "3A2rxfsmK2SvyPrYB1LQ3jJqW8BJcN3h2UEbS9QheEMVirirfgNiKHTi3sMdW3hNzAXdv17nDamHVsitsVMZWA8Q",
  "key29": "iXUK1j78QdusBbXNDyh87vhEr4VSyBtZctwz6QasXuWRNHhQM9dNbq2wANBmGZLuRSX9iKMj5WiAAFWRMueNJjc",
  "key30": "cf6BEAUnSeqNEqMsJaYt3HvTUuGsopX28ivv1fooEXfPCKASfZSCj8YPDnDyQPnC5z4e7rZwLQBwVu337a6rc2Q",
  "key31": "2Zn4gTr2GMYsX5qmGppQHH4TqUVeT5zZrvHodYheQJmhXRt4y8HWtXnPw6JtJMZpA1iqxvN3uXfm3PxeYX8dAYUy",
  "key32": "4aHSHLvVqYR6HC5jrsRo4Meve2QiWwPSPFkQU16e1aU2EeA57bJPJTtzxnYNrBJKmqPJCeFz1gfPb4JLr8uVptjy",
  "key33": "2gr6PFyhzXPQZN22dri4QABYUsoLVhoPJswut771cbxbr36dJqGAncsQcCQzW8awysRJu665ffJVrrEsJRiFxP2v",
  "key34": "2nSnHJLfwdq8Rx9x3EgMfuwmwdSnudoDtM6btJJaDXG3UgWMx2TDuBQiPv4mMDpkgExybj9hCnoNrH6enDXBptca",
  "key35": "rD8VvVRUkqgb4TmYzuyxwyHSMow7Cmqwk1uNvRYn8bJRBqhocpJeBtFnJpZ8HBNSZqFuy9zNqPrYpmxR5tY3pJq",
  "key36": "2mAhhVR2rgtVqTPCaeCsB2em8ojp8aMs8oKVp3Veyk6jhdFjSVkvLi1SDLStWzS6kDQ4nDLnfTE93uwiHdbuhbE1",
  "key37": "2p4uxrbgHVpYk2tDFh1opxQH8BgCmpdgjAmX6dS1TH8SdJkgGkpTYQoBSuTkCxktnmoZDJm7CW92Dc3KHnZSgVFi"
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
