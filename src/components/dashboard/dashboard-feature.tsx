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
    "2SKzDBLNvCsYGLJocFPG6cb1KnZo5c3WzevjN8VSAmzPYm1ooH1Dqea14Abw6zY6RKH4RSh7TjMteRdRPr1UqvrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ws4CsTXepz9uUjBN2oKyoX1gGJMDrWqSFtCan6dt1qr4sBBkWNAi7gTeSBF2vQjuLizHa5fRgFiEdJyPNwgn5x4",
  "key1": "66zGi2RxkWW4GGnmwszVSAQt6q8FYb8gF3HX5P2ZF4uK8897E29NJK9QjDUu6LmtA9CUHCtZeAhJm9wPMc7jtFNq",
  "key2": "49AeqscV6DpSnLzZTUHgzLuMWRNBkN27aJpqNWSVymvEtf2q3dFtWZ9gMVX6ajcVh9ZhuS7CJxnUMeSUgGf6fR2B",
  "key3": "2w52aLVRwnUgti4bDJpepPc3BkzeVwPg1uUJRxvK5GiycCf27ijpcNeUu7kwqARvprGVUGcdAeAsX1rdthjc2FBp",
  "key4": "5w5YWrH4ppYCPCwtjcK6J269TzT744zFWfVMGRRPyEpGxktym6jKsdEzmne4WdPoNW7iYuXDF5NMp78VUcDM5k7K",
  "key5": "2cY4N1tz5b1kDTYkccxjfWkbwp2YopEGi2MAxH3zd6Y28JsqoKYJwttbVqrhKyXUCyLzShdBg89kSeYw4LSmFdWn",
  "key6": "2KJBe9cbUNV4Aja8Cd61mjNGa1NKxNDt7FLtSssw8WodkQkFJ9rGDmCmtA3ZTcBEoPc2a6FzB8RyVNVccbUb4oPf",
  "key7": "jqrS2wiA1MGSn1gjBfVrSEVQ1rYeRFdvD1HEF5XZMEs5uiiYSNiVUBEH9XxZrxQNiXW1adRqpACbXt1Q4WTvC36",
  "key8": "3yeDnsA2kXK19PqQVzQfzMexrjDS9nTyrhDPCRR6D2GYBCxMd37vVGVxVKpdFTFzz13H5XwCpBy495MoQMSpWU95",
  "key9": "ALiNrgY1PaBLKqVamtTArReZCSv7BmhEWJLngSz95xJFNNs2rJTRKdPA3pvu4iZtMmgz448VVX74pqNU91Vs83s",
  "key10": "67pHuLhhEnbyN9brggSCpmtQoDmKk46tBm3tRnfsBHzm9tTtZeC2PvCuCcX5ryeagEeuUicAzgKtHVnAfjyrUYS3",
  "key11": "5mWEdo6ikUY438vVUV9h68NjFV2JuPwHPKMZGA8667YQAFGSFPupcQ3uYnCoJY4qCc57Nrq17U892pVAutW7oZaC",
  "key12": "5zNcXDFjgyTvyQKa9LKSuadCoFdxvLZ89GRAZXVWUxErsXUMF2KPDPiKZqshfxpqD6J4DAiHrnJdYwce4nxCYTaA",
  "key13": "4HPLVmtNGQtNxjUEAopMyFJATd17PDqsKMbHgXPSP1Tntqv6bLwS69EMeABwrCpxGRTtB13Ewy1fzzhRZNj2rwKN",
  "key14": "3PSqATNy5VX31YeWRWQrUaRb6KoJAARqHXVxWLbjM3hE2FCcLypoYdzECKoJx7PXobYGzUAS3GrRYu2WC8BDkfXh",
  "key15": "BeNiKwyk4FpyTwiunPEsgJjbTXnRZheki6uF4k1naaHNihQgPq5ByrELE6su4BVd36QK2k8KDYDqhRr6WTyHYbW",
  "key16": "64WtaGkB9MkAh6dTcH8SZDukWdZTYs14nCW9PVRUXm4fa88fgFrB733SQpRzY2fqXQingAE9RKk1KHPfVoJQNyct",
  "key17": "fbKt99Z4wTemP1NZteaKXKn7kYk7wycUXp7QqHAWBpAn1p3HpJoeFsmpT5n2fQ586gEZnXsaGfc1U1aFtx9gW8J",
  "key18": "658vK4YEJrjrGPHfzWvHxGvDfTj6izytbTgeb6fW1xAb1dEXwrDDnZeGvce8NPcor9b3pXwYPAhXJsaW4TG9KnwL",
  "key19": "5jYt96WtxbHetkBjpPVYddX7tqre83JxEtUmaL1bkn2ucx9nypnzfmVi4pVWDgLauTS9U7Xrf4PhTuCsGXuQaB9W",
  "key20": "3818tMp2qN8x5NxRu7ghCuc4gKGA8bm4EYWZW6E44BJSfxBaffCPXDCcoDqfuaNdNtpuPV45jNcQ7XsMaL1S6DF5",
  "key21": "3241ZZQP5LnJw9UnQs6Qu6tATDDRJwswp1audfGn7L4B1dptFEzBrbvnthaPuZKzKMod5tv13MBMRPL8SDeNVgX9",
  "key22": "3Y8kc3xmj2aZVwihdCc3EsGwaQ8iYu8G9YoKx8NKc4TAkeRsMTDsUWwPJTBdPNc2841yKggsL4btW4kicTm8mrJF",
  "key23": "9vR2QBaMXqRCVicmfbXM6zaEZvm7caZLK98L7kZhPL1gjLtGomW3uxxK45TmBpiFcfvKFpfzR3mvWmFMyE728Rt",
  "key24": "42irnmKvZ7t14qAQyahBufKv6NijoFCtMxsLv1RTDVhsEw2auTCBFa4N3DNk1R24ucUne3z75ktQExUCxdQxnZiH",
  "key25": "4PTnoawQAcFJyhtMdp4eWzMrBT4YzYK7JxyD5FBFNdcpqTzQnLytkpKe1rAJdLDzT2nEmA6kpj9pcJLKjKBdrwzi",
  "key26": "3CZpDbBEra7GqhJDVAU9qomLFBm5LmCKr9cBLbSGcPKM9D7HCNwpiWaNKyrKN5x78T5W61mC5idjV6UMnxjdiP5t",
  "key27": "2qxxtpdxnHZSizFVBgqq7yCcYc3fbzbDabfSX3agzMi7CfpG9bKKzoahoMRLJ79z5tFcQeb3gzNTVrVmaH1jGntR"
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
