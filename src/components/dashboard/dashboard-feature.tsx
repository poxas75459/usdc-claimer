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
    "qRPHe9xEwtK6ZM9ixhw5Hd51ii5U3vKesAvDk8WAF3XHfPNFHo4kLWkHY7NmHmBktmBfANrPqraz5B5CzuPhtkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFD5RxVqPp2ugRJnDvKQS8X1xmF3HLNVsJvFk3zd9hAL75aZvLJXPgoyLkWYmxDtLybAscNa7kCTzd2UMqS7N2V",
  "key1": "2JiYQJuazaW2sdzhp5fVMZjxeoUugrYybeTPsYhbC8aDJRFvHCbtDK4TjjiKu4eW5hdDhH11ybKj39cBKCDiqHfQ",
  "key2": "45H1W538Ac61aCBKZWrcDR2PfPdngzoAyDdxDY68T4AmZ1XT6yMNsxk5xaGCmLJq9bQheyS11DVrzAaRHQ1nLqf1",
  "key3": "2AZgGd3bVyNPmzFbNWQohv4eYRvtJshr3txYLDeYCHtVvWCsoa6qt4YAwXaoobD2HpNTG6kSfcR9NZbSdiszZtpY",
  "key4": "5vTRXUBvDVNcN2fMQ5PyKgX18G1pzU3mmAZKPzQyQAXpKWCAqkFLU4X1f2aj2T1vA2WMRGAVB8Wr2AoY2nHcpUX3",
  "key5": "4jDjYRb1EmFX1pLzKTg3z7J7WMxbummwZd7MC71bnud9jg85sUw7hwtWENW5NSruzKsrm8jY7ynAvJauTrNZkmgu",
  "key6": "WBfRnbTigFrN3v5F7nQbXtTBs6EZ1PDyDfewNTpvx9LYCUSB7hZ5UFzPSnmAdKEGW3tidjVhgAH9P69Nuoq5ke8",
  "key7": "4wdjianBxkT5DZL5vFo5KRyjdFRnMe8Dm9A915dz8P85jt1Ao9FC3gc1wenqobndATNjgkjBTxAi9MTuXgcR1rP8",
  "key8": "4o9fRSBcboMP1HmUm9aQz1fLHTnjGFYfN1RXasU36tTVCTDEsoV45kH86DFx87dv1frQtuEikiHsLoFyRdr42K9q",
  "key9": "DXMpBnWV2JjYtdjyxTzuLFUhxZchp9QgBR8ytn4jbXBWQR6o5XcGszCVNEmDbtXFaq4QLwNKaVevhxkA1ZEM2di",
  "key10": "2LEbhMVwVK77MM2f5fTR1do3y8gmHQ9aPpn8MTaqNUHYXeARmVDNzz46f6V8xQqYMZYJo2EMAAuLvrcu8GeHXWq4",
  "key11": "64vymEPj49ANXfgpWo8QMsgRMKQ6MPpcsZgMis1mXZVtvrEWv7xyja5Bf15yBuRubTySqJdVJBe2B7r5jTB7p3wP",
  "key12": "4ybDdYvbSChaQ2Lkdbmica72C7xbVqoPh1byCQWDGhitiA96FRc8L5sky5E51vWXY4mi3R86u69SSyhHaCWH6LuK",
  "key13": "3JURcfPmvJ7TbLji6VVsBJTJi5jRuqMRYCzvWsRJBLqHxddgJkfQpGvgxAvWN4xgdoEqeNSj5Um7eW7z9EcfMNRG",
  "key14": "2MDt11TXYjqWZdt1AXwFBZU48tbm1FYuuJfAJ6feEdxL3kmLAqRLPX7rXYdMJ8ZcN9WvXPyDpxqwX1KLN22QVLDm",
  "key15": "3ryz6J4RGpWo8CBQR3qdcqJ1UYyWyF6GRnQYRm4MdzrXyFQ3Ff8JY6kHmMfRSgvYu89ZcyDPMEj5QsJsZNJHpf6Y",
  "key16": "3YWs1sxaJzWtWB8En1spRzy6HkD2T62QDCqtjmpXkbyakA4CdSraE1RCwhr2FdADi9B8fykqoC83Ndt7vMzWxzJS",
  "key17": "35ZFW3QPGhYg9AMA3GvSfUYYUqbWg8yB2TVemKEoQp4jeiAw6sWYkYtvTo8GffDXoC32Lq251WiimqYvEmNfQHpF",
  "key18": "3uuUU9QKM91PXVo4VvuPVADpVnXAoMQ1E4wf7HcrRadmYgAZa37PjmwyqsNwA2oSiwVYcSezEZgyvAxR9EV7CX1i",
  "key19": "2vcQwTDahC47ebWSE9ya2o2bvm3SXfhEVHKbvnmBVvVVecjrAmuuNsJDE7YoP7T81HiiAxGGs1UQNRLunSs2QdRu",
  "key20": "5vYoqDnSGaHwN6aU6MqwnX7xa5VF8HH969k7hWBT3rLrPoszwATTp6fgiXiDbLXXMfuz1QhH62tY8qboSkrQAQZt",
  "key21": "SYKDXHPvyvN86ubUncKfNanjLc1TdxC9kVGuGQ4gMBA71bg5DMR6ACAPKXSsCQ5kgmtiBW9Xrnh9sFXtGNe9VyR",
  "key22": "5GdgjUWatKMmi38diTJkcRTzqokUJR3ryS3LyiDKGCd4SvSRtHVA4SGKHjXrGuERQC7qYGGH3bfHdwvHsqvN4hDj",
  "key23": "2N2tM2uF2Bkkt6WBEHJgec9jgHZDwYZm7SP148UguHVQRR4bXHV4NyQyp93EJFT3YFjuMd717uzd3quUjcSqGgjQ",
  "key24": "5pLTw2Sxma2vC3M8XdcRJmUeTzQkKdBU6R9asyFbHot7DWLKPHDq4CCfovo3rniiAX5forhM54F84ZYq7CGvBMV2",
  "key25": "2cHLRq2uY6fbFw3PwE2bCxxbZ3f3WuhuDN5jiFhFU7wRwRuLKnBya4dEawgRYjT9q53xPfBj64AYrQetRXVivwY",
  "key26": "3iiMgPhojUUgGaq7rfNuQWXk8VPyJCxKSGcgoN9EaA58JEnRSdxYTtUnzDL1SpXmoLsWJpM9ifLcinBX392SELvn",
  "key27": "HYd2Leq2cuTJUFUKWtcj9rRmLDirvbQpiQjdiKmWiiQrA5Yf8fyhKsmDvfamm8c6kQ8oa99AkCthpprsK45F7Q6",
  "key28": "3gq1UD91Egk1Gc21JC55FHuvLeqTmRD9KQvUByoMJuBAkEy3kjNkuYZ7obSTQphTVArsNXQo2wbh1rZhs2mEgAog",
  "key29": "SSTMV3aEV7fzFmphoAhTtMKCNvqt1J862Q7uzDZw81tRvkVGqyC9wXQ8ktNWNVXLQQYRQezy8Jugc5zikfThexQ",
  "key30": "3VULBFS4h8S24fLrDv2EhkNEL1snthGCYZ6B2AfRTKq4rUZpHBJv5pcnyRRUW9bgKRB6csQ8Ze2J4nsZ3hy91Tfr",
  "key31": "2qYDa2tUVQ4vV1VcAyzMktzacDNv4wTotgw5YfNdHv5aEEudt5mQ5dDHTuA2XNxyzhavAFgyz7XPSMZbFTcA2jzN",
  "key32": "3jjaq9TnX9BwpHJ8Sq2fV258kPWHkzKdPsgZoWznwUio36eS2hAwtpLqonk88Xty4v6fZ7Kwzv735iCdNyKC15aq",
  "key33": "3ka9QprSUJeKM2Jx9CDTatvCZfgGoWLCATFAVPKdoDkRKVobFdXeqb6xfdnwRFguxtKzV1jy9ArVqKLipLAzkGKB",
  "key34": "5mJHxJiunpKYjRrTgQouV8J7XLKK2PudrADwiDSAdgTeSkqWXfbDt5oeVZHupgaHfnJ96bQJDqjKKvYsv5Rgxikj",
  "key35": "GiQAHdDqSrCyTRz9SjPmrgF5GUvD6DrsrZ7r9GRFTLEsvrJiFwJ5gwHZQZ6WipKvfcy59pmfUK2r894iQL1XVLV",
  "key36": "2xYJSFaG4HDPqwL1rRvsEA5XsXuGHDXgunAG64GismN5UDR5W413FGKCMKQZtDPCofyiEyEJx8wcCUBbzQC5fn54",
  "key37": "5naroarXi2N8TRummqwBer1z8GtmpcpVZ5kLgiVPXXRQjnu7cvWYqpFcqksEkqNW8qRT8NWhj8pzeHbNJpababv8",
  "key38": "2Sv2aobK2MjfytPAQeopvQffoTbdEjNSE9muqBqtKVo8CiroK8h96ezhYsQoGBq1hP7CeHsJshvJweqqBZHAKGbe",
  "key39": "4Z74JY3MuPoWVVzaFhg8gqS9eFsPzN9F7wrvEhT3cTaBA2rdvVBX371PEnPWjkDy2ciaKKcXBcsa2AohZDK5e1bo",
  "key40": "4rdFdYnFfdJJdYzUeEGCTs27BDn8dTARpZjoBPb4FN6veeYuwS2NiCpM2CKv1AmkkxtG1LxhxmnQYNboCvzyN2ZN",
  "key41": "3MAZ1ripqmpPUyEwW5tCvrFLqMo6Y1vUC3UK1M5ieJJEBsztTqjTNND8qjmQq2XU1jQdC3kKmWToQFskkNgtBAw3",
  "key42": "qeJ8UucoEHUXmLZQSJpAeAcdiRdrt79AZaNDGyTyoxZeuyYHxdy4Zu2R7boFGtj43DgmJTfSEn5Fm1Fc7kyBJtd",
  "key43": "5s3idgi3jp2VTmyVMMM6BTKRffwDZR6sNTWyZbZCgUmboz4pmGHbagXepgp2A1yrpUBovD8HxnTy4JWPCuhPLUys",
  "key44": "3orCfRRCpXEuQxfgPGwk5DgRWir8z1KPbGDpMfcimo4u6fM7cPmyyojdEnMrqZPe28FT3jCsW9ZfWVmaTd7Sp3kn",
  "key45": "5pfRF6NNh8gXdZpw4qocvXLnaBtfFSaf7ufY9CpfeToBqZLmoVETgvK2QckCoXAX94V2QRxRAwuj4FfExPw6TK34",
  "key46": "4fyiUmePzX5ir1ScGnwjwBepTg8g7LEbvrmLq4W2AivvYsXPUEUKWWzuwCjjj9Kmocm5ehnHNSiYzjqbhJvCLTbd",
  "key47": "2fFYbzczNCX75uwJchkcJxYkH8VsnsHb7hEvLzrxJfDorufqsV4HFASc9eRKeF9vFB1MG99EmfAopZueBdxdU8PC",
  "key48": "3qY7KuHUX5U4bCbkMJySkaBUUDt5ruynUN9fTYVHKq4VfsJkYcugG2Q5sRAAarJrT1suzgpE1gBVuvegkqnVisAM"
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
