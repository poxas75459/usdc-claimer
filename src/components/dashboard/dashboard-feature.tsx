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
    "37qpGM7rHQrt5numFeCWc3XwpENJ3XLYoycvy7YJeu64xu5qv7NuSxcxm5quWnqrRtPyYDcobzdrRorWisukzKAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwW7WtLNMjL8KZHBoNZdziS9pr7w7mMmBMVXENgZCPJJ8wJGNTtKkwFcJ3VDaw5Xm4fHnpnF1QofTWuWJ4Wp7nh",
  "key1": "4MKy3EuqYHp1NjxMnbCSjMXaT53zHHRyX542c5L1NnfDvWoaBpuHjuK8LgbmHPfsUCrYbGC7q78afjiYUkzfPD8c",
  "key2": "wiATC4TGjHEN6ng3KbbHwmEyDR5VrN7EqfN63ghxkTowMWzNVdGgMpqfAMLgagvSEcZ8qVsSMXoCB3mcdYhAQpm",
  "key3": "34WzbnusF7ijsyUoer6acMzoTXwUnoYAa2j42rnAM4dNL2JspNkzNtSATvUGCH1KZv3FVDb1ui2LAu2QP4erHohu",
  "key4": "3fgaiVf94y5CQHbvJPXf276z3gBUFABfMMihVC115JE9keAkGiLxRPGsMsFB5seK5BgEHNPPLCvz7oNf5yxXPdwh",
  "key5": "51Cpe91gP9Wxt5KPPEwrdGKF7Ka7Bk684wbdKngcvQ38jppM5xtzLHc9DDjZcw3mHx34h54vu6WkRMnmR1j5t6EB",
  "key6": "B1Tp7H6b3WkfGVU5Wk41Ptm459GwsiGXPZYhRYVLcM3maV7NTHYnyfcvHTbPmehfpCFD2CmtmQVdbDLn3YDKrGX",
  "key7": "61XQTpEiuBg2Jbi3u7XdwDKGvw6hZw7VTEgrHyTEEfJc3tgCgep1uvbsFonYVwvFgiPts6dWAYa8iUsRHVU7T2vG",
  "key8": "2tLtmj7Y2We5pHQj9GiTvu5VphJrkRmARR9zVbapvMoXEaQfDbq88ZV2Gg7Q3Wsxdha1wuMg9iMSjumrbSDRqanL",
  "key9": "5woYSAH6KAw7enptZUyJk1HFCyv2bLTnbrVLkGWeTdY11KzPB3JuLszJJMdNSy6bDqHYPjjHJ2rS6EgmE87hxzZf",
  "key10": "4W7dJfAe862Hpn3Phse4G9b7825X78dAbtWzg7UUngprq9pmN4dXi75ZRtEtqJCZHBqDhEtk5t8FrgZJvAXo3M6r",
  "key11": "3NNYkP5sL2tdEWqqa4aa6RH8d2fnSyfkYNNKkiSpY42zE8bysmPSWGo5FksrV7Gr7Jym7MUjZ3s2JZsafMvCKiip",
  "key12": "3ypXfgm6H3SAozRGR2xbAG1zcpECb1b5Nno8L5H7MMu5HpdFe2MyxmvDT9b9SaDCwjTHmUifFuvZ7R1pYAVKhVoT",
  "key13": "gt9vcHdsno1EqKP4JjcaXtCS7cKbXe1hcKQADCqvStJBM3N5XCgmcQfaSPFPwimwN8CWWeuSo2W7nrC94cbh5Kd",
  "key14": "zn2S3aTuLwQVafbcy4kGxHqAd7pzbiom7Xg1YwxUjYWkzCiSFTXRNxsKXeXJ8dUV1e5wiAQuQer2FZSt2yR9Ad2",
  "key15": "5iEjan2eunaVLAVdRLjESY2j6MisiuBAwPofgXx1GeaxVrdmibFxoXv1SR4v7KsaBu4e5U7D6f6ifLSGVnhZmfn5",
  "key16": "2NPf6GexpCSoLVRa3xkqbNgk3jbca8yRwmdtAS781ZvZMXNvbLvoXps7PepHh7uE8rXeQVNeyEgLPf9ckLhRup3S",
  "key17": "nufwWzubHHHER6nmgNmZurLCQVewwMAomus1Ccr9hoEYbMDGtgPBSxdGZcfQkCiX9odFgSh1KEhKVDLYLPp28Et",
  "key18": "2wHieymdH81XC7WSssRxyRaR6Q4LN7fWDjMZZmvsPZmPWc51jGV4m39QfoTrhnjorFPWuNkDvcZXGQFirxig4zoe",
  "key19": "44bFWnymrvuyfaLwQaSjsUV325FJvsNpCCjSb88qAEBV1FCxwsBvZ6AvCRiUvjEcGhYuKK8xeZb3k6TgjrHeLE2j",
  "key20": "3GiNw8iMTUn21CoiRNgMJMDTDQ5xzZ3Dk3ybYLKz6jnqfqh1PyzC1HwkDNJPKuYu1zBGy8V58GzND2KKjEDXiHs3",
  "key21": "3VneE9mt6McwdWb3UCoyFZCHQfjCwzsADk4mxuPa2hMghPWwUmjjdhxQkSAL7VmuwKbUP1CsGKb1A4KVE4wZjmJa",
  "key22": "235S5PL8tBXJ8nEiTDghXupaQxVPCaqTTiWRaebNXNfF2TqG2msAoZ7L9izAYkQynJCE6X94iaa4smYQ9pSNk3xd",
  "key23": "2S6U7434rxEd7rRKmGTn2iFJxYEwP5PNd8xMf1LEPbhZBnb9V8xeEqbk8bgdEGFz25A4muR3vsUVx6HxkCfn5o5G",
  "key24": "2pES8veGqJ1ZfFPyoMztCn27djpVgkkFN1ajGxaseDFkffw5qKPiCukajZo33wQbToHCmGJcT7RD191kBHcJDqmG",
  "key25": "3XHTg38tCaWMb25PeocEUk1pUws75YRdMgcHjuxtQiXTS2wnxScAiEPnTcFUTAFWsszYuNwpDub4B2DzWXbS2PZk",
  "key26": "3TMrjKXEysJYgt1ECCaDCAtWfFp1M7yvmFCptpeYXAY6y1qxXjasiz7qkeTzQih3XgRZ4S56Jgk8umy7VtS9qr1s",
  "key27": "2t3JJHSRGBJPSJmPm84bdc7vpcHUTZdKRDESGTtZcaGmmzzbAUh4RSRR64XsNZoHHYswrvWCcvzZDcbRoNyXecK1",
  "key28": "5paHZNcamtYu6n5frr1zB1Q9EDnMzULHWKV3VdHkhqGUt2MrvqKbjLwL743mm3EqzEaGY8uRmVgSWxkiv42tB6y7",
  "key29": "3PNoUjKe4By5iy7zkiCPzH5TzTAeqqTDxwJzRedkAuo2qoDe9mZE3RTMFQ913YtTDSy9EEasJic8hWnLLoRHeBFB",
  "key30": "53brmoPaS9oyLyUSKr945Ejq8EAcnppSqBNW8wiixQYN3QTaJwX8CEzBL1bK7CFh6x9PN1wpcSPoCHfy9tAmeycf",
  "key31": "D2CBrfrkw5EZaPQNn7XdGRziPXcsNRkXQF63wbW7Db9if1fsV7qkUymaRMU74LTy7Eq1mA9TNeEnRw3png6rTEW",
  "key32": "5aiR5htYZUg1QKsrCCNH8kxkoiaV4Ki5mEbWjSx14aE6A4CLS47gUMfmtB3Vwb8Ghk9hmTP5ksA9H46ovLi582q8",
  "key33": "44DamPSykPZGZUQv9N5jE2NozB9KmqtA2o4wEpAFFuBLnuZVN3BoXYhAPfu7T5i1yqSzwTtyzxi97NnshJKYyNsH",
  "key34": "2TA2Jrc6WW1afZUCm5cTcqz7k8DcdfPVmX7C1WR8PtQeji9B7mztcejN827jaPkgU54rU2WJiMF3pDSUSMPaTxyo",
  "key35": "4Pqvg2jELavunjFwuw2ymyqp7ChBTq5iipqi2ArnnVWKVQ7UzJL33HExgvSdZKwQgU9imWENjCXHMamVj7pJUhwZ",
  "key36": "3jCQDEiUhfVZfC2K7iEkSYUY7FAqUJD8uv1VrPhKeXtyfGJAFvY6jrDyGqnvWahkN7zukx977R1UrVw3AwCcN4Eb",
  "key37": "5fRLpCRdxocjcmcrZWdnaCEPcvcdDiLk1QYFbzz4dfqteFwTa7Usvptp2Qnv5zWY44uXCHtQRsWQDFmZxpT7NYJ2",
  "key38": "5sgoSMynxhKSFMkyXzGy9WkpjZhMNa1x6YWPUMh1Bw4uNqHtRiqZ2oZdYYqr7iVfaDJiNWBKZrDotzkpSHrFHFxg"
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
