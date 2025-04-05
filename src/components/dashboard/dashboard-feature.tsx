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
    "4BVvWoPcQurRPAfnYHTRHj5GstYprqnDVTqAwcPzYo7SYzyMpFuxdPsWpe4Hm4NnwARVS4wKLxdyiVatftUGy3oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrL9Zm7MfGNS3P5qV7FY3FUp7L6o3PU4CQpWNZo8LTTmBa1mAsKQqFALooxi1Y16TFZUTyJ46C9VJ37D6aRRyRU",
  "key1": "PzLAxq6QuustehcJbzHZa5GuR6iRJT8aDKLDWVgJ34dWxXG2ANWnNuVMriRYAaQY4N4ybR9qQkvzQDNHKHbHZmM",
  "key2": "2jjDdogU97aL79wabMLoMXkxoePaJrUfBeBzXY1pSm13Wf2gvox3P2udLucUFhpBLUdY3jveDbH9ZUYQoEX8SiVN",
  "key3": "67k2fJ8JLc7QAWfH6pi9BMcLX3AGViW4Jh7ifdEyAFpdw8P9NEpyqrg1CUw475iTcE6xmu9cgP4sZ6pRrgubUcba",
  "key4": "3ZWHCwSsni5aEw1gBZkLVnMLF32ZjdMQLh7MPNTDxv3jXwSQ2XWxGweNLvTwLnu8TLC7KUGHJBHssgxPEC2KtH31",
  "key5": "4f4M2oZf94iScM1iovEf3YFC84EUcCmdXo1jj1QQhjUoKXFGC2jwj8ZNHbWahNMPBotJmFkZf7L137mgmhQ4Qc6",
  "key6": "2S1SiZTucBE8jQRrY3xvKoVSSfhFiZom5vB8An4qGM1TcKXWVEmz1icG6PWS98tqL5iEtKe8muQUUGG6gxX2ZgJa",
  "key7": "2RX6vfED8cZdivqMFDGfi1AQ4gC2zQeMsRSAHkxttrfhYQTiKodNAnFnkfQ1w43opTuhoQPWEVDuRc1W1VXq3qry",
  "key8": "3fHNkDQcMpT7pzfrNUN2mJY6Ye4Z4Wh8YqWxn6BysvfNBKvzg5a46pLDjA13dSbxCiGbcMrzyYvVD8rqBgCKKfXR",
  "key9": "5UD8cYVCfUtYyhda4tT4yhnmntvPu3277bWEMeEmR1nR9P4qp6aATrMe7xxCDtT4SUJdanLexbBL7XrXPQdFtUMB",
  "key10": "4um6FS5z5e5LjW37sZyBTycwBWwQ7Lyv2rKQjXzEW6BzDR3FTnjvQuBXcuLJJww52EDjD5EFLjBKwFvgP18yNSLs",
  "key11": "3ibEupKpRH5XFQfRDSwNV3okW1SYi3gGcT3P79tKAfNbk3NHitTX13zgb4ZbfmrRrM3rL9hBqnAc3FHSmEqKwNry",
  "key12": "2pFsjCWZ59WptARsiHNUvWb6wxL1qC2J1s47ZznhRomCF6tSBBM5VvgLK3HW398EDYRDMKTAbYNNCxgwj8wMA4gj",
  "key13": "2ZYnF3PakPoqHVRH3JtMXz643QMF5kehF4Roy2oD2moA8w12At3pQWqtxf5mh9ePFttmvYTyD1cnuvndtgyDDazm",
  "key14": "RXBy4ggstLyuNUrCpvXBR2uTseFEXTDhepEuhDyEfbiopuNQKtHdpyCbsAphBqezdxgS5AR9JCnmN3jzrjYJe9B",
  "key15": "4MVzkPTQGCQSAreefcQBk2CP8ADiDVsktF4PmRaQHUSsKpD4vxoD9SZe8WQhJDY8xDhn3R8i9iwqiewFNbiCvjnX",
  "key16": "4ogL21SRQVZv3mMkPiiR7C41XQRfSS1fhFhjnwqdv6iwb6cD6BHzRQsrDVGy7QHpktSssn87Jwy4LbhLW6SfFFtB",
  "key17": "57NQ8WRcVrzqbgtAgL6BNEayYjLPcC69FsRX1DZ7qpF8anNqFTUVRAPXLzD1VSiHBpf9hhHjd6qdCn151eprQ7NY",
  "key18": "5UsQuFJM8Xchjr74pyHq9MYDpS7qN8aXPfx3sJgvZVxvtEtYWJThnrouDa9Qj3512XYfHFphLLM4WHq732qnZbXx",
  "key19": "4aSnTRrLY56tft6gVyH6ZxHzQVA8kijuT3zmnmyicrYE643xLXhoCVpdeWg7knSNhNsqzbJUc6M4Ui1sRWUECVQi",
  "key20": "FJ5XWLh23PZaoHfvKGN2KKLkpzoKj9eNfSxBK7kdkw6vyXjCNokZLHayASvTo55fUJWcm3ArVbWD6x36LHBpw2s",
  "key21": "2z1mwRX35DD3faNRGqy1qRchyPhhKHqgX9je99UoEEtBtgAWYEMzEcRrCJA4xJTZo8Zc77GPLdj99oRBYFqhLLFR",
  "key22": "5iGgxkFeDohgPh7vcM19U1ALm7KtzJEe65yVkNCTEyuZydTKcRFRUKMpnjpmAc5EazipoMiHPVBWLp4ksb5DW4fF",
  "key23": "47AKLZ6opZpthGiat6PD5GpAskpc1LCDihDXRa5sZKEHqT6Yv5hWZbzDPbkB9LwdT8nm4jt5DEbB2AfPZC6Rra8a",
  "key24": "5uGZisoTofjd1HJ1awRwfW3D2Ve4VFAaP5w9meoMbaF8FCxhvVsjgHsXTrsRSEJRqH42QQz9mdLX2WCcbBi8EPGr",
  "key25": "DhFgWQ4cL2erbt7tet7eGe4ZCU16zb3ndztVDTh2iy3GLzzq22wQPzRs2VDiYgXntiPfKgHKGsrBPUpUicJhx4K",
  "key26": "4ZNW9KZWF2MShxxiUwES9VKL2Tv8AKY8bZDK9KcsYEh2mzsNqKYbWqdcbQiL4JH1eEHmp7CKCD86w5ExJQtDSvkD",
  "key27": "XCP8S6pVVMX29TaDkJox3x9ruoc4nFPTUv7QbAVTT2pKzc1cJGa8KpN4wQETgYtcc8GjCDNVYMoc7VVHig8d6dg",
  "key28": "rfsFPL42D1PWwg8kX8BUMkUQPGxPmZekPz3a4Y3LW2vbzrYnPer7FeA8Ke1cM3DBfPSFgZVz7bsAfZWketgBua7",
  "key29": "56Vw14GfyMkNH5Y8Tcz6YPf866iZzq7PxdbgKozXdkvVRwwf2h2j2yQDpxpPg4Db1vDjXNZ6u36XLGoSgVa6Haiq",
  "key30": "3LVSqXEQBbeHA7qTtcXcyQZhBRToy4WEpgb5Eg4ejJkh912YKy6XT4ai5MDkZGZNksY7Sd46PM5M55DLWqp6UxVU",
  "key31": "4FjreUfbAimQFhE8XQpK988zkZfNTSMfgWoJok2HBnf9bYvNCFHUwRjA8CvQmX28WvYKEDGxiUpA3b8qVH431ZaT",
  "key32": "27Juoqg4o95DFaVbsrzpXECfPKknHyC8iSUAKGD8perkcU6WPtmCSLfT1J7vfRinUjEB5b6c9dA6ueigq25AbyrJ",
  "key33": "5j827Grh22ZSwEFpWDDBxcsB83rhL7MVPC5fE8BKmHehjLxYcHygZddMQkCL7Lw9iZ3xFp9gSKdfHpQWjemkTXPu",
  "key34": "4WjSHsC9XPH5ZeDSTEMKEYdxwsDzwAMc4pVvR95DSVBdGeHApRohhAhB973iYYFyKGBC83XewxZMUjEv2SbQw2ni",
  "key35": "3RF366W93XyLPn4ufbfDVM2VrXQC8UYNoSS6CutoWdTSsj4uFkSWejLADHpjfZ6Sk4WfNSTVa8dAGtrKdVEVqnLz",
  "key36": "3YKQee5SDHL3NB4DWQ1MtTYzzqTbMrUVaLMVXuG2uzJhLDRmCsArxoR9F8SmFXxQwhgC9nJ42z2CUZcWtUtDXDmw"
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
