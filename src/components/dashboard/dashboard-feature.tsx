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
    "5qhu261WdnK3K4puhkTbUGsPighgaJpypWhZz9d624eUYbjtGS5sEsQShNn8GYJo66o6CqVhDcne8xmLQjLndvfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5THBGAiQzdd3h8uHB9HPJg8MZV6PaCzLRRyzHfAQwU5Pp7rVNVMeSegqaAHEmQxeYMnQFHEmqgNW7U4GDXB6ezq3",
  "key1": "5s4dwJdt223G4jyuQAWWCTt99qtkK8bv1ooDMgSjvSFgKXFcK3i16aMJms9J4TcPgyHhU2B74W2GP8Y7sGHy2AuZ",
  "key2": "2jNMNJjDJ4ZSENRAuzJHtxP72WhypLjP6fyqXxTZnGnUg6bANUBojiBZ3sPTx3tAKibwmtcCUBuLg1oMwVrHWzg3",
  "key3": "2HhUzXG8RsXbTFtY6KjC4ZzEx9ptRLhafKYZxMYcEscGFiX2skCNNAKUPbjhJdUhWrbk4o9YZDSm3jzbGmDfHBER",
  "key4": "2pV2taVuNR2kZ2ip4DUqZcQ6raz1e754DVAa8Pn92mzcUejn69RreEL8AvTY7Ja6ctFiQcHj5s83rhuDpAVGBLJ8",
  "key5": "38fCBiTb8HojLmoXHXWPGcJbtDGUw1q8iWtwr1nRzSrm8fXLop1ahy5FnH6m6BFpffDGkr9TvHw1okq6kqeYNB1C",
  "key6": "4qYdZ6FGMNWJMqtRyuHn63Tq94YppRsYcKFeGVtxTc9wqLz1GjXLYYmBMv5fDeC93wUS8fuK2PK8kFpc2btJDfSS",
  "key7": "4rBH3UJVxueSepKtQzvh6DpAYXdYSTH9ducbUJ9uMi7d1PiJn7MszQwy5YtnHDGuL6QwkG8KmVM1H2Hnfc2VZrk9",
  "key8": "56mEsaeP6rrxF6BMMZeoCwswh2TkQfMaaNjdKVeqPEYNoPSAUAXJwDwroz8121kxxgEJgZZ8NC7HnupdMznzG69f",
  "key9": "42ACjUEPvs3bRjMtALZvpnWrS1PRMKbhkeHPcxtaG8BhxQtVms5QQW2cZSN2WrrNeoabuK7EkBTc26NSXRknhYdB",
  "key10": "4WurKUpsxta3xTAf2cXzc7ZWwQv8LCSKYPBLGifCe9uN38CcYxxUqt2nBaENWMKT9GvXLAuQoSfmqi35yzkqvXkn",
  "key11": "2EqCnKwSF3MYDEAWrScudHXviHB8iUymynJPEF3323RDhbXZ6C3wWXTFL7B5Dfza1aYstZDes6Ja8NLr6zWwsc69",
  "key12": "JX456ZEeaAcnsgGAmcCR2VGgKa5nbrKJnD3DLbxfwnPJR1SM6zkDKMjuQ7vZYn8YyVQ8aWqdsFy1mSQaHuRB6pC",
  "key13": "rxtHiQe83Pt3xvRdLQiX5yP5AyP65YBJBjsZmzEaxZcJdJGbaajd894LbfWRr83JWtACKFLPoX4T4agRnxAAwpx",
  "key14": "NmGX4Az9wWEPMUZjsMUweK2JrmmrUFopzcgzDppUcZJ3mfjibBke49G2sTNG9eEGTPb4PDKeA4T4PzRqR72ptNC",
  "key15": "TuFCjRDAirqgerVBUquUSPhEr5usxGrLQgD3i75Y2LYaf5vaDebGBUUXGhhAJykzE1SnPoeYsa6k4ZEhjkjtfzi",
  "key16": "659iTcxkvjssizNU1ZHaievmBhxLskr7SsoiKddn1a8E9U814hKvFmLRCHMk6NCSp87YDJ7GW48hiviquwhhYTQX",
  "key17": "4hwbPmnhRsr2wEioVyP5Dp2ZD4RjTC1esYA2GghgN9eToD37j7ippRQcvwqtHLvc8D3EVbjibFsy2ApFu31MtNvy",
  "key18": "4jcyP2ob39koNkaMM9z8c1vtH1wqXEmVUH3TykY2cT28APifWctxKwuce52yDKaWDWEfDrKAzFSaQm58RqHHb6Ba",
  "key19": "64agZ7JdtHpNgCDazrJfSKBtudRMY6Egn24Fv1ohqi3ayC4Tq2LubJuqRcSnXPX3mvyWHQgRbbdLUYEZjVhMPym7",
  "key20": "UrqbZmDP8uG1qwb5VdTXEMhhrGjpLHtT15dSxSNhZwZBrGaYYBHWm5nHYCmpqe8hUtFQMMxP1mamtB9DSeTjfo1",
  "key21": "55paNMkhv6TZt9QUBVXz9nE3kfYYxFJ5LxoSaMoDJn8NTvByNgvxwgrsA1YVu4p2SeCo82VzMsckgRhco2YnmJSH",
  "key22": "3R5RXLaq3LJsMH9SHaSuh6j12nhyR5qrVKjEfVnYu3w6UpXZj6ehfaKZcMTN6ymwH8qL3upVGCsKnE9mRHviBqWL",
  "key23": "3wx1K7WjPyJUWHWiZvJVfth5qpFuq5r976hRoshsLBsMXzbKaN5q2F72Wu7g9GvBTXHH5EDUbVHBj6aXc9RuFsrj",
  "key24": "2vwMCu9jxcuaVFbQpm8R86yqyBA343U7rEQrNdfQwDckX4njAhTUFJKNyKHmHADDa7ypuwJbibH5pkdEt9u5mzok",
  "key25": "51u6gniXU7LyHQyXiLgZYZCmHtmSAY7w6GxfuqCCdkVArHKzJxdJSD9xddtwyoDQNY845WGRKw2eVFxzMPBiaxRb",
  "key26": "47meTKwTiSjiCQSDvTFVMDEffvcFFNHkUB673U2d6QkcHbALoCDvuWsPhQ5wb1wzc8g3fjEZQtamuBYnxMhKFgT2",
  "key27": "3mVbxVVUhtQft2bsLc6PBWip6fHdoYd1UQxpki1tz9E4GYFR1sXyZbTQWDEwz96gPbnQLs1EFHg77DS49ZQfmMwN",
  "key28": "uHSsUtdG6PatBshEh2gSTGcY5t7BU8o7ncssS4utHute5t6sSrEmmqqfSwNSLnxS7BVhU3D8T2h4TVZgcMA2nC1",
  "key29": "52LgPtqfNrvW1cpGuNV99pumcEFaQpYy4JGjBgyp5XSih7Uq3uc3A8zomBfDqw419r1ur7JMaV5h1KhicvTuEna9",
  "key30": "3DUNYgt177TC8EmbYgK8KpRdcfnZ6PdxUaYzCCoUxUJVuAb77FVaiTY3M4Et3mVoqv9JSyXnp3FpEMaD7mt7aeK2",
  "key31": "48tjHBmB6ymNVefsTArCwVCPUdpemFADJ1PxxDwMKorEs8MtHSHiHfv7HY5uAemZoN7S487Yx7rSzqmQFqzJV8JB",
  "key32": "2ecKcByvmpdm8Fa4wjbWC9h5GtcAUcdsVfXUFAnYdxDGw15kb8iJk3Zh1Yujz52e9zeDnowmzfvANBD5Np6dcBJ8",
  "key33": "3NBP15kQeuPtjWyVf5U2kMrR7jxTeHPcsyfUu5nDxhjoAaLVKuRQo2ufTC1hF7QmGqUd2i42kXXwVJkZZuzgj8hv",
  "key34": "3dfjG6qP6n9uckp1KcLgBaiuKgUGskrr9RaRyf5KQs6ZT3XgRAjGwqmVD612qFU4sQifnTxhnRpzPdFRmah7ECfG"
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
