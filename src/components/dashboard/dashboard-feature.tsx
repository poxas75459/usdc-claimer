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
    "2HXZsLdJHBbTw5B8CGaJQWbgf5Aj2P9h81uhEq6R6aCquB7Q77XzjjDU7Z6TnzKbicvUhPAMBAUWbZg4PMm4DdGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FVeX1nBmPEsjSPAP4WCj9xcRYPbJRbG5huSrwvyfLzwk6HY2G6ystU1vdQzqsbswxFWcPQax97D12s1a2qy2MPC",
  "key1": "hKfNhR3WtQjhsRhqnVumAk4r84z7vZXhbtTd3cP5CmvXqyyFU2ZfrSN6To9juin542LHjMRPVvQYF2ZAGVDdT6m",
  "key2": "rS1WazEvrtq6y3VKNDqdGck16vFCSi1DEnGuUaKc1JgWkQqPQmUYeWumTQRBch6zo8mJooi7z6BBHpMQaKty3U2",
  "key3": "3hUhazhbJEAmz7qCbv2L3Zodof82pcpXUZeHAReXVSSceCwpQ2FHX1vLMMbY14Wr2ZYeWf47qDfvDfhaF3Qf6eM8",
  "key4": "2KMUCtDWJottipezgC461FiZQrHdFtRnVG8X2tNiQYnvXVTBjqYY2aRVMSQtUe7eTZNbMrCd7im7kwXs7WmkLj5d",
  "key5": "5ew2AtewafFrzCmMxgZvrWtURhFq36jXRtEJQU3SLR9X3qZnsmvPogvKYYfmdtoN94C6ewcsYtzSAwxU8ijDHQy",
  "key6": "2eJc819b46EeZdK4eGTKkfYsStCs7QyHQvwRfJdpuzFdBvrWpVQC8m6yxzWHt1xvyvdrPioqyX1FkQgbwZxZRC1f",
  "key7": "1DrukBeRUeWgc5k6L1W3zA83MVkV4trbcyTAiU78kHGAbUmyKPBsrRjTRMv6dVUgLbqPvSBeoKyLwAVK8RUjNv7",
  "key8": "4R8AESRaWLwcJa3yNU2M2Cg5kTeBkhzb2d7xwQMGHhK2T84w7vJbNMpzitpFCfNccxnQmLnnx2C3NwHcPB2nRuxq",
  "key9": "5kSbZbzfZtYCtvkMw6Ac37kHvY93QTc2hzy3vrzk9eG5NBjYoPwX7K9gEvHKcaiA75M86DfiWuunjvhDaycV1zeG",
  "key10": "2Sk21xLVok1VXBg9G3ncU8hwaMhV9sSpZRVCXakQJd3ZdY1zB24YNf4RTSLUfXSigZC9pDccLVCGwpkmnJB8nP9A",
  "key11": "3TXV1wpvur1HwefghByp1kNVrkq2eHWRdeRKqsKNYmUBChWumb4BEigJ7tW1M5aQP27EZyrCH3MUtKmaPGoEyxvo",
  "key12": "21ET5cznC7Keu8kcsRtkVvNFjfmwyoW8nBUSfyiRP6QL8at7tLWADQWGntAbsnzQq3V8Cmef4LTgyvNwRXRUkZmg",
  "key13": "4tnGKuFaPJp1dhzC3HnJ62H9X5XqFTpUkyTLds7tMQNJU2gzQ3wYCjjiasxG5vn2tV1WUKJqg8FmHt8KhuJKH299",
  "key14": "2RwnNm4SMaMcgYHAYYLhhAAXPiTTen3tpg5JBjp9pA7nbYCim5inyJGVmL3h2Hzbe9EcmPL7syg87pJonGxfZUbF",
  "key15": "fRHrhFc2vohREV2KTGoMQGHRNtWn7QVz1nGokAxUSwjWM2TTHeQ4LeJi7z8xpNtEGvAVdupBGXRWUfteCn6AHrN",
  "key16": "Z9wohnAs57uDKVr1yn1F9uirCiw5headmd5m6aq2AQTzfMMHUVjvSvDTH1i9Zg1c6A9ykTNKJB3zRsjL1V7YVvJ",
  "key17": "4o99yF9CsSnfmXvHLoz6n1Anpt2UgXerxY1M7SmFbdFyGin82MHjcV8fMiTxwkQYU7mUt9tm81Zajs7XSEN1WsU8",
  "key18": "2hvbFq9U3yqevN9qBDk4XHpdRJ516PACHpXycwd6aLawXSHboWhAR3Qmw1ikiJBW8pBfoT7Qn1dJK27ep5gqmy79",
  "key19": "2KYSAH8gA9JQXUHH1vLiVgTM7ce4gHbtwnsm9M7peNYaUYZto4sfeNGffpmRXZeTZ1D924vviK2DseGxS5dxgvEt",
  "key20": "inc8zqd6CVo2vAjtT8n8dqsRTd1bi4BTJAkv46ayXa11cAVey5PtNp5UhJgNBf1rJA9LMsujBgcHMcKtsci7wfe",
  "key21": "2q1mYizvZapyUT3QQ5aHoCLvA9rVZhxADKPuctpt88xPotTW6zynMi9QMeanGTdEb2mH36E4wVVVpTRiNudxQBK7",
  "key22": "zEUhdo7bzNDdHLu4aNVvrBQhXx756SgUrP7m9VQ6e7KXDMTsCF4vRgUjEsKkq2AMEmCtbWhozfLb2nEmNpPwBwo",
  "key23": "4W3ch9UCnkJWaaWA6m5br1NYqc9ygrxU6q6mBRpma7dHxNt2i2CnaJHmBDkAyXJUcE8nXfNyw1iuRVLNu8aZWh44",
  "key24": "5ZXrrz6hvV2ncgU4SEGg6NBKXu2xyd17WpVcj8Ab5WGCzbS2TpDCUjsVZQPYTwAJtcEcc7a8WSAgMKeFTkci6jEP",
  "key25": "2a7xxASiqJsK6cDH5TSzXtP1NFyxXY763gLdo6MCnR48jzn4GE7UDgEfg9uXc8KuTTTLHPWmdS2myRM2GC7mwmJY",
  "key26": "5CmyEpWLZ7pavtvH2j8rtzyyhWuHDHn71U5wmqQsffkDiSrJtRzC7bDypmF9UG17wZ6dnC4RSd8NJcZvWC2NSb4D",
  "key27": "2R4Zdv15Q76Y755eVNHWAsh99iJJTvLEC64vaJ1GtYpfCrayLZDqs4vDY7VBcDb1DuGUMRRHcEMPWT1YbR4Bi1YU",
  "key28": "3CdccztEMhS4b6W2XAzgzxZ2vnPTFCXsTUFzYAPPhrWDFCJ7vLeabrkVEZtfMcFkBJS5E42pzfvDQHAYDztRa7NZ",
  "key29": "2hZcimmVWnZPxQ2GxbHgj9zTcKuwiEcdwVx16hftbVejc1oUVFVawsKpxgjAxGCy52DSBAwTcBhx5xXgKzubivJL",
  "key30": "3UbECpDHb97gzYSFe8EB34T3XtH2wq7L97kh5pScPEUhzN16oBSzZWV2QjJBZLakV8NUZzQ6AjKhtcHQuz35cLkh",
  "key31": "wr8ozx2rh4dPfWUoFDPSGysFbQPH63wwLtUo6CCLoNQKFhBXe53WcfYfdyV1HHCFGFY6TnzwMk3RpRmXJUXcfw4",
  "key32": "3FVCugyk9Cx8NqAiYTbQiPRresMJ9tTUmXtcxV5KCdLuE7KxaiWLxhbJ6t56oiFS2TNPFw3NRHN8fr5jfMTeEJBd",
  "key33": "5x4JuAV5qTpvSzk3zAfQnXTxGJMfjJ8GCnxesxpTca9Ny3jEoXHPQDxWxHaSZtZnN7FiFKhFXCFDpqeBewJewJ7w"
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
