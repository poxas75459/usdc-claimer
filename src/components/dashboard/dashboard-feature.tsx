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
    "4cGPiHC2cGmL1Ers3sd4cPtTTSU5vmbdLPtvTuL7RhFaYvQjhYu8koNDc8bA9fXgowtfnJidozgabrJfbiTLWNTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQfae4qurw3rDMxJ8iAh42JbLyE5nAGAgaeLH5deM9SBh7ctUmrm3ykRVBfT7yLxhuuoYfzzkATVF7VJdGE2QGZ",
  "key1": "3oSLkNpEtRe4ga8CS9SFGvsb6CMMoJvnXDse1Pa4BhZb6nr8ucBYuiQt7tvorrcoBqu8yijKcng4WU5PNj9wtmeK",
  "key2": "3Q4VPV9S2caejd5RfyivwVMnYx7kxMvuBzqzZFQD1Xu9g1Z7zd2BCpT5h1ArQVPrs6PyAgJ7WkuKVF6xWXhvfcUJ",
  "key3": "22XJXQBfBtWWN9RL48x87TrxzXJ6iANy8jdUDJxgJPRUxwJGv5Zwv2w6SKbSsa4v8xYRcGzJicvriufSUPgHxa1Q",
  "key4": "KBqjvtuqPpr1Vt5TVNQramSLbPjPYhN8ZHtYeuSEvqEmYBs7zDcFYxsXkwMmfxZT1J12DQfCsWshmGC9kLLXoDS",
  "key5": "5BS3MhCwpvvYEvregM8LbqpnDqLe9rWoF2hGvwBn5tcd3o4NqmunyZuCLTeaT5MLEovd6h6z685vzQXxAQkghWuQ",
  "key6": "3pffbRmThC9SxsLcF21NvmS8Ext9eqsTvLfzmW5FoHg6aJhFZPyY8ymtYfgN5u7XjCmNcMRWtCSMLQe2GR2c7pST",
  "key7": "2e9R3k6LU5r61gzwKL5ZEgra9G11GXb3Ym7KUM1HYSSs5e3DGyRAfvaWXgwSD3GFf6L1CaBWPNcTvyyHwmpndyNL",
  "key8": "2vEbML7B5vXzp8tAmphGe4qhVcT2M7Q9VkVqPnNLcuVedDCeUMGHxWbny2YbUZZ4P1RkX5kKfatHYkKqS9GXTmiP",
  "key9": "4ZYDW4WDpxC6LebMgdYH6MxTQ6NyyL4XRVDR5jboqEFya2GHVZsUeKU3NbcQ46Dde73XAqM9BE3m8Unjpqco4PLr",
  "key10": "vghxxHbS787fLTTdsAZ4G9gtpqA8DNAcqxpfEmjaxnocpKJuB2K67Kbyock5PST48LmbFqDiBWm1LwESS6HRMx4",
  "key11": "5zswp6iAKAw95sopgD38SkBTGL6irsMe9UnEszc1XkyXDMhT5RMHubhZZgSgqo6UP6ctSUWFxDfwZT5nhxtGtZVu",
  "key12": "Pj8eg5XafsLhsVz3KygQJAGFgijVLYjRew8cbEBev4hEkxqwGwVVzFfajJbAFCi2BDhSFkdTth2HB7SQzDagUpB",
  "key13": "4T2kiy4m3hv7fbzEkAXLAQdgoWyXRRjK2GffAkGta2BAvk78AZe3AZnCG67dENCG24ZFCETUxov6FaByNomZXTgM",
  "key14": "4ysGKpV9nRiR8MtBuBFCDcmzEPprbcWWXWeRgCQKzBe19SrZj8Gi63f9xLYYYCGQtu1yGLHvJeJrbq8KWhmyXGwG",
  "key15": "2kRBDV2ea2bTWGKQTLbgWiK4w9uXSSRf3UD9xwwpzVcutogY8UhxAfcw8EJmVSutTQw2RJpnQoeHUw9fP2sX63vz",
  "key16": "4h5Ly286BV7Qus9i8tVFARR3w4sm6vqzay6RqdmHeHrLTC8BtuBXysqxxFZE8otjUeW1yYDLcdnDL5H5nhsxWVWr",
  "key17": "4Eky1o4o7VEXWxpLFbbipreUa9uzPnFus1335rwJHkqnVnSSztpBaCPFCwuFGKxzrtSUSNn7rN1QD1Rv1zvJzyKa",
  "key18": "46bEa2Wpu3dfUvBdzMzdPS7ajbLtSMjRMbmqogDzSGonAFfvNHzaJivB8zKX54jYaMT5cNX6Gfd2c8b8f4K4jbHX",
  "key19": "4eAoix8J69D8WJ2T9beYQ3PSj1qUJuLVacUMUoVPHgFoaJz3c2yZGQ9BgN8xm3Ah1QGr8gPNywJXe13e2zr8n8ra",
  "key20": "3UL7My6G11Dx6mXgdCimNUA4cDARYEeABcNH6qhhtJqLdpJDVYje7JdBRTaLgys2nErERiERqorVqMA9HycqCY9p",
  "key21": "62YwqGat5SR22k9Cjt4qc6PqtCjxBEjxy7j6V4Q7W7H3nqFd25SnyWwtRR3cjFBed51zhsEnKaekkZGPgWJhMcDE",
  "key22": "4JvsHWmddQdxbYwhE5uGkVzHpmDyGXvxFJwbrePeyJynwnBitvfPiRKTMyS8YuKdb4MBG1sufSzqd4xykxdb7iYy",
  "key23": "5fZSdHXoBi2dgEwQjBx27ngUG268CPpChcj9DMYpwXWdZr1gbxtiJwsLyU2m4xewQaw53oD7JbJyLJQXS7UzqUUe",
  "key24": "2MfT4ubCbT9sdtjgPZWX9GjHUAury4imhRuXipcz1xpVFXc221gwP5stKxVBfte513QhsMoUFjD3ajSjUSorVYve",
  "key25": "5q3sBzchndWuHTxiTuK1Nx9yeQc6ob6GW2iwLcNJcLxKBoW5mGFHbJtAThX8hDCpBEE4c69RMcmS6RKCNhQBMz9c",
  "key26": "PsdGnHTmGhJp29X2rZVURbr3LoLyDvdmd4oxNuw3jxFqoFH1EMAR6No2WVWvsjBnB3g672z1gwiLPdg75bTsJcb",
  "key27": "61p6o6yYz8qNnmMijWaK7X2M3PktN5DJaPKGE5j47eFTTW9wj34QYDffvCBSKJ8YiVmGSjeJUosVm6FrqmAR17Tg",
  "key28": "zriuDuFPa8PE4KGM7keaEAazUEwDKiosCSnwpK2B6csLZEZCnsgRE642yXyouVSwBQjF1eEVWb5zGWULgPrVyiZ",
  "key29": "3vnDBkVJ31kW7TZyoHDZiy1ZqMSgCmUqUPGeVaiRuv6ChZTyQFgAojTD44vQ2A6UidzCj5vkJ33fFVgNUsHkHF2A",
  "key30": "LjVRxHe1kmazZ4AAREcwgBmpdVWZkRnZ8MXrZZGjpPrSovrsr6uvCMa1gpqjQSUVML6Yb1KK8p3qR7uXc8xqSbm",
  "key31": "2uVDEUiWE6ukkgcVSFYgmozc9Xxds498K9zBGupNq6mYPERqXC45yVURJkXqGhQoq28pRxygxkfjkuKYsAuRxjKR",
  "key32": "5ZMrXahc6uw6ARpnWGjG47MU5g3oaHqvGYLdDPrZG4hqT9TVqH2KugDvhF56u64rLi9ja8npcfcbXGKWdewga51z",
  "key33": "UVzTimVwDNGnXQw8N3aKq5Pxewc93hDysCBoaAtFjFKWYVhrEx1hx6uJtsyXr7ksJstouKrmfQdgK5zQZcN145W",
  "key34": "Jgb4go354y5MJJBNgCj6PGFDZNCyKr24iACkLPgygtRummbRzrXdSaFSAbCqXFq3oqNDwmQJKMqui63t5iVNT15",
  "key35": "ZXpyShcd37fVzSt2ZsykP4MnKpi3K6w2f8U735koWSj2EFAD5vLkV37zWaSdxMysCQht6LzYcXGaGehuV8mVas5",
  "key36": "2pnti2zEHQYPC8A4futaeV5scUxvCaoL4LvnyzsfRCPmkNrfd6AybWYnraZTSgFkB1RbKoJkCuJamdmeRFZ5D1NL",
  "key37": "2KeZC42jgsQar7Ah9TxgWqT8TKqWgzsDum4ZU5V4eBSGcZ2SGpieDRH2BUySwP6XYXYMXkLJKb2sZogLiiakq9tV",
  "key38": "4h6HkSNnV8bKD5fGEQfKBqznt3xVtcZLRjBYQmPjvvAsb8UU7Ntc8wbTqUHuroXKF9a8fK6UjuqKvMGRig1u9hHH",
  "key39": "5CgJfP8ZJeuZEt1wveSGMcHsync64MvRqJQowxmwZ5hzeqXEabibS5wZbLMvUdBPEmRbN5uCeKAfiGpbdTgESVd7",
  "key40": "3yGmcF8hbXFGabu8hyvRqGam8zfEd2xRbnEx54vv34VubYJyujMLB5tBfsZoxxZS4LyGnnPnw24shr87Ub8NchP8",
  "key41": "3aurTLiZjjbn6cMTkRD9fnAU7qdMkUSDTK772tPLqPuViBtjYeJu4FbxnYPAqTQaVDtNYVuMShQUfLZQjexeYmFw",
  "key42": "24SX9oheQrd36qovKWaLB7474W2JKxrHpGxwLr5M47vCFUNtouccmANicYEcvo5wW9GYqsgBxfwkMirUhcW6K4fB"
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
