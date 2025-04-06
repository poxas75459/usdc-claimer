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
    "r7ezsjszSyKsUuhAYGm2zefPppSoxmKBWacJfHK1DGVwASWGF1vqUt3bM76HmyTmemFjiXf7Krz5JyTu4WzFbFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrU9dxcYhUhRCY9EWD2RFiXBoR29mXvBd7bPNASMxQQ2XTSPb8KPNGhMPBeqPEeQSrQH6FXTpWwJjZReb4nqqyF",
  "key1": "35ihd7Z578sRMtq5KHpV1cDTwx6Hn4GCkwnnykQpzUTbJAhfioVmxEKyMmENKNU9ZG66qh9pAUQVdQ2Qd15PjZqU",
  "key2": "3gSKMzLf4gKBcjqkbS7rxDmDYo1Kuq36gUVbW3ZXYQpRyvZNb3XRcFzYUfzkM4ZbhqAgmVqorofCLtdgRJChL8QG",
  "key3": "4Cqweb1FWF4L1o4Sw13qJyxwju1taf8ugNTkgNfuWcKjhdiBdGKtAA9JSQPb8YUAL9KBKfDLSDzZJtu4G3ha1uab",
  "key4": "3dt2K37EfXvRywXAqfqEQ1eZvjU1pmZ9L15mfQ3Zs1dCrkDAHJxayU8nRfCZW5KUw15Uw2wbH3BPa1hM5DDPKohc",
  "key5": "2Nfn2rf5it5rJXtUkGk2tbahShrcdpvTZqopxVcBQ3wnkEUm5jAz16Qrn2vVm5gr34oN6hU9QAZznvhBCU3MEVzU",
  "key6": "5jYbUGno7S2DNwAUmqXHvSUnBxqfSNGppnitRZiyP7pJMHxiFXFq7TKRtHhhFaVCk9qBRdgdCvZvzRcuNSar3UaT",
  "key7": "2oDZVqjbNJy2eBPAeMib5CzoYwvYE5wADzhCxCg6dEFZk2R1hWC28s8wDQJ6xEyCgFfcH2mkSE2bf4BGGhQwnm4A",
  "key8": "4Y9i8o9CVKNcSNqrq16yxX5fCUEX7TEPEuBiMKF5S7429Ke9Uh6n9MqRzA54gbR1LzHwaU427ZsuTNtMqHDpxgaX",
  "key9": "5u3h8uU1wmfKyqSS1gVeaSMrmGd5h2JeNePURvpuSS6w34Fy4g9dWwatpSz64TRHcVk81pzXaHL5kNDboFgatpXa",
  "key10": "GaaDWsj3smCy7nhE1w6VoUBjMwYzDa549i3mZPkcu2edDhvXPWJsuB7iumCqVWBDrSa9ditfqzVAUe5U9uXhLSn",
  "key11": "2a6obtxYQD12TKRgvXWsPitt9nvryFxsUUt6CteS6CGpY1yjxSdrsJCKUAVrEecfWKhDLhbnaqkbgdh345uRBKfL",
  "key12": "25rpJGRVzi54DkquH7roeBVwSXrcGaz3EuNQzPcHsaupLZZQatiTYJwNf4UHQC3bzJdXUokZHVsFvRLDkyRk7qgg",
  "key13": "4152ikw2AQpHbUxWLb98P4maSvTeT8ZEwGJvtzFHaANTEbPE4tAZujRyqNCZo5c2VLuQVg9VshHj5phKCg6NafJA",
  "key14": "47m1QXaEuKGyLUP5dTG7xbhiWNFDiMt1AS8qburRAAF5pEoajX5tsCBr9sDbkGuu3ofbzzAjabppKXPmbtPMUXNb",
  "key15": "4EbFRfeKCrSMaLgf6ZDLxCpintpK8iW5zT2v8jDANNFjdjgiRmdkMnJeLrfaSNZEZvu9tC35jymfCtFCnUwhZirP",
  "key16": "314uPUAUh6BYcBu8ZpZZJKqN2dwkz8jjE3R8p4xqSUqxKwrTdt5Q4jBXgnFJmHptxkbjTzMhPyb66xU1bXc1em5K",
  "key17": "muCi7AMo6uBof3ZxHPpaVsnPpqRKDSZHHFysigRhHxo2s3dDMtbfiPw4RQrEbiKZjbDQPfVAzbdXPm1dqBMbK6h",
  "key18": "4K5S9Tb9tKEeR4HNw1Zad1xg6oJ3t8w631p2YVGLjfBAo27a6Hg7xSY1KEoVzhtqNAPVTJMnzJA7uu1eRUg49nG3",
  "key19": "3HEQByRCoSZj99HKEoBJvQYprFRDAsHD1DYzpyiHQANFYaqjZqQMsYLLETgDAFS3J3FHfUZvKeDcs8LEVShXvb33",
  "key20": "2v8B4YSLLxqQocrB7oTjGn25fNRgggfJi4jKVQbLVt8nbWMmcCBWycsJEieWNYWqjDhy9JFHRnmHVVDX6Cw7rG1m",
  "key21": "5tUhuPB8B6H7LDQYVmUBC9MmQ9e9nmwNce8koQtuxvrjC8cx33BAg79eX1nQYUHyYHi1P36vxQ79X32egT152gH5",
  "key22": "3WzSbQfXr1UtSPEE3YrMkt3zV8xJYY5xKEXfsstYJL8JJuDtXShUuUn9TznsHgF89S9iVSHR9XC21dQvMpmovb7U",
  "key23": "3yuDBmKNW2wZCNYU3yY2gqvJSm3aBLTkqB4srVm6qzg7CQJt7kVwd8hEgThn9nRqyxGqJzvyvP7mu1UnzUsC7xeE",
  "key24": "4pqxuWD7Fm4cNzQgfrmuTgzJxaKwPdn6nGSNUUmWi41oQ5Wug4f468tz3TUNJKzpmsz4kMcDdr2R3aerzuBUDh5E",
  "key25": "31wifatPiHZ3tdxt8RD5aQBz8Ji4fbop1EG88rsJdKHQqKaW9BrPpvqF3T2AqavYuP2m5MGbDFAFk4pDQC8dRNnC",
  "key26": "2QiVW57mVjDBZy7q48yKJVNCm88awSpghMLBtXocrxgCVXFQekjtr1MpBxpcvCZir27uYYmD4mSXSEC4QwCRsquZ",
  "key27": "5C39Xvp7cNnLz6aFTfw89cgtDwYXkn4SBJvkyfQuDyoaawgQLCqbSBDiAgmwczqwp6J5AHkWRkBFA5o9igvTMt64",
  "key28": "jp51ZXwuRjAChDvPA1o6MxoAK3SGL91VxLunQNNh6NQxGd82AW4bQ5uZ5pvXVuuumrkJb2SZp9f4hiQwZCAmfwy"
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
