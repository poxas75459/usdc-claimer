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
    "5xpzxeymG8DgkpDVtogmrTFYBx7wvLYmbsgk9d6B7zZrnVpN55zrFfiFgqefkkQYQTUo2mph22wmwxsHYhwmkCmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47HSXhARS3CGrJtsuuWkzmnGjoLPefCMvBM73iA8xP3KYa21unBvcsRRYhXVCehbXBUxr4XPHLX2kf51Z3HiQzvV",
  "key1": "27hVZmjyY7PTPQCemJdoGWi54Dvsuz38GK9kKUkbMyvb4GvZmx5VMKEyrVdFW6wKoitW83E7TH4pv7iewtxZNRNV",
  "key2": "4KyjDkDjdnYvsX8pfTzGgKETPydzDymCWu7M1U2Fx8QtYiZ5c648goBmjhHSoBrnTgPMZkiGJz5qnQT9w3A85zuR",
  "key3": "2cTaiHL3Tdt9xcXKmZDdRYC6sXm8k2wVpULkNgFXRktMbdjfBED9ou7xcsPC3hLHZx5pWZX5WUK1ZkBJdmsRexMu",
  "key4": "37LENeFJFDxSjS1nkBgkFjrcEcDkJkwcZkEs6oY7wY417DZvvPtFCqbLcJd9YfosyeV2UbNATVAtpXihT28HGc3S",
  "key5": "2eG2QJLwP937YkNZDiUH2owaBpMyZuUpYtfwHpz4F65x1r6saJ5UrfhDAvmToi1sptHbj2kToqdaM6KrB1N59N8B",
  "key6": "uG5CigNsrmhS19GZ6C87ZEjnCs6hTAysVzLP4zs1DoF6KALi1hNfeYPmxnUpwPB7MoNbHJyXAUHGo8ZjMRmTvCv",
  "key7": "M6ebNoMVNbPJbJ69BMpz5wmZYNAwGLD5rG3HzvbSRRWBKx2X2mgD79RyRu886Et2bUyS1LT7ox3mDEgkthE49i1",
  "key8": "ai2C7HkHWXRNnAXoqnoU95BuTSWu33kAYuxNDd2ahJqembWuVTtqVw6PYPtLATFQJvM7ccFWgzB6FkEdmKLsvov",
  "key9": "5YGXqUP6XzXF5NmEEmbgU43RnTfw3z5jm3KGFYVenfcFEd1Emt6XUX87ua3y9qATAR4f8S99ddh7zwJGKquiv7Uw",
  "key10": "QmZzMCYA6iSkwFDty8WAZ4VrgTvForfU8bn6BNRyEczoo68EjAfXJ5SVsKi36z53L82P6nr4Z7FBQgPUTMcdKBh",
  "key11": "3QHZoc3Ut9wVfTGFp51PaapyjZQRXLtrBJjmTowHEWjbye69eTVw5C9BSY77WSpr9xed5GX7xtXifMrW4ghDKsV5",
  "key12": "2YEQJBhdkzhXXXeJ55M2QkbVKDXLJTgjk2nR6zuewLB5JwtFKxjxAFb67Ftn8vgbyGz17u6hxruTPgW9DkPLevHJ",
  "key13": "yCvzb8kezwxutahgHLiwgsj3icos69wtL3Zxuj2tP2ARZBQqwRwwkn9t8PA2d7g2rCQAb8A73rUDzmfE5rSXtfr",
  "key14": "5tQ1KZ1zFkcHUXLdEZP4HPRvzkVXX5Cr7wecWg7yixDHAKRWirRTrpVL9wfaYBNHssUtifxx4rhEJxdCGpZizZRW",
  "key15": "3EFgcVgfJfLMmUTbdFZ7Kn3SEWEqnRHLxHjpXo5hC32CEjuXNtwt9QXtT3ge4uZuamwrp9jodSPEVjLoCF4YrF82",
  "key16": "24GwLe9Gi8ovCcaMz9xKXqPWJbMQkyJUEWPnnbnRvsZTB2Ca67WY9aMokQpSDArakQPggcXncto2FRjwinJWSmpj",
  "key17": "4EWDAThgykuWkMqBhX7tfWYphavtNEJE5dLcHHWaN6wb5e5sFs12JpHXmfayMLx168iUfLGAHtNqzZfty4Nw4gyY",
  "key18": "3RJ7JoRyZSLqUGXpVGsMnf4QC2edZE5Qrk6j16CLjmCagqxB2Ho4tUk2HTEbaWeAVRFbruLEvgA2ZcuJ9Vt9u2Kk",
  "key19": "5woBj44BYgTqQVDPddEpDsN9qrZWMXxZiF3xixBw3jjygztsQz5u2wreFwCbaK1an9xkK9AEbBcvyZEWNeFaTbuR",
  "key20": "Xm7iv9aTCkQMtTcJXFkd8hQs3HuM4AMoNbnYWTCUaJSX4zrXWJHJXYADYjeaF5N2nJaJA9UWTMVTSijtxJQnT4Q",
  "key21": "X4SAu4bXwehzc59L5ZdkxpvCt5V3ff9pztH7ympsqQmpNcKDnCLuPhqz6CGgnw5uQZoAHARSTCuBpnhhmQWHqLs",
  "key22": "2Vb2TW121WGmAx5xPapnpTbKGBPmSZStwteSoLaoJ9HQyqdc4UKXuVwhtoJoiUoezeMHcVuqD9XoriPrwvxtZyhZ",
  "key23": "2QEAee5gq9T69TbyEazBEYi1hE6nafHxnHHNptfRmYPKEnstJeJtAQBFt1cuoc7qji51n9VhTrsVSb7Hd237HCMU",
  "key24": "3JxZJXcHJQ8eP2mLD2e9hyXzoTRC8Kev3Y1GQ6VSTPaJdyEQunMjGj8qa6vSAikzgfTG4mPE8wDjMaEXKzjVFAFm",
  "key25": "5jRg9WashgutvyS9XJ5BfLVuPPqQLNbLiLLKpuUHhzpKhw53xCp4ptjWJ2eQnRpPq9evRUoY9vgcwYqEprDFgWSv",
  "key26": "2omGjfCc3V2hdbiHPYwb8RFkCZFHDnBMYWKpB7NqYiswD7cr2oLsaUoQDDqAAbixMQEnGLG316ePcNiysdnEjKZ3",
  "key27": "34xxJ47czj2nKDhhfgcVt5TGTTbMGDVeVDwb7F5mMi3xVAWFieYCK2onHkrULJP9QKaVGYd5pfv23b6KXihBmnyr",
  "key28": "4tRTURN7wztdtebjp7EyvLSY4XvPcHS6nSj8H74ax8yWZmq3tjQgDEEZe1xVt8Vcur5BDyBV74cwBG8kqD6T3qzj",
  "key29": "5oB2Mpojm5ehL3NfF26PmcfXDB9WAK7rtc9AkBPZWyh1TzBYsSReVuxLJLAfFEFrV3V2Xw8kxCCXXn6ztQZ5CDsH",
  "key30": "2UnjL79QYcfRrzW3bmE91D6QNzqGwTDjbocip4e7xpHvCBja6xmEhWknRnKV9WMgypsdtPWSrRVkkWf2CpzpTFSH",
  "key31": "5zAE6iszimQQqa3oZBiszVERsYwM7k2MdTuZ4byxfSpWWQaHiHbmTQ3n2vvRSf85HLhkQBTbJgmerEg2Tf45ji3m",
  "key32": "3FRiTusd5P7oAxv3o6jk2iinjjEDabR53sAFdrsVPSWmPbvyqrtfVov2UikpEDtmFtxCTHJv7Wxhnb8auCLrZAYk",
  "key33": "2Qo1gseMoLA2yHiritLP81xj6dGQFCdc1Y2hYzsR5yUottyqK8Mbwc2eogD6NErAkiijzWLLyZ714VUcL2zYPuPQ",
  "key34": "2ZEZFzE7u39p4qLGwFxPuH8g9UX5uzUzdsSU7uoBr1xDT676MMXfmWe3a5JybeXV4XHVgbn3ai7QTaT5iSzkDMe1",
  "key35": "3LbL237UuFqD4SHxRHHV8BQqtz6styJge9TabWZnfMSHV78JDqJz5P8YQtdZWM9bhFVGh1QkMN6uAZbKixHQFAFJ",
  "key36": "2YQFVPtbSMcoFtfVSmXvVK3jF3dRbhPBSKkbg8cvyPZKjDeDAFCq7fS5LDS6CWLYUHaE3gteUn8tA8echkmFvWxt",
  "key37": "2Wzme1iGVwxA4tudsruX826sCfP1N5GisheSFtPsAtruHBCofPLUMfFGb1zXhUYSTHaYNii3swn7iYc58F2wo3pN",
  "key38": "3hVXCaUfgaovov6cXG3MZ6CBeacAhoTqu31PshDC6a7woEJS1Wr66Gt35xosV1QDRoodYTAbqz1u88HU1bhjeoBi",
  "key39": "4Ujam4azAtnYwh4S47oZPGMzX8e2cfgVpkQVJjZFvqt4nneNAW6fqSkMrAbKmfCXdwMznT2Tt3Rc7Y1R9sNoodBk",
  "key40": "YmkPEPaDTtpNvY1d4HTniXkSq1VvhA1ydiaSuEKQFL9hZ6RVcDWTYJeEXTsXRjz3xUUETv6Zj2LnL9Li31Yw4v3",
  "key41": "5yyY3BoJVauvm1swT5Hm4NHfs6KS5N7P7uw6QeE9Cmi4ArmyKAcsChg6UtV5mmwJpqc4sAh1p4kZ3NRJH3tp9tSu",
  "key42": "5daLdNe4EwAf9VszCdsKjR1fDJmBvMGmGczcc4srXS2gogb7ug23jwbYdGCnYUAAzupgbyL6XdQxXg3nzbQLoUVj",
  "key43": "5U2PhUZqHFdjdX2GhGW4nVWGvgxscBc7g8QTA8gdz2jjfVrAMxNfQPpavHTH48Ztzi4wcCuRw7tTbWtP5HXh1vs2",
  "key44": "BuPhJBo7b4jAH7Pky8dv8TgMXh6iyXT8fVMnHeaYFBUokV65JqFW6Hc2QYytsmoHQVHjSF7MC1ZmsuYq7F3B1kV",
  "key45": "4V4x8HuB1BwMgPu9qqtPdzHTHR7pR2WVofBzGBmptnx3apVs9FM8uxHqPjeAamwE8SPKGrKXyExYv2rQ7zhzzFdV",
  "key46": "25X4X3aG6JcGAUBg5PUgCwLtokotiTcLv6fBJoexRGp8F169thxcuEy3k4fnuoxVNSP2wrghsXSCbxWBL5QeZK4j"
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
