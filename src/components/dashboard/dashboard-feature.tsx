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
    "5hGCu4kSqy9tHpbC61wUoFc2ASqC9U993p7iouiAMCS42H1Ti4cki3VQ1WhDKMZpgjSeJtapcKYBMrwgERzejjCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wzj5T8cUDJTurSBBoj2DtLxf1xLJHvXL2aTkTzV5wiHY79GFx9jqvDz9541PJyzWZswJtw7XzDJ3ZMAn7iSDr4M",
  "key1": "3HLV3px9QfbDXifDDFokpPbTpNNnds1iGd65cfT8v4F3gVBgSUD6ZrMHMu4LsH7Wu6za11F2qk1Fd26oBGv4nV33",
  "key2": "auuF4HnzU57MkcWAWcyxzwJcaT3WftkD872hZQLFSYB5F6VoiFuUyVM1t7XpgY8BLQytZrjpQQWRkK6eCjkn5vW",
  "key3": "4bjVX78WGCvbC4KTUBcvgeUdVpNgnE8CuxL6MUmZ1dPi3ThFUGpe3GH7EYAWBJXjDRQEFmQeQ8agpVesQkEgdCsi",
  "key4": "3Zmat87UZdocXAqktcFnxpkyB2YJq3qywAiJXBkTLJYJfpMp3qT2XuW89HG23jfJSHgXEEMSwrSFQAdpdg1VEHVA",
  "key5": "5gZ5kzwePictsaWpZTYYx3XTnimRqYrGZNGY2wRoJHvDkpJyJWm2h4SFjeXeXqKGCQfYu1fn4SFSvXNV2nrpBakt",
  "key6": "5jroqp3VpFspDFczq294C5ykAGn1WaF4rj56RYBoxdQiQChZ7eGdSr4L2ba5coXWGxfCVAd5Gp1fKTw76AdYtU6G",
  "key7": "5UgpRJpWeb5LPtTCaYup2tLRWYqbqrLz91t2fdEveqRtx4RGAq9mLdVUG1C1QveZos6GHk29QZQi9shEVa574mGw",
  "key8": "4SqcZUVkNMFf6Tc9LsUQfmDx1W2QeN3NHjAAuju7WCNcjjqKos5zYBqcsT92n5JJrvTFH5xbatBHCMBKh4VYc7KM",
  "key9": "3BqQZm7TBSRLij3aWvsVUUcRp6kivP53tE9uVyAHCMJ1dKHMRRHZae4b2nTQDy3guu7xHt6uAsNVBwR51rvNHk8j",
  "key10": "36VqAyjbKYPBXxwXw585a7LpPNpW68QViQBNuh1KXWwafhtYaiLxUK8PmdZKLP2cYyyA2ZUBeGSXsKekweGJUw7E",
  "key11": "UqG4zYP65pYqPo77gL5LK8PVnZNKEWefa1ttWBrj5C7zsKVFoowUyTHwWkBCp62ppYZzzuJRDk72V6vYgqeSC4Z",
  "key12": "4chGvotNVSjWFja54UbePkdNtjcvL1mMxaEH8ToBn4Y3WrSTVfuPSN9GsPHiRHE6cvTfEfmPbs8NTGhmFtxzryuE",
  "key13": "2D1oZwV257Jr8D5N3i5yr5EnRarZ2SSyoqNoMXw23HSXCpzwSCkrFx39xWKhM7hAjC5Ta5k599yHvXwGfRd7bi1b",
  "key14": "3dCWiGLV6Y233vhpGntBP2gXcu7kze19GyLxGdfca2Sa4mpwBWD2gMiYFf21rSFAB7JBRvgL7gxcDXvd2gdA7b8Q",
  "key15": "4RfDYjR796Z8Eddt6TMugkM3UUumw8eYYLHtiqW7wbCvLjrUUWepSmFzpDAo9aoTvRmVLstrkbLLgETGW9MoAEZE",
  "key16": "2YNL7C9ktb5jAD42ovzsMmhgPe6W3Uqo4zhU27viv65yLNimhb6uMoTsM27CVy4A16YdjFHZx59B5LGXPDsjts3n",
  "key17": "4z2KTTDFkHeiqMG6Qgs23zRhjtkGUB9AmFZCQzLwpJF3NtrYJBnEM9RoW4qAhJW2aUPQCogn6f5xDVFEUtQnFwRi",
  "key18": "3qsUa1yyhDHCT5SDcKXa1VugncivAX1aWtKdxGgifr7hCp3opoep84wZNar8GZgW3zfVzfVhXYap54JVDn8s47P5",
  "key19": "5Nxrpf57z1GGXMGsLktdBHm1VfqeySMUpE9drr2vVD27WL2SaZjkJWh1m7QbwdHkn7scPzMopKQSfrGxx5f52Hce",
  "key20": "3szcJ7U11dP1iGBciSCqJDB5S6sPVKTxdC3mPvydvguVPsNQt4ELGFwRBnqDhqXaiGYNn7tn1GBRcVD31qjzNrZD",
  "key21": "22srJTHYs68RLeNguLS2AoZDU3Nn5egYJvXyvgyLuPEQdsct7VxNANjHsrH1uSgyw53NgLhoYBNgmFDmMpytGEUV",
  "key22": "3gxXYkxnvQtvY6byWPVmmbfvSmsK2LgRhTkrERtiMAqTgSp6cPVGjMiEpiwHWRRr2YamoCvkEUYipbzEibGjFQCM",
  "key23": "39zKc7ndzHvYv2W25sdPPm4QmdnFNY2BCn2y49j8KxFTCQkfxSqPuHi2BZmxEBLhMeAMgXDEWvGjXQgvy3PGXWT9",
  "key24": "4wAg5kspQSVFqo4HoPRqdYX4oYsihPcRVKNLjcTZY6Hu4GSsoBJrxsgACSeigUZFUURZtymvXaUd1VY8MvJBZmiP",
  "key25": "3TFhEeUnSiqyCSPpMbvfGbFnYNsTXSyELsVNHgbdKP13S1ZycaKhBhf99NxYsQuRYqszncP8ERVqqaEBpePNRAq4",
  "key26": "DEF8vKxX5Qtphj9wwMY53Gf29jX6qtCQJvG938Z82WBM7bY79sHmJJTXcjpobSd4UfmUc4qScuQXdLESNLrbJMv",
  "key27": "3SzXQ2V835DTyVs55MmMjELUwZNiMx6Wkv3EoscCawnfmcsrnAGiZGVVdKYcn4nGbF1qnY7sbgwjnBUgpL88ZRvK",
  "key28": "3gPDkJiFvcHtVFCZvUS8x25jKoqXGiBRdp16cLf4CUiWKuKP3CN8pNFgtsN8jCMiy9Ficw71bi6nb35CsfmNaAnD",
  "key29": "52a6nRLhJYM3VEzcyrZbKShuSw5wQDKampFm41DbuVQYR3VLFz8F5veFrsptYwZofBNkKxdieetJZBMNVHDuZtuU",
  "key30": "bTZ7qzRpQRYH1qYoZcvrJsRcPMkQM51QvgBXPGEHnnRd9iaznendFWvjjSURQnKrAUBepnNa9xiU9GeUB6AvGdi",
  "key31": "48SHg1UuEDcK1cNNoomqssg1QunrH4JEjF9286onrWj6qAyftWUieAiXMgMhEvoCsEXebZXhqYEL2yTRCdZHkqCV",
  "key32": "3Vodqfatzr9hKU49iq6Uyqr1EGoMX8sbPsP6Jfti3eh9QeNX4NtWHsRf57UvK6n7YLMq6kDKiFTxKJmNNF2uDwQF",
  "key33": "5jiYdrJvud4j1XZmYpsFzriJZVwxjjxdzPDeTcH3JXbq4nts5NYSBfcCszyKAE5imeCqRnqBbzXUSvu2qCBGSZyn",
  "key34": "A6US2Qu6uUTa2Fga1WLD2KZUEexU2sxwfTueGi43h37QJB1ahEmVFomPSCZ1ZcWdXyr4znhuemNdGWiJPWMGEXp",
  "key35": "88xBGjbaQwd8C4iR2o2U47ts4sTYX76XLXjpMhXKzKHSoAtJySZrVi1oE5Hv194Fhss1DvaScosF5zuxfBTEyqp",
  "key36": "2fYRrmgt8rs5XiKqCwzJE393i1ERwDA2NTSAFYjEngZR8crLXtUzvr6s7t5dfzycJPwzBQpp9apbL8mmnFdi1Avo",
  "key37": "3cF5Ake4yfA6WVvwaRDezCyn4PZKdMw8LEKoWfcAh3sMFyRrZFty86Q9MD3cjA4Ho8GCYdrjJndkpxGjdutd1wiR"
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
