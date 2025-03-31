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
    "LBRZEmugmzwFWD62AWDks8kQ316bDUbJZz6Gn1NDc1h1bV9nyHNcu5fce7UsgZ7yo9gjQuPYFJxFMwaykhvfLpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672zuUMqshprFmMJoZjzvTDRMAGdoWduXX9qVnPTsufg9bYmiVazxYtgriP4BDiiTFhjEByn3tTTE2W4KFxCoiAx",
  "key1": "4AW7JQFGT2DUjYtFKV65HsTAD6aszrTDNRKMXPc5Cfb4XKdrbRADwr1krmjkVrtLJKeVzogDh61TH1hv6oGESgbS",
  "key2": "4mASbku4dEQkxJr8iQYyRU8BTtY3TC8rmY6ba14dPDfhai5ad8pYm8cnXjjvgCV9SNKKS4U7jqRkcSSeYc1D1wrX",
  "key3": "aJ5nEVsdpLWJvaE4gfWqXwiWqq6YUn7hSPSKG6DagE2Z7sZsvYwc8b8avgwwhKD1qJCGTAk91bmSzUjTsvmmo36",
  "key4": "63yUvBYBTqYBe6cNNxApQD6Hcj29eu3CHoxgR3RHDo5qxxRyZS691iaL8MeBT95bf8HexU1gpU6dkC1uDp3P5bMU",
  "key5": "3DHmb1JgSRhckSMGK5ohsqnR9nCfU47WqmZosn98MrdBxDRAFsrqHudAGQNgvoiYCndvR3UMJXWJmMFxJR5sQUUd",
  "key6": "62BNJnWUBQEvbyhFu4a19oYdXkvLPBBuumy5PmGMWeNLpyZjLMHqP9vWj3MQeSd3C3Ufk6SdByd19g3pksUUTD7d",
  "key7": "4cg3DYR8TEx1vCfef74D7QpQrCAHWW1qyYxL5S1kbpnvM7zC1jXgJJmWF3pJiRUbgVFssZ89NTJNRQpkU6nv89FF",
  "key8": "xcthx9m1zLskbmVxZrE4YPNfSXQ1qFV7Hp1xiGuU3tRkuc8LydXTidFZxjTNfD7GxcvBg4f41CyMRFb2EqeNxkj",
  "key9": "2eMM8PHVpCeUt1LEYUPkatGuftfXY3NhbZ2MDu1Y1YUDAS9axqjuAGUkCq6ijLbXFp6Wo8ZETnskP59gJ7qFMSYg",
  "key10": "4fF1cnDFWSkoeQZJdaoHwKhL7M5QWeTuV4QzamCCMKYU8cpKMKBZd3fkNAFJ1x86mUUowd6F4FmBS2AVT7kZR6mn",
  "key11": "46xE1J5XJtHKj6yknFEEaGjo76SJUNiK2MwwjzYymdDmQ9nDDMRSq1yJG8LBCXurJXVUVNRFzaiRWNfVVUiLBWsr",
  "key12": "3tzJjJWgT2BbTyzMjU3RfnmBq27zSPpHb1b28chxLQ3kSPy3Mq3zmhCvcFNQdVvU3vK9wPWPo3VFvds3dvvkb9aF",
  "key13": "4FphbxL3nt8zNqyZ2t9jkTD2AB427gyHH12ort1EZGqUfx2PLZBBF9bVRghsxN7hSyW9Etfaxcw6tkAbFZ8LGPQF",
  "key14": "VpuVLJq8bjqnjBH14ZRkFrZ4pvcjnAn5EhtR6wf8C6xk3rzQqTurmvbvZmqqRYu7ySDuS53hYcP46mm2wGZw4vv",
  "key15": "43Hn5728Nosq5oQBwXU3wkuYNJ5bEywXSADhzfBqsVzxvwZ9gXVM5gBurbf67sfmQsWbdDqfoPYFiAPtu9wr9rLj",
  "key16": "4WGAtuQnEuMgb3KmbR3mD7BrUSYo6tNYDhcgW9BiDR8sq22vwGkqcCbTLew7fUhpZ9v9yvScSTs269H26LYLiYxA",
  "key17": "2rGLTtfseajv4s5RDTt4GBGgLVbyoLBWEVC3AvEDYDL3S2PvEwsMa5jLR1eMJ6YfFj43BiDL7Hpea8b2xNJZwRXv",
  "key18": "47o6f48eXPtQxMa9PZziqdFcXfSU1W33qqu2i1K7gXDdwA7jjuH5KoWBtX3sa4tAYiFh5gR7KQuC1ptKyGjhDrVV",
  "key19": "3NraYEMDLQPDokprNJTRDJk8qcGv7CTuM6sigYdZ7Ntg7QzxvTQcGHbf9zuiqVo4L8dyDJV8tyByHpeoydNB9wWn",
  "key20": "29U9GNbycHn3e3ua6ERHZEddyYBw4xUSW6s571LKT9GLNoBE6uvXv7D15BQ5kJV4Lg3kHbvZCPEGFv11RnaydbCq",
  "key21": "19Hm3ZT488n5S4rDP2WAzGkxVRxWvX81gQQVbpw5ysh6ok6kWYLDAo3rLqKdAk8BKrnx9dkos99nutKKSNj8i81",
  "key22": "dpM64twYMZxaRYT4m43agJFuNx8PeXbM2kifd8C1aCArMaSLXmNp98eyD7YGo2wDLUF7o9K4YBo1NpQ6K1zSaCS",
  "key23": "5rV4p6ZiaHPq3ik5oXaYbkkfyb9PHRKzG2WdY4hbuKH4wNT5rXBXWWqWWjqdoQ6h61ecRVciFWMXPzTTQvDeMkU3",
  "key24": "5XLMMma3GZQE9cjtkyKu31L8GMQg3Nt3yeH3dtDD28akRj3tK369GjCbU1vZRrCkyYx9dJUtQbJR5CM5LMsbFTC4",
  "key25": "3C9RsppPAfNxtxZcF2yYe3G7LV4s4yTM1VbVnUyQFPJATiLg5Y9JNmMBxgtAzmc3hdoM3eff3a69jE5VweTZYYoy",
  "key26": "34H1vHijBVW7RgHgqthKkyLUQxiZLydcm8zMMDSQYC5tnyrERMBtwsddXscbrmAAzpdkWP79ApQN79QQsdNCwopJ",
  "key27": "3dsRMkqFUcgxTqN63vLzN2LL22Yn6hqNexA4eGCkorXhRosNnVYpKgzQqetx3Rop2pjcBrXPB5vWQdtAAymqzUwA",
  "key28": "877zgfPQ6nDzmZEmUgNWkyWztG9qL2D5WZgaHjNrFYxGEenK5WPFQ5Xd2M7CwY96SmbjAVqWyKuu4TVwU8r29Q7",
  "key29": "4d5CR5G8Gah1WvJMXKhtr3s772Z55N2fMCX2ASA25JtFs5M6sqk7XrzaCYfrGJuGJWg82R4N1yzuBPDw5qwsDJFw",
  "key30": "3C6zs96468g3aZJAar7kPdKYETHjZGuvSMfuM7Qc8s7uW645Cv2Vi1q2payxm1LT5Djokzj8jJHCNca627z6KJ1j",
  "key31": "3nEQ3FX2f4Tg6TSGVx9MnNFgAc7EsmwnCAoAUdx7ddmEsxaeUmp3pkTHvpPZSxLP5di87rLASEuqWuS9csapE9QZ",
  "key32": "2CJV6UC895DGZQzvkgtkFuc6sMJhShS43UTVgLYPaGZUBSF56BhomTbneatKsdChk79JxiL5Bv1mtvY8AgZ5PW5P"
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
