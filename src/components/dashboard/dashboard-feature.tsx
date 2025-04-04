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
    "5ovf8yKmihCqVRTUKt99j4oFCrxV4HRtvq93Sa7ZePWYqZnQyJcGNbVK9bwt8DR9FbDHDqWThGokW69WAYHE3mKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PAZgmVd2nfBmYfAr5GzVrmYyqhT2Rsmm8n691s1BX9sgnnHzrQGFXsSNFYS5ZbF61tX1m2XteV1G9FCadERQWv1",
  "key1": "cHzLVKJjyjq366eMH5s1CmB6txCPDpfn6ZGkqGG1jXvMq2Q33GvrsWL15YM3fAcPeafrT7254CedTF1p8VBEtty",
  "key2": "w5R4dkd9wrWz6HNkwinysuPSXnLGrX6kxcyFpJDiKtUJf8bLxpwo4fPkxMiVxxEwudgRHpwz2TdTeZUTi3e3nmF",
  "key3": "63aKGKfcNAb7K3MZLXiT996gfLKJqzGfZQ6iDi6Rd9grU4HHTAhhrfrafUWVpEKRSbxw7NQhyA2aid7RgnDtkeNb",
  "key4": "63qkaq4UrTNFvegxPSuaqNNuiyuMui4Sj4tdGuoqeB5YmgtpUyanAgs5GKiurkPjxjQWvr9kzJBn8jqqvDdNQHPG",
  "key5": "4Efxr28gDhueYBUUpjyHCpiAjNjCEe6uAT58BY22nVpoX1pex35ETmt9Cn2XRW4qhZKzFHEF3oDeDARetbeA9Qsd",
  "key6": "2vKtNaXgRqXefx1Y83yv62poNYBnrno3K88PDJkGjGdm8ZNZdUAZjvLzwdffqCye7QyM64FNkhq823FxHsjVcrj3",
  "key7": "7FMbkDjo7N6P5JbTKzDhSDgSonKrK99anvCYdEcVY7m6DND676RU1p8fN7vU3NyHZs8vZB2FgNmwiGHyE8LjYNt",
  "key8": "LeF2xgSWY2T4YfSkUyu5g6yCXvMp6WAx1SdzMEb74RtXPnpq3JF4jRk7MRMcrBxDWsQf8BcwchsABMkrRu4NkTC",
  "key9": "3b4BBH6sM6J4JvxXAHKGR5TLMuu7zvahLKrpBz3BJzz2GZzP3Mdq6eLj88C5gxTpeqG9yMAH8yeaFECHimnxAJi",
  "key10": "3PUeu1iMmoaPy4MxuduBQpB8gcERBAh4JyhWxNCyGft83vjqPpNVr2JfcRtRx86QgnzosoNQRHXrS4cuUiJL8AKg",
  "key11": "3jaBsrhkrWvq7ejpfHTgD72nFa9f9SYYRSbxhSN7g48YXpnp7ovimXzg2HGq3SgpyjXyXeepUVMfYSihiF6wnPZ6",
  "key12": "4T6RVHyM9NNW3EdMYJ8kNwwtSt2gCAHjRqa1CvFCP6Qe3c5gFE4mnctQsH8oAxRNY6fKCp4ax27CawypUy8E24SE",
  "key13": "2Ut8M7b3hsBvpk5oiLtoY7vUJqeupeorp5LdwhAXKZDpXjuRrLXpsQZ1RwT8sKxTxmpo1XwXW68MZJ6VCSVnHJfK",
  "key14": "61vAf81gXwsw1ZoxG8yUJ32B623scNNG31wBqd65EBvcEnb6i4Zj7vFRwFSWHwLHTR2BimGeXZ5vmWApiM8fkwPS",
  "key15": "4GJsSKnL4egmjdabApNt5yWRkKGu9jjV7d3EHMMZjsC2Q9jiP1g9gdEyHGfPRLQj2hNjVd45qfV7oXVDP6E5bpU9",
  "key16": "3fScmrQv65Y6EJhC7ZY2aXMREUAeEC5iRUBYkL8L1wUfMRRmHPgvS6Ys6kxPPtXHcymTyphftDFXiWGj3WUxLzFG",
  "key17": "4Qsj2wVT1MDj3GJd3zhXGqN5BBru6PCJS1oNymPUmdMhKatwnmQM5aJmXGKr5bDW77ucTJUGjH1SqzTpeqkSz5mn",
  "key18": "35uGPdzpFTTGkwSMAQuLFeNUqRgm8BiBZUhiXCbvCgVGohtHEBYP7nQN56eAbQyY3tmbQjccBy7pJGp5eUcoEqnE",
  "key19": "2yy986xsiXsskjLSTJDmByXAAXD2No1Ttvn9e2Ehwgd6xewhAWP3EcCe91xnDywdBbEjxit2RbcyBe2THw8iAvpP",
  "key20": "5hkAD2ACmTSZ8KCfJLVwTdh8AKhknPGLnJB2gXarf63wq8vz48F6d3JdYiz9fw3ajyRscQAhFHgk3D8JVbsMBNsE",
  "key21": "38oGqN1wiuDxrdnPKdQRUzxE3erNkCLpRfJ6oSHPgxx7YrRL16u2m2vZHxnwg2kMVt5CtndjJPASuiU9oqeaKfEZ",
  "key22": "3XMJDYcXgWu4HpPV9i6ZjyrrJ7veKuc3ezfEM4sG8JT7uU6qq5gaqLqAxaLuWyg3fWASsybCapv2hHRKwyv1Dver",
  "key23": "632tXU12AW1ngyzHkDLPTtgH3rqdPadf56nGaqK29BcQVrJfQCuqsxCfRzxLp9hsyLEhVauPGCXfcwvnKvwKrWfH",
  "key24": "2dinYjS7yDhhXtbUyHvshay1dKyHDnd2qbxmUVGQEma3y5z3Cu6MWBgFEH1xdsr57wVGK5S5WLqAdpPjqv6LZ1Yu",
  "key25": "39zAcgD8WcNnfMWrQR9o2o3UgM1ujYRmXkhKnwTFcSzsGyUw2jZdNSYCHYUvQ55oToa68xVLoK4YHNgn1NVA5apk",
  "key26": "3CsmctSSHnWP8med5PH73cy3yL9VgFc6RUuMkFzBuuy62MwYEYcHsvHv8HUjG9sFmY3ypyiWQCqyf6rGbGgp8kMF",
  "key27": "39p2Q7GiC7ywxwqNxkD77mJUnduJBUd1mYoeEJyJ2VS2GX8X2kF5pj5DSbp37F4t3EzLRF79wyg9Dav4vJBvz8zM",
  "key28": "3d7MEsGiTN2Uagha23YCderSouLox3D671XeaDLB9mV1cnsPgbyWvkv7s6T8a7Z4nNKwMDd9u5fmRjAiYgWcQfRM",
  "key29": "64WpYQCeq3Afichry9fuA1aqfFtQWRqwpksQF92GGapxYRHyN7cojwvrxUXGpeXGb4e45kGYpX663eFKouaN3jze",
  "key30": "4pzepXMGd88Cd3SbNaJBBbNUv3UK4DHVYHbvwaMC9CJBFqnWYjAzrLQupVaNdXAv55MUfc7PHczV8mUiGBKWD3Vy",
  "key31": "4xH9DRGVdEmxyCLY2U6D8zbHG5eHU9NMT9s5uTAwwQW3C3DCKr3nEgXuFYmHKst9QRdCY2Tc6pdHSNKpqxLgiY7r",
  "key32": "4ptyhbdnppU6Tj8TALAA5mJjwUQYg1b7jU67sFDsiDDQsSSjjJgdUz3yTynCXAgHg8PtyVXsGifTUJ9VWud2Zkng",
  "key33": "3Eb57G43BaKE8Y2Vb6tW66SM6KmYh1hxQLoKRbFuedj5uwaqEFjYyDTjTCjhHhrrXssKRUTabi25Doc8n38uMfaW",
  "key34": "4dSGMcA96TPTNr1KfcmEa3quAFpXc21LXDYrT5CcR2GJtU5G1tBrmSWB347ERxA4d49J7ZmPYFKkrkv4pJ5kUqi",
  "key35": "3L7fggUC8WoLTRLeAY6z2k9dq3VGq69eH5cXspdZu2bBbscgQNNiiMRWExti9Gytxra971q3tnpZgqPj5GAU8NKN",
  "key36": "5G35KS2XqYbPgL7UNmpqsxL1nfHc8rMGheeC5DJeiWrwHdNGdZmNvYckY8avfaahGBtswJgqbukmM3NB9eeSWXTU",
  "key37": "v4XwYQtGMhzgLxNaJjKU25HuZt7J3fN3FGGo9mPtcsh5dP2aKqY1FjbFj4g7QkeKTMCFJvJ4BtHV9gCwQeLhyBU",
  "key38": "5gxERUWwf1iZ1sfm7U4LNvYi5CJaYKGv8rrtNW7J61fhGg4qZx8jwXxZ61y13Zae8Ybh6r8vRVBcn93skCMyUE5M",
  "key39": "5o5m7kzHJaHbpah6n7NLVEg2XnM77g6yhxCYoTqYzBmdniDkkpNnPp5ZM1gmtHP8SDKB6DJFucsjpWDKhSUtPUe5",
  "key40": "x72EF5KakxXYiEJPwCBPaaLmZPbe57Auj6e6eCzBTctX7Ek3JZA2ep8LHcQSNWKNsnQaf3nDihDtgyTkc9LPWyj",
  "key41": "3jgidcywD8GaUXZVFZwEHDGhRPyVwkngp7tjcT4Firkxr1Kda1R3pFGoA2mKz7WqdBZbXUZSh4wEZQTyvDqZ5pyp",
  "key42": "4YKP6kk7vAaQuYR4PbaHtDgAP5Y6fDqcVJdLsZA3Zdz2WL2WaRcgLsU2UvqwxJguZ1jirc8cW9LrnBqa9YxK6V2X"
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
