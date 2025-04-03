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
    "2yV2Um1BadFksaweod4WTyYdJToWYt772AB1PmLXhrTJ8c5RDRTzrDCWpkBW2Uaiu2DkTH6shq46Hq6Avt4RBJ2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShTXHmV3tm9cHrBET3kjLtebJ7i3eaoRxsu9KBA3d2A379N9b5PEnsf5gyjmQaJrw1crpYchFJHBt9JrETquvz9",
  "key1": "2gFSau2TJgWi7yHEFMnqaPyDdM5ydX81z9jGeBnpqNoZR7mq1cEF9MzwvS8mRnTm2bT1wYRjjjrvNba8hasYjkhK",
  "key2": "CRERi6gtcrEGNxyaFEP7z9EUx8GA5VBadeCkBiyYUiGyRQLspQxXsBqkKNy9pj3K9bpXvhcZVFkn5ffvrvNehF7",
  "key3": "3XiAhSfhPYine2zm53MUSpfc27NpxaVdJaLwE9Md5PkFn8PNPS7vTKuJZxGtqNwQ5hfMEQyG7GvQUvYCZUdA5QUf",
  "key4": "5kMSDT63rV9N97wKpyxwkU9FBDFBhQgseYgt5tbW2s11L4kAhm5SyojpytWxYANL98KSmtYwNqNJFHJpKQSatzfD",
  "key5": "5reL8qRT72W9yhpym7FcjZkVKGCQ7EsZLQjZQsW1supjzBfn2A7sFFTM48zwiikuyBMvBEjLxhX9FfKJ1YTEg4Wt",
  "key6": "65oMSnd4kuys4mHHkX9b6KTFip16g1bj6tSD8rXK3DYpZfGY17VtUHNv8VVTPvXoSXnuWRhWTa83W1AyU33MjhjG",
  "key7": "49xp2kHj8dJAyXxKXe3YGjzz4LMzQ4HZfMo7QAgdecSb42mbLwBu221Bd78Nyu2SUK9gR3mFK5RTygEEcHvTGbT2",
  "key8": "1LKYn3kbPdXwnqsYTaV78ykjZPjqzrzmGdRbrU4pXPtb2Yi1N3o5Y5LSSHSYougPGvTa8T1cAYTjLbsUFNY1qd3",
  "key9": "3M1bAfy7qHvmfK4djH6t47suYUW5V71Fi6ockKkAJkcfXfKV9tF81fYSgwam6ZN7fPXnvZPgVC5vWsMcuMkwBBu2",
  "key10": "2cSgwUUkP5XjMV9j87xTtB9yzaS44z8FYc9XrVqjNps3qaDLmaTTkdN6YrqJe6S9ioiQRJ829aE5mYgzERudqnpD",
  "key11": "5MCYsdHkYHsz7GG2AoJkv2UCG1nmN3TvZKnTNkvoxAVDAVods3rTgQWTkRiCx8zn8Jn2DkYZd8APGAtbFDxsWC9U",
  "key12": "5YTXP1RQxaHFRK22R8qpZKPKpQyKoVDH8Lh6ugVakfJ8ogQ2eTWLBc66jDBjapvFs1pQP4C9QfUB5RMU66V1nanq",
  "key13": "4rmCkAWxau9LQ1UvWVUPseFutPHRoiFjaCvGUMorUL3pNQJ2SK4vmRnE4JsxSKCLjtFa3E9gkAPNM5nCwg7QiCUw",
  "key14": "GvNtrDuV6ezyD5ecumHZnSYYxy3pXRkU5qRkrEWjVAG2cUPbgD43s4CEg7BcW7zKi3v3d3zvZEpyZEd5so5amEo",
  "key15": "i7NtKQMVipQRJAzSmFTUQYU91wusoKZqaxd4W1wHdkX5vBymPEo7KMVvJi2vTg91DB75a8qJTFB2bSJEHGzjeXi",
  "key16": "4UXhnef3oYpu8USbyayTMLLV7oizg4SGdTizJQxum8V3go871ofkDTGLEBPBmAyyfjePFpgZf9H43J6JxnFnXrCU",
  "key17": "3GKmeNgcFSC12hwuUUbnzE9cFbmkCa9hsDvkHAdsi1YsFbKYGA7Ghn3ppSg3gCc7KU5UEAw9uqdNryWvbJVzNZnU",
  "key18": "2aGivxEu1LetVdCHHpfkiYRexdhN3AD5pLZbKkLJaMVCFvPFd9PNXnXVo7ehFJghXcpt8Ekbgbrjjk8eATAppB1",
  "key19": "477vYsVoJWB9oAxCiMX8eqpDeBEUBe5YwM4kBNQ9NAXtDo2m3QfNLrXCtfVsz8xYLH4tbELY7JmCp4xzheTdXkrb",
  "key20": "DbSwm621DsWk89pH7DgPeoM7gVsVtNAe1RuWLHo4VLY3LFgsevq1ufDgnMwr1xmuF7GPqmF9jZvxpwANB7QdJoY",
  "key21": "kuu1vfHqA84s8z65Qb7SRrNZxeShhcydhnVZ7PMHW6chWwv4F8kPzgcGeoRWUaP4MBEk8XTocR56mJuwST6zUUZ",
  "key22": "38cdt21TGyWrg1Wrzs1Y1WhWhTWJgTcDJYvS7vMrT2ZiQ8gCZpiHJCNueJMvpCFkyGDtPdYfYakByu4fPA5oj5ie",
  "key23": "7SLiyJy1Gi491J7hzKNy61qKGNAvxDVMuyVVAAya4RFpqbfUcVMfWZiWbsZAHcAXYF9bDd5rmbMC5VgELfnvSQh",
  "key24": "3qwnPpErvymDKkvrxH3Vq4VsEXAqQCQhijPitukvN7PfrA3AYabh876Ac2RBofUn9CMc2yAAp6WJd6JKRQ4rSn61",
  "key25": "4a5hhMZNTeBQSkJJCtgTuDXvfsVeYKtWQ3peQ2gP9jTyePLGSyYWLQDArRaFZWyqB3arVqKZExZ8YF9gMCCLfyED",
  "key26": "3nn9GoSAeJ7qghm4xJroaTkJnqcJnoevgt97n1rT26HeCWHn36ZBn2Eqck3kUUKirgyoTakMbesb5fV4cDwR4Bt6",
  "key27": "2GWzLPW43naFttbo461dt2QFGYaV3m4zSN1XGp1jkgbawcz4YH29NZUvLnTWvtXMoV2YGf7KQkcQd4WJRHTSqpUK",
  "key28": "24ToWrHP48Eo7uTDNUMkHW4yeSc96ENwSanLegzojhQ4oQ1a46JQxHrWPqdyk2Vk3CqUfjxm1Wns9XSzfzEyD95E",
  "key29": "5QHS69bpKRdMJt8eH1hk7YQ9zHaj6b32NMxRTk6G16DZQnSBf37XUv1B9pgqGXnie12Dtw3M1UCkNXp9aLnLB3S3",
  "key30": "4D4iKmiGXR4xwoknGVsxBpyTk995MpAtUWtfyQQ46Ssht6pUi9YEHAZ82nKSwBHZJj6ZqSdpJFpb2yJwhF6NPvJW",
  "key31": "4ZehRvp9nsJ9pE5VMERKY2pzyLXruyEYiYQkotuSX1u1dXkfecVqZfBfSRfneHeLPoj8fZdG6R3X2JgZ1N9NftZD",
  "key32": "3NS6momGo74MszkBnC6XkWbXD5sjojnumsnfBjmK8n7bF1cBn7nvaCDRZ3ijpixebTW8VPWU2wsExUbdDMaEZhCM",
  "key33": "2ryB5YJfxT3wHmXaBGeWpQG6JmrciDV1KY46VX3sDdNk6xAK4p5AE8PsGX1zofTLrnixBWyRZWAJZAVhY3f2Ldzk",
  "key34": "RcxCq7hVazJayD7QAbt2vJRZ7ZkJBudB7YL5JWbpfK2qHpq6gydtEEatKQBeVA4xV86d5QVuvZTVd1GuaUQZmbp"
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
