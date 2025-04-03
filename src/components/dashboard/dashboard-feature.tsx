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
    "4AzMDuHR8gyZ922pNpPETG7kyhtDNJHU1S744YejueaQTHdGsbwsFHMWtPYjF4kWfUgLrBoaJvmaS3LgsaGUiLjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThijJyknLCayu5EGeYdscKRsZKTn1FaNqgGjMWjueTZEfYNTELYTMrvkxqPpoxZ6TZhrtatWKtmsmPcrfKi5Yge",
  "key1": "3nUX7i2fpsrjinUUSpeFqiwH4RP2kwB2zXockmmsUJcim78rxykwekoeEVEjHtcAxHQ7S7DwGuZH8vbVMVRLVkx",
  "key2": "4GuDe6ceirRQLJ29GdFRwnYBdPF3iDRrEYmJLJqPRS7B6pi3uECzcEovUYk2yERjhYdnru3nMmHKgvis3bbqnXLW",
  "key3": "TVoraK97ab14b6xdSXEwynSmup2Q56AK47YnttQ3k84yNFVMYF2NXBq4GXDxPE41yUCdKTYg29uBgruZDYCRS7a",
  "key4": "4WqVEfxCSaUxkPPXkuncLZEXZdX9GUnd2yKCaWphCnYAHSS2DKh1sfojfboooAdoEk5HWX8BdnxVM5qFpu5FFMFw",
  "key5": "4tQgiFDEs2rdkf4CoJAsntwAEqWKVUtXeHv9BVgNU8PHjnW2PoSHhb6CVjNvDpWe7AhGf2w9va4kCTjAhGDd6v4A",
  "key6": "4QbAkc7BvgxRXt4Ud5ZY27CNkyEAUGUheqtH62B36Rd7vc2efQhhxJMJYDnKPY3Z415ERECCXUv8k5ro9N6Uvs9g",
  "key7": "5HPFqhnZsc4t1tembVU295u55fDd2or1muADm2aaobvaNiSW1opSEreA25RFKULDa8yjfVVHk2W4rnagfMR3xkY8",
  "key8": "YBKr45uVdf4SK3YmeBvo2k2PRFHg11C3LPjfdcGdrU6gv9cFjUwNSwo6jkJV3fx758kQsF2PjLr57WopbNPDQ3r",
  "key9": "4brf4wTmZ99nZKJz7KuHiKKX9tL4LncWD95JezBMZ9fZhndUkkszqrVULeSpmnMerjo2eRSnjVVwr1hbfbniyeL7",
  "key10": "3x6WhUdcRsE82rQSpLRuQcvtSnEjqBzansJaNdZSASy7NzaZ8i19Su6YFy6MqSHWowsgRACWspphZFixmr4FCbBy",
  "key11": "386ZnuqhgRa4h4oxgwaEQFrfxCkGoSpmfhZ9ghkybpgQdoFmxUYK6yj6M5KdkzPnDWq9q6EUBB4HDvZCeChKowT8",
  "key12": "5RSpSkfopcLq73igVmoeejUjDhLKzu1apMytWwAvDGer1dtauZiNj1gQX499nAsPzJSZxmx8Fma8wkw9vC3f6vki",
  "key13": "3RSMB36sjH7M7hrcEYvARUNftNGbTWXNfBaJcQHKr62PsVeZJSwzNCSjfFUbFyFSjJEYQPubgpLhc9K1s8amTXST",
  "key14": "c9SNQd9biKjpYJfHS3tS9nUCpbAP4ghVcoGrdZArDK62meibGzsyjaNja6RvtiYidky2QgnsHsMAJpPbi9ZjXRq",
  "key15": "WMk1mrtDpFuTcEF3V1LH2BRNUd48FskuC9nJPaUh6qavR9wuZapx61cpRayjVp9uobeKqRwRQPgonUqwRFsWVZC",
  "key16": "3pwwMDikSFr1XCtknV2qC71YPit3mgU7ESCWR3XPifE9n6jPozo6zdfjZua5PZQGV7z1ghpG1ajpHJTZXy2V53Jm",
  "key17": "3xihiTsWy7zQ5Z1shqad7wNC4cuejfBEbrEejsh3cgqwyubcaFk6x5eDqUWtCc85iVSMbYnHxCE1HWZZmpVDCaXE",
  "key18": "3BL21dDk8yYHniu6643eFEDsLemsajjncTifBXY2iQSwekkkueCYy8YjxCWvfnts8KdkJYaXdWEnXpmGDCt2T3wp",
  "key19": "4DKvJxMcFg1J5AojzPRPDoS9u4tNrQ7yTjJg21n2p4db7CwBvSYqmAS5uycG6UYMxTuY6hk4jNJmkhW4rxAbbuUt",
  "key20": "2wjYgTmCeZYRksEZpNUMyQbdvjkTeY8FQtdwbdvBqSsEotJJT7ZFXT5mEwJB6mVmu5Hby5W8FaHMpZEYbfUAm61G",
  "key21": "KaSYySTXgVikAPAw9kqyxF2zukUswEzw2qdEZK1X2rLf7qjVZtqmksXb13FDJiM1jD3PuTrXRvYF5xpsxhk2nnd",
  "key22": "3YwJEojFLzBqYt8hLGQGnsXCBt1Ssom54LotgdLkLd5h4kM9Li4WND6jejDPLi6qA1qeeM9aw3EeAP7k9ZUdq7Qh",
  "key23": "26rWdProc3kpPGRfWiCF2J7v3D56CdgRQSh6PNeenErmVaM9FD5gTd2gHds3E8fHSmqM1utvQtkYDhQyu391gmWC",
  "key24": "2bFqsQz1SSJjTQsS8J6aQjseTjDm3rZnoDFm4huuAUyD9YxfSgVHuXwK8UAcmRFs9r1n6SvS3L9qEGqnYhv1fuqc",
  "key25": "T4EQKAqZVVsWxuj2VFjuhba42joAFBKWTtqLpgjYJRVEZ9EZX1BZJ2KFACz2caQ32UcVs2ztWkniFWR32VGaHZz",
  "key26": "2R144uXvsB4jx8qCQLuBLcWmiWgK86ixXSQ6oRX4DHbgC4XpQWwDBPaWk1G2Poq9Nn2qxmGeuKyG7pkmSotv4k6V",
  "key27": "4ZH8seQx396UbdCQDTdEisq948KswVbJcixuHFBT4s9aWWsUxB6nYHPdhFxPvYT1qLSHgQ9a74ezcSV5E48biAw6",
  "key28": "5d1WGj63TmEM38V4wgMQEXrJkTqYhzTgyjS8KgzujRN6h9vf5vkMKeMNNaF6EpGDZhCrRxdsKzeg9oV5saY3nS3g"
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
