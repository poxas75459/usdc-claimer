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
    "4gCjhiWgydG1uCijxQQqP9NirvJSaV5ePh3gppvzgxbJiMWswYxfzdQyExpDd8DnzHc3sSqi34Qp1MUx1ByQkEfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnnsuxbLaaidv14AZBV7BKfMKKAgUrcDmHzFuALhFNsHoXPwxYj3jgi8KqNnkTnKVnBiEf9AXD6ZYZReaMedNfo",
  "key1": "XxagXsQYQhNET2dZ1AJBGVKVxpoN1gtsQGyfwGtQtktNakqMphHR3mgDHZzPcGSm7fTyaLobmWz5HLfkHydLGkR",
  "key2": "Wg1AbbHL3ETedyFrHNBesK2DUC9KwfAAgyuSmPFNvMzayyerxM9HHxod869S89WH84bHHckgHUZDi8HF8edR73M",
  "key3": "gA6r7kmFceRRArocDSBdXxXkczwNh5FMhixDBQ3qM6jeeTNqU2RA32dW6ndruy2VT8NzAkrq6fxoES8Cyz5J87w",
  "key4": "4sZHvj6KvXG9hXSPqXdcxvDuVEaggFqjVLXpaz7sXg3aSQdUZt6HLUP2MMunLeaaWjLxuZQNrUCCVpwPeKDPh9Rr",
  "key5": "3kWW4dFuQKLAG1NxQcRm4JxEqqb9R7REEk3av7kfrCsnJjmMyAdgdQ22jcnWenS1HnbuPF5wzaBSvPiNme5UZD8M",
  "key6": "5vrc9Bw2f7gxfkfinoNU4a6EgKoF6B9625eaWG2PskPpsq9wdMzong9e5fYAt5DZYkiBQ5Twxg5UXqr2FTEYMEts",
  "key7": "V7EKUS5XT1Yyw4EUdYrQnryKDpNpW6y6Jk3TKhtwY49WT2r8fMKkSz6iQadpmLs41DNCU7PTtBDMm3NeUSvdnmZ",
  "key8": "48XViyLiQjgjPPeZHKVWdaqMQhqCMwXsisVn68SL4BFCYmQQrGKNiPDk4GR9LG9SszPutjnuHtzxZbe3rEesZ3SV",
  "key9": "2MAGCQ4QST5uCbVcfwTeGda9Pe9h2hWDi559ETKUYJNrREw7q2UodWXNoiXd9TSewecYcQqbwLQBWSCS73k6WtZu",
  "key10": "3UKiBJGZwWFb3QCsFJf9Pzkibv4JLvvBaHtUnRbJx4YFdw7goiEAAEyurmZRj883X2J1VaGMxSGq1cFPVsiy292y",
  "key11": "4DweSchGx18iLA4nUsHaifSy6Sdr2VKPKhMajvuWr4Ufn4yZa2EMKWaVoKeB3osKKKrrsNj8n41SJQyREMRe7SCE",
  "key12": "3ohQycR6VHjggUVX8BP83Bm3XyLs856GUPXYxq7tnGP8n7uc9Rk7dzcNYhbRaga9qB6mmkp9bBUkc8VzC5adCHgG",
  "key13": "ZVqsPf4T4ppQMvEhaMXBzZRMVELYo3RAk2XmnJyiujLbp2dvLTLzRPK3bRH3kMAFwMga7vJh2SnnTNhGK3tQgoo",
  "key14": "3NhsXn3Wb9itr7z3FomUgaygcEAPhVhYUrd2nEqDohk6cPJZWFNcPewGVS6TVZQKRTxYPb1mjSh3kRAWD1dMsA5o",
  "key15": "2xxofGXursDrjgQUokTSK4kLt5uS21Stx6F5EE9esJGspyzg9Z79trrLjp6nPAEFUq5eU9M9F1pS6GMiixB37UDp",
  "key16": "9hu279N5vPHgnZoiipmcXxrsiGwArWDtxQHEhBFbo8foL8djPp4eGqCdK5qCkwJCo8n8LvJKXsZzAzZyiAsWPPK",
  "key17": "3oZWpGgSKGe95ctHtFnWexMjBbE9KQQF73qQRgyr6EjhnH4gsRzpAFW4ygw3Y2sLJ5avP5hLUUuWhhNWStYWCo9E",
  "key18": "2LGQEXVeeN4pW7quUGoSUGeXNAoo6fiMAmyyobU89RDoZMvD2axN1cmrkwZDMq3b8A77KKMJMePb5Ag3WNwfkEdW",
  "key19": "2q2ZgHfEuNFeHkDXMiRpcimDYdMPPox1rgnxQZGhQvy1yF7nXsqVLbHCUEGB4snZidXxTYY7f8cFNmAEHFkhcPHR",
  "key20": "2u4WnzCy1EqfdiurNSfbUChzpBVagabvKEdYARvhkfkZzXHrEAxHLv4HgvHmPYZnbo4c4xhKP5emsu7d1g5Qdrhw",
  "key21": "3SWzgX2qSJLshWe1SduaSqBeQ3pKcw5LxYLrfYcDSZSk8vEpgHMY9rgH8rJRAs1jvxN7NbWAagCSAnuqR3XzqRdy",
  "key22": "3ueXHQ8sYAzpaHkQeNeGSwZYcAygoh59NtzDemn7p63yg7gWu6DSn5itCyRUvMWvwYKR5SRWfCL9ACDcz4mHveDf",
  "key23": "4iyThg3k2W7vC6wR6mPFYCAd8NZCNU8dM9DxMddTbWPT1yFKFetTKZciZwpGaAyuvvDYqcSnAtkTYjUkFVyeKcWk",
  "key24": "5LjYvfBBfEVaT2yyegLZXfUkshCm4NVhxp567L19fd7tM8bdu1qrAbCKh64M31L5wdLhVjhDFHKGHEmexzD1hEZU",
  "key25": "uj2iXvH8sUBH18ht4wXVQVL67KDFNfAHJhjr4G2vUbfN9JbbNJVCQcK87puh7rzV1JDCLMXxx32sFKETUh5fzB7",
  "key26": "4Y3RDX5DXrBXmK2LFWHbPsNoHw4cgBfDRVMzZfzdELbNdkLFAkExZ2tMZB2TAV75nAUQGAcoGVq5iCvonqCLymAA",
  "key27": "32oE5AsZvDnpw8DxNghJ8G3xKM81qpNM4uExdY976UT2YYPcmCJwTWA2JpRyRQ933Qkz6rxKhUNCTtnPepP1SmFj",
  "key28": "4HPbdxwv7EFZfuLTzSct3bwV5UcEFuqnEVVVFsuW75dJnzWH3Ho3U4YXGUNriSbqpzALS4WJo45iWxL4aebjPYps",
  "key29": "3Aoi7Bcw73sDqVAEeE8yXM4L4FE9mRHDZt2gV7Z8LHRqmeVjbWTgUy4q5t7YfuThPbmxW3RLhTccYVyTiQxvQWnF",
  "key30": "wEAcZ8xaDJKWSTqDsHWMsLSKrHzCHQ5roK4Muo4zR5QTMVeWzfMcXQhrYCtXdAfv2JoJ9FGvmzaNB1zFwUmUbKs",
  "key31": "2L5GoD3Ugf9E6ReFe2HGH7qQZayzaaDMeuzMmqE1rPoG2bG17nek9sUEEz5SH455rS5FvcR9ri2Qr17jRdPukNP2",
  "key32": "27vgkzgdRmX3UerfN5HT9uGboW173fBxijNrko5Hgk7x15gu7X9spwEwTxkvhmPSBkYREMm7ounQtKbVJWbALKPj",
  "key33": "2X4D5TbBFLhRpzHSc3yGSuMBa4ZmY6MkQ7n7EcMtWxuSUqKKzcp8eMRdmWzkJBuT5HCgigxXshLF92D6eaLrW33g",
  "key34": "2m5y2uhEj1XXsFfBwVyhXkxA4MjavjiMAHFDDZKewWuvjHH6f6X7k3MYCLYdXuSeBKPQEfPfg9WBezN5MHsgSUJA",
  "key35": "5hw6m8nhNJCEGA5H91N148pSukyH5PiunEapA715h8p8d9RjFrWPCqk7CMeX8mmcKYarWEieSgTGKcXM7RvWsWCo",
  "key36": "5yUBQfZ2abnQGzg5qYwE7YouoxQwkzPs4eNv1wDoE5pt666CUXsyZAD3aGzN5sHy1qABTmJ7JvEtkhfiL9PJjBS8",
  "key37": "63saDbCjqKunZo3vVXM7dcFr2Qt7acMQ9XejWE5br7GAPZZ2nVZ9reUXpSYQVfwVwKUG1cpNTkNWvTWFwcva8Np2",
  "key38": "3d862aTHganBef96g8yRUWXJevzuq3bsC92pMw4dfNWKDNmMSkDutSrdN49kwcnSrQdAXTPcjbA4XDW4mbwwDgh2",
  "key39": "57HbPopnyKTFfuCLESAshk6LBfnZRPYUTZgqXHKMQ4mS8YrcuCWqGFbgrndubJyTQAupbdLs6LuZRmPipNff5qP8",
  "key40": "2uTYimbduF9oAG9poT2B4WpNr5ohmuDTPKtNT95DanmAsBLDcHJN1MreafqsSKeF6DPFKkbd64WGrX2cVH3mQgwf",
  "key41": "4m5BbKzhzpgkpoPqeJmnLewbc6gbyUxU6EQD7WUEpLPEzAekuy38ntCeBFMRvecYCQQKte9Amm4iaJR8vK3EX5iG",
  "key42": "4yRwSHkwSXF5VDNeyqihzf16vgPgsVQWQdc4cPDEpta2Z6bSdhuw5e8SEXW9bEoQe2zCbGMmXhMAgMQ3F45yV3Fh",
  "key43": "YRsNFgMJrx4rf8qBmCzMngnEVf9hEBCTPRPSzNPfE2umVYq5ywuV7DMoFudnTJnbYMDgPa77tpyXUperkdC1TYD",
  "key44": "4nYbrfxx1BneXAYHS1yCi3Wa83x2S52DLhNVCoQhhSdkuCK4UswZYqRCRepihdWZhiArgpbB8EHTH5n4bxpY9K4x",
  "key45": "XvufbMvjizZxZL4GQRB2NNYS69RMu3AC1E9hMSkdkX9kbQn3bNK5tEbw4MQsbvz7hCXw8AZPJLKbjVGwB3iFszc"
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
