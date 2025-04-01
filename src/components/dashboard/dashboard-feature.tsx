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
    "2Y21nZvHxp6hSkAuW6hvec1E3EZgf6LPMFmZ4tFf8AFfbsysyQgRxEyb8vsMWd1u93rx1LSeMVBFpxFiyUkFbJVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d95zowCrYP9ZCvv3Jb4tRmVx2aXELBeuQb2qQed5VzaH9KskT7vHXssKMu8ZDEQk5iEVtq7PKdYKfDZbBLHe4bn",
  "key1": "rPD4hULM8uMKg3kBiTAgaofjKXvT745REoyyqLqSbCnoDYkmTY8oNZwaVubBNnF2VfEB6ZoQGXJCYzh6RB16VAq",
  "key2": "4PcJjGLzDmd1urAFQDJ2FqxRjK6yJ6ycHqLmqy77VoqfNFBaB1fJ87tuWdYn2WDnPiYNezrNfXZ7KF6Yq5E9uhMN",
  "key3": "41FvyrFBc3vBuwSvBVHFqfnqUqyvEu85nfEsNhZJf1YeNPwNreNcVtgJSGG9ipUj97bDmnb8gNkpv5zpdfmCdCky",
  "key4": "39yvPKhEvJ1ZvdEMM57195tvMKTj69TXyDFAqWptrgNruMcSPDpQA6M2TBjXe1XPRJeNQEmrzEPYv8QSMk5jaE1b",
  "key5": "4XVoZtYAFdTqLcPYmcm7gsCEsdYHFEUVWtpVUxWM3emArKE6vs2ghrbcMmg4EAYHRhKJjt72tqZe546XaVxAtxZW",
  "key6": "61evhiTsieB3NyhmTzV8vd34a4bWFXjeWAPxc7ZMDLgevRE48CWe48THpjPRXLRmkLat8Yuy5kKWKqqpir2vfUje",
  "key7": "CaBKfREbPMXhjgvqMKGF6LcW1EhQVit5dQUZg9NggbQg7qAZTjFpgHoBiympfp1KYsPnePyW5htouy2MAsxZ5hA",
  "key8": "5mBLjjrMyt4hcHrJodfTHFjLGp6LJQ9bWEcFtyJDk8AZGBdoLg2cQrn4faBAaX8RppjxJEvDtrxedH5tjP2aEdHQ",
  "key9": "4L5i6pa7oLCXWTRooPK4iJZxsZocXPR2n6HZqEL6E4ZbaxfxTn6jLX7KFjoDctZ5uZbxeUMADmEJ9Ntpr2aAGgoW",
  "key10": "dFRQda4afUBnX4PvW8JNETyFccns5E3TdgEdAEisnF36KHzdhSKhk1LzoEQFdwxNWStdyngXWHE6WU3B18Y8kmn",
  "key11": "5duFb1Ua1cKNAamUtW4tGJwzf3zQ5LoJvZ8qCeWDTWEAkPmhz283C9Tta9TTYrbcKdhoP52recZD2Duos1td12gG",
  "key12": "5fcEZLVZZjnVhgbJpd1Qy8itUFvNosrgf3qXdr9sjhzzNXtCvcYC72hVRCWsS7Edcg7J4rSntLa2ZEbgxp8HNBCE",
  "key13": "2quuZgec7DqtaG4DofTwqvZzMUtcd25YGbGRkLFiqNvEM2PFfeYHt51WL2hWjcJPiDbwNVF5FM5BErMk3AkWvnD6",
  "key14": "4iop8ep6G7v65juqWxmLA635yim66CreYbfc91kzKT795EqkAjdRfSdG6LB6ren9XX2QkGorhrNmPSpRtM54dMTS",
  "key15": "4ptHyRv3RNiDcfLEtfdAWfaCVKfzEjTBxFCmggif3j4JyuA13m6AqJ4hJDDY1xHBkyDoEX79o9C8xJLvbN4CBXPQ",
  "key16": "4gW9JS6ENgKqVmm738EwsG2pAYEV2ME1kPofptWVBnaY6YaPn9t7ScmxJF2dEmk4vo1A8ZRWv5pkvpkCTK67pWwY",
  "key17": "cjnrTbzGmuaYpunM4xpTYCDX4viswLVdoGiTujfg8qfHHiV88LLhrSfT9oKAay5ppXYHehSMVF5tY6Tjc95TcE8",
  "key18": "oQBd3ZEMHMXQMJozivPLz14LJTqhHvikdhzNtCC6XYAMLJfFq4vhs1iygAyF2db85PUMfSbSdNRtjDf4auyatVd",
  "key19": "64zHpEfNdSkZ42tQ6gqJ2kFchz4XiLUWe76fAaXoqdktMg6VyqMq2FevdtzY5qt4azCmCYvJq9BLLRXguBXf3xo1",
  "key20": "5oYGgcckbWVG4trtUHCNdYF2HEghP77tCfuzLYN8Mb3r7JjZTBPikNwh5GUxZZHsE8Gmw155YMQbnZf4QN1Vc3Ao",
  "key21": "37yFbtsviNkUr6Kz9EBtesxzrRoyMn9JZZ7RtNQULgQ433keYQWV6DVky6eM7VshvVqVu5WTiQAc9jWAd3J1cMEW",
  "key22": "3YF4frySSvTNcxYCKMufKEiWEupKJeU7RBum8E5Pwetg4FgpT3ckGkBoCRtMtkRWoE1ghNxpjidKZg5ozotMRwbR",
  "key23": "i6p24iPy1YSd1vPVD9YKYrSXrmM5jvFk2X5PRB53rY1LxcNgVFQcdtLkRZVm7ceVUKj48xN6ukuBFVZBqZroJzN",
  "key24": "4yAvqno4cVHVHyNNYnbFLQBQetZCzs8wB1rrvpr3Hnsw3cJYHAZXWGo2nBRj5YE3btx3EsXcyQSqcDHU5z1G18TV"
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
