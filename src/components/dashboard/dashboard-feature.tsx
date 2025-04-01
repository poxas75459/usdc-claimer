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
    "32WwJiKrfHMzVAVwP48jVryiY8hrP49FPJ8rup9X3aBVguRp7dDm6z7J4JmXvbZ58QHBnY4DNRg87433oHSZ5oD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k3shL1cdkveKXpPUeH7uudn1unDo7HHqe6DYhV7n1fMnq4FbzeM9ujNBxxj1k4ymZtpVHNH9cg7LenzAsaZCBf3",
  "key1": "RChcVt358cQpsvWbq3tZq4kz48aefPxqFsLVHri8MYMH99bKD4RyWH3CP7aLSxXouj4ERBFfW33x58AcF9gLyLM",
  "key2": "26t8bVaLBEanDp4rFZKggqSFd7XaXR2TY5ZMgL3Yz1BkQWRVieHuUEBQaBPbqaMwW7zLMqhsjujg8Gs9BWD3bMR1",
  "key3": "4P7jvHueeFfhPProHCMUzbesTFWkZyEXVi6PdjvAZCcPChZrJU6PEkXV3EUyKTxA6XTNNDjyXWrepjAjZN1f6Fdd",
  "key4": "5XWjHRfrJSNVEBxBwSjzVnFJrVAM3w4wPgLoHPUb7FyZ9sYngekgPDMwK3SnxnAGAyiRhgfXqTLh3ALQcwUQzNLz",
  "key5": "2YbpcUhjcUSvdyaVwcWAvfFvoSMwZkU1brozqR9Pwp34uJCEKTTxcHfWuRxNn8NHSeXWggQrXEtCgQJHsgueYSvL",
  "key6": "6NgeQxcM72rPBK4PDvu3aJJzZ3xYGBX6deP7zJui2QjZTApP85rwGu9YKzxYM5fSjNLS5PFDpyTGgbbyzHfB4ny",
  "key7": "2QWg8bsnE5jvnwgG6qrkGcSZJY51MPQ8FW1iaz8gP12tLD7bnWtKuTfWbbGY7Lv6n8uYbBqKhAfcosdGwJUFT73C",
  "key8": "5CmRujtXApARrQqnXYaVfznjZEGi8AJZKAhymgtSYtQb9XnMzXvryLuLR4SZeexX3ff3YvW49WPDk9yPNgEkY8To",
  "key9": "5KAZgCrT9NcoegFBVNa3XMuo9zhu2cCVLRAQNXwf6WzKw4NohiSFT1jCukmKUqg9L4CD1p1o5HrQXdHniJ4QJKVh",
  "key10": "3jU5sSVYeCGRwPdHSYbZY5PKb8LzozSoy791HSqN1VXg5n1VsmzF5fNDNRYTYHLVf1k6NQ8uvpwRDgVvssQdWqzV",
  "key11": "5vUi5RCzi3xuo8tBoTSYH7aozmAvwAve2afDccPLJwzMcq6NQ568tDyMVdpMjqLnfxEZfq62y3cWk8KFveqC5AZz",
  "key12": "3degsDQ8vEcNfQW5fo4kwZzbMaDCnWcxZ7vpvtgAcrSmWdwfruoaU45S6o49kbp1DsdCk4fTpZiES6ZsKSBTzVWg",
  "key13": "5iyr8PBSnNWQs3AvgwzpxHw5iAgk3esp2zftgHWPPP5ZwD58UeV9Xj91KCJz3NHKtMpBu7kgB4gFNfNSzfT3BBLD",
  "key14": "47kueugN9Y1jyY6emCiQGimr6MY8EUS8Y15SUypLuLzjBnKMN6ppAUnvpdsJX6wbPBRUeCUvgSWyLz6or9izA14A",
  "key15": "hEsvaA2YTcNTKwjZxcSGWKnKjWBoda8xekvhmXu28BaFVSwTSdhK3ss1yCVN7WyAhh3qim6PvW5HWiPBCMBKTDQ",
  "key16": "iWsMVeo7ia2YgwftGLnoRQBkWskfiRvEai6fduJn5B8oD1hRJYrRPvAYYXm6XDZqUDoRZRGLbiAwqsywd4TTWch",
  "key17": "2G4SxgKA7xfWTiwBMz3DeeTEc6cUNJD3nnqhh1VwbPoiVwNshrc4vpdzaUqd1Pwk2PuhkfsYu3YwKuvY62RQHJsr",
  "key18": "4qDtjzQryLTJd4g7pdaJAWVCr6kTTtoRZPpRo2oguPhtqJzf5fj9tkbEePik9UGFBdUbmf8dVnfSidQgb9qKygsQ",
  "key19": "26ZFr8o9TVJEPhtvSw22BZye8HfzRcwPUGaTJiAQgsUTvxtgQF7M8gEsXgF47Cx2yZTvCAx6oZtF3L5GEA17ve2P",
  "key20": "ssB5CSmJHhpJBjxJTqkoPakT6EyJ19jv5cDobu8PQr2LoNtaqXLgq6rzc4rppfDJAFeEWiUjP3E6isRydKkA26p",
  "key21": "55thLwhJcSVWL6BppQoxfNtDffnpDQ17m3yY1XhCRMZntE3oZ1iCJ57fiQi4XLtx6zvXs8CWMUu5Gko8jbTNYoJx",
  "key22": "43JNMhYawz6CkKtZB5rr7M7DqPdQt7ZAJoEUE8EqBoB4U3UTkfPP8GaszmYsJuMTGNAZzXZry5ddx2asutVP8Wq6",
  "key23": "2FeJzRUgGoFK2uuNdW8G3ZBZGcLn5wfJwpqB5sqrvugoBL4LgyFnWT3jXUT7NsSd7UVNo5npBUv6EVMB6ZEj48bx",
  "key24": "5PDSJ8pWx87jAqLZLJgyPwjD5quHy4uV9qPSHUJ1B1ALqWPRBKjQ4oohm8eBwWsfe1dfRZf2ZzxFqrcsQgWxEFki",
  "key25": "3MbpP1mAkkcGLHggaJwwKGF61J58Yf8diXmXGdLYqX15jZDx7d9qrezmSccJ8HQLajQzpNiZduwfL8G7FG1Qph5Z",
  "key26": "4sFUQM8P4eeJVNAP9DfimxHqYWJCth11GEF4nY2k2hoL2dogbUwnYucJU7miM8SKV6Lj1Z8ohjKVksm3nphr6pNe",
  "key27": "3hp4fb7PnoaUa9ZqSKZYtep2Y6THcPZSLMHdtk9ZEb8fasjCnAJum2oRB4sAnRFjoFUK9kYU5p1vny82p7QvQbdA",
  "key28": "5PY6dsmcrphEPFfQ1DFqT4EwNpNQQuL1assvjYawt7sNiBkan5tx1tm9tWpyLiAMwYoo1VBGQQk8RqwTEzTR5EUC",
  "key29": "3cMzAs3vePtak9SNFm78nhQ4WEhoqq8isBBCa7FMAgvGqJMoAzy528JSPUstiKoicj1S4KWPQ5kBjHoFV28C4xdA",
  "key30": "2Y5QDfufXDZSVvmVCS5DTavuRiY943efQnUEhY91jcgbWZpTShrJcr86ggzmFCAepdteBWi9dccNBB4UxvmaCiqN",
  "key31": "2LDaMkZuTAWAZaGHBEu3Ub8VPV19wBpYVSAutdP1LoCKcTgED2ZNxVQG6tgoWKgNC9Rj2TaP6NAbmUUUCwSKjZFc",
  "key32": "5zhCxjGX332E2asnjhrA56yd9NLhSKucEDfBcZeEC12yuWnV8BET9XcBp9CcC4yjsCmgJK16yvwAxtTcT21pnico",
  "key33": "22ap8D7varHZuYBYFj15dcCrzB1VcRrKaNAgiktAzdfqxBc2BwuXL9hh2cjPgTUA9RoxZXJ1FErK6N38nAcW7TTe",
  "key34": "4rQ3dgKpdT9iPeFPW7Thi78Tsi8J1b2pPpU7e4bf27B6qZHATa38PzPEeFbaJMKiUuGJuMnpbaGe1XCFjrqzx3oR",
  "key35": "3NjB9Gc66bcDE1de9hoF67q1HDZXqxejWuTNukRTsu4z6dizkXCEmjwJKj1R3GmUFbmSzsjiErwvi3Dbc16DVK8P",
  "key36": "2qnjYdvpmv1cJaNzKdWA8KrYGLgggq7v4Ty3j5aVd7anLmnN66Cxe8ZHpYqtB6NWWW5FMvGT33SR87Qfo3HpKmTh",
  "key37": "253AMH3sbRPQ3sTk41BZRzripwWmi7r5vrosc2Jjrr5bSodoYiPE19dejCkb5JrThnJh1J8UwjBS94XqY4svUBpv",
  "key38": "4azHqJBZieYssmynbK1ga9wyWG6ry3Es9qatsueMejbdbYPPdk4pbYgC4tCLmp5XqytWbx1JqFnQazEZeFJPP67P",
  "key39": "3kJcm2EWTpbVcTp1Ai4DGoBxU4jW9sQCnhVCCEpFFGQStrLQCdnnyRRh3Fc9obaJycChvKkfwqzq58roP5tWduV",
  "key40": "5nr8SQ9aqGMdW8vVBDPFCQutDNGStS78Meo3S4UFqMN92AV6gyNcHP5yyytTbGMczbqxHSAmJaaLFn9N541n8A1X",
  "key41": "5Lh5Z47sP2N1xG7RhJr7ECWhrPyu8xmePKVnxecxSAyCWGzFSfAfbMKU4WxcPSfWgf2ghtxLdMHGccy5DzUHuV6K",
  "key42": "5gWxg2WLfBM9eGa1o616nN4k9QjWq9jGAfrG8BMYraMZyy1Q3NGKfFNGfyraxKCV4nhRyd7RzwT7Cr4ozJHLtQg6"
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
