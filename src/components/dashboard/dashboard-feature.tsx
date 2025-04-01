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
    "3Dn62SraYtXgG3Q9WB6XnhA8CimHJwQReuPobU267z6MpZjgxhjw6ZQVfSnjiAp7xtHqKz2RJryxsP2R82UPuWEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uq2mA6GU5JvkANNP3TcRwL6qx8T2gAsGh7RFp5sSFJCMXUym81Nf6LwRgEyfcJwaodSwHpBaGU2JjasMnSTYkHR",
  "key1": "s1S51q9kFHhEEAEjihWyUrHfQhmNJWXGh76ZsZNZfSxxUt2ZYxxc1zQnHCvhvfmtdNHbXRDtAsPWhwFKdBpor2D",
  "key2": "4k78w1T48vmyW9aWtUsdiSGqvj77WdnGjC1xFvCYu8sXof9zeefF8eLkC1c318qsyQi4a6wRhMPHBG18WGCZ2qB8",
  "key3": "2grC8Nnpq2b9qvDAUPa1HD1hzAtbzGymj3VxCywQA7LFez2Y8abwfBERRn3WQNFqnX8EoVfxGpwunn1os3yb9rnT",
  "key4": "4Fwhvq5pQjrhgnVkNXbE7bSFk711ZzovpWtZ4UHiv6C3xk479wzLNwuEiN6jf3xh6YivGUF3ga1BjWe4dn9LYYdx",
  "key5": "4dfrVYnDWGduTAtRYuCwojsf5sAMgQ6Srva4b8WVo8wjwNiQhWhV8RvWmc8gyJbHXYepd1FwPYEC3cVmxHb9wZ5X",
  "key6": "3DGAwuiNrQhtZgnGkzNep2Bpv3nau8Ge4dYFhf15fVUvgVRsepA7nBpCFQgKM5WpGQ9QRzdW1zNpf41tVN22rfpS",
  "key7": "3sbdRfGdsRDKmjV7eJF88Gg7WFtjj965MJE2SCmi8mrP95dPJXaZw3bZiJcCTakt6JpnVRiFEG6da4c3583jhbju",
  "key8": "2ZgA12n14h6VmiGGt6UijdNwg9Ac8awiLxRYqPYqD2gGsbM1iQ9BSZaCo8bj9AQmKrGUnfEVDSSaWNBmXhEBRS7X",
  "key9": "392D4334K28DqCqhdLNiryPkdiVC4Rx1LGjRGQ5gDHPXoPDCBDVw8vGkxHuPE5jLEiuh7vpARFXy4i4oujtrAbnd",
  "key10": "34R4tT2S2odAxhivfhobzKM7UwwnFRVoZjUJaDPKNPAxGRHf9DpBpwyfVL9wUiSqW5dBGAi7xLCUoDzTJ25BZk6y",
  "key11": "4RwQztzzC9CwCX8wBPJeiF2Gm5h6FYrEVvhbff4GC76D7if6g3vAJGvKNbSLgvXUB87tA6Wrk5bsLWUHHoziTTVH",
  "key12": "QNqFiVGbxR3VfsJDEgLZFZSrabtkow9AsQ3chj6WnSaUf1pe8zBHh2gVBHnGz494sDCPCJ9GrgM6kDYFSu6kwx1",
  "key13": "5bP5ukhpQBrLtERciQbfcKekNqBTU2JynmSejKqyqedir1yhupJ9g4pLsNjEzivJWH3mMKp8XiDmxePZeJWazZbz",
  "key14": "45qxDKX6mRNo5guLGxdzomWbobsB1oBYYzWEVNRWigL5mV5DffhTfoGtBQrx1N4RpLfA5vGzpkrkBxZ7eetxd7KE",
  "key15": "SdJNVYskg1dxMXi7iMpV9uCBQipc1itX55nYFpTyck1hsu9kLJKQwzjtXTB1XXKT8iM3oJWTWXr4Jnnevkmh5Fj",
  "key16": "1WYDYsnksVDxVVyDecDwPm6SDw9jertVcqZeEtPmmvjmoRPW7EP8b9f9p7WfEWNj36BRS8LNkjtVQAnSdkhcSfh",
  "key17": "3WTXsZkBVMm3tUgGxCLpPuKxH4PbCkKZocH8bRtqwuxFwnUQpKmsYnre19QEfZMU7D9L893LPTuiQ2dX4Hp5WcwW",
  "key18": "3eCtPa6AmDbuWgM2PZecwFWdfCSvgi16YNAMCoDFUegkAjhFEaGhj2iFivAqcMaY7JzXCnhWFSXcwMHwtKHzWg7q",
  "key19": "3WdsQJpUsLxfTA3Saxq4PTAurp9jqAVhCdxT8RETEUP9wdhdyt2bNGbw5At6k61154a5BUdV1QGskK5vxCi1XCtv",
  "key20": "26wVpveQMwEprW5EVXZZuKWVY9KW1PceLTzhubawrJj7MTm6SyLX388GFwXQiqpxTc3fSsRZSoYB7tX3CANuk2JE",
  "key21": "4HnsVDgt2PWLaAQ8ubHTCwic8n7kU2u5pFYs9EJmeURD1x5PioLdXBEBGR2VtFk8eRd6MGjeGrL8NUt3McG1SVAv",
  "key22": "59tUA4hq4Gpqp7T85cy941eNShXYcnLtYqRPpxU9dSYWzmZzBBNx4dufGAqKWo82HTJ46as32Yh9apC6EyMgC1FK",
  "key23": "3h2Gutj78N6eD7wM4y7URFqbH64x5Fbm6dMekYX4WGCamTpLbgk1YnDxwu8FHX7dbB5LbYJLCXUv6v4iMn3bGa3y",
  "key24": "58WPfCvGNX5BM7a7vrdQ9omaUwsmaZy4Aq7oXFPdWfHC1jJiBi7a7jESsY94sumDNeEZ9WAnPrSsg5fLsMb2LEwG",
  "key25": "3tmgric9fCvZHsswMXuxZp53bKTpDRok2XhKB5pw3n7LbHbv3WWe48obmpM5BwZZ8gsQoBTMXYYo9pWYLwMHZs1T",
  "key26": "4hdbe4iBSPxPF36WL4C8q7BEsTo8s7sZdNDrjnKy73XwdK58iWJ2QgLP5D41xvMSjKZ6bv3NATifCrnv8Yzdfy66",
  "key27": "55V53EHLEyc6rFeWNScKuBskNZC5UJoJRS7HL8ZZ1a795kbJj4bojUsHeZYNE4sHguGEaGwRPXwgpsj1HCZCJvVe",
  "key28": "3qx1m9HpnGxakt8QrNF2F1e9BFnGCo8qCsZpEvGiCinKYkKLoDSDmuUuMdDqc1PdM4AYVXaceSbN1Ni3ntaqmT1q",
  "key29": "khcEYsMWWUzcFtegEtX4R37WetzXGtuKSXqugzECZhEs2hj8K3MJ2cu3X4oW2LgNpBuVXjeFRPQijYoPak1uuan",
  "key30": "3E9Kczk5DmzgM7g9D3w9pqL31ZXjPsyCCUkNiuBUUjhpJt2vLguunzyRBmeFyFx2oiuVJu6LdL32n9FRsBnEpR9W",
  "key31": "q1tmKKFF6ukRFfNWJGWv2EopoygvMvaeCgLme7PmznRBngP9fGdbi6M8mrYAY6g7Hen95qVz1q7Eroijnygo2go",
  "key32": "5pqRUocmzdYgUETZekq5D7tdnKUgGB2ouTYsn3nNWZmi3AfcVzWMZN3h78WQR9KTnpz26z6s6y1NyJhPxPFad9tE",
  "key33": "2poGPyULPgQmFwzHEXWs4bhVraPkFSQA1WG9xirATZmWxiKvLGbJn4cCZHhhdpRaftNgs2uM7knv6kQd8sgNCXss",
  "key34": "2HwcAsct4uiwjzkx1nB41zsYPo3JCtsftPtPn1hVkESn7Yf8yRVXBT2kCXCL95rcXpPE2gdNgSCP6Cuqp4qQ6HFn",
  "key35": "698vnGKdKSabETKG1zPG6ihNpyhgU318CfoZQuuujwbxhGpuTFiaBGH3B3DpxcwcjDgyDnpfX6C6TUQ8ZgKfSYB",
  "key36": "pRjEHYNSRBWMqJjurqSQrS8u5fmB6tsmCsuczrXfpTsMcvyJFu3HBj1c3BP53p1y1DYPi438EuqB1dHngnvHqF3"
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
