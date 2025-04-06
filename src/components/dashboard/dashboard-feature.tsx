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
    "2oay5rUeC2CPtjq8182T8qJe35NMdWMzarn3BSmE6b2SqprLsesvoX1TeeUokhjzainwJ3ggC2uDEuXrUj315gx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UCMwPrY4k8g3XjxDLKk3Vtn98rgT6XrJJavEXkX9vUpRZ8pcotnpxbPLsiHK3ZNrK6fbSoUh2c4V25BFjgFmQ6X",
  "key1": "4MFA4uySzymgaSYQ5JxWaGcKL2buqSfFKuLMxeCmkp6qW9Rgw9LqvUF1yykt6SdJH6MRGTUHGM3SbpZxMGXexeGq",
  "key2": "5zzb8pG57agy1s21MVbT2Pa8iQdRhJAH2a4fheGKJiLmm98Rbdy8d7s2X2dprYdmqbarcLThwJZG8qE7e2QKHPtx",
  "key3": "3bKrtpVqa4ixfpzhCnjR3AnEe6Upud5fWJKyKNFfc1Wgv1TeNAjUGSSew1iEVyvBGvZ3rcRTYACL6DLeJuEHNXja",
  "key4": "4d3XmuLhJ7A3oyQj6q8Vdd7R6BhHY4iW4pAquKQncCc3EzPrHUSPJKSg5kc1t5uWLrwC1ZLE4gU4B3E3FmdR2ibz",
  "key5": "2NZNYJrGGqy5UtV31jjj9sHhcneww5YbJMzMUoRjNyZra92YRydJHxwibnBirDh4NJDVRpqejrXVSsRUTo1ozH4x",
  "key6": "37fm51G5hWh9BkkHR6RybcpJ6tTpxCtG8J9h5mcGgNQkJjzFfpwXub6XqbUFF16ByMvqUVKovUV9LjXq7exwc7uK",
  "key7": "4EcF5hFqVmjEU66gCgmXXFdrp9y49m1PELq2ijKuVt5Y21VtUf167sGGHSHkyfddizyDVpDUUt136BGCDeH1sehB",
  "key8": "eKVkkNpJnN6SJit1zBxX7nmTYy83GBPEFNtC1i7fgTy3MLwUpLBgo7XtM9wWvAFhnGvn4QttcpPda9Ggbg2rtq9",
  "key9": "3F23LLmmVLfpUBktnSvqJfs9ksPeCpc8gHKKwrVZmhHRjM5JwHQdn9MvvCZaS2ada5DroxkqtvVfC3Eb4KrJH99a",
  "key10": "3sT95VjpwGgwBJU5Uvo5bWGNTNPVj8yZPztS9YrJqjyHsXk1y1dtdRgM1o3e4TfberdD3DcGyFvAg5pLriX9BtwS",
  "key11": "2vq3oiCCHGFKyDZwg1SbsZHzg54ZMy77rUTffci3Aff7XxckQ75W5iMcdtfEXZKZ5UfQK9ohgBUEohQ4i9g55pVg",
  "key12": "579Uzfd1SU48J4NvcvEC4CE6qE68Adr9Ph5zdzQHkU791WetYuQRFQ1cxW7DJW2TPoCjgm6tb1fwP66ds25ogeon",
  "key13": "4M2pXqCwipkdFefVf3Emhyd5KS3u5MsGrjdMoTPq6KAyA6YRadKF3s3J1vTARx9DFkNjstFpEUHqg9GA2KYFP9AE",
  "key14": "23K8GxaB7iv51QbHZhL8hpNEiTveQuS9iH6dLsAfeLD4bDYTL7u9SVwcgW4KV67wL7iBi3iPbsWWPt7YdTHTvsjP",
  "key15": "3VVYQf38RhRCBS1gSwdxmRJWAj1rD9rduaLZphvWpFn8EGCsTAsqPsPN1zkv4LVwS8hkaW1newU1daZL3yo3TUe1",
  "key16": "3dHi2H7ZnKi9SEJYVuHiRfohKrVpMPbJvgC29mLsPF51iBHHNBhpDSbwwxc9fWusbLbT2hRHDNyBxZQQPhFu5MSM",
  "key17": "4kjHbKwqgKasMXHb62xyh9J6kTXfvCMETfE7k6jpnF7MyfoVHivQvWFNheg4RUafRcGUaTwH5Nh8PXUDLLu3T4Ry",
  "key18": "2ekssWeoTbXQcu9rb8vVL5ejczwPUT67yhjv7iaMiLDkKnJ1Srq2do1q5M7ksAaXjDbfi2yFN84L5vBYRZ7opH1f",
  "key19": "5vXgV2wvz88tCC9j3WdANmgbhWXVwXks4rhRYXFuUtapCJC73tdAWXirYmHDJH9zRQsYLqYu1EB8NBEa1HAfzsCW",
  "key20": "3cbe5QciDHJFyXkCNPgubwhi3bBFVHKZLzR69s3ABZfvePqyjdGbcDHcE2nBE8HNL7RVrrbWBBgiqCTaJqLUuKHX",
  "key21": "3DeQs7eWzgpdz9RA2aXTapVJJcZApgo6HxQZR3w3ifXoKmwpJVnor3zQ3dRdv2Df2DmMTyMgNYD8bU41Dfnxi1Rx",
  "key22": "HpLdD4MB2Gq1cH1SjkhQbBr7er4fGa8ziBr1vRoxVZg2xyVjqhrM6gdAZEAxxf2vxbxeV7QA4CcEWjG9FW155yB",
  "key23": "4pxjjpYbyH6NN35znbgJvt994KuQ3YMGsNPKoVYnxWRdk5VDYmAsiLdFYEJR2rvivcMvoNSaxDLKaXLjRyDUWdhw",
  "key24": "3oAiiWXJrUVywrekvQ66UMKy864FzoaYTip4aD8SBHJRqt4bmtmNawDYoSTWApoxZBTLbfHEedUQPvXt3Z8Z69QH",
  "key25": "yaP6t9p9MSDzpShSUuBk66LaTG2AEuDrvm3qWw12nKSjRtuwkKzGcRuPjvuRVsmyu5PbRVjYn8Dj81kGZxT4ynV",
  "key26": "UyJQWVrK2oveXSjAuqCxSY4DBPQ6AW6HEARjpiWcJ4LkdCf4JcZGzz1wE36AnYzDK8KJxmgNBgKfcUniHS9Grtw",
  "key27": "o6MDexqPue4mXfcmNbb5uUqNn6WD6aot9dknENoeMUqYzaotsC16i7pbGFJq28G8Qjh4pArgRcuC8bBiABRT2WJ",
  "key28": "4ZQmBWkA6mdKibiovFuvoGyM6gz9N2fHK8V8Uf8FjGCDjNHK2oTeLrHQetq7JGidhAvKPTwvzkWUKS72i4ZsbLxC",
  "key29": "4ydvWFFjFX3ZctJohNHrJ3UwewabHpUSz3n2mJRE5TZ54RiSDH9x4LrAdNKXdP9PGBQjDcJQsN4mvWuX1hiVTfNk",
  "key30": "2qPKZWvSaCmcuhCDLLvQTcQr6WfZNVpCnir3XHtdUGrX94oHsx6KQ7Gjuu4QzTQkWhxjBJeCWq1yp9xxXu4EnxqF",
  "key31": "2xLNdmLgWqtw8AU17mPR1vMfryvTYnx7gxnnyCuZYVuXEqkoCWVGtstq2exHYLVNKggSG3CZ5TJhkUQCFrzFX2aQ",
  "key32": "5qpscoTYz9vk7aVcue8BSR5NyLt6LxWw9tYfaS8CuDN6YjGpY29zXnpCUbgCP2oT6DDTqk5kSTFGLztRoeYw8WcU"
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
