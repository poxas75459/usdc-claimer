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
    "4h9o8fyA6ctDLphEmZVkqdEE4G2JMyLDGLr393aDetftvi5n135vpqoSqRHY2LR172jG26n5aCLY1rKRfSTgyQyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kHKXtHBj6hrminKNXiWjpQMbEJXteoHj5fYcKEkfe7cmJBdBGiwNiAVhQX15SVQu64dH31aKfrFpEUvRVPNbjH",
  "key1": "32ZF3PJK5JAt9hK5CTy5TT1MD1FTDJjGTuVTAWWANyCBJmE5WfRvEgN1THGJkYPfgHprPCZwi8UF84tTdYyxNFxw",
  "key2": "5wgwTeGSvt6TidqEZKF2QxgjZ2tPLUiULbhVosF5jL4Ai46hGuCaYEqvJW3ahtjWDXykPyCugWUmTHVNUpcLkiqw",
  "key3": "3B6G5VcvKmWcaV6LtgSoLRJMYWmngGVy7uoD4YdFXURGZ2GXkt3VMNePb4jwo1pD46G96CHWAeutzk3v4ERN7hCJ",
  "key4": "2kTd2c3JpCx61MSuMXaSkywH6WbQZJFHhCK9RNkYAt9FVEGxr6DbTt9avaSiUzf4aunCAUdGJweXkPUV53yW95ru",
  "key5": "3tWRvpjLYKwxmuHSM3bvt2iXZ84xRiMiqj3LVdnZ9DnSH3PSEFpi3oU2Jzrqdszeq75YStmp61k3fiM7RcMhj9L7",
  "key6": "53eNJqK3NtbWK1DfGyzeQRJ3j4ipwKKaskyNuAcGUaDrezaEsweo2oKJmr4T8MtqXbe4k7jUNPng7dJrTXE5ku39",
  "key7": "5mL1nvLaLpAPqzjTqC98A1PMECdgTy1Fkpy6Zioyi1Cbz1hbQsM3mLjwj12iaMkmzMfLxo5Pph7Vn7FmriSHMkCi",
  "key8": "3Gm3HfcEama5gmjgRZWvyFfzbE343DwU8jZonAmjd6AqABmUVKas3WiL7Zf6CmJ6UBZfG5e87HKSjz6of1gyYNGW",
  "key9": "hL4ev7pXiYhfXLgrJnSzVJ8y9xBL6Zke2U1iHePb99WxdhMmyNyFeNpY1X8GPmZ2TZNBWqmvUKQVeGfCR8hr9qf",
  "key10": "3RjUAo45h537fUx3isVWMYwseDyUqN51HLefkrdVh54Q3ts4G4x2bZ1DCxNkxrL5U7G1WNEDveQ6ut8FebUgdcuo",
  "key11": "5EqUDmhPZTciKe27HKwTcsyowZ2Puui9CvZnwi2HAqaUEwDdjKpTeX53QTV3BsUSd7k1Hh9DQ2Ub8znWadLDAZYG",
  "key12": "2hyVw57kkzryVRy2a6z7Qxwk63EfA17kX4VQ7FHaux3eUSjRAj7dhWdmqseTVEgojGHSrs8JmCLJV9m9HrugJSCH",
  "key13": "355UXvqiHsNu9vyc2JfCsa3Cv8cXRF87bNT8swFuhuybREUjXnDuzZyJT5Z9mFZRT5NEXSrhd8PgtqE28ExxFKJA",
  "key14": "4RS2tzv4QSKZ3dF7qDMa9Qa3QUjoH8ib4xqDb6PDsCMUKtUKevvL1PQLYXUXg1wD3t9GSkLkGczhkY4hucTAEvM5",
  "key15": "4t6gn65am5uBiMUNMinBG1PkSSKXh14qoMEissyF6Kndjuokq4TkRhZKeKnDwLEFbvjX1j6YhrwoU93odgC8FWJ",
  "key16": "QDroLDBH9kTB7vGJBrczg8dwxBoBRt2vSVet4mUwp4e1dXA46G24T77aMKPTtYiK9s5LsreD2AGhMMKKREBwqAk",
  "key17": "46GAx17kqKvbyRhq8nRmzLxh7LFc2G1CFe4WbXxytDpVa5qquUJF3ymkvi8tgy5nQwBgssB3cgqK6PeGsTT7faLo",
  "key18": "YHHXVG1vffkEprJCXa7k1eEY8MmAdHVuVakrZWJmMZw9dA9MY3e5NtvyWd32cZfh8EWKvFCNL2akphT8m44b8tk",
  "key19": "4Le8ZZoTozt2wVFpTHjHgpgsDHfnrbCsqXeuT7q2D6F5qwj71pdwWbkJ9iTFZpVD6UqJecUtKMvUriL2LTqn5njG",
  "key20": "3bNgmv7vQrP6HbdHqWBgAdBfHk7E6zCuYAZMHKgbdV2SrZibHkNKZP6v8frGLBthTGCz4FqrKwuWsE3nMGDzm8Ro",
  "key21": "4D5HLdv94uoaee8PtXWHUV7YdrLmb48SixykmCkcrLyyHYRswb8bz4XUeTHwbrnj3wXfDriEAQ7pNQGgfjdAdFSj",
  "key22": "2yiiq8VTUQiWKYzQDqj7EkndCM2URT2B7jSBSEFsRD8PLE3zYYJjY9yjw5PnvTRr4pVve9iEETPjXnrGxNMByVJg",
  "key23": "4eV4QNBEWYqNzuiBRGcBmtEtUV4fLy9ebXxvFa6xCBhgGqQ79pP1TctUnESqC9zgFNFy5jAJzjvdH1XrYA1zTbF",
  "key24": "61gXJKukZdfew4JkmgEt5iWWQDVUZLhmKJduVAwo59ggpaABnXpvRgcuZeUXwiGWpUwfKZyYyaLpTxkKYLZfAFwQ",
  "key25": "5LHSqQH16RRoYx4Rv9FVMFWzStFg2wh5uf83nDoy3Fy37ww86pNa1A6ZnmiLGhuLLKo1Mp5PRsX7fWdPWfKWk86k",
  "key26": "4mJFaf9tEKBuk5FYUoWPDpj5BDrVgivTkGEeHBrn8xtL8HrUnies7yr26yuMKEeJFC2g3F4dBbUGmouAminkwXSs",
  "key27": "37uGfknxZ7g626zBXLBbeU5Ux1uSfxme4tASANQVt6W6tGXoxsyb89aPYfb3D52s32xeNy2MExG1Nrdk4LvkkJTU",
  "key28": "2Sh3gxASXBSwbQYJbcwku3ZyWrXmjUhthr2ZVf39rhXDJTP8vuBeb1GJFo4x6PCLzmF6PhKbmstNxNi9WKc3gECG",
  "key29": "4H7x6QVu9Q6uA8YcoZR3ye21hdC816HqySRBoXe1683wBTTgySuaqkUBjtaEFunGRd3KHxH8UG9nKMw5e9s8Z5UB",
  "key30": "3LyqLs8kyfkE962fucfZUKgQNiygWyx18p8vmEJCHt94Fp8BDBw4rCyyCeQGcnNt1mtYHAxF7zAwFyTkQFboQecs"
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
