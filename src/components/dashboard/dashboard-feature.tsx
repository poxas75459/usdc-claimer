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
    "2Y5L6aSmM38vmMm1CEFTahonDnQy3nUJxWZe2rDiFC3ZoAjKMEvNN31cmKGoK5AmHS63SCM74NJmxwDveUPVcxko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DFZGevZ8WrvMpVp2V3fz3H8xV1vVbgFgbnbk56BrrH5tass5VdedNzQQC56HMrFszX8tMj55nFFaPMuPf325Fg",
  "key1": "5g3KZZnWe6F3cZMQCsH6EgbRXFno6ueGP1FZZUe8ZZhKmz7BWuWJix8bB9PrsJ1Gp3Lj9EbXnXvsSa75AaGv2V9Q",
  "key2": "62KJ3SsDEmBCHNFV3R9NKPgcHdFHEeUyPQyj2ygdpWGFmVUVLoqe69GH5Ygr7fNGxEdYt6pU3iChgUTgzwbh8kBR",
  "key3": "yTfqdqJT2jvvnHixkAHK68e71a2VTF3HoowgwXZfgBqtiDuyi83aTDqWuybECHaHt7AXSn4kGtRPLzucRCSNTm4",
  "key4": "4j5zcNhcoxvzp6Nvf3JpkoXgNkRqDi3SX4o6hQZzmbNYPBLvNozKuFuiTAS7rAQreeqzjRrs67eekLqmDaTxxFNg",
  "key5": "2vTiU8dMVRPg5RdtKm3eF3iraqh2QkHWUqMuAFugSVfM9sapMry22mjKZBbpmN4h2PTFneRtmVebJ6wmGKRtTzNr",
  "key6": "vB5iCnbtQhGM8FnVYtKRhyFpeAYVWky8RVizip3jjvji8GgpTw4Cd4ohg8ugW2xcGB9wrkb9GJTZ28P8KTu7cqn",
  "key7": "3tdZDyBtRJwexiGq6q7yaKSbGRzKyFejvVHdXFkBS2KvzvLQG25SL3Tk8aLbnkpJPdzXT5q92Hhx9vjXZHhKdy8w",
  "key8": "3xQK1AMGAnv2LuZ3K8GhAVHNht7swEHM9v8AosUFoSnycFuUFfSMFvKf9wJ5deTApiXuFewR8N7crDapiYDizDGD",
  "key9": "2sLbwGjmqLMBHNknVSoLaERc9F4jKnBbAykGggNLWkgeXYK8hmz64U5tLTwhetmoYvffStm62uVhCLPbpGvX6Y9V",
  "key10": "2qoyJ98w31RRoYLBGDNjvRikhQxPS1d5tXe9jL9RTHukp4WoXiRiVU3ZsrCGu9rmtoXbjm9MkiK7UX4zL8wGxbsn",
  "key11": "2e3tHNAzVG15D6eHgw7tnhGPWxDTM1vTXLyknq9hzF7seucJXngpZHzHSfKeq6CZwvQzEM9b8VYoQs9N53QYVBYv",
  "key12": "53Q3YLwycWcJnTZUGvtjEG69w6S49qSGcAHY6n5AesueGwhA8ZwrWa2tAhe4cj4MJR89htUe9k9N2fBNPgrzE1KQ",
  "key13": "2aaXDQQwmDtb7J7U3HH6tzCj6gaojU1qk4SXeKZ7VzNLSvrPzHmHnsJxD9D4jo36mzeJ7wnS642jKiXERCzsAa14",
  "key14": "5PKd7byU9oMiz6bcaXiJ9t7qWLwvCgxcFp7qBx4ZZKG3AWTqF9a3D3LX9ZWnXJDimdBSywdZyaaVKzkhbfiQBwdY",
  "key15": "5jRueMdNGd2i6MSQDwC4yFWqvqFKHKjXDFc7o2B14hXiqeTKKwgTS9R3drdY6idWC9K3tYH3jWjfAzmzHRgMc4jM",
  "key16": "4QVJb2p1Z7UiRXWDdJHvhWETYBz74ZFMzED4fvfA8Avxt1oSs7wzMgRWAnzCY9D7n3TanYkbkpStZq3gwNw947dP",
  "key17": "4nTequqFqkiFysxpiDiQwPZHVaVxLzvi522o8zoJnedvuSLMvyczkNdmA4D8Lpm4PgJ4uZdbBRuzng9VCC3rDwJE",
  "key18": "4CrwMFaDiTQAzKJ9UtowKE6jKWTDjMokk2ruxPesQiGvzbWUPQnRhF3n4YFcvbK1NnL2SQagUN5GyStszr7pgwFT",
  "key19": "44CEsTcoxGzppuVABQR84aMk6Yb4BGreRQMAYoejz92mJy9VNQ12zh86VmbuqxHgqiAhNHUA9oV7uPRm94wmRwXW",
  "key20": "3S8e1GwkshH8vKaTeU4seEMMc88GvoLYktp8tnajAcubDegubjfwx6gD3mJSoCtf8i8uYghgqiqLDi7MN8YGxsm",
  "key21": "Cbi2mzWGyVUUgPJBhKzE24BMoEgiZEkST5WAPyK8Zj3QqMNmcCgsxzhySYHSQa2aTP83dL1qFq4TRviTg9znZFL",
  "key22": "512uhszGWRoKe8BGosnFTYAgm1pZxAXW2e4xvRTQ5K1LHVTaeQz3L3YL2YtczqeFrH6vyfmGpWGtgppUyu1DzmWY",
  "key23": "2KvpyWQC4eu6baxJhExaUqJ7RQQFASWTN3WV3bZw8Wm8NUGVCSz4wbDnpcfuGFQsghXE5wBqVvxAD96c51zCoFw2",
  "key24": "2f7m9TJWcAhMW2omZLY1XaDher6sF1rdcspfWhVCAmhvDyiC3Tj5GDUeNxWgPQAtnxGA3F1ZnnCfmJVX7zjS2M4W",
  "key25": "rkB5s6dr6r3boP9aDJhc1SwUnHMWmcCaGHQ3nD8YEGp8aRwGehKgSTE4kyc5teMkByQcxNqqxjtY6tQ55D2HK4C",
  "key26": "vk4swaijjngjc3AiHsLEeWHgq7UuUhwfguKKyrKnqEY25rt9g1rEabMZ2GXSLqeht5PhLBmHLtzSEGVUbifJ9Du",
  "key27": "2Jr2V3md7mvbtd4DQifTz6foLt8MWeq1JzpXD9jTvwMfa4HUhxE4Vyigk6AGki1jkZeoPsz4sq48nZKHYJBYFaJZ",
  "key28": "npooxNbdDShKXnchBYkreVcXghXDere9xuhiYXE2miDXyrm5fKMnteB3tye4T18M1BbP9PPa4NTUqjMMuWj181n",
  "key29": "2wtk1TaZZLaFbxMxd8FJGQ1wJTgex8jXVLN9rgYR9c5oGbzac66zUjCKwUxgv3nCXFeysyAdafrDWfkRc831crdH",
  "key30": "5Cp5HHNRB33Ubeta9n9nPpwGYTZ5jPz9VhdffJcgy4WQxBBS3NipRoxcPavyA2zHtDpx2QXiZCoCDd3vmZ3hLQFZ",
  "key31": "4MUs5cJ3Ygc1c9VbxZX8dkQmWjjcYyYE7bHDGuCpeADBprYvdcYVfvrr6Z2oK4bWhZ4QRMgzDEYCHWD75odQZieW",
  "key32": "3wfSNKrQAwx7m6yrXXy6kVzZZZunRzAMVvspscCBddSiZd9e8zK4AiykmQCRyVzzQ4WK4bqPbhzXQfxzGeCksCx3",
  "key33": "2hYtSp8ZKvZ1EFTk5guqwLc3fZAtaxzUE7fsVfnJCredVMDwAqy9fg1Aj9mswEJPRQseE7VDDKATTNAmmP42PDik",
  "key34": "5mPMUmSVAAPsNzyHdqskdKMUGp4rpCyhAmgoGgRsoKq6dtrJxQr8WqjM4x2d4XShTAJSfMXa8978CtiyXcREgW4k",
  "key35": "5MC4DYhXp9puiv7WaLUhRPoCXC5bNgfG5Be2kCtWfBzpjCc757b3E6HKMC8ZsovJeXZjcvJzYv648tusxt7KQhoQ",
  "key36": "2qpVai9kt9anbPgzfkgiwJnAMAesWTe2DCfme3tSgU952KooE6n5Lo1jHo1PKkdyjZgaDCdiVztawGwhUtyd5Gsp",
  "key37": "45kFL66EKbwBmgbRGXq3aQZTts3Ry9n9YdeT5PUQtgvQ4djr4NQi2dPept5UdZWEoB4JfVFdpPy3GJ1mWoVYJZuv",
  "key38": "62GyZQNrqCCoRhT44hefXSA8ZDn5f1avK8Ho9D2bc9DHbJ4xm4qzWAnmKZRxMqnRBdHN8p6MLRxhUoyQFciqoinL",
  "key39": "gQax9zGkTiT1X6WvWux4sSppTPi6Fr1BsQSPdYU5a2WEQmFS4Ej596Wo96ynGhpJLz5AgD7M9yLsyYo9aeAYpXP",
  "key40": "2qfWy4T8gLbNJRy9dsBxGfpfdwCwXR9VFXdNwx1SvbAW3vhKEVk2eoLvwhipzJX1z22Y1R5dsWztEoyVTUfRAzp8",
  "key41": "2sHQFvXYhTEwB3wJ8MUyFMJcgcHkSuGfTVYKEFrcHApMuGeX16CqG6qpT4NEgEPzAfAfYJx45wX7AjeZYLubEztR",
  "key42": "3iV7Ude5LLqm9GqKcafLCwKaxYEvnZ5nVyGmMbi4yF69P5vrkg4ewWy9esE4ZivTErGJXRhaYkdjXvtjnbHgyqzm",
  "key43": "NEZ9Ep8f7yTMFqC2trrxaVQSt7k42oGXnWGFTiJggASTWiN8rvQGywkaetTKbMz5RjLPXi7kBtDKWumEBTxwwEP",
  "key44": "21YerMS7hyA2hfEtATGvUrLC1eLH2XjfsRm4HAD2vshcQmFwGNpXucdes2reMbu9DbxbiFQJqR2jLRhgKMugYnKc",
  "key45": "NUUGrSKjcVZvSSP7WXFm4f5nok2dDmpbzdeasYQnJghMgDWch7TEyrThA2eC9Qbc5hNoXgP99cVxNuprahgGoui",
  "key46": "3sbj5XGh8uKcuaDuyix2aLtXRoP2d7NC2N4UdrpWByraa5X9x69mXZipK2j8KfZFiAHAHhVyZuUxpXCxYXNh1N6y",
  "key47": "3twy78oU96R87qzGopQGZGo86qosojNWCTX6ACRNZb5nDLX7Nibvuc8vnvveXDvRbrFL1nwmQ7CF2TaRydKLBmkc",
  "key48": "3wkXf7jfBbXcEBJs5ePf1MGZWgS1hjGibVMeYX9JazZkdeSE75qhJH6m9BfC4D6wKYfqVJ8sRaVFbaCtoDXKpsD5"
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
