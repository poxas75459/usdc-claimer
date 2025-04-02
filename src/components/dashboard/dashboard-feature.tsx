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
    "4HbWhLv1C2Xpt8Lo3WaFai67zwtU8Ev9vs3hgnxStcXi4TGWKMjgeksTapAxqxBfUjfpXUP8K3mPncdLTKhyzXjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xzg2iVh1eAuiczFWd2ju4vHhgKofx2d6dNRDLkUHc3m5DcyTHXXRVnXT5TRhWPfKdbBHxSakrpAUA1D6SsqaZBh",
  "key1": "4mMBBb1JQUkJMRneK8pHqNT4c9ahgiPgfkSdrzuQZnsCqDjG87ViJjxB5QRZkrUhUTwLpK3wUHZCakg2PicpCA87",
  "key2": "3VaUQhXqecJPhXcvz6GCMQTJp8MuHCAP6WFXsE2JKvnkxM6S2nsVkMD8WJsqT6X4ZrMw3u3BkW8roCKb683E62S",
  "key3": "4Dr7aZP6xewJcU892NzHsc8Qp1rQTGbGWNWX7ijzLT6FqUesgYP9RnbXrTDbjcfRgU3N9RjwzV6ZNiCgoJgyZ9eU",
  "key4": "46nbyZm6MKkFfWskXYfBXQ6HjpkGw7cFQ5ALcoyoe7NCHvz8JFs146rgPFwGnuNxoag19J4HeXPTPSGcCvtB8UQ7",
  "key5": "4Cy7NCeT65wDHXm61rfzMKXH21JvfRqZzzZh6kNDny7ZorwU5K23VFM29EEcC5rkkQZ494AbSH6abvUgctdiv1VZ",
  "key6": "2M4Td2h9HE1EziTykigE1xebWK87mFQipMtzWW4z1RQM35mG6ogoYdh6xza8jJPjAqzY3QAJ55qptskRbPeCuhEF",
  "key7": "39WREPZFithhdFgT8YdLYhh67tiyJqquVXZGd1vdCHqWNSHKWZQkmrYiyP6Uw26RurgCo7wuaqemkQd66YBMfxWG",
  "key8": "2PtRgRcARbjf2aaaBfvsbEuJosQCFChvwYcXAiyy7mBXQza1w9bHSEgT8SbWVpH1GUkYoJs4YvQrRUbp5NB8RmGQ",
  "key9": "2Yo1c6fZdGxmiYzxFUV2cbtUfze7aeUWkw7UZApAakTSkax1AP9WTHBqGsNBMAb6iX735j2zQtNtEtTAkou2weqk",
  "key10": "44WgXtT2qKRfoXZEWZbQNTWKiTqJ91toNsV18wyNfwYTbeG62qYkSVjD1PfgZVrg8uypLARkEu5pTY7Ert2Nqwkv",
  "key11": "2s7X6UAnQ5YXPKpFh9ZLJTthDkfGPrLNtCDMP12V56vyZQcrycnDXCMH8XHoftXbDWPkEk84AJ8TZyS4AtakqtyV",
  "key12": "3NvrzBAUHdT3Gup4zqvXRjRddbbxLtFqjPAQwq4zJUf1WpqWELR6yKZiGpdmVf6xnhZ2QHaCwznMyMwcuegHq3ha",
  "key13": "5M1zRW17KS5vBZ4br8WUR9YxgjScv3dF4iEaKeuy7cvHymoDQ7At8ffdN9MvPnnhEWdqoB62zQH187m1CF7RLMgH",
  "key14": "4SXccBdLAxmdhYsTT3QFKedNe7CgBfty14wiYGpACPbkQThv3nLu3pwKHgRz2Qme5nuGrnH9ofeoWEh5q1zBiCxz",
  "key15": "4WeeEMLc9aRf2TGB5mQZhGC4NBpe73owKxb56fjgfqs4e36tQXkpdjfkmjVjfQNRwNtcjrsRzH89dCffaCFf5jQJ",
  "key16": "5sDFsPhM9ZLx7hQv8KJziuqCiooUjyZn1utZ3CHnNfzLLKpCd2tXRzzp4tzYYh7erUUNBNmdD5mFZyK1vWPT6wiC",
  "key17": "5xRKBqanU65no9cpcVC7Ef7ExUDsVyiu7T8EVsyVV2LCW3FqF4HCfPSRGNxF6CCUTcnx1Dc46PzQhiSJ5pzGqc5e",
  "key18": "2U9NCND2Drvr3dJ82tsdKWv2pRx84iwf6saWQ27fEy12mfazUrqViwLCM2v95StnWc9mPDF4uuZb1nnHMWQDVnLV",
  "key19": "4wNTcX4ynQx4b4zzcrjLHm51c6nAFHLV29c3mV9sGvMWo5pxFrKfNibJoo43mrMTrNi6T7PBWEQeQtdrbHxNQz59",
  "key20": "2BokfG7hrMhQyM9igsCh8VaWSvRkUeQBBJWpxF9XViWETwr1f9TWijeHH9PuL7F5tbMDbULafstSbam8rNywsi9q",
  "key21": "2zyMGcnQr9wq5c1GKuQGzRuonRkbTE7P9puKGRt4YKiUs4X6n6Br9jGnPmnLzgQkdVinuWxXobhWkhtQqsTm92m6",
  "key22": "32Cfa9JXeZ6DBEJp95LvK8REKKqxxckX6jdPVos7Le8uJVMrNfbdDVRq8aXFa8qTRhe1nfAR6jREDhCU6brqiSge",
  "key23": "2SFkLw221wTAeKBzrUNbPs3nbGkTewrBQkciNifPTw8Z3YXXsdzGLcAL3DFmUMo4DVhi485SL73NfQzeWv3ez8xn",
  "key24": "4cZtuNVXpYjwFAvCtfN6BiCbh9Vw7aV2kU3a6Pi6B1U9PfWBQdoFZqVCHs1GsJS1tRNVg8C9M5RzX9oULKUnNBcp",
  "key25": "2N9uZwgRCQfibtxkupT2fuZ6cVG1Y636MHq1Cwm4DyWyZqSo8gV2J8FJrTCbSEswDrC26J8dsZxQzycNR63aLo7i",
  "key26": "56GXUPCvBj2LLwjd4fdvPxZ4WvYuSgM9ny4PAew3JPb1YyRsmbCz5G1p1TVRLBN8xptfsRQYLZGBg5MSGbU4Jag3",
  "key27": "5cwDWfktiHBYgHaBbNKZSf6F9dm5ZD4qhNPmWp4fePLv1fYGi7ec2X3JrkMty2S3r1eaRQUaRLxCuA7JpjBawkmx",
  "key28": "5UtT1BYAQVQU8eUSCXFNSnp29hS8iX9QYsi3pCS7sFWseVDyeA5GF2oo1gEn5qveu6s1d8VYL2Vwce2Kyjs8sAfB",
  "key29": "4BmVNhVYe8kxmAWdYPUW4pSwyRXL8hGnkUuRbbNhCoytt3tDPfbb2XvcFf93F2fyrY8SGYDM4p1Gnjb6x38yFFg2",
  "key30": "5i74xm7ZhZZh1J1RDDsgszNosXzHcvVtNeX8nK4MScPZSUT7MrWZAY97qKStsDHPK7vLSSkEiV7uYfnHiQ6nxm6C",
  "key31": "2EjudSydP4UGXm4amCDLcNPBcdET78e9vtD9Jr8BAVHAQVtvJEHjiqQCUskjovyv6nkg1ojQqeyRddhvJXNp9i8E",
  "key32": "65YwJXZ9F8Whk8u7p9nAbX23rJGpD3pdMtwBpPTbmFjSJMLsyZ7ubDpYjZKeKnxhDtAWAJHV4ZUKaPbkk71kTtNc",
  "key33": "5eC6mexKz1GYGozeqHeZujyM1f3DsUGsCiiEGJLq6wv32U6kFDbYYvcdnhG3nE8KNo97m29dvRAh8jHUDJ2mg5by",
  "key34": "2moCg6EwVz5WwdomGgCzJFwTgfsVFTfDDZDL1Lx6NtjaWQK53jqucWHCueopnTmgxRagLogDJexHNCmP86k6KjrD",
  "key35": "5Pb7RiprpUWWQKThQnA1NbzSBC8qAa63P9x5XZHWbbkWBxQpNT1FumQnKWQZAez4ToUjiW85uKPi3iASMVpg8tUq",
  "key36": "2zNZqmXKipiCUTjxGDBMN7ug45PiUujKfdMxfN6B4iFGsPZrDXLPnMvr5tpwS3hUreeEVGWv9YApDQVs68wNG4Q1",
  "key37": "27iTNYokfVsLafSS8dFis4uVMBfmPsACCbTzwEgVN6UyjLu4xDe3Z45pexErnFsP6shqdYF7CR5eDqWmrKBmaHww",
  "key38": "3DP7UubhWdQ3fRWJqJAtvtzF8zTfrurA2HaioP6mnz37vzgj4JHaF7Qb4F4ARTjwk2i1QiGnuBk8zRXS5dehGQxa",
  "key39": "3r5CWMg7ssYW4NRhzPh3gWNcWnqAhC8pFarLWg1253VvrGWfgJUFNuktQ8niQVVPg4hTSsSL9aN8o49wAJ3BSNj8",
  "key40": "5VmWkUY8q9VqfACarPyktiLKZw5NsdNNyPT4N6rgMw2TJA3qv4GGmEpeRYizszozdzRkQ5tvSmsDBhkZn13SyoBU",
  "key41": "48hjH5JizCnjQVAQTWYrXctCt24Fua2Qtw9iiqLxkv4WvqLU33j5SQgyMhVrFdiCxRnx41kUbCFqzvq9Ppv7qtZz",
  "key42": "CXt6Lzg7ME6AytiicU8MEL2vTuqjx2aharp8M5sTzfVWgVjrDtkwbbLp8jQwL2DTS4HHe18pwhEBBZzrxpf2DUf",
  "key43": "5b3zkFu7NNjSdSjBVfN81Mm8KyAwm2yJmaoe2qdKeSwBCAyVnVbmoh8KAcKNwJJP56HahmA38osT1om5conVcTPw",
  "key44": "3Lsk7kKCy67cb37dtxazPR9AEueJxwWBXjuJjQ6DpVqaqfE6WKMdJG1iB1NMfCvQ4TR3PX2DuBpmAPwwTFLwqhzY",
  "key45": "4X1QGXscBobqaRRSxhBDnJRgvSgq4QfKRRoqd5g88uFotc8QtvgZXc9N81sV1njy5P5o1Ao7CJzd97V3Tambsq8d",
  "key46": "2TDo3kpaFuRdbhGPvE6SVV89XKYEvGZDgP9kstfuHgLfVMGn1J3LbuNvK4sPghkJkAXwWips7njdAACE38qh9Gy2",
  "key47": "22rzrtCyUa99DLnrPiWSXC5XmvBYEk81Zs4PWNJn1B6AaRQu31Lh1YivbdbH7omwyfEqcS8URVic5MFuP8EqqTdB",
  "key48": "633SA2moAR1yQKnzufyA66Xnk8uhW1eEStTV9ynXVq3aZme7KwdZRSBU2viHZMaKKHzhQ2eumcisE3nNqVBDyk2W",
  "key49": "bAWizAyELZEgJLxK4GS6kKYAzURzosLDKLQvBM9yCGqN8YDTTRccCJkYEHj7qSKU2UPHNybZpVg5dqPXXLyEK98"
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
