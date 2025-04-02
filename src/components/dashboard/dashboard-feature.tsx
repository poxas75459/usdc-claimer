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
    "ZtqdQ1k8SL1HnondkCqUsQmGG5FzggHhqjyMGuG1HPjArQAnc8814nHAuriAkyddNneZGswudCwTQQ8eZTAjbha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5MNZzBZB2HjTm4UfxbCY87VRSzwKFkGkZPEzFTiuPQr9gD9ySMpWNeGK7up3DRmUwPPRWNRXcPmnCyFqJhiRgV",
  "key1": "2onJWQntJzbgjrTmcwsyyBrpVqC51v3JFNjkdxkUnixiar59WgJPx4uiZRrL97j873XLfar7TXJg1aj2CBDtUahB",
  "key2": "2oAYnTwt5ZsJaKvnfsPj9cpoWVm71y3kzraxTSN3QJxBxkvLbgWPSDFHA5jEsAymBJW9mPfmtakLhQTCzPeL75Gv",
  "key3": "4LCccj6JpRVTRQZcRMzhqsTEAjxyZmyV1zxGYtjtaAmknJZtrRJL1xxgs4V6mpyH7f3uFdMiGj2aWyUUzsaQS5AB",
  "key4": "44bBaiVVECWdCZeQ78NTj4yUZ6uMPHadUMb4RBSG8ogu4pQZKz2xEmbEBxWsufuuS3wk7KbyJWK4ZtRhRXesAXD1",
  "key5": "DfMW2p4fV8vmEpovqA4P8JCAUPqQRSRdNfzMVuYXeQJsP6ifCfU4QLERD4VVr5qemf4HUJxfqoAX1ysLbd6q7R1",
  "key6": "44nL7JUX8cZxreiDKeXqDAdQGisAytmVKiZ8ARtmeWLC6vngtW51RD8phFhP6mBga7y2RV2893GJnLe1Qf8Mg69s",
  "key7": "B29wcj5GQT8PVRyS4EUDj16xbzWntLCCazgVfXqEhNumUUH15cx9SZHUzjVkF1YDxmKEoqR9N98zxRx16xRjSJq",
  "key8": "C91FL4EGxwbzPVeZ1kkTSCMZEJNFtqMPzVidRiHMtUYPUYG46KzB7MDfG9Ksyjm4Sf3w1myiWPBZyVTETqWMLJD",
  "key9": "2sfy4U5nVQyYGwHiegnUo9781UrXP83MQU5K1Qv2584T3QfdPCJxJi4jArAcCey4if7yybyPxb3AxnPuYAUDmDM",
  "key10": "A19mRYExa5JbwRsWTyvZj9oFT71PE1v151ydxgiy6VqVKHLoN6zfT6JimgfxHs5KyNa4z2ifAgXS6tdjNN47LyV",
  "key11": "27sEbTDJVyqqLLv4DBonPZWXUkzPhfkaPFBYrqpKdeqytSy1mij64PGWQBY7FqsPzwXMoiBYtTqb32J1Q6sSRwdq",
  "key12": "Zo9hnUsRdrMLFCKQnjfcFaWRkERhGqUc2qfZ9xdAFxkB8f9cbt1YSPM6gTZXDunCqRgu5rLsgUSSy71i2Z8bwqx",
  "key13": "2tNjntdG4sZUmkbjhQPcrw5eXBCNYCUJNRzeZVZBysgLLqP2tm3MjTd6nd2LPjS94FWCTM8zTjvg2NMJpT3GPkvQ",
  "key14": "gdhAJFY6DnBNsgLjETWhSfv5auFRJ6UhwPmvSihLwVC6TxUHxu2MczbSV3WrDMNznLNPEyV8yA86q889PtarHFg",
  "key15": "4M1n2EuCBf1gtykf6pToifiPvLeykLfumiE37f1isdDZrEzbaWp5xtsDM4RMSfk5eD8XJrS634XaJVB2AbyES1zU",
  "key16": "5KmG1nGtHvhQYD9SP4tXe9pAoxHTsPbg9ffMNhkd4opc6AhGKisyxQAKEEnV9ietHfuwLLfZDpPATL4eAmrcZrqi",
  "key17": "4sTgS5wnRhdDhWRFXmfFipPBqAriWep3EQNQqGJeNP9MdVkY3QLA93GLZNfYSNcDsQ6jk85BP8M5dzsanSWGnkyL",
  "key18": "2EkbmNHjtMXPCY6zXbqaDVpy8QiL9jS1EwGoDPtoRAQZ7NsFAne6gw9kKzAdtgBaVmYqjQK4AHahL5hV7GG9UnhZ",
  "key19": "d8JUexs3yrSPa3b1nYtsv4utyY541kc3M7GBSecfskpSePEX8fnv9pWXynQ3eV5DU27imdDsKXEGb18rvceb1sR",
  "key20": "53X9Ws4i8j3kHozVZvaqR4UqBXW29FcmL2YwBu1xkE9Ci5Z25mKv7Q58znJFRPwR4wwPos2Gvr8vdLci9X62wTYA",
  "key21": "EuVA5VUBN9GRtf213KZY7AwFiKSTWeuvJdQX8znVqgCgonK9xc8GdeWFUkv4pQpqusu5aB11hD3HLpR7ERoSajV",
  "key22": "JQ16CmqibqCiSz9BGs1PCi4sCW19UJoisMyuNmrmVFmXidNXLS73w42tbEMMPwtK1BY2TeThcMudLysfCb2wDmk",
  "key23": "kPAR1wN5fpPdr9m72AchUehSj12vstpiJxxEa459HmnCw8WajL9SNJicgrH1GBx3vsvNtCy91C8D8Zmr5JuDWR1",
  "key24": "5xW2xYBaHYwFqCKQTDuj9N5wFqXSSXnGW8E22TicVRwvJ91nUALb95JCQE1sQDPCPH6gDzpWu31Xipxb62Mhnd8p",
  "key25": "3f3e4FtprGW8SmzBshQw3mkxUMRRJwpGBoLXLKuVM5NYAicrrcBz93yXcLZZWr6HSzghC2Uno3JWdYN64Z2isqD6",
  "key26": "MZufcDrX2XZvijsS8Ey4Ka9TYPY3eCEa8BXqbSz7TozB4Ubphm4dsii2vvjxhEYEUA1FiRJSWMDigUXSTyGxRqq",
  "key27": "4BQVpRFWQmeMCBKzNZ26NxUfre39wRDg4fCLijNnQBoiYHadmAEipypmS8uCN7EY2iqugEAFoq7YTDehepUWEsRN",
  "key28": "36Xd4jYQ7nrRZawsFqMT1RmyvHD1ndnQN3MGGUwPWUr8rDBHahEQivrWzCQQVpzkMsgxme18EwZuM7ZWECX3hfAg",
  "key29": "4Z5gNjLrNRgWYU9BVgEbaooML7dNhnqfh5F93BQ5NUS35Hpw1ypKb4AjXmux498jxZ9V6fQwJRdJMVe1iGejhkae",
  "key30": "2ZR6av8q9zUM9VqUWJtQ3t6ZwPB6mJ6s5Jq9PUPTLhyuWc8Szj8gWCog3g5HA5wgyHze7DJYUXnbRBtT7zAeV2x3",
  "key31": "Qx8FAZLrYjqSGa9rbitdCMdDnfE4Qvf91PdhYv2a22UNMvE9PFv51Jz7sePbbDUUpSbHLnkVUbkT9em9abShgV9",
  "key32": "3XVTgX176Mi4yekVAjbBgvu6mwJxUnyxSPEHPP3Pjv4DcFtyasWBUTm4p78ee2CMNycUVSLxj65mDXMQKtpXw4wS",
  "key33": "3AhJr79ijYTaAARVexgShCuHyZc2stXgGT4FuFQEmkjr8RjvuD6ZGSdvN2KBXiLXpcwzmCJ6kmuYf1pJp9EqbWQT",
  "key34": "2GBQvxZK4W5q6TLXX7UCPyFi66V3hsjsn1d186UtpmpbU9UtCuNYE2W1cVyipeb63SZYNw81CGRXf6C2k62yaAvW",
  "key35": "66xiNwRJkAx1emmGq7fKZP5rJBt2Lqe6BKRgN5mBKabes63hLH3kaGWvSeuaVbhmJUgPbnbkZimZaCGxPmDxCgae"
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
