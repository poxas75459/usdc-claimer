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
    "5SMdGmicCXuh2SrHGAcfymyCyeHNtW7NMxjkVZj2MPwwVfK5wzNVRbPMYPrPfEKUE8qV8TnEgUVNmpPib3q7urEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHxUM59fwSkiivq21Hcwvx3WmMq8jQoFe2KBe57oY7nMu6wo1a6Nvxxos1rtXLoefPr3o7g1kJFJfNuEuXRbbCN",
  "key1": "627t9JPzSXuC9URLeTotbFn8woJrCkFX2izCFbfwCiuFTfdkdJKsp59Bnk6j1cdXweQDoBtdWjUQPnQaQD74nv3q",
  "key2": "2d1XEVKT5GGXPCv7PgZqe8Svn6SpQ8G5UHeX8T8tWasLieDP7v8r2XdhqBjzuMqS5VWjqg7tBGyoVuiLFNAjTvCE",
  "key3": "4DWQ2F82GnjG5AdQFeK7QwwQpw8V3bmgdQRoaVUr1LJvvNJc5ZcmsVJT4jhBBw3yA81hvLrKPUY4DWqRZUmo8uGK",
  "key4": "V7xuvQwr2gMCW9DRJpFBsc6FqDt1zsYLHk614bt71nQoJCiSfrysoWdektPw9qouf88tYZmnYXYFchXgRnRvoZS",
  "key5": "4B3FraTFxnjmaZ7n2zNy85whPbXZ6geeeDifxL44nRBSL3p7Ao4DHb3PikterC5JEJtoTpnABPV1Vv7PvYExE32",
  "key6": "gVGxtwS4VvoNQ1kNatLvhDNHdvY6X1CxWTAjjaLKUywpZ44XuRNrFEXmBsDwHC9EEpyVi24MV5w2417oATFDPaj",
  "key7": "HUYnHG99ymucfBcKXkMtEE2cvfxjLsNjYoyTgYfTEofzCENftcR1RSSueAEk9MqNt8j49ANxTYD3M7iaJenjAAf",
  "key8": "2ZXyQLxynD6EFHXJVTuLHDYEB3Kpw2Re4uDmpspVaqtCrJZwpBhd9FcDJT7e1REvijDjVSokXXYbiG9SqLvuWDGn",
  "key9": "3SjJHvGXwKmD5QhM6sQGVPbkJj1uGNDHVsmbScsPsgEQdzeALXXUzMyXigPQbL1oMrDgPGMSP3JGQfDDTBubZxGG",
  "key10": "3XXjLBGWMRvwd3LHieY41fXpfmwYxkoAFqadkJcHcuogtsDgQ4xGo6afG6YDaadA1AwNccbwZVLAG7GS3QMu4m3B",
  "key11": "3adieQ2rcMUGZo1Su4jifd66ByZBAxDXxtBYiSmJLSs9uGgxCguEZ5KJ1TQJ115boTH4db9zgYBUFWWQpD4psAdx",
  "key12": "gfxSwjYFHCGtJitz959RCHLME3Xe5BwiwNKFSsN7KAsbsZLE6mWJWoDytacpKjcB3aJaWu7ZCY71BtdhApVPrQp",
  "key13": "27swGNdZzrUUth6gPzy57Fte7dMUNU9NyGJsY8QVmG9NUumQAyumFEJD4bkyz8JBg1XWWYsNWezmAFD2CDaDmu3j",
  "key14": "2DLNRHgDrN9T8AKXWKjMG3wQyN9n6KbTaCcDaWNv1bGS1Jekv8QAhVYhSnSYC7DUn87ez37wZTLMJ7i2aNFrfcac",
  "key15": "4SutPP19kUhTJL1UNtubDuTFcWtbgjGQyBybHfUrk1oSW1deqyTkjir2SmJyKFG4u7YqJxPgqApyCZL3Ksw3dZFM",
  "key16": "5mgDFRrKmwhTh55VnRxEkHx7ZKMsT6N3JjkE6Qm95nVdHrQ93gbyU5mZ6kFknAJd4dCG8iDLU9kwQjJQHfV3WNXb",
  "key17": "4WtA6zuFvYmCEjXYDibyR8yvuY6oqXHG2daML55eqGeybpMJzPRqVztNHp5d2ZR5ySyqbFvFTRfxLX9ALa9uWHgS",
  "key18": "4nrQHbzXSg8FF79R2sJbfPTbpg856k96MrT1j61dCJpF6ShBQkhnjoPAonzeqM6b2yg8ZdAcshQPuDifeSR9mHYm",
  "key19": "4nWHxxpBDEX45hXFVKE96nszGfrDdcg7u1ouNifHm93CLEb5upjTmsdHSMJDNHxYBeQn8MA9SpDKTZSk5DxE4gVS",
  "key20": "4nBTk7YrCf8UUYRKaT9wRiA4gq2A2xZZhFRTpA22sk6vspoKcTjquJMm5xNUUUCoXDdtchNPgQaVWE1RcaJ1RX9x",
  "key21": "5hG2X7dtDmCrCa2U3jKcKHi5vSU7sWkrznfu4dU34bFVQCHbgUH3VDbgGSeJTPTFKdCxJq1cg7HdjnmWxSiBAATs",
  "key22": "5rNuPvYwpGAsXi31B8iRsyVyJQarsA3YajDU6Rg4tWnpoYK1A1MjtncAPMDRQfQ1W8DPrkGRBMyJ35BBfRXP4ZWs",
  "key23": "2Apbv4iRXHa48fvu7fmCrZpAqNtJX9ZRS4PAgxroC8hvojsfKc7d8so4dsvqnWnGDweo42DafmWpauPP5ZpvyoRB",
  "key24": "3uYJViTG5qMuEVocmL2mMT9GETr9Qk2U2pJBqmBZKwr9eamvMEtV2dVhi6tHJ7wcmPCNe82stF4TRwpYkGLuz3ek",
  "key25": "2UDWZ45MNtofiEJh7LeXahLYLHV8Pq2q2xb5w4t1HpycDAYPyznhxaCXsFTdJtTU51PmcU99e1MpaD3xLcDkzd4H",
  "key26": "39tqkfE8yZpt6sq5vE4LZ6qia8zHUVx3NisqMopaZeJXnafEC81ekmypQUnYvrNCbTjG7JA4BW19WSFxKVhYCWUx",
  "key27": "xe99KEABNjXmtTdgMCk5MSadHp4L2uQQ537z9tzG2SoCPtPFJDvpnkPWa9LjiZeUrpHUcdGdz7sur5Tx3CjL3GD",
  "key28": "41HQJVpKEaxRBQfdwyBq78bwbXyy36YeS7rf5xhmgLWUY4rkiTeDhDzKAcBtqEF69a6KpqqNcDCZNNvbQdX7SHWu",
  "key29": "2yN64TYcLWZM6cMzuVuxUHxGuPWod226rpJeY9jMaezpTCB4EEQx8TDECu2FPLofbqg8wDbikWVU2915Acp2CCEM",
  "key30": "5KeZjmh5jcTswVrWeiFemMZ7D662zgkcHcWfdWtzTjSTVnRyAS12g3A6c2cDBjtxG1o8sQReiCUxBvhCJD4rsSjT"
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
