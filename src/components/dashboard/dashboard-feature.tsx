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
    "VNKT9D9WuFmZyCKuj2VoU1V17oZfkm7KPc4MBxy3N5TxbU7nBR5mqVCN9a9A88UiVmm3hitXruAwBoAC5uLdBGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imdqg47wAXwG8FkLhL7gNUX5Xm7YCt3zTDmTbC2oB2F6j7oCKVMSaZANsoHzyirqpR1c4ZC6UNY6T3apkiPa7PV",
  "key1": "42sapZsE5wdCPicVmTd8KNMRmUNftQQkA7Z7cACi4TsBpJCWvgTcAiQhfVxqQKeztwWAb2LnXEtZh98NZfjtLbU5",
  "key2": "2HiRNUhaCEE7FbpJ3kazDAjbJNJ9E11JGhk6adZGFufprsHBczpRSVWZmvoPS4qr3wNMRRCtWjpTU4CXa1XKa3tm",
  "key3": "3RGP1Negzk23zVWcZbeRjAGSS34ujTet38KR8xofEgyK1NTGesrZHwsPUEHnpxoRE6VrB1KFEKb6XTzF6T4Brezb",
  "key4": "qvjEreg2XKSTiNHeoyFeBzuGMLWcsWjpicB8CSTW1rQuyVuyBd92VdcoKE2zFSGRRBFUgFUhLZw17iUURHq3pxw",
  "key5": "3m1778RdqGP4gUSqA1MCVbHGKHVnX4xytGxj3BjqvAi9Lg29MXhSqqYtBf5nxrENrbeUoAs6GAPv8yTvzCM7Y4Ha",
  "key6": "5uTeYS5fZRa9ZDm4LmNsCPB7ShJfoWJRKfzKb9UBdrepdqiH5CpAZ7pE6XqSypawgH3cram3HWA14mAst7uwsfH7",
  "key7": "2J5nMibHSiDAZMEynM1V7hmQFEQY568DjyrLjiTunUi65r6W271ATAqjU4nSMmHRYWETyxnENCxcp4Cx88LEwMBB",
  "key8": "3bzYSNUbjLsTy1UpvL1ao7iGBNgf7BCBoccmEFTz15uFt8EzsR2bk6TcXFKPoZ9iv9buunA2ywMijFp2qDdUUkFg",
  "key9": "5LZQZrZtniCgJRHhLsbPDepxdU11BXiiDQmP8vzjBTbB2LUxQ5i7gPjzZ2TGefsZfcwZGx4xGu8tjgdFczEnaQ25",
  "key10": "3PJZWUUWhL7J5YwK6V1t4QukdMY2JL5VPrkrvgv8tQkN8yZSfB2LJJB3MNEtMAsdPBNLZ49A12t3YRmHHhufWLVH",
  "key11": "2ixUFL6Pbs3p8nQwfsiSFhtLRtQxzpp1CHavc5yKktX1PhZggzPBk2BHB28tqzMHkjumvC5mnz4mUuDMsncdSCmY",
  "key12": "46uqqkDjL6RvJ1N6N2nhcVpfvMyYpDqMWZEou7bzSSYTaMcihWYZKmvE6aokQELtPTKQTAiXnriQeHcMsqoGmEz7",
  "key13": "4MHHnpqhE5TUJMGuy1ZvkbYaBsmYcTvaDMduMmC4rrTKM8QGCtPDTTjTS5ePwFHXNzn2g3x41nKyhyyD7dQQinpB",
  "key14": "5KrU4Zn3cegrDxUmvYaoYMVeGTFS6pWELXNG8nNvasAu3VmJX3wDiriwryViNUzqjXYZJY26ffmHxQ7vLDGdVeFf",
  "key15": "4Rgu7J9pRAivQ8ig8rMkLhv8c1D4VZwtsGhULKxHbfxTMDstFPqorfPUUMwfz3xpajhoKdAEqAQXGVAggGNtDrLd",
  "key16": "3x1zNN5v7k7xEzHHb8sN6Bqncket8wLwNAsaqBJxvsw2PZHstM1kTXAL9RiDxWXZx4MdWWh53EPDejAhFp5PgWcL",
  "key17": "4VtGbFd8uPS1J2d1gj7xdih2TArsCKrrGUD7AvXCsoFRrPDmtbxSs86xep5QXUGVWPJyWaB5vehZYMLkQUReBwAT",
  "key18": "4FgvvGEeLLDEGeV2z7mN7oeLJDyKYRsyPDJ1drJCoKBz6exNiqjXwrbzsYANzmwAuqf63Tvh7n8jZC8VRgWHmh2y",
  "key19": "3amPDa6DqPU3cEGbcmUJq9xnMuVtFnCrEYjtq5J8QQ6vr9bS8qtwmHtEYuqGxo5NRPEia694RFQwXGQrBH1wdZ4Q",
  "key20": "4RoQwsr8qcRnTJDY7ZC8BQNWYPLVLPMpDhrME9HX961JqnCdQUBF1h72Hu7BuKpNuQYjVbaYuf6pLgpjZb9j1FKa",
  "key21": "26A1VzAti3Vfzydks4MDm94DHB5tSuLduJMpXBxGRh7NXw4uw7bX61MAURczqb6QXtsvbHJXhpMxo27gyf4121i3",
  "key22": "2DCYmasN4RyUXkCH7B5GB6a155ArZ4eUnZn3M7nxH459UScaCAjFtS2Ky7pLArENouAN7wsKAyCFrL1oso1CsrQX",
  "key23": "4T8c13mAvNQws8LLhSEnNBf6grgWURMcdCwn4RBiPj5ydNu8wUGaz4iXKbwGrgMj6ixeBnEuq7EKbT8eYhtjp4eE",
  "key24": "4StWgHGRnP3L7dSBRZxt9HCvpPZbyKF4EL7Cq6huGiDHhYgjxK6jQv9EYAoxMEgZpC4s4ZzbfXMj4jhCckiWtDQN",
  "key25": "5k218U6zZPtsCybCyNnErKmhReteFKq7teb2LLhXG4GVduxfpCCe3uFeyhw1rrzuVj2i7h8L9yz2uUGtV1A7mUYh",
  "key26": "H6tfjto3V1dTDmJDYyiDrVF7HaFvskPZgiy1Bqtb7S4Gxucq6ouveSbj8ouSWDZiu2DUg7EH9Zc3JHxATTYmmft",
  "key27": "HqPt9AySHRama8uPu9YG2cKv4EJu1W2aQcp2FyatrLFBtgnd52VsjJcyfyT3kJWyjDD5DF3uY7Z71fTZubZGdGg",
  "key28": "3EPoaXmj1XVB4yUye4QNv9HBJTGUxxFiHegsJVyphkyY3gkk1JiuVRcy2hSrzpa52SLPRdVMEpo5r3hvhvZYqxnq",
  "key29": "3tAi2kupVzbUDJ46Us3VYg16Uz9iMNTvAtjhDWgBM9btX1ugDzHC43KGRqGneADrwdLD8vtNKSUKgYoK7hsoi6XD",
  "key30": "3FAUAKcisqctHoPSpTdK23WGwoDXagqoJ4coJUDoRq2u67SJwkHtHH5T1PksYj4XZKLkiuxzyEf9yvsL1NvALJZo"
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
