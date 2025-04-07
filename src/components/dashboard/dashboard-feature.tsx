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
    "4xB2FJTE7dxrspcBzdxATMiBHyUfTUAnDmMdujyHgimcCe4rJyC7CUvbFoNLzTSBzTYZEcsPM2yC4z5qnJ58qbA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VagrLdFb9m99oC17SMzU4Lj1AdvmLg83uVTN1gTyzJs3W3Rvxx4TSx5af3QT5S62PfNjwg1AdWLe2B2ufywwQYX",
  "key1": "5HxCD4fjC2h2PHuVePdXneKhpV57bC8p7yzNZgaNdbro6WGDnDyeDeyxoK8o2aNGhghKghtE9JwnGZ3m1uibP7Yr",
  "key2": "3Ucza6QPiS9UGEQhpPeNHRpq24cPwnMEpaEP3xeN337rkrCTT6ByATDZ2sPKREqh4BgaDZmYg2nGkEKnxvxBAp1v",
  "key3": "3HEkPoKe83SCsE4mrmCXW9mcjDBMv63EfmgNtb59GWLjS6rHmLdkG1Ak3nJeCXbEmpiCGN7gE7ZveYWpvU1vmowS",
  "key4": "GcUTBxuiGRrJbvBaEM6MU99YxRWPFDNJkSRTMZGmgkrx8LgwYcX18esLEe2QLNvHPB8hKihWP2kZihkXV1SsjbH",
  "key5": "2D56KrHunauU4yxXeMk8cfpwCiHiXt9Hd3R6CnXQ7XaELwgZyTVnchZqmzaAt3QpXn6nR8LyC2fCbF5RDyiG3HDo",
  "key6": "67jEBjXsa3ugdne9CBrCgCS6CAQ4fL9GfkooHjfRCvBwaULVQ6TM9br6aWijwYgiaagbEbZtZZnzQZTx3iCzrymw",
  "key7": "ae4TFmjyLBR6RKKa657CishhgqddHdw5Yw1NBDLCoL9fMx3U72ht5EN2J5dzQSDkHFLPA3ttyRyBeLCA9tBNzZx",
  "key8": "3h1Ghy9zjTgcV3RKN8dSMoSmQWh4oknctfFrf5itS7bH6yYCutTX3gu9oc13gcCfm2kJBrHvDBYxjeb8W6AVjLnS",
  "key9": "4t6mAcTEPCZDUHGmPPXchVJYUPsYkwvJkpty2PSzLcK4CojTABtppPwYro9ZyMso7dRGQCHY8hG5Ha7MLRwUkCiv",
  "key10": "561qGT8QaCzETopmSSRcqpXBZHfKLv4nCjNb2v63jCq6iRKKQndYaNJxebwoVsS75vdAB9GgD5h8f36zVybqo5Ec",
  "key11": "56AKUHkUDLyVAsFUhsDBx74eMvPyfKqLx6hKEEXyCudMBDvR4DUj6NPJWAZCEq2MNyXsTA2WBRWCoGzHg1hcs74o",
  "key12": "3oU4yGdPFPCJPFMRuGAs4TcaXEDpFk1wUDqDXUGAwfto6JWG82UfBnwqFJD6rnYQvNobYoxz7J2C6KTPAYQbMLKv",
  "key13": "5MLAbZJYQnZMgiLk1zY9fVML6FV8Qf1dfRsp8KtcPn87HdNH6pG35QV2TFrVRPdPrgih8fdrMYeggU9mAcwZ96pF",
  "key14": "2WcFm7Btib879ftsKUPWKdBfYFjHbjr7z3iqC8ZdzYgaSMLt2Ph6kDJjp2kmUHtwcBMt8mASvYLQ4t6DF8fWYaqR",
  "key15": "4dFYapVyBap7gz1RzcsmqukiDEFrY47JuGARwSiduBQaLPQb6xCcmFn1EQtNJFbgayMEp86VjrvSvhagwREY7o2w",
  "key16": "46emPqrasFXjEbN91wEXGephMmePZs6uaUCUjtjHMq6u8fjoGtXaycJVNWyHKYiDLa5tMP7V6XDMLzXsYzcpvFS2",
  "key17": "3GpMZmruunzCLUmJMxLc3oVrtAvMxxoSJMrN8CR9XHQrZnAJMZNnwN38eTLJLjqJafJXwv3AvgYTRtot4Wds2hsN",
  "key18": "HLqosFtxAtWuZDu8Qp9vbZTgg9A5c52LDsGuunbMDoQBW1NLXD14Mu8XzeJ1VjCwZJDKHryYgX4uNWqXfz8GXDd",
  "key19": "3ngAK4CUumzLqhTgqfbJqbhRZKAihoWfEyFqibU3QakNFDeUPLuD4KLDtt6eWCXBHc2GCNr4WvoB1EnujB6UDdQK",
  "key20": "2FuHDF8t3hRnxDWVm2T4fFxhzJ4pZEZXWgbkP6JHXv5RmTPyCwEGByFZxnGL618GoxZNsFM7R6ARHjSb93nCFkD",
  "key21": "4qt9tcdVJNxcTbgdt8e1oAPMjELNn6rpTizDByhzcBpAauBLueMxCYVCG5nvZjBddNdKTe4GowDU8aNryzKirDDz",
  "key22": "3yqvTBBNBa8iBg81J7MCLjhwTzLXeLHS8pSct329cshH6GQyQAjiVPRiTnyxTHtENyf175ELppkfGyCZ6byzyDK8",
  "key23": "5HpYGLf2yYcF1S4Z5pxzBmefgWu9KN9nbmqy3pYEDu72T4pXfsTkiM2VDWfrWm5y8hdR9FEPAqcMVs2LhhPYvbEb",
  "key24": "2JNx67vmspN56EG11ResWMcGtFzYaVztt1R69kUxea6mRYSRWnWTkgLScV3GZUKRvE9LF4suAfBQrcTSSqr22qPy",
  "key25": "wW4Cc52PvyX8hXdBfMy66qdTF9eBLWWRQDq1KfJdmdde6tzKy3DRfZK49LmP9Tuya5xA6BM8ndR9GXJ4K2e4QfY",
  "key26": "4W95HtZQBSVF4Ew6sta5HKQQwygfigcaUozanwe3k7UvwJS4Bni1AP8Ec5vy6iKWy3a6gLawtdyh9emS1TVF2da5",
  "key27": "5L6mtNcCJxzZW8uNKdRV1U7zcprSQ4puVmtfyXH4WKdTPMVRQC98KizFCM9uVP6esEoHzFRswNZZyCpp8zqMpLCK",
  "key28": "21ikquonHihX9Qsje8TN9KeEh9bgtiXot2QZ4SSHXZXsNDWHAmvPpneU5Mg992xi4NcH3s6PDhPUu8vbD1n7SAkr",
  "key29": "2K3TtnFHe3dJfMZK1Y6FvmRMaDLo7Nff9FvC2zAKA3ceN519dK2jvWkEf7GFKL9MGWhT5Dny5VTuieirorWMUJBi",
  "key30": "5PTGFbGkNTt7g5NujrSSMUVEcUgCFYDwZDGzZF6UQE8wtbHZoRWqfZ1LsDMmkdu4sqbf6ZntyUTzAoti9ADX7YZK",
  "key31": "29sNSkNVBkgFU5BFmXGEtjs65tfurxh3ftNBmEmmQ1Earb3Fc7aFoF2YeaRyhiZmcBRFcSpjkiTszMRHazyGCZa3",
  "key32": "5GDoDAyqvDwwaEfGiuRA28qnoLHu1ySj22escS9Tiin7k8jiPzDuGeziYyNr3XhspX1YakQMjFDXVnhK2voRQDJM"
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
