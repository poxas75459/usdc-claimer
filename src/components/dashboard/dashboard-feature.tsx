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
    "5EHHb5BFGRay5HenMYLxMp5AQbKn5tL3ycjZ6DvF6hjpL8qLnh7tQ5ZNbRiLGBhS9CMY2tKfhcfafnpZ4GoF6VCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3r4srcWMzgCKBAdGz1EvoMkkTaFpayUS1n96WjEtAoAfMW9Cu6mg3hXdVZzbdegT196QvLPQcnAGht6V6ot4we",
  "key1": "5EVvooMbQatSwpKBfPCVnpDAUzkNmh6rdYmSV5VuzmxLNokq8WScMpDofQuH7yqENNJf1PwiFHUahhsqXbwnFvei",
  "key2": "21e7v6Pf4FSHZ2HJU7ivbjM2GtWFMqPDtZHUn8nCbJjCGKUwNE8eu73xEf4cgwvDiQLyioMs2RVuCs8yUpxpXjGE",
  "key3": "3L8YviXRznCnMjQBx37BmazdAEZ2Nr8gRoxmQZKLowg9N8k9cWcV2Vgbwf5E5ArQh3XCuYu6DbXU5297LBGCNWtc",
  "key4": "8pMq84HW1ZCByYh2LxqdHiVyvNgvrSVwQ4DMuAsKJtKy3a6zxtCJGvHiTMfjaCpPryuUC9TeaEEdcQWtAstD7Df",
  "key5": "4EydxNaRsjFTtMR8rENXdZAFz6WUL1eHVGeVeXDsoSj7MopExzPRoKUFFY1MstesdZuX9Bf982xwRpepKs3PRBR6",
  "key6": "3bVnF4KQRCzsPHu4Q3N1R6dsLLjqAszcagckrCGK7j8XDK2VXDMC2DdTLwRw7tzBe8sSHke9NBY57vkqVdrkeFXw",
  "key7": "sLfjpCP4Y3qkzhHVERsmsyER2UKz7UntkVeRFcJH1xBkfWUCy4DtuPCwZ4hNLf6mGwpiuuLsUMQD4UuTMHpthYn",
  "key8": "3Shtggce2cjc5DnVE1AhWDbyK8XYWjeEMBA14eVsms6UdisqaCaUEWFgcC6U23ddk2JjgV9G8u2fuXYaWhdZqXpU",
  "key9": "3DqaqXUpJTjPzLu4ovSv4Tu9iXe2BXd6MxwRmE9F19Y3uk6WnahENj4vYvmMsG65xnznDEwfeWiTWQALnGMqRLsB",
  "key10": "63DHy1xgDUBAAc5fvp3MyfqCTML1qvYTH4Ktcrh1VB2jnTURLvpKZp9CCN17QJWRgn4weLsyafBKbQBgwXZCNm6B",
  "key11": "5qNr3cBQPHENLiFkiy2zP3MPz9b1fShT6vFsDDPFfGntcwNfqnPQBiY1Zfj2tEDL9boKhW8Ti5SPVwgHcuRSjsEW",
  "key12": "4CjVHbpcAqXxMJ7TUuGFk1g9LxeG9dRn7nKc8KiUYM2ckkDcgyCjKJ9QEr21YZbpKyTq85asiXbxXrYi1CNuMFyd",
  "key13": "35f8h9JTWCqXyPQzCxpa4QPK1dUyzJ3YNS5ZSbhUU4EWJrC6AeY8vHqAQt9jjMZpXyA3XAtdCvdRyzyu6EGg4AED",
  "key14": "4aWVsrTHBChYigjsu1Revf5Q3UEq66hzH6ZdkcZrE5KjznRVr26vcJX5eqbwDcnxhadBsTqDTLehYG6KvNXfHo4K",
  "key15": "AEdNRRMwS9HF6BDdVRNjDuwUaCfGvpccQmKEJrtufkGWPxQiJP5jJGBf1qcVFMisVHmx9eZVEJtyxvnbMhhvTEu",
  "key16": "JzZnyeCNT7MTUAPVEmudvf5Wsm7ajZuZWUJGXCLHAaDaXaWxix23dRAy87YuWxaTnukqLdrS6UmXTpKdRr9wykG",
  "key17": "NfyievmMD45FzPKaGEThq2qfWqKAMmMcb5TAx9WjuANm4vGxQVb3LgWZsQfj7psLgfWd65wNZY6PM4YtpUS2pXN",
  "key18": "J24RTgSHUZifsZdJwyPNDgveRs8VFhWt5Y4maw42qLX85HJjsr4k89LZPR7242jFVQxkBoiAZGqEZGZgDmc6ojs",
  "key19": "3nNpGQ2Qc6EivqLPzpr9qAU3eY5S9Kj9v5ZfRfcmJYsJmNA9JqEhxuKvdsNe5YaS89zkfe1DSHwDWMGJke7RkwfV",
  "key20": "2XWbHq3mLKi3s45xBeR3W42T2bhJ7i8uXJKGuScy3eNXgirkJCC6eSedRZzyh3fLmxCuGzCRKasmNWAqVvqnnxx1",
  "key21": "3HRgQfp3CawLffLPjChuppKifHnC1cZi3taxTyj8jZpqc1Xi2NWvDnuTfiUBSQbBJ78TApBzc9xmfwqz9MqQHg4B",
  "key22": "33MLvg74zBcnisds8f7fxYeeYGd3AWcfac9LSiciPqSKfzk3nrT8AQruy5fs5GEEcL75QkBpzMUY3pZWNDdgAiWH",
  "key23": "3sRoMFNaw2PBGaJPKhL6max2SZdHnZx55uzMfuQKGsb2KtgrDpqLUryM5GUtm7hfSuwFemFB5BR24jTnPHV5nfWJ",
  "key24": "4xCGAatAhwRUSqrLiF2cQTKMBzZGLJi3dxgkNNmzYvHMRqsonZLE4qhBrBZsKSdTCHZSqPzSibGDpGuaNVifA9g5",
  "key25": "3dHDQPQZjgRpuVzittSKs7J7gAsMDB8cRNNHSvh3LmYKoiQ99uETms5bL2qTAZn8zLduCaT44NmexuhFXf45Jnup",
  "key26": "4cxrvUpwxXWzZFhAbQhVe9g2tiLnJg1p2tkm7rsPMRyTkgVQHbNAUueUwYwb7n3tDqmkiUJYtApbM9Tgjbe8h1XP",
  "key27": "3g8dbtijzmTucxuJXx6ouYGMx1gy6VWG2KaeF9xHmLFx2rUU7Qv3vsTvBwJPrP6eYqiyqwHf21sLsXowLWnD39Pr",
  "key28": "24ZJAo3CNPRubmRkbPeo6dZHEVD3w7556cYkCmzCfMufgCybem9RNz8yvQ6JRAbMnS6AMYiDhk31VKzEoDcsa64E",
  "key29": "5DgvKxazmW2uW7FWamfrcebtrhKPDHMWfGUzHGEcVA7voKbzSA4onDRikEjfMHsNBD4upQvi4vEo7yG5mfFDiFDQ",
  "key30": "2NmL1cCCaPNhjziGbktWGJY89iVzk5mAoM8UQEBhRMjmwTKTL5DYh5U1P2XrC6j4aeEGxT28wjYmDNqZmSPNVYU8",
  "key31": "4BpLSJD1dJJUXubo2cwthHwScRUfg3PMvTsMSG2o7F8AXpBz1jTDLMFshMPKrqL5bCXH9ZMShLXvjcz7994fiwTj",
  "key32": "2d4jHyfREeVBU2ccKkQ25E6MqwwvBQhmxTnjYkJZUcRs8n7EdCmRBqLxB5GSEJM4UR9g49TvgetBEwyMhFP6sg8S",
  "key33": "5YJTubjPk6bMz4joVwaJKvybpJ1LfDLoGNEWTMPceSRB3knnujSu5Wc6aNXBvLjZdpouuLUyDxajvJ6r3y5AwcW6",
  "key34": "4AZS2uFB8vr9bPutb8BDemVup234NsUaHR3xQv9Wmcd61yeWhrnWCQLesh7KF2ysShWHkumhsuZZF9ph6wwB5aXv",
  "key35": "Dq4yudyeezAmNVkZQFFRYB7g2F5bfubhQ6XnFdKnpdGQE6rhBGkGScfxjkDke4ftxCwaeWYVRLuQS2576rHAcY3",
  "key36": "4tH487dcwbiXyBHb7WhTzXTEY8MADLwSfxhDANLGFq4agiLu4mZ38EsRkKa2nLmzLrNHdJAD1znkz4eV1mDyUTh8",
  "key37": "3Jnc3akpx3XxJZJvHtu9uXtXA5JM4v27twyBUTXjncHtiC1rQuVqxF7crApspbYhDEAHMsGH58ntbTFjXGNSzXZh",
  "key38": "4Z2thmtNWcMXSQR7XBoow7Uanz3neLYTDNtDhAeCvwQ6XKhTYcc8AXwSukxVFvzJbVd1gna2bmBfcxshTRx1rjiT"
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
