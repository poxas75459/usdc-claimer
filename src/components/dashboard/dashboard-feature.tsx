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
    "hfAwBTErTG59Y96oEd8bGBRH9cFMCb5SYPVwWsyWWAFQNFm6DYH7qfe6p3QrzddnzHhJ8Ed8bVrVA5jiGCUiCrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afiZAzP9mh5QttN6Hsw8g1XuSscbGHYKJqaCzdFZYsrpeTDNiXX5hciQkdQyfzRn7kzrUme2DgJrv3JRCKs2fn3",
  "key1": "3BEPhv5uJe2auYNZQrEA54iN4rBtZ7iYwo4tyPK769oXhe7319ZJxDwenEu4W5PGyu66y7oGA3JLB8VbSScHUggJ",
  "key2": "3Vj8be5GBhuWSaxwd32U24FyVy3WteHvjA6Xdnnhq8qHz7idT8SXA1V6Jw9mJ3FFQMTJaPERs6QRLythP3gHaNKV",
  "key3": "3omgBXRQVJZVaDwqghBumnTEUv9oFzbNDTn9c2x69wzkphmha8kcCx6JKaj4Q9qtbUqsLNfABLfDoU27dY53wXrc",
  "key4": "3cxaBVXtWtJUDpb1YEGgFj84gK4hNCMREAQkwNoSs82RwWvpiU61DJFr1WnLqLdr4yreQDBLN8SyB1ybTVz2mrnJ",
  "key5": "vtP8CbKUhwL3BiJa9p8tCnDVtMGtC5nns43h1FgMUyMjWEWwNtx8dM7AktaKw46qZZUjS53vxYYSdPXxJh8EC3K",
  "key6": "4TfVX1zeU1TsDxx6BKpVZtr9H5nuqbgdtY5cpy2BeCzeFwEcom83op1AmsDqc3tk8EGb28Nggi1czuvfaSZP63S3",
  "key7": "55yfbrtS3KM2c8qupndhtQvx6qZRbxB2kXWCVC91jGeY2yx5NjTmNYJaicaJ84fbJgei9iaUxpP6MFrfrcXBidkf",
  "key8": "4ckoadZ77griAp7ZVbrUgJRHMBHzNQRbBggBhmopZCLzp7W7HJjiTJSSBGGLABdbQzyFJQoaH7qBxhbz9j2sMUQL",
  "key9": "5H51deg3EJDFym7cYJtRG6NZJfMLEkdshd1cjVNhyaqKpeKrkdbWYotUbGFNnHncBnQpWAKwDAAV1Y1fbngKGhv5",
  "key10": "2EbkYCzqzkMkBMGJtU4BhnwhiHSRHC1f5FBL4UMwUC8SNMS8PVU1TJGKQ5rQHZbWjAhSrGq2ytxG5twFzvejPdSc",
  "key11": "4rrebcHj527TEZ9ac36HG2LfBXbKsLMNhNiEUiCoKrBsEhWM3Fo7D3fjj27dQwyMW86vnYBrp5Mfkty7G9nenwhi",
  "key12": "3CAiUbk3wkpRn2Xrdt1FZYCFzLXXsEb2KSRTGahs3E6yR3zZAgsK7xp8WfDSCMtQ6ZpcTZ9AKcGsboQSJhQfPMG5",
  "key13": "YFNgrL3FXBFfZBzQxNZeFKh5aHBfeoBLMurVXuKwuQ7aX2hTVqXCJPGp8Yx31VJTdbuEWq575sQ9osRtWXhU9b2",
  "key14": "4H1wS3Vgk3GWDXWtkqSkf9yU6nbiejq3AFSsXyKqyDY7Dbhpp7xq2kxuwbtEnvU2FS8pnCXEP4tULRvwnTZvUDru",
  "key15": "39nmKZaFqYG9oAFBoakjytFsikxFonjSyGZG1MSVBQ5JUnx7yzZ3e8TQRbhZBGs4axU5ZaGnEcLWZ7EHFq3A4Gjm",
  "key16": "3V7Q9dKPoW6AQ8R1jXqpDFyn6xwFXdn7sMaU6mhtsgH1QKcSReWRP5SkSA6MaEBPDd6D9hX4yy4RQeqJapQ19YdC",
  "key17": "5EBmqu8auVD8PXtR9j2pC4V4PrsGzUz6XC2MLkbaU7ZFZaMrDwfKo4iXrxpzXx8BaGzZpHLydbNV414TpiSdYh2s",
  "key18": "4nAV7o4rXpc1agbUuoEQhWq8daVUcHn2Wr9bufFXR1xuXQJWfftgmq7srs7AZG14dBTXVKNcr8e3Yqqns2hTKGjF",
  "key19": "3G66SybWftseYkfE5NMsX5RvXDikrCignBQ8r6y8uBUFBnhmKsPhuFt712SqzgYGgUnNDA5ydW5M6hueVJzSb8do",
  "key20": "66jVCtUxoTrBDgevESAVbU2q5qgVn12wG6TNDSUufebd3cJT3ADwrUgLjpVEewACNDX1GUsMq8JsBk57WgVC3Auc",
  "key21": "x3NKoFd8u1ipZgxQiwktSTTfXn6kSzFkDn1fVT4UbzC17f1z6uHMKKpsFeFQhVeLdasF2VjhfsZZxj1g5BwUL5z",
  "key22": "61NJQ3LU7ooNuU94hE4SYkLkaV6dy7JRBfhS16Kq491xqHUFJVnYeJnfLJpDBZnawU8etyQ2raujva9TZLkisAhp",
  "key23": "2dfB18w3Bb5EnPZ1goZKpqUwNWNaqQMWLHPtBo2tGQ3uvcjkQcTxo9q5pVCUW69hc9PYZQ6YPkkGcsWdcdq6NsY4",
  "key24": "32VJuLHTE4vJPiBEWeCbAMSzwCzN6SiNCqVn9BiJf6fzG2SpANBnmZpR5RNt7oKYSDpyhgMjS8pUcMKtYGqTmQSX",
  "key25": "2y1upcDnVmayzDzGjkH1iG35RkAMB2oSRyvhLCrDo5JGVaPBaEwQLqr6FrtXTtGtgCsEPLivgwdU2cZvnVA9HRuY",
  "key26": "3Zombc4DEJCkRwDGB3vegZ9dyTukRvGDp5xhJLuNQzLmGESt3vACFfdQTnrHAKVk5fiHnoeVLjD4XX2hi833NEWr",
  "key27": "2NdQ5YjJ6e8RTCK832vAQ2r2eyfS4wJS8HcxjVWU1seZjMdw6re14oq9kN3tXwS4XJ3VJ7zxRFn7nR1abjSnrnX8",
  "key28": "5ZrCPRCVmKyYSs7NHH6UFKf9uRr7S7rtZR3uJfSEnS2bmBN6w2t2SEuYNKrQcnQhHFPVJmFjVinotq7DE5UofS1Z",
  "key29": "2bJQEkVvGYxpENBUbBs7oUR1gqQLeG3ubXxuZzoieQehdPCQW8WgQyX9Joe8R4QARkLixkcwLEw6UCNmNMqStiJr",
  "key30": "i23XRAx2WCG58U4fse6JGbucuN5SiweSCPqoTz5y4F3VXoqu9ANHks4rFLFNbH3SUMKWQDMiB5WTUVC8ewNA2VK",
  "key31": "5yKoT9TUbc63QJcRPMiph2ZojpqBo749szeFcHRFLhciDbgqSqdKw3cfZkoWSvrXgZT6niWkr5gu1N4bUSVPDdEb",
  "key32": "5fcuWCrTsKRCCNgaU4Y97dMLw8dfRtNAeftXJLHtPvKoe9iQU3Revz6AWaYpva8YqCqf7pAm9isS1idBjiDUKZ43",
  "key33": "4poSp3LTAj347KngLUcfXpgBrfDvRARSNUQE1xdaXDNFf4gnxZSwYbaFRS8JDnZqcN54j1ym8SkGcXka1A9MZN6B",
  "key34": "BjCidCrJf8zuqcs9E7vvRsqVNqRnd7N9xDM9t16vQyC3U2psPCJoF2guVuSwuJiJa9FP5V3sCLZXvT5KmSPDA2j",
  "key35": "5My8pvXmVDJ7xhMQGjGtuk7T9CZ6Emhz8b1U4SyuzuXZx3MKGqX83GVFkHwBBH5Vni687HkhRRdhKEpPLqwVNFg9",
  "key36": "N8QQ9FsmJyP4rkkjzHUrmCQ3566C4jJhAuaGcNJxaYnjg5hfBCCK9uKaUGDd7FvQ3NfqVi3XzkzK9Zus9FTQeEK",
  "key37": "23M9wQRPNfjKxHZpxn9vYJ7kcLtX7Wx1FxyPwvWpwC2oVgVWJjMsVGU5cGZ2kP6eUYuicNxbjhDjd4v2b4xmugUd",
  "key38": "U9A1Jfp4FWebcYS2DT2iaGxHaZ2dwYYmMM4furKyU6omH9xoPQeBzXUH5AqEEdPByhfo6x9gWdhiXe2ih9RLsYa",
  "key39": "4GZu5mYs8ZLW58A9ZndvW7au19wWNudXAGegvDXRzjwHC9zaQUVMuxXYj8Kx2oXB8EN6a9GsZ62rqaSgxLaU6w7n",
  "key40": "5ZfVLVtT6KViA8KNFiVLNsrnk7gRhU8D3oJ89X3GqD7gA4pm3unjZQpCfRTcSQcPTbXCCUYaDzthPdeu6PT986MV",
  "key41": "2AEC9VtzbYWzt3LFwtX83AvXtLyLKhW8GmF1tCAYbKoZWWYaMmo2pvMJkcbFnywzHwk8sRbD6G6UnpMpMrrsp6Lt",
  "key42": "2cPJomG6wCzPb4JSrQkDQYLSSLnc6tMQhgpk3CwEMQDQh5mWFUoTkjqHgNbgVG5KDU2d6KtowhMBY7kbAbGz67xM",
  "key43": "55gh5xCw3Swn3ErrpPqjLYJwGyM41Kou2W5AfNARXEjRBcAsyjeAHCHiHRA9DUxU2sCrZfxbCjLYBSpkXqv2C933"
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
