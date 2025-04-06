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
    "i2xF1PRUFF3cuwhu1r5cUEmZWTBqc3VPwXNXv4eaYH7eVEQgVzbgsdyKVKguj34UphxFLq66RR5gU3kTczGE9Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ND6ZAsCsQe1BZKqkQozAoGZQEkxZp4zV7Whix7iB5JrkqoQdxXaryhbMp2hbEoJyR2SHePESBcFWVXCb4bVge1G",
  "key1": "2xzBQminrDDENX8AkDsRucq5KfDe3aixPWRSLX9XFq7qF9PuBnRYGWDAPE7WXJ7rUpvuRzX7LAL9j1iTVL3zyyhF",
  "key2": "2RPLRDSjMbcLzpYTes1wtQLt26vhwyVYbGeuNy4b6x9nSyooKqSHGMb1Djy14MDNrZoq4Hs1PGmT1Q3JGmfFvvrW",
  "key3": "tyWniF5ySm9DPMmUk39Fu9BwBJLfWKwtAxASYcPunLsSXwtt1xdKWLnZh6TW8uSDJKU3zPRNirRhcWWTrwbEVLB",
  "key4": "3uMD9fERKY5spnxebbhhFXrjzZBXBNpgwoe7Q9KuVhnkqEfsB1tpuDfJUfforpjpCBu64QKYQ56FRmnZQN1HnooS",
  "key5": "4yWEfPZoQB1AcxaQL3RzTmfXqdMuGiUegU9E23pJXLsYvRcHc6d3uqBKriGqmwAD52SAhfeGKyFDeXcRKWFpKTHT",
  "key6": "3vv45jrTignPspmwARYkHojVNXZ38URLTSizCVSSbFQQbEg1FVMcx9BB9d2cstYBgmFMJre6E1mU4m3aTcqU5z5B",
  "key7": "yQxMHB76AdPwAj4BkP8wEzNBZ4vNr5FzyGSxRSr3BtM82zgqsXEAnRzbAK5fpTcPJWAUdxdmSnu8XXwAm5CqHCJ",
  "key8": "2qDT16hX8yetGcGMFQbfs6v6ewpWhiZSegLETvSrGXk5TkACHev3gRUt1eakVD284vk8CX95EWnPNit3oei2zLjc",
  "key9": "RR2UyyudK3bPS2L2xX31bGcZZBFhRCK5pRzBRWChy35pfYhprkT95J6SMrJLgozkdsUA4WQSmQZjjuQLzrpc8Tf",
  "key10": "2ENW44fgYXh8888QwpdnpLPX4j6UiBjVZy2EEix8jhtsqxrroNcGoJRX62VqdriqYr2Fna9nbG3P6CDruLsJQELP",
  "key11": "65brFK7GzFZTebCHsihJV9xzowYDQwNuEe2ybaKuNw7KgHoragPQLBsQ7quUCo6ymkzqaoS85CchUhQ4aQvD8nsg",
  "key12": "55SNy4EzwuhGMpFSizExBKmwmyABRYDcSkmQqskyo3dyvLr4GXPF32D46Mi1G4weS5ywNkWhZVYUDTAp6SjcY3pk",
  "key13": "4wopvx2obcFdS3sjptQUY74dGpmmZzyjFwnWysrY2mjgLbnpDeneAK2gLFEqssgu4rMrkkvpT6YrZr6ADTP8fzuV",
  "key14": "4m5k7jpqKo9iGvx2Mra1iA6mpV7HPFF7CXiF4rXi1ZyVcx39v4EUFeHoKS2DosjEju2r3DNp3pYXjpyARKkqU54v",
  "key15": "2vMFgRhn3LvTkK4EzR1rBKc9PbwfkXhDkoiZwPRQRaY1eKjyMMqBD9CpkqNQ1o8u8j1JTvrYcFpPhF7Jw8GKBcEh",
  "key16": "2Uve4oKDaFuiU6fKP8ktyGxmX3RPEWwiZmcpNVCWWeraKcqfDK81noJzGrFwjrJzemTtrimMkA1ayQKaSEwK6Gg2",
  "key17": "MdT7a1DseD4GJEgkDNaWg8bmp7LrLkZHEJ4nTMJwoDtTAGwTEydBMhcdBEawLJH4cTcxf4BpyFHmfd71y6wpmau",
  "key18": "3GZxgMdywLneHwk9kEWeH1xf8ixK6qxPPP84D5DRmYyujNDDaXXsagAdPN25iTp2ULFFpQW4H4QdRJ9hqMvrLv1M",
  "key19": "3BTt1RhsnVaFrrPic5XeUk2dZ1ozP1VdyM4hzjjbNZ5cNXaeWgBkLSJ1Z9YEivp32cigkRQGm4KSxLnnAqJqUFqY",
  "key20": "4mkxxJk6x4Sqp9pjyBVPUvPqRVsa6Y4fa8EKwor3Awuzo5K529DzzWy7csvQ2JhVFNzRHJpNhVjtSgyR5iuv9Jji",
  "key21": "29So13Z8kCYpzjePJvnUXfcdBmGhP4VucVpwAzsH7MW71XA1FiH2wgyGSvdzATC39nBUGjsocGePQYY6xEmB3qES",
  "key22": "5AeU4uqjVHEBJot2UbKT1xEfQEmbDWT8wxM4oTWZYbg8sqCTbVcM8xLunHcr7KNFfnbVDKbitxLPHG81XKpcqG54",
  "key23": "e4cEYLnaYgQBrLdRbBoaMZRYtPnfB6UsrS8tzskmN2ojaSXxUSxsypsnDPjqcnNsyNZCjVfo36ACaCjfStqs9YF",
  "key24": "2crBXYNvswKc11T1ypEXECoSQSrxq6HdoFbrfr8EtBJwADY6LXoESsnzarxfnDA4WG2YadGupxUpidVqr3R31EFx",
  "key25": "3M87UCEC2EtCwkHKUHrUs9wcv6yVxKJp78AyQNyx2gxkhYnmFtgiDEJt6Lze1DoNu7EcsxpJ9QxrBYTk1jweqLSt",
  "key26": "28jdX8LMcPpeHV2sVsJBoti2Z3SMj5wgbKXv29JxCusFLjdsSc5RSRoBGKen3JPDZhoBttU4kPvj99wXaZrfHbtC",
  "key27": "4QCyPBQ5E62pakbpMqRwLYRhpsAFtAqJ1UVWqBUrigf3FFRFSSkxrUtSvKEjdLsfRvhuMj8yYFJ3n2ApNgNa6hxP",
  "key28": "5UyjaQjGK12UM6fnyWdjXfXrT1W8SkYHRBPkAFceLffQQrLHaKRbkqCTBoSckvuYAMZnc959ZQFcwFAKaJWzYEJp",
  "key29": "dzRNVTLwrAKmoaLQToVxFoQ3t17SgkWqZbeCgqV5161hbhDFuxmxVVuyWwLyHTZeiAcHyrRqfT2aQcQKUSyF3mA",
  "key30": "VjoNcFRc5Szot7Nx9A1s4CpDLg8faQQZzpweW1r5pfk5cPS6iXmhz8D3LcKpgaVyRLPm6KrUmjCB2T2bBG3TGm3",
  "key31": "66ecGrLdFhmAsRTVH599DBLHxqJjaevAZm1dicfW3i5rUCHGtCREFFmyKittJ1Mv5KEcAAsD6HcWfprck5i9dZb",
  "key32": "ypdw3MuNLAdGSmb5vdR6jCS6rpKe8Ljonmn1ZkF83c9aGjF7iJUq15oYY5MK1BqgiLKkFD6ZgJ57yaiztby4PBE",
  "key33": "4RXp4mrnoqg8QtANcgNxE7MWqAx4PGxQAzoccBjYrqGtL961Psox4K1rEZam5t3R787beKTgnei9yjQvYz8R7Evt",
  "key34": "2ppto6pt2BRdf7MdtqyXqvBpFzjdr4Ns9AdB8yGDGnr4AApvwHx7oVwzBMTFhgKji6LppkdWuYYNh4HPvBVELXV2",
  "key35": "2Spdm2kv4BP2tGqQd66fh3PYPJmc88Sn5kvMsapkHAUGs2f7T5vYqkFvNcUrmLexi9JRKCg6JUWtGukPEMFBXb3K",
  "key36": "5qLwBWkrn3wpUK4CHEH2ump7FrsyYdKp2F7kWFkEpgL3wKpHMkrmpM1WcEwbkvyoJjz9fomFsben3mcntQN9nv59",
  "key37": "3nL5ExeQDJQ7fJysNkKeAfbQEzhzPWw34X6sC2wGixQoBRBbmUqV6mYSTnQPCXW5uerxwxYPNirgaepYAyBEZ3pX",
  "key38": "4xC4iymR4mgQi2BNE7nkWSMu26DWLipsaY4qPvt6nsfohJh1yqVZ52nzTZm3578bXfeq16vVwbcS1tRQvKazGFYA",
  "key39": "4cQB84UmvyVQt1b29bX1HduFrS3Vw6qEGemidZ6MrzdrKRCewwNvBzmCwc5ojygywPj8v2jRkSC9KS1yyzXxREak",
  "key40": "pHmp2oC2ctKHo2doLGmcofxJNZms1GmyE74a7WEkGWkUkr5KRgUbfUTZhJFNqW9YQgTY7Tqfrdzi48QY2VRA2on",
  "key41": "3jzLCo9Udgm2iwjq8hVvu33zWLNqyGAw8Dn8UKiQt9pyd82grbev7pg8iMkn37TeZYYYMswsbSdKFHVAGLKAZggE",
  "key42": "65vEuztKNfDKEWFCar3yxDqXqHWiZF88QKMSrE1nD1Tb9VBCds7mQFcPqboY1Sob7p6zvsBDHi6j5drnvrhKfrKB",
  "key43": "4M7TkRkxUwrK76Mp9Z2jaZMZrYtTM4WZJ7W1o8TQPKLyP9keXqGwZtHpgmbTBcTvAJn3aDArm9PdNzBUGotkwERj",
  "key44": "32bSZ8vNfJrNUk9MHw41qvnw1cLYiwawzTjAxtwd91jQZEATcoTJkaZugH8YhhuPhthzEmD2zAQ9YQM99nFoRnwv",
  "key45": "2x59xjMsC982a4wBd65KkeumMcf29uzixDTsdhUZSo81Vr2rScthSLkMSPyDANRRzBZ875Rtw4iHFuBCnb3tgZb",
  "key46": "3cL3rkG2eXXeKrZ9hvxGFDTj6HLiS6NX7vp9u1zjBAg8cjV55eZu9Xibkgd4Qx3gpMbwDXn8gtyuJVqgXEZBeAwr"
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
