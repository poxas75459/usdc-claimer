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
    "MbEg2ANTRJ7mxLu6fueNDy8aUAXGhxSwXuvDYgQqmW36xZDyXsEuDACPEMcsWKdnowJmmMQynv9EGUgn4VgqYFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7DJtECUHmcftvjfp2kHaLJ25Kk78ursjgQ74C3iZ1mqsw9s1J9c394c11GwWpFE5wQHiR2f49jLpz61pEDHqCG",
  "key1": "3Z41TLPnpEaHRGkaSF6qs2bcySEjNWkx9Lq3pQZUsCV6wdbwuwuV4qtVnX7UdKH4re9Aq6EV5egA1UvG1mA6e1FK",
  "key2": "2TQ8jCYKoJs9NiuGMgfEWZvbjfRsDc4mEhroMBYcubU7XQS9BQHfmcFeG5Rab3azdneBGLEUqeMZRwVaC57WLefF",
  "key3": "2npo2g82gT2m3UiAqmc35H8vEhNdAq1vMBFnEMh9PgeKST5LXCcmrTTc6PmEB2Ad5F1bAW248rta7rxka2yREbBH",
  "key4": "2AAKtiJm1UsGrmgzfYpaBFStKZq7hrMetSMfTnVwX991yKCcQnFCrV53zZEaGZpKX6zVfAFbgzjWNX6QDssZbrYx",
  "key5": "4hPJvcaeJM3ZoPASJ1rVAZoC1nEGKuBBwvD3YEDdkvqW4mXypfUpaQLSPeJcenY81g3vopMuKAY64b5XkJNNem8S",
  "key6": "59rnV68vrM55iANKqc6JnHSWWvwNSX1vJKSbDXz1RThXo2imn2P5axM6uvBWTuiHXBeAAMdNKVWxtjzbbpKaPccX",
  "key7": "54JA2povnh8VnMtEbEJfzjDpxxpMnsSNfVk86noqtcXg2phaQndD8QCwyAGyLsxEN2MJCKakiHaZqLniwzvdvkuq",
  "key8": "5BhLx4okHWp3tKebKhQQFNNMkS9EB2V7UUUTcbyRLsENhtDLPZMgaqV2WkJhr4kRYUnqKSzk72sQbtmaSPsQTUr3",
  "key9": "395tEKYtKdojmER9XPpa5byykPnNMjTDx9HSeeFoHTVzUadZhcEpsY2ovyzPG1x8eR5mvDC2d4Ws6AQxNzmaRvko",
  "key10": "PMFuHS4f59S7KjPHpMnbVpcX1Hyru1jPgAtcPGhJ42io3diopMrdxSis6RQrWwAWNFrgPMgpT7Rq8HPUebjE7eg",
  "key11": "5CZE5z3U6mPvFNHA3NxqRSytq1Zjk4aceD99KVEWCG8BPpTCADY356RkiDY1vP95WPDD8p8WqjHGA4mypYwKeZ4a",
  "key12": "3HGdnjTvZatSQyU6WZDADtxhtbkJGsGMN4xgs5GfcWKLPYm3iUAmZdoziHBcxziT5egjBSWo4GYfbKjss5LWTjrw",
  "key13": "2NMNzhV6iVdZjhVE9XcQRcSbt9iPcGf6W2Bz2thS8RrdAXSry3qwaBwaFFiFL2EWyzKWqwxvfLWXNpvcSzer25ii",
  "key14": "32LjENa4ZQjhoeg1zdqCGHBuHejxhUBJx858SfBzbrw7raH4GnC5pKjTG6CPHNk3nsLXRz4Y7a9A8V7YzVBdNSqM",
  "key15": "45EniQRDLJNRbP7XLcB3Pp85D16ttXkxzVuyqzzUK4S8vjf6gxUJyDAW2AiCNqq8UYtzB6VoA8HFrn4V8CdxjCmE",
  "key16": "3Stbo1ozYT7Yd8grkYsiNSURTLdhFLZfusZjzydvHz49oCF33FDW9hqzxYsYkna7viwY1gGY8ihcnnN4j5wBY3ya",
  "key17": "2yCYNi9kWY6tCr1nG71ewgfrvK9B6uHjFUTNGKTKchnK6Qp3kQzQBqMwvQHMuAfCPXRp8bBLSr2DSXq57Pca3KRY",
  "key18": "CGvu9k4Uw6HXxWnAJqeBeYhNAeVSMf6Xr3zygjmBAx1Ezcy9JUqySbSy6NBq7GUDvcYwA5x8ovwacHktuXbmejW",
  "key19": "3K8poRnRpWw7iFQPvuC9VqRkN36Haac2BDzeLDBKdTQrJjgC14Na2m2LDTWZKxzma6bUn9G4Q9n6SVvvBQ2aC6wE",
  "key20": "4NkpFnPFndLEwQgh6FMromB7veo1MnqvB2AujPrzCdcRkeaPAVnrDN8sDMiBBxdpggdCQnjEXEbrYkZj1YhKzTxx",
  "key21": "3GwBg1PRZ6yJBYzfxpQfANvqMtapAyW2UuS9ssB9YA8qRZf9VA5NQSdzg7sS66hNbtJ9nzRsHjNFaJ5SK4hdU8k5",
  "key22": "PHDmPZuGUgrEBqq41wsLb1NMnpM7L9xknEm3EuBoyiCpbWCyr3nfdbmXSJ1UR2jfaLgYcvwe5xGNC4kTr2wFtqo",
  "key23": "wYJoaAMYSGCBw1gtjnEEzDcaWHPuWwmbD8vo3atLCYGMRWTRihmfpwJUDimE1ZW8Ve1XrtmMmoLssxKBzbPZeab",
  "key24": "67Bz8eiKVJ4ryfW5m4F131jTbcFEeMYXuu5RhAYhnRc1ZVmbUu89NjRBu6Tmn5uQWSxTndV7wJMiT62GyMpxkC1p",
  "key25": "5sN1zcsKF5EYwTx1DDGh5ej8kpQnyrShLgogAf4EFhgWSXfWnbGuq2dkJETHEfjvUhdh5m6yFPB2c3hLySQJxmLz",
  "key26": "5Nw9pUXEmJKxj7SqykELhmubX6xCEqfFf4TqBei91NHPZxu2qSKBLsc8VVmFWCwemdh3DyUkGvcXvs2Ba4dGK9ht",
  "key27": "37qrs2E1f9DzyNEuk5fyLHv9NQ8YVFUVCTMYKi4LCZaStLSqnuYcKU3km6qYm9SUfde86hFoKeHGmfg88UJ3FbxP",
  "key28": "2u2MS8T7AtRBKzRbBRoe3TYDfezu5LwsUrFLFDekgdgPSMMQmEjVepK4vkvbL8UaAm85mMtgQGJ2DGFfkAWShCuF",
  "key29": "3pmBHk6aJhwy2QHvum2spXQKhbgp2xowZ5ugi2Z4urtgv4cmBotgjEidMw3eKQxZHCqe6VeE4owSPbSy7saiEfYM"
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
