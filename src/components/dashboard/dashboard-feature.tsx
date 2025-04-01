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
    "7CVYMyYHX53Dp6wrtPVqZBhfEMCgY5dVRCcVamDtjp86SXSwKmg2nUfrGSPfiXiSCMgmhiPxhXrZNMSKXiDwF2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBVSJqLp3FumSxamhyQi68nunZVLb4yyCwoFTi4yot4KjenJvr15DvjtRBjMX7acDuyY71UJQz4rLuxCRW99nJx",
  "key1": "64ieg3N6ELVxts9Ez3gX1jdW5zZRY8Y6te9Pai3dQmGqPK8oxL2Zf8R9HqmHP4J9Kvuih8kQJPnAUHoGPg7zWhJE",
  "key2": "6tCmpFYo3xnsoou45UVcmcfgEsXPpvbhB54fze65gtM3ZWzjMNiLY7spJmvLqyFo4nADho9SArZHDmpMV6khmBE",
  "key3": "JZzYYrCQLf9oeSiJKJwJEEKud4YBKaY8q3qKbw6F9dKK8vDyJHerXLCnWS8boRejjbnn6oWmwjjWVBrxXJtJW5q",
  "key4": "53PZtM6vj4x79o8UhDCafjAd8uvUpqGVGm2XP3CrT1d2zo4A3znnbnYcuWMALec8JH7WXHTnA7fDJgubUqVdxBsE",
  "key5": "ti14yeLkrHeeUnXUW2X9HhFfhkTPvNCxhQRauS2mxjUGDi1eFx3L3Zw6ZXkbvb45Zs2eqmR4bDxDoKNRf3nowss",
  "key6": "4zJS1CKobiNC24qETCTdgE5bG7x2Ex77FY1HQ5hzdDuRyafUDWJoRumiweRTS9RPkjwob6kcUBQw4uXSojU6W9W6",
  "key7": "4S5KHpLrrZrT8QsN1uRi9yN3LSS9PbdS6nG1V78AFnJrJQugHYdhHN6n4jpbkya22LNgiiuMu5cKwFTCx7UKefsn",
  "key8": "4CowGM4D9RhDZDqeHncZTqLB7mwWHKuruxGB291EwCrkMJnRRBLe46QGGokqstE56a2eA6CABdLyb9f19FxUGvpz",
  "key9": "65ARUSu7eHFjFqKrubVUPfAvVkWXgt97bYkmBDE8Qrfvp4fSdZbSv6npaY4m3CdpbS8C5FJQqgoJMb9PzjmJvBUG",
  "key10": "4rt4npu3f77QtepW7KYJZbCyT9UwdmwzgTpP2vG2fEXWDqnJrAurvy6XGq4VMSRq7h373HCs6SW5u4ypoaL34qRo",
  "key11": "5Hbeo1Wj88FcQk35SkaSqUyQyPpGWxnacNnd6gLmckv2DfGXW4xEcfqKVFEphF91HgKTFaQMyVZSFgajs8zimH2v",
  "key12": "2spUDoMYsFQY68qWM1FhEFPamQFaaQTztSjgXfiLZ8n489v2GjPm65wm2XfX7Kt1VXERkbiV5pW3KiCSdkeZrcLx",
  "key13": "CLWEBjLi7SRVteuir2Gi1yr8GuKpkP9ecCWsCKyZvEEcs5ZrfMgsnpeaBtRacMtSW5Va3MkRu7vEEurSJ7wotQw",
  "key14": "oSywJJmu6Uf2fBWYKXtWMWCHKy4RgCec6RE3paZYcGgg7GvK3tqG5ES6uoMXGxtWG3mYPqErPdAJ78RiNXKZBMm",
  "key15": "5AszyoY6F2hqKGx6PKRRr7KAwew5krc8nDSMmCJrXRjHf6QkNXK2HvT1DCg6Qqm27v6ReyU8zT8v57V9RQ7KymZj",
  "key16": "46EjyMpgjih53tgyRyEh3abYLoi5KiNCM3VRB6i8qsd8sKxPchGbZQUiHkrqCTZKdZbWc6RmpDeiguatHq1TNPst",
  "key17": "2paTvAZhroPxVQFLQmd87wojc1zYtUgHju3nKTjKh3KYDU7prnd1c7NceYuSgE1edPbjh6BWex5epCVFq2mMzht5",
  "key18": "2gxWUG3Kbtr8R8ao4dQeA6Ckx5HZJQcQ6a1W67cTEVvisRAErkwMQJYbQtzzPpEgfZaJeS27eanK5iL7S2TLH2Gq",
  "key19": "3hBEVz15VstVMDJhf7hsVw3Au7rsbmi6KNk7eDEg5HyNVLe2W72h5Zs7eny6vnRFnzq6gXW9ZNYLT8FVjeFGGkyK",
  "key20": "2EcKqQBdMuErgHGd39bGa8wLti2XNg6j6es98YvVeQK64KRmmeoNxMvbYFjD1k7YVvB7bTEZVgTjy3c7k2ezz2DQ",
  "key21": "PwyStHQMtDVbTLF6ZrdM1dp8oyq17qjAxzLLn2WGPmhNXDagZVu695Yvk8Fh3MuLeEkwFhv26j994EzeNH5aEgt",
  "key22": "e6gVzkr4zFVvmNp47D44teo2KMBPdn3Aoe5UvLykNDvpGxQMjK6FSStdG4AjiEc8JYfzsjBd3vEPSBNAHbKVsaW",
  "key23": "4qUB8qcMr7muP1djhbeU6McxweZpKWNrgBkFTTHKStj5yVbk8TFazsbsigSjZ43vV6btfLsuzve5SBmoLXHKKHN7",
  "key24": "5xx6pFcXU6GogrzmDTAvygSGbfCj4eqSVTjEkUTzQzmwQtbSKC5md17YY5A74axtVhUeK3FAsNno1u5BbEUWNgvR",
  "key25": "496BgrEs3PtTiqta1ypkgiDZoaZMscwkpAE3VarSXjALmLAcuF37gvkQLtZYzv4eE3cuL1vsHKVCv5WpexXYnmpJ",
  "key26": "3P5hadRtRoi99yPgwodjhWZW8f5pgNvGcmoGF5U2u1mQkGko9DpsKNa53ftKsNU5dTanw77LQTySVCcHz2ijuWJY",
  "key27": "28i9iy6bGAo4YBG2J6YVLYH9qqEiTembHLycxkAUnr36EmxNrEPs5QfnJwMY8EqExD9gq3XCfh4B6cG4iBp89T2M",
  "key28": "5mwomeSxgKsXF7Avbsqm8pa6U9TA21BrvvjF6mnEhZe6PtYQF9ppgFUYK8newrL9HP2pQTLYXYTzuJ3ht9fwtwTA",
  "key29": "2Sev9bBXSeLM3Evtqy3UNT1noKsPS9Q6Bea2WCqVbxpd1nJL99r7Zsb8Rm5eZx6TSG3pkcFBhXzXs5az2C2TASVZ",
  "key30": "35t2yXWZ6fwtrCUewNvdvB1bUwW7xrMUSUuWaf8nZ5v2eEenS2b3jCnKE1fZBgajzi7gTPBsc47CCW9UhZTBHjBZ",
  "key31": "2nM5Fxhr2yCXGAEZZkNKQPZ3Jem2i49d349b82qT3wvs2173u2T6KvdiA7dcXRZGb3boEbs7EPz2kkQLdmCszcbM",
  "key32": "BQZ81Ep2cvJ4UY7X1HG3wmnNDhGywzTDNFnWwYn9KY24z87kqTo3jvp5eNMkkK1Hz7xNhBNE5a9h3wy42uFLz4D",
  "key33": "2xSRgmyUd5bLtt1xNTLfmuRJBtjjhAwqdbsQ8xxFhncybXyrcGeF5pdFZja2uyijvzUgTFVeHXTqaSqRfkKkVRzV",
  "key34": "5YVVkDJcHxBrpmDA2m1FRFwUWmYXvadTsZPjv7xbQuGPTSEhxkMd3DhUnXwHpLo9UYLhiSccbVeyuwMRdJXie1WG",
  "key35": "5yrvene2HaFcho6jgJxc5Grtrgc5J8jEa3HuQyapwJSJZuASYMKsiXkmmcbAVYtCoR6pDAU7RfiJ5iAaFFmgxf8y",
  "key36": "3CWoKBBAipoKHAV6ypSYsBrwmYrtswKJ7N58YRhm4cLvLFhJLG1juqVDNJNAx1ThiRXcfxuHyvp37W2Jif4qGhBa",
  "key37": "66xSfzg6JonvdATa6HRH3e3NtdaxvyegSfTqYnLxEM1H7ZtwDJDzgCXj4wYje39BVKdsJx9jQfFuSYhoxMK5a9g3",
  "key38": "4xV6DMBHm6d8FUGNvfLaXFj325nyZRJ2DMvyddFRyiXPEYN9tDdFkSGoQ7nMXYgMcPVbdHTmtLbjAy3BcqphyvVv",
  "key39": "TDvyaZEp3XMokYZ1LPZHDvfejy1jGSvKoHuJSanzqTUYpUTdS3Z2HgLKZBjiAnANFiSLEJSYayYMuo7jA1NpoVm",
  "key40": "4Pt7MJ13QMoC3vWtW9MHQExpHep1hdHDKsbECztGkv6oD6xUqbkYfvE7AesKitFD3d7K5MHKZdpVtvrLceNcNgqg",
  "key41": "54an5BesXvLPNf3WK5NjWTpz8D2XitrBB1ZhAtFcfapxaCJUZTnpXJLFkC3ZBChH2E2bqenLoiFc4y8D6PG3n9Nw",
  "key42": "5tQdXhsNbqWpejQ8z2xeXaXiQrXdmHramydtg5Jsj53MY78otSz4NcGVei9eCCYGPNdtY1VFfKkSQYRxaCTHRD1u",
  "key43": "3dGZgtUemRvQoCQn6Ve6iKca9xo1FYqBaqQQov8y7J1svrvCJhLSDjMBL5DZ4xcL7FW7gdTdKbUDA9fxz66T41Cy",
  "key44": "32aKgdNqfzgNykTYaopowwLzUk4DpPcwyePRkCGdhDx9AQzx5LWz4nP4tFQ2pTHtqgnuutiCYfaTvcgNuA2DmnMi",
  "key45": "5EXDhqRxGmQCk8mBm5pmnKoLqKGqCXMLXcYvmWpL1Xi8oAgSTssq4pKVgAA8wzJy9soEFX3ppNZZ55xgzR8oMagb",
  "key46": "56fJEC3tw3Z8Z6fH7VZtcZryPKCPNoJx4X5zU6vaTH2jkFPAdURRoufCzNyhXDzBXt3JSXQYYEB1nPoj4w66GuLt",
  "key47": "3MDYTCpzPRaGo4xZ5XzS7zE64NkrPK5UTjWXBYSZGyTirVUJpvmDwsGKeuobNpNf9CwLRH5YStD8eHrb2kLGJAba",
  "key48": "5mvK4NTxzVEzJwfxxRZMtjaGMQ4JZNeXxpzXcKRathYce5wQ3SMqLN42WE2imKTueBirA5sKX4Hmjnan3FF64p3U",
  "key49": "mn9yL3EMjHJJDwLKGLRxbaPcqJmVBernt21q2LDBnYvjvT8MCwoPLziUKr1EXwv5kKDW4Ss9gX2Auy4XNPqQ1JW"
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
