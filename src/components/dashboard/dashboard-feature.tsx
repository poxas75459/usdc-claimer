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
    "5ks8KveDMMnUv5MezR2Yz8db65QnYZvEnEpQ2SsCN3s6BuxjhCh1bFnpTNAVBPkFfP5N6RM1uZG8pBZXkpR7UZAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49im1KKbUNtvxCDx19BVGuEn6L99exLTsDX9CpfwnYRjcfGfRVKzTfitTD9d1GEBB2Uznf4c8RRKkrTMbkYMgpYc",
  "key1": "35gGT85rorAqEvQDMHPFxvwDYyW2q5rR9UdU64812kJ1CF22pt5ta3aPsNxdDTjhyjitsytLVym8GQbSah9NFLnb",
  "key2": "524sgH9wGFDHNTW5groi1pzf6V12UMYj4DvQfiAW3BM34o3GYrTpyMQ3vvLwiHEaYEguEKVzzhsYFYPpF1CrDMiY",
  "key3": "5K4S8p5fnoPXLcoLGFwagwU2wwUdqfqH55dWvDWv12CBaybaiNstTj3Xer1PzbsPjthWLzziAmXvuUXYDr5daZ78",
  "key4": "27ydLbTaPHb6gmEVi2iDXqJhbXZcAjef2qcKok3TAv55r42SVVyHATwzBVz12rVC6vSRrNWA8Bms4s42tbgq4ksy",
  "key5": "3CS3nmCv8sjgXL8BubAATfyyVSCupZdJAvJEhCyV26Baq94gDhXxUhkphcdR5mMvaTjdnmBogig3Uh5o5Kfv895c",
  "key6": "3aKnRqVPrXJ5HGcFysELPm1rEdHtmSCRPoUAH1UEMn4SYMmMrmQa5zbSxc1FGKydAeVsBYgcjoUdEgA32R57Wg2a",
  "key7": "3ALR68YfaVWcSe7KUY8AxCmQTFxz9c7GChKVyqaN6Nu5JAETWvoyvafLF63g34XV9g6ePUTzF5okFtmsx8d8kgUj",
  "key8": "5QV8MBDuxqTGw9RCwqcXRnBSdHLRt7LaGwaqvTXjPxhVuf56sqLk5ZPeLUkzR8oSKQ66M9XZVHgUeArJ2buwb3rm",
  "key9": "2Y6WQDbwY4QcWVpyDxhXesewk8YCidMv4N32cZfuTzPrk4bfavVX5UDrReubS6f6rEEkdA6md4JBTjrw9Tnrrgi",
  "key10": "3YdGQJY8YXTVSCkEFYeV8QXsxdFs2cQoWs98zce358tBu9RF4UrvNN4dQvczVbDxbvhHPtQi7NkBLzyEDZbuREFD",
  "key11": "nM5zo3WaJcAEj9gLjyiBenJSEMEhyzmNNYAHj5uRwBXc2MptFo4dvDshvmWwqKVZKhLF1mwNN4sAsBF8Lf29HhP",
  "key12": "7BNY6D5qJmbjUq6nkqmqPsSxriywueSmPciKhvQjuyf1PLkTn4PtsBnTQLRSaZWRpV9nruhnTFhubPy5Ha2tKGS",
  "key13": "38ZLaFJY5mKhMvzucYPrMbtMuAtqSawgrrYVp5vnLi87sfQsZokrnUNVf5iebACoVGxQVBZvBFtHX4DZZf7UyAfb",
  "key14": "47Njk5EPYRPXGKRAajBfX5z4JzhocfXVZsf5VtVBp6YYPbkrX3299jSz6wYaC9Xd28RjHbWv7xoy7dggWFYFNUaa",
  "key15": "gF5HkAwKPi65cT7CFzbJFtT7JPQnxJKz1ke73csRpA9pAcFRozk893SzpysYt383eyw2ypZj33x9FuJMqtFE6dM",
  "key16": "3WQKA36nHnqAwz4EdjAG8eJmvheM2yrZxAnb6tj3Ams375xw6HNMTFhV3aYEGw4TH5JHJKSbaTCSmyN5uEbdzkwp",
  "key17": "3iYHP9cUZSwB8HtrbMMCGVSkYBD3R8TnS3WyHUKz19vW1DU6s5fK3Kr3s4mX2pyieT1vFLNamKRvVbjduop5LNUk",
  "key18": "5v89xCtZKK1dT8gXD1n8oGtzqBGRZgNarUmFQmExJrKNNXQKQWRoatQJzcexKQB6bBQyJgBJK9Lqh6ZD5aDTMRmS",
  "key19": "4o6VAFA5wkeQwf7mACcWXddAdcfwgjWMfHfnP5emhwWsSB8bQ4ViFJjh9NdaFF1yKUDRW8bHfNzd6uwTyEMmjYbk",
  "key20": "2Z7KD6j5mh3ga6Mmwsia8pHd2gRXgthFeQx6MZR8Nj8JkXm81pAHwLrENUbib4jUSzPPHpK9f5mQo7x3NEPVygk4",
  "key21": "2DxBDsXatNCv3tjAAGMmTrDMjRMc1Jkj7oWjwqDygvsdKbSrEe37AzZ55Tdqeq7trYtCuPBCoyHXbnsFJGoLqm6V",
  "key22": "23qwaH3CFYLFLQkn1CAMCMyMpaXH3ggEwCU9LBHKMMnR6n3b6M5QzDKAbZ1wLnDzJYLJ3J4ggFkB6t3nPtis59kF",
  "key23": "4WXYxXnpNHCk9fp67YYo4h95MzHSyYWfQ6KoTEAzTzKVvUYjBQrn22HtapRUHRvhTs44792C67hSjiGaAgiRgpg2",
  "key24": "226eQsZMvbR8qspW3qGBLNwdKAaJcnQCb4mGeLqZm2Q43mK1rA8gKpjMZQKoouGR5tB8gBkvciWE3RqzNSXRKmga",
  "key25": "4H8aQisXvyRGEu45RYMEa1w5UDS5euYL9uDWt6jR4P2GjmwMHiasHTdjsEuFdZtumrEMxsuh6AkoyJ2fftkrTFmJ",
  "key26": "2sx2m3rxFZyYSGi9bn4o5gZdzLq5ZxWpJLGCefTY2VFhkzY66gqJpvufhaSjhAGJfFudsks1ADBxfE9en2UdTF9s",
  "key27": "2DqASb8GaTciF7hzmCwayc7Y42Tz9tUWxoEyYioTh4tiXCZvNHwT5JQqL8sHmnHaLn9xNtjiG7UeA9AmA1ynVp7y",
  "key28": "5YX9xvZXs3onzLG2dWkqMAcqWz5AvZ1A7RKxuyAyxzZgdkVgkj5bpTRNKBJemGMHoVhFARhsijCvLRH9SPY4hkrj",
  "key29": "df79x1ziT7eb9ekKEnC3C5xf8AH4GuxiT1i5M6kfwF6NGLBY5ycTifmK2m1xAG6wwKsBZXaGvV529hK6SZJVBE9",
  "key30": "4neFpQWpvMVzXpJYh1L5oS7KEcMPy4ZysZY9pKVo7F1DYQRRKG5fxmkDdEW86vUCWCiXzh5GzNHfXqgXHytRGyFo",
  "key31": "5wguZM5j1KCyyozLmFjxPQM3pe3zfJzqQtPSq5qPDh39pcA9Dq2d4Nv2hv2yqk4gtBZaSJykPhryNb26qSgxDMHF",
  "key32": "e1KjX195pUdKXtqbYUGK3qxaafy6STjSLBFe6bqHRRQhH83d8ARdLn7xZYg1mfwxLWAKfKNb3AAkjcir1Nv1hyZ",
  "key33": "5MfVNJZuusPagv9zymX8ceFGJTEYw9Q1yokaNW6b6S6bQxjVkyCfpAANmMiSvTv1VVU8k4cqfjE5R4bqEeFB5gAu",
  "key34": "2CdXbZGwtQoZmmgnxMrT1BB6kCZew4h6qk6SFt2zJKwFRV23hm7huoGj2z8Zeg64peeBNr1jvgobPJsyom57MQFU",
  "key35": "vcKPWJyDTDHr8T8kJwscciQhHDpqgaZmktydvN6h76q7GZ3dmuTeHebGCxcjgnp9kv3dknjbnW8knqZXQKtLPw1",
  "key36": "47spEbo5tfxFFryEt1iYgQoN5EUyeSUwiJNNDkEACwQrwMRcVdp48EtfNL83naDsDGkwZACQBsSdYHJtzpYjYnBY",
  "key37": "gNpU35wnuR6Bd4aJ8bMQv47oaMkKWjZcNCzsiAokbiKdxMwqkBu3jtehwtAqCdG3QL9BbL6d4MNqvM5QhqJonkb",
  "key38": "3yxAjTMunLV6T9p5wmxgHsg9rB73giETjsjEUZKqW9WREaeMeTJBoamotqVPmBherjipeVp6GV8AeKXTyarBpigJ",
  "key39": "QGEfLX6MBUyh6SKs4hTSuQCSGd2rgXYnVcgnUrHBDcZWXWxmDF574khY5JDvG8riLuQKWNcHBD5bsVY797WHYSf",
  "key40": "3cVNL8t7HHD6UyAFP3swc6aTcuj8oamA8iBMsmig8ApjpKEYdiiw2wtBsno4rJP6XDRs6KwfJdG1qekFfJrTBx3j",
  "key41": "5MXVHkistZiPMArgb8RMbiy2sSbShcTFeLLZov6njT9JuingMX2H1j4oxn1VZVATegfuxWvgRbuwhx78Ed4DR8aF"
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
