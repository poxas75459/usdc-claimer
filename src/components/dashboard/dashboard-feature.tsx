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
    "2nanNwWZArp1MK9ReL72ziiir9MEVbX2GjCafREoPXe3WHxmqZQQqLqexYnAfCR47VCx15ZKquv27HqmycmTMcXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKv3thWqfK8SkxdzwccUNe6ZrzAJQAySkgxfMvzYeS7UxBZ6gJBhVpLjL4q7j2zckfT4x4eetjnhrvd7ryFto4M",
  "key1": "4AgvX8gXfkTpQWRJKd8nR6oVTBcUNCDnsaQUHK4yZs3nCkraPrJHhFDBFUFT5QHZHrWfQvZbV39hgq4a427XWrAw",
  "key2": "55XtrgiYMastxcG9cif5oNR6WvfYQ5HqrVqyb8YPFuNgvCZ84bQhVVH4WENHCaddZ9BJ4vbrTosMyA5tuyqA3dXG",
  "key3": "44cfm3d6r4TFjWTfzG33Aez23yTt3sjhu6wm2EyU1cihFAdMWAFsog193bg5V5mKy5YnLW46ptqPRiHt4BrJWryP",
  "key4": "PPd4wVK4bAtbQx4RKEHaxYP4fmEDi8XNoihLak6ttQ7uwANJAhy4JNX4uyNM4q4Xcj6opYU3tcMxvYKUd5XBNpH",
  "key5": "2ExySUVMqoyFmTD3Dppv3YdRa8PgNUKQabg4C7m3Rjp5fZ6fdUomH44uAC3HHZnG81fkSHk4XM9SAiqcsPhnmgef",
  "key6": "2E8dFZZY4P6wSor8aSwBNni2VPyA2JCUAAH7MFsftrczXSo2U1ysW44PbY6QQF7n6fHZGNCqt3EpGyaH3tgHqJBi",
  "key7": "3FpfvYcM4Bd4Jf2dSos6xxvPHwMw8Jmx5Po9V2NMh2uXpTFLJJmQADeiQStgrS9w2na1zKjR3Ca1unkazWXw2NBT",
  "key8": "ADsP27coJt1PWrRPmfwiSoEiB9bPN3ZdW4jPEbR2jSqiwHmr1nefy5w8QXYn9f5HVQMcnpKiFADaRsvMjTkZSoF",
  "key9": "k1pW3F8DxBugmM7yYSbg3x3DjwR42bL48gP3r2vHRdc4bXoTk3SMfvwZSR2MtUhsetUJC55RNBszBTaW5PXvtZB",
  "key10": "3ojrdV43VzCDm8vR8noYjNYBd6zpwryajeaSXvV9JdRn6sfrGpcQv7AG5PqzXPZqBEYFziKyDrFYvmQWwVzu6iSf",
  "key11": "MmvkabiG4rRXcX7X8943TXG8iWzo2Wiy3PtN1XyhjMER64jxBGUa4CZsxK2STUgq3KhE6i4TLa5JK4VMzQmgVoH",
  "key12": "6QJCoqEs9THtcdks9n9V297dnXv7oBM6XoTM1VQiJd9vZrvxMyB2CicVRkRyErLx4a5E3aLw3NtdAunBvUGHU38",
  "key13": "2d2SgRCSuuA4TJbtdVyfX5WP318YAFfUJs9LuMXXPJ9CVZzwsvdLzyANcuv7ByJnEr5ML77KKiSxjyWLdgp1r4ZE",
  "key14": "2VBo3TWKzWccHJEt3pu261seP8kAEa2bY3jfnoWUejsjFPFmwNhv1DphgNTGnYKDWEJhhdrx88U5QNWv9M5rfqT8",
  "key15": "weVncwqxRjt6w9rViNUEEL1qgxadBXBKHjrMUX76svxF1YRsthbHMefHpYgxhYrnxTQmY6KJx1Q2WMSGJWEMsQw",
  "key16": "4CmbZDjL1EqbwgSYM1pU1WxKiLGiuXHqaf8FJoK1m74Dmv6AMs3ME85vGzXvmGHWSrRqiMmkMqtXu6zxBfVddsy9",
  "key17": "xkCrX84X3X6tZi3oTuTjA1fQGwhvBMCPRfPvzy5VfxNAcyLbMndunLAKAQcKs1PM5zzsYJkJgmUtn8mCEjBK5NG",
  "key18": "4PTa6KpvSvwQvFjnhD1jHiZUEeYuSmor1N52c8HDgGLXB4NAy1EMeLhTxZh5jwmdPmgDmgZ9mEukx6jNdqUNUJvU",
  "key19": "2RrCCbT25tFbe9kPLTE1DAWLAwGfGtsifZeEEwCBSxRyXKNdWrfetwK4ERtT1zVqhkKaJeA8TuxAWXtats57cMk",
  "key20": "9kbCF9ceQpy4Wo7sNcgnXmFABNEfpJEmgNm9Yy6N3UzXEBfWnzBUfaQg6znT2n6KSjFkQaCaWJMWvrco2SSGo2j",
  "key21": "SyGHPeaJtXNMAK2rwWedDQQJM857q7QmqRGmHLdCAHN3Gsni7ChzpfVWf35t7AtTTLaMJBb8TATg3XB3FvM6zen",
  "key22": "2i2QnYwY7BqDCQkwxad6n5DmF6jxMgMKgZYzgubuDK91T9dHe97krSrh78AzKkcLUws4T1zJw6cYvsXFoqEUUFw2",
  "key23": "2TrAgnz9BcnFL2CvowXzEeLqy3JuWui4c7iuzxGeMQbSD6SxTErt2Xd7yBbKXCEk5Bj6ayf3KVVy5BPYzLaWyEkP",
  "key24": "5PKMgxeitCiG7T6sMdKxTL3Ffs2picDPCuhuDfMouzJZt5tDPNwXtutGcnHEsxWsXgEnGDC8Ter1dqxmLzXArW3T",
  "key25": "5Xp1XYcwdbs5q39fXgk4WSWDFCNHHriKCFJLhLyUEosN3mYBAuYR6J4bkyPCppdPiR798Hop7KddvaN8QuLxxS4h",
  "key26": "33184A6HV74zRKvoyQbAtm7ocvBjxz2DjYvHpnrswamP22oh6HZQhVFJdjP1vtjE11NjceXz1o5ao8NbWt25RgSm",
  "key27": "FdyXvHzZ1X9Ajg7H8w4biQoUC2CtiiRLLheiQPMiHHvXpACmDKmYyayGUzF9RHVyj4Wn6AB8md4fsh7QLjk3XAM",
  "key28": "5KfNev44jYMWsuxv6nAiCFHD7DaBGPxwUBtZ7c2prtjRUuDxGH8KpZyuqeJJ3kn13RazWkMqToSvGAsCrXXxqyaH",
  "key29": "5VKV3a8e9PJ3oA3sc7RAcaAJd8RSM15rRMMKFxG5RJfcBNbXwM8nRLzW9UPB7aca8keJNN3pDe5JkPZBVJrujm96",
  "key30": "4BF7Uw8ekMnkzhmeALpdwRqasnZTXBiDS419rKPj8zbCzR8XdgUWNe4MmbZQgrQREcdPdJd6ygtVUZMh4BwsZkEN",
  "key31": "twxLdKb1k5bQuBMQ4apGyJXZCdMWN8RAwhGVwLL1i148f65NbZacXW22QTh6QhMjZnAjZtt9xwCG5mxBo5VxHpP",
  "key32": "66SUM2oRCavykbTrca2DKjymqW1kxFjE7YQCU8VeWbZRjnChFHLjYPbtN737Rt17GTSgk75PKRcETigct5jvYwiK",
  "key33": "4wYTJ6bKDv7L3tXb4ULTEVFkx3vRyhPorRLqGmFXFZ3zALV1ThcwKXnR8E3i1WrByXffKsuoEC3Jz6VRz6wxY9VH",
  "key34": "29A8MNU5nC7qDCbrrztuF8DWsNDff7R15RRa4TfmUrWpRNnwcajmAbNyHFweU6wEFQmuBxFADpXogjLK3xWRUfRv",
  "key35": "4VvtuxyzyQYrHLTJZGVQAGWuVvK365QwSA2G53HjS1iKaS12kMKEZhRhxJz8CWTqreEJA1DyUCyvLjtfSnbXmqhx",
  "key36": "5v9fmy9byoGkV1gWF3s6kjWjuTDgLJ5GnhPcUF7zxZf6oSFgp8bFPfywkEQEBApuUTt8fRwgiW7aCnhjP8zUwcMJ",
  "key37": "61d2rEKrkFj5Jmh3hbDaVafG7f6aeVnXwsecAqWBTLXf41rWogZodC9jDsrBCG3o3C4pQyz13UQkrVjGaer36NNb",
  "key38": "g6yffB2mebQJbJxwjPL5rpn5qUSn6XkoSD8LfbB5keknFQmUampDbuSHzqpJ21bAWgkf3zftEKMz2dVhHWhPZtD"
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
