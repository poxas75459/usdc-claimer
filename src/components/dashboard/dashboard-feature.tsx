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
    "3n43ufE1KzMTo5yLRQ9yCkdEKRQKoXiyNEcM7osBHvJukknqmx2QXMG6ZvyaRGnTWCDQuNQq5HmdK3QeUHXJcegi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1WuBoU4VAZBHA2Yng64jQEwXYMhrvGAs9Yz4TUQXExuDnUxGAMBMj6vtXdpLV3FPsuvgafvfq7Thyb8QYGVaQm",
  "key1": "xBjV9Ek2MTCuR5fmhTmzeJftMsoEze8fULnMYAx8XL2Sy9VxEXrvrKzwrZLYSQEq7v6GxiUiLC7BMbQGC8ndgfu",
  "key2": "JdSueGbaudkicrx2zS8U3SeVTG72xyXjtEkkBzcS1gV3S5653NgHP6PAvenuByuj6zphay1aqBYyQqkzGqMRMrM",
  "key3": "EfZBPcH8fatXZ5K9KQasctE4RLPtYYUehLAfYMYeTnpih6HDF78WgZe5FixtH9dNpR4KjtnNukgYXLxdnLf71PU",
  "key4": "45kMhxfsg2gn2cYPwCiMGHVA5UdnpAbXYWD715TeuPy5yPgyiYqhJy4p5TZR8KnSKmWaqS8VNDDchUNSRMDm3Vng",
  "key5": "2yjizrGsdDMJ4BSbEW2HyS7qaF2VT5CTL3zkxkaY4jM4EixTPtkKsgvzLc4Xis2a6hepUaQvKn5Y4UWdZG98oFk",
  "key6": "4eQ2X6orEBPfANrd42QkVCvmykFrpawmFF3TZqj3YvyZqtvskAvd4Dt9J9je7PCLKpVzAYDo1P2z1FFaPCRXTwyt",
  "key7": "HX5hA9c55JVr7PXXnyEFThGPV76WG3JFnL81HEkkRE3JgMqSLjdMSeFeFUqEgukE8qHhkrQX8MkWe9QncRXnTKw",
  "key8": "457H3wmypH7s5kxukfLngztEzMmXsBZrp1QJV6fjksj8PAT6JAvdiwTJEb5GeQVwcSxjgKadNTUotDTbRhnn2tMx",
  "key9": "GkqrhKsYFjAK8yKRPtUiFdWWN9uPjTqZhSgskBLkF47LxsK7wAvx4tDfLqaM2V26R5CCNQob7P41ThyjB2zy1wP",
  "key10": "33HPz9bkjyyWjmr5r4ZToy3DNLd7aXPTk6Wu3b5inm5fUeUmEmSGhm61UmXnU6T4g5Jbg7XJhs451pZSipeWbnwB",
  "key11": "4fBkjPD6in1TVfsum7PMH3uFonFfZep7vEzfdbTcpSNHiYqammtanPydbByyHwXii7rCjTSmBrZqnCoWYjGTVhzP",
  "key12": "5kKfx7twivLY9zqzRGxGz1v9NA99NNhVceaBLiQR75fUHSYj4p4BYXLW442S5vTCG26emjp8WiLWggK6hVFKqSnB",
  "key13": "5bTkv2unNKaZ2prxcKRG8SyawVzvvJEFTrrSwtYikMMnVCGaAhyGGffmdngefPGV5Vk5WgTV4sZQSEMnQWgbEXXd",
  "key14": "582hKGzyHyUFfBJJSQg4EQouDqxG44AuQyhLVpcWtt4n9hhtjBkQsXuEXEBtgZEjbPEFZ2v8iH3S3VHyCye73bJd",
  "key15": "3fVwEbVdfrkG9daKTk8e1i8rFkC9Cfoh7BCDAyoLQtUJR6qC2d3MJWviPVxKWo7nkMn2XaPjTGmoZnzv5CsGBkKk",
  "key16": "j96SU5LQ69DEYkEgecyXEaGYYeF2v9iVaQwjrBzSD16EDgrG3tzZpe1s3jVcaouUs1UJPfW9ibcVMSRQmAoDAGs",
  "key17": "3ngP5rzRscYuU26JEcdamgn3rtQgVLpRroKbSeZDUQnaJMEvLsy65Y7JiHqSp2Zt1UsanuYhkirXtSXfWhhYYjhg",
  "key18": "4YHwzFSxuZiFzDhrM3RcwJfMSdWbgK7HHLJ3sFFWmbxGxrnXb2g6vJSnxv1xsCfyEjzLyM8JE3z5dLgMDK379GrV",
  "key19": "cE4kThrERk42WotW3yk8ULx3pzP5hWQNEz7UXXTAVribUTgaaJSR83Rbej7suqvgM6nGFzWwQ7ZrKzp4hjtxW4J",
  "key20": "SwNhrAzJqdtNNFVJzZf4MBDPgjfUdLSUYBBPHWiBKUPE83QGxcg94DVQv2icEByk1E7hXv1nVM4gjNDqFaM4t8c",
  "key21": "Y96rkoDzwA2d9Z5dzazpNAGgaQ9nRnQnyjFNspmV7Y5efCG3QCFHGFepc7uBtzvABnryhhVLZcamArZK5wLY4Ea",
  "key22": "4cQ1AxNemuNtN3Lz2Fx7RYaudWwoWGxSdZPFp5vFz7GikPyLR6ZoUbDxxDZ8ekU6xhu9wGSrdAi3qaWomqvkTxQN",
  "key23": "4o9C89mmwHAk2v8YF5RL6JTkfj5Ree4TMFSngAjejts9RGKVEfWPBNTXqJECmN1eCxSSCvyRDsmaDjf8ybTw8YMn",
  "key24": "v31Sciw2x9g3LcneJLfAYXZof42dfB7BN1Ug7LMzszdLbNxMuntCCNixearUGMB8fRqr5LrhTe5RJnNEbRGggLW",
  "key25": "4FaijQB6QP4vhqmGGk4AHwwQ66QKCUe42EwH5gfdkBjU1Mo1zjcLVBkShobaVbooHNtNVtitMdFUe6MUV779kSPN",
  "key26": "2kPgnvshoGdm2zf6tC94ApbojjmQuxS7NFm7qsKSBaEnAiKi1Dpafn9nPpXtpSmHqFSCtQvUBge9DSuD2Mbqm7id",
  "key27": "48qyzThoWsKVeArR8cgTuCZUkCpLYyvuWk1J8qVNZNvsRgikxR7r76SdTSFHLuJ2LD4vkqqXqQcxT6hLYom4iiBQ",
  "key28": "Ppe8xFdH4ixkRsfbZE5ayeAM2k3Gs3vcRyRYPjXGoJ89sHo1MiCFNRX3a4HEcA8vfDzXzxDM5eV8fjVK8tTH9sQ",
  "key29": "4g2NAAvVVuaEDejqNvnMX4kBVqyTd1u1mxauGGS1J4m3oRWgVp9RthhsYdAWo79ubQXAnQBduX4LqEvsMtJoKjkt",
  "key30": "rVKgM32hpydEXkSZshBzbaGjvppXEb67G53SdZ6GNBw7XLgbcTpuKioynGa9JTm9zpQWrq2oFzxWgEjkn5RQaiS",
  "key31": "2QMccNCYw542Bt47U7pbkWaXhFjmT9PNLBbtfiNe1TJnttMJ5KWkaAzaLFhosnnLpfoKpXGp2DFLTT7zmahXo3Ug",
  "key32": "5m2eQx66W1aocHDZkJVzev8JNCUJqUUL5GiKpxyvoxmahrZYxt3MtKYutP1KQPRTqXDgR2dPK3xSgBQWhn67zirG",
  "key33": "4xhEeHdx9osXQfVXHr9dju7LiH4GNNVd8MWcAqSQ4bhfsw6CPZCjnWdy3nz2aieerWrXDYXHq9FJnaJ8KNRnPJh5",
  "key34": "3msNezeXY5kcX2an4uYUH7vF7MwNQ1qAcw9aT9aaxijX3pqs8YmCjaG89EbnCN4gRxnBahbdntggHLXN12uEWrci",
  "key35": "typ4Xp5JLVJM217iPKrUmJUnmWFKkVUVHErJffyTScxCxGf6GcdYiDZhqDiY7sPkuioQDoZSfkwCWrDDFxnXeRH",
  "key36": "5b2g2H2DX6C8q2wh93iDxBvDaVDyMxB7PBGJmef3g1D2ev7cFkpiQewqdQNMYBbcTJviRSckmkyjy7kXy5db415c",
  "key37": "4NoHdfELUQJPE4pUgVgfUgyE33QhwkSBpzQkb9b6Zp1T5kX1VnSqpdsaP5JXTHpuHEfUbZ5YCpRc2h7xefEkxiE3",
  "key38": "3efbGsLaKmvPe49drrsY3k8PpRto95zBx3q83kNGhd8PWpqkMBmydqLyyfbAdyDFxDtorDs1SoWW3ecvgJ1s9fZa",
  "key39": "549fydeG9QfYuFvHqNctngYvHWYZ5sofJcYHpokaNmcdXrkuC2mMEdFQ4CT5W5gQ9h5Zm3h5XygqXHLuCTjU1fuz",
  "key40": "5Q9QmNqwGLwBSg2ZWjqPF9ygwAod6Vp7gszzmRqThQiTxgpEvwrhXqgJUE9uiztKVeJ5YnovGz1RPUo1CV4KJ9a6",
  "key41": "T5HKZVEitwgcmMab4NCniHNUPV9CBESJuE5jEyoj7puR7i9J2aTQQQkQfd32xBdz2vUUhrmGjLBWUdF7sEnnFMM",
  "key42": "3WGzDcXNLnGewEEFoobWGn9TmFHt6c2heyabM9UDUp6hHVKqrD9hNBY3wvvTHjumt5fjhafpoP3CoVEydPB6w2rt",
  "key43": "4Ug55QjJJeyxrdvTtEHENvYv4NZnK18kRT8oePmaPecxsEXCbUrVeKgw6pem4p1dGX3pv44hLQFzcZkngtBqDALf",
  "key44": "4Vbjhv8suNwX74XxBcLHhTnYQqeCGMA6eede5Yu67o3MvcngBiGjFCijQyDWE2KiHKCVtpnZaK37eCLtq1dS6Fcx",
  "key45": "4nWcAtTyXzM5gP1CbXZwKpkgxmZMv3to6LPUuoZ6CQwkh1F1E7wCzT7f9nkGQnqNz1ZQsPZfEa5wqKqKhCLR7BBW"
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
