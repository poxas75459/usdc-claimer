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
    "3un5ToomHvakkcTaNL8L5EvhjxzujVyfMmQvSWBffXCcumXJScnRsazv6EWn4hp6FJMoAwqhbRzJ4iEnDB1LAntq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWCjtBMh1AZeXFENnVb61tYbkspNm5Gn4xoxcTX8ZXoKHm4ydNXavvQRNCn2UNHfLRvLtdoUd2HKWiDBwRXwQru",
  "key1": "2E4Jk9th6TbaaTp3T35HXuMuxhwAa1RUtwh5FNqpVeAxZCeYcRBVgivYnMBncVH9zKu6BiJ3k2sh67ESHJmvJE6a",
  "key2": "37et3CJNUpcRMsQdo8B2xtokfny97UFqho7GRfqVqZRjFFJzx67VjATUHba6nfRzD2n8GFvserJFjFQobScQViWG",
  "key3": "324Kx2ngEUtXjAWZhePjmTvZ69kZAdXEfFj6MhibrYv1DpBXFDSKHyotw2kAb3ubWRFs2jj8mEcT7EanShAJLrn1",
  "key4": "2obQqMceWtFw26tgTktRy6neGCmWTi2E86uWyuFyym81Pr8CDWsnAnATr2M79xxWez2VEwp9mCcT93cRxnnbi5Wr",
  "key5": "fK2S6FQykPyvihcgBzAegy4rMDrivYs4FgqgEcd44BEjMkTws3ZougnFPos4AzU1r2uZHt8i1QuZszAJxas2F1E",
  "key6": "2Gz6MFY4ssCrQAkgT83Em78bmxbprShqkgR56RhBbBqYvx6egpkgBPk712BeHDeUkRATyvmq9EGGxjkucmraCy9b",
  "key7": "4JQeeyLvw8DEGeFmrTCvvN1P1hgooHttZJzYFmvVq1WkdnF1T9UqLeaWZCDhnVmeSw84Uc24q4hA1adxyqY9PMMm",
  "key8": "5zFdSFtx9iAZX9HmioFuB7jyvzKgBgUsN2vcKdmLqe7cb3VRqdaLyQRWW4VQK57ivHpBU38fPmdLPnKLLc1Wtbjb",
  "key9": "493xPQ8wZaM7bkDijbft4oQdcuRv7ooJbiPyfA3NxVZaDRp2DXFhgwTsKVyHDDaaHhHyyi5H6oZvMXYuW1jZwBNu",
  "key10": "5kubkdrSY6B8Brb5nbzZPf1r1AgTPrJTbwqqCHZzDeVxvG7Uu6whn6d3cbnuTu2wQi7pZUXdPVxd8KmUzXMtWCs5",
  "key11": "2XXES99BAJRpxRQoiVHYM3bDP7PpXtEXDoz8P5Qcx7Rz3SqKZdbyo3RwnGM26bkWpsrVoG5Ai6R4j6fKFkHQi6Xp",
  "key12": "2kBVPXj6jjpdnAocpNUbqyyVnhanFNpT4hCk3L2K9rACGgxhMTwy8qqErthhSAMoQ26AdVepXsMo7RjnWNY6dPwj",
  "key13": "5pW2L48t297Cx4oyyRQsWE4Z6ku6FY5bMg4wUuuFSZqBBM69gHm3rTYWX9WjAzgbQuT6BXyYtTgHftUotiTUeNvp",
  "key14": "3CDntBnqVT8PguD1LauPFd6LJq3b9MqXtmvsqG5NGFPwWx12oevUPMzQ8wUbAD8mS7mnPuEMSXR7CzREignP69UT",
  "key15": "5noxC19MsX6m1bQoSUMvGqpS4W8aKG7si5VMw448RXC6SpxL6F76bHZ7d1tChm6amNJv1zrDdsJatbvQTAahRaTm",
  "key16": "42VsvtUQsujmNYTcW4JUB2RGY1L7X5gT7RPkoQaJifWhEXt8ArhTwwZyCdsAcAK2F6ug6WYcV9sPUG4MezLx4yEn",
  "key17": "3FcUD6G9E4NTiMGPnf95UWUghVSqNCgnu9ncwRasdWqCBw46w2XTaDramJtTNcyMVsnUWorU76wNvziuMVe5YUgS",
  "key18": "5eWqc1YohcxA8X8Y2vdBrpEy8pLzgMZxFEh2So6FYKbqtZtvDLNf5ybpM6Yv76D8WRmAdsaZEaJqa4489AKHaMqV",
  "key19": "41gb7nR92LUCVykLavE7mCCdUxTe3Cc9xCVaax1LCHWuec6EZunavW3uPUUgLoPACisKeig4non14YXL6C7Hwq9F",
  "key20": "5bAXfhEDW7ucUgeRrz8QY9tuZYD1zwr89DK9WR5XtJJVRMzcEf7jxXNEndc3kFyLfKT7drbQCoWtXGfZ41Psk2iE",
  "key21": "5TYDmYTEagqT33PpHpt2zJuaUW2tXjdDuzb9dYewD32vmAiDtE5rrToHLNBdMXKDG5N7sjKZYxy1Q3UPM6kz7TxC",
  "key22": "sURGjz9E9yeXKHdyuppQZWmhqdAW6KaGBHBStZyn4oQ8tADUmyASL9ATNTb9ptRJCKXkZ3STWvTNvm7BUKmgGtx",
  "key23": "mAe1LbaYqfY2QL2cf7pFV23rYcKXi3hycgR9ziJsyWfpQfcaze6UABzszUZAnZrGmSuUaasd8n4CSG9jv5Xz1sw",
  "key24": "5HJ95ApHRLGah6NNrAojozFEPz5MjZNikp1y2vgEfPptiueaRyBMVYrhz7vnGSqPtSeAmHMJsme7F8QdJzDHPLqg",
  "key25": "25g5R16wzpgaox6nnrmrkLF1jjh8Wnn3Ggoxg1yJWYUebhBiuRfm5BLx39kefML86H4Q21xNbCa2DygGcTibpjAm",
  "key26": "3DvRMEgMG1nuvXWt4ZMiQRGbkMgrApJG2p5232osCFUahQ1pyJ51m7zDYq3xXGCoZG3mZgPsEkSPdvMyG42PMNhL",
  "key27": "5drZf8rwGL8rxCpEPvDzCCAsvMpfsFPbqzPLMzVpMc4cJH5cn4CfsQhcwUET4vRfEDHGvufpboXpZBG2NYtEWjND"
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
