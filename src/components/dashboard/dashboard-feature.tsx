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
    "Yj4Ekk5YcNkS1hRWVwF4jPBqcmbS6Notp1okzgMXTbgEnWDYKZPNGmp5kwgoSkYS5s2SLiwE83fcfc7f58PBvXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7a6HD4gmozZinkAv4ZrvoeyhJytrHr3C3vKLQnnzqcnk5qe5fv3JvsWq4EavjWer31WFmG4VS2hpsZ1E7x4wU2",
  "key1": "2HSq3ksjRUvpUHd1LTSdCjuXWtCxiDBmSqTPBmPJRDAyuQqxoPwPGTw8cLnMAg5wpUt2s65fpa4paxoWChFZnCAt",
  "key2": "2QuKsac2dZfugjv38PuuFpw9NeGvB3R1Pw9L6KWCBWfCND1HoMLM7KHcF9vdd2k2D83HvuTfn6WGRaDrRJ8KBk4r",
  "key3": "2acL2jnXt36dVzVj25zWdia3XxuAHqFq89PiQR6Ysc2EjAGwrUPDyLBU5WKEwpuUpn9bnasFTYBa5BfshJjCg6nq",
  "key4": "367pkRGLr2tmFwmtpVaNwTTQiADuGNPViJi1wD2RU2EnyjmQjGYUovn1mEpGCx7qdeAKQTzcR2BZGsBED2H7PXjc",
  "key5": "2SJRcpVe1jqBm9jzxxJ7fTbmLmp4biTojHh2USUhWnGhdasrTaabbqUeFPw9wZPnWJY3gYKN5qUvreEZ5MB8aQ7v",
  "key6": "49gYEmsrU3WThsPjRz2cgXthNsPhffU2JLYNT2FExQaQDCcLWrkfw5QDVnKWzJSuqtxCB5qfMRf8qqiHB8vyhHAp",
  "key7": "2dbRhSv8jxRA5GfBRk85Rp3UKvQXbDNZB9P7XZtKJtnhJzUac2N6LFQ2JZpB2QuyQmSzGJmWRU13eehnAjDrGR3c",
  "key8": "2awxZbNEpmCfWX3N1xdrt3czhkiGyToV5CGrePr3S5gKP48iVgHFD61Lwqk8Ap1aUMCBtmKpy5TnLW9ga9qPTBER",
  "key9": "2LymJwuUKXWikgFdbiZJ6CK4GTfDFtuPGt2EdJ89uU4TnGL3AzJSAdFu6AJYzPhDumZaqvmqtS977r6oL1xLMFhJ",
  "key10": "2UXg1RBdqQQiE5CKX5xTApKA5S9ivNz74Vqrmtn3XKHJYe56KCvFKtDqL54i9ztNnk5jPRTRHZnygWs71YDdkzZH",
  "key11": "2YuFWWf6kDahBxrgDYRvTXtFnFfHrHXMVr7PNFAQ4pjuUbWTybKDfQwURFJ6K2xXwWEKDqqfLu4tg4F7CAYkZbYc",
  "key12": "3A9BT7JSKBcKut2s6E8ycvDk4TxhCpH4gJ1x8Nt7hJ1uPsPmej6FfMmTQoAVUqBja8ysCGwSsGK2UB1v9c1hcfHF",
  "key13": "eV8xU8KKrJ7R4oMVLpRNy2wFkAWzF5XfAfAoTo9aGCkxL7Myvji2XyEXcwu36jSiN3x1L1M8FDr6P3xRbK4VA4t",
  "key14": "3iZKx3AbqQHG1bQnW81R7i1hWmhfU28makLY8XZa9DxnLYWNnYEyviY5zJMfG5G1fY7hWKVyqc1HVda74ae24nqv",
  "key15": "4BVFRy3ko48StgL9SMaEKjs91k1kAtvxGDkGbcvMtLZEi3gFVngPzmkYUoja3ER41AUz18HLoKvYD8oHzR4MdhXx",
  "key16": "2Z52to88PgoL2uXZnxZn8DYDCcQJBHfwd6aS8SvJb7nfhYRSEcStWMQ1Xm269qJ2rwoqZvHTqieUv6pn84QwW5uo",
  "key17": "3De6eqj1PvQUsmHuPVgjgGoXime8VnXiEyvzAuwxn5WgZnNQXjuDxsFo3j8Ufxe5dYc8cAuL94XMZTBFqK3SXG7a",
  "key18": "3Ut9tKWbEkQeY2hzFZ3kvCUjNr25YkkZB2eMtzC4uV9hHZHbwbnoRXEJFJdT7SVsxBmjEuU68ifH38jGUdCERBkm",
  "key19": "3XmEVVJDsMFGp3gPF29Hx6n8CsagBEMJQns9tLf4RrKYwAqhLTAdS8TtvbTfKi7kMxCYUPZ6BWYDNhifCvnVV8yo",
  "key20": "2LWPPCj6bxhXKtfqKpyUPFp8xdkRu1ENfAzRJz86VMnW9zyMe89M932Z4vpGsk5WdzuYX4ASDzNLoaTprUyQnWNm",
  "key21": "2N24udCyMC7KTfFkmhdhRMvw5EzUKiE791VVq3MngAqGZwtLQQxQsQpeQnLhDHWsLDNvZ3X47MDtrLMjYK9h5dnf",
  "key22": "th5GK6F4J6WEMKD4gFTZjDtoAyGd2bCPFS3hQoy9KayJhTbpPXBrrn5RZ3FtTfKvkBZAeypDK3YxisiMzYPiSH2",
  "key23": "5KEEXhKDsiJ9zo9d7xz4Rfu1SQQwE9XKupDozJDBvos7drgbvXogWDrpAWit3HiyQDxZ7V1dgvHHHEqbS2wsKhPG",
  "key24": "4NjAh253qVeKfa55Qt9vz7SmCCNrW2gSm1Wm2hKtc3xRSMiXQBVmh9mPt9m8FhGJkfgi6NyAKibia7jzDtP3WrNy",
  "key25": "2cfi4A7EmfJ5qvn7eC5ky8Ucs6gyP3dtTRpoDvr8AAPnxN13N9BuQG1srRAxbN2K9fnSYmsSUCEhMWgcY1gL9hsX",
  "key26": "4eSB7y6N4UeRx4CnmLvjtj1E3c2tPbtdiJUHMVzekfZqfKLunrJM3ENAg8NAWCAGtbWR9uGbRaiAbyodUNeDVfn",
  "key27": "4PVNbc8ZGk6ZBkHK2SsYzYN6tc6H8Gb2wZQHUXGhYNy5S9c2DrdW8RYfozAUDkqLc98AxFsMgF7peKv93ciFa9Me",
  "key28": "5HS5yCXxTdCPkmiigYCHdJumxSU2di2C9TjpN3H6GMHWzfHAgQnubzWQLgNNsZafp2Sbc2M614fKajX81CSzBcHU",
  "key29": "5uUWde8vzCyDNoviXddJRJhy7KBbigLEMZ6YKwKEAMRV27AjTdFSUT2ciTQqoo248ApJxspJfxJEB9PgfS3m54Eg",
  "key30": "2heSUkYE8G7JpkZmWyGsaLkVEQ6znRcJCm6R6AqTCqFEaf5TqmTNcYJkgFoBfygz52vvZF76kgPASuHrjXrmo7hx",
  "key31": "656v79zodkgNnXSinsm2CqcjW81hyAsUsRAfvihCakG4HnPLtER3mtfk9vX8LvADegtz7QSTWeVGQZ8T5LnmbudS",
  "key32": "4CYtGErYZwd44wV59SNbhcGXHRt2TPVAJ85sPWCBdHNxEWujyMLFV9YRhacoRuULB5LSExhf8AbBFFbv4JZcrr1z"
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
