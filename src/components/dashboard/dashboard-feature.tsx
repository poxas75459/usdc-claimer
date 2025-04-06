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
    "3kQeDEHwFtPiu4vH6QZ2QA9UYBK7H3Gkey5AcUAEnL6J9rWDtJYpMsdeREzm1CLsSNzrnZRCV6wCz6qExXic5nGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46jqQjNW3tH2GjmEREUSBEZSayZraysVFZiC3UmjksEKRiGAfM24D5H5CELNRxwAqLURhf7AdoCJ5iiMr5KfHzXo",
  "key1": "5i4iTxKhvGb2X2f9om1AseGuYkx8k1jztoYjFR2QK3mMmEg1u1n8nQYYhQbmAcdKHqxzRFYaveXN9qz9rTGBBf68",
  "key2": "HsfVn8AeT5CAUTfVQFhzGLtrCsQPE8MJCzAgYiUoqvv6DGX3Ak8jSn5YYQh52DSJFUBmbXGiN1bSLFqkqAe6iMN",
  "key3": "vhnjdd1ZXXJGQ53pxAsirj3tjhtd9VWh2Pasi1UTkKiAs1LvGvb5s7L3xyAD3eSvPMktvKj2igg7id3jB5B6yMc",
  "key4": "6VEB4Lypw9kPgWYjUbQDDGNwoVGoiqc9tgv8zzHzVTP7vXNznWiXbgD66akbq91GG4eAVYmTugoC7Nexvfk9ArN",
  "key5": "2xsCrBYeUrXDQLCgTKtBP9TDHB4LwdPFhVSt9qj6aUqxmpjicAQB4cHgSoczSNAiezod2hxGAxTCiL3JQXnLzoLi",
  "key6": "5uFRDzfinK9GA53XKEADw2hV7AXNii9ymX89coBpznB7C3Bf67X5yL6o4Lo5UPsXAL5XX3wRdmv3vYWbtGsuQJGS",
  "key7": "5QpesAxtk9Cr4ajUpXAMbG5RT68GNjyHBcLyCfXBL1D7fk27nbyfjxyabEuDpB7SN91V8z993zg54ord5FjXwXrB",
  "key8": "57uAb3NkM6WtT4rWfzoyn1f5t3GtxmJC3CyE4ysKdQEzcKErDKAAu1HYMRJqfGpc751novR4eBy7LFx3Lx3uqgdg",
  "key9": "2DtZqGcBqdKQ4D95PAPoZNBo7wBhUtFe5VFkjJZEJq8qUfAdULpHu5S3gYUBcYuZGSgfpwWssW1W5fjnr3waaU3z",
  "key10": "5TKXBCAJmRztWTJTBXn8WLwUk6XoGV5dv1FkGmGLTbL3d3cJv9rvJGN7yPnuEtfMZbMeP11MLfnTaHtMA29RzapN",
  "key11": "4BgFNzAh2cmUPmJ3KbpApRMtiu8xRn7uwHqsyoUwyMRNqAGUzjS1758nXbDQQvLttSQMqPSHCPdDAr715BpAbM6J",
  "key12": "cNb7engFJW6LpnW6PMwcXB8rx36tk3UjXsyieBGXH6BmtdR4vXVJ8B8F3wXMJAFGzeyRwcSsA4x4YajTFqw3NmB",
  "key13": "3Y5rRaqHehX9CvxfSSKyYsG11Fn9pEBxVMqMKsSAQN7SYZoNudc2Aavezai4ofC8DZ8AVpmG2NmcLomAC1dqq2r1",
  "key14": "3MFRBBKLiWhxuShYPhGk8hZRH72mAB68nWRHvHgZQvxRAPnyyXr22jrc2V3Vs8oo5cd2rQ2Wq7opgMHZvoqLhM7V",
  "key15": "2Fc4Lo8rZceKM3aFwGHgKEezj8YDPLRuaNv7p9XGVz2fdgnR9aczRAg8m1qnVgcVBWtbVcAQ6WkQA9KLnHpumhDa",
  "key16": "2E7M9iFCo8fEw9WcgSupgin8CtvdzgfAi8pks6WJvfN1tE5p9F4kjhzsRnUsx3BjrJsit4o5QncPgnfsWrea4aSx",
  "key17": "zWYKgsdg81ojHs6Y488VR3QFKqKL79bVfoEkgU8uiNPZ6voYGS2TcM4b8kyhcKXYb8rLWuJz1Y6kWDyjkMidGeh",
  "key18": "5Y6CpER9jf8yXAN2eEec3cfJ3eNAfg3EEv5qh2YnYCXSb75qPrAtELbsRxJWx5UAH82dPTom3KFHguhRCeNG4ZyA",
  "key19": "2ouvjUTrrsyCxasEh1yuWVEwfaEnqVXn7Zr3fz7L19MasXEda6nUPoXg8yJMY9UiMKbguQYaKdR8cnAaGzSwau5w",
  "key20": "LiDACF2GBv4Dp3tzSrE4NtWpPNLYX7Jshxw514daL8duquunKxcLYUwzKu3zuDh7TCMYTgXeP1GmQFWDARoA6uD",
  "key21": "29cndaijSr6bk3kx4NyhcYkafrStXJo7BMprS2F77m1EC6Y8hJYyioBsuGB83trLqBSSX7PZ7BVk5NdBozXaQdtv",
  "key22": "2DnoWyPN1TrYJP38Z4a1EhRJowPwsvk77Ho927i1V6yv16YG87pvDwYq3CVuJBwmKrRHjr73CbBcnNwEwP3JH3o9",
  "key23": "4Yjdew6t4vSFJz8NAz9AB9BgPg5jFQu8HeSUWW2sQbthsJaJmrLAjLxAYj6CZmJtYq4qfKzhuiW6QYHsE7fZHrSe",
  "key24": "5YERYwpP4Lggqs1SE5oKmtS5bZhg4ywwY6CtMNh2KP9CRb8LAQwi83gYcHBJd3SeqJ9sTbopXDYAMsARHQ3kdVm3",
  "key25": "47kwouofsAff5nmKNfdwaSMLdZnAwV2Z5cg7jAZbx8qwNPzZyo8mF91GDiV9fL3ym1PADY9YChQsqAhPe96X2rry",
  "key26": "4KgoXHPkSzapz1KUGN6ajLc8AWPXX1iqLDr3aWrj4SQ2mSUaj5KKuDNgpN6NSL3uwsZeyw24bU2Xd3BBvuhGj8CP",
  "key27": "5NrYBMGEdHHgQZiQVxhbwYDUdWHXpjnXxhBUXUoYhwYyCVzB7VGJncLsBDmQr7Vmca1QBFBMa1yETUvWYQHSu9AW",
  "key28": "3iTNiybRumbpUGddCuNYAmdZEYnGJY6MWm29Zwy3XSrLKeXn91YXMm62ynrocZvdy94XXq1nMUdaEG5gycRTsAp6",
  "key29": "4PKnqhpx8HsTTBvP5rNiH4dEYrPDJbtPYQonM85pgeuKUkJpX23U5PUqtpASxpuvfWR9L2rMdmTuCE3thYa6EQNp",
  "key30": "4EbvutJC6D79GqrNPaDLeZGbZJCHTRVKVux9GbkcqviPHbakkkHyFYmsTWvhUTxQvfTgLBtg9nSnMXG78F392SPz",
  "key31": "4nBzqHc2m8QekmmBBHVeqfZVeSjs9XUgueqw2UZw91P5SFCrMSqmAdrvWv34mAy3vKwqBToETRen8oiW9BRVfm5M",
  "key32": "2uxydPEaKkdDtLimqNHTyoDSU6npfthZyF5jtRb1X2pmDMTBcEVYotbawWbAen2mgRoYbpgMynVcPJmTKZhTMiNk",
  "key33": "2kGcWXtEj7QkriT1r4dm4nmbqqffsQKyU6gSAL4dz1Vk9YGoARteMwe37AHNdm8FimwW3DEnJP79F4mMugnvCJWk",
  "key34": "Qv5uTVRCWkdkeKwNVnfYcghpX8HKLXYvrFmeKQm9rfKMGNtSEQpUfsVjf6ZEpWm9nmxvyUZUgkymMeBGwSkERmA"
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
