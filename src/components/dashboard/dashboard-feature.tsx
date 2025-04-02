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
    "48wzFigyDkXWoa2Y57k47XXe5vLRjDt5dJjAwFM44A76WfyCzeoJo8Pw7KqWR2sPeGTWA99zBC2oRChBfngi9XcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJ6YeNAun8s6WVrmerD2n8SG4ChUENRbthfHe4E3Jf7AGAJh5CriQzcqjr3Xq5vnWUxbRDawmvkH1BZuadfga3e",
  "key1": "34yQ5rcnRfH5VqWuzmZSiK3S2RTyardvxErde2es4dnAtfJHQb9maAk9b6St4MeNftBVdXpXq3utuyVFdqwcovAJ",
  "key2": "3V41wRfa4Jt21547XyBA4G6BNrW3Ynrv6a7g7XbyQ55doB19pHDSrv8XkNpqhxzNPPNSyqWwCKeYhLGhd628UvhE",
  "key3": "5MdGv1eo5p9kdsj4QqSEQxv9W5rteLJjMDR7qAPqTtZJiHPDfzGUYZK5NnQ9nDLVSdtRxG6r4sV4aiZx6z4t4cv1",
  "key4": "5rrTFj6Mm89YKDTgCJpLuPrzM6DqdAYXjuXTrt1bt7JZULxMixsUnLUGLMtYuP3CPorW3Qfnax9SwymYtYqNaaXR",
  "key5": "5VZvLHCzgk2PL1bkdn1a3Sp4ANXwKUPUYTCf1hE3TSsNEjfB9zsaHjk2DCoDnEXVwvWAXG9wDFYuenR1PBPKm9Js",
  "key6": "2z3cvE213G4vDWNHXYtKSVeNbZL1XiNe1HPvRqQDfj2HfYv3XxKdGu3MuRjNiJGgCuH7ZbWo5BCvzKinKDzjCGgs",
  "key7": "2yAgxhRmkv1yDFbawBAcQfLWeF6JoeRZqjyLhciTudnfMLyc7SZng3sRJTk6ahf9mH3ZSvxQm9rB1GswRJkhxbtg",
  "key8": "57DcoADEoSHdG87hF2sew5B6FvrpT9xsMfabhY92ByaFNsr2RHUWADcDVBhyvidGGxhGvFCxnpsRbUkMjmgb4ium",
  "key9": "aZGkGG58UYuXWJbYaGFMsVNnAaaPHXek8WmQVgTVr3bQ6WnnQJjVUTjST9sySgD5XniKXzY8uzWkGM9AjC1mNi8",
  "key10": "4FFrPhh2xxHqd359YdfR1b6t63KMjX6UVer8vmNPzU18wBuHREYWZBSjjs3WATsoAnXcWUyu2FZvwPzkr1hgMGtr",
  "key11": "bDZJkuxfnaiMtSzyVcLvYCJTgzxSfZD3FXmxKzoZJM2Tj8sSvF1rcGyjswcWKVpj2MtHN3HMK3Q8a9NqP8rke9z",
  "key12": "4kGYTnTwCGbYoex6wYMhsFM8zTVLyYQY6WqLaty1HPs7L9YySaDSwsZvzcGX3N2qC7x91TGsKspHETzxZ8GD7mbN",
  "key13": "3GpMZYQgAtnuq72wWChFupTcx82vwPPWpRNqjjaLaWfBy7J5FHoZKBnanqpjmiANcv9ZJUggwLLjZPG5jNBxi9uP",
  "key14": "xByjsui5ip74iQ9samDb6tE9rcP3pWNDdC9H6g8g16NbPAUwSKX4FpkyhKp1hPyhCuoTz4U6L5xxcLktEQ7kceE",
  "key15": "4GEu1TERg4bNTKa4Ny9TNcqzs4ZogdfMyrm1pKtpyHU5cJphs77zUbHVmCnxeiwQb73u7YA8Wvr4gDFoKv5TQTKs",
  "key16": "4WixUqp8vgBVLPma5anAZowdJzxazfo4CMLbGXkBCkPHyS8eGbwsizjAPgi1wakG6Lz2pFWZ2SmxHgz8pHjS8U1s",
  "key17": "3NsGuKcwhZux455dC6RFQuZWjW7PMcZsQ1RQUMkCkRK6WcFmP7ah4CM7HzcJBBJ1XM5FNAaSBF2eUZ1VfJR27J9w",
  "key18": "2MTD9btGo3nDRxRXsq72SEiA8MFyv3c1sWpwBMgLFYAc5nXbTgCAXKHrZFtLRqVyVVL4GmoC4iL5ezUz46bf5caD",
  "key19": "5s5W7s7Bsij9SF98aCuK586vDPW6oBuSR4ufNsT5Gpw45fZrkThw1T9qFrFYiQxow5ynqZfmjLRArXvDEcxfMaH2",
  "key20": "3SY7S7XJSKjdfncTvW8z6wEeirXRRZsrBiEzLu6KeAQQSLVuCJvQDGi5fsGEccNVCEr2uWsJf8e7LVNHivxHwDtW",
  "key21": "5YykDevDox5T5aumv8nyrWFF2J9NFhjaZqN8y98RDqfKXRDvwjwmgKWJMEkQ9m3sH3ozft5vmMHeHR6jFxnXVAjb",
  "key22": "4LKHS9esmB3RUPzdQxckzSrr1ggD5nf96i6KXpUEpMM2Tj91tKKG5x252qfyJYDPr74LJQdWnjEZqaVM4USe1j21",
  "key23": "5tXPvnTukBWd6vuv7a1m6geBjwhrxLwSXPZxLYY3cgBF3mAECUj5qJSqgE18otUTT2ZSfXsLe6F4Djf3q1hhMYBj",
  "key24": "5bcJVgQQFCEwubDzGd8UQFXQQXqp3GjbbNcqQk6YRwBANAFecPVVP3cEurzJZ5XX1Ke6WrL5nBrrJNs4DNCsDNLt",
  "key25": "4RvwKUXF3YZdUf1SmDbWHd1NYcwNXYAKhxaU8n6YuhLst6ddskwfTLNqw7QieZL8wMjHdfCHwb76GTU8gEEoLvYE",
  "key26": "3KGSXwsVkPRoayx7pNxfLYtsHk7c6aHLzE3meza7prZSdzFoDARSskCRz5DiBZX9JDjJmPYt4YGHPyiY8FTU5BoA",
  "key27": "3nFPNRh5sANFwiuvi27yEM5YpA1K34u4EqbcAJQwvYmCpKgcx2GHMZ1rm1YdxagHLtg5eEhYoYxewVzDyrJVamwc",
  "key28": "3xeqeNvYCS9WPoPHGZj87JaDg1JmSq2DuvUfKqTgvcSBMEH9EPEM9GmHArvRfFNBcisTXs8xKMuT4bvd1f61yJrN"
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
