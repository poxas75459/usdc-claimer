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
    "3CWnwXTktWWFNwo3zS27D9ohd9HycFujkm5YNzr9n682XmHaBn63FJ5wp4sqDo95hMLTrhzfNG9KSqcqRWma78jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLVj7GrGrNbfHcmxfRYAfj1wNP78JsK6ek3KvVsmNmxAVFx7eByZQCKLHkff9i1LbjW6RLwjdshqHqymex21oSw",
  "key1": "5yvPm52gZ31xuodE4Sh5zHS7bsW5q9QPsHFku17XmXXQL6nJAjCKN2WN1mSgnnSuB8ig4M5pstnKbPJqpfHRB7e2",
  "key2": "5t1juEUhSUrtNhti4agfYyxEYS5qvj5s9m8bmgDUTANAgZdPUraLuouJzDNKumnLedGaDGe9sXvXDUVVMGYucPqH",
  "key3": "4gWMi7JPwXdfMhZcy245vmCpErfx2YtuGFRGfNYnVu1HResazWNcsvpEGjcWYH5PuoaRNgp6wp7c5zMgw328EdRh",
  "key4": "dwdqCTZieSxE8NVyS9aub3UgJkaHNZHweBVDkL4MGasMRdfWCUfqLb7mkk7qBRbFyk3HX5Vi42HvXQjwwzQSGrN",
  "key5": "2EjkeZhbc6LCNzXJGR6MiwtyscQpXk6Vww8SMzrisMakqVyaVCtdHAqsLuiWodSp9NsfWS7XG2LtF6JgmnCuNMTN",
  "key6": "3LYeeqQbJXsViFUzpRQEBEbyfpRJpMNYcsrJSwQFquED4zdmix1cgVrpmNejyqH1KpWdqaKcdme4ceLrfDjN4ETf",
  "key7": "4s8NgXqF2Vr4htabiacDCh1Uf8ZbUdmtkpZvsPeNNaEfiGjDcNJ7qK1xvAbuRL6G3Mx1jrPVqJAeBDfNgBDiTRf4",
  "key8": "5U2Ff8oa8iAtdXd8UGxGkdUGQBH77pn7DqhEWs4Qtwg4ChBSMGMWJQGauaf6kKDhWC5Ek57JeWj3EUbmgLjNBXqF",
  "key9": "3iNwvHsHwH8TfmSJYrfy5xQYteJbKryaUK3oQUfkxJE6tpz9AuMjdSJ8CH63Nkva51dmKQG58v12DSx8QECVu4AA",
  "key10": "5WXUBYQqdFQAoGUESeM1kirowhGbnBPf6poiJqUzquHcFxaYEDia5LQEeZ3kf6GfLoNitZNGbCyCVzqXWodRBN4u",
  "key11": "3LoWwSsZBThEX6dTm32EnUnj4rxkEnwu8HtU6UyuGAhnUgEpgrdpWQNgyiqWs8yLKJGW7d5vrxTjfGGfCEZbhHmS",
  "key12": "q88GLiTeBxqykWNEDnpxTaTJa3tZuiMuZFT5rZ3qJB7KBsG8pvnS2YkgSbkJcE5n3Aksy56u87pLWLrMU6qCkfS",
  "key13": "2QNuYVSMMeHsgNT4EyKGxNVHHMd8NGxZzJZ14y4xsK2P8goy3sG4BbmXQRcMtmJoqJQBnZ25mKNEBvMv9S1KwwSi",
  "key14": "536K25QwCpJwGBY3zyf5TwRErPprNXVD3fCRYdnuHAfr5MUnS63op3U6ysRMpwFv9v3kiEh1kV1ShSy1xTvY2bh8",
  "key15": "3MGjeuA2HLmVpeHNPuyzHALM493HiiXTKHuR1qob8CN8gfxGR1ASUXJFPU4VCDzTV9X9Lof5uqLqqk1zaT88zuws",
  "key16": "3c98vnzSNPgKaFaZSPug2SwvepNWAoXsXM4AxHhGcto4FLiuGWx45gv6BwGHJxoaEQoSfUMPwP4a5EcA1csT9wSW",
  "key17": "5juborjVW2oDV5uMUDvNfPWk9GHcJGrAAvzgZMr8iQj4r6WAor1XiutGFdBLkgGsRNskLcCmYjdzhWxuMfh5fzk5",
  "key18": "2AZ29WVTHbVYdX8v3UFMNtBxXudnRoYXjiwoXb1hMMgExzqpSopefVuWMbxELgvkjD7TDpGKVBeMP1JCSdQCBMn6",
  "key19": "NrmwgYB4ihFdXNkfK6m1qGqPBohMSTV5TnG5jmVDQ3xGG6mVu8PgohT6tC4y6kBgfVfiFaPJoaMwgyzjFk5C7px",
  "key20": "3DfuH3CzQRZc35CJk2yjXFDdP5NC3smcDBraGmbsFUMc2KrfuJu4EgmGtxrMWru3CbALLpuuDksLatC5zTQGs8HJ",
  "key21": "2LVVQRhNmumJgwGeNuxTJoq2cJMHVRj6z7oYeQ8kus5SL5EnoN9mZmYbwmd5jo4NAsY6Qn7GpuU8p36pXMuehKUk",
  "key22": "4UKEN667x8H88yXu16bHVrM52E36BiZXxThMjWmucSpVvzoiJGX3C9DeJcHVQ7R76EjmkfmNA5LAoaaboEfuwfd9",
  "key23": "5vok7EMGVxkvTM7KhAv5MazAJwkWZNACXe11GVBAUUwnZXYTZxMvJC4o8M7f9CLUJXjgVQ6yf44tXYDTYi3UhPbM",
  "key24": "5nxTHTixdDBAqKb7XUtZXW7W2tpQ6F5tMKYojZ7Px3uf4Q3iyaMn1EPVmkvQRy18aqcPE7TrBvPjdpadEbHxxADA",
  "key25": "2vri83QaE8hujZAzwD5KWVV6V3wm5mrcAAfqxGbvRbBHp3aXVcconraUJqHuXTV1tRvPPTtu3mqUkTRNAo3K5h23",
  "key26": "JURDFz6Qcy2Y5iZMSvvYir7hqYb2J3dD4PK8RKrsvuhCpX9VZfN7PorgxcmS3Pp1F1heF6PU85H6KkhkLgPxT7P",
  "key27": "3Et3ZkN6hdXt4VQn1kw3zMQeUAAnWwBdBKHCEMJ5bDbCqZgnR3z2KiZ7MJUnNeDDKHeqy24BgH6mWH1nNRX7fsYy",
  "key28": "4kaqo3wcNCWJh5WRpTN4wXvEkgbQngLZLmgk9MEQ8W42JBbWpcFCN1NigmtyZaYPgfuM5Wz9xmr89ePnb9r5ZEVp",
  "key29": "2apbFfvZ1bGA2rP2n9xmQ7GiQWCL57o6gUTdicttDc8mT7xoEoupVWmwcKEpQWNwx1eNtP8WfprtGdyX9XiPs54f",
  "key30": "22kSgbVGSmszz8wFmxevnESG5bjUo1aCTwfv3dh7wrZrgx24cHQmuh7A721PSSiJCc3QN8id34V3YUNY262fGFHe",
  "key31": "3BygwEvjLSMeJEcS6JqaYKXiVGixiArhV5cT2XanDRA3pVQXYCdVzSwTxK6EzJ61zUJh5ifDxLV6jwEftaRGgivE",
  "key32": "apddxxLwND4S4yPRGzddXd3WY9NG4R9FXPFK3AuuavgJxFmKb682He5sxswLzRedMZHSdCt1xMZBcoXrX1cSHrG",
  "key33": "5t5FodZsHK7qtZ55jtrm37f9FvHE3SdxziBovPcZmc4h9Y6YXLq6VdqDApZwSThpr1iYwBmspFDeFAXaYh6VstAj",
  "key34": "4uqicU3pECrYsp9vUE7VcQirPTV7vBJf3w781gdKdBN6vvwDzb4jjEwYgHdmAij8wWHJ5j62GPsVyUEyz4acFJYx",
  "key35": "4ocwX6NqDEKDsBbwXqREnvtyFFdCx3hTnfc2tHv147fHXetYgMqD6UaKrLVoL1mvVm9AE6X9mTvDkM729b6HW87W",
  "key36": "2bkic1oN61388BuwCPvsJrP1ZnbUpx2ieECBKSDiNtPSJkoSJBeB67KYvd3Kpt26R5fCwKB5KDg9VJbV1yrYr7Zm",
  "key37": "dd3dZ4hsCVUB9bFGPfVWZNjpL24Z7Vi81QgwrJcUqHDoueEMv8PXM9NaUHT3CLhYUQkyF9Q8Mr8iaRns8JcCa6n",
  "key38": "4w7biEsBEmFRM5MtJHczsJj7eJMtQ87nBEXk19DL7vo15ggcVvhta9nEcdbAGrgvY3BYd4wwpGZ7DYixHga8Kvk6",
  "key39": "9D4VGUF2YdXuGpozXFWQy2BC7GiRwJLBBE6YjKdhpVAXKFU8KG24S5Ad72cQb2hDeocWVimGHSWCYemQgvryiN7",
  "key40": "enNUHCLUssEdkerZtyURsLYEDs2QcM1tLVWXEo1NdECw5ekPTfTYp3DyfUZDx2u7sj7BfcK8UiPZZUEn9f1VEqd",
  "key41": "5JHzAVQYa32UKiyY7P34UejzApLsLudUrfxKpWb5YPCBhCBjq14ipFJgscyNgJbRnhedE49aWeqcRuaSAPvRGmpY",
  "key42": "5BrKQtiXbzLTN6kgaYP8XPaYiDR7gAJ4ECwTaKmwowi6qUcPnR57xjoNwVxtpNmM7VygaVy3fTefeenx5H4K1a8J"
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
