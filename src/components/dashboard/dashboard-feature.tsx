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
    "46emuvneLWfsELeP8RMvWJW76sr9by4JnZSizbxjNcc1f3vkJ59hWRYaSDnkaEmGLWCTMtmGrh6cAzenbTaYXWjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYkoLQhY3QmivccwzFRVioCLUDS9RyFXXxAietyoG7rAwsqEohyJ4nGowZJc6bSzmis9VQAc3kYuny6bazreDUN",
  "key1": "63in89uUocnB19YNoaLsgdqbo7JLBhJ7oLrqgerVF1LgNKQ6JsWv3xL3QmyKCvE9Po6f5qMPYsMpCogHLDD7PAXs",
  "key2": "m3DMjGNsFNMWpEfjShmpSfLTPFtkCGsGdYVJLkuTqmm4Lue6mgEPXWNFq2eA9rYU9utaLDqJN9x1jZLBYNqcDQc",
  "key3": "53QJmyUXoAJGCWB8ENp22CNUr2sAuWVXPbVEhFJHcUJTV49cfkhwsYWHce2d6tm758q4LFgHnwm1qP6KPvZJ6hu6",
  "key4": "35AnrpJ7pUZEEp4JUofevUnx6Mzixzv52mVZEJ27Hs7GZ4LgZP78LW16qtoVmVCETxkSJ8ShE5bMkKHkASp2vMRW",
  "key5": "2ooqYQKaG4EWjuLMbfJhQU1pG8dhzAfXK1z5NZYywatRVQKVfjVWw3LuEeEF9367iChAynKkUT7S5sLrQ5chTDRD",
  "key6": "39eok8nmgRvqaFuF5BwzMiHijzmGwWDyrRfmphu52SY7rwgVTWUgdSCD9oyR2v3F376Hyc7gS2Y3FR5gX934Cvfc",
  "key7": "VELJnfMc1xmMLBKF58HtWH1L6Uym7jxsYf8iBEEZZ4WBdV3YVeSJugCVcD1Dv67qed2CJrguFtJ46int1fPNMiF",
  "key8": "3kN4UomekKYwVetBoqMtNGkt3EHaFiEK6fUrHo3Nh6kUgpWTTtbRNMpZje5QbpZQ83jtGHGXGLV3dPfCXmmbtBf9",
  "key9": "4vc6qHEhMcGzS2rbn3M9AbQ1tqBQdT5wDdcrLPyW6gZJWLK2ty3wo84HyVQtJpaGCt5aKTp87ovJhVwV2DSvZeU4",
  "key10": "5cekFgGLXt2FXWRSAY41NifDFTVXmQKqKjJxSErjif6uAjNWHYgvfDkJi5H3Psf8CQ9cgZeak7pj4eGFAEEWkiPR",
  "key11": "2mogPrSHSBExWzcGACv6o1FAvfUKAbiPBAwwXZ9MrLguXyWe69WbCMQeWY781LXpuG96dz69hUxc9e5ChkJ5Hp3n",
  "key12": "5L2MVRaQkTCb3rPBYnwDTMLmh72rRL1HsZDL5JZf65GMz67jPgvS6jUbL6dUp3BT8YLJjmhHFDJ8XfthQxBHyJ2B",
  "key13": "3oaywH2F5FLrCthSrpfiEPYi8bUZmqa4PRaggV49hhUmQMoi34gVxh59HmVsE7q9149UzjkLPBzHbokPwZqcLpXc",
  "key14": "2oQm3fPif7tLYBVFS1hTzew1xCxBgM9iwy7v4zs4CPeiJJDGi8ZCPscv8NbxxP7hdzx7G4S3duAHqdsPHAy4BnyV",
  "key15": "PFGJUV2AqzXiPR5iS6heTFwwVJ3kJdJ3QV7GzXCC4Duxnr73fZXbP1DbWfVr8cbMVy41GgTqoi4pSCBqB7qoXdi",
  "key16": "4Twtg6y74EQ2v7wMwNLfDtCjhx7k6L9qdSBAS6hdxoPkQyQgxbf9JwTLHoU5XsCfkvtFoaTGkWbXJN7hNoNwAxb2",
  "key17": "2rAKCkfWamtTDFUVJK6eCprVthMmUphpSHTiLq6gpw9UcHHKPaqssg2ogbzjx7mbkK2zLsmEsPhXyRRu5kt87hgy",
  "key18": "2euShycr4sDA6w7uMusuYbrQLnF9VWkjggeZ3dwx7SVfxsorzWVpTEzYgbKKLwtRYcu8oMez6WpyKwwegwgkyxDT",
  "key19": "3NqLYE9KnP6jcsrXmJVGLD2LpCC4tzze4CTb4aQTMGP3DXvNXCjAnWfwbBNgabvkTBVEP8tDrKQoFPmMN4ExMmLK",
  "key20": "4ortyrfU4otYviXcqPkNhLWvbQREeXh3s8AvtE6vWo39n7GyEDNCKwMDBL5gvz9wg6FJMtKXoTeGtXmZB9gWfkEU",
  "key21": "4cJiLngCbkDYeXPicPJ8bWz5hiDvkpJTYxU3jPHfUW9jx1RZU47sJig6CoyN3Ufz4bRTa3HrLL6Ws5eQ429RjKYT",
  "key22": "2QDghwVLHGnXyLqyEozXYeAnXXNqpeK8WHufL5nz8UAVws8DfKBgypb9Jd3kNt2TUA8NFywpnCDjW7J75gHRLJuv",
  "key23": "43YySHhwELLJnYYRHRXYbvhMDCukZP1erAxwB4sxfcTAhdBTtaLdgGsZCgXQgZ8KZshdr5W3XvvtxLAjxo2WKkcf",
  "key24": "5gn8zeQGnFJ7HVutHtahw1iMWCLEYcvvqTVF92tWERK3f3WxzQG4ZUhKzgwZeZ68wDffdBQSQBgt4ewMjJ38ifY1",
  "key25": "2hC9Zog7sTNwGzQyctrWYR21oTDmt8q1cJoX1VuVCDjMVP5nYPcVMDJaR6GftHQfbendqwsYXSFfs5PscHLFXmUM",
  "key26": "4Le2ifjN7poJhwZpT6W2a1mKhinRMaS1HSJDMyp2a9G2Wdf3rsesLgKii3hCUqWkDuazRDCT5mANa72tduocky12",
  "key27": "4T9hbfLAE7P1bMhaMRrXNHTLTte8rEqgr9JHJ2aVaowiHnwqGECFkH4VxehMTZS5FtMVDYMYRJUpmSTDbYsCnznB",
  "key28": "5MoDSUKrAjUPLSCjjM5QPaxvKXPNoELF6gmg1zRwuhC6LP5fhrnTjHpfRsjrbsgBdpwCDWZjLSxgJEkTaABD6T27",
  "key29": "h4sdo74DfwKiaMV9qzb8QMo3GJJKL4nDMMmR1ViL2d9Gv8cLiA1jLZ8gobVKBwBE9fQj2WpFn8Q8mUkQXgeXR4U",
  "key30": "1EpQu4P76UpKnasQUjT6FPFBmZmMHueFWGYYeoBWKcfacVHVgfWk7df499YmmeWpmpEGYPds9KghVALqK9BoRDN",
  "key31": "2H3Taa875ikn3vGHQYkqFLGm84ctfyVLx1JWidcnKjnwk2pC85gwx6RZykDc82w3XrhYLBzdanvQEHSY1ePxeUMR",
  "key32": "2UtTHCV4QAnib2mup4MHhB1MAfZMPoQKnCU5HwfqdgiKK2FP3KtAWAdzYYSva436YsqFc4av6Rhi77Y3DurbDAkd",
  "key33": "2EKsnV9cqdmixcMHcHaVs73KSDWJysgqaWX1TCFNPxt8w47DNJub8wiMevtJ441WwiZsakshwfY1Fgt8RaMHLVUQ",
  "key34": "3z4j9KoQi3tG1rcumFmgBe8gDiR7GLsJ7fAFbNUoofTdaqTNg6gJ3rf2VnknNxoJ1Hn6BGsXsGkm7872TLZyiz21",
  "key35": "5HY89Zx1saQ5EhkZG3UZbQLGHFmDC3eGJkpAYa9zQP3EMrAiCYjCLxpRa4VLfCC1KEnT3hEThJzuAwHTL2VvZEiW"
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
