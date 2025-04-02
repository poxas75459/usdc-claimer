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
    "4tcUVgZDbnMxbwxuW3GRmJmuMAZmgPTnY8L7i6JY6PoLU8JuyU8axDDPndmjfoNDzJVLXodZjXFoSrUytq5YWU5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMrHZeCq1jPyvBKkj8VKch5iNEQnBTtcC92AHLdMiKWpTJ62yttUSH7XrZ1Lv9cfTQkUfqufsdMYZkwXu1vQcng",
  "key1": "QfW5q35kgprQ4cWkUNj7pV2KiiEzEK8Kt8agL5qNBzu1aZxChJyD9y1r9tc22UVDQNQwF2mawzDpxRwFYq6oHd9",
  "key2": "X4FptVCfAUGezhcVZMZsjtJ2EcEDndt478U3kuNJwqmVca1R93bmW3XmhxuDRjTyESK7TT1C9DB1KYLewp3zvWP",
  "key3": "2ZdW1svLtrfytwi2pZEeh1swZGE9wFxfZ2snUeajuqE5MqjuYzAk63sCHamU2Yfz7cU5P7pU3xbLkWgB5KUWRtMw",
  "key4": "454nhZPCnXg76k4cc9cgJVduxDM7nbY4twWLAHZUqrtScDRp5qChRtEFedJyde2Chv69byzKvCZqrSWGHC2cmNJm",
  "key5": "3qF5zGepjaYEGBMHPRCttDthv1tAhF5v8jbJU6KzN112RzLJEG7hoAajboZG1fBu4dmu5K83yn6xQjmzNUBQwAuX",
  "key6": "4SPrUjPdocHrirpAW4DQGmGXeYGHVmDimymJtCgJqy2XK1zUkmgNtguPyctL8vTVz6BGezQfRFfEyykxqnbRdk6h",
  "key7": "UZPY7DcqM9pGr9G6aSx2G77KSF6kqxVJc5o95CoX5QFoXr6YBKhS6NYxSjKSnpnwBiDxUnPVArsftsNwdAvJzCh",
  "key8": "2U6dDpx6TdwYC8oNEJdZeDZzoPeg7XnPHfWwLTmwYU3dcFkhz6zz9L9V91sLB87tBN5RJa7yGFTT1E7wDSCH8r6C",
  "key9": "4rS3yEvp96fgqWXmDaWfq5M6gkWWAhDzkqkEfbwUMYz3Z8y53NodpcFWKgKJ6GWMsPqHHUpBYtG3c4SWx4v2fu1N",
  "key10": "3qfZxE9WSGCRS33VikMHKwKYdGNg5uda4hcz6gFRNpEf3yrFHdEyYkyAcbWGADo6gCvbxK3PcJXsQjXyumoUWYU",
  "key11": "5c1gpwCpVjcFztGwSKyHTARL34ULPzGYBxGD9H14Q1rCTffEQqmbj5MoK3EqVaAEmSqHwetkNW2D1S4mNVzQRusM",
  "key12": "3H9Uge8tYuGpHrLh2ztqT6gTY9K8a9Ayh7pJ5jzvv6KBQFxZPeeRz2Ap94RKLzSRuS2DCVR2FRR5w9hNjZuJAyhe",
  "key13": "5CRoxk5aAmF9irhsZwLFMp429h7UGxXVr6WA8nAbEzdGEVFHroH6WDsCorjWXoAWAkHzuNtQiXxfVbSkJjwU6cYG",
  "key14": "419yW2cJMKFUBXh7fkmjou1nZ6QTpUjdxEJNALbUrsZaP7Wi2QGjt1X8eNtGPdBNTAzjVhbV4H8Re7KTKuQVopWx",
  "key15": "2qvhzd5e4beuauoUTc2UN3Tw9TuG71h1pjC9xuQjAKzGqLEc1B5nKhgUKnXxEhPx95eArb1okWHguE8K8eC9Q1JQ",
  "key16": "5DK3sGDMLyUE4HLGQ9u88upKgWDRhGdknHcoutzesWezkfDCnLe3HHZ2jARvaw2BtzKEEfBNnk2oYx5r3eAxHi5B",
  "key17": "59q2pX1oDwx5UYxjeKYBBYf67qbdyvsC2PNyEa3yNwrQopbJWwebGDoHa471dNVupkUnLQ6C13z5yqnxtjwfV6C6",
  "key18": "4wSrSbzHsAMNJZWm7MtzzsVmhVXEsWVzGzwganRCMY5x3GNBZKgh7jyDEPFGfaewSMCuk44jSrnnL6vEubYrru8D",
  "key19": "3wZVEa28WH5xE6rz3x3m6KKuUtzfwUX9zx4V8buiZ6chxQxMYPVsH38ethb3ZRywfEUUj43HFaD668gFpysC6tCU",
  "key20": "5zs35v1sTvgjYeDub3sdgtKHe9ioTL4DbqDbqwH9xXRdUnTrxoVHpoPYDeY3iXDFJofLNzLDP2d6UqvkBCf7r3e6",
  "key21": "PEhixv4g9UoWxPjyxf15xAYiwMhYv94tDwARcFq49N2Qtex9jY9wa6v1J4XSgTbhuNasvvFvo9WfE2LsbTeSKiJ",
  "key22": "5LrNZk6PvZxuAFd8nsQTNZUjpevHBrsdnH3PSMzUqEJJr81akrNafbktVNENo6chJSy4Wfb4PKt6Gg4r9JHzfs4g",
  "key23": "CPSgiYK27Bt8gs8QjrXC19L9H78N3gtTXV8AuqnhTJ6zARQ65U6yLTuVd555rHMWTLtFRzYuasitnXvN7fzR2vf",
  "key24": "4MgbcaqEYaxxtBQKkiywgjvANupjCTTYtDTKrSPL6yCUi775cXeABCYLSMi6dnJokzP2uUMZBSBSHjeN1zpb8oEG",
  "key25": "42tA4m6ezSPQfWzWb6LBnvRnzmeo2VSnWNL8QaLfetyghJ7nnmQXDWbi5vG9ixTCJirdLq8Zigageqh8Uzp7zigA",
  "key26": "ku5CXpqac6CpQpkRcD3ehxz8EgCEm37AXLfuE9huL6fNatCpWf9Z1Y7TeMyCNFtfbyiF2RcKCfiwP1C1csXpkhK",
  "key27": "2Z9bZ3Tcv3mMkve9PoW9jP6JHF1QRskewB9GktKq13kYGK3kaD2Jwkqu5B4X2WngavJiWpbvjSezGtgFqzL3s835",
  "key28": "igucatZLo7N5EYndXniqgWfQBATaW7QdDVhaigwZRxU7ciigWH4qehm5R3Y1n9jZMrDj6JYTJgp1zihyHLDUFkj",
  "key29": "oKH2g3ckvsa7qqZDmFtpQ1Anj7mFjMLDGXUXdXXf55VwyfaB2jda3rQnHoCXeoqFxoYsHn3ENsLYRcxMDhYGat6",
  "key30": "26hwCSJPe4oe2dFM61FBLp7zYUJfPhoV52ZsDaKbugfHm6HHvnQLgwgMaux6Xpy2NyxerHXEs65j6Hd7rWKn696M",
  "key31": "H2sdsrqDXaB1DTKfvYgNUnBy6v9wsVUZcWARHLHsLWkSaSxrjMMJS8t2NPMmqtPVzEybJC14kNWtkAwYsLj4Vvn",
  "key32": "3v68owZxnqUG8kTdAb4A153Vyex9g2sdou4bU2PhW5yB62tFZPx8uGzv1w9KgHB9jJXet5oBwgJBCEeLqpKvDV3N",
  "key33": "4F7fxpHKLVr5LG7K8raFiq3RYuffb4yUGxYPwXVcPop7w9Kfkv9a5VZWcWfj58fozDJu1vG7HtVkgumEtRAHAxhi",
  "key34": "45NGybDhgp8Lgt12vqHbcXeVAcQCW6Ed4xwrmPBBBD2LAfbUfgfjsoE3gewdbkkbZ5rs4JcF39ao1hxSg8Z3BD5C",
  "key35": "fRi1pcnMvdW4F8APM4WaDv7EVLwwye5ABMKD7Sbvf5Whi5HncFu4m6nAyZnfxUk3FXyyY5pkuTvP351AmQZi94g",
  "key36": "4WcRe4vidKp5pbmDvtUZgYa4fLgHbiEdUvrrFBgSyGUZjZNVPZ5Kn2D8rCeGeB2hCS38ii8hbXdRKQsQ9MBrNNA7",
  "key37": "3pDpqTHqN5rwyih8UFsPHvGxufmskYxqfGc5VqBcufZNQ9xUadmUxhLvxaEq5hnPZWQwBcBcUXEuvzMkwVKAdgyZ",
  "key38": "23ouWo1kmadGhVUZBcpVXE2gzuLeYrj2mgiMEttfyD1cHGw3feXHaAmp8cZqMbRhgN8K52xkAW5qhbFErBzVqqyG",
  "key39": "4NpcjHZ3ihNvmG4GAevH8mXPHHGwUttnGmmXCofNxrgVybvGpDQLXDsqxj6miFid8ttg3pRmwKyT1YGWdGmJShxY"
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
