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
    "4pDwy21w4oLBfzNFFFfNcFciNn3tmdzZmf6gpJDedmu5PeLCkxumpBBmzJ1VgcaC6UTYCpr66gu4Hv4SkPoSGqbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBPvs4BFvmA2C32ap8nzCRxJeQnUyyW3tZjciekNbcGaqgrMS2dL7CupjXC2aWv4z2WveQHbRFRgWDeBhGCRuFY",
  "key1": "3VJF6ty7DzXry3jEAiALziZ5M1aMn9zTYq2YWLJ5MqKPjgipnwd9dWrv3MxbPiz3W1z7mefsEKGTnH9r5ve63x9F",
  "key2": "5Af1vwNzSdF2Mm1Mpq6pHgwABwg1DgZRKp6b3h9ANsbtkvf9aQbuXQ7sKuCgSsuuN6pSpHtCgJA1yAKa1RdcSWKn",
  "key3": "2YTk17QNrsNyMrCnUooWNHyxmj8Sony8Daa1XiusQTDLM6F4oDiGv3nEGu4hRNDeaKkBwA7apRCjoLHnis6KZfr",
  "key4": "2a4mcE17LTgwvPu6pFNktdzASgZYeSVzEKgPzosbLs6fXPfuHqti8rqMzbzVkVaJjnJjLMPxCgMXXUwhi2S2drMZ",
  "key5": "6Tsutft7VsWJfZNwQPJoz7W9ZUsv4fwraM3kVZ3H8RafsAWtZfrun93RVXtVVQtw7qgehrS4UsgnHeLgeQRGgMT",
  "key6": "5kXwuTvcDuH7KiLG7LBy5ikY6z9BbUtTkV1qvmLnhapJV6GnEggZRa87SnX3BsdA73RVpfKkxk6K6QTZLFCQgAaJ",
  "key7": "317kbBRndF1mtfbagVsPKbWAqwmoQ1nDwcnMrbpmH3KL8aQ7SwHwNibrV5GCPb6SmQNpQvPcFd36akc2ZarAkzVc",
  "key8": "4PnNwUF7kzbaDjFPuQZ229CxphaTxtPR7ej3LmAyDXSqgcAeq3YX9cvh3KnJUUiAXWZQhnqAsHXrbDvzCwSdwEpF",
  "key9": "V8FsJHfKTyaB91S7XBsRXSL9apqKvveZHqBosrYjkyRau6pGNNAw8jR5EfvKYQ4xu2V1az2GxMxYeSvhWyBpQ3L",
  "key10": "4L3T2Mj8QJF4h4oGNibjS5vTYZmxEUKMtDfEvbiV12YEQGUF6euZeJhny1ayThN6fpUK6MB6r8XkS2QeVMvb3MAo",
  "key11": "5DvvmhyqvRW1U9w1TCcVTesvAo1MJjYwRd5swYJnP8LA5JSCuGUb7Rsvqqw2r1FDg7v7e7YF4qrXZa1Zwd1pbx1Q",
  "key12": "3bU4NRZSvkrqyjiEvqUMaab2rGo1LQAAb4C8p2cm7gVj2PfQaMnbD7arFCkQWcaPnQkvqKJoSHmZjG4crzVjeTP",
  "key13": "3x9w8Y597SohKARBEsp5bHpwiVEFoKu9TChWERK946VKFjMbr8E61vWYSwVVonbHDv83adw1wDBiADnWgpJwZoLG",
  "key14": "5xKL6VgHYdL8yRdpSBY9uqu97qN86eYi56rVgKvaSPkEJxTv3R4upDcsaeWfzMSsTCpM7jbGgk77UkeGBbvsgWU1",
  "key15": "5NCuXrgT6n87Et82sZvrBfjz8kVuPqv7KPqrt2P9xjZoWc7koeuXRFcY3GFDEZAxUYdPHnSChz1m3VuFyhyQYiak",
  "key16": "3hv97gQBZX615TvQeJJofK4jzBQajJqQdWeojoPNuHN2ZsEFmzyZPg8f4Hix3b3terRxDrTaK7UBDG6V9NVgkvWA",
  "key17": "4qTUTiCbx7Cj8z1pyjw9BfWD8Lverkq4HRAQrtYeF5y296W7vmZcUs3pc9GSoT4h2QRwzSigrVoitqXEWvvQjm8c",
  "key18": "44kenrA76d9kUurDT4NvKyiFJzEoBEqxzNqRZV9eeMsvBUsHD3JsVJxvzRSTjQXhZ2EAC9CaDnxRZytRRs6Ag2tF",
  "key19": "3WkQwftZp1TEyvBWUqBZEDG8S4SjhHSiCS6hzwJ3AGLD73GYSLgA7Y4kSuMzMgpnUnRoohpgDQNwMznYrr61fjZV",
  "key20": "5ZgNm12XmS9FWTqkbtsoA3eHMfwSGpRCB3tbami8EcCUPrNbpnFHmK7Tf336z7P8sjq5PcpFR1WgPxhhQ3493ftt",
  "key21": "2efw6ejeCs1zWa2jD7JmnXf4JrYHhkFH9bVuKZPrAyXQERppgvaoWZw4BYkFcc5iAVugW6J8Q85tVAxkmVMe4BNE",
  "key22": "3zsZuhZgoqT7AJXFsru6bU6tPmhjb7XmCSNzxgfNbVYGA8VuFzg1nVkPjBJJ8RSnDj6amU4u36Z2Js5bRAg6VLa3",
  "key23": "4H2nttqfmBVTmVKjcesckYvPeNE7e8hB4VjwjJpmaKXucgXgtNHpUtBNU4SNa5CYFwJBzq16tVM9wy2vwQA9Xfeu",
  "key24": "5uSEWsVKzdNVhyqZWJp4xD5jZijnyDhWLXNe77RHg5XnNWAu4xScE7kg9akrwvACwZht6TAxXqMP8WuZ9VCusn1e",
  "key25": "2TwVByU7GqwMsGE4ApbrAmcsDbArRM41NiydvcxHDWGcUdCysEePBWNEhth6roTpjMgeoYfyBXfU98x46ae6uWRn",
  "key26": "4rAwbL413FuZg5rNrgYX7F6LF1KNU9tXELZsjpRT162zzHTKPCY171N21fgK5n8XsrrDJcD8UVm7gmVBVLaRgjVG",
  "key27": "4AW7G1naoJxWbe8RgP9Wk1T4soKKhWBBqcP44ETW2BMRfkNSBvtp9o9beygJPECKD4D5vt4HsT36UpE7kvRWANqp",
  "key28": "3ybbtApRZVF3RKpV5Nf2Vu1ReiFDUXqr1uUMo94PyWd1sgFcqngGTmXgygccArqRKNSxH3nDpq55VqvuS1aZt5sy",
  "key29": "4oWP35nMTmVRg1ut5iPr4zZM7xA6EhXkSophcPFuTDP7acj3GfRuSxvWveXHswg5PoaBLcb957TDTCkxV6zMZ1Nu"
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
