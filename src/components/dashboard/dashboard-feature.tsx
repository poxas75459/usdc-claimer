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
    "cxfAMS6TJQkuUa5qAYd8VmeP569DoHGh7EAeajK9tCXKnt7WNZWEGdN5MxBgq2woc8e9LamZMQrExoVUcLWxeUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PojZ8ria8stgc7Q9YDRtV1JhqWG5gsExD6kvXQ8e9GRj37JPnAepU1DztjbKmKmpXuTr2wt3H3mbNHBLw2tM3Ef",
  "key1": "65H94QEQjK4qjpeXpWSVzRaHrNL9VFMYLE7xMM3YDGk5rrzS8G1TM1rqTS8LLVC5p8hiHA5npuomYNPFv4BwfkAY",
  "key2": "5Ha4HQ1kKtgicfjoZmiNeKgJ5Si5rezNvwgJTDScWpczGdAxBWRiSiZBCFWRoeXgi9DvpmRShcknkEECG3fvYszi",
  "key3": "5o33oauZ6zAoPwUFMgZs7n6JttVjKaPkP1U8Bp4bdFqmEG8dDms9fbHHEuVdGQpKAgkJymsPW1kVgU4ER9DWTeEd",
  "key4": "26N8FGWzs5nBnbLe6ioRZvWUbQrJpLqpxuukdCsMkwsbS27QLVLfMroz7ZvVQtPLfj2wgSwU3UncwgQpLxnsCsKy",
  "key5": "29LFaTJkzGD7HHHw616XpPvYwwPxbMUDhaHBYRHDkxZDnvyKjTt2RTWwBwe9dBfMxkrRwomZbUj6WFbwMbp585ip",
  "key6": "cmYaYtY7Yriym57L4WWUCsWKseVL2VcLbCJmuzLqSbx6pQRkPhMf3f5ZdxDTPhqipi1PAkt8uh8a36S4YVjUhAW",
  "key7": "24gMB9LaxWUakzxUrjZDmA36Sb51TuJDRwxFFKqAAEL2ALPJnjHcUz1YC6hQXr37zPLKvmLWLfREwyUwfFH47FGE",
  "key8": "5DnouM4cL7vL5hKmXZdzy9UGCFopFhJcdZFwGcZSspCt51mu4hgUmZHxYwR5KrmiwrRbtvcR5NyPgeFUxPU5qaAB",
  "key9": "B4mjNFHPQDYsec3jLLD4ZohQrPcyZwt7vyyWR4gBeMLe5ZYF5wnvCZ35do7BDV895S7DUjjkn9Q8MPjSMbiyfPi",
  "key10": "5DmvMMGScNNhAtd3FRF49FZmSwkn8jp7jCmc5PB8TkkEJag7RTndR5jXrHL73qNVLgSojXGfd1LzFBFQkjkoq1nu",
  "key11": "3RckmcfshuqD4JyqmoBye2qJbzo789xXmizA9kZQ8pwyJxS2grDCZWaUuACSoHM4giyXyQBzHvoVmwtVsbApSGx6",
  "key12": "4nwMxRkuSQYaVXCYV5eBDiDFm7dHEu7riPSUcm3gqdff9C1rNDG1NSADsTepT5SgT5E6PrtDbt4SRWDZ7rg9ECnk",
  "key13": "3jbFeaYZhCYHSnmNUEX7fdBFeCSocHf6avtWzwKcuMZuT4rjzPQkSuuwx1FhvqGutaMLBz88Eg2d4Z7Z6Gu2rxzg",
  "key14": "4i1SLnjrscyvKUhgcNzaZ2axxQjQqtg7Q8FkuVEzcMAe2JcqkNuVHH1STDVBbnmbgBCZo6uquS6LBnGXsvjCJWJc",
  "key15": "5WTZMrcZj5bYfqW6tno3Y37Ukw3xS1KbNpGS5BYAAvTgX7ZmvQZq65TGw484vocCLqR6LN1urJKULLQRZWGWqDHy",
  "key16": "3QP7L3EAzDfv6b7xXkPNqWjZfXPFrBaFXPQwavekN5bFzrbrTefi2rBcnJxHHqWotPCrHvzPPHZadjJvZXU2RUL9",
  "key17": "4rSKDi1B1YA4MueGrfLs8PPAVpcyidCqGoM6JwcHD4Nv67N8nC9htLLnvZAWQaehNMruhLh5U3BkXq15NSdqJ3C9",
  "key18": "4u3J4iR9nnb1GNwwU5SSHEvmhpABwjh1hKAhjmHsvpNGPtTD4YpphFf1bhQDQrApDKA1piaeDENAnSnh9mpwf7sQ",
  "key19": "65NEb6gf78yZSy8c74M5wEFPHAYubyDVVRhB9sFsEr9mPBv1cUkZzArYaPcjeE5HYVydxThZAfPE867payNjueQW",
  "key20": "5qLep5yae4Lh7164cn99vzj86PfXKXKpEGBz7LnpUby6hftBWBALdDYnygTJgcijPyf2gftE7egKKBsyHxfNBLGH",
  "key21": "3wGb8t444pjVfAP4fHvXWsp5DLrALvr9noVriNn2GXip6WVaqjJ7XLNWaEZjzSxhvF7zvxmJaHMRkYH8iwEKeyN9",
  "key22": "67FHdgevaaVGt3UYe5PSdcBuzHwATK5iCrciR1hSiiPAwnNop6G6Amz7rNam5JMuMrGNFddPSZuwh9bvz5n35mDd",
  "key23": "61xUXrXqbwbjtwEiKFBgPP6GnUUnceAsdJiYf1M36x5Di5cURucNADrSQr17hcGsonfSsEvDozbwNazqDpwfZqn7",
  "key24": "3j9gCAKq6KCuE2Sx5QTT6Qadxn6Kri3K5XovAyqFLgxt6VVeSf62LdbZikfcCBCmSfmbnzjrLMcvNprJRJHYNgJV",
  "key25": "2Den4TSihgbmHyq5ZuYTfRLoyQ1As5D9Jsx6g9XZM9jWYZ9v7Bt4PYjbvpb8LQXhapYRfx3gGapFgHuTacwrbioE",
  "key26": "3ETN4Fwii6WbXtcoZJM3uAiwRES3VD6T857Rc2P3zHPXuJzrezgMmo4NYRzkyrrCMCffRQYxJJsoVfY16RTjGFMh",
  "key27": "3Fz7KQB8Q48tKwCS1KujdT46PuCYg1bwt2rs5jvE7UztkFxu3DtxN323oh7vwqU87mSJmExe6DNXLVvNF9RP2d6Q",
  "key28": "4W1EauB9xxaeR5ZPNFuCB64kmNZf9jwJS958krXgfU97o4enXvKDgM9od98FhA9cNAuMhJ8rhdGV4FjtTkRT6fXt",
  "key29": "3QKvzG5i68VXs4yn75cCQWKgpCdLS93XMyjjrmUM9h444kAv6xTq1ZTVjqA4uXBfkfvfU96mfDpCFFofgnSbUXfi",
  "key30": "3ztixPTep1kVC8JKJd49j5K3A7KXrmFU4kpcP6u6yCqECmqoasZxT8EN1N3uRUCeFVf6RS8eLRgrVeRffCvUF4Wr"
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
