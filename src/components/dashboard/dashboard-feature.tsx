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
    "2nqMnEPufkozmV4oFjny4eKnA73zwNmafLR7jycxTK8KNr5PmTEbvCtnM1ai9JCKBQwgTvJwTNKBzYBZLgVawHKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkBkJ8Lg1XXKsdpSbS9ckmgaAyumgPSAMpekcAZ52QoEDZM4TtiKseHr6KGANHvXus1VTDLG6uonGAf8vuJrhYF",
  "key1": "5i4FV7aJWF5SmckSQhc74YtsvhJBTgUjC8YQXo95QF6oSiSzyV2HzZfz2kBuqqqqHfm7fyJzNQoYWztg93qcFiMB",
  "key2": "4X3yQhPMrwT78Tmr8wLNSCDm9Du59c3YSvFquMGUdLQvkSJ4kqPBETB6ZZL7TG5wNVAfZV7oKvWCq8Z7FdeRUVb3",
  "key3": "45e6SRjrgtw12Nrrg7NvdDaxVv9YkfBpFjHEsCseRey5vuNF7svJBnQuxseFHk1gwtC6eJHrLd2HFhmMMjCXNSV",
  "key4": "GA5kdDyPBhyp79yFvirdfeDSdxKz1op97AwAb4XQatxexLWzZB2NfwHgz8K5mEeWLFHYn1Cekj8iGGSSHuQKkVt",
  "key5": "AGAcPTNaWxS7znCAwHpZgd5AK5wWEJMDemqVedzCUAnCvTAGw5oeVThUvTxcTfexeDx4yBpagcxNjqio5PYGvcF",
  "key6": "3JdQ5rbdV3UToVAwnrbxyBdVtdawpqH8aPuNGutLoyZFKn7uKH77NvHcGRH3P9rv8VZDdbvS8S3JteMX1M6e2twq",
  "key7": "3UQwCnBUzSdh5rZXhdgF1Q8TBM4uVuhW5sVqcg7L9F8yn54ro96fXj7YcX5m2kWrGgzE6extbEPxKrbxy6GUgsd",
  "key8": "512JhTHMqnBDJ5XA3iKaVUJNcM9z9A4Yc3Y6cWN3jXmHuPcrsditxs1Mev6LLZipev1VY5Y3BaNt1FxtFGVamYAH",
  "key9": "39UL5PCuGWVEgPhGPuvfbdbKd1dCjKYTXRvaLumPWyWhQ4nm6vQRHmdMBJxRyJFs17JKduAPJNCFvNdLG4XhQifj",
  "key10": "5XkmD74QTnJAKTa5G7o65vxnCDt7mj9t5NFevAT8cHtKBikXYRuTU5xwn6YRkBZYVWKCnigAuBCj8PCDW3mHVD5T",
  "key11": "3enqPQXprtbMqDbzXPc9cLS3wRdCWv2xEM8USWeXM2rKGNGhhV883imEz7cCr2DWtRSW3U71XhdSh3vFgLNW7tbs",
  "key12": "h8xBMnzcB87bz8G3nwZKXhe1kdaebMBTxNoKAAfWHqxGnmDSkVCz3FoqrhMtujooZ1Yto2fJzkNNyhbcoatwuaE",
  "key13": "dPEK3r4ZKVpkwHKVmL1Nhq2boer7Un5WtN4Qrh5tydTumtRyzQz6uJ27Wtypj9RH4UXMPT16trMk96dNyGa36pm",
  "key14": "374iEZZa9h5UpAa9L7x9QHV6M9GMKGX5MFjEGas2V7Vr7NxhZT7f5camPMeH9tqK5s9TcwphE9QYZ5HufSENtsrB",
  "key15": "4hgPgvBvbmTgZztUNYsMz7ZXkV41vykdY6FZUhxovBn5xbxpP9dKzpJBBfTpsU8d1Hbarg8KdFNptbXw3zM9aZam",
  "key16": "5vS1khMSzAJHS6DZHbkiTT5LWJLn8JqKHuEfaCJLsE5jDmChUskV7xKaf3cb6Z6cHeFh8J8SNXjMkvsWmdJACBJF",
  "key17": "3mzjffp51M9cfiAUXtjcg93ux1XzcA3Zxui1s6wNKs42kfuxQ7ACGhwdvS7BAcgHzHomp4k13AsC9hRfHSVV87SG",
  "key18": "3DTzE1Hbu5qLjCbk7ENCQD23Nn99wHcpTKKHKZqTMYNoWk3chNEKo3Xq13GcDUnWQDrFUXjZHjN6XvVQe9nJ14gU",
  "key19": "64GSN4d7nZNHXyDMsUda7GH8d7gHubQPKf3eCdPyaXzr9oTkpbTzPVrCwZf3D2akJvgHStd1wdgRWmn9FcDzoFpL",
  "key20": "6uqskkpHxrsQjMBjLPqqyKdTufbnMShaCFxNreH8sEa1JYYR4TWMFR1BPbTk9S3qrRtgPvMcVkGjGnBuUfDgr7R",
  "key21": "3dSjFvFZTCRqDpztfY5ivaCnge3gpdnWU5YmFTC6ngqv1tBXmCTyPUohi8wLuw6d7jZPJoPQeSzSTQAq26h164qP",
  "key22": "3J4zc5NXHJNGYESPxecXYQ1uKGQtRcMRLbkZx1BJtnZyeqEaWxB24q2FdxQi4bQM5NdmSLVGTdH8kmQMbNNALY25",
  "key23": "2cz9wkqzUbKx3SSEdev9TnYCWpuALCVAvXAbV4xRe2iaRkn5Kcbj5LrMfXcmgXBwMdfQYoVYctfZmWhvnK9e2CqD",
  "key24": "2vtXfQ2H4hGbrQgNuA3Tawqx2ar9sCoj6dauf8ZTdRFUZvGcSYxp8RCysoTuPhUf3w9Sj2nLhrzqDt1KHmRDDMc9",
  "key25": "5pT1Xpm4h9y9sKwkyBrxGQbsUtJnQecjgzrp78A4D4E37txaoNKHjagE1VGs8CKXjLZcvzoPLHh157E7T1hpb3Fu",
  "key26": "2MxKMSZGnKqqvS8vXeN7iCxTzMT4NUKu9z1bztwNgQ6CrBFbwewCrAPmBKXK3tsDzqBa5Ekga2trP9QNegrm6ANG",
  "key27": "5iKK1h28n5DwmV3gGs2Z6jvS97amVYehupqijbhVRzWys4CuR9tFggGjNKZJXWFpL7zcS4ZoefEkcvtZkA6cxGPx",
  "key28": "4dm7mEmStXApzDHo79rnzPKEJr3maaGaMxhatzZ9bJQiqD6zjWtEG8axUQGZNCFT8Y8CCKCwvephjSDz6BMW75Z8",
  "key29": "34x8Vd6tCaGX5zs6HtZFcvND3epV7hVijR2zasWU913YLrDqazSvDVYLK9UHA2PpvXyGAEPjYeQ2VLArHVFjfhax",
  "key30": "exeTzrosgPPBnXNExSSbmTAnjqNU8XBLT1aZpLwcKY4D2eq2y2bYzs65DU4sbvPb5FqcyexTkBmcF9VzW8HqUx5",
  "key31": "nENtzPBRycQ7DxspsL6WcKeyZyN3mtJHLLAu8gaYTQp5abUM7tQBCUKe82NXT3WWfwLxUhFkPLeyiQGr21F5DvC",
  "key32": "2uL3KRoZc5tnzzT3iwJg9zj8iwVcGVf6S1gg6vV58EfXJtcy4AqTcDSdZHz2VRHCkLMov3mJtPL1ik1kqWmELFhA",
  "key33": "5DrLMxLUDbVonR75Nqi1wKanbevFhtk6jRtYDGL8ZMSgnknjiijBjL4LpWKegwSRR6GXm8dCL62o3kuocWmA9VKf",
  "key34": "3M16h49FpkLfBBxZLxHumiGR9YMcQgSxhe2ZDFatAMaEMTGSDcmwrx1D5CH2ognLX9hAYsRsX5pU4hD6jL4puzJK",
  "key35": "8AWwj8A2RDqzAztxtYNWVnQEF9RVBQRWEFs6LRw3L1sbA5aajDZbeoGafs4wYbv6d3rdCppWT5KYtoDYJBCNrL3",
  "key36": "4hT2rEYceXgWb1Qtc5wEtTCXiTn5VKUpV6i7CsXBM1yY8RVxryYU8E1vNiQBFFv4YgGJoSF4C8tocf891qxpkcvE",
  "key37": "4cLTf3J8yFsk76EJ8T5utLQ589JekVzUL72FrgUDbKj8gN4DwW9RTqFT7zXu1dmZHjixe3LJfSDVmFS5Uk9giqdo",
  "key38": "5QrXSZ1SMdexYCuwYvULUtKhYkDNkfFCmFfAJPR7VMPgQdrkMk3kAdcQKWj8kQbwjLFwFMFcH2ebZjCFUqa4eGmR",
  "key39": "5RAB3qccMza2AGYdu2nLmWVMuSRTtfLcbHNXGQB19W2oi5Sig1ERJytB5ah4SKTzWuY8QC1xjBWnafHXDGwqmZk5",
  "key40": "3sTwnii5FwKmVwRQDAPCqaACfjAqzJXLeLyYJMitoUi9pUbXCQfTNBMVX7sbYaL8jbJ5an4vqoyfC5HvWiSYsrn6",
  "key41": "9Dk2x1mLmAPkmhrcAa4H7ayQ4m7Y5eHy3r57WEafDt3xHXY2RrWQ5fn7UCVkbBLCg4LxLt1oF3RFK6Ho8pn4TU5"
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
