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
    "4QQwCFRXJYboJ2d5voZ9jAiYMsQcdiTPBHSoVSV5A5v9LDgaeN8H6UzdwTLJDxWJxL3ebqtBZwvV4fumkqvCjtzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52GXrKaUqivDtw1cejJ6fibdy4FB9W7FL7tMUE4meBhAXW6ptgdTpQNCj1NzWR7LciFBb4G9NdrS7bRdVF9pxk9p",
  "key1": "R6N2s5R67oYV5H6QQqVNCtXNFy8wao7NJHk75cUK1Y98XjNb6oKFYW7GxVir7LcQgrdS6ntU51gpFCaHEakUgGE",
  "key2": "2rJtUMCms43hcWHmaKCB7nbcNiYq2Rn5WmDYU13PaJHtDFqZpNoturR86cBgtnPDMgQgGmLCyTBdLb2486EDr1FQ",
  "key3": "5x4ikuVLLKMJoKPkFESiwQFGCKNDaXtfrm4YeVeEteKb4nuH8J5S3ob4PdkYWoAA4kkyTtix2ZGVqPNNq7xcghpd",
  "key4": "3XJpadH8LUGKv7R7eWXg4ZJ76somXrjUUVBBcqaZgusjJMcRbESar6mK34GyMnsdUR1rdmcvi4H52BoS5xHpuKkX",
  "key5": "4Hdr5rbigNYDpH2ipw72PSSGmiLmK4a1u7Bst6H5Ek4daRzD35Go4Gv3PhrXpej5gyoWmkWY5kEMAfENvt56Ug2n",
  "key6": "2bas7ncfpZy3gt8TbiDczqevZwDqDvgZiGTNdnT1kBsjBDr6hc98m4BzTpYTuhapaVfMp36SdoKnWhhD9anRnmHp",
  "key7": "2Qxt7Dx557G8BiPaZCML9Y7V9c2FnXQBc6cG7hUkwyCMoCSmwhL6ejLjjsZwsH3uiDTKYMRCSEqoNXACFqbas8es",
  "key8": "4Ag7fT1T4SP8CzN5NM4tfBQN2VA5iS29rYritZ22m5QK5JyECkeC2iEw84xLLyV2VEWaFM6gG7K6WsSV5468Fwkv",
  "key9": "2i8YYz8ByX97RX1xekpAHiEFcfsHomrDB1QDgCQHf7NbfWPH7ifmqBJUd2Gz1gsKC8JbhtFRwBKDgTE3DKKhv1ve",
  "key10": "2cmKNpBS2LjvwdnWnLRXwgcLpoUvnbGXfgXWVbXwhZdxCur1aVtdcHtN6MaLuKgU1dijZZ1xNcuYkKveLykW46jz",
  "key11": "2UQcMVwKVKWYC4wRjYx9yk7hczpBFZDw91fbXS9bnWDH5deJTF7NGaU2uvN8DyFGrgE7y37p5LrqYvV156phdbEL",
  "key12": "381oc2seugHxP8U6ncD32RNMGCqRPnEyCwMv6zfEUzZzeRyXEh3vgCHnMvHNAxCXWWDzhrsBh6ocqb7UaFCje8GA",
  "key13": "4W4vQn8uyrXzC8N2LHR6BFEiWfmRN3nuBcRs12eVE9y662USvNkbZCQnX87p9pDjwkHxmiH2urfwJmxAYGDDrVnd",
  "key14": "5ijQvonKDMRxbB23zBB27RTLviTtVb5y6mCPoAG7mQ4XdcWUVjBUNud9kHNom6A9R3zVzm3CHs1sVA563J8g6upC",
  "key15": "2XNzxWrjKt6m77dx479hhSHRiinteuVxuMeRoYtrY8VYJTjcqWrv5Qb8NFFWWJ8ySbN5JeUqXNn7D7PFJE4tstQo",
  "key16": "63ReaDFNC9AYVcvu7W1RxG5kWHo9ezRx1rj6JCT5PZeesjawLnnJ4o7mA6pjTpGdqGPrtA4k4naWwJSnsMK5XQSH",
  "key17": "4PkiLGpjiBNLseJRRrwtjJFynVrT9AnEHiwJ1z8UDn6528gu5eEf7yJxi7RkiGq3QyZAt2aD9wjekg7Bg2AZM5ey",
  "key18": "26bC1TYV5Ww63Tj1sgCE4sN9Yqqo2fiBxGjiUk6DjqNrfeZRkjf4vLuNuhgsdCGAHee5vEEr83PLrR4BRUywqLcR",
  "key19": "zfGGQAhbez3mGQUpnJwCqZ2MMohbhHHG74TtiW3g2b9mJBcSBbJgTVYx2DFkPAvWqYAnZpzyb2oysAzz1o9DFrV",
  "key20": "4GVZ6rxU6krHVbyPXWYDA6Jw97WxT9fSuUvfwweGsKKfnmpUmZqXC1SsTXbRExJnopi1vZmZ8aguJHyJrN9Eja8f",
  "key21": "WyDqZe7zjPSJL5Y1f4KQsgjQyscnRjLXYzYfUZc3596zNrGtzpckNYFs6eG9jogJMDMAyqN1VrZivwDsJprCm7p",
  "key22": "3qGqBsSM6BCmiTFwCkDAPtAQt791qKdSiRVfVJCcVo8r8MWWGhCqXgym94wXNiyjbUwmBMgSejPFq4hqaLQhaYuf",
  "key23": "3ZWy1x3nHeVhSRjgZzgh5nkpDX5svSCRfS7sp9Q9o8jjfTCm1qPyLM3Mq3Dg8mdr7bexY6nLpaLdnBjH9bVvDPiC",
  "key24": "4Dyymh1ucTJnF8AxdJHGZVu5onN9sQP1AHKqwf3Vz2Hmi3UZqCeLozvygQGCjpoKmW2nTrqcY3XaNHWMzu4QeSxW",
  "key25": "5sxm9Z14QA3Z64T73ksVhEaeLSNxLjh8CHxqty26CAyLhGUWtvA4cVNTs3iwVmzukricJ4DzS2mWeSiN6Yqhcaec",
  "key26": "x2gtQcCwmiTaifZ88PoEPdBNvB99vwxUibzM5uLBD2ryc8ZoPDf1M83EYnYcFZw5JEYGwJRqRnzb9HUUYaBr8bd",
  "key27": "31b8qLpYEyf7AjYsUzr8qPUD3SC52NhfcuqQjaYaRKYnwqAJ9A245zBhjtn79cYF5kcDkzeNJNu6JwM32V1kgZhF",
  "key28": "4dDNfkw4igJe2co7LEJtTtEkyXFKc9o4EJPpXpz3QsT4eErjLiCa1kRYThT4edoM16jTzgUAGfYdMecQ2j3x91gT",
  "key29": "75uF3H7cVkZE4PQJuW6Rn86dUmrCp3DEiZyHJnCLBZCD1gXXyHuXg4M1rChGzx3fRGL5LH9Ey9rXddfmFQ66oEE",
  "key30": "5pUKxxuRZEK3eQ3WGf4DRKpty4FkuZhNkWT39Ukb1disbEchmWWzJJdjzQZyFoggtpCiSgND5kywVhzio5DQ4twA",
  "key31": "sa6c4Ze3xpW816ZckfWaZCJA25FTi4pCGRyBqamFSegGNdmHvPfnue2CHmZZYXtZWtvxDZEExgiLWNm7kihnSj7",
  "key32": "5f4zvXt8yc2Eg588TwKncaNPAtMriqg6NAfeqLYDq75ptA1RW8QLGxTZ9Sme9RG8UFryL6yfJoGVvffgP8WsQUmw",
  "key33": "5dH68xYTnpFDG22Fft4fDwyQCGEUDXxD6MjTU3PkXeUL1YcqsqLzCjnxdFxGpjK2aZTBmHH4yPbCP1fsdPhnAAak",
  "key34": "MxzjutUMsaRihDh3XvP5YL77UvNn1geRstZAYLKc3aQwrGDFfej55MvGzTg3VhzBAv5wuFdGPtTwQys1n2jAwpV",
  "key35": "2fMHaRfb8Gg9SF29E6dA7SXiqNRCN8NFxkUe66LwfY4MskhRwNrDCFqgMcipkbfgS5FFmijArt9kD1CbtLDVB3cv",
  "key36": "9GfowPbhQtQNMRbA3so9S7DhPvksYEqGFjMzQdeTJWfiqCfMCN8sDkt8yYHe5mpMpLhhXv7hN2D3Kdxai5m59MM",
  "key37": "4rxN5hDujYi2cxBz5m8zP6CCV1dypb4r8TZRbBqHm7KH3LmweKBnGA7wBTddqkrCpgFXGhBVMwUrQYELtkhmuVTm",
  "key38": "5o2iZwxAemRwEK78KpUK9Gu1a5nK5ExZTHHdmsaaQjDhMk7fH2Yut6UwLNsktisKhAAt8QbDRpiKUboYgZHbMDZ2",
  "key39": "4ZteoZrw2vRkBnQeQGPKsNVZcwaWWKVC3pDcMNSNJMsp91NwseAtF6NuCDYKUokqrDYz4hZHh3G3FzKvoSsvH9uo",
  "key40": "5GrNUyiRJTnMR9x81UG2FQRbnLdYKGbHMvrLsXesWnwqvbuvLG4bRoif664hbmijzgfYiqM6AyGbQhWASxZey5LL",
  "key41": "2ugJmJchfxj51ag4F7c4BeEFwBiVYSFhh5dSdhHXaoXQjqSpvQ9nDZjcVsMZpcyj7wxdSMLqPuwwJXGEBH5tVjwg",
  "key42": "346GQ4gYo4NP1CVTTzzyrRNUrheqCAWjctRTTANPzyEoeaoLrYj2sNjMGUSgkHCwKipgonC7d5SiebtG2evTwMEs",
  "key43": "57Lu11CbFJgwTNtMwvqB1stt92vHK4SGr9BDu7vhCGWj3dVdBrpnJbpnB753ry8EHLPudvKnT5GMSVvHoHthzwTQ",
  "key44": "25vf5fRVR2VFVDTPajAbGCkWRDAp5nAEGZrT854DUbfv9jtNomG9sP8Md6MC43QcRp5Udki3KDfMbxffjKf5LPfy"
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
