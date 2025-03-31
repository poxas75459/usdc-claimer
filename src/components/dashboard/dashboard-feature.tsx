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
    "5CRb5tt35qqvwpcx1LY74RMLs6xj82KZ1vuWDrpnhQ3iN9ZEFgYnvjZYhRA2rbW8GFqCSjAWajqdPcM4dSP5zYXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCPfd139imTm4zXzNahxknGjfni4zbTgQjnyXtLCrtfSybjWgPMDKdZsZaqxXWJ8VtaSt4UgcRRGyreBpn1z72P",
  "key1": "2LT73j54DPkVJSCb1Hx7ukN3pKh4Wd49BfWPaU516pA1vZ6oMd1b6YinZVzPmipEXuQP2LmpUGWsw1JVFXN6bt16",
  "key2": "jA1RHFoaZDunkvArU3nzYdt6QCQgh2fMHMVe34H95wu2kNKE22BEcnewb3Gky3pd7wRQ6JBNHX9MUaYZDLAzeCF",
  "key3": "sRvxm4Ryif4XKDjwPhoa43xSXQ6cqgerDjbzquLis4Y8Cin86MKBdJubxsrYi8nwzht5XFFQSRPg89B8zqvfq4a",
  "key4": "4MZNuRLqUrwpMALYjf2gUQH1MEbxSBkb7sZuKvr5GthV2skdDemSwavb4pJjg3Y2ciGym5P79x3L9DdpjFnsTLYJ",
  "key5": "4mGmBZCVbvF3wMyohpbgdtX12zRiUU1ECYXyE9LLzMMek8uLiSTkxCs4zLJ2STA9MWybVm2wpT3FrGyEbDJ9qatT",
  "key6": "5fdBbVXQAoBBV49ZW55zsGob6hhE3gHiPrnaCDx4v3zDE7XiG4eSVbEhTQezQEhpSDsxy8RmXnvbPfafqVjKN1ob",
  "key7": "2k2PLXTpjYFfTipgRajCWWhNgzKJzE4P7qFArT1632rwr7Jwbkc7ufy7Yvn7j17xCw4EBtikgr2eGpkztNh8XrCU",
  "key8": "xAnNMZc3TC24mLiaHp25hmifSHrVFGw6Bx8C9FwMzTpskgpC7Z2YJS3yvQfk4j7kYB3nNEKYG8TddTXr4XWoZkB",
  "key9": "2DCfXxpZKmwTzKvaUtNzfSj6MfqGy5rdgMgQqX82ViCspQu9FnKiav3e6mwtBZdVmaaaPWAcJXFjcsr6oKdAUz8N",
  "key10": "AFpXEnnNNVHaEBu2h1vcchGB9meDiHk561PWZhxN7MhzpPaeT4vTjD47aS43amCx8xbSQTvkXR4hSLrorntAjyw",
  "key11": "mrwaqXgmMtxNhsXzhz77uGTVPq9dbWqP6nuu3jbuJZzsWEKd6b6S5N797j3Da5MnFmY88GeCtDKFGk24rc4TUSx",
  "key12": "5sxHEiQhTK3yqjHUiPVBmG3aWMCcuXxGj2nVDRuTxcriscd9zmkJy1VZSiLgicHSiTMm9UR9SQyG9cwhgDVQ1gsx",
  "key13": "4Kx8xZcLjxMM8bSm1SRGNrD8dx6eRDr8S8RfNTSABCqSZzXeWKu75b4r2HTzHBc5rg5BHcTrx16FSUAG4xSGaJpo",
  "key14": "5bjqNRRpZUL4K1H6YSQvSXdaunxGcEAUcPQyM4W3pVve9fRccQ2Kv5xmwicjyC9HadKfPvTA9HDF4MjyFRPmGhxK",
  "key15": "5vpLcXCXvJRezjVLtJozHfUFAfvRUV7W8HvVTX4joiKL5VLr8E6Vrn9GFdaRmqaGxbPv1KsD495SWgJuYp3NovcG",
  "key16": "cSCaBhF9cZfaz3NyW1mumfrxEzbNCKdAf7XX7KfZSPg9kDaNWzucSu7HLnsydwJ7EcgqWE7U29w3hJy1PJscS8g",
  "key17": "3x2DUWhLzhStQwP4p6jAmgW65hQfdWge4go1ZrX6VBD4QcLRFrUx2qR2zQX9rzMB8jU2WKYRfJMtCUqrK627VeBJ",
  "key18": "5JpcqEBy9iJsdagD6PFe9GQd99eeYSjAAC7iQvSxh9sJub8Ftk9qSBCXAfmS5qsqwBE9tLErqBWv7UGdBpA7VfC2",
  "key19": "5QuxyRkBcgEMEvn21uzVkus4nvqRMcrvTPk2um6QpqK7akScpuSxgNiC2z6dbDLeMuSFXvR8etCG4uAVPHH2RYMJ",
  "key20": "54JMuHRmMqh99XQXHVH4rceNzXbBqUJXNGbTaASP6vgsSo5jiqk2aqH924ESAkBWqovMtdGb4WEQrBF3oFToL3BN",
  "key21": "6m4d8oRivJSRDAHZvaXQr4suWLFjppjte4k7X5jkje9cELt5xEkwVJUUHebpwyDayxcAwSS5awtZtkRLhed8223",
  "key22": "4bsN6V4FqVe2h4Mf3jMNNodkDh1rNXueWB1ns4Joj5oqLmwY75HHe8uGrnyC6N6CFjYoN7okieFw2vyzexoigp59",
  "key23": "2HscA3MSHUpj46utWJ1GMejxocLVvQtovky9rpE27GAiuzWscn6WiDKKoMP9VFrWxcj2HrZhQLddC3HGeGX42LNg",
  "key24": "3DJCRuDMG1QhPFB7oefuWtQhp6aUk8APp6WK6yJJ58RiUz9NX92sz6aKgm6RuQ6ZFgXqYVRW6xhhcSs8MJfkdkiy",
  "key25": "2KFXHEuDj5EYDdDvV3dqwhH4H4WF5xtZ1iw9pZpkWLAyuvoDdAg4R8Qh6n1HMHfCZ7JziFuwNTfeR5segq3bsAgn",
  "key26": "46Jac9VvWXRDUWzT4CfuqMt7ox66UeJgAWXo4FqMsCYb9X3bPPRS4ukomUxYX2oeMYTresstSbW4eHTXUJPLUkzo",
  "key27": "5YGXiUY5yU8puog1Avdkgr7kjuWm24uwnoibR1R6637gLr57oaDpbkyoW4AbVi9baJuQce4sCaf3ZpyP36TJmg88",
  "key28": "4xsCnA8tf6gPs9txyceRSpFHdsNZp4TTJ8pL9qLWcktr2qaVYdCoEXxAa71mbvU3AQmeEijJic7u6V5GKVgAE9CW",
  "key29": "4PuvAdAKHsr9os8fXhgkKwa1q3X1Ds1eAKWkcZRFj2FnvwQPXEWZrmQsMhPCBsZU3JfeCtXfqwnkGECC5vbg4M2s",
  "key30": "2wTgYQgZ2ki38A3yjEJnGzUuvw32LtwFAqiYQWkerZjLjdmnHT4sVPeqDJCQyW48TLenPqEgmumBYETgKpMCnG39",
  "key31": "672WPiV7T5tvnTmVmkwFegoaHJfx4rugsZ2tnmAmyduGra14wvuaRzdfZhXVpJMP3z4GLJCjEXHsAFZSfQFoF5Cy"
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
