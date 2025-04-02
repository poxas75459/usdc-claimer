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
    "pJnuMNus7jwfdUvm4CHAtRHyA1gW3uupcz7Hc9ocgRvESWLfSfb77H6oAFLFJk2kDW4JhDxecoJYCnTADZU3ZSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EyiEU9avcDvNwGxrchGVWSsnESiNwkKBJ6Ms5EUdbWSdr6MxHPYPkuW6S98oZHiQibXPexN9gwodffqC1ukdEwy",
  "key1": "3TAXTLV7PtazPBbG1ECkTkaMvA67tmJfEvwiH8jRbtzJQ17AYNBtkj4G3R1icrh4auXxo5yi5oeZR6ZMTkx1cFVE",
  "key2": "3soDh64bnsDqJ4nsbPKG3uaHycT3dNpKc9ojUoiqC8quisw4NPgYkdEGoqZ8S4xhDCMA7EubSvsFgam5B1TqtobS",
  "key3": "3fEsLBQyuiZns3dR5M4rh9PCfd6fih1UCm74p9eVpYEyJ7A2t51gWVbtk1yTiEnXtDGFK81n9YDqdA6wBpjMyFE7",
  "key4": "4EAYjiLUrSAXEsPdNhnakrBRDxyJy2NQTuq6MtNBYqEdEJyuCYATxvxrhzq4WhRcFJeBbbKg5oyLiozCyVLQnrAa",
  "key5": "DQ5zEU8LmCzEqniJcVPvfu4UdBHGjeVihbVBj1j4MifJMcxmgPtC9N3jhEibHdtEh7ppARk6kZS2644BinZnJfU",
  "key6": "roTGSnWxEdoNwPgjzDsFDfbRLAhyytgh4j5UUUUnckkkWbnjobyHHRJaFEMx21Pe7J5AWajW8KUHGkE2pw2shtr",
  "key7": "voVGQPKkL4BT5G9hbmdhAAxftXG4QnFXXrGLrvBQho3zaZnzufjkxqoWdxeFz4eY4zdWmTfaKCe1Q2Wcgjv3jmB",
  "key8": "3fK7SJ9mMubiS18dUfVNRAiaoy4XRddJbGrdnSg8aNmk5osT7H33Dss2UuVt5bpjDDe52qtmoTSWD5uE2UBzx153",
  "key9": "5fYhNAk71iAxExokHhY5ds3AnTwbpCSY6ztGdhMTcAXvq7PfGgaNaRf4WfDky89q7WdLEZnmK9iHfhQzEJJJY5aB",
  "key10": "5TEeKTYh6cYZ6UuSYWRYjsP28zGxexB4QfPSp8YhaYmPp91eBkwKhNAJsjkazBtPxZD1kKYyvz3hHxaoAf1qvkmJ",
  "key11": "Pw2auope9Wf39hoWnDdraJTVyyaH6tsxPMZikcFvZisBMxBQmhQM3G3e6E7LE3r71A4oXdK2fP9bYDezf88Sm7f",
  "key12": "23SdcAZD65uFmXDB1cqnfMQCR9SnjTyjAQ7ZH8LfFETZxZoUUSCaLS8pJZuH3WHGVtV9bDocgdHfzLUhGpQ3pSYm",
  "key13": "5rVJFxnMi4FXk3eNw27sRYGAmLSF3r5aCKHLNYeUCB1CA8BSWWC9pHXDr4tnLhuKNh8R9UVk6vYrfRDJ4H6NkMXz",
  "key14": "5gEZQW4m3p3RiwRtVimWBW7cLoWWZJhrvX8qugnnL97YaSddCSY9nAkDxwqbvX5hmT5ocVxoxEVh9sYCNosPudzQ",
  "key15": "fLLYHjfFPEVFaN8nmx3SfjDt8U12BUggDWKYypP1detpwYZa29sYYp5ruixsGY99Mjjidyp3qZQEZeAWyyH4VzK",
  "key16": "2GL9Mt1BVJFjutCMY5AGMC8qpQkpYE7EGgMx4AH39wNqyHeAdbvkngy67ej3J4r6qfiLGZNejFga5i8qGWJVZvPK",
  "key17": "4RLUtKn7QkVKtSbHJUgi7q8CqpdpY6UthYuS7vhf23jDA5hpopnSfh2MsyactpAwgMyo8UtXmsghbGJdgDfPT4SG",
  "key18": "368cuonJVzp9i8sTmjuSHXEJcrSiGXeMm2JfKHMyJqZJuvc5rzaEpuFhDEyt4DXFyefVg5T3W2QvJy69UYDrZi7N",
  "key19": "4sRD2Cs2aDnuJK6jH31JTabNNFeHbfX4gdAUT15xh5EQ48rZk54a3wBW9bLT686G8NnLkzWweSPC2QBbzQS1fpiJ",
  "key20": "3uTikTGmfsZbNynuS6VYoZdromMVXDtTyVXq96p6AgnVFmrpwwCRqTaAZmLp1LkiSHu4qMAWJEiRA879YReLjx9D",
  "key21": "4o2qoQ8kUG1bD5NpnhARJyuzs7ZxLBzjUhkw2S81fyJxrLs7dvCWmZSHZBGi8Zixr5zuNrdXCsCvHWGuy2kWR9Xq",
  "key22": "4Brf2V75eDSxXgSUvYmdGBAyK4t5jvgN9tZbYe3Gb45E4Ce1oMRvtB51ZNRaPNEARQgtAk4sNsXbfwUTnwsTwsXK",
  "key23": "3Ti1V8pCmx47RdUYQCgr7H7onEVwEa91wVym2Hn6gguUrTY6GDJBejKU23TAL2jFPCSC4sxRrrnSqAtibABpR46B",
  "key24": "aAq7BoYasVrSSqohGsjYp7jv6FD7imkgaNuTiVP92pP8vMivLArvU748MjZfWWpYRH3DLCkiJnRf3pu7HBULrsr",
  "key25": "4n5sya7iRAFz86X59BMyCFqBjCeKK6UoAZSpC75mja4ZHBr4JAMZNUs4BRn1ovkWv4rj8nWxuv86JWWK3rYCbLJQ",
  "key26": "5ibyj5F1khJUSPzDNDRBx9SrWSsDESTgHeU4LEuMUpJ5k6vRZug2jugQpyf6W662AeJJ5ziux4i1HZC1WHL3d2mB",
  "key27": "FVDjERVjWqCkpbW2bWxyCzJF9GBjFaGFeiRLNmX4u7XRX3UN3pDMnG7yDhC4AbpsA2TSnprCdJct4mKhxa39uzT",
  "key28": "5RSVC2AUgBTGj5Hkw6Ef54KZNz8qEWaEnoEKhKEs3FCGSACmsVy2GodQ7DFT9urtcp9smnmUVGjsg6MN8S8GYEAE",
  "key29": "rcdjA5SjJ1jJwCEGXPSy5TdA7L4D2FUtipJMLisV3ECEd8DsPCji3LKW4vMYGbVgcayVtAHKyFByxTvz8pMZkqd",
  "key30": "3Uxjk2vEJorzRh8cjMqTpaMgx3g3AdRtyqFB9SPcBknWsLEvV9EAEdgRTpBi3WX1BueWeEvw32MZtTxSU8qDJs2L",
  "key31": "4iMnujMxiriCbcnU5oHfLHNwoAwHMtsHTtpSQGPZ9izPrkEqpSh1dSC5qwWGu6b4xYAGxume74CVjRDBfjrEgJgu",
  "key32": "bry7T8wRcvix9rvg1fXCt7WE8QY4S4sjyDAqXyQeuc22A8fqAU24xkHovyz5QmKsrcHreuSsymeKVGcWBmZY7SZ",
  "key33": "3KQKyYQdK5TyYUa8GVwDPkErd7FV4fzLSSCLY85ztaAaEBrJb4J9r7LFLYSjZoMhoGS2yoj2NEoJ6qTAfFu4WaaJ",
  "key34": "2AToJ7gzTgVcenYNcMnpVJJApECMymxwudJX8Jz6KckdQHRaJLA9XN95SuZbu3ebhr3iiEDLKUhLL5XAc6rQsNSS",
  "key35": "2fzGACHzZSZ78BroJPsNtn6DZJxV3RBtKhzTXzKRaw8RC2NHpxAxvgcEnLsRSJePhUA4FdScTMbUrM9UDQmmXHZs",
  "key36": "1vuk5E5JqvNdw4efnZdjThafCeSxjs98QWprAafPqxmGZZEpgCvkiPspqcrJWqavQXtcyE9RLHtwXw4p4WVgn9D",
  "key37": "3ruKs7yijiHtTVYAUe43Mx5qKbsAMjQeenK5h2UrW5mEn4Rf3N9CtS8WpDaiyPpxGhsRfgVcnGvC5P7qqMJJ6Vyp",
  "key38": "377XtK3cyCSLM9SBKeDJ5QRQrfr84ebTTaPrSRrRNZqxbxU7TXByp1UhFDHJ2rpSgpLrMGh5rbRmH9LrLqB8t2b1",
  "key39": "3uT6gK8pqMw7QrWbR3VzuYFGhTyezgqF773CNtgwQ24UCMmZ3bwjwtaRXTBxzUpjzkkYh1EesfcmhG85xfJz4oAT"
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
