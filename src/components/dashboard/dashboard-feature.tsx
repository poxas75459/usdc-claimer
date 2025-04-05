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
    "3awXWBq3BqF5GucRxWkP2bZLek75fEkYSCkeR83zSDm2WX5CZgXV9WQxVLPmPSwiUR7GrJFH4HmgJS8FM4k4ssY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZco2epnYubj5kc7LGbtUWnYQvwNFdtwRpYtmJ3sjfMH5Leo34f5bype61HFnHHBxtKprhkASAf6PJBueTfud7A",
  "key1": "2yt5XicYCt4JcjvCqsQv8cXRQzkoY4JJ6vMVA1d7S6AGyNVCVqsEJX8CckZmQMxsYsfQrBsFj9txU8wfE5XMaMyG",
  "key2": "p6RbnYzVXzAz32XQiQpiDkFHk3meSGcxTxKeMaZLbvVkdqa2vMNrLYokyH6Rp8UKVDimzMZ66e2jwJM4f9K7CWN",
  "key3": "3hPkwb3WWqGXwcU4h9FFrQAv3BqycvmpnjgCaAtaZRARVAsHuYmYuFVhpqQtTBFFNaCYPKPjUjUNEBzbeewtijHa",
  "key4": "3MBAJBMYz85t3kZwTYBVU2Qjqx8XuQjY3qUs9QKRXPFqcvJb669tD4YMXcauaHzPpYxR28J6xmzzbcTSBiYKKoBz",
  "key5": "2JoGWZyUd5o2X4z1H9v64R91dkV3B3VzxyZhqyVxYCZEVvo5P1v6MzY9AgHL5fWyYmQysM7JM6tUFbH4ugamnHLX",
  "key6": "4Cgz5MifWCboN86JeBw3vYuHeoKA5CZfDqkxC1d69R6pcModvbgqJBr5z6kH7NnxQ5C3AVp22ii22TU4Z8uh1ahD",
  "key7": "WyFod2YBAxeVa748kTHj8GZ3JGG8tTTpEqPu7ww6yMA3cdQ4YMdF51uhSkDxd84eRdXNigEQU13MEu4jPrmFB5n",
  "key8": "2GxGjunnoJ4E4DX4cDKYkHcMJUDqgtQY125Wyo1pbofbdM7svt4AJ3uSt5o5PSCqDcTEYhJaKvc71XhaytCA8PNo",
  "key9": "5tdTdUbMvCmcg7nnQNpcSpk3s2kKdTp3jPBsAewiCpidVFTr1xKGWnV9iYXKGkgTB29NWBbzR735xSuzoDMsGa11",
  "key10": "2Z5gN4ZxMKunf88QQK5Js5ChzZotyfUcJBZ6ABgtiGatJXwyVKoaoPk8EmagsZePburPt7KGHLxA93BYst1j3QP5",
  "key11": "47d61EvL7hftjsaBTdFaz4E1Wp9kV43nwaV3h5DHJMBcrDnXJx61y4HvEqfTriNVRsMqZBFbfV7qRrxA4XKDtKo4",
  "key12": "61GXmeLfkCGUDo4yXBvjjAxdkvJCFsQGFhDv2hSsMnyYv9jqSTqsJK54AnP8zcD74gi4bAESchMXuwuGo7yEt6H8",
  "key13": "39xFeZdrnU3KsHB6HwJs5UfqWVsnvKa9amnHJrExx1MVdejqGmobNtn79NMaT2eGpGWjkDMShcSdpvkHcenJ3rkT",
  "key14": "64JphNY85ivoUMue8x16JnWDcPSSoEShkBBYcCATb1HizmCyVResLwjkT4mRzWZ6yiJvjyoBvBJKab23B4xvssCF",
  "key15": "2M5c9rMoGVpsrFUxkKsbUd5aw5jJ369oB6TomYNi512QN6o8SPHnHHh1NysMGfbbDfrrkLvND5QpCz4EdaKjUPrE",
  "key16": "3dinMziC6SQHY6r6jK1pgoBfnUbEPiLuictw3agq7hBMrRLaksKG2AikAbo85HKoh67AK5wMVU8q9TunuAUvmhP8",
  "key17": "4GKsGRsoCsXYsp8eNoKMpFvhHt3YP9FBAZbmjde6RKS1ScCUxGeVCkHh8HxEW1nGb8E2r9GwuP9zsRkX7aRSJEer",
  "key18": "5UZj3ejHaXdjvuheTF8xhSp1UmUD2HfNbHzZbYKpF3HhWsiuu8GVmWYxgbFHy1hm7UzwoTJNghqvLoYR2Cs1PaHS",
  "key19": "2qK4b8k7jFMjbM5xdpZthwj41nTNyTfd7VxkkcByiBxEgoBb5AC9Ak6gw7DM7dJv6pyt2XHe8DmGWRkkCXXv1zcd",
  "key20": "4RruTm5GbwTMGUuKsPwnFuNHSYKycSY3VJjHTePU7Caxvn4fzLobrgHZcL6C1r8oZuu6zxiM6GEtTdQij35pPK4D",
  "key21": "2qHLKxfSsc4p9a728bgb2Zmjo65tkbjG45FNMG2SCu9uZQ8auMtqmNMXYb4cpwiTMsDYkhmpURcQ5yEr25pVLara",
  "key22": "5a1QrVH6prr9WX2d7unJfBYYmYEQJM7duMCRLdBA58C1hgzP4S6hBZ4wSKWrWowEvK8GonzdrWtE7QRurcm8y6Ft",
  "key23": "2q4FBBDbZTNBggW8zFPdtz8niB7W9ZS4ssiW7nBivatLMtsJXh1ThFdtdTqGpUJKfxkU7iiZXa8KRhXPtJbF23CP",
  "key24": "E2EVdrV1yANL173n7umM5rYEBwC3fBJFkEf9VX2ybzTxbiC4SnRcmz8ZirWcRdZCb8TxKn8o3dxqNLeKbkiJr41",
  "key25": "fTdGBJyCg5FSChsFSaTwiL3UmfbqYxM3MXvm1q2sT8aZVzwNyknKemNGz3ZRzyUyXSGAkDLchq1UAGkRVFH9pp6",
  "key26": "2DG8aBppCrPvrSjWHipNmLKT5JuYm5R76YPxrEgsDeDoFmc2r8qJBbyXHSeoLNyJhjtSm5k1XHsyCzTY44KurYEK",
  "key27": "3cSW5h5bjWyQZXc2MsRHHez52bQbeFnbL2xK9HH64dcGPNRjDjgz3K4BBenJeTkc4hs7oNC6eitgRzJBcBWncAFs",
  "key28": "4HPe2wVgBzXy3y9rLJHSPCoKhMiY6ZUxTLkJWyxRTbsgzEXGjFZStJ1v9qrF32Fd5bTmu3i2x6xTdiMqRZWDhvGK",
  "key29": "2f8vTCsiPDZhQA4b9ZWkGSBoUqLDmABBxcya7BSCu7dgzFqt88vwQJbHnWFRHZrHxBSQhs3ifgKG7aRn58tFADQa",
  "key30": "2PGzBBvpBg7RzZefHf1WY5S9wLqrhAqUrqE5veVsuhUYd39tjFkuh4JmFJV8oKdjbdFqXUyY2QNHqbpRU8yqeS3F",
  "key31": "5vW3V1FGZWkggygMdquAZDxnncPfG1zFFtL4YsacG5aRhTBchJ2KSeGHHNiWfUwCagM5qE3EG6JAKe2G4LHUfsMN",
  "key32": "3pEtr2NCox266ymKrE25ye4p6ukJCcykz8QaEaFGHC2ysmTT7JzwZZZoYKRabBRBTjXc6hp3QLN6EfiX4ug42SE2",
  "key33": "f9f3XdSsQ84zzewBjrWK2n8jjKu5bjzD73oUTXsB5NCbUSstmpcw4byBZGCoxQ9XLom3eDVxW4dyi9BNttUidtp",
  "key34": "2YiazpHHwsN2NMzcjg8B1Vhwhm5eqT5zsJcZsNF7hhDuXphtwuDjqJ3ePxQSMrLPNY9eoYz2pH3ppwTzRkABsoaB",
  "key35": "2vEeJXNnKBK3nKfxARPSd7gKZSNX3Q34c9PLXfpNbGXTEA5mvPCxuocUonvv9hEuGv1EZWQLzdzaG1vzxorc5UKN",
  "key36": "5iB3FPbUmGKiosHU4ayevkdosET44eHoXECZmHyBMvLq5iwhzVd4NwLVQL9UcWZVWwVtzuPnvpYfqX7eNU7nMtNN",
  "key37": "5F5y5SDFVdgwayJmY44ETBqaGeueAyXZXSRpzG1EhMFuRe8ZQTRB7dcorT8wug4Da9E5kubmaSsjsPTkRy8NN8UY",
  "key38": "5zwEyqWR9DTABbG8iBsvxza7rt5UAQroeex3eTzT9XvHQXcLjLUF37gTpBMdkCMm834UhJ8UbHMJoNaTKaYL8kN3",
  "key39": "4SUU4m3cZZczYFn1191ekxGGj7X8CbiKuSyT73fRPRpquzXGT52GXGHzhGf4umBJjP4icLHeq3duNceqy1qr2iKk",
  "key40": "4ana9rG8dJyV1TJSYFNadLDCVDN34abfcHAYyiGJ4Rdq4XxZMh839exfuHyMX3r5F668R3o6QWxHdo4wp3EXJSiY",
  "key41": "5sSAQx5Tr8WChoM52o6Lhk2LeF1F3jGGkypv4WFaehRHQL7nLCNsE8EpA4brJ8hFQy5jmn4he8KvG8jjHffHanFn",
  "key42": "meT8RZ1AaxYi5ZrqzESrAwECzEN6MtuhgVG2fqR8E4CRjM3bnwCYcZD2CJuXnenMitCfU8HJtZCoxdkA9QJmAbp",
  "key43": "3EhPpsg2vwpAAmxMJ7rA1eahBeCHCAj6Em3c9XHg1ZQgKYtnzU5kUejDTEXdPeXS7LTM7VjiFdL9qgYtkMzZvRid",
  "key44": "tHvEhUUokkXaNt7TzvCkBpZ5Mn3dBcUv8bF5KU9VmFG8aaL5FosCtJ8CcinePpPzrnBHa4qthwszCALDgFD6H1i",
  "key45": "5gbkkaL98j8JzV2pecmuzyJaMfMGamwN7E1YNgLZBV5xoi5HKeHnuLpyx8kDbSf9gvo4rq8TGsNo5EqsMfmatocg",
  "key46": "3Vqa2yV281aosFNsXYEyw7tnaKyE6AueM3yq9VcmmQXow1bvCdecBUcu2xaZx6iJS2avLt1QDanvpADLW5QCc84B",
  "key47": "5CvZXJZJ3B6L6f8pSymsoETn3kEeCq7SpGfwoL29msd2GUkUnQt5s354s4tCXNCVeGrWrAyNvPAYqQvNyRAtpoQX"
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
