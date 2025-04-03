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
    "Bcteo4rHkz7461nvxpLdm3UJvF83pMvgvFdK2EoW4hrTLvdZ6UfL3XoZStGSJbnvuAswMroC7y2g5Jnk858kEN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fWDKz8HgFMSSAhmbCpMmbTt2unJLnmjNP532AiLfqbcLYtJ9b38VDHGwHfzEWo7Zer6EYNMdqNxVp7rDV7ZEHpA",
  "key1": "6gw9B73Gmg9dCd1ZuKXoC8NFgLZF6pHmqmwmm5p1FB7d7UXE7cQsMedpnofdDj4ZtZCiA2arvX5qqgPfrx2adLS",
  "key2": "XGhvKKMv1MajbB56dXEfFEytHUH4yDj5EeetH6M6oHaKm8ccNaainECchgD73kGQ6ZVFoxrruVKBWv9k75Nu7UW",
  "key3": "TqQbyq1eYozDYxmmRmAiVEWKLEE74qkn6AE8CwYXLzqBV4cot75y74LqDKK2XmUPhg6KRkr6inZANV9bmVU2CLr",
  "key4": "4NzGArJyC4xaCxWnP1aqarinx5aNHd9hWjwxkVNoonLxkJSfKJAPQmSMKdSccEyLxi8TZjn8e8gdsDbNHccSh4sq",
  "key5": "t2xgiC8cyudYo6uuxu5LJ86kHRTt9pwPj8QDrLk8MnXhaJkQtdg98X6GjMd8vqusNLWtrMxfLrLy7F5nUvTy8nx",
  "key6": "4bDujAHLsXUp8BUBPNQ4gHRMxfVvBw8ZhLfeefCh5h7R5ar1fxNZ8FLJ2GuWiS3uWeR8b2kCHLBCbh3K6QF63DYQ",
  "key7": "4iLe99r387JMo1Y3ZViXHMmVWm7MT1g43X83C2WubXRDGefsTiXCTtMRtp2vwDZFYL2Vw7F43WKdNvskUDb994uf",
  "key8": "5ZZEWdZ9BaNz28nJBYTYC3mn6gBNAU1h6Dw6j3M6etLWtZ1BQn2hLhwBdqVkiG2TSctMny7ir6MiPxo45MjMNbBB",
  "key9": "2RebJBwsduGrpxgKuTZzPCFwW1mH8DuqkrLSxinpUXRce9Dq1mUCZhyBtDE7GhnGUJ3S7hjD3X3PMeMBWzQPZe4E",
  "key10": "4VX8KgQr4PbEq2tTnnNwq2y6LQYbs3k2pkMHfbbvHtVJ39CEfbrcbz3yfG1VadijwPLkzqQ5d47PVq3wpTrXFuTx",
  "key11": "5wLF7YAeRa1BSKLKcEVkgTBQ8AjaCd5nenNkzfReTVsZZUyEv7GgghP1W8egPcKXpDp3xaUMypWd1fiLpxSpTeSc",
  "key12": "4MUUQzacHR3GbJAo54kEUG3fmijSSMnJwUgfD2HDotKCAgmVi8aT19wrYWreTidpFsBkbwmLNbb9fNdrmoYAwrWf",
  "key13": "3pA25UYKHPyD2S7dcY2hYwucrXsmfsMvg55BhirT1aEP9JVgEEwuu9gnCUNW5o1FrG9Zaex88chiSpanCTVgjEVF",
  "key14": "46ticz3qFncTBkd9GSB8F9bcsPRgpmHdZhWj1zY2ifzwpcyJaD78SFzgJTXuStumMsCDVWC69AhaRiWxT9kzuqj3",
  "key15": "2P4UeRcp3f42DAE34qkedy6yHL4oe1oN7ypxJfHQRX5vWFi3qFjJHaBzPRFaQiuZGSWnoLaWAwudPWKEXGeipvUg",
  "key16": "3jJ8SyWnBpQYDBbQQXC1Yhf4jieGcfL4Zzv4xdbASDn2zbeZWaFwAUTEnSmHLxDX3KqA4K92MnbRNrg2FG5wRXpp",
  "key17": "QxgvcMkAbaqyFs82WXCQZirJE38g2Yynk5UwgCMnK3QVxHS4P7d8zMAXDomkcYJ7JGz8nHeLrfzZGmtnSbkqGos",
  "key18": "4VJd3XZcNWyD45FNjjCgzPKQSf8Sb7AN7WxN8H6nDcuCekf6FWdZBxYKBBWBMp5ExcFmmA2pPupNu9Mzh3FxT2CW",
  "key19": "4s18mRiEyGzYwFsKLC9VD743XUMExFNLj5tSkJRBySHx9kTosv7MooCc2r66RzFEgePbjTRZG5PokV7fYAakxUJ",
  "key20": "5nvK6GiUhnqivjBby1KDBuHJt2RwQogRyDLXGnsqHw2sNFQGfnghAadFCZPzLU5eDpiAVAYkBsrccZbQ4vawLAic",
  "key21": "48vovKERSUrd5vWUDD2voXR5c6Q9oXTimTUfzg6EyuzzkkdXVTTTaUcg6SyR6omYWiGDoJxSDntjMxKSDkSsGv3o",
  "key22": "4Q9vT2BDCa21HR7kgEAG8oxav1uuj5WFSnpVwnXLzNJUAFzEjoeeKPTpc71X7QYA7KFA7ChHhUaU96aGcYx49Usa",
  "key23": "XEYcRUNmAuU8jgzQnpRsN7tJMTpZeWr57CDd8MihX1kZaYEdpW3dHMuth2mVLp7gq9zFpvmQSBsqZVJcdC35hCz",
  "key24": "5Ybp1Ewo9RZFGqRH3NW8YgTpoRixnq6Lmxb9G9sXf61Kat5a9wyYgN7KaVfbWwWdwC2JoF1dkWzYzTSaSFRdgVag",
  "key25": "5LcSJ2yyxT4ErCZ4P3jkaKs5HgbpCCn9XvQfoy3Pdj5vvN89oUBcXjHNmVB2m17V5fA5p6cfsr388yvzn3jL7Yan",
  "key26": "2WP1GwmAJzm4kmUSS2M4Nn7Fixp64qxx152mHxWMm3b5Py6oCgw8ZuooKKCt7VRCc8idhDG7Qhx2LLW4f4auTHPX",
  "key27": "5hei2Qs9ciou1DiaYntMH5jKb2hyZsNMYCQFJD12mVWGMhRWoG8g7k6BpWnMgwbz4mjB6b46krgCvopYGfzSg4o1",
  "key28": "AAZa2VwdREuSUzvhbwMrtwhKG6cg31vc5xQi8EhPs6Sgttxe2dVUSXaYSy2nug7Mh66sny5QfVmzf92KB5ypujM",
  "key29": "PoLxNU3KjMGz7KrNt369S4PpaEKJDFCSQ754jVicRcJQPuwsZrv7no3sV93GC4T917NMSF1SVt8WtRzjK4KijsF",
  "key30": "5D4mXvTBjPj491n3gcMp97ZMpU9cqfAdPiVKN6bRVd1cLdSjCW5r9Uf1d3Szw46ZXiBTwV6r9SENV6PHUNdBdkbw",
  "key31": "ndGHnDh4miGKXFygn8GvT5zV49fWBmKdEhXb9Tb6xD3Ga2yqaxYuAGC9GbpVdRqRc1cdk1etvVZtYpVAN3ANnZo",
  "key32": "5zZorBWC4nfnthAFe9CPX5CepuPjeTET9sYej2ehL82ZstCyJZn3f2FcS2ymihihBzfjDmaWSZKYyPZxMdz8D1Lc"
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
