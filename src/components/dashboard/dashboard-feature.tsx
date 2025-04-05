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
    "5K53vtVW8RCyTvrdPoZhVYxrpptpy1F5d6gpWXnHdDZhLxse3j64XZ7mdpU7tftDB6MazALKqQP4TYJj3NYx2rdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gqf52uK5AWeG2LNeJHFSUAGmPvkPn6xX3pvvLM75A1htszVcwStWePPKWpGVYpjBdMf7h7mJ6tuH5jGq1UphsYk",
  "key1": "45VkjV7viQP7pu2s9Vxo9jiwUA17PgGvLErvXyQu6HkuMJTnyPCcdbmE9gSsGoWE3fnvHWGD5QV2TD4tNaHH6qwB",
  "key2": "JH5UP4PPcoRuJaJ8ZtYT7uuxXtBY9iU41mKbToCEPmH55pViXx9SxVV7pH3o4VwCUydSV89m4PhZmHGX4UJK6C3",
  "key3": "4cWMf3Ea7dxt5oqqkPAuRdtMjmNAPTEUshie589gAz3oN7gPEJEbxPDnHZXdzAxWFgVWAXtoG9x8BeZbbsV69zwr",
  "key4": "24WdqR736AJrFKh5ojuaVQgBcXbpLLkLGxssDYvMyi6TqVLwpjWgzhrEm9dgAvXyFNZqj3XqfGYF6GJDuE6GKpwf",
  "key5": "3FLw57u3MECXzTu2usKjUap4Ruk89MAktR3Atj2Vm7vBQJxZ3w7vvt8aiD69FaRoGjFtFRQEoLnDViiyZBG8a2Ba",
  "key6": "2MKeorWD3tXxoL4X2ovQZNiR8bYMTdKq339WBdob55JPQumTy2FDBNSFTMEcC6zknF2nWvWBbuj5vmsGUoUSHdYj",
  "key7": "4gB76U1B9MnY9uK4HX7hQ1fzeks76DpcZtxSiHNYpu21JdmNrHQ5SjZ9MeMfixknk3GGjWjxpiGsM9WrKHCxuxj1",
  "key8": "Mn5vc5gbDk6ZUkTnM1Q4QLoXhLvLUV4z4nDewdSMw33ifFyw61xY5PPKKSUKByR59GPZHxhdYH2ZKWQFHt8qAkj",
  "key9": "3DcNm2mzxebg48KzU243XDNW2B2j63WSsamuMuPxxVi88G4Jbn5a52yeojqWfZaBegwYoKkpxoDBdr3RcWasqMkX",
  "key10": "2Ph49xKn44T4kJye8bmV8b56rK9Bwbmh6zcG38vEjii5M2xcPNB6cYDnZfiZyUkozoAW4QFkZPTKPAAi3k9JeMP3",
  "key11": "yvJdbwfJ2ssLijjQWt8XLKZDSqgpF8EUSeAGUPx1RKN7jr4RYwuFdntgWzferEpk2PHL4aC6GLj6qT5c1QWubSV",
  "key12": "5tECBJ7zGUSN3w2csi72K1Q3tqLwMfwtE2RssQzHk8yrWXVx7Kt5YfRbvLZ6KErRtmqferhP4K1nuLXFwtZn5gFr",
  "key13": "5tbPPs5zuqXcTfrCsRhVmwP5qLk5Q6zc2TqeBibqQuGqNfqkxzbPHxqniMiksGSBWvMZzMRBYDxCEhJfcQ5Bnpxo",
  "key14": "5NQHFRy4Nn39chowaNSwjm3j46xdRV9JBPTTjfVTXtMmo9hxKEaqJe89SQvurvXhhy8fMcuQGHtq3nNLFjqys5wf",
  "key15": "5s5EchZjSmojQHULos1EWhov94c8U2oJy2HnLkcYKd8fj9xxfwr9tP6jyvLicPanStcmBkD9FpYf7tieASU7nQE8",
  "key16": "2SB5E6BEdP4yWvvSVS8hUXuMpCnaHLxNBCBpoGdHquJvP4pVKs2pbhYc1K9rWFNPXmcwvqGwtZchaoVYEn5oUbYM",
  "key17": "43EM8KUFJt8RuM2EP6HoYSUMi2mHNNLyosXjGt3jKFtNGLKKy1APheVQGUuTLnr1iYim5QbTj1QieapMsvuwBVX8",
  "key18": "tvkrg6d1L6w4nzrzpLubDWW9owQdStjAhRY9byxJVQHeYfX8gYQQ4nuDDwXv1GnDQjWfZAgWQmttskbBN2Hbg5X",
  "key19": "4XxZtHb6cNGJ7QEUt7qUi1cEyHjei1is1pPCjfnUFqpr1rztZwSL5J3TrqJpYzN6CNkfNPYsCBqgvEDUURevYpyy",
  "key20": "2UXdoShGc3sQC321N8nayKid9DKX9SMLh7HE8zCC8kejDeT1v6oc646jpKt5Xu6VromHKkUW9vkNnBKZ99jCqbpP",
  "key21": "5S2dvfs9eoAut5dXH7x5v7fxTEkVP5ieSx4e35RqMz1vDuMpE9YPtqDLpfkAHLCvJmMRTwMyJEefGArZPsvWe8JP",
  "key22": "L2jhq1uWVofbVAt51HRr3FGK1nhZydcXdHpyTmah7yj8jBpFdjhwgX1AwzbGtKGuFajZbjq67S1ThbHSy8bzaAo",
  "key23": "3k1dBNXLGWcWTNHjmhyhTSByaNK97gW5qqLbjeAd252SLmSsujenkNPz9Q9oWUfWrTXm6kHnk8NXDvptYKexPRzf",
  "key24": "2oxS4k1VY5GUqdBbkuRuRGJHHGum4rKWxeavREi3nwWFo3NMjv41p7LpXMCjDXgnURWSXekmRX5x5ZGDP11C7jTA"
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
