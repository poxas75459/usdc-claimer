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
    "4sJqJW2TDhr6VhRe7mYcoL54bcEpPf8jNiduPJASNXTexKQLKCiAqTyeAeBZrnA4R7P7DB2CR92BM2XHTihwcux8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwqPwzA416SwAxiUcx4EgnQXD1seESLWTfRdWpvBZ1ChUHUupyRoA3F6XTrrsU8US4aRvjosBBSSVGh23P1KBzK",
  "key1": "5F3TdaTadzjo2WrUE4XPz1seCNQF6z92Q8DALLu3arGi8e3hQwrANArQNobrW86KRGyJcjiVmvTEtwL9aJEZAcj",
  "key2": "4N8zevt7jwyE8V9Uu694W5w84RrjVngqzN1VieNAMbNmVS2WwetHnaNd1LCQG523UycJxcwSM2uvwoaJgsn2Xdur",
  "key3": "5mMfuhmPuSPd3s1QEzJ6YisB2cGjgjukpXbCV8moMMNzxfVjbZAn7dht5AmRsYShCSKuas1j8A5C8pJTSJa4YREj",
  "key4": "dfDhvEvXT8M3tbtpNLZT1KSedUATDp2L3SqZZE8BRYzHDDTD1DCvsy2AiP5jwPPoHApsdQLsFyRDexhKPjc1S8M",
  "key5": "usg918rhoamYSwkhRChEuRPFhLnfZ2FAestkHG6vh8BCv53boHAMXzBZYZ3P9sf9M2Ub4WThZF6ywat954SCKyn",
  "key6": "3mbv3CcQN8QVaKXAU9KXr2fv74RbFiqKtE5cScdt75XEk2N2ZReMBpsQBpTcmcz8cUsyzLXeNeN97cWKRWhV1bpu",
  "key7": "3Z9my3msWjw8xQ23hJzGRD1TWPKRMHe4EBDyN9VmH2khFQ9p4hp9QtpAAFpCvpXJGqCxKZx6qjucCHhEjnGBXKcu",
  "key8": "4BgACUoNePatTbH1pEprbJLLh46RaacWVgX62huhHi2d2YWGGZ43CVQnBXL36k6Hr46X5qBgRUkbSTswAAekSNut",
  "key9": "5EBa23vXQbdfLg39quXzYNrpXD7K9oofrfWXrc2A52KaeQqwujbB38vpifkeRUYMSRHwLMxZ2LFu1ExmxuHo1ARu",
  "key10": "hsrfXAkx7bo8M99vgWbxLjmpn7ehxf3x8u7ofxDUgM1E8hdR6nahWqvfTSsXd3uXpbvLzXVWPiBtCLHFyLfttGT",
  "key11": "4a5ER7MuHo8u6NaceKcie9j9ShCZuC9gFUxQpk7kATv4Yj9QxFofofC5K8AtJ5CQTzzSeu96BZ2xwb1B3NqSq9Ex",
  "key12": "2bqoJkUSwKPcFqcLXY55b37vU2gTeSgyTCp4JogSwXgSZEUYDR6kgwkwtTGZ1xMXyRZvS3nfYr8cMF4wfUbHxJEN",
  "key13": "2SRZ5BRRStVdM4K57AmRWBWVV4spxRWWFPzKUhDLJCj6qTE9UQrncEhmWfV9edVvYdoZVdJCMbiGjaGZj9hrQQtY",
  "key14": "5QcrFCGnP9tJr8WNQshMrurBS6hFsR9ezk3otpeSwFy7XyLgeixuC1R3kedZyKELphKSQVBCcHFBy7ZSfhMDLKmA",
  "key15": "3dvbcZAU54UA2KhSDVs83GoMXzRpNHqg3Txn7SBAeZmdznoyGKesUkVHpKGjWovLhgYhYANTuT7GWKo5anrBGEh7",
  "key16": "4Z7VGZjuZDSuzpHdJc4GizvNbAjZUnRKkRmgXdofg7qopDqaLkv2bJd4YbhURKRNVJ5bw3H28vEVTBuDX35uBCXw",
  "key17": "2iAnFQvoQPCsRUG7F6E5ihcNmPxhxj99PuJVLvyHdJoS9mZEH7dWSsYy7GU8ir1opNDzqmsgnxeLv9yS6wFibj1G",
  "key18": "5eqQAfkv9aaLKHfaF8HKXtraRj4xC9LeHJAmZXuiBb3PjtQWkbLs4UtevDSCakYcnjGw8nFJyP8nmLTjFS5zMqCH",
  "key19": "58xxRnvMxLj9QKHBjsnpAoiQQetzsoHhA5fFWjVN1dajwfm3HYPxtm3qLGJUrRuYm2m8mWV1xhfDK2zXFX2fRugc",
  "key20": "4Kk9383D6NpS2Wy1WGFiaZdeHSy4XVBEpgYghz1MGZGWf5njeCpUkqaxj9uNjYspQaMxcBTafRiaQHzLRmr4UPZR",
  "key21": "54X8cx8ivdTyv1FEF9z8QA6yTcxxDtRpgRCfp8RC8aAJ6ShMcYLbeHtHeUHKcaM8WxH6FDu3E6zdbMqEPgLgsxrX",
  "key22": "32tWNHqqyXpTMss1ftJJWUpnXdr9bFHdtG6fbGk7g47drg1n49b1LXYoVjBxqXXtqSX5DZ1RjgLnd7hRTUYtvPJs",
  "key23": "5SUAuYCv7283xXu3iBWxjyUUuvgNQ6YqnmEZDWS4KcSUE2oFBqLKVBhveQyLuaW4FEeMaJA8PNLJUYk1Jd9c88en",
  "key24": "h8FVpgoANNzVJy88bWuiD2Sj5HoU1qe4yVVkEui2WH2cvry4spcLJRQvDC7p6XGAWtxKqjPPFb1NqRJnLwEyQt3",
  "key25": "4EYoJQDusNrvCe6bEzaXah9iTatJFPsj7uPEHNaehUXLBAxyYqfsv5HV3ztFuLiKYhFAKjF63aDDPVEfRaKiT9mB",
  "key26": "PKRL3cgi9eqN9JRTBdMaKn48FWhJMivxEXvAdir5NBwbWxuVPQTeigxFHtU31F6D6pjpCNc8CHbumfuWSFHTovy",
  "key27": "3TXLL3K9yzG169Y5AZWCXHG6rkwHS3KCxy3HCBfPuW7CMiWG2otguksSSCjrSqHA6zixVJMj2U7EjW1wtUXTZh68",
  "key28": "5RPYw6QCzrKUQH83ys6Y3RmdS42Tto8SKHDCa5Jb1ybT2SoRyQy8pXeUc8YszgXZLwGVdcFVW6btWpndjuZD5G5n",
  "key29": "4oXEqrT5kMt39YJoF2s4Cvu48SCR4MJmi5F4VaePL982SJbC6NRYy6hKgyZfsTuEXDGGYzkbVrMvg4Xns3HqeZTH",
  "key30": "3EigrKcvMcGEd96781aMZbHmSvxXb4VFXKdhsyFCQH8TPkVdGgpWQriFuU6owhmQ6dwpube2eTsQjEao2Tpgw8Y1",
  "key31": "3CrhtCgQAi3hryg4ytxqcUd8nFQr5BRRW95J9dJGrDZov14XwdJWknQQ4D7rU7Qnm3JZMRQHGjgwiAkjFAtGYHTZ",
  "key32": "ufkGDXng5B11Jzyv2kMQXJqhauvW9fK5HQRpxWwWUfTYaVZAsjgfs2o7H2BKwNGBvkL1nfuUwmPGKM9ie7xNKVk",
  "key33": "5iHvPHYcs8aqRRd4kYwnUsT22FAyCK4d23b4km2dTTp15pZCsLd7og7PYvgzy8ZjkMD7Ststdj99Qj4a8gXTaySe",
  "key34": "R1G8bJnNdQGDUAMQ3gYpAsxJPbixLagy2Rzx66PfJ4dkfPRjkv4epABrtKqTx26zn9mfPjTAbp7aHy75Mo4me8T",
  "key35": "WmHf6pf49tTLoV4MrWTntJSnQ9kC1mY224rFgoHZns6XRsv3ta754bJBTDaLwwbDzsgPnTqMVGiFstDxoFAXXnp",
  "key36": "42eG4hWCtWGELVKkSquCaUpH6To4GkX2mPadJngVufKH2VLZteRurXJt9AZwDF8iMSkL7MtqoNxEKGHcxyr2oNih",
  "key37": "4CJMjzxUfLnLnL1VXiw3fHSEaU1zdLpLyUvXhnLuyE45WuRSmvxQQHPuFgEHNNdnf9QGe1mBqvDq3oc2r5zF9UW8",
  "key38": "2mtxLh4NB4SWvHdWbyvy9fXRr2mWDAsM57AfopWc5QAEC8j7urtsT3GMjFHkcLNazed8UeerHyqvPdzoRGoEgYNB",
  "key39": "4e3T8LymYqsBLS4hyLYns5dYvhh1W43A2gTe4kzs5Nrr7sueEfQGTihNUjKFEBwghUUrTJwqR2tXAzqPNYTTpt7g",
  "key40": "57aotfWJoifwDVBVGpcSnfQouwujWLXGUwmbNkvKbbnYUYHSdURojkDjAY8CnxBEC7hvjQECsDyxU2rour66H3fR",
  "key41": "5Zk1Eu7ErLYtNzCeJMfBzBTkfz3atFEhJQseiiVh3CDM8yvVcDkmnPRo2yD6Z77mAc71eF57Astx3mrXgf2dzq3U",
  "key42": "23cQ1bCFqoExdQuZcHAehyFDtaXBvnLPAbfW3NU1j4gBihSUiYNjABuZ7kdN1zqHNUDQszGJro1eVHfEnGtT7RdN",
  "key43": "3ZAPtraov2NzsVVtyvxyotQcvrXCdJYnphHBqwEqxKn5D6eC7PzZaBQuWHwbf65M4gU1KuEr4wx8XVRambNBPuhA",
  "key44": "48v3W4UhQMSH2q7KiwGG1oAdsN9VizPrKtDqD1Bn7FCokq9ofRqBBYBkkTX1eRUuRAGYDfAT3rwr8KXzy1aWyboo",
  "key45": "58oMcC7nfwTrHGBWL5KNexizdxTbJzrTfcLuXkWEVrXxj1qz6s7sBs4pxnuRPxn8tMeDv7p3Ny2774YAqjXGFzPe"
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
