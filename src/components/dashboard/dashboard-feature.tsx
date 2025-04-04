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
    "2Znqz7DuzVZv78M6DzNFywyjSiWYyRtRGf1NFg18SZqW1oUXMThP13LNHJYspLrvtAY5rsFvC6aULSzywvHUBdhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ut4cQSNVBGEDSzNogAhJVza9qiehnUV1QgV2jSU4SogRxb3BVmDpuKQFceqLBzqxfcBcxAEvBFgzpp9TBDVc9hC",
  "key1": "ns7grx2AXcVK4k3g28A5oSGWZvbKEYjMN1LqBVwMNrUrqaLqErg6NnRM9xt1DrhNbeKUNbn793uLTDpGgXsf5i6",
  "key2": "5ZEbsKtjZzj8sDvPBt9a5TsWwT3GZr6gVS3VASzjFtBY2d6di3utRdU9yZ1rKrUfMtDWzDXwvFKwAd3XrXGVpYAX",
  "key3": "3PL6Zkd3uN8a9oSzftZ4y9bwefE8HXEDJeRZtjnXtpso4S18tebBkAFbudrDzTqD6fooPAPRbpMyaSohLZ4CQ6Y4",
  "key4": "3iAMmfJ9EuD8REn4UQaBGj8ZYTaD15ByBAN3LeH1vRCNL3SWLmkiu8kG4jYRqFifcMq3pRbzesGQGqV3AXQfiyDc",
  "key5": "2rRHHAGcRX4M4Q2EbyP9CD9VyvgXDanbt7M2Uoa2oFqk2qcYeyXEAcy8rNYztkE94BPBwwDE25zQBms2YCJKXDcr",
  "key6": "2FWQMGte7CFL9cAgBoVhwiHZHBasMCSa1aBcpE9suvdHmeNSkyuZQMfk4mmy2LfAAbhx7zHzfrmusw24DskTqsDP",
  "key7": "3zUDpbmRPnYSgRaCU5NeVuJ5T1aEyiWbbSwsJtvqtXRZDL5DmceVDDWjsLknkcwtnNsSg1TZeHykvV69orvjt9ZH",
  "key8": "2SQWYP95zDUp3CjUhR7xboB3jQEJD8z5xYGte1FdZXzyTg2X6QpnZMX2a9A5q7z6yxBy7hZf4Gp12if4h5Dm9Ne2",
  "key9": "e24etzQ34iQJJ733TqC5ToJrYKsRZvJRCWNcixR7C2x6n8wVCrapUDSP6tsfzXZLAzmcUX4xtFUAhSk4gfkakKy",
  "key10": "3EzQF5hfhKtDZwg4DAKEWwRfeKSjDBY7BFkG2zHMAqCSXFsKMcKn7LnBxYpKmyo9p2ETzmicyaCCytg5btWwczmP",
  "key11": "5CqVZiebAdTcAfmQkpx5bJWakVg3TuLALrsLhHrp8DVkhcQzHv8m2JbZRmtLYzrUR19ub5HzguGNQ1zLjPrYeWqN",
  "key12": "4Nqfgbwk9oYcy2TpHgVYr15w7Guh7CrRs6PDDMvNZ41UpscbXT36P4KGuF5TpdAV8jrx4kYvWPJmNkeZZHhJBKwG",
  "key13": "3cCjLNGa6K4feMtv7ZRTCtSEAc8db4up7SDmDnwAHUSpktJVVmP6vRJ1R1kWUY5FeedmY6UfaJbMbCngj14479aL",
  "key14": "zL6nv4pUdH5j2reypydgvM1wa8wi2ng6DZADs2HAxtbjKG6uGoQGLy4BGwSnjjMYGoY3oMj4ZLUFrwQ7uRTdY7o",
  "key15": "2wmYx95wMzzZcvx2C8XwAzXWEySSvry5BFLsfjtZKXBfPoagXdYZDMVF6MLrmHgcpXmDK1pbFKDRg4vPMcAzUzfa",
  "key16": "4ebbW6eMsCcNN3uTvQobDd5rzXVdhT55fhnfVZ21avWmgaoPCu6rbonaRT5Aw75fdyN1frFjC9pNNV4cpgRio6SA",
  "key17": "2GzynS1AJpLmeL7uHU8dnqdtmxshLTbewVuK2eWkRHWkH97ZPV3o8ydTDU1Yah87HQmENX5FpsyXuZL2KSrx78Vu",
  "key18": "NNo1v8e25oAMGjsFngYbe9Fp9jV8UwDFwycERaxcqW5p8sbZioeg7batMxfSe7pD1CiXvPRCWiNc3dsh8mNhPFN",
  "key19": "8CyFjshzPeHYDkPrBEBYdcmw3NSrkYc4fD3hBrJDuBVWC42H234oZHKsbpQCJYz18eoAFbHNoutzvXBdc9Z31gF",
  "key20": "4XUuyuT78bNs3adjQnTJCfXePgaEARDuVzaZn1L2R25yswzrQpsfDFvpwDdSypdyiQfaxk2dJ7ctgpeX4DGxkPvS",
  "key21": "5AzYgpU6TTUoGCDxpotbMorU7Sj3vCPowZENaLKxrPcSRSNCZ7w7hBHPY126wogRqoRpK2vAz9W3JgQaj9QXkJrs",
  "key22": "ibH9isD7PoN6kwXZ683WDePQxpKfKvYpgdGAzgXBhRFQkNiJRvL9t9bKaS7M9sNYn4aSwrcAXsorxhpfrPFbv6U",
  "key23": "2apYrpCf6JKmuFCejKBtYfgnWurY9y1HKnRk5L7UNpZA9hdCHgAhjN2Fy8kJk9EF3WiDfaAegDdeCusFpZANLYL1",
  "key24": "3t8u9LwGzNMUNSaAbdN5WKgecZiv9Y9Y44JyWJD6hfrdDJwz2KtiNKcCxRdUa2NftKoM1ZsdKaNJ9BErgyBpVzwk",
  "key25": "4JHLWyYEAjGL8utCUNTcwsf6PAXgLacNfUsrNcytCVDegGDJx8K1KciVkurcEjp8KwRDPaVo2VjFBXvSstdvSzVX",
  "key26": "4JRvYxvWzWCs7St3ejVPdj23JgkT3aAxu7gqPQLQ3BtstjBjP86qMRqiGe3SXW45WwxW26n52BnpUMi8SQR3JtMC",
  "key27": "2tBh3AZzRSxNrT4SbWUnJwUNPiH5oTKs3VseC1Sk68oTe1yP2KKcwSrj2jC5ZY8DtytJn5b2tRdG8QraAVG41saU",
  "key28": "5e5bKqA5GxpF81Fug6brGU2dRnaegu52K4cf6ZRYgNa1STa8JpfgurYaQQsobMXEZdKp38yTmVUwjHP7cUaF77xe",
  "key29": "5bmd75ucCkdmzyXRiVWhoRQpjwkBch5TFAisPauWMkR7HzuCnSn8Soz2MyA5JJPiNRCyntrqKioWFK95144hZCnK",
  "key30": "3NZyuaF6pAG4Fo5qDC5gHu26Cq5KUG4nkxJy7UrDqAsVKSkjC1pc6Vjzf3eCP8Hgd9JZU5RZ6squPScxsVej25ZR",
  "key31": "uhz416z9JDeSfRq4RLAdZTf7gT1WTt49raEwkgiBLgQmSmn7aEYvTC25JdbNLFat5FZfQGg6nMuzykrsdPhxP2X",
  "key32": "3u27nu8Z7Pmnv65NM426LEscqyBLxdFjcFc8RsziiWT3vrrUYcTdXmgQBxh5tinUvzsnJ2AuPb68ufJnG1FB4zj8"
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
