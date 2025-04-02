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
    "3q3pmDAzQG2a3tGQ2QsUEQeiHDH52WKetCaStEWMxLnvGJFnBwky121ypmFtoaBXiqd3R63NDgas68sPQnXKqw6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfXZjJwj8cmFWyzTVK9pHb5ActDc9pNmRRJhQ4oU8HN9A2h2cDWX3sDYgdpLaEmbgesL5EsebgPLqiyJ5p22zP2",
  "key1": "311SXRFvPKnGAAfFgW8UivN27s6MhHnQgiU6KZCs2CSC9uB6JDQmrrqbMBRawxgjd2L8xKGotsnLHHbyHwtiYTLp",
  "key2": "u9Xy4Qn86BkJxVNL2JzQSmGb2KoX4iQprQk5jb8Cy8C48eFMsbGYBrYqYnJMrXVwZacSppBVrBNDFi5DxtzjyNK",
  "key3": "kCR6iBaPLusS94YLXKP9pdRoDYJJu5FUSJmXDvrhTShN1AAmw942mii3MTUPRH4SHMiV9nZbzgCRqAP9GYxNoiV",
  "key4": "5ufhfXiBuRgQH8LAChrt1uShyPjoggGZWYN8w5JtQ9Xmcwa3ZcXdchM1WfAkWSECgRdFbWRADmG3MBYxm4ZiHqMh",
  "key5": "5hee4pC56VrV7yqHKXXYNpEEtcMgaPJdjVMX1f8QdfrGq4bBzYZegwzyxN4TnbSDJS8C4T5FvBKTrL5faszKGmZU",
  "key6": "5UuTnmMRxd2Hb8eQkTaAmqkjPoRfTRoApmxWiLTDthffFQPvd8Z2wxmhgBpvttXrxjhpZy1JL4cmLUvY2Lv5KQ8s",
  "key7": "34RkdnkVA8H53saKdMwtLX9nPdKLHwBzNpnuefswMUct6dL4862ehKamzTETs1cSrBpQnPQuLw4s8mN7xjV4D5t8",
  "key8": "3Jh1Wt9zqN9GVEcvLgL8BnHitXpjWoGW8hkEE3X63fEcjAsr2xMCJDpu6RDzCFEK2sQMAwupSb9VSnAU3L8wthS9",
  "key9": "3NAYhiGVWQEX1C7HGRaiUcpUJeu3v7PmjN87VrK48B5PcRNKKwAKjgKKnsy6YWGWydrjQAj7GMgrE1BZzRntnESx",
  "key10": "57AuhN3eE5rp76UeJ1t1XNqQ6jLwuv1snB3CZxeXd1JP7f8c311FXQysAbGG1Lgxo3FzQ4UPPg9gCzJgeTmHzJbj",
  "key11": "5JQyJReLA6MfdcumT5aoE3Bc9qYDKSKfdyw1frKsZFgWFWFdZWeay9smC9u3X4139VT6qGWMnkL8jigcru7s65Y4",
  "key12": "5aujfeNM7uM5LGijRkzRvx5DHRYXHUmKDzQ9bwDYXRTJPWZWJps5x4iwzosg36pjhN8xEqgdD9Ax7NUmZ7ZE7swY",
  "key13": "4SjN75DUVPeG5PbeXTtdjfAXCSd2R5WEmNNVM9brkheeMKcXTHV3gfTGEZRZNoYLikwzMFitUF5NMjzf9eUnSvx3",
  "key14": "3T1DDtDBiM92kQiP47Tt9VH9udqeQX15K81JTtAWd126XvowbpKRAuFeneGk9ZUchymQTq2mUn2ugbNiKKiP7oqb",
  "key15": "2EXsGcnJibE95bepPEzpSU1TNBMvcUoi4fbb77ptJYEm6VqDnrvpzewuxeSEFAAnzik7sEAjHzoGjsCSFfXQrob6",
  "key16": "3wh66D8rTgCQTJYXJsv22g81aTDD5U2UM8dcUEkbKnYf78Dw3awtMsEDeD4L8cqem5aVVDepKZr5EfP6NVwCGLG7",
  "key17": "4tBXP1em7eKHeWeZybbxbQqqQY2cAYVVHPYYsqMoEoVewJWi2GbiUL8yJ4pwBQrx2X11QzkraweMFKx7enLGXZrD",
  "key18": "2K9tnaBzsQpRzknS5fpdrn4sKcxco6yzUFhtwJg9vkYY5iQ4bhLDuuenyFfZfmLUYnKPKeV6q322wE8B5f9urbC8",
  "key19": "5DrbG2Ma5gggTB27dhHDgsFYWfNrequbB8uLMSoSPAABpCQTDf3xPwtSEGqbYLRuXKAehF1hsNCbPMqAf7Dh9MSB",
  "key20": "3yhrHryXxfcLBP2tikxwigmLdKzJfFLvtfDUA2D4UWnmn9ibj7wDBGepudGpKZzJDyyQiVqxtMK3V6N14sRgj13q",
  "key21": "484Ff6xpHhRdxcZ9NUjY6T1wjmBUsBYUM9TE25J5mtPW7kyjsotxRnEyPHmwk1mJKK4pafrcqBZpjSBbnRPJ2SXE",
  "key22": "3wYfexdqZaTDBh61pYQjyrqp5PsYkSpFrXGjhS3VmEqMn2MynxSyWAgQEPvK5rTRcrx6u6Tnsyy2zo9eFkopDe15",
  "key23": "4xokuxitJk4UsdzJqyKBZQLFxTizMh2kRe5BS3cLHV2eiEQN9CNfMhWujehv1e3ZuVNMdu13P1FL3sjL1NszgXzG",
  "key24": "VancYBEo8WVQR9UQo1T2ChqEKXmjCge9Pg5874gbAjHhtmgGoet42FcQH7HUPeQXKV1eQHs6Uri4Q7dFSEVyd8T",
  "key25": "5rmEsquULeVJsYpT1iyBBS86Lzg3LJTUKA8iEgCpFgCsrTtuCurEYjQ99p1f3vhgw3CHzUaAyQSnhMXMwXZpfJjc",
  "key26": "52Z3xrR3hqzZvTBXxyLW2adTnKrwj4JBjSNSHPP7C2KsqBAG5jJxcJ2tdoyeWkoPCvx1fczSvBYaHTjZsk29HjwB",
  "key27": "4b4kG3fM4hxRthfpXc9mFE3aLyR9knHckFPTFB95MxyXF83brwyynRtAJjtc9Rho3F9QmyooM1AE8uzTf7gFCaub",
  "key28": "5g2fNeHcck5zXvRpdaPERxA8rvN9e24P2NbS9mAk4dk8yzNQxf6rMi4J9XaDzeGz39XLBSGTyu38YtTXzyvTqwuD",
  "key29": "447xcBJckNucKHHH9nw4upnJGAzfcdVBDb4pQcyfVc6nCVYjxwMgGuj1g7zXQ9gR8mQM894cDNtQ5BjyBKeqv2wP",
  "key30": "3vXAxXxc4dDuPdNuAE2Pi2hMHfxdz6zCa36QYSHh65uk5mTjroFy7Pc9zBCyVCnhSPpNW18HHAizBLG3Xif3P8W6",
  "key31": "65u1F75gNVeJd6ScqAXx5FVG1yCg8jt66U2uEDmgQ8DFLp4C3LAABPPC1kcF2BZZ5yFYGJ4jmP4fcXb66gSPSqAc",
  "key32": "3gX9Xp7WCJFFgZeGiBKujSCKP9vQDxjLt4uSXti1ZfStaNQto4J8h4sSc3XBMEo6XUELBpBdxPsroqDycU4i16AN",
  "key33": "XkNgYZvCvetJcBhKXqJKKvZFpxTBKJQoARTpfAj22EKEA4YJPZLgvx57v1EXiaSu1rTsmRrJMPC2vx9CsJg36gU",
  "key34": "2GymztkhdMB258N5SVbTQ3CaKy79BUqBktZxcDmcNDMEcYSpmTqe4WP61fXyEN1yWSXQaFj9bS9ADJmkrT6bjDxn",
  "key35": "3cdxZQYCc3fHTCxck1NhDECGE6fQNFYciz8u8P3DhMFkwHWTdwCsoW35ypo7kLY5Te5nykbv24y1eBxsE9PDuACS",
  "key36": "3kzAqPoM1wdTGqrY2gMZBmDggYg9byiwM59HrYq8nDbTM4QooaSSJuWb82MTPy9PHMEqGEMDyrcLKnnQptFieGZW",
  "key37": "4xEuFpx71NGAmmE3PhwCD5jhoa87wFk63zQKLnq32k4nkN81Zs3Y9dx6PvL1LXymS8ebQvKBdKNRJW7Xj1ZQrGYu",
  "key38": "4Kfqw2rpWowezX9ikavh1k78MYg6TSSipvcbX8xA2gEeMoUT8Evpy5zGbNq5cBfk4hawsoLb6k1jQcmiUJZJub6N",
  "key39": "5w9n5sFUDmKoLqGTieKDHhusW5NihxxZvkczR4ovZFry87UnfszSha88UrrfYU9iLp2qBc6XrFF7VWekrrooDFau",
  "key40": "2ZoenvMaocSKMW8S5G3mjGP4DQBMSDYN5RVFArtbTkBgsnBFY1mXJXDMUvW6oQ3ZeDtoPq248kemUHNRwjpbCfAo",
  "key41": "YHvHiibhue7eJT21wuHqqrDqmUUPBehYExeRNkUVrdtDKH7nLrTGBzvBGAN65iAGS8Rx8jPrgt6uDLLChFgpbdP",
  "key42": "35P2t8s9wEzY5xPZJSAkkQzPV5KyNL1wiaWEn2DVjwbJ8vzcfKj7eeqgJ435jNvvUrs4hfhXS1UhkCwjKwwSEUvL",
  "key43": "2PKBDfrmNqrHLZwegX1bctFjVJK6UDZdqhMqdHKbHHEAYkyoZmAVwnWuPnPmcFYPxyMgZHfpFGheEciBaoywMQyp",
  "key44": "4FS7yYPELHAYLYXUxzZ4ssJhpGk5DSWEomyT8CxaJzEfKGmziJtBZz5Tjz7zRWnXa3dqvF2XRtMTmyzXCFRU7TV1",
  "key45": "5ufdJQ5auFM8xXzjGq7Uw6V8nZ9dhypJWragBtRLf5rvC6yMawKtWzG9dex9xXDRnWLppXaY83otrPv5zdsKaMe9",
  "key46": "4tttgTV8WgDDCRvNhL54ZB2A4Zz628gxYm4kmu4HG5eg43mhvydgGY1LG5voVjTGswtpjvkf9DrvrkEHRbRzBwrp",
  "key47": "5Eiomu7YqKvtS9sAstEMC36ZurVh2jKFoaeynBoVoEverSBf4E5aEQ4VEDDpR9vtzDKeprHS4UAnyaTY89S27rjE",
  "key48": "3kw7G1STUHGkZttecPcEaww4aSC8u6w7VNYKPrQFZCX8p3UoVb9oRosuyUxscqBEmrMK8NruR3aEWvs2iyQXQHa4"
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
