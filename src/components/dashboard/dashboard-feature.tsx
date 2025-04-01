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
    "3uSb1RRikgL5uNAH8wN28cAia17EEL5WvSVFiiFjYgReSmR8GBTPdC7pVaK3QnX7ZwY7yADFD9gtJZvahUQgr338"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsEuyv3HacjqvppY2u6cnzhE76gUb7utyPYRNoMkMohcYBEYjpBUZA6A8yoSXDm2G7jZVny3BEr2Aku1Seqs4ME",
  "key1": "3YVyKznHNKxDrKXtC9nmVwLcp7e11cWxXGsJdA2uhCcC3wMHpuEqMkAt3GaayrMiPSDCxu2K4J3vYgfDfKWVuAH4",
  "key2": "3bV7mfsKH8oi8D8x1etwdGZrDGZrVTMGqhdwRGRLuqDfxG2BEpTwve8E6bEAs6Ks4k261fQGWuQVcmSkfpEVFwns",
  "key3": "2N44RhxctNqpAa8rmJBDFsekm4Ac6BCHDViNHrETtVArQUeazKKjAi9D46sjnskTZdqz8YhosLcn9587kXCsz1GJ",
  "key4": "2UmG2t7Wic6uCRuPL14CFB98eEBK5S7W9p8K2EALcnpfZX8fn6n1bL4XBrvDcRMq5WXhRcUm7bxRWUVAUqLQJ6Lv",
  "key5": "3e58tZFckwVjy4sShKbdSBSRPMuLDJcCbUH5u1zXykpqYUVMVXPa9cGPYLPVnD4WhsPt1sRHF36Qgp8PVcvURMEC",
  "key6": "3AQNNxTy2ygWihe7Ber83qesPRsY8bPB5u4YQrej5JAcbrF8Nfma3SPe5FGHBLLaxoYRppT7bhUJJDQ7FkGJTMky",
  "key7": "2SSSi3MY1VmuqwKv4BLEoZi7tN2aSLcj2XxbT2MruXbY4pSnr63vN8jXGWzuMNfZFiy4rwVGVAsQMsPHApBPPXBX",
  "key8": "5C9UHhZ1ydMJpusYo7Rn8KBUpimyHEAN6YEnuWDsvW4fysTC6ZkRtyvb7FrHeFgUjLGDbeoHamABwxZ6PamPoTH7",
  "key9": "4MYY1oap93cC7xtd7g4GrpQWyrkg6YVND9MbMrUdSdWYbX5Zby4oCguKAiHWAbzm8sFyBUNYarDK26u7M5sQVYNh",
  "key10": "3ET3ZKPRXbd8FvfNKmUtHS1f3UmScxdoAk33qGEcwveL9daGn8GfBQoygt92fTv16AoZ2ex9LXFZNe1bvMwrs9cG",
  "key11": "D4rcMAkY8vC4RfVV9GNMcSUczuE9gXdNjpGmzrWbNYrYnzfw6XGyvKN2NzhXoPttPyKQGEuDJ24aPoZFxNESqhZ",
  "key12": "5m1fe5gtsPXA9UoxpNTRzzNG7vrcMyUq38ZYW2G6GDATw1D5QAFuG2Pbb2b4tzdobSZgz3vvdUvpeN785rYeY38T",
  "key13": "2tnyjNr2qsZvASFeBqP3fRWnC8QiMEHLCQci9qLoR7DQoXo1h1isrCdcKNtQVRkL59PW2XCTPQ8BfHDM3S95eNPu",
  "key14": "UBaqR8J1ehiFYbFaQp39xZLMu3Q28JP8qosX3p2xd2T5DJZ4nRMhPZ8y2xzFJmdyMtzHbv3c9EwrLPQdp1JXA61",
  "key15": "KzjQx51mRFDStXsj4r6ZRafuukdF4QEtqSPpPjwHzAmQ5ghuGqki7ntqszkenNp1EmGUA4W8xAC2Djuk3k5WS9Z",
  "key16": "3GPTza75tssLVPBMZGrdoKmk1XGKT6wGqV2rbwcK2i8gnmSJD3izwnAhLxj4Sftv7kQ9B4Gd7E5T6bK7H2QMuEvf",
  "key17": "2J15acXFwDf3RobPCC8GJ3gxjvC1Rwt2kQdYAsYg4tswaPUzkvKymChPm8gH5LsRAeqn8uN5mbjcx39YjqgpiqNU",
  "key18": "4HYwi3NQMbkRwJtQVm75LmYSjpSq82ED6ygeMUASu35fV5oYw3zysteMZ1BhSvssLCofuLnk2rzGwaU2s22A4JFj",
  "key19": "4EKa5A4TeC5WtPbPwPCHgBE5w2XqhUKbd4yr1to7vG8MR86d4C33fH8PS5WL9jgN2EwNn6TTcS8RQXsgPGmoc2sG",
  "key20": "26y83Nw5F4iQuovcyN6wYw997RYkfPsursgFQjzCR4MXwyDzxVDwvUWjW3tZDNSd61dApeA2fQRGDRsMdkwbbsUU",
  "key21": "2dfBxUst9cpHsBb53pwKZiMKUdGntoaw8gpzC7g25TPXrNedToeK1Np86bYkXev6AQqYa1PbfGfMV3DLvBcoTmEG",
  "key22": "4N8uda6iw5dtpymhxYGFZ8ddu5i9Bt52xYnFNMujZT4djtJXRC9f3t2WV9p1rqfUMTmDthNgAg1MeSWJV3XQ4Duy",
  "key23": "5rDSmrSBF9UjDW3t2N3UKN6SyK2TEG3k8CysbPb8R4xcycFonnkgurYh8RT37UPekU8vP1vHJh1RdxS6abNb2fEp",
  "key24": "2VUUnMbtH4V3tUyUGhNK2ZQdZH5h3KDrKBpn3ccpELxZdNXUmBKZkvZbHnSgZTx2cNLGfKfQZp1SpsCZAbi1Fc4j",
  "key25": "37iCMinn96KWiAcBKPABWFijQqjGT9DqEyAmC6JgevBZj6XiiBb554odqbYuhxhRnFYTCoAGr1xVwszyoRqWuGXg",
  "key26": "5H384YwMCA49kyr7N2FQ3tYXti1xwVnYz4CBYSmgMNDhGSxdMgZXw9g7mUEHXG148YwF4UWgDbd452bY6uFTj5t3",
  "key27": "2GZ61WoqJ91A2uSEKr9fGnuUwFSMxp5gFdc4913KASJp57sfvwKYqwWhpjpwLwjKE7YEQ9uyDy1ZtFdEPuZGrYtr",
  "key28": "oXRR1ECkniAFe6fdji7SNDCXPuszywT2c5BaD572ZsNk1Ft52VRgkg1CkKLannXje32JzAGcbwwH1E6PsRnrBTM",
  "key29": "5tJ9QyZKLF2DeXm8bH6DjodZfNDUTPfTvX5d5t2GQqiVdUQWAciQsaEPRUv1YwbYdJDPqFeJZ6rJ1pzLDM3By3ki",
  "key30": "29Bsk4xDyWE7NreN8mfxq7dGfRqn45iYTHsxW1jdGaDEdDGnt7ZozbQmCAmyseruXJyGH6cGKhfv7gRAM6ZyQ8Lh",
  "key31": "4FqQVMpAL8PPUAU5SLuP5NSSybTskcMCBjyQDbYsyUNkyY3nxTBKyUPC4FesSCjNaen2yrPSiPEHBAdo8a8kMgDR",
  "key32": "4pwxttvA3GVYneGHpMnuNXM4Ujgu9DHvspEJrMdSoRNrVbBCAQJfgVmzFcZQp4nAr5r8EDve1TxaydZe7bAtyHac",
  "key33": "4TdwtdY94irE8KVdEoo8YZvGQx2GfkKR33BdwEDTfEwyKeCBr2cCsdJZibCKq6Yn6Qp34ywqGEKJdUdZeXuQUuU2",
  "key34": "RfCmAET1eAak7aU21VBXJeCf6m4QJ9VXMjFhonNwsP51GFHCwtqY5vm1C5mf2AmmHnh5WZxnH68ULWtfRcHNVMi",
  "key35": "4c4DbowrX7u1U67KxSuDDZx3eGpGi3N1DX1BfpDYMoNxEg2BfkVeUgw4iL53UddhxkJvDvn2HK67VSyfMKpMEnhK",
  "key36": "4Nar5H3VinWAhCbNDidqEm8dVV7bdAzyCqfvn64uM2zXJ5P5LfACbMsjdiVuxLVJYYvoSPe1n6K4ah6bBFueJqa8",
  "key37": "32i7p4dqb25HM9yfK6D9U3kABgMZvntppP4DyjWyYgyTk8Jd1b44WEcYA2FQqUqFTHuTLHWXXxQiURR4EUrLg1A3",
  "key38": "5wWnzXEsseP5MGCm5TVxpTE4GRFzqwmT8AnBPyQbP35Nhupw8XcgL6jCa3g3UZuSKbpYveyJSggRNEqZeGWqwkjZ",
  "key39": "5yVVtR2PDs9q9zR9sN6ChJGM2iCuSGGHtjTuDzLciuonza5T3xiSZvr9VqkXLZwv5bbVnmkJx8MgjMgsZEPuoLF3",
  "key40": "3xnA1nAu6S86crUhX59EXhVcX2FfyYnbkWb59SjuZwWbcGkMrvWHvfmrAdB1fqWJkPxFRncFWQvP5zpxf3gk4d6o",
  "key41": "3i2rZjX5enD5LPoJ9Ymf59yXnY3VFj1XXGpGu2K3DyzAwJ63BZjU21VgQwJkw9d543h6Scbgv2s2na3VQnHbmitt",
  "key42": "5vHT3wXGWM75LEHiZCACyaZtzmLjiHf2Qr46VgZ21wQY6kVVv9hXT5BhECiVAtv56tDtXw2vPZ32Xcu3X5U9aPGG"
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
