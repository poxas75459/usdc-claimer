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
    "4mAt3YQpe63Dt4oG1MUT3GJ9ALjMP3noHsM4oRjeeQbAVJb3wRQZ1XcSfGCUUGxsZUxJX5xBmTfLpcPEfiRkadB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XXxR8WqRcoHcJYsZ6pYeHVKDUERFF79fB5MoCv3E2ZUzkF2JBFeruB6eh3aygf4QKpgVCuB9ZboykEnVtS4sEP",
  "key1": "5wegATZixgYeaEVpz76MLzKU32M8g9ZJknTs1X8j9RA6MauigYjgcP1Go7E3k8hCT4ZhrLHKTp73DvkggLtMvrKP",
  "key2": "2ujvK9wuSENCwRKXNURjjihLrG8LYPcgL419ues5mmCV9dge4fF2hBNMTuR3V8r2QA5okiw1HXYff1QXsNsdoLSR",
  "key3": "4NHZpZheGrnZVSvNVv9JAwr59VFzxdsV6uHbRpCbxJ9NbaeHfn3XamkVxwXo37cXhzEK1t4WFXEZn5pQJmMbKX16",
  "key4": "2WXxLTQgcMJCtToFNNdyYG34E2LTtAxLoTZMmvcBTkKub3tNmpMWry4Vi51EiGhaDyzq5FDE2WhqMJ1B2GriC6Wv",
  "key5": "65dLtBuaDHm3PJXLR9bUGaRHewn39kKTNoVe1ZRgwNNiGrxAMdS2mc8Uw5eK3EENUDh36L7kvq71TsFq9sEhPVmA",
  "key6": "2inRbqCCjyQMyruW1oA824f4soSnfwfSUsQ4cxYuAjNn9zmpDsnA59TVgcLX4EaNuKXWdPGGimVXg5cJZJCN6Y2W",
  "key7": "2qJYjxih4ivfQ7NvpboBzPNfCyu4uWazEd1g8FsKcYLYRVNxHTECiseEPdFhLEYbRrySoV8nZXu1gHnPjKEVifes",
  "key8": "4R9EDLyVThud9TwUxP6du1hN7GgqYsHmcyn9mtVjBJtEjdDADyNHZNbk4h2bdb5ynbFoYQMpVfXVhujts7jWv2ZS",
  "key9": "4ZrA71J86XmJpKDpAtbEdLwU8WFgkLDKhCFgHMXBq9yE3uobAt353ANe7C6BKmahGm4pJEmb7JzEMMnZFVshBtX6",
  "key10": "5U5fazxeb7ihn8zHZXNE8Mso9dfet87qoGTwgxSUanE9H2FpocmK3C9zRL36DAyoHa5cUdtkbDXiEcyb7oEV9osT",
  "key11": "3kjDkr8QNqVXPFe82sgwKxz7gWdTFNrnWVpA2fnkKmcDQvi8oR8Hbz3szCeipHSRW5b3vNRNJhntnmUUZTkUKTDB",
  "key12": "37aFZgWX2Z6dci5MW6mK44mzJZC7NZ24sNC2u9wfpZ31MQbroxGdMQU4RtRVE8WKXzjQucjPbWGWRyJCbr2XfNub",
  "key13": "2zMoT7iFVjN71xLeFvFpjWxr2LeYXnsoJrRqcAeHHRxVwJscbB85dXze99iAMEEKdDUftspVJZou1WiY6H6sKuPa",
  "key14": "2tQ2aUruZ2uvudk5gpY4ZYrUYKNWuHb8XzYXVU5hxa1X2DbAbvJKUmKn7GFsdhzfjaBmuUg1xaYejSTNkkBeMkfW",
  "key15": "4fjbsgWKQNqGCKAGXUgdVYBp47cbN4mymCAWpsxSJZkzEx7voTaPyfwc1WAqwJYaCngirSpJPCjo5PogJr9MUGyw",
  "key16": "2d3YzAR9ScDeTxuHzvzevEB3euo3qYhkXBP59DFbcu4MQkV5Ku6MyV1ZQNsxjTqa1zHPPeWMu7gJ4JXQbAL24Tm8",
  "key17": "25n9TCmyoNH3DGauvigJTUxiAFnZAEjw9uYh1sawZ6Pcm6L9kuBgGrbNBegU9okHDbbsoHnPMA6umJMn6joh34pY",
  "key18": "3gCEwj1eU8rnExUSM4kokEtQoNrtY9tTpV6r1Ed8hsswkuoaGZDNbZCEs35ucEdJdVLAgKSmmbWQZ1GabFdAVntv",
  "key19": "2hQP4bgiwVV7bBC6fb25fks9ye7EhVTWVDPJFmru41t6urAVDTarnnwSGPYu3YXTRhd43t9xMB8bPao6mYN1UEHJ",
  "key20": "5ocB3DtZv7Dw6HnEeKsWJgsDmPQjkxuk5P2mt7WSEG5RAtk3hWuQxyFFXgu3Xp4H79rNwjFqevNFvuQqkqBB8aos",
  "key21": "5A62HivAyAhjF9YMYyqz58A83RCQDyuRGS1927wBas363w1BzY5Mz5Tta2joFHX1et1dkC5r7dL5R3vGyYuGzkKK",
  "key22": "GFUybA24VJDFkTnkULQNc15WJJXQfRyREuxbj5pSEpM69kSR4yasRwoRtgAfpavc3bpbyvQa7UCVWYRHGsVM5g1",
  "key23": "BA4VphYJSpDcDodfQJyWwrfCzxHzkf8RkZy7vXTsjeZTAK17oWYQtonPeX3qQqiGFwxsvsgMKTqhFUfsXwKDRi4",
  "key24": "2igVrtJnHTmhknn3Gt3LenjcrwdbsFERLEwqcXnG9zFJH2pAUhk97kvrGCD4Si9radP58wtCihCjwPG6oVQJXeZT",
  "key25": "3xvaBQozy9gGs2bTy41CYgedNhLYaXdYapPVGPSyGM6M2iUK3cLEumBLxwu8akEVrt9qVLtnLJ3HW1Gf8sXxBk5Z",
  "key26": "2SKwrkMRpFDsENZnBvwjm848ZD6XR1JuJ9QByTUj4nGMuvrSYdx5bPNieh2MgQMkZKC3uVpJnAzNRxKaQpbkzoT6",
  "key27": "3xQZ8mKbcEdt7CViw3p2DErFDBhSQ1oWtiBM5iDk683z4U8vHT7htM2xAAfk1C5MfvXzmEGvmqHHPuDScL58oBoi",
  "key28": "5gSEwFw8YVhnmakVmgM1WEjXjMTPTcDE6SdJtZ8ewYfS7vTYdT5b4EhfYUqNhzQL5KqA27yfxqWgEHAnawGhDWce",
  "key29": "5JvHqkoDAyw8CHFF3asPBHaxPXKoLfdwTtr8rvWf2n7sZy8k9TWw9MsSqmKZF9DL1LQJosSAPkn5TRQZSyr9LWNd",
  "key30": "PG2Xw62sEDxGHThQudyt19ijGoaRxvRuqMdzHrwabseMzAyqaKu64pYpBDimhmsBvkPsK8Yv5TGybfqDZ81pqWK",
  "key31": "43bouGU1tR4XVdhb3vkYjnrLzhjqrMG3DGcdGBH4zQzQNE3x7cfs3Aei3seBt6EPv2UAQmmDVCVn8JkYb3aXXjAe",
  "key32": "42qkP1mffzo1UxVJxCK8AF6gMmqoaJaTb3MUT8P61qsEV578gPYLyqoJfAZXpkCGEFUnzEiFHCtz1WGaxrzTSaEc",
  "key33": "2LAPpESZc4e48c9QTirqRpm9NmqbSoASzCjebtZSEnsSMTkqrQphQr12gpBr1vb931rKBq2BA2iszsPrtt5Cm86K",
  "key34": "4SxeZLbSngQ14udMvUcqjDjm8vMy2EY93t1zZCd7XRcq3yz283eRRiEdjfKAzF1jDiKcG1KeTiPbgctjT9kDyfh3",
  "key35": "4t5xa1hjTBTVxTYv26hLE7cfP1equscYDb8dhJTAjdQpi5rGoCiwqr3XPftpVe2SSutjXURMrHAY6EE2xMENybme",
  "key36": "2B6r76dE69ZkaHGgPSdnYVK8Fd11ckKJfRnqhkf4QSF4imv7T4Aqnx84Ph8fAD42f2ovrLADTtR8N7J2cpCmrHJ5",
  "key37": "cgJP33XFQwyi6gNfqVkGw9WHqCPfxqE2Xogx5PymieMk5VFwng8grBZKpsS7P9prv4SKzuF7N5bY5jY642iFEVv",
  "key38": "5Rsc6aWvNen2fMTndzdCnUYRa2j3TKLVxyNneZnNTRpBkWou1qsyYe1VeqZxXjZcNcGdPwNxjz1HadJYyqkk5DYF",
  "key39": "3sbUWLaYxZQuuxzKcyNLRJqR5XHB7FSNSduiKE9ANpvxW1PUm1T8hkGzGK26h1UH3LogADCoYLmznjkVKMpGFWKN",
  "key40": "46RbcK5sXMzkKaLYAfEZqi4Qvfqjnn8xyDjKLzMbiYZZN6UDNXwVynrCtx1bYgbir7fQCkEmjVbtjFzv7iAY8BQt",
  "key41": "2FveY9anBagoUHzZ42L7FpNA1pDhMP1M91HMrmLgXfr4rzZoK7UuCzbcScwv8xCXcRqAMP7ypGfT1GmDTQmjrmq2",
  "key42": "HWW8uyiZRnkLsauBjar1Ym5VMif45rS3qM4EYAj21g7jATCDoKS2Y1ZnPRmeoc8bUFQiHXTvDBj4MK2YZHNfCPB",
  "key43": "3wuk7rb3wkDfJns24p4PRuwUKLEdX2MDLVFB66CucPmqfVFPcs4ScRiFemm4JuToydiXkNu71oq4VM1BFWpmL2Xv",
  "key44": "SevnyUZZwhP1pMJo73pjM36ohKKpDdFbDht1x1whC1nEVKTctx7hkUSK3SMvgPMGNsJ6HV4xocc3VEoLVj6Argn",
  "key45": "3HSHnjeagXresWLJ6UkftDzRDUnzGNhcVtsQhNxtRVtzCXAjgD61JAZeah85Ceb6je4nagaGVzc6ba1pTVrCXpkC"
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
