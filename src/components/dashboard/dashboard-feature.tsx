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
    "22SYzb28gYnE9WjWxd7JxJMXYp4SA3RyL93pxAHwv8dcmtEvTQkvofoqL1VsX5zrv7Sf24ThihZ8w6QK1UaH1TRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mY1tTNmLdr333LvHsLtXTgcV6WtN2LNF3byLZpFxTDCQydMPB5VqYcoMr8z5mMDZU7fQvgTtVvWoxZ6yVG8M8RK",
  "key1": "5Sn21xWmTr4TK2MR3DJ8hvpJbyCwGf1gYjs1KeyAVAjZGVmgwpj51EApYhaqZPnL5aQtUgcsSBnyqt8vx1zeakAZ",
  "key2": "24XZJMJuptAMfYLNMdEtqro9sxtqAQcduzEeFb5QWErkSPhmWrpUyFG5pWZdgJUjKKzsGtso633fKvhrdF572oea",
  "key3": "2mrdn3tLuX9NmADytpB2dhbVcd6tNFd32XpKrgk2yyy7wVqJrvTatmJyEBU4Btyq41UwpZt4SeLhEcdKkZNcMA1g",
  "key4": "47mWMda5K6CH2qkve34RTPfLXvK2XDeBp7KLSM2XMFvb6Zrx8Vb8CHSubbGaZ638ctk3xBsty1PrRiZPbQ7kYr8m",
  "key5": "2ZscYB9u1ZNM1SVK9kvPVuVKU5WiCrYBofkQfvbzubuUW7CfajiagPHQzBQZq2myLTpx3XrfMzWHzLQZ9cedsVBG",
  "key6": "42suazFFdhEYydXjoDMRZqhqbrdzCNquDr98u2x5JJR2dpdaFZSbgzRkDRzyNZqqqtxahKrpTKfVgHi4vr1UweYS",
  "key7": "KMKUd5J4ZLgDcDSg78NdAA1MPMmTBs6kais6wkipVZir4Jwm5LkASsrzGxRSc5ud4WFPgXpbwLmza3Z62iXEPN9",
  "key8": "3eDi5BZ5oLsT3VeYTr2uh72o2pwCXMWRvMtWWpZsGfXdqLWfnF6jtEFeLuxKBpenixN8LQZ1KkjdN2SoHMLbZT1c",
  "key9": "56RaPDkRjHVuB3o1BeRhZVGSEhZtcHV5pAoTpTajtBXAeLWdg7Ja7mqYcY77BarBxc9if9dXoi9QpcpgUSenYrB2",
  "key10": "35XtGZftFkVC1rqrwJPcuVLVvKwjzP8xRgNcn3AQbVJmHSbi2GirNZmxS88r91PgysVUFtBYnknBJV4i1A24G3Z4",
  "key11": "RfMydFZ5s2UM247NEs2awgZDuCfxX8VANWuEm4wsM9MBvu1CtbkboQnpR4w4H3eaa3PqR21S6T7iHD45Ef2hgXW",
  "key12": "kRTBpbGMtzYEyJomWbeymMcxBf6Vkr59hr6aY4pbt23MwngCno7QcQXPgSaLMv3y8Aj14KCPYNj2jRzcPgASHML",
  "key13": "5FCGMLwqMQRu2sSMCaSyXooqAdgdzASbCkxRHaPJ2R6bxrA3e2gWjscaUV3XPjaQUtcSajTw1GK3MRjFUFRmLjZ6",
  "key14": "2nDVAf4RM2jC64QGGCrj2jN9u4rCegcjkAUfArV6VF2gs94tVwdXDp6ULxrwrJ96bF3PUKuUrB4EoYLqfzKmHSGx",
  "key15": "5CAJgDr42MSQ7S4gESv7aC1d8UkLcF3qr2G7dcL24UdCjivaTYBCdJA55ACcvPuupD1S4tfPnoKu8FzdGwWb45NU",
  "key16": "3kHqJKcjSerXviAZUCENuYag14avxTE4jrzbyWaoyaSCfSHYNTNRGM4fbAFLrEeKzePhzFKLENhrxXCarUFZWprL",
  "key17": "2a31NADnYW1mRPtaEHhWHxdWGRgvSTEwwSkXzuAYWt5ptciP9ScgBeA12JQ2J53NNyfCc1dcJFTTqewXHBzwaseY",
  "key18": "3No2xmrGsDksGPdMiqwmVXiPNreXTNkpXhbokyTPk5mjk8d2xUs5fxLFLhTSUWjcR8UsRsKbgT177MMUvjHzDnPV",
  "key19": "hEmA2bomBP1ZXN3fHLpMVncCEA25njTwZtwq1nbJR64vngfeaha2HT82rfRt9PG5Wy1vz8TWmhZPjg2492A8CXQ",
  "key20": "3xJE8NMwhHNKZadQtruVbQmSkTXE6CeY2s9RrG1f4FMeJBhofew35HHAEq999TZ5mv4ap1nyzWx39HtDrRsWAQ93",
  "key21": "2SHuR7fGYjYcjPzXpieMnx44KYVt9TPQDA2PJ7r2YLW2L3zc6Us4kdDAiHCdqZLPzgxAjuophH7saGihd5s2H3eE",
  "key22": "3eRgtkkFKYBGasjduaRWmc5vedAddhCyxNmb8TMK9fQEC4bppnpwXtFSkUfqCijTaqobCojVK7J2x6MARmF6BTuY",
  "key23": "3W8SHF3niqqXBMUzr18JQwLjvnuyemhCRurQwrc7AzYJW9uPpHXJqFf4hADWKCybG8aSVfpp4BwafU8PcbJBK6mH",
  "key24": "2YrTSGur9pbpoR3UNfYXdpmF9koJkf728xk71BUZ47LiJQwhTVesNBcF7Xs2XKa4RKb3MNCP3FWTbh5bJNSqup9e",
  "key25": "2vRBoF6binr3jyGUCBq3R23dPPyuyeY8TWXSH1TsBx7wu5XbzrEw88LgDi96nH27GbAxH8HuXF8uztzpoXusqAVj",
  "key26": "676ycwhFtKikPBYS6j8uq3Gs7veYSkmeRMHdZSoqdyjcLLsNEEuTEXfUi3YxBzD4Ft8tDNtaU7UAdfGwqMF8M6GY",
  "key27": "4ztEVLMSHHb2YwcpxHajxRjnvPJDg34TfxPhWZdkmj1KfY6QQ36n3K2wWKtSzCJ1V7EiyjkdUZNubHVUwmxGPj39",
  "key28": "gCGq9aCU11SGQAvr9drxfsUDiuSeXaonJWavTi6aoCRjua8Hrf1WNbUviuhAQEhzzHEAYu6C9ptQJ4XmoGqWdKy",
  "key29": "23L7Ha66987ioMRKbT5aX7E1rYbGvbRsFBv4QSZAD8obLpF9Z6zUF1sp4KjoXva2qL5KVrvtbtvfsmeDYBNbjfJL",
  "key30": "54EcgWCQvknk4uqRoVNDy1u7K6jeeE478b6qFcQHKMJicWapHU5eLmZioZYrxCDrmKSqAY6KtSEd3LiT9eWysFBT",
  "key31": "3Ey6VB4iW5QgNrWmqvQVPoagvpCrRZfGkcZ8snMpzzRshT6eAd7Z9PyYMRAbHtvrwQbFFuGtrUGbqf5V6yKZmh5X",
  "key32": "3DmQogCD1wAbH4My36eaenfVUYReoMX87Gz132Fs5qwBCA8vRmcGTMVmS78F4kxzFNG8UN5YtV1YSP9pCKuxY9zf",
  "key33": "9pHMVmyoK5PBoSKJGLTrBYS7QSMDkNWUxSahEnxWHuFCHjW32Q2LWGvvvX97b6LYVZycJYs7daWgRbRKEQVP6D5"
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
