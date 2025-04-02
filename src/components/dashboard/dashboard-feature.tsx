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
    "5W6YQTEhZLJZNv4jq5Fa2YFmebEw53A7QH8EUiokmpSCPadpDLtfNjm7G3sE69m18CAESdDWEfAw3oFktuQ1M6y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J1J67WnWCD9bW7jZt9uQR3D6ayyzXY6X7aRh1u7vfBRt5uwhj1GqbFfDHV2M3BLhHUdVtjojGR8k7cn1GnBUc2W",
  "key1": "3xAcvtD3yvPZQvvX73Ffi9KeUFL85ep9oC5PPYmdGzCUbCDvAsz2eKjx3QKUEBtaE18j5Qb1TFLeU4Czygc3FqYT",
  "key2": "4msfj4n2911EmwW6fdkPNxUz9DVxqw3wRycuaCtxNmPYUAEQ35owTdgk4fpRmUydNTn7CMDDSpeLw3Y8LF3kwfCJ",
  "key3": "2ywwDAj31q8uRCjDtCkVjorRCNYzJK1p7dNfYW3G2ENvdtK9xKDG3avhk7peCGbUKL82XeYh3sVunr8WADMjk3zV",
  "key4": "2Bz3aQMqb4Hj5b7Nhwf31XTxEn3mvZHo4pxM5uzWumeMCN329nqw35TyQH1NjtMasY2urnRMX5CTH3EtJcxPb2Hd",
  "key5": "2uxCQwf8UCutNxzTnoL7WeXeP2uGAFy1u8mfSh8fdZ4G3cFaj3D4JZWjJKKBczqeQyNh5KiixKetC25xFuwhzdGF",
  "key6": "tNk4iCDEQ4cUUkaJu9EL2zKLHZu2R6hEvVSMXuB6r2jik9Awxr8rtRd5k8uDyftTpRCqM7jyieY7H1L4kjUJXMk",
  "key7": "53gHzBGq8v999VAB8DEvgbsdbMbmsAHUSFnb3y2NYmB5G8sSss9siEeq5cuMwy25EFXEaQacDdcpZWATPYPwXD22",
  "key8": "ieFh89GMWf3i6jNNHw7fTAHm6HBBT6nyqtWsZm21vanWcwhE3URSLQscSZ7ZUc2xqoSEp8NqAcPuuxDjMjB4Cz8",
  "key9": "TpxSuUAd93b4a1m4mx2M8yFNnC4oEhPAbXa7xYcnP5yWHayb7wAMjYPLUBckvaYr1nfF1pcfZgdTYAnf324yvu8",
  "key10": "3GJVrk4bEaBF7RsxjzBZezb27gXMWa78kZdAthFYiSF56mJHZgj8QogfBJEhX7TsroAvNTStDa6QFLnaAhTrKC6f",
  "key11": "2sDDCWguLTJeRUjqu27ZrhigK3XHkLoMMMjMaKjJdSGgbNrWQkzai7ZHFGNWoXFBDEbrosbNnroyGmKdMMt5QF9L",
  "key12": "5DqXzcdBSVv1pZRebyoLTW5ZhTC5w4twaF3haYn4pBgftt93BHGmV3rrhHT7LnfUUCTS9PFn8p555Mb3oV1VVYJe",
  "key13": "k3sezM5Lox2c4iyrQ5Etp7fKwdo1zdNeniTppfLtjarqebA9VsjTzEQ4oUe57EDS9sNYebBZQKSc5VWV23mKGrz",
  "key14": "5mjfnTmEL34MLMococPLFn6W4rXZeygKS96JAnVc1SiQLcUJ3qK27bmoJj8at9q4wcN3SSptfecNpui5upG21u5M",
  "key15": "2X8hEAdnKRYHMiiisqsiijQTcXoee2pXrXV2sK2i7Fcn6BCHDQ8Cj3zHjoyQLW6kbyLxsbAx1bGxMrTyi6hH5nbn",
  "key16": "2JPZHpSt9t88cyHfpvZPkn95Z6ky9pFznYpMtJP4Ej7cBfb3naMRiMKenypSZMfTAEFh8AEDMDvBETD3KcAaEf7X",
  "key17": "3u8DErCo8wNksZMxxaB4pSejwok8tzW4JbaVAouJ7PW23F2sQyzh8YrQosDqmG2QRABWk2TBq84MN2LQhtXfQ6qZ",
  "key18": "5vtVHubHZ4DqnBy7E1sznHtEveso8zZBPV8hsjwbxKNZQFWANhThP1HSUWMc6P7q1MBJuEEfdwwZ8wTpMinUqVGL",
  "key19": "5ntN3JCcmLYFGJvHLU6z7JNZaDufYVX1rpkL3NAU7w8KxB6HbXSeXQ6UoAJpbmymQpuhPPGfhArTYM4X9uy3nNZL",
  "key20": "23XkM2ffAgeQj6AB4BAXsgt2FA7j5kojMNPDATvc1Q9m8LoadbkrGHD65Hm7kpcUMzYah6j6Renz5yXWEL8oFenX",
  "key21": "2RhTsAzUwDqNKwP7yZS4tkyKFBKAARRxz3XK9Kjx77hpRgtr6YCfV2kXh3r3Hjupx9AdoVu7L1oTLEF1sBBiW4hY",
  "key22": "twpKZEcAHiT8sKEKAG7NGbSov6y2YEaqCMGqUDnzJYQz1xWu4r5cPMBJz58kKx3B17p3gYCZxp8LxSw9ZgBB7s7",
  "key23": "cb9UDBf9d1Ses3wtB4pCcf7HziLVvZMhm531s1bik9kYKCUo5zYx1wXoFUgAB1dLMKP93JLC2j7N8Z7YYJab9cy",
  "key24": "jmmkUQevvk7uHAbdAbo1RFCEcMupczgGSWDLUbEVQfarNJASDQMLKZLtSm7agwv7t4e92QN3Q7unaRyVnCXCjgg",
  "key25": "5S8dWW2SzVQ8hv9DBoZCm5o7hxXjKXkXoiY84frKwTdfD9gJiZM4EUimu5zvDbJnxNmxZMYB23deBRNu7WBZ5agv",
  "key26": "3jNAXPUJQJCBuVBcNPnq1565VYsZ6foC6iozN3uQvYvRMJtY7xXGCaz7t5nM7xbpRkJyqf1s6MJru95PKbXJmira",
  "key27": "5wFBf9hDuYAqG37PWjTa81faLdwsv91dRUxCfze7U5Kp6KQx7gGWKNqWgnPxs5pEV8TRAcus4SXztYzMTNWHwgYx",
  "key28": "35ZpdQJJzv7DMmZiz2ehQCWY4EFVn9b9dbZocbNVnWrCJCTVARUMuPV7iLHwereE16JhrBpTNdYrwvtPjoZU4PyL",
  "key29": "61MXSwbcw97NFFPj8LzbyPbSExcmnt2aGHLS1GQkr8qfSkf4duPei8AEJMbYZMCNJDWjaecZX57HaVcm8K9m44Cp",
  "key30": "5zpcYsvKM8dHwcFBSxapsyuVY2MPRKvX3pLo1rsAcZdDe4z7kGWUkciqUqJK88T9grz7wckBsQNY1bo4ie5MsUHb",
  "key31": "3yu3c3LLCpxQB8fqxnA7NLXdEJmdSXLZTgAxu3nGqkFC74S8pYaAmnJycFtt9AkTVKvPcdgb3gxVDzLDMhfd8rx",
  "key32": "4zNLxmaCbSx1LDzygom1G68HfHW7XtmvrBtbWdqnjegZSFLPHLiwJ2xYxKMs9yQdJSrgybR8b3rmpQVSJEk7EoDS",
  "key33": "4k125nCNA3aFsoBb7Cnf6XKT389abQMQo2B2UXE2nccpDcrGRVv69cGnKk1VcGvvvu5YfcJ3zFxQQsANi7nkLTvm",
  "key34": "32sdapd4ceAGhj8GbhToGHHJrHDDPhfJLmBEaxxD68YJcbeev6jPeeuX1sNrgdCeaU61zRunpokh84wJq2SXb7T3",
  "key35": "GHZS7YAPLG76NLqtKD725LRTDZnyCBXJnY5J7Cj8ToNFV9v7b1iAcTQbFTPPTXUuDSh2b6kJ7abVPmmRwtM3DfN",
  "key36": "GtgRUo9PuaqPzkktywXiqxfefMVeu7XaqUPvFySkFP7Likki8Zr7uYgC2HyWLRkMjgt66ukQy7YujkfGRmNhMYJ",
  "key37": "4wafWWc7RsGFtUEXDaUt1b4ZvqC2TMbETEp4JTCRj37DwDdAXPEZCPooHoQiam3nfZzgzn5Ws8fYB11eRjELReUF",
  "key38": "3WBR5XMEZq5Gu1hGp1kvaxvxD8L5cLRaALKtBHQq4xwfjNh2AyDWzdvEad56Qdo51xWxv6iesLae49526WkZjhtj",
  "key39": "3HvuT23u4PWXxDZnn6CDSTutNNZWGbYb1LSpotngNpkjntyv7ua8eSr64Hb18NGgRLVjAX7bNaZo52qZ4ucYpQ72",
  "key40": "65uLHBat7pJfCGPD6mVyLP7JyQWQ2XD4ZSgkbh8aoYmW8pXeauWvp9ojK4gBGfFpDHQV21Hpmy3nVF79y6Fov2Rf",
  "key41": "rm9qsGDRqjZKrRbjph2YhLLxGaX5Xm3ZFYrhcTASUBHJoya3A7Vnx6Bzzq2XM4UVZHKuK5CMc2ZQYqQb3BDpoH3",
  "key42": "5ti3WidgJ9pKtzYHQYyRuYmpoFmEFQusorRs5W7Jn8ZeaWv1S42Vc5kfqnsbM4931AchKxPgGAKnorsqPNqP3yVy",
  "key43": "4Jyj1kbm6miwCZ2NrK6ushzhA8siFgBzVkwMzZ3uMGD7ohtXPUiCLjhyCpYC6kBPqAD6Vx9L3bt28fHutoorqFgj",
  "key44": "65V51ZRdicuQUQoQjegPXormn47H5A2WEz3z9Gf4nHPDaiDtFCx1N39HjL23h15ZoNmKPSP3Wgi95VYttPQYSGwz"
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
