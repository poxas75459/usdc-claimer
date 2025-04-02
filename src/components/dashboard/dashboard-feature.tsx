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
    "3H1d6HnCT6auW5ihCJ4zeKjNXPzLKFtNJxd52EVSyCK1CxzbLx3Q6NyrAGYMm2SbFz7jkPekHGSuVJCrvARaAAsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YknvbHFTckiXnzqQefozVU5qEWQ1A2wCoFznPLwGsXxXsm7FivuVLhnv7XEL22gX4nMEjK274Qt1MhCioQHi299",
  "key1": "cM5obn9dbhx1JkVUaptyQfqbYzu9ncMCYBk3pZCjyPfq3gu4NXuPVRChGaXqWqvsi96Wzke5bzKhphsZyuUVGSL",
  "key2": "5GVse3JuPLsjXeGtn6nJEMsr7ZNAtYiUUzpiR56wSqjrxxcAvu2DzdfdjavfedpNgpDH43JwVxRG4EK75qKPzaJF",
  "key3": "3rwXUM5C92AHkuWpd7nsTGA2h3yoSWHz76FuMMmkhdzXYyg3yfTyJYKKRLY3fpEi4fDK2fuDJWq5K7RHV1GSG7q5",
  "key4": "28ULCJZRvJSe8noKV25c7Q7YSxsmbPhax9UMTQs83MwgzXmebd5c4HmHoJzt8RVxtuZY1oKVdrLEpxAYrzxdsfzA",
  "key5": "4haVTeMWJcBGTQi3SEK7gBDam8nAXT9Uj4gQtHKJSLecnqZNhnnk1vkA8pK3wbiq21jtwBtgPwGSrrKbMzHHK5LE",
  "key6": "3Tx12ZMLu5W4d1z54RXAFVuDmqCnfcugcnYdRipWAN9uyhz8skZRJzL4iX6ojSKE8uRknGzoiqdUoo5XgKYuumCr",
  "key7": "5PSNnJTZkfLvyAKhPT2wZYjjbGsA9NnqACMmB7CTs9WMYXkDrTpy1WHQ849FtAdQMPCyrWbgqWGiEBQN5rpqxNiS",
  "key8": "5Qy6AicrZJN54Vq38dPnYZbXihjmSXcmUpBtGEtVf7mRpBY2MhU6H8qaAEZv7Yceo22fFQhW7BMJwpXTmGXtU7eg",
  "key9": "65nuC28cRwb7oBChnnsr2UEvPmfAH1Hked9b2Liy2KFPQm84BmsHfhSwReqmXWntqwNoCf1zbXNBci6L132dAKoe",
  "key10": "tzWqfeaJyyUJezjkWMvQRGqpf611R7XjU8BHhvvhqQDFvueB5GxV6JWu89RN5VRP4NoZ9R4Gjpbaojr6YZYcJPp",
  "key11": "vohasWJserW1hTSMizKzjKVPpz5mPZfFYLTwUoAqeTQ29rXK8Ty24X51VfPixwu9RvwzfViydTfBH9anJF8a2dX",
  "key12": "3gQbtuUpwBegaSiRVQZ9zn3NJdWoy7eTqCqaXbfX74B1jeukK5M2RRSPBaVHutrGvG6WjcB2zbdT3h2dvXhYq2M7",
  "key13": "5yWxcGr35Eagauv7PB7N5djJs7JBQqD4oi2REUuPHWYznNGAbcgfJTRE8h7WLp3FH4oQJyTPW4ej2o68PwDsfCB1",
  "key14": "4qsNXvx8xUP8ogfSH7nr339rTeTJeBE6E8YUgYGeGEoSGiUWVQkkL3sRNNiF99abYqqW91hHcxHTH4EmUEiNJyrP",
  "key15": "2ruC2C7ViggY7K6ibA6RCLU2jhsrEraHe9HzrnHMRM4aavteGNDY33MLkfE4jtp78B1chCGd2pMP8aG9RMZwV58D",
  "key16": "5YRy8c5WwgjDqQpxzcRmrc1v3iPVKZUPqcgQ4bA9Dm9gr53KsJthS4yK7FjvFAA4LqTMSLja23a9TMUeWtysFJEX",
  "key17": "pJ65GmBhJZRE7UppTY48RwAeDREK5ctRX57BbkR5mTWXVYkvy6p4o3JLot4P3Yo3nST9i62TyC2w6SW2NWqeF4F",
  "key18": "4FzrEChTcgqrW1a7asUbXUqie5cn2eoLDzVnYmLxq3TZNhrK47oyvaHMCduTHPTD5jeQzNa5nFRQ37C3VdsBL4ES",
  "key19": "3QoNYwzBeHcdZt9wHJgUHpZNaFUDcVSLDMZnffUzkTUmvgLUrfTBTcqgXcbeVThJXM542zAqCnFiS7dNgbeYcFTf",
  "key20": "uWp3UDCh5xPMQcvb2PjA8BRawkq93Pjzk9vakpwhTBWPJexJRoQhf2Taw22EcCH86Q5Ndx3y347RGCB32g3Tim5",
  "key21": "VXmZ2WCoag5qBFLbXhKkXSHtxeCSQXdDboa15LuKdsXqvAUQ3RcYxApmpEzx34UG4avLAHKqBYKKjkP53c7ez2K",
  "key22": "5zYsZo8qRRe2PXYSnxndCTZqMnPvQDxo3xKVMQDWevV2bLFUuq4UJPoD6cas9k9zxHpQBCtd2fTZo8bBqi6RNMhx",
  "key23": "4ECfFiHC8kmpNdzP1m4KXmqgPPXjZQ6MgAn8viQQBz7nkMQ8f8Yd7awMgH5sq9SsyFwXmsBCgcBbr5kFJtpHzr6i",
  "key24": "3D8YYiJYo32Rk8eFhohbJKnCi6nKUf4caQK7tponRwNywaQgmHAEDEGsxv37b2R4BAEswynZgurMvMkBmB3Ex6X6",
  "key25": "564WQXV9YiNsHCtn1ix2VpxppcE52ebPjUXHvcQxNsAbCtyLMHuicimt4Dxj3Dj1atcKHAXigoxXuTytryFcSxtc",
  "key26": "2MqhasTs4bvqEDD4DRHDumAj4AkfUCvdBLCjjXCs8u1Mu1mDvFW9sNqtqfsaoPLVoeLEoQJWdvGe1dSt1q1eoqkZ",
  "key27": "3n2RFsTgb3AjqseyLrqJfq8yMp5Fcr6tThH1nG7F1FuevN1stYPGavGLJ7dprVM5f8keJA4V76RLTfX4WPQLHqUu",
  "key28": "3uzKY18ura217nQ7SaftGDRm18LifefvgNgPZgtvVhYL1kmsaow5TmxG6h7t1gtEZciFzdUNZRsMTpxXqvV28RxL",
  "key29": "qkDcfKobYY7neLxhcvxvz2wQW7tiFUHcCDV23fdD1QrLiXoRMenuPfA3HZuEa8eQNvkoVJGYBa1NQPcT2gMDdkv",
  "key30": "EPwYiwGp9CfTAVZPynJUsfaA5AnXiT9Vbdki9qcXqrBvaTTcxJsbnaC6pRuA9JkHz5nTCFgxKCR5tJ4cuFVBG8L",
  "key31": "5pKHTsSTY2Y4KTBXNsqyA5oyxYMxdY57gBcthW2yhdUE4RLyj3x6hJB126iaYDb7tz43wmntAXQUmtyG5FJ5V9tg",
  "key32": "mnuewQQsmWKhvV4KXfxdcnvnYBaCA1irA9rSSwZgewk9EtXbpdNwsWAXJVpEhRRiE6aeVctVo1AzVVTiNSzuC26",
  "key33": "2tbi6L3ySkCGLvYMorgjF5jopvzrw1TuqvsExP8HGccuYe6tHatzYfsNuaakQQaGecySuLJFNmjT64nCSU4ihdnh",
  "key34": "2NFbbc1PpHVcqYW4o2debRgtuWR8ydz5pmwRX4DXtWxactKszQSAmtx3zEaX7X9P12S4zuZMuikwwyi6Aw46Vtvf",
  "key35": "52Wg13uug6AAjMtraxMP9K9EXo8QHssuCnw6eg8wBzJckTWkij4XEzFwbAR5LBbMG5nSTE4sAbT1Snzy6CFiVrNX",
  "key36": "2STDEsBr57TTKzkpZLF9BD4Lj1mcRnTMo2rLsYgBBqSpvpzNicNnMo77c1jyNiaCtrXJCBu1mZxb4CbCXQT2TLfr",
  "key37": "31gjyXVvhZQgCsoCdpBeMNUuk5dZeUz5xd2WsT546Y9AEvGoJRxiTmCmRiUn7hW3NqxFDPP7i1cPUSixyWQ7qMnf",
  "key38": "2PDuukLnuJStEhNxqDDdBWfFmNNMESZU1a1V3gGrm9wB9jmHzzGu5Bytiyt3WdzqcAvuh8p21HDafN5SvQ8Wg59A",
  "key39": "5QWMAD88re7P7U2dSyMWwfMoJNhoDiS5vWWNtbBRfxLgA8dgx6jeNdFHDwUh1n4a1rinxst9Z1Gt9FBmy5LLPEHQ",
  "key40": "95AQxH2BQ9T3AvoVmQP3NmjsVzUkdDxfdzpuWALgztS6sbFL1igq8ufbfm2ePGCsEoG67axjjCLyUZcKWMDFvXA",
  "key41": "5sJn9Kfa1QRaVd1m8YpiaHnNnZcfFSH8ssVU31RwK7RvkJaYiCyrswbmSZUJxn19qDdwjEboFBrK9qfxpCNJrqUj"
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
