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
    "29S6PHUijtd4hjoTnBaLX6w1kwvs5ieqbabmnrKKZnWZLqKEmqHsetRfSfBwaK3B7wTKRQTMbLxU4AZQ8U47zHsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3css4n3bKepSgSwr5Jqq2j7yw4c6W6VT4171ND26sEUCUSjX4kQyqHgFai1DKDZDmjk8NCg4Cq6MZGG8767pju4Y",
  "key1": "5Jqe9TcpEMaJqU61VK8M5qr3jQrHSfpQkFCkN84e6yJkNUEJBSNi2GAaw2cnTECCVkCiQJJJ3hEuBfCEVeGeWt1p",
  "key2": "LRsdkPdM2CQzGGM3fdB6Qw5dRywB4XjaqbZK4GByrwXCVAfVk7FDDr7nvAX586Lfy4z6YjVWVFBLtXF3YCmeLcg",
  "key3": "5nHPZ6YiYTVP28pq7fcSJc9mtZDX7y7i63nbJDQHNpicDLq34nRYcooo2v1efAW8Hzr9rQW3A54sGB7jJ1xwwZ8r",
  "key4": "5pnw48CvxL76Yxe3dyVscBiEadP7dmHRtcqoAhKMacStR9YjCFGuh5Tca6NnYQs4oWifAqZpBQJS7p7EFG6jq9PX",
  "key5": "2fcDins9fRcWmrQcWFzHKSVrgimnzGxjwZW7DTL2pNDDhxcuaLuC7U2gU9nmMWo87qUCrGXoFrMFQ72WNHXnDABc",
  "key6": "55ExKMz3FrkpR54WA5kcRMBYAohYNmH4DrTP131P6tbitWhBvbzHq4UaqFFcgqWsG6nueJF6uBUDRMMmEEA7r1jZ",
  "key7": "4djHdRbR4BirsgYnrLyaQUoaVgta4x47aXnBtSmRujmYDrKCKyASpT7RoYsq3pgHHyAuqVrT2okJxmGExLiJmnyu",
  "key8": "5tVKPUww8U6bhBucEGCa5d7qigTiY5YRaeRWtnNZv2Kq8pWVyzRo58KKnjhajCRq8j6sLKbeWuP3oGNpRJn9xZmz",
  "key9": "3c9NjYh43PKVvuyJ1t8ZMrAzLLzSkYkqzfo2rscZbofBECRhZLc3uBXKdLsVztoHbHLrTjhJ7imEMNJtZuY2QvCd",
  "key10": "57h2i1Y1ne4erWeb173M152ox3c1y26hwHgwWae7bxAY51a3nziCaoVopcGD4GjugriWZUgMfiwtQh9DzDn2NLMB",
  "key11": "331KQLSPofLypHxrvu7G83xyryAQ4oU1b2nRV1r9JScoiirSVuaxAtmb9hPdZ2ALmy9s4yrE5G8gbHzwU3PDAsEE",
  "key12": "5f7p9RzoDcLx7RpAsnumF4SH9XP3aT9eDhCnxuzB4dFpTugrVzcdGQazpgzJHBis5QnZRToKvce4dUzCKow3bKnk",
  "key13": "3NFaa2UBS1SErFtggUSdiWavXdHMrqZC8Q4xhrjkH5eQzpsKmMx45e28b16DGpqidFxN97W9ByoJPxEz2cL5kYJw",
  "key14": "5v5oHgbRej11zjuzbUDKDozriGoCN5WZdaQLCGD95ojaCEjSqb8B9uY9ucytE5MZ3pPhgd1HCK2qUerqv8pNpyxe",
  "key15": "N4JFva4XPVDQdQ3p6vjLihfnsE5QYnbiVj5kKDtvGKVBkzyu84F5UbHbkUPt1eWqdDEnAemGx3Jpc6FbyqgEBVm",
  "key16": "8VcXTFZ8nn6N3gvmcTnSRuEZaY9jfqnp5yYHcjFJ7ZiRToAThubt3Cfxhabg4BiKoaiM9AAN49ZogxJfGAzkEdp",
  "key17": "3SyMnsWaDWTGFdwARmPYnTiTYwfVbWNyRhJF29nKwVfJRHvRDDQeW5tLZ79u48PDUymMfcdoQZHqThUAGMD5p7KK",
  "key18": "3dqg1cM6XSfUpYL6AWNXgvdFsSrMVFyz3kFAiv3ukcHtUQ7kpwVLybanfJnKfXVHHN95uWNmkb3eHat3HHTdmiDM",
  "key19": "39HKTPTXiLdNoGfCcvZ7s56mUfUW9Fk8YN76hiXsLd5f67fCyiVvHa4bxSCvosP9d9X2vc74vpSurnws78mYdbt",
  "key20": "2LGwUorpsLX4YML1y3XqqcFK7vT2ZcA1ejgJtpyVhJsfKWdnV4ytWCcDQQ6ZzJeeEeNHFEE9go9hxTjNmGSQSkGD",
  "key21": "4VgcXQVvehLukjsAqmhzuZwFiVV7VFFmNk3fRcPJU4LDhYhD7zFKLDACDjtn2BUK2vCrHGjvk4bNecYawog6qm2b",
  "key22": "2WkPaL5CRfVU9gvHXwfXRcnfBh5i5iqZY2VgCYajKfBTzWUp4JEWpv6YWN8PJQ5pHZb8BAindjCjCrteZ5tkqe6B",
  "key23": "4oExfxHockad4xzwq6CkiPerrisdGv8P4CSEa8TeQLYxEoga9GVoMwYVoocnCHEq497hCjfiw76GBZeuc7qJNJqp",
  "key24": "in6xvjbyskmGpkTnVhDPTChv6RHygWfaHWJx56LVF6AYdQ91hmbAhyTJyctNo9cuLc4zVj9HKXGZwsAtP8Lf9hw",
  "key25": "3Dq6fuNpj4PbvZkNdZ2RPQp2R29tP7VvstNrCbaKZC8HYnQhGeKFeQFjwRv5Fg7Jw6T5eMrq6okV1T9fNG3C8xgm",
  "key26": "3kCScveRUrGYdraMBN8etXcXDx26NQVs1W3t25VruzXKV6Ye8nqZ64oaE6x44VGKYCBqSoL3PWdK471kDiDkaHQK",
  "key27": "4XXUaoiyuwAH7ATopgKjuP1rbG2jLkuPDfcJ1SrLHw733rBVbJT6BnFtYnh5o3XMnEEbMwuXcXmnfoGENMFaBMoY",
  "key28": "412tCJoALAxCx8MWR8iqBbF4NEoWyBTox4TbjzH9EKgqo2LvnDcGLsASwGDK3KVrSPWsZd1jwFQRQFU4ysuVgkPa",
  "key29": "JuX6daPkCUiDWNqt6J9AHQqHuXoJb1jsWmaeHAA7RbacYHMZ1yvxCWtEBm71T1Mpgj5WuceZP6S3xRoRvyskVdd",
  "key30": "26CbbTr6rXJqph5z7YfuZV9bC1NfxZW2RPPEugkAzZAaTyYRcDED2BcS81EsX3Dey95QGJHP6mEekkQ9jDoqwy8F",
  "key31": "sDajMHNDYE8dEFxRcZ74fb9uh8oqEZwKnFniDhtYWJgp9qcNuZjbpq9ye6rcmGrtWWFrqYLHVe7z5cWtGoCpXsZ",
  "key32": "3Gt4mRQfKL2XkoFMXPQh3jxKVnbqJCpmwMxbdC7EMtfrh4VbRbNqqLtWqfqZHPAyctARgnaroajPy3h3KHK5zoqH",
  "key33": "2V4VYbAbemyyg93NAgr8eMJ7oukjHiAUwWrm94ro84jpwzu6x8MqHeKJAvxLaysLdXGPNKmXd5JwqhLYbfyFqmWA",
  "key34": "yLSLKVj8GRtFXXLimc6djeziZsjceuLZZjM2CWXXavz6tNzztTHxohvUJZKYZzWvBoZQjwnhkz6vPskTEeGuk94",
  "key35": "2z6FcJmhSriUqveFL7MnfKo4BcS5e6ea2Dn69GicF4q6GJE9BNTpzLPF4RH4njYAqaCpZmPDXvWEiyzcDDxWuFfg"
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
