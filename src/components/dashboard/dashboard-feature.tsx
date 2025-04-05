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
    "4Rg77SWamPoaW9z2FsqoDZLZ1uViEqarvUAF715nZKb38o9xWXWTsYUTGLCAfUu2rJc2M655DcYLh19eqNi1C4jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vUWYKXPfSN9xHGMmR8mbUURnYGskwQWHDwHtGw2M4EmzdKWbmHLKx5ZtDVxqE3fJGDwobxzCWbNwAiyTMKwTZz",
  "key1": "4cQdUDLVCM3dyhTkYxwM5qctdSLSRRRpiFAqNhwYjabKmb8oBFnSDDqDXMM85VbdRXaaEHZwQEYQJW5M7i2cvCzP",
  "key2": "4dTH2DZcXATi1EVZDnqqVNPt21H6QZBnYyazc7X38zV5x84fPTokGEkMdyCGv5epJ51tpNjDTmMhKwNahmdPUR4J",
  "key3": "4rUSZZSM8dTnnZoCC7HXvxgS37fLNchsncSCHiivP6nZR1VNcNv2Q8dejWtgDFCDj1rPtxnBCixtQ6TapvgAzi2j",
  "key4": "XV6NqXuMAkgqsnxbqAEzk63Qbbjhv4fq43eDRio4yipfVgEv9o5bcvFHXDE7AJ8QmhVsM3a35Ueg2qptnmhzhiv",
  "key5": "4YNBhtoqdx85tcyLsPxbHcm5gMpHA5KQPtHiZPMu32TAerbYTru4eB3aYVzoTVqXWJ6waUhLaVRJZQ1oEeVqNCs1",
  "key6": "5MS51fgcBoQaChqu1VmC2MRQKoZNZD8oyZ66DaoxgX4UCJM9xqo59tcxX62mnawJzujWfzgX7rH4sKvzV6JhLq4w",
  "key7": "26G23LLE5Abo1zkFXLDSrUQM7QSomCn2MLJdmJErHJq3qujjNjVFUQm7uboppTfyKcHrzBNjKvEcQGsHaeZ289DE",
  "key8": "2tMXM4bNwMjrirLAdYiTaQ3inTZqGNYZP9FH75MSfqQSA359eW27Dpzaw6yxNtQbxKGPkgVvgeCiq6QeVjGsted6",
  "key9": "jNeD3mxsEA2dFMBFhm7FbB97SgUAMw8Y1nFsbm1AwVcJn9P1zHmBUW2snhraScAEUsXrMbZGhuuYQTxx8Go7Zwd",
  "key10": "5wyWkcKp69KetiXPLcLhPk19Br4YoQcpKS7EzjxwEyYC7xkicTTacN9EvABwc1bHbLXjQAfDM3wN59K1gZCapyHf",
  "key11": "4haZrHEkmujKCfQvX2LPggZFFdgYN1GmCUJX2etByjpyKALqupDYAZKDuss2VQCdiLU3c2fmJ9pojEFGKaJavuXd",
  "key12": "5Q5XVGsYfNzLVd4MMptB4vM6BUoee5GgCF7t62NSWzrEf83fCBVTiSHwdoVX62xsCX4UmzHbD6qVWUXHQVHxZNoQ",
  "key13": "5t9rbL6Sg6z7byo9rz9Q21PKW4htzoKftgdvWQQgCeCuKLrPiobDR1D2Tu8WkSkf7F1uDSjURriphfn2e9PvuVkE",
  "key14": "GFNnAPgZo52xFGVdERKJzjjoyXs1oedfkfsND2t7zc7CjDxvGZZTwJDmuMt48ZxigLFSN4L4Bwv5yG8w3xQiP4F",
  "key15": "3TjewAD9rkZpf2Tq4bobQcmNUWVC3nbjhzXFuGXVg9DZtdCwDccq2bpdzkReSgrtbXCww9xKA6wAzs1VWx8nQZ2n",
  "key16": "idCVYUGMKWiRzBR3iqR3BS8kZ6HZ9KtCApdzVeF47srUD7h4ETQqju4udo8AVrjtfTrLahvZc4atxS7G7KUEbGE",
  "key17": "4xfAiVJYwxePvPAis9xQxWTTvpwaSFcNg53MjymLuWoASqZ7eK47DXGvrexYcndbRhDeMsJhmQDndijDh9FY3iKV",
  "key18": "5g7ziM7A82xVxzBaguTU1fKZb8gyga3esL8jRZmYNJGPC7H1at5uKitCieZXweC8HjYm52TQhwqDXwkyuxWG47jG",
  "key19": "4RdGzAT1bH8jf1FtoYELW64mRrq2jBBxkqTpxMJHzm34r8vqYhmA8hsVCRKoFQsvbvC8is5HKwywKd3SgYmYQYKR",
  "key20": "2j43UrjCdmdHkoq4v6SpYWmAMF9qLmWRBNaHaU7xeRANgzJqq127DQVNAxJPXre3iSFBcijj1njipmVHQ6UQ8mMf",
  "key21": "2QJgQKyAo8734Te45WzvUzghp9ywsKfSWwLXYtZ5QztaGCGz1ZKZHa4hti9JMzJicNgJg97jUchHtrz2PwbKgdJy",
  "key22": "482Yq55JprtLfaFpGcHjq3F3kKnv3AwMgEs69oMxnYiMXuuiQfVoTKWBKzRXGiVn8LcARHH5V3DVGA7bnCwvbyMJ",
  "key23": "hhtw3eycWDLPDXvdREmnhueA73N3mHYvhv4pU7SBDXqnKrh5Zc5mhSZUzzW8Xoe2SwB8kkqB2XQFvXwiw9QYzCz",
  "key24": "E77uc4ABhaW1fXFxafnC4tG5LavTLjLs5AYPfQaHdcimjWggh5z1M9z6exCTQBKpxwyVNANpwhTM7s9DUqZujos",
  "key25": "2jjRJ6Vep2ueikT2JHyKKA2zw4gNu3wNpoiQe7CwLgyBNjunTvDot8c24m1M8PYevUJ3q1YZZhhzDdekKcuedofm",
  "key26": "hxc3vM1LEA5Hyysvy1qBoiBZtCztoVdMunnRcL8LQUx7AjBkE63qJT54cLkm1d2tXiVfHajRdUxhpc5oZno29zY",
  "key27": "LLuUaizTboHxuGBftHVURj4dzs5FhgUWsxQYMHBudN3CBDffbLWqmWVncgimDbA7vFWx4JjMjbKV52KWq5kjTrF",
  "key28": "4nLD6F7JpXMRGSzBdSYvYZSksbNDHYeWQWEGGDSqcjNBQK3d6BAZJrKudQtWWVymQX3U3Gzm6o7AguUAuAZ1aNBC",
  "key29": "56EAiqA1P8tETcmUJwkQQkbWybTBGyd2s6JbNV39kEUw6hrYmiKDbQpFTBNA3xDx2bAx4APp97ivNz8mQVN6TyQY",
  "key30": "6ZzjwMSJXhTvUQWezUYqpYd5a4nru4mhGkKwMuQDQtdAse1yGXfJ7oz6o8rNCFFXhRGyf4g76pBtqwqHZEDtp6M",
  "key31": "5B6iLVvBPiEjRHHCzTwcjqnYzP67gaUpwZyzjQYqNw8geCHzt5zbzxGvZDRXSTKnviU7kwksxKSe85e9JDrziqiN",
  "key32": "5EsFXUFJXcFbzMkVBdBp3g8MWxkAA3ThZM3rrJjJrch52byHNQiTFPHW7jtvNmQuWgCwZ7mMo6Z15E6jWfoRbMUm",
  "key33": "3A4W8Y9N9ZDKhZMLwnrtULbY149kcKUyYYkGJgaA58N8gFjFDNbUNDLjTAV8UHgHwJQbzf3vvPHGRLVeD1kg4pdC",
  "key34": "ACzGALie72JgXwj374p4WbHpqRNGwNtyFHAgB4GzrzwzDZpCHo27awaX9gubkgGh9skeotdb9gRxepGb2jM15cL",
  "key35": "4os42iyTMc6uopSrqgYo16oSGaUD5YHnNWXFe5DTSYGFRMnY6qiARwY5d1wZjxkPL191Bvwbza5ExtqY5wpwn1fg",
  "key36": "292e5XWKwiCUUmwgC5PfbGq4Axe8dHdH1Vw7ngstjmdVo5AeBeSEM6HdfCHNcUHkzzNyUx9jyXNSyXbgWtLzi7hB",
  "key37": "3WfCGMyQe13krYwvQgWU7hzSpmk47uHke6Gp8Q9hRp3QQSNsCYzejU21zMuqndVz7cytWGBYeBhZmy16LnfY5fmy",
  "key38": "3odnXWbGznkP5ijNecSnLHdnhuYMHK97yuiNbU9JUq3CPUjC5XN6rFdxn5abGdNm527Wj4A57CT5UxRozUjAxo36",
  "key39": "ghLq7La9t68hNfJTaUsThbWiuKJVEtRdoq9jTCfheD4KmEiJhXgJcgYahyP9heL1LjX5ZC8NgrmCqYeZmAXMCpn",
  "key40": "27zfY5sJYzhLAcxTdQwsQDENmkA7CNSSJrNyPsGQ8Vs9729CvREhA7Kc7JKGXGVc4Vjh8kB7tDNsiE3qssPrisRx"
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
