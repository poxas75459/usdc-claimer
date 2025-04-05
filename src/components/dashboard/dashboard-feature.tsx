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
    "3AUNarxDgJC839PU1xtdEz78rxSdZDanB23ZSt5UV4ZnW8aBpceEu3vToriEXaDxZTbb8eZ8kQ7TwfMAYTWhGFmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHqSkQhhM4jzsMwijR9W4FmZKebMWvkXWKC1wfD7bj2DCSebbuHqpPacaGLW4dZjuN6SGjG1K8fSfwsqbR77Zze",
  "key1": "67qDimiXVXX7brKM5K2AuuevLrAit7E8yaBNLgmiG36w3EhKRGQcv2t4SXrURb3HFJ2zJrozGrhpgqUMdrT51iCm",
  "key2": "cNpfa8dkhiH1Jat62PmZMvjhSLkzwu1vq7VzVoX4FRmZDXSMKVGfb93xKAz8DFReejpcRkGD5CUGfMyxWL3yNvM",
  "key3": "2TdBg77PmSoYfkNrthPtNjJc9pucHvX49o18cTFy9n4U5JiqVwVdnSR7dWJZ8yTvDJkR7masEiWQvRX8rvfB9fCE",
  "key4": "QTU3WrQWghM8d279dTkp2XNYXR6Zz9PDbjm1wn8ytzoXZm6YGQpwUUsEpaZxUa5WCRR7kjcnzePtgNJhbJUv1CE",
  "key5": "TjoEco9XECVwXEjfvGpsGApXuWqHPL7uAPwZupNdcMZgwik92ofron8UMP14ipSbEDej8ERysqjaPCVEEG9yAJo",
  "key6": "5R6wCE73xRZVk2tERsRPwSfKxq3hNey12QiGbWzpjwR1cD5HWkeRSgcNe9M3xoUVrVyzLQF321u2Ug5s8Hx4CqiA",
  "key7": "2Co6R2wJQZopDyxu31ePzCNPhY5HMQXRtE1WpFXT2tNDKVAHbpTULfVqFPeBSouVUCrGGdMqUvS54AF2VZ9b6nKJ",
  "key8": "3jkFDuuP4PkTRphHjpVm9yWZ1EfoX7MN3a4NdM3qZHTsBEq9vHcULnEncEkGRjpCsy8rqaSqVsUTPYZUBFNQ2deb",
  "key9": "3MaH8ePMCyLLPwtuZcbKdFuEYmNxL8A5HkB4U3wkZ6r1ZL7WGaCZfJGhMDBKGJVAeSZAaftpf7J2TLTXKkfBwZmt",
  "key10": "2u26RMYCxWx4nctju6unu13jSUMNuHfJu6by9BSXPPbu8Efr373votG6nccJ2G2XxMZZtrLMp4kxcXLmCvbmV8KQ",
  "key11": "3166rY3XQHUq9VvewYRuYXA9zZcYvvuzLRyewPMvriavXTfpyT7H1fjruLFmKqqK2bZvMwDQasAcrEFt9mmcMJ7J",
  "key12": "26cChMQS37kJdDBzMMLWs65mZ7nRTreRj37mjgFi5nMF7pp3i1GNFWFuFyWr1GvNCN3aqaQ55r63UdRkeXkcBhea",
  "key13": "d8KNJDV9S17xiPipi64UZzAkW8UVdYNSyYyrZaDhoR4jHEjVabL7SSGCJELMGr6c7S357tWZoAtx5ikXhUASjC7",
  "key14": "4XgSLwDfZPsBgTzdxD3fgD4BBXgyCEBKsCGSBbWvWw3LrVSYJ724porW4hTPYqqzpnDL4iihXEcK8A353eGp3UsY",
  "key15": "3iPyuAVA74kcJyZAs84i1i41oKZgqNrmZHjix1v826YdwiLRFA26YzHckqFQ8tVcMUGRbhepV36D56WUZVEDtnQr",
  "key16": "4mwyK8xR7eYz9hwHp1rrhJ1nH1U47jvoJwARw1fmq5zDUapAoZhrZVzkg3gn2VYiqAU2tQNc6wGHnpmd5ifa7akb",
  "key17": "4uxncB3L8gHqRhptJyerXwhGS77oUm4CyX1vmDpdSupF8x6UkrwcgaExqnWygak4fUi6NZeHuZ3uJN3Y9Z9keGDB",
  "key18": "5umnCa8o1cPaSXEzzwoVfQsPvymUtzmzVgXPic8LWqprLyxS5TyVaq9nmqiAHEPN8DbpMoNQ8Due4njJcdmLDbx2",
  "key19": "JegK1kPGKYMD3cc5rW4cLxzmdcbRkuyBjgDhUZXsnSvD4dUBPoQghRUnTjAZkzZr2dyQ1BZmLhRQWXEXcr46DQW",
  "key20": "3sYjvrFK9GcWrzV96JSBW1TGXYe17RhdXihmD9shFo4kwmP4WhVpfe37Sf2qutpbxVh2ZRF1c1164FKBqnUT7QKG",
  "key21": "3XNvG5VDyKX3ZW4eXK4phEXWkCLG82sJuv5uUExroQ28MrmRxWXLknG9a4MwAAJoXN5YF8BarFanRF3497e11UjH",
  "key22": "Yn3u678WjXNy7aMzZRP4phuWX2JZrQ9Ztzymvof6SxfM8sbTC7pNg7SbZ9tXAiw5JSWtpzU6Eh1BH9m5sqisYGR",
  "key23": "453THhmkaiKyXTtbXGVwkXvpGBh9nqqVMEQFvfech9diMYvbkP1UqAuXH267gMfeAqFtg4iwe29w9snGBPC5Hjjg",
  "key24": "65GjnrJ671azqJnkdJDiRVkXApPunuudS9J3L89SGVe1YeBPiYSYRwaWQnzDyyHd4U1EmbEPfrhCZxrU2ikCAhA5"
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
