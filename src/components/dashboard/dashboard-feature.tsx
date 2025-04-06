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
    "4QmrHWgDK482w1vqXoUtvA5QnW5TaxLkMf5YPBg3xu8DqiXRd7ZL2VHAFSdvS1tptUw5RzcDshyPhhPmMH2iPTHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABJ8QhP14TSqtQSzF3zv5nrJoaz3brtQyyg6gpMBkBhKZjen7VqFbHLKZzBTUXAF6dFqosqHjUqSdcDhugzU54t",
  "key1": "2eDTpRn6J5cR6JNt33m46uLXGBhcXv2xYFtLZ2wH5ZjaEis2ULn8kPNwM2qtFXewEnhAmQXFGAX19c6z2uK6RnmE",
  "key2": "3FDgTJxej9sZTwAUPefYHFKpvtNmaDBzvPre3FygbkGRrgFrobryMqmmgXusYA1fKrnoN3RNSuhUHbzxXEkWda6V",
  "key3": "29NPJkwrKLEdrs3evVNmfXTjsrXjVDCZqtcvYSWGE7dqomyqofBcWnPFmTdBiQRu37x9Xye5DWJEyh5bZtdr71RX",
  "key4": "2McSBEY37CTAYKJWGDDwzpPNsRVNEY9iiHr9ANiTnDa8MyDeRZ4RLb6KRB61oJkgceYKqrW1kuw6GGgCQ43ANu6m",
  "key5": "4zMSbagE5iH8DzSXBtZUX9NHipoeRGtoXau6dbrR7U8V3L7D17pzZEPHfA2Y7H5Qhypc8eTju6uULpi5RosoPtRd",
  "key6": "3dfp8WG7haJD9ixSPjw3k9PCTT4aMFcEsFLNj4AiztWnC8jx6rsnRkZhMUoQRynFyV5vc9gJhCkqbMb42mhAL3vC",
  "key7": "2j4LNdHDaDX1TckYR5Mo5M3tnbuKL1kusykbMFxthXBvB9spvPcbBSyi9MgesA3PY2tFb6HhZozp5w6Sh7FUkhj9",
  "key8": "5yLmkBXsBP9um9ypXCiTy11AyraM7BZSPPhpkmQwePTsqNWn7qt5k3zXfUFWvZ5cGX1CrETPbd1Leato8fJFbaaM",
  "key9": "5UBx1YSc9qg8Y7XXk7WP1yaUiKHJcZeM2m9tRxsRapjkQ2MAKnWnshPSWAYsTNTdBMgH2k6kCXG6drgAwuqRSj77",
  "key10": "Em6WnfKUi5jiUdh3d434NBSLcu3GXX3TcYkE3C87weS8sU8rX5n4rutDfAjoQbbeVddtK3ipefz136UH4GcffAJ",
  "key11": "5vUB2yw8eRPW5z2PYiniHTUTpCM4gbxwFZqDXDpAGesMVaRL2UMqfRPxVUySYrhoWbzNZFAPVupXNg3b9Fdk6myQ",
  "key12": "25uLaWcxgRXdv7v3P3dhBCM8FLDs2oFtn8LzRhugxTYFRyFQMK8kDdrmb6mi6mKttB9U9sNC8eG3zaxJqdSCeQnc",
  "key13": "4XtKX24Wr7TdpPZrz1WKkuEG8mHjsFMArSiLKA24zN6dFtW63EjJAQe8yRHQwYzmxwNqhS1RXaBQTw5zBM5EXtWJ",
  "key14": "2nRbdWavDph5rzxznnbZwWYGd6bFXaNM1RaPHyBCKcXzD4iXS37fyx4rFHy81NKgkSApFAf5jiZyc8ceQeZ7KFvo",
  "key15": "5xbCJDobpGCY9iea4f5Y3zY4sR98HaKKGJ7tsXm54JvsXW8CFca3rz4crAfFZUj7KxmrNowSEaWAeYk1yCLourBT",
  "key16": "3qrT7Y4HyyqMwe5ipdmbREh3qWgE2pZJ6yTSRh1hUXcJeY47PWsEwZ4fQYw76tZQacrnCnadC7ApRrqUGvwrjfV3",
  "key17": "5MadkVkJoSqetUwLxxMGHKrmTzRz3XtcLA1dzxkqNovqRpnAYZ3aEjwr3RjKmd73PxZFuGjcWEuWb8eCMQDDhBWS",
  "key18": "2eq3jD68N3trzMEectKHSSSgkKmYPC8MWpH9Ap4JXyeCRW5J8LMhmzQBdBTDoup3VebAUEwc52Yqd3kan1JKKhjR",
  "key19": "4q1sb4PP7sjSYFVqMWrz8dMx22YUNmDzXXkFZhQJYo4KrvHLgkRKkVhVHnMKK81RP8Pzv4B9bY86R12C57wEbUf5",
  "key20": "5tSXpftmEHbddcLrYz4MUwoQ2TdZRsvrcKEANY2nmc1VnDipjY5Qz3fMK75QXzEP4Qumpi2FqBSnoym7Sy2nwne3",
  "key21": "4xcWD16wXZsQTQxQ8Gdz1p4dane8b3RZ5fkSPHkdb3be2HFucj9xWMYg3yZ1CMZyYLPe4G9zTAi5AHA6krBkkwnB",
  "key22": "4uihpr37B4nEAyTCSgr6FHn7umtakkVAfWHXvH1LZaGR5ahyCJdKRxeDheZfkbhQJ3bJH57TSakFyUij9u91Ubh6",
  "key23": "4uWUJQC5zsSi2R2sjD3UpTDHt6hLKy57wHHzyUzZunY7XhXBvj4iUM3ngAmog2hfLTYnqmBmffAQ11t1S15x5B53",
  "key24": "5a6kNZ2qpRGS4oWa1iQUxjcSUTRxdCrtZKhASGoxkqRYrjFL8cWCBiRbfgtWAStPsXB2c7U5EKRpitCrTSnJmByj",
  "key25": "4G5Lmdpu3EWkrQ1uAm1VwJRQ6cYseAwL6C8iS2DWTtaGDpC63p7AYmthYTbHN6hy4G4ZFfgfHiEqF5cQRwhmvdYh",
  "key26": "5uNLEUznLPL8YxEGf5RVXuoVoQX92h9f8yFBkcoVjnZeCQ5KmehGa3hD4fbdK5W5SSKVBtLZ8dcZo2HW1XgkuDQb",
  "key27": "4mfFCkCKHpCY6MxGHsFCZpd7A4Ke1jL8VNV9DYxHi79vjW6tpdfC6RLL4QRy3VUW9RvMiuP1NxcT7f6ZufszaiMz",
  "key28": "3vSEFAPfoPTJdm565gMAmKLwFF9Q51N5KrErFKaERDL4aihLCQgU1doeBr3jZCCpVeVRHRykwsedbTeEqQcBh5Ws",
  "key29": "SLvppj6YszjVbkyhssQjfXbAkKZmcDosYnXVdFAyx7xFXZLV7VrxsBGay8cAMwJDHrwfJohYhNK4k6CVYj7p1HQ",
  "key30": "23h9hknLKZTUsVchK3QLWH4bu92E9U3Ds4RGVgKYFgdvq5xwuK8AftGR8F5GBM6ZWw5Q9WP4xWcmgp6UoM9Esq9B",
  "key31": "41ks4mZnWbzjEqQWAsGLHvK5LUW1MnaCATdFVvrETc82vB33KHQHt5JSYgHBQhvZeE9D8Q15RDoYYBBYWRK6wvgH",
  "key32": "4BttM7vbEoAF97RLZSmUQHEU8BBfcnqnHsWzS5J18osvchPMfS3viP6xgA1ufaiUP2JFLbLLBdWhsrFf2BNi7knv",
  "key33": "5ttPrhzfxiYtMAGZfE6kSx68oHdj5CfBPtnFvCY5ecYYMaKc1FDeDbL6MoywkhjFZ6VTNXeoF1EA5WtptaB94ySn"
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
