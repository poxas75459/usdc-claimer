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
    "2MJBTBQ316ok7xqeepngDqToofxCvLhNUThwgo8TdsEE3ecRPmReRsqDfYX1qRT8t8X3xEx3rL8cUebuRw8s71kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCeVmh3buRNQxdUD7EAV6wAZj4us59sgukgxNFEQZrw6PMdQbxLwgMNiQFxY37DQ9cQC17snDWAz1Ac9RkJ6JjZ",
  "key1": "5LGzLt4vYaF4Xs1XfdVL9DRdFB2N1uVhSS1ohkEGNYpKn2fqkBACFSLDErS9gsAtFFGrHNHAtNpRa2wYcHRz5HSn",
  "key2": "38DppzT5B2WnYFvEni3zno1dL5v3HtM2BDcdJ9ykaMYfQnhdd1uVm1uUqDbEDgVxECs4eR1kbd1NCRMEMVis5JMW",
  "key3": "3odtSjkSv11EoH32cXZtVgXJVbuA1uG4mNQ9k9Mxz5gtqNPXzdhVaonLnhYaj2KFkF7TSYtM8kYuCPkL352QQGfE",
  "key4": "3HXE2TDaDSUtgzix1wAiizsGgK7gxJpP3QJiWwKAFZuRrSmkpVQfB3quiZj2M4wgkDX1kf8kamv73Fefie6dKSBa",
  "key5": "452SFJKT6uK4mPxjEauAgQUaCW5norsctvPv2y4x7ZjRkkKLPAGUG2T44qTbp66rHwqVUpbWotxB3S8K66k3t9Jy",
  "key6": "KpjTDm2SpMBuTA95gyG94pEjvPneZGYtDav3aBsL417FwjeyyXyjN2ZWNDw2eXNGasfHDJeu4YRcLviVWeN82LG",
  "key7": "321bJxbZwY15PSkY744DmZXL9c9EdrDEqwkkfyUCMscHMAbrTGvJdBpqko71LyeqWqLvuFrWwcEkWREcSVtHvCyy",
  "key8": "5usigpUW5UrJozUCUWu1fMGZCvafGLHUn5phapsnkcA7YRv4PiKajDoqd4U34FRGLwX3W3k3MDXdBamiE2TEPUHu",
  "key9": "4EEHqGHP6wgHkSNY9N1iq8Ve1Gwst77BhRTC2okTKvQBGehDVuxHo3q4oEmggHZGnPQZgd4deKymdna12raYQLVr",
  "key10": "449fERY8PbMpiWuSfavuwC2fZYxR6tqnzUcSHUrmCncyvN5G3KCYy6oNwhpbWYtrnRAVDhhHcovVs22wpQe8rPiZ",
  "key11": "Mm1aVjttf8yyuT4YxrdZWssVSxfY95FPfq54EUAfiAVUMKJGUQ49xogEQXRTD2rzu3H6n4uCQwo9JKbnqwbizsM",
  "key12": "3pDAGSyt6bf96U5UqXkcs1LybQYCCCjhdXvBEk7HqAuNJrguHuaBr2E8Wu5xPVLGHksKhFyUGwFsLvpSBUD6TGAq",
  "key13": "5biBaaYVCycv1WgSfJJE1Ujm5FB6hQWbsji3EphPhHkovTZuDmHajFJfuxKaybcdRCQYwTh7MMbXFbo9pmxvNB7U",
  "key14": "3V2YMyZGxtPzzLUqCD6Anm1GQ4DsB2iBybU8E6MdNcJprK6b9ajqpDes6ehMG8us8fTV8XRd3dBeKFJZi2enQXNv",
  "key15": "59CwodgCSkkyW28WVVhT7KrSAQJCSJCNTwpb8862ARiKaGWaYewV4FWk6TgCBFuv1T36thviTPeHGaZG4x2W49Qa",
  "key16": "9HhWEjzxKJ2Rm3Y7dD27NZsYFSBbQjpv3ET947i4T3AszPybfF1m2gHGNDuabAx2az9ZL3QczuA4fuF9SdTZ8RF",
  "key17": "5Pqa2XBPngd7mCSbADo2yDe28LoHSWk8a2QVSEWbFz2QG9kBUPfv6n4Tw9CoiLyjGb41VtKHiti2hpy8ETEJm56Z",
  "key18": "w44YCCq3Mkad2spWFYR3J9xuFou4Qx7xCaR3Z9hEMuYMseMWPxUAS9ELZt5DLbosb7qFNnCXHavxtFwnCebtDct",
  "key19": "643Mfp2xDeRPSqfF7B5UVok47BPcXLDP5zxbZzXFJGtn1dsLSehHYbomGNx22bn9uikBFMfX28tc6JC4jdyhjUw7",
  "key20": "EyVFumfeHFh68XSmRbLZ7TsgYcbcYnxT9dKP1G61hV7FAzedfJSBTm6zLHsiXswgKsXEamDbDRV9XbvTfBdxLbH",
  "key21": "2bSZoSkvijgCoyCjtTh6U6PY6oJpyEsrMihhZYdLqqMpCnBnhh686FEBLen9pJzmcaDr5gukjGDvBdcufgi94yAZ",
  "key22": "5MLHGE8igvsxcPzMcJPUzSV81Nzc3d4J4S78yXjLQcuuhzJrWm8bKG4QaYm3erQyowcjMAjxuyh21Dxvg1fbEpSW",
  "key23": "4SRFM1Z1VY3oTFE7NS8gHMyX2F1i2D4Vx5sqYcLNxGA4b3Jkg1fU2LiqQFhCUhoN1iDi5yiRUfKZRzhTtjw19fTG",
  "key24": "5U58BKLLRCftPE5TxC3cSocS3bscSvYU7E4d9H4Vq2kgYvztGSogCLDo3ctZbXc8hTbmdDJcAgmT2fYCfb8sF8Bx",
  "key25": "PMrnoUetM5VYThBvHTT8FD8x4Q4CEsGJRKgoCpcVfMHLLSKdamvnUje2G3sdhLxUgyrgWSE6ix9myPPX6bDPSWx",
  "key26": "2P3Ryov8LVobqyDh9FqrNrqQ8uRY1vEGY1iHU26p2UdhtGGiKkm9MQ9FwppRq6a72vUSsRMMSBSKPrJHgdEH8SZA",
  "key27": "4Nx8oKKDohgZ1jzsDB6V5BJMQhERNGsLq31JTgMRsMZaCgMowFWXMMS7pNV7jm7kU4e83id3k3nDhFw1AXmir6zN",
  "key28": "5WoErMtbyVoJVxj9pxcvXz6rqPzdMuA2WATsAXP2Ge7K78ocGa5U38MBBveuR3sfB1nqBbEYokVZ97mxEV5GK3pD",
  "key29": "3VqXhfEEbj9Cv5LvsRTAgfq8UR1d494oSqPQ8AE3wJKcMC49jeurgqcBqbu9mWwyABEjySt3avGcLPeqK9bj9Tc1",
  "key30": "wJyqBfSUEm4hSmLNAh33Ma71EpLkB4iTar68R5iib5L28r9QJfG4GtchNsZQTK1Ex7BdBz4du5hwixs3WvfmCZJ",
  "key31": "31xv5LrgHxeNZG4Rr2VqZrc6Bqrmvjoz7jB4R5LpBi11iozt2ymGCdbuAkVDdipdnqfqfFYzicjoffxT8F4zFLsB",
  "key32": "3uie5VB7G8eb47pyfrixMvqDnPXS9VU7DyJGgrsg9LtD1spuu7K642kyUVipHiBPv3Bv5SvLq4qvrD52f3rZxWym",
  "key33": "43NkV3RzC4anrLPdmVxej1JLCE3AGYHWQcqcb45VLjbhrifZKEGRyJLa89ciDUEAXWc49rQcvg4rRYVy6c2YS52F",
  "key34": "5BxwKBt3hgoJFeVLb5EFuBhf7rvEK4qCDCH1QAgm1hve8f8rGHMqWL7MhajjFSWqFChLCARNqKo3VT82p7exawCH",
  "key35": "HHDJhL94y34f1wpDWAFxrjpgQHLzECjq7z7UbxQpnViaYwwPS32xkQ4tmiJ8rrb48uyz2SQyYVdDJqvb7Nvcv4i",
  "key36": "W7iswmC7sd2Gm5MHM5EBNo7BSjosQxLLpSGb2Vft2p18X5vAsuhZ2zPYxM6qky4vH6x5XMH6DMGN8NM5vc22RBr",
  "key37": "5YDwRyceZwvkG2NP7oLfBs2QEiTyuPMGSAJXc37JFCqkvoXdUGPm2rN73UebPKEs4fKgdAhe8kBq5fJrCEt2bTFx",
  "key38": "2NaPq6zJoyYGphcBwbVRmPm65PqDgnuY9JXx7n1DKoqDLQzStdm4wBUZvrzWP1ND4FYnmChiZKjwDK7EF4QQ5cP4",
  "key39": "3oY2cArxMykr5tJoBawruNrooX3YHm7V1ug1UbiUXouXjCzhpWiZVao913htFtTFicAmLBLSWLaFkNAbH23ZPjZi",
  "key40": "3PQMt7pWDQPGxSoJdYsw6NdvASKkXZHeS3YcWXhHZHVo95qXvV1cRNgFdxdxLTm8M1bEbtM5vwFFHRRigjtF7USV",
  "key41": "b3cCnFyEDSe5DZso5peew6HXZcQos9j68deADayz5PgVux9qL9bQ2ruWnPbvXAWYY9QsViQApasMZhxPG7QuPJQ"
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
