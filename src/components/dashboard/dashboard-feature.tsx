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
    "3H4AKGkyJPmBgDya8rh2o7y267UPpwLEj7DZA4J4dbsVta2zBhQSiWvRcpijAtGsEVK6Qamj4r72rvWUYvUpurmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qU6hYJ4PEVW83sL8Prrm7NRYH8JhxJAsJhWfeLyCoFkhWJKFtrnR3d5wNo4zxqWnpg4xaW9uGEW4MZNhbnTfJh",
  "key1": "4mPVAKeawQSaRPB4Uv5rWfoFp23qfxnuw69V7Kj8RRTbiiq3dQSjZs7vzocVc39q9VpfLffpdqqd2sWG17jPoyy6",
  "key2": "5FtfyrnsxLjfSLU8LUSGvnTB6iKHoqJBqUErpvtVj4VEvYYAKwChc5Acb9wfPg4hXzpcWAT4bZZoFvmTm2jXmGee",
  "key3": "5xRLkBmdJNTauUU19EDHA7z6NWakEUNGheoxxxFGnWXAD6vApDTS8UejreiMjafs1QY8Ed3qThYRJ3Ly8SbpLL5L",
  "key4": "3xu3APbFR4WftNmmZXPZerYjnH7VbwReStq2uo9hCBRmAks8spRrjky7VEUdJfQHTodS7UHPT7g9LsUvENVQntx1",
  "key5": "586RdvhAKau63CZsVuy5riTrQeXfDYZxyJZquCg22Z9D1kpJYxiuGqprPw5qewXNiEMkH4g84xQVfvRZ3XJwi9ve",
  "key6": "8WWvegUXDFLnzj7ELmhrJGkWs3Tcc6TpZd81aGdzPQQmYVQemNy6UkuNAXMsW6pshCeGvocGdWWcTAaQsuzC617",
  "key7": "M3tG5vRMeabpYDdWrpBM3ym3UySvuQL72eD4kTu4JdJdgsAq6t3WEnhKECHUFR5GyC3DUuV3dKYPYKkENS71Zu4",
  "key8": "dETYJ45qN5RRD4NMQGTewu6g4obqt8TtRJLxFFzg5TGGSBnUjH5wuFrtoYJXVnARrZ7JLEW2af9KDbsjPjZqUgQ",
  "key9": "SyUackcJsmeW85VecW6A1xAiAB2yfRLRoDTojQ7XUXn2sV2ddY4FTpcms3pcYYEtDQzBjbvmuvSuEJx3UGTVF9M",
  "key10": "48KugkwLcKezzbD5D6WtHPQJ3TjX4uHgsWzaXG8A7QzyveViVk85vdeF5BPUT3QEt6GYvGcVMNGL78SzmmUEaS8b",
  "key11": "4YADoLsziP56tXRgwgU8HgR7mQ8SATCS1V2925imVA3ujZxn5WCAHA4ng7a9q9JXKHP8faX2hQw4LAhQw1SHE2a2",
  "key12": "5EUscvH8veGLaF2Fr2UAC9iTajPiyzyXWD8nVQQq2hNC6yA3u9yf1eC7mGc8HsQZMgprnNMJnQs37X2iJGpzhhZ2",
  "key13": "BXbeNNYYyFxT23R8z8gvU8jxJ22LfHQnB7D5p5MHPz6QdXwq3EHUN4RJ59roQhCaJ4M3WFoNsfSM3JtTKEUefup",
  "key14": "25MP3Smr8UiDdVB9F9z7npEtYM4RNBJeFEfqQuJcuE3qKw1mF79zmZDorG1pjJvTTc9MKZcj3wwg16Jb7UBug6BC",
  "key15": "2KVpRDMrBeUPDAzq2RLTpCZRM6qiZrrxur6B3F4891S8Cz68NGbHDdj4dbEWwxWHjit5Q78weNGuKQsh98SkZ11Z",
  "key16": "2giSY9as2RFH6fwFDTQmto8KKyypDBz6PT7EQqCKYr3fhFcWcXKpd7hEkh4WiZBooTY6PyTTq7wGzxiL41uGr8Bg",
  "key17": "5V4N7o6rd9uw28JdxtChBDi6p4EfbaX9Y1pTUTUMWRKJMNbFBGnbthu3j1TaPWDLdyEhXpCvaz12Ez4qeW9SWWL8",
  "key18": "5RetDigg3qk4pdknFjFjMgTDwepQvCTF9tBkvpjGUrsZ1L2q9EhitY5BkRFoWvmikz4K2ewV6XtK4Ws6ie2VJBKd",
  "key19": "22xSGxVfzAVWGQDERPVBEu6pn5iVZeKM6uVhPKo8juDJDcW3hcJUKGu7RsJMv7n7fXTP4k5YRzdqZ1pQJtqV896s",
  "key20": "bbxEoD1KYTdLA192ottKJ6eVuLC3s5aajjw1mRe8rp2KMAePGbaX5KbUhwoP8nCo26U8uCgrBacCgYUJ4xTG4Sb",
  "key21": "4FDEiAQKmhxQTat6x26ddmvn2DoqnZgZTmT1gwqEugCF28gy8KSCrSeeodAmKfGdYiCabHMgW52BQcZdiek6xHFX",
  "key22": "3ocg1szuJwZTJFxqmhVYcGQTKQvoZBHgS1W4DCZ9C1jMeLYKNqyteitcNcTdwbRv8HXSL5BPpEXUf48KEmqm35rd",
  "key23": "5vWMz3nCZE1T6yXdQC5KcaNNZDFspe3VddCScdWrLQS2ydiGPBLCgwQGCoG7tEKtiqYgyb93vMypoqj5cHEPDaAD",
  "key24": "5sGkmxpfbaNLCcNukga34mvNANxzi1wBjuLm9TxaTcdia9YaRQpMxNyJXojd2i4LqTMo6drMhhUwQMhn2FmR5fcX",
  "key25": "67YMY3x52HPyp8WECmwWQxfPmbf5hEriSeSAh4wj2PPw63sj7JD4a9qKor5JqHByxfF83b1SU9zwNrv4ygN95CB4",
  "key26": "4LJsJF6EaTdg7vKjUYAsAz9N2CJxjGusTeSpFCbWPpLzzV9xZeYY4qXunwbyvjMkG5Mv1TkxkfxGmCozwHNduCtR",
  "key27": "5Xi8RitbWB1sQ6ocTw1XFMTZGzAdFoevghjF6j2JYw5uRYFs9pUjunQg6LCQsLW46tqM8GCBSA492wQNgYtCB3Z3",
  "key28": "5KVbCd8AeaK3LfKAH7gJ6APq15G4qQ2PrD4aWsXRyFzKoydctf236WjBu5JCAs4LNDy7zKc6aEAmeLti5e8MmXs2",
  "key29": "2PqjXaYV8pSJsFDuYthh193pW18sBVdqn23pDAu6vU2mQqQGmF9SgW4KFmVFjcdx3z4zRjiVrP6gN6FenzqBXYYC",
  "key30": "2eJ9TPSB7mdvDM3LmdPNjutTaj3S6TM4XDMZj1KnZRDmEE8bGdzxxuG3HSeQTc9Ap5raEEtYVrWvxDAYH2ye3Uyq",
  "key31": "5KdyaeURGqSr6YXntwRRnZrLwkdXFD94XLhg9tcFmXPVpM7TcrCgqFehhZtNTTcXBJGA1nuzNqJND8UCGBjHZkjS",
  "key32": "5NKjnTnwGBhYqN8TR83Daee3FA9Ek6ZgNKoAhorXFkXjK8EUCp4sdrDFimNpS9JdYFox39nKBe5THsLDkGEFtjHV",
  "key33": "4uVV5daqcNbotcCnZ1VNRi1JKdGhghD288aNFRQDph52qzBD648FanLVxZ2LvLes5ixvedpYgpJRiMvb5Lgr1Cmi",
  "key34": "5soZeSqCMBpT1LGqzZZKL2kMH877niPbpLGAZGHGPhN2o365MiryVr7NnnWqLRHBMZhmwhcHFHwpTm635ZPSKxiq",
  "key35": "489z8CohvDMgeQ9ohKgpsqwTaR6uzbb41HvePiowgfRSVzYe5S1A53Fid2ythEetCG3JqCCZiJqKnSW3uGC5Ns9K",
  "key36": "4VkB6jba3rmExrWZcN5iEPEJ4sbmpjPE3ec3QQcDjbaktou1KVQBwRASZizXAjWvXAnzmhXunGfRUzCbXDREtAre",
  "key37": "o6GafxbD1beWxmdGb6MjvBEjq8DsLbcxPfe63tGVcMKBjujDYh9Ad8iTzhyTb5rZG7icedbYDC79JNdJwo1tFau",
  "key38": "HDu4pxTo3qHkcZWFafdVeo6sgmtb8NGcoKTT5fodZSmo8dtBMXsMKreG5ev7PTtCCBeJrWDqPYcVQH49VysJP6P",
  "key39": "3Bwfj1bbcs8gQP8DPH21GVfWdQxvdowwYVRRDDqcZ9H5q1kB2Wrew7pLMy4p3PWTgUTXCQDBGa8DXgp9rf2kGgaj",
  "key40": "2ibGvfZcSRfpuVr3QyTyhemHM4NEBSigPomDtFWJzfiaZSQvwtiyu4GwH4ouKFiPQCvo6EYH4h2VvLsHkhcbQMrX",
  "key41": "uDiA734rJeNVSH3Tv3GEpwsRN3mtmM91sYTZYyvi1esBUwHyu86iv2xML1tEH2CocV9rYaY6CSzJXpGnNepdWy9",
  "key42": "5AvbzAsCnNXNm1Qa8vSjswY4Zr36UdKg2MM9uuHidmEViU4EyS33BhgRHmrfGaLtRn52fPMWFErtRZeFNqGgBUPp",
  "key43": "5oUCfaCZ62JHwZA6aagDnmTN2mbBZdDq7up7vEcKzgJ3ENm2kjcbQBLgTzSNnNx81s4jTe8m86jq34qKgQCXQbqJ",
  "key44": "YkRjWKcyaQGRfSPWKRpqxTYDHL6rr6ABTDN7ztppZuzWFXqS6AJ4UpNHB6zMbz2EMnLzZmwysy4wJ8XQJKGm5Vo",
  "key45": "gdHX7ZU9voFsogxwMXgNVefb2m4KfJqRfsvihQomvC2LV5rm754TCAhDXce7w4SJmKU8Bi1uJ7g1ftzorQeRNgu"
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
