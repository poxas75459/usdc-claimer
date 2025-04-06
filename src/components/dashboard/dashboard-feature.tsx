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
    "3vSjii6X72QTxBRsXuykWvSdUxNQVS1XE9WZFHqvQ72nUKiPUefGwvbuCvMepGie2d85V5vHZ3j628bdKf9Tqskx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWMivehkErqxASSjFFZ7c6M3yD4YVGTkthSW5AM7iPBKkLjZWUSD1qa89GycjtqyE5dPZHoJKKS3s51CT6przSZ",
  "key1": "4khUbdpypGuhYAgLBeAtmTYBiWCotzz8eQPMCyGnY9uAbYQLibjNAoRqwArcijGsdBDxhZBJGyDhEaE8x6uDmpPe",
  "key2": "BwkgioaknP1Nm7Fy7KQc9q97zoxVSHukQm2PVMRoirj9vRtXjRNnzXRLmqUXovMYqSVPoHP7SdPJZgAmhy3APSC",
  "key3": "KGC1pYn1XDjc2rK1gjr5pNomJpSCQ4oFxmEkttMtAv6RFNUF6Z4ZmBfNYzeGJiQz5zQkNjYuD79GsrcDwQML9po",
  "key4": "41mqrbQ64crVcN9KZ68yU5ftuY87kaZCFnogLCdQP9U8WTn6y5rciYfRAHrHS8U632iNxYR5MtakAuGkR8YwJMph",
  "key5": "4zu7D9wjjxgbFY2hq62Y1jq9T8Du95Nwz5pvYR6j8iXdQbxsGpFffq5SdnKQW9s412tyCwjjtLxxW5HZsfVAFtv6",
  "key6": "3V9Gw3eD9an1Vw92pMsvoyFJmSYAm5egLgySp9TThwhQ5U8KTTmeCzGwbcy2pdYcSiVjMeq44H8NyVSGQRFR8vwK",
  "key7": "5NTnSH6VxLK8qtfg5XavSXdnJYgDQTSc9h3ZhR2SWrVuePCz4JazqJUUze9DsWcdvXqYVMTpfdEerRFNkyoym5hF",
  "key8": "ttYuHY6fj7xfHJSNmB5fD7aNfs2mCMdMWYGH9CXj9vZMVfRtpWHvUmVW8PYSS9jczdkYf4oFwCHakN2n8BbskhT",
  "key9": "3HhAbScP4QfygXxcmrpbnXvV3grYwtF7YXaL8Pyd9ez6zPbYRnwU2tXgZ4hbJfaHDhXTnU9NK4YqJGudUeAxGsyr",
  "key10": "3rNvZdHJLB81efWuLdSEF632cRMRe4mfG2fp3jbFFq3Bh7giyaSUjsfy4NYaZZtyEuTxeE6VQdWtpFtwKmF3TaDN",
  "key11": "3mMr3rWAPPyYaH2G7gwgU7dGNn3gv6F9P2R51qjmPfAJoeDEbNqHTC46zzys6kwVggQa2nzr53nMiFqeef4igT1v",
  "key12": "5yi4hGBwKv3FhefrdQ38UkkpX9amYprPA4HEA5tkGqq7prabz313reCKSKAMVA3cDk4zQjjEtsvkLb9Ykx3yWyko",
  "key13": "jFv2PEMUyjpkHPPx4FS9dpKVLCTbCFs553srBvXGc3brVFEm3YGjWy9LrkXogYWooudz2RiSJQ81fpTfCHjZcnd",
  "key14": "2VSM5bFoKCzMD4f8jmLUdXYEpVmQJktvpeGjQRmcse7ST9dj4o4ynD3L5vdrdLPc5oY3VYnbAwzPn2eENhYkjnSZ",
  "key15": "rztXrJKPGoB5fHLBpFZCLzUTZSEgQBMMdc1enR9E3DR9S7APptvokeMwk73FuBgExnmFUiHRcwD8WtYMu7KYmqC",
  "key16": "2851jfGYYF2vkcKer6zG8FyaZZVCknE39osM7RwGTwffsBHugzi2FXcEbsGPfUDNyMEfyPFBt5hB5i5roQtfKkcp",
  "key17": "3H92n3FMWWgY2ZFGqvjcmAPmAiwfP1utqf3Ax8ahtgciwtmfvfGw5cnpe8Yr6mUkWKezgzyffXsLp2BhZH4xzCuU",
  "key18": "5Fo9swpA8svZpaX5FJ7T3wvmudX7Q2PF5nae8T1UAshDAyWEWnqbXcFzXU3TbPABBThEMd7vKtsSvMEtSyVdwG2F",
  "key19": "4GH7rFzRdkuYgKLkpWErdvEpa2BQ2uWtfhFxt1isz7QhWKg79k9KBy2zsvZLzA7LrrGwykcJHcPEzPNKBasLqShE",
  "key20": "5fBDTwHZ2WVVairajNBQcigbwZtK69wec3DMwLirrBCf2qUt8JnsJhY94obbzq6X6Lf8aZ82ApRJ5wAe2NUxnNta",
  "key21": "3pwi4q7Mqmw44xAN9DDfRke9H1jRPgzcQ7DhSAtKKSmJnxwQLCuAeLX46DB2dQ1kEMkmDMjM58UP4LMTbjHYwQQe",
  "key22": "kLpFBkpDhthWM9mitK2SgdSqukjuBib1SP5ZvnxrBfuucfS11XgYNSQhBdUp5xVJaNB7NuSr8ofR9JsAtCEaM8q",
  "key23": "3yrCj5MaonYu4yVdr3KB9r34Tk1yeqkxzgLBzEHvTPFjnSEzT2pcFxNyE2ySShn4foHxGKUA196ADrGJytTeVZCT",
  "key24": "4ar9zzxiPirvGNBNhXnASiieL15aUSV5C1hZ15CVoFK5tBZzEovjiHN5sy11aXYTxPvfUt47KmqkLvkkmCvzNdcA",
  "key25": "5ba9wJZVoHLy3BuwFLa7GtqrEm1m2yrCaY6ioTeD6CVMjVdvR6ivj68AQsEaTVJzzqN2Ms88Ngcr1ENF68xr6RWe",
  "key26": "3H5ogeb2AAxjxfowatWd4iGQtizZVYx4XCdrRhS72AES7WGQcxavRDuYr4w7qMUz8P6RnmWgb3dA4wz7CpLxH88M",
  "key27": "2bbhrBSARERo48xdTdip2hKn8Me7G47w5ZyeXdQWuC59VZf71EWgHfoEwftVFxWG2A66WGL8gENk84DDSrkJrAUP"
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
