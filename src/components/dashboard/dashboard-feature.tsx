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
    "3GBzUhgor4Bxct2JbceYa7XMKNAXNtwwQ3eoRNzYx5yeky7TZGV6Xhv7kTYKmjBZusBtestvGpH92AJhLqsfb5n4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swBhk57HmbndMkywSLd8Ha6pDawiYDjGBDbUjHVH81yA4u3cdM1PdPDcfj2UNJN5wzZfKCdansunYeGjG2GiCw2",
  "key1": "54k3B8pZztqbihpB3GegfJVpY81VqPfvbBnfpGkfA78WHkteUnQAM8REoGRn9LVhp5BvvvjBT5vVcEWVmKtM8TTR",
  "key2": "46jacDvs2T8uP79GbSuCh3gH15ZfF5YwqgneyHwD6RMvUjg8yk7Sop2p71nDf7ojyh1jN5BWaWSrw9GbCahS7sPG",
  "key3": "2gFG1D3iawq3pxLppUrnsqkFzNfRvt8AucnyZ9pn3QQ3ZZm5VMcTK56eVHCay9q877yuVfy1r2wLgx3e9x7vd1VM",
  "key4": "3XPQuYawnP8uoCxcxjeB3LkwyL4ohXHvAnfTxMxuH3gGDsDzMxZkgk5GXE83V6xqMbD8yXVCENsuWHtHafuDXyMi",
  "key5": "3q2eHHEHa12YYUD1UkLQZrCFDSnuA7fQwdKWA6tRBLD54qKkB6JbGmZoSD4LfQcCvepSKGnLuHPZXh9T9mBZRUxT",
  "key6": "4GLjTekX7t5tM5VbLtdfh6RThsijXdS52kpYMoEze15shTXN2jzLpBqhqqoN2ioqLYRPKtsZUHdjNjpFfvD6orvM",
  "key7": "2h52o3pusnMjtBmmkK874YitCmgFesybxpJT84aAW9pfNGUuuFKzn2g8evwdcnbyFLk1zVazgBEKFtKt2MG2vXLt",
  "key8": "4ZcVBADrq5ZcGq5vUo4rigUhw9VxKKZVN3dN1mkmmxkFuwLwjAH6W6bfiUVwnTNYtpNZGBncihVurHA56YKAoRhQ",
  "key9": "4mLN6Lhh6QNfHWppA4WB6CryHRtrXK7Qs6fAcqXnHBA39UvTrfP1Myfqkoa43mf4AVeanGpeGcion1DYsAMMva7y",
  "key10": "2zLSkVkdDZFW8vLEd1iN1wZbPoCoW6rGZXjYSyC9SbcjYL665gq1yUHhXDKWcePyr2KV1ZKdygBvUGw4ALsa6aff",
  "key11": "CYDxCXK54LELaYWh68b4WtpvsL9fjDqtgRQMRmyhEF5rfgBh8ZNVTrv8frJvGWLUc4SGxX3S93kasAbXJTc8GkZ",
  "key12": "4TrknTJEbrbxa4u8aFFZzmUthpVQDzpsNFha95VAqrqgUCDWj8yfjBbuFc1ZTFKbj6bK19EnBm9ZzLpqsvyn2qrS",
  "key13": "5rRvPBeCoTB8nRDyzVKkrFgbKpnH1waFCEYr8zNcERMUFc9KkLNs56GBMtF4uLm3ZGcT7PnxJMc6fsFc2jtuASaa",
  "key14": "gkvKP3Pic4XH9GfSM9P4Zj9H7wjY3dxkFD6yN1Cm7YQojH6qunUAGbRDW4ZPkMPe1KXZoNz5mZjggSwkZw9i6Eh",
  "key15": "U7z1ZjpeUycsBtTSrLjWAgiUF9QsqBQecetbu3XrMf43NRTkrNKK8uPe5xfNbfkvnfKHmTjytPa59Mi8jFpQCuo",
  "key16": "5LNbSTG9jvaKumfctKQB9ASk3QrS84gq2mfUjxFcoQxNendBPW4Q56F5ATDEaLcjy77ThAYX1AhbE9JJRKoH3wG5",
  "key17": "4sKPCWhL669GmwHfv2FU84mzvB1qmDAvTPuAV6zND6j9Ysw5EhfsknXMmvxCizGZFRhsG5MZDspvzhCxK16iihWS",
  "key18": "25oMNk5W89ho1b9WSgg6qmQ5qgBPGeKZ7kwnjxSWrZsmNxCWpe46KAwao4kADpsfoctTy1ivvg1625A7g2iM3GuX",
  "key19": "3VRakzim5CX6xNTiYogeCmZCHtErg92yCVBAai3LtzGNoKRZYsZdZdjWEZS78iRhDjLZj1RWTB1USoAfUFLz8iur",
  "key20": "3ppWpWFQeJeEZiT9muFp3a1MZLuDDM3vwjDi4uivwfwtdyf8y5hQ9oE7XSToZNWC5XWHrc9QxrkU9jZi2SqzKK7y",
  "key21": "56B8VuANpt6DKu5rwyqY29hmYztw4J3HhJ8cXtCm89HtMYTadCZrHvckNRarCkzaxyPhRxKgJQG7SQP41BVWjvxZ",
  "key22": "5gPXYB3QcavyxM9FNPmrogiaikBbeMoWucr4enmPfn1BjNd7fLfXvSnnjq8CNgNbrFyzd6pn2kjJc7PgZ6MMyu8q",
  "key23": "2ScVjiJKMMs83gwMcPDW3Ve1E2sw1LLBba6Nja2iX4saWUpYWUN2AryE54wpFW31pDr2C9EeHaYJ4u7uSzKSZWCn",
  "key24": "5qYjCvyfe9jp9tR4fs7YMbmi4MUQAWmeizbYeLt4D11bpewWJX1nZzP4oHV9vC2T1GjjqMH9R4pa1PcpC4nic4is",
  "key25": "37A35qZuEowDX12UxRNebHgGCZzgDNNTGHVPyZM12yoWDX2MqDiPW2BF6ZqNm2J8JxyTTbVieKFtyvV22b8qjRn1",
  "key26": "4GvSqsXWW4ZHgqVRKGXPuiCc42oND9ZGTkxe1Ztf4HqxEEoR6WiYnkuo7pjeaem2i1xfBA7jXiN2bhzcpAfqGaPz",
  "key27": "3HMSVBE9bJB6hTpcRnuArYdvnAbpWCgKakkSLTmx9tN6mK1yn93KGe5nTZyrkskkNCNK9omVD7F42fNpiFMkcaaZ",
  "key28": "2pa6neJ85mtgBsob9WyByJjqXgKQTMyqpLuZ5fpR6QaazYyXpXw6RLRLTsGvkKiqzK2RcHi8yLmBqM3chP8AnLvb",
  "key29": "5YR9poUayjL5VgQREYjYxMfnZ5PVYWe5mfaMtHmosuTwbYEniidd32m2iyRkjhtvvuqUbd9Gstq49zHNJurUGuy",
  "key30": "3DWdzkvMN9TC6WEze2gem8enna8eJuJYj8oWXFQMAAnmCLr8ERZUpG6avFucWoyYyS76jZK2gRnD9QKoZwqiLWgB",
  "key31": "VwcnnXXqkqUaq2Tow554dkdGrRhaQjzZee7Saj9jkHS9n9JzNXDx9Ei5njFiSDDutHKBccZL7ou6M6NDaVcebfB",
  "key32": "2QkXCqPEZDFWFRY3MkNXCiHTwKthszX9cmdRyiTnA34acXTVSF9WXfaULhyWYeBguKa3qWkucT5yx5KQJLjDpUSQ",
  "key33": "5hQ6LtLfFvKCkvWGu7MeY6XXXfo7rzi9aoxkWLcWSj7ADPtSmnv4b95PTM2jQngK7a9dM6kXZJzPPp7tPMSNQFhU",
  "key34": "3Q6dfKp8jd2cVu4c4Hy8wuv3aGhRdm2E5wgNHboWZ8624bdWFK7nbgD2Y2QdHUZ7rPG2Ab3LxarXhX7mJQp5vTEq",
  "key35": "3Gi3xyMcC1c91CvMQP2gnA3ojWs9vqcBeqE7XXwNWRqfdXd3DA5bxdJDLA7kkyNrKji5XWZD9Tc9St9fCPoP9Nsx",
  "key36": "4oBWX8ave32XMPofFkW3WARfzWbmqcoZjURWk4gTaFvFQbexaEeGEHy6ideVq7pFzbZyPK67TU4XtBJLeU3zqkp",
  "key37": "2rDbotNDXG8gByJ5bAx9WVwMQPQKfz5Y5V5PAeH55wYLjmjLvRkE6sB5UMsD7sicPg8y6TkLtE1ahAFGRBudJSh6"
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
