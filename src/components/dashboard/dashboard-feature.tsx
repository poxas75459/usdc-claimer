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
    "2htEDSzeeMYkx6NNmcnFWU6S8UkZ4CJ44ymWkbuFUxVG1RjWp6YE6YPbPGzBNW7vWcLfhcnk58csoAn1Uv2tGW3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eX6vmWyYoyghsFWRmwSxGFDXDaF1kLZktuPKnJaPW2XTvmNVAWVWUq257egxSK3KnwabCxn1eYFbuagddQa5zoJ",
  "key1": "5NVersF7faAJGsTfkRhd8zZ57eAu31wJiQ7zWSNkc1h2XYTCgwh5FDfeJng3Q8VLQRYCV2oHHC4fNiztaL1M1xPd",
  "key2": "2KD6hVbXwgrxsSsnf4s6pdJHt2n3iqmCX4gAw9sXJdCxifiXi6FVpPaP9WxutxT1YU3E4zaEma4DZiFBeN4ec6ug",
  "key3": "4S1Ugt1fJMbQAquS6BfbQxKfWjPGCdUJRHP7U5u6uFNqH9LpBakwGRmVXsqmqaWgs9TZNas1aHxuxadJbJMwA36v",
  "key4": "5s5Wt7HwAo31pZadmhqmn6xEZvxvkigY7KCGdhcYfyhxXKhj3yVi24V9ib3ahRQ9qsYceia8Ytvcb64Bsf2yCoGY",
  "key5": "So9CYNw1sjULgqWLZu2DzccpbWc7z2cV7r95rdjSUnM3iXTy1qPmHzfKkJsrf54PTaAQWMUkmVhcgRBwGhdey5b",
  "key6": "2UV1HRDKznHUiYfRRFUjStVmjm8X4eHeTpDiHUeZcfwixPVqG4LpszVknGx9VAK3NqCkJQTVPEf9Y5m8KYUcy7ds",
  "key7": "44j5RWyMQQVRA3c39grKikxiRaH6CCQJCuqYgJuXrG1RabMtsAmZgaL232DsETtTsdpyGmjhnwbbJogaFWHfFpKh",
  "key8": "3PTP7UQW3HvL5Gs7CZNiri9FZYLhPGZwF2qLAEgsS1dfwRNgPn2X6258HWEaWZoe6yTJ2Q5uyRes9gAx3y4JXuvs",
  "key9": "5FXQ9eH26dyQ48tssYQNCXvo3Tt79i6skv4WYHbA5L3XFSHApdM2LZwVfUXPVNJLoHkJVLiwZzLxTDBfsMZVy3iv",
  "key10": "3BHVqqhodBX5QdJp7xDvvpTa9BhH9QzPWFHkQ4gxmvSdoEYexsSDDWCy7U3jKjNkGM5L8HqTSD6JFqQWL7AJo2eY",
  "key11": "3F9SDnr5nz1tTir7evqyieNFKK4NJo5SAcj4YT3U6z8RkXDYqXyjwScVCc5SXJx3mUo6x9o1ipnaABgpiR5uNn1H",
  "key12": "4KBUCToCwhDgW1vjLK5Bg3WcPRoJxVvhSjaQSBSEXtDYMZewQsMSSfg36bD5QR4SoQZPLXDdxSuf7vSMsXmnnpe1",
  "key13": "3aADPM4zvATcFwx6G6i3w6vwayf4kGPMR6oapqmY5LLrTGS1ov6xHBd7vLUnC3EAVCCCwFgm8rUC4zrWXWN2SioC",
  "key14": "2gPXqcassKj53TXZrApiUF6knk2dwhVSBcYWKbh1bzAMbwVVF4KDQ5A8Prsnr9W3YV65NGuxTA7C4RDEAkLZYayZ",
  "key15": "5z4ErA24x6fEnZKNNnd9ScwLDMPj7M9twrAHE5z55CAv3XSkbsUBGYNmrSfJvRdNjN7bYp4HJW53wNwBQGQ4Quac",
  "key16": "SJJpbZSfpYgfvU9riotLhHzN5cn1cYSTeJ1mSQjPRykXntxDxh7wPkYeDkf5mqixLvXTkBHpSgcrzPwD3QYBi2o",
  "key17": "2y1373Lwe4pYzp4Tpz5FvNdArUf38LtAyBs5oERwhvymDaVYV2xeXeH5A6bou4j4QEqHKJY7RZVc3JGEPmf7aKjN",
  "key18": "3uaXj4DwQbpK1tDqxYQEdJjojEDaF5bRDthLQHRSP6bZNr4S91b8vfCig2HpHwVwdzV6tEsgbr4JYyHtcsFxxD8e",
  "key19": "49bYWJQQKpgswfD6ZPoqqnDvZ2wfYrT1cxi9DJwsym9FaR39R4zFzffkvDEFidFckTJYHnc46rWLN1KvuepFXpX2",
  "key20": "PZENaFQ2KNTpFV3xjNdUPa6JgN1LdZNFeC3Rgs3KoXdttjckzcvzurbpaxRTDcHmDQWRH7rdERG1YcZWkENgySp",
  "key21": "4XdDoTZtk7yFh2izyCioJyBnNfkMThoaRXL7KFYVAE5UzA8Pt9v6DxPxob7BJaK8o3XsEujVqhoiBgbGYorjkLtx",
  "key22": "213hpKZ2giBSQ1y5oHm8txZQVrn1JX7XeWqXtUkWAiCKd1EdC8c5x7sNT9886x8WSEt3zSfoSipjDQvA4EnGRKfa",
  "key23": "3uYcmkzQdGiUSMn1TSCSf6xDXkFLD1nHASSsaMpe1FcJ58CxbqKjuQ7NANwmXNet89aPcfFqJCSLFuJQ81WmKX4B",
  "key24": "bPwWWGxeWVPzqahwARJECH18sgy6AqiLA3peLrtJznrPFnYJE6DxHKhZhSq8sV553FzwyQ3MqoVZSmhwoZrUumN",
  "key25": "G2aH2JG1JysHmKin51x7A7MtH9AwAX3KNKvcyRMbpaqyoaJNoNR9wmUfqk2JLLnitw1ceHStHM2gRKX1o6ezMXV",
  "key26": "4ibCb3gXvFH4Pjc7zHKhwvESVmpU82ox7FBJDmCJD1U78SD3vodtAX8VTsQLdWzZbg4jWYoZYgRFjVDAG1WHqqJP",
  "key27": "5CCuJooNpB4H3LVqePZpFmBLdX9sCqiHw8VLgBEPfSavL7fe879wSuugvKzCGRjvoMBZyAPJQxzCPsVZkj3JUgog",
  "key28": "2DaTQNymytUqFdpnY9n9xf61uaCb1dCAGQUebUsKPT29sA6G78mQ6JWjxWjH9CEirhpQD2emoYbgfcQZinW3BBrR",
  "key29": "2xfqjx6N3jnq3dmnBAfcNfE8Msv8cUy89eCYrRZd4G3wB1HmBELKmZySVxcWgg3R4U6EZYGTnoqJTKheUmTqEmZ5",
  "key30": "4hHA7mpjiiugmh1BMasu8otpJAG4VCccgU1dN3TKJS6zxjxQ3kdcpcz8VmEuTfSBYDbiY3yVLqT849aFsw4evaw3",
  "key31": "5NPqzhoBTsQbVFmrMoznr1jpRy1mWkaDBdCMQpKhASscjHX34i5gcJHLR3yytdyozWE3GH9WaeatL2PxzW2NGHsf",
  "key32": "2ZquP4gpr5r3WiTx4LJpZJstRhUkFwADHtVMaXU36c8aj7DWViZS9zmx6MHmxSkze4FLqD29qxrE4SkiFtcgzYpD",
  "key33": "3VRx5mmpVCjuZgSaoUkXQMwiQTH3FaJ3ZHzFqF2AXAEPKrXbd49WbJpbkb683kXwgLXjMoDYZqF1obhtAQ6j5h39",
  "key34": "2CEogod2MCysP8jdwvG5gpsYHQ5omwypZqo5L9WNy3kxY7QUB53fkiHn8QufT4VDq1fh7kXuhPteq4jQ3sUb52oM",
  "key35": "2fM2M4NNPwkNGg4cXkbv19KE2JstqTn9o1avktCJMN6BnG3buL4QGpE7JGmS6GevRYz6ueTB2vbX3f8AnakfHhCN",
  "key36": "4vSF3K34t9n8wPnUwWuzNsjvfFFQroTn6TU7RqTc2v2QTnXdpkfDPtMC5H3t6WpR3CTbrC39pPxFZYj8nrkMXgx7",
  "key37": "5vShpZiX8iQAGsmXVqXAQAtXJ8ihGshCiCof8E9DDfo1qQMCwocfD6VBwHDRQ14ccNPapVERQojuHxfR3nzUhfwX",
  "key38": "5w8851vnDYnsfuw84WK1f4mm6uD1DGdXqkqmdP54t5FnmZ7abN9ycNPUn7pQmN24RPJpcvmeeMbucG2iqNXv7zU8",
  "key39": "2EmVAJGemLgYefuEfYTHrbXQrBT6MLer2VWMhYavoFuH8axkY9Yt4NC4DVvjZmrx36N4sHgTx8KEEiSLv6kwVWFN",
  "key40": "3kxz4betLL2ek27Efxvuu2yuc2FQXqb4sJD1bvb1EMgDDQwKHkkxckrB8rCcTCVXXmDxgrFYPmXcXgueuPZS6GDk",
  "key41": "4P1qcELTjWQbWgQT5WuNFjyuWbQdo5nG5tVWtbG6qk65nZ178i6JZvKdWauzZecgFN7BooEBaj1iWqxAyizzjH3f",
  "key42": "5UBhaVc5vREmqt7vsdpZfa4os7idPB9anmrD3WoKZFmSAzk3Fv5R6esLDfQDLU2gQh6DME5QAh4ELF5iX8bi34ok",
  "key43": "2mtSLrRpaME5tRUubPRKQjPLxdCUXjqdSjGQtrSt1TUhvjprCpEaqRLTLKNYdyRew6D1gxCWXGJbPDxXeiTE8UTH",
  "key44": "3NUxe41nHFzypNBMYQH779cMz4qggMZA76Hvh3bCtk9uMC149AQ6hHv5DZh8CFUxW7JxFCWHTuag8RkR9oMiAwPT",
  "key45": "44N9vNyrspW8hamNJJR7kNsHAPYVGZr8FtirCRYqnc2UocEZdFhNfmxuGSnrL7XYfwZSVXahQFqoTLmUoTy6Kzo5",
  "key46": "4aBo31RRAM23NG1GFB9Uv14NaCcW41tVseZBdyT9HqV9CzEGrejdg9zNhso75FhY8wTZi1AgdbPmn87jZCQqwiEz",
  "key47": "FC6DiRHN1W9tWAjCENenp9N73ihy5rcoKyPcadfhqZwhoFFkbYemmCYxNjmhqbMtPn5WJR9r7LQEwvwNWq3ys98",
  "key48": "2FLh1z5QSBqsvMHTZfYPfNHjD8gX5ndBXXt9NFkbKpBpUpDNzpGo3HxQgvvx2KTm3H2WKFzGkc3wa13SKwHn5TQH"
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
