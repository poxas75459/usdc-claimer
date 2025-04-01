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
    "4b855BsJt5yyT5nGC3ny8QPHzw38TLwVoMyW2PHD8dtZJVwUpK3NA9fgHtwHfdHKh7afSxzsT7mNdcrm1ABbWF4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jHpQCqTLkxRNYm8GtbSKYEGhLQLvcF6mB3oFRD9Px6KCGftnf1C3uxA1fZsDDNSqKpWuDQKGQQn6PFN8ZYhUteS",
  "key1": "yi4mr3HoUsBE77iPu8hvmNEHUYAJAAfeuFy8VhVi9eTF2KZrpD8RLHHb3b24biK2kH8zKHLjkPdPKf9HmDLCMFH",
  "key2": "UKmjh1httJWk29FK1dtr77YqoVsjJxSAbxWgZcrBvVhJB95BpUqM9mTvCroYQPJiE5RaFQRzq9T4dgWUxm7kBDV",
  "key3": "4evZqTcYbqyk94EaKiCiBc3WZwEmnfVx2NHqiy78Q1sxAw7PJG4ih43L1iyyn1Ga9c6JhXjLG4dvhrdK7dYHWNkL",
  "key4": "M6YPVdfTamzFXEDrfdxNkFXtEqAt2eV7Z96axRmUPef9Qp5bs8372KH9Yy4zYHNAmjRFomSNMusVxMG35wvEfQW",
  "key5": "NGDSZ5qY9Wmps1C2K5VKatf9kgJCxbkZZfp6akoD4rye72HzN29ZJZkzQUovCPJqD1JAvRq2DnDwBmCEzpKx64y",
  "key6": "frBjsHPiZgbEcyuNrtSKs5S4Qi3HWaCZ7Rdbr4wiX9cTKRmUZU1BfrYqDEiqYLpMhuR5QpyVCM7BS7r7opSxZRZ",
  "key7": "2c7EF85ARmn6cSGaBSti7VXHjeFQjvU1ayUrhj1aQGURYujzps5WZ6qKegPve6UCKj23PMUppNkvppovuDi6zQ6V",
  "key8": "4fHPHZbgUU4tL1dWBNkcCp2RPRjR7XK4fPAbRPS8CJxLF4pqR1Cd8ejzynpFZvLaru3MbZzsaZqb2HxL96sBcZ63",
  "key9": "4EMnRKDuuwcuVFAXHLDdhkeJM9RdtoMb8x2q3XQoRbnJgr3o6KhHAd9gMUDPn4zmTTkhRfyvprx1cW4TfbhyXVgx",
  "key10": "pXxr5koy3yfmb5rTLzhy3gGnFrm3PPMspUgTEgfZNNwjp5riYuYnnUeba7QLNizdR7kFhkpYbKm12Bb8nZ2LaJu",
  "key11": "5tXn2uYDKbQMoCB8Xw1BrZfDucC4517e9SCp8wLYk9mqtfGYUeNDG2BRv9vmr38rfDsa5GoikRKQxCThjUKNAr1j",
  "key12": "5kHe1yNHRKur2eBk3En6RKJb8D21Gc2ZRfVxs76hmSfayjSeanGyDZD8uCVpVxSKGUwK47QQuGAeNrRznD91t9iv",
  "key13": "4mztXvafV3heEWdro5krLb5yQxvf7sQs8u9N5D8qnRSmrJqnf1E5w8sCgyJz5TuqzksTJqqsq1GWGAGsmpRBCuLy",
  "key14": "5nZSehXiqmbmPHfBQbsg9hSPAfnvyg5nN9gq9riWcTUbUvrxT9iWFpMdT11uw5mW86QvgW8u2mYybjMMy1WH8Mg8",
  "key15": "EpbaZrvyEzZbNucUamB29ubT36CNBPMrSwC7xMGW3yRYfUTyEjz2gNpctUmQBAtu2dFTGJQwVJSYU7m87CUQuUX",
  "key16": "3itzGf7iMZX8To6vwhbFMBWJGZXwCYFW2EiXpu3mQuLpif1MsWkqbHNeyfJzCrPVBym88ViFz7idZG1Uoc6zuXN9",
  "key17": "638wNom1zDiSZCPSxoqLkdoAeVd83sox8Y9wtRAgUrfnNAu6h4q7cTcuGyzvUFr22meBJsb6BLSNR5c84gJYeRW",
  "key18": "3EuTXzAhuz6DWANR13W8ivvwggwkj3CTujsDPQctH1YKMb9PaPvtKuWr3CEpooUuJ85Z8SRYmN5d8RhSPtMdpdDq",
  "key19": "4fPTQMVhERCeUoT5h9PGDumxJYLYNfkNKSsJRbix5p52Gz6cbNtTiLjy7kZMRHn5mVvYZfwLNttzcso9HBniB7Rm",
  "key20": "4RhbwgkJM3iNJBee4hw8X1KcNNy6EZ5KAypBUS5ZRDK3qrJXrEujXnd6JE3qhgJ7fzrZBUtscaSah249VCTWKTzN",
  "key21": "2aubHf6ZXgd9EWH5zLJirDVkgHH58YgkbHYzYN6SSyHFpC7zL4o8Qr1nUbmm4FxdhD5o82yQ82wVHx8V2KdAmKGo",
  "key22": "3FrDhtvU5NE8bb2NV6Tdo49jKEbS5qZRQBBiJvC8NuKxswBev3SWPVtpVajdK6FtWLpHRB6NLSJxS24kVLhxzUEY",
  "key23": "28u38hKC2fMUKbRWjCFDz8Jzs9brHUb6ReXFfMNVHgtGA1g5brBbwCdMPZoUMYW4Rgz21YJN4YeKfjgZohjbSMyd",
  "key24": "gUbzKn4fY5CcSmhWLBGJDYx62FhRCBavBv4MRuFrfmS2byQQ7k3EMswR3JY6gHpc5k7H9JRHWdDj64G56DUzT7j",
  "key25": "cY3hCoHAaFv42mnabvZwrUYbTqQCkXSQhvMFxmXVGodTHMmqL2x5YfTT1NusMwbUmQuFjupKJYbpfrBTzuXkofH"
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
