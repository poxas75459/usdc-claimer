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
    "4cZ1xFMK2TXR28gvwmBg7FPV3EboGpn1KGCLZUz67GNinMcMiN9bvmoQuxTNybPEMW8ZmEH9Tq9s33JJAaJaV1Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMWMV2TqzhjNXDSpLnoNY7uDwL9UXPLBDoui76W8ZSDcgKw2XNymrzJhXu7GcxvVBznyYtRtRELP4Tb7Bpbkd5H",
  "key1": "3pkTehRrj4LbC7NtcPgRmmyQPcBDWdsSqXSndcdVdeaBwqxFxnx3DPDNU63gFL6yLN4WqtkU8MDDJmbpd2drJMgw",
  "key2": "3oPENdxDgtjz4HRZ6ZqvaTrq6BiN1t2tdhR6rwKMQYgzcbVfZqqd8yGAmevASWsgdo7na9JAX3bsjbEiq1AMNcZy",
  "key3": "2z3ViXUcFnrbjU4Wu9aSsP9Df5q4a4rr32EC6YQiN7QLXcN54AZ5n8hLzmWQS5XTUvMzTsi57qmQFF7zGRCbYKk4",
  "key4": "4XwX8bSsAYS6fMxgghdrSUvaz1qroP9D3HyRbFRzW94vBiq4jrh8MUVFwAJcdtdBKEGvL2z95A8vWHhEQbfbEqdA",
  "key5": "39UtVtWq1skW9S9QNpY22CJ6TxS1zCzsDDBvwn46gVnhCzqXMDAFyyEMXyh79rJb7ynDmqcNKD1Z4HbbruQe1gYY",
  "key6": "5wQizMZQ4EpTFWYw7AUFPUBMZdH3VXPJX1QcbbJ3GAiHMd3SPs1rc2cmdHaFubn8F8kfokCCnTPcXAgg7xGPh4UT",
  "key7": "wLEqw5Dj4capxunhFwZN1AmmGGV4BPvbfDQPMwZnPzRcHt6ehNRYqbQE8VVkUkwCbhBzU25EhW79zo6bV3YfCyW",
  "key8": "4szuvwnbnKigQ8QGD96q6n3C1rzNq93xaTmrUZPKdPVnJxFUP2FvLMVSHhLm46orSpX2Uq79oJkBmLgFktuXUB35",
  "key9": "3CCZDUVTKvLEZetuLRvnHvpnJueH2redtSsssoMtv7p7iZC1jFktv7hW7vzn8ZgqNyqkyBxobq3mY4gxVfmWnRfP",
  "key10": "2ieVMsQE8GnZwQHzF9UdqLU1qPgArH9Ep7Qi3RqeMdSmhQMSqzXA6xqG8ULtNJQFxPraUbyMsRT79pBYjxwMrD8S",
  "key11": "2DRKrMYKcpA5PrNdaN2BG2wcnbmbF7GbaoeremUaR6KP179wmRELfLMjMLqV6xftYKJUfrTjKaPj3fxDnWp5P28Y",
  "key12": "4NBzJYaTBmqkjbBhE3HC8RT1psjwwqykFkY68jyeb37aoQSsvCAJTANZX1Qpbx3gHT9TZUXvBxQL4eQtHvsAkNti",
  "key13": "5YAT1TKeMEHBdBSyF5mbxTXe7WoYPvjP8GhrNHiaHC8agyv1SGyS1wcnNWWM8hwPF4HALxpEVk6z4gSsDrbo4xjd",
  "key14": "5B3yoeQgYfoaiTB6wk51RxiFCpDE8c6bFokLXgF8YM3majLhbz17Kv7HBGqh6MrtG6DNg4CsaD7AbLTQjXvoa8bu",
  "key15": "42WakhLrE5KpSataZZuoUu7H9qEnpLh4gH3wUm9MuA2GYL9UgCqwRL5m4W59WkFb9Lh4NFLDYc8bUZpzMevHFfoE",
  "key16": "2v2NzvDpY8BWadqZBq7CViANaNXMCSiz9HmdmnbQjViS6AtuiBb6QTdrE4CBQRiB9krdevJvSK1hbxanykxSnrt",
  "key17": "44Nnx3YipNYkeAxC2D9fxEs3fMN2eCtp4eg5vUSPfZYPDaLuDCKSaNpmRF4eSDhp2equcZbpVntQeppsVLPVfnem",
  "key18": "4P3mKyJx13pRQxGmBkDZZTnr6pRKR6EQkEcVcRRZpo19gQjS7mGmXaRbsfbArLidKkkyvG5tk7SX5d87UUqKwE3E",
  "key19": "5wCtSC5VTJuHxD5Z3rAFv4ueinWebWF2GggRoRzd8i2BQmpdnzsikj9uEyDmcX1Nz2TET7gHopvp4ZssAPphrz2E",
  "key20": "57gVMcY6vC435XvQaj6JhUhg968EryUKN3cD8BbvGoW6F2Xe9e3nrdwrMscXhfRMxAdzmowtuJtTyFuXtaX44gTL",
  "key21": "4c5bySRXVnTtVmXbrSRU8WkFmd99fWBZwEnaE8RNPLZ93osoBfJrxuDnntUrQzNruBVjmY7E5WqDUt1axHCVg9T3",
  "key22": "5tQbXM4S8yvrwuAv2SdSoR4aK9dwo1smxYxXNu9wSBU5XzUZQ7oUjMPpw2pKxgse6RFgZwaZVjwc8sbXtZWQPg5Z",
  "key23": "VHBah9rrV3v5xh3xXxuAV6PSrnU7f6SSvJejp3SxCHd3NQxSGyQaB8S4MhRYxEagAVQxWAoLuiVFpGm7Qy6foau",
  "key24": "2nAqnU5WFD8mh4Ehv7zELTnCpLySbXUvAPGGqXRwqd4cAKfKPSB2gAr6DZegnJQWaEjhaxAQZ9PA6BVRMyAqVpwp",
  "key25": "sK9yE3qdywghvu3zYUCx8yD5DZX2vVE4uQGWbPugtQBTzGCTRWdgDZzYWAXXKHYXQgJjTi7EP46BQuYUxpR4rzg",
  "key26": "53ccgK62sv3tgg4q4Hw5ym48yH7ntZyW5VYPduDFbqjLcXjRRdBwpkS14fjkQenLkYyeWyNHqE4hQHeAbsgN9tcw",
  "key27": "2wdKNq8eCaNpfUNpnKpPgmVUaD7gGPRL3dYTwii3oaJpMXUyfPRYSx681b5mfurxpwQZkuYyYJhFjk125jXnLqHJ",
  "key28": "jYJmseMf4E7Vg6Ha9okUN81CEQgA8o5yJxScnkvscLgCgcyeDkYxKRBc1Fjk2qnfvSHSmkP7njFjsNgoBj1pBym",
  "key29": "55LnWYpisoNF3QeBjmHwKPq9HV79cxcY6PetczHpCnm8oT2NkfUqLESvBeCSwvD8TjYQXZfN9wXTboZ4pejfgCXx",
  "key30": "64SqfKSVL7dRA2JTT8QKiMYq7PRidsuyxBVVSBt86rKADM1PSnd3wK5oCL4xoCwq75MVwnKUsNBa8UdkZApZFPxc"
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
