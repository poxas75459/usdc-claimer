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
    "26BiobviJcCx2d7MF5sxohuQhMjsM9fHCqjTKKNfcM5k6rY9TnEAVtoPajsd1MAGtXWWBQzisviBomNyebVnUgmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nai64Q8UC7mbUU67oiRZcee4RYAaCDfjLgXMQ8s5YiovL2YWmB51GkypVNGbvSrP9sAuCe8CGsSUEUC6s78ho4y",
  "key1": "2wdjk1QNBXoLY9bN28QVnhtXYAic2K7p8y3pPMa4uZLbmB2JbiEe7BpzVZ1tRumdDqjtc3ptB2NESJa7trrP4U4L",
  "key2": "6CjKUtVoHTVQXEAsP2WTjgoZyMfS2Rc6k1qhgehbMnxTePT59TH2ZD9wqBqjHGB2b3pPLia16Y3qnPoNUszMauT",
  "key3": "2BCzn6eHUzGYKrCRoXZD6RCWSVFEC4LUtHL5gwvtNxqbYeRBm45UQTK8hmZFdawAFxbmnVJifhsTc8tEYyghmixU",
  "key4": "4X8xVh5JSbJQUo1m6DL9mW45SwEpo3WwfWw36gfc25BJMekQcZn5UqqwQNCiNZhRiAwTsm2pSo8h6oea9hgdRnNn",
  "key5": "57AHjofEu6JKUsQbwebj26D6e8cfMSCQEpDS1QAqqiBcWGWRErHGYbZ9gY9e7CE7LhHzuSzuBUR94q1udSpMUmWo",
  "key6": "3PpTd5asZu8aW19CDcSEa44BXNAHrLUKRwjkhYshhqtPxamp7Zb7Tvr7ySGVqqYouYe7C4q2mHFxkqguKjEarHsL",
  "key7": "4zW8JiUkrZKpYfugK1xUoH8Do6pdzdWHDQady4uWMYedmKzFDwq1X3FVk6e8hEwyPcWs7aJrWMPyPRz6qmotD7Ek",
  "key8": "5Kk3Ggv5QVtfkF1J935Lpk69sVcyB5qq9XD86K9c6sduexUXu16jJRZ6Pb2sF3pNR24t8GRVAYmhm5mNTaHevai7",
  "key9": "4KkyZd6HDXRJ7HWhMAZ9LxaWrcof76u4M5HhYYdeab9zkKMiw1JgrnmGKgt7g9nbiVygwoNwHZopj66BR9eXK5FR",
  "key10": "5a9hNVJ7JkyegTGKxJnjb3HfoUt9ycyT1gvsnaBpti5EUUwKC5R6uAdbfKt6msp1bL8ndtz8PpWjHHyev6Wbp9yY",
  "key11": "33fSmPScUw6YrzyGymeewwMQ8CxrYpTSA6YeCuXUfZ5XZyTkD8x6hhsDTZ3sHoitpMrXBigqatcrzZc2Q9h66TCd",
  "key12": "RiNU41Jb973vQWh2FfAsmpjFCtoHioutSXke6vJpkciDmRfvnheYcA4bsEBR2x5pwtU28fXL2VWmeShyAijCF1X",
  "key13": "3URyLerYwsdVgxsBBszt1Vv1orWkZinMKXHapBxiW9RpfJfjZ7627WvnVB7kHKQfyBhtZBmFz5Dgyy3RXADG6BuW",
  "key14": "5kWEvts2ULDqs2fYbY7ig4TFGkXcVGntXgrH7nWw2jTHSkKZojiuUJGNnhD4MaNra1B2DBGtisgGk85YZqsrcdmw",
  "key15": "4SFdQ2pxefRnAtggL7yAc8oPZoEjUz4byPokcisdeyHxRNacpBzk7J7QxkKmbpUhKJQSPCw8t5ES11Jh2iDFpevq",
  "key16": "3JMDroyzEkWyedPpYSK7yEgot9YdK8mmywMhD4Q84N2uYNfY1wJ1jahS9BVx4ehAjiCtrxPQKBALRAMXX2fKciQh",
  "key17": "3iLJEZHFWa7CVG6fZt7F5NckCZ2N7Y7yEyAuBL14yp7GAQyktWk33Ngm8zC5UdhJpF6qvnxPm4np9TtKsA52ZFSU",
  "key18": "3MrwwZaiaZp5EhhLYh8kowiEsgsgDzWEeVgKYAwni2LxE85sNU8B5uQjefHZ85DhdX7hdGLZBRSJ4CmrG6VAkBTT",
  "key19": "395d7ojq8hMZDYdH5aGN6Q8wiVwVV9jDrPZKjc82AChfeEypRYr52ZM7d7WQ23AVgWJhiJCaJgw1Pp9zfAkMt6x2",
  "key20": "4vEJVBX1W4rPrxip4HBP69qfpwof3qpVuifEhNUePVT5ZMtzpzayRdPkncYSXghfRj3a5JrzpNRZbVWMGk4STaTa",
  "key21": "5csTNpfUWV9TdQ6U7vjB2WXsqPHDBqMDijHBaGvktK5vEovATF3j8Yx3J7v47K5TeXMu9Ty5f6wTSnNCNR9pEA8m",
  "key22": "25jBYwr5LTfXgBFP2ZGTPDAsGkc1ix7U81tqAENRuxbMGTx4jXV6d2RZ7wHESjFraVk3iozWJQ445wK2AmsQ9rsY",
  "key23": "2vedYeZ4k1eo5p4Fxmj3FRXFDwpso7tfcCcaaPoKi9AwwmR8aB9KMXLsAeMxFsxuNhi1qkU5AZAv6fspfpvCvppQ",
  "key24": "5Txe8zhb9HBEYFQ3LWKNersUdMsMQQYRFLfgmFTgH4KFQ1MiBv8EiPAgFyHJ4KLzF5eqbU86ce26KUSiUEss3dSr",
  "key25": "5STayiHjEmEwDvqZ8gUKtf6dodsivq3TVUpPzHviceQUiZQjBmQLfYAhS8vS9DejmcDhhzrjimmbAQEzeGAvfNX1",
  "key26": "4NHLPxQmDJBmrFAQ3zFrYCqr7X3gUQ3ULs2VN3eFiu8cWZnKnXStSZ3VkiJLUy19ZRvL1Cbu48DLEQsGhu9fz7e3",
  "key27": "4ww26JJsvLHJvSPqUoHtnpbLK5M76jLUceByxbAY96yKnsFgzNbAm1Wi6tV2Etrsftp3gz2G2AawkSGZgzPe88Cx",
  "key28": "2kcqej5YV6ndGNKb6mjuT8y4uj5sZbrVS4H3Yt8KFURCQm7VjfLcgGnW7gYdpYppAosMGJkg9P72aMzQ2AJfg16W",
  "key29": "472qgmeZPhGTroRCZThEanqRet6N1vBeSZb9BmsT7kPECyQho5C764cuAZ17fWVfUgVdKiYxYjaJD6XMYM2R8r9m",
  "key30": "4p4WJY58CCicyuUfpuHrNYcPZCguc79rUhtnACt4EtL6Bo5vR8kvrfsBTYyRv7r8v1EXf9YL16LmASPrTbN2rqYS",
  "key31": "3otAAaY1TEdTv4Pxj23HSnNoQATodj4MvMuQEsNQAtXU8nCgn3uKaFE6pGTxw2BwRdkFfpewwxpaPB39njk73cCv",
  "key32": "2XHQhHMCP6GHHtmsexCcfgUHgZ7eQXNsHTYHm1fyF9cmaEtwEuwRmZTmzhyYH75eRA52Zr4Q5mZvVu7Soyqh8hvf",
  "key33": "3FnRGKCxU5qZtKDUxeucu5bExPSkP1xbW8mfqKpGAGF2A18nTSwY2nMiwppU4Z1UMU5SChUMtfYUDT3FTyqPQZhG",
  "key34": "3NmhvWhWX1V6sYJ8jC8HAqXk1WXqG8WDUJJJJZWig94TauN4b2YP5W21fvndQLP5tF3GBNXpmNNshZUJVyJctnam",
  "key35": "5kSPwW4yHqVp8dBcN7KT4Z72RBD8cPibA5PBzLg7rD5WSXztaZBGJa5bWswGsjZeq9gySg4fzosZEJWvXn9GX6vv",
  "key36": "5WzuES8TsQPShvKnvuE4Y99CpcjAbTEVMDNcKXGUn7u31CeDpFZQwvpAjEkeP1zKRLmJQysQvuSYcbkYaefHvP7t",
  "key37": "8osTZ7HeZzRG3Bvfo4k3azNAeeJW7hsAZQPZYcgozxML3aLLoFaht1ua5tnz2fsj2CBJzcXR2VHfVJRxxkWhHgq",
  "key38": "5Dz8pwYSaurSjLPChkiKcsd8iNjaDFwPd4XEtxaknx13ynXb6sSNwx4fkUE7coR8kNXVkQzrpSwFBKpmtXUdZ7y9",
  "key39": "26eEGDe5rM7Tux6KorhZaVPUa2Bs7a1TYoHPDa9VmKbDe89TyVvhERRgVjqqcAowkoMZnCywqux8B9b5yBaPuNiy",
  "key40": "4wvFAVfutVBxSGe8PwQHeWNL2UtzR9HmGnYm1GWM27BNqq53U7uKgKWcuy2DjE9aNjyAWLKwFe4VTwPiKUVaPhv9",
  "key41": "2Uj1hqucTxZwZUCrhTqkTwbjTAAKHxoCGg2poW3sbMtKhzHeMnP2sLyD1jxZ46aLk4PL4MgSiQeKeotGxnzaQ2SA",
  "key42": "5xRYKda7xuiJzNaPxTSSqM2GwHjwj5gKSzvdXDzKsUQi2XKqQDqf5BgeG7UqBS6tk3AvkdVqXLYQf6cfcpCq6KXk",
  "key43": "iRxpCK8e3HbV2WJPtzwYeTKL45RPH1K83QKzyGwuTCzj9bTghUMbgqN8V94eT6X8CWJ5VbuKLf2jJeSSt4tCz9S",
  "key44": "5kUxSoY6x3i8pHYpZPavn4CAg6pUgtuVLW82S9TrNZA26NWb6BtdXLK2j8hQ42bDwJzD4u2kX6wtrs7TGN4BFj2B"
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
