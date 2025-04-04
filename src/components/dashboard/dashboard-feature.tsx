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
    "3MsjFcTb3tUq5HGWx167s4gyip7yGHwNxeAbWqvvwJfLBtpgpne4t4Eqwm2nP8BzKqGiG7HJgNyuNdLEyphTADrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1eNvXMb2gNy1CJ97UrsgwnyWyLqsqL1iYv9oAv2gfSrd1gLRBnTnQaQtZAT737CpHsev9nPsdSFWcjsdH5x1Dx",
  "key1": "fPCV97AWZq6QoD5AqFVDd27jrk5DrrSgEPEtfMJPJGQQ1gmssa1oZvVPN2hvs835x1QuboYUitkod4Ka3cfpDaa",
  "key2": "2VMH7k3Jv2w5RSoLEPG2a1c8kXkBNLV45xsbBQS8qL6PLtUWnp377nmFHF3ZXggAgjafVZgwZQd3n4yr9A4V5VeS",
  "key3": "2mZb6aUudTKJYiqtctjCbsdgXWvmQ4mKHy3yBfgEQHLm8TxxGRuEahqn8hvfK1ya11xaMyHRpX6sspsFiww7BxE4",
  "key4": "24QJonZFkno7GJQ9WuWbmCcKsXkMvqieG2rFjyt8p9Xev6XbSbRLYtNiEYvWEx1sWYkuxVbVfRnFqTMB71YtGTYw",
  "key5": "232cxebBDf3Lt5S4nq9ZKwscBavyDeTUVu2yVQWN5GjgJdSWt3Z2Z7UAiRShD2dW5poBxceiLu2PHnsdavJGZBgT",
  "key6": "3LCWFvaQS4MTgan4mBu21Zsc9EPo8Hc6FYc3y39M6gZMmGckp8joiCsJavSQo9jcDt8ToWWXqX5L4C8x7av1jAbG",
  "key7": "3iZ1h5XuDkBsDhbjWMbm7kGVvGtxBY4CorPd3cJmWchE9HQ9Y2hEgcg5tmqBXcnPmi1Hh31zGdwA8Jb5HFPW7qDB",
  "key8": "5mXcKgjLSnaAoR7NFyDjWyaU6k2NwXEzHuHogiyLi3hcxzh1aZXtx6Ju27JTRFUAvVaZvDR4hWWBFmBApDiZnkZf",
  "key9": "2x7VMuCEpzdUJbTsYZ4e1oiBjaa1dRBVtsfjBqpZtREFBXUQkV6GUZibLHeQhj2578gdrHhymQVnbMUVmRNYEpPi",
  "key10": "2DxNSJw9ez3H7jgXxrj36X2Uy4T7p7DYVp5xwk7GHoR8v4JT11za6EbW86c8ww5YSJF3ZorxG3TNDYy362J8DeGt",
  "key11": "2MhM3nC92oMkChYGSgQm4DLdkU4Hi4bpjAUZUvSuqVG1Nq95Qq9ov4eTCu5ehpw5RszvnUMPVnK4ByZJhS1vqxov",
  "key12": "2FyTc46HR4KaxXZNLaXob7zVMLzNwhBe4gg9rirujVRftKbef9xB3k1YbsYeE3pzK4McBPNwA1uXgmzMZTm1bigW",
  "key13": "57Pi9NqnBiPrMW29v3LRMa1AcJrvZRWJKVGZQyqRwhrs1jfGovGnTJp6qkmD6FAwXxFpKscq6fKbeb89iyXbHmAm",
  "key14": "4tL5HnBBG8dP48yR7JAJaTbYwhsvNm1m1ypY7nwkm7MWwDM2iYjNE3AMjQaAsp786Grn7QVHWmHZy41PiXVEtRHt",
  "key15": "fBiad4j6fG2yKpfzvRwXMpQhzCzTnu9MNBsXaf8W91VVkjQsaCP3iULCwYn2KkpY8j9Hm1LzXphH4XuGVAainq9",
  "key16": "SBpJrNT4zw28DtpqVRUpiZ18yhvEspT9gYF7s3msyZGaBWyUh491Fxf4smNmvZPiqEv8hVE25ygCBcpD5qJ6pYg",
  "key17": "3pJvoAqxbsAaA8Z8stCUwUj6LFfC3LmUx8ozKZcM49umQCzgo69b5g2c3EPGktKPDa19aTgz14bbK9PbqRjDH7qY",
  "key18": "5vGENy9Gc8mYVUFRtMHQLYBH3aDWGhNDj1hzyw24vVdTPe7qJD4H5TdcTF3U9nYYa5UtNJnswzXLNqWo2XxsewJ4",
  "key19": "4opogVpvfY9xUbPxtY3NEYJgaN5EGWgXJijvCaSDKwsvF7iCnUKPexK2CeZ2kmewExBqy19v7LTUNRftxTbSSkN8",
  "key20": "5J2HWJmNnu8XGHfTeaVegTdjNy1iTSCggVdJ2krdzdkvMVoXs8y9s1hocbvY81FMe2dYsKYa2mQ3Mb1N18io4n7L",
  "key21": "5zey722W8m9Fp3gEi3zi6Au5Wfz5Rj8iJ4N19xmPNAmDeF9B3kWEMXLW18iKUnjRyXF7XhZm45dwgNmWJQaBc5dz",
  "key22": "5pXbB1cQSARE2tq3dA2BdtCGjEAxqFw8Sco2XcVMk7zm3bUd7vCh3HSw1qscXj7aS1LDZSkaWvojJ36V2Qk97MDJ",
  "key23": "5LZ8ZTd1C8R39Ey6VmMbZ3ALrG6ZtxWcbfA5K2iy1GA4v7itZWAWan6a54XrY7tuAZe9JviEXbPQuUuar18EZxP4",
  "key24": "3gA8LoYsBZBaStek1nvWYGgfk9DewZqYNX6rdiDikzYLDD3P2rWryDKjy6sf22LLNDXFGZbfEMwvSU56zMMaWB4T",
  "key25": "4mFDiTtcpm77orwMaecs1FLWnupQDi28hhFv2QG4SXmniSSc1ELZrUf17SxVgCyDxvfcz1Kv2hBX3DBMEpQrskPk",
  "key26": "31CECWtCg2QAtXhQ22UAiLKVET7dTG1NMbc3vdJyLH2GscQXC7QMwZJhfVBTywrdRuDJxD45MnnFS5UJAneWdkaL",
  "key27": "58qpfZDsLRprTcaUYSZyy8RyaKbyp8nTm89FU1ohDaAKEAjmKEvGq1LEYNb6xjbH1Y6BnxWMp1BrXBUKwKUogiEo",
  "key28": "5WyRPXikPtrmU1Auv7rZKM9QMTFCwYKKgJ72oCau7RiDDLhoAKTqSC9H1JvcBingjTKHGupvvVjVBxyDAy9HrF4c",
  "key29": "tz7Z9P116w76Qf45V9cfLEmLPWYQjs8cn74derpmL8orUwWnjngoQNRs4L9jmU4qJyALjk9p5Yz4MctTsoL8Em2",
  "key30": "4GPTuP94oJujBVBmwgh7fziTuoC8joqkysE3jfPgFfuNQTvPw4vLrwmUZ2zxzamW6mA7WSA8xkFzdYNQ2j7D5Ji3",
  "key31": "nMuxMMpVEJfyjvUaWs8JPAJB6SsSvfEA6E4VjKDoDHhRV9JVwGwLF8R8K7gmgaVfkiREzef3FFaDGn9XbVB9yka",
  "key32": "5onGh5PtzVx7vAXtGdZSkowegJTafLQdag3AxPxpi82eJUZdudYR9wJDVQ9vQUPmj1uBeCybh8Mf2cCWHFSQVDnd",
  "key33": "3aSftX9qqGa7HxRVZ5g4yoT6BsT2DneK76BmLfUfarQQJBjJGodUAoHgL2RMpmLAmSXTQktv9mtgi2SuQ7skUXPe",
  "key34": "3VkEq1umiZ4H7XPWor3QXtvAdghM3mBfGG7ua4kxfMxRfKURsSVyNomQrezt9aUrAgrkL2hraQAiSW25B4voAHwh",
  "key35": "5dAi5hNLehtRDWNpZdxRLJgTUU4QHVg8dyajy2nxt6z3HXa2SCakHGGf75kC6zyMEi9xrrmBkuFuJtgtSEj2Fa9J",
  "key36": "2rFACQZANJcQJ4rUTf95rYHxwiQjsEGLRMWqijJv3ab6zgUjvLL2U8kB8B4PxtRQVQHqVGuxiCFL21YRZDC49ikH",
  "key37": "4gQ187rFzwukPDuLYM1UxQfdnu9eu6NG8TS5MQpbKVSDbeRUPTwdDjZRwfnPyKjgQtsP1dXCzWZt6VWWEpwncP4i",
  "key38": "5CcqkaY1J9ZyPFu84eknNkcRis7A1UnYkfUH77wE4SNT8N5oNZzUZVcTqihmTJJykJk8JrNZcVHTEmsHkVuMGPFy",
  "key39": "4QJyEt9Gx99RnVC6iyepg221kDHQ4fP5M3rY7r3SzH735jy3qGXRtovNPVGhfAAcpjLC7qQm4egve2pyiJecikNH",
  "key40": "49ccYgGX6uKx3pugr5bMuDUuQ612zPRF1PbCzuaPP3HQwm5SWEHBFJUWjwcH5fmmn41gNUQtkr6fU3AZmVj36dFe",
  "key41": "3Q3XT9Ckm7uAmf8m3wt5KmqnEMy2YZ29XKgved8VrTdqridHR33Ymp6YiczYmLBfkCRuyAjYcZcfzTu2Lt9G1hc",
  "key42": "tLJnomSCmbpsJvF49gfa4mrtgwqdUYWytXNwP64XQiY1rfbmwdLojCC7iexBnGXXoNgxeDdoYKEiGtXbQdXAEer",
  "key43": "54S3w9hEwTP5jPKT8jB1t535w7NXYhrpRLzZYKjbkcfS2ZgZkzxb9nT97JkaWJ1rbhtpw8J7D5KeNgXYc58gyxoA",
  "key44": "2o9ke7YEJVReVgdLG9o5q5F6BEF5EJc3CFRb773F3BkHAWSmsEDSre47Qamq1FaddQZ95ZkDxz58no5BQYffFAkv"
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
