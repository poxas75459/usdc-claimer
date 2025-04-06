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
    "5xeJ5d44aNL6GYgHUyUzZynis7G12SJXpV41yxsNRuEzYYrqMNapZVW9nJby3Vqxxmoz7wTpaZK7Z5poci23YUGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoZ2HAyFrxdyfJmL1CQx3k1q1JKctMCsjXBvFFj5isaagAAZwCqW4NxQcQ9amqxQs4wA34GTshvjFHAgiWcMGXA",
  "key1": "5wcpJko2eH39KjGVHqdBiW2gU6xnXvSiuXA1H4exycTX7zrRjG4YAAeyF93u2EUqkenSa7ZXWHedtvQmMu3Grg1S",
  "key2": "4TyJcEiB8C5UXKjcRPALSs29vGewUiakgCsFs75YTCNxNJsXQdn7hwPG15uRaqSC5CyqyM8UZ8v4pungNwsPi6Hf",
  "key3": "5QwhwyhrDqkoWgMtrR6JiK6b7QGgNtSt7SZDoG6pvgsZ2s3UebKmCzQW5wXddbeVkgVw2V2B3FX83ZPkdSX3QSKC",
  "key4": "54phSMn7iQs3njqLRJgbH1CLcKX7q1xTiBhBNjdtGsHLnLJ9jN7u82RJUXsu95qs2XhjJZNPzhAcEXFbmrpoQaX9",
  "key5": "5mdA9koSAeiqrsxMKqYrYhG5NxyqAbyXx56a6TsNqxgYPFHZ8iV5kS4zNMgywDE1vU82MQFSQemeNeeK8DQ56bhM",
  "key6": "569SVh5Pi5dGwEh61NMGREdd7GNYQy9bUGdS294eV2mZt5iKKS25mhATYWc4wb9BdDfhrzRRz6YHhKtiZ5x3SkMv",
  "key7": "4jEdhPc5TCfxQohDopSziQ5AfWXSXfxBTDmQpYaTciqw1Xtsw6XzYpfdaCLHNcJRTXeTaPyvAKLUuQgFh9Yzg7XF",
  "key8": "5JPSEbu5g5A8P6bvxza86yzkewKbZihB52Ti155N7R4D5RpuczEVwVVUw9VrZVu7nbtnbbi5dfwVumPnrWgXcYik",
  "key9": "52d5tPRFmz7N4tcTnw2zvzaxvLmsgo9aUQfFpHyPznqZQrs2GJgGWzc4Pzm9rxZFM76b6AGmcEHamoxRKc2XwyDy",
  "key10": "3toJP1zMkEkQJeonGfj85bfdkuSZx1Bwv6XeXyz7c5yjauXcvybxU12DLwCYVdGQr65tFCELN5uEktNiSEdFTL7H",
  "key11": "3RJkJ7DfwaMJFCRg33xHoW44otA5FdoqJyQjM5ngoGeRw5vNDQyCnV2xvbJsu7Ltz2cZS3umNfgMtBaPX2ogA5CN",
  "key12": "qzfD1vRPaFe3Kt3ZJ5vmwZ1DwrdqQgnTTC89mU9BASNeLJ5zr9qytHD7jHAdUcvu6frmhhuRxRTLWGs2pmZxF1R",
  "key13": "5sybDpMmixMCyr2RJ55Gk2jDTrqcdeqEz1Bj9GaGLhkNborK4kbNC7MqnEzP33eRQ8dPToHM5eFgMxPRBA9p6cMZ",
  "key14": "3qkdbxFATaVEdwbsXrnJ1Y6TimuFFLXh8RNvMCxaK3pZ1PSvwSprCekE1TtL1fzzSDqsdXcWsqEjodJUozF2wgby",
  "key15": "2FCXqRdTTFWWjsnyhRjb9uTwZYYzxxgPqqixYDsdmd86FAmZwdgFzGCPxGo9oj3zy8MNdV4XeaWmuXfwohukyXH5",
  "key16": "jCvF5BNtibEKAhE78MsBn68CFu15Rgu8QZfmeLKDkCCHxUsnuMNuKa8iYETgwiEDVmpN2avnSyRbZUKGX2hhpmn",
  "key17": "3Srs1z9nZjEYkdH1QNQGfXY9gpnggVeDG2KjQYFYUKJSPt16jk6mRXG2zFAVqd6QerqWXcgxTJrbcwPkrPjd2QvD",
  "key18": "3fHNKtZUrCAtsjpmfMnAMRCQtCB5Y7osRP3iRsLHG53zkYmfM6TK6VvDaaDEeWpLRzqBSE66UPRXchtw5EbL7cL",
  "key19": "63Vh6ii5aJSwBH9RzeVWxyXHz7pWqmmT2xQ2RzKLR4eiry9sENCZo5917VZAGrnfv1YUsRpEQJmCR3oWXjjSS8m1",
  "key20": "2yM6W6pkSkRNC37mwGfxNnLWdwQ7eN4LfRDM5m9UYrVmQFJNSbZ68prPCfYQrNAUenqtojN1XQ7yYhBb51v3nCbc",
  "key21": "4SogHGizbqZP42GviKaykBmmDxBjVahZZ1kbYjy1B59gURBjt4PwHscdq51rQMNE715vUoMeYbT63iHwkMqppUpr",
  "key22": "4cZQmhGxDVVPnHrsqXK66phNh2xZx6nWEgSY2KzmExLtk5aW6433T17zjtU5DkcehLPvsbKLbJJQxvEqm2cgKusD",
  "key23": "2kfquTRpeMvFuFoaxwfLBVCHEMmMoc4dvT4CRZzAj7ycAUey62hTu6LdmsjBVZUKXRL66KihvocQ2H8HMy3dG7a8",
  "key24": "4LCVNWi1RfZfTaFYQmUABYEJFEYAWWGTxbADYF9cUzMNox7MSJtabo81EMCsK9LcnCL51vtVAhmZaSV8RtDmCM1z",
  "key25": "2cqbBDEsQngr15iDpj6Y8BpCbYLXzFpbVoxeDJjnvt6mRMGry44EU3qA8yW2kXzLxemBfAue6A3An8xsMSaP73F8",
  "key26": "9jVq6GWWtiTQxHoMZME1YoSCzaBVS573rqBsMfjbQZudixWFj6V6ASXBGCeoVkh9nVRzXcLs6azVCgzTxGYPUwh",
  "key27": "5XUEzNwUb14a5MoyjDYUyjhuqt6gMRUTJTSReEhtRviMxPSHfQg2grtRVz3vv1MsNxL4uzbSS3MbDqiiDN67rD3G",
  "key28": "zjXhVm8mLtYcfUEDG1irqaxUMTWsWarSMusiFqNB939FAVq2PwCnH7SXnMN2UgbznFHB8zuumyPRpLmCryjHC49",
  "key29": "3G2e1ZQCT8oNer4FxCMAJFH821yaUvwzvgy8FhdgRwuMwMPE1VwkobbBhpW2wCWd8tZY4m2knqMkArZ3232XndjM",
  "key30": "2xvCq3xuERmWUJBuhA7g2J36jWuxqSTUkhxMNz2RFZ28PYekWpQN1hwJ8oW34piYcSw8P1CLTTtt4SEjxZUJCqXH",
  "key31": "2ntcA77wc99E7mLdPLHSKDSiNTyNbgqu8LA5VTcvnCth6JWZK9uexUimMBgrdk6oUMn7jkRfUoUYmKxeteQZPLDS",
  "key32": "fTTtcwbL4phAWv8A2PMUkv5BgrZLqwKvA86rhYWscAhpZthu4XDVdeCpLre1rdfxZktyJAt7efT1zAnjiZrxHdv",
  "key33": "52LD9nSxnKHCM6BsXYUazDQK3Y3VRnWeeiA7KCZ9tPQo4GNSqZ62PPVpgG9xK92D9SUi2vSzZfgXs45vpCu8RCf5",
  "key34": "57DPnzspQ1JqNnmEJ5c79RuSyEncpMaqwKtY1m3dSH7Fzn5BtzTYMwKxb4uBKqszQ5aRPA3qXb8Df1C2N7nx7eTC",
  "key35": "2shpf6HsNeXAotKdFdMAGYULjtqFGSMLi1RMmMaGJyTWRtKpTGswVdUGG6TPpP3wMhT6K3D3oxok5RBATXMR8LuG",
  "key36": "2Y7N4jhJJ1ApPTfRCv5BDMhrzNihgfgv8wRT61P9N4CQXBhy7RMxvqwg6dTWatMDxhaz2QNQN738Hu69Lstv259J",
  "key37": "3bY3xmef5XM1PPHkjNYutBhpuHYEqqaieUcEoFNk2z47LVwPTHsQixe1xcqQQet3MhpTwg2B6oiStws7x2V3aAZX",
  "key38": "2y1td8YHLFY5HzDtUqzQUdjSBcey2xpzr3gCUNdsmb6Uwn1vm5Jduxru6XHqYunhEbxMNhirWi316WsTfgsqXV6s",
  "key39": "5pTfq2YNp5BSrV6VEmfHb6bTLVWRSvvEp27Y8dqt66EHZbcGmdmGGvzk8tCN8XLdW2vQn7EG6xX4DfDJxrEbPCvG",
  "key40": "21gc9D93UfYkF1RjeXThRNehgPaBNfi8wirjTK9PwoJbm84vBHCk1XHvPFfR7xdkCLBGrhUPf6iBdESyDK6gTUVC",
  "key41": "2ShMrzYtMvg2ypDrRRfQp1tTrVztvEvo52yJhowcaeyjYdcE1pswd8htyqtnLBwquhXuaryvz4DkbedjHe2d4ZhK",
  "key42": "RUjhKu7k1cq8WF3xTLjGHmRJ3TUB23ybdkfyMkf6Mz5DuD6aUCCt8nw72XM22ryUriSGceiHMKRjZvEv6nNtafk",
  "key43": "3tHqfrJ1a3hPdhumLXUvBbUwAvnjSQCPCp1hwa5FBYkfX1PMDjyxj9b4SHhHXJRK7mHXuMaw1kSgKqe2PgxDFFRJ",
  "key44": "4VHqNE3bGqB4nveZYnqQPeY3REsLKDSNFgcXRWC1XcXG5agboGcCodQ2Z99ABo8YhgKz8MUPaLN1aAcfr19nsjgN",
  "key45": "57H7snrWXfwpwJDhuomed8NkmxQm5mAYFuvX72FdCJsWKhDC96dRMQT8Yt4R2myQP9AcmirNkWFjLshiKQ2muQob",
  "key46": "2DXdfdXjq98bBTVErMPcgNzBky2ES7N8xhxn1wA9oSFzK7TmLD1CLP55BsUZvik65ns3mJyPtSnVaQUSmynrwvc6",
  "key47": "4TG4VaCHBDd449uCBY2VY7vaxT1pqYiTqinxwSQTvMakf4cySVKiFd4CCa5oL3R7ftnZbxyotWnNjLXn5X483fzF"
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
