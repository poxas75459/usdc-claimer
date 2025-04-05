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
    "31wPBNeqSrwKTBtnPQ27ckEoLf8sGvQda518QwcYenTMtB2FaebPGC3wnKoKUz5h1QHbVr7xgC6F8aXwLJx4w2nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BqAbbgmwExAPaWXeAsKzdzP8Uowt1gL6SwsupSYuX6TdXUdrZt8xqzmvgvRsFiAV5Umx8x46gafrK47xq4KHtHr",
  "key1": "uQTWTCDmNe4KgSpArcyivtaq62NvM17VFhbhoeVjLNzghir239RBLRSMXfLywWWNhkU36ngN5eXNpyfigeVkcuA",
  "key2": "2ctM1f4zzRgGTiNfPfC56ncAP7MbCmMqWy2yMRxJag56YL1kK5GLjRb57JxKjZDxNUeH6nV1jaNDAJGx75rbjxK4",
  "key3": "QBU8AatfMGEEFD3Xrvpwh7cZ9cQxKouoGVyFjVC2W4axc2d7fCRLALDkHvMChZcazV3nArC9WtW3FGrKNRvJfwY",
  "key4": "5h1pPhRCmhxgxsVmpGCdeuwko1CCHSZ1QsVCuWPKm5LAyPHnK8GtzyDVPbaBcBGS7hgyNYoE3bWZAEojJKyCvUUc",
  "key5": "5NZBkc16HA9mDZaLK9RiGsTLs2gPcJmpArakKHsdNK9WGk4yyTZ6THeyoGs3vEiUMpd6KwCon6QDcYPXyZU4mzKh",
  "key6": "3kzgC3f5FPPrX5ZqNds1YphUCVSdgUT1LZjbqWJHjQfAqHRJywe1TzY2s54oB2vZ85uQihZ5rQSTd5w5NEdEhsg",
  "key7": "jZ2kehMBs89wp8H2w7oPN7p5G6ao5xBzm6ontzF3s4YgDsRRU7bkfEQWSFVvxmHb2Y2QNvNY7sHhXkjqTy1SEkB",
  "key8": "GDPxdoCfzSULGQeEUaWrFjqyAKfMSXujbEH71ifLwee2VniWc3gLpJDPRJUgQCtx1KtXEhnTzH47oqfPb1UhTbV",
  "key9": "2cas65AbzjB1WPCX6WabnjcwzFJGCKKgPV5SaLGF7AN98xCzwr2vsm5bRAL4oLxhm12siRBHWNmehRfKSY8DyQVS",
  "key10": "2EymFzzUa7HNdjLnR2DQ2ePSdbsRLaVmDJJbPi9baVSk45JREcbDeFa7s9XfDRQdPWbmqsKoy78XZeX6wUzPguPp",
  "key11": "5Gn6bKbb79GZv97aGJNxG4buZE2u14Mdqp7nB94vU7cstsawmkqDustFq21DK1yoQ1fbtJWiArsMPbPhNpSaWozd",
  "key12": "3eLUP9DBgDSPSmLXk271bThaiETFApAUuPfSCXgqkZkaDKmhMDbUvkiCFDVZoRaGurNsrMcnv7YaHoCcxitbyQvn",
  "key13": "31QZxGxGoGwcrf3YnoY4mM8icz5NR3qSCDFyNjUk3V3FVogPac7yz8MZ2B6F6yHDsnCbj5QTyqCaLYZbCgfxWrzm",
  "key14": "5kV7az87CKkR3p7QbKcNirgXNy5MSU7jqjd4Wt8xwXmpSkUJ3F4TP8oBnWVTBTUU3sxuYFodCLao32VWktoVBEJZ",
  "key15": "4zJ77bHjEvutCgCkB2shXHt8kbRudH6RJTFGh5wpakuRgspAC9qiUs2VXpyZ2uUwzCiZWaBHN1qsqe46dGeuuEVt",
  "key16": "2h8pigu8CQffjSBnJNdqH98TLc2ogweqCwm6peQ7Ls35V3zLAtvKevFkh5ZHRxgfC2iFoAGZ6HigVFsFkj8J2iuv",
  "key17": "4FtWZu2L9UwmLEqFCyVRL43KN2iKTks33m7aB5T85jUCboWLwCRtdmaWoF73n7C6FViSNef7QDAhx4C8x1FHTU9L",
  "key18": "2pkCEn8FRx61EMRBbvgUfMrBFY5DVNzFHFLns4UsydV8QSskKKaVt56HYkMF8iaCsVDj8hCq5ijwgsFX5aWxqs1j",
  "key19": "HWu9St68f1joUpJtYtgu7nj4x1hvS1qCRpHtQWo1bymAGWZnxqNFmx3duJqinZyo2psmDTpGwH4run65bX535vM",
  "key20": "43haF7KFNLJ3oUKNcDKAKny1eE2KJXwdC6sLz6ukxbJ7eMHzzeRAFybsVrHaEgqYeDxXZfoPKoCJa3YdeRV2Zn5k",
  "key21": "CNm5tDtdvUfdQUB76PfiJU3C1q8qZu18srHk9PVVmGbqrgyVZgHHRdEPo75EbwRuVyHpTpiuYaMAVZFnhx3QUvX",
  "key22": "3wzFAALH18iy4tQqLUXRCMTC9f2fYpysbbVDVYxBvokDorgNreJnudqwMDgAUzYtJDZ7QUPvPqeZbPEcTinJwTGw",
  "key23": "kwoha4dskM31ZBexKYpoApj2G4Auj1hpXEpVpEwPh15dLzTVyhw9xKDmehCQyDX9cMP8hsc4xnBsAKPVPVwxJdi",
  "key24": "49xm27RYELMYPygLofsCsNPwZj8AiVLks2MGtbbXrNMzGRDsPjJPULxG7d8BXxebhaHiGb76Q76ZaLejquQek25P",
  "key25": "3CNUJbobxvcNkNW7vwVxswL3jxBbCuC1qQafeMKeFtYqo3KrjLymkuLryVy6VfKm1Rsaj2S3jpMxfzubSAXLR8k5",
  "key26": "2Yq4PdazhyRH5hwyZ64GSoz1dTFUMxGtdeFJd8eypoSU538vJfMPK3TA1gBuULr3kGYuLVBEvq8MKhtY6Wq1neY5",
  "key27": "4jKV78C9qriiQuB9GmXxZmScY9caoEw9PEa3NjBiXCWme2skiYjvVmue6L3Psp6AL6AQwsoSYeoZkyAGqXwCoygr",
  "key28": "2YnPNNEmkVSii2W2N9kUY19C2LuCFN3x1sKWzg4iHhWWbpwMtMQbeTYTkm5GREAMiwQHTaExwtAJEmgiLGiZVLHm",
  "key29": "2vY48Y9wZvVD7oFYe3aBFduxskZS1dJbaaP48Gu1b5S5faPiiCZ6vsXPMn9nXyvyVADw5AzYniZeCAG1yYzdD5Lt",
  "key30": "2FJccQcsv4QrocHjrvV5HCdoF2cbQ9nyzqEgBTkhMyxC2zuu8DXWEMq7EvR8szumdzi21wZwMvYZLxkhuu3AbZaH",
  "key31": "4f6yFhzHikMfDMU1rbL3JEYmoDgNLkwhdtVnUkzMctxB31u91GhQ5KVEj8RKyhFjQFR3yDY5BgJWvV3W9SBer9Q6",
  "key32": "5mJWN3xCkJgeE35WBw2A4vcKCVzCEcUswfe4pZ1u4D9FV4VEcDUiNQkeZqRKV8ts1tkiccoPTjqpTzJvcQ8R2PK5",
  "key33": "5idgBL9ftPckmczYnuWMXZNKrMmY6Kfymp615dxaC5ksru7fZXCaFckPnZuEs7pqLHyBp9EFBRPXSgUrtdeBnNL1",
  "key34": "2p331mPw5BgHvuobSkqcjTNZsBfJzxvjueRrNR29mKbd2J5nKPY5ccjvPWwbmukAaLrmF2FjUeqbeurAbdMUHEDs",
  "key35": "zXhJZfSAjDe2toZd7iPredLy5fsSPwzH2qdWHffu6rVK2Nkfsc53PrM7fuUH8cRWdd8XQZXUEiND2hKwcdrieQ9",
  "key36": "3MJEknwA85LHTuVmVNdbHkbPirvTbUMUEegExEwqyEqLXu1zVjGAGjUXAoX2yV5yLsXA4yx6P5NcVCW3VChRjyEE",
  "key37": "2XGS5xW5ERK62FcynkVyFtTt9PSNcSDYiUEi7i4fkQBCuaNzcfBRo4C7mVEaH6uhGmHoxJ8nxZxMXiMGYXqa4PR5",
  "key38": "3a3utSSH4DxihTRpZM88RrWqdQ3XgyEB2KedMHWzbkgDb4BJJZuBxk3EGQxdf9nRq1kDxdZansYAF6ATF7zDYpRc",
  "key39": "5bxZee2BpzC1rLYYJSCXiX5LgCriSVpXiRMy3Tkerv9y6w7E9mkK6YAzfmvka1kQk3VRTtEAfPr46JxBPawwS3tc",
  "key40": "3CFPuHsH3AxuEcDj2ZghHR4weRJFQEDg3vQ49zFm84QC2ZwT5NKfWDRTdkCifZSQMrksrdaHsoF3QizSfaRtvz4x",
  "key41": "3FdnUbvpc4sRGgYdyJNtwaiabP7Sik4sxwWpchgk1s7vA3bvKeUQvo27jiVqgr3tH5xxKDWgjoxW7jcUr46K4bkx"
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
