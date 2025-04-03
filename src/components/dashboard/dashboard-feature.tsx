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
    "25EnTdPMyMFtBQMThmFtKhnnFwnH1pyPJxzWkPJ3qqzGurKzY7xZ1BhWTnwbgcZVDvFUqNAvURULunTfdGE4dH37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tX6GELhXpJiM8nwNhedoK9BB7irBZGeWvjFfDLzWRSYy6R21VdQkqbvgKPMCvvuJmQhE3ucqNgNFeBixsZfiJNP",
  "key1": "4uHt8iEHq4f5seo9JMorQcUCYEHQe8ULjjK4AtSVvLstCJEhvwgGtGzD6pLRAZ1QYpHby11JTqRHMUPA83pxuJvt",
  "key2": "5FizyT2X3SFqTYFeceMGjLnmz6mKa3hqDdS8XxnEM3JW6UF6uAGDwpBLmP8NKC9otcCnteHCrS6jQixNMVNKgJvh",
  "key3": "3ghRcSm6uazsfcAJTvgvXTtZAdrVGVmZQDWocqvb8VqkX977K8Nxw9kXeGMSan8WkRJXES8G1hShiKUYMqUB9Qo9",
  "key4": "62CxixdNdYNsiWAPZCjN73d6UeSFU7QDhk7BcS9YuWbSHiiYWuegvDreHqcLN5bw5KbfktxuJFEaG45p1ApbTNsh",
  "key5": "2DKWR6mVvRLccjeCJsRrAZYp3vLUx8u8iaQH4upr4Nuovar1DZPwTrBtdZ1mVJz2eca1Wg22dNL6uanBZCy7b43U",
  "key6": "3QQQfTraVoeUok71SfhTeUS9PaQwSKsL1QnvoLN2TV1rMzvDRscC5dHs3yYCexW5bPRc81Meh2DScEoVnaD5xBFs",
  "key7": "642i88AM7yFC2Dow3ppJb559NvErw63KwpJ9txMoPsntieDgqaZsNx5pRPwqwsGrBVATztyvd7jFj169QAaV6jm9",
  "key8": "igMpwAR1y6ubgkRZMFMAjSettw6yRF57xadyoi9uMWGQnR9w1dAHyMv6mAATGdj6R92UqN75tXLNsrXnyikty2E",
  "key9": "3uL8gBcV3DBUFGar1Vt4WBzm7zqQoZBpNrQz7BQWwy6aBgNNS6Q8SLFyQqu7NJooYxXRZkNajs2LSCWq9cLBydGS",
  "key10": "4PoGu7SHUgNxsXaTcHjQip2582oxM6Hpop33Rx5K6pGMXwCaRupShpibyQURz4pMp4dVP2N1gvsWJBihJgjR7CoU",
  "key11": "4EzzQV8cL57M38ZL4wUfuZFktLxZQkmQx5ixDhEnurSV7H7ptreS3JbRxvYtCJfJEAy6LA2zcyHHs6YG6b2tXUsm",
  "key12": "5ETWhz4458jweJieLigcVGgePZofg9NmAujdyFPyTWLvXFjFvyrW2urbTsKXEZFgqHag4QYc3ZGGhDkncdUHCTSo",
  "key13": "4T8MfsYuktjTjarjhAubq7Avx36JpE5ueHCrjPxyHTfsbCmCcLx3AZ1PfVJtBSeNcKzcykPbet4zxb97CeHD6P5B",
  "key14": "4zqoPKCSUSP6EY5cZgmJpFSxhGzUGdsQYHqA8XN2kr3CZPAm1L5pcbiiS7FxGRoYh6JYCJvDkdZs7atXGtczQPNk",
  "key15": "pnesbRDeCFrhSW8upUXynUhHJQLbwKX6LfkmPnMdbzzHFkcrhT8m9NiZXth7PnBxsN4TpHZaJEZtqkWTWgeLv9n",
  "key16": "E2jaHK2mwMZGfXbxgcJ2ozYgGXWaVK28uRsV8X9moDkFpvmqb8u3pz1GDTWFXUsLXSYJFoiQtWRi3T818sZaFzU",
  "key17": "2Mi8WPV8eW32iAB6ajtcfURJ8p2WpX8reL6EJDdYQqVguoNY88Qrt5ZRYyFwVogtRutek2kiS1rMASsFe1q95UiU",
  "key18": "5x7kQC8etBgeBFe1fVYkc1PupfA2i3jZ6esryQMc85FZs7H2mnkVMoeKAuh56fN7xfub2wZogzSG3yEXTz9nrNmd",
  "key19": "4JU4xuPbaVpSyaAgG6fS6g5Niyu6AkstJkWmfULNzDMTMibGHmPbgZLGHTodCX9m5gS8GVsRAuZYmwxSNotvj5xD",
  "key20": "EvN35cppuTz1pn26KiyURfr8u79jpdKfnCwb5iLGVkE15c3772bhgd41qwh4vTXfJhakiAjx2VtDWjVn4yoSLzX",
  "key21": "3WtWhhKPr69QuxE7zbppaCG73RqUjCDsVYUswV3gLU5GginhBtdzxUuSTTU3D2KdcPQvTG3WUUvNzdf4MY5HFKN1",
  "key22": "2fvhN5v7QePFKc93TaxG9e5SVoLkrfvq9LrGdHhYSBH8gJ69rKc8xQ8mss4gAJYasJ9Vrk5ddkvjKcp7M6Ntpugb",
  "key23": "5meTYrH49dVQT1Z4RVhV1V2cqVyveUHMJXhV3J1tBujwasmFV4e5WgpDErSUzSKZBG9aGv14mzFqPYDJvDQiGrWN",
  "key24": "chZVGHnbF4yrrnPtcgskVYANmvdT3LZTjNNfgnXGS2F26ogwpKxLX2KV5WE5dksjPCZmPYLcpF5Wvm2NHHYRDhC",
  "key25": "28QPqj7ELebL3aLgEHS5Sy1RqcDsd6EuBdxV6gnuRYwaKd1rspZzwwKRp1SPw9nrJockQU35SLhazLaTGSELB5UM",
  "key26": "ULjRpingk6NtCDRYxqAaK1aKJyq9HRWqygDuEpWfF2U8mLuMypbi4jKcbPLi8iNE5TSAv9Fv4boZycxoZRaf2Vf",
  "key27": "5zsm7x7LNQDWM6uQaLXYDrGXQS8ygb1rnw8YLWhLxezKx7HaDmmtoyAzA72zmJWfLLtLoTUY3VR8nShJRcMjYmPV",
  "key28": "vF35HxbUQPCSc4PFsDrzuMnHStUbV5vsHRPHzy2sAsYepKzXRLwT9AEpX1eu8gnToac8suBDQ1WzpMyrrWNZj5Y",
  "key29": "21GDbXguMFrP7e6G7DnzQ6rge5fGEDTFXCdJZ6JhApjkRdqZ1CHzk8sQ6EtrzHYtf2ePwa9Lx2LqN9M6X2cgk5wu",
  "key30": "3racdRa2YMPBrTrqeNdAWLw29gGS7UmAMojWc4n3h4Lbq2c5S2jVF7GkYFfkcSte27zbTVygF38cPBvX8n9EvcBw",
  "key31": "rDJSB86ZN49sid72JNQXLeAQjM9bUQt2hsMQVZwQDdjtTC911PbD1eqCja5hKRFNauySsMGDXe7FF3wUnFGvsJb",
  "key32": "5S2vasmdWvbeK73VSjeM73rUnpzKUjYhPuvxtYYBRSw91m7CBD8cD6NvtaugVnWJmjLYDi7dpiNT7FMrm5kNfHaB",
  "key33": "2iz5UN9sKufu5KZoWSBApUkAxMAB8SiWktN9UKKy8nhaWVzFxM28VdD7TomtcMfY6tZpn6vuMjfbPwrgrFRXQJSu",
  "key34": "5xqX3HhydWzBTWzNLeg4zeysZBYNpo7jkAqRnR1KKbWfR1BUkP7PGxQnoLpQByVs1S1258BF8H68WV2B3M2CkqP6",
  "key35": "3eR6LvdyhrdbyDC8578MiGHyRZjn7KJqUVfKVbSpLUr9LboG8EcLkMyJYU8pHW2SGsU7EgT4mFmuy5Vf7WRTwhWx",
  "key36": "36m5sgg4esnban3gP12BiodyfXcP78qNLgMkjCyaEWinw9mhSomF5PqdsgGSb1YcLpYmG6zCEYZfEniFxgx6WUB",
  "key37": "3fKTsxkdMF1QCVX5n5qLT4PNVRd1NhYbprC9UZu9KdaMwp2AnUaWd4beD4EmCLsaceFK8EFzz9xG2BTJfsbumzBD",
  "key38": "4mTKguKpgpkV1fUcH2tZUWukRSRxNPtncUCnTqpxbY1RddF5GnKakd4Vj3Z9UnBq1WcTbET2tu4qzM4yy7SvvPvR",
  "key39": "2FQA397R7eRqrJE459FhvUom8m5cMjRTSAbCrHTj8YcqgrNRLFM82HKwEnW8BmbkTUNJkwnqjE4j7oARpnzZTh1N",
  "key40": "3WLfcQ6byFXHFPZKkJJm1bQRTpznna3BNM25LZGya5RqRKswrnBUjGiS2VGqSG3QWZJTy5E5jLj29qoNPGP5afQM",
  "key41": "4Q7cnpLpyQxXjRF8Tx3Yn43fjMp5oWvjLpQUXt8Qnnciz6MSnVqhW9W2SvKjWuywmXt9a7h1tMaivh5JguUk3HAs",
  "key42": "4nZopc4n7pX7SFA8G4yvCXdUkMmX9Aus8cQGHawC9aTzEAVFfp7zmFoRzd26hyRQFTLDsbxqYKXiBBhrCXEUs2q",
  "key43": "2xmeyonTKzMX9TBB8CJCofny75tYqpTdiEazy4WK8drDsFdVkgmoWWWLpNCLU2T7Dey4M1YiiUrUB7VboFbqq5J5",
  "key44": "3wzn9UmmZzvUvjjJVH1n4fXPJWARApvtvqpYUFDehKcwaGipQih9DAd1xsgMN2HXoWUYsYtNcSt6RbTLmRh7F3r2",
  "key45": "2LKRBLTgSioi5FuCpsN9PiH3afCDQ8qXN26rGYdWwTDtUDMBMQkfX75QgPzyMDtm5j1DRgxdy9U1PeoBNCDKd8Dm",
  "key46": "VyCkiq8ppWyg3wXvVX6Q4XocnpU2mR8YMbiRCFNHuMnds9XPJJ6n5TEQNSJsMVP49nQGWvKkcdX21waZNXe24Bq",
  "key47": "h7ajJy6RpXzYkhwi3L2ztSa7qMVt5jLh7sVYy6QhUqZaBcU4CfdqjNADCmixzSetgKu8GDUpFWiGXr4vRrQ7aKn"
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
