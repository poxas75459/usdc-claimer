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
    "47qnxrjbatrTYdJDJskPUdiwicBz4QbXdRzGuStmgQ5bXC5qjRCYfk5CDMzTN9aV9RfwPtkjZPkmvpNb7FmabwXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQxZPDpKfDfvR2wXj3Yt5kqyczhX1mw6up6RcADza3PwS5xYwmywhYi5VfaTNdfoC6FGYwHRDKsFyqQE9H2FTqV",
  "key1": "3cMrGH6R11B4jchqW9eEzTTRvtrQwyWX6KqpwknCJPzb4xkj43uZRqHop5FeXT7EXMviSqZcZaM3ydhZXzeDv7jY",
  "key2": "e2UfTDerg8EzstZMLP9tcU3BcbDy99ZGW473TMbKKVS3y4pSEhZbjczuQPAmWfRUPsy6DLZYRx3iMnPqnYa23Q5",
  "key3": "31VczZ4Fs5ngXFaTTGcNo3BpBWv1pptQH5c2PktFhcxvJKWyGRyVtQkgVrmN3zpvBjd11MrRvscL2iV2xGTyyqrV",
  "key4": "4cSxy2gafs7hWXheQYs2G1g1jNsZV8oE38QXMo4BJHEm752jgToTbzXBZjxB6HNkNHnqBpMNKxEQ1jKHFJq6CZpp",
  "key5": "4STWRXaFGQBQgCuh1MGRB1LinzKX7wcnaAg2MAHARy7hfKxQFk7aqoj7ZyS2H9DnMrbXv3FrLab86EEYeG4XmnXs",
  "key6": "4BwWaLEfo6EvNokYtL1b5MqRegX6NRXFeXkiT2bKceP6whd8gCC8ACJaaz1R9JEhukfARgYjE2XS44ynQnHv5jwv",
  "key7": "5ipkpb5j1MmrJA3g7i3Sipb71nWY9WDai7j1hejewnFxXWD4NZ84YcB8BpaMg6YmTLUah6up53udWjM8RrvKgV7",
  "key8": "2UHpqqAWf9a467BkmGQ1u9hZ6jyfDKWRPFfP2L1rgDYSgJNjQ2AhMMKBkn8hZJSBnfzCx2uyuXCBD6Fghxx4oZas",
  "key9": "2tqk3K8etn17HJwqh3KWn7WWiMmDkjzBbPAjh4GBuS5pTzvvNZrobEeZQJf8QaN6Yrw53zGXdzisuUzN5A27YN28",
  "key10": "3tcEgGsfCdRryKeiugfuc8zGVLod3cEz7Dc4wczmmqjmppLzgLKHEXRdfJMPiwGrWsVqwBxqdr5teDK846fwBRZb",
  "key11": "26Mpj7SJTEBFsA4zLk2HiaPNGfWP1PQmBAEVz28xFeqHeVzyB6sRc1ggsC9L6xiG3uk5APe7jSiRN7548JY2mN1N",
  "key12": "FNG63qGcxwUnomp4rJmrkxYpLw4e5SWj9XMDZCPX2or42mETHr7YTHYG9heP3Ut9siEqCAc1d4KgvUXBVmxhZtL",
  "key13": "5vF3Qsyg7ZZBefjPTy7cFQqmq8x5om3KsnoHX1ixfdG2B2J4wSiYCdpW4dn3UWt3bppZMYz73CMriZYJg3GVukCq",
  "key14": "2ywiTaNZbD3rYk4Ayn3pj3XQmAKeVAWdzg89vdTB7NsqrVfzxs86xLsgrbEBviwfLvHw6pvPkFMrzXvEYiJWnAjt",
  "key15": "k1HqjwFRV1Rd2U1bdtvZZjkufmJu4V3kWRqycVU7eLZNrfLajpdBjF7VdRbmC6o738J6zYo8af9PKhiWASvc1ku",
  "key16": "2pBcy8qrJu96ndh1AuYWjM4uKZtzKp6joCTaeiA4E5MFdrDFZi8B5uaWHCKFhNYqZPBriuJQwoJBav9fK7jfX6xB",
  "key17": "2RVg3ywgVGF5nSsYmXkw9uP9qeHhd4nE9nYhXAcHqBztd38kSkrdhUWCmkRMnuQfZrjXtXxFoxmfnMQwcE8Urdrd",
  "key18": "5nCQUSifkBQP5MxkUV8Wv2jfKkEvKou2pMTmfcaQ1mTfDCNkfa2ADAhHJpSfW8DdTwYo5aPP3nX5AY1BwCrAqUh1",
  "key19": "zX4cMwRAMjPxboNFtcUQt2nrmkn7rpRynMKZZd4CBNbC2qow6SaTpYfiP2xCkX3VDHNopCc2ZtjZoDUm7Zuq12F",
  "key20": "2C78Y2vU9UXCMyyNXTLsKnMdEhzrVyEgrkBxSd6gvbzVzsfaDZCbT51AC2bBrHEaJMQW6La4vrJwPs7miCe5YHqv",
  "key21": "4cWipar5Q5j2bid7xgwFrXVWgsCbZmu9PqrEeAFZDecfQVpEAtLxdAuW4CaEpUVcMjsZK6cwhLMy2pTa4uDov2W7",
  "key22": "MvrMVhkZBPE81Hje4szSjYkAsCdyErApd5GoSeJpnxdurxPMZ9BJC1C38EUZX7HdReBUTV95MN2hwBuU9wPgRcE",
  "key23": "4z8DhLXD8s7QmS8kdoyZACK2zagNf5gwGct2tpPWhNfAnqMEDn65Ex8z3AVLa6NQm5H2KVnmqP3RXPsSEGY1tnWY",
  "key24": "5B3idadckGwB84m2kVkitVZ6cArCpW9tY694Q4hgNwAxuW4YthEWTh4tUtvazMpGDeZX32NF42MFKhTZH7Xbhdow",
  "key25": "5yhsAXLFLYz6rxcsacMvZjqox2Z8sgpMVoUmuQfv3XfSUcAnTeeLVYftJQHzzPERFK5krKUxoRwCRa9c717kER3i",
  "key26": "3qnShtRN9yj3mk46aejM8Yuzn8mW4JdEWbPwV3UBh5j41BzgiHB7MoRzyWgQSWtQ7drRkdjKAKteTKvcJNctaF8U",
  "key27": "5dipNvAdSmtUhc7Y3YZYqECaqTZxxLammm1WhvBFZULCsZF4ZWhAedjK9g1JgGbyzD7DLJ1kwFgRNavKEJM7cnGF",
  "key28": "4TnfbNe6jHATnfLxDoVDaD4xNKgtehh8AarATcSd54BbvYr5FL8ZJ1qYaG8529cVHzbdn9qRYU9vc1xgLhp1SMfH",
  "key29": "3zgMckHhaEMmZE1jBK1nnRWQJg3sdB5C2WYP6UQYBEivyoi37XzR5px8Ma2JXFBttjK3feYdhjG5y8BFd7PohMTK",
  "key30": "4zFmx9MBeAD3bS7dbZRwHVpARjNkMNXj2HuS6Jg9GPqbtVSaNgqLWAcLkKV6bdorQkkT5GzQcP3f9j49JCCqtUbo",
  "key31": "2DZ2ZEZUfxdmhi4DgoYDuNaqEGKjsZqkoTxNBi8k6m3bYhxqMXFscbsWZfWXMUNj1E3cvaZCiZTE8D8LqgyofLus",
  "key32": "4wUq5Jw1Hn6z3dezKUtBsobUuFRFp3ePBdMSgXUEThJNqbUkjabGBhLKnJTatWwRJxYBS5S5ESRHLmdFyT7iYNu1",
  "key33": "2jWJdfdB4fGCY7L34R9yLohjaGhZPLCVirykMhiAxUAF8MzLRL5J3KGmH5qowLsTVpTLgVckf2wvNmzFhf6kHyjc",
  "key34": "F2Gfdr9LvjPkBzNEhcRZ3JuCEDdWWS7QpoBoxwMvakMYJecYvubeS7jpBaxwSAJbv65Af2o8GdQ9vHUzpmiuccU"
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
