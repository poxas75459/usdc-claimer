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
    "59vD5WezDbFPQXxVctdih1kj3PXe9GahMPVzCD3F7iLV1Mi55QWP2goiaybZEUgpBQ8UHknRHqrAfqk66JY3k9Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E88ENciqTsntLcRU78wCybVJBcdagZmVugQkQ2vGpu822aUniLBHUJeeKvRgA6G8AycR4kyYExxeZH57L6FhCeY",
  "key1": "3ZfAj9RxwcnQVwZx85sFYDNVyRAkwju668raYuVFqFoJQMgw434PuaUypypex5JyP4BG77LdsgQCf3zmLETZrCLq",
  "key2": "UT7GBjzw3B4k7ntCYn5YW3AGuHqkXBKBhihYNzvVmBy35rYXFnyrTbbbRCWT2mGCS2PXfSDPCGYwm2xmJuBtzCv",
  "key3": "5qoSCzC4EHYddHqAo92ytbmmkkNqcTx8icDhhGV8Bqs1cQQhP8dHxpC9r3FkxmVdY4s5m9gNzKPtyvqXBEJG1VTr",
  "key4": "2YGKYkZvhNn5Mxg3i2bmkhgPnxdMrf1boKDB4vSjbDt84mCVRwUXPYp87cmJ56GKJ3grvvfqLRsrpuhPPUg98HMN",
  "key5": "j6NJFeHxVmA574Huzt7HaPdPAxwdWZxF5FGk7JR11Nu89qsWpXdYgjyJ7LT6jn7CgsjLs4ydPYAsQZkwwDbRA9X",
  "key6": "38Kf5T9274tZUrRjsNwqaUy8peQMFzqzJ2psjpfKgGndSDF6NTe6cSYzNo4tA6tpWegJMYSFxcVuB38MYWELTzhn",
  "key7": "2jjCL1THazL1xYj1Yr314R9WG1be7gXYNZb8Vd6X34PZ5U3eqVYRsS73TBfDMe96JfhgGD6ZAdFzZ2SDv12hhS6N",
  "key8": "2GPfeZsiBAbcQFXpojLDQLQBxhx8eHZT6jYcwbgnh4yFyr9oE6Bg19LtUiac2gVpuhnAgTsJ3GUvCcX9HarDSWzt",
  "key9": "3da1ys7t8zdDae73jsZi6K8NyKgySC94ec5qgxnAowpBLMcnzqVG6ZoHA81HbaG6eojTSLWiENk5qNcMDKP7fWmF",
  "key10": "4SRZKB7Dj8hs6Z1Cnpq6kxqsBxX7FtSkoxN6bcGrYN7is2WaEFC9h1jxooJJCMny7vnCeyLFvqgV3DuLfsLJQEzG",
  "key11": "3uYgEVMx2uEPLWptiKa4JYGGF1LkTbiK4QhazLTMjbabQHJw7oxSuFyNFuGMkQ4E6KoCU1UV1cTWkQkihD4jM6dF",
  "key12": "3D9fHaLYk9tQzG293fC7GJZWMmXRbMbahzfBW3W4vfVeja7BJMsDKnh1x9gvD2SQ6mR8ksSCFX4mt6Zj15T65ycf",
  "key13": "2TT5oXxtaBbrMcrmr1nP7b9cr8jdZzJM8sbWAPSNe9qCpYCTNSabNu3AYVe54BUKcJQMLs1tJtwNZPZWrQY8j85q",
  "key14": "4Zq4DSVf1H6ZtUd2iPv9XSmU1d6uSPDz3yKQoco9z85jJC94CjPhpz2E26JL8SQRYHqBgefiVGpp17aewpoHpCxK",
  "key15": "KRxmFkVb3TNauamnRPGad6iCEtGzKuqnjufsgGiRjeRbg6kx9GstDmfV1Q4APD7USmdfQKEBzuScjeMicvQhzjY",
  "key16": "5ArCeFotADbdU3Ykm16DuSFnHWuZwJ5mQMpm2kcSGhBR57Kx3UMaV3GNj6ztSzU8FURjD46mkSn7wY1s1BVZHHHM",
  "key17": "vbmCb7uFKaLbGtLaR8V9vH5WLdQn5R3JqDHv8gVPmdenLM3Q1DY7fADMdqKcmjzk69p5cKrjQTyHYVeXLXp4HaE",
  "key18": "5SsqaRNfRdmARiyxWN8KgbVdEnb6j3DnKbSdXt53RtzDzgJ7dy6RFv9LBLv4hQhkUipJjmMpQ9UCncDVS4NGfwes",
  "key19": "5zU9uczVDxmwf223mitkNpkhHobgEK6dvEAoqBXVD9tf13EQ98rTLLKb45e87VRd3r69vdP8MRkCwvQcJeDJwx3W",
  "key20": "5tmL97PsiJPW3fEUgMey4BsmcW9NSifrcNCBDK4ck3xvrHZdXs91oNXaPjj69boqutG8VQ8wCznnbmg8GS6f1gzz",
  "key21": "3y1NY6Af2iy6eKbaT4Hnsys9ra5KnP45VhbVQdWjbxVMxyqA5J9CA4c3jmxMA68zX5ZwxWX6aEWo9F2624u71TBU",
  "key22": "32hxwtgNNbT92SyHh5dtQ39nVvEASpusvGj6UDrLJzCB9J346FuHzV4arGMEtDBs9tS8TFQzcas8mYJYUP28yeMk",
  "key23": "o5UZeNb1AAijkA8837kR48BtosjaY8to4yh17fdrpLz7mqLorcFEUsTWj8H5JV9Z6FuzbCq1xFpocFVL93DMrSU",
  "key24": "4hpq2MyE3bkEG7TMpUWwLaEDjoCKBytPZPnyLYQtpN9Y9UsUrP2wHkChk3bWis2ddj7aK1odf2yde2bxAFu6fECP",
  "key25": "4y7g6d5b7NHpxTzACM7gU4ea2uKdnRbTvEDtiwzcFSqJ4Y7xNGNXY2axDabPGBNb14J4r4yh4Gnk9S4uzsoW3RY",
  "key26": "2DbKFuNY2mNJK49RjUCjc37RUEfhwuwxsMvMCo5vTVwGKTHK6kByJZcQGVWo1jNaUsL2NoraB3Dib2fqBgp99TCt",
  "key27": "2KK7D4ovFJp6ffNQm1SDJf3LDNcRhXRVMYMpsY4frpkEGJYcoo4SPRTxfxxZqyYhhu4Woq7rXeLtytqSGnFL2tR5"
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
