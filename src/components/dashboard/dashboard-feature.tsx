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
    "5eTRGmmZzyHNHapNskxfoAi7crCatosNtqhWezV23w4U1er4Acx74H14htcaQpLzVcidKA39QbuqmYfMBVpqDFDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKF7JqmHyvdb9tyHQBTc8djPBRdjmu8bQbLcHQzEjuowfCVQSJ3uDfwf7wyZfMCyta8KTcUhtGq62kXFqVQda4Z",
  "key1": "3qPBBdgzNZFuWPCYRrtjVa8ijNDZM8BptnssJ1ZXf6FYA5JcZbfh7V9DoV6AeZsseecshgD9JZw1PcqY3hZ3MvPm",
  "key2": "x6gUPwbCcHCeyWm1R8eG3oTfp1UosAar6KGJs39ECSzTFCvrZZjtfBNSSBTvf2aK868NJEt9z9duFDDjWG2YnDi",
  "key3": "22kcbbfVp42zgzNwY1kBEsHv2Wu1wiN5JxKLEFJy6rL5UeMCGopheBC4VfLnqSypu2ciNjoWFFYNR3ch4sN94Jjm",
  "key4": "3UdNmxDchRMUoUH2eDVhnnJnkCxLjngBdc4Y19pnhCK6nAnBYUcBW2MJ63hLtQTpXorq5LN6HCHrDWBpn3HktkED",
  "key5": "4GBZ7H1gBwM35QyDtbqsvusWGcFUqR5bCqvDHdRRvwpm7NcUYsjA49PBTHgMSvipPfs6KT1HohSHDZBQ4sRqbpZz",
  "key6": "2dhVV8scCyaKWL7DDfFJP7FWcYs4uNpvaAKtDZx2sDRPY4KrqHq3QcFyUsSXpQYr9Seh71cvQGafUpqqAb3tSe1Q",
  "key7": "3XmpdoCXDUT1b8amoh8MT99FzD6kTKqZnzfBF66rufp9nmMf7aqLMnD3ZrxPWTd3ADzMY29RyS9NYgzqx4WST1W8",
  "key8": "mtqzbmDpQjmYcM6cuS9Fer8yY3fjmEKJG9xA4PbwrvYKs7Hv66fE8UaESz2vFRZuDhDM5NENkCrvyJ8zy4xAF4V",
  "key9": "5Vk1rErvRf6uUXjnFP6VCTeAr7qiDx5h3GB3hdxkdsVE2ux3qTieakrwC2wTMP2cbZ38TNgBpu2qjvow99YDreQh",
  "key10": "38NddSEnq752hHCubbMPK17DNgPXRTGLM6Tpza6kK2uiK7bj8Ag9WoWXpwyPyePhsX6QLmw5tPdyNqPy86XumssT",
  "key11": "2HcyqWmHWUvJiSESFxwiR8TMNbPZbZh2fxEkRavKcgH6PE7esTVsB3YtircWjqXGLDwKAmTYm38QLutcFXhXLNpj",
  "key12": "pnQvw2ek4GjLmBT7uzEpv3cydCDfw8noBDgiY4NmsLUksSckUJV2hPFPKXb4pUNUVBufobcTeVQkcasLBGqfSha",
  "key13": "61tz2d787qKdQ8Emy9WMd2rNn1SBz6Q5X3XKWxNcea5qBpRySqwtqjBa5dkCJLetMk12WMz2GYFfuVD29V9JREJu",
  "key14": "5PVXYyZqjvcUTWAk58qUw8q1chQ2ZHBunnmBAVy6CvYYW1fxQBJEDN3teqHbwK2jGos1sqgVA6cmSvFGDHM4JKp3",
  "key15": "4iSVifUU3HZXRLLYnrErwSz9fiesmRqBtf4NyKmSoYM9aayNpjjEasBUuSMrEcGryMP6QzwDryGxfccKscvbJu2H",
  "key16": "4tjkXF5prpgp41tUXjtmYuFvUSoDVyRvKYC3FUDwUsYn7ZYBZ4Wf8FDZJGXpXVkD3ny1WfRvDRi7pzfcBrcwQ9ML",
  "key17": "5RbHKDkLnaKw7se5iq2GkPRCSs23YYnZv2F6gx75C3gGENjFH4ArCqV4qPK6ihRtKgQkqKoCyreMMg2dw1GhdhmN",
  "key18": "5n6ZTuZJ5vUMjM84neXa3hGUkxVvgwAhe7asxqYH9WmYz6gEPFzBWhGDDxnuXZFWNJ3erkbfpCHLJ9KK1ncUNBn7",
  "key19": "5JFULYusDPF5XrEUbeajxj3PYLWLurqvFBFWW8oDfGxAHVhKRxXZL3gmVia6TSzCBuG1GFDFPQEvbWB2BFJvxRV9",
  "key20": "2WvZUCASkMuoHZ48LarD7ghjBDHLYCykaPasre4XRndJaMuNVzi26Wms9pzrM1HdbdDDh82f7Fk9cubJXtSnSCAz",
  "key21": "u8eEaCRDsKh5N8QWuppTv2CKg7uWUyFEdJcnyjhtP9fXbJ8mxsUjjSGF2Lsk9UDjasF1uF9FQ6Hp7ZAV9bexMwY",
  "key22": "4ZSMK5xhSMjTtrKfAiz7WzNWJera8bEKqRV1GaNdqd1gKsyawvExQEsDDWbZTKFqkrqG2xYSpqGwotqGg2Mgivqa",
  "key23": "2v3uyU6EZ9wjESwVq8RYLPjqxDRtvHjeSUAW1NU8cj6TQ5tawFmxxJQn2ctNMyJfNtrjpSAi6FBXbGUhAyBfDWsX",
  "key24": "4j5HtDWieBPnahPf5D9m7SwXx9nQZaaf2v7EaF1FcB4Xc8bxQMMHwuiVouWqdi3qhnBAFs2yPxruXyLYXNRRKeAL",
  "key25": "4dmpe2Jma5PnJFrN9cMwRH6b72SXDnRUVcpVwwLUdDhw1SbHXhzZuCaMuz7YXKRy4GXbTsadYLYMgfr1bNkbdvA5",
  "key26": "3fWc6Y1XGmWDgco1rJ1iYzgWc46pn4uxgmMX89x6tW6QR9doG5oqJcVGd5MwYHhfaCjom6fATrBCrjhxDo5ng2zz",
  "key27": "5rmwkjRkouL1G6nKKmvoUKpckcso16W2MAoK5dLBv2cX5qPeDWAzuAQmFBLVAN88qfEk8m2khXTFCFGaYNro51jz",
  "key28": "3Fb37gNFdznrdLfqnB7bh3jPTgA8M9cfGRjbis1VQatNcKSjHKS7s1q8jWWxnEKPdMKYhJExbg9U84dYaWhuAvsH",
  "key29": "3qGexNLNXtei67wbavfKLKHS7tZii4keEi7Ugth2zZErL9b4DLUjsxE9E82tfM5RgUQvrQgf1UoEdUwEuia3yEtn"
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
