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
    "3H1cAyskjF5HnGr4B75vhE2QD4eMtk1D3gRXkGMAmMTHhHMhY9MmSmuWZcQkJUFUXGj6q5Yphkn8ZQhnat1b6zRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fHJeFsr9ihTzteBW7mSJ4Rss3Vpsc8XArY2rC24yWBeSJUrfPfvhD8khWUC7wmsJekdyvN3TLKTnM7HTN4thC1Y",
  "key1": "4fb9MVq4Kx6FU8sZzFeSVzp1taZ6DGnkFvTfxyQcqDSu6sZty57uULLabWavRfidoNWXpXgEx1kHZhWakHQHzsXV",
  "key2": "4xyVB4kUnrAVJcU4oVWzUCVHyXo6wM9raGCJHa8cmtyrEnZYTezkC5kRY85ViDxnSD2sc4Mz8CPD4aKhHxmSpcoj",
  "key3": "bt8m1iGcAzESazzfhZXZrZnjJkKtbngKWz6juMN5ydcgJL8yvVvjRJeYPB3nTaY2MzPAsBnihyauxrgyEhsh3pq",
  "key4": "2KymnCnFt5H7fSVLAqCXufa4ncHaRuMiTwsinDX3LuwFBVkvMDLSj8sjNxf2bvCaXFobQyyoT9WS26W7s8KouiMC",
  "key5": "3erFAxmcDVq28ZJyvHiwYa3BrY2XtUxcA9hMixpsMPFfLV7bNUASaGQ9VRAAwXfGtowYT77s8aVezBrzJyDR3DWT",
  "key6": "38nhioQyQZv5raWKwEg1J9xsbW6PJScdC59L2ES7X6FkBze3oQ2sj6xq3b2wXFHsWuisY7bNoT3fJD8H4QTHDvXC",
  "key7": "9u4QipSg7YNBPx3CRRiR3QLL62p3ENYr5yd6DCN7MSNGrHLSzk77wJDHstQJRQF7aFjxT4DoGhcqnKLzswLLWJH",
  "key8": "4z18a34sYBWxxMJYEMx5eMG4Sw2g91KmgnvQUFHU2MsPH9wexe7JcL8mQCZNDRykNumqiVRgNhqu8fY2Su8YB4nv",
  "key9": "52nCzs9r2Hufn9EXpY5EoL4pBY57Crm7WVwdHkshuwmWT1XfgxKhjJbwz1zi1jAT2pzFfkHbqYJK9CwogoB8d4oh",
  "key10": "jYVePm21wz7yaNAdiBHvPNKui2dxqdbtCVvATitpEPdSAiEe39TWkt2V7arEeZ9ig2oQQUbT7xesY7Cqu9tQ8mD",
  "key11": "5kKunkhKWNgWqAAYk76UuDKMGWMLtVWp7bpj9HxNCKGBYyFcEqyqgGQ8aJaFo8oyqDjhB88zXMoUHBzWZLPbHP7n",
  "key12": "2w1aieLF8XEG2k7jin4ZWmqNY4XSamX3x4EjocvK6YkdaSaa13Z41iNe3rkEHpNdeweddZPRp2LkTjP676Mm239d",
  "key13": "2uQXMhj196NcAaveZhtAqrFu7EqehNj4Gujs3DPUZ3D9cPfK1rjcYbRPbAmiMeoUAs88kcdf5qZbJm94MSSrkqHv",
  "key14": "5HoMtbpHfpc5wb6ipLCJ3aXQwGagiyVBhoTiSBZ1bzs8DWwhXbgd9aUTzzJedaHPTBMPAUVe9Q1rskzAFDijKnLU",
  "key15": "f7yt1HhwBEmhmCA7RUeKD6dKVr8H8YCu26QXhgnG5ZGKxXy6FH4ZPs4JcHrto62tXLEobGAsmVbxTKPH16MUWK7",
  "key16": "26H6q2jmEsmW9htk6fGphbQ4BxpA1j9y912wHtuXromQbryQW2PBmCWuqr3SGNyeY8KdjzhVsuaca6kr7MAaMvvt",
  "key17": "5YzMZ1Hv9Hyk7dmBU3DRghRqqtD2r2NXB9thenVdjLSbuc1EfYxZBASYyonahbk4n1R9WSx9ymkRnzEFbfa7Nuvr",
  "key18": "2ziEToKWKpjQaSKCzC9Mqq6BJdJo4ArPdcqyryLPQRJDvYAvzyomLf4S2eExkHLVhEQBXzHr2PKUezva45zWqdsX",
  "key19": "5e6fTLtsuaD3gwXSStrL3KVZrR5Xm9DNYi8tvkPjKteMfxPiLvBhE9ci4R2nj1ArRyPPPLDc1CZrBVccjn33uFg8",
  "key20": "56ZYTJV4i74hofsiG1HwXMXKuG2cFiNYvqS5gYHJ7n6njfrpPPvaLAJ8ddiko94qVPQ6VoX1DHnUse8bV2KiaSCL",
  "key21": "31QEHxXevW9K5TwuMkt2698pN89P5mJyTrqtCN65PTVG3qNUs1XEzMbQRF9Vf3HGdq8R9xYsBZtWMmraEqePp3f3",
  "key22": "56kySwoWjyFBpk67JNtv8BTEXVcgHUfeTjCKHmh5fDPjz2L5Pi6QqRrTWCKrKU9gddsaAgyrDQaZj1gq6jZJbuH1",
  "key23": "27YfBchui4bqG2YazDxYZR4QkXn3iMh5G1qDKcs2jtCGauh84LfCrAv5dx915fpJhSXVJpH2LWzjMcLHZYfNQ7Wk",
  "key24": "4Lpa6C8bd1Ad4CuUW1i4Vk7VZyH7jTV8fSEtWJkiVrWUpS7hw7cf6wWdZKSnBUbPVkXZEuoJGSEYZWF1hzPxkgvA",
  "key25": "3TUJhpRbzc6KzgomnAFjaUSkYJNu73snudJAeSxGanoGcm5W39sFzHpn3PwR9h1h2hwfiEkhyJcCVvSh5qMn7SUu",
  "key26": "3hPeBvXuW11hK3juFaKbatR4auPsE4UVq1Eix7a9pK2kQQrMgD4mQ4J8CXJjUPgxfD71Gv9nSUey8SzUGi7nqmty",
  "key27": "5pcPaZwdEenMvfpDjk4CRNDZ9fKe77NqYmuxtUENeyEfVHG52ZcbNStsBPcAt1q6PQrutJ4wKKFSmEbbmgdfX54j",
  "key28": "3CR2t5bivihBMoeRfduTKHbEGSUv3txdE1JtgUh1gePyjAaKxTcNiQbuPwT7rKKzHgkXhnRedR73B3HV8qKfVNBR",
  "key29": "5CxVMQ61GVp8hMjsTeAyikC87BDxz59u7qnMdG7yb46aHCmLp6oXWpHCHNFTLPNgnGNANdB8quvR1V4DyEeJbzhH",
  "key30": "2Le66Tq6nRTwgkd8KEtN4hAbAUQ215o8Ko4q1JmeUtthf2Mz7y1HHpTmgVjsDF5bZ5p3dZ2UHc4FNxLMnC8RGQGc",
  "key31": "25oHnYqQy1FxtuiT4Xy7iwFayW2BmqFfardNRyNJJXVpKTo5qQc6iLfqUy4rQhRVqJNfQyV5f6hYPmEBG52Aempc",
  "key32": "Q2F2K4kGe17UhkDsocFDFJXmmNXcAqv1HBLJfVkeMsmAigL63Y9aH2CzNpwTnyYQHtZAZUvqKkvxHbzs1Q9sp8r",
  "key33": "4hjjxbuzK3EYapmrkDiwjkc7pJGpsvCFXgUkYyVtSLxhJATZ8DBifLb56Ha7V2hfXQ3vj8ddc25mWYDhZX9qz2vS",
  "key34": "289uELh45KeYSUZsNroySyhx9FL2hYXfahNmBoUGN7fWCsChtXCdEA47dtEFjiyvssgH41iPZuK6LJHN2KdDSGr1",
  "key35": "23B1pjo56xw4VLsewMC8UNbgEsHCNCQAuLFUgaTDJzjSbW5rvmnLEr2aKf6qumzmC5ENvbrHs2gXSB7AeoTmaE6H",
  "key36": "5kPvL3T4QzsSk8mmD2yWCuQdTpqVBSkCb7K8B1P4gkUW7ZEMTZx9Dif5iD4vNj6yFHftFCxfEUmck1NMpc26Xcf3",
  "key37": "4EtHQ1Y3YBaarRdJsJhWaW1Mx5bQaPXzyX9KAKFw6G6vfrros1WXwyqLoB5cn5sMxKk3NkHHeSuKfE5HNvGvQoKQ"
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
