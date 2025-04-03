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
    "5jfJiMfYQdJaSqKfHQjcMsruYZ3ya8twkYJSDHYgDuP71gmxKbUZBD9LmAzQmkGytuiBkKvQxa8iNmZocwCYGP2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNBuRV7ddajfpQ5eVNYnd2CBmAHFFwFpDwHaJne9MwQqajzQUUVVrQf82ZLTpMdyAzH7jeS8NiyPaoLmbPtaPUN",
  "key1": "42zQCFhq9sCq2pT9e6ru545absH31z3wPc779St78F3qobDiX9tcyViRb4edJc9FinDsouEzyXWnYm72WqChxekQ",
  "key2": "2Y6gDonsYimWrBhB1h69cp9d9Cwg5MgQXC3snu9ZuSJ8NYprE11bpUeq49AKPRSYU181VR2AXgF82FCzxnbdWUMH",
  "key3": "5YrzRMLRCcW1Cctq2PioP6Di7RWYPZBQPr9SJgzrQJKia3g8XGyDGomfQ8yKBmWTdyvGySZLvJtuWMYmHSxZ91nZ",
  "key4": "2f5A44ptBu9c4wVRNFKov2oVBoSKR1CJModAmf22WhsAib7BLnhxLUkZUn5xLKpp1Jbfwm6aS115KArr6MJ9e6iM",
  "key5": "2Gyzw5HvsQJjEiSdVpaBpnDxjHXSqMwzdDZkGyVVbfKqNwJkGCvmNVTyWzHHMj3vH44aDyNk8wTp4VPfSqLgKDpa",
  "key6": "5jG4FWd8izeSGpRdnr3oyrJfadyi328c8Ny6arYkYJvE5bzTio2MQMUgoyG9AVNPXfECRDS1kKS2BjkzgJuC612x",
  "key7": "4TBqEZy7xk6tWKB6P17h18pw6e99npqthSZ7CUuLjAWLzegTsHja5VdYKso8REjxhkSyTyNPrah4YosGHzeZC3TX",
  "key8": "dQryyHDK42FtM2rRSaaaZo4LSgnuMswJaXH724miLP7cgaZGWn8g7jzunWFYwSsgmCRosm4qRBGTU96443cFwRP",
  "key9": "4CT7djt12nFFZsuxpCarTZqUcNRLYD6urbo8jyx16agFxFXDssiw3i948diJ8hheasJDMQqGLQiAaca9gVX3iDjJ",
  "key10": "3zTRnCyzBpdmvjCMcYqwC3hUveEnyNx3e2sRH6tvHPZizSsa2bThHiEkVUkfJoQEiZcVof8m2qz3wJ9L6ATDDCYt",
  "key11": "2M72STRxhCDzYGGRzxZG2CjSvW3chmLEKFrgqoZULfJwXeMEDjdvUSfnfm386D7L3cmmxTZpL9L9nBGvaJhWZJeY",
  "key12": "3RM7vHdmuWjhk3owDsczgqeeaL526EzPriiVmsydvtYNkqx44iFyo7WEjHQfx36hsGi3bd2E5gvzWx6Ukg7TkAEr",
  "key13": "56Cb6GECRjGFDfPhBx6MK5mWePG1VX15qxqiXCtg86b5NdN4YoGfkkUbXxdzQkHMmB2YaFbXiZ4m1oGA923Vjpux",
  "key14": "2HLEP4z5Qdx5uUwrFiDDQtrMaARPv6J26rizcVczA1c3tMveTG7Qxgzu11PXFAmZwkj8MRVoHSjwYicsfpZXEQqB",
  "key15": "3YJpYu5k4kBYBTjnxgBjr92HA9MK1FDbjx5eNeb2fG3zE8F8qhjQrPX5hf2mXvT7s4NowEAa9ww2YBBSKu1ztCuT",
  "key16": "5rNguRwUZCRa9yBENg3XvnVcoJrgw9S66P5rMKwLbFQ2ZtTBtx2XoDkLsSwpas7sqHjEv46oTr2U8yWfLx7kh8Le",
  "key17": "5ZeR4MfyD6escPLGYEBMh1ePqrHpfNGXX6z4xrVPCiox6r8sRWJ1VP7Mcy8ckk3zDws8jNvmA1DMc7qZsGErQTZr",
  "key18": "4p5KJoTXaDWd1Y6vtqpgSirQXH9ZbymUvhTytXWxcjw2LKYn3tK4TXkBohrChJRHYszjs2MJfzNPgReR3cQonSmx",
  "key19": "45xPeN5c3chVHEX1tWksux8icn6DDUiR627TDJK8QYdPTmu3YyAXdVZsjWbqBVpg2etNRfBbwbKsufUpxZZm21KN",
  "key20": "qYBPWfhNJodFSx2WjdU7rAMzVGXiMdxdJk2dWzACJn5Nm4h15zZpvDr7vCKZv6ZJw9EPy7ZgCVbAdSbQ3FJegHE",
  "key21": "b8YpT1nGN9jB8THDYUZyD3o6Qdf48yg6wP7B8Ju6XFcGWkspgcTmdrevBMVbgvZ9v3ooMC568hYDyVLojbcNah1",
  "key22": "4nAxLF7DNKzpWFk5SHPU24SaTGVt5Syj9SneH5ihR6ySfziP2PSk7BMypwXqLtQ5w4jAeVzKAp6GrFhQPmDurooJ",
  "key23": "5RrtNQnXaknrHan42W4Zo1Jw3p4ngkXLckbDBiqVxpP3W3u8nrTaQh6vJuUR6HaBvuksyi4E5ggzXsNh6fP6Ykvy",
  "key24": "4b5YTjnkdTVK9g3zZnfq9e5Vs8srdSBBgJuytjvtxrSQ5foVbPSceoR9vnfVWBhgLsDDPRFmFi7Bz1UnYox1BzEf",
  "key25": "37Er8gT8Te1iebLQ22xJ7eRQRFu4tfS7HSuVXSbHW6EEqBjfEmNjm9Q4t8pqxf77vW1c6BQ5gPNVUioEqU7tTi3p",
  "key26": "xjciPPLSRVHdwAnRgCnZnYDpPr5xPoYUEsrx14R28y3sydy5NvKg9k7vc5uetyZNcxKUQixoNeXmErRhwMSNjHu",
  "key27": "2tcWD9S9nnXELKnzQ7fRymLHQgvgQe71oXNYyjhaBT7y8QWAakZmxvUnJo5t2dggo8iYMeLzL78k4fLLe3b7ChQC",
  "key28": "4NkPtKKJTXjmtfCAq51UUei784meetkQbB78G2dGTpQpmDoemTErF1iHq37HBTmB2ht2TX6pik2pSBHkB1VtAuEa",
  "key29": "2hx3rNyqpCshD5U97HE8GbMcUfpWsqBmPbcB1Yw886Hw667qMC7wuT62xgEe9hkCVJqvVJpuh8bxzK4K7P33SY6G",
  "key30": "PJMKkLroj2i3Ua31inBCvXgeZgHYX4jCs9aK3uUS6EA8p1jVZqR7xAxcVZeUrtP6ijxvbUnDxToET1SL2h4qD3Z",
  "key31": "3WH78wUrTdDRWUcGhzohXG8rTuSbLTxfobaD7ZCWev5LCJJwcmdFNzzRLEWiGRci9yBpw632L4NYDD8tqkrGmriF",
  "key32": "5z9SyHagcZA4K9Fe9aZNqSMdpALxGq43HiQSKRLxCBqPj5jV6rPrq8d87C2pErUTa9zRETUqMXUPKMFb32V52JuM",
  "key33": "Rth9p4yUGWGJZXf7bfFumqaz8t4Lr8ovcTG1SA31zUxRTC1jJhzqc6rUiFcELSQA5VkQpGnUGrdtzHcxf8udiGs",
  "key34": "53mAienrMJutj4zV745gMGpy68MX41AQJGuouoX6psD2mPmFdrmKJ3qhcsLyRzyYoggt2ZEtoPnMRtobp37LCEZD",
  "key35": "jH8dVbMPac4ypqisTxHaArX6maq4TmwALGo2zp4c6CmR9fNHEwKJhJkfsGxD8xeG8uAjCyRb83qKbXBt92TXjwv",
  "key36": "4af4BK4UibsdT9pUbDLVr7pDqp2RxK1e4eaWdnHu1QZNzhd411LTGsATRW6dhyJM3koMgp7uRVhk2FGbUEa7JQv",
  "key37": "33cdqUuwh6ZnZMqCJ9zGaeouooPqJZ37msYeBPfk5AY3HgR3UiBNMJCaifApcqo2ZeojwCNJ7HeoAiMehwNnQZu7",
  "key38": "4NFUC7ZHXhhoMKdb258t6evgcbt9mkTZVGJGRCHkAZ1v2eQnjdmeCD4xs1UMfEzjxJb8w2NxMiJGeGcoKBySaWtC"
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
