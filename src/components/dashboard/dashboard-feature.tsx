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
    "5KS3v4Fcf3dn7LKDUvXU43i8Pfiq2NRCFKd2A3PDmMczF5tGiokSiti2CbuBmJ6qripY3cJyZtaefU1hAWHC7EbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dko67zeoTLsXYQYoT7yFdbw5vRyGyeDWw8tAvbh31bbkcVpah7UGckFTaN485j85RSG7fjAmvjAqEdYkMSreL8E",
  "key1": "1tnKaxPfU9JwmQgqDRBXSuYftRVLdsvDtdMs314sLn3zeHLjJVdGsMWCkq7g56H4kfUV46Y1TcTyu2n1y1qdG9d",
  "key2": "23BQhV2Z6BieaJs1dBgDFjRcRQ5qpNg2XDGPgP5f4drvqQGeXo5JBdAmzFUfsgb6LhVajiJPAzKjWr7gdtyEZJjn",
  "key3": "3Jo6cBbYW65RrC5SXE9S195BDNHkcKmqH1NaxP1o86wJB2Bfdre9GRuiPp17EtwUZis4yXKkYPvcmnhne1iqppHt",
  "key4": "2ZuoCH6BxfCYNXiqsEWFr8mhq85DmKu1Gs9FYF9zrrzAacd1GFteBcsnQnBU9Pw3or4jvHUNt8Xrk5kZ37R147mg",
  "key5": "5mzXWq2W7rsKm7iHMqSaQF3getLtiCc1oUxg92dH8ZCg1FQffXLDKZJWWZcSvNwAW9b4Pt2y6JFuMRkJYoEPEivx",
  "key6": "3uJvFdGxFJrugG83LkLkhPkyc2Q18GkMF4MVQYwNEQUd77Zza59K4Hx9FJHXbvqZE9j7oF9WUR3KbKJg84bmCSbo",
  "key7": "3kNvwyqY5TJ7nYBGaAAw52UGGtq6gTe3vZ3dKz6vw2gapxvPQU4H9WfKrK2puQRNdMtVRrVvK5G13sd1eBu52EDm",
  "key8": "AbYrAL4MR7rhLkzPwG9FwHnwQt5RSbpTn8X6bNKKmYV9Dr9Uq1nNvNQxVaftrtfbEtM1tdj1MPZkycj2bWewxm8",
  "key9": "2EJE2RbQ8o35hPignYRKBx8fsZLQobSuo2Xaxf6yLyJzrjgwbq7jsApQpUX964LpMqht66oGxec8p88U9nZzSzFJ",
  "key10": "GQtsbUrat5LDDJQJCN55MMYwyy9BsVFRNuvH1UzTUzaZ75GqBDmewNpTao2Ww7zFFhTVb5n8pysFmH39VnHjWqs",
  "key11": "4AP4TtVvA8Fq7DyBkMainsvkcF7gMHT9XoR3Bav2EbuSpEk4FL7QvYDXeF6Led5ZibjkfoVeqHgSVVDt87obNmL1",
  "key12": "2huJwp5sm7gEhvDWLMqLtz3sG529VV6w1mNG4LzLYCq2AKPj6EdVvtYzG1Eba9vs4eVUiATv2zeCaZCVC162xinY",
  "key13": "4VgDX4puKLEnAyYf5iuXK9m2egP7UP8tfBif1JWvP9YoM43Gi1yrhG2GNwos9iLUy45jWN74UnpWJpw4bK6kZJCc",
  "key14": "4M354kYpnYrqMSXbFzzP1NCYteXS6dcmNHDh9XzqPnG5FuJuXPgT9aGR5maawXySd3388ukzEJeAFZQtmJT1Wxzi",
  "key15": "jm6bfAhSdpRhVfQo6F62EP2Usueka85so12fGurDG8ghBN517z1LsirHGnYVGjJXav3Gni3dPNQ8WXiXjoopVSC",
  "key16": "63wAzPoFyPp2ykcVfKAvW4ZwdKmWqBzAoS7FJkyGJMk7yQbqFvXRRmQZoCVoCBWUewEQRTWGXNpYv7G1b765bdHq",
  "key17": "3rzRu19JCEeS1GL3rcYYJR4mT4DVe3vDudiRnEfYfyrdpLhzgKTp3VpQw7MnpvVnRVc2uRff6wVs3kGzF4f23a8V",
  "key18": "5Msgk3VH6ALMXrE2KusTZmnWFm6maDya4AeL3aEQ8ctq2yVRN65uKgEsPqFmviVTuNKyS49e3cpEinVjTqiFHNiW",
  "key19": "5p7pS2S3DS1JWKjvCNtgojYZrJrsoxSJb3qPCCscgbbAFhnjsAktaibG9Ahb5SgLojpH2tLkCHLY9Ty1gMCyCfLD",
  "key20": "3qCUQdQeGaodxjUm1aUzQiddKfDmea9acwdjCWmhFYHX5LzyqMgHfLxB31qsgd7UdgTTAvmymFabnEdPzdXxJt3v",
  "key21": "4fK2ENhAczKE6D8FYwcBD2imogd6eHM6RNTfNfELc6sCMdHcUDB4pEbf5LYmrNc3PqoBDZmp6qixPERzzCCgrpTz",
  "key22": "5RsXV1RH1qWsq4uBv7zYqDrhYTLnJsyJNdTbpYrDV6aViWaiJh5PM7dBjyWFSFW6KGmnryS2hkGDn61U1PSgCid1",
  "key23": "2ezgxhzgnZMcPd4MUHBghX3UtmHXUb5XgRVyCSPJafquSwB53epgVmxQVWLZa43Hwn5fK5QdAhajqfjBtv3Yn6VZ",
  "key24": "59eT6GZy5AFyaBgatrBaHEJAPRBZxmjtDPoe6ki2Tbd2hvvj2pxTJMZHVycSgfXfHcusKkAL2EwYc81CAUgkT1r4",
  "key25": "2GtWbw1vi86y5EUL7RYY9APFv3G5T3Y3TLNKApGG2bahGtf1YuThDw3Yte9eQ9yhD4QizKf7u5zceCtZwsoS4gcF",
  "key26": "8g16TxtHY9tZyD1EeWW9s8j2VN4y9AcXAegbsDj7i28u2KZdp9gG1LsqoH5NLFXRx33AYF1PfYqJXCtr6g8fhc9",
  "key27": "3Rn14SfT7QfWB1h7aJduiYbtMxhT6jJgjn4TJnWmd4sWHqLD59V2p2qfEhGqyxmwRzaSKg34x46jTShDXFrKzY8z",
  "key28": "xsNgnhuS6kAwe9FEShqNbeoNyeN1rsFLwx9P1D3sQi2ytMMF8RezN9yNu7aYVKAReG8EG982o4oMoWB7wX2wBMF",
  "key29": "4xXcFMnrtvx5o5vd2fUzYXhFMUhKQm148Erj96FfNbVkt74rThbc1uWiUng9XUp9AXAnpmkucwAmEUC7YD2ArDMT",
  "key30": "61oScn1dLbPkeYERWW82BguH3qmL2dBUQDa6tSeGnJJ4SPQ2vCW5TM9Upn6Xkr2kM9Sf27WDTuQYq3U96gCwrtjJ",
  "key31": "C55ZKic25yNYQQbCTErLJ3d1dd9LTCksen8f8YJCVQWagEBChKVuejjJkp15tjh3n4ANw7Q7CQaHAtGk1A8aPqW",
  "key32": "3DXU7MCCFCV94cW6DJ5DoYEmP3zQPVrNQLZodoF8Wp9QRn7qFykFq6XU5rC1pFxsEsywS31SBuV8rsrQc5DEna4G",
  "key33": "5NXX3tmQic2JYiNLaN4XHBU8Qy69cW9HRYtwpLscYSWHMja6JrFz1TizV3AtNtACFgh3f81UVzytJfxfMNZbpyvr",
  "key34": "qY9HjQwzjavo3MbMrg8LkiQwV3zgMgJpMzQ6EfUgHQHFuobLZmYRn2KXHMo9VJxjGmrE1jW423cVTTd6q6AJHSL",
  "key35": "svjn8E8B9i5H9zqG8MCXvviVqFmpjwgwuoDHhp3oytCcBPBX6GBSdS3Fk8VUGYxjWYJi7ouKKYwD2rfjgfFJTnb",
  "key36": "61owcEfqmqjpGFD9PDQzPQBvYLUkJ9Mv1YhVMpbAre9i7em39D5eVnmRCMg4XbZT9x7UTTpRBags5huEQdqCUmaq",
  "key37": "5hWgPu1FNwbodTnYV8ERJDDitTRWhZxjyPXQZmp7CfCDYBTrNifeC4uYyV5cWd8RMeX2EkBU1zpwfzBrcPAEpvjm",
  "key38": "29tazJS9ycQ1jQLZMjPbUZQfRYVGXFh71y47K2AWSsi2DNqjYFTNjCvdopDBYQqu3UQLS9t3xaCVegJqjTFgNpMA",
  "key39": "4mCg1NUYh6B6FcwV75AbkqDVT46pbtwZK4EaGaCYV1yE49JJcxPsU3rUzpYkEHA4P9B4awBYVZyTamPup8wSQxxA"
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
