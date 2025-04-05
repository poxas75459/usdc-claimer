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
    "5tLcLsK2Rj7owdw19UWawgo37mvQjNL5Zk6EK7688KbnU2BKQSh78S5U7ZcdVKCeeRqC1ez5dpS9fJ4kHJKVrqwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVbrrPP8nP28y7S21LWXr13CG4KSbpUsduKFwf4EHxYtXGCx5nnG4jxvgckfyAaptu12RiF6eogwfsiRQpmCf2r",
  "key1": "3wUbNFEpWKTRr632XugUummrgqZMDnz8ChxYxwkdgGnZ6doGWBTttPXSEsmq1CNXE8Uk4X9M1LKqXAw1e1RpGZRC",
  "key2": "65Hep85Bfhb2XTv1pUhmtzgZN7d9odZQ7SXEbycPDqqtCSFRLsGrjsxSfBcG8e9NnJvS72Q7aQMLLqDuZJKfAvtw",
  "key3": "4WvTx56RSGvBavZui3deEwusi1cteGW3eUyM7rY5ub7rCKtL27nympzoVrQCjZrvZmG1JnAiHEajAz7DhE7iEM2v",
  "key4": "mvcRqvMgNwQcauGeAi7FVHa8mgCT5NZREGUwMmTshHL3nHs3KSJjcgrR2MbE8RmVN9WwGYaXHze32KDhCBm34jA",
  "key5": "41Z57z42pD8bqT21eLEFNBsN4FXimaxaNMVVdkgaZ4vjFS1vkPQM16wiNQAP7nhPP2fkP2wahizM5m65gUprWCpj",
  "key6": "2w1URaBTFmp6KpuPKtcoRrKCsipGWSdHt8zFLViVeAD1VDNoefbC2KKE2V2mZdEeqWsg9WLhXVVmYAxLBcUYjUTj",
  "key7": "4MJtVsTyHAJkSUv1m12v68okX3idHtKtszkn7vmKcpAxYpphrFxPgnMps1rfDkS1aXC1pqMB6ynuMFDB5jZsQjK7",
  "key8": "3dGjesaQeMNHKsSR8zcngaMv5LpdnK3BT3ga4nAQfoJWGzPkSQCThxL4EqTRHWpzs1mst9yq6L45vnobQTzh5NEG",
  "key9": "4Tdh3bQQhUWsStQCeJaqjrSoUHXdXFb7buBRmDMeH7vjqBg8YFhsRE9LjTJbFGkYjGekZ25Dk6SMHdAuxNgHVupF",
  "key10": "EARxErLD1f6DkBg7qsTRxJA6fer1ZQVrsPJ9B4QMi4mn4Um8X2Ew6WrycsiRWcAtmnSaWHVZiSpdCXDcG1u7nRW",
  "key11": "5JNTmQ3TeeRQXgcqtyQR7KDmQKtGnzftLqSbjWUozFfi7u5ovcjxiB5hj1bM5qWRCTcg8CFdMDxRqKcFGoWS5e4M",
  "key12": "4z34uVXTXnYzU3qAeRkN6qMbnWGEprcgmaNEXqVpxL6nTw25kosrAq1zJNcVWy3nBGaqQadM1qQshFiZiGEwneua",
  "key13": "3ABH29AKhq38peLygyGFHL7gu44ry4ejHiJtbgDdHDG6Qr2XELYrEjNBzXjPZEG2PyP4GPKCiUtt5AMJt9LvB8i",
  "key14": "Q5ppaKRUSHx9M7NaC8v9c5nYizF4Jt6TjWa3JFcTHFwa9yoGBbhi3YmDFeF4opYNvmjeSwdTmmMM6j4feNusFBZ",
  "key15": "4hwNfxRWZSw6hkiv417cWLp6J3Eb414bQNPJ93rJ9AWL9sTepzLjgBpY6U3dCSPemnNTsH1ogqJST5byktdhpnRM",
  "key16": "4tRbRmdFaBGcoq3jaankvqGbAaRBdqBo8WRzevWEEJQ2tdLisJBry1bqzzReBhGcrGvtJWKojsZvmMqMdTCTiWg1",
  "key17": "3Y2C9RtAKSFkynFhnLMYcLUmzWmgXjA7q41jc8xT7NjBrNN96ypzsW2dcxzbRVJupr7a4yQmGxuZo4Lr5HjnVsJk",
  "key18": "27P8tsTcDBs8g22i12pauHRBYvnDd8Rk1Q6G5tLLErRCNhhzTHhaPfd8r4DFc8n8QouNwZtDzjv75PxjdxYVHynz",
  "key19": "2F7L2QTx4XSSQY7nQj187gYYeDrjReTGcL8DxsKEipF5cy31FayHKeQGM6h4HZshxuFMhz9NTYpNaxma92QCmuVQ",
  "key20": "413fmrZFPXrBGBui3oWVwSKHrCfVKQVxesrCETFpKtkFSXxcfmvA7CWXk6hgGbg7xR2H87Gkb3ohZjGd5QrFKKDd",
  "key21": "4eEZ6NSKnCRm1E1deWspupJrVq5WQ9ZnTf4zRUocek14govxKcNwujwNoKU76kswyRq98XmewVTCHbwG3UHRSvj6",
  "key22": "rkpdVeTuERCmWEGWjxuDbUeDwavgcvyX6Q9jZFXTZBJetKghqbN7XkFjoejwkUBYmEraK64L5czyHBsHz3aNRJJ",
  "key23": "RL9Jx7hGraMSkMEVTZLcqtMh7TL7PGB4w5t79Ko2VH63W5v97RnKDpG7huC9qgXUwom245SBcEiEeyD3BwfsUMP",
  "key24": "BuL3eEM84cX18QmQ5v2BgrCx9GnY2BaBsUw32B7PgHwCJByGwy6XuB6enf7zdWAzVFeXfiFgf5Bttu5aXFsh9z7",
  "key25": "tGnHhoanY1PykJjtSanEhpxxT1XjjoWuq3nQGPwVuazcTv9ZXy4Wm9C3invdvjKpL5EWFi9jrUDGGChTMhX3igP",
  "key26": "4Wh7Moph99AFgzSDyvTsAyfZdrvc7kZqjhT3MZCezvLo32Ln38SqBnwcHRL2nZM2pVVtTwHiPtW73LPyZNv1s8MK",
  "key27": "2ApkXh5fvb6yomhuCUiSmrz6U6roqbj58az8fuHebXJq7RZ3iMw8Uzgwta5nQwe3XfeAa4SL4xN1MfueyFKj2qcU"
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
