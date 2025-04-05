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
    "x9B2Crm12kyNREVbtdKRBMiHvmpjWbx2Gh8LwonKKbZUwbqYzGE2B7PyuevpfG6afrzMi5KZnrFYMJNd4YBbpzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35aCraib2L8AcfKUyccacQfeRg7z8q2RGPUQint4zujqSHZLJ1hmYrLCn1yEqVLCQNZPBR3GpJs7tEwZ6h1p2542",
  "key1": "4d697BGiDDTyzRcrC6ZGiyCvgoDxhRiuysDydNwCZLXuAuKRoX2W5UbwEpUFpD8zCQLQddXre2zeHMsQ71DnCsNN",
  "key2": "5RMHrMQFRqo54E5ZngjaW62W8m4VoR4KgW9s4jTVkmQzF7CRhGqxUgDsgadrhU2LJ3Nr4KxPB3JMbsWxMXYnsZYt",
  "key3": "48r1H7Hd5jQ6CpkDosdDm5pnuvqf1WSMW98RCokDkUhbLiji2ez6wgtwiDhsFJvJBPp9KRuYnTNETnFk2if1mJc9",
  "key4": "4bqpUrKo4m6eJDMGi4gs8C73vKLqcYbYWQCzci1imLng1ZfrCkn38ANpW7dELLXEjwLRcFhSR4gbLKssag2HHWGN",
  "key5": "36HSU4Q93LpeSWLnEZd9HvWtKyRQARUcjaPjAFXvVas441p29KQSJxa1uJqDFJ2cVwMAcfVTX6nQqTJrEjhRCYp3",
  "key6": "5kZjxxCpsed4vRdXYCbyo2F7rrtR4HcrMr9bSGEAqsJgeYgNUPKKfLqA4sas5rmhdZS3fsESqT7MqcocWaGJmbd6",
  "key7": "54nXyWbTmsJdUQcDARig1oEFhHWfzA1TcA9o9tefHqq5XbYCtk6ut8ftu2EWhEYoemtPjEjH7yQQKDSMLfY5QhUp",
  "key8": "D2ZK1jHC6wtGJjmwykmyt3r93rKtMCSf31k9GV6xyPRF5rxN8WAgFfzCyRYUaCVXRhRoSSHQ6sCC7pd5HWXHBzq",
  "key9": "4mAnUZs2oQkvJxBaJUVkQRMRCPwaH3svPutZWEGUC58h5i9mCosqPK2k59LTJjTXv9QYFuZBepBLU4MByqQwTnm4",
  "key10": "36uaxMkQhoVtZboTcMoRB9aMQPJEKbbpbmXz6PenzpJu1sQ7ixrSatkQ3ZChGCPK17N8Kkg68DZ1gqazP4sBpwqP",
  "key11": "3doMqX7foFeiRZCbtVgtyWLHFAhnMxcWFiR8YSVR7E171vTJDqzzSeHN4ixWLgQR29yKazdHq5TxmxFg5Z5kCiqr",
  "key12": "644g3XZbeQh4myQhMpJm6L6XCmK2y4Zox6SzMYuhkpeaDBiw6tBW5jGQzMjK4HomARVvnZyVGU7Pejs5rs5VsdDu",
  "key13": "3QLA5zR9ZQQ7ohLnSki6sdYQ8YvMpHpB92nbrMTU1QZ9WMdLJTAaeu51vpFaeXs7HnutFiuF7NVtXTDGZ1HaMYW1",
  "key14": "5asVMnc7rundiA72aaNBWuGsvs3bFZU6BPa1Crnoj3pzC5zNzd3HcP6mYM7MRFkGpSBZ6Exa3PqMk3AHmJS7Dn7G",
  "key15": "5VKuQSHADQ335519Ct5F8LywMasKqWzCHjqYCexbwtsuaT9sefZetTtg5QpDrr7MiTfHas5tvjeqcVmS2Tt87sbJ",
  "key16": "5UPASPR4uBYYKodBgy96nyoYVN9KNoVNFqLnggespUk1ch8rz7M3R3JHFrwC3rXSSJY3Jt8hMAUtfxoZaWQi1EgD",
  "key17": "4fX98WsXiyPPYyEVqRPUa8vkruoiuwmezBkAW2e1KrCzsvNtQwpZ6ySYkumdAQuoAt4t5xC1NUmL6MzVTsqoEmsZ",
  "key18": "4GoF3ieidiHG7ZQXFdTaPDdQo8XSNVvmrvRNLvFU95eG7vXNVX3cTWPFjtgqc5pffZgPMYcGhvQai14dAvWhSrLP",
  "key19": "3fuo71xs16xHPmKM9tYM5WgeUu95DotS6UUqwT7xiuTXoYqMCw3GzcPMxSserMyzQzYyFb58fksjCsid9Pn6gGMq",
  "key20": "WSfNUoNeEVz2VoZLJew5agB4s1Zv7F96341VDfUhh4Pfg5UHR7jcxuMuwKtMuR7K1ft2oKGy26SEoZv2nem8FDi",
  "key21": "2wFXunyXiAxQ3smW3BeCr4cqtTgMkcdbe1sEGTeFWxkYGGmD8p4AcajLBfaLRGwDNKoqWznPDJsbYmLKDcRxSNKm",
  "key22": "aLYv9wy6KAyaGuFqxECiiybCpuArge26kWC7QRvXzZc94aZ6tRByQbRtSFnjLuvBMsPj1TWty6XDeLqZhU1zRYi",
  "key23": "4uvhtmdGNbgFTVnSzJ14m13qLEwtnK7BySsHcRfh7DJmsJJtyu5DhhUdK1nSu3SMyBFXGqZSUpUWtV1C5Aa9GKyZ",
  "key24": "5Agdvf2dxzSVzkdPNRscwMdsG81mmpPC8R4k3PizWMYAHNjgeKqyn4LqhYbDfRCLdLhRFYqAGjt3xTJktc96rYay",
  "key25": "2iSwd8h1SjHsv2XcKRRdpeyjG8YAgxVWC6GS58CEjkoQoZ8e2QiQeAUawjzA7zaqApDP7P7WASAkhAXoeHTF4uhs",
  "key26": "3C7U2LUAbSbuHovV3LLpMat5jmGKX6cHabBoLc3MGm7LZR19Ywwocffxn3XRUMrdcsKWarRE7GoNMWi8YYpVse2r",
  "key27": "53Re2NsrKMkeimnMU7goCwJJ6Sh1jRpYsEWdQ8hWtYX1zyjPxcBuZ3PZPZe2k6YtGyjTw5Qc38YD4z9kVNPzXuJh",
  "key28": "jAnDFmzWJ4xmKpPyfLjgeT19UHsP5Q6eSTj1J9JA3NYUHSuUqDzDXaNhbhrq7bfQG1cnnFcD88ZvBzuPGxQd9QJ",
  "key29": "GP8rSGuL64UnpRmpjn7RzqckYhMHWxa8Yshij5XVYg8y4PFR4eV6TadLtYJZspvLXtiSyVfhQcyFiG7vQhQss4G",
  "key30": "3mXBrMjwdQpAHNmNFfM2icrHcYCLd3A9icFr6bAPd89WkWYvdoXXHX15B36j9ZCeABLRLvAkKhAMHireFAzLQJhS",
  "key31": "28EWG9hHTwBCcqufQNyLkKnSaVSTuEX76fEdYYEh1RgUkSy33TppjG2vB4jZ58F2wJbJzcJt3qgYmT4QtddDZtRz",
  "key32": "41WuwCydzzWiNk1vpzvvbzMieaA2PPAjHXWRHxsquHLuWZjYM2G2M3oJaS6Ni1iXGtLLQpt6aXqsjtvcmWTKra7z",
  "key33": "TqKErvXabHRY72BEwEuQnZaAfTUUX2Bhxts2YbSqrhBrcZNMVaEczn3u8LCcvDXzuh1uoUPgMZvDudUm81ecXwe",
  "key34": "4jgqCtGBpSMo1o8qfGMTcYDTwCYnzyznL59ndE9PVT3TcMAJExFZob2yuDJKASkUQMNusEnBbDynBfuvN3rUqmPq"
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
