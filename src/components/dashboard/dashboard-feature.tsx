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
    "hBS6b9NLR2iPfXZ3o9yF1Gh7antj7GtZPmsmKg7dqP5eJf2N9KhskAaWSzbxQgeGezg1YWi9w1yx9qPKtJDjAjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUuyxbzxdLwdeK3TNWdA9VBgtKHKQV7mgZfqH14c2gM9RsGC6rw5b6RdYp4XvWvFFWCJ4Gi1puLPp2fjRX1B5A8",
  "key1": "5i57GJ3yoPXQH6GLsyKU11jLBtM99pRzqLZvJu5JBi9pLaDK4ZgbPu6YbWdJvRYEZDtd22xhSKooC6jxQbB7kWWb",
  "key2": "5wCumFgr6am82Atc7XafTWwacft5JXuvvGKMdHAyygERZGd7aAB5aZBZVXEwe4wxn9HmTjy4o1ES3Ne3Av6C2fR8",
  "key3": "ihHwuUsBEXiM5t85vdvHBGrkwucKKgrXzd9khDPyz6Ak9ACEs6hMGY5K2VzKGwJY2sjLeAvrXxZrhaa5kKaDJdp",
  "key4": "3g668UhnyTtZxpoB5ti21j4roMa9myhbTeSWxkZ62upyREPUVF5rozUu5M2YaFzbiNzPqinUY9bUewBwFidVH1jb",
  "key5": "42E66gxedSsXNgw6kiNPoS1dXT9pW1ASCbAJ1MSy5PZQiwa3TT1xvXnTq4qqCcf7mWC1PHTr7vF5bwqNwBQGtLGL",
  "key6": "wp66i4ShLwRV5ZWx6CbqHRqrK8X2888HtSREySkMgnEqzVJHzDgfjmbDiHqEsZ4Cp9bFEYj6zBqCz3HPZwekDNq",
  "key7": "3z4jvsyoEEJYc8vgwA9CK3rrXA6c3tZAUVVcGnZmKWUZ1MPBAwTUKhzrcmXAEUzfcGS1cVgMekcgSxVns3qQDmo7",
  "key8": "654Ev5WcymUfzXVZ37iYRKNvwV59X3Tj1jiXQmPi6BAtGzPjy6saKDH2oWAYLdcBKXQVQCsD2kmbT872Yi2qMAQL",
  "key9": "5VRCmf5QVsUn9wMEUYdTUmvkJPoMMKhYroaJJtouSiAQZjcTGTeLwgE9f3Sc5cS7gUYcNwzRdj3K3k8bjnnZJs9W",
  "key10": "HsTcSMXpu58rTBHc9GcNf7AMsksuYfAmWPSZwSFuBztG8HZ6wwfW7tB6msoT2QTWaa23pgNzHEZR3Qrn42h2KAt",
  "key11": "2APaGQszz3Ven8y8GBofmUooqJUPrWPx3R7oSaWvZNbxTEmQJFHXpQPADp6nLoPiE1S669XPwY6WwEe2dGwG7ciB",
  "key12": "2Qxt9dbqJAiuFGHXdv6ccUCuwtbGgnTJQ68abZCJ2QjSQH45mBPL1S2a8Y42sjFddS9b3S5FEjX33UpbgK1q6P4J",
  "key13": "4wSx4Mu5zb57AQKu4qgE5CpmG8pJMTGBXp6cSCqMQ5GnZuvEXuuddeHvzayW3uprpsK4bgBwkvP4xBEY6t1VK6Tm",
  "key14": "3bRpAkmtBdWGkbSt2sCZGoykimTULp89dL8m6pz5pNc48kFM38svBsi9BJU7AWfByxTBLGw2rC4apcx3zuVHsAHJ",
  "key15": "5sjyLnbuU3uiBaL1MD52W7ZuDjoMh87rvfMr3SpGFTZ5ED2XTruJJo492ef2VNo9SVFBdAVDLcd4LBFHMVemNVjf",
  "key16": "4VCjdsEUDBCntvd7X28oyHwQFRUD3bHc13qRyA3cFTNFSpTiGP7VaPjG7Lp1scXihjiWAv6kb2UmY71FdtikYKk5",
  "key17": "2gNUxXe6MK2i167x9PoaP36B1BkQxEE8eQ6ooqN78GkqCdCWR8kNAkxizDs1pviY4krZjKzvarWYVPERW5C5XKZQ",
  "key18": "4w7mJJ5ckEzzboUwCy9kYM7WZJ4aD3FZHSdx91EXsVrYZvJQKVj5KtetHyJP7x3UHWS9tDwarM8sFcRB9Kz5Qt8K",
  "key19": "4EEkwACLXp4nvjuSKLvYpXDx17x69b4UX7D87XL517AtkwZkLVsyv8eiopuhEdgdcGHvadfQWWBDFKqrA3tMCNpX",
  "key20": "ftzEsT8jVJb6aPVZj7spgR17jo8SkNSgdsohyY9LCgYxJqjozFJtHN7vDjTvbpao6DD9bCKeGugHARCyBKwWzQ6",
  "key21": "4dooTBo8mWJkCMKrH9mBb9DuiZg6eqaRewg4pnvirffAn18ZzWpHdu5fNtdLf8CufrEr6ShGt83tuc7tHUfJdoGU",
  "key22": "3NJCYxDpXNaSV8DnVJ35wPJdsRAoC1tUBhYBPYYVH5yGsLcmx1RXg1uWjHac5UUKxrATgTnQQUa5kSiTK2VGpYro",
  "key23": "5YnWbELgKcj6Azb5V1Wz2My6mP9FT5L4nDTysBXTfE6LfWPaKXXbNLBoyFYKHnigAZ7czdW35534V8tFF7bi43tw",
  "key24": "zNewtNPShpb42rKe5wUztd99MtGAHn4BK6pbmxdpx65nevXD5cxn3ehu55ezGPEfo8cgUSVVbiJFVNp8G1heAgF",
  "key25": "GzB1Fc2Y7npZvRk9rw7p1DEPhgLv2FVyFF9AjPeuF7aJkZEWrGoeGGJfCYKtpetgGHxWtp6vt6We8zGA3g9igCs",
  "key26": "5UYe8wr7zv41ZMvyGcrUus4B3uDQ4prNTodxD4PotJS2xCByV7Z6rSjU2Vz38co3LqfwkGJHE3Z3D2VnrzRJ36u8",
  "key27": "35fJXttVRWvukCZqGxKdZyZQYYwBoW1HQpQQadRthRERgQeYEBPmR2YLyP7BEK6uL3aJSS6kuNRnHc8QbU3kYa32",
  "key28": "5kgXDQ4KiHXLKWgQupnC5Si8R4icXEPWXyyi4qU9SMNYMbSrg2GeyfmdKnmcQKYHLvN64BR7siNdDBDYJfTK1x6Q",
  "key29": "4fcNTob5RqyApQ42p1Y8eA54GjQFDLEPGSks4g9JVom7unPZt3mALCqfN2ikApM25iY26aTnsUWqUW5FNxnpZdWz",
  "key30": "54dRPSZKtHq7QykkpncCF8aGymFdoXKRBScNdrqyNQBkKSN4KrUF2UVunBL8ftvMzvbQzgv7xFWF61Gmw94fv6gn",
  "key31": "3hUoGKV2uzgaVKr6cyjhPHyzSHM838CFdriaKhY7v9fb4FbSZWGmycQqMjKqc9qCg2NKCJYMGkB57KNGhwNS62ws",
  "key32": "4HUSvv8UYkbeNJ1Gt9mVZBjHHts31GSDAFcqUVp6rhXmrhnQE3F4faBXCvXYNVSJ1t8zw1fosu2THNwSxShkpscs",
  "key33": "GC1LCzCceedrLTT2Txoj1MH6Ki9sk6SBmDteNMECJKbBip9PG5GBuANa3z5F6RHoMdyTocNgmAZ9Whx3hJGNYBi"
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
