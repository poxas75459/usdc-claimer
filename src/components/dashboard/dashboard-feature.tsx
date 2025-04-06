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
    "4yxUrApQuM3GgcWuU6s54KsB4iJkv3ptDxSrQVmvij6PpHpP1VrdgRTEq4cFG5eC8GjBMaDTtKhs3Ljxq6x1amcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnPrPMj87hS27kty2Hz2Ybyx8dzv84cvMDtqvGtS9Yq2LwtWqEUJVQDq5msotiZ5nVEARjSCoiWJmfM2FDSixTW",
  "key1": "4vLx1QYTdLxrDrUXXsrYxyCg9DBydshaopf6nv6uSr7T8FFDKGRdUJAYYExyvxsi86B8E5Byr6giD9AT4BL8irQM",
  "key2": "Wi2z8gEvzuJQVvcH8ZRR66ZoVdVS6LVRevzGjMGXPAC4YTZv1AZNx3WCd8xxgiMc2Bb8NHnk1vXQ9DGMBDvMcfw",
  "key3": "4Men5jBqZ1x2A15f1qTyn8c4KCtGdJJeS39kuP1Pyk63xH8jbkqGNF6uPTj4xVxQtkxeTVoYa7KcCJXx1aGDaRXL",
  "key4": "5DPFnybCrKovX1RLKfRpza2ZY5aySiSuroP2z8VwUvFKZjQZ4cYdjfjPGCJRDduiYLeefmHmqx7kQ8Tbr44oTHdY",
  "key5": "5qZp7vS3J9gVUfDpXpirNtpcDg8B6g7oAYRnJUoeTi4k3Jes8ro85NhTUJnNia27hUh8sRDe7KUFrGGNPsnfJVPU",
  "key6": "3FR2QFzFxW8uUnV3cbzd9F5G8AWH7eQM8hCXyvLUSnHivXXARPDeNWDyhoodbQr9u3WfiJTSr6RrKVTRfXq4riDW",
  "key7": "4BnDt9wmJX6XARuaf4js2EWcSS1xQbiAVyT2KM7pP4TA3y7rM5dDjaAA3ckb3N4hwvcvEs4yGxd8F7YdrcmHPUHk",
  "key8": "5iPVS5pU5jYmkwykmaPi8UYAD41g7dA3cQ8uJKytBDAV126Ev3QUGLBG6bKoVjhgb972ZKiWFAUPmrT6tvB3EPKs",
  "key9": "gcMosg4jhmhVM2dyzS4gQ6Kby8j2sAVNjrH8KLVDDw7czHygYzmWUUzr6qvzdAjXvbLkXFtvUe4Sm8fGLzMSgiH",
  "key10": "2gfpzkoeFSEQNaeomPBVxTigjJTzPbq5niqkKDK4m4o1hqRrQs9fj8UE84MAwpxACz8Dhs3Tpy8ErSvtb1cLrexb",
  "key11": "63K7cpwLFBJieCMKhmaafoQHvmUzF92SLqwvLk7CkDA2CdvnLwLTZqKnS4KgVqAsyc6gd5dtYs4TrythSrafYfFD",
  "key12": "3qyz28SuzfYW35ko6dASnssGpoSFJ5iAoxPBgdwpU4pCA8ZU93RzFm36b8uWYybzAYAqwxVrXFKFXUsC5tgUfAPF",
  "key13": "2rzRAMw2RWzR8E9MgBByvyiptXmB21Dp9FnTKFATJjHcEss8ssrDxW6dqrgrzAaWoJKEtCWF2wmYUBDAmggCqSz5",
  "key14": "2orPqz4F5pkYMY3dXFHm5GJ9Rs2t4sM5ec3rzfERFHE9CjA8K5TUsPUpnUpc5wfCFkcxkvWfaVwCZkPx8qmbMYri",
  "key15": "3DMZoXMmN6mpFDF1wEcarVQi2i6FubyDEiRA865hkVocAVQSgDUG27GBJG2gJPsRpZgCDN8rfcb5zisMoypQS3uf",
  "key16": "B8kofnjLZymv2Q6Zmog7mLC7XTugoqx85uoCuryTJ6r1xtrmJN597FGQG9uaUnrpq86ZfafJZw9JDsjSX9VJDX4",
  "key17": "41wiM1apQaxC2wAZDabcoPWeYLxpBywbg7CGx5tjt8d5cSNUKaaj7RdSQZjbtzgX3oDBdVP4F8FCVc6p9NAYqsQo",
  "key18": "2ttMoYEvfsBBEwe6BQPdK21sBB8rYMkkXgFtP1DZajEfZfr6zikqpyBZRyF1SskXiBwQcPSvCxdMAzr5DrSwNgja",
  "key19": "22Uo8pd6DwBkd5aW8AYgygyVXdPAVhP36re8PN6F3JDxtbHYXiFUhx4Y9p3dGXr9eDYL43pPSF3RHatgGGL3YUMW",
  "key20": "5Cogy4xTjbqC8B9vyeMY55vbQL3KRAcCrw4v3pUjzCmq6tDi1zh8YnmYytcrEWccm1L9AWKvZRePK9nZJft2EYQV",
  "key21": "2JeNnC8rtPpQqyaGhfLnygvTpU51MjYNP7PHrGmhGoreDgoUeAPrBK1SUS2vTsM5uVZR2rrhsEeaxDCwGDmbtsu6",
  "key22": "5LDThpgXxabsQax34B1WrcqK9vNZ2EWHQSKKU7MuTHZMCUREZ4wZiektrZikZEps4LNyYXPegUJF8LFFDq2KPQar",
  "key23": "v4U5WRRn7K4S2x2miTCb18VYjgsVQJ6kdEyMwcYsaqJ8mmLUnQLdooVKS7RxtAkBSjKLYxrJeX9FeGomAYm3hAa",
  "key24": "2ghtSQv4HwWGgKcFxiy6Nq2pWrCdSMGQRBFiAxxP81mcFdJWeVrHQXQDACvgAy75L6yvjWv85waQeXwJVE9reLg5",
  "key25": "3fCyosaoWf1AidTd7XLpupVYXk2pJqpNA8kFM4UU5b9vqkwWy2CDxWsFPLb9AXVCqsGBcjMghVKwTWeAuF2YF7F5",
  "key26": "3G2MdDhRoNRCJpei4Uv4HYVPtwGJXsYgmw9SvfF3obeRyru56xwNtHrUktsdcc776pcrtjBo6EoYtyb686X32haG",
  "key27": "5u1SpyA2DXWtkY7YPVKf876YeJbrwjDd46TjXtKEHjrd39is22TZHcmauNgJVs9yVkHJorqj6BBc5fRqGW87KehV",
  "key28": "4tvfD65Zw2juMQSp4G6jxwRPUNQJsp2tN3h5GMM6tEQhY1xaSBfKAuRoYNazVjDYY8rGgysXK8asVjSMN6m4GbNM",
  "key29": "4tfNzHJdNBufBLMWu6uV1wJHvVEVggCxXE3nJdPFNfkwC566CvsntMfiSFZxedSjhPNrLfodKcyyizp5CmmXHpKX",
  "key30": "2Li12NfY3z9zoN6PXukbmrJrujtvct15scAE8Ea2HXknAVP1HSrnnQysQ5a228QwVWQQLP4KD2u3pcYuDyjLVARa",
  "key31": "2HRTT589PsqLz5QxMkKBjRtWa75buUZpxHgVQqvugDKWv1CgjTTi8BPtYWz2bxXsQniNMEUQ3hBmEUeXQfNWbhx9",
  "key32": "37a6x4cXKTaJTL9wPFawUkAS2rQxG1MyDKfzRgVV8CpHEaW2q9RKXTRsY1V3A9W1G9NubLtsUe4A7f7oA7oeZCDK",
  "key33": "2A51K25kssacQjUHZy1azkKXnJDjHfLSTiVnkamRVpWzMxheDkvpczK4UQ2Wrxy89QCACqEtBF1XcusQoRHvBez8",
  "key34": "35KJkdv1JF1bEDdHauxvfATV9VLyCLrpnRCYYpzSzPcnCqMAT43AFbCFgHZdP8zj2PK5BFS2pdJ8jPD2ccTpCv6j",
  "key35": "5eZExnpEQgvRA8mR6DRNrWXQ2a39aAVLRPFZqm9X183i8gfcKPgaFeRrVP1BzeYPi5huL92L7VkiWHQn5SYLA4WP",
  "key36": "4gAzmRPJRFr1gj3gYytkMSdD883Sb6RmaNTwEzKiaWo3gUrdUFzSzJd4f4d92f399rh4gTAbb77QYbF6mxYb7HQn",
  "key37": "1sKLY95oSR7CjxYDYAWwozAVaPxSYCEqRCRqkWzH76e3g4zwkA5UZtAtpzLBHWzbAhryKfYb2nuwSmLdJztoLMV",
  "key38": "3YHQf9grxNygWqUdbzeJcuW5EedhhWd9dJR9dTnPBDLvjz6UcsGeysX7C4hhF6V7eYMvYsgPTU8WYficgArfdXpZ",
  "key39": "4zvmaaNTfcSziLZQQ285pj4HErEEVD1ToV5o6bo6LMtmidHxTx4TVyHqQG3oFLD2f2DdzpQ42PPcHZ6AKNdBL2bp",
  "key40": "52CN9Rjrx9eqd5U7pm6LCbXxnQWnF7Am6n2ZwxaMcejhqxKBFnxbrEX6ujU2VC2NYJ3H8sneVbrNGAfkemj6qxp1",
  "key41": "xskrRVyjF9rKJDUWQmeVtUXMMaVGpRzPEb4wCJYLYNB5Hn4dJWSP37qW4FZzkZz9JsFHbE7n2SM4dqaxDV2oBtu",
  "key42": "3G6HqcRNG8a65pbLq22PDetbdP3Hdmx4gkXXdDKvJYSq9vAikwomg5PG2zZuJXTXcSutxjQJmKjgEs86pTr633eY",
  "key43": "3U56PLiTZ5QuF7ttCWMx8jfvXvdCTodzFkGAoWtvgHwCrhKYJ4kZQtN7CXPaxFTFGCwRAZRgzg7HHBx5v5KV3w3S",
  "key44": "EmWnHeGpHfMxEkiCdDTmGnhwjQB852ptqk3uXDgs4vCEkCnFD9t3kPr1Lm6NncfhGTRWvcrZEBtMszUXRKnxHCF",
  "key45": "4cYtocs2nVxGec4bTc6RxKohCKVbf2vGxH54cnvtBh8kszE3fxUtZ9pyMwQzGuf6EYFjNUUq6Axk1CWpc9SL14TN",
  "key46": "3uUoS2JBYuTMZ2h8BnCW4xQBdXCu95XmmZD3rSHXMvzwdGfw4fwVnji3bh5WnmCeuzzGhdFBAGHQrhwqVysnqkpL",
  "key47": "PprmosYnZKoYC6rmsjryzfAE3ZzL1xA8BVnCzLbFXyj96vSDKKd84c8NXrust5NLSsVa5LnvLXapCSp6WNb256u",
  "key48": "3E8J964QbRuoRioRu1HMfptGg1ZexhT8Nvp4rTV36e8wNu77Rag2CeAZ3RBceVb5tNJcETSjnwf67FRugXd5E236",
  "key49": "cgsYoahHU3LVS9PXnoagMrSH5Sdja3eh3NS6Hi5B73WCg1eSk57qsXgK9rjgrNMbVJJdgjBWtDxU1khLAf9Kk66"
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
