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
    "5qRRoyozp7CjnmAGae26NeoFxP6nvc8qeRtHANknYXxQhZwkaHLTVkYQiJjmAidxGi2D5VpfEwtWVeY6mzEj7djm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dk1nJuNYnw9gMJMhf9pJYuRKUsbiWHiU9bTTBYcuz27wyx8WdrENwHeboQvAh4koiyyxFzcQ4d7z2jNxE2wLEcZ",
  "key1": "3xbJMNBFpxtf953xJfQTmDQ8fArGbDwDWtwE7JdS4v2vEcStqGZyUZmzZsn4BQQFKGtKmkCtkxzX2VsUjDTg5CP9",
  "key2": "3jTB3uueGLMDxdDyvCz38dCZZ3xc4zEmUKgj7uvCQ3jSv53LhR6zLukGUeVV31yVWMJumEucDfeeqTiz68c7LnZ3",
  "key3": "2D5NuEzAyiskccjUFUmWJd3RNmZRng94QyXeqEGsEwV57b5oDhQrRtRRf1Ue1sMQwRr3MkyrfPV2XMedttqwoSME",
  "key4": "3EcGJiBXLHj2TqcJnvfYJ91p68zmgfZ4kQSUaYoadt3TKWG7XRdzLrNeiDKWcQcYQ8pxSSeGCwKB7gopo2TZ7fuv",
  "key5": "RusnjPWKnLtwmLeEVFFj3B2uGq4Gk2PbGfLSjNCVxpezxXC4yPWum9vXTQd9RWCbo72GHmF3V1RchpADKRyMAn3",
  "key6": "2qbnhWYM99jHmVLjYC2CRiRzhhp9HTF98d9d4nwdi9cSsotYyrhyi5P8zSNHKwVUgz6mbZFjyivR9jXd3Tmn8WjW",
  "key7": "5umxXgc9psv7VqhWXXWo11tKq1QCVE6F1MG4mm7oS5Ches653x19GaDRVURWbZv85Lntx4mbTY4Cty5mT2m1Tdfm",
  "key8": "53JEA2RyNDXAkpXBqrRgMyPPC1qervhrGe7VBjACNFa2YSAkAK7QEiHGcW2sQKT6ZVF8ky1TSDg4Y8jgqabP6b8Z",
  "key9": "3232fiw5fSHxB8kk4f3HCSfYopSNXTGEpyM7HBiimi3rPX192ntZSKCYCXwhaLxqWYNu2r93nSEyu11n9cGB2g2x",
  "key10": "3JTUNS3smyGkvvB6JwBFomuKEZZoWf5azwEz6Dj15vJ2nJ2S2ampwfnbbjstpk8QcX4NpQrddxDMhihiiWbXoTpj",
  "key11": "2HtwV9M7MddeYPkXYN8f8gs9VPiG8qjZKyZd8975xyrUcs2fzUGh6DTpKo1hZ5KC7jtDr3im2T7BgqbAtwiG2GuK",
  "key12": "4bc5HXoZyfnpbtKraWx8ekh22imYrw2cUUS23X89GXDQQA7bDCxJn22639YXfyn6qqseokPHpi9QJJiddDyhSWwM",
  "key13": "5A5xG7Jjz93PaXSmdKcpumPCS7arbfGAcGV5u8D27KCWrR9ZbgFu1CEprsdTA2XhViV28zjTJm4BbdBsA8c7q8Fh",
  "key14": "2UJCNRXaD6eGBXXrt84TKKRkc5gCuPoTmVJ1sdZwP2FUDnEHNGJ4TvTdAp2wzxaWrVYNPSYjCTcKL572bHhqH7Ur",
  "key15": "WTkDwGgnHKFUYtrtpRewa4bpy7taawxxE1t6FTnrytXywL8pV4d6q3QUACPeCFGQPMWmHcZV9rT1R4cXK7Mkn9U",
  "key16": "5sezFja5EeiikoT3UxejZ2nQkoKJtA1CDsKipVtnTeYBy5VCD26jx9QZfyi4TqNqkPYyd43dPjLHLfaFdkywu791",
  "key17": "4WNyqBz1tJq8bko5ZWpsu569fPfCf4X1SHiXQX1Hdn5DXqdLm5xoWnDZBnqEYFzJsgVkntzkTJgXNnvuTpQE1cjh",
  "key18": "32vLqC8jMMsFpXLtwtAR8eRxYmztwrxxT4YtZTJR48meUab69KTHSojTpbQXnkLsxMMM33RxVLhanqKbPTdk3zMT",
  "key19": "4fEneuuZ6W8cjhzqGbHXE5WVGyqE8VwUYNAEgvCccB76VBDJkgGE58bazRgRqoEXEeKJtr4UmVrrDmgxYRYQwReH",
  "key20": "41MwJ6exmwHpj4FLngc6X4kpJuUKQJgog61yyi5xornx45YQ6zrekEwZVqopv7zxH2VqrCgSkBfewe6RFSu1mkNy",
  "key21": "4QGNAyFtSUmUAa8tiWER7hkKEKFFAqE5yjsq2PrrAQN5pV12pQDHrkRSYRSqJ2SHc2RQSvL5NpKhpfT8PJCHDnip",
  "key22": "2nRFSaBANKDL5qrxf7joMggqVFaHorHPU6gHaYjB5ancmWTo3pi9mCCKrJYwio9S87rPBC43Hoexzp3SPZNbedAm",
  "key23": "3i4TZbSKPPH9NDPwhF6Rc5TsZzttaDUgFNehPbVwSVUGRgZM5tXFJupQww81ca6VwDKP21Hoaw8C2pm1bnnQUULM",
  "key24": "5m9Z6q1fvz5imirgEUbVTLRUq6dYrDMF7uwFMor8MTVoHtFpChWe68Ac2RjF3CsNRCCHvxPycJAm1xu5aqoVWkPP",
  "key25": "jcenag7uREpG2BCs8cmFmm7yREjUosG1mmiZgfY7V1mWNjXvmjYi3ufEgnK4V4idsWAwvVU5SBzuBnxNEuVRvMJ",
  "key26": "5FkwASwZrFJKdh7G8uBZB99Q1po7hbsMaH5aybkWbBN9eXFf4VS7XDThhGds4UY6Umwmjs4JQcSMd5b8NdFZ2mcm",
  "key27": "czzpSK3zVc6Ad3wVpx3mGfWNfkKa5LkUxYDg9J7Dn47MFP2bJXKtqt1a8C7zBf3pd4CEAvTtsXaSQuN58MA6PzF",
  "key28": "66gwuHzcoPbVKrwzmgLegNqdebyxo9Rb1VZREAAHijZRd26X4sKrMZoNk4RJCXEHRT1ARX6Q4Tyr8RrAnisXixpV",
  "key29": "5muNSDECo5TSj2A42tdUyXeQC5gaHd5Ngo8eoS6PpnxXVnS71hhwtndf3BT633UcGY5Ni7zk1zCdrWXngVN5KKBN",
  "key30": "3G8yF16UY5i29rpRppoX91gWRoYhMtR1mAt8QXfLZFZAdyW77MmPd9BF7FcLSFkjqWegqi1U6x1NgRYrNmafwCxN",
  "key31": "29extQ7WMXrHTeL6uXaAGoHgTys3QqiYpu9D8YTi1afQxtCWR5XYt65saJaCinTP33jaHxBcvpURdLz6SdhxEk8r",
  "key32": "2kg2SYmVR6QLKwQcV4SwBXz9HuUxgDYkcsLuDVtkFZoUpJP7gSwhZiUobA2Tr1SxYHooWukc2sRXHZWFpkNYS6rM",
  "key33": "5goH3GYTWS1r9aVCzaZsu9jWMbTfQgBbUBdfmUxJFgn7cGBMbhCCZLuNdd6s7NerdSN3dewKCVuA2qy8F2S9hHH8",
  "key34": "51Hqy2uABJzXuqdDPmhyrTUkfZZ22ZVcQRA2vAWrpUtimmPHSSVSk3bxkC9qzEKYhF6Kb7RVuaFSauc1fs4r6VX5",
  "key35": "58aRDN3v9Zc1TBCru1xFUTbsrYW2usWmkTfytTcopsiAt5LHYrv5y1pnmVHca8p72PzBPzqPJYUtkSBuA8cXt5tU",
  "key36": "5prwjjHyNJZwYUkgJX7uXacgakUJ9LEpzmN6UgE9buouZD8tmCHcJQyraxW93TzM92UNAW7VjNgvYXJjV35ZTfkr",
  "key37": "3XED4c48t1AMNyhNFcQgXVvogugyRWTytbq7v9RyMxTzE9npRbCkojeD6ttSNwWoH1d8shU139sMAxSS7V7TbBUA",
  "key38": "E1vHsMdnsAici9FZNumomAq4aiAqfi4axptU4Vo4tnYZV4AKLMtR352PcAAhnV8YBF1KcfyXSwz7ncKjnhzovSz",
  "key39": "2eZYELrEoVyH6cHTAMLMU6ZmaxkAAB26bMvckHvrPi2RetFuNgRaoBd5c5tEJUexN3wnmaD8SAtYNd9vgmmwcSnW",
  "key40": "5UKXooB3ppZ63NRozQsSfhJ79cs3B5DADN8KEQPrtCJ9Z6sC34N5WHDKP46UtTxWyHATDdMiyNyyzjhxNTXffYSe",
  "key41": "2sqf3aH9TCevoMA18ZbohjrDz1cSxmhdHkTrUBYg4e4e7Bafkx8ZtGk595rvofDhLiqgPrD2Y58quQBywgh7Sbp4"
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
