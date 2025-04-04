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
    "Cs8rEjzXu8MSa8fqxggzkSTxTxeFw5Srot9LNV9iUGRWScxUosES9k3Evu8Xt9fAyVrypp8jZzsRv2pDHuzV2na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aAgCcmAFcVRPfMioCm5c2rbqL8MdRabBRfeCnT9JKciLXXPbH4G1V9b1eLN8gGbmbzZVQyH9DHXzm7Qfhk61VDx",
  "key1": "2352Fz8EPG52mcmMkLj6iCidUqwX5wn1W76xHSnTFrUmfV73JhU8N6WzTKnSCAq4wYauZcKApGnptYREcFdcvqaY",
  "key2": "exfNjZTm5iMv52BHu6jsXZuNYR8nL8fJ2LknMLMya5VPqQrSFdsQRj9uJnNt9QFH4ygzjX1iBiW1xtF3115q8oa",
  "key3": "5w3KMR511AYbd4KTsXYTmM4fj4WY7v7sHVP4NNFM7ybhzh1vDyvHDxhaAzHh4mpV1GnpF41imp4cxdmEFVzbRUsq",
  "key4": "35GwVKbG3UgBoazLUuwqf4gCsEcEeHtJWXKBhvRB7QYLJrN15rjGPiYDz3kPYztbeMxxoKMC4tyKQCuhHPMX25A5",
  "key5": "2eNrwVG8XGKTRfMUK7ghLEw4SF3uuUpDgsTLQWn3usDAzyYci5eT7rTQDoY2KQksTPvL5tpudzs1hfsGkcpwnDbF",
  "key6": "2VcaYZbmjy4wAtcVDvuSMv1UUEs1HFvzK5uUU4MMbMzmePbGuJsDfobzU4MJpg1g3TJMUv6k4VKQEU9SUmr6WAGZ",
  "key7": "3eoJd9eQvBLuXTmMZUbH2iPmqSyn86akEdfdXdrJrNnyCrSYQLZEaCow6BoUPY4YoXWd1Er4dQpve9abpY43Jnyd",
  "key8": "57paTbj1C3esCPawcGcH5gsZQpdcuQfurN8Q1vff3uQTAzasKRiJhwmER8cfm9LznRC61MKkt3mtzzUMa2Po94Ss",
  "key9": "2ppF5CDiuc9gC65qCdVMUkUywGya4oYHg16fsUwAscferEXhFYtMBeyeFDP2ytLoBvPS9d8ULoRQKN7apYpSXnbt",
  "key10": "5gHxpWhxbg7JmEFvcRyw8cE8mDUkSwNiBr7RqaWfygkcQe4P3PLagN9fzUmmwi8vvbMmwkYEkScgnpSHEhyUZYyY",
  "key11": "2dfd1mCDdWsY78bFmYcm3HJAZtSfxvuhCoJpK2XWkuUf9AGr9QUjaaybZnhdkpQjezwX8gPaujxi6G4oZ6kRSmNC",
  "key12": "2CRPNvH5Z8KRmTAZ4ge57SzF8Bvo7k3jaJsc2BQ1bvWB1VknDyk3UcNySwDtbZeBn7BHxXCwsPWGmeRvGntQnSqP",
  "key13": "5d5z9wswrBigwJjTS6wP6kR1B5t5XLDNx8E5uPBbzSSWEg8kSLW2GbvrxKPFrS4KQ1MiFtZ31XjgashHHSaNJWQB",
  "key14": "2QQJd1kh18wiEuz3gi7aQ239H6JwDyVzfZZC4jmBDnLF9akbBJ16NstPvPy8ndMEkAA3keBtRCmYKUuzRBRkSoWC",
  "key15": "58HXpDvmbj1RTHxLDcZQctR14Ce9XYqgQrDgkTx8fCyCHN92YmCgPxqW7rkXSGinEbTMbw8RLG9Pf1vP7ncr6J9n",
  "key16": "36bNqLedmjja1PAqGdoCaXzZCp8byWk1Zg6gSBV8ErTpqaV3fAyVR9vaxYcmtdE2J1nJ35VYVHthmJYFrNKunFCQ",
  "key17": "25RE7V2yytp1n9mypFxUtZmRY69yRQE69kcGYLGBHo2n8Lopy4dj2WqRCUpodnbUbQsWZkJQKAcaWRhfT9hEWi7S",
  "key18": "3YJ9dYZVNUN1Hd1bebyXVKg552826cJyxcPDXvH5dhKBufkXMuDZiCUtfAweVdSsPt1szPoW8zU4C9MQdSgq5rWn",
  "key19": "CzugsPVTY74xyJ8cRLeCB2rn4soSBXpVTezcQ2DYwpQQb3mEmFfkVc8CFF5R32hhrBppakw7zjhjwHCozqCdZST",
  "key20": "5Zh8cPRC7ekpUTRcEJ3ia7kQR4iSgzmrs2uDPRcaKKsJ1zqi8VpyV9gHJcZKQC6Mu2sEHHNvWk8pu2tEdVGuZZCw",
  "key21": "VcFs4Zzb4grZYTGfaSRxyAvZUVbfd1KVjKggu4abSPbpDGc6dUtrpTeg9FNDEoLcdgLkZ7ZctvGCZ9Nwa9wAwCF",
  "key22": "5SFJN895FRAwwCzPpVkiSMwddEundD7dVZaHfrWZYQq6QMNYjwdGXHGK7gbqtAxLygguaMWZbbPmrVAmZycpQ4GU",
  "key23": "3rKh5zM5rWW2bbM4ervamn8di2p81XFpK8dJ6uFHV4Dx9ZiiHNfGFJGZ5pPtMTm48fzA1rbpoBWBtxZpH6bXVQTN",
  "key24": "2P6JGM4RoG7FG9XLbbcCHEyChJypYKJRSEkPs2S4S5CiDk8ePi943WuwT6tGQbeszdmXqdDwVRReG1aA88iwsiD9",
  "key25": "2BZh9JH1MBHQVFp5Vc87jWGHk5eCzDJkuJf1wM41k2kmjUoyviHmRXJuCkJE8bPzZtBRJZKY4GV3vLBxQxWLTgkL",
  "key26": "g193JmRS3GMAP9jLGBTHzkMpfXyB4U9BuiAmPRhfgSC4Xv8VKkYcLxDY3Xw5pJUcV93iJWK4b8VE1GNdNf2D5FE",
  "key27": "3gXaZmXCTotyMaL5sM3ZQ7d6TwrCzyCPLE1hma3k4Lori8vGLMBhDTaaTxmPeBsvjoxpLW6sdrHndZRDt2aERhLH"
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
