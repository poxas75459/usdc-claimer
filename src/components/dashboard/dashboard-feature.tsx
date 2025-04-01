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
    "5b2e398cmyEohbNdyVpsY1sKHrPbnka8xdtfLnug9ce5dcinorsuSXCLHG8apAdEwrotyCos9w54awZWkPUqQvfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFyjtNnZd6wqAHsWj4DMq3NUZoz9fcfyWxn1mMKYoX4L94HLLcbzebaU3Fk4LaMBugjgWEnwmrg7jHwR6k9NAzt",
  "key1": "5xDFg44CxgGekPCZftZhmNudDpjEGkhxNjMoTfr3sK4UqtJbm2VwBmv5r2u4M3j9CcQ2AsAf59ZYZpBrwunqQXQJ",
  "key2": "3zTKKuv9RhVykoMEovNzz1sxCojoAchUr8wURNad3juiGuPJzMAo6p5Q55bt863DYCqucLyBSoGrkfxoniRwifGo",
  "key3": "jqSUC5FkGWVACfwz7T3CAZtLPHXU1oAGMyAJ9ALNDHUR5pKz11VSHMY5afsj38uTnvnXdkQGjj8iQQTtYp5pj7M",
  "key4": "4JgnrBJRVwz2gQ7rjiqWnyMjYdcfN2EmQvQMoqW72h5r6mFy1WNneSvzAzmgfBvhugCQQNck3fVSPRYWPGFNHGkx",
  "key5": "5iZ18hkKnzWeREFyJjFJy5rs6ZpHMFmh6Yb7vmtLiBTQRP7E6LLqUajBoA1nMiqEjH83ckqrwQrpmLePXzPZgcZn",
  "key6": "3xgNVGZ1zravFKL95hiBQ9ZLNh582WgLPsc68hdNiEo5ScZAjYYcFFjND4Vgr15Rx9sZbhzwxzjiJMKambBti7rM",
  "key7": "63Me6g6idrTPhgbRHmHxr8CYLWoJMMhoV44pYPtpsnyx9bX5kHwmTo64QRAMDn5xwRQW2GbCbEkqUVANJypnLr3T",
  "key8": "2Pppxjq9pmsGSXYBNgjbayf5ohWtkWQH7gxYebJGAdvkoWNrMXoYjQ3FQATXnzyfTLRsEwsRrkE8ar5HSCDygjef",
  "key9": "4tduASoqZvipzNhsbCKisHWgtS8Jqm5cPGRrhTHxabquigAo2qvAhaZsoyXWgwiEz51erivkEUTiyLbGTPavsh7C",
  "key10": "jMWVxZHEjP14YoQRTe5HUZZoJAEfbrcbWCBssS9ja7Lw3WWjxnGpVY8d849NRfS4SCHhYhT4VVk8SoYuQNnwCSM",
  "key11": "ER9BD95PP6JWchgwL55uKT8So7ALZzm4uaom49RSej9zTsihfQUoEiM1fGE9ZMUNh9rGKX2JPp4FTEZxsX52cVA",
  "key12": "4cT7E9zSRJfd7z8KhmpuGcHbrrq1mqomneKK8w3z9rM2P5UwWpywC7EbeHpe86JWRSP2S5XmqZ5vr9R2M1k2ECZC",
  "key13": "52c8NcTcMrYvPk5RDqtD5LuEi9yjWzHMe1ygGdhmZuQ9bQGfVcd8mLEGyVYVZNsdH8ryNiZc7Ww2nvpD6Y5TpYz2",
  "key14": "2PkgpPtq2Y58bWqyWTFy3rf6pGxYSvpm6GEn3xi6bBnKrSGn3t8ZCxe3QxtjnYUxHfpd1JoLPnD4DCycbTTvn3Be",
  "key15": "3HhRSa9rz8KgWuLoKzbVSNkNF3UttUtk5frHRUoSou2ZHDpmoD1afUGdh5b8BHsoTwPmgfUzV81GVmqF3dkrgfKT",
  "key16": "4Qcy7SyXb4GR1EUpezz3p21qkRWndLZaFUPDy5DDJQ43MmTzqyH2TeUq2oMrgCTqJ8soD22mXqwgyn6m8ACRnchD",
  "key17": "2PxrHSnCzC8oYoWN2NjYLfJ5xcPue6Mn1wa5uGzxdS2cAmFNZRCjDiCo118uT8ELDthBEgVYFvvhfuwHxtSu76Y8",
  "key18": "2Ezit8pmpTWjUqKPM9tjF2CFFUr5YdBtZt8KFEN425jeBPfeZkHqR3fqa7Nca9wkYEB7pw2untYs5s27awkH2CHz",
  "key19": "4MeLneDDMnD6EQU4da7r5GzfFf1tU2tNzUWtuqMmyW9Y91VVVs7BVuHR7opi7DoVDCxpdjtrFLUfVSY6G1g41Qj2",
  "key20": "3wzwNwwCozotUWA2zTeMmF7LmFEXqzB7VqYMx25vUxUq9G4pLx1uD2mpcsUK917FXscwz1izaAQBYNhh9St8UH9b",
  "key21": "4Li7vdMZKsNRWLduwvqupX3mSyXuQdheF8WXFvRTn1fXLaK3Knxxsfwr4ctgS2FVfdG3k2n86bcPTene9V4Le6bW",
  "key22": "3tjgmyiqEASHqJ8GKYA5fZxKfu6EGMhNtxzCoXY53yyyy7cyt1zszZrLdrTRTCbHqzHkVgT9ysboFE57c4LTvNcr",
  "key23": "5UHgQ59ENJ7ez6YVqxGU3CaNexENLomACVMNWLsPDDBrLQrs1TSzjhx2JfQqxQqdHLizzc4fyS9aTL54saEJJwGT",
  "key24": "2GckwivonWUzZqXEh1J124wCWXgaBZcNvxoVLbLJgzBqtnpGaGuMUf8q69ZiJ7YTzpS3tSwQUCWCEukaMoFuwovc",
  "key25": "2B5h8MQj1idTTaU1W3v9HAVYT4wRUCPnwqEzgE9EofinjronxZcn4RX9pNbuVwfEqvNzEXZFwbCKhZJenJ7goRzA",
  "key26": "2s9iXrkPSKjiDQq54G8hPBtfnmMJgnBvSAi64Nm8HRuJCX1ViM1GxNMLwxn8JLiMmLDSPy4ZTpVc84CkQ4AiP8Wq",
  "key27": "3riZkVLM3mLvWQu4YHCsvcFMzrMeMXtm13T6hsPxfpJEtewtaSP4a3tBXDd1NzQZTbh9KG14ByPJVx7UGshv5SkE",
  "key28": "2MhFFC6GEctesbswjLxz8AGus2St55xMxESpvZeKoYownHq82uZdQGJ3CQ1bKDsxwPjYaDFaFJANNizCsBxYfhyi",
  "key29": "55GjgRRJXcnHzPkdhAVrWieqHQnGfX5d8dh76yfoDPE7aYAVb9bDGb1oFX94wBLoT59bnRknSQBCB1nQVSjrUUaP",
  "key30": "5kdmeSLkWPhMWUTVkz63TUs3fHTD6mXKt4etw6zNF5tHQyJHjZhs4CT3Jm1Nmf22tEqybooDXHhG4WH8DPgPUjzj",
  "key31": "2nzWqYmtJ2gfbjGaAnrJKnzxD8jz6hkWcacHGrRAN3L5AU9VyHPeHcbJBhb7Gn7pxN6vnPH4rBeYPB3wUwhyJ65z",
  "key32": "yfshuwbg7p5hce22AV28hQjBjPoG1MtxY148gxjgxF8szPxsisaZkU59F77PppmyKMgL3a1Q2W8tsCcqkjuB5ZP",
  "key33": "gxkVoBRAgyqtse7vnAHSYMsYuBuY3HXRF3rKKyZ5HvCtEESYFC65Zo6zHRKN4LqZTLThCF4Kwerigy8QGj5BkBa",
  "key34": "5aYXFZ4vZoFu8iYEf7avARkpjmvHjDLf5CyKoUh35ju63ACU3T9GRooEEtH6VpPULHcpqDfBccPbyguShLbxUYZ8"
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
