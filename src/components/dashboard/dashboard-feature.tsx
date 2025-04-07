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
    "2XEJ3M2Lf5daNWdR2DSfYvkoeKFusS1jMY6hc6HK3c12RM7gZbiC8feWaAkJgQJsdnxsbyhKt1y8FjE5vzzsNWDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rut3A9cryMTbP1pKyEh9PyRndwFY5EcyS8wg8BnUs8Ao7f9vdaXHBwCqNUfhmQepbbr3nD3F4dsR71d6QrnpkmQ",
  "key1": "giKnbA4YhjXoTC1wkm6K9ptSTmHDrpACmjQ52iDJgMwo6jHnsAAtwnFfx5fUwP5fF8Hi1P7AaasSDFN7J6R9xsD",
  "key2": "SRUpNJ48JTWABLY1nByu1XzcGieBHdFz8t5cqqqH948L1qTDS41cpCEybJChf9vqEusjSgvVmahRncxPYaGdtAm",
  "key3": "2Uhsvyygz2WGYkf6tB5zDz4L3Vec5i7KxYxzEUCCGjWASqNbW3j4rQb6ERoVuT8QBJ8px4FshPakhmeJtF2w2TTg",
  "key4": "4wAuckEMK7qwnQgKGixhsy1HxZAwitGdETihohhipNFQZGUk8XmV6aQEiaMGxH2VEtxPNvjnQWg5o4yuaiqekciP",
  "key5": "5vP1UEBnyx3rZzw5C1wnPdY3zmxMXXEdDFgWrucvNuihvAtYgFkJK31hwVj9PbRTUCcDG8GkAQf5JpAwwSqUfpaf",
  "key6": "3NTPCGgbjEipY7puis2a52YNHaNHc2SFX2uHUB7qB9vr96V8WnWbR6fvNcirwiMmt7PqEtFuZcPA1dFwj3rzW4HL",
  "key7": "2rWqFDy1jhgPjMsvUmzbb17CAwecrtYmkFVyc3asRj8aeCEyVzCGALXvZuXuuhdHrcTDrsgAGbDZxS1CwtjQcPTS",
  "key8": "44Pi1ryczziTmEKZe3BLXZkPN5msRoU5Xz7PD8ZdumH5E4YsVcfYvpfccE7dNFk8hUGFcRJqSibniRGyRYHmF2jy",
  "key9": "jxteWi2t8uroZY1mhnuUjctmsLNV2q1TihyDENxv8MCpJ4YkeMbEztLxLv6ffn48SftjBFmeSmBCcqasejJNy3S",
  "key10": "U1Uqb4dotadAUUK4uUnV7fZoiBuo3ALCa2oiYkMbFyyfVx2yLZrMeBR7AwmRBqifMQfUcAGVnTwkVRTToBGsjfE",
  "key11": "5UwKZEqQnMtHjLLubxHd716Fw9xGvG2ssumswSuhJdwkkF45z1wW4CUWju6rVdxpS7ZX92hT69vKp9E8KnkL6wFb",
  "key12": "aLdzeaJxZcNjUt4Gr9zvLAA1PreLWTLkCDgTtFC6grgqKo9DP9PCT8HWhK8QNtHsbxXGV8HCr3wQ7xvGwCVvtct",
  "key13": "3C4CCLFW6NVaMrpNcVMECTa9Gk4SswDq3sJ4rNH2j2YJqfT8co1sZLZHaKwCWTUdGTY1J2jzSwHwwe2acMbpfsea",
  "key14": "3CeVHJvkty8ybCbVFqPvhN8gYVf1Pu26dyAk3gJVUqFvkDNLPcNxgbxXV1FL17qVKkEyj2nEeKprKhCiXSASpGgw",
  "key15": "622Lm32KQnCsnZSN1W1H3QKQ5vtz8WzDVsnao3sp1LgWwYN2bGkddv2jKqRr8PMeyQudMKUa55h4SN9D75fGY1f",
  "key16": "5RFAqyJ4hpWMRL2trjzEtddDNfuVU7frGNGWNREY7HfBk2FKTs4ejPaBPFSfusEnYrVjjaUJJnveWA244688qMV",
  "key17": "4F5ekr2NhopVBk1VMr7agqx6Mxx9SXVy1eADucGcbMy2z6LugVfN9SgZXnUzPrpJx5zJByLcKxAmi2fq5Re9Wy7g",
  "key18": "3hn7v2Eftk6zeprWcF1n5qr6faopDVcYjVMDEdcemo2Jncqz4o7BuMT8EWtSiUuzkovjmt3FfKpd3jzKi3soCYRy",
  "key19": "CSdGGzXo7ru9mESfu5yBpkLLNmbgkKzi882G75re5ZTJn9ebR4EfC6wVgdgxDowTXwxT7E4Gio4zgKp3me69u8c",
  "key20": "QKzb4aaMWksW6HxPRSLcxLZixYyQ3ffJoN1rrYQ6bNajF5HKNu4ZBZ5UNmg73zPC2Zvg93QmR4QSyZbQrCHf82z",
  "key21": "4evebSLMurFsZt8EC9goexgKF7YKXJnpRG7aA12f5TEzsH4WZAo1VCheW2zBRvRtP3DvboByUZcPKiz7ivYZrQRJ",
  "key22": "5CNMB2zRPMVFjDLyGTC7fsNP9bCW9eQ7ExkHp7Si3H58zapm2WNFwG36ZMGLz1bBpKpykmZRRNcFhLs3U1nFk89k",
  "key23": "2yHZqbsUMpzRf8y9ay5yDFgB6dPrwYM2swgUBqkdDrPQRbruw5vnNLDWezg7nS5BZmNQuUfVgTRQ9btm6xqYzDXw",
  "key24": "4nbAZpsJ2xvoozDoZYL1Azsfo6TUzF33uSHmeGz364YVXYGpu8YiJdjjWRVNetUAECxPgLF3BFqWWwgFxWC88cvK",
  "key25": "3vdkBr5etZGzCkurixxJV6YpsLrLHahiei4FCGJhdUvSC79AT8zTAYzXbrTamzdJXknyhZpxvrFg6wTJScqqMGSn",
  "key26": "5j7nyiWfWj5skWrZd9zU9YQbYsMLxcVVRyqJE7uVwnE4hj74QggiaCz7FTSH6L6UMYs91zh5bVLWpKEMB3dzh3So",
  "key27": "58oVGjYZ6V1VLxYE99rxDY39tttEfQVdntFoGoCnpvvx8W3gvaU8FDJbZ1TSnWjs98kxtJUeJKTQm3dyPFtvrqEH",
  "key28": "3XWrQ2xXrD76oAbhjnT4cUvLcy4uD1sy3SjWSLHuAWkBTXB6cFf7CpUNphau4NyVhgHNWp4pztBJYqYS5MXx91cd",
  "key29": "4PrsfEc41fpJpze5oWHNinQfiimmKkj7Wu1nFP7y1S7EydTyiQ1rQL6DPgq3EiW45bv8wzMx1AmVJNHhcZQhzGLj",
  "key30": "5LXZWJpcf3wWZxcu7ERGp9LyGJ1ZbW5MjmQGfbA7NpJM8BdjS5vBRrXeMgUBszWbVb7ZKDo8AM1hZEPrLATsM7J3",
  "key31": "2DR5q8APT2QuXdK9NrkXhWeH4kVd74Vb2xrR528Sf7KyRzYJfZpvZanDHZT6xKXzZBk5vTcSgG27hpQJKjAa1Fe1",
  "key32": "HxhDcstBmJcKgNjKUEtNspJUpEwRCgfCt6SC7bbWbvKL2fqSjGFWzquYHsWJNevWdfcF9mok2XCAvXWJfXDE9GX"
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
