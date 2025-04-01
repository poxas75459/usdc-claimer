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
    "4XYD9GYWMY1nkiKqKMJfj4dhtffZgeiihaZPbmFV9EMaJju9dRTDu4qQMqEP4V74hibWXah4vkq1kkEDgHGHUCEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooNbKzjLshe8jVo5wRQvXdwHnrN1eTt5PLNmyRCygW1SBkuEM4aQchzMrjKscftHAt1VPZXr37PT1dFwcQzM2wP",
  "key1": "4MLMA5BZ33p8qDT9oHnj1NjeXigjWkQiBPBxe31zrVH3nHuWFVE8vvkoda1puSvNjRESjyofQFmpswQknG1yeuM",
  "key2": "4SP7pyHdynNrM7ZKBApbjn41TyRjQ7Xs3DcLoNBfrU1BpSaKdrPR77AcVinYkMY8Y3wyM1AJh1sdj4SZT5JcB5H8",
  "key3": "5DcHtd9GTTYZcizQko4U5G8N5jp6eTWHm5nKosqaqTgmLSNjy3sLjdizukkEU2fb4RJvVUNfqrRkoNeBi7e5fvRi",
  "key4": "4b7kPaqDa6abNGMvbtGT3NKjRyVsT6vB1qqZNH8hRm822yGM1aJ8cUzo43sZgCnL47Sr4voWTjGY8kve2PRpFscg",
  "key5": "4hVZTrexLj6ZhNqoSpx66bmUSKectioKB9NT1TQfumm1gDf31pALS6idpoRZ9e9N3twMQGvGgTFSmGAmLNNnqExX",
  "key6": "jMqKBBfm2YFKrSxx1yzoig3K9MwdtR5hLFgG8PZz1TaxuRHCHFDPHADaN2XMeC5x4jRkJWDTu93hHgjo18Cpk31",
  "key7": "41L4xipW1m35qyNCVH2pGPDKAUMsF1EpsfVrtEeUQsxs3za1QURastpP3MxFjRsiqoaqWkuJhtmurrdEiDbMRtrR",
  "key8": "26aNghcde189u8srTFsCn7TZkXwgLe5smQxe4cjjR1LyJt9K7uXxNNjQyFcA6RbTgSmpXWottjWuCWyFZM3F4bHB",
  "key9": "5PS62hpiPg94k5aJWJbS1wXNbAgAh2hzPzYGpK7wVaStEBZJNR3hcj3DcjXxUWZmVYQkgFD2UaMdaidRZP1jGaaS",
  "key10": "3QTQCNsSfRnzcHsM3T6KAL1R34NZqLTTemWxqt8Qdkke5CyXiE6s58ZkZZF4xbaXsCtESjr2gW5DiqdR9GCqRi54",
  "key11": "emmViRVUCjTGsZyDbMgDjBHp1iNdMFtijj9QoqPPnb9yje89Ps3PxLNF4sPd9racRazZnHzvXqDPQMWCXPcMtwc",
  "key12": "3CHoLg6JtED5jbmZqeZE3697thoAFoEDu1gEQNKAq7gpnxbcQ3TtqJNqrdnZ3vipBK8JCxuETCJTqZEyS3ZcczyN",
  "key13": "4DAt46vHgkhG28uRCFSF9MNKeUiL3PfVU3GTEgyi3HH9YdHVYAGD78koYLrm4aZSCTdwqFS7daEKndryThrPyHHF",
  "key14": "2kqHTdGZAiQaFrZD1Bmr5XHuceonFXoohKS2sxyz67PWpgATLyUWDbvA1jjwyWdNNhdhg1TKA1527isQ8Wo5PAyQ",
  "key15": "4hUE1aSkXY3Xdip6rSULNTnbaURsekmCE16PkzETjSggQhEVGacE4zJvV3hXzw5KGEY97bncLrNPZLhFAVHhxtVZ",
  "key16": "4yNfGXSHd89jTXUSXkS325vmZFMBceFiJbz83ePiWVc7JnNLghvhBWw5b3epF2Ki2ooSoqwG5bihNbERTURt5iAi",
  "key17": "U7nAe5nRrmXbrME6vp4jJRyiGvj8sqaBb2kpPLCBKn6ExKiGYecKAAVHzT7FsftRCUKs16wVyEBbTxv6JbnYPrD",
  "key18": "4jyixqMdeiAPjk6SgTELxp5bZhYqb4HHhbKk6TAwY5KM1p23iV8eUNYZedc7rJvFk8ASJqnkS1YtXqLcpnrsMPz4",
  "key19": "5u4nvgBHKR4eDL6fvLnR983Q7U2DvCTi4XpVqALe49gMcALESseomAbpqXT56yFhuUW22tW8coYLqyaGVnNcUuLg",
  "key20": "5LXwcTsgpives3radYbQR1ZQQbwasBeBKDxhtrZEdzj6BZ1tj85yYq3wx1Muyk2mHwtmA9ERgVvMwNNAqG6Wf6Bm",
  "key21": "5aNXysBtum18Ap9BXkDGuj7M74rCCTeZJGdd9QhD8x2jK8AKHoyDRH2XwpdXZoNhpMgp3kB639osMovqKzhCYQ82",
  "key22": "gqgErAjkdxbW4QDVcdjHgV4fTBXFKaebnabEx29doaRPWXiYHEWMsnaUf11wnUTMTDaCDcASP4XR4daLibkzyoG",
  "key23": "3nwvUeer3ZVxknvfNaJTYTgaUXF1FbwoYmf9x3V6VT9CMxHmVSvswz3QStvdUpQXZGNrHhuQsPqLgb6VaaWK6bKU",
  "key24": "B9ogz3oYP1h3fP8G89tQGuXYyzVxP8Lr3XnwZrTttp6zjY1b2A24zoiZYNrMWYpUpawwvtCBcZpocCzXVMREKXT",
  "key25": "56yaY9cK3hXQWjnRQ5pXJKfUdSpNpMdJCCGTbixnaxT1X5u6zWyjTdpUdTsXZ7Zdg1HXK49o7GbsZawVNzTLddxK",
  "key26": "3bMA9F7nsGed9UG2pU8rsc1pp6ehCY1nasMwayYoRnnMBECQmrJxLyXanEHxnc5syAQXMH3gKusprzwaJKPUkLq6",
  "key27": "3WqsZthw2CfEb5xZAAoNopjEiVaVnEVve1CKyQmut1D46DXwFCRdjPdZ7ixjvJmLUE8rj4Hb8172C2bXmMRD69XY",
  "key28": "2WJWKNfdeb7L6aNGavJ5GzwdKtGnfJGdxDPZo2WABcHoCJWiSvMJ1bxk5qtjDd9jCznajB8hXXFn11Lvy2GxcXtg",
  "key29": "5yU1Mr7ywBf7qcNjJcGcdZZMVp9oEAjSxxFsqCj2N7qmux3Bq9bsJxSvTeGfpyqu7nxDbWuUA1EdW7n6St37homo",
  "key30": "EXMpNsTxe1za1SBxYvwvkeAxCvxmChftxXDQgeTPjT8cbnX7w6zeSWXzrH4DJ8UwmutsiswbUAsMK84KLwopiH5",
  "key31": "3pprz3jwGuHrbCg6jjtuRztWCx18BcXsQVNMh6vxfffDKZwzsaK45QbyYha9EEUYCj1vkTYEv8oETC2Am3iSMr5N",
  "key32": "4rKoV8Ng3kL6oP1o8pwqUzPECsMnca8Ci7zm1R2WeuzvNcJgG9gH2F7BC8N3QDCtkg1LkzsHJKawDVNDv1mX5NFv",
  "key33": "2QuMSGHDqCDHqfNNHpTYrTWfSUSEdVjCnuk8PNoyieWwbsRGJbjZhnGUqmm3bLmd4cjf9t6dff8jMJ65W55ZNnwF",
  "key34": "5Z31iLKYhrmShCgHfL14hhYjhCfUmZ15PjTmESW9jhZ9hSKh8rAHBAty42EtQkDy3xBrZX6QfuQYaNwuYv3bVk52",
  "key35": "4XJ4JgfxNf8HxMGuNyjNFBJeXytEMk8VdMXQTXCXeyMpwNrfE4ZRtMR1oSbKNaLGFR2iac3RREw4eboGhSQFmAj9",
  "key36": "5prxQ2zY4kmh7LPAH9qSZLdxZobez9T4UCj2jM6NQ8hAZL7rsAZfFaRrkSyaAhTS28T1X5A9cujDFSHPK7n2RPVL",
  "key37": "3yZMPZKZ2mCkYmmxDuUY2pr59wTnC4WkbwsTbWoLsaY7RRMWjhZCBd69yVDj1UctoFrt1xDBQ77AKKx6E9bNRBMy",
  "key38": "67Jgq6Q8TLPB15xEmUR7diQbM5u4Mjw9XmYfiRQwaj2vZ8bubLbi7J6RSz2jiSZbhBQuftL9bSKQ2qzcqRPowu8T",
  "key39": "5Anm7Yo1LFfshKXvNqB5oBGnwKzvJj78MNDoiHhHF7bx48jwt1WwqBNy9xfCoBd8v4E2j4CCqonC93mbd4VhKSed",
  "key40": "4a6HK4oGwzBoWFgvJQjv9S53JTLpx3bWTuiPzxkq5HnEsgqCA1LAkvoqbWvDehAUprTGgCPLKr1negn6Vbv8PkAr"
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
