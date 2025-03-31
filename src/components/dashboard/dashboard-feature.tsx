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
    "5jWgUg6dxs85aMDUSa64brncYbqfxSoA6kU6FtU78zeLch3xE7UNcEaABTdB6CSPRTS372xfP4QVvSBSJCwpgTCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmkAYUYAbLSDEWjGnz3sxmR2vULd26hBfegzyvZaRV2pwr9fj1oHGtHERU7DaQ26hKS2wviLbZwj7K12hj696zW",
  "key1": "gh92iMmhoTagAqvtVgDCB3PPUhx2btb5FhTxL4MTVMBNyDAhk9QEpsjGcXecAzJnLNHDRZ9bCu48A3KuRYrSWiL",
  "key2": "4oseU7Xy3ARjSEev8W2Dcxhid1yvgWMwonypTxKaitfHtttDQ5H1n5ZTsr5vhEStXAw41kt7oPrUrgK6be9Kb4F4",
  "key3": "4euX3DZvpb3zdDDWj8gtYyAVTvonzLU7E56WTBnuej3MtNiUJyRVbghuMPAsMkvBiMKLU9UUBJDhRuXH1R2r8NHE",
  "key4": "5Ec1uGVJ5GnYXmfN61TdBBsQiTEpBCPfeBiU4spdngYmLxD6kauAHjz8aqL97HsbcNwv5aPhqvMLHdCAXM3thym5",
  "key5": "24rjWDY8jgYAUqfn2TAjYUyS5h84zXbkNMb9kP5NuQdpZL1mFBAWWVJ58NtCW4ASioqexpy7Y6qYNv6oqdPSQGi3",
  "key6": "21Te4STYUJNR7vHZmcu39RFhVTGp8sdVwjKSij6JReDnJsraRoWVi2Xnwwdger1nxV2jz4bPB7TcraN3HNCR3kLL",
  "key7": "32GApHAuNhFLmwijYwojPRN98q7iZfaJPVE7TRaP1pEahkf8BZhgKJrhMBqWn543UzqKs6wjJbdvh3Fh1mkEwtFW",
  "key8": "35KyZwyXzXvEf12khdZ84P2QScfrR9ac9V5gqPW8ENPrWZWND5cjnzHHSdADUzBXFeUbHov25S5g2KeHUNmcEkmU",
  "key9": "54svHLGBwk48LMQei5pB2DwWByHxyZeZj9MB1ZCDV6Pfv2joZh1w9zotynyQTPVUPGPte1JRndC4n3wCZKUEwsjW",
  "key10": "3WuEat7AhPpzgj2eQaYo6edLb1WxneKtLDoES2cjmAoiZHGJPTT7J7uhoKJSbou6wrprMuyitmaJA7Lts3db7KKj",
  "key11": "46i8nFxrn3R6R71SfypBXqfm9xzsaEQXa9Yf7fjMSnUxDSJBVLJ3guGtXA4MJGyCrLtwS6t81qthxGN3qX17mtek",
  "key12": "2ymaq8pUeyVbdiUfAp6KrVfb8vLjEPDAP6YVFMGPrPSwTDEvYvMq671zv4KRLKrraAZdP42yGi57k3AFSR5n7s95",
  "key13": "2U6DqtmwzK7timbkQYbzJanKEyyrRUwAq8S4gVbj7tmkYptkZHrZrLWSRVqGPF2arUrEbM16ovK2A5ZRCqDEi5ot",
  "key14": "pmAavhpvgEXnkjRmCbMEymqgwmpCmy7F7MkDvhQS6EAaShk4hBSntbShBeiWdU45ysNCgaBC8BDMXxoU8UUTHuS",
  "key15": "3puHGF1ycwFhj5SqXiyuaEBqfoaD8rkyaRSBfux8DbPp4285FDpPaJ3wTFGwz4ZovcyQ2CzaxtGkc8rWzBeJmCbZ",
  "key16": "5tKf9t6PYket9xEF5txXBfLNr1ZVqAymDbaK7oZ1DY4XSmqbSXCxVkJ5Nz5ApF5kwNxxW672BkTtdsCEGeaKpvm2",
  "key17": "3CQePb3jKdNFYDWHj5s22YugXp3mGPkPrpzDqS8zVxV8rpn4FxAEzkevjBnF84eMsCbFz2XpDotWYcx31iieTHCX",
  "key18": "2VBUZcrAcYCoJbuv6zecaEKp726EdtYS63cmn92ZoX3fWwLue1pHcxGKX7X12MyAdFGnA7Sr4Ca8DHtEzQK4MuAs",
  "key19": "24PwYNg6hoGd8Ge2nWCKwXt5uackCUbuy7EdzXfGYiQsNywAXdD1XfGYy1DdvpKKvGQq6GNqSeghdzkivyzqYCWu",
  "key20": "2kwsaczDt4QUmPK8BD9CkvwZEAJWhoFhkG1hZzSXh3zV2tw6TvoQpCoBetGbAog811SW1Wc5KpBDD7dqoweKCrmL",
  "key21": "2sjyboAqz7pK8g24qMEgrs6mfyGFJw7qvfCGoALg8mt9eA7fUSj5dxtZ1ckN6F8uPypUjcJmDzKB66cgmEMubEDR",
  "key22": "4Uxi8se9y4PA5XDncACjQJrUSBEjqrRY4b3Uprf96seMsZ6PUNw7H6FdWmBUftz3auoqZn5w6mmpBfyiYSKKj2me",
  "key23": "4h7foAwFsKGcUi1BU2iKTyLeQKdYfksKkYkc77PCtX94nypAew1m1Y6mkcfbhvbZEpZd5f7jMqAuxn3iffhqkSx7",
  "key24": "2BFQzJfPV5P89y6ak3Vdw9xsfp17RF4bh2wwny9i4Hg3o1dNtXvRtniEj8E9eHVa9HzDuSZg89uoeRkKSVUuAsbk",
  "key25": "5zKfj9feAsFH2FanKBdzaDQGweQnhQ6P5VuGHgi2PKA3MVRjWEa81WrS2BA9BowJqrttxrRdmoXKbLPVFfz6EPaf",
  "key26": "5osgVahfjcyKJHoF9UD5bser3ka11mUWEkAPmGsqDBmqG44QQ5E83kkYLET64VRJyLd3wg6PEYjBAvepXMFs2sPZ",
  "key27": "2YcBdrnuMbK2N5s9jCCWDnPXHA7kLdtgjk56cxa9omgg1ywafieSEQPeQUCv1sDEoqzbMWEgUbkmBsiBPYM2DeRS",
  "key28": "4Tem86uHukTH6RmCVUpU2HkqoRTGbJzqsqF6eVPaFBADjKFAZwo2j942h2KWA2pGQiLnuRmWgCyX3hQKV4a84i8S",
  "key29": "2yhFBJDLHVuU8ybTb8Q9NBrGiHwYV7yyriZeRRSVcYCTrE2E1ZPVXauyMZixwEy8xKASZfhz2NTbJUqcTTK8b8fo",
  "key30": "5GzHtdR7iefCzdfwi6bDCjQCoZivMBUKoDVTviUVH5SoHL9WcTx5oigAtYwuEtiGw34Nfb4XoTkzqEEm9J5VoqGK",
  "key31": "5eZdgaYQCjj3X76Z3Pj7MjdUsMBL7uxj2pNLJZx7rfDwBuHWPjRoc5RgrUjcejMgGn9AgEkhjpciCeWaGkLCbzhh",
  "key32": "3YywoJ7afRRrxdw2qr76PaYZpw7JsELxY14WFPGtDwALmRgDsneemXTVH7DrahpN1jTpJtTZZXJo7YJozy8xNKZY",
  "key33": "hbU6CdSgUXdazN2j3ynk2hXHtj85o7t2DQKUAXkAEhbAMh2rj9U3ZLknS1GvM6dsG1ixcoQUKQWvtQnYSvvf8kD",
  "key34": "5G7wmzK1HFBuVDrEeM1Pdg1yeGA7iCjCZQWv75Q13UYTM5jDD73DDzysQPidC2HXGnazid3H2wgaehAD12MPFnNJ",
  "key35": "2nQTuMitqW19iSKsrr5ZRaBdWoD7FBPXcoqdtSAMimLo83C2sd3jkErLHa3wzWT6mGRRvsS3QhS6CXhQj5BHw1zg",
  "key36": "46NKrTsmmVjKX5mQN8myukYXnVruZ1AZeVpm8h47sb1EQtwwuEQjvkS6qctTeGdg8bMbPYpAZfehFeDS3Zvwnr5R",
  "key37": "4QrGufMgyZqbWWQht59GPbNJ2j7ctNUddxqiSsZcwmCwV7hvtshVmqUqD6X7Ttj9DZcNGAYJm4aVhGifW1NTLKm8",
  "key38": "2kUqLm6zTDEnhAtyuBATnVqqadUpGqsWVcfkqg6FDJinrPfQJ24dSKu1v81dN5td5Ezb7AvsgMmVFx8ewn3zFTuA",
  "key39": "q7sxj7aYMJx2sSayyofr2tcBeq7UtbKyFNTsi2NoxmQMQZo7ydpRvbhSmP3qVg36jUa1msACPDbWhVYz1cJhqpY"
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
