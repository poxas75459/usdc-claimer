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
    "y3oHwrQMeGioEm4em6Wnhp7gPhTsBBJfAZj1tfPBUX3wBCKxV2q96rjxjyoWshSV5djZSdEwrfrfUzQyVSn4Kdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1VgXRxF8i13PZXi7XnZNdo1REiSMvsdDP2WWT6724gCEyeTEEZnQXmFyg9fdneaC78UoZnud37BAgEgGB7drEF",
  "key1": "35EeZ1JkREvMBbuaoHcuhJ3RSuk2SEWSyiBWGui9s1qBBsvzjPHknvMEJkZFu7aiexC9LTMDQXWbQjffunFtSerW",
  "key2": "4JyJihbJLFxx71a6QLQyHXgF1J7wwkHxvX5JoRKKnfxZ7Gnhu4mJua4LWsVe6Rzi3DDZnt7cQU9zdPrvz6VrwzFX",
  "key3": "wbCkuqpJ6hwwnwWx3fQttdzF5oJtk5sx17hNTnzkLAYKf6bq29zu8qWfNcAgoQQ6yonJdjE5nQcRExSUS3duVQu",
  "key4": "5M3gMhtVhhK8CyUgSnJj6PsM9oHJUiRDVAnrQJ1tiy5qLa1NcyWZ5yZc5NVVJ5DqkUqiuTZEkoMre7jTdjxiiasZ",
  "key5": "k8krcHU4nnwXeUgZKbsUdaEjnJeNLRwH6wK8EcSbkiahkaRwwk58cdPfrdXLmy1mWtq2s6TtHo4zvdJvX5AG4VD",
  "key6": "44PZK1qiSZKswUt1hiacK6kdjhSC624U9idk7sPtRvFhpwEd6zVQ7kuJ12cs2ZabfuxSQhRXxqUYkbzyPvMsZAYq",
  "key7": "5Zs1xDWoUSkVQ1TNpQTeAeXtS9yg4FhsU87oc1sbLKLU9WTxf4VFitiBhm52uBassLhmpvMRB2cboVxEYRqC6y4E",
  "key8": "3HwVFrJsf7JiKNjJEk6YKdniWkCAJsvqrGLV3j54pPYFuKP1P4Sz52tmEo6PaLE6hgMUTdqxQ9WyjjDMd37nzg3c",
  "key9": "3QqnB8Wbva5zyazL6ZMJMUegyxcB8NqSeH9Cp7tbKsdC17HdrP3ifW8s32MXhPgR6ifskbuCX3WXKBGLigYNjFTp",
  "key10": "4u6oKyq5rrXRUXqypJt4xoT1qf23PXQmPAsszC3GFWiSyNyvfmbRQwGR1sEYifkn9TiEEbZNN34tBuTShEYvnipJ",
  "key11": "yEkTZ3jcC78qJM3bn5vWxQWKtrSqHq5bMfXrBzKu6CXEm1YuCe1znKc9yW77AcE1Xpi3oeoaZHF1pdq32iVZaZ2",
  "key12": "3Vtrqy3MpM9ooBoKwGucSFqc2h2Ed6chyGAsogDQcU3uEoC2HQggyab6CavrZzp19q8sCctJebHSyA1xs4vGXCbq",
  "key13": "2k1QsNoX8Q6MYPvUq9QBLtysm9bWvp5en8bEVSdWUZUYjecui2tJ1yFT3eB6BdDMSBuAN6arj51HLWkQcC3B6y7t",
  "key14": "5rZUh1GbXa4iQTiw1eAeADCSZA5GxLjix5VJrqcrTUcDtBonozRFFQdVB5LBM5ukCkw7XtgGtuj4CeA29ziWMU6T",
  "key15": "4W1CxAvBChPS8yB7CK9CEiU3JSRYxyFZq28JDyci6dDSVaS7ahLiCeB2G85b7s1zWQfRn1PyUmx5XqJucXnsid1k",
  "key16": "2VdVMo5jegXmgMwWk4JSZS9ojkMBvdCWd4ev4Q8cVBTZctsq22jGJBkqx5kwtN8bpEzqLex9iWbhVE5iq3gd82qS",
  "key17": "5GWmULHeTk75GdGAbdHvMhajmhepH8yufiszeCz4TgNx4cJXP1GXttkdpuqbsd4SdGHdEKRXpwHQ7ggDquYDXWw",
  "key18": "7dWrh2t4xMBGinGUqa7uCRfq2tCBeiizx7Qk796kSd8jKkC3cvXt4ugLqfff6Dhbx9nM8pcgDPaDaPYAyGUb1Zh",
  "key19": "5EsxYWKJhM6FHUj3dvV89EhJeawbmo8P4K2JCFr5yqJAbwxyThBeBWGpPijYxd3X7HEcVRfdp3Nv8Rb4325jiJkJ",
  "key20": "vtniSvwYrhEZAztFcY1fsmtc2QGaNUNLZYNqWLRJrjkjEnEgeG2rXujUmRnpvCTVxNJ2WZK6BhYV8dNjEoXtYNo",
  "key21": "5tYeB5e2NrvUmsA7zDLGwQuoxsAZotXDbpJqNnP5yWbgpRw2cAWNCbqFRyQ6qkJpNNQbvUqXWouaxiTQreH7Uhi8",
  "key22": "3B1fjB59N5x7486M9Fzf7SCuEUBE3yZcTB12XAnSeMv8paVa6eEDd4nbUU7VR87AHPrgmpjDkbjbWcEHpAdfyWuK",
  "key23": "253dQGN8dhnoEUGMuXzfGyoKP6Yp5TGxfbzLRQxMQ98HWAxKwBSw4vEu3adS4mGN3EZ47nc99VM6Fi4oLC7JW5AM",
  "key24": "2zS6BhmvNK1sk3RSrNZcY7314nexMwSjSZWhXVA9rfgfE6dij91qBXPPSVP5RnGcB6cE1RzMN99e1ndQM2LfZmTE",
  "key25": "5H4xbYEjr9VTmsmWZBgxJx7CUzrdVxuhS9T85MtzsmMK8phwRmNMcg4kBtg6jt8qnre1iubNhSCNEZzuTiXWEW3k",
  "key26": "DNqnSsCtD7nSVo4qMbxhvgrbeYQZD639NLBnVNGHQNwnRFSMK4LczL8jnY6ubeT9FovG3qi9unt6ja2o2HtY173",
  "key27": "5YBua4FrznxZZpjkiDBG1P6bpyGoAV6kVB191VuVQmCfg1xTGSgeYERkHztVCpdYZj2of45RFRT2jMKx3izKR1qM",
  "key28": "29T7AxjjGMzmJs8S71v1UNViGDtcNPAj73JRW4xPQcwaKEH12EKW61eih878gw7zWuUyrWZaGjzLTLSC2NL1kEua"
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
