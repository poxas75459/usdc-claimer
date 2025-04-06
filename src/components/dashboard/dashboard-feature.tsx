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
    "oVtvzV1yBszpKPKvnDT6E38qtEv6uV3uozYEz6ExRHSKQonekA2DepvaSqdoYRyzFkQ8LP9pKCS5a8vPkadQ8mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRDe7VeT5uGeCkeHVPLpPPX1eT6RG5rUU4wsio98PGwUoLsAoEwkkr9T7Xp1shjf3tyrPboPFG5h4KoikFpTGUv",
  "key1": "3jTVCQHWjsoE623dTH1vtD7ptCfeqbB2BmtqzhAX1iSgvf85V7N89UuECTMNfdba1UMNJ4FvG5iEfgRy844FZNsz",
  "key2": "5miax3xoMYUh3FBMy1krp72PvgkV6P86WhLLTPvLkt9yPmTy2QGnAugMYzBqmV8STGPJybXGvno2CsiTJcKtuRPB",
  "key3": "4DJ1BijwADNyknY4x6Bgsy6SkgQSMfKqiHLNFknMr5Km8vdMRKbtVQGDv2U5dDUs9Roy5Wx8r4pFaM9Pu7WsMPYx",
  "key4": "298amyKnKHdfGUTmp8equbiUdRPmvcfSb8kS4WJ8GfFrEgvSVi1z6c1XeuwgU23JxJrEdWT6QRwbyF6hUQ9xMnzi",
  "key5": "4LaiDUd792Y6VeHfgudfRRcwawkbUSFoyS7gbzXBtoVHKUP1WvxWDBqyoaSqSfVe6GpULacvFh55BSU8kYSnTVsW",
  "key6": "3NEWDgzFStNZCG2e7kJfJzVwjmJaMZ1FpCAo6pc9oWkiUAjuGKyrLyQ8QSFemazee5rVDFqd3veY6tQu2PQ2rQah",
  "key7": "5X4fTE5pmwmuYDRvsB3c6iRDm4U8C2aVqtJg8S9innwLPZd95fin4ChP48W75az91k8Yk2Vvo4GH1z2dmGXHGx8U",
  "key8": "3Dfr8SqdAsL7Nqapw8LLahwuUoHVUZmandaHMKEVjCyXYMhDrXvqEf7YmKoabz9T11zqAp7aSz22SgG8yow9Fvii",
  "key9": "3MS8URHUf9GBGpNMS3BqhviMQLYtH4bSFJTUzy1zmwZMrS9haaUJncR9m2zMGhpxfdgqS5S9ANfHM7Px2FeugSpD",
  "key10": "3LQsHdD93HqJHqqDJ1vWKnjm2qfYjwwCcGFz5akSCjKXoqm5nXuc44EiSYEjxWi4bag5H2H7GoSPwvfmAEUAFRBw",
  "key11": "2Szh35mvnYQsdQxLiLJi985JGSb1d9Pu3C7ggKyWg49JuMPibiJXoHJFKU2pupcYF5SFPNVtY5SEvC2hZqcuVo4i",
  "key12": "8TZQu6xb1AqLR8k6feNh57kMZq6aeihJTCVPfrRmFjVMjptRGxCkmRRyvxvJuRxUvpcbjsTWcx7thaZ88MCRtKa",
  "key13": "MsfKwmLaaoLBdrqZ4myue52FPZ55CjHV9y5czgdGBpbDBhqiBudKvde4v3L7DHf5oF87WNYqfxxFUU9NCyZjbzw",
  "key14": "5dhoSaTptkocucd2kTjpPLpkzcsdEe7qyTvZH4LHxeEWqU6WNEzWhxGFttc3iQSM2zKQ5GNLJ1TxQ7i7DPk8tzdx",
  "key15": "28Lqdhxq2HKKPuqe3stdCs44yicfm5vbosGUnzvSveuh4TxadM5U9P4CMrF6r5PtD5SgREJjsfv6aUguwTUJosdj",
  "key16": "3SXtrXukbPf8c6CAkmkPLSGHir6FCY1Dh6ysNGiLrWi5Kw2bg7CaWC1HvNaFM8jV2WeFe1pBpsDtfrXsjLG7i34e",
  "key17": "3njd2e1j85yi2vJc5brbGPMRwkC7njjTGdhjqVou2pqxpsrBEeaZW5TkK4QvDVPQ51uCU6F4GXhe4hpiCASw96QT",
  "key18": "4mDV8LWJ3DdKXiPZDN9Fs68frQZgKRKCBmJFn2oygDq8qbU6dbRfM7MEb7NQy1siwYXB7KciaF1TUv5g4CSUwH6q",
  "key19": "55YQUR5AggmLqoeDs7ZPbHaDN3adUuv9CtUvNmWvTJjbZWiagbWuBafdgqWZ43hQzftUutiLwAd44HmvEj57WvCq",
  "key20": "4LYwybzJf3XLoyf3vkgEHjNZY2NX38g9sB6GqjtMD1zZ4xBozKwu51WoDVsoCgDfzwDjnu9xatiwa4JWUYsqeuEJ",
  "key21": "3A7YYDYq2VqTjUPNqWfkhA4RvnMXvWvy6QkUFZAiYWKYrtRbWyRDf32JTUcvwVpY7fLCgA9ssPHQwuzUu5GevBkU",
  "key22": "59NJDAMujZ3jnHojtS1csdeAJBHZEqS47D8eMXX3A6vJzggXoyEwif8t9oRoezCGeQxn4Wf6fUzNtaqVfojN4RT7",
  "key23": "3NhgcVupqkTiYdAdfjBLV8YVRgdsorixPUev1zjsStgehpwcE7jxuZH1kPQU71p6a1gH23SKfppqem9A6cey6w1U",
  "key24": "3YPjdQQDfnPyKhosxSYEvy4gc6aUCnVpWZPyPXxFuUjGyeJsjNdq5U6iQuwmAMjdhEh9zQqpP2AGdvpm48kAsABp",
  "key25": "5UCDcn7WwiQreXiyqojHrRxJe4tvVWkSMh5Zm7M9QHzwh1xe5ZGGjHgV69zmK9cVHRkCzhEU37z3R3dBj58XCv6R",
  "key26": "3DqLfed1kPteyJ4RJXkyhok4vB7kCpQvQEx2CSHwYunwQDBorJaPjTq7oysbPtSckpa6f5PmUf8fk4tgxBCLdcTY",
  "key27": "4AdyyToqM4V3JiReiDbum3XTxxzXaHWxbXf1FL9yYWM9Km7xHFxRrFysKmneoLJPrrbfqkcRj8k2aHmtDKkDTDKP",
  "key28": "34yaWReqQxNAiNzkGpjcix4hZbUQn8vutBXuVN3zHpMoxGW3xmEkbCFJqyfaFY4GQ2ikb2pCJDsmSFoEZwvnt3rH",
  "key29": "r3WWjdmTjLfbyCRjovJHCnACQNvHreN5CqEedBVncWjZ3QCGwD1kSMbgZwePPN9iPPjE2pu1GUJ96n3fWDw66pS",
  "key30": "G665dEBA9WDYUeGeVYFohcqXAHmv7LAbJEVsPixWKKxBGzd4QNTyTVvVXt1pufZJCUUiCrYqaktEsCqJ3MMaiGm",
  "key31": "5mJTAnbLA3rYCFroo6HNt8wWWCarNFr1PSiRXgZ5o8gPsTshdbCL1qEUxB5ySy6kgAmjueGDAjTJn3ER3WfzDRHJ",
  "key32": "485wo3XvMQ98EbwoeQrpiLXTwPfzzvY4SfHu1mduQ6qVitzDyMdU9yTkpRj4kvPVJwSa6SZZ4W15DFkGBrt4Auvm"
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
