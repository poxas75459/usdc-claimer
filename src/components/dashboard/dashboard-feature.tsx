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
    "5hx6fPFDQQhA9rPT39tzahEqRw9Nz4LGxcLspwy88wjdjCixaJP5CWkLpHcXoCwD88dk4hW1NPQVGdjyJarVbLVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGfVddVVDPnWvXVV4yVN1gd17HUJcYTuGZmprjnyEa3ATY2wJNA8rL4gAxD2vpbQiGjEJ8BmK6g7CaziamGV9Vw",
  "key1": "Thag9FPBKb24SUCSHpUJLt4ihPo9tLwxpWcCyaiQWLwhjPWAecGPfq7RU6YgC1JMR1zDyVu59Gt8RV18LGf1w2W",
  "key2": "3QN1gPovW97Gc1P3tgxUB8avSfkYk6e8fPsPHVvpYHG43ZndjM2SaF79LDWLMYt7rn65EwMAe4zUSTCJqjVTGNUp",
  "key3": "3f7LYGTNmaWECkU8xxuvAVsRWCywGL3n7drc6GtffVswJb6oHCLgBJoD9s1byqVmHyoYnjzFMqfUJXoeTJL2hpp8",
  "key4": "4dzVb4pGsdrt2KL79Dv1jkfnaP9UUEW4F4WuGXqLt8UywzJXVUsw7wdQNYbBzaXWp1ivP5Dmcfdan1GGZ5vadPAy",
  "key5": "5bNFjPGt6yBp41JkmakuEJfzf6jZKp5srhrn5TMwDNCMrxp9uGpG4XjrqJFA8NMc8XmDM8KqAvi4XsovSwNUXP6z",
  "key6": "iTZ7Jp1yqZtTgWx35EsGnq4jbJmPcRQTHWpF4J6F5NVDVxZjtNVzuoUPbuEcTsHZP2RotVSrWuq9wbJN8hQaYJR",
  "key7": "5aMuN4tL9VoeFvhpiQhnXzdv9zJ4SP5LwETD2PXEdLjF1pYnrxnN4YeKyUgCMB4XGWs5BCowoHXrdrAybtcrK575",
  "key8": "54LJZruytR8CDhgoAvZcB7EycyHPzNAqaYExf4HXEJK1bzqL2YrrT5g1yZdHXdxDx45S7fceuzPLGvYnhUUC8QQX",
  "key9": "4L5woKrqY2NRD5B6srRMtt5999nqyoNtyvCBFLcZuf35y5GDSsyUuJ3i31q7Nz4pLRcf8pB2ofCMBM6xbP8Gwcg9",
  "key10": "2pDrQHRNtL1fYQ5uK6cmTx9hASLEoXwkM6CjvzhDJ63cYhr522aJiLHxjY4zLrQDjzxE2mKKBz1MyHarLFzCrrYD",
  "key11": "4FeSfP3hVgYtzBNqymz2pmML8nAcEUVSEUZLvZzwTMbejYQYawAwy8ZxuPSoV1EDB4ZgksYVaW1QDtJWeLkXvpr8",
  "key12": "2vepYer5VdCgFEju97JXq4C8ha9jkrJasp8dX1KBnTTVGYmssCwy6j9dk77xkVASvUT46DJf3qnN82CjRCv7sHDq",
  "key13": "554xfbqV1ApFgN8LbZwiowXT29MGEQ4UmT3DHJx6qCKaUaT32ujWps7hy4k4hMAWZ9nAcwcgLoynU9yDtwfNjbEb",
  "key14": "5uJygs9fJgrfqaWzLcGx49couz8k62Dxu56SHQH8KSk85Rss2GMpR83cvPqUrwrChJ2XdMJwNy7njTeSZNHNsQdE",
  "key15": "5vnPyBrfucVvcTEZEt9v4589Kxaq8BGpq2g8vKvnCTHF44nxnnsF8SDDuUj8ntxxKwUx5zeSeNWZpYCuHB5ZFaXd",
  "key16": "J1mhdgKBe2ziSoQfDS3PqXRp3tsduM58gd5SrHSXjdAxPunC8QGvZAvdWM8Pj2cbZagV4hTfPRdC3swGdPdCfub",
  "key17": "5Wb9jM6z6J8PUWUc4h6xwxfLVhHqMMf7VdbgsAFo48fSK9RNFrvz2iq19gYcFxxeZKdkZeocDmFLsLoW469iDu9M",
  "key18": "2GaBzPVv1w9WHJchFxEH8ofijjiCuihBt58Dtnf4S93Vqdc1qcqzQVFUU1QitdYeGnmG6EUrRBkYgwRQN3gXT9Si",
  "key19": "3HMu3T1TSFLH89FTJevVcatost2KeqhpfWwcwNsarASHZc9b1JL2CZbDjxfpvAcRAg714o9FiGhz43bihhG3FPJt",
  "key20": "18T399pvfPcSLYZmqFLzD7UjDjeug3gf2tTc3hASqdeowDrhyutU5zuCBFiFe7oPfc9SumMQqJXZGKXpExVdSYe",
  "key21": "JCHZMZfvHJ12RyqNc9ALijvDowKacYuFhiR8892kL3YFuUkNwKxfc78WvTWuNndBmgxt9q4kjaU9682HvNaKtCE",
  "key22": "2UiyHKDFmxh6m6K4Kpx3WWb45zMZVcchH4mMufhrHyXoSaXkYKWxeXSejMHWVxJ1tbUnXbZmh5VDRtzynQHY67aJ",
  "key23": "3c1atgVxGj3XsQFyqhnmHcvozrbYAvyddFtssNqzbHTnU4zj6biuBFYBGdPGfetKhLxSos2TfKQhh9BiFq34vjwL",
  "key24": "3ddipfCoQdp3smfCLgGXMYyd66zL2vk6SYSYHuCKHP6rQ8wq1bXAMCAb5higxtA9P3mxCCSs6mXtRFCGDZCqMRfM",
  "key25": "2HPUnDZir5ZKhLFxrefheKEyVsdS6QvQ98XCGXor3LtGn9Hd4TnoHSzcPEnCfCjrQoTWYfioKKXe2virXKq5jZ1v",
  "key26": "93jkBfCyxcf5vUJaghcmY48dnFx159ni6MRNuCZoD29427VxPDa6iRG5qQ4VAW6W9spdranWdoLQn5ZvU7gbrR3",
  "key27": "mLeyijsJzC2vGhFYS33tGGpkqoirUg4tsr5Du1KDgP8u1eeD8jjoiBuZCEGhU8Ws8SoWYZzqVrsqs6x9Xe6N3ZX",
  "key28": "LjZmuq2LC5TAn1fPzSeuoPptRRD2ELSkbyc7YhPtYWSJqrHWNeghj4XSWe39P2te7k3DeBVuhsED5oxcdCEcNFT",
  "key29": "3yUesEN8236vbpodH8ZJt3mVy635wjN61mqm1FD6hXWuWox5n1S4iKBCbaMrWmf1DtXV56ee1rrNkfsofjVAAShE",
  "key30": "3Pt6JA5LuDfGmjUgFXFWRyCnB1B7nHkFxqRAv3AEdcWwT5rLYqVrVtiWhdPuFSunxwZKpmn2C7g9G8m94u2T6saW",
  "key31": "24QncAFf4gN1NHpYFVNBEcyAi9pBbdy7YEN4z1bN5TqRkFKMYhsCN3SiF2EV1HTuWkSGThaeBemTcYHzaZEaYhL2",
  "key32": "4ZsuYDryKP19be9ygEbUY2MXZApZAriFXBsopuU1FUpL3xhZ8Jtbc4zVJ4cp4zijDB8Dme5rphKby2829nS3GTtM",
  "key33": "xAHqep8qMH8qm2JxKr7oCH8XggJBNe22aBcEbhg4uhfabAUNZTrSgTZ8CdwVs9oKbUMRj3fe9rzgQnLZeSM4utW",
  "key34": "4R6qUfmQG1BzrtsWeGmG8h6Wm6xQg3w26CbJy2UNiSi6Rzdehy5hi8emes7na1serjTW9Q2pojHsixbvQrGPvK1v",
  "key35": "623kHgmoHasneGcepDhU7smwttbQ1RSUWUNX2oDYJzBc9HdAVJdTPdWpXDkANkzUoz4gLuqGzdxPsyhjVeH2L3PJ",
  "key36": "sC5krkKYHEzXLF4sLYH2yCobB6Mxhfx9DZ1iY1V9Skj9V67FYrbCwtY2p92EsMXoWEToZPZMd215jsRvM1brcbR",
  "key37": "3c71bzHRFRHqg4X1y6E9ouAHskmvrvKomPghQCuM3LEsdjqKUsf37xjDQmrr7fknog2MA4tKM8asjALQtpqFUFUf",
  "key38": "veR9CyTi4DN3BRztHQBVHCQBQuNArcgGyGovCN8zJddKxpMedNRaA5Bh7eUu8NvHoXJnLJPv7Jema5CUL86tbr3",
  "key39": "4JWmVCfFYjbXTKT3HuFX2F5zB3aj4NBoSkbHZvbLjgRnGY2ejgNQCqCpdrTWMvMUn1Ycw7H2PkD7cQ2CAJQtofHd",
  "key40": "3eiPLkUetBnHRr8Qbu7VuzujpAgFegYS7W2sQYg9GLsDEAKbmwMcjLe7eRFEZEujRB1JtXoCt5fHEi4d5HDjKFNs",
  "key41": "2M5fhz4vvx2pNgRFNmtECzg8L6HTFZNpDZMQ4fteuUqGPhuJc1x7RonwBvK7yyT1DfHgPeFR8GeGoFqmvBMN4at6",
  "key42": "28aMzwyNDDfv7qkW7QHTYHXVZPMqKbkc1Pn4NxHQmGjygHe86UCpuYYvtW16CgAAgfPumiee9E1JTLrU8nHucmQR"
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
