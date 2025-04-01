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
    "2mBf7s2GuFBuojmeLpDKoVtF7un9cw9vPpMTTHVzDKD4i2HQnswwGcf3nJ9tefrfveRLhZudZ7T8n4pjv1fBjiA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gePx1WS3fWGAdgRxqogoXqNYbGQu7itFA7rEuQAPiaZu6pqLwuZCGTdgydHA5m98XbtCP559GEt1bkV18jpV9im",
  "key1": "52MSDLkYubi8Riq74cfiM9wDfsGNXD33daYw5VmxQpTXXW6DjyPTnANniWaWKtTN4fKfKt8EnvKVH2ZLUgPL9554",
  "key2": "3deWcVmiGvAuFHdpDgdYmqpUcGYwN949hSw3R4tzGZfMZxKZdBpYJjLZYqJQo72xzJxKkDFfL31XLXMERotSovK3",
  "key3": "5zDZv4FTtFKrPqVKiDV12ptru3LSzi3wwY8RjJkZtDGJbVzD4w9u7bhRDBR7bLLVuvyWr1jnPHVSE5bneK1FEkVX",
  "key4": "uAfcq56atJJr6N1axD7EU14TX9Jd1hRTWHD9meou7NdyWDjc21mZ2FtEXWmh3cQ9X1rM32qCZakZjVJdTWhoVFh",
  "key5": "5CTmy4qna9wM6A1fgWAkEfdppfSGCumEW2EzwsxSv3Wqzm2NQ2KM8tT6sQiksNGvJJDJg8dzUkKMEBD4JapFBHKG",
  "key6": "55zM5A75MYg1ZQQjpU6Bu47Aigdj4aUmeMpD1EkPuZ8ujXAYnQvFrFJFhDdLHtXcJjz28WGtR97wqF682C2h4N6i",
  "key7": "5uHUsP5ALZc4kenRnoychrT3tfFABshvEQfveT9wuyQSNcXtR1eTjzG3RM4FKMZn4WY2YYreHjXoVpEi8j9XXRBe",
  "key8": "5KApTSSDR1yzvx9zjvAgZjmwP7CBd64Nnk11URCGo36XydpHtAJUHkpYSt1UG6sHUUpN2p16cFy5Bn1sD1aeuByH",
  "key9": "2wTj23QgfzCA6kcQBMuQh72xSsTHnDT8WMBgj7bxEofzQrivua9eG46ruRGW8puZr9vL7R5bkCQvfj1oHd6tmmxx",
  "key10": "2Jaz6bwBKeb1s8SXhKyNkq4bPetLm43H1c3ppaAeB6PaX5cRLZic7Re62ZecSA9iuFagsSPPmn5cAsQs9y6VVdy7",
  "key11": "2Z9uCQi15HT5ab8bg3iqv6gEVmo325VKEQWv9Mx87fG8K6qf7sbPV2EC2MNmYBgnmeij1mDmMXj8JUzWJuKawNxc",
  "key12": "eiMDRHyZu4bHp4v6Z5THbmqf4xUpeFAQVWtoPaE6QkhXRrpFcEgv9xrEQ9BFQZRYMcPeHSfzt1SUs1trwGpw126",
  "key13": "4samEid1vvaH3PuVpL3hkfzSA92ui5pcnw13HwzwprNEV4WRrgbPRQiQte2bbpYcyX4zcJyLFCDCHbU47krsgG8d",
  "key14": "3hmR77MU8FUvbePDNZdiDdzRVYp7ZojrE5yhLqFwYvzJ8XRW2cwvWn4y96UosB2Dhs9fW9gAcRLmWS8kbUWBkKdq",
  "key15": "47btHBwrrETi8WzVHv5zM4Hn7Zroa74xbJ6Xx1iAi1JjY9BtftU9jZ6UXBfGRtgeVbaAgbETuxEbEFuA81FzgucL",
  "key16": "4XcPHUjc8YeSPA5Z6UJ5NeZaUbj1JdvLX1zqQwfpJFMwMF9tA9ZRUwTpumrocFetDBKecxrnWgyQMZWu6yh8BYXk",
  "key17": "X5d1zsBX6NCjE8YDfyPdnYcuy4XHxZ32rNqPf53wGsa5po5U9YGoYmeSZPh1VWpduif8vTApQ381LnB3NhUe79Y",
  "key18": "2viasDQDcbSSPMtGpCnP1b1Es1XHCK8geTSnceFqdm75FHrn5QrTK1jC6kyJCNLhW6bzwQLwVEkhuhdU7kpfAkMy",
  "key19": "3cZUiXDsufe9pvQcWenZy2KnVh2pYX28Y4JpCpATZc298aSFtjtrxCCHM8Xxg7LhVfS8PMHuEk9aETZJ28SbaLX9",
  "key20": "5SUD77nEJRTavMHQpw5c9wYSwm72K75gE4cqDCLeCDudrezphzrh1ZmRtpA2KumDtxVGYkwWwsdUyWuyW6MB54qZ",
  "key21": "5JPUU5Mh9Ud9rZJE5Le8S28f6hFmoGCTCzM2HvV3f1ovQkH5V54YojevBupHUwxeUh69zzbMEY8G5rhzd3a1KrCB",
  "key22": "52YzSDLHdMweDpGDmg2gahsRwxBvHyS1uyN2eGGUBF77z12NvuhgoAp4jm8r2ddtZMtruEeihzddCjaUsMwjUhxc",
  "key23": "5cogFKeNyyZ4VisSvb9WYowPF2CKWKyTPF5rrz6XTy4ftLCtnhK4U69tF8Pt1cJzUAeZPpGXu6dnrebVToVa2iQs",
  "key24": "4PegW8o6DRLpdiFWq1BR9uRkevigyyZKg46SEjd5cA1Kh41tug7pVf5iew29YMvBQtn5BC7pkvkzKxqQRxMA7KbJ",
  "key25": "5kRUeaJNcxqjKXpZ59M2Wo7BXBTs2DoMwR6uS16EJ5ZpQLa4hrgL3qMRZkRBopY2zdpqBEmvY926gUtgTPcn8bqw",
  "key26": "5FsL8a677Ud1e6PuQGaorNC8fJhXx85QiTHdtHDqg1ooq9xfAaLqjhwVByhZgoCULjvqyJpHtYHm4N9nRQT179Hn",
  "key27": "2PTqAJ67KC4BXoprt8phrzdWApspT4rAjDFYbruwrHL3E6C3c61UiFhJw2skrrb9a7xMNRqe8t2FrCK1ZzEDAN4F",
  "key28": "4KkLvgZPXXLHh9PMofjYshoVWcNc4t6JWwBmvGdyCT5Fh8EwuJRDMGPQtjngdpcz9vVx9CXfk5LrAJtjWJ614aDL",
  "key29": "3AzUumR7uUnM7mytkJhhKBxg1T9ZxbJMsgkqf9DDsPy7VELyZwRjFwqDHcPBVYwk7rcqMHyfZCAk5DGxbVS2h4sn",
  "key30": "5o2dh3X6qkgpXzpZHiSPs9KTrWGY4uXM4HXXDfxevUuERZ3idMzu53y9TKm72MDTQGL97mCyd7fguhWtorkeP9gB",
  "key31": "4R98G84RsviEZ2K1HFhn8ZoABeWjRRPPEHT5pBZxATeTqxuMzHp2JZkWvU6kJWpVrmThACeGwuRv2tE7Gy4qZkij",
  "key32": "PJ6gubZ4GqJuwK9U2dhqsfGmAk71QNfLcfirQ6DPxYArVkaWGgw8FPs2xHYmJ3jQm4CYhVK6W6KdW95fsF8vZGD",
  "key33": "3vB7EnXjTK36ZL2PWq4H1KYcc2hBVZcf1ivP5fKsAtbuhfNByuevGautXDWc3M3sS254mEhq8UYKfZYAVKsrTmvm",
  "key34": "3Zvi8wEUyCjtZZG5tXHnYfewobEZh2RQSUHxomyLqHSit5xd79zbfZzhYDENkfnnBcivCRMstdtcjqYLvxxwdiRX",
  "key35": "5y4cTuNQFwq1wPAasvrJPSGHm6z1ustc9aqJcaoBBydpGKTuj37iRmGN4XhcqapG659CvT9t5s64yJXtgUK6F12m",
  "key36": "5G3y2hbHF5QMLDAiYNrzwJR8Qm1gq5TWatEZJ3XGRcSmayRsQTCuew9CpdB9uovE4NNWS3vyMhiSnPorFcY6yoAD",
  "key37": "4MGTeTNNwinMLjWRWfvcUBp2YdwaxcTHhRTsS2s6KfS2XtmNAirkXP2XAGvWyDzx42F2bJdLE2sMKqKsejun4EFc"
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
