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
    "2BVcBMDmU2HEWY4RiMEgbV7HHczczHwfMCHB2b8ZM47MAsVfvvDhsWLnQjLyCmRGoq8wERQTCvggrZiTvENTb1dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWha8FPhwsYY6oFzgvPVboL7Ci5JffPzBFyXU4GbrC3oUGjiygLue27QJMsUHjC9NQT8uMRW5BfRWytRm72XQRv",
  "key1": "3MAoTQ2ZB1QLcaoqyAxUnqcaoX7nR8xSxZ4EGbY9f6ijcxYqn6Jbj933ZoeVdEHhoCjbNxiGqyeQKEeDDJNBTcHx",
  "key2": "1aFRXRZejP7E4YTuGj8RC67njh5yte8CzgKwaiHi8vw5ZB4e89YjjZMWvxUkt8cqCxV2xU5QUcusFN5bp4Mbwwj",
  "key3": "fxv5Jb1Nv5rANT4NyYaNYhWdvEewRDyecjYmwYTtukYLGW7ycHsz2EMMFFDFMjxMkLSyjDwSzwVFZnnPn4esE6k",
  "key4": "tR8eZPFpSXasfjAmoWovuCicRKLSJrgW7gvYXP3MWCkvWCEify3i9AUzQmWfyPuxiGp8hkoGpHigLTE377zW2Lz",
  "key5": "5zNmcGFrTLKqBcFRYUjm7TxucrATjBcwEDrVCVnyXkWh2KUwdiSbEuZ9gxZNQvVUnhQoktPEzNok3bZSG4tD8uqY",
  "key6": "5ySij3fQoEjN212BixovWGF6ubJtp2Xun2XZJB4yhRUEysy5Z3bzMah7huVgH1Pa2fVUchGRroAzssrrPVFJzgTn",
  "key7": "5FKb6PiTFXayvFLCh51JBxtMrDqYorhKNDmPp2f8Me7xjV97Prrx6msv8RBW85MSuxALfUv9UEHkQBVbufAaViiM",
  "key8": "3V3QxE3SqH2HnMpKtSqa9XhaZFwzBUDvRsAFADtoTi7SpipZKmhAiva8JvPxQbH7bDzcbYEhGaXWQyumj3r52FdY",
  "key9": "Q61Xbh3ydPkxmgDcMXurPbipW1Gvpe7mMs3HKf7UygMsQ7HbpMPrRMoEYAAc2eEfogaNjCgE2qSc7e1FpcdmHLr",
  "key10": "4kLeVei738gKjvEzP6AZ4hRKmQa8hR1nWmBrCHpi7hxWXmUKkwqgiDVeB3yPowVMRh4ofR5e3WUoLYtmtYcnZPEc",
  "key11": "2CSmYQocSrjbLMjaMjkn2XkDbE8BzxQaP3iu6MfWF4T7xNBwtXJWBL9eKhbX84uao4BwBnZGmvJo2J7M348HkmjA",
  "key12": "2sqwYyBuvJ7BxgtbduW3hSff2k35XXgcT9zjiod121TaFifxCyM2wuSRfxyVpdggvBwEpEtP74ijy7v5xzSsvJta",
  "key13": "4zsS12X9mNHxVNEy6EU4BRzDNdkZRtdK97SBDgF7CoFMea6eXao2jriAAposEsjyDcW3A5kPLVow5HJgUJcygDS4",
  "key14": "2jDCKyZnTXkQZ7xHeU4DsS6Wsgo3EmVRiHFuYWCjcenVbtwhdgbQHLpitPa1LQrzSEQ3GXeC7WFTn729nYwHWR4W",
  "key15": "5DB5F8jLmiENnPn6y5Z36wr4QddaQ5VyKJuniAR8VjZVJvjSLtv8gWVRg4r3oRXuM4Rjje1wzYaDDePvSfwMk2f8",
  "key16": "61g1uL9zTK5oxE63UWM4mMT4e2L86Wp9JRNuJqn514pBaRZimjM8cMBN3tNVZ9NBf3srzjEJe3vXcKKAThCXfiVR",
  "key17": "y32iJq1kFVVcMkGCRR1dRe6xy9W1mDTg7vih16RddQZNYxbFtcDrVa5SkgxpVZqVYib3BTPAwARv2z4Dv3JxBnB",
  "key18": "5pEf3YkRbBZ4bMmPMRRcR9FwagXWWnYSkaxPHkWiLhwS9as6vk1Xr9MqpPm8pHKhDEypBSw3LKgAXCDqSFyozzK5",
  "key19": "5uyKkPojhyKMFdWcN6rYyLcSDDP6n5jaFx1Qi3hw9bo9NNCEnSahuHMYq79M6AVKZ7HLDtrC76bw1Dkjh5wmE2Ne",
  "key20": "4mx3qHDiQPeBa8HLShtd35eArV71umetvxtFeHXHPBYPpibDJ5MnbKKacVGoJ5z8XmSRVG35gy5P3hwYkPckGySJ",
  "key21": "4iaTovQrsNL45cJWqU7ZXDpgyuLsF5rQebxtPerHTcf8zZDhuztnKwN8FQv6oUFiwVmWX8ycma2vjyjbc1Krqptm",
  "key22": "4zL3KwwoP9bJfsVLaw5xX17nqQmkMeCy6NXmfEiNMqd1mtShvzch9hCSnAq5Hn7bhUhrZW3XV91umfHuBakr8rZb",
  "key23": "46qqRu6rGN9VVbUdy9HCL3utDB4ivDuP5XgcVn3Cnd5wurP4L2j2P9DGA5o2J3chV8yVwhKnNi4aSXJSRxzutvYt",
  "key24": "4oVsbcqKF4sPDzByqRtDX7BCURaaVStrcEU3q4xC3BvqSi3xzC5p4eJq4Lxigum81LY9s2V9ve6KaDQDMQDSPLcL",
  "key25": "M6rpD4YJ8R6A62fENy1SmqsB6RaLY4PbkDNFDHAD8i9R2xLHSXTSxhszHGyfADinkfHRkbELQHn37JcmuWAkr14",
  "key26": "2XEGnTP9CrpwiM9ZeweDeQL3u5rspid1BkWWEpUQvxXZqxUJWBK1i5NipAp39fCBDh9f8hiP9j935BvEaBHbxBer",
  "key27": "4gtPG6v78NnQA4DWuKwuy1ghpqQH3XBXZfCE9zyTN22dFv93PCRRNA2QAjxaZb62tJiPdNFZD2TanBWpAr9FVkfS",
  "key28": "1k7W4x2W4arytTscwxFgiZd6Lz3JMVgQMffMD1qAvp6WnCsVpdJ2C7tZv6d1HrfrWj8VszBNYwkx4oEt5BCxkG3",
  "key29": "5QYbp6SoCvdGUD5AypfqCqXJfPULzFnVjysnxkA2kEqJVn7qzYdTHsJaR6TQApRkqwY118FqbkMszZnDus96MdAi",
  "key30": "4XtwgWBAPsPvUnwkN8nBdMtExzbWrr2ZjWhtmyrZx1ubva5KBMGSF4RtMd211JDWMUYSwZ34gnUSZTKqKPc9fLXR",
  "key31": "5hx6c5pbHNtj2bGB3v8nLGXAuUkp7VFusoBUJaqmjdTygHkaQU8cM3hGJyoZyiQ5rSUyCBzgDi5tQDLTZzFGfqqR",
  "key32": "45F6KfGQ9fp2VUYuR2Cc8FduYEyUbRT1bq6jzQFCgUaaHgvgtUTM3vsAmHJRPnG6ew6GH1BqABpCsAedbPAVxE6Z",
  "key33": "5K2AFfyrCUQRt5FiFiFUJyDwonctRdd5C5E4DSD4REE3yt3ZvBoPDntnXjkoDkakNWo1buJ4pG2fNobzX9pLwHe"
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
