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
    "3HcPJ5pY31ovT2MPw5Bj7pMRVtBGYwqntsjxVC6p7QaPXjPPbKYZnbqq5Vbpg7cRVoMG263EnGbCxQixewxBYo3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7YrsHW1GJ2DcLNvBCkuREJ6wMwE3V3dTbt8P26zW4ZePvgwRpf2BoMwH3Ts1bp6SAAELPvoSkuTrF7Sk8hBpHp",
  "key1": "5EdiZZpLRNExq1WtjJBVHqcRo44fz3nDYrrVPec4irJf8oKtqaaY1u7U68BfivMh4LeHhEXfwKtG2rGsJjy5EDTa",
  "key2": "5gQWwd6A741wL5wKWE4jrDdmKK2hhMmYQedoxoszJD5wpM6BEJhCWybjYHr5fcJh8R9FPrrTybufuRc84ytG2vf3",
  "key3": "2ooqkwg8XZ3w5ziABkkWiJK53eaDMzFodsp9qG41LTV6DkT1TQtP6RyHS2DnL3Ds5Q7b43KnYGSEwXBi7cNDCMAW",
  "key4": "42M7EuUj9gHV9hqw2EPddNtD4RM2AwEkWBFZ8HooLnAt6QMn1f5F6esd6Yun63jaVoXWCtxP2LF4eeW8XHczSPqW",
  "key5": "5ZJd3DUoKK7nQ5oCUpNSJ9i1vs4g5XYRcGXYvDBEem85UmMYQ86bDPiTkxmquh39MCUv7nuNuTWz2tpfdwMnGfyv",
  "key6": "5g9k5ePs9mRZ542Utc62bq43tNYHRnc6YWBCNmVGzDApsEc7JpVRdoMwhcKiH7xcCVVo5uTKuCDEQJtaSGmHAgMv",
  "key7": "sdrenhB4RxCwZ3HPwrEZt9dopz83zaFwarMJMPMuu1o8bZ9G1xsVK68xpe7jg7irkGiFYJb5D79Teh2RgbKWK2K",
  "key8": "3NpoaPpd2oR3gG7QZnD7ii4W6KisoCJCxuYX5zhWRMBSCemvWV21WnQwPg7Uuz9HFFz2fCG6skQxVxZfvd5vB9TG",
  "key9": "3rw9r1wSayCNvSB1acmNamv8SkGP1qQARRNoRqUsPkHhQbpDDC5dpdHYJjeTfSSPrgr6WvZTYNg3jGxPMFhaFbht",
  "key10": "5oAGGcbgGa4tnN9W2HZLTdgXz9sT9qxt8msNeWGFZ7gLm6yGnq3Q7HVGxnsFYP3CLwLdQKDtEp6pUNuhyQydb8A8",
  "key11": "ovwuyy8Uwx1nvF1cF7swa9XS2QgNPiFDiL4j7GnDFLScaeUoBy1RC8y7gykdaPanF9bqAu4cthVyR27hNNJTNH7",
  "key12": "5Cqv8xdYo2UhLLb73ZHrbX7X1AM74ZXYjv2BuQKSbivkpEZZmhg8NTA7xGMxZzKVxMkXUoE44YUmXU2UNu7KgV4k",
  "key13": "4X3zCsAsiJo4w6EifUcajKRCQwvCn8fTeSiQm96TVCa81Gx68ZyGSs7Ad3NznNe8gXLoJvSL4xpaGEMMWox373Vd",
  "key14": "57nb6szj4TchA6csHXCCXMYu4srY3EdEo7PLZDcYm5R2AazL39GXrfjYQcq7v35eKAy1Zidh4oVkQKf8N3byY5vF",
  "key15": "3E68hw154sWEp9CPJs15QJCT7TqSYGRcB3o84ynto7cmznADeK9BagXT5UNC8BdZN7H9p2GLj3XZ6QLX3rFcAPdh",
  "key16": "dJSAqgJCMqnY93EFeVZrgoh829vQnnicH6z5wtVFNu2bLdZRmiPwUvc5KWWauZ4JTPL8bbxmEv5VQi1SmBFjEsS",
  "key17": "4oSjMu9XSyS7QQv9v1ecPic7ZN7SpFzFKKEuR2xLKxibKggyCau37kQC8TsSvk3u7ThjYHihhzYGBGSxsUK91zYk",
  "key18": "5CQm4UJ7VKCf2gcniiPsY3Hd9uJjTW8hTuX1eT1cJgPiaC9Q9Fvp6FPcFQvzmw1Z9HwN1XyzqcTC9x45eJuKCwBJ",
  "key19": "1eRAJcGh64j8WSRNib2AvWrXGBj2Rfkpu4nsraMpsVNjweMrDuf7NSmVaxx1UE9sMdkQj1aAUGBoVikjzYteQZp",
  "key20": "2KJDtWwCkmvMpVNgfeiCigkfpgkKtuLSyX5HWQiS9tC2Zwqr8yGb3xJHchJgXxjpy8EV7XRA6PDpLFociQCJ2yuv",
  "key21": "5HcjP7431aiGhmZ7Rn9Rnd8wwDPmK4PPqh2iPLQ6JhoxAGWvqExAbXtMGgbUfZRMcXFqHFSjMzFmLwj7so7Y8nKt",
  "key22": "3XVj22ijmNQWg2gbVpmtJudukwjXaJF2hACUY5E6bWsVJsQ9NrSNsxDmTWKKDbDueECCCp9yLaqgkhz7oriAcXVJ",
  "key23": "37MgioqjkoygD9Cd1aGWbexXh6Ztv7zizQq18yzcs2EwFEEXrEJTQBYXTXNfqRGrqLAqpcKPJFGpeLpk5dC8gewE",
  "key24": "5GW48xeXyu9jj44Nepq3kMgbZ1huLeWomyg8pnmP21XN2ukozor2MWv2Uk8SuNVpbCoHs1Vbi1CVPAeuTiPaEKoq",
  "key25": "SR3hV2mo9sG8n5PU7ftmNyx9vgmz6Vg5JFzhcCchQpXcfzf7tY9KGX8An6pNaAcXU8FPZYoJftBiaCHhxdX6TiP"
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
