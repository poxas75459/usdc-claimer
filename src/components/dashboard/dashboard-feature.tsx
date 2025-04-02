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
    "59ZFZMJug9CxYwB91UeCTDXjs83GdUZVDxXyc5eJ6UDX2ffimg6h9qR7mefqksx1wftg4yEyFgjndX2Nbd73VBAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNd3iaGtyKadhFeAcfe9ZR3iubEdAbFF2MKtSFMmupGz4c2LrpVZmLEDb7DpnM2rWTaEJqGUQPM6g255WeAyGru",
  "key1": "4BgM9uxhx6ETFxUGrFPN65UCNYt5rN1mmaYSUhV9GPWfcrRh84EQ8qcoXgMZx5WEiidgSorjwsvYVowqkUC7Q8fP",
  "key2": "dVEH9ftp6oKSPW8ifMBVV7bKqqKp1unjEuqcU5sUwDWyq9iDoG7tsXcysi1WcHvCBJ3gzZCazFWPeGkKQvn1tCU",
  "key3": "4kaeaHiuDif6qDf82nRU4iiUwXN31miLhXkDcWmNsuCGYRWdoAnR8m6LZ5ALUHA7z4zLqkPeQzsfB9xrEyKeFqmL",
  "key4": "32CshhxndpPa1Bed2vVPpvz7bEJGVB2Tcvhe2SQCWcQ4S57hUN3pz5Q8pSDYdEvMNn8cqbHv8T2BArzGfvJXzw7m",
  "key5": "76XdspmbUwfe1dECiJFuHKpvb3f7KXKwFBRn6nyDV3TBieXtFYUK8UnvGs2P84hwUVehMJaiuqZ6oei2jaNCExZ",
  "key6": "5hdpZbpx2LbxBQMBWYfyCaKGqeBMnUDxJugdbjSdxiAU4tRHnVzQZeSGaJfiPJPyK92QQuJPMMcTBYnvfykJfbfW",
  "key7": "pvUzjzCavxQ53PYmtzfN4fvrxEHbw1ZCip4ZZVQ8CDxw8EUZiV3aWeUTCwwcU3z1AhuZe1T9N4SCsp9mf8HLo99",
  "key8": "35zR31ZydaGy4Qm1i8nweAmRaHXmKpHeyvPrsjU8cTUZBHNZCLhNggZZ7gTyZ6ka8BeNB8irPWoBQVmQnZnkR5ZF",
  "key9": "4oF6LJbo1bbXakgSiWfnUeF5LX8ANfoLkgWuGLsSptRMtnDzTzys6goPtkHFrEeAuxxDJfn8M7N52tDJqDYhUubQ",
  "key10": "3wqNEDzp4EFa7KFnRgyNqgD5RdAZRgrau4ZQKUfQYDEuQ6wP4tYkMBuyWUuxG1i32qVH5YdiaTC2fYgn2VUk2qyJ",
  "key11": "62nngp3qUjqGDg1WUGN8aHLL6epD4Gu8YoG4avwGDEQGJnxcwc5f4bG4RLVvTX62oguWdrP3BWWfuVXae3NLBbRw",
  "key12": "3tDSrTedPpnBNiJcujJdDDnse89XBH4RpUPPLNjWuWqq9L6LXw6t2dKo9fwmbCR41QsJcZgFh7F9zwCDfqtzvbTp",
  "key13": "3wKNVkWT8wRffAjLSmFnQTWRmrWY9M5Nag8qPRrjPPqimJHiyCWvbBYbMNjH9XZMAnwDRmxWjNaYCZZeH3mjdV9R",
  "key14": "38SMrAyxSFYQruKnHHJinu6WTA76pLfherTQDYqNf1Fob6zhJvPhAYr8D7ipqBscXKVgkNiGqbKNMdUHvpjTDawq",
  "key15": "2gjzPEc2Y4MG4rQVs1ufk2ZwUrLXGsezcTxs6Ha4wXtSTtaa9u8r3jaTdVVqwVRNqGGZRFU6ggFbxe46KMGmSKD",
  "key16": "4HQV261hxbm68hJS7EpCgPGhLe2rWoYre5oTVVq3U7PPLRuasH9VUnLpkgLW853hmTkfEmAMip3CN75GeM8RSY5g",
  "key17": "8F9PV5ArLrDueMdsbrsvj23xReJ9371C6DEFnMWZHp1EQogwpaTdiQs6GGaP1t1E7GG7J3VKTdFeSmi77i9Ehkk",
  "key18": "eNh3x4N6LejvB4BsGuM4pLTQr7qn2aq1TPmenNX1vNMFenj8ez7ErXXSWVRK6VTBfd23pG7DrN7dhribDfLoFnj",
  "key19": "5DnZLaeu2oCpSaPsfTio4m8NekVe4n2NiRM4Azu9ctPX6uq1Bg5ADBKHoGVFFux3gGuLhMzQUfsCqtss1c98EhuL",
  "key20": "4fABftHygezn5k4DeE1Kgt6YdKxzjeJgCmb4WcJR9U74hLvzsVG1aTfNP1zeiXBV1BjXLpjcjx1GEEUSwZfNVziL",
  "key21": "3o41oTjHsPXrM71AwLk8fBXUE5wWz4ygsKz4QAWrsYEDKtKfyoS5a6mQWAzySKrAfvuG4bX7QC6e631vrPTjA9D9",
  "key22": "3jVHfwjtjmaKGSeenT6mmJdBK5Ds56jX9AhpRJV2PDLJKLCrMWt2Qnv2dGuzZUgACU8DNwpwGadzvsbZcGaNrQ2T",
  "key23": "2QU8RMrfGQMYLbyGdAyuz2NydJSpYwx2pG8Jc3dUnsNUzYVkt7nFZnrCgjbPafh3qvtTU9TJzbg68LvHMdVKBubq",
  "key24": "3LLzXDVi5b9KkffRDn31Q9AA9rXEB8A9rWpkXc3WFsTVpvUYV1zUdMhRq5itjN4vSwrxiAC6uudREy5RtHD1qNUx",
  "key25": "4Zcca4VTmwqnUoG2f3ZoSbWKbk6s1DwrDANKKhbgPTKZVTu9DDJeLBMiubggRJcVdMxV9daAiqSnRMshfcJ5yyFv",
  "key26": "2qk51ksePdDqe3VE6r5LD2qeAwPvP3FKeVYokFCQA28y4YiKhGVKWzU5HjnZxRdRgYAgXZV5jEkeGfWMLZjJExSm",
  "key27": "56DBJGj7ELSg6TSxAWYR2FKnappkYuyTBTxtQg6LKpFgbrfUcJPgF5gDyRUCH6BJH5YYB6gfFRCjqjhPXCLkJ1oW",
  "key28": "2UdktYgnpY9UGVi5SkqeCknG5o7rhXxHJvrH8HdZYaiKQ2mVRxsZHZrFfU7A8zMDkurd3i9hbuTMceyGW9Sa1XcX",
  "key29": "8DMTZgKoV87g2dSydaid4N1Q3KDrX1CoFSDMbypab47W2Jyo9yycabGjyfbBjWZLga8AnC6TTvjTHaP5BRGp6d2",
  "key30": "24Gr9QMBE6Ndin5pamnyWmH6ESzDMwdpyzKmMgTHvcrKUSfbBKPAxf5M5BAi4KWVPfRe9frMhLgbDpNjGsg3EgZK",
  "key31": "2mu5CFpYLNe88ssQnAW9fpduy4nWtVm66MKBv66Hge3VwGg7Zkp7v1wm43xj1Qafe5KhXjf5GT28eGgaYGsXXMNQ",
  "key32": "2Uq3gTMLRwktXKTGLnEUPxENEcU7ySwk6qLDfL35tUoRF2zcFoJHmCakomjpRk5HLZ2Sjdqgo8sXfnDHsLuTC6aV",
  "key33": "pFa3cjBcjE5dnGACx8CZRRvYSQQrMZmNckM85khggdpeN7JPbFSdohN73Ry6a2fVbmbcnvVGbrcSgz8YKJKa718",
  "key34": "2mH7Pms2pYJAiPHe46JvMrAFvoYEuEN2pYS9zrTjYk9KpvmfqEarUTSDvfGVYo11E2tTdTqkxBcoxktxthrbaTt3",
  "key35": "Rs9rKEJ3tizc6rimbPL3CGFZoEGutziFVhjpjCuEdiznz378CKUJX6UCtwHeujDNnDmyhcDma98iozKV36Yqmpp",
  "key36": "4aHn4W8cdWJwY58ZZoA3mwk42ddigKuBrPdwNQCgrZmuipNbvJ13WNYNEMYiHcSK1CAaqFEX5kWkXZ5zi33TARZr",
  "key37": "4xChwRtu6wif6LpjKLgr9SG85bvoscAXEWAQ2BVxBZuCZRjgyQaHT4vDT3xhbPfUm9bqzW88HSb3WgVKMgrMDUcB",
  "key38": "2uvxM2Vg69zQvyMN1tmMs2GECqkbu3C3BRi6KArcBJetJQ5ux1YUNaJfvLvt1au5UN3YYNeAiRWSEAFBsvinn1hW",
  "key39": "4fi1nKifp4V3Mj8mXkRYpd6PcwvbU7f39gX1ok8gwVrvNv45YSB33repeLTQp4LFr141KSZsd5FT5Azh9mcNUXp5",
  "key40": "2bqirJw55wUWLLiPLkAPQz92epJkBygz11wkJnd7R8E3M9DmgxDZvM3GqvHcUQFw1GmP72TEH1AmDs6u8TVbWkce"
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
