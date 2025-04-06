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
    "5byVvCcwt5Bx7NtRz6nrzEa8s9TEs8gZ3fEUSkWbbjYEk7sED5xq9E4N1C5DvGM1iSHT9hjC26engsk3bXuruVTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qigS5dHHVRADcRMotHb9YDLikKHKGdXaUMEWv1QvFGh2wb8HBfskdi7cnJ9s6jprj8YBX7inAoH6aEv7zUKw1WG",
  "key1": "2ww1oTQh8T5THs7hrTakCbNcYBP8KNSxfpGsxF4iP9w5h9bCSN93RZtKzChnuB5CKPwHvbKa4bKupaFWyQhb4Kei",
  "key2": "48nTCJBaPihxJr42HKQAcJyzXtaemefrrLqWxB66bSJUaVKgcgLYa8biTAD8a9ZphAJdCXQL84BZw84G81x3c8oz",
  "key3": "3V3nKwusvdFzRch9feNyEFKDQaVkFZj7aCT8cCkNk1xAYaRKWTzsL4Z7ZeDWfuqfzSrJ1Ux6Xppwr9QmGE5QoBbs",
  "key4": "4r6qjAokC9QoQmvAtmeGmnGYB5cTvirc71c1uKUaBvYhA2Ypr64wsj91mWQTWYHFA9HqiK9KMzzVhBzs3BxKLhdz",
  "key5": "35YzmMBDRobi63xkEPPL2TEZuekiDa1zHBVgq2cVt7c2U33jr7s5kvCjWnZnwKVo9LVW7yG9ZkUUqLcdQsPBXAzp",
  "key6": "FLcyegNJrrw1esZP5jcFnauMdmzY45o5uQHn5gX95L4TrwKiLyr92yedXYhE6UFrfxjnmYHJQwGLER5iQmyWdHk",
  "key7": "dxd6vYfi7DB5QB68gowbAALrDkz3QyMTDimiYkPnBzUKG3mVcfzUEfoJ9dufL9sna8cUARX3Wcw8dRkXojz8xDs",
  "key8": "4H44DPPcuxVjVAXo9zz2a9UBjyQe6XX5yhQhtkzt7pfw9oME7qSfHwroLsFvYjRyhEVRKBdFLTDS8sovwH4YUPbY",
  "key9": "4zNJFHHmNmrZECBRGY7Fm2Yz9gjNRoZeQmrihYQTq3bE64c4fzxPp5AnaB3DXv3gebihQ2XzNs9g7J8A64S1Gorg",
  "key10": "4jbCd3BsxULmPtSJriV33CVVXXu9jMHZgMYR5cA5CDPbkeor1ZXp1XjygX4gf6jKp4bDtyFGoFUFN2JC7e5CnsgJ",
  "key11": "4VecjDgh2Kw4GhsEDCS5iByuSbJKEQ5QXUCsgcMMq2QopZAEFCnRcpVwCkWHNwUtqE9tW57XmKaNCW6nqMsSvpr1",
  "key12": "4uNRnBxu1nbRtpGdYDLGob9ceUDxdAd22cigrpkG542voxxtzX5LmUcnCwGcfscoYkVMBLyCa3kYckVarufvCvnk",
  "key13": "3QGPgqbjZduRciFnwMNFE2EQkCnEdqvDVKVu1fMDRJxTBQA1j2MBz1x9H4k5jUiPsXoufX43osx2mcHAPrKow9pb",
  "key14": "5zBzgSQ7hnRJKD3QKcpdfzfwaTCeBUuGteuWt1Wj78XPCDnrPoQKabQUgmSY54dJABiubor2NebKgQ3g6m1abA3s",
  "key15": "349czjN5bPMafjg8cApLbZKSBJBKcayzGz658QfEY8dLyyNmbZvRDKWEMz3BfDyecY5EyGtb6LdbfKL5rLAMyt8J",
  "key16": "Nj9bPkKMnQBSaeyuimFYEQvBFXjYMeJXU22UDeNaYzyjEWDjCDjv1F4mssL2XtTknUWzTDficQB9QvWK5tVH9LJ",
  "key17": "3ULGoeKRWHqbxChr9Tx8NtemQxn4RV2FwFhZpLygGdmXYe9cPfRrxyrx4M17JZqMUfHPSRDtm37Q65crwdYfJDpq",
  "key18": "LEk6BqPr3jPVCoUbBvBLwfcKUYSzStqoZrdGkutub3joND8kfqQMv9Han16jLZWtZqGSUzL4nfW6wozrahE9Xbb",
  "key19": "39hmCDfmmoxCEkcS5dGvxBZCkUwCkRszKoUV2vaacdC1AUtw19a7WnpGPj35DESvKG6Aigfu9gf3pJvnUfywvKah",
  "key20": "3pph3t1SvCQB76Twv3hTxPGvmWFMTfskohZVaKTuZy5ctWevTGkSpsMkqSeSLbnRR1KbuVKdBSRn2XgC6xjBZaWz",
  "key21": "tr4fG85nnoW2X5E3atbFeiKec2r2pncmELENUCQtFKVppFGsiAsccj5QdMxHrzn99V8CRGabNxKQapZL4SCe6NN",
  "key22": "3PjKVGzCTowEA9bnQsCNAoErWH7SkeZbc5rgk1UB2Pq18Py1dtUv2irER2EAEnroUXbVbk4BQMqe7wyMRGgVFuhb",
  "key23": "27ENktsmhNB367FtJYWFTLE1gATNMAEeEmWtom1Z4bWDXBCmKnaQ5skpvxLAGieUDbGg1xDppHPjVfZ1TazYiLYR",
  "key24": "3BdaHvBJxeCw5JxW1JdrgMhC9XBdiXJJUxAxiXfcaZw6PWEREieJRuUt2xYVpHSnVS9Y9MBCsfKJkYGnbXRB2TaK",
  "key25": "24Rr9ucF1QWh3QNNdaEJmQn8iqXbCnWuKuUT4ge4pHgTVgUqgzhUYa6Sg7hKc82CFiGUfUR4qtmn2KcbBWPjjkC7",
  "key26": "2y8TQvEZx8aGttDxWE6CSSW576YDHgLuFTJ7iuQhvJ8fRpYZkvUziQL3GPAeJMSi9JffQ8g6FSnNhK34bV5nXbq4",
  "key27": "4fzNShEBpZd3MLk2dbwubXX7nuJtH337DWxBQv6AXNCXLjFnp8L2Kq41uXzu2vv9usMJzjprV3YPFofXes6cZWzG",
  "key28": "5qSdykAN2LkPS36NrUZkXXZWxjtqCYrJ15pmsUAz1zr9Ggwtad5Az98nDqEsPCzfCFHcEAJjU9wuAyw8c4GC84vj",
  "key29": "AaYQxenvz12B4ULaUP5LvmxSHvHVNhX1dHnc9A3k9Yzxsvcvem19KHLZkDw6nY49R2jEVfJ1FSENWNofqNStPoC",
  "key30": "27x9nJvtucZhxRe58zsQEv3Uig4WytVUWEwjKvw7vTJastqwPAmXiHNyAbWCSSUxP4yNWS3dBsKZkNu1c31Y1bbo",
  "key31": "27yjv8ESvvJ8BNziW32u3ezC2BcPEGm69iVbqtGnSJxcSCwa7gEWR3UWbuvUTTBWAZB99hbzfuYt1vm2bzperP7S",
  "key32": "QAKBd1afZeXWqnWFs9pLoJrWancFatTMctA88rkFHsj4fyDKPk5uhV9k9gQqPboa8UmRfdaNxg7gE14teUYfJ1q",
  "key33": "5Y6iUyevWUZYwH7HdnxBEJ6zugjLc6Jybi63vxKgZacs8fDeNPmPxCEE6sWPUjiFw8RXpF7PeUixYAKLXdRFuSVq",
  "key34": "4DJf9i6hPq4FER3nquDhUd38GYJjg5Vq1bvgwT6CTo88oMYeJSuBVVsJVMWUuX9WYoYH9V82eBgdG2GECdpkkJf9",
  "key35": "uUqJD5c1VLDr8PcLZfVk8Z16Fg1b93y3RSaSMEckRT5eFrEueESyzRnwKEq6vND9ACN3P2ecyZuAzet2rAuBeTK",
  "key36": "46AQe8vbDEAVuuVmddfHia3W3Bf4ofrHhqHYhx6rg9gu1DYgZK7ibcJC5L4tyRfLHtcDTXhQYToBPTRDqQTsPFPj",
  "key37": "2M2U8GiLo685BGfEwLAS1Z3iAXC8rAVHgQxKtZzTt9fMeoMgVQkTtoDnhsX9iMm2mu2psF6A4k6E1fcXsLymfw6G",
  "key38": "DkdS4jPD9jYtd5PtxP4sRtZbWr2TpkWPun9iZ7kY1JKHjt1gUDJkzC1cDQE4smU4abcBRzCPG2rcd4XkEe13ydD",
  "key39": "3oS8kUym6xKsn9TrnUAJrpyvJKnJLbDXzz6UB1a4squqwgXxAXQ7nXRA5S6NY7ek7P1AZYKWrEEfNzUFhZScmmUv",
  "key40": "Go8Q4g5EphcAAX2QxpQKD4SNTQSfbtukEqGthMw4QWYu3H5x83V3ziUAqb3z763AYEETWjwpgVU67Qqoz7zAJjj",
  "key41": "4XsEsc2kRBLqBnMUmfqwjiXD2LK2Vxyo5erDaUA5SowiwWnvWbqKMfPEhbmfuEmKp7txdZdTgdQanjKxx7gSh7oV",
  "key42": "3s2ayqt5vh65rCRpRZnJqgKEKoKfQZACC9fA78ibtwpd1HnqzfRcQb51dw4TPmrk93FHngMFNwdWnoVE8Sh2jBAz",
  "key43": "1koXFF6ap4BDVAWxiiEmMT9NNLXxGncpRCbVjnQ8AV5pEah1bvae98FLH4aWmdAPi7Gc6s33VucyXXLPb8u3NLx",
  "key44": "2g19DkN7ZycDQexTWoiHdipTDmZRu4d5d1e9fLo6qSKFEY8N3z3ADf8DnYf9YeNSrV3JHG93VfUor6KDw3TZEChU",
  "key45": "Y9yWWMKkNz6B2PtLYT2UdgERmUj1erezFpiEdFriNBJj6LZbMkeEr9XZauV3Uqf7xxZiYLcfQ6PYmgSQzMf5QW5",
  "key46": "3AkqVCpATkiPooGeSeEdrpvBqZBHTaxEkj39tLzQCuzziBi2LZamXP6DJ7CFERc1aGY7XcsE4GGvriXfXWwr5Hhf",
  "key47": "44kCzFNu4TsHN7D9meDGcYFrgp273AynbvEi245VHyChyKUUbv1o8DNZUHKqKLS47EQA8uj7R3DBiADSwnkveRRo",
  "key48": "5do7Sr9GcNSttQTjKB7Q6vzBBeuVyU8QecxfKg911RrZ9EmToWTbwKRYby4QC5X4NzBR9io8VhggNMNbemdBFJCn",
  "key49": "2CSF6j2ME56a3MUcg8E7GzP7MGuJwiWvSJVx3BmiNPvDy9gWUnSiLDzwmNrjDNvfCF4DtEvo7PYtVZ191dj2shrU"
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
