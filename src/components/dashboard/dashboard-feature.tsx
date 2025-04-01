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
    "2sNWgvcXqxviPpDKwwNEscyYVak8xSCrQQDKQqtRKreya7bBHbbV19iAraAiC4dxMpUpvk7SKwiDkrCVcmHnh1pK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uveuXvKZ84n4GfEHv1kmwheEnb7FJWLNMA4StrNGTFUCw9wdRZZCffMHsRcFrqzq17CUBk6VZMmfDByUa4rWohF",
  "key1": "31CcBEuDSQYpa4h3AwiRj7pHDgPBd7jfMs9YiQdn7jQiGUXTe4M3dvNLQBa1mKwQ7yQxEKrvgXR8CJzRt97v2zr7",
  "key2": "4oFkkYMtMisMebTto2F8x2SJsYkQzfE7LSneL51j2yzmfxYTsYoD9tpNiWgK64wRAr3uQUGGtGzZaobH3Crmdtmv",
  "key3": "4pJWkKfTLZ1budwZzU3tSr3mYfgHKYdikriCCwtruY4z54iz43WZy5t4WbNe4jamkptboUThx7oJLnyWhdaVxhts",
  "key4": "2o1CNSmoyGgMbT6cWRnhDHro6QUtpstv5v4vom8L2kaCt2jkqv5V1mYYN6mh4rJXkzSJKDwPstHKv4Uz1dZM7Zbr",
  "key5": "2fJyY7d97uqfKdUZiRKMNnESJiG9yhSRMsAX3yaaeqJgQxnQSdNrWQMFvjTshBzEsRpm9ES8ZnkG2kpTmFvRwYDp",
  "key6": "usJHT3QUMbMNt61Hq53d5ojYXPfxRNr3scEQ2QngNonRDWHW3wfSRmEwyjc4STFsPf7F7MdxsLD7FNe2nAqpgCv",
  "key7": "2BFvxuUMgxmqfk95uDCTogrtr6Q6R6CpWZrznkCsmxz4DdaZuc7xH9qjoKXDBVZT3CDdRGMzD8BeP3i7vpiV4jUd",
  "key8": "4xuyYQswLvSxfXPSEW3YEyr3sV3mUG41EbCYdin4PincTPyGqz11rDPMGVaVvg1ZX2TkauDnKHfwPobXzknmd6VN",
  "key9": "3gXgLveUDFekkHuxjPKNE9uCXSF95qW4AVtCGcjsGM26QzTHXYiJ59Lag87Lh5BoNoFTQVQ4j7pBJae5zCNGVumk",
  "key10": "4s6SK1mDyu5EpKZqEqgQGrmpRt41PKpyzcaQpZVMQY83gGBfg9gtZ7hjbjCLdEGrCpJ4i7Abeb9EphGx45xo7vQV",
  "key11": "3rDYE9oSCajKY5ofxCpW3daj8yhiZdpuwf9rznKrVDcYqowWZrwaBdC3ekdYEbxtBjaLoqc5ey2c6eapz4UCFziF",
  "key12": "Utxir56jjYFxARPMHdPh2WcLRtVrRiwUDmqYYGbA4sN7UXZy5T8GW6JCdp9vRQULMt7EuWmHoHEzp2QEmzxpBjr",
  "key13": "3j2t4onaLmRyejB78Vz8DhZ4PAjHspbMEWG7uRQzXzxBpaWq5UJh2A9JAYCwPBEjaGgfW7QGEt8E9CXXJT61aSK6",
  "key14": "2uxvWpD6BPPPXYBUmqadUkJoWAsmyEaHDLc6PC47LUedc89oTbiDCDt2T8RgqUzrBAdXZab13LcuJmm9A2BLPA7G",
  "key15": "QfhueHiPP9hrJaHtkWsNDpfFgLufYBoYQA8toEH2cS6G8Rc99ZdXAbxiGFzWWuKC5vg4HCxWGWw5GR7rYaViiZY",
  "key16": "uMm8ixF3Xev8jaoK22n53WLHkF7UAgLdEHNuzgba8gRVscnV3B5J4Rzx9dQQvcs3UaKmyH32E34CAojH8FhQNDJ",
  "key17": "4KqzVZfyZ72ZdLGchfh4XUyzzoKSz82dmepWe32KjfZbxjAy5S4nSgck1vhGUCJoX3UL4uprJjE4BLem6g75TpDg",
  "key18": "4cCnSKbW9yTMD3odsNATcsPrJxncHBXBUwUpNuHqGMU2wBjmymqzVPDmqKa6hXouDisU7FfF7Ak7Yt2wFMVy1o1a",
  "key19": "2BimDbPRbcdFonQtZbLaibiDz4tghcZ7kXHTbkqrqpU9NR4z1Pf5qYvUBjsj8oaH9MtpttBwEM8Etv8G5UYgYopP",
  "key20": "5LMjEiGaNc3GsB6zrewYU8nYE62XmqqTAkkgVHbmvvv4KAkiM7g9Vn4qup1mXXfaxz4BhhmDcgMrz17QrpHMtbJV",
  "key21": "4VSVurNuvvadGtRK5eBF57oME9jDdkYVQb8T7W64UhCcuwUqqGNf8vqvQWWKyaRNaFYTW9M81Er2rgTkPSURU8d5",
  "key22": "67EZXCdyrQa4eEdAbGmhAqhuk9FBbSXa1yRE5qiTBRdARZoPFfuZjPUQfFVT6w4d1AjkitSzLzaGxkYfuwmfReV8",
  "key23": "67KqAUqE9mJcoC13KGqwtv9AwrzWKAFjho5jwBjwyzrRtkZCrkiCJf6R4UYtvKnsbu1yxTz851Uguun2W57MXfzz",
  "key24": "24Fdc7MkJ1eRbQnt2hMgxWyrmXz5ucb4oMFAYPkwD5KfTRDABNTFz2oKABJ8xfYmrzRH6cbqVQ6oud1ieo5vwEUR",
  "key25": "2eY5qDD7gpb97aeqpNHmPigrCpGuSWwSWDWQurLBJ7ojnnFDiZCzQUDjAihVAqMtLj43eNzaut3SYFz3x4gcMRMZ",
  "key26": "3tJ28ExjDpT9pLMKV4emWgZiRx9qCYAfditpirrGq1EpcQaYL4ptRZAd72QQdfZgtRkKP9GuMrw43ZxxkMWwLrFv",
  "key27": "CRTyFA19YSCESHSVmvQqdbjqgGUv3K4XgJ6xFeFBDZcpMidr6nDeKS3ngQvafRKNq7GH7EqqLJCfH5piALv2i19",
  "key28": "5ZMSmvdPL1FbJBFLc5nkVzxewNZLegDuwebqfvaUTRXqgetR8c7bA1cUBN38JRutoXFNwZMJJbN6TDMiWhKWkn56",
  "key29": "3aRN3vKwN8GQnzU6U1h7J8sJREarpjE5TnRxpKCLCajDdhhD2zx7U4n962ntwWHW6d2WgqqDZxsZnwJ4BYx3tTZ3",
  "key30": "2STq6hqLoKqPZgoSnaH7mRecHp6Zp7bjXFvrfxZbSZiCpwog1AYS5acvKbkXpMWGtKmrGh6SWdT16iPDufxCRx8b",
  "key31": "hi19AkRSUHimpzEcFyfLvuFUzVh2LGQsbj7iSk99ZRmaZ4Smw3UaTQYngzrh55SWbxGezSwZYQiLrN8N1CSs4T2",
  "key32": "4Ys9xUxqz7zaNPw8dkouLJKZbW895YY4w72SR721SBvrzT7Ju4LXvC8dpyaFHBkHucEUhG9apWpHMGbdUKUKU4ba",
  "key33": "5F4a4kgrEq15AKkZudgYfYrCpV8sjaJcpuQ53Y7KbD4vFS6GyC3fbp6DZG1Cw77BCgPGXBmtiU7KgmMcE6Tdd9bE",
  "key34": "wJYWNUE697VgtmMeR1mMB9eGk7K6jHQELS5FDyrQvMsaWUTTDW8tcbY9F7nHpex19FQ3Pj8zs5fTU5MzKxppd4n",
  "key35": "5ggKEYAktPTsv7P7wHsUUQxGy1PNSwxNWD5NqxknpHXZgY4gbF7Q2wRs9wowN392jZfmBrCQiUA8MdgA8iXazp9J",
  "key36": "5mxa6GBGHjGyPxnWJd7paWDyshEX7UUEkXhktTWf1Ygy9qiUwt74RCTMijDTVVmMjDo1m2m4rut5wRs9MW7F8mZh",
  "key37": "3WYoLJ1V7ijjWRdW1jtmmgTKacpgmUqLcbNesFd9Uwr7uSKr5qEGPL6ruqfNh5JjPfSMBbBrCdXcSoQ2ejXqZEkW",
  "key38": "5SBYsp8yjYindEDUooZ3nZEPJwTDRJNWTVwMEjYRyWhzzrBviCbLuEdAcB6aGqRY1P6yP3poQYMWrpUunw3o8Xxq",
  "key39": "5nvuC5aNkX7bRvjaT8nEeQSTXQyqX1YuRnvX7YF9U8rLWrWqAR248iff6rMGSTBrqahBVhpXfApwWyjDxMbC9NJz",
  "key40": "5sYuj3vrh9orBVyX9qPd6X1khH2RaQDaSPwZmRa6ZyXDBKrYXnyeniQUYLNSiGAEsuY9mwr2weUoiGK8Hn2JEf7v",
  "key41": "3aDP1yxd3tWBw5PgCPv58JRdr5pscbLDWRipo8QxT3mqoF6fRR3QNYxcdTDwu1wVT9Zkk2ndHXbfTXJFyDg7mbyt",
  "key42": "5sGrVWJPEmf6ZBpJGTcjaipZbec78ue7Y9FSCk8tJLEYZPBdXYAvqwc6fN5JVW6GDawrPgjupziBAQKZuqnZJbJy",
  "key43": "5RGfF1YGrwG5rLrnaTtnL9tx8nw3Z2bQcCcRzSVwaYHnzs3o36zAqabVboQbV4GQVtM61MRKQsLsM3X1Q2ooD3ty"
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
