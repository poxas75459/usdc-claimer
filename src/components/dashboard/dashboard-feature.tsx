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
    "2z7CFsvgc7CoJa2ux8Sx5hGwgJ2ksnVS5RZGoc6cPBbTgmGXRhaLcZGGtdyx6aFfUscyVjWhgE78LnEnTNq9LLAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FSnWujMKXrX3NemvBCQ3qn9sAWbZgGG2YDcvjpKq6AFvktsEiPArnESnPDv1SXdhohYX2SoY2ffENePoKshPuuJ",
  "key1": "2fnRLrM288znziFkEUeHBdaTzV6rL3hDCsgRs8nFxKqufNtMYGBxa1eMXxdpPhXZJnfyxpi8suoyWDPbEMoo75E8",
  "key2": "4HWAziB1DcyhgytSvbuCj7h1Gdgg93UCckiGE3cT2CRTTmQsXgp21RfFABiPmQJ4mJBJrRnKjMCZjRZEQeRRZdrE",
  "key3": "3FNqbqkrYCaC7raTemwpoTeTLPpihWMLc5HV1a3S649fWa3HLeKGWkpWv1gd3uUSiAan3UZhh7BmaFwKcrwkH4NJ",
  "key4": "b4AH1zzjL1xh394D2FnvHa3f2SHyA9fRpmb9bo4LMunTEHNhXMFWpQNZ9K9PZSrbZnwbcyCdkKBBs2CnfvPNx3u",
  "key5": "ktBaz4QbTZ2YHxGNuKwQ3eWk9J49K4JKVM6Hj5kkzkC8eSaAik9WTAcjLxqoKfbR2ZHifWqhbKCNaVUg7mD1yj5",
  "key6": "4FQujbDGUcAWp8Vgde35hxQLVgvvkeK8jHkKA5UcH8aKG8wR3H3CFvjSyWv726N6ueLyjfTy24h4Zx8YDirxjF2i",
  "key7": "5P285tX9bB9BTqjRrxpB6dFT64ZTB2bsBNTuzUnTLMR7hyJghCZghUjfSmShr7CHkr6cxkjCtnDi5UW6WqVBz1Xa",
  "key8": "4cvusY5jk9wwDBv4Y4MEZ4ANWs1Xw79pjjffUd3NBNPAwRygTWZmvkGZ7WybJwbbtBZrwG9u6gKTXgTnE7EgQFLq",
  "key9": "5vsDHyQMFWsg7zb4mPiCgjrgeJPQycfak18b5Uaxs72KRVVomaXD4rrgHg6rZpUsQpicmvhjpooZP3vFpjPho7NU",
  "key10": "5jd4mR2ajV3BFaR6xST2x96CchqTURKQNymCU79cmERzWFpeugW1AC8k7bVKevMfLPpSrxcL4Q9hpKf9aMcNwygR",
  "key11": "4nmLU3xaMBwXhiy9JW1DBpFusZRmUcymv1jGgNCFVwkSzFVMM9n6R1k5zN3D4RRKN59G1tsRgS8GdZgGigMHTXMy",
  "key12": "4RvZ3YT1X53AxyV6XibyJqny1nhE2uNB5Lh9NyKHu1GkYDGoafQ1y5gMkCpo7c3jpm5Tu7PoADVNJjzdHDJyG3Yf",
  "key13": "FACFzpt4mpj66uizJDMkS5FfwSGzEFJxtdanDSCdrJmYWf2uRyPgrmWgi2LWZF1nv3rgiDDJMfABqJNLTMsnZ6p",
  "key14": "4uvGL2NwA4Na5jy2vrkt41megUCcRHWjxUPqoEL9fRTbGZqxVkqrZeYDyG8qJx6nyt6uC6uhqzp2G3KfJH9LVTdo",
  "key15": "A4p3XAwBmxNHeWTpY1umcBvCWYTfTE51LitEH6xfMfdcQZazdbHYdnTwhapwcg757sKXg1Tp8jkewBsfExD53Pd",
  "key16": "53ExP26gthzGboZTPHdJnrRTr7xvK7yjZ7hkSd19aKbAjig5nSfhvLAVHsysnSwVVwm6NDiGCtXBeBa8uXjY1Hbj",
  "key17": "fxUNEdsfYHeotxdUHXP65xX8WSv6rfpCQGx2enT1rLTMcNgb4KARFPFb7Nr74kZKsTMGTSfmwWdptArdzbkEqHk",
  "key18": "3W4JataZajuLaWow9hd1jgS3R2Q4dUkq3LaP8Cp2Jy4AEtZLqD8ZR15o5cQc8fxF21p2zUyPFcJaQYieeHAeaZqA",
  "key19": "2umVdyHko5TDMCbAu9eoSRWAEX2LjrGw6N7rpuF8nzNfxR98tr1kmkjF4kmrqRUQEGUM793KJvFNzLHj59kCXdTh",
  "key20": "b1QEs23miEM8QHoukCfEgsSP3iMBQSbP3uDRPYKaQFAK8LsmZXyKJ6Lb3avvXkkoPcWiTdUyAGQaGsSbhaGAibf",
  "key21": "5u9fq3Ue1Yxsx543XzYWmR1MyC9Y3egp5hKcgW6vz9BKwuWttJxRqEa4af3DZBVwsbhXnVVLki45qu13ntygDjpx",
  "key22": "5tFRaJNFhiPuRJ5nF8xZWLsAMpcEo9aBNSydCHt7DSi6LWpB9q5Se9E7U836GpjwJ68QgzKqkZvD1WmqA2Pg76Ff",
  "key23": "4VPpLHq99ix1tcGgmxA2dZZsCkxyszu2jitg6vWpQK4JmQB6Hk7C37okt6L5zKLATYFY97YcMk7XWM5kiyqLeyuj",
  "key24": "25CopTD7P27EQBRgVsEd5iwVac9EsDaWY4NiqhpDibnnjVWa4TrcAEWkiSV3M76ypnw38mXT2RfcrEX2YAHNrnRV",
  "key25": "4kR72LBCGc6D15K9VYpU1bBr7p3giky2evDeED1gGMkfeiktUbT8TqW1qUB3fN2hRDQqpb2uaKdCB17GiC1AEBnT",
  "key26": "3L2kEPYnohvTH3F7FxRfnJj8x82hpdTfGY8JPidurxv54MZqvfRzQajFnqqLoyoCbnstabiLQHamKEVY5cCftMiT",
  "key27": "58uTaZDLnqGhQbEzSoKHmkuPmdWhWZRQvvTbibo1am3kEgdVQspmb2uLpe1ZkUyk5hzWU91W4wvpP81ZM4zU8eji",
  "key28": "3oV8EzWUDMNx8xFtnscN4bqJnnvBRRdETB3dnMruEexkUgRZAVru4KKAzmmEqU3dMXvyqNzrPNEpsQqwmbxi7nkk",
  "key29": "qz3mCBCRDJ3NcLoP66LuqEfZJtfGBw71oSQ1DNbTVRUnPfDVuM1oSKderx7ubqE8FFs6F2LNugtseySxSZCYaW8",
  "key30": "3WpQkMYBpB6FnBCiUf5WF5AYuuKT8JKndQbD2WJkPPsqLHFKmGR3s37BeSRpGrVaauGzu5Tt1Gzcb7ds12ZAjU1e",
  "key31": "3bXtPC4eJKA657oRQedVt5KTYsyHNYdoDn5N6cTZ4CFkCmwErA7hpBF3kMhCKCnSyWSHVQTaMP1c2XywkNL8zQab",
  "key32": "3qjxh82eVs7sqwuVck7Ec54CJ2dR2JxuTQWiPfsaFumSveWdx2W8YrX2Q1q5RfL6vbDwMFYmeFa53wtkGDz17yDq",
  "key33": "yB45sbZJwBW6usnTxM8fxqc8CkfSq9aTN654EW9DRZQqfPMPVLVGeDEemXHP2JwV7rf5NXumLXpa7tHVugZsTZv",
  "key34": "5weiegV9A1CX1aFoMy3Rh6zzJDswJQPQZTkjcPZ9ozNsKWK6WvfYCkMrCd4NxCEpmP5TtrosU7Ad15hey7Nk7VuU",
  "key35": "53dfu7SsQ4imWsP1tdmNzSz5muHnBy1nfjwxaHTq6d3vtwRJH4gsnG7NGQDAv1kNUr2mE5CknWfn99jp1rqgyqNu",
  "key36": "2HqD1dQpchYo6LQZrrMfts4yuPH2MPv9caRRLGr5RCs13eQHp5fBvqQHoYU7ZGq7vg77FtV17kqvNfJyGDpughjV",
  "key37": "4SWtq7sdWP7vDmqu3WbPpVMxJ4e9PKX48io3WscgA3oAamGcZgqeXPVar8xMqTaxDFJMCN4N5RhYBFXgFe2sQt7W",
  "key38": "qErP1xVN7WvJCib5SuU6CoWasSVnvXho5ny9k4oLzdXSh7mDLhG742deXr78tM3jgw3XsvDkif3ogyLuiAw4ty7",
  "key39": "4xVTv1oqiYMD4TrwuPCjnqin6Grv6AhFzDz8xGsAwRGRfpEsNYScJMLsKWC7FFtrjvRqCv7DEaD34VfBtduxVq6U",
  "key40": "5rnQGiPXEjsN7fteWzkmtd9qJLjkNvju3eVYZCsggRUgtptXMxnyAuVX5D1nVr6Hq1p21HMKTCkg3sCxzmnUTe5t",
  "key41": "661qr9YUdZK2xGAytF3kLYpE4ALAY7djaRNQ7jCs82g7jvqY9FFRtXMw6Zj4JoyJ4zRiayTKzhox5f3mDw6a6pCr"
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
