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
    "4BMt4prcyH6Zr94qrGfxfNjASghKqLVp4qkS9sxwudeaZJoZKWCC3tB7EAmkXTPE1CPfJzYeZ85nRAQBfk4dNBn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSYWgCoRzkoch67zQzXcUFTtfLgngNtGePuJXQr9JqbKLZ7tpQ8995yQVYVfwbNxkKW75r56AVTGvZRgEcg2FhY",
  "key1": "57b1Zy2ejTEbRZ88xgZN9kfEh5HYNQDxPviam46cfAE15Fe3PC2RC26oobny81jUJcyLNkCpJAZezVgKp9K8o55W",
  "key2": "5KSDJ83JQTCXVGebxN23JsxWYxeoRDxEXQR6679ZtgErhYxKPPLxQfk6nB23KpE8zfZudGdJ1bZS7TXeJ7s68svH",
  "key3": "2er3d5Mv9bt3BEW7Ns1eZWwCYypVXVfuoecVK6viLAbZv1F5UR9H32TSqrwuwpHjwmhXMLzyn3ri3ez933dNU42u",
  "key4": "2pUhoodNkMLwgwp2zjB17PfbiLwgFosHKSTzFpQGvgCFr67B8JAtyck2ZKMCiNmz5uvVqfdPBdG2N4v8uA6TJnQu",
  "key5": "5hrL5NBGKCKepbSPRTpNNFuWKTxkgMTe9HtkqN86MjCYKikXSQmagMapxXAMSsCpMCwFjPjqjdD8t6cGDYuGD1Bi",
  "key6": "MaSUgMhUJkpMocqqKX9Y13rwAn5oan7xkcxi6tkPBSA486kaq2F35M8Vd1WatpixkatPKoFv315CB4t24pH6twT",
  "key7": "4XfMa19YVAwJ8HsenHn3x1g2EGirwXz1CYcupJqi7iGNBxdTSJT7YGdjadcVDnzaie6TDLxbNzMNmUY8Am3ccJDP",
  "key8": "wrWgvnWof5xJQSfzRXzEYUh92JoRALGyfWUY7KWy8VGswptgWTeeL1pecsMKLwWKcZNX7h6e8Fhph1kzodfPRT7",
  "key9": "622LYzV7v4475SP4ZVVpo77VbkX4Umsj3457Xdr4KtQFxdf7VLU4kQCyptt27GGuR5PkqrqEFVPEnfUKNiLA1Nbp",
  "key10": "2FxHtq3BJ3WAoEQvSoh7suGouVmLcZ8TAFcNSHPS6R5ssicZAxFYhSnYK6VxtPi8ugzsXw9z2yNgpvHXKBCM2Cmd",
  "key11": "5bS31zWXwWbSQXcLB8z6vMrN1Z5W9hDhXFgVHsGdqXSCggRCcVJbsUpzzKxAyUPcHhsdTx275eKVgEL7NiggSJ9P",
  "key12": "43aGnsm9iyUgmeHtVC1NuKATbwRTPX5aVxFJgbqMYJZDz5Xyib1RzDTWsJAPmWV4nTvtvrSBVg98HiWyX5PWRAy6",
  "key13": "3jftSwtqbSuX3hjk1JRfQ9KhwWoBTQgowYLNzSCQWK264rcfh7ZHuZ3QoFAA3M6ryaoj72whMFJG8iQ8KmBtaEjd",
  "key14": "2896joA6J2k69LwRmUyehdk374j7kw2LfaJvcxRX2vuXKAQGfbLB99RAk68E5w7eiCZ9d9BqksSdPBmNicza6Sxs",
  "key15": "PTmrrBT2TTvUaL43GdACpuQQJmDyQw8d7WGMdTDmeJ5pmVfCkaFeENwqD2kyTaY2suufxgnAvFCo1L9vAeTWsJq",
  "key16": "2GdpE7EXgM1urWjaqnUtoNiVr6NtzjhKF2UfUq6QqGHrgoiJFBjx4pHY84nV8mViaxo2Rvkai8upKJwohEGpCBQA",
  "key17": "4kzC9JrTWFLkq1PrMEZ2PmCR9UCUPdifMGzTLAx97jdFWCdc1zFT5x1yJbm9pocVbNTzqx9NdCPbWXD1a1gzbL4J",
  "key18": "2MM1qBRyLyQUYiAF1ziEnUHmsqDKUGuyL8BrrJYvKxVKcDRJK2ET5XS3qNo22FgVb2ZJTL293PPWcYfU8PSDSLg2",
  "key19": "kDZQbzaGcxgZtSt8TvsPE9F4SAm4sph1DG4BeaDdTHZLZvxRpA8rVKE4BETUcjD47PBbYQmkXiMaHeDcJyM7XHe",
  "key20": "45Dto6rwAqc52WcWevshVY72mVCVP9RXSTmATZKFuo3LWqXAAsyhSpeCLGzMxW947jKBJCXAENCz6d737whG3ckk",
  "key21": "9ojvqSAzhoUdvBrW3vQmFia9yCP3YgyV7dYh1xYsWAhDtMzPBbhJQgzCVrUTUiAYMhazUUgFvhG48jqYozgWi3P",
  "key22": "4aEBxw9C9MqmZ9ZeuZSgHNEENJqBL95gs51fPvt8hv88AhVijDCcHTyHfaejp1FSJhWEiMKRw863XfCmGxUD9Hji",
  "key23": "2CqXdNEY6NW68ivT7zfQHQCjYZ6aMja87QTtbRfuWfircK8JDVKZPNq6Uh236GyJKqJqHxhzHqyvVBA1WPSBHnFQ",
  "key24": "5zAE2c4pPpEP6zaHPaSmw3MBevLeAfUXuN5aZpa7LRfQ7CQb1rbZQFEZkrVwwKhchVbqCKsJuwQSJvDt9d2ykrir",
  "key25": "4q3ro97kzMjZZo7XQoEbL2ahCc8CGpvwXwisaDuFDVpJrNrTMAGV9nbmGd67bSfxatFNDJXBAQtkhKnuxg31dj9X",
  "key26": "2pDyUyFkfRP3SKucMXJWyj6xA43TSprqMXStXK3Jrr1Z9nEJg22jW65AwVV9wKobwNmYHferzJDdUeYgncsT3pP6",
  "key27": "2CsynmcNGKNcHxsUb1CYAZPKXBi2ABaJomLmPFpHC6Ezu7g32QsNkd6VHNMbzDAQM7dym3G5hz2KCBdAfZDHekPY",
  "key28": "5fqqW5qE1KBXBAeZALCUVdhu4weEvEaPXixCsamMFYdtSN137Wk7PqGBTfHyKu8ZZDReWfEFcSpPJwEZKMcHpm8h",
  "key29": "E2T85D6a8Cncgftgn2Cj3UtFKEHwyijQpzzgBkNQcNiFdi1ez8TDLZJ7zduv8SJj3PJsod8BMA5q7qooZxATQqR",
  "key30": "3jZxZWJJXsNG9zfJJCK2YRuGzdXQwUfoVyD17Kj4HUL5oYhMHuvyH1w194FdLjpCjBtD2LERtHRM8TvDBZptxGWi",
  "key31": "4Wp8GQbNj6av3R7mJjamMkqaccr7fi1dci7HiqJJYComm6KQ1ypjw7mKXMnujKjSp4UaJ2d67Fex75mUheu9nuxL",
  "key32": "Tnj9Fy7tHsXH81NC3bm5ki5sG9Mg7kBp4mgJrw6KjJBY8dwQEYd9AxnVgXoJ43QeMNNrsawUtwpYtvffBkx8tcY",
  "key33": "3gxzd8DPKjF2kUAw4iLrpEWqvAUWK7qkwfYSCF7Q24c3PjrViTkArMTPyPSobBLFvvb4cYFMLZWMK6koccnpgnLb",
  "key34": "DCArwmzZDDdnDpsNgsVG4WewGhCUKBcj5kx4taPohExurzgLbH7DGjh87wnneFwTzzPQgy9fT7wBeFqCvohgcgc",
  "key35": "xteHtXWB8JUULHLfq5p4qT146qoNcytkrPBVH1RTNXK73k4jq5RhqfV8TqgiShBGqydo6AEpPQZCDkpZ2JVGdL1",
  "key36": "2RLNiFvQERrqxjSkMJCYEv4HFjVLifwM5xCrCdWDduaodwoPuAdufWuH9uPivNFzbW6SFGKq834zr7AmqaMRx5tY",
  "key37": "5gbXKbUyh7VMcGxv8kdZgsiTzZgTsP6B3soVhiGjWg6RaueRyPaiSAvNtmPDtBbBqs3Gtnb3mQP8cqacWMHyfmvG",
  "key38": "594GjpijZ3BcvzxVJ43To8yynVXNF66fKivGt6LfZpobqfMtc2VyXsRXTaF1gX9TnKxDSE9sKkPzZHkzaWaXuEsP",
  "key39": "2jyb4NwbU7jHedch29KudUknpDvJww2ouZ9RSzBWSrUN6qBY3qbxgyg5XsePJS7p7bYc1madZRTuvjX9mmjZhjQy",
  "key40": "5gFGB4rVV7C1s2Xt8eqJ9FM6Kss72s3giwPvms9c2ShLZKcDrc9KjMa5tWUvVaXt63RnktBRFiny5KJFX7CEt7HL",
  "key41": "QPXYrwxSbybVRjKG3P6jwKjtD7H2B94GyS5dcCba5d6mnerPxhMAF5swn6AwaqK3D8e7yLcrHaBFPimtyu12n1e",
  "key42": "5Qb8zzZdS7Q7Qjd9YeW6CvnLGc2kE7hHCN4oikCWFjSnVo7uE6FS2te7VXznLHHcR1TS55UbnS2PU1CpTZHJAGcS",
  "key43": "57U2bFfpfzrEW9FDGrhEF4LU63AX7g4Qr5h3TR6tVWPeFPJ1SxzgwayLxzYazDkqU1GwF42Rwa8gWinpTRbn4eSH",
  "key44": "3iVo4BqH3RPiRoYhP54zUjn1qNnU8qovLuhKN3EPGRfjpLPZQ7jyc9f1LRtE1cEQgXTfowpWXiG3KaNmcAZm1a3P",
  "key45": "5JR2K3wkFAzCpM8HEHpmCHZFiYbwH2J21HSWqdp2F4DMuPxaovMm2xRW38KEoSvfnpsnxZhskyYjM5f3D5FuN2Lh",
  "key46": "2cmgBuiKpbRhn82qvZsquDNGipbBMUonCgXxdeN4pcxbx6dRRmKhXtHFfobaBB2nmiigToDnJMSUG8PN5oTdDSxE"
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
