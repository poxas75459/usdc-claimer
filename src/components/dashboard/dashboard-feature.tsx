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
    "3i3Qd5BnwDwK4uE8txEn29AQgd3J1QdfKQFBns95woQAqcML7CjRQW7riKaFurQg96sYBx9T1rtwhfDJ6srRmxhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzuXWwmPeaRWGJXr4az6VSM7VDkMYKBo3f5W6AFbMHwo1UNHEBJfmbgP7fYtBPbHqPvxnUEdM1qXte4qCQy8bvP",
  "key1": "58jdrcRrBF1nZAoc3YGe5aeodFDgsPh6VNH3r4n7iC4k965sTAWSrWfwsyajh6tZTf5CDVZ2h3Ey8t2nFt3VgHBh",
  "key2": "2GfSABUaMkt9m1he79jRPoMCbcXqkHfuJ6UCG6GwjLkn5pxCphRRFnEo9YDGwJyaQkfDa58p8PtnA3tDtiDWayGG",
  "key3": "4EkaaQcPxdetRDSkw33mqjFDrEVx82HnZW99DAXMsdWkE5qEj1xQt3jFhhTzuH9bTPgVHB7DfggbpVso8ZpVJy9D",
  "key4": "66o2ux2iZJST1yY2rvDt8WFgDzhUeufd2gaVL2YxNZL3zHx4mNRLKMpdvUeqDJePE8F9gZ546ijCDRKyJuZDdFP3",
  "key5": "RFjVV1D8LiwmbxrL9GNsRXygsfa2vuL5XCur3YhTGY572mXj5JSAeCP5cpg1LBfscJK4yUmpvzfUcZR9zMa3vJR",
  "key6": "5pZKGagWWhdQzkuFmdFUxtjW4SMwJcyXQff2w6LAWwx2F16dN1oRgT1VmcxiiK815AwD8Rve78egHZ6BQ6K5Q2BT",
  "key7": "2qMvTDmmZ1ouiPiHdZgiZQuKfCfKHgbLLMToYxvJxUYyFwMoE6ZZ11pw5KvE4yUBmAaSx7vdwNYon2ztAmUeAA9J",
  "key8": "4L6Y1uDvRMhM4TKBSKWQm46knuwcd4nyMRj2hXxJJoCyA8pHaq9vZYrUwNUqDKeA5oJZoeDEPW3GjrpJhtmr1C4B",
  "key9": "2Ztdb8y8kYZWMu1wnzwcdDjUrnHPiCPDVognhUnHTsm3rRrqJHh2inAXNSyTueb8UovDjFWXgZU3enFcFD8iKqXs",
  "key10": "FRFZUJ9huzWRZ5UY2eD7phGNoRUiMkbThxjK7Tt9XJWVY1u9zRFj1pmN567vMZPohQapfdFB3mazCgomQ1xrThd",
  "key11": "2EzymjaAKqZoKwxSSiCcf1hA6T6V8SBSm7WvtdJiivEuXLe4bMS4e8aSJoySFgMkdkvwaPyo5hxg6GNb1XD8su8n",
  "key12": "p9qWuBd2Gp496CJrDVxyBbJLMAbqmDogmYNtAkDPT2mQzjaPGTYQATGYtk54H9uXrUnDzkJMUU8JMQkZ1ZJWGN5",
  "key13": "41UchbrM8mcjK16xTMcbkCX4ac51gig2V54QvewWu7Sci9PGy5QWvqSJ6ZRyyeJ2uLBpVz1MgEaxEaH9RGnGu2Pv",
  "key14": "3pJM8LPGFewHysFk5iMWyfp6ussN3NBAsjpmjmrJ9W3GM7WQWd56xVKw5xiiXkW3pwy49psCX2C3xDUzkEHH378o",
  "key15": "4HJAhwyrZNAiV7PAzgSf2fzfhTBidtWDmwpiHgN8hqUAVbKEUhQrbkKs9v2pCmnpoUdF6maMfGpd9uCK3V2KJhT4",
  "key16": "5rEvrrbfsBepxvcipzSeuSYonrWxsNH91xA4JASFd6A7ABxhvNmTBa6dmVkEHGLojorAPcH1ThNjgTPhkwvAWxgM",
  "key17": "7eXVPrdZ63JN8HSktwBPcqVwJhpgzGCFrxJGwAakLTPJ6dLma7ucdywNxRpdNBRtpuzM7qkUwff1JMYQkyAG55r",
  "key18": "5FDzuMPpt38PrEYpUuyVMB7EUh9ieNLfsjNyBBPVDJo9DFpBTkoBQKazzQaNnZzFi7UMBS9nwPGUKSkH2P8yNndV",
  "key19": "5NdgczJhFqVijurabPHGAN8Jcj4UY2EoaVSVW9h2kyBrpaUfNXWg132qvS43c2WxqZHUAmzH3Jv75C4sJ6kfbcLX",
  "key20": "3Ktqi3DjZHbndZRekq13DEwZE3NkKD6nSVdn2rmiV1FkmTMnZEYHtbq7os4btFgq8YAj4zgA1Jn9CSHwL6ezCMZN",
  "key21": "3GMM15vViF6L8TjZHuJ95YkccjW4AquchebkEAwmCevic4xwgA3MXRVah7WKicsJi7h6xKpqaNwgZ6UL2ULHoT8G",
  "key22": "32GLNzcN2ihxn8hCC7bEHfGvdsQYAmAYCKSNAsiRxft99kVuwpWcvyZaMTPvMgmsv2Tta8ckS3T9QcuZqZ9MYHms",
  "key23": "5xrd1s7ysaf9LXdymjL2TVokKL19q9aEGjJvocx1Upqce8osPzTwfmEVunckbPSRfYqaZmiocg795tE8wfe2SVEx",
  "key24": "5UK9v3AyogZSrX5GBXvcBjKU6E2cYUBRpStyy4dmXt3BEfdARto18xDinqPTDUj21dMNxoVAUqZ1EPaRCz2vEEPm",
  "key25": "3hNQw2NeBVCof9DoYgYZsn9Cq7rwNbfXxEPsfy8Vvx1waTs7GPvbhqWiYruywhGp5aBRn6EMQEZkM8RzFoZqstFN",
  "key26": "4cyuSmMd7dft4hkKiTv2sB1DyxDXz6DHD5u4KVQdWWtbp6SZHEtLa4s6aokGr6bKxucEayiX8jM3wdY3foys9nhp",
  "key27": "29nPuCSDx82uux51sDTFiGHGr7SHzT7WMYpnsEJi6EtsCaWbWLGHc4JdB3dMGmW3siDxo5BSMPHXLSNvHVTWBfck",
  "key28": "3aRxdcjvZK6zxxbZG49NokcydPaMvgqQhaxuByZYkfNMg3qSV3zuGHFEugLpxKkjc6VBPE4rzvCUZKctaTWYuSn3",
  "key29": "LpkhTLUGmz9w5SZKpxyA877keD3LiVyYc3cNAj8FoTZTbB3MQG4AH7n2Ner1epV4WS7RPa9BJxj8ekfSZweiZ8D",
  "key30": "4TqvbD2M3DZT1jPiGSYqkg4wHMn44PaPm874HNterLK6tpnXRx5jy3Fp6m3gdfcF6X7e2XHtzY2mk8UhNWg7eh8u",
  "key31": "JkvYX877CTTL29eefd77U19eTx4792YUrgmHHS1gDJigaUydctdQS5Ca6jkmjnPgbuYq46gnHiSbc73kxcnp2Xr",
  "key32": "5uWUmC9cdeTDgaKkqPSugcJjLe6KY4Qax9M851ocWA9mmE3JpyF9XVYrBiu8PgT6LPk9qCT9LsWSYdtjNK518r2e"
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
