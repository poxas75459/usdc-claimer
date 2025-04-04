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
    "4YJj7QNhhzXJAgrcwYcpq3QNNsZy3RShoU8tiAwjGQkTZ1p5Nf6nEbid6WpKvBLAwMv6eMuGcGs4fVCZfeDqHmhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwFoEmAycGZCZtbFXJaTvUCMoAPvtkwVZQEAWoRgDKvJ6fEmHmL95BoTDhyat5VBxHVtGBNyKQYsZ5PKUJokFbs",
  "key1": "4E2si7DX9nSmCPoAuaKxmD89fjFaVUqsxWkFLFNrSBY1iWkz83fWS2Sks5xKNw34nVPBkFfvQBaqsBXJ3vyEuSQg",
  "key2": "64ivYqGfDWmVUX2EttVHkni74846VaVntWPKKM2nWCq6imBxZhSFD3ce37BvRPAFptsgQd3SEcaWN25YXy8uHGcX",
  "key3": "5jMXY1wTqd5v4DkNoWehHZKL6HdUCqAkasyfyEkCRAEq3g8yxFwz1LoEsTrk2JjDS6SyK3wpm95VzinRotDCNiyL",
  "key4": "63cBjBWv8urqfcuD9Bz9thHZzqhi39PLdWV3s5cEPhM5QF3ZJoy6xohTY1ZcUvmqjQ9Q2RzcvLUHMWkpgHZQ7s1e",
  "key5": "CLXzXvCFgECPs36nxzma84paWoRgukLnKC8pv9FhHfDaN8UHvuvmU7mAP31Axuo3ncFcFPeUszfsdEfCR8tvquu",
  "key6": "3F3xjrwCoiPBg38Vyk4RMkc5drJavUMcwuRZzvYF8xzXspJGDvojLfaXEbFchhWDpu9fKttvebJ2WTyVsZHfnATq",
  "key7": "pmQxkQQXQdgA3roSkoqfcAJs1jWYFUQfSafeeCZ7zFRquTNCosc3K9x6WoiW6K1wUiw38H1FYmcDnNWS4B1Lkmv",
  "key8": "2P1pHHmJasaLKsciRfJsXov85AbziYrL7L1RwbSJBKmQepGcW8HWHFKavYaJTzB3Mg5VQcoSqWLhf5eztaaX7qcA",
  "key9": "5t39w6RSHCCTnqbUJ2Csb9fSE9uVoWqovjAp7u6Esv6gcWUVH3ESUKwdPkEcPFwezhiMMzxNiUH7bJddJvkezDqA",
  "key10": "24QAEyuU2knT12KvCr9dnfXtUDpCxkg8TBZR4NJikNbDoenwWpytkRbwRGZkaXDFeqPhxjN39kJfvhHtRSW4wPee",
  "key11": "21bLwwrrdCjUNsWznoCC8SHwdMqvkQwKFNeSd1nJMwtYMYuZjBDKvFKmKZVvDSbQqZFcueWHJvk4K5FZmksRvZ2L",
  "key12": "4kgGrpz6WgqD8DKmhFTLLsBGQrTVV94R9wxFU7jQWWN7k796JmvxsJ2Qbn5XSQhJoPi1RBa6T3uTFkzhtjXgonKo",
  "key13": "2sdD532zTfsZdxK9EVZh8QMjCueNA3yMYYBSbCqqgtfsDvMaAYxDKYuadsvMgz1SvYTPUk5Cab6Bd93Su4hVCuMo",
  "key14": "3XxruRwW9NxjedfsNd4E47bsSfF3iKwczvwer1EWVGzdpncV9cAyv2AfFUkacLUjbF4MCoPgNCzxWRRcuMCoszF4",
  "key15": "1fJkR8eXHEDHx5Uan9iLuRYAwmX59RtNSNTogYsiBuQDxetfTy8dLoYAPxKteDGkeipfVedib2XuL42rKeuygzQ",
  "key16": "XFmVe1qM29UxukmDzo2fhidvFYTTtj4ccxKTypswpXZMynZMcHttijQ9X9G1FBdwAUjZ4geUfP5VzeqB6kabaNV",
  "key17": "27GyJ3jGzpUVC5UU6Aoz6Zth7JaBMqS8CAJPsbDDoqrYELyEKaRpdWxVHkFtkd4c7eeyNWVe8SZ8kNrczP8YHyv6",
  "key18": "31m77rrYjk9qwDzCrqsgJ82vuCHGBDwG53i5M4rFt6QphzP7sRMVFDrYCzR5Lz424BxNU8ExbkhCpqRgim4oSPdD",
  "key19": "uG2qEThmeSejuJo5c35MsfmnFUDwnofumD8YzSaB3FzDN7tz3tn4reShyuT62ryTrgVEZPChn6cJYQSaSVAbcnx",
  "key20": "578XkRedJUD2qAmc35TatXTGgZWPsKkytw5rGmdA6jixzMwzUzVrhmCs7zF12bEiXdkv9hd2UMjB8ifNLPtP1aHT",
  "key21": "y9sxEv1TdW5PLDLgPKcnuYcYGvfWeygGM6S83wjTjiYp1Cwa3v2qa6UkxsMwhPn46GjzDytzTLMoDo4GuuFm5NK",
  "key22": "3iPkthU2rK7bCqmfvBzGcYtWahDtQoTa29brCecALybUaoK7rwkXGhbn4iGXCfbApN6jjdSBxTmKxrszAeP2bCub",
  "key23": "nugggMusfF8k1AARoGTxaKvKGh3R6qb4m5tQGkJZFuthCaYx5kKf5L1vN4CcFVZVrfCFMzVh7ddRM5iHzpwrtqi",
  "key24": "5RUjzDxj3hWBbcMDoEXqj2UEXAoXCR3kf9mNm7bcywGhSY7H9pXfEhQPvJCBwE2n64uJQrRZsZ9XiQNth9cnfDQY",
  "key25": "4CQ1fVXuFxN6Jnis3qES3rNnYcJuEHtbr4nWhJjhMnVocueG9K4rxtkv3maTLspCRiEhsHtcFLxcS5SY8pcLZPtM",
  "key26": "KrVmHwTDutgcdkgmtfqJQooCXFmF95CJCN3kprTzKd6RtK3dSY1bQBa8sDKy7h19ZLNKe2fx5KbDe8Xk3LViwqr",
  "key27": "2iZXmkUsUEzRPKcjvndK5LT69YmENQ8yW65dvvJSnoFrvRNPHLNRs1sEwCncrp35o2e9N5rp4dbwtKPamNzJ9hqT",
  "key28": "2HmhkAemWci3W6Jyv4GA7db7Rd5w7BAhqXyg1xUQaYcw6tTgPwTcwUJNZenRsLYAHZu7g4R7LMzQmEY59zuDZMBP",
  "key29": "S67dcGMwWj8eK44uWccPZS2tv4PwfnWVatzZMF3AsDGe5YQC9RNXYZSCFRWbg8V2SaRhEyG46oDUwGqDy8v4g3o",
  "key30": "5yUPrUEoBUGmYYSXAaJWVnwEmXTz6jezoTKKxvrc4uc9HmRTkmdUhN9dWxq1XDVKmMPAbYMfvRQ2wx9LLB9YY2dP",
  "key31": "3LrUEceAjx9TRd157kjkPFBgkcGfYCVdeZfkz1XsBN18DcawXQXTqyz8mwSkk7zSx4nj1FkZBzZQ8L77PkXUoeC8",
  "key32": "4YeJ95zV8sk2jZLwETptMF8DdZSHqGeh3gg6KcWxFQ8vHF7Ly5gnDqgJ7GzUT2ZS7UMTbMqC8avEeHfVcTQoWzXX",
  "key33": "4mQKexzvQiY7oacgXob8XZLoh3j61EjdSE5mqhrcvXBuHstfLzVWiWW1qKMspDqF6HzoPoviAP8WdhaBB413Sdyw",
  "key34": "5jVSrbFTijuhxGhqiEaqSib2UATPrd2xHagzMa1gWz6CkxM5KYRjqCKgnphiYThsBtBVc7F1rpdXfdmuG9FFK7AG",
  "key35": "4874NPFS3AEW19rXtqMuvKQTz9ybJjsCyeVnN6r7yi3hkd1Bn8mRdLpj3oLNVxbQPLx1XK51n8FbiVFGS4qkU4L8",
  "key36": "5XKaKqkMS8seEbM4hovBpwc48b6FGwP3eNHFdWtdmFs9UFYSnRFzKFb85guaVvhaXoWYzhMn8kLorYAgFC4yR2Wh",
  "key37": "3C1urhQCJ8jobcJK3XGCwTifJewbzFgoj5Ewy9NvrWAuXFp62J5ncp7Nd9WYSAqfX4RUBt1UXwHsXSn7VY1MHifw",
  "key38": "VznDihCjzRAghByKKtWeHRHQwYf2dfGoKsbxXcZaBWrVQQXhxs7wHSm4XNvB1TykH78q6PDgp6MGdv2Yzp5uwY4",
  "key39": "5h8iz1QWaHL6zvN6jPzhEstqohkwY6ccvbnnKvbv5whvf7XhPBHgNY72w8qB7FvpPCiKmmkmVjChxq5AkWnXnkXC",
  "key40": "4FPDwP8r1Dq6GLe3fFK27J82BiVuwBQP6xcy2nP8epzyLu9FTbYkprKVKqXrkxkBqNFiRGvzGWZd6nwEL2Dpgx1S",
  "key41": "fqcF5fs8CEcKguGhxnYHFURJifiEK9eosthdahhxq8JWkC1z54DSLCdRcmv6KWm4pfHuZzYU4uB7LQ37h6dSzzP",
  "key42": "28p7tQmsn56RsfvYFYdpoYpouJ5z2vBNyquEGVewYsAZtqvAcQKWUeX7kUATd6uNLXotPextsX8gaqaXpKdY4Ti3",
  "key43": "3qvM8uWcWT4SbfVJSZSwqhdqEKH9eqFawfSZevPHhx3Au4bGXncmosU1rzkwZrd5ro7HV2mvUpNcMfSctAFeoHzs",
  "key44": "5iiv5kifUjPoFs7PDA6jPSmuMsw5Lw2yoJMNP9ZCttEdM9Yr2EYPXudVmFvppEXJzaC73VhPBemLEyvujQpYSVvr",
  "key45": "XqmNb5KDbm7TLPj3uFyjsNAktrGgH9JB8YKhfUsGbFfE2cbXFtH1qqYM3iZgBG8mKRDENVZYLi5ZQEfkbrHMTXv",
  "key46": "27wxvWQaTiYn9U1fksChgmtdhrb2zqK7WXYDZC4N6uEDF5RhufcBg1D8Z5gVi4ijRcoX8s19WKbDkPYog9eJXTRU",
  "key47": "4g2URByPGqrzdsg1XzvcZWxoopnAuumnvTa89dzVEpB1mUgtqAUqb3Ba3zdTPangAs54RcnN1Azqzwk1jLyaPCxd"
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
