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
    "2obVPcgLf8m6XR8FzbjpPEv1MZ3cChXYcYVdzEdw9HgJwKYBo5hxj9PWd5UEaBKCJWUXWLyoEpYp9wY51JRwier5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uSGNtc7g485i1uJZzjk2nHS3o7eLmi82WFwo14ymeAihBd7SjajYBbAvbPB6UuscEHxhPX6XMK1o2oNfLtGRGVX",
  "key1": "3vWKk6W5cfVZKJEG7o8JwABT3Q5r832WgCE6Q2XfRTPXKoiGLdbkQjDuiEifY1tMVSLKQjWcGZZ3ppbFAg149R2k",
  "key2": "375vogUMBhYXPEEWxvoEKuKdF79PgBFqwAc5HTNZgjzh8vZ3KaBEKwvtBGFZMYPhuYabGfgZJrn1CVJGE2BZJrh6",
  "key3": "4fRc57PapVpLFR9Fwt281VprTbLvQAG6EQHZpWLtar9BT28vdXsWK4LndZeAEXnNVTX1899q4V69Q65vG3ibtCdB",
  "key4": "4gjRhfo4e7x9xUtSwC7MYg5gdSWsbZ4hAwCpyVEvQZBt1QyKfCPUDNvM9mYGAJ6KxXrJm9YHcwkVZzG4qrn9oZZB",
  "key5": "52zAdBwtcphbeHBpCe1WtCBezbV1JWhAaVpKosttwqsUkk5ErAeaNbShvmwF4CF8o5Le6gycTerddN7dE583mQLg",
  "key6": "3aRscbthrwL9f8HNGdCDmxFMZUj9vFVBDQoV2NEayoon45cY1MaSFYF8yMdZTGAFfuBmoezbZv58umAp5QmAh3fn",
  "key7": "5mRYvCjfbzpX46wJREVF4yy9Ddj2GkJ6odo8ANmHgqmqFqK1AFj4B7oiYZrF5qaRqPLgSj6cjwxjCGZ2gisWtXhq",
  "key8": "5UKnEJjGiHfXRDtYmunUsCNejvLodPTezKbwZ6ps2rJCeJqPRLnTEGkyz9VNAAWWa7z367ZFxoiVS1eWd43BLHCb",
  "key9": "2VQtfesUY4dCyY75d5aPqsfahmP93ttFvYxMJXZxdnT5NKTRibHHYW7HKtP7c79X6Ufv9ygpyCDKTeYRe79365cQ",
  "key10": "ewq1csLGUVtLjqUsQcKb8rN6yrqCAXDBytZb2CT8HzFPaEwoMGb2GeC58gR1xAaLzKhujm2q5MAq4fZVKHRjc7L",
  "key11": "5HwVrAA6s6g6HB9Wta82XDftRGDrDJppJYmSuD2JvjGJ5XaGutsBCdivG1uYAk45tw29C98w1WdoDDZoxPyxgxZa",
  "key12": "5iU7ViBRVzrp15v8KHrx4a84MUimk5wfeNETZBF91KgAp8pKPUq1LFKCCwyPjwLRywEs9NM9dJxAo625WFJrgooB",
  "key13": "6mefebBGEwrtcNQ9cU5necHBm96Y689mYzpD9JGXVrdL8Lsn5WB5CZ64ZNRn5qQU3iT3Xsq9oM7SRRsqNk15j99",
  "key14": "4acTQW5Mayu5vVk2nYXX5LwkPPgdLCpXSwtDDVPqPRdHpiyD5hDM7QMPu1XJnq71JA91iDewBUkhEP1Vwx2Ut6uL",
  "key15": "5V3tzyaD1NUVBdks6JT1U21G8ZxBtG9JwiQiWzJFEfgx39nMfMJUu5sMPxkFPpoCRbiLnA1JMaJw4JQLGHPNbcV3",
  "key16": "2vJ68Ys1qfXj6u7rYbPdBNFqnhd6BBxLrQtpjsNAF9sHKjmsaU3m1g6c6JAJ3b5B2uHadaLtEHsU9BCoxF3SsvrP",
  "key17": "nhje8i9JrXV7UkYjSURhij8H3Sx9g5ARzYS8bqjgzkzw3qCNTkSFtPvnCjP5fmQpMyyAyygrua8d5cafzyGQDjf",
  "key18": "3At39qbPsaC6pG7gGmMKvPx4XDpfNKwCi2Ng7niTN5sPcXVRQp1mJ6FZ1izRaQ1mQ87tUGA8xDfX3vBuqu14tfHb",
  "key19": "5ApYQTQgjzuyKNr2zNTGh4v3224aVMqfHkjkKn2LJSs81fWuqHqfubFx9d5tUGNkfXPdfANyqNqHN6mEKnNw7pwx",
  "key20": "UzpT5rrsaEVaP1S7918S4tdYciCqYfMGDwuBZuwzQ7RXLduuRHbRpoNWKFZvth2nXpJeiRJW6L6ovG6rsuuFzEa",
  "key21": "515QHyU5P1f4aTSBFQhMwjVtRTNAesZqsb37KhhpoPrHmdvrVtt83noWH5zMVpYUjM9BuYNA6dwTS4HxmmiyGq6U",
  "key22": "gLsUgirUH5amMipEx45wzPDDh1MqJ7D1Rc6iGwFSVkqxTBXfAe3xGoHFroc4ajSV14CE2B2hgyyVUiChr8xFLNS",
  "key23": "61rGZ6q9V8rG7KexfTtqRFDpSbrZCMfYh1LUxv2bCzrsGJnuBx7URnG23XKvQScQ62VwQb7cikSPbwhseKieaRAh",
  "key24": "5Z6FzR4AyCyPxgB9zwuKQXBTgbsvLxfKiLt4X8azRHFeEs7P9v4NBoCd4d5pdGYXsoSdQbw6vVVzRfEYQK8qj39u",
  "key25": "3eDLWnfJiZ5n1TnPVACuzxPBnfXEhwuULLpBDkU9XhNr8BrukffYdSDR9ZxFBMy4xiBNF1dyp4dM4mJFVXpmEfKN",
  "key26": "3me9gh6ncFY3YEayCoXLSpqNQeDCNs95qTUR542hvoT4iFpGfkXud2aN2RUoQJ6Bh9nabsTFZQDPQf9p7VpZWz52",
  "key27": "3wFL6ZJZCErxMBrHKNNJqav1G9ZFe5LXGLgs6dGk7b6ioQibmxg1kBd1NkenQ7ciJtermCBvL7bWb9RhhVXF6f6a",
  "key28": "2fk2WK3QBMqXVm65cj2SDE5WpB6vzmMAqEjoF6XxgSEP1AmfYiqxyW7g7iDNVznd3hjQ9hsAPwGGsavCnNyM29fQ",
  "key29": "3JEusYHALPeZ15uVW8dYpr64svirRa1uAtDg3sS1CWeX9Ez8h8qLcWddRyXw8R2BQHb3Z6mhwNgaRy89Kc6C35Qq",
  "key30": "CUGyKed9UZwE4sQcmaopyBVQ1Z1jTwrvzgQjxQS1UpWZr4AH1YxsW5Bpwo8StQfzWYV2L4YZxHciL4Amg8UzQLi",
  "key31": "4sDP4WBpkZQZo6EtN91gp1BmwyVnihiEVYumcrbDDjaFBHkpUXccUnLEHXiXTUF2wM7Bi2yHLaWFHGeU4QywW4is",
  "key32": "5oLvNiY9FR1Kk671xG4TPunstVYhKp2kzd1cSktyZPfU3cB8Cd7h3VtKr589bNXLpEnYigRUWu5QUKiF86j9KZiH",
  "key33": "cYypH4BBu5hSUSxc7R2G2bqD9WAFTTTs6wGFWgBFTpeHEQgVs3YwtdRBPMUWdSg2gnQ5rdcir4PiPszxusqJWFG",
  "key34": "3AhBtuHN81QxdktpfP8V7BFDZmNn6b7iwiR8HatRmX93C6RuRkGkW9xN4cM3JHMv6hAjwesLynh5qFwHZ57cfh98",
  "key35": "2UgcsLGvZPJzYevFM3pzwguPav7RWnaD6Vc4nPmH7rtcjEadBf9owyXMhtVKqpQ9Npk1mBV18mbnQn36EWdSQNFt",
  "key36": "2xdXVjp1NmSfdiXVaUg6YnSP94nLYuPhf8rqsj4CoNjuRf1znYNS7YEajdWX2yKXqjNseFyu5pVEQT8aTdCgaLvf",
  "key37": "2LybCLXowsN8GJcnWLwJXfZbzpFNT9v5YZpMD2hXHvKcMhoPNLxZjPQhW5wXX2DnoEcvwd4SzsjKLGt9GYb9iuCT",
  "key38": "3UFNy13GSs4UfboVQQXZLNbrCh63PVNd1BvAGvX6z1eoTu65ypUhjkkYbEzrerfLSpm3ZF4x7N29z3KqUjeCdWo4",
  "key39": "4i9Z3Q64LjYtg1S8QRmy1xq4cFkyE8bw1bWoA4t2HSxRFPDxeN4YYRQBbXjeyCLUc1ozLqX4HMyU9QVETeyUiVSD",
  "key40": "2fzo8T4qUuwd3DwxRr5XV2W17DnfX8Vq4ZSUAM7hi8texMsLaYRCVymi2X6JEzn3aFSgGvwV12HeHyW9BtLugE9u",
  "key41": "5qRaiS52B6FfG5tfjf5YabzJ9cgzEdScHnncgD8kfrXCDvgegBRKf4B37K3myuyWUVVvWhWu9kYkNw8mP9g56fNp",
  "key42": "5ByRTENUj5B8ejMbWW5yoG2wmj1hMLwbY8hhJ6HBe66XWC45kPjVCwHnvM6Qoj6MSw4eGkGEcTiGBsiYLJvakBzm"
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
