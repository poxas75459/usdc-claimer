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
    "2t6tK5MfiAq5RZfVju7PAsT2JUQagC69g4oDgqE5MYEg2kYiHt8KW3zo9CnrV3KEiBS8CYY2Zzee9t3W87MLtquC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HFhvzLYVL6RYydJ68hF5YQ5Q9km7fzdmdQn8nkUGAdWmSzYDaBuquFQa1ybHgxUzRBuZqxhx7XTnv3fenmybWeR",
  "key1": "4Gpf8SfHPXCeogJy5p2T3tKTTK6kvocMYLx39FxUvKakmRNgNSyVLUZchp1JW5SbsYxr6tgtrtb4NsFwQDW82Gzf",
  "key2": "3ziMfp8nXwFa7df2qsBnZbAtJGtfLGS5cud8GDmEv11GgupQX6WJaEuUEHvLB4Ni5MzGFDfHt9LPnKGahCaLfLHs",
  "key3": "2Z2CDmQPVKa29LiXBoq44NaHJKaDfs12hNNmnEWW4c2mFRSq5Y3Gu18pkNgA4QGg5C7tSp9hbdm1sYfFS845sRsz",
  "key4": "VE2PQz4GKcdjSbDEJwRYKBMuEsJiNRmdhCWcnB8nbAvs4hqS5b8DRzLfBimaKCRuymcEfYHbNjhUosfwBEVLP6C",
  "key5": "rPBvbT64CfBbcALVaeSqHdLH2z92M7fgo8LmyL1kHPSZJj6aLFb4oVWYUKsJQfbg7CQSwupFT4Pcd1vSomsvJrx",
  "key6": "7ZKgSCeD8FbYPnV9FaeTNiyzKStpb8bQHKipkb8ZoTkizRYdnuYX51Jr4rWTYCgBNyj5kR7kEyDj1W6VFXdk6KA",
  "key7": "fKsvAx4KKMxAtL85tuhLrZFKscqZpvQ9nRTavfeBQs98qYd9CcHJ7MD9b6iGr9NK1jCpmETbBhd8knpVBiJy17g",
  "key8": "4fiN4H5v2Dpq7ZUWsoBTCpZCbt1zXopDnUgbAfNggGaJqxNdYqMknUwXH2qmbpWM1EGEhfPuXBfhE3Ms5msMvgDm",
  "key9": "2DA3waBWCRHUV6xE7BufdCfVfUSiS6mujkcmb7zq5ZCuvGMbvo6kVb6u86QenjRaDvLMmgRY5ScNsjq93heF8CbT",
  "key10": "3PKVmTFEv97ikYPVY5wySeLvNDdymAqz5EY9wnSC1Y8UNfnoDroULKDhcES4pfZYBCfMjuUF5NTskJ14Szvy1cfK",
  "key11": "5JAKB1NuR59wP7UNCipvWo26jn5Vfevw3EQDuCyPwwG9jRW9XL4AqjqDhkGJjYX4kkjBUrwJxSdod8mMfXfn1QLx",
  "key12": "29vyHCLiEpx5GLrf7LaZpSHVaiPqsyWgaFBYSkfyeJnxqgepbmtajMPrM88s5v6g2eZACo2HYgCVnRoVSMaquaH5",
  "key13": "mzjcbuGWf85MWFqbMEwni3NUR4hFFh2fDLLeHJQv7aU51BsMrrPcB7UmSKKRqmUekiwMYuBKWM9ZrV7HyAFPYEY",
  "key14": "5wnWpHtKMnGhLz6caAHoftLS7zhxArZrfSrXMZ6LaC149ThH8D4Lx1qFXFojvFBz8ufBpD12VvgJEMpDLENBjdsN",
  "key15": "4zq9UBW5Vnp83QeasLQ2pBgt9q8m1JRUmDcRmnpV8RfkmiPRDUEwWb33ZzWKvwhd3jeA9hqF5tp6DxJZEhro77v3",
  "key16": "4rQ6GiuxyZAMEj3o9hGjVHdoLzn5s1SK26Yz8ci1dRse7Uacip7qj8rNa5rr2vEkNrtS1Ndc2wsqViNBTJvKxZgS",
  "key17": "bMpQpbt2A4ZQAcW7ib1RDqp2tSUcAy1WSLQoAPvftFLJn3W3WCnSqqQciA17G6d2VLaTPzRGgbxhsYKvratFE13",
  "key18": "3hpCX9G1qGn76WxnL7SoBUW8mXSbSczf5j8X4ei199rvjFm5uUR8mkWJGaLJoEWK3vJgCAua9D4QYQ3prAJ3EYj2",
  "key19": "4nXuK8ktQBSmaZMKMU2Db5dgiUCNdSmLiWn5dLGpaALp6K8x95UsoZnT4tK5sCz5pKrCZvSB3s9vgqnP2FyEpM43",
  "key20": "2epnaR7SJWYMg2er3DjbFKuWsV1zZFVKx3g2XFQwgz8Fkpny5wMSypurZUA8A3gekkyja2SpUu5iVqtUesvWxNig",
  "key21": "2AN22zGpFfPczxmDiHJste2FdV5HJBgEvFcDND21xxv5yekKQhZ88GhV9rPwbFUgJVwVEyKg3cSzetuLKLAHuHVX",
  "key22": "3mVatm9DRN7GYSHqFrGwEqHx7vYG7xmEq2ExxBKe39zaPkE3mA6rPLrszDhHpkFopuZhtf5BvBiohCmhJVqJ3R1s",
  "key23": "4fdnNm5AGk5p2A2Qfc5SHKryzfgbSj7hgXSCHR7nHaH29aMGi3YStrnjrEyEoFcGUqPmWTE3LGDYKUDM6dosF8aF",
  "key24": "4eZDhBe6hBZBgrio6WQ8yorBTnghiRGbNwQ1DuNrNBkuSDKRUahF7xx3Ehsm3PiCCSa7GX6ax9qvrsEr62EysPkq",
  "key25": "4jwTFPBZyRxPRtfXya8jaEpBH8dhoTZaVjRbPLScpjE1RTipy9MGZkR4BFt5c366AhZCUMQxtBbBsGXmJK3JuBqg",
  "key26": "iAykDiuJdEinpGfDKue3xP1chN8Z3SSTQFr2K8FNoPrRXdn1tNZdqeVTDvycWo6oR8pM5Kg3qjFk2YusLAVD1mH",
  "key27": "348Ncfxd3zJm6Rz86fC45ZtYPiyA3q1PFYqjt7PJDn6vSLQpeG4zhtJ9H1Wt6uumW41Z8TtqgyMMtpe11iQQMc6Y",
  "key28": "2e79arzKYNdbkryoVzjzJgctzddHfy9jKzsCcUJ531bqgS3WpA1F7syQwFRb7vFNirkBLFFrSpW4d2C97sUg7Ty9",
  "key29": "iezZxWytxWY5cU2giwQGu1vkgoq5MC3qVK1WKRkcAFFZCp4uYy6kp4S5j2RGCYn5GJn5NdgQQJ6B7Uv81N1mvvN",
  "key30": "5P2UGsTaQ88pK2nxQ8Yi3gg7gVUzcZGz67WaXAgaFWeqw9A3pSuLDtDvweNrBt2Cook9S4hHjPDW8vMy5K38nUtC",
  "key31": "3kzyzBfjfgKhS7TCDAwe4zPsaFNcXxKSiv5XJApv7b5WRMMMRXdWyZ4cGvTZZ7bB1Ccr9HxiQRYFapdLT55W3M8Y",
  "key32": "4bTEFSUAqPvAnRipvHroYbPVMn3mjXnCLoEDyVsEvdzrjCNCmHHrCdfSDJxCgNP1UAayXfHDHevt85cTDmFjwnp1",
  "key33": "3XypMnjWRswgkvaWoLgCRsokopZyHphUPgTUxq5HM6wwMnCGoXevhCnoNXDzXVfMjVvAEDqNnMbCX9fhoBdSLv8P",
  "key34": "X2qnPmbiGwmDcncBrLKnqzFkMdxNQJkg4LipKqwQHKXp9Luykdfodz9CqMKPwPyxkkzSxnf2KsbdCADgAFcDPUK",
  "key35": "4pooxQaViKkdumxiZEbgKb3vDV3iewdqJDwmT1x4S4ccvZo8Dwb4AGWVnHLSUCFNix4uHqqLR1F1uHKi5pVAp1mn",
  "key36": "2V9JWDCgf8duqG4N1yQFN8kZcbXhz4Gj6NGiPJ8ukHQGQKZZoJJh4zj3m2r6qiUx3xCpknin5xs6f4jScDJMLSKa",
  "key37": "5zzntFHuSzrtyTQHdUtbuQdAdQp5Aq1VsrhzY4xGtCmgHgk5WXMCiUJ1ufmGbPQwpuEcJZGPMiDv3zhKbZoRYnE9",
  "key38": "3248PoBx3P91bek43TRvMKgGCiJ27qSWfgZhUkb9ANJ3V3gxBaqoEZKGsmVQdEnQ3yRFc31f8rYf8kmzAvqp2zz4",
  "key39": "UFSq7jATn4mVUwEHpHGPxBbe3wexKiyLHamk9KLJoqC76SCvGADECW6rHYhCKvxGgfX8kXC8X5QGekcxVTA53Mk"
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
