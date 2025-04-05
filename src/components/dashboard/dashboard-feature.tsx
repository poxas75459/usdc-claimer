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
    "2TjLvKUZTPhVwwj5HXXdQdrYRchtWnvbsSkYDyjeFfzVfwtq6BeJATfXgXWT4krjLDHiTb562oEB4LDqVBgtUbaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWtyJj12aXHuznb8Kpm1Wcv4BFWgyYMgjSC79MRHxTFyGw3yqNQZAxF6sBYCfvfaJJTUajzWup7sQrLZ4Themad",
  "key1": "5oXQVMj38zshHH1azSeiLBDVzEvLSRj4j9WafRSsyS5h5TLgm58fjmGUZLwBEynBVXyifMDMFqVJSRJde3L4hcZv",
  "key2": "4T4Mca8gT1xVcftPxag35QAayLFGMgyrv5tH43Jhfk6Lxvf2mDp152nQw9AAcUsBCXP3gXzSNFPsYZ4ydVaYrHP8",
  "key3": "3jv5tebTFAmFkSQ7vjrgHbY7P7hfkakzeTwibEeCMZm7bN2Epf8YAEop9wBTiUw9zgoL9CjNUzxvyUfUChGykC3D",
  "key4": "47Somz25kqxbNm9ECdrgUwhHsyEcwCLjhA7TCUf6bRamMiTigWZafWnPeh89ZhsWy5vPA72akmkTTCHYaTjSY1sq",
  "key5": "3UPT3ip6PPSRZKUFEe6Eua2Bn2MScxJty3xbiDxMK1hjfjLqmXN5mxnXxu3eVyKwJXGrxruaaNrA5CFpgZE5UFY4",
  "key6": "5Pj4o9MApJUxbGNzdg9KcbAJDTo1vRCq7tAxkcxwN37geJmNaZqgfQVHpyJKJJ3t49uE2wHzVZYbzPkstPFokwR9",
  "key7": "58UEv7oK9zBs46KBLuwYrU1z3DMYoB44iogVvsLnM4bTwo8rq1z851w71NtHJzTJjvJ8HDEUJBogMhZBnJUY9nbn",
  "key8": "m6CDFF24Apc2LbWdQnBHL1mVyxfQJ7hn99TyjqxXwqfYKD9RgiS4GrcYtg6kvpkjBAmuTGbwTp7N6eFpqeTxjca",
  "key9": "2yWDnhyiPUSP86Dox5iwdGbQ4D4hBjKSKAXpE1MRvBCmUS4cKmWVRWR5HDjDq34jR138e39J22VLihTcsu3QA3UN",
  "key10": "3j6DHyqZJnfJQpWtMBiP5qHzakncaqW3PfuHvTGeD2TKEEFBftCKswDYtfuAtfgbJGDiTq4BjmArD3jopfuNDDjt",
  "key11": "2RFL6eCgZD3JwSiXsqH1StNZM6gGj77RakQQvkS9mrwQbkXr1ivrkQuWiX1ioEqFPVB4xRKrhfupM53469ZCvzEK",
  "key12": "bJMbtSkcT72raJ5Y1iRkjP3PG1KAuR7RCrMjPS2xAsZMi19E7bKYFjftSSsruR6BipLoGcDSyRBsK4SSRMaducp",
  "key13": "33zs7FdteZj297X4ckbLJX3WMNHazFLxh7aV4Kevf42GWWBi2EJxveuX137HyFKESLwBDMaAg5AnpU6spLqQa1YV",
  "key14": "5Vj6613KQFG6U64Gw1SDqxBx7cEocQNcs1DdRsUz4md9X2niwYjK4rgNVrgxma97rvdC8ZLV3nPExNuta17r8TA3",
  "key15": "3igo3ne1eRUnwQ3bd4ia9ac6zZw7dU3L9rC6s4SnhsRzQzpq3wQCCVHeP8qBKNxLHDhzsJHM2BZJp3XXBeYBvmRf",
  "key16": "5dyMp89c8CErQLeCeHw56b1obtivzNMJtD5MFa6bZscUXW7EkysS5LADAfWKXv7JH9uTkWVTPHLpUbQD1J9nRUDQ",
  "key17": "4Ssx2Cutv6ym2V94piLDE7EjY1xvERQ2C969CovHEjMiYmBR4kJNqaEAbm4k5UBfFnfCGC5rLsd14dHVdBLuLrWE",
  "key18": "3Yo7WEeLmaucrhTw5TqcMUnNh17j1hPN5jU1rE9jFwa3rHtvgyMw4ZVKX6vBqhBB89Yw8UfhZUesdamWFScHsu3g",
  "key19": "57A6D5z3STFijt3TkdSm2mujyNK7R3fpqufRgsC9GPjgQsgnG13tKeLK3ARXvKsc4ga7DNN2w3uez894xFTLES3X",
  "key20": "2TpAPpFjP1osjj8niin3qB9Jbuk8JHxUfUEj4xa6xdhFwcvEVLuEYkRpBQqzzuDRKgiwkrr4qq5RtuNebCYdft7E",
  "key21": "5Sw313h1BBQ1Qbu6qMYUxdfsPdEvRUW67kaXG16vxga6FwYXGXczqFi9CpzpMhXAxuhCfKN3Ex7HAp2aWsqic3XL",
  "key22": "5QxbdZXMuW1qmEUMSJCZD4AYp1EXuWthHEhx3UGHBfW2Na4MmH4B1nAoLHZjx8tJpNnz4h2j2djg3DSURk4dPU7j",
  "key23": "pmLPzGKLRaSkb53kEiJagbS4z82vbo5MzGMV2QRrHZ2kpsFDXYcENQxRrkmx3ARA42ygG1ATQLa16Nn9rxRg6Qj",
  "key24": "5QeT554Aqnq3QU8AAqgZhcJPVCKVZKJXrc9UZtot4fghre2xUvTYhbbiVojVK9ccKbKW6yaTCy5dSUKJMSsi34Yk",
  "key25": "5Xs4yqFvtH7MR7ErHAzgzfoVSrUA7NAucWP642g3gBoEjZGTCCNZAoACqSJ5YEtVhg6NVZ6cpcwKTqVErUVkTVec",
  "key26": "27g9P77ph2PFLypG4AQffUYciPJxY9wTZPnyfacj42fCxYVnZ5aoAvtL8b8MtqmzeULJTcyYBbj1LwpL5YvzhgCr",
  "key27": "3Z6as749PjSwTQc7DjQgPD4T4fTD6UnPUaZ9CDfHkgcuwbqFEJPtA2gPWzrNUjhwPceLBk8jgLeRhq8oZGQRFXgG",
  "key28": "3QEjPMKHawG7tt6QSv9DcLfdNU8fYQ3Z1Ru9K73oEyXb6eKW3YbwzAYUqCbm9mXdnFYcmfQCJjeZCnXsDhVUud7E",
  "key29": "3KMmZhPoBRRqfaE2tzyjKx5dpu33SPSD2BaLLGdr9eQLbVBxneJq2DovoYwMMgQNuCGSWLD8k8X1KAebjRCwJ4X3",
  "key30": "3JvsQsXBqJu756dbFSNPc7G1WNqW9MhYPok66SL9w3wrDZogQJiCD9ziYQ1TVYYmEkTAfRnB22exwyTMLgkQBEKw",
  "key31": "4LFMYxqptJzX5YinkSgBVLbeaHmupLwA7M1pHoHP9Qt3GjNd8d8S4hKjrU5u9czdM2jL7HHXHSjTv4KZ2nLCyDPY",
  "key32": "Hb1jYU79th6LbsXBdi1JE4ae3z57D5CATiQ55kBiabCJ591LeXVias63eA8M7paQYnF2qFPr6XEc32DLEtX9vk2",
  "key33": "2vw9N2MwNpg1S8eAE1c4QNuLf2srUrVDYNi4xkMh27tXEB7aAE5NkBgXCTdbSMiS8EHTcvfTbNXgCLMaCVxsDwXK",
  "key34": "5uSa3K1vhocishjigr7KJ5J32wdAG4gQz7W5eE3K9WdyedTJr3fMSWHP8fiJLi8UtasZ47Ms9zMAE6GW4fLpN9co",
  "key35": "3Z26yMpRL1HHhxVmB2XSWLHyAU6yD8SiYuhVjrdsFq2EKWxC4SBSfDPFSUJwht9jp4K8ZTKn47FRBJS9kBejrpsD"
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
