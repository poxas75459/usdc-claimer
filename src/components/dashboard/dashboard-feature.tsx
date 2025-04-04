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
    "65F6zK39CSJHEverZCthmwTFU36QQVwe39WqfkXfNBPJ1txjwdvo97HD83Bn7KD236BVYZNAQmfEBgRfwJjPTPbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WU57rQsYo2NvEZebeDMUy2UKzV2QRGQkz31v3jkWUfwi4RtitfGeL3c9nfLdt9kw9zZE76vMpxfp4eN5z3hK4FJ",
  "key1": "3W7Sg8egdzJiBBFRMBZfGDQgnshr97tVus7CGJ9nQQLC1SktSiJoF3P3mhuUXbz6a1ZcQMWABLac6H6g3iNTpN6j",
  "key2": "5k9TYh1EYt4TWvUT4nW6DyxRRYMJjLVoLmyWjszfhxgGw2i8hYWAnLwgDRHwxmsAQ8sxftJdrNfmmatjSmKsL53K",
  "key3": "5b91qCwHcz3v4YNKsYhLG3p7FR87sWsF2SUwPgsTCPXq6Fv2U4Qr8NDhP5k1nGBYMQc7NXQu63EzxQGoVdCMgBFP",
  "key4": "3zdufP8ZXKHEpvUFSesgN5YcrYy5sf7rx3aKBvkta6QxgBqEZa1ooZVmEccjRp1fkfkkCVftpUfdh4KXeyxrqX7m",
  "key5": "2dxTzq3iGJXdfHX3QcE42UzvYNCpJSGJZLDt1UWzAx3AqQav9zJvroaABbntcY4FEWetJLyES7U5sNQfE89kdyVe",
  "key6": "2v11yyderUsSPfGeGmmBG8tXnhhgX13cwXwo6j8vd2kHTsP4xZsZ98vW4ffh5j8zfKvxWXLSPST6V9QqGNAzFMeZ",
  "key7": "2RewzcYbWUcBZ9uJrFCJdqyBauD8m1HbARP4aQEBozTANJ7bxUt9GAVciPzPSyeEFuLSW1TX67UW5Prphx8uYJ4e",
  "key8": "5rHYXbNN4fQJt52L4hixqMTvc4y9FpxLjWS46QUx5UXyjYocVpzLqnkjNUDadw5v4e9wAN9zJS8knxMoKy9AhkYm",
  "key9": "4hWKN51zbJRidHoeufqyLkb8WkSbwzZ2UEPjofT912mSGrryfLcaUp7QUVUAmbbHJXUYAUfC7DEzmMaMBUpZ5D3q",
  "key10": "4Ywge2J56n5giYu7n6v1JbSnNXe54woDq6EoK69VZY2Z4tC3eAqEyc1NmudCsmaEqfhQScxhY5S9Bx58NoaRNSug",
  "key11": "x88c2dXgcKHaotUYMSRsbDzVWnD1xMGP5BQWeqYu5DMGsawhoyEqAUgHDZQG1QfKKoSXhdahKn8um5UNirPCDJ3",
  "key12": "29RzYeJSFkb9bi54Bhw9B3wjDUpFFNvaip77XwD48Yt5V5JnQfiKLL83m8DffcTUBnQxYt5G9jqyZvdRGBC9i6Ww",
  "key13": "53HvwYjxk74dyMuSRPbkchLihvDQUCCd1nf5k1kqkw7ZmZS8E4wKkQ7Zcz7QkfgSuTba2VmpJzXQA6tsHjBtWRFn",
  "key14": "2sFXgbReT7HC8aDFyYnfVqPaXqaQQBqEKNT8pGZ1N3Tur8gUjA6vSd9NUPYDT3UuVH98ztAAv2brmUqgaYPMWfmX",
  "key15": "2Knen289WVWm7MhWijLFQD8osaaKGDb4aB7Rr5frmJFBpfZitCZ7kw1ViTejVHvxmQwHgk9cJmPYYpfqcHZSS2a9",
  "key16": "FQefTdAmE7omoPpGsAukhamcq6pZTkVTL6pNfNPCayr2uePoznV6kJiThB6Nf549FhvAJWfKKVvh9XyGWGkyoih",
  "key17": "3bmBBi5t3dsfXg3ZMCfd2fjPoyteRJdTm7Qgfu4NJhUMeaPeMuzeG7XUmcsJaW1tM8ah4T9akPPYar99BLkiYafQ",
  "key18": "Xu9YRH5c7EC4JGNAXu4tHSxc7rKUkAyRrsPf3ghnemvMso9ZN7M265om8PREbnMrF8hKPpSjm6ydDyXFyDeC617",
  "key19": "4gwajFhzvqqmLKZajVt4Tz31tKX1CWoU8UKHkvNq5MuMVFSGS35Tx7cW7gLNimLjsispvzRQ44rEqg9Kt3AVqwGr",
  "key20": "3mEuNoLZTABpQ6sDt3WFLZG7ewJCixQ6hyxG7bo48gerg1u67spfxJtu2g4BurHRefoiKLEaHKRLHyVSuUY8hrzt",
  "key21": "3o3nYnsPYXtUz8nr7QLNvoDPgyHvjpHgyTXJYojFxoHk2sPonjrmeuetrnzMDftKGNv3WPjf6yHfLjpr4V8NeHe8",
  "key22": "2rtRt5swFEg8Rw6wrPJVMEcTp9HgYTbt2VFQPQC1j4szgGd7Ji9zSUysfxv94VVQP5ZGiomq9N8fvAar4k6y26cP",
  "key23": "5QYGZUXGsKbxPRMrx3Rj6sUba8t1eLPiRoehonbW4T5Hf8tpebTfnuzhTDoqC4g3FbMXxeNGwi86JPb7vm2P3DSP",
  "key24": "3cRPbf7LponbXPvR4ZV59hXuj3Vij1itdttHyiVzLMJ8WipPSvXSewcedZhK4mR4jsVUomDPqpkaefmezTQudZXF",
  "key25": "5Qv6wQwPibJnk2LQmaxvsKtve8mvVgfrUH7hUZmFmqMhzfT1VRkzkzSdnCS3Q8NNy8quLUHRwNsMKCrXnVoY4WxL",
  "key26": "59ZEGxPfzFAMBQiRpWvTwsNhmc6vZkDJZavJRpHGRRPK6db3yZPUo4rrqXoj8y6cNqMT1JeByEEaZEfzzraPzvBW"
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
