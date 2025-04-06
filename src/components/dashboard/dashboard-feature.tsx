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
    "54XckE25oPqxTmi9CQwSoCED6eNeSQrx8yiZQfPWHXXMkWryGeZDJxNbWFSZWxk5gqAjoMMJQMQpdCeMQh7yqdxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eX5Rud4UmHp1mo9L8uTfjPdaKixAop2FbYPwrnV7oJtjQHQNHEQ5SxTQu5QbudtQaTDwv5na66esYk7MYFp7Na3",
  "key1": "4pxnFEJBzde2GQHFcRiiJU7Qdp71n2ESujAWWLXghbAoo6AJe6YAuSPK4N3ND6uxx8pUSSTYdXacy32AjRGghsYt",
  "key2": "Ggbq1xmhX68oX9po57pyFqz4sdndXvRCpNZxjK8fXbSHdrVSSzptAJ1ogbwf7UbnSE7qa2kwH1D6G3aES1Bj1aA",
  "key3": "35iFUU2DXDKBAJwAvQWmL1HHStgPMH151EGBh6fTRddBBWq8EYEQDBPyF7VS9K4BhkGEKNtm3DrtEKjUqSYMtr7v",
  "key4": "2eyhN9Rs5esJF46uoNyV3QASoQSqr8tZGWdqprK3SRRaPnB9sNJEndgD2MqW2mxNrG8XKGMB1AfX7hKyLCS7d1qN",
  "key5": "gdGwDED9RGwyUWfGyoW6bRcCMVtWa5kWBcGGjr6QhfSVk95e4biXY4ZfKYsEouv24bTGuUymWjT93zTfckdJtdW",
  "key6": "4DNiMVMqgUgo7y4ykhbyvgYBCsPRNMtSsrNoNjuP3TZ8ZLSKUqV6EfvnSL7ECq3vcS3R94EYwztaarJW6WXHDX7X",
  "key7": "3Dn2rvbx5fYLdzWkwTCsBroWMQ8Saf2CT9AHrVkvE49NeuDY78Hq5n5NvFhaqTmFDVb1qqveHR63d6CSmPRYUdqM",
  "key8": "53YsFkJpbUZHkZGFB2vfoRZEoYcgNgTCmH9zNivMyo46iisDJDRzLEWpaEbvLzPvxgsULtYy2sZ2rd9VHsFBR2Uv",
  "key9": "5SFpWmri3bT3PQc9RdWSiYpDc4hHs3aM9sPvHkwvUvWD5L2yuBA7A8fJhqdGcjcMQXTk62u4deP6GSBdnFgDe53D",
  "key10": "39nfqyS7aHkeFao4T9YeA5teWXHHnGhs3ea5D7C6kFmw8W748TVU6sYmfNHvS74w38gqSLsHNgg5Gjx8575jNpL8",
  "key11": "3JJh9DSTxGKbeYmQK3GVjkxadjb7LBCCA9HQvkzsPj8FLiqHXn9VGM9k3nJUxV6jXgypFcAgG6XqGQb2jFgDBKbs",
  "key12": "Xny24dQgiKSzD8SshZ7V7YuC7auVtrY8KXicqUbS5k7VtbBY6vdAZ9Wmo215Enm8MPB8qEAqZfAFsscYrzuqCyg",
  "key13": "53sC2ZN6o7jtw3KgisMaTeKi5WfoMBf5dRkpJ17EufFM9ed8RwWyd7KaAgwcHtx5887AhkeeCNUpBqdaaf3Y2zLw",
  "key14": "3PvxVVE37zkEujvM32U6n4DbyAtEkqVYRfx5sKMfB44rt8trL9v4QrHEWzUyoV4KgySHt1LnSqW2DkmivkWavca8",
  "key15": "ubrikj8cAHrVuGBWLeBoqbDo8En8wZsHoXvyyPkkUWp873VcSnboJbRkjNSkzFdgCE3NjCZeGBLfPWo7GmW7UYr",
  "key16": "2tF6uHbWZ7fqRqEvTxvMiz6cZdEkqn5YhH9amhVYif4TNLfutC4m3JKqy9qpdf8miu6qqysrryK3sQyn9yBjKh7A",
  "key17": "5S5dZAUha9Mmg3KX7jSNHcZszMaXM3azFYN8pxD4mfwAaur1LJq9kxC2yyLVmkLGT8oBXdVkutbcdHcsuKXXoy65",
  "key18": "3ScedHkDzVGQSj8oyTQMwLczGRmVfJTZ3MRmhm2mE1mYAHHtLcd2fmV54nJ3sqf6yZp3M4JAvC5CUDkGySEWLjzA",
  "key19": "4AQmQSwZM6vJRgHFtTgZU1P5VdZF1uHudp5qzDWZtDf57X9qsvZCBLghKmiXNr2ZPZbD5vVoxtTNEev1wtRPXb2F",
  "key20": "3oFXiabQfN2HH6nqbdcbDQCPn99x9HgAunUn2XEZwfdZeBXW2Cmwz54oJYzkULcDD3ZffEQhE33fyGtJmY7nJtUu",
  "key21": "2dPYX9cdZz6Pxo4dL8C2ym3gLDxxGiKwuMSSDWeNmL96rufxPchANA8Eaoqzg6fRDhKSM2ENQFwUjHKZVpa6vmYM",
  "key22": "5nziogHA8pEfhUWWP4vGBgcBqqFHmrJZvTu3aSJ3ruGgeTDxtY9WcHzpkzroJiWCoDpaAQBHueEtivXcR5kZ3BzX",
  "key23": "5AuAwk8PWzSJ7nKRWtXzshzzdZfVbm2Dz8AmXVyPxa6mg7robsxy8LNze89q4eD2xCK4tDkBv5C3L7JYVX5EeZva",
  "key24": "4KzPXq7GwWmYi9caUPZ5jL5AZPNcHXWsTJtLL1wQmvBUY6dDP1Jpe1YvzwQhdg95mn4bE1aqymaYWNbzsk8DvuxA",
  "key25": "5EwaaXJn2gLCYRgs9w7zpy6CpfgEwMqpTikszdNhakTWbUgbFXizMcweLqRiZ9ctkbtrXBtz5HGJNmBCPVop1Fzd",
  "key26": "2ZEFwRNzYQQNvptvhF4JomehxPw7YGDeMMrU1TD1XAPVUvHpoekL3zye52MTvW749itLL3SH2Xjh4MbPgNG3MTG",
  "key27": "3UUtF6YyBx88jNu349xMybn6Ak6fiwzanqooit1MGybg9PRWYTDHxrH2E6zB2ZWvhHY2F669ThiEsGxfPaKjbNXr",
  "key28": "Gk35QfSgeCt8TUEhtHnKvL73QziSwKvwWME347Yg82NfrEavHu6VjEe6auJpUoYgBoHXZixrfegxceCwmYCkPCM",
  "key29": "SM3vqvCAEUcaoZ25eBouNXsUfkj3Wi8hmitJUVE9cTbsh8bewHYNyWMxbd1zCicb5dGkqtExkgHcghEkhVGfAWR",
  "key30": "5oVfxVfDyaec2pMVnNosyT3yDCz9DDKePs4MLASihkVDApFhuNteHh4KF4Kp8Hy1aPF7NJuk76hskQ9eUE4cCjY7"
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
