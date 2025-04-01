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
    "2CHc9iF24gHLy99AxNeWTGMhEWKxfKLSCRbExqNdexFeX4EyMKKak1SLPm2yXVbhiXDY3XE1VFVevbZTWyF2uSxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b86sRBxfj1cNtnryaVQPX2B9ZPXAvwE2par4KjxLAiHG626bmj8EvS4Z2YFnDA6P6H9qDEAnB9y2vvcHSEJ3FQs",
  "key1": "4XdGjurQrngz8RhNRBiSb8wvgwh65ziQyiAeED3AqCJY5MGBvzugHj3PFY74ajQMHmA3bXZLGSqW81JUh3HtbnBP",
  "key2": "65EbumAvagdGgmfSF3DCS14Stvs4J7wvoFKVSqZn7XK9nFotLTQeV1eLo22vmwmkLzEJwNSkYdRGpsXpZgQPy1bD",
  "key3": "5tSWx5nzYRMc3ERoCbZ5Sy63FejLzug2nnHPAQ75q28byugE1Jr2fXwny1EmQc6CyHPkqMS6v6TKaTsibKmhrbRT",
  "key4": "MBt2uACPCBa2niAa65a7vX5oWTLhqBsMfuQ7zRSiTyqnUFYJC2YxVNC5P3P49zQePR6WbBDFpCdc9FxoM9z4UWy",
  "key5": "5DEBVXHv2xXQ29gGZjEVB5BojLZdhYGTykXtJz3ASG3w3XA9frQLne3vkpHCV4WmAoFTiSNz2QQMkEpYCuWf3Gpb",
  "key6": "59ARLjGfJdnFACdvaEXMjvcovkKcb37HG2SLjHhWnptUKmGJxk4SVMcjTD6wn5VEAkBvLXRxXuXWNehjCEqhKxAc",
  "key7": "4VHuSLeMMqwVJLojJPv9pkkhLKUEG1uWkzwTnqFezPJV5SBmpsXZKdnQGGsA2JuNSbYUzUXsBpBccs9xagpC4GD5",
  "key8": "1Gt6nqBFt5Kb1zp2Z45yjkTQQjt92nGzM8Kb6ktdGEF1H39EnTpbym6HXj7fVWDGVr3khHr5FDeMc8qZQtWwNTF",
  "key9": "rqAgVfMuoyUQqY7cZvStRctuNd3Xe5DC2azNiz5HHUk2yp4462ir78T5mV1WLyuC8Ks937Pm2QSuNAou7uKpkC4",
  "key10": "LrJv9gUduwcHF6wSuyW8wgL1Q21g518W2N2QCThEFFFcmVhX5c7omGHxDowunC7fKQ6kwrSHHfcKjxa7GBo5yYv",
  "key11": "5JSAJB1cttzTkHqFSoQmdiGmxmuJSfMT5PkiKx94JjSHpUzqPU7oJwZp1oBcJ99T4h6wvL4FRUJMfgKk9ErrK4pj",
  "key12": "39tUzsQNVjCJkXRFhN7MxLX6XbuRtzr9VFxoyYxu2dgsqv7KjFnkhCJQ6BwWYyVw7LF2wbCoNgQqwAyZ6CrosVxj",
  "key13": "TYnz18reuWQSLJPzV5jd2YmVraGyo9nLSebX1XzALPreBF5XNFfQdopxArfABMfsDX6G2nanLLTvJBpSaRRA2No",
  "key14": "4PG4KjyZ69EYCgpanex2UyP382d4PcVkd95arSgrQn1WThv1MAxKQh27sXPjoBe9zu8sNhDvSEhRbB31KbtLVaBT",
  "key15": "3jQUZRY2fEt5guC7rZUcVE6YNiPBQvUwG63gnQVdxRgKqfq9Cjm8dk9PmTHus3NpzuKWweVCgWStRrMgLnPLPrdf",
  "key16": "2yySLaj8AEJ2jvgetR6EgaeicdW19458gpnLvRPKQRhewbseJmG3nnHs87Hf4yDEk5DbeFdNzmwCUcidmFLd6ueU",
  "key17": "qsxmEqp68Wu6X6ew5ZgfQGsiFsis6CDrZZkB8ZEjNunS2nrapqxZJw8FPj29u93RB2ZjoVGGRX8nudN2g4YzpQR",
  "key18": "ARJkJ6r72XBndSPogpj6kyFrD7eRj717ydVThboVAtT6u5VNGEbPJ9DTMN1dSNoajWr9YPmdX3guVRB7DCL8kfQ",
  "key19": "wDDCsTyVKNnkKiV79tBWtf4QzaEhur98qfQKh7Gd9gxfs7QGDVxqiVcvSoUGrtMwpribTm48tMQcnij2WW1ASBi",
  "key20": "2kPeZaUzwHszjvBmT9ivw4sCMF26K4to66Qvxr1BtkFxWv8YaRmWjZuFHZP4fiR1se9G4ZavCiL7X2LBL2o3hF6P",
  "key21": "2fa7YXETCEHxhXMRB9kGGitGRPtrCfXYdN9Tp1noJj2EGrxSha8EFZha4xwK997kGKzmQyRGeQ61VU7bp9V5rhMv",
  "key22": "26hRDhRHHcsK7zNibSLitwcFbRSP8BpfefFdCuefCH5MbwyS6BZLfpW9NkPDw7Yf5dA6zs9gr2EuR3uNYyQhUSZW",
  "key23": "3BH33StpgpqFT4NYhMqgvfJtPMo7Hs6RJkAQ6gQySF2dHhwh6nJn5eZodM7RzL2DKuKBt8qevhxJY3GXQfbi6npx",
  "key24": "4FQuRsagyFcMto42z1Ex1A7Mi3VdUHRyJESWjwmU8tofoGg7go98cUaYQquhonDu3W86pcboJ82U7uXpKWwJVHm7",
  "key25": "4NhSwa32LRdSFNznGAPRAxDGgS4bjgSsmRhgxuuJwAFp6XiKBqt58NBDf4bEtjhxLFxiBis327Gf9yTZx8Z7N2sn",
  "key26": "4a5TFD2WmPfExRUWqqQZECULa8efRJ3mmrQwiVFbMe4fAARDtnbHeseT6ZcMvyDUWcoqoF7xmg6vAMp3wLZcFaVA",
  "key27": "4ZPox3uwC5iLLykSMfQtB2XdG3Wu7Qm1FDGy5JniQq4D3gNxiveS9rvHxbfLmjW6dmXJSbCYys22pbJ8MB4enyYY",
  "key28": "625A2m7sh4n48zEqcWUosmZ1vbFShCjEBFh8cq5f7NzxRnGHXUs6BZbsbirHRQGMziZhiVuekNn3g56sBzDrff8q",
  "key29": "5Uarzuti3T6q5Xp2dxzyE7YXjAL97tKtuUZqbBFmzuGYGmkmyAA9T37UTLFJhaTMsAZsMXMhbs2G4jeJzCRt8gkg",
  "key30": "UjcWAb1TFHv9Fx3cP9MvjUZyQbJu8c5kSgcidhnoYbEdopgtJbRpm4kz8nYDPATwSNJwcsrKL3nXWa4tTyhvFXh",
  "key31": "aP4DaQ68Mxn5G8rDhhKwnjwkC8mN2x5DaC8Fd7iwkujX6YD7KjTNNTqoeX6YUZWqSdvMvtaPzy8vooMfMvr1nF7",
  "key32": "cpq7TUuUcmgbsnoEcaQYpvh83uS9bYaoHuCJZsjN8eeFyLJXS9kLo6c1dCUZCggWCNBXnZrEVRw2ERNxq6LSPXm",
  "key33": "2rMsbehAiUpLHGfbr1BBx6scnu8xr9TLw6UKS4pMfyuK8uXfvcCJnAU3XaKD78bqdrgEotUYhktXhLkiR7RznB7N",
  "key34": "2PN5EY78hJ1aL2y5eVgDqGcY5oeieM4ab4rsdKtxWPQsfccGgoq4bGCGLbKBacx8NXccyKfU7MT2zJqXEJRt5YQ4",
  "key35": "53B4HCXsJXHv2gnAJtBghLbpEtRC11RJen29GWPE5jHkUtSJSuHg3QajUKux1P6LCmxL9kR6ZepfnRESouFvYXuQ",
  "key36": "2B17cFzmWp9XmJbRUNswxwXhS6HVrYaBg3do6dmFpY7rzCPB9pA9LLqkcUXXtrAbPZ6bvnvrngXCxGk7haMvqjds",
  "key37": "4XueRxvW14wF8yDhxnDSTnGFR6D1ZU1CGC53NEPjMmXKizSnymiGXdJtuSJMC3soeqLJUgCSkb47e4Pky32RCf32",
  "key38": "3nqzQ59MfexnB3QzRhkQSdrCinkDxxXs5GFRBNyHQg3twnUW5WXwyc5P3AstYLnztnCX3jQPtjFvwqq4vGVWk4aH",
  "key39": "5njQbeWzcfTG56WUm9wpMtbUGgZEDCmdTeAMZGS6eumrhSLXM4Gfa67vcVfPNXNr1Cx83mCCno6gx2RgRPKFmcm9",
  "key40": "2uHDkkX1e73U2D1VoBLSKbZhagayZvrEGxPMJag4tcjLYRQ9z8uUJwEPsfXnYygu1RAGaZMqvfqQivTbCLgvzZPb",
  "key41": "aZ1a8L2SV5UHJymwqcgAqo9jwKnvjJFEa3XHXYs8WzFgw5PgdwBS55wu2aaWofp46dpSVmqY6dvDn2v4w2i7ywf",
  "key42": "gg6MWbKRo1GwExDfVy6Jg8Vt4KPQaiE2vMimSNgMnWXzMdzM3XhyeDxncdxwnA9PwwfqDrad6pFFTt5LP7khVwX",
  "key43": "2VaboWeUXtGWYaUpHQxG64WTwuhX1PfdyondXYiQTHWrQnGD8tCscRfeVUUeG5wqZFPyJnKKvHfLhw4bipepnUvF",
  "key44": "5eXfAkzMyjZaRkBaXpAKe1tXJF3ftvGMwuh97xvr1u959Dk5Qp7W6mYNokisAi832Y7SKeij5oidYXbh7qkJgjqi",
  "key45": "2HEyFMU1kwqx8UN2McBkK2hytPnY6jkMdyw65fpCe4wYp8icE35Ukx6qwT7oVEjj3YLezgmXr6twDAHkyiM9iG62",
  "key46": "3jVsQHR1UZZRwpMpEvTyFfjUMVmWmEVpidNyf4hcZA7JzTWfFC1hm77NtwKK16HUgHCBBWkBPCsjsLLSv3k6mRQ4",
  "key47": "59xTW7F4PtpyizH7SL3aBLgGRwYvhK4QqGzGS9k9ZN8MqXhK8AkLpo4Lnnv6feyn3UFSTy9yJWgsztcAqWSQgKmS"
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
