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
    "W1xycDwCGgxZkGzD2XqH7Xg82jsvWStTNVwmHcBxe2eHuCnmSx6VbeHceYiQ88udQ5TCc2JJgywp58bMHStWpHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPtSGS3foqeNyRm4dCVKQrSzdzcJcAAehsYQbaqMgK2ChvGPRQ9fkyS6dMu4MHwYhNhV5zbTGrTvAr7fHucEYY9",
  "key1": "UVeYz69dhggKuzt1sfNRimtAtLGmhXkK6WhEY3BLByR5feyH8npceyoWPoTjVp6BXThgFoZg4tWgmajk4EeUMmf",
  "key2": "2NzrZC3ygEtqLf9oiZfipjnDGmWcvrJPR5nytoiwa11QpHUEf6iaSYhj8xMQ1ML3niRjiUNFAo6t9ihQeXppcgZh",
  "key3": "51z2Sx4UMyMotdep6UwwSVjJmUUmAegRc5CWA6zeoFxx4ZgL8Q72gBtLXug5aMrvBjmkfov4PRAhByU5jCmXXvmN",
  "key4": "62GgrErVLa3rvGG3rxWRb5feybSY5LSDGK4z2YCTrb99YrmaVzhSrBkD2mYf1GJ78zkjU13o5VzUAE2PNFARv6F",
  "key5": "36CsUTRjdWyZjSb7RRzYf9sptnzDtuoy97xUuR7kYxXZDGgiav1KJBQVqxQntFpCWrQj1ohrL7dD2pvWMhCGNMM1",
  "key6": "5iGfGrWnZKfXG7UrdFpv26rZsF82nCMtgjGFsfgQ4ua2wEXqtqwzBLnBMNadAkmQsb6FFGMM7A1XjRA2R3QnSK1c",
  "key7": "3NHoL2e889cnspfLfMQwSEoqpQYNajYLBEHtZX82TyWCKesZY4izGCiwxKcQ7PrJ8TFvhFuwF3ZP1Pz4j5bFR2q",
  "key8": "3sqe4vRoNgMxMSZuZA1QEN7Px3D2eSKhUhdgviPm3T916NnGwnszmwRDBbpLDawvoHnGRURaHh5nBJ2qy7NJEUSZ",
  "key9": "5NVYU1k2n55oduPk6xUkamh2NM1RSvHbQUuiwvzqWyfj8TV7BFysyjzBiPwD98BYi9w2XbaajiLKn4JL4qn7Vujk",
  "key10": "5ULzjZmajTPqMDSn1TviCpm6PQs4gRH9773GMgKyrsXQyZWptveCefexfCwKbDs9dQswNTcXEWVc5nnpvp6UUcUo",
  "key11": "2f4a3Q8AAvjs9UaCRmkeKdzZwmfuzH99Nsb3v45JhMVSSHeKMAux3gXakYhFKu7C9BMB1kERBAhxhmyoJHd1Pjnc",
  "key12": "2KzgApUqicc4tgi3PPccmLhXMkCxn7KaPZXsfFr3ehWkf948UbusmyUpWu1VfoVmGARAbH8vXj1bXqQSS1oAWA3M",
  "key13": "2pc1AWaouVAB4oTRHNqX9sLWiFeaKxSJuhotN3eg9vkquGbGENUaHXf4vFxrZXKqbedXsh5eLwCG4uEy8qgYJSTY",
  "key14": "4udYPrJyBad9uXq6xTeVbbQp7TkKQvhkcez2WTkzTCjtVZAzf5Bean7qtkjrFE35jcCNZmJhJqARwZLmMJC1Lxh",
  "key15": "Ljr564dqaqLzStyMgRxATT4khw22yZCVkA88aom684EJWbGffevXvZLDGF8u6kXJ69JNeMcFAT7gY2nRyJfhgwj",
  "key16": "3GzZWLCRzGUdkARj5HkMi21yRzKsT2A85iGuxVh5xaSC5AEogLpuBwDPJbbUoehrTZiP9pTG4YxnYKdLdi68ESSr",
  "key17": "QjJmsvUuXYJqcd7GcXEdNr8Cr59sxeAyMVnLF9B51ofwRKHMJ1vFefPeWu9Y3Uu2nionLJttLW29hcmLW9iBPfP",
  "key18": "5yLU1jRSrCEHQmCAGqYoSXz4C2nPdoQRKnuP4FaNUUbZ8M4pYNKLF3c6AarDCpeap4Pd7ARX9DQRxVHYAQP88HBH",
  "key19": "5qBUxHNjxFDxJ5pTjvD11fSzcfQAUEYpjmJ1ZcDPqbPh2CmtwqW3Mgqcg4ZEonyE861TJzhXdxa2FsHM4YQYAA4G",
  "key20": "wDdeJnGWaxczwoev1Aa1CyLKp93atzG5woVgVf74hGjmnaeMA3vNGiSHHgpWgUMd8YiWF5amFNdA1ZuqJ4a7vYc",
  "key21": "4g2juJGMLbb4JhYGHLrpu2eG9mGaHWQYgTuE2P3kz8SrUp1r1os5vYrXK82M2HgFnXdRy33u2zmsYXPPL1w5Pcu4",
  "key22": "5atWMvMCyLNos3DMosGhxAACt1ecEmEvhVW2hT5Hx158PeBoboSJPedMVeuJxajwiKes8S365FMMbv2arqTWRC9w",
  "key23": "2sQpL1uje8vxEsHypo6JW2Zo4Kx7R5MqCf2dLKZq5EVkyWhf3XAvWtBFrKqTv3JHsCJEW8Y92NdWag8JaX7DiA2u",
  "key24": "58DDLCdsJ8CU2zRtXFU7hZ6i7xusUJPucEsBrt9WTbfTe8ECXqDeM8vyWZNaHuJx9i7kQJcFC8r5yivQDKrrZrmi",
  "key25": "5v36tjFa9LnYisNndTr6xGbHTc9SdL2YQFU7MNRNixYdPsbKbZSCZBZJ4DTqYg9dqY39y8xLsZxp2Y8bNhPmguHv",
  "key26": "3XewBbdz5fKciBJpteMZ483oyZdBhhtpYbovhSkodXBYWFK25i2JFkCpeghM5scQWZ4F3HVMEiTij8mc8LBGq4hw",
  "key27": "4aN9thBmFFuFha7Nh8bApMo8qPTjqipmygoXPMYpixE21jV9VdjgakcjbavjhN5MmDq4vyWug7Ndg8SwCXhcDfqN",
  "key28": "47gAa5mkkQpbg6VcJJcMnYGexG8up4eMhBpwqkjoEMpBktDrLVf2KpKvBg8vd3Ufa44iD32eDb4vo17Fu4MLhFhe",
  "key29": "4Pnqd6vZBmUDRXuRzuoccVfocCjLzod5JbfYp7Kk4jSnEPmeFBwF65t11Pwk7PQu81PmZZeeTH2ZMYnnJUwGrYpj",
  "key30": "PGbqtAN169vFHPw1JwVf1vXpUoJB62TpPcLbdckcyTcwT25VnWfmWBFKauvwgMAy52Mn3nhbf3NkVwKDhudD9dh",
  "key31": "5WkrNtBpCrzU6aTuVsNkpzBmBi1YRJjxeWvVnT5nQAdy7ZhBdangzp93C5VqgkTVHMRUGqEcKCzbEmE6bD1fQeqU",
  "key32": "8Pb5V954XMTWvquzwRkDdfh6khuYp8AF1didYxJFdKDmwmtgHvovfsVNZbfsv8YZ6A55i5r4Upfyto8ZDGJ2cZr",
  "key33": "3GY9T8JviUVFKacH3PcvwFigua8KgUaqJ2oNHSdHEhQCuVubtubiLd61f9Bnj7E4GFZQoB8n2vRUc16eEikELzpk",
  "key34": "4cmmDEiCHuVCkdBpe1MRj2NE3KGJUQR6jzN6a2sqv1Q59cYZnVc9Ajhi8F4LDyT3x2d3PmftoD9QBZkHAhSdqvUP",
  "key35": "2WKgVSjpMAuhRbMMYPpqtE41ZoWnKiEg6YUzaTFwzeFpyXA9qTtUHKaFEzheyP1kqMRPGTTrsXkyQN8uwa3cReLd",
  "key36": "2on82V63PMb3zUoasXZ67WPiE6WdZHpXpHnydLjiLuSpxBCbdNo5DfXReh9wGwCVvFjy4Z8hoF9FLpFoExggeQf9",
  "key37": "2Q3fvQJz5w9UvJCtJXWD59pvNiiduRaDVohQCnr8YY9uJ5eNJW3rP2wEfAd2Yyq2HNu6tyeZYSjtGLHbLUjJhD1r",
  "key38": "5m3NfMjWRo8b2V5riztPzVHFNBW8HB7u74yTFU3kZyF6yeVhoqNYurDvoa9WUxn4gYKLENcLosYHJf2QMrKvEKY2"
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
