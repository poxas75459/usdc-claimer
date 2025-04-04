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
    "5gqSfs2gtxGDLvr7KUVesgaK3P9gWKAHZLcEFwUmV1vtofFkm5gDp8x44mSJcvpTYu1moPXirC6gM4pUfNTVGpNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRfVQZanZQUNeYahUJhru2nGeeXxsiXUyVdKDA6kJNLeksjpcEv91BTc5FmVU6zqgAy9qyXBK5bjCmcALDNcwih",
  "key1": "59c423MsviYiVowwrkBHogfytWPznQ3k6NrudJUt2hUNbbWWbxN8HAxAg6Fu8MQAoeav9THAbzkALA1txzgPngLX",
  "key2": "4JB4DK1jgTWL8i3urZjvngtJmRyRirs4gw1oAQA4dt5adWpoDxAYmyrgqrZUjc7cDH4CBCKAKMemNhMJxNSaMzdX",
  "key3": "2PoGAm1vzAkjyDrM4yP4bN16vUao6hakfHLHczudnGxY1F5LGbnkQeG1xHgLuc7MKM3qU1WP1aTvsToSpQx55Ei7",
  "key4": "2cAVbf6ov2z5kfzWLxA6kgReVcLcoX8jDYNJPa6vzq4gjrdL4BY53uZuvwtLmqYWB8NJdmV51R1xi3k5qAU8xCYW",
  "key5": "9aRQHXTuwDtavHTXs6oDtysqcQmSKiGAJdrAri1TGu6q4bNVUpv4Y7yfFEPKnAqUgTweUe6wopVtjtzbQKwc3y4",
  "key6": "3rbyJmno6QLtTCdfjiZ5ZVhsxHhseY5WRfx1ab4AajTSUkLxd7MUh38Tf6riYNNfKGwQXQ9hyFLom5uTtKg1ouwy",
  "key7": "5yUCzdoXkZoV8SJQM4a7PvGroBrkrj5H42S7XSQPCT3cYZYBZxVofH9oiiQLWWuEiJUfdnPnaSrWYibZ4xgTDMWM",
  "key8": "2Uhh21PpZM1QLDeyGQv7MmZH9TQvZuGvs1DnGXijSpfwKcxjMxoUX42WPvY7RJjH5VvhJVrzPawjVanRRtvvNeWd",
  "key9": "4h3kRdNNXfDGDvVHCkcqHAEARxsAB3DiAztq2kXXuQLenWx7MbbUSTAS1Pc9DEYEWdQAK3wXJPmt5TzaJ5WHArys",
  "key10": "5U6so79ULwnUYW3HDnCCVV2NEZUqsjcoYeXMZ1UkyF3FwyDuJmrks9TQeZL3eN8JFdeVweoLqTcV4eZTEdWDhTxp",
  "key11": "aWwvKK8Wi7C25Lh5gWxnpsQDMfoKiEc4LWvceucLzoXF3KX9NzfKnhmwjxRg3EqitsUzVPoSPJPMtaYXr7yXXF6",
  "key12": "4wWPvebfm5wLdMqFAdapTdqxPWR3CghksRXSgrkt92hVh8LbMLa2enzaGXqpNXMiw8K8vtXQQM9nFGvTd1gRwvw",
  "key13": "EbVuFQdRwPWKfbp4S2Z9g9c4aTMeubQUvku3NsEc3irc3urrkkJByfdeqezTif1UL4nq2N13sbhSE7JdD2oxBf1",
  "key14": "QKKdqCusGy3JzyfKcU5yes4s8r98FuWYvN6YP1dPHnhdsMBZcsSwMtkYnLQGgdX9Gs86G9JXNwfCnUs21rJhFk1",
  "key15": "3CLcJFxP2wwteSykmDnte5AwA6wRfyUm4Hp8f9qfFdVZ8obSQvc9DZ6Tj9iUenpbLgqCg7TGSkDAsezUBVrTkyFJ",
  "key16": "4LEeQ6Prbk4nDApuJFkk4Cy4RJ4SMUCRy17zm6zTEVuQhHWDWEZq9ETuebe4EuHUnbe2wkY7JhEQbYCL5seQ5U4A",
  "key17": "37ZHwDddpicNM5DyXsnuvvQBo9x4UXJWmkcYzf5yR1wwJXzep4EyBr8DTU7BFGsJvyJpUfEqW7tf1x1WFZ1AUBmB",
  "key18": "33S7X16ACb5HX4tCJ2G92cm1DqAKUQMnaVsycrjQC3sNvFE14jiZ8Ng3jdRssQh4BXzMcPTzgUJcbSAXgLngroHk",
  "key19": "2UB5Xj96bB1gYLc4Sdug54pGW3mAEVPoutY4tpPFATcemRZtUiiJ5uprZ79dSZuePCDRcT3pjKUwcxRna7NiU1QJ",
  "key20": "3Ntsc8DESc9XLuVDSZvEMFE19eppvDvkzGQLoz56jctf9jtuzsDxWYZgJomCqbSjunb7NLtLcpeioa2Q9UA1GkwS",
  "key21": "5bGjy871sZBDHUDmVFp8uh1oDQz856TcwC64riLAR8SBtBXR35jFjAXE4KQUn8HYPLt1YCoWCW1zcyYkwWGNFLsN",
  "key22": "2zBAES11rLeu47VHsxxgYXbLoLtUZNNGUeEqGK7vYhZiQPDFZsEpUJXLfs2uqg9tyvCXYywgvVBzdnakj72zZFes",
  "key23": "wAo41dqyBNwReHLzN8q5RuunqUvkjuKm7HtEtt8jDsKdgi2JdeNjwysrQmVQScX6hiNEh6Mp8TxRshZfobk5hsd",
  "key24": "kyJxeffop4nX6Y5XPbBDf2FeGX7QfnNWFa7pARgAiXHeb8DkCNYxWQL9xGJcck3FSPGkRh6G8zZCNnEFZVJ1nvQ",
  "key25": "4CbrV5gi8n5YuPq85DCF34V7vQFoJXQU2xuc8PJ6iox3Vt5xkCq7QyeZSE2XzFDrHYrRZnybL8jsQhaRJQZ8YVC8",
  "key26": "BGdwibbToZtGSPVfSxGMAf5RGcM2y23DkbZy3tEZXUkZ7YKrSZEUNfPtTevVhLP7rhVmgppt3JshALVsjRiMANB",
  "key27": "4nw9SAQYEmP1Gh4rSEmBriJGtdFaQyVHdg9HxfrpJVAEWnK3aDaLptnyM99QB1mgL8vH86gFjpMvBEBtty8V46N2",
  "key28": "4R3tqK3pXhnhwcYnERRN9TdWkCSvxMYq21M27KWk5tEdFt9mBruNSrTPhbJb6b71WQyuJUMoX1kVkQhfxGnyAyE",
  "key29": "mqVpfmCxBkHSHWe4VNnHswu9kTos91G6RSWDjcQrYUMnGYJucxTHzHVBBPDnzaJFo4iMaNviojAkfE9wT7unVPx",
  "key30": "5kRU5BsQTmoY37LkeZty7JQWd3uMfrjgAGWJiunNJtF4urEjFG3g9h6NkJTbjKd1qDhZmNM2LcC7W2hncQQjmS3L",
  "key31": "FbKTXexiEkAT4sK5agABKUx6AKJin9FJELfZnqtpNXM7yEx3dpcZkRvmpRkYCAQVwR39wkyQA9ZPgdQpgR8CAG5",
  "key32": "5NuFn8zisHyJFDMjzaHnPeW5iHzFduqzauyGLdMVwj8pNfMYzZUY9CfpGxFuRDFGSx1FyrLt7pPK629nFDoBvEbU",
  "key33": "5xZYGTxfQnuFGKNsh9ZxQUPDW2gw9sUrw8zQhV6BvGcVfMqNHkdMQ1NJAHzwpYb2Z3HjvoaKTHcp6SLmqdhsJUou",
  "key34": "4fyKew2RQf9fEF1iVcpuVNsGRkchCHhTq7vJT6UhThVSTD8F6344RSJgP4YnGmSYtPxLBHaLB28HeYkoYHpJQg6B",
  "key35": "2SoK9a5YrFZDF5n6md9XjshkcSvnJ94ZX4JNz2Jn4ykRFZGdzDCycNAQSVYd4iScRyPQD3LsMP6zV5Kr5cmgkWBB",
  "key36": "67AfMCvkToH1RZTPA9bpqoqWBZ3N4rE79KsJzEkSiUs4XEUWTk1LuaGG9cPrUvB5CzbsvuVrTfii8YCmTnNPNoTD",
  "key37": "3s8BkyMFKiFJN1CeEiyEnUmQntK64w8GPiM6FXhkpCqkuokSyo3RSmziGXMtq53ttaFpZ5oZR8uRZzMMJ6dxiZtd",
  "key38": "66VkwtBQ8NJ29sZkgCfpoUxGpBJj5cUzAKS5kkuKdcoGW2GYX9BCXNa2yBQTyk8B1MmJ8MNYcH9NN8HqkPav6ZwN",
  "key39": "2zir24qABreoQNFzq9GSxChEMzMqUyfBeKwP5Avycoa6nnZ2V4nQusiaK249BfED9vPfKqWyjibJiLHsgaRkGQR8",
  "key40": "3eHRPTehwzZArBYxEKfaupvi8Gw7W8n3tjAQuKESmUig5E3dgXhp2FLnGAakXvzTWrBuwdA5QiN9NyoEVSNUSuVh",
  "key41": "2dCLGbkvUyW59AzNRjnoZoRkZSQVMptC7X2PXitgRna4Qz5WgtCmXAsmYextrtSVB4rYuvuNuc6trth1Fi69H1Yr",
  "key42": "rGWQWkm8xsFNZb5Guo8EdEtrbTfLd8DheNodjB1MdDRQPrvxJ1PCWm6R5EftAG7bdFpDb8LewUoxp8vkCs6zwxP",
  "key43": "4qFqCDadqUPcDRe4f6eqnsQpeBzwPWyGr1yKfEv9MGhAmDknUeoNG4f3Tpo6xhJCgXDjtsL9BYweVAqr1KrokimR",
  "key44": "4g3tqVd7e8UyNZ6JQLtdAbzPKiEtHBzCb44dMJxCdgMJYS9mRjENKcXj5GXPaLSLH4Ns1DNNruyw9Y7jy3Ai3PFv",
  "key45": "3NuyULUCLTJygMBDLVPvDseKL2UjvAoAekVbZvfiuQruW5xdSJrPNNB42aZL2EfQiWshAsQCfGLBgNPv2wgUyLJ1",
  "key46": "4r1fYgnRhJfTffwbjL8iuBuP1WVKcU5cyyu5ErZqdHa1L5RjbvMfCAYDqkGUva5BCmLKyZAeLU1EYM8XvRY5bnik",
  "key47": "5K1KKPW8f4AQAaN8MLzqLk3JVRvbHFgyApYkXybi2Axo4Mj3BuPv8WNJmWRFX9Wv3hwzmH6EodtR1D53UV1j5yHE",
  "key48": "2TLYpkhjdAmEVmBTtDG8Tv6KgGTdpR8k34nA3DcE7PwBhP96rL9XrWREMDyxC39QNBrm5c2imjTcJT1djMPhPsMH"
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
