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
    "5ArPcCzYLt7G9j2JM6W4HTM8ZQs7SaWUtec75WEWaB7N17aBYVtHYR1QmPtszt5SBiMe2CHAaf8j6LYAFP7mMcja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4P26JHdv4N9Sy5fYxSyJ2MFP6v1cgeQehS4dm3VTkCDhstqt1qaJ6Z6q59AWa6iBxU9LsK5ni6BZQ5NCX6qmSN",
  "key1": "5nSkbW1FJAjpj5XFrMFf2AhVdzyRRY1YccvLfztvmXhEcFFxWnoK2brMnWEup6aRtC5mBDUYjWwht8bbRhCXVX44",
  "key2": "2v9hatTFk4BStHx3B2sWPxjGwdsuy87n6ZowAGFvC5K86MpKqXrnzr9cVHUWkw8tbBwQ27B3k6iREVQcxQdjvWPa",
  "key3": "WQVTcS5ArLJHuQqfcR7JJZjWsxEpqJG6XsJHh2Q3bNBCperexbBgP2hRAKgRAYYvKVQ8Sz7FxxistdcweK6dxgT",
  "key4": "a8DgrsFPD3eYUBDSPbcHMXBsjXwuoc5Gmaya8jjMQ5HxRPeGuEk5Fy8VwagyRhJ595TfQkq1TdcLPgfgZzvaA33",
  "key5": "463aNKXYhdhQjWSjrLXTUsb2wSTySwxHKZi5vpATxbK6nUaHm7Bg5ZWbCDBMDWWp1iD9PbGjmpFTXWaWB7Zc7vKV",
  "key6": "2it7itwP5BQz8svfhhsh99qwjMzEHTWAznH49fUgjdmczDJZf732VTPGrDaQLfRCjvZ4naDLtk1kY87VYKFpDzPU",
  "key7": "hSrxEAgFB9qQqTjzMBm8cYaVbQ2LHaSHcxa9vV4XbDGa3ejvC7DKDun2cTUUddGHE6mAsMHzEFcFecPY8brFnMM",
  "key8": "4BXJ5nC644KBGugnhtbkTcz4NndPY9JHRfz554FjKCMRA2xBzmj1MQqwPwExZtKwG2akKBijT1af5VzbzkTY9fcq",
  "key9": "5cLAFrT37kFxv1CsDfsHzz6VKxpe45utXfEHzpLWVy8yuuaUL7r2L6DrYDLJHCS5w9mnoEuf3BL8ZjKQF6jB9RVR",
  "key10": "3YYow48pnMsigHwBopWBJ1XirbmyAK7hy6BoLE26STkWmvmq78ma6orfJhBUR4aJzdVNAfhd6zukSvE3S6LfWGst",
  "key11": "33NekedB63yB4DTubT4DK2vbJmDhVVMHCLYe68cdvjPzeuSdpGqNC6vM9pjjYjwFGgT27mbqWYP3Mir4bB6stUdn",
  "key12": "5Dau2Rn87ZZtdUnTiR6VXjtgicMv1KYCUT98X2hcAxgaKEW4xMhADopTBSFeFAzfTHWdqEPDFGibSdsWthWH49Vm",
  "key13": "66JNRjiNetuo72BiN8ePd9qi4DvxZh693DWnp6QJeduF435hLbjAjCqxeaixbi1MqpcRhDxJLxB8G3gUzXy8LWXa",
  "key14": "3BhhEMXFLCqnd1F1H5Byczo1BVaM71T4uFvTcRjGbmAKGQGz5uKEkqKPAtEBjH9J2FJ9ARsZMgxbihxALNtycp5n",
  "key15": "d8qhTRDZSr5ZxCGL4T9LZNSB4A2vRzHueWH6D5wyFuD9g8D8m9LpgCbPjTVWPBW1VdFW4co69q8FFGywpxYZaJ7",
  "key16": "3HJJSwcvDb6Avwxc1axYjmpfrZ8itUvdqdr7fFFerREHLBeHHANpecxf3NEcoi8wLVQMWdR9dN1W7ux64FHQRXW3",
  "key17": "ET3gVDgBQtxf411MRJJjAGCx6dEMBSRFNQLTymWwFHKzyBPLveD9u8t6TC7gxXgd1WUfNETHrJX85SuLfRgkRgM",
  "key18": "4WCPUwsvEP2SHm4k1RqXHuHjna1Yku8t7fVjDH83ZMDcwE4hgLgmmC1oY21LegKaAgbJgwUwZct4LXhSzq17Vnyy",
  "key19": "8nqYMc4amg9PpLHZ88Xtg2LpoJCXP41rk2TabM43J8JJKmCf74x12gH2HqMUU2V26XgLdPa4Z7xKqLToz6LM7Ao",
  "key20": "46fXpc8gJ2pCtZ3LSNVCR6JW4Qiuh8EL4YR1eokVUdYCchpR64DN1LEwJv8L6J76SybBoQbiZLKxtaDRL9pDij3Y",
  "key21": "XWr6jNrhHpDozjNLhhCzTShXTEtdH66L9HtH51uNU5i4ij1LNRZdPCEbPg5bkajnCFfzqGGTtZ9AUiGNyMqu5ir",
  "key22": "32ZPUr5hdPuz4zX5hJsGUc8JRbkMbb2aEQhXk3GJkjddjy8WJWDDQuGNjMx8wevMtAKrd2LrwbkAKpLafR3UWQe2",
  "key23": "41H5ihySFHeLDAUKAkHZErJ1y9yCP6Q4odJNbLeK1HpYfGjx85ZdD3u5Q5p8CJHUbeC9USQ78YJHRoQun4ZM8Mum",
  "key24": "2gSqVuMeDMiEvouGiev9atUQ1hbRkdsDHo1wJ5A3cGCLD4s7UK82ajvRCeSnp3Hw5jg3vd6skEFCwvpk5mdqjcrU",
  "key25": "3k7dgdnXrtg5YX3WFH7SfSxMwjskXpubS4hm2zHsf5fpnRP29hGmnKQdzG2jwoz7LbvLoWLea2SuNCGRfGFb8Upg",
  "key26": "38vXypnmT7uxmaCrRN4LWuQmvGBVjJSEwKWVXuwuJAUVUjA8GYFTK1KM5KERTaJq6nvyXEKKZfMApVhTanJZ59DG",
  "key27": "2v1a3ubGFfPyiJK78errdDAJguXcvyhBszDdQqps2126Bk3iFsTBbLkioPfQfKvCmrQmpFuzzCHzmma3ENN7EkEw",
  "key28": "4wTvJDReTjhb86iM4StouiU6sc6sHJUsD8Ba87XxA3GFLxDgDKByK4DPdvQvS3Xa5S3tLm23uFcBSVkjAFq3r4ug",
  "key29": "54a7R36Vy7vAKGer5PuBJrWrrMcS1MmKbtKtGZ95F6LnWeWoQDMpcsGJTdXv6hvAZ8t19qcZV35r9sCbzqnMKdpn",
  "key30": "4fnVc5kiBhHhiA6Cti6WKSRnuV8g34WuMHnpv6waedQzsCkE2Bp1qx2JJeAwTfQfA9tRtGLGFVZ4K6QAiCPo6FA7",
  "key31": "3jd8d6vYVMqkkNvKoRivjZbCphV3uFgwqX3JWZw7vY7Eyf7jAnVofpXLgR5HSSNqcK4NSWBQ715cbpeKvbfvi9Dk",
  "key32": "67YN1ZYvBzpKbkdNfDWYSFC9ESHDpgiRjzJ8dJg97ppwUjeFFWKmFgZiPvboZmiFosQihZygdFw9SYSPJnkATMzZ",
  "key33": "5ZMhHaVvoy3KHQBfmwK4BZKoWh6JNx7DB8exWnLQ7uybKy3oH5BKrKt456f5qjUognfQbJWYDfRTdq5Shw1v5Xcw",
  "key34": "kZKWK1jhFnJ7LUcBZXvU4nLg8DAR5FXgZTo6e6xRPGviaVAwgvVQ2x5S4AKgE3yL4QY3mCSPcVWvE8Bmm6jknPQ",
  "key35": "9hc4aJFiV34oD3c9yMof4UjVu6JKWbhk3h4SHb4mBt3Xhhfk6EuaRhT1o2eLA7Mrj1sBwttbi61pg46hTtdfL2V",
  "key36": "21jkG4RMVJmorSfW4yGam1ZCpv8JJ2P9v8Lin6pYtSp6v5Q8xrqXx8b5Jr9aTnYuwz73LhBATsKyuk5EQheELf6K",
  "key37": "2oZrWmy1ExncxMJFjbGrQqkdnLXkecy4Au4YcsSCvbm19xUL6TNSDJKBqE2XST2qXCcTFcVNVzS5GUxky58BANBR",
  "key38": "vqNumPo3ZMjM2JXNzc4ctar7xDKnNuFUzEGRY2xuejvV8pWZKpYswbx8pAHcUA7wDEcE2quKC6BBECzgBFqzbV9",
  "key39": "58ku3q1ba9Eav5P9tExpPKjB3MzpXYipE1KQxPBrxPZrhWe4m1vnrs5ns62FnuzBQdN4PoutEmFfPRfX9EhWb8Xx",
  "key40": "43WGkAUZUYJ4Zf2jDov2D91Tk8QRiqbckKWD69Qtjbvitp2ZhwG4wYU5Paqy3q2LDzwMBPTz7jFJkWDT4Exf7Kw",
  "key41": "3hDjG1iJdN2YyPcUdVD9Yr6UKcTxxYdE9BtzPzug4eHVjUfvUzUCsvLMRTFG7XpDKqAVJUQ9m5rFJPsQSkGd4GYu",
  "key42": "25gDtb49QT36BzWHJ5GNos4sMjj8v996rW5MJgHv14jhf6tkxdFRcqLBFZ5yBvDTn22sV1cddJABZwRjdFh5eQfq"
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
