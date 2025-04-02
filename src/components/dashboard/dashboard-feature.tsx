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
    "zbzxEbdR32eCg6NgbSp4dh63Gyge3Z9c9pUs6mhV6BMUF574ygbprQWskYkNkLTrTgiCWFZYv4tFo3Qhr69yX2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEM6FW7jf3DkLQ9bixW6xCcTHx1Wcdtg33PbDvhxUnjmz1NLxBTt8DCBxeyWLKVbPQ9BjsGzZ4temHP4Uvk6jbo",
  "key1": "3SSry7kcnXfVuZATACAi9jVmSa2911SF6wpKpzr3hYEZoTfZQs5SYeWjFjrDuhvyBewjXv7SQ2bTVA17EFhdgb7k",
  "key2": "5k4H6SB7ZnPaQFgnA2Tyw8RrDVdxHu3xScJMXC4cRVbzTX84BxFXET1waMYAX6iMJ9hFFC8dGLv1BuPygW7Do3NM",
  "key3": "56H3gxdkmi1cfcBKPS93Tn86Tey82of9XStW9pATDLMNkHq3Xf2vj1GAQozG62Nq15YVdQypafwSCNziDYXSDhPU",
  "key4": "5SVPj37vAAs9gwArVxVyuWBZF2UDkP1AfCqJUG2KeaDQBvXfJWo4tteLftVmqhFdTBGg1UWyWCiTbF4LRcAdZ5gj",
  "key5": "4khajDqHsZya2fG3d8zrcUA6eFXrvGmZoaKy9vDGsVDATk6s5SejUiCyCkDkfWpyEyJZSReBYPcrDQKjTKtFBG3N",
  "key6": "5DDYwCK5MP7EwyigDZbGGLappecPp447c8BmcC46dAFUXj9aJzZ6iSXRo3FrHKMt4FDvbL177QsNjZRQte7A8Suk",
  "key7": "b2qrUQ9yg5AswsHVoT7XhNWeMwrK5hT8Mgg6xN1RqWCNKL69N7vG9rUgLoV4htvEg8CW6CffxsPfxKN37vyMVjB",
  "key8": "2wFbMQXtYQVQHohbUAfi2asRdm7Y7z4bQBq9cDBCGvC1g1BQyJWMYYfbehG5cEjVXihhKb1tWZbQ84GNdar1iPof",
  "key9": "4s91nTcMCuqvoe36ktCBHRabMXgCW4RWKx3RPhnfyVt7aSLWepgGH1g94gRGfq2J3ooVXDz7A6kCWzVruYcpTD8X",
  "key10": "3T9L83kw3HvbK8jpBxdSzYKsZS8KcCyWWv3Tz5B7WBmAyMvGoBLB9bt6rj3o3oDX3DG6wPzBkmZvtg8K2fnfDEvu",
  "key11": "PgNzifgWrqQZ1NWqBt9AVymGSzz5mkSChh6CkzUEhbXyb2yQ6yHPK9ftMJo12XYj5gW6HWGDdpPajCGjLLBX4fZ",
  "key12": "5YqKaTmL4ACTAX2rsotQEcFSCLCNbpTnLhqiLjvQ7vr8153RhYSaKkvvUq7HCNBMJqzjHEiVw2ydYfWUJ9krph3k",
  "key13": "33aDKMQE4DtaZZUU6KB47tG3X1HUqLkQqNCUCgL34TT2jituPerSFAqRVR6BfXQqCNrocqcCFgWSTb4PkE3HiuFb",
  "key14": "ydGMjsx31grycPXyhhxH9pBxhKPSjoWxr8EkjeAb7qxkAwmvKERuXK6SufbnkUFMP9LZQ3XA7nW57tAsmXkg35F",
  "key15": "CSCWww892v1Fxu27hgkFqjmExQ1rsx3Td51MbSGceTHcSwXP3MmyMFcsYYqu7DAuGxvgmA63tKvxTuKm3onN7Ww",
  "key16": "5kvHN4c7PLiE4jREEvR75rrcNSeZ3tWV61R87gCTPN98jBWcoKZim4FrW2z5at7AxbTKHMc2tusXzEdHEa2Bag3E",
  "key17": "4k7335VaLZVSHtCjQ1DY41SnMQsGxEv4Y2B7QVmk6PCjznLS1YrRDYa53bEiJxg3WqDH69gid9UPzbuDUxKNHyQG",
  "key18": "5YkBaHAB2pybJGhAjYW9sM5JtNX1m4jm1GJmX1C2wvydUVZ7ckqbcXEfx6MH65bP6WoVjU4aX88umXypXbS12i4d",
  "key19": "5cbac8UaeETZrk2CvkmQ4CV8pVqT8Qa8DMHLFR1C2hHxaWjrq8s49arHEh2AbuiEBT33o5UVLQ4jk37H89HadBBr",
  "key20": "cDu5MyYE3hHYndAWNRRPesJYxCNZEKftpq5hYzPikdhs1qoXrzKqqQ9CH4SwhrFFHCywnVUxHxzqgD3zy87KJP8",
  "key21": "Tu4dyHexFRmAHwnfiXu4r6Epcmtn2q1UnZcbUzQmH5XEhF2PjCmpdEdoWRukcUULQuNhMLCTrdjoJL1y5kyiigb",
  "key22": "4iLXiMSCfKVugcD7GKAwZBBepvS8c7JShR9xBidtvGpFS67ipV9x4ouDUUaihFgcc69fbVPGnwDZ1hsZwM7ag8dd",
  "key23": "5D6Ht6YNo165cmsA77qD6m6mEPYeG5B5hVRph3h5QRSEGxxrVxmNKwLwhEQmXhqMUfFnTxGeMjmXe8nMfVMFLgDw",
  "key24": "fNVWUy9j11Q4jQC7emQxxMqnsoxBYRqhHBT7MEgYcVTWMTbUea26rU1AUfef512BvWWzADudoAmVYkQhn7Vo5be",
  "key25": "4e7gZH8LVbGGQR1C2xtwNzVi4oCASS9HQDC7MHF7nEMjhBrq5RWvCbYuwWKRrfgr8fcNf7SCr2yYes6V4rpkWfht",
  "key26": "yYKRHLH2tHbzLv4XgMJamoD1y69tA74WWp7Q5RqtqHEkvxiHC8t2sd7iB4HuE943bci8LuMKwJUzVXCezR1tnox",
  "key27": "2zC8CkxiAoSSeQ8pekzpiBf6mSYNfNQUH8bPQDsDdbiQckZotUg7ohPvo9V9jiwfvhNEWwUzSktHpYEd8hYKfxv9",
  "key28": "2htYSA4v9soL2qepCUTscF5b2JehVH74DfQPn9hqcb9eZ7TqNonybW5TxKvuHV8VfTKyZFR3dcPx81kF2Nixgdcm",
  "key29": "62jSf1Vw4zb9dhgnSLf8C3b34VsKAEFyu9r679hDQa4e2Jmuugu2c7DkdGzzkZqe5UnQhh9JySwWbtbuRCCfzDNP",
  "key30": "8PJwZdDJfoE8AgPFa2uLj7SzZiu2yXMUUiboJ79zveBv4LYMPribuYEpW1TfxPtXaYgUYFix8A2Exb4dJZuMifT",
  "key31": "2ZN5tfW75acbiKJr4bP7gRu4p4LcWFAZvMDQDvxs9jcdYrCPp8izSwj66V7XdkHENiCCS2YffVVcazxDUxFouMrS",
  "key32": "3op9msuk5NMUTxUfii45HNZqc6NMKVxUmg1iP5foc4QsLMXf9n6veVubN75YaJ7Emua8zqix6R3A5sFy7G7SAnK7",
  "key33": "3Hcys4CY3fFyZV6a9vZUZvN5qphoZsQE4u6LzVjiqVsKzZpuKZwErMAtdQDuAEEuTVD22rze5oLigjCWa1brmCDD",
  "key34": "2YZDujhSZAVnJSus4r1D83ArGo2fggVcWe8iaBbTN3UdWetSsf8p3yw45c9dBvJmPp5vA54MzE5mEtkN6v1Z92BZ",
  "key35": "5NbAGKup7QpP7fjAjdDSSGrnqdWtz4jvFZGJcA8MUv4TJkyszjSLWScaYHYf6nKeCcbYGpDEszUetB5pvV9qmmUz",
  "key36": "5CxHLhuruRXtNdeqffUQ8uAGSzAV3GgXfR312G7KgLmxjyhVL3TAzSMT72pV1duXjpPZuUhhygX9rmxXid83RK5a",
  "key37": "3u9nmXF7DYCFqq6zcSVtTdAVP22Fottzu7saawhYmjgKSxM4BQHGKBETJjQNR9rT14PhVxNVr2CWJAk1cEp9J7e1"
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
