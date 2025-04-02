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
    "3mpnM9KeS4HZQh1LAomrV31gq8jmzseU2a4oGSizBSbfjqXXDt2B1gLorSk8pFd4Ek7YSrgRxcWdWMTpz3ze5g2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E331rQbYupka7dDVHbqLJtZTZtkiu8VtS9f6PaSFuHxGWSVq1DdJRE4z4mDztA6V7ngemwxrLKtXwmRaQspo1iH",
  "key1": "5y1uxTe5tPopB7bRszTuaCLKQxjmBb4hWPjP46M8rkzEnySrxMjFZcgu7sUxAXXt7tSk2roN65wsDESriDE1K2Wv",
  "key2": "AWAo74Fxxui2pVECh72pjYZLhWZXy7ePAyPTbKX5CHR2SNAc4gftUvd4hwuLTveExdrQPr3i96pvZJu3C8LU6cF",
  "key3": "3xRN2XiTdWSYAXWY8i1vNucbVZTkt7Qk3H5hozfss7QUymcdLdgnLooshL9JJLTqAFSEC9SYNsYebRAZe3WJc8PD",
  "key4": "2dTxCDp6yAToiDRNXgKyvRucByi8A182EyhepgReMC9waYTFtAGVBDEzFZDGAkgTGByLKA4jvJnibjwTzGAvr6oi",
  "key5": "5akppfLXQk3TTJU2r8AzsBXUmK2F7CGigihkR8AJLzmRBDQ8zvmue9dTTzpyVoAhzYis79mJg96nQRH1bc3TPisH",
  "key6": "qbSMhTK6SdCqGPN4QSVSbEhMyRB3vLcFC4yL5UQ6XAqFa2qyWfLZ1uDgSQh4gS8XBbScYfeARNXF7ry3C8FFC9U",
  "key7": "2ciBAqHkGm1cyjYtVMDViyNC3d93zBh5PYnQk2vDNPueybufWuYdaue5c4ZZ7QHTuU2yz5A261ovPYkZCt1Cbgch",
  "key8": "2mYUfMX8rFcc65QzHhezQTcbzLdm2ggUNLLcq2M5qW7Vpb71zH1i93PMNdxujg8HULQEqWqcLHww4or2BDzfpxL6",
  "key9": "3nwpqB1NdkJWRZhxBpnC6iVwpeVxyQYwwpbJzkkecqQ9NqskWGwYfAtvr5VaNvBV4VeHFfjbhY7PqULyZPC7EdUx",
  "key10": "2wqfRonRyTprgzVE87DPhBZCJx2kWABjiSHTu2L8s8ACLPNy5T78o8UXyebtMk3t1myfzmLzCVm1zhaKdHZQHmx3",
  "key11": "3ov7yqAkVHt2iEyyDeyE5VcwegQkxp3n3k7Yr5K294s3jnqyQ9CtFVUrBE2iqRHtgCaar8ACHtcfvn62UcGeUqWP",
  "key12": "3rXGXnxHDjmA6ZSWAzhuNsdsojka3ynDLwEUubua3yp2uJ3jmPTkzZP4ZZVXX6gUqa7WuGidy1Cj6dkXHszbSTLy",
  "key13": "3u3BkPNheeozfJm3mtPXqySxZA1cQiPLGWTKJEybjvqUskokQ1pYsbWkiNch4KMsQu2cpyyvBFzHayJ56x9xUfGK",
  "key14": "5tWA33wJ5ngcfTPCpNrnj9A854PYCGR6dFMcvrUVemc2tgHsJpJkXSNaf22j7urxEeTT3oSze9LyQoga9VD1WeZ2",
  "key15": "CgNefZ6AXc51CQgCxByNYWnGyRN9qDinR7BSgsa5y6Ku2HkHzfNakC8VfA26pr8A5rPS6MxhkHCNeSg7EZSHhgU",
  "key16": "2197VhdvYBUEc9kNod75kneB21CyF2Ue628az5yJcwCBD21Fx7tVXcqrqCt5Xa4QZgtmXnUem39Wum2V1DvF4Bae",
  "key17": "CN5CSuiwugEzNfRkViRRQ9ZRyb1x2WHH3uZW7JUWsLt7pgW2T7MCahg2LpxDJ1vjZ66qeTwueU7k9TvwbBp9yuR",
  "key18": "2vWF32n6rt1RbxSAGXtgLQRJbWQ2qiLPZwMfHFbH6qwq4Qg5aD7mgCPNx6ut78oFQ16AYZkxL9pvdfe8pw5fa79y",
  "key19": "5EUuxHpmTDqUhJMGxVDPKJfjqhrUzqoswqoLun7TP2y9p6DBCdYBFRC2b1d5rzAcQEQ867bjTAfaR3jvCk3THqYX",
  "key20": "3ZqhsBPoKBZkaWfdRr46hrQNZ2B8AUfNKG45CPSfU74MRdVNBqMRGb66oBxbzw4fhwxDsCy1y4xawAztFj1SXxbH",
  "key21": "58yKReaop1FeEJ8SSuYMczGs8kw7cM7u2njMZsnnnGvWFDRqUuwJVxyXbCnCqqs952buSyoiEw3tnDWpQ1aUFwMm",
  "key22": "4tpoiP7di33qpPSihvySE5JBpwtiWQhmDJbh18eLKxoSmbT5Wh7fp6t5teDj1hGAkuG786Tg7UnrpVUFTVVk9TAW",
  "key23": "23xj9iaqZJPyibmxQy1VUqnePqGNHaHJqrWdzMMK4SSbcLgKtiZzQbPy5QLeop3MuvPWNGcHuALTS9QrjntBcAYG",
  "key24": "5E2MwtEJitMdujFmrvwVFq4tssqYxfEHzPvWkFBU7VC3F5Yv8zcLWgvWnd3wynhTbomnzoQWyXe2Q6d9QATiu6cf",
  "key25": "4qexa3S1nT85NpYAPJvt1yg1qaQrzQrTVnCqRr1paUwjKTxms1gYFhhUj4dWj5j6tZ8LBSSVchbuMxVZrDNgft5t",
  "key26": "44kJTCtuUGwh7ha3t2xDrFYtA6XBDeRgGzJMDmGtf4XV3kTvEXYrammnNHauYXhXRucdYiPsujX6QhdKLtDWKoL2",
  "key27": "2DicZamMhbPD2tGSJzz3kZAAVfM4TmSmiFkAtmWNmm3QJerJ463nMGaC4AnWLXdDV4Kjj2GD5xAcRJKtBpqfzPDu",
  "key28": "4A9mAJ8x2ZkSr5NS9iWvgMEfcjhsJcfK1FVgYMZyBWkatJepyX26KgXutoFNtx4Q8dbFU9BG2a8wtpL9Ypnjdovf",
  "key29": "5eWnKv3674XPFJdkctgS8qpAbhnmX6GpEn41Qu6b8EyBewkbAne5YmChtpnhRAFr1fitsE4ZUJ75Q5kXzyd9xL69",
  "key30": "MvPL2Nzu9LYJZtQFbBwsjqJX8pGosdM7RRhUJKmWsbJSxeFTqzhzaboHi4uaBLYNh7uSqZskhx3Bexf5n3NFDvr",
  "key31": "sNs4Cb1yRvCD5VXwt6Qwkemvzh1A9B9Fcgrdr2pRdzjp1QQJk8nUtT19PvfThRU71DCaKmz3pUyxEt73pr3Pdnk",
  "key32": "4mKnujuRDu4bHohKYHrhuX6ZKyKGXZ2V1eaEj4ruwxq479XZ68FpMXkhko5aE5eimEoYMV5pYhQ3WiX9TWEDqHP9",
  "key33": "utcCUjVk7Ai1jANVB886SKnBj4557MLJQ5qV8SiYjJBzwJQHM1nMhao1RGGSxkgoC6QdGUDgDpsshfxPAhDZkD5",
  "key34": "4cT3VffzQ3N27SQZPinFYBspcTKV12bGHEpcgQGqDf1e4uVeCHeYg45saorm61A8hJABwYT8eZwRFnYmPaRZdC1N",
  "key35": "4ujzoyYN73S57dLoGqhEFaP4i5nH9JJNGvsm7Ry6ibb7WfYPbWaPbRQdXNotQ3cfvpWViwkp7FiBbtHf2wwKikaV",
  "key36": "3FjxmoqggwfEiqyAUxZ8NosppWPhnjXmzuuLJhB2BhCcCbSjkfSTmKVYKTy6veorUMii2Bi9qAvukDcJFoSywFWy",
  "key37": "32ACB3dkG83eMunK5sgTwbqxVDoSQZb9jq5H9EcGdK1oR9FAumTnN4BwKAZWoQzHdHfxVuxAMnKZZrQdZthYmn1L",
  "key38": "2vNaSZQatL581JVJgt9waq9pS5uHGwQDAnkK45MiaT8YK4bGiSpbrWakVzpxw2hqiDhRFsdmofZcuzCkhtLiMw2F",
  "key39": "Q8xfeDFw9UhkWLrt4FLZHffAz8eLiE6VhgytrhFMgXGsV6cz49zkxY8FHBqTnrZ7nsg4SqMbaBJxQwxMxHDZvEZ",
  "key40": "4X3cQdVhW5xEnG31JXwXxSbYwTM5YpMduFSyNdamekRcha1db6xDWFNL2r6rQvAoVHVTdTsh7gG9FMX8yAdVSFRb",
  "key41": "4XcbkpdpqNjTY4Zy4N8dfvxU99UbWstJR1o8iQBagoafBLprmX6Wzsf3fJCRVMj7SWT9wfRvm2dem8SD2NLgDdL1",
  "key42": "2BQrmZgsDHQDwCLnXgcRTfA8Ckjxh8r5HSu2T48ZtMyRVYo1MzqnWNu8ZBZpmgrew3VN2dKbzLpkUeQsw9b5hYrM"
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
