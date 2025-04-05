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
    "3XgYMR49J1pQBrdWRjj8zkUnKtAUQuD5QS5xYU7HohbW5FhB8eB8xdquti48M1LH5HyoxKVzPrkzSUyB7N4XJbut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9dQFhPL7wWExcWzmUYD84XojmPR9rDhiW6EbjpKAYJKbkhMbLwTLWKPYRGxPFokvJfyCvvb7gqAvS4MEafuv1b",
  "key1": "4zqFRSCRJsRpygkUv43cACAQ9UotGcvdH8CAYtDKHdat9vLUj4FUsvqe3Wpkhb9t4ain4ShgcyW3XuMrQvajXEbS",
  "key2": "43EcRkxuMTtqcR19gYUY9GS8MVSseQ5ZpWXzVEXySzxXrtZo8Kg1MSokbaoDFbi3u5UuoLyp2Lwo9nQ6d2qytp2C",
  "key3": "3Szf6WS2Bpt6UBV3ufFtEvJa3VoqCf6pBiBaRhhLyXVKCVQrQobz1hZPd5it4Xu3quy7b8DXWRww1LJ1hbW7T8NC",
  "key4": "FTMM4defN3BDmL2A9BFmJ35jbgRHUAgfWcrC75Cpyg2Km4h6n3p8Tbvuwf13o822uSftG6V8dix8DP33y3U6jqo",
  "key5": "27qkWjJDtiwjbqLbaatN5mSsXkCHSqXGxyj48abkDpafG9XqtyFVEXm1iH2mc387SRoJ3w9miMVkuTgcwethafJG",
  "key6": "LrRYBp9Q5k917ioDEw6Z8y2p9jt2jrre4eJUFnECATbmhuBtnfrhzsaXx7D3E7fAFXSLaQjmLhPwPR5hK9jTNTG",
  "key7": "SYN7abKikpAZY3yeroUq8XcqNnZ8EZDPW5L2jf9tyLxps6uYhsRgThpmb4rHwotrMtZHE37cXPeezPYxP23oU3Z",
  "key8": "4cCzhcSGoVnwaEFnJUAj8gvfY9yhponAjXC5SfWBy4ApgFCa4UBAHyUZxmNcLj3DPYMys6PcHDwEzVWxGBuYQqBc",
  "key9": "5Xs7kq5oT3VUzTiuNbpXZGZSwgkjKSXtRc7MByFedVfspLTvuR46bjh2dEmkhx2Zb9PSeNKaujessDy1VUvYKYno",
  "key10": "5JBug1yhWLYFvGq9bxAaCwy4qWxVHfs6NMnjTz2FSVVkcAHDzy8mjHsKDUQ2cxKgH72eUjdamEyge6LJn5gPcewx",
  "key11": "46f65245Spt8HvkD9cgZSLFXMJHjaJUxQ42yqMEAZPJktNtbit72CU7gcC2ZfbWBgWby24TS1Fd79HovCp5RWqsV",
  "key12": "63tzY4EzMAemf2Z3A57th3CFqCphYvPjtiZjJyacXjSV5EH3ih7K4mHUTzPe1ALgfi3mYUMvTNyu9RrqVFyFS9W8",
  "key13": "2djjAJbLYQY5uCTJtnoEswZ4CQ28B17yaJiT1dNhuCWBdLDQpjxB7eVRrbDATX16wp3v5PpKpUKeDBzHTDYFELmR",
  "key14": "67eWHeLKDt3ySJ3tH5g9uXuuYSsMhk2R7zQpkw5oUK9jp8m71GrbHRYB6VrA5q3c1xtFSA1DNuUfhnwQ1fpHs7FU",
  "key15": "4sXbUjNjGhKKcoiudTrQ7hTLDo9CgB8E7iSJVSFbjajA4sqfwzCE4h4NWARTQ286iqXNT1Ar6zGvM4hnAKwY4STv",
  "key16": "4GJo3SxJEeFvELj5NG4bpabMPcjTdFujnfS1yuEnAbsJfgTXE6tUKFPuWb48XYzhhE7fsV1bfw1ukjLDcMYfQJiy",
  "key17": "5nLUHCZJmJCgqaB8J5GD4gEmn3KRhq7BHxu9RgQzvEv6vwktzSzLr9C49NscsBaBKZdSPVgEvK2N4uJsvL9VubMv",
  "key18": "53xdJ4sYVGZTyxewqf9Rm8hi5tABeQZd5ieDRhTc1HrRt7YnRkmkb4VHiK4gmjhtkPGKGsHUZYAFVRnS1PMN3v39",
  "key19": "45pchvJn1pAPF76agyLNCGisbcuAqeFqZPL2SsF34qUyZzJLsSYJR4khAL3dBhUG49efMfv3bh37YHXxcQsHF8wK",
  "key20": "eLSvyg6cj3FFfqTcmBdFdHGS6SBRPBHArV9nzp1KjhifrLUtdPhwixxwQePWPmW82Cj7ifNU4TJLTwUoupEiURk",
  "key21": "3p55kPcpY2k8Dsuo9TmbZYVF957huTQJEdL2YLfc5Mm5jNizjq9pAyJcWRKnfydoa3NM5HM7wKnT3mzsUFPBc2q7",
  "key22": "3yTDDzrycxDGFEWELd3QuVENWvgVHARFomkEFBm3Ze6XgbuLKnLWFwG8dPvmyQPf9XRMWXSPmWhFm6TS15wtPEnS",
  "key23": "54Yo5Wbaur2wakD9637AXxxikCZnWnWg9yAAEP1vacTrDr82witHXG81sY83bkHgqYUiJtH4BqRuCoaxonK37rAa",
  "key24": "2MJoQfgA1Ezv6q6jSmQjg8KUyfsExSs5LUfkhdTKGqRpLXpCQ2frGBPzrQzkk2Sa31jwxK9a7WGoct6nVK5xoiwW",
  "key25": "43dDeoFN1W4uCD6DQeC7bTSCMVUPjik8xuwWEWW5ueDae53TVG6YfqwnFriLr5EULjCepNJbKDsZUjp4xKZMzET",
  "key26": "a3VnXFMnqPNgi4VkKsxZWqnfzgu2EWboPCPNeMGVEnmXtLT7nijJENLKLiCzfWHqQ8Gsu4gMY9yXDDsrrEMFiGA",
  "key27": "3kE6xXiDHRsnhZm12X4vreZuQeCye19bq6vTWrzrYbBT4kMVuF1bRyccp9E29yPVVWtopTHKoWmriTi1DZZE8o5n",
  "key28": "x8ZU7hY1M9vzp6i2HGAM7MfZaKLijUyguzNsH2ufVDJ1J7DN65jxxHTqdNHFHsWL15mYYEuCxoDaEndRThrdYD9",
  "key29": "9soJiPFSkxKwvcGpWwj37UXqLGZwD62yfpKvjUMrGzB1QD3qH2g32DmXJBnyWj6FpK3vzsStJtJkpff8HhSkohx",
  "key30": "3WD37bsiW3LnXo4DGsYiCo9rwsfXyRKVpTmuzLeRrRCm1NUr3baeSxNg964qa5AxPHKvtFB49CYE9knrpx8sU69V",
  "key31": "YhAcz1byDniW6bqe874SZi4yKEYZTWtNFEUCcVSFo8rJkGLY88CuFxJm8XBv7ATCpFkZhkk4YpEu8RHCvZTh4m2",
  "key32": "2pbCFzgBW1Y6mtD5nSrH1BC51VrCsdsJeYWDpfj3hfhSyTCH4STX3F8K3HAjpUgRexa3iK6Qh18xQNeXYTLmvXYr",
  "key33": "5tarT6z9QJgwCsP5VC5BeZD1rNRwXJBaZD46iFbBvvD2Kyd8fiL1EXoJ9SZ2uq6fehhGbVQjENNfyuQZReGEFDMX",
  "key34": "M4jFKA8nAwdTyp9jKpSfP3q8zt5vkN1FNzyr1gQsbpDcWY83UwtQJyvRocvNuaagzNvGdGcWr1CgZ7j6wniNxgk",
  "key35": "2Yps2DK6a1FLk86arbRK6WGupZqJw2tey4KnqS1JNvrBtz9WtG5kTAmesTKi7Nngobkb5qwg4bGBtSfYgfuiowNW",
  "key36": "25NNXEvEJyUd7cxYzzLECkmogyp4SSMHrrjGN2bEKNj1CciGbXW71VA7MCh4S5njz7qwKdn9EoifMgSwjdjDKZdp",
  "key37": "3PUSTsHYDEZNZLAgjjqv5Z9wMX1fYZ7XzGNNDL3doPEdZwoyudFEVU3dB2D46bnQfLQfwgCp1YnR4aSsJdJXAYpp",
  "key38": "ThAwcP5KuumVHzxfVMXqtvC3S8cu1SqY7wLmcTiCtEfK5mazd16ieztcWguv8gjcZEdU6P8tKjjxuf6Cf8GMDtQ",
  "key39": "4P5H6zWSezpYT5PE9oh1mkpoQ31eQgJZqZonH17SqEn4Dqqi3tZSGvAxTZzgPmT7Ac8JqTCyw8mfWXapdihonDjH",
  "key40": "m5aCD2w8vagYUej7FKfzBwHNEzj9zfb6hWkQS2p2qKgtZ8yDj2dhXtbEodNqVJJgB4VqpdENRC7U2R4rkNYWYRj",
  "key41": "3UTmZmxsWL8WFHsJJ161eJFceUyryP84tLu7w7ZTEXz39UxJKntNBF6CgjD1gywCUtCBDnWLu3woHfWYGJnJrtnq",
  "key42": "dHd5rLMw8TXCjCk4KQX2zjaYsn6nu1EteR5JvddcVbKSKZtwFFyLHEprkLtf5vjW5en2fCvq2BTmaao4R7GoSAp",
  "key43": "5hrF7QpuDvGjh14EFLrympmLAcmiExf7iKSUJfdrWoaR9LGryjX4eztnb1JWcnJviE1xWFpA55xFcRj7qunU7E8m",
  "key44": "5pC3BifFYqVSiB28MSSS1AosZBdz6AkmkbHJJbLf5hfKF8gs1KpHdTGcW8Y6iQXuEdSjkC4YHawv9aXhwhtksu4f"
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
