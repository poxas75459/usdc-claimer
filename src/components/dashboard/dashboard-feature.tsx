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
    "yZEBYmKYQWRJQ4Pvm5zA3inARhMs4beftL1TMU5xi4MSrtzqXmmSsJFiP6m3vyKoHm9AbQ1Wd7hBtGiorsPPZ36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSsCeszTfXWs3aYKjj9PVJLhe6b3KJojzJSEFVXW3Ejzwwh3cN4fww8QBn9pDfgGtHjCsj2gkHBagxKkR5DjazF",
  "key1": "3veq7BqjwWC5YttZZ4xznKDZ4oDYE5XydpJV6zQvGmLCGupvtdpxFazjBaW9QyXFARLyQgQaEt1wMCbKRt3RZFWe",
  "key2": "3Bx7hb7xZQgi3g1h3TziZDHF6pfRKYVGqM552zjTd5DeoUYtCU3Ebi1Y6YcTKRAfpJjHa9GUPSBWeP4rdraAY7k5",
  "key3": "22qGB8J3kCFS7TebgS1E82ZEaR7RV8iNxTp9DFzKFX8KMtoFwXS3FME9zWMhR1SuELMoZqvYP29qpWM1E4j21vUU",
  "key4": "3qQuy1tTkgwZ6gwGNnVWNBUac3aiQSsJE44kHZ5xD9ERWUi33a6uskcUA66FaDAvPm2AmRLMAtVAftaSPxweJPJE",
  "key5": "3fGUXLbtj3tqtSxGnvpZYF9S5Dqsjsv1HmHqUZTBkMk7PKX1teVE1FyEy1phsPbn1MfAprq4KMAsQZ8z4tDbtUHb",
  "key6": "2NLhXsYLNTy4x8A2Qj6LQKvcuJUco9FNrXCWj5fst6ubPEwc8NC7Nc3P4PBD5U8VLQDS1n7AnfGUnZtunU6SvC8n",
  "key7": "35dWCgYfs6RU4JuWjPWS28AsxNrzZPYc78kN2bBdMgzspP1cppuCAjjfZTkFbJ2pAUBqpLWrQ4H2MCeU6Vk5fXsR",
  "key8": "3AqVfka1v4u2mW7hHE21XKum4Rv8BNF1vcewc2WtSZMkGbLcMiFz56ryhDZqe1fFLxHoiDDo9uuaYqjJNxjbvRCS",
  "key9": "2PPkShzXcGXuhQpiAPaP693gpP9Uyrpwh869LfBRwxyXRhgUAsbNAEXuYJiCJcbH2WgJwTtcmVtCdAB2KWuojeV6",
  "key10": "2jZQUHKCJjo4sjWyRLyBfKSATG3W9oEWxqVhxHHSVFuLdTovWtmXo4dNMfE78nwE1puAjaBECAx82zua1kYwtfrE",
  "key11": "315r5ysrZpDXanpzzFAvFHJZbwuAk1ut6XPcBwexMfDAzBAFhtqLMmqekvMFE2hCgrfgcQ785TztiddoWxoeKujG",
  "key12": "3vKUbrz4xvgkd4MWNb6tgEWNoFQMdcmrNwpgzCQWy8XZGxPWGTG5q8PShzvEpQmDWavLJz1ZQY1HhQ8YtA4FSu42",
  "key13": "3v78QnJhJyRyZtfgKFnpZfXRnQPxnmRbrSXNW4w7qmFHv5w27FiRpv28u5ASRLLKx1VNhToRLkMZWHkvJ91Gs78Q",
  "key14": "42ZUySudQafWRUAXQr9BebsbxYuBC5g9dgXyUgVSMRzyCPybnv6fXsSM791m1run5TJREDo4LqLE2jLXV8vne5c6",
  "key15": "aeme4Soav6b6HUFYYieBRn7zk1HnZf4oEqUSU4nrgzgxCFt6Whkhw9KHUdNbeRffSTvceiuwYdBpNbkybuZ6qVm",
  "key16": "51ynUnzgYQBbVy5VE51jnnr8pk2Jc11kBBLRMcTWvekt8sr2tshFiqfh6fbwCt14E4r455ajH5iCdbN9fyvzthzZ",
  "key17": "2sS5tjTK4GYRCNeVDGNZNFvg7iEyDLFXqD7i7hJgoN6FtMHUZffg7Nzn7hzeinQatW4ETpWLEAuenawiiZjEYuaw",
  "key18": "Mmy864pV6DGjykLvHdypjTjUcLzLzmeXat13B1rabQ55BPkRW3R6CgX6GTxwFQ428cfi6vXdcrVTi8eY9YLk6ky",
  "key19": "4AiZ7YkDndKY8o1VszkaSvaXqJsCxy77aT2fgR29VasedjirAA1Z62rEbvCSJ2tTwFtVX4UEUNarudVjZftK1Atw",
  "key20": "4YLfvPKGhUQh3nzKSMb61r7wy6JPyzPDFLAnkeHegNqgAbgp6W1cPrrfmVb5S8CjPrkcoDm9wnUmzwXWKdatppZd",
  "key21": "4ap8unPrKELP7o5yvcE48UBU2iL9qFJAkGr7jo3wZGLUa4ag33yTcK3M41SUsXsMHNE4wzDd3HUGLxHFLAKgb6HJ",
  "key22": "4ibHhMa5nBF6YRrzsNyB6AwgDm87V1Z5cKxRoXEkJDk1fgdxVhZjshVzXFaDTiZPhdQsyR7QTibuKjegZ1KtFEcm",
  "key23": "4KYEdyK6Bxx5egbKHr7jqUsnEVHRMS3Gp9MXeWSqitLXDnGPjifSVHWSs7Z35rQ5y9R52gPZZFKwkExKiMYbMn6X",
  "key24": "4NKqe3eeRWA31PAbkuwEAnhjTrRnhw5ULBJZdHm4adcSRvJ76U2HmxDaRu619mmHJej4mSkhUwJ6h4Bu1yy2L4tn",
  "key25": "2gUGsxACkS3zfP8Nrd1PKCVQUyra2MfotDFu7qfuPWVcUn3tKRg6Gfr1cPhucULxcruG2z1T9cmcuFnmKshrrawX"
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
