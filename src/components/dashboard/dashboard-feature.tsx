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
    "3Rn4pqhqcn49SjbiPt2pS23v8avCyqMD2MxTiJMRJ5svo2BqsECDpqn9h9nq9AZfswXYK7JSXpJ4AJjuvcdXnNR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81HYtULU5qM7LLSKV6vEeqA6krzxBjyiXnR2Aas31uKBA7NNzkhkLs36SMTeULs2werDEvKvCgrhkk1X7UmobEN",
  "key1": "h84YtoyDaLfGMyZR4bkQyR6VP5hndCwgeESi1JxFunXNjtChF5AmcxTkpthuZLY1qnXTN5aLZKc8BWQku5TBLfM",
  "key2": "mr7gaVZDTfj7tEu3SHFkhyqA9c4kQiFZUn82PKuwtxdDdis9Kujg5PqFR1wHhD9KFdDeapHXiFGGumLaSdLXR7x",
  "key3": "4VMwCtur6orXavfdRWi54XM4T7SchYa78HJGiaZ15i8QbNTw9qvZP7hw5FCjYLR4FPAyC2hk9kipsWdLjXo6KfyC",
  "key4": "3RCNBY1cWkpLd8CyDbnewwjHD3Q6ysv5mVMGUd7zoHdtaatgQiziqjEB8cDFpwPex8u8Jxxfc5JhrLbBz73UWmky",
  "key5": "3hfCZCBX5X6rHRsiy5KQq7dzu51YsYNAbcg16UxTuMpNrXbeniwVxwRHEHaegFtsLRvxnG3XvYZK5P9nih4nkzBg",
  "key6": "36DMdgXNaujRZ7QVGef1XC4e1byrCDs4oavXtD3Xiy6jr8aeBSbR8xZyxVe9YjQ3uHcc9UBRFyALAMR9ZKnYaGja",
  "key7": "2wLvPjcbWHXuZwbjdkeetAQNpVeTmA5f5ezUFVdwKam5wPtbE2B9ZbGJPxeZiaiBfZrLgrGRtBoKFBusx3xoCCKt",
  "key8": "2xDa1bqmSPua4F5BNai8nQLVguBxJH5qB76G4Cjem3LoDxZTNLoyaBKFnbzPRhXtSXZBf9dtRWAoPLRGZHGKDcc",
  "key9": "3xQecikeEa8izTfWtaiXwda5xELTfiBUK1ZLQRoMxtDqKEhYWAZ6xf1MSyfvLx6p7MfocwwgfwJxp1vGiZ5q1xFq",
  "key10": "3dyeop2uMP1tBiRgFszevRHucmiZ5LgWvrXhKt8kvWxopb912sj2xfiJjh164cYVk1MrBAJEt19HuCK5CSWe4yoR",
  "key11": "32htFvjvpgdw5yC2XFNfVrbh2sCpgYY3CbRFACEVJ2ab8fPJqjGt55WkS67ruexQzDpc3H9xqTgJXMWe9ci9ncxA",
  "key12": "4yCA94iKPnqA3JiN7zvM4yJagmvUbFMBLCkjfrb5FNxubStjGo79GC411LUbTMCiTSfVqsUWdXnvPLKAQLiDEwtA",
  "key13": "4JrdoLjd5Hpy9czmrHbscusqhpQDJYVcZTrmb96Vku16XumUihmSdDgMxRgsHrGSYcLngeSQLUvYxNRk67w5K7GZ",
  "key14": "2mbGtd6AuEQmUmEivdTYSw5S8nTn15GnqC5G5TFx7AtdciR3eacdMZmCP4YvdQxxkBcpNXH2X2Ngp2wi1w5M5GNT",
  "key15": "276ygH5vmQmtec6o5jBX7TdvNEPGu5KvvN5MLgSbDr7W3Rvi4TWAV7xSsyUWfk5VCwietZK3UXizzw3BNcCo28no",
  "key16": "3RFB4bS39wjioGHcUbPA7jQVWT19Rnw7CYYhEmPj18pY5MnMpJW8dMPRk59KnzjYKhAirjUjk5TRy8xAVy8H8pQc",
  "key17": "58hvqSzEbEm2F7JTU1t5uXRKQCT7Q4gmuB4WkM7NoCQk2Pp2oRfExgbeN6SizYeyufkMyonxvcVrC8D2cyP7z9m5",
  "key18": "2DH6y4ieN8isMoDHdrqWN4bryzY3iUNjGyNc4cf1zMAbVtbMc2SGySbNP9EzjoyWH95whbHd9BbLATHe1NgUsE1c",
  "key19": "4myWhugynT4eFSXt4m5sGVNuW63Uqi8EmRq1jKBhDMVJtVPMeQrNkPVHgSLDhtydujUBDwcDpjhZzNVj3DuBQ4qR",
  "key20": "2AgdTSQhH7bpkCfwq6xyzRYUwsDth6DeTJpLTowa2bHJZCcMZoZLrKnwXTdnevXcB7WanaJJJVeVRe7NK1bxTFtz",
  "key21": "4ZhQXtqBa1A6t7PAR9MuabddboiK2CRGShNtKp6fF2rGr5ojQ1D84mgj8tPyDZiLVFn23gg9vTvZ9amP1FhvKxrx",
  "key22": "5D2xUyB9yD19m6m3C1xfUKqqcBQXFehgQHc5PPsnKFh4AZnJh4ugs6iLoZcWhZiTgwiTMuq5z78RxMhtFHUa335S",
  "key23": "3oqiw1bAqnYt8NZq9hptxXQW4ZXvMaXakYGGwZKuiWV2s3ZDkqqj9T5EFefXwno3TxKEQLP3cjxn6YV6Ut3JLqQp",
  "key24": "64hqtUEhZ66nSMJPfaWbZjAtMi5kbRuejmtom1nWVxyDWJKwHgLML38pV9d5qWTbnYJYXeerfhGJqwSsxCUupYTr",
  "key25": "5keuTVcjorZViebKEftLW5nmcqHHeML7ZRBTGxxeg3NfEreLPg5LWLp22jLCpzw6EnSNQ6cJr2uRvrow1NBitrqH",
  "key26": "2rYxLs5xxzDT9Cdbx2HtxntkGxWxMFrSRDE6TqXxzE4ibN6ZsYs2jTtT2S9GqgWxsCR3FM3NPE2PxGTbCoXJ5dMc",
  "key27": "2PD1tBYrnHo195oExxcgLz9xtxFiP1zuznrxPD2dfUJrULM6rN4joJaej96d6ncMsmrqu4u3ZShdLRRLcFYeyUoH",
  "key28": "5L1CCU9VjHGJVz52nSJebyckArkMUpMAVxVkUgP7ZtChGzKJYzGeLYfbVBdvKX21ZruWBDaaPovHrFA2hnmccSCd",
  "key29": "4t3oUExN5dWsWVRsETGpzAXoU4YvfYoyyUffHSnxZ2uceyKsCTpeuvr8KESngBXzTTVdqHcqCu7qozXFSRnHooXQ",
  "key30": "5gZHgNi6NcVtXaZXXKG59uzq7VBisZRg1d6sofkbwMQyUzS29vmXWQPN78LzeWFP8tJUwE3AHv5eyVDM6JMLM9wz",
  "key31": "eSnZoff19V6wEtpMv4M8VW8yyv6FvodEtfxmKD7utHigwjDQQSL8XE5uohnp9UjnaAdkZZyBQjMsJnYRSyTLscx",
  "key32": "5iUwiHxrqgYYZ5B63kqFBDoRKM2JtrUwY8WAj9cn5GeKtVxKBTePMmicQJgMzj9xDUkvgud6g1NnepeaqQKYypAq",
  "key33": "wCXRuZV8prTccHhWcHCm4nnRfdmx9rD3wwHt9HdhtnT5dhKbyK977hLZ8eTv6j8LYgaCpBqL6ntxa7zZQVnL8jy",
  "key34": "3ZyF2R7TuGyVuXPPjRQTVtJ5rcjxfRAtFGT7GvYF6aWZCSoSafMQGgnLnZTRRYxKg5UeRNuVhNCCrS5x5RPqMupH",
  "key35": "5w6zRckr5s74jsu236rBuNZXtrZihWykFpE7LECdSEqmrzk5rsgRyXLaVQMiX3eVBX1WpUzutFHiqNeYdYEDn5QS",
  "key36": "21BKdDbroR4ATPVGDvrStmC4wCG7dxpt6wrLebzPZmqTZZmv3b8iznMECp2Nr7KrHzKdA4PBzPBEfDZznSKjRKw1",
  "key37": "5jYo3onQ7yZtHiFzWhFJLi3q51sCq6pfUGE7MMF8DfPQyQkAmst1q4m8nwHJ3QduX3w4EA2EZ1M4saeF2aQhbixg",
  "key38": "2FT4RABFLDMAo11F1uhccPft2F9qmtJP3LaMSFHRXnYUBP4G6ibLuqykmTwXeB56zmpXJGFwFwg6JHGNuH9cgyd6",
  "key39": "2nPmaqNPPN4j7M1qfp2sHNjVcqCFF4CJP8YPRCNRkffMQd59VKA64fuZnmPGrB58WVyZ3td5t8UsaaXmNwhqyUdn",
  "key40": "2R1mnt4ewSx7c4gW8QNDFqsKtXchuTQLwiwSfRPb2De4omsr7kAwWyysG1WyhnXFNkybf6zdyvcdq5kH34mCFu8j",
  "key41": "fcBaZWB8MqMLMg2EMJb52RQoe5C1jE76PhDZNar2ca4yGN82U2DBno5AdZzZHMKtkcAbkJBH2kWHKaNbjVEafyH",
  "key42": "BnZzkW5j6wTVPBxaJpRy5XY7Ln8EH4CorENjMwUAxT8FJJWUPWRVUsXdqesuAEgauiCW6UHfkMkh4kAYfCCYyfX",
  "key43": "4zuVSoLJAvKNhVQxvj2jeAx6egWJoFXQ7ESEL336YoJYAGDUv4YCGG317wgU4gAjL5zNVbqxtvAQieZSpmEp1zyR",
  "key44": "3YPk4ueMWXSxPDBUGnAnUt124uUPCj1MW5CqGuHEpE3J7CTpAKCEjHMMFcTuJQSdi4CRHFVxMDDnvH3VMSDdrtJd",
  "key45": "5PEZjA9ssgD33GMvCyVXmmDNPCJ3dNZv3J5FZQSkFKikMKDBFBCEYEyVHGez1E4tixcwZJ9REthdCr26RnTHPrn1",
  "key46": "2Bcg6usxsBjeW2NXn2Aq36fDiHcLbHPYQTW9YxSoSPHpvZ4uRsjWgv97aWEeqdKsfv4ksUeWobojrACqswSo3ibC"
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
