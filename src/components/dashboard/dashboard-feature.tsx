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
    "5AUHtP7NDTE6aHMSFA31P8dTjxdWurEK6xFn2AMPcbLV1wkpAQDpQSuheUU3WYHQ1n1reLfMBwV3jKZwtV1g2E39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVqzBqPjqUPQLDx4eor4Gfc225N61p1k5fhLK98cXykuq2Qq8S8RL2W4gsgnrSdVqkKn8SyJWBpuy6hMqY4XhgZ",
  "key1": "33D5aGkvT93q6nfHyoKLpbNm3sew4qQkCxxxD8xdVYXdRXEmAaFyWDkS7MrMHhfkAXqUc7SdwxxFmeRAx3o8S4N3",
  "key2": "32GPPRJESUqJBLJGkbjRcS48cJvimCeh4Dx8Vo5GWXAyCcqhysiqxNTrfMV6LuNKTN1Q4Qr7fNkFaUPoN4rs1nGj",
  "key3": "5UkQ9kVW1Bvk6rhxX32D6PL11kYTnfzBPHUwNkeXKxpwxYhLVZss7ZA4GxQAjmAVezmwhbAQD8J3smt16RdQf2r",
  "key4": "24mT9rF37p57EmvtVYVUPPZeo8QwKsymYeZwGPmNAHoMLGauBgnYg6Q7Cn1dNaLKmudqYovDhu7JXZc27X7ckHRF",
  "key5": "VUFNWzrr2mLkHmMZwaKBf7A9U5aC3yw9xcemvX1duQohvvSAwv5BsbuUQXV9eG6jSraPk5ThJjkpQW2yVhtiWa9",
  "key6": "5tiGEA1KTjH7hH6uMDMSQH9HPj1D8rKrDkp5aCKpkW3zNQnjWXhCncCmEz9DtVVCeAn2sYc64wijcFxYxoVyAKBr",
  "key7": "5h2TBjj1qSEBgyB8bomjcQX6Y6sgR7qkWu5CXy999ZBZTAebpLpzDbu6sBBGhZCrL2pumLsFHvGF9KCVaMUf2t9t",
  "key8": "5En6aH78B6vPc2AW4gv17RxTNdjqqSKbxqSY5hWvLXACJvbTcSngrvZCTK8yAeQizKj6hbTPq7S5xEb7mDQeWmHH",
  "key9": "5DgYxf1zqkCiENSfU4vq51RL3qvESu273paUS7U6yobafcv4FgLarT5XJZgmSY6A5JWjXWWVz6uejnvYDfgtu5sH",
  "key10": "3jvyTtUzQzFRDLa9ciH9ygnpZX5fqr1ekD4bpuFPEh5Bu5WARHRDVXS5FnyDU5bJ9hxAAtUrZxuuRJ3CdCczgMRU",
  "key11": "5LYqQK7uUfiet8ogCyvAkrwGCn5e3mfCAQ2Ju3dFJ84HuJrWe8w3Ci2m7qywesM8bbwTKwSV5aSX4j3jQUw3ExyJ",
  "key12": "DWthrPnZrrUQRtU3x19dhqwW8R4c1rf5yWGPEP9STCXQn2Bivwby7ksee3rDr1jaXQgxnLi3hgZTKKEzEyAc4QV",
  "key13": "3o7ipFqRpYvP96yS11cw67BWNW8yV9MgZf7kyZ2rJPz8Z73Cc1Tvv6Q88mxCZy2aUWZxQcMNALSDxZQJ84wQ2uhF",
  "key14": "5K5PTiakeVi5BCc3fgr9vEb6K2qp49ogASGSuvRHoiFvhhesyjkmeWjEfR7HQXTeypmpM1q7A7PbXeuwfhfLJb4t",
  "key15": "5ahHuqSofSTPmWaNS2KyCikZkFiuDa47nae3PfuTcvAbRStQBPstGmQFm1RGDWBZqUa7AyAhciYRdUbxUA5FfnwM",
  "key16": "4ZsPpFkawqy6nv22nXzhfjV78Q5JBLwvcRzzBDYrkZFWWFuZaengR1uDzzwwp8LyBZjh7XCE5DYQfQva9JV9BgDr",
  "key17": "2sM4pyLSJ7sQT46owxZq7qzBWuBSvFFksM7XALeYVG8uHAQ5dDZv9iQWoVW52weuNhGjaAva46SY37GepNyKV3me",
  "key18": "2RiD6rAFnwqpZ1deETi3HsMx7SMwHqMPAYKTQSecyZyoCzbPtYvgvLX3zdByYzeHiBgqXLn8fht8BCsZP5nS5Y7e",
  "key19": "ncpntTM4JHHcCJ9b8USHonfEaTARVeFfS97tjZbkYGRbwPux1G18FuxGngjnR9TLcNmdf9ub3SkiDbsVdcmjRPR",
  "key20": "2Jwi3gS5NBcuwcDEh3fhAMUd5SP9imSi9Z96RYiFx4tF7GMxFNHymKroDNy6jVchTMiHT92brxm6EJwWNq4MXThE",
  "key21": "3Tw74Nzttndbr1vjHvBR1Seg58WDhzGFSZd5ZC6BKFgiovqjz7C9azAdmKTZN84VZd3MVDVxzVrqmRu9y7X4CDvw",
  "key22": "2rpp7DfsuxcG4ay98vRgNkLUJKNBdArWmyA8ueLz3Y5TYCaQc9Sx6gqzS7gXupwHX7tzpZE9zpGYuThNvZcT8Q4y",
  "key23": "4NKjReDycVuXnb9MwLEEDZwiE8EZV2CUsUzcDtKGSEquwUzrxzw2MCHhAHW2NZt6Amnxk8CRnxyuJDYNqzeYwhgb",
  "key24": "5PqRNDNvVnhjWQFauD1cRn7dQb2ckifxEJ92oytm1oR6GhGWRYnafQPpCXLQgBqrr2eU2DEPyF2aTxidFUXqBGwY",
  "key25": "5ARkMCRRvVhEpTbCjq4xxLYCrCNLXaLWyNcmFSR16v3mpo7orH6VvrENT2bpiLRyWHVo2d3mAyqu4e1DtCbK1XH9",
  "key26": "4Af6uWqHPjhB1rjLRq1oCRHLBuvfSour8NbZcrhHfN4UEa46Q3oSYXMjzmsqziVDHUzVkg3Mu9rvaZMuKbYhWivv",
  "key27": "2NeVBZhL9zTKgrqCGLVby6m3gHb28t4itVghv7kuLS3P81fAzXK7pfHK1KWrGv2CfJJFh5kF346DxmGqz8rVHXaL",
  "key28": "3bjFvZSnAqn4bZXV2upgp4sMxjufjbnZmb56Az2mnk9W8ESqUqs6APnjyqH96QiKz7BqnH5Kc9atf4zeJY2zeXA",
  "key29": "5vMttSiac3vPJFExBC6CmLGsZYTfq9xQrsv8VGb1pWGX2oipu5UY55hdt2LS8Ey3yAUKwpRZj4DnegL93znHYyhW",
  "key30": "U3Lyj2ixTVtXFNGPLJrApiYeuUdvKMUXJp59RWk1jFhK2TcYUK4SEJbtuzdwzzDTjJThEXVsQZ4oTA8Ji3c7c1B",
  "key31": "2j151SsZqzFy5rtpqvgVVD616sFu73PLm2jksiBSBegjV8YEYANgZmiqnjLMSW9nEd76sdTYZ1MJm171befbZ6Y5",
  "key32": "8UoWjqUUDu1DYFBdnaHxsbbrAUzV363Sr6ni2qhXujMEAgQeZG2T2HHNCPF6SZyWsi7TWpbh5GtWP4eNC6msNDP",
  "key33": "5drEJrLBdL8biCjyAb6cLRoJSzxUiiwLKR4TEm98n7eWZYagZHCSFX3swbsT8jiekLeviVWbXYMasgszPEc49NuC",
  "key34": "3Sf7V7bWkDxBWMrT73CUCAkhdXAYmNRzZYAWKmErpnpRHZFAT1MhWgqeW5QYbgvSt1RaNEqnz3jfRAJ7F5NS4ptH",
  "key35": "sZfkgxqk3RXZLcxU9N1J347iqNpPg5nSUtReSSeA32Xaq46TrwFQfQcehJK7PhXGukv6D9UXfEn1fk9WcmdCo7V",
  "key36": "3JL3UNBpurya3rwdsvdpYqe7AnXNLx1YEi7WnhR87yRitEJjczRpoW3y8YRChrLRKPGvoKPoBrao6AJR4Gx5ymcs",
  "key37": "4DPNRN6ZTNKmtUnNaBhBzZWp5BC7aQ1eDxoqD2dWHmLLrYvkkQn2q4f2dVsLTT2XsxdedfiDJxnrggjrY7WVfaCr",
  "key38": "4tg9xj9v3qBDe9ZqeiLiFAXiUYiCEux2HXBRCJ9MqKMMPNxh9bkvc3J5AHUVy5PKjoM6AoGJAENWVAnmqVQ96ize",
  "key39": "38bw6HQhcZxMCCxEjgBFe2otkWXUyvMGanciMu3chJx7fwp1T184VGxiYz6DAn13puPxm5wCRVaNSHeUaEaRHMaa",
  "key40": "5jzDMExi6knMhE5ff1wHrJTS8Z7wrdxz8T349d1eoqsde755fsYuXPpcBK4y5iJqKYctdUnPRg3DzMSfVC4W5Lbp",
  "key41": "3QybenJQWrYAeUGXbxs1nXigb7kP7GEDxh2i9mHMBPYbWRpLRiaRfQX4wjTVi6DrVN73xc2NTtuJW7LikPdddA2D",
  "key42": "5jJdMVydak6NVPmS1EPJYjbzEtTdoqWT1vd2kcqpdfCqhbKjnfnbrDb4kybofu1NgRrCndhWAR7AD4MhGJDuk21J",
  "key43": "5v8pMncRiKmCjcZqLfPMY2RQWJEX47fHfH7owm3q3FgocWoRTeB3dpF5ESUWMtMehTf8vFLvd2ehbXmxPwxM7hDb"
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
