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
    "3DPyyC715RhVASNpop4tbtAzamU2L6KtNKpFTACuwKRFZVJpf3GEu8L33BjEtE7Z5sfJCwH7MrWS7HVvFYXC8sZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RE13rtTMvRNqoyKawNQFVeaHNgEocKEmsK3kKPGvFc67rEm3ec69aE9kknAHpFMqdnkVYyayoCdYXJYoXL9dQGy",
  "key1": "5TqDcw8kFua5ovEhbrAvj6yTB2JRkm5szutyxc7wFVBMrJfiBZNJWZxnxoeCSh9fBxRC2Wd5uWmBjpuT7EA59n9d",
  "key2": "37o8KYXeWJr7ibNws8KyuJ3z9Tk6KquNgVstz5VpmLTgKKFAVC9p4bpaa3CsQKSuna3FMNg5Q5tn1vYXQw99DuDZ",
  "key3": "677eEn4FBUnBKaSQCbbKPZZNjhBYMff2gdy8djGUi5uTnsnAZ7PxcU9NRwWU84VN27byxa1PciqvQeJ8qtVLHhCo",
  "key4": "3BrHo9EaxvBejVHCVzfrBtxVvN65tio59xGtqT5gi5H1BrnindkjRb7q4x3Hq4vnVKQf5LzkZaE37JwjNWt6yr4L",
  "key5": "4LTNKH6aqy78z8TfGJnUFHJ15VBnH7Gd5cUsNpwhgZPQpuPKnAXAMUa8LHHpTUZfQjQComv5k42e3B4EN1Lu5u86",
  "key6": "4XZMkWDCpg8Mf3sBdwFd56i84oY5gKBokuy2MvVWrwuA6MJ3yWAfD3jrRkAEQWJogzcHMsDArJZV75DURBtdrhm8",
  "key7": "54eZZywKevuhxufSeb37TxKidKiXoNpQYv8uMMRncMrNGqSLD1pRiesVARgbj4xdUTqihRce12WQiMYK3rxdAqG4",
  "key8": "3MawB1AejvHJXhrydfPu4PRkt1JBc7JeeQkqHtbE7GuALQDks9BpZCYHfTXPpYksfq4LQ8CcuaHuwVDZc4U8MNoo",
  "key9": "2L5MYsz5BuAktxq373zNRKx1tBtZdKTNEnq9FFsQahZz3H723cCSjWJytb8PkwSmgsBR385EAByUdKiXxX9Tq6nH",
  "key10": "jjqBqTq1LcSK3F9HpTZmQN2VCYwc2C8ux4KtYgG7pUmgGJMAQB9TEBe4AHWh93P6Vidhn285b4MhkfWHvEUAYDi",
  "key11": "5dbsshzR6QhHB9ChueZUdZiUGbegVsdG7eLFr9QZWndREaVXDL4dieS9NaCKp6RFfSXS19TpE4apQq9S7iYs3JND",
  "key12": "2FFKLPpvDhEhzjdfnpXffcMCSbEcVHyhu7bXrvcEPazYrZJNSo6R24ciKodN7Tk31EFji8CHCCG5ucwmeNzP2B57",
  "key13": "2jPMWMxmQh78XR3G4oPeCH8vUpEXfQ8DUFujoKzmykrDi77YWrXmweELY4jwZwkKoaRZcefMmR9jYJDLUkusYtdc",
  "key14": "4mKXtV2jamzBZzbuWADyjqJ3C6WjmXuLCCihYuaLAFd8ysKZrDv6LGp4c1pnv5DuaazGHzKo22iTkw8MYP7pL1uY",
  "key15": "2XoNjSCDffLpSH8ArjaasQ4NwPYfyvjdsBQpPyCtkV8fk1X1VpbsnJNBMfwRtaaUxj2J6NYuJDCFkz3ArcprDehg",
  "key16": "51MdZEus3hMw4apVnpzdPSrdFpetzVPTWiNnQueSLdU6gXpM5yZ8AVPHMfNBkNpZJoCdwFbiJzyEKgf7sRL46xN3",
  "key17": "5MEMJ3wiPHPVUBPDcx8nvrXBHgTbQCNayQJJ9utjzpjehUqiwAV6Wi5BKXUSAMfiJu4wCuTwavytc3GxaB6YMZHa",
  "key18": "4upzteKz7HhHyVAH5E9v8R7bpg4Px3p2vuRL3WHfzVeoxgP6JFnAUihQrMmAkBRHtYaPVa7yXpsEidU1KNeKFDJV",
  "key19": "2yACBw9qKbH8aJw76p5QGptQHZ97gd1CNU4pCMu8fmQ4WyejiUfGd8PdaFzHo7V6cGSFZbuR9CXqc6cPcYLzLfv7",
  "key20": "sjAdMYsEwTmfzEJ6BABpBNtjC9VLxMV2fGXXMH6Zy2yJiNaarSxFkyuH2R1HeuPiTC5ezXqLPH54XVsEPqQhRtU",
  "key21": "6PnHLek9e7DugQKmiUGgC2S53TDShdYSxT5m3kg9v3t1PN4YiwoeGxbJY8gv5qCx3gAuMnwR29iJ752mscbMYUi",
  "key22": "iQPKYWUpcnKCobjEu3V3PTGcgx5GkVM41PRzpHmZ1YnXAuNV8MN3eRM7j8BL583ZQNFMhmfhJTEkewvLy1AJXvX",
  "key23": "QTYvTb9rJ4zQpr3jeJxrhffJGsMsEt7H9dcGU3i9uLNwi2wpzsVieKEztigLDU7vzPbSFqiVTNkW3amPR8TdXzx",
  "key24": "XSywjeh1c1oGMq2YkxXVuXMrNsKhVUy5UsvuW8w7Tne11V11qJNnwzvQCXJ9rxrRK81Fr6awpShDy2KAsoTiirZ",
  "key25": "a43WXDt8FHjqGuqd9nr6VqWHj85rn4tDHTqdaLunBAYU7AkMqDZaLyVgenp1vk9hypMu6ehKbN9efh4yyj52QQo",
  "key26": "oSC1nPz7nHqAQzfM9htXMghX4HRA2tpnYM939G9a1BqAC8t1bvhiaHETnvvGJWyfy6TWgk55uTHFX3yEy4AJ6qR",
  "key27": "8tFxRDKtMHgepqbyhPZNY2X4956jvivRvSiHdH8GArnYgqwMmVNWRZb2Zms8UGXyi6yBcpZi8AaFJKjXq1RVXaj",
  "key28": "otWqaxa9ggpp7JRwQwF2U7BFW31tP9KPj79sQVkMhrAkYDXYgeZDybFTgbJ2NLswvBghEL32XJB4YSWf2W1SXPh",
  "key29": "3iWGZUxtZRepmV6kXy3mDU9RNsb9GwEWHFmp53AdrNwy5Fu3q5Jnf5YRGahpgmWvH6LeQokFki9EMm33BRjddqrV",
  "key30": "2SqCoL2zkWqrxy66Q6sZbW7PjZq6e5iohSK2tKRmwUYKyx2Frgp2fbhTQFgVh7Yd5sHMZio4JCwcCcXQ1AQZ2KBA",
  "key31": "23je7DDzQHq2U8Bcrh5foLr98mLrmnoNNe9RkeKYKbmHUEgti5trxNwtdFKwFtNSGrpBGQ24YaGi8nRT5V2pKv6k",
  "key32": "2bx1zgPCZdnDgwSrzCwVKfVFGSsVZYfKmfNxdS93T3TjBsCwDny7TbnC8QQenD6kizMtKSedVYJdnGSTpCKqP1KM",
  "key33": "6k1x3YD9AtKYBQBp1nMkeC41wt6cXecxfkWdvfcYkF6NDPGDqaC3Hx9bzMxPyznEvdj1rX4qLzNuFkgSpJGuHby",
  "key34": "3crwNTN5NY5Vn68FMtvoYkaipDncCePzbDPFUqhGh4ExiHLeiViq3BsZHvihhH1Xn97fwibUTNVGdu2beVMoxB1J",
  "key35": "WmCTdsJJp3NbqzEeLYN2ARxAPwosn5fg6v2xuYX12Y86fshnyGsofbZ8i5bZ5mNi5uNsu56FyZfKBbgXQKdEcYo",
  "key36": "2JEhwnW7h8statpBe3fAB4yJEZsihMHyYaBqZqseuaJZB9SPUTyMTMXB2Pz6ZTtK6smFj1nfkuPb7X4ieXFKAxzo",
  "key37": "K4H5wBfhKm5MCiH5g1y3ycpAEq74XV8xVvs1PnAWvRbC6fyfKhMHJTbW5U6UCbesu9V8wKVzNFep2Z9HvkHgtzN",
  "key38": "2jk7S4tbkC2Z1subMsNEt4iKDuJ9ptjwXeKmHVbeu1X5Xe5ofqMuaVN6AbLBU5fqNYSjU35SsbCzf5qQHSS9aHQ7",
  "key39": "9ADnBLCFnVvNgZzghWWw9xoTA7WDFC9gXYfdptGEHmT39FDqFSJSdjpivpWdBpU7EykhKpasPx7vPC8HYY2Twkj"
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
