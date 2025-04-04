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
    "3VtEfvitTv2aEdpMTqtKywjbywoHJprPuDzL2YpkbLHGhpf57pv1dm2mv5mw2u2LFYxrzwihiBH5A6Da7KPxpztU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGLtDaDF1Bhz1Tvf3ctcobc85wtAELCamjvcL8gMAyxycFsrm2EUknn7B3Ayr2hAAGUGWa8yJC5GUEsf7uN3eSN",
  "key1": "4oQBgaAprzdQPDJUTfTkfndkmiRXz4ud9mtSmuJphuxt1KHGRV7tbwxjtecukLNeoFB9HtuHRqW8rZPgYhVyfhNm",
  "key2": "3pijNJQU54VE5y5HNZxSoSB6cr346rWVJCUZeFv96y5f6hjACcFyGkbRAuqZhdjUESn81S1TaKBqe5p5Rhkqn9AB",
  "key3": "4DaxBkhinkNRiPhLabhha2D8w126VyuJKu5mmubmrdfUa2YyqdpsLkTH19G7eY7TiPEXTXbTii7sxoU8VAHSqHPN",
  "key4": "4VjryZHxAH4fACXCrcfbwzRyDkaWKm3N6sAdGccuhHgrKgGsmBZsouDSXJwHNpACj3by4iFe5MFay4wq5qFadWfi",
  "key5": "4yv8NfvL7HzShHpk61CLnwRSS8JhivmfjCfQadJEt14cNwDGisNEVoqGAraT96xNieFT8BG83kZHWLc5TaL56SjF",
  "key6": "2rVaMk1jqhC5KaCAHdMvrJQNubcCJnsoWuyaSU4McQLTusSNbd4HSHULQB1DTxLSvJPCbkykcbcWQRDb1XhwPoDK",
  "key7": "4WzTsw3p9DUJRuYfLNkysYZfegrQUb6fKRXST7EJ96WahMriEQhqQoqiJaUSupwvP6FLuQsAo2NkiVvHtoQ9CPEP",
  "key8": "wN7FpMjsotXDHXtBASJBBJyofyz5dpgjMwh3RwAUZ2ZBiVBvsxvcwwQhNMhNgHSYD6iGaECLsU4sfooZJQEynhT",
  "key9": "42ANtDVXCMjy4ahkTTEniyvifm4F5WzgornPws2sUVa33iQbhviuMurg1Up4khd7TzSuAWvmzx8ittNyYpFY5LpV",
  "key10": "3z8YVL1ZqKwMhq5sWaFgNJ6rSN6bDFRXmoaRgHwrwP6jNiiJqsvSDywPJVzJ1bKvbgyMgdMoQZSJhKe3ExCYqAfk",
  "key11": "i8XwZP1UPDijTH2VNaL2LvkjPvJahZAWtpyjtG6gPmLG8GdJcFnCCUBCgRiqk5bL5W6HFvT944hN7irCJLbuxrP",
  "key12": "2o8WH5ezS7sSFXWNYdBbHvZaQZQhbtBmHwTWv1s1jkrxQZwUrmR4nZTGZwhHTTweS2WK4s1GdAcw3jEsG6uxx4u9",
  "key13": "2LaH8uqm3tPxxLwghkh6b41sdwWq5wTqjAJscXofavE6bDzsR8zGq5uhqoZUay1RPoLspuLbiFrLTd2Sf3Z3FJSk",
  "key14": "2oTRUazcNMYb7LUAkLNuths8qnBxaDchjaEEB5YmNtewoEbKDokgzKxZFv57zKEuffng15rmFCjPhpFQNGYh4p7P",
  "key15": "xDqxJupNSdR4HFVnELZtpCrwX6Zehb93E1twkJ5gBFgG6xHyaXs4CBDN4cSAUq1Hnf4mLfZjRbR9x4z5aHpSVsx",
  "key16": "4NaVUXkF3dYTJBgPqJdhXW3sBKVf7BJPua1Sii7kteujs8ZCeQE2deEiNtVo2TN6HYb7F5mP4D26xgtXDq1XDcyc",
  "key17": "2CExfvwUbYCVZ4PaMfTf1c4MaQyF7G5CdKiLmEZYQ4QTyFXtaLFyNC3oM1cK6yTrcfQhd1ouKnH43QDtpsY7KpAQ",
  "key18": "4q8g3oRGFGkG2BDYp1aZRDhrxvSARrP3cap7Cb3njvdzrRU3KYLuKKrhhXFqhAqNQgrGYDjzRYZfw6cZp4XYkfmq",
  "key19": "4WC1qP2aN5L2JKPkBG5cQRnVFrcNUQ3Yp7fwubSu3TLMpGNmefxpeoFEwsQHLFmFaj9ZYw5pYYGwjPjr13vXeCRU",
  "key20": "4UXPCKupPd3LJTL5Lx4kEbaJQwm1JBwGmFPgyuQcm9ifwg92gT42SFuQ6ugvx56yzBwLGAmV4va6Pb98Yxowtp1W",
  "key21": "5gP9z2c371nubNsmHRLW87P5g9EUovjezUSean7UtiKPqPSeeoZYcXXU3hNfujaiGa22dCVRZjfY2wpLDCzu4X5P",
  "key22": "2fkpUxyEurNd4dFumGDExrgBsNWRmuY3K3atj9LqmHeqMKkQFHcy7seQaJHdkLB71pXN3QqaJGNndSyQ2eGGmemw",
  "key23": "2oXKWvcioVFTcrz2QpVERSmvDmrnsFfsX9xUACmDDGaRrirkE9iCU1Gd8KynTp9yRvycTAvYSQjscaBSfybdKr6",
  "key24": "3LeFeKiv2oyamu2rjZsh3gxJaaQgohgZPjHAnuj2dpWPiVuoFSTQbwxCJjjbLL5WB4bZH6uceoehoPDaxUf6MTgs",
  "key25": "kgBGg6rB6JWtgCRbw3r1TCoddPmoaDeQAYbA8eRmR3d5zCibQ7DHY7efQj5bTWV83Co7bbVAMPfysMXbRKvE9pw",
  "key26": "29MECiEm7xm5KcUZ9mkoa37K4NWp2QzJqRWCk4qTnDYf7ytgTn9VXwPs9g39EGpkC6gacAL6aAVkpWyohzuTCDGd",
  "key27": "5fuVMvAZNEwaW9zEF2wc62MqZRznHqtZroGnRBsvkWgTKsNNzv63avFhe1WnomoV9DRKF1yTZ9DyndHHyWMsUqPX",
  "key28": "4qa5jxPDSFXWbe2SkSnum34eWoYkMESvZ4w6pMiKrUYDNi6sVXWxokXcf5TCHPo9iCkXNps9QckVkimwJBBKYm25",
  "key29": "3s5sb8WkptYuVwSCaDLEf2ppu8VKpvLA6TzvqLXHTwkr9vMmdUqx9x4DgiLhUXG2PnBEqKa5VoxpxxXYLELKQgGU",
  "key30": "28ek4MseQV5jFMTYDUCVZPchGKF33MWWD6uP6eXDduygCzuHaMMbZLcuuzg4mgsEa7zp5gRBjAQpju5VJVrt5an2",
  "key31": "eWhx4q6QrCJq8BrCv19AbCVGmDkFfXNeupJmUDYYAvdXjzEb2ZwrRkwxDHBKCstYPmr7QSqZtZFtDZUF9wmgtQN",
  "key32": "2Jp4e2ggUWfm6f4qoLRPoRjTxuJQZkK4CXUjtudT3kEBSy1wpFUmxaKzX4MtbMqnUREnvvKbAXv1tkNxJt6CwKf8",
  "key33": "3GpJXvTznzG3GuSthXdusi7sAjwzkNqikPbzWHFBkcHBdPsCsLkr3MgYSqkeZry7Wm2V9uxk2TDqp9YFnYnsmqhQ",
  "key34": "4WbkbvTsuGN2AGZpYxeopfNJBAtnH5jRv2ULoXMwzj6vxHP1RD9a6HzRkZMmA1zuacekuncpG6sRQJtBKUeH4nbq",
  "key35": "2p8cySGS8xHtgUZ34hwMbaiNUKGa2tguhJgixnqyTBtakXyEsRyQZxh6dzeUmvZj16fAscBRLyebicho4kMGAc68",
  "key36": "2rjdkgaehkYEc1Hst9t7DfLhj5ZZg4xLbCCCfPZxcZruhsVBLJERA7pprH58ZtFSA3MmSqUaATT4k9BGv38dp4gD",
  "key37": "4R2Fg9ZaHS5iQdw7wKpA4RSGHnEwgVgg2g7pgDnNuQjZ89q91Qqzf67DKx5EHT1LiijaxrwNwcFNFWeAkfhoii7j",
  "key38": "2AGg3ZwzVKJsf7Cvezx8C7jrpjEvWgJjBXKMkyzh1uDvHUcJxgR6zJ2Agp2gg8R5wwo7Jxy7PAaiQbYgtJEB9SqS",
  "key39": "SkNETMSuTJH2jpXfwcV3Key2utx4R17YyJnGWVMWeBd25VczsJQuFq4yL2ubBcT2wsUb4MXHb2TUNJCnEuqGgCJ",
  "key40": "yC7f3emB64RCggxjWVz4rzXh9v5usBUoe4KDMmuKXjg2G4esffFFUfsa4F2jYeeUcwnvSCsCbzHzZfqXpkuXFB2",
  "key41": "5kFyxAvnLBFMwtZEzML2FWEBG9NbbQrcJHv9faYJas2ssZhS3cLiKHv4DixZb1oV4JnNQw8apj1d8dLuQNJhq244",
  "key42": "38MsUPSUwkxKvvdEpdfYs12cnDTWV5FMHNXc9wJL7f2wrDjXWnt9nvDZeVf6eumu1w7Xc9uLP1MRKUhMVMcVtYv"
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
