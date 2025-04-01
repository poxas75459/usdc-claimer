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
    "3MNfDiHtTAXfBkEy3KSZHuHSUrAnoTZ5dQpnZzosreJL52bY45KNxs8yBNWiZHqwBfs5dSC95HeF3mbfScdTXfVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48S49MKrn9chftx4z3iLqWmUrFXwW2r7UNJMEvjyBwDZgtqprShEqxrMJ6Bau3Y1KnPBcz8yi9nqDG6eo2C7KbUy",
  "key1": "2a8SqtqPsN2AD7JtSAn2fjCfnQ94p9QcS7V8wKNDrwpwyRvcBcAVxtpCZx3U9ybY4mMkf1huKNLP3Ck99shqCFx8",
  "key2": "285RbVqVEJH5XsbcL9fDg2d6t64CW6d6KhRFuahwSv4qsZNwpNhUxkX9eh4tCjLF7gWdN345MGcJuGDXSyKzkTco",
  "key3": "3iYidkFJq6L5WvDj4d8dtxWkhAUv1oUBBXnAuPvUP9eT7QuTKLeJRW5HobT13doUTRPRgHzCuoUXUaQfADu8S8jH",
  "key4": "4udx493374VDikCoeDekbXuMXkJERtMf5kE8AmGWsXxSYPQt5Sy4AKZHYVPrVV6ogzziPYXFjgTsU6wPH36wUB7M",
  "key5": "3nt1g96VSXercMeppTJMfKbMWE3k3SWgmXQ8i5GKae4JJCdrWk3pucrzuEmFqkRSemkdjjavZaTqUpxuPzzLrCyF",
  "key6": "2NxKZq4CAbhUpFUGHjsAzUfNhnCFs1a5xraudQYTVhj3NeZQEeQ9G1YqrzrjypsrMkJvu1djRZMBGxzgHc8B9KiB",
  "key7": "47GgbVSoW3aj5sFp1s2E5N1MFNEacL7knNiS9V4HRFsfiyGerhxWE6UPzL3RJuduDT4kiDYbiiDrBNTagUhmMhc2",
  "key8": "mFBJ3UKVb4Ejrt2QmRVZxvq3bevSTmQTAtVGaBAm5ryZwZYPivrBw75BZ415PyTy1FhDjNUAvnY77uUnT8RyLo5",
  "key9": "4rheKPk2oBT4q4v1XhohfGLT9gWwLyRpgwJ7eXh3mDWdria5dcUKggdiFDdK9bjFJvFfTxvcYdWNQ7qQfuWyiKz1",
  "key10": "2VSzUqsd4r4jap92BCBcrbW5hzwiraoBtyGwYncTgTpHpueBZ66QPyjHyLVFCkoHZFsabQixaChUMNjeJEZVbdd2",
  "key11": "45JJ2h9rEHi73y4pYbzmCJbRgpzNKDrcVuVBjjGyD8oLUSXPdZrpx7o2qmcHwqqwvE7JQJWg99BK5BCjns6h4MKT",
  "key12": "49u6k7Ae9Guzz7diXQuFTKvngJuciSSqxYfPjoXdQG2AGi8TphjAzRU1XVdeG4MpTWTucF5pujWu5JPU9tUcsomx",
  "key13": "5GdHPALNjkSrGhyZwdRSSmvRfUeGfKFoitKE4y9NqK9HXLtwEW7gAmpwL91rLTCLQdMEgCUWWSmodKTwBU3ykMgy",
  "key14": "2jCPybpANvfHDYjdcTK5NPehLXPk54Zeb9WsUxARxoj4isnvQ9j3z4MFVJGdvbP4N8bNWSc5zcEqWVUqhxq6p1JK",
  "key15": "3Wjaow5mJHqgH8BwbYFYDbrCU8Us1MTMX5wEK5JyFv1HVS1RFuJiqULwtq4htnRHEUTDTT519bHJswwgWhzS3dAi",
  "key16": "2VKbR91AD96MK7xnAT1EXi53e4t4kVCLQtzeSStXAipCefAuYLumC8PUV5ZBXBmsMxHSmuMBrs8WSdaQGKMcXNuL",
  "key17": "5DML8xoQjFqiopX2DXB3aAJohhBXmoEycvepDduXEqqfuUJUYQM4JkJq24K2q3HqDgHFo8gpD6dgGEW7j6fW8ss4",
  "key18": "L6u28zigyLkKP69HxUNb24FC9vDwdWxB481hGUv1naj72NhtLpd9pMPk6qDEHFN6p5AhwpwxzKrAP7mHMLrPNPM",
  "key19": "a3NkYs4XRtC6rVcy6A5JseyN3sjyZpVwRno9QY3Da5irJtyFosx7jNtisjNFsQGMe56Kmp2GPkjJgqTkSbX7xCS",
  "key20": "2vsrcwBX6sx3TXCiX8gB1rcgEunSUVC24ChJJcGRyYMw5B5dpce8fn6Q62ZXH9VtdauFBh8ME8oJw3VVbJoRJg7V",
  "key21": "5eoF3R1DzWeXAHcSFTuhfxYmQgQ2pRX35nthUwW5DqcPbZi8qveXaefxP2DNb6DUwisJ7AgpwRWwdUpXFbdpR9nN",
  "key22": "5FSLtkWkZ5MqawazEwoqkBMMkpzdFE8TKHG6XmrPMFbjVgvFJmgVNsbDj3TUbRY6dZK9BwCAVtNWfRkMPKFg1JAY",
  "key23": "3m8EneTbnQaGAVBvE4agGCp1ogs8CPPmkf5CFfSMyCM4YxN8VuLN9PJt7soBPJQXV27xsdtaUdfV9NELL13vk4Ze",
  "key24": "4JpkAHyJxMzrCz8qd8MF8FVf3UEZVmBftsuDnmQqnAL9S99tbA1aNYAM6HLfCRFp4fx9JgVn1fCQeNoDsN8QyUUT",
  "key25": "3tvWeZDHrKNqa7RdUDanGxdVGdXUXyXqdygyWgcorTzbH6MtDz1zFDkE1hKRTedWR4MvdXEejuoqCJexmC1cBpFH",
  "key26": "3CzVE1QZEK4PVdhzwdezAJ6mjzuCqR7itnpTAnYEcvX6dEhA5KTbHMiQoZCGdJwL7Bw3XBMWrGnatDJg1bdnobm6",
  "key27": "3j9KbYhs1Hj6J5tnbNrKQgmJevrqKa3uFCLA7So9kZfQRqexgbrYTVJKkq9iNfog6chZqEUbHQGEd7VMNy1Xfkm5",
  "key28": "3ZnFbXCzBYDXpbBJfNJ4z9tC9ao7utaxVGQsR3nkMXkm1mg2BWjMRpT4JNtkf4nw7KqAvMKMUu3wPSzvDHXRLJn2",
  "key29": "2psAcHD4hERmQMiPwGw8zv6PnZkYkCpPpAW7aDzB6jpiFGptJBPU7Ezd4riGbhmjFuAUKTSTMFsxzSVfuCopfcT7",
  "key30": "3e2rf5Vpxt364H6M3o9FVmCBFbceDP7KMKakvj19umHznZ33ugkPGV5YM11pgx5LNi8pttVR46e1iCETpCgUokmM",
  "key31": "4b4281vrdHuPf8bmb591qRqquG8aoig3drxk3zBtPgzZxiuAW3Su2Pu6tmisuxna28skm1cSAYVQ3bs64XCizmUH",
  "key32": "3Uoib4AXoDEnVDu2NEUtvC5TeCSW1fbZ7gp61QFcZcjpZq53MXqTb76g6q81EoGGi7i5kgfwkUb87hK9yVUnh2Bt",
  "key33": "c7zD8nFREDCQ94Gnmzp4R92fmVfVQohgLq7FemPBHvanz1zhSBXnz7D4zun9Aw74BTpNgM5KQdikoUjrPnYVXFg"
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
