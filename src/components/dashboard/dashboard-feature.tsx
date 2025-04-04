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
    "4Pz71hPj2oJJk7Co7R2FNboYfJo1bsQntp2YDaMAwP822pVSfXGoDhcsMR9nJDck4iSbsQ6JSUW16XeN5jSWEhYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bp9ZaDdmMpvkknGGB2R4jfGBjfGDVJLirGraTLErqyJBxbjkN6K6dkoZnFXRqgyTDDkWUiTxPfzB5gBszSNE2EM",
  "key1": "5jVS8Qb6Jiym1S9F7HbhJYn9zdSxsfTdLizZaseq5t6pxspeZ9UHJZq9viCF6sEv4c7cteG5LdekMzPn69PL2QV4",
  "key2": "4rh1PaHiTd4pjqKbQLeLJEbU1WRx5baEDsGbzwzdn5coKHbuFtvx2iADHhoW2KsLSjrbhErcHJadz85ZE2EPPCG",
  "key3": "2nq6aGmp7UH9kCZLVmg3CTBfD5sfcBRDG11B8aeDUF81K6sLX59WUqj1Ef5JwxXv6AvESc5QmcauHgVHReyG1nvK",
  "key4": "2Xv3PLcp5h2REcUkVzQmwqEafJcqNpKJFp1HB9P524rB4sbm6KPc8MzMxA1n5f1x8L2ZxopyMh14dTX6FUJYJiPm",
  "key5": "3YjgwZsYBXUQbj1t82ygjAwaTnCpFbegKzuop6PmZbvufzHhYQPWNufbqWWq6i1WiJz9yAooqmSHYiM3Kt5PjncQ",
  "key6": "H7jdAGMWP87kRGcAeVVBPUFX4BtAeCawPcgiRkXrkcwZcb5EKRcKUQb2UUgWgG433mC5JesrqvYrkJz8tWmruZT",
  "key7": "2VVPNvcz1kf6bkS3A9JMvzFUgLiBPjevbD1WMo9YDDm1mqkoDFkkZKBbeSRJ6xeHV825oFT3j1EaHao6fRKoby76",
  "key8": "2yCS8CVKJsKgMCRFevzjsDPJYq1HFXZGEAxTK9WDKZ7jxgRgxDUrDDCSyRLf1qBud8nePXmTXHBf4sxwPjUi8cxz",
  "key9": "67MyiDayymfKMPJp7EZwdY9SBA2ypVzmycTkpLqzLCHUFscvwGpk1nQnZMUSzmKujmr5dLVzoVSXvBu2V4NJGDBj",
  "key10": "5pVtts6Cc28dDSCYHU1mMwX3zhxQA9seN9uCxEFyRisNLaw37kKfEMZc5gNfEn6fahHdkM7SVhiurppeSaZeUWmh",
  "key11": "Q1FEbkrsm9papH1aTR4EsQEbf5mt7TnnNSh3eMEUVHz3GXyKW9iTjGTsQCVHHJTwm5CQ5G2a97S3Gr1HxGCZWkV",
  "key12": "3nBYHJZBad7vhnQ2W4yo1qymN7HGNLfSYgTQPf5FxB8DVFBy7kppvQCCGSh4xRwfxYBRpjRzNHho2yarsA1UNcg2",
  "key13": "36j4zpfLepxKAgMrM5Kx9mtJEuX6fj2J8sZbGEsABuXPENRKcArJQDUPHWqTZWkmKj6cB24irR187AcEHLv8QaQk",
  "key14": "2JqHQpgvL1ne5bECfKMp45ijjXCwFN1FnhZpYbWGSMzxKvo9xRQtGwJf48Tao2TV1setxKeML56DhFthaAfrDXN9",
  "key15": "27ZtbKjRudAhQFCKSwyeArpsPkHaxoHoQzzc7GzhRtBZ8odDVFckC1NWyU9nKP8t4D5f5a6z9w81rzZqxezd9y5h",
  "key16": "5TJ2TVrpbHhnQi1BixsrUp4RkLSrsbBDYwCrDDxREnpHiQ3z8MUzzqqfDiirDQaRkaV4EmYxQ3Cszvw6FKAkcyQL",
  "key17": "4aGQPVU2JhWfDyuxy4Fax21zY8YwvvNG4nqqHDKVqrMMJL35ykkYLK3kBgJjvJazcrKJxjkmQHp1tXbnGYGWMwGH",
  "key18": "4dxcWNdd2UqEryn6ZouaCuE8HUiQCVvu5LiB2CFUWozD3mH38vkCT163YGiDhrVdGiyMxyZqziyZHKurBeWhCbE4",
  "key19": "4TxvoRk7v9LziZQVCjw1bVjtC4m76AA1zYNK8FZAkZdihu7sMreuBoMERBsTAKBNQtFwHYi7XrwyAu1UYuRAfNG5",
  "key20": "DQcEhV5Nu3fKdW2xLKFwBb4FU8sFPLhozZWmeAARCKvzaNqbTSbaft3tt1rp1HbcYjzNA3p8KYgLBXky5gGF9P9",
  "key21": "3brmEERoua7bWNJzofQFAcUfbSBj3uEVqnrnjQbLGmNuDKtVrCxhP6zBq3YgU9wJMMyMKvw21eRmKUApBUTAHQSw",
  "key22": "35z5s4HXveVKFRmB18r3eZWpKicuXx6WJmgmmVD11CsoXtXqcExmB8pbpNvssNbjYB2NQCKfaw1PgPzjbJJhevz7",
  "key23": "4fveEYaxJdJvt79GRMaLWYA739oaVqoJhxNG2adExYbw6yjprpSzTRoC7HTaKKX5DUt17TzKkg8hGkUSME9S8yPf",
  "key24": "4n47ScEAp1SsmeUjxjihLxVsHomAWEFU9MGnsbwmkbR9QTqyrVZjT6hfrWdLfKMtQbheYUQgJ99xJAEabgY7iCn3",
  "key25": "4herrj4h2rny49RMvS1ZA1vgzqd1ggo6CFsnM3xJYvoxVkyRyZWhJHavEHeMNp7R1ojRtC9d2n4qMV5C5Kfk2rrs",
  "key26": "35hvppg9Zz77E42Pt4dEAULUN8A9MwVcxKmi8JySCn4aRX6jxJWC1g1UwexCiub5vETEWi5ZDXacAE1xmdPbVMUs",
  "key27": "4PmJ2NZHvMcQzVmoBtXzYaeWLUta9y5iu2c1jfYJ1DQTUeeMLnfnQmeoknKocghzLhCGkT2KZhUUtueAGhjEzvTq",
  "key28": "2THEZTc5vGUFeBCpsguwivDkiqAT6WjiZCF42hwdNVTAg28wYpfz78icgX5L3rWGHpjnZTCTpMSLq1e5qXo6WK42",
  "key29": "3hLXKFmUXUZFzFZseY815utfDPJLQgoeB1pnqyqC3R217A7gtdSBTbTcdBk1koAXpyhzavjTe6temV8DwWrN1a2a",
  "key30": "5SAuusYXEUbVjNaMXuGUTqHNwPzJUtczU1LhgLiyJDsjJhd1EgFjLSavVrpZxzg9FpsX6Wk8eft4Me8AwV5gy6B",
  "key31": "5Ro49tRLKiCVWuf8q223brnE6geAhCsp4g8CcnxnW4yXJXEf3Qnxe5yuGJXtv3FK62Sp2e2ATjmN3rVdMZqKvM9Z",
  "key32": "JaKAog3chesN4oFbNnetB7G7NRhKBk2qETvV8HaNFDxjCwtiYXCsh4QRnqW6QyxFsyzXmgeGJ6sBG9Lg8rC8Ghp",
  "key33": "4CFMr128Pk7D6NGAxQwQDKeY1T2sE2SyN9LbwyYi7rKmBMujcTEDVsMsUJWJZdnrThdv5YvhFD9BPAjAia2zUJja"
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
