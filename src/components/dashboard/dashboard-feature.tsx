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
    "y68wsAnnWH2aVxdFwMSLUFTWoqCNEX7VA9eLWeAU4DyK7hVoxwV5uhTQZ7JKXvVF58wbmyuVWSg7E3jdXgoRfce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LshVPGeEThSTRdjaqs6X4aYLLcrWqp9jQ8t4xdvodJKZG9qF4PFpJg9ALh9uUD7hgaAuEEdbd11GGVMFj7DvWQ9",
  "key1": "2eUXLpoodTHSd8JMbicvYP5VeAwNHghfJdrfnZRa4gYWpGCZh1EPV7DVqJGeKgJnxqCXeYnCxBTbZndhJv4Tnd7A",
  "key2": "3HuLPu61mZVMWbyAaaWCckHCvaYSf9gxwTLKnh5GHcvtzXpuV7y7rx1abpL2URVGiei3TGFFAAu5GVN2dF9oxmD4",
  "key3": "4nScnAYWyJqB6qoL6BGS3Ni7fCAsqj54QgiY3cEvvsm5d5wMXgNzg5zkE1VSXGu2TGUkUhNdfbxKEVPHRuaEVFKp",
  "key4": "5xwJ5UzTLdwExuWw1wA551Z8VaYBdegCozjjuD4BDovWMVjehWC8UWAeiLHizdEfzwX8msdTwmY8tPbq6GhCrbR6",
  "key5": "21ZpinRYNhPhwUFytH7xYQeNWr8mbdNhKtXsvvRoJkXWPteDJKM6JkJWd15mJdFKsJnCDddXe3cRD8mE7MNZLs7i",
  "key6": "8NbSqeA2TA28CSb6Yc4xW8TxuKuXfVoERPNqhMZB26UJ7HULtPpw5eG5Vn2x4AtsHiHzr8zfn9y3FpVo9EEcp1g",
  "key7": "45axzZrB28rRcTBVXmZBnt4mGpRdD1BSx8qa7MMwVqEtjj9PkrWY2mZJb7Dz4vS2E4PpmdH33KunBeGbx2MuXuAU",
  "key8": "2pGfebgnZgZM9ABQ8Rm9bajqXjRgXjtaoKwjqoxTKjrGYUJtLGyBApG1CYwT2JoimfHvv2aX3rvQiMdQ324wvuuk",
  "key9": "5XHx3J6PZK7mYgnkahGT7YQRGc774jJBYE7JaVeezgU8iobs2AuTsDMYUj8cXL1B7XZtvQwTssvjtXwJHsZxz1eU",
  "key10": "5grYV3ZHENA2H1qpek36YeBy4FnM9Y3wkzDH2a9SNNDfKKDhSJJX8yxupSj63b8MPHfN4s7aFfriq4BNyrM7noQQ",
  "key11": "5mfGtzLSJ1ripLysxJW5fWupKeuqUGPZPBLr5UbrR1AuLB3VVmPoadH9auqXsXSXC7sADRmuDgBrSmXS3XYzzQn3",
  "key12": "3TgTUkHDkN2AZRmcawtL2n4Etg6qXxo4QoM3yPW6hZd2RnvjpMxozggHxcXDKXoP396SBGZ3pjWHgiBpzJrzTfse",
  "key13": "3xcUc7rri7SjkXqAQ4UFJYAWkLgSZeHxdA3kJP4yioqUWpNd7pvrq8TvFNWkqeZ72sSmYT6mHw5VL7MRZDgyKRsw",
  "key14": "63Z1jUrF3DdknFpJyscSB822KNM9jALGUDDHKWLz6T3sJo5qNHLNnPT2CBttn1zy2wdcubiFDGCVwTFuLErHfaKu",
  "key15": "3W1tZRaJ93tkkb9zRDzjT39agPKaYEGcmujmxfk3pRqoiAnWdecWYjfReRQYC9PwvrQoACDSuDTyk2WB3X6Q74wV",
  "key16": "5FJEbnmvVZ1X8Q17UZf1H6dYfS2ohBB64HaKop8DaXMiyyQ21zZjybVnGig4aXgE3THrHatKUBzazv1VNSYqiFp4",
  "key17": "31kycTGmvncZbtzp1Fx8TyiuUgE5UrkcS96LrRb6duA1JLahMpm5je5Da7P2Gk4HUZgf6pH4yaQgaKFNbfLtgnnt",
  "key18": "2khnB1ma8GjMRSqF4hpUc61U2gdmNLVbsYQuKMrkevLabeYTvauUg63LBbspa9f43fh6tt1o7tq7SBctr985Jx4o",
  "key19": "3NLoGhwSPSMfVtnoZg5GefX2ceKygtj9d64keuTGJyHXNc1tgy95fyHKYr7Z8fBnr9jzUSXxWtWv8vibJJWZQakX",
  "key20": "2yfCV1GPgKTNMK8MqmeLMgbZjH9jsBg3hA4e7MCdG4zBccQysWMfSou7fRA8f1xbCAQkeFhyn3UanL9XddnmJ1Q7",
  "key21": "4KwvaUz1rhsQ6DBivGUDa1xg6mo6KozwE5P7tghTBdid1pQSqu8LmP6W6BatRhK71ewrMfn8mSnHWidhDbN1wR9j",
  "key22": "2fSYDS75Bapm39qiVgmVG1nkPZBDDjZSTw7naCFTi2dqa7tg95RvyWNT3fUPshda7m9HhFz7aQv9txGPNrix4UMo",
  "key23": "2YjsYzPT1MGfQgBEiWXkuvAxrb5BmQeiC2ss2SG9fU3d9wwPUebQqR47EyRatfVnenkxdUPEMA5TpxrTrJSGc3Vs",
  "key24": "3jxkm58rRm7VdeG13otcaLBMamDb6Cu46Da2u4VZUQArJeHDNxPMU7NenfpLGabpHTquuRExangw3DJWQakkifiR",
  "key25": "2uF355bJanWLjtnAAbL9D9byNQo3CVq2vm2SoJkbPU4bfuR7YWyuCczH4DJCMKi8STwVwN7UYcXhmNXtpgZePXKg",
  "key26": "58b4C4TXY7Aao1wdQXRs4PzDLzZ334abJRRjrJVX67Tc2QbNEVGw5EkLRUWaBtXKGEpN444TbzdRESjgwXgRmm1y",
  "key27": "4kAabZ3FoirmhuB3mSCGE7t6zTVed2UyfahSVUGwFjppMgc4zYCr6Po9tEtz2R1Rb6V1xcAkzzzjFBpFGaoEDsGr",
  "key28": "bcFLnnjvbzc43ZApThp55ZhMpKecu6nXxMdV78BKdof1vQSBRLGHp69i6e4eLeqgsqJTdeiMWnQZd6gMq2tuxCB",
  "key29": "C3dVTBEwSfEorzWYGSSCueDQVE5XdzEU43r8r6m7ZeCKPC65W4zvChzQc4zKztHo192qr9i4s2KmUKratkxcDGk",
  "key30": "5rf6CDB34XNfwNpWW6LjSGwF5khDWcHVdL4J8Z3Rewz2AxibYW6myaATaLMXEcHFKWNy4TPhcMtEfpvKwnggGRQa",
  "key31": "3kgyq34qZP2decWJ1jP6UyT4gtQfG7pACcxykWKLYupsgNkogYgGGrCAm1ishHysqJQbQ2YZPHs3RDQehDvbkpsM",
  "key32": "3Ssuxb6tHUZaCWPUo89kDNCoXmsMToxyArymUNbAaQHjGHka1MR6dfKn7Xx4dzM3HnKc7qrmbAMF3hSPoGtUSJHQ",
  "key33": "33JPwDCLf3dFRCZDJJWvmn7k8ihSzoseLSuSzuuQjsVcr7fguqaP5kFyQXRrAieoxdMhCDum6mcA1FpoAon6uizR"
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
