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
    "3KCmbB8QwLeVVgcec3jEpPmfippR9s3MjmWV7eWU1UQG5UYRuGxYKUir26YSDP8qj2FJRXqyBFyZ8Q9DZmHV4Fmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQd3LtjxQc5ZxfDqziogw9Q7q8rCF3ZYXc4cKbURSFATRaU5BxsGMppKDGWcuHTpH9nKA38UEQtaAS1ex7i5C9t",
  "key1": "641Tu79YAakF8rMxy2DPAG8ZqnuVDAoNCAMPLQENSaPoo5ckiTWJewnuVa4f2hWnjLP1HKhq7qmqHnaeTQ3nNqDU",
  "key2": "5CsEBfVwdemmmknm2vouduLcU4LGAPMFpQaH8J9UwzZSmecyri9a7BJF1jAj1xUjV2zombbAUnnA9WqfEfTjGD97",
  "key3": "2WjdVvL8DSh2bWG6i3Z7bXFxZQibp3BgkW2XJaRjgW4UXjHGgtXf6rqjKsqvuyTDLcWLg6WVAK1NAHn9fbN5mJMq",
  "key4": "3H6XcSU4yvEZZxYPyk8ALeYYECAmheGAp16F4mc8uRew97YXuww6zLSKDKjgLqekvW97z87V2MgKm5NsigV5nUxH",
  "key5": "3q8Nna118tT9yuoSmsb7wVJMBnsAXpumpeaktdU9HD7FhVMCiiLuB45JPaaPYv6PvMXirk8r7efK6d87oSngGJZs",
  "key6": "j6nsWfrRMAPwSR9hGDsrzq1AitGayCUgu6i7po3NoZCMezL3H1LBCuEZniAkzGZQ5EMvg3F8TpN7mAprha2uJJy",
  "key7": "3mqkn9QWVdBTheTCC9MuqNL6BVoGeynw5sdhj1rmzXkzSiKrNf7PFCXM83gN9FziGjjgTT4ZMPnkdzJ2Jp7WkU92",
  "key8": "E5HoR95zf52m6XCLBuu2YCkf7fYZe5fB3ZMfofhKeMtGtuG16dcrAGUeMGgwj7ViTk7CPqDUDp5VbpxGFFaqU6V",
  "key9": "b8y3DiY2tZ6ey9tyk26cEn6v2Co6Zrg7dAKujn9RVRBDvHAVdyaPRTFihyUZ2UrBPrCCkWYfG4rFkRxcdsYWff2",
  "key10": "4tv77kgG7uh8bwfQtvPH71qQgM99nnpLz1XcnRqwbKHGc7PgbzAXyZFUcfLLhQdggVqgCguoE5UrA9eCBsC5kBcj",
  "key11": "5HeWgnL9RGBh7h9LfXdAhrr4xEoMLpDXz4Jax9u6ifz5SdB9gjzRig38AbBHvwWnE4tBPRVU9ozjHJtMDdXCJUx8",
  "key12": "2vr7mxheg6grp45rd6q9FpWWSmXCezWw1VGztkMuAi89hFXKE2xgEQrKmAgFV1fjuWirEhRSGcfScqGQWuuqy1Cy",
  "key13": "QcFrXa54215XwEZCwPzGfCKFbPdT86799sXairE6BSQLcEkZy1tVQSxrkZTULKKeV6xqje58tZEAe1mKeJMRmas",
  "key14": "28CVK62amBVm1juRFbQ5hpZFXmpxEsTpjfY7rBb4NztbZBQA8BftABidMmMXsaoYxhV2NvfHJRtKq3rGfr39rnNY",
  "key15": "4P2vSa2VMZ8xELPGArNkWU8Hk77c79xA4a8bHty7znwFFoqTYgpsGep9VWLVLLYVask14GNBP8SBRBL18e5EyKS7",
  "key16": "5jr7mEJCuPNyccyJzoAhoERUbQu74esz5AzCA1NvAb9QAC9W1rVn1Jma2fX6V2VD9cet2ep1ENXTHC1BwncNxXGC",
  "key17": "4mpHLqqnNouYaK8Z91gBR3VLmiHrqQKvado3L65MiyWBprLxpqbSUfpVBtN3UWuutqiUSpKRhginpf7YqdJeCffG",
  "key18": "4aiM1Y29RXno7ySutGLtfrLi7H7uLNkYX8dyNNfYWD3jMxLaX5LiWwL2XLZraN9RQA8WEJioF8ErdpjxKeF5gqT4",
  "key19": "qacZo7BsJ6GKZD1g2p7SVCnXQnszTuFfVpFtsfjF3WDcqa6Y2RhVsX7NjkJHeu4vTkSVLPcaukAaC1e2svG2QbD",
  "key20": "UJkBdPzadj9abzNEMBqyCydzSXpHY3FWt73MCGuLrmURoRxXZMg1gngZP7BPvKzV8SLLNzuuEYefF4tbz8um1ky",
  "key21": "3tvB5p78nGJv1kSAFMmCMEMoGUeJuEfxundEx5GugsdhtfhaCuN6mDpxFQcSbWW9gCwwjYWDFpJaYx2wfZh6RJs8",
  "key22": "4TAw47yv94e2C85VxXxTVJZNTzMNS2wV2KmjzGmDcb8Y6MY6N3dWH832KoerSykCfXigK6TpAHwiz2u8KyydEEDd",
  "key23": "2K6e56gruY7HbgCC88CSmVdG53RYEwWVwtbmyPgSfJdjpqDdhfEj7QEzUnkw2yxwNvgB5B5wvbPAdvhRNvhm5PqZ",
  "key24": "sT4kzPRWBMKUSfR8Q2s7ouxU9yv7nJAayTV8YCNnyxDHXFaBK1MHJuMzdXRWEcemwZcAMeCdPqNXUxfuHYR2k5N",
  "key25": "3CNQ4qc1crb9xnhy62BsHTLekmp8G5PB2LDJFY5JCgfR4t5GB4FqcqcjYPBx5RCu3VJe3Dty6i6ThatvWprLf12L",
  "key26": "22cRKnAVf8Y6MjfLVdWzfQUTSqCK9hqV2CDuZogN3Uv8PXT46rr69kRZqc5R4eUXUALvYUyfaz2EfUB4SnSZ5ETz",
  "key27": "4evYEmJDVyYXeCFkPJzirMUgMLoh2pEffFcMpiZjrJxJ31kepiWoSifZqXyfHJxsDKbLN3An3bYiJknipQh3sqYy",
  "key28": "239WZJXWMMZJPJQxUQetkRtNa3bx7m7Fscr2rZ6kPLNS4dy3vSmDMbKGtdVDTd2wYANFDpv7svUEotjaFZJhG1m2",
  "key29": "4VqHwMMgQ5yWGqNq13BZtVUWkSS8zojR4mhvcg5fFBF3N23FesZLbHjAkUxtG8roZYBESgA4akxCX6EbZeF8Rzbb",
  "key30": "RtB8bYHRAVdNo4L4imY4mXUya2bcjfRjDEf91FcdVSWVVc5YPyXn2WXyFqaAnfWkhgpfLKh9xnVmJHSmmcgShVw",
  "key31": "4XdzBeq7omYkYQ2fyDwrMK56aDSrbXJTPjR4VEabVyzjt8tVUBdKNydNj2LidV7JYFQY8aYdhfutzJaau1YfCUkL",
  "key32": "UAkC5XAXHon3ztXfRAuTjZeyuXEVTmnWHXRPEYDNpLumpdmjXpHM9hHTBdBFXbkER5sxaCShQMUWZvyTEK2r9Rs",
  "key33": "53y4FUAmV7kct34TJKede28E8DyLMNaeF3yNfE32j8gZgVz6Ex7jaVVPGKkRt3RjzituDvkxGhTQh4tq8VQ2CnWB",
  "key34": "5CKJjzZ1HgFN7raYgrfa9ahkqia5zSn8rVHrzVWeAKSGJcfnwoVeZQBFRyuAyyu8jr47VzR1iwyftgs4hRTaP85J",
  "key35": "2rMU4dhmmaxrD7u5errGgYAFV3NqUavAW6uujrf416mxH7v2GkjGH87oe7GtDNcutC8N9tg2vnusAyyhi669cNZf",
  "key36": "2oXR3QUEDExPXcuMx9fRTPQqXMvMqZdbKXaAMgz8yXQotwZsjYoYLJSi9VrSiScxWizpzdk76ffQKRYhziot5TLW"
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
