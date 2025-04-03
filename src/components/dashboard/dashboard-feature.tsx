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
    "2oDiimFGrd4JwMt7WH7z6NBGd56XGe7LuK6H47J65Ba4gdAyabLDjrPNVud8MCLbKPVhbNVZ9iLwq8DZEFc7NZgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raHPmTPeQjmn2UkKpMPdhRVaGWGe4aPhHex1oB4FZsyRnCp1AZPKXcA99LvWmBsi6AXqHQTPYQCfWyjb6Fz63LV",
  "key1": "4Y92bUQDvJC9wEaod99ZVdDRagB8CY93WHsqCEkZKFSh1jQbCC4HTecL7mDf24Ya2DJ6JTJt6VoYnoUXNh18PFYc",
  "key2": "5jFkFhhs313RhgygE1SvtrTmJrj8jknZnc8b53YnxmhZZtPP7xLaziCHfgwXergsYCmUxG8L8iQ6cNACAdAfQjwP",
  "key3": "2x2fhVsKQwani2XX74Tuj1PFQbWt5tDwMwj9RAXNyaCnFebVjiPDNQb1nVzL1J4bigjqpQLMg1FXuEZNKMG11TFQ",
  "key4": "2LfRT9o7TyohxAriQuHpZxKWHYx1pK4xN5ieKt9wmnYm5V6rJR5jCCYpsSjc5Ao4RwYqDbqKNRU9sMhfyGYFh1sf",
  "key5": "4QfsdjRLfoNHopu8f7MQ1CLbjooxJ9Kaid3HVpT9jz2puu8xXcnUYANPjDpkmCkgLY3mtn7kDCwwrqSqth272NFp",
  "key6": "51eMBrPfpswLJTtn5PMbxDfd7Kmk674qERXwZrvwYaqeuG59aADk522MCT3AbeHwxkfAsJCmEuNxgpmcQDxmkuQr",
  "key7": "65mcCHWKD85CDTTPbNKcmMa2CziCnfUYfVDu96m9pGbuob5HXgyaKpxd4LeeWaRFsZ8C5F7jfSN55htLWSECF2sz",
  "key8": "34GhfVZcFJy2kRzuSsS36BALpyhMpqjo6Fn1zwLCpd1a5tS43xvzKed7PBPvUbAid3vKv7MVTYv35QWc85yH4e4P",
  "key9": "2uvkGWQaD7XPaKh1UtJtV6rBwCvRLGeb2vBBCfp8zPKAaK2rukoExVY2VDZXdaRcH1JuAopsV3rrwGKzKEZZxRvR",
  "key10": "ASQ8Wd4Rqf9CXhDjtTiHML1qGcUoLEgMhw4cMxcoqV4zpRD6eFvkRnAeoidrAG5awiNauWZPkj6XF6cpVAi7xBf",
  "key11": "5DgEVinwHzh4a2TvjBc68YMLedx3fPvdbbcdk4xoqKGj6mwAfcb85c9DCnuyZKaYGjy22LZwJWSCsF79vktMD4Zf",
  "key12": "4bh6RykMY9vjqoDE8zi352m3oF45URUWa1v6oxpf2rGKSvLKkbf31jjHubJ3Sh8atA9DeZ5gwrkqwQccUBMapgrN",
  "key13": "292BXB6PQ8QpWbTVgsjrqBNNWjeNhR5UjhJsoUHkbt1pfdFDasKMS4jfpSSYxyK4YVNxhoVFchyto2V2M28jwew9",
  "key14": "4AeSEzGZoo7pXD2R2tW8u19p8gXpUPtwquzaJtFhBaWNe3sgwpzAgwHE6n52WMC8hyxuWKNYGhfpxqHv8DFUuoGB",
  "key15": "4cB4M6GM8RYBhpfSsH7N5KjpyFJLfd6FjhY4gNAdkWvQEPnbKSW3k5MnxkV8rdHMTtTWbWoZG2AC2myGo4mUwPVf",
  "key16": "2ESzpWSr4cBVLGxUhz26RDtXSUuNFfodscJiE6L1tfeSX3fSENyghzPuujyjcc7wYbcfoqPxrKT9LhS8WVZiN82G",
  "key17": "62Q4U2cW8KCws1zChU4QehJUEt7oELMxoCYvbUb7qp1G5pxk3biEz2drQUujSnhZw4RdhStAFTndjB93JKQ2zzw",
  "key18": "47epi6K4CBMfYBz9pZeJ46DgsutKy6VMwaQV8saLoby1cCAPLDBE7vNKTrmDL4PtjXJFksWYPmG5wauEw8CxMUd6",
  "key19": "415E1TJkCmh3ZSHFxayKm9PvASWFZBkiYmcy15xYgcFc7AEYEz6U9Cn8zqrzpcfedMGcRRKJTfCjoN6mJKBGaKnt",
  "key20": "5TCcPUAn1HsyXRwzaoTgQrkfsYQryv6KiCFvYx9VAnrvJUBWqJZwscmTiYwRCYHyvqrBuNqzTtXKZrbcW9sCLQDr",
  "key21": "5Bwb8Cb95tpspzSWR2ZCtWpzsUC7W57WtNghRasXeKNtfX6zWi2a3KXKzfXPXxYr2rBihbKooJecvuUbXc8ET9aR",
  "key22": "4iktEsGQStzbEn4pqbjY91sjJ1svZxxkkpqGvtNEKxKAHWFNNiYQSW9JBuSHvkoaXefGQjCd7skog67UFjvsRXwU",
  "key23": "3WgyKkhxsRQxUHSQv9uME3BoZEhi74eLxZ4A989A1YrbZ7fvmbGbiVqSSFSrFdu78Zsb4VX4RspoMGQ6tESsERXD",
  "key24": "4D81Cn7XGBNLdYrgT9x2jVntUFx8vah6wVuyD2Voc5Vx9gMf1rkdHSBziGhYLV9p8yqHVjwSew4R15jSkaws4gMT",
  "key25": "28epP9nRJDoSxzW3ugnnYqxHAE9haCkLFpXxQnSqzKxcnZYVsn1YepLWcEpHwRpuuXwGKeuhYXQtMjB969a9aDzL",
  "key26": "28F4szcfwGUXURfJgjbHLdf39sunPnd3LCoY4j2huQJmzVRNQ877719E8uPmNZw4ioHnkehY6SNZTqyS6aqZeKSm",
  "key27": "2PZAhvE2nAeZCPV7TN5fcF9GfKxzEQ8mYpC5kNnppgzQEQAUbcNtLYebt6x3GcYfoMGwwmYy2Xu13hBJ5BH9DmM3",
  "key28": "584fBPTb3ToFeMspZ9r7nZhZMvc6wapVjQxbvQ5SF5pjMedczYsjomrk71VqDQnUj1WSMXGNS5j8Qq2pwrS68SYh",
  "key29": "2YtaNCwKXy1cQWmr3FwXAtezBJLXrGAmzMJunmauVcLpFqYZox5CwqnA5rB84M6f4RrwZXnTTTLgkbpiH9qajcXA",
  "key30": "9SxVgCcxU3obJsQHPF74asBQPLhPC3CJJuEjhZyQvtvdqSUKVbonkDhMVYGzX3LWsTmYEYv7mDpM1JREDun8Nys",
  "key31": "2Nv3Arq3FQR9dsYjRLDwms2MfSdZ8w5guzHDkm5TrsrntX9EndDErvDTJ66cBWoP3MXc8SWWeSkkNRqZxajR1kJ4",
  "key32": "PMW5tvG8YaE8eVfp4cCE74bCUNpyqW6mkN8JChXUz9kvufJXqGDWLZ1G8WvN8icT6arxnGi15EiGQ597X66hTax",
  "key33": "EipDZECUrD6CHvw3TEHyXB7WzCGgfdc8XzeqfGzsVf4i7bJhRfJvYonS2zo1NNRGnVMsA7GangqHURxV84m96PP",
  "key34": "5aWpq76XozLU9Xxs5tThSVioarUZe9aPsAz8ioadQP2yW681fMvB9evgzRmvmavSSAeNVsP2AaRsBMCCAEUPViPF",
  "key35": "4zzGFU1M98NkZs72f5qfdew2Vw8HBq8BzoUmF1XxU7M62q5h7Xnr33H5suhDNwN1j1U99rY5VGdG7arVnAEAzhTK",
  "key36": "ivaw4sAg6KyUafs3o1sPc8L5RMdsAX5i9beJC7eHPASgtn5ptB7mgT1AZjbwE1EaSnqsJYcxrGU8Tu3Z95aeZeq",
  "key37": "9hu7sP9JLgbw6fxHF1QYy7n6tNFiCCiwX4RgsTc2PWLRWXL8up8QgkknsumcNALkJYKRqZ2RCzJRksgaDjzSgZm",
  "key38": "2QvEcohA8n4E2CVdcCzYrEX1yvQuvscCaYPm5TGgK2mVmBMAE8KzZXPRf9K8pcvsKrtxDvu9YLFgtH2eAg6y5PHU",
  "key39": "46EWF4WTu4adMTmgycAhAcHYXkYvKjiN3UB9DS1YmvyoiDWJK181L9jQCpo7NqgH2JmLaeSVZFSruJd1jvnwCubZ",
  "key40": "22xXvzx5aoF8KAQqXELJY7Cj1AXnvh22xxV4gjMuzWuf1oH6ecT66CKtvAZ4FGp3kyw9kxLNicCNG9F4tT7SDdP4"
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
