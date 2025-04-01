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
    "2aJ3E9e4rgLfRbss8hEi1G2rh5LTXtxk725Ls1a2WzHLxAPzc1MbxKr9Wfqc6rCdF9R8dSjyMZMi9UWUMDdZ16NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSdkF9PhChyTLnd6t7fYZUby5KZoytxgxmW8ko7WG5gEpD7W6tLe13NbniCpCVkqoRyAzViG1f7TLvMmSkHV9Rt",
  "key1": "5rtpwjbiNLEkQeXdCLp8t6F7rLTtFMhCzyFLfzDobLyY3wY1dfVCSFd3gi2HgwaSHB2RTH9qWeZpaCoF76iwTFdC",
  "key2": "ZHUMybt1QjmghwVpfQNBjTJmeemtJUBdfugGkaAzZE8MEb1vk8ZLMbHpSnHJMWpmsoKGx9Y8pKsN4TKsSoAcGAN",
  "key3": "2fR43hqR6qnCqZ3mMQQ7UaLbqARC93JRUt7QnwQVbXaT7YZj4MqaGN9j4WWjEiTo1sVpFGdjT2Lk8BrXjPU4fEBo",
  "key4": "jBvgBfXtRCE4KYTx7D5Z9mNMGjmG4qpBUaqvAtdz1duyPFayph195BzNS4p4R5Ey7BnndHyLpvVmWXvNuLE6PCX",
  "key5": "5d1qzoqhwnndcwKkHwHx6tJCTutDVbNtgqnHNNPdWNwshTF6HpEUdwfxboq8MBUfLmnS3koLUTnuQUiaLHSxynHU",
  "key6": "2EbtqFFSbeoas3vEtEiwGSiuYPowj5RtFjoiCd5dGE5tt4pS6rfofWZvFSQUcA6UAc2oy5t4hGY9xU138X79SkPJ",
  "key7": "3jfHdvgf9wzVnirgo9NV6qF92pPfTFxZ5Amc9thsRVGUa78qn2zP1zGR3CCjgsdFtiRe1JGLcSCyrGXJTNxqFMsb",
  "key8": "4NcAz8hxGdT4a8QcoFUs3uF8crx53ua3gn8k6SaTCDrdNjTLmJGN7qmBZiZSgCwqiLGNczdfV6a5BxePjdsaTvgs",
  "key9": "5QXtn2F37pRgVhLHvyAVyfRoZCVse5Cja1AMJGEg6vPnsFCkLGhFZGKjdvpVqCTp1o3VW5upy5ZjJrhWSyd7EA1h",
  "key10": "BVkFC6euMMuEu9uwHGynKb7d6ZnC45KRer6WZdSZ8mxfobH8hHBM9bcVUi51Di3JFCfHRvf85GCa76gp4SbqCku",
  "key11": "5WbtNBhCrF1cLr8MyVYCRRiYH2ozUsvvgZu2Kkr6Rimmh9nBabZbjWqqCSCR5TvueWHovWkHfg1faAo5NQfUzyiU",
  "key12": "4J58RgixnSCRffTBR5DvZE3yDrYoqd5rNBJuCcqhikQTnRD4KpUaaVhnPLYy23pak58eSL4tcrAksQ2HpDaoQBZG",
  "key13": "4ReR3g7cELMTNvQoVquhad1bu74PNkje2kkyzu5sAfjjzgQ3JFDm9bCUZ6GZ94anZ6sr6dCoRAPZwSyZaeUA7qr2",
  "key14": "4ozFiqeqGpaQiLNLivbyb9nvm41bhaaFNeui3B539oTZxvoU9pBfAG8dtdtDVEKi3nchXpa4nb1NKwoWhzPj1Mco",
  "key15": "2PxPf99PWpZVBQCxVtUvtoFLubgNzKgHAQ4udSDuv7Kn77egx9kPqzt8Hc26MgL1mYNTXcMwYf7sujYJyQumxrp",
  "key16": "37sWv8fATzZWnuQAiDvH5XQATLsLUYMuEvSsUsHF9EsBXQ3iH1xwmKuo7W1tjptrneMUkSf1Tey73pdkCYbi8uRs",
  "key17": "sPj6PFQz9NBQWLKkPoecNEmqnJmEzHtb2aAURUa3oghVfMBpxKaPz8V5ALLPDuqWr1CGXY2azvYAzpEF1urvHzD",
  "key18": "4MQVT8JccB58DtoCj1xVcdS3j1UYayKc4pBCYrRG6Eb6NCEAHE8yuUBvXjS4xc7AWZwHm8VjWCfy6CMvJvj5jdzX",
  "key19": "3YP8smzwTvjkFAyANB2zcNZcgk9h7YzZn2XfQSG1S54zivNTYvXQ6tNCGLcXsDy2WdJzJfhZ5kNJ67Drx7ZQiQeG",
  "key20": "2BTuHcMjdUBnb3MJPaudA3kH3nPf7q3qsnkbDD44iyipkqTxAsGra4onkXCMMEFk6cbESuxjRyrNSoVVqquc2vEC",
  "key21": "61J8hZRcJKE2VmE4Vz4RfWbvBnGhMpH5tBRa56WY6HxDqNouhExAeh4ta5dDnsjFwx5DcVJ6TtxHFSBkSYkuNfUb",
  "key22": "22SfwkSRsRDa9V5ndWKdKECJ5otEb55bv1fZVds5mjH1thY6W1EqPLi3sMMNUg6cdYg3zHZbia68nW7CM9GyECBX",
  "key23": "22B36mmWjzZXCQdS3yVed2nbrnRtLRm2T4frLJ1kvpZC1tDyMktzQLtqhcTyQNkjDhfbLNYVPzvLLAyceAAgAiqP",
  "key24": "4P1qqzwJ2MmqgioaziZrVNRmWbWzF4h8CRUiL7k8kbXYc19ev34V78aPm1E4hSFpwEsJruWxbZNg4zzGnyxFnEzG",
  "key25": "3nYcguwReqjJwcXXm5UQT1dDEq9KBnNW2NpoRVbjz2qwuRFY8swM5yZwuwzfFsr4kMF2jihCQ81CBQf542G2sAsE",
  "key26": "3vH8Ro69cuyQD5KKe9SmFBNpoCSs9UiDgxNzoUX3htcku7WPkkjokZSp26dYAmiZmrCPnPCvG6P5tq8YUVmfrsUf",
  "key27": "wQrC5h6HAGkpXLj1dSHfpMpENXwXdaxPpUzzKAtbtxphx42QwpfieDGvpYAvq5CnJYBku1PV1Z4WwvFtPxweudm",
  "key28": "35uundUNZT3wQfWX9pcZR5hiovtV9ZTtHzhCbWi6DGPFXaT3PJfnRELbjNUdexvxhY6Ro7XCpg3GhNMUkuvfaLiP"
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
