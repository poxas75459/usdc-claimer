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
    "2pZ9tsmDmrBavvXhtLQrcADKgREsgVcmcKHYh6KwuBYtEyoLdarzNMPj6JFh5YZ5UVvAsSZXbz2s2EhijnZoPHF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RtSxLXK9uyT6T42V9F1b1148pTChv6RrYSrb5svTvjTKmuyqPzKCcAYp7RwBPooqGXRp7PwVRNjoE3xYBHBvZH6",
  "key1": "HUYrjgUXPDpojD5ACPxM9ZifxLqAfahEDCqtrthnRyULmmh2usAKbpvBKcWvB6EYckE3njf8hoK3nHdhbevNsRi",
  "key2": "ooyvpvN2aDZkWTTAvUAfGexqPu9UkJ44FeoGZ25eXU9GtRJrZ6czXVKoUootvNaLbS2mc8bRYTchF7LaHwKY9wo",
  "key3": "4HwRVmEo48cEBVazzWqSw33R2EUz8A494DgbVqvffTF3viCtRS3uKiixC2HLrkr6iLvcyDNiYmYW2ShCsQib6DXo",
  "key4": "3Jobcck4Pe85AJCNpbDWTGKY4RddyDSAX42n5uGtMvmtqTvkqUGtSuCMCP4sArA3RbZEF8CVKbTw2r3uPibGnS4H",
  "key5": "3aszdpgXQsQucf1Sphwzv9aYroNHvD2TgafnnGztdnUkaVwEoiakep3BhDq4JPmhSBZj7RpJ4ZJSvdX51iRXGt4Q",
  "key6": "2VYjmSMLURx22NUSBXc46vEgdSxEYyUxP38gfn6Yp8jJ7tsMbjr3LBiWmoi5cgtEbeTG1qAVjqCDP4RYWDnQRVYY",
  "key7": "4etkP3ypviMP6PkPbUq4SqC1hnyAScCVsKbX1WSdQvjmQ3tuRxbs8rFAthkjPjyfpkYwqhHkoKn4rrmSigxdXae3",
  "key8": "3ud9rZWokAbz6imiNHU6k55Cc3hkV33jYWmXSHoWR67YLcDwsr6Lj4gtV3UexyteTpizYkbrD9d2pJFSQNm6GYuQ",
  "key9": "23kytz9ZZrJGZhM6BovFGSxt3amN1tcu77iNf1c17z2cJUFfB15oq6sHTQqtBJLuXrT34UAahBjRiuznvjPRpxAv",
  "key10": "4mV2FrR7bAGLyY6pycAtyxakDUERgdPNaPhADTX3kJZgVSC19VsTZNLaKYGqz3YX5MvModk5NR1yyxts5FabZWaA",
  "key11": "3XSzCJrwUFw5vTmqaQjMXYSL5CbG7hsGo4xMKC55SQvhUXzPatyEBR9ZnMFKcWU57HhrSBNCV1XwJmkxKTyfp6xD",
  "key12": "3GoVkyNktySzCJUZpHwsMMHcmMGKp8sGtAcQ14x4VAjcrLHqT6k4PuejChPLakvhGRyaSFyiADW9eNTbitCBFgJ8",
  "key13": "525z9tx2qjPJVDUkfFwPqJrLwvJHduf1SEKcsBRpQy7GzebvdpEu11eEvTB46bCwjA2Qi9ozkc6GBA5Ma2BDqJsM",
  "key14": "Mz9g1AmtdGS8Kad5cqf3himSYuZ95ztoS8ishbnC1hNXt9ySY7G8UDf2BqYgkghbqNHdgcKWJxqDzDCAFBUVFaW",
  "key15": "EzEseGMW1eA7bfugzbimP1GVsA8iqo383pqcLhe1J4Kpu122FpnESqF175z5wxnQ4SHXXgzzpBiBFHmfqvqpjvL",
  "key16": "3xbHJZFVbYZVPGHTfhLHP5SJQNJFA6xGC9BtJ8YYifQnUNQovbcPw4bRaXZG7UMSx3uyMCmXFhkvRXiViiBbRt4U",
  "key17": "4JUfaKa63zjWsaqW6GeB9c4HnV8Bmhakco69iGo7GxgAaFmMModjXS7HJgWeBaiPQyDmsh5ACGoQ6nXgbCMjPcLB",
  "key18": "5fNmkkSFTAa271PqCmpgKnApgvEqYF2tGPCtWNzrHJoPBx7hHTGjXGYnrcxEPvDGGFswhS5jRBgxHs8Z6Xx2q4xv",
  "key19": "3aGjXayteBVMi9dH7PjrooTtt31T29EBZ2XQeMPH6SkEnJk4TARbL1tgtCYDbo8gdEaHE1WpnNxYM2PhYkZreBXk",
  "key20": "3QnFsG7zE5Di8HXYAMZkwqe5YqRtVU51YqFJbwwJH7frQZBBvTNmDbPPyaiFLwAy6oh5bNABManiCyrYsQxPaTAU",
  "key21": "2yqsAA2zWHMtPVRqBffJrPyPRyDiDcvMLFog1NQUR3NdSWb7w3cbnWZGphp9hmd8vyhFYWQbNnjYv5tK3enYurRR",
  "key22": "4taEkidycCp1fCstL6cVGWid2MGKeW8wydrkfoGXMkN434eQ7jqY2WQj3qyhNabhM8ta9qgnoE8zDyyavgX5Kac1",
  "key23": "3Ckv1speSh45CeMWX24HA8t2acSQ3CuUcFsY3kpWfDcrMoyy52hfxXeWq5guYzKQhg15oiJxkj3rEDWCe3LdX5m4",
  "key24": "47MdTJL24EM3WiBqnPgZ2Sk9GB838mCPL5hxzcrWJBgL7vygUgBNk1omyGcGFivrVdPyhn3wvY33tYtN9G3i2QnN",
  "key25": "2cZymmnVDUbLmmxXLMA7A5yjZxai6JmTcoDp4Dp9NVjSqiGc6qWDkHZFwa4QWGHiYeuDBTqYmtNMzk9qJsce5xdJ",
  "key26": "3GZupZif52frGPbey2NZ6QLbedxH2N6gqwbpo6pNWCdm5ScyjB3wubsVpv9zk6tbAR3s6HP7tndmwZphsfcKiVPG",
  "key27": "2PmZXWeQgCUZYa6fMaM4yAAcepAqYa3eVWQiocKuVnS2qjVUHYbYRa7EHyRZoE6N16t7QZHg4K7ESYXzNRhhrzuf",
  "key28": "PiXXTG3whpxkeob1rtGr9tC5hfdFSRZRG1uKBRiSqNj4A95HqbHsgKKaSN9WPzzb67fUXawDGHS61bW6qxD3Cvo"
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
