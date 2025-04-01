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
    "4NZTsMzJCyRBVG5WEPgiHAhExHVkQaMzoMXjoiWZcErrtsdoLE3uq5ssK6DzbUpxwqxmXuyncYYGoibbcd6WHmLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ii5BqKQCkhF2ZYsXDJT6hupWzQbLGfToETCK3mpX3Xg4Z6J2h9xX5zGn2hawao4L6G4Umiq7ahi75GsEt4kRi2u",
  "key1": "SJvwbg6PXWsJahE4fQebWJ6ENhmyot3jdYqLmUedyFjQECSeV3LxkQNsZ1r1tZms4YtnXEvVAod8hUwY7MD4ovK",
  "key2": "4cx61DFE8DorNNCwsNxtQuz2USSyX2g2Ac4C2xb5KizZVT9A1LwVyA82zfZwGeZ8mZJJc5nJLJv7zV8Bi82zTLxx",
  "key3": "bSDCHpMWKcrktvHrtz3GBQHBqNPPmPEPBKCsvbrM1qkc7tpyHStZjGegAhZ2w1vNkRoqZtwqyRvvt1DiFGymLX9",
  "key4": "5EMTX3hgGs8emo9h1Y2rVVEivtVYfcTiTcf4J5hysPbEsHM347RRSTtQ6FyTsmnXNn2HcsqGsZx69TKXZbtCQvZ",
  "key5": "5AyeAWkuow9qzApFaSLGN6PhkhfEAkv1x6VmeHa7FHqxhQ82t2NRVbTS2unuUMakjeXNvVYLbhPouBR8msfosRjw",
  "key6": "5atk5AjmaFnG5Px4qA9RNpyZtUS5aKErurk9kGmJKCeFW3vT9Ag2KCT8giimPd8uBqUNsJp6fyUyWyWjaNapVJNM",
  "key7": "5KzDBDDbGN1YnQSp2AMhzUNp5U6F2LvkGZd4g7HFwLUv1v45ufZz4aPQPAEsfv3AKY16SLpkN6KdC4wrnv7dqRtc",
  "key8": "q5d7KbZKWZ9pbn9VEgk4xtgrjFJocrY611fUBrn5qeHdPZAMHe73Gt1KQF5Z3vZshL1PzVqp5bNGdkGDs1KQnnX",
  "key9": "3Af1hBXNgLX3ZMZgy97qKjAF6auHvYd2Hrem2xZ97g5yD1sssCC85uQcF7QZqmgaWdHfe3bghjub5NhWwbGPtKGS",
  "key10": "61QknBXWEEp3f4ZCt9UFMWXswgrnnE92UDDTd2Y4LiauPTfJDUGWhHkTcVV6DKVmcd7bGV1tVc8bxELP39TRcswo",
  "key11": "4NcrUAqKzdpiDZ3AwoHgajdyRDCpzzSZxZtzJhUSQ8rjaTFwW7dcSFLTRjJ1E5XGjwunXniZWGaRfeKBgnk5Mx9Y",
  "key12": "aY9h2hWLkBWPWZ7vSaPLQgeZCjMWjm2x9xjJPJvvUay7KTR8WEEENM1LfuYkkDB6NxY8cqc9CeUfWT7TKeRdMKh",
  "key13": "4GEK14TnfsHrrRPdDFWnwH1bz2XjW17hgB8RC41rG5U5BocYVks66o6WodujMtaiL86JX19conRyhKhQbRNA4Mc3",
  "key14": "2bNf32VuMN9MvCv6qXG84F3sSnrNxAjRnStdvgBfZkGf7tVq6nCy5NtW4UAofMaP4sWRvGr27f7Xpqk6uJm6VGFi",
  "key15": "3p5fHeeMxkSq5gnxDdmWgFUQyBDcv3bp412hws1EBQYY5wysYhL63QsfSC99jZAXUUeTYGDkvLxZ1r4N5YSpyxAJ",
  "key16": "5CA9SdDHHdps2CeSrfMFrvdjVAYMfWH8a7r2p7Gq5nS9EYb646ATTMVxkEZ1UQufdGL8Twr4TQSAgLW82bw12fKN",
  "key17": "3QMRBmYz7q4YUuTkYAfJk5NkWLT3VPb4qDmJguE8VyzgNEnJ3vuExKg95EwxkyosirRijX3DdVLk9xxxJ1pcHein",
  "key18": "46Hh8M1iMHEJrfW3uxQUoJtNSQFY7kra2xs4wg2ynDkrXGKB8QY2u3Ct8Gbnn5RmQZUYiFFJwNtvUY9oygF2dJ9W",
  "key19": "5S9zSFmNQdV4AYskZVDsWWurQMR8Jj83sCFQCftnfwu2jJktYwc7rUnAgP5pFNqdrdLHRCCWjsDs8LTpj7uEyMqD",
  "key20": "4acCChuDBqpNQKXUo4SpV3Q1HyRAXJFp7tBiEXAa3vP9JUGQdpk7FMU7FPYbPEXRdyUZQQRhrVLFecq8r6LTjubM",
  "key21": "2bg2k4hJ3fi3rCwv8r1yvJCnaYNgZFCegyWhRVTa3cUdsb4n41zuHwndPqa6rur985hcb2eZbn4EyMEwET2VSXFC",
  "key22": "2oqYrSm6snwjC8PPhkGsrLiamqqS93ocXEmgi3oLADLpvB5pTygSX7PqcbFjgy53nsjXL8RG7mwsEcG1dSSwWXk6",
  "key23": "3dDFhJtuyttw8qys32JBhbhT1EgE6sneyBy2VtxidqHTqPn9jZ2rUaNGUDrsMn4FRMQqkDHv8aD2jrFh6e8KPxYG",
  "key24": "3uk27XoPKkDnU8z6jeyaJiptBpTaCrwnHfWAiafFPtzzitWWP6yiymxBdzDgWUaXBwz5QWqnZoYk2FvEWBCyAxUF",
  "key25": "UCA4LT6MAoUVV5aMKj8EQubYqjeCB2YkndpgPsn43uK28hHRLJGNzPkU6Hb7PiizufNbDXKPo2cum3e7hxpS3st",
  "key26": "4XaTsaQCF6ScwCyj29FqeaM36mTDLpxY3kZR3S7Qau5mde9zsuJysRpzKhAsyVyKajQzCeSbQGpYXMncNWg7Zj8V",
  "key27": "3zhVcs5gMsFHVHkuhPTWb8tz6BED7NDcvq8qmeqFt6x1xaqVzZPdNGYGSJqfJnaNLuZeW1LVYqK1C3SEVXX484hc",
  "key28": "3oX9j72Mbk9CeHarTe2jNRaycMGU54rVu8LV54Nmra8mYPNMFjsnpmYSekcTxQNaDpdRRcAStvYECDJHw3wYJsNW",
  "key29": "48Xu4ffN1zRZ8K7HTJR6TKzrWwmQF6RY2NmJYtdYWMnWELbEYB6zuqdpfBLntPBqHZyiZyxWttUY92f3bP1rStaB",
  "key30": "H38SwQ4CL5KNgq1H9UiHMoUMgPsDvi73isFSSVp3ShcKr4sW4czA5ESkmnENEJVbdyUtc844HFUngU4qh1d2Tjn",
  "key31": "FSEkChn7AFdDhrn49oE2chFw4jsS5k9yogzP38Z9aNqjGNYU7oAuyQVWPNUHb3J9D5NAiDb74FfEtyx895r8ezA"
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
