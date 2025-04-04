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
    "3XEgVKUMUQQUT8NoNSiWjG3DvhM51qrNhjRYvXVFDEiscosStPtt9rsb7xkxM6mto5karyJVidsCGTAFdSzRC6is"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqxjZdXVULECvRWYwK85J2Hkrks4s7zRojvcKC3Cki4u7E1EkxpupBu7YkaHR2HMYGbkXfDfJfepDoHeNTPeqtH",
  "key1": "3aR1PjQ16CohAz47jtA2F5pZhqPpQs9kmh2Gq6JZZEHPNA65coC9K7itCsM7TJa6nGPmnYtaDk94WnsprDtyNFkF",
  "key2": "tVeuDoTyixUKUKQwdpVx59gCm5hiVpFyKxZofAhiuSLCrBAkgHFKZN8LKJ3NvVua6Mt3LUbgExC53MjMVtc1eE2",
  "key3": "4RoXhVw4espVfyT5W2zF94CzyinV3XHuATiDb4qn8rTGuuriYpzo2TpKBtvyZFLoX2pU9rwZTwqsqmnosRdKhQZW",
  "key4": "22A2N3AA43qhd2jeaSGWRFgxyPbozTRpd8baPrLgjLxHstnmLRRo9fGrVPQhqvnsm2NZyJPnqr29SeDshxMNx8fd",
  "key5": "4gHFaFdCcXdKjWPi5kUtytEh8TEK3Fq9gi1AFzup1jJ9qJLWHRXmy7pUbej6HXq7xnP2uDNnML3pur5JiwajrU8M",
  "key6": "4ZDuf2QPhM67bK4nQ4Dee9Ay5q4qtuFcSxSDBhWTQKntjWpYjjMBWyvojYusWMqT2dy71CXJDpipPCWn1QdTbrdU",
  "key7": "2oR1CpgBpaCWnNQuSQVikNKeUPypwpwxXNL85ixrKPJKMnNXhzxuFwqNiJkya3jxCR9jwq1sU48P37Hf8oSVYZkE",
  "key8": "4F4VDMuA35qi4YT2dw5fXo81MkAQ2P2wSyEKEtVKkG69RED3qWSUzb6X1k9RaLTTUmx1CbwHwdafZwPdvqQhDuw5",
  "key9": "52R9jg1TxE4SLCJJVUyWdecx5JRNuFijFESMwVajb5uEfnaUgUkjp2EK6krMcAWSQNVmcgU7xKT5VRqEL7sig8dg",
  "key10": "2grkYSWbLzHqYEX6d3ZPrP9Nk8rtzXkh2Si86BX4FtJfp1TCfMvWKehjS8HTDAV5GeH2ppkwHnAGq4an2LHuU1s5",
  "key11": "5YdjDHJ9cSZGrnvnKBGSkrQwCGReRTfK4TVo3EsfN2Zaa4ziHjsBZFPT7b8DQ4jq82q6vTnTM7uiRPbwikQRrnxa",
  "key12": "24dV37VvxvE2NJXjbTTnbWQ2nGqNg9Du4GXs7Svf3x9gjQprGLQEqNbNszwB2HLuaCGVKUNavythR38z71uriLdk",
  "key13": "2oGhsLdpMiYd9PXRFLPBHXvfGfeinQFHxNbGFHV931zoCFzzkTTME4txdTqVB7GetJ4vSM4TLmjDH6KPTbWMZEBw",
  "key14": "7PJ3dwSRghZ7CYF9ApadSEiLHcG31rqPVKP2omTr9TuwdkYy3X7a1dsAvwSp4M2ud5U5me5hS6whoj7SKtAhhPq",
  "key15": "KsqK3hfs2XRhVimxfK95ii34qE3qy9jk9zoMvDGRkvKKFX1xP8fqUezSWBrAKfguab1ziUBk3JWGXHryWmvvdLP",
  "key16": "3FPRwnULYpqcVeZooXmmNdYsp6b5c4UUQ1UuSPsbUDiosMvXKMfUCn8QwS6LNu5CW3Tv8FHQy5xeCzyWZ87XCUn2",
  "key17": "35C1vWBAusYxUd9DsqeGNx3FHQSAa8P6CbBr9qGq78wVDiB7S75d3sNwLuVMhydB3NkwmfV9fTE7Baag98kfuWoy",
  "key18": "Fsx5j5zdXUoiyhX3YAgpcEKj28eimE9V96ZfRvkv86ZpNc24kueADQAoV9g3AY1wYXwKh6CMgLqpbas2Z9KJggB",
  "key19": "2RsAvWFE3Uf8wCGWGez2QTNw8mXG6jLwwvLwLkv8TsYzsac5PJ87uMYC9iQrov9qCh1onKxQBR3z4TCCCj1QVEPS",
  "key20": "61ZwUBGK3JvCedtQqTLD8ZywDvGH9VqoNspjXmGXYn1cym3g1gndeWMf5tEH5ey1KBdhu2dhkWpUzNn4onpxJBGF",
  "key21": "5qN2zNFk69JfzaBTiq4dANrtxeb94doJDt4KwRBaRwzghQzzm1GR9b4bbJrAetU1FMmVANziVhS45qojG8DoRwNH",
  "key22": "2pFTiMu51rPtKGKcRqhuGY9AX9KYsLDJVysyzdWMoE8QdSv2Z22zU2ibPLJEW7qDTey9tc6kDhWbvjGSF8squAZd",
  "key23": "3ZCaEQsRiR43ZWuEcFKtgC8R8ZfgYFn7zPBzkbZNbzB7ecje2wyzUQeq7XGPmDN2yy5TJr64sFSbsGX7v2Def8x1",
  "key24": "3FtvrxqfEXrV1VoXVSM2miQSwMrcRTERQchHcoZD4TxoYgdE3YoaKcMN7c7C75vucGaP4dWeryXKamUuiQHYUaF3",
  "key25": "uCBA61bagquysgpzY3pntR9NyNepQqo1G1n5GrzLVaNJhMycQeWTYyNswx9sdpoge8NzTXEWKYzNTdscoak5XnB",
  "key26": "32GqzZeD9BW6dwMU2QREhvPVkHaKniqbopQnSU8wWcxKmQgjeCHqhWXPkivvYXNLttgYpTG7qXtSNmmwjE9nGQQZ",
  "key27": "WFbXxQQQq2TvcRvPnFkRnHSVN7dfdizVGBWexdiMqs1TDr5J6yv39H4ExepGiqb9qxRzC52KwQnWuP1oAivtjcw",
  "key28": "3s3wCnZpjHt64jDhMLFDv1z4ZSE8uHZBtMFscossChsLonXFDcr7BQHdEYmWYx8EYAxTHszbxQ8aefyAogBCvz9C",
  "key29": "3vTo8TsgygcTZygaNGgKgcRnk9jzynhTiH84fY3LqR3Nr8WhBHRNn4tsZbmCaDyPfvSkxrUAXKC3AAnS2LyJfuCk",
  "key30": "4BvdSuYQMKBZt3JEzohbCyP8hofopPCyKHvSVVkMzLrczdTT6b5w3tBmGXqnz2Q4TBpi1txJyT1sn99zERZJunGU",
  "key31": "4rvv8voDaxiEhuq2jdJQGmbgsw2YRgUg2jLtZRvuQ69zkEEmJMmJVX5DBrdUnDosLHr5ay3kkfaeunsfNB6iCYPX",
  "key32": "2m2bgeSJQN84gNewwiDz7Fd4KJhguN25w6Cb32mM8YFDJcxpFFYW1np1UeDEYJmrcYHqKWRaHfovfoxsZNvyje1j",
  "key33": "Qj3nSVJNdWBXruYGDLgZuyJotG7LsW2bUv6qn9V5JLi86keFzEJYoeQ7p28GeZMm2L4xcd5VAzw2QGJ1WT8maAW",
  "key34": "2NNuQeiFDeSs2ZPH7RnThpR4PJUFk9mVTV41SxGijtHS32Fmps8DcLbJcX43KPQKD61SSGsDbaHApgML3Zm7Mje8",
  "key35": "4dZVdoZ14hwpGCiuBsLUBFt3UXh1ZYu9Ngt3tKiwe7SwtvhnoLmicQm2DBzo2cS7fEXkkzBjRP4x4AqtW6mCY1Kx",
  "key36": "4eaWuywiuepRMUXRLR9uihMPHqmWU8RdhSEwkc83cFyZ56qo4hmune9EbgfyuTYAkiKM13UTt1kChZ1PNBCpwkFC",
  "key37": "3ALpwY7DZ5QNyEGoRYkNixmYkyFxjkDJ6QWsaW3QofNmgbL7wN4NG2v8B83vHVQj2tCMQtiofj72TDBq9hCLtUf",
  "key38": "5gWPn77XEfsR5qXx7AdbHfyi17ew1DkFntS4ugmm7BpQ5eukdDicXYThTUiB3wR1tU7utfAL1QZ8ZJPHDkEu3V7",
  "key39": "2fHgau4vpuZ4D9AAk9Heu9RczocBr4W6QkFB7gzwELFT2YGQVSfCSwJNfd3qkPFct7iJqqyUjDXS5UaQW2Zr8R1D",
  "key40": "4cic7tpUsW4PKRvd5ZLsL9F5mxbSDkRQeELuz68KdKBKX85mF46aYuW4xKmhxTYgw1xsRtisi3yfFQTcZwfexfbe",
  "key41": "2ABGsTh4yr9EJVDzsRmn6i5oATbvC5EgT2UxM5hGwbHcXVA6DwTpC364LxZEnLrFf9M3eiMqrnNkA5GpiKogxDSp",
  "key42": "3P714gapQp9hfuWE7ZaesGdEdKWF27mUX83oykWtyaVuiAkEeqoJpbUTeiAhUwm15B1aSVdExL6rCANNT9SAknUk",
  "key43": "4wNNx4fEjxS6TDuKoV1EDFi1BW1SjUAghQErFLgZYT5cyAD87gXhFyAT21W3QcNnX9bPSt7WWXQE5CbuvPb5tLcA",
  "key44": "4FcheZziBhdEy6v8J8ZZ47Vwn1pK2wbSSUpirEtcPvbcvbhQ6QvGjnHwUbCdhE4ZBpYdNpVwBGHrafdmuEhrz1iD",
  "key45": "5PTEYyz5SFm6naWHjqeDihfnouVimNLdVfRMuucjv6tsPovgG4AnZF2HTsbKjbruXjAbHrsJAUrXwGDVGaq3Zogs"
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
