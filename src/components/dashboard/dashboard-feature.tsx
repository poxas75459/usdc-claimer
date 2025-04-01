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
    "3RyrsxQqeHgVEWeftNJE3fHX58KusQ1nVi4M6aXe95WEuo936wYsXcgKcGfPmxVCVKVte3aqvJjfLVtqMPVNxWrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utecwdRDeRuFEVVZ1XVZGWCN8d8qeuH3TKuVAaH9f1kDmwqtzkxBtnq5DYeb9D3aczAzBagHjEepZbaXwysXmSA",
  "key1": "3KbZK92MqT2FGN8asEKFcT7M61aFEJVn1CZdWYpwecQ2nJnJtaZKrKPFTiNY52rVUMQ2YqEwZqb7JSmWEnkxn1Lw",
  "key2": "2pFPFhoKAD8bLPXxqBAhhKcWfR37Vod5PTjdfoPcGCpXCyuSDZ9HbhxVKquXzkH8bEeg9Qmyh7VPipeUqRbzZ82j",
  "key3": "3TJUTkqiBFJvpgUd8Qf4DiM76G1wfQ34Pixfj83oLQE3Ve2utGTV5KFngX2PnDFCFdZM5aqoUne7FPYMFpnd5qaU",
  "key4": "pUswwLsafsjtoafTJFMMAFRpYicy8pEzYeLcRyoJjjWr82AC1BdngmrsfEAL5YHtEDx9v8Jx5MLk6Ark5dKiz3n",
  "key5": "3pjk7D2VKLCjiBjB3iGxs4BDJLa9bcnmH25oBGceDZPGWhYpQs6HXiZ9xb8zA7RyJAS6mBeP8a3mjGFguvyH3Rfx",
  "key6": "2qvk4C1hFTWRBhgiNTcrTXH13PKkrZ2H7KjJ51raBjHDmpp9fqpMDdPocGSsdRRoKCSohRhYp2K2YU5xZMXMmu2n",
  "key7": "5iJj7gdxZQDFWGp9WLXGYEduzAYSY4ctVBDCtgaETFejBMYx578drd86kxFfupAZVrUL86oZtJE7Uy8Y65e2qFQG",
  "key8": "578aMnJaKYKL9qtYEvxK93XSYu5vs5LTj4bjsXsUAC7v2aQWjA1djKiHk16rk8ffLxuW1zbEXjfTtGbYyUpECc4r",
  "key9": "BFhnDbR19cxGpAd7gbXKqnpWKJ47JUzJ9AYgSovigTFoargucriGGAeR1eWvj4hdwUaG99SLdpHrkyuSmU9aPmf",
  "key10": "YfrrjFX1kiCKzBYcsq8HNVy8Gh7zE881Y2w1M6vGLHugjmC2mA37Q9zRTy7CqrRnT1i9SHred727YAFXeoGpJfd",
  "key11": "cTu9s5VsieE3qvSaUxLLhrSRzmixDwZTkyqAQnhGwFpzBBrnuRYeMVpV6D3EprAP5BFujjRN6RJ2FgVJoJjqJEF",
  "key12": "3UBNK1U86GX9qi3x9dk8f1RuzSGsJyVihpGNy4Lu3nqYvD1JkBfcfuedwVAPqfCyEn8Aa1Z7NFoYvELCRDB4YTGs",
  "key13": "5C2NuCXb1MPFCCUTYNhadQqTwWr1WLQgC47tzT38Z8Sph6bD6rsHbAH6ZquqKC3TEEArgxLCu5DZNCXpDXadjgP4",
  "key14": "vV5Mrkzx7GC8oqDLphx5i6kva9Ru5LANGVwz8i3NF8s9QN4svmHj6SoWwq7kvUdy4LQja6kkJ5T6Dq6AmZYJM1k",
  "key15": "3LmXfe2D5QnA3DUwJn7mVvVWoNAno6vBHtsb6En27eoYWqJtDe8XC4Lc8tngSBoFTQZDm7Tz5GSy566ddJhJHQ9Q",
  "key16": "58ZGsPmCrNjSikLQWkfVNqTHV5iZ1b9jTkbSt2T3F4iKeQB8PioNQivxxN2Loa57N1cNx5jJqNRhob24VzPU2WZR",
  "key17": "5bUtaZX4vMDQ2QJjJkgN9nrNrY65vFRwC8Q33j7KmGowWg9PeNJ5ibYv3NxJhbYuZybLzAtTnynhn8GRgEjF2k8M",
  "key18": "3CG6SDiMhQbD2ZdkjZZJbCVnWsvTyaLGhzc44J8wBie4SJZE4LYkMULA2zWhNWENd4MMHkkymcttr7aQEkbTxip6",
  "key19": "37hQaGk1DzdT7An4VY2v3wz4FjSZw3VpnPvZ9gFK7xXcUggL1RUaE47KNitVMcexVui7QcNJCP3ApFA9i8CF2zSs",
  "key20": "61YX5vgL38CmuYqxhX6rBWGte3mXviCCNvkqhjasGLxpT6zLgE2LtjCx5MYuS9Fh6YfCrmBKHcwtWk2x8MPFonRg",
  "key21": "4ZsUJYrAcavBMnVbppJYCg8K6YDwbPRtDaRvBQ1rQJE9abSpmGT64wR6NmikN2PQ1xiW9Uyb57gYYEucwRWN6Kg7",
  "key22": "2pvNYc51s4eZicwTt6noGk6n7XuKwUDxTdKHLSKH3KBrS9cUK2bURaTmL6aX2C16q2efRJPYa2sMUYpt5FVsHWZY",
  "key23": "49FtTQf5HwT3HQpFHhPWsMpC1VdUVoH7yWHpZ4TE75GRv8tznt3wYue3Mqsrv2DPyPzd64uzfnLiWjJQhTLxxCgV",
  "key24": "4ztAbFVS3LJJzsJ1hmmtPs8BX2KsAZgt7CpoUzYosd8zwLoiy3PkqmqxzYEu8SextcUnwdmcwWFFJx9nxWYQjUAh",
  "key25": "3CXG2SJsWYg2T2Ae5Hrgnd1z3dKSD3dWhJvEvrvjXnFZX6xRUDjABk5bLsaCyyJYachgFKiXJ5VL2WZcpR3baEkJ",
  "key26": "LDywKzv2ymATxVNJJ1k2DrhRKtLxzZwErn7VqnZwH6j2pqqG9iXBdJfxLpwoCN6o1yUNBuqpxocyUQoxF5nYVCH",
  "key27": "3R47yyk2hwL1DsofEr3rM3QZch2tRPa1kg2GHpL2eEPAiHHWKHS5aHjSTtBVPCLcc4iBqGT2UJER78NWMX2xxR33",
  "key28": "GKngBjAub16SQaFog1gHeW2TBhQi3tvUbkktpK2VKuoAHeGexqYofia4iw5kZvE37mKqLscT5NRgMTpmyf34jVk",
  "key29": "2x3nWwGshAEuK5gmjJz2njY1bzrSpab6mi6nZ4aahTu6yw3Ch9L7Pm8yDbB8Q4vxYRBQqbjzgELyFZ4SMmFHvreD",
  "key30": "2QFqBkH2v8zqdXFBvZpdLsH3mUmQov8JeEM2GsnfQqJNAAjoEAFMP3NozJn33H9kafiunmKyHaxQoGtouLZct7Wf",
  "key31": "47cdLf4gaRR8A3oLbWT7bDByRJNkq5bUm328pEiyiyr84t3mBEvv6XX5fkhwG7AMw32QyBnHkEaUBuXKgLx5qWoY",
  "key32": "4fmSv5Wo6jWYpKY1UujSdpYWtHSeyFNMm9Rw1Q1CCdHiAqfTyz6tQh8aKMSHdnLaJZLsapGpe2oZvCDLvEHtc5C7",
  "key33": "65zkEGGkNbxgXpadpGMmnX5CDHW6dCYUoqnqsfmwfMz8bZq74g5HCofzfs62j74J5mBzDaHnB3GWAFPhf7wktsok"
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
