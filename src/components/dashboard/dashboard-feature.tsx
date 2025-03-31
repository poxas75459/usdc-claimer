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
    "3xqvoG3XZJc2Sxch23rR9UECqYrR9rZtrrvVHE4HF71PN4N6MN98hivQPpjANQjU6oNs7UJrXvu6K5p6sonunb2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RLZdacs6WVYH2GQPSeinH4CS1qr19AfhQBRGpaoqXtJtWLhXbvAxo92cdrrykG5geMManDNe9yYyNrru7cjpVyi",
  "key1": "63Eok6PfUmnBH2xciEDCk7xMyWsXTKZAP9nRjNMkERYqsJq7my9Po9dDJ9e9Vzxf9V4ySJ7WR7BCZANbQ5ew78th",
  "key2": "X11X9SnKneZ8yrR9KBzrrAUUj1DU4y44gQoMQyf5EvGRCS2rNNwEpHNChogQhBC6zNp28sfEgSuJiyZBEUJJpZ9",
  "key3": "Dz4nCsUhqcxycq6FJSvfQqff2HxqgxAVYo6r2K5U6BP27B5HCFsmSQCZy2ehtMytH4gSc2udRvRdzgpcnGo3kQQ",
  "key4": "5KpAJyMC1jFojm7cQ7cCehZVUccnqcJ1BV419eptVWdSiKmigZ9R3fQn4PJHX7t7hzV2noutdvRPh8Pg1deKTJ9A",
  "key5": "NtdtT61PBS5jeYqDg53D74fXgqri9XuA6TY2XdneHoLYe1fMonxtk2rzX2QGUTatpJm861amm7CwX17kgpkwwzx",
  "key6": "3Fa8c4fAKCGzUFpZnJ6WWXh6VTvjf56hSVb7MHb2hX9vKSDG3oyDo9gpg15oczYQ8fLqkkDct258EmKmvVRNkUqt",
  "key7": "31q78apdtxcyK3jjaEJ2tZhPxWMLasHWhXyNCPwiAwGAcvqazXhnH1zzG7S859vTxSVK2TXeJ4ZATAJGSSNMm5xS",
  "key8": "3gqLTGLmPeT1xjTU84a7ssfuFe6W2yWTFwRfnrFoEB11Fmg6j88EpqCBivAtJQUNtAeD4YgKVQQ3Q9ittGVYYYwW",
  "key9": "39a4YmrudYHXZf7sjhS4f68Q7QVCpSUq9S7LVpSCifhRMHCc2fnhHcQbz6Q7MUPRVbXayZ3zqUZhinXi4aexbGie",
  "key10": "4AW5XQY8zxfFGjtFyUjgvAqvZ9FkG2Y7QuueZdRFhomyuCPqgsufykfDyjSaft6ff5zLphiLA4FgqdL7fhWu14ED",
  "key11": "3V3L31CP5Hyw9XorQjS8F4SVsHyiAkoAyH6B56f6KBa5Mzd7wHKd5W1eifNFiGES7JpR9GswGmSYa9Tn2v9iEK4y",
  "key12": "2y4Dr3tvq9zXLhZpU25WK7ZwdajtZ8JpprZbfPboF9HTiXzB4PdUreyqNT1fJbY4pEdDhshpx7syeb3aSEHPZveE",
  "key13": "zh2SGvZzfZzHLpkpKo9A2b3Wwys7Yj6GL8uwYUegc2pEm8ARrLGnHd7YEkz6YSZWtMcWdkYUQHNXRBtoK4Y2vHM",
  "key14": "3HXWc1AY1kTSjNno5SpaKhjbE3ALEFWLMbmcdM4bpG3oReV4XAh3AXK5DKBqiEri2LCaghRRMiAyde81TcamwATC",
  "key15": "RXdvbMheu2BDAu9nnFzM3U3cc6435Pvrznjeo4b5cmbYEo6sgVfvjUuAvGopxh8cTnWMhhYhz8pi2Awhj8CVMht",
  "key16": "2ERr78cWTUZyNxfRG2wrAynRj31p7UwR81kmbWb2QhLSzQg2k5udhGuLMcSiEQUzs8cPgbAE4ZWDkbqxQs6jNNww",
  "key17": "5trPUUWBA1UynaGP4rnTq6PFEh96E6mTyjiDAwR6vyZwkq3bAbqZh4W75tdnWvH2dQBQADu9SMJjBexrpu7mF55c",
  "key18": "6rxa7S1WFERGRA4MpvQW7wqBbBJLkUo7r4WJw1igBrEThfDTgAtSWPCbfyAGGoebvATe9784ZvV8jS5XvkWjdDn",
  "key19": "3J8hvm9EgX72495Gth9zCM9T1jZuxR2qukbJYLwj9BycTZuvztjPxEaNDNAVa2r2KvoSLE7QrjjcqSM8qtZUYnpx",
  "key20": "5rBK4KMy86Xr2bJXiTb28FxKNe6d5YQH41iCpXrmkdx6JzvH4c8jDzK2QCUsax8djyiMZehgDYwivNEAUM91JtdM",
  "key21": "niux8RAprpsrTexbtkgNy5g4SZ9gxbUPd4Z69jjx5ikd3Cv7ydbwrsSj1QnsM5zHm9fMkkVni7tPzpNxBnQCPRa",
  "key22": "4AgGQATgRLwuT4yyrSvxAympJ3Ak8AsCX7UHUZ8TSTie1ZVGvTGSstpXjAmvzMvDyxwfY6wYHZ4BfDx2em4y4gxn",
  "key23": "52erEn4PRbCF231A8twbcheExKX2DvXSFFwLNkNAih22XSSesVw9x2mGBMerXxP7fji3ctr3EouzbwwJdKEGexAP",
  "key24": "2Nr44otaekuxL8yijWNLrCoePoPeTXJTFAwn1qgUzfS93yN6ywqi7UUNX7EEezVKTDRKpZX7JLTu2SMFfTxquKTw",
  "key25": "5rk53qvCm5Uc3cpWfiZknq3awqCqfVER5jRQoEdDdMakj3daR6rSsnYQURVhsG6Vn5myMSQoRDfKsg8whzqYGmzB",
  "key26": "xTNnjHG4x5bU1J3uzc2eBNyPjptdonmq8uew3d5NC7gL2roRN2tjNdaFDTAnGxxT63WjPsxtuL9H7hRCANyGStR",
  "key27": "4b2W7xUGkR7SWRmfbg6R89u7jUMWSdvcsGpUFutwWzTNuKC4X92CDrzp9AiH4fzKSJJWagresGWS8p2j9AXWiuu3",
  "key28": "3kBdrXs1BDaEgPhLd4bNcGok8yXh4Q2erkdB4oP1f3tXrXd3jDzioVgPZw9KbQZLqR2oY3vfosLNowR4sdMrkQDQ",
  "key29": "3bzysFrJv5YJJe21v7JtFqsudHnnGtbhJKpcFHQkFPi65aXxza2WcXT2RMiWVXYijkNh73AeekfpMqdqqQavAo7y",
  "key30": "62myhFWBJBQ3oDs7zfwyYTXgbhT7rUq9rG5HVY4A33yp2rpTfJ1SWH5qxD7PECNQovCiEqvozhVkSgi85xBzmfyK",
  "key31": "dsNZA1goetrRXVXN7F6z5j2PDSMYGyNhu8RPvbLf61x2tpxDaWtHnzFNYsmRQLGn3w71tCaxRA4h6pmAtJRm9px",
  "key32": "517TNaiR7QmkM8dbTwteqVWJYDS9PuKSetECVWuwAqsX8hHPPqZWVCxRTzXvpXDVrALyTxxzNhMEj5nGBox1wo51",
  "key33": "3a3aTSaJPKa2yb8vcPHziJDDJCiF5EnWuvtU4HqZSTZPsVfyLcDSpzSSbmS7Xb5aB7nCE8srMUVC6m1XnRdLsFmG",
  "key34": "AXgorYLhc5y2vA9tjSyApwCqWckhBueP7XjLiaaxrQeCoAgTp2Gfnn7rnNhR97HAmF56hxq9ThpMWEwm3xCwGBt",
  "key35": "5HtnD9dsL6HDYb5A1MukYTwtvJgT27Wc8JgGgsVZLpSjBx28xY2dhkTy91iUiHc2f91oZd3Kh5FuAgTRU9jJCxtb",
  "key36": "2YdVUUPs2cEcNJaECETDGyb95s21UeHZVRrTwknwPjGeLsdXYRyjCpACXt4EHVHUMKX9pwwUJXhtSWnCywJqKS9a",
  "key37": "4vtxM8kvjJdTja5pm28Yqt9F2o7QwY71wzHbyhCGESoMeVunp9cvg19miVnkaAMfZntWeDJrbx99S3sBzE15VQDG",
  "key38": "2LPkFYtkeGeK8WiYrwiEsZktnwrpWHZYymMpMUsu2Pv5hccmh8FBsy1XJDCfeuvBfkkkwYC9DsFubuVKzm1FfoAr",
  "key39": "4PWTuxJVx1w1FmfRZJwPX1vgHgt9Rm8KYPMrycH6UCNCgWZ5pRWDUHBWVTTN9AXsLoNV4uQKNTs9gRe8a39QwXjm",
  "key40": "29roBocat3SkBRPoMFr1X6z5vMdcvj8XKQQKPujCDsBwj9d74mtEpde4bPvVCVTv86xrqxkHduGBZ7Mcjk327Ehn",
  "key41": "2mTuy6wH3waPekmoB9oDDnoeDvvVSKF8BDFqW5PgMuFLk1MzoHeeXNc4GwYswBAHnrwSnzvanNDM6T7Q8aFNgoAk",
  "key42": "2jZXahpdS2hbTaoFAjYAiChKEUZj1huv4DDtiJg9pMMbfkSxxwM4pW3QKi9oVUyrbCw15rZGbFPeURN6hKjUMFbL",
  "key43": "5trDpEXQjNMsj3rRkr5FBLWgTeyF2VAHZNMHLmuVXttbxsZaShQ85Qv3jMjW6MvpeVrnESFrmc5SJ5QeKd88kziZ",
  "key44": "3KiFQQCGStrtFe54h5zeARErKzXr9Fbg8oZ36kfKb9LGm8GuZYwwQu3yzFniZLKwnchbxdHgCtWXPxJZDSjUXTM7",
  "key45": "3vgbxViRR1M85Z9MyvJ4Hn7KwuitCZc2CUsy7Pgu7CvDQya43JkgEusvH7MNWiedWAYbwm4iap9mpUVD3dVoR2af",
  "key46": "3RhuwVpSkn11Qbb4VGgm27iwhyQByd663zjGoyYcpsqvwYsjHX2P6HV79YeWG6UBd1AT2rvZRDFXN5drNE9DohDe"
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
