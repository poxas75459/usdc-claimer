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
    "3hZse69xELexCaVcReQSvS6Ss3QxbAv3eSEDfXPPr7ErH3Nopm3z7JZa7aB1m2J6mZp4wJHY4Fr68N315vnn5qN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bo9A3Ds5xTq7gbJBAgwYMRiqXWLHJzKYz9GBj8XTL1jhekTSQF92VPYxKb2e89dkYfSVnNFkpgFPsLsbFAaw65V",
  "key1": "4oSen4zaSYNqdxD4n6TVANEohc9QfvKL7vTZgTPcdbrNTbrQ71mS5cm5zQqiUQJ97CMg21qFJMUtUV8sG8yDQXqY",
  "key2": "4zZuYA8wgWYAKXwefjyrNSUEzGVQsXWH3K4B9fWQapSfLmpXdrxsyWNjq6zhqgQ4Ck616LhYPVM8FH5CKqkizLKQ",
  "key3": "3aNkknTTpG3GWw2GGRER5eqqCrNGR7ymyDzYwhHLK6fqtyfmCN7dXoHNZ8huNKa2zdonuNniFmBMPWKApQrsZwME",
  "key4": "4HKt9Zvbm6x8E51iijcc6XtYTrov5J9FrAWNMQHj1cJvTSxE6TauMnAnrfsUEDJ93hf3EEjsLDC8H4bqbSG749ek",
  "key5": "2Nx1J7vSThPeeLpeRGs4tFKE9rTLxDS1YgRJiXxHC2sL4kSryqYpCcGphS78Drxj6QnGcfMobXvchEXnTCRERC7c",
  "key6": "3qQc2dVK4tN3L9wD4bvQtphVec4avLtTJCp7R6UuVMFoePUfegG8iQwYHYKsZY9aFqquh1iojdmRUJgumu52V1Ej",
  "key7": "3ZbRx4NW66XFVAZ9jPwp42n4ynyHgpzTxhPCyFxULX66mJBJfGAWj85HjsZ8pHZ1AmoRLgqk2u19ypwxbQTzY6k8",
  "key8": "Gmnz6mRzWudu5vdTr3dKh9NdnxznFdS9hTaqGkUYueq1QEmPf7QDhEKWp824nBvZDjRMe6ErAEQc9DcbQyX29aR",
  "key9": "WNo25mqxH1bCVSEddcgFmj1u6MGonn15VCSYsQCcr7mg4i8rrJxHGCCysMCGRELAmWSmnbgMa8kGNqqE2KYh1wa",
  "key10": "2ZTREcCZa1KPQvNF1irTEcMUwdL1yyp6fbwtMv7Ete29WBdpHgDAotNWHH9im9ZEzJmiLAQyPjFMm6NdqPeL3P4D",
  "key11": "2F2pL6gHnmrKyScd96jAENP6oJmb15gxVmCpCFC7tJJ77EaE5gWnao9nCQ5tF9BxoafE1PsuQyPm9bZVnzc3UQhx",
  "key12": "4zyVyqBP3sEjTcv1turNav1xN7mw3a3E5woNUZESzbEdF9MzTH9RYE2KEoLpgH9gpipisbPCKJY44CNfTfpM7Ku2",
  "key13": "42JMw89nXtwGwbd7gXgivMQ6zh8meZ8dvoJdtwceD3VZLfC6DrG8n95GbV76igbCx3ukG7dY9msg2xgVmJm9eGBD",
  "key14": "LNAirfDV2QPtSPfw4Bmh9KYswjg68m525d3PAmST8Fye1bG2g2NU4ebxFkAfyVsSMDYmdagkfGKJNf9QjdUK6aN",
  "key15": "2tj8znmtjoVJ8ELqTzCVt9FThrRMMs1N3ohCej1Yr9e8wDs6vyPGxmDcnin3sQ5bKvwtyau5uqhLW3KZp8qXPiPy",
  "key16": "3LXgWndUEjtRNKvUjTa9E2QKaDHU5H3fqUPmBYMHnvAZTTutQipEJZBa8CfxZU9Wtio3jA4W7bogUPFaRM6iT6yU",
  "key17": "2ybshJRAJLhYa5Ty2WwmBdGWnkjLjSMAA5MckUvzb8nRcPfQxqHjeu22s8eVKeWA1nGdSFXNwStFxmwX39JdEGCP",
  "key18": "4zfCKX9ZvaLm8CGYWjWFV4d5hcVgygTc9cq8zLPi3EyeJhR2rcZRSVJgERZ2zyArzNrQ35ajNwFmkAEvEknNHyQD",
  "key19": "3w8a8GNg4HyHjkWCmNw1kYTmssGxvDemGKno9REWfHeM9Ejc8nRyqTwMcQnLz8dwEhrdYJUZHPvz6AHGLr4zK9iZ",
  "key20": "5Hf4quxhdxjWD3YbXrwKJdkQcsdiVC9gzJDymxQNQ3r6PahxvWLvbbknZT8y5N7JweQtAS6q8VfwmkP5mPZaw6oi",
  "key21": "478vVQdvaZmeHKUmCThBYteggKNzJHh7tWGgZsSwEFRpwwmi7bb7NiKP78UDhDh2fLVqhDFL9SgKhwzeU5oz2dtw",
  "key22": "4vqokcof8Qd7D9BjVKq8LonQcYJGoeLmjCx7ByAyFirZdYgPpEf6bwUkkNs7E7r7rWDrpatFedC1X3Jtv2Bpmdku",
  "key23": "3cJF9p492ja7vRryGnuvB2wqGudePpkCZFsLXEN4MFACHNZdd7sW4ebXfiiR751GDrub8hAxv4Wem2iecwfP1RCY",
  "key24": "5fJ9ip3uY3DgaYB7ffh7AU3qUvNs1x18a5s8HLmMCB9cTmvWHZDbXTH75nAFp6aNdripsxGoxR4cRs2ydStMo7yD",
  "key25": "h8nYRSrLGnf92KjAaGH8XRF9oovdwjxPBbvNVXAaFwEBq8r5hMsjG2LaUZXW82Sdree1C6T8kyM5gL9PV3T5x7q",
  "key26": "4xrXRbZWFY6SLhFHREzfgECMWX4AVbEUbBG2L48ZocRVK4uKsrSp9S4fnVuvYTASziUSiEgvVsEM4VDMyvssME9d",
  "key27": "3nqYkXrJHMnyum8CzcsDhqeYqP5y5c92jXUAEd6sMyVZtGpvJhNDguWZJuUk9awEp6bpP8trzoLRoFwY9p7S52Yb",
  "key28": "4jorvG9NXCA23MCkfpL116nRAUbZZ9Jrf7pw5rGFcyZ4i8jfAjxtcbPTzb3ZZquF8VtS49rtdaEzG1uSyYPsxJzd",
  "key29": "2HAU2xdQXuMGa8FQaXMQHYS5Uudn7HaZEuhyBisoycCRyfvf8EhkBL3Z38P17FBRRptCE3p7tU4bXXHqmx4xivaX",
  "key30": "4NGYF1Dq3vqGsEeNgZ8UTmW7M6QkT3L4oVnbaMBejutZaCLoJ5jW66GXcYjLfEHy3BJqz4d4tfsmBMpMudDVZoAH",
  "key31": "28Uydqm55DS3pdzwAhNBPZCB5Md1PsycqabR4ju65QzVxT5V6RkTnyV1q2mL9cmdd6nE51oaR4CPvpmnx1SL2Fa3",
  "key32": "34AvUPcDzXoMhUccPPQxBgwPGhaQEnVMUEqR6AXWy1k7sDFVwzWAL31HjueGAwboCa5QeBQZtdBxqcyiDTSg8zbB",
  "key33": "5nwyhLSJTRLZud1y4bdobUkokpLGdWCvF4TbnpmPAVGaQTvHmz1fh47n1gNhV6dTReamANxpcjK3joz68dkmbPS4"
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
