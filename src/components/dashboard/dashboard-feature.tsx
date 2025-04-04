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
    "2dhSaokghNqh641kgjyXq1yBR9ifAkVjN5aMtrBzf6LccWb5Nt1dqbJ7orPuwE1pMKcDo9DZUTxPYFnoSCGJsVAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38WTk32trSnMuuiERzCaoX6wzPVX332XmevATBp6cwGtUCJUeuytutV6aqfeS1pEiVM3ZnNraTDz5HVbMQBXBUFU",
  "key1": "PaJLrTunGumsCYqo5pbiU2igKFMPb5esLBHJSf3LBJNZ3CFsSkVktduSDGk3Gmh5pfQDagawuzCRsuCtFVSTXR1",
  "key2": "3n6ipaX6sWpxKZ5DgfkKCSFJaJemYmyLJCb1fARakL1h8KCTSmpSDgMrnQyyYmwGZtG4aVigpWLVjBEZJBFtZ8mr",
  "key3": "2wPPQczr1zvYjPjx9xYtYwWDzEUTh2LgeWJ62KoQ3M4Cqs8dd7ppG7MhFs41E8hsUfDWV4TMzuk7YWipBrdWBcvD",
  "key4": "3SuQd5gP6bvag6SCGBvUDLgkzaaYjqH8QBv7roADC5aQoY4ZXLxgN9PKfbfoMn5tFFS2rihfNMfymNdxWgi8TTUB",
  "key5": "4ZFktmvq1ePE6Y4mEML816b87xRxrGWFxqc4zE7RKfd3nEDGAJwC7ax2DvNELswzjC8aqbAvC3wQYZ97SYZoZ3nq",
  "key6": "kZZo3jLPo4Nmzmy2t9mDVtXV2zKkRSa1FzRuX269T4gbnk7Wdz8uPjShScAyDZshPmpBfBNn5vCoi6umReh6Nio",
  "key7": "3yQK7AgWzyBPn5UNE75cbZ2LX7DRVh27vMdwwqcttqWrmwUwW28gT8psaHW9HuURNbJX1sU7oKYHv3j4H5Zyts1h",
  "key8": "5VEdKxz4C2xiWcnQdFoyBPtPmpsviUYCfCM1nSLJ6WsPTg9uzgCpW1HUukfhCecKQuaQuZQFRDgnPwquLRj6ngRJ",
  "key9": "MZdNiGiiBwfkLKCMh2DqtrPoNyhgzgK8fPaPnpN7TjK9JLnPsnR9BrrkS1m8ZG2FrdHxmXPLKfnuv8syA3FuUCS",
  "key10": "BHDoSVM8Wz6sq7nYRKGSGuYuet3xeJQKCPzEjXU1UfrCzjCVAm5AUMui5esLoyrUfgvA2Mrj2JwKcphRnXndS3f",
  "key11": "44Y2MMHS1kXNi6yzTNH558p8pqu6amB8WKS9AoVz25fPNab1L7vPjCbGerjkjzQuZ9pSmabqRLVSzBy1geqYZMjV",
  "key12": "3j8hphn5W6tJzPP2zQ6dPwM3HV7c1vGDLbgzRZd96TuUcpCjVDXHZK4ux69w6yS2xK3CpVwxHDe8FEZiHDpviTGy",
  "key13": "CBUYBQLLPPexM7kukXAh2PgWLQZi7xsiAXABYqA7mu5s7N2wJcJPqmUoXNRktnRmGHxyCruqdEq6Zf6LWfpTZrY",
  "key14": "q7GMCnKGVvEcM6WxyyG54HBRGD9w5qy2Y8TRVTeerczBEe13EsEFjPjdf6bnNEMC5skF7D127k4FBJWXrrcgoGc",
  "key15": "qraJUJdYkmphsnAzLA14VuwQEwHPqLLbL5gfrvxGxhZGD5cj2VMiJeRoCzzjTZcQcF3kqDqT2ES3Azk1xQ6fmu2",
  "key16": "3amDUPgVmWy5EfFU2Ku11D3xXE8tEEjfAnpTsmNtFgBbXftdyJEg2AKu61N3vUJGyq72WByPjFVsNm9eAJZUnxVT",
  "key17": "4jywD5f9G51Xhr9nGMkLCdyAtUELdGiTCTAaWDi35FY88tiBJjfvwua7KVggYiEyCNFvGqtRyG8KMYbYXqkz7c4e",
  "key18": "N6zHWVKvkSVu71irYSXZzrerHtGLdSgVELZLguHWpWmMhPgRBCYb2Y9TsMM2dwdtF8q7Qs4Au52FYWgu2rqFGgM",
  "key19": "3WbdikKhpBkphJcfaYQuYRM8AzCBrAUGTFrFBAji9q8dvEbDdrSVSYZKyWW3gkjwev6cjukFmfXa6VdHZY4sVKaY",
  "key20": "3b3nf2khYi8h2LbvBDHTKy1ds7Za7ayXEcwKE84tQQrGXzCcDuFb4RvRoDZqEZeFDWnGpkSuWPL2NXPxk9mF3LvU",
  "key21": "65CKChhAN6xkYxiFWVBbEgHV2SgS8EUVwDzwiNNEDQjCZjmXLFcnWBGaBx3W6PttjyrgycsGEb216Le1SvFE9nwW",
  "key22": "4GreXuGn69QmerBRusMFBZjB2GcH319G2xaaLiUdcSSbs2iYM17sn5Rgg62ynPfVgTfmtkuCMCUbAgDdZNguTctv",
  "key23": "4VPwrVD2Aev1mKpXN2G49wGjmKyEijEjkDuYGXQf8CYMCyetxLSRmmZbvfpFNEGgmtfb8PmoJHztiZWGrf2gQLYm",
  "key24": "62dL767VfmKDa6X5j3VP3ReBU8CqBSKGLaffq99ifJuxJZRoGosB6eYrzhe31UsW98unUwXupTzUz9kQZPR169Zf",
  "key25": "4sR38qEmLtw6xLYXSESqzjhEbKFQq6BYDiKbFBNkty1v6rXrKMV8WHuhJykQ8x6tDL5hgyRDhxxB1W8CBGT1TNPo",
  "key26": "2tmcpYHLNJXxD62u12QjXzqhzXsmNeGKbmH7888aC5jUzXjueDBKBBjyQsPC3cuJVgiGdz9FBAwo77yrCSi3riYa",
  "key27": "isV3pgCzsBXSFfR7sP3n6WWHZKuKAmZVgVtuwddfZCdgpUwRu7HiSS2VhsYpjifFnhGgXdkzRnRXmVJF4Fp44Yi",
  "key28": "FgtNJ8u2Xj1nXSj5uUYVyRQrLZSDege6eQwhoFEsLEao3JECsiCqXHkRcPZ2r7MAukS5evr8EuLXzhf4JYQGSn6",
  "key29": "5eGQmHTYr9emE5MGXv2bc3ryomBB3k285QwqmZqVjNmcR51wnFLMr2GwWTYGTDtrUwT5Xfz3itg7wa9DNwsiqz4a",
  "key30": "4rFJaYPVDXju3ntSSxaU9ZDdP3EFcLhRoci3yViW39SrVVzSJYpfdv4HVxDsXzSjTuvss1veq4X2FNTbG2eX7coC",
  "key31": "3FrjXreZpgFNNA4JzJzG3xisDCqX5v8AFLHdHZ9GCCZ2sd9ffVJH3XSah6FcxVHyrbhuLKDyNH7Zbr5VjtbCXjnq",
  "key32": "3zqL8CYzemoJW8pD8hR5FUCN5qwq3XW9gbVB2BcDneFDwRq1FXYhukEvateVD5psyWz9TpZ7KUWEY5TSJcYtm7qi",
  "key33": "5iXvndSBDhe6JCaw7F4MXCUjFzTyL39hQTaX3MwpBkuhAWNMFg3WygciKJJgwM7yv4X2thctJoPvUAu9eR8Cuh6G"
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
