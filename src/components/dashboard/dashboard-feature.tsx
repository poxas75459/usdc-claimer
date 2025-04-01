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
    "2Y7guGmjeweFYLk6ruv3RzrfdekQTsBB81eyFyMxjm7ZmGRv517vhdpaWcTjeHNdgpmQu6TCdAD5ydmoRQtQzegr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNPQhpucSYSHPS4C4vq5piaZMpPS9ynJVCCwGr6cbpms7CQxG19MKmi7GQ5Tz6EDZPhbfB5JUNCNaJqDVqwkgF8",
  "key1": "ruENdBcmtzVtT6BTvAAxmhgiLjY1mm57mvEbiPYGMjwbp1n3iX6aPSkRKGh1PCEqSacQec5uKVWsPEwrJH5uAtf",
  "key2": "7j3AXwwH7fYrQisiLHBmR4s6PYny5G84SoG5CDsDNKWvgVTQso9v1GackubcTrQjS8J7TtSdzuvJ2hYbqm1MuCU",
  "key3": "uqJ1pXsS8NWUW97hsUNnmhqXuoJm5fDo8xUjUddc9wHHZi2kBowMMoVmoP7nJDDeqY5TpNuKtnroiLF67gDsbCu",
  "key4": "2ZiatZe1D3ScpEdzKZBoM3Bqvqx5iJ7G5Gkt7Lfb848kqjSXGuHWMtD15S4rXJJiJTkXsj5HeUZnQjoYswqqZ1y7",
  "key5": "onvJ9zBivsuGccxxKbNyiv2fH7fC9BigMBuxFWFSF8T3PpE7aFVrhxQBsd2zKE4m39uf5T6j85aFEDMNHqogHzr",
  "key6": "4AP9BgRxyuiys7jjYxXCLro6NyWmSBvzJf8GNSYvRRmEyXmYzQgVzfbaFcLNkhNBpVGrBqDDZTXz2qa5nPjhtbnq",
  "key7": "3T6DwVsgxZmKg2yjUWbFcUDMn2uB3pSzCPSXxJjpoUfQ5idHBMShoYP18euEn7wQ3w79tsgd3izAn6tmcYkNV44F",
  "key8": "2hDA6uPPFZKDHuZR72ve4vZNMeCSJbsDjBao9eWq3DFcxD8sHzAuMAXSdnX3vnfHsF9dQAgTQTr2PjcuKhXN8VpL",
  "key9": "2HUg6qfRbbA1FySH5LVEVYCVV1QtyztTtj5A8bS6QkbBsTc8mhqjC3MzJVDAaqDXWf9QaP5khew5mYDcqQP4Bv4",
  "key10": "2fvQbeMfWLpgWwF8BemNP774vx8B3i6LTyb3YWo6Mm5pXvu6Lxem55XXYyZSVvMHgoaoExpayZNX3Q9eTMYSoiRr",
  "key11": "5Md8jbGLx5oWjgnjYY3cnYE1JUnEiFR1Tr9Ps8BYxtVffz17pWG82y838SkzQjoKaJJnyz8VPRvVUKbc2cN8Rp9R",
  "key12": "oDZh4MF6L8mVuvRuR73P13oYJPeZKnQRGdpeMBMYoHJRN9hruFdAAYH3jSouYQtXxP59r9aMfE3mLZiAro6TT7T",
  "key13": "Ka5S9aqGaWjkvcrUsqaGGVACAbvEHFyJQnafGEVkPnQaHAFapEZ4FqV7U4S2qbjJBBj1hV7qsxoXuyWfpcmo1QX",
  "key14": "4SWj5g3hTKGE4WgNPRrB3RbLtPkqBiXaP8UFXsK31vUhnW981EhnDW3qVEV87abBgbqpyF17cAQiKyiGdmbmduos",
  "key15": "25kLFCEHSKZrvDAYnr7LMipUXHCfyXQNz5tePNji2aiLQohDCq15XjgtnJirrKwp924anZaD21heqtSydmgLYbNt",
  "key16": "4AaHWnHmtxP8NjdBRnn3HxpWejRwoqpesaMfH2WCaGhjixX9TQfi9oKgFVXKkEMbBk3xmC6XTaA8cGpDESGgAY67",
  "key17": "5hf8bboc4dAPLDGoTHahsbbttBaC4YUxbZDU7LLsFyqmyS8Sj46yvxpH2EYeiDc1dD1k9bwFZGuNLy2ER5PsDdf2",
  "key18": "3KG5EDk1iUJc3XtPvnLoug6gaoqE2cDe7BdAUufBhy1QfnYicjjiQcgYagqm7KYdLCnidVxhPkE69V18AbiewU1E",
  "key19": "2z9dur55yJ7G6YKZTmMhUvNR37A2uunhNN5SnrNxzZUbBpczouiY8cH3towVikWUKZXAeVpwgzjza87U5RBH4iEQ",
  "key20": "4hgxb53LhJ3VeUdES2XM7fjJkjpPFdkumDnCusrxVDbYe77guvdxzuhVSdmpTD3rNjCTvX73m97gG4yzkcqudD53",
  "key21": "5oLAFr2DtczAKjc5WCh3bFVWUDrxrxbNp3wNN5reYGzi6DRrTBAgfC3MgviHafTFbgjGRgW7T4xWs3s5Cz9YCnDP",
  "key22": "2NNLcCrChiCp7NxsDR1XYmVkTXVhNSSVsSV9nTEhwntcqCdVsKa4FD2p9uho1ZM4czD8TjdRgmyUNEsdXWSrauvg",
  "key23": "5hhaMpUfMnqkfbRUHDyxZp2Kp9gkpvvqpVPushnVbdo4ympRCaxASDy5AMypa8hqiHntCxtMgJEYR7hpEtNowT7o",
  "key24": "eVWLjdWursAmrr2E5dFU6Rjpgz7cm7VaJR5fPjZLs4GtB5D2jFCyhdMdZpezCnBnwxZiugdD2aaptvqoqQ5nMAY",
  "key25": "31fgKQAHmbMD9ujMcYbn1CgzLu34dxQor3r8HJTEvVQwiAVtiwGLVi3THNpSmMqkTztzvsQKfC8ZehPDd6kgDnwz",
  "key26": "4DrshMS3wN6LSwofWMLPhZKAH7utdiduzXfZ97AHJ8StRAWk3cDeY6MqzfCxqgnG1aSoL3ELKQq8Yuv1nynzgubw",
  "key27": "3JWJMVfqiGYR8VDZ1mSXXr1W55ELYKqmjiMXdbMSyVaCPyRuirfX9Yd5DxujDTwc8Z6w3ZCmmM6hRBcVvrNd4a2a",
  "key28": "3Qrgq2FPvo8fQ4QpPabTHvVuEf3cunqBiRuq4ffpnTR2HwyoHhUEt4H6a8ofqjNL24hQuGmEZxmLhjwJgc4bYC6r",
  "key29": "4wha4HTKyjkFmSrUU7anjhJCRwQesfnGicMwpQFSDuaXLFgUc5ux4PaBmwdZSNnLyZzEno4amq8XgYVeNFJcsd6D",
  "key30": "58vnNfuWzuqxRqtjgPbigxNWcBP2v3MBvKJRj954C5nnFmzuhGnxV61H4Fap2PG4HGhq6ffL8JxtcrqyC5ygo6TW",
  "key31": "tPpM7Kg88X2cFApKzuvn13cZ2eopmywvzur7xMq6H9AgFbZc1rK2dMnE1vAJ4X2iJgYqAAuPX4nEZKSjvWtWrmV",
  "key32": "55FP9s4wHgaXBg2dxssoRoVP7EpdT61W8faBiJyToXqQ7ihgunccpKXgKinzx1ZpVM5YAB21qbWuuvMsesEKhgJa"
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
