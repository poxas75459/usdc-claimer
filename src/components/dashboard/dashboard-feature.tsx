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
    "2325KfXvnHAbiSmZ35DEWC3PTJvgUHdgWMWNWrtpzrXJbbK9HiZ6sLWnojqWGEm6WtN3uoohEaZkakV3TNNZjZX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gwywrbVf8bJoNmKVejrVSbDPza3c1SYf2v6zcFCY4cQVjE8qHaX5mqYmJxKBTHd84qP7uva3kstbC3GyDrBsaT",
  "key1": "SJMW1Q6gRamHU6kibqxJxUSy5cLdacz5UkdaDuR1Ja9mmwGf3mgbnEbhpXNxYSR1oieBGBhRrK6NTmTZUb6yuxx",
  "key2": "4PKSmB6UqrBJYbh8iuEJqGRhUx3uKZnWMg7uAwuWWaAaGipxH5yR9bq9rDsNnz2RNkWGSZxzjb7BDwn9ydNVJSgy",
  "key3": "4YjaoHgLbufsS1wf8vRdWJFmNwJ54y91TaVhkwg4WduxzzXRiKsinYWumMxithoB7bcwmAxsvnwxd5XSesZdzvYC",
  "key4": "4zTzz2A3JmFX7vTNUNJ58WviQuVkYLbZRoH6XS3mtJPEHaM5rtxmConVci3qFzDcQjLoJXyWDAZx4SkyzrQpt7ka",
  "key5": "2A4zRGTruM7KbsHLAkYHYEb96HsYaRUoWq8zVRpoZzcKWKjP6ZiJMPju5cVDfS1zJrgcFGSFw9PkLQM2ALBpNdhF",
  "key6": "4dCH3dwdArK5eizdyCTrF7R5CoGPUovp5p8EdNhSZgfkNPNj9qTnJEHUz6eGAhc8vw9HPE652nWH3JMGzNvbBhxr",
  "key7": "2Bz1ABumYJAtMLB4NN9DmFGmbrUeku424zRy1XaQwQ6RGegxDHRgT54yXnPRyxmgpuN9p9DvbS8i5RpG18hHEh2P",
  "key8": "3rFn92FEGpcv1v3GPEKbj8xCHnuHCXTzHTyzdYNDFBzhg15xk1G7UNBBNRofgfE2NWCZqstVNPj7cHPka5HtS4ip",
  "key9": "5FpZjjjGK9kq62CE1tLWh3xZEXiwHypoShTkFNAg2UvtmS2D476KbMRJ9TMLDiqHWqcYNfdEDyniyyAbAUohVPJ5",
  "key10": "3AM5TAy4PPbVdBPRz2etaYREZYD3p9ZobxdsWfRbSyaUmExqYbexy1yFGNHNMM4GqLzd37GvgZq4uzwKDEdq33dw",
  "key11": "rK4nfRbirxqCW1iBGYrGeHJSZhkJsDm2bUqW6bkGgnpT9vxvkgp9BJKKofsf7NJL7bdrNw25EjiVyjwkYXZjZeX",
  "key12": "2Z1KkkFgjYBHDjZ2sMWuVrs2Maf4vGKYVN4517mfqQYAtX3nPrdVz2vTocRNRzzzhJ2XKi1BZqjHqzmkQ8ueSAwz",
  "key13": "218y9ZbWov5EZeQGkxjQA4yHqmF6tP3CRqQy9k5WwSTWB64kqFCQRUVt75MTGY6HzDcjopjQmHo3vNTrnDfR6Qwf",
  "key14": "27YcFusRqdmLBkvMA1pJCwWE9g7LwMxTp6SBNnrmyFENP719q4VtDAebHgTwvAgdZZesRYHRKBXQdCemzV32HjKD",
  "key15": "2mkEBkUcrJT5BAsRpxRCmtfXpbevhH6AadDu3gkFJashzqkoB4PApbEoBHS1cF7WEQ1aW7xzZHzL5pyBstf4S7Yv",
  "key16": "e2M3hGJekEaRku8CbyBjvJaVzDk96aU7A8Lb8DEr2hkpaLZbtYRrpGb1hgn3VtFdLpM6Wc8di6cjCuBmn9u9M21",
  "key17": "2cf771NQ4CAstxYejF4rN1FHckQBAXv4S2Gw6TsuQ7QEZX5zzACQZ2zgH4xonigE4JTv7AnKAuiZam5cDW2cf8r8",
  "key18": "3VsoRFKbtfLqFiKGACrBs8VXwEg3xKDgxxNsQfPedKmFnGN2kuiGeAApXW8UorSLp52oAU1TEeenuLiSAXtP2BCb",
  "key19": "fcyPpYQkroHw5nhsZYY95ffSfb8BLiqBc1j2MGq7SrUeGBp6WFWFXNmRqrdhzxJrdwnwPGEq5MxHXhrnhQijeKJ",
  "key20": "5yaZW7QQzsMhP51mfCnWgYCuBmqNNLFM2CQzsdWcixbhBvxaumqDJBbaMAH2pc7UUuneGFF3XNMXyE279wNbiqkG",
  "key21": "2m8SrYNsbQ3jouzLYvPkTXnYm4nB2VjXDVi8gH5zN1G6Ehwmvu8jffoAjFsEAJinYkUJDnFGDSPkPPbdHNe1zCVY",
  "key22": "27geu5Pcg8TRRcxZeRB5MUUCTWfHqa6Xkjm92BZ6pfE31vf5i5K1Wm222an9GUHz47996DMN6D4BZuLNWQ14F7N2",
  "key23": "2fe8hpKn1SekUmUVu2n3HsatJCoz9TqQXBV1GLJTPKaeoyaM2N8uwk1gkQVbx8A99nMyd4zwmM4oJ1ztQzsCkfaW",
  "key24": "3XdD8zTsXnfQppaBsEhHEark3At5TVMP1YvXMmS5A2pAFNiqtwVvKrXj7zBaRnj1jfrLy36FHr9AtqbMQZ2vxva3",
  "key25": "5j7TFo3rLkDLG3iW99DtpUz5i1fnWxynSZdvDGavs82fC3kwcNa7aRT2JSm7UAiNRghtsrSgNEyCAaAhALCFVfin",
  "key26": "BVtWxGE9Yq3vvZe1A9SVShdSizwrVujn129LDpRLFNwha2CHWNpv7XFL8MgFmHcavRMZ8cDbVrvinmtCnNNP6j7",
  "key27": "3RNrqnNnb8dn8VYeNXtp4dLjKxRXPaTYwyeMMUxjEznfk5PwMm8JuMLM7zNZUjButh8ZQgq1FBRCXgVghK34XQ6F",
  "key28": "2n1ftcNihQBDwDUFNiuMXcqfjHXyxmtYk7UcdS3p34nACJKxvAshrijMWNB26Kq7E9sFQHYtcmqpZ1VPLxJQAqQo",
  "key29": "4spSgHbZS7CSZVB1HkxpJkYeAQmHQzrqg7zWomHNbTtRZ4xNMsMcVpdaksxQoqkKGqCqTUV2ELj99Uy27n2aYPmc",
  "key30": "24cwfwBcRbSdCjeZYDnLvou1m8otcywFC6AZNjnWXPm2yrRX3hwxosnPW4ydMaFyE53WH92A4TQCiaf1fveoGwLS",
  "key31": "4xj7yPutp1pnVSddaufPdeyX51cBSTbmzucuwiam43RjBzwb9zakYXmpqugaEtqWXXqtUo1Qn5L434LrovZXuSSN",
  "key32": "3jnS9Xn4mLQ6A5XW3CE2FvedoBrUzXWX3kpYjeXYafXRaKJrRg9iioFu7z6ZNoeA6JWcDrKeDjgzfg1irMSCVygq",
  "key33": "3tH1ZpkEgDVqUB6XkW1hTj1afzo1Wb3r8qSrUgJKjSvcMKyFyv1Q2cBehFHq9HNTJHB1rm1vnFWPfgXh8sqpop9o",
  "key34": "26y6rjbiTrGD6pA2zVC8EZfovUHMfNHR6RxQmQP5FGMwTBacpzz2MKmzpVNFyRXjWs6aZ8kWGYL4kVJ62xwpxKDM",
  "key35": "4XVfXWgHitEciCkoCNG4oPTRQRNpMSWdZuxQBrHRewZHa2yPYxLML5WXRuu4DhyuYHNVQGnyzusRELsWdqzzYwgA",
  "key36": "2JZpEgAffvTjCXd6VNSfnNyyZExVsHV2foCv22aVLVvuxMFK4rs2RyAX9WZJmsL3zan8nLRAGw4Y5YDBv6P45NsR",
  "key37": "2HEnwDjNksWwaC2RQJW14gJdnUFcPGssynNt8QdJ8FYoFFXHX3rxncWFSaqSoZHeMfkVavyrqeNEfn7BaJmzc3mB",
  "key38": "4JuAcMchg9exx1yfSGd6XqEv8jCGV9exqbmQY2rKWWRdhXrJQvBFTuhopuacWs3VAnZRQhtMrYsgd1aVSm7fyY8V",
  "key39": "UMSkHGMfkoZHgAH5eUEQsoFajQDpSuAaP19CbYtG3QAd5EScdFyAojawH3PvCmUszxzG7dfzygoeHDs2xCqhENG",
  "key40": "2DYy43FAVrohR64v8pVwaAfqBUM4PmoJ196AhqxMc4brSVfSNw6JGjcPe47h6Soyg6KzPAgDEyLESxFwMD4XAgoj",
  "key41": "2qi2nNQ9VGmZUwfEm5msM9yxqgKukwHuWR7ZbvfKPJfJWDur3eYqhneQmpr19Bu8qMNUeWFCuVWaqzHCzQ71QTLq",
  "key42": "r1KvFzYPCmaGFVYrEjnNRygqreLNarACMs4L6Fxw8zVUBGmDctJGS8YERnJh9q7WpKmhMGZHPo2JMgVp9FR7r7E",
  "key43": "2QjtzqGQ7tAo2oymwSVGkEnRGSGXKfF9esvRJqiuRy6psF19gXpXknVxrn8yQipm7yaFrxh6J1PCqSPyaaYuENds",
  "key44": "5ddP3Df6pV2CoCv3brPGuTfMke5NzhUtF32QURZQ9iYsshUkun5Zd2G71PoUe8Vou4yTkGQRC3oaHt5ghTdf96cr",
  "key45": "2HWf799jBZJV7Ux4noxXtFbCP8iYpL6RyUijy4Ai1D34h2enQgwZCvTrWJP6Ya6xYXfwtURWQ6g87FTD9u6xRodt",
  "key46": "2sQsn18CQKZjiYNKWxvrsKJvo7Nc3UUb5iAfyfwycGtCw99JCyg1U57yo8VT8u9LUJK2dghizNPGPyQoURbngzyH",
  "key47": "5wcPEua9kdEVJ725rMsjnqRi2WJmzqsHGV3huPfaSyQeqgYWBU3bMoyduqbWdBGq9uSrV86NuvYxAtdMwEx8jApW"
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
