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
    "3nP7vX596wSA824whJuM1nsFTTN9r4J2wmeuSNQBdvXqYKK4a26hjNyfuUfWmcqbMsgoYxwXPskiYEX9AvAKg7j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6ZgQxRGG7R6NkQUsaB3qXdHBtKWqo4S6B7gn62Xr6YMqtVX8Pzcv5DpnLozJv7DErYgcZUu9G8k8FJdqmKqb6X",
  "key1": "M1BV3a36fgYHswmp3KgTTP4rAi9RYqUP86tQERJB4pNsYvBjnMjVTofFcBy71WmJBqACaKdDXttka6fiMAFQFs9",
  "key2": "2Z9Ws9jxxsSXD3Qa8MLcoE3219ergksEvyrkt6oR9o8fTkxTwuAbv8fPVHF2P3pu8Dx43nN7E6r92buZCHzxvZLq",
  "key3": "2aXMDXjumZpJraVvZHcZRQCKErioSoMVoSk9nw95vvNVDN8wQsQUeZqqwvJNydqbbrbQh8iXLv8QK6ZYc8xNW2eR",
  "key4": "3jkiG3ZdPNTW7oTDMYbUGVY9DQ9SiBcks4sBinuY9R3LQwtksxFyeEXzDrD2DokDHvSSarKRrBarxJ2gx2jyzfZh",
  "key5": "5bcfgyqxbG7q1bsaHHSSvq3yiY8T3wvH4gJeVsgQkk2QrUt6iweNBXTR7PSoh6JJgkKwZkeAfxUrwEFwsXHGbC21",
  "key6": "5k5NHdMkGtH5s8jSR92162GBCdm3H7EDU8Lgnbh3W4YU2DvfBa8TcdubJqLM7xj4DWMuGH7SJvHKAChcxh9dvJUF",
  "key7": "4ZNu8ss5Cgj3cE4LqRNiYTKXMnqKkhQEXARq7kReCigvCQkNaZUs3A8HFY1LQjGTcBiz5F88HmmXWPXi7XmUXzgD",
  "key8": "2bJGuSgz53oxfMbYFRkYMF7RmT9W8jDG1LqB8upUTQFSWrsPorX4DHycW2euivjb4t4gNdAnxULzJdgcxPWaa1xY",
  "key9": "2di5qEhM5WNQe4LDAgacvT9wKxbnzskvrEiuFxk5GDmG3LqiN8u2GpWBF8LJ3EMecHQ8ce3nZh2MnVuU5LoKPTj",
  "key10": "2g2kGEuhFWb12644KFuzMtKRNAnQjmXVMLLexeScVC5D3Sch8qfUXnf1rx8Q18tDUYVyXSHVp45uVN54b4UpKa1s",
  "key11": "3LLXu5P6cGZ2LfZSS5RQZfKmpkzdPTFbcv5NHqxAnvzRz9wxKaoRLYUFbrwnhFPCAQSLPUHsJbKmVfjjdcmF1zS6",
  "key12": "4Pj4VkEZxGopEEXYqnFrtzgDYqzoh1DtVHNBxxGLhYHbUGeQFmnLckGsHaAYQBwaZTuGDwDapqjupmkLsfTNKPC1",
  "key13": "37WGWpEXesqxa5qRuYQ2pqC5Xih61h7zys5BDcLTBSTyuskr9nKTybiBqtugP2NbGzCwaLEtLSPZkLKNfpe69uhe",
  "key14": "4FZXNiUU2atGCHquBpVjH35tpRvTj74c68DztVYTJZY3VUmxt5VRetTAKsW95381pT4vSuMYEoDiWESEtKo7C6hP",
  "key15": "3gzVgjN9pVtdENprxb84hE9a7g9D8DyCBrrDPLKE9APqcFKBP5jswXtib2uKN7PrAVJLenjxHCSaVHnAamQrLdCK",
  "key16": "TjLvrV8WdJaL3tQfiCeJLRE6Jxj2V7MmabBgQiv1aQgDmMR5CBKmBL1QD9YZK5fKisXe6fHEzwTAbRoqeQpYPKj",
  "key17": "4QVKRvDwEoinA3ND3zgQyiHJGfRY31J3g2PpYxreKA1wYE4ZsLYhMSqfsG49D4hmvj2A1H4JBLQJEEpFi7T5xsse",
  "key18": "35Hs5Wcnq9otUGE8Kx9aDEyphZWSFpbPpyk8qFfHL2neBaEANUwS2aqp91Jgueac1N9pwvLGuCBb3A8KVVsgg5oL",
  "key19": "4ioCNDAf5R4v2GkAye9GVYiv222DxEh3aTJFSsmdfQrT92RrsqgVtKBcxcgLQZk9yxRYHqgmWdsBzY9xsDftvZD6",
  "key20": "Za24C73JC9VvCthDAqdMnASNgmyQs8ARUoyQiM5zvN7PDiegLjHKzjxuJVT6WZn5P9kcrKyKfDcbFjpt3SiNiFj",
  "key21": "nGjUZZjhyJ2qtKsb5AxkCp9GQaniRrLnXbiWZ5kK4o5egToT7WvSsTFNeasPPmBxnHBVdAyLh1wA219PcpD9b2h",
  "key22": "2BLGS2jhtM8o65SLGFn7dq4kjvhBzY6r6uA2WqaCDWPZtASd9TWmsDBq145wis8jMPo8wE6dERMiPKpSMm9W596J",
  "key23": "3Y5sjSc4XCXeohVLJ9P9XiEqUSWwYFmXe3hgP6E11wok9BqmuJGtaqPbbUqLNjbwieFhUUrC2LD4tp7XKBotJWXo",
  "key24": "BzuVop4spesAmgb3yZo3CzGFzoymXY8QctoE2jGpHP7w2idNixMCmuESSZymUee5mQD6Lzi35bVQTbcowWmVbJV",
  "key25": "3QDxiswsZHz1D91S7u4zMPwRzLWpg3RFLn4PY1UYVPUgWMUopMaqtcyb7FytjwTL8L2dup74Zfkg6U5fCj84BVzF",
  "key26": "4Mr7VRB8iqGj5A5Z3EBdxVLobNsRBwasbXjn6vMovAYb83GfUXuPBu5hvN8NAWKstDKZX4cLq2Fyrd8oveNYSFLS",
  "key27": "gSBRjtzfBhzi2JgqfJXncWqFnqtxywEnrAAxcfXnT9TUW8rtJWJqA9Wgw8BMrTbsLYocXR4Q3qrLXmUiw7PdFEF",
  "key28": "L1KVLTVYRfn694fuD2iBPFcUmwQzARmf91rxAKbys9rGZ4LjpsexaFWKeuEJLKDLJnPKbzsNv1YYEy75dmqC4UX",
  "key29": "3BE4eM48ZGEKhPBUrogSY5MiNJCFZWjoQmQ76jQMcwMv1vdVhDbWRDMjFedLH4HRrQs2EpZ7J64kdK3Bf8YxgXDN",
  "key30": "5uNmma4XZz5WveUinG2xXV2fwYcB6VQGQazFjiW4d59ioud7hKRWdz2JC6X3piyWzgvTPZMYxXmiXTMXopbnsTvU",
  "key31": "65AM6b8ke8KhV15CZ21GjiAMj9jqfMFDAQqyi338ooaDQi5z3eFAtK2CC4k6ytPrQRzH3XTzHFPVnDnRMqSHVr8t"
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
