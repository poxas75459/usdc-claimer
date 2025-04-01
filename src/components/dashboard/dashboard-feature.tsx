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
    "2fyxPBern6qfdEM79Qw41LccDioCRDzGtnygnjjoyLpQBunrrmDWagJKN449iBDU3mhN1aFyvoaxDc5mdnXL7LUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RDSH3wuB6eFe8Q1p7HvV61dz5C5p63LMpwnrETjJCCmv5FWwTDj7CdzC3v5nwV4PRzorQRyQ8Rzi28mynMKjmiS",
  "key1": "zA48uncQ6ihD7ivxuzcWxctDY8MKkHseLQtUP1J2jtQkLNoUtw8YiGgr4wQ7GXu4LHbvXrJUJZYCnnMFyPnHcLz",
  "key2": "3aqA3pjMWDDH4ZvWBNRneToWUq2R4v9B2eb158qhgrspVzKzuux9Cy7eT9XSysPNtn7BfpWhUZw3gMdPdcZWoWro",
  "key3": "5inKMoK1zPk8ovxh24WnYfiMPwjohU4UviKxtJC8qfVnuwoVEVppM5fjGEPw4yq9Z3BhjyuF9c1TZbuSCLmu7MtC",
  "key4": "5N3m2Qcb3ogBds5S1HNtDJ4M9JpD7YneJcLZimTJzBpTgKV3pdyk5K329GekgvWyVYX1E9BxejWD7TQTb8ieFjDb",
  "key5": "4U6zkg23H4bFTAo2LDu2G8DWyneEVJYzgDGY8TyPVPD8Gnmu7N5foc2sRQ25j7f3nNkoWmpk7qZ5JWCyMKnSUhiq",
  "key6": "26eAAHyVvjLMjCLUFWfRE3VSn7BkzKYmagsX3NMoXKWSgZ74tBvhLnqLQAp5ZLS4oaBnRBikopWjwZvYSXq39em6",
  "key7": "hkj6b7X5KLVN46S833iB27r9429RtFqLn1qArJW4JxM7amQMgwZFp3cm4eaeVgYdYSV3Uery9K2Mew5K8d4hv8y",
  "key8": "2Efx2VAxoj2aYE3zJVxeTguRD5Gi78Dbq3xr4pbeKhS5jraKukgV4qj8ryAgLbALkKbzKAomU65kuVJo3Z7sANan",
  "key9": "45vKVvjuDp5VHWUhesxWnX7V9CajV2enxeLSG6WL5HkDMg5fawGt6GYR7KJ4773RkY2fa7ZPUM6cVmFvnUnW87tM",
  "key10": "3xquGPKfbGVzRyqvmzxsCm6je6zJD5XCenTqxWKU8LsihZb52swVw69riU3SkCrpnXGdRvbY5FCLvGCoKf5CDqPy",
  "key11": "5Su4zSKujYMsvVsbm3EQrPN6Nhzms9jvXn1SdVKzZfu3ukWnpREzD55qvku3ytvVeseozZiVaNZoTT1BufQJymQc",
  "key12": "4UV7x7hxQ4QzFVJKoXXtVwg45qAEXqDchKUaSumMiSgBnQEguTspbYbQFUWiHkXHiyJTEspgDnkoJetxQ19dTzYP",
  "key13": "3sPbCkrBFW89dbHXXxTHUyyjCgUY1km2AFUeaq178V5pZAW1WdvEWqvR3E7NunbWxoe519YNkKYXZwUUFUq6H3aX",
  "key14": "3a9yBJeNrdFFfGrTWauixtsbavJrfHYzta1FZFb7eAdXXSHQDerNLShPsNLaThvgEUE1kakGZznJzQRypKhcfHKk",
  "key15": "26Yk9rG8jkPJ4QY8ASCo7gZfmnq6GA1Ge2MmmYKa3Mnt7w1fRBzqjc7hRs9pQyXprJxUXgsSfYjQRKi1pxThjKGw",
  "key16": "5ekcyT3YGtHJMVzRkSft5SpKGSTur5uf4wAbosVbCpjwdtEQxwvFzSimBSHAVRoM65GTGBqWatjnsNGjPPhm8Zgw",
  "key17": "3x8McAEz8EQBFsFGqeCD6ZTarH7VxmpgXy8S6rvSw1hkjJVysL2JYz8H9AU1hJ5C984m8t7R1aQ6t8q7zB5jT778",
  "key18": "516ujp8kSpK47PkVncgiAFF4zPQRxAap9TfUTNW6MDr4QxdLfBe7qJkQjpDCXwh4P6iCwMptwk2xWdaySpCCuvAu",
  "key19": "26uquJFdg9Ao1cfZHgPDLYHNKVBMo574sBP7C9qdhjwJf1JkkBaC7PTnnpCmnzmVXm6MnbcekdE4sHCQeBX5TU7a",
  "key20": "5qzPTEZTaS9EPkPXYKQ8Uq8ZTwVczRXKynnJdiLhc6RnexjZDp6yMZXTzMd4Pdxrgz3WwDDre6AMNSkUtnan8Ncq",
  "key21": "2VV3so5FQeCimksTQXZmChWQCKHEnwa4yKMXSSEWwe3dwKoTJUeg2QdYoeT86SPZBg7x5ZQSANRvbNdy6pifA8ji",
  "key22": "4B1fAJUqRgL258koJqWC8SFUCxuhcQoik4QWs8dk4WHcQQiYMceDYTWqVP2tgxwAS3Gdnrb5uWuUqzawQf8NiKBL",
  "key23": "dj2EXhkiyESrxP9ojP6whicPLdT6NbNpNj8prmiYkfBgTGcfiwG6vKWWx7R4jbgp3gcztuwJiQKWjYWstRM3Saw",
  "key24": "5yQNp2rirUgSQYUHCQUZHwaSy29i2dXuvT71qjUXJTiudwHaeSa5uSb4DisJGqzcZCDFjosPEdGeposEzbi8MRLL",
  "key25": "2TvPQiRrHTaydMtZYTeyYYxan7XdWNBtAcRHLuUAa716HmZUZFdAW5J5TcLC5ZLGN63RtLfks9oeRM6BqRWmHkBQ",
  "key26": "5HoSC9hD6ZE8XHmdGF3mFpcbxumghaZN1Tr8hBuzCMnsg43xrDhQWGWni6pcL3bu2e3tRD4yNmqXYHutpBCFgPH7",
  "key27": "565VYtRWeKo6Fxzhibiq9nKF2pSvuHJysqc1mGu4gqQRFLwMV8N9fNeYcSCYzKzeWdmtEK4sfCKo5yzxTMLKTRa7",
  "key28": "26DTqCUZZ1Hn6k3fLG1zWPVGDQQyVPVTvhxqoK5TESqKfYsxEmh3CgTxXn7xSCdvsJhEgxZW2iKanec7kg18HcUT",
  "key29": "2E3pHjUhdX3d5MirKx1jtcZPFy3mBUn6DpR7nNWdi9c2768r4qj6f25EUvyqsqNtEj4UE9omnvgQmXqmt1ZnLfdr",
  "key30": "3ukiV8i5VE7yL1s5g97hwS2ptWVf2uwDR1RqamSxc6bFe4SWEHZSQCUSQAGhvnguaAtdsDyemnQGQsoFBmJdEjbG",
  "key31": "45LdWDBsGZRm3CkYQSamfecio6fPVukLVUBn1Y1BjvZ7tk6CF41nNXYL6jtfXTtm9MnWbMVeFaWGbj5ysJ6hh9PT",
  "key32": "8s5YeZN66eSV3JWSeVLM5N94R6z64e6tyW8DQDr8uqVUBwvVw7YYVbLznYrxDizWZYsWBJwiAaA6zcX2VPmqafv",
  "key33": "4z9uyAWiaBsBgbb2uAS5aDpFVMvTi4rW52MZTDCvjbXkFU39L78W4wydQs4cFdLu1JpKi7VX2fg5jCRspcd1f5Rs",
  "key34": "4wiTGUSG1ct91eaXtianfjw25Br9H956BGFKkgyrLvd5874TFh8dSor5GicS8Fp3E4XR1Q9zqBjiJ2hZx3Gz3pHG",
  "key35": "5pmETtBUqMdiPEZwgMXuUDwUoGcMHRYhBE8Vbi3verMxmwoGp57c8CqmVTiu3c1yHs2MRCaDqYDVBEo7fyUvAb82",
  "key36": "4veJQRUDGSeLofYXXN94UgsbFS45FU9P9J8eXopDqJQBVFfFVdBeBGnUi5fwSWhnDJwW9LiivszipvX18z1WWFYJ",
  "key37": "3ax82MYmks9fgNmV4B1wdGiHiidFaKeeC3MM9La7yqQ6cfcaztf1GHENwhg12P8RneXm7vQXTJg3vad5GhH55eGg",
  "key38": "3LLoMy6RmxagVnd8q7DMqoBJjbag1g6AbcwGSUrzWkfvurhVAoUkgxmPRec4YnoZ64wsJ6RAzEPJtt8j2L31pujA",
  "key39": "4KbeV2EUdkheSFNBRyfynEWDNZNmjgaeUZhS44fbMYbz4J1PRUYbNErP1XGvm5JggVhWyoMBkDE3LYSJwGMAWGrT",
  "key40": "3z5pcmUNvU5uYdMPnhobX2NDt1626roJK2aS1QuqB6jzgUzNRuAzvV1Mni9Z5hnvkcvM8EgdTrJtsGn5ug83PDDQ",
  "key41": "5xiiZAiuM37NsBGxp6VP3KXaZxx5B3mQHsooG5sJ29H1WVJLMHg4oCWksEj1G8u3RTCnhsLrKcqB3QgiFsuEVGzg",
  "key42": "KZsfjYaW1i5HdEBC99wCcydTo2RJx1vT3PMk4Yrnu2yjPw2WeYuoDEiZrFB4PpXS9KzadsQDWkYJo3RLXKa32BV",
  "key43": "FPhGFUR8MQNHp4P8Jq1nkzaTsk2TgLX35JrGGSfnycD9UiLHNdWgT8V2YDZdTwKTYcoG5khPp1NDQnsKHTQCZ8P",
  "key44": "28Ym1PAQ3QA5FmWs5cDKpHdKnnH1MzWRmQdt5eSpJFtfXWgUScLwwiaZSxiv2f1rwxEFkQqcY5aFfS1vMVqE4rkU",
  "key45": "3pP8RTkh7vy21VKsVn69PWQfodV7SyF1Eu1HgUW7dEKXPjdeF74sJ2enEe7GPtLyKvnn3iyiRW6unFNLxCLtQber",
  "key46": "qRc3fmK1UtJcS9oaY1cZz6sXAwKJUeQJ2xM1TWYo4wThLngHsahwFnBqJEHkhFhEAhFBgH8bHtPJWb4DFyFTbJk"
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
