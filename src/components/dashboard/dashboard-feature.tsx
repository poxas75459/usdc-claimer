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
    "5GDiyan3aujCbMikfyHXS5BH5e3eMRJnPnxUHpbKoNbY5Fc1UEKD5uxp9LkHgGubfkscb64kcwDaKhe1X87LtaoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6481HazakKyqC3FCasC7s2gcYUfsFhWwRfEH6Nq4EvLLv6RvdULTvCz54NLj7Tv4vUfX84q4iB9MFDY6Lvd3vxZ5",
  "key1": "2bexvycyLz9dCghXETBrFq4s266ndNqWvUfjdDUrTJHPc3kokGqqeRq7fg5F4iwhUGx98bft8pbgtVrb9ZbvQtyL",
  "key2": "2UvoxHwaeU6gY48LoHchakEKrWNW1QiGqcvi2MDXNGF5BUqfRJTTxyVTfyxgdqXqgogqKe9jtJVXjtuBmkVQC7ZV",
  "key3": "5hNwRp18YDp4KbNppsSkD5b7EoBdqb7Pf75ZzeXE4ScWhuKymPGiFw6dHqhejNoptGwKBucaefCApNjr8PtEDx4A",
  "key4": "2oxiYyP8bkyR4z8KAf4RNHodtE6zyYFqrajXnHpkcTP6UevaRpicDVVkSamrr6NXFA34tMa3toRBE366iQxh4hMB",
  "key5": "TddYS4GiCGJmjCjQs1cecFWDqHPLMz7xcWmug9BDvaLBw5Wny8Pu8tUk15ZEqEBFZsHjsX2eMpEpN6pAkJgTHHy",
  "key6": "584cMKegQ9fzeWh1MHJooL6scYGvhmGCjgdKRsWGopodwD3AHY5BngXcNBJGwbEj7RJFsYHpoaWnR4uksFJQGLsz",
  "key7": "2mSCRAwSCy22Tva6BFnE2CKREVnYhbTScTVjYqHPw7K3AH8WkNYhpv3tD5waV3AToJdgehBcyzoeBaM2SHss8p7i",
  "key8": "kENdhRygEiaHBYWYedduM9zw2ZxNNwH8xNoqknCFDuTZcmvFuMiq92ewVxvgtukUAsEtT2o2r7vDYFNdhMpZMex",
  "key9": "3TDtmEvir3ubeP7BBm87vT13oiuHXqeeRK89hrbXLLMBLnJHBpPpZBNLqKuXd2Qr1cqg7caj9NKHrwBhNwwzwFxX",
  "key10": "eWV9Q25APpQJZwDN3bDULShMHDymdbLtEXjWW6qVcehNzyp2hexoAcxEc2KCgTTPRNhdcoWT3k4e5PATz6jxTz2",
  "key11": "4bNjeN64SQ7k19VHbwb52o8M3ckf1MzYyb988cRKNbWN6DzpDcsFAYnDMoqUhsgKN8WZS5qp9RHCVhqwm8ixbdbf",
  "key12": "5291jXW7bFgt7ihYq1XVm719VEyWJNbweGiiGCQ7vzKXhZBZKkTvwDJbcoDSnChucirqGVu71shJzKdpVDsMLShZ",
  "key13": "2dwxkpwbiVUDWAWCsyCA9VufW4VykDMHPBzBd1Uka6TeZjzFTHrrhXd3b9i4RMHxgRHnQWVGrWwA9f6fDgScwrcu",
  "key14": "37Ltm4eUKb4bfD91TbgupQUHj66mERrQXQ5LSUCJHQh2zk4ovAKdcrtUpcLwHx8D2WTy1MSPGr3AevYPkMbDAxM",
  "key15": "bENrPRHX1gZH7Pe6fStnLrXAPmb7sVUd6vdnpA854XmKrdkwnvUidLowhw5Wug17xw98Hz2fUCU7MecHMhk6CXm",
  "key16": "3vNMTQdMp9sNW3FGFEvs7RXmocsf29oKJsUtU2Ea8ETXc3yRrQzMYyDtR7hRrVrsncJ3v3VA9KD8jPhFYvyKXiwL",
  "key17": "672fdpS1QPsBQztHZ8cWg1YEY1z2przMV1KsadQcXPdNK7QbuTr8BrP9Neab1evDhsBDS5TCUqTXw6wy15R84b5V",
  "key18": "dgbGTyBXpbCca16zMhERJkovRSQP51z3JG2vA9avVtk441qdRSErge2A2XyN1CPZ5UMbpZNXhf7Sr4ksn6bHa4E",
  "key19": "4KgJRxRTsHTBx8UCC3zEb5qFzPibsuV3t38FLA8WmGqRNF691QKRtU6k42dBBxSnLkE5qriz7mrv3QuHgniEiFoa",
  "key20": "ZHMJ8uwhawiJBx15ains3RRYS8pgnzgZMBoQYsS4TYaJpKLGEQuEs8c7LpUJPTyc4pnWaLfwMWucj51Tvqoceir",
  "key21": "4ZDLvrwuQnDTWiwRouQBPXDjuJFJ9qbt2QGEFNNvv341GQGotAeSx2DA6BcYjuTo6t2Jov5sPq1EohG2faFJSHhZ",
  "key22": "p5gY35aFhv3eRKtg2WJYfP5h7VRxiFNPJRiQaPXbUfXaNRgveMFiLUGKusmzdSB36QD7emNXdbBAYWvb3CMNpaC",
  "key23": "2XvJ3gy2SQ6wa3Bco6bkRC2CAEVcJbFSCFBDiSmKj6VSPvX5yByJLAmtHgVmhvcCXdkESGdW6t1TsVtJFC1tk2ji",
  "key24": "5qsuLQ7dgeupeg42bs6Evd3WeUtuqYmHhgWsp7cwPGQ6g2ELsgDWQVJDmfucdnCTaKziAPaacDzX4uSdxCDPFw9n",
  "key25": "3HPzDHTvoZtkJ53F28p25EFwqa7o7DLH2xfWr57o8XtRSbNY9ppL9Q3e2Eb1od6uXhsKdv1hLd76YQ5gESZZFAZJ",
  "key26": "aBmtrwTuKb4VYVAyY3KH3g4XPhZ3UExuor76vjQ6ALEHsJhp2pq6SWRqK7YGcrVRS2FK4sCLnZxcEsopZYy8KRA",
  "key27": "2Y5RPswH8TT1vGX1GhF7AJMPpPTP6fABsWrzH9rkpsAiC2s8gveCWiD3rLUxFPQYQUGL2YqsyHGiB6G178zFjgbx",
  "key28": "R3b3ECvj5onV1tHfLQDurUumRaUy9aaBQycaWQDzCeDLreoJdyFp54ZwtNsVNBKWBJXPDhnMaFUKbUgmqXEv7Zc",
  "key29": "3jMZJ5Qn7a29SMT6mZVKQFDMKKTMFFNgBq3yfCLDbyeuPt9hGEsgaQXcHU7DhLcs6SP7fKaPkjkWupXghmJdLZPD",
  "key30": "2kmV8VNQMdETocmTQvY3jh2EMmfyDEZmh6KvLRfLjVUYT9J236vxVCHL2rb4VHaM3MLxEjCx58gYzzLYatJaXgW1",
  "key31": "HSpgYpvgkXqzwdpRxGc7SF7nQbp47bPptBgzUekWzPnAmFDog6ssG5PwL1D9r1VstynFSpF3SdJ4KcakN66Kr2X",
  "key32": "3QFnWygdPn9DSjtbiV5AbMSk99vdVh9LDrJhmyrD9vKXnTEHFJyvtFVKq87H8W3tvTs6XoJBHAYPhi9uo3HvhkE9",
  "key33": "2ZXntibe4rpm1NWpfjET2F79JtUVsm49uwpZZWE5MkoSSsZxKA7r3EPk6SzpFHHJu5gatn9s89UJQxk5E3MtNDkL",
  "key34": "298bGPjsRWjiNEp6DoU24sw8H5bRF9UjMttEWB7vDWGaVH6wBZvjN2Gs4nFqk7tieGf3dwMFo5iwVq9kNwEA5C6z",
  "key35": "3gSwNkG2qAjr5rXakaaRLphBvbBuceord2YXjHt9d1aujQgbh7tjkfFyDH3VR7h2GFE8ZV3EtnKcz9MzZqaNPjEs",
  "key36": "2RY2PyJNyUi1W4NHoouofixrwMMyuW773gTq44eGVW2SJCpvnKR1v7UDKMznpaF1xa3kNiUVN7HbE9UMX6qWGW8C",
  "key37": "45xat8XbnroadaKJ5BTm8Xti9EEgQb8MfYK8c7h4xM6bQVJ65XDuUcJAQiqoa6adwGW6Sbhy5gmRumRnYFsqFMUp",
  "key38": "2ZnbhQarM6NQk16vwRnazS4Wmkvp2Cg8kBpBFca51diM7nQixGzkUqDHDAJjYtrYYK6oCWpys9LJ8i6k4hbpTCqV",
  "key39": "5ghnCxXP9GYkvV9S51kSTnSzqUS7inJncCut7QkRkEGGMrg9XwuJQ6io8MZCh4CaiEtgdQixj66sLnT68X2yfBRc",
  "key40": "4zXVE5hjAQVNAeoTrZoRXzTVEyb33BsqiBu3AJZ6Hs3bWWazu1kbnjumACrkHTSti1FGATMunM4MqCYKu3NDzjTZ",
  "key41": "54iYD8uGRaX46BXzom9RRLTUeCu8vrvLntUM1Utk8JmbJjHGeUpfaHdWJRx1AZXgyT62xP3mRnwpe6Ydi42Ve3aS",
  "key42": "2tUG3C9WsXuph5xXJPmMe8Hjm64A8vAKfjaBVXfXiUAryGRTnr92EfDFPMM7QSH8LKggFci61NvmHBxyDUfvQxL2",
  "key43": "4onqVq477Hvy3LwCG6nxtE8ggTRQ1MbpuE4DKy3EN7bJKLUAhe9nvpEaMkRVZuDwweX2pEcSPh8exZjKmQp5oVLa",
  "key44": "2YtBhL6Tr33H11U2xFrYUYPKSxQ3zwqwYgV28qi1mFscq9EkyhFUYNEPjGakYQ6JqbsMB1x9BLTudZa2AnLKVupf",
  "key45": "7tyjUc6yEj1sTMjyvuedXaHfRAfxASSwPWozT6M4wuyK5xgrqK7fkNnqSNhJkTFMCebuqw2JEjWNtKTNYX3t9o3"
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
