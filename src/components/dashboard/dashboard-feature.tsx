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
    "5coWE9mvzG3UZKRrPbfjpTSVSbfSgqziGFhoHiYkomYwb2eJxudC95ja4XPk6zEeMM8AxU9WNZPW7tBzYRmAZyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JstBDQZ8XsjPyqCkZPZJUurD7pBUcUZAn84uJy9JU8C7Vq2CUFm26xddRMAxdYVgcfQHGpUzC5mK5DM9Ho9o4Cg",
  "key1": "4NMRShdT5invzZyi18vibyzLU2bihnAiKAHVhSeV7imDbGoaB6jnKPaMdATLLp25uPtzHrSY5Jo5rVVF54VvUEPQ",
  "key2": "49hByQxuDhVo4rYMSPM2SiYwzafLJt9YCKUPeYhYPZz5S21Q6ceTymFi8Ynv4LTvLoUeyLVVixECjC2PhSfrJTjq",
  "key3": "2tSrafuQhbs4wSYjK5jRYSSZ1cWpHLZf5ZDbcDjyxzYvY5gawSgmBLJy5D4o5HrzbKSpysNaxYEQmEDVByhtATfM",
  "key4": "3odcUiFbaD6swGor1nMHe7Xp8nrmbQAmvNP22THrxn5FenTiZCVUFfHXcfKQKe3mJpZQPxzPkrC9hwbtgKjSKrU4",
  "key5": "4NCz7CjTAQ4mZSd9hpYrj3P7hWssba1y3FkZsguJPJwa2zLz93xQZ4rULKEBZMfBRLmWp9voEz2UJAcjh5PPBNk7",
  "key6": "HZsv1L786mqri55LumcD9ZL2sJgWDqDGYd9FWPYEe6DJ6kqxrP91JY6ENufi78s5xUY8PqWbvsse2GuzvQgDyuN",
  "key7": "3qWyMt7b9pSuNXgMb7gaCc1RGR2TD3YLMwwiBkUYUwk64Pxb5eVKiXFsoKnN6sRMgicNDP2iEvM7FLPjAE9kbC9k",
  "key8": "9BDHL2A7ZBgCs9aAcPG4fSE29Bm5H8qSbDpytMgBe29CH66jsqUeFqboHQ2rQ3ZfPbRnmEzj1j2dZgZSgo4CX8x",
  "key9": "CNLB8SEsT2nyJ4z4SwqZtk54y7mHGwREUeVKjpNidKhHNHqJtrH4A6mGoL94Y2J5oyA5aRTbqtVRBSCWi8HXyPN",
  "key10": "2TTSUNkKXW1QkQNTwLHWgUZ9YmHNo31KTXnzyASVZPRve3FpY636cchVsWMHQoDAkxVBzajFa5Mo7wA3EuJ9EM2q",
  "key11": "58TTfiqrxTV4gz1QaXz2kTsmetM9NchevYsDLKdC8kvrE88TA5toP9qe4vzsQ79LP5UEC2nyruK4rospA2oLuqcD",
  "key12": "3g2c5DkL9Dxi2hcw4GE2Qzg9G6JNAmqkgWfxSYFuq8kUGdDWp3zQkTcWKgS9xa7AAp5bYMKBpEWXAQ2FnE6UyyyH",
  "key13": "381D9gEUcYiCHxKNo5vW3SgB8krPyhmvwDiK7wSL9nS8VGVjHbKs7BmV9dfaH1FQBA357TKoKePtrPnwczvw9Fg7",
  "key14": "SGyzs8nmFUu99eTkHoggTR2b1NijeGJTtm1WrqSnrPop9GxepSgYNPeKChf2D5QBg8v4KbmrcFkYZaBiiDHmTrU",
  "key15": "5NZd7xq3aKWq68qt4hiyhKqLdqToteZxxpNButKtq5wQcgVyVNbF56JEAVN7wnWyAdSLMseG3Wt5UakCt3Kwv3HZ",
  "key16": "5tVoW9PB8ToNZZmfGugA6ZVNPxRcaqzcT9N13YkXXn95NTPzPYbVfxJDFLbVkQv4ETbwgea4oz11SmtyLZ7a52Kx",
  "key17": "2opkCEqGGWgqRXDzjbHFpG2edyJ9oKCkWRfZdhcYxUNrcMghbFdh792Vu3XwMN51bX5gx41Y49Aimk3YnFUsSZAQ",
  "key18": "mz2tM8YD5t2VvrdiyvocrK9nywHYYco98QNhc9rJYuguvqAREt7qfiS3xcMhLYSXmvkWuL964jWacDZFrGhSkfg",
  "key19": "5Tb6J8Z7vbHJFtAQG8ZGHE6xQPgwD5EYVvNt9Sw3RJhGVqofdNHCiRUvp96d2QJD9cANtEiTu8BvYoCmHHiRERfA",
  "key20": "cpYYyAcucnaqk7cJB7F88HjeT7WXVbhrRkMiXdUjNDRNoiMSqbMsZbWyPBX3ACjYUeF3nN6DTZtphEdseUJDDee",
  "key21": "zG2UCRHiQFuyS8T41q7WJbvqrbvSXATF2CkdsM8ibafh9UYDHCbrsvfyRZ8sjuk1ab3oZRJVmKvXsqf3hyTURHn",
  "key22": "2bAkMHPSbZpKeT1LuT5pDC4AgPER2CBgEb6Q6T9PKcUH4AfJwV8E4NZ2GwzryH9xrgpYWRM4Lfh6GocT4HEPTQUS",
  "key23": "59YCE3GFdkAmW6SowQDG9Z2XynLFD8Zhk6jDU51q7Y1zXvbFJTtTvDPNJsuuPfDrvrY7raxhBuTLFu3jpeBth3jb",
  "key24": "5X29dvDr6bG9EM2gwX5pxjZyzjs7Cik56e7G9XNYkYpYwNzV85L7HzjFLr4L34cNhNoZsPQpRMrMuR5CoZfZRXX7",
  "key25": "5tMtukZZqHgGLERuwZMg4mJB3ohoDqafMAWTPo8r6LJsXVRuRMzTxHTXZgwD9H1YqWZaSCPRinkcPxMdeEp3GUuU",
  "key26": "5RaNVgDTyAEPksrP4oPRif1Y1m1PnZ2uQdBuDH6aNEkVT9JhDhKGcDdziUHUbgtYu7yDgLXXfzHffYag3SG8Yfr7",
  "key27": "2F9iVeyYmH1d1a5HmgzD41tazw85ucMzYfqqhAkYZsVads7ctDUH1bS7ZFMdqJRKoHi53nbbDtnNe6AUKZ1sVnAG",
  "key28": "3ga139BZuwLjxg3aAx83umdkJunqDEJFYrPER2cKMgsbCkhyH2T9gk7HBHDwqkDRMoSVgHNbnAKqAZC8c1kJH4Dt",
  "key29": "4LL5y4G33WWZA3Vzg8DkfSKHtjd1zgvXxram5Sk1yCmf4j3g559mU2DLJpgr73AQNRo4ghvSw92d5rxgxEvCxGMP",
  "key30": "2eNaYTyWyDeqhYdfrLWfMuUk13tjcpD9faAuau8U3TqKEBmJbV9LxNXA6uWF2Gyp241SRsVqcArKqHRAYT6p7nmF",
  "key31": "3j9SBhVXrf6ZwXwKKSXvjJ9PeTSj1HEyP2xjGy8iodsm9pniLuQyNvkJAB4SQ9V7DYob37qpCkmpQyNLoHcW2gz1",
  "key32": "4UDaPMwtfRBfxQA8jbfGQhp3Nh8n4Rc3Dvo9e2T1bNjPGGGNZFkLgFSsBXwebtkeSQzMSTEyRGwo3ypfMkznNPmH",
  "key33": "3HzynxDMdMZtEgPpXYCriqgoLGW64PCYEwfrtCRhhDdWHxZgDRsbXH3LzDq9byq7vfwedmtxAqBq97GJDMf8TdVY",
  "key34": "2tYcKwX56aLtughDFrokN4vv9qBRGaZs58z2AdQHEpVSt9LaY56HeaiHYS5ko2pEvA4U54Y7cY9qms86QUd92ZQe",
  "key35": "4i1gotq8rX7aJFw7yiUPdH1tYcx1CXRYVppBVE9GXamzsLvBRWktXmExa3j9f3iPGJX9aLC37uqorNFENK4ndEFe",
  "key36": "3BBRc2L8qA3Nic3bzoUTNFTXQL1eYn4jgXmhHgMGunguPUHezxn1FWGmmJNc7QdquySve3pRXQBQ57teWsmdPc56",
  "key37": "4MatiTd7oWHNyRpvMXDtsnA3L2fE4ok8TYtHsfPZo488vzLT7d29R7jvLW55Yu5xAburPCkcxvB69YtquiktoSku",
  "key38": "3WCjSV9Q2a7YrwRgL766Dxjg811XCtBPYix7E1D42XSNn7RqENKRg3U3YwVa914u58XUaKiJQu5Qmm6ge4hpfN2s",
  "key39": "2KVWynhG4xPYzEPMWKmBXsbgbMiQQ95cMSGqmupDi3V6jEihPzRyXb2D89Gb5nh1HHqHsh2T8FTNU92hFtx9NSbp",
  "key40": "3zHF7S636cDeRj91B4hKsFM3zVi8R228jHai3W6KoH9mm9sqy2P8PEHJpg6sAyLtP6Nz5vrZz2ijSA6ThQUiTbmA",
  "key41": "5CQKfBjDQs1sEzz1spBaTmd7HdJMswjfCNx5fc888ZZSM86aww7941cFJWHoBHAKBMUm7zxdZg2ue1FBMkTok7ZX"
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
