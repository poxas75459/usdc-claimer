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
    "2Y9VJtGvbfkGQCU39TCdqfU7R6ZUvyen7iE2a4H5csdjisyDep8aq5TGpnEaVsQ1m4YuGT79dTb99KZpTqjCrR3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tntpWKkebMH5XhqGsqJNSZtuq5BH1x56heDX4BUpTGKKPmuDbGZ8H2tsRf7VEtQA6EYtWLzXG7he6mbHCHXRo1i",
  "key1": "4c9Fu33MiZ47m5tzb1ojpzeFjzWGTgEGXFSLcr1GG2zy1H8jRBvH8r4Pop6PHXtixZoB8Bfzd1yByESJ8WKNBM9D",
  "key2": "2cVdbz7hsJyoxjjijYq64duH5zgxzSwn3SKRZya4kKwitcpFHvVc2uu7Fv6Rxm6gaSXfhKjh7kmLghjL77fvZx4H",
  "key3": "2pX3ovmhcQoxuLFtWmLAQy8DjZWiZypVYGDJj3QfV3UX4b2xYsJTvW3Kmoe7JahxEnhHuSsEmQitH9TJ1VGg8xc9",
  "key4": "27gsQVJr19FfzMwwMpi8uwsfLRNHgiM9srGxURTpiwYhMyAHCC1uMvXj7sXZqW1JDWdsGMsdibB1nHMXiwVTveEs",
  "key5": "iJKzDFTipjyRrUvNWTPm2u9H3bvjQcGkAHMQSgB8pkxefaqL7L9aKvG4h9vKQ9Hu1NSCQYQWN6P3uGyLKDLeNUq",
  "key6": "4CSHtEGVYniCrjrmkwwUyYSihxDth3nLrayCZ71pZcRxw8d6VQvMdZZdPKdN8DrHA6TtMvqbokHkJD7J1UUHxfvV",
  "key7": "2PSC9hDzmXKKAET7dfGYKvKNKPvuA2MipsWMJmro9Jjk22kScF9kcPuHEus7aFnhKnoRsSq8p8Hg1VJ6Ubopyne8",
  "key8": "3tTe4zE23BajaGKg5xrwr6BZFMJqM3ZnwQiFMPGNSNciYinncVEvuuqPY56qa33SSkB2ueDmLymtmBpe1N2iGh9T",
  "key9": "2sMeQx7wYyCVKvaHn4ZyR6tr26ga613z57Fm2sMbmAsFFnUQSJqUZmMK1VTyutPmFmewEyFskbt7Vgvx3XnHNGDB",
  "key10": "2DfXw6nQCRjWzywbDnpM8PFzy4LjmJ1kTBfhp2UkbTCbfoFPv6fq5dMhfxi9CCFneXCufaL5hnGMqwtK51PgjXe9",
  "key11": "Chz593EVU8JyeA3jb9PUrFbDhYNJSgkmUJkNdvu54SFfEAcgFH4NB2PrA2aZrhHHUyTaAv6kXZz5h943YXqxZP5",
  "key12": "2RZ6RqchtnUYE5yDpn8ntAgwf3ZidknXvQPzq3EVq6wRSWPmtbnMmueuBg2VRpZZWNvvNVZkrZ3yFzBN1hVnPWsQ",
  "key13": "447dBSqAVjbvPLdApm3wZttNfA76xRM7QkKTJXUTARNHyRPyRc4HRbwJgLrWEEESe9bn2J5RfYD3pbH4AZNrAdA2",
  "key14": "2cSFfG7UD7gFiSxgEurDPAi2drXWMsmXXmrtBXwPHNK2g5nmcDLckVXK3iQmcFsioNXk4CeTkWcaDLhmAE8Tvd9p",
  "key15": "31caHw569VLfUkcWerRK657khWvEYJ95jnLn6wDRXZnohBVien2gGnFngzmenSjCw5LUBnxgysZxyhuYBfwZcCYU",
  "key16": "uPa5gGoEUcaEok2uzv1p9hrfNpZkKUrX65FimBsPD8zLCk4VfqZ2CXx2MzeC6s6YCPXtnAB7sHKRU6hZKrFFg7u",
  "key17": "yvWdsqqtgqaRinV5sKqAH6MhiafstRA5PGivwYVkjL2tfEwQm4otBUGLsz2BKPMEdPprFgLv9pM45q6db2XCWYr",
  "key18": "eBY9AwJHXSTk1wowgmVDJqiqb7xY2rgVmodqdrGpM5fMztth5B9dSpzSmenpahHx6ykpxPeDmKWtBiMP1rUnUTj",
  "key19": "37Gdq52umxnWwWevNAFQe6UDD7VQYrK6Henw9LMfvTYuABtGsR8syjUajeb9iAu4JB9savbHkZFJuU3AXjQADJT5",
  "key20": "25uihgqkxYrHX4Q1x3PkXgK6yNbvFNg4c3fcKJqqbGD61ZsbK4NyF9SSETTqjM7vCqcvYzZqkGb3H9jKjXqag8KY",
  "key21": "3DSc1sPp37HQ9HgnoVNSp9W6oD3aftjqPvxBmUAnP6qpioXTTtk8srAMysjv4aoWXPZH2oRcWYoeyGjixTAgFwXf",
  "key22": "3ktxTe6vgXzq6W8crz8CdC7yFi7HQcph1h5KK7GTfaLkwb2E8JyfJ8iagrL3ezBTK62Fu2GSCMd4eZnLHu2MUbBh",
  "key23": "5683dPWe1XARCv8dAoccVShwsYSSakUsmdxwe8DUGvrdEuV7jcxTXsaVMYfe4iwf1SQA8NfueUXhGhR4vvwg4NhM",
  "key24": "4vFZRUCzFK5EQ1oQFw23A52D9ufV7YtkYqffg7UpB2p6GHgDcjEDuF1nMd4vzuSLS32B3EMCS9ezUtYdcm6XxYYY",
  "key25": "4bEW3SVNVi97E6E11ZLL1XHEorYExdFJDKP9vtg292YCKy48iihBxHJAYKBgnmrxRKi5kgiv8uZZujmsN8kYeNcf",
  "key26": "5FWMd1hmgvmSxrPrijEhixzWw4uni6idDm83gs1b9cA4Vr2dAUoonLan6NJEwLXj9Cwy2MNebVS9SvsCvaqAo7bT",
  "key27": "34mSwasZr8QeCenTgF26naxZkToggDimBecS5yWWngrde8NUpX4fibY2FMoghtaSnYbH3cUH6UyiehkkWYVgzpLP",
  "key28": "3BfHWpK2ozqEH6EMoxWH1w4swBz6LiPT71Xxx2kS3ZXNo6njRhXPgHvDKCNyGwoDvGzSMApaswDKLciLFYRJP1he",
  "key29": "4aVj7a8LnpXdWPXB7vHz3RUwNjH3uK7Pz9RqeMGGVruA9DLtkeGh19S2i1S2SDcjSQQuYBDoXqjbRGKv8XYf8cra",
  "key30": "4125irzraQM734RAF21PcMhRv1iadPhr8yXG6X3SQyqAAAUhnxA25NDUXMPX6eLNW9hAHaEZRujkUqjDVVSUzSQE",
  "key31": "5B2X6XwZFcimETeUJr9BAPDs9x3KZLx6DwgQLrcdeTeYP1qQbMFdZrP8NkLJ7hHrbSq6Epg5Ma7Kzgs7xYBrD9y1",
  "key32": "5KJX961mp6kJryMLoZUnpW15nHuNmELVYq9B2q8TSTPpkwyMXAwAwj6BZEmqAiWb1ibESbo2Au5KX3fM1cjYR9dP",
  "key33": "JbjFbqoWprppbKrUYE9CToMHqcG5VGHoNju5fRetA2RbqSBKBpb69SjcPo1iuDRcBDQGafmHD4NUSXwmHGhCb4a",
  "key34": "77qNdgxRGdXSQP3vW628XyEDd2P18gaXMsKUJM2iZ2Dk4twy6C6RXKJK4b18K3zCCMcKJh8RGrwXQWXFwEsDWKR",
  "key35": "2PWLe7efUqxPwsNnfSrRRwdV63D6sLwV584PvN51wrY5uti2v1tAcHsZzbxAitbNRPxCtrowiRCzSFoDd9e6sFQt",
  "key36": "4TjeQ1kquJj1vFSoCrCgcbb8d5w5ovAanUkbjf9ivmZ48guPZmK4Muj83keVDuGkBGsB3VDQkTCe5xPr44rgcXeB",
  "key37": "23biadrJR3QS9sg6cG8JFveuubKgrc1Gi88tTqUoE7LPktRbsisDjo6LCzNuJSAErBnsXNKBwWLpj9VADsDGppnA",
  "key38": "3UYEMDpEpAaJgM1KWzvnzw5ihxf1pq6ihJt7MJLByepshVBFM8u6kzCpU5vRm9Sp4n2gZ5trukQTYeCdMrsNgANb",
  "key39": "3xYP9vrRkJooQZXZMFFDPGdRLFa7hyUHduFXUXBfK7zdQuA81CsqVxrdMwg8i61dkBaNv4qnaxMcLcKppca96S9h"
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
