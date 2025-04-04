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
    "5BCSst4m1Reb1cf1hW499XyuKXX4EmbrNX2mAykoSTLcajnHwuC45pWtAddSyWmZxHeXuLYDnecsPCvHtMYimhaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HuMWrJnBmnxs3HZwCTRyZadYxMRG8z83Js67xHrLEVJaR16xqD2VoiYpNCrqAzQ6xwwXVmA8GUWM3yLrP4fkQiV",
  "key1": "54U37DbqciFWwd7uS6Uf8Q1bmrpTonBnSac1qgGzHHUed6J4rP5arT4SYU54weKiwzA7gzPjR678swcUGdRXMoP7",
  "key2": "3joURmyNQQGbszZM14snGeJq2DUBcBnyUatPeCTBao5zpMFhHyDZAD7XXaRWiVQH286nt1pjDeaPKaGtq8jdp4oj",
  "key3": "2wYgFx3r4cAV7xxYwJypxZkSdeEC1j9eniDckRSW5W2L5M1BKqJYffGE9apmLNJBuZdrk5ZBZ9XbYNngeQWbktAP",
  "key4": "4pYqqS2ywgWH6fStWXnzGSUJbDztdUkQHQTaqtxhztys51hEavb4hegKEbQX1c2eKkNsS9eEAqoEyCDUM5foEmEn",
  "key5": "5sYypptodDT3UMhy4pV6FZqC1chhLk7RgJBsqkstemX9hwrxzdVWxm5sWsbVWMMf6yBi4qYuPRQtM9nx4ck3wEMT",
  "key6": "fx7CqUsYVe7xTcLDBg77BMxDZQsYXKpsyY34XBb7rtMkLrZsZBbzSyDxzA2BxKxB6wGjtxpA2Hka5Bm5U2yCFG3",
  "key7": "5mqxCx9rC9ZXSNzL5YjySP4txPGKrnKV4LNhqCxNoGYi8e6exVmspUWXFex8VoS5Xifv638CoL6vJkTAN69G7dKd",
  "key8": "4oX1dsA2yBuwdc6H1v8wTN6b7PhNtoUGuXELJyt8CGy3XhhLaFZ9RbdgKd3tz6UdagH12wGE5PXsFBduBy2X9jJW",
  "key9": "2xcxQsKuJjqhEHEE6NA3m4y4VYGTh5MtBGjgwQByCQhbxLpHsWh2WXhzYbvUwJZrKq42LYLvtia9v9zfkhGoD5gQ",
  "key10": "5Zvrj8seJs72UAv3S4VGC8sDUzgMYFQCbq7MtEwZnsMahCt4GXsmqPv9b1272oopvBTfmFgxbL9LK7MD6f2BRTty",
  "key11": "4poVFhzitVVnMbn1mvrTWEEFD6BWQ9UfKzUABi9Dsm2gvPPVfuhj5bNnQ2yH8e2WPBJn2c9oBb2Hrx5kXZk8ZzDy",
  "key12": "5jCjXMwLwzsjpKq5qAQ51wzmzMhcq18A93c6tWSSM2S6MCsqvCXpYXMho97mwndK65Z4pzKjAFgCrLRdoh3WTwZ5",
  "key13": "2j9VzdrPHsVUcsnjXDgVXtGw6zkBw23vwNMpsFAHYnB2iGPakZZNZR9gEgDEQkECSQy7fF4wPFbGenvhx6mETtwA",
  "key14": "56Eo9coHzGWiFioLLJ8eY58NsonwSLW8cyrDVEaKS1YPfH1xtbMUzeRKtEHrF7GrBq4VW1kBRTXHbydTzqAvwZBW",
  "key15": "59sGEEtwuMcyVYj74TwcfxLRonNwJ6bgSMophbHGhfBKaQf3ariLDq1ahkct1ajCmFoqSnGWrFiwc3bRabHyh6at",
  "key16": "3HGv5PpsFES53DLspimqf3HhyFoTP4ZrbXPvDvwGAdGFMThN4NnEsJyZu6hq5WzAFTiYt82KNc5S16HVuEnpwnZP",
  "key17": "czzMrMPY9zgKDFD87TKZhrg1pf7DqjDGrddpBMDuqijHqDti6xGZEk6TAU7gNQSbhozrQTq6pd2Ybsr44bBmYSY",
  "key18": "5fHJfATLeyHx8Zn2zt8DVV88vrYZi1nBHBHyQpmTD9VTwcvL44nK5vBnNf23hLC9dU94eXF81te61yU1xbFj6PSF",
  "key19": "29Y7uJ465fx3ri4CknXc9ewZTgPMAmeLARjdhE4FrcH61h3gRLR5o5kwBEsx2myiVPxp8VfjoKCjoMjLEkNTz3qV",
  "key20": "4aunrus2wEgJGFfEqhCmFjWLGd1XEVy5HJfYConYPrHYjujDh3YRZtrzkutQBkXAAB9JfZS58dMm7spYygn9xo1f",
  "key21": "5vXm4FqSYKccAW9EUpihs6ww4HADAFdayzgP7QfKBbrFLUCa8scKUjDSoVxPQcnTNWxtXjwjHiLG5G2o7LiA3izQ",
  "key22": "cSPX9zfYiG49uUpUE96zfxNstLZvjR24SPUL2XKzpmQVpH42UDtZm3fCPY8Q5Fp9e8dx9U7cF3YevtByXLn1anN",
  "key23": "5u1ejW3gS3xRgBXr6rskNEFj2c3vDxQngnEPxF3n2oktLfK9LEsxbGyXqV6r7vPxfCtDdhWPzFpMAivgjSrb8hYb",
  "key24": "55ZkyTrEtX95duJGbnY1DgF8mHpm7Q4QKjvLturSdLd6jWdMPGh2ruVTwvBhbKH1apKMu973kk5QJNHbAocFoyYv",
  "key25": "Mi1cBsaNY8UFXQRn57dFq3HhhkiXBUnmqYjUmvjpHx5yJnTj8uwGXqjZHUtZZKoGnBnNouCz3TCpHHWcwnijinb",
  "key26": "4CrbMDLefUBYSBz8XKJMa9R4bJQiCuA1mNq3J3ZSf1U6MqjBb8Gn91V4bEMmKGxJKe6Mion9CAiS12mdmXZgfr7h",
  "key27": "2X4bLHhDszTtgsFuMr5fy8deKyLR4hPFVBJAbq87M2NAopSYxE3j1FXENZmMtwEkXmayTvfQzWT5QYWVtypdrVZu",
  "key28": "2VAJP3Y7XwAMFsrGgjgzkssrBbBtB5toG2aFJMa4oE6CncwkPiTEfez6xCyL4gH9kbpk1BGxDbeBgLjDBEWs3QG6",
  "key29": "2BG5FYXNZE6YqRuawPrid5Ru2MSJSA9RW2BMg4rod9Caq1deUiNDF82BMEefhjfv44MdqsRqTKtMSziBAQiFtMqL",
  "key30": "2D2BREuuNoALGQvuSGhu9mQT4unTcxgvydJV5ZojNVeRcAeQd1KxxzX6YMcbCEsuDSnZWUsJPiwUxNFrbNNvE4qe",
  "key31": "t6rh4M1vrhUDeipJG7RasLwdErE4ztaf8EHTkDkus2BG4S6Jt3uvbXwoTae7AtZeEYZ3Vx8N2By4NFL4NDGQkff",
  "key32": "bCvNEV1L2HRjBRFbARDDAywdxBmmkKDGqoNuiHGgZkhiCkT7iK3Dj5AePFFxyZQwCMRJMZnQpMqomf7YX2JjQGL",
  "key33": "57sZYaHURpW1WVexKMCKRVndtEvkkWUa4A7XmEUWb9ST5NgttHw1SHwoePSfNaQgJUFZUuCsU439HYLJFxdy5Y3L",
  "key34": "512fvHy9VFstaNsPwbD9jtgKk43xeSL4aA4XPZsTfcM7wZUy5WoiFPxnBZmpJnBB34gU7FdEiBAGz76qAi6nAJ1c",
  "key35": "46NWWzd6pcov5n2rFSiRFkQhd9owBkETQbuS9XgvJonXMvz1g8n6ubEPxohpqvfusAXeLe4ZqSAi8fzyfxyGTLfD",
  "key36": "28KQsZVSHLGLnJ8kFomc65hEhT73KhXgU4UsZnBdYNX87Sqzp1GApmVYvDUxfhq3jFarKNRR3Y12R1TZnq2SirjK",
  "key37": "5z37beo1y7oe6ruLjVeTsGbWjLyNHB7LqnU1dfxuv9TDEQDKeqqDMqHXNuQ77Sed1n3sEAYtfZxjjwZBofCW3deS",
  "key38": "26SmNJcgPBYdwPdcNJ7xCpnrKEZ3ahwQdi8m3sJs7zJvJKBaoWEej95MminyzjU8YFj4RMvXy6TTiK35djcFZZ8G"
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
