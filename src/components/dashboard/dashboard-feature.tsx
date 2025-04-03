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
    "2C44VE8CjWaKEDfxVpxp2MMSFtYpyTcJ3dSFjX9DJBiDTxGmyWAFwvxF3Vnx9EVA2BvPn2KSRMua4jgc3Ckvxghs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMb7KcLvo2LMRgRtGeBUF2R2V6pACHNAyhPsF7MPBBCtiSwEQmfPjwi5V33TRaCg9rwTwuN1YKrvhvU6KUxtxmE",
  "key1": "56FN7A8Pfy6PznBfQXWCTojCRmemTZJLkfyGisST4RzjNAn6Me243BH22QaTXn11gEqUxTiw2KH3qxnMMUkmv7ae",
  "key2": "AanhSvtmcnb3rhb1iYA8UEXBbypE8fzEgSPReTxkAbjkkB8XLgoXCoTKPwD3WnrMShmvkbBqG6xb9H4pzB62KD8",
  "key3": "4GDwPUcc6HSa5pz4B9omdpEmxAGuevaiP5dwr2vUUJ9X9LgXxQ2SFEGA4LXcPog19DjYuXkwJf3fraHLUNHR8Ws9",
  "key4": "4BWnQ1WXEzB4Gtt1qbFeWvwgjmpDuHNfWNFVPrgsi7Zai1byB3pad4CzZ56a3avusyKxwMbpD9xVMiecoMGFQvn4",
  "key5": "3uvcxfrVRxfwu3bg1Gwfar5zdNrDRo1aNeQWLNpj5n7Lv12e1xtcV6nWRtToYZXi3HSayxhVvHCRbrdzPtSoG1K2",
  "key6": "os5yjUC5mMc5vmFVaK5uQb6uS3sHuYqRuQMJJrPT1ZZfZJJKhjYBP2vEmKHrqevYk2p8DzaZ1G84DKRU7nGozL1",
  "key7": "2KiHYzhiSmgNchTF1MZmPBgXjGjH9pBYEy5MpN1V7FDwneMt39NG2shSwWHSPE248Tsod5JgbRUcW3TXkCGRqUzy",
  "key8": "5x3XuMDVDeKBekDhCZWNcgeP1yi9Cf2unjJHPx2JWntCQfkX3FirnqZsTbzJ2UQT5wdxNExgGvSXwXrQjh63Qj6b",
  "key9": "4CZA1VKHRQUyNnnMU3Vv1aZ17M82BNHUDuywaMYMcFry1HLnJMqN6ZjvxmnXuTkZBz7k8N6CYEb3i8Ytx58xJqoy",
  "key10": "4sCgRyucXtSZPXdTCX1phG9a3ZqPzKyGscdBDCodCqN3aahzeeiUdqJzA4BvXyXs7c3HA6hwtbuXgY2kc8BSJUe",
  "key11": "2ThkXacUAgf482W6uACztsC3wrPjKZzVnokyb1vyz8pqGvnykRWVdDTu77wQPcRmqS8Kw2Ke9ftt6GFPoyMxdftr",
  "key12": "3q8p7rYG5wAB6yGeKDv12NDzrVvRKf8RZxrXdpcJtsJfzwJGvT3nd5ZbYkfSMgUjY2MtK3c6hXFxQaL5ohH2T1mA",
  "key13": "4hCea4LtJ4fJYKQJ7euWthZqDRD8smvgLs3M5qbK87LoNBUzVBn9ZpbJhRBRf5NECkzhMunbGcss75hkhkSRSKZY",
  "key14": "3RJyY9NzC5YXZ99BdShEch3wQRbqrtiC3xxMTfD7Zr3YfmNS78RV9Z2v3ez5udqoyUaeaNVEa6KrJZ7YQofo3s6W",
  "key15": "2T3jHqXqWxNAk8GZ5BNJHK3pNz4eXdUTFqa1U4mCR96WhvMyPUXoTiWPDUWCKnNzaMSTWLDN4j1TEvKQLJMLVptv",
  "key16": "2HiKjauR2rHzCtTPuxifeH7UxWuLhr86A4qZ9eUg2mnQXt3dw3aztF4kZJWuHiQYwkBYM2DKLUEMcRZZhDZcNCBa",
  "key17": "4u5Y5uL96xTwg25ZfVMy2ADw2mVSh7jP2aLBWTof6PQVhSKcViUQzwZGeMJ65fCEcNDJFgrc3qNCRvse2dYWnoBM",
  "key18": "2jXbDjjJ8kPucNCckUEUyx1PoXGHNTs5EKLZTSk15tr8BAQ5bYF3rUa6NsX46xbzvYqS8TJ4ufAPKWBTN9nbrhM3",
  "key19": "5mgZz5VoT3mdJMMzf4N4ietPnb5AucuWitWEMFQGgrZBjFWtQgJGWEPwLokSw92xGhuizFMNovR9UWbHLH3LooaB",
  "key20": "2t2E47SAKkyMjJjJNZWwAWQjFs6Y3Ny2wm7922fg8PvyyQQKozsJaSLqfNnYwah5cj7aPvNkbWRvbHQAxKL6jkzS",
  "key21": "3vGJMfAjt5nt7hN231tiviFS6bYNXqvYx9AyDhm1DAB1U8TWFtgBwme69fHCP5XUSfGLYekb9USQEmTiQ6jkabg5",
  "key22": "AuNymcM9qAQ1ZwEppBgZgxTUcAjs7zpoRPkHWEWn9gvYLF7Q9HyksauGXdWeo16wy7YQJQSktsEUo1TwyyaD4Fq",
  "key23": "4MYQSDJVewtQQGhw67FS7rKpje1zQiskjEzEuaazhXGwfDya2mQTrmzP6sGs9SQTdc1KHzHmazbsvDymnfDPQe7x",
  "key24": "5GL6Qg7yj86WToQouv9ubTRaTdFsotrEU5b9q327jZrtmwmMQUDnGS8GU4RrCG2j3RW9xstappdzhtk23yAhWBBy",
  "key25": "55o5yhmFFQAFzRKSmcZoC8aXzrC2CBaG59PrNdsBXiTLpmKLpVKEVGCGDubwbNchqkwV4cLUh55w1rXtnUNVcmfv",
  "key26": "4MPNM1p5nFtedyByeTF74WcZFz4DYnPt95YM4LdHoWCaNomKsn9z2W1k9Umt4RLmmdooTnM5LTaYT4EZjFgJf6KH",
  "key27": "2F8evUgAazQRaKJBgGzEnYc4PEUHLJdMnLvCLLPCY4HcFREpJNcumagQEX4SkMc6GvCgH3ZusKRyhfA5Yv7DTYXe",
  "key28": "FYzyoD2pibuLt9sCXSMvoypPNabC5ptMvx4QQ8eaa3SgJG3tqzaPpTEUmnxvCsMQR6S4zQjpWH1Vfbxksg1CsmA",
  "key29": "65M4B2MCeY8v6WWDR5Ye46qkJGj9uqg5UAs4ABM1mY4kKThYqzUiQcPPGdMQenGvjwcn2wxWU5JWmVW6wxdAidph",
  "key30": "2DRyBQbTdN1LXNuSFwoKLQ9qdgK7nNGYff3vWnjhfRtAnLv9VRuQwB7W1mgo1Gd4KQGt6wHLph8xgrWagaVWJDMX",
  "key31": "3WVqusPYwB1G2GEA7BAAGvanZmodEYbL7jz1mmxZAkTCuiTVVqY3kFCQh6mohyP1Xpa1LJNgbeFzuTgQg35Nzsk7",
  "key32": "673nJCQyfmQdYbKwYqBMKc7vLrUASgkDEeyM6cP69kx89P6vSVxXMCcjyAQoMHR9WCQcXnTtKkAsUz7bduLCLJXB",
  "key33": "4dfPv5Rq59BunopxSTuvU5KQir9s1GLXwyBmAySmosToBQ5PCrwdxqz2HwxTTn9sP8iNfDURWvARWGSn1aLRYVCm",
  "key34": "wvMJsBgdCcwQxuzg3V8uzTWtBAJfgi6Q1mJr9Mfw45hLNG8dtr1qkQPFr94XqiJD9A41tR15m3cPHX3exGL2i31",
  "key35": "3reBfNv4ixGuJJiKq4QNg7vw4UsuwHo8JJ5msb9f9GmwxWTAFtAsZejakpv9pJkjVUTAGRu2BXkFstFkrE2bsycN",
  "key36": "2vSGryYkkHuymKFN4k33buesRpU1gVqXjPUxMgmSXu7QQt2f2a2jACiaHgMj6QKjZxskGtNHJqyyWmEXku6NFQmY",
  "key37": "4uT2cAW67ReZvQXEQe1UPTN1Eus4VpSzVD5hkWXutkwxkCw4FZCrnCZTGqthChiN8MRepJGHVifkyLej6roEPzdT",
  "key38": "2FcVSSCjw1xrt5Y4hstZXePPtrnVZoYkGH512ZUGLWx1zG4rgXRYg2NdJXmoM2eKrs1tJQMGcgD3HEFzbXa3UVYv",
  "key39": "u3nuMqtipfVpb6ipjRB2SKrWuNRhFmcZRzq5xETE4ufPkDd5ZMXKF9pxK15WqaVTXXYZK2NYq6sginrkPZGAD9R"
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
