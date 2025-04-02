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
    "3CCKYMwQ8YoF1Ro7Dtuw7XQCx62NCKv1hBnv9uuZZx2p448S5ZA8cwYkDNCqNt7H1EwZsnYik8PD1xZ68TL2HXog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5k5tMJyAro3DvKoP3fpgXmxqXunYB21PSZ8qej2h1yFAA5xXFkBpYSYGTdzemUooaN46qg6fzdh5pHnZGgkuTR",
  "key1": "4YHVyn6oabprsdPaSrLYndMsTWExD3W5wRurZCeJFJD1P4ZFrr9D84JNgmZhMDS5dcK6VmJJUdNa2QwtMGnC1ryB",
  "key2": "4xo4XM4hwHoyaMwZhTcAzXEAgNutfMFHv7RHbGSMV6vfEpEjrEFPw82Pd4iaj5GRj5HVyp6KaWN98XgLLD2Vf2QU",
  "key3": "2miJf43xnHoYbcBUb43ji3XhVKmR2EdH7gs4vRps7AbnqeK3HRjyr2Sy7D2M3gQp8hqLDzozqfJ1LX9YKGDzELvc",
  "key4": "9JT2cR2rHDxJTaHYnGEVQUk2gkxAEtQSMZhYiANUhkAsgKdR7k8uayToZWiam8EDCmnh5L1PkCtescZ7ervqgZR",
  "key5": "4M93YuPcs8PAz8fREYH7yNvym17LaYKqp63Do8G1J33er8mKfQsDyxNLFE6imY7tf73nfazoDyHrs2C4k32KPn59",
  "key6": "DsfBA7bkhLVCPPGrw4FMhkovV6MqniPhe3xJwsE4SFV8RUZ2kjdRcba1oARoZehT6ozm6N8CY2tL3E1EKtWuAW7",
  "key7": "auQM96ySGNg3FPykz5u6WmELgCHyMFfdY2C2UruuWtc32C3xz1iwFfJTXXFDWjuErTLToQG752XMiDDzry65pD6",
  "key8": "57c1TuXvpExaGyZSseN46qQ2LDBFVfus5e37nUwpXLdZtJbYu91knEZrvz5vK9JyRqJUYs5ea6DxrEbYvJDWVeux",
  "key9": "3jMuujyQ6SKp3CrvK1DusnR1HnXXuX56rvJAYqC9pX5aDUnS6yKFrXrNq4J2R7PyVhtkad4WL6PrGKxPdiMYyPiJ",
  "key10": "5A8KNfM4UsLKtEALvKy1XEoh9pJeEmkPZsPRLrByPJWgJTirr6fkXHYFtHZbcAXjVjDo3TYL1HED8TpG7rJeVgGq",
  "key11": "29YxGxigeVfyjECSXYYtwcXy81mNdYDuMpnUriB3oTF9TTgjUK78gC5ViKNeSWuWJTBU8PqF3YBhiNXboTjaDvMF",
  "key12": "2bMuFhKGzig3dVRSCTKTia84ewm5LLPi5QfAtdjcQ87H8xr2Lvrh8UWLRBXB5WedeGcA4CQD1WXBpadnrsautWTe",
  "key13": "5EWrLqZBq8ju9bYXwQ7LqS2GPDdF2pQJ4GpCr69dDjhsnga5xLcrsXeyTGs2jvRT6Rq6sr8BZACKyAGezLz6NQJ7",
  "key14": "58xNe5E692BqudWHt3RSXR1UBBBqvZdRnBNHH4j7Kd5rQAURmxCvbyDJSVe76QEMWA1dBKVxahta5BRBGjniXU7H",
  "key15": "4rx3wgqZ6GrpX9qSm9cSKTFhb7fwbQYt5UZ9HWXo2L6qDP3Pc8CKLWooC1TM64S7nwKTQdYNBuYqyKpYqvMXmJaB",
  "key16": "2Nf2KuzK8mW3bJieiqFwF4FXd4YBoWzzz47fYpVWWAn2rDESYpfHimE42fV484sYYtekv3fAQxPcmQAgxUcsSWYV",
  "key17": "2t1h1cryS5syGY8nUcTP3TWJwALvmVvCW3K4GLUjqVifSNgwwgnVZWFxjDwgYfYux5bRda3kFRcwdrXLwBTnKcib",
  "key18": "4QZuKfQt4rfrKuz9o7GT9as84KhC9xyyJj3HjrmeDsTmwgANoKSxscJDAkQcNWzpZMqzbqNFRxKQ64W9X17NvAJ9",
  "key19": "wVzaJSdpXTYABydXmBMFoSPvmZYRnqj8XGDQ8YTf6JGxcJU46BEkgKowtZHjKK4KGzth9n1KX9Eon6CGcmAKkAs",
  "key20": "3dyrSryXnwDTt4ySzicAyj7AJjFzvbGtW4LaKoGdZxuxmr2J6UgiyjFaSuNz4mg38cpciQFY845UQmiRK93mj9Y4",
  "key21": "gUSm5aZFSoBibxYEt5CayB1ezz57aY9aqKvYwCKA8KYj38CmboqkfcPyt4yxfWN4Kajyim72WjyQhWcJynepG8S",
  "key22": "2JjFQsXpsTPzRptzbWdwQFNo7ZrncdHBiPs4R22YEqcwkMAs2qEadKkb8fwthqgVgaQV5tgqmVpCVYsHrPsmEnye",
  "key23": "2eGBDPnNPTnebH73fKJfex4VBJnEXXmEGfyEgxuxrf8f2PkBvGewqNgvSptFoPr9R3ANoPGLEfHxCuqDDdSeWZNF",
  "key24": "4NNjSx2mFxdj4YKtGCkva277u4MQ2Brum2KYoKQqo6Z7RpXwRDFLq9b3vMyULHdXgGBpCvGKt2g39X61LLf6rGYf",
  "key25": "84haapHULVZPQcaNMjXQkUKo9TC6sQiSvcTkJwgswu76Mg4FXxLh8wJfQ4BJ7fqX3v6VFypvgTFXStdgFkJC8Ar",
  "key26": "5XaR9gGG2Ab4nxG2oR8o2VpKb4uW3LR3RxNgbyZidrYmEad3iLMFdA3Xi71kFtxAZT8SYZBwf1XcjGaBas7hrHFZ",
  "key27": "3dTnGVdZYB27oMQeLcny7jPhGMxYqrd99NMzbSivV8KLBDpMVfbt7mhWfQevSpFSrtc5Z6BaU1CVo4pNzjjq3u6M",
  "key28": "2wksCo3wcVGGQswRi1yoTc253qPTMBkeLc4qXLyjNLGBxHvo3bMJJVmL6z76vaQvjjCdvbNb6RrQ9ymfX48Zb3hD",
  "key29": "4HoD6YrMbcNfpYgfpt34rkHJ4NNQwMJgho2DhYuEoCJFa8riAKeDM3m8RAd7MV2cfGU6NmCVsR2W3Ur6dx1mb4gz",
  "key30": "277aDz1dxekXBPouKrq5f9K4dfH94U7EeM6Wq119sMQ66mie6E4m3HPpCzE2uPtop9FZecnYiRRgqQJdizf4Wpc2",
  "key31": "5X5D87q1khAVZGYc56xiAU85f4jyK7qhUG2vT9iGwgrnYfDzbaFTsNGe4wotZ1bJnBSGwxZLx3WKTjDpPDskx7r7"
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
