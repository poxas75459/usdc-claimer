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
    "4vozs8W31qZZSdg6g7dFVbQNTbwh3fgMqDTPQu3gqJ7zC8DZ5MEr6zjr1VXH8k9ECcUKjRNHuqk4doibzw6azRV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xtHEjpw7bpYEZhKE3fwZDQkwj7RykPQphSJ3XHq8t4sRwTgPM1cguer8qe6MuEDKgTGr9HAKkfoJ8bLh2RNr7AK",
  "key1": "3JmcDVuWYijFunEpp1E5ZqeGpeG1gvzNXGbMmf3AqyoeecVJ5YHw1Ff4zEkQr4KqD7RKNvTwo47SoqzZHDWdDnor",
  "key2": "4C1YbrzRwRvZigfVmnuPPgLiC8wPE4KHQ5xeLR6aGdJyBrHoEDzAWvFtw8HDabYRnRxoRxdueRhPDwkUGzJ8dCBM",
  "key3": "3xNKvEdVphS8paFRsZ7tXJ5QFCDxzeFRHUDUTAJ5b6YU5pf5MZGYoahfkNPpGzR44DpNAgENzfSEXHCq1QKkSNSc",
  "key4": "4dQwR746TR3EL8KSBQe9JN2nMCCADwpSQmtKx8HihNQhnAid9wyNYwTdXsWpVExrboTrR5ww3ZNHNcSGRSMrBZv2",
  "key5": "2ADyWThp6iKxutXwT6BtqrjQp3TZvLBChWpJeFhKjMCjwa7fUDGjv9VrBtfpU2ghaaaN9HLjMzXnVuHFV2nA2vS1",
  "key6": "sCVkQDpkX1XVCxPNaSioEW7zut4iMpbcDdhrRp2RezW5JoLRfttiSMSRQNWeoej1zuaLY9qH5UFNh8HCgdmazJQ",
  "key7": "2v74jvw4fWczaVx5YaT1ZN5iz5zVY5nsy1CYJfN9o7gnTaCXRTzyFjSf4NM4kw2idSD8TZDM7AWE9uGTzx7i8DRz",
  "key8": "29pnY6Mc5MtCjNSTErbJbQDvTwYHY7EiG6RPga4sLPVwm9V4cvCCc12R9UpBbPHQddbMxSUv8X2PrFC4qAtcipmn",
  "key9": "VrFNwB4H1WmNpWRFWEZ4rQaNgBBru6MRHfbc5iUKX7nJugRuJjrZwVY4GAyrusUFmCdJ3SS9NZBzdtiiouQ1KTE",
  "key10": "4XGw74J7wFtXKF553wZQYh2aiymY1pxesqsw7aHc18cwmb5LR3kmwkvVUAdNr4NqQGcHFXhQJmf5PbF74yN7Quzq",
  "key11": "2nEJSNbr3UqccJ95i2Wvu4TLNnQWijiFjaPcsYmw1bdruMbsJcBaVc1ucDVahzAW7YrZBiEEP34CXAX1a3E9XqDR",
  "key12": "42ThiDGFLHv2wkMTyLu2r3v6pv6Z3ejEL6UW46BQJeR4Vvvt8GCKxratUKU8nrU9tfayaLPTCStVsNkF2gjsxQQG",
  "key13": "7pNDHh3fASgjdWkfcV3rKNFUzqbz9c8jqiqjyBqUfPS5mBnWNBw82hLJ9zBizbWct1sgLWmwfCZSEhjZs3rkHWX",
  "key14": "B8bVnRCqBibnqQUdiM8bbRTx2eQd5hXqxTGkbB7t4ZJ5ikMi1sWfb3naSnNBttMZKZ1eH3oRG4cdVyxdghPqgt8",
  "key15": "4TkfSXGA5eXB7rfb1KkPAmmR72DEWHwxJKxkaXmgiK7C9TN7KRmKHQ5m1cv6FFWXfhAMwea9YbxQknXBHgNQRvc2",
  "key16": "4vjzDPAzV9ZTuDqoa7jFzCT2ST5Djf3KHJdusPzK86muh5DSRmLnKTTq2SQyAzPbq1p4YvWiEGKukBJ5W16Vwt2B",
  "key17": "GN6NqpDuG7kYS2teBNgp6hhXAF2E3ht2q1q9G31GjqtHLjJNfXiRLizTtVZqm4WnqB7vAeY6Ziefuju815TVjSW",
  "key18": "4Soz2w8LVqZ6HPnPJvbrz5WrSk3JRsGwUApUuvdLWN4LGR87tgCqXWZmX8ZwAQoFSCXkqp3tfHzY9LDsfS5M4et7",
  "key19": "1EXpTfAd9mALQw5jjU8dnSNbUvK2M25JsW2VkinQ7mYHUKarrxeTGU8Ef3ox5AMFywRcbFFZGT8rwCGGJ6bY5Ex",
  "key20": "cWw28335TM7CYr9gAjNMiFzYuiscjhJSdakd7eBb29ubfGjL2jjkvJxBaVWxPhr5SzJREiuTgiqsAMCXTvPPwaS",
  "key21": "5uqGV5Nz1C4cThPdmxcDHpdwJV3upsrw3vqKhyRcycf1E9idT7XNFLucHHWipvgcw9E5UQfcV1g3pcEyt9W5j5Js",
  "key22": "343wLB1wcVquSCSZt3xgLNSwVwVtgwj6XzxSF4CDofMiM7W4vPSDi6ReRqx1LL8FaLDKtRBoNjSk3Vy1M8q2k976",
  "key23": "5DTqistkjQXDNEusPYyaxFEfanE2uFFZfdxYumKGvAH1qbUzivtbNgDm1HHPGKeT3PvLjEnXmjYMPuyp3NVd21Q4",
  "key24": "3MA5rbeQCipy4WKQNEQmywuTFEae47DJxeNsR6Y5Qowctc1b7ZwG4cF1ArW9ayNigvpxQNZvitWHRPwHnrzArrAT",
  "key25": "2Znf76Hq45HyBaeeEPNodveU5X4fudwTTg6TJXeC1ALKXsh4cVkQ2eEG7gr8YxNURK36rwG2eH5bQCLguRBP5qdK",
  "key26": "4BKgYenoD8PDWSb7KZBoCDqSfLcsQocVsbEyyjztPSSyyVjZkz7z68H8aeTQCh5DLXaEjc91DsGVHpLtFxnwYXoG",
  "key27": "3PEeTLxpe4WdZBSHdvFPJHfwcFFdKuhBouXimx4apJbuR1MqwdTqCq4DRfZhAtMcVvoaW7QkzhKyb2FDYMYeTbNL",
  "key28": "5uQKXNcVqRtghYesfHd73i6y7oJGLFH4gL7a5fAcq3uhFRhf4AMG8hwehMdUZui65QJ3JDLKyZWTQstDvFvavHbc",
  "key29": "584bvzeg6SgpXkGrs57aEXMGdrdAVe2nDnqru6qnpDLh571fGnMRYkDNFWE58TctgDdtcTNxowU4TKPHBtsMC6fQ",
  "key30": "mk6dhY9HEA1oMFGxd6mLRuBKAsKpHxsSnq69JLBXa2cmjRPVX1nyDWMzwZL21VuxzE6foyD62soGk8zXPekXhZa",
  "key31": "5FaQscWhHDbEywEJFJc4BKNVuuVyxuApUrV3xBEe9TCAjg44rWiq9655CJcBQ1wi9krzr71NUgGBid7HamMefMwp",
  "key32": "5FW9bHPfSECnazZuHYyww6TpvowkvUMPDykgVpcJ6bjbRXm7Xs6afxtqkpqdBrBphYYfXFhMirFVXQ19EB1L8YsE",
  "key33": "BPbKRheWRaLmBWhNSDDdVqY9dMCv33urVgjD7CZAYRVGqbUHxLwzzrWCBxN8xTC4X1uPANvQiJzkba9h3nCpuav",
  "key34": "4m6gDPFrvHdGf4rSfBFoZQXJ1AUn2muu4owrvy14PDBz2NSxf7aPLN3c7PVpJCWjn8S6sesZjktdERBtcBYVVoAr",
  "key35": "3KrzBHZrbJ1veQXu4Vzabz44k5vngR9UVzK3vL7Wz5gT5LhM3Tn1BFudVa9FVn5kZRrCNLeVDGgRWRdyZrm2EKAh",
  "key36": "63r1y9JnVxx2D7p5cXpAd2bBVPwXhmYcZ22QS3KEL2rbhASzHGL2LcXnPKYtQAij1EBioUkBTJ2U3zofDqnSFFJA",
  "key37": "3xyUPE5oHXCJF1TwuEBRHH3gd8XBNk61yVkBQtd33STcxfHWFQWcZM2bdo97ikYUES59CR66Fz1tx7DdH5Xkev8V",
  "key38": "54J8cZKou661HvciriMZPMEPxMsAaKf6cL4JWeDdaZMcqbEcprYHFEK3acN1a91cPBjnwFuQqYwFm5VnygYqz9AH",
  "key39": "3LTQNPp4BmvcCJJJdZcGc7WwGqJKEh5SVTqRqzDnxoxCjRnsUY6f1GgJjXiaec1ucWGxzqffVD1VxYU818Bw7iaM",
  "key40": "GcZsyTfzDrSn8zkJJvqUNbMDodMAxSSa8arLvMaSLwb65XnFWMPaL7cpxeABuQmqeAPDzCh8fT3eJiQd1dReSi3",
  "key41": "3x6bHUsp9c3fyiGYUnjUgYWJ9QUtxTCCcqTcGfqz7M1rRMTqki1a5zy8xJYfh9W9zpCKcBPxNFiSUuEoPtd9pLPB",
  "key42": "5S4kRJj7Yi9WjirpKYHP7r7h68nmjisui8w51J7NLeP6HNCQT7aTNrCDRL5Y9twDyXnSv4Azyc42P1JDsirtwGt5",
  "key43": "2sLQA4q3ee8cQesQBS8j7XZDHxqdjGARX9utsdwnz1HCvPuehQxxbTNVK9UpXshB5e67B5f9zuptAgCLDrWhT6fT",
  "key44": "43W1eTAEjAs2mBZ48PuqCV9EKB2Ezh4dq5Wca4yaYpgQXFppcpKGA6ZwKrFpu19saxzP3Pg4t4EedsLpJNMmrsJj"
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
