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
    "vP9FAT1E6hj26c51e5shrXQ1CXATWMNdmvbJwXhuRLMoqZJVaFrzbtRNV6jzg2XFvjDFEB1tqgPoJLXtpN6kQdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ySH8YzRNddUxrXv8PdJzAqLYQjn9TUkLAWWqTztKgibCiZzvbJnoPvoRSc5ysLCP3kZK2axQBMQuHSH85mRExNp",
  "key1": "2L7BfSeXSSxV2MZwgUwocBVKZ54TfjibfssuMnktz3LfDoLn4GsbW1jV76Bf1X115SqDhfCRv7NHTTa6VQdaaqbJ",
  "key2": "2iJiTep5tKkyLHbkPLgztYdXEEBEye1RTgeFVU6iBNu61nSsU8c9AtfnquSCTgGJe7MK4Lgz565dC2GrSujyFSyZ",
  "key3": "5DwkHBAQ9BrsyAectVZxBhSbS3ELDyXHoGpPh6XYXoqEXDkqf1fU2cSgN6iU3iXfJYkbyheConwEtzQkuSY8HJpm",
  "key4": "4x3smTW3hpfsFK4z1Nd5v9EaH5xWaLJZJ74ZnixmMfenN6riXTLAzpC69uTPtvHVjHzJnUEj8bqiWowYRKm8PezB",
  "key5": "YCtMvw1WmYJefp4voNeUbtevACvZcCuTbX2A1U9t2wHKtNcqfGYr2FDjEQ17iafGjrADRVnATjkGyCLU5nCax6m",
  "key6": "3UXf4B7c474fWTMxddTbSBeeW315NhNG5Cmq1ou1djp9LhaR1kz12zzVxnPoJnLaFtfyXNLRHYtswpfy6FHtLVQd",
  "key7": "eJ64qZSn7ejkLJZTY4xfg8oru7dUPBc6vDmtMh7XxUmuXHdmuHzXSwWQ3t1w3mdFsGVPobfEN2k63WUNB9YfuYY",
  "key8": "9bB34L1VzrAtERuWbMtkYR8mXNHSbgnmxUZJokRuZsWHkwJeKK4g3HXTXp5J9DxWXhZHxdNP6MQtfw5kAn2thgw",
  "key9": "3LAa9YEKeaLf49hnyiQQRTt65sd3DAga4WTi6skgcPV6Y4Getj3TzMs1DWXETMAT4BMRoUky4aHcEGeWBAAmSzZi",
  "key10": "4VndyRG3wM4sLxWPmXamb6wKuSYCbv8Uk9VffdkLRXRoxJAUxpi4FjZmMPm6RfK1fwRvPnpmRbfREiQkavcNKird",
  "key11": "3EunMxkWfgD3Fmm9YZYMaVbEGa8RdWps37qvztY5qZZCNdEXXJyXuKvgEMMmDf8giMXdi3VcsoaVKfLSw2oLBqA",
  "key12": "4HrE5EMUDqay2H5J1u7KKdmRFDPeMxbazFAt2wPuFgHRiKxZWspR66dEzrq7qEYu6JcsnfxeVTdVhgEM6RJpwJp3",
  "key13": "3P6RmvxZPVWi8Ne9W4CSs2vw8qcFvXL3E5kF9m8P81ShwebajLva9WF4oRvS31vhzXieiCTyDPCLq8ceVsEJSBqX",
  "key14": "t8aGBg4Pc2GRdpebK8EiiZMt8km1McsVf2VhLXYvZ5fTEMKUn89WjmNLZYuJQdD6iQYSDpbi6VgagT5mCzXTV8e",
  "key15": "2SjKXFxKRHbiaVnajUw3497fn6YgfsHRcqoeMDvmmFkxSVuvFmeTkHReNRZXq5VJ3jUhuP8hkWjbsQq4ES8ncXJ8",
  "key16": "41YeT5XoVBRWvAC18iUBRXkyWcEFW8EAcR42oG39t8TL8Xd35e1o5f6dMVTjwDWjihoabkLDN8fC8xLAtUcmFMu9",
  "key17": "582weA9s8jxJCArjuDJozHw2cqBhDcAWgPG95rivWqRX1AW4oTRJ2769XXNhj42a4D5bkttzN9CQi5pLgTfuxyKW",
  "key18": "io1bKMzyjC3EJEyLZRjNaFMRCxWC9b4jDLY1PMtQ4yKpLSdQpxMBYc67hMEG2QPRNWEdRb9YpibgTyJcjMzzdWj",
  "key19": "ynZPbPKrXy7nQ9hzgcA6Dh3ygPhZKg5cMPWuB4QA26ewwauL5EqEhXLx4zHJD1jgw7kB6rFie5ErNKELEXebA3F",
  "key20": "5ha2wPe6taVUf2PSsCdiAaNsYUZYQtikdcwpCw1k9hat9LfAjmc8h6W1GUkb19f5PfFyNav4PEUb4xHZVjeBdMTG",
  "key21": "4B12W1i6cQmcE46afgbZ6TapQvdRqn6hCQZG5v64NGGtykTAdU6HimbHvnEqrTzgy48KZ9QpUBc3gFEH2aVWUaqq",
  "key22": "3aHcV6qYGn3NZSmbhmBPB2EKAQkD3BEiFLTgau12uxfzwaEZ4BRLaSjoQf9kF4izMz5SEmxk3zrYvYoPFfQpMM2K",
  "key23": "2N7XymsWeFfWFygL5eVsUYtubZvqENW5emqU8CTCuTyvdrv2b5Up9eLPKv5zdvG4iedc4Kys75ENxNTW7ofUF8c",
  "key24": "2Vc5yMxdsj9dVvXBJrSxp7MrvSmkRUEbw5nR6X6xEDEDHzu3B5VAPVAgjHqi3uD2v3gtMKeqEyM8wjeUeqnCbEm7",
  "key25": "79QFNQCHSdrqxUeB4HDz44wSSqogiprRZ5G9P9GNUj9a2vrNSF15E7pgiNk3SKRr6BN6Gq8vgDZEoTkBezNjujT",
  "key26": "3sv6W83pD9UBwPCR6W7HZNY9E3ZHuaKLFXZYF7suCHXDyyrmisRWGdYjUpCUwoc4n7FNN1z535ToXxUPDUfSUwAf",
  "key27": "2c9xBkJNpctybUoe468Qc2a5FTCUGx5rWzyf8jbVgkyPiTjUVxuiWMcnMtZS3S5hKQ8kXkYmz3SRs755iPdNSGhe",
  "key28": "428aSB11Hnv8rMResfZGH1KxNYgPZw9aTYr4dx56mQ1ZbF54yGo1ESV8tLZ6paeNU6AygjaJGC9VJdDzXRHztPDU",
  "key29": "2o6khXkxkRA2Aj6dnZ8gjbSvdGCYCR3K69Dx2hW2ATkfxtajBaN7S1VFoAUbJPch2NPGVarw66XWy4bdfndJfE2E",
  "key30": "4hRSEJ2WCxci8ohdKn1wU7RbpN6MfvJxAkY7p788oip2XYFJ9JHe58qEyvzhvhoYS49m3x6sJjPDoDajYSGczD2G",
  "key31": "Dc1AXW77FjfAnUQgMXSMi5yiDYZM5FN1bk1KGiKXnYRAMYFcZpmE7gUZJjDHahbzSq2B6fh6dDNV1iAoqwTyZ9n",
  "key32": "xC76hRgQjqYViJP1YJM1GYCdMqqCgBzrNFtqZRSdNGEazfWZ1PCt3hLNAopN21borPmD4z83YJv8FsNbKqHJUeE",
  "key33": "5afg67DbQEzQ47JfbNPrtibdjD3xavkvgDeHfoTZxJxjmGPYbQXTr9FHLdeuUiVzCmHtu7nxXdAJHWZ5v1YwqnPA",
  "key34": "3k63q6eSdjrnKjSxMb5h1dyg4hv7xWkfPa5VT42P49JFGuYzM3UvmLEg6z1FL7mPNzviFyPPWhX6VHAeg8qEL6mM",
  "key35": "61hipcsCDes6T9SSc329fC5cKPp185pzXF4E4kYvFR7v76As1haptQ6khkw1bFyybigrRPUzh6zB9KvHgm7GNvqt",
  "key36": "51VLHeg8T8gRsFYdHK4zXfYJVkyfrLgUqkRtNoimooyjiQKXSaU11a5tjzNdFWd88Q8i47pa2PoJwqSriYz1Sbgb",
  "key37": "8QengzM91ezWjEhUB7izCY6nFhEQmz9rZpFCy3D78tXRpvVvsjDWBKp1Nvemc6Bj1VkoN19niPgtoXxvF7jcKEW",
  "key38": "544tx6vLsk2F4N9bTjmcEbxpeUJ9Gu7FU34Pvc94Fyx6wh1McmoZMZuNGW2KW6Gg7Gjvvc5APpQGdvDwvySExn7C",
  "key39": "m6a23oWgdfiPLUT2rufpWY2J3KwHg2ELZSPu3QmXjZNThdJqZfwHLJE5jKNU8MjCmDACUFnxAWDwWunC8Ek1cAw",
  "key40": "5VGUYyFupWRXfMQDPon7QW9S5AcLsc6MfMSD5qoyUm3kwKxjRv3ptSFwfWiQVSnmGzobNiM1NyqqqnWhyE3TPqjM",
  "key41": "44TUoqKATzFZ9Yhtnp4ghtB5kGx2Neqt3PdXHSLjmid6LqZD8eucbe8KgFqPgCgEMmDzzmMqiZBggeH9FgShFUXx",
  "key42": "wVvRpN25D5VDScSsTWBB4h1jr5DfPWuwkr871chn1dwRYd5yDcvTJMZeYpJ5BqqjGWYWPcvu9KpY6d9F3y36M5x",
  "key43": "mjtRSefLjbiwmZPKh46DqhmAXPKqkTmNjtHqJWLZeqoquWt3KNGgpfR2cMrNKR6R3MSyqhGDurfXzkoLaWsXfpn",
  "key44": "4ue2SwboXswjow96nd39HumkQxh9NwkE5rbuis9kbWHyB18DKfyKPgpzNUAp6ERajPZHJ45q8WmfeUN8FHaAM6kB",
  "key45": "3oPiMkohgDjSJTmpdY32Ao4KKjUh9pH22oksoYoDVZNmur5d2M4ghCDyD8R5eSiHhLYwu9d9EXuWUpYJxgfUZLt",
  "key46": "xDHTuf3CdSgeHAN5RuLDAvansnNqroPUKA5HA2wxxMwXG9ggZng26disfwaFsLca7KZDsokkjXqgB43dcBLV8Va",
  "key47": "4Jrb6doibiWi9mFQrQMRBt5JmvTCzXwZuz8cjGsWhGijK3jAtgk63p3tqy7BzYtk5UwJ2c6jE8Lc1W51Pw5QGiG9"
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
