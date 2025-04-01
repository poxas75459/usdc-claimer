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
    "2Fv65BWiL5FzPaJnMzHYChiyEeEBvTpHnGgXUhPRxKuQwW3n6jVBVZTUVCKev8pUQkrp9L5sqvzkfAdt23Kxr6cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZztKtWmxuqUrjaofjcXEiEPuU7phQpqFGVVvhcoHY79GoG93KA3Pup9sY4BiTA9Hj9Lq4P4QWx3yi9L9uZpDkV",
  "key1": "4XEPzLzmbT8MHyMD9KhV9R7JvJBDHiEESK6eLteTLWAsG3rUEDYSwiBUDqak3TkkSHF9HchJ7uirnasniXonG52N",
  "key2": "5xKiuWjvZgVWmZVu7P5so74ZviNnckPjoYSfcWUnVV28uT9z87GWVPFBrxkdNwHseYfA4zUBLSseGBEsRq8yuYvL",
  "key3": "MjNk3mTCMpZ4TdYezqSkbqQEgAFM3y3BM19fSYLwqXP7fXvxnJPmdTEgFNJynWVJaZtEuScGQERg1kgaBxAndvC",
  "key4": "2siyEa3M8Bt8DywG4udqrwYvP2cRusPffU8kkfwfTJJyDATaKV6Z575JmNU6GVCGX48ce443fYu1QcuHCxfAe6A",
  "key5": "4n1wgW27psXaEgoxdFpa629yMhf29Q1QWJVMhTkdTgKy75wcVCxDe2We9AEbf3kU9KPeZon1971VgyV55CqZojMc",
  "key6": "2FTuaLLE2BoXxjxyrU5sfiaiBErY2AsJDfFNf2mL4AGNtjgpQPk3YREjtkP3xoW2q5YxTxhbz3Rgp514FwmcAHYZ",
  "key7": "3SmiTDdy8ssq9httGT2cTC4yWT933notJSX27MsSMv7EiQ4nMVBZmuuPZTcmS8jXGXxKFwBgpd4XakXeHK3RE7Kx",
  "key8": "4posC2F216zJpKCgcZv1ztNgb85Q9LcziJqNeQKAMMtytwFAWCSyZyUGXwxR1nPDeSLLhba93YhBNX63DWc3td6S",
  "key9": "Ccb55M3LmWruTZixJWVQNxqjV3o7rH2QPU8spkVzpVLABVvuqRnzXxBF22bi2fosb1qPs8nm3cubcP1j8x1t9NT",
  "key10": "4zUAnBcLwSVjw9fXZC5K4torMAedpvr5WKEWTuD6Z9mtYx2oWApz1LJmqFXhm2xZYHVySPYKui68HbMdzTYD8wvs",
  "key11": "3TWaTnZje2rLFEaTVbiyWEFhxCNWxpeLTQtLpYCDeS4FNxNf78HBX7XwHdsk2jPAdd3yaoiZk5wMaJRw9zW4ErjJ",
  "key12": "44YdB1LJ3wzGgfq2dmLMCQzqw7uJnR5zkeSpf4aAT6WSSmkzojpYFBrAnAAASwADLETXeEKZUTFAkcMr1e81Rzx7",
  "key13": "33bviWZPXCpC4668jUtTFtFbrwLXwMsHsxs1N8McvrcNA9oo7p3hZNtjSfz4dbdyJbAgyJZYSSf4A9iuBgbEhcJr",
  "key14": "4WjeuvgAe885pqmNqUedgWhNC7YUSxQkTqC34GBCR3TYxkr4WdzavuLWrSgtQyw6Dy1E1PBdiAJ9gsQr2Hhz7QgH",
  "key15": "5qvXsd3GR43zt4qwLfYBgPRmN2co7PA1b5bFZpk9iRQCLjfZPYT2DamUSKNVwDCEbXMqAm8QP5MG65iGQA1L9ecV",
  "key16": "yrnnXYaG9VPKoFoZL4TAbyRyoR9cU5uxVB2PNwrLUHHU2QFeiSaNDAGE6QiUj6RUajtvBr12AQ8eJMxGk2RDeUV",
  "key17": "5DpSXYaCoTJvAjgKqLXgyRhBVH1qnvFEmALKDXMqN4jh9e6mCa4tZWFp7xWjQmBa946GQ9vqkB4Vu5pQKzefndiT",
  "key18": "c7LiC7q8jMVEDxQvywNo9kNQhpUUJFY1nnDMQandLU7iHNuKcaXUpBaM6yAMocLy9TRJkDnmZSfeJdP4ynotai9",
  "key19": "5BD7ULiBd2gsyL2noNXzfZa2SMDTxFbU5hcWKmxvL7npvbMSU8b4qADTX5mvQXFisAsSZLF5qccFctmN3CtEBPg3",
  "key20": "3c7uX9w2yperGvpUwJTBnnmzEf3pUrKb7fcx1zRUzcTvuUh3o8muXNXiugrwDH1r54iRDrqAJbdoemHjDvzHP1Ng",
  "key21": "5Jjk9xF7xP6gTci57woP6ZGhWib3K7e9pJKy9QWPcKkBk9a1CzaDHzYf6yu1Pn9NQpu44YT1KyCnHyD5859oYzT3",
  "key22": "4g46beZN9DGQdLBJKjcmvuW6pAqcD5wVD3CZULjoCKWF793QHiVC7EqXTnAoAMuW3GrjpVHXt8BVHsuE9tSVqakt",
  "key23": "2mctSrTLEDkw6uURqqPFVFmtTMAwm6x71fMZWMxhBZHb5XpZafFENTNFKSnufMdpMsvwJnVLoRnBtRWfoJWs2t85",
  "key24": "5J3Kob6iA6gkQFDcwsE196n2yNN6FYtEZSF8SfNVC6ykJZVNMAEwxcLEwWoRziGXVwnczT8ziGkKeHGExvUZNbK5",
  "key25": "4CZSHcLMiTnkxEqHBpNKc49Jf9TT2y6TGqJhDBMmQvmDyEs5xbTYR3NfBjktV2eAmPFu3KP63parwx6JivhefftY",
  "key26": "33udAz7eiT2FtmW3nB5knrnyoSsmxTZkeLZwdfZdRzPykPz8eF1KcsaaXQ9ijq2BMX93Z6eRqf2EFYC6Uq7HeUtt",
  "key27": "5i2QSKYyAEsuRTXv8gJWNWLm9D6NHzYSXexwAgk6fmmYCDhxUtBULva11XugkeEWCzHcDyZVQsYkVvK2fcvqbKJ",
  "key28": "3wWYqVauhemMRAi5DTd9kimiCqCYgB6jru4zCT98RJY2F36fNmzGsmTBxY4iw7dpCSQCh9PNZGQaRciphjeuZCdH",
  "key29": "5WAHHzKtAT6eWoNbY562KkHujZ2pUR4XEwM5a2zXwwiFxz6c9NajCNPnQYmqjpi3NeSBPDhSc1ue9AUTe4y8gqmT",
  "key30": "2KLJTKR1Q8sAF2SnYUSngGmqQtX2Wjo7ytTdiQh7RqqjnAiWgc7N38mMe5aMo5cqATi82nnAzkW8uunerTvp64y",
  "key31": "21Ykg3dVSjPjSdJrwf9Shy5ANwHydJarxCqieo4MWw6mayeqxNkgybL7sveWXT9v4abs8ZsynC5vPTaK4GWL5ZYT",
  "key32": "B5D2XQNxTPkQxVibG8QixZPnwmyUhM4c8nGRrhdXu8vbT9msJRSZSoB49RsKFYujFEMK4yiRh7HVtBT91Z8vDFM",
  "key33": "52jby88vEK9u7uJVuQux29zWbv4CfNCe1yoEGQFaH8xHWf5QcFDkfpXfp3ZbEDGHLFWtpmV8cABkQnDEjnS7McHm",
  "key34": "29dKnw6RfWmJ5CEHBhohAh5USXoUeobwJ6oEqjCvjguUZKshJBJw9tFysUMmBnP184SKeaqoBeXGsADfxpPsdZQd",
  "key35": "644NCpV3nfpyxPpZwAduQEn2YADbZfAZ9UMJiwWGkUFM3EnCQSpbqffJ8ebujCX7dNKFjeXBg68f835JouGCDnaw"
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
