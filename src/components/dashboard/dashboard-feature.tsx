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
    "2dmVfcX9fgaFY25RFoYfDpyJwa88xDY6fNrptQkMVZHLeUb3oQmEx2RpuLyuJ8hjT2s6JKjeJLV9fg1jbB47FXvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3CiJCNupkrJU3ZE2GZgLz3UY4ZfSjueB4QsiDPiL6uV9Zn5kM5jSYiLRCjzARGZVD9xd9Z8K1SJ4dK3aTPn5aK",
  "key1": "2ePC5okavi9HT9eMyZdJt1XLF2th64sbPzxvF2JSUzo32pPGAzoDHzQeNEdP7j6xY4ZHdDcJbthzPjWPsvNkuBKt",
  "key2": "M1if9RNNRdJJtW7e9KDgsxeCPmb2Kcyv7Surgex3DGqV9iUMJBcQYiFCudsaBEun9sRFTzBhiJdvrk8Xrt2rN9L",
  "key3": "HfNEK2ogM6jzwxKpWJX76e7KHKU3YB1gh8dFWvMhiQkJcknYpD1Wr2zLXBpJ7CkiPpmHuN8EjhrD1bEgBkcE643",
  "key4": "4G2UkmEqwxT35F9waJDWzW2S9nnKSYGeNe3KXPECV46Y6pNx7CTBWp73pksVuMYjWcu38oFH433WRdLd6kS3mN89",
  "key5": "3tGRY3oY9CtVYVsoRMstMnEH3H73K5AwUth1C5aqmTWiEUNq9SWE2VH2XhyPkbRnFZAGKeDTcB8JtvqjiQoYsrDr",
  "key6": "3g9jswH1xPp2zGHQcrNAWb3f4JpUiAWe2FXEYc5Ee4zxzafKVd2iaA9ok3WbpoydidPQMYdEX3BZ4Hqx9Ruj8a8E",
  "key7": "2Td9o3AJUfsjeMNi5U5KZF7BDigZEgFMo6FEKqK4W1HpNMfEjP7oFj2d5Mjcvgx2j1r3VTz1Jfe6hqh4KyPNK1Gz",
  "key8": "3KCBCFSgfKLyA1rNUm475WS96BuW55dvbYWFPgvVvg1FMbNXotq3jhiFKCpsvgmveyXg9gQVBze4t1DpY5645ATd",
  "key9": "3UNbRyjrEhx3NwjPxFJtBwpTaDm6k3VRfFQoyFJXSRmXDW7R7qL1FeP8kyD8wNWLSRgFQfTTiMNDDdTqLxqrKFFm",
  "key10": "3LUuZVMkZ9oCNPVHXo5qFY68bKMF5AsEf9fmqTXFp7aAx6zNsNXqWHS3eYbAvvjpTZt24Zud8krGCUukxdtX5f5W",
  "key11": "5SQ64oGuGUP8iJ95cmWdetwBjFqQxWMnUax7UmZuh3NsQfAQg2Ltw8R2JFAktku8kRhAc1xzanFsQDYAXiEyxrKv",
  "key12": "5rXUrbeKEikHszpeiwULE3gnWqVm99p8EET2zARXZEYscZghTWui4VrFAuacG6vsyJ2A2YwHGtYBBpSssgZWABsM",
  "key13": "5v1nBjvNARTsHMQVUNtLib5Whaq8KAGkYqrFuT9pnQwAmkzsKku4QmnvPXr7MZsB5MabAR9HwPZ3mi6sbRE7vJ29",
  "key14": "3KBPyLv4irXmftwCugqoVcEZBrRys3TbsFNwhEoL2hcsNxb6VA6uRXUrveGCNo7qtyVNSx9AQzM3bR3te3czyBXm",
  "key15": "xqHs7VuJiaPTwWkFAT78wR1w32E38R4RnD4GHzeqDytxWEyTANW9inixqb9Ec1pysMqf5x5eaQTVJAEj3rk8dqg",
  "key16": "33gJZsA29PufncYZNSGNFDxWLrps4pvhYAuxHogvrKwiTT5Xszh7Va4e1UBmA7Hq4g9EzCn59sNN8dNwzWMB2vjr",
  "key17": "2cs5GFCWWMWGkbM3tigCZqawTkZ59pYcbDUeTEsfsNj49aEXhq5do7AQb9454gCg7NFVgNbG7JgrCcJhBu5w9r4j",
  "key18": "4528kEyxtZwb8NYuCKyKpksezyiWTErjmmAcca2QCkgCTWDmLZ5kivWHVtcGnqnhDderMGfWacDbhwwRusw798Ef",
  "key19": "2USUsvkP5eaCaFCp7j1QPsMqTfpZssUn93jY3VqZviTwq1RDcgZpA77cErnS5zVqrXhAyurWSUaTQWbUgsQbKKjm",
  "key20": "3mW6VwrCQqCFck2y5VZifiPt3gJ5hQtV2uvwmeW41YLQnXX5XsCEB2fSSx9u2wmYdhPVrrYNRQmB8oE7s25Xos8v",
  "key21": "4rYKphNEJNahUJ8HqckJv7TENcDJK57TEnsSNKwFpfqpitv6c13iaYsEQCi6aHxTtyH2mGzfae9GGHHmN5MZReio",
  "key22": "3kD5WPQzZ4driTosJU2M2SggVtrMsgUErGDERxxDDdpmPazoRajT1Ei8oex2WiPp9AgCSPyc3WPNUmzYnXvpA8PH",
  "key23": "58J4P5DJV8eYXDYZnEHywkVCi34bowMCrN5RQkjskjC4XfRZhdQ6toCSMSfRyJpFkVTtCcdoSn52V8YHSPf8gvEd",
  "key24": "45NLcz9xcfZmXJCVEUtveiKW23DCHURZJBC9PoS6ZBtpuq3sariT9fxsran6LyRRB8q5ecikbbzVKK1x242Hy1uw",
  "key25": "uPUkoKhx54qsx6qjqSXZ6XrTWXUvKuzmy999agtCJqXFWj6vtqjhm6hfhf9Q2idtaVwZGJCF5bXY7kisbC5EnX7",
  "key26": "4KtBAoHtiCwE8ZGmEhExt7CmcsbymHxjJTixeDtqpnpKFxFJo95BZuXsNaFGCE2CvyNNoXVHYHuXAacsqvtz5M18",
  "key27": "47VDTDr6Kcr4o5VpA2LPv6ciu99ndmUCCLb7fFXnwFpxgndy2rSW7G3T3F8ycPHBBvRygftV8gwwn8GA4qpuaAzb",
  "key28": "2A3YETXQzFNMaLe8vdJUtbsQmXcVz1Zwas3TnKZsAw6WFGVB5tGY1fRQ3CTKP4xL41oa54iqK4y7MsesHSs6WKY1",
  "key29": "5PeZSuDQ7qtzjet6F7jr8WkDgWtgyNYzNxvk1PtczwtZcU9W28XXu2RRDeoo9iFHYvKKGP7PiEmARXGM2DwjMUkx",
  "key30": "3V3NF1krqV8jnxDDnkFkF2ciX8nuPD18G9JfhbAe1Bd4c55cZ8mSU49Y3ZjM8hKWQjZxi7ccSLNNzQ1dR7LRBmRh",
  "key31": "4udLAtnyE1uis8urbcLuLsv6LweQBrogNsNbvev21Ff9JHJB8kWCzHr9UYpUjeRLLCqMkxWsttrAup8HMWEYpfJ3",
  "key32": "3ghiJvHzFAenkw92dDqn3iXNXFon8fivR3kKQ8YJiiLHZzKpNxpRXSkUprWuUgKtyf2TCFoXgsdD5mrAWKybwBW2",
  "key33": "3aBMKHqcxvixQVbd5BYcQr9XisibJM8TwAXXXB7miF6pYj897gugAUK3JPbXa7pRKEDD5K5hkFVst3bSEZ2Bt73T",
  "key34": "5dPYnzwykd8DPfM2u657U3wMfySkHSsKpd6hT6cW75d33yB6CEU2Ldf2YZTqxhyjarVAoDo5NG5VfDrdG7JwRXmX",
  "key35": "2oGzJkaXRBeaietUpTsr2hwcPzNbvsaRRAF2qCqTQvoCXwqGXEJqCfxAtpCYmkUupzwiKKDq1un4RJZZQJaAM2UG",
  "key36": "5LiKctyJcJjH311VAgoebg3Doke4sZMCN4mojU1AaGHoTvNDQQs9TEWDiYySCa3P5H5qTDjc5LSZXdz5D8mdUw5Q",
  "key37": "28PxirGtkzzY6j1JMgDrah1qnhcRtXVZgHTcaRwJRKXbGsT58hmECV4MKJargqj8GVRuWay49vHtxe4eS7KYVEe2",
  "key38": "5waKfGDbWdgZPJjX818rKqHZdnJrcZcsPre54A6pk728uKAc3xbu8PoFGD6Cr9zwRkRpy37RN54pwmBLVQV1X51z",
  "key39": "5FEwKBPWdEZPjNneBbPeLzNELemHgLajdeEcrmgDJU9fgbdzHrEiVi9KrcDb3sYMEDX1ALGJpukqB3Wje1QJt87a",
  "key40": "63WnyqefFLBEBCj7mQfjXtub9sLAZPFnVKqd9pxFc3ZoTapp8VRVsAZEsaxprktLGXkT1AssEj63x5iQtfzc8fgJ",
  "key41": "Ge7yyxxGcaG8Wswq5HhWCqT1ywWtcu9ztmVcHP5aHYMgsYgvZYdjykJvYx3TVgpvEDveshhWUz6Sjoh1Y8PDwVU",
  "key42": "4agytei8iyf1Sf9M48TvFfYPrS6FGGnFrLr5KwCDj4XPNf1mF6duNhWXYZLNK3ATv5Dz5VsS5x9CiQsrPmgtMkGz",
  "key43": "48HXy9fkCoA6Y35CASeWbEWN6st561j1bkJC42LCMFWvD5rr4GGF7FBc9xKuuaieccPNbW6rqK5wrzKMzcQpmbBg"
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
