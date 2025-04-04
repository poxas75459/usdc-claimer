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
    "28SXPNiCMHMaZWVkBH8C3LxrfwUcepJ5qNM74aYSKFiLUzBUYK4qCnJt73DW9kbkQ8n6Q9bRQtfJYPkrHDsRErbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfxrpiiR1PUWfJx2qN9Lktnz2RhoYjZwfXWXoFYBeHewQk1rm8jguok9oYpDJiS7MMXktQUEkUE5FXh6r3Vq7BM",
  "key1": "29Xc5gsQnK5z2noJSYgnHK5xjPNv12Ngw41Zayjg4fxdphvEY3oFMYYfvpXNSGoF6E9F6Dsyf4589945kim4pxjL",
  "key2": "4XUqwXoLWf9Jf94VatPfCYMU6GxxVCAxZbuHkqReWeWjj1MgBPechMrVW6Nrn3VypQUEgPLExEVoqVwX6tUa8V2U",
  "key3": "3yUQ8HtzZiypf1kiSyJwwrZZ21FYYRkYh3wDaTosEY5dVRw6RELwo19nTxd2MM9eT2Si9YUkimqXL7uSnPwj8CSL",
  "key4": "BfnCAxdUESfX3ET6vpj86roqoWaQqYjWRSrw4vryRsJuKGkkWjnFTEy9LZ9BJWWyex15o9gAGfSvKmpmwtQAdJH",
  "key5": "5XA8g28Kgz4GFQQywM2ZAV1RAVXYwMAAp5rkjCcusP7wWXagA14BSbZAguVKopoW86p31M5PoRZG25TGUSE6Vujr",
  "key6": "4Jf5BvViP3ibpQmFh6M1HLMKfn4LVaCEi6MMqrWfcv95Sf3qETRmV4CVquRNMAwrQRZTmDHtfjweAfftRVPTxg1H",
  "key7": "4q6nhZiwi2vG8cbqaWGV41nZ1V2Z3yAGDetw1v4Gxbb3ZYmdT4KdJbmz4QnqNuHUH5J5xAQWD3LSkdiRo3swFxPf",
  "key8": "5Ptum3je2wzo1AWgDCnAkWppSzr8nzF9sDUt4MbKiZiVB9568CQwSm9svMob5srL5ZmnDkEhMLA6muYHrdf8QP2s",
  "key9": "u8E85u567hnuj4XDkVCvavRc1H2GFLFKA7Cph9GVj47kiEUUW9KDSgGw1Y7cNTKBsemQe6MLJxAvnJEnD92DBxi",
  "key10": "vFJmnoLN4QsACcYE4YRK9xRYyegbvPxqhap6uJBD2FAjJua3J5CfR16A2FbBfLGdXE5vAjcaGU4hEJPsbYC5BAu",
  "key11": "3kiEU7nFjP4ZdTqTQ7uBVEm1hhMDCxNc4FAhLcxws1Yyv8xRKny5KQrGXrBkUT74WSGFTvH1g5Gd1XdqhHDHeg29",
  "key12": "3ZPA59GcNmcxjckze24r9wZ3GL5X6eLViGbzXTUmC8ewWA5LNCMiwAEJbfMt9UpbvoscQE5zq4zueEVFQtsjw1aL",
  "key13": "44nrmxbjEJU1rtZfozNTFRrdh5jq7ZwvrLw2WjrBHXe7YaLFsHeWHLx327bWiZMdidoeA9s9GPmqXypRFkP7PZiY",
  "key14": "HRNttdtR7KcQdjxV4TyPGet4J89DKArM73ncii3KUR3n7K3edjMDWK344pHtKEQBzcPyaJYettDvCGePWuoSbJs",
  "key15": "1UkhtrWtYsVoQgFmRziDKM4kQeV1GevitdpWCeEULK8jG4SW8py8G9YREH1cT7pYojN6LRHcYfdck4aNog9ZZ2P",
  "key16": "7gLJihbALodo2f7H86kZ1H77nYczHzfKezscjrELpqrbZWQ1AwATkKWamzRiK7q7cfZoc6DRCzB9KLqFdMPFjhT",
  "key17": "2uxZnfcpxwr4TfZAHYv3oba1QJeU867Vjwb3tULMkK2s7X2ZnoTGxj8y3wHYrX3bpzMD2AyXTicDwwrjT9XPhjPo",
  "key18": "FCWyZkBaJ7mbrZEgi7gu8L3RjrRB7jiw4yjDCt9JMNjH1EHYNUxVFprGWm5sqNwFJexgFm2GTHy6pXJH8DPbFeR",
  "key19": "5buskh8ktBRmURtioHT1oWCVDgkfvPV2BWQ2pD4ffEwQFUa15w488rEJ9MHWXDcyB5pF6sDTnFRxULESdsmhQYbm",
  "key20": "T8wCDYLUiEsEbNY6Kn3HXoVvSCaJDKgAokmCQDAZNjbjRE7TwcHweUBHDw46vY1r9z6UJYR7g1naJAf1KwKyxrB",
  "key21": "4Gd5eTkYJpa2pxkXRLnLC1Pt9ZzZUe8gTDMHcdWYfJtizzpt6oPDhr1h5Mbcebjj8TFdKbY1LcyEwqHPSnMjXBS1",
  "key22": "ZMqVC7CSNJ9He3qbfspuNgVGsWsYkMgxYo8c5zYFoydCxEc9NxZiUMCcZQvi9zdbGxKwrCrZwRwQjuRaymfpamB",
  "key23": "59iqZeAdYjVpgzjafzbQgBtBVgUUJTGNNU7FrFBCUvtbbPg4FU2BoZufzMSCzZcdT2KpK2DZY8uWZt3ZNTeERtvz",
  "key24": "3ipUvFBuCQeu4iAhu32PnDFNG9tYyrnjmuM7UAZRPpEdUY3hGnAEn3su1AeSHjRrfUtGT2gFkNBhzQFdrceGn3ju",
  "key25": "4ysixKN7UmuYX57upTsUyNMWAwBE5g2jYZqfUbAo8rHHBsDXsxcu6dA6jqekzfFZfmjAS93bWhPYzXukeSJq1eGr",
  "key26": "5DTPER937WXPGj2SRvuXJnrcopRj94TKKWZDGP3vUW1tck6ne6NQ8K1XuYcX73m79rAvwGP1b9GYWGNj1T1vzCNz",
  "key27": "5JYmq4SDd6i5cUw4TrsBUMATE61DAXwyit7QT6UdR46kapG6QT6Hioo44kamdHvB3cXqbdCh5Fu3tr5eiNEApHu",
  "key28": "49Fp6zSgFNC9GTFgVffiJmaTUKonWQw5TZqaDHWhkUWztbcQeUSdJ5dC2Q42KZjkzifwsiTmTPrAKyJx6efovVrn",
  "key29": "3qCyMSaKByvr6NeVUYYmDak4KqUStvCgLABVXMQeozbqbbdujVUJ3btpU7u7NrsDSJREfqZGwds7G3fzrh6a9HAA",
  "key30": "dvyjrLptLx7Cero6qiX2fTpsgYEMufRJnbALxizChhvXJvw14j8Wj5S28qFHZ3zHFwvfqJuzkN9DcqT5QAbh7Fj",
  "key31": "321dfdW3sHLneYrPnjevKdTqxTQMdxtZwufQ6EwREc6dNYjjKozbc9YakJUBgedEX3TFY6tjUjHb6EKv28kmBXRD",
  "key32": "47HekoxAN1pn84aFrGNpc6Le31LHPxa9r5QfSwAznwbDKqEsMSMNPZFxRKjwx8zGNVRdQDy72qjAW6yr31mEC15k",
  "key33": "r2VxNQ8kbFm2VkTd8hPsB3FVZi1hERmVbPJYC97nwghcvfKxiGMipbva8bz2R9s2t1cVfDJE8UYyVVSc43xZDpB",
  "key34": "9zxdAN55CaicPeNe6ByJSQvSbCJj9gWJxmZPpHfmKjn6YBYWsn6jcGF1hkeYKtDQXefq2KiAZuw4dkVh1QTEDa4"
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
