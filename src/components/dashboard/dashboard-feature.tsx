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
    "25751HrJHCrYsFEPoK4YzpoHAqdKaG8A6CmBKVmUUXVvoiipY77U7kxEkZFrBqMAhwt9fpGxD5RyYC5mqPTxAXt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvzYY77cMWX9U8NbDKsj2pm2jP1fug35ZRU1rLpBHfG8xdy2zoK9VgmZwzgfb8Kq9NZw9v4Uhd5CCRSYrb8vvRP",
  "key1": "7rB3NMwkCh1QziqyqBMDiVSnarYTm2tCjKwgDxMQrMYHTjTSbZJgLM2x7JBioe2y9rPgniPF9YtiUFGrwvyvwPG",
  "key2": "3dr3gWgbfL1wpFr1eY2syVkYS9cMi5LtfrC4cNpWbgvD9pRdkUURxv8DVymXuPnenpbqhMfjnEc5p6B92woVCepW",
  "key3": "26GGeJSrbeAuGjwja46gN9DQar3F9ULSBxTjVWWvt7WdFmqD2o8UsnKscG2Raq4DqFbebebTVhTgbuFu68BiYMTg",
  "key4": "2ZR2GQFgDxBz8PSqNCHGgoSA933gG5d9okCeswYUYHuur9HaJ6nLCnx5qgtvwcLURBvKex2xXxxDFTYgNdsXQfWZ",
  "key5": "3QC66eVxYYUyzbbEGeavwKwVwo5dTLhHV7jA9Fpb1e6Fctr9MH9uMrwzrYwWeHeoZvX43pEDPHWCwdHdCAFfdmth",
  "key6": "34fGy1vuTbtCxH5SmsriwhCzjjfaBnKrtG22qPh5ChFcSFCUoYhuqPbdyTwqqhRVQzVawnBYv6UZW5YpcvnXF6Mw",
  "key7": "3KJVYJLj3uksmd6WaKCuMsm2T4sazgTFWb1K7rrbJPkRSm4jqk55JwaYNxHzQyxHskeQGaAUdnj3JGWHtSj5N5Kk",
  "key8": "y2j3QyaMHEpJN1mgWafYDDkFEgD8XuCFRkX48ggrJ9ueDAhkE7UNN9YvTrj1WqaJ469URGxffY8qDfFbREsEaAm",
  "key9": "2jhKWFedmmzoJGoFUA4HZ7RF69DjDTQ6Tbhg76ETTryqMWbXTv1fQWpW4zhs9f1pPdPQZgA4TTLD8ZbTprwCMHBk",
  "key10": "23Ci5JB6sybFaFhVQer1v5gYUz4PR6oX799HJ3GQjwmcfayi2udr21vzu2kYvpz61hVZ71mPqA4vHzcjDJgM7Vn7",
  "key11": "b5ZAzX4FjzSGHJKvSuwFy8bjd1gkacAprK7cSrrdWYzD1D5G228SPdTJCHNwe7tw2CtzvBURF3U894VrPV4kYfw",
  "key12": "oyXtbxwBXRSnevMHNZ16fvyU6EUQzqbrb5NSdmxQ7KD7s2i9XjUZoxdyksoRTusLNDgtBSZnUCPyehYA39Y4G4z",
  "key13": "4NXSSrXqpGNs37EyMDgmKv1qvXueCakDtBmN9gCg9xgvqEzKoJqMR1BtBjD9pNFPtnYaShzuCBBLyhswqHht1TJc",
  "key14": "4vpf2AoZBuocKWMkPTzaay3WYi2KtAE6ubzMoLxySAptS2EBCuSPhDB9auyhUxtz42FoXq5PNuLRyiFSSj7jqhVq",
  "key15": "2wd5BH9GNiD3BkD3RF6ZD3RCDPrRHkyfkz3H9aQcdoAafMowGfUd75Fwfk6G5PnagUJrKLAomCyf69JB12MjnJ36",
  "key16": "44FatM1thaKdrQcQ97Uu1ndkPxJ9Eikqpgm39WwT2itEsgmfE9VcVkLBU1iyW9n5RFMqEoYSZFfgksMaENUZFP4j",
  "key17": "4EtrJRLKqutjhnb5sQNmp9Y5L3mcEZzsmUiFX2Vmk7u65EuH5v3jdyAmc1V4DRfxaLj6AU3GJHkHwpYF4newJDpg",
  "key18": "2PFM6yv6eMDbTLbR1Y42mHVdeWLDi17SXyDZNJTe6hACJANAMy6q9grWapBBd1q4CZ2sZPdDse2ZDRMrcDStRNtY",
  "key19": "5C1M4NodjStcCuZFQxPc8nc6fARb51vst5L1w3mqgyihqsFZyNRCR9mvGQpMCf9wq6GvNQoCVh2SbdEmNnpwthC5",
  "key20": "UJdt9fU925WbdzfSW9NAei2xfAYZCYQi2MMh9t5QcWP5UqDDaHpDbBdfbCkZSyePzfVZyRwf82BDdVPNq2MkKRV",
  "key21": "rf48NdaNPWHEmDsn4rckbVafZ9WoorPcBuHX99vi3YL3bnm2oYbwmvEUNhQHCp2cYqyiD7qZ3dFrv3R6ZLekDQ2",
  "key22": "EakhKX1D6pSPrL5YHN8cNKgePtA9pDXqAT3k29Dykb6mabzAT3jhpxu7RDVsvfbhwHtjgNpGvauhBusHygj5JDs",
  "key23": "JCf6TpTbobQ2TspYPGc8LZk2YLxDyZL3GncghX6Tpdp9yR7CDFWvV9QFgDwpM2PjkWT9zQuLTTQZrXx1Djxso2S",
  "key24": "gpFftFfi3apG597qkb6HynMDS1ABJbvkgUnX1nXgNELtASrnVgAq4SjfJ9UsNHdNVCatFEkdq5JM8cV7VkyxZXw",
  "key25": "5ZB5VmPq8qT4JerRgAw8KLh8SMqoUc8xu6CQ9EfmYBrh7AnBCeiq5tdPHcUEBahBZv3QS4zkCNv3t1B7MRoZLfsY",
  "key26": "3oQEtKqjWY8T2VhC8ipXKvKh1RFHmmd9NejeRdffBN5siDb1gNCVzzjBwejfL9w8rELoTZZpqoecjLbQRb9MuiG9",
  "key27": "4dX4GgHiC4t34ZArvHxAz26EzAViD98FFWFdECavLRVkZs8AsQeZg6hYuPc8Hp7fZf6aHupD91pKtUQ6qPaZygpv",
  "key28": "26u9HmBBz26wbZksLSj5CZNeTqNvE4CHtcZ7J2rT8RzERRnarMR4PKFoCS4dRznVEzQWqcw3kDHzwLZnCDNrj6TL",
  "key29": "YGMoUMHQ8gi73WL9wG1riw1y3BSMY8uhyc8CPdq2UiWcyRthmiw8VX9hrRdsJrHLomMXXmKcSpjnmzeAmAsghRc",
  "key30": "2Z4uTDKwHP4j5d5qWdsnpmPr128d8FruJPJh1GHdys1iZUeGutiTk3TRM5YdRUuma3uR7m1P34oUjK1EAJbS2VVH",
  "key31": "5a67PKdz6L7nEdGynMFbu69FXfojxkhPuTzunPuMLU388SpfiTVRdqDDSFGWxWieGLg4263uHUnCaw4j84oFz4nz",
  "key32": "hzX363aWW84BwxEaqV3DDiTzyMTYiMFDfW5yP2URpfRAjQzs5Ameefo65y6HedKZSEZmNw9FQocAZhMC1zxRNyA",
  "key33": "5SohvrTWjTERCbyaAAMWz9sMi1D44EzLUGZzoZBxgQH7zHEFuPTaNrppmpurAKHyqE5bKNvAUxviK3Ckp6akJqQ4",
  "key34": "2c38evMjeDN1nq74FAZXxirm16keBHDeEPk6CH1LKLPNicYzt9b919GGLKhcowmvKKPmn94sSUmp644qXZ9RccEF",
  "key35": "3tcYofdBUnAfMQMwgaFJZF85g7aXYhFNkwaMzYxNchRrGJjJinwNXWgF48pHx8aEPaTJHuWuLKRbw8EBK99XsJQ9",
  "key36": "2mBAnqYPamZNAq6oSHdowBuM1MpeZhY82HxdPJ9KPR9kPzqbfDzZjEWvSYG2NcMoNHRZ9p7yDASGvifhb3YLqQeu",
  "key37": "4LYJ5h9vQXbz2jVpsSc8caxaZ4wATgDQ3vycMoHhM5E1RcMzEoMXm5KLjP7jVVmW5vVHgM8eJnRf9oB56BtPw5Wv",
  "key38": "38C6Nhs8yBiPZooUoiHqx1NCgTALjgToeYRDqgDN6YKRtp3iwvuKY5T4DzxPuBPhhs3yQG1swJLvRhG3Sn2QsFPf",
  "key39": "4sBCaAeSS2tC5XDGabMxyY4yoaF4G8PunkMtwCsLYL4NyWdyMtebhanwmPsq8QjQcXXp2LtFjAw3k5TH3RBUnztY",
  "key40": "3V9MgCGvdKBUzMzfgxudsyrYsEnm9dGAfxKQPwwnuFszKsFe8zU34PxxjR3VL9xWZjVFfeWRRwTDB1WNwqcosN6U",
  "key41": "dZnL4197BAEy5aiV4tEFQdXdWJU4Hwu2NnZ2hC7LwT1HiKEpqjVsyFy2fQQ9KV59DY41SvRmXLUpZxFCj7FHG2R",
  "key42": "2CaGWaZmz7d56jy33RuvMh5i9k16ZNcqLksCdmGJfi7GYkcTs4MaJwzMCYSFWdS2LiaA5wemdSz9JhTZcbBzbvb9",
  "key43": "5Nx53yfyUBzKU5iSVYqPZ82bb56acWk88Fge8iR6YH5NiruqJRpDdmvfvgFwEbTA2ng8kQ4orz6ChZcRmLu6gvHo",
  "key44": "2TBaCDC5UDGokk6Jjfec1Q8u3jbSXrzXqoweL9P8HdQRr6gL3apTPygpLeTRsTiJLg2hqGAjg1WsQghWyhrTLFJg",
  "key45": "hCyoobDLD29P9zubjK6TCCCiSki2yApnL7Ro3N6BE1kaVzckUizxuDFx2uNK9zQXeYKGbh5397dL4XrEm7sYMo8",
  "key46": "52HcPm4aXJXfH6LuJZdYBqGN3w3GZSpx7UWuNwKJj6gTthwcRauohymg9EcfaUQ6CqPwwAokHj5aqme7S8zdX2DE",
  "key47": "4XpP9nqWAQosQVeXMgCCV1uQJvMFTFcHWRDR6m7d8Wgamy8jm9id5C9bac1tEtAbmK1XyFTLsYQ1s6BGdh68pMPp",
  "key48": "2rsnHpAcRQDrrFxeadooJ7gYDjiCRnUsUGRb5LHM2zWqPycx8XcNCKBk4ToiuBYtXAFfCwotvyPtLmyx1QNzGZgq"
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
