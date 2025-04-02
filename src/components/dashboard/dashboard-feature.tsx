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
    "koeP5zxLRrCKDPTp32GgmHG2VXdC7KRj7ES9BcrZ6j5SJgPPqLHd4WMrNWDzkmvLvP4QgjW71QCbcKnEXbhmzeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7XghHbAFY8CiRaiFHV6TMPJ6hVhVaE2VWmpsL7MgJEZUJ1PPW2xMNjidBSpEWEweQ13eSK1EynJdQpFvndCEjF",
  "key1": "5BDXUk794WeyEdruGWmEFg2seQcCifFXdPByGWAv65RjFhwXLSwFG8KLDuKvigtA2XontdYTWE9NpMF9zRGMDzKw",
  "key2": "4bBBKJiBPqJvfgKG289UT95W9E4RPFffUsTQ5ee9C7FdgiwedDBPzuZM8afq5LKf8iywkUyiyWDmbwrKXtBGWpw3",
  "key3": "piq4pgJJwpDqnNGPfaeU79PRYUNwYm2e3UMD3VLZrgTyoo2Ds4EL48TBNB3vgnzWgQzdFoVjPf2zfbh3Si6wmF4",
  "key4": "cYFaQeGFkb4XecWb5Piquodap2ZSGVr5xNtk9gVs4BBdSFKfVuFiC7L4KZ6tSTaCCkWUn1ZR4oDHwmG9WWzGxw1",
  "key5": "3YVXMaWK3UonDBMXFusiMGF4Bm2nzekUKD5PjkDdnd8JeSpu9Dv5EwVYvP988BdpKA9MB4o2ECe8jYYPRrmFGWfC",
  "key6": "2xCEdYiLaAseQVXB3YRDM518wjeq1e7uG16uiFMN2uTVuMFArLxxyEZSNte98nNSo8gtnFWsDvcApbWoor17jK4J",
  "key7": "ExecPgY9tRVE6skLTch4X7rWgbe3opJpvCStznyv6te8DqFrNUd4YbETUqAK7a1Xzjbkkrsbjnbwes6voMxhCEY",
  "key8": "BaC2VfN2xV2BAyvR62QQ319AvTVmTQQiA4EWKZq17nTUwy7QJmcpbBAznqNaU66cLMyuP2ffMNEARAgyX8qTwkF",
  "key9": "62wwt6bABULQYCwosbsRWsPFS33s797TLoCbxA7yAWP9MuBnJB5odkse5hgAP7iWcbNnxNKAmrkfhQogu2oT4qPX",
  "key10": "3TP8UVZowkeeG2SzKpfn4gK98sQ116vwZHbxen1EEhKwWsw7HasXEJc3gDrwC6hYyjg1NT4dXvdfCQ9RDRwci4gD",
  "key11": "47827sBdtyPpsPKBwTzjfM8tWjkc7EgEJL5t7NCEaah3ACP7ej8MCNVAHPJang1xKVAJTSUYUz19woexbBLFAeeq",
  "key12": "28awgHgoVSMdaBC3BdEV8GpQznPSVCEhFhmsrMaFkh7q9j8jiy6Z4K3ZYYZpcoUTMXQRhPdJbnYYmLbda2Tfkm1y",
  "key13": "4ockta1doGv1NCGUrkmTCUkHMgEFDNdVtbo2vZJDNHCth9PQJnFi57nXHLM9pjdig1kA4K8QoeHKzm37EkUey6DK",
  "key14": "2MD2hyNvxyYtsQyByXbPxNYfYsUa14e1QRcjqwZn44YZFs5VoLntXD4jFPZr9v4UAr87U3es2esSzGCRAeysH2Z1",
  "key15": "2ziCEE3sfMSr9vN4WaHwVUM1MNN1tYVK3D33Z27kDNG8bCsX2u6D79SytQ9MSNqPqarfjsfAqVyYxaorfGHS4ntM",
  "key16": "2fC4ZqVsFffGqRNpR5GcK8f3MTmcUBt6BL495pCjeGdE4Meq6WAhgAvca5fkVmwxrEHDXR1QF4QbqcyRw1CrbVjM",
  "key17": "nqzpKGQeh2UDqfxxbvLw8D6SGyL3YMSmDrHX3dJtkguP4msCpvYqCvwc4ovWmFmcDH5qT1eZnBauyL4XN2rJsv5",
  "key18": "2dRkFXBSh8Y9Z4jAAq3CLMZbSmTZFntq8VaDQE7SRH62uhAY7z69zjN9UGL98ng5JY8YKyD5s51JPVhkmXur93JJ",
  "key19": "5Zci7GWgCvtHzcVWcVFz7gzqr3E3Bdn6U1eS8V5KhV1foVhLCWsNKR1qyucRc6hv7vFu9y3pL4hcWtm89uDouyjK",
  "key20": "4qpyAFY4GcR7EJKPqTWYDpNhYYb2vk7P6nSRQoVQZVQnGq89548j7pDNJqpUzXbGA7j2oBgj7httNwEuNQG2ib8C",
  "key21": "34hHLvuB7xhTDDdq4fnZgJgW3u2A1PLPPWxsVxAKxv5Gek3Rfi1AAjvo3827oa9dEoUwssq91xRfnfQfi7VNkfSJ",
  "key22": "G3BxecYjvzDf57nkKJJetiBiXJ1DVc1xFR7WQavWyqWWuc6YFipAptUngR1mCYts4TzGUmLvFMi8QqjPuLGjVSb",
  "key23": "57CwfbvJzyB343rTD1bcGNQaWdTojJ39PefFfeCkMMMk6jNksPpk8BXt3Bu9UFwkZPmLHAFsbJnBHpd7KdZ4Fh4V",
  "key24": "4cS2ps5b2mbfXM46KvuU6EVswy61HkXsmtugRxotjLWsm4cCPGkQcX3d25FFSthKLtEvUNhq99FoKkLtLYjgnuTJ",
  "key25": "dVnFVX92JijT7gQA6mJmqitDDeZwsG3wnHryJevkQNRzjgHD1hLNVRGzD1Akk2Y59RCxjcv56vdsGPdvBoVuVek",
  "key26": "65BWpvXerdNv7dHK3Z6hF2VYMA4vN1DZx8vvjhwPqNaGcuGs34dEg4qzDUB96KtGXhc55va3g381JPSk8EZBQfUb",
  "key27": "i8U3gi5psHdcmajVjv5Dr2MXBaYULENz2PjYyao31pPABQrpsrXWUJKaU2P4Em8t4yvCL97e8m4Y4rJsNThDTP3",
  "key28": "jaZf2ukQsnPyJE3qboeFRCisbDFSceMw6ZKskGHTmkQDSLrPqTofr5uXPFfVMcA2wsttaVeEd1Wynny5G8koMMQ",
  "key29": "txt3s3GS74FWpxV5w2zTbwEBGChKdbcjwaiBsUv5mDNwcXaiQVrofcpvVELth8yRnLoVYANMo7TZEy7HtuVHow7",
  "key30": "2NqFAZKF1D3W5khMu6TtyVZvyEy9eYXvqzkZCwRXYnbVQeisA7y9T7G8essv6u16CAmbG1fB9JmvhA64UvmooJBD",
  "key31": "259SPHrb3uZJtPXZnDHJ59LJSHmdt9WEBerzf55daR3qmPCw694SPXmeprLoj6izwuZEkpjPswTpfTwJuFjgcizq",
  "key32": "GqSEJtaEN92ivav3X5izS6yavgV6HDyN4eQ4QTCdeBkwcGrYipNVekWbNJesBYkr5zEe2UJncwDjSDZj85RxsGp",
  "key33": "4F6cZfyoKufgB36VDGhmYsKK74mRU1RtkQjR9xurs24yC6uwrscjws2KajFikQo6VVRzWNJf2HxTie6PYYn65msi",
  "key34": "23jYRBnbutAwcdcRpDtNZVfwnSdH1VxbQfc6Usqh4wWUFBDajwbtnktTx9q9BNbEmZAGvp1U7wWWLW8DLcu4sMG6",
  "key35": "4yUuS2LuNDyictJVyEKWz4jCgkG2udbCipPAMzE59rccHJ26Ph1WxsWU5tn14xK1zNUQ7KjqSkdvPRZW3VJzE2hE",
  "key36": "3jpQENGKkPtTpZCa3CVQEqJkPStUAKoPaX6zXsEoKWbJn34W8W8dk2N6mfFnVLu54avdkZh8hrWPzx3JRSZzJWUb",
  "key37": "5tfWDwyW6rr5wPmHDHyNfwTFBNjKMsBXgNrzqWeHK8Fz8aGD8eqHRvuMVhTyzYCX3rHY177Wv9RkwgiCCwNBbxtY"
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
