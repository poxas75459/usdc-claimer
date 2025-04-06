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
    "34ydbeCsA6HDP2bL9v1RbesTztkLBUfRrFxJV9SULxeREQxx3e7GCPesyxTMhkreSDt7pRBvEC66NcNVz7JA3mr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSRQ3ehFtBWyLNc4QjZPeqhJoLwRkrhA7yNWn3GtqLoARm9LWWLFBwTCinfNEyntckFi38zbHhBXKQnb4qHZZ6X",
  "key1": "2sFmXnCMRxZevaLSULSyv1RJ5zBvfXkSD7HCLgTGdG2azHoFkThRUaJEUqeUp9P3yQDa7ZS7ivdzCSqX737fGKSM",
  "key2": "ELvLfFCRZ2DBuV7iwh2X5aA3kKUUKHddGhfTH597eN3vnNuQksx9CREvHCN5aHQYL24sLXXkq1DsniDrKNf8VUz",
  "key3": "3bfU6bpKJbmpBohe6Li3KbX3TgFFDrgz9aasW49rjSmBVaMfuXg1rGaDvWaDPvRmbP1aRtmcjYpYza9a5EcQDbzt",
  "key4": "EKbvQeyTbnSCkdGHKHY86VTtrB6Anpk9kJMC49NwWHhKuYi6QHHa4eYfUDSyoEzNpPDj88RXWDEuRemGZ6k45dK",
  "key5": "5LAzcmxX9dvDX1pFjb1fPRUVzy6vyECXo9ioazptvYuEeQRHmtpwHpCwajdUVzpfmN639RwZhbs4MtwHFyG9PM7i",
  "key6": "3xtsbSHHH4HBPFKqNfoBDDMhGCfR82acAcRAgfQPvNY9yPs4BQij5mD7sVW7z3KXaHiuQbwAZsfQUFnRLLT9DZ5E",
  "key7": "2LxqeBEuYPhxzD6wC2VgXVTDZTzCusgG8tbWu52Pi9AUm8ijRkZHubdLnBsNe1tvzonuAuwo2d5JJnk7Loh9uW62",
  "key8": "gvK5j8ZoC7GQC2hET8HNr9t1UKSUV7j1pHHHc3SU9aWsrazmvhh1tWPUbt8QsyK1iUBMbj4FacJ6ro3bDZ2M9Vo",
  "key9": "2P9PPQ7hNydFLzPJBRXyoqP9xKeReNcsuyPLcRo8cX49MgiXfgZsKKyfFFk8w5AaNUtXT5Y2YPGPdYfYfwzNaggT",
  "key10": "USnigYRV2Me6DcUM4U5pypQBQ6NbP2FMdx2BR84pLAcVC1xUgzxemgPH48z3RvcWW26k6bg7jjVvouK3UivwiBQ",
  "key11": "66vnDD84QXVN8UN8HyRS3hkm56dWqWHG6hZWMNku66TTsCHDcvzYiocMuXzTcD9of4jwfzF5HPgxFWXT4ABT7sNi",
  "key12": "5hLeSV2GLdfufdRLpojG6rP8RMTnAQ4tvPG25h5rKqJDa7YNNNG5ugVVrpFjjwPThk4aiACGJSRxYRm8JUtRH99y",
  "key13": "356hXvpgyLjr2tD3sJ9T2XhP9v1i35FM8TNqQteRT5BTdJAvUtYvMHSfCV2L7JigTB4toyeYUQgFk4CA3cDRWAAP",
  "key14": "26KwszoudyL44JGopcm1HCegXrQGjER53o5LTvBFVYgaBKUusH9P1fb9ysCHbN1FsMhJCE6VdEU3QK6vD2E2NNso",
  "key15": "p4Y4w8Q7Bedi6AkGMATN2wWxJnLUhirzqBUd3gS8WEpqcPDpmGNpxgbE1wv4YcPacbXVpTsn6obrrhtQRrxZeog",
  "key16": "61rT2FcB6EvDkd5q2F3te97myfq3X8T59gHe67bi6tpRj82MdkaQQb5sF46V82pyWR9Ed8SVswfsfhTQyxJuZ4sZ",
  "key17": "2NZdmbFs87Hdt1PUWma6cWrhSZAHVJ2bgZfTZwLACN5gHPiY7pgML2LQE6hud1zWhRoY8odna4TfVdFSiYUCi4GK",
  "key18": "2sJYd72ey6ZfS7dY2A54GvdjN8cV532NZoNy5mZLCebm9Zej74SQGCptAxk7HZT2dKpaUtwtb4FWpzEPNdFECvwT",
  "key19": "2Wv3KdFKNb31nmxvtgt9Zw9d1ZBodmCj189bkDRXcDsU1Duxg1Zmh6qFpC6kPGHBJZvQXY9jrg9V5urEmUVJTqoK",
  "key20": "BTFNL46ynv3D1PaAAJfuchPz22WnBfX6rwZwUiXyoRfgnKmV1aLxfbv1drg4zpoUKuED9qHsftEr1KT6cj33z6G",
  "key21": "5Ym7CuHSayagnvaVtVYqg7hfgxn2VFDdUcapuvktFgbsZyNqchYEvvgKH1Gfhji9Vnt3Rq7bi7sgDhjSttPeX51j",
  "key22": "4opjdnAaUutQSeqnwvYzhRssnj9oTRSrseBodvh9fVCLndk8vWZgwrzc2e59Tgjf7JtdRtwrYKdSYy4277Jxr45",
  "key23": "4aa5YTMVFZDcVeXPmzdZ2SbME2dnkx1vUH6Q8BckmmAstxhEqfVTuUdHpjHMyNst8umZvUFjvbxwFzL5AChSj43N",
  "key24": "31jTmNeDWSUux9eHQ78n5ayG8TdXz6BUYcD948QfJ6F2DqToAeCqWVCxTTtAMF8dbD11kJWVBRvosNhRgCLmGZaS",
  "key25": "2HiELnbunWzJDpBNHwqjLJSoxE2cJWmsJd5dhTFf98cYgHuoNuoLnPRBo2nFYYy7Fm2sHdizzP3ELLV4fG7PeCRh",
  "key26": "8m4XYSW1e8xcPrsS1u75frKcpU5krKeCzcKBKdkHuJk3WeD5zka1uCEH6KLyeaWAJMtR2eV4m46nDAvFDZgxBFZ",
  "key27": "xAA5fSxWXmQVhZtVNGmU1phsjw8aLLrztHtuKgjqRMcm9dxtCgfsDBUXpQHSuXxHtSS2YiAKf5VCEhmT4NMz2H3",
  "key28": "5Tf96e1wsh69dcVT7UGhoNJuBUpaKe2MSNeCiGa3DWz7uhevKi15XxCohcN7DEAAy2QoZd4qgacZQoAuWEJ5TXn8",
  "key29": "4cLWcaZBuKnDwS7iKYxA4j7d9fniGF7UUr8RRmpZjD99B97jco2gdshEuesJH1wL3vdZvLVP9b5XRCUTp7Shjado"
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
