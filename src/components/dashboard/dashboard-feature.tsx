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
    "2XsKBtLfqHXy5Z4ojUazpsVW5cktVNS2eaenCyTmSkVcnXPHKK4VBWP7bFMSxbdcLMixaJr3Koz5uW5gvX2Z5ZbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfuQ7YQgGR2zqTZ3xJ2oLGfJND6HjGSEuxQLXwufxJXU7kX4vdJJyjen7bCRtUbqfenFMUBWqtDrPswRMJW7uKJ",
  "key1": "4BwfXaNBABzSmAU58FntHSsppo4DD5Xviovrsb5P2T3eBx7DrAf5yHYL3pgi5qvDzYF7bjyGc1GLWE5nVKzHNqNz",
  "key2": "43pjoty7KTyLwaiYpVyYkTHe5UxuGy54PSMuSR1BgZVPzGP2c14bSX18Nh1NJfTv8M45oiqJ4cYkp2WMkbXkANYh",
  "key3": "3DnoTxC9YCY5A4HyCxxgaWbric7XdSvp92yXxeYvTeKbH9vsunr8t7awmPBxhGwLvCC6GpCvhwRN6RdiNct1qoJW",
  "key4": "4DhZK1GTSoGe1StaV7KtCXWaYh6sPfh1fN8dZYJgAS6uhJ8QHMLFoD69n6CDd8GUKUBk6LYJKfiQtEL5r3tMWxn9",
  "key5": "pmJeXyaj8H3MgCTsW7273NTTt7N5QqbD7V2MMVgVHhFdoqGFmmdzf7TNPRhsWynpVaRvC2ULfKBpdS4PUrZpAWA",
  "key6": "4WiqZRux722KfbTvGXYovyZoGsiQ3qDDWEtWanbzAUsbn1ZumZbT2oN1MYG9LsW2rwSCBfRRSCLk6CydXQXCZuLe",
  "key7": "5eksdKhWYgu99z8pRZsXmTPSjoy1yD9MhTKAg85gkHnWV3yQ1KnYqDBEnar5xDfPAhyiJiCGJ13CvtcpNZsgafW1",
  "key8": "25SsZo5MNkRKnZbPj26psM1kL2F63gyhiPxCuUmtjtTkNKx6yURPxj59RqNTGj5D4P1jxg5h82hbNUgKozivGfBY",
  "key9": "4k1o5YgkRUvgCZfe1imUvSWQ8ikC3Zs1Ye9f6K2g1GA2Ui7D2jESZaGzx4LC9yCF11FQN1BX8uXXjo86FQQzja4",
  "key10": "46eSM6gBhq9JdD2kYespFj8cWa1t7K7nZUhiRCNXAbUaxvjsHUfwY4S7PQHCict8CaZ85xvBgXe4t8D3hvf3HPTs",
  "key11": "8tz9VTcXrKdLYVyBaQR1QAxwWtstQ1vkH1jUxzUpBu1KyKBjMPLktAZdYxVS2mNbNwP3mYtkjBiJjKuhXSabdBa",
  "key12": "2XvvmGvwcCxLbggM8C2Hp6wtBV9WRWzHCfyZDqbZFEYQ7AbcKVAsdxXVsvpvg13s2m6Vt5Q9e5WcdinjKRBUSVLD",
  "key13": "5QLNLNwaRVNgkQo2Pmuan8skEQBZ6MDyiJWGx3NRBy4kzxnmujNV57AGgZxxVounRsao1zh9xFBHwrTC6g7K6cQr",
  "key14": "3q17MKN5wUhV3wov9ddqj2aMgjDgB9JHiKLhpd4jjsaoAQaT7J4rzYmJcXLHs35we5K52ddxyHnfkr4bZzxSLiQi",
  "key15": "53pm9sPGxyDmmCc67U5nTetnyuuMsy8XjqGVZgMkKc5E9wLJYWvVgiye8XByKMU2yVqSpBYaGLscvNtoVKeSTMmQ",
  "key16": "4hBUBboA8WS1S3CK9cQLRSnV4BPyEyvHQe9a3taeKuQ4PR8qXNmNFSzf2DL6RL1saPR59N2boEaqkzurWAGVRszP",
  "key17": "4csK7exapLKC8U1WtNrCrGRheaZpfgoMnGK3bP2Cec4jSnBFJbQ1enoscvCNVaCH5LFseZy9MFS8cLVWWW4oC37T",
  "key18": "4Ps6PnBCJfY1ZhEUUhFW8DQAYxn8ocndHDruqbbriP2mJrnZhCALyp9521rpfTuRZ7Chxsma6jmFFwU8ypazVnQb",
  "key19": "5DMt7MkLDGsoN5CoQmt4Hqjgv83NNcwzA5u9t7dnH169BdvQud8ydy3zut29nt8zLmX5vU8ShcbBRVgsxiN7rFLV",
  "key20": "5EfPSHPJB92aYSEN2X2rTCGu51SS7DwKKiFzeGSjUic8TMQRQEcg7DGWPsA3fQSQcHnvybZhrToz1L3n3JvCKrCU",
  "key21": "3onDaTATGaYR2b5HjycoBA8C9FrL9ZcH3zqdZtJFxv7SFkowPYFSm28z44o7XCPNt9spt7j6R8tiGUsesgr5a7Wu",
  "key22": "53dweuwc9v6RfvzZqNqvcHwwciPqiDLdH9hokgiTFdSQe8gGfzvwpUM8hvJKoTX7VfHfd4Wv57jsaCiiV6fLLd82",
  "key23": "52DuUb3Gd2JHXKcdZmQn55jKjo1CrXids1VmYSU8hwZKLyAMpS9Zf4K51DYpHniyzDSueQMy6eVhtcZgmqMtu8dW",
  "key24": "xmNsAmJS1sZAdUfJUuwbXxtzcHM3kKSiM53SzA3jKQJ8jdapro7hq5Aam5CLmTRET63WPWgFyD3GJATdfBArGWg",
  "key25": "gAkXDEH4Wji4mFGwZguzG3W1MSc6JWVLCjkqXJZKLF1Q9SezNeK92FT2kENoQNgL2jtoaUZ1W92pm9AD35jvBMU",
  "key26": "3HA8XFWBFicc85cjFv6WuS28kuLan72TTN7sWtgwx3TQPNuHLx3Xt92DiQK3y8QY84rTE6eJpEvyCyHppsAeSUPG",
  "key27": "2y6ReJyzMjJDAdLuTNQ3B5qMqjLqLFvixnLci4ppVZp3hQ8Jphmu7KAXEdo5WkDhVQHWLPhHohUHHMbmtXeCWmdQ",
  "key28": "SEvQ8ZGgTZAznHqNHZsHGGDkjxvb1X1Xbb6xdWPU7r4U4CbdLmpCwE7HhfXoUZ6op8SPpsyRaFPoE7cSWeemSwg",
  "key29": "3mWLJjon6ptMbuXErp3tfXn5To433UsH9yjzBcWWP2xgJxXWyA6pVFZobGCbjjsHhB5LDh6iBgZpq4mUwM8bXC7M",
  "key30": "4Kg1e6eBZ8rPzrbo7DCPaUbC3zDGgA7xDqrH2HfDQAMz8NVwuts3gfDk8gz1iRA7PxEwGt6GKEgumV8UfoSjq5N",
  "key31": "C93eF5aLBbT3UK77KdbJPGfaPw53Xcp8vgfptoMXZHf3tqRN34qiRJR114xGPLhFy8hbnHiSZCPz2dEkH4fYynP",
  "key32": "2M9oewURBBqDgdyBnbbWtyvsVrcce1pWuCqoAzzB4BkG31tPAXt9wwGH8LgLYDZ5E7EfBbm1H8Tzu3gHHKyEoavY",
  "key33": "3EtauVfrHRGvnhu9RqUphURd9wgL4TWM1edGHFCM2PxwXn6jbMgma4uTTWR5APH1evyWTw4uQAZb7Y4wMe6ifXAb",
  "key34": "4CDTxHYgRdiikW4RUeHdsNebcvMbgoiddtkqp5pgjAyQp3sUZm5bzxb747GEPD1MmR84eRvnJyjTtH6DtiS7bdyd",
  "key35": "3n7gWK1A6sfx7wezAP1mDCk7DDjghHv5wppKdnFPUKZfs9DC2Bafwi4sNqFYKzMPdL4EfVk1Fz8Tj1LyMiVWRAMw",
  "key36": "666oj2oCMnEYhTbYphT3usUiNeG5AsDHAz2v5CAR3rPfffkAkCyzBtXUcJwEFrxKTz5gGtLKgyCan6uzJ3DRb1DK",
  "key37": "58rH6FqYKFwi1jh9T5v12L5dqbygWVjvtjsRJDmSLjGzqHG1YkuFsUn3W31boWqEPbdUqVrbKfh2HFZiTumrNvg3",
  "key38": "hjAvShEov81FuuD9v3i3jeT8gi9PwjFJgcxDLC6PpTMdpoaLZ4oWW3yFgriLQByNJysnQ4JEwMaZJvrikytBGq6",
  "key39": "3rYoMsb47kD5Ger6V6SeULym9Ea19fmZKNjVPz968JCajXXVrf3onWSEo8Sc52AYf18kpSvrTPcEpP74SWJP18A2"
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
