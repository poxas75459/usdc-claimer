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
    "3VZTe6kZFFxw5c43xS6M6wh8RLWKwmybwX6YHrnmancTRvvVnmkKx8HJ5wr8tRzrUDv9NQg9unXMKgFt83Dw8hFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAtA82atkqiVWiEHPyX1LPCG5hC2m4ykbPXAziWhjBoC9stJLDrdFKK3f9MiYDDqPP8mHUPqxhSQQEcSXfCs9fc",
  "key1": "4MhUahgG52t9mosFtMYHSsgRsQYVVYQ76eB1eS3PbFkxUUe4BD8WC3UKfFinJfcJ7EqWUurZjZxqHwbXkWXnLPve",
  "key2": "5Pm8Byarsft1uG4XfNU8yTM25XbvQ13rLCiPMAPQtda4hcU5PwHLSK1siuWanxwpKNwKuLwcLPcTpmmF16LPtamh",
  "key3": "2gsTxT6uB75dBubJzy4BMRcoyD6rocHGdVdtbpefTaqcqZ5DuschyJvmTmw8fcau1TtqNeBioAfGu31PYrAzGE5f",
  "key4": "62gLAmun2b868UkkpPHYkZoabbhKy4M7mGUYUaDDpuwQCqqT2djEfA3FYQU5KEvFWvFCYmGoGttT3Tx85diD3b2",
  "key5": "61THhPFGreaZR9SN5sVBRefJUpzGPBLQ162PBNapiQDR28po68s8P6RZS5Q2qvW2m8MT3Mc7kZGtJvdsxNVvd4wH",
  "key6": "WvQUXqBx2TasgUgjMQkG55NcFGX2NkPfC3c4eLMQrCiZDqvbBnz4knMGJMhi4meHQxTKSGGHrJo1MZXA3Xc6AVQ",
  "key7": "3wmuGDxo7M6mVVunv89eACCPi8vHLfiQ98UBs1BwZS4i7pioQHbwJ5dmGjt2AsjYYV9kttz33zzZs9sejR7pZv6z",
  "key8": "485m9mDuc6v7e8isWLagVcmAjck1oBLTWFLcgM14XfsXMuCKqV7ZXAnUsh6cjuZupxMy4QG9nkaqoQqdgPqTWuiQ",
  "key9": "48QDp7AzcyahWXY5UKUAcNvTkW44CGRnDcoxPfZjy1zZqmJqrR9p36kQXWPpyd57jfTHP7xP3J8atZJJYQcYHff4",
  "key10": "3G6S73gCwc9ZkLhLvp44VfJb7zHY8bDpeUQyqciLWwTr3LCxEAT6Ji5M4TyKkCEEsesKQ6odnNPf1dXG2dmnqWP",
  "key11": "sp34GmnHDVjpewc6s3CmkncGBPkC1R5pzDAhaLDZCjFET1ZTGfu1MgiKXYhicAYvCiCa7BZCKq6DmuY6iNnZer9",
  "key12": "3woBgvvDRDxYmmiBeSAkfHsxk1V9i4cy4yPQ7F9TwYTpXTCHcLKuSeC9x3udFJoid39MmyW2fJUMGTqbgSYQFPX1",
  "key13": "5i68AsxaeEBfZkddfJKWS7rWPpbiVaMotVbTPxmHejN8pK6h7A3SARcPKCSuCN1k9QybrAJzQA1LSkcWvA52DWQS",
  "key14": "63zTrmvH31C8xkBsMhKxgSDmsTe4vjc9CVXz15zRV4HmEt6YX3H5VJ7cSEEPyiQBX1fVza2rbL5GJvdBqcLBTCrY",
  "key15": "4ij55hPsreAhzGyu3YR2x3wMVLkwjV81Y9s84Gnjk6YvKQwUgWhH783whtGn9DpdLt6zFNHQ4EKVrzYLWMuZBiAR",
  "key16": "2xbskdyQe8vhJNccR8mJTrvKJH1SVDAS3xZGEvtG83qhxQufu9955UdeGEnQmwQxTarCp2K95PZHS6ifnSCCrxj",
  "key17": "2mYtC3vTnzZjfhQkYp5jMNHiAffQj8d1eskdJDJBicbSDnFUCa29ZKGMS1vmaXusfbwheLNmDAyEaUmuoAdGirBK",
  "key18": "3Civ2aMBet6f6WnHJ7Jo4kzETWkyBUsoAthym7KfARRRAd8wZDby5xzjYTrErgvws45v5cskKzgGRc6qJPWcLqVT",
  "key19": "2nkxho2ZRuNe2cynZCjRMwtSigjyuz5kgwRsvwxs8gX5aj24smQUwpdSPamrgDT29oV8xEoYH33Afs1y8D345kwT",
  "key20": "25watb5kmbNdeNn7DTw5X5DiiwCvCRGo2QwKD61dHCGpmDrCXmoH61k49w6AtiyR4BkVpn7TZiC9sVXANqKqwvsa",
  "key21": "5DWnVRUB6ETTp5Qfiaw8bgqayzbtCRPPZMNhHAZKpgoZDHDBf5h4RcwSZJ5tk9b7JBWFdmxK3gChzz9JBJpB1N3V",
  "key22": "2LbZ3YePAv4Ccvjf11pG6REek94k67ek6UehWh1uyBKdVaGPC1gc3hsg4r9MM1TFQxycq5c7d78muC833xdwSpok",
  "key23": "4r9wqeVMJsadeVZZmsfzPXpDownnnqYd5KBsXwZExXWgZEnDZdQoAsfFYgPu78W8o8i8tMK5M81gYj34bgKPq33c",
  "key24": "2Y8vx7zb4tJTyjGWjTttKMvG6579u56sbaSM3Uc1fVrK4BUMLGFeQagR7m1yj5WRQU3f4PvUEGv9tCrRDhUU5iZN",
  "key25": "3u1i4JnL7HbcNpHS5NADoicH4zRbx4LjBuztd7F7LT4ZvgDqfdY3zS6WJjj8NbRcTKHWZbm6tH9XU9P4YS9aNQVX",
  "key26": "g2hi4W6oTH3e5HXSS3oNNYQNdrnZzt4QKwX2DNNT5vAjqu9HMRXm6bN4XnFDtoddkp7WnsapFcoUkwQQoE2RfM8",
  "key27": "kt2N44DP54EYRXbh7tsfCbAkRkxxErVexW7p3SyxyNci7o23H5gywHG6Mdzi6FuRC17PihfVPNftv1soPtADEct",
  "key28": "2iBWdG2QX1JxX9krwWKL2J8LXKb6XTRA4E5nGGHpsDAkafNWTJzv7TVM4zPpmzZXUnEaH9jnkv9f52nwd79unSKu",
  "key29": "4JfYK2pfh4f77RVzUdbftXNKV3NvCxLwCQo9RTb9w6Yjmsx4iTHs2wxFvfaP7UU7SmZ1XGe5qGyfzDDTdfyxCs4a",
  "key30": "3yTys4zQDGrc5WHPdHqu21Z6CEKMZrK2dU1oLnWo9Lsfhy8sMPGhAndzAAMdchJuUtdbBCJAB1Nezbfv19wJR7Qb",
  "key31": "5yXQgJn2KvaSVNh2Q3R1RyurPTFnDHH5tYNUQYtEykJTSdXMP3ttrfmQR9gSVEN6NT9Q8sW2gWnY423eN6Yszqf8",
  "key32": "5Dy2xsCWpztQtVHYQULu7jFRgVnv9WbNg96YZ7PBktGbpZ3ihoTuqj6yLQMQHguSWoAkeWjEMHWHDQQjctuRd7zF",
  "key33": "PMcEpBBFVLMMDYdsatP8rHRQufR14kjsTvN7ESmTErKgaWroHdszddNHipSAtyWYumY7jSFXNB3Y7HEGdRgm5cE",
  "key34": "4bsZ3mGpdct2osAenSUUjckae5TjHxc4vUJAuEQegMmC5obk9vRhLNVMnRDoxqzpimCjdk9aNnmH3xZu69kPzqSa",
  "key35": "3AYZaqHmk9vVXyMdkFUBFe3rTQd4AeAMmct7rA5EZUjnEcB4DLUMfhfHMG2BNjBJR8GR2BCu1h6t5Qsiv6bUTPYu",
  "key36": "r5xa7GQ2qShMCkfT9kKXwLADQJiwRwwJbWm82XAK7fHLfwYeqLxTrzBxuQNtPNPGjqg39NRLgpv415y9wmagkPf",
  "key37": "2kuVGBcib1ndVsMRtepKGZgp7egochCdb5iwAgCmgu4n5EcdKrivCqUSF5cvQKQibN4ygUL4YtNrqDGWz6qmJpss",
  "key38": "2Fa8bTvNioR64ntK6nHWEWsT8onLWh7NuWKZa2LME2xWcQTys3jSBeQEbHNGMShL6AJzRmrTvP2uaR791ACRtjQG",
  "key39": "38qnd2XfvwqSQh6nKowyzcnvYbwcYsEW1SMUA5VbhmeR8BRALoS74f1g4ZQXQVZLTTL4gvaq3WDMp39bpWaDTwFp",
  "key40": "3BUScw7apNpiyDz6DJnF2sJdgqe4j3kWx3segMq4yjeYzFSj7wgDUTjGpwDtUPJULW2JEQ3f1AQhVZtDj7ke2iSq",
  "key41": "rZQqwdgJAVwzZPwLnXaKazHDpoMpe59XZK2mc1uWb7N3B4T8cwr92jv4Jtk5G9MKV5z9KdNjUF4CAC3FobCgAsF",
  "key42": "289ajwAqpuxa7ptVBidh2BQuNyrCrYLEZprTRoF7t5UrXTWxKZsTWxmZWka82BwotGXdHdkTccCrMZpqxrGfd6ps",
  "key43": "2qEkPkudy1r1mV3zSLjB1Z5RXZPfSn17VsPdNeDE4yaoAa5iqLCGjATf9wAJt6GTyAaYRAWFrss22gZaUsq8hLBg",
  "key44": "4rebuhHDjZ3iCW1JSfZPJutjxkgBeipd6eabvmkzqQqHfEisEvu8bfrixxgqpEmJAok83XbajXY4MQq481T5fTVv",
  "key45": "5oPcZvyKj7uVSzywqGu6a54eeprqVWCKPS8qkZYQXtYBGjAyEiEYTG1eYdSvCjJf85bz6aF6kH2ZRsBMeG7sK9p5"
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
