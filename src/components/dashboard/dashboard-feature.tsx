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
    "3wTrRsW3wQSnipTZN63g2bER6tgQswqdWzs7fsWmr8S7b7h7azLWsHWdci2sd5PT49Cg1GCSZmx5jfvZob7nMxQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yf6FmfpWDM5A174AyoUog87bnPy2wSzVRLmWVZRdYXoJsokGEMqh9aT9ziiftPH2MGiAsFzixRPpA9Ct5obHvrj",
  "key1": "Gjan6qdSZBVTBfjacLkCmr9PEUEeZ6yx2U3er8Z4DQmnZc5Mnb8mkyLE8NQAg9shzyYWuGpK4tJhJGx7SKTxHXs",
  "key2": "9tqAtiUjpzbbH2NibrMFAxaY9DwrRkfcp1CMJCqSEnD7Cvwh9PvLL5cLnxXv7mygD6bsZaeyzZwDtvm2RALMD2i",
  "key3": "3QRZoPVbx2uVk69FhySwWr4BdutsPVg6FPFYydd9A37fxvcw6uX2k6gbDYPjxPh95B2LUEVwtLmWtyyBqSptjhMN",
  "key4": "4nScJXaTtxmJv8Qu8MpurEviuwhzPUUcvYZBLsY1gExfZ3tM8NsvCB9bCDNUwgk9fnxhQpNvBpniXfK3bheUpCZw",
  "key5": "27FpZcEFHu421o1T4WDJSyNo4ppyc7kCtCidCozovhYTVp9msN82BkEZbsv6oAVGny3xShgMTUF5wR6s9iu3Q3Vh",
  "key6": "35zA7QLS7PMMsufSc5FFzc9946dj2WUsLpZHv5Ym1MbjqvNcqj7s5Z8CSismRgKCFDF6U6rezV4XeH9CNx1jnxiY",
  "key7": "45aSk3uX9cuWv6KwzEg93K6472MFcwC5UvpAQ8ULAufRsPUvGG77VFLbKHg1zqv5KFYXZHzmhQkGCFf3mxvSJkff",
  "key8": "owNUrwF1ftpi2h3NjJzybCm3MrHNbSZUaFTDxnBDq4PHxXNETdKAEHJQjjDDjeqQB2kiPALzozj4WvmC6YRxZfJ",
  "key9": "5FMuyDgPgQHJSN4xoryhvw1zshUdVL36y3QJugPDCqv5QzHbCM3QWnTgWKk9KPNQxP5BBEwnB8dYYu5UGqoTjDF2",
  "key10": "5PfdhADFpttxLBgkShM5YU4XVtCXua9qcjGgxBJeitjubFAuwSzaeSqHqviFBfdiiy7A7jUxDRaFqB5QKnHPCsB7",
  "key11": "2p1id8RNFCxchVVkmUZdJ4xMXGoaxFrs8nkUXjpHaDdojjHdeXzUwq2eb5Hq463h3sHAdMzQyWMRr2ekimQRewjw",
  "key12": "5JmmPYQPteHHu5mMTs6cumDfSSXG7imwHMK6FtfkiRbSyn6AscG5aDSn2qjsj6udS1m2oLw5f53yifxACwKGbaHf",
  "key13": "5oHxRmhnEUJ7snBvyMmw6oDY34Do5QDHB5ZkksRTTk2zK3Tu9MnfWbyWCShxpz1c8H5TnRgEutKEoYBG1Cc8pqtD",
  "key14": "4s5qiYaSKXVQfSd4vvqZH68VM2N6KGaVFAqwA6zsP6CfajL67ahFXbp6wF6hk6tAMPwCs5477eWVrFvWZce8rCTB",
  "key15": "3zKXcpmy57yd7gCdnixsHWtb9vujqow2HcgUZt78Dnrz7jrSWD1yvhkziWAQvi6TbjaAwCJaepY8DRy5n6o4cvrj",
  "key16": "2Sscr6HviqcsCR4J2G63GS3PHRzN8HmXxYReRFm8omXypYmmKw1oPfiQBW32se4NnJGU7ZFcPcL8uqqZqqLkE3Sa",
  "key17": "475j1ry1tXJcCMhgXCTT3qvBae9NkrSWWzWeSHSnu7LzJQTycQqbdBX4d4PsHYjKFdJqwb6urmrCi2uFgH7phA3c",
  "key18": "3TSUF6GYvPj58Ng3jLfLpkVZ4XJ4YkqpmNqQhan1gRC9fSK4j9fCZthQEyndbu2hPaCgKJiP1iXybSVJDYKUDMmt",
  "key19": "2ntxbbrpRtqRTtPEA9Abk6EhMmNvKhCJVybuTkZB9bJ8s5oduiy3MycbSMgSgv4HYtftktNZrVvXrXHdMgmbyLCf",
  "key20": "4NbYGenPK1yawFmpCUDpVNUtmgdfDAebZPkXibH8w4feKfN29spU23UdvDQnWKApWFmtxHXGdrnUEX29TmqemQ2Z",
  "key21": "3uQLxqc6KchpWWSAugau64otabCmxAWYiMw3R1nESJdnaayJYvKLcWtYg7oN1HCdTBZtH6fKnstT994RioAE61A7",
  "key22": "2GJY9vuiQPRJcyyghrzn77WZhAdqBK2LEAw7tm1pa3KSacawpSynQVTa92nKRnoTKXpoQs9xZiXpFdCppUPWfRPp",
  "key23": "wqimdGVUXK8BZixZaz1m3PyhUjvSbxVBSjbvG6QcPFVeoGJcrVKhHBrG3y1ojZHXxH8dTLSLgH1ymYYzEKCks75",
  "key24": "xxTjmMymGvm287cQ4nTAcNySqaWR1K2UogCDJ6dnuuZDm2NvBEbGNdwKmooSDffzZPkuGJh38oPu1HBCpVqPK2n",
  "key25": "42fEmBARh6KnH7zGDjVPYp5orpcknz17HGj4HyLpv84ao2KsBo1Xw99aYyr8A2rSWjEKZG1hUgvawUJc282UG2PB",
  "key26": "3a1Uhuz4w59t7qH2BL9iqX29FckfdKGEoxFas4m954ELycfMMceM24RBiaMcfKVrEVgddUA542gHnZcUV6LfYfBq",
  "key27": "42iVk4dUTFQh56kEXirBVLQ4YGqMT1SuqFQeaUouQcVHw1J95bdpAEZAW6DHeRSkU6ePUgVMvwbuP1DoGeevYD7C",
  "key28": "2AJrywLi26Cwq2mqvHJTgcxh3TSAufmmXAbR6jNjBtNY98dCeqRY3g8AVVJLoL7Mv2tYkk9M5qkB3kVAqk62FfGB",
  "key29": "4VHbyQf4u16SbedhcyxKLjL2vxw3HQkQ1CeWe7At6x7jC2cGAt2UnjjskLMLbd2TcUENReKuaBsPmsWGgqjRAP4Q",
  "key30": "4RrD9RkrRrUHA3B8YdhRTQkZC4gU3LmJVv4DANkqkf2QgugH9jLcMP5RhUMcTZ6WVPzkddBCViwAJtAefmBS615u",
  "key31": "5qpfuGojMPBDKxeQReCfBUHD5evHcB2M46bXERPGwAaG5GSyWkP89G4gnVgQyAzpCXKwQ1wyfsuZVrSsAfTcjqmJ",
  "key32": "4PTGMoEpk3WneW54eVMbp2QERAng3463HNv9o7bopb3LQ22zd184EyDDHEQ1SGNf1cnc7qs4LpDc68zcNiwgYL1g",
  "key33": "5XEQkjAhzPffnWbP8UY9U1bhXkT75xpVoHXsVX3wq1XfU94h822NgauAaiB4DSixTtW7WezUYZ5bwmPQTK9NDMXg",
  "key34": "5H33GMpFiJdTZswN44vCji9X75aij5FfW2ht1rPgLSrrVoPt6wQG3ra2qcCm7jnQhTXRMEaUtgiCwCjW49oFG85m",
  "key35": "5xbapUde7M2ZfoDDaFn7GggJv2CXhWqn6Xgy2iuEYYhHXz7zcc3XAqKVZSTaxXLLsUDsFPTXa2EcyKa6i3Tb8QBg"
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
