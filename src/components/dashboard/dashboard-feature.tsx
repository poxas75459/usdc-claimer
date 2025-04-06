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
    "3iNK8y5WTWvnqpSAEf9At3uqjYHNvYLaCq26D9BQ1CCcs2iZtfMPvdH6AFTHvVwZsaEBwV3sNkPyCjyaFksZ7HLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pjj2yPtayQAHit2NchDsbe3SFBMo3n5pAADpgpQSXWJyPAbURd2LmPCwLRpymckjgYvE8kGLPa1H2J8BbtxhtWM",
  "key1": "4FTprbDNrxJkDMnyw1oVJAtd1Vs9QxtGnrAU4FWCbD4UxLy9NCSkb8hCwxNZissobyAwTdAzmpqpXACdb7pQc6aZ",
  "key2": "64sN4BAhUJhvthegNRj6YtR7MCieSA1c9tpusKArTDUonnPD2qCHfRoSAPDwJ97kDToUnu6E8myUUyedFi4fcKup",
  "key3": "2BmTAjt3fqLEZ7kpQ616xWiMW8PSEPYniU9ASzi1vmW4L27sMNXNwwRiGhMSufspPAd876ATKJwpeiYHKBEtTtgb",
  "key4": "QwbMSx6F1ZT6EwJMvAETDY8zoLKnvx5FeGttZiW1nfZUQBuas1UdWFsppd8PirwnTEBSMq8zzJvmxscRsQKJ5r1",
  "key5": "54to387TmGLcNKHaGjYM7pNyux9CdYPmJ2n2wr7ZJ5o5XZ3qAF6n4yLiE4f2KBfH3tXxkofE7gL9deThTxH2VcXa",
  "key6": "61E6zy9mazmp1oJoEymqt9pk7J7i5vEb4roQYvjJvg44ULRaEzyCgZFTNtWVTorvdj1zj3Rte7j7mDMTWFadgBj2",
  "key7": "27AW7Cu2AKF5XZ3EJCBfyioBFJkvZ9GZ3M8QMB3Fhq1KkYPvtoEsGCqQ3Y43EtjCbBqEr3oa4XAVyyiMmnNjfBrj",
  "key8": "3rjPssLxheUn6bnKE6mJBvNaj8AE4bcGteyKqpU8pojkjquDN3V8BPJN24MVBdHfPCFRLV4UDG4364xnvbcntcHx",
  "key9": "5KZL8JjBNhsoNXMwYUTDSL6dABMpHWhWpYPwZ5Ybq1f4sniwtx4V96mdvtrz5tXTjfin6nHxMcCkewoWZj94u35k",
  "key10": "55SJ3MJDdKGQB4SLBXPfG133pY1TdtwNWxkvdAhYWwjJLkv8AskYxUppGZkrr8Vuo4aupGFNDhBtgyLrq5f4cXvW",
  "key11": "4h7wA5fBnPff6afG1ZUJbetZXkZMNSDRLid35NyEmrfsBdkR9Ft8bQNak1fSya5o8PaeXXGhBc9smsPV6LnKNouD",
  "key12": "64RQkCazEozC8rTJfvvobDDNKMm1o44sE2wBwbWHH6cmHVrUqjy8HJyKPSp6ZTW4NxFY66yGWHC475bAusg4cbL1",
  "key13": "4hmx6QYpo138zE8BQApZHAQCjFR38aUTLVFVT2AznDzoULnYPfGdS82gDsaWqKWSPvQFMEAHPdVrQH9FTVTFYqF6",
  "key14": "3iwo3c8GddikVeJt23kZmXZbrq8jM5NVDzJnf6Qr3Y3fvjJXHwneCmcK5dyj3YmCoAGudT8LCn7f8v427xHRm4Ty",
  "key15": "3VG6oEQ9zQF24mt4p2aRCgoG8jWVMtj5Qou6X1qwLCBJstB2Lua469hCJhQjLGDEu1AyhGsvFzQcwFYgjRvuv695",
  "key16": "2miTGJfZhNzYjPkf3cn89CsprSMEVvvSSs5d7g4YEp6k6tVU7qN2YHJyyPpsUjGjN6nDmm8TfFGiPGpbiXBG4Cg6",
  "key17": "2YERhJQMK1mT5SsNdmcFv1pqnJe6vx3XmMkC1A9bZqRZDAfAdPxqhN8geUDYYP2cnQBRtuREbGP1HwnV8bNu3LWB",
  "key18": "5ZznTb6zCUdxTMG4xeU46F2SVfiGzrX2yvNTNdHcGdtVmM2gytMt4DxezbBn1uKrji6XEw5ypsBuwAz9ZoHKTPsX",
  "key19": "5MJ9kHcabgGurWsqzB7jz8jfyDKa4uu6mCytvqkTBJ2znSU4xjvCmAz6uodvuJnyyijbo8qqKmpWMvtLhomcYC1u",
  "key20": "39TxPKbmN4drSFXdM1cwcpSoSvVtquxsciPdzDF5rYUhenZoSxLsLT42kajT3bMJBvZZ1xjoiMQfnG4816BQJ8Wm",
  "key21": "61N6q8sbmqF9DVCHgyYEydFAzRdREE4VEKx7SEaHFuRqA6mbpXo29vxUVuSnEvcb52tj4WPAZLg31DSfQz8ts7Wm",
  "key22": "5oM1daah9iyT3bsnpMgS2TbD7gATSxQBHHeemvwzcD89hahLaBFyxBLYNKYjeRAHvoypHzratdcCrQ7bkWNALU5c",
  "key23": "5sEeMTV5x5TG5rbkSyeZvtCXvfDh7TeFKGucshm8ACfjX6QU7QRa1n1569Y6GLrkC7T44rSEyJ3SCB3XjDX7Vsjg",
  "key24": "AJDzdQ6PfJASMDG2sig5dVaxWv9cgAYnCJ8dWfsG4wR5NLDA14JUXSJq83vpkzFx5JdsbBUp3L4vqs8Ak3urEeM",
  "key25": "2y17B76VbEnQ6uG3sCK468EDf1emMmMKvxMLxadETUj4Y6eroha3bqRBan8FKBoaCS9wwpBsS8NBhufu7ViAF3Jx",
  "key26": "61Duy4eoyfdhoMR9HWZ1rN9VBvJfUJUDeZ5RYB9mKpEeTv4heFbLHUHfs5e9vqJ3Fsag6p1HMfUawdCefKMK37a1",
  "key27": "KZQLtRxgsTVfYzXhGiETFsWmZaZgFTS6jQBtcACo5iCBxqFtnwVzkegrDPmRoLRkKjcB9eUF7ur6fJmsiqJuZLK",
  "key28": "35vbzgrQTq39ms7Qji7p51rxjEfEGePWvzZrXRFXfZ4aVwzLJ5j1Df4Hf8Awii1ZcZGT2UFdknaFUtLQQymV16iQ",
  "key29": "2L2UbBjYA648mMHUWJVSTHBHUocgNmMnoSWw8kkKi7xtgCZaEY8MMroNjpjWbLNXBJohGq9SYZWKdFuAVVnEXyg3",
  "key30": "3dp98MUtH94MdSxXb6UnsC5tcPSzX2unbjYbfYyG6gaKqL4i75ieGs6Xmh6iaNE9q9dWNVbgvX1sSENsMs5u4o4f",
  "key31": "573phjeKCAA36NrEqFg7yMHXZB9A14mEdJyLYBbdeX3UKYHNoj4PGey3WWrEurGifcgXdspVY9KcUVReZZSQ77pR",
  "key32": "2TCwJaefXoUxtkL8WckibmnK4C4jHpMkzVrxzxDmijkJhNhBRpJzehbt51DbtEvkFjSvzf8JC2MZz6jxdviTscJ",
  "key33": "67XbTE1cr1g5i5cXa8cNZc9P3rAH8qorZefFeFcKfzs5BCTDTJaqzB1AvQ42JC5bjQXN913JAcgaPHaFpid3hvj",
  "key34": "37CGQB4XuAMzRP19hXj4VRAFj4Z14ZkuKw1RhMh8wZNAUTtxBCVwtJHGbRuVZGoxnSWz5XNm2AcT6nf8wZzVXLXX",
  "key35": "412ZqA4mMjSVQpxy9Ftm3fCPbtjGfapeHHVkBVRs5vyBCRdSDrdPoVgNzm45GzGpjEc6YoQG9HfXitXPuXH593Tk",
  "key36": "2rAC7bddDCfeZMKxcERQa8LraZsW9ixag8rBvQerSXNe6yJ1FEbgzPtazEC1Mnf1VijHCi4dmFouKPcDSmWNKa7S",
  "key37": "3P2dPCy7BT3UT2oicBdrDvWceQTt2h8RsyccTQUuTC6q5J52mH3xkmpcKFZPuEPN3rUeF9MshBSUd7iEiZvYiZ1G",
  "key38": "3zgg7Lb1yguyVJ8M7TUpUaHgKocXkTSCZuhRLePAW4Q3gPSxY5ZcZMteyjTcdEXdNsVbgMgpdxJDUPNqy8szpmMm",
  "key39": "5FwkLjge3ZyucMExiXJuUiBjWoFxKZs16yiZAzkBQgx635jeNhwn987AVikUAj4G5XTz72DNDCgzJRGYxbvvoRg5",
  "key40": "2zr4617snuBRBY2ghQcCaoU4Lf1uaPyfbHMJMXETBd4FCyVf9tdgvTbeEU96oth3oh5YV1AW8cWWZqXXtrM6xL2",
  "key41": "43jv97K8cQAbyU1zF4EkfNkLGC9KD2mjAFpSsjgca1CcJxDhx4RVSUGjAvRPcmmvaSFF5M3i86GM8EY7M1UtTz7z",
  "key42": "4mzTveJgwCGb7ZTkAiYmsNrrXTDRLtiYVib8oUjECP7njDB9sE1qvJaeejkM52hGndQvMTbaxioHJBe1DpELBGwe",
  "key43": "4zn5rfyMyMsEt9kojpW6P5BESGe6bb41ZDtce3nd1ahLm7cD82JYwFGSQaAQxrmJC7Bx25DziW89cMz4dfZrQvgu",
  "key44": "5qa7qhC1t6wcoFGSzpYqvFAQxENpBmZhWGsy4pr4uaKNYLK3AoHe6S9fQRXm4R9gaMFJaJowUNE9ynPAsQ4HaH7j",
  "key45": "4kNWiz6LEfTxSvHtFkfHQAvrvnUM6TaKjgseyneu9LZ98pegDRZ4YnBhGjZmMzHtPn5RvkNwY765e5wnTUyWZNvA",
  "key46": "Uag4hRwbHoAh959X8vMGNc2qgorZavf3szw1f2Xux7aZNjo9Yoa9Exg2eiE8oQTX5goa6ukt78wkFjnaFPdzFEs"
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
