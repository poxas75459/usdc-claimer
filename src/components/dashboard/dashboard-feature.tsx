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
    "5ZpKrxxMoByXHhwJeERb9BL3YQTngdSpW7hnHcMGmXTMNhb94zkcQpTYzue63nUxLCvsFcgvCsXioQxcKqSsVYzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BtRnb6ncNgjNGXkXusTQtXGyPrmV1i63YTMGCJ5SrvcaX5kG7hfmyDUu2ArsyExRdyFGrXyX8wtr6FBknZDCWWf",
  "key1": "2siwmfnddhq3FjjgnD4UgQmLh4BznHNDEtpQsjHRuJN51yfgaDWC92LdQ75CQ87E3LCwzfZaUi4a1sGfVEMmD5Sd",
  "key2": "uFQNjks2i9tbiV93NtsByckbdmn7bx6eNb5TjtXxa2Y5P1kHwjUpSNMfRFFYTJped9NRaeXBhxEFYUpPZbx7vQr",
  "key3": "4tgCCB3U6hu4gEsE3PAgbZer15pyxTL84t8haTPRjYsAVUHae6DaD6yt9A5Mz4MGgdD4GjKSUD8uDQP7BtXCfijp",
  "key4": "3WewUx4LRvY1dbJzGSRng1j4aB9xamxwPNCWNhTXoZLJtcU3Yhj76Cqu9tRAAP953w33LMuMgN5PDBDSoRAGRJz4",
  "key5": "3Beq1uCBu4UeMfRMuDkuGnNfEhDd29a76Wph3hWARpdfCRWpK7VTrdLreNiHiJ6A68AkkZ1mADDitAhLme5wJtmF",
  "key6": "GtuMxNuZYSHohFoPXoPqfFHQqP4pqtvdxbQzwAJd8uqm5WjJYvPMtsqajLWRPfG4p7jATUgBXEowv37vK85eERE",
  "key7": "5a1QwRdyghFH1wSTh9bmujrTHkvwyJ7FLXooY79dmhpHttPNjhyks6ner5uTiyDvtLDbd5cEHYcEiqTCgSv36qSB",
  "key8": "qG3uXnZpNS1Bv9Bz6jx5Q7T9hvuahGrcFnjkqQtr8PvZW9MHtwvyz7bkj67qCYnH77pQNc4gYm8z6pGK1Rai7bt",
  "key9": "58UmcTmf7uNZXaYXJ8WQ5bezKkWNJPV6R9a9jwjfUEMv9CjBQ6xYwgM2ESL2HAWvhC75AsXHAZfniFzk5fvNN6N6",
  "key10": "23m1hT7dGtHuK1ztJANFoRfMixtirpsryZNusEj14sub4n91ToGv6YumRaREBKrcCHQbXPYZrCi6YxBHVHq1hrvQ",
  "key11": "4keqL98sYMm1EwcLTEpUMkCc21mrgfcCK3KB1XxMm1YU38SPUnZFduyMAfewmobQVCuacnjgjHyEo4vHBAVRQFBC",
  "key12": "4LttnYNMZmrzv9fkAHqUxtcFysvn8t62FGFB21LGq8v5TLaTKEQkK6m1saKmrgRrAY14Yzf3GsxNr2b6uJreD2uy",
  "key13": "5EosQjVkJPwf6eJCh8ukSHZFN779PVByQbdJyn9PHQswUC2M4yNMa2LZqbY71CxGXns9Ag7r44VvLM5LcnwMgQ7D",
  "key14": "3X3fiqdwjgPEvKcfJYLhiTY8xTNx7KjZSHiWxAEeLENJuBJ72G5H31EK15btbyLs47QpMdmkwcNoj1bjpPjoto1y",
  "key15": "2hN7kEsv1zwbuCzsekZ5pP823KGoAqo5pb9F5xCzTTiZeV6XQdNm5A2J53RUD3kvGR1wYrWp5WvpYBk3DcvZiuZn",
  "key16": "zu7qStcrZUAmAN99vBpA4MFznVTR6tgivdTi7nd6MXwGKhPyrV6Hddsa9aa4zmnKqsS6M7DdYVmkhoaqVWj7FfK",
  "key17": "ms9YYfkqZpPgzuSLyTMEJX2tzYXSsJ7sZsqEfPR28w2RFFdMsa2XPRKzZ7o68JK5r7RUvSBtBKKWdP4vFU53GF4",
  "key18": "wp6nF26mbHPhfgfwYSjb2DLFJugJzdAVomu9RhhzLN8r8FRgnZ8oocgnoLSpG32Rzy9NUC8KqK3rfwd42UQtFb3",
  "key19": "24NoQgdfMF5bc9UTrpydEgE4jUh3LCPiXJxjDZTSoABWUUCPjsWJJ4zQmEnVpmLFyWMnqFGE5jVvfpkqjUZ7fHYV",
  "key20": "3fxsF2w6umDCt5pAzjkTwnbCBo2eLkAvWWW7nvfeyStTgNd7ywnvA5KDoDrE9xEryMM2QyFKYw2RuKJ8daU23vm3",
  "key21": "2XYdS9Wh9fiiuzYhXnrbcJAa1SWF94m2N9nFuZrSSkPcDm7TkjZBZNp5FXAxudihCKzeq5wLWzsSRw46qBGWo9VC",
  "key22": "4HYNW85BqpCTtiyrWdYXuzxnjDAARbn5UwMomvmAJK9Jx84ikZL2R3ZXJsJpgYJ6KdUX3i9VqCYmphtjWdnxG5aq",
  "key23": "ENE34FEELY9NyrAoa3DcEbSXY5nYub6f1t3uxSs2c2Mt2iVojuWTGuQmFX8dZ2CDxxtr9PxDhhHKCdu3Xuqwp6i",
  "key24": "3dPtYFhtej9xsKW3zBNrJFyt42rQ4ZP5LQucXgAtX7QMN1MY8TGJKBneepKyCMZC3hqj29ZMcX4Ntziy61Acp8uP",
  "key25": "Gs525MEhtf4PygrY6egeYWz8necUD1GqUrj8Kh29oiBYQq3kDgyer6ZT31NSqqnDT1G4WHvGJxsSwFDGAzM4KMG",
  "key26": "4UaVjfZ44DecwWGYoUrxuQNA4cK7r8etV8iUrrhDH2phzvj7ADHpHQCb6mse87XxjWsvAE2UYUW1yoFSvMt29ev6",
  "key27": "SgnpD2a6xL88XweVeSwGFVVLKWhxQwQj9Zd8onRQsx4cTbDQAkMjkYa6g8cmHPDviVeN5vQ2bfrT6pcop1dGVMk",
  "key28": "XC18izwzfarAihzcFjYMzeAio3SKzvoCDdifwAoRkyBCdZ6EC8bmt2495R3RbJba53GiGEDxnMm6w2R2kAPx3TF",
  "key29": "3K1ruzkWMgxshxt1SzspSnrvFY7dpnoS64yLhx4txXEQtgeR9T29SLCZLB8xxSLBxtSmio4CoFiqGicYwppBuqYL",
  "key30": "JJAtYxTKTY6ByvSbx4DSu1MbVdPwJJfdEpWsY4KnDLUXsm1JkJDY2DgLvXSGB2F4VnsZp5gAa44txte7EPHEANU",
  "key31": "27ibZvFRVGCM6hsuFQpGfw59X8m7HhdcTs3ggC34yXhpApdVRfchQm8DBTjPx4JvyfqBFcBYsgfrqNDC6bHbGwfg",
  "key32": "5Dq1PkUZatB8dVWJGhBoupARCSauABWWyajDva9f4P9CbBc3Hsep33KujSdbPtpkS9eyR2ZF7BsfQt6zR7hSFHWM",
  "key33": "5CMieLrqJYsoT8XJzNfr3c25qWNA9qWtN363M6LxDVdDQhgHJ2KYonBBZnZqdmoJsXpEGmyVqG2ekaLeimu9c42o"
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
