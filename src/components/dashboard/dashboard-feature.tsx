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
    "CtgQp5wVcJsLaK9F6bw5rXqAJ3KRkEjY4h4XG3eLcsdc5x3jJXcb7Fpyjyd6MWguiNjPC889uVa7uDmPJPMtU2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "336ExUnRFZ4Zrqhn9Xs9gpsk5VL5RDN9QGScAg9zsbK5a1YbGayGtcXgDURrpmtoKWkEWXNBtUZzx58t1BuGdcbT",
  "key1": "3FySrFrvmM8vnVSQ8A8PtyeAb1v8rAz1xqWqkUBbXsaHjusyxSEN9uanA6pPB8Ar2QUaw5BCk22K8NeKynZanEJy",
  "key2": "3Rx9oSxiAi98A3p6mdjrjjhnMYnDTzncTwUtEj6gqJo9NVLAVc92E3ETo7fNVPBXgo1WJFadXkJJdyaaoNKRkbQG",
  "key3": "66DDwUvotcwutEUzSELgBvin6PXVnXad9BWSajp5j64ARPHvyB3ogKxgptMttdc9Z62XoRuPVuM4HEKbpFVKfW5j",
  "key4": "47HhxmCTsehpS55vEVAfXUKotiwWQtupswbroMbv2wFziekKhJDopBxVFCG17VBowLDapdYxYDmEH8GQPSz1mU52",
  "key5": "5g8jdrkvCMxmXbGEVmRY1vCUKJjrLE9i48jeSzRShjdrUovqqhmVb8oneKXukrQukS2Ni34CrqgrHGGUKyPD2GCQ",
  "key6": "mK58pk3Wg9dsfVFwayLbFGy4uy8dLkfmPSjwDzHdZ3t5sFfDfsNJqCSV31jMPtKAbeYFCLXdjEMgsfF2maraVH1",
  "key7": "SWroYhnCn3TkYk5AKswbVUJuGYHQMwePBi4H6eVJNz4nSnztqiSMbyogDdD6RXYoJCQiXh3rc3aCzkE7CST9YL4",
  "key8": "cA8uH1tx8qmckU4WJSS7TvfpqXyL2xQTgQeamVPNqjtuEDonCHdnhZMTWvyQ46qNsDo4PLMWk9RKvr6WVooX77p",
  "key9": "2A3mW9SJAJ179yBzUDJs92zoRCuQv46VqaLSGUdUq2kUFrsZ5oJrxwzJwpm2DEUv31ouP97C9inht6FcuhZY3U3H",
  "key10": "4iriWf99DWoKJpkythUaYEJ3NHvBHR4rJCnUAP2WtPmqccvscemcXRUtgBMumhboeW4pLWnGrgrWJfdxd71m9KD9",
  "key11": "zs7Cy6XExMXdpmzx2mK3d1WCJjnef79TWCoZMhamYqae8TkNsZ16KudkD9fQ1QNkCRUKouMMvrp2k9LvpGwDq7Q",
  "key12": "2X4iNQLfU3Cpa3342Rr51ghuHSzJivBdk6PmAEHzjSgZvZcTHZBoWZL1itLAJXijcT4im1pbT2hBdkCJ8WdPrZMx",
  "key13": "3eWZe3kcjVmqCiHGbKuUcDKZf2C5ejvxkPnjKbg9N24KdsNfm1rxAa2yoMFLyv9XQ7tN4NVF6VkzsEsgSMooDhYp",
  "key14": "3UTNvpCsDxajtPXdGzU3x4gTCF1vqxXDrMgNd55as695Lef73hteaVM5sAetBiTnFYAoFYj5QA17EJimSAjQzQbJ",
  "key15": "ze4DXHjzhZY7F8WBU45c8jHTH6RrcenmS7TGQnhQdUvEB6ANXwAJ4TDu6ak31Gka5rzc8a2AVM7XFb4GnHZx2KM",
  "key16": "nLAZr3XctKUnCUSAJV1Bse84JKdxRaFBCqRmEsiKJmNuxJkvwKgr6meBJgGA8KBcaZenZy18npk6zvHDpHzzsBu",
  "key17": "V2kW9bLmaYqteFKBfS4LvG4iJw559HxtLaEbz9RriS3vz8iw1UwUi8H5v5iwsRZMTfUWqNi6ZVa3CyrX9JrgMfQ",
  "key18": "4YBLDF3UtdA9Bx19GP4DCcGktQiyV8uz5s1L4kM292fehogNXb9e26tTAFotFeUhF9gDLQ65AccpuEVnDfDnT9RU",
  "key19": "4r7maoCzKmSE7132AjGejMLewY8orPAqDnQHrq5SMoEKpKDTTPgn4xghuDpWAj2uKG7wRyuZpqC9QWh9kb7fRniE",
  "key20": "5TkQRbze6PntDsjZepez3EYkxh4j8zwHDRCVcoVK77BeKLXoY6NNgqWaN9FtVoMDy6AnA3hd4yhtAv4kmFnZy3Hw",
  "key21": "4HFYyv1HfTsamDgvQ5M2gG5LyJKPc5zdHecjZiF2Yr12qvrWDCZ2v7T8fsYtVmgy72RRgENv2RKCt6mguVtRo7tB",
  "key22": "57VvTLGWJdDMot5aBq8ALHm91A3972z2tDBvUpLmXt29guxTZ8gMRocnQq8ip4iC9bN9e6mCFpLFUWVJoExZ2Bbh",
  "key23": "3FnKgejhahTpci8JiWt6BudP627ZQSKyYPmEtA1cMeh5u3geKSzPCiEvintgNq4NEefFwFz7Xqyzu8eYkT4sm2uE",
  "key24": "agE6T7quPJJea3Fbqd9yvhWMaKbDHsTeS5Dkje1s7FJH4oApziL2p5Gtxv611NHT3A1x1WXoHj1WuJ1k2xoVJN1",
  "key25": "2y394VKGvjybLeMaWaVJBatXET75inumxqTGf5NjTVyLSRxDBsna3V8X2Z1f4AZ2V29UihirA87J91GDghRFTCgZ",
  "key26": "2Y37di5H7Wom2AM59jKHDwicUFkErCKe51MiYHkHeaketeK65s54Rkjei5b3ZZU2j2XP7kgiwx1Djmz8azdXycWb",
  "key27": "2sKnqRrPZLpTsjT2zdaSb4DuRooRkfKVY8qu23DErAw5SLHTj7iLPRkAWvuehwwdGdVmqouqAPhpYj847FvvKXok",
  "key28": "2SzHuc4ZnoDTxxmn84feQpGZSQsCZ4kYJXeeysJS6BXPsNvoSWLTMKMchjk6q1NTr7p25E9cqUuhT7ow2bJFsDkA",
  "key29": "4JNvZj82SG5TyDK4hw3Phf5Sf7JFDcD3PS9XHdrhVwyBKENoF6FezVXiMjNZxsZTQ3YsbEw3jFdkxMaP9k8rHA4z",
  "key30": "31cpxwGuRBLqypJxbmwF5gjgpA2EMhHRf3AZxCskytj9XSWJtnZbVLx8JAKsYQe4QdoiZpyvK4Ji1sunESoEFhdG",
  "key31": "2q43xKpP1QyEJs9B3UtVkopJmHHMt8D5iiMfkorcovQG2wiD9eeVdf7iuoUc9SLpqinQoPZBKvrgnnFFpqUyRZst",
  "key32": "kS8py8GT4A1d86MKitvjjJDSQVtL6ZAFNfru49mQ8ALKLLUNFE9ENLdxeCAmBsfzgYUnb4ajQWfodGuPp7kMeuT",
  "key33": "3FFz9igxzvqp826pgBQbzwEtbsqoNRTMc7kN9WgpCmSeaTErpgJfoEp61BtkKQwdtYvnaeziSh5mW8Bn7YZxpEo4",
  "key34": "3gRVuYeweRJ6WYbzQUabXCo6sfngZZ5G5ZYum14FcHDHCUs1S82XdjKvngnct21KmT29pkFGT9x9CWDu3Z2nFRiZ",
  "key35": "2v9a21RohGbMmX9DuDswCTMwdcWBQVJjb7k4TAMjEqRBHexem5spJfdZ8EcNiNrjzJL899VfqUzfBh7J2ojd4yom",
  "key36": "4BSQ3he96bktgCAB4eZmH5PvKhmGsDBuV3ehzvcGkBDdXV8ySu7W72odX28Wkxe5dx3peGxw1Fhx5TNZyzDTyTkq",
  "key37": "5NJe9ZTSHvi9U4tb5wjQBMZFDVta6j6G6ZFvD6ihhcjGgnZQTnYHWcLJn3Kwbz8fSaihxVBytdhBS86LFKr8jHzY",
  "key38": "5TMZqM7Esr7a22ibXepPXdzT6eEBwoPDc1S6qa1kovy3VCruCKCJ3v1SVChYbTw2Wr1d2RBwDZEYmv3gCTMd1REM",
  "key39": "2mjZqfXJDUV7Vyw5aaDDU2ABdb66WFHsJL3Sx9f2TLrtLTcPWrBK9cm1p6ayECyrmMqy2tCKCid4Mnn6uyiJ87Sq",
  "key40": "4BzUwjxXX6P1k6N9LLpgm99tyGyEW34VdVV2LTTFD44BzsRMryeHXXzeZpN5WkYFQQAZhCsAPxuEWJdq7By3YX3N"
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
