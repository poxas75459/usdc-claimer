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
    "4qtv6CNDQeTtgwXoF6hD9pwxsg7juFBEYnvEXTRua41DquNAFxXKftZvQEsVQXxXwyK5MaQMRgKxgXkmh49N8Pk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjvf8xXcEN3TPYHH5kCyaeM1VYh9H3nMeKQfoSRk2qkm2ZKt5ZuH9fyuuakTZ3So1ndMmy5Pg4TTCx483qK9u2B",
  "key1": "5cwTU4J7L3cgYfrx4WXpMAAxiT4ZtSbvj3x1GfE8DZ9ovZBvpgGxbS1j1xGkmYyjRrmgKWbXhqkKzTsK43DS8QyX",
  "key2": "rQ8UT7Kj37jvDyoVL8cWUZkiLBQi51VNPLqSU2GzWjCnuUUALXRwDW2uDtkdFJKoKJaYrqm61rfMeVQzusYXBv1",
  "key3": "3pPb9Tb2srDnGgnaMdEtSJ1PiCZcpPtfzwRkJaCmcLGXXPnqZx9AW7YRprcgxWNh9nxyigvhJbniEPQoKUndvfg8",
  "key4": "3X3grgWsAmf8AcHBY4h6eHMuBtmV2yFgpQLWgTSkdDZqjBJG4JCJ8AoSHCoKCnp9ZqzQff92SpSiswTocVUJoA7c",
  "key5": "5Zd7tvZEim8hXrkjtoW1sivPnNBS4wUTisGxRS48JBwWuNBtyR6QPLij64pZMbJzppahDLcC5Eqg4ecPcMJzEsv",
  "key6": "4azkbG6eEDugtSxQbpaanJJMGpqy32a1i1NBLqni3Z83rhQ3n8CdHZ6PymDitZgLaW2WJFrr6kRD9FqTjAEBkyq4",
  "key7": "5tiRMckkLUQXsJnAV7hG4Lw1zj6cgRwXit45wcPUEg5cvAci6JKye5krtnK3fGh97j5gqxHdk8oW9iXtrGsmstRi",
  "key8": "6PtoUwjLWSsXmAy2iBhC7YfpDTvmoMywQ8vRvcmx2sSJ9YB6S7D2r8zsrgNsvEra2rYVHyg7QQZ4bQpDTWyNXxG",
  "key9": "ofM6gn4uiGwPzZ64yWxk1bkb2q4WsW4VNkFD9yN1e8gTFteH56yW2JDzVnVXSV8wvb4MciXtgQR99UFtqLUbnUQ",
  "key10": "ib7f5GV2Ck2iFajkJgrNWPodPwqBvT8YbWxMycQnhm6XBGtMDCXNhsKHFvhQEMTeUAsZSGi7bPRMbLM1Uj79NAP",
  "key11": "35AGisttPMY4W6GJnUY2XbKG92R2KPU6CoVDjxoRnpCCWm12feKN3HimwP3XstV6NjzumA7PhYQUBpkar9RRb1hu",
  "key12": "2U7ZDSMpNsdQ4hHg3Lqmt8Frdd36g7YPydvFTWn3D1tyawDDpGud9joLRu9db93nETfUrZsfiYLN3p8Fh9cdTqVV",
  "key13": "hx5uVmnXRwc8qwKcBLaS5g4nN8cMSyDgKViVdphNQ7uqMua9ouP2T8U9xbM5afAn7YEuAvJQi9tK4znFDCHtG77",
  "key14": "2PYi4PDHLKZof7PjRxGF87ehfrdfF3pwoYsKzueBCKpeqYFcH2Q3vzFBTiQNZKcSfJzURPtsevPoJciok6Z6Lsop",
  "key15": "1R6oSNNc2aQhAoG5FESNN39sQD3Rr4gjrJ4fTxawXT2ostFLXcLnXiSuitZaBPDFAC3rfzFRsvquoNA89MvMNfA",
  "key16": "4i6W2xGApiyVXkVhbETEoKxw7nhBZa7ic2JzJucxiW6YKSR9Gx3h6QEvcQXwNwrTL9u56zGZ7nTMWrsEn9hqyB81",
  "key17": "2yb174pBxFcsyGxZq4pCuBr79oXvzj1eNyfzCpQ4b1PbLQnUu8hwpkW3kRsHfYhDs2cr9bDRuEhfjfTn1i79UFF9",
  "key18": "qXCE9kcmqwnqpGHqfEXfyEJHobLqNsDrE9xfAjiRdxdWwMoP6cjE2dHNKQLKb2oNkqhTA8Hmma5VvpJ9JvLhBuw",
  "key19": "3KZuPBrY3UjQhUTpRB59BnD3TrftJnoHpfEPCg9ie771Laukv5j6rtwkqPSfFZzz472MwfjZVz1TMA6maat3y8hQ",
  "key20": "ksmUBtvAveJ5pgMH3z9dDVQ4NXMgwzBXcFz7DhzTiyKgjfuFHr9gCcDgano6Wkxhbn4zUKRs6vwXcbEj2ECMaXy",
  "key21": "5CiVw3udwnTr4HcPkM1UAMrhP4QY1w3xXpPziRXnyzC23c6qUh4Q2czqkchhfk7xcHLPAPRu3h89uA8bLW7RYWUo",
  "key22": "3SB14G3Zj3UWwt5ka3JMBCttd9CX8LRvLL4ig7KS4os25byVxreXqggyK2wLDo7Hiab3687uyvae6sjSHP6Lq7z4",
  "key23": "3tEgNWWrXFiUTnmSjT9UKyZMoEUPVEP1Gm2Hjbyy3xsT9G7gfsyhD4tyt7zXVeaodM3y7GCuAaU5oQM2LnryqGyd",
  "key24": "4Kom4sBtVM3rPPXkqVS4GNBbt6em47XM2Xq1KUeqyJ6QFFXZckmnkwp11SNdpdrGT2q8oqTWCdkTYqDMt6qLPi4q",
  "key25": "4TX9cBzTo3tJwRzAEmTNNvgMrn6jDKCbUgt6gbbB6WTYSJK1JyUtmqPgEdQdKHZAHrDTgq1phK8ehnPjBM6U7yXB",
  "key26": "3mz2avT5vGYCZTtjeWZR3oZuLKzog8o4xVzushhBrAibcuLRTfheydNmbsjbV8G6rtHtiuMp9xW7Rw8CeagrYUwG",
  "key27": "3iTVURt5q5wXfABygewTxp4xhUPUpYgsHJw7L3bhaN98K83xiUdsXe2p1gHJsnivUmP4P68UVK1rJKwVZsr965Vx",
  "key28": "5pVUbRf8MYFEH5DaHZvWruMWAKvE2rnt6odUTMRRzKikShTd9UbNdQXSa953DbtWCi7h9paswMbFBMtjEEtdjosZ",
  "key29": "5yJoX5wxGWQNanpDREeUN5TSmRG96pt7kC5mrLoauQ8yx7FBrE8F5AqCWc3s1Mnn4ZcedKSRaBJHd1mwPGb4KPeW",
  "key30": "2Q7pdFfJKQz3HVyBK2odrnsSsvoMkPPRaQfXtREF2Xj7NnGyjvAFFYy6uwwjvnHq7F9QECEnA8wMnDp7snsktqSB",
  "key31": "5Bo4npBLKyK2Uoz3GvYMzd9bHpdBee2HKKQ2DAQeMWSCt81FUPUhAJEHVooSfG692ex5WV4jdo9KNusobrdriFSM",
  "key32": "67FnKa7n7Ru8QT8fd213n827SyYk4vWAUZ2G2RZ1t9PGm6J69dEy4eLrZ1MCZoA6kkKaTBEMCoaJTWtjWWW9ACWv",
  "key33": "4U4GCo7jMxKhsACpV5Fu752g244rfEXjLQWC4ZFxVTjpShP1fnK4Gdf77J86hdk8tZ7d7Q8XymEKpcKPC2p69Ura",
  "key34": "32ccoxHGTtYsKcYz67cxJKcSdGtF3ywtDFuxDZjEusZMcdtDdLApZ1vik9Wk8aidwQPpnrb1aaJpviX8Ss5vN4zU",
  "key35": "4E3aRFsBvWabtVx5RvNYTALPCK3VpX1atUynLqqtCMTU2WUkm54ysBBfT2b4rboAXScHGf1Hv2KoQJiJpVRek5Di",
  "key36": "5ARYPXQNeorLpKvtsS2GsT7RVauigBXnVpeRuLC1xEBqSV29XFZH2LHTcVUGAJYs9tAvin1YuUvWeK8DjSxAs4hd",
  "key37": "4m4zvxofs1DZFqPkhF9ftuBicbjDeK9o7o5Zxv3zPC5ic5JbeFtui3yYzuovooBA7jjdjHZxTR2njiay2EsCR5Fc",
  "key38": "2vP1ocQKpeSPnZXtwmBJEoc1uDobwt6xQS5VchXjzrmNF4jWoo7Zt1RmG2qLLkL79pdjGtY8HedWPSWv6PNUrPHy",
  "key39": "38pM2xrWyuzYGt33cxD4HSqQAfGpK4s2PJtjNPJHr8MF4zvny9ysGc8dopV6fzrCqFFoURL37tJHDqAp5NM9z1pW"
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
