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
    "3vfZzEHYgPon5EqhgnxrZsrQxUFir3VL8w6BFq4BN2tHLJCHSAyi7XHuwZUT5kvGYtnAYZ55Vxqbd721jDQcDBBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVBydPv2bSQmpLP5ZZd8o83ryBR9vKfQ8R579oZEE4aZJyFyFL7d5EWxbSZn4UuKYJjwAD1T1aPznbYV3sSzeJi",
  "key1": "5TST8TczLDcBWEW4fBjLrRMwTrHhCBht6DkinGuHnPZUzZqLtSmYqEWLyjZVH5gQMYbkMNChhD5R5WTe8WREzwN5",
  "key2": "3FCAnweibtvdJGyrT4t9UEdZFZNYYxQpBdFiqFYQZVXh9nPy4XB1fm7noEDjgMotxNaWLPZVY8D3Cd7z8uXkepBR",
  "key3": "3Hn6cL2aqnw15M54x81UX6G81XYm4QaRef3eZTDKscScwo43PGDo5Lcc295zAop4HPEweS4u7DkKcFmn2miJPAZy",
  "key4": "5Zu6LWXCcTm5M9Psu1NqJE36fos4rTgLffirZxy7Ks9rwaH6U9pQDRfqYSCWx8kqdBE2qFdTqS2G7ZYLCX856C4n",
  "key5": "5tgUuPsbo4FMEez6htXngJ5igwHtXK9omVis7ocS4X1d3K7vABhmLQyHETowverCxjegVzgg1LzhSNSRBX8soipX",
  "key6": "4LuwXKDMXVpAgVM1RUyFMzdaqgZ9RUMcfK2qfPQcc33SGLJSU9XpRwF5rPzMKgbonk5RJRV3Qgr3dmt1AiWHw5r9",
  "key7": "3Wwx7P7xh9fLx9B7L1ekLQrga9HNaTDZZ1fwvWBWVUamLcw98dTfLy6UNnjaXv2R89fV8xcFUY6siNzSAwQz6KUQ",
  "key8": "5mGd4BSXydCTzMzQnCevVxrz7XfkhkEKLE3uyZLoAchpTZNZcDHG32PDet793BUMCB5QFtAZfDszYxnPxUJmgsdM",
  "key9": "3kQGYpTsNgtAZGKbVuXy9ndouAFeKjKkipyso4qGyR94Uf7Sr3TXeZZ2rHGqkk4tn8znd2CRdPTX48MAtiESzW5G",
  "key10": "DSFMu9ZvTzupwmfeHDvxtDsqDVUoNoJaU9wLvBrqfvg5nHEm3f2HdXp6rdy7naw1YXe4p3NWU2K2XX1kvZimqYX",
  "key11": "2DFxVaLJRiBvRt9AzjWuPiKkr9HP8NhsysUUigSgTXDrz3n4reX4YFxDcM6YeEjdqMDHyskpZ2XfApp2AGzRURaG",
  "key12": "5Mp8fZsGn9JF7XkVLs8xmfcrDCRE4UohDnbbZEdRziE4b88gEFxUXCFDACec5nxdaeZQUzi7WaRp9iAi7sT71ZNi",
  "key13": "ABM16eRjWWCe7CsmDiYiWsSUWFyDXMSpoVDJeTPpLnaTJGtGoRseEfiRxTk46YGjQxornrczYQ6aK1GEGYY1Nix",
  "key14": "4SoTexHCuyr9nAE8sTJ9kB8C9hv6wjZpd6NsPT21LjgCZyacMRwzk3BrEuSHb1dFDAmUen1qQ3W1XUr1s1w9JU2L",
  "key15": "2FyejQuvqVfiRNTfFJwhjTBFrLprknA9C5WHG7q5c4En39c93eUmkUoDu6b7KgATVxJkYH7ndBhg3uwkg5qwwrBK",
  "key16": "42vCiHxYHynMfAj9wQ5DGWorHGhaMmA34WsrKkAzoSFMaXY9rPMA6uBvNjxNRwMGuuPH8sNs6yNZpm9k3e6qcBqe",
  "key17": "kkQGd9ohKo9vco9bgTnwnPjVqJk9aLEERdj5rKeQZwEyCLRgPa7WBkihbJ3od3yedbvtquD91CdcLAKNqoSnvKB",
  "key18": "3jy3qWxprBErBDVCpbprvf4i7thaXKM1Vany4sQm33S1NAqDNUkn4boUXW4uZw6sntMS3j86sNd33opVkL9dYmgE",
  "key19": "5obUvWQc7cmyc55EL83PgManoKRWJYpUS88GxuUt4vzJsFvmWFqKxusYuzwrMDKC5p6K5gb59xzEnwdqzsXiTHUb",
  "key20": "4Nya2nAmaRCUPcPyUzsy3MtD6twH3GGt6HxHPY928edU7CwnGnkRysWHHMcjQZMo8bY9xkQzj5Eage4M6cfDz2QE",
  "key21": "3gtdXzuk85NCp1XpkRcAku2NrFwazKRMUm3vjpBRtJcoDv3x8e1HuEccEVbSczowqg1jmzaFduJK21t2Mf2yVuMh",
  "key22": "aLd5ifxhHJgN8B54QWBiYdMuxRYBQXQTMW2xDhfwG8AnBzobVPvHTFAzG91EEUMyGvMQwBzHhivNLzQpZS9Ya83",
  "key23": "6LcknJjG7qkZJRMAopYwTV4YGwR1ohbv12h7Zg85o8VFSpcC8TVTCU5vUNjwf64AnFCJTNbK7EEzPFDnu11faAF",
  "key24": "5NoeEYTSh2tNMPUnJY6QuPwjEsDR7eE5AdoExfj694EX3huPrH1hYYEiT2Z5ZZaUZJuq9VqrofEemShY3s5izp4M",
  "key25": "3Mbq26NPgiY8xJ1bbeH3xj38hivZKJhRPE6Qn3X3oabPsZ1PLF6rBXBUHBY6nBUiCZ4d3DMseddzp4aCkXKLQ5Ma",
  "key26": "3kwbBkBs3qBHeZ5v2XEEiwmPozdLTXcsES9ni58MU1tfY74bKKGEGedR9FVnMSCAQgMd34NdY8gXqNFg7fKjLtEN",
  "key27": "3TQrby6g4y2qr7hr3QzBE1Yc9he3b4SV63pesYFN8a7KsUFtX5TKZWMWxCZ49GcRkHUb6jQNKDdytSFFWmHsM7w",
  "key28": "42nXCpxBtnYBhFbyECPV8fvNajJEQVJzuEW6PMzqaGSyaQxFBbTFJnK2sEsu2VXFk28js3BYaqYh2eswMKFn3cNX",
  "key29": "3gR5JWPjLgQwgvncXS9aSRZM4wKsDNC89ZzUz5KD4h39cXiJrrXky6niHCrNJXedHVbcJ6kt2VfBcS7u1EtZGsJS"
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
