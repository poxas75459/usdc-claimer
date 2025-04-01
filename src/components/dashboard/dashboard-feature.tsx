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
    "3e5dFsBdngcobR3RNXgRB29sm7xTArsc9uv2dN56vZRQRdrSN8qtCXe5BAkyutepeTeBJbs3vEftSca2EdREAGWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64TPzNjEbejPXNGS3K4SAALh2CDozys7XsGEFb6VgxzL3viS1Ja59KJchc37QemGVmRXVVBjoAtHgjYvq9JuucC3",
  "key1": "4jyqL4xb6bkY7SCpAukCfovQEPMBVeHguqovYgKby1f1yXRJ4mwgSh2c428hvz8nXqB72itARHQkzdYQhLQ5n4Lj",
  "key2": "3oqDMQgPoHoW6niWe4DtW9wKBHgep53i7Ew5ogHCbddfenxvwM7PoLG6gPYYMiH7iEnSHuqnSLDNzA7GZJ8Rw3w1",
  "key3": "54hFdWYno6aiapFTw1qdqx1g4nFUq7fubRc4Agg6iPvVpRhyQ8g629LQRwTaJcRGQWiDk6rnnU9aSi5u5FjZxb5L",
  "key4": "ramTxZhJXcJxSs2w1JHW5jgoGSPzyLWpZxpmBnFR4PZRRvTEo1DbGUDB1bH5aSUYHTzmhGMWbV5kRYZKLDtnTt6",
  "key5": "4DFwhNamu6puNzCPFfjbifufyyPcCdcbbZfTyepfSri7DU4jUDYGpnrSJQV3rTK6MWLbiarXUeAnky1H8GpuFDhr",
  "key6": "5WTJbhm7RWpZ3xpz18fHox1cgGmr1aGSzi6qGGun3BYZRyCUe2v1fK7X79bH4tzdbt9JXNN5vKQqRNgbN25HCzwG",
  "key7": "5DaKyRayW8DjrHob6Rn9MhPy8rJ3gWvXUyAty89cHomuaCwcyPnuCAuaba23G6aMBReBubcJu4MY48G7hRWNjjWp",
  "key8": "VqZBa7YSUuk6KTDB4pDuJkPMyQXJ8n542s5hYqwvZFbu7CLQ3r12HfC4H8pPW8pHhkXu2wVNbbYXjfghRsKTrso",
  "key9": "2Vmih5insdjnPoWa6WRYbR71d3RUc641y71K7Q3vdPn8KPQPztd4HoGUyXuaYeb89YDRU6CS5m1n8xTJFD6v3pM",
  "key10": "Pdj3kBpntYoFCS86f1ffXFFNYVjPw6NTivX4f63W7FRmJQrrwnuATESug78xUWH1NeuMaFkjg6wPSu3i7MCXEfx",
  "key11": "2RkaF8PcaUuJ4wohH6n6TWgCn1FDRK1ThW1NynNtQa1YFpUmBs739mvXKh9rTyCd4YG7mAJ9FnMGRWriZrvvFZLi",
  "key12": "462ncnjtZFtrC59c7QizpMmcxR2jbLVe4QqV4SdB1hWb7MCGaqCNvtEr9gycqCaHYVZoQZsbE1NX7QHMDfUejMAC",
  "key13": "4C5hQMw62HgfkukdGPAjXBw2k7ehuoCvndLMKGLwPnj4CPYjGGx2NP2yZokX31PcDe6oUKNGSDGW8drz9BaKu1Xb",
  "key14": "4b3y67XNbTbib6y6TaX1Aw6zmDS5ogyJzbVQzdiAwzAUDu1inpmRuCKmoR1fn3hZncbDpbFoPejRENuGNZUV2NcP",
  "key15": "49R99oLz7WTXUAt1G4YnBtBaVJxqzMBHRztJwQj86a2SZKZYS71hqGsB26C3rUJhTdpAhzpW6vuuwWDLgWNMRVNK",
  "key16": "3H7Rh8YaTqS3hm12ArDBmh4wtb8A1GnMqBBmTSt5hoquYPLAotsRdJoNSiNGaNZGEWwLu9u7AEPphRwcVxERH2tc",
  "key17": "eGM6osstVFT6BwWHP8ZRP8DcWWdL5QDzuNDBJwXKnqGiWU6XyDqkMnwKHqTfrufNTio6PPhAdB3wp1R6Qxu8UJh",
  "key18": "5NLCD3ktpC8wZmoJZGUxhke9xhJS9jySEi7FDoAk8bYX1PBFLfFPnUWEQtgLddLPkdanJT3iYXXkWfjXBvaAcmtd",
  "key19": "5e2VjHqgzXbHVBXipTGdiUP2p8of865JByrDVgo7ai3eMnQ6DRs3oH9JQ4aBvaUiFZxRyEXU5aG1jTxh4BjVXkE8",
  "key20": "4fdToJFbbsjJttxFzq2tuAPNY2yuCQouQ2EjrRiifY1hjm2gxn4twW73cTDXSo4pakxqFcJ5mc3uLZdA8poHUK5z",
  "key21": "2ReDhbbiXAu5EMkJHyZ6nHFrUdkQrTy7vVa6rbxL8J2bEAyZJh9a5fQvTtQ87eCdiX5eqWT4UARyWnVLwqH2EM9Q",
  "key22": "3XiUwPeNbpSUXjisb3JBZhabsQsATdTsrBAajDHyRKmwY2NzsfKM6jhEaDpdgqw3Fj2zzWcXSGdakBRSVuAEmjrw",
  "key23": "JVQpv5n2mkkFThW5Mdn9WKd8AJKdiLvURi76YwgYEhQYeeDXaT88jJUoKebnoc5XEnoo9dcT7oKewsvdfLNPChu",
  "key24": "4o6xvurferjYH2y6PsEwVqScU8X3MbySAQyeNvtEBzuFk97GGg5Mj4pZGeW6n1tnbencqnpkGwTgwY65i6wgpfcS",
  "key25": "5HoDyLieeLi7bPmXBPBMHXGYCzgHMHmm67ZGhJUMPnFddBJStEVFvbXz1S48ur7WHtbNPBCzxybtjuSW7NBeN8uz",
  "key26": "5noUvDcfUXkTBz9vuJVqHbvadtAkeL7EEWBvvxo8Ts1UzB8rSVXjCPSNiLirFD6yjqEGVQg5NkDXQ8YJbaNHnoXV",
  "key27": "66LyKQy7kntFwXyRZobLBUV4cA9VfzvEGXvDTmdcKiT4vTQnPe9Et5obRkXwZC69eRHMTGDovhQekuNFzwKnzs55",
  "key28": "jNkLhruj3e4aohkt5rrfThqii7me1CTCyFfiJULku2uM9wiWvrSS3kTDZJHVLyZ937EoUrfBVQAisiBN7nsAZX4",
  "key29": "5mzWpWLFXumdk5QkYBd9iiNWG2LphX8LkPf3enVUMA6ix4DixbmMjUajoH2Nq2Sf2Vf7gCYqXrsCXbyAE8bDwHbo",
  "key30": "62KLHkLhcQaxmEXaVefqGw2C6trBnwU3z323RcFuSBJxdHfvRHyJErph2vFBRP3drXu3Dg68UG4d4eeyQGmv5WGi",
  "key31": "2MRsDuQT9NLSw4Wd5npD9JBmzjnPnhhYfSyUgGffTprzxQ3vX9taFG1W8jdfiZqDx5AKGEkbCmEeu9dKJPWZMRAc",
  "key32": "4ho4vP2tDt9x52rGd7UCMWFdMWy3FWBHsnV8Hxw2uriwMoYfhWbrT7T77UZx2J4npwWAcpFQ8TtPgntG8ns8aAPx",
  "key33": "5VZpT4ZJYfiTeGwupUaC6tqWRwHDziCXD7PwpWXwZCkn3FsfY6trUNM7ahwzt9hb6QSETcm2U3VD2QJidn7LC2iU",
  "key34": "2tpE4x4t6Nao5a8oMW8FWENxbp4eMDt4LH3G6VL2ULktm9HYi2xhEsLNfFRzBrxj1d8bP4tf3S3XLVY7PNy99X87"
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
