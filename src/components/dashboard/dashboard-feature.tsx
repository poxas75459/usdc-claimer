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
    "2RgkfH5HMzoUzBFqZEuQQz5kZTqTBRjqQaEp9aCib6oeGP15eouw2hgnX91SuLdVvztNBoNFakBkYcYL58pULt8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L1v1GXCgsQ9qh8G3sFUvNRQ36GqAgNgTx5fBDRWCsMPpQ3Dxrr15iAkpzFnvc5jkUxKLUY5PEdPrjTiJArQux59",
  "key1": "4vW27NFS4hDHTcHq95riimiCSy488PGzaqSfu9E4L6WmyvCmCEYKeiQE2GHGAWwMBdkPdPif4h7UWEbfu2z4JLfy",
  "key2": "3UUiDeuGPVgncxSnmhC6wJRXTVbSHQ4edDdmKbw1ePF7KHwzTTDR547gaHfA5iCoQ5ACPoKtdJwWjJXHcenMc94a",
  "key3": "3yT6nCwWM2A46P9ATuQtoSYDD5GL7Zen6Kg3osjsh2y9Et1XZQu7vbQLo1HwEnC7A89KavWm6KSC1rK1HZ5tHGhU",
  "key4": "5NbVvRrE4pm3A8AwuLqFwwLm6QywnovCbeEy6QGSxxKZugFQRPpELVu5WEpsHgDfHcReQDiyBok39yYv6uvks2vQ",
  "key5": "3SP7gGndpJ7F8iG5UrXx78WtwBTEn6xGCy6LURSqjEfXq3mvN7KAUF3PSpwAVm3Vj8s9wbs1PggN8AXocBxmHMd2",
  "key6": "32xffa24gG2bMKJGuGUShCaDr75bTsozXoHg2fS4Gnr8HFkYjspRo3jX6ZtfwK1ybVZciYYUykgSnTBNNrJUQaPP",
  "key7": "56a7h4Yee6S9JUSxpra4fKm9akbzA3NKx25QRyRxzYs5BJzEFzXCpD5eWgn4iDMAVhTs5rhmtYs7oVPX9sNXTbJc",
  "key8": "4mu7N8r2iRe8q8hGd9RMyfGVRJwHJNSDuSYCc5pRZZftWezb31wJAkT7b2iJzpFsH9HLb9iEyZmo464KT7NBcM2U",
  "key9": "1295hmhQttHVc4D4KkC3MtYaFoWvpyL3bGoBZi8FSKsmbrDM7defHfzXWGEVCfwbwCZSg2GcRDKgf3aV5gxSEJcW",
  "key10": "2Wy4cJiRP7BDPe2LAW7e6vmRAqfQx7b2Q5Q5uKx47ugodkukhveWVgJkNmw4C9MkfSvMQXe3shvV1mTFucXAetbk",
  "key11": "3DtYUcw2qSprWYPj4LiWPynUkN6CYkA8hRqMcF5TyHsnZrzvAM5Rx72GyPpJfjQtYdCi3Vyrey66MSTcMAMK4M3s",
  "key12": "3QcrVySVJ93BjVxSVF3nq57BmyCeTo7jxdn57gCFmUCZVRmMxo6RBJNKP9NRzPwadXnCEtZC3pPF4iFwudi1BsxV",
  "key13": "kNdwM37Jz5N72x6CDQxFpXiL9h5ByFjH2UwbRSu8hKVqLePqer8KUtDrFPUQkuSjeJB8Fgdh644TyF7Jz2qN2fA",
  "key14": "2HaijfMTGwCJKWKGJaYhWCpG6ZusW9nXREy3SzdoAVoqFXkuHNBgjEP39h9K4r6G7FzbHbBib6wabkXrVbANsRcQ",
  "key15": "TkEjscYPuTsAQmSLheFriCMfAibLmeLsdAstmc7khvPGuoudb6jXcezKZDo4bXw1gKbTWZaMWPrKGccvQhacFaw",
  "key16": "349e1NRyFWkiL7Bjtv3X9GBzxk2ujgMFHKCud5DWUBaRG75WtYEfMTaDBMaKCnmSPJZvYmkEDkRtmoLTogMqK52V",
  "key17": "jRhYMMHgHh21FhDPCyquqFamaTsxbZ7hwXFdkpMszCKSYTZAXXqjTCaofxa7fPHUNLRLBhYLL726un2qwszmayN",
  "key18": "4vEfSSHVpTvegZ1GLzz8wcfGEb84hSCPNYz1zpHEfxLLJpcWYFYa5MtdrJPVNmvjuHh2cds33KG2acsHFbwkfGSF",
  "key19": "362tfLvbjRwGCjiNYPZk69ghCALH5WRLr7nH6ULyfRKqehAzthxNzq6V8fVhzaKMudEwHASL68RGNPEAfzgacniG",
  "key20": "5k1oxF5ggMCbBjgRL38Xqg5qwfDdw5ycRDoKwxbk8mEpcxmrnKjGzgEL85Mgm2BCkYajAbqoMMQqxicJVfDcfBF4",
  "key21": "2b6XALbqvYPd4vqibbp1MsHCtsvuB6e7UoAN473pnbyyP2dGo8urHQzbNAAMGFwYc6r5yeJBhNwTLVsBp65hUJaE",
  "key22": "4AwcXLtLzE7Tv1e7TXHL5HYaJtZeFyhfuWizK3ZgPKzygrGWAHH8RxpxVsG2s7XA8BX52vVwNKuwbqNBkMTYCetd",
  "key23": "54kefChWMZ2VjsvuHvieTsBa8kERivUXxBc48sRYZV72FCZCuyCFq8SfonSEhob8h7JQeoqbDCxcohtr2U3BmQbt",
  "key24": "3me5j6dxR3Gx5XhkWVUabe3qRG3kTfH8RRGVvsHnDMUCK683apEm8JtZMs1n4zfHhyYZJHCbEdMoRU2gnQWSGA3",
  "key25": "28Xq6nmqCKnMJqm733ff8STDGfpx5tDq6aGPXqNFSsW4d8J3spQ3wXpadGoq7aNFKgM1JyWSX6v286FEyrMgwD7a",
  "key26": "3UfBKcWzncvNRrQxTwg74MaBbkDCtbBqu9qtggXgi9AZ87CQC7RdhTVFB82mJWUd86N15a7Ty2vfeEZix9SAsZtd",
  "key27": "4PxXbx8sMsxxXeMoxnwrjDDdqjCVeGXECwdN8HB6GBbT2K96Dp8e7wpkD6VhR7kKHZgr1GYDovWGaThE99qcA6N9",
  "key28": "dcDeyu3n6DP6P9yZYZWykR7MMLjztkDEyhUvL3AsQksecuPv6m1EpAf6QRoCaLtp8Tcfm5uv5DkmZH6D88uiYfn",
  "key29": "2Lrm3rHaJyJxPfyzWxyWGUintBuyNfDyVvGxVseu9R17qk5EBYtwziMDqV2pZKe7gzLaBTk2zJBVYUsjPjrsEQNT",
  "key30": "59sKTCn5SZ1yfQWM3Ssth7boxgeBQuAEKM7v8uwMvmNHAoY8upQ2cdKQP9g2NycA59hzXdj9PiFVadUqNpgTnwoL",
  "key31": "2JccHbKr6vLa7x9ByYkmmvZhwu2dbYubDyw8QBftzotWrGCyg8LZbH3Su6LfJ1uKYNJGePsVdfjxLMwbosLn1uvB",
  "key32": "4xx9QUYNdpfdbKXdF7LgVwvTNQpBJPnN9kodmkFLJoULP9LwQ8wD6GdDtevSz8RmJ7nFuw3rkKC42Mu6kQnco7rR",
  "key33": "5Ln88pjhZH2MWLDj4LwFT2toUbtp7FfnRxUCjcAbmVqqetTCsLp6aBuevZXGq8UiKT1gVvb9ziCKLnsBBMT1HESB",
  "key34": "5mjDDC4M4sSAQPQtSiwt61KRu2dPF8NvSUCi1DirNbhTRHHFJmechr58M79ZvwvsmPh2C8ehRpYiNuSE4U7qu6Ao",
  "key35": "2Xvjffc62LeJv43oQHF7dg3mvY4xWBDvq5TQE6Wyww5LHUfnoqJHT7SmhqQEMeoPvFxp6MyqSdxdhrskkzDtD88h"
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
