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
    "8YvQzdDTDhmATLHKTgD3dsr8Qca3FeC2wyqvnRsu2MqtE1bWXjajrPRWyv4CczgJ1DAG1uVaCwiwYNN9kV89gDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCaVhGoGBka7q7P3h1uPn9VzyZ1x4DWjxz9C2XQ7ceuDhov2rr4tuFaGLnREUVtAcSYdP6mTiyFGMgC5u95f7Bc",
  "key1": "5ai5XLMMreSYRfn96fe3oV9eNgC7Te2zNJqUybyQHBAcJ6kgts2SqnSsUuaCToYWoNpQzoP9QRo58SCxWAmyePWe",
  "key2": "cZAtMi2C5pkeJnETAM61Cq9nisadrfEwkM3Qe4RCk8emDLs2DgmoV7chzcCXqgmCWbgCcTCU1vAFs3pm8Mr3vkC",
  "key3": "5DQuWBya82S7ZbRK5xDtGUXwYrkZv5A5wiD6fnwccQfcMSpKq8obzusrbKBH8zgpvSXeBZr8H84Vzk8Yd4T5uLL7",
  "key4": "5wAVRftJyLLHWkd7e63hxgBwamVnyaCZqz9PSCgiPQsmXWVuxV5kHypZ9Bo8AXmXnzYWkCY3HSvohCSR32QtEWGd",
  "key5": "5YLKHtE78jDXdkgUcN4j1jd9hq8h34coZ7ZmxqZ8eUmf8eTTo9CmdAtp5gkCoUqqht1mzFczYfTX2anGiwZHb1uD",
  "key6": "23UZy6AvWDAXgW3gYtFnUwH2Vk7FTx7pUYR2dQk26hXZMASmF74kqHPwfwJbM6NWuVpyDtKPES3DVYd4SjLAQ6N5",
  "key7": "46kLDd7MHuA9GwYKgNToPtQxKnqngMVRaLsPVTVqFUhdAN227dgNpwh478KjyTUYF7Rrh3246oAAufZ1vS5SZtmN",
  "key8": "4aaGsoWieV8crd6HA7QiduNs6UcWicUtnwGxnrbF9Cr8m6NYx7iiqaf9hBxUgw39L9nP4mU3EN6187gRsUWWGdvv",
  "key9": "3bQUEmNyrq3Dmm65iX3qwxKeJC21rEunoCPKHpUrNqU16xg8PXTWmj9TSPNepBAYejXS1JXp6n6QpXHyVi3Wd82w",
  "key10": "3v9qBxci5ntamaDL7uaNFRYwLUD9Zakvru7SA31zPp2pUng8roPb2P5TvDvysMHxqXwQT7zzNcLHkYDQnioZK4KJ",
  "key11": "aNJskrndQmF6vAyPWQ4xTaX9B4HJ4Eh6vaAdU6mijrwDAEwBHBRiLwvPCKxWVQKPihofARQL5JiqmbCJtA7aimd",
  "key12": "3XF87AXR7AfdN3W59wxMk6bUDQL1P3mhsRVjh9pWCzsfQGb5myKmrz8SpWWHkSMmrc2H16xrki8Y6WW7smb6hBn",
  "key13": "65NF8tNhQXYAYHB6ACKXm7EjjkvVGbsTUG9z5rcnuSEaKMpysfg91gBYA7Lcjt29AgFbANeCEhmqMoqR1kHHdsE7",
  "key14": "32CfLJNQtyR8tAGqDcMt6kRJ6r6ddBFTRxQyreMZr6bv2qWuiWJg7dhomrCmXrLxuZ7A6ztQWeG4dH4rU4ZVgHDX",
  "key15": "3b1Bqw5aoVhejrMzZ8x264eVzG2zCqaqPhds9XPxykuEHBrqnjiD4LcfXVuu6Nx7e9sqbDkXYcDioztEFU7AkPvS",
  "key16": "PPcdJM61y4qMqRA1sCTTUGgNVqyvAcBiWe9cqCZAfyyQMAuNLLQZTbriimHdzWJq3XuQhQ9bUAYz9mmMyrF2rdf",
  "key17": "2tc1DR6rTRTfSjsC5bW6iyBiYthLJgsi8NLiShWvihVPGiF4VNmusLyy64tLQbNR1wZUKjMTjqW1pVjPfKhoRZwF",
  "key18": "3vijTVRaT1LerVPHgZu1NtnFGVfXRDGF6GW4zqsu24YY1PtpFqsVJdSSU2j9TaCsyCa3S7ANheNUpwaXLcAnvnjn",
  "key19": "2rRixEDshkfH4sWCTYEFJcBYbCS69vaESxRTEqepaXVXuY4e9s61R7X7KGC8QHqkuAf2SZ8BUmBKyKj17jXb6xEX",
  "key20": "66fST9pquiPLGNLBSYXn7NByhY1rWR91NEsBqSTHkVrDLTPD5SXcn2bSSSXDNGre3SdF4UD9ob4Lfe8rfZ6tqhtE",
  "key21": "2B1t6uPfUFpfB8ChuVENHfrZP23GKeZcvznDffE8EytcKyrM1xP2SCD7Jr8G82uPL6Aa6nMMhHYL2EKGoD6N7U87",
  "key22": "2ctqvAzyDSgwMpSrt7DnnLZUoAPaucqknFG44KRxrwsrFkXLyKqFy1zprco5WuAfY274Bqyx8oKfypvJs8DgSqMr",
  "key23": "ZFCFmsSp6MNWSbMy57dehNQJUCBJ5avdfKRQ1YoVjGbaLAEeaBHAAGAFRzFLEt7SUomPcJaKLQVYJ7Uz3MmZ9i3",
  "key24": "29wsJH1WTbrU64BkoMHMjdHu58dATaBPAaLLjWBRXtoGq1bfGY3XYyuL2m7bu7dTGD18QXY8QH9PSgn6YiLX7seT",
  "key25": "54ZNPLomYqsg5EdoNAL1M953Fs4SZYYvDZEHzh8tphfShGHz2yHBFTGP8nrgrgpCEdmDXUZ9LrQXfkJfPG1iBkNH",
  "key26": "3xxXTDV8NeUbanwsoF8SB764dPAeR9PfJeci9YqqcZBtdLfc6iaLdY1NP9uthDrcjzTeGQToBLC35Qu5SnGrQhQy",
  "key27": "4iRBArL9Act1S4Jo9DimRfEnBT8RQLsD2usoSVFLPYHvEEsq2hNaX6Vtt4EbAL3BmEyQ8hQvRDDTCYfBVyzqbGEg",
  "key28": "5wZpMLmQ9pKRHRSfcx57cjx6XekZBvGjpBpKru4NH91FUhkDoELw3MfjusZJUVZUTYXSPXWDFmJxe857gWPxbn1T",
  "key29": "4wAP9FKdNFNTCzzo67Cz8QMvXhEDTv6epaegwM2K5Md74WiJMGdBmewtQ5hp2KdEWsTdrD5681bPypT1EiNqoKJW",
  "key30": "2agJDgyRKh2GuVYukFTVgDhruqaJfkYY8q8VZWMEbes5xNTFnno7eME8VQ8HbyywVjan1QwVnxLpkVKB6oGn3Szm",
  "key31": "4miP8kq6aJnTY8dSFpuKgBgKaJ82KK4NutRDAophQTiuyqKwGNGQYowBKXz7dgDwympaXzoT36wXZrxjhn3b3uk5",
  "key32": "5Dz2N5PUhQaAMPsn1ckcfh7SY1hXp634L3HcsQP6woMhzLjhJKWefNUnzoydjTMZh6aY8TzDBcog5eqzTtRDsQ7H",
  "key33": "g4y6dK7PPuJUAgn1sjCjvApVHXvDzxG3gyiLHNjCSQsAw6aDjnjQFsonZNZLkUH8y9xx6HGXYi5S1bGbvj3ryEy",
  "key34": "4bMgjnizNixDNVHZd5HgumHhhzbrk5WDLuckDjCRDriJyL4XfSH2tNoCZE4JNDMZ56U4Jy8qc3v9TJCLs1rM7ifx",
  "key35": "5KyuPpEPjRdsM6NaMpnV9E69aPkFRkQp4KGfSYkLotL86QRZYpTSjyeGQFoTyvypDTUrD6nQKyoz6ounGzEhzaAN",
  "key36": "2PEdyuaRKPRuwkgibdeWuJAeviEft8rei5wvwjuEUhqeKGyUKKMDKFLoEvst59CgPbXLAfrNbeN4nzpHQ4T3RqZ9",
  "key37": "2CdwHqPdzgyCqUnL8HC13rewoqXysejSgwYGe2NrgfbeVY57CfdfkL9YxTj6FVS9jkDvy4DUSXCMf4ePs5hk9orf",
  "key38": "3Dxjdr6bRYF82buwDva5AwjYXNQVsHoYwaPsSv2yd9Dgs7zB9nVPKhWNUoNBvbQ2UzAAm6EpCmfV7oUKirm2pPC8"
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
