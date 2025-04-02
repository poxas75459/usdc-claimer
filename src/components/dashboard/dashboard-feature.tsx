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
    "54C7GJ1BDK3u5cWcTsqUi6ujRS3vKFmiYyX1xGErNmVygGi5GSfjbqGq1UhoDj8TE6hU3FbEzwHqLhAAssR3dpQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDUVmr61CfrJfevsKEuEz7k9Li32cpYR7UBbsNjAUWuYdSUPUCJUxFg29MdrKaiJcCuNAjWWKTqswhFaV1bsfAW",
  "key1": "28rLgQ7yXE1HMoKNgS53kBj4wx9PQCkD3hr7L95aJMvQ6Sbe8AvUEaa7hAbwooWvPZxc5XT5c8gsrMLnq5HQWL2q",
  "key2": "4rHtwVtnKqsT1X6UdgYuTzi49XV3PGzRS8xyDYKc8EwWtbRXLx35w3jVh4bAS3eGxMdeUxz4QJQXkCuqujf1MmLK",
  "key3": "5XQVFBjiwSuSEPqsEuWJMUi6CxmF5MW9wvwjhmAMaC12UFhbiNUSCfEqof8qrFCLgYtiqHLxjkvuYRHwe5663eE5",
  "key4": "s1BwCz2mZBKyeas212sKVw6hXP3uKWmdMSM535JNTL9tgr289vpoJuEA9hNyN9NhCHnqjRCJAbSE1KP2renseXg",
  "key5": "RYqLVkbyxg2F5viZioqckUpsc5Hp4tkAp9Ex57AVSyktDkwvfPQGBQbFQ4vB44NGnPM69wZUmDmxT2jzttGPcTQ",
  "key6": "2aQ4qB1Hb1Dbxz47jqnoUw5hqQekBapXVC9ovLEWbFFuPSpZEpYrynvDc35nmVRrftY96YhRa9fUK5gdeu4tdtW7",
  "key7": "3hSVG2HN8vTKohY12ViC4hDyNCrTD8cZXZzukXjsb7F6VidP5XGABd6NWCxicMzowHjZCJYD6aB38F7Ef9gr4wdP",
  "key8": "3YWJqaA9GqRRSArZ1JWcwFNjezQQU2q8PjQHY6KrDDMragcHDdeNVTEcqvXqkEStHusqJEZgAbvodABWGmeNANqN",
  "key9": "5TMvFDE85i5LreK8nUgUi3o23mrfN1efua2JAdwei5SsD65uxd8DpfGtj2JGaPMXMAPuTp8n7SaWsZF8oPGFQYbU",
  "key10": "2nw2UWxQSGs35xQR5Nm68eY2KjnLpgZGzbdwDYLw8t4kZEXYvM35iR5x297MiwRajJ8Va3PomFZ3J8VphGvvi6QJ",
  "key11": "2h3e2yaTrVSy9hSMT4YHJuSutD7bkou9BWavx8RJANHnSEzUVm5YWqboHUeU5zZCxZc31gNMaqqKyk2KFBX4Hbw2",
  "key12": "5TwKCVBvv2nw8gRTB1pArpWdu8VF14Gr3KL2CrhQjhUgkPpVvtrkcBPc84LLNVZmJTSS8VdhAHmArFpgDXKk9tqK",
  "key13": "4P5FQBkAwxwEE8ShhJReSc9LHsh2XUX9ceNoqZdCSabtjRYccy7x1G2Cdx7QEyBV4TBsBGwYdL1YzAav1N2pMonC",
  "key14": "2RTPRAzvfGKWzR7UpNVs82vDqVQ57smZbbGaR7EtTGMnpyT7m1TcToCo8XQ2Q9binYxLDmCapiZq7mMTaCGjENdQ",
  "key15": "27B5cikYpxfZXwZLBvsW45syQtCLqbru3yqJMaKaYDt1ej91n8Qx9rwpAvr3CGA6viPR8A7iDk64K3hy17DofTpD",
  "key16": "4UCptEgLWtyPhCwwAMeXcUcGaSZrBrkXUKm3vyaDU9DYEb2kHNr73uf8oH8qkWphMwRYqdEEMyEbwcJR6B1QA3gR",
  "key17": "4UfuXehLyTe9XR5MoEwJXYnSj1Fd79R1Pc2SiTJ5mEQnGuWZCm1L2iJEnAKZk7kwg4c1iNWpmfhs17ZFTJvrLqfL",
  "key18": "2eWgpsk1s3eHsKSbAa7FcPaXNPk3AdNrWtqSse5A69Gz8SszNfazRKU9cMYHDayivG4siue7Kf2K4pyWfdXM4ZPz",
  "key19": "516UAMi959UwTZL9fDckZshpA3ZHSygBtgoZ7vQvc4smrCSK7W1KTTmMYSV7z1xXGs91XAJEBWs1aD8dwhV7YFk1",
  "key20": "649nyfhVoTF6kGYDRiKyXNKvRdeSCKgQicB66RoqDWVPZDTEz8ceWCtdZZ7xEQLXTDg4ey99HZhp16dP2vymSPU",
  "key21": "39pntCpvGh7RMF8nM3tiwXK8w8G8wEuNbtCxe3c2npeBjGDg4HaWiWRfJxWPYybALYb3GopascG1Soqz6co5QRgb",
  "key22": "26Ut1Pg9CTmkbm5gY2hb4s572PGNUXnPXAT6zN45izPyByyLUVdGcfiFRdcfs281Rkt8ppMve6MTBe4V9m8q95Sn",
  "key23": "2dxJjTY6sm2ugNsHe8g1Y2WV1aLd1VXBSM1JtnDodigA8u2TdGb9mLhTZJsZxsikfKLcuhU89HdUwpPyZeXeVq1C",
  "key24": "WDiFjzZP7kRRnbHgPQvn1q8axXLwxyhPEnKxhuXY8nNyffpXJAnJRjWx1kYFT1xdGMGdAKPN1u4t7k5K5dWH7ui",
  "key25": "ZF9XKR8Q7KBXP1ULxGCBZTgPCvBK265NQbudyAqCdvBXrJCgghxW3Z2tjuNWbYigSEa4V9oFdKnRELt1D2XKATn",
  "key26": "1xzJPDjNjv9eJUpA3ZUEiDAhLHn7UBGL8ncz6vgKYkuuyccfMrswWQn2g5NGADRyUmTA4pYEYkAQfRviJwFqvgj",
  "key27": "5RvfinuXTXu8o1SV7fuMapUuhZdcRhmhqNE9kzoaDfLj3YyVLs2CjRVQ5FPexpDW5fwaLv8pKqY8oNpmgr1sE4Ng",
  "key28": "5Zf1WieYqeMzNhhVrXSQk48tD2dYrmFymUkCmkfzwNnprAqdoHBXrGogEqN6QVFXgU2UhBTKYu1qgvTFdVe9wQod",
  "key29": "28HmYCWBwui1bLrQCMuAhwS5Eu5pG3QZaws8CBr8k9nL8w8UTXJMcPBMJ4iducdqXpmRq5Ewf9KiLvH3LJX3kqEP",
  "key30": "3BVNFr5ZmbS4TsyNivB6j5p2UVMtUUrqcd5ZE6wViNQxvWUnv7FRsqwUH1hmJnjBdVRBSRK4FJUBK4FX9L3nVyGT",
  "key31": "3x1TuZK6i2kQCc5UrDWNjrKmGBxWuKUEC1T6sQFZmgTrUNoyG86vu1egcQ93t6ELWA2gyzQDorw4gAK4NsAhnShq",
  "key32": "2KYn3obQdXK3iy1wMMitQ7t3dx9hrKAtpUprimLznkLnDNqxYRZ5st6vfN7t2nt4GYRTVRr7VaovMFJKogusjzV9",
  "key33": "3FmSBNoB79rBs9TB3d3yACKX8DoLWjT7GiautCFZaQgbtVwKNgoBw38MuU9TchJUVScWDSMqorSKG9aK4yZMur1Z",
  "key34": "5Cr7NzY6KKiLBYEidHNqAAkQQjH7G6abKFobhF7jyfUufjAYSJhT9rRv39SXWby5ZX6yuytYPBR7RjN4BYhEgYv2",
  "key35": "6613RUUBnUVcWrm1LEtKmU65sCcqV8M9JsK46htCbDVtdivKwkFgBe5qPP9FKTnevmqRFHu1jWyYuYvuX6R5HY5R",
  "key36": "3vD2sStkavi2tv19SXuxscBsvK6VF4ddY4rZmzgWZyS8Dnc1GSXcBK2GWVrbtFFxNrseAFTxWXsJds5vQkLXZVMX",
  "key37": "wkCZhq2WxCp3y7R1yxS7on4HkmMZ3igVWPascS4r3GcKHQYcmfUT8ZRbp9onzwWmrQNuQEJD9RcaRH6MwY5qToE",
  "key38": "2sriCMri2J63Jf5aArXMBS3RfZgCTnRef8ePamujU2B3dmzf598yBrmbeB8F2Pxj9ahcnWypuN8jNGHFWJx6CiCs",
  "key39": "b2QQ9TNgx35nfgmkUirEaTr5jVrT6ACBA57Ss81jkMgETZ4XviM8sBS4QUrgCR9sT7MKdgQhKVK683XacNvrovJ"
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
