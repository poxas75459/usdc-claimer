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
    "2HYqLLoaxhRyAn4PnrfN5Y5WP57Uq7nFLuiowHXyeb9qMcJT4bTqtEkV7owaSyqJABoecSUfZxLETZzXUUhkyfh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqYratjyvFA9SUYPHnMT789Sv2ZG8dYza9DSFjLSgrMmpDhFNUCzJuJWygxmJvFAAAURoTXhfbi1WjwdjpT17fw",
  "key1": "5Yz2N6vmA96hMcGGFBny5DyTa1Qj2qfvCYyQvNMEFC8QH97bKxLTtohhi5ZAVFfgC4qiCN7PXQhtucRLLn9yp6qu",
  "key2": "4nj7qU7YsHaNVesPFgWPqNe4R69w7NAUdJwP86VXgP27ZfLqgkU3kVydvQeMLALfZ4VBAW6CF7XrjTVd2xUY8DyJ",
  "key3": "3DNpjkdfp36BNFTEW4tFkLjRikxFbTgeqXpQEHmcLyWcyCHhewGsfSw49uxdH9kbFanaEqAkzvPFbmP55xbCdeR7",
  "key4": "3Fn83anP6ae5haARC7dSnAgNjLkoe8ibeiCcsbKYgiSMJe6ernVGgqFNwvojYMfUzPqCA2i6DDngE3Mnw14GW8xQ",
  "key5": "3YL6oQf3nBQ18B3HXyxcuCvVb3TDtEnePQC2Go4E8GpG4LZH19ZijkLfUnuGjWBjrwMuyEn1ALsf9Sq6t8EcZs4f",
  "key6": "126hgJjtDqgM6KhuNyexPMAaeXQZFYxHpjNpD6DreHrWjWR2cJwPNofyDYpivBNZeBGLjSrvNb1CyQ5kvyFQkRsP",
  "key7": "3eNqGxFBB6CuRUj8D8PXKTpntPMw7Kk8i1YuwUVwNzGiJYTmHzCtr2QX3fh2BexzUqsMm6eEoEcRWB6S5CsuA1Ky",
  "key8": "4cqGkx15kr3TPrNGRunHiJgTDcAu3CE2caRnouS4emgt5ET2Q6eAtCeYi355yMoYFGzBwKsMpyhNpKkSHJpRgTqZ",
  "key9": "r1bgHuDoiAkZXZqFzsLMBTPm4RJGWwMVz6RPkDuFgYSaWyxGqHxshjPScXefFuz6FnNGCYAUSYvSgK7dmXLtU4X",
  "key10": "3uCncPE6UXZD8GqDt6jE3Y74f3DdfQSHAf3Xm33ZJQpWmMSjQ9suiXZeukwaw76hh4JnxbCyG7PGtZCdc859gv1z",
  "key11": "4zHvBKJ6WEoMxfwYhDbLxt625BNZUMMYdKEjcCs8WbkkgNUxxtGkZFZBTQSfby6FxevBr85qCwVe4yquUxc8ZbbC",
  "key12": "5esMC8PhXnZ5iMEd3cPyHJkKq1Z4QWJXMEKjFKpiKATfjcGH5edrGGjHwveue9pH4UqFwKWBVEc4zKKbTpTCPusy",
  "key13": "5BQkpapdURSDPVcbsiur8VBTaMzVmqoJcpQqAZAejF8oZhnMSN9PFzCuU2sDGXvQBu8uzDP3MnhSwWwuJMnerJ8X",
  "key14": "2HrknkndqfZYrYbAVEZipYBvxfZDJZeh4ka4JNwHcFLXfWFbCnapchNwtAohp3rAayo1atu21RjEsxgizyf974GZ",
  "key15": "41Qyi81WhEpLUeiiEA3uUXgoCqcKZcomegvPgwwZBqk42uUK5D6miFDLsfFTswa3Ua5iScJ65fpa66jpNV6ffDYQ",
  "key16": "4Y1dm2rVxWZfdhkoHgdfrcT7sxTM31qR1EBSXxHzpnj4cw5Aanybj2LDGAKwTU8ybW2yjCwUXSVHqP1roc1njXB5",
  "key17": "4Rfza5BMs3PEtYA4yBBNtD9hUBfA2WmC3C9TpDoP83m6RvdqsYj9u44MTZxnPG3Sr1ZX3EWcHAgxRdhmMmDkB2Pc",
  "key18": "55dYC6pnqXsozTpBs2XncUJjp8bvC3q4RevvLq455g8Y7Cw4HzgKJ8UWpiHrUkbYa7cpuAWNb2LMjMSEHD4DTgVN",
  "key19": "546Nf4s3tJu5hLUZ7kJGSz5CQ38q5dzKfxHFjcwYdGLK3iuan95p1Vd6YLK9dCAR3aamJkaoBAwR8siysCSUKDFa",
  "key20": "2WdwBwif1sTUCBK9hRLsMiuoLMpUc5uqHmq5ECMAtCWFwcqpkbB82qnrMrP6kLoQpRQmSKHP7yBqNtYEAo9R4rKy",
  "key21": "HfDofYJFAUpmumcwW8W4eHRX8bCdJ2YB342n6yeEAoWP7jfvxM4Lm9DzJbU9ZJqWr13YLthHMiehQbDhJuKpsqf",
  "key22": "25f5TA8KF5gKseP1xHfoQt83HBafEg1vvK7684JLdnRW2FU8abMsPHCghXRyzPPvNt3MxixuxNMAxj8CqXMEvsCX",
  "key23": "3HHwNag7ngKM16pqjjSGV2cmwEeFcugSMHg39cckEDeBSDTVKXm5WyZbrZ2B8K6DPLXfpihNPE9TpHSyN75h69hb",
  "key24": "c9tHVECRoU4cibKE22TrW7FBDhHsw5VTcANNCGoEkvr8wfh85et5gm6RdWxdLtAG22kmUwkUVXAoTBAU2JxJoTz",
  "key25": "2idBkjdinbhxHkAMMWTyu7jGdBkEAnUNcfbyc4m28xCivMYJWmgSbAMyym7igTTq2AgLdLPFi8Uuiaarqmh2rXFt",
  "key26": "HFgF9DuKJbU9CqmLXAZ8ASBxj2FMYuhzDYv4frSNVM3kYRooiXW3R3mqQkkCHPq76Vk8eeekxmou9iHTLKjJars",
  "key27": "2NyfqaCfaE7nKABGoDi2QyGRYeyvBcXwPuwyNqeLV6rxuyZowQyFNkeHoSoXZKNDKAyfDRtRKuAN5XpeGqZZEc7f",
  "key28": "hPWjE296bueeTo5kJQYya2GaZXNTg6du54RHbANmatg9MtmSuoW3DUjJhrpR7jY7Q6XG8YPERAbfqCU352qhf4r",
  "key29": "2EzKxf1v9FQuD7XyFgwYzzYmC4JGZ4wnPK4waUXovPiFAwrKjy5MeSRJRX25DkRPGBAK9vqfi6y3jTSs3T8rDBx3",
  "key30": "tbjxbrTm7cJNtWLG6PDv4ZddQKYfXRRjyk7rK9kZTuQyYgYCFvLLVerrKs9CehVESZQo8ahTLKtyFGhLx1PJSuq",
  "key31": "B7pjVrVBA9LyqUkxjcxauLERFg44xMDMoEf7ACT9j6kZkXC5yX7ijhEsYbP3xgxD8qPmQmAB6maiGQ2VWYPooQE",
  "key32": "5JS1DtkGfbX6kAEPRukbHJvTuuN9qKmrHk2W6qizrMBHEHWktar5Juj31LG4Sj5vWecTs7Hs6jXMCKVoK9NQxZBn",
  "key33": "AgtZxBAztxmAc5K6bkoGCpq5YtPD7KRUJPDfu515X2n7ESkix5aR7m6wUtYxRwEDfoZw1gLpJ5TA3YTUgrDcBqK",
  "key34": "3TpZhHdiPdn5XhFT3KooGnihgvy3k9FM3fg6ZtYbouuPRNVXHcN1iX5x41YE5C1j2CBbY5iHnNGR52TMFptB9q3T",
  "key35": "41pL27TZjuGeCwB1aXev9XYTms7QnsiRx6uGvUxZHZzDJaEiBi2QYvJ7x6RtssrA3umTch2CtiWuSHkEgnEAQef1",
  "key36": "2gCBu8AVVyvQh5n5UBBJqmfRNbXubLG4MutHTaRyGx1oNEdNx6y3sgRzyZGAe4xkHmq9f2mSgxcrZ4qhPP3uGz7S",
  "key37": "5mD7f9TiuKkouqfbbHBJdPrJRaUznchdHqKTxvMXAGySYGLcPR5hGWrLrCGm6tUFCSrLvjF7cPjPxM4RNzxC7DRu",
  "key38": "34usZFKHyN8YgAZiEJYrxeJ8XA9skCQPqWWNguJrzvjPt1L76S2BVfjji8fozq7p3VMM5uiq7pk2Ep63UkgCd1K9",
  "key39": "5Rf2jjkCWDYWnerN2SaaRyM93vRFWYjdFX1G8Qbav2V9pSuD2mV1Uj7Do12dJV8u7MEYAmdsrtNYpoY7GcEDbBbz",
  "key40": "5eL1VL2yWnNeFcRqQXRjXn1PQZmBPYAMPbEg4yWp2RbfkWGbGvHnZAmAavzYQELpg2paVbkNVc25ekp4jZQSvMKP",
  "key41": "3G64dB3nVFJL31U5YwUtfxwc36sRaiJSE3ksEHpfZzKxQMoa87b9KFtHQmxhrWxraJZRJ3tjKJVupjSkLRCYXCFb",
  "key42": "2PLwN5k2DhUQAh5KAHYGs57YRkaFCaTzynZJWyTEK2KF9yrHYdD5Y7MYkVz527gP69fWfCqbu4edmPGzGmtQsewN",
  "key43": "36kcXsQS8nEYm4TEiKni7ti7CSNQRyJYnmKLpsFyq9qRU1oqZJaWTXpfDKU1e6wNsKibRJ1Bx31eNmiK2K1KAkL5",
  "key44": "5uCsZ6mPJf6Yp43SFBmsNaRq6eJmmHm6GVeXYEfXRFDsh2NjgRnnhdh2mvMNDPwbkCUrxn9AKKWuPnxEBV5Aq1Zw",
  "key45": "3JbUfdtN5imvMzJjaxW1Qs9i2cUrxzDLNKg7DKtixWTVVwu5dpFPGxUfMJE2PSYh5JzPoyPPpAm864gXngN88qCn",
  "key46": "4yHyAJHY9MDLmFiKjgMoTC6g6YA6W16vifLWgC6xwUh2h7LTZR1XtyPcJbn4hgw8PWMqj6swMZUdaq5i31hBfNV8",
  "key47": "5MYMNrNXeMtuoAWubEMAYnogPnBVudNo5sMGB1QyxgnZJKvgzQuotuspsJxpBNp5a5otgoTWVMR2eJKHGUkkQ65Z",
  "key48": "Xw3SKShckoZSZaMMwK1jKWgsbBEVU2poHxuegvpxhGLYsfPm7cBMg2tAYEByg556BbhAJTQJBZZmzusnhoa1EuU"
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
