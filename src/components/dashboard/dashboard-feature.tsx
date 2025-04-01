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
    "UDwLNEhpA7VZmXG4zjr9j8tRQnitxjhtzZuWxy3UkKYSq5PLjRnYyYzThmZUSMiBkx8sFtRp1QL4rsCsqLLN8pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCdJr4typqrBcax1BRConwMTgPUCMiqjevZTrPKhHWbSr1P3ScpgS4pvQTyddH3AR5EvjUeNnK79Jxrbmtgcasz",
  "key1": "3m15ja9Ndr4CSoJfeR1V73QBEs7B86tscUjFpZb7pZbrGogSUABZ3M2BgBiM4MV9n7Ad5HrfRkNmLt7AetxVAFhw",
  "key2": "2DKewFEYqXhRuxW3ezczDBKhS7RCNvabiNGn8amm2DHGwwp66UDkrwgbGFwmUj2BHf9YgYyJ5HcG53QeQQ3RHQUE",
  "key3": "ughquoZTFs29Y4jmoj39o93verYreZ75J1EK3YmmpyCGh1ZBhc3aEgxS7zTQuWrC9QfnDdJqWSdMVgWTcBoHW13",
  "key4": "3aaNRBRcSJnyvsxKQ49UkmMQKTHGA6q1qbU5nCimynV8y3wxJyeBi5qLkXZTX6VF6GKvgU5QyUAH3Z9YYu41qgVa",
  "key5": "25eXEo1FE2UHvK8ozq1F8R1fgxrCDiATRyZJqtFpsmKhcDG5mmjgkPhB3vUBiNCCazfT7ftebVvhBos3xf7AqnWs",
  "key6": "3zhJJaCSmrxFg3M13M1KJAyRqGzwW72xNMsu2oe6W379ArjvnDn7832pvUY14rzBa4C7366Dm94BTM51xnHigfHD",
  "key7": "2AuSQtDh6U6JVqSNJFGyZsEMJAGUwcLEPqie3Y4nvCUbATpTTCusRShrKaHUEsawzvzDouWnKmHp2oWKvYcoX7yD",
  "key8": "4jAsH23YosWo7PoT5uZa6vNpHgsFZpy7cAcQY7Rg7xqe3hNTEBrjAcwJEEoLJKwmAyWFRdRadTxD22e1iphKL2ae",
  "key9": "5LpPNTwrrVzLrmooTX74R4c16VmZFKMPcgd3qvAkfzTVseGC2b9TzgMXSmAe27YAo7PZNRUZUrU7gwirmEnmcuDw",
  "key10": "35g4kectr8ppSaz2R2asoetEaTRPqtyDrSjmbBdwVep5tVADPZDbdhH7vfryPXWntgJrRXdUfNT4A58cwakzWRyt",
  "key11": "GgEeizdMjAiqmNHcktkzWQG6tv6h4kLFaQyoDH6FoHohKAcY82zfLE1m4XKUXoYTVLifKnzk4d99NBe4pFgJg4z",
  "key12": "3wmAgNdbtE9Pd5pW5NVtpwMY9sUJjuNc1qiSyKQ26rPKo1nxoaE8hVn68voDViSmrYt9GvrEBH1av73nLgobky7Q",
  "key13": "3w2P6rFk4fFwTs8T5T7kNqjkBrxTaBBp91AYVFHoy57nmhcmk81hunbUKkxYpxboqSRp81ywfCRqfSuqc9iPyqvF",
  "key14": "WsjaPawaVzPtxyReV5LbYKdGXhWQk86MaoCZqFHR53RGZZG5Bz5scLYwCTYUqPC1o9z1nZkCMJVFxbrTL4H7K1p",
  "key15": "4h6XcdC3dHqb4YSxNcdtRPh4eGjrrdNyEQxj8oWcZfp7dqL4qqKiPF14jySKVjyPreqHQdop5z2Rq6XZS5Zjo1B9",
  "key16": "3puUqM3poqRmM9FfkjxWHEHorLGb4np9aiBPJtsyxumsG8tc7EiRsoUQTGvjFGRgCi2qxZ1ibsAdULgJLHw2bxJr",
  "key17": "s6vV6XfSws3rVxRJT1ivZ3bheBzTcZKG3wbzF587n976DtyM8649KG6tnse85L6G4Fx5QCgv9UnL135VYx8gSMY",
  "key18": "2kJiQrLu8GsGtDi5GuaKGofLJPLzw7QSxCdtrUFty5jypVQsSEahHSA67gkGkouG4V8aVFJ8D6awrMf7f5yXKiH6",
  "key19": "2pRguPTbRn27KVy1aa6vYT41oNAjLToCF4MwUjGYFh8hwvfgrCzraut72YjzMMLL66nbTRPTfFyyEYN4MS8k5TGc",
  "key20": "3JgedZtgva1RSXg9kVQvTVdtEkLJED3NUxYN8QmkQ7Ekfne1xKEmYkvPUHJc7yukGBV4DHtyyti1q7V12CxeS8iR",
  "key21": "4MVS6JN7Wrzr2skYyUUPRyx2BhtLwcPFKSmzT27bRAbmGh2dEzSzSeDCPpv8nmecDChZ8caHjaPX81TjVQtxUqXb",
  "key22": "5bQN53Nx86JxvX1Jbx4WXZqvFSm1TG2jN8o5rWUtEzX69UZ2KZd1DWox2UjtWtANYLhB5gR9rXFZgu2APfbYBgmp",
  "key23": "qFcTgePc4dieGQZRDKQLpvzLx1nT2LGLKbd4SPApEHrDrXZpHaDWXV9UYMPsgR74zoDpXbZYW9Cy78JBePbkfpj",
  "key24": "2NKJx7fVmTUE4jfnmDiaasRVJv8WbrRyKAW4VopcTsSAQeLtW7gUkBp2KY3MKHdaRhkATfo8b6BMkY5SrhHGFjM6",
  "key25": "4KDQEDu8vaFvibDr3mSsrAbnSveyrBhmdaLhaC8yNYvooWdxsAmqJeWBTGFDFhXW2AYQX9hJGMZah9uMxci2zyDs",
  "key26": "44BKcGUajahprPM2pdbX7wBPEVzdi2p9THxX9tjXbukqBZotwiiD9kA6Wpn6MtiE9EzwFFYEDHYmcJ2ipedScMSd",
  "key27": "5MiTXg7mCGFdegfXjus8RZshLprUshANBpF9n5nZUyG4rBvT2RThXH9Q1Tdy6kq4VwTZQeHRWWXbD8BhfRv3Gi9M",
  "key28": "56dYJ2bhZfzUf6Rt1j2ujwfUrdAC64Kxb5nzLqde6cqVBHKKsDfs2YaDEMyEcPgXBbRHquB56HCtyRw5Xngwa4Lp",
  "key29": "2TjSRXkX4bV4xCMACDvVhA2LhgiNvg5uTV6EfTGF9gFH1cCgrXX1kboVaa2TnR2dcFgHG2N8Ex8e3sYHEks4k9cE",
  "key30": "2dbr54Ha3fHrmvzk7iMv7iMLeAhsxMxdb8wwtJFvad1geXAya5QL3xtFBtt17aQcZ137QptXk69PHzbSuXwszBt8",
  "key31": "42cWUXV5PRtGzjKYKqhP6hBvqH2UHD9DQq6ztkxCtzubAepBAk5UPWctVJiLGyqts49Jsg4Hxn6Fy778dgukKvzu",
  "key32": "49PcngYzgVh2qQU3mwZxXt2JXBEC6qN2Lb2X1FzksbfQkyKx1Rm7pYJoenC44v4Rope4vGGwSMS4nRoDhaaS15m8",
  "key33": "2x35vwKUKFSyXKjFzEKzTsemSGLbGoStfvtcopmGovPFQJanysMx9tA36SNuLwHQxzmLJWzegL2ByNVzx4ThD8UE",
  "key34": "5pJRZ4Esp2u4PxMdWdquNHFbCKjAFLwdbgda5jgYGQJu32WFEDsQDhHAHQqW7DRSqcXGW3hKZo9SoeDkVtTk9RBK",
  "key35": "5PztKquEWVDLMELRcpVdq48mxEkwPEPjKdkwSCgoqQFPRxG4wqxoAj72LMqJ6CuWLZ5ywtgpjPH77AHM7w2qecg7",
  "key36": "4B7zFdR2UxB2rxUsqGLxvbvsU52ZMeFrQ4k2eJcG6nXcHFC4QZs9NdMy9dHwD6cKNgJaANPBhwcyuXbH4DT5szK3",
  "key37": "36cZt5MspHqEsZ1uCGzYXkXpqMJZVpJeiSVGAqb1SL8JAJnogy79NQiEVdjpBvETScM5RBBSTymegQWzwZAcDWXH",
  "key38": "2E6y8fZWHPX1wZ1wysgBcc5EcRtdWLVLZF1aAnaLspXx3gKpLuq876Y9L5ZDScMArr2LrULkeTdqrZrkAN9cWJRt",
  "key39": "3Bccd3XSU9D4xKH9cSuaUaG8JGFSpvUPrCeRwnX4c1d33UwJR1cqxVpMeYiV6MkxZxKjG7gb7sKjf5SVfmzJUgym",
  "key40": "u1mgGkYUxzC835XsHecm8jzJFWZxkEeia4TeS16aENBCPwH5FTpZHGmrHBBzYaUFDpHHcc738yrrEx1effoaGgo",
  "key41": "2B2Fo9xxdh4uMMMy2TZqnKzJPMbCzaLrVJdHopnjVt7sJohfdBzirZTrrEBZErVe4B4bKseR6QmbTu6CBDWRYwmx",
  "key42": "2nUcryaUAUWye9PPZtwnCbjri9qR9Azs61c1GwvjFtxmjUYvFXt6S6nzJWnfAGER8c9LqvRLKDvhxsiycXsQz272",
  "key43": "hBXCkJZYG49vGL82SATXekofw8Pc7cZmrXLAQhe47umJeDaDZwDcJW9ykWst1zCpFnRTotZW7Rd6Gm4Gv8WBFUE"
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
