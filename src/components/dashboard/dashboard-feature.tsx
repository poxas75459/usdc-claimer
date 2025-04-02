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
    "5gLqV4pFzxHvunFG7ostPPECb6dCo3AM74U7y2eGffcZg8BLHqKBtttJzg8MPA9k4Cs6ZUp5CAcaLXGLoJKRTgds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N28DknByuCD8hpRT8SDazmYZdKQJmJtEozMxrJiTMn6bjSLHEBMy7gzYZov6Pzc7b1f7gdtuCEH1vRLX5sPev32",
  "key1": "41fCzYTN8sMkJLqsU5kS8PkFgupqvLvB51HkYZufsybVcPejLujkU9Y3RedodiibtW7HS12Q6XoMEm5RYQV3kK3u",
  "key2": "5nMNo22neznx3a4AjfM1wdaCeyZWbBaeNGhxx8GDBZRKVGB6joM5M49SVdhxw1j35jFaraq9JBt6rWAdsxMdoL7q",
  "key3": "5W2jyWgaKko7tf2uNYCXjrFdKqswH8iiH16jXVWbC89XrrSdBJn4C9ebGxM6E4UXeSCogMmKMcBnnYypMV36GVG2",
  "key4": "4AnNaK6tWe8DvquxGs7ESSo1gRwPWbGgAwZGhKJ5PrDDR5Jj7pPtZT96hVeHj5LBtPKj6nCcMrWyzMhTKsJZSqGn",
  "key5": "wo8HSopio6RQUCddBzy7p2bW2GPmY5T9EuM8vnT6RVkpPDU2KTdyiEkCXrm4kDuPfL2FE59CzWzmNEMovU2s6on",
  "key6": "4GkKS2vECGcfButCog1UWHy1UjeDzn3zjemwsX4Z25drUVFiQNRxjSCsXfQaDbt3PPT6b8SVtZh5MW5LP8Pjz6X",
  "key7": "5moKCqqSrsBTctb31oyefg1o9gNz4QVcEG2xbkbEsQ6JpZ8fZ6syk5hmPyS4maYNR43X5fnRJ3dP9U8auq5KooHS",
  "key8": "3bkqGKqP47nmP94Pqk2VZX9z1Aeqt4qqAUPUx5G3QwAuESK3PMm3fk7Vpy8Mm9n9CgwkGqQT8ZxT9Eca3PUmu7wC",
  "key9": "WPPdA3RyhVBXqRoUkx5vT6yXiZjnNRZs91awhE2HhH7Vjrm28G93YLMDoGryB6WmWv6sARNvqQn5bYLep7saJwJ",
  "key10": "2QECtCm4ftJmy2uZTPQTWndyQSGMsUFncBvrzipgQkmVAHCHpQD3RPJAhQ9HynC2iLgLeBRU2Mx3vRH2G5bA5yyN",
  "key11": "5ZpTdawNjP82CKW99fyyaENdTTeZoSvzzp5oYyXyq8NBiz3tDB8Vx3AMQc72ddqmrNPuzaJKrCBhozJVLtZE2uG1",
  "key12": "bu1aSDjSsCmPKb4VqPJvDREqaisw9bbMC7DnzydcCCRw34soUjQstaqfNSw5VPBx3XkdiJ1tP84S4DtimkVTnjG",
  "key13": "3yamphw8d5YDnC55GQ77gbA3oFKoYm6eCr6TBeqQxJRbZEbanhN35bShnT9kqsymnnwFKrFa2RbzE7PMtWr4C6Bj",
  "key14": "2T6q6uRgzF9SHuztjP1mRjtRFEkUwbdsSmseepAaTZet2Hcbq6GP9r1iZ53TFryc7gw1hkxddtvxfWazb6mze5ur",
  "key15": "46Fy8u4T5C1DWrVTnveoobCgG1QHQGiWPattQn56GxzfPTUVE96ZxT7o2kyFDgVZBV8G4Z33hGmueVwi8WF4PmqX",
  "key16": "mF8TA6UmT75ZiBSvmr2CPSWZg2CV3BSse56WSRu7doRNw8x62ZjMsCpFfdSaxurasCEny4eaTbZfPzJqV4S6MBY",
  "key17": "126zHWgdGfNQEC9gj36zeLdecuaeLWNGnXcHj7v8vutRPppkXYzTeUghW14Rjtx5SKCMHFd32dsuYyu1Ad6MHQdK",
  "key18": "r8FVHVfiHyjwCtYynS34fCXjyYJy1q2cARdxJGEghYkJdKQvZzpJb9H11aEeRyu9haEF2jsrsrJnB44wJJbY6tD",
  "key19": "5yzawkRtBFdddk4uG6tAEduNUK9sHi4eeNtR2BxxyZS3jmXrzWah1ownFEE3HnwgFX9rY56tswM5WfiopSaiwcfJ",
  "key20": "5Zgwkt64KK5YnwyXpmv1rBKVCQkjHy84uM7V1k2577SFajfBCnevVwb4vxzFuA2yJ8kUguBZ1vBZvQaqvwnSGsKp",
  "key21": "649N5793KQzS8Tob8jvseRNtJY4ryHGnn1eaYMEKGa5UY8hKE797p7KwkfuKszX8x3i7Fc6h1Y38g6Hc9JSWERSC",
  "key22": "4LwGW1g2diV7epRn6aeANYVYf1h3bT7wdmjYdJqZLeEKY3hAd49U9AWWBQjtKzzVecWsMFJkzXSfK2Rkd4nQgZVS",
  "key23": "gVHkxrBUQFMXjDn3tVi6xgymXGdggA6138DA9Hpbcjgsk9iGtyEn2TYVSqUiZsF6Nynm7AfFq6XqH9hEfiCZF4P",
  "key24": "5Sr2fXez2UZE9dxRhZ2oeeoP3Ewo67KJUM4qhxLDTEkn5HkHFA5NwH8DwxDcWPde8zQQCRpUnzQCGwe4c4kckKSB",
  "key25": "2c5PXso5hQrbWQ6opxKBHp1vCFckngza9Su1gHewMYcyctJjZXFoAVjyvfGP3XNNb56Y9wVYLRcPMnpgLfN4ZuX6",
  "key26": "2Adrftw3xjL1Enb88vZEobfC3XH9ge6waYSbfm5dikY6g8LFwBSZVwkoyY86uSPGq691RtnRQ2DMiJPuzQVWSu3J",
  "key27": "2RtJ9zjQtxBu2Bdiu1rGtuXwHno46ANBbC9N2qVxsJqkwFY492KM9oBrQK12uhnuxDS7FtMsd79QZ3gaKwhvHi2Z",
  "key28": "9ZBUPcxwXVaYPnRtsUmEc2FTJGSyFUvjZZJjzFgRR8ov7ycsMP12Pmy3YA3aL3RoyvxC7JVQSy53iaWNw6UYUGH",
  "key29": "2KB7W7591sCjFiKrVk6W73zzJpB4Q3M334uqZgF8kt9LKyYFEgUxpoDdQujwR457BJU7YFp3u3txbip14v7JnDxm",
  "key30": "5t1Dar1ekKv8DgpVVPsYX3K5c6obqXW6xBVkV6K97gjzci2D3m67psJbKyDK43rCzqStW2Ym1TsHi77zSpFDmrdW",
  "key31": "52qV5HteMes9ktCK2NaM99fhK5UPFBqNWG1rzG6rPkBvf6ssSyoC1DHDASGnpx68NknkswCwxo5kT6p4E8MSwZ3K"
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
