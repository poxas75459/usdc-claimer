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
    "35SFAjeDxxgfzrHDTYhyQZ2p59bPnaaqoJqgdZGuktpumGGRMQKi9qzHE5qeZNBg8joo6sj7MKCJNZSgU4kqoqPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gq5XaKdULVZt5L2C2bzs8n7fbrSULj8FfjRz4r82eKRu1KJexqPQ94H9qFxpMQn5s7VQDXZTMxnMvpEiWxaxU8U",
  "key1": "ZFXybMC6LpKstgXDTfgphfE86Q4fZqUCyYqNFvYPxRoDxyMPHqUWGX6ifwsXCaohbfVLaMG7jV3BDQgp8oWbJxW",
  "key2": "5SCzrwPR6cbuV7n5V4f251JsVLw58t3beCzvCLLcXHhZX58CcnjMapHotixeHEeWPpgDqXgRyopMMWoM4dbimRaf",
  "key3": "34CEqpN3jbE8onTzcyPTSHZEfBui19Dw2ZV8iv3xtR8WiUSjWtcjmyyzybeDeVmPd48Fik3JzAUnXtYcCXKWgVpP",
  "key4": "2X3G1VgG4pcvP5PiU1ceH34Kb93pAx74YkooUeYbjHXEcMdDfY27hGsbPUjvbt1mtcgn9YDRH5D9zct394ykSSzF",
  "key5": "4Fn2JgM9NAUj9YU1zhv1dkaNkD8JiL6EZtofwKVMxUk9BokaZLVr61oPPLxAMJHSxwVfeyvW81s3BXrZBkoZdURk",
  "key6": "4TqmKQPUaJ68Zeor49VKoGn4yDQo2eUg1yZUJrqJcEpWmJbNzuT9Udi3zev5qCQzsC1e2Jkmqv7skHUf2aBJksB1",
  "key7": "5GqyZAvxFuxEhg8u5moDMqwRQXaptLvzQWnwTdwzUnKY5zJwEK7bnrzn6pL9qe6xBWEgyZi85S88yw8SxmjJ8E9V",
  "key8": "4SGYdRp1Vhp2SfDmRgraGysyXCZfepBBsoy26UZ1FBJLqUeWdJ4SfKNhLFJ1Y6AuTDVwmdwn731y3chyKzxZjUyv",
  "key9": "4NhkHk3Z8cLrVgrcfz6pZTvUDZJDFpf3SdbXAXP1CGuvvkHCE5E2U7KpMec4Vv3HRzHNikMRnyg3NfUz7E4DKkmQ",
  "key10": "4TGKhLY4w1GjKg7PrWniTDFw3z2dPZFcGasRdaaijYPA3TMwUpWB85EHjjDmrZsreBw2kEL8GTGowGvJhuzAyhZm",
  "key11": "uoJ5GD2CANFuZSGdysJUm6YYjr2eyfoXqUN2qnThCZ6RLJbVQM3rNMta69Gp76Binfk6VAup5L8TtTEb1W1FFK7",
  "key12": "3m94kTm3ZULsDbaoWmTY8MXGrkJQJj7UexUoGyQTiKUt18sE4QW6sDo9d52CyPENLtpgn1x1o7bQnuJuqoik9XKE",
  "key13": "25qvv5Uf427A47znDGUS15KsEp4QccxssX1FvMW55bY3eGgsuRRgg27udY9xHQX9VFuojQNMG6NijFM6fBVH3Npp",
  "key14": "3ZwyaGRsnxKRbjiAHbkYXDmGfiKYbwhnSWJdgXLHUA3bt7yWbMUTut9sn2WuLZvndP21TgDqpndopmoGK1RZeEQq",
  "key15": "4qv2fkew3EThzxRiivpN3XAmCegi5PCV3cP3n5TbTscaF1GbesUR8F4U9ReGYgrhNXqugeTa9Mn3BvBoZVZqZf26",
  "key16": "65VYrGqiEGW2QBj2Zv6Gp224H3jVheMEscUd7Zg5i1PbHDuc9k73gfHvzCAbHbZHdNkqXNweTojzi5HFrhBtor2k",
  "key17": "3mKuLpTs84r6sSzNq6PFceGw8unaUdykNdowU1yYX58oAeZkMZNkWWqRSEtFZoh13BXXEHRgW3oUjqafRbCSRh5k",
  "key18": "2W6fiNu7GQzpzibLA2HRGVRmgxJJVwJSPbjd4L9CwGhoa9Xqxbzk1SJBmDD7X5h96cFssqotN5ZfRMVLgPhwE75P",
  "key19": "5RoqTehEPVDaSTEKe8LP6hMDGLmeYr3oq4AJtn5mqF8u7KFnN8yNMtK7WNuvjMwqwSH5QLDQQii9dnd6pnJwRYwh",
  "key20": "7dvesP9Boos7xgoH9Bg2uEwH97jJwNSkMVQpCxjHoFgCxN4Sj7rEW6kQYDK5tkzvjjk7PqSpLJkaZ5EaqZrGMHo",
  "key21": "3sa2RdDayb6yM8vPU5oHiq15BWNcNtCXXXVaTZrCLTyAZckeNCm3s4X7p1p4wNYy586M5LZERoVzagVLbC1tuR7p",
  "key22": "2zE4P2kcczZAfFTKXoyqgFivKMEVdd7qDZMfLZvgogUeuMdKj5P8dSPpnFX5t42QA3ir9oeF8nMpfu1ez6S2UDgh",
  "key23": "5tLsdCGWVUvuxyrkDqueGeM22qofVGADKpCyHbBNWVm2y2GS3B78Zc8KRKdkrPbFKPviTp51Rs8hPiG39NHF2WGH",
  "key24": "4kuykmJSYqAg4NabbQn3Kh44GKE7NEbvV2xUax1pdjwFMM4g9jeuenXgBuqiCzE8q3Tfe8BK8hjjC6PMrthAszem",
  "key25": "5WVozpbWbfGsEvSx2QK5bh6LNjUDMi8iJV5Q72g5ESEuYvZRMeEvcDf2Ct74TRdd3gdpLLxtvMCbsQ5bUPQURmwG",
  "key26": "4F7yrKj7EFac4DDmdX5P4GznB9fHQNZgbd1xhroRpuR9CPGWQVNDJF61UYa6UGSMnALXtvZRSGKwh5XQvyq1Dk5N",
  "key27": "5g4CRxNtR9pFRhwoWwSD3RRZgtukdnDWtuigJ1tN7VXLKFmEvP47C1Y29AVdhdAohvxKggjCY6eV2QUDHGqmByQ9",
  "key28": "vPKka7jf4U4DwbJ6g56iEz765jQmYZ4Y8pcCmq1hqEdhSYuSsV6kzeYteQrxTsFPpsgrzQm45MbSmJgn93Kukxh",
  "key29": "N2YFG1qnZ8fjThy6Cras6V2Xq1D24R6uWp9716wdXfonKHD8cqisXVPxYSJ8pBNVqaSouCUdiCahtQSdjvtkvyv",
  "key30": "2V8ik8FzQFtwx7z2QUnL6MQTyaGVwGmW7Ah7nRyHiXtzjuB3Kt6LhnmpmSRhFu3xXRYdxDMhQ1QqFNJunz2hyUyX",
  "key31": "3L3z87Nytnwj6WoDxmjSEoLeJmmsUupFNj8SXSo2L3y3Hwe8SbF8oApXFKcK5okfypmKirKxpo1JsWt8Xkhi1j8L",
  "key32": "2dhGm3CnfQnnKJnaDaZKhxvZJbVmf7wg6xEQdudjWuxPNoW45uSC6AXng8pyFVby5iHJyVYsBqmsNHyRWJxtnRtG",
  "key33": "2cEcTQHVmfzhCKxT7nSYqHo6YjV5RXncZEWWFCQiiH13qSHtwn9JBbfT7SL2iTJ5mRckRj37ABXPEA7noBuYFNUD",
  "key34": "4JLPt3hUkrizbYoFo3ybWozRf5gAGznCv8xEK15QJsosdEwSeygRTBh33AiVY8hHwo4LsVJfrxZLoex6VJNDynf6",
  "key35": "5kTMsxqSkuj5d81GCNNrGsFhtNq2N6brBbnAqcZRSxzstpy5hxXapQCyYNYjJx3nq2bTCWEiMDW1LQabk8xt1vTj",
  "key36": "3NLFnnT7pJ8qV3WJFPtFv2TgAAXWo6KfMMYQiYRQ1JYANsSaPNbqzsCpbj7Sz9KCAD3uJuTHS9FiDGDkGgeuWv9W",
  "key37": "uGgVjq9Smt9wNLHcutfTrcNVNF6aEqeYEVKXFijGtVygmyNtj4aQ8B8ykfwcHEmd8GVLXo1bmim8Lxv3fhkYU9E",
  "key38": "4tDtaktHSzDWWxxZep55H3Rw7JFgTYUbaJPuRfEja5fpgx4VTebG71hgBJJcs552Zp3rLHmwuRf9jsJ5FYEjruNt",
  "key39": "DrwxqYWtc5hPyQ1o3W3GVidbFhyXMhwj4YQgxFRCHSpLUgvdNKNA96256gqTZVK7jPHcGKZ2fNg7YAZBvotaWyh",
  "key40": "4tueNj8RriD2A1czMYEMSs53UbF8oeBrMsxdXHejvZKa4bdFbtVYHdmYSSbC5uD2peouBckEALVuesoqaipYFdYn",
  "key41": "2J1oz7LGbwhkZFMMNZk6z4D3dEUtvbPbL1wpzGmtozEkRhARZ4paZrCRgibtTJ82rbZrxgQUEoVij5EkgWUJqE1H",
  "key42": "3Cn2FibPigS1gYURJekzqtUuCuTUC5KaWxSJ3bAxdkcuBYGdhJesg2pFtBibL8NM9Ey3xoUDZ1mDnrJKWCKHnRsp",
  "key43": "65dcn1zC31BroLzuPcsA6LUGVELmrXK9UvdA2TpvUuehjW1KNUVe7uFeqdMFK1yZPKgSfcSN4wHyRmGwi4rs9WWq",
  "key44": "46jmAhCBicjBaHbZXpNTBK1TupJgkbibwvcHfs3cAbVHbfmvnyfATrN86fwuX1EZnFp8fJG5Nh5tLMybFRFAQv2t",
  "key45": "35Zw7TsYUR2pHx5XzQ3B9e9McnjUESHns3A49EDk2xR2gQEGNUZf9R19mjdJMLU129w53BmnvrPD8EdJ6iCrGpED"
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
