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
    "4c373YxygMVVvDYJifz6AwUVri15Gadcg2Ts7qd6ABUjHzyyHw5DUheH5bJLzJFSHDSCiooedUfbagw3hGwFWaHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9Cenabru9ZxDNEgkJARKEqi2Jte1gsQ5mnxXprdhBS1oKQeDq5UnREo5LZ93u3A3vqz8we5kZPDXYAEj6J1PUR",
  "key1": "3BMY1apAkGWn3FAudBvgW7hjPUFb8NHGCTX3HUpikE5zrPaY4wmXCPpLYZg9qCqM6CQoZLkoEcPEdeUVd5MRfa3y",
  "key2": "3bbgudd3xYJUfgi5QXEHsV39gu1sy6q94ALjFTzy5LhzmdQGqZsGbB5xsQd6TektDxD7wQ6LKSbj1vxSKCgpdtio",
  "key3": "4c8z1Zf3w7Samg55zX6PcKsVbzhehcBMjr3CUzzVz8fn3DwXc64MZH2CGaZtGVEWwZz5c3a3gzerEzDY15WhGpUn",
  "key4": "3Tb9eN5tm1bd9GUMDHhTdHtPB73G3VpbJDemD9P7k4f2amh8nsFm1mH1ivUndmg5xhKhm7JctMtJGJN67eZRaX3A",
  "key5": "5Z4ZgsFWgeNUBQFj6LXuTQM8BCcNkRMK24Vip2qauoLnbf33tNtjUsacmoQPuojNxU2o1q9epGnYjtJDXNRXfF1M",
  "key6": "3Enk12hx7C1shfUWzk3ZUgHfRghcYwg6UYj2ghZjRU2g6QME8gVx22LpGh13QsZRxad4yWXB5zAzS1drvDcVWMwK",
  "key7": "5sx6iGHE7dhpKCtYSDESSHBSPv7F64K9w9NE1gMQP33UpHdzXRd3y5mQ6i8GQPcwy1tAjHKidpg3KvKWgqdEKEn5",
  "key8": "JZSVNm3heNpCwhWT5Tkq7dCZ5aEvUsGV2WMduhiyoFUykosVDuaaeg2pXpXoCMp3SVHuGpBYcvJY1j16mnbChB5",
  "key9": "3YoDE1q8cL5QZAVZ2GZP2UUFxYAzsHnAZ58GTkhqgmJVfZbxnxiLVWXqmbZe7b1bKaqib6XvzjEmVQfwqfmJEkLD",
  "key10": "4Fx8n13WRGdda8Nun68hpqXwisRtyWgDctjhsrzwULuSbuPbAmez3zYX1gEvugb5ADijUq2kCBsFNckEjzyYPTtN",
  "key11": "2SEWDmMv5xkSSVSeyqPD2ohGu44y7PwDZ2qg8bhrpyiQRo8A8WtsPhfbc1HjpiMiQhDH3ufUXVvMWn71Sxebhwfu",
  "key12": "3MK4QUtYtQN4m4cAJEq9ZnLwowHWLLRPfqtaQHcU9UrohRbtPhtddVzciZjDDYFrwGC1MQgE7Bw8MtuMaqJvoEUf",
  "key13": "3A9QWY3RYbnriSD6ghsFHoBcepakPZr8FpkEAGxYcBWhXLtAyDN9PHiTnjJZEbv1tHXzpeLzgnVDXg6DqsPQUfVL",
  "key14": "3wjopSdsotDTA5acrHvb1N3oWzgmdACjdEt4ffmRiKozpvpubWAYiTa5Sp3Gauk6vRVkwpYbahTNRAgXctY8UCPU",
  "key15": "3UujEgSaDUdvCYPMSv6t35fdhtWwNnUZN7jWqQdELDdFu5PaNEi5FmTNaBPFMmNcDAAdxQU6YoQkGY7FdY53iT4c",
  "key16": "49ATwztJcTMWktxHhmvpXCFEuvWoYnUcCbHQ5DjL4ywkjSVJ9bJ3MSqLxf6qapuyEJ4b9U5rtU9QAzDPrmTV273M",
  "key17": "2TkPPvXKo4udWNyDXzdrk4GW7EUm6P3hXTj9XXXwiZnaNLjUpP8zUZD8ZN1FoNpXUcqYeLsdB7oKLoTquAjnPmP6",
  "key18": "5CtmLvE75py77tXRjZLjqz2dfaNUdKJQNKCVb41G8jA1J4JCGUTDPX7XTfkdSmB9Ju3dNqaDVqMgjXu9aUs7eWMA",
  "key19": "4UYSxj5GdeHQvyaEX6jwT4do6M3uoW3KuCJ4ZSvDKnnJk6sboRrxWBeBuqTe3EfbzSNCEfxYdieZdG8cFEHDNnkA",
  "key20": "2h9LozWoQnA2h6ttAz4fiMQJ1R5trzY7FhNymTQMKP3jV3qhdxdGBoMAc8aeMNLrWRhHgB8S1yjnqbKToT1rKust",
  "key21": "2FyBQGUKDRgGsqUdqjrHdgjQhiRzSqTG5CbFDo99HwwdfRDs9EMwFPro5mNEwQPqk2mfsiAjGrgXyRLfC83n2J3C",
  "key22": "4UBc2Uu582aFeS5ybwmsTJ5g9HgZqH6k461FjGtjhYNukBtnH1ncPuopApEG2D9WcdqBg9qLeu1oy2C17eNfKyTU",
  "key23": "39GJwdMZN5aMBovgZy5ak2GNEg81Dqntovf9Q6wnBbJw9xCoZ4zx4bikqrfqztFfyQaFhD4eC7hgR7pg3GqGeuFS",
  "key24": "46N4WzYdCSGuAHYGixCDrSD9ArSpof7HDi3oKxL6F7HcrssssnXu2q9zUYv2C2vwUdcsduA1HRhC76F9m7tXkZEY",
  "key25": "5Xp45BLcXevPsYMgMSUj3zaFFacbpsUMQwcumX21Spgc3JvkvKDDHF62d3AYM9nt8yXSugWfTJg3g5nY711WjD5k",
  "key26": "sGCG7LsBNjGVa21fnS79sXPreQdakXjVqVm1kR1zGNwjJMWkqNtoR9WqGtrkt8GpjdnkXQ2cXQ49aPDobvsfMXD",
  "key27": "5e4GRQujJsCn25ToLA57AAfDNsJbdRWeirLAJfdyL33Q5HUx9wkc3v1yzEXChdGu3FsRkwHKzjBJL1agycFdXuU1",
  "key28": "5zSVuS6CAmNALcpD2PSXNeSRmfnKExAjBkPo2vrcPPAoXW6nKXx3PvpXvaTkGBgvwdFexWZ9bqVNRRvPByxLiqp",
  "key29": "5THHuLTykmKmSaN27j8eoUD9KvwepuBDuciCN6HzoN9n2skMtyajAed8YcbcVbDDScbk1R4ntyH1bLdMCBXT1JLz",
  "key30": "3rZcEHHWz3UttGnXSNeGnB6GNhnTGfGLALqFzAouBogB5gwrAShYjqGCDpP1sxvq4ArFmJDzKQANutvkernM9swE",
  "key31": "4vvisKXQC98uQJduJxKGv36oSBVLmrugg346hGUWvSnLRkQzuZhkDoWAkhcync42xqbogvhP6jub6zcS5hdg4BC3",
  "key32": "iZh5Ww928nex6nyR1VjGMssBh1NGFYh2uXffqvdMs5U395pRzLvz7GZKrtLRai5XWMB3UbL5KepcRgG7mZ31CS9",
  "key33": "5DV3cZms1oDFinUZdYwTGZPJvYxS97cLpgFn9hLBCyaTpskmvauAAL2KFHyZJ6tD3PuA4suHwtPA1yrjAkDkf6qF",
  "key34": "26CBKTXbFd1zV2M6pYuMb9bHDm1NpZgBCtqnMfgiE3N6zXAz36xAgsdaDDRe7QpjTHKXwuqTz3hKo9sfhwT28KiZ",
  "key35": "3yTNK7eSKPwrJbfqTjfNpHC6JhJdEPGrfnWZpqZye1cDXsLPhPw73hNBjd3k6CAWzGH3cHr3weywuscp4KsU7FjZ",
  "key36": "4EnNo2ogrZWMqUKXbjmjhDA6Boww1QfGjQq6qEAuDk7EuC3dkcWiDhDkGvgju5X2bh3q3StXpK4aSDYgaxMM6Rse"
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
