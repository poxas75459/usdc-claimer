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
    "3yWk9wdr1y24bydcWS13SwaqPdSrXCuVxny3TE7b6Kah8UE2YJQUJJ7k7B5zizDkHU5XH5CcCGemepNAvfedcPH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGrrrfSL9bf5PG8RN59AgGUkR87igGCUAV9GXHVXjPekE9vJsidi1iTjXBsXyhL6BHQoXBovhiC2N3FmE4xsCQ6",
  "key1": "2TqwFUzmrUr3o3JzZA9KKNsCci4eVKspgp2fuki7Bh9JRhGDGmJWFBssaqAW1pRcskcpaPD41m9qD1mCRsxaSugs",
  "key2": "2ZZJ46jpkxwse8pFjFEserq9NzQncu9JBjT8rJ29CxUxjft3qkqkeQ16CfdgMD4ZNVJyHxXVTcoBRXfPjV31B5h1",
  "key3": "xtW9AUD87Y9oodqjDer33ZqniRMqNMaFdVTkcSsgX72cmXh5odnyXYeCdEBHzgcgssSvJtyMbmhsqq6hwZmYdp1",
  "key4": "bmiXkbtYHRsMaq9ePiLTcS52JUvnC5ywu4F7YnU8TjFc2pWXLYFtPmqXwhxhzNpfBHnfXw8N2jmnqSZj8bsCxwB",
  "key5": "3gX9baGFd24aw6WVpHcUNHt5M4sL7p7SXWLFisz54YdJbzyASf4eDnPgr12bcTLfrjbjq27npUQ4BDQE7kibVZky",
  "key6": "3oaa8cgDfcQGztXhREataKbCD9T5MoRhP9mtkXX3VB7Hn9mUMPjyTx7ojjZa5gRsr9HsdVrKhSB2JrLmkE9uDpuc",
  "key7": "5JNbCRz8XaCnkizxxMihNB27mzzdyoCj6zaMVRzA6K5DwxuyS5sodrrFFBnzPEgudRdVhFrKcNe2vdqMP3xjgySm",
  "key8": "2L63JLhtJbFk3hk2X7QMfJQ2AQ3bG9F29joRN9SoNip9tfm9NSPu2BcVZwDHg6jHy56aW6KPMRESTsYJEa5XvFGr",
  "key9": "fBVRByRS7cg3o5qTFLPHEsevScCpZxVggJ2B7arbYv1QnhMQhPwLgiHjHmxPBJzdL5dPLYFusZEdCfjCKFyAuVL",
  "key10": "5juZ1AcFwVyECGs3evmf8qpr1xRyg7KgSaQSn3Hp8xxNpHCgwMijuTZcbqf2MCwcSXZQuHkum2v162R1tfj8ogVY",
  "key11": "3aCjAKw9MfvmbhGsmzZqJyTQYWy8xJjam6Uc1V6G6P9rM2U6MUMpXiFvEkHTnvfLVASyGcR74uK92i1U7Ln7qyrR",
  "key12": "598Hb4wzrTJAhkaDvrsvqE7XtVgWqTAoDzvfc7k1NkFdAM5TFHJg7XKSNzfyCqASGS3XytapCX2cEZWuFpCEV1EN",
  "key13": "3UJumvLsWT7XZA8iERuvzVqowNQ6tNvrqou4pQYs2QiSyaNcsB6v1SHwSfdyh2ziWqRVbm65qNqHUi94sMw7NDg3",
  "key14": "39dk29nEvCYVobGceuGz379TSkqcm3r39F61gD1hEeH55fYkCq1FFUYSAFsgDZZXVyxxwLt2WzykojF6khC4M46Q",
  "key15": "3vFa4mEmUCe81tK7Wyewg81jqZjd5GSFR9qmy85RF96pnnPrtYpyptWjc3aycwYVz18qX1UPeG8Yi87ZvoBpGN1k",
  "key16": "2eUQFAH7EBaQ2oNiRoyHsN8bbAkH6J1oVsF5W656aVHPd3tnaFVZp2zw8fKW7Kpr9owtDaTPRyb4dAv18aj5JMSc",
  "key17": "3uEchYbFV6hZ8B2SUrnDyNvFKCP2bqdRDzvENzARMpRX9rgpKqHKu2xqzp4km1pbhLPSZVAk33M7t2AEDVN9PzQ7",
  "key18": "3YLswq9sdz1r5pdsjXhRPw2wWtgz4iY5ALUxNFgugk18L6aJR15cm4CzvWRxXkVB28BNBugmwgAXoA128FzYkEe5",
  "key19": "59HYoLJsBGuej56hxhP2C9rPU8ET2mNDn16jKUmrJobQm7muaTeWj8w7LzrP1c6dtps2HEhzMXjg8wPmdi1tFn6U",
  "key20": "3BzqLqTrFAXdneuWYoC9UQGqUo5ibbjFi34WtKjF9WZZu9HVx83pEKDjUAtPmfxgFDobENxkCP2SFgpkszSeGuL2",
  "key21": "5v4hSZaUcGrX5nP3hYPXSofLAXxLFUDsBw5QzwM5R1ZWXpLgCeymmue4GNDABd28unRfR2vH2G3a8ZHf7CBZAehy",
  "key22": "dzzd5jGsJg7HcRpUEMp8n8qXN6Bd2aZs9bcYixjAHrxmj6Xq313PnRQqZQFtz4CBN5qbGJxESj4DdPTrrbAVzHE",
  "key23": "2kAYxFpHDqWLusGbrosxWYApvtePM4jVBnPYWjKnNDJHkho3cjJbbfnjBLsj1rKp1nuMZvR6AfXu4HbAvNztcGGD",
  "key24": "3Fe5ip8CmopTtHmVmvXxeUaPm5c6jjqhvFdXQVGp9i2TneXeTjEhTsNUB7AhYcF8K7JUDBL4Sh8BHo9xvqDYWe95",
  "key25": "5dvfVQro2LZdRovfrXRQAA9bJdahquYopBPaxGDEFVSHqAVeXvPSRC3vvWu3wSCKkSJqkWYuP8UwH14SNGTD9GwV",
  "key26": "3eRdT5afRa3Hi58147ZgYaPGuPyF667P9uteG19aYvjVPFBVLkdQPvgheAousjUiLij3NotdLk693kxE1a9jV53U",
  "key27": "duTGHRfdiv3r8CjpyNpV1txoqVNLH1HzavUcZ6THHypEyonCyB7y1oBUdQeY7npsS7pWhxPRfsmJQTncybAQ8PP",
  "key28": "33bi8Br3oDyD1bo6ErcarPWFSwf6zdEgxkgcZTygzP3tTXTB2eTPzmVufGE27chYTJHaBy6AdkTm45N6zUGoCWKg",
  "key29": "2y8tY1TPMBSFXYNTQ3YbMzzbk5rmCQeSovDprUoPJX9rNCP81vgvQ7smT5L2a8DgwQjdMVGK52zRoi21Ye1cVa9h",
  "key30": "2tcuZ4UcuuUTbpq8JYggBbaiZBHESRrNFdqTC3enm2iLJCeNS6yBsvNrdu7h3BhakzgR9XsKVqFjKPofTZuFZys2",
  "key31": "E7oKD3jV47dYiJejwHayU3uHwYwmrVuzkxvTyjAhMjModzaCAeU3v9bm8ybFuhWLNZSyQ3VxVBy4Y7nd7Yoe9Qb",
  "key32": "5gt7C4QmUizDnnbdLaXQ9h8ctdUSSo8AFA1nzKYo6eLv349JvZdkxwL5LL5aDHzXYa6wHwweNzHUtMoupMbmU8PP"
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
