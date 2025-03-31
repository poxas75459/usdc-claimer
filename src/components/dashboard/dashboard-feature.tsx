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
    "2LamPqwnzJz9rY9zxbSiQdmkjpaY1MnqKrBaUWiYxs4SDLMpkK5X5TC6FWdWTVwkGxZPixq122tUQ5iwYSGtnX93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FKw7E5bmfxJoW9KpoJ8zP7SRPXN21ikjfzHmhzWGdxFa6ZDEACSMoRH6LpKt43vu4iEktNZiSGcVy4LiHzVnLUB",
  "key1": "4xYY3RSRxcdYnUHqxC3XtFHsZm5C5Rn3Yusjwt3qVh3zwFRqwmobxGt921mns5gLYsk2PFavteysMuvznhfBsnbb",
  "key2": "35XsDgJUfMGfXTwDYhZvH6ZJfoScz5aWmpHeqSbRVi7JE61wBuVjeF9bm7dR89kx7HnDFw1DSzrPx8VBfBo3L8VL",
  "key3": "pAGjp9pA4kJ59fPTv8vVMhErvXESaijdEDQdEuPo46yrW4KKGbW9f5TrNPjdnkbAYsMMb9DmNR1NrUdsD7WPNYv",
  "key4": "5sdJhoy8WenbNh6XQFwrtFayGK2qGUZUiDx721zQDMQPPtYKjXXkWixiDB2VFE9yL7NgRMdWGP1riCqkRi25J8yq",
  "key5": "3pzSA3U7nmnUSEfL3g4SMuhW9TsexSjmkvrVEWzztS8B1jVCQNP1fmpNmPkuakAD9qcayhLAPQMu6g6H6X8PqQ4S",
  "key6": "5f2W5xw5aLxGkHCsPtuVEe1RfkXeMuKmg3MyqQL7SMnH1PYzxfnpYiZizLteDe7AyGna8q4sfSYePUtQXHx26vEe",
  "key7": "2oa5EzJFKFUApfdeQkojReMGK89mghWVkjUJunjVJc1AebohYJo4FyrRMzyXMUkerZDvrzd7pZ3mmufzAN5gzNBr",
  "key8": "jM1ZSroHyr1xraxPGhANvop2XtEUmji4zXJkBWFitdk7At1Za5vXK8fMiaeHqYg5iVLJ3pMmBHx5pQQPab7CE71",
  "key9": "2ufxopRtv9p1qT4F9ELk9X3HC9xjpscHEii4bfzJHxgAp2Et1NxvQDvSVEbUTBqXwF3Y2fckX3szjNWKhM3goSiH",
  "key10": "2Cr6cWNPJjn1FK5AbhR88tsj4qNdjvd7NF7J1pqMQuHuoBqcV2G3PfZrZL8NeMtTV1xgzPCmmQsDfnuJQyGDXvjY",
  "key11": "5dw2rsAPdgPmtRtVnGTybUT6UbR8ZztUcJrUgHEAuwLVcYuvDFwkRv5DEanwmMZtgG2rNqsA174dxkfuBpfyUt56",
  "key12": "FrQrdN8ENaz5EdqHfLYCqZwqz9ZdfqBEoeVaK5R6vFu5kd7Nyq1pKqJjWu1KkYrDXs3TeGZJVj89XBGx3eE7QgA",
  "key13": "5RM347AyNYe9oX2NqMStahEgGBUVQYCC2wkGud6GBvSonf3AabCmCRHtaMwdAS7UKwqWWDHhAgeGmgsxp3cVojYc",
  "key14": "4vXiG2JKXRdauaCMU83C8q1vtsGvZZQKr12qQHdDuPhMVo8iTq5JEYmGj6AWgyyNQqdTFx2sYbuGWHAkLVEhUKdF",
  "key15": "3GqPJk5mukqwBpBaNssLCBzZowKkR5VdRV9gPuQo3SNG6NQ5q1SwKgpvT8tiV2bUC3bqUTrYZEXdU74VTje3fZQr",
  "key16": "4TqTryBBRBDV6LQ2ocu3EHLVPek1HvpKBxH9vo89wwPdUWH97fDxQDL6cs2psPYpZcweSYXWQ7RZTVgUPL82hjSS",
  "key17": "3n6ia4sPx1PJc8WUAz4hm5s9xp1cFVu9881PMMHdAKphysEuAsEi8pa6QCWJcRLp4EyNdHuCBziMk1sTy8Dp1WKS",
  "key18": "3ZKVPTXabGHHXooYjg7mdHBYvYdWx9JWdcDVouAg9iLQZLS7GL36Wmami3fQ3Uvs7WgkzzWCDGuv9LimvMRcqL5",
  "key19": "4JHKJqPz7PvaQuiwcRJaUt7dnxCfk8iGFr376oCvoGGfjV9vF8LE22EC3aZvZAiqsFubR5HL6qezW8Mny6syDdvo",
  "key20": "36jCe1WKxhYoevEZZCDRKc8gPxYbmXa4Tv2AkCMhstcVvqVkFb9B2R8rEM7EMj1XyXw5sRtQrMp2SxMuNQK54FLU",
  "key21": "5ytPKkqQqtBeJuCZauhgpYUu4HaGbtacHYE2jSEDvmS7GBnS1ZPWiTFhMuoApBMSHo9X8Gya3c6aGpZGdu9F9CbB",
  "key22": "3E4SZPZpfS4qERnXv3XfZSd1FMrVYX9sDNvhH3Ln2XpLog11XV11KVBzQMrPGLjqGMgz6MS32j75DxDxdvq2P435",
  "key23": "5JXsGxGgGrydGh8NjuirgoPix2F9h15f7iM4YcgGkeN486XRtKTvDNXygfja8pUnEG374pU4isWuPnCmVUJ8XSQf",
  "key24": "Xp396kMUmsnhyPcDGxGE1w96kaj2stFnDB6fA6RQtCpQKY8dMQUPtm7V1EEjbyLJ3HnmgAJnFbDsXBdwN4EEUKY",
  "key25": "nPHwdAkBsouuJinDtoftnSUiK4scRwthhgdwEqzMW8eT547dwBvqKpzoVKEqqRZfuN6ZJz1LFUtCzPy7BM8LPBg",
  "key26": "3mdRjF7RmXxzyW41UEt9eSCKnrErqApE4kzoe4bgERdTjA9uozXHwUrW4YWbcjSjW8q7r96MCMY1LsjJPzxgZRqd",
  "key27": "4cPta7gd7EgwBLXWsZ4tjGpe4hrzy9ECDHufXTz8xene7M4CGeZRGgGUn7FzsKQWj2LgjahtqsA72ZBBWLmGX9WR",
  "key28": "27bVaKydUBzTU9R3PYXGYkCi9UG5UwQ3osxFQEPTMEmqDQSstBbBcSWRjH5JT8anE8BWPEEKi8bTnsjDsCrzSwdB",
  "key29": "3bBAQeHqb8MJrHfqcUmQPJ9D22anTSMy8E6GgL64c9tkbBdw4yaAPZngjM6F4ox5mrW7WZRV4kNEMHrBXLHBemNh",
  "key30": "2t7uAC5yHrGc8DkkV22nRUHFirx6Zp5H9eXmYJHFJYzVqnM74K11UNgoFBSZXuCd4KBSpvz1jT55z18eKComcbSC",
  "key31": "3PNXGWthv4yd83aNU68pAj9k8599r3KXc537CTGunVz3Wr8a9euxYi2RT8BxgMgPiVwLc43Rd6pkCNU8zNYGtCTg",
  "key32": "2R8udXUwZodudFjToNCyG19CQUff9dFmPjcYuoGR58P5aPDRjgtm7Wc5T6jxkNJESp9WZE4UfzUF3SewUCdAgAFi",
  "key33": "64TuqdbcuLdCo2rxR9ZScsuQ41BMvEgSfeq1De8rsqzLk4ckXVHNatVD34itR4zCU51cJmXSXKEVEfhKmZES3p2u",
  "key34": "3SBtHXCMtrBxPKFh8cCBiUaioHSw86NjJhenaXLEqJoF2Dzag8qv4Q2jBSPWzHihHgCTHTCUajLgAefAp4GJ26R",
  "key35": "qbvKbCGhoYkK71vG6VtGBZrYLKqmGWRM6oofAS993aXX1uHfiSJXj146GxxXY3sqUQ5a96hESXPpPD3PeHt3K9k",
  "key36": "5cNRfXrJCLqj1i4PGxNHdAtFD99Rn51i9MebbmUu8cFziux2tUSSFabzje3fTiswHoiQonwNTMbxwh1aS2NpA7yJ",
  "key37": "4KRQMu6EdhAXLVKxQENavQX3SU7kBcxd7wFzSPqDksTwHgmFx6x1WsXzGpbfACfmHqkDN7Sv4i86FhjpeY8dXuXf",
  "key38": "484PEbwiioWni5fvcLCxHap9uY5zgobhxYnK5SeUjZPozGWGD2sYfsBVavbkUMBg4VFaCHkNnSYAXGX29xyJTp5d",
  "key39": "RZsrCh3QKCFVpCmAhHmtyqnuBXVtSqFv9F485cPoPw3DP1wKB3zHormGeF3M1jZceqNW6twq2ttPEdf3hmeMXgf"
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
