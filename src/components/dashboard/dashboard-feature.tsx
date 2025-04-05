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
    "3Ww2kDmp4jbzYxWCrJmr8ViXGR9H2KHVcsXnKXPScZSdVM6e87g8s4kr3mpQcGwpLMV3qoutWnPtRVpmwFBPvJ3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXZ5aS2UShxxsyV1YaSxG4FtikKShGKFKBsioBUSWbshG4v9h1Lj2fEE27YG17eWoYJnMMquRYBPj3UwWKLNuoD",
  "key1": "2gQkxngdr3NHbjDGhNLz25T3cqmFAxiXC6AscQBauTVzhu7pDPyUp9EiR8zLkyNqXHsTRa1cFmNpZyA3JZiwGNCE",
  "key2": "3c9bQgKe9WCKBK7vw66R4Ys3rMQMC458SooPp5LgWt8erwP3ogBXvqjcKzmi9K1oe3EpZRXGbnyAeXgJ5u8E3Esy",
  "key3": "3mpefvYZ7yxgAvN4hDH7mLuukSyfAJb2ZvFDu5zyuAtdfQznGGc15SrEGjQs1neBdBQMha19v8AaK416wRrpMbWe",
  "key4": "2krJCvQ7hADvEiaJHcpAQSrACXmXojQ7nwZNBqDKhecFvQS897ZfjWMpsh1xkQYxXDBnYMk4wah5enq5QXuhU866",
  "key5": "2f1SQfn2KkPHLQeqykQ51PVUwgRmFHs3VcoawgN8YYHm9KNYJBCaTthrtqJfWXJufHVQrY4BwdaBRQYU898MXfU8",
  "key6": "3gy9Wb7vkYH81vCBnFd5SHqxd5HpSNbpEp5SrNszcSUZQUjN2iuzy8SeLbjS6UpdMsiryFMQ5mQMyJCRvrbmSAp6",
  "key7": "5v2ejgPNdEJgzUpSrKJtzdphjXLPnh2Hk4W15NaiuGRxbfjZoAF5ZmcYsoPSy82MhBRcU3HdVfxz1dXKSHY1rT5v",
  "key8": "2krM25b8EfNHfSX8HcDmfufRgiWW2ccnsiM36uCqQVudc6uKBEyJ22JfcjQXHGk2xUtsSXhjwS46GmaxE1UdsJiz",
  "key9": "2WmLE8TMCnV8hXEfusVDqGnyhdMF84e4TRMDgwyy2venPe1b7tjNvwmKqPDv6zL3nz4LEWfZXFCdLcda38ws9w3M",
  "key10": "2H8mtiFd59Qsn8n8BetjndAe5GjAQvDySHjEDE4Rvss7fPKReGD9iW5vCDUqTVPyVCP33SgAVoiUout6hihrffJ5",
  "key11": "3DtdHbyWfWmQhGrn8yDBH8bY4Jwyu3pAzw3GnLn79SgBsjDxiyndjmsqZsvkRD82e86DZRUiJEdDAk9QatZ21Dg7",
  "key12": "3qfoXoH8G37LrQ9A8pt183arJPVMrsVSoNbZR5QHoyr6GUYdprNj8TembrBhYjeHBoMbcKx554Cp2LvYTCkJGQHc",
  "key13": "44maE6wd9vWuoXHoUr2eEiBvHfjkbch26BtC8FV6Fk4QmzMHGxPsfr16b3jiatcaSPRSwrG6dzfgxeWF1J3p6PfY",
  "key14": "56D7LsAY3BLuTfpWyFgUt4A1WGh7nhtteMitiTkLagK1ksHQzqq81PdU9GVRGtrRXhiAHVmi1UrjZ8FiPHbfLgra",
  "key15": "4JWH5i6jkUGmvGy6hA4aHUXJdnGtpY5bWn9G4cWpNgCwqgpugF8C52LB3ACE47f6xFLhoEtiHGTBZAdgi2RH4Mch",
  "key16": "4qadKtfBCVoDVaJjeTveUVrc818qyVWf17JmNfey2taHMhvEGVnDFDYJWed5qGEUDFXvYdphV6F3g9rSWKZFi2SN",
  "key17": "6v2PoMRJ4z4PL9L4mDfM5Nm1AQ3BTsPveGw8NphBMZvPBxaDTsQNRK4kvBuneWYo8mC8AMYWe8xgUBSk7hQi67c",
  "key18": "5sKDXjQf6cREDwqHmP9f93cjtukjgqPUb3CK3H1cydE5xqkeUa3WQa6S23JW1Dv7tJJWEVTb18x1UHcbGTJuDMS2",
  "key19": "5kXvJZGGjSALCXrF8YBcjHg4j5bWjRE5kGrqdJMJkB5kY8P33H2Zwo9kxVWrE9TPmFZLkFuCmBwT4aMh6FNdCQQj",
  "key20": "2ArXydQ4B59C2FppWSwcCG1UbfrV2tmEXTXXuNP5NHXFmKR9me6WgHLjUxnMat5L918r9K64aqcctSBt7bwfxfAA",
  "key21": "46GzH6DwT8jx4prvp9i5J9ET7QhqFeoBZB7jfMwbHrZvoyUiUsRmzK1LrJq7ZENYCnK59zhcYY9h8gChavaUeDwy",
  "key22": "5wXotbW5gR2CzB6QuLPa2gdhuG5t7XsvSWLeSHrbNZJbaQU8ADw9TGWV4TxSg6nxWzceuw6JeXrLs6iw8hBHarko",
  "key23": "2ZqTayhANym6vid8SN7MzmmpBKUU1ML51dgVdX7A2p8nmbTZ6xzBcA7roAjrYiCATBmdGNwoxZHzv485f2H1G8AB",
  "key24": "5Q9kmh3VypvRYtXKpBXbzbW3h1nVdUDgLG2F9vmcHiNHUH94336prWzr3kWjuVgw1UqvmmjFJQWDB3hFcs6h4TVg",
  "key25": "5h6rqJ18FTt2UKdybyw11cP3Ag35A3jZVaUBhLbuoxUGCyF923xNGvtAzHVrLvbuZP3rUNascCouVLdfnN3QiTBJ",
  "key26": "3Pp2t3vnehfjbjnb94LwSaP8L4VTosNCRHiexxJMpMM955gjLdqJpuq2QDASb7q269jN7FR4nYyXbHWe1U2dSpcS",
  "key27": "4XDzxpkAaSiV3dtBDKW77WoWqCPi2rXFSBHnEZrMCvzvbL6DacQ131u1irbPEMR2UAXVCwh1DLkvpidwJo5XGZNt",
  "key28": "4KKKhWZGd5jyy8Az3jRMftAAo1h1oi8Xh91iPMMo3sUAwVfQRf4XoHBZRyiS6nf5b9dXEgjgX7y4s9qCVnoVq549",
  "key29": "2Pvm3RNnH4PNC9ATF3CkeGXurEy6UK3c5WKNqCeCPkkDdDSDB9PnPszVwuiz8vT7JTbYxVbFzZxubsGrChneFSXu",
  "key30": "2nEY9uf8FFb51MfaZeq2fYSKbvBFgvZFLAPiQFEb1SA8E75hijhF1ZZUmHaLD1pLz7eVqXHZKksh1xkd7uGnPLkU",
  "key31": "45czbgyuKjxR8At9D91YqpL4LD4fbxAFcYZhdqQ1sdWgJxwDL7wuQfjzf9n9h6AKZhkdxCiLe6A9ABQcFehj9cok",
  "key32": "53oWGZUJM4kNsz56Fc5TTwisB5G7dsnq6rPy2RekyRDBzBin82bwJHS17GeTTT5ozuc7CiWwDUiywBSsVXAf1sUx",
  "key33": "484uRTBVnqYbgFn9sQzq78T8z2cJBhzxFmrZL4vEaF88eR1e2XB1gzGmLFGug2PR24JiojV5xc1xLuvZF9jKZq9u",
  "key34": "4711VMrMhgcU4NLW9dihtzBPg9bABjE8F38DiPGeXyZb7Ewspx3vBVxp45DLhjqKeF3CLGUxvuDrQQNKR2jegy63",
  "key35": "5vtLAWdEDyNBuhFKQFaS5vpeoLkhFmTYKyPnehkoApaMjjZUwmcF69CzmNG5WDz3igE72AhBipsu91Vx4PGf2yPH",
  "key36": "2dR76ZAHsG1VJ9F3YYN44XzWguM5VCbe1ruhpHmMuF9txm2CF2VUazx5jXkRd7K6bRdSNZcptLoJsTiEdKPJ27YF",
  "key37": "3y3gLjFzWqMxahgprZqQ83Yk4v8jicTrLJFPwsw88UvNLT9EhT2skCmhBxY3WGHVDroArKP4STC6PUXhPmE3rcGN",
  "key38": "3eEwzvrjg3Sn66CgLn5JxXPwWXn9jkSLXMXVWyMjQhj6hyNBQq5cx78iEaj7bC2nQrcvmujKKz3WSJxtmEwEzjZ3",
  "key39": "29GeWEu5wQrPeWPEP9kdCMRs1KcGspcic7utPAECvgctk5SieBGPCPDwtHHtMUWxeRsEThXa2o2x5RCM2PbubbMF",
  "key40": "3BmbUTvJYedTcERXVWZQmbAE746FFJ8r5mMW38c4qwso4SWKFn9edgirkAmZeVtA4A8imQU69KGRnSXPPPeZQPjF",
  "key41": "2KH4DNQgKtPsff7T74retYtxAYExUQi3UhZTDMRkQRTPDV1ap8oHPEyN6j4923cG2UAc2erEm4kLsAtv8T3itwKz",
  "key42": "2TA8dd7A1vtbPpip9jwrmZxUUQaC2tpozvLjsQBkH2i86p4fQ158wWj7Ks5HLtHdNJGWx8Zv3w3m9fkwwi4UphQc",
  "key43": "5B8tn5wWxNxk2xkkCcsiTCN1yaLEbYnZAbHwiz6oMqAQAX9TQF6jK5npGyEHG4Tc6cEZw2FGaUsX74UVsekTVQ7E",
  "key44": "2ZjtbA4qGBSnSYwopMXAbbngj1MxyNiDPp5NJqhmWnntWDNy638c2Q66qYKH4NKFJX6GpaoanWgL4wxuZ7j2pUhv"
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
