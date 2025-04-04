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
    "Zfwqb4irW8LPvBXTCB2fDVhZsgtVm7FAd4LiotbhrcurFCNhSK5pj26bLYUZ7y8CbZF8NvKaMJYJZRTeEaE2kba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDUdgoeYc7mjh6fiddqDErYk7mM2BPXgUo8fyywLfYbuMJnZZFrby3wyScKxVBCD6rTT2MbcJFi5oGpUb8CtF1V",
  "key1": "mHAC39BpzCk9PgLoanhTENPkHQS1dEtVRY9atLHe86T1zjGJtcxqqVbH3QFaHJFmcKGiVncdnqvE4iihDaPFFyf",
  "key2": "2Y8jZBi8moDmxXxVWyD9JvqgT839m6fs6QyttCvaCybG8vyPQprst8XAAqBBTfRYW5VFCcNoTS9FX2fLLrTKLQBp",
  "key3": "5j6qrYPTFCCNPZcPU2C5cVrmBoY78fNyik8BngtJsNfWtA6uQNxdYcnkwQ6M5AgttPNSq18G4pkYHhrao4ymDEeB",
  "key4": "3jFymEmjt5KTocZktfySrpKsbYwpYSb8Yyo2YqiWYGmbyHhyiVXEa37XiG56L3wj5NvCXum1rBCYCpzC1D5xvcPo",
  "key5": "2WUhS3eRq4xjasK6BBwU3tg7ghwiXRbAcMhUaY7YoBfiDxZbic5c11Q88Uv2331mH9jzPSLDmsuKYCvKtusGXVhP",
  "key6": "4SiZ1zWPNjb8jWZN6GJ261pDWYWmmNVh468NF3u79GykV6bvgMUnGTjfbWwormU1PBUB4b6aX1rkgcvkisbD3i8w",
  "key7": "5zTtttvd4nyqLa2nJcCuzZab42BwJY7WKPsKp65KaYzg7h6x9RsGhUR7u9Kn5JieBXVVAqWkMmJbSoHKPXXkvFF1",
  "key8": "47M4BJ6Y144rgJh6QGCpAKFfYhtjKEMSemzCZxESbKP6CPaLityKt3FBBDh8ADSHuF65Ja3EDEYmBrvbMjDGBwDP",
  "key9": "3Lc9sHyPmQxmDR6BuyV6w3AaSPxmgXDPMcwBkriu2vxq6JfdTexoa5pb41qcYFo2tt5zJcPFXaLpgY1Qq9XQeKh8",
  "key10": "5VLsDc6nNtGrzNajd62gW5Lh6VqTfECs1q36FX9xmUK3PBX4utZGJAcAtuL8KND9sTNvTDaoYxuAhnJjUYd3zdRV",
  "key11": "3V3UgmBvXkmhADJL1AB4qoWo8r9797NGRypT3USk9TJmom5ybQxK8fAADGEQvBio1ivdeDH53piqGRnQ2sVEhEwx",
  "key12": "3v28wHKdiGzCs7Z9MQ5BF34rJ28LFT5RTJt6TSxn8xiVpwCAnj2qi8jRxkwBzZr33sxea86gixWuWXRPXisk3P5f",
  "key13": "2ATLCe8cSBLWTs9A6dyF3go1BZyEBeu6rpcaEwkUhqcc5mBV9yaydVqHPTfuS6jBUY8E4Fee6vWhZjD5hcnLNA4Q",
  "key14": "2mQjuF8qfSoABop8GBHwbVSZvcEJWicxoe54hLTiGSfHrgyvCnhd2SNgwYNEohrxDnDUWV42Wyv2yigf5UoZ8nnt",
  "key15": "37y7nZqyUZ95sUTwRfrUb88ckrFEAgpK4diR2CacC9viGcUrS1Uj8oH76XBFBiJc2cpzgGuSQQ4S5ZEX7VC42vj",
  "key16": "3rBgbnbi4zkGujRdi4oEW48emTGqYoQgSDGpaDyDia4PS1TYQFZUT3jgdr4xVMUSKqKzN4FqNBWFEJPtkmFGQn4i",
  "key17": "4PkgoFWCXr43CFHQ9PxU5to2QPWDJNr2HggfB4UwnbimAnAiGGTdpUcH2mTaTGy5JWAik7ctGT3Aww7dCcurQLie",
  "key18": "GKsU3WVhNfokeE7bnwfCAdQ5qLT8NbMgEUH9fT6ZCZ8194oGoWXqdUr7NDfH93HyEanJqDyrbncFU5AB5ruajch",
  "key19": "5yVbnHyhBKEEWkyKwzvRKL4VH4RqGGBjFQxk8N7VYTDbcHfHdCPBe3NoE37hct28dxdKatLoyPE3gcr3Vs7WXnpE",
  "key20": "nmzb667EKRGhNDcvsfSUB3WLAiNJ5NKqSHSiNRggKSTnVwSyKkVf5w1ATGcowEZHMuTuNPy3D9nvtP8cYHHErQY",
  "key21": "2GjRVS1ZxcWue19zEux4qyuZjgQGAYd9w9bjMsa5ku8zdhsqZhfcDCbi69fSA54w6MdngFy1d2V9ydNpkmjSvW31",
  "key22": "3XumpvPXU5qgPMnp7cW59EYZFZUuNeAQZLkPLXavboDaYCiXtNEP2Ei1XpmQ7kjwZkNZcz5F9LTmxrdzGk5Ttued",
  "key23": "3NbDCrDEoSbukuGBLQb6CcCsg8vbSjBnmNnBevKn4E35Rpwb87q5Lp7ra4DzdTNRF97dgAbALwnpS78pPfcJNhJH",
  "key24": "3xk1XM6JKiLJzSQVRNeKjMMui2jjWf9SJHp9NPWSom8ZGqTrw9HNDu4a7BGX1ofC5yk38ZgDU8aoWvCim52TkCjP",
  "key25": "4EqnXpCDhsWvqK7Jk9fk9fToX41i4KCGzSnBVPbfoXBU1kgfDBoFch4AUTEmtPL7kRC3nTqsaJGKzGsnsFcgoTkY",
  "key26": "2zQkotnMY7QvAYESPxX4DCMYuXo1fGVnutkRuVbVu89PRe6C17oWSoep9wsFkfzGGZUAVX3dXVUriSu996U2aGgw",
  "key27": "5f7C1tjtUgRCfwNzTBTpLekiTvyAFdu2UjPFnzb8Waa8DQViguYwyWfaAKPitveXVX2WttWVrXbBFGgiy2UZBQ5x",
  "key28": "2uNb7aPZxa5HuRuL6dkaSyagysQFEehYv8XoLiq15F1MrHVhHr7H11j3SJmjMTLcstXVjFp5r4EvaTsmRsk65Qxp",
  "key29": "3TRRmo9bZT2SxsfdzufEUfwPAVqzjTVx2SFWD9R2TzLXrHPk6jvPHcvE7ApPYU1VoGARasgvsAwfwwWSLgHG8Axt",
  "key30": "4vEPtsw9pLGdBwvgSFjT6eeJz8exDQyt5nvPMLXtbD3NME7JyDKVJMcVmcWPdTxY2qqeYp5NdWbM4qgV4u4yYUgq",
  "key31": "34P74QjbJZLkhBpLDqVvvBNJLoxNziFUrU1sDj1LXajroxynqJetBshPX1D43FZycQL2xPMXrXuC4UCd7mgzdeXf",
  "key32": "5Pryjjwj3q5mDMAF9NrnimjPEsH1eq3pwEHK1VjsdLU2q6x1YJaRfhiyBw3zyUTkg3w9tvZWEanxzaVXvC6k1HsZ",
  "key33": "3ex7hntT9V359QvEBJWw2tFNU4D5pabyzuwwxFy5xP5EnCMwuJy4bzyWGexCRvrQMR5FeJMnC8vpBmPUrEZy4fv1",
  "key34": "4LZxWwCwH7a7gezoPZz1KjfNNAqK3yQiCBaAfyo7bThERfGGZhzR7SbMDQbGmzcUhKkJnEyx2otH8CprBFCKAspT",
  "key35": "qpubzmNSB11JJJNqTpHeQjJefjdeSFuH5HXxDhCmNwFxB3PfRdXdJPgGQSLB1WazTAiKpMAALgQTyocSXPR327T",
  "key36": "wxF8Gz9Ha4Mm3V4WMpPFWTMfKWaJ5o9ha3n9e9QyQyCeH1AspNET1zNoaAe4ofp16RqGhDeJZGqRRYiPiJ8LtY5",
  "key37": "23twsNESLkKYNT5Tj38nqJZv7Xnf2mcuvmNggWwt3Ta1ZqFJkZeCuE6izuvW3Qx4jZrXozpmWUhgrCLkFVoJQxkT",
  "key38": "psW5FatFctGbZ3WxSHrNbNn52ZTnT9WFe5286Xm6Fz8dG7xyd5RoBT5ruwb4cuSPyipym4fyeBWg6sDiusaaEka"
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
