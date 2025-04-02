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
    "5SmvJDQvtgWhPS2dQ8vnCdCGRN26rFxPi7rDRrvpT2QvFoxLtQPWRY2kLtdaTUhmQx6T8sPVppvW1XVJqYiVh8bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eqQ9VzkEASJZaN2QXTGvPrcdsumzBLHsdDdmXxPpNsPbLjfkrCXk3M8e9DUw7jLeYVNycZvrFNFe6pK114jajM",
  "key1": "3EH8DxuaVsimmbxdLepWGoBMZQ6JpRUfiDETAGXhPg3EkVtemMyiwJVjcttV2fY8q8Fr8bKSN7zZNNHBVDCTr9PB",
  "key2": "43pBkC5oQfR1tCgoCdyJVbEVe3hwfVY5eXwqagE4Z2LFsVFYBqC4cbEYp2gQRC5q4hBNrmBfBgUWzaNqx4QLgubo",
  "key3": "22txK6ePawDrNkgWgdEGy6a4H5Q5KBxWo5wJw6XGmhQnuDHMLWmspkBJY534H4SW6mCwWP5JhCQycahUeJScEcpf",
  "key4": "2Xsp4J43gGEu2AT4gysVwayUApPZYgwevXgwcpfZoQom9BmZtp3xfwPzZCoqQzMeByw2reqHSUDqXYGcoY6kbQUj",
  "key5": "5WqpdidezJHknNSrWi7eyqFSAAwhTgRuyTCyEZQunEG7mddfMH33GgRuwK1jf5yCsDUDoxV2rSCqupxLJ32gnmPk",
  "key6": "3JUQkBzXRENWY9tZr6pYgiHdy11uuzNNK3xpHebwLB64FPR5ySB329L2XgtVftQ8DQfYhPLeZ1jJoJyyzJuXc9a9",
  "key7": "qVyATqpKip5hp8mrkjTLXyFvm1XssHUJGb9CUTeZ5VayiU1dECW8DsgVmhxsu4pCixM4NkRY2CSQepSTRCpQrEP",
  "key8": "4P7gRm9T1uMrdMMiQumKFx4FNxB6BKrzoeUSXyG1G1ukSCzqWsr5sY4pfjNDXHb35Z1LCdtgRFg7RHBwBAAYCYhb",
  "key9": "WXxYPEa3pQhoVbJ1TMRW775gesrpXHQay9GDjPxGkuXdYHJKm7Nn5na7em8U5aPSx834y4en5mz2Fjq1yzey79v",
  "key10": "2z5kPf2Ar87Pf5h1DKA7gWkMoxKK6pot7HgCdTSVgzDjo9uvgBhXLJSrt29eTmQaQiiGCL8qj6Xi3YLs2y1kSxiq",
  "key11": "MKxnxGECSAxXvtNGuvpvRhueEhv7tULbNqF3UarkLH3n1suCXdRcwUtQNcxrXzG7CU9a29Byx5btC6CXA6Micth",
  "key12": "eSXWsgQBsrgZPZ2KfKvoufdqV9Xgxmp6KdrKRwJ2CAxndhbPQSWXWkgPGS41X9MLKhWSvMTh24ipf3Jy6SsJJ3z",
  "key13": "5QwnBbVY6yGyBEis9qM3YbwduBv6s4bGZVbyK9AAW1JxdmEHi82RWFwxMVeVdzPkXcpK6oBv5ay7emj64paCUkRN",
  "key14": "5Wo5mB8mg3DknrB9PJQFTHCQ66kmEfNMMVYAbEMjH83oPUADtJtRqDYGGUg9nt2H9V7ouvCyixBxe4LBf1dh7roX",
  "key15": "631U7JYEzkAYRpSUDfBKW2Le9vkany1kduGWFjp65Q4fRVchW3PEZ8M1xkw4cGFRzVMKVZTL3eHFvWq7vgSvm6L5",
  "key16": "4SEUVSVjD1cpeHJug1psPfgXmV9qyqyJ2syuUMecfJe6uzaq62SkJhXFU9So8Nq9fhSVeZkBbwNeV7LRYZXtSBXy",
  "key17": "SVwE6SiyKnXbWuvH1QhecyXJdew7VsXNyaPikxDXMXZx2RdSBtZALWPVwRwW4FF828RYsKNAaQ2ffGNPPgaJGiX",
  "key18": "4CYmMjwdW1RwyJZyGmj6FLCwDbZgJrFvPd9evDWMuLzNZkXFvCbgXiNdUppB6pr6rx7c9ApniyPtKo4Lrd8kiKiu",
  "key19": "2EoGXWZZvx4WQ7L8fsBookseHjrYejDGN9WDJjUfTLodUCmqe6PDYmn3jNJiUikEQTo8vxZkE4kvSHU693bA5rTs",
  "key20": "SD4okrqAD21HTsma3bHPqZJZb4eATNPeNrxKfgkfzYLPUT9pMZPcQQzwpJ82EaBV1Sb5rcNk5UbPsMQaapV6DNZ",
  "key21": "4HLfFpLHZUL6CfZp4dm4uazNcDrTNVazYXYtfKfYZxMVtDFNeN91VcsDRuaC5ae3vh1kMCRamTGRYrkBLBYLqbHX",
  "key22": "BQ4dh28xxRGAtAqCm1PVUS8yag6Z4gMXpzKaiuBiQ6BiaTqF4gEQH4Gx52K9EjuFsBHdtfxEGg3LTBEGovj7z19",
  "key23": "3o9rA2EKt7g4nZJwXy31guoe27D72QRTTUCXx6dNDfGpThBXxDkdvebuANo1jyaTKt6gZvgDutancgJJQWkKGQuW",
  "key24": "4zuFFqPDbVuiHoDL3UiJqqEmtQ9gMdhdvXVzKfb9G5pBYGKn47mYnNKozsThF88RKs75LE4ikQtWkE8zXXSDQ2MS",
  "key25": "4KWQ2mLQPM5pmFypMNBm3JLrhnR9HPXobWHWu4NjB6D4EMuGXbdGpZbfjQwCPYd4JQAm3t32S3DLvpWWwvyb7H5B",
  "key26": "5R9ym934msZmBcUxsRx5CbwKkGhNnip1GUrh2GDkm4cm6Nkv87553DgoN9drDmMxrWFLRExGve46uVw7pvDZYmMM",
  "key27": "66vJiwEx7pPaCu4nwyX9ChMMEP7BFRViztqZqs17YXHK1uKf2oDhQ8JpFDGs6Fh8bx4nrvLVGK7AnTBbQT4C8FAP",
  "key28": "3D2Ge2nVmwSbZj6MrbEieVyKAVqgdLhfkoNMpGCvRHHNiCeT7PAbWti2VLxzf9mQ39VprTkbPRUZLVcx6Uht9pAP",
  "key29": "JSQCoMrQgPXWFkZ8ZqX8mbAPsHm9VaMCw5yE2BTPmct4Fach1ewqAqpjS9veLmTDpXr13m7M8iJsrjLPSm6wA5x",
  "key30": "5GAPP8UjmJaLsfm1Zaeyqj7m24zTgfZFCbjjupUhqxsMWdS9kHmhTZmy86mWFdcekUpDx9w1Lnbn6Rfbf28VXpg5"
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
