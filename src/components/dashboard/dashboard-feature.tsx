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
    "4nz5Njnpqe6fysKL63eEpmSWoPc3HybehiTXTPZCegThQBinESjxpipYCiUQLALmRJSb7ut2oVdHtQ5tUUVveKmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3inyPUQG1j8AnosFQU2uHDUbSFdUhSWQwoBhm9wnbb3YVGpb2aeGiCsqsWMeiod2CS9rXzKgHxZ3o9DYhJKAhx",
  "key1": "4P3ZMccAKutfPCGA1fVdu13FQzA7qUEmG92o8auEDHegSupHeNRePXcrqUyfwtQUHrCQSpAJydT8R9SvqY7fGxVi",
  "key2": "3saucKYNqb5kenyzUdsfagVmigG3Uwvs68GXPZv5sHYBfY8HG1GD7QbjN3Y64qjqjCj3JE3y1MBmavJwLuoXC4fG",
  "key3": "3WCUAZ4z4ng2Tc8j9xRYaiM7ZJSBRVvHCLsvXSc1EMM1qQEj3W9Y69eZqGhvBXryfTZR3FerYRJ3wLWRi9rJVmdP",
  "key4": "5q7QbmiXbAuE3XecGAUQnfThJ79wM2hhQznfwcLHd8hiLSkGfx457QptNDrwWjHGra1mLJcwVdDhmvECipnNFoAo",
  "key5": "52Pj3sYPX2TV9p4tmFKcJTyaW7KHw5r9B1H5Gcmmc7WhEGEAHfGUfxgiz3qqNhEPxH9A9u9p8WQ3yMhMutixZTSy",
  "key6": "61vwQLRnyNpBVSrWEj8gPywyofZBaS5KvpGiA4gSLzrPpQSeKE2muQV9Q8VeuWC7mCNxKbWtKPxLtzV2q7SBLasP",
  "key7": "43ukoq5X2toyFTpKvTLrmNUpPwfBafrwGDbxEPsQLd73X6cuWLyaDsMt3Gbd8ywriVgWT2gDVkDiAJxeCUgXZ23J",
  "key8": "iDshKdU4WhVKM45dir5LChK9wUBE5vPpv8FDenrcTU54jVWPnxS2PJoWzbPgPN1UBEwoJ5HmYeR9iAMvFmLSBog",
  "key9": "4AsbNH8mVUSU7WpYhiGrbZvgh4xPWNBTF7doT9Q2vRPyTQUr6uW8TA6ovioe6Pt6a65mjs1T7ebqcfUgQ62vehpo",
  "key10": "T1nezLbazj6jWfzT3kQVHeQS9GnLtvvV5fmq9YnCkwzLJ5XcSKpDH2jsxYfprDBpCg18RhhbnzwyHANUHrSeudw",
  "key11": "zxMCZQjH1onEZvk9Q7P9yz1NkcgScamjzXW55QCuH91dsdU1ygSyqY99GP7EmiRtbErk2HtfpL7xjn7m65u7nyh",
  "key12": "48XeSnuGGKcMrhvhRvi65MJti8uKF1CTRK9PoQw5CXHxtyFAHtf15DPSaT8u85x7ajjd6rLWNNSL7ksf1PV2eRWC",
  "key13": "HaeEViZAbCejmPHFXsvgRApX7NugzvySSbvaQCdfjYATD7YmFfeRh2DoFnimcHW2kNLSAmqqYbvLLE5zA54TUEC",
  "key14": "5Ny3bAYpJpJvx1Kq1cvPzWbF27GcJVgqaus4bHtt7xS6VhLm1eoh1TAdNhPvHtyP7iiQbBvJD9Q5XJQb6KqaHvU6",
  "key15": "5EAUS9DRPr8YtoMSUMaL2LtmB7NUgqrBVEL3xQYTkxyRXGu7pRQCukvVnbeb1YY87311WDWSactekDR2YVeUrGS8",
  "key16": "Riohz915T52gTKHLRszh6Ho2uU1pbgzLAyFGLJasSWQC1HsPtKvBAP8JU9HicM9xijQuQGNVJWPCkAcXn6WBwzk",
  "key17": "3PvfZUYaXzFBshp4R2Hi1hCR5hKQ1hxtAUFMySYWAY9xYLdvAVg8EFVocdKVaKLKhBmvxfZvyipAMFG8c9p2ykJT",
  "key18": "4swB2wjXjhytgC2gSToR2hghSpqVj5LhmEuzNXDy8JAVEC5etMGRkq12daxYTM9R4qeX66qXqonvxq2fNAUeQGoF",
  "key19": "2a5188GGh38Np582Kq3nEFuJrZqyreFgMRRNCB8iCMspLYmNgvt728ZwHPmfBSRZ3Bh56CkbnQqYTqcQsWyYupBy",
  "key20": "3Jg8iVPMxX56fXaA2WF2oi5s8ERYLKnDnVT8zoZNHPwGX49M68CABGZ28puEYiQdbuQkAUrWSQqvcpCQhVMQhJhC",
  "key21": "sG2ayTqgK61apRLKwnqioht6attiCojy6qXb3YF73cZLCzRYdoMomwTfGTWcu7Kf8TgfiJf5BbmjpYsnT9XyrfK",
  "key22": "3KMPyF9BgnZZWJeVzuqSc7VTRnLmPEccNadAFCVgSJHeyY1MMQgbtsUzUuar4nCAuEcHdEfXny6d1RuWA5KEEUqY",
  "key23": "FxEENp6j1Y2atEBjX6K7MHNw7YhgqLkLdSfM9TbjjtPsuCaeimPWpoAy6ahPz2m8odZzBgd9eAWxnagoC83AUWx",
  "key24": "2WtobgirCpqrwtq84z1QKSZc8HkwkEYD7hczHPx1W7XMFtv1TWX9T1zezzj8oTU92eEvAdivT2xBG3KrJTfUK2Zv",
  "key25": "5WSkngngfvDs4wj9bk24EguUWaZHtv3boLtSQMZTetLy47HymUJgJaateG37pVLrXH985YNaiitQ5uZUSrHAWxYC",
  "key26": "5e3rLiH1T9djAkyh9XVLuy1eQicuUKWXk7kdtzy3RPhRmP9CB14wEhiSF9APKaAP3RMHRBJnLDr1jUogA699wcEA",
  "key27": "5KBnEz3ChQQVf7dV1GkTqMuCqpuCzwfF4K2WJrgYVY8uknVbGiMGn5djz9pGTJ81Szv5ViT8EKZeVmMW3bUGkSid",
  "key28": "GAVNVuvLWhgUn7qyDe2h2CEXMcKer9ukWeAGomuKHNq4jEWStZppoxMPMkLenuHq921J1s9uYzzCCS87J7cPaeL",
  "key29": "3uDyVZn5nxRbxSApWyDZR7DC4FAwNR37Wu4bGXySoc1RnSC1P7bVieajq6gYKsUNKL73XT6F6Zgi6UqB1J3b8fEM",
  "key30": "3jPhTkADHcpwJk7fBoS6pkmV3PACD4s15uP9aQqpLyCfnNsSdf8MF8APNAfNui9tj7a3ZLPeHvyCpUgYk5atWW4V",
  "key31": "5M8CBhu116eRZHG32kA18ELkFVk7XJtWMpLvpjUyqVa7crcTWm6kQoxecMQWrFVyjEHEpkAs1JSehxNC9foma99t",
  "key32": "4qfQRRuprjXCZPiTHRdoA1YRKit7art81XuWW5K6Yqvi8pJBUo8fFNwRrfqRbz8izGF3CRc7uAQh4RjEfLWJ5WFX",
  "key33": "21av1efnyLRWbu3uJCxDNVqtRLDpRATZwH5ncJYoJC6TfUnDRfn94Pc8cZujyvgfpyXWZzkrRiDi867TJQvMu1gG",
  "key34": "3JPawfRTU7R9LDKBfgnaZuJFBgK3gA1zR2aAXwyuEAt88sME6gbcYtA4sWfQYpgXdA2ZJce8TQVvvJqwCyhGRQuX",
  "key35": "2g4dNAnBqn1JYzhUYpkrvWUB8yPxkoNqDucMFo9zvk7mXnKoJJ1ba23xonya5RUKASjER4axdbYvXPyY9zmdigHV",
  "key36": "5z491s3MJr5jBhoSJte9z5sGaAzTepJc3X4GximyEEyuCji1HyTAavyn799KsMgPjeRrKoCZimTFoRxHp5RBUUBk",
  "key37": "34WPjp5jQs7xNfK4HBUyPUToEEecVTeWQ9Ao8EXq24KTEfdGQUhRFiZUZonsGqwupQ5Dh294sTivF9SPBAT6YEXz",
  "key38": "7EcZAPtKcGJYjY9EhXn3SKYNrCt8FCaMzPQj6wCRMkZrZMXEzrPpHXH2DiUj7AxYsFHrh3mebds6TVvAKN5VXBM",
  "key39": "2HE9xsqpGjMfaL8z9zv925qfRuQni6juK7GYCXSSmVDaSeHZszzRCDY9zV2ri9zGzDqnCEGahbbzVkgyHShGySGy",
  "key40": "5Y7V9UVvacCeK7LCkT8wKpj2VZ1iNV5cEFYf1bNtm4JGToUVjnJT1aTewhNLetwdJDJ2YRybZRKckFuVi4bhH11e",
  "key41": "z74UKYy1gi6N9RCCxH1HzkwEaUzs31T9F3gN4gbaAzBJBQaDySsmGobWkEvSWQzH76CHNFQ8KH7qFP2w2LUuFyr",
  "key42": "4mh2XTcQAsox9bcRHwyEej6SZwSjcfPB2NPJ1RxWc7ReRYsZKbkniqdX458p8qQhrNfGZDPKgPzy57nc1MxqJjGq",
  "key43": "VvuZQyTU6hbZEu77r4CjHARs6UKvWTXCuZqsm6cLr5cPcUNgbPv5Fp5fzLCioQJ5VcHxTjQaUqkETNDntseEshL",
  "key44": "3WfjTy5FhcCv1Esq8ufj2gWjLTrpvPh6tK7Rhano849P4x82KmyLgXT4Us8MeophjZqpiEMLE9Qbt1LGAtQQPu1q",
  "key45": "5LUAiC4Dea2yFFATj9MLAC3kqQKia6zdggXTwtDHTSPqQ5X9muBntSMaKN8hg4FPzMgk3X9aPFGfyrYjvgMUp5Zy"
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
