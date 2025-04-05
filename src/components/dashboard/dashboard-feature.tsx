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
    "52byCKzUX7Ski8fQgt2xSzpUEb97Cv3wHkKqcGsRpwntTGCdSzTTvQ4cpNVVuLQjwFPGukpFDtsfYKSpxLtQ2QJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6dVKDUFwRJcqEBGnqhwoGFeRaPFa2fiaF91PrVLLAGQ3Qb8Av4fWsVVFFfnLVaKMbfvgTMfkGUvvFQk88fAPN7",
  "key1": "ohiksM2rJmfJfwirTcQRc5P5ndbuqdhJLFE22zQN3Z92peCPLfxz6D4Q2Qi4pZb6FkWvFXkyuNU9CkzaT2MaJ4Y",
  "key2": "vjHiptTvHyYT1Esg14uofhaMRjMpKHJnBxKv6QGEzZzqbotpUtYQUqgtfjsiH36W1i6mbBWDPiF1tTVKrW1PJ2d",
  "key3": "FK3QVYjTM6cFYQcTZFfDxSnNJH9TpQR3VvtjsscLQxGesfxqaNcJpAEta5DNXB12PtkRZQJzGyCyPiban16wqNm",
  "key4": "4bwFp2KG8vcQZcp3ofxaWNkLZW3Zt7nDmLnHjaXdWyjnwbCcZARF6Tp4NJUEPrz5kisAUVJCwNYn61Q1QdkJNbiT",
  "key5": "53EaLMcbEcQVZrhxxHNx8qZc38iv1vq4mxAASbyZJ77mEV77PqiCXRi44yTD1X1jXBUKLrTXtB8Dwh5XLWtVLWxo",
  "key6": "49ok6XfJK384bY1nUSj4dwxb2fcbasF4UMvrbxccwhGALED4C9rejL9m8kZ6Zq8KTEDBpnRBBDcT7cgNk2iRB3RG",
  "key7": "2h3bTnmm9H25DWQnH1M8t1J2P4jtgddoANhvMVFfPa2uSaLS3jXmzW5vLDiVtqYnDuUDgi8vF7abMzZFpo6EY7im",
  "key8": "4oNPiayygSWuMiYhZ3SznMhRo9ECjrs8sW7Xj275c3Ey4CGA6fRjAX8MPCTR2dsVkFWTHhSWuZcUrtYRDDMkNJkL",
  "key9": "5tYa14hFR9PahB4ZP9Y2vFki1CXfFU8YCj9XeBMUKBmdmioZGiUG1L7MqDsnuHn3fzoDSpv1EBgVU4nSCGPCDdqf",
  "key10": "5sJMbsNiDSN6k2XhkL5eabm7RhW8Ff2LwiHNhzvMZbx4xv2RX7gCTuZRLAeAdZKKigKW54BacFphR3jZX2DWUncF",
  "key11": "5T8dnz8nJLs96a2p93ULcBiJevdqc6hbQDCKfcST6vsbB8mA3sknpEhsXkg83Ug8d7dwBvEK6S9PRJXNG8cnPUXm",
  "key12": "3XbYMFUoG5HeEv9r5HfkYx451XvEYLmpxSB1NaD3domsrKxRGnC6D6sKvWyEM5wqKWx4umpBfBDLASmnMcRTqeDq",
  "key13": "5zWKwexeEkkBkko3abN8cEmeY16ZFJKXXtmzDvEHzgwcnmgS63yuNCNqe2me7YPfAjFLh3ofF7zPewwPr21romcP",
  "key14": "2DU7pzP9N2FiggCayxuDxAJH8ZdWfpYKBeEa1Pb6gyezeUcZeHFfuQqrDZhFPY5bRzGembcXDUNjD39Q5LmdzfoL",
  "key15": "5iJXroK9Ap32ePmvPm73eyfrgXSE4MVrhEcmHXwxfe4FxRSNW9qBvdbPTqTZRJZroZaTMYPwDXWEsDUshQwQyBvJ",
  "key16": "3aCc62rnztc2ZWoB79cmHoPjF6Xsu61JGJfy2wBnyUG949XS7xjNC57SZrtGMwErS59zzCqUYtstTs9k94pcBLFr",
  "key17": "5PG8xPBA5vvmc9xpEdqRpsQXWsuUxyFkdK3z7n3Nu6XCDKxQCn78EbDGKdyaJw7idAr7DiMQgcdvASLX98Wr5ZYL",
  "key18": "2HxPUsE89pcJdiyr6NQqybVKN6ibephjfWBNk2tnwg73UWkE6FnhMDeh3fQZRrGV8iC9MxkMUZrwPugaF4r2ngc",
  "key19": "5VhSw89ffbubxiRMFqY2B4wJJYT5b9jgYvPQZgsdf6D2Z1pEjV9euYsFdiU36gGwb6HXdYyiLvoj9EoFtrQngjT4",
  "key20": "36ijbQcDq3MA6c7f1yY5zvhs9NEfPoPgiG8HzvWxXmuACpyqRC7gxhLkEM3LZiUqsLEdUJqeKsUEbfSio2zUKP8E",
  "key21": "3TzRsiWnhiPApcEZVg8emAuHt37YWQk6h5CQrhPqhQs1fa3iP2ZxmVuCijnBrgYxgmxigM1Ux62GfTYh5tdAqz2i",
  "key22": "4kspTt6MdYW6h6XMzs6dJBQkFouYHroNNzXb3ytKfGwpnvi9JPNu5vpgpHxka6tZ71J7xrPD4QZCiPs3bKibtKsi",
  "key23": "sG3niNSgvL9WmmCQ3XhGBXC5qqkYXJASZ8iLk8EpesRbxAP2ztfuDR62Qx9YzWXRH9KvJViamZeHLdxTaaoCoeq",
  "key24": "4vCb9sifuXzWUHgZRBuqgms4ouZ4cCXjxAzriTdazwsXeBUjc27DeyRQhF8HtM9jDYogpXYzVKavAX2BNZxocuLf",
  "key25": "5w7FddckrZ6kYQZYFaTdnAg9kuGkiEKcWtpRdnz1uusfWufSgdHwxqW8sUZAZpEk1rVDoB5GJLZhK1Y1YV6UkiCt",
  "key26": "2dZ7YZv4bik65QCAKKCEZT5cEaYkjyBKcMzaPNt98h8JyYcyFWLx2GT43Gfythi4qLr5mevp2EgSCqxfB2UTYeNm",
  "key27": "4QMMcXKFb35aeCmVZUGXZYmJqh9NRZXcS2cmeejVCqUydo1RHJ1MkZGJjhZr1ykrfBn4yEFpPcUFAe3Ld86LTgEC",
  "key28": "2TsfuXyzuwpdBn8ak7pP69donHoqVmSJ2WzNtMA7U6r39G8nGFefvxwXTFtW3DQfuCNs2KyimiULKoKgJpMAfeUW",
  "key29": "kbdADDuVYYUH7VuyQqgjwewdM9eYqoG9VNRtmp7Ccvx7FGARb66ELVSziZv9DPiWa4sHHojy1AUX42doTKMJXWu",
  "key30": "3DQjtPsummqMhDQwHej4et4N9NLLBP7YKzcze5yUf8cu4tyhRz1Qy6oKuXb7X55eNFJsrmuZTofWJoPmYrpa8KNE",
  "key31": "4pvCELXddNkzGzo7gvbvZD5yyjPH2DABaFrkMGWPMbz6tpre7odUVdnYHjNSFFSAMQcETmPbdByCqai6caKCTH6T",
  "key32": "3jNagtJo4MWFoiQNEZpCbDGDubwoG4HWEvewAmB4gbR93xncuRuwVwctb5s5rPSTLPcNfipoaXMJtnvgs3nW9C8G",
  "key33": "LUEjtQSGePCKNcUUzE9u5TSV9fH3UKQ77MECRnbpE1f14yjgad4o54ruza43ymTYGYHG5NNTd9CrziTwPg23Pdy",
  "key34": "2S36m87Mb5j7S4dNTKCQTrKPKoMETf3QYveeLjT1uhnBFfJY3L9DUuwHfDHVvRA8cFyLsGQ4Yho87RuqRe66LxV3",
  "key35": "5JPHCquDa9LzwTFMRo9SzQwAhaqP3A3keW47a1LMA1PcbFotNC3YEHxAZJEMxQUG3eTwZVscDvy6tMJBBPd2mro",
  "key36": "3czsVy2BAcctGLBnTrXSGn41mcbRKFEdejVoNLeGLc1gBrTHMP3knvdv9oortXFc4PH5uqoMncHyNqpaFM6YiAKb",
  "key37": "v9WeixmrJL7T5LDVvHpHeXwJhWz1XYNM4RkjJViBLkLjiYGKoX3pvu6dH1UtffqnKJ92YhrNZej3cJm8CiixPzR",
  "key38": "24XsS2sCFkoDCNv8Jmy7LeRxu1WQ6KvokXAuDaAjy9aThTgvhpHS4ruKN2bRzGscEoXS5NHy2XMcAQrxF2BbNSi1",
  "key39": "3PS2uGdPUAbmz6YkmgXFCtmHYskcYJRsvp5hpWxcpdSfhXS1XfhvniwGgpr1Qq6Mxg1KhsGgRHBnhe6TiC9osNLk",
  "key40": "hqTLeoAN9odM8TqwPHFKy4cQZaBTtAoynvt135orNpm2nm2PxjzetGRhzPVt1VJ9hKMNJFPFA4wd6HbQFzusGDh",
  "key41": "KX8Y6TDhtSEVxqNePGQXW79fSqLfx3xP9HBQaHdodX9MhkwFzxFJnBVCZ2QUdgcGys9Ah1X89dQ8fyUdgbZBvWF",
  "key42": "2osimXV8C6AnGmbFhVd6GkuLQfTvP6J19UB2bj9Pf7RU21Aq6Ec6EvtJYWsmjp4eTbjPATNZ4NMNp9KDi8e2nT3F",
  "key43": "2ha2ovJDbboCtcPjEbe5EJzm1sA1cNQf4g3SmqokwsX8izn6UistspnCENj8DpqSx6UghhvidobZpry7xNFx44jX",
  "key44": "5mP6GYCaxSpr6Az4qojVa2RokML5LsYsvJTvQYs4EY1qR8jdDTQ1wrUNHfodPU9zuM1R2AubMsLHEVGQs2vuAnKv"
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
