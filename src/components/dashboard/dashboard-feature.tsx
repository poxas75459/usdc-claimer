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
    "1jqMM4RH6CDVVF8iaCPxQWUJ3WXA1V14grzHTQ5UHnaXFcdDHtCzXBkLNnpXxFAMSsRsBZJvZSjhVduP7SaM8NN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogYoaRssSe47geqvhYWU9FvAJJesTTejUjuhdjnxWpqxicv1tg5rNFUsW9mS2hRkBKCkSy1gT3LW4QUH2FkNJDA",
  "key1": "4f3yiXDEpvezMmuLJmDA6GPsTyAXVztKTrc4nZzraWpARK75GxkoFAsNpSKRxZ55aKYgKvYncEDbLtWQyZHKmjpN",
  "key2": "pq4VHBviaF1db44CDXkc9R3yF221xJB4YNQEyFjv29cTqCV7PvY11CMVtB7Dnrz3viRP15dxRbiE1k69Z3Where",
  "key3": "2X4Y76i8UoXGHhCdHfHVB71LbLWDhjwX7yNK7K39DpABLeoNYPMaiHtuXnrd725BHBjHuan8eegBiQyMyDtgfm29",
  "key4": "2QH8qEEZd6mUkZeeQZGZSsuURzHnTmKZypu3rMFzHcPAarucG3gYjzj219Kz9CjUBPZE7UJjctRNmoSxPMvbAXMb",
  "key5": "4wM15m9rAXKh1oRwk6wNNThBL1U8piMzq1YX8JRHUPoz8qvqmHzDo2RNbaWKEPQAWqWGbFyy3HQ7myQjvPQpLqwW",
  "key6": "Jz9WFT6RsE11AQ3Y2jimsWdCYHpf143EuTknZCfNh75tLmk9VkzJePooGXdtakB8MQwz52A4FNFN52ViP72QfjQ",
  "key7": "2s3r25QhfYtnykK4ou4RXVGVvxXfYsDNbrtEusSYc5yxaXftMaJq3pfUroTPkxSJ3AuZfCDMPaPD7v1e6xUYSH17",
  "key8": "34wkTUwGBQHaMyWdK1nBC9vFym6eRREvg1Z6dzjvXSh3qgxntjeLYZW1rGNFZJZ9Hdbhh8T31wHfyF9sNoBuwqJ5",
  "key9": "2DVBrB7GPHbctXsJN1gUbMTLRs4gFWAqadAmGa6aP4GhMrSgjsNAJsxbYdRkCbLf5iziC1BtyGuHPDRCb1x9vVri",
  "key10": "5Dwqne62wDBPk99UMSc6jyoVez8Ao768gbaUZZghTVoD1yZZiNbsqApk9sosuN65zVH3UBJV26pFsQ6MzQLS7EeS",
  "key11": "2hQiHBuJgknFsmvRpbD4SQM397MZqbZH446P8RNxN8dc2Zz73Hwy3kq541HxLLNgkBgAdgRz7LBfTFnyeHe2xGoJ",
  "key12": "3ipNjv8GMJCP2aRdm62Cy5ycnz17KFNJ9MVUpbQLmtAekGuetuUgQp32AbRsYg8jYGP1Bv3VUHAyxcVpWw6PccZu",
  "key13": "E3qVxzX3M8m6JoSrZRdTwBRdGEUttDwQZ6UshhrcEihjxiJar9z3RhGrjLxa5TyGYdJrRqBDXQ5sbSbZeT9rN14",
  "key14": "4YTk5fCdCdc8NMvitBPKQjSBftbFJuXjRaYxF6UWE5hXfkhapF1nbHAPr8FGZR9N1YqwZxRdWfjxrk3MuoS9AZBJ",
  "key15": "5aQNrdN63Je2Q9MFje8xP8Nmz4BiK33CQWGq9Rog2Jf46Xs5MqWVrbFumG8MewP232uthBZMUHMjzayBnUTqowP1",
  "key16": "4tm9ptHrKpiajYM7xg3GnpimzjuJSuV9JHSVpmaU6fr9jHyaHKso8r7sPS9zw9Zc58dPy8TPKNa9PdF3owJyWuEr",
  "key17": "4FfSSZZkvKyRkbE5pCrENUTkFhjAz5DfKJVYW6C74ya8To5Yhizeo6WndTSrdZveiJX2U3qti8nEsEfsZe1yRrnw",
  "key18": "4zwth9LwWvzCwSEMZiSNNzZYH2iBMx2yrXGkjQuu5nowgXBXCtGUMTfdMQ1QY5Kqu3Zm61K8QPSaimfEQPUza1UM",
  "key19": "25DRUCNtgX5hmC2LTyqVYf5vSipKqhVSDbT9HHsEX7nsEY6DZzqAr7tov4R4ZT3Fdds9yBLE9UPramPX6m3w6aaz",
  "key20": "28HKyNdy2jKcyx7mVJYMEzR9KGYhJQDE2v92H4RA2n2ynCtnaZuwuhQTRUNfH5hyvNagRev1XcAt7PptjvA35Cmr",
  "key21": "49CxyrQdtKCPRMCjQrAWbepRQPmWZCS8vZTGcLQhZDcqTg6PCJ45b5BUBg1kh2C9pEEFF89RDmAUX4V361MAybRh",
  "key22": "3UWSg9EeFgnb5Vb4jTS83pRfNc5YnWxSzkiuQFYLjJ4e2KtWMfbrivMN7jTPYeJC35B3E3cXVvybpwM9EAWkCJTZ",
  "key23": "5vCrwS9V2wgbPK6r85Vcpb2udQgzsW7KDaQmAXeaYJGtqD7CcsAhWEfJmEWdxHUQovTfqYtr6WsWvpFBMDL15rKU",
  "key24": "3TxTZQsmBGe9AEM796k5amgAVpyaLGYk1Um6mJXNTyXaWhHzFfQSrefkKB5dthfbTadRrpnyFuECMMYYw3wyYzVh",
  "key25": "55TSnUaYrky9mEQeQka7M5iGq34hzPf37u3BSVatwQm4tkDQhB6dXe77CTaaNQCD1zg2GEYocrGniCkZ7doTkHLk",
  "key26": "4u6fZbjQLQWMJX8idcvAfYTZUdWTncmDpQ5RmZ6W5ZWY8rKb5ZX9UvFoLGivF9qPxR5jbSprESk5sKJ8TcR6MwKf",
  "key27": "2Mr6TPCzAaC2Dj864fxWMWCXczeSjzVGWCXoc58LPosMhh16zxBm69dU6mM7akFihubt37AHkH6A4NhnhGAuc8dj",
  "key28": "3eBXYWku9gjgQ3BzoFrfHR2qo5rHKBdGMZ8S8de7Tes5V8vEiG152ZVqqkYWeNUoksGtxswXKmfKtsyaRFwXGjrp",
  "key29": "2QtKiNri6AE3JfKEbBB9EnSaRUvpCXdao3CndSVr87h1pmU7rnVVZNAVLtGbEGbY5MphVeqjrMZpPm5bKXbf5Mhq"
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
