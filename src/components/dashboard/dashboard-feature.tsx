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
    "5N2e1MvRMRkHUerGCbWDsKauwGpyGQwudUmw7CUj8YooRmmkzJTYHtTrirK9zopG9XzuaaD49r9y5jXynuLsZj6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrKBRpEXCMgpkxmotM7nt9AZgHUzDo7AhpraYPxo7fGmq2uL29W82vFpFKCQBAP93AGKJMzu5mcHxSPk7Lqv6iK",
  "key1": "62woFBVSD1YxaRmWKzzfvwjm3cypj7G4qeyXZxdVeDGT9vrdBTUhkZS4BoLAd6pypHML2KWTmi3d9kHNAk93VqjK",
  "key2": "5EoYd6bSUXCxrRrbaQtkijkgaSdNrbUggGkjru94egFKrPynjsiR7j3zwLaLmc6xKskV1CUPF3cWVivVBR4XLjg9",
  "key3": "5N29JtdDhPEGbXbxdJXH6WEVY4rrexzAn5ZD7dURpypaFUBhegBkihofrxERQqSL5418y73DFt5QewwKhqebMnRY",
  "key4": "obgyo49RNBzdiBrzMan23Cg5TBFZpumN1v76uNXgQavtD7VwoDr9n3o21SDQYBB7Z9UvicjNmsYE8PCspgfFTzN",
  "key5": "FtWfCYKsAiCynTh8DbjKAg8XFLpcmhyjFpKQQKEvGsh89AUMCFQUhC5HMpM9tggGPCNrsTN3Wxu4e6cbCv8CNUu",
  "key6": "22VrSK6vNyQkEYuxCW3may2KkBjweNqeArEoygFyUymKHr8jNRkGiymrNd5G9nuqhV3Dvaq6mo72upniLm6VQk3K",
  "key7": "4AbhjFyKGh9eYi6jZ9cpNhmeufe5sLHtX2xKTS9eNUBwhzHtXvEsC29w6M2MNE3EVgaTcu6NAdHHofmstervfWvD",
  "key8": "3qGDBLiAhfBb42695bG3rTEvBdda73uhy1bi9sf3hoKKirFtLGEsnQ3WoSEujwBZKPStEhRMjwAdUgT3fgka8TyR",
  "key9": "2XKySXS86r7eWbrdAUioSou9U2rMkaBRvn4WZ62TgaGV6vhp3VVP5Ccyzb3peyvaKjViRKc5C5BNav7KAvY5fYd8",
  "key10": "2gKZdkc8PUQDKyoxUmK3Jzd7G57WSAsZkQP4weKUdsR8j6GxiKxJRZtQi4PhaLFXHrQU8afFTGpY3WNL9F4AiZj8",
  "key11": "3bRKSGabwvjxkeZ153gouN8PjXKJVV1vTCFBX4DwogAbiFwktxEcTm2WY3KHqxJD4d51ZfFpv6nfVKnvh2xs7trz",
  "key12": "4uceKnYfjwRkCnzU7tmECZKraZ5VF9VUFPFzg74XvbU84uxsa1uKZGcrfMm6GrKFmrKyNGLSpToe48SYNFp9YKtP",
  "key13": "5Vyb8cVU1ns4c3mLmnY7CptcK7brBahuciKj8o86by1DKNb9L7kdQgrqxQioHpDFYcwn2ZiPvFX2WkWdaTW5h9vN",
  "key14": "3Wm3hQerMKGwaTNkxFx9YneZ3qBp6jt3wJEbtLeA29egQtKvuzY7xzWDx1ZWZ5b6rYgB9tidxUtX1y6foy7AauGS",
  "key15": "5s8bwEdUGdmYTCLHo66gWdrHsjUg77M6Ta4X14ZGdYsrSe8h9bh4vcvcchpBqvHrE7kYdDCiCAFFPqaxB2rn9hMA",
  "key16": "538vaCWeZ9VUaCid44JEvkh7b4hZVPpqUQoFu9nhzBDu52jUpPchvf1YL9dpwiAqB9CegDGfbX1Tc7AheyRiMQhD",
  "key17": "4q4R7MXyk89aMiejSUght9LEuRMc3Fty4CHNG4Se8MCRfY6cmjAanMBGwts9jWEFouXx859gddNTrTqePGLbVoyq",
  "key18": "61uZEVrA8eMQDDev2yEsCGrBXE85mbnDVmgKrMQKqChXx6QszFzkZeHPZXSy2VQageMSvy1vCLWeWebJG9p3XFsF",
  "key19": "WmHthc6GEf1fZKKGwnDxezM8fcr55AXF9qBsXrJnCoYpMHdmpYhVVRjtcp8t9boqbQsVFR7Kuh3XuMToGQTfu9Q",
  "key20": "4SuXTapwpWTsuGcEVdhgha5U7BWG59E7x29VkbydPMY2jQdcg1gVSyjbVKtBwucosZTS9Tn9TxDoXqXqMueGE3dN",
  "key21": "2jpb1gYb3hzsfqkiBVr7GL9mj5xYoAToMEpkRmBGwVBm1ihTW5oibKL9Bf41J9hZr8ChKiSabYBjDp1RGzvLjpnW",
  "key22": "3inPoRbP5tDoa3oQdsmfUgwuDdEoNN5FpsMJPTHpS72bVQJJf1VGjoZbZK5ZNoZkPpZjrTqXwGE7LnN1wzVmRehf",
  "key23": "41dWBFC4zA6fEcxHbNYCYMVQtfZDskpEQXszr3U2kqAa1byoP3VxeQZPR5beVGXd1KAc5ZWVCViAd9P4maE5ypPP",
  "key24": "4Ctb4BbyNZu8gpocf83QwkdpdmEmsh6xvj27GhjwixfSyyDRE6DjE2SPA8uZhhnTacU9kHrm39zuFSyFT12cP1qW",
  "key25": "3WSAE3r2Sq7v4BxDeNwXXW3yragHRzPFQZTMZViz4nUPHJVy5iwFwoTzkeDv3WpNaZgMSRbgKareNe7jUSskf91Q",
  "key26": "2AMt3WorNmQmvFPVsK1cUYcXxzJfYWs2jj9WgcTsmFgqu8df9FCzQzvoH8BDyMy5tVH7mSgUWq2yJph7w2gBMTSa",
  "key27": "4e3j7EMbZEn6EA7VrFLku51ypCBy1ujjHKn9Uk3XQ6oFaseEZXyC8ViH1ncXBXAdNg1hbGMMqHCzTKVJHxAjkdbN",
  "key28": "331BtQUw3twgxA3vkftBbRtm5815Fez9HsPC1cU85g2HqQqjcsukbwiNZZANUMx7Gw4m6zdpwL1cVJobmocKXXcb",
  "key29": "4h7jBeDmNK5XEmxtki8PdQa8mF42nfTfiC1Wb266txvYeFTSwB3C1i7LF4TJ3u8iJYogzNfHUjcHBuYhJJZ3MYUM",
  "key30": "2BjuhFjsztpviLQJnVXuotGVN6qwnioPaczsFSwEaw2dsnAmScXF1A1XkMt1RzANGTq1sdTUV9K4raJcQiwqnUvs",
  "key31": "2BZhEbsbMx9gHHoYU5TcnwTa2RVHgRCaoYyRtL6U1QAdL13ckZX4XAE8qrR8epGV92Nfdg6mdP8ZSh7qWFXVbcgQ",
  "key32": "kLxYv2ufXps1D8RyB4pGXyjhfMzEVnuV8NM8YpNBo5PVF6kUKaQJByTbWfV89rKGzwK5YCTUZqy8zfCATdB97sn",
  "key33": "3NG5WCw8FFj6GXsqmz7B984L5GdQS9YdXdEvBy72fzUSpddijtxXa7pUrJEgciCZvALbVFW7vZsFiTqJ5uY8Pk95",
  "key34": "FgpXS4tiiU5Hycapm8i2bwaSXWxZXsB5cKLJvgfaByZDErPQAZsmpz78f6QFeELusux2xcN3DbgMzyab1KJCAvp",
  "key35": "65LotrVQ7Evg7vt9onjqxqQzXZNaF9pDAAb5DZeGuypRxo8DiAY2gEK1LzYdMH7XVKmfJqjMiuhds6JFZUwY1oqm",
  "key36": "3PswaBUo31xmvC36m6euLQx26bTDyAcJS8e6U3E1XZPtUNeyua67vL5WCtZPqMvkvjEsiANcvbayCN7U9oUvwDgn"
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
