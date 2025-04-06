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
    "4oWkJ1jJfvoWqFCAU4NaWrnWaApAKdWZdKQE73eeWZVVbJEFfvQcuyyHpYDiwv3R2GDgP5jN12CDq7ry9jYurBLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iz658iW18n2RbxhB6qyK3v3r6Rwvk8ugTxLCcraTU73s1wPMSWMktdiBQxh4ftMpHWz2BNzE9iFcAFfJb9GNbcH",
  "key1": "AgsBQS8X2wiNdERukrvvfw3aKVWpxwaHEV329J1RLvX6uSsHvDt1HB6zdD6YDRPhAt79aPhzgJMfSQ1a8u5GSX7",
  "key2": "2WJfB9qkGwqQWk4i1ToxgFu4zEfjQjZSE1cFVETS8kY38ite3KjzKniKLbj5ZCLW529LucEoHvB3cqLee6yXHzjd",
  "key3": "VX63hMRHJvxqDvMJgrUXrDH41bohqdBRPdZJXPKjMeoomNwi9mwVdb3SMb8MzkawzTdDiXrsMyag4TfBTevbCCy",
  "key4": "4cgVd5DZybHdzzSs16MKaUhZ666T7mVq5nmuNqYBX4sYXfrT7G6iv6ULeKZg7mGZ8pnsj8LHq8XhR9rJkMjCWYoP",
  "key5": "3YAcaqSRktTT9HN7oADZmqYqqaV5CXPesQaGPKFNteQ4tdFKyB5UGm7CBDB5SUkhuxcR87NPSH2ZCQzcVcLZekYx",
  "key6": "2nFJRNG9VJwFEjjzK4srXE98QNNrRNDQkYLZytUQVQHR6fdj25PQdHXghG1sm3ZaLk4grk5D8sHgtzXVhwnzzkFi",
  "key7": "2UeEm4LTppXbEarYLKJJTM5P3RzcpBTnrdKKLEtRMv4o77sN8X65NWg2DwdbcKSrM11uHCBwza54YeKnDk33mZLY",
  "key8": "5xSKjxtVU6XDuCECkqPWWG99zaqGuEcaYGKE3UGgHDAuKkbg1fosdaiBqTtc1USbDF3xdYihr4SPqggwUz9dtMk1",
  "key9": "27J6yRbQqonRukHm3VvfqVUF11didRwBEH4rvTPg9mYKyjGe5YNfdro8BvPHcigWmb8TC9famSywyrhz9CVeAP21",
  "key10": "yDkUJUN9Hj9CLMnFhLTWavpSZWNLzxkacGEfaDiNmspey589u4oKqKwsdzkpKLR9rZjg6ytUoahnX7zgbrKaAjt",
  "key11": "3cGyoYWpvyLJSGVcL4pVAmvV2MzvMNsCWYGdZi3TsouibPHcKR2EEkqtvuaBdArQZQmErxRQBG6axKV4GHFambYg",
  "key12": "3Ur4puEFJn5MB5Byc1f87dEQuaqWaEXGxSPKxksEHJ8wCVSJKbCuu3dPbm3deqm1U4qp6qjjwe6vhJyCL6nfxdMR",
  "key13": "5TEN8F32CKriAdzfa7EFA55RsaMk1kqLPmmYXzZV4HcksrLSpiwhHA3tk2nLBrXynb9JgcAXc5KReHkbopXykkte",
  "key14": "eAqixXGqkuLz1G2tvjUNVCbLP8TxPzvmUemDQRX2tEpe9ys3bJCi3X7dNisJAiuXbMnW5hmBPuMVrPmyqauQ6tA",
  "key15": "2tcJByWBZ4gFSfQTox78Q3P1cfR5KCnPEM4dQ64bA86teHbkuu6gib1EvPSyjDzgn3XkXeHGu7PpWi3oVNcKXdus",
  "key16": "3PbbKSGCR9D5eTCu1Hrft6XdcHXUT7N5j26sG9xZbbB9r9S35TZmhSpdECEGo1qKL49vShkZ7F4zsuALdscTh43x",
  "key17": "48bWgqa5aSzM6eyRDizGveYVuoVjrtuWWbQnPK9MEbMVqSZm1qzcXBP7xWDpGczQu8ufN5aitygep1jPDze8qc15",
  "key18": "353ym8HzLtxw6gAHt49NZvaZ9Ms4aYn37rYeDs8j1FAaAMFb5zc853JwzphwpFPnSrm8etkFE6i15wD5f5wmv6Gd",
  "key19": "3cUpgWdfRyd4ntJBdPkJdfzArZHfM6xJRJhGyBTn95iRQHsT9F6y8ko2kzVeNWHXRLj1xv7Q2ANbwKvai3q6GnFn",
  "key20": "4GaCxW9z54GnD1suhmzPp7bQxv9ChnL54aZEquNzXqJxaB9NEAuZnKJ3xnGV3qRZDRG5kXd8dHXuxGVRZXwsbXZd",
  "key21": "2rjDWxkb2xTPa9oKiqnp5TqL8SQDDbZtVpBLAFxtRKDwuZpgqYy7mhMa2cCrAhgQWjhKhBtwgweBkn63SPuWANx8",
  "key22": "427G4DhGxvqQYRpsEP6sGityNm6XDkZgn5Nsc7uPzC5U3E2cbuPasSqDuQd4mmPhfFUGMtL1YWvnostw954e5QBm",
  "key23": "4b1BmCnH7oo6c3k8ZsdQParSDyRZ9t5VHXgCmbGgtgwQYHcMz986uu7UbqmKWCGCkED2mcxrSvctGZTmPvdBKeuz",
  "key24": "5WcsdJUHoKF17aZMpkEKCDps4PZeriKzY6j65JK6MNXQCT7pYf4nofQycPrvVuyKkF3M89cZSxEzTWRu5he7EQA5",
  "key25": "3yng5kEQPKR8Ko7Kqsp3UQ8EGqL9NWz99wHKQ1c2f8SN68XoaHWSXkxz1YEyXsU4FSZHSc69vnhF1NADpJSzgegM",
  "key26": "3eh7ASdcuMWE3KwBqVw4BrwRhRmJAdyXsCE8JxC1HT21jYXxPTM4Y5QN4YAQQVPn1w3EdhNThD5TMhi1MFU38zGE",
  "key27": "3XDN9FqF7ZSgLgoj8Ee6KG3VvmWuiHKcHzZpsq5rVYve35X3SuPahQPhL5WF93yqxiJEDLLsD4mBAXZur4dX25VQ",
  "key28": "RkbmnmUjR97RhHjWXiupgyo59TMMcY19byGDi7PnnpYxzu1CYu2wSH5nUtjXrZXkPH4bX9wp44CoURxd1wWw4kg",
  "key29": "2r6JPyhYiDwirABYFu2Sn8AdjLuRB38WAVC1Zwk5uFN3o8isWKHK11cY6cfnVSQT1M2gDksiGAaLSctmHNNRjAzf",
  "key30": "5kYRpAByrvfNgsM2tTK98aj3dw5Nnx2LpnjXvJUfV8QbK1rFwCEvTegM4De2Y7rULXjjYbx1jZvx4P5FZise9eRj",
  "key31": "Ltmen2hDgCEWAd9XFPUEeunWsGuDx55TkWFJtYW1FbLh8g98jixKca66LLgN1kS8gqdEeoannSSNE4zXrCQyoRG",
  "key32": "4eKZ3x9ZrfXi9PyMinExacUn4PbJL5EN5hCkNPtHadK5nnAjzj13E7YsRGiaHKM4u1JZk3roFwMjP6SbQcstrM25",
  "key33": "3FqBGwsLXpwmP4Wr3CpdeMufa5jZFNMhjGTFfaGggDzLLB2qgDUPUmJ6EYC3knJfXuWERYvJ2Q6mQWdcQjLrCcS1",
  "key34": "49qLQ8huca6Q9DtTWcCAxY9aV5dsKqNnchCa95JQ9X1vAu27SYYmYgMDdJGrQXsJUFBFmQB9BkFHc12vGDnqHfg8",
  "key35": "2Hv7dpXGE9dijvYhbRgNNKLM1bhGBTqGPju3RPsrBcJHMavCsFjgRN9ekTDDJgEninXimGeRqZAVE6ztDp94Enoy",
  "key36": "23f6Rax5GWgPc7tyD32r61qBzFmCeM2nPwJponnfpGc9jjwuWgkKJWQ4shDknhz58ri2y5ieEMhxetSuf5fJZa8B",
  "key37": "5bebAQsoQ8CLikrHL4FMZhS2G4NkTB235hiqrWy2AetS7UsBTF4B9RYXFrfQocGu4NMZ9Qfbv9GKmoZy4VJyjarh",
  "key38": "5vUf4TrsAqiuHnrz7ZXtJkqGGGNeAGyweBP2C4SEtH6fZzx9fGm9R5S9kGttGubyMKmQn3dP9ZNL1DGcvEU6XJev",
  "key39": "3j5nZad1rttwtDNCdaU2hqmjP8SVy9SVaHondHJJ5ywWEUVLAvEb8FW929a7awWaQ3XscLJ2mAewmY16ucWKKTfh",
  "key40": "3rw9YgWsQei7syRZfmLS1pFu9Kxu4fhBGTAgdLhpqyS47vtz6aurCLwMMyRm6S3z8U2GUprHEzP1mbLK2KRfEJrf",
  "key41": "5uZ9DgK7bG2reEkvFTSbrQY78AkNuycxAEfxAV5yx7f548WYhj41aeL8RimuvZMXdabLjc8WeScgHfHz9u2XF6vg",
  "key42": "4jiUyjoxhx9h5vZazXnjFNyfjW5ARhfqUXX8sewoN3CoMA8sERcnFJDPBBotTc9QAfKD92jCGwh44oLVsSKJxvs8",
  "key43": "4PSWpbDdQebFk8mjnNZdhqrkm2ohNzAtmEnh4vMYAi8jxB1Y1zh3VmYvk9rDgt5nJRgwtdzro56cuVqAoKzgs1Rr",
  "key44": "2xvLV7uQsQJUWtNn5Y1iPRgUBbBRfxeHWJyzDnduEsnQ37KiiDZsrmd36abDLdfemCpWMcXhtjcE9SUxigxSzumz",
  "key45": "4AVXnRfBqMXMP2Pxb1KXwQeeDKs6DLFwFZVbbRj1Tc875hzpxBacKzBb9SQzn2QXD6TJ73JXbiTAP3NTtcYoPNa5"
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
