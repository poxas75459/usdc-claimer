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
    "341TUTtSWqjfcNk6kPyv9UkqbrKnTxZyc5oDSu9PWVd41xtSntpmzWPXazAACU3RLBT59pYoCRHyiExEN7DAaLCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGc3mnNAAGm78eaHTAT1uZkcNxfVWknh1hKcjy2AZo1uoA6WZxbgC83p6sZ3dt934CL6GM8UN2wakS8wPYZGuZQ",
  "key1": "KRo56dmnmD174Znx4tTbWhgH75H3T9QtvraS5bzMJwFkPNVqXDbveQ8r9NvgQcNxX4esWDuSAN7bx41vu5WZBAG",
  "key2": "4fpYiyFCYdKf8ygjpXvAd1WQwgSBw6FeCfR1bXPCkNhkX9WRjngUk8zMRgcSggrVcnSzQXq8ex2yyUdUvCdz5Kwa",
  "key3": "2Qt94AvWzLgQrJjwQsNsRLDRNpQapJk2MitzyFeT9ynnXXHZh2yga1YbomtC97o4Tjpi3VLhbAnBADzRCB7joPS9",
  "key4": "3WFKmpUXc6SS9sS7xqKqQrUpJTCYjGfpxdfkiQkTYcR4bJsnDw7S7bqkmY2caghE96P1F9BfkCNDr3aHDRTcaKAb",
  "key5": "4EEpAyTTsZtYKYwm4E9QvTqdzHLQP3KFXzTH4P362vZmhoq6oAYtf19hgtgPWyPUfQU9TmyUArzXvSo9mYG7qiRs",
  "key6": "2aNXtBaojGQrvt7NM5Mvvr39xCGKnXsSf3HM936zuPrA8DbozzNAvAwhtZqqf3uhpdcVXANgVTZ8KYoXKFWds2Dz",
  "key7": "MZTiEqqfemd2hPwR8D83n3skyYQHHpxf86RntE8ZdSoQ9QPXPGFqnN6MKkgkuE39wRbUyiuwConz7twAt2jzTfk",
  "key8": "5MPDXrYr67rPR2VMC6xLeZhiBths9RUCDhfzKY689APD7jVrzaP8i4dLKosizJBbZKFqiMDt7F35EBdDP2rGjJHf",
  "key9": "2FFnbTEGHrinuMuyT4iRnwgkX4kfsTDncWsUbiygh1ethtb4LK9GYKPgs6dHXiyw64s4BJqJnbjxbfE1Mcp4St3z",
  "key10": "3oGgFcycyKcF1QKVKxLRd67eBSqjjtEfF1mLLqhqkG9MT25CfPH8QKztR9gYABzEGZRE6Qu6myS2AQcB8qiHimy5",
  "key11": "2eC2BeYzbhWdYh8kgYbxGVoGYZBkW64oENRRtbBMxX4HUf7NXvSvEJSYjPB198MfFvtSB8wz2UsqpaFZ4K1VKvsN",
  "key12": "WCes3eXNd6QsYyY8PVKRJD9psodpEvvYa8ygEwyonTxNpVfSDhP1YFxB5gVJqbrCnSEqDMUygMcaqCn3RCskHRx",
  "key13": "WwsQUDMysDXSwvho7gfCqZnvFb294BFzuxxFp2hfhemHJnYHqhc6PPoeb6VNXLRBfBgbpUTRJn1qmbAdySAVxuE",
  "key14": "48KAA366k5yvccgMCFjJBM8c3N1V9iYTZiSKCvrDiJYmT2Tx1T7F4aNzbfbCngjk6zWZTDTa7TwJpPgvunr3uJtA",
  "key15": "4iP2XfYE7BWYXe4JfaWyLajKbDmmW6gSsHwL49xKi8zx4qYbPYuUYSPBD5XFsf6bSkPiiJfsDs77bcDM9UwBTK69",
  "key16": "2webtSFMwFGjgQCUNf8AHXpwsgVeXHYjj3J1mQJYo53KeYuvVkz7jPdDGStMPFY4mqYG2E8DG8N28yPevb9vDCbh",
  "key17": "3kMGah4sMmoy63EHNHiyx9ADC5gMspzPaGMtHngq4wc2ib5Y2QWR7DPhYfANqapggJwwpeVkSQHUh4rBGvUWGhGR",
  "key18": "4UNQdNNzB3gEE4Ci6y9EwgDFRHqGHGerxq8x7C9g3R9E2ALdFY4wWcKvFEQw7BkotPTnNHphk9HHpEb7ExLHnsHw",
  "key19": "3vyXiHvshxssVQsZvpnGWdSy98hGJhcpSbG7mhCYhpwHp5WeQ9YsaLARUJiTpmuNejx9rDrKgD1GVtD4CWbfqH6F",
  "key20": "2HXsLjWSV64x44cPfV6mhx9VdSDKLXX51qg725pXHnvg95nPVb693AjmpAhtCSA6VWbKunqvSKNxuyzPN73Q5Dvr",
  "key21": "U5GuCDTbt8M2FSpJ6y8X1qLnyaDuDKpUURF3xd4opBGYNSn3ZSBV8CyM3pApCfjLFHDxFyeJE13aMu8L6VQyEuy",
  "key22": "5JX4CEA9Lj2s29TGegt6NMyxEw3GkhEB8mS2hapjBDdMVvdfaZ4tBqWkF6fWFr7hv97EPVpaXAxig7vqFgg4etY1",
  "key23": "53zGFwNA5iYC5B5FeDTVFoJDEZW93a9RcuYPNaRXvg5zv7BcMqRodxFppKvebkA4vrS8HjB7sJ2mXzhqjnExga1G",
  "key24": "3h6A2pzsfG1z3HUkyFHcxNhyV9qTAAtDpV6z3kn1VgxqUbmNL2wizAUZW9S5cHZ34Y7CkEi2fAiYh1GVQWRnhRy4",
  "key25": "3Lia45WkZ2G9Qt3i7gyzygRbF6jxkaN8mto4coe9YqULfRj9U5Ldym3Vhb7Td27WcZGgnbqbJPrymna75iPu35Jx",
  "key26": "2x2PAE799DhvDyRS4SGAcbgd7uFsa6DLe9yoSrDYth8pyiwMupr6qjQsLo1c8nLe7EwPC8DKrQhj4f2JikEj4jmX",
  "key27": "GcJoiMuLdxS9ujXvfCsVUZYUCzpVE7aUtu2f6q93fdvHBKiuP1mjVwhCTvLtwYAUBEsXdBiz3ngaiCdQgn2oxjj",
  "key28": "3CSyz21YehyCUnMxCDRymrfKUxjHq4BQbGdEE87SAuqe5xjKYuEEcaTAPQ2wdRnjV8ERJDp65WXAqP8mBSdS58he",
  "key29": "kRxfp74Fh5ky5ArZ54Hy5Jm41qfXdiaVbJ3eih9KyhVnFt6ZP8TmbB6KmPJQBcSZaShP1Hp1FRUFYH9UMNJmEZq",
  "key30": "3cb4AvXfdDg5Y8W4K3MKPXXqXqwF7MPybGc6octMtCzWm6CoR3PSG2dKmDba6ia8UKBVd2SAcaHP5WMLZaqz9Soc",
  "key31": "4KXwbKfrwwNfDYwamfD9HvcXqyHi8Uy3BbKw8vfgKzbadL72SQAh9wV5NGGaiXYM2MWJaMagJLnPreJWh2QGBQdA"
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
