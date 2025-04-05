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
    "57fYuYvsJxEFhzn563wXH3VtKZVY9ScxhQDBx3i5q8LrqPuRiL87CE1w9CSPhiS8NS8YFC5GnN7HGT6cWaLBf2WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CzWoFC7XQrpgmYWkkrNzyB4N5KPRzfdYsFi7J5ZsyHahkh5sMHhhoQsPLnDGCcsD2CW9C7LoF7t8AGQMhL7pgYB",
  "key1": "2Kn7B4snGSsvECiG6CUJpQ6UYiSKrkJk9s1RRqgYXHEoeMJWZ2b3KxKRwivazGKzW4Cyp9nCwaW7aNJFQsAdL3hm",
  "key2": "55HY78LY7dWqviCteho5hECfnq4rwfYs3Yvu1uhFT5ux9VNYNcqybUDrzqiPET7ccCBsbhVVGFfASDj1nfHkC4i4",
  "key3": "48aqutzV7uwNNsY7y1aHqwqAU3cp1JwGuCgry8ngtGUfEqZcn3VTdgLrsNaEufTqpYJD6QxR3C9uHJLhxnMDzfih",
  "key4": "42MqYhxk3fWr5grcu6ejEoosGcAkAWXVKxxNK8yEHZefaJJPPUrD9jKFThMm8S46dGKTtGnRQfpxX2JMmbAb24qe",
  "key5": "2Dr5PvUbPQtCQUp25vtAhuAffyd3dcvVgukGGgD5cMpmRWb4HYqEv9sCMU3JsCqWRZEJQWAXaFne9h25ioN3cM48",
  "key6": "5k6GCng36G2j5vw1LVV2WrdwSU9hU29zvXndsBnEivq4NUpbEHUqDgfWszUDFySbdMZia4emVFJSPar4tz8KoZqZ",
  "key7": "4gxQH61TwYFnptf7ckEjriYJ2QUFDmPbhZmvrXMoKpanNuG4Mgq2JpUZFWhafCDcwzrUWaJRCjC5WFqRhTzHAhkw",
  "key8": "4pURGoRazZT4d4v7JedqCnSJs4hDVCRCefUXnpka7bt54xBPGUKac5sdXXV8bpBVdfwB4NLWg2eGZdw3c81foHW8",
  "key9": "54SCM7DEieom14vg9GtwntESMvB3j92bDnExU3DydKvAUJ3SS1sQH5DwnLvucZHfHvNfrxSXFzdDPGu61HEm1BgR",
  "key10": "8VNUdeMSG6t2R2fmAPwVPED3rbtc93LEu3L58Rahi6QtVyKUSzpFf4nbWx7ZQyybP1d84XQUa7uyW2MpnYzY6t9",
  "key11": "5s6nLyx6occjRMiTG3kEZiYornrMAgf1K4c38WC8JUjnqWEDkxc4t1SzUftwoXQNjNqsZTs3SDX4TYcEvao4WBWo",
  "key12": "2S7VAE7Q2qEaY3xCfCEdzW7SgffUGZnNVmZGkgwk3F4HgfFACDZ3ExutM7miywC3wgnUjxLDETL9UZtuuVp8hUxh",
  "key13": "5LEEDGYriL6rQmDBuLfesWycY1i46Jk6TvJvM8R97LqPBiTpqgnfFhC8GBnDiKPdRntw4WCEgSWnCRjnBg4LspY2",
  "key14": "4KfEBAAQsnVQDspZ5txug136BdqV9uUmCaGYktA2XgRnW142Xr4UwBaNb4CXjEsJ39Fm5sS1isx8AtiXKuk6HAhH",
  "key15": "X6XxiHMWGLVwWtAKPepGRKjKn339X4uZJ7i3MjcjLFg4Gf8j6mvqrqHxRJcL4Mjs6bJDXvbvCwDRyQbwDT1xex6",
  "key16": "daVczsLPWQDY5KCSBSY3PB7Xa9rsK3TCp6W2b5CitYrfaswDFdrskg1YCKjWrY1xZQvJD1GFKVuSxhWnH5RoCk5",
  "key17": "2L6snfhFqn1B4d48op39avVJHjfpyvmTPp3C2C1dRktEgoMzchVbs2CbRJoeNygGR2QgVse7vVv9mXGJ9Jwsc2MU",
  "key18": "3hCgqJeyN13eWJYWjd9kRaYkfkSWiGaL1Tp65dJ49tzxqrkMF2rWNhXmSJCxVNum7gNfuXV4hEAw3wePwZoJGzth",
  "key19": "4XChhyuWirY4NG36nuFjkLjTRAush3wYo73zXUzqiiZrrBVZGhYYXfhipYnjqcoZt5WawbM94QPiHYTD7iSETKzq",
  "key20": "56bNi8tneKUqNTTYosJRxGYXLxJddijS781SzoR2xUQToieh2byorQfMtM5KWwy4WLAmfWa4GokTdi1u1TaBwJgR",
  "key21": "5JfyGDkzKAyLd1zBjCo6Qb5wudNpGBS9gCewoh2HME48Ur1sE6QBAJMUPY6xLFBXQidNXUftbepWcE22Z1TWi6N4",
  "key22": "G8VqtMd2u86YaEPBRADbHqF1b1zxyfnopNzUhhJx7ybr8gRktqNGvsxC3v53nSokWRkTDPnsWL741JdMYZpHcvn",
  "key23": "4SUPRPPV6qkfYHuXXb2eemPGtXCjHhjiD6D1UxAeAX4CSb231b2VcFr5xhCoxHNQuSSzsTCdkWhyLrjY991ZN2EP",
  "key24": "5M6NSfSmeaJYihQRZnAE4BXjTnBVHwsFsf4mW28UFh4ziW39S6AZSrwCaHJv1wjpvsWv7WKc9UNTN7tUP1csa2YM",
  "key25": "pFJBs1mgd46tw93JTTJMAygJYTrcyktWPBVgoevVdhaVs971i8Tt35Rpiy2JVMmn4VRJtQu5mvBz2oqKQkkcxGF",
  "key26": "4m5uSGjSHQxVwrVnGXbdDsekdvU4FBnbuPevsFS2mHrQ7tiVmMQ6ZYen6iBvkPLftqbKdELK1c8Dg2hLE91wDEJn",
  "key27": "2HUMHURCANq76Ch1Zt6doTLptkRMDmJHHTEcnCfmb5wkh59sFiYKjt2BdwWcAVQQ3PECqkRgApUWixW2dKVjM6rR",
  "key28": "286ZgLAx8Cgmwx4ArE8VGgtFjr6jkey97i3hiTD24CAACbrhpxEGyMKcZdqrNbXf5cv7g7x9cG2hymz53VJ4xPWt",
  "key29": "3vyau9iMYL5qYToUBaXaKTSxUJqCVkbjQc5YCT7UZ3NWto6s3eg36VTh3M9zV1heFDCPWNa4ggBkyGn8o7g5QF9q",
  "key30": "5eRAu6CqJBn6tvFBmpTQYXEi2sEA3m8nRwo4nxsB4TGLMC7sBZkr8zySVVtdFBw1WMuM2MkhsL3JXRtpYUqo6JiG",
  "key31": "5n7DQi8kr5fP6v8iPpL9UVEpCDezQwPHZTTGHkzGLdhyhgeMoXfekKhNcibMEUDrPvrZfmmUuRg9437LTYYJMQUb",
  "key32": "4oatdujGE1f1w2iw5S1Co885ARWbGCmTznejdRmd3s5JmPp8kacEAtKYJDBaeQ2rr53fFY4RuhZm7QukN2o1fyku",
  "key33": "2qtGjh99LFusdcoq3grjQZXejRc2ozVSP6bC1wDWRAFZEzSaK9Fik1Yf26ofZfHBB2jdQLqA3fsNAb5G9R6fzsCX",
  "key34": "2fP2oKa23ijXjXP88oMFRuukvhh9FLTB1PieNjxyZnBc8uGf3DMua39Ct9PfFgF7UPHBSYSEwUzYRxovuUM5hzw",
  "key35": "3d9ZE2PFMuuRu9vFsAnf1cYN6YfJrPG1QWFmG6VikPsZgTiQzHcXXKU4REYUfdMpS8nZP1dHLWzAbcjGjqVTCrKj",
  "key36": "67DQhSWxdcmrgwCtSsWbCsDB5gCNLBrW6Eoq9mbVdnpoYg16w6KGdV6NKXX2hTqmRLvv4USioGLUyN3BVxFZ3TCj"
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
