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
    "348qymsS4LXkXhDUHN9aPrMAJdHP2FG24rX6xm5Fh3g6mX6sEmtMoD4AMxqaczYreZvLWGC2zXdNtP2KugYt9RsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZdaWDoHHBqWZjumcF16f6e5VM37c6qXCFVdLR7Je21PbwqTyCG3o7tsojfTX13q5mycyzBMo3vDXxAg5oVaZPM",
  "key1": "4Rs5j9ZbNrKdYvu4qXJGkSn9BMQAfKZCDgnBFS2kXR2G3r5eRqtwwH3QRskp1jHtF8UpRf96S67VARPtjJmMWnsY",
  "key2": "3F7mfVFfyXeiwLZ1yTWrqYf548KDgcqTr2t2KBy9ZUxrSBn7HhrURfk2ij9FyCegUBADVdD5CPtJyMu7fZ91Y3yM",
  "key3": "57Z61ZTM7MnFkrQueqboX4e3c8CVJ4kEvKVw3NhpBbu7Ct4Xe3FYKmKggVyjn3d5VYeQ2Eodcc8ebgCydrid2oC5",
  "key4": "3a3gGDtCagS7QBdhJKzpbbgphQEqMGMnPeTV7Cgfqqm7ttBzs518NZt6pK2VrmpaeyfqnA7VFkMK6hbw83x3Mar1",
  "key5": "JM8ZwR4Qc43mtvP9H8CF65dgoRXW1xnBe5Eh44BhUXaA2USk9Tnro2xsoiNAST9HsBRun8mbZgF6W93Zr6fkZ1i",
  "key6": "Vof726So9s1VCorfXFHuK7xcJQUgVcM7T9zg22q1ffbUVfmPoxzRhVVq99f3MCW2TGWHQSXnCxUbALNKCKoQF5r",
  "key7": "41mNjhrHKLkLNh1nnkeRYcyAkND7BH1RyxNMwT3WXrqB85je7tyok6EMaCjFREqoxgLAiKg5NsgnAgxqhxEAgmzQ",
  "key8": "5XuCRt2PjsQzDDaNsSioTt8iv9L1Wy2SNfUtEfomTCHm15oBmqWT8ALh5xMA3hznUfj6D9CdBybktbmeHXYRjZ4p",
  "key9": "2QBbWauEYpqYBPkJNVoEgistAmq1V4FjKRKXGVXxsM6aA5mj4ypAEXRBez77gkWb8ZVWgq5otS3ASJw7PfK3KRx7",
  "key10": "2T3g4FLPLEgCa5BMwrWq6PwrKrydcZyYcCRXQMp6bsCniSKyqs35FuFJLKtNUEXMjmTHA3E2436PCC3QHjmiy6VH",
  "key11": "4i5b8AkkYTdNiQnCNWRBnBVx3X9uW7QSoUxpvRxKYtX6jYPe4zyby7pmXzjAe87rLfGEyU1JkS3RmjyCzojnAVEG",
  "key12": "LvhioNciS4A5EvyHLo1bAzAsCimNvvQFhpZ7dgCZhLcALVyKP4qpHTg9q8rzqGNTn9DdPo9NKFVd1TiNTk6jpHQ",
  "key13": "e9ePQwaUq7xQYEVpmuRSLcPZoXiF6chTEaZE6YGMhbHVEmTcEtQ34M2PYnFn9JFxdui2n54iK4v6CYApYb5cymV",
  "key14": "2HUfSq5RpY2YhPHPrnmhJzBGE8BfEsJS6LpShr7uHTJHnG6tyhLe1tAWZGovq9usC8xY5aMX2z5ENtckLeYwn4HT",
  "key15": "61YNz7eg6nYZA8x1J5vd7aHM58PZT1aQmDdpNMCHK8nsaDM1i9TadHomdbatqb6A32JNn1erY4WoFuLD355F2NKY",
  "key16": "46tRdQZ9LT3a1kosUsALWz3KWUSmmMFtDtzr7FCvJjpAwNuSg3twMArEFMBxcZBX44cGuMYJPBQZnE3jcCgiXuJ1",
  "key17": "3uFy6jRid4BU5E5Ch9vpE1ETt5L6iKbWGiUBmty7e5C3td8p55osmr8C7j6gzN7uZnszgyb6by6kPWbg7GD6tVQx",
  "key18": "5TcZzFx41Rw6UivYnchVh86wkPxqEKXTe6VQBFRzLn2szRCBWa8hHquAJKnJUn1YfVqUitkVn78uLG2MZTXw9LCr",
  "key19": "d5cU33X2BMNGFWMEXFNEyJNij76qeABRUg9KHMX69TsaKUUfFVM6eoC4K46ae93xM7giE7b5d7sUm1Navmq2XYY",
  "key20": "2PD7PHoubDq2ZLzLFF4ftqHs8qRh1Mubuqx1vb2dTnL9JVALBxEFhEjSnst3CYDLkxdBEw42BiBWJK11Dho549To",
  "key21": "5jAvDCmRRUZuLJy86hwCsa2TmsrSJUoQ9EuAm35yafhhzeTN4XPWtjECx8NtVZvmiE2QJ7eUcDaW3pgC9UPrHywH",
  "key22": "3KvgyvC3YTqofMSiXQwRAS9MH63W8jRMNbrzv2umUmrByEPjsbKGSrrvF6anM31gMy3KbUTXrTUEtLKqgePa2zun",
  "key23": "5HENd3L7izHPy6JoUFT3FjkAzaZ8dVUSVefDfpZrW3fYoeiqDWDr4MH7Kcv9zm1UeDfgGh1acmUTSTj7mS8nNNiw",
  "key24": "5dqLCyqjXDaUPCQ9TJRFPbMfhPSwpQUpy2uimjbGDXcJ7dR6XRASaggEw1WVrKursQfxFFBVqveJDWeSmbrbsWxe",
  "key25": "3Ftb2PPvYzH4ugByv5QqmzpxxQrgc8zab9Rgzxz6xx6ZxD6FTryGzhzcyRSUAoNUv4qqoz3jZMRkqwXdxgh9fNbL",
  "key26": "5Ao3Losqpw2i191Aa5R33QCd8p4m6a2vz1c6hj9cXtjAxtHP7azqceCZW3cKJTJrFk2eeQroDgyvZ12MyoE3BgGu",
  "key27": "3eYSv3mvWvkehyYzii4Kk75FcGpmXRVvT7pW6Q1WXvGAPDuTwhzenAjUTvUezW76Svwnu3jY5KFzrX71wNav12Xi",
  "key28": "4ewwF5EiLZoaKDKTKEyLCtaM3KT5rFAc5U2gbT9n19PPdmDv7USyweLdmXTeYvCYGjSqyfpZDDb1CkMgVdRMnvZM",
  "key29": "3QRNqun4Biac3y9ALDR5rgrnyZqHtZqj7WTHboXKjWQABHXUsw4eMy3t49x9nYHdotqvwk2jJwSzzrqGxz8t6i6o",
  "key30": "NWGyuoz2ExKtVtmoha1yapcUCccqumz19A7EwKifrw8tVSTM5GhNdLJVtgSGPfNNbjV51qSNbuuQhv1sjni4AZG",
  "key31": "2m1iBvA4GfLMjdNtwGdyAJXGENo3buBsEa9qtBXnAdpy76ANaVQ6nGwyt1nRXb66rSzWCnZAGPkSPTYJ3Y8cfKvs",
  "key32": "4db5AuUpDzvBSU7z1tDaQqxrrp2LeSbjQBtChxXt4VJbyc7DdMvgRKuTUamju8SmZ25hCHL8MMWSdCbmwzquDLpn",
  "key33": "2Y9DwXJwegozJXk9jo2Y3eC7ZgGGBexJQkGnvcHQkbimLrhACWgHN2ezxm8TQgi9cMxA4tzZwJ8cmPW8wZrq42FD",
  "key34": "23DGgQFrZ69B26MpK4jCB67YRy1NoqaS4v68qfQ6YsB3ZaJpRbooUoYgp7d9dLgpyRRDURaz6bfBpXa8KHVaAGoR",
  "key35": "5iErHMeZj8KnV7Xnyw4LnaNaztFLckdzHQMY4qT9M9QwHXDjk84F8NCyTWoTxkyWyDHrGUZBdQURXbQvFwFEXyyF",
  "key36": "3YSPFiwK3oTphKtBuFRYXYHYQ4cpAaZZutxwgYoUCKJztFFsZSReFKV5yh4cKa1FYGr3Hcbf96fLw3BmhuevQej"
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
