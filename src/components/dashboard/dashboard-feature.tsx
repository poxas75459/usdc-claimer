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
    "4FtBBKXSckQoSBz7S5hf2RC4JjjwZmRPdheZa7SQiTct4pMTfgKC6daT7Xv4uC5V5sZxwAMa24R5CPp167qt8fXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfXqtbYPTH34sEAYJAHFS4UrZNyY9CbXGZitDbL4PdBkfxAYcToecsd4SHWSpCQWsMLPhbfh85KFARjJeo8y5kF",
  "key1": "5gyTkWigpm4C8xMapsBLbjm2tUafger7hbGeX2CxbcC4UZsrbJ7HuE9CJ5PjogB2jPjqFF7VqEL8wQSWzed2Fq4Q",
  "key2": "4kyLfVRZ2dtSFFC3PoiDgS57FZe42PjcgYYeaYcJXsnii7ieT7FJPJgGX2AhLhQMxKoz1kC1xUD8NhfpP5qg6FDe",
  "key3": "5nmgMsGNKvStseRNiQF2SkZBMLy9QVvK9sRKnBM1uspMiQhWpSzdSwa8WjQ8K7rR9DHUizLguLtnNedDHUnfmVDQ",
  "key4": "67UM7xudhkonSNRP5KL222paPtibqzTXsNqdJHASKyDXq4GWyA1jwZeyutCAdmSzrSwuXwWLvBMTqvvYvDrRxHey",
  "key5": "4P6SZY5ArF9VQtbU9g7ryfq1UoVPwFLomKqb8si3AzD9z764ve59X4EyAQ7kqopTbdMNiMjUWHJNC6PWrVMbiabk",
  "key6": "4RvZdo6NvDSQfYXoBTWDqmM2pWW4FCxMRs564s3Y892dhSdV56SjRiEJ1hXXgkv64sibaczaeWZZrnW3BEyiz1Mu",
  "key7": "4KAcpJ7qRb36vomeTtuW4TEgkogJHUec2bYN3D7CYC6KEBemiLik6wPvH37mQNDcFvdHWtmDiApd39ouKALb9AD8",
  "key8": "QEudN1fcKrZa1D5UKr82NS2zXwcFfCaU1coz1EvMPEnasDVqpCdEMUEYQtMHiLhsAfZTkgUke3LuPYYnqfPNXvH",
  "key9": "4tkxKib2HvwJfvw7oTpTVpMCbe5K4t7K9fXJ1eP6V5YJe7yVjizfpgUuGX6fvUtovTEmPe2YFoPFyCdeqv67oXvG",
  "key10": "3KTe6AbqKRwYvnS6WKXtmHKatNKVDzYvgb2KHq587mFPhbvu8GJ9bYj79K5xpGekSYfhWvuLYQ8JsVUNDdQFV8fN",
  "key11": "5Zd9iovdPjgY9r7mgtJ9kCPnviUdo3eBkKgYVJhBsryHQ9R3CxRRoiUdMwp8GS1mAtsp6FvRZxTSWvWkNobKVoNe",
  "key12": "2efgbizGrvtUFtsyUEXMasWeq5rZGwwSW2aQwFMgHmoKg2EXdaVVDd6uneRBfSUwDgHEEuteBT1WjdeEC119Eptm",
  "key13": "2nYASbXbMXqFX9BiqJ3nVDygRe5QCcin7TnLAXax3DQAm5TUoXfLc57r3931pFyHZFPFtwYGWrvmc9Qv1CQAYWGf",
  "key14": "2NJKrCUnipKmD4pjiJir1xyan7xWrfLfqKC37Zekqy9NFpbkrqcmV3cMRof4NPzvt9nUAA3Pr8opdZHUosYy4CQr",
  "key15": "4X2pv95c1Kj6zn1WxoiyfgF3ZFKJavGcs4nbQmzZA239PiMFQ1nL4tVhWqQQawBqNQJN7UCcEjVRMKujpNJeJp5N",
  "key16": "5Zkn9qNSX6FERM4f6UkT5QdUuxmjYtW8afGFuUHsc4BxsQD7NxgtQJPgVMqYMpjSqqBTAX9joSq7m1e4FA5xZfCg",
  "key17": "4vsg7ukNsJvHUWY3jG7Jt81ozsTee2CyoEUHAyjtFs6vXa5yYCuxWnk8hhWWLNGun7KJ5cGkUqs5oUphEtpCkvPb",
  "key18": "5QkrC4PB1LVMarhu8fCvdum4ze8KjGb3GDgKP2NqBRg1zFyTKAd1NAcEVCXMpqZpdBULPXfiiEmu5p8UUPS7t91W",
  "key19": "3ejRtHERiRoNMQ85tzq7dnFfzZbiX9P3JQCcyhSUG3NHMs8nvo913ZXWjaiAwvsjiFemdqzdoByxPmtdm6PA8z1w",
  "key20": "3LMdCLJTV7Z3eG3niRfNg4Tb87mN2Y7egY4ahmKmH7Qoivy3FQGRGquWzg9cJ6WbnRLvg9XLzTkPmPaoaNTxAvVy",
  "key21": "64fBrM8pkHP3ph3ZqGFpSzA7TfobJUeqGLTHWZmBjYANVM1RC53r39xj77d7t4kWRsecWLBKuFZWHmBYZ6h8pXsd",
  "key22": "5ViuyJzACbGQeJx6M5broKSSofiujzRMQjG6vbk6D5m6X87AyD9HndXu9CKuCjJF1fWC4dT9qp4YkjhAdX5KbEN6",
  "key23": "3mLpgncGcoC5JoNvQXqrnnz19Jcb5CdXWSdphmj9qvMxZJzCfZZiGXs7zr52qv6xPtn2t8CGjdasm7cz8ksNVbTw",
  "key24": "4wA8z6izTqFiqxnTXTHybQE5Ue4XpXmZyWLSru2F7yHJCejMKqu9nPM8s6pjvpwuJHG9vzgHeHGr7iRTtPpPkkSP",
  "key25": "3543NTz4npyb16cGYiYk5ZKN7mpQvKjzvMXg1sQVXrxDWXQ2sriWoeCMZQuzeeiKVwUu3VwU7QoPJHbAw4kd487J",
  "key26": "HiviKg41Azf6ArjqDwLQCieoPvRfTxCZLn1pyhKXz7ZVLqqtZPQukUFUf3yD7Aj4kt87CFbom3bFNGTVBbdVzKw",
  "key27": "v6xzh97Goq9Stx515kEcVhvBNBskWd7BfTzATz4iJ8kvWHDw41tLZiYRYQNn8pVYuyEsMd6ZZAPHu9L8634MGkL",
  "key28": "2Rurc6rRpoNkqjSPdsSwQPWrqS15s8bCKEf2iZm2igWA1fHk3NqynG7TCdSxYGrGPftNAF5XFwgr9W23wgxWz2yN",
  "key29": "5H98X394GFr1ggqfZCD4CvJv2pQn5nUAMrg8C1zEWYY5PeBv3bADMDZuuHobM2KjuavTnf8SLzyBTDHQR9icx7DK",
  "key30": "679A6o2eK6GsdSiSiVBHQAWyXykuZkpJjhSw3CQ1q4XNwgRsNpWhdubukLCsy4txPXxYkiihpcSYgEssegLAqCSX",
  "key31": "4NySXLcYrrpqHXZGMKQRCNMFZCpvHahj8hLF7ttfes5Y1iP3NUb3cUG7prcSTnu8mp3TijMeuC1PyXu1E3UTsNCn",
  "key32": "F3zFi6X5VG9EZYiUqLTYLAqZ32SVL6GHhsisiUGcME7sV7zeXEsvHDztePGQRpp4rSG9af2aSERo4AqA1GK8UY8",
  "key33": "F69YLvAF6sMnSQxrGaV9hQ3f1Z8aeYqbAWytphVSP3YQu21hfphsmhy77fk2JpLsQNiZQJrxVRiNvKNyMkrFxKT",
  "key34": "37rRWDpZcdA8sKAUk4U7f9uLkYPx1cxCoNEFSV4adjWioNX3rh1JuAcLoojgeLxLD1yar1Wev6QKLWcpVaf8CbbF",
  "key35": "4hk882xpsSWo86jUgEHiraJDcFRpyFfqqSWaAyyvCvsoxhSLvRGnCDWyq1XJVqpbsHp9sh9FrLGhGS7wGbakYkAx",
  "key36": "3UmwWVU9RWWxhMrTtvQqra33vKf2V9PLrphgy5fHGxWUpDhR1NjjNSwrn9vKgh57VSjrUtHmpTk98zQ61arEjXCm",
  "key37": "Kh6kT4N67APzBSGCnSHTFBkuAe2GEXs9o9hqzJf9SpLghm6bgdwCqZRB4W121v741cXK1h6RPDtK8yv88ioxyCt",
  "key38": "KXrEBsRn1mjh2n9HYzcvWxaCLGRLqnVXfsyfS8h8HaYjB18Q6TQD3CaQG5HDgQ3Lo4hQYPcJ5VvUmo8AU2qpMbb",
  "key39": "3e3MbdmMwK2SV3BoMAPVFCcKVywEZoQZd3BeWmQrWK1yqWGugEkjgQmT7NTToNrW8tGUYFJn45D9AYfuzMvBD4WD",
  "key40": "5bJJSPZhBx8sRShpCvZqU7xWdZvPWTxwvB9CtABisMSvmsCzyVZZ7CEf7UCoSQdr1UuyNdVvWYMVDGMc1tyKtet2",
  "key41": "3QfY5dzkc7ibeLynzZqgv9K4bbno6utVze5zosLJFLscYqWVzrHKuFP5BWaugjLFxAFcm2VvFAS7eKtmyjqEvb7P",
  "key42": "4APnDuqFmzT2x4SC5jnbno1wtm1Qi1PnAmn2QUYj2qM1TReBToxfQTFRCgUfK1kLUPPJnnbdcJgXjgAe3261MNRm",
  "key43": "2z9RVmFLPq9nx2sSLKEg3bNMxWDuUUwwQF1dB9K2bgJwKyZGQNX8g6askb6fABvpz5dyZD1jMzH67m9i54yFSoUP",
  "key44": "4g6t3KjUeVSey6t5WeuejoEkw3neKmva8qnP3i4kazJLtj6zaSNouzvx52PyZYHfrN9oj25ZfS8LrB8QC61dQnop",
  "key45": "sj9onPXpYc9nrPSscGSo5F3Wpz9aRnzsnEzizy1MH5dVLQs1CBjDmJce2VvxaFnkcEQ4yWNLYoTFSxh6RExVGMy",
  "key46": "5dAv7FEuate7TRYBY8BEWHS4irsasGNL85U5FYKtSx6HS4q2BmmA6bLVSGGg1vKR6dtKU9GrXL6koGTqwnbRRHZd",
  "key47": "3hhYeVwizoLsZ5K2pKWBWfbFyxkFiCmMEyVokVG7YnG94cQ231nyaQqk1qcrvWvcdD7jQe9oFNczF561Ao7Tdx52"
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
