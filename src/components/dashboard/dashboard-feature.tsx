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
    "4e3xZRakbZbac3N9BTYoFifPaegNASQ1gwcLsn4zDz1zkjXvmz6hiFMNgy5fT2EBJVzQnR6yKN4nqeAYxQZSqfcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NWSx6yoA9jfmQqS9v6BhYF8dy4jq3xZ6UhYs77CFnFT5NQwFqNgtRBrUdqHu9rQcBNh5u2hEFZZWFRMZEG4Fms",
  "key1": "2LHNvDmXbT9vfbT6GVqbd3N5XPAixDcg6YD4mvMfrVhoFigmeJezzjNcDX2LmVqrRmgjcv6hRu8zQxmvPpNxcPV2",
  "key2": "3t3NRmbeemsRFVK7a8UfE2MMw1VfgamedHjWRjF4Rj28oTmCVSM4yzUAJq3B6bqPQnPMLGj5ghsfoeoBhQfxFnKQ",
  "key3": "45pirVKVKHo63vrRDzmEEfP7G9yrstH8ybT6i18WKxNC7mdrkp92R7DHCFbRxeZPTW7tVyZWwkMwbNErT8MkGutF",
  "key4": "5methcfnQXbo54f4dhLyGk5TPk7gTAUqLAcTmdxqSpdd1tkAQXRckd15wpWW1BHXzDMLCQhcP7u8up4SNReRUuVG",
  "key5": "54g9Noyz1x7q2ykNv3r3rwXtGyAxkLBD6VjLBcpn1SXFDkrRGgb2P9CmD23mShoA3eWSd8BFG5J8i6jLkoBwVjdb",
  "key6": "3BAEherqu3KgeD7JjppxJ2yiiZRjDhWsHLe3wgMgJV6RcHXBBwhvxNai5zEvm7MoxYdYV845LCpBVTPeZBHV29R6",
  "key7": "26VYCnUeCtTjNkmHso6K4oqszMckNbWDEoG1HkZ7RR3Xms2fcBQQ5nNonaVgxC26sL4KDKNTubKGWxstHqGMWRpk",
  "key8": "3JJTyyMtxzU1SNd5a6gTGE6YnGpRJykSgTTA1KZrkWKwesERPeFixmZtSRgc5W3HpgAuRRttk5e2L7b791fE6DGK",
  "key9": "63AdFfA17hGXB5qgmkgwzYXtDd62s6ZoGYzayjUjn74BHo1GPqoyBPmVmpfV8nQQ3SyScv52X4s1U7sDRd5G6jDq",
  "key10": "b7c4bLyuwcWTYCosdE5uRKnZPaAnjSzHL7xxL9j3oSZTEMbMcshByW2wtqdh5Fyr2H2UzMiw7cndLLTqqC2d3kr",
  "key11": "2pXhPodqy4Jo36m2KJ8PeDYD6wGM49seQCKib1R3cCozoMTd253s3JgM6iDJacmsvUwtUytCUCjJBAY1ZA9JuesK",
  "key12": "2kdeQocwYJrmVhbSnGa3NfvfbWtrMtrRiUR4sijFQafinmCz5CXdJnEJxwYnnk3LYkUeddQyon14NWzhJG4YjEP2",
  "key13": "3cCJ1NscpQQJcLp28yBfAQLnmeUkcsst34rEanAoj6VzApt6waJCnNK9czi9ZgFPnidmPsQk1U7ZwWoxTbUpaXw",
  "key14": "2CeMMNXhRUGnjJgs4nxeFLGAPxSpvqdDVdJRGhsd7XpZMSgzZ2MJvPN8v4KbqKLpUbxSbuFQcYCY8dYrdxx2PcWz",
  "key15": "4tB56GGXryprUVuPSw51aHhqnTEjav3F6G8w2jETb9USd69JDN6zmoLzJjPDKewJyaCpM2TGVnixXbNhD2GiyJh3",
  "key16": "3qq1vA3hfwWRqSMJqpjXfeVDMtHCjSdkkKgkZTdtn1DVYXZSfEm8WjyPStapPKn6hrKerjmURC5JjRUNYmsJtJLq",
  "key17": "n4RFoTkSPqBR1avnGR7RUjNDcXpJ1M6uHBr6Dh76LsV9Cn3o5Bmm9G24sp1sspotvPDjjP24CuXJf57zdcbr3xa",
  "key18": "4nD2cmmVVttgHRrn18TmmipQLJdfD59tRo1sxN4upc9eW9RCzoGhhV8ZsWdqNdYgRXt9NHukCdtfyvfJCbnZoBzM",
  "key19": "5RieP5t9UtvhTcXJxoDfuQUGebPo9b1N5RSpSP24trgkRtTtC3yaaveofmh59QdoXBK6cwFZfjLvB2snEqJMjrtk",
  "key20": "7yUxTAq4QSL598j1DU51gveJoUnzNqgB17hFSxnVZ4Sioytf5cCCUa1i7pwjZq63EwPbAAComkNrrJZzJcPDq7n",
  "key21": "4j2XBv9S6jdGec5imZqhnNTo2NaFWS2C6ibqWUgfMeySwWeKuwKcBfdDKpj11woCwKmeAtaW4muq6VB4cqmJpgYf",
  "key22": "fZBJjEhAjFw1EVG7UKNDXorSGRXQBmgoSshywZjaRnCu6wK1qeKewfrz9MJueA58Y41LPZ1BbnLVtPMCAX9XyeR",
  "key23": "49i41SVc12axdare7aw8DW3zAqGTD5EQ9ZncWgh9uqR45mphLLhomRQeqFySvfyT4Teee6WgEZ4Rbe84GQZidUrx",
  "key24": "2SBqkmBdTkLW7wGCWRztHLZh9Xi6AbhdZGd7bvUuqXEVXvYb672qLVcBe5Q1G5xn5NsPzG4ZfkxMRqP1fzFgGyGR",
  "key25": "XuEcwZg6vaA5ZGfqAb3HVg6a89cvSCRLZNJFSdrJdLfbDiaKodxLUKcpaCsWaEqVmEA5ppuw4CW3rM4v7Y1JWDc",
  "key26": "56RgopmkuSgLybhTuFFbYTuBHnhLf6GrhJVoCwbH1swWzV4ASPzA7nTqC1E7Vhsya95v4ww59N9yFY3AAFbXrRpf",
  "key27": "3k1h5ukLmAvpc171QSpAhb6FBJrN1fpzUHfMY2Hc6UXCxKRTcrLAp12qfRyjUS3T1YQXFM8Cywe29pc7BBRamSZ",
  "key28": "65ubFuyKFfTbonXwDCwFY96HjgFCxDRAyn2qj9zcdifX9Cwe7s52GRkTtpFeoKg86xeEBSJThHD391kojydT4YtD",
  "key29": "2NP4ZLgGqhFvLcUWRieZoikLVH2RjbWmVQLEnJsA3UEuEKdLpRV2vsgZE4EN8DJciosz3KtQgMe6AW4xcY2aWp2i",
  "key30": "4wr3DETqVJNjN7F4PT3pWfB5Fc4vU8m9pNRvtPcUBQKmGLMczRTtkSyUsJDEFK2VJU5g4smDJBbnQdzv3WyFcmcb",
  "key31": "2yV1yTEb3xKjZpDs9iQY3zbwrVVLCEmCbcGNbZYRKnnoGvF1vg6zUTf1y3LRycUQpnVDQDoCqg66i7KwuB9443YN",
  "key32": "DmdkHoz22A4a9hYzxsw6MJuiVumSC2shcnmC2ggD3bd7FZaaF8tZ1LpMwnWA7bun1Yk81kEj6f9ZxJeteg2YxbU",
  "key33": "2Toj1ctTpJAS2MgRX4F4xgcCLKnS1a7jYS5faavkKVjq42VngiiTLypa2uEUeKKQWYav4WoNXksHgEHEQLFY5e1W",
  "key34": "2zAUVk71eYBT7K1TxZYfL4fDz1AMyV57UvLrHirjGmP8zCo1dmbGNUJQGNAFZnY6hZQ9EJRC7Ld22cPaFC2KX1bL",
  "key35": "4X6UYefCdxtA3ftSVsaSpu67ZvBuzYvnF5nBWYr2GjEBsKYwinrHWJJmcTgyEeKRiY2GXM7XjmJ9P9jMggv6pxsC",
  "key36": "5MLNa8n5cKJACSxrjHqVyVYsiuMhBbQr49NQmpViWVbGSEMwoJZgUBn5MazcVeD9GokifHN2r6EkrD9dYbzF7uoJ",
  "key37": "46iSphiX7wXYnWouTATFRov1R3voieoHSh2bmgArYhfbNJKd7BMc3AdYpXq46SBHwm3KFNQmBqf5XAb1NqEyNujg",
  "key38": "39kGHhNCweHYNxAWTwcimenofoRD3ijpogcciUbNf67pcvhrcokED1GtyAQCS8xYUd2Gwi33DX4zxgJ4YzyozDqS",
  "key39": "2DCkidYPsY333JabVa9obvj7jUSPTd9G4u2kAUAJXDqGgmW6aY4msxhaM7LuPKV1ne1tLVdVdowF8a19jBwxKvMM",
  "key40": "4HFYna98J2G8dEZbTdzcN1L8JuUwgrwCozV3kzmw5yk6cfGyPxEuu6B1czJ3FjR4e3aHSW9EZ8D9Fn833yCKPnkf",
  "key41": "5WkPiEpPbXBaZ9rmt5933W92i9LBSGhSwG8QmitxoXjg4ffGKbfnEnsmGeCotSA3HdUMThVh7d2vcAoGiqzi8eC6",
  "key42": "5nPi5AHNjkBZ74wDGJzELmSzp6C4m24Z3uNsNiEvTmSCGSK4VnQSNi4wuwfJMgVy5E1Q7eP56mapYnuAjgHaFj7D"
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
