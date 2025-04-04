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
    "3nrxminaieebJBUGo4aG7GbANQsrkBwww3ZuknFKSaSCYA7uLdKVCfTxWsBqqS3UUZbRieR3PpEM1cWBAmV1Zo6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEby3ivfa7XzSM6Hmds2s9ZjqDMphFjUd4nkwjUXwkez5uWq47YWXaDSSr5meTX6sctvjoPkMgtZX61Vq14LQPc",
  "key1": "39WZamGckHuLmEdpeahdPR5QHy4T24K1L7pU4oFfCH5WTmXiGssWUZfRFVZujeUgo8rv9ACWz8UpAx5RvdFTqNBe",
  "key2": "23WD78oXxNSR58nv8wY362fTRqrmwchDpPskZVjbgrXXf1bJRzMrsENXV11kGa21smmh3uaSaqV2PT572zXRZHLj",
  "key3": "2XGJhQPSFJrBL7sE458yPHEdrzbfQ9mcYH6eeQCCCUR221AKwHKeTnDBzwPKT2GcGAtnAC7zQdZrfFgwdg5QjXr4",
  "key4": "5QSCL3L4vnX2qvmeSYT3ugixGRHdfG1prCBWNa7nmn8J5RWNeqe31GWuQRAByZJFUhpvu9wmMMtVf1C2hdYhCXxR",
  "key5": "66dfHNdFfqugdkLXUrCo5CP5m6U1iu576Lr8una29nGECcLAezToPFyrZcAoa4pRGNZqiiSDnox3MmbPDMx5Y7uh",
  "key6": "3hZZ2EYy5EaAXWdhifXnWoP8qcDcqRWbiFrA291btuZKFeercFajCsM56ULkEhzAntec47AXhqpm6dPjLWgKksh4",
  "key7": "3AhxcMovVtc2VnyUgYC2A5GrsSty5nPC1mYHKWphRrWkiVTU3iPHFKcZbMMF8TPdzsekG7ypGndwe6tPjVCpURoS",
  "key8": "5WvXevLDVXufwgg3qmLrMbv5uokPPXFhxwuzv1UoF116HDmSXAx36Cs2ceXLKupxP4duzHAumbVeGq2hPNhWK5Ut",
  "key9": "23gDjpEevLGUEQchvSLZUBjb1BpmbUkxEWrLeeixfxezQpYEGhjJmxD1VrTYSFHx1E2K8cDoaoPmMc5Y11omnTZ2",
  "key10": "Sak5SfMPSiF4EhgNXyXT7F7TrxJ8RafSYNvLNKoBTxQCeEAu1hkdkheHtGiPKfe131Gmkh86jr5iK4eGWgAx5FL",
  "key11": "3uHrbdK6H4F5omcS49TvFvrtrH1ZmPATw8AK5iuLEYN1bsLCNMobFwYgNnsxWdBefGiJbMeBj51uhbRwSuWJRBFK",
  "key12": "3jGs1hFZBmHDGpmu71Za2FvVFM6QeFSpPCHV4ZZKuReaGgdrQrDkQVzYLM45FMoNXLdLf9Vu9puqs2VKMo35VfZJ",
  "key13": "7cR7UgyArKkXvjnFnVxbCRCjLYYCdnvHDrJxYjPiCJMk1Qqexbi7L49vcQg4hpfyQmMicKqQauPYU2us2PRDocK",
  "key14": "52fi9Cn8xhco7YyspS97RK81Coz2W9r29rKHxKhEAP9gLB9JTynHaGeZ92GJyX64Ydm68C4byXFVdyueedb1F5fv",
  "key15": "3H81hwyZaWvWvdEpaWnbU6BjXp5CLji7KgXbpKu8A6pj8A7p1uP2gkNcBWpYe4qXtdv639qpi9ZrELjfBxwxdpmv",
  "key16": "4ytZteBygKePKw1NiHQL2XU4fWuLwC54izhNq7e6Ps1wGHAsHrwC5GXBmZgb5VjhLaLq6xU8TjYs5WzamNQjs98j",
  "key17": "3rpQ6XymqLnWsuRQVJU7Lex2jvobGhFDyKEt9hdmGNp5MQTLJyWUwuzK9cdRgj4FzmG4CJgyNT8DvBhFH18L4zZ8",
  "key18": "wgJAweKhyzLXrjF9ZfqfQf6RvKdFpNe6sZNM82kY34tQbQyKCDTS7idYeLgYCrkC69jeXmNhmSXosGBEuv7JgWs",
  "key19": "3gSY55EvnWmEa2DihK3rXK41fMzYcCf3xRSSet9amcBdFqwseeLkVt8WfE3vmqvMiKUqUsSCTBLym24S5RzzP7zU",
  "key20": "2nkbJBaodxgbm1rMDQxpZAx2UY5Rpv5zbdqnbB2PjuvMdBwpQQRUvaYAwsc5vzGUB2L9Vah4BbSLee5cD9rKPEZB",
  "key21": "XTTMouNF1j9wA4MCE7CXTMtGVVDdAeQ6azxr3WCext6TdycTeCYc7njA2K1Xef1hMvUdYhErVWjUM8jWZcpcPRc",
  "key22": "4tqTeDrxpmqkjPNFnABuhuDVmJfcoNtiFoKVLqXEHoKdgqMLC8HbejqSir8GVenqf59y7jDAnA8QXaxLPL76x9oC",
  "key23": "4GJFZ5gXuo41jnVoMzcKLbCCRYnKHniycVgpKaokeu8q3dvmdPbmvC6JVyekjwFx1Fjd5yntZfx8eyKWHfkUwWEw",
  "key24": "2Bxd7hGRcJp9NMuc7XwdDdVmYH3PSU4q2jHMV5cSiPerAZFYhZhJRrLJMge8WYTNYe4sENtV112UaVzXaUohiQGh",
  "key25": "4YcemeU7aPgo6fL99mUPpA8zASHP9epqN8Z9SbD5GUNZTkyp12B8xfpyRkSnhViDy7jsmTCaEEfANLmgPStpStPJ",
  "key26": "5FNBf5vy6Xu5U3hAteKfiFJMXJnSahXDJPPZJAiKxVSejR3MRGiCKm9VpybkiqFx99YQX3mkJq5JTowhAK6rsrPM",
  "key27": "3bREhqLLyXQaXP41ezSB3gtREPJ3w7pA16ZY1kr2KCJtijVdQKg7tdZjUxeKbFbL8cZkHKCZ35UdrFNcgniMQhDU",
  "key28": "5sCJwnVsTEEqFn6VkLxZNkWfeSzTTG3PqisywS35CczptqqtGw6erJeabSJEC2au3LHGt8LnoQWAbCTLKcfc53J6",
  "key29": "2Gd3YWLoDDmKf7c5V1pQMUSDnpFLTZSxfVJS9K9Y2tKg4ejBu65D4giVotnXVK3sNVjEVPQgwR4zmyikw7pLxFTn"
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
