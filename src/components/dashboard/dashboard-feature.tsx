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
    "2ojy5PpCSYc9aqJnbTSzMA2QCv3xftqGNdP6tQBEggN58oD2Fozo2vFwJhxQw1c6xWH6DWk4fKzAddanZUXMEGL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gejhgksgCFqeF5n83ij1Mu2RWWxuRpCuAqjyW1LvbMLz7U6dohcoFXi7y2oBXL883ZuHC4zBeigzzZ93TyMUrFJ",
  "key1": "3Nq29Lq9xwdNxgQZNGHc5a5YgBQn25UcyTuMLhTGYQSLYPP3gUo7LCfABGHysVxcPvk22H9U8uvvHJBHEpwsvfDu",
  "key2": "5sME9qXSaUtvo636PM7QhDncGXztRdTik9gt4jWsrgDr8kB6uBcTkspMzUCXXa52eoX8D5byMNFJuRWNgDi5ph9E",
  "key3": "4pxmnZEXrviWdJKKNquRv5ShymV7QsdtBMb6u6opAxPxGpY6BGVGFwnLshsXTrkwjDmA2EYB6CG8mZdnaZSQ1fks",
  "key4": "5pje6BTRCVqXQsQiDdDZt4Mh1pmRJVnyVKDMDnuhg9JDkj8nkXvgcZPqsvWwGPq99jQapM7NPZ7beKoSLfj46djb",
  "key5": "4axPGcTpidiPro6Zc8epHHyDK7AvSnnn16sUeaTW2sHvfXdaJgVvoLtBhsqYQgFNQpCsfv16doPWUp8ZrV6DykuG",
  "key6": "2JZ1owEbMgsf5cye2JmTCMrrio9pdKTC1WzwvmKCijebsi9WNsZx8mRnV5ZT2v2TuP6XRT1yhMFfxdLnavAGLXmm",
  "key7": "4fG7GuoZXhvXL5oCsShjPm13pLmQNErDjrSG2HVWCQfhpSRgxLYqXYEeuJUH9L4JyyJVEnmc9WQaMXTrsPBi6tm1",
  "key8": "55BozWZLTWh1VHimaTBRxzHgtWkP8ZLFPXuqGgYA9ufhwUZyukCyY5V1EeEMGAochbYZKCMReFMFaLVBxupGwEAb",
  "key9": "4sdhZ7UdPeXkf2nFDc9iTGeoaEfvEbLXny6UTPvX2vxTY9sNkrqPJAsvsrhBQicTsKDqZCZRXRFxCxWKXY2nC85a",
  "key10": "ZVdZtxecCrcLqAEvKVkcxRqnmzYqYc1UyhKoogjHgb5r2shMnur6TPsuqiRu7vEtovjtUcLH23n8NQe7YcQbroB",
  "key11": "24D6Yfcn5bc4BiRHTsxsm5kSmVKkJ7jbxGqeGSGYTUGi33VSzVrmQvGXRWF448uUqrk7btFHJKwMoGRczyniBgor",
  "key12": "65zkSJMVFaVYqAxWfTCX33h2JBoN1mpJfa1ctd4bB4Uhxg56Mcj7ZKh3PeEoaWiJ3uBZjpcE78PMVR82Uh1oggmD",
  "key13": "3orta3N41hj7v93aLZZpEPzoYtUL3TRvVFnUnP9YUCWqvGp8Uh477oec12Cognj8hS4ADbyj65684ogexNgcGrxs",
  "key14": "21QfDS3XHGmKWYUAu2fmhKP7x27xogmjuCNwKE1ggw6bxdKScrns3Qq1fcAMKBDTfJYxX6gQBy4aaUkvCpfQPect",
  "key15": "oBJ6CCPL1W8KyvL6b24epAMg4p8eim3nPzXZFiqbi8KFgCNozoDnjmip4GNoKQiGt7uNDnRzLiRkt3kcvTG2EUq",
  "key16": "42ihWzUXgu4KCK6e5tF3fdCuMv49o3RYNiBTbCanydpVcz7YG58hN5oLKW1KYLf6UJSiVn85qATq4U73Q8mNdSMs",
  "key17": "2K8qWBSVA5RBeGix7DXEEbKYEXSMU1AKSCcmrwnEqDoWQKWcVhSAoTELjB1AZkPsD3hmRbTRdGfyjE6yVtBMREcK",
  "key18": "2uWcLZzYfU5MjzdWuYfSPQSMGAbgf4iyUzDQY5YBcfb5mTvf5QkEM3evddFaFzHnNSbvLwr3aW2J7Xv3GBLS5qd6",
  "key19": "2JpcjJxUWTjmmLptUdUA8CTMVbG6e6Ggnb2qiWotmPak34kZ3NyAQQKn2g33EugqzUdTjv9aywxnJgadbdbjv1HE",
  "key20": "4ogJFBASkJ73WrhpDSrMvqyXtFNNptvi1DTrzegqGyg5eWXN4WsDZT1P36r9ePNcnkKL6Z4ftBVevYJSo8YPi2KR",
  "key21": "4rCeSBimFW8Vewok8fikgLd8TD4hKDvfP3kcRAfnxvAGaBdBQgR7ipywgGsJqNFkeKTa4TUr3vZsbPKr8ZCnChD2",
  "key22": "FVHkF8SoCPMZne8LZRKUVRrDZrcq9JQ3YAcREd8UDmY5t9dM9PBUmoDfQYjcwKyFkVwecFuUTU14nsw5ig3sbfk",
  "key23": "4T3mrafMfrpo2djUxRxDRXuXZE981KgQwHxxdZrmkbTvfChVEiBDvMrNxTe2CMYZ4LcY88VAx6VJRE1zWYHgA3CM",
  "key24": "oCGVBZisvrU6kiZUjocQCVMAPXZjW1nWn9TGFHyr35VjrdoYC3KSka5EM7Hw45uLguVgjuSJ28ipHzJCMkcXbNM",
  "key25": "2oEs56JLHm6KmcqknNTWhxkt8QcRm8L4NVoTeCJJZhFrpodpAuKoAUX1L6T67NukLLgbSStyvXudzvVuLH7NHerD",
  "key26": "55G7GkH3rkpPQ1wVHAqDfht9BuzeyD1EquHKFryTxfUWqkufC24DCXhiTQM8D5R4dmojKyUg4A7wkSAqT9j5mCQn",
  "key27": "51NLdpcfzZoWYMJr3EdWzaPRQ2pWvWF1Kwj7UUJZvskgybX87HJ86goBSXUsdGLsDSSFVcWMiENxw91GjP9zHzaU",
  "key28": "3efZASTmCKdiJDTq2LMSVMx8dJaAs2gxpMYP4KBttrAxnH1csxDG8G3v45AYEngtVx2X53XTkBA9gaS6KRp5rRnX",
  "key29": "5BDRCaQzWJxES4CowodGQEhfim28J2hEiD2wu1HNS7DMXxTUiwXjYY4nYdedwhEJ9YCdVogdDM7xKhqnLShscwcv",
  "key30": "25q3DLwB7Vh5P73u7yuW7BE9jV8NFqFm9fNYA1MqsiqbyLBxFX4QA1WSX9BRZgSGo1gWJBrEpJKXPNFJD5YozoZn",
  "key31": "42Q2e5in9Jw6JWasjbLNygEnoDBMbNNWm5QjAFniDArc7g4pQFJQ81nEUjhPvmntRD6o8cfrerdg8vUEbeNvzYiX",
  "key32": "4HzQU7zHzNz33Nt1u5cZd8XPFDABPGbS4ntDnJRDeX4kuFga2kBHrAyTsg3o5eavkTymjVxsL3Nb9vHrSgZ2S9Zb"
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
