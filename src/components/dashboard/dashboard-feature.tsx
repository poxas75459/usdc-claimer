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
    "pNpuJydKWe4b43ApTCFeymJtUj16tMcVidy6NmXqe633bJU13du4Um38ReZE8xWeXusQDEawtzVci6SoUkkWfMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2765VxSumSxmW1goyodVvZrzxN2scDhcQVo4hwGb1FphkrBLCjLVi5aYpE4KTMo5AwwRoeziquW51WQme24RbbAj",
  "key1": "49xbMvqiguWvBGWzoxLmiQQHw7wM5QeNvcJh4nBk4QVcAt5CiLrP7ApcieX5ShLK8Py7o6MGgqbWuoiKsvqo274Z",
  "key2": "59oqRnMaC83CPT44Naw8WEBDpqENR9d1GFqw5XQkM9oASX9Bud43LctUt2cpzvgWUmSAsK7yUM2XYntXUqFDzNRJ",
  "key3": "2u9Axzu51BTgdtuYfQ7H4djPd3fnNN2mPsorFDgcFNVurLzsBrvhfaAu43QxuqHQwpN6nP7XQXfj6NsWYXrvYC2e",
  "key4": "2Nv4XSF7Tcr7zqJW6hHo2f4rYFsfwLkjJAm7TZqx3i95xerKGFhKdbJubNgQ4ReroPx5kPX71YzXyTAQJLtpyZmc",
  "key5": "2kHQodnfcdomsDUh3MVJbW9MYPHt4dQJZrJnAXbmLt7g5p7TQMXCfpxPohRDmaVXhwVRE31qHjXif9P2dxVNQXme",
  "key6": "3wbu7Qy41dZkbiyeWt8RQTyTxD4FJADbxCo8FEtQiTecdptkhxTRsvDKy5XVALJRc8VKuAhtm4Kh51FimcFoK9eK",
  "key7": "4cTJ6WkmwvKAWmUKKMdSNhhWt8EoU6aGqu3h1H342cuSQGjAhjPAaz1ovejecHFm1HueEvmxneqyyhb6kZWZDQYd",
  "key8": "2rBuxuF8CAsDXV8bVBZtnSvXkQyBpXh8grm2eqbxP5hkcVitNBwQwXN2CJeYPLKmFS24iTnBggqBLsFNevYa3mkD",
  "key9": "4bftVEeWH6Pqbo8ENbWjRRAasiP3RMfTzaKhip5efHTStNqk4hem32TGRcYGBQy1ZnzZvAjZM9sD8dpVpAC3wQuh",
  "key10": "67MVZXFLSfUa9VkMTBhAQrzmNjsn5ni16cwXrJnme8GDM6KEwpcpuvT5ai2p6Jpqu3zQWnapAYnAykWmXfqeNxRg",
  "key11": "3oDbcseP9LzrbjdHRJRWyPcjPGVb6kXsCyPbGGAUiNuoh2pNCHBuyWENiCdSAhqNde5eiNz3edT2KUHs28AoR2JH",
  "key12": "iPfXrmgASCWhDGrh2LGYPNYfvxpGPbtLRF9xw9X5ukc6uFsXLPMNtB6unxw4A1rKSDUJMyoHXXpWchk854WLyRA",
  "key13": "QyXRWnb6BaKikDds4ewZz5KDdzjrddmuuHa63gnXVXLecia6queqswEc1jEakXbBnB7UiQgF8e4Mr2jzBS8w9sm",
  "key14": "4mxz65mXQhmhpvKPhu69tyQviYN4GmyMmimL7D8NNGRXa6yah3fioV9hcAC1yJV13RxP9AX3QwSw59FPhscb5mS6",
  "key15": "2LoPk2whLFNW89o7yj5z75AL3Wm6g9L8PZVyKtZa1h7fgHkHXHdyUyvBdWkvqwWHA9SxChi5RQ6ZSHJvNjfYZdBT",
  "key16": "4L7cdeXceWbNxWGN3frqcefcqkrvZoFDQ7BW8t2LLpDv9op9f8JjbaskJYcPCT7fxzqf9Da3oAfnQdoChLGJsLey",
  "key17": "ZfgfnzvaYPvAfbnUSnoPeuCBwuvRVFxCcD52B2A3Y8v8DhNu5b7RaNJRb7Ns5NBPVjvDMn2wgk7iP1qHyKgpB7a",
  "key18": "4pCV6dvWtSBEXuoBA5hkfPRJV14kZXkq9fT4XnZg29ifoAcnBDZYyejGZJMFyM1doztTnr3CtMRNatPqqcpSMDzQ",
  "key19": "5CTxAnhrUTVpbpMgMHBV4ko2GgBwpBainfCLmQHprxFx74KxxgYyNZoaSfVZqMP6xvegcQotJ15t2quesJcRQohf",
  "key20": "4x1wW6gsx1QJQZCUnNj4imX6rkbmhFaRE6Lp9oPv7ddihSraR4mCuPmzPKevPNj9p4xCyVoEMCk6rouwTMfj5rfk",
  "key21": "2jn58A8k67PonYVdVCdemR9HzS7VCAd7Syoasg43UvCd44qyEBtkCRPk59cBzFyruSC48jvdZFmyfXKHkiPZCEDZ",
  "key22": "2FRor4BuGQQQM3X1osg6MehvZVKiQaWZbvADFojRmtFLgjEiFGC3q4S5PFfgFLWTUYMp48ufwsNdYjgUWRtnxRHV",
  "key23": "42UFM6XTS3TJAuTriFA5cDuvRoUhfXYM1TVCgcec2k47KBLRe9xV68qHpPfn42VZBsCK8GQnzWRgJVVT15Lw7hBZ",
  "key24": "3XSyEZWvxty9MGeprZdTFendLhb4p2zrCp3gVYPZZs9Q8QMnoXZaKycTxxgM4mMEmnnCvXjAR8MBnJvXmh6jvno3",
  "key25": "rD5RPbqYmKZVcV9KSk9srTTayuUwHd91wHEHbCpVM6v8ZeKW6gG3g4C1vN6UnYwzCrfwBCWivtH29qv5992M17K",
  "key26": "ZAQjyXtfX5AcBKfTwKjxZZvUH6kqAhjhUkgPS4gHt7szAMo3e61ZZ3dmKv2NkVYfazm5SFtX2NLX4eHTb6MsuMD",
  "key27": "2UFSmPKmMJQuFCenqnuP5JYi25o9mHsjBfzcss16tRB6wfKhpQSQsm8j3PaJ5gb7r1NjCqmhyoF28zq7DkuguU7c",
  "key28": "2x9NiuuG1LTeL9KTmiwuM7ih9EKRK8zosPNCXCEMimPm9QMkCKBUmpUCximKBKWXHD9ujKTSYPVEbVJcFYKKMKgH",
  "key29": "5d48JguiNncPZpfJ4VwREQWjD2wvKFZTtgyRJ7CT87y91srHReEXUkSTYcSrKk2HR9Ms9nVFSUBznfZSYG87DBbu",
  "key30": "4Cbd1hD766RJqdWugmZ8G4yGGuTmL2pLdVVBQyAz6mmEg34T1htYYiCZZd998xB2xGweB26PidopJcLJ6BhLm5aL",
  "key31": "3s5iYdVeXN5Rz1aZAPaGy8ebY4hEikCf58N64FF56A1bfaR7aTUZsHKrNV8xrGvLQVNreXuNMM3BHtgFQyQsyNbM",
  "key32": "3pZp3EL6XSYb8kqERZf7RGetyH4vGpLGRrY84hCSkRtgxGgsah5MiVp2Zy2EXwbQuLoa4DXXZtm7S1JEgd8ZWmyV",
  "key33": "3JCAuJPv9DebXcgfd7MowgsV3T5r7WhcXn9g3ARixEaKYFsXQeTLmfBftjwhsb5pgfg3RvQiJPRCUM2BUSUhypBk",
  "key34": "azQb1ZREepwyA7Rmjag46TrFx86gGUfeaXJhBi5hGW93SP9XuYH7jTnSUMxif3DsbuRXb8FLM7YMwoT3pbLWPa4",
  "key35": "5Lsv8R5gXsMGJX83Zoh9gvq92xNx7Dt5Rog8Aa2WGXAMHLS3wsxetSuno71iLdEVx7UYiScYitwVi6mH7huY8UQn",
  "key36": "kzSSMKzPkfagJURjMSgNgDTpCGjZgatJeT5ZMo6nU1MqPUw8bxVZa2adN8syLDMRxWHmnBeL7gmq2A1EC7rFy9Z",
  "key37": "2S9jUQNkkJzVdxjsc8CyAvwhmTrVeXbrTru1dxp2Bjio32QZxm1KkMbKSsL6ZsCNQ7SmwcT3x6fvwu39if35MVHj",
  "key38": "2AC4NuQ3fG25YKibMBUsTmMZhH8TqJVkzfHqhjjEqJ8K1xkiVHKGyRo3veqH65EtVkUFHjsRyL2TCXpNA9GtkdNz",
  "key39": "4NXw8vzrBQYrPtxY52CirsZXXUrPDUP13EdrY4vR3N1bettSHuHBrgos3fNMSAcd3FuKJYEHCVuZ6t8nnXC4N7Pq",
  "key40": "wiqE7TZvmasMkp7Np7FfUjQBb9W23BzsgZYBFksTCGBW15We8umfHUFKAEqLH4SBauALyxfZe26Feo2WzbinXBR",
  "key41": "Htj5syrr8eA9LZWVNcJpAMUQkg28Y27kj6Qrnk5K4GzLFAJZi8PhkuriSycsEaz7Zg38MAgS3QAnF14rpDMfgCk",
  "key42": "3BZ76VmRKaYwugBGxWH8GPjNAPTCTfBtsAFwue4X5dmeFoCV46euqBUAh6qNZVLa2VaXHDxBYF71uWvqXaF3WHjT",
  "key43": "4W9HfJqujt3EbtbeDjdtDVeaphJQBF15URu1k54NyQMJbj7Yi7e4P9QwK6qrhU8jdWJ2NnBAPy33Y4HsXLFq7pmP",
  "key44": "4UnwkRFJHzXjqKWV38rZqzSMhVqqQHyKjNh5p9jFpMoajJnFAj144Yi7cRSbEBQ92hiQqmqr39iWHhHozGXyDKEq",
  "key45": "3ibbCQE95xWUF6K897MskbWKVtTg444gfYJ2ttHCRXnWRrqGAAsW711FHhYjPnub6y6ziTk1Nja52hUvX71vfXow"
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
