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
    "4BwDnnmxzpXvk1v6owHv1h31bzUEHxCznDKeT94rW9doVSmV3XCxcmFuQSJGgh9JDEF3TDgZcuT2Zy36dtZVapjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368ScMh2zrAJb3LHj9uhhSi1huxjFngi4WEDvFeReMU6a7uToh16ZXSVnXjU8SC5m4hsQywpbyEiUQnFYuUaGvkb",
  "key1": "2j5oztRnqe5yP3DZY32mVwQeeL3UT4JkGxzjF91XJ1RTqLeMxLFtAjXppCDej52ca7fhEsuq7AVi4RuTRwibfJeH",
  "key2": "5YzDWyGvER1VzvWWxkNQo7tdNMG2WoTwJpx44R1Hjthk3CxcZMaSY7VeyABaG8akHup2rr95YNxrDfpWXWdSTRwF",
  "key3": "3KQgTBLwNTu2wvf4ke2DuCJdsrePVak49dctjNAUmSYLTW94unnMJkvbdyLUgtvTb967iLaREJcBgQuKjEyKkQZu",
  "key4": "496comTNCkx8ydBhtYjYSeQeTq7p5JFzNy6r1SHuDCJCAAUQAXW8SQ3eLfLGbDj5isJGR5TvAWpCG46nueBfUeo2",
  "key5": "32J5jnj9RLkttjDBieB8BDa7FMpff1aJwfKXzPudvjJUvRzJy8NLkLxQcCdTLRz6B4VBBxfpw7tU5XQ3qdYX8JEg",
  "key6": "3RocmNbBLA74XmqNuxvuXCH6LDFRezE8YZSgwMDaTpLtyrrmVtJwKKK23qBCe992ZqwFRQC6NBgvbnW54TYKQipX",
  "key7": "55g5uJywqb3zphnJy9CRRJq1LtvRSKsr2NqjWAb2RcQvtUUx4PVvRkbhzuWK362F4Ud3vADMncojArYApXhhQM3y",
  "key8": "61jZcRKrXzPq7AwbP4g7zmQtEpzL5zQmVFvpVqRCaBgb5eEhB497CHZr9LZeUnP1ERnNNAAMSFSUYQK3wgcCycdA",
  "key9": "3ardGyxqi8kGnjQZp8oSYeEnJsPrxkDb98zeYWWuT25s9RxYgUGy8ZemHhhgBv2vVxcB3nGR33YEeomhkMWW15aa",
  "key10": "3x8ZiZHqmK35DAJ4ju5jV2jMj6iVnG4QsDRsy7NPvnBx7K49BVjnHmjkqvxzLTiFzgpeFnt8Zc6YswCxCMhosm47",
  "key11": "35nxsCDdzXJAWp6UK6nUNV7qF8Gfr2owWbuA82EHnbcj93StDdtXKLd5MtpXDSpTPZnLBsCUSVeixPTPhFdJgNeH",
  "key12": "4mfXHbCtHeSrg6t9bThF31UpiELnw53dqeU8Upc3FemX2GS5t7V6nhrZCkPzhhxeqr4523z7sJpdjsDW3CDzgyKr",
  "key13": "2Wfom3j2LtZbL7wUPb6ezJVFz1769Guffy1arayBNGDpGgCgCGCUqSxy7kHw7zd3SEUaDRmkFnnnQJWYFUAWYKqd",
  "key14": "2eLvqmrYEXiMQod8eEvzy4rVspCVvj46MQZnULPwpa3ddBhtb4tjoimJHeC6TZKk9pDJMk9rWYWawFdDmv1moqHe",
  "key15": "4XEtXKks317g1cChCQG9mxAMCBVGKsDBiAQ3rKAGnopt7rN8P38vtpZZmD9eGMzqQGnmMLmjNi22SKfjK3qmHGph",
  "key16": "3DuGymLJCubqUn2X4RUX41UeppJysmgjq6XDzhaXgBCjQeJxtaQzv36UFKpvG6hGXaMdqbYUiPZ4FL3YSaBXgrqu",
  "key17": "Vaura6UhKuYVXZZLZJRX4jxjJgRv5keUBQA4Ve5e3xH2WhWXwrp5SidKNVqrGheBamZPqpnd8d3t2VxDeW6PMZ9",
  "key18": "5dRUf2R7Q9LywNhzDRWYcCU3hic6HEJUo35tUndVZ6dWw87dqTSQ2ZYmAqaHjgBjM45zwZQxkXtByuthJ1JukUHp",
  "key19": "2AG8SkVSFbqmBAkCnCz5G3yDMNS1B2QB4BLKmtZ35DBuKwz2jsThLEMvv1Etwd9Qft4MpwMr9sbqAeLcqYhVtztx",
  "key20": "55bVnTMm1CfwdiejDP5yi4xh8X15JKAYuRPKLMYPoR2yoWvSTRPvnh4K1wJsdybHMqxsejZxafETzZYtND9hML7w",
  "key21": "5WdfW8oSKMUnATf3jFtehf3SkMAWboHMuNwU3tpAtZphamZma8LmKt8WK5qZuVDj7G94rr819o3Ln6PqGZ1E2ZN7",
  "key22": "2zA1pK2XMMChsAS8kCJ6mbqXTeV3stUuL1CAzenCwmsYpdarmGMvbC2saakLYuaS1HHmeGgkcYLt2isQnFAPaBHq",
  "key23": "5h46vvYixuAND81TkFjkdFuEjQMn39GroZgZFLF1RBZ4jHcxQPW2toqF8soUghdtFjNKr5sEBEwLehwMfRBdqPeU",
  "key24": "v7Zh7ui6tpg9iitfktkPmJJr2CitmoNmiNyXv1jU6McLwZNDxHBcAvwuWZ3TJxbTtxtrZHm351dXm4qJ9svgz5F",
  "key25": "4vz98FQ3yn4XTdL8cGCBRbtvp1tBFnQMpoqMtVoHLUeaiaouPVeL5e4x2vskqWEp9u8vKjtDgnbV57pQK7dA7aTy",
  "key26": "5vzwcek8VCVj3u3xHbqMUP7MohwQvpd1jeCQitdhneN6GkjcRK2F8Y35RY3a6C9XpgnqQj26SmDSRYYrzyY2jrHM",
  "key27": "4BYVtS2owPWnmwLnPwGnbgp4vArMSoBb6dxFVRawMVW8WE1i4szSKF6GeRUS3886zeVwjedP88ytiNxjgEDW1Nfm",
  "key28": "5natvcsho1WVwHuTWiHbweUGMZBdNkrQ4wK8ipGVVyfBuUfQchhFcApdM3NPdTfYE1kw4iKJWWDH1XpLSnsc2Ri9",
  "key29": "4EzQ9wXGEhKMzKUevepLiuTY6ugFA4gVi63eST2i6QRhEsxvvBX6qDXaoWpyvYLoF7quYB2WXmYm5uMbF31AjrVa",
  "key30": "vrZhfr415LyCZuQ6tvex1CcBbrQzRUHeDv71NMkX5HKFUsSryuvtwUDgA2gmnK2XKhCfzbUdasG6Fe8tJjeBwe3",
  "key31": "qtLp8KjdHS1MPuerLLVVysttGhKr77fU8aS6aoUbMLTNkoRTLZePNRK8a6Zg6s5MUwM34Ku9jdy8rjRwSLf9TaX",
  "key32": "58bLGWQLsbHBqZvyRikmp9TXGXgEgCGbBXUmyo6TL9Qtw3P1mhEHWP82K5nduVRqyoVym4yxK81BzYEc4jkPQCPC",
  "key33": "2KnW9zMrB5skEeMK2HivHUpjUcehFHipAyyWEh69ME43aoeMF66X2brAmKLzguZa1pPhB4neMb4X2AeuZ7c5wpPf",
  "key34": "5c1Ppi9Qp36o7MLnjECef5nNQ3kSFfRsNksyd74eCfHTg3KhMZtDm1NHD5aWeRY7VfJo6HTdMEEUHrawbqfMwYXP",
  "key35": "435FJHvuJkjSVTEWxtMQn8K4g9DYfLTvVoEorVfUv1g2abED3MRjD1gm2GPytSZLBjcFZMfrevVcSS3n5rdnyLWz",
  "key36": "4aJ5zmmM3EBKeguRiQygUqySajShfrpb2UdqkJvKLdsin9nCDwKbDHdWfRU4Ko3kgozjnSDAcseMGw9NuXviscHn",
  "key37": "37SFkEZAZrXT627KpB17EEPMxRX4TGbqb792QHuPRKUYsXmTPbZ6nhu3dHP39Un6EyrXRuDvS3yLAozjcsvH2oHx",
  "key38": "4MgKy88ffUJ8kCyqcGSN8hzJp981mLq1j8a3NM3mDusPZtHupSYh1Z5KTgUcm1rBbf6UrU75EcepW1N2knkjVDmM",
  "key39": "huHnY7HkQfPjYZw6YRRRWRdUi8vN6KnUjBReS25pNhHXzxWTEP6k5jU18uFgLAbLqfeodKB3BatwoDMLijgbgzL",
  "key40": "3JMeVoe4S4kqxWGq87s9SiayKtE9F7W9uBN6PUTsq9ggMQpJobieK6yUmbEACadscbTLWtwDogRhNoMbazz42hAK",
  "key41": "4PvEK56uzJfdQ6ELdqkHwRTGaxUGEiziwqCrKoNCE2YozdPnm82yzmF7H3Cr65wG8KqaenX1QJ4bSkx1C879NhdS",
  "key42": "3nwnJz1TVpT36pujitADRLehrtUJrKDsqveGUpQXayNCRsQL1fWhwShBDfwbxWCCQ2ZgpY1rpyjwA3AuhQ8HRWoz",
  "key43": "5oG7FDpSzhR6dSsMH8ALFs2nytTHzptoBhivZ3of35xKokcpU21Pj4nQCJ9GXPbyHnzLhiJQqqgTPzR4M986D8vU",
  "key44": "29rajqDuWSZf2yR7LiqtK9Q253gCmgQTrgrFV2Lj4q6s4b4v4k8gVyfP28dxDeycsJYEpohEWgyVhFyAwE4tiFCD",
  "key45": "4mmraucovVGRcFoiErv3VmT5jkfgCidh2wfrWKUHdFN3cAcvy9KVa8Dfm1pH75rb5sbqqycsWgrNb1AY17d9d2gU",
  "key46": "3pi4BbvasReyhGSRzT7iJE9STR3qwh4Ue5SJapGTiMtAgH2NXyJShKVvQXS2pUKbSGBF2q6QCtxyzNfeqU7w9EyT",
  "key47": "2KJMM8w7sp7nRXLh92nRMGTW5yxixcemGayUYzWAK4FEoqyWJQo5f6PAHkYXAoHo9pLGafVGusoCwEA8n3wnGypA",
  "key48": "kddyETA9GwHo3PaaJ6fTxTCXp3oAx3pvDtu3MW8A1A5iHmoA4hdwL669Gr8vdTcBGfouFfRcP1yyySLuvFymCkd"
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
