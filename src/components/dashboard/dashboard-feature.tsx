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
    "QuwN3sXaYGfKCKy6SfRkHUP6fjeJ5a6BnsLAxYJbWMLQZbi6iip1akamdRq9e7iHCH7LVDXMgvfnJA8pK9SSBxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qwpWGsv5FYZH3dowAZek1kkd6EDvKZgNnfpszJu5pCCbxsGEUv6yKbPtG4NwRhgZLFirK7QfVW7bWAmEPXbUCAu",
  "key1": "4JrrbcDikHKwrEx4MZK1RUfw9TGHJjo8cg17dPuXxDDSWvMypKSAw1XE7oW8AUvv2L94PzmxAXzXYwVjC7DCbT5X",
  "key2": "4uBURxAnHr51rrdX56tRTpJ1Utdw9io3CkycLiZYRs4eSi7qQkGTtdTVRaGdbVUm2wTvUyx3R2SonzEE4aWSBser",
  "key3": "2T1qMSv4QfwQ9eaLwqVdcJoz8kWqWJCJsiE2LHR9CJn1Jojis9oipapNmtYGoixYwodq9MVzYnbtyuhYg7jNVM4t",
  "key4": "3gScyu5yNaUBqZmWqed4uepkkzj7dkWt5BZygeqHDg2jYT4CJsF1rPepxmRMhaLcSQKdLq3ufJPhiFtgUABL4hAv",
  "key5": "5MyG1D5UqVRxYdHp4VtHjNcKPHQK5gMkT8RC83pAkTeUNrVbinfkPjN5wBuyjKGACK1tySSNxai3SEyLFJntAmg3",
  "key6": "3tAKgFr1bwUfhTBRVp4awSe7SrRomH9fv1TcZXsbeeYXveQmGtVZA6sz1JHk9PntEc6ZcQFFmE9EGfJuJb6czoGP",
  "key7": "3jCtMyuiooGYKZAptJeDnpZ8C8w4Av9ZsG2K3b1Kg5jQNbhgjpECCjsbZbmZ1AWaTytpsHaMgMavAQ6wHu59YQPb",
  "key8": "5dx3J7njTMfo2ig8mLMc95jQ1x5oqGJa17n596gMhE59bLXUMz6Jq3QeFWDvZZuLszzuJfZyskgsQp1rJUMht6o4",
  "key9": "3yThL7iLGdmuRQmpYuhcQuYE722rjieieEN5ukCSCfdN5vodZaqw8s691fxiMeeLwjdkwyjJ36wuEoLdPs5cAmbL",
  "key10": "2yf5KNgjBsY6X2znT2LcKUWApzxX8mVnyn2UbJTWvA2NtrcnJLLN6KeC3AqjYLTjjUZ6cWsaCnVGVHbxe3yQ87jr",
  "key11": "Mvqy6rpJj9nM4A7Vh7LyyWJaSLftcv3FAQPcFWNHsR3PGM411NEHwBzaT2cDvrv1EUe4r8hVqPfWFL1fLAKihFz",
  "key12": "5kwZT4NcVVQ8tYQSBz44ZCTRKodCwqS1STXZ5U8stwxd3bdLkeeKxuzqimD18c5M3x5JMoUrtfTKze7D6HZmkjwD",
  "key13": "4rcAGj8fK6x3b75BaQU2knMGg7vp9VNm7xXYuBAGnebSZcHib8eUDW7pvFTyJC67hhGS5bodgN2Bnh68Cpz9qXwG",
  "key14": "3UA98d1UYmEQeRmaRzixbuA8ivRT9Pk72UbDMjq985C2RjqmUYHzpKTEHxVEQwMfmX6FUGfh9EH67Fx1MKaGJp7u",
  "key15": "5Byv1S8ikyyDW6LXB6jSghEme5q54Dg3BC8n5hdK6QvnBpWK7wRp1pGB7vvwtosu4RdBYp3xoj3DX9yRXi9pCdoy",
  "key16": "3bcgh9npdVxrUvib2NPgmp8g32reNvP33n2z3aE5yT5QUbxD9vLKQ5ZkEGmXTDhJQnFyL6ftVEmm3BB9yjj9ov8S",
  "key17": "sTaqM6JoThwGQrCmtQcyH9o5uimY4V9N7CRKiMyap4EPXVn7wJPnh2PnGCZq63oW7jsgpCYQ2rhZYtkMxieoSB6",
  "key18": "2dgcAFQwvwz2jbhYHL9AHFnYQWt1NwMedn5usAxhYjZ2hBFhM3jNGUnSEzWqU7D8WQqj5EZT1z7wwW5okqHUsSK1",
  "key19": "EneNPK1HQ7zepKKc7Nz23oMEKfHW31C8Bi8iUfRoruTyj9fJozVUB3axqAQRWekFdP6YDjsZz6EQ5nYiERMpEb9",
  "key20": "4hRhpjNaYUZRiXZKMXtpMtoQYx9QpHqF9qkobi8yLQMdShy7Kg8zqVtZFXuJCA37jrTf3rMDPcNYMebdHMCrHd5A",
  "key21": "UTygy98RWLPu4sGq1QP4FVFu4QbFX5DoTCre12G8BnqtCr2YgiMUHWVYHBTWasLexMTXq5NVW5QbYHNQYHSCXot",
  "key22": "3gvB6ZENAoHocjQBszMuEcpGesUKh9Av4hcQppd6sFbk197GoaApMBr6MnGULaxPagoHGnHVzubRr1mbr835yK2p",
  "key23": "4zSQVzfH8tm23Zfq38nzRvDj6fx63dWrCAAu6vi4mTj2TY9zVXYvxpqH19y9sGJaLmhN9XJiGhBiN5TU36rUR8e4",
  "key24": "54zQ6g6A1mLQHWfQbpeCCtS3VAGeoiumrudxFQ8tdQL3yjau4BFiG6C73PvCizHDkrNPcFVvvFseLMfDhCYVviJx",
  "key25": "5yzz5x351FuYb6vyRbB33paKsbmxXQwaj4ZwF6ix7iZh9Squx9wHBeEA2ezVxu2TEdyJouJMHEJ81z7Yze6gbdNY",
  "key26": "28hvZ9giei3TxDsHeiTANEK6eNGTdQKBzovgu7HfyuwG5siCcoeKoomwxRwRRc4uySo6pNHJ7CncmejyG3bKYScB",
  "key27": "678Ac7DvD5GhPBYbbnfrtP3UW59uxdwCCSjarkyF9HaDraaC424PHwnm65418FErs9bcSzBznJU5GLKb251UNDGx",
  "key28": "5B3EvJeFHksxKcKMuFrVm8FRKKwJ4ZR4bAki1GPj7MArcx9zVGJvj6zE4DTUfhuizLTj8gagVmPx3fJsA6Ag6u9",
  "key29": "5SjVKao18Rqn6EGxZAv8ouErQ2P4jzpqhnj7ArxTpjEiHePihKEBFPd5RkrQNPWdboZmKJhzwtP1BinNYbMHA5th",
  "key30": "5p8xWoj32iYy5Jyfj9GWspefyyrKHJapYftfTyZ4fEb9J3XszUQZL474d5r5ytZ3H1de3zwzX4GDmKpY2A74JssN"
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
