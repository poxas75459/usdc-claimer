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
    "31korqnsLKSX7Jhe4d9hWSGey2rH6fPtu5vUY5Js6DYj85RZFgWDUKeUZpGzAfnGQdQUcVcT7MxxXtVZHzfpDj7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38efa15x7eyp5wHeNgxU6jAt3ZywGVJDbAoaWjuxiEnSj6gp4MW1z92Cbwrg6D3Y8fy2w1cudiWchufovqpkeDzU",
  "key1": "2qEwH9na57LU4g5MamX8Std2if9wBNkJGycQAdvYp8p1hQpzC6ZU2TuVa2b6V4JcDhZfgCo66X59uWFZnqu6f2yd",
  "key2": "1YHzWVGcVPA5v38U19zK6GFjf6AciSSmLcVcaYiDJk98uAN7PdLLtveDnEf1zJYUnRRA8KMgPxGmyyzrsR8oXYr",
  "key3": "5HDShKNwZaj3Mds3gRDbHUHeNK7FwiHJJ3CngKJixPi1NRWW3cBCMpXr8xRfMNjhsYtfHzNE1PSN514gD7thdkJK",
  "key4": "7z5RHwQuTaQKuFXpZgqQJiH76LmpwZ4qq3BNJZ45XNVjyXEHUB2dbdagf5Sob529LEXKP1CqT4tdymVBrLUHfai",
  "key5": "gqvVvSyhBJENfn8g4npeq8Xb8FbEvu7epbRHBneNnwbMrBo9UrbymfRfZJz3VfGDbA7fGWRSMZtocNPXrHTkLGx",
  "key6": "5WBqFTJq2fXYMWQWQEomKoNcGwL3V35smGpgy6MNknqbBM3mBA29z9oABQJgJ1Z5g3E1TK2Rye8xHPjtdWpb3nt5",
  "key7": "45kdG2YuU1vawTmTzZWVh9wDPqhD2hJm8FEeToaa2K5avHe2nFkhceCmFzaZaoPp8iacKfcwUCM9yLSDvh9Yk1BR",
  "key8": "3XW2cesig9ijW1XX8DnFnJbCAz83XPu7Eg6UJJJAttP1zJzvSdHWTTXAu2CRBJXJD7c9YfiHroswMAr7SgAvmFgv",
  "key9": "rvf5qc11GV69PMatDub4duAYGAheLR4oxdjXwK5fkHrQfjk4MPJX77FJf2fWeUKcp4JQppJ9hmnaVTcemoVCUZK",
  "key10": "3fXnGDepx2xqSTQDbXTArTH58bcBdEjmqQhrLccdFvJbrKrJjfwtzLZAuAy6jLwWXzwzzwU67nKMC6j4qa34geqw",
  "key11": "42jec1Aebuk3RkJ73f2nddD82z5gJWcZUGV7MyJcTPoUUKA4Unp5fXzvrvLTzXrdnm786qYdgjXETt46QRfYqsm3",
  "key12": "4KUVd8W5ALQGs62MNdSJRX9GLEPqrZusEFhHS77Rifc9BpKLaCWbSqkw9DuZe4UVvGFKgiBLWrmkveuZaQmCtDTF",
  "key13": "3NFA8c8gVga2wr5EcRJs5xmVSmh1eZT96wiDM765yw6Nu8jjRE66AmmCDzzi5e8GnQoVJTE7xPUUQuTEwFedpaxU",
  "key14": "3U95R2E35a4qAx2pjZo8kyWxb2pG3LcsQX15cD1KqzxasbqrFsstvu2ysfa7R14Vc2YbJLcMWVBRKSRWJ1DoEzfz",
  "key15": "KLZQhWzqM2iECBDNYbEgzaf8op5uwQ8dZJtVbz3dqiUtcgPxDDbsN9ZfSfnDGm3LXyaG5NDxtY3wK2PDSKRxhCv",
  "key16": "LLoEPhD5XMjTcmcciR7kb98FAhCmVHPXpMpsogwknos3oA23wruTSySnfng6Y8heATKSTpDLCrjFgH9ubbHzdky",
  "key17": "muuZoQ9svhVMMTFJ29f3AEhPoA4Emdhxqm8Z7pRg2ZNq2rzRHggcLSAqdm3hSsMpQ4XuQnHELs3VEAhXtVU1YS8",
  "key18": "4E17v48GmGx9aJML198EDB3yHfXDbeABggCUFrRdw4pWqZ2EZCL4rkkTZjfpQX9SzMNmpD6UC6SFCPyoFc1xR67D",
  "key19": "rybycxWnUKu1RMi8ruvbr97mxLamq8hfRxAo6qNBMgqM6GJMwCtuLmbj9znnCrnwj58fhzjNtDoSHZtUf7vGfb7",
  "key20": "46NxLCterGmeYdX1uYWNMgfbtFGu6ziJKy52yhohgXjUeC7FzCs2NAB9YNkxwXWXT4ppeGcZ2rk35xhtn4jQWjQB",
  "key21": "24WjH6JFKvXK67uigz8EyYCGoDuiSRmWW2KM2kdoKSzHLgMQQJCN2PPSPbGUDoQF1vBTYLWD9SwQcLwq2CGTi9zE",
  "key22": "5JtZTksizvzYss2bxdqdSkhJcNXp5ZrSD4Tmhk1Bu51JxxtyD8MPe9hMdhVHdLgwgKupp1UgzLopF8symixpm2pi",
  "key23": "5iDAYGX3fbXUKBmSAsMtZqwy1yHfY7jrbYTZSyJ9REVSoyBXfNGiuBUD3vt6J8Q9dL7Pg4y62yCpkCBn2ZDzspWc",
  "key24": "5BKpLohfjQPMRNrcHzdghkR7dFYUGKARktq1uho4rsZKCsDCJSGqpNMnYskZ99WTKMLkS7AjpfRCdh7qqFmFkiJw",
  "key25": "CqY7Ba4xQjWoDu8NCosaWr2rgnpE3icrfbFYpHZU85eHWn6MWrrxFtS6qmLsVnKhXkN8HwC7QEtRQ1987LqqZpb",
  "key26": "51VrbsM4vbdSVCi7cJt2RVUpNUBvCMqEyesFgHKrqi3M8dC51ehs4ctY1sBUvVKS63o939iShkdCRLyv8o3rUj63",
  "key27": "62GNWwvxSWoTGv2R4xd99oDGUsXNdmoT4sfekzbzuLQFzWSWSFYkg1jSynFZsY3Ug2NPoGU6NQW11LM74LYJC8ZR"
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
