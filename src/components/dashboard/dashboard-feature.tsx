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
    "56iwJhAUazu56FmUZfYeoG1hsErrnuRLbdAZXGcaHqXzT67ZXDFpvoxNTz8PZYYYY276E6QLHRFKwUxMJ9nco5qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hVtfUvLksCj6XFprBav9Axi9ZLzQhJpoLPrQg61y66GtUkEvx7mFzGBeE673C1uzfcg4u28rh1a3hpSoivVir2",
  "key1": "JQVgyaBjzjwficG5q5XUD6UHszRqxtXFSAzYdc5vcMjGtJkXN7LZEXK4PN2gaXDnC8c71uJX9h5MqErP8e1KzEZ",
  "key2": "5RSBb5nX3DTX1szme3ZmMfQWfbmPYpa7XGtbAcYCiKUgnpkEhuTX2r1dZdXY8m9noBoySQhQbSY3Vhjxe7HTUHeU",
  "key3": "ksgj6ieXccg9BKBuy9w6bzmsTZ3qVzLKoxk8q5dxc6Va58wL6225iNpJV2jijiZBWE5D41jd2J1KK1oYKwqi16s",
  "key4": "5PaKxEAjaWDv9tr9PAbz5xxUrV3eWvr6P929TLpEvNYhGWKeAYphMqsrVjg8haAbMD1N39ZNN9JgX5n8QsBJsgDJ",
  "key5": "5r4CzREn9uBBcHiStNNzShq9CgcvkFDjSbDaw9FeW9325dgocamzMQJJJYTBgtKstbKMNCcdURRDimxvgrRjb9T6",
  "key6": "4eMLV1iZiE7mnvHce7W9FrWaJidTJXUTMwwoRiP5RqTKwd5VWkQXajmq6Dy6N6BJ2WHvCcPQLL7CUPhr34Mwp3D5",
  "key7": "3eL4Yg3466mcvTmUwYodbZR5qGP3Zrw4CE9x8QPRjjqBn8ceze4a1hxMkJhM4fAYyBTzehUMA4AUrVKgwq29HXSH",
  "key8": "5TtBRNDbmySzwbGstmFs8u1ChdQcqnUJ63Z7D4xrbRjxt6zMos73KbnQScQp6x5QzLB8uzrzdKpLJ7aCnABzDSHK",
  "key9": "2gw7T47z6PLNhLxfvyaUP2BaH5aKBkFzE9BDYe7GNczJTjiFimsBEuBhA6gL7fEK6UxeBaxyQJSYKooYHVCaHLcE",
  "key10": "5h9VByfA5GQX51ujkiGLay4oJPmThHuW4paAa95n5HZvDRDnvzu74zFD4A5TWD6nDAdT5wvmLVaVCCCxXoAENcQD",
  "key11": "kiVEac3PvCsd9jpNAhTWLAG19Tnik4jePXt5tkQ34BYuPdftB3cnc6fwyRyvK5cztLAmA9AckoSXgnasESbX3rM",
  "key12": "5dFRRQ1QDLCNDeWKZPQzhgU9eAKtkRPBZtwz7q6ytt97ya4Lmt4cRKRUF625xjbPiejs2tYhfQFdRXvPv3nFyko2",
  "key13": "yPRypckt9o9KkDuFcJpviL6jh1GKomxykVN1VzJAwLsA3vUbN3N55w28wGpc6pGa4SBJgw8UbfrLhx4L9pEqXRk",
  "key14": "3xaAkAj8kHiPTb9KrPLL6AetQsb7Y3sTfkcaX6Wro8Z89ynNNxTt5QL37pnLRXQmjkE4CpCpSH8GL5nGQda5vjGt",
  "key15": "2Q4cZqQnitjdX6J4AiMt2hiPr7FuNxCuhP2qH3caifnVZbgRkeMWaHx15H6GCiHZanjmLExJPFW9y8LkCL3oz9HW",
  "key16": "3Qnx2fQcCvydh9ifguk5ZYTijVCDbGsraTu3TaWdFub1wtFeG1cXHkBdaAoo6eCRjh6AQAcdyu37RMG9aMvVWvqx",
  "key17": "xriPyhSjUFQTrwFJazAgZnmRNgre8uYfxGg4vaGTo3ayzafYhvahup1BCrNqsbatZH2MhuNHMNrxKJkP6KvJnvF",
  "key18": "3we4ZZPd8MS9gjsqJZfqNCVmxizi2waeSzDWuxPqKvXMSso9A7zbTRtURuH7Vfr47JN6y5h54qMycDhdZUtu1pjY",
  "key19": "3WFLSq4rMNTXCjEWWMvyeg7R8wjf4Gtz5uG5LGoBzFYLSy9yMm5qxKKoWXVv9yfttC4Wir6GB6EPWkycZ852GoqG",
  "key20": "3dQU7C9aFmnt8L2TQ1BsGZiwUAQ1tHvcs7q7ywu9fRKooDeVQHqBtZUWQkPnt4p3mkvbJ8sowdJEAnjJDAEWWTmJ",
  "key21": "3P8GLwncf16VoSFkbaRv1k2w9aJS13HKHJk1N5cAGn5CYrUv6Kco13V6ZjVdyB38BCNn42gduJz37QY1ag3MAejb",
  "key22": "4DHTzA63C4ECaU2wrRT7ub7axHZChg3bcSgK3K7tWfRzADT7MBdwvNkHuXDxPEWjRdf3Q7NoJZrrS9R1E44mEwNY",
  "key23": "4mThpwq9WoTaKaaVgdNZzF4ShAiGa5k4TBN2wvbsRWAhP2rhui1dqYZD1LuitwvahHAeaNnjak6ghkcTkMyEMQjc",
  "key24": "2UCwTMBH5xvaH5iwRgk5Yd4rXFBeqA6iW3ex9qnRFhzf3qCWo7mi3bkNDfMUXuR5uDqFJSbJX8TRuxz3XUfZMZD6",
  "key25": "22qvW83fMmA1gMQ5ofUv66YfyLExCYqAa39Di8Mq29gC7LFKDTBRTVGrpyyoqzfmUK82tz3BPtVGaugMJcVTGQtq",
  "key26": "4gcg9wU9Y1aR2Dvh63afoCJbHU892mYPya56jEAUN6X95J393PqTfPKVqw8GveDm3c8TngzSQ8NKLdZcndDmFrAd",
  "key27": "2SgbXnvLdHaFPRJs5ge3Gfh3p5NUwdvV8c5u8Z6QDLUyWdXgpELgQ32if4Z571a6Xvw1Y2YtCd9gu18tV64ro5aH",
  "key28": "piBvRNAgPNrZ9wpuyUHDdbdE9bxZJjwXTqGzLnyHmQeoSTfTYrhPVoVCuPioKhZrbb4bAqhw124AhZiTDypV7C7",
  "key29": "fqs16p7e2xi7taqHTPgUT2pNA6qhxw9WHxzgPJJ3aSwSkt9G5pWaDtTjNbvmHyGEbAUrcKZTRW5HhkBRHxNpXyB",
  "key30": "BZFHbUT2yBqmfStWB1uvaHVRBwMnefMW45SqMXngtSKYrWnnuKKsyDRztbKPaqJ3HKfYrJFDHR4BJoqQAZV4X1i",
  "key31": "5idS3SAL3q2vikbXAb3411jYcgVayJusgJmywD7pJV9bsnbeGQTrz3vr12XqpMXZCvDseoi2u24RFUrkksTPZu8j",
  "key32": "4tHtQvwPtrtu1Vvm9CkTmfHw6VSyJLMH3mLpdKNvV1Q487t5UNvfcpuba1qYVFuTob3pSVwzcv5VfvhE3iy21tg9",
  "key33": "3BeLC9xxmMB3qmHG3pg53D4Ew6Wx3pGsxkR5e4DKmadaYw2ZQyj3tDgYDC8LuvT56MrgtNQStFnz3q6muks8vJZg",
  "key34": "253LiPbSjCiCJmJP5CaZSSymPy1CFTH8DuNdVMYgUUfFC6d3MS1vDkRBPxK1PkMqr4WCvSRZmKTjm4w1Yz8UAsxk",
  "key35": "2Dt3Mh7qsCAYAZQ4nxUf4xJJSdQSLMsDh2aJyyHrFVvAhUKRWW9w4mLrh7Y2uc5d9ea5t7HTkTzvsKpcXRBPc9t8",
  "key36": "4CLZ56Tj2xNzXxQTtUh8NuZkwYN1sBdD3CgzgchLoDHZFtC4DS62R5SSGyeVrud81iXFidcNb1BUb4GNiFgDAyz3"
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
