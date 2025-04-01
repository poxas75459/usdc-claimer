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
    "2zXpjE7f5nUWzsqfWBc75aYPKbPpFVareZfD3ohjuGxFWqJn89ze85oeZeQSccBi4bP2EBAKYvTfNp8CuCKucvse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8c9PoVVzv2vZjFTnLTrjUsVsMLDNZevtkitBwHGB1ZuBH3i2p85seFmRCC5deYe3WUSxP6WwoKkeL9QVGq17vQ",
  "key1": "32CFrRn2BJthWcPkeeu1cy4mgz7RarMg67sxEYiUf1ybBPGzX2yGyFxrU5Lod8JrRkvRcg2bmVx3z9eU21SConvc",
  "key2": "67SURa6FEuUUE89WtCvPDxdJTmh6L6D6CqTiq66U1dMzAXHFNejzPZfHPC4tFTUrj2Jp8FZyEzePuZDoPJkRF8LN",
  "key3": "3bZWTAS7FC9PsmXRi3GXgNZ81UubsP7siDKbBbJAE1ZWtca4XRQ92w8XG1Af4favYK8c3wrUbxURafVTSJgZnrWC",
  "key4": "4W6rJsAHMCsYjDwhU3tLKyR3jK9ntP9NgkK9EhrqxmSsyNL6RZvDsEPJQhg2KG5L3nGnDj783AQBgfEQwBA43KUu",
  "key5": "45V3CnBjMvgz3kL2SweMhZWF4HtudisChDzmphyBBdgWkh8cx3QLdS3YHWpLQsWFXdY1coG2h7n5BnXNLpxUJk5J",
  "key6": "32wvWZ997vKmyrz2hAh4Vma3aGNZLDToDkrxwXD2CiRPuwY2GqAFMAKaqrw4FmhKxms8zDdrhv1dYFsNaBgWb4v3",
  "key7": "4cC7MoKZqUtYYPAbYagzfFh2XpUpDuUaRAHF5WeKXi9HLPpHTVhoMKu9ZNjPwa2hxZ1fWGC8Ds5Lq59SkqEUU8u4",
  "key8": "2anebiiGGoYW1e6PYyMhMK5muFd9xvU3xFVguHB9LEzRQY21FPpCB6x3fXC4XqMvNH5vXdKh5Z9vneKC77yjrcDD",
  "key9": "Kzeh8heH1mXUpQuPKexYrBpWEBniCb7d6QUKX7viS3eXaCo7JW1PyebyfALyLhVYahz1apTExvRGJdYUaANNJ8g",
  "key10": "34Mg86Y4dqPczoaNKLnGxFeYB2724mftF8WiSxHy94m4pvm7YsvYVki59VsqbQVzEBoCJMoGMqpujyikQHSEc1bf",
  "key11": "4gBU2vPkKAEUBdYiyGpNxnxV3jHRdexW336gUA8EW2U7QZ3ejGp1KeWiJo2hMxqDTk7PRcTaa7PuUTK9wneeQnV6",
  "key12": "2RTXJqoVETyy1xaQskc55yDExGdvur8PpL4xqdEB87iSJNL8biiiuRfjyFwJJ1GXWKg3SEmhZpwHeA5vpjJE44nX",
  "key13": "4z2HcvyYZYZJaXUuBLZuAHqbsdvv4vecYvN3o1urAKEP4v5J8dwUG3zGJDomArZ25WocZMwLWR7voEB6hVNWbpNE",
  "key14": "3z72GttHyNgXiR2diP6vvkWYBH43Zrq3Mb31V1rod3YhA6bfpGn797DPx2LHKUp4xsqM9qEoemxyf47YdExxbGzV",
  "key15": "219oXEv6bPcLtEwhqFVWDdtSYPBxEXo3Pq8sa6FdFnQ9VL7uJsBWc3vAkRZXkTkBvFXHcFsVmYYMhtasGneANAUQ",
  "key16": "2dxTRSPx3ZLZ9cjysNxZo1iqSn6xJ5FyugtnVjEo7uo6NrcKyUjfkcqw4qDYrcqF5jpcbLWdTqHfhX8KqZFLGGJg",
  "key17": "5DebZqsbFn2p6S5R6JkDaJUqBshaiAZmH2zTj3goLABAJN8cXT1eT8DaHdA4HSpVc1pbA3oyT3f9Cn422DQgAYo7",
  "key18": "4EYWQeKKXjoZVYNuFdot1hor7maQTnDoDARpuXV54kabqNvwagMvRF6dZMpYE8hzN2fjmJBMnnw4Aum9tyM1nqSP",
  "key19": "4t5fFZFVXmTtGUJPXdJD7ayp6J2YyC4hwUMBKYnp9i8Zg9bsjaA9DouiJ6SUjVmG8QJR1urkPtFkmoxsnkqCJusT",
  "key20": "3bwy9VP2f5wMqoveicJprrjzSaKbqVU68EJFTeBpoPr9nSVMorw1A6P5EsSXSgvQUo3iR7Gpb6frXjrv39i1AeAd",
  "key21": "zyCTsDn8zmMgV4YcdkFuzcUX9TFwFB5Zs7aYiaWajWz5HUa59VRqk4ZR2sFcaSi8yombGjrfyw7soCPapDW5gvL",
  "key22": "3z7yam68XezrhRBYcQr2GbKhLHXSsSED1E9UX3swDqXB3388HuT5o1T3RyThxNN7fH4Bgiq1cHXpKovzVuqnfopB",
  "key23": "5VezeXLL9vcgKdpF7mYK9YtJrEZ4xg46dczowjzKFzJ4ZA9FptGNfPSCwbGVVZCzBpRLTje55m98ZozpPZSo78p9",
  "key24": "2MDvz198bXb8VoXN5SDxiicwHoYixqwzbGpK4ykQt2tmKD2fzbaiStpQXKFhebZuJfS62BCCnnn5PWaJzsiJbRiH",
  "key25": "5WvYtrje2P5rxzbm2z4zWyZQWJNteMiCz5KjrjiitUV6mxYNroDgfPhyfGUDAM6mefCekddo4Aeb1T9VtJeSfGir",
  "key26": "4t5hPLrbmPqHkYpVEWGbQjXK4rJEepT1ApoguQuHLxSuXTo7dXhDp2Gme5ViT3rWo5erxUxe1juAUcbCqdv9hdA",
  "key27": "24bvKm6DqrJYu6NiR7ExDd6o8yPs7iwEdRZ3B7dwm6nWXfYSimcDUGBfyVCRUzu5xcsUgaMeUnaFAjGjpaUASndW",
  "key28": "3jJ1SepXc51LKBWDEM2WG3C6jf5LRsezcMz7W9fapV8o1FrLHjzCibaqcGsi8dAVgTDCqEMKgQReGNzyWFtTgFqC",
  "key29": "41qaF3i4Jzg4i4UipJAJCUVYwa9v8ATDNNQ3t8v8UXS1cr4zZnwoBnjgT2ZydvB1KHUH9fYeUsy3dp8UKNRuDmFr",
  "key30": "2jDUJ1h2L4Fy16RsnvKijZNdBP2s5iiYGuTpKgETPL84KMyJdaZWQ4aNkyuQVX6F1mreGriezh98ovkvoR46uzW8",
  "key31": "24gFrtSf5Boz8Mc32rvFa7CQXM7xBJHfWSX5mahRiNZaWMaCLssguREa2sqkp8yoQmECuM7AaAHpmxsDshqKoTXJ",
  "key32": "44cVKY4vywv8FgJ9ot5dtaq2kQGejPh1YLMNTB15SosNo2fuoUxisrDJX3zPZRrpRBkVWXgynrx8gh7MSWcys35Q",
  "key33": "5BJPTbonimDygaMVqSsaHpDw7EfHDmDet1WPCgNgLuihpn5tChdkTcPkADXaTosEkdwQdNTAP7GV7SYwGKafcrLw",
  "key34": "4wHEbAmyNBkxmvUNMg84xyCcTR89YAohbmTh8kJCGa7iL4nSefESQUnUZezuydwE1XHJL5VsFzhWhB3uzkxyQ8KZ",
  "key35": "2shZvaxg6mR3KBtFJ7pY2iSxPRpuiutz87ZZPFJw1Ja9eF4tWPWg2Tb4sfMpKgGnGKLqnPxGKQy7WeVrWad6yQBo",
  "key36": "5rPDqC4Gmdro6DdMAmuRWo8JqZ4848wK6iNu9zKhNFAMyAVMRKy4Mjz6ZhE7Bt8xuLgiVhDrY3HiuDtgbjYXWqq4"
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
