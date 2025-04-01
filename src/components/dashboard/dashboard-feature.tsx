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
    "NAWqQh7LjHa4t8xzQkzJVDrUaJa28qBPUFVxok3JzuhrJn2hmMw9gFPqpybRbsfVy6kB97bg3aNEEQDcdya1fF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTDme6AxCxKmYAqP6BW7KaqartBcTEWTe2QVDrecZiVLmWYo2hFpeEKRJkqawLLfLK61VSXAmhkzYPPFT81xoJ9",
  "key1": "37cZxqe2Bd2jrpW2haycennjsY64S844vAzbzLgcsV7Wpzjjxdk2xFRomewuq6oTi2M2tNgaMsoF1sARUikYnoT9",
  "key2": "2cQd8Y6qCzSbnQD1u4qzXfwdrf88Y7dKr3z2DfKKr7W8rWUVVU2Xf7LQHUsw483b9ySTGGvVTZYd88y9axn7rXS5",
  "key3": "2nLN5onFD9dgp23nqzGd5oHcQEijewt95wPH5uv2AG8ns7bB39dhipbAM1RiD4dWTrUC1DpkXznxJY4LyWpgt2AD",
  "key4": "2STbu3fnA44aknAHsQShhQaeMU3Wrc1R2ta9eQ88NNR18o5W28MHfjhx2xPozzKGrCMntGqUPNHBg4UmSjBDkjDs",
  "key5": "3NXCPF52WuybACCuJTNG4mqftR48KzhmVY5USvipqZaqYMjvz2VTzWqLdP1Zn5q6BT7DfHdptVAXi6KhbLDbzmL1",
  "key6": "31LbZSDoLzstwNpZKxUJwhEuUfYsKt69i7ZSC15wMsH7qCFZocwoyhCmChtdq3c7qN8ESDB38Q7HL5vxQNnSe21U",
  "key7": "5zisSzfp9HPHgMuh1J3HRezQ4rTWqJeuBg2aTEkmR1SP3YrtX2XuWdotYAVCXpzZ4P97i6QcGSK7zy7UWmFWYJJb",
  "key8": "3LqyW7Fspm68WcHxnbUXMJ5znTRWu6X5WxiBKnQiytvJxuyNqAtXQq6mh1DzYZDFQ2JHypGDvQx1ncqAyTd89dbf",
  "key9": "3HquYLGft4D9qoPrbcqGeEPtDY9QK1UGyueKduaJUERYoDLwtnYBx9AsgdGAemoE1ew5yBTD6wBZoYtGtTP8EFca",
  "key10": "4bGZNNmpuzCuBNjGA3rHqQwS8k12vn1YnXoZNZxwpxUZjJLdiPXoj1qbpW1jFzzydNdSQj5gudSQYV6nDdthNnwe",
  "key11": "3wC3JjnTxoDVBQeLGrnKktWST5bJcDH6cKPjp49XZAKzdRNCpee5NuM4Cg5Y9drXet3DjtqPx3rVqUfHTfP31GAY",
  "key12": "5wVThMPKZ1ve6dKmkH9JyoWVd9xQPiZiEgEgxcXzhh2HbxNiRq4HpYR5KipBWxwjp7CpMrc67AQu3WgTUyu4CJyk",
  "key13": "2HvBuYvHRmR1DrjRkWztQd86XUzw23TYmWimmoZdGTNHUa3atcgfSBzvSS3Cd93MpcourgCkW7UEimoah1yr5ALW",
  "key14": "2VdzjtjrtCgRkKze6eRxNKCNeDAAx9s9NbsDQ9G2Frda4rgYyZxJg1X5iQPBxcAjwBc15UNzXeQHsGMd8ekTguf8",
  "key15": "29xmyipCnnoUpXiNdGNMPTqhAitAW6sCxde9huqrRWSXi41qtn1v6ufybLL2Z4hchmYqUefw1ABoGZ9tyTsaiE7E",
  "key16": "2isGfohUn3yhK31Z1WDzjzrKByt7RKkZKEpgbLYV8BzSnUCRzEAWtdZkH2WkbYEG1CCdFdh8Eh2tnhkgpA8msufw",
  "key17": "2YPzMFoZPfzbmT23TEkTRFDjpBpJUiCW37Kv5wHxJB6LVeyYLQErN4g4V4X3kPTKUNQuuDGrfyvXhzubPymQwwjj",
  "key18": "3CQtKyTtcjifo4P1W5JtHj9zw3LLHWmyEWZnkdPUFamJyPpKAWHRfbNJkDLYeQiieaLT2HzeGNN8qffS6UEWXPLA",
  "key19": "4A9WAB8dDxoX87zjhJ5wAo7UvNzyo2jW4TGEWwzrkujzV84KFchAk1QXNWkpgWmB71gWFFMxmymVmxGBM5MM38cn",
  "key20": "3mkuXMAL9B1XkMTi9csyfcJYqE7rpEJ88w9VtUsejCYuy34DMFHXdvVrtMSVzqHzQWoD3yXcoJ6agLxuJC2bmxvA",
  "key21": "2ntBQNafBCKYrBny2Jn9Yj3KWPgoJDpKkp37yG4HL9na7w8wa1HJysNapNBAEr1JADazZhgxfVVYAdfJHVEkYUef",
  "key22": "4iNNcMXNYSoje5ndqnxWJZNExvx8hLue2rtcXJjw2N869JvtXEa5TmA7fr76FPP9Bb1u4sRFg9rCcTv9nHfheaue",
  "key23": "bCTDnefSQ1aBbG2TtZJGxxgG69emAWvTs5EvYRoNaJuDJEnxVQwvBdQ9Lxhw7PkyTn2kEiXphQ5Xu3QVVSaYRnX",
  "key24": "2oXSURmi7z1R5rCVmRW8mctDdct2GPh6AVgpdBKmEejLiHys5sedQEiPKh6MtPA4pzw9hnrobPxsLZ7UwPdbvGp1",
  "key25": "4gVvDbUnQM7fUW2tWJW8aBuA8vQAgjk9tEBKNwJiMtk8hFPwTbPMTFzmf7m3EtQ1UauYQUwVAeMXj6W9cj4RDTvZ",
  "key26": "5ByRERfoKj3XUvK9ACvK8gTHKySHSLCnbk14by6uoEYhrGRMkjVSCtPtRJYH3SN13zHHJh2JxebTiyC4HcSQEaXh",
  "key27": "4bykSa9osky5kEv1tci8BLgV8sVoZLM3in55cQ782pRjgUEU9rJG3L4nL9TWexAjb1LuHEBEP9qnzPMvN1GSQcnN",
  "key28": "V6oDfpbkf6pp1p4UwRzm8RM8HPhkSGQsch3gAcAzQzewqs2DpvBjwrAmZ4GpbKEtMPKEeLTMT49Y633jA1ZYVGc",
  "key29": "bwdP2aSHTDAc9dzSCdJnW5mKvUvjLsw2GWiGmL3u5pftaX2via13e3Z6yYyxmY8UKdmvZVQymMbqPQz7y3JkycD",
  "key30": "21MHeWu37wcUPvW9ntXUxYW8vqDZ9bRmhiwRbqjSw7UUVfsbWpME1X57ZXkaU9uVY1VTypEfd1oMfhCiqXk5vdye",
  "key31": "4m4EFgKCSzy1hfKWxksi9iFdfDxoZQW7Xo83XrrcUU4n3QSceks1WsT3uwP4ux3vsVrujNQQSXRZVLDV4Go7fYcH",
  "key32": "pnDkKCiUC1AcWo9uHhQDeAWivNpjJV8vfCxZYBbjHJ4YfosjUkuAbsmNtzVQUNEWam6LCLnv2MsQMb8yjovwDwP",
  "key33": "2CUqC3Jk9Zon2E6KHtrVTz5Y8jK99otmAeXyFb62vfxtcXgn5paznAcBbUWCLLu1HiExaGN3TxRZUW4JX6tWD259",
  "key34": "3PyjPJVS6DxJfwrNiqfcgVFvC27dHVKJXrQtbLyHsRb3Et7XESV6f4YbQUj2YXKahZNhfCWmbUUQvKKfpqnQvQKL",
  "key35": "5K17JYZ1r21JKs1vT7FbBjjbEuvmRa7Zky8ez2LNEShXykKd6d8JdJhVzSWUD11pfjMQbsiJ6KR4JfxUcTuCXT7U"
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
