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
    "zewo8frWaS7YJKjWY5YTR77kdQ2Z1MKXGtG3tQdWJbaejFxKpSxumU61pYXx3h3XFU5GE1eL6rLzJbEN3WFovCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZdPy62HoA8qcRkwb4m1DfAprwViw3PiUK6Y4pY3oHhUtakQZ3mrTTYgECzKU9goRntnvcpjV9JU7kn83NVGNhc",
  "key1": "5VEuL4QgK8xpGUKjoV2mg8bC8Gk97ikZ7ZQSQZEMHeeQphpDYk5FfV74gEsJgXTVQpMoegxdfkY23jw7oXd3ktd9",
  "key2": "38wGDiqJCgjMqJBeZFctzuhGpApRpqGwMhKPQNGt8yEdbZnEQPSKHYWf6mc2AuaxMG9bDxN5Cwqre2tEd2PLMn3e",
  "key3": "2q4kDRTdaT66jgouibLnuNBR48WYrSp37AuCy9m9gCcaGcxCei7STwfg54seFafUd55oQssaSGRK55wVu5v7Gf78",
  "key4": "4jR535LpvL61y4FqE7VWvZNRDV3DdRS5Qjc2CVofmmvdiPTeHqgshPmntMBGivZw11nKKGYSm2c5cbiXGhfamVoe",
  "key5": "3gJmNv4pouHsoNuNmDPCT1pXwgpQ9YEeA6T85RTAZA5zgsnvcE9tYWMtrfvqzesE8sukKY6239fnhGy6UvaeRBf7",
  "key6": "2QUANZBfKBcuZ8pSQVkxxWTm1eDHjZWHH2Lbcx3TaTqYrwv7BGgmsJe9mEtiVs1tU6GjkD1eJxs53uG9PkdwqbT4",
  "key7": "2hNmTieQyX2jqwfM6YFyr9jquwkZbE5oSyaTv44eSxV96x8v2Xmh7KGmu2jgHAw5H6waawFngSteZqAdDCDmhVVY",
  "key8": "2yRJ5Ud7eFeXyjPMYY6giJKHTudfNCqwFyt7U8LTvSagfpLKqjpGgSifTEoVPxUbsPxpNKy5gQBaaYvVcDqrD7sV",
  "key9": "41QKpLmeRKwctFcNPmfvU1hzx3gtBSVwjoJFuK53rPSBBevuVLy8cZJbAdnoodQp43qTvGvmxLsqHMCaDeey5NgS",
  "key10": "25YiDWmUBXV2bLyTdakZV6rYNzohbbERuTA59xFai6Jcsoi9C1uFsrNRQVyoNZwMTtNpinPbdgJDRYNTdNr8UoCZ",
  "key11": "3YWUo4E6hx6Eq6xNFZnVtFq4YCcm1S4GYZvzcmFNvht6nUYynEg7xAykXUvmxa8h85mfTfW3keje1i1rG1V5cpqc",
  "key12": "5rrFB1NFvXWFF5UmSHbqgAzFf8GpdXtFYioKuBcU686juA5stMiPZMiRcKAkaYezGJC7pKFyiUHuSuoJ6Peay3y2",
  "key13": "2BzDCjZ7mGn8XCn2zu9aViTvnokiaKvKAXNQBvcYpt5jxbWBS4ZnQkGEqesosv7WyR9Z6t523zoiEEdBEwuZ1TkG",
  "key14": "QCbiCWdPAR7i5QYDStvAN79N8ojMTh893a83cCKPHMfY6nVSyNwwUmKzKHo2aFcYqLeuEijmdDnmo922mviSr9m",
  "key15": "5cYen7SA78RSSTP4z1qmfghwHr9YViHT3CPwGjNwCEbneKSLmZX5pPMpCHidsBwt2fuWWDBd6E2Md8QVqbuji5KF",
  "key16": "2bv9cPKMwBPKYhfB2sy8DzyLw2jJ9Z2tWkL7LxGQvyqx8xsgsniJmEFsLAoCo2YtiJGXDGw48diJbWW9jvzUddbm",
  "key17": "4RxTrNTvMJuPwYy7hpBqPLLWN7PJMv3GstQp33nbDDa94T55eYEoxX6XmWoF4yGFGEzb3PCXcdVYSTgGXJvrjKM3",
  "key18": "2mwZ45h23PvVbhjC1nBwvAxhQTeowzQzGXN7x6dmmZRzE5f2g5FwN6HKePTRucRcnfCg1UpZj42ax7CZs9c61Mym",
  "key19": "xegdt4KMp1Coaak1c56tgUEs4GJQKoo5gw183AYKL3BVqt32fKVabYxVMZyJC9VbJ7rcMtT9cvHiAwBcrbe6X4v",
  "key20": "5HqGmEZM4wy93TrtURDcZe6HR4hPDv2zueFZP1z6vCxwXs8CkbHGb4sBcGWhxRCkBToTjFHa63YCUY1vXC9cxpox",
  "key21": "38CPXe6KJZHyhrtjQ47TrG7XD9CraFW2rj56PYwGLxrZdxUmPN5HUPsfJ9yDbykHFFTkCt1qiphA9y6o9nsLi5UK",
  "key22": "3UUY13GdukGDqLWNCijuWsGNRtg85U3nY1EHyC64rkz9ZR614JeK1dSD4JtM9FWwrXWj5K4xRoXpXswqZp92AQzz",
  "key23": "5sWzBS8ZvQ5rBzy22x1GRyzTFvK63Uy8JrTmDL5j6VKPqLG6DoH8fYuHmWbajxs1WBHBnLWtgaVSZt2aMHsiqLFj",
  "key24": "33d6CbJz9PXdEUJigpFy9bE6xXoajK4d7aWzUsHMqsfwNwg6FhahcFakkTWAFx1MVbLDbusW4o59hvtHGqME6BBe",
  "key25": "3wMq9fUtEvip9ZN1a8Guwh1cX3Eu7DrxgDccjnKvLPGQ1e8DdTNhtya8aSRcX6PVtUC5vRcyDcAvdE1PCzvw7Prs",
  "key26": "5Gdx97Hnd8NrQWYyjXx8cqDV7SbJMqEhzb5bZnLsgG71YL3TYgBeqkMTK3MiLbgTZKat3XE2EeMMXKpKeJkRbFjA",
  "key27": "4MwTmM2W5kjwkdGPYuBy4coEvtbL61KdSb9Mv7nX54vvx8guTzzMsJBT3ckzsnp8W2x6UV7wZyyUCYYQgN8ghbNs",
  "key28": "4gHfYocpy4horqJhCPFLtKAEECBW8RDxv9ixTe7xx6HQEEyuf63myxksvXUo6EVC2KY9jdKmAPazXdN3reVUcGqx",
  "key29": "FdqCeKqSR9F8Ya7m2NoLrrFeKvhYRmgqBsbDn5KP6xe8bNzybDPKU7SneBzJhFyWuwUbBx7XcEnFZ9dsPCUQFAh",
  "key30": "33ahNjwJaQdCmPRQW2ffWxuXKKiygYn6jxf9PeLbYfdT5GWsfinXsG69WevE3DrvG7Dd3x2dbekvVKJQe6JvN8GA",
  "key31": "4chNVeX46Qc2Jw2LA7FwWmtW6V8ufcAMAM4gcmqKfS2sDX1Ei9jnDmihXK1xeqTcyNPq4riQgsnV5MMj2P3CpK7E",
  "key32": "5BzK8FnLgWQ9c9JeRWhExffF9o48G8fhCZDzPcPFc3tJqe4fN1RhWXM8Qcb5FwrXT1umLNqvEgDhKv8TEqTUM4kC",
  "key33": "uyS45D48AgT4cdu4qZgBo18hLPtj9Cq3HXJeGdAghospsxXTrnBvjar51uULVrcv8c2K8ooLnpvq8fPknx2Wmmr",
  "key34": "TxHdsbviVasozZv9b5MK6UDyMFbqB7UNgcG7kqDUmodmLmuaUw51f9aaybg939Q7PPAX3tJ2MvsT1MXenAf6ux1",
  "key35": "4jTZ1QMV5hnHDJD2xYgvoerMhon8ACz9TdCMbsJ86vXauebrb5tbzkPSBmozLfEgD8fRWDSVivTXuV2CZExwAMZJ",
  "key36": "7JZFAKVXdsXNxkDPB1Sx7NThm5TctVra3yWV8v4f8tfzxfGuzsaC1C9X4iY6tDoGby33xmNQeZK7vwYuvTTDQh8",
  "key37": "4D5u5JvzUpntcsXXU7Bi483ru8oXEFZkmAQkMcKHSNPnLsF98Jjb6y8s1qJq8VpbKwVLnATnogdGgveRNms7jMCt",
  "key38": "43NC5v3AG1Hx6FBgX6cNM4sdgfTTjdEtXCeva56hpvhMZUnmU2VxxPMSYysF8SvSUko2Ta9hJ6iMGY6eqCtaKDmF"
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
