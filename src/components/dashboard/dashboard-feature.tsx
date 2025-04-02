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
    "4VeEuYax2M3WwAqChGFUptJxBrWdvV9jM49smUC1YwM5eLeSkHja1ufD68Rb7TpZfKJBXT4yPt2KAjXotZAuixh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t4tzaufgpsHpQLLZ1BwzSwjsxbk3dk3qeBKWoM9MfbUzUDYjfKiXdqdNatJ3iFVD6h4XBoHj3sFCiY5rVsJdSvE",
  "key1": "3uuHHH5MBoAYpt4151NAJRsniAkyj1S4sKfP8pcBdg32Y2DxbQkMb8Btf7UfLm5ZUTGS6bUfZDamAnNYLzXF76Mw",
  "key2": "4y2uhhcG5kzERTdHKRTTxNzYbYEhvzSQ4TEFucrcuCgTnh7WCXa7fmRGKLhjChDUvecHXd76NMkncRsYAHpTR6XR",
  "key3": "5vnec7CjuzpM5kn7kuMRo536YwLbX8e5djQUmU2dfR9DQhXkkS3688aE5QwiQTuWmufQYX5r9pPv3gLFek5BnFKi",
  "key4": "3vB13Y1mJv12eBqPghs1UEZfqVRdwtGMKMvuqAzYckeos6Q7dZoRxzoB2es5mXUqvbsedCVeTDEmSQxrYJFPXnei",
  "key5": "43khp5rgRe1kffH9DwGfCNcpsUvh8wJW6GoRxGuwipR4FzxHXvreHm3EpKyfqBUaZTJUtoPGPfQX5QqP9UiLwRZV",
  "key6": "5rAysv6SVKkYP9h5Ha8o6bJW1MA14PCY5sLt52WBVKoKxhjzqCBtTJyyPN7vMqaBafDxs8n2nGtCV1VJqyphp5G8",
  "key7": "2bDCZHee9qYH7E19xuf3QvgR6pUxkm4857hrjdjjBYUfJrvbqirAfjrzmmVKA9PG9UohhWtcTcCNPTzwgy391yb",
  "key8": "3yNWZvArCzyFBQwXaR8GPzPoQpSb166Z6wsGpc2qZCW4eevDyMWTwnJPaJhuh9gapVcbierqcEtqCtTwX1MKmgu6",
  "key9": "46GAGc1V8HHjDZ8cCWggLS5iUMeeVZ8zBtYSCmbCfFK55kaLugNypzHpK1tHop9hdZJieNs31svE2DuzFaSNbVsi",
  "key10": "3AiB1SBGZdLuMwmMoadY4NtoXR8qQaJ3LoCdu5y433zNXx4v6eigosduqwPjnGty2WcdWfSoYZE4NLrUkAFDM6yt",
  "key11": "5fq3seLnKRQ8qCnubkA43EKDzpdJ9LmEb4SVBCwikM6CoqTE9NxUFR633TepWVwyreoPa1xrbLNTdZZAVRRHPZzs",
  "key12": "XiDfsS6om69Fb35gT4DbiCUm1FZWnhGdcgvoFFvmyMU29oHCCiQ1qPeQ597hEgY4ufm14Sug89bxUvYtAMmpChd",
  "key13": "5Qw45bnDTYba2LoswETKmkxNGiYnf5Wca2DUHK4mMEZgQVunLdE4CxLfzNo178DrfU7dayUiCpPx2Cg6V9jPqvSd",
  "key14": "4XUcxhe91b9JXxEQsevpgR8G6wiBWSN7EXTS2t7kFVyEJQ5aPHB8qFsYQK6eMuFpgaQ5nMdRsZiLXboHvs1ZpLvW",
  "key15": "TndPCqncC6T4PZzxbvR5YFw4ao5DgX17S6RoEWwSpPu1P3Sm18NA3kgp9RAsYj1Bi3GNVy2vNiG4KKFy1nbxdHB",
  "key16": "2uXcvcku7ZTKsRQv85myepXPufwhnKDy28y8fvt9E134BRHT7SxEZyaEvD3QivrU9HDvrKMhwJGP5rnYeZmJxZR7",
  "key17": "5EKp7vqJNyp8DSrhye6Ukx95eXJLb93KUcD3HBTKzqjw1Qd7dH5BmErYzHVffatrVaJdo3aVrhYpHASiSiq8o7Wu",
  "key18": "44cEXZcf9v5DEBbBhpCGe2NjuhifewxicgVGXyNNDuz89616V4mVvaASekoBw2uECro39b9hGr9sUWzzyGf9BTAT",
  "key19": "7v4vy6nQS9s84pYU4YsYZHDrYNbKRZ27xyM3Pi61zU5ye4ZQqFQGuuoYEn7p4wqaLRHAZX2ipYQJ1Qr1j3evftS",
  "key20": "2U4ntaPP6thW9ZYVaDBoWvqyK4Z6gEocH9uxKcf9feVBvwUz7uh9915NLC39pE8soJLc7M9ngP14xWoMDHtwJfsE",
  "key21": "5CzFwvbN2JKZCSQan4w1fVAJAPNJfc9CBnQygKxi8PxxokJXqEXhXGh6PXSuWZ8HmFDSY3W4hBW7q5c8S7rYkkNN",
  "key22": "377WDqPu9PMzSzvBEWB5dmgBXYeJaNuRE6f5rDPKqwzsooJYsZSPYq98ApJMoAJ4or1SRkcYaPVD9dxtfhjRMgJi",
  "key23": "3WAfcuNDSTzxWHgFYF7pLUAWunTNTiHAE44RqmPm5BqEfU7J8CiHS115Z7k1KNdQvXcG54GGqaPkKp67YZGtbKV1",
  "key24": "mGpLcd4zHbz4G3G2CovT6b33uaqbbYzPNKMA87zbLKS343o7YSsT1pANqJF9BBvQqoEoXiujyYrCpGdf2e2eXhq",
  "key25": "QamKzUHCq8iZnWtptrbMzExL7kBXE8dPyEoCwZNvhTAZkT6JU8ZUgUzTsfUkpz5M8JCBDdyKLhXX3ykWEVVNuVr",
  "key26": "4V5STgQyAbTN2qpyzU5jqWAWRzdRTACE3jJq8MTV5WuBgw2pYKxs9cqZs2dDdpbPFo2DoS21MDkc7XnD5kfWku2d",
  "key27": "qp9B61Tb7UuJ5bUBY4f3EtXE9J4Cy7HSwen61F1Qr64HoCT5mP1pGuthcASbH4sHJUz6118oYrVhtHkHbcvn5Gd",
  "key28": "41WfsBMju6cq3on39pNmYtUKejvbwrz6yKsem1wR4YwjezHBAsD8qvp6YkfNhWngervba1Zwa1dq65VwHi6cFaee",
  "key29": "z554H8mNaDHTWyTUcJZG1ZYa1wa5F16vhJfeQds55LUfboYBhqwqdsB2XfoEcb3xwL4KARzZNn4iMYQ3Qngdegp",
  "key30": "53SurDseaDdFZDxgtjUUfm9PGapB1MAv9KpM4maCrrEQpk7u4RXiUoDFfp8SzkapBnVkPbGyZnU4K5DdcdqGrVLs",
  "key31": "5j1owLhETXxZEkn99XKbasqKkxjD7ZrbU8od6AFLfyKFf946CHySCnBL9nE2a2UEoQ82ij4gnC4hg5LbfFs83HcM",
  "key32": "66d4NLrfgy33cAsgCGHLpXHwmmo2p4qbtYnmrp8Nx8fwGjUEm2cbnb8SVN9KfDCuvWmoLsb75eMxsYfDFcwzC2Ci",
  "key33": "5XofqSGB1USSWVk17CW44jumQLgbzz5vcJ4ksrBi5azAdizfqcgK8cjFdBGnYVRbaT5T2tRQVpSb2t361QNc3fHH",
  "key34": "5sSxXKoC6qrKWxn7DS9ZAhgwp1qGZGr2HEn38SUHPsTuveRJ6324s62RRephv4TUP1cMeS56LAiikNUzdnZcJcNF",
  "key35": "2eNo2fkoNAszjxjdPEHDcYsxAe8Jbnu39ZVJDWpPF6QPuRrgAif46dmuuRTaYygg9WXT3S1nVfdyDJ774F3qYY6W",
  "key36": "qjahz1qqQhAnWrEYVaYjEvLLtuVK98qwPD8WyZWA5EChCRzEhmpbW3begQCPBRuRw7wmdSsd8zJGmHNqWEadRrG"
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
