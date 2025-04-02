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
    "5Ry9UXumFBv2XU4XZ7A92MvqUAspqvnVQ4EXGmgGeqe5FhceVrL5TXCdnUEbTRqpXmwG5zbhJGK8b3Fs6rY3burE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otT4bQEYrbr9kybA8k8oAxGYNjc7RZcqMAYxPQQvdSgdsPvkNa8jppHfHeBdfwx2Sp8H7hU2MSpc3RNzpxTZ7uw",
  "key1": "4ur5TzKfFBfk4oZV5tHLezG9iqx2163V2DNYbnAicuj7ZeU4e19GmnPqhTt5vkEuRUUZ6DRGGcC2ESZnknzbi1MA",
  "key2": "4nGVTkVswU1HrUpaR2evapS7wrciCGeMwVB8No1mxxHWdrcMQirNtAtZkbB6wogy7htNesw5NKLucohhezN9rKJ6",
  "key3": "5fSAqUYTaGjgoUcdGQm3k41HHo9DXpRwCQkCfrtv41SmcBjsVDywszyfz1SBYkQRCHGqMbkWbmSyGdo6Ls69aNP3",
  "key4": "LSs9Xpga77KbZomxiPEWLXUiLCPLLz1e1ftpQDPH9qdaamupWdaH2UVBsKPzjSZ2B4xCWmcN27Qx8MxZrHf6QrD",
  "key5": "54CRu2SgvKs1RnezomjgsBqn4JzjTUutras5tv4b4zSawM26EHEaJSqjxKVHEufAKi1vFToHTzndBjoEKQprQER7",
  "key6": "R66m9ez4HcrKtrAxtBYHATDLe5nAAWb9udzXxyD6SpPQMpEPT8UQWEazowQ8ZGRpBntnFpYTTw9Ds8gMHzSbYFi",
  "key7": "2djuxnT8ChczXnBSV5aFBpV8ZT36jv4ZNDGfBZV85pbgxvuc7aKY8976YMwf26Leaw2UhjDafChsNLkzL3GQbnkp",
  "key8": "5X4S94Ln9tpQ2YtjxbPrDs4j72FsnBhbiDaQ9V3SxRqQwxt5XM16Cmq7prLTVpE2UsaXhy4FKvX4VQsWgRRWSvCA",
  "key9": "3uihbaQFjkiP39LrYg4aDFRDzt9P6aDjedvaW7AjxCDPTyVPCDJc74VYsAgqBpSpaABds7pyGSuMtvvFx9bVa4wQ",
  "key10": "59GLNN5bTdMrza7g3iRGpDkmyYms4vbSEXVTt9UU2USCryTdToiyPQqPzTYEZnY6uFAV4pS4yz9dQ2sgkoHPZksq",
  "key11": "4KrP74H7EauhfntPfHh7CVD84vPmAe2fAzS4oqTQNRo5fTAzRfgvzvykJBLTSSv4MToxuPRzZbiKq3YCpKJb6PFb",
  "key12": "3gw4XGDWzRnJRdQk3DDGoJupzyGq8eCZ9u611Jkj1ZQLqf2bgUhhgcx8Sa3v8xuoyLpShKH3xopipxKwGsJPYh3X",
  "key13": "64vaWG61Jj6pYMw7LN8dAKCQVABYxbEqW71NwG7esoUm297DZZKUDwYxdFp2V8zebkSZJQA1VXmwogd8d4ySaD6A",
  "key14": "W6DNG2CMWbTs193QBc4cUSQCAYdb8aspT3uumesBoBUMj73UMYDyJJUNHRuSxDqn75ihUwySMmhXUpPw95vjdZP",
  "key15": "3Ct1qstmsNFTPwJ6pEXKngBhAn5SfMzQ6E1JQa63ZZuWHw5XYx7XJuResxgLVUq8b9YevHchzZHeKMs8cfd5rYad",
  "key16": "5d9vmXwLfo5d6RFU6xy3wS6dj87R3frPrW6CoedEvxq4MBZUrBiFAdFKkUdx5VrRc2koyqjax37gnYriByubkLnf",
  "key17": "TmqxmcGg3sMESwJSiv5oQ42kMUL18T8RYp6t2cQTnHKkWafW1Mf4uispYwBWaaCzxFvX9VhRCkSJfTVDZZJHcx1",
  "key18": "aUVVcojaDBzuHH2xW9fRDhVGU8i8WYoLgEqmaC5qEWwz8yX2wbbm13ExwkHCNRJVV4MCvHgagKNeSb823Qi3r2u",
  "key19": "BBM9RMh7Ve3NMYHNmZLwgQWEja2ugTdSnfcryju7Ue2jmhVJtCiag8Lt2oneRhpvH3Cz54nmrzWukJ71Gw5zRi2",
  "key20": "3syN1UYNnomNkVV37KJ7VAa6idxjTeoqodAmMtN6yug4gVgaHfuBNdrz59Equqq9mWgmPwfAzFnWTLVH8QTZrKUy",
  "key21": "4PVJEXe9ugYg22VZKnEU7vc1hWE2BMqnTms8DeeZm3yT2dcJNwxR1J79wSY4XVB3fmwjY9PQpmrQU2H3w6NFJSx1",
  "key22": "3QmfdBumiopr9G55JCVpLXCLbARNsDx3qnj9yYV4TGYLJomJpy2PyksaNhkJ6NzAjQ5EdFXfVbBC5NAQxwEkTnjG",
  "key23": "33UHMgE5uFdYW2fz2PHZ5tZo5xvrEuTWQbt2KKeigp6j4hyborwG5KdULRbmKm7Zay3fqHaPUxRKS5U9sV4Gbs5T",
  "key24": "3rmwSCFiWdP1bioWkee6ewYNBiUqeESbnXPr23g56TWnvuN22Du5CS5WzULNdH7QPit7WGUXshbDQ4NezS9trrgy",
  "key25": "r5zPhgjjMBypmpdqKqrtoFKQdJ6oRMW5g3xwkpVP7Y7wyD2cqQghUD8NHokEc5xY88Px3jbiHUcjaoSytWi26rZ",
  "key26": "q3ajNkawYVDatPtSTqRf4GRS6nmcWZoLSshDC49jHRBWGSJPnztcJQxLcMraFgahVacEuXJ1miPmMMdHcJDTFPu",
  "key27": "2CqDQQbU77WAo6hY8fJV6pxhZSq7FJ9Yc3V9Ufminmhs7cENwHHYQMffRyGtHjXPeK3GXtwx61QdgB35M2deRj1d",
  "key28": "4WwNfxVzvpMZcNxPRda9yP8mPPBinSgSvu6k1T5jzSq8v6ZZnHtTxKeSKttss4bUgq4DjaBmX9Q5FomdjAJLieCu",
  "key29": "dHDSvwF6c8Uh7g4dpyApHxNnpNaEjtW2YKyRK6yCYdcz292kXE1E1yk8pdFeaX1zmWMkWmZkGBgc4Rom4NnxpGb",
  "key30": "2XpfPZ9ERC3M7V86gz6ZRtT2zWnsDqUyLEL9ZyPr5zNKV3p6aQ2xX9k8Ljyf2SccvRVV9fsZpSz9ERSkkHxzABFD",
  "key31": "5azrUpqYcRJDJ6zWkQ5VTuDJM3prFaCrNGUwM2VRXc6cUwg8Yrk4N4CGkTLsmk9eDcCRvYmVZJb3gH6enffU35ug",
  "key32": "2p9rWbVYzfpdrEF8C1vo91Vv8Y3kGVvnXH2mSeppxZHkVyLH4t7QnDRRyrP7uy4P11FiRxrgGaREdRwZfJjkj5Yf",
  "key33": "3PrBLX8aRGEGMqh5mE54xzB1CFn89YT4ieDjZqZsW3ScVBZSes7FGE2Ax5mR5D5TqwWj1FYoC8gzv9sYSs5MGAtQ",
  "key34": "549zmeSgBo6cigToEoceYLoaoDACxeGA5oC86ndf1J6PiT7MZm6XwkmnrK8Z7nCeSLGGnSpVMUikj6Q5FQj1PLrD",
  "key35": "3JXHvu7WeA6as8jt97184Ygj9eq2MJb62rk8efVtn3qsRfvRnxKj3mX1475u9AASTD5ttMqYTz32EQHa7XhAXpzd",
  "key36": "38c9e73Hz93bwau6rg8qqjcwdDfhyCRXX64PzHgmnsia8gajbCni8nXKNWhfDaZMY41xkQbtajqhLVT2SixJwYEn",
  "key37": "5byjveDQQYrDRAcSTGckQuw8mtoDb6vscnMH9oSeU4aYd5sBC8pT9N1sAPtsmwQuGBUgyipusT6VpizknhWpK85d",
  "key38": "62tjTR2PvZfZk8RRhdnbj8tKQUJyT1bAuu2KpFvYc3MAGLoNE6yXXMwA6Auh1Hej3oPqnQr85mFdGkMonoKKdTG9",
  "key39": "5Dy8fiVaeg7AntWabc3Xn1SGsNbKfMNN38XTk93dEJvdE7CLbXLUoZiDXcSxt2EbMKJTYxyjKPwJdHr3LAtL3Pvh",
  "key40": "4UpzcmAPqaoiCBottnZKt6rPYV1JyC7c8DbK6rhVExubVmwS1sknNhyNrsv7B4qQRdsKbiKF4amCMDg7ax9dLyd9"
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
