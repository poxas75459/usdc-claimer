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
    "3PP9SdHDurGraMjYmKfSUMAdxEZUV6UK8iBSwrj4PHEqqMtF5WutDRYT5c9Wtfk6QVXQqfdtpTwX8XdDjbTzxhpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tRmggv4ZJCgse6XpY5U2br4gcWxxuugWX81rK9TVx9BTBQ1wHCSHRy9c2iLFyKUD4u6TxxSEGjXX9rVKFBaJL3h",
  "key1": "24iGzsBkBJvsduDLNL9Le6UfjvCgzmCPnf8TwuQRQmELABwLuFXc7cBA2yn8vmQi14QVnjdZpSpeyKKUGnwYacqS",
  "key2": "5nAaAE8McweNQLuhAHaNQYnMQ824cKtRKBgjdEcNYqYF2WCS89tF81rsc6a2o6W8RHJ9PzdxVfVBT8oAdiesSsqY",
  "key3": "4E1pVCcWT3cGTCWyXegAyaZdzs9LNjfFESq43NnDhMRHVdNnUM4rd9iKMn9jHifYQ2XXekteuTmTDPEaP5tc55bn",
  "key4": "34bearLzsRuPkhJzMKCBoNcQ9JTuVaWtZ3ZKxPsux9onTUD9mXhNRyiDDCpqrGiDbyfZpw6NLcaTvMAQVrGHDrRb",
  "key5": "4N3yVCmxXh43RDS4h5TFhTbPUFnoatyHZ23HPFHcj73REyRTxvf2nT6rQK6QeJM2qgfGbZjAWmHDUawWG1S74dre",
  "key6": "3f4nHK9x5pJzQATLkCjRSaih5UcwALm7RVnF5BZDbUFyWrgQbJMVfgHTex5cto6ZrJMMKgoKRdhnovWbQShW3Fz6",
  "key7": "4KgutPJeABpk399sQRpVAjEr58k8XwWdeEYLqwiadKG3zwMg1drnLQtA6syKJxopBhsF2UCq3Pm4METxRPgVjcZo",
  "key8": "3gh1cW3Do6jMpKujrWAwb8LbZmHLVFNdM4af5khB4R684PdvvKtsRmmYdFq1nasoP1m4wbyueWrBWFobEpinmuQX",
  "key9": "5mosrZUd3bKkephRFcDiytZGcVaBoDJymJqXGa76RrM7KvKBSTFj1pEqMjbe1jBdi5rRP7ZaxCBeJsbR9GGE2LHY",
  "key10": "2VcpaV2eGsQ8RR6SkZXqct9yvTfJ5ipXXc4ApmpEX9dNyVfjyJ7yeiN4qt5oELJzQVv1JUG8jAzcGqUPLP4r6T2F",
  "key11": "5t7xUfeFQpeLBCecUyojv6DFgMr2GWe2n59VQ6jWFXTtgKQghaVkCrBLQj3HmAStgXxxhDLZDvECoo6svHhfPLx9",
  "key12": "sxYLZ7mPtEAcdu1qA7o4yfVEbDuSwY1hMRSAq5KcCFJVZmfwe9dc6xTcpWNk1bEzB664pNBeQVbhMDkXD7nwFU1",
  "key13": "3Gek34MQUTN4TSLgNtw2EzSaSUGPu5X6MgwNbWgJU9Ur7ahApJKk4t4zpPg525TQZ3db36TmY5ZVYnYZasDR8SJg",
  "key14": "6PBnANcETPnaKvUNDJ5kDVodv5aX6VL6ZuMsWxGoXx7snXJcrqRxiHjptfbJERgyHe9SKUGa37ks76mZwBr6sDG",
  "key15": "2gUMjeSoCWpjb2mK1kvQQgF6cWxJCMhGZaU5WeEgF1aLzM17kvyDmHgGnvpqDaXXbkkC4yABNNhCJm9ovdbEhVij",
  "key16": "62TW3uFSASEFMKUgxvT72nad6gDTBDdxKGc7tVhFwFcgoUDYjgPtiBCM4ZVJGiiKBGxkk1UDnHCQVxyFxrpaXvXw",
  "key17": "2d1rNBSMbL3S42Y3fQtJtgUxTwiBAKGGMCFBFJbDSkKLin3oWYTs6E5UxKro4Rs8LpNwaAev9rMRSkNDikJZZZ9A",
  "key18": "5A6syWki5uaHuydfh2mBMjjPn1cdTVum3DbDzJ5a6zwyG3VNGJLRnzGLcTJc6iqVtoPhjeAjpaHCivkMXGhVvfHW",
  "key19": "3fcvGf9yELsu8tNoc7ULJW9xW5VA9E7LcEecw8Qo9EoihGFAUafR58yHZfwK4Kejpd6kdquo73cFWDMy66CdNPrN",
  "key20": "4NjCfz11VPWJmVMTtS2ZJbRaU5hZRsU8gsPuH3x84sZDbqqfvdxsB5W6hFu7NbDWnj74KtEsQs3WcZe1LeEEM5Jm",
  "key21": "4hFjjpip2WvZjipuBjeuLsZsh8mc1gtwUi4SpJzh7sLSZqzNbW831372q5Saq4VyyJvT88GWmihXzGkdgG8vme7k",
  "key22": "41uyhe16ftwht3d18ab99wrSfGmGqZJx853288xLt5AYse4o3T9soBNAesz4Ln3MNWK2mX5n7hyA41XCtbLactKm",
  "key23": "qycDWvSU4WQB2ijt4Hw9HeCvF4HRqtWnFYvTNhFZgX52JvNppbWHTkFihQPgBFFhwGmyc5ponDD4WFrJk4VVHaz",
  "key24": "4tTdNzbKuioSdZ7fjXEZkYdJaXbfx12nUjL9AUrtCi2RA9N9jaKNCaVGYyMCXLQRJGUR1HL1uANasvB7vR5KHfco",
  "key25": "4VenGfYrYsx1pSYdFH8wMsZjuLbcX8eK4ehgY59SJDBer7jNGDiSRJp28gAFRfsKKkDVDHf4o9e2PXNYFPCJ9M77",
  "key26": "3Pv7gfVbv2fy28f9TGNBx4xjtsy6mLZH88QVXpmDyTwnVJPmana7MXw8NWaz7sav6Fg6d8buthRmm9KtrLkavjc2",
  "key27": "3ii8KC7VpmAdmRzSwDfgwSwcDTkFq1Rey3gzq4HhfeGrmrCBmhWSZZZUZskNg3bHKXUVgRNFVzN8yFptMRBFVR2r",
  "key28": "4W3NMeBVsp8oH3JdrgsXE9jhnqWTqPheVb3CjXvrSdkiZYAG3Y3uaSUWeMksgQpUApRzfwWVxcxzi79K8nroNkAv",
  "key29": "29B7pSwaDvwZ96CwNh73qt5pcCHHD57YK6njYf7izqJXoBXJnZtKBwEmDoz1gzpdeM953CihmSdJwgb8NmAESCAU",
  "key30": "keYTt1pHZQmsKfnRehr1LoDPm9PqgG6J1qv45SrdDKW2hQ7zdE19WMjHyxww4jPYuDFsSrfuRf4sjjtSfy7bJrS",
  "key31": "2XYyG5RWXoJ3pGSZ6Z8YeEmtupSK9rTgUZDKsguW8kydDntdye6pqjA1zuZhXjoPTy2zwcTt6U3RqcjPFrkmPdCH",
  "key32": "3LKiGAiMimzHpdFTk1aKR8EvVyzLaMBMaPEjz7Mz8rjkPPETcGLxEiBdupbVmwzzssGGnU58sDEoVZyWziBb3AkH",
  "key33": "4dBgcWJisrFLQeSYa5Mh6WkmmBS3cabQtfD9SpBJxTsrZ79PJd2UVwhidfRN5J68FiTM7a64MGwZkAYSPpxCdcJK",
  "key34": "5aQdVfbUrexDvM1mSrBghzahcRLHbGBMBo7d8fBDu6HBR58VuFR8EmykPF6jGMX1QMNWfJyK3o7hqsHvJiA65pgY",
  "key35": "3pFWiC6BSmGwe5mDZktkefCtYFxTa8VRdmbifY29gzp8QBQVzeeR1aNU9T627fgYZQxesqfU1QdxgY4MkFgeWiLz",
  "key36": "3aXcuA49zwEzaeYjSp1vMCgx7Uast1h5xbLwVvE9ngq3AFFbGd17AZxv3Jak5rGDd2aqr9BMLj9GJMf2kg88K57z",
  "key37": "5aoM12JvRK5ZYChwarkhPikZEydpkpufBGHbHki77DtW32Vz7XyzJPLRoqentCaoodMQr5mBvM7HKDPWEHHGXRiC",
  "key38": "2vGPCy9u7hzbUPwDrds2bnY8taCYBX2HJPiw6zKFpUU1ZhdqggP7kdJFQpqYHshaWH9A3mmibh4UmRuS2hALwFWA",
  "key39": "BDrk4ViEoUp2g3FwDwiLdi7WxEqLJPGdg61YKMrJfWw7hLPEeW9SHAwarbhPErdwKcKD1JY6AByXMqxiw7xfB7i",
  "key40": "5rBwHHEhK2ArUokWBAmL2Crs2ZcrZjGXxytxfFuY3eFNBQq1uXonQr6XGyTpS2dLLDExvh7CZWzGc1t7UQuayNAb"
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
