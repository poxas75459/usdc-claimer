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
    "2g6Cop448aiA6kwrDAEXKWvGRvDyX16F78MvbkadkQdJfobCzkCqdVd24ADonjHvE4geQnhrsR2VUkDX1eHoyasq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ynsuxG9wyuGUHCQCGcFf55LthCES7gA4EUxK1V8CEKKzWFPd5NbSQL3xh1b4uZ6Vj6jJk692nd2FPYGdWeQkgJ3",
  "key1": "42f8B3vvTeym2B3q7aPD1wjqHxEE41MKkN7NaeiAqqRBe6ELR4ZMSjeiuUzW9kUwNyD4NyM8GS117XeDCK8wuJwW",
  "key2": "4avvQGzfApBHVTduzLChTkaQktKgqGMoi33Z4DgnKmFkdSVu3LD4YtkyVfHTP22RtMLNayi84tXVb9qgnafsyJQ8",
  "key3": "2pGs1UjS6cBS8Ar4dowfRVYb3unkcMi8jxpcKrkThzg1BrF5dXANHC5GtNAQpED49aYAZ24zaz3o68boFSZWWFEy",
  "key4": "4UiimAgqR4EmMUNL61FAPYfW56FJoxB2JSDLNHkCpLqtMEvnZkSWGcMDBuJPdfB7i33jbgXxHtqoKXfoWaS3XpQZ",
  "key5": "46uaCb9TgsHfqqsATeq7RSTDdBpn5ezUatFccrUVE5d5uumUfbKSmCqThPNVnyxgUeBNkFwJ1zZRTgubVGheDCk7",
  "key6": "4P53rSMMe3Wh9UA7ucRW1ztMwrAGJ8tYkXVafn1xqRt744g35Y1xhE2DtmayQsPxBJUj4pvmEqNrhjedRtC9wxzC",
  "key7": "3rEkANdGApRmcs8Y87bEtP2tbctdmfxhyW82XyZn6nPsVdeDAjCYq5VjJqNyMBsWigYhN8W3zBwegRSqDHEvSqXD",
  "key8": "51NkmwXZAvvsFafJA6tpphF44ryqWhLxTNfU8SD8PMtqf4ivfemkcezBZKBmETvfNxyzVW1cPiku9LaLp3tpC6ut",
  "key9": "3Y3kDJpUPbHRZZ4R9k8QhFUkHyuNdAAH7fVQLgb2gbatdKoWsPKkWqgPjzjdQZsvBU3DjTcPkBFE8M49bZ5zCD8F",
  "key10": "3pook3JHMKyLTd6bwz679iFappeE4oSh8A7bDgnHTMCdRJtopz9ndKCzKKWjm6HVzA9pRNwkFedEcUctzhmhqLak",
  "key11": "Xc9SG2pXx9qzXW9yneBNszzC5drpSdBA3pHKWpCczifgmkygfpn5PHtshFvWgfkmvrt8x5aJRomhi3NkHTQniCn",
  "key12": "633UncinNDt9zwg9NzuKc5LjWjLXSkKc9yEXCto7W1ZDygcJR8KuZMSB2iRfqDHWkZVkotW5ADWXh9fss14uRWJ4",
  "key13": "2cVpdazdC8P5uoPJcgLuf7Ww6vhpnx6jzoHRbwHzwE4X9gqKsVsfbxJUEUs1eQie5D8dXkAzbU7ewbQj5C5BH6EU",
  "key14": "4sXoMFyRfweSvhrfUo5WkTX77VgY14ULiJFrbhNdbs2F1djzxLmaQ6TnoSW7ADmD8k6jdvkwt2EtvoofUrY5e6v9",
  "key15": "QEQHtADpEhHEviMmhBExdfKeNEc6xEoBPsHsKM8wW8xW4JQH4udVwF1MWCvCkBV37s7WKxYmTEGnYWFvtSXufy8",
  "key16": "4stnTXdiDWAnGxchiXGZij64pSUWVsHvkakXcrgvuzvcTe37ackKzkoqGyXvPTSjyvXzdfR2yBvf29nw2XXdXhzx",
  "key17": "5gMxReYFqjrzAZnKJjZF9tJB76BjnCFw2UdmJzoNn9mhQV8bHDd7wGJijweQChSjKMTxhEeTMoDWkvbdmkhCrm3e",
  "key18": "5vXATi3iahomE3amKDnjUfZxhdVhUJ7uC2YuHzxjDcgYBe4woqgUGJvfqWrBpBmSQ2nCmbQjkWCZG2RPQAg9F7nU",
  "key19": "3myBY7uKviaU5yupXFnWyaCn3G4qraprVdWaa97V7nAtHVFJqo8tGxaSKD3An5A193FakAMQbmx47dUMrbmQpZVF",
  "key20": "2hECLQmxbK46MkSGWyjv8EqtweDrGwQXvCaCdN9SdZa3ffqPzXtCKyVp5kUFPVoCrxjTRs9Vt94vk16KWtz2tNw4",
  "key21": "RChCZD7Epik7RQBPCX4cMBpBJB8GHrNYqEtrxaqEkVo8GS7dcxco53J5eNUDBzgypiHMMHKaqgXX7nCEEAPSsXw",
  "key22": "5uvWo3e7KRRQ4EQdcyWF817m1aFLYnS6bD4beVcmnNs9SGiEf5KfLTSD6qCELdhAg66dpbxhQg5vgHBcfxhuhJdh",
  "key23": "5TqLbi2o5Z9wBY2MxvAyAt2Rr7NL5VVdNhzDxXhoQduZdzddkLMh5yE4hcorjBVBZP88toSpw8R11bKGSaEJm7AC",
  "key24": "XmrhX7RSinVA7kEvWrvZ2up8xPHJceBscAwv6iM6ZJ7zPmVXQFGDYVJh1kjmSfDhszUb8G4aYoizZRTxQG4kMeU",
  "key25": "5e6TAmdvEQTtxPYxNzVki2XWgx2AutNZ6VrAA5326nGsJzJvETsbWxskd7LbLJAV9rc5DnfxrHeNZdTy1CTFBb5m",
  "key26": "3ur6J1mkkonk7bqCPDy6DJcGHP5oGnayH1Zz1UcwTe2XRsSGK6CLi7jiizZ8zLbCbZVJeuBxGaWiJ2MgXsH8im4p",
  "key27": "58nvnBsriPYbjUR4AKqJoypMDFMYWtF9AK51XQnKcdVw2c3Pa252BYmbf4nfBYp1ct8ZDtJR39L8pxpooqZBQepw",
  "key28": "3jAToAUwSJjfWsC7UDMSpP17b5kcTw3tzph7x2z7wAg88qZ8WL6XDEpLekw47pXkDLDp6rVjQs2sPCwnzyexGpJ1",
  "key29": "4NuJdsCAXSea9Aj3vk3oTwKJg8JyjxozcNfFVpBC1vJXr9f49i5FdgL8Eb3asXfPbdUkipRsc3TvE1prV9EPuuzE",
  "key30": "2zMaat6iK7ydxW9ikqKKtDMynP4QmNUDRATsv6MRnArZRFBaasT2xeV61TgvXLnjRpc4BbdzyrWsa8V7frr1bjyF",
  "key31": "5kYZY8xsj62g2b3AMwFGqsyXJQRBYCyyFrTkKFrcd7nn8GdMBULBUE4Q943uYFdmuF12wA3mLTGKK4EVCHSMw8As",
  "key32": "oAZJkXqNATdpj4UTtxM5ecp1MLG3JgGq1FZEqqRd7hCrst7qDh1PQT7GZXgdKnFTFYh3sx3QGbZ8zJEJztRKKwi",
  "key33": "26BuRiYNpXyrjJD4rM4GPxEes2JXQJP2avguFU6c9cJe9Nsjc1E2oihgqz4BXWFwaBR8apigNYEmEQaCvGe2UUi4",
  "key34": "4dR4Ep7U3vMegsWnvXQt8V42jrNiYSr2V3qFL6LA5pVZukToX5Rnth7JqTog1eimE4M7e1uDLTHUf6eWHJKQruR4",
  "key35": "2wzZ3HdBvxZGbHp93maptjtVbXmNgsknVbvsH8vmL2ykcWDt8jUUnzVTwTcZSnswtLr76eughMcZ2hZYKHjA88NY",
  "key36": "3oqrTMZpZLSQYuqGN4HxEPEf3oVrZT2MN1uoXm5tQv82gvPUZAzTpTaELf8fkN6rjHw7KsqzFthwTEyCPrro59Vo",
  "key37": "32dJkqsrfejV3iXeBVQwSuAezyGkDkz8RpqmYoQK7d7eqRug4UyHQwTtMsMDYGKWcuJyRagU6vVssaYnq9fGSXgV",
  "key38": "4ZLqW9T4mpBKHV8KjpfzxMmXa8sTiXAjeCSLnSgoPa5JouRBwzACJ5dgx62zYK7Mpqvq2Lbj4ZswUMT9P2WpnEjw"
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
