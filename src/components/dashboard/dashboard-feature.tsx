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
    "rN4LSWEbes1csmqdurUepgybzHU4TpDfQhwUWMrX9zUHUgvna7uvWsvnBzAmLtPmcnUh5VqSr3qyFRsN1RZxcYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPUWfyj6gTzPNFE94t7nvsuYRR4pLNdKWrZzcpuWde5aVyVrT4twtbbjPRGubA4pbMR4PtuWyEZ6yjm3sj3LAJf",
  "key1": "iG5AV44tkUgRZ8bL4GcJ7nqGwS38nQowuzFbeRNkdhsk3M47BmhKsAGiPDPr8aapQXWDRqr3EMxB16A2vB7c29i",
  "key2": "fx3FT3rxyvykbEZEkDQsa7KGQbsRtGNEEKwCzpWUte6sXTPwzP5TSNQAw4kywxKBT8MgNo9sfhCYVv4oNXKNgxL",
  "key3": "3NgEZ78yiB9DQeBvp1iuyg9te5jVmHs1fc1DEiGs7A89dLpj8aiaU7rXsDwPykkzZZekvyhyPUZoRk13p38wMUX",
  "key4": "3nEKBcbotdem7RSjrkdZxJr1xKX4scacmJnaopg18qMnXR2CvAwPE3qP6EyqTNqXCBCwYbdLHh8nHd4WgJ8KpzT1",
  "key5": "4KsjdGouewkpHA25WwGwzRMGYZsuocRxGGX7V6r953xTFctGHsjzr8J75aEgxFY85fsSMFVF5RTfrsbaiCNVLksr",
  "key6": "33XixCECpbXAAfhdwdxgmv8QUEyxwSZhxaUiBWwq35EJhUSAqq8A6CP1NhdxWVgaUMSgCdrbzTLiFyUwvefcmkQP",
  "key7": "L5Zb19TCU1xH7WRHL9L7t7UhszUApfBRAhcTtMu456fu7BiaDPy3hVZdBtqpoMnVtRsLREwUUzEMZWr8tFspEfM",
  "key8": "6uHgwksP5YT361BFCVhdnKQ3odmdrMDHG6Sjaq4izmUGrDGXaL6Cyi6qaDXvng8g4GSjQyBaZctKp4Ma4ginCn1",
  "key9": "3uXgF1dfURvt2D3bqjWJdfWouareYJ3Uv44ubpbX8nU4EapqEtQPWUjbL6JvUJbzTZC6Z1mLJd2tCUM5xTjcDCiH",
  "key10": "5BJgPnVRAszNsZ3XvKGE2BSMbmcuKQrbRb9Mx53eXicuUhHCbWEpf3L2wfkvYr13wLeF3shHdkmNeuD16if2P69y",
  "key11": "67dUwzwx5zX5nPSatpBeD5GFsGJg9No4Y9eoabRguuVXAaP1TnwY9t87gvWo7UKRX8ZJ5xGDLkFzR43FfbiHaaxX",
  "key12": "2J5bwApkpHWqttUh4vnRLYzuwFCA7srvHQotEzPeJGeAyirkRjNfGmnSDshHwj5iF7hAWtH5o5a73N6Z6RekQ5J9",
  "key13": "3yzC7s6uqFxAdEoAMnzoATNdriPWFAa5marApFREGx7G9BnNarw5TYwfmnpzzypjWVc6BxQaPPdoh8pPtyRZCrHM",
  "key14": "2L78RzGBYRM9gmrm4Fzqa46ANEnDgDqirPkUQhnxeXxErB6vcQtHLJzv9dXvg5G72Ysp8yUSwbtjRCzzojAZaheS",
  "key15": "5ixM136FdKKEvbvs9pUUWbwi5axbcD4WwqS5C5JtQd2ivbVE1BusLS5WEToY7WbnqvoE4v7qUqRWFMYkVcwe6ddD",
  "key16": "4RFEJCGTMB7uJGkaFK3ytTKyAZzKc17FK2xaSV7DsbdUJG7uNTP55HxyURdwL5yc1bkwSC9Lvv9nBgR6eMf5His4",
  "key17": "3szMddZTfAs21uYySCC7iRTt9ZNFdGLbTQUc4AZ3RfbNkSDKwYnYy48d9RdSnsk7jqZvpGKatFT3Fnpaf8ZcbHt6",
  "key18": "3E6oWSvCUoQoZsFQX2Ze2KyBnpRjS1N1YgeuzmkTpk6r8z5Q8HUsZ2ZJ6iMnFqwXbhZFK1qsnPxB4LnVr8YtJtXm",
  "key19": "3t1oJecrMafiErZQv7tddh6rK3FyDVdLXsd1qCU9ZNbvdURxdgtLfCEXdjGzWgAidid1jyhcqa1KGEMCAm5asayD",
  "key20": "36RLR44Ync547iiPsRm7rPoigvmEw6z1nTbrXTFigiwJytFnJxg8hkdjmjkCQi4aPRZL8RJNwVtAT3iP9N24TobA",
  "key21": "4vEuaxv7mYtzir7JjfjDRySUx9TpKWf4FhNsNVqr3NXUMDSAMbvcsG7e5PLGQ9GHo6X5r4qGRo2qwRNWSELovTRV",
  "key22": "24nDUsqofaYcow98Gn3WKUFbDviV7M4rSxB3soet7uEGEvW7YUoEDn3CNAY4hadCNJvxEXYXo3NT2AJNKwrGPScJ",
  "key23": "GXnrJRR947XMQ7ncVMAat7QuuKBHcg1snjvpLfK3G9DHK5S8ABNSSPQJp31veTuCwpjsGHdCjAVRoQfNVzzyYYp",
  "key24": "46FukRLs92x2kZbbUzKUKWc6oMpohU7uU3ZG5JqeHwPiV5oAaPFn5T8ykAg6Bf3cyCofygXii6f3ie7inUw1Bknz",
  "key25": "4qRFVyzAY6XAEN9n3ttEeM2JJ6vSmEvyTjKv5xEpENRwFaT8WxhPK7NesRuZfe3bmBmbe3BPnjwCaNdWdBXSQbjE",
  "key26": "5Pxos9dZRiEHt6NbakEjpgNXYFVmvGoVxBi4KSBmJGknNjY2J3Ck8FHGzC4pHjj9s8ifh4gZAcDT4BedpFrGw5uM",
  "key27": "4Yzveih2UKPtAEP6viUdEFRho2aMeZuiNRLqNLQefrZGxcYCof74eJS9qAPh4z3HfVHp2Jji3nCuijcsZvgMyTma",
  "key28": "4dowNeiAdAXfc6P8dvxEooPbTmRno41utgYg7bn3EkM3yJ3stME24DaXJK3SGX4r3yz1WrU4UGSLh6wZm9kqpDvX",
  "key29": "49mruSdZNVRRAxrr3RXyaLA17M8xaaLa4fwqoQXAEL7et1FhvLpVZtLBN8TwCj3WyKsWUaHQ7btRZH1WjNUkb7eR",
  "key30": "3waxWvugcqJ5iZrsfdx9u7ZMib65XEm6r4fCLDTsABTy33zLLy7inumY86KL1wtXQBMT4kisqkuLpHceKqtNMRJ3",
  "key31": "4FhWrJvynuGqUeNWYuHjVKrahLQWQpxxPciRwmyDouhbQrf7tUAvNHTbpWaZQwDJBWSFGhfandW9mFJDRCYF5Gkp",
  "key32": "2UNARa12M3kv4p3bQUHQ7bzSYrb3p98BSnboj8FhGKsFXo6ZPDneDUJm1pDasGhqNgRYqS7WUDqdS1JqGhFS5hYR",
  "key33": "LphvNemyzUZsKyDDKprYFnx7Brk2Zs2nxR3HVFbhWKBYjg5tWUqWTa839b2U8apcqDvuo64zMZQt4PTNDPeNUWS",
  "key34": "7LgwB6GTKNMBrXBThtgTokSq4whi3ndkJYT24NrCmWySxY7BhakUX9u7GkPwmvMqqWrmtkAJMbYFdt9awQJNENQ",
  "key35": "2gDLevjmn9yKnvdt7Dg2GFYMTfyHWGo3vCrjeKTS8nt9VsqMtyXCT7r1JFECmjACmsPUdnhnSwdoWZ8JRenWQJs3",
  "key36": "4kgkWNjQx7utzCQMgwEa5PWki5GNsuoLDLJU2SUEsNMfmqT8NGMFjTFE9U3AWui5h89eWToUw4xGkb8dqEM2St1g",
  "key37": "5MfwdfDrHLEDSrn7AocZQCjQaVSmkzoQvWAVda8yKbANSZSta6BVVQpUyrp2N7B9bvBnMTAPKvw84Y9sQapvuJHF",
  "key38": "5MQ51QRHfqfTNApXcHTGH3vYU1KZf6gcGQp4VS1GoqsmCERukVYeQYhwfYa4mnf29ZpG4yPwSD72oDVh2aMYBonu",
  "key39": "3M899WfVX3XB6kNAsUeFgw3dQndJigWvSyezgegLH3zFTKDmoXHKm3X5PbebQh3FtHKTSD5oZhWxwVkmwC1zo5ou",
  "key40": "v6oSZPEZb7WvwBRM9PwvuCRUoy3Vu5yPqReb6hWxaRo21kVDUctx2ErTHQZsmWB3VS2UeW2RvicuA62dobbyxB9",
  "key41": "2eGSytiL7nGprBZhZwRaDeQyMwU7R1dD537kpJGtPHXQFnECxkwU99JNsthHRMnEGkbi9uVm8exfZz6UScqD49LW",
  "key42": "4o3jgPj7jeC2gFvgoBm5F8EjsLiWgvVxDWdA4yHW3RH56PoAGwSBZfjPkLDV5LBbKEQAg78ar1nhcwyL5QVhSJBE",
  "key43": "5jkuNLdcKSW7LgTULTcFk78HAV7FvLNix8yULHyceA8qwbj2raiyDapKgZZ2f2H7zd9tRBSnovF7mGW8T6xrPEdp"
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
