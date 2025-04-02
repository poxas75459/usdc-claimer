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
    "39RdbUG8ACCYVEWRyf1Xd94F17VuMmv2ydM6ZZXNRBcM7zzHsvNLjN7SnRKE1dQw6X2wEXe1RhA9C8KyL2v16qEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQq5AgsYASe57vQx279dQDpHSv9vr3N8WYzZN5de7HQyHAZwdoRPycuC6e8AbkaDsm8bamDmaAa72cke7VWdA8X",
  "key1": "2h6xuxMHqRkvX4UBY9pnB6BHeyz5hPSxMLrg8RjvdQwbP4gbHzVSZYZfrUeZmnmMNZ6NxaBDi8jqCFbv1yk2ao1T",
  "key2": "66NiG5JkV6bVkuukJeovCXvNYtJqw2B5Yrsz4dxAvuYkmrcimkodaSryPJiAb6UbzmEsG2jo9wWnSXGBKLFVSczb",
  "key3": "4DdJPJSu6tWpENQgVsY6H53RGpDgjbKtwagjsJnnxZRKsYWmJQhUGEEs5yF5xP7xrC7ydGpCRCQ9hkzW3pTVVcYa",
  "key4": "JTQEBY1L1ow6mLLhwBB27XEVyUmVNCK2eUYcG3LnKsXQibAHvsZGBiVaabCyiAtBzKRHX99hCHFX6Sv9NTFoLBQ",
  "key5": "5utbG1iyx5oWpCj5ZKM4Be2SmxP5dPsS7CCrGqHR8nMd3PP3JJxBZfhZS96K185yBPNTbzeMLvoLFBpTrj5Ekib7",
  "key6": "5HaDo656GgjLWNGEH3Y3ScfwXqWcZQkygo4utrhLHPfqPh9wJtVbm2gVUdwhLt2dfJ3FhR6SDwu4kzTUoG77JrBi",
  "key7": "4wnmcfudbBNK84Vuo51M56bPSj25iE1GgYZseVTbeVPtwu1YxiWqD1LMxqsTPRCLA3rzWgp1w6cpw5fH2rA9odux",
  "key8": "4SKz424k3Zau3qd5WujqQMZxwism7wZDkMVHGNDMHLdhGPpVaecvfKvsK8zEhAUkrVeBADg3MSXtoTN9BGDLNKR",
  "key9": "4fStXyFKuPnVqFUFcozyqDSEMWHfeVdDiPMtfEHQ52NZ7GSz9Nnpv2ZfAR34fxC6s2Fq95gNTxJNQmhHWVisJG3D",
  "key10": "T3Z8WyxRJBMtBbxMG9DvKTHPqfRpbE9omoAJ9kV5HnrzNjdYbSBWZuqHBpvrhtVe9rm27Qi5GN7K1AiJUM2HiEd",
  "key11": "53bsx14RDSfYbd9bQKFzuPbzfpFYmS1S3EedPcXhvGuR7cwXjTvg8yLvyMUA1S8sHRAj2Fk4swhPYc17rPM34uiD",
  "key12": "25AToyy83FMr871K947EZdW8yxYF8KzM2vJmvnxm5uMXwXcwu6RhTN4CPs9xE3WbPVoB8nmCKjornb326zV5uuyx",
  "key13": "4K3sZ6qX8mARPcmw1nNZwA7xvGEeK5GsAGDDLLLgBo6LZRBQTz8iBy2YuAj2ncLJdjZ3C32oW5WibiR1VXtEKC3s",
  "key14": "VoEdzAiR6WE9fXSDt9qYNKh1s4ivKyxVMKNFdbV4JRACXw16aeuUuTESp6GhGXQ8BxS83XAyxhGXCDYv4YuZuNc",
  "key15": "2Qgk4AdzJuLEYeJjpExtcQTwU9JpMEVZTqNTjLCaApmZaCL3NHoHGADYhnMgRhZMCH5iLg6hEtqBtx2ZuBVRmpqi",
  "key16": "3MVW8LkzrYdQMumLYwbwyNTER946Qj4x2zBqsi2uj3dEEPt7P7ezX5Z6VHUZPogzMVh42BBrrc6hw9dA89XszLBW",
  "key17": "31WS1s75sYA8nBHn5BMBJ45rMmp1tBQw4JAMKRmmg2iARTizcpL4a9i4JU3R2BXAXiPUpVNeg9wVuojkqXHzu9ZR",
  "key18": "VytWQMa8Dsb2Mf4kLaJCN5V7upW12JpkPv8wpstEmU7Vd8C2dsUbSMqnfABk96qaBK3saPog9giXWiJ22j7JB7D",
  "key19": "64K4c7h5ut5saTVxY5JdfEtrcHmwq4DBRZEbJTNH1G2tRwef5VBa4ende1dzkUqibhdBFjCQuqPHz2xqtfgVEmXS",
  "key20": "56JTuUyG53gXA1BFsscpiCM3m7Ao2kaDsVK3eHPv7fWBD6DwdHw7m4ffPveu9hCHR9idPF31tQ9ig3Vuy5rTp9Tq",
  "key21": "48tTgsMxBdnfpckxB5BiR4FTY2z9nDqVzAijYVjs1xAbNnnLwLA7EorqHz5xc84aQzSXVuoEC9J288gcAADJXKVD",
  "key22": "59i8XTmNdn1otKQEwxEQRnX1hLDyXxziNvKZjfaviv712SCT5rm82bkFEk8Dy2Qt2kpTnjKH4ouVendLMmDDMqiW",
  "key23": "3XD4EArEtW2NpAEMn42hDVeVetG3quDdTjZ7mbfhSy88Vgzh3YJTUsbBXTFw5UmbkqJsNfXjdq84bbibZnutEoGe",
  "key24": "43ELXZYnAQyHtVazmNxDFTiJR1amoi82eqNmDJ8W2ge5qghQdgirmnFE5Qs9ZRkqcZr8ygG8c9jVUueRXaD6AG43",
  "key25": "3fD9onsYbGSfcBSMk73R9QVXhA2nj89ukA6XyRyvuBHUCcZaSPMrZypuwu2SnJWkQUy4LDnZoZMSgvw3uzPFvRdk",
  "key26": "2ZTnukUfY8UasZbe5vXf7H1JZdVNytVPPwZaGYX8h58hQBriZv7pHzrUyDwPjNn7FKTuySM3Np2qnCzwNp1F6HUW",
  "key27": "2nUVSje2CEfXdCZi2hpMHAo1LdekxzWbVVbttQSoeKeZ37iVvjeVLrgdHYv6zB1pRkXFJR2NE79brzQX9uhrZP3H",
  "key28": "oxHH38FVyTDn7k4CXjbfBZYbb98QgLJ9rQPdhTsjXHKzGCwt71YGhKJ7LTm4GTdBgSq8VVUJPGgWX1wozWspFeW",
  "key29": "55JmMBS4SwYVwL3AmZWNx6HCQ5rNMJuY7ZzgVkf18dGeRhUnzSK2gPEcM5mKvUXtmmUsN6pPKQqoBnrcFGHEnoog",
  "key30": "3cSyDcy111VjFEybm3uwrAvEoFfU9maZm26jS3fytex5oNonY6AXGHyyCHJ9T7sHU1y5Wip1mT2bC9LGo9d9zKiX",
  "key31": "55D269PqR89AMhssTSmnQgUFa1kjfwqC5hXWrnWuQB5VJexDyvqouSSp1XhRfC5gEyEBxRJDKgZQCiXDo1KKnVdH",
  "key32": "4ASncC7xQ2nJp43Tutff8rHqN5FV2LTxmyg6kUL1LCpHmunKs9ULotoiGPLSwcnVCC8Fr58a8kJdFSnxseDn9b1k",
  "key33": "5A6mEFMYsKaxwrdTCzKS9J485z6qf8ZXDzjAyndYBqp8H3XksztxPVcDTnP5hKpMK3Xe5WKH3RbjTcTgQddtSmdi",
  "key34": "2rbhnbr6oXj2A9MCjYa9yWb57xsB4wxH4bsLdibaoxF7NaMqsQ6uZVbcH3xsy21ephiP7F3Bj2snXBECWMJn4yNq",
  "key35": "vxKbcEHdaZaVBeKmQCXPtrd1dweaU72iz9t7q2Q8AcjmpuMawxaD5cZxyqmYgdJ1KRr2nMawDZ6BvuvjK3TDSMc",
  "key36": "4xYqZqCxiC8XQ8c5D7ddR5xVnMsR9C5omPySNdTXSMyFzBtkRLp2gPc8Lbn9BVMaE5aK1MYwt4G76kTSBPnVpJgX"
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
