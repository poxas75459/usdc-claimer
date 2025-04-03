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
    "4CcxsXFRv2NydZNza2TG9zYD56vkukrAMekmd7z9Bs8SD4dR6KNv9kuCErwXX6wPeqHmGj61fhpBnWQiJh1pVBf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1cwktrCbNaMSPnXMtcTuh1pDVdjCDh6YEzyNU5a8NNL1wwZFKT6hN5L4muyx86UFLQmY7eVvsaBDVPBE5ymDTY",
  "key1": "4PJSdevgKw8ztbMCGhDehN4YXMpQDwERcgpw8vRfuZJQSKyggEXXxx7j1XrkWt2jvGbnBjU8tQqQwGaKgpmZWNX9",
  "key2": "7E43F8gSeeqoYJNnfyRSR7ognJgV8fQoCVuSn6BqArWJdUW2U5N5YJP1v1BdaGqG6F6votLNopkMzK4tTSZvRep",
  "key3": "3CYwVYYWZuSJDixS7figyvfZnBW4PHeUW27MZAkzgSDYbzNCk4RTZcC4ngJX5sXS8aijjSoXj4yabavF9hMK7nX",
  "key4": "5DYfSjYRcwudykuTvKNXezyaSKwHTFbWgTne9FttQFPDUPvgegukLtHFyxU7nmFusregjV9cKVwMCaCc3iBmBZ1X",
  "key5": "RSJyMEUeJzjxEUQ6DBXUMo3ZDsrcX469fF7YhzN2ZZ3hn1WHUQA3D1yGDMPi5vEUCUdtktTsRUX2Chc4U1ofEQs",
  "key6": "2s3966aQuiNizTTnSd33Biejc7mDcyhtHkUi11Y9Xiho91oQnyFMBNhcuSTc336rKbazc1p3mgPTz7VjxH8b2yrU",
  "key7": "2AMHDTBjN7QQTUycrkMucKSpzRJpAMYrWppGJDFe1EhwmjM3o7rMaCkFLT86obvoHGb3PXu7dewjPPKkBtDB6TRd",
  "key8": "2zCvnDrGbLN2oZQ651bFQ4PcfPzxBaHysbq94djfV7QivSZkfSqaXkQ3BVRDt16b5tSr4jJRQnJNTkdBA21Hs8Y9",
  "key9": "3TizA4mchuT1vKxuzyger5F5CnozSjvEUwR7vfpmAzQxzKfDTXdGtwqUA7cMCCuAtkQNuy2AcCM2xBBTEK29Y6tK",
  "key10": "4EcfzWpjokuf1jyHhpzGJwbPTUhpAWZfH7ZDNFieKWBZRFP8q1XjzAqVRvTChLMvb2nUjUXKi9e7AxPBRVaNwuLK",
  "key11": "4Hdp2t1ddUqpiL4dc6XfNZSBxSiRkd6rxiMLvNXhvGXdKE9gcVphy6rum3bYSQmng94e3ZK7VBg51x97hXM9Hyug",
  "key12": "5wUgnJ6zVcaR5883FVXckW6fCLNirjK4dtry3ChC54z1DyJifTu6DuimHnwBVYagsHEnHBRfAWio5XbPj5Z4teYx",
  "key13": "5pkBBCY4H3ChVFQMyde3m2VS63DVVGdpbeLqF9jNT5sMHRkTSu9MHNmURRFYghDNbzcETPHVuH4TH74MWXJMQFTc",
  "key14": "2zpLjutayd8qhLqyouFqJevzHBfEURJokcQxstCpmNfNyk9EyXDfQJaDA5N1aw422VJNzgBnEWShuxpFTgLFn8QD",
  "key15": "3w1nbsXRdfVihhZKSAtKeJqwaiHcD6gTSdENcSjJxDd4GASe8c9WRyYtHS7vtKvi5E11cSCuvCKFG4nY8AQ9tng2",
  "key16": "5YtsMzgSGWLt4WACnytM7saqRGmMnR8ca24GP4jEL7WrktLtZSC4qa7Xkmfks7J6pQivChdpByYXuAeSE9e5tAmR",
  "key17": "5d9qkkEw7hpR6ai5imTwU2qfvTkdhTKzLHjmV47Z4ae7YDr54tRyDX5wRewPjTsoYQsUxm99aotNugb6V6JFNaZT",
  "key18": "gnznSAjmgz9obzymwP8YxuXvvHsxCL5G6GRa9fmntfmMAPBkKbAzum2THrFR75V2iaSBaQ1N1fYj6HegdbvNvvR",
  "key19": "3fLjLhqhmy6aCrvxFV5ZaWJcyMS4WwCJgjmeKNZpPYUDa5d4GPeETB5rPuH78XMKih47Db1CbxA1Z1MjwyLyaAQx",
  "key20": "qGPieds4RFbbqpZubJcfBGy4a3H5YeEj9h8cSAucR8BCnPhHXEbGeVPnoLFxcQaT9hV1qfirtH5f5WxXuH82XTW",
  "key21": "4ckY7rSw7HEP2KaoCDgL2k79VLMMuUGakArdiUj5c7QHf9LXTT8uNvRuVKrqzarCoE7r5faLcM4W2wZ4tw3xnwEp",
  "key22": "3L19VPJeC5cjXg2SeByu3epPtLiUEyV7K3fVP46K1c3KbWpf5MMMcqd9baWcVqWWpNYsz9yLUpptWUZ7XNsLVrMW",
  "key23": "4R8bNmPoZAa4AUTu5wCqnBVG13BxfvVXgpTerjUUbqh2XDjtCdAeu372k11iCYoA4FjcS8sKDTmBmn7XyV114EMg",
  "key24": "3pmHH8DrAsaavLugy1piv2QBJ1NEh8kPLzjMz5bE491wspQqa336A16d5JDWbv84iigR61N9zd9myQjGeG8aoHPz",
  "key25": "t3oPc7qHRH1Wstn5X7hURs7Fq9GZ18keJZ1TruVEhNVnt9hDxnYJpgoDAN3JdTqdXt9gTiVSZz2BvtnKupsDWQh",
  "key26": "3pJ49fG9fdZsgf2GCzvPBDutQacexf5zNQwQW5LyUkQYuBJUJnjuKk32wA79F3TyWF7mthc72hnLNG44jVCn5qL6",
  "key27": "Z2kGyEeePFhpqVK5dZQcPpVr9hfxhK2XX6wPoeGpHrXxzKJ4TM1x1Pds6jeqL53XVvsNh1hGhm2hjv4k6V1ojGQ",
  "key28": "5oipLdQR56bZWAEwt5WDU8XweoKZTRQsrj6w9bZ98ZHRBTdRg54H4pRoBnM9mUiZ21kKfRzPmWR7KG3qJXJT5pdz",
  "key29": "2xAc1ZRjkVrV2vq3DX3LzHR9EB8euCgFgKW1TYVEyYSbb4gzfUwrxD1Z7XJQZKcNhizyjzGNEV27MmhXB9NESWEL",
  "key30": "62qenbV3VFhs8aWUdqLsriL17U8CAqjgWxDLAd1FLHR2dy2GjQ1jRG9dq1uq1LENXzwPQ9vYsetZKvQXZ4uxCjde",
  "key31": "3tNmgPvNmBe93xPRoSyQjzFcY8GfQbyYRbdwNy1PDaSNqpEbEhpKoxuzVHsiJ3sNGERee957Pshryy2nZ9fjU7y",
  "key32": "5sWpPYgQg1CP1AewFwt8vHtqK7bwPHAMHSFYjpsBnnGxirf1GaAKmtRFN2EAYjaNKEVerrhcxNmdXjYgYtdFSEor",
  "key33": "KXVWw9Sw1Ac8QmtwNLz3j37iVhGVGJyLHmsvtTr9M8Re9Mz5kJsxQvyVh8ZT9bufnm7QDjv3JKBLR2nkX5jPiEB",
  "key34": "5LbbGFRW9oTJG3iJwAxQZJTwVzuYMpdWoa8ndYUx2HjCNtaADcwNBS9kihjCAberQTFjm2MJcVcPfHNLGjMddARi",
  "key35": "7Mni14ugasoRhTCi3xnUBwPBigfT7BSLfsHE8dyny8CL1YNzy1dBAMwaisAfWZeT8tUuVwtaz1FwALLcoVzkBXt",
  "key36": "26ffEiLpUnP9dRjjVhJk4xejPVh8Est1UBGSrctY3c8Lmmu64gWv7V9oPopMGZLpYU52Wi6DiTFPFUZMmfiKs6z4",
  "key37": "2hvMQxcHZPJuJVinJHLa16wEiEq8aWoC1wok87TpboEEgLhyn9voq6iWqvZuLUbjRsF4pxsZKVKM8oqrYtrwJKBQ",
  "key38": "5qtYbQm1xgrMsHLmik4qqHmNwurFhS7stf3LAxyeYxq8rJY7SLUipi4bnn6FUFu75hXUu27xtA95EwoALP1ZCr44",
  "key39": "5dG8y2jVsyyfEPoLTXAFnMFb4Poap5G2PX6pi95MZ7YeDTCtZ5xARN1bUTQWtemazjwZvwB8RqTskCuXTbhgEuFA",
  "key40": "4QXCoznMYVnHYU3nXaseFQLqkief87115jyx63C61UZt8HyoQg1RXQM2VdaXLdYzsjNJTmdWZr3p8pziZV6ftWM3",
  "key41": "3Az2M2eMjaVp9dbki21Rmhb3N1XbbTwEZhvaGxHkaooiFxXRH8d3XBUN3bZ1Z8G14NtCkX2ax6Lyn4jm2Di6fVYc",
  "key42": "23cvEX9ENzZtv3qa1rNEJGKnHVYUJLaSyzW7Qzn6X8aRwCWkS2rCS9VqNvw2bQynUF9Hyb9fX5ofBBDMGXXGFdfr",
  "key43": "5QqAJMqdhGa4zUDcPZcGBsmjZU7yydTMK7xAwm4FVuX3Fgi2Q2wWMUeMCC8gCAHhkW9KKGYQbT2xTtyaMnhHJQ9p"
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
