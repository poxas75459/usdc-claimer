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
    "SLkcBRdn9MTNA478tifoNwpp7As1uMY7LcJnCuzFV2eEZddQ2NWtyT4hSteaVf42ARz5Xoi1phz7NtYUM13D3GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AdVDH5MS4de7TvhU8CqDcuS7HD9QC72eDGwuggxUy4pJoKpvuvUFmNvmRnsD8TrgWnTd94nZXQgM2hy7eCSviJe",
  "key1": "5tALr8npeY5YPF4yAkWu1EE3emg2WfFFybXLrAKx9xcE3AwmRTTyhGpHBc2wFM21ECHtCxwBQ9FG7eSYKGxXNFDX",
  "key2": "2G7QWVZMkhUuRsuqy2QubUgkzKKu5t63HNjq1prEQwgJkRG1TgJ1pzDaXVtxwzLkfpCLsBpaqEUsbAGAAPGheSB9",
  "key3": "eUSP9AqRw84AqzBb65Cm8wGSFLDzMCm5wiKfgzfVcT7U6cpEwHWgHXJrnstKSyXrfEKDqaKnLiota86tStJMmLK",
  "key4": "2W88xaKQJ8ned2AbVmSsBTVJrefQBi4xFkxcKtJnUPNbnYXiVyuaxCrK5aqQK4BAjAzSdbwNzt9Kyr7Syy5XWvLs",
  "key5": "4a1mRkqXza7utsG6C7ZrdzSyjHiZTnrmSpULwX2HZ63VBiAtQSuEuTuTNbU6n65FWpcR1b3zV1TaRvJbbTCWJ7az",
  "key6": "3rPx6BTQfaB81JW3HPEbGdYEBhQL2TpmEkbizGw7nRBYRuH2SANbioUZTgeArM1BS9ptfYs38qNDeyWzUyHcHDPi",
  "key7": "5ejcur5PrRYzJJL2jzs1P6dcChLZm9kTMLtyEwtnhfGjJjvkdJssZ8xD9jA5PaTp5ZvNnGXxgmStMS8uq619dtqe",
  "key8": "4rcfv5ZXrEJz4Po4n7TrCLpf9VnAv91zyjsgQBb9AX6QiYWwYiDnUYNHbpHQSdsxSZzSE4apnn9noRuaTYCJWwmp",
  "key9": "4Xwko6mTZEPnS1YTp7nkyFiidP9twqCveEtjvwv6j5D6EXeR4yNGUKiy5SAMt3wnwkDYEktTWh2EmxLrmT5Txn85",
  "key10": "4BYvSXgCjB33NF6oq28HWkfWoJ4vViCpuTHtn57vDdrcdK3TCcc3KYUSzZ3M5SxpWeprWgwLNZZzbFWinhhPixRW",
  "key11": "5r78JBmugL4LFRnKiC81uRrP4LTJy2Hh5VqbygzvvSX6W7tUdaWpzi3p8M3iscmNQ85gog6vxemVCfbzo9kfUc7W",
  "key12": "5gu9uEfYAa4EDKJDF2EnHAkwoSoN1x3rT5CdzuyySusBxuwe3vTie4mRKR12uxqhY6XmzMynxbxuaqg2NNG8xyCU",
  "key13": "xBNJwv3Cd3nYfzyi6wGHafpCs7nUkt6D9RGiHnxBRTKp3PNN55V7CrkYMFgdWvkpdnsbCNEBYrh6nbW9X2FbBwc",
  "key14": "3onaujJU7HuqPJMyDHwpjL9ARJXraseFA5Yrwgz6FT3KWqRTzP5wRUZVUAEbwKEx29FqW2WxisQvmP2dsHFb74Ng",
  "key15": "yFsxS3dqeSYbRft8z2QBXG4NNr56tSnv7KcXSZ4dRNwF9jQv9SG5BWV1RKPtZacRHGdS3tHF8GqGnfLDQxoCn1a",
  "key16": "2AWy6MMmPmnj8i1jHW73ELDuSRAV9B1ucZV6ZKsE3RXi2Le4PPatgBFgnMschXH4u5JwrX2VdrEpHSVCL2yxvkcc",
  "key17": "5WyBy2E64Jzt2iWXfiiRF3LWekx4kgy2r7sqcMoUHbxRwmTnEBPNvu1LcqYPHRcg8H3bLLYGT1hchuiz6vxQgqYC",
  "key18": "5CPAMXxfdNoHpBNqt1JnFF5KBCxXoH7QUMMcYomi8Nz4p57b2GKn3oGBEiSrtQo5KiwJLUjQR6rfAbpK3XfzJo4c",
  "key19": "5CHrvuvzJ2QAJRps9LrwKAfkWvs1B7hA3PTEPfKxTB1BZ5K42gmUyyxzuMxzk4SDEcUT5goZBBraabvEtzTbitbu",
  "key20": "3GZ7hFBiHAmnaxRwposCxv2qCNU7sa2PeLVr9CmkaVR8D6k6T4BhLsBsfHJYy3barrDTUkFfNaVEserbScsZvDxG",
  "key21": "53B6QpCRrxAPJMMRtp2eKr9f7bP8RmLwnjXfubosmQrXMwdhMW8D96Xvxji6k7BArTnnD9yEYQArstC186qmL234",
  "key22": "43nZ3zuvdEVESNaw5r863hcd4anr1euwiZnTM7MjdfupVKLLJPSXmVUpd8PzyobaGpNqbai2DEXRfgJzsaUydocp",
  "key23": "4NBVZZKbYPP9PEGXuHC78FwFPuWTMFxVjyDHJQhj9aWNWqjxuk5ToH7zvJ5Z32wiFH1kQrfJKWH1muk5vNtBPGBC",
  "key24": "4WdAzXmir2BhUS5GgEFWqxbZDPxj6eSJzFbPiDAqc4pypDYJEUTXwa9zYFfGMoR4BWkL9pAiy51eytaxEv2yfWqj",
  "key25": "4qzmea6ZfyLsDzT8UzW7pCisetwcMKbwu3vaTHuxujnVHArhuYWF9K5P1XKNuhnGpT2TjfyVnC1siamKdSzZvNuA",
  "key26": "4mAjPEaW7rVpGXzDsDv16kRWSePVg7Y5jTyuyY1gV8DGEZmUBfpG7br2btyHjTbJ5fEogkuRAMD9CB8uHrdWKear",
  "key27": "4AnS9uw4DX7eUWQaoj3QjEdzH1n2wS4ntsuU4ppNL5ZijoBGHCn4PykptpHtgh9LGm5BZLsgWqmocZajJyhdj8qf",
  "key28": "2ysGGcvdyvWEzKabgCzHuZpja3C9i52pr5jQAzNCMnQ2DqLrecCuE9wdCSpwfiDELxWXqvswSpSjZMg5CHTJ5EdW",
  "key29": "656wiXHRLFrJV1AjVhXN3LYZuiUPqRmQEL3LWt8mrivNPAegoBSoBWhtYsxW1Nig7vCbGYZ9VT4VGbs4xtY7UJPB",
  "key30": "MrHtSVFrBMwSKpwADY9ythcBCGhvkhnZHs2sEv61Lvzc8ophTtmGgdZfrgcQZdHZvkf2UB3sWs2GSw4kyCP4Urb",
  "key31": "2uH5fxEqZrMVEWbvTuKbzVmQSRUJ2w1VnYHurF5CJYFnTQEcSjbLZBbpEEcAkorGJMCms47BL8rfrm9mhZkjv1vq",
  "key32": "4uodngBrgTb8VfybuojhhNcriasp6CEGv6zfKQUmPfNWGsoBs1oYdfwuEQqnPgZsyHQbzVKLyWSkAWFvvTJtSaYo",
  "key33": "YgcDkoeD4S2Car6iAnGiNYPZrPkSJ7LaRZkzQNRuJSpyxARV4Qmsrgn4uxuaxTQJNH9jMNDXNmQBhbfQkjgPV1o",
  "key34": "go3ez3qf3gi3kgiXYY7fxG76GHU2cLGU4PjttEYoxU3PEtAzXKZFPae5g3Dgzqq6Ca72cyfm476GHjtKiTaPRRL",
  "key35": "2nN4nCrpyiQrvH583sf3Rn2ZFq13vJauWfxcuPyUsZai5FqzmNDXceMSZm9CMTj9dxBKtUosd1XZ2KPoSmN9f9pB",
  "key36": "2wxumQ1skjZCcsCuRcuz37jCD7PaD9mbkxg5hnsisRmBmmZLtdaBLRREcZziKPKR71JCze4CWdt6kp3AZMmhxL5v",
  "key37": "3MjHFPfy9vYHAHyxFkzJ7n6GXKvdQDYYJ9WwQJ7VEdHfavzu8Ys5oBJTnXnwfinVynSPMedhnUQiGR4PKzr455SK"
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
