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
    "3iYDYwS86epuxmUCWmJRha8GW8QuiC5oXjW2ghsbw8HxKPcAcKukwT1RsNfeeBR8ppBqFi64MtG2LVoBjEGv54Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBykqracZZTKouJ1FckhjDTwx6E6zDZE4utCyDKaCLnUVmqyu2KV9P8QiajPRrzHMfSzV3BHpekAt3yCFYjUcUF",
  "key1": "aRQ5ApRHf2xjdQMVzfGGPCjWHU2WiVbiiKyHuBAtJnDWhCyqpXvCrWgYo9wwqA97tUKo8448Xnks52vddXxjNTa",
  "key2": "2ep1Cd47JMCQaGPJTV8D63mE4Ys8LJgogAkCPNyQbAiEVH6NAzcUjEcmfS4VM7MC2QHJMgysAFg9n3opWeyGh8RU",
  "key3": "2EYudzDgWsF4FQ5RbigB4vKrLindLftGGdQ2uTVZB6DmazeUqVGUidwx72gDgkA6cEfj2xeXWPkdQVGcwTh5Rv1K",
  "key4": "3giWD5L8mBRbNAt4jtH9aztjLmTkzuoHnmLqHVwA5ygPV5LCriitbhMkLxt4hJpXNsoA2BKkSydB4Rh2Qyp9ZcWe",
  "key5": "4i27n6mRikminNJBMXUYFfDgGJbKT6Cx72zUeZYpYHkcuguWRroCzjDQAWSf7K9vD2F1sPNmDpe46rXnirjJwX2w",
  "key6": "3GjSjyTQMWKCegFMt4EK4jSjGKvmSyctNxs6FncatfMn17q3uvo8qXGj3WjpaTK6bgZzdQkP8LNnFN4MeSkrBiFW",
  "key7": "4TwMebD2bxooHdRqzf4c1FCeRtVFYNgDNk5mFygvgZVEhEuDw3Av1QWb51uwAk1NndQi5MYrxdjgTZrhK3nJAwux",
  "key8": "2bH9iGev3JR8KVa73LKkRbcmbkdS1ABiydtZyYyxvFPNB9SZyERAnsDTbbzR79t5BcVkxdFd5CHyKcpAJE4WkYBF",
  "key9": "wQSXd1mEJR7mJ6Ne7wEEkT3tpXbYmiBxArjU4BxqJUwdHPeVezEWHCW2pyXUXeXbwSwDvCQbGBzXumKWfdGAWoN",
  "key10": "45ZfFDDDsyyZUrju2yYnURyzYjx7q46smFYCa3qm3G3tzKne6k5gQS85w8NZZwShvCX2BWG9V6sGfty89MepgLtu",
  "key11": "2iEu2fBhJU4eL6Pg4GcFeb7WW93o3pRjdt66x71ETssGnrVLHeXe9tcCfGbMnBoR2B8SVFvwKBMmPooyZ5AQnQ31",
  "key12": "3JS7JnLPFj8jgQYbafJckLK3L3Bp52aijM837YFtqKzaFio1c1qNwY7t8zoDK4knjE3DiuHLnGPomLxWBLr61gg8",
  "key13": "4Z28eeGiFKouvjngyVKkcVKG2PPwkML8X63VDh5hLNeLFXo2JBAPUMh9ZFBvuVPiQBXBEqBAmMwZSiAQmyfyk7N2",
  "key14": "3AgbGdCoP2cbmU8ijyY36kJ2QhTdQ9vD3GJFRMMW91t8YRVtjibWXycweVUSA61FaHhgFYMAVJ2vUTAPo7iJhycb",
  "key15": "rHbGT1uq9y1bc7tbNjT7sCNmGu91QMTGqM6KXdbu9JxezLm3E6ECQDKbKVfvcc3jzvxu9z8kWxzb6gQBmWeFKA6",
  "key16": "3qvRmBFKByB6rvvuBjmwX8w2B2mGW8ybupf71naVH2cHDfwNeXdAYyUNeK5rDPiUFEYP3V1XCuESZv2PxyoCvg9k",
  "key17": "64ekefyofe1kzPy8b73rAVEqeKtJaP3J8KGBavQwstbSECspWa2ykiYqC183YLRwVwp4daQb2BJAEWDevq5DrxJJ",
  "key18": "2GGBrRg3DsiP6gqWRmUtr8z73BSPoq5VgFAtyjbEuQyKtT7LpgcMcdVR4BsnjC13wFJ8H1GU4qB2mU9zV3U5YUJY",
  "key19": "3i4MGCB6dZLrXJeyG8en5WmGduDrAMJ5aXfUitPn85sFhpoCQaWe8CwpNcAG17RzYU5fTZyGYdoDkYFXEEL4x9n",
  "key20": "3kgbwkP2Q4jXf1jTLiEPTQJP8aZYoBQgeh9idNpw3eLLrRyCncvQyA86LZdoBoo8yYHwE8asbLXZNoJTquV8daH4",
  "key21": "Ji9PCTmNjZnReKSHqLXh4SRQwwSWQT8tfG4ezamLLPrbyhWK9UmtsvdM293bqdSta5wk6hWdKhrDuiVY1p4H8Rw",
  "key22": "2jXJf8KakGH3nViR9iCjacnLnS4WCUUoFtZcCBQc6L5gQYiVBCcgTCbxDqKC696ovaKz5yb218y81KHMn3dzFER1",
  "key23": "2wH87oBBKJ2PuRfwEYMMn2Gqef3rkZPnpB7jgKfZDGc5kfk1zK3eYNQ91WHK1cKirCboqr7kb7LshWuUxhJMRz3H",
  "key24": "nKMqYy9yVFx1JDRYevDpHvF28ePsyZeyYdw5GG3tjn1QPQecjuCGWEQmj8vybwn5XT4bEtTx4jo8Q53BCxkQ7TZ",
  "key25": "2yB5vQJPCBNpSJEWpMJXTifawKDxEBDjjnYm7V5AUb5tDbZxMDrbyLHPKTQ7SdFM2dkJRjsc6PBqh74RGPaChhbD",
  "key26": "2Srz2wvMME1xGMjVHxQoHtTBxcrX9zHAME6UKNM3m2AsCYzXA7U33BiPqZrony1hNuEzmiFuptGZQq4ajcdfj7f4",
  "key27": "3MEouPXapZ5GapqPqQQALAAzy7WyeU8GFK2SHxRQjGwXLLk2n1r2XiT9R5Zzz5N6TkoFC2CaDwrELAydkDJuzp7R",
  "key28": "5PmtAsaw9KJQM4rNyBED1TLSoccEAABsdiMNkpzWf4nX8rGtPzQeXqTQCvN8Ta4S4JpfaQmykyQbKhi3dBVUxizt",
  "key29": "3jqJqcRyJbwVvZdRBg9XujdC6kRiwh3z4S6ZyjGPQTjfzJ9ZCxoiGr9FzPKzAcYX7wjsuD3jTnHHxJAsJbD1t9S1",
  "key30": "2fqQRzrCivfvhQJo4GgyivgWWzZEScAHGqkffe3LLtUq6g5nig5YcUuZi6vuWrVbqFVfpdAKjTJ6o9iRK6j6L6Q6",
  "key31": "23JLkzf5tuTsK23XAzfF6Hrxc9HpjnsHspy9DoYaFCDbtFiKndAZUkwqcgfWE3xQtXT2cyYh3m65zbUpyRw6opqH",
  "key32": "2Z6mTihjhAp8LPrbb4p8L2SHLwTxsVCBG8YUHYt3QaQwpTk8kPBMGXaynGgFPm4iHN6VrekNEkYmchXNsnrqoXpq"
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
