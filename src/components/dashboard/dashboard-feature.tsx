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
    "2YQKsE457hRFs92RdSACk96vV7s3AMrNS4Vm4QRXq56uaw927UxDoz94QbFFxvTnmSQorYGuaKgSz2zVKzHc8Vdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXChSh3oPz9HUEZBf61QNxYJ1P3EEEo7QVgNJZZZ3BHHGJQfheBnZje81pwLJ6cj9hoQzmjycoDAvZ9XJTKGQEe",
  "key1": "3Q52WZ87kZRca3cEwzFtPQfXujdf2MLVNMFrWuGiFcpPhgJefSGbGiCVi7dxsHgKBexiGUQrcbRpKr1dHqLtPCZQ",
  "key2": "35zGG9NVfmsUFkH84mrshJ4a2QkdPmz61gaKwfGqqX29MoCsdNJzaLc3eqmxcqsts7BbUWuN3i879JxJroPgJHU7",
  "key3": "28ikhcNiCPwZDiua2qoKGoC3Ek6jKWBvkDeko4zyBrRGciYZEwZMgxtPmbEKq2wt8PBbtSWatYMRnXC4cnCP5QK2",
  "key4": "3iJkGXVaWgwfX1hiemBHoDUiAQQvsLJX9ddYZHVGmu2GpH6LSC3sPShh6ek9wH3qbDf9g5pzPiZpnY3iZWVsXTDo",
  "key5": "3Uaq8bz4z7VvUJvsce2prQVv4YhqsYczSG816z7j4JvJQCkeovsHpV8dXXVfDjk8LTVz8Z5S6EX8bQ68Zb3iagc8",
  "key6": "2oKaMCdZGcE88TYgcxP4jRUHACb7AtmMwPg5YgyooaSpc8Vg9kbNwNSQN8VTJCV3SU1bDDoJiNJQfNpBgniiJA14",
  "key7": "jgXRn7cnUZhufkqXo2kVrDmgXtKwdZiRAk79JPqvaucK4jQ9EWnGtV6RMEaHkrb7kpwPgpxsX6AEp2pne2rruoy",
  "key8": "2p8JPjyBuERYGnNDZWs9eWzyGJrnMJJrDDmASKPviBHFQdeHNod6PqS2sxYBqrvMtRZoKU1vVdG14JPgNZJdar2Z",
  "key9": "3pEMtF4mznb7pH6Bi5JGSimby4asLxcgTLhdzMt6mNDtHnPwmTyfSLAYpYfc7isMvQQGKfgCVtnwUayL2jKnus5J",
  "key10": "X2Gq9sXAeqZTpg4baQgxUfJbbd7KWF9evsyj53N4sAF5XhaRYCyHjKwM16nyc7RtH4bVaMfSvArwgHbjHmbvvWk",
  "key11": "2V2hqZpsFbew88kFVUqMuBWtTxm8NLTeVYpLkV2iTvsVSrBRMNsUQrn3cbrdc1NQYr8c6RMfMe7TCNcF4am7orcE",
  "key12": "5QFQFQQqnZmtPGkH7cvFaAXVbBN4UCxFS4Ua6djrFj4VRU62snDWfeNTTDLJPebxRDDG3LvnxCWSP9U8xSCsGDnr",
  "key13": "KJrduktHkX5c3SgmoSShwfFpbjDQ58rTE5Xu1MLXUdWzWDGEJJ5T8wkPcQDy7NPYJ3dJYoGqMYXEYfQHqPggUza",
  "key14": "3xk3p5aPuw6NjTmH3rSNPvJty9HjWydBtdGHhQjdwiTPsixdhi3sRJg34pH1ZoviRFAqQsPoRJrEh6BbesXgJcaM",
  "key15": "Cca8H4iGofvfBXXNvN7cBEaCAQ48miW25Hmu4eFAf7tmV5j936QuDKgrkqBKkLQAD5HFMstvgsq3wcXEYUx9QcV",
  "key16": "44STZXhJf3TLh93CxvZjc979VnhNoHGiTE5nRioc9RKkqQp4YY3WxWibosw9hW2NP1EcLUFjANQLHwuucq72tVwJ",
  "key17": "23edAZRHgimFf4eGePJdQb9WkMst3mZFC1iJtj2oimqcZo6jruLdYCC7FqJotqmFNwbjp2KVeDUSivjCYDmcBtZQ",
  "key18": "51gPc4LpqspQZD83pKVodF4NcfgxPQMkn4YoTPTbGQwyoASBPcHL2MK7T1RVPSFjFcunUCVVgxEFAvEX96AutrqT",
  "key19": "5Fwa8rfNWbLansEdmb5ATd6pG2KWp2iWBMa2M2ghTDr9FsLYt6WB83L4PVTCR1VPW5NijeKDUrbJzbNEd6tZcuLB",
  "key20": "38PhRNqfNcTh2UGBoTw7vfCzgeXt18765MpQ2TgEGwBonGq7CRPfF1v8d6pHanaAU32qZ1eS8yRA4ftVBBSMTzF6",
  "key21": "U3bkkKJu7RD7G7P9TeXoeocSVUj3GDbQfzQr1czM6wJJXTw95aTNGtobnJwSDqH2yktizbS3nXV9j4DrbJNPJNB",
  "key22": "5YKHdn8Bvdu7LmVVcW1kBckDrcx6Jk3JX98GFXkGk3fkyf6Ho5SbdkH2CZujNNHoxUsQHBugGvtHDijm3wtswxWu",
  "key23": "4F4czC4Lkv9euxP7c34zyXSMs63S9cg1mFbk9qkBZEN5htcHmeHbJ7GLiV4RZ5PcuFVLLBNk8TreiKn2KTAqnbsx",
  "key24": "3yG8HSX2C7nVJFJXa92Jx87XkKk1W3fZwtTmMPntUvp3zsxoy2P8U1rFtvmbfWsAwcvgmvLD5SEYZxG3rQXqNbV1",
  "key25": "51JiJLqjXM2JFWaez6oj45VUzd1xinUVWNcLamhuMavMTKJFZT6t51UZTGhnis4mN4AAZkRFq53pZDj6Egoj2jPE",
  "key26": "528T16SygTWJ46ZFB42XJK9RpDVv1EMv7WsFDB6iCus33uxMT7XxC1iFNbQCdqeu6xxCmaRX4ztRSTTEYAtPmYip",
  "key27": "JX81XZG9sKB19bxEspQcq8kF9XJqxquKEQe9LkhAATFNDm9DKHMRBoAvXtRM2GjeeYxDzuuYXcoGqYQryCbQKxU",
  "key28": "65v5hjerAxW1Cw7GWAVMWN4KeuaoUvDAKaQWMLNqmXR1RGFjbuoRF5RfACpFLBvof8qR1b5u6cu8ocYQDbRtM795",
  "key29": "2Ui1kSQGA5zJigPyoFDhhQuSKoYvoCPFjxZqFFauGb4ioi4Fh3VtqagqJ7et59kkwehjoaS1JyM3Y1Zzaf9tFq57",
  "key30": "3jGvd93BED3kLecuhyzqZ5UhDVkqrR2q8huS2qUM4vkApKiNHk3V8R5d1ssLBCRmAD1xMkojNZ3jLCF126YuabVK",
  "key31": "5jNh2F3tFBSDjnjH5pGT8y9umbEPgDBxzyMkxTAivBN96m9FZLrD3iUc3JqmLfhXuhFZS1TF3xoFu7SE4YeVJQVK",
  "key32": "5MtZdcSCFxcAasSxNmYeL95FakZCPx9QyFQ2s2S3yAkLGhMAY9QTcPoyV14dKnmrLyL2CGgZ7tL7gvbg7UrTtPsW",
  "key33": "q1Bmr4eXmT4xzQjuJkSqwG2wchBsiqzCfQ6uj1udTCkpymc1geuF3ZXYzn1oxGfqi4TdVXTJAXdK3GBSz6mdYWt",
  "key34": "2HTv432TUeqMxpzUBLzuh4Ehoe4Dvkp1hNhwySgfHNUiKtAzMADWUzFjyEWzaLBhEa9yiu6BfoUaMzrm2jhtecD9",
  "key35": "pdHm8K5pRU9J2LUXFSLmAVE3FgeHT9S76GLgzmzXTL89VHhAJ1HRaBdJrbeRgAfLjm4Aa6JrUhJ9XVWMigjc7Jw",
  "key36": "3F8ckmrPRP9w8LLuNYrnfafQesfLrd7RBjnxSmqMRXKPWV5sXm6vGfnE32cggph2ySy6T5m4JHLzy8rsvZiiqzeT",
  "key37": "2TSUyGG4wxdRWE6vJmTDSKvS1wDpxUV4cLbCKA7RXADrMaRoXkEmCvNM8z6njVCbz2cQamMKJXFYhocALEVRiNcP",
  "key38": "2EmsG4dWVAfEDhyGMvgoctDoqYztiZyq6dzmJN8yoQqAEHnCcb2bt9HU3P4AxiRDSRnsK4dpW2EMRsQo9xEi4CsM",
  "key39": "5VRBT82HRc7YyghTrcmsqWYaQyrjuGLSvaazf71xhVGzP4G2r9HexTRVhadHryJXmqFTDvHxfDw5Ng7p3osghPvh",
  "key40": "41R3mgKe43gzbpn9q7njemMJGJ5qhPP4YtZHkcKkg82eKns7HopF7EzH924ThasDsWJrVYcppTnfH44D3NCCZh1D",
  "key41": "2jdxn4ZbjezenuYikppUDMmsRfAZmMSCCRzWddNsjtXhuiJGscEjWwwqZgZXX5naBMD74vDsn9dpsNpmoTjQumdi",
  "key42": "XbQPF2HHHLAo62ndqaUZUg8MSJWUEf5YJYWXprikwXsueGH85mDAZiKkhfEXUUvA8JbnA5tiTBconJNqKUrUziN",
  "key43": "54k3kUngGCYA1MzUVs86G8EXYiJPV2W28CsHsW6Kpc2PwmPAMRMFdXY5VvTbLPZ8au5MDPYgNPUe5FQ91Mh8avw4",
  "key44": "5C2qppB18TuHbWzqDPzspAmCBeAMLUPSymxPAMwgzuaXd9Rhg9XUB9U1ohVJPvRCwQ5z47YTBwRQiZh6Fb2BouWu",
  "key45": "2a3p1zFUC3YAgVAUbqoZNV3TzJQXEVQTP2RXSBab7S6w4NBededd5vZBCN5S4R8oohzEQvkHB4As3RUyDZfHToVM",
  "key46": "2pVvHvnJ17HKy9ALKkoCp3PYpFBPJH7aYaD3pbH7H7UGZcVLSA78d1CQv43BDsVg68AeyEL8XigQ2HzKAUCRQbK3"
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
