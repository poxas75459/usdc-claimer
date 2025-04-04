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
    "43wUZ5MBR62DMhb8RZLYfaCUiaSc3f5LWwGt6wA2xYp7g6Vun8wduyCkPRYyJ5iBE9uy4biLwr67J7ezJLZrHd6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVVHozoTYwYuxWSBCNLiipWDzV7HzuaEgryAzrJZpq5quJ2uCK8Lf3pdYN2ydxvGoQ8YE5FcyWH4yAcWacP8ZkD",
  "key1": "tG9En1z4n4iTLGbo4Png6mxtet8YxWHoQAPc9GeMspcJ3BBi9Su1xaLpCQB5fDu9LBKK8tG2PGPRmcbtoYddb1h",
  "key2": "dqToB46QpWyxrXmpMQPRs2dxe5XHvrd1rJ6W9ERSFoUBHmvWcR9Y3FSciAxiJmBznts79v5SrEd3NkqtPKvYB6F",
  "key3": "5xnaTcfzZWaYN5QsCybf4mQGcqHUzYq6vdYqNHiDN51RgfxriXJUaQkzJdia4zjf23J9YmGb7MbXuKsadkT47VVP",
  "key4": "2NjnGRJP4HfcQF2oFNCpoQySBdHAXPDehve7sXcSahUtZM9qj5VDk9LuXus62Hvd6SGjvxiyghKnvUqZUTrMEgBv",
  "key5": "wxDean5dzRxaLjKrX9pWE74hmfJSFoKzPCGgdRyweX5AVehwV6y6wrN6mh3iW3HxzYGQYpVS2H2pzEVbJjNGiSx",
  "key6": "3LSvEei79icc335S5X7oobm3MNMucPcMgwpYW5mTGUfcLQyeGT9RHdGTFbVL5WLfdXYjyNxAWjndK1uC22MCKPEV",
  "key7": "3mQ3ggRGHHT222Jxv2wbaZ8T2XoAniieisse9f9s18o3ucfLTm5CiJ2N5ViJVXJW7tPEvEDBehSB3SA3fUbMFe59",
  "key8": "ZbRnFDb4a2ce7Ly8yPUcbzkfMYbYfPKLX4b9GTWRcmdQv71LukLJ8K91W7poMEBteWd5vhFyKc2Xn47FJj13BNt",
  "key9": "4CYvpo5EDyVrPTpyH2ddr7dJejEtnoRSTttfLZEkrQLttLWM7FSdz28ZfvU9sk2TfcVNWgZ8ZNHRqzi4yvJEojMc",
  "key10": "4u6sS1rwZkMJ6vyPMGistVPwZUdwvLiYfRQUiciqwEx3WJvJKwVJYUhD9Y6eZx9yVPBNpjXZdzyUJU2kzfpWZ9ad",
  "key11": "4MqebzChkA6RqbsHcCDAydDohBYfN9AqSxSb5Rqubhp22ikNQgawyFnSdtiiSVP7tLM8xLkms7FGjzF1p14T2aYu",
  "key12": "4W7cPnn6RUBe7Ngdy2tavweoEhCSjGh8y89cFJcQ1VjFBw2DL9hhyKLVsvujMs2pMSgdJc1pmhoXjSVvnMvZuMp8",
  "key13": "5TSLsaeeKCkjTWa9CjmJ1BVHDar4iDsidsLLCKiGGnr98AR1fYmmhAhf5x9JZDwRsKacwcLuPRUbTmWZzWmXnVfi",
  "key14": "2shRBb3aRwRDKyUZ3wYdwV1kM5k5svk9GFLwQryXZeNATGWSzUpzZbjxiyTCSgztXbq4gWNWC12Wkngsojgv3GHR",
  "key15": "3koNaH8PZhySZoqseJcjk9WVzsWTink5NihQNbojBoUzhrnC2cTRhoLHmst9bMMR3aykYCGNeRR6gp6PjZjSrvPu",
  "key16": "51Uq4f7JQcJH96Ds7LYgMns3cHZcCkZ6KfmDcmrHQ6Re4o9eKjCL8zakyk5z8dn65DT1Wt8thG4HJzDU5m6kZkq2",
  "key17": "2mQ3HQytNpspKBftYg6nRcNsJ7rhTNmzMvtqqMXforKSNVeKEWMwg257J2ZgaXBHWaXKdCx29pYNGUXuiBkQtjFN",
  "key18": "5hhfHHpRKXRmJ7q9pXFoxA5YC9MEgnakC9fDoTfAyiB1HmnoG9Sei3B8JRQG8cjmL1HMiwpt1RAuvn4FhqDDokm4",
  "key19": "R53Dg581WmZvVhRTDsU3JQTNVxeH5cZMeiWogUuuexppDeqp3XByHzctyTQgHVh7fYnNC3rdnAn1D4wf1Ykebhf",
  "key20": "4Ua5bY1zFxDLMm5occKnTwaPHf2oksdgXQ4n75C2UVFPsc3qt1tcwgTFgMX6WYZTyAe5A78vV4xX1MR2VQejrLNM",
  "key21": "3RC4RT7XuzuH1HPVkA62eu9kioZDsireoccWf7KLhfzJibqGdXDKdsECPyvAJ8GpA2sf3VXcAZw3c4FDNwtY7FvP",
  "key22": "WWpRBSruCdUFojzU1veYQ16cyQ31EnHeeurHjFpRbpFCi6aLxg8KG2g4xLcDpwq48j6rgiMDE3YUCGqvj4UKT6y",
  "key23": "5UbbRGKyxMrH96KFUT7AEcTcv5zgxoi969cqTEPmskapPPAxnDNRey8hW6qnoxDNNeLZRp2aZzbE53ZYmZcF3iSu",
  "key24": "5CkKxnp5m9BQeGbvZpgi2kicV7SnDf4xV23Yq46NU7rezbEYn6k98z4aurUVznqECGdKoa5A9yciLMgconWe4kxb",
  "key25": "3QkcL85m6iWjYr4J9wWdAQ32ZwCPxsvgk3r5EcY3F2QnF2Y55Gtb6M4NRDsLGbPahwN2M5d72XFQ17v9Xi73vuHQ",
  "key26": "5mY41vGge3zpxhnxx8KAEKog5TB9drpW4Fomhb8YcatyAdwRLcesTEwjngy7QA8qvEmibLga1AcTdFJ1vibpxDHm",
  "key27": "jFmrpTjpQpfuabt9j8Er6mS5GL3DE8xfdUeH6ANvjHQwS5u2hAV87RR7m1F6m1xLzQvVTuGzDpT8PqksFf3ix8v",
  "key28": "4GoJZ8nEUuCmS8zC8TphAYSUxUpkEyQ4rJLKLBWzvX9WF4FCbtANsEidmmxDtjeAJSG2SWwXQWqL3wb4WuViJrZe",
  "key29": "44dLhtm3Up8d6xwcnDAcLazcbGzZQQznVdkCRRFpNXBa8VAyR2an7aHv2UAhy84YATD53vT87H9qZiqzWmdSGuRU",
  "key30": "26SFBiNvkJ2yErvm1DvEnDs7GxaHSBzANu6wsFfmDC1L45QkWurj9Latrg41PtcD42tEUTdPbm4Xcc7cfBWsjWA9",
  "key31": "NrCZuwiLwPQKdgYNx8xspbk6bmKy8pVyCXZcer8XPjjqcPJbtW55tLMgpSFwsPsGHDsDtMePBW3R2xqYiYWXGCZ",
  "key32": "5HzVhNgDvSBpJLa3n5SdCpSKfSbx2dK7xVj7RGA5g31VfBKKz1rKAKNVtNW2TvKqDAvYQPTYjJdSJGHcSPQJUM8r",
  "key33": "5aBaF5fGYDw5mxchpL3vvGR1FQs6uC6GeTS7kptQxSrmpXY95YbLVSv4TgMbySXQW2xFyxwzRyCMKC19YzjUSCR8",
  "key34": "63PDSGRHY3F9KWdn6CVayCtq6doaV6x5nFiJAYrJwzLFWHKxe5iHCW2pt9qTwJzyyhZRn6yvTLy3bQ23SZue98Lo"
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
