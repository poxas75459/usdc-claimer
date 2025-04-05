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
    "YuXm3bcBxiMnN99g6RjafH7K8RPYLVnYVL9n5sZ7PtzeawsTezVhdDZ4CopWecGvaguDB3wbMEPt36zpaDfYmRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAZNCMymmyxfZCMMaTSDpjqkCtKijZPfgAUVJfVZPPdXjbNzaKpGPMb8EwHU73QtRFCYZz7Lf2w3DapoTuLu3J5",
  "key1": "4GcUgYyK6unxjVTaoPSNWqycXoiVQREyEBf4EXsbi5jHkrffHexRe3Laj3ToVF6HnaAW5JBCFXfjVJUkDddDawer",
  "key2": "4PUnJNVoBrW3P4roX1ec4o8EVXLSb4o7WZoB3UmNVV66ZhgDrv2BydxPsxe6YHJyZN3tGo55Mvzowr1XhWWa4mxp",
  "key3": "5Rf1BX66rmjxEATAKjoAafGDJEDgZ8gsb1eqBwJ5hEksXuDbzdkzPqJHxoAiu8UyMBHb94mSm6xRaxyASuSYXvp5",
  "key4": "2FJLHRy9JiWxKVaJVKs9mbgSgiRSgvfBuwrpToDzUEa9G1Ud5YC219ZiVnzsjQyEcDtQ2N6w2GS4SvZU4Gp4o2in",
  "key5": "66eoFhRmPbApJoHdhyzRXbj8NZUCE57ZR8wH6G3uxSwi3fE2CAR14kJ5gPRX78gpKb19SiJRcUB1jbLks64oxMhz",
  "key6": "VzTNQ9ppbesLBH5GdBF5ShsvBbg34B1djx8UUqEmqB1mpQECRA5q1VacVUqkSWa2bdAdVpVvR6bQP4EzATKp25q",
  "key7": "5ThkopC7XwcHgQiFVVTj2tYHtWSGJTpgiBUQqdVGpNbxkBxMqLCHNCYN78jLvcahQgVVxXNtfdyq8VESSpNTw9eN",
  "key8": "2QiMikSQ8ExrU69Mg5Fc96eNei46bDiN2nmMiVvNxsm9XXLt4DCcpeo8cf7R2EVa33P7B59bdJVgVBad8dfDJ7As",
  "key9": "41vGXtm1LeFckMjXQ7KS214LxEn6zEC7yQMAC6ZxrmxzPujq5kHeRAis4enQ6vVtHQs4mmMFXLE6kg6yj59Mz9r8",
  "key10": "5hu7fmcwKAvjGyEsrDHHqgKxgnFqr3UXXATNB4uF5wJjLQ4QdxjmG5et1eXMeo7m9yLRruoT9FmzWa8chHpGkF6q",
  "key11": "QHy1v5YU5rudacdFsTjRzga13ghrqBkUvMvyUiWetgbfRPKJZSKHyWj4WydEsfrnZXLQS6G8dTQwdhzbjQZtWiL",
  "key12": "35ENjT6nztXDqmbEJaELC5XzaXEPb1Zkb4GxjoxTMz8oG2yfk5EhuLgGiFm9bmgJRhXw6zaFYo5R7sbhu9yNAc7R",
  "key13": "3JyupbjH4xST74d65opke4FfWsBrHPW9J3FPTbKWUwDUS4AzbBx76CJLrdbWk47urckRqHdP7uVCT8PdnaB6tM4G",
  "key14": "mv3nw3aNUEGmXgmNjKCx6cZZ7Qozex6eUAvdkywosYMH8DTyWu11jjjQWzfPnojstCJ86SLdAKwqGB8WQ2HLtMv",
  "key15": "4WzMjc61RHNkPRPVQCnaGGMXn41vSQ2n6R656wjSzpQFzPqeuSGW5Nmt4bHWEwuq4dpvXoZTWmtkcxmqM3hCGS9i",
  "key16": "33jr1aj5zUv3Aad2c52qqUcD1pPmdndz4EphFFjUiHtCKWJ1x1VrXUhkwXFALJS61zP3XmimMR4X6KcqdepooXG6",
  "key17": "X6TPPb3tdi5n6ukTGewWuSt1Z2eo69FUv2vunAQd2BmzZmF1sfL9wkuNQGKD9fPbvB8EBvLYq3RrF85zP6fNCoW",
  "key18": "Aou5sL3AfN98nKgnTp9PMNYZHuu9MFEe9M5Fo6SkZWsn2ZUDxTxmw8C3zvRNcFuB3LVtbG1ABkpSDiBMwZzUN2D",
  "key19": "3Hgg2smvpth1qyargRQRrJMQ1PiERSf1kAysNLCFUXu9sQGdJFqnbxCa6Py5CUBTebWha16vhpXVBGP5cXecAAh2",
  "key20": "2WJQxkE6UrYMz2amshMoEXME6coynbnJPGVjHv5dcnF2ivZ2NkJgw9Q7ZUN59v9Lof2RP4QyJgiL3i3ybkJmwu2L",
  "key21": "CMW5ewPPWHQqoCTSrHUqXd3uLJkK2EbEVNFuz9dQmsLGufw1YkC2P9jdSei1NcDVk7humwBzhSZtqL5vdVC8nov",
  "key22": "41g8rQqyAPSXLs32wvxT1QZn3rv3VJMkGK2f5ydHPTo3FTmzCENEhQVdCZvxLq47YB9Ey23gZW25hqQ9TiThEiwK",
  "key23": "2JsdbLMhH6p6fs9jHD6AKELmheNn4R5uXpR8tkfQFTktPqoBrbvfpnFASUekpSFpaL8c7YAMn5atseuCuvJg6bbC",
  "key24": "5g6vt7ENtmH688JnaNRy6qADh613LwUje8bRVjZQCepPJuei3XLJzSNrWj3deFPMvUwYoUeQoSdG3Be1V3Agjryy",
  "key25": "5H7NNSgyb5TuemVtj2DN6Nwb5ZaFJDHY84UdBdNXRc9D1fJ1jiTufVwvSQG52AWeqeUbwtoWykHZVebroFmaW8op",
  "key26": "bCe7gVfESyKgwN5fzoa3zW83f56yn8MKcaDQxVUVwXjBhdukdrboq3nYcAr9nbTstrPPZKLHiarRMV55uejBMov",
  "key27": "2VRUQevK2xDXe4yRvJRsg8oMiLCTV6UG6fyG1u7KfyDm1J4hENQSu3hrEgHtZVMaN5KMfkjfqZ95Yg9PwX4P7MZo",
  "key28": "2fMN8XmzPKZX152StJTpRhckhgitN4Enw57sEwPwamsr6HjnhKHWNp3zS8KpXr4QrrUzcRX8ApjkqwcdV5rPngz8",
  "key29": "66zUBqQqh3Q4KuYV48WpdggfePPBzYetqqHGAi7FS2weWdrgHhBVBvXsdM4bjmF4ke7cTBCU8evHGWBHBTBrT547",
  "key30": "2YqqtiCdkMnHku7mVeHe2foB31eb6ubKN6aGneVQqsVHghHZzKgD6XesF5Xm8pN7eKAF2MSMFoDYYmioz1ouKdj8",
  "key31": "5syrByfSeemHnBgMd54ai1ybxqgDyAjhLKut6uhvy8CJG9xTzKGzHEqR3Rb1NLZsXL7ARfEJuBVzgp3Y2qPxtuQi",
  "key32": "3mPUuJ5Z9xct6rKFE27ZVubzi8iDpKoLpzeYfs6TF2m5kDvNBYvete9y6k1Ye15J1WeMvzJdjbm9Af9i3MUdKHWm",
  "key33": "3N51HG96D4uXnWFwUV4sbfBkqwyW2kVyGeoQWBQW6Z8nzK1r435ZwRWxhhWb47fYbheryRsTe5bDNqJeB62Sn5aT",
  "key34": "3eF9JeeqivCp1eGdJAXdiewXkcdMvngiqM9wwBWxhxLLq37bKqWmcrmx62ns4ReozYk5bX3dzL3o9ySmyrDjhtt2",
  "key35": "5dg4VPvbhf3VEoFouxRyxi1Pt8BF69asoh3rMb8fGT7y56LP3BgHa8zbTMaJwrhtpafiCCFzyURE6fHY2iCowkYQ",
  "key36": "3CB46gP9fmAUzftvXMjzmeWts7U9KBH38hdYWXgSaRw8e8AFZsiiwhWNVVeqJnYxGe6TjUGzVBUN6Buq1XC5hnck",
  "key37": "3ZRTGzS5LD371YPJ9zjquoc6LPfh617TXHyMTMbnRY4XNRkLtF2c4MMbVdSuiA7By6ccxwVFpQmY53fmmrhyWxNX",
  "key38": "6aaNJNBKwBftWkD2nRZMnNJpmQEvofA2kJqzdszhcZYYSkFKuWswQedQuvZLWrMMLxoByp1DQn5iAd8WHq2LvCk",
  "key39": "3VsLNS8z2hZeZ38PRBovwPqH72Q7LkpNheff19LobqMiDxVuLVxY3fSvDHPkJPYXQoqCfCZPDbA7RbEwcWDiTGuL",
  "key40": "39RVwUKYfzt2fZtXp2EFReq5a7qPdNXxXThaPQD1aHaHusox4YATsxKqMmckjVeb6BrTgvkZFZeHRnyvdivjGkpb"
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
