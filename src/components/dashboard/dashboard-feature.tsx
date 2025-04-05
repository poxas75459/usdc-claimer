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
    "3QjfKDc3Z9DXJxp3f3QQUP6X43qea9gs7aZxPWvwKpvZ6rq7Srega9eM2vKKZ5SDDLimGv4QwCiPoaW926F1BEFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1248fVxeuTp89xcNyxEGcxi8VdhZcdsDiZBJ2YbLhpy1i5SzCAiReM3ZvAwXhWhAe76rMyytBuTUYqD2eTCYRyvV",
  "key1": "5asBTWPoo8DKe6BNezCuoMz5dQ2Qt1eiUYv9TU7dgG4Rx4sGcp9RErwu6iYviYKNvnrGFpb6dicy6FpyTfqWuaBB",
  "key2": "2FGH4u38NazKFafQukGJoAGdakXMiYoHEinbk3ozkccHhSUUVNLQJB9MoEkFHCBgVB6gN6DbXsMQs6RAqYQDSqqy",
  "key3": "3q5oQx29JryscGENADPreSNFdfGjmcbAWRLKQuP9xYWWrrw7Mr5ufpZdBGyUTYUpKDcHe5MM5Aq6mDf6EtS1h1JD",
  "key4": "pG7T6mAoH6Azuoy6wTgf6s5LHeuzKj2dwQyi21zkqMJJZh9VQ33piGEEnyvgGb6bkhc9jsNEtrBKT5moDiPev7r",
  "key5": "37DRMRXr2FZSuvy4dococwAtkYVPDA9oKCXWaxgRgZqZrQTkEaGsCdRH2srk5g1n4TFzhNB3zjfrV9S6EYrTmP82",
  "key6": "3HbrGHrVN5Gq3GxeBkxV3c2fwiazWckEaPCZ9QiWkXRysY3QvKJeapKdsmJ4hXjVvEfTcMn5frdcR9AA3mAnLFw6",
  "key7": "Bix7RuWDzsj4JWJrRK69viZpEA3BWjyb2EJTiw2hubK33nQyAWqr1dcV5euuJatj46tct24G87rtPrXHCKDU8jE",
  "key8": "5X4yCqJN6NTdHxvNYR1tt6ZsjApvJzUxgrhoju8P3qNqKDma3D31mPV7ZnMLzKJNt5jaP9M5umdcVvxEQqoEN2kg",
  "key9": "3yqhSU3X2bCZRjVEr8CDoUc6Ztc3jWfKchP2vX5tdoExbgrKNKzyCDNivKpAULNVCpQhE8F32SmmKC7wCWXC5Mrn",
  "key10": "3fPXSY3yopfjporjACAvJ44hWgQ9YvdABATmnv11wckzuN62p1BfQtgHZdRhks5b4fdoNdpcLQHq6iQxgi5emKra",
  "key11": "3AhXLXQBycfWFdHUQb3ELQNLij4E4rmiW6hfP8qzaLoQZT8GYNVHyqe4FzuFq9EmyNzzgYafWsArxZ2zANCzmv4L",
  "key12": "61RmJWZAgZyEMJYSGfmpmforY2aVE9baw3bxiW5qSetABQiJa2dG1qDuJfGjEgoXRJ6wnFdMfhC48XD7UDrhDUo4",
  "key13": "3UznRGXFvj25bTZ7kg1yXNg4AzpXFpewyJLXZQ2PtQR5Hzt8Sg9VtVy75XhwARFgpr1zxVukfo4fAE9xHd2Hf7xC",
  "key14": "22BFRLGzQWCsEiGQidaVzRtETANEADzzp8uboYdcRjxzcXGwYELGaT62U9PMJJPBABMFaAnqwPRVSVhAi7kzZXB3",
  "key15": "5tHDea14UrovuQ6RLbH56syjwXCjYmdPZjrTENrzs5uExRYbkqE3y1vtsLGhLENFw6ywXMwTYJJG8r53rZDEVY4h",
  "key16": "4Jhn8r7E3hzvWyoAmCDe2Uch6ygkyDCmFCFX8ZfBVRXt3w2NN63QFVVN7FQH2PqbeX18RBZFNPbFahTdQnoGibF3",
  "key17": "48Er1Zn4rx5VJz4MG6nfxtQpkkLZmu8o978T2vpYTmgv14kMadUoKLYymSwhRcaMTWYmQ1M3RvCVL5GuaWWZDg2w",
  "key18": "4TGnSbU8ZTG4AYjm6FpQbwaddLdCeXiDyZhcE4A54UX2vaV6y7KNSK5vqSAF9PwgRtNvCi5GXDgwXiGPx1LcocXD",
  "key19": "4BXRMBsBT3jg1vWo2Uh5hExe5JmaaEe1ee9Ts7eqq8RfZdFzZLhJHsHkLqTNag2pKL17t4aC9kxor7z3W59sixMk",
  "key20": "3WW95P4mtdSaarJx8yatj2u4N7YXoG84xbfszedZZbTyVNkDP1PXT9zoMbi4RecsdFu3HAa56idnu6fRrMyNDLXB",
  "key21": "5rpxnB9XfwXg4KXJJ1R6fGy6jsbd747JXYzWBGmnsbZYAd8uKW2Xeb5dERRCnYYpb3WvNdnHy1M6DMTCrPz1kuwF",
  "key22": "4azpcqTgKNuDDdxmkFfr21LDdTfcNwjSzWEPcPuA92UdGevZqKuV8aCrRMXHy3p7SxfJTCufh4PryxxTCn8aCeMB",
  "key23": "2JcZ6jYQQxLgUrMjkZbtCmuokyvkx2TRvkusKZ2ExeaipXMuTJwVNdJL1iqxJU6r24ijngNJpxwmr6UVvuZPmmxj",
  "key24": "shoBsHQ9QTQnYJANbNv9PbvqYTmdBQeBvSPhVARyP6hV4XBALEXwtsBT1qDgPJCTWAL73Yj2mfM3zHKUYbieRun",
  "key25": "zadQeX5en3FvzgrbDs2CdfY93jqCDdm8xu69TbgqG79x2gnNejoeGG4YFLPTWU7JbCXtizwQvhS3SsqDwYFR79H",
  "key26": "65i7wo12yJsdoCqE1f4ZxrRGJLPDboZzFg2VC4cQ7hnVMFrBnqnZES82KuDFzJiRuX61hdrgycJyipVYUALuLoAM",
  "key27": "5LHPr9zf6aFXtRHoRWx7wM96vBSNXwpzDFCac1mFkwMJHUk2UkTFMiSA4X4oBnkQBJNHvWn75USnhWvMHxYTVnYp",
  "key28": "2QT6v7shK8wB7CHsES2ST9ey9ymAGskmdYMKNgkzXJHmyXm2Hg5Heb5BUW2iy6DD1n2cCiKPZEnKJHUDYCw5Kmeq",
  "key29": "3uLx2fk5UX7BsuqLLReNd4BfqhfbJhEQAiN2bFpAFcA9SXUhWwMfRfnQN5tV74qopsZ5exUSqvETj6YXWABjJsnU",
  "key30": "CAJbDKUeJXnH9KFsxrE9fu2V34c5BhWEKrdExxCAA5ZvYhNAtkCFHuQrNacYqqUqLPMJXdhrxYJYzD4taDQ1uNK",
  "key31": "4Yj1CVCgk8YojVUjn2sBB8a5PwtqZHm9TYDxTpaKBBeUed5hYzbi35rUXAw2TSedJArs5uRiJ3UGRNmCkxGKhS9p",
  "key32": "4Ahprc6kCok7bBTMm3C3rDZp6cm4wvFVG1bU52VengSmStcTtsJoRSSeYjnzdqzHvvLgouxfh7Fs46b45wUbd8UT",
  "key33": "4dukwZwefKr92nosvbpoYkj3MKp39M3evu7BKa4sj22LqqwJyzM7rt5CjM8oyCGFP1f1z6qReUvapAUfYn3Rn4Vw",
  "key34": "5pYXxtnqE4JgkzKQhycdnZL2Cvh8wH8kPeEDV6HLajowGarpUWZMr6JSSTAxQVULifsmTBotEGVJCU57vbztjxvf",
  "key35": "2DdXco5zrANtGr6aUC6w8YktR8nPNrFFygKinQp1DTM4NCWErdRb3yRaW41cPf1CnWsjW7dUANtG8qdrz5X4Mb64",
  "key36": "2SAcPnXgbMooFJQKFKt4WNG6rBL4hYMni6BCetEYQGvw5Zyt313YNLTCP3YdypsY7dMQiQFRJ56LW83axahDHZeq",
  "key37": "8T19ae9iM9whWFzh6Chaz2iB8CoqFjshshK6uRVBwN5HzgJoYUMM6goFzvtUTYcXwqq3A1y2E9pJYuAKVvzPzAk",
  "key38": "4KbWp2YLRGuvLeX4xGtNS2JBjnYhfcsSf4hJT9KeqFi3kJcdgkmhqtERf3MXvQ5sF4SLqSMZSFBSGDKL1vBytove",
  "key39": "3D68agLqmn64U8YACXLReGwNJ6D7usrZgh4VwFKauu2goxLNA2cRjxTWcysU1teyyY6KyYj58KN93CiX2sNTeToB"
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
