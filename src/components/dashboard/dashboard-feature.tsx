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
    "42epttK6TeYHumo6oW8t66o27xachUu3bs97t7Us7fND8sTVkppVweGg6LoAnqcxUGNuwxe2oHcEXykTpz33RCtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTVyPUQ6iBA7hMTSQmUtVQb9PALTmtmQUpp1cPN3VECrnTb9hwtMzFKTYv35EwnqpSuguwms87pSbN3TqRSCfQn",
  "key1": "2f2ZFpa2m4rsJghQ2eVAiiMdCw9VaADzeG4nUWDNeVZ6qWrdnYSECzGMVQDVWWoKBzcSh2GJoEWsUftrRXrFzfoX",
  "key2": "5cKVVdjpCBqJ5KqPa8PYqV33iWNMK7ecESc2XyHriStk37N1WEa8JrVzcSPdUeyH2DKiKhEcFLCkcdcmfb9PUokZ",
  "key3": "5wbyR6nUanPxEFSrkp719WWwHqCHbofBHZcDa9BFBLqB1Xjr486WaXofyjW3bYDUev9Q7XHx38sPNwhjKuCF8mK4",
  "key4": "5XEQRcYE76Yy81fbiUzUaPQ789uPyiooDCQ4gUxC9LMf4AmGeAZEkTjxLPBxqdKe9BFy8HDQHW2STtrwJB5HayPo",
  "key5": "67UtTJ6AnoyVoK9UEvbH9yog4cZoEz4hfzokAH4kWEwD4oJAX3KLbcPrDiAH5C9xiu7XcwN3o5WhYksfJGzRaCK3",
  "key6": "VSgEvokMLhs4jcnVx5VNj5yfbToARwvRuD3dKsF2KfGPmoXiYmratJeKVU4tnzs9gXzuAyrUWVyzD41PMJUwc9N",
  "key7": "59CWvDZyrHkkC8bdXrttkX5uQX8yc4DUC7u9bvEUBhXvCM5vTjYXVbPhaaHVXUAHq3T4dDXC7KAWc7ie1UEc7Ykx",
  "key8": "61rJYRUA1FQSzw87WiYPEj7dZoCSBwqWz5JN2Zbzydo9g9Cudch1D7onPi3wumo3oJAySkK95JfxVUtPHBtYgaDX",
  "key9": "Ujj8FEbroTmQw5JKAvm2zzMSoJepr9xc7fH5Bo5YWRexxTMubvG4EAYoAcmxfkCUhzo6KPViM6NhphKj9wNisd1",
  "key10": "3pR8wyUFy727E6HB6eSXa6wbHfznCswVLAe3MwVNM65r3HRKtRGYk21G6s9ABghYLY1Hs7WSHtxfpQj4scGd16cP",
  "key11": "2vetha2C89WEZfVpmv6KGvYZBwfbGXAF9R5qxstESqejYZyWBoKks4UF8unS63EhRjzDzgX95QFrdN2uAXv1YHtJ",
  "key12": "3LwRTdcGyv273BeriTHH3v96jsLX9hMQLi7ur2WZmFrDbu29BSMY375c593xzttQgNdNLdUCUs8ZmiKafTiNHckU",
  "key13": "43G9UVHc2Hwf19zQKFPBQDX6ZiwNaiCyPArgAjdoktnxC4rG6q76EtPCsPPJUDCGLUzMQ4NUxYvUibcJ4y7rehsc",
  "key14": "5dGe4LDkqFnbMbG4NT3kjx7hfbgy8iwcQQjSBmuy68NctNDiqKg2jVPPiJuwQs2HxboP446gbxcMVMkUBYwhvyap",
  "key15": "2RQQPvkydDDHy1mUQWvpx8uBGvB5Mn5fTDSVheLhSMj5wrt8cUD46qFc9Nt5kDmAiyUqs56AKiyBBd9CN8tWfv8q",
  "key16": "2WnnAgeGEew66orTi1Wp1dcf5pM1EwHFGBW1B2JyMpxFFFN4m8irJU9JANsTVpShfz46B5NfzhRyvHNS3FetbXNw",
  "key17": "2tYtQw8YQKH69i2qYHwFxom5PJiVJ9uFX7CcoRiQJYf8ow7a9tRLXeVUpjQ8YyGpAg9tGS86WDbYkUprzPTx8KfY",
  "key18": "32zrLA7mMuXxocx6YVKPCMagQuAnLxyqkkqtABY5tkWrvLAovUQAgix6ZoxQJkPp5WevQhKTVcsQLxo5sgZyQoH5",
  "key19": "3imQxrseVKkS3bkh3aoFLUK26NoWYZAEfNpvruH3mSkPkDFXJstZ5gMFzStGabnSHqjaFDwyWsUVqBKmeXi8UKWv",
  "key20": "5ZVQ1ch8tcYQeftAmaoTJkwsxf8ifwhE6gLSPKDfQApoVxhgjvrj5rTV4Ad6PkWbLmtvo1569vAz59we2YVsBuPX",
  "key21": "3tFKAVbzjotx8EvdXd4aEnpvrzoQS2rkjubum9TLNcCodtyH95dJ6GBnJC3M6mt6oUiML6dxRV1RiCHYyDyRRPrF",
  "key22": "4pacTG3joEJgqvTeN8fXYg6o8EWMsQYbFsrJZMu2QRkBWi68bMWWzYv6To7s43tUsBGwEk75NV9usk1VZFcd27b2",
  "key23": "2kf477nGHQHexaE7b8P7hsyBjZkpNS2AbHuRNWyiA2PBWAT8UXt1LErSbrtonfsG6LArVNF9q6Kj3uH1k8kanUpX",
  "key24": "2FzXSZjSDHKZbwwRwntLRHaDCSMcA1cRgi2fxrBtWFMxcxRCxKTku7VHn6yGQR5XPkj1pWq25fsjboR6uB5riei7",
  "key25": "4tfUJAZq1RXwnGZbqvzPchbPUNrasCuz3CihNcSLkVMg9ZJE19ReLs7V39ckqW8gA7aRiNrzg27mRVWZ9kPcCw9i",
  "key26": "YPAPaw8yR8V6oTmukVhnUCeK5D3xFxsrwmEb7aLdLzyf1ZEnsSGqa1ukHBgoKmGw8kLFCjGVdRccR5aY6CTDfi1",
  "key27": "N2BwTFTvmQBG3uxc2iTqx3FKyz4kkSpYaSdn5ooMDYWFZh5pGhuA9JRR2FvdoPNpMchdPudznFWzz4Vv1V3VMCc",
  "key28": "4NbBoUrL3t5vMuN75iQT4HAf5pif7oXDDiwA7bFUqswaRxJC9FTgcwhTViGXcNrAwQ3nc3E2P6nVriGAqm2QBexA",
  "key29": "5JGgHuyerVvQJd2WnwtbHvhgdRujvbJPVHjF14Dmxk8xSNXsdufGEKTctmYTAdD6qFdSNSYiRU8eR8Aj5kZ7eK5a",
  "key30": "3LPGPbmKKWCA8aewjqChumw1PjkP17STjEa8J9a55ymtE9eQpaCcFoEsxdG92zQN4cHqpHvn9kaMN8Z38VfDhDfB",
  "key31": "kMGJwSpP6XyGFrzZR5LpKp9ZkVM6UDyLnsSSybeECENB8mN17L4Nkvq7u3UNs4cjy5F66VthHtbHYSWsD2wyhWA",
  "key32": "281nZxowkfikDKHoC3q8c2msbEWAAQA3JvBSsufcMum42Ni5i3X4THsA8n1622hAwuZM9USqs4cucJogG6rtuHHo",
  "key33": "3RVhbzKrw8tUqCkSBkdC75yqQRQEJF6nx6D4LfMtZQDS3WL5oCPEUVSksFjCMfC23FEP4RjSoiKdrsbnLVFG4Vvh",
  "key34": "5ygbab6rSoXWXrtVsSBXJUKN6YZX1BxCfYV3TQXc4CUJg52K3txd5aX6BverTSbz3gLnEKreWxTLa6ecVu8JGCDP",
  "key35": "eCAHqwMXVZsu7wC2KSPKHCmM6QXG5R2siv9uGgFXq7aUCJAZpoGbvb4VJWSeZqoArSYCjkeFm3WnPrkYJo3T8x7",
  "key36": "2v3atkvgWvqBwVkYVjbJkHPNRPodB77bgnScyXvQUK16eYzUMeKdqgLqN82rBKbnRHcVQKJ3Vu8NZhZS3HVsDjA3",
  "key37": "y8STzByHa8WzgpBTLVC9VhEHpCtgaifpD7KrjUoSRWdMJBh6p1V41MWzHhk5peArJD9PtuECviXLMAkN3iWspYf",
  "key38": "FTbbHCuXnPuMbcWncCYqCYfHGnC7LGY62HDQ5azL25ZgbStmPD4gfxb3Uw1VhX4k4Jh4LtEo5sQwwwYW2QCteWt",
  "key39": "vrpkvtEJZLub1M13UCoucBv4DiP9QhULMYr7y99V8bpywbjx7E15xQGdN5eD24t85ShECjBRA3rptnjTaRcHCKY",
  "key40": "677YziNkVSWn6XLwAfDVMHKxqvKNhN9Rr1YYSgfzXGxwtnpPD6UERazUZzobVzuGiPxj7Wy1aSkbL6FW3Wk9foyp",
  "key41": "2BBugJEcrCSmSteCqzZ6hhwNpxEiEgQEB7mZv3a9AAiYCXgjt5e6kvKCTkyR6rqEuPHNvoXdfn9Qdqu6j6fUbqJL",
  "key42": "61ohCw5ZuzHDRHVfxdLStmRP9yfifg7uNBUgkgPXbe6ATtd7mzdeuj9uD8c4sw8afaUwKnZAFu98xj1e11cTsPHg",
  "key43": "2McWbtUDuvuHqne4QD8wteMPR7DAnnVqsZdsMvsqMhoLctP8sYchnwe4RNaFFdmZSrW9wXBasokMMhSTWK2VWBBy",
  "key44": "tpfKTEeEvjcHYKbKrRnkV6r86rpDWY3jkTpvbiUDvzKcE8rDcFJN2aroaUan3c7ofdMNzYpGMXhzmyJyrrTgxpW",
  "key45": "4YGYjJWjxYfZQo9tJQLWL6jwmAVVH2xQNviqu3ta2WMEsYdMSBkmm9iwNjKrsCtdBVQcfT5erSewnsXnvac88G4G",
  "key46": "3JBzXXjTt6Mqz8yNh3bzXhyMXywyWbFkUKuBFBEn3SkfdwxBeJ3wQfocDAcgWdoTbho9rnzkDk5moTfJTBysx1XD",
  "key47": "457nF5qk68ZjLughbYuywDM1UG7HUDr59h5B6E82X9xpjqbneVnMqsHHNJXix5JBxd1RbP5sVk7TTabNLCuGHfTH",
  "key48": "499BC9z3zggkV9j24sVEcSmeSmuZoDp6csrgeqJNLeMeE2Cy4n28XPvQ7HMkwJrnZWAX413DsgfbH9iQTnd6B6MX"
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
