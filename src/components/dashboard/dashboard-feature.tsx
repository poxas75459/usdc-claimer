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
    "4EkrduYsuotWpYH7zJrXRLLse1NKd64M4BbswF5KbAn5ENp6fui6sWtiYCdVtuD88hQogCE63PiG4rr5247spzTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8JHrQMscxqhFU1Q1RKKbGLRKvG5euXFbGf6Ha4JdoN1tYtC6q8hkqAQ3JLktzR478HBeGmULYaNHgniSX3kcYS",
  "key1": "5GGkdMM2A7ra513VhVD7zTXp1YzDfZLivqx3ro4x5vx7z1Pbc6Hb5ZJnzdHf9UhnousqtWNajGYiXNfn5Z4Q8CL",
  "key2": "3bvMVxhrk8tuDkrsE8woWonWQqbS7BqY8yLs7VcryB7Xq8uySMn5GLoxCenxM77HN6qks4qAFYtY6MGZ6WaJLpnf",
  "key3": "31pSB8BxX6yWaNR7VGwrAD724ukdqr7AV2mLVJjAnjQWEdT1vyp6ZnGzEwqouNKLhCSgGMHumv8Kd7eVoVi92XuK",
  "key4": "4vB6Ct5qLntgMEaQGiEkdFHV4CpBAvkbsY1fgrRRXWYFxa27N2mgxAdnnNvxAhne4g9tkFRStavHdbL4fQX2adkL",
  "key5": "4JrPexwi5ZwPPX2teQrXqtbEHyRyHewbA3KSGECFgHKnL8yXLg63chYvRcVyj7wQTPMjdVoStSYDf3BUHpvbvdPG",
  "key6": "3Xa65utkFvkMaAmoexPNE2fqc7y5oFBYddmoGsz1fvrK7vayJAwZhoJR9DGAPM1oyrEoY29saZgAajxCJUBBZrv4",
  "key7": "1d2YwZYgXnxAx8MaUufX2ZQUqTshW3KxrDZiKmgKdGaZwE2aogHhAKJkX32HFSB9gais3fnD3ZtobEspqdwBtJV",
  "key8": "4xJYARDbgA79m5FzQ6xKYUAZt9xmcwiM46U7DHzduArGRfaTRcAstDiRhs6eRnSz5AxXg2krAE4GXCMpjTU7K3Lw",
  "key9": "36rAXGW8hKA1DrW8USULPEQ92f9LSNdYSeumFuazCzE9jf9SGDfuYoND7PcyZdxE1GtZUSUamgR7FGLHNafdFEgE",
  "key10": "2bTeuPPfmxbFtKb6EH8DZpASo5ZFYwwrDJ3DJSox4FSG5ozkfAVH1J2zHDdUh7hhFtSciNdsNHp8ZTPi2PgmJ2Jn",
  "key11": "2qnBAq6Fyb7eZJA6tgogHJ61kddyAayJPaFStZYmdJToNZqFqGis5JvjuXcH1qTZMfuPog4wcCU35SMfPc4ALnLZ",
  "key12": "SjiYE7KXG2AmMyRwFLrEnj79C3iWjmGFwk5o3D2RczPX94Pe4yDLJ35HpkiBVsir7yvCAU6eWT53vgq5icL8Cui",
  "key13": "2iDgps8eynXMaKLN1bBCNxnKD2RFL5rTVR2Nny1527eL45AE2zgKDwPhy4nZN2EhDYJno2pmdLEb6hrA7ZbbRJAu",
  "key14": "5iwGgeaP7mXqD9diY1ysTzGRVbZY5MFs3f8CyQ2oq76Xs1fyDJmWCDMw6i8PB4u5e4meRBnuKv1N4KcLT8iQ1tCV",
  "key15": "5NYcRzSJQBrWCm4BYTURyHs9eigQr7ZuB1aAyDPBMFebS549Y7LHk7GJtUwnSMnUPRKTmmKYs6LFYxrQxMkyV2BA",
  "key16": "5GKkExhi6C6MjU4Zf56AvbxXUWgGnfcBaXxQPj9pJ39ERW6tQCd5BbUcb8cQzDCBo8HuT77g7ktYRCvDc78BmHw3",
  "key17": "5DHurSKfyn3HiPyVAnfXcAMkFCrzLvscMRE5wvwxeKEibPJHT7cmKmXGKBPEQV9xmV8iJUDTE2euQJx7kegJSCpZ",
  "key18": "5KRsdLKqFGunSidrNrhTCzJkKRvgH3en45jaxzsq3rKW2UqtWie7AQMLELL6eWS285yGYr2pa78SSv6YCfFq2FTv",
  "key19": "4VFVrGTFa4DPjGfbAUA9Fiovw62KdbG2uFbx16sAQUXy5dvsy3AZHET6AAKLrgyXBWxiZQD7cao4KftAyrnbhEPs",
  "key20": "3vUJBNsZwNH7WeYDF7yVziXnSNiA91Tz6zFYc34DkucHBRU5H6c3X1R6DjHxkRMishMtDRNMW9Qrx36gZP4aDquy",
  "key21": "2bWRMMcAv2zugsMMNYHjrumKXNsr9giCuxPEVJ8eQubfXXktsQ8odNcSzjUTC8mn5tqbvHCdqkd2HNwsDRVrJ6tj",
  "key22": "2XV6Ybr5Vmu4YZtMQUxmfUkMXwyXVWAvJoQHBYGi2R9Z55QSRyJ6FT25NUU4XKkBKSPY8scbyL6V4YWoVDLsuPmw",
  "key23": "35Jdh1trbcVEmCMDcXbEgLpsVVPcTYB7thWS1zwXETonf8G8V4V9tRZkaABD3d3GRLqF4RC8Jvgkoz7BN5U2R5SC",
  "key24": "39mDcVxAUdZhyr3xCm2kWyPUCeMxw3ACbK6mB7zk6RwdmJZWMKHYasqyvp2uS5j8uSPGqEMWErKx7GAEAcFqD3Ma",
  "key25": "JYpi4YR4JDTiyU49tAPUyuQ8mG9mcXFyumMRctMyP3iRn1MTYUY56VFBpQdEUDr3G6gz6j9YxJtSgA7LUL8AFR2",
  "key26": "4PtjWNLUTvb3iuuAhhv1D1XCM1MmbEEuB6CLQgHz5oNUrPcxKgB9RP72jzBaFfzh5KsGtbPmSFsdTngGGuMFkYKf",
  "key27": "4yAg1vVAbZwLcEv2FNnYR2GWfuH8WRhs5QSU3qupasuPboXbSca4La1BTbWFcUqGWn2X5nBhKuQSJAMQKnLjo2mj",
  "key28": "3QPcSDHJQWdR9txW5MK6GY4R6P4k1FxprmooVDmS8PtsBB2kAzJk5c1Ludv1QcXwfQfPBR1SizpZ4dyHPeabA4y2",
  "key29": "2rgoSMf5diQfx8FXkDJYCjFAJ5pt5vMAmnQM8STqdMmqyDAZaBCcVuqRB5xgnxouUugVDYZ4pWRS2vXPhifSp2eT",
  "key30": "4zEcKDLZK2mecyaobykxupDZ9SMv5X6s7Vpc1wK1BaxTjqmWVmp8UFrnrjiiz7KtQx8ZkY7U9eMfbso9SS7EPh8C",
  "key31": "4VXoAV9cj85knakrVEDCZrF9ST2xxobrzvDRCznviywKuhcxe8tp1CucXs8RqjoqmKJwoYkYQgRwxtWwR9EB1pmp",
  "key32": "3sNpUpoHhZuequv8kPF6EqyTUUksiiRhEG5MyQx5aKLNeZxLb1cCySKGodGhbUYuHoZutdDJjrYrpH55xLecq1Kk",
  "key33": "W3cycLV2EBgEFeS7XR8SHTRm2Z2dm9Y7Zb5PMA1SGWRBmTFF6r4ANh8TyAXFR1Nf5S4Lea8Ns65cKnvCC2joTtT",
  "key34": "2Vjnd2JfZoA3SeN3CHQ3pCKxgYwyER2DNH8YyiMrSCyr8rKw9xpE9BmViYiBXH1quQpMCxzJTAzeURJ24V3oaTw6",
  "key35": "63rtWBBk7oarqtQ5ZdoipUm9xPv97sb9dfdpwFP37aC5reBHawjxPdT1b8W7mjJgxac3JZoy9mkhQHoVbgANE6a9",
  "key36": "3YxsmxazWSnMLCMQLg63DBKuzrPX552yZoxbvaggC5pE5PmVox5X25v3sVWsD6iYKtTdZkj2T2pnU25zaaiTErJk",
  "key37": "5imLuMREpyWg3UyFhV2ZKgYKV5yXDNfwFMBKL2W2HRBq4hao4BRz9H3QKeqdgK4SNssriMQa9sw64LFB7G4g2oLj",
  "key38": "57DZqXSBrLhJhdGSuxfMeveP4QTgfHbZWJstXo7KD77FtrLyD9S85yfG6Dni8QxKN9ooSxuF9J3EgLtujWY8hbNN",
  "key39": "3SBM1Dj3oosBKgJjNyFbJXhJJeHkRiRkcvL7vZWgaYfstsPKxxpnbdWXGoZnrXDsXHNqyUfSF6HoJocnsJ3Ffupx",
  "key40": "2wzwQ7gtZ5tijWQs98W25dG3WAJjToZpmj3QS2qTjdsZQcDAMzVTvgxBmHGM9iAkPBNcncUArUHJFnKnqhSZ9Lsk",
  "key41": "3MUD8GSNcdrdBXuYp94npLZDVMpQ8BdyRkJb1k48VypZ3mPFR4ZUwfYXNSrYiBpjFHTPFFbNd5gwHCBB6VSSjTLd",
  "key42": "5UorhHvQUPqhW4FvGCJPpsY1FyTB5c1waZxnh7Sidt6azWm6vBs92fC1k3cWtqZfEJ7zC4jmqKciW7mrwXsRzS1K",
  "key43": "4FUeMJHxCpj9qRaKkKJNtB9Qfw3btgbz6KBPNRP1efo3x8ceGgqY2iaaH33p26Wionkj2RfeMuUTgKg1554kWLAD",
  "key44": "4oJa6JdnWxqhqKpXiypQnAvGGqJvSSC8Y96nddAoVdnMFjzvYAoTWcNpF1Ysjp7XFgaXTP8mHHUiimdAXmCsSrFe",
  "key45": "62pnJHDTKsMPZ9dhZ1kFBimYCEqXvNzW4z9L4VzkQdgn3TTaVaSm22yQToZ1VEq8Hnm18a2M4eU3KhcdH4TtLCS",
  "key46": "Xmz9v75dhV1JzLamhV77eM7q8qAVEzgfzCPuteFnoJTNmzRfWzyrQZWkaKA22jv42URdMqmB16MJpCMMVoo6MGD"
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
