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
    "3UCgGENqvjEca3vJs35S2nw3dMkHhAZR1v8xXQjaSWgCu3rKKFmqAToTD2XjSPsiMVNJ9AE2LkGuxhjc8P7umQdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ivMABiG1r1BbuNjwicuGX6E3xjp92W4tuTQWBwutBkFFnELbztBrTtywX1aKpWxAkBxMRPF8pGZXPtTqykNv5F4",
  "key1": "5k8vS9T3NDCmD4MfPABBEnGRpVZe6KnS7bmHi2fioqejvX6oxKUmHfUz1sgJYJYyAEUwJq6QLR3328NpVy7WeGeV",
  "key2": "56xpUMVDVuCuejxdqeG16M1fpm5zoUcKh4sNMXims2pSFWR2KUh11mH551n8f4Q2UreLx8LxPCf1Wb5LXSdpw5gx",
  "key3": "3mGTVoWyMNDmEHt2xpg9B7Nem4RDNN2X1Ef4wtw2tPPN1Yzs5qtVAdZPzrT5sJubW4idgAsdnD6Bi2BEcpYYhYBM",
  "key4": "4NqzYZ91x5zRh2dBQAuG4Q1c5RDEkmUaY86yx3P6F4pEYP3tRnD2QZmpFBxMkVS3qZLycRcAWhUgkrBu1jQ2V54B",
  "key5": "KbXpWUGt6UsUZVmCgq4nBGyJkJYYtGvVhCrz9VybGJ3dHTjno54J2RKLwQo2qhqyx1DKrnA2ZZtmH6LvGQzvD23",
  "key6": "4gi62j8BezZ4wdSQ45FsjVecvWq11rCqRTGX8vjkvknq8UeF6HhmtwZrfZ3H4qQb8Sx5oHB4Qd2cVBMK5iB5GApW",
  "key7": "61nQpYehcwCkSNQUAHJgFKkitDtyWC3WoiW6mREWEPiyGTz3mN5DocpcxxYmZUvQvzofUxoLkwFpDfaLaAxA5Zk7",
  "key8": "3W4dRzrh7Pcy1hwTd6Cy8fXB6LBNnk49UN4JpJatsDb17cJMGZGMN76Fw3z8X5SdhanXYypY5XZHA6FBHhtRxrxa",
  "key9": "3jmUcCFdXXgg75Hp7wcpQfjKXTY8n1mZiJzgCRazAwUPXm5ikbRfodqD58c9sfyYqinHmsgBUAsDuhVrv4uWQ4uC",
  "key10": "DvqrN8BJerd4Z4WNsTVK4r4G4FQndUsbDf1nqFTUTcxazbs2oKH86n6Qk1i4DfoaLGtCWBciWjLTdXyELEJg2T2",
  "key11": "5MzyhKxC4h4aUymUcAq1UVFDKrh2G3Jsk2jvXp8Naaof3Vit8b3bsSiQaZADLpspGwFWt1Bg22tHedhTKsWUaDos",
  "key12": "3dYYx2z71k3gcMPcWbKgsWk4T8pKtg9AVmQR9Nv5FCHyUu7QscTTX82gaC9UTPQdBxqN8frNe9vtjw2ocQv1r9n6",
  "key13": "2RZfGuz1jSFZhG2ha7dSy7zS1mfkcWpv5hY72zXH1HZBVGyQd1keZzgEDk3oF5nkRTfKLxUP5yWN4bG9iTztARco",
  "key14": "4fCtH1Lf5HqsiyTaPTr81JEAnivhG72RnurdX1rp9M3jxcuqAzXGhTYMnsTeCU1i9GgGYa41Kmvo2prDqh9hy9Rs",
  "key15": "48dga6bCCp4dx2tMd3KTgvFEdtbb7smsgKTrmc1aRm8DGQqbVd7UWRm3V5oyjHtsKXMhbjy79ZSQFbQQ9wa77knd",
  "key16": "4cjGbfz3A8h54VNG3EBm1UNMHohx5FZnoQhdRu3mSTHYYqbbZAiPQzznYMTLAvYGFjaZQkBYnBWZPSuaMgpLWzAY",
  "key17": "24vxR2FxQvsrDWZTUAHfJhbp3MBDm9efYzMDn6DPEZGU9Mjb2H2uJxwQwe2we85yjG25hJa2V3BUq1NWa6B3p4CN",
  "key18": "4onenxZc5bjShBjAodQXCE7c34JrtpLLNpomrxPU1Pi4RWaq6rRphx6HhNQkqJGkeubBPzTf4n53N6fYwAaVCALz",
  "key19": "5JgPygmJVVnL8Kk2UFX2rkBK27NR1885CEytcRyDzexa7Rjaf2LAxsy7MNSMWVaFCuGjkjARpkjfCbbxSHBBe3sv",
  "key20": "46JFknaQDsGGT8HSyCnfBhconZ4HFkhgfNgQGKKPzz8Xgxg4bUSTvsWeEEvQ7AGKyqZQcRpzgmJCxTRG7UQAN9gw",
  "key21": "3DTsckV5PicD22UNFKXFdCF2yyfFjosyNUjAX2u6HAGMBiQiL3xaL2mRZHkt3GBKFFwUVWjaMB1XQJujJb34Z9Mf",
  "key22": "5uDzrmXJEmF9TFcoc4uhoZQYDLcr2MKtrMzfAx4wXLb76Eq1dyXjt7uWre2BuaFiHMXba6QMUZNwPrvVR1YWGSRh",
  "key23": "47a43HEb42ihYqRdkr1WREPc5ztEZLsh65p9TPCtybV7oxHsuAAFUjuMp2T82SveQNqYLWTmXz2VgjJ9BWXL1CZn",
  "key24": "Skxeh56mQkjyoqrmxv22z1EUDECnxLDJFH1ddXK8RqNHwKL9bVwcs5hTVPXrLStKMD2QvmGuYdLC2uCCdHsuMwR",
  "key25": "2HzjQhF5VP35jHgsfM3rbUoidFzW5T18k27AtteEWHSLXaM5vM8F7w1yAJjBQhUg9xobmgDfhuEmoZmnJkK46YoZ",
  "key26": "3jG7Gkr3nKzhke9sDMJN7KaJcrzyawTWzUr9e9nAG6oHnarqmykxRuh6gnUWhJsW6DywzVf51F7xfdJnzCQPe2Bo",
  "key27": "rPxs756WRdeMzcw3T6qb29s6NXKZ2yF37pZeHut7g93ws5RFx1uZki6zPpq3qkdtk2ZfxLnwz2pRqN5WV7SzCrY",
  "key28": "pPBHcq3Uach6qFC75CRE875GBkTUucMjUTu7bn7WpPihSzaAUxUhd9K7jEMhG8Nasw2ZocHTDh9xqPRrQb5HVH7",
  "key29": "52dy3BEZwZpaksgvN1RzJcmtrvgEVZsKZFB4hkQTDH3uEdVMU9agrfkjhCpmuVnAiXNDZsUnsucAwNSaxLyYKhob",
  "key30": "TmKEiff2vV43WTFDrdK3Y8fgqjtFjMiYaNCzvaYa5PoB84Xmtfg85wbhtJVXE3DPZp9Dg1Mkv75bAucLEwDxUUh",
  "key31": "3Bpyu1aqvVT9vNMczxZqbaDqHZrCU7JxBesaPEeAKipvrHFUWrJbwYy17G4eBxZpy5o7cqvG5djdTSggzJaSQ5fL",
  "key32": "5dQpgHasnEtnUfsBTxFPh1wsRodybZQmFXUqxuXRUTNpQbyArAzbkib4oYefto3imsPqqWoxemck94B8H35asqq9",
  "key33": "2MS9fc7nhf6jhHHGUMtta72gZnHm6N3ssHdN2YBmK2jSWndL36GVgieGkT11j8pm3iqyxnsX7nAA3Pqi9CSPH18h",
  "key34": "2kz97uWAiZ6dTweAHC2FACMrhJJrfD2CnKVoTrb8QrhnjkqHgcj1EoVEktRBhrZS1mnzQnmncb9NHCkMxpUYN7Lc",
  "key35": "3rt6AULaFvT2WTFjKGwxq1d5AdUX8tEQsj7beGNYhYjscVQyKXEo69pu1Lxdzr33MSwSqWkT8qM28mhzJAWQWrrn",
  "key36": "4e3jrqHei5R7cMJhV2Ka7jjs1pYthccGuybvP56nxSGk3CQ5JsFvB4YwQo8KZgGm2ZuSqEf6xKLoBPk1Trg2opEM",
  "key37": "67TtFagEXCs8w29RhTWvxi5coqrdoWPXwQsoC5dLhk5NRN3pJM4NzVjkhTMMPQ2RJc7LWkR8kC4PmSCA211ApASW",
  "key38": "izSy6aEfLYgHJrqy7ptZr4w4FmjasyE9q7HwmbXaBZKuZmWaBK9AwiDMQhAxFkUaRuRYdMoRiK6DncGgWKqgdLw",
  "key39": "65ejcLSRGr5uRcch9HJxoeumLPRVtUDRbjpegQvfwFRVKDzXJckRJ1HAeTjMm5NTS6x6Whr2iEQ2ggxGXFYnNJSX",
  "key40": "YnykNSJJM29JYJrPYDa1XUqS8izFe34jLSRaPLJ2ojbJ1tQns5dNURZc1tfFtRhDe6TyeqyqELGBdnyzvo2QXVi",
  "key41": "LuUwh6B8nNEnag6bKhHWjQHtMFVeTLMa6PDVLaXaHjUGM8C2D2GSLKuWEpBspNwDg69CFcmLHRK4vUqPtcE8EPh",
  "key42": "2AfFinSFh4muEjvRYQYfjg6pVFZFJ6AbEPPJvqEtaBM9TkKwGftPRZxxAKeY78tjrz6adBggjW3TZCr2JKKFHV8F",
  "key43": "2WAan4vfQ3ZGxKyp3sQXCddkb3eAnPbsFU2emdwzWfvFMhVcLSyWe5YLNHiFtD9NKhe1jPLZ8Cc28BmibPLfNAKe",
  "key44": "4VS1YUgQmJDMLSvw1tjY5GY82hoG4CUcVraMZ4n4zTC55d99qPh6zz2Vcv1GyZU2bNJJ5ZKSGyTogzcVPqe2a1zg"
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
