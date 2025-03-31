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
    "DfJSGoKCwEAxyceg41DMZ5psGTFaPj3Su7aGFcuKZwWpG58L5ZAUPeQiJwADCmVowRCzmK9vv3VCFwSEKk8PW2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHqWTcrYK6iXwRGbKhy3aJtAAkHRyajefFCaCmwXPpypZYxq4Dt3hH3XAhDYpv9sZdsaSxjDNkNht3aUigZvhbC",
  "key1": "6sTFf39FJ4ErvQ1bwVmWsShV8y9FbU8V8eKoNibVqSRxB6uapgyZMfKrFaYFEwTKhxDxBkqkbrKBivFThrh4cUd",
  "key2": "566wriQKDSqryE6z2ziG5PG3G1ux5p83c9hk3bNGxPP9g8waJoTqEnvQ7NMi5VDLMTTS3Z1o8EFYXf45231u746L",
  "key3": "2eDy5qRZmrUWbXiMsn4ZaAWAcBXQBzkkae8A3LqEHuNM1FFk9fiTxQ44KJkd4MD9QNbVBNTzJByAgwzxngqgLAdb",
  "key4": "5JfZYNWzvhBZZDTvNyMU5yVoaMgQCPnj1Rr3GgVRf62bJrnT6N3kNViUDGUhxmZJqYWP2FiBRtEMt6QHpFA3LGTJ",
  "key5": "3u9wDB7sKFgjWWMQ8KtJPFoDsh2jSXcEgiNjCLFkXURdjvpeaRHroT1HCHKBcjQGDuFSGsQfaPH3tchKGcCqD8YF",
  "key6": "3XMa7pqqopah4o3PDzNFvQSFM9L1XVfoLSRZumovPkJ4oFmdV9BEnxsF5R48Y1a6hnWsmr3KoT2H9UZatvvuU78S",
  "key7": "3dvzGy6oY791n4SYdqrX2MjKhbvKBJAmRZXJrfLqJ9G6Hvq5yR9SVcy8M1CGZfPWHKmFa5DY66ugE8FgPEDxs4PL",
  "key8": "4TGrk5nzbhAWUdk3zAnAPqyrUk2pKttm1M1w8zf5tYVysdxaFAxkoc3riwtQciZkxGTLyPfk5UxX3X4mHyiVQRbw",
  "key9": "48nJxrse3hR3pUHqp9XDssgcq4XM8pEn2puhQvBKkpKMups4cVkWFTZw3PUg5D3gkjBfiWQvNQv5sqAcZGJaYyJJ",
  "key10": "2kxkJgwVYJQ64VeAcUAYVdGo8iU3BQy2hdCr49k9PYbQqh1Z2Vxh6EYQnw48vz1dg3XhCiQGYTyyQZKND3XG5N8z",
  "key11": "2vGDUXoyijxT73Ejd4sUcsU6WeztFBTdE5PaGAVQkgMyyr1eHyXVJ5diDKumnR2i4cjaXWBxRxNDMnGnZ8askx4P",
  "key12": "2EGtEySWvnj5EbjKZA2QAPt4P1qhGL9YPxoi6kE9Jpwxq3ymi5DEEjwrHoTNueF38GA69SxZjWaJuikS5YPGDybG",
  "key13": "2UBdVqgr8TaJVnVHsqVAQR1N1WYBUHfb722uYXmn7Xznh9iNvtqLCBS6vSqtAmG7LLktEMDUAuKUfvMXCqfBxmfV",
  "key14": "3nfFTXQDQkfEA3SvgviYCNzXE12RGpwGC5cxEwW3TnCwg4aPttKqYanyTrCmtS8APMvuB4UKdEz3h6y188mtJWf7",
  "key15": "2jZUrDotyQCqJFNf6PSxpkXt8V94QxkXk23mXGfogLLNuZZj6nNaqvU11GpqLU8zRKqrgcdxfkPHee31sgfFfdZV",
  "key16": "haHmU5VGDK8umtzK2xGGK1cwGNrQj3XRPMKzQZjXCMTsLRK72dbYQNz7yKLqSH6PissLEQDzBgVTTa3nkyhJGLY",
  "key17": "2EjioLWh3HDpNoWXQLECsUtytPot4CXEZF8rnCoTp1L44DdkCtdvdbnvePHfQd3Jfw5iYGkeyphF9SCRkTH4rCfL",
  "key18": "4Yc8HUmQHWP4yNXbvDcrEmfJZ8fsQfiNLPAsfNwgeE3PdFJxsMzgxu7y52AgWXuHnX4hRVNG1rMSSG11jedTMnCK",
  "key19": "YGggkQR3bGoaN73AkGSMMptAQ8DLoFrvfhYetdJkSza42vzjSxCC3PGrioRVDJY8kxixXaWyq71VJxtsiQEeamc",
  "key20": "5CRpuES5x4gDL5ETvZXNyNsAUq641b95RnxSSq2jCAGRTu88xtsaC7T5fPJ81qmwDSSVa9E7C3afG6VUjva36XWW",
  "key21": "rPt32pKwM6noE6jx3TRMCttwuUu3FWb3CXjhFVTmLSXQnqenfLKgVkDq8cwoorzeT1bCi9BS733TzxXU7qDqUYJ",
  "key22": "5Y4TgvLLz8K9mVQrYxnhvg4qKmg7YecVZS5gHmcbrFuzdwuDt9UFWnxH864LCTe4Y7LMP9mYfgREvAmCz7bJbkrF",
  "key23": "5TL8CrBhXXLJNdZp1G2ed88VCNh4q5ypYnb8Tz1Xu8XsUdAgZ8S4knNSSbacK7rfz1Nk2QBQMffkW9fqySTkoUJC",
  "key24": "3FvQeizm88mMZFrTwcDfSncK1iKYDLP9B2z8RBHzT35vU2mDUi8kADDsWCFagBh9rQeYwiQhnPT4CpxCHHZs1UkH",
  "key25": "6CW318AqZk9kxmbwYikRoe4Gj42qgsyeyZTzfQuYoZsefLhqZUgoK8hgHKhb2qRpdxRoZLanjfgg8nX7z7jy9Av",
  "key26": "5xXtzc4WyQ9r9asbYVJCbHLPCCue3g9XT37gnQJiNcXmpauFPMViRaFm7kMAmY15r5ffrgWBYYnzCWPwTVkQMghz",
  "key27": "5uX1T5ukqWmWRmVDSzuzF7gvQgJUyRTPwFdWHusNGWGm5AwWTScrYskESaWPQCidLBZMZ4Tau6CukBNFkcdHxEMG",
  "key28": "65yE9Jo7JPUugG8MuEniEZRXctQHaVvTipcP6CTCVFptGeoBXfCQgBpUvf3ths9whzV8xpw7TxC938d8myNcDSdA",
  "key29": "5hQgqW7a2mQVYWCdyaPYsoeV9EvxbSXq3KhPcPbLMYMfDmsBHpVyK63CV6eUk5j7pNzjD7U6Z4JG5T71XuA4VTEc",
  "key30": "4pXY2UXf95ryzNpSJPEa9MgYybjYJuiSbL4Q4oapiHPnMnWm3sVMBfp48uf2fPgHfEK8n4Q2x4cfoEj4GST8VrpS",
  "key31": "3LQBrbLMTperYKsp6HpPHjSx9DTKS6RxJPiTyQufk4VNoBp6QEdxcSWtukZycavKAmRXxmiN7G79PVHLViUS7skh",
  "key32": "or6zUXNzQ3HxsVPBGheq1ySszcMsHDAvPmYMebzmP7NecCNaeNyXSW7vbkcgKyaYv51yRRPxAFFZK1k7fJ9e5p5",
  "key33": "45JQEuGi4eGCW5aVUJv9LvhP6g2SLCrCAye4ofEiwnh2TTECUXYTiEQAq4Ud2cDkJDuK2LzaRuBjU11PVGkqs362",
  "key34": "5eX5PWvVwzA4aSgwPuFxN3YXko4xQMjC7v5RngNdsj3TZ1yLfnUZqNmdCVxCd4KKTwHnHnjXVqU2A7bahsh1w2ee",
  "key35": "oYC6ECH6PqDY5FASCShwybQMfbzGR1gbDkJJh3uUf7qiBssaQSoaRWnh9PcUfQXBF6gDfYZTzJQ5PrnbAC7XrmZ",
  "key36": "5tUzvwH1vw9EyDBWXu4XFtca4zX8s641bQtdYykv9LCzp9MZTbKqfmm68UCmXiFpjS6vvKtN9kwhrkdCQRT9PqNK",
  "key37": "2BaJqHh9Q1cm2tecVxFL1opSEbfeAoA3WRSRAvrodNzimpCPXRQexxEZKrBHQPVnr9V51hysfE2g91EANh5EyeeA",
  "key38": "2FRsfZkbVheGsExZkZgWwNFW53vuMQsF93gkVzqzgoyp1Lgp5Z6U14x5gGPT4w9zhAZohjkyyA6KitWFvr6d5YMT",
  "key39": "2wkJmuL3djjxTd71o7sbsu6be9v4398CNYpoQwgD7LqmatxFGg4bC5KueAjJgmz4tQPkZUo7JohERs1md4SAjtAH",
  "key40": "4mqTSqowogT29eUYHgmNZWJPhrm91V2Wbh5bXmBUCcku1WfMjAjx5SDBYAspuhihaM1sWJ84C6zay9TAbDUiZtMU",
  "key41": "3XHizs5qZhbVDmnMigEDcEuRBuGMkydH2VK9ekz7nQNukwfvHVLApwY1GzdCSuZ7ahtuj1KrkbnS4Ewv2RaJh5kT",
  "key42": "4VxAhDcL1aBkt2cqjdHW2DctZrTacKaJu9EqDuiay3pccR7QjKWy2iHLfKgS6Y4LzEtYDQxyD757wrR4eoPTFotb",
  "key43": "2FhRJXRjEhVTq17ziLkPgUFuvh1Xv8e5U1ZvibRouS3FxWQBA9gRpHf3XcX22auV2HekZ2jjM2ETdrp4tikQ4H13"
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
