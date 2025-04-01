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
    "36BKko1PajTAL6wK4P8TiGBcLdRGkyNooSVSVM7fB2UY7c5Z3gXshuZSYNTaoAsRQkCvQxLxAfjYaDNyiBGq3q5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JZqtK8dpjVfvUgBkktfvgo2nrAh5Jdbj7c3Ecxhb6wuwrMrGNENSQjbVnSxzC5H9A78ocq9Xd1vijtp6hGYKR1h",
  "key1": "FsH7Xb16fBbdzCkkBHB5kAL6iD2Adb5LkkFt1u65PGMzsNdkzSVS37Y3UW8cNDXwN2KeB6BQcfHbPXPWSwi8YYt",
  "key2": "36zdgf1N7TWU9TphozEJqBUXSTsZtjQnJRQsPkh7BZWF4sxv38zTuE2REruV6oMpE9NKFtxkXp89MaFhNoKMrm7Y",
  "key3": "hoMs36sBC1xBk9KVABCssV6HfT4FETJxotr4RW1on3N4J18sf9MCnjDgFg4pYeewVdPDC6bha6a2iUad7f4QaZQ",
  "key4": "43aLTSAEMhvxC8Jz4k9cFkscYkFE741cdwM56tCEcqRy3KxErQmbfFLWP4Uskuw2hb5tee9N8ASen8USyQYkQw6V",
  "key5": "8iCQyEqWThuYJeiX5Vstv3Lt1f5YDi6c4bgpAjQHU268rAm75WPpZEDpgMVT5n4UMsC8KrH3zu26HNKnb37TjAR",
  "key6": "2bPifquq9TVu2R3r5qGvsHLhRQ6giQLEgw7aXn389fJzgVYmEDVdriUh98LXsYjczrvSpYrDdXkrJGNESCoBR571",
  "key7": "255y3vUQhg7Sq2RK5cLt9mJHAYXaD7eLrwG2w1wmZzKVUFqZD3EKY1hv2Qv6bgbfoJZsotvUf6si4kzt9cozEbkz",
  "key8": "3E2hs3Mmmy7PaFUmH1cqNDw9y4fcwWJNdDpLmAutB6xKxhUJbWK4Bup2kGP2dxiBqhZ9V4FBBewBwWZzTTbnkVzn",
  "key9": "4G9oV81FQ18odGiKaxgWbwKLra2obFvfP66FoB9frnsRHPKMgZTPgom7S2zDERcE9JpUdfQ57h4urKtXioerXzNi",
  "key10": "2gMzt39aLKgfZV1wzpVa7KyeMTZpbofY43Re3mKw44jiU2CxSTEWeH2CqHHyxndz31Ff45Msm34uMuvoftaMS2J6",
  "key11": "3BmKdrbjvjcnFXb1JBkKSYrSDtzcm7NPiugMrBMh5dTYTqCVQqEK91eqGCikVEh7C1mMcHMeJJHkX9jEpWBWa6LM",
  "key12": "2ymPT9F1AvVi7YznzRjtS74JcaCvkdDHbFiYdbczNvLgPtnmCdPFDCNH32wNQ6HxeBXawTccaPCQS6Af21dPEGA6",
  "key13": "DJVV6zc6nBFspzPj2H8P9JqAU4U3qXDzUzGgtxZ5sUKDZQcx7Sa667grXoNFA4V7MszpfpBUmknh27eWJkHRKir",
  "key14": "5BUJ7DptQQ2nFJE8MnLjvKHgBTfGrtoEHbgfxn9curjFY4FAfBPgesm1WHqxeGyeuvCq7KJEs6CJQi7jJLvKCUWs",
  "key15": "5eX2d7Pna1SCSusvaFQK5ghwwrsUWC89xag1RtpERHLHPK3RbM97yodLcnbaL9jKEdmj4iKJMuqqjNU4bv8czDii",
  "key16": "58qS38sMaMbKX6rubACJAb41d5bzrtXNCspDYXcsvjQh11yFfaGHav9iKieLLpWh2pejjKtKeVhuJJxTkNC8Uw1Y",
  "key17": "2P3xvrgeA48TJreDFLrqm81z2mfbYszt4vKXwzLsqc38RB7257YaoGKkE6QM4rixmoCEhiV1dgj6vnwJeAQBsZXq",
  "key18": "3HiDqMW11xta6EEKxBGKJ5R4Q8JWC1dU6TpBXfuMntxmZDnfa5xPx1dZrx7zujzQE6JLbPWFMac8xHtBYJAgKQQJ",
  "key19": "532NWpXTxXVscw7GkWyxuNf54o6Cqsi54Gq1gFzRccX2BThmxQGLzZq5HhELN5Y6CFYGauJRUzAvdt9FZpXjePcz",
  "key20": "5vwkZdRvYRb1GQ1PihqwywsA8kEnymwvDrKGvLucTpBXBAXkLcEacC6anzWCqioCBPU8XbL6Hz2vqH6Py3dvwg8h",
  "key21": "LpK1t2rtSTwzRnvEZiH34VTK5tsVYUpos3K192DVucf94govouyQR1nrBfs2TyN7cmHwWEcWP1yyyKqkigPAnvX",
  "key22": "3bopssbd5PpyfoBSKSzrifkyV2RGX4JHZ71iwGH2F4Frpda1xmDc7yDq4WNpw5YziF3LVJkUWvtz4ZRwb9BLXHbF",
  "key23": "boVRiKffje1VQt89fUDLokUMSqyTCtBEtySB1gVJU6zku2XyTA95E59YEufKhCkRNMHTi7vYydw6Dbk46GK7zBj",
  "key24": "43ewsStgS2xxoDygQ9hWnkntkXRXdvcW62tz6ZycpdbrF2XGknshLskRiXTaW25vBpg856hc4vdeGkG3dVo7CBLx",
  "key25": "4BkrvA8B9wXGo4rfy5nAxpVHPjdFHxu7w3o1WBapSgweUNi7YuQkrmdWH2FQYQkrL4fpwj5CtaP5dCLYxYh1gjQC",
  "key26": "3TeJLhVJ1AWgx1UZtgcE39KdiaAzMLQkDVhQzkYfk2eA9L1Y7uEGaKP5qVnVh6uxA6QWe5ZZSQsaFF2FQPJ23rt7",
  "key27": "4JwG48CaiPgvtNa5L5s85dn6tzWjUKK2sTZfrSzLoDbk7tWEemn2UZoJtrgLgBL8eAJE1ufUVWLNf5GQasKuYzS9",
  "key28": "5TFi364j3c9bz5Q5ZyU1GRXPvX4HFJTjTscHaJ25vpy5DCYjBLBfNZFvixk5bmg8h6XUqxQreWTpcFnxiYmXbdTs",
  "key29": "3mE7CGyFBXiv3f6FMEWZSVymHTkeC8yofxbshW82fD6zpsfDqwC2QNoZjTUi6g7vr6dFNXfLYn6cazRZZpywTj4K",
  "key30": "23rqyPt6MJDuUcbcCETYrxGpaRhB3A24FidxhrfwoJLACtZT9JLn85TJEXT1MLjK8Yh4eThsTDc2gwoVyin6ZaWU",
  "key31": "LK4MTPwFdr6xTNWbrsPw9oGmcrkcFqk8dM7U6YmaGLCLkpztJSYEsxNQMq4S3cpSk8GKsuoCmD93yKE2fZZretF",
  "key32": "4ukvqsJFi3ZSBpRUYiCMBorHagVptWDcDzZxhRHT7EbTdx8MxTLWg6wCkvKcbiaHHATWKYhw34AjASu9By6JKHmU",
  "key33": "612QWaj6najfaxS8AbH9t8Zcg86UH7fwgiq2vC75xQucB6ZEH2R372nkwqimBnMq2J3rXrB6goHnPsrLq8en1dpi",
  "key34": "3VP5UoEsFBXtmZ3mCDu9FqND5v93akDLtmvnvVgx7UhrLrikQEULeZCkS1ng5Ns61xiqqghUkE315PrFWg47WEVF",
  "key35": "4Xfn6PbvWHN1rHKDb9mpCdCiWhVcojLokKBRC4hr6aYR9pmWu3YVGTLAG1S3MDKcYLD4pGBMMgfdwYRxL1oA1Aqj",
  "key36": "4mnn2qvEZZ7Z9L9GZ75jLskbDowtJhdSa6ZwfMcRhvyEAYLNw4vnJeeU8gSAsE6STfJVE9aHkRdz3ZRPhvoVgoTs",
  "key37": "3PkvcyghRJaxnxvz8NHYbSE7VMH23qsb8ShYPnWSETvhEoYSXhHwbZHhmy42bMjkWPimc6WxTHSWEjzJE8DqatsZ",
  "key38": "vPpW6wPfYj93jgsBz7kVhi4GZVD4vXqZxfuHea6MkH7zWcbp5wUtxsco7i1XG4hWWDXSMaW94GF5ajWxBtVa2DF",
  "key39": "2HdfeFNxvuJVNTtybcBARBirCwfpevWYhFxMUXxvcwxyRhbEL8DVGP5i6Em3BAyMJz3miT9WbjEwTqP3gbEQ4yTj",
  "key40": "2rZWAo72hsanGCRrT35qJsH8dCaWUuJe6ETHfp1oSDfYHbVw1C6DJybRmpvDt7rW64mgCTiHaiAHUsxdRz18KBiK",
  "key41": "TPM8vpKJmxv5c82TXJDKPtwMPMDTe8yFPahzMa5oAtbHNWEubFG6mtzfWDN7SjeXG2QcSvr2TP91aUSSQfxT7nC",
  "key42": "2AmXjN8S4fpstvm5GqbrYZs1LrNx7NgvkRS5pfH5xBiVUkeU8UqMKBmbsvnsVCqxJpTiVEu4F9UyxxN1zuoBM2xU",
  "key43": "bGToyKfYAtHy1RVgALhHVRHDBykTG1fgPpN4VsdNe4Urdqxo2S92vbCvFJixDtE5u3rXysxEjr6n7gwCCgncNmY",
  "key44": "5k89EQJLgcoiu2AXE9PeW2nZ4apU1hWxNRoxUjH4DShg1U5qv5upCHy25gZVA9bs5rsUirZJuegMvgfR9VRohHqi",
  "key45": "4pE2LmxVb7xY7vTrASakX4LCMiFYBsZgrWbppSPLSFx6GD89CHYjpBpoFvSrfm1rB39qxB1txWjUEYXFnM6okouY",
  "key46": "5Y8mWDSWDcBWnVxpeeXwiFgVEGUEsvGsrthJD1RCr5bsH6pUrghS5rjQ2vzuYtm76NTR7chghkMMy8TYknRk1DsM",
  "key47": "54TW3dF6Y25vaUsvVxnzxhFHzWwDodqB7Z33iXYWnbZFLHXmHdeqq31yeDxVuAX6i2KWsqUiqdkgs8gFNbwLbQQe",
  "key48": "5MQ7ckiRpN9pdoib37BqaStn3Nb1Xao98zqB5db77UZwuDvSU5B53ccJM7EBdp9GsXo4RoGF17Ub5tw6UNwgPfd2",
  "key49": "32uMvJGmogQC27wYaUA9xRwrVRdtvUSja5dsNJ4TvVrft54YzrrsLdx5p433cvH6csA9LiCJQ2URSQ21yhY32qVA"
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
