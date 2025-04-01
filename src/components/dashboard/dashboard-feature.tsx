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
    "4F8Z1RzUFo5jeznMMi9ukHYqcxxykwcZtWKeBRSEkG9MLUNW5k1QEPjDSC4ebdDHSARjtRyxkQx3MtFoRTzmQicv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DaVFxvxT81f8r5WbVMS8dHE8wa4rCD3h5sjh7DiRgzUDtNkjfcjtMk7Wt3u6hUU9y1wRcK8jB3dFUjr6qVbsgoG",
  "key1": "493VXN1hcjf2ftFuMNqQHu7dgLy9j9oCxe2w6QsrW8PpKYKkCGaChmS8A3p6mR3jNWkCqYC4AwHgBHiiEksyziBH",
  "key2": "2CTDQTkR2hyxGqJtQyybPC7PJFmr92w5wycMubfbKSxmob6eaYa7Ak2BmgLF3monjNRLnrsBoVDb6EA2Jcxi8Wjj",
  "key3": "2Pb5CkpM36emZpzuus1z2AwE1Ltfi1PLiMa9BipGka5EdZWiedkBG29TgRnFqy4ngXLp5YXwaSZYkK1YswRbTxq4",
  "key4": "CGRzBnEAEentxr2aX2doLHkv5ixh5GztiSp4NzuVHxWM1gFyATX5oSuEErTuTdBRj4ec3hGU5HLQGJUZZsUhXRk",
  "key5": "4qfan1tL63bpaA57sAgjzvQF7SmKw8DUpPH9cgEAvrxEVXKkvcudDeEnYR9C3e6aUCpJvCfTd865Q6YQwy8JvZnp",
  "key6": "533wy6kfKLL83u3fzPh8aVMu7xxHTUXM8WTQ41MVuKrCXh9mfxwekG9BCyPZZPx4XxDY3GkWFgnoEZGbyYfygtg7",
  "key7": "4qs9C8jVonx1r4aHcF6xvFJL1Vjs3Ye1Y8wUGKizZXtYMAHrpNUgg1WEZVQKfQBWyymS8c9NDWcJ8gUuxkPar1Az",
  "key8": "33AV3LmCLuXuKjy623saPyStYL13EjcMwZo1EJ3JrYNas8ehanoX56sNvSmHCr7FF6r2CiG2nQzniVNm1FvFKiVi",
  "key9": "26fxKgiHttcWdDdJhsAHyLDhXVDRJwXqKBRoVoL99XTx12DsdNEHSdHMZwfzn9zFgYwXJ5idLq4uamdNXAZx1iER",
  "key10": "5dYMnZbBHAnEbKrCpXGS2dwckWdnnqrX9N6M13zp42LZkF86NfkfkCnaSMcqacPjEAVBWZKCQjJFvQ3CsCdU9q5M",
  "key11": "35Gj8AsiHUPX9BeyRYSBm8DA7xYbrjwe57GZiC1YnawvJgphAhfhZGV3LFfL4URJTRPSSxjwYPoZfgSM2CGnysYv",
  "key12": "4KwEpYt5279yHshpjg3x7653TEhVpUPVFSh54MnDEVKtxkXVXxCrcpHo4EjHqQfRUTHJixkuVPSMbTAPMCnHhnQd",
  "key13": "4KWVw3tsPv4EacmieZXCRxRM8QNJQccQr9F1ZLZHH3XkbwwiLjy8zPRR1GB2faGeFT8sS1MZLvKDzVa5gEue7ofu",
  "key14": "sUGDoEqKxBw2c2i387Bj7jWKNaVW1228pd21YDNjwQtAuhY2vZxi2nvroqNmyLJaXihFDQ6xqD662ocu72kvfbF",
  "key15": "3N3N8xNoCKeU1zmRiuYwwfkjF8qHW8Yq1osAd4pBKq8kgYAD4MV6uCgQ7ibCKgX5YsAeTyvBQNpC3M72HnDJPjpu",
  "key16": "4zUxA4EAde7nqCyPizjKwDZMYdUypQR7vh7Xi6G3Viih9kjpFphka4xA9dwALP1HPKJ6fKQFp8bn1PyyJ4k3dvN1",
  "key17": "3nnZAy5zvnBy6mX4frK9W4AXKxnYr1AA9LdPce4T3Ho9c6LH9p52nfgws6oZfgN6akrkjJtvc7SMfEyknSMSFix4",
  "key18": "2mGiBqxsU8jFohTZZEUbZK9ShE6b9byu85ibbmuz9rP7Zrh7dBeXY8wgJswSpxr6MihzUAT7EcNpmjA2vmo4kqu8",
  "key19": "3CyEiu2v5Gso64mzF5rqfoVdiW3fXDCW9GF8iRAF3a3rqoaNEKnr7E1W8iGyD3rTVoFTu4zEpRLkD8ypwNXg1SXK",
  "key20": "2J56uTtYnMe528vCpXbNGiTkwNMaZARfaWwcavnKXQYRjMcyJkEcYwfkAB5uAT2AmGWgmEJ8FUzPQXJPstVmQhPp",
  "key21": "2bWJAVp9MradpwrberFXXCrNXufhUoFSXeae9qzWTgEfUvLy67aK3RoFXzfCizEjtU4asGf4A1mAsJ3ni5B22ofU",
  "key22": "3KRM2KvwugfNcNwLyKt6RtZZJfXMXvvCLQMK9qouQCjeYz7dRHFwU2HpUDa7jTKGCRr7UmrsyE4DRDyAb73VqkNT",
  "key23": "2AVPtgvpwEPFwKHjL4DPdUHKaMR63UEiqdAnB8VujjxpDLxdXRRDojv9jYKbGiUtZgm68AU27SmPQLi5SKnNbMY",
  "key24": "2kBh9d6BguiRMhRgdh1TrqnxP3XzyBH4XDzSbNeHF4qvqJ57M6MoMS42KLTmnJ4wCbJdZbndgk2xybMURxFrjD6r",
  "key25": "34pKTfqFDLL2DMkdEz4PRs4AufUq5Ae1hCD2d4fR94CDZnyoTYHXPrXP7uhHnzXw5KyaKigaUwpJPzhh2XPb33Br",
  "key26": "fAz6SuPpNADxaM7F3kCQFBLKD9aoXqiXHPDqSxx4CmPYirYvAcbkZAzWNUhwDUwNADDGesNEPfzoJtMSwwzG9fp",
  "key27": "3XBRBwyTm19jJ1KXLRnu3oh6sVRJKcV67zBfh5HZeaF73zoqNUyWUsiyqzv2Bbf4XXJYYMiGTndzetsQeNHcMzgp",
  "key28": "2ffTYRWBPLJ9FAjCyZSsSoiNzgJ4vWUePr6Uktr4DgsTBWR5R8SySpk7tVVtw3ucGd1Gucu1YdSnEjTUMp1xhJky",
  "key29": "5KTGfyL3qNvPZt3ZNJ1nbGArXs8v7KKiHvT4bBUJwcJjgXsqdskuuwLzBhWHBEmae6hQ3CP451nZrwCeGc9fQUfC",
  "key30": "3pZaXRn56dArEpUZKtGPiXiEyVpWeFPmnh1gx68zsCMa9WxzFj22j4smvcp9TNCMvnh25HKtEfo3BjLNgEZVNVGH",
  "key31": "4XGHZ6dSCNRN3w3Erbkp3sdsFdVbYrDsRK6jNHBjR2NE4zLDimqmkNJdLWLFPEMjAXyyHyk5FFUU45XJuPrKL8z4",
  "key32": "FSVMm5HFFHXJiCkkdKUmGi9fFxK9CYKn6sVkN6P8TCS5YiEXUtRCxqoL1udaLUY3TAZGNUsq8N8tfCdqNrTU55z",
  "key33": "4SomeKBNG8wgRLkAdQMW7yuQmcPkZ7CYpXwUxqNbnjZK944mMEqxnZaAY4BKmw8GysycUQ3bJEUbbxEw2Uhk1MV5",
  "key34": "4jxhDAtE9vvKsSSjf54V5fk1agsqrztZgKjm9o9a1Zk7rdzLCu98F2VYyonWTn8RxfputCEK6m3djQhqc2v7u3pi",
  "key35": "5jGg7Lt8T3LyoH9ipExqHTqsA6imKDx4jHQWe1kgiqk1nJgAyQUR4ebdqk742hn6fYm16hDoiSMpwCYG5hwRgu29",
  "key36": "67HiD2U9h6GuYzkuW79WZqw1fBCL9JQTkGmuH2mRDwK3QcVUTo8rKhQZwagdp3uavdsJqjQAsVZoM4NakECAVCzM",
  "key37": "22BYvANntwHn6X1hseSTg8uX8GRoTGtnZcsHrHTM2puM3BqahWZxqg7VTtix2LsKe2DhBp7ZC6wAo1hqMMTPMgHv",
  "key38": "33hcBKFGvqcYyppWb4bmiVeuTFpoUzzJ3Vfa3NEURZYpzaziyS7hqgMngA27tcJwwEXTirFoXcQnWyY16BRWL9Ge",
  "key39": "2AHPx8R4Dwn977Ksog7Lkv6kojgwW7qHbWT3C76WMo6VTeUc3nCY2iVeAvL1jFmiYAMxrHSyKiCigqWAmHVHcUj9",
  "key40": "38YTDK31CS2oPuNm34HupNU64QwsD4wYxnd8AL2chkDznLyPU9p9WQcTzNQjEDT3R6vnVyLQR1KEK4JfmKXVPrCx"
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
