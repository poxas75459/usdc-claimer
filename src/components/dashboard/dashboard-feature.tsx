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
    "671UCYDG6Wzr7hVibaMdnLGaGJ23vU6QN2xMyT1fwaxBnJExpoXuTyVjDXebYJoTaTCX84aVicZi8Ze9bNxRN9tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WeYGHuM8jWpdLa1wwy5V2GeZgD87z6EQQoGVbczuYS4XSsZ46aKaF1PKuswgAGq44sxhtyyo5AnkqmBLcZNk8sg",
  "key1": "5Spsf7rUXwCyqDJFSuWzDqS4Vq3zpZ2wRQp4SAM6zBhgeB4Td6J7xUtfKRNrD2woUduE5mgkmR9m8i8xy7aPZqwn",
  "key2": "Wxmv8rAVBH15aAM3ucxYXToa7MJ8PsoSBpLkiBuDnfjtju6T9WW7W5nK8vXiCTqAtXaRZykgwi8q8CCc4pYJWu4",
  "key3": "3A4oMUCmRzKarTDf1gthy9mhuMB3AxQrz8gLLtj95a9CDxPjzEPeTqrBbMg4ha2sgbokaxKKerQcxhLEA5SHguyq",
  "key4": "4UYkwdkGJ3exgbHWYZag8cZbC5phsp7tNFKdPmNpiiHsbTixZqRT9ixakwHzpN3ZUx5MN2VaJD8iRmG9oxHo71JG",
  "key5": "2Z2BNABEYufwCAPZDFjEdBmvWyuLg5GhN8esmSoP635HRzKFC8LmnZuyi8LwYe8fSNNz8Hqm4qnoahx375AgbR77",
  "key6": "26inzyjZi1cdLHy1t7G77W6cMDNJLcwikEHy9qg2Zcyy5eoLXFo1b2xJZaFBrLKaHfN9mmdb7mHpkEan1Pfvd43e",
  "key7": "cGVVSnG2de9AT5hNkBKN4y6d7TSoDTXZNMMZM7j9eGEivth17FCZYxKXsdVoknTPQ25wbBposzX1sRUyrer4qJm",
  "key8": "3MovKvvWPiifEaYLv3yAzzaBqLhUPmjus59uZgT8vUrBfBBcgZd3PXShAX13yzMw988J1G8LsJaYeikrzi76qf4n",
  "key9": "2eXYZGuyS8iSMVAadWzME6niebGavSV5W3WRvMAC13pvAWnFLtSnazao2sKNF85FRHaA94BBkEfz1JDB3E4YzBFw",
  "key10": "2Zf1LzBc4mvGeVvWqWMT3YbUMHQjYcDVJxobu9XoQJZHjsEF3RKKK9uvPWdoMYmc325hmEJYhFZFyHTByXD5PfdW",
  "key11": "5Uqet3MTLhU3nyBvNAuveF16UgJ7Pft2nMVs3v1warGYKLq34cnDwg3CQJkU2d4S8yyi9AUKVQmnat4SSqwjPDM",
  "key12": "4mSdJZdD8chLrdoXVQukH2ABiRBEcXGyUkox8sMrfpuzfx21aSyXipv81Winh7jTqbNyFZAUbFiCmxJaqjogi7Ks",
  "key13": "4Mjicgx9tewuoUJwMQbw5iXDjPSVqynqXSLe8k242QVVv8iPA1LjAB6z6miZ2TRcB7heQ1hdRfma1BkB3uQe5kms",
  "key14": "2eAnnwJ9xe5PAg7E9KMgQtnxPgbezr6bnMQtwBgphY1YnDzS9n4q5zGaQp78KmRQcfPEiQqTcTkRHiwUUVnbDppx",
  "key15": "49KaqVV85ta3smHkYTcABACyhBEfFeeKNQAUBPeeo1SMxRyAV1bWSk4KqBrUDBJuU6Ev3wejq3tjWayV2ErdSCW6",
  "key16": "Fu7pfBW8FPMcVHXFof7wGrfmNehDi3Rpqbiocduuw9kW6tExKudjYTvepq4hKPTKmbQXpmEgB6diD8Knoyi4yui",
  "key17": "4PnRi9y53ns9Gqf8go6HcpNdF7kHADBmFuxv66PBQfC2cQqUvZjHWxaU9J2aP4XQ78Br9HiAFfszAdJXSHrknmBo",
  "key18": "4Fp1jCoRkgmqyevBkdpBE1aDbyHmmAzawgxSZy6k55FVquDN4abi1AMmDPnPE2NyETHyPFyBhNAMKyxGnk4zHVUj",
  "key19": "2xxgAD4aVVcq6h2mRH4C9JVEkWmRgPuZEddJt1ac6xTNCsDDGgxqk2VXBYTZyYmEb2ykLNkEL4DHrDKEPb5iX5eY",
  "key20": "xBqrEtCrzzGa4qLfggeTM95jTKanAsiZaXnfgwHNq2ouL3bQfTBXkYj5weE9zQf9WrekgQheLoJUScngFdSwbz7",
  "key21": "nBCgBPHsSbrXxjjtMDVHypmxDuNWh8ygDCLUNSKDdh6kZsXffqT1QQgxVSJUbzNauSrXxeuLD2hdhdh3wCA8VE1",
  "key22": "ZY2Mq1ujNDmDZxEzQnnm7oj8EZvzHnYisAUc6HE6vUuY1KdJNSCihX3JJiBftAFpFynJUiZaSn4RtYAW7PWrvSU",
  "key23": "4swLQF1z7cMdgtXmVpDhoqzSyV8BbpgyaYeNSL5n8Miopk9c2PJzdnvtMNSYczHSKfAsLq57rdnGsvW4GRNMSmEv",
  "key24": "4nLvBd6uuBLm7P9iAh4pJSz3FVqranpw7jskC1TSmxG9fK8m28xwnajh1QB23BVW7vAszmg32W1VQU9i6a24p9nC",
  "key25": "2AgM2SqZzcsbAzHNLMtwbg8AFrUNoV46HDkNVmU6FGwXqqCvfCJbfpf1kzHSoDJpuHcwhwbkbGcWuvnvSUz55tr4",
  "key26": "5s2uMBdZqyxhCfif7UfMQ4oYqbuVHxUT8iMNiUr5ZEkM8qmYwRkyyCtJRp2ynDH5zVTAgtPbdPrqXa6DGo9vibKY",
  "key27": "3zJMXZxVmgetogkYjegsDhKJ9XHWPzK89fNrmLgJT96qn59yuUN9tRbaeqiBym9PxxRusmjySqixKfghUXm2RjJi",
  "key28": "5UFB3jbNWoS7eiy3ZqwA6aBbbxmi5d7FSk4rTDW4oxcFT4jDAnXcPf5bDRZgoEUvHGMpucsDoPZcGvn3EwTq52uS",
  "key29": "4dRDm9NSLzpNwjPC74tfbGWgbB5NhYsuDAEWPgEWmhu6tcYz79RrM7ZyFnzF8kWe8pS4oAeHWt9Jy8oV91tx85NY",
  "key30": "4ZyCAWHgFWSNMN1rbsoX9sr5RjJm4mmwKrqg4L4gQfxFVdRFUVZ34GtbSRoKPy8Jod8ypWwSE84vkFxPMWXKbSGz",
  "key31": "3XAKvikedYLr7Vb1ZtmW8XAX5CUr6QvnAzpdswoRphB33nvq251FQFHGwnGc61qNDJ7PyR1J8MCZQP9Gvdg9JaFt",
  "key32": "33SePJ7KoS2DhDgTzL6GJkKQ2awHmbZQTvC91GmzucUH8KSzgXL3cYbGh3jgwUYX9MuvuSPecunKyS9QeCgTGMDy",
  "key33": "2zNSwsAWYuThktp4gbJzkLJt1u1hMNvPvDqw2JoXXXfRxySX9qGrv9YN4h5xbWCv2v65CDXypXWS8aJx6Xoq5ijm"
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
