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
    "4fKNoGKcye1CfRM2SYpztnV735667yzEMwRijMS835b1oE8HZ7f8qwudTxvKGvDuj7G3ZiUqrzpd4LwzU4pYBSrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocZasNXZDKb8nGdWc5mQgWYDhggLkC36bMHwaoZtuzTU5M26SeGzAfLcJSYdbXHBTCLJ1SHgwHW26BnnnoDJBTS",
  "key1": "3hkrEP63upQv36GWM4EJrbdfgMrfR6eKyuWZmoKYYD7nEuBjr273dV29LoA4sLegP4UFjbSzVQmJsH2mrmPNx6xg",
  "key2": "5VWypz65pAmPaCPLHY3vGaniDCZ7LYLWJfPyVX42WTr1cPfrp8p7FjXG5YBPwkd3jM22sW8vpkLnXuJVBKrkqCNf",
  "key3": "4n1JHbnKicKFBC76sSiZQNHfQwaQrKDjLyRUygq18L1FSCvPBmyfYL3xznaZgQXWxfTEqpjm8PJL8cdhqP5UzbZR",
  "key4": "3TP5r2PyfFWAGmGv1pynTKPXw5wZEuhJ3d5XjkQbCYfkA9WwLe74tj761gm6i4dsAQERTf9rKESHVGTHQyeHRyPA",
  "key5": "ac4N4WLvRw412Arr6Rdpyxne2K5T4y7onNCCzudPA7Nx3DHFsSt5WporsdNReQcAKpubnRCz4ZrgUaH9i2m4zsB",
  "key6": "3XyQt59eMfejmqjGwgxY1yLWapsbgpvKp1qQy6M3d9bpxn3ED5HFwHDSvTbj3uVin4XoXjZenvaJMvkfYMFVZPmC",
  "key7": "2pu4ekWXWBvvuViauwmWdFiciVYQJ6uwLfnohLmopQh68YC3Tqha2ro86kVdwAychDwKj778fS6SSV3ArUZ4ASVK",
  "key8": "4jmnTcfgnXdPwXtRD6q8nb3Sefxtfr7emSDWSvajj1QirQtvhXeJX7VDPWjSwrQYjx7gsGc21jqiYEQaj1fvdUuu",
  "key9": "2kwCwiWtjc7hZBRrGMN2EyCTPDKa5g6y9KBa5QUobHUqaACGoarKd6xqqUT8dQ4BMDZeZABqhEFkneU5r2xFtDQi",
  "key10": "5jXR6JcMiRgBJbb8nXvY7iZD77aRR4rBbybPJe4EhS2mQkmF178SJsi26SkHSCrBoWaod4pEz2TXsi2uY5ATFfN",
  "key11": "62goysYHgSHvF59rYP9ikKVFDrRmsCeqw64hnxpv2kwDES8DmEYyTT7c1zaCgffWdEGg7wDpVpGiExUkggZByrsV",
  "key12": "2Nmf1XQwsBS8GX6btCYbxoJaNq9docjUFpX4SeEAprKLHik9q6eciGZqUtpSpaofDfxmrXDLrXJjGErV5Uifqavs",
  "key13": "54nDZD7h6K5gkieYcx8rU6qPph2Un5uYzBDR2mBrspo4KH95trPpFKPVAdV3RMdEkt2AYks1AKPXDakyCqUNxfQW",
  "key14": "44zd5kBQ3Xs87bUAKNVEe1w2RT4GYcE5MBQZe5rqFgmchMBWQ8H2q7r8HnrnbU3zDBfQVA7yEBJFUeVe7rxErnHC",
  "key15": "GwKCvmg8FCFvs2MUhF98D6uNAhdAZQFKvxFmijHhSy1RHuxrwYCtp2vCYU2uAdnGLD8ykfSJc7g3gi1DDA5NUZV",
  "key16": "F2GmeguwTSTr1hMpixM28FW2gKyqY18QJmsSWCiveeFYBf9jHcbi2r5UNJ7tHRXBMweipcnrgcxtVHBD49EfkTA",
  "key17": "2AugjheoCrbhpmbgb7wMFhAEvpvtM8tzeUMM7FVb33p6moi9FVMPgyYmjS1mQoGTS8pMtrARcidZVuofeyAWBPLu",
  "key18": "5UY5PZcHDcPFnsQQsBLFk7AwjWzxtCGqhyuXXURCDyt2KMrxYYzPcdDJtDE3tCuQuBfYmz2ucg1FAzsGptQzQUEN",
  "key19": "2NMBEZwuJMhknpAEMkHa4M14m8axiaFV4X5LiqVPRmUDS1Mj2ecSqG3jUdzCiTBiAbETFUDVZqk88v6FNXqr9f9A",
  "key20": "4fRPCRwE9QeaRtCq4ukfdXZpkTGamFuqFXBGSGn3jsJXfRrZhmgdm2RnH9V6YSXz5J8AubwgU6K6gNZsnWstiEph",
  "key21": "5843Rt84jjM4GHiMbuFRUtA5r9ErQpDXFsgdVgZvttRNooEJfHxH12BF2GBxWd8vLGTL9NoCQMJetvAMBS3TgW2y",
  "key22": "xfdZbDRme4HLks8sS2AMWja2GNoPsPk52udrPWHVGEKuP3MfYY5tL4sNjAuyVD52fMbKBQVkG9fz7DvrKMCveza",
  "key23": "3vqaoegAYckDAhHwgKrzJjVNpQGnDTq2Xbf2CgEgLg5PYHyFAAswYb4FumBS6oVptcMGECEsdiMFyQ1PU3YGHgzZ",
  "key24": "5RNTDWdFWebSckBdexgg5V44HxpdPmxsuWPmyB9aVHX68Q5c6hS4FMsq6oEAVcothB7vHGR6jLyuv5ERE2CG7T8H",
  "key25": "4mcAw9T5qL69qRkpS1hXc8Smt8x3MwpR27g69SJ4goBBCdmwbKSFShggXS5gYFZvBB2uuwpFGcdx6J8h5Excfe51",
  "key26": "2PAvoE6w1PrVh3Ke7qwVWPPnwzXJwDy2wU8zxxPSAG74LCYQfd2jg6WcokuKNzNFExaBSxscGsxbtqLj2CM1MpTZ",
  "key27": "46dsdyYTw8Rxo11rNochWLGPeFHUAKy5Dh7U8WnzF4PAdBRgPWFdBiykPc61wtpUJMjjGoTCtwgnr9yqkh1V6gPB",
  "key28": "5UV3XNtfPpyQ2Ezf8AQg4VGgNHwLDWoondbXYeSutg4VDRoqLvPYESh6pzMTxECmLDhkaBhW7kCfdzayNVKzRBPA",
  "key29": "36VfFRaoX3g9zngJsoYDWUrShFCLNfMdA3BHSqMiHuieAwV6PaV2oPr9hm9f4ShdkT2PY8JH6K6UJdp9AoGVx7AR",
  "key30": "4k95eTLwZmwhe7J8ACqt6a9caFXGqMbT7851wArWbh2zcTM4tLyN77fdBEmvU3baxF3BC7bDtyUcUxgqGwgKxqs4",
  "key31": "2HL9W2yQJz4TDZV8hjeu5EN5PvJbbBSU6G6F5nxtYBJPxZSSc7vXGnnNozYy8YVpNjeKY4k2DwA33aGwvtKyQoXY",
  "key32": "5c6yyLKNuo5QiXp3aeqM6XzbxYH5iN6TTbQvJHPdLoQPxpSFFpsju5Qi7rTkenLpWpCmZ4By6J3asbTrpbarqBaZ"
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
