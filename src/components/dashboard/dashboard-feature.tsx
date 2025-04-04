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
    "5o6Qg36vHaNb39LnipoEB8X6FwqWsHeAEEbLky8TnCeKahVg1WSxGzi5vZdjs9bkNji5QCegrsZuXnbrr63ShXXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61EjNRJz1T9oynNZMnpVJKexA8GRrouXhXPiJdUsuqxYkLJzGfc88mRLGeyW5uExiuopgPR8oYBBzd2sLLWiXiLw",
  "key1": "3uLrB4uhXWkXZDtLTenBVWxhsutAjdaUrUYFXijkMAb4g8pV2fVfoqiBvFAQgweBoQLaN2mw42Pq3YBnbLhwsiVH",
  "key2": "925WgMHjedeixmZGP4sR11zmJETopY9nPs5FazM1REq5uPq5wg9wRnWsUdQkpXhWMjYfBfM3DYXAcvcnhdEDLze",
  "key3": "4RoqnL2efk5jJJYAhfqssGB43UeoF9tyid1LrHYUjD1X7NnrsbRSyogXr6yySrzUkun9AW3GNs4PvfhihmPXUE5w",
  "key4": "2XK9yv6UFkp3Rw4YrNLhLJdusMZpT8JaqZrXtUTgsu6tHFYsZra1zEMg348pT4PMS5TNjJeDwsGoDp6aJZTHxbVF",
  "key5": "4wVoKzCpfFcLzmc4YVEXZuyFjWmVnKULvjRk3DhyJgLfqixqcM2PfNvhGiz97QYpiv4cHS8xazPhRzeLuPNPofWJ",
  "key6": "44VuBhErRvdHRa23Yz2guFiaGJcxiu4wwG1dsg86tg1SPnu6azKQh9eb55f12ff9rDGfBRtRdkWYosbLEWMeRFyG",
  "key7": "3fdETaS4buAcaiuP3QYY96KGDSvD1pc5AzfXe5Kvv6nsbo4eM7ARfX3YxJwkQQkuPemNnL63ii6hGBNUmmLQyaC5",
  "key8": "2YRYHX2zkPL96SYhnCraKGY4GH3WYPRshxDGu4tXAYpn8dzQdjQVrSt7Skom3rvNYUAQFS3QSBP9nMKn1ZpLPsoc",
  "key9": "epENrFF2bJhBQSdMuLRn6FUNJBNYWw3eusLVv245Aqj2ZT9TAkZUcFCDi21RFNytr8nNb2YR9vwKNQKoD4Sy3e6",
  "key10": "4YrzQscgtAzHEfm2Q4eqNGMHvJDXUUaLFS4oNVZWJUWZdbvR9vDXehqLQ8DoKGGZUSWJ8T61NGT6RSdNNV9WHF4x",
  "key11": "37hzRusQ6FrWoDLsmNCjJQMS9fzGjayHXSDRYXH7ZW1rf3jyLWvgJhLu1ZaadwEZKoBL2f9ensKrA4ep8NS4uLrS",
  "key12": "c5joD3Zq6o7TnWLaKFGxKHBDkYj1RwNbJ9jxP8c8JuGghHiCkyxNFnNEZ1BJ25zoQAXCf9gsuKDfFwvTna5STgW",
  "key13": "5oeTyvu27RYtTSC76RvNnnd93C9U8pQX8fX9akz8HiSotHcS9dR7hobjtsCmdea891p8JRq4Q6tgSFKddC5YP28z",
  "key14": "4y4kUUbc5YnUTYkUqhM1LbRgBNKMYaeLoeu7jGZiN6oMogE651yeLLEnBNdbWzKbE5ZVxxrwNWXjbnXUfomXdhuz",
  "key15": "3gCBHhgGoUTBGvZcSWZqvaoFC5J9aPt7nuLJyHNQGRRPy33oZAJ7uxi5jtvP7jkm7mws53WMfySdMiZoniSk7PSs",
  "key16": "2fY1xLEnvcUKC6E3kS8fGGzJDpmQQiCSdWKKCGywCTesEE4oAxT5GtoRHKsjLhS6FyoXrYdPQPwQR8csEbaEj9fZ",
  "key17": "3N92qqpHaLXAwE61ReYBdfWhvZwgH3rsZe54rkHgP3ParkouH2PgiR3DX5G9HEEYc8SuQqH2F5Lii7sFfcUE3efK",
  "key18": "hvtYizHQ9whwwtntJXyWkRwmv5UGZ3X2gEmN9U7XNhx6gceq8AKYiCZTFCde5ejGL5BXLrjGpTiLzGVEmth3oTB",
  "key19": "yEf3XTRpoJG6mDNrxuCzH3FgXDTi1EkooFA2rp7zZLmCdE8UYX899jQRP7JpBin1x8xUv2FVuG4QvYkgPstW1rH",
  "key20": "62tbpJfcD7v6dyZvC6Hzp57qiFmWtZnSjy5xEtbjefrtYb4eak8v99MiJTaEVna1sVyoXsyzjv2S1jHQqcV5DHVz",
  "key21": "ZcvSwBpwKgiDX6n7t7KVRSEeE9ikic2JhHQe25eTS1HQ5WbUc5tph61aCxrhwWJbvNgjhtusjG8VuCpLdw4ZmxK",
  "key22": "Ai9cYXbPbcC7voTqueRDGHPt2pRSywuLSDMWDa8bpyqRKhkndzw7buFUPc4dSL9MSi2J5qH92eyQBrw44afCoeJ",
  "key23": "3ptNe6kxKrsHgtwcjzhbaLzxVbXjYfbwCtzTpREysn3c4PLWYFbDVqs7b3pNPbJhCfKEL3nw82aHoG2gvUa5eKph",
  "key24": "kZ6EFzHsrk1tB2YWB2TRYppzFUWRBaCM2kuoqPAw7m4vYzvRFQZxKzRZs3mPntQ8prWLKtoBMxpzMxHGZ7RTghv",
  "key25": "3p8z5zHZbxkDJP3eErTS7Yy2r7sYm5NMQYAKaeYhpJbbDMxdAdg1wBCE5b7QJnQjGgCgV8TPoDgLEPmX3ieqcfwb"
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
