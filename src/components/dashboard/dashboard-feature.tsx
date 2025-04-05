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
    "FDMb9FATQVcM7Es8XoSVxR86wxj6fM2c3PCMoK5ttLipkjEXbv8XPC6zHDcM7LG947s4KeYDvaYP85uPV9mhWCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJinSjyRkTpftPn9kfvmZc3E5CZMbySqarDVwASeeMQ1xUHge6fXdgdUt2GZabSvWVWN2uW4hhD4dkgdhXWDfCA",
  "key1": "2ceEaZ78QbSnhKnNkfTeNfHrjfv6zQeAZwCHPXCom9bvocBPh1ptYBNjgiWa7qPLsiF6VcAEc6r3kadt5CLNBiQY",
  "key2": "4E2Yd2yMdWe8b2Re3Py64dsK5C5xeupHbxD7fFeSk2n6TV5dMetUis6PyuVeN6Cu6KFoYECtQewUoR5Ee1ogcKai",
  "key3": "2vFkoNvbqRnrFxkC1TT152L6akbxtzejEbmKiJYcFQTQwAMBkp5H4vRvnukjNcmj3txXxR1sf2J2k8L1GrfW8T4j",
  "key4": "2juFi8pMqSjeG4Vof8ag33Zcco8akW137z71W4i5LjJ1sHXMaFTA6aYVXt8KZLdVKfkbwLefBQdejZt7YH2ykjSe",
  "key5": "2kaWqibF6LsW1Q1SK6a2nyYgDTKAAJaWsJG5HTT13Zrmom2eiM2reqhB9tmm2YsLEUvZqogzkyJdqM5wU3ki2Q5e",
  "key6": "39DDPP57gmr5He2ajLMmP6p1WkXhhw3YY6ytj54cna9sViHsq4Uj1GTAfkEY2qMhHBVUhYTfQuq8FyBG1tiSM1P6",
  "key7": "2BTrB6oT9K59bJxP9Dihcg8GGA7k9zTRKfY8KgXa7tyDv9Qfs1VtkTfZTd1xLW3Ff26wpPuWhRYdcu6HX623QD6j",
  "key8": "51YKsfc4Xz92gj2H2RQntxqeU8mZRaotuCeXHdbWScWWgw8AuZztgtnAZ8wEGKLMbNA1oQPLCJp41p2NoQ74Hokn",
  "key9": "XxKS29aiCMc8JbrRuRnFqV4JjXuMN9mNnTd9p6xJNaziXGApq8kU2yV5G4YXBmU4GN1x87iUARVp273FxDJYhfT",
  "key10": "3tPTHFpRksMjtvzkTzCpu28tfuxQsESkvnBT7DT7ftH9rTzXsoR2mWwfjQE58WpsUQM8NVrjPNhgDbBuBxXUqLy9",
  "key11": "qRJ6i6X9MfrhKkoUuk1aknZiWQgjtpmLKw4LF6dqorjAgjMRxRUoA8DzgKA4dWEbadtfcEcLxajQ1qYfqNvhL2v",
  "key12": "3b6gDQmur3fvyH3DWQq88EceNkznEUeJ6iWHZkFwJRq5G7MufhVqXT9diTNpKRsq9WR4hn6ZvDAr16WktPKHRLa7",
  "key13": "5JLSM2yvG1Tkyc1yJ89ksPQDQmbPDTu8PwanPpvZjfnndG538KZCR3PCb61hK2QX7Kt72Tzy7PZ9brottdrAxSzx",
  "key14": "qpsjawP4KsET3sQE7n8S3y1FUAUZNzUJE3kSz5vR5Z9Fdfu1XaDSvRcJrNAnRqzpr2MvwZ2jxgJWzLDUX1D3SfX",
  "key15": "2X97ZkFkwBuZTFKS2QeFf3o895qHP8uuFdmrLcHJvjroQqSZCXKWQFQspgMwhZCxUsjNUq4LE3YP8bTeAz4fFF8m",
  "key16": "5qiEMH2YuxHB9phmJMBaaTfZX5KKwVRRae82WcimGyqvNk65MceH7bwXv2fyYmNnvQVKtHoJoAEiRRMaAR6D5Rbc",
  "key17": "4t6nrosKzjzUSjgPutNXjeUu86hp4yoENR7rBiB3Lw8iMcM9vburBwLY7uCLhMaR46YJDHzg1zK2GX2FFaiNSAJT",
  "key18": "4NiHm75wBNDxdYjr1ipDHV3kM3Zf36QbaCj4wKVaCihgkZbEuPqxHrrpSWYtydt2Hx4A5hbKf41udpGGwFxgv4bL",
  "key19": "4hSqvVotpNQBPFWUwzHc6iz3DAWfJQTq7eqPNkKNhft8gBnPv3Pq6fCNzZSUDMYDvP59XaVnkdecQASfkqgoQUg7",
  "key20": "2TyQwz3SjpqXRqvUjERkHNQ7c4fgW3jyenjaG2tEiPmbDQDTTxrNXQEuMUXSYyXqhLEugAHeeieeN3qvoPMt4FXP",
  "key21": "3HvAiRc8UiCa96XhHLdRaLJCCfAGLr8Etw26SZ7ASyCGYbAGaZN2UX43evKVDxYaeZhPKHZNGBKC2w7TwRogxmUg",
  "key22": "31364T3QfpwkX51Zy3qbfErdHntSee1RSDz46s7XRdtWm55KR1hanKZmAEdjjnmvFLh7ZzKJkCdFSSruZjzwerWc",
  "key23": "43A57w1cbKo3oPtdednHFrBLt86GMk6vcxAvqgSqdFo528BMnhACD7YiHcdn7FvddM4Y9smPzcYUxtJAmczMbgT",
  "key24": "4R6Sub55sks2yDU38MSoy6UdV7zF8Tcc25AsHtuAkW6cxn21ocrNzJs5TX7vnD2oJx15hfW3sD88cJ3eVrCAd7jy",
  "key25": "f7A9LsS3qaZHvWdmjVtHKGh7rnhu8vxDTbDcLv8EvzJ9XPfQYRSg6PFZiakrVvJnGWcHuLEYDf3YSBUCpn69GZP",
  "key26": "327eywtNQFnWDMXDfACCPhankBj4cQBtzW9XNH5pnNz8qEnm6Tm6JTbUk8BieT7srvcjMA5wwsfAtKoVM5c14RJs",
  "key27": "3Vmet3zPr8wG32XUgRQH71hGe5fx5yLD3e427rdHT1ZTVofMtUewq48Df9W56WkS3F9bmRxhpK1rzo13BZkHvp24",
  "key28": "3RPuJ8upkmZNsDsmtsA4pEpND6fMnktupDoqjeiuENtectsQ61KDU5wf642gWHjqFnjxEMXp8FVmv1GK3Y7HL1kr",
  "key29": "4t3mDLNXHwGv4Ms3PMyKSpJux43Cct84jNvToRKJdTY1QRULtTSkYhoH7MygRjSt6EaxP4UpqDUuLQjCNigqDreo",
  "key30": "2qEAsTX4sZKur6xesHZYe5rKqZKNwiESGuxjgHZmSmvCyH3X4ec5gVete1Lf1Sk4GyXvE5wB7YoBLfGv1QpVLg5L",
  "key31": "pFg5uCNHwmBMPmPtigNQMWPphCQ23ujTPFEzP5ctVDMEYp6aQ1XRN2bELTERqqw9YeuRc7WFzPK8Jf2QyZ4Mn2v",
  "key32": "3K2zUNnEtTCeuHqbEmRPFNP7NM9rPA7iqukW11fJxFU4YsnoXDrbi8NfKBz9HWMePtTApfCtJvUZNPiFBxdHshHj",
  "key33": "3aWTBPe6cPtKchn2LcZ2Hpsy5GnBp535NMLwtsrvGhZqE2464CDF1WVn9ZaE6ymrAFHQrFL6kD7YRsWdX2iuEWA",
  "key34": "4N8qYTjrSa6dFqE3RdkzR72dcEMAvLSKDaLZAyCx8yg2A5XXKtLZjEYStJjZ2sCSpmQiwphtBrJv529PkyGE4dCN",
  "key35": "5w1wFF6zbhu2HfkT2EX1FctxNciPWPMB1tvMuUzh71zaAig7Hc1JnyF99V4RM1HioGqCLczzP2LAX1ZAqLLWcR1i",
  "key36": "5PM5cmPRZ4EC2u2JtS966L8iumUGEVfiogCCY9hbhKWR63q9jgSVZRFQds2YdSb5ssTDN3SaiS1BQbqFqu5xkW8i",
  "key37": "5YUWnyZsmWD99iBUbBibk63sYTWNHxJW9CDn2T5XQXcHL9g47t1cQQCu2ejbNE2XdcUFZGVtMYuzg8L8U2bjxAKL",
  "key38": "4HETmwVEbEzycj8g2wmcv5M3J8NdMs939DfaRATPGqM5nS5vdC7aGLhv29ZvYJBJHZisWHHgxNZ5nvMq4uckCNx2"
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
