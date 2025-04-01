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
    "67P671XXR1vJRFTighMLpMStMRdT5BbpckKVRgzEYx6hbSkuTiHibD6uBLmzwzCbrxTf2SJ5XwfbPiJDynDXqr2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsvrH556iAF93eePCbHxrCKiMuehqMWfNZNE1wf8m3tGeWdDjtyN3k1T2ff1zHSxjn29QeYjn5j8zcxp1jfTzzD",
  "key1": "2avqED5xYm6KECVfSxKVs1U3nbyJZHor9gkmKLEPwGDPxXbzH9DBKCgr8DSMdF9ZfwV6PrreKmN5N3jvJVHSxLFY",
  "key2": "4EdsruhaGSc2iNcP4xzZpXYBgFfMMbhF982Wa3VteQ2QY2cwfyLqHqofoPpjhDuDRQRc8qSPMv5Tacb4BnoLipYz",
  "key3": "3PFcuLH98staQuBFyoVuGJhUkxryjHtVwG93XR3xjwQWjXN8UAwE5fZ5VxCNMC1L2bivoveNtMBbEs2SWjZpzufS",
  "key4": "pVfVAqbuqbGpdKuALthwgsbYCbekg6V8DbFbuNtdhpaXFdjG1LMsk1dJ2fQqp8WZ87TvHgUHVbdHjqJfyTS3Bz2",
  "key5": "mMnNuN3hUGUBRGfEAFtizdpnD1Sh76pngxEK6sYXNhECNh8SBo6u4VZ8TCvXta418skHtqLP11LnGF2M4sqduF5",
  "key6": "3dx58iKvHRdWwxoyopjUG7Gqsmkmpy24CExbyFWUhNrjHT61wSfgNUVjsufGFtiMiyxqCP9UQQpdpA1aamHd5svT",
  "key7": "3QwSmtCgnU1kitvf3iqZA2fxBKiHRAXYFWKVzTijtYmeqzALnAEYEyvi5jCFznU8ACqpJpX7LiXAN58ryDojyEL9",
  "key8": "5CoMLC4RyMxnT4RV5GcoBScwibK1YpNjvvunNpb9PKjL7ozUZM2TfFWGvBNbPFRczYf8mTLcvJrK8xTH8KHLeNN7",
  "key9": "2ZWXDEhrjWa42M6nNJbbSgupQ7bz1xn3LnHuufnj9AvqebkmHNU7spAfKw6g3U1wUWXfp8NobA4mPY7uy4etTx15",
  "key10": "4cZDwcmzqAycup9bKYDdapj6UHwXB6NxQSsEetbuGAd9nRHUXWZztitqLJHmKueCg1BAQ5EWvTwCSvSPKc1Pfvtj",
  "key11": "2SavFJJckcmogzcW4XR4FoCnuwM5pBoUAL1VnJR4u1V27gajvNKf6popKQBzxqqcV657hFBXQUzHgk2bssgCQbb9",
  "key12": "5ZbvZTbeWpZ7Y1QZjrEGhFaaiwTNYobH9wPGNDtM8GTQv79gedG1UE13CxRkcj4gDmHBthobM5PM7kXuYfF2Sdt5",
  "key13": "4LgC1WhSWrdwohe84wDJyiSfsEtNtL18k6VkL8MZL6CkrTLhohLLdud6rnLCbR7LzaujkCQs6SSPSLFTJgSN73KY",
  "key14": "33G9yFSwck3BmYEqZE2QSzn3NDBLQiJZEapHykbcTNywPuFQYLRBBchJ2wffzUqW3XZ22YhZMJUmdrR3vxySZZag",
  "key15": "66znZHWmttgJFnVTu6Zb9N3QEWhabE8Qo3Hw6sxw5XH2f8XgNsLxTgnqT4ouhUkrKsfiUNiGtPWbLcBb4jP3dfhW",
  "key16": "4aAn4BQM5WW3ocJdnFwAY4agCGsVUryrbzbVho2umzeJGLPsjfhjCEU9VLYPtAZrsxet28pm3AC1EXjbS5Tu7bDv",
  "key17": "faJiawXu3qmydq5J4t7gh7FHUYZgncT97uhADiJYQpxizMxWYSVXzCHvnVedNjqJhCaMoAnUhKdpwx4yzaYZ3oZ",
  "key18": "2uAqkhwknK7rDj29EnFfrR1nCB2EyodynDsfuqvxASase6ev5ARUJENh2c7iMg84c4QVatngD2FpbLBRRVnJ9UAu",
  "key19": "2tvAN5bSQMgSeWQsj34Q8HSS6qLcGPzPAd3LytSwbnsyr8Vp4Mv7pLNZuVstVYqekQQGeZ3HFCjWaGe5wNoS5Bw4",
  "key20": "2CcXoKay51BwPKRQcWYBXir73WSrpGAFJKHQQiQwv2WPzhPsFigEtJmHnc1wUTpYpMVy1aqawtKsComei4RRTeJs",
  "key21": "7vy6ML8ZDveaqF4C2vzr6QYS2HupktuC1rpYGAvYcmzAki1kmgBiEfWioazsLssWvr19UNnseX6XZCmQkkjWaro",
  "key22": "5Vyt198qsfTcQdkHdkHcQGhCYrURrf3Z3mX6Ni8oTWvHjBSfwpBCtbitETJuTqkHNqtgUNghbp2BFUerAHBCfLwY",
  "key23": "5BhZZitJFT4uC58dyYhH2njo8JTVZB7bA7mfUU7svRM9AA9moCUBpGBpAJBngRp1BMLA94umoTccGnctodMLS14r",
  "key24": "5WnZmYCQyQHrnqwAsJKHUo9M8Y62thGS6AekBUSGrieQXbBWZigNVFdudUJpYqF6vnb5SqbDx9N18vMzsk4niNq5",
  "key25": "sUs8N2GXNzRuKqLP6YsRB7pRJsaqzhThRhHymmkTwAerfADsx9JSTqTeG2H3QuhB1qq8qNt8axdyWru3qmNuvcJ",
  "key26": "5FRoW6SagH4FGZuhGNFFXWNvS5QcSJntJVs1hcZnF1U9jfRjkKtvrNm7D7x9KGFkBnoij6etSAtWqUzBiZe7Xq4q",
  "key27": "3cxzHcCB1iKByGXhnc2pvaH7VpmQFoNeTShkzVcw38LBDBohtzTj2otEiB7wf99b7dzwrmhUY5ZK38bmJuXwiGgK",
  "key28": "46BBKGQesyVzXiVwRHkXH1GKUsEu1dZ3fQFMJg9kd2jn9GJis2PqYCxi3G38zFxveDGtoYrGYdGfpg35qQR3Bsyh"
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
