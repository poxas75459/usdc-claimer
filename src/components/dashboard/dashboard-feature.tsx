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
    "5VovyKBeNRRWv78J3RCLpuMrH1nn7jRDY4BXGuUPN9qxEmarYGGoXER2hUjRbrWssuNGt2MuPxnmK5SBVGMaTD9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5BjyfzmUP3Byfw5sNPzmVmhFjCBwDGrrCQYsjy1x9kxrCnSbFQSMhsR5JQgpjcHBQDCYva9GcUPuYUs9aint4L",
  "key1": "bFASWUr3357YgonrdkoYTAgx2FowjziT3eed1ends48DKYHVNLiea4pKFB1zx4fEb1d1wTNYQATRSY8Vf3sd9VT",
  "key2": "kEtj8izWnsTZjLevfJboKiGKfCwVdxNGfxbNwcbZkpkuSK3Kkp1uBkGPU94gEuqwp8Sxect7mGU8nLzChtBkE1f",
  "key3": "51J4rvnhtx5MiXhwKx5UQrMpxCBQCpE1F3SEPkaz4EPmaiFGdKTV68kRPMrxgXzkUvmzumdjyXRSzYiDJEeKBVgo",
  "key4": "2Hb2LLu2Had5BqDEcAfHgBzP2dTE7Rd8ty1CELJH3o9yzzh8XVvDKMAhUBrbvsG9j3EEMfmLRWn3YXbbV3LWN1j2",
  "key5": "2Hof4iAHcfT2mNwHeadyeaMxqKCa93iN2yLfZ1dzfVxapQVPTztMzaU1LV3C37NSjonFFqvNCidUCqTgmHCi3YEw",
  "key6": "4LBKyrbKarrCkVpfSiiTUCyhKHwspSSHZThVdAv9codqp4kjs8CLQBwUL8DTP3dgKSUZgiFC7i2KQ1BDy85nWQ9i",
  "key7": "4tU7jpn9dGmQejpish8y5erKNdQabJrCFhoC9TJBrRWmAhR78EABnMUAa5r1CTRnrV8MbL5FczWCuq5WVtq7Bqn",
  "key8": "nEVhH9F2JBvXp8cDVNGhzTNsBaFVmJjqi9z6GCLxfKn1cDTyGyDECzuBX47tFFod434JYfCQB9Huzd9ZDcGvn6V",
  "key9": "k6pVjBzSbFo5GkekoGeYRkuJB3aDRPjdanEAN6gNPqFr6dDBvTynpVpVN7KoNHfiztoES24SCRAZZLPLT5SvsNf",
  "key10": "5bgXK1jpbABmCcexyMM5HFyiyRP6Bk9NZ5CYyZUqodQ1kjLMmGFvZLGhE4To8XmmtNp7h4Ao5DL3kEvizkQNr1qS",
  "key11": "3zPJxGz2spxQ1qhR8MfTZKYspZfcNPCxtBcVBScTkbxzUPheYQ84uUyt3d627mftn4tGa42mdvDMy1QQd24w6keZ",
  "key12": "3aTM4mbLWuLq8sndFoUjkW8MEGsxw5asnFGak96kanwhxtWvjVPayMBSd3pkDmeTfxbTZuf8sY9vksS4YrMoNpCG",
  "key13": "5PRfQGgQg6WaJ2ijVKwvgrHkp4DCuhftpUGAF7BKgPyjxiM3xdJCQ7JdYqpDsq1H6wso3f7hSkXAj4tpnVpDcgG9",
  "key14": "2E9FEvCxr21AheTQ5j8wzoyD7jrgsRv91WjExJPjooWupoGtyG9b4JjeMFPfk5Rd5WBkdMwa3dzvaChrQpshqrr1",
  "key15": "2FfKvnELJCyVm55uM2HMnupbpbjzvFiXmjz7gGsDfXKXdxP4yBYpWwpGtbgzkMEsJDBBbk2RkpNPNWyBLFyEuCf4",
  "key16": "pxJ5g2imzHzyxmDN7EMKR8NJDMvA3QncauETktQvWhqi5fWoyApHQhYQ4fDsbNrrU4cezyKTPgF9rwaqYLdkc5x",
  "key17": "3Vmp2hVm7mnXsGm4bAhTrkVHJtGFnFp6mAHZBXGgGmyqNi9KP2JH6xhjH35cnHBvCFU2JssCXiQzPKzHnqBu1opC",
  "key18": "4m8fTMbY8gV5zgZuwf4Ay2z3ciA7EE1q2gEigSQ9miXALB98TfPh3JbGVBg5SdfCWdCKFMCbEX4GEUeQcXKpKrvZ",
  "key19": "569r5cYPTAtgGr4u9jaz8SbA2JYor72yRJdx5WbESD9Z62fYgkCryjdVTjyjXzmTMoNrRYEuSXhnXdi751PZeogN",
  "key20": "2AgmQkCHQrj6hy89u4jq8GxqFkHXPshyRCpPqUFm1ir1ma4dzNZbvs613FxSBhM8QHZtasUJYSE21Ze8eYR2RDMy",
  "key21": "3jPpjMN9vfsWP99CsVRsLmuGNnDq6P1zAHgZekmAb9tFBN5c4BePAECJ8cX19hwXU9dMMo1tVRcGaGvZqjfiaZfp",
  "key22": "5CMGh6KSim61SJjBYJvqscGbc7tisYxdxzz9MzTLeMajjJQgoL7abow3XQX1bu4sNZhknXXv6Sk8jdgacMBC9Q6v",
  "key23": "4d6shh5Uc2WFCnnGcNu66WmN2rMMJhaF2bU7mUfasj4XiifWtoUjEfbxkN2PamKzBM8VFZVEnmFqmx9ZqWKwruKL",
  "key24": "63zA8jduwqndEFbnQxUdSVREfZ9ZTnhQJnK6EoVLeQQQusgo1R8cWYjXsh9jDsrKiWfDsSpzaGPhe164viVibQjt",
  "key25": "3v6saGf4Hyvks3qcrBgh4ugpgCQi6zEW3HRhZ83KXvzH6vDLsm1eMSHvwr6wsDFB2kQqMquXGRnAu9bcjBZWA9A5",
  "key26": "UEZjLq96nrdvqMxp7Lm3554HXEnbfhPam8xKJbxvTvm4ayD9hL2XA7CSTBV9PrqYTVREntNeaWZugtH5jN5Lqu9",
  "key27": "4taY7hA9vU9AHr4gLjFSugjS1f4BP6PEyWaRkz8NhnfC36ZsA8Fnz4WsSyLEx5GvPdGU7h8DjGEgLpnCNNENat9F",
  "key28": "35uB54WiVzuFPESqbjNmimVU2KtGkSV9nY5MHk2qA3onZ3ZoDKFTS4AvnqcoBgMvihD3i6FEUKyqcKhbuRFYqSkD",
  "key29": "PyRAHNej1MQgYXreVJE51Dwys7QLxdwWPyRECWBhsVTLd15vqov8MinTDZJT9LEJYMsuEhtjWg1JDEg8ePuZEZn",
  "key30": "5hDnxx3wp6ZL7Cisd865mC5WNRxzb3TLqPYdEgdENuwovhTWACn1KktuN1BfeCjuUXXLSPTUVd4YKaYCFF22dsQE",
  "key31": "5oEJxVfRatLFUFZ7d9mHr6itntB4gHTgMosuCBrpMtjuDYyDHku6YiJh5wm7rxktwK8SoiKe3UGVe5ikQMK2dZiG",
  "key32": "B5PDBEsjZSNsijWiT2TEvwemnWVVmWKYangJwNXmhFBMT8ssu9fNLqk2Snt4BVT5PAMKtrCV2UtetouKW69wfo3",
  "key33": "5Rs7CyVohdeFfB7xxJtK8S5TYwseQPduXHbqUroniA2qn8ykJoRFLqXgi7DMiUBHx33teb2xajmg4TkqGmKkohYg",
  "key34": "59hpNggo2RANp9xdGyd6mNeyVCUPQ9e6ZmrPw6a2RVFzS8vjXGCs8Y5tFWWg8S1CvwrcP6AgPaX5Ge5zrxk2arDJ"
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
