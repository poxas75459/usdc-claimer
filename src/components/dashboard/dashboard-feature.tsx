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
    "49kUSPSfz8j1T3Lmp5xixc11S2hW5n5Pvy3e8pwL7yJs6oEVkUunsGspQhmycGRvzD1e1MMnb1oMMf2YGfvQEyqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCQijFrzoSzub673ViKEMB3NRBNgk6vQKsoKKkx7ojCUatbCUnJR7FEDTTmQyiUk11Lfd78o66YrSUua27cHFv7",
  "key1": "4vb9j2SrzGdRUs34ej8p9LMDzjoCepid2JXrEASCfi9U4fhvJNaRzagYZQyqq1uq8mNB93scofoU8aA6WouXTYbU",
  "key2": "3pL7sXiPkEziTEek8WnmnBqG3z1ToFEU4DChZ5h7z2DtorPdLaZd2FxddMhs8mpLWU7YTdSjzQkUDMqBh5GqFwnT",
  "key3": "jYMEp2Naq61hVbLaA8mc8WAGMNmMBwKNx972xHukUkQXsMx7CeMCAv3ERYRGBUZ3BNmqNoJ1aBtRu8cacVmaUTV",
  "key4": "5RVGkCyZHFy9LyKP3kDCVoNsM6jU3db2cNEbMD77jLsjS9R5MKzoCcGcLFBkJz4h5RsE6QpojveLNEyDyKwKjC47",
  "key5": "4WgzRPnoxeGnLQnWkNQeS9DBKfLpFyYgPCktwTfxfGQAGPi6M5E2p9SmXcmFTtmx8xxbm3GcQhXyHyfkgz3ehNMg",
  "key6": "4Vhf3B3VJsxiUwokPS3NTs4mvvVFW2Rd8NriM74E2KEFTASqrrPwfwVPjbcMuaixrYiNfdajrGEjEbVsWpzitVu9",
  "key7": "5pvc4Cdo8yd6X3zEE6KMfk7HdFDBg5CrDYCcGr8pMYy3HVM4j75xEk77EHBzgNRyqro5FxiBUN5fzu2Y1iSywPr2",
  "key8": "5UoLiCSHP7N7BS9Reuz1vXDi9MUbEjYFdMGp4BHepaNzpa5F5428cDBrvnFwfV1eCQzCc1eXQENYLaMFBZdhmyz6",
  "key9": "3ET5vaWFugYmLAtSXBxPQYwK1UVBF1ieLrxbWzrzujFjzKjn7F4a3DoyRYiJaCZMVr4pKnBAPTy4KkwUpbPbo7qf",
  "key10": "TQcLXJ3P6438MkVFwRtm5G1pFL1DW9v238nq4uXKs7BGdbfPgCoMG8jrQV4bwv7RXAanirsJJ4k74bGSCNoYyqo",
  "key11": "2pbV9krVvjce1ZBEcRfBW2FnmUpz7mwQZHxdtEqpTXrRaGAABo6Z1Fi24znQrAR43VB3QUjm5cRF6KWpRkXtzs8y",
  "key12": "4EDTXfxAHDc3SNJB5NmRbjUqjQG2J4B6YiRJSDUD93SaPiG1gjtZMqBSVaMEYafviBnUpphEs7JyYdmZpkkEZnjf",
  "key13": "5NSapqU97tDJEUeumEfn8i6Ke38LPdoho5BxgEm8bBDrftF3pZJsPeQ5EYpxVWSybFAwkfR5ztbqeYpcKZfcpRA8",
  "key14": "2zb2AEavpTq72FvsUih54SNwPJYBdKVRWiAo8ZHavdMb1xJ47QhEztk3B7VHitRBy8wzpWmPsdAwrMH7t5dGphuS",
  "key15": "4emUA4twLwzj85KPQH1kALdUMtTbww3WXiovBjUN3dc79MnLiftjf12cY3RkpXHye6yYFZp5cNYqwMDJBSiPmgap",
  "key16": "3TpnDeWYbpf4dvtBs5k7wZesk42KG9mnc1qnBG2sPNZBhWnkNnPwM8JFkPrBdFWJCoXeiujYpHLqj3KEYDzQCpn5",
  "key17": "38ZQ9ikt2XgdSZAd51BJhzTCqTT4MT7acbMfCqiDgoJc9wX6wUyUdTMo2Z3gPT335FzUskukWXoLZ3gRn5VZAHx6",
  "key18": "5GM5uFoaNvctqwNvqaQEHHgf4kSX8A4Eojw7HpyAhQMFYzPcsRwhWyBTWipsSEW3ebWxF9NM8bq8UQQbDTwUsKD2",
  "key19": "2PxAmSrJwC3oeg3u1yRrsEBqXnuJ8omgKMCM2Q6hV12CDhuFSvn94aRWrLGHbnNofsn8XXbuDDd77AR6ktGTQYS8",
  "key20": "3312HgUedjbyw1QxhiZobew6CKjN7zfxRYqkgDpSBEpKpRD4CUr36Zz3Dxsg1pw2RA6CgL6aowuRStuZghmNDTTb",
  "key21": "CgzQ1oPrmkw1iQWAUYAGx6vKh71er19ACt6sHSypmMxopeBSf8mkWDBUpnH2qzYZQT4fsB1F6dohuf8Bi53w3t6",
  "key22": "2KRBYihseTfuGMPjg9NKtqnL6vwE8PGuqgaKwsV9HUMpVrpFjKgiFHx9QxCcm8Yyac6F2qoCJU7CyCLiR5qUYY2B",
  "key23": "2XhCL9mkCTtEt93AXobyf7gHnekRwutw7rT6YffH6VVPP74UuU6VXzCi46Jk3LjdCXpwfr41TMxVQRC3g82a7Dzq",
  "key24": "vSU7C5sUCxDC6v3BV5T6nzENv2EoNwfenubyiBggc2SZWjM8eS3q24X4oLXGyjvgoRDVX3QDrdb5D8GwTLmFHsh",
  "key25": "4gSKPwGTkx8iQWiSDHbNJzZzB3txN1rwe3XT1uCWVhRiBFn5XhSVNf9HLyngjfGM5Ykkwjho2v18Fyaq83CCZ2jc",
  "key26": "424tznj416pqAjt1hKgrfLnwMQoxrpBTUX72o6Vkk6k98JgM8tP8p1GHZLrBFNM79ajQVRGvhT5ykP42fomWAJkz",
  "key27": "5aaLoxi6EBixnjfiphifpcsxQjX7qvJThR89YYsmvHtMMzeJUhiFCVUCT5ZE832rayLJFiTe4WtzVounCF3nXeG3",
  "key28": "32otnLVchGA3jLX2TQ6DxMmsT6KrTnqJ5T1J3hTn9onoXhuzL3UQxKmAfKU9ekVuXj6p13UojYefJdBxLcUMCZvp",
  "key29": "2fMmWM33nLWw4StH1ePVYfSHoLZPTX7TN67MpJAHWWqmP9pe4zzon7HDThLkYiJYoCy93h4MzDZdp32dbDA2CfZF",
  "key30": "rtNPSXWzUe8Vk3EoPDmVRMnE13NhwMTpBF7xkSMT1vbAe6rh6tLWSwr8CTkphmBh53ACqPa5oTi91cmwEKJyfEM",
  "key31": "27UZD7BSPvXhxT7V6RJ2GmKgEcQgCd6HvvwYidctCUL7RDgejp8DZt8uNRsNc4U2g1XKVpuRLT82tXqqiUFg98Db",
  "key32": "4xxmovuFUaF9Pm28CsqKoPGqnvuKTJbRGtbNicFcgov5L7AarZn492B9dcwwRccPMeZh6XmDVVwoAaQc1fjvsrXn",
  "key33": "3yjMb8aSG53Kthurkeq2NzPscSv9AnbW8XVxN8wmzspAPNAAQFoPYNmXsmE49mKx4BaBaiXw8uMY3DDnb99AKYDX",
  "key34": "5ksowGibnMcdDHGgzqzRXaxxERdCCihNJPnEbZx9FNmKrJD2fFHWN8bRXMHuPPKPfqMUfe9uTsrVcGqUbB7vR3h1",
  "key35": "5sNUBkUX8NDTWWMxstTpCfgAxWkEMFuuY7URJvGiVLZKo9yNnsa6V5Ehja571d7ahBwpTwEUfeo2S9FWDUyhmBeG",
  "key36": "2YL6fkNHsqcDnEZmseFDLTTC27sk5PUW9fADnTe3chmnRT6p5grDdTkQ2KLKJnJwkhwzrKzB4NAohgwABMB8M9Kc",
  "key37": "5GfwWCjynykq7etENtoau7chLjaBgXWp2P7Z7QrzJ5qxMHqVHJYstNaFsGQiJQUCfor3rH8b946CuHkrC1RZqkEc",
  "key38": "3xpk7hn8c22FUgy2BfPRrFHNpNTxjkeqvGzrbR6yvuyHqw1C1YbUsn9KcYjyVR4VXZbcKBPFiuQ3qkjtbk139RNX",
  "key39": "3tuKXS5TuzLDdhqkeMGsREpGJ4CWUg55eLjfFSpBmuVhUNEC2NejATkziwM2CR7LPDRmBVpG3g9m9gG5yuGun1U1",
  "key40": "4FTrCwPDjNEsy355g1JY4cyEvaubTko4p64Sfa8mEPGhkm6Ja3d1SRu3Vdp6PFkaDmTu5sXNmELsvS9pdxyrgcxw",
  "key41": "5oQGBWKWEhDV5SuxVUduGR4HeDBdAVSYKFkze2PFafksA7vfuEjKUh16adv5hamXzGLQEQwjGUqYLTXKLR6C7ck5",
  "key42": "4ZFRS6fyeig5secMgqiGkftN5Mek45aruLVarRKfHtiokjyk6HxuUzrWhNNaZTWNCpBjhvv6jDWn1emRPhPDGyho",
  "key43": "3iQn3y9DE6ydrm1i8aC8zcFprvASsCV4yDyoo68iry7Dx4MWW8LPfDLpsxBRY8bfbZ83HQPh651Xj7GnKwaCsyRE",
  "key44": "2UnNDCeh4oqw1jyBpKi4mG3nHtiEDSABjzbMY3jgvYVhYwxf41KBqVNCYxjGCscYQHN8oX1E5czY6yqcHnLLTNFW",
  "key45": "3ucfYe7wyZUZ8gw27d2Q5pfVZ8e5NtUG8LYUo5z3eExzS58wJ1etJkJyWwnBXc2hBWfGEL7j687RmCAqxmEtkqgi",
  "key46": "2uqEd3MnQNfWqCyB9H9o5agxZenx5e6viTGTb8JTK8ipziXayQ7nVNPjZBGZ7P3XfRW4nEQU35PHp9s5rjD8ZEpf",
  "key47": "jqDW8KTRWjH6xGVTLT2noAqgsFB31fRNfTWWUFqrLqdaHjzBy7wc1d2M4EQMaHqaAJkqNgPa3hLAeFSkJdoVMqQ",
  "key48": "2Ud5fEZdMrvZqAaQcRiL7AwaRA6mHm5DiEGZ2VvsJAijZGw3g2RXjLSFHXhRw42KskCdzV2t1xypsCnij5GLwRgy"
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
