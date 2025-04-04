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
    "2DHzDKUBUds7TXesbsoz1JGR3Sn5LrJaS5z69G4cyueoL1FgF518HSN84bAXSxv7i7Mwne3i1JfDXR4FRhYYYk9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgJt3wAzQ5xPMwyA8utFknQGc3A2MX3DdZ2TaXFTvJ8L1EiifAmFRtK1JWUH311PLmEiAKMUmqMH5SdhCupHaFH",
  "key1": "2NJVB4XPDqiVLytmYnmLEbFDEVpq6jPXCANee9octXK5SZxrvPcoRkAQkk7R1ibPf1haLAG6JYsp14EgwVeXHUL4",
  "key2": "5v1nKVseg9uJCiTDZKWmT2meGxwJe2giQSoyB7b7XH4SieBkkjX36PFfQLP8sL1rougrjxobCwkGE81YUymbNiCb",
  "key3": "LgoYtu8yJR2ih7PTJfMKGgio8nG2rBVfq1qHoVrHvsafAWthR4s1CMUHCbvsaqCPPadgAfws1VjiUxLyMnFx2Da",
  "key4": "3KUqAL77nuUj1kWqNazYdw25FmUmXWxJ3B8gg4r75mYtjixLDmLqSbx7nuE3qQDi23Y1eEgbMjCcvFbxWbKDtqiM",
  "key5": "4QRvWEPCBch8r5UWnhZyQ7n3cRGqDtqR853cY6gMDQeg4y3g9RufRRUFRerHP8j7yv7hYaM4TbN9s3L7PyhdNR9k",
  "key6": "4F8tQy95ax9qnymoWVMAjHLCv7A4vJwXNcTdTAq6Whm91Ye7n8vnLQbpzGyQaTXcWDBgfz6C9TFJPMFqP6K9FAjJ",
  "key7": "5bJCghNycbKS5AsNsVBRRX82rREbTtEHq1PmXLwCzieyJyWXwcK2i6ruA1MzJWJn8rYUSmCu3inC2JmpHb3XwCkU",
  "key8": "3DPyUjCRkPMBndam5UXDtbqwpSBCVse7TxAShBw6ZE9tJgZdSAJJDxH6J72Dh8rygqvN6aw4mkRrLfrSqVK3YXoz",
  "key9": "62kcczZcejpUwB2gM7nWaySeSVXQRxesLPkmM2PT2nQDdJ7VFgfwthoyCWTBrWND8w5TqUdfVY5XqFC18HwwGmGL",
  "key10": "2gocjUirUVWrzUUHymvLFJGJGgsLqqxwTGdyP71x42yenNGXd2sNHVKLUGAMoC9fyxFRWKXxJhmoUV37MzVQ9aou",
  "key11": "4PFRS98s55XWz4kiaqR1MvqXUmsGC2rvKfMQRZFJjYWpTedshP5YUqQyzkV2a5fAxt2Xsie1Qt5TtzTE2Cs3Tovt",
  "key12": "61a6CtZXgzXMLqAMEc5EGFjXzgFWez3KQbUx6qK9oCkS3eb1XsiNV2tpu5AodViuAzy2GjJzfCDTBnE9QQ37x6zC",
  "key13": "2V39hXw9CbM34YCNWEqtih7kos3e71Gfee4QnEuzBsC6ST3ZF2GKmyMWGjzGVzXSypXWxd9mAbugAi4zxJdkbjuY",
  "key14": "2D1oTGytY9tVLTPdyhd98e6rirbFx25ng92BW7ah91aGYrnkwRgugYtV7wdMckwUNBLV2u5KcqpzUscJDY5vnJmV",
  "key15": "3PoYPWLxCAf2ApZdumeTy1EAng7yjqvq8Mng5wRYiycxh1jJDZPzdVPrZ12D1435s7pew4ZiGKUA517M6th6byqb",
  "key16": "4VPJRy6YE43s2EjcNfzyFseEedDZhH11GwQeMbRYtYGF4b3eQDpM16PTDEewpJf5hMdhPTbn65yhpfWySSZTHoCH",
  "key17": "51BUTbNQ2tJWwHRCpnHqrjhXui9aAB1PNkGJEMtvavkP7WEJyAdTzi7zr46a1hYZ9hDib23fB9Wvh3byND6h32Dd",
  "key18": "4wGxe85PrYRRRVaxTRVtf3hK8NLo7dbErbL8ZHMRuk3aopYEfsqqHDhBn5gpLAqDUXLjejrV2XxKTzHwVrGBZ2k4",
  "key19": "3eEuZp7d5z5yuBkUWzg7LHwGfWaPTkmhajiXhg2X8qfTXPmLEEsYvdqs5sYwKTaMfVQK5Xb3PjJGcenZBfyj5mc1",
  "key20": "3mWVPe4RvGVQygYPVgkp9Vk8xbArU8hHS4CMsAATiaYzKmpvH4sUNZRzuhe9TstsnbYLQe4gyf3xovJsRtFNNhHa",
  "key21": "539G1Q4NEyKGpPsLpKgvG9HFL8w6eZ3qh3Tqi7FRyAgr1GLCotFBSNKwXr8aititRff39zY2HvZHaxm1crf9D5RA",
  "key22": "4UBPFTjJv9YLxzpWccLGpnT5Bf6ZKPkn5yNCMCbCeUvhYRUxwR1dv7LK4uVEPXuTwHKuMA7FYBeUGNxTKhYwgUVd",
  "key23": "46umwTF9xAWUjtrH5uqyyKjE6BFtHtShyGiE7gReV3kT9UYgcaRmY29GQFhK4qJmfiwTRKMj6nFDuo8T7WzPCnXQ",
  "key24": "29TjXnxwGjmGDFszpUQ6a7WAqrRNY7eFRdRaKkmjN7LMjKuUUuzKSSQdH9XzBiQ29rTv8qLX2hsAkqRLTCg7V4PC",
  "key25": "2WoNz1v1r7vim4uXt6aKXRT7TmXRX9LWrkcZmm3qMfSVzsoyAK3hMC24A7KHWEMC11a6jsS28WM3jTJu8esGxxco",
  "key26": "eA5zB7H4r2mLCSTahratxt47HUqMKcw8NuubgaUrQ1Rs9hsJHYUsvVft6NpYVpErPZde17nMcr5CNA4aqRD5s78",
  "key27": "8WgdMmNKXkdy9pUx5PZLxWtHSPpn7jZk4aEu68RoC29RhpaHUvfCmEoWMqftWnE5o2SAyo6VhPjt8PNoAyQZgKS",
  "key28": "42U3XthUmgyeAhgK459Pj2tHX1ee2HfubKQpVCBGGg8gmESrCeDBXBQMwCpz58MM5ckKsHghW6qgd5Kz5LzrHkYe",
  "key29": "wiKa4tmSfJDDRMqpey9FeoFv19modgoubAoNCobreeQUPeCoaAUkfAf6E9xVTW9qSjDSVo8h4xij32YWwt2WzdP"
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
