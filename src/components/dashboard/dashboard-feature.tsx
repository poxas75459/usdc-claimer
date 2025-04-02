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
    "641RowRiRb25KLVzPW8KipLsPXRrAfWruLqRzGA8zvSFxyLwLDdpVpCM3tHGPYsKCGk6NMyJ8jLiNDsfgcJ67Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FgHSbTjEnGTuxyyFfeeuiTz4TzuKw3KMWthQWbbDyU2sQYxuSQdyKPegiipX14qQnuu4Wxjc7yYxsxfwgWedBjQ",
  "key1": "5yBUT8b91zKFVRbvgiPN3iXs4kQxq872R3xTQhpL9xJfoeXB39dTJRjnw8QgY2AXLzz915r5YLvzhzR3whRXbgs3",
  "key2": "4WDrRxD8z7BmKfwQhzQHY9wWFGCRCBK1zAY1ZDLU99VTb5F9MkFoLnABjSzGAaKcu9UsFKSMseXPiMLDFu2bkVCH",
  "key3": "MbeXn91qYEzRvvA7jdfu5fBAzovwp8p4xV92GxbjygKJ11QLUXmk9EDZayPUoiXYuN7B2cj8qZJNYKMNQs4SqsR",
  "key4": "2Pcq7KVnHq2zmMEeUpYvm1C9nRziG1MsotyCPE7buLQZUbSoytUFZEHzzvWpwyKH6cgJDVfeorDCQmC5geYXS2jT",
  "key5": "5nAaBoxQiFvKWXEtyphjyen51e2sFyqDitGVwGrYUsu4WcSyHXHnuJpFQVD3CFgH28WhtEWKdBQTrpExXwtuZ1UU",
  "key6": "3igXUxxDruPGN2wv2wzp3eRXudvT7DLKRWsC8QRVb3AxnoeVP1mCVRn8n2nwNV9Mg6ArnwumP7nHQE4QV22DuaxC",
  "key7": "4eQRUBR61UqgzunvAj6D4YSbobrhxWqa5yb3wC4YsKBWg3Jomkrveae223FPRGBcknG2ZFyhvKbYfygXiZLZFnb3",
  "key8": "445VPnYbzNfbCffzKFxypg9yVxRvm2uQYhY32ojS3193uQg8m3KBNueWz2JCWWhnMx1kYTRi7beucfi62MX5taxX",
  "key9": "3rCZ2CtxPy9ogAJnWoXxK9tkGNgFBbVfNszdEDhP6cdE1nnLYap98budPU8euPBBPD77CBVxq62CQ7d6nXhDdtHs",
  "key10": "2J54ehRPiJ47EGx5HXSWo4kgsJriDYULUBmF7Zgwmn9cAT8kCr6urtMhyVLJiu6mKVRXH36Z787bqEEWGY4ew92n",
  "key11": "5tEa1ZqshUNX3s7yS3u4Z3gvfB3N47fTodB3msxK7mF3yWey2JK4viKDTY1GWEkwaZcVXLaTgqcTBQvtR8EC5rCo",
  "key12": "2HmE8RkyWDtqKF17SFmo57oz1x9w39wmkczJYX3YerNknuR8nsqc713z9kfVSdenrGSCcx2uPUS6FYejreEoSvom",
  "key13": "47J6BYb5hoaM15Gh7VC5fZSQiSyVpA2yU6CnUAokuXwZQdmf9ja5QxT3puY7NG12sZ2936pv4JaFi1QZ68ds9KK4",
  "key14": "4AtBMu8Z4gfpEkNZf4Uqm8rHfphP4SrGRNnhdDdX3BVzmcXk7RzxwSsULgvHNyGEHLYmXmzKsqZGuv4yE31n1veD",
  "key15": "4NCvUM7dhD1LawndchC77eaxXoesHCgeAiAre9btTHACBQLnYBsUUAMHp88rTtBEtqtvxPGUQGQW32JWnnDd4vZ6",
  "key16": "HZw8NEVzCKmMT82dp4V5EdB5ahmbs6fZuzRCD2w9qcfYNaHohtCgdqwmCY52whq4txhSNmPpQfTGN34KBVpVdF9",
  "key17": "2CKueKwuc2rMnGYNke2vFUc55WJzquwLqoZAodpefqt4SvfDx2SuaCAex3q2yeVbfy967FyajkvzJR5LiiCmGA3S",
  "key18": "5vFzNzdX2VFGfTcPSUpedV7mDm59FjDwobTEEvjGVZgq7rAPPJSn8d4Sgz43xznzqtBLbaZSjWPW15vBDDdUvQbN",
  "key19": "3m5tTEoSdgJ9UzKVrZMK4fVdDfSNW8je4UNDgLGamNwHcxD3r5mt9Ke5Cg61TxFRjKVE8QadKLq2emDKXQgyeDqe",
  "key20": "4Q31x1xQXiStzGJwgXNaLjCoPjtGQWgj6kBwLhub5jYT4Npa2KDLfsuZBZGgTinKpdLXoHS7Lv7Hwinv5buG4xjt",
  "key21": "PxajtpdVjoAcd3oBKmjonR9tZ6jW7tTGMCLRzXQpXVJh9sUTvYF2fuJrdFfYPViPvZaN8APmUHj2UzdgoFEbywF",
  "key22": "CNhVZdsrSGNTrfCUzBibs3qo7DvV25CfvvisQvirWSSCu8W4z48Xm3bX26Vpj6f7FHFNMcCdnqj7FdJiKBbFhvc",
  "key23": "2rmZCWxmCKHramaDRQgC32GSAtAhYgzhTJdr12UMwQTxLyL5FVfzAiMS6kNjtC87Gs7GUM9Hymipz1fvgKF8x4RE",
  "key24": "32uCtoyuggQNcu9bJ9C2AUngjrWyxMwK8UTg4q7Uc4fEpiczA94tdk8fGqudEXrAEVEGopS8XXPiet9DLBBDnYGW",
  "key25": "5vo2deTegddkKKWxvg7YRrS6LuyrdfbuF9puTidgMCEYuXjbVXe4fG2N4iCx8fz4qSGjGVA3qZnkA8uDPDJv4zfy",
  "key26": "3Akh2fN3cRLAYQR4xSkKJDyLCNbX4jeZWZq37xx74BCsWZzq4ANSj67ZhXrFhMBMH36pCKq5qrQP15aNLqVuj85a",
  "key27": "VQ3obYhWsqh5QgcWXrxfhpKTQeDeRVijVmxqcfF9mAhd7ghWsSbGzyzYDgJdJZKcqXSAYsYFgD5rG2MX5r2K1qG",
  "key28": "2uwc3DQ8nKNLvLDihRg8BapKDs2NXWiWYYDhm4SCd6DtCebdcpcJMpHpEgMw75Tre9uxBXYDEDsM9XxfzpTkkAsw",
  "key29": "2RPCpDBfbTC4smuKKMWbsprCgrLsGPx4GxTVpCuitDM891dBiSxx5UiBjmpdEboQAstveQ7beaPhvcaWqypAk9ud",
  "key30": "YwiLhiw6TqzurnHxeMRrxEsE8mjuBfknAH8u4EfvsNBVVVwj1JLGesQ8hSnPxhzNsKxxrwUnPkjoextF8vSyFUV",
  "key31": "3A1oKbuw8xAoCnz6NGQSETtjr5A6QjztFfHdRVvcpHU9wG3WrBfp9TqD3sSfKq58FjwA4tDnFK4LFwb8kokEvvvT",
  "key32": "3P6NFT4odex1EWkXSov6GT1yk78UwT5Up6AHquFoJHgpjBdrMeXdX9fcDRzj3DLeU1pV7sSvJ37towmZ7UqDwxk6",
  "key33": "4bA3Tn7Q3ix4Z427aoiQZCMEDk89KFwePKyDhwbqwBysTyvgkJJiYsVaAP2wxt8QVQ8XGkMriuUvwKiDxLtUyrKt",
  "key34": "2xbCGcoimVzTRKQAscFRcj7nktkBTVMgpMhVrpdvgMiR3mGxvQySTEKPS3VpUoMJLokSTa8w2DjfXiTp3yGS2g4P",
  "key35": "2sNan3KmVoLdha5GnCRantcnojwas7myVp9z7acHmRkdymoJUkDzqXYhbULt8yATCeF8aosG1i6auUpVSLyQ3q44",
  "key36": "Z9iX2nVwvxXSxbCfCCBYMmqLqNXDe2BpQh6Y1V6dC1TXtJpnP69PuEr76tnMCvAyMGxHNXB26tHou9R24f2B82E",
  "key37": "1Aa5TcfqrsAZDNP85Wh8wbmGTRAa9CtFx8vJiwcGM7rm6NXEWvDs9XfMwMXaT23ShBbMQqndY38yU1FQUSbW6U2",
  "key38": "4HzdQqKf4dSsw9urBrche2wGiLTA9ymwKpMYHPARTQcTCB7xDJdoaCt4kLNiqNLCVpAr1fyXo4oFBohA7EeBT2Yn",
  "key39": "62ofK6ik4ALDqgEhSGvFiuc545EZ53bBd4rWoa41B1Y2BmfHdQW8pDpxue4BhZZ6oNSBmN6DcKmnCoT1gziMT3Ky",
  "key40": "rj3RczzgHBpAEQGgUA5vv1MGtTWbEh3WzCy7uxwvhn4kzrLmzpUqwTruyTyLgatDr7Qr9bvsq8kAWdSo8DkrFjY",
  "key41": "2pfyYR1yytAH1MktNPfW31HV7LRUoCNyxeaUSA1gedqvwm2ufV5uqogiKpaPwsfQHEtAZNxaadLBrYWMAGDRGcpp",
  "key42": "5nGubMiBipnBCCVNBtWTwMkQW6xxrMgrrHYXVr5Ey5LZEtaaiCJz7SHpJa9medVDJCxVEfbsqFE9krrUJgVxFtiJ",
  "key43": "5yYcC35xh9YcWX7drqkeioFy6jT37aYy34jTjuiWhjpF8pyiGqP6iDdiu3j3G1gjbEVGxTuhLjj2KWXMWKgbhTb2",
  "key44": "3C3EMqrvN93zhdYRTVezmXVzMafQRisaJwdDZGEAwhd8BkhNhi79uuhEgEz7tZLnDcw2TVy3kHErgMdb6pRYwWTz",
  "key45": "34kWkSgjyeGqB5hXEjR2BrCzSHWQ7a9JYGjAQLyBLtxAoZJcuHg3Ep9k2YyEEoaPxWy18XDG3QCuEP7V9dmBNh8e",
  "key46": "4iMUykuKm6EFn4QgtvVjWAagXtGfA8v5152tDR6aXXRRn1uuzX1h3yX1FYM4gVL1gAnzTnt5CQG6RX4oi4KRmXcL"
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
