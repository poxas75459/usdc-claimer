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
    "uQUmqTQpZJsJxC5RaoWZ1wz57his5VGzaJhzPtz246BWYixZGbQETpnemjkppNduTVhz8AAkwoQ4fYGxEvMYfW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Miepm6TS4z6yd1fjE3hYDm3m3c3inpTu3y2V5jSG4mBwD3xXDPya9EwxCRqeuSSSAQWfw29cqqTr1d27KoRKTCh",
  "key1": "5asbK6KPGvUfxppyHC3JvLYP5Mszf635ULo17ByZiaQRTowzgBs8YFuQdyD1eE94L93J76VvjKHg2MZ8mv86FztT",
  "key2": "2SbDM4trVZWoEpq2cTPAmTSjEvTV9KUwAMEURLPLt1DbPtnFrVU8zzU57F3ZvsEtME2MFV7LqZGyfTdHUigZn5r1",
  "key3": "45rDLKquxkeXHS5NtCXAsUHEwRjPaM1GbexwUrFEFZcVa5W5XBre5gqQVAZdz2TU46MgRK4tRzeNe2fgSXafrr4U",
  "key4": "2usmA43LkNMkQeXFHTdtsi2MYX9fNrt44myhQkNr42SzvPnbGHEm3Lh3m4gRv4eaPTZ6WgBH3FuKrXXbbQtPaLtN",
  "key5": "5Be4eoqZBEy2SxcRtDwkXhJ3N5QgqChi2uC2nGxgSAqn1iLq4asKp8uYxgmHn65mvbe1VhZt1kx2oFLvMeG1p5XW",
  "key6": "eBYwM8UnBfwPsZUWnYz5MPrraUNZCpPGEYs9PVLZ29Jii5GsNMTgZ4qbnTYhR1QwSFq62rQBzsxG6feB3ypbXC7",
  "key7": "iZvMGB1q2Fvs3g8CEWGvuXjbh1x1bRU6TqL14ngvURQRgKzGfauAzm6ZkpX6UcpXgsNgqCWbcStvKWSVVsFkx1z",
  "key8": "2B5uY9RjW4Spd15XyRcLX836RsZGJkjsyHqpUJyZLnbgbrDvcH66GxGWEugU8ubK6hm25o4xAo5sX3y5aVsU8Ff7",
  "key9": "5TRF28tJ1wLtCFe4X5YPVJ93pXD1YSTGgcjeHmpd9P4sVP2UxWNAoCr6tcAnHhmMpcNPi2zk2tPuojzfDne4vjj7",
  "key10": "3jvznNS2kAuxJ81sD3MSP7yGiGKNiyQQochd8rYokWLVWVNPy1AwgZkiHGej4d97yKa9ghE5SR6CmSvtvRfkCSbQ",
  "key11": "5vozTNkURUmsWBwCpZM4gEk4fzfBkN8SvfWVmonxcvrWUvzRsqsxZU5xVes7B1M4Y7fBf1UVGHwnwLvxCFXcF6LQ",
  "key12": "4hbkRaLueZn4gmbWCRZQQYy252MAGDHgTg6fwzC3AjdWPQ2jNXFdCccGZ1diG8ZmCPd35ri7HCSfThg6ccNoAfqw",
  "key13": "5FMTaGZyApHMDBqTDKjGetVWQ72BywX3wh6NCFss9iWyVrzBqa5WxGybpuwM56oX3wTHS4qRaxnh8egXMS3tRioE",
  "key14": "PkGecW6Zpmb7eMHuoJvi1yBwVMqhC35VuWiFqDka4E1FbTYYfDwZjntopu7JxTnNcoYbJpnMNpLM8oBtwpBZWaL",
  "key15": "5THPJMXmQvjQWEq9FfYXGxw1WLNrMaqkUBaVfv4uuk7xXFCc2f9PcH8TNx9EPHJ6CdzNnpMEH2XoRKMYUV5wrkNW",
  "key16": "5oz9DzRQirpeme8cm2p8pBSU8662k6SFRFgqaGKAZsXCY459KDJvc9pdrfq6rpMqZXcxcDLUv2WsGDc5magSFy2C",
  "key17": "4mfBm7pcnvWcqRrxfwNXGbTA7HCAoaSwF7Bxp4RcsZDkuCFcbx9bjZ4LLd3WkNNhM36zuSyiFqipK1Ng6djXeEzA",
  "key18": "2DxraEUfuMKHvNnDQxSPsbd9StNdvkwks7V398W98myktdnxqHAYDjYKWKqwnCD4u7Qvd8jx6fZTeHU4ijqSFvbC",
  "key19": "SJJ2CvxM5a65Z5mt5EM8MtxX7wHxbYb5uW1ZnUb9ZWrA6DuzjywR7QE4tb6dQnsyMgv1qf9BPdB38tpHUvG5ThE",
  "key20": "3HajY9ruhFz7Ni5xEDmv8fdzGWkjX8CbNv54xBgihBpwXZnCT4P8h8HMqUdScz78SabJhqcyGGPa2qLbEHfRy3vT",
  "key21": "51SbkY8Ahbj54ve6upYPpBabpLvewWWzLuD8y4NtR69Qnjc4CGNhKHZXzNMvd4oJxhQSbqXDWrKm8rzNnh9eDJc8",
  "key22": "29Jc6qkBGgtDZZPSKPuRBCVhED1uJmJnvWURYrzcHpf9KqyB8wg969toT1d8b9icuU91cp54deHmRqh5Q6fhKbKq",
  "key23": "BgMTg9tytcaKeTygHERoffGpxWvNh839zLNwHMrm9HC4MbXYRgPRXGFsGGEGvutiMDa2A51iEwjztAXp4rXLhjW",
  "key24": "4qZB2Su6zW2Q94FRRDrvDPpMDnekyfRPWaBKSqSYumiR41xDebwYG8XUJeWWTDkuBv21e6coBW1vS54RTGkoNVk7",
  "key25": "2yxSSEwQjJyRxnJPdgtKa3gLvakGFQXekaqDFaH2i3W6vrFQX97o58ATgfY2DU1DMSgqjKiKkmovBSNwV6ZTwAnL",
  "key26": "EdVKt8JbAnYGBvjxo9HpxYTuQbJi6uNuxfH6Ps128GXYAxCgqYK43ErSE5QWVAyfpM3KftULjFi5KvotQBpQnZ6",
  "key27": "3rn6wUmUy9Gyn8Jm1FwXSey4Gygbws5arh6L5qST22Pqjd2Z8tggYA5hubFjBNuww4aY6UAHMQeEHeHUoQhBcn37",
  "key28": "44S7CZ5vQ7th4osXACCWPmZk6nn97tx3p3rwdSqzXxKu1VVPfm7NP3WHyM4NwZHC7JNammmLSvdygfxaDsezGDwi",
  "key29": "4kCKnaoe5jAUwzmYqifWo7mDVApzdfMDsnz2tZ1wX13ahpSaYkR8GpEVKu7MbA3H5KFLy61mAeUw4UJQS6d5Nujx",
  "key30": "4CPzAo8ySQGdAKtnGvWMbsfHLrWVwg4tpRfjVQ8wWUCNdUY37GwbzXhQqJCXusNYEUXuiEKCufKxAhYQmmC9Y23U",
  "key31": "59nNpji2bnDkCVoD46u2qXriEpAneBparAmCKNxaBZNKmiDAjB2XA8ujiC2EuW6XdCWMfBaoFPHbyiwkQHqg3qTD",
  "key32": "3kVEkiCUUYApfrfJX1JYRjrfVPcAqZT4EERPQ37ujYUdJ9x7m5hehKvKgB96ThKf7pifBjHPiT5AonU4ptkDG3Mx",
  "key33": "4rRXXpWGJSpQMW8TSCRZvKVr4krxv9ccwZxsvqCDQMVw2E1XERpUUBcC7jQLG6zEbDhsfdCGtKNfJzTLodKFnTDr",
  "key34": "5qHafBitjLKjEfRKT5M1oeHjbnu3cewS5mnX9Rd2xxxzGtL38GrDkqad7ivqBfgCniYU1U6HdzKxjtxK7yqZsUfQ",
  "key35": "5yn7W9rdehGn69G6yyxDcKptQrGgYQ1g7GXdBzNSLgNgkDmcMQheCzjkCjNWGTjVhMpHLgcsXZwg3NrQu2kt5wdG",
  "key36": "4NZaSCzQZPB1pr6V2sY55brpC9NhxAdGc2oFg7qPsx5vGsQnVQgpGjTvMssBqmS8nyLDd7TJ1X7NoC9CKtCs2mAC",
  "key37": "4oAec1xMsxfXS7Vi1w1DKNTVUyBHs2vUApUg1qYLJARQeZjssq6SKKiLhCXVPykSmWJk15H1EzW3rjk2EW1AiV4V",
  "key38": "42wVv9J2CQNCQqp6KovbDqVRyaXb7nCJT49TpAWSS6sbZJ3KDBY47LNLoBTqTKpSbcfYguP1ivrzpexyN6R3rHvn",
  "key39": "4zaR5zVittZ2rzquJaz94eJdEY3uBoiLpq5K4fG2ag6571SQtdgCHxs2myFgdTmpSGpT8Seh8H42ezdXUXj65dQ1"
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
