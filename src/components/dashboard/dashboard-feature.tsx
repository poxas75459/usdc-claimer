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
    "3m5cC35tAgK4dyy9Ht2vVXNsnCS8WpJnEVEVRxf1aYiD6bcF4vGGBfgdHasdc86GKRxfx6bcWSP3ojdWvJdxSwgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3bZuuLVFuJM5WxAndWSsqgjRQTsoRXVQaFjdUgBfZFd4RpGHJdrGGaV944SeWxc4jPbXGp3jCBAdXMSfCBjg3H",
  "key1": "61gG3UG5vaUvHK3f57rDtx2674vAr3Hnk9tz1udVaxy8rabfKbJ6YSW4exTftXSTLkBVXcEduFXKRsfiY1yYvdGD",
  "key2": "46hJYD3BK2PB4v3gxRLFy8SswGmKv4HonX6KXpra3NBDeGorPagEBZVTMNuDmod341743BxjyBxUc5hHthKScogn",
  "key3": "4pSC3Sy64gtvDQGfkggHgKs6ctC3FYzKNKm34yH1esqmkEk4yxZkzQjrtkGYNBYNAAw19YxgD5iQ7M6zKmPFhY8",
  "key4": "2EV8qajovqdek7nKRpMgBAkCgSgLdYNguyvmRmuuRFTFWm3rPqqgyYbs5ytPfBVE9aRWv8wMCyMk9aoNC71qVtSs",
  "key5": "4AGNztHwmxyVPe4e6y5Aqa3BDtzEEKnsMfzKxXxHwUuCy53km4zwz7GE3jECsEvztiakj8k8fCMPxVjvRTixr4SS",
  "key6": "3t9kSSVbJ6P26GrMDMszQyu926kaegEHVJxFd8cDDkTjcesy6ioBxRcXgWYi3ftJCA8eeKEVDNCbVHBnLFCkXN5a",
  "key7": "5bNtq7cHhAE8SM5hYBor7vYfQ8Uz9Lqo7GYGov7NoGVBGKgxEvUywwnAdb16EGNA5CpmX4hXaB5dLvtjaFJVqHj2",
  "key8": "3raRDwTqG7hwPLepF56rjrpiBpQJoPdux9a9MDsVZa5tW4vYXWyHCRg33N6GysC2MqqofpQzZrKTEedaAN7oGNfz",
  "key9": "sYBGBtbMnM7CsfvwJv3wgM7o4iBq3UD68ZFMPfn1CMcXE7fJSZ6zZX5SdLrALiwv87cPnqs25jPYPyBNFFMxPBd",
  "key10": "C39S5UeA3iQe1dJJ7T95EUConQzpdkqzDgxKYu7wrrtexw1ucC9sur5mSjy634nLGh1Y4c4NEZ2byhRUtYgW3aJ",
  "key11": "4LpfqJEFb3uyswDM4bkZpu8hnoQiQKWdjfbttyG4FCDyNFqvq4ebzRGrZ7UE1M2NY9S7RWRGwWDo1QwjQSB3WgqA",
  "key12": "2vixpHZhhv4wC7sTCBVUcSpWrXiyWf1DnkS6EUMGdr3kEMqZsM8FGYytRtMPLukAPVgHoR4f8Jut2HvSWZQTmxyf",
  "key13": "4L2zUSTLUZK3LGRd93uhe1T9sA3x8d2S7cBBxuhv31CBW9dUxRNYKQXr6EM2z3pf1dKackVEdjURtBBps6JXi45R",
  "key14": "4y1jKpXXPMax5ady7gaM12xQebbZucQUq5fYSmvTozfJt4UhD8i7rvthVWEbGeE2rqJ1qchw2pxA6fXN4VChBbvM",
  "key15": "bUhUtrJtSyTwUx1wLrxPh8Z78S4fAVFc9KbnU7MVMt9AEefNnFTCuwibwdfToVGesmZZCZRh8oqYecqFaPrwGq5",
  "key16": "2s7omA4YASg4oHj8tdNEH1PAoZdSrkAd25bKEA5TMyHnS8JgzT7a4Ki7bs1jfNF3pHpVvUcpZTwdMPYHRcgb5xuW",
  "key17": "3GNHWLJN29yF5dttbv236txQaoa67aBzVV8uaZTT9mxnCUhNwkpja9wfwAPDWpqJmJV3uihkoJxGPpThzrmmSJf1",
  "key18": "yy4R7PpMkebNVYD9MsaFHhEs7YFr6yY8n3dfqo7rLGymWJDHiBRA2VBuSmqw9oFvNjQhH9u559byRn8jWasair9",
  "key19": "22uUFH1Qmsr3UY7NRWywipi2gLtQSKDEHh9ZoHHvG1NRNz2EsNuGshmJaQSA8MSNxPPnSJZDkexQadBNqeyfSYbZ",
  "key20": "4MEqmH1hLhNxn7z4YADadNWvUWUi9eMZzZGQA8Dw9DeysLSfS82SeGhQQoxDU5Jyt9rRzAfxm8fm8aq3ZNMGTwaD",
  "key21": "4cUP5NpjwmsFNFYA7JENpH7haarN4AG8TQQWvkEJLn9JCiQfodV5BrxWKewXcSD7ZLCbsPVp37Xin9Uq59FYYmYc",
  "key22": "4tQpDru1RmLqevkdD4P5wDrdpcaMzmKUWL8gZ776CRDXpZgxMwUi1qL4UHgxZZyEcmSyrnqrytAMY2j9WzvjHMar",
  "key23": "3vhJVgigriCYK1NmSVJL7wJprxhb9NyM1G8GCuUCpyj1WpimUYfqgrJBAR3KzS2c6nDpyG3n1nq1Q69cBSUGf9nY",
  "key24": "5dkJcjUks3EnC6ZAypTEKQbADzEnSeejxRndkZPort9jusA96ybf6qW5TYsukHDkDmMDX1VgUmTwGuJzhYa7Jh5f",
  "key25": "4gogEnXW29AXvhXrm9RfcubFgtn7c66H4BVKtfPUzhzDewWMFnsknJxFxTEHs6sUqr1TtA9cQ7dxb8Nce3WnnYUr",
  "key26": "3WWaw7tpVitet3yxazBiMd7FVzvSPiqB7Pk4tZS9o1inBa2coTikTV4wmDixuxRWd2QNjDvBYyfajrs1nh7XpMxN",
  "key27": "54HSVNpsTJTGz13TYWoRPvfHuBPa7jzcgGHPDxDqKiFPffSk4QCocaSrrH2KPLVKrcJSGy3tF9ezrozsxJMu7smK",
  "key28": "27D4zTv1qHfzqy6Du7qiwEKzy2oWUUeXzYg5ZTgQ8zoS6vQS5nYS4XKXk94fzzTWrxSmDrDykdRi9rH7Q5W9Qgkd",
  "key29": "5ai5fWCAjPJoe8BKhPiYfra9ShCSEhE6pFP93xgrpLQD2WRHnnDR7t2WKJDhadRCw1a3RTCqpodVNVxdCWvSaxKX",
  "key30": "kF14e62BPGB4JhA4byFgUiAT9LJbBpvb9c7pjKbTF6uzE5yNi9N2i9TC3YUnTcEw9DU1gF67KUHPS4za4bkiuK5",
  "key31": "5DVmWFTT5q8oecvQk7qHGXoVoDaRcUqydJvbBEipu5NqRQSUXd2DkGXgFm5nQby5bYYeSaxR8cDZ6qqD9UfXQsjf",
  "key32": "3AXd4bgSGEZAZeJpUvbBp2GfJAXDEDcKTpgfNrxfW5EHNRdUcrZrz6xiCT4NeqCiUr3NgJneQY3KJUtGMxScLYpo",
  "key33": "prg9Jc5VWcArAywVZxz1BGNGGtm7Y54F1L3ohbpCXggSyYs3HdqBX4jehJRj5PsNVzHCqk9Gq724KHvk352zmat",
  "key34": "4nY4VXLKKLkcuw3tc2THaRtfmLwkShzTuLnVWDGZgh6LVf4faGCWjRYf4iNknpoGMCinWkXLLpfBEW7vX4WBvwKN",
  "key35": "4GeZuhnenWyJbpFL1BmDTmQioNJs4CywCZUoTjTosgv4aiEUsAW2Q3F5YoQAhj3hBweF1ahpUzxBKkYjAS5a6FqH",
  "key36": "1qSZYyBnRq82hqKdoJWGS3RrKdZxQ6tVG9khTjBtk8ktKhf2jEKJUadQEvesdLn3SvaM4QwitEZMf47YayVd81x",
  "key37": "57hfXey159Sk16wdHjCoqRMnBLDjUGQsmCdB4Tfd1NoVEbcdCuuQUfgjWvNms9Tixa2LHKeBuoTqPUvsFczEjdUp",
  "key38": "46tJg1L8zfDMCLCeTW6Ru7Wpj3CcskjsAL848nSQsKcEVwb9CQGQWwQGSgqtusNMA8PUeCWrGvUhogxDEHgzG54i",
  "key39": "4EApAPmEGxyzXaMxKpXp8aPkEQV7mBMawMCi86w7TQ5y44HSiKT3ucnpNTuctH7PuEns9zGC32N7LjjTjRmnDKKP",
  "key40": "42LXPdWL1fTx5YN5KvuGuVgHZ6Cjwms1to843tc9W1kgzhEvfF5f1ZFFWDPFpip87MPwThnjcmvWDTGkgkAj7jYr",
  "key41": "22yFaLVNhvUK7EcSYTGcB37UhyR4J7TXBbGvY1jhB7BJphT3szEnxd9XRpmUjckuW2uF5oN4NXpffNiLSe9KR2ri"
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
