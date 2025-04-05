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
    "37bs2pQFHtwj8td6du764NDXEkDuhxasiCBiwfxDxVr1XwwGATuyxvBFxUYcpKcdb7ek97o72ce2rPP6f6Hy39Xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3obF82jsR5kuCfLcXZWhMPv6ZQT2hQkrQ8kWb5wLmse8SWFEG3KT8PazUb5xV2VdcUxJEG3EPPhdpgWRPh9ajfsS",
  "key1": "wVfsj8t2JFYzJGnab7UamX7DZQMh2uPf1zREZSGRrH54iHDfKi7YKzvnVhxJwoqpkhoZCmijKxzb6b8iEjBtSoU",
  "key2": "4FpBSdpA48Lne5vYGgTydiezzoyoaroN7FnAoEaFpKWFgeSHiWYJFjNheLC5XpBCtkVfmcwJzK1rJcog99Xt54rs",
  "key3": "5ZVgo5rBaSqcPwKtRN52XP5SFHaCjmqzWLyJdErZLLvhRK1CYzH81sjakTyhYxjKYLAiesqPet5AVFyAsKyaNVmg",
  "key4": "3MjYW1dERTi9rBBaaepj22kUP18WMwTqZDttkF8hhscNpVN43SdumfkQR2Db86cXJ8qhfqThoSRrq4ueEsT9eJUw",
  "key5": "676A2cSJ5QRcz8t4D8vVSWnq3heynzCidmJMoAiBgtBeXSWhk227ZPEec657HaNmk2vRuewGhj9xxQS5DEPVwci5",
  "key6": "3AjzvBvjGcN5otGZaTBKwNNRQMhU8XzZiy1gzW3YqnRhAFBKhbENkXnkyDypPLyra6j93iWDGYg3QacNmYo6LLCd",
  "key7": "Z3xyrguLDAZRoUqp8YUB34KVGbmLew3q3BxuhFBCx2KUagKzyDccoyhewTaBeXHd3nNzuAwDVLURV8U1Yjm7pv6",
  "key8": "4jBcPjc3yj2iQnrErVVGD1noabxNycdeXdhZxpeRncqbvb7sfcScoVadAXb9pCRkGXRVqsvLViCfjM7wVvkk5kX",
  "key9": "4ca1fRM5be4xkd8NSbqnefuwUu7D6rZpxjAcRSFUv3srxtmb4byX5eksNLGpDP26JzsBPh9x7Xm8amwzc6CmWrrV",
  "key10": "KHcsLTkepKyrdLRuqntZCA2yjKLhh3ipkVwYhKvtjgEZ6zcuE5tjnxFSZQfvQJ7wanJ64naYeXzU1gX5Zqc5kJo",
  "key11": "2TMVLaxYeDoUtTYWdKJEczbRaR97G8wVHp8fSN2WFvkahCXHVVusBt5VaqbffNNdxeicNbjhgjFgnpjQZ91bEZrU",
  "key12": "24dAetgbdkiTtRHPRVQ26W3i6q9JDyCbzTAQXc2YMhc6H7HF9Hf9zdTRQ2BtKvtBJfJnJAR68sBzoRhTHWAFSB5R",
  "key13": "3drUgD1kGiw9uvE43rbBdGQDq9jhouikyjcy8n3kEyMtT56QfAjTGf1GTGSjCZok8PkJyNETLUiFEt8pcZPpvDXJ",
  "key14": "3tn3eNeQvmQ87g71ce2HMLW5oWgGTfdu6UmauCJjPuRnGg8JrM4NURg4teXyZKxcVF59fXVeDvFDhKdNFDXMT1Vo",
  "key15": "2eskuRTmC2Uken88qJtNVUUUKjgPMVL4K3XJw8viQiNuGXqeVP1rQdBvYCMAgGgGT72YDdzAYrt1t8jkaogJjE4u",
  "key16": "4aCvCeBpVYXPR3wqSyWKiHKWBUfhD2LC3gfTkAhC2nn8bXL8KGgMboHobSTbXYmuPgwwo4q49DbcNycWjdXcnuj9",
  "key17": "5T9EKyoHgrCDR1hVSsQiDyD4wv7VKW15NPq58FPt7qk8ofSao4h1w9eoo4DTcXKerRkd1zUNLWu9B2pMC6f3kupa",
  "key18": "2343w3Lu2SdSieLvSHdft2K4u3ZS11S3grspA921vcANwVnpRcX5bTJWRVShkN8VQQD8j3uHXLCiPYRNw4nJcmnZ",
  "key19": "5mmvvqCk8w8VbodDJLxN6bJw9MxKN1dwEoJArU1kLSzotC3MYqoqKDshQzdnHUbu4sryRy2jNom4HdCKx3KWne13",
  "key20": "ckXadH22LktpZT4pgjre7vTq4Fg7zBEK3adNRrHaP6xrydXQGu6vY6XEBECeZqqk356986hrRXi6epwuLvYmhhV",
  "key21": "3Z8JXrD9cNJQwF6yg88ErMEvJtMS1ixwPFA7zsd8T9igLvwmeMohqfmMNMjsHmQ95AoxtUKunquzMuiVTnzRWTtT",
  "key22": "3h8iJ1m3Tk4FMUSNk9cMTYtfEuQ5U2FQCrJECmS4AA8Ehd4D961nTDwGJpozS6ZrwqgfMVABbFm8LwMLEvzQk35P",
  "key23": "2PSdsQxgVKnSGgSNKE5BfEu6fRjCJEHEfqDQiezcM1zE5yfEJo4sz9E1wQYk1VgpkMLuYHKTJPvjCvJ7ZSeweajP",
  "key24": "5mzSFUdwowGxRuTiuY34wGwkzZKCRqAAp5NdLTWDFyyV1cqPgC2diCYDk2avUR9z4FrguHPb1riC9qKKypBehfC",
  "key25": "5dwwZf9iuwAyQveA1Ef3ueUnkiUvoe2FWmdR1x4sMGi5SMPKYc9WYp9jjAPCBninyDM4nhBxP9dZbnaNxukLMXDD",
  "key26": "5KEuGFVY1kH1zsEecUJouqRjZizaYreZ7WnQQm7onBXgkd6QiU5DH5pCMgKCugk513LQgE4Pjv31FjS8pNnL8Fqx",
  "key27": "3p3wAXDEEjiHewwMzinLgbWvCx1zWEwarWc4Npj5Uia4hMQy1KBq9yHE63eHijS8HrQ58VqG7cHqMB3zYhXKTkRc",
  "key28": "62nHEYw2gkZRKSU3CNDnJ1xYpoc8zZSyoaeryXHLPmCpPuoBXQ22fkMSb7ZL8Bm49v5kECEwMq7EMPVvupoSoFaB",
  "key29": "2M9fNCisKu1KniAbCZ1DEELG7pX6DPw4wP5JnxupPijLGrrkGuuuyiuVKjFmRa1jAsTYW6zyTNw7ZEjzxNL2dnTc",
  "key30": "3Vp6mxw3JjJNyv28K6r8zuy6pguu9KBMkfZ8r817yLLLTMHoFduKvHDxwA6qgCp49KLinrfPUFdV4ty2LSqfLyAS",
  "key31": "2mAwpRrFnYS9Tx7EFDdnYSKWoNL4JZW2GKhixRSTyEHBbi6fnc1huEbwaRzazavg27Vx5gUszBcybn31i3F9xSpb",
  "key32": "3mov3WE6Wo1AMFjrAbGdxZhHViasyg7FxGBJDohgG87aJYFWoYHrtWMGmAQDzp76Nc6oFpfVwmnpPTrjLMMCKo2r",
  "key33": "4kXj6Mvs4wpuigzjEV1imEXS6nzxr2NpsXC3X75EogCDzLgrTqSFq3CSAFZ36T4yP5LCxkgTcrqJ72vyQemfyBwn",
  "key34": "4i5pHeQXvUDzR4WB4eDt8N8pbG5Kpi2ZJKvChmQc1zU2cLnL6Fv1L1b6fYnXYUYdyMedBEShJPGJkv3w6VBDyjuN",
  "key35": "2vYA3shxJjUsLcrNDYPzwcYdYNrWXhpUSmHqHc86LXHLWUugKirBPmCT5Mcr3rifg6sTfhLzdEYy1gVpcrKmmkQS",
  "key36": "5hVRvm7J1WQjrtczBUsUASczenVUs53wvAnKQxVCKVL2MQHnb3siyiUAeA5MDFR8snkNa71D4t9zPsvmJ5j5TFyP",
  "key37": "3QLApNWdkFayuZMHs5NLWZ2umv63qyEXTmZTFR1ho3bXbfBnbSpAehKAU1YMYcYmvRviRTDkMgHCgP5Jmg2wkkxb",
  "key38": "2DC4NGs9D9X4mXgNLBcGRnoFgwLHTM5sHJqrSUWuPjMMVh9bEdXaVVZGaowhDuXNcHjxrr88h73zxbfSuJyuvVzs",
  "key39": "3DtB4zWahJhbpsgC3K5Qx6FWBL2uUNJpqpUq1AuNS2FevYq3RrY4N2XaKTApuXyBKRo6tnD221zXDXSjT7Tjbnr2",
  "key40": "4psNYkxsFwRtfJ2CsUS15yyGwfoJGcEexvuJP9HiiU35xH6gZP1fxFFbgwppmdnrRHoekTypqmPwgBUKU2behkDd",
  "key41": "3pqQzHP3rPU3MSrkSjLgsFhLA5pgjNzg9ECCT1h7d2uhJ8MYDTVL1A3U4sxidjU4DNnGGj8LJUFF75sj2XoXfhki"
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
