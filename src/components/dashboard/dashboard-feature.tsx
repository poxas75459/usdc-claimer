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
    "3SfgB5R4mPtMrZ8u4oWAuNCEynpoS7RFar5sB15AuU84WNs9PTVXyc1VNpNBfDMc6iMtLRJ5CN3WNqmUa7QUGXGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmZh5nsit9j8zGehK6zq3VE78WrkwAvHknoF6SLXKHKgbXevYKzveNDMtLeXWqZLdEHMaikVn8djUUs7wBsUFeB",
  "key1": "4hmxb9EeVMTfnKbGrmjsLinQfGN6FzNJivGMmGStB9mPyvxuyWy4NTqxorTZRbz7Xq97naRALBEjZy8eNyMdBYAT",
  "key2": "2kpHxUVZf3orygSivkgCb7JuLjeuTyrro1jg8PBwnU8QDW1FY4nfBuxG4xBxzaL3WxTMb4kWNrWN2xdkJpv4R2Jg",
  "key3": "4EZo5hdsreA7QZLG87jW4juzSHyAfhYoC4cJDoX6FeCSQfPv2E8DHMZXV7LZtbNLBrDYNWx4Y9Uf1VqwzmpzALPv",
  "key4": "4HdWjb87biUvQ6KcEEPWPMDdsqZoEiVXb5E8vZ4wBm5aQmfMfj1fcrEhqU8kH7FW6G5DZyheG8mQDdiKi839FfxH",
  "key5": "4g6mEM8Uuz4WrZ9rga8XaxrxDpQ31ZCQ2RZFXZeX6pRr5GHgKk6P5NwnS2TZKe8dLHuWU7GTAz5gyUDubGYJ1ghW",
  "key6": "63qMm4X6Ukr8Rgaakk6prxwhD2GyAyTwtkWT5xkAHgTnqWpG8rtm713Bk4tzBK8ePsX4uRmXR6EFtfKHugzri2HB",
  "key7": "3xk8LUqrLWwNuHV6ZhVN6fex3mmYJP1Vvhf1KJ1Lw9mSokxXvhsm3rGFiJK4vF14b9Gxif9CCkuMC6YD6rscoT7C",
  "key8": "42LB1zdX5JYmVCJU4sc2NH7yN3WxdCk7giXpuGVxEDgNyTmuwZ9B6AsMxWFWi6CqRACzcnWoa3DL8YdSgZcFUxeU",
  "key9": "2yBHar1FtUpz38UH8d9ACR9jNP8wvYWMK5wGFHhwc2ShciBMCPcgEGv2jMZ95GFqCUb3ZbGGKUF1Lr8KhysgyWHX",
  "key10": "5hbshDKS3fjCtKEuJihenHBD3gyAvAuiCC6m9n8dVp3FiZDD4wCYWdcnzqhYCDjnGKchAxv9knPGrVS9LSh8KCUV",
  "key11": "5yjDkwkaKuivEXaQxn8PVh9MBvDZgqCzVuHZPLBDPWoJjREh6npV3hmSko7VWHv8S2QgztaP69sMrjig5arnBjDk",
  "key12": "5Ckcjski8QU3JVUoGt4CBcboi44d3nN4UziyWNPB2AEuWV1EzxKCNNma7PKbamRYdqzQQQRubUBn4WZ81j61VqES",
  "key13": "jbtj2XNGsL5QXJZpaaPZotbiCRBHE2uhEXXVSAQRoghs8c22g8FTp1usTm9174LTHVwZxq6MJ7UkH3kYzcuw1iC",
  "key14": "5iLXLyNJsxdnoB1mueGFuR81mSja2cj1NmLufsxxpKKRGDXW1oZKQr1qqAa21V4rapvVcbk3qT13t65FW6d6MWtJ",
  "key15": "FjUhUWL3ZQQXDubFBvQQBUXy73Lks9f9PSeWP7p2sF4oRk2sen5HNh9Bg2doEwWqoMzz8X5feNSt16woPCMFbk7",
  "key16": "2Dn6ATriunG5MNSu33tPzfqo2EEww1QAyLZif75rVFtkJRfTaVnBYmRGDhQtx2p5xHWRz3UuqfRuuMY4Hheu54wr",
  "key17": "4utvh7GGqQ1vDi3aUqqbAyrrqwtXZJpge7NjugJ29o7PH7eXFDmLahNV6rg6FCfmSh1PaaETqWakbxNZYLeqs1uZ",
  "key18": "4RJhp4bcCgcNfJ4ytMuhbpUWfiXfTUeH9KjzRvxddKoFjyy2SRxicQRvSgSTzpSeJnu4Kdiivb1ZC7vvDr7GhbWC",
  "key19": "3opr3iXERAq1obFZdmrkVbzh6jcHAeh2Bbg2h1ENf34NWUzYr3SnV6jf3jjYskipv1gPLA4ikjzNBLxQ2xW9w8Sy",
  "key20": "3MMzpx5onW5EeVcVqerG6PWgaocmiCQzaT7zS5u9hivMJGUZRWDpRJ1ZggQy5TcYQ5BFyrVt3MvA9JauV1hTtL1A",
  "key21": "2axyPBeifWgK8jsvDjHHbxDxyjFvu6ephiBrQw5qoGioFHehppJe5XUGYfBS6YthwPKuSrg4VfuqJz4a5BfmRLDA",
  "key22": "3tYEUkLtU5qdnEsXSdMX4tWQM95oEP6mL51ZfUikVdqpn7oAZUShbpd5VcjMQ76P5orm7A77sPPAYJqZhogKLYC5",
  "key23": "5HJrThJPnJ87H2NkgA3rucHefqqXatg2iqv5ZxudYtH4Hd2XCK7VfUpjiXmjrDxkRrrLKKMoCS2p9fgkFuCxgKay",
  "key24": "5qDvxsq3qoQJEpD5uAT3Tz1hmajcr3WLWteBGzM2PuMrtEwEY4YirgUpGT7tQcPeakpBEghygX7mTZnDGwPBGdPv",
  "key25": "2zBgb1aD7Bc6yvHG8cjE7ZY4JVyTsUoiMiYaDnk98sRsDHMVL6h2WVesapHdTeqWorbsn6rNeVyzbTcmHT7UsgAj",
  "key26": "V2Chs68abtWdKeRaJy9H7Uc9aHAohjj2NimZ3BQmXppY3AMqAfWBSpQcvgyx4KsyxkkDjUVA14HzFT3HJaULSKB",
  "key27": "3QfVv1ub8ee3LQmMNPTTWCWhriHW9xYhrUnZSXh52QGbxYUuiyADeL6nrN2WtodS1UWFw73c95iDvYvYhZXjb1dq",
  "key28": "46H4kUfcE9kPkr5WcT7shjpnHxGhyLFwAKoTs3urwGgktcEvitFjPGYnr7XY5SiCdH88yDB1G52DMx91QiAfUNyt",
  "key29": "4zPowx8gPwKbqC6x3UQHR5aPycddR3PruAo4Kg7Af3srQBehv7SfN4KtyJrMSZt7XVM6djEDchapBhSXNANkY6sd",
  "key30": "4kN8TbpabwDDp8HPu3WSyqM53hNndwS9raTqQGRmcLgijcDZmbHmZy2kw7M2Pv2mw5NCHrikezfiG7Q4pvczxqaY",
  "key31": "29WTasyucpQrf8QopRLAoiMkLVq7HHkqWAA7KpZZBL7fWa7kVqG4sib3b63W3uxLM5erPnSP3iy3YaYL2MyfyvVG",
  "key32": "26M2yztVYLqRnHQdQbVYWaJ71n6BfkGtTmMZXaCNsQABW1cy1ThpBNJSng6R3wZfizzbSJVVZ16sY56VWy8BGRF2",
  "key33": "49X7MW1owsyWFVaRqvACxEowW5twgUTpQM9QKwtKiKYB2d74m1q43AWgKjPsc4v1eUwLx1kjifwKFnkzPUVQU3Gj",
  "key34": "2skAs3RCjj4Q2RtriJQLcs6qJks9rvVWVeo4YV3RCBY5utScpdwkGwWSX5qzx1KYjwUg7WYoBbQTcEaT9YnBu8VK",
  "key35": "4g1phZ4nHWM7rF59gsuvH9p1tcRwcfTsHvWVp9D71zoXWawWzPMdvekAck1tULezHxERXu48L47gExwfWrc5xwUU",
  "key36": "2gaKN1GinRJPqHEKk7gaEoqP95PrcCf7Gs9az1Cp7HgWrVn5Cc5CNa5anEKPxiwUbAUVqCxNd3LrQY45szoNdQrd"
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
