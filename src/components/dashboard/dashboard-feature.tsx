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
    "VMevqACvwLgGbc2mLQdov9yBC91WgQ2TfiQCUzagJ9kSzg5pugvfa62V4n7fnW1EFEXa9PDKW4BdC5DTjZLBeYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7S4Td5HoHvRdZvJ8MHYpBDJjbxXWLhfQP6E6nytTNzgJDos6bFgA2ReNKiDrFrnZgY9K1kNP9B8JAgkNBQ5ZD4",
  "key1": "5N4kqRKNMpauryhAyTKjVtgwz2xQGnupbGJsth2TXU9rbzbset48K55prXyNrKeQb651dwMJbVYJWpXZpymRcGBL",
  "key2": "4RodWRHNJ5pupi3cWdwc6B1WH33WWjYu9hnN56zZjKMo9EmVmuWwB8zuvbsitQsfgZsUDDG8odkkTaMjXtTGBhmg",
  "key3": "HcS2RWAGpKFLYr5aDGKq3y6eKizxq4kd5412jjezipATkcD4TGDGB46UABkifrf7ePakVmbPjZXMUQkz5kQBsMs",
  "key4": "2YTnoGTDQaYPFcGhzQdZVezog6Gyy5zBUvMME11C9YKDA5mS192tRdKzgV9ooXqPBRtYD3Z6zAuaBtkuLFX82Xs3",
  "key5": "4LsGxtmh7ptm4NLBWbnuqWrKF3RrmAELuEoHzFfvHwAYqxW36eitA9Pn7s7nedVS2qiwcj6cRKMPtEw1ug3pD39p",
  "key6": "3s2gMBf4Pmunh2M9SrWFfsAfZS4e8y5Fb7J5vMmdb3oggNfMeYVit53xuAFRKApv7kffAXc9G3DJMpZDtoMzQXar",
  "key7": "dVK3FZgv9eqr2MsReuoNCMpiGJyA71DotgSi36tUvjua7eLtDExmxkBLUP7jF4uiNV6BXSNj4H816AG3u2h2afy",
  "key8": "5kR7sMxtML18uwxiAE6vz53EZBYAkH7GG2o96NyVSJEdQDDgk88bSngYuoqYzkeh17bJKw2aPhZKyWj5TeqxwRoE",
  "key9": "RmRG7K1WgR9suvpGzj1KeouBantyodmiBwqGu5Q6mE4NEs5PxFfqsSHdYku5KoDrDmWsrniRfwkWyR43Q8KbyEh",
  "key10": "67Qr2jNzHypbkZgmhomYxFqcrxopAkzTha4XTCXHjyJcPcdAGG7tvjDRRku5wHr8YqB5fm7zj4wCqsUGMzW2hD8x",
  "key11": "4NH3xinrcxW63tL26b61v71is7SUULkav46Bs9fg7eWN5QTg84GPzptcNpX5VprmgjcreTVJbC6VJNrLosYZaJ6g",
  "key12": "5J3PRbPi4TxmiVpaxzUfRHnm8u1fvCKWkCWLM4m87iKDXpgcpytzivu3FMwdX1PFsXNXExZSFqrDFpqokaN5K7ZC",
  "key13": "2faZAejePtE9s7FtAQe35RkmHAxbETBUQvzXh8CGLve9dY9roSjPdxEwMc38TLmaTW26TXv6KjeKtzCh9YyXLFf9",
  "key14": "s2ab3rAigTspWPk2cAtkimEvvJafPS91vbrHMnE5DiLWyrFfT6bn3dVpZCGyuYKxjWkMsGeBjvFFv7nouXkXF74",
  "key15": "iQh1fgjrjiP3f3r6ZMoBs7de4sopAkeFzPf2QAAg8qHXEkwGqSo7ahiutGidfCKFKQ3wihXuwMPXcKcbFB35vQ7",
  "key16": "32utH3fYPFaxHmA1Tv7eFB7U7LwRii97eE98HLmHzDZnBBbizitA5NSqM7UvfPATfJnyPuhw24kdUP9Q1qqUM9tU",
  "key17": "2PxFkfpuUtH8s9sXb5SY7PCJ4gygJCTb9hTxWwi2BZJomtPuvNLDfSwe7gATs4QEnrw139tMyVaCaNMHT2UZ5NhH",
  "key18": "44CsJ8m6spcNeW1QX4fyfkHpCtcb6ppyLYkSwSopn8ozQx28sYR2hHoGJBsEwbBtSr9dRKpJnzdVrvFqZng6SYpe",
  "key19": "5X6UHwJxAEqj95gMgpesaBjYgpNui8zqRfQByR4m9R8no3dR53K2idWZJs8GXZBwBLGPdA1SfzzjaScXKyEqgpmP",
  "key20": "2xG1Qom7JM4Bvw1saGhMhQ54UXG5je1oVJNjSqtLHRDandtDVSZMhwHXcQXz5p7Hr5cBSDvUxSUAZpd7os9qt6Mv",
  "key21": "2aCbHPxkrMY6s3qangqjiyc71zHpZoi9gPxBNti88D7ZrwBB9DbiWEkkihDdtMkuDPrJhTfBLG9pxDoUA7MchCYH",
  "key22": "3p2TJSawynJCAi4cs1ez5hrtUcTGvp8XU89uUPFcuMq7dfL8DumCUXGJMZjUcPSy7dBjc7TGfSr9Gb2w7F6Skc4J",
  "key23": "5ync22J936iXkcGxxJ4ox94Jd2TdfheB53ur49UbCKAeaPJGD8YEiftSi71K3q1V3zymky8f9mQg8ALTYrz6YrFM",
  "key24": "2TGadfarMytN8nPJYBYSW5qqnhkw11eTd83FoBEZZDLHzAcKUucqKhDizSKpGZAEfwbmfi1c69o5sEUQcGFuxkpL",
  "key25": "2UCjseHVDne8mvioCqdaSHA8dTsvcVe7MzrBDgGsoAX6gsH3W4yP4ywcpbZkBEWKjCeXKcAonRaPU22o42UreXL"
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
