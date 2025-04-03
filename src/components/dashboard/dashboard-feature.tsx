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
    "4jFuxbq6KQwJrs9Ptm3Mq9e89gVpyXU7b4etWfHcZbT15btFmN4AQedyNarL9mqxd6s5Gapy9QqG1j8kJowUtAom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qy5WhbCj3nycTqhfHs5BKgmn1d6NPLoGYoTYx1qkAJzVKBTteiY9WXcEniAD6QJtxBAjJMqwcQb5mr9VZrYEuJt",
  "key1": "5EwUyCAZk2h5vrRVegtL42Qd49njf9avavNJDMLMmpc83qM7GE9mUqo2Sd67faArr8MNXchfMqBxZr9nGw3nn1PB",
  "key2": "3fMtNg5QzNpu8V3Abxo2XafkJBwAUzoqhF8gP3HsMLoazNvHSu3rAinWLLMTrFqjzhwSGBUqTJ4HgN3uWsBSYgF5",
  "key3": "5K6sujp3G88NvUyvGShMxXiZoj2XGMNbeB74VLwpyuJJFwEZYZ3qkkhanhgkWfGFVoGBQ3DiU3z2tnSLAoSKJybb",
  "key4": "4MTdU4WmU95QS5U78V9tU7gtru54d3tiBAvNz5Msj9LkkSr8T73SFG9rkfYNSDUNNnZGT7R1qjs1WtasPQLCKgw9",
  "key5": "2tw9FwyphkVn3BNkNhsfndo4Z5ajqmsLp5RveMgACkFraCdy6Ceap6adev8xiKJYnWKrCNN8NxVjQN4Cbg9KNS4a",
  "key6": "p2Rr7LuhKYbhH4ex6AP6cT7nrqQm6cE9Wy4FYb7xPpzPKpkDYUnM7HM2LAJt2kNysusyrpQCyPmxnKeJY1vZ6S9",
  "key7": "2zwi52K6YHY8DkQYcMGw2yhY87pLtcb2RJGYueAsqDiTUJh9XgyGZtG69pDbWpaW55Ci5Q9zBkoWbY7c8jUkeVZi",
  "key8": "4Q35C6hUN652MkosRMbMJeAhhtnJEyNwA3kiaruF75meAwpndQwVScmb8EsbBKPsbWtWrhV3LqM1ybpWbJu85sSY",
  "key9": "xbgV6TatTmSJiy7ZTvMeobH7mcAtuBP72buD685mQBXZCqhzFQ4hrez1hYhtgAei2cPy4ifGNa6FGGcCSFcLkYJ",
  "key10": "66g6wzuzuJaMbMrrHjg9XQtr4LTRumSHaZc85T9gkAnbDjpeJExos2NNLYhkePW4dyvWAQo3bpHUTBCjhhibxMiH",
  "key11": "3bDMHuxdqh8v2ZYrvNkQYc211z5HgNP5J63Pf8uyZrYFth7XDy4pEEwAYoxWi6UMj755KXVt56KBW1GLfQqY8tTG",
  "key12": "5wYn7MY1cCYwbmes6bKqwdiTbxeez6zRtDkBZDRTqXzjDq3k8cJyPsfD2Y7wf8ye3iMxEdCN6jm1bguzdHiYXfUU",
  "key13": "27HneVAUHYQs4jxFmTsHnu7sG5JCsAV7Ke72mJ8t1c4uA4eyzFHmEmQvfTDbiLE6bENXbT26koM3vdqTo94o8Ah9",
  "key14": "2akb6RZuuYjCEDGfMHnXVyqEnjCm9r85ZGoj4NRjkA7BMtxL8iJ4YS785Go3oWMmKQdj9nz1uC8dphhR8YUtVYvV",
  "key15": "4t99gemgRiVVvwq6UCuX84UFmKShZKFMs5F39hxCcuRmRzCmEqC8etXdr2WEzTMXP7GdtdUeegEWrbCnUHdmx4sn",
  "key16": "2SwGBHjiL6tKQjEHU7hSec8AHi5tMEx6DtW5bVURTYSD8BVnoNT3Y7cMjAkgSpdyuNPa1tTnQ5UWWtxXVoj6U5Kx",
  "key17": "Jzv6pYP3trmGT72eR6Cgz1fgMqwA9ziEKupYk24q1FYAzjNHEvyXXjH3fWWkJ16m5VNEqRbe16szutmKFrWcYge",
  "key18": "4GRmaPWRe6nL8S5i6nMDeXCVg4xCSFZ7FnNWYRRsNgKCYZVXDQhK1sRs9bw75WBLPdzSdpYydvFYBWu2gNREoCqz",
  "key19": "TwmyEqtCyzh5WWTFV9kgFRJFRCy3AwvNoXr6evhvzKd8MQ9vveoDL22thY1ptCV9mNTsT8qAtB2SL8dDrKnGUNY",
  "key20": "375dD99T16B1MP77n4haK65x1zDGeRtWmv8zQyBVdvXSvxV87ieuaJAFDpzZ2Zotr8qPPuwcj55Cono372Yr9sMw",
  "key21": "HiEsnrnnr6f5oMTKVYSEW7r2i7My6ZV4yPwzafMqJ3cXpeBfkjrhu3TvqYeqh4fEk5bPptuGGVpGgn6N4e2YZYn",
  "key22": "2FTU1qeMwr2vjaLq3YEo88tMrTUzLoXGKrzesstM9vhKXq3VsemCam62fg39Em9c2MmjvbZEqWFMiNYZE18psWYP",
  "key23": "m6AviZH9VF1fjCnLmizbMz7naBMf3sCiGkRHVns7QFJ9G9ELm8WGzDr8KeCHdFgcA6kJJAYcgtSk4qrDk9sV58t",
  "key24": "3ezt6SuY4R59V2H9xutTQb4G6LA13AvUZ7Wnn86hHedcLQ5P28ppeBVbesuVvNgqBczQ6UU2AkjXUApkzQco7xaY",
  "key25": "ow8CfovRoJoCdgPBVBjR5C47WXFtuszaSkenPJzjzcRauhWg1ixPx2LcD1dMdCCKzfZcswT86fk8ggohNeXRH57",
  "key26": "3pd9M6Y2uR1ecB3DYfKHG1RtrUjqLLwMtoYmhF8kbBP2eoFKtyXafrhESqnSAQuTV3EkdHNfCYdQanKcjqVSSoym",
  "key27": "MSHSHyWWP61U7ctZRUz5U5bx55QyMjGQnbg5U2pTeETdMvHs1KwqzLtfJcxv6QZnm1BE2avFVHoisQieAZkGMqB",
  "key28": "3ri5pn5i2zbALq4eMh1GHCdJBiNVbsauAHUpBZGJ4qz5Acrfg5eG353cQgCgaEfuMRsXVV9938w7f738vUFg7akA",
  "key29": "5eqQpjvjtvtSYL3cdCFzJiyqMxL4jBXtoR5JQASbpinSp35khGzfV8JvHmeA4jwXXhu55PqvdXV36G8Hbdurmn9T",
  "key30": "3ErtTD2eBzQcGh9qnErrsFC2drMeweBfTfposBfv8bG6tNyBNBZjsqFYcDih791kUKSALND4QYsKSxhSjkZe8krY",
  "key31": "KUBHD3nr1o62Bt4UfxmyVNetG7q2BGBrL1ZphpyBLdhS2d6thHJT25XicuWsHtFUC8xm6zgu9kALYUpPczYYDxX",
  "key32": "yxowyhGs6Y8vHEFSGPWhbqNnCK9XZUrx2KrQgMdLVuRn8BwsTQf6wjT1CowsLKWmgRvLpxjsGxfh6UHdZJgQCnz",
  "key33": "2EfHrFZHgAP5ZDFcaXExceV97ZKvBd2XcAyzLFz9qTUHqx2qYs3XsFxzjEpoPVsHDtCaXWFPyRTCFpzsCauUaMU9",
  "key34": "3gEDPdYNmXKAttLUiEFXppX6So7oCvgBseP5Vi3wE2Tg39HeARMhj2LvdWMUv3oS4SS6acnPCv7dPu2gcCB1AqLi",
  "key35": "fdaiogLNa9GqZLFobY8fR9XiCufY3kkGqCD45bzovy1KtwsECSZcdYN6Ye5aQaezvHUf2Njx58Uj6ZMTobsxqFp",
  "key36": "RvGwxKD2JNr1YndYkSjJjSDBcB9rieTpk2GAZR3fNgodmUkYXqVb1b82AULJTfvq7pqqjmHqY863ByfZiTrdSgZ",
  "key37": "5FHGtkr8Hgydz8SCuaveqQdotHmy93Hi6LDLBpWgVFNt1oLP33ujM17sQ7rZQtH3k2PM2UPfRqBLcRtp5xPVTCev",
  "key38": "3SxntVb2idzUDsZD1EzJBDFe4JVu2adyhbaJJzowUUxnakSe9KZSPLSJuqTNZKjqdHZyAMi53pjPVaJgEoqtkfeK",
  "key39": "2n1QGb1VNmB3cnaBetHW1QBCBFYLo6Y7BEzw7u7Xw1nhk7e4dfo3pi4yGve3NN3GJ88FMHX5jjtZwRxVPGt15hdN",
  "key40": "5RDgysaXhmnrgTDS4nG1pw2HSYLDWXHhsrxKqCKZ6LdGY3YRNaYiZLEjmYLaaGnJykjtCpUWXyjtL5Z8vRVe9L6z",
  "key41": "4mpaFwmtc2NJiJTzkvT7xkfuRdkCrdBJp6iGfbjSTqDRYC42kPPccCHeFDL4ts1N9ja6qsLRA4VyxvnLyjU8yhBh",
  "key42": "T8vepuuaNcfpzLQmYVH5g7R69WG9LjEJFH17kMvaxK29U6gQsREjGNaA7fwUcNcLaQDupNpz7qbW6uvt1yEzG3T",
  "key43": "38znhB28CgwGGYZbojGD75kq3zHBetfoN8c7yLRYs4X4aMMsKj67v6iJzqxAicoZR8w4A9J58FeFudgPa3BQD3sx",
  "key44": "4UsQTV544gppM8wULLDtu8kXSqxCh9sPV4ARnBWHLaoih2nT6AeXeJWnViWzAgncDwRC5PiZV18iErn6PwA2u2c9"
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
