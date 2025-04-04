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
    "3Gw3mGawVmBw2LVNDN1aFT45vV6xHX8UPEJ3WJpCGSo4HVuez9b36GU7USBGPzW2G6r3pTqvm5Q2nJbAbctS5GSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShTvvhjmsnhYUa5U1iNp4MdeaUpD1unBZmqTF1BcUqoUCs6jG2W3QMVTzkdHKbp2jR6ss3n7Cnkymv6T6DqgMwf",
  "key1": "2TJfQ5N9RcWmZUQCAdCix5m3HVcT6NH7FUu6gnhukVsAapCod7SAkjVqQYtxAFmwg7Pv6Z6dbJFsT5kZC4JDtE4z",
  "key2": "LJWtPhrxiGd4YAtk2YoLRm4M3qxhM6k7HZ76C5UF2zEEdFhTpJhgLQfR76vCRAWxrYTsD8TxNLFtjcFFKnCtEXg",
  "key3": "5gVSBrYiwxmVzSTAPPd15Y8o9k1bNMo9S5iqeGu1Sd1hKVhnbgAYP6q1m3mn8QGESVywHbwwVRA88gzW7sTd1Pns",
  "key4": "2PbTHiYUETjcntYWPVwAymGDJnVA5Jnv12YoRyu1dKSKsKhYvz5Y7VSdQSyoXAtqbZaF4n1Ryuz2GStiyJjtYwLz",
  "key5": "2Q5y676brj2kDtyMBGXeHyWByGjuB7UHSg5AMTsb1keHz1oJVeAKWmbBT3FjeDi3r6MBsF1RLBaipMnodgoAjziH",
  "key6": "5oTxoGoGNA59DcPAFfoLvW8pf34Hd1CwwRs3QWvMca738sToxkAqE8PAQ8Pi2dyEAyhyYvTYH8r9RCTMFG7xaeTB",
  "key7": "4g2i56QjLxjY4Gdhsp6mt8G2dvADgm8MNcxUbqtWkxoqwyFmXJdETwXr1mPK4cWaaCyUjbptLEMQsa6hmmQrBwko",
  "key8": "4d7q1VGx3xB2P4ekV7phebdpWfTZUrr8ZwatRGnPUso2CbU9Jh7bLjZAMxQndZAsdaKHQKNyP7sRFFACqR9tmLMe",
  "key9": "8tDM7reYhGLJYx4jNj8pJVPXepDCDuZsZh1yb6Aecc4h7DpUo7hdM2AF488VFVesjTasZNaX9qNjtc5XMGKEZnF",
  "key10": "4SMtjLosaRTgpVQDmy6kfJTAwRRAeUB2REtS1nMRzhDK2SAbXKv2c4cJczXtjbCcjaWRpuxLMVB8qZ25xyqaMUWt",
  "key11": "3weqyou5DLHcXnTMf1wTDHTFkur4AMHL6Vycb4V4jKEKZg6tvvyTyiZqzu3spNj6cw4NGaHAQFUKQ3Ag2TABcwBc",
  "key12": "31WBie2wuRjmZj2ZV6xM2KF4owskCc29RoeBetty7H4C4zaRkYb7Da3YCwbyPr9LKNBvgzqtsQhdynEBXEzvPn9j",
  "key13": "UTFa8rtt2TxGjF2EhFbSuzEmcEkbmVhEK39AYCWSVdjsaJTS3JLUcZdEFHzH2pscd2ggnbLgadPv8wuq8ppKqMF",
  "key14": "59TmouQ9nLSD6KDcdNCLqUw5CpT17zXkPrLTEzJUewmmuEdYM1W1wnE2R5fLr1V2dYTGFtetuX69SwFXf2SJB5o8",
  "key15": "5A8hJizCZhCjAxBMTfjdcZvKcNCFtk6XxZu5FE2JH6TTDXqN4ZejBmtMGLKCFw8VhCHbKVjaoiYAUGLjbayUZ3Vv",
  "key16": "onmNjDwiX7BH9StjW3jkwzN39uyEN7Cq4GiGvTsBDpDfqxXnXG35LtTmNis7eBHa7QnXJdZkwS8bhENataVurN3",
  "key17": "2HNwxUxzEyoG22Ho7c93ctiDmaV8eJfr4MpUZtJzGuv82xuHe9H4GA6pp5ve9gzJ9VW8ZhnuPAk7KVpFscF35Dv8",
  "key18": "2jcqN3Unt88bVWFf2zdiJzLV5Nq4ikwTPtm3H3T9qFE46DJ8sUtcJUWsQZWJZbmYDJjF4ovw1RZzD3VdJjyKdin7",
  "key19": "36bbupV4JZBhmNT2NW5zV4U1tns1yKWJbkuJCTutb51ZDFNoUuhF1g3tYRykUHaPCEvChjc1wNYFPNC9NKX2LqyG",
  "key20": "4DiwaVTeBvScaBZ8T3JHS9JrAYTQ4XUfnVkk3XnWJRhw4K4mGAbuS63UMMwV4ruThrCk3e4SpyFfRVHoA4vAHwj3",
  "key21": "3RmvifFbD8gMxuw6uqGMhCyjZR7gXqubDB2YpyvwpCVgMnJTvsLDTWEDHpuWYHNxqVekpRK2e26kxAgCpyo2mepr",
  "key22": "2MXi94msf7ci3HEPPm3vakN3ATC6MUStJ5SWMcpPWuXqsrHHL61PxMxg2Q5M8Fq9YxYp3Po814rczaTnwPeFuzXC",
  "key23": "5ziKZ8QPvxuRTfN1EfhpoFQPY2mNzjgNg5ySB8dRN6K1JZpz7vuBEtZp4uPUmC652e9wL2vVuenykVyyU7Tt2sJm",
  "key24": "4UciYCUaYAgKkcPqkaZdxdf7pLCcQLAE5RUENVLefJThfebCJKTrpa8fNtu13zmDKrSD3a5fd3aGkfHvi5CSzD4H",
  "key25": "2d5eX5s7eRD76bJteGT98c3sDQ969Z1D8m3bFuAJspnC6KmNyfK1XB22oL9UAVduqkBqddPGP8DcXroXx8rvZAAa",
  "key26": "5fAVoAe6QHAv86H41X8qr6EMWnbjaVkuV8emLrHCBxfy8ggKhUG8sgDZsn1gRvPNgJTC3AHjGWsLLYvm6ibpLBnx",
  "key27": "denALxcZTNem4vyyYPW5n9Dgn9zXNpXR7SkSfVS69ttaj56L76fypN3pa249Q37uytmurjYseeSAhtRzXE44f9C",
  "key28": "5SMgTUPQzwTQxH8Q4ZMdkab2mquFgAudsXNGPqr1N3b9oZRa38uWqtL1dB4kS2YHFhk6PwgUSJ76vxCoWtK4zD8u",
  "key29": "4bdwup6DKLuP7TkFWoZ5fspL8Nxphv8mUy1kRogmNuMWvwUMWSCUDHsLTdevMSFYTP14HcHiDtUetXxrudk33emJ",
  "key30": "3KkuvoJArsXKfDZxjneKpdgUuz4ZWPARmpRjGWrZJmGuKRXTZTvFoECPJeQSXDh5UdqE4HJLTfGKAH4ZQEUwKVLz",
  "key31": "3Znt2U8g9hintL4djgfadJRf6zRUNmTSBXAjMrrbeS3dURaLyEaxfMjUhnmCt7xQnvVap8LU8H5FF9NEycBqbHuY",
  "key32": "5ScteGVX6VUY5TBMNUco7Hms2jZ72RDW7dLuLv6MhMPgRHegDtWdUTsRCk4URFsM3sThmD9KzJ1TK3ov49RKgHYy"
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
