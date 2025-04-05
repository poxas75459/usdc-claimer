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
    "2bCWaKLudXR2GmT3MTCTHr48KUC5EV8D2oh2SuHaTnr9dtEDnBrkuoYMBhjuKbqzu5WP9WZKHzX7GszxeyQU1t79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdLGfA9vrUUpxEHDggK3sBAxdNH7jReshyYzphFHhitzTcvSAmdkT9MyMEUdhNvJSwfHie1Zohrj6T8ZiauP9J5",
  "key1": "dfPA427eFypjTUR8L3vqFVpDyX5gjpQArPzaT467qDzBogw2zzE3t9WZzqxSbZY3KZW9Ede3b2w9LHLVq9D7Ufn",
  "key2": "5ZeUALvgxzCWawBy1PLeChfqaJogZGyT8v3bKDxtytGQG7pW7Mv1PsUU7ybqx1ZJmD9BFbx7fvRRu4PZu8cGDq5H",
  "key3": "2WQ8hAzAEMbSBsZEwZEgyNyiS66tkmGdhzP6DfNLvE3jsD4PUxYHboYuukjf2uMDWHP4DVXT6ih11oeq1FKtFsW1",
  "key4": "PCzgEvECTPwk4cETx2NjxH1ttZ384Vn3LCc7aJTt11et3LJMqpWgh4gW2rhQBBAF2QV1a24YupD9MKfGcU6rxTX",
  "key5": "bo8CKeTtr5sw94WcNXCRTJayVKJf1UWMNJAVYaEJqGx6Ufw4b3JDvhYcCafMSRjZSwJ8VVRMAndeZxn2GhVPXF4",
  "key6": "3inLpPr6aHhvQ3maYobkY3juoEw5KqXdwm1urFC4DH7QUZfAFJhmFwmCEvdryibpdLgK7mU9uyEkgpR9BgWc7UBC",
  "key7": "4KPUk5ALRaPQqJiF1B87zMydyRUHpzbMCSJy9HpDriReJqRun3ZwYym1SWY6BrMr9BTRxzh4x4AtruhxMkFcVA23",
  "key8": "5B3rJ3GWPGWLnCGsJVsyhvQrBAExFRcGJ7J4JrjdVGFz4m6f5TTGvqgCpERKZBMokaUAck79LRU9h4nAyssHWGXR",
  "key9": "2Gy2J78oXDifhJw5HMj8M3DvzvmAj7h5fUoh54xAnrXZP9BWQmjLF3oaRQtnanT7WMcx5W9pffCjNsgwQ9zcA1qJ",
  "key10": "EX7hxoPGdCKo6ZA5LgXzynkv9Rc6XzznxepR8uX8QgrSbUHAY55j5uswqEdDDURR4kQhYoK5VyyqapRXScLxpFN",
  "key11": "2cuzX8FW9pfBsdH5w445JwUjtF283PxQy391rBXWvuL6mqqm5VsN9smgdYn56JFpQfAdE4oKsTGydrEfD9s1ShwN",
  "key12": "4Wfa3EUPGE6QNvpEZLU5Qx9Dh2KJcCD315gByUYAQCxczfj3iFiu81RndWCWLpre5wc6xbPo9LDYGAsHWZoydDNg",
  "key13": "64rS8YLP7sgLcFKY7sGWgPj1nQHqajFppMwneYpDeiSXxDfRmz2GPyUBLXQhJe7mT83DMM59arBTKbfVbRUJEMZY",
  "key14": "5SVj6sZqVHNJCnWkTSASWp2NdVXuK1qHiNMdjHbhzHKTZ3Pba3JrPnXp7ZHnZiajUam3F79nocRFKXwnNf3r1Nu",
  "key15": "4hnt3vEamXbpviXSwKthnd9Af3AaTazK614u2uhdJpGfcRAYfC1MJJPdW6bLP5rbmwKpCBMWBQ7iG51WcP8gdrtF",
  "key16": "3cLJXCgBviiu38yWZtZDJGbVVSA64kduCwnb4XLyQMSZwaN2dzPPcCfq48RMuKTLGWt3QCAbqztZdGXAFE54YcgM",
  "key17": "4Qou89pAQXPSWKT5qBqUcNuj7hhnxjPPcYt2Mfq8c5bRDMQbYfAMtu4MzNNSTDPGFcsE7zJe3djFAfmPNSQeDjF8",
  "key18": "5pMiVB31sLCZpkKRiysnUchGBiuSB1k5eSubWsyLnZDF4SHR8yn1wBzZoofAYuN5B9KGW3UMgrHG12f8TZnWaW37",
  "key19": "3WeN6eZvGqhXFqnmUJusRPmcK2RNgZZvPBZu3NptJ22sC1hsg7jsAmxvcSGEUgHmhCUz2CcZSHHrp8VoxbrvF4dT",
  "key20": "3rn6VMiXXnTzGrhFhD74A2PW3s4vQBPKSpTQnx9r5FnfkRdDyr43o4VNve4WNqCGyzqGK2VM7J2G4b3wZSPrfBNi",
  "key21": "5MZWqtDxQrXRutu5b66KRSKW3qVNiLJYZSXXmoLwyKY8HD86EgWVRFkRFWgWKdanBF7p575VqsdLbuPbcmKkzgva",
  "key22": "54fJwXtdWPywx39hbgph3BRFCFVFkqJkDrQBjtWNnx7fLws5qCwC9fmvf3GJK5FXDHP2p8khafhxDNAzJfMyrfGP",
  "key23": "2kwspPAY9vTKKM2eA2D8qCdCxAzJLiGhMxiiGJrKJjUnTCrmioHNgTC5KLEYkDpNtVHZXwATetxwmjD8kop9hgm9",
  "key24": "5emhnGULVSa7hgHvhr2fW8GEhpjnVsXPHHVgVLCeDXr1fhwRaFyb1Moij7AZ51DHwfe84wiSRxe6H7NAKNurAY9k",
  "key25": "4s5S34rrCZWzJ5SfCTDW5q3ALQLZgX9rayZqJKCgRoxbPGSJbJB7V877RNV3Wnuwdxt41QsFSg9WNkyTdStfMJ3o",
  "key26": "2H5Gfqa2NbTmp8MxsxvWM9ytr8gghMJ31UcFHanBSBmj7tkmsJQ4Hp9kAPYJdw6164iiK5UizMUqVUG4EgGhJPcE",
  "key27": "63tb9gNTBf8gsBqBf9tWK4nfXCxvS2CP1uCTATiSV4JcCDaFYiGkqmcVgz2FV7P1yP7hbsuk34Lxagg8JxCnQdrB",
  "key28": "23oYi6AEAFtKWsyCZhyfGC2J6jKTAgiVMj7q11cxmz6EvyjN1bAMRshekjHpkwmLd55FzcNqPzhRUj8A6V3zb1e8",
  "key29": "25Cg7veVcBrkVUQSU9Fd9CJf8ZEyk2WR5b7YJCZT5oMfJ1gLQs5dPFqVyEiRYXP2diph5mJZ14QsKnE4wCnhfgjj",
  "key30": "2RuHFpw886cNYvcsZw8seMRvsyheBdCCD1aNyRN4VFfAkHBgo3mH8dPQEB4BipKf1TGypqW9q3P2uvtUjNdBQS7M",
  "key31": "2rPoje4FdM874kKSP5ojFKrtM5xBASjp6bVD9j8A8VBFhyMrWiZGJFMAGNW6bTEngiLjHTBtcJ8ZTgzeuhqRPSuS",
  "key32": "45K6JA3dde498VdTNSXuDexyq4SfKNyhbZVdkvR46ZD1Fp7u9kCvJ39Wd5khBMj9LSGAoznVo4DDrDGxD4JsC8Xv",
  "key33": "2DS32USfJLYAiSxmByHJqZF1pM3ABiJxzZQTFUm7PZjT5UAneS4iykBdRdr743sknFXh3UANMCVYY13Jgp7cqCvR",
  "key34": "5JvTPYcHvjr15XR9e6FnGoyf3d3pM8raubX4ccVFVmnY5sprHtg8trmQPWnAj1k2S326536UJK8AtGwsvsAX2fum",
  "key35": "35g1GtLRNyNX1qiJBnwbxuDcG3fy6MVSo66u6Rv4ps9U2Mdx2HsdkceqLE9LcZFDAasRYVRcS81eHYcEE5gaKmnr",
  "key36": "22VxbraatvCARx3BJhSRxs69ttNvdGTYsFdvpjxZhmXnFTetdghj3kxz64XgNRCFkUfmxa3TMmEyAiYqLHAjaxx9",
  "key37": "4N3ErVtz6TyHzA5dt6QndgE36UuRPXTL5n9KVxEipYA3H5vgFL7AAMBt5TZbRXxVd4G1d2dvFdbyyG1WcwipWjhA",
  "key38": "5pJHpP7vpnyovPf2j25xeVgbESwrTKxCHhrXGc5qtbZ3dw7tQQBKqpW6hDRjZ4Jv8JfJKaHefjVfpCKhvRWfAfaF"
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
