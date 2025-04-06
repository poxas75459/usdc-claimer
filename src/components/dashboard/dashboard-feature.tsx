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
    "4mfMgtQYa1EwGsg3Rue15q7F51aRr9AudQjZTGcx99bJ3A2XsQ7rWzcnjnexsjsWzMzjJ2r7NRubwB1csUm3h8zQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53BaRK2Yp7R7J3MZ55qHUDDjoPVPgJ3osT5p3faXLJcNQZBGbngsUWUYCfsUL5i9ZdwWAcjhAKAwf4iBWwtgVKCH",
  "key1": "3vWvucUx5sFaPH4CjN7aY9B4cGYGfNoMR8mGHmDaFtS6tbipPG5LFYo98b8BRdJuEYZ3NMUk8QwRvqgfigFEDY2Q",
  "key2": "JwNZhC3oWT2QM82PoEqZxDuSm6TwjZCAU6NvMhREXx9jCYBpXJhEeFEYULsfpe5BA5zVPfs4q13yfEXZVLCVwcC",
  "key3": "5ggGqARHJDmmhMZ8RzJPHs8x6c5nHRpxaXziXbmxmBhLMeWwzrjHCAM1xXTLzSvUHBN4325RaQJWzBocXCxAETLL",
  "key4": "2ER1UbjMipTfbfJX6ML69Pdc8P7Ax3hxCpa3o2xawZkHUcR19z9QLr7KwdEvBjk1DgEUXJg4N2ffiHStWEn9QtRF",
  "key5": "389mtZHxwma2idxkX4vdcVCst2gkFWuM7kqXT2p2zzPqsX64XvqPqi5UbpZuAubKBZRAA4FuQ4gkJzAnTecZKUER",
  "key6": "23qpyYHgzdKUfRQK2nH1JofqMcpS5MLg3s423Hg5Shdysd7MtzdmsS27teDowzD3Dp3xj5mjrjosfeFQci4JNy15",
  "key7": "5mNNkSTiZyFBP5q8L7QvfFiiT2qsy6HYSBQyFRPzhWv4o4U7Pzf88DDHUgFrA5uGiop1tpPcxmY7C2oDGURC2SNJ",
  "key8": "tkaJqjfJ7BkTTXNXFAsfZbEeufbBAksu8D9XK5JukErt4xKPaCrgE6LKDdkt57kRQgnJTETxKNhEZWwWQFT9ooX",
  "key9": "5T3JHfZ8ESEmoYNBLMGr5uKYHMV9CwxXexmUQqp8u1b8RxBSZsTcLgKPLWLF17sF52tM8Q6NjGeRyiFuy7V943GT",
  "key10": "4TCf45wxfwNYCwsVKxG2ViKhZTzb4yZuyD7tHUnJ82f37yHKS2GRMoF1E6pX3KCZAjJqsQbacek1L1ipMrrv4qaa",
  "key11": "5rSqq7SgnUGjSYrxb1G2q6ui8WPiEECMHWXXkpKSzvkDVDiqDGmrE4WE6TfcgrwkCVybeZVvHftuMAWf6D9oD3cp",
  "key12": "sZ9EKYEdDh5Yn79K5NZfDkT1ycPFqaFWBnkp4hpbCsoU7JW1gHLkrCpRJHYhFuTwEo3XJAvg7DxJNUxU5u9dcTs",
  "key13": "5hgZGrzhmWRPgf4tu3YTsn6CPN1HNwAdqFyYZvvKdqxu11vgvqGLBhjfcuCerxKCuvqmHNi9k5UgrzV6V3wDpbP",
  "key14": "5HunfDucULmfMz8Dk7KDvnH4fp4wFiGngbNkHQra7VxZnqM2W4ZtEbTHLZjYssDab9JzafjJk6aN4CCu3fxkHxKm",
  "key15": "5xPHyrnz4YkjChuz1QfCEAvEbY5awVETYxh6tjCXdcenDrsWEPgrKbTZfSxAY3EKfmzAskTRKUakU4ZXJ6VTUc1i",
  "key16": "2bfyYzZc16N1ShiZbFEHDt2jPBNb6BFFzEuNAEJrcgBwQPCRQmPLHcorJRFMqEf5sabQwzagcVXbdQBxmBmECGJu",
  "key17": "4MQUXs6c93U9yNJKywQmvtGxivQrQ18Adzss48fYB9jSJUP9BkcKnyF9VonXwJm5tWU2fMnqV9wDjF5xmUazz14h",
  "key18": "2u9Y8xUACanagYerND5hJr3SiWTbAxLNAdQNMUZfqsRygx9JynDet8LjqYTLuPwsMGQMrUx6qitKJiWwYco7Aq4x",
  "key19": "56F6HHL4f8sYdSH1P42PyoPpFLojxfUkmFE8yYEx8M7thdmiWiEQBezfrJ3YZv6H9QSGFi8nKTokZkYNkaLMnTCt",
  "key20": "3xgLDmWqKW812BDjF5q28V65yjxnbxjCd4t3hKo9jyrADjW3LYsKTUkdf6jFh2kYDvQHpdHLFn2Gw8G8nLoschpu",
  "key21": "2wWjQVkvjV928tBuvRhQFyeFNSwYNML2sWcCaG4sHgoWomq4cCv9FTu6U3TjVMUDgP4FF1TfG9BueprpUAaYj9WL",
  "key22": "5wJ5SeYLDnT34xxWojpauteYRF5R4LUSTLgBy3TPuPKYawanB8w2sMeTadEuZggPZsKRWZZKPhMkSRpMkT1XW4Kh",
  "key23": "4eYtHNR6ZQYdc393g2XZRRBKvLaAZakDexQfdb6K8syqYwUGmjb3Lo9r74uNXd1NWztN9vbDL2BjdLp1r1og7Ajs",
  "key24": "4nT26w8Jw5GiFEUDovV4Hcu7VPWm1PqBK26pkUfBhubpo5vMhx5HLJp7LFhupkW1KagRpWqAWdnpeTm9cip5zrxm",
  "key25": "2d6Wc5MVvKxAkTAZbehkW9Mb8ZwfBYqu6oBURWBrQbKb7sQQxypX7KcUn9Bdn8k29LLE56M9qszQBctpbQWfRkMe",
  "key26": "3puUC9JNoUK9DF6ygLJJyAuMSyMdJ3BiQoimRu1n2C5dtjsNVsTxHxmeVvcZyYvwCErs6Wkg3nU9qf9vC7gAr2Su",
  "key27": "4FvQyczrzVuP39WjVoBB7exJE1uLhC58UeQUzLkWUoobA4kg2rGdABJiHrXgJnpaHuvZX8QDjdQ5pAXq9Dn4B7Kd",
  "key28": "5xUhM8TtnuMyvTVNoUTYWzGrgUiiR976gmSrnY6jH8YKbT6z98uCTV4Es4M1R4C5vRXzoaR48JrMmSqcTUWx1BaU",
  "key29": "2cEPMf7fAH82PMfrMUfqxF43NztjDRuDKepB61G9kyiPaUJUVAxcLn9yAbX8ZBdRwkx6AkovXRweYPE2tRMAnFv6",
  "key30": "5E3ZTRWBdWZchCo2v1X9f1mEAY7yy5y2aUVt4vombV2nf5yDGsMGgRvmyHFREzWuKJdVwXbFkGEcMjyKmTpi631S",
  "key31": "5LMghX8vWrwWrqdQqXHjU7gVvNVSRJhiDCsrcuHJvEbMUY2t5qTvfYXXq4apFPdfw1eyiCB6QgMpBaVc96Eut6i7",
  "key32": "58Wdps8bdZaLdZsYupTNNAmmsVnhxfb23H25fM8UxD5HfWwHCMysrFxTBaQwv39SBhhkYxjqGfHbM672fnfPeL3q",
  "key33": "6AMnvm7MPaENmu4sUMRQ8R45Gtw3kf6RRCHp56msDCPqd7VxbjMBSDdTHHAaZQuRY9zVfMKR3VZLEEHxvrAcWKg",
  "key34": "2hfT2vjwCbFXTVGZk62UWVJKHdQ8TWUa3SB9s4V7qbBaS5P1b9abKzvzoEFif5G1VBLNCQQumwShdKeB41iYYbB8",
  "key35": "5zLq1fN8XNUmcKJ7UXBtRBUpKcArUSWFN7Tc5eiGqcKKFGpjVXAu9XWjgoZbqW2g5bT9PR99CypJqhBeUorZ1Pwy",
  "key36": "49SsDDeipXRhuLNExY3kn6CbP3BH2s8GXQPYNzYafYAnxkhadf1qHu9yhSUKRTf8RcdXpfawmmpo6fGshzsPyXN4",
  "key37": "2gJnVhTNsYpRcjVtXJQ5xPDtVMFu4UYWQx7F9A6DMjyzhHWimnMYLU9QbfZ9pNqVaokQbZzaugaB2sHTd7tLxdkp",
  "key38": "gkZjgQsCFVyD9SYHkTENLhXCK8zqRfLZfrP71NSUhMvLh6b8xTQscdnihM5L7fLhEoktZ9o9hLvJ8enUXFRssFc",
  "key39": "bYo6xQJEYmyP2dAhM5NvsUxtUpXqUqcQddxFxw6PJFZMBLnmhTSRwnHVRUMT5LeoGjHyobEarVwQFiqkrkcxqza",
  "key40": "kaKFfFv1qG3NKSTn26sWREmJx12kNody5Sj1TnCTxkaMTnFCt7Du1fZqWDHMfkhqAZcLVDqgotiYq6qHGpFZQUD",
  "key41": "2trGs1yNvgZMV8WqkYXatCnMBTzTjbbT7sCpBW6RaBZP41EfuQohxp14L9TUCzX4hs2rtULJBCytbcF2P2CpJJLv",
  "key42": "2Mtte6uUDdfo3aCHBbdb44G9AvuWnf2MG4D7xconxzAmvcnu4kPM6mtTj7r1AkghjaythctAKct4abhQTHE1TsHG",
  "key43": "2JPSJUPrXnPyQARiPh94PGHYV6QL3NG6UqgP6jVztDHoaWmY2GhVij6TU69RFdxVmZLffpNZCSmGiGTjxoSCZje6",
  "key44": "5f3p66YAhZe8J5cNVxXVePQucKKChqK84wo9NRC8kSEqb9pG9dnK4qcjuCSEyy3ThS6XUsBENLvEyfcL8DarfTSz",
  "key45": "5XAMpFXfdBQVMLWvYHCKc97b3HUBH48xezVHP2AXCxnjoF2UqKA1ZCVG4WDmgmAAttURzzfTSQTCzM7WQ6i6Chdh",
  "key46": "2U2Yytj6GAdHMbdisZu6tURVETuqvQVjnj5PoZzeN2sCo7HzzCgBLwr3kKifPeiUHbNhrtxfSp8nh1N95ofMet1D"
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
