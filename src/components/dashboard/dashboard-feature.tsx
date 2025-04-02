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
    "2cXBeV9WVTthYhyQBAShXw9q1gmguZrD3ZSfpZbTiwm2DkKfGkLDLzYUgYT7qzSyp1epUKnJCh9DvLwyUhvBrUMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gSwdM1phCvZbj2jJSSeotDm3JyFt6Nc4VB6Zc9PEWe3YfTZNu2F1Nc1oEBncKsWVfxLbXxdWE6PE54PwsR51Luj",
  "key1": "2tSbZDaZQMkxJ52woDB2f5vCUF7629SE3kA6X9UL3XrncDyGDDvqsjeqDwW8u9J6RVqehdmUnZn2BwrchQGo2jgE",
  "key2": "3G79KiUYXuYG9n1TN3E3sCE258cRjpFjKVYRViEMmkcDfzALU4Y2NtQMayLjWYB3nqc6rE5siEyPvYfUPzdSqAWK",
  "key3": "2qxwkBWUpv5HsvieCuj4RnEjZLvaYWWGMFsKNAfhBxoxe6Q8bBcZPtAHob7WJ3Prg4H483K2P6gPZsuWszSn3yFf",
  "key4": "24fJ481Zv4jHswUfDt6dg6ECLJfjuJuFYTsU1TFyPLR6HM6y42wDb3G3vv3jq2oG735pq2p9u5FsCfN4MYmkYUcG",
  "key5": "3tjGhVkaSKiXmqbYntpxk1dVsEXHsHCZnmzMEWovpbNtv8EzA75J2B8td9ibdxi4epXrXYxj4LbBeqwWYq3cPg1p",
  "key6": "4eiDAPSUbBW2Zz2dSUnY1wQY4GM2q3VoFjrYu3fdyYYbw7DNGP2xPp8st3E4pwwavaz4TStuuke5BUVgjDYPGfRp",
  "key7": "4WLdvedHKGcixBMYizwaJQ5z5jN36CBind1vU29J1ZtdhccLHdY6BUyhFVKRLUxjQ4NR3XHy963sp2mT1NhSGUWz",
  "key8": "4mUixUkxdHDhdaPwoi8LXMQW8N9JAHG5bB4JiAirMTZLviHRdBZKyX2mnW7t8m1xBdDxeQ8pA52pF159j5DxDxX6",
  "key9": "MFCkfcnxnHSUsGKZoL56egex2KZ24G2hc9cAPrWd4QaJ76uw7unYFmyXgLiLnWvUaAoHT254mkZRpwhHBLsEDd9",
  "key10": "2sD1NsQgD443c2PF2sZsoqbvnsyCNaoTBRrzBPLj4sdX2CNKi1LMez5qjwfXxqXM3E5xXadsMvhdAgpSiob79Kn",
  "key11": "4ES8fVqwKZq8XSHAQtPdvRTNY49jnDGZG1vR6zFXgDmCsxEtQusV6aKnBQRvDEzzJdwPgMtwc3gPG73Ddu4MS3rW",
  "key12": "3gSDDMLmpb4YHRkakLUEi1iDv321Bx3fkYpVMwSy2UG1jF8eJ6MczQEFMfKxbsLfoVpQgCQpQp4XXSh8ChULscgi",
  "key13": "5XxxAnF7wKsibDmgNWnRicmRn7nNkNd3GjSCnUonL5ZZuSPhJemCFTXHdNcmsEbb4AdeGUtEBWXbF1w2c7QXGDy3",
  "key14": "2j8BqNxDu6tpRJgaSNFbZHAeAijJhcXrovjzreucCCSJFcqQbHMmyUfUMoGEcYfiTyWVk1H1ZiEtHU9V91R1kCzt",
  "key15": "3oRCysPKbNpUit9z4uAZgAXhDqh6FDPM73gvatFYWFjiMgoqeUEFjUGtxjfq2P8jZsvavseuet2Vn2cNCrbbKQ8i",
  "key16": "5FMS7qJkc4ek79djhSWcSPcvzZLENSJwwvovU6WbVNQzQ9XiuNWRs8M3YV3VK3cgMm1kstQ5RThLFvG2REALRJse",
  "key17": "25p7wrzDacXCbjHx7forF3sFjQoskzaz5S6fiVfVFFZonvePwLHbUKECgkKXsHrQzTqWYBdwy3qi92GCFqfsM7W3",
  "key18": "4LgBQj98NWCP3NTmfcBLQzrv3nmVkNUQdNq5WCJW8arRDz4KeM6xn8aRMz7hkJ448gVCVupvtuMNrke6faHvVsKL",
  "key19": "5e8m1oyiGWYY78aXSd9KmnZwiHucuiSSLU3GLPzdm2nBpvJ3JhDFT9Eefiaz5cxAhjPKD49jFLQU5dWYRNoRdHM4",
  "key20": "5Kh4KhRWYdhB9ox5n8oSogYc6MDx4kBGRRVFUjYfa2fPKRPDE6G4vFscKMLE7oqAztXwEPDYXW5ZcUsVfYe7qj6U",
  "key21": "hjcfD89ijo2zvLZMoFuMturEphoYHborQmtvTtChdHa8g457GcrqGLUx5bFcFKJ7GTJGu3euJw2szByUA47uPZk",
  "key22": "4gfkbd6NmKrdXPVbSJecM2wJyUip3PVkZWnx8onuFQLdrjkjukA8TxyLaw6KruBvqNxLspH96Z78vabDZeXhr1HX",
  "key23": "t961y7hhFPYEEQADMKsYFJKG3Dcdo9GqYWMUmV5Ef1aji7dowJVLMTv5zgW4b7qQEeBJYzKLrm5VVfQErJFtw6J",
  "key24": "3PhuUVXstWFTrfmAENYMGB5x93khZsfNJiHtGC8sqgzDNhBjJFvoKPzoobEsurRXCB6cP4CAZbcPkjKAh8hzxNjo",
  "key25": "4jWUB8XTqvdv1oe9vGJH4vcyTxCJnmPu9B8626qifc8HQbNsSxJr8mYNqQ4D41mZDZeTip3KadEyNqwM6kqkAurb",
  "key26": "4ZWJvDCgPQTLUZk7Ds3gefB7tjJwNBgr55h2A6JvHqmFAQS4YbS6exu5nq5mdBe74Geyv9xu8f63ZMN6irFMT4hW",
  "key27": "4AnaKkubrJKRdamxPsJhWBEkwMhbLbShfPpdZreiga5HoAgS5LKSELAQiiy4gzAmPHgg59aGfrodqdwRCkwU9ALA",
  "key28": "3SfHfZ9JXUuhvFDyxARyBS1Ld4LMiArSSs3F1pqfn1ponK37rQcvFYUawx7MVe8YoGbBrNfq19JbNsSPJgsDVCHT",
  "key29": "aqGRg2dEyvXVfmqWukjWnfVgw1edoE8fbjBXsd4rci1FeA3sqyXriiTqhx6NyR4niuPwNQfycJPZHSQBJVoDhq3",
  "key30": "3DyiCTzNt4TYBsXtizk7ADtF52aRuqG6odAAxHixbNpgfGL5jXaw5aBrUWCvTsF9Psi5ksxte313mRok8LhFb2bY",
  "key31": "6ChzEAt2FifXiHyFtk7HME1fX4HXKRrF7zemyLJiumNqqF1EyK5tX4442goLp2ibxWmT1Gc59BjtRYjpQhxDQSJ",
  "key32": "cQxWVqhfyYKpku8UBAgRKmMofMD2KCm5EgQhLD3kKVgtxVcR3soNXkfh3xjz3n6fj4RyGnn67TteNa55faFjU9h",
  "key33": "4GnFCg68U5KsLnQ2z4vhkLgddqxdPJi3NaBnHw8HLr95BrVRUiYM4EiZg8dCcnwM24L5naf6cyXHEvM1QKM4sMsc",
  "key34": "58Rd4ZCkYEtLauoBR1siSLobc84WvRaUAMc6mCjYhSecFCzFgYivZgj4L8uys6rsovpSPGshk4JwjM3utoJA5HKd",
  "key35": "2S4kUEPQ2sVuXQHUqiZ7MEgLMLmF5N8p32bBsUPGic2GtzFSx3vDkWiJdsV3ykeHpegQyKBPZ6FEuADaXj2SMh5F",
  "key36": "5UTy828XJfJoSj5JwohBpdH3T7mDC1Qv7koxvu4Krd6hXJLFXKQMmafxXMwhX1JTmoVbj1iDNqtvsVDEQdheS3jf",
  "key37": "RHKpUks45TpCrbk4ePSc8ZLe8JPdr18kSdea49rgJyC1fCjwJCpdbj5EUfTkqrACqQB4GUMZDYfGxb4H7EWUUNq",
  "key38": "4Lfuch5vT9s4HMrsfxGUBrgU1ZZbt5EroXW6LhZ9HZRiyineGXemwnt2JjAuv1ZFp6diTcTu53NwtF1DRxfBZjXy",
  "key39": "66k94MmyzbQnchUyGXf9ouBH3UR1Rkb3qzgD584TquN8oA5D2PDfkuCEdHhWrBFVPXBjyyvFQZZCw7dS8693Bqsm",
  "key40": "auLLSxmSacY4Qk8u6jkRcDJvBjNwr35izPKuVREVTuR9a8f7dWRsqF5TrM1JPLiDT3FXtaatHfLT5d6xdvQuSmR",
  "key41": "7SAYm8PA9gSpgWYhe5jLBuMMGVDjnKvsuwjdcYr3xxLTGGoTpz9axyH7ba3uZ1i9gDp7obmZKaaRYFax7cUKKS6",
  "key42": "4JQGCe1uX9HdJZPn5AthVcmei7MLirWqW32LQP8ifkwGo8LUoceFqdKJLFcN3M8V2ht2zsfjMYzyiyueXbSTbCHD",
  "key43": "4rD8naLG48ukNRtarvfRNuc8xkcsR1WuVrWKeXciDuPV2h6LM8wMwfQGVnZymc3orafC9MK1RPZxEGphfKLe2FB8",
  "key44": "3hz6W3wKJ3Kn1bmK1qa2aNoU3WwLPzECsCFJTF8TRQdYTGtQ1phJ2ckP6wdviqrK4kDNXvgD3CZfy5yR31idFcPU",
  "key45": "2Pd8shXnQzKRwtzWiTaLxMhJVFHjrhfkVqM6T8EomPTeXDAtADLfpQMSqs6pmx24r5cb6noG1hbYuwVJXxQJ73zj",
  "key46": "63aAZiedcFiPaartdb7VZdg9NpYAsWAmnNyN4VoCyumdxJcQMaprjG5gA2XPvSGZisRAUY9A3CBJWXKnqDvc4nox"
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
