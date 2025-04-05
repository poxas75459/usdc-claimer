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
    "5AoS57dce1FtXuFKpq5yCmQwj9mY7XsMNVHieopMWPVGXjxdQhS2P8UmSfBe1PjHeUYSyf9hDUBubugsitfK52Ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5fBrxTjoQUtckL9kRz7475Ndon4mdnzkG5edNGvQxy4A8HgU9Bxmn3Eon46JZgb3Y4jZSStLJ2hEPpNHKhnh88",
  "key1": "4c38jwFp8rXA1DWTfp1BLwSKQuCDTTaSn7ZPppUcFttmoa7hcVVXncucq4MFMRyhHZiDYfo8mRjp4szqiSuDKUUi",
  "key2": "G27pcrpR61V6RFGAwJr3ngEAW7sUizvvAh4HGWWedtLzZxX8vwdwBHqiMDXW1s9Vm2iHz1nqtHgK2xNMc98fJC1",
  "key3": "aW6xXRaB8mgsHzUmHfqLmiYifk7iLZbCnkcXdMh6W533auoFDs6MLkrnoimqtx3VFXo9wD4VutXMfUgiQXWSNky",
  "key4": "5zMuqVJFGT5vMdNuXCnJfc2gVgFJpaYZ8oAd3NgrSuLTcLa5afSrFRmcRup1DDofnGm4nf8m1qKSG5hNhBbLQZgM",
  "key5": "4B4FWhiUuHHqK1aDQcuaB818yfRWfuSJ9HDuZv1JNuDaV6nHxLn7QRXhMB6zkYpamveRky1fQyHjHf8LodbM87Pn",
  "key6": "DM3X6gZdJieszFRofzyKFH5ycbJuyk5b2irb2YpgfCM6W8oFnLqRgaEPXWJSA1rJfcwUr6phZsQLyV6uTXCvw4a",
  "key7": "5evbLryQcRvRkqjLvmmtkDBLoL9SXvzDaqcpFKHWDHA4YFRp9CVpQzkJuke7xuZsTrV9U4abta8WAPVgeUeaNkPe",
  "key8": "3KbvLVeRCDtBLWyTzQpbgmY3vcYudiycZNpZ6sZHYcbnWBCaG4DqvGozdAZNwWGpC6mYVSqG3LGrEK69BYEbKg3i",
  "key9": "Cd5koZ95TyTGCL9ganvD645H73C2bNxwhfQzv7x964CsdyfWWT8Jfbz1o3MDPh89KnYU9cCtjB5ZLB3V7zpdWZG",
  "key10": "3vTUhraVnS6iVL5wWSDV6yeiCn8oi65jumAuAzMQWJn53vjavWPpbEMusZHe9a2euzgGeFHAdoAUF5XNfQomqbsW",
  "key11": "yRRrabKuXYGqdzjpgvRjcNWLETvCEn5cy1yrzcJEz7Sqv7cEGCtYYTruTCuh41xwWDoskK5uZScV5WJfqmMoJRf",
  "key12": "3trEzsLh87Tz74CSB9QcdmLgdaAcwaDb8eLKZYiDiwM4M916EeZUiU1xQjtq1v72W7z8BHEGV332NjFg5P6HbhkF",
  "key13": "ZepaEFqMsdBKUeif5N6Mu378wUwTAaUFTQu1ewFHu8t4TBuDq8gSXUp1axAW97FfSyQdqKo1BrZxTAmQ1QpFxn5",
  "key14": "2Diwx7knB7snjHsWnebtLEmwVqctxMZAjqiFrJf3t5BEbVup8Xp531Lbs4UBvLHg5cCrmbdNtUvZp11jeDRxPFDj",
  "key15": "4Hvp8W9o1gWntYWCAp5HszXqzZuNAJpyTHGiTVAGehEyo6iS3fET2xJaXKRdK2Bx47prRxgXZS29J9Pb1k7QxAHQ",
  "key16": "C9ceCxDecxNXaqjdrJBaDqMRi6xZ99MPo9eJVTE1b7aHgj1i642CuJANYzcd8omDCdxTNCU3hFKPioRBzQ7UHgS",
  "key17": "dh5Kh1xG3awbvdjUNacFki9jHYC8vSNk8eV9JK4vf2K6LUkiN5x7BJrD2j6MRnWzChU2cyPMQQxwsgCmQXKpgoL",
  "key18": "2DTtRiAVhJ7XYoGEDi6ma7RQ8t9A4DnHTihqcsda4ugeMrCNh5bDiYygYKqDi2svM19AeSbmiznmmYqQeexwtxu6",
  "key19": "4zkXFEwvSS8sEDdTsEWHq8Jht3N3NsZWFnSeKDhdjrsqquqyDskCgtjHTZs7Xr1twdhGwFXr52QmjSPweLB3y6c5",
  "key20": "3N38GWhUFNBYLPBcfzoCWNKPYNCMiLn39XWXCko85FGojVWWwgVmebbnfaWX6EuKNwKSWvnySuh9Ryv9ssv4kjY3",
  "key21": "4knyBrQuBj2LRGZrcim48T83wS1vVaJiseJ8HHCfqDct5pEvv2EFWpRAyBEU5LyGUbp4Zit2kDw2kpbwmMfB3QrG",
  "key22": "sTs5kJqSXb4QetKyTh1BjfkX48denKUAQVXBkVmTFm2b3RN9kf1KHAbkFjRevta7ZrpnGBsFehtmVpCR8B91riw",
  "key23": "kVwTETd2fBzUGN4oNGkXt87gJJJaPuH4DmH3rcjkbLep9PPtzPqapR5jkMH5XMuwNXegwpZCgd7QSfa2fRnkxRr",
  "key24": "2C8ws6mgqQeMerN5AgCxVaXiqjnMeYrfAkzGjTtv6Zjx12ismjduY2AFQiBcmCgHcbDddtnkeA5N7PCcZCFhn6do",
  "key25": "58bffDu8f3NYjsfcQHzpvWWEH746N5jzpXsvymGbz7hGTmaUPPXNFoVkkQFfUP9Vbgnk7kpJqjXKMbpwJv9bgAYA"
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
