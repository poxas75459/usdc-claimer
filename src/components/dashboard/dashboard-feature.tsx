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
    "5mvrqWPquSrErMEvAzG2suTTadLRSHBHpFVAbRhFg5bHgbEH3WWaQcKF8j6uL7Xk7Z8PjxX3CToywSQRm6a3Sr2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpokJvBnbXSZebQP1vNuQF5Bfuv9jP1NTuAtQPTV9MXShDyXfu7XX5YcvJZC8fJQ9RKWipzep7PPC6b3CPRnXRq",
  "key1": "3jKo6uSbvPfqrC8dfE26cB6dgb1wNqzd6jFBojwk4eMFPXQMutV438SnwfEHwwebr6qnhwtn74t8CiHMZHxxtzUp",
  "key2": "5WechrV5GD8kgbjGyTFNjP93zCfkCYkZpoAG5QNtztG7Y14PNQoUqVDqxCwwAqb7MegYjUzVHFuaqhGkCdNnYSNR",
  "key3": "4smUG6WiALjDiokYBHs9U2hAzLWXHUdKmyWYd1Gwxj2dX5qDxvJbTyL4X74MxgBvPQWmwCtGEeMYKtmpRRAXd29c",
  "key4": "sVk3jafcP4RDzrY7mm1d7NFjeAFDckyr1TZBEa9g2aH2eQ3aAcw428KVzbWJSMdxQUAgVoepSVSP8ACzuhNVy1b",
  "key5": "3oSw2yBrBhRvCasXEoBEt5SXcbLVCezctruYxECUVLkAo3LyxPFoke5qnVq9JH1m88zz5rxWZ9Vzjb3GBrgAMXVH",
  "key6": "4V7u5hwKW2gwqkxn1BzSqhKHbUfh3m1VRtwvEZ537UMb5GeYjbhrLQctTG1zoxL8R2VUykGtikd3jfripmyoiEm5",
  "key7": "29thaUZHwefshfgZK4oqxJHZsLh1nr4EigiZFkESXKQ9Eb4A6PHZS8oABiot97zypEYFA2QFqLV5pqSRqqCCET4q",
  "key8": "638zJpaUhhxwfoUojJ1tEpZ6VZuVJz5h5EA5TSSiW5hMPj3NJ8DuVGezBcdbSLbHaTmZCNBuwGDNig6oL23MKZ5T",
  "key9": "HnWgCLhwtc8Ec9p5AQCBy5ume3XNH8jPrXXnRhu6LRBnQT2u6XWzmkyYeFHWovz3PAhN3etYYrmWP6RRFpAzCHb",
  "key10": "3BJpzSesQ7F6YSmMCdVVHoiCm4KPqTgGnQkWJw3Jc4ajRFYUQJKzPZVaBHKzqnwMZ73geDBcHYijUqjVoETEDLo2",
  "key11": "2mRwMg1huJ2rNBtLkZVnp63QqwgsW5T6QgnQzYjzgtvivFTLgGoaY7RLcgErH9jePFDFSaShzp1jigEXeAomcLM8",
  "key12": "GJH1CsdfkhyixPi4zbyU3KCEWPS5qqdDP4HERk1VUzRWbpSL9GZFNWTTn7yxopZhaEVXXsGyToePr7F3zgy1Yob",
  "key13": "SjErs1QkfSoESNDWR48ruLoEwSZgWvFpqCdjQoYtbqBrL8CtS1Cj3A7BU1PHuj6SXmGkMt5Qi1GT34RapMaNAVK",
  "key14": "56Ewfp8j5PU5k5eTH3UaeqR3Fw151Dp7WBa4qn51oTC3mTWX7zKFAExpZasKJreHTfpCq7XijeQeYKsqKHSdzsHj",
  "key15": "3jJGdDF62uV2HMNWzyYCPJsckocoNmiSSDCCkXiDF9Ka7VG61VG3VKnW2YTCcDLwvfejpQBhvv2mrjAAGf7MvRwj",
  "key16": "4wu6gwECMWKvtctpbwjC6EQ53Nw6K7CUsVuaMVB85hVbUXcdNxAmkos4f7cmL13ejEeA7TGL32xRoVVqEfy2pj9S",
  "key17": "C9HxxPjBMFEnnmk74yA6JEVC9Q5qvozLvtJ496D1kuttrT5FdhfA1cX9VVdP16g7jTumLfY4sh1zNb98WhCie4H",
  "key18": "4TsGNGd48yxbCEvu7oRADDZADWYZ2z94ae2K3Lv9vyPkkrbUbLi6YkWoYTzHtjaNcTqPH3LWaaHiDS2fH9oaBj81",
  "key19": "527xgfpD6FCrXcY1nw4mrNntLYa3pugS1wg3DqkuBN9UpuQXSnJVr7wdfvb2nj7E4U8wV11AbsvUtb6M66zNRZSy",
  "key20": "2j2qsGzAGNLgsh1yZ3dfMpu4t1FPMVzSvtvMGQhCqf2CnqrXr2kgSekUXCSBJ9dpXCuQYihG5C9223v4JpDje58B",
  "key21": "23difo2NYoq286TZ39Uo6zufycKX8wR7nqdpjcND68bA8BFQsdNUMqFJAjkmz3ugunQUKm82KU3FFxDJbB5E7vCU",
  "key22": "3SgvYpkCLGdXivaFe2Sv6dHyL59TMTzqZjYuUrw3owaoPBtxSV653qyAwnyxexKz73d6Svt7LMVyMDGZ3rtsXDMx",
  "key23": "4R8X9pHfiLRjs4ySN1SLb3bPuFLhYaUXn1QxD1miSUVvmFDk4jUu2HiUDhttS32ffF1ryjccUHpNcS5cx137Lmud",
  "key24": "B3nytfQXsJ5cpXaVP25trhYwEkDUKsVFUsKV2jun25tNLTCm9keYTdNyFVesYXhf8rBgn4rvsMpTJ71zgW7jsUN",
  "key25": "3PvcWz4mRkuHUhNAbH11vdhcTCH8b61Y7z9Cfby6zyUug5A4raw1uPQgQxyxo3ufe7cRzHigEBLBUvds4wf5RR9N",
  "key26": "3q6R2kEM5psKrzZggt1i73jTbdCdjZ1y23iFsjxZaQFnk59E4kkZWPUDiYdLc8WBY8N2Gtn6UhFWYMZvaWd1suBA",
  "key27": "397cVa1gmYc5FvCyaUKC2Vaf9E1vBp6koy7249kZRAtrCpctfvpGgCgAV4skJepmAhmYw3v5aNdxoefpbCUBzmSU",
  "key28": "4TdUf4NVatQyjusmR8VK2xCjHXCkMj7rfhqnR8pt8A4vVCaFWnfM3PYB8q4hQ6SHVRLAeePYoTQVipGNBrW7dSmT",
  "key29": "4oewB5k9qTuE6TSyJxNdcdDP7hnKTV8TrUUCFVLAyjrD2zk1ZjFVAhAJZYxCDQ23fXAF9wqv7QezNJEAwoDc6uTs",
  "key30": "5ePe8Y3stVMGAhU1jgiRVv1tWViMU3seduzttbddgZf2AvgtA8Z1GseyLjrx3LjfZJ9qXsGh1mozRzZYpEHydKxQ",
  "key31": "3oddaWXkfYEkGjUYEiEN3K1tFY8DsWnCwAS39m2PG8Zj7GtbzoCKGhfgmwrg8Byw7oY9QuUPu5vT4B67NJaovE9c",
  "key32": "5L7WFurdQRBW97oHfnMxr4kdEtvnqY7wu4ZCNc3LCXFDLT5QKqxtw4YbwiEcte7Cr4NWGqJsKEudLoQVkLvjK3qs",
  "key33": "LwVe6K3u6S9qWKEt5EarSSzcAkCsaPmo68WnHzPdcnwAdgM7CYUMnoWgEkpc3pcNdjxHi7NY8kQg6LkpJLS8yC8",
  "key34": "4uUyuwgBy9Bt9zeTQhDD456B1jPQ7Mi9xcuzrqmSQENCQA1RkzJgV3kVdnkbndFaowvUF7ohXRbGLnMdFjLmqw51",
  "key35": "2xz86RLTedCsHtCmGJSiFg9Fws9cf2sxfVpzCzcdNgcAPuZd1f7KAY6WmrqR3CMksRFucKPdcKLkS9u5CU18N8WA",
  "key36": "2Hv9Y8mC6Ky85JfpU7aJ97tRbcSBCfabmavsfRHhYysvL4dbnZqKAFyfHTS9G1G8p3sR8M7iCJkn8J19NnQPsjmm",
  "key37": "4ZybyJfgYeLDZajkn9E4rQyBec5ndgZQuwULS5kkfvCvbZ2DBoQLbCX8uyF1XxZmbVsUCP1enR5ArWjJKPXCgo3A",
  "key38": "hqbinuNxG2b5mNGU9wQkSLcGbVDqpM1uc5TqzpcTVU6UAhauzbxXhs6anfWkrPEmBcwnZLUBWeAtd5s53dF32MZ",
  "key39": "24kC1TzZqYGPa2Wd591EcLLZ7jLpdjfyLXehT8eScsDK5aoEDXXcq2ifpGBbfUX4ZtiE2WKdfR4Pmnptqi4hrH68",
  "key40": "5HTJAN541hExKypfDpHcpvr4CUFoNjtqoHoCTcZ7nWGe2vhcWmud8P6YcSBDZy6onqpsdEfV8YNQJZATjy2oHFGJ",
  "key41": "5BwiYdbKxnUtG3UpzFFRjrSSA8ymjdtrTdrnL5K5cUh8uULnLtmaiq58Ys9rRQbv7S1oK6koWVnVNYqTbVQJEYy5",
  "key42": "5UHAm312CPrTnoJvXaFbyZHjN42bePdVrxvtuUj1bDaS8RStYx6jEuCPKRLrrJgZzUoVLD4V3zxmQenT9jifngES",
  "key43": "CSnuibJkjRFkHM1oBBBRu99RuYKVWy8WnQezPqG55GFd5aP2RARzNcXZakRKKhjHUwXQMnRJTXwQHSADfbLv6rZ",
  "key44": "nfVFLf1Jg86ZpbDfejSiczhXHYcVakTRbQrHn4GQYsBHpnwRPhUi7m16ViDVReYXDnBiFvSKd82H8rmJWD3qLKb",
  "key45": "4MhfpPrvmF13i2tjmaPVqfsmFsJRzU5xsSV1RjGovN5y6hiuBNh6vaEAqEi2Dr7QDi4udrrACrgMdcX8RJkKVqez"
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
