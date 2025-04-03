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
    "55i7gkU5NdLQWZ96XWKCjm7xiKhXhF8aSkLUN8RUZhNvSnnr7jtPRKHaLAbZSwGDdf77qqbY1kCU56a3oDUffzxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdcNWxauWPZNKvoLCyuQh1o9XEUUVnjrdoh3qr2nywUsWgcNMXo1F4xoBBjseZGsVzsd8ytMaeoQE8G6Gn6UD9x",
  "key1": "46tAcyACLE9sQ5cx8Q7ZohSRGfjFL2vRRSVeDzjNX9PvyPasmo8MFi967HP2CHRWuZZauAYp2dL6kwdyuyqxB8sy",
  "key2": "5HR5jrdKRAkN6KQyv32SZnaKMmVAo8TvP473NkdU2CSFKoeWmLyw36XLU6NS2vM5eRRnHYFFzPawKVJKsfpUZSaN",
  "key3": "2q3YmgefRpG2WtMsquDTd3m8QDJiXGjq8it1fww3RZ4MNe5kMm3quSAJoeDi97Sk9wbw8ykkshyJzojLnVMpn66f",
  "key4": "GeXd55tWiREiQ98aQiLN45qXNvAvbGUc2Nb1WwNLUwF6RBu5JMg15BNjkv5HnTr3F2AV6GSJWJxPCnA7BiUK2Ni",
  "key5": "4NL3UysxZY5YxUKqSo6PwxV1HbySbN3U2dMAdhZv1XyvfetGYKfjaz75m9h5yFDKTSvBck4fexD9hWBKziB9KinP",
  "key6": "5NpMwfRnCiYheZ9tZmCUmvw69uk2TrFdBchMzcMmyHcG6rUCiG7xDFNBG5XkELGRrUbtFVhdQPiEaqyAVKZankBK",
  "key7": "4BHfSaPbKXnCxvVkTEtogTqZnzV2ohCxwENfkRKv8d5XeJ5D23V31EcPASQ5jzXKkWYP4J35Z2PnKCVf7kWbX2n6",
  "key8": "dqsF5xf2zSc5nm565BnnJNgV8i8k17dZUJ7b8E6AJ9SczgcTGo7DyMxB3DNe1BSvvMztoQEZPCst3ugsXPehp9Z",
  "key9": "29YKGMHjGeHtUCcVo3KapY8htmvjCbzG39LzHBhqrXZi9NfKUW1wKCpUnAwotGGop39oNtfNJ62Z2XV9krjHVwC2",
  "key10": "qcWDfgoP1rjU5HcXQyTXv8NjWBT3aF18Bks6sFHVbHH8HpLD9pze3Zjp8S9krebyUAVMLoPJGBQt7WzxAyhCNGM",
  "key11": "31NBi2QpkZTob5XzYAnQRuFMUvFNHih6Mqv4pF7ZT6QZBARXtVaDargRxCDSrhFBouxBf9U23gn1uxnc8hjQepJ6",
  "key12": "2BQCWof5dgs5vQRBKp2eWhEqV5CFeDJYkfR5qT2reAFbwpw7pEJ8Z5ibKx61JRmabdTi1ce5YjVfrhVv4McbvabM",
  "key13": "3CHiUxy3uYcMuCUWCv4uYavvUE1HyHoVjmk9H6iWiSiRs3rmsXyhv6hHyc6FBTKPeMJeARkt1sqr7rkhPun2mouo",
  "key14": "5bFioTQa9D3ibNNcxvULCNrBUmq6qFbMPBrjVJBTxmAJLjb7vhcPB4wBVrRbh2rKVppeSZBp4csSMEg4RNaQHFem",
  "key15": "2QVyucWonmLt2yUCuF7S8KWCimZX6FMg3KaqAXePriSwzSteRZzsVtVjqiK3Hn7ASDLueh1CR6VcXEDqzxREd7rm",
  "key16": "bxJvWTsNn2Y3AtXSbfrLrEXe3oqqtDqnAvmCm9CRw4KJ1NbL9zizY7vqKDtvadpe8sVmHoLMcxq1t85YGQJczax",
  "key17": "bb8mBuJMSNV94bBz8LSwuH62LVeZs5oTDS289TL6UagLMuaMucVxfU2QmjBW2gMJN1A31S7Zmsmp1ipv33zYZiY",
  "key18": "4qfgWZmiBDepNc4fXSGTZimnDBKcePsX4GwmqNvS3GJCfT62hLkuBKRV6dhnxdEX8EqtjobEtbacp2dPUEwV313s",
  "key19": "5j9HSXyiQPnhnp6TENf4z3LVQ9cHLgfFxzCaMYEeXQjnjC4xcZg4N1pPYtq9CXGZA7jVgVy9LhMBkmBPo8oHywfi",
  "key20": "ukEFpxCQ2pboJwE7jAW1MfUbNHWGDucTKWKJWafPK9Yhz1UpkpHs8gC2A6AhFmdXaUacwkxhVa5SacXfPimQNhD",
  "key21": "5bWKgQ8Pg6cqFdGWCnrpSDRJ7An5juDSeM55retHbU9p9iGXBgmPAhhg6Ajx4fDcdRprfTCM67Yvc4YnyR6BGn3w",
  "key22": "3YY6HPqUgz88e6DyzXCK3N7AeEghNQRUwP3TDJ9zb1ZjBdMKu3dikRV5cXohHgJ65uHiqGzsNGWTDJULsqiEuSbv",
  "key23": "yjihL2bYPGV6hp7TT5vyfUkuSTrgWBt2tGi2aXBjFiTpVdaf2GhavoTKAZeDExV2tEM3FrQ3XB3c5hZdfFQabFT",
  "key24": "4SHLWZzXugvDB7S5rXFmbiy5cLnKWW2qGo792ds4n8NhmmLGXkZFWdZf6JXrAqU5douL3pukpvfrejmoTQJjtM6a",
  "key25": "2aHLET1d24ghh3JuGMWJysoQ3NC28UqKMKNYG7RB8ApEyoVaNGyS7ZVivDnv9eZBantLPgK4ZqmDjWsM2N7fj8gu",
  "key26": "orCTAXxJCiwg5KJR1Rs5YH5bfBm9cWkzuNvor8qt6E9XU3bFCVwYivTCvwDWYR1msJgsphpLEUkjMc11bDtmAeA",
  "key27": "4BcB2kSggSw9vHv9dn1i1sHven8hTnNvbszJrAJJREJwDhwTiqYyABDr9fwefSYLzGxs9GyHxPmuLvJYAicKVjqT",
  "key28": "2GacERW8zh6dRH6Dy4grvCE39g7tgTGGc16DoCyG5C41q15a8hRW1WVbnw1pRwtpxXuyYEQwBMQHTaF253idKeBR",
  "key29": "2DZtto1sGASE1FBARdWmrhK2GzxPy64phxKPmr8C3QRypWG5fgs3C9QQ9NsUouBjtGaKi962wbwzCD1qGb77dGfy",
  "key30": "2mky24vbPa9SsEiNZh2zwEYfaZg2QPwFf8LPdSPr9ohdgZhBXrMVNjj7YGvn4HqCT5TaZKewekzmsSBLnqWuFcU7",
  "key31": "i8ZuZc9t5hhsL1M7LM97QRMwRasLpPGttJkTb6n6yELt2TRKE6savKxP5uNbv6Bdf2WoYjiRm4zVi8CE1JeBGCL",
  "key32": "2Ws4GFsoJRNm4vG2wGtvGF8Y4hn2m4Bsa4X6PvmbuHB3Rb9t63Tb7Ld9LhcQyNoNFSskiusRZNNkuy5tYAGKCB3N",
  "key33": "4eZw5x2RRvrQZdrDad93tBDvzjdRZK6Y2weU9khHSZEKLDQCaXtr1nZka8xUuZSSz2Ybw56tPYU873iiEUEKmnA3",
  "key34": "3pqAb29JdDn8o9sEajYAqUDGyQtAPDWiAQsyHGA5iYP5mAy3PuND5ZQChwmTFUSwNhAf1K5UgZa4nSY8WcsQttPa",
  "key35": "AxcwKVAgcXuxDLXTBxZ6CkbQoMcgGbCkmdTVTPnrAjbRijYNnUrVNSURDvY6V8cqFpZhUhZ6erEvUM5ZsXpbQQL",
  "key36": "513VRNn7TnWVxi6K7nnd5a9FWDtRWj1zZAPhtuZcmy6x8bmarmiYNHBoaPrH6ptPM1tHtAGS82ceRUgZAx4y3Qig",
  "key37": "5BQfavWGaYEffiVAkeKvUu5iGXngMWEAYW9Cm8FrSisqMLEfwy7zLhKvAX5L1y9GHdyefPajkPeSER5aG5UaotiH"
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
