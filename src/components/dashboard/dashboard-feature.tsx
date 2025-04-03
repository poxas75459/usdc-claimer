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
    "5hmYvmxngoAd95FLEjuVpvsrbdFiRyVr7YvDAiRQzzJFafEgS5p6bCNhadYraxLkP5DbzvsEhaeUNTPTqi1ytTYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGR5XeRA8yEgNKvZ29kn1njNSJk4KW18F8Lcxr7MzdCb8FbgNLieJmGyLnGj1NkEqJRJmeanMwVEJ7mucQS8Fzo",
  "key1": "1NM8eZEPPhjPTBL4f2rDHFSFP27HdTWi2ATrMEE8YtipVBWMcquf9rzSiPwS7hgEiV4fwTGu3v4Yp9SwGKKgSkP",
  "key2": "57zfcmrShTnC14izGdqDUijbb3oMomwgYGXg2nN89wP2GH4fqgDz3mzqxV58RM9n753yzcje5wJX86Qzpq5YkzdN",
  "key3": "2XFaDttiqYRsnF2A7TaXd86Kf4MNUTfHMhxxMPthRRpEMcfcouBQPTLYbP5SYkiBYTuq1bjjtbkseskNnUeuoTKr",
  "key4": "2cRxN8u1XSEKf6D8qms3v592S1gope6D2qCWAovjuB3P9xpTHYBojuarnAUADiX7LQ4yXcTRyYJibgEyJZ6mVQ2W",
  "key5": "5mGk2ZTgLtbhndxDThRRZsUQrfukTsKct84HrfyshKLi8gDJ1zbb4RTevL4sRrPP7vgT4KQMvfVYC9pskC8XZQA9",
  "key6": "5qxW1U28S9wSuc9vh8jshdCC2E4qVXrg1KCNZGuPJn596g9CHD8gHSYmyS1eZqcipXMwVpZAscTFAGYXsKpxBQm9",
  "key7": "4gorq8WGA6oyXWZ4639fidnByRzGriNyba6TpEXcbn4xTpSYkRTgGKjqmHBWtXTuYb6Adr79aXkyFArVMRcy485k",
  "key8": "315R62cV3bqTBuyYZbuFcaeGkY9n61LQUpPn4iMkr9pdE8fq6XFCdwxfb5wk6Ly2zprR5bw8b6WkkKNnwXWfYxS6",
  "key9": "2Guqo5AM1dz8iQwJdnaz1mfkKBQssiB2spMUASt8gWGgCCMCGhsB66fvLNehM2zvNgNSDykA1y34wEiatGs15LBv",
  "key10": "56CAEwUW94ADDXuWPk4BBLuueL3JfvCzvrdh6VgFZYTx6NtRSi5k6UwqjsUZuN2tkNjXhtzATAwEpk82L9NXLdAk",
  "key11": "XbsWpBLLDHxDdwCtS5w7LSFCaZp3DUUPBgkc4ajV9HbpLQ622QtxSbXME5vTLWzXcgaZd95yzgzBt6eSWiVkbKM",
  "key12": "3YERyxHtU3u9zU59sKTKQSoCk8pSWRVN7hFumJFzinWfve5fB67CKZy2EeGw7DG7KFT6octpCzh9RaH26wwnx39Y",
  "key13": "EFE5c1csNAa29aHPty8q6FnfcMpDVYhuKZqoi1XA1uLzoJbtzVqxvexRYwa6b2mT5ABBh8aZ7yd7o8HqR2Dkrgd",
  "key14": "3DKyb6CayMXGNs7VLtBxmb856kAL95xZfERFiR3zacSRWyWkwPVRKTnJNqMyBzxUE8qHtPqK27gSue153omUa3v2",
  "key15": "5aNsHWn3giZCCMagVrtqZQNBKLPuKyJmA7aZ2pH1kCKzQALySQwSMLWT5KGwuXCYucDv85veYCcaX5qLoSJg6uuE",
  "key16": "sHCzJpKbp4thZRALTja5Z7pDnsobQFdeWjpZ665vPWXYGCmMUVDNYJnDTtPAvA6115Jz5e2A6RSu9oxkYSVZ4Et",
  "key17": "3quLNFAmjNgBKSujxHH3d94cEhmbyRWmV916JkiUCBkpVZobbUGJcPbfDgVcUetyu6yAf8V9YFAcs8TkTtCHpSty",
  "key18": "2kehcReCoreRkiCPFaGFqQcWiMYodMwuGa968kbBkWtVqM5tV7hWHA5DURKzJjx7qc2mN5uRgrDycMbYE1ViQKGn",
  "key19": "62J965dHy95x7bGrHbmW9pE2MEEWfWVroyyLikXK6vzNUaKoLUmzavc7eVp3EupUavqDswPANhbHA8fqYtBRWjyF",
  "key20": "2yE3XofL758DEdtV5SgJ31ckNRectNjBxYWSLjQuVCzHDzWuN2SDy5jM2HYXPTEixtgPC6kFncE26kaV9wMPQsRN",
  "key21": "2U9GwkDmgMqVP9fqrK3Hv86Y9Ejj2NZaAfwQ79or4bPp41V2128rLPJxHwSrfB2RfL5kGfeZwUaScGUcWZpoyz1z",
  "key22": "3Gae6WPBBjEKFYqQfRRFVgD7BgvU9pv4U6JoHe86Fgt41PH8cUaMhjAug2sQnYSoLbdFKxihMfA4pXjbuZ5c3Zkq",
  "key23": "2sZA8yQ5Fqf5ymhDvvsMwXBHwbHaUoDR17jb8YZht9skp3yyKTeAaULi7L7un7hrfmcG7rUhkY7bT73Sv2LQv1vC",
  "key24": "2XndPsNF48Kwq9LgAUhhAAZqBk1rFBrPvmNHJbdKoNdz3AhfxT8KfgJaLh8SKp1CWy3T2k75xivXAncpzELKA7oU",
  "key25": "47gM34DQcy7ZSuRjyvnyQn4m5VVptJVzg1B61CkNqGCpr9Ck4v3Gyvd1TGRyUHv7oX9ppfmPS2rhdQZyiNPeJDWr",
  "key26": "4vEjT2AxjffgLDjXwDwdGMZD79ZrnAaudnNMpvYznAfSJrvWo4HFuf2UiAj8mbNoR1t5c3o2zKd36Fuj8WX9yJ3Q",
  "key27": "2BFHJvjU6NPw3jtEU9GzxQdCNktTUxdmcmCoHNprGE4V21Yh689RnFN8eGhGE85MXzwbMMSkCfvgFXaKLh46WZZK",
  "key28": "4poGwKVbdfmHxSbQcKdUhKCHhBHxFpvPoDZTFJs9wJnRbXcMUvMMHMoP7U7ag8hqYiXjrYjPTndHQ16Kb8szySLX",
  "key29": "4zE7gNutUXj3NwYAsT633MG5sg6qXbnFSfSGpCDBF5nGn3EtNEHoMMAq7YivoY3K2V6fhHp1wxGqBFnpoqfxJT9t",
  "key30": "5PYRmNXufRWq8nvqFgsM3kq7bYaVB8FuetZx5Qkp3X2U9r3m111odQ1LNqt2fT3snQWNQ7C62ju9jhnJSzNMomsM",
  "key31": "5XRLw9VfVrgimUyfAPXwQdReh996gEiyZT1ot8nTjuxpiDLdXigRo1DB8Cw3vPJXFyvr5bhu1FvviaEQfQAZrJzc",
  "key32": "2QDPVw63WK8Gnbmhj35brqQXk6sutUCRFfXVufbV4a3c2axqLAXWWeMTRCHQJem75EkLJuhSU24jm2cqcsJ495VC",
  "key33": "5dCm9gqWXhXvvzFvbUhaEXHXxcwfuRP3TeiZcidiHcDvVXxFjqEXPGPC4ZmQgjByLHqSmY4tPgU9pPp5j22q6HJF",
  "key34": "5mC939KAQCiz3UWo8vjRiSej89q1gsN1T5d5DHkYDWC9ATEmedErBVi4xVWrXMsjwUKm43ooG2yAgEQaQjNg5DMe",
  "key35": "2PWesckdwUikfmn9PpSj2QYZ2Li4buVGnKyFHvay5KBgVr7zoX9L1Y2gnbfdXQ6C4DQpZVsPKWKMdsPCp7yt14N9",
  "key36": "4yH7Y6ca82EL7LAxT9eGSqB2oVSfUacX36MmBB8TqZSTTDi8a9RfvjbkF6ea6JZsBNwUYcYgZ6MXgkidd8wLfBeG",
  "key37": "5VVA2yd4mRyzDKyNfjEc4t8yP9gTY2Pg6SKjFYa9WmndPL9j2cWDZ1aBQxJXQMMFiK9rzmPHrJSPYU4vBMMVK34a",
  "key38": "2hnvdoJMtT1wCQXpSb2TLGdmQN7dHcwXSS4Txkk7CPKuQRn9JZcx5mqTtYB2PPb6JXndkLBtBPzVPE2KaZqPzGn5",
  "key39": "iCPjCmAAwHmkRminszAPmbA1JUuCozGNRoVspfWrFwSvk5Y75n7c4zEAduMPztNmxaZpzivsSDRNvx1yw7bHPhc",
  "key40": "diNxcD1jGcW6zG6XoCuUYDNpEfT5KtanUPnBJSpYUR16sAiTzAEWQV7ZurrV37vmW86TdhY7zUWtZnB1Pdfb7Y3",
  "key41": "2PUYHdHnMsCq43CdV1jnxriZ62S9wnAeuHqzrqLHsEpuFFdLQeVyJxP9dyUgsJe28CZhXCUcDA1A8aW2nZsKLtfU",
  "key42": "4BJLBzZjXfkD5TqWQRUz5WujgEkGe91ySp7miUpeSgK8dU7NB4cmFNBq8ShVPzQdtwoBwDz22J8nE6BNTQCTcxEh",
  "key43": "xPuxT74ZCeRJVspKxx96bVSx3XB6PgCRPYktg95s7jvN4XAFVFfQxmuUAgGrtzKHfcwpGuQxdtFhWpqNznLjfcf",
  "key44": "MyYk4ktpGkD2RgZhaTfDvnrzpQybZQ4KfztZPASumb5CtksMfXW8AZzQ28ZzJr5qbDfxRhdizy93bkXyZT6a2jc",
  "key45": "4KvXF2CQkLQkyYyaykHXsTq1ECiZoJnF5zMoTEkmsgiDJUtrHjjmzNHtqa3RkKmYEANTN1jU5Yyn9eD6kXVAi249",
  "key46": "4TXHkJdhkVpBgMaALJJcJaqVGLzD4CdqpxcNP9r9iK4g82ExZ8sgCCiJxA2zktVA7LCk9fAkRmrxM4JxkR9LHAf7",
  "key47": "YmnCNndN7hq7WQBjhHsB2UsYFoSLcxiHyUJKKFKXkgJhradtTATrtz9V9euUAqMoC4ni7qFvtudUDAKUakxcaKK",
  "key48": "3Ha6ZrF8efCdhywSzUA9XQuBKx6fsBR5hZqBhH2NTqi68vA9gaATQogFGE6K1ADJARmYBKMa3PTZmBWMfnKxDrzB",
  "key49": "3uiD8koRZPLoE7MXbqxUcBscVuxGTWBq8oY5vTyRBRGkKDCFUodPEcbHvr7BYRkoGUjHQ19CMEWhpYCRfv1caQoJ"
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
