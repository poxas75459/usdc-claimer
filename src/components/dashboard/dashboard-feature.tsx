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
    "5kaRytQQB7wt6o4NZMV7yP4dNUz5qS3BgcFfqpEWW7PXHcgX64Ff2EX57Ysm3Bky8v7DzePHmAfMpx9d9BbdQXeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23a8GVsKdLk1MxQv7DZdXMp8WMB7ckYBT2SyvMRJwaYnuRtj6vxUzqXM4fdYAN3wiPugdYLBvRa5jvfZvqhACPyw",
  "key1": "5vHC4F5MuSM52C9w6AATxVsuhvQN7KQoP72piYMoVnNnXXGUvttZLkSukroLhSnmaWBb4a6g4gExv9WfdAjMMZF5",
  "key2": "4eFKz8mjSFi9Ge8zggGDr3v2FN6Afm7yMcBVn2Jks4vGGUnDCtGWWrVH4jtFbudf3FX7ygAi37WLMjrMmaGkBNgn",
  "key3": "4MyFDjQUhg5khmfbMfR29hgze9QmKBpDahfGU26WW1PaWZh7DkGuQYXYQorRrFigUqL5nkzcVZGnEs6B44EcKpci",
  "key4": "5CPu9SxLJooxpqFZxGBcKd8HtvzDak5MP17o13uRFkpBez3mnsb8KFAMbQCbpwPdGrPaxMyYWU5qZTYjvNS5WEHH",
  "key5": "5Cb5oJ27zY3c82ou18PE9goNnCqP23kQ9b8Bxb7uCYCRdBVK51Cmf3ANgLP1GoYiKkY8Thtuh3vVqg36zQpBcgdz",
  "key6": "2YhUocVvQ2P5v6PP6xUofuARzNdV2aywSaRWQMsWZVuoA4WQ9XpAgZ8fWRLTyDga7Haka3w3g77n5JybWmcecFpn",
  "key7": "37ZTzjYR9HXXBxAswdq6UJCxkR3QD1SZkpGqSnjK286KDeEP31Ju9Mn62CX5hw3X7uWGSfhXqFLT5urg2h2WNqkB",
  "key8": "25KvqetNc6ppPPxH6BujhNVZZm9s2rEufatCUqSzS4iTeCHg6NfHdmNwgUy8uJyMroec2Huvt8YBv8PsYJeK4UCu",
  "key9": "4LMz6FMpVYQvdmVFdWLiRQAvPosWx3vcZdDfZePJPctUQ7u42oXu6Hcu53TiBJ99hAK4kLsX1xJwDEmE44XSLZGJ",
  "key10": "Xd8AxWuPXmkud5rrm31mAKgnv3Tu6SoEVxzZdfJwL9vCrPQfmRWQGQhJcz2N5iceiSddZhpKYktHoTKdkyxZGso",
  "key11": "6tuwfSAjqHeqd6d8Qf3TJ4z2f3nynqvKMJkEL4QY9ukyQWucxboiV73rEhX52xQs1ZyCuQMHZGPcgvSybWHBC7M",
  "key12": "Hb3wmZJzeooo4dxXGsMduqtzJtroxgSv5ZoaC2nQnZQwB5BQ78GfE3tTAQNQGqELhgELPWbhZhZtBchPJ2mgVSi",
  "key13": "4C9zaq4TLm8A2Hh7kuMvq4ZuvobxQ7eJrBKi9faFtytZ8SFiMrFkTkNejTQbnW3KsT7uYbxVrxWCUQJnPQdPNQ2T",
  "key14": "4QfWCqUSW4oaEPxFizF8SU3Spu3orkQzrEgePKBrjPZ5p7N4iQaNW5PuAFnPnyhPr7h3JU78LgK6iiu8cpXz4cqa",
  "key15": "4v9sWHGUwSbxF49KfnnWDposTB16T27bXpy4jB7XZdbin69ZGrBAJrNG9KK8uRAM28LCJw6MqoNSKgT6GsBTFS1r",
  "key16": "GE2sBYMo1F7NZaYWFDWaWzqeBLrt6Y5qXozcCytwDeELT5qpYoLfsp41ctaRHKzoLzXddKfeAjT83nmAKNEh8UH",
  "key17": "2eagMkFrbPpxTfEDGXuy5nFRQ6JJe8S2nvGAEb9NtzdN473JQUMuHMKACXAsJghRx4tCrAbeet9RVBARsAjjrfYt",
  "key18": "5JR4pYMg8a1nhutT8b3EgUhvacXQwYbnyoFgAqHKHqkC2cTp5RoF7fQXHvKUTF4vpRQJMH3htLrrRABwHduP4kdW",
  "key19": "25kPKA3QJ2Yhe5g7WF3FCk66NPLQadVa7cwL4qCDG4LSXCYVJGmdhk8YZDDbxfYfDng2ysYs8DgKW68b6zxD53fU",
  "key20": "zSXN5GkwaLmyyj7Uz3VXNM27DzcHQWJxQZWn4SzhudoFxGZ1HmEiupzHaVyBHHBFJctdvkmHfb4yq5py1uLtGGA",
  "key21": "5BioSbu4pQxV7jhaA6E6DeRYhRo6dzmKRz8TCfYCKxw5DW7u5Si1WseZsobwWcvDo7m91pB37vmBn2sYQz6mCR3v",
  "key22": "529Ckdaa7P9oJW7ckgQDEA7JFexyRL7xL7BWFi1R7zjy4mV857avFQzoXsDWFXMS8envE1yYhY88wG1zxbxaDHJB",
  "key23": "2cLcofzskHcERgvyuHH3U39P8NJq6zCKTVAAHZQDpn3QvofdDSA5wPnxWdGhki7LVnsJHq2wxmoxSuYaKSr26Lxr",
  "key24": "5iv8uoaeo8xQPTPXHwZUgWaVXbZUDYDp8tnTqu6eEa7e1R6oBHdi7z9FsVFZ77ku7rV5AbhkwH3aNzZE4BKw4FXT",
  "key25": "5sT2niRGGvm6h6nb2q9F3sagcQmsL7z5M55Y3iewZLsyKQW1LSPWsQBoYoHAqaBFphjy2YsEAytiVLHZ31TC82qg",
  "key26": "3nB1vR2oEVKXF71EcaujZK7GL3PmHXTENXms7mam6fzg5aEmWZUpQewhNpY8DSUXG1ceHKrybXcPdTTkzn4bj1bn",
  "key27": "syr5sW5KG6sthEsAoCbwaeMSTYfBZAuwAQUTFtZd9AgPh3MTBrjkKySvrKXR83qzERqMHwBdZeqPdtwmRKED7E6",
  "key28": "4QJRtLUU96ZtA7TXi27SndYuNiyoFxQCGewkQG8f5zQuxKT42u1LC9665wnyrYsWtvUajtSoJL6sR89QAqmKCiiA",
  "key29": "Sm9ZF7Fns98gftv71KBkySkr71KeDuDRuiG6yCPohvvAGu9LerBsNisS1UwJixFeva8uSNMyKm1XVAFVtFvbMbt",
  "key30": "m9p1orPDA98C9AVpJULSHiVz1a2KjBHbuadPvnRwy2RZtJfEtBbTju1jsZjV8r6dufDNa6e45wgWvRUDM8xgf2a",
  "key31": "3pPuEKVZ65sQHnErL3nvw7V3zL42SvL3V6XVBz3Moo7mgXq4kkQ8xDhbM57LZ7PrhsbQChd88cTdq2Tcrh1vLx6P",
  "key32": "YgC4FL4NVZgj6YHsUCnyDj5nEmCPsmmr549yoGWP2pkDbX3EAW5kMRt69hbKxCL3vBhGH53FR6QswahUrJqLz7c",
  "key33": "2hTWf8Lo8D2w32m94k739eD4wS3fbpCJtc4vGxSnKeoShvsHu1oFkeMVEKGByvJyFMD68S95ned1fFnxd9zgeiGT",
  "key34": "2TS9zhCavrGNxvyGiuu8buW8EyNubH2axD316paWkLMzvdCehAmcWNPsUHPnxpq1xPdp843qRj5Gtdpa2LE2CdRA",
  "key35": "vPxyXSs5k4xUcMuwJbiYCPvnRhPMYDzk3PbeCCD3favUcdKPAKR5PqEZJaGrtMAi6UP3zCHF9oYYwFsrFZ9gU4D",
  "key36": "QP6yUVd7mpoNxToG2mMaVjLhjGHNFvGVhQ1rZUofELCfdko2oMd8o1qijy8bLzeQ6rxoD8cuunrHaWxrJtXCo3W",
  "key37": "d6AA3LNEEannBswQcVNcq877MEHEgwenQsCfEQ74TLsd4TBcsFJJXJDyE94wt5PFkys5PVotLd8RaTh86RkhQPi",
  "key38": "49QEwrjWmJhMaZmGXCs6qiuCdBin7zHZwa4j6GrdiLk5kXF56nPM8kbPYDFzsPBRePyTZ3ZTR1Qucr8UwZJak3iD",
  "key39": "4Zn1Hyeqt3DeBYzhecNMAXRY1MwUdbaQm87CRY3iiPYGW869S72C9qMn4YKscGiV9zQzy2xuHNeAyzTMpCPn25NV",
  "key40": "287QaMb5cmBr68rKbexPFAPzjsbKeAcEnF79YVxYe89KpWp34McgyZmjhQ7UqBhXXweDyaJdRagTXqkrYg6LJdMA",
  "key41": "jQxTow4s3vmQTXmizcjAJtM7quPnh31QMYufLpg9rm7AYRDM3e3DQdTLGJLDX4Ga8hNVPj88xm6Ts2MEsa3VgCF",
  "key42": "2vDVpbPHQhukiFS6i38XrgWq1NDW3CkkxHBm6dKJSDawSdn3fe2u2Ug4v7PPyB3HABaY2urbXmS1nKpwtoBADTCh",
  "key43": "37fyPz1boNKaMCnbBBwiqtiQeNSgvXYhTfkhovchSDTW9Fq3MCsRJPXMipS9E5o1znnBtex7vMvnrLP7Ag6BdXvV",
  "key44": "39qWcBkTPn1YozvhTDdXb3RLDAQeYsk83NowPMHZweYYVHKFwA7eoBsmkw9VSnK8sMBQyCUby4Gwek3BqoqEt5NM"
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
