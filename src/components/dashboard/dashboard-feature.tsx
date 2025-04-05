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
    "4TkRypEwx6nGfviq6nK6Ua2CbR2mg4Rr81uLXGkpZ7BCHKcvoiYQ99o14DPvCsJZiGGKkfEB5dtdfuKLncb7GmZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hwht9ajkWS1WNzP7Sko19pj7Rg6tPZVuUcmYnjyKdy7KAMcuX7b8YkXRg1Kz8aXMbe4s8mPfiKDZqzd4vcapsww",
  "key1": "HbUghg1Uq3ikZyM8H9CH1uVvXMszNQkFJLUZWyV1tCZxwX9Pe65xDaHZAMcMkW93aUDmKw6N7rhJopCbLQnzy28",
  "key2": "5SbQpCgToX3JTdfzWFsZbFtavmjaFMpquc5j6kHWrjX7cDAVj96k5yA9F2B2rV2fAvq2vGNmQp6ZomCzTKZqcbRJ",
  "key3": "32tWupu2rsMQLUNgW399rRApoxcm21fhkTMGzCptbUpwyE34fBVjf1Gy4VLigXwtxFkWpmZSJRSPPrFrFcuutyb",
  "key4": "ixMngqdtFp5onk2k5tRwicKTMquXVWoKZeNhHy4xa13AnMkaMBvBsdA5nu7cWL8g8zaG5zqPNvmjiYz2LXFLQ2q",
  "key5": "2eZpzk2wbxcqz6uyKCNaNYWbgjbHs2KUfWr5g9ARBpRzLmS9Lr4hph7WcZ179dRe6vZ2nti8MUJgb1jaCciwupqW",
  "key6": "q7yK4VSmMX6iZRaSGVYEpVKbvkw2w64EtZQxBDX6DLxXriVt5Ny83mM4VSck1LwoKuL3zC9HXSZcarfsG3DZV3n",
  "key7": "3UgDebRmuc4kpw8dw46XcPMfmV1SzS4UyfaDxwEMc5yhBks42ZxjybnF518TV9PP2HWzZEzzHLggpj7eoRFd4fp1",
  "key8": "5Xy85J1qQT4iY3hjdNw6GUMKhhbaUzX4ib4sw9wuAy2pewFJrPTmy3uFX4ZXA6M2RuF5Z7Peoh49nJWSQkQrLS2d",
  "key9": "vpMFbQ53mUfzMBC9ADgHPTpmb5Te3qKxaVETqim11RiFXDRm6oiwyuMUuhxdLDULNTDcKmGYiAZ3KKs9grE811w",
  "key10": "2MWiTeBLPgpszSMr96ZKmHsajaD6NqMVpDivscHiNzQBp2eWwaUk2NG3ZdFq1JQfWsJWmu5wfaqAbTC6y6p5hPha",
  "key11": "57UFo4qGKjF7M8ysvfxzD33ZSf9c3Q8dcQyDL7DMCGGeipNGiMbDEzMgwmfS1fvXsvFPJoMh2pJVbJYPcvnqqm4k",
  "key12": "SqhTayFRZZRmxuefnRUTPmtR6FKFMv36ySifKfHDS3d5XNijCysRwV5GZDUbg8gSsihN8Up6acCPFa4UYDhpbme",
  "key13": "5KzB1ve4XgNydRhSMEZ34irUPr1MNjPzkArR1YYHJP5jP6RVDDqV1cQh7FVgXAryX9Ega7CvdKiY6CKGuDEb91m5",
  "key14": "5TN6FT8uX1DgFELbqVc9nXAiZkHspCq9Y6yBdNE69iCTFahamcgpqFUYguN8jewKaBXFK9SEg15hZavFDPWnDzEP",
  "key15": "2CyBedu6RRmJ6hjiJCVU9yHnojZm1HzXAd91fZV5DbGLKF8zdtxdpMgfZAHouTyiQd2yEueicaXdBR3Wg2fgU8nd",
  "key16": "4XXHQnCX32GwDFMq1B5xEKLCguMUrnkDK8XcdXiUAz8L8TWpsdbT43Li1o8NPoaiRiPrwBf9nFTB22V3ajTTcKqF",
  "key17": "78SLmN2oMHRiEWW2Zo2hWT8acLDv7WteX44wk2g7fxB3dj5eLux6JB1DU5oddx3Mghj3UDfUtgWtAuiso5DGfj4",
  "key18": "2CGcyNraRVacEiaPLJfo7T2XpPyCRV6PZw7xh1vNbU1LJhif32DaH62YQ9ZJxhDYtBQtuKwKEctUT3ViXE5y5muG",
  "key19": "Gm2ESMpvehrBFffKNoUJ5i9SPUK2AXPotZVAj6DVVaESTA3s4aCBbjzEFPQPhrQZKAA9qvxXTXPmbcnZpSTLupg",
  "key20": "5YZiZhCjcjVF3ATbue8SPchLFVDqifBbchrwMVesy1PXGMvvH5ys48xQBmQZ9x1MNDcyKRhmrKTRpqBcKsHi1Jg9",
  "key21": "s245M7tG2sS4wPU8eF9LJSS4Y4yppDwHzQ3bQyDA7u9UKmpnpuAViCs1n5boMmLSnJZLL4yCxCEYgm5pd8kjEGo",
  "key22": "M38Taepy3PPqv7U4Acea1izisPxwgDgDziKrYQYbWJrC1u7tZ3S4kkKBnFB6nTgEdah69eCfg3C6svg9Vc9Mgxu",
  "key23": "yDmoARvNKJVdDcgsvS8AoubTBmp1nr7R1Yufahzm6YSi3XZ33iRbMgbNPp9WNM3K1i873et6ojbF8vqxhQxjSxU",
  "key24": "3tYKkQfpBsrgyTzygr54omTxfJ3jLXHcqqzuMupz6F733h46S9aAoX3VukZcZNaeJSTiMo94cuTvxHEeL7SXwpsU",
  "key25": "5df2ivJb1AfdPAeTR2u9DWx3Yar3oYUUSVwqHskRMfT3cRvJdAYm2mqdj1aGEf3yD2MHFH8G66ra3gzDiya91bW6",
  "key26": "cZtxv2GC2dGC4od3pGYCq8cn4j8uhryEc9VRvvq1hXwwrMvMnec7cmYJUMwJj6RfFhc9JX7Kr8XFio9xn6V4ypm",
  "key27": "53kkyxb4tCDWmbea9cN4dATcatE9c1KsotX58BhmVsT3PQYff1D5gecrMTax5SLNRBr2vwBu1nV4ayrJLMsMoMAe",
  "key28": "V8MLxWHjRF3FizgoSxJp7iN6qQhERZzgTbtQRSJhVuwvKELY8ENFUPeKFuZzwAiGCcbLu65jsxTRDPEtnmYTuu9",
  "key29": "BP9DPbK5rAuKd6wu6jjAWMWwoKTGfqbcXRY5i8hEeAnbEVjEGTvUnsYzhYDNEm6KvEgMSPo1aezR1KxnuSMeJC3",
  "key30": "5tLxAdNBvGmzTmJoZ3z6Qs5WtdmyXJpqza1dXBTs1K6putZrNNApo3jGkq9yGP5PCdku1hStrqFWcjFFhDAQy5Y8",
  "key31": "38b7MeAiMEHvDcsha9xCGWPWcLjYZaxHEnMAZzhShHk5NVFZm9swrDU4jRNGaGTCo9ZKP8foXwuh5L7Sxv2uUr1t",
  "key32": "3bRQSby2TapTEuoVoZm721XczgzPdZJmFgAL5VWX7zQNmExKcHhDdUnYP8yNCgSJBG5gaxK5Ug18sQVkLmK1Ct21",
  "key33": "sDQgC1HUDBQr9zdcJe5mjp18vWKy32Szm87EvQiXRc6A5EGFwNSPwUFaVkiqXW5KxABeQvVPxT9QVfhfimxLZ2y",
  "key34": "24LvmA1e1vc3vbcbjqfMrbCLq6Fy25apgqgiTyWUk4TcftwmxJadxDGKSSR3hWutRfwjcJVLUYpNaZYMUKV9j5id",
  "key35": "2ctnng7mAoxzpJUTKBL8SSikH91sPgHE6gXtLwBoYJtpVfvNc8AL7mTgKMYdBiu9t67bxXoxRVz3p8RRTKzEdwQY",
  "key36": "3Lj64aT7MYCHm2KmR46Fv1i3knVLxt6p9QRwhJRJKyGLiC7jBm9MycZdaeDKeRvcGtzKBvn3KHjuBH5B2qKdGPHz",
  "key37": "2PptqD5XWAA7nTk7q5ya8pbX3wAjBqPu1DvFmdGqstmfKLdtXFrTqVPmoWD1Rx9kDUiJ53qjc4nVUiXFYSoLY5AS",
  "key38": "4StrSsjbVWNwJHdQdsuCAhwnwUh1dPXpioSMmVwqtoDJ5jY6n5ZJ9HxdqEQLbePx326JRpcW1Wvpa7ibPJ1Czb5C",
  "key39": "2xnpEjqrbt1BhSigHYfdRGiA5muy26Jr2RvQUtTCZ9NB5M3qC4yzhyFS8c356XnY3L9AWY9Ci7a5kLkXFzBcjunf"
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
