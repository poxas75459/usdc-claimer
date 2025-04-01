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
    "2hbbYCgKhmdmqhvUNAYqY84uTid5uSM9kXEsV9HbQdVdKcQVirSPHJzsH2zrAJypK2ypAvwZ2qa5Uo1a6fiHSYeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E2k5dyV9g9AMFvpP93sHfvkRfm5weoXq3E438gcwZUS7oeibYUq3JBoPbHKBkutSKzQwPQNKVfpZyPL1CQyUwuv",
  "key1": "SbeZ6913WY9yae2t7aJKaxxxzTeMAAvxFXBynp6mJqRLK7sDUfSUCuBGKgcWGuXcNTTBz24xpAdpVZudzPgydiK",
  "key2": "5b1m1fXAbtm9Vzi4gHJ9J2GjhoKVs93EP55GMJNJYC3R8cDCMJ2zVcQooJcsBwNf6ME4H26sEk9wDVYH1Mh4sn7P",
  "key3": "3Hb7Uh6c7GSU2EgQGU8K7n4gojLMDrF5pLdmh188Z1mBBF9dyjDjuSogNeA5pZq7tEgrwbMgcep88TuxKXVb9QrL",
  "key4": "57pSmkAowTWkoGqctv3aXfHA6nHuFCyskFgTedu2kT6MSTQgfSrQCG2LyVmuHQU6C1jkjDzNnbLtw5hC2vTBoSKr",
  "key5": "5hundJK6wHdAAmh3QeTipNQLT5d2wycxFXsPTrZ74j96T8wSKMUMCjFbdhBHfNBCDBwaKokK4o4jNmhsepiwjjBX",
  "key6": "5qFVDVP2JDQGZJmzpyjCdxPCaZXL8ECdTFg1q3Ai2xbtV7rBmj11WQd6w3K4CWfVciQBjNAnrShw7AWSXog8kAft",
  "key7": "2FWwBWXUoAaQ2xSvYXBisHbyvzrHsvEcvSnjcdj31GSa6vTncL6AEwo9EVzKG26Z2AYp6ccoWh2pAXSPXXhvPit1",
  "key8": "3a1QFH5FZYkKyk8vc7t2FewQrNV2DyytB3VfRocAkJvoaEEakcNGdyerCKKN7GRUUawwisB55nfm24iXbG5668q9",
  "key9": "5YMYfdR4rNWzgVNX6BWx6AvshtCPa4UUfkCts4e49xn98ctba8BkYHbqaLwgsfGGtMoCiSe9ed78ixB5gk8FXJqG",
  "key10": "2keGRqM1B2uYX31FnjUT7wdnCFDDBUjX8Dohz4y63Xs15T4uiKWoxJvQNPNmWq8TmFXdvFr2nL5kAFQ79D8VKSRn",
  "key11": "36L9Kfvg6tfpQwEvane7CB2bq3ZjZRk9buAfoyBy44vstPU3VHKHtVSVEYRCq6oAuTmrwEkhRU1M3DBJ3jmGtLWf",
  "key12": "3bs3MrE2WYe8bmsAMQjvUVvKCAkPfJwB5Ra83pcwCWXSUxmMyxskx3pcHge87j24gGeLpg5m8zwtLFZ9cCY3g2C8",
  "key13": "53kLGCZjc35pgdiDmkCi3e52o2StYLRSGvncrrfFYaLrm9ESLvPxNWBaxqajQmJJRKmiBFHkkGUZSQomdukXnqm3",
  "key14": "4ULSATJF7efPJUJNHP1DtAyBcTGuBwuBuz2PRVL4PF6KtFntNmJvgTC4yV1jd7zuxLbHzPDj6rFZ75Ko2M2aQVaw",
  "key15": "5rhNU4bKnszoY7jQHApDnVjiwW3yAQYhez67gmAU79RT8SBC23xL74tfU6ieSSWMEyNVNkHXr2MWkDgtv7uTixU6",
  "key16": "5eAyZHZc1BH8XbK3xaK9fpbrw2RDNzn1p8Vgm7npLZGzcBgqLD7YRuKN2PcPnPJrKVboJWeAv7NXtt9yxJdf67Km",
  "key17": "2FjrtVmHzAoWwSJ7wkMHTiqVDo3ECEgNDfEkaVfXMKYNGoFgPBWpXvZi7gyueGh1MNbYM9JHUtj5cAtoyojqLWgV",
  "key18": "31ZdJ6SNavFcSVEA1eSosPnkJbFafHqUYYE3hdzgXHRPiJ9Pv2etmzeEEA2pRSmxXzjW78qiDk1VwbRZBWYJ57Ww",
  "key19": "j8UuE7n1Ka6WJXe6tqjUErDGLaTX8C2XrtxSvDYdV3dXebPqqK2sqJi8ZipMAijLfhb4xFBffnSYofATXwzJBdS",
  "key20": "QTtaUjVqbWgM7xiudEKU3TavgUQPNDQEKUWYNgVF1bTCng1rbsrwpwfz76dGFGzzcUbdGXFQUDGreUVX3N64p5j",
  "key21": "D5Z1ebe3GP7PSGmusFvoUJUpf7omHU6o4S1ijT6YJ3kLTBZiXfBAyyFZdjT49ZWWogkBfLL4usNGcsF8BTQ7RPA",
  "key22": "3hq1RnpqQoexahfVvxC8bnFjBm8T5Ve8A8Bn4tafoayTx3CfW8Qgd6pfcAg2pGoyatZjUUHgTm5soouWao61aUmc",
  "key23": "5Vq4teCAHKCaQVwV3ce6uPy5G13yoSPGpb9xqWprwvnyWhwdzwDWJVamXGAk8vQ2UooG8EH3VMfX6WuJ7YnAwker",
  "key24": "2kSDmW9gknXrCMe1tRaVU9RY8NJh8u6xYuKZdu9DcVmxZ82bwrn6UEZenNMiAhGeHQUnXVbCMJE2gDiEfAdkr3jL",
  "key25": "3sZknKUf7CcuPPUdD5G8onyyYRmtnjY2w3Rp2xHmqo2a6LE4HimC8QSwpT1b7yzJQrNZbLMgu8bzD16YciNoi3fb",
  "key26": "3TmgPzNVhkuD5J18GkCgAqKi9DLFTkiwkVh4zyRB5pEBq4PhLm82cju3Pv82P7TXL6eSS4NHMYmPtmQhytvV5Pa5",
  "key27": "2bUZTudkeCVsvYPNMejsA2uobPHyjzcjGpHEDw5WZryf4FPDYLdobwgHFRcNfns71Z6rmpPBS7SVZgcFzZXZSiQn",
  "key28": "4KZVwEghzn29eHEzLhq2z4qWuDjb6s8nMSNF37nNFR4EEhbwcJCWKngn2jipNEvotoPTqjpPF7RBTcdfiYRWFND7",
  "key29": "1tAc5HnATpT65NSgHYJo3B6AYMoy543eT6myJRbjkwajtrEKmqFHrtXDuCra5vrKLRAZdTo3Hu7LDhNv392jnx4",
  "key30": "3fEsRdK7FMaJjmtbCpEXua1tXqqVCKZ5EXfBfzYsn6fwivi7Y5cJGC3o51p14yfvLmCB7haS1ALvzJkmdaaHVKia",
  "key31": "2cN1HrazoJTtbKFTosPkUhrt8GTcwmmLMTcGC2BHBZTyDJd4twgeiKh9Nc1V5XH8VLupwyFwnAkpKEc3To9JqxLW",
  "key32": "59vpMKd3tKrUA3DFrSbcF5tbXmJ1wgu2Efm84u4sUB9wxFXyVwrVD5cQGmFoJ2X64uK3V8S9jawkXGo6NDmmCMhZ",
  "key33": "5xaEwNTaXb47AtWCRuUYcjX8jkhJZDpFeqmNEKECnSi8N1u5j99YH5j9kKDwLjf15bKPjF6Pg1duumBuswiL6kzv",
  "key34": "3ugMgFpjzNP8bWchCKPqRLXSiMLi6Y3n4BzpDg34WxLuZzENq23rS6YH2jGtw76drbcwKLxpu8LUz3eK8ZwdBsXz",
  "key35": "3s2AvfQeTgHcpWdasF61eLxzHqbz2x1oWkn7CjpT7YxRMYgFbmR9WGtebcPgrYCg6bw5XkNwfR8uMzw9YMhi8HfR",
  "key36": "5qNGbRLXfiM4U8DfrW6c7kLVpCuqSkLAvWvhhs3f4oNjPHPB91eBpArbLhA2dLnfzJ3aCqYjZWDfPmEuoNzxfyRw",
  "key37": "53JGZTsi23va1CJNZd8vbR3JzxPj2Raksy1aWtuZtERfjpZE44CZsvTy4tBizVjjDQdiERBuJi8T2kTFDpMc3DdJ"
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
