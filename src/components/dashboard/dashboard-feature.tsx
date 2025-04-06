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
    "57oMmi3jjz74Fz5hvhRFs1pXGQBXaxJV21o8LqjLHULzdhnxC2sJTyUFPFErX39uejHJ5Y4DN82TgEaRUxMCv5R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kiUv5bWAvZyQy6BDXRkC5UnLoeguHDjH3XcGR1rLZd41Hy7JhMCqo6S3mHFVPs2tTPVkQBBq9yHuBLCbW8cwWvW",
  "key1": "2uyGtcH42DUoy2QL1ms2dq5JDh6A966TxUnFiVHnD4vH3MBLAzNbtXURtYnfYkuHPLq4hQLSP2SgErS8pfAmeJku",
  "key2": "47UFwavbKxNnBpXyJCdcL3nvBy4gGn5rhNFnGcekA3trRgAZUKMdihNZQqzGvStqhyrmdSxFi7HaBSmYKGVkmuod",
  "key3": "4av2Gwv2vQWM1ac5gvBnXweUuMgJKTjM62d7574J3KGp7uG4cgPwUP8PZfRZANZ7EFtpHSYxNM6DanewZCcyEwMi",
  "key4": "2Yw1WwpMG9ZabsFYRPTJyBTBRhyTtfKsznuH2TixsKyrhTMRWHMDLLtHHP9pkxdvLD1kkf3v6UveaTq6qYHcX4By",
  "key5": "5ib9jxodP9nmC8AxSQwwsqh1pRgUngsNXNSMupJ3kA6SXkbtexVH28MCnKYDDzABcBxF5Vkrj3MRKwosdVJ7tsK4",
  "key6": "22aARqLnBtAbm9fUB6ZKUxzC5F9jZ6PaLTd52iLQ3dSQAnByGvbZpJ9xP8EdDxZ5y9MtswG7sCqzfNBAyDMxd5yU",
  "key7": "gWcK1vCVGoK9Cpgxth1AKT34UUSvPzeATxXJVWmtHDaNbUJz161ruBgMDJ6Bwaia2V2gvhkxMs3dNdKXSAcbzxu",
  "key8": "3BtkEcFpUzMgSHL1Br6sdaERrMB128vDS9dvtb4esWfugqNt5SkgDzE597gWM3iJ1HDYBo7NrZaUcQU4AYjZ5fkP",
  "key9": "57iACkB2tLsJxYeBUfsSZAvwHAV8vZyudCyj1fVaQy5BxaufSKgumXDAJ65cMuJXD5fMNkbX7ZEpgLuNQQQaB5R",
  "key10": "2Rq2sfemYTA6EQdU3tH9iCX9hDmXEzdYTBtJNvHZkzyRQ4gVGHygEWSZPGi2XuqmH5AzAeWzFuqULzA8Pe6dJVBu",
  "key11": "5eS3vrF7mEz1689rWfw8gNMXbRTbaGfL79xSJZg1sDjSz6nu1n2qFUdKAPKSykq1dvsR1pEVKT5Q1q7gTT9BnJMv",
  "key12": "gZBmcrctRquVCViRka18zH3YVu75w8dr1b2okAy4saaLkGaidmdS6JBo43tVjnd6Rk1M7cqk3AdCa2X5Z3GnCrD",
  "key13": "4P8mALyru3Z2U3hfVD22ZqZ7V5eChymb69R7AqLHGRRQnqrGmDB4jpfDGHTooyb6Q5cYnQNxjD2wM8rJXBfuoxAM",
  "key14": "5yLg9JmA7Ffv8gTw1xXWt6zXUB2HaDavotnevWw4oESPQBu7Xdpp3EapDvFNwqgV6kKyMzVR2omxZkLWTkB7vcDX",
  "key15": "3A62BAvkNro1wnMtuu2gqe6GYn5dz3VW1eTvgR6ZZeSe3NCu67RevRMWgGiJgygNZDokd3RPLZ6H5uq9gSEi68jw",
  "key16": "2SMvJKtF64TJHWgvLHaK852VLkAZmR8gNV1SDaDNJJgLXWLcbkroqWsmpcjR2gragvaGXH6XENxsoiDufJq6CXut",
  "key17": "3DF9iWo7eABy5Y4tcx6Cijc3YRAMAmvxLeiBtM3jHRJSHqT6YpBrzu3PxRi336zA78RBhcoDM5kQoNau9bLaVCH3",
  "key18": "3kUBXWrJuS3VrVTxsbFbec8AqtXhG5ji7uFf4Kif7jEg1To2nKLbAjJubwemQfpFNqVmwgaz3gyZSq6nwhEGNiLw",
  "key19": "5cik8CCzA18DoLtEtWfr8BhQnPwUucSCC88sTNVGWC3hSUSMFjTSHVLq11o6FtiqrJ8th1Pupt7VN6M5zvGhGZA3",
  "key20": "4yrNT45vstyhLV9z758H1fJeFeviw2oqTrWiFSYtpbcKGUbSYJWpvvMXYTWXvH94G2jzrVKisD73U6gcPYWcYBwk",
  "key21": "426oVjY2BJAskiQ8YzYmRjdXHfuGMrZodUL56GfLMRUykD7vG3hBA6ZgkypxWak51k9pVRDd8k7FCSatRfXhMJjr",
  "key22": "46HDRzccZNJ2Y41JqakvauavMtHtTXybSQ2NofcN2ebrSdEUz2NoXmkcbTg1g7Ayd8g6XsjmXPFzhNjK5uFdzD9J",
  "key23": "3texdjnvsfcEDG1SKpZZMoysjgZRC9dm4AFsmXrVn75UbemGo9Z2kkmDiz2SvALcUMScHqZjHi61jTv4wnKsrhRM",
  "key24": "3uwQnexZeizRCsAwvFbbZYox3pmj8aj7gNpfLGMopTNDsSbqHDW82hCHp1wpemTsbZdvKj1tHKYCC5UGTfoeNViX",
  "key25": "5VZZ97hd46RttwaHHddwfdeozw11vPCaeTRgajrn68LUdSq6J48NQBWDDvZf7fQvG9oJw2A9rLMqXyhpmzvyXtrj",
  "key26": "53hEaPshX1QCCN6b2ShiYYka6LEuf4ZaYTQ4TfUXcn71izd37BBFsBLh4aN4NQMc54fgkQsdTkfaCTnLEHDC3Ruy",
  "key27": "4zELkTQNptNu2QmPhVnzqmoW9HctokTdB9P5D3q8hGWnZZkCZTjE3kfT1A26Ndpa71W8ecyFCjhwKoCRspZZCYUs",
  "key28": "UY19rfFjRj3Xi3cKU7zhehgTMrFtPpw4PNuejWRuSquWwUasAkpQvAfGGLRe7sF31yKQpPNc5iuSt3yb56DAWt8",
  "key29": "335ARWQt7Y22BfmZqXehDfEQVsMQhmYNc5Fjm7nCjLQw8v7Z6wfWAV5VFXeiHpLTN6Lhn5GX1zi2g94KSndxJAeL",
  "key30": "5t2qFrC1Tpwf1HREzP9DAy6hEjKzEDrxCScpw4ticrvDaPRQFM3V4ijqKKyp84Exm2k93stsC5FeaUSi4mcnXBAF",
  "key31": "59BRUXCMBiz6f3iDrjBSzfBThsyuwiF87DedJebcpy3NdDJYB7vQTTLt8PaX44BDHyvPirMSmF24PA2gwnVfQQCD",
  "key32": "3qi6XuxAZkmpoF5qVzEN4F4J1SQe6fPBjF5chw5VRFTJPcp72MnBTvP59Jrw7SeW3spiVfW7aEB992VXY47BtX6V",
  "key33": "azGCnyBAKDmFDquqdgnUWQLgUZENrHWtEwDrCc5thArbmeNFu1bwdD8AJXStWwLoiriU9pUFswxdtioL27RfnMC",
  "key34": "4JSUhMbSRexYS9i9kBNsKQfKqDHZ112EUyMfcxLRwQPU72TZ99bdVgygLUNenGoqnWSpEAxPVKdEXWEYGNaU9Jfk",
  "key35": "3H5vtqqd87YpFB9wjqEAbKExsmEqsKSjxmvyKHCNCwEqRYrvPzudMV42rZiBzBP41tJwBNojoD8pX1P5RwztChEU",
  "key36": "gmNPtikyrofbkH3o7282augimtzXKjLiyh4TMS5AV2xMZMozoyvBbY3d5GCqcTF5PzLtTFnQMKkAizBB5TMkVpo",
  "key37": "2NdocMYkLwRus24XMLidxBkwjiLPs8uLTiMGyTvDUpJa6Dms9ENPrRD751GGR5ZAowPrUCK3nnTprGsNU2UfNFBd",
  "key38": "uWFqciZjgwe1BookQnhLSvJZnUdQPeRJs1FVL85NGBXxTuD2ReqMPNrKcPbX6Z8AFFsHDKah9BEnG2RwvoeGfcN",
  "key39": "55M7xXUrnjH3jKTCZJ58CnETEh9nZHtZ6Y5CoqJe5jufXxbwZVzoPdkQ9XLFFZFJohcrk5v3wFpaZDsMZzz5mvBv",
  "key40": "5odPx8KYt53dtF6MTEiaHnhbp2CtRCUUXDCuSVMujiV51qGYe7Deuct6UYU5Xe4zaZkL2ZDehFoP1rLjGSqv2y4e",
  "key41": "2Qm4AsE93uGQsPSwgmyXWSHnqBA3rsK21HbxVc8tCRhW2E3y8tVtoTL47pYnBVJ8P9phXuJRvuexb6EEZYsTMgbo",
  "key42": "3oVQLEn8iL2AHxpfWBDYEHHSotNxk6ips5gV3K9vwkfsCkdq6u564BhR7waAYjtA3kHLrdbbJY8aJyo7kAdUzUBr",
  "key43": "3yKB9bqeMXDu7soEpV23uqa9q3tKAHCn8oweKhVWjWFcKsDDQcgfPPzob8RxdhA57SytHKXp7oKEkB9rmRbD5FVW",
  "key44": "4PWPQaVjvxKMz12KXHUDU1ov9oP5CsEVBKwV3GiBNvY66UgH6JgQ2ZAeca1L835sYjAw36Ngtq7iyJjLv14ijEyP",
  "key45": "Sux5WLu7V7NxCuxHaZ476zgDKNyaZqymdALX1dNWyeeN9ZbTyfhJPVYqjcv8o9Xrmtfdy5qeT7jAQ2J38xuheKF",
  "key46": "66uG1NjJm8KRkgVmaDjgA1up5GxYqK369LxMJrpND2mypT29SegVH7BiX9CZxtZhy8dFpSHATq9RQUdWA8ad5TFz",
  "key47": "D3Vwz2q2c9DktvvfgjcWcuTsr5asQUJTzYN2wcnzA47114rspSunQe1RNyMiTCCJfZMEM4e7FgaxB8ZPMj2QbdL",
  "key48": "4MbDBEMUT7WUZU653biurEowcaCQeWHSa12G2KASPcWjhsaoabYEdVcfsgDBdsj5bM89mYgC3yTbgASoCxUnneeQ",
  "key49": "3wFDPeToPcqQPuNV4YaVYbFfGFUtnG45yWzeN8RzKpC4NnhBv6hXCfiD3GvQme4Womuq2fqrLmDDCbDg567dbrPj"
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
