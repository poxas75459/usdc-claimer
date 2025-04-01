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
    "bF1iv4pzMabBVU19uhxWP36rsrHduoRe6CaXpmg5aJZVqMVNRjb1qx16L4NmavxM1bqKxdYp3gADrUXErGz9FkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TtPBhCCBSVqo33uJjbQKr8Faob3r8DsaJycUwNvHWHsM5b4Ky9AV4KJbJJc4937wqVXxVqdysAKThmHYqxxL1pP",
  "key1": "iKVJs33k1G47xwbqm9iqjVKFf2tCE18Ren1B85gMgDgQSxojzjmGUf7NNsQYdhxSRLqer9BJfA4PqkPfCE4J18D",
  "key2": "2wnXgAP5bZ7hZvoNQAmEFdWWwbaHTEZT28XmfsrY8fk6NrtHvTWYPE9dweRLNv2FGkMzT1Z4Qw96gcvqikL6vG9m",
  "key3": "5tjjA3awkbrpwMWR2iqvw5gZmZb2yWtJ4BEjCQXn2KiNHAEka5qxvPPz6di7GudXT3z17KFse95eyca4BHMbM75R",
  "key4": "4vyGGDsinkkyjXfWv4aqVe3pKiHh7ETSJg6JdWib83TZmvJRJd5Lt9Aih8hU7nPrhUn3kaZsXUKveqT3ATsor4ED",
  "key5": "5xcZ635BcH14uHoEjpRo7amRy3UPoCk6HLGHivnWtqXJgocf7M1vgAjGDS2FJACWaaYCMPTd9Z4fCW2yK35dRJC2",
  "key6": "328cGMqKjQcFZruUaV5VfVvRSzr3jYy1ert2eA8WSBXz4hbaNT3t5XJEyaKQHu7EbzUxPCQ3XgeQ5ubPv7iKFknn",
  "key7": "35ockGoVG1bTNJ4dFDLng8D184FnodiVSiFjAL8bKmdtWzPd3B6tZzSyJyQ169rVWEFjpYQmCUzNd9Lzv3r3mk4W",
  "key8": "62oYBodHtMcHKSftyereNC2ANJbiR3oVSRLFfVCbypjti9M1LeNfN5wxnATUexmxXStGwi8wfsytGpXcoLL3XfyD",
  "key9": "3EdkmaKDDedtnBkQtQsLEVcVqbfT8D2k9rQvChpNBVfAYE96GxcutDeGE83nwPvTRqADnLBF1UV9XkJNtm9LcH8i",
  "key10": "Xp6eXEkzqMvM1BQijSJSeYmKo571bEXDSbsYk2RkLPkHCRX7DAABCgLX4QykF9CNhwgXzQAeYMe8U2pEgznaX6V",
  "key11": "63F83sTBgvdM622JUsrj4FpdZn7d97HAkgt65GZRxf9Kk7pUbAybSd6XJemp7q28zQ4qodpdA8gEyHvXhNdTdJ35",
  "key12": "4RfjHAzK1UmY5PSP743gG9ivS7gMVQTfwGNdzQyytQNjxuDMpG96KJsaWvJq9bVsegjmTXqaknuWXzkq9CUpDRMZ",
  "key13": "c6qCWjgsrSkyMk2zDqiMaJN3P1DMJQgfkyMZimHXPs1Guua8tUCNDPemSn9ccieGFQY5aQvrPYV9UmKjtdtFmpi",
  "key14": "2PEHb7xrLezwNSRXNS3GSEPQBstYPjS2my8CxNovJ9pCHACgoydymXmMrg8QwbiZYnFZGJzUABLdK9YcLxyj3XcZ",
  "key15": "2Z1Q2ApfGLEagqEAS5eriWXRgmgDB9cgmPkx8BWZaWUeFjHaaQsmuoV9HdmrxE5qjJowHShN3XJFCm3ZdwR9bkq6",
  "key16": "3Dzecbtfr4BrpaiStWKToWdFnvpZt2WkPpFRvG56xBPu8wbQcYjRXaSPW44HsWyGAWir1jRwUWssKMh5CAVUBJ55",
  "key17": "VwWTReiTwHkwtgHNkrriFM87VawSqCBHCF839zwHjpSeEC2CAWq4TDQS3umy5xUsiPa3zW5aTS5uusCaj3rKYwp",
  "key18": "52oszQos3ssaM4PTSNuZDTYUn8dMPe2j7gLUwE4nYmJtAzTHSvei6JZPejWLoxSriGew8D2JRKto9Ast6Mgwypaa",
  "key19": "3ZuTKth2ZY3bcWCXQCaXHstfpaEqKEmhrqw6U67swCNzLgEspfDyA6r2HfudpoqZY8ygMW3LDxcv3LyxXyKbLWw5",
  "key20": "3H1yG77CqN8hWoEpvxW2GZatJneaua4HQGBGMvr4i6tXWPiWXzDmDmP5BrR3vpmepnvXW6a2oa5JakDuMDGdrxhj",
  "key21": "3gfKbZh3ExnpwCX1a44yD25WYT9C3KiL74TwKzAPzNXkuNGmRCJTqMYnWK2ha26dPUNooDtPgSQQMPRgekpXVyaZ",
  "key22": "2wyeHrXtxg3zwgmBSF17bDQe3U3JmTVzmqz4Mr2GcN3FfvEQ7VyweFCMUnmTKbA2Nq12ZpvuMuuF1VGxt5uMJ2SZ",
  "key23": "2e9WPTp4oQT8rpCaWgd8cVDR2sZNrKR2jxvULmgUrJR6QxwyzUUTb7sE2VgmfqUxmakyg3Ve97vZAUDwoaYiWnrL",
  "key24": "2bH943k4BcsvyzdDVwU6tSDPj7QrVnibFp6827j1TWgkq1ftf3gtcMmJSz6f1oQPzMQEjbV15Y2rh6sMdDzWKMJS",
  "key25": "5rqMNkGeh9qaHuyLyeLJkTs9ft3EDCCU7Cjzf8dtNMa7q8fYPehj8ALkRvf9PiMNRvBYj5oL1BWSUrLuWsBEhtiJ",
  "key26": "Ki4Rm1B6VacQd4YMuGyKa6sCtj6LwBHF4oc9SL2GhT2HH5kf8eFcTFfJ6MhwFGzY2FayUsgX3DAQNH5a9PW4vA3",
  "key27": "Hk4KPbdVosvbJKFVJVKDFttRPvtiGUbBkBEuE7jpPpTKQpmYqoCn8bS4vKR7pGF99p2mZCeyS1TTgxbSotdLrHT",
  "key28": "3XzgwPYdgEv7StQM8vqAHE8gZaKeGeVTFFnyrYJNhMqWxa4TCXRn4QUMZ9uDgskVHe9HgpUZ2DsqBWB6D6zEp8ZQ",
  "key29": "5BqU7EvGZVRTzQW6TtzMBYDbakoL9ZACTXZ91TbgevXoUvDieC1FbF2B9o2kenJ2HcaFPTkAP9ZrE8kHBh5JLmuX",
  "key30": "3Nioe5jJ5jg4CdmCvhyzZifkuJKfgBe5rjtBEtXfsLKWmU933SgNbn3a3SqE1vDvLSXueg5C6zEfcQTRUuJqFrsm",
  "key31": "3oVNTSMDKJ2HbGUbEzeRgXi1eCBJAcNuCoPTC82m9P42d1zAL3vKDkNgcRVDNLqjBygk1vum1urmaJRZ2wGYZmyp",
  "key32": "4sshj3veraVgTBwzt5royFgwteJCJYW9bPZumBYPjjbxSNyJ3yRwRyhWNYwdJs5oWb8SfoGuDFcAksb5ZF8RHtXZ",
  "key33": "2Uq9s4E35RcHBkyVSeYJZozWKRg9GoWppDuDVwNy3tT3tXjcS8d2YGKqCBRqJ8g4qzPnFHdbMdZmf2qgZp51MQRE",
  "key34": "5AXNaA7aguJEc3n6Rtg5eRaa6E6UDsR9WZCK4cHuUfJP8QxeaqTpXkQZM4PrY8RC4KhF5RbjtQVjLsQxJcJEcDco",
  "key35": "2sUfdAP3p2QXnFiZt6f5jFox7EABYWGTJijw1fuLB1GxRyoMQos8tuH6jjTjB7VQpSxQhHi4ZNvmoXvsVUZZQ8ji",
  "key36": "3KShrN2f2w8ackzguP3CWBN1hUyWX53qB19HzRdNF9FuJb3jX4Yg4dAt4FVbykn4yqUJgqi5VLiSMGVazM4ydRzT",
  "key37": "3Za9FDxV3DXwcUPonie7tmKrikcWqW6cYkLbv7iVzCMsHZe9s3nvnDtnAHeRGiq69giBpUr4K98VVhvpLDFKgkFA",
  "key38": "3ehWhh7WNALh3DNbmhWZbidJAAtfvuyNJMm657nfUEP19XZHxaVZNJesXcJejCZNn7E6iZXKq34wufBUfGxEWUTL",
  "key39": "3GvVVmHTD6SZiCBtVgis17K6RP1PJM7NSC4jFr5rCETt15DPWja1Z1KXG3efvqfyK62UH9MR7pz5JcjLWkacrdca",
  "key40": "2UYwH2wupCewtroAwJXNXAd5FE68zfJWze41R1TwtSkcW8wkusQ3PfQ1je6fVB5jb4bRjLHQGKeHUV35x5quK4CE",
  "key41": "VV4v9frHzX9mRAzZzsfzeWCqw4kQqHUByN9v2R5yb6RWtZkE86YummwBq3xjF4G61GCqBFg88CzeMqkZ438trnQ"
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
