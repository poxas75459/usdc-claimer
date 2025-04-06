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
    "43unTogijYsUUZ5DAbE5tytwhjZqMKBmnHjceew7UXwJcpcaYJVxaYuuw6HKoeCKX4qLdCEvrJoTMyJBkP5CBe4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABVLNoL8KsNGk5b8gUqCRUqm25JaxVpEMo5YdLwhiFbB5hPfTc1U5iDuV21zHEYbbFuHgQbVvESy7QMsbCFNuja",
  "key1": "2dUKts68xFy8N7kadY3KNQi18c6ZYbP4ZXsA16fvcvPCHNSfqeWcvFYv2hktC738nBkViFsZBjLg9jHq9dhhNhWm",
  "key2": "3nrgbX8nVVu1Xdd91Uiyc9vfxpY2g8LJ4pDXTHg5mZSrXk6nwMnuDUwvQvWbUTy6eQvUuDGA7ZLH9xUg6rocDXAt",
  "key3": "5TQtyh732Ry3qaK3tTuY6TzWuDJYiaFf23dtdF3HTcPr9WNVHiH7wZMhcq2DP1kcH2x7FqobG3tQyKm93dup9jN2",
  "key4": "4QbrW2W6gZvrMw4Vcu99gMKigGUgX6gahp4ySbiQ1dM2SwWiDgufxqSWcGj5EVuwRj41kGPcLr44ZfzzZN6PFEUv",
  "key5": "2ZapHBjhsdjR7B5nJXTtRyMAEmc43aUdbAp5us8HQp7RCXmqWvSPNGdyhpFbyK9gbyw6WaxxGXjJHhpk6PB4iFLH",
  "key6": "4Rgqghoca5zxuNWwQ9xZbfBpS3Ht7crb7VKC98JQMvRRtB39b2UURGQriCbbMSHXGNoxdewksUCztWxrGRtXaiFs",
  "key7": "4qzs7o2kziH6SiuA4vVJJCL3aVbGMJdMcd1mHw1WqgYge4YZLidnDuQucRjDbHY6G8vYKLSLe5vjooNqWbwPRQ5S",
  "key8": "NA4rKw4KZYJXkEGVTQLXW9ZdPB7d5vSpQUV3DNL9wJNY2VCJehrnfkS3TuA7MKkrVYaBCy2nrkU1mzbKFPdeW7A",
  "key9": "3VUehBa9NcQXkS8j8eki6D3qY48r8uvKTCgPT3bqPdrAcy4b9BiPCx6XsUid1adKtFFmpofxXi9jvvVKdiqW8MxP",
  "key10": "4J3SdJUAFp4CsqeTyQryvyxWQCmJwURBcFjpYKeWAX1n4nxQZhpx3YEiTga6bXE5GZ6KfkhBD2tWxdy2VCTshmqY",
  "key11": "3XpET1WqaN2sKXJZStmiXdeB3137VUYywXpKjPMYV6EDLgSrG9giHJhAZYfCyY1RcUXb4DYnRu5DCxUUW3vRfpRn",
  "key12": "Qe3qoQzVdMnAVtKg7iWRvnKDAK4LrB4pNepQTAGeEMMSJCwk1WvnLMDS31E5kpYhfwLAdXqpACCDM2Ns1i52zAJ",
  "key13": "r4T4dRSGvTV2Vm6E5uVcpxn1yfQjYECeGuhBANVunocMuJgWqQz1auV1xtpqqWwATqJpKBah3jxdvaAhp1gT1aA",
  "key14": "4ChUszWuZ1wXAD3wiStumKdehAr8EJaTppvxUuTjFuqC1FEoYcxbSvS9JNAAQiH1swYf6BaFwNaPwNLXVZQma4JB",
  "key15": "327vmdckRuofns3Bt7HAKm8BQQzKjgtVYSi3U78tBq1YM8MadobYT7iF3bvJTryzne7hgF3ZBe7TdMN4p1MKUSgA",
  "key16": "1PD6rRq699QRtnMKTVLpsr3P6dKACNKqHLV5CVbqwWL678qSFyHRSNdcUximk74d2Gmnug74rGWe5RmBZ9pDKRb",
  "key17": "5FdWc4K5VTftMYeDonXxQXUat7eQiaPNjt76uuKFSSbRDH52w4jEmAovH8k6izz7RipYXHk9qU9JAv72wGMapKxJ",
  "key18": "aiZ8hCjzgf6KHWNX4Bh7TcvyU7uKnm34BCeX7nKmBVnpMALazSjKvmF5PqhsMFmm5KfnNy8K9LrXekQZfygPbym",
  "key19": "4VLXAEn61Ch4MUFuAtt8988z3LhcXi73PsyyhooNNfnt6CBbTjX6yV6N3Uk5vBXX2rHGRPJ2NGvNSyC2pYnPbepb",
  "key20": "3zK2xtucwm5uRVYkmxQBCxRfQitZdANfdcq359vz6owyG2WFXMh97L4TrR2P2WkSDUyiRS5dxmhtWEaWqnuMJ4G9",
  "key21": "5F5jXWKq23ztVMzcEUisrZ9E5DccU7e6npykaW7APJcK5UtngN7DZb8HUp9joHfLpNGtPgxiAvEHqazmYaXzUPEz",
  "key22": "5BCSKqtyVV4DvMDSqvaeSJFrPgQC4c4MaJaVo7DCaEkc31p2GGCbRKm1cXPNqa84FgUPxD2HptmQbhVRuYjC1XG3",
  "key23": "2S6EkwvuLp1Wpwsxy9ULCiCjGMKQf5r4Zg7P6qBEjdjRZ1myCHERRayvr9CdNh2YHXYjr3TPCMunLYTV3rK9MMoK",
  "key24": "2ytSiwPuqwZ55cd5EQ3VdzaSwNKfhVLqxqLEjVjjcwprWivBPXBKsYxbrjK8gJwUYTksCpcyZ2eJCNHFXxQuAzRt",
  "key25": "5h4QYP5k3XnwWLfXtHwLvPRJ3ixXbzLyfVXhiknUgVx7582v9BSGzJXn6Mr4BUXf56GVKWLUV6Zz3sfgpCvWRbRe",
  "key26": "3N5f2ETNNrU7Q58VtYFiNxSow1kF4NfHHkFkooC95UDLifutoQ2R9EBRjVehb4DrXSJPiLPGXyiNfarqd9cGMjAK",
  "key27": "58izaFC9d4TyKWyChKx5ibY7Cc2n9ronqA2v3Fi6MSpU5v6ioYEA3cLAgeo3oPdu33pEdjWd6LpWAUNs8GLachcY",
  "key28": "3AqAj8UKtRxZ8SeSARm8hc5zYBzpeJ9nnYu8ohscCMjVR218j15vLUwoi2NmCoivKSu7xiBbhEpa3VwBXv4uBvLu",
  "key29": "2Sp9d5zpMgTNrGFCE8dj6Kos3Ec4dMPbszqJi9JNgiqAtNiMZGJFpwbpEyGCooy2hejv2fPqYxifPGPu3vKiXQaH"
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
