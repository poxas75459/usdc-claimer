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
    "3TAfUd1ABumqmTvo3erxcx4DmnmUg1Hh7CFzpRmNNdRDBmBK7eAmmGU6fM3DC1MnsvHgFBPUMnHCCVseMipuzFuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJMAexc4pWCVQTSsVwFwPuNkhasQejUb24BnsC37mLWatLRxc3wL1Drao5CUgoN9N6UmFDHYUB8nu594qp6gkMe",
  "key1": "2tek47VvSd9GYw53hYFgv1vbyi46Yfus82LtifJL19ErWWBDFSp7Rciqy3ERBpCFHYDZqzTyTvNBBdcfyfQr8ujW",
  "key2": "4hFAwyHkPvgEoiti9NNC1M8ysCKm9F97bT9EcmjZwBqy1Upd8e66QPQjrpEtr1zDZ5HwN5DPCfNiSG8MGcPkyYBS",
  "key3": "5aGiZWRmfKtic4LJARPkBZBxBzyNMdF12C6ABuuwrvSsE6yTpLf3ptp6RrdPoQwijomgycoknrEGwEC2Ks9fTWt1",
  "key4": "4kn12j8PvursgcvGyUryUcAopvMBtGPBE74N24StXKi9G4uVVLdXVeCJocgi2s9TbSaiP7dRdPCCQi72dqdkpciL",
  "key5": "2ZvVzxvf4boeYiqtE1TnAV8KjDfDbWEVfUMa43gAaD7BYJFYUvvyHrMSzh1wYNnfDfsBNEqQmCZ9dBhEEPDpoMkW",
  "key6": "4h6asSawjUrEwap1XT7BQqFgCVpYUfhhYW3gv812oazza4JqtRizSMRoJn4mc6yJA4jjVQ1F77TMmheBf1uSao7L",
  "key7": "2Rpq62Jvo1hkZoQ9CFf6PwZV32yXqw5iHCcvJ7BPrtPKgxU9WNofuMNaZjcDJ72mJY1BKjb3Aimcf3hyquW6jYca",
  "key8": "etwbLqbC8PgmQgafecHe9TrE685EWMsRRCP6QoWUHmyVEaMn1gYxEAPoBbh9vTRv9drFJN5SSAsJ87QnNM5awRb",
  "key9": "6r39su2kUi1uhbiKccyGRRY7sHY8b9ynuGEkRUQEGMQBCrguAhxf5bf4DhenhnpUzQL6z8D21xTMLZ2FCQ4d3uA",
  "key10": "3n9WWAyoPa9y8rEmN6C9gG5CWrEx8CeUu54nQZ2N1MNLqNn3a9hsFyUNKZWuYqT4gc2iJGo8t9qw7osD6rpy7gyA",
  "key11": "3boyrmaKjCxJmGdnTfWBhxT7TABTuonnqkJ8wkc6L9zNJtszhxv1CuaEtwa47HEve8dmx2EDSSbhuiL5rodnd2xa",
  "key12": "553UB8Z6X4BrhfmGN8fhScJ3W3QQ1CGfnj8Z5cLgaBZJpEy9ttzLczfAkL4xjtbu21Xk2Befywrm7T53KMiwNRkr",
  "key13": "5YtQYpgQTMVV9LkRzHfe3vVUieUgKUQ12RYuzY3qr1nA8xgryKgA6iRcxk23fddmk42tNG8u1ZGthq4QVm53Lmg9",
  "key14": "yzpVGjegbfi1Ydas9RrSBg61s59RFAoRkkFgTJ4pknqvDRbCKL8SsvKCTJLFeNcyrv77B9q683qFNc2XzrrfhiK",
  "key15": "3tguTAKUyac9F8oDgPrYuRXSa7WWY4X2idPJ95MvEGaWWUaeLyHQaRZtpAxzTsPTvkc3kAH5vGHacDauzU3CHReB",
  "key16": "2j3sbxsF9kCmnm4ZY9NfjgJoMZNEnHtZMSHYzvtuM1CM8SCioaQcfJurySYkLkPYF7Ytp3TvUcXfv5uGXL2MmJis",
  "key17": "672AJvHd4ymeirbbw6qXr8epc3D54mQod9xydkkotPi2QcGsFYF1TTSTwSrwhmwCSyS4d6pwFQr87phoLx7oumti",
  "key18": "DKtQLBr7bGuvFHJ6sjEBTDYPQb2iW83dD1vDGa2gDWe8k29evWxPDRu3Z7af8PD7kxnYuUQZeFvCoUCuW8G26jb",
  "key19": "xHBZ6wEKVmVed8CedDfaeC4mKEfjKkqbaFzT4wNpwprFhf9xNSerH7zcJQzwi1R4bQaYJmMUrTN3vUs4pvYCKEy",
  "key20": "2H1PTa6yafzp6G92enKEhMNvhmiUTQE1SEKzEyb9YiY8t77fGMRcjNDFuGT9UEmWjxBQRsDBTpkLqEfu6gtVxSsi",
  "key21": "46QLBUK7ndZMJjFpzSuadGtk2EufCZL1kLQUceZBYKzWuUpfmj8bJ2wYNDtWFrqtohSJHvXyAnvHpdiSxHu6qYyT",
  "key22": "52VNu12xL4ThwQ7zvx3kqXzcrucpsH4WCThXfU86FyUXvxzXdrrddkY9K4mRcrxtpPz5rNoQGBkQHApYUFBSLgjo",
  "key23": "3pehyqR74iaY1xSt5nLpD93r9M42PZVEDdw5qFVRwJ8t1nYnZrUx7iEURzmrUgn6g2jrGrtmktoeFfEP9rZsRUXB",
  "key24": "ETeQbbrXndja5JEMwAwApHeFerKGB6et7XQJWJNe1b28rBzxYiJVMmfCmjStFYTngpu5cgaWtnDic4BXPhQxJEu",
  "key25": "26WnNudgvPaEAc51FUjTjHZZ3Mg17E5RrEqvNcDFs1dRS1mZRBWF8ceSwCBrdJiCP9fix6SppCohQQHv4MbN6zgE",
  "key26": "5fHGTSgz9DwXFWvaNY71GALtcn1y3ftocw5dggA8qfk22oQr4BtgW1HGVG79crwZW2e1rPd9bRpKiHQScExge2z8",
  "key27": "3L2iJMiZP8gseV7RYW3oQst6nhyWU9NTADWpHd5gDe1MZ3xhUv2bFqWxqhpDzzvw8jEBp37KW5NJquaHa4LJHZqv",
  "key28": "3L5vJzbhpkekKUKoLZjvJZnmhg2vRKtX9FSsSyytwRFCYRUweQGwrRWP4wScCEzsz8sXv6zhgSy3Fb8cvNRahj4L",
  "key29": "34n6HdkCA6aV889NaHbSYBDdowuriQxFtSjUc2FmpUBzrXoMNy62psSPNvNyieawA5nvoYdoAhcPDFy66AqCXbvh",
  "key30": "4TQ24J4RJVcAkcGYUmUNxhR1YJ7ce7S3mX4WTExXpcspex5KccmyXTX49GppqKusN2Qa6vmDspeL63A2wmmuxrwZ",
  "key31": "5LMonLxJxgh2EP1X84QQ6yVG2caRfbAvkGrBtRppmKe6kW9vMtRH3L5TSZPcWPmSkZrbcaqpjfxSFuq1uXj5rigQ",
  "key32": "2JtDHYX3RUbGGa7Ma84oDds2byAk5fREF6a93VcaWPWsPgFfsuakB2Wx9dffXNKGXwv4VDwYEbJMfEZtPbseB2rs"
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
