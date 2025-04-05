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
    "3frjUoq5hpF4FgSPDNHiEGGcanzeiKDAcXiqYc15KwYqin18cjC9WUwWfc7Vgta3hmn6z6coqwZ47aRp6ZuNEHq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Egkygr2qLbZwvWK9Dy3CiDiKbGnNXwcfWHbs6EkdL14JLZ5hjc8E6Xx2AvuwYdR5Jtv95zxnKLPkPPzQFqqwh8K",
  "key1": "2GbSZ7LLC7cptRxLu5DW7RsuE5hfCAfSwgsdTHh4YnMHW8F48WZmvygdSsNooJakvU9Cz55FUjMGWFwP9QdvA6BM",
  "key2": "3Zd1Co21NpwCFZc6jXodTw47d1F47XnqftBMszpcKAjFZvKB5oFAo9TrTg6nyinMiTYpeZuYDqSEng2EvAggBwUv",
  "key3": "5yefu9T2Ay2wM2e8qQyYMJ52i5Ze5B4ukshfCPAHApZnhWi9kVoa3ftn11yrdmA8aVApabBfrNgGeuW6xj1sUjdW",
  "key4": "3vVze81eSJKMTLjxQLar8bKutc5g769TfbeUyjMa2bXzBvdMWDyYrSfbXxRFXNAiuJaJUt4teobPASMCcRNhsJkj",
  "key5": "nxYZoBLkHY9GeJKcyFWcSZeEAjdViQxfPAa9snfLBUdzmyt8HACiLKUeLnnCWduZ6tLTuBhPaNyHWASurVLdYtE",
  "key6": "3NXTPcRVxraSxDQrPCksfJP33oiwkMSXTUeVv1nH5xWgkkZfN7HQjtsTQobhK3fmtd9YvSqcBicFb3w7xyZKzmiB",
  "key7": "4Mufzdodmmbf9hDFSrNeEN1VdhqFNHFy5dxoYRFGhGUXbqfJ2hD193zi2sEDoz2cw4Yvw2Gbq6jB4Q8DR6g4nbAE",
  "key8": "3P7E9BU8vre1wWpwCEjCgUKfwicADWVwGggYbsG5a7CCFSfiFmUjWqaGNRT6tvdqzUjsxs13DVPzdxLjJpjP6WA",
  "key9": "2J9ZVjS7EkDq8Z3eBMZLgk1JzV8QWWXqmyy5Duux9Y65fYwsGRJHdPEpB8xffyZEJkaV6gQY4LBF3q7XMirYUzbx",
  "key10": "4Fax1Hr5Aza4guB3h76aYd8jhZbub26uLAoPeDjsKjj4UpjRnXr9XbQTAKbssvPEJUP68novhEJH2Jz4AXHTP2KU",
  "key11": "3Euiu4t3mwY1LLfw1VmE61oWZmwL2mcp6SkjfykKmR9yyDy5KqsnXy5HPBvdvF3j1BPHEDqtK9Zz9oNMRYcTinyW",
  "key12": "4iDP5BYWBjBXBEFyMfrnAguwNap6TZTzLro3XjVsUxRnQeDEwqjs16Lb3LkrBifhZy8pxYa8hDPPDRawgJscot48",
  "key13": "5dwHkM2mLNraqDZgxNY7FHs79oqCq14UoQ4omtv9Z84bUncrDNsPh3n7SXpgHx3wnuzHSHNs8UVo2V2F569aux4z",
  "key14": "3qTUVxyMGdiySMVvQnbXPp9AAT9oozS6UHAvaVpguc7JoNmeiWVLGFp74c2D6qQmLYdUQqhpUvuk8s1GKJePJ2QB",
  "key15": "4kyz63H979TKuA4rCajDpUJbvVK4ua6DZYJt5Z65XbAySfs8v1mmHT25sAhGYxAZ76BDgYAchsBHevHbQVwPqrDx",
  "key16": "2GSXAXTtGQSsHBmKviFjwav1ibZMqV89LVnaPfHPQNG86Djt4yG1PKH2wYT6swHHm4ZZtqEM9KP6rhJdCF4746NW",
  "key17": "5pN1SQPEVz1ck7PT1kRTxGtMax6dRAmVsJRD5BDNWZR8HPhDUJEoFXEtVtoTz4SVkaeuTCGwrZArzYurBVKBzeD2",
  "key18": "3hPXxwXp5VcYUaL2HLNAhwega2x47Zn7dd4fjY34ENxd5LAnr9qrRYktnW5EBysksRpLKSkm8xR9zefRSzf325uT",
  "key19": "5SWWbd8Z5eYxWHQzgD6qon7spSM2QTrTtWJLdTyjywffTZ7QQxAdttKuTdBND1ZRFtfnacyvhfZf7MY9jXXrRHP9",
  "key20": "f1FC76E159Awy3dLDe8yCr3PeP2wFucnYP1tU6h1qnN3yYV7chN1Csjoirn4riqk6SppU8re4p2DFx3JdaSJNP4",
  "key21": "4xhw7vjgUkdtFfAVneyWwfkXLwS33vGSiVEegSptmhsf4yHuHmf2HXDTKfvPGu1Jnd4vShfq3upxhnvxU1bmFJ92",
  "key22": "5TKizEyWrjHj3TDJvCUFjNWR6SmBiNqdCiPTRJDxziLwdhLiTW5rYP7XhWfndewAf9yM9bBKYSQGutCpQYvJCEL4",
  "key23": "4dzRPYrPL9qvG4Ei7QvprVbvMFioQ9z1WhKy5Lpu13PCQNg7zV4rmifdfbxkCeDyjPRfrJ97iP88n5s8mwwGxCME",
  "key24": "4kWgdU8A8bm4cwuhajXW6erFyPBYuQwUyNafmFa2pwLS372o31oJuFwHgtw7RRe289GVrsYuz6DgiP3A5kNEmRfK",
  "key25": "5ewSyzTi9eaXkywKNYsEfukEFMR6Ka3dWT5h3Fxa45t3QNgdVAkA84gjiu2tKtj8RYQNYFiZE2nH4YtY6Yko2dqd",
  "key26": "3pZf6GveoRetWvLynMH1twcN1W6TFEq6cLboxAaaQf7DnEQv9c6bkAuuHtMmvMd2XsWrPmASbX1auMqCVrmipkca",
  "key27": "59yUDRo4FZ4Z3M9u2M3oRajhggJCzU5uqZoRksupzeG39i764rEfepx6Lu14TbvhM86NdRQjQgSjCqPdVuu8TDG5",
  "key28": "49oWpPg7EUA963NE9bCBcTf7uV87CvAYP9dAfGsLR11ttpmF68R165R5prVjeAin3vwQgrQ23LxgSB6tFD9Rd2FQ",
  "key29": "3SJQ7dL7f85k4J4s3dNLK6FDcGn4V2Veh537nfPaRcLDuMuMAQz62TCgW177ZpYciKbXRXWJRoWSnn3rND1TARgM",
  "key30": "5QrjPo9mpJWiVaWiNo2eMnrwWHoTjUJoLB8xii4yvQ4RoWmwpCPqFMU5fCXJwx1kQv115VoWoRBuQCcxE1g1cnHF",
  "key31": "NwtzPTXCKfoPqJ7i7saZUe3rRUca35BWnSHZztt2Et8WnT5j6g6iu2a89ZErYmFVop7QmgMNVQJtnVq2ntqh4zC",
  "key32": "5fXiQN7z9ZDwJcLakGPEmvMBiAzyUzKYFvBtV3korwsS4nDVy4D4CMDYPF7zzzhNTrUtukRTuA3AvbTjadSSvf7W",
  "key33": "ueTPBBjPjoW2uUr9GZ1Ffumb43DWoYbjfCMWBMFazz4QoMRn1xA5jRQPo5ncWgudHNFbJjEtgnHa2cUrdnAkD3a",
  "key34": "MW7EFRtSHgYmpac5Pcr3PL3an8y77xaQX6ic65UziRUJYrns7JVkFW94D1EwreDfVF5PLqeArCsoGf1gP85uum5",
  "key35": "qSzQXYtq5jHsqcaRLB9Ye4dGYNw1B32uyeBaFhtMSCHSYYEn118RPD9eKPZ5WkTMaVhNbKokxbMvNdK14y3YLxE",
  "key36": "2KpWZ5NK8h14yE6Rg5nWNCMcFpBgZiP36UcHX37MdTPn6fZN1w9RzLtVMi4zaH9rvDDuqCyhohE3gKiPnxX6CndW",
  "key37": "3r8uXc67tVndHrGWGt9wcXpyjECX7LWvnhsBVwh3G5D8ki8uMQdvZCcTtJBeXquoD7DTeZDq6kuBoKJQr6NMkWj5",
  "key38": "64KC6xdRWp3UENB8FS3cgDDAxCm611Acjz27Xy5TbcMk7WHYuAoHA8qnRgq4Nz3WtULrLDtqUoxdmUA2Np7aWtau",
  "key39": "4zJxj34bkKcWqrUwzcjmio6fnFtfjEgCrThkKy7FWHEqgoAjtBHWuGALG8z7Yey6eTPU7qZ9iQjSyAuuRxC3ZxP8",
  "key40": "49kg6Tr8VZhQpMTa7C6qtXp3dnhQGFxyqStV1f5Hi3DQYafqnyVJJvrtt8qQm7vZfWuzxPCB2FbBGKzsc65c3CsM",
  "key41": "8ULEuChFypFHP3N3Ea2pR7m3UVodh9UrawnToAVo8Fr5fKwMG8dTbm4heVVF7opdkEye7yKxfXMe3GFgLsLj3QU",
  "key42": "wK86MQfqQ6agnCESWye1thXf5NCPi7mB4exo6kS6awem7jYQzMg5Y83N6uaqTszAWwcixjHN4UQGhjcZdaKGyXg",
  "key43": "3TdzwB23vz55iDohSjbNbrQvqU9E6hBEBfW1KgiZu8MySsKiJv2TtpuuX5BgG38toUsiXvLtpfRLDGMSWFhxzK1T"
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
