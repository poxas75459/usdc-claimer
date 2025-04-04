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
    "DE9u7SmDUySorbFzipHe6Lt6e8VRzqPSUQ991hnJJxF65Nk9EMpqmrBHV3UGjswfwWxDCAi2gnQcXHPTkSFqahP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyFUBrqjRAHZ2Qv4CX2p5PVEoNCJuhgPDRHr1PEuTzddCGi8fDKAwCP8pL4fbSd9p8XWmn9j8h2JSHEXRUHG5cz",
  "key1": "4yq52YBfSHad93RYNvNNkBeLNzxBjAKeJhVFDHHowkjGfhAwzscD3hXbCjf3UdhzgWJTZJUYNLht3eqVzUjDmDZQ",
  "key2": "2MvCiEAYmPDQKDnL4c6rH5RbfkLgQ7xF1jWf6uyNfbpPmzRkdLezzbsKnQFLTrafT88iDhMqi9Mvcf8kTharcffs",
  "key3": "3oFrbe9zgr9bpvJtwxmvCiCB8gHdE2hB8RMewyQZVZnxSMmmwSAbVF7Qt2u7iHzKcWte3JGiNPZ86kH419i8QNF3",
  "key4": "3jAkq6DbMZu58PFWXLmhY4EfQUZ1eyX7VqKGxjEECrT6ZticVfCkAvU2N4mn3peu7BeWzDBwbSotkRD4zNv5SLjY",
  "key5": "5jrcVXt4PeryR7bMc8SBxnfPVq7dRTkmWugaZgxA4RMa13RDRcWcri42icxVQyeyCrg2vshXwn81jWMDSGR7GWuP",
  "key6": "MpipV6ec7fFi4C7BFjtRCYUufpFD2M1e9CSdxavcoUb97pTSUJvUG93gk66qFB3xo3SUWE8hxv1WE86RMUt5zR2",
  "key7": "55PJ6U2f1sKm8hoWUCE83NYpd6t3fXHJvrqZM3HpK8zmNUmhdav5wP5zy9WTb73JXSqgimMbXZAJc5kC84mFAaQK",
  "key8": "5LHJkPRFk1oGJgbG1Zc5Co8WCRsXr4VR5KtVg9wv1Sab1YufAHbzrPXuZWStdAJZoQxGXQW3t3CpsQ9AcAqp4dVU",
  "key9": "3jnuVmEZ7KEBJXCP5YBurDPicfPcAtWzeCSvHQc4SkDieH61k5jAHjdkbgMBFsF1NEw7LpmCntQ8fNwyKUpYuaug",
  "key10": "CLHCbmABsbypF3419cvHqRTrFjmeASAbTS6W23ji4GooRjhvbSqmXAkN9K8stBT51boVXH7cPAttQyt71cUMzdh",
  "key11": "4iSpLTYFmA4VKkskC68MfcUhbwCm8oS9mgDe7LVNoSgoKN1BEEygw2gcR5mKxHDDTRTi8swp89T8hfuPDsXXQeQs",
  "key12": "3zwTB7n4EiS8ziSaxRFdRhvwMd1dHhXbcgLdyxWM7SFudGWVm6raCumdGFwxgjLMyxZjQP4thGkeWGVehar7Ciqb",
  "key13": "2UAfg9nwLzAeK9Zg5nQ7MLRbHBvgit3SrGrvoKwtGdVxz4h5qSXULBb7AeLpRhrTvq9jiRJgpurMCznz9MSK6EXo",
  "key14": "5ck18cmUT41GUBvWf5AJMsrMccJivfuaj3ovFsb79C64K5WwY3ezcApZTrPzq5ddVTxwPUmbT912DJW213Ej7QSr",
  "key15": "4tuuLho6G5Rxa9EkdefiUTsdebJKrGrsyHpCz4FnX5X6TxXA1LdACUeCPXZwGfaSkGYL9YzYNy3gnMHkQJb8HtjP",
  "key16": "4gyEonadjz26Fj6HxsRMrtzLVak1yUAZ4HCTHj2RmrYDBuDxxp1RLXrv34X64CRsoWQEWSbGD1txnyKEF5Jkeeij",
  "key17": "5W95zh9RvifTzcBMXf5bq4GmtTMuhCpjuFgpX29MAeBcDbZAyDd1PK2DGAGdVgGvZQkSFEG2L6iqhe6RSv9Mgjkw",
  "key18": "354gQTMZybQk4NtTEwpvmnbagGfKtBYRA81Zkv1J7afQVVcJM3zNg7iPGsvoQMcMDASJprPou1fVJYTjtNZjYRyb",
  "key19": "3k3d2duy3UFrgqhKTNj4J9cZePxFTZrJym56ZE4iivv6UnmbZMmLMBFYW2zgMk19nqWtHLa7HJm5fY7USmzZffpF",
  "key20": "2BiNucuMcQE4JZYZ6mTzrpUpqRALzEVtF8tweZP2LGEPbwFLfGnkBah66javRwUfatdYDaQeYtqmk73nvwNrQPoB",
  "key21": "3nWjfEuf4uQ6LWUzTXZS4n1cwF2UVzVpd7ba2KnXSxy7Sa6MC6Qy8V6FWtG9u1uys4y3Q4zhXaNYjpYECmAfuDS8",
  "key22": "KxBZuTPBXVX6qUZNWbvrFUgTguA4J19k8vrfSQMaGknKPq2DvHGKWnoVEqMLPc5jk44jz2zs82ZeX7pwyuwXuG5",
  "key23": "53KRkNUN5eUtiQRtkhZ4j3Z4iaadAoWVCkDX2AFF39aj3mAGvZCy1oTNfHYZD8tdArSLYuasD3vKZYSgsBwXw5aM",
  "key24": "5WJP8yrPvk7zxKYUqd6yFGjMJmvcCQqrRGVwkoZ5CgNVaAN7Tt29rhFoVqVVSUXeCiWQ7az9SYdinYTFf9Qok9ZD",
  "key25": "5p1sHSkWAed66wBeXKtCoy1zZMjKHAkdxHGZTHejtBLNiZS2Zpq3GoKU5vjEzAbxvj4jAr21jaCDnC1egQqjdjz8",
  "key26": "4tcNLN36bpQr8QvqqsPgD5tDKB2v9jdmCpkEpRWCF5C6CD1v33gtbA1poWthfLSiagkrMpoaVPbQRLMrygcdC4sy",
  "key27": "298mXYSY1YhRAR8gZD2ytV9nYYiZP4rxA3JcfgWJMGBxtrrrXZPbzCkCHtLft68iYpJxZ3N92Tsx74rt4sNw1DEp",
  "key28": "Qxsoa7x1DmPAwSxg5wavND1ZgjJ3wqWCYBiQPMVkCTsivxUa4J8e5sCtSX981SMeuJV3hdkSnzxRZwit5zob9de",
  "key29": "5kcv5wgoeBTfYzCuBBo4takxCq2dWyW57m9tXymipmgee7kM2sCbfL1BN7ME8G8jz1JaWhdXFdcTbCFBYP1h4dTo",
  "key30": "3PiCz6DpBFU4uZMeqKFjzYgmVUXDiQHPfa3UPApZRQcWLRgjoi4pkGqzhJ8RCfoGCTJrLfdWYRUYmcgWVTeohBU9",
  "key31": "3ya8dgg2kLJBAvjVcjctcXNkzekatf1tCcLFarbjfL29pD3jZE59Jv2KpBJA2XUHFCvwJmget1MQa1BqdxQnNZPK",
  "key32": "4AkP6UVrTtXsZ5cjgAcvT2ehTZP8BzWynCCRiL9R9JqG2e5SJZhmWCAxRogW5i3v3RrNDt8SWxKg42gfDZRRBu5R",
  "key33": "3rCyVEpprSbBPRGn9JpX48f48SNGgkHuPM5MbagBvZZpDTYZ6d6Zv7ti5KES9vG51Vov35zgxv7GrG9VB4DwN17",
  "key34": "629QwZn2SmesDCmnUo9aVsrjkB2iHT2Ktqct4ySUrrqxKxbeMgvkFAib9YA1hhdzndSn5VTATuUsX9SPo1TDCiht",
  "key35": "2DJjmsaGwnCedn4drL3N4Jok67WjWYESNZsBjEdPdF98MxYkYRB1Lniv4HwX3Phg4xJoQdkiDpaPMjwm5KRKuibH",
  "key36": "mMBhEgcLwthhURppwGBAJYGJhx2Dc5DE4Go7Ghan1uxbH9FT1HDM6vStRy6wbzrdrvqtMmgrTUf2BW7WNWXQxjX",
  "key37": "2syWzXUuFQdRu3V1h6WS8QZaag3yq7rocwYbBU3RdynMUa9je1Wthk6FAeKYVbcL9bgpSPY7W7eaD9qJ3Y9FgtBG",
  "key38": "46bpZEP9VzUQWgM6ZVAUNxuDSN4jBPaxfNqkpwuHYsczTHTk6sPnoVHr3DmJAPy7iN8KeACmWKhnQBegbCvQmHjb",
  "key39": "Q3hihR22XAUZKWL7NkPT1Te8wLq3xdQtx6eEmYAzadwRvqKJ2DiqjQZuZhKUgXjPnWjn99eYRyuCdurUAhny6FW",
  "key40": "nowSGKPRVXaYEJjUAU16F8yTJg8vDq6uxBfHZhNzbeFfuyEMWoDQPu4VqMVg6yTdKprJLuPbGea2Un92XdmR6oR",
  "key41": "4Vama5dqTDD74RuKzzEpTuZFC3riVDNTbhyaYXUPVtmHSfEn1w1vXuehRJrsD6arTk123UGdLsrCSWGPjD4ESC9n",
  "key42": "4tc4v9snDqqvYwvcAtVVWL2Np9jxL3QvmkGiuig3tVSfGeE1CBELtS1KwAbAuXoHhhJRKRpUSCPJyBthVJWpP78F",
  "key43": "4cHHtcJvX3oYGUmhV8uFxYyhpufE34Ywvrth2XQtA1QSsKFEkJ4ChET7JtBfdiiC6Gmw55WHDFMyTb4z2DJKECTA",
  "key44": "DFrwjrKDBJExjuipTJ9uahozjsv57TNHQHYiMGPiJBCsq473QSADndXy6xCLREvtSUYQPtB8bwWnU3GTqsjudeA",
  "key45": "4FBJE3JmrAMLA5bJq3svEFbudTh3Rd1S6HQR2tnTD1CdSgRBVyf24NpA2vueGYBDoQpAuVzFVoAjgDszHoasj3Qy",
  "key46": "pkpbVGGzcvTrNjSCNQfesgmYZWXga9eUGRPYCWjsJbtytXFcbeyT1tuPuACiiLBKDaDpU2x7Rqq8guUc7Uy2rqW",
  "key47": "4a4i59A3dLXKRW5tUb96AZCSBBjPAi4KtC1KEgWiSC1vG9jDCzopWfKtRBHHVuMR4ZC7RU8tRrdYTw6z6QRfb7EG"
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
