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
    "GyZxdV7VNX1n5EJMmXBWzvyZAN4ksn8DKv9SHonxna2mNghMQ8pGPQ4HFMdudNWVSHxhgAAQTrKH8PUov7X1jvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMNKPinFQv8XiRZsm5NNj5jQkPhVbMxZrK3q33e6Tgy7Ja281Ko27z7fRC4Fsdgh6jDS3sro6MSYVQUpnT2Nzao",
  "key1": "68QpuX3YfT84pATVhnMNuXwJ5LxxPE4538rs912xttzzGYjGHMPAoi2C2Tqt2ZmkLetHmKraNWryAeusU9WMu6E",
  "key2": "4fiha3fGAA4bcKmcC3gdmtExcuCSSwb57GhiMbBjN83cqFhstmgzfZi1jsJUo4a1qoUs545Ze9dQrcb1wPy71vz2",
  "key3": "3kTpqU9pZEqbk7GwH51dhtwZ94t3xALykPQUhTv8dDKZHKtEsb1sgBxjRyFsunX8MFv1CSGmFnSWj3pS7vP8pKxN",
  "key4": "5ZNkrxhTHi8taB9wDNtf12W2RRKWSiK6ofirQLBx8pU26cAFErPQCXLmyzAZrbK3hzHuiwhsC94xMC2d4d7XFkgU",
  "key5": "5kXo19TQCcy82CdoJcVJiGeJoTx2oTDZERYYhTgwgJgFcimzKgbbN7nyEnxrnDLDdizUHc8rRYKQnRMCtFgHgLSa",
  "key6": "2xChLwWjEmFCTJe8TEJ7EC9NVHMPrUajfWsSctecyCjX1xNu5Lc2SbwUZqxAPmb1JsRtFJsArTh3fhPxABSB6cL6",
  "key7": "GnwjvfPZFKMcLRhfAdyWWvFjSkeAu34QxUwMQDkgQuP3pgyeSho28r5km832eGUKw41YMUPeAtR3jjzeL7NWSBV",
  "key8": "48mfZTVss8u3raEXZP8mNuXaMJovcr6o8SSb5f2onrGgXusDT1nfhZWAHaDN5PeAXLbSdRHULuMBAnhU9Ph19hQR",
  "key9": "5Jo5LhPqxgKwsHreojPLSG8xg8WartPXmgwM62B9XY6b4ePzWApfEiNyZu69wirtoMVPuFEqdEf1bP5BvtmXUWpL",
  "key10": "67B8r84PRgUc1N7gJN3j9RtQ2F52ve42dKPYY11gvvc4aTrVJeZyMbU9sjyMsVdKViCAbwgn9uMmJ9jFfQeaavtL",
  "key11": "BvtPFmEmYXkHBEgEV57mzwfk8f7r4UgCd39HWTNNNdZgTFPKKyx3dJpcScWgvmjN4WFb8sScQfF9ifBsxjmvkR9",
  "key12": "2onDTp8nTkoUUX7P6yMpDBHeAmqxGAR3JR4gMkzP2pYkckAtmRVRAjfQDAqA4YBRfycqTcbCsfPwrKLjoYt4JZXK",
  "key13": "2wR7PgDa2RT2b7bWfxrM4RFztsVBYvmHt57fh9eSFiRWKyUkm1UsgNSfpWmpxCLvPjDNgWMpu9sEPc824h2gLwn1",
  "key14": "31W5pLRLCeTGPA43uNmA1yMNiGCHZD56U4QqP6ChoiGc8TjuR7WeaQjrGWjnLmKJi9St4WmyW3fSPRoHEFwUpPf4",
  "key15": "3EFBQfBGeocuDuvzAQY2yZrWC1hdJGhf3vR6Pz4QjBkyLT8zX7i2oV7FX3BXUDt9wFm1eChX7M8mqq2L63gHwgwr",
  "key16": "3N1j66sCo5MFWLwn2WDDkwagQHRFtduWXfWKKm7X61qH2mbi8RCqxvsfApCr4AfejjjCeDPeZozDj4m5HWHv3psX",
  "key17": "D4MLzBNsJLY6arnvEku68H64qxZWcEFesb5637aCXFot6dGuGwEtVET6y754UxP3Nwm8WPPHKj9iHUpicuFoTi2",
  "key18": "oQj1WdxvJ8qTt1iJ1dsbusabzimLyPRhDfzJYkXtMMXpwBs9N3Kcx7uH9z7Q4c5U7gQKt6pEpz1i6A8vehPuHCK",
  "key19": "2vzjfoNj7Y7iPZaZYJqfU3nARrupZMmnVfNoCYMwv4XxSj6pz21MzAHB2top2CGFMjTdUhNYYzFuW34CQA8Vnmwv",
  "key20": "4vBYHLyN7WzoVphuW8vAKtekH1XnDueAovstiMG8cAacGmZmGM8mqKQ8DtsS2Gvw1ewDR1JsmVzePktCfbS7So2a",
  "key21": "3nzfpfvaAPu84u9aUj2z1YouaKL4cs21rHwqPA3oef2Nc1mwkUfGtvrcga2Kij6SSCJkwEZUHUjzGEjiG5YUKyMC",
  "key22": "NySMNvDW4XceruyyoWjwremKtogjswD3Xpz5JXArm6QtYMFWjhuzPncN88Scw9br18ouGz9iGn6nZ3hshTn5J1P",
  "key23": "29aZ87rEhd6o5nuUdHwam4mKNnB3h2TX8JnkYDVzBYSW3J1B1XoEwb74w8izb5gaoHWRsHXLY3NCN1jpCAjMFaG7",
  "key24": "3yC3W2vRjRtVXyEBUJkcVbxawAV1owrgZUgU8jXvzp9Myeuaubhd7Qi2PJY7KAu8dQt9oNE6M3E6YRgP1M9T2CBS",
  "key25": "2pPELSSYKh8dtmcRX8SaDSVLrToTaNa2MiNosb6hXMgzT2JgDroMLcyJuPu2Pf8aWhyuTu9xMBJi1ZpH6utfRYzL",
  "key26": "5H7fEZ1Xgrwz8vRxXULYn2BD7MQ1rRmfosZytJ7VgqbAmzXwAihmtsKuMS52KUJf1FC7Gz3bxfgX8B4aAgqttv75",
  "key27": "2uRFsNRV4RaJjTNCYyDNWWsj2KYPfWDjFooc5RDedKfkuZXJvr1kLePCJDLGJQdruk693kwh71Aamh6EMs4gfKDx",
  "key28": "3JVZDtmYrkGggjN9CeVmVijcm1yje3y1f12HqrEL8z1UeEbE84zvKf7JnYVtjuYJCUA5juZSqUrzJLK7CG5LnUpM",
  "key29": "3X2cjrUgEJb3X1VrxGshD4t475o4MCkbzBhK8q1u3YCrCvDSc1TX7EfPL4xsq15sxKm9HhAjpvqBGUiWFBSpRMhQ",
  "key30": "3uVWjto8QigD5pqnmVCSHKTBXWnwCbM2G9FCbmB71n3MCsXTTGLMPryh1xqgnFkdpyP9vnkfr6wBZSzA6pmv2wVE",
  "key31": "2ZnoapRz9s966o4A3Ax55rCyVQcaYMRoyBAHPozzRi7hy4Ck11m4cSxPDE9HHitsM1ahX6F18TBCzEh9JvtWxFnt",
  "key32": "ZUHPokn3deWC1Z7UvRZFBC7wuzH78Dk5gB6DstaeemyFhfRPtWNmxjdD2PAGfsR7BYUV86QvjFWMP1EN1MkbgPH",
  "key33": "5tQ3H7iUNVcGeVRfCeukcGyDNV8JdU5GWQfGfwbbZnZhE16xHj15dKKH4s4zxjFfPmEUMZfciGqQLvsqQzyB2zWn",
  "key34": "3NUpQAcFNvEhLmN2yKaZhet9U2MEWwDJxabMPg9pCovmBMXx2AW8hszcXBvHsyeuiGE5Z59tM6ozq4CmSb8S7rRb",
  "key35": "2ryrTQqMDtkvydF52n1NxjaPg4iEGzoQX2BGMpd9ScNoriWZfXYPskKj5kdfMaVVXAh5bXsaYb81d8eT1rPsTYKV",
  "key36": "55W9w1eWgJ6gx2vpStZrYkcudXvxgMKCizTLSX59pXW92oafFCqPnYLHt33AtRt3bXm8FaNZyUJVTQnvd7o5HJ17",
  "key37": "2mrVA45uLnPFxis57dHNsYSTMLrpYxtt4pE9TENNByupkqbqB3nsPdYuPERojXaeEfkdaetyKFAUAghyxGSL4ExG",
  "key38": "4dCu17gbLVM7G8mniFCXzrmXiVXynRS2WsXRQ1ygn7nhdMrPoMp1izMPBpay1tjCkP6hQGaRscgA5exAysB55bNJ",
  "key39": "5vc7uNCbPTN5b2QbLpo72Gov3CnDDksTTq5DHAsN48yUsTjqvDRFQ7nxbdvJy4VmzBoQy13wVbA7rM7FdqMaKeGM",
  "key40": "4cmV9vWryDRCfSjigo4yXD67H6PxBBoCKaNRwbwcKQAVmGqoEntLeHA1uiFznTzyJo39BA6afxNPKFwdxMHaH2kL",
  "key41": "4btjR574t2C25Kzn72dc3ozGYJRXPZaphJPTEWf49zkANWjcdf6ZfVP3Da6DLGvZ7CNuqSXWPNeZX3AT9nBiNjif",
  "key42": "37t61gdTEX9anBCBi7iqRa8FZ1tpViznfCTX2WcMPjdrrFndZmixxVD9cCXgRn4fFXkSgNJcPysRDK1mQxySg1Vx",
  "key43": "4FdpWwf6QprBqdNFXMeg3JkgRt4UqLtLemYAWy2FzhMzo1gdVgiAoHcmFWSrKDK1eDbDi9L4BhadNtUNBP2zRSZe",
  "key44": "3UFqoD9i4kdaV2jEDTGN6EheSBEEKrkBf6wHYgt5de9X48Nd8vVCoTrmJQprMbMgUa4vpfaw3FTE3oUDrRhvoWsF",
  "key45": "3ideXfCcCefDZoSaXrpx5Ab6qJ3R9UqirzdDchiSndWYQatCkxTWzBP3ecFBC5xTmcQCrzogepw8aP5AK6oS7JiC",
  "key46": "3r5ViwgzeAcQRvjiQh8xbVasz9z2g8AHvEX72TgwANMkTCSRyBpK5zoj3XmDM7PKrYbBWx7Vcwu9w2GujbPyCx1i",
  "key47": "3GvD4dFKH9PkPSGhkCGvxRM9eQreRx8qffLPnNHPA4o4zztdMUidEKSaiUDpJsfzN96dvKUeM7Rj8h5pv2zgG5oW"
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
