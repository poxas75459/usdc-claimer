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
    "3Dkq75E4ysRE5MMP4ZQpnmt2nRuR6TN6GVUVxfqHVrNGcEZYruSZ58jaWHRERLhaWU6BTPYvkVYSLxM7k4mgMQQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bA9BNCaMNuZNhhMzB2tXSVhJo2P9AhH8zNTaRZNpZcE7AJ1U1xQgbLgDzhsMHFgQL8jwtVcNxLgEK4vpfuuFpqc",
  "key1": "5FyHg54bKvhCMoxBvz4N6RRS2CvEmPPmatuacmf3ZGLR8PJrtYJULeVv7YedN1gDCZ7DPzQ395wBGyTLRvDZBL2D",
  "key2": "3aavH4Ff61BxLV4gxcZAE2J2dPgsTC7TPRzVU2ro6Mvh8muWtEFcZWPLYEjUJBAuh7T2YuBaoBQEP2ZMGCvyvk2M",
  "key3": "5y7mjNyeXsoTVBw2ACMPtsyYMty3SsumRFq8FbYdSGZVTbBuQ813bu1hyHP7z7PZu9He5NXNYwZjp87VAgcxYNxe",
  "key4": "5GKfsALzyVdeKfG76ia4oSH6cFMoCYhdbdJRkpHfQY4QD1QJHnAMf3qJt7SGwnYJQpmjSeX6YKUKic2BHMdEvxYs",
  "key5": "2VSmYC7tpV6ip5pFRD1GWxGNfX7tEXjdh4SfUNmaet8DbaqVo96m6WCaaV1WpTaDB5cScPV9zQBAi1jgQW9cFM1V",
  "key6": "42qvDeejmvyNFrjLvZhQ5qXyGesQqRoDS6GxvB5niL84mx5aXbpPMkYrrocQbYVRnyEaeTDYEEE4etJWJH4WWGxt",
  "key7": "592gmVqbQrDJakpiA9mKgX9TJJB715JQk793bHe2YUJpEA4x41vyLHegxfESQnH16RnJunGY2Ca1Jb8CsLKYpAmf",
  "key8": "3fJaxipmP7WBWb55Xnf2Hmdt1QC5pGK8dWqWyvmzqbAqwMt58fd7UwAYadqPDyPeLroH1F9gi31u8kGTatJTAvqc",
  "key9": "51bmsfbKy9MupP2UsJpAs1KogxVVp1JoXyZwX3JcihiTGPVJB5KDu9z2LTFEZa15PSENK79bZWyh73azdSmzoVaD",
  "key10": "5TaVPYzc7wDtSE3kJNe861qGynyJSmXCj54jfCCrzxy69WKwwU6sUZQehGbkNLvRkcGkH4g9i8u7ejghu6Ny71PG",
  "key11": "66VU4kgRy82CcwpSgrrmt7AbZJvGoKvrH4GtGwH5djoEnk19EqFwo3CktP3jAcBCaU6XzNjcgk21wkUHBcs2mUEY",
  "key12": "4ohG871g9kJXdow5jJysoe6BfKJQJV64kS6qysiyPj8u6J3qDoSq4LRbS7tbjxTN13xXTgFVs3nLaRknk5VJnJCj",
  "key13": "5Bsr4cUNYCuJ424MnuMDi5NrGVNm4gt26vnNwo6LYh3PM9VoD9d6DAcNVFYuxdCFY98UDwTwccMi95D4DhGjqau9",
  "key14": "5Sjym6uf6NQSWUs8RUkHtWSrN59yGLgAwtEB14cKiYG395mxC9gj9oQJL13zGjJX2pLW2Ka1LycfnBsfoynJsQQU",
  "key15": "5nez5z3Wpy9bq722aAFtF64NhF3x3xvJTgcHqReEQEBCAD8fRp3UpHJLKSrrgNByciSfk49hstNHqqXJt2kbdHQc",
  "key16": "5by8MyNQzrbBLH8oZaw4cWzaVdRBs8SDBtAoGAwC7xugGHApbMLGyBE1ReVhAyeSYV7J4gxKL717Tyork7nor1ET",
  "key17": "3nooFohGH7YQLZHBwqu42MKEK4NEs7m1XxB9NC2MBGuL8BPqQ5bC5iEmQ1Wg8LwQGnb7D51wG92JhBLp29ovhRcV",
  "key18": "65tYjJdkugtXisfaA5VwRryfW6aKQNVG8kUJzL24N5RkUHerZc5DXFvd6H6g4jhQkP9hzPyQUW98ojUJ2yAdfEw",
  "key19": "3icg9RcGiGA8bJCJK3xsc9RCw25vby8k7Tjw5XyfCDahgJszvrH8XJXsee9e4pGiDFCTkDqAzAF1HE8gDxFduySX",
  "key20": "2cbagN78A8DDmuPXhLC5jiZzBvPs6Jfr8agiUtDS8nuYba285GiDWtMdxQpGomJZBXXns9tiiVmNbEUYAaxcbA7Y",
  "key21": "5UgxoR9LkTki9pNC2D4BwCFKorieTSpGhozvoMLzHohuoZfPrSQ7HxG1y9HAhPVJPecTya5iRLCqeXG8bS26FT3w",
  "key22": "55BvGHoQda3zo3uGnWQrxRHhrmT3EsGpbGQveFqNNE1VZFQzMNCQ3sjHqdDBBstHig9UqQ9USZtjqQJAGPayjhqY",
  "key23": "4bNLAfvhCDAaBuL9UimVsV1LsaBPBbkndRA3wD6smfVFYPrBktn7T1YUGrdzJeZCAydTmAfY3NGJ7TJ8AKBKiqBD",
  "key24": "jnjNTffJ6rvTJwUiBAjNer9ggeHWiwcP8yrdTSSKbBPRy94Cho8tehkeMD43voH13uucQpQo5b1aoKcCGyVoWUQ",
  "key25": "P3rXWAVtgvg8ejrdTsgvW6JvX1zoUSFbeziNHVY2YPAQLKhiAzi5G1ZUJyUishupD2hGdTUo6A3ZFna3xfj13wb",
  "key26": "4KZZ4CMFFby6GK9kEXAQ3rwEUDFnPnJDhKudasY5m8XUwSvCkxQgQTEcLCSqt3W4WZGag2SGb45ePW2krKHvqqfr",
  "key27": "4Sh9ib4HJYxRgEGYkjkKnRTtcSrJHMuPKVoQg4AEDZuWTaX9wrdcFnUK7Aj6XVfBqb48Lit28cbgES65usvSXCPa",
  "key28": "4VwY3NtcMAXSvrpJZjWgcr4hf9t6NXoveaLJ7qqRU6bMcbtzQhmehjmRuNBXShSDZg9uiusBNn7iT216vH5czinh",
  "key29": "4zg1XK9b4ugnoSsDhP5qPiR4d84ZPvCR5dfoqzn3x5aoxKjLVzNszeJowDDkqKKgLp7Loch7UCbeWazgHohmGpvh"
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
