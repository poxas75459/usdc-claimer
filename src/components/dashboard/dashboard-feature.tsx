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
    "4XJkWGswYPvSNvM1xNEpcXu9NegRFcmDaFktR3kHtos2sJdPYJ7LtLrqPwBoJYQTCSNV2kzd7pSwfqAN7c1WL5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lqt8ALmjzfQyYrRA4DCZCQ2cassgHzDwfGBcmBJWDJr2s2BNrQxUjYnW7wivFouyHgJ8FZboXZ7iYm8c9qcLw3W",
  "key1": "4rqQrCksWc9vAJFfguKrG1Ncvsdb27tU1MTp5M5F4VwA3V1uDAt6hrUHYMqUcyLboyRG8jEupTroMdbgvBUbjfj7",
  "key2": "4dkKLibjnB86pPtVDuF2p6ZkMVPeTi1qHXigeCjGZi71WvC99AgSP9RE1jpQZ9sitQk8hVz5WJPKT39PDF5VE7LR",
  "key3": "Ta4QBrnVeekSZt44uvkAndwPTYnGyELDg3Yw5k3AH7vahgFYucMdugRyBrXDbgZW1DM3kXX9w5LBcSqnyGEdV7M",
  "key4": "3XkFttoR5BxggrSAxatkFjcnKQ4pBpyJuJGBQVLogqLMtbsn4yvvArX9A9JMq8wRvK2RdARNFxVd46mH3Ykg1KeE",
  "key5": "5hf1GNc2LqFXBLGjJhFcnXbQ6iEiev9xRXFuBLeFjHiub4r9S3gxio1MnKTnMBidDLKBEYpEwpjpz7rkc5P2oV9B",
  "key6": "2yGnwPvyNpeCbKJDdgR7BFFQftvSb31k2MQn4ufC8oHVBBPpQvkLzV64xuYe2yt84L2Yu8VyDFEtzmqqLj6uBUkB",
  "key7": "2mX4CeXhD2F1jgzL7n48j3iF4Pn9kBWyp2TbhGSt1sDgv3KfCyhB48mHZNRHZwPsNfxrKMqXtfmzTq8d86MUezat",
  "key8": "DC4BNJporaXpNDQhWGCDYWHRrYYN1SeMq4KTncwYfH4QRWR99XfbQ5fGxKrUv2ubapXYheUmm1cChzsALSP2o7o",
  "key9": "325UqhocghXHYRCFb6pxoAHYhxRY14s3ZUkMCTw4nUDiNkRBy1Xoyso1KNFz67T5tZR7gFWr5bSv4MXWe7Y4Natk",
  "key10": "5UEC7yqCtwwc2kA4QWXJaMHDMRSs9NWJHNrB56bRVZdEw7uFLAMgPdPrcZMnYEKvm2WyJoJkMcGPmmfvxV7RhzM3",
  "key11": "536PLKXDgtxGMqyW2XH1sPZ2rqUDdgjJ1opdJ8x3Wzi1LrVPHK5EPx7uAPaE5KMZjTi7qoKUpocVESjKbphsVT5R",
  "key12": "3vt1is8UF6Qq5SHDRt4PbN7dRNat8jarQW8QqbqKe1bwpef6EvSnTC93hPcLNABckAk2V9pHv7ceCyqhTcye9e8R",
  "key13": "2om6uLNRSum4J8tD2vXsqpkT6uJSQB1ufoF2n3dyj5SdoDaKjMTX1w5ji7ECcNjtSxDKcWGQRVep4imYurBnrdAQ",
  "key14": "5ZiaPiYEC77RqSgAjmYqU1HnwzD8DDTGc2KQUWLuhz32dACdADLe6oY19mt3BxU2dvnNQNa3cG1ZMsqaLcd62jAu",
  "key15": "24prmDUMN1LRxhY7gSPJcQXxuq4KRbB9jdmbg2pXmxzq6mM8hppUo4XipuY5gxjPnZ56QBDy573rWVYmXhqybd5P",
  "key16": "2S6enBu24tDtcpscQQ81nVALba299FVhG8pJibK4DbZQT1ykJFqFwHcXC5Y7x6vKDGYNPCtzaXRP2Vryw5eyaivF",
  "key17": "2GyQwgqN5wbpmfKS7zKc8wjdYWd2bkgLuo8nq57zzUiGKrx96dcrASqdLomdSdDcvxEKAW6ZcNy6EScn7sEPZhqx",
  "key18": "5WaGtyRArSD2xDq4vNGP9Yy5HHpdPUwB27nhYz7z6A3tq65WcbJqMHFtVjX4GYbH3FANvpo86AeviSRgD5jUmrmm",
  "key19": "MHTp651czftuSvRN5SuoztNnBQMQwnifR7h8mmQQidWWRejRENQRMZzbqv3iTwZYjC6hofaC5AAHnM6SFTDxnes",
  "key20": "GY61AJyKKWAuvBNyu41TNAsLs7iP9jXKMM5ygVUJjGJqPCE7WDhMLR9bGXzFda6ZQSUrPHWn1yxMZHAY8t7Ckv5",
  "key21": "3wdGxrufKWam9ZqApu9EiXrkdHEb4AseBrxuSxyCyPp8QbMir2Pxz1e13DYa2KeYgCKFADRZwqcszWKa2WN9i9GU",
  "key22": "2hnYq7Tge3w3HG64qogrgVCgPcPCf7M3sboXnkJRjAXcoPa2GMwga6jnRSgD9T18HQAMPPUbjiKvjTLczqhbhJPe",
  "key23": "3BEkFs3WDrfT8uwbKWG3v9SPintZ6TLyRvsVm8eCbzzZiLB6fWmSh8KdHLAWBQrPzmtF6WDvAWezdxehgoJVk7H2",
  "key24": "61xfhDkf5UVDktiJiTaQCiDrDaP38YAAX1KB3yYQfvRa4E4F3UXEup7miMELTJQBjxCosNshkF5SHBSpKJC1rwQt",
  "key25": "TrNxXKjzA1wd6CedNDSnHCmKbJQBoFuvAsMHrLSMvbbZTshbaad15ayQ9L6bTZT6HFGfMeU4hS89uDt6mLd4fgT",
  "key26": "5HzYD2tZaXa6mosafsQrA7HyX8qzTQN7fkYbNTnUC1AusqUMDo9zbE28jrEukcU868uQjdNZKhgNnpf8ufN9KHMb",
  "key27": "zZmTd4jAJrUPza2WSRXDHYBe85VYUAvvwFFM17T1pQwDU1Ero8sp5D2sjXogGJHbH6Ax9ixpNMU9mKS6fdTvUv5",
  "key28": "5Xf9qZxxF6XCLLzqdobsq5jivMhzN6jHRQUv6ZSJtLcUsEjWkXspTkXqaw5xLdNCPzfcDy5QUqMT1gyroXem8mdM",
  "key29": "5HMNehXx8nWRFJxk8YtLpiT8wkq7DygQcUK2YSsAuzDMRoPd2eJmm9MocRNEYaP5H5uc7CofCRP1LMpaXSbbT1Wx",
  "key30": "wtv1zUjPgWPnSy27ptbmjD1xSmY5S6WADSYYwf1oEhg3wknmgT7koG2MSQgu1ppU6LTRTdMy32jmQdUpsCiYrWL",
  "key31": "2pmY9k8xFRVsHMkox85sxutgK1tq7UCBqKiJoHGz6WdEka14B66mAPsb7fVNtSTecHkejUKUMJF3omj6zha5qmvD",
  "key32": "3LNT6UB7cHfyGEQe4gRY8Ub4jHAEn3DFwBVGexFWpkqZxYda3gHctSmuKDUiAt3i4wbdeLgdMc6Cfz4JbAQBxGEP",
  "key33": "4NW1aSG5q1FkhhbqJUWxtkabTMoGG8LjWZ9VdqV6iqsmjnTbnkF8TUvU7fSMRcb2YHoobkj39FNue95UtbBtW2i7",
  "key34": "59R8ZMREtx81az7D6VshvuFAHGN6D5z6rATCwjQMABKmRJ7SS1KQqn2TSYEgkwwoj3h59CYQpkUv7BGSoVCrodUL",
  "key35": "5wuXEPc4VGG4G4boUx8h5PXvbuzzS1jwhQCrTdRzCYahXeZxW3AHsmUADKZdBwQGWNyVnw3rFDxxCRG7M1bwBhxW",
  "key36": "3Zjh4UQZFp8Z8si2qx4jciRA57XuU2NNG5m1ra5wYBZsS46sLyMtAJDDebZpCTgKHrjewByV15RoMY1vjFuADA7P",
  "key37": "33zmqj3gZbSFzJWsBzLVdsHxcTWTiSnDAmnNSJ8bAHSSPmi4kWvHFoj9ioqE6P6N6bte4ZjGw3p3JpzTws6bnkvJ",
  "key38": "4m5CcVKpmcmyffB4c12s2vA6iiq93QVXAj7pyaAcMGxjKRhKPWUmm11QocMpFVE7GJH3MAP7rxmhUJdg2rKkPqCN",
  "key39": "3LuSd5eqZKNkESCMUbYb9Ufbrr63AqLWVMtwCkaaFuFkecbCsDNDoXxwq1njxLjGgnJ4vrTWcrBjHxA1Rjoe5vke",
  "key40": "5xXV4jiNgy3H7z6eDRT3CKmrme97trBsfWYPo7SMqQX4VXva531xZCDebMgz6mj4q8DWtdfGFX6NzTVVRHGytSFQ",
  "key41": "4qTyjL361yrJd8FKqqCQ2ztqiKDH11xc6JViyeaUesPXMFKUAFeXtepH4wifYsJQUhN4Vq8K9QmdkDz2E654VXJR",
  "key42": "3nymsVDe9QZchDgTDx4kzFPA1uyacVhZtVDDMqBt7AzKx4iD9wN622zxAqPGPAmWqPa4frqPiCu315rz8DNKSG6g",
  "key43": "5NHtYqnWqGQ2Spse1XhTxJ9a63xm36hi89LWpgmw51dpc41Dtoc6v3PfykTtwxVY3wVjewvuENKhaAycNg3GeFLV",
  "key44": "49a9txyA8DH355Xmzo8Ac6s5UHUs9T7j3mtm4g17RKonmtdwG4QpnRRs9pn53WijRZsj8FGXyhy6zA8Az35U2Z67",
  "key45": "4ZupevzkyjM5JF9f9rG8HpMDPXRmyx8uyk5UcswSMf3iaTjk2xY4xsKmveGWdDCRAtmfe21MebhNofcz1jj17SZG",
  "key46": "5CF7Bd1dc4aLFsfL35hGdzpGaCLM7RjRobywLNU8UHUMsDuw3A2wrkqRTUVK4JzU3YUvndt73qBYYUwZ17mDAYpv",
  "key47": "4KTUh3Yv5wLhYJDYXmDbmoDNSKENyRq4mH5DH584JLzimcwbt1ys18g9LQZ2nqSVVXajkcMrG71bc9jU76jxkoRw",
  "key48": "3gShfWinjCmrU2VCaFdhEQLF2oWCsgngX7T1qDWaVJJH1Gctwyv6LB7WKJKnuygTULUfWrGkVKBYmkPV42dj4hde",
  "key49": "2ykb3hrTRkPExhXQUp7nx6c269ukeyUm7a1a7ixmaSMJhL6skyq6MePqvP5Smqg76KU8RJgNBvKCvMntHgoVwa3b"
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
