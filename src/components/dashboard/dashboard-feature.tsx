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
    "4VG41mYdYGee3win58tyScsrqjfrSgutG5WZ2RVR7YgmozACgszgbRaS8fcio89Vi8fr2dWv2o5S8LWu2JwsudRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dv1EgDekgJxaynx9JaNSH9djovxBzKAxoLbCpq3w9UABFtiS25yrQkuUAEWkMFp2UsBr2XaaeiKjiajcytXBuH1",
  "key1": "3XyRS9ARat86Pfb7JxACTNKEQqYQWeYocuQZZ6Z9BJcfaxMRoZQjkxrFHLDhEcEKVSSkCHrYrfk4idZ47vj5hWH",
  "key2": "5p9qRc4CmE6EYVxnRbxLB4TxzcyF5Kx6gotL7hzfT6vNJ92DNVXhbJkEXmiJeotRJWhVaa2EsX93XrtYCk4iPS9H",
  "key3": "4YKDQuyhxB4wUJQ82hByvnRx6n73HxUe4rhN8wRFVYJbMAMadZ8xnXNKs4AnwtRm2LiG9BuJL4Mm4Fh9GcCmxqRx",
  "key4": "tLHgLBoRowxj1KHLkymxuPuXELPrDUQShPFwjQdkvSGXXSY4tQomW5X76sqrFWYo3P5gw1ghcaBBVUSREFxcFqK",
  "key5": "27C7uThCqTYwhyc9ZrvKfBwPuMkJPm1BByMyWaKz9bJfU934ZLFEXP4yRLKuEmfx6e71EMsECZz2pYRJyGKfVYj8",
  "key6": "4CB1pZTgY26dFCAbrF2rVYS7tmsKHfvBQ29HsefpL3HpfiADAXbWHLcETsye2SbNKtzMoULpRVWPQTGnKYGCdPbX",
  "key7": "2tNG4UPZuEvR27HdCYHxqMtBvBFXTChafmbCNdVQpgFXZm1Wp3RWzcyWbB8meinF1FVnU3pm67YKu5Y3sAVutJGc",
  "key8": "mtUbhMYy9qRf1PQ76xzhi32ShyNvoWfLuHeScNaZZGJQvA2NkJdbhguY828mQqedMUnKM4kgN8Vehgz8YzHP1Y2",
  "key9": "3MHJLPBB2rxW1KUZC4AGtTfG4ctmZSXSsMEhXmpEZ7s8nTdB1AjU91S5zNPQHnq7VATV3QLDW83sFqToxMmyNHe2",
  "key10": "2SwVFrMDRjmKy4RXzDvKwDyMgEa15tim4LSvmENnp2d1oDwJVpkP1J1KpBvxsKTg5zfH3SnxKiLsxDSrFve3MJXs",
  "key11": "63GLCwJSZmVRRUsRh9epYWvc3NjZtURLEMEJrFzmXsu9HiimNLeWJFBSmacctFnX3nBV6oozvkVBkkvCT6ioHL3K",
  "key12": "4HPXxbRUjuFtqHXYn2F6RBuZWAZLkTuYriY7xmSrDxedz3Mip6n2RFZouxdeLHvayw6BwyVdWfkV7MRNAATW46jB",
  "key13": "2viejkT2YuwqezJ9kiPrGNMG2Tt675T9jYcotd9G3iwkSUwYgbYsboo99tSVCeWWrH9xuprieKNich7TWaKN9iWj",
  "key14": "TTotoLevnAjPKpnecSgc9MMoGgToMJqBeoEV4Vc5DAVi89GGuxbQgeeHUWnX26XeUHs7aLuiBzsqxrrDdp3TU9F",
  "key15": "65R93WZ1Lsimty46HkzRcqs4U4CQBqq3G3Y4jJCt9b7NyMduTX184MVMEPv1Qpmi2DASrvA5V4xKdcc33LByML83",
  "key16": "54b9cJnLE2FnxgNnq65H4GWYi34nEPfC5Wz5rfTNRZHfRCMQvw7P5RAHXeRfvGf3sjjpVW4s21i74SSKagh6bD5F",
  "key17": "PhLcsWBeXiWfj7bctT2SvwPvBRZHrhsTEEkffSnaSSYUYTgMA829tDqmAtWifMZZCf8s3HscZ3WEhfbKAFxGXpG",
  "key18": "jwFrVTTWzKiRRJMWw1MdgFpv4P7ZkJJXqxhSprxLczLzBapgsHgMjLiRQ4jBUZqPUb7Mx7cCfrJgkCBExHfWQuH",
  "key19": "3VVUTGJHbvoJR2GaiDGxEcFYuEfQ9s3VxsbS2pVxNuVYjWBwsuj1NJR1Kr1SrakCgcqQf6WTKK4LZvjbTzXewf91",
  "key20": "28GDMLjQ9TTwLKJQ67CKgParbo7TB4AFUW4BgCASKaCowxdcf3krUTnJ7Zo8TED5DQyi8nthkGRVzcyeeQkV8Ph7",
  "key21": "WDWjpFTPQuR2oifjdHn67Lc8piSqLEDenMkNf8q1EZJBkUHZC5ufsxFSpQJxxBawb72oYsbK4sFP6DqYJKtxeoe",
  "key22": "m6kHDPfFxsSqLm8ScwXQHNis8hZ4J8NWxnrrtkrfFExEQWxYGKTVTfPJmkMACh9swTuRQ2k5UGPzWL7GYwixWG3",
  "key23": "PuMavf8RmkngJcpYtHEQxJt9Ahv6uPXAvgFb3mMiXEL6QAxy6mVgPfwsTgfM94ykRtKQXedYAJCbhs9Y6HbM48Q",
  "key24": "2jQ5TUgcggfGvH3DjdWz1oSSatT21CD1FMHkMBfARM6Vt7ZR52hYDfLDoay8W4ZM5AHHVhMrcQbjF2JAGpHEWnJL",
  "key25": "Zk7MxgepbMMWyGZU5X8MYZ17pu1NQUbmwQKUZ5c5CVRUkx6TCYRieBxNnXARybojyhR9A4kuevaJgLom8ntuBfL",
  "key26": "Y64mZW5Frdvw5oa6WD5kXkJ286bnKoQFXrGvgh1yEtgigodzSfjs6QkC2VybPLC7u8kz2k5B23wS2Gy2NKvNPaD",
  "key27": "e2eFY9u7HC85Bk4w8Akipv7Gu5zsSU3WgaFXFCrMhAjnSnz8tKiQLNYFWsZuCmPcTWXpG2aJHUNi5LSeTk4v22j",
  "key28": "P7zKVugMxJMP2bPDxuPiPfjzmfCzgnaRRDqdB7ATTVvNLbM8BDpGs8rcoPWGv5eJrPQSvyVDsVZfX9dc7MMUNyq",
  "key29": "4Bsc3YL7FFAC8WuoW2e37CAho7WEFVEyLwBjhmQcrUcF8vAfTAbk8jQSJi3x5t8azx72Bu8aH2ZeyheRqnnrc4em",
  "key30": "5Kidd64c8of7FZrvr4KDCLGAwNmaURYZ3aJ9iMAfrqAgXc9Pr21f3ZXqxtgus4KiN87xXjgzFhEzYZ2BMfZ8LbW8",
  "key31": "3SnK6Wr9Kk3wYbcHrUJWvnachSb8sjMNK1vBDS5LowdoBS5my2S6nVBicDJ9F2ZRJUL7fnQYrjC8QZUWnJfATUzc",
  "key32": "3taSyJxen65dCPQhpNDqFSvH4GaFf5pTfCCD5gSm7f83d3nsjepezr6mYk5pvHCQpsJeHq3UToyYhdAsZDHaeAVg",
  "key33": "ZNyK2xPNa1w3m6qgcdqaG2X55vrRnKNj7EmDLNw1zWbodXbsung5eXKfKJ2tG77yQmmrg68mRQxJwwW9AVFXRB2",
  "key34": "32Jfxk2nCmpgq8Q3X4gmzVagyP6nracfRv8yrufio5Co6x652rXYyTnUkQQNvXXnitPhtv1xV9WzdkV2sDXYbN7d",
  "key35": "88K6vRe9PsPcahdWg86AwAhSvQ4LnvvEpfZwfGf1XzYuThHdApf8MFGFsncGvRFhZHM6kdEuXdw8syEuSb9y1AX",
  "key36": "2vP15pbbpQKnAZ35byGYSzYHrak8c7hWXu2gjz5Fkb2U78oQjNhpXaDtKQprF5fwasCQ4KfDFJH3pd38orTYw2Q5"
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
