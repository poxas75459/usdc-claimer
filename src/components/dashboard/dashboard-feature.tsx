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
    "hxatevkgwUX3xBxXPvyyNhG8Frvu5Y6FiF1GhPYc8txzM4w51bk3iuoNmo8UgsV5xHSVPC3FnuB7qbpodKjxGzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2xGYGoPP1F8BeCL8dKVvVDGhYDxyQ6Z5BavoHji9N2U1jHpj1SSL3nCcSeuiLs6Px3PCtYXS7oGtxGi8TyfwgB",
  "key1": "5mtNj5hEdUAzf913UMFoNDJ6im4shN3aBF8PTLrNuQvynj4gndUJfbbagrNk9rRFSkKJeMWMVeUEzJiXP1rTmVSw",
  "key2": "25ET34dqtJMcxqqpYcUEKJp35nWjDBLzxHd1LiU9YV4ox1afWraWdHJEfkuSb3aJNocBrszYVYhhHgbbWTJLDmuB",
  "key3": "3U7uRPVxP7F69cDAsa6rdSPfEjMktGdXKA3BvC3jMZ4M7Ets7MEyXg9AVHb3YKT4w96rNCcErA9xWhCQM43PMx3F",
  "key4": "47ueC6TKvin8UALa1jCosCRXcEsZ9YjCjvGgZnL35rMMJQezKvo1DDmi1bv4HEu6T8oRireTPExiBN2dkDXykUW7",
  "key5": "xP4VhGNu3Qj3Y1s4TZrV2qoUknU3QYFCuaSDwPJxWo89NXFSu7RNfa7MVQrcgVg2m6nWzB6js7z8rMDK9yA7NTs",
  "key6": "UN1gkRARSGJerjbhhyvZ1P2xn2JcxysaizB2osZDeA7P6JPbaKsKoxQN2UftPaYCzgL8A5Wr1HvQ4MFSLDSCPGh",
  "key7": "36sguyKTuG4h5DfCyzr9ovZu1CtAiKv7y5oci2f9u9w2LdamCrsYkZfo9rAkLGXu2qhzMU2uQUCG7Ruh5YFL8pCi",
  "key8": "3vwy9u25ca6MuAZngjN4Kdri4s772UmU4Kxnv6ChRF6wk9csT7vUWrcLMQYeHMRHJSdLQcb66Ly9LCc57RMFERi8",
  "key9": "4ss3ajUyDWHZRdBB773iKgFbRrd8fTRhCZ9vgUCdDAa1gJ2zBSAQkgUeNrRNwakZSACZ8Q3SckLdxfmMXrohhfcN",
  "key10": "4vHBMKKCuabrcSHVo76SoiGdwmHhGaCjtjKs13SWjbZwgEZQn4GKNX6UjMVfYAxFV8iK54zZgBYysUCSRjrLcMwX",
  "key11": "3DgsR32uhnTZbvKi1Nft6BgidPHdE3zQXVYNyph1DtTxPqj4EWLDy4ZBsK6kThca7R9smbvnHp2T4xutoxsVTCaV",
  "key12": "4nXA17MGNdX2eM5s3FU5Jg1KegoYcnDdWLaDAE1JxrVHmjLT79hCFZWFdtCjbgxtQUh9NGzXpHwxcjZbzGBJtF8h",
  "key13": "5o4L5TknFE9u5bzaNCVjCdXMcATiz683M16LJaVkeMUNL2X8WkA86sruUy2S7z43kPxrNCvcmBi2jpia3k2UAGPe",
  "key14": "3CQEiwk6fPyU2V4JU2Z8zPGKuiNVdPV2T9yMGQKpDfRfUNFnKKFA2B6sQGrKCYUJR8CbVgJmUtMTU6Q3vU1GFvVZ",
  "key15": "2tLpuemey7CvJyyvH9JP3pFEzPPBDpU4xesH5tvaefWrYanHmt6E3gWfGybUGyn6zeqiPxW1aEYKn2DTtpMrkSRc",
  "key16": "5ufRzRyfsekGcYiEGYRFSUKTADxrrH18a1smtY1XuGkz5qRJMvCC8s4LnoCUJacX7ngYCTX7GKaMLHurM6EZ4yvk",
  "key17": "67AU9s8XZaN119ea7isaLPHGzDuBaa1AKoEGu7SGPUHtvtHu22oZ8Sp5T2sjpTMnRfstkHbh68EcJ3mVmkHf77uk",
  "key18": "5XS13bnCAKkf5vC4dcqRexgmXfNAuB3VFK14T2NwbWEi3AgpBdxKuwJ7LnYW2PFTxTjPuv4qzo7NoDE4upKyTdkR",
  "key19": "2vXaevqXCD3QMe2nFL7Y5YRBKw7R6JJgx8Dn2BFvwAdDTA49ZVQYT85QHZwQz6f54fkxSvbQrR5nxRvLzNDfF5EV",
  "key20": "6rSdYsb5ahBcyUXUvNJAufPgwUbDoP816XDGWk4Cvs41gFxTgSPkABw6KazERsoxnDSLa63uawhsjKkmAs4Pz3f",
  "key21": "3N5FBv4rH9Box9KCMcGSFUufxs66D55iQvcSYMD9fB8zehCESx4zDUAg218UV5V2QHF2m3vuZC1E9KkL9RP1wLwA",
  "key22": "3EV3Gm159EB3fvq3urTFRKdtHMGEq2Bowt7HaEmSoiKw5cv1dp9dMqFCDLoyHgyxbQLWC6Y6SVcyzEVN4u26xrdu",
  "key23": "8guSJGeFhsDxcUHp1tNPxMVzkawoK9FVAwgRtNB9XT9kK9mD4CTaxPEWaHHhRuCZmnrs3h1mRVXK9vURPgH9qsH",
  "key24": "3L8oRrpx8fJNJdY781Mg1SaPUfF46MH5C3in2y1xPLbj81TJT1s3jPtgYMQNQGceXXMVV8HVYuWhXxgyFzF7f1LE",
  "key25": "2zpLCsGerFdx8wWuqhvLQw9K9GfZCpXrfj2z3eggbga2ER593HD8TGNEZEsX7tvK633amvvSdeVqS5zrUVXMpPD5",
  "key26": "2kDYyr5Mry58wEM4cdvyMsgWKs5swEbVaR3iqS6hBHqUjrAzdYkQT1Ra6CyXTeCz5Bsusvi6gVMZYmy3N5fknTfV",
  "key27": "3VdfucTQWKvsdEtbxvc6DBCBojVsV4WPkXQN5Z4XoTtMpTo6XuT5ordoaishVVuFDCYuBqRTUCwTEvMkz6tNrPhS",
  "key28": "kQ15jRaJceZpTnbiXdpG2jSCND83dx3szrywbnUEiWvxPZLBDJDtqPHk1oKbYJekVBzx4Wq9FxKTj7mWVbG94nv",
  "key29": "5ufWh7h84M9R19Tt71KmTZFCbXPdGPat79NSCtVazhx5dZErNQLjtZErJEZ8e4PApSzYY5FdT1BP5H6hganuRThs",
  "key30": "4DWqp6ZcCVz8epPAkHNxhWPkL2Po4NeHYf4btFNpoB5dU7DdKYH8n93tx9oCkwVcvawoQxCcS9i21Bm3uSXsj64Z",
  "key31": "2arjhX2amyLr1UAMwX5RGrSEsa5NjNGjEuhE6EKdEdTqNaecx4ZmnAHrv5V78jXk8d9tx6bDvcajiT1zhAevJK1d",
  "key32": "rgSJBAYFeKY5q7yUDxNxuUCK6bzaifRGms5HvpkPMPuWPB3UQSa7vBZNrD6ga5X6mDHUV7o3dd8mb5SmRreW83K",
  "key33": "4wzEHp9kemEgTzwXr8QDDpjnwnqs7TJvFbAg5U3ip3suaejykgq6AyppD4jgkRdbyn7oTQrdDvu6foCJ53TpfhaH",
  "key34": "4RM1QmeE797NhNHNnBP4gwuHCciSojUpNCqc7wFNATZ1g3S1Jn6zef6RxRkwhY1PvLdWW22YJwTKiASf8SyeCUwX",
  "key35": "mcyEvV5NBWLsE8ibydWvvVV5zqEXx41wDvWjdtXB8zrzheAeiFFEPkuH2X9pGvwUQkgekmT26D4RcZQpoPfj89m",
  "key36": "3YNZ8gudFyVKsXHtRE8XqcopJRKFrnQb35pKbuGKbBqQqXFaxrL6RxUv9vgveomeTHz2xYSdf7RYgg332dNVHDRR",
  "key37": "5aHYvkGiLXkA2MFbFw7JcyMPRtVvhEisxYxeyksXwyW5ywVthC4DydW2N7fGCKRQbauY6znc3ExXVWTmzkoJqneb",
  "key38": "4JswGFomPWf5hVWXtLTJEBQBA75ygWpLRzZnzeyakUassrWWpq9ym6ZoFqWj7Czg7t9GUxWzsaqzFdBny2Hzkcsy",
  "key39": "3ZcQK2SN1Phne8p3u56WU5zKC1foReDSMLGFrU4brX1xRQeXdeViHC9GQgPQTtqcUWMCpFqXE3sCpMvBwdmjNmFm"
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
