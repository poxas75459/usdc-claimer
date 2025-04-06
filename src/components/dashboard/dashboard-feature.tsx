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
    "3kHwerKhtkSJHRe9kBhCijXSSa75ddAkmaGXY2LH55287EF4dkGyZdnKTUBgFSuGzkUYSszyuXh5tLSTWibL1nmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Wuenj6JLzDqvwXcBAGfjaCz4J2q3FXT1rXCrySRXGxFcWcuPXG2pEzx7c6wv4ZudShq2HNBiD3HoMwxhM2WN8U",
  "key1": "2fJBhNfVb5xmEop171PfVV2XeY9GG1NPsne8u7Shpx7qLoQtaYgJTn3HZWvw7NSdqAhNMbbdv4z9moVGbGqPpksx",
  "key2": "2tLEAK4PvWkA5otn81qiuj8vy6CRLfNty9HgGBP6rkChw96n7kzRzYmKuhmm2aXERuF8gvT2ZSKbjnbBmJm5aM7A",
  "key3": "4d4XNbLyrM7yXM2oNE6A3g5HNKczzQATJagSGwTG5SRYohxDf1BKvaHG4zHzcTGnUTosXAJMcPoysD4mKnuuYskd",
  "key4": "5CamyYA6rgbKsHRjPyR8oibEJutZfFn9H3dub3Pt7LggnAHLsaSwjjH8yn4faBKYoF6MsJCrfLu7wRFjMeWqttMa",
  "key5": "63r6zq4F2NYYJSHbtsA26Fb3GsEbABHsKps1B7DKWgfdrJuDJAizZmoXXPh4p7HAxpaUG7FZY5yxiJdDs4YeZxbb",
  "key6": "5VymZqKWnmUhPsFgqW6u8skGQNm3Q3mmN5dseLGneroGMJqPVepW5fug2aYTHH6gVXChY8PSFmSz37H695nNRLYb",
  "key7": "QUuTAkJTzu2ujhZPSFUoXmyxjn5vKNQqaCtqjyigpjjHtxVB4y8CM19LDcaFMWrvpLnYjArazSSnziny2pkREAF",
  "key8": "2M18yMxLbKpkD2z5qcuVaKyzBZDjGfpmhWSadAW5T36bAVDzKvhZ3gxcD62ZctDzUvpY5mnW6FBpra13uCdKEgFB",
  "key9": "57bh4b2mwSiUSSobA36Hyq1vvu97qErhnd3wB6Harah8runmCkLDXrZ8TSUUFG7gK6WN8TBcaopkz18pLX1GxoZt",
  "key10": "2EiYeBJ7t8aooV146yfZkqXWh36R2ZAYfwUPyHYCNX7vjyoLEJdisEppQzCdvSQcZxBKP4vtpBsN8hgFENMTtZMV",
  "key11": "5mkHMf5xTn6En8EEbPbhyJoC6MZ1ujoA8wiw3myNPRFvFjBZkqT8zsQHFvhjAkwWiCuhyFPBYC6HE2e76Vjo68ST",
  "key12": "4jxFvwcrUs8n4PL4wP49ADaB55uJ9W68vcGjbxid141E9c2y6i1HooSTDY51q68fKa8iTQbFrPNGLiErb3nTmVHw",
  "key13": "2ui4fWGji1q66XFG9WkAGqoLF7kk1v7r8NQnZ2vuNW9czfKeZUcc29cKE92F5F4hqjaLyxkjzW7op2KuGAqWw2Vm",
  "key14": "4An6y1YBZ1nrkxqo1vkJjCbZ7PD97iMJNu7ibFyh7oN9eBKWntHnRoVnMG4dkkA9C9ho72NoTAgWdPT6gMHHX1QS",
  "key15": "2P8JuKJd3XRxdMi3pdUFyStsK1dqfGmFytqyE4MZhHL38EQiczQh7v5DiCa24PVrKcEwPdbpHAw4Emo2qurnSYZ4",
  "key16": "3dS3BWUxJzyVGVmaYCL792qHy54sCXmMRUBTBhoWEUiK9QdULmy8FpDmHWDqwRLeZ6YxZsfELNNJq4buS3Q4LCz9",
  "key17": "3c8oxqKSFoJDCexwjBritTGS1GYahWivSRWWpf459NQBVuPVhAD4GhncqguoTW5qF3TgSYiXxaeLFzA7FxznDkPC",
  "key18": "3v2t5eE3bWSpqGQwx7safaEVs7mxGBW7thzZ928UvS4nfuGzP1ShuosnV8uNogENPXhsMSpJPb8mEoYFWqFpzMnN",
  "key19": "5ZP9RUjVoauWXqo17Do6SXwshTQV9bVTKJxUuzKKnkfqgLqp5U1MF4qrdMBJbeDn1vwNDKn2cPLYmpg4jxUQivPq",
  "key20": "2gAtuTjFamjyQQ2dD6Tutwxk4HuHbBughpFpwqqaq8WZ7Rcto8YcDyHUaBRmQMTS6VxuS2dXmaCGASaAXFHM7ZCH",
  "key21": "45qVWsSqULGSst2XiJKjgsoF2h8EWdd8QeRzfs9HyPDBbUJewtHTATHRHo8qHghBy5s4N3qApv1TnCssQTQqSzq1",
  "key22": "37cM6JtDpuuQ3145xJtFdyYXi97RC16svZMT2BhtFARuVbx7MXUfxic6xXEQd8h5c9P6byoqxvwid5z6N3BSg8DF",
  "key23": "3N8vDBrC4YK7MVAi9jpC28YwxACb6BjfLLzusuByptEiDSHK63Gs6VZtpebmmviz27vZLez1wFPLdVFRLWdmiatU",
  "key24": "LxwSPxG9f7d5EoA8DWocgRxfsmuppUVJG9v9NJbLDYRVtYaoysouy6A1PZ51LSecis7sMfweVm1tMhEWDJawLFL",
  "key25": "2bEaAMQ6bDGRD8HMKUTLfeEYLtiSjsnpH323UG57FLxKq65m1PF6WQ94Ta7nGu8ZYa9w3hTGUa4GUvdJPJ2y2Jaj",
  "key26": "3juQnr47iF5xBoEd8ExMHHtPqoTHHjXcWsQGHbBeqzAYkFEWfkx9b4LdT3XaeoMmDYBwncQBsNrr6Ej4TknjhGA9",
  "key27": "3mc12yWeWFXBhHC8t7o9REmPUH7stVKZjeBjitc5ijvbqZeuk1iY5UNEuDjeeQQKUK23TQtfyoevEuLYCRyWN1MK",
  "key28": "233gpVqAQQTjCWRLt44x775eqHy2ML88g5YvUPfkUaWGCYdH4AnacP5wm6qN7TNZLrPBTqDmoXihgu5kTCEKk7Rr",
  "key29": "33Dud8o93UpCnMf9QvFWWLp5gK9ysQwC7MY5p1grf9khDG8KnXKA4sggYiTrKCwgNygUnknf65Ys2o2cznNbuGnz",
  "key30": "41bAGrAqccsYFPTDKbFiLwMqsqubop15VmaNGxFkAtnGKeRg6JneJGWbdgdo3mPDUZnMdmUSExwYM4KjEVLw6yJd",
  "key31": "3DMf2Er5AtARUvY7xkGSVHVtMJTXysTANRhvnzFwJnXUXfz9PdYhBDx3NrB48ACZaTxUMofBdSWe1rKESRTDQ492",
  "key32": "5q7KTAKqanWUVnxmXjXaW7waCkDJHCBbjNUgFXg46urBbWb3Jx45C3cXnjVBnsxeX5ju5ufVomuFojK4XKiUBzkd",
  "key33": "4W4bjbLEevoVERcQhWJWB7gf8zH6un6ZH6waSxGQ4oEoX43WFW8qRLpq9iNU8fBf9LCsPe59pB2wvwZHCuiK3q7Z"
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
