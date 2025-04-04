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
    "1Nz5U667PLDrZjope4kZaMzurjYVAEVVpUQ7SabwPLxVK6g8KpGU8gGFtrPD96pK6d9b1TVVEHJrB66qHq2bvAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMVR4BNxL4XBTLYgTWPUHUTdUjnCk1wS98QXLLQjSkeDf5ze1u22UcDkoAre17WGZtStngsXPaxCgdb58nzYXAk",
  "key1": "3pCjMPai2TLRZuvTxqcZCu11QtKYtSaSbL8ky4cjLuUDxVbHKDdVfB9FqJSWQ5SHWEVQWKiBFHp3YyGGV6SsGuog",
  "key2": "215ZvM5SahawMehx7fk4JU28q9c9Nhdj5jyh93RziJeNgi2qe4KCvRkzj3hiHUJcWfDvnTC2cbXqeDKrQ2LuKTDu",
  "key3": "3U6qBfycY3wBasJbEwurKb7v1ihuoEJBo6zDKdmKeYeegWyjrsGzbATKLom7e7BwLqJUxKuAfBiee1WG71oASfz3",
  "key4": "CAXvh4mgQSJrCcXWizoze21VoCu3NxsHrp7uk9oUYADgqQWWmzw3iHhcVE9HNUfpixtMHnDqTf4Fy8eCeksS5CB",
  "key5": "63MS8sPT1YzitEKfyxB7PrBrRrz358F2sQ9sDTuDPSsgGujPStb4XEg5E6JD8s4hmQYcvCBYtg6LA4UPPHDCfnnM",
  "key6": "2RRwoDUiWR6jqAuLixdQadqKmfacd71HsjtB6fwFnv3Exa35TgAy15B9NpE8gxgNgJ3WwzvMaYxAFZgKBZxLDUQF",
  "key7": "4sZcdrvANELPs2Amo6kHthzgF9EoE4va7cXsBvqdWS5PchKuKYUZZuwLji1Ji8NCKyRjXKyBdZMBspk1iLFCHVYm",
  "key8": "5Se1gpoorcNFWCMuQPAZba5c8qB2RurHotznhFWoovkM5whmfduqLkASHX4dSQSAkD4whXSmP6asLJA7Rq4jb27H",
  "key9": "49GX3fMbkf5FXFUBnjxgHBsb46QGC2oH1s677CecH1JZjxCeCtTuyFH7Ettb3w6NWxyCXmqk15LXU1vgXMWmuh8W",
  "key10": "2L9FAMA6WjmFpkpD78TRKcZ6nGbFyJfQGtCSc62sL6qvxtH71Pk79bteZR5XNQkygdwcSyh6qc4Gq8ccUPK9hq2s",
  "key11": "43YcAKcZFkF89u3k43AEGGXwV1EUae9AX9VTaCbzC3LFYk1fxBt1LPs1h97UGxWKjPLQ3XtoaMCywmJ2RG2YjK6S",
  "key12": "3nyHpWe1HCNhiHHYrVkobwYDrPGRcba7spp1kPtWeRRwmT1KZiLL1uo3rEqX77hS1rXTH4FVBaETrZt2CmLe9BEy",
  "key13": "64iuo1Xn7X1gCZVT29NJPjZmbDpSJhBXTpyfqe6LLEigPAyqGWFwnuAUgPq14z5ff7FLP8KLpE7XWiGTQmwzz3Qg",
  "key14": "EXMopjptZZ35HpgDHaTDVbBZX1WorGGTAUr5rNErjzmXJoiGe7gdMWiD6Xirw2JdrzcnonpgPa87kXSjV4xa1aa",
  "key15": "8vmUQ5CT4K9ZZTdD8y8HeYBHUobaBQePyBkJhNneN6degznqqLCNDfUM3RTShZGgD4J1dB3hwVMz8XycEG3eiHC",
  "key16": "3A1nXWrevM8qdmyWT1NEYJk4BeovRo9q7s1n8Gmnm2utohMVBvJ9qxPJaLQTF13hKQ6XzA3KknvEvsNKcheuGsY7",
  "key17": "5PoUp7xzBMa3Wt2egW65paqacuBeMpLePRSvPoMefiMhEVKjSryDKPQ3EKtVpw9ypzg3rGjWYTfNPDT6FgRbSJT3",
  "key18": "FKAD46GVyBafAf6GhF77Cem7PhCQ7FcEVKpMGzqG2ak6EQXQB47QRe6U2KZPwQDuiQaypBa6RuLj3V14RxbtRN5",
  "key19": "5nCs2KcB9sA2e4ufLKFUwDjCGCmXLmhvGZkt1beiPoWzWntcEsRXFEDjyFP1dRyYr2GT7acjbtavShQoixQkNYxH",
  "key20": "5EL8ZYjtFvuNaDdcZkuaQSwt5cEihHWhyjmXxoDacz4cLsAkWRnkNfh7Jpefb7LC8HQUfZr9QGrmD4CKRuV9y4J9",
  "key21": "3BGtDHTL3dvE48Rqd71abMLxBLnesAS7FvuDZ2pG9PvFHU5hVtvBBt2CHgbJyKoSY5JCJ56kq6Rka62Ah5H52FB6",
  "key22": "4eq8FVv6dQtezBRedZPkQffBg4h2EJTDxavBvyQFFNid4XZ2iANf1E6js6LXneEpwgDCKwiGp4EKwmnb8Asts7iv",
  "key23": "3n4PNHgzSVSrbx5cMXF1stFpkH15xsRpFyhmaro3rXpzXdTZPDrrmsdPEWbcAPPjcWv6xXYTKaiAtafBGGgVV1w",
  "key24": "RV1ygCzBQb3hRuZYR88n4iFnsT2s4zSaxv9uBd9PN6PjoE3gv8xiuGebenGAtN13a63YxXG5j9x7TVfkxukuxJc",
  "key25": "MHrgCxm6u59e6AaSUpMBizHk8UQBxLwQeGctBcFRjiD8i5Bz2AUtKa68Dc4w19PFmYV4WmHvGUVNapu4wtgqQuZ",
  "key26": "2zHcVjvxTzJ5Q3WdrrF7divosF3yUwDfoTEce4kkqAVJNZa71qZJiLHhDCTfveMT7eyacrBiE9oFDuu38R5jkhFV",
  "key27": "5m324j9xBRHeN9joBoToXdNqkeErVruiiuVBEK3bGrPUrqVo7NF8byDkm5UTsokGtUisJr31tExBzdaG9bLRWJcW",
  "key28": "5Xtaipi2dCm43dQPkQQZZqGdbZeyg3eJWMy4wnrAwpEWdbvHroWFeM4C7f1xKV3KbDNsB79EEfkmDpbnFHE9gY5c",
  "key29": "5D3SbVJsM1FYCR7bG8uJRSWfn4AP4XDLmC31WcqonzEgXwk38he48eCQppJdo9fm9oxGBT1sgb8L13CLbSEngndJ",
  "key30": "31jrYccmcz4GUP1BkooUGyrGm3RiCS28oey4rHc7sBwtb8ebHKvN1iJfjnKBtpRWy962T7ghd3sfbphWyY2cN8Y6",
  "key31": "4R9UnugDZcgY8cCi1qTdR4SfmdZufCUxoERBYG9Xu3hSDj3CfRUqAQJFMwhfgqK66Lnv22HVbbwagFuHcemg9Sj4",
  "key32": "3pe1Zv661neaJfZh6xao3qa2gaZxDj6zauvJvGEqa8ub7MgZwzfeZZCpq3JSqV36zJwMF2AkETSus5775xXTxmr4",
  "key33": "4MEvZ1wr2oHzmpmkFZvQdrjbibnYmqTEBqDUiEnihnd4yM648KThj1TWfSHH6PcdjNEvGboJBTrteHGKRhiRPPXB",
  "key34": "5NX7jZ8LnEh7D8DF92EiNtZCvTghS1KTkqRkmWRCF8du2zSgmJrUZW5pN9AhN19QbA21HQFjxKM4oNCpdsfmoMfp",
  "key35": "3mhJNW6regoapXKXRzHnTAhm2U12po1DtKdBLzzsmW3mQ6RpF8QNnuYEKYUCTcXJvG3H8Cimn2n8boffR5zxddN",
  "key36": "LZv7jrsQMNNBPg7q6T94hjghMfBoR1WFnhNPXo4sGJ1j39hSAKWUdNetbaMk92ujc9YrE3EtaUdkyt1KBzz26TC",
  "key37": "bStqJ9YsVKaqYSzPNfMnaXjV6LVqKhhSpWV5h6wgTrZ8WxufhfCQR8bgoREvc6DyncNkrZEE7izKcbR2fqKRrS5",
  "key38": "2GPWR2wywYvFp23f7FC7BN3WAmJEWr1D13of7R55p94DvLGmURRjLggnYKQtJqkHj8XmmEKKGo3bbzCQYMCKE4oh",
  "key39": "5YUbQK6DXHSyV52yPBE1jWXjwvjPfdT8ELBMkYR7m3LRo3qhs995pAvuaZnFHToLLjaLXSBvRTdutH7XbZTA1GFg",
  "key40": "66EfZt1m4kAQ3ktqXnRfTGPyn8hs7vunxuuCK3FppUy9yY1aGNtbKVvSfMtM9oKsmoRyPQ1n1ypASJgHDPR6UC7d",
  "key41": "5t7KNiQftCW4P7ZjEH1vopBC2yCPvuYH9GyhxcM7KwpdzzMBeCa6VL9WovSMJagBwf2dXtm3p7pvDBKbYb7QAPj9",
  "key42": "4HCWhMegd29k1AETqqxr4NtPRMR1hDRJBkCwUimSK8yaah7vUDcEiXdLJd6Tgpwvy7bkTjFpjRtUYt8LmCTgt4rc",
  "key43": "4K7cHaDDGEuq2UDqny7S6qJCinuRinLDKNRiZBMv7v8ujUSDvwrftFRuAApLz44qwEETFnggbrFWWanmgB2ix6Kg",
  "key44": "5igNiLbjKTAvHJosqmpgGbqbkE4mQxQEZ6RWY5Q7FUsaby9h2y1xLA1ibh1BFrTfrMDt2QSSY3n7n2PiDJMMChPn",
  "key45": "3PVVz22AeHpTreV6fYU9PnidrJapinvHwTqKGHJrxSyyLyA8TUMt9HswWQ3uFFYBMLizHcFoYxhq1oLA5ZP6tEpY",
  "key46": "3yvi9M4YFFP9d8QmSKaJdUtSdW4N34ufp2522TfZ26KbJeZWosFcNnDE6Kctr3yBZwGtH7zqsxfNnuqPWWGPPwDF",
  "key47": "2NxHAdDNFCFZsYqhfrvTAgj7shTqqMYG7D3fRdm4pNgzRN8HAkyr5KK6RqoTaQ4CeJh31cFwiiNocmwCez9XAbRV",
  "key48": "4ed3bovLWyCnPfnb7TTpXKbJ86WM93KMSWCBFJW8nFqKh1H8P5YM8k6rZkJyteairSCBdqNqvzpffsEBrHcJit3Y",
  "key49": "TQucoYegHEgknw6ut5NNbnDDW4Xcqa7mdTMcMeFTsEwYLmakxtx2DryCwgWHJuo9N5ssegGLitUyjyt4LgasCWb"
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
