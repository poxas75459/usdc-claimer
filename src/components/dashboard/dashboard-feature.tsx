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
    "4Lh7mQsme88sBegt2yuUQ3djerkNanK6PmzipjZzh64sqLTwuHgu3eNTD49JHqrADjj8ZVDWagMnXu4Dm7Leqqqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HQYDttaE6dqU8rX6u1AbAQN9i9QNAac8hSaQ9Xj3zV9LhBkiPW6wGW5ZzYq8XDZQrLdXaWA4LfPR1NwFVDd3jt",
  "key1": "4p5YQTxrrCF8exxo2XPiniRKcGT9dYHyTxctA1fUmz8wo4SiAADbhAq81zRK9McTGe96zhFjbaxdXgQnwowqwN6G",
  "key2": "v9zQGYeX8vzesELXdHRFfdfpxfDzTHaRKRCvoNDvbsZ3JgZvgUAEix8j2BUnkxoFu9Sab8v8iwYTmzh9R3EgauD",
  "key3": "2K444fmdRZFSL5YLQJwFePhsbpz6RbN6s4eGtf2AreRJ4GqaC1zJG98vF3QxjNGeGiJehVqHtNsDZYMNMBotaNc2",
  "key4": "54xSDgF7kxmZF9skyh4RrWisfkKPsrdo4tWjo81qv1qY8ayAjTD7TpjsLTuABQDo7rys6gTy7Y34brGjtEiyjGMZ",
  "key5": "3T6XrP7fKgRyzM6bYk3UojBotUiDRFYk9tCYw7ifKCiLW2ks1Ef35VsB7RovVBNTzpLykA5E5b1X4sMMBhGr9sct",
  "key6": "4TLm8fWRhTArkXyPohzocPDby4omUYTfcu8b544Zv6M9FVJJXgX1NarnW6gYvPzvGkuUJpuWbMZAN6xqzBs9qvbR",
  "key7": "4Ec3WXZjEpPm8amo4ZMUBafapy7NpUHGvyJUnmsPibvpNMePX56bxuRaFW1zWt1sLE5cftxn2dyR6ToagNRzF9gd",
  "key8": "5wrXoF1dXZcx1piD3m3S3ALRTEzTf87jHEPe8JL8V2jD6k2Wqo1X5Xe3Dj2CErfq96kheEaSsNbYchztN8XP25nk",
  "key9": "43aLcD4781YeGwityPBZ85ZVWtKmgMi8TVeGmMegiLoeCUHNmYxVUazVq3Tr7BSVZdcKr9u4MmQ9nMZyR9r1aBvV",
  "key10": "5rsmmk6GWu3Phju68ty11FadwLq1DJETeK6M2MYYuPT84bFdiCJBVygyfGzmDPZJyf1Yu2XxUTHZHNUsZNZjmezS",
  "key11": "4NTT7DTJQZ33iSvNbTUo5MbjLhucV95Uysp1f7qQXQHwXWUqxNopCKNQya8byBofU3CD6LrCaJfzRQxubB7CAxYo",
  "key12": "5ruivKfn4HR6Sahssdfzp3Nin7zzyArVeVp4qmJHFXpgLEx2fr6PwiGNhW598A1vQh5dNzKGsemMZdtxUCBiVueN",
  "key13": "2ZpAv2EvoTWp6mFBcGT1b1QGBuTMBkFV3GGXcWppMZW2mPdzSy4EWtZuYyqtvgGyfPCr9YpuKPoKB8GkQHx4FkZu",
  "key14": "5Rbjz5gwueh4JdaiHMvF7w4FComuwxg2ECXMaxci36abZUfCmfXSyuK5DSybqMEbv7x4FQYPQBt5kKcox1uK4Vbd",
  "key15": "2kjedt9W2TH69N7MV4qLeEfYXMscXv4eaU5EQh2RComR6KVYSQoUsb33TSGBZLXoPcUxaf78j9E8Yni7zioY2Aqg",
  "key16": "3roQ7dkthiP3nWTJxRb13hPG1K3XJidKL1bcDBdQci1hgZzGsujw2UnQMHefYmZd3g4uKhoU4GU9TSaoeu2UpbmK",
  "key17": "2hjnMeupBXX7DfTZ1ezqT2Za9kzMZ2bfFAhQXMMUWAuozU9EM3t95xF6o4G2R2JLdnFDThPNvEzkejh4PZwmwtak",
  "key18": "5SM5PBRSciUtVU1H3ApRidzxxfPGnPggpbuN9ou7p3nDhmgqLh9R8fr3qKQu3UzULzERf6hqdy7v436GDqtowMDt",
  "key19": "5bDx3CRr8gA9xJPoeTLWbgKL34oHzXbadEQk4mEtY3PFAywrMANRdz6K7o8GppjZibaRc2UBDRLqXBQLK1WF48Rh",
  "key20": "2sJBjAZHrfpX1AKGZNViZtDoAXbdKCe7LiBNuDoixzjYMqEWfSFcfV1hGXq1NvXGmJ4Ez7SXdmiZsq6UhV7PsEFV",
  "key21": "iFgyk6kA7AfMc37HBBjhzuQGxCdhLPyujDpMhqEoZEW6yK7UWAT7YhhtGoB9xWAopgjXk5veXkEXiAwN1QhL1Mu",
  "key22": "bBLM8fsjLaR6xTmyUFr7H6U1hzQtAaQAqWnRzcUjTCBdeLMqvJTuHXR55YSLDnEaHFupQAvgPmFrwMfHGEijKAP",
  "key23": "2X37z1AX2Mxac1SPtkHbyuauR2XVCH8mJdfBh8UnxfG9ZqnEp6SFjArk4TMDY1z7imE3F1cZojAcrwMSto8bnVoa",
  "key24": "3AVcpGt32jyzdo4H1cAzefpiDaNWYH4ymbYfuC3cM4UpUjamhP6SpFnLYk3DhczuzwvVsqY5AFr6FF9oX1U2h2Yi",
  "key25": "3LMvvLvQib8ssMyN3PySwqWY1jn4emrzzg7Wnk1zHqXU6BrDB7F8b7LTKdfsPNDyBWt8yoNcSuxyZ93jQrXCBFtu",
  "key26": "3TR4PaYaBSUixy5nwCkAaY8PcLXhiGyrj3d9yCZ5tb7h5deUbkCyJE6Axf8fk44Ts1xaFob79Vq4QmCRvDAgYHiE",
  "key27": "3NdGhk5v5p5m3RAeH2eDmyrXYPYL7vddE7i4XZvNseRXY5RsB4v4XjMULqbmPnUnRghR3Wo6VDFUY8FG5tcGd4E",
  "key28": "3WKi2d3HyZ5QkAGKXc3qQ3ki3Q6MM5SkmDJXVqF56mUGN95co1dW8K4Myqq1a7HpYppkRgMV5i8PJxb6kX7AY3A3",
  "key29": "Gb7RPDeFQpTAkyzYP77znFoRibtBKjq26uNqHY1UxhfEGVtsGED95QZvbfDwwgBawa2USfz89sa1cdWpogmBzyt",
  "key30": "62PjoMvUQdGXWFA9jVYrkUNXNSVjjnWzJfUghfJd6AxVSGbz2fyEo5bzPXcE4zyVrQqqen189uQRsXakVxciB5Nv",
  "key31": "4QF7duTncyLJS59koTQYCESUZsgZ8NeowvoAk7iBXedJKfmHQBC7hkEjekyRg71stMJsoVPTQNtua4maiTCqqPnC",
  "key32": "4GMPjaJGLDhctrS2Ra95Xs7HB3Rn28FkJTfvuYb2KRiTCDR4twmghydJegkM3RHQpN4d5MP2SFY1M4w2cFosM5gs",
  "key33": "2LAPUx1CM41W1CpjcZtXXqJ9Z1sboM9xMy4RyGXqm9u3TqaRBrJQZJxv3G9WjnKauSoh6FMq32fwUM5rodmMRYEJ",
  "key34": "5gq87QvJyoqPkbqmUek4BERrW9SK3wMWSsf1wp5YEFkjRfSBTg59jqDm8YmD4hVGRr1cpHv7UTeajJm4RPxmwbbb",
  "key35": "4c75ke233FLJnDfZ7h2SH8Ri5Vq71kVa2VCyANs3yYX9QdTDUs4TCvUp8FR5mzdCp76dNyEKC65w3CTVeeVNVBSC",
  "key36": "66yUtNchZTtQgc3QCFb7iLQ4KdhnqyUqigJVew8sFEgPBdaPDdAanMw22M6L5TkJx4jDQfyWfrkSNnnQp2sfPtQt",
  "key37": "4qwhJAvypb4SiyLCvcTRsu92FL5ixtLuZjzYdyZT9yUs2xyn4HXrArT1TAwb2uwRjU87EDgaurAxSV2GP4JL5ay4",
  "key38": "2LVUXEiQKPkBZFmXr3Q4SUwKvEy6hRuyA8DpuHm76e6Vx3eWqy4M79yunifqMRQQ5pyKJ9iRVgg5ci85pEFTc1cu",
  "key39": "i5i28PydmB5A3KbzrdcXWYvpSCEiJgDmbaidWgMkEWndZE311qiiVSPVY19FDa4BvP9RyY6Six5WBCDW7JBY3L4",
  "key40": "kFzcQXjFvHCh8eHeohXdQasmEvwK7G2HCcqBEYhWXpjG6nA2Ab1GfHRbzWZMMNdY1upBUBeZnqwwudoFquGnbuB",
  "key41": "5ARaLzgGnfVXNCxKgmUdHbEeGBsPkwuH9928THFsoi4PWJL7bzya26B3VoxP7NietGLbRhZ8Ne2zZcJ89iAvF4A2"
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
