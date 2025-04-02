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
    "3qLiTQ9zkwoX5f6sdz8c282QALbFtG3wwZ5ZS594hDcgwBQ8CBxzsmYdd8ULXDY83vuhjaxDsewyAAdCE82sG42n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Phg3FXi2EUYbBNBLEQV51B6wxgVAd1NnAY7ux1mHbZ2APQgYRXeax7RRf3ZiPvDCfjW2C1pj7mGT6rbBkdckTfW",
  "key1": "4buQUH46Z14KWGSLg4QkGs5DbSJTDrsHaRBxq4DfTbG2SQsggqaYGGKFTiPZWU5iZJJAg1sYsj6RQ5cbhANcj8FX",
  "key2": "53WnMhCu5KUxdYwaGmpyMZocV7ag1gjHW3kT8FZj6wuxTSeNFoTxEyGqxmtLZZaCWFgUmZpQdR1QT992WC2mMEz7",
  "key3": "4evsGcpjEneadkkyqQNDRnSa4M4SUioHxSGRw7HNkbg5R6CLu5vDFVW3yP1CxLUAWtQiTYgiRaDc3pE3V3UgcqSK",
  "key4": "5zF8mG17X7ZJLtWJTT7Vpa5RejwzgV7AsFAzLdopTU5WfSBNPn8dLpC7KfyXzvzrC3TQ2jutpnPo97xAng1HRyU",
  "key5": "2epkzEYvpMcCDXxJVMdEgVg1tkBfYVcV7o4KDkgiNkNhSFWmM6BiXFqnXBhSgHz3jJVqKQpCxz5FhS6BdNaU3WEH",
  "key6": "3AayHKHvpCiWnU5FrsjCuAN792naFfjTYi2ZtCUFGqFCZ5pTUJVcgeSkcmdidQqvu2Y3MgsRbRfTjncB2LvpAjPi",
  "key7": "2gYTpY75FXfUxAUww34f1SggdCip9jFnJMo4uFbdnJAzSDymmwaX1tQNGru2n9EUo431Mpzqa7niFsnV6MtiFeKr",
  "key8": "2G8xiTp9Kcob5Apr8QCaFKeaatHM31eWRePkJfjKHvYArSHW6FS9oT73TFe1Ep2Bsf9F6tWrNPN4KRZvWZMZbiFk",
  "key9": "jW6Ks211Q1jJ8PKGSxZFLSzL3xdbRNYZohN8G6PgtHz4N7xsLQvXDSMDrH71bT4ASDtrxC7G2q6rizyrmcCGTcC",
  "key10": "2x7KVLiPGDu7gGaz7RFJymSKp1kQkNLW2VSZV6umhfbLfjco4pTdkxBPKh3FT2UrNXAtR7C1bwsc5iLWoRoUTxHk",
  "key11": "5YW4AHeWExbDUKzJZEQ9ZBSrt4N41xjZbN1LUwBQJ9HBBZ9XNLry6n2YziPQfnpRVtpi3jGNzfotSgf1rkdBu6zd",
  "key12": "5XzL3NpPqmdHW8Qpt6mCU2r8BT7hHztrURx6TqwRbqdfqAp3zUr3hKXH72ie1YpR1XV5TJ3pskvGtqH4xD6e7nZq",
  "key13": "PPhckET4aYTngwVo2Y3MHt6T9U4bX2z7QLdLrtCFRmgrzzBUadX93fErwRKkk9NsKacEzdurhYmD4jiRcKQTxay",
  "key14": "5ShfgSHtV4V7rwGKnxwYU3YnAPeKS5gQDzqsbtDVSkuLGNWuy8Da4A8ABxqtVqKo6zU2rz7fjDY6eLQ5wyzmfPxD",
  "key15": "2hKRHmoWDFU3LHxyuYr3SeZhppAbTRgz4q3zP5P56V8iKN2i9V3gRzKiFn3k53ZWEymZpJE4fkZAGnUBLqEHHbmp",
  "key16": "fWmhQFWZvATuqdergHsyw6wp1x19WCe5FknDqpFz5aNtymbDe5NX7zjCxFrLNUVWcU6judf4ckec8aYX8SAo3qj",
  "key17": "37qLmAJmvwoP4zxAo1cpVRi2Zu7fLj2Xxwgr1yfwbFwqX2Cg59djj3o39zHEgsZghyV832AhpMi7geXPvhMm2qwS",
  "key18": "4F9n2x7ReEQqwDAVA5b9y6HBxy3PMUuoraZiC9gmMgZPHNDrUHahcjLnR8mUtwAWhrF22dfCxasJy2Cscd6bfjc3",
  "key19": "64u8aTy2kkJktvRbkZ2cbD3xL268x358BK1jdDQ35oGeEYV6kmGEeQD2z88TpCy78JzHp6yMddmuGj6EYkD488mf",
  "key20": "2X1FEbCtqseZN8UbfJgpTVoUuKG2zfK2qKBmWDAYypNiGAXkb9vk31rDbWujZEWvzVoSewDfd6NdGvECkrWZkRXj",
  "key21": "5RZUL6rEf7zYwvrPuz8giu6KxupMiT9WUuk397qonV6K5mku3Ag8UdSkGSurFK4LZKLDubPRGCpzFDGXX4GWrpJu",
  "key22": "fZ6Q6Bfs3tz2HtrZFsfj8EaJWRXG8w6vPTvH1RcW1Beqvdm4Xk4ZUT1NSPan4ZYo3E1HhDrGmLHxUqcGEWW25u6",
  "key23": "52maEk5Jm1Mjg73WYkQeck9CPuF2S56xAdsZHEFqRwueJFSu1ufAb48RfF3fLSErDDfX2oxhMnXpgE5qtEV8niqS",
  "key24": "iWzSfYmP5nuPgzWugbmMUdJpqp9WTQuao6vmh9Biv2Le4TvTgiLzZCM2131s27LUYE95sxAx5PRMheJbu2ZXYZ6",
  "key25": "5VwHVRcPnJ36Bi99CZy6hrE9FeMmLCRFFviHwMd6cE5D8MGBCUJW5gYRBXEafEySRoMe8eg8oHS5Gs8WMeWTu3nB",
  "key26": "UoSbM1H1oMgrSQcQy3DRFkyWeGd33cB1JddGRKWVRhhXim2oX4C1own5Ri84DE2UNJKWBFsEv7uFRtSfUyT9Bix",
  "key27": "465aRxfbw2yinUpmGheX8SiXzuXpqJ42yauscSoqgb7gbCUZGJpfugexokzbi58bvP2Dee4hbCCczyjFLXKqd8vD",
  "key28": "5BfuafUNzNTFFgi7Nk4sPbDCLf25G7qtdBFigo6SP5x2YE9YU6CfgpVhvRcjhFHVrKasKa88CMiKL6SypdtagYR1",
  "key29": "3is1yfF7NzU59DDnfZka2JdiSeUd2PADfogk5Du3rajKdMyE8eNXbngefcHpgDxGfTf9FDc64Tf1af92z4shqp6B",
  "key30": "JBVCujtB6afcyY2WZ7JduT57M9n31cioAxRv8y5VYjTMVNfyCzNijpepN2E1CciRqF2QFLLuE6iTgNotYnYSbSk",
  "key31": "41p5gfTgGMCPsbd2BPn5NgmkoFsCWY1sp5ptRD5Do98bJ2diRN8rffqcaxgBfg4aMUyim5LrC8Ufc2Rk7egXjfLp",
  "key32": "3T2NX8Qvn2XyjvzEeQSQUk5u2PcXKhFqs65eeDJ7m2wuUem5XMcdN2a5AaGH6pJ5oYVKw9CxD6xk3T1i7tt6dPGv"
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
