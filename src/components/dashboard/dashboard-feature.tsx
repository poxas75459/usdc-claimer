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
    "3EftUeCUfvLVSbWoLCKFqyZTqN5xsiBDmGfDQgFG6Geg66zjh2bMe8CkAEKvRhAMrJLXJChF6iXXfWuRatfh5dPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NtCSo8ydzDvbBcA8Yrea1tXUFXgfdHX7sThEs9VKaGw9hwTrHhXuap5H85GNySyEez9HC6qkfqxwuufpdo1hq4u",
  "key1": "tT1hjc55xu9jPaFTYzfYBuTBadFbPygF76zySgjCVukD9VvXD4KX1T6DmYVTPSenpuqnwCYn6fSLWFLi854hN28",
  "key2": "5vcTgDriE1JVHXiefgc6VWsLFziAJ36hnzgKeuvYW3fcCnBCDd9fpMGno5hFC3V5dXqUh86Zs2WZPBqsTT7sKSPd",
  "key3": "4VFdiB5khrjNTQJgkPmgsSUhNWn5L2Q4Hk9AQFsGQSJ1fnQCmbndEttTK84658za568dseSxQky3tucrUicYq157",
  "key4": "3ZzkEG1yMNFNGxX71baYySrwghk5KNihgGNfpJsjzzWhMLsndKkWUKVckFd14nXqfpPKnpHNd1UcEiVBr99DVgPp",
  "key5": "saAA1c8s3t22nZAP8CgqHJVKXaViwnehWin8tUQ9Pc5hbrtMEHsgKYyhpd6zYNy8GZcrKZgnyBhP61kMwpPe9zd",
  "key6": "45wBnFjbk2YWM7SdxXvVU8Sheuj2ofxKa1nMMVLzPyQxcz9WKVVQJ3nmHMm3hFws2zZLmzL639Q3uHj2CRzrSKqJ",
  "key7": "VV6RQiEm9Ykirp3PBZMrB2kL1iW3AdpyvXAuW2D26qD5AwF3HZLYndEAWLYTToTuJbGZPwDvqawTzhzPwYqGWRA",
  "key8": "43gggCuRSUMR1Js7AHAzCuaUUSznrj82PaTABstaPSqYmAmLgKfekseqDYBwDrehhJo3cTa7tZ1bLLz5zgZLsKQb",
  "key9": "2ACgSsScmo4jW8XjvpqSBCrzgiFiBWSesbpwds87DMbv4wi33x2RcVNt5fmYisgUkvX9Yq96jFATgLwp6nJuX8yc",
  "key10": "5qDYR9MH7Z8pKsJJvzoysJ2GTxXPdzGUqr6WAMwfCm1a1KkeETGZZ5RfYKGKx1p4meYHgX7CztNFJK8NPE5d99jU",
  "key11": "3B4SfKuVyzHvpzna7p8YmwfZwE1jeGQfLm5KT9LM8LPR7FgG5HHkfKQQUocXchVAv5baXr63rdE2zKdfyBZEfGap",
  "key12": "tkAkwjtEBHqS4NF8E9yWyW6LWTghv1A2ihUTJNhpsHNJ8RPk65q4EgSUy3CFiEsEyiReo88Sp6cKPbK8Kxwcjze",
  "key13": "5pt1AW5i8qwz1rtabaHfiVsBRHXJbg9CR346q1k3f9uti7jgAGyJcr379J6vToufeBdeXeTqkcvrkKhp9kNFvYJ",
  "key14": "35LXr27b6MZbxCRPiXiph8MrrvFZ3D2cDz6wACfhVHUpyEmDLpE1CK6weEsA64x33H9N3aJ1W4v7Re9p9a1qmhei",
  "key15": "3G8vHepKBGDC6yETzPpGeMquZ5skfhX1n7cLrcLz9Z1UheGjt9Qm5JqAAiqUJg3UEo6HVtRzFF674QXJYCqPZNZj",
  "key16": "offKb51SNqE3sCdRKdfMBTZnY8gKL3zWz62CtbF5wHeXppbZCYRwk9HXzCy7dsUKXEzx1o3ArTFKhUhYdVG1sho",
  "key17": "38DPg732qjgGmKujNbgxVT5HkQDHqxrTUZEQqJYaeaAC1TucVvcTWFpmp21MfvSq9f18KRQoeX1c3iT3AwsEP7bt",
  "key18": "4sL1t6pWfvxx2BhV3ECRw6HvF6oEjGQ3X5gAt3xWCdNJx5L2a2BjRpqaurPApktp4RC2fgbZY6Ezs2fMBNKg9HQo",
  "key19": "3HM1aipj76cN2vQydWmxAH14Cxg5pCk88jop69QtUHUWCcvs1TPmLkqLBVsX6NtEZE6hEE4LAWKTwJfp2WHoQqVQ",
  "key20": "5R7cskqSWxMHYZxTGa4tSyj94XqUSZAvY2k6UPVBpzc5itLFgKbUTyPdXjvJdAHYrBAe4czh7TrTrXZHZ2ywvwYX",
  "key21": "55KJPDQ4TG6FZsnC8K2kb14Ko2EYCKaQx8sgwyPii6B81QhJpGbDCHDYHMzJmEo9uF35EYKUdMb9BSz4PSXk388P",
  "key22": "5iBQHxjuDGxTFCwxn4kTtw1paMuZRSyvhTA9Yv3eL1uqoHWT8YBhM1pnyKiJr169vdsraaSqfnatxMN2ubiyFfx8",
  "key23": "24yD7UBhqmQ2oVixSXWAZG8yLGNJdgiBtnXLNPcaGgjFnBr9zyCVGd219EuuuZnoVKKtYeiSBEFkXC2sybWfPxuP",
  "key24": "4eXVqaZSHYrngABZ6LRXnvhpuAH9xU3L7ioFeZzDiaxKP1hcmqSvu3eNi7hrCRiURaE9FmcspZRQa14vRmKgSvmt",
  "key25": "4azV8zad1USdGykTQh3PbMFhnD7wT84AyfcceJcwKtMzWizVo26NHWVkaaCiZz1qqd5SxDb9STdmQbG8mBfUgGDW",
  "key26": "44G5YcP81sEPraq64RYMrzrStbYdm5m7pUc7rQAwQF9KPXczUpJN9jjykLZHUAfhhDTRgCAL1oGGJe731WkYiQdK",
  "key27": "3qwCaGafXyhwDk7m4wAY3Pq9h6sKPkMZBeeo4uCWE1dacVHWv6RH9cnPF9AS3NeqwXQVzbSa2Zi7d6mkSx8Sz2tk",
  "key28": "43NzMmhdA1SJg9ZpWMXJEuiLhupoUJLsp9AynPLEZkQzPUvKtTbqsw35VZJtqhUUVaVMzd4tPujxNv6cCyRCWrdg",
  "key29": "5U8CT3xyRUNT2hH78BG6R6X53WPNbPyc8PL7vH3Ec5AjsG99ww8XnmAUfNZJcnBGqayRdcvzyAKidTY6rV6ky6Ad",
  "key30": "ppLkRtdRPbpXCff2bMdsjBozmgB2SuHhsohtPpQKR5vHnrbnkvEkqtMcKtPF2rciH5a4SnW6catWxo5f67ntiYR",
  "key31": "3TiyLvmK78VXdZ1Afn6qRnxAsa8CMtcL8oZHu7Ugz2FvpoNAESF264MA9E958iLRuRAQ3eT6WRM2e8TQWtHNanjB",
  "key32": "38ePT8rUjpxKZ7LP8cj9gp1YD8dtiwF5D2VvnPmWLzFdvotfsp1a8XMxe8EVzRFdE1zgtHULCCnUW7vaJxSwfYRs",
  "key33": "51w5NTzZyvB3cL6xqh8DrUuU5zsXXDFzpkmDp1MjGyQ9KLNNponpms1mQL8zaJmNpDRM6tMxUyXSuTPPidxEB3eV",
  "key34": "9wZRESCxq8rVmxdArTGNwou7R6cZXY5VSWPuWiM4AXDtGHpayxge85iSJTb17t7sMe3z36YjCnBi172tVfYmNhd",
  "key35": "3SD6Lwsfz57BKmvnDDez1mhpfV39WBv5TMAQqLJv3zBNk7MNLFqeomy7YZwMeahqYBpsgWNbK7m6WakrzNA2qW1c",
  "key36": "2EBfo575VtjtGmfad3jYq4MuapDQKHpXrRXmMt3ZSH9JsNX1QNiRXfSEwY1frQ1aQ2eqpcc7dWBHpcynJ4ZeY6nU",
  "key37": "DL87qYoSAtNU1dLMHfrxFi6bULh8W82LAcdgHNiktKei35JhvseWcewVwgbR2ZUL1JNi4D8ceJgtzJXuqZUrsvW",
  "key38": "2P5pbu9mbDhtSFecGr9syiamstazckBiC9Z7psrZWbanL8Nu9mqjzNkuRWQ7eXqdcD5HWFhjoNhPMdkqz7K6ouhH",
  "key39": "32fCaMYLJ1dmDV2o3o9x8mALjSPVfYSnJnkUs3ghsLXRGRSfsvCYDK4ikfE7Fp8MthnTxwoHpTKkP9GyYx5Dy3yA",
  "key40": "2pR2wCsL8QX8S83ai6UnUf4FgogM2dxs7nxCF6dDK8vEKf3LRRx5SSufRevYadfYcwx6zxy6vst3jYGNGnb6GauM",
  "key41": "g4qCHnbCkLeSeZqM9BBA8N5gwJ2E7dtxzAPChEntmdv2Z9DAG7BPWY78s9RyuHHcm1MjjX2ueq67keY2EXprzVQ",
  "key42": "4wzSWbnHeUUWYcBAPn4HTNMZyiENrYa1sKTMq6Jwmw8rKUeJDR2Xd9anWxQdW1E3VUrpjxMuw5AZhR133Q6EtB7n",
  "key43": "3f31QssNwtzCXTkXjoL5VXTR94s8vyTuwaV9QYNtDsKEHzbvJZBzCgjnGkbKmpT2BBBrbkVoch5Sf2TodSiHqiwS",
  "key44": "3nbbXk7S8iwnAyfrmTJeJ1yHz6UtxgX22uZNMR9j2y3F4CgsU5hNvehD4h63ggaATkg538CCqMxCQLrdWkmqVvQt",
  "key45": "4Dbgpkhfd6o9qnvpGqtQ1SK7v19y3Qvam8d61R1jwhBpHdT4kDdRs2TnzG4V51c4dBokgYjEUtoPxhxdRppP6Bnc",
  "key46": "fBAnuYws2CbvnCNPdLVtaH649UFJGjr7RAbWVrxniKbssViNRFkFRj8Y9VjosAQeQ2znpi69EwcH59ZJhu9CwZv",
  "key47": "dKyw4oqhBceJzrAyazcy4uiGxDAXYzn8VXttst1psxvVkJCXBvCvWMt9ZmUpWeDPYyWJy9h5yaLddtENMyt5wYo",
  "key48": "4NKPKF29RNFNTaXvLJgKDtwEp6JUqNyDVjvuAMHQJjT4mJ8sZYX7fasXQhoFs5cf9MPo4Vpz6Dmd1hBHPs4iCaZU",
  "key49": "3VgihLQZo67tDi1r1uCFxDt2iBGUX3uJL9R9TXW9eb53RGW7RvgVkY4GDJdy7wWWbqFC1AboERqz8hBWNawvMxug"
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
