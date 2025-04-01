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
    "2ieW9QqvNEH6WP6dEeigbhBQAHo6bvfDoodzsJc4AayijstXG7W571RKQjrQ2NJa3zvfp4EGnqoWyYFPDjUVnnwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AStN36ZcnGUN7pEHBrCDn1EqwXQjKjvv97gznKEh4om7nW27xVqpNArkBcGkBdapjdJmHdQC6h5FMkYTFZgDXxW",
  "key1": "toAqL9zUJHs9uqXknaPcasw8ihhpmYa6kAUj9Qat4UucUVTaRyTB2uR9pMWJiR8TeM1CqKr4oNA7e58XAsjRcvR",
  "key2": "3jyYLBn1T7SH48WPcUeWU9XUZo9fj1XZ6DLE7G9XrGYLQfKTRv8UScMDmuJdbVubeDwpJKzanmP3wL8CP9cTe8km",
  "key3": "4kh6A5TXhQcMpgsfp5UJQA2psc2a6ReqkGKYKBuRGq88WywFjMu4iVnpGHJE4ndUTfDjsbMZ9EybpB4LjrmYdkMS",
  "key4": "4PWjseoDFCDCWXPYcFt3pcRvicdSDkoQcLsi1ojJPEPaKaJVke8n6GCM6qVaazRBSze11ihh6ycr3FfQxRR2X6rs",
  "key5": "8QGhe96rRNHcxsYDDjfXPwZ4KfPQDGcsqS7q1g6LUCrNth5UaeyBZdjAaMHH6aBtvcGq2vqBFys4DpR5fTdKbG7",
  "key6": "3vMhGQFVAh6RymfzTN2wSSG9wtkwsr67tTa8N164U7c8rXYELLf6RLNHhHq5NZjx2mZJX8hDYUP7b4d63AhZkdJY",
  "key7": "4CZ9wwhWH1z1pZ44jYPy4yuvQq1STRmHE5aQsawrHaFSshuS7Khc5uwj6XJknxsvZzv2FPwWNWxzYXPZn9yXjF3r",
  "key8": "JqK2eLuoz9Sot3eajWaPZ3Dfy22NXwfDEbw6qULhYXv4ruriB6n9osLGzBmP91BbwPi4U55h4VFDGbsXmx3fiSJ",
  "key9": "VMhqLk8H1TBy5gvz4xEyhxyUq1UdJCugqCnpqWtJP8s28Re74kjuddWj7bTSbfseGD4LNK12h6BfW8GWMHxsRny",
  "key10": "4nmtrXQTWYTELByx5SUjmtJTR5Mjg3iWv5Xm64QykmmEdKdGHnuxchiytmRwH3uf4N42Ha6D5ygEkz8NkktF7bdY",
  "key11": "3RDHJfNeWXP6SQrgqsV1ePVoRy3FZtRw1yMgqBKsiBUzDykh6GCszWs6NUjQYckSVA11b5Etb7C4hx9mk2TBLHVm",
  "key12": "5ZqLVQz8sr7vb1eS4gCWoDJmUhoPATanj5pxTSv4w3Ef9hQCAk3VtG5jtB3h6PK5X7tgoRx8pUg3AF8XzreTSKWV",
  "key13": "3g849h3wD9yak1BURKReDFSJSrmw3uEAtZdMMniua6RPdr79KxUL7hKUegyDyyYdQk79CKLwHd9EtqvJD7tcnpab",
  "key14": "zR5cNbgCTUEL3XrpuHvMNfWroz7WNazAUom9eVaGdnWSZ4AEN73DKnhg7eU9jLprmFJE8aA7sg2d7T4S19q1d3s",
  "key15": "5SoZGWzkgKV1SeaCjgCmrj5H1pVR3qSkHj8RtpvCKSzdmLFxvqsUiTPtBMfThTYqT8gkcRMPRKJYmScKhqmoj8Cr",
  "key16": "4k27oCkFpY1Uv47Evvbo67TQJsThwMNiTaThjaAdsfs1bWMLEvyJUfRFeKo1SMgvmQs2rmJptxoNnnUbW8vH4u75",
  "key17": "2juzitz8Qe4aCJy1u4P6ay7bEnEpWHqThTYyUGkJpDSDcJWC3FnU75B9BZdF2SVxZ5FNVZMsWqyxzLmYR5KEisV6",
  "key18": "jFouZErCWk8kCmTVK4r3henb6uKm2dv5Q5TpsLSdNMvtCAyKTG11E44Lroe2sVyYcc97EB7qy3aWkwYAmGbkjEt",
  "key19": "4w3Y38JvncjMdjVkAaYTgk9Qrxn9hYdFEJaezhwuBz6jMLTRKPKsSBrJdnjKHnZRoVNrWFie3d7g1js3aEUShALv",
  "key20": "53QZWrhkyuZSA565HmwyFSrFu9B4gR26hW7oHrV6SLuPxatkzeTkxsk3umpgLcoFa3DH9HvzJzQZK7TnhzZvzQLX",
  "key21": "3YJaruTPhmRAVpG5PYeQqckWBXUVxwU7BXUge7vKhW39Ayy6NGNqRZXzaXZmob4oYBnVz6jdXpwv4pKDHmxcYodK",
  "key22": "5RDkvfxgWyujpesKzRdpDZTBHZcHHwR46vC4HC6EHpzTcJw4cmnwDgrvkgmhWaiqae3HasVg2eVnKVebe8YDS8fZ",
  "key23": "5T4BaR2NkQYphBBNcwn7xmCmWSP2Uq7H8NfkwrLprmCsKNL3XUjQi7GrdFqXxNq1mvXEer34KQhFDLwdmqJCHbnS",
  "key24": "2UR7MFsJ6DsGgnt3xeCsRuWpBemZwBuXVvHsFmyJzmFKs7HCMMwhazUMTxCaKXvXWt54rqQRKbXoBc2pMbJiCcPm",
  "key25": "1DomcdjEthtdHn9n19NCbDsMwg55U7foBaDygECWsbgqq8e2enmSRspbHb6uvLHxR1R4nm8Z9coktns96GiL2sB",
  "key26": "4Q5WVpcoU3pZ5jkFzt3hKepby4hME3ouGwXFGHBxF15JirE3n38MLgCj1nY3FeRP8ZyNxSwfyQdMp3GT5xQbCYaw",
  "key27": "5QQuM3XgyrRDHxDrPABasRfSkrkRmbmcyLEi4azDupDErBBAAZoxpC2bgJ7HbQDSzhgYHAjZ9RpAC1NLvGzDjNnk",
  "key28": "2arLgcU11zG8CTUz4Lrfngc9mJL47Te2deBvsB8M4h2w5mKNHnmPXFs22vVkNGNcTZcgUkzSYuD4yAoGkGYHX11P",
  "key29": "39Ahi7DmdTHg18RoSsrK2M76v93aBNGsYqincNXGEC2buKMyanTJnUSdmAkoJEgNDx5Q9GRrWk5YHKLBu7Y7CquW",
  "key30": "24UdvE4JSWhkMy3F2FNNm7Bc8e5CJpAhNZrGpGEz1CGMDZCV7gCuHznWk5ai9vYzFY2YigRJsYf2FSwCCizufmA9"
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
