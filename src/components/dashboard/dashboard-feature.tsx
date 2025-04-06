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
    "5c6J6XwbgSsGNr8QoZRDKudtsgEDew5coVcB5hsQ4vbA2LeuC72NFCp9hVzh7YRaU2mNkQsjKwq56S5Lme1DBhEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTgTqzkv2qi5TgxpZ59jdTFj7enPtBQUkJJi7w6iK8bAebqkac8fTERs7ViEED1TFy12cU5QratmNqU5vWoAiUi",
  "key1": "1tWdXkCottX9UBu4TgXD3XwExBPquxNaTuQVLnwwvMLDa7hvTPdwYja9eQsLfFAdpRA27oU4xmutEpoyPVAoNpR",
  "key2": "2miu1SGrZeQvuSfvzLnmXJFZL3TLafYUGkfK6j8ARu1DQ7axGzMU1W9j7V84JcXWBrwmJADJHxYLp75b1Aa2r91w",
  "key3": "2oPY6LEQgBpZQVCracPErHvtiRmGdaCyn2Cxk4YAdvtXZNWsoK9FaFb7RGsW1VFH89ekdeG6QPniLEubBhPpwAFZ",
  "key4": "2zRB3pNSFCjTBDFtmHjWFXtHHuFoYDeEaTiGsQQyYrBBxvmET3UoBVe47ZKn1HGU8YqT139E91JtXyxYpJw2gpvn",
  "key5": "5o5S4Max3r2fzfdPTv4vMncCoiiLPkW7Z6c5u9Qh7xeFJMbYBT3af42Sm3ZmY1Wgd5oRg73wJ6FFkD2Ej6gn6d74",
  "key6": "2bPpCiMrEfz5kpG8K7gfs4PCASRRHaej6Gar8LvMJFkGopNcgxgcWyYURRN2LnwuNqcSNns2EQYFCitqEkGPSsBq",
  "key7": "U1awUmyeBS5DkkCvyS1KYEzpRy6R8xg4RZFc5SUZHji66A5xJKSaHdukay93ZGtBmVhrKRnc73Nqtfs5yXWspuc",
  "key8": "3AFmhmphuPvsLrD9eGgwStpKoM16uKUVsoCnYcwNVLUnZ1rZnFtVnR1x1j8M19bWtQZU8AqTChY5uor9jk8jbq6N",
  "key9": "2J7xeozPPE5AwUahrq9eP6FvavqYjfkKrFiocKh369xyok1RzoEoxYF5bqJkntnmDr6pY25j7KR6jqkUztr2XCiV",
  "key10": "3exh699Lmnt3Wc5oGP23LM1VuojesQ6jdVamdxEp722XpjEDz3wKp2wJ2L77tkb29ncJrWdDxzGcsdQta9CHnAuH",
  "key11": "4KzDW76UvuLyJK2rrV7tqQsGX34xWkAfzAuaKeMSyMzKyy3xyXstCoDFacotkc4pKAXNHjkeGndRFcVBjCHyo5gb",
  "key12": "scT9PYFqvvmjJjR1VnLmWirRPjGPqFebCQvuG4qk4dhuY6bEX7RswwCxMm2UXM9vVnwR4QLrBMS5vkwmLeCx8mD",
  "key13": "66AYjM9Jy4hP8bME8CG2Hjy67FyQEHVHp6dDongY6e5PboV5WQu12onPbprDwshoGpmkgqwCbQL2c569k9tV3QSf",
  "key14": "LBxbhYjH5hnCi7iZXkBmw3Bak2aThmk95nG8XbMVHMobJxoZR75q8yuKkT1UbGaCksyccG97k9LNUfGQdR8aSZg",
  "key15": "5AqvS2jH9wWeWiu98q1FYMVftdt7MssemBL3UDGGu5wtgReVxwA1SRVGqUAxQ2Vmz72E7GrcU5tjNkqzPPfugigx",
  "key16": "3xoabmLsjBQBPmN14swBLavHeWZDdnUb4ERaDAKpPrZGXKRTJ6iWe31XXW88eWzGrdtYFT2Bter7nk3BSnfpgJmS",
  "key17": "3NcEXvratVvcLRxSWB3LzpdBFBrmYhzGC6seNpTnj9DwBCggxytWVjmhd9sBbA4qjtGw4GEQGUvRqvkoi2z4LciD",
  "key18": "2VMqUzniMxxPZJ5rGVYkxEYLkDS5oLyiBM25vwWNsVL9s2xUubMHjxi6Ham9Pbj5549rfGQny9NdL7spJzQdwb5h",
  "key19": "31UmJEFKiiSX4AAweyaeXdNZTWMPy5nioeM6w1z84TYHBN2EEPMcLfM7sR8g8HfyhgvYjNFkdcJzEnFusQDm9aJg",
  "key20": "3iYa9QCvabvVsYyMzMaVdRQHq8Ewyd3QUbfoCXbu2vADHjHtdsmryHAxDK6JLTF6NvnYpSdWTuX5mwX5z4Q4ny9G",
  "key21": "ikWGsmvFBzQDN9f99Q5Y4uePAigToJn8RP2UA9HSy23UebZ8NoNyuaG8wrzVn4d3dBbfMM43QdGrqGefq2qXyxQ",
  "key22": "2sDHuyH8KAvaVxmCduvVWu3JjsJtFcZ5urYfjy5qgTjcU58Po34LSy41b451XVD6Q8TC31eb1amucdXZipbCQ1Lu",
  "key23": "7u2siGQZbK847d3Vt3VgeZjRvqCo6bu8SkppHtzqv64mNA21MR9hu1wJ6Qq5WsPn388V26ypv5fgvR2HS2CUAix",
  "key24": "3ZY6ver98vC7ssyouEKNU4sTUBrNzJaDq67mMadu2PmWCXGJrTvXHdpEe3cqebb8qm7LnsYmzsbiRoLsrnf3A6w1",
  "key25": "4vhBJL6VSyxkZBd3eKEW6zg4qqZodwuv3tRNLPzBDtT17AjK4WbSodWE2WCfxZLmhMjvZW65hxa2vftrnHenfu2",
  "key26": "5fR9ogbNLbL84Hrv8pUNYzMBsJp4WRAhjXc4fNYRp6HhwwWmXQtFZkitYGDVrGZ7ddpDkcMpqhiC46wgGbkEHXVZ",
  "key27": "5sxqLiHx9jN5y8NWDRa4mc94tNrqRsQT88gvD5Aw4b721y8E3ut5bM7pWADZtHgPhhf73s7WFrNztxUUpt9VVQ1P",
  "key28": "4H3CokwVeTAZAjrMAxrceAX3qftXLnwhP4gUT4zfT8VH1qA4nMuLXEZGikk6LN2nxtCu1cB82rzETxspR55gpq3U",
  "key29": "5Mk5GPvEXYnFViSJPU5nv2qo1bfAeDVPj74ZhJH5FTKjk6eNuKk8CL9q9pctPwo9oEP9u9NXouwfBmkHppBHYhNj",
  "key30": "SGSUJ8AGy58gaHxXxQT8ViabsizUC74Hosdu1TCr7N5wMacZ9kSjrcHMGZrJRvLweLaX3crRMkNX4999PnDc1Uq",
  "key31": "294KBxFgWY1T9rTyQiSAaK6AcJbVdPT1T3cbFpHyGeR5LRAgY2dQByAHerJuWvXDavhY1DoxAtfgMRuFeWQ6w48K",
  "key32": "36jtC9sLQiBv8vvqkb9z2Nb4bZyQ6LdMqhdqYv1nyNAo4tRT3XYo2d6RogVpCZocNBJ7chK7xkMYw7WjcVBeKmSv",
  "key33": "3ivjiwWAcNiuFgeadgd8zAzcHLJeJyJUoDantunnwxdnmKY8VzrKvnE2p5XcVrtc3C9G4G6FPEJyezcAQfax7FYN",
  "key34": "3u6JsYDSgrSaaxpe4sM5QnV9uoXkoBJcsjBpUPaLH6dhDSzKCgWQRQ9QBavY9agVSvfo39nJDAc8vtST8mKGwbe9",
  "key35": "3feMFpSGuf8E7679X7wUzfSedH7HTe65hZGPL61L4aSxYeyidb9arYsDMiAFgfWmGzC8cPpCiTYi7h4WNUQqmWdC"
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
