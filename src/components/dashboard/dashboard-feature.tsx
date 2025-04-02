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
    "48HSzLc6KUrVxmwH8SbrsbFyRWvPUZVDhGFgxcQjFGjWFBeSw5iz7fjxmcEhmft52SjDwY7iioKxLwtkjjFVtVPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApxAi8D6CDejYdYWz4ufZYWkHbyVnoRXz9hhbTFaafivPkoSmwzjodC1QfNuCTE5XHHtVGfVYjXsvd9ih982Fna",
  "key1": "53iZ5HKnv5Shf1PQAqDUU44Bj1cKJn3peLdoJ2t52rBSSfUqT1jj7Z4MhAren2tosuTcHv3w9WX7awXkSQygWvSz",
  "key2": "5GJ3VDKfkdyMNgU7Qv2BG1YhPdifhAxjVznUWASq5EmoDi4MJwmZA5eUaMMxVongW5KLA1J2zTn1jgCadSSKr8ir",
  "key3": "2YXRr3XHFQ7fCZkaat5vDhRa5B2kwz3cvRrajLj5o3QHgyWvXCuriKNufSEPYafYHMm1VTfYnXKGbVL4CeeZonTk",
  "key4": "63TaxGivQGFj3tHZtv66WTw5abzJHmcQSFnUUAnwcV9jKieAdXmXZZLDxpbXxEfcwQz9wjTAMqmA7NaZyYZsBGzo",
  "key5": "4TgoGy1ctMnvp3FS8CnsDKCNk2Co9MRfDAe3Yyps7ypjNB88VP3mw1YTXvMdRoJoboLrwRXur6SNqY3XCy1ppXtz",
  "key6": "3oWBNQL7MDZoLoZpEVaomSDBSCMpzZSJA1qwH8QQMB6eXuPv2uDduaJ2dk6qXSqU1Y1UYPdXxysu2SMnH9Q7iRGy",
  "key7": "4br9GmT25cPi6fjnq4mLFj7wBiedFUU4g1j1u8J6xkBNuxABeNLp4XTAeNm96EHTiFoBBgSeHoDvDv4UeEbw2vjN",
  "key8": "2gi6mjx9GGRJGHy2v9JTEr1VxHwyfx5gLwCJHFPVaAYeAAD1ArX41KK3CTCEK8NRCUanvu1wT4hNMRN54kPma298",
  "key9": "TTQZTbMzEMgnqLUZjKETtifbsS34rEo8AjNCbmjUjyQmrHDEdxqpuieHYDS6aNFvUebiLVucNMFcumS9M1KucSJ",
  "key10": "5eZacbNcCvyipzbwndhPGcF6PaJq8J3TPPFrptAYqnwjcHSBr5TqkAtRguUaUbYsJDhCvet9ffJEupCmoqJkfnyD",
  "key11": "1iFqT2kzGDFxBFhzKmkw1qhspanKSeKHeuzXZjDiWTypbkoQNakEyzqUyu2J56CJW6RgWZVmr9mLi1J7p3Mw9M3",
  "key12": "4nmDREpJg3b6hbA4ziuec95jLKHpPrn66f5UZ5bgfZb3eDwdcmkYrMxXedUFkjnhFj6P1Fv8RDfhQyJgfNHmK2rN",
  "key13": "5cxW9dGR5aTsjZCK7wL2w1tAU3mpT5qJK8XAFJFrasKo5YxDRLWoxDQpdqmtcWjYFc6sC2P3sGvWgQVeXXauuSzb",
  "key14": "gK16qpgxvNupyHmNVTv32WKj9hjvH3XQJB1DLxawuYxZAsVNyX5gb7H9Q1eb62rXXw1gPxYTPWB25B55PxPiSAM",
  "key15": "KPSFJqPLydyTMsF11UToSwTeZP9ysC9QFwEJ1CoparE7umCmBR5y6SX94PTevpGjMUYi8vyfLdnVAj9iq6aAgoD",
  "key16": "B8TBGuXR4EHBmkg3ssmNuGcDxaGPyTUejXLqABiU7SgTwCEo4Zd1d3pQTMdg73ne2GLCNtbFWMP4uqHg3BXjeFU",
  "key17": "3vUPYNovNonR88Cwi6U8az4Ypzd2eL7MUJ8AaUTBpwsnaGQGt8Ntxfkwj3RDRjTxvdmvecYaFV23qp6CwkgRm3QW",
  "key18": "45M5oe6sahU8bHDMDRann8Cx618ysMG7p2j5Q19nDcYZp4to5gkfbtGFEbXMNFUFCTmr2soxgySwNFAKYNdsb9rm",
  "key19": "5epa4zu22sQ5TpZpJ1HAScMex2QsoinoYJKrHDsvx3gApNj73FyDVyKDPsf6Zy6AW3N1caT369iQAJBR3kq9Vpw9",
  "key20": "4tEohoEV1D6qqU4iqjoLo9AXQDP2mwnKgUHepE5ybFodknZo4QxQqLVSc45Mu4hxbvhB9LdKa8pUoX4RYJpePzRC",
  "key21": "5ShxspfqZXaeBZHcuN5rztPiRj4JV8dH34EeRN228xmQ5uJGxsMqZnqAGSDZA2d5WCTtLyGzyCUrDJB5r6Ruzycc",
  "key22": "2nkP3Wgvw3WKrXrCS62VyLc1ZDRc82gyLqASscrA3tDbDiy1cU1mEAxXpA3AfCVGFExJz3vjynCfaUAizxKWFEG5",
  "key23": "kuv7nHaGauJkLYLKKAWpopQSwHfEAgeiuuqbQ8qySw6XqaXKSrm6p2CdhxfJ3SvxLUixp7xmgBbo3ZGHeS4YKdH",
  "key24": "4x6bs3pj5kHRwLhbKtdG1FLFsWGuahhM6k9uMGR7mLGWW6ybVqrVgXuBW3Q7QzHjrGzpuQEh6WjeSbRxcJGgdmSP",
  "key25": "nnXrEM6HAoZwaZ7qSuTfuq7EEuAsgCbNq9cKRqYYbpELew9yj3Sd68HnZe2hXkNrdZRa3S8UdwTKJJqEm7G7aEK",
  "key26": "24nZQR3Q6YJwC182ctUxz96rAQqyQxbZWWNGs7U14nVMd9Aszeqj9gfxU5r9dMZLfHPQ1Dy8TPeucrqumWSqTGPf",
  "key27": "5hLRWgqnMV19YGxCWZ3Y3GQBpwzApj4im2hbjActFhwPHqx9xYHXBJUhtVntXJkEpe7mZ9vj7dS7rQzLs7afonFH",
  "key28": "47SwYy6GioeBu1rifVbf6gWeYie6Jb9BwJYxYo2ksETGyxUfxgh31idB5eWqhrPRkZky4Lek7xE5xfHEN52pjsK3",
  "key29": "2GothMiokf9w6qhaQL8WtfSkBxpPVaBGur1zWgEkcTzCyHEA83FAKUa8DTZDzW8skGyHHFeSy894ATqzhdw3Rnz2",
  "key30": "3sScPzE2xuNdgwxgZZYdgv97qsbNe3B24UUg6pt82koDN3SPL36SKWfUH2WstHfkVARGmtaXTkjrbqavs3n3jcqP",
  "key31": "53g7dJWQrVqZUBu95P5MbLytz1YKc39tdKPCd5TuxanoMRGKwXuw8iXyqjqyntVqZwSdiWnXf3PcgPG8bKokXZez",
  "key32": "5747Bd1fX52EQi1ygoKqwNJovoeqYX36h3Nsv6HDmJiDS5AVcb6iGzrewMafEW1nb68MTdh3admFu7SmHB5XVipp",
  "key33": "2dZTYaHqBCbwqKKW62Tsejw2nqygqEn2j5oyqKfkzvy1ohdGPYs8oXY8yfn9SsPKAg92Mz7WTBp8yJXSTDWLMAh3",
  "key34": "5bTzL1e9jhXpbUYHHFrRa41SXZiparU9VR9QF5C4Kbzacm33trPtkcvyJeDacZtTLE1WTq2Ew2Nx1xzn5oY2T16X",
  "key35": "1qZkHFyimtfQ1we7KCPCw21dABjbec2PSKsXbtpeE1QdaVxiZmAuo9nSxH6o5qMrhAure6HuYwuVtVqnUSjnS3f",
  "key36": "5dZUdtLudNJuk4y4mNF2z7fph3rn9V1ep5wPVsV1xJwAF2PVjA3yPmBDbgZnV3pAyHSmzzoHhZrRmPQSXeJn56mY",
  "key37": "3JKaKKKLGv5bNksGALv77Ctq2mdi954m1gKFfABpkCWuH2UBBWrt6YUiT2HUyCnZkpdXavemuUK7PAdXnjtyKqhh",
  "key38": "4CXt2me3vkG94YQdZdFwyugauTd9PbWU7bddXvDoAEpaaEHLPY6ZeXnZbxCBzeHzVdThcC6irf5a8isYjzinWZ5o"
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
