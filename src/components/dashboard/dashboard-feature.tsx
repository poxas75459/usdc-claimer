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
    "3QXRx7K94sg5KrPStFoF38jUmy73sW5Fs2Wv7i7mmuF5UCiU5dWW2UEecy4kaAHkTbkh7juxT8SvgoxtZ7Dccvpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ZX4b54PH64bL5rpiG196HZ9HKY2Zf93r33NCjQtsTjqBTSxMwb8finHbzxs7gWFMJ27ysJE6Ncw7fKdq9mDdGa",
  "key1": "5s9sAuUvHQYKjaYN5AjmDgpmgPSS2qdxHJcZidMndsEKWNePbkjsQSxtpgtnRMuXTZqQCP9Sh7FaBgf8P8puBMYg",
  "key2": "2Ma4p78MDZ9BrGBiiCDnp2Hxg2M5pajoM8XhiEHZX2em3tPoorZ37Z1x372kB4QrDsbpNj6VAk9SQjs5JuAFpRgb",
  "key3": "3UTfxxj4AqStc7rJVcBBco7utttKN7ZJufFbDfsRcjviTQU4sgeMkaWFqGhjz3Nt84DhiizrLHVtppZRAPjLSKAe",
  "key4": "5CecTwEgrpBcFJ4pDjzUCFkj9yi57KW21kK4Ritky99uyWcECuBjhs1PSjJArDha28BPGAbd2ythgcg6Qy3eKZ8S",
  "key5": "caz5ukK8MRem6sd4TBx5f58hEfgk1qUCBvDFH2ietP8QP1QuK2PsB4zSRUi6HUxyLopZVDjNULEezWLBfLk4Lhz",
  "key6": "wGFxV1hPJwaozvACGUJMB61sq1TycSWpctDJWXvREKPUsMydVk2dDMzE26n2JVt9DNrmoSeQgCoAtUh86NfCYmE",
  "key7": "4y1DYaN9eHPL3UFgv3FMr95E5ataefAKjdsWSH8ptcNRXjeWTdAW4uo38G3Jhyc8JY2ft3k1KJ6dK7yN3rzebt68",
  "key8": "3LVET6tZAn2XgCkgEWDwXJUUqmg5A9A8rPKhDE9LEJZ27KSaxaXzdCisvKTuyU3oStzxwdp9nAXtcxJqWDQXamcr",
  "key9": "2EN9qSrmzDdHS2eSM3BCgPvePh3bzioYereqo8FM84Hhrj2WpBeQbbqmZegGVLA47ijJMM1Jw5Fu8gSqF4KsgypU",
  "key10": "5vapQCR2dVtKu5XWnAan2F9k2JhN6cSkaFGuK4BzJy5KgZYg4KWRc8WLRcaMYYt4W13rCUnUCr99EPyiEpNPtnSK",
  "key11": "v8B4wKvE3aF68m5DacuNH1e5WN4WEVPTVM5eNyzz758ZHtnXFEfxnDRj3QgizYJRKTRBLTsR2VjEUmGwtDA4ztr",
  "key12": "2dQMihZf7SqfzGJB5jYVFEBddbpXQBukivp3MtTsTBeao9sgvLzJEmm1cGT18iHmNdsmoVwJ2Z3svzsJBP8oqiJe",
  "key13": "2RJP51c5XrCgzgUQ2DKkvNVU2nRjZaXqMkiASoA4v7UQpToKfFbaQwM74QCVDjXGe8DmCC8j2NhFLMTiWkyzGxv6",
  "key14": "37KJdFn6DvsZreuyTNSPK9EZW6ugNW3EVPmQjvHv1ak1L1SH4hAQsA2FK6q8Gsnmd2Nb9ykLBjyohWNPoQCKfgak",
  "key15": "3scmpMkWVyyRV3SEkXFvCxFeoa7HwRGPqVBP1GhM1L2aqjia2a3sRSz3Zm6SX4Jfvy7hriuTBCPc3MeVtXqsfZPh",
  "key16": "2HuZa1ZN5ZiiYN9CVL9dCeEStcxDzyfzDwCkJV4sAVvf6PNd9bka3aEyfwoj34khNgwN6j7ukSN92oV2JBNKa9E",
  "key17": "2Cz4mHL8ergmzujwnFiCyd2Hphcb75ep4F4mUkWVhSJ1Pwd13SB7EoVwBb9MiTMmfXtRmUt3vzXirKbKDhqQZvGm",
  "key18": "5PAEmaCqPS3RWNPVcyyexeqtnygMB767kYBdTfVcUm46nthh8cHAUrxASfrha71kuhdNAipgxxUydebMpcLrRHTk",
  "key19": "makyJzEfeSPAAghT7G2SLynGzd6TsDmGP1CxoV1J3yhTF2UhYB2gjYWxxqfSfKu2PUP1MHvti9AwSKyv9joNRoj",
  "key20": "4mbabkikYoGRtfsLMWZhZZ6cVyVbPKJTFrALKN3ZEkesX7a3RB3VxHMM7BMx6rigCAkLE7W5DAjbkSrFHdmhS84y",
  "key21": "5m6Y5qFQT1aK54asQAZUpHJqXqG4Bq4ybZTWRQ7dYwhGmxEPHdymScYseGdxqGhNr2qe4UMhDTkpWJqEgUt6LXQq",
  "key22": "58fvttTE2meXCyrHSCuRSvgs51v8mLpJanywLrGMARznAwrjZKFRJfvz1YogqDjkkSonQd47A3nMbS81XpeeMrWp",
  "key23": "ztDagdZV8uSb1hmMCBeMvutBEodntpecHzvuMSx9r1LYRmyxFFW7AA5wKoruJL6g3T3roys4jesYuoDFVJ376pK",
  "key24": "42JdJKt77GW1ZR499YoRyDSaXK7GtYZEe4m55kvBYncDFARr1PR8LV3e7AHvGzmiYSiBCdhhJ8jsrcfoDLQyZbYN",
  "key25": "5EawZbdXgEYsjNs9Wgc29mnriVpeCQn7AKFHEmih727DQ4kgKrYEgFndGA8zqNk5gBREL9GWMvPU6J9yn5q7YPTw",
  "key26": "4W8Yrmxz6M9RXp8XZxrL9Qoo4tiH6iwvJD8cuf7GvegwKy1Kbkn4AA4uXF2dufHHYto278JydCEbWqxZPak7T5jc",
  "key27": "3MGL5pNEPUGuRkYVcmH8KWzYf9uaQxirY5opqwVNrWYAdnVALiv8dyGGxfwJDeeLDWgNrpYNqAxt8DTx6BnUAXM2",
  "key28": "4vhDp2pE3UfuAcxZcFg8mtK28VbkzqQ9pwgd6Xf7tXpitFB1bKDWx7tB9GZQ5Li4Ng4NwFPMrk323doHUDSC6EUP",
  "key29": "2UwKhKQE3msAc9LwjSXPgiDu6rrK5JJNzhH3aqPRZjFtsYYC6iWhVPiPg2uhqzKtKBD65BtTBJnYzWSeG35avgyM",
  "key30": "3uA4BoxrZjktX5Jdgwxtk6G1L9YcxzkhuWvmBGhAu3mY9zcNw3B1Ki2iMYpDyPZTExKtd8yzrb2MTspXTW6X1Bt1",
  "key31": "6BpNc1o5gVs2744Rji2npywhjoxmEPqJwKgr91b3kiKh8F6pKvYYVxkbSxrzXTpTGjeqSCTN7tc2FUBPqSPAcpU",
  "key32": "3FcVHLEK58iXJwVj5qKYiA2xVRLtmk5PfzGRFXCdtnprR9Krx5ot5KxFwTg3MejLW3akF8x4CPpb4hjC6KR4LCXG",
  "key33": "4NzAAv83aq7BueJndRKG76s7HpoTjUz1jDmciLFyK2MKRXkvCnb82LAyJ2x4XKSULvGzHrh8aK79FQTqzVe1Wy5H",
  "key34": "4zD5sS5j9SkjV53UwApQUT6aLjkCGQGWzGF9v3uxJE4YPbDChdtah9vukWQKvWZ6ikMZ7UHsuj9yJcGr6jAwboG3",
  "key35": "3zVdL3M2NRXCif6yC2UcByPM4nkZLbNZR7qLccmgmbqDjcwMaamk2mNa4TATg8dyyJQLvxy8KkhQ6b12gbzkzCUH",
  "key36": "4sukkEzbAPgfxZvemx7ixCvfyjbYreEqpmPmbjmMmd4MmNiSCrP8TaZk7EDcuuvAVwR8cSuP2BHj62tCiM5Dun9u",
  "key37": "yYMzQMDGQTG3oqrycqaPerg5HmgifBmcSS8qYiT2VzVhwNFh9jvCNNkaS3RgtgcZgZ1Uz6qEDzqQmKjornUR4Ce",
  "key38": "497kviN4cjsFjKAN5hG9iFi1rYja46KTcUWxXDLcGW59ny4ZnUZ2JA3nuzG7MXKNrzM4ETNoH1xpbu7qYASxt1SH",
  "key39": "56sEY7Qz4UswEd5U24Y62uKcEZUjnPsssLJCK5fLGwwf42faXwJJVY6qbKFhq83XceJAaK5STCBB7F9WuksxJ9g6",
  "key40": "3pyakPpUHe6bq651GZ9XpAj4SNxaUGCsYmsmbYh4py9A9Cep6Av3tTCRmzkWzUtFyaAz7ubjdsGRKRNNAqW8zHhy",
  "key41": "43S967AAvB2QmG6N7Fvjjq2MEaxQQHyXGC71sUu2tbXK9LARJpdX8ybviaXmtoouqMVxnzkECgH2tmwP5GdoL9f9",
  "key42": "2stxSJGBczuJPyfFBc59vN2teqTygjawqV96E5qXotbUdZrL9Kst1xpQL9w5yMEfK7gxNkuAtmkmTLrVipoKxaaP",
  "key43": "5huGr1XsW4ahKKYEnexD9CgcD6X1KaCK9ux7RV9khVxoEkeVx2pUK4MLs57uBy7WmeFU1w7oL4xmA3tGfzSPEi1X",
  "key44": "57o97sghb9o8m8gDUEwfD41m7QYDyrQYt3EgEnejYQZsPVKp26a6hR5FDPE2cK7cQWkXR9P7WwAkTMfrAb3Mx2wd",
  "key45": "5wNWAvvNXvCvjvai6uxUavRjaPRr5QcXUA1L6xGbN5JsmNsy6sRZHm6ueuKz94ZLHjg8Qm2ye6nFBawYw9c5XXx9"
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
