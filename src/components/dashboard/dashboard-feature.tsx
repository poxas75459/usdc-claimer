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
    "48jQFxBJKBzAU2VkCrHQFXweTtxM2wX7EVazLq9NifAYK7iMB76NkYPvX6yrkNgz1iAdmKB34QXaxGtWpUmv7o4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNhsZvbcA4CP2Hj5dQs1bzSLuTGNGgPciTfHgeCykCWRA5cj7RDfDSbfYHdE7LosjCCnMw3ujcBYG1e4CmYokqG",
  "key1": "e7PxSyWFQ1RaQdfAQR33KYXKsheWEcqPUz5hojYwPiZisUEC4uq2AiffzKQ8f1sv1jJAMPbXCuYGHvNL5e8N6Np",
  "key2": "5VkLYdc552KeyBLNJGzFD7NrjFkraQXU59C7wgu5iTQFMZAMebjLANULT5Vf59W4dHSGFers1yHtWzQkysRw5qyP",
  "key3": "2ycy5Z1evPKP9fPo5BYnS5PWFn7dBUKZyjnYoJFUkFTEcFs3Fi3sxssaFxbqC1mjqQpGmW8eQ92778WdJYyN1sfR",
  "key4": "4aCHUbJ46mp7LZYFxFPW5RmcMpZvBrCxWdXWTTKgMVa9wpMnTShJmcyRL8cj2FhShUVAb1HthBnv4eJVjZHoaxgv",
  "key5": "5XxNQT9xUG5n7sdwxBirJN1Zuyt48F6CYK1bwEZxF3XEMZQ3nzSBz3mX98MCLYF4zvb4Xxf3G76NhYDvU7ipgnSN",
  "key6": "5bfaaz1HtsR2zhQhbzUojHCuwF6Cu8FnbTjXi62YErGy6ZBEPPBABra1B66gb44Wba4nBGQoWUzqv6t5WmTYCLVQ",
  "key7": "64N6wpTHXWkxF2q1nwt4Zb8dMSvJCr8MaQbbN2TMLREpFHqCkw3zozRwFEr8k34XsdRdcrszyuEjPwEtrDk3YvG3",
  "key8": "551NubUnmRU4mLamMjiJ2mK8DweNUapUjNPSzSDgBKAmsM4SFXnqqPKkxrTeZM7LE2hdMsGyjmiifArPSeHmTRoK",
  "key9": "3L2Y9DyzAtNM2yAQ2z94vPb318UKZyvTp7PgsfbVthi3pvve36ZAERM9jKAJ6D5qBsf226Ck5XkmhtUw7EbczFfA",
  "key10": "2VJFjos8F6gazDvUJ3JeBeE3qBcR25HpJmGjXWZpb9WjfVSxW1bn1Wv8ZNH1v9rNtXqjLKmrUCm2SUH4HZhe39mD",
  "key11": "654A4kkBcyv6E5fy553a6Haid4ha8RMCfDZRpYVKpZiVJgiq8G4kDeo69AeYYb1HWmUvv3BZQQgJgQsJuafo98GN",
  "key12": "YBER83wuSUx7ty3D9r9JTV6bmxEN92vYSUfS3eEEi4vwDYDgTbT6zWdE9bY57qkdeR8sc52pEXEeRzwpqtfWJSi",
  "key13": "5cBbCkNGNGpfoqcvSHDegvpMuo9Y6h5Xykj1BU1hcnQhRdr7tenzpuGHriEC27f1gnB6uN4mfW9ZpWPiMcMnkqk8",
  "key14": "3dz9YJNh4ZtNchCih8biiRcgNhGPKu3ZFuQ2urP2Fvbtd2yekJsi54NikcgNs5jrTsvyc36eXwfgZHXPu12bXMaB",
  "key15": "3CSdeaLS8UzTGHUbG2rPznHd1WLcEjXSTPstMbhseZZxzBjBpZ2JoStMTtLPUqkuUvmUJzXdb5T4wxHEjukgoY1C",
  "key16": "qjPMXyMF8kGhMMkQsMP9CgSPE9iLJkJZmD91kywvET6QQaQYYjCis7c8f1Cy4fLBR8SF8H7U1wqNnueEb59NSvb",
  "key17": "4pqEh2dofhLzvAvL3RNGJtaVrXbG3BTeK5q5Wa6wkCB3meu7FZWnAu8DHKkAaNoCqhmr7nrTvbiXT5E3cgWJ8Ztm",
  "key18": "2PcopQmvSKmd18sRSvFatemdDvVVxXppbWbyqccpCKmWEgvgfjjo1NnHku8bePABYCGKkDwDFeZzLhwxjKZAtnjy",
  "key19": "2shJqCut9bmc7iWTx9fevxDxRU5dJdfymhABeNjYLwk7ahkvoYc5ys3u87vuAEVj9GPRwH5Z6xSzpYFb8V1iTZDf",
  "key20": "4jdJNqB9N6muPPucZjJACzJgWtJW7svbFFZWFj29P8nVCWySHFhiULcipwkm9K77G6g4uVmXnkvMpRk7kUb2LF2P",
  "key21": "3ELPJDxyUXNHrREqFCMPrqhmNmZuvrmz5rLEpcRhN66xDka9tLjKpdbgpfJXHEbL7t7aMv39gxE1sh9EwGiwHfbC",
  "key22": "4JKQDtxisMFrJN2FzGePYb4Yd8cEWHCxymZbRJ7jjq4BwuQWKGtNEDs2ypJPM57rMuP7awa8SvvuE9GM7kL6Y3Ek",
  "key23": "4Qi5btkrPNsqM2a8Q6BVFuFfcKoNG7GBP7MpTKoP7hQWEtq657kfDed9b16SUQYRMmSLtTnzvjfnbgF2HW73skpN",
  "key24": "2BtvA9fBvDuonYXfQn5i5nNFaURoRxDQhFpLyJhuqDynZx29GGw76JYS4GLdMTpkb2KrgvUxPYmYR7pXLfgxxv2F",
  "key25": "J3tPW7kepFCNXmoWSi2raUDUhSHhsnM9dJ97RvCjeFQL1LgXvu9FpLQ9QnaEbdqZwgvghZwJasxXFRJm17J9odf",
  "key26": "65P59dPoUUZFZYLjfU6mtcfTyqoeYqHptatSckyX1xHPm1mGV4iRapjs2b4UeTQx1cMD7Hcx9QJ1UaUiSnSAJmdz",
  "key27": "3FE8Jw8M5gJZxhfD33QWBvwbyJTUoefcqu73CwVfWEztJjWGhKuvpCXjDgrUtRsymMjNJ9xmruhS7DkgBTZ2YQoc",
  "key28": "3ip8YAGetq23QJNvRBi9Z1dLQFrXhRYaursf3ncCRjfqUk2iV7KGW7EzP4P3XXqiubiToBwLMdyBdPrxZx7Qps4B",
  "key29": "48XZmCjAtgnttnmNqvSZBp5VVDeaCu2BnvQ9tyUi7TLpEbBKhRPWuc7i1nT2GqspGzNnS6NtyC8MVPu1nJqSMutX",
  "key30": "2T3wS5MhDQbxogHZCjVtbo5hf7KWBr5tXodZYG9eJhdMMoUNMjAYpZhxpgFsaVjhE3B4ASFgaUUKGnGXxAK74DUZ",
  "key31": "2ueWHtRyr68rQQW2bNjQUnAE7VXMc7FKzfKkXqLPmpM5cxxNVtgXDmDNw5MMpX8D4xQBQMSNC5MGGEu9UHD8pQHF",
  "key32": "3pcZFjtJqZjCkcdyfJV1GFp5Dy7mcXhYmPkzS2KVrh171w55ocVDkMp7tq541CZiHcBnLVaoNexT9QaezYBkK9kr",
  "key33": "e6DAD9krJaZtCkqJpiLvWgVWBqw3V7iRTNXBLEK6z9FVHaXPyTvUh6mXmvp6PRUjHcpjoPiQwWcZJRPnJnvrXkY",
  "key34": "3qpWKU1iGpa5MbxL47gmut3gkxaX7tzPfgUBs1t3JUJw6x9aeVo8pjdoCY21k5yop6U81vczkYJ7LvXokyBrkYAc",
  "key35": "McXUG9GjupZhhxNfX9wnA5EvpGioF96r1SSTzBVKvuNdauSPjs4HVqNpRkwDPanrPVE7RUE1WnmAU2LASUZhRjF",
  "key36": "3B5NaJ8JA3s12jHEwkcRxUPvk5ahC4MyKUiXAuu5xYbZgLAjYs2AZMbdTDeNjt1hSPpTXgaT8s3hWHK8SN8drYEK"
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
