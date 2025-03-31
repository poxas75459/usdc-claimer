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
    "5DzVQjuzWBVAZoxFgjopey4mkuHKGCzVWL8MG4yUP4V4JSne8WtupCRGBuA4eBmYXUPHnLMTZsce3Eyd9X5xEAxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61efygyc9MeiyRmK9cAZoXNi8tPmGrtkUj9Ta1hj48q7usxxBzQCDqktPkDg4WgPRm7Mu33noVn5bn2zhDh9rxEw",
  "key1": "NyU8eE5EcjBV1taHaxGHYpPh7JmPGPuGBGKpsmv9yzkVMAf66PT3Aoosq4aZReMZguyfnQtvdGMEGT1DiqwoH7m",
  "key2": "33bjoq7tNirJSBTWVdjg2J5cd77MLx1tpHZ1umNUcf9Leiy2tvEAhgGSc1nJz4y1pY6VpQWcvLVgJu8Pycxs4Ykb",
  "key3": "5QgQyNvt2RBV8TtqJdk3J4tmPe1RWq7SgcodEe5FkwonxaJEYR9RHPVdqrfpGi2cLEny7EGb5wUCFk5ZYpFuCdRx",
  "key4": "2r5hnMARBLGQkShU1feQRdczrLSWHJs7kAKD7wztXQHMGZYemNBS8mUVBAxCs61ULCYM16oEG7SZNiP7KbZX6qC9",
  "key5": "5pReDXuiY7k6r1Hrp5Yksm6RiXYpMqSjcrhrZqS1HwNjJFhKaG9KPYFFKjAAEMqPyVbEGQHdeYNZdUgspUjFi8vj",
  "key6": "3DYugjbFZUugX3FQyS97xUAEzEKYc1jFEds2EnT5vx2zgwBxwzZq2XAh4mwTzkLr6jv466rcJdJVNECcBSM4Wy9e",
  "key7": "3DyYeqnK8dZavtBVkVBvbg2C1NCUM4irNFuETnNU3ckmi9iQ68j1ot3PJxhdtBG5T4PuP7BkukymFo4c3qVBPZi2",
  "key8": "3BC6dv2a7yMWN39SaP62isheeDYGHGWLzCJzsKawyTvRi6bpVMbpSwrFwvpWQKkv17Q7QQi47AsQ1AK9txNryb8o",
  "key9": "Y9fooEcWyzGayTDwZBeFjNmsqpGYHoa2EgSHknqFr9CcMkZyKxRbvF6fJdLL1PYcsWY7JpJELmkUW7ry4yPwHm7",
  "key10": "238m5JhpgPjG74tLDDSHGQcXs6Px7gryBLTys3Vf5UyZ51dFGbRjva9jjnSMHvHxqZipcWtjQZ89KPEQeobcSMEL",
  "key11": "4JjVVYZzEsHYqjBo15seSkkHDqdY2zF7ndogijuAVijLNJC5JXRLpWGhbJQ6usvVKnM3MW6rtNkvZ8ALfJrawRRv",
  "key12": "75xv1yemhw7YcyyV2UE8d1SpDx97DaZb8cTBoDZFoG8H2j6zjHAogSKx3d2aMsURhwiFomZcSgaNDFC6JpF8tAp",
  "key13": "41y3C2swubub3DKmvC5Tu9SygKXyCqn5DjMbVhocsbvmvxywPGR5kvBg5kWKZEALmHXZizPDTDfuSKo9hLiYu5Ce",
  "key14": "d5MbjnXc4J4froMbdvemC7qBEVRE7BHBuEoarCvj6L78Cx9SEnPqdHZ3mmRbzFLCNnLrehEeeV9JQNA5gh9VR6d",
  "key15": "4JLPLioqfTNTrSzXd8bZyEKaQJTobZeG6ExhKddtSLSFyGJQEb5gy3zesSQmeyncoEZ3d91JnJakaT3WkGTyhE6k",
  "key16": "5av3VX7K4rfVPWpnTyj9issctWmHDAUW37yLYT4UJJFqyYXDRSMS4yTnHN4r498C5reuXtgpQCBMA2c9fdPfWs4j",
  "key17": "2Why91fv9YhsntKgtAqf6Ey8jkMTPhSiiXWvn42MGYSe2gtY7UnUi7VczNTw4tmuNWys5FEQoAF6eGMng3tZtgWg",
  "key18": "5V7hhmiBSRUiHQbgPJKTKUEPPhqYqQEo51mYKvb3H5g8DiA6rDT7sH2qHq1WDscBMHyux3bWTCSLvwfwre5pD7Nt",
  "key19": "EmXejVvFxhZt9RXEYPpsu1u59PMHLCCP8pKryL3XGaNEFbWs7mp6frTNgWicgXdL8aAuTJ9WN4tDWQtGX1nhcPo",
  "key20": "4aeifCpi7J6K1XNv8A9TPTLFEBYUrVjGcZgK28B1ug6jK5gZdbq66mPprSGvtAojmU29N8cJAmKAbx5uUBjdQEJz",
  "key21": "4QFVsUrceDKqsWjQbAqgiB1cJXKXfP8R7Aw1ZwVnodEfCjdWPB8LCowY3JDdFhmGYcAaxQ5HieRb3LmS3jFbh84V",
  "key22": "UWs2R2LrXmt2W5cheLNmq4Ptu1G5YqdTQ79H874UU3zDZaXj9i29apY5YaFgeZvLFSyLUs27kPvoPrxrYooDuSZ",
  "key23": "3VHtJ6X7mZi9QsK594926XQK4mMV71oPSibLM7qwusrJUjw47yDHqppck8bLXg6k1ytH9gjD5KETMxfzpZzgLvgg",
  "key24": "2TLdGPHzCEviMUfjvvJM3BUx1fXmh7T7B5LtGPfo8DNqTjEtk7YWN3VpWuQC8otm9oW1HQWv9xQvAhyzLjBfpbw",
  "key25": "3JTCs5wtBQgu2DnUtBk9ptMJ6gH72NZTM4nSfG2P4XiTi77KK7iwJ5gEZiqozm2RZUB1QcB1zjso1j3u6e3gJxAo",
  "key26": "4wXhCG1rUfrDuxooAZTWZeW163HMiMhZticoueGEng7vFryn5yZ8fM2mwHXVexdNXbdi4iYUiUH1pnCx84wut8te",
  "key27": "e5bA3vSWeTxzCYByoHZKU7KjD8nP421AdDZVn6M28DQcSoE1bggMdE49t32qyQMJmx1xdkrdqck12YfwAs1SHZt",
  "key28": "vJGyTzGBE1rFeaWMrENwiXox3M6ruNYko1eCVnrUA14ajMCmwtGfwwdbPMGLEyE9E6K2VoSuWshc87xNGQ64SFF",
  "key29": "4tgrLujycnr4vkVVHJ56WnAg5GXJDU4WmEF5z2kikCvV3UbNUeHwK82TBz547XPwmeUoRG38SanB512yy1LrG49h",
  "key30": "5Wc64rkLYdMvFxX1awDaGTMPVx2VwLM1tiw9SzWzqasrHHQPJtRHymyjfPSGiDLUqouh3tDDFy1eEFDKwmHi8xtp",
  "key31": "4gB55MhqcynpqYgtmhrLPMXxGgqrwCECYh2sB2FhYvgVodWiLr7yYXByhZkCiW52G78TycM9tnb6Z7qgcnbkAmUC",
  "key32": "2JbF3HYEktp2a1UjxtMpHrhmDK5GNmANYgWjbAbuPbYJi4MJK1V4jg5Cz6TkzMQo8J3Sh1CoGRuvMrVx5kZXj1a9",
  "key33": "2oHJNcACi3uzWzx32Ntk1yRBQC3aSbKFcv8EfpnBEmSztvaiPCxVs1AEGeNM98qKjzSTsWXXAaEUYZaZH3wdwtRR",
  "key34": "3ZQoarfATFJajL5a5j93EKDP4hwgAKEJaZrq6m3HbRdVRVBZKnoYWmZVzjvM2N1K4qx9bfh9YPfsm8dvmyht6wdX",
  "key35": "5PJUK5MVPGE1rqND8Y45EEEjyBPAXaFNi9hxcrYYkGJwUgzLFkCogmWQZ6vCkLvrS3MsqPz34E2buZpotkpED6PB",
  "key36": "7iCqzoV55FF6oQEjg8kHv5ozxzHbw6jbESCZDr92SFBT76nBC2u6dzbbTCPSdZvhr2s3bvopwpmfn3rcjiV6fK5",
  "key37": "2wxnNMP6Pz45KPHYoasXzzvv16sGxUZH2NzXFY3NzGTPSsKkG1F82jTXEXwLdyckT5mimPVZ3UkeKP74Mt9cHXWk",
  "key38": "hEWFxtM9LgN7nv64FVtAUiPd6djomxgRfrohi6vuNkWPdVdxgSzbxzq6VhpPmnzkqfQVQADRRTTv5j8PxXEPjXF"
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
