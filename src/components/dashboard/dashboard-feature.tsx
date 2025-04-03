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
    "4evUytmjkH5yRCPbP9byA28h78h3z4ppwVyUaK3SQpTbQvfyqac1G81RUHKajveUk7DM4ZDEESG8FJsNJ4KsmHoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKBemVBi1cFma8fQypLqTRAyzpkRDoTzur3cMWJHz4GYtXS5SAQSuqPX13F2pt2d93TfSjTzRiG4Mq53pUz57az",
  "key1": "fTsbJHqxwRgeTG3isQvt3JWosCCU2ZqSVqEP8o7SQd1yhccQF2JYJX9QWRreXkfp6psAhje5W7yQQyoXprsE38M",
  "key2": "3KPDWyZbSdGmt1FpcTfejFrauFS6GQMTEgak86KjM7E9cyGK3awVe99wiCfjjEnpdeDirgEYeVYNZ8TmAQjXe3Uc",
  "key3": "5xYLFP9DjTrnUtQhJ25rUviLRfbdqX7tc2iuD69qHYVfM8nGkPNwBckwZrwSobYdXXShCphWeW4gX6t6opvCGk8Z",
  "key4": "5jjV2nqThYn43BEy6UFzDrTJiXy8xZQks4DfThNcsHWWUXTJPGrDqFy7weLymGvm28JuPvnsfahsVNnimspuaX99",
  "key5": "43qiQAZNRcBFmPLE1a8HJZXWHGxKq8XNM7NyB7xwYdGBmHezf81xMAkVHmjmFvaRYE6E6nnzczbtgERdF8cVZobp",
  "key6": "42xGgSJVNAKUgjwrzgEmX3PrUfH6wKG8rb9RzWHNM3XJi34GbPSQNWtCxM5ZvVcfPp2swxLbmRuih9XkFwSpkWj2",
  "key7": "M7UeHk9ghqTSaWpg5zJs2tsJTm3AfcDHeapzwiUhSy2RSwsJDq6wpLywfy5jaEtRqRUBTPj8RTNQbNgb1ddVyRz",
  "key8": "4GyTP5GSnJLVAYhjTB7HpPowqY8TWcsApFXUMX353YAHoLUvvmTq8kmnVTQ48Hk6QRnkfoPPGk3TNa3PhHKDqA14",
  "key9": "4Yo4t8mJaHTyj9cavswGH2cxk9cq3HNjZihmTviUPnKxT6vEJP27STbTVNMi4TasUFDWDx1nthvCnb7KVQgZLEnb",
  "key10": "N41KE2XMX2SfrwRKkhU2Z6h3c39HS9whvRdW8SMXfG8CD9SmFYbLSHY7iaR5rCZ146bsCNXKiW1f2sUZPvKWATC",
  "key11": "5xgvLBWhsRptbvNRSowSutQL58ssbLjtXwE2PWbvoawbMvXfShZsdXCvFw2mZ17FFiihYcekuQmG2nmHRtDg9iaw",
  "key12": "4Vs5gVgwYStCjWZjjzdwqtLjVzyn3cNCSsCmKiib1YAsamv8SgHMExMS5gCeiSPvkZrDfkssBPgwibroM6mAG54s",
  "key13": "C4u1Cz6ryPeJNfLSsQRi2hUhsc5zuQKQdR2yyMEMdKArVG6E5fPiXC2zifeXH9wvKv2DjqnrRjXhjTk3KiqdnAs",
  "key14": "5NLbJmNtMtKsSTxftEYBHqnbiHVyLHX84dJMS7opLUuZcnkCGFbA9H2jxufEnSjMaXG9HBbkQGGDGcd8JntgfjNL",
  "key15": "2TtpptRygS6yBfQwXoZ4DTfwGdBGEvEdHA3u6gAjS8UWYEzuLBWDHsLcgGPr3LMkQJzfExzwzjmPL4gVejHgjm1Z",
  "key16": "4sMpR7KKMCF8ig7ukmt7hjNdH6TM63yLHByg5NAUFbBdggYiHw7iVj3RF3yw7dBrqzTvCuc75p5HRRcb8eoYdov6",
  "key17": "3GjesJzrXKcuxwywJh9fCrq1Fw8YqPR6DYJgVgE3X4WVTRY6UpDj52pXJKZkkGPFhtihAzFZhays4oVomGUcLERD",
  "key18": "4EXxnMPgvvA4EpdyRFgQpT38SxD85mQyJtehWXSRUJRsBoQT74GaXMkERWGXxV6dmaM7zA4fNuTiCzN139hEJ3H",
  "key19": "5cAG2eSMbmzR7GfzzPhgEgYMhJF1cd2wkXGDmsVYsn6XZdonAHj28EjcGphreeWPd9Ya6deYqnFC66jcHaVjiC41",
  "key20": "4jDinmUJgpAX8v2PNreMcQT7HiVRgevVRfhafwSyWzjhtyuSapBS3RbnHYbJoEwWG8yMfCoAJDEDJSfD7rYaMXYA",
  "key21": "5NcCM6P2p9TKt3Fu1mqWSYZM4WKZXcsEfAt2pQh6GcLownHexjoJADd8RL3yWtMMwajA5x3dkweomiGTmWi1nKAX",
  "key22": "4BvnTpiZc7M5L5sigewQLtnonb7cfXt4uY9YM9QJA8u5JuNDAqw1gSHBfbsDc84RgJ6DiSD8R2xM8xSpbwy9wcR2",
  "key23": "5Z3gYbYmjPtL4nVsshzndznoHudTXDJz1SRMSUWDZLWTUDvZzRqzGzgfxrWPDLSBQkcL4CUtFP3hDSP43QSDv4ek",
  "key24": "XHcMiE3m2siCtF73yVoGWjZHWpZvp5Xe6r12dzqTh9cy2f2naUwGyySxvWifXdPkFmTHi9PkTXpDjdDVsZC8wMv",
  "key25": "NfAqqyvNKmbLpeLtkcq2LMmHr7nUjCLLCztPHEV1m5UNqvaV6MUyYmr6hFj9Vb9qQm2rmR1PHWUTX2smC4DN8hb",
  "key26": "3rHuSoEc2SrE4z8hqbVGbtQU3Dr83cSSANtdVQpLbxUcjpWCwupumHe4E4MjENP7kToL2Ts26WXrWVVceEpMnLih",
  "key27": "3sHq886jXvsYexm1zFou6KfUVWCsB95PCnvP3te9787Jo5YdYbeQEKkuZ2Q7yMa3QLuRtHDhKacfTT8gBmut2Jyk",
  "key28": "e2evUWSwvQFDFyPgH5SnuP7dEvQjHmdWuu3wa9yuZCrfP3fHhGhi3ZCfWSeuyWdquaZVGDGozvCKcfBMVmaWv4X",
  "key29": "3xTUJuS9xhP8AfcEv36sBz4pWihE7PBu2XF5snZ3mZUgFvdA8EdqL7GM9G7r5Fb4LAL8cVfsU32vqqUYLJJE3k1b",
  "key30": "3n5bx4YhyDq6zF4XzYvKfwkaWxaoXFdSTENvKr11BGDnQi8wrfmG2QKkPpRvPuQSsVJnqBFcmMxNvTvXVYaWuMaQ",
  "key31": "5PHqngCEB64THftq2tgBAdn8dX77eMpPNWxe3h1cV5aXjokAHRB6MDmoXhNVpPkyeJdnMGd7etrYoF2PpD7791rv",
  "key32": "5mud2LfJ97LnN2WoqWv5xjWyb2CdQKm1sxMamzTwNhW1AtXyx7MfzMfNbfT75NXtu2r7q3R1JRfxyLNHm7yBdxEE",
  "key33": "PMnNHfeVBnt2NNaGqY5t9wkQfWHWjh2Uvox36t9EpJjRKmzivWU6ubGgrkk2emAzMicBmGkSc435vXjsi4jvAXi",
  "key34": "2jwiisF4Q8P648r5yxtFPLrd9dAXv3LveUeXnhdUkeAtBMuLeJLiNjyyx4j6ryfD8PihgdqU2Hmean7FgaqZr85Q",
  "key35": "X9GvVjvKF3CPJkNP81mYrqgskZssq3sLJkJH1yf8NHLdweM1n96edw3oLmH7FoR4xuiK5iKtvPzQ2bdH6izSSrL",
  "key36": "5aUxJ1PVHouFiiuCcsQPyQJLZBceDYMYKtjqXzDgXedrmPm8UGm4kxwscGhRF85CsAsm5d2sDB6gUV3ycom2UtAP",
  "key37": "2v5cBFfkA1A5UYwiQQrAmBdy4rMFVjb9CvyiVyo914gALbeop1yxRX7iYbFmvT5E1txheonLk3Sso5AkM7STzQUB",
  "key38": "4MckCv4u9vTqnntwdLH96kmBcz5BhrMJnppxBPisqqovLZ5Lg6poCmBRPBCXewJg3Z9qXakQKxoMoAAg7BxMBkuG",
  "key39": "5LDZHsixbkPjVSjGcrYXkd3vcxwDsUSepXpu8b9cUPVRo4FePfERjSZ1nQqZ7oXvct1eXt2zUsej2fEygZqF8Qes",
  "key40": "5NovczJNFWFehgTUNXFN5Sxhv83DVkf4FwFq3Sm8UoVfZfa7agJdA5L1Uruj821onkb3HojsQK3K7XgcHabdhpWD",
  "key41": "5eMjDz8ZxkWXciJ14DLJgoizrnjFS6T8kTtoURLX5DLWUzsir48b7wQWFRAVEWDPUApjLtByEU45QJyJ88aUUic8"
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
