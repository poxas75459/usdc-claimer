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
    "4qqFX3ydNKA6v15iZNbTaNSoqB2P67TjGdafA1RoQ53LtKodqHFzoukBpUXpR1Kywmzq7MCm351edLdFu2ZZHEUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARVS7WcA4JBQKsrMNCQVek4qx81qv5pnUdGgtSEqxWxYR9TBkmoxhN8ptbdddPqs9p6FkwjVEK5uEvnUdLnjhHM",
  "key1": "5Z5a9jRFkJg4TvP78KTvYJedgRqddtWVZ1XMkZ4PuZfvzGUeExwQdcbRGuw8c257p4Xmre2kCaEjcPFywUTauT5A",
  "key2": "GwSAJwY1L7LHgy7pb8aSKJSvAUk3gzFonxiziwyuW4T7dtSVV85TqVYvbKmXWYYaPpsxNTyoacXYSDK39HXs6X4",
  "key3": "4KzYBAorLUow8hypc6bwCZN9gS7J3Ht4KKted1dG7iXKe4e8aSQksCUeuuGRsdpyEws5DTuL2aGEoU4YMxAkYQqz",
  "key4": "36uNNBH9xz9XNscwemqtwLXfznaiE3R8vqD4CefSf5AmM34mjvM2456FRzkCmXfW6iCVnniLtKnSUuEX2Y19D6Ev",
  "key5": "48aviHFBJwPP2RmJTxJidfkRuir91mNThZjhn3rjqRDUyooxWHYfJobVGBQmSu9FArtLbeNLeo6kxRCkkC5A6riT",
  "key6": "gPUitXBDCqZKr1zveZVWMKGRCS6BC3bCCfkDVLVHffJX9sm1Z1kPFp9DW1r7sDyguMyBP4KB9VcCb2s3HJ7i4Ye",
  "key7": "5GGH2w2Cy5STG3kGkMjwskNP4GBbvQqULUJSsKDBFkfuYnjKEzquzQY9H9pBBt4Ci8JwYstKav46wek4iUJJTRyY",
  "key8": "4nb4891FWvgzersjFiYyNVeJX2zzVJBEreyjP3Q9rMMvkEpKxUw764Hdnc5nwku8usj4v6Qc5bjGtszrKDnbkAV2",
  "key9": "5j4WftsgkpZia72HL76daQDdZWrMZbdZPTfoJV9FLTu4qAVPyKw8tQpDux4RGiizDmT13MwAisq4wXcNnmuCei1o",
  "key10": "25rr864zR4jqufRD7UQWH5YcYZY7w66vBs14csuLKBufU1itnthT5PMuyR3PRcPfQc7QKVxoifHnjXKdYhPW2HJD",
  "key11": "67YqCVNBWPVMXF7sxet5Jfunn3TAEUXnXAohVrh24Gg6hWAUcrKxs8NmDeSAPqUNBTBuce9984SdrTqnhPU3jDf",
  "key12": "3Lp7731GYssbw7BcpXFTfgmdKubt1h4cxLPr3T3u2dhYU9WkRVt5iyC4FYjoy7oPBn8ZAAhcmRhSyZxwPdb6sRHh",
  "key13": "2qJLbEGWdZgifnnCJ3R2ekhYLWMZZoaYYdhHVdc3wRDuj2NgArJxR6x4EzFdXVg9qmV5gtHeuhEkUDWfmGat6nqV",
  "key14": "2MZQPat3NyVhykx6vRt7n2jkFzTe5Sywh6Sg1Q4bbnrv7KyJPteX56Jz6qQW35njnVAHavHvWtxxpfcbAxE2jh7B",
  "key15": "o5RZtKTaSEUyefCrydunc2yBfwvGPejkZYFrf3oNyvBUuvDNdSKjzGsL4yKU3DyatbMFCTyky7tBUBqt5U9vWNm",
  "key16": "2PMRLVm2DSaj9NsX7DsPeb6TnXcupDdJykLThkB1aiWBgaq93agjLH6F5UfuzEKhGdj8QqB4vcEmgcsZ4ojpxAdq",
  "key17": "2eyJVxjQ4gZdn1KLKUZjXEXpRdVw7SSYcZdFNHqbZsHPBa58FoDYsjSC35dUY9DfcM8gchqRrxJC9UPe3BP6xR47",
  "key18": "22mJpHFuBikhLeDChkGYUMBtMc9PzbECiQXp4NUTZvUXoXXKLcQsL27D4tRLgZtG2FtraurQ4mnuUy1iFy6QpoEK",
  "key19": "4jJ1xQAZWvmUAwKPnh8mkoFhMrrnNm2Tm2SDk63Zq1UttvKvYCiEVH1RVstiHNizDrqQutqWd2qQYa1B2kSsQ1Xh",
  "key20": "GdH2g8mJ2kyVQCsFcWvL5wBepqWAwxDHE2cPaiVyadXnKnm21HXyG5QK86jmQ5zXK2YLDvrgWSBa7pXawFZtbNe",
  "key21": "oSvJrg2hZS2pvh3hGb7T9TQHSPhWfL3PXmrz4N88j3RVFuorakaW2NUUZ4TgT6Sn5F46e7tSeDTSDhAn1X3C1RY",
  "key22": "5spJeBjhm6bivYjdr8KJTn9SSsd1zAQz4WpSwdDbPeJvr7QtxwBNdkhxL8aJXfsueK9F9rsFXJ34hqpixkXaY6qE",
  "key23": "4tcQf3TLVDo6AYrvfqHCYVP68s91FK7Z87bsbJqT9t8pkX6BxrJVUP8NtTT5rVQfGN81mquDYA2cLo8QiwRn9eXt",
  "key24": "5Q3aH7SQTvjfaoQDm6W61ZEwdPbMsXQ2wcGs5vLo8Af4E2qUUoikGCuxZmUTaQnjABHzUDjMFmziWeofrwqzzWkS",
  "key25": "4vjJt4fgXqdzdgr1KH2797Mr7wgU26SNdYy8gTEZknk9crV7rGFXKQ79xtoqgi4G93uRS4QEHUbTYVvsB785f6gu",
  "key26": "2yiNhX6pKoiz3rsmUVmcerGeecn3ZN7iYrHRaGpU9NzmapsCuueQyVaM6csgWDofjTBoqbyK1i78BdUXLhjWBfji",
  "key27": "3rWB3JfJGF92RExBzEQ2cQuVDBwYWq1mvUZ7CMm14kete3gN7MuzW4vrvLosYGKK4gjbFZBM24SinNiXQN8xER7x",
  "key28": "5xdnpiQcQ5TaKV1fgLBTbZL5zF9V1FnWtfFnqFWDKQPqu141PJfL9spVoHnmvGK8rQCBMZcFdM22UngBrPHTvNKY",
  "key29": "JQs2xW9zLzCAfVuDQZLQmmthyQi4DLJAvwytnBb24zymcT3EcDirbBxUEntaayzqDXUTZizZL7RhRmhoYCxSTVz",
  "key30": "4eDuFz5mNezcDcztp8LRTVnfduztYPm3oFyrfJgZF93fet6jRZQ1xmSMk5HBUKZ7XceNZFJmxEN7yjGL2a5vr4ui",
  "key31": "5upFwheqP7eYGjg4z2XCLGMy13bh1sYWZKZd56FKxZYwLGMMY3A365Qkf16tNV1maSbqQ7B9QMZajB4ebBQEk4Lc",
  "key32": "4nQGDieHMLyUFXg4Sf7QxTizzfT3pyRPRqZHZvg2MeW6L4qU8N5n9PBsvmCrgWdyKowydKCcxaY2btsnZY42RLny",
  "key33": "2C4saAoy1uZLf9f4NcGTSvSN73SDPKLcXjbiMt3EM8nz8im3C8kKJuH3vLpKeT7dijWYMBAn1mHuT18t3BwS3ngd",
  "key34": "5VVLwaSTcZQGYrHqAAaUkEbiQ9weTCCXYt4grDzNLARVeAf6cJwh6MpPBhWkhakU32DDY4sfmMJBd8N9DiazoaJU",
  "key35": "K1ZTTafej9Vk2ZPbBZvXk9CKNBeCRzs8jNqUoTqXJzewgTYg8k5591ihrsQ95HtD37jc9Fbpn5Yfjb2x3utVBr4",
  "key36": "4VrL31JrAW7ogJwzMiK4NeV6rY9g8buasV5JZ79f146B32XRFA8DTb6y8RPtBd6c7k7xkp9qbuuZ2FcuFK3MmHWv",
  "key37": "43ymQ2re7avKMszhvQLqpDrsTVEFpVQWWDoDzsmE2GGxWWoVomvL61e6GAfAjdVHebDzJ2GHcn1o1ka63Mhury7C",
  "key38": "2pkGV5oneA7sV89Ms3wWy3kFcNwjwbj7NDzJeVoVghXEmtRvq6MvZZTbaGQQC5SaSu2dV3NLyaKjvW5irFCFoMhA",
  "key39": "2MvXGEbX5R6vgpdfmMzrxmdtBjR3NZQCCGgxTVMsV4DATwThykiijDg3oAuk9Gse6EsiuJWVrLPGjQ5DrCA544Jk",
  "key40": "qaxsoCg3T7eAF7n1mfdkYATrrWcjyG2wJJ4jBLDnaejM1oMQtq6hAo3Yuz8EE2zc1drbrefnMYsrLU8FnwpZDeY",
  "key41": "2jyuHY27W5rVdSJFT4jmgrznjYG8CzPPs98xWShdnh9QAQ5QqWt1pMr98obai1pDREZ4fUDzh2Gjy4HPy4xsQpfD",
  "key42": "5YUgPPSYmfkHV8AZSna4JLF6t9q4KSBkQFKkSGexfAGHF2wEK7Uo3H5QR5mBSYkiWp5x9ChwqDVmi6BChXAwu65n",
  "key43": "3aJGUYnfCNZYQE9784ym7noK6rRZ3tVGF4iDkkvZFCE1qm4mPwDacoeQFQ6E6YsUCkihXTGXaozBSyMRAeHLRSKG",
  "key44": "3jL3NHPJNvESam36S7WFAbtwoVdWpF5Br2pCRLs7FmUUfSwcFkpw7NRepi53FATgNEoTHqZLLf4WjjWXJSDuTgvo",
  "key45": "41dtXeMKsgkJMoELLtqWUpsU18618Q59DbbSD39yPzAuSZUM5Kmrh1TSwFwzQ5EZ96Af2Kdr7c6wAMf8DsqiGpjK"
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
