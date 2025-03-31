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
    "4WzE2meanDPCKDqJqd6fgLSWF1ojJt4HzS9nndEDHD4nXduMcpaXpLN8PBVXcfWqMZ7Rj8p7Dr2kH8xBQhD9sqYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZBhA6Wmcxzkcg4DaAzz8DixG7sg75sCNq3aFx6ZJa4C91nXR9kNdDcZRzrrqRicET988WStXRzcGk5nkgGoqg8",
  "key1": "2sKaqQCU69D6nat3qSD66y24hSa5uRDHr7usDDY78a825pBGhj8FcV69P7HmQcmhFb8ef2jrSsJ8NRFRHNjfLejx",
  "key2": "4LAHHwKr8iUFZminJfGJB6zUbjffBAuDrfWu9ZqRNYqsdK7tWVA6qtYJjMvvahdxSEApSGaxZW7qvWecvtW6yFB3",
  "key3": "5MsS8XsaiQYVCfGNXFWQEL5jxDukgC1PjQxFvtazjppxwczxzYakyokKdjwYDKHyi1p5YEvDT1XPmVQm4fDGYPM7",
  "key4": "tFpVAr6Zx6cd6HASG7PhGKJevpNCY5GTLHn85AHYwdNyqPw57tcFsXJaQECArMxiFULBopgzyRg82mK9BEK1uGG",
  "key5": "5yKeEXgZ9dbPca57DFWkaVCE3HhgfTPBaRBi5kdveWsVEmpyBzcdNb3bzX2ZbxShegz8cn9HXBVZpjehbbfrmUKy",
  "key6": "QHiMmT4mFyKhjkvUAMFMDET8kpTeSzdTqDPeU7bLvF49L4h4uyYa2hHcMV3zvodL5K5ratCTLcYV1rqZaw2R3W3",
  "key7": "4S6aLTLVqg9cuMcAabXzNrUniUjA4RBnA85fVTy6znK4Ma5QV2hCjgw5ZeGovg6P2TNxyaycc1pyA2KYHexWV877",
  "key8": "4AsJ4yzXt6kqdJu7QigAr1FkC1weEX2DBd5Kx7SZ1GToYV3H5oBLjzVSGCpbnH8H23HjaQHHH3F6mNYXGQQPZi7",
  "key9": "4KXzgRj3k1AaZnC4mNPUWid9CLbF2BdjgZLpsE1Pe4M9rVQQasgBm4hdxBHZVPiqEDUEpwDw4wcnG7t6MQEBDmjV",
  "key10": "o6xcwyEyRgd14UxY9T13rxSCbNNxbm5U82Mc6auaVWJVKEPXWV669aoF6PWZGdisjhkcq897ymbmRktCfiioQy4",
  "key11": "2J4Qq8xFUu5cZ7rv5N7Zxgcp4s2eL82fZtwacKBtrSouqXPn49pgmnPFSRKF8c4HotvZodhXLvFREv8qeqgcbPSZ",
  "key12": "43oybpDQ61wtWgb69ZprQnYj4PXGXHhPhdynJRrTfpa5HGwVTXBDq2RGMKKVd48CT1Qo6Z94r8w5oRLuTQimYLAn",
  "key13": "47u8oLrrMSyCEcToqrzUUn1qPzaTgFnydrV4sdb8joJLdESgUy1kJi5tb9FbCJFAmNf2ioYmhRJVEhVxeFcWpP7X",
  "key14": "3WV8HzVqUt9GWrx6Zki3jSRZdTwgsNiPTaPgZsFBZZqaFg7WnLSKRj3yT249ts3HnxBKSMivEvBLuFA2ap8tobEy",
  "key15": "62yjNYu7mhBHMz1Zr3BdmhaD1ZXWbC8z37DqyZTxJguaFPWd9hCf8rJEUjsPH7LuPuQWr7G1pBykxk12AXPqR7cc",
  "key16": "61bB6UbLFVzCowU4Q8RRXqfqWCriVYrvsZfgyy14RAyFdPo6vHpRQSTnUbjLAXPCVCWfKCxmgBs4DijokPAeKiEt",
  "key17": "3NYRoAXvfXMRy8FAz6qR67JTh9QhFSHM5sGR8zpcAfAQe7DM71dmwJCKsS3bZVvcDpkr2YhpJEkYHucDcHqZACjJ",
  "key18": "49663zwMku5GQESw7VhftvvbkSTMuGkizRkiMfqdif9T6NTpjnMVKNEPbgCvwyCjze8MSgfcifiUhDULNR8jZF8f",
  "key19": "3Wekv2f2aMei1syXddxwgRVuXNQqmJcCKKgPWvnc9sMyPbZMgiV59GyATzZckoFiGvDsXi8TtRkXTw9ttnjiU6gC",
  "key20": "HQFVNyT9JKyS7tHN7bd2XtWBbKR6tWoRn76fHQuxPEWmAwF3MQXBnDpXskhAdZDoZ73A2RZgezg4ywXw7iSK3SS",
  "key21": "65h7Mq36KjiRDqVo1vg9TcNTBb1EqcsGvZtgs9oKmyC87KCdfHFhuXEdysv2aeXyzqq2DfYvBmnyhuskYjSg51hJ",
  "key22": "48EMo41398rmvu5urbB4fMm7Piq1oCFT3exLCg8raokiqxjTcRkef9tiVnBuemv3rD4bJokubcquXBoGsvzxQS1C",
  "key23": "4GCh5Aa12wUPx5Wj1xB7tiMT1NRTU5CQKkQMAGvD6pJkv3aC3yCNgLJiGtP4TaN1XkVYVd3yErGtqwgMsGEMv1mF",
  "key24": "3YgzFj7zCu8KHX5Cj4NmBPaTfMtTWvkofTkcBaJNWzSyFFJroCdVRYNQfrw1u5e5WhD3hMqQm7drqxUjL1hyQRgb",
  "key25": "J2ZnxjCkxyXESYDme7qR1SVknyda95hWZSbApNhG8Qne7KKKhVKRdUYEgC8VhWHYnzCwZSeBuqobWMdUrjKx4i2",
  "key26": "4SbMr5TFhV9mZ2KcGarx3uvtG5eDXg3fi7Ei72odBJGo4iuyHzNKZRnSvYEHe3YVURooTSPe9TJrDvkLpqJ18VCZ",
  "key27": "2kzswoVrnqrBNjsF5JuSGrtK2vHJoJpczcmcstooF5tXarmDHKHEpY2VnetzGpWYSY5GeAZdKMTLhCuZTbKR5q48",
  "key28": "39CfWCattxGu2g9YR2SudgKzKGwwqLPwLBXBUJsaBxEARYQczKWCxF6KcVbshQAJiYTea5UBzNSYA8fLEWnXEqjK",
  "key29": "4H6hcaeLeUsrzan8XWVdgj97kSFLv6RZG9HvQnCVKHkUJ4G3AYsKK1BEwJPAQLWyQ7hY1zibpyURjNj1kuW4cNm7",
  "key30": "4MpHFGn1nNbAEsuXeHZkoBK4Lccjizx2hfvn4iFMmwHrmktMsH2meezXhouJCBhk2fGHwAxprLuFoZpE3qpje7dg",
  "key31": "t2sZ51HNyk7ytZvsHjfZn7PsgU8Z8c1dfVT8mNXCFaV42FWMZoZPtYqpCPDBLYKLAjvmLizr7MPPdDWQ7tjpkC9",
  "key32": "36dWZpdvvfhWAEH3p5gT2or1Xr4xLYndZc2N9B8LwP4GXz2bdQGYDz5NmyiUdRHrmLfhPosGuRohk9EvUtGPqoeW",
  "key33": "3EmJPM4GqK6us7zcDppwwkRpVZ1jeSpP3dU4fjhwoMfRphc3o9CTWSAzd2QHTq8KfxUV7KPTwus3nR3Rud15htgh",
  "key34": "5ELq8a7PDvrkngA9mEjZsPC4xbsd4mLdSWuxnpPfcK78vh7wpSt6zyutzuPpH7pskPdYxB4gtcgBZbziQ1ruUBhD",
  "key35": "2HiWccqWQqigvRL9pw7Ej8fQUM6UQe8P7z5aoVMmD8ZppwAhHfSwfg8nif1GfXx2tzY6eyHEjCYYepoQ2izpJXbc",
  "key36": "gNUBj61R4TWbjybMTxq634GmAkmkLWDTW3d9eX5qWkUKqSrQih8gobQ1quhbuEgVNTKr6jEt8sYu9bVn5x1rxpC",
  "key37": "5Z3cvbYBTCLBBFQRoVHJBmHYifUwg6SiY5ExoCCJeztMTgPp5g6aBdJTYzXiiRd44XtCoE6sEncSZ6FdwjKMGhES",
  "key38": "4DoKpPH3CwjeCNgdgXkTQno5vVgMSNiAEVrXkPZjYizJeKHcHWA7uE2TSLJkLet6CUKaKHEEzS5pp6z9BjHjtESW"
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
