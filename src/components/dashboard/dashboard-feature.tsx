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
    "4MELAFZYkDmKpaN4QD2qjRVTqgW85pHvs4mbt5Zy7mxbupHSEC4odgM9ySYyrBGhkdnpvn7yMAEL1pw2CGywcqBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hsxSZL7gWwsmV73u1tChFGzW8fpFiRJ6jFJtkcQBssUDuoT8c2JwTr5BWchLD6SCMyuxx8arpjoxJhfmVRLocrZ",
  "key1": "5F4sF689tBPhyC4KzWT4ai7wf8jmNbtVKUqc7sEt8f4HRiE7XqwSg9tjjdSRJ1qN9bfRiU9tZTM3Kez6Mghuu5kh",
  "key2": "4Z8CqZWVxLScDzwwWRDxXpkpN42GF4cqGVTBKeb7KqH96YDF1SpyCCBtinuf6oAYwjHScTKjSoXsQ7nKqGWLoAuA",
  "key3": "4WjYgXSMpv1RvGYeMdyRtw8xKVg2raUC9wQGgvH6TFMEaKbpsgYVseEMo1ginVhknJr8dRFXuLctgePbSQ7gaRAf",
  "key4": "42xmtH1LqHKkSAyVcS2CZapeWRJnW28oqYpiNbwCN9e17gSzsrEfvnU1jJZ2k1AJghNkvkGEa8qLDbfSUycuhoPo",
  "key5": "5UuQ5ptUh47UMK856gGfgYgAawCBZkNEK1kPEfDojtAwH8jzyYPK3o254M5XBFd67h3eaZ6t48ad5qEyFrQCbgTy",
  "key6": "4PZAVajfoZDv4geXPqTEnEWUKokyzXjvLKsvaSYQhkWT4HuwmH1bP84J266Ffqug2Phdw8zKDgGjRYbSqhyj2YtG",
  "key7": "3RMedn9ojkb8e4JAfgx14AhzpJThpk4phDqYoecKJzYsK63fuzK1jBt1bHhedJxM9Fe3hcKDQBKFqhiE46Eecr57",
  "key8": "5JquqpVPY1TNhaZJnpq8mwAdHvDe85T3JpJQSrZWAwTfMBDbUXSw1SYS23NQZ2oW5tcAjzcBFPSDgmunXPnPv8Vw",
  "key9": "2GVFGdGHD8JA38weyH5bTSkCr4gsbLYoschEGvgnFNMtuHVTSv74wNkhEc1E8wYR1gjwYKWNzpac23hstPkMKsoz",
  "key10": "5emiAn7Uhg5vitRnyKPpQofvAD8H4zVnaZiRUva7tJhCkeszgwCdK4UjPnLXZZ9ZBG5tGjzXF1kqmj54p7wswPxm",
  "key11": "4VWB1ntDCkQLQ3LXQJK89YBD1YxC3FUnChj5f3gj1vsM1mAQATzasUA4wWVYFSBYVZUQyovkSFmxc88YABCU5weB",
  "key12": "1i9AmBXxUrVwQKWHUfAHWRcsqtLn8H4KB9yXPWU4ap64K3mnvSMTNZzN9YxH3YtcUpipFiAk3FqHCbhRJUpWpT1",
  "key13": "3DFGLwpaHUNGi5MJmY2EVwdyRCyaJJMTgif1N4Bg31mqT6mUVLUeEJa17PfxTLCeoBGkoD3jhtZPCmAuK5uG9DM",
  "key14": "3mg1VMMrnGG4mxskrJ2gpGyBjanxcdgJijFXN7He7T7HnUutcYxpf4AE4z6sM5KVTi57WjxwcrsNsyuXCGxvMgV7",
  "key15": "bprkio6Hzo3LdRnqRzdFy16RuRY7vttNLmYjRzhSLShYh35LZE4DBo3pkso59LTnoSDsu1xay2DwLJvZLHkhCxc",
  "key16": "9pWdhj2m2i1dRswqnD1CfreDo1ecfstmANxFJgAfGWfvH52xP2WVPShu7UcHW78wtD1HEs3GdhwEXiM6SkNHbdP",
  "key17": "BBnMGCkBKd3SLcrPKvA65iDjk1dA9xga3Sm85NvuBLUpQKtK3ZPjL1QC65Nof1o9LiqnqMAkmXLiERVyCF7nbBH",
  "key18": "1WRpdija4ZFZCTFCxaHUahA1Hfbi2eRfvsG8Pbee6s3pf2vewo37JkjyBkS6CW65SqpzNJUWxpGGWxiSKXo1Em3",
  "key19": "26dHbADw73nS55U6LUZ8ofe5Uzp4QfLpsjGzqXXwaEBeu7bNRfvoCFLL43R9HKM5JHTQH6BJj1qgTny1JGgg2KG1",
  "key20": "51NpgHd1ZaY42D94VfoUb6PeDXeY1wogK9oSSghr8ezF1WVguWikbWW6w2jW42wrg7tHvSgZiLqWSXn2bkBpxJ4z",
  "key21": "DZrzxmJ2kBiK5AzQdfesdEUjdvV38CP7CtdHezi9FJezkbQm1Mu9f7BK9qqn4dGpynwwvtTae5ugGqPVQHtgKKi",
  "key22": "4hDiQSgz9CaEksbmsCJinBtQY4MroJmxBkdadvErpoU8pt5x8VDWc9rAAHvTBCZmg9dBzg2RwLjrhyRNyJTr1VnZ",
  "key23": "44kki435YqieTm4KLAkK1N5Gf1NErrFA6iZNQN3QGt59kNDGit7Yz4xWc3wrTm9bUTsZQ8wccCnxiHhBYJv7gGfA",
  "key24": "4MP8qGPTJSYT69wsue7vveKfzdRP2gZUcAGkc6EU45xmCjZHMUAHTYNJchhvjizBWLqzjMipnUvDWEdgxsY9KRDk",
  "key25": "4j97r1FcBCtM9GqaJ6y9DCDtERxyHWwzpoz2dyyKYBTjV5z9nVcVyCDBuZjUxWzqcBFaDwta4JeoGSevG8XPWKaF",
  "key26": "5WTMzfy3BBvhtVJm8kiyMPWX7rjFHyqaeRxPPi32j6nsXEgnhkuPW5uEJT2UVGNjEc9yZXqkVHy6rQfdcuyLdjyB",
  "key27": "3bkYVbMSPtVvZgr8QVdtApG7WXKKSzzdSGLmATkywiqK2RDVYSFqQMnuot6fLp4RAL5n1R8Mwa7Br3P1rznwHxKo",
  "key28": "DyyyYrwMkkwFvuRAWxGsnuoECZvS4ShNSfRLa2AqnXXNe6VLdhsUn9sGi5vtZ7S2NTcctMasmpWUZbJ214TfY35",
  "key29": "5exZt3duNoYHXM9VZuTaKkWKV9EgJfLhdrN3sww4i2tGzJFz6VzZnK7h8LEetYqCGDLazDDHsWwE4HYyrwMrCbDw",
  "key30": "47TwZHC3grsuEPX7kznBYbVLcihSqtKwNgDmXcbeBy2yk2fvLNYrb1XUExs1Tp8JmJGjHVFD4KnSu29xAQaiYu4f",
  "key31": "4noLYCVK3WML7MfcirCizjXp6BWY7AjNHXYsx42caWTCV5PDbRYsrTZ17EQhXLivjMh41QbaSPai8ztpGvBNwQaA",
  "key32": "2CQkPYeWPAcPUkMSLekyoGZEbSJW5kgNmVYYq5R1SDCZiQWGWonLVB81xeEn6yQfyBuYu34Wgvk6z3N2XnuvUmZg",
  "key33": "3CqHfgHPn8BrMq2o5PPjivSeGynAFpUq8U7aGwxAfzDrnGyRHv2obryGQpNxPzwWSLcKB9HYcyWGYCG1gYWPiQYW",
  "key34": "2LkNMWajYTSe3dAxSkg8UtRTuMm49tK8cPsYmSpqack4Py4bwT9437Wv54qQ8p2ESTQysoGSzWWzsTFNnM9UXb1u",
  "key35": "2fCn3N8nk8hFTUTkEWnYeuu2kXGSQoBALQtg5LR37GgPVErxwFYtJKKppk1rtjqswqXYPCdDhsUNFzpz6EbVXPit",
  "key36": "5S2tLjFMJGt1svzwDFpu69N25duxx4kbzct4k5aCAgY7F3JFm3kVE6hzvTHmbbZ3mf1Y3iTNLzbrwKENgL1BnS9G",
  "key37": "49gEN6avtZjTDoDDBsa1g4MSouHZtLJS2hCmYS2agVM3H4eK39VZNXqdFAwEDJfRxfBZYNoESKRmryvmgygmPtj5",
  "key38": "qGJgVkwx8wyV83dzGXyDnegCL8zFn3ftEEReS7xHUF5YBgBniGZEfLR7agNPLjuK1pnWvLjA5pf9UjQ3EC5oXQ8",
  "key39": "3AyWdD7oxPaVcMnyWazhCsKQFY1gDSBqytFfDkDdWPNWf5sQAnFUt43bGfFF6CQHcCYc2C1w5unXfzpWXgZNr1MM",
  "key40": "3SW8hNZXCzxVzPZJ7qJNJtQzDygyqGVa6dybU1s9UHCDSBnHcxP4NkP1T1kiCDDBcaFvuNPTFV5DxGUsPJcmztKU",
  "key41": "35zGgECG36ddczaTqbrn747ShxLTz6HXpbzi4o28G1bLTnjuVBH95hD9AjnZrttYhT2TZzfUFvgoRbYzdHnCoNM7",
  "key42": "2ttLThZm3Ysh7obp6XTnR3K3Ajho6DjzBwfxKDdBRmuY4jstbseRRVgwfUqwrZwBJFkTKjj8H8tWfmwpAE8not8U",
  "key43": "5PpuGAuE3DpT3eRKHEHsyyQr1cmR82LyUGakdNxXU6j7w4QzGbZAJAP3YDBf226zVwz8qMxEkfUJnuiEFMs8pbwD",
  "key44": "3UiSuBUz3Pxd8QDj2bxkU7fS5nENNmPhzstkBiFF1rRAme4hbsyhcG4yu9o1bd4Q6XXqTcbAyMH8Hb2rrih4PCwc",
  "key45": "42RBGnfVvGbhVS4RbmXDmjH3ANhbJmfc3oz1k4Wyr3BpRVeEeCvQ4PdWX8Ag9fWoePtfK9dBJcXWz8EqD8aTG86f"
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
