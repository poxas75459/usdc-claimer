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
    "3vE8mR5d2gSY7ji7K22X9dFqCqqThKitL5JgUhKguwDRr3yQsazF1Gd9MtiPiELqfjZEzVGiFrv614xEsj8V5UHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hW6YLfT6Lkr9qseAJTZvcp36SuwSK7ZGv6CRJ97kYzE7BWEoeH294wN7kDB2CekE6SQcrsG16L8WFm8RzXoJsqv",
  "key1": "3rYLyFzjbQCtzMM7962Q3qiqNGvKSLeratUf6ug1jjaAFYftxqhPgkznhjL9d9etbp5AL4R1y28tQMrggeUBmx9e",
  "key2": "4oZyoPfJZvaLFz6KxVmeeQ9cw3BcZrqA9CSKhLh2xR4qy2PnAjbLE8jHcjTWn7X2smCbt4Pijpb6TdUbjgkJP3at",
  "key3": "4PrZdH1R15vGYtHcgLDPXS4SdWduUXj2kwYyBHAyf4LwZDpVkV5M5tiSutYkxUJAQGtdUY52SREvZKonyHExrkxR",
  "key4": "3qiQxFZxwuDQms64hjag1jE3FM8Gy7GkqRVMuHsQ5eMC3sVV5cTKuujV6k1ZvKbnRKNsQoC5Wjt6wpYmZY9r7hEg",
  "key5": "3xgvwzRz1tiZpwr4tHFqmpgKmbiyoKntfuvJTecyPvutsQN4pfBgX4SubS6wPoSyGt3L5VE7TxPjovYky3Bycdpj",
  "key6": "4XCqxeJugyZXLd7j7ZwiqiHwzW7x1XwSas8hPi5A19u5t9BJzztUUq8L5YkWVAq9PNHisQM4HZv1698Tcz4H8GQ6",
  "key7": "2gAus4hXVPADt983ygG5k1YJTwFKvz1Ysn6f1XQdLDUwDm12oH8km51uDHqrAzjRafagQAtxUKuwLwmTfgw2uqcK",
  "key8": "3ViAFnXtx9EvrgzPtaiAcdWEtezX6qmFyAHXHzXRGBdERroxse6n4L5e1HdjfxDdhz6Nufcb9jG2cX11KNkX2sqQ",
  "key9": "3ymAScRL6BLx7p2nnAExjchmZGKMpywqFXeAFCfReJQofNVhb7MNg6Ska1ame3CmnH4RbWyuZ88zMzK41nGJTcgt",
  "key10": "JAay52CSsK468r3tRWfda9y6GD14Smkh4zwpC1RnGo3eK1MWg6r4kTMdFcwqtAKM3FTDnjRRovQtQn4PQxyieKP",
  "key11": "5UAMihZabT1rW2y6v7EQubAyXCvFFr6UwoereHoVs6DJPUk3GXmymekSf8WkVoC7vJrGzwCK6Y6AJo7iYQcZrVuJ",
  "key12": "4Tjghby2nHCdL8w4L8AgJWiVdXABiQWpDugHVTSWLkSn1qCCq5LpRgGtjVYrdtbEJo1qsYCPakvYLzwY9wNM4agu",
  "key13": "3g7X1qZPv9Sj6QQ5hWTAD2DV7vrtX3NjcJvNetyexkTMUJBJejTfdJ84iQc7Mzv8uTMubL1Rvu3Cb4XkB8qPA66n",
  "key14": "BxB5rezR3gLUwxwSeTNR3zwteWS8WL42yUWhAcdWr75deFXrAF8xqWpMJFoQUjpmWhfG1ATBsViQmhWmMkVUoqZ",
  "key15": "2iMQoXG6Ts1JvbxfvHDEpRanNPdM4gm74ipyL1kZZsLtmwAfqrerfN46TJ68XYUxSyjC6qBffRupZ8kvtLP9bzCL",
  "key16": "2Coj38hheYFxeosr7Yv5Nf3eBiV5Nb8BqykCxWJoY5RwqY5b12Uktz9GXgYinwAue6Lw9rub9jvPsGrdVKUk69EV",
  "key17": "32BRZmxtVsRbWmgTe2zL8mbyh7tUEG3rwc7Si95RtQs8JEWWdXMoHVCRqTnG4ysFg9NuxWQhDrqmvz2J8A52CMkY",
  "key18": "4AbFBCPBG36fRib5is6BeYp6Pgvxu4rAtrCczXh9rWJT5Zc5btx8kNgf9Dy72txSYPTnNf9qgfeJRKV7sxzmiMbe",
  "key19": "3FSQLrUNBmuievrZyZNSRYMqn4SsoAi14xYJZui92NGsqTiojraPaz7AfMeEyEJiW3eh9ud1h6CYwtrUzr9SshE8",
  "key20": "5HnbsPQGUqrm9krVe4oFSXPE6WJAduqoZCxWnCrxd6WVftEA6y7hgZ4DKY7WxhR5X2pbtR24NSfQjZqwqDrhwpkw",
  "key21": "3KLTVepKgKd7jXyLcF6NB2e2XSabzVyw6v7gnddyYhaFGz3Pf9e8EppaQoE8hAjy5VtjGySSUsWLzhDMB3jAMGpg",
  "key22": "2SNkMrzKWwMrs6Zj9dx9jwge4wpPTa2R3Vd9D7LdjRYVNCgDCdt7LzB9BHyEv1XLTHqFWDX99iKa9ZedR2NVYe47",
  "key23": "5uo8oFgxaxAfEDN75nxV84hnf33nosptBkUk45ou1Sxo58LMtkrFxCNFkV6CrhxViAwSgyk2BRBQcuWTJ2gxzN74",
  "key24": "9wsrgPVF8ZqjkYk9umA2Ham1VbBPFoA6X3jCr3idv1BrxaGVRhHhGDvm22dtDY8oJYrhat3nW5o5q8E5u3Ubcp9",
  "key25": "3V8BUpiCSCoPTKxxwoCBgMukXBLbDdGNN3XRbazUJJ3dwqWSJ3a9UhhYfBG6N7bg9MXYEwRVmudNjuuW98EtYCjR",
  "key26": "2qBJKnPbhZCweJx2TP5FFj7HmHsNi5sF14Aa8UBnd1nN7Rhrs9WnhuYp9bxQoSDb9RsC1nnWZCsiyyEGzjdCJoHT",
  "key27": "XRddqVaGuv7WvQN3NxAup2bCLAWkBvM448dJjvues6z7V94qBZwqT2ZsQphLK77uz4wUvoRssm7KNLwEPLhYQYZ",
  "key28": "2HF9kemThfUr9kMvQYYxmxFHQ6W95aQDavgfsqGVD1H9rVht4H2fTNKowXjE8BNGCfNu3B6XCA87NVANArriC81x",
  "key29": "38saiV8bwCtoriknnpT7ceA4tNMWw1k5Kp6uFGQM52vemwVeX2TTWWYAmF4LSBng2XnzpwtWEu6pDEBrFkQDHUuL",
  "key30": "4JhfPKLybwEkMQxfbwXeKk8N68FHkYheY4wursVvWGs1xiHLJ2HYRqdMrsHjc2wrKkbZ3CWrjZBkfcdvhvaWjQCF"
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
