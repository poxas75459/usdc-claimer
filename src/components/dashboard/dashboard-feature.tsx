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
    "45VjvkhqSvdiTwSgFyfe8GdtrrpUQ2pTMN71PXxRdqwiv2nwYDJH2VVcTo4dErzwaZUTLuCWXoEeaqGFbhtSLZqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCgjz8QXTd4oevVAHq4qNcru93vpN3snjTZTow5Xih9pcCA2jzXQMMEJEPthBUpFNHwugz8K4sqKhwEH5tg57Ri",
  "key1": "4UPRAJ5vXAyQ11V3w1D7krcmw57Jw57xiRVqWe5mzrMKyBuot96Pqs2LkQQPNBZSJweSjY8FAxK2hsZkCmym3aya",
  "key2": "4M47Kr7omnFFKfTzqKKcPvKqL4T5Q4XG3M4TCXYHeUzEzHFDZPmAMHxS9RfxJ9M3piHpAiRd2HnWtVnFoz5JZ59V",
  "key3": "5UEumXnKPWspWrrEpRr55mZ5chuBHebWXkiGM9wsgXD5W8fk6cHaBwt73rtWyfNtoMj8Fy5PaNVz32vsa4q1rCut",
  "key4": "kZ5XVeeYGptpsAmSRV35NF1rjqpr68YDbZpTkqNHBeNo36brG6QwR1GFQqcpKriyXa7Z684L2LcRnFrqhbWQXys",
  "key5": "4DVLMZ14rJPezQK2UfjTbASeJUPPabyvDmujjFgqHiFSKh7YeacmqVKvx5nZRryddRWbFMzRXF1bA1Hx9Jk1TtH8",
  "key6": "2VxnmGpYDKauinQeesRXBSXHEAxnWcDmeAGRPCGNSTbNqh8Ldqp5U2AtVZDUQ7AraDSYNjU2XCzFjcTjdP9yckBW",
  "key7": "3Dop9baPS6FDVZc1aPMZVMGT6vh4SDDV7nF2mtbsnUwkBoKQ1xk7ZnE4oLHx6N6vbSHUinhsQD5eQQAaaqi6hGN4",
  "key8": "5mMAX8DCxPP7JUdaL2LffXmCE5NfuDJt9zEt6zAerHscyCqiur7VgAfg7c1fYWsJMsE1LP2R5KXrMJUiwMdfhKR1",
  "key9": "3nK27EwcrXUp3ZnYZ3JRQfZam4QHSYbFJdsN34dd8PZ8pMjGvvE3V4NT45yh57mdrZ9pY2UPyHcVENRyQsDvRy4C",
  "key10": "5HeycdruFJhLGsRpzH7ec1iyWQwhRmCpD39kDqGV53VgSz3J9qLJGcsKno7f1HALSAbsA99u7i5q6iArqyhHD6bF",
  "key11": "WeqYiBc4YWduMV6rcANF8yZPC9o7MUJuKUUQUXVKEZBHDGasTy6cNYxkbJV8bectoKgjXv4rPNJagtHD2Anobwg",
  "key12": "5q28o8WyMYyzsUD7R3WiG5ULikrBUzaZmaCijDRwU92sQtpM97fFjhHfpC76bSGhFWRkNxJPEVeKY6sdFSwoowBb",
  "key13": "2JQNovLPzAT1sANXJ5xP5myopai9Hafv15c1nnuvdBbw6W8dzcJMy9xNW1oMpqWLTt4Lwqz8hsUVp57yEx5LJWS7",
  "key14": "4SXpxTExsLVN8sDHmmwjQ6fCESr9svBDYbeWmjAiDtoaJBGLFmwPk9kM77uXxffDHAwK1bhaMJ73DD1rm8arvkEg",
  "key15": "4CTSKn7xrhVHZizyHvuL8xQKsSRdgLM2jcemfg8z92mLhKj3f1ogPnjd5DwA4GDzxoxUSNzJeVF3R7vcxikRmAuk",
  "key16": "3LaD8fn8RuWi2FbhhapbzhA2T7KfrU64TSzqtyChnc4G7JkAGNzHUXLdYnFeCEGXGxpcZrgyGqMJuGbiF8W3t433",
  "key17": "54rwuV7j3CVyesocSJaKDjrCjCzgw5zNksGeRDWm2Wvb17hjxP3bvis29GyaRHvgtihtEzNrRChgvwv7586TbxHX",
  "key18": "3nfZNtNuEcUsHtggBbBH5uxHjHLCRo94w4gFH16QSreDXnV8eNh5mYuqsaENETXRDBLSfQQajLKzKTGF1LEgjreN",
  "key19": "5CZNKjvg3rPenKeTCaamjDekud4tzKZbJdauedE6PuAdyY2AMVwUd9YM2oPtSJmb9v9WNEYjaeVH9qeduquhYgKC",
  "key20": "jrtBKh77YxHTtLgMHW1QCWsMLvtUnNiBnLKHQd32hXbWmaUAJnU7h63fNtkZAWn6HQyzC7uAuy3C3tWdNdcFnYa",
  "key21": "5P8Cd7de97ps2sAviSCbQ4HXpPxNoT5ZaVBBY8xQbfEonGJwxRFC2iNhuj94ydg4rrZvGuJtYSMt5GRWiDEhaWNe",
  "key22": "2wfhkC4r9dphM8BZqf27n2teqecYjNJvHpTcrGtw4Trpb2a8ABHLSCg9S1scs7VdS9YCBhKMSiRYCMJrWJMhwRwF",
  "key23": "3CJAbRHw7TaQngMhP55oPd6Sa3UhpnH4H6zrgSSh3tWv33baFtjb1Ve9A2Rk2GPbTbD1P37CEtfXYsutxuEKPR2Y",
  "key24": "cNEFiJcydDrZrNJZgyZDJeQTDCFJVVjgyxyh5HwbknDSMhraruhZiBK72EdnmJd9Wwo1nJ6LQaPcHvYoNLHg3GJ",
  "key25": "gqudmFSo1xJQSQh9gk3fybYo6A13gs6NBRox7SBJU2V6L8qnEiTvVMtpNj6arBqVsyWhstHNvowQysQD7gJRcSd",
  "key26": "43ZiQR1qt7PBk6dEMPcExdG5mVUtWcBNyEMMxVVjAHkpqozFDDrCFLhNjRyeYnf4fuadxHCCoHKKE2FCME3d6msD",
  "key27": "uBjnyaf3aXVT2WtnVVgfqAJLov5cwNAndgVVNfvAo3CcBzjbqwuKQUXWtLC1otdNzCcoSzYGhidggdYLWyucqPM",
  "key28": "rNNsf5pRKWb5jqMNXWevfNpfHYAWcrexfhhzxEGcYgiu6QLSuMCmb3q7w3GoHK9CTdLDrtBazJhPpKAMWcYtx1m",
  "key29": "45QFak6TiztLunpbe5RrbRQdwQByHHZsDDoqSRsxGCMHPCzKSVynDm43MAFWxWwZihQUkGnH5hm1gEHaSfVp28LX",
  "key30": "jHVkpKozcyzcoHwE5thQGxp3hxx9KPj1iYVmh3zUZAVxo9SqGRFAgK7K9FoUPqL2nvmWZYc6MDgErxXRJPyCfSo",
  "key31": "2m2nFdYTwXyzui6auN2CtxpsRfEV6XFRnNrjZdoZDBPZiK82kLowhwTD3re1YNAyZoXe6TAHe8sUjHXqxMmYgt5r",
  "key32": "2s6fdDg4y32uhUJdJ62iYPjif2wpN6oeByAFfaHdEgUR1MbabZ6adqDvZ3JmqsxzfcP4ZaZtmijpASfTgGzY8Vm6",
  "key33": "5b5t2P388NRNGLjTKJcktsM94beJBHkcRmUm4GyzctM3oQCwwiPiGVjbTxJdfc9NQW7NMHE7fsE2oUtyn6mAxk8A",
  "key34": "3ioj5gXnpL1e6ui2YMHYbcsgqA2aLiZXmQ6sNPLnNB72WZSjDjT83wmV5iiXQMQ5n9nj9m2ns9WWXkGXmaGbydLH",
  "key35": "9dFp8EJZhgeEf6LfsQuyvhsJhwPBLnmEKhFL3rUHxUY1YTS9rrUgpoX5i6UVCTsBq4ZYfdTeEkc1KDHMwo9tFGs",
  "key36": "5GYo7EKNTEAyuHjPcaEC3m6z6sNjZ4dpDuRJHukPPErraNPjsEuDuDVWJjnHk5V18JareXr8EwaQnH835WjvvdBh",
  "key37": "2jYeTrezAExwFjf5X5xgpW9rnxBFyGsVaZfezWxiuKeyYhL4w7HYmK6mgvQo8JtSy4oKzuwjmTSv32e6qwxRzBy5",
  "key38": "4wYh4Z94UdmNnZzZQZYo3hGqmupLzZHP6vqwjpTrf3G87XSLTPcfJRVpB3QnAZhTBaRwuwvu8foy9vuZkeqGtqHh",
  "key39": "2aH5iMiwzEYYnH9Fu7xjofuUApMb6YpJRG4Xyu489rcC23J7Lzs2XcMPVDUFZVummujgyiuBLx5PivES7XP8P328",
  "key40": "4wdbZGq7HRZREhm5CPThgiUooQwuEBv1TTTXa52ap9w43i1AawQ3PuBaYMp1hmvnoMjEuBQ1WJ3zzbM6BP1dNkam",
  "key41": "4BUFVm8XgHGUdGKd1eUv4HJjqRwiyfUuanGndwSVeU1i6P3Tw5czjVjeDdtRMDmJAYMBxSH68D15TyezBWnLKedk",
  "key42": "3DUPJENUgMA8yPHqLJg24wBhD3FWngEVS6ocFPwCMLKwE4kJhiY5Zuq5AiePxDFZwSPDJh1mLk7WuFfuivk9EBpM",
  "key43": "34gQvGRSvzv8ufEvcAtHRc5HL1jwP4nNiCKV27gQc8rV5WcBKMuzegnZYSkyeDczvGHbWFrCDLMzgTbVQ8m3vPgN",
  "key44": "38wQSbM6o1QifhcLhc8hCNP18Th4bRz4daMvEJtadjvATRzj5EfXZtREzVmmgDqCEtdTDKshKsccpgUjfhkHNGj5",
  "key45": "3m1vFNZDdpJ6G88Y18QqzAHjXWiXkGp2PtnBT69ddq1piPZWjuM1rPRg1UXafZjn96sozNm2TTYt7dYX7uGQmW8U",
  "key46": "2vbS11zVdN42xHiCPokbAkKjtVWJVrRMaRavL9FwFBqAfwF2BWqu2HRsfc8SCTJgrU5UxZvQrtWNH8HhfzbEFhtU"
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
