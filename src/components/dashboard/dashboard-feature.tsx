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
    "kCdYb2bqSMZ2Sja5QMXB8RHjmtom9hipNamsFYMGVNFUDsPysEE5gmHkaU1dwiHfBnP5R9Xb1VabvQ1fC71AxAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCPEuZcvqZxTD5uwqpQnmHWbTxNbDezAV2AxvRCSS4we3AR2ZLGopgwj1nuZuM6MMZAcNfz2p1WVeFXTo7yJVNf",
  "key1": "4t9yFCN5s4c2BQhs2FWscc9FFtrR7sokEKiktyRqofTKGBJYYQ5r1zFpsY6N9qTBiLakWxUfo5PhEVaJ7nVsCnmd",
  "key2": "21jXtbfeP2mdKuCs2H5tDuSse76YxH8psEkxciqjdBaVaiYAqXK4mUckHYve79v9Fb876SdWUuthdNNVnR5fbZ99",
  "key3": "27ADhVS62bJRJbkNzgg4GxqKYyWfVAzHtmjdgd1KjsVW4gkfFoykgF3tKYLnmQYJ8oUeffKF1jMEAnt3vHv41RaS",
  "key4": "4GzvH6abPsrxe29FJfh8MXmckzcA8J3LVGwtJozSEDaJMdwhMV7RzHfXxc9BzCnv4Zb1VpQ4jcrh3P5s89tjQd4C",
  "key5": "5ZYbLV4XHNxvBz2qrqD6weHu9HYivsap2DBczybjMhYQNviTnAaCphjgbvWc5fcnnPVg4RdPbZmeX1dJmT7wmFY",
  "key6": "4CK8tnfeBPiLgeDZWP2bjc1AW2hJS8ENZGA3PZZjVQwgf3yU9Zddi19pzruE2vju3eB6LnRoVHKDiuzik4n126Ly",
  "key7": "4mAFDHK5R6Mff1S4mV6QVtPVnc1H2XRPiTwyCPHNMK3qZPudRQA9UjN8n1Qf7WNnEV9dCfB4EYPUuRHUZuU3eqpn",
  "key8": "XBULgw3kRB2a333sHHQKCr7wPga2w5euuaD7pkLY12Q88oUEKT4bmCZgML4SrUjHD3ufotYSfCgsNtAGEWpFJcv",
  "key9": "55teUphEakXbX1xRCCH4XpZyx4q9tr12ChFq4GrCSxRHDNidUJdL8YKkDsTmJixgVqaAJEmCYNkvYxUPwV3jcYJt",
  "key10": "4NShLk6FrvFUjodtesKXuaCyWn8EcazaBcxQwVaZLzszPbvtie6wX8NezqQydM9oc6zmhcAMd4oSWEvCwXEYrtB2",
  "key11": "5yfQsuE7AghbH5Wv6HatggU1Mb1mWTUgJu5aAhtzsdspMjzRxwfsqhR3KrrENajZbaLp1ARa4xU6DaojiHjBQBBM",
  "key12": "B9qe85RgtbgUecFg9vFCWMSVtPrb5hn7wSShRXdAe4myPivLzT3TkmJzricjYkL4FSJy6y2vZftD7VmkDodofp4",
  "key13": "2Vf9wLv1fSCYfHthELPWAaTDcV4hRnf12URc715rXhXFZwCn9VwmzEmimVFeC8EWRkQpBrWaRVkVWvUTrnhHvui6",
  "key14": "5GTcfqcPR5pBsNwhHPCzAULnXMvKpgr67wRxigVzCtQjANsjtuqJ5wmdZvBszDTggTjtqg9Dcws1jcVpfHAzXDo4",
  "key15": "rosFPxfXqnbQ7mobTiEDoVitPTv25AnjuGwtBmst2s5k9TpHkXEcrXXriswcA3qLubyrWx61BTcyY12KgP4BWqj",
  "key16": "4YTQynEhKjvkCJBa5VzBXbojWHw9pBsMbLCY6M7NLfUtJxB1ZR9cF8Y2hdyBmK8h4ts2EtEcdi8ZsZmadnnrq55u",
  "key17": "44gQsAAMRcoGKJHUFR6W6MWTqAFBb9ABJTmqaa5jiKoweaZUQjWuF9a1mWJeMCz2kMsMaU7HJqXF4xJzGEUdFgBg",
  "key18": "4NamDnuhhUjqy6i43MZFsBv6kRPst9VGpVgn5Qvj7Li363mPGyUmZDUT9RfxDENqpZXrZ9qKe9uakTrYos6ErPbQ",
  "key19": "5y7KFimNS5EkGhhzjPQbA4ckCUWthAAzCQuwVn5srfJ4wiZiGbFFZtiVPTb7o5s2o5QH1t6bif6u6cXYDtdYAAGn",
  "key20": "okDSpJE7bwSSrwzpQ4MobiQsWYSsUUzSwKqUCyyGhKyVnWCrA7MWuCd3UF1TxuSAS1fENurdBJnUUJ2o23gDsQW",
  "key21": "4XDZ9c5GJKB6nwZFRFEyEXRj3AD2zZ6enAAUrUo1jzcWfpY5bq8cEQxovZhmqQeVFkxoTQDytgRhZPrMPPWiN4C9",
  "key22": "5Pi2LmR4Bfkrw8atNjawdkSFEVyeLwskgKdEvzctTitbUsXnfXbMccoaRMgu4igaZhh9UjAxdDBCRUSSMY5Rs6wZ",
  "key23": "2Mxks2G5wZuGDD23Kg2hpvj3QXpKW6FuMC2Jua1qYsQFLB2Tsy75kUQa5BU9Ay59urmRt2YfVxCitNDhPSSJLpRt",
  "key24": "8MtpBsfJWsDD55YUPbJjoBqLLD2Akafun4Wvseex54cKVAUtGM6acHfRsGcwJv4Et4xNyfpC82jY4t5xm5478Tk",
  "key25": "4hZEti9W1vkivZvDbDG5mZbq2LKktq2KkQRcmNzqZ7MHeuEwmTH9dAVeBwGfMRtKbrYqfeMj8DMQ3CfQprdf261J",
  "key26": "m4UxNCdESwZ6urZscUAzFtxgHhNugF7jVTNLBQtAgbj6KH4fu8tuJJMPjbe1wkkaxMbcKcKgJ36MYbuyxhVqJME",
  "key27": "iddFftq6qDXYk4j1XsSuk12TsoDAXdUhxcpM1ki42hbLsWSDuD2Kd28JjRfDSfKNP8JqnCkXuVn41ehEYMKnzpu",
  "key28": "qTRRiWYaieWLtvgFKp2VZeDvQi7eZ61AYtFC5vNmVV3mvHBafZoDsA2U42e2sfmpvcCMCtsBxfckqMEZek7bxhL",
  "key29": "2WTXtjDoMbPhaEKyJ5ymieqwVFjnrH7oZLnprqR8o4dyrErK98HfRBovjFQU7TeT4eVAKhBnHeborC2q62EothhT",
  "key30": "2Jg2AWW42G8exN6RFFRiVqLpj9JBmiv6kGgdEfdfW9PJYQ7P3pgfJmPM9bbr4epZhgwJwE4MXJMaMKStz58oib5d",
  "key31": "5imkQCLK51j35zzDmLyYHWNkpw7faHMnYqUWrpA5YaMmwpJMQPPNuKYEziubZKoJJMxArT2kHrsoyPwpvYqAD4ie",
  "key32": "3ezbEWsmn8DJ5zgBhyr4UFME2Gng7SU9mXdXJLguRMKAQWmNcuJX2pcsTrtk8XSiiXzkSgqbfisL6fK2SWBLfvj",
  "key33": "2c5D9sQFKnrK36wKXpK3HU2Dp2GCnDZ2jEhcsgunKqce5kpAFcoDj89f3whfNns4wiN32Qk9Z8ar26MN5BDvvuCR",
  "key34": "4mBTncQ1fUmS3G4GazwCfpRHpK7WS4RWJCCJ14C1Kc8uUvfNeVn1LsauWEvQMaVUHjsT88YVSf51wBqtZxj3KZXu",
  "key35": "37qZixFUSFy1FZiGBCSLYHSMZHuvdAvicDgSr3k1YDEL39dtu5nU95c5CzzLtxsSDNTAMLUNUJyKi7oNLEx3MBBn",
  "key36": "iycu1G54EXiA3maMTmLeK3TRnKfpHCfsFCeRDtbBHycrFZEk6j38tCEYRZKrf5dQ8GGDTmMypGTZBj3WhkNskek",
  "key37": "VasfWnpDMnHFmDBsMKdZvVZ8q9RBaNhpJywMGYaRAiWT6BqczaqsXkxnjJE7LuSgajXkNSGLfzuYEd9Q6VArFKR",
  "key38": "34qVCmSeVUb5sA1uAyBLgKPjVnEDYz16JMi8LwEz9RxTf3uZGQZk5xhJPn1m7NW5yGHYhumDMC4o72uHvDCrhZ5P",
  "key39": "4hQcurQjoQMazJ7fcu3sNXJPwZzwx9Ms1Z59L41oyDd2T4XgLP6SfAuTTFespLpV5Tf66f1irAo6E238gGNYUir3",
  "key40": "5xegUXvP2tr8deKfFSG3N35BMNtgk8kzXK2WPTA7f2JyLHYHBVecip39fZuJywzjBNtwngkq4kqyuszPGHkX4X8J",
  "key41": "nmN3kDqj7iDdJpqmh1wZRk7kmKpTtpGvEiFivgRkkW4KnncCakvuaSnEVWdfa2maHq6A6nEZ4KKBnCDBw3Km1jw",
  "key42": "5rPu2Cq6J7ynMUyJYXrgecGVGJ7eZTAjFayyEjyC6FxCxcd7MeyQD6EZYoPV4ps71RGk8XFQqJ85LFBMLxfPHx4x",
  "key43": "45TJUfy7fYBhuWcFDe3D2ccYyhd2RTskc355ePV1exeDp6UVtW2HGpLDNPFJ6TeLM3PFEVzpdkMSb41NtrmrVdZj",
  "key44": "3sUcYvHGwf4rRnxLDwiJy9xtAdz29ErkvhyASWeSbkNGZDnUQHF3r4wDmTPLyat4KHdvjX3xCGZUUpKXXoAiB8iB",
  "key45": "32rKSjD1WyZA9aj4wYdpi5fd4PhE4mUmqTrDPYSG6Fc4cfXUHj2FscahE1MBHQP8CgjZJcPTHgmjeEVGzaPzZNyS",
  "key46": "2JtYB2RsEBgKBZxTeC3U6uQxehnj1NS3fTi2MdRdXpuyAkqBz9zpxefGymDomQ8qJa9ZygMrt8NNYUodqS4LQB6w",
  "key47": "4TZZhYTEsFTt3AUyUWsZz9FTK2bggsXvUW1SrAtw4ER4r94nFaYTQnVbsiPsWXD4WpJ5qqS3GacYpmWWdy7cCBCZ",
  "key48": "25UYkEuEJsfftqUAgRw8iQUUZ1SL2N1pYVXDYc52V8x2teFNqDcgzNXVADt6rfHEY47mBLfMDtacqEkGYhutKVxh",
  "key49": "451nCGA7YwutWSzZ5EKHHEqsRHocDPyfQXXpocMtxBm8UbV2rrAN3AGFeLy885Sgj486Zzuoa81jRaW4PGMipke3"
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
