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
    "FLiGtJaxqoCNGNdvZHGdjxWBkrpTjhhQ4BgZMabRKMyAm8FqxVYE4YsykfE2xvtC1zLARk14gsGjv6YrEfFv4dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "564aHyHiS3CxdHvN7NgZ3WwnSecHDJvHKVr1UrXqwKNBJd4A1aRGEQgbVn4G8jbyDLAZNeswNYTR5uL1FtQFa551",
  "key1": "p6BSK3RyhMHz4HgRtQXHGmMdBuqbvinYuEFc9sq2Amppva25vA3SpMBbQuGUpcwQboprx4Zn7yeSLib4QKGTi4W",
  "key2": "warWTR5B1NcvhffhPJ9UG1ke3dqVmCH5Jt4Rms47yY18Z6oB2U4MmuDherai1H2iLWmaKAU1xmJ5gyjRa993aWr",
  "key3": "4TdVPa6rh6yRQFgjfKnMmJ2uAhGUFaKJuNRev2RnHYKaqZ26kiHQod3ssFRdX5yTbFYjEmPGhj9WJQiQZ8X1d9qU",
  "key4": "5HrPP2aUsrwgJUJaeWnrQnqcH4rWqazFSkebra23pBJyKZKC8zZjFB9Zp16o319aCo6Bbj1QdWVMipLSpMyeX3rj",
  "key5": "5nxL4mqXsTiAtRDDoQjHPHGXEHECCeL9ZW27mdWbxqg4oL7xDifJ3rUkaBQjfYpGJX9cJm1zq87QSY25cAvBNmXv",
  "key6": "4FiXRsQvAaugzcBdrrHvdyJXuHhyddqX95RttAEApWqzXHgQKjxHeMkfa2MydYfs8oFs1ufJx9f8nuDMJ7kx2ciQ",
  "key7": "5AUe1vszGx3w5EXNk4cDodP6mR8pZ2uG3hYTA3gvXaYnbaY18u1ZZcVhAPzNEUPXxrDKNHgwcPdkwzyTAiz7hvXX",
  "key8": "3qeM9ER4dvT2mRGcon69ByKzaWhPFz1qpB9aos8RhdEkuwtzevs94D7zwyCMDCdsC5t9jspVLoyK5DkNwYUcJQNk",
  "key9": "3fS9TFgh4gJiUoi7sV2jyxVsHGgGbJNVEiwy4Rw1vsbowDuAMSBDaf77pxAvGP1jiEcs9GqBWmSqcpbThpb8iPXo",
  "key10": "234XkrhFqzF3BH3LyBW1epochV2FhECcoGrycHDsVoKbxiSaxAZiZMUN3hqLqottxdemRBU33i7X7yjVY1s9y1HC",
  "key11": "5rwxkCFBv83BTbwfVUTWR3H9zGiUfMpJKAg3grUKmiW5s4vMgGMgHuWk7uNwwzR8i79mERGQDntsnbN3WsiFH8wS",
  "key12": "2emxx1VhopFzBuvXu9SQHqQaT5wnqFmdPz65TfLesShitvWwVmuabLmcswMDeXhc5t79PsFAUapCCFjxgapkSb2w",
  "key13": "4xiFcd54J1L2RhRMNNsi4NZZc3JjTosgzJP23Eq5XKQwHz3aNLbE8b9FTZszqn3JpbQRXzpMUaBbG3HpjxwJ4CA8",
  "key14": "4ewaGEvejoHLSHMz4a8EfrsprgzxYnxVTDQSsAXpHn6WTwydM5jGsxuFFWPjuyvEm23VGueBp5wCHQtycm1ZLAqy",
  "key15": "wHFCvaHPdDBgxbr9ntNyAkcWRvnYwgqdDEmPd4jfTxpc4r2RgnrA38KboHCTXDds6JoR56CdtAKuPhDkPzrVUPd",
  "key16": "4hzCK2kqbdV3z3Uc5yRBxnbnTyDhjYJUgBegyMmQw8zz8mi83KDTpRRtX7ApPwRZNuRG6m8GybQhNSobqKDooA5o",
  "key17": "4FYuGvoQYXSbRPQEFvu4Uzxz62Qkgdi57gcWE4Q8cjAEtf8yp2D2VvDtDCTt1XbEpdegnGx3dpYETQ2KBKVnFfsu",
  "key18": "4UPpUJEnrmhfcu9hvrBK9qg9532gzFdfp5gyJAqdXuVjD9tcKDsW29bjbKu3WrA1w1ZQ4tnBWDxY6usd1coBYe5i",
  "key19": "25nrMq5DieHFAE2xZKNVhytP9LrRig6B3K8qWoCo95FxZrCoaH571er1ba3zAPNAkDFhEBfRAcxDcZeUydVBoLpV",
  "key20": "2kgrt2eZMAThTA4cM6p48TqhLgoi39cGBMrh595KH5RycMbiJxRmRbHS15pDhPE5RhAZ3CXRW6r9We3XbeVukV75",
  "key21": "3YXyaG3D4UF2PGcp1A2Hjb6TNHyi1ApWu9i61ETqKEX92n9mYNEPRifeBKYitNEBxgNEFCZ5mhVXtLAJYTnaxqJm",
  "key22": "5gRdMaMeAMCCmSZLrTpqkT9hY7Yccw3rqtf1wRjSdu42bCGoo6k6g7e1XnhJy4SR9XPBuQAXXAvV2vrGekuYJqwJ",
  "key23": "2F2pex7GmsJGTCNQFMZLDo4kAuJnR3jZ7a7x8q18tdAZ3EeQYDgpN1UhpVN7uG3iTr1Ns7dUTw6uczB8AviqcSeY",
  "key24": "3KSJgA3E5wRqiSM262WkKuaqxsw8MBQeiugiyrkzKLujcnhHcZTWyy5P5tfz6qgVKA7RZ8di1AkAPvBYstMcaWHa",
  "key25": "2BozgbvKQiqaYY2keZpy1EdhUouaQHouvAvphuimxDYwsvEBCgaomkmxhJEyJWLx8J9xhon9BaNWyo5QN54fcB4i",
  "key26": "4Z9rX34QdFQvMbwZSM9ascp4DYBLVfieB4ttwUxfcnegubBBZcjLQ2Wsuwo2NsovyFCCCLFPa1WXjr9NDr1gJjnp",
  "key27": "46r96otSr4XS7nEQitjx4BUzTDMcmC21zKHPStzfTXF9mpQcRQn1ddegfmPCYHiHiU4KaReLXq3CuKaabqYmrkB",
  "key28": "2jrLNdwtgnk9RvisrUjHkbLrrjRGnirmZifVxMVBfkNHnhdT4ucKYvne1YBX6YFVyETcWHvZyndGPGTK935GRX88",
  "key29": "4eB3yFRZauiaeGHHkkBWub4jSbeYybqmpdimaV2nMWzLfztEmgaZs5TLPww2tsEUiVbL4vmy2B4nEUWsHArNxdmh",
  "key30": "3QXHjbu7YsS8tHZeY8hbtrYLohuTMrbd3AZ6SnmmsybmKtpcxT24jDdef2Eksx5mfgPNaJ3pYVZe7vRK2t9kCGM2",
  "key31": "4jF32Q7c7rZ3kYSnnKu8PMcx4d2DFtvDuqEVqoWVEPd6LkD83ZX9cdYABngE7YuFv3hZE29ygTkaLm8uCSkbNJWW",
  "key32": "2egDz9gEeFapZsmxi1hSsAcz8ypPc2qrJr3Wjq1naCh3wCUXNeXT7jtvCfKbhqXGVDYkNVhtXBqMGrBvuTtLBTbS",
  "key33": "66bchsJyX7zuEnbyvBAoRo7sLDH8tGTVNZTJwjNgL9xHddV4tmNtKEafK1YgegzThui8CvwJCCEFo3LPDDWecvra",
  "key34": "4J4FL417q1rY8brR9qZUpcRFb5pdxL534eKQXWdCwf9be7aPkLCXv7XVBm1pC6RRBpA5zLrpkgacNCpgYTqrtumj",
  "key35": "3rTTHHWXU7kvi26EHVhizUguY4XYcjTeo1ZBGgGzcBAwmZvsF5SCJphgbj9Zxrxd7pLuLHxUxLVi8wZbZtLAdLnU",
  "key36": "4NtjYEDwwrpR4hmAXgFsQ9idH1t9GfXKFWf8EXMJSfMbwF8rVwJG2LL3tuAs5vQYqUoVdh2oj38AdpcoKn6qTEUs",
  "key37": "4hxrcjGqJDW7UcMTpxnTXh75YcC5o78saBH5RdnLMavNWMZ76pa9ik2BDbW1mAgFC9gskbuJ7n4AzJbsRk5Nm4eb",
  "key38": "N3Soi9MECoCuxtu8tGP5a4ZJNsPiC4NAbEuDv6kVvzSzUfok6HEFYfjmAs75WFtPPjsRPysXih1o1KbHNHDXFze",
  "key39": "2KJrBi1NgZQ26NyHNZTrWggBFWmSbsJtYBKjoyCXy6hGM6Fv8ZMa3dtvjjd6dqDYPs9UgoZtoNzZHYxAqi8DZbDS",
  "key40": "5vkQ9qyLvBwmiDRttf5U4dQ1cT6JDRTXNXafmrpaNzkzP33We2d8qTQ5VT2yzbzfjvpyRT1G3PzTZPPXoPSw1DBP",
  "key41": "67k6bim6iLAtYLE3jh4BYuLnTmKz6Wn6JDDCpJ6wdPNZ9iCAHfXp3fDKWH9Pbb58hyF8TgPfZJSPGEMdzZBpu4SA",
  "key42": "35hMHuhNdBAocB41JcMneLnv3duuwpUZfiRrfivzU2US2NSzzfvHYwNBFezmgfvmoiodUqEcoLNaJ8w5m92BX5TV",
  "key43": "9G7NuGyY6SBZQf6SQg9oY2i4HvFf8gypNKgP8BEzmGkbhN1VMHArWiMwnpVCxf9zDiySaa4T9aQWnHt8fUHoe6h"
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
