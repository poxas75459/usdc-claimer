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
    "xo41dYE1amybwqkQPEXL3wsPGsuGFp2qJWPUmSUJe73AwRDi26AZZ3jakuDT5xcWLrmyNhRof67Pwg4R1ShvrGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U16AESEiKEyw3Ha2JwquMWAZwQnuathBcBgVWkpTgp529pjuBbLdGZMm3j3kJaqtXhUu8VxmBvzHATnAXz1edVW",
  "key1": "3QuFQgFm9T8p1iSHzWGjW98MyDJPfM6GjmDSjBqYe1MWFDfXZZJXnrzAa7JSmHTdQHvigLRPqjh1HnngWGLRgr86",
  "key2": "7i3EMnGBSNkKL2vf4fqVnUMnqWWpTZiSSpNk2TaZk8J3KukZrnn4Jj8TphRwF2isvbiag5VskMtSC1R3ifHUj7c",
  "key3": "4ZuKGSppnr48K8RPMQTiYMbNjRDD5FP4ykB2Y5naHDDijrMeKSKadHeSmzVw88rKKVQMzdK9mjr4V6t1N44S85w3",
  "key4": "88LhcsCxxRRjRaqfMzdnH4SWKrVyQYuvimtaWhXxUwh3ApYbd5vkVwJMqXRVoMSnXvbJPn6LykWmkM6wU4EJP1z",
  "key5": "2921eiHf6sykQ8J56GDRVSA7QFYQrq7Dg3VGcGrryMdN1gi8JkaSd36m5Q7wRSDufa73mVrXvowY4J1xRbrrhL68",
  "key6": "5YU64ALHrtuaaqsnSa1JSaq2C7SknvLGqxAEDi9YbpHi61PkZmdcFTnuwPjXBEezn634db6qzGLfW4S73fnqzKZ8",
  "key7": "5vLck3tcktktKXgb9JeccyE3rpTufmz1faPbatzD31oCEWANEK25Min9xufFo3RGAYBoYzUK7gaM9tGCRGmaHF7U",
  "key8": "3UXbbutBtHgby1XupMkXsp9Q4MKpakemKAAZw82rAtzYmNzsGawWTW44EWr7hhaqjYFPVm9Kny9cUyHQvUBqZhdF",
  "key9": "5QqqVEpAZCvMzyNM2gVrjoc4dcgTKqcxVZRWW9TZGrb2KeAXdV8hTezNff7Ww6ob7dnaLM87vKjL7xELj3X8Rojn",
  "key10": "5ufNewgghZ19H9CfAiCJWUBjJitbdDvZRhoXeZBAPxyuKy7GvjSGvVAasWZ7W2bdoCQx9azEXEwAHWDJDhACDiwT",
  "key11": "23q5gF9457GtPWz7JHr8YSqNPNLUMhLgA5HYWE2sNGALhG2h9sSV1i3LiN2ewZCif8AuZ9oTyV1ywC33CWUmBEsP",
  "key12": "ivfCJ31wm1GbGgiivMWewPm2ayF1DbiudjzXK2KdfHqNPoAvJFSBmczB4jR3UQz28iZEiKCNVJcChhBkw1P18e1",
  "key13": "3zBsAL5pxdVXDxedWwpAnfw3iXB96AGi5Guc7mPdJ2S5272VrGQdw3YeJbBcfJFYxVfk7o5tRRhkNqHufz97jmai",
  "key14": "3B93C4yXVxX1TqwNGVk6FUhg5v15WaTLWPsPnySEcUPL2yvPD6LLZogRUvAswTDVLeoJ2yH5ic2UCLAAR6aeZFrf",
  "key15": "wHZAwpZ27hhNbksLWg3vD1cT6WFXaFgQ7eDvW9ACMFQokexYH8PkCQfAZYkZDDn6MtLtsqeV45j9Suugt6f9xaw",
  "key16": "2bgmJPdtqRsFnY5hY23cmxvY4L1xha56rMcpfBYzvoPMa1UTB7GAEKd23iqckBGTDHePGoBTsLqGwiCpTCDyRDNx",
  "key17": "2oxQd1kvqLV9gQkvckx2J16gCs96MS447MxFPAQiLZ2oknmBLyc7FnRpyDAEa8J3NKxae32Xh1pGsXHfspwujY34",
  "key18": "3iiu1aAjy6otD4pJYvWE3vtuep2dSY78ZHAmcvmskdrwDsVk3o9uZqEFM4LmnCmuRBDUKhAigur41mJLcfuWYxYe",
  "key19": "4oEuAzyKy4SqdJtijnqJ1Q1Z2dn8awKi7GutSJkmEuyiiDPPpG6kpDWLV7yVHJTrKBCjaN6TumYJ7sjei8RDAdQQ",
  "key20": "4UA2kvgPcGv7A4NdPuxQktCoyooWi6QSKW8bmeTa9Qd11SvrnVMzzRws8i4ucbp3BDDZaqQATN4bwA6pViYQUKX",
  "key21": "27SxQDVLxUbukMQw5Li7ae6RVjUG8YoDYEKctwqwurtMfyDiTdTCwE57QyN9dS9RpVhuj6FXbLcoJKnwKsZqr7EC",
  "key22": "3C8TR4zxYcmbHdau3K86zJkzAB2PbBu7yKgSKVu31mCKis7ouj7BBYjETUUkQVYacVnbD18yNBFhqvHRczy6ZeY",
  "key23": "4arvdeCSVxXFQZvYZJxw9TWWSF9xq5qPPoMw6bbJYcrwomdddzcWCJp3qnbc1tvzjsD3BuyMDt3kwV64H8AN7izb",
  "key24": "2KGBS51iWZefKeALXs6aYGtKEohAbSnEBY6v5ACxhtwxsNWZbaryWvLqppv3AZSJT9K8jS5ShGsbtXCmcsnX8c2Y",
  "key25": "5SYUgtTWYzVz6y2W4Def2Moj32ja4WmQ8VsFH9c1PjWyw1mbq3jEd3capL4cBTGG51Xg3yWfsmBfENxPxGKZwb2z",
  "key26": "3A7h25cHpxR9RMnRmGiTaLpbJqMEmAvHqzyTPTPnfHyi4gatQpa7FbgfX2h5SPmsbFg4viupMdiaurRN3rpVbQqp",
  "key27": "M6icgk6yMWi6Xc1n2vw4X3ooy1CWKnXfCueCn4jghHqpsGMnFW9fAq52MvehaJohNbyQ8RhNMWottsCC2cANrkX",
  "key28": "5isrS9QCYWyHsx9dEAmBXvDpibfBNHvHkYTH8YpC7MKHUpddXdSg45dfFoMJPHkoXV2enyWeXxqTaTJQdHvhHrmf",
  "key29": "2DprEELpwvCS3CLXYkct53vgUMDjSLFdV6zbiJsjTBQD7ABLhnUTvWayL9Fgo8GaFCCJRYpK7EAtFeZro5VLrnuT",
  "key30": "5b93wuyuhbjhTVXc7wfFGxtu58sw8UeeJ3woAhaNnmM4z8uGVZMmN6WwqbdjCVaG7DKi9gM2jfqqVD9YXBYFDiFo",
  "key31": "3hYsEpN63wbUSAHpVDaE6mgMPrXFDwm62eASfUjvQeHqrTravyuV5zrPNwqfnU4MZtbEgNTAnHwvTGF8HkLkiPLc",
  "key32": "5WnJCbcAdtW2Pofog8QNMeaT2NTATEnzZx9SmZnhDLQXZzDnaxbJFEntTx6PJQsJAJWK5RuyLhWVR3agTuuQvjqT",
  "key33": "3UKwB2Mc6bjdXUs7kToDK42wk7JEhu9E6sW46R4ZuNBwUKVT4JzhUnmn66RZinJe7CBwHyFr23KUFJWheY1fQBBi",
  "key34": "oTAQHxxiezvfbeqq869HToocSLBqAUztesMVajPWxSzwdt4xpPnSynCHNatEjvwKazCEGEr9GVc4PoQcyGVGA2U",
  "key35": "YGcdPkBYTHVb56mKCGhvZkWgcJVDuAaQpTUK2LELNwYnhsDm8f3zFszsMpmvEvpV72uBC1HUX3pQiVgrhQ5FjyP",
  "key36": "2Wzf6qwPWGVnXBCtuUfFifYh8VoiScpr8C86TqzRbp6WRyz4Vd3fTXKvVEUTiVvXhLcfAMSvLR2BJ69Z8KALFDds",
  "key37": "MY92YcXHmFYQu82NcwmYzC14L28zfeBELEQUHqgfChGz6NqZkrisWVkBnkze45UD1XVipyod3ghqkJqYYsoPK1w"
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
