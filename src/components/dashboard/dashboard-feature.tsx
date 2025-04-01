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
    "44sTsyNtg5kg8amk8NBho4Mp6GRbZ3s9JBLQU6aBfmhx6bL7F6HomRmYSTcYT3SzafA2TULhwng4AmUfePpk5g1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LFKH9HDbYG8GHUYg8A6hR8zmctAnkdSGtE9rFRQWARaq7aRKVjkc5oHfkHQWdVbiMAwFgf4iC15mERiUrhjdPtg",
  "key1": "ES6jv1MfUKQqKQ9NcZAsoZtFRVzD2ac81pBBrdjgrvCmBrpKSHhgEQqStmMGbwCMWvF3PT9pr8R6PyPDdcHEtcv",
  "key2": "2cLbpQ11eS2R9SuPrpWPcMcKWyhXHkfXsj7wkoteciZJTDsHAiz6hfFei69h5SeKHkofVsd2fAJmFi7QW9y7arkg",
  "key3": "4rfYhSms7YPc8ZJZN3QLvPVtdKp3Bys1aLUqnK5DH3gcH64S38a4nxikoFTFQXPBs1ici9qLeLTEjdjzoM8ReyVJ",
  "key4": "2HjQ2aQdtaWufSA2HkrHsJpRVftD4jMcHUPhW3aE44GJhsBGv619rh8qFU969dFk6xCWYWAGrau2KUpFd8kTuMNV",
  "key5": "5BaQN68i4sVJG7ZLcRq8GwL7cXdsetqgFUosaSFAuRoFhxAyk16EkyK9xPnUUiV4NV99bSkR5TtAG8txahLsnMmc",
  "key6": "BF4dL8Mt5AU4xCsnAzAYUumBhzykihmQKzPW41uWGtsxm2aiAqCqnfMVx7CWxhVKmmbwd9iYVvSgXfDfvT8TH9d",
  "key7": "5VT2Q9XmoPB9t2khystiBh7BnbcGutYMhZ2Kfj6efeXiqTfd85oF9GHs1gbWXLtoR3e1HqLrXLSRw6mM9M3gE27v",
  "key8": "2PgtzsGcGwmc7kr4dgcuN92QqNUy1qs1NM45ujiLPvZiVbjqUzffzANdXL5qk25aU9wYqg3fFwSnyJgyTHMLYyqD",
  "key9": "25dg5nvFSpHbXuy9cg1zrWWDCwQF1HZ7LaeTBm6oVM8ozoaq9yAUNRdAJytgTxMcPbCWhzRSwYwp7rkYdgrJRSmY",
  "key10": "YwBwMyHNnd11ZfuGnxZKH9aeGmLRqiLmbZjB3B7ZNPYSxyNNxfb1oxKJCEC41SNyaWx9GWqrAaNgpwSEJx4Lbd5",
  "key11": "4wEdaiiVoj6tNhZGc1UXqz6xFqGUxntVjsRPnqYDWq1maSikDeMTQM8NsiWhha1VMtbxyC3FffDUbqJXGQn2jVYE",
  "key12": "4tKS9pDHD5pz45MRH7fxm2LCx56NaEmgNSk44RArYCJnyxMNFPmqgA2N1fW62Xzvwsc7i9CjyYyJGUTiSu5JGK3B",
  "key13": "KJdmdW7ApjXFAsAzjaPuBN5VPoatveyFtmwYUihALoncmr1e4zAfX3hNRWsyNUuuejDrXbbktFBPxSVzjVqLvEH",
  "key14": "5Pv4epc8BiqprBC4qp82SjigtpQgKKN7ma24zSy6VSWkYxW8B7m81JZ1TzCuetApaFnYDxDBx4ZMfqY6NkJ9VKoU",
  "key15": "3Jpp4hzuVH92LgmxhBgV8E8AzdCh9UPrJmE31aec5QAAnNK3QrLfEKArcW7aTx6MqCacE6iSrTzrWebbM7GnrwDP",
  "key16": "4zwWk8PJzYnhTm4HHprShE3V4zkUeFug1MA65P2idziXgU15opDnbCagz29t4rNxD5cWekoM96PTJUYiCdH25Yht",
  "key17": "MWhSdBBHKUQ7FjDRR88v2XGM2doq7JixuVdCNiiLDYgSCN8KNVoMC4FUa5nmoX6TG1t7GadeAB3Nbe7tM1itsNq",
  "key18": "5urJnMf5GCjdcgXPpFifDawVQNcRjig4YMHaWQhPuPoRRbuw33vhLSnkVkYGoBJn4ctXuN7bcYp2LcoE2jpzF49b",
  "key19": "4148QFy5nRsCkdU9dMEv8iMNf5wFsptToRrXwBoWJyoAKaDza8fVXEmi5SfBUjquGxUHgbTi59MtKE6J73dWyEKg",
  "key20": "3WPqGh819c6pgP1VJxYrtifYm3dEBFJXpzoXkFxFarjyvmKoPkQob5ouvSbokpzBHTVfi7duhwsvpXHr3mtZaTXB",
  "key21": "ArkubMbPEdUXECdqxCUNTLHQJxnL4Ldda3Gunw8DUBCqZKHPstsdcicV1Kkk7nwNynvJUjvogWhKXTSfqWx5hvT",
  "key22": "3rZXhcVmVy1vtw2XWVMqMR6TUApuausGpBBvhjnoXRLrDvYBuHSDdk1evqhBZtU1UcuUZ9yvHFw5gLhc7QPwhpqy",
  "key23": "5vXMcFEdVKdZS2kMoFdJZVRxYCyy5vio4JGuZTm3YUpM7UMLxbi1YFwaostj9VSCfYAuCvkTShAhpduCDM6jzFar",
  "key24": "2Hdvk46yPLHBzPS7LLKJpBmEqyU1gf8tmNa4SEDt2HWH7YcQDNCKov7p9DbR9KuEPP4Hxah2Hq9eaG2jtEXU8F6p",
  "key25": "gSRtUYS1my5Vb3phFBeFCntFM8XBqQPdmSdQiVMVTtYq7EzPmp3UdNVRkGPnc9cJu4GPiYpfNvLnUbMiy5i3MFA",
  "key26": "2shtb3yFf9b8u3bLzthDZtgSF2aeBNMsLzEXhi7qt7TVhTUeh7FCq5t1cZVkB9R2SyvXWFoQTosRanm4ZP2XhCVZ",
  "key27": "E7HYscucPgoz2qFfQCbLjCDF1N7Jha52KgLoqnPh5aBddBb4aKTS5GDGfV62K6xCwyPUZKuWsKDHx5Z81Kp1KKE",
  "key28": "2rtUfg7hkwLbRdXHFdcmmm7UfU8iVr6pmJvsz38m45ZTqnSNYXFmkei4Z4sKWfuPWLQZtb72bqrJKMADhmnKHEP2",
  "key29": "2UTEdLrhPpwkVGqMHrvjeE9TKaV9cuahytAppL1QRKYVAkipZSijaPXsENqMi3oyNePiCC6FNiB3CqaoLnWsE9hA",
  "key30": "3HMSknjpY7Mdh2K1LGnH9JCvgTxKucGdY6XMk4VA4xoeS5ckCPPs94vX8EjGAbaxyRF4ZD2WBSXzpm4Yos17FYf2",
  "key31": "3LBZA9FN4QcPG4RSs1rUzUmkKPVbM5dYyHgv7XX33x5HkRFmY55MGeyc9MbfmcqfZwLZPNEk77anmoFg5pqrfsTQ",
  "key32": "5Kx65PeEPRMu18ojQGcPSojBAP28uEuSptHuTGAJdMrDG5GVnGnhrx8ccLF79RmqNNbkR5FxuicCwcNpnNhb7CqH",
  "key33": "5FsnXDZgUdgPK4zTTimDXShusLZdug4S3fiEQmqUSZFaHATopewgN64VqVqjocKidU1KpTBDub1iEDYjoWZsrkbo",
  "key34": "vNwseaDZ2gCqaXWRbuhPmsJDJDL8WqTwg74FxWAC9uzUKoZTfJTGMcRk1ibmnzgZGD5v4LJkRthjC4kLxoDfSbG",
  "key35": "4HG7DNvPH28SrWYJXaamEY75xwsR1U3pFhLozLoHC2T5VDqDm2zvF8SgKQqUiuuF6JVeA8upXHvjf144N49FX1Rs"
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
