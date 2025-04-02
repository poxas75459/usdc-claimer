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
    "zkmMyGmdFCqkAvPnHFLf8WoSGjfViSzZXYp6NxH6fPjbquYP9eakK2GRWhvmYghuGtnwVWR46esopMcQkbXAYa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdYcKGVRNTcsiL439aLhi7gDHLmosR4zqUbXcdvdguzLvPUzSNLwigSwDtvET52JreJad16DGb6aVBijYZ8rPZy",
  "key1": "57dDCvN6EdixtoJnhtoDN4S3NB47WHjZAPJQYpkopJhfbTXUs9mcoYXgToDZNcPy38i1siEc7VRpMwD8bxg5sAG8",
  "key2": "4EgaZzmebasX1pMLJJ3q3J74uFBaM6LVU6mjqzDT738aLsT7N5anpRUPbqTpXMtksNdsD3kXCobvyGApyBPY5cZP",
  "key3": "PssJFhS5zhi8iFFjiqW2xvi5VthNeZa1cGDiuYF7aTMpS8xRrkp2ad7rFNT6ZdNaBH3rXA7FJX2JpVib9TJWknn",
  "key4": "3t2HwYqUpvHz2UVtXNBwHwmeNxVDydwe3b5LDfqBtKaWgfSG1nfbwbtdRYA3MMNMxNavrfNyyJUxmVz8R74tAJGn",
  "key5": "2H31v1Xnc49VNdzQrkJPRA4Ez2RwhkDrekU3t4ZsiEb2d595JMm91NkbtgL6Q95FnMZaFENWAGUsCa7fAVPcCyst",
  "key6": "4VMBmY7kdRLuBKt2VJmnLzV6qcAk7MiyuEBLscLsSyfczG3bSAn5ApeJy5x8pL2SqJtBHEMtbe76QgzgtvKszKYV",
  "key7": "3edJo7D9Y8Vkutos8322uvsgPjkRBz4msknPSob1Ym2YxozpiqKfbf4crC1E9yLSnT53aXkfPhbDpE6ByLeygw5T",
  "key8": "5r1ZVnnWUmPpgorXZQrC6wa5U8NTT54LMAti3n339A1pX2EaQVQPa64YXvutuE5jLMvbiphXT45pyb5dxv211fnN",
  "key9": "434ZySoZ1MTmkXrK9rhoPRMH4rsD3ERkM4bY83kVukN5sBJgCh1RFzd1J1kz5st7bzotbjvAw9g7soA2qnuYmTz5",
  "key10": "4r636KbzQY9SZ2s4zzMKk1KAp4kgz28tJrgea6woV4pTdDD1ejaYkmL8bwFvPSDQes2L1RyaFaixbtZAWio2Nz76",
  "key11": "HHtCKetY526G6RvwqqTaiP5F17SvYJWvCXFF5ustpAxAc357tNY4h3twt1G17xoYDTkwbQFnpwyZ7kUVGEyqRPE",
  "key12": "YF2AXuF2Nspe1fLhRoMtejqDuFYBFDqofSTWRoZoA5RJPP3vYhmAEw9QCVTVoJ6uEAaTNHhfB3hLrEfoqDut2ay",
  "key13": "2fb8f82KxQMSjbCL353hiidsTTdZSW89vmFqp23WW52trzNxuEYwS8cakAAfzodeYU3Yjt3kEXDUt6mMGobbv1iK",
  "key14": "3uicM8mGh7XSLVJpAjwxTL1dALpcKSn7viawpoq4etjVpMKhuy6Rfiwm3wfqhEKKBHMJcAomb8Pgcr1tsdLFdKY3",
  "key15": "iCWUUVcPTSw5CptgYRNGo3j55zHq2JTip4jejg6ABNoFh42QiKG3QW6y4bnjjfDWL7s16ri3iYJKedw2J1U93tk",
  "key16": "4DouQZ32As3GVNjz6VpxtwUebQn95SpxHqBpaWpogKKDRnd5gGSoqdJwuh8KTU5xc6TNBoGJskRnH2mhAG9wMBzH",
  "key17": "SzPiUa9vEi3m7GjaRx2PtMeFiQZGrfiqHJAQiGsujGh66WFcDaNMY5gXHirPBVnWjpXtA6tDB3yhjcyRkk7dycc",
  "key18": "4SubE3oG5K298MBy6igk8ipSeKQEeBQbC1SVoZa1W9QqVzo3N6QwZFstJNC7uf5AMyJicE3JxvT9whdJsND29pmn",
  "key19": "m6x7D5QPJ4w1ehZSxFYnqU9Cux4o2KjZdwTjzZowPM8KCjoASuPcTV2yNpfQkzp56bndgWEnf7WAc6EU2UQZdzg",
  "key20": "3avkxya5tgs8NEvvY67DkDoEo9cJch5JW4ms95Yi4ecajm31wDUoCx51rb8a292Ty7errNwUi2z6Ls9jZ2v641MU",
  "key21": "3Np9t4E9bPW5g5ssoXYhUgNewVWHwiYSSzZPrJLFUXDbKiaoGW8TMWaAgT3wwyoZQpgp4o6cq9PhqjLCPADcpi9A",
  "key22": "5buU2ZvR1qy3JGt9yGWRLpk7Q3YbQiTbS4TpUt4NnKLdrWPHEPZnvFG24acp9t28hdL8V1A9RZ4LaeQZzDZNMuuE",
  "key23": "36jjbJskFTfsphLGTh7j3go3jJFbEJ5vcnY4DsqtSa4kiL5DbQgE8f9kb64ZS53moD7Eh3PPqiyNb7zbV4gFpUsR",
  "key24": "2VqZzNFbsT68vfsWjRA6YShtoJw24LdLJaPjW5hPZgmVKHjFLhhCZi5S6PGQcH3xDV9vSrfQDh6XTxFFZp4w2jBz",
  "key25": "22cHRcns3pPNtYNX7QMbXgpoCjKgdsDysUwa67Fh3BPs5avgHQi49Z5yQTdkpMoDX25habHVd1Msmr28m6zpejge",
  "key26": "2xRecqawcCsPrP7oCa7c6rP2982LaPmGmDU8t8juy6NjakWSzqaLY5uConrU9tZfsUtTB4bpCG4zW3ngJW9QX7QL",
  "key27": "4oRzZLkNGrYfPRwtd1SnBFBM9KTaJqgoKQYUpDdxF8TMFtQ3XRjS3CXDq7WBAmExC79aBJMnMwmu8BcSbYsejCiD",
  "key28": "3MGZTq4ZnJ4kr3zhaVdRBaU2eFRdnRxbwteF6EBexVotmnUoNpxPWnMqJ6yN5ouKiVhXt5LgpSbSQCvoxRknHCvE",
  "key29": "3Twg1F1oLCszzCnRgZsZpQV6smCkGVuQ4wDhTDNtTWVzPgBFKg3TWjSeP3SmXBpVHrepCqZQPW2QHk9GRUUgeDK5",
  "key30": "66xBxdrXBsHTp7jZFRC3dtCBDw3yQn84jexKxgLwuax1LMG5StohWB6mJWaNBc4fsxDdovN92MBYYwwQZBUVBRKT",
  "key31": "37PUk424AzCTtdzwo3Dt7oBvNwhVhvKAmtgDWKa9LgUCBwGoPrg3ZckVSPBm92VG1uWfAr3NYUmfo48f3dnbxEfU",
  "key32": "53sYimQZHEWgBfSQYfLRDBBDQdywGygkAzbHNW7cAFZ369btMR6iQpm3ARn8zpVXUmQd2VNCAk4z1jNCPuGaMNTZ",
  "key33": "5hUnurecxwTqT9v26A7nFFEEofMTLFEcJqsQFyqwDkTFjFT7Cq7LqoLiwajVA6TWuyfipY3ycQoVep4iLb2Uut7F",
  "key34": "2YiRaqBHfU9TQsiNHPeKoBhvxxJxY3uZ68s3vcoH19C14mEavDZih99EC8mwDUABSoPcBfAt86ZpvYaJjbLkj6rN",
  "key35": "5aDBsVaVdDF1d2i6XS58fbZeES7nAqzLvi3ttHquviLtCwRP6ajwSAgdMFPHdXxe2qP1YNKAMCE6ELXjEgHUrLpo",
  "key36": "4jSo5F2LFzPYwdGEUAw5MJLAKqsTPsUX2F97Lr5fV8vUWqUDLxpyzNDC55XZLDm66A6VKhTKni1FSWq1hxxPRmkR",
  "key37": "AmZa4dkRs2cS1mf3mQM3ruefAw54Gx8Q75fCHxifbE1BdH57i9FVYTLvW18Rhy6TrYioXRwSJ7FKvwJQZmWVLCD",
  "key38": "5dXzWpusV2TnVhaPZYsZe43iRnUVFhK13ZZd6EzxwfEyXBru1KZah8jTvyeqZvRR9nCSgpid1A6u3Q4g2UziQCxg",
  "key39": "3DQqkgVzJUKfiRfexdA6xPT5cou72oM6ZqFHs5UBdmsjtWn9sJdpjfekHv9pebgRZ26ArZs4Bjepgr2DShXar4JT",
  "key40": "5qQecBPXwmCHAu4zRppFTgTUALnpsVoXVNsQfKACnxSuRZ7DfYjM8LkYovWHtGSzt424Fg1M6qxZtn3LRxZcd8gM",
  "key41": "4VsrPeUMCaZyiukDi6ckijuhDUdLeGsaMzWVKDAe7kfSFUon251mKsiVy2FvNCETszpopJjr2FaYYMA8FdKhuXYZ"
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
