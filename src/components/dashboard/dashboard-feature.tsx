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
    "5SyLqSd4pJwJRboUKszq9pwFqbh4FhCrQisfxJuQWghQSErxK2Vz2AU9nUWqVkrUne3FyiHtR1zRs47hG6SoXocn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VwM5PxSZVHpFojouisFKYx8JcrTNUWCWZdc5XqkNCUVU8AKnLPA7A4Ldj5M5e1NRK9Sb7UtfTAvSVwJzJtPz81",
  "key1": "3GqrY3VVQZ6z8QmfwGvcW2VgXj3XPWbRuw1AataYjgFiiSaiwnxPzxsfdjSij8SHYgcy5c7LcXwUs7C1axKs7SZ2",
  "key2": "5r9PVafuTLUNAvC2EpkaDSuugV1JJqyvRryX7FYmUFizaJTLhdi51CAddLJv9he6Kx7kmyD2sRorMFup2N6ckG7s",
  "key3": "4tkwuhord5YXB9Nczn3V5Q7R8Jdgfj2wx4jJ8o2sJykG8HRN9VWYa7JT2ptnDZ4WmN43H11beosT3hJGRV5QazEY",
  "key4": "3DzncSckomLaoK4HguwRh81VUduJM6kwQZLwngjQohFaARULj4sEiHqjtr2yrSopeenmamYEhjXVmEkSbyAVsdG3",
  "key5": "4ex755Z6c9d6F2sXymbNQXxXR51VZn9VNHqpRnqLxR4M8So8QbfStEr5tKbzeH1NviSG6RM81P97Rp4NLjfxXNtW",
  "key6": "23CBKotMwemteQHuCiCKjVN7a8EMXxW6otH5KeF4GpjWyN3h6aKTxcMTtB67Zg9eoU7sRgmN6Dd4kxmtRWh7JDne",
  "key7": "31qFcrdKmDTYSzjoByg1LZMscqte6cYtyWan4cN9D6BXjkR45xjLvXf4enR19a3bZQ3Nf8wytas3qVfh2Nv7Mo5e",
  "key8": "3Gnur19gnbwEe41eqEqJY4qzatbbJMWppjR7kn1cNPN11rL5za7H3Tuau39yERdZTAJxcM5aCmWQTZGGpE7U7XBf",
  "key9": "3w3JwU2qH6x32EtirXx4K5SbAqZzSCwk9Ra3PB9y9YwWY7ActzGdNdQiVhifDdYkaamaVn3p1557pb8epA6ZJ7Ec",
  "key10": "5MAj8298HyA2EAFxursvec48uS8HRgFnztSLezppb6dDR5w8uYyRgeVNj35ne4sHk1a8d8FtdbUofUNgoz57X66w",
  "key11": "5UCXtazyeQa8SCSzNA56i93Xttbwu57uY2C3ApYD5T52G1Ao6GQCHKfeHQoCmic5nvGnoFierJcjcTcx2uCuX5Zp",
  "key12": "4raMkWXScEk3xMvow8w6ELzCXEnA8fst83i9Q2j1WxynEWy2TVxz7AZSn7iZsy94vsAGYKW8teht4U9LitFokSPA",
  "key13": "5fmE3ua7eLyCfJS54in6w253HyKwoDB4iaKgRXyu24mr4M5R5X1CWbkadjG9KBDFejFrwYFp4kCwc9MVZoTnUC4e",
  "key14": "3cNdgkvWQxCX63ENDe9w1vSY4biZDGf8K615ukA76UHyW7CjoyUmPGB3KWDjrcW8To45EU832uMc1Y4ZRnUE6nBZ",
  "key15": "33rVyTt2vvP8DWtVRaWc59DDLyZcfbTEajk6u3t3xSMbpgYXdb49mbmBbbnCShXUZr8P3HAveDEXcUhwCCFHqzuy",
  "key16": "33UD6vRCy27iQbxjuLJr5QwcpY3QeQ1nnTZwaXa28WHW9it7e7EEKggz7vSF4VkQeEmRdDDU47svxUWRfYnhJBKt",
  "key17": "5EiwLUbn12FZLQGfTKPC1Bc8wus2zLFKton7e33o1bCjPyJmDWRC9XBqmCcb7eum3vYn29ybH9FU3E89dw1nA7ef",
  "key18": "3mhFUSec5WojTtBoAMNjxYxkdYe6TBizKYuqnQxKRfkitGC1rYe5NyELGfzyUuERekNXCiSnStcB91Z1NFiLSW66",
  "key19": "UuoikYtUJ4dh3QADtk6RqgryNBaz4nG2nZk7BVhDtsjWaveVoKef9wTngVkeRShtSbUYtAgRu46HAWn8M8ToUdh",
  "key20": "2f3iFojVw367zX3va54w9W56bccJRdqasXNQYjt7qn81GNksHhPQXqoH11YAkEx1VFotLYfaubZyJcgFAVin18Jx",
  "key21": "kpGdo5KVvenBzWBs9T4Ga5JWesF375RfMPjERNNoAC7fvXpUKym2QUdBAcqnXcd3frmbZyaCDFUCTp6r5QNq3Wm",
  "key22": "4R8PVGntgQgYyY2baVFqjcaVGtjxguViVAmDniHWLHYLEtDEoogJFt9MADzsbNPDtEhXcSfApfbmBNnFDBuBCTrV",
  "key23": "3m9wupQJ6LzvZyZQgMrQx4A8T3SmogCzSpU3W9rPTUYp4BXWyYDaUdGxtnTXmiFaqXLkGfnPpFXXHDEPUohX318Y",
  "key24": "cETTg2csKLxKrpJpX5SZwhCgQcWUSctcd2NJC6S5MozdkkiGdPnqKyxMqxaa5NpwWq6cVzrHa5C98rFHetiJt3u",
  "key25": "5r43Em5jaRZcahhkK6gw1nyPmEoW7Jtqi7cZThftCLaaa1Aq8zEAfMWeEFpS3h9EYbeo3915x1ZR9GN3pB4r8PAS",
  "key26": "5fbVEjyGTj36cyiK3J2JbfSLKrBuja47runcHnr5Vvu6NbFMY4T6oe1WenYibkdUbemQRMQA9sVmMcjUEEGDtWso",
  "key27": "4BBw2gRpji3Lo24LV5AY8YkZM31vACco84vLX6aNHZJaAzZFtmhEEK5ZK9gTFcvh4DSnusMHntPA7JNdmUbSnYGn",
  "key28": "3Xv8bm61zyf9Bem5bAaM9rHpMkpVuHSNV2XcpYgZe5acphZQrAu9cTbSaQGnAe8AJaYfKvJC4N2sEA8KuNCsvj5s",
  "key29": "4AKPUAYieHKHAvguxAcoVr6Kr1LeXDiMhDhrXCk3moeyCyCbxYQLF6UqZ3VubiEpGAgiRjSY1k53M2Gu4EjdXg86"
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
