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
    "c5iLRizXdXqPRvWqWLKnWuTk7gpiuTkDutDrXARaB1eHn6TqTqX75hAJm342uCWzxs3BFmT2zm7FZMNhiqdb81e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43YYf3hmoqfDAeshZS7G1oqTBwP39iBkpugWSYQtJYhKUnr28HDcmHSH81NczeyxWKSm2uGfTPnJENYVKCDQY3kw",
  "key1": "2xrp1u73NwzvZwqYPpzTWAEtqZZ73MXNwJpwZjiSa8hKbwp67pEDNrSFPJKRHVT1AkwTmFcdtj8eKhqdw849nnZa",
  "key2": "u7UaB9XW4PqS1T4sCzqopBufyfqBNBSKzBzLdYtrQfgvj45km19XGdbdCTpc6c74cMiFjQN3XoKEAYMufZvkVCf",
  "key3": "5RgXqwWqLpmEzdo5G7fYAEPe2QCPQzqsbBvw2PhuXBEPnxp3jFL34NRBac5V5RzpBACs68RvZfQWh4vFkzm4U1ff",
  "key4": "5boTe3tjwoDAMX3sygrm4SfiHAxTQKbg9MayZp7xvTrU8R7CmX8vQ552Tki8qc1DPqDqpM5vG67sE1EX83wrhiMW",
  "key5": "5E4DuAb1111JTTaRjUPUVVQXDsQNTZm5Dr6rwx6rSQgC8dG32ETkyrvkhyXdo6t2q856rh9tyc1PwygPCGoxYQS7",
  "key6": "5G1Yw19oaaWZnUbDk9hbdQCTUmtqAiavpkwfBjkFNnkJya9x7JwhtPFHjGo1L8A4KkGEhnbr6nM8CJ4GmVS4Gb9M",
  "key7": "3nZ3uqSq5iVeSmasxBpkEr2ctwNumqwwrnDUyGbjCXTyuQw48uQp8TpgzrMfeCbsYmerDroQT6XnwZczsGwxWvg1",
  "key8": "3A8K7MMbHDZtHAKrCctFFHnebtR1n4nzKoLGRGzooMvs67NxaWF4DszXqJafpXC7bPr33RcgZYXMvwxuYGW2f9XK",
  "key9": "4phmnxvR4bBK2HJmzpgyC8NYKnF3GkuAPo7WHhEAr5DGcu5XgYXerRoAQNdampco3nXYpLp8V1fjkZQqkWDd1n94",
  "key10": "C2bYbUSvwj5DPg7xtEeGK73ngdXRPVE784hwYnXyyoN8y527iP5FZA5tqRKHaYjM8BDVbGNCUgmGJ5qRVepCByF",
  "key11": "5oru9rEGtUFv6fNZdgNaYERHxfgftKbbeDGp9AWaLzQBJsc1sCSqFGxcQMbz9WJxhTFHskPqyDSGAq4aW3ogfctk",
  "key12": "egg3mvKfVQhvDu8jcYBSZtPeaedxtEWroY4PkSnTbhyaNKr5SKTbQYJBgYbf5SR62uuW34k5sXpDj7hrHUQKQSe",
  "key13": "2xgSj7h4z64KPB2bTUBqJ2ErfBmNPgfdZaucpzXa84mmGcQExn9s8JU1HdJ3a379pBfiaJUy89Wznm8qXRbmBAnu",
  "key14": "27LxreCsDBW1Rznv4izFGnr6iGF1Xb8fMXDVKJRbxeTAUjadxQp4bjJGjfGrGsPsrCUfTAFDtVG766YCrNDGeU6f",
  "key15": "3UiGgkBEgDjjuznC8bBr4EDew6bVEWJibJuWjce7Mm82nWJxaSJLU4dP2fZ6frE6U6AsXnqKKZoukehDvvD6zALy",
  "key16": "2MdQTJWA5XJSFwRAPGURzGEDneu8yg9BeEDASvwvHMLW7fPjmy2BB1jQgV97hK4a23And65uA2rLDR1XhqDPAFFK",
  "key17": "3m1Az8HCWRQBPV3F6EzZWhRtDo2efrDEr999g6yQERboUwnUEiUTmBKwa445AAhcfti9jd8gjMiTuJesHPkNeEiV",
  "key18": "bK34UEqoUzQ1i8jZBW5wVJzKEP93V1TMaSc6zyV1vMdwoh6HVh5iwmYoYgqVsE7DJrVMyQt4Au22ohtu1Dy98Tc",
  "key19": "2x8EqKAGgmNUgvT3KidfbGYwXbGdcZqbWcgEvVRJ94Sfij1iNE8p8QQpQ7iPPKVDprEaKBHiLFamV9xtHKaTme3j",
  "key20": "4RaFgQFnoZv5Nwk191hQcJSqQRZAvyS81hRywv61FJgG5Fy5YSdPfK1Ci9xzjcNTaxDSohWfbHnc87wqpjGDpNog",
  "key21": "2c9iwNfoDQNovYkcE2dzd51WvQFJDL5ELXcgsFQiL76aBfQSYm5ny7reMVgkmAp6zZiP7iTy2uHiyuogigHh9TCa",
  "key22": "TVM8uEviH62XXyXq66SkLqjUmCx69V19vxpQi9uCp8gDWRyHMLQX2rZ3ZQQbnDWBNjF3zqVddiQxhtjXpoWoBAy",
  "key23": "8ZNYuQRbby9ptiBiooksPQ7KvMKDPATzrWmtLXwx1b8LAzASBCNnvHwoQSSe2mHd6MpfcMWcA9416D3MzHjSUha",
  "key24": "4d22wpAYJLQECzMWJPMgXd6giigXSAsZ9kFvAFgdQTDMQdfHEFceWpr3wM8GRs68zZM6zVF4t3RkragJaua7JfhU",
  "key25": "mghspN7Kjm6kEA1vKqhXceYaEKzCc3ernrL77jh1W6HjhHHkste1mfFzvsffWDAMBWnWDGpkPFfq45M9NXjrQqC",
  "key26": "2ZMkDUCGvmATT9qCgtxjAMZ5winbWdfLAzYFmFhVG4npCm6rCpLWabAwSZzFNmtCPivVcin1gP4S2J5Z6pFZP2Za",
  "key27": "kt7k5G3AhFP44nQfpPkCAoi82h2JaSs23Hs91ZSVGBJ6wiKugqx8f4aJGkLJCpLy9jqaLzpuoteiJvg6BzXTHwR",
  "key28": "31hcRnTDdZazsNLkgwcDNZu5rP2B9tnvsp9KfYMotn929mjZ9yPBLA5SSQ4HwFmec612YpQrNQANsVhVAWTGz4Vf",
  "key29": "2aPnaKRzms1z28ie7HwhjVSduowfoydUViGvJMqEmJ8Uv77M7iFaoLgdvse5dvXnuUG1ikA39qm9FL8S3HbsHgDk",
  "key30": "2urbnLZubYqpLxpstxaQ2TsW2gjvbmPagp8CUhqaBcVpMcM5KVB4cQjrqaTK4n8SArbeiGD7FK5iQZsXPDi6h5iU",
  "key31": "5uicXXBG1Td9H3t9kLQ2zwjtNdnEVFWD7TkZpaAYn6v25EqaJpEULBwC7yYWHHGt55qNvPwrv4AuBG7aBuXWbogM",
  "key32": "5L2irpE292hJEsdd6Wf6DPaoHbNzeBMTtmSw1rABhkyk9CwPqKTT6qvWYujePNvViaH4uTtJJDzMohyBJLi5BgsE",
  "key33": "jFcpRCicDoUDiPQFNLahBBJPyV5V3V5VBq7PuHKxTZ31iEdoAKZDJAcGVmqbxV8hr5Drj2CUmsseCaFvxXX58AU",
  "key34": "fGHpNGe6vTYaDUpFSWHnMNsSQGCj35JwoxASXuWuuGQ32Fh81qqTVxiBNSoWwEB3nYqQUaE6qtY8bcFCZhEvDsi",
  "key35": "C2RGXkHvktjmdHRqxMXkVAHB45GqYFpHLen4vjN6fxB3PuawgBTJky4SDhf8C4WDa2YzZXxhkTaeioEoLd9CN9M",
  "key36": "GpS3x3Yy2yZdPq514LaUHDFy6dQXGHAH8HmJjXR1oJo2961GJuYAtf5zCj5BsgEnWeYEgwuTF7kx6aFJBosRBs8",
  "key37": "26VrbZdn2Gd2nAghm3Lm3zHjN2HtNkbKhPnVoYcb3kv3VsDuYLhDP6W618yVasycMt1fgq49tzCmyCc9ctXuCGXh",
  "key38": "2TL3tgz2WsioxaQ3vSMNZhunaL5izvGUugPQoPfdRfeaC5fEgE6Z9ESSDD2s51acYWdtg8decgaCe2A4Jd6h8m41",
  "key39": "4FMXNXLaytSK7Q9EXfB6BEHMGhmSnmndnrLeSpGZo3oWtzmc1VDLGDudUS85186yqkkAHARAZgFwjj66MFNgJh9t",
  "key40": "683cAAKxBE9m4vXXYrixsLD7fVA8UkYnWaUXyyzyfn5pZSJ7y6zW1RTcNTxBt1Ls2GbQTngkLqRPX6nKeFKjSNp",
  "key41": "2G627vjHgRaY2veLnaBd8xUkZi1JqXkvGGFzpsBFENTjMiuVEEpowTSBtakY3E6QPYdSwfSwSNuHVoAsYcCvBu2f",
  "key42": "4LGVps1UwW4JNZ8tQmCUXzSSjPyFjPpAx7NJqp692GX3DwBqWNkYzSRXGaWCMzjqH2wagNgyitVE5VfLefnn4g6G",
  "key43": "BGGvJ5fyCLP9mhkeKoUip6GSbjQrRvTfF7M484PVVMn3q4wZDsosSRELFyemFce4GN1kxnU62bzPHGYPh9BTdgo",
  "key44": "5VWJLoMWLDhePgiBizNwRpNZWbudqRRYBoGgowftptUios9AtoL122cagmXfRHatUCgZN18wduy7rcawTJGniTf7",
  "key45": "5kAJ7Ek8oT33BymxvV6c3K4DYkgUqDibRQZuwF2WJd58jFFcVkDTSp6NKxh7cdK1tsVPUdU5V1mGGo9FVAWNQWmm",
  "key46": "55bzoUwQwWTxLW8m6L3PUMNFwtALhXhX8Ma3PkahQmeBAvRcY797c9tK6oDNPyJUSUMXhSGRFDYCrWTb3F7eCKgE",
  "key47": "2uCJyxpwMQhoPUGLYcYiiKjKATfyCyzsT3X7cy2YaHvUzHmxeUNLhQkNXSKWhMZR7yvqcMU4YHPJAtM9v9EchLb5",
  "key48": "4sPqEe1RmJWgd5kjBdVafVXT81tpTUL8zLfdVvAkh78t3D4ZYr2tWFDc7uBzrih13i6ihjQbJk1D4NtpvTdwbpvL"
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
