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
    "QZqxC2gCBq6JAM1MwBSv2FY4NjNrj5CjkufeWPuhgN62h2uQcaEPKs5EPNW3vg6rdtfwq2feL8Vq4dF8iGSU3nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655L83BjWHfP6EEbehvSnPDf4xWAKTGgGsauQx2XUnTJwWpHUz4VtYX2TmYsPt73eNFNgX6xCa1rbSwcTr6RLQoN",
  "key1": "TrzR3LdiRxjYqGxjgpHaPZAoGbpmgm7X1qZb2CH6hSL817BiU9dWLJvuXaNwanYpsYHF47ZeWLCdhLq6wXJ5XfR",
  "key2": "5SBX1ZmMzkW2UAmJCUHaL9hvsTkfJDvUyQHPvrjC2STRLT8iSjc4QVN4Ci5DUuCaxSEybT3eVcGs7v4bx24XDeYA",
  "key3": "g33JZyBRyPgBhJeypBSL7Ho8JcHY4QXK7PyVPeggiigcycFA2wgWJjkggMuvd4VsEHN4ftDzaFhbFXHmfacFChk",
  "key4": "jaj4r79D6UqudXKbNmdbbmYqW3S3Jb1XXzmwcdpAnKCeuGqjWB5LtmJECVhCYvpxQm5Y9CDYbZEPzXfBkvHtTgX",
  "key5": "3N1jMHRfsMGTiUAp6MTjWAnLktC1vVwvYwdp8a6TroZGaxUKMKwVdznarkYoXQgdHxSr6ifHt3JFLfK9TrpbThic",
  "key6": "5ENQ3B4F2BV3ewYpoxPNdcmTZobRCCAPJrWbBRg1KmhaPwgaQWrW2HtER56HUkaoV92JhmK9zGW5NL8WznGj6PH8",
  "key7": "2JLFbj5tRuZtF5iEQ5qJ8yvEwH7unNGHGr9rkZvNYQ3xc6A5e6rT818N88WCXZT2WkcdjEoqqDTAVMtgfCpRnWdo",
  "key8": "5et93Fqhv9WvS65SToVJZfEBQtbcMrrN98QLpdfrAj3PS6AA8Jdx4FE86n4x75tFdYUzwSx3HwLbzzJUT6F7Do9U",
  "key9": "q4QHPHvDz6x3AiJbxMA9XKQBQURRnwmbZyVWtFNSQx4HHjKqp9Z5xNQ1Rwa4QhfyY9ZAB9gpq7i8hjcf5wTsug2",
  "key10": "2hJFCs5VeKLeMVW5c1PpBCKN8rj6en1nUNFEBh2YJ4AxjUXqEhLBw2vGSbFvToMisQnK62c3H4ng7LVybzyXZyQ2",
  "key11": "37XGB4QhDH9eSLG953GQZTF9iMHPr39RMVhTrULQV1VwZzbFZ9xPj1JtUpYZaKCtnDNju8im1zpnJmvuKc9d6sCM",
  "key12": "5oLHCP3soRqecuQkquavcPNCAXwdTiEbiUhxpgExiPYC3LejLmw9uLzRHyxhbVZwHvyTwrJk1XZY3wLUpodBxVSN",
  "key13": "4qdpBop4M9WQe5kVk8DFN9aQkQauwrwDqNSrfCvQU8998ZE9arjkjx8HavaP7UgUYHtcmadTSFbbAD7mtcaXhHqX",
  "key14": "3A7XL6Ya8hRCAQ1WskNfpvYEJkGjukouBaGGzhWC6GMYNSzDtL1NAZrnhwwS4UARHDSv9h2wT4QXniPGkogGQ1qT",
  "key15": "862tdHeKYwJiRLKWtjf1hQrQBiarhjMoSvN2SjN8FFWPAZE72JroZKD4pNMKik89pUXmeaFwtiQYHwxP4D6YvTT",
  "key16": "ifw7TmdTTSUTU5m1YCwgdWFvjq75zBfjCLj5aaVQewrT6gSgiEsoR8nP5B5VQzqFunEA8RBVHjAboEo8HfdN5ZC",
  "key17": "2nUfpNLZ21LGquRXGmRmxswwMwBzd2k6rFuuTtxmh45EnXVFxiyJdztRhvWThirQ6iens1UeVUkJaafeHwfhaXuo",
  "key18": "547ZQGZ5LorupJuPAYeroEWewgNY1UqLw6vrPdASHU2B1gz9duH8DFRsQENf5LSUPbHyZxas81rnQVAY2DKQZPcC",
  "key19": "5MkQsZPCK6pGoZRtBikboHfhzfqwqXDMoNF54UTokQMkHNSjvxP8jCfu5UFyxMiyo9M9mYV3BimUaMjHoeyaBx4D",
  "key20": "5sSuYMKhhjrTkexTgFEDZNjdbxwxGYSi2CaxToMh1d6YRZ4vK4S9E7BiUfnVWmjvpVzxzzyRxKzpnvTU2zpmytvs",
  "key21": "55WCea8kyxaTYngiP5R4ru78gC977ozZx391aZkfoCbdmo5A6kDcmL6zPgQBUPkXhbaAcRj2ErHBVZqoYQMHAdcM",
  "key22": "5d94DaRtUBenjPtg74wcTg8bHkhwoZNNtrKXRjWsyfPmXS4No3ayvW7xrZXHFyES8dDiNvvj1rkhT4iTBpaCzuQj",
  "key23": "5DSpPwYH96uPFKdS61oBkjvbn1MW1U6CAWZf631qb6FUqVTPD7vs1zp8oojspjHz9YaAnsvYB8v1huuCYtAwySdq",
  "key24": "5TEWDtF31hCv3WnsdGTgWWGVKSX8Kt1VeFyQRdSxwrjpzRzShhQo8tURJZ9m7VVyB6rZgeZx7u4T1Qgm5mPtPg2X",
  "key25": "245r5L4RHhmmqH7zytnkLAPYfxyZMzyuea84BPvcBif6uJAkVJGbT2vnJKCapb8T7xXy1eyCue9DJiYXdQHWSQPQ",
  "key26": "2W7ihxxsHUfQGicvsXXhQvqjNjYAkUeShsrdXB23PC5rUys44xxPEP3zwcGMzVGgAyScJjeono4SeuTH2UaEn727",
  "key27": "5UYT3HVUuTUtTHLqkwpbRhquHPNea5N2g5vWAM1hk4ajjKEnKkXPJH3P24jQdjMBRVkW6tN9GWzu9Ky94q47QpnT",
  "key28": "53bvXvKsU5pbxiBnChRQDsCSX8nwxQaTkoqXPP3NZX73gNKVRCn7hgiZ9mtmZDGjADphqMBQR1PPNEN4r3sk7DYB",
  "key29": "5DAT4buEMv25faF1DBFLJbjZmz91YTwFEX9fgZnh9jSyREDvXKjWQxsu7u7i4jLLYMNWLErCbQNMSxr1NML6ZxpD",
  "key30": "3EGMNsdmr4B4yAxCeokxD8T4JtMej7mr3dG73FgYuC13iUY44uNvEJtN64yS55SrDdJ4d2UDTd9F3qXEfBxkNaKz",
  "key31": "3MmGrBbHRzmNpwx5oSntg1tFNKj7kpbYDSANw5j6chTqfEZ32S8U3CTgmnCaPL5dgp3cWqdwa2Ebu1PkaaCsu1Dy",
  "key32": "3Gs99ycc8DyAbkoZ5X3eeYn4K5HgysLLJwrsv9UR5tARBzMgWVcNGHTXtkEz1x24hmLgeSwMee3Dj7FLp6knYSjB",
  "key33": "2PRR7Ukeh1FdsxpqXdmnaurGPQ81zduW3hrwxd3GnEmKyvRqiYNSEyJpH9g1vzr1q8rm7pMYdLy2jqhbnJHKqvoZ",
  "key34": "zEz1KxHZKdPWAGKRzDaHVoxygcKS87RcBb4s6rmbd8KAszmAstUsxcGhhbidnEMy5bpZxorm587M8GPssroANpY",
  "key35": "5V4qo9bUuP9EUUfN4BVqqUHqgp9Z29M8d7XAPE71KN9M5KJE3GiKyobnjmjQrY85UEZeuTGCZwiANZK7AG328pQc",
  "key36": "vBLgG91xXQkfKz5Kp2cRhhNZKzTh135aoQjCFxLQ5HDP3ZZgddE3A8r7YghAGHpxuAZkooK77Xj73ixSA9dhdoT",
  "key37": "3d6yaGBdTkQurNZFQcCF24kPka7GQRstNsMeryxkbaoLHUXt7jD29GLKZhkgyrgLGkkPC1STHyRNDHEVMMTFffQ5",
  "key38": "37aZKn1m8wBAKs2VtWFoNRucaMVtuK3DGuFRqXgMZRQ2LRVVitfrvPbpJEVKbpHMA1qiDoRxH9oi7RwaLqqpvhW1",
  "key39": "3nw4Fn6L58o6ZuHr8bTkBxJwqFnzCqhqGBxrM3EMWFTgaDaCpusDoeuPw1KY4sZuiQM5WVELa9JKfn4xjqFQ3uoq",
  "key40": "3VsTeLYJ2Pkhh2CZywdCJQQnzZUpmCfdeEGgP9WHmnVS77v4SnJYYnLkxLoqHhj7MxPxMR3v1gFv7yfQYjVWzBET",
  "key41": "34ye4LnDuxxk7M7jGFBsph3LE1sGyz5stmsdrts3VbcpUJnYUoE6uJzcL6s5JMtDWqKsiyoewBzGDcsqnMN7Ek2E",
  "key42": "4DdVtKgfkoQnaNBDimTBH7vBpgNBMXGmo4q2b47eGnX8KgZ43aZf6NykYQy7iza54e4YHoTLz4ck3N9K7E4nnnsD",
  "key43": "5rbfA1CDT35sPV2XztspiijNAjjiUUneoBoWtVgrM4ijwPk1CuE2KxsFzE2QCPfZf5tTt7fJSAPNTsFSLoN887Lr"
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
