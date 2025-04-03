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
    "5BxJeksXMkvnjVvEJCw8jqnfpLHDjfvmn9XAivK1xQXqgF33MJFkj5gLsW9FpQzvHHDJ6yuQ9o3B8CuL5ey1BR3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWXuLzSR9DBvXgCMEtWnfMhLYQDdqEPRDfNDVK6WmKmTXcoiTmQ3kvKRWf2vxLeb2oUufqK2BwWz7n2tMPi7SLM",
  "key1": "5Yqfq8WBEhyNANqFbKngjeM5bsUFWpoaCDSbUfEM3NyqpPvnQtfujjC9g7efRy6asxLeDbtMm1Z6mNdnhLBmPxQZ",
  "key2": "2L2oeqAZJBv4QR7oASdRrcPgMQU9PsBocA4wdKhKjLag1REm39RPsUmXqkWWxiVdtra76jXLwFgaBpDcDkxc13zT",
  "key3": "2eLEuUVLe7M3u35myDjen2A9oHKYAYiBsPuj2M7TjQhhy62PhxZ3sFschmGw2rdtBg84ayw2wHhp7NrZ6DewKc7J",
  "key4": "27bhXuJDa59Xt194ue2bTJvPhpvGhVfvMksBTpW7b2Paie53VRoFGEP5eDyfibXfVMBpBBz3yK34LB2U6RoUSajb",
  "key5": "5JRpkZxKoQuURK2mxmeGh2AUPLiryjtwbsykRtrNcgFiRxQ68xmyXXd3r6Lg4qmT4kAQjt3cLHzQcCmYmbPBxwDo",
  "key6": "2yakXMYqiPh4AxLYsMBCLTw2RxyraCuSfpHFC4E3cg9zPV4vbxx1igEgswVDFsL1MDgLzrPKCqb9eDqVi2ribe1y",
  "key7": "3S4bRGFoLKhuvPrbZKSjoBeCr1e4Z63Xp5zmwa6BgdvY84Estv1xHP8mT71MMNcb2DZFo7xwaNTpVHBKMVxivy6",
  "key8": "xaS9JmCvNk5eskjrQyQwYnQSQKGRZvMwMXu4jQEgzspP1mZBWBKxnNgXg6Bhos1goQqD91eFT2yYcXavSGvS4EE",
  "key9": "3M65oNHmc38eZKPiNtTrzYwhVYW2MQypi33WkStWj1bqS4uub2AmrZT9X31fS5ByXXCTDE7RbETSEBr5JcfpHT8Z",
  "key10": "5xPt7ygSmVycQKDZMpBEWmvZ6pf6Ay2i9yBepsuUoCmKTJiEEpsyXjVrREtAE5EVBv1pQRt4YZPuabaZw5DFbgD7",
  "key11": "3FMEHchGxYUR86jetogPVBpmMmtVhbugbzpnY7CDwmeM8L6AdgF4JDLgH9LqogFf9q3Pwo5rSvYkUjxUkEFDGXe6",
  "key12": "2X1mmKx7Fy8C7NLeroisBr4hKuXAFqCQbm1ArCjSJUWgfUnq2YRZ354XW1RLpPtJsT3CZyXdjgsrxc5Kae9GRT19",
  "key13": "3WjNjH3i8k1Up75kopjpRX2g5zXR3iS32c3KMiL55zhVgZLrKeGjWpHzhxTS1PTKNmeS3WbfvqouBCpxeYnVtsJh",
  "key14": "5W2HJRQMHNaiCp8TKoZrVk97kmbf7GwWxjzvbUy1KLnp9vdsmV12jjVtDNp6PBuCapzPs1mbntYPAVXYYEAd5MfP",
  "key15": "yUjprkgQ7jjTT81gNH7MzUtqb83NNCpZ4PMoA12xNf8BLRTC1rf4yQSg57Cuj6BZ2eck42KdxTGyhaDbtV8xKyK",
  "key16": "5TXUEo11gn9TL33SowaZdxxDshnAPXqmKCygMygpCKAjh29v1RjQZGJ64cUteTWFJG81yKyGAEkVdotkoMzo3gEH",
  "key17": "3aqTtWezGbGkrk3GoHsvGGj2SJZQocYdToGMNcVcW7FBZPKx5yEdE3oyneNVxtUMidV3mg3ymiuueYpnsvLeBS1u",
  "key18": "2juCZxkkGZw3Qy51CR8KqE4hLk8ywkbiutdFo2E9iks3jjpyqpWWrCvqT2qwSQcNMUAHPje67ZS4pBvSjfdc4gff",
  "key19": "4TRew96a5rdMAyB3KELwRHxdLTyDrwjvVx52kjkjkhgGwdf2Z5GL7vwcTeqrKTdWhP5sfB46hKhckWxew3GUNWgn",
  "key20": "4B4scnB7wEdNf1u4om6jGyap7zWA8RCBea5VTtPzQHNmMb6ShZaqc2e1p1EX8V76ksecnKxAKuKYkKh9EgZAugzp",
  "key21": "BcFUaTsCspvV6ni46BNocax9KZG7oYzkcsowePrmV49tcKeZPHLxFL7rruS1qN7BFimZNuZgexzD3FHoQjmGQQN",
  "key22": "36Fcr1dQs2XYfyTctW7ddK3gJFdez5KuSoiEL3nVf37BK1nvXoyWVKC7J34twqyQXNJqQVg7PheWHxpCKfhje92G",
  "key23": "66eQGMmYGfJHpyozg7QxY59fveoDsk6kqvGpNbRfDgxnX8NoXQiK1sMdjFvJ9Mav3Y1acywMDqJCyRsYZcCyuDjY",
  "key24": "HRaUbb6CQ43dksGyTGf397Z4vL2heyN7oDk3k7w9RmQdfig44mNku9mpeos8upeB1pp79xJyh62zHDqXEFHMSdV",
  "key25": "4fFMbzY5JwxCcgTVxTQhT8MvSnm9j1WpDBw7PPLuKWYEG1NCdh4VyqpPpVvxygNL1idGU4Wax9NGKfMFpaA95CRu",
  "key26": "3d2xQxdGvXAtk1FhczcLyt4zWP3ZWKsYF5QkcAiincff48kfNKHvo5j2sfG6mq23W3hwLrMDA5QCSyppDMF6kqd5",
  "key27": "3MSd71wGJpKLhYeHMkZ6wV3gog4g7Eq8AcmeTvFGRdgB9JFwZZEmbMEhyuX7ouM9aNv4xH6741nAfKGefVEqfWYv",
  "key28": "3ThWqjp2jja47Tq9uekcRBF1Pujp4u59Ad4ebxmnkqnnBTYZfmNkcgi76z8HdziybucjxKoHHRZse8a6L9s7XM6P",
  "key29": "5qnUGTYg4zkasmtbsDbcE6mhvz5XUqDuW5DB97fJ8E7pk5t26UH5MkpyyqpPu3o1a5sw7wQmK7Pr5yq78jwjWy4x",
  "key30": "2p2WsB741nonLtwmzKtWfDvGtaUBrTT6YRT232cRKLNBBa2wV6twUxucnyd1uoEzJvcQLcbBUwAv6CXrCfCRjFXK",
  "key31": "5ynN7MsrSvfsSxc5YAsjZBsmTcoXBdiAC4Kt2xP4PAsiWBhjjiB8mdYGg5ZVCDmssdmusZtHJ4wsPS58bSj6GS63",
  "key32": "2mD6tVvEcWRfXo7mG8YRRNHedn6oavQSaiXY6TUpZAZXgPcEp3xsthyMDSWZPP11iQbcB4EwiLSvkx93eWGWG6C",
  "key33": "2a5SeYzx8wWTYAoCTmD4rCKDh8g5DcGrptSMuK8swjSLoF2KjQndDJ6vCAnHgdQycbZ4CxXodtsvxYfVZjwqKqiM",
  "key34": "g74hHzuhVtkczKUuGVEf3BbjA4ZTRaJaJ8VVSzoRLUKoPTepkeGeKGgLMTyW2SBQsEb11h5mGQch4BKkTrwaoZM",
  "key35": "4De43JyP6FYe5QZ9C5LSKymdFxnhYF5cSDpsffoweWoVAi1Kqii8yWkTM8DXoeC8DkZzYZbieFyKhWdt2p3GZLbe",
  "key36": "56J7KqiJKRZoDy6tyUKAPGkSFkuh2n1ukDU54xNXwgDVFQL7AcrkcxMjqY1qUTt7PfGRdLmNEnzZYSfWrSDrbgax"
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
