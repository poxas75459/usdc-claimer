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
    "opkP3vEUMaT5XZdHJ3gMWTusCt8SNb5yg7u81H2AtpYqG6ByzCuD5QVYV73g57zsXUgCgPgcdqEeUFPjF6KqmRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d22gkXoRjNwhA7aW3TSZiz6cKdjQTDSuKDHB8KQFqycXWRZTMrSFV3cS8U3c5kcbc2Bg4B65wSQvoyhmFwkB4qF",
  "key1": "XwbUWcKjt9xqHzQ6UAT4Z9GUWGfamb5HR8upuKSrnD2Y8Y4kXZQRoAtbErjrNtqBd58DqzdNyhsmXM7C5HyTmeE",
  "key2": "xPTinzg3LgxvfhXqe9s7c2xffDLQk7DqNC93FLmDZ2FaowJ4TL4qiw6VUAf9BAADQpahV3cpcMmiDGz3rDtknH4",
  "key3": "4crHMVYkyZiRWkESuMYcejBNtenHxmVJsfdwRH2QDhDsykcJsyfu9Mq3iULhvsSxmd62kVNU5ZNDyWNtZB2CTBMj",
  "key4": "hMXwGJeu5P2HMhzHkTGf7WL2cfhgwUwaSAmN1RkvpsHEHvmxC94AAGtfMNZvybknB79Qogyrh2D2mxbRHr1RvLC",
  "key5": "3WFXyt2MvpWB382LfiwgMV4e3JjiW1Ha8pmjETvjv81QcSkdmRjqR9YziBnfSRRaZ8rXTEnMVxHPi1fsAPErZUcV",
  "key6": "4U4sUXQEd9y2aD5unU27ukV3dXRaqfQ1rvPTjp89smWoguxW3efociYJHYPeWWDKi3wZkyZ7HCZv9HbJ6AxNpU7R",
  "key7": "4z2eKThARTegSmqdXfDcsdibgdNRFJuLhQFEQx1nByZFi4php8vjASVtMnSmqeqdQ23kHij5D46695BqrQZxWteF",
  "key8": "4kuiqhMWggUh6stbWUFgMwLs4nGP6rhmyDe6oRyqH6ywh7r9Zm8ruXHFrNZf4xw7su4Lktf1UGM9UaSDfBUT95Td",
  "key9": "2mdP5ai7E1fUBgXkr3QxnNXarvFgDAKHUzDR7TjFTsUQkCrZnap4wGzmwvsxaX2AG4BPKnV4YbQDrv2yCpKGw7Q7",
  "key10": "4ME6gKN8VQAwzePRrpKR94pvf4davAnLeR7Zr3cW13CF1Ry1KgbucbFpcYN46tMYRjvDY16xoMN91sqKLvew3HqW",
  "key11": "44AC5emCp9Wy7t5nZAJhkS1TYEBib9c5h6kMMuqq2NDUarC1LFKohCiU5y6aHSSLMuHtX8s2D76aeEZkacJEJ5fn",
  "key12": "48BWCzfXQT5vHXYDM4jEyjog5XcDCiWDmvxpg6t3sTnFv3Pcdi1wbxwHYDfeHjbpkZp8FUXAzNe4oMZaGwDQ4ctn",
  "key13": "5Lfz3xeorPQrZHY1z3MDj4vWkZbgxKVkPtupFMry6xMnfxDQBECHN9CDS6S91oZ7r7EKbfHgrxEVmXuccztKaiJt",
  "key14": "24gvfM41HoFWrWH7AKNrHbGRbfbfQfmzuSeWP1ctXF1oHwrbd5JWsUJzVvQuT1mNNpENJaiqx8bpyEmxmfhz78tP",
  "key15": "54L82ePnWSauhF5Gv3uGVnFydVwzE5MCd9Kh6BSi6yiB4NGexoUdrHaXthbuugDzgDcxd5omm4ooQJyK6VByvpBo",
  "key16": "4L5DT1aKL8VcLPYVXxEw2Sva4kbTEF42jv82y8DHES27M9RoUEECqNainFBLBJTEJjPPYYbTk9DCA3ahEvAkmrj4",
  "key17": "4uvUYWmfDjt3ckEAVBZixWFm6rYSUbovwZZ9zD5KUbSbiKm4ywXLGgDRpbSmo86MgJqTHP7889ETaKDcfqV6Zbg7",
  "key18": "3yPoLT66Z7wexU79aq2z1xkjR8MS88372h1MWmCnyYi3xzPAyYwvr8gDZ5SFMXETJVbL3et6AJjQpszJorQUZx2f",
  "key19": "5fBoLcbS7qCwGEoxScjdqW5CdaVnn3fhPWpo9o6X9kndRWvUD55zMzeDS4X6cnufTu7QY5J4TEBWprRDhz8N3f6S",
  "key20": "3XDTWx3UjU27XAMQNmWBMyzCf7mkEkbDy48ZBAUibmB6ZD8XHgtX7ZrzpG7r7564xhyT8RLxuoUhRwGTY4exuU6j",
  "key21": "2PFyJHEBf7iQy9XwzVGCxPP4b8nheUfi77B4HCr1uKJvosBPRQXJGzriSheYffXJyLmHQvWXiDwpAUXJrd521Aq5",
  "key22": "wabFPyN6KNJReQdxz2cbihj5wRzYfjqaKge4fWiLMgPwecw8kusCUkx4PV5hfQzvN1pdD7uKfCZbrz4j8afrLe1",
  "key23": "4gfU6N2FwCYC8JVy7LyhUYfyyomzA8JZCcvCgqjq16YF95MauHTF5priLBznGoMgNJFkPqPHoNibPSdc78yNMaP6",
  "key24": "5GpzG9ydUzPYq4fsZLEQ6hQUHXQfkof9RPAjBJfsGD85gUTvvaoVMLTQXNyPjBfc7ZLppwqei9wYdr1dEXpDC39U",
  "key25": "qnbfgsV1nTXr7ryF6fUpPd3oWUCpontngbJmyFv6urkTnHJR8628UUijScXQFnmrkApdKMdnNGCvBaJZycdvSKp",
  "key26": "5Li4tHrtQcyeAv3q9RiocUuZkSJ4ptJhXhSu9bhmhb24YRcwcFx28BLM4dQRzkUmUCgZtsRLXLz9GMTULdL9gzE6",
  "key27": "EpUHEVXF5oeXo25SSSnfmHGzXPgv2YyQmaofQnwq9cLQXRRfvXkuWWRHcQ6z4PQet4Gn8dmnmJj8wjA1ptjiEVB",
  "key28": "2eL371TKAVANRoNbadSTvWhDRBFnBKb2ASWk6gCN4LGmXGbB9bsJbSiE9SRHJMtA2iKCswGib3xKghAyCDsmTF3L",
  "key29": "5SS5pnWaNVMkmXD4ksbmRv2XseMbPwjjDiVgbxXwK5mfg2ftVcn6p3Pib8faytZd52cekhZXCTYN53itB2NczeTZ",
  "key30": "4Aj6YuHekdXugZzj2EpoqMqunbTzRbktNsq9Jwacy9iyx17k9mkvHv4rgdNsZbPv8z6zhNq2ayVkC8r9FfutfeNw",
  "key31": "3EZriosimzCQ33SWXM6yJqVKacrjuScNKymH5o66RwcjUrevJh9VyoCKQFEXJsFwQk6ZgCFxocH3x6Y52JHgyfh4",
  "key32": "2j5XUo1bWMGLyJAXQMc7w4cZ8mX5gGkUGLJBfcYvuAHGYfLfaoMgjBRe5Si5PQVpznqGMNhXEUZ4uvTbWxWbYyez",
  "key33": "2bqAuZciKGaJrYHGr2eFJH2acFHkoHa5txVReDDb8rKSMDWKvhKFG3ZAxgRywdtXsP8YhjP1LgwSvYdeWdPX4DEZ"
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
