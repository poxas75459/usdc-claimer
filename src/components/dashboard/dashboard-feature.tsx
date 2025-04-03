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
    "PukdvHU6pcmqZoa4rSNPHaGM51xzXR19qHhbhCGkoVo6ju6S9rrrFuT4nodsY4RsBFZdH8Rm21UtyitdGFLanpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLffhWGedAGCeGaREoHohQEoDmY6vYpA5qt4PRcVmvjhfjuA1ZMnBUdieBpd5xnU9SFVMjs5uLjUDjktrxcWGFk",
  "key1": "4SEpGbURDRXi9FH1buuafRkn1j4jyMDSWM6XppgTMueaLp4b22GRE4b6VPgZxKd35ccL5y4TThvhnSaMTBbef7kJ",
  "key2": "2KPTm7eMiPmm7Fv2KcydsvXncnreC7pTdHtGMzV4bPBLCEKFvzY2bo5Yqn2SRPZcMePjwd217PgN37GNjY9SxHUw",
  "key3": "tgfUTwKHZQhZq1nC2B315QS7tbpVyNjni28yqzNpChR592wQHf7jrWwe4pQu7xMekBk77RZV7p4kqnCwRBLb4WB",
  "key4": "3tkZT4NwYG6jJFhhjUmf1cSqGem4DxS9xmvjHywwBUy4z6mRjqhBabimbdPTKwchdzpThKg4PXTdQk73zaaxpfLL",
  "key5": "65BNWm58xcG3A9AZevNbXWWC1sC5jeyKQymkCZnEynb7QZdhu35XrGtB4mD2crYD5MS5VwRZ4ydtT9qjMvmZiemC",
  "key6": "5ixnt7DZZm9BHTmF5i6BReFoqsnS4vbrjtbDgsHqjWGiSgyZLMgHRbw9JjbDAGHKTLdDpD4itc9NSiubQWVfAXer",
  "key7": "4S9uNbMqQg4Di4xM9Yi7PHrSKJpuDLh8KNW1HdXJ5H25Zz7nA1yt93VfouD9k1syDSx4ZpwH3Ma7Qjo2q3yRKH3a",
  "key8": "2rR28Z1jMEacTD3EAxdXrbYv4H3JMx7HanxovHN2h1kTUcvAQjWnaiRJFEnvgsrfDyPUfx7qBw1zhEKSFv9eMuCc",
  "key9": "3YZThcxpNATWht8PtVFRomuKd5HeBvLwjB1gggaeJKz1mi86qHdgGKiSgyrz3Eu2smAiERmDFQ495NNPMXkPgQjf",
  "key10": "3dCkZb2MKBt78UKLrEiMTJUbEZuHsuC7NvgyWa83V8M5te75RvtuQqVEbSLjALgpanyhgNmMEtEMHUVA1YpjdGoE",
  "key11": "2WKnjNyCzzYBhggekYh9B1kPXtC3NbGQbnndBDaRYUKa4HabzyJyzvaHCB5ykDQ6KfUSmtHGUr5UPVnGFf7kmY2a",
  "key12": "nvAZJG7isQFo961HWYfG3uca7DoZdZtK9DaUPcqWqMJBACprzXtWFLuqF3SJsPDq7rZEsfZwGBVnvtWvaxACAV7",
  "key13": "3czjCAr8dePrUQpjRa73ULAhzEKVcPZwKapc8bq9cZTGegJ5rsx5wfgd2Lk6A6ZuP3jJZuDnq3hSQpKwfLmigZa2",
  "key14": "49jbt5uNZuYH499zXz6JGJCmEQ7u28e49z2XFxXLWquEeGwtaR2Q7WYhb5zJX2i4zCn9hSskwq9nu37KRWQVkbcV",
  "key15": "2uCLaHLkHKyCb5p5rqs5eNXYbMecBNnnBxBHxx8zmaeyzHGEsg8tuMmp6hDdJZzuCoQTUWE8tcRHoz7vvqvfJGUD",
  "key16": "rMYvwmj4p8DJXyZYgDCJJ5Um1qFSxa3CoDUE99tw5d5hiJqDv3itWxRA4h8s4YgW7Y7r4fmGRAm1YDRx49bUdkh",
  "key17": "59p34DE3deoLyoGiNnREx6QuukrbmyyfKN7Lfabx2t61SHjhcTJncovgsCFwpBRmoq8ARbj68xk9SMj7cnyfELwF",
  "key18": "3iEQ9pL4rcx488n8S9ZWAYjGU6QXnyRiKJ11df8oi3tyvqBQRkjvzBbWBQcYiTmeHpmsKHyVnVh6ztEBqxQ5Vfiq",
  "key19": "4bdWbc7LTaYN3Bv6QeFjc5BhNDDmu3tx4Q79DvbpocbArPnvGXD6tEndzZ3rMiw3ZMejJPaXEv2TVejTdy4r8akN",
  "key20": "r4a1xLKGCitQqpY7SFvrbbPBDqQGk2zaJ6Tmy72WsDjGyzzSCiMxesw2pwDdibAKvuYBYzmEeWPHNGPjnPcfBn4",
  "key21": "5HVtiZGo3Xf7V9uQimZh3hatT3XJ8wb64DCw6gTGVdd2hK6nHQXmFmiSCHmam4vYwxe4ze8LWKJevj7AqdS2CGWX",
  "key22": "2aYsyeyNeWypwvvo65jrxXvzy7FUxiRButipvJ7jnUoNWnDqMRhA8Z1XJ9HjBHJq38FAoZpaiFKhsYnfL1ty85LL",
  "key23": "2Shye4DVL28JnxPfiSLhopZXGLP2SeGGFPXPvPrkZYqXhJHPXr6nsNoZT17yNAtKaAEH9K8C7GRTL35p1y2q2Jf1",
  "key24": "3G43VtMrXXsyS22LW6m97Mx5AQaQiK75gsMGg7cxPpLDL46LLe9n17tvy4hqfTv5r24G1KCdWB1VeMSMMQHcoPZZ",
  "key25": "41BqJWdEcHpuapevoM4q96QZTNF1VqpnxNxZzhcFJw5tBMEuGha9HPU3TQYqjhWPDnixamQnWeFUTsXpEFVMZm7f",
  "key26": "56r11cHBv6EAu3xoPDsLEiEdE88p2ppUB4Xa6i2v31hjc41vkeBft2PZmHJNZ3MZYAfixouMxpx28EemJ2wDdDBw",
  "key27": "vQEt5wzHvj3Gu9zcKGphCnAR5AxxTDh2FsSBJVdQgbHWikk6x6VojhAzZrK2v95NLE5Mj5FcQ8EgE3JFZowAu2g",
  "key28": "2FV1LSVcPSzmstbWWUYRCwLtcY95octknfYomyzw5s5YPnchh7jCWRKoKYLQPBerSLbr7P7wpnTj16sX4FYmtYt6",
  "key29": "5TRksziqoyjWBZA9mHa85L4uqbzVEgVZ7Mn5B4qiNQhHCcbcoKdHvDrSCkZ3VKfLjxnK2BTbmKrxBichofFs9AXM",
  "key30": "2RYyrGuwQQsnN9d1CmotdYALpYCujyXLimHidcqiNKn1bxD1Wae2njgUXEYs5oAkgZvSyo9yqxLQ7LsZ9Eyrhhi8",
  "key31": "2sgZhPiyeYYMSN1DZq2ymZFJNvrzwRfpXEwrS4VveXBXia2f55VttXkLpz7DbUdJXF5mpnPiTbABj1K2D535oPWG",
  "key32": "61wjhEVkRyKMr3tWMVcRsxFmVqYt6dzJ3yExibu1wm6W1kBVu6TNg91baDLnq1hGpJ54kvAfSc9tC4vSNUu1mxDa",
  "key33": "45RJTnX7ndkCkgoDVjRPTfMGeYc4Pti3toA5RnLBeTAoJWPj2vGD9R1ELfhMpbtsZ9gbNLVySXHaFY6Wy1kyUdNb",
  "key34": "5xbvRsDiqcCh5pV4z7EuWfKs6CbWgvyGZZKPWX23Fxsr4CRLEehmrFBn8qxxhWrEzh7qt5DAMdc47zqZvZKQgEN1",
  "key35": "3DMQxX4LiE9BHyLgEVnGVN4jwtbSWEwhfrqjDbJ1D3abSHgkhfqpxXaJEjXZmJcVPAqnEuMaBpU86Gqegdydwu9g",
  "key36": "3sFhAVMStUuCY9KD1HKCsuVjEQncjBJnVuouSUdxBsmFsVzC7aWAPnkBWDAyiMWA49hRquuq8DHSJztJ3xhNWnHu",
  "key37": "32346S8MVysJobCWpzTH3AJTLBzHdKsJ7jhoBTVrNCGRib2q8BYYoVEwAPFtpbhFWyCejvawABHpMgr1YCEU6niG",
  "key38": "N6qRShmpe28jdzH2n3SKMpb2DZFjYHJMymJ9CykqajUcMQEbcuyTZgicjW64iCAJYP4wpiXyNgxGeYgxn9BWpow",
  "key39": "5EjrbLetEtCCT7moNV3Xo25DMpgmUBynSzfN94Hj6ZNFMxReLFSWu4M6UVPDCgzLCkVZbr7eHLG8FbACw6qiKmPC",
  "key40": "3RSbeCnvBgv336LArqpC3XMAbh1gZHxnK6ui1daTigHRZBkjcVFt8pbdjkUQ9RgHqW3rJF2BKVJDJMoVTALgii5x",
  "key41": "36vVsEBW4K4dJUzE6s7d1eLeSzY3shbsX8g5vWe893hmiVjnNucTftvsnQRAJFZh61yHNkq1SS3SWNDo2SfWfWat",
  "key42": "2JtdBZyysGiooEnfzNEAnecCzHVNBHnnxEwgC3oTHabHF4Z57LMFDTKtmdC2fg9wVhhkKewCV4oQ2vJvaf7zbTAL",
  "key43": "27nzuHTG94hRx45QFHNg7s1BgsNetPDdSu1HHb1ovjbj5PA7FxB1cmeD4uGg16k73XtjGGYW8TMKsdbky2KANm6w",
  "key44": "5jmoT6stZSaQEgMvVLtUZRZxKCZCfWGthjTdzYbQ2CMWV5VmAabVeQyuBzJ4EqDGJxgLpZdAz5XgkDngEQeAuhtm",
  "key45": "TRsBEkhykKxLXSMHQd6aLhqUvrdywnvZvHHUib3Xz4XsopX61htabGwQE5KM5BDH5qC6iezSLFzpFwB6JH6vyLR",
  "key46": "4X14U4ZuVdXMUgjed2VbYVpEJmGh5uh978D5HAD31Mxku7ByX9ZPypJu9TyY24W5XBQgUE3TEdeiyab9SDUN2kW6"
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
