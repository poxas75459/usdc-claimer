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
    "4tay7r94C94VHrpQG3TZeQ4xB3rY7s8X6FsbvTX7sByiDRwkvKHhrSCdANZuYrM69ZK5T1mV536kEQT4iELCn68y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uLobmFgdDPQpkXJ323SjhnmZt8Ncs1kefY4LdhsKdqPvApH191t8EghtWXZLx1LRaHLo5WMUsMNrdA4PLmodRHa",
  "key1": "VcYCoVdL3JU4qqjVrd7GFeRHDy18ySowzcwePue4mkBy2ZCx7UPTSS7sZXz5eGx8XzcUR51fY65AuBtig1VdQRH",
  "key2": "3MMQtoYJjutbHsHY8j2sMEDT86QcYeXQCEW1QtgoiKV1iAZxbFFC8uHSHfJ3iCxuVdY7FUZs1weE6LPVn8spTE7L",
  "key3": "5EaYEzXbquhsrieaEFad9xHy3399yZSPtJb73bbGPGzS5Ygs6pyAb9DY6Hpe4HvEybq2EwPnCivQz5MovK99cmRe",
  "key4": "ADDSmxJGLxD8iTSs3FhbM4AzbnRJR3SykxkgB4kzxqkLWXd2rsNPM972tM7p82XC2VQMwai9df6nj5SVoPmR82a",
  "key5": "5dPNyUG7y7ACEhgb6n3PTCseKYggX9aUHqtXF7yb2aRDhTxG5q8gbPn11zSsZ62F5cM2EXAbbTka6HQwmy2LhoMi",
  "key6": "47cwNGBe5DTFbouR3rcRKM1YAMoGS2y3YYomtFXSA52xf1Sfr85jkwAX741nua9JU8u6pMojnRDDCw89wTu6baCp",
  "key7": "2SWwFZCDz6h9FXDtBcJE4pFAGoujCQt3UTZ1MbFdxC2BMDv2bE5Nx8ymnfzr8jcwwZQTPVgchGL5AEKdoo93paC",
  "key8": "2U1K3H9ojJec132f6wzyNyXWxMkxAVE23sY4Ws86yEasWQAoe4bCYkrCsHuHRdzxpTYSnuVnvjfDFY8TdkGFQh6j",
  "key9": "54ZkounZzKKQ9yxKJUcVuAuGb1q2VTWjwr3wASHcHX5WrmEi3oYc7bCvqkX5iT9qFL5KL1tf2R8TVSb4qiC7VPWz",
  "key10": "24iytgkcNaFiRXPJasn9BKgghNVD1Tiqx8XmwpYp6t544vn5nFqeNH1MtYXWqwWHJ3G6gyzG1XTnkZx8SYaw4K1n",
  "key11": "3GDhrN7RSoq2EN3oTjFETydG5RDrmHYWh6rwYZAMKKM6LnurTDJtu6mgNH5e8iWD33TdwcsZv83hkgDYhdo413Xf",
  "key12": "4U1xHUTX2t8b7YqeyJN6Vdo4LsU5a4ZtT4fQ3Gj4VCTwMGtjE48kCxDLCDZuc2mgZ3J6FoB9eYUdwL5DqGaKJfEu",
  "key13": "yq9PmP3hZv65Z8kTSQpg8Z6j4W8cT8LiyZyzLw7mCsogdLinXxzimeYZPwXE9nD19JF5TYCo1eZz5zFvUshgyga",
  "key14": "NhP1kzQRKc7xs3CuKx9od6uJ5uBi3iZmQsxA3TF5ucy54AMe4cXbfsUAJAcZJP3B4w6B6PBr63oy6h3Jk8DbQdn",
  "key15": "5r3VRuJ481mKacPuveASLH6oq8eBfwnp6nCoBnUHvre1XpVWCdYgVDnEkM1VVSadwq6cZvqL62pqe1VBYCUKENfW",
  "key16": "2VxFwDYDJJif3anQTWgXPLMcjcpxoxZr9es813MUpKaA68rKbPruL4kZGj29ddUtjtjKb4yCjnvPUWHiHxmsVzfA",
  "key17": "2ZFJFBppw6Q6mEWPAKfxPrdpsMfRUFWnQPMYMFjoxLi3Vh9w6LqUmhyeJkm66v8mzwA7FkzDF8U79fyR1XKP1vZb",
  "key18": "65Xabmv2PyfX155h1pYxBjSFXHVLnZW7SzSX5owqPQ18StpckUcaH4vhUAy3ZAWzworqLscStpCGkqWQyE2owSFL",
  "key19": "3ctg9FQ89vpKRRstTsfaAtHxs6CSgEokzS2riXXxAN8UZ2MBXw6LHvdxEg7WcocimVKGHKhbpPdgdZFPadvX7RJ",
  "key20": "45HAxUSDKHNN1WguyfqH5dC2K49E7LDkcqEUzYQALD8z1xKiEFtJy6EVpGoz5G5FYjtP2J8Tq4dL6dNW6JSVxNan",
  "key21": "3rMMGcYEeMgDd4pdnU7BfJ4wxNvFq3ZUugxYYv8GCEwdYnTxnd7RfwgoD7VgtDbJpY6vuoffxzZuFY5R5wZYW4Zs",
  "key22": "56xUoR8kycRvYWMwKk8LoW4mFPEv5mSWoZFvidxK6XkVaYwv3T4LRzKxzoSMMGFXHzeiJoohPnVYMVbUiVgxD1CT",
  "key23": "5uBhoyCFGyJUvHpeyt7dgabgQtJKoubpWrf3hL4SeXs9o8YfNhUSU36EsBsPV83jbY1Ypn1XYrnLj7PNe7XGQ5zt",
  "key24": "2EXxeLivyd3gB2UrkbMTA1qZQhM29Ggcm42L8uTmuiUNBPRPJ3vqkPg6idokMHmAesBqjbRjjL7dRdK42nNMqR35",
  "key25": "KhphV4gTm5VhLsjx7F5EUS9mB863GmtTJT6yy2R1DWEuFptTL85N46S3NLFHCsQ45TAcrnGFah3H6EMeB3fK5LD",
  "key26": "txKQ2zuk1xQVAg45ZaDmqrtB7UhScJykdRMqB6663Tu7RUoKLUjTjvs4U5SWDwARZgbLRMMwNt8Ug4iFBFq85KM",
  "key27": "2HnutaRkUCzXbb3m7higDCz5cJPSewHABXPLe4axXK5ejKptEZ2gWWMr1qcdzr5MZWAnQPkYqJKCrCoRWBTZwAJS",
  "key28": "KLiReN5vUUqV9AMwY8SaDtkPmkWjCUEsGUs9L9zdF6AoMGPSsehvzK3YJ4rgMd3qJagAAzCipNCKXV7FAkjyPke",
  "key29": "53eRg4W1KEVcUggiFxBWG45xYe3Mn5RnyEczSM6dpzmAbk9ds6yLUGuqug61qsyFJap6TwEJ8eoixbf73wRHfUQ3",
  "key30": "4eVTjEsjHYfJm9c5L3D36xoBaGva4mXii7u3hmrih7S2yNQhE82wADJh63SSwDvXFdE6soj6Dym6CVeBQvE5VWFo",
  "key31": "3u7R1A7zCAVow6KiYtpEejkQZusSbsT2Gs24Rexu1jo15LLciFPGAWQa1mzeaY2KZA28bkFTeK3ccQZJLqCtuNT3",
  "key32": "28jpcZ7E8aQUBSRRLwoCdTktWofMKqwyrKoZNMJkddnEtUKBBEKzg5nQr8bDE8mf7mRPBhwHxkRHvzDRiAwS8SGg",
  "key33": "3eAfpgKp31fpY6cBwDLhHnSwvT7PMBQ5a3jqv4DbXVdL2tkEyfJN7uLYdM9v8nK4KeUVsGSQP9EVYMtgpDZW4jSL",
  "key34": "2D55VMEm6u4ut2o3HxpGsoXdB5JY7NWGZRg2R3JbazCPxTmXXP7jUqZezVXJQ9XXR11zaGj5baomNNhdY9yK9uxS",
  "key35": "91xen4haoFcymZQJtTiuC1jLkQR5PDkFWTnw18C91QhmQibGhHFYF1HGg7qLbc7bzq6UWsUjGYY3i7pQjPYhipL",
  "key36": "229AbY2hCR8GaayG9PLATTbyq4cSzFcwSw2W4MDhYdyhRcHPwmM5jdcPMNRKC5BZD9MHrQU5s4WJEDUXBXokmoNn",
  "key37": "2FNEFDLzDhyEpJQZHZSGtTiVYvcWbhuW3soozHmqiEzX4yJN7bB8tnq84LnGDzMTXyvHxNhHTWZkywoWnTRzi6FB"
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
