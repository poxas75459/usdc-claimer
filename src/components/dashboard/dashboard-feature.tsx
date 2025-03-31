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
    "EtGMzggGraRqyvy8WaXAT3pGKSRRhpS2pSDhS4mFhTVUFTbe3Q3THHzrKVJpd3Jnp2nGZZwBc9mrErgipetwDgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUxYCFSx7PFAJNgrwwy7fEgpS89MmZfozaf83qfeJS4hqGBn5f87JeTUV1hPwGDjT2UZQXY7npzCmt55XVUtr92",
  "key1": "BDqffJn5uKvcSgfvnrGirnZvhrf4ryUhNWqyTkyqKS2GgYE8FQGkP3kc7nb4Fs85iM4CtwhvPGs84GSFhhJKFTs",
  "key2": "jjTUi6xW5MVP3Vn1XHJZzm8swkSV4c6is7n3u8z7bBgE7bpmhXipPJr7Sai3MJXgsAMqQujUnhqUCDHQ5CLjvQb",
  "key3": "38Wba3oeroyM6xpMjtjevpsKq7hmeuyjfgC6Ab8dpN1DbjdoMiC5TXdAZsGF63VNqANXgLhw2d1RhmidGBGDFLNm",
  "key4": "2sDrvUSZuotUXATwQ5WpY78RWuTdxsjMfmDCEgjGHw5fJN9zKGCVraVdPSPPUow1v6RU6Wj2HKF74UHwRUVfBZZ2",
  "key5": "LRFfXsVjv5PoSxeZdHL4jpAnLAeyEMXshEceEzvKZKTV2iuiMczSwagxnrxLoY6BSDhaVLH6eWTBmD7saj4Pj36",
  "key6": "35zJ1XnczGgaaJm6rLYfU5X7chtws8HpdPchP2w5JvUEoR2qHygGnHDCuUb3ewHCEPmTHoA8ihEb57bMaZEWGK7Z",
  "key7": "2LRjPY5AAJJGH6e2Md5dHABBHpLnfbzByBcbn7nBRQUHCZUnYCcnojnd7Pfkp517zfjXrFDCVJBCkC1B42ZYfLFn",
  "key8": "4FfwJgXsHWPr9bTRuyegnKHp8Y8P11W1LaPz3giavjNC4cP9yFFdNqameE8W3xafaNVQLBzggPxDMbdRzKodoiyz",
  "key9": "EnV94hmyMXsdjE8rQTk5ysKH4SEGzHXSmG6DQXrJycbSf8Kn7oBveiET6qLYBcevCJyXnj5yjBzm3tCiohV6BpF",
  "key10": "h2LApbznfPiXqoEP9yxYDziutYEUfidYz2uCcUMYWAsgkQ3qqCq9kpmYqxxapbpiXWrxCmoFRLCDjFydA4shGbB",
  "key11": "3JF47kc57Dw74wwe494wqcGzLrCR9ZgPy7yVZQ5eNgCZT2MV8YH3Z9yJkorj8HFs4JPf8WWBfQBbzRGojFzWgL8E",
  "key12": "3DE6kZG23f1rsxBkJY36Q4SbPxjR1Jz2xkn2AZsnEpE9HPmgDEPRfh6dSLfVAvNYfpuc49HsQbv9LE8iFenXKbHA",
  "key13": "5U51ivqfVf247t7riUV7e8YDtbauhH4AAbbe8hPzm8fsjHZ7rJQhbtBsjsSLSiPkmApvUU4jQd2wqP8CwsyD4q7e",
  "key14": "XntadVGWnJZqScq54r1Y2PD3Xy7yjswPMMqLSNUXkwRP36H2W9qhid1JwhyLkPAAYe7apZkyZcgZsKZvAhPATET",
  "key15": "3AFQQaFwJP5afLkXYBCANiLXzHMEKtKSsFpiLksvxjm4oNcaSmBF1CATr16X3RfVcRUPmcpvWebuN9LPbn2afaRV",
  "key16": "3736eZN3x57X2ZSUSfdZbsSGgf2uqP1YFM7MgDDc8WceQb9Dn2XaokvQbktYsh1H2TjkihqWELifjGiJ4XSrcGru",
  "key17": "3PB1ZsTLDmo1QJqEQ8t5FKuQSpdTn6nBfTBh2t6wnk62LbyEV6rDgV6UTQ7VLtgxThdqBSXYoUUxt55a7v2M2yMA",
  "key18": "3h1DbjLMGETaxsdg6YoRrbnEPujeWoUNGCJwFRn5dpaYAQx6GKxVXaqMM7Hka87H3jbebRtBNhPH9Y5FnKkB2gdH",
  "key19": "2juuPwbUGFu5mGTBcimAp2yVTiU2t2nJ8oQ5upe3MNxpgJfS4gHCThyrucLAEEjzm6HPHjT8HDstxN43e8AEi72d",
  "key20": "25AnA7yqLn8N8jpjg19bJkapWcgsUmHcL63AbHyEXguiwdpnt3qrDGoaMajzMZVpu5UPUmbMk85ehPNJiDyubfDa",
  "key21": "4sp1AxvQ7x8QS94CxHyyPahjawbSHN6HqEJvhrwUk3ohUVUcYaXVJ1UP3AaDni19FCpfvTECFvghtbrzuPfGjoTF",
  "key22": "3jX8L3PxgAziGjAqMcBTimKXcX3joigaUVzmh2mwwGNyouMvLUGn5rtQD4U9ud3G3oJRgs4KVenaLkUZfz4oHSBq",
  "key23": "vL9U2JutfDYLYyfGYWoo8D1aDxcckxLMcVzyQGGAjkoE9yuCG1DPq3LUdhDUXhb9iyM7HU8Qq1tS8NjnpcV4b9F",
  "key24": "TVVvNDAhuGuPrTizg3MYRZYwqgv5uPaTjaXq3AaXZ9JDgUaQyhVWf34mnq3FKx5tNxNbUYgZqfd6KgPjuNCwAs1",
  "key25": "3cmNMuwsaD81zFS5nhJz9DptwuGrEHDondWPMpgSycSNXS1ZHc4Cy9cPYoGWcavDbVK8VDAUwyDodENBaTSYRGPn",
  "key26": "3UxzQuTVk9oXborRvKSLfApCeV6Q1V5kqaHTirCrjGjNEmiFCvx5q4ntavxjbFWHYXu49q5mcxX3x6uNQTf3dTCY",
  "key27": "51q6mtxaCit6Bm1M84emBQgWpTWPk8f3GahT2cbyRSRAPSYs8sgeB4TcPMwrJDLp2VuVNPHYbYoctWDJWE8Nfxc7",
  "key28": "4zdEDqx9wqExFvGTMduQxjfHr5n1t3ov69KcuheoJg3f5SoypGqm6Hv8FV6KQqKSMXFqCfjjkcrox9oBAa9MxYBp",
  "key29": "2L3ZKzpTkmPCEEu923QBNuJFpap86jJzdU7UCemzKBzS3wAq65SmXG1JmTvPdm9w2BSTqjzDGSLMUGFhNSjPRzha",
  "key30": "2t8obEaeP2ZXQ1PMdQC4sieLNDcZHwQ711YLdNY75PYmjEjuSHYWktPBnWbGfkXAq4seEtyaGFz1H1xLSvvGudEd",
  "key31": "2VgW6nPVqE8oJztT1cbk5SdGKox8TycwrvZcYt6sm6KP6Q9GUcHZo1vSNzhSEcoii5tDmcfah8bF8je9Bd6usPgK",
  "key32": "48Q6XdwZpbGL8QSJRtXtMinmZW31YAVrgmNspPW14vMq4nYjW5FfTtQFpUxGkaGzy6UEZgqh429ve4knwe1ian27",
  "key33": "5Mn4MxUGCngw4ftEkLNBnQ6myzWpRZh4ptrxGBt8Z4qvKGhtwn3zD5VwBST399oYrg7GSD2p9uBDBgyW2ZnWHvYR",
  "key34": "SgRfYeJKCAGEg8BbAUrsNBXQGVFP2zYtsouEWtTRTgtzu1cWzPzvDJ9c7QTvzR2ThAenxW2oUWqFjoy9MDSzo1P",
  "key35": "5hiAhaxc1YCj5rMq4icq9MVmyZM8Z8MMFPnnu7KrztWm1oR1gYpv9nX5ggNpracyMVsoQY1d4sKYtLHZTsMS5cUJ",
  "key36": "Sc8XDV118NwVdLoUvSXKeFPRf1us6GZHJjnEVVq5goAgkxYwghvutqEJPdaDXDvoVE8C5SU5V4UF2HLLwp7PJ1v",
  "key37": "344nSnVr4qU2pVndNewZZmWxSakeEuiWLPdURX8y7n99os7QSYU38XnnKWMX3114V7cwnVRs5icajAZyMWgHDDHx",
  "key38": "3UvHJEGco69mT1Mk6oo9GRCW9NuPwrh43R3mCTYqkpFqPN2q2yp8CeMfsksa57tpLwf2EzoYNmEB9VzXgHWiXX99"
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
