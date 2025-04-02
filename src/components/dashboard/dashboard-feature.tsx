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
    "KUVGxv9adowhq8o1Ep8mNiWhSLVdyL75rtjeUeHZByqd6M8aBV6p4uaXoniYEPQ9Zs7jzFDm5YWj1THdkKrNDpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ccovgoVH3cakRndxBhLQBU6q5naUbZLAFXGuYV4N2h32LFtx19heBwXmt8Q9jk2kQH2wBToqUrk45ob89Q2oFSr",
  "key1": "3hH34VD9nvBiaoTyZcnKJMNhhGe6AQSnwjZMiYiyLiq81HAumxsiq5qHiDL1JVSqq9ciaJN3n75mu7Uu3KAo9Ztu",
  "key2": "5GZEmkdiLJYG2A1bJVKES6AvtsMs4uDLk6GeMR7RQFBeNjfJdtpkSWTwRBTmEN8Sg2nks55qU7gDV7LY4KEQhoUg",
  "key3": "25aSBPBufL4ntUyCbVsV6U6BqYdvpEsuwBh1zzu5tghQn4g4D2WUDaG7zEBJXbtMBMHsd4DXsW4CDCsFurQR98c2",
  "key4": "5ZubJbZP2ygR6ZhQDzMwMYm49RarXnzDGjaQV8sqCCNp7pXgTGR9dRYhrAkjRuRappoCFJUUiHHBvmfEUebtyXQu",
  "key5": "4kiyEuNhJXc4RACN5efUx42dsLU775zqWDUVhq5TjMdVCiDheNYzTyz7qV2XKpZesrFfP5yap7nSzHifFtX91RaR",
  "key6": "33HznoqvQUZDXSCUJM5bnxgxiy3Dp15om7a1JFcrDEv2T5ZAJbMJghjuxkzkY4wPWabqqk623Tckq2S8iZZ5GMBZ",
  "key7": "HGEvfHkt82zGfPWDp4evoYr1anNbpY2ERYEaRixTeigQR5ffP6iGZbq2BWy39PtGHRj3qGukrdJJ5PV8PBpt4y8",
  "key8": "4751SRvXRtyDEE6CYqxCaR1HHgDMkseQz5SwgqMyDqakYoCUyt4z2RyYjCkcDamohT1LmChSzPo8TBFtmVYbNsLP",
  "key9": "239o33xhKXZqWkojfAsQCpwdfy84mUorwxBMhd1vGNEeBGNurH7oKVxcFwA3gdhPXq7Nm83McGN5so7UG22P7BKS",
  "key10": "4rXomZSoaBCU6e6BXCXoezRmg8odvcJb1grA2dCGsYsGXxSw8fgo2LNAtDyiQ9DXTmDWeMxLRY1A2JASiYuyAEc6",
  "key11": "j8QYnnmuv4SPYpYia8c3wQvpiXhDQY9NPGgQior2Na9stoxkojeJB9TWGMNDqm1zpghywXv8xfcemNxTpqbMqSM",
  "key12": "5t1iQpMQRBQFhMF8gtcZiVW8gKbxiohPr6ksfZ3zCxyJdtKmay2351pVfzjboLkV4qdwz1VcCFQ1DgnU54o5Vef6",
  "key13": "4Nwjbo733fkYGd2bH4bwnRDRyZcJpiPGtRZD4DyHV3uYvfn3LiHVGjy3kEBC5PcvZANEbqx8QTZ2Waj7RVcrh2CN",
  "key14": "24Ce1uuFXapvnsVVUSDML9twtGG5J9iG4zruv4DCK8ZYujV2bZEMoeU6bnX2w6rh2CfSeMEzkxANqmwLptUTZWJa",
  "key15": "2v3wpnCCDaXDMCfgKt4zxrVku4J2vZbgy4HqPCYiXE8xY9Hd5eUWFF479JTwDinvhQ71Kghkh9j1F7mnsxEArQyz",
  "key16": "E4YEf5HgaGZJWgE8rMTy5SxZ9J6eJLQezpPKtFBxEX81W7Zp9zj8ozeZvW283Kiu78MjFx7p1AZMTtAVxfHMRR9",
  "key17": "HqibFr8Dgu4wGUvynUkRgXG4v9PpKh7rEfUxHb2PdNZkD93BvRpQj52HkUYQXQBhcRseFVxXWZuMrwXrb317gjK",
  "key18": "2ALMvLXsur2SWX2AXa52E8MTRbiUo4esNqNK1r5QTWt8jPmtaRoJmn1haVuos7dWJoWpipVVCAophbBNpS6zU1hm",
  "key19": "39tmpgBpzRG7YUq6fKAxKp5osMRBnNutRShYjEZg17QvJ5QYhYMujQiSexzt1d9D3EtReJBRgH6otquLKq9C6t33",
  "key20": "515NnQdYL7yJtQSJPkzpzQq6JkVZakWuHUFTcwWAiEpEwuueQ7tbetatLN3GhiwLZ923jbiUUoAhLWWiUrSpqBo3",
  "key21": "5Xt3vUM3Bh2hTaaUXpPNXht1cqvjcfJaK1K2ohH4UFH7J8kGuD9Hv3dXbA3hUVMLJj2Npxhui7ZamwFB28kmHEL7",
  "key22": "4mUkjSko6fUYgV68WnjpzQad1a3b396eP5kYXtzULTAKiqohYSTkF6pRD7QfY5kSdKd4eTEo5cSqXcm2qaPAqGvo",
  "key23": "GbmG62VZEuZbrDDn5kecuXBK82zPFfMupVDCUUWXg8fHnHxUpVi6vibfKQyRLq3m8uz2o7KhoZeuGY2meKdtRBB",
  "key24": "2DcDs1mcSHY3hLVgxnX7NLNyhAG2M2PZN1bv1RbVqhVyQBeUXpmtnuMPBCbineuwVgewqFw6pZHwyeuEnpYwDKng",
  "key25": "2jzWyQZVAh3MeiboLAv3aEct1hyNUGdakDo3gCwSV5vQf4Pb7LK9M5HjcRLtUddG3VJiRz2HuvgHJXwVx8vmnfhs",
  "key26": "vinAkSQWmAKoTbCjziVoDd7zvncHZ3C2UP1hSodN87KgpRC2iV95sNFoPVTd1LYWbumprc9RE3yMaH1NDAvxfa3",
  "key27": "PZQZqMQtzPmbUeBBdQiCWjZicrNrG12w6jzDAgcV2fFwxYthR9ducPb3wE1D84FVN1FMuQQCrSu82nXfcnBdytP",
  "key28": "5kD3UP6gAwnTxRTneMADPECb4uvWMPfY8mTipAejRanVfyxVu8FTYf4AHqCGFUfe676JeQgFYFPskUFAKiTNLtxE",
  "key29": "3xkhWKjJvC1x39AfmTWfs8KfK5Fsnbn8cSb3Tbiao3MkCHj8gn5Phjt4kN4NoPqL3WD1SXe33ZnyGKSFhsdCBtPq",
  "key30": "chAcLBPhbw3kdsb3ypk1Yi85pRxEih5JdG8svvtqUGCtdqDrPicez1NHnKfP7CEiU5FfSLwFHkz1KDHJfSehbYe",
  "key31": "3dZmPS3kM7WUmGvPbU39qfuktGFEAYPEb9nMydFaZiv9mXc3U3afmpziNDhwHvmJMfkzSXfv27ZFQZmGfYHtQcDs",
  "key32": "4UrcDXpNHouwu1hmS6gEaKacxr5p8mTBHf4KkWdKAZQVBzQNXDrTpMiXWWqFSKfGASjsRkjNkVXg9DBEtQhHWzDu",
  "key33": "ZbSMdimmifTmXTV8xjAmwybYzBZQBkBjaLVM98zwHJ214rthydu3P9PqbnuKWdo6htRWqyLEsqa9B3j9x2nryy9"
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
