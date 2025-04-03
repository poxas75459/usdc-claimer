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
    "5nftEUzzYaBkKitkTfgQxMT3mjL6Jb7u66jLT99fx9wmguvwSrs4smK8qxq3DrfHJk6A1Zak53pDegYFFjm5Tdn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUha3QzuSZFXBHtnyC4o7hxqZUmjeGV9wkVDD8c5DZdw4RXUwHCwARYUDdR3FrmaPxoM64PfPDeZQMJsUcwZsbd",
  "key1": "2heRZhgnEfpEL9hmyYnXtEs2QUDHQgAZMVZA39c352AjnRiBQxPru6nLmrRzFN7WWfHrwUbrmkytNtQNgwMYhDrU",
  "key2": "5hF5MtKHnBmUwWwNHV8UVSagVgJQxnuW6nokAY7cc9wXkt7wFZDgFQbxWjad9Y3XDBxZ8hDdU147j9y2r5BtgvLf",
  "key3": "T5ZkAbKe7MF5V8AnXNMzuCRgLu2DD31XjXzcF35KmrMw8DtVxrnyhLke9pq3JgzxXntUpZHyXKLADUTM7QYSASa",
  "key4": "4jumhnw2CiWNwJ4MQKLy9zK8154TkoHz4oF2eN73T3BHyjXTVmgnkNyn9FTbvRSg7McA5gVe3uaRbvxa3fCGLLbE",
  "key5": "2gVSEKPHiH9v5Dv847w4QYZCLHwzJDXGrSoSZYifx6JEyELK5eiGUpNSWiW7LqNHhQi4mssTiPoNofhZAdCvyYpo",
  "key6": "4FcDXdDBr8RDyDsfqnZzPJ5R2uc85WnoSDgb8JoPLgqc2Du8zWhsCVqzGFBeNCtNze1do4GMkt4Hm38GMAahGhKa",
  "key7": "631BBDePjBkQDQTuu16QWvM63hVRYk2zyowRpAupDq8Qb7EYUPgRYej9t89efX7AdU3ke3GrfJZWwcpYGqSprugU",
  "key8": "2azwvcGBhQ7nn7M2Gtk3YUieuWpT5PaQQL3XcLvAjLQHYBrWNjnKousaNqTQ4MvxXN3Vnj5BnF8Zm3mFMuyLZz2C",
  "key9": "9cQWEgVDZoPdnGEF1HhyZNe2JN3VQYZPKVMkZdZQkRHMvZLECbVEw8twCr7LGK1ptQRRFPdHbH5ZnQYqd3CMn7Y",
  "key10": "2pWBVz3WBjGvZiSyhejPzziFpwNB6VBFCqUV1MEQJtgHwoqwamykGo1dKVjG7nzavYJa9MpvA4W6JdVANCMPEdgR",
  "key11": "2Qe5n7Eg4HkMcHVtyDHLtNd2SCzwajVyPSiVsCNokpfhrDTwhBqzEE9M8kjsqbE6uaeCVurH5Dvh1ay4UPi8fcqZ",
  "key12": "2T1GyW42D9f7GquPPKvigKb3vyShhD7BkGPFMupXb28V5Gmwxif7F3AxqrpYMkpW3ExPxjciE6kfEeWaSX6J4FmH",
  "key13": "5PGuKEu1RgmEvnguambG4o8FcbMaWzRMjnfsKaw58u4gzEQ9NbS3DxDDvZiSdMxaMiZmxsQYV9xaSdHvd7KM855S",
  "key14": "21ooYAAu5FPocKnBs5bMm58hwRRhJnVmtqfgLwz7Nwcg6x2qCXD1nbuZxD8XUDQ7TS1hztTZUqPDVbZfMfnEDXek",
  "key15": "3mDo5NGqDxzXPGU5fKSdVBgkTEekgvh5nmbjZgVg388MTRhRrXkmm5YdAs8eahrpnBDc42Z7rYWd75k2t2do9Qyo",
  "key16": "3R4xcnrin74asgKf342k5P4173Z43DyFG9sLaM1LWf5QB3MGpqV648qwq8s2poGyr9g6bJuvnynGhTPmbn8mMEVW",
  "key17": "4WLuGBvkqrmiBATiDa4MsrZMK9rZQbAaGJzHJwVz6F8gfXm9L7Kb46hHvCCM1HeeJ3zffLuLoMXDNZwWW1PxJebb",
  "key18": "4ZYTwgiQtmfBPgcbdmcGZtZDPaQ93vfC2v8fPRWcqpdHYuv6WfqfY8aDDUkBsomwF8Nfd7948yPz7JLYCM8yxATw",
  "key19": "3astaUP6HKNDFiZoj6LQerdRoPohdMoEUwbY8BGouf5SdwWQf15mA1jTqgyqHfi6ph1n49f8CRmHj9cXeXKC54TE",
  "key20": "2aZ1Bcf2wCc6FqCPecH8DPCJD8igfYhsjMmUUPyYSFa9uESjHV5MkZhyAHX6dydNxDjKjDxFcvesUPY4eKaiJMwH",
  "key21": "3YTYp3AqBMPWpJq9D2yS2iiW4HMSD8QoUfj9AY85rJfW86WtJNJU79eJqNSmo6nKxVKctQYdPhVpMAMEhJy9mvAW",
  "key22": "32R1QqNiLYDmpvs3Vr2n8UqX2KkMjnqAmeHiQrTViGCrrG841jTcuCyZaYfCHoQ5EdzD9oTB1bpsXM38y9QhtNC7",
  "key23": "3gPkPEGxHeNhganooZXzt9Bt9ebwCwSrKJCMgB5tYDCQQMrGT7ZQDMcBnHtLM7eEE3P5VgLNi6b6S1mRuL66zc88",
  "key24": "2p1RyPWg9d25vsNuULzecSxTmgg8LeTjyLhB3DknuixLXNZeCa9RJMz7f8KAcACYzPDSDmFUABAKtQoohBq4Ae4p",
  "key25": "4DR7g1F9gsyJ8xqMXuqNDTVo39DVjto9ncnTHTatB8YhUsfYWckdPA6d7Jy59JvruG9qNbkH2gEkTFUnQkc3t1y6",
  "key26": "3xTtWHEiQw1k3Jf7Jf8tmjPT7xHCSd7kX4X4h4gfsu2h6viBte4fHLWoWV9fztUUTTUbR3FyChT16u9eWpHfT34U",
  "key27": "4vBUimE3mvVkwcbN53Fe4ZMZ7z1WMSRuFSHED8NG4USNLn3jAgaByG59kwhwRTiHrvK5w8GokpFEMFtJbCdsJP23",
  "key28": "3HLEuuBvsEWxthEmVuQR5C4Cpf8Ht7fJgckNRkP9qajQbyhxR3VaMJ7vKdhvQudd4drGbA7SXYsgNgBrpvDGPVNJ"
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
