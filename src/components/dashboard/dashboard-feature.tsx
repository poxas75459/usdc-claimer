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
    "4AsfQztYbkcuK3XgJR7WuaB1izXXsWUztqJpEM6hc6fRgUcNTQ8crFbE8Dzbb75fnMcmYrcT3fYVQfgLFjTEdjHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SG7gNrafvAfu37fNV6quq9Q1R37dGgcccLZPKY5aM8S132VXzDvSttK8HKQmx24jExpJYvBRXE9zMsKXKNy8gNN",
  "key1": "2bL5ZAyvzic6AvX1XiyFfYBHCRrqZA5uMscVMjE3nN2ScHF1mPsRxvjt3x8uT64tkaFtxQ9aWnKjQXwJwf3T5kuo",
  "key2": "YVNpKJZ5PE4cGa7b47fRxdU15tNzo4BduLsiovb5QtXLocvuBekjsytHKRNdPDiUTgAtGtN5ZiuFRvCPHGijL8M",
  "key3": "HnhDPqAcjLchYhAsiK8ZPaeu2yQTjKEa6qjFpT1BFY98FGMefRKrww2t4Zo2Pa2eedHbg38AjZTFwYDK7gtJnou",
  "key4": "sKBwnyyLYDTPHvrLUSTw4aNi3n5wTHfzUMHPjph69EQrQkYkXSRaArLYtEWrVSYYnndYd44QHZWrmhboVH9KcHB",
  "key5": "4aMXFyGeihBg87rADTjYnLkPeBNuJJhDDprbA5pDhbdsrY8epnGWftuRKpAy4589S8EbBGyreeV1xDHygDyyvL7h",
  "key6": "j66CP8vNCqtWic2nq7n8f8efpmummBAryoD6EP2HzYCFY7atCrLrfLUfjyJrbH4YG39CBLqFKBaokM6gdBcJ2Gf",
  "key7": "2nZ6vPtL7KAy9fhSDCzexTHyeZeWkvYWeq7zhVCaDfrVXzmdJ7SUhJLsx35dHjcgkhdm2ijD4qqUt7QRNFtucj1x",
  "key8": "5e4aGiFkQgLZdULi1FgzUj6WfuzPsFL2xY1dpkfJBLyHwWxTpwcZmAxzZqWcwzYWwiZ2tAE1st6MpHSmE95iMFZs",
  "key9": "t8aZkDLAs7eruHdHSqSLfp7fvbC5tfCoz9BBbjzUAv6ghbtaJ4XQbo21uCxKQwWdVg8CUb6tZzhuBco8iX9ssVC",
  "key10": "3JyTL7osPKH7pzsYPx2CP8tQxRLYKVsJTcVv9WTPTgZTZMpsbk6JBEAASu6JoUeXPumWgp2pvuayCB1x2bVLxYKp",
  "key11": "wPKpGsGBzpvrLd3aYNB5LGsP8NsHmF4pureec1nSHQPPKNgGptuhZ34roqw8kqoJdpQiGGuqvCoU6V4sQKSNAMT",
  "key12": "3yzqGxHZzEkrVsNqFhLmwWrP5vJFYLrQ698kXxTsNcpmGC8wQg1TYaAHdXVoVZZVVSvzVmdwJXgjiP8qsT5ScCm8",
  "key13": "BiXmif4WZ26Deb7YQdff7Wj527njsFdMFY76Ehu76JdesuPUz4vcfpnTHmaZPNmgWX3L8aNP7bKZuwJvpmCgQ3C",
  "key14": "5DY8He9jhQKLFUhvUi6cuSoap6hpqoqJVw7E97jFi43EpiV7SK67tzntQw3KPh4NvMKPB58RdUf4NquDBJiNApbr",
  "key15": "3SA1TrF4yo6zPG8xLB8skZuC1wSr9DVtQhH54EnsDKh7sxpHzz8F81TSS3xsNNXQULNbxiwk8fqyD4Eykea5BCMo",
  "key16": "31gYfG5aT5gEMQJho1civRuBXAgV6Ja7A6aQhnmxJZgsr4acHvJo4wNwfwb98Ef7jJrJv5NG64SF2NQZQJ8RdqFx",
  "key17": "5Gv6qwRuLvGW43Fca3XEbNSoD4tnK8qvU5YwXrchDGLvaNi96YKPGjkkmErLkciWbcZXHMH39b23E5P3MyzSspBU",
  "key18": "2d55Y4JCthVVNXrn8cNESZk7hTLG3sCj2JNTwg6C8qunEuV4oUSr8xf42JRaoNrmfEN9x4kPs7b41Un81Gxpggqs",
  "key19": "2DheHVWPXv2dyuTQrft5CorDTrUpVzjg2mF1xKkcxxroYo38cTDiPzzrR2N82RehZG1Ca9UzXjTwMEF6NyAq5eeX",
  "key20": "msVETcLwfSdE4BKwLeb31wMPUdf1w4wbqMYmpR6TAomPfPHpiaXoMQi2C59iaxB7sgWwRwpZc6VUvQ13EW3aFVh",
  "key21": "37Nqt9eqBciNDLhxTbR5crdFgKgdSPaPJ3F1KFjrP5YqKxVwht2qUkMNL4pc2r9X9Kgx6koWPL8qkCXXp1GGbiTf",
  "key22": "25aVu1z1oKaQzrZVNs51WTXrHNp42wekL3M8UpccYUGbYdEnbXZUsTiUECWSUu6qAqtZ4byezwbeSzJr4sxW3bxX",
  "key23": "51ogogo3zXxEP6wqN2cURDTWNtqhsfXSxvRrAFpu7GTNpeE4DqHtGe6cS3FvaaaDJGp5CbGchYj4KCxVraR84XdR",
  "key24": "2PfFGMDVDynBCQL7g9s1V7cCb2D669p7Z44ZVfDmZTLQihPePYR78nJSEd4dJUVBhGasyxxz9LLdCSVSvBWVZFgp",
  "key25": "2du6B8rGB7pwLNvuSxzTHXsYjMvgwbTcXShZQUsEFwjkUFxVmGdJq5X2zTDmj4S5i4p582krFMiSaCaBN5oZXMrk",
  "key26": "FoHBN3BM71koUEqk5dEraaeiD5ob42FtnG9svSK3hwhikEWU9P46bJd3QtdWnwwDB5oC2wbj4iWMBRmQHAPbV8t",
  "key27": "9bbeCQ8bvqtKZ759J3j42b5bHsGgsgHD3SrUvuy6xct3t7gvKb2U9KUKaHf1adf3gozLzptFTPVKfzkTwNVG1bU",
  "key28": "516m7dRqHof1s1zZUGaTPvPvLKnesRRxZD6JHTf4DxJbFX3SfPR8cy6GVTZXkHCqXsoVYRX58D4FciG2ok9TDktA",
  "key29": "K7jaHAS8BHYLtA7GF2HhkYsacDpdX4nioPm76yXm1KoDcvBfJNCFktTx7JPzSZVEWnortBBBHUWfCdXurAvF2SU",
  "key30": "Z4NqbGGQZbHSHnq2WabZtcYzzgX9WZnbp96H4komZYK8oGiML7vqRnyFjYseuHmv2jKB8MZaPT8ytCST7qddcFf",
  "key31": "5gP7fR4sAqzLSV7BhvYHAPS1wHC1THGLVfzdvY77pXYRz3CyDMG1LjL4uLVWhzPbGVhof9kEew4owHA5qjXX6tNN",
  "key32": "3YsVsADq1B9ityV3TBs7vV4waooaSfYebGvWhRL1qLLKwtKzbAug4uJ6Bmq9Ycz4dAVm8kZ2hrAA8R7LHZ85XHde",
  "key33": "2kbDi4tCPG4yTyF5ErpBiioZbtMjymggRcq525SWd4sdCMKL4fUDUreAhSuXkkwUvAwdnyRjW6W3nAa4K5CAP4b8",
  "key34": "38YwWRqfe2vMTPrWit9HaQ5LLkgGcPK3iJMh8MotqJqJXbNCoQbHkKEat5kMVFNZHBW1RKQib2LtvoMm6KTULpEy",
  "key35": "3dzXPbhT16QvF9zH3sw7uRrUWnW9qjoKoJaJ8GywLwwpq9ki5ovzyVgJ826YYFgPoKJm4sWJvZAUBv2h8q77yJHz",
  "key36": "Sh2fm7zdBQqHnFE7SpdcwvRU8Fposh2acnanRzKCombBnATTSKxTCDLHEJ89d9bJn54gU4xhQkgD5mmqP7wNf5n",
  "key37": "2paVP8CqHiyg2H4Bdg5BdQ7v7oG3xr41Rg4aRDY8GxKrLjnuviqu6PVNGR8PxrJhGfN2pG5zo44ieAwQuFDPGT2c",
  "key38": "5mu1NSN4rCHh6rn1tGkJzrVg9oBF5avh3khNGnvXjbrJA2LTKVD65aeFtJNDf5W5QVYqZvoK6Fu4msV4ukbCE2VC",
  "key39": "3PGEwLT4S6JbBy4g7QntwBakNoGm1oo51zVsQStcK94mJSJic7S16Px7QuagC7dxbgRyCCt789PUy3kksCJswTrb"
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
