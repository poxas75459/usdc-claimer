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
    "3CJp5V2TXJnwFGfFqNJbzbk8JgjKm2vNoCCUij8Hy2Y8UnfpR3stc3yVaZddwkXU3Krx86tUVESqtketTDUSqRqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8JZojqfWcncTdK3NeQ3ud1xkDg9m6PRcRARFgzNbH2fVYGaGn4yCQC6PytZf1zmK5MW2VVJqrf1qcjMQECuHvh",
  "key1": "57YLzBxGDX4GqiqDz3ZSTLEjeLvyYZvS1v5QgFZCrLeYh3L5ii1Cd5rKRJNS9Ve9exjK4KHQtUJfXwUk9njgsunz",
  "key2": "43DcXTWi6jrbU31GNvhcmyFLwSWZ9KYaw2Hkx7Twa6xaNZuVZrK6PKM2fMNj3YJ1HPqPHvJS4KwgkM4eZ194tmub",
  "key3": "4qZLFnxuJnuwbBSuefUq2hLAfPksWNGeUq3GbzQBAoiH7iF8ALASuX5mehX3teMZ4g8Rpdsd73AgAPLVa7HVw2H3",
  "key4": "5u7kYtVwYRgaJ5fSKNdU7vPQVbUJ35tkfReuRDVq8gqAMH5hGzXFRPsEx7fK84Tf9F6RtowgbNHGXui88RWabBEz",
  "key5": "4uAeQ1dnhcrGtGJXydNsXbLrpgZ7WV8ttbPLjXdYJdrQyt33hvWcc5itnspCSqKEvjY1rfVAVciCM8v1UBBS1GyV",
  "key6": "63Mmkqp73YN1Qb6cBnYfZJbGH1cUeM975jcGP2HLTcqN3rWed7iiUVT8rPHDsMhUhiNMLf8EKYJF3gWi54JdcXk1",
  "key7": "4MaRFCVvxaXjHuXa5rB5sBPf7751DrSrtHgyUtLRRSKoGA665FeavktcSyMazmbxnXrUmeKCYbyfCX7VrRJnCocL",
  "key8": "2957qPJgq48naRejdpDY4zgYovcBpWdHCLn4995qiqzAuxCDHm915Y8vPnJeCYLsWDaWbnMNzqv9BRmLUHPMDKwX",
  "key9": "2MLz5DMtxugbBRvfYc8PaMMeou7FrSBE68fWxtFfFfS9wBsyQchAsjtz5Jq72oWcGcxdqZK1uuRLTQgU2whtbK4s",
  "key10": "52Bbw7wR4zUSA8R2fS7nRWXebXR9JNuNviwVQY26s3VS73TCZtvs4uhBjGx4LCyV3FCtvC7jM2rEX5YyZV1gSkQv",
  "key11": "2YLSkRag2sybntrGbcbbtwWJsp6vTrbDwqRWd2fUZNZ9vzSpZAdbmX3E7DAtxQMGV8bgNN81YwEY2N9bRRMCN6KV",
  "key12": "jo5ttaALbigbJbc6jvnVAJpzd6ZzGYne5erWftvM8aFrjiRrX9iTSbX9b3ccJfR67YdmmdXUuyimN5FXKHypcv7",
  "key13": "3jXC85aCpHFMSJ7vS6S4KLMKsm4758DH4NVcdUPQBoCt6NZFKGDPTYvqdWK7aRzXYwS4SoR1K1dQ6VDWoYom5cq2",
  "key14": "2vyCCfzHdURYys3RhDNrm9rH8QsgBrswoCujNygUCaN6LVtZvSQdpazhuHnoAmMyKfFiBrm8FrMCoDgDVYtFmFi4",
  "key15": "4tmMEq1yFrtxLEbMPbFQNgbv5nNJfFiPVKWhXHeTypnX3pc54jLJ6xsegvJ6PwLZiPwdCrJi4fsnP2c3dYuwq7Pz",
  "key16": "465X51fjjTWLWot6YH5GaUEFHh3Zn9o4rHY4knevFWycjoXCFJCqc8i353hSXzTFXFwWawHSiJWnab1Wi1JyJemU",
  "key17": "4RpdGxB9zz2t3nnDHSrzU9KgHHDK55r1aU4J3oV5zYvH26TNaiTUdsZYd6B3g4u45QwKqWUKFyCu5pTizdTySWPb",
  "key18": "Wb4daiZuCLuHkXNCG8hLmXoo8QpRMNXF54FKxsAZsoyCKbqziMMeKJkKXcPwL8ydEGC8MgCq3QAFET5Ue95yCzT",
  "key19": "2q4KdLwVULdRCtHgiVJtxUa1MiAbbctzyzWBFZMzQ7TbP6FNKyhPmxHzqBRzfKBsE9UEy4R98giGYEis6SxS2W73",
  "key20": "23QTCbFWwqDwc9GKdW2f47i1qMSB7KfE5ALYBm5egLPdnMwTGPzvd5iCBKMHqhtTtqajsoxR98d5N17aeJ3APtvN",
  "key21": "cmC1SHj5GicRn56cSMf59zmvQuojH3oND142oKcNDFCY6RKqtweDJXDhRz3ugWD37nLeA85qaZYpzorr1Y8Annm",
  "key22": "5wzJG5ZLjL9k7y7LgATKDwSkaJKZ1iGzPbrtraQdmAYqdxXRjSQk849HiMftyfpcBpusSbgAUi8wR943ZLSMwo2L",
  "key23": "2ANSc97WvnA8AaQ5w4fcxEBBw1CmQ516ghVsRXYavqKD5kZoG7ngy4HGmkLfipKuT1Q52EuAktEqNbPwohubj9Sr",
  "key24": "5vdrjz4f7XGFVHPa3ncJ6iqmqLA1zrLukexj7obqpLnZFDbCo3VG39HT3YTHq7fiA7rpTE2wmXbVNeedpxbwuHGJ",
  "key25": "4zndYAYyzLvc26RSfHQr2pJkzJ1AjUSLcqig2SMe57LwEbSfmaaTQHA1SJpMNY3bNKgUvNeRCrN4XtxmSA36Nmvr",
  "key26": "4LAUb7ix9j9Z2v1ZVyBUXG8G2yWzf48P6cwU23r95JpNxRwcQeEhshaTg7TQRAoJhtLVRyDNECfmDYSrUpkov4Wz",
  "key27": "rEg81mjvwAtnyQpxR6XPwZ7Hr77ahqto9jpH54xBod6EJEpQVEK4a6mQ85VnpGYimJEaV6oGgdDRvDomqdvzZ8b",
  "key28": "3ZhP3XADU85q1xLoCAxvQuE7gzbiY1oGS2FFtL3bR1YTBUAgmuENdq7MsGnVbuhEsY6k1CBhNWn3hHyYKbwv7QVL",
  "key29": "3yxXZGfk7EXENtjr1k9wkJEZmnfX2tXfHGCyWEYGUMQn4i8udBb9bCrBEawamA9Hia1PaGYSE7WzVY86ybYjkCng",
  "key30": "4s632ahQCCoPXua8J8a1PGGjgKaHHXvzHxNpt3iYeYL8uW4rDwekwd9frf5dYmycsSALsRoTDkWGNTovs1UizSzG",
  "key31": "qFM28XTXvLmPDUBb2PZhQZwwB4urBBW3JpZ8XhfXqxfMXR4oitJX9W5basCj4LdY1nPX4WnaWWNVmdZmasZjwQp",
  "key32": "5v4s1sEraFj6Lqt4MSRGNz4UZM9mP6jYDfZKGaDvkiM8G4apYiMB1vfjX3KcErH8Gmo4zMy2ZED82nXwkAAozVJF",
  "key33": "3QRvrsHfE5ZF7c4d4m131dEmDCU88f7uvYNo2K1T4pVSFPpCn2ZC2TiAB437Qvu6ZTam93RC7BjhjufY9pzoJBQ",
  "key34": "3SgBB4GMaxkXZpmQeravK8hYBJSDhPm9i4SXc4NgzGojBxzFyDqPyniwUZxNmKaNH8KmZQwBgS1qQds5X6T84TQb",
  "key35": "5P6DTjiGp2iBgKZBWHCPEddC3joFVZ4unBNaFgcCJpA4Ca24NoFWwczAwRjzkoehYiikWmDbfr4Aaef8HoGhF1Ms",
  "key36": "43NSJJWPEkTwB6FhSBHYV2LXvLMA6qDJXRKFSs53fG1hqsbvGdpoAMdBh9wtKmcr2onKAgS5vMQaKZCCzkc4Hud6",
  "key37": "26YSSzqoydAmGW6BG29STagXz9Uc2rFnBCmc7TgBQRmjYbLmAvNdQ462ay28oTMoa8eg1Kkrr74MxQiYmd9eidJc",
  "key38": "2D7MgaA9DBaw95aLhbxToJhQSQyiko5rps69ek2hGzXZJEDqa16pYkXtKAybQUXomrJfGLnwUidT3fzdpebYugYQ",
  "key39": "4WYqdtVvMGgTsvSmSMCc2HB2iQhwvVjCahktBSCDBHz48GoGJK1wmGk3EQDoQAhjofKxckaoGZVJ9w6EAVr255Qw",
  "key40": "4ygvYK2f1H3sEbst1JouggG1WBQ8v3Qopf5NdmP18eDhpmc7poEf4j3W6zB63GsFgcr9hcAA1BnszPGd1D9Y1FPa",
  "key41": "4LeXCCxoRBNLgz99cA3Wukvtm1qTmmsxB8xp5BbUc9XfpMSZy894WSVL52TWGXVgQJdAgBKnf8v9nLichuZD9GLu",
  "key42": "4Gs9cAUDZPAFUBzq8tQQKtQsmKcCySSw86V1xe6gTsFW6URvaHdmqqjk4hXztVVYL16u8UsMhW6mssEjV65Pk4xx",
  "key43": "2RcVWhyzAETyVXEDmF8tm6axmAPoiXU6kCQWw5jshjARa5NWZZi3r9Gm4xJo3rUsCw4VgLD386VYXzLAwMiDwf74",
  "key44": "7Q31sPCVWH63swaYqKqw8ShvcD6dApj1URrRtWj4dXHDaQsW9KUcfgct1aZVnARQHEXn5WtuA3U3UB4LmGph4gN",
  "key45": "2XjXPKDf6sXDNhAioft4ABmrb16mUHPKkzK1vGBxroiwZSHFszL3tWCdZRZE15WgauM9fiKMUpyKAKU4yZ6quKYi"
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
