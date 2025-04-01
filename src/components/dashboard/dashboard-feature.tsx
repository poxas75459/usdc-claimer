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
    "xNQGEA84dxDsJ4uNt8by7CSkx4HGeTw7PWjzB74CKkccM3ZGxeef5V9PkFW6EW6wA7hGe3nrbbKZ558q9N2Nkfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K5XwQf8Kb6sEYm42c6PtktiQyqBKKFTw35ZPaJjtxmjSXZhVdbDcu73oS5AJzmEzhyCUrUVA1k4Da5qsDnK37gM",
  "key1": "4htUj9TXc2bkEpdHsvHaQK6DFhe1zYzgcLkuNfZDJke8Wv2gYeT4xukR7EuDCjVJwKk2Lswi3dZ8mppScwsomuVR",
  "key2": "5DzU3m9hvcmNWZs5uy2cwHNL9oykZcBWaUpDqD3pk6M7eC3CrfbtYwc3BYD7tHd7ThcRqgBnCDRbRuH2bYwCKCN7",
  "key3": "447Xii7iExovPSDL1BuFFn1zi98nXDThBQXjkAjkc6ajtbHymiVVYQoBRTY9jSaNpMsgayjzAw3yFVAUxcipZRgU",
  "key4": "4HVk1KP24XRZLxdoWqC5mU4Qo5VsrEmTf2eSs3RhhyCMkEtfh4KZ74yoUHKc5eXAqwTJUGaeEYmJW9dHTnPxH3JJ",
  "key5": "p7GDgjQdSXnVL2nqNVTNc7LG9tSRGkwfQV3gGG6zWLxPqmXjzw4eeKk6ER6ViLNAbxVpHHEaUY9Zkad8N6L7VRc",
  "key6": "4PvhQpQYfe8nz1pyRomBA5UFmN4kok3SsGbsra6swhSA4EQWuks6XkUAajMXNEfxw4YKXMbxuEzsbeBZRvTbGz7a",
  "key7": "3UhDYHUouaQSUFzwvH6UQky62tH4EXjxGmwpnQiGVGjQc8utqSYQArHAv4WQM5RzMZz45ztg9auEy8hq1oLum1vE",
  "key8": "3YjNb9jPMZYzcjtVDWuA8Dpzgo63Q818QZnpdXerBoLwZPTYDkKeSCfzXbywmRE7wDQ89v3rNrCu2UEmHa5x1BfC",
  "key9": "C2TCJcRUkC1CkYZepuzgiPTPiPE54i48CsTwuXqYVwVgizUtUpNSsDKnuUJKd6hb3ou8dTqzSFgKVrFX95ErqQ6",
  "key10": "SvVsggVrKd6C9UkWfEzJP1ZBswHaLC2XvbdgghQqR7LTXJyKTBqDxEN4RYvff7PqeTrYKt1tBtknp3YGMWBSuWD",
  "key11": "3797Um2KviTfb9CsDHTumXzMNgtD6UoH4NrYCUaoKUYRziGc1HqkabLV9LQNoNVJQ2F38nrtbiwxxVVS9LWb8UKp",
  "key12": "4GPYzDuEcbL5UwnNoP1g8dZifsLt8trj2mhZF1dvdtYeH4UB6yqPmnbGbGqEHvLi52zLjVEDUtvjnq5w3sLQWhNR",
  "key13": "551ayYZ827526PcqSAZ34oXnyGFcPZvtZ1nxU7gm1i9DJQtSi1rcg27yknL8skRTyf7qEy5v2nhXRCaxpYUy2uVS",
  "key14": "CCNgRHqbgJxngr3MtoC9cUd9jY66GSzdQhLQDJS83tKFmwcq2SdeV853owViZeS9ueETqdTQeBdFtQSA8vXjY4E",
  "key15": "4HzeXqdrSboRAS8VgsZU9g7HEQpdHfGG9c3kb82ipcP6J21SB8VRhkmQhzP3za7aLT3AAy4HVq1qbmtNpZ6w7Jgg",
  "key16": "4SGXdy7FRsBYNKTZPoX4RseZ2ind1KrikKDPiCqmkng6CLDaTSwYtdHXva3vERoAXnbLj4HXX2bTV5fCyemzhtrc",
  "key17": "414tECqeW1rfCWTwjU8HrTJSDwHxwAPe3iuT5tZSDmewqEvq7rphoiiaBHr22ex4qjuT4pxUKCvhC9a7gjPv3DNC",
  "key18": "GgCT7S53J8KUcVas8EiCAGuKc33kbB3gBrTLxWT8AUebfy1wdAnDsXz4XfpstX8fNunR6FV4zgk9iW6Jv3zt2br",
  "key19": "3Yxi4R4RD4EnPMtu9dQzswkErzn6sx1TMZvW2ffTMn7qyPfQQnL7564uvDMsHzFcRtjoy4iRmSUEvyAfv9AMJNPz",
  "key20": "47YAJPp53Tqxr2HTprdKuM6sQwMnv7qXGuVKonJK39hJjuaYCn8aL19w2FYbvr9yksBc2jUy3ne2LyYTtfk3fcBd",
  "key21": "5GgydZmGXGLRrui6xpf3Y6scfykQVfK61x4cWRUJ1MixYEKBP5sUcCiV4tVhETUU4Rk8aN4xSczAHm82yg6YREe9",
  "key22": "HfnpF7d4BJhBLJrDq8mdDE2V1UYZF9osWd6JaEYU2pjuGcioEZAGYJddtf7jw75DPM9Dz43FBQASsrey3GA9Aco",
  "key23": "5zRRVJhRVPKeyV8cyiX2pT4FpfqeptpoceNUmNQPaFSpJ9Gk3jMLR5aSDidqSyBvU1UVd6VdqSC3nJFwhGD9Tp7E",
  "key24": "2gmbn7o4fxZwFThHnf6UG8YFhacoPeaUDR61rXK1EYHmRA6P2HBVcjwG5Zdmi6gD62LyJomSgosZFRskdSGDrhGv"
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
