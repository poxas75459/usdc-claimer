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
    "3xKb6HSdngfZ7ELiXDwFtEUnrUZ4sfF3Cs8EAqE699Admo7mUZ711occf7W625HywuaMxK7RddLg4U7qSuKei9hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmr1WK7uLqVxGxkiweyH3eBf3dByEnZQpXhdC2wF1aw3qFUL2gUXWLRfMGRybNfrXB7J3uZZeBRvHTMBhCp6xTC",
  "key1": "4GjgyHCrGSBPJaTbeBQMPGXtoVQR1usDVY4CMwVVnZAKcfB4er4igM2udBUp5jWqQLWrrfBrrhaqtbzpZh9GMYPq",
  "key2": "4D6mnbvJbUmDz7YMaXcggRGLhYDaRAeT2nBEETo2eECDbkAsL3fDMPqExq1qhi9ZpL7jA9UDPNKMEqxYQrrdy7EH",
  "key3": "5FMkTJwUWBPW2BUvndTV4NcU5ETt2S9XGnrXrffSZ3fsJsK9vCfejvfLFku9QsYPG97wHB3iommKyST52JyhtncK",
  "key4": "5N9i61nBaiQF6FHm95ZXDGA6L2Uh655CcNctgLAQ6fWR9sSV3qoRE5SmYQNDrKo2udiGgMeC3VvnyYFtpKi8BF2u",
  "key5": "4sEu7Li26SShKhKyTDpy4hMwoqpQUQX8m5LAoQ1U1uPYAntgDP3vjZtJQRa9FZXrgdAuAJnshK3y4uUSdrxkV7vX",
  "key6": "3ktNw7oVRstdbRACXSWy69w9ZesjXH3Qzquf4drdze6bim3yV8HP36gMpE3LjPLtMDAczRuY7VwkYADqQ1hyPd55",
  "key7": "foEFiX3UUimGrNmeBhGgBcj9QZiX4TKoAntoZ2EmLZkqYSXEaZvetEKGdSfjFooccfJAXG5WEANvNKcC87jHsor",
  "key8": "Vc5Rv1NhdPECP7t3YQauotAfxQZUex9cX7ZRtkwVrZey1tVbXgT3nBw1XuPZY2y3XEjFPfreyTvnz5yYSDsecX2",
  "key9": "4m7CxeaeiboNDPn7sW695M6MSQqkPyZ4FX7VUTcmZijSccRvkYTvr98FHL5wk6WXsQXNMFTjPR79CTmAHpFaVzpq",
  "key10": "3PdjR5wPXsoFJc7p4MN3NJ5Kd7udbmAgRkimpHRqnuTT49yoW1u5XRBsNvobfUe122tCTrCoCGWsFnYZFckteW3E",
  "key11": "3k5V8uqZiiT778TSa1KMr4jSonoSbAGTbP9igrjxgGAq91fmaM62qykiKVJkrC4LzAWrTqFDnzGXFjWYSNQeTcnY",
  "key12": "5dP9Ugz4aicJwQaB1KJDdpyCnGodLHucRSaR8r3vLjz1cyt5jRYtopJcn5NHuLK9LqcoA6d5DE7VVbhZWfTSzSdS",
  "key13": "5UpYu3xjiKgc6Y7eDHJT4tYG38rS9X5RPbw7i1YfgWxDTpzFRhta9dg5fNyorDMCWyCE9eXQTcphSnh1NNdtEwcD",
  "key14": "63YyDK6hD78b2z3gqVpHfWRULe6mSEYT6v74ix7TAySYX3CmimgHaKj7BwiijqyHsK1qithhbjLeB59Tpc3a9zu7",
  "key15": "2bUMW43mctMV7UKWrGBeN2x96EYgbmaRFgcjyJXhUrnM8Yz7RR6aEkRizCodS3NsBuZ8MgFMh3CAmdLRm9pXnJnE",
  "key16": "3RdqcMEBTs5LJWd391Lbqtuui2y7jH4ZnyuVTUksZAtbA5GEus8RiG6hQwEeY8exhQbKoXvpoGPWJi94tptpgG79",
  "key17": "36zMVfCnF4QWFrxsFjyDoHHGm5PzpbF1eXDkrtJRX2VZ56RwEK8KoX4Xu4sr8ruahQ7p6QCWHF3pHAKiQ8vkuHP",
  "key18": "3FLrmmAZbvsZPokVYsaaCzppZTBz5rdRcz4zBHZmau8tust34RP3k68gDZ2QcTtqrB3tY269BVRE3Q4qNrge5iBn",
  "key19": "2tPD3AGwG9F6nw42BZpPWVy6wSyLPeuWb1PNrudyEJBsEfvtQjYbUm9rhjJuhj6oNeinDEcsZYCe75DaK4813ADg",
  "key20": "5Pn2irfQcFpWXLQMed9VLHVuJWm9qkoMS4zwTK6wUdL2ut54MVVrxx6263yfPhwXNC5F4CgZTuSnx5mCVVDPrWoK",
  "key21": "3qy9mNppMUexdvZjVmgsD9rErUnWvKkM19tum6fMBN3j5sM5osAbfemzbed85Tig4iSTqk55Zw9tTTRfsX1tsXUs",
  "key22": "4YDxrxSXPPxiESCfozY8QgJQFYLoVVzdUKPKf7smFe7NR8uduWmkZZqaKmvvDAzZ8kWAEELz7BNK291WqpniMdgT",
  "key23": "3uBkNYcixT61SBLKa3urwsCjG4KSfEw9mdr5EZ4U73HsumrVX93FMiHYiwpYhGK5bXpGvJp85LJEgJkwy3LVQK8K",
  "key24": "mrRT7SGMGaUgBps9PKvGTimMN76LLuC8BA5vnwx4kGKBRk7Db4qXyJRYLTXv9nQAQbFLUSidUyGKH9TnWp9chnt",
  "key25": "4Hjk7tKaay92XsAcBp837SdbSomZpu8tMWRpNzB65iPww6TLrfgqPpvJUgizyheu4KrQXyZVpL45TVfjiyvLxLn5",
  "key26": "57jZWJWg26RS9dthHgrgDdMWpUzWrejFN3uq47B7yFjQGEPcrpvAMkoNiYMFuRgeJ8HizY7sHZbGak2EhCSA8up2",
  "key27": "6t5u5Er25n1KyCRjZTvSuQLKK7PhcdLhqrMPGeYTJ5oPHX4ikGGHgkUbuA5iSLdEFSoP2XXkYkMr9RX9F9RjcXZ",
  "key28": "CekCfcddapBj3s6Y4Vq425jxNT16HbNPr2LETuJY6snzujd3EWxmoWRT8n8jEA4n889BNVR5AuMjkQH6oEig2PH",
  "key29": "383HvoVANyzMcm5cn2hKjFxVB9oS3aYnEmHJZ7hJ1J4ez3ra6WStAiVbfTLDCAQhg1BB5KzN2dHsdUd2xyLYhbBd",
  "key30": "2QrnUSzq8wLagHxgDmW9bPWV78FC2R8fkFR8Bgf84LusTmymBCHMH2Uk8LDRvpAgbkbWy9ZaLBVNwLhCdC8hZSvu",
  "key31": "39auFtZ43mUB1Se8t2VRLwEVUvS7gRT4fhjowE6nXCmUU9TzFknFhvAHKrLPC5f9j9d5fXZipoAKwGAjtgo8pu7W",
  "key32": "hgQ14BPDdbUoEgdnBGdvyqriNXFDW2YPPYJUqNS9NV4qTVv3HxtEVbJxAbnCoQ3dYnXQSLRibh8VCYdgaHyb6Jr",
  "key33": "2auGBmrfeNhjQq8JcbPQddxLW6kpEBR4eveV9fS2zE3nKVTuxGDNUhSgVezoMzM6PAoAUwdXxsvG2PuPXshyqPMo",
  "key34": "4gD6yRvytV93vKQrDmwtbaPvUSdVJjcjajvbQDR1RYXXrBxUzGbbQaTwz4h4cMhsUPRTLLdqgRko2WwgKBruraeM",
  "key35": "34FtGKm9xhdiHUWuwQWzY976SQfSMLr2yaoNLNePkekKPAtceSqjcu3oLt1QZzpinrvK2K8BVSbYPNCMSK54PFR6",
  "key36": "ZmEXTDN2Co2zPSQyMFYJsBLRpKpCgTi7VwuYepK5XRocjpBFNTi5yzwZFtqrcHzmFevR8eaDwwyZix5ZUxn5imu",
  "key37": "5mtdrkQSVQVrEw7WWsYmTKrDSoxmYLzVJ5C1f5f1zSK2yS4KSuVw3BSrHarpYBhaEW2aeXPm8tPY9bJNhUUQFt3r",
  "key38": "46p4nPGj4T8UHwBQRBfQLPokSTLBYnJAXxRGgktuVL4mygYQqoWt4Y3pKxRsq4HvNtKRcyRayhDXPkdfgRviJvRP",
  "key39": "23k55vdx8DDf1Yq5LsC6XSurXh9Xmq3nRZqPK8TjeiXTYUMqMeJGD9Hz9DAtCVzEMPg6eGcqBPiroagYAXi7sgyp",
  "key40": "5mrT47eWWPFMHjz4zvoetChLEXxdHaK1WMyPxBBk5zWxmaL9iYps913VrseDGamaPLa5XaFxEYhsFUthkmqau9GH",
  "key41": "5U5Agn2TaD2E2kfTfyC4Bq5uFYCzN9GS4wuzRn19jc3bxLnYykngmt2j8XkpEvbLBft8EKZSMPxJxRFhxTTuV5S1",
  "key42": "3SPYTUk4hjXKdsb8sGdQceGENpNLxvXFU6psX75aKWsTMcu92MbKKG9MHjSVavs4t5vefyUGbVZXMhDzX5te1oBn"
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
