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
    "55cDJm3EkV33E1TpmPnyvqXmknVz3Kwq5T5mvcokzDZyudntuVvXH2izWrnG5e7Cd74KKmaQDAfwRxNwPmGmoYiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4aHVYV52gBo8Ekz7AHTe7i8rqiHrJ2VNEwtvaDekBkz2BznVd5kfKaAMxgvAawm94mM3y35WkJnoAzXRet7jpy",
  "key1": "2i5oD4xyaFKEy9KZ8YCQjFvuMAW5mJikz5DSpMXJ1Ch2SWaDUwtfUcmmAYJo9WTVC3oYd834L276RXUHroQHPoVV",
  "key2": "3TmFp7NeV8NH6jYAsagP7vGNva6FLPgYeUZCapTvt9VuSgfommR1mSh4hwRsmEiSLcY7h65QDMo2U4bBAxC1vkF2",
  "key3": "4FaqaJAYGHSL6ZBMWzWk7GfcJP9YeiRNGoHMe5zZUgQaGQbKKEV47JmZjBhLjZU9EbaHxzPD3yFjWSHaoHeYHr2D",
  "key4": "5zyvuHCRMYgSaKRUCTRhkCQE7hrFHXSLCFFNp2FA2Aceor8mDvtxAQQdKyefYVYaqmTH5bSewDQFzQ98VWY5rSF8",
  "key5": "eHU9cugtr9v7b56SxJo9oc6JyyT2dnDe9DRk2a2W6yHtBbk16ezcuKPrvheuicnJS2uaksTA9F4bJ6QC9ZQQ5JF",
  "key6": "4EtCuz8U6MbW348yBF316VHeBCWryrczR8pVtqtFytjPSjQJkHurVx7z9CA7ehtwRozATagKLWerYPkZEqKuUiVW",
  "key7": "5TCFEuB1xXtz1FeiwztJMpWeE168XPQXy3y4RSjBbSFrK4Wzf5pbdpW1aMAtL6u4i1Xiw3hn8bnUb15zNF7JnLje",
  "key8": "3hKFfgHPCUL8e6vsayqY2bYMgtjByS7iW4ud8AneZxTkrWDBkr6MnWaqT2uCYWH2ycPWWY4jZ3sbYfkU5SGAcrNg",
  "key9": "52KyrDVeY4QiQ71oHwbkpXn8ssS1f8veRGAzA79JKVMfNCj52HJ4QLWrwfyfVA1issWrRJxo66ia9xPXxWuop6Cj",
  "key10": "3xTZipUCSbxei97ZJvbPoPr6Usgb5g6LECcoMhFeT1iDRAwET8fiWe2bFmYWtZmz618M85egHJiYxqrE5vPJxZVJ",
  "key11": "3LNmRG7QhPomMEdUMgMrhX9ZVT15SNzM2ML7i1ZQDNcnoX2WkTzGqbH8N2Uc6SiKsUKFQ8u3VsmexR5kBw6R2d9T",
  "key12": "3j5EcYisu9eiW8fWSZzGfPyKeX9Ukxe6yd1sNQD4U5MVR2zTq1t91KZyqPMunf8MrP5i8r3RtYUg1ywzUDYYetRm",
  "key13": "5h7suoLWitB5pAYwcuU7idPEh9QVERgHJpmRsFVPFtTww31uiSBGmoP2yYGzQAE4nqLvYR2myasFJ2vfj1whW7gx",
  "key14": "5kApYKKxQNx3AG3jHJhvJZqHbXj7Hq7fK9yDDfNBNiUqqUWMTnVESSMSr2YFkG3i4ksMfdLHZHbVoJeWssbrRpa6",
  "key15": "4LCHwrwnNqCLGshh5VRRZXgZJENpMnq6ZXE6SuZcS6QxdFCM3kYy6c9deLxuwpg8qRxKA76fZd3Q8QSZkLpDq4JD",
  "key16": "4KJEnRar8SCphAu3EkPNXyjMJ4kwg7cKjRtjN3fpKY1eg3XVMVF544VgjHmquAfPkDTXY3VMkafaCXx5ju2UkF3p",
  "key17": "4nyAMdQiShxBndZnfFnYukAmLtT8AZNKbiDZPTA1zRwiffHMJhPehJiPMYepC7SRX5A7EB84m851U17CdiR5HM7K",
  "key18": "2pkEqgpR62b32R8FcADD8jd7XR3sjMMzHbj93o4w66agZzCY6yum991R7iRoTD6pq2qwJMzufcQ3iFYUiJ3uqxk7",
  "key19": "4VcTiYWNFG2YDTTuQUFPgGxvcbQ7KPph9XDkDBW6uK4MTy4FPVQyrAtFAPcYm12PrMhtjQBtJC75ASLJ7dGrEdg2",
  "key20": "Q5HMeEFmuD3ZtWYtfNAxxJwWVLRgQ8RLhQrspvpDs1bg4FdkLupfHNji2wSvZkKjRoYzpiEvyrzs9c4WYbgHQ3N",
  "key21": "41L8gYbqpKA664NsHePQ9bVJyjRYPnfprsZYpJUyjeEv7YUa7Y8WSYmXwex93G5AGAvxkhfpsDftyVsCAN61zwUo",
  "key22": "4zb57JpDuSXuZ8rfsJL9itt3RbofJCmj6RXmER6HtHseu3EKGwBaSfv4XKKU22a3vVTGH4kVFW6KQmPoGmBpyxgw",
  "key23": "3p8wVGL9cZjBv4AQg7miC3nPh8vjWYt8b3jd7oZK5KkaTwhehBEQbcoy53GK8byFZppsdAsgvjAk3xGwqfUVG8KA",
  "key24": "2vzosxBZinFb1pXKxvPXPiaznYFX8UUMs33Nu461hwHPMCWNENuH1Gr4B62jmaYzohb3PA9xTKwmsFtL9j4rbPgv",
  "key25": "2dz2jEysmbPyszpfr1xuRgC36uMckQMcvYhhaqbo61JX6VaUpbyE5UUQ2byyzeDJUgSUGYvMJniXvhab6ZzBoUMW",
  "key26": "33HnpGm27LPDfVdm8b67eyxeKXkkgjWJM6h6R2mspvkxmDP1XvLZNDrDTEJVWRnrx8optDixJxC6Eny95Nimsvy6",
  "key27": "4gs2mkPsvEBDtParnxqUJmFsuZttpfwv5Ms9PG5Jc883LpgRor4M1iJat9bbgUR31oyjBdBEghCJvwfUF3wgimKP",
  "key28": "2roK3EFeVG7wYgahGPoDEg67Ncez3gPHnufc8ygH9sWvm6az617KXZ6Z4KP9JHVWXtGtJ5YmCugfZ1GiAzxtJBez",
  "key29": "5ETtdGMWawejdRG8KKx5iTAgbEGYWYXJufb9P2X1yQpwA6QwBRkTwj971mYCVwrRsA8cgwVHqfwp2zoGe6RH2sYF",
  "key30": "5psSDH7mhTrq8YwsCUzuetjEmrnHcBSwdkcE6MEyhe6phNgV9aexq9EJQi5ExujVuy5NsSHGeYiqrPC82cWKZCnF",
  "key31": "3jHwv6KgoYfGdVkXLxpt1HzJAvK6aooXxqJPxnXaLFKVcaJLQ88hKTUghLhn7B1ew2cYmcz4WJw74jtYJiAWiY9a",
  "key32": "36Du51iJPRsvYr22MvThDE97cV4ehnfHBHfmqHN1ZR2uDehJKfBHfoLCaFum6XGMcrXvoDhyPrdwPcuyAqhmh4pa",
  "key33": "3qs9kDfNkDWVoyLQCAM6rZuMD35n726gkocYoJB6wFsYzR4iWmgsRiwiiHK48GyES3ypf6RHm6TUb1oAV98FTTZT",
  "key34": "5ZQruyPpsJw3C9RQ4BA18vmfP2JqJdUSg1MPfnBjxvtWjv4MXSNMomZQy1uHbvsREBbPUkvNictBT3ssypzsfaV3",
  "key35": "5BWnQsypLKXgYt8kiZzBm1LpnP4ADR9sZoB99Ciw4ZLss9K6nKWf7nGdQFq264zt9AcoQeQVgVgoB7SeaAZ2eLLk",
  "key36": "52kwdXaL51TMTAHF2WNV5zJis5ucYp7Gp9FuHLEkoLhgqoxLnrMuAKKRssELfV5RDe9HdPu8d31hM4FvRvGwwnou"
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
