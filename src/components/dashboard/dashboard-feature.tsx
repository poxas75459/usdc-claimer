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
    "4WiGguhCg7nuKa5BA6xr4v6ZVCveAEsia3wWraZqaACE5uorspwpFRqWXGfWqf4v2trduBPwt9e5FwW7GoFtPzoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXBGder9NUoXhobgxzKn18FMemKtLZfd8iHMy7S3fWpkCY6nqEMYnX8cSXQv2Wn5ydTPX75gMZ3Rsj86YQELWUv",
  "key1": "ar3ih5Ai6mAkau7YvzSuQxhWfUAg1BvynafuopMmonqRkNfindiMqWjSJEfKKXwK5KqEyAuhxD66kB69q2rtnuo",
  "key2": "5WaS3ZEXdw4qXDG6JxiJGtPEPpefBDavTJsFvJJaKPamNiwYthLJx1vwtw4EVqEUCtEP2bt5HTMk7RjhwU4a4cJh",
  "key3": "4GtnkFe7Qv3gcesTyvaTKbJwLX2vq5QRQUA15VPnCV1pMQWZUdg8oHkyerzhtX7DE8puK44XtyaxFgX4fSo47yMe",
  "key4": "KR3fzn5sHooHwfxB38a8ZahWfVxNRyXqoYZS2VsatgAdsW2YhSrUMsH3sGjMDVp1ZB5XjTvawi5Up1WnLg7VRdN",
  "key5": "2GPvuHvzHpc2QUFPEXcCmvbTwAtHycVcRdWDTsyuj89zrRNiPaD6xgUW4yzzy8WmzCkr66G2ekeRsDrRNy1Jxf5o",
  "key6": "2PGe66EG8H1yuo8aLbJmMufaS84PEcUEgXB6xw4keNf4WnQFx18rSYpZiFH3VbbxBrfqD33ycNf3bdP1f7nfFDgW",
  "key7": "3CC7GoY3V2zhAKkqkkfrxds9bv72n7yGPpyPAsPFYtK3PATJGRYJEVHvokVPZvrehhLczqgbkh4aEBkFygwGWG6v",
  "key8": "4QxrRCYpwfbn3RCvKkKLK88C5AJRwThj7Xwta6LaYvkRMe4KQHBVdgwqtULktpXCkop8SdNtcN8GiVbiVmpGpEBL",
  "key9": "5cuWNJu5UFBD9Efq9MTdACktwA718GYaGzgc3r23hsi6NR1k9iTa7qfKXZhXDzF8mQk29AYHGmhGrzGNgWQsBpnT",
  "key10": "4zCTSSbwC9Sb5oMHLkjiqUoMxfz2jQS5L326jERm5TzZ6dPTcaYYoqpTs7NzAeZ8j1xxhnEAW5dANuCXrENsUkwz",
  "key11": "5NR6Ng7CVsqWVw6B6sjMMZcUCuxTL2q4EqNmxhjpuvGSnrh7YVEFRdZW97ak6bGTSgwVtY2Kt2ssXDdwDHnPd9Kt",
  "key12": "3sjjx7Ctt3oiEzjHYFibKdBAeBF7GWkkrh1fzp96Hw4mX2Q4izKCHivAWuwwsjWZxRHJ3V2VtLCMxb1jHFt5YzCo",
  "key13": "3mbUf1wAg3svXFbxhno6qUTPCTwww7HFnoLZc87jZdTnXqxqkPJayeKbtDRXgmdwc6gLSUrJoHxhS2jfYrWrmX9F",
  "key14": "23Ay7NiggHvLnKL6g4836T3s6o9oUfvxQbiqPLgAeaQ34xAirRTSQzLDR61C28FxReQjgLwBfcJcPjZkEkzEprTt",
  "key15": "2oGzb5PFpKZkmvMmF1NXiHwaNnWmetHuqaGdpvWpmHhQPfiJXV2w54XJfWTV7r7fhb2VuV5bSymYEFTQHkiYPHTk",
  "key16": "JmqLsNHeb1ZAKEBpJWRV852ZCyNVrwkg1xyJZtrPA1BcyMg2D33TxevFrcijNqn6fLJdv6Qhow622TU5GfaShW8",
  "key17": "4BNR5JLWBhZ869auimrbdVLX2iWuKEXbULekEdGmcYBRDmgAzjD55BNc62xrSemWazdxAtCajQHrmLN8KhtvcQuK",
  "key18": "2w9fDMh9XYnhmwn172uxX3A7mdf5QPAC5YfHtwMopLNJRTmZ4yyTiDMFuWBh7ZnqXRg1mtRFrMaVDpUvRVUnKcmJ",
  "key19": "3iCPd7GNbMdVg5aZvYTD58qkkvx9mvQwuyrKu1x2ywQQ69Ae8fgRD1BNDbZqRtuoQR468TieoFyvEXPvs1pncKRx",
  "key20": "3e7AsY13tjfZmVD2SYnCFWarViouSADLcLF64FuFKG538zDgTADmgRhkLTvRqev2bwAtL8yxFehfXgJCfT1oJjwh",
  "key21": "4UPavNRrZ3TaYsN3fCzGc922sSBf2gbzMStuRjdC1iEpJRf5A39Au4726toPFuxEEtyxqMVyHG41U26CQZkqRsmT",
  "key22": "uj2MaTVhkPo8aRQf3RmcYgDhxywjbpTA9g8qFQxLaVJFhxwbzsUjMGpPqSY3nQygbAuQ4yssYTwXTWFsUHWyd9N",
  "key23": "5GPuQJkaAKm6mrWdodnQqsbfYBGy8rVZUWmh7SD32aTtTMvxHTkeYhjJqmvRWyBNPKEaNo6kT29uHQqCEY5ebBNc",
  "key24": "2j8z6UL12FGfPpnvhihBWP8cLgRE37hbEFxSQ4qLhXGm1iUJPEntYAqEkt3EHC393Wrj3EqCDThC9rd9vptzdG7j",
  "key25": "3Z3zih3d79rLJrpkr9ffm7SCgRCSVY5UC1JoVWRV176Koc7Thm4KeVM5Zuff87tDbM2HnGNTKMVcB4qY4Q6Zddmb",
  "key26": "c9vrDZWdZyHREMknrSRTqqmcng49Eo7wUFRGw5uZQ9mRPbbQ2ehvKje6fzRvc4Mrd1oFAsesUrWUs43rjW51US8",
  "key27": "2BVeyRJekwqoFJpriyQoFjkjix5YbWqwackSP49p4mEcB8HtedrZZu6rk66HszR558VxtqYd7UiECYsTMSDC45LE",
  "key28": "4WREcbsDLGvFxLHRzNFN6uT72RWgLRbYRHKeyWVD5pNNdKTQMu6SHxJ3KdfmfwmRwcRN4qbbcjU8SFdj8GrBvMJU",
  "key29": "sGnTv8EU2tJSGjxyj2pzQTePocW57S6dubQz8qiU6MUgjWec886Jv6uB2LTtFPqcRMkvBDSbwzeZmoGjVXDBmRo",
  "key30": "43TnrkdBW8c1CKpgfuwACuDR4MjuUfdvxqnSFGSjNAzK5FwnCoXbUSbsGSv47yYKW9atpTSkQsrTCKpMLWqzS7KY",
  "key31": "4oTMZt29rvRa33AvnwgxZtKuvUBdHuKwRqvDrDTRozRJJ44CdttdwEPN4TWcrQq1CRwXYVbGPERnQtvB3UkEKrc2",
  "key32": "5DC7TEmmUB9bEFMZhN8SFPmpamZjFE6EVZh5eiXA2fr15NVubMsgjaFLxZ2gVX88RSTVYrTpkifSzUeM9vauVrc7",
  "key33": "2PjDs4GZC4nV8wxxtZdc114H9a37DWjBSNdieFdsTG5cwdDYj1MZs4J2mk7WFpii1Ng1kC1Z2rceW8Eai9GjDKbH",
  "key34": "5T63RXPapyCexn1CSe23uBNJBwdNYvMe7kXdUrW2dNPVadvKHwGzL45TVb4KuVfrVJhHKPqZQr9vhLtCtfHPo6cW",
  "key35": "5yPPhm5XhMc1a29eHim7dBapFRpQQFwPExYb1EwNRrT8rajVtwxk1EQx9PQoJ7QqJ9frfpvToGptzx3oE8C6syFZ",
  "key36": "67RZgDWbuiytYzJtnXuKiy2iwBj94EHGYxNmwtRWggTkefqZTUBDpFbFQ7KoYyaTTPC4pTopdsEoes8tfwwCd2KE",
  "key37": "nxjxDh6uUJpBrkRF4hStiPa5dZxvLAmkKW2pX11kcYqLmu41qC3QaAAwqEkvDqd1BUjogDDGmuC1J7wxMbeuKfi"
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
