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
    "4g1BFB69R7ru8iUaZ4BiXzVeaB6t85jtbwX9mK4em4uMzQcfer6yeR5w7sV96hryH6JNFQzM9HaUv6WADoXr7Y3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4HRPxB9GfHXsKoVr1XsUs7DL79o6hAfQqh6KCDstQ6ukennAbtPuTdNit4ed7igUiN5njGDcT2LHeZjQtdAB5K",
  "key1": "2v5FtAmRXiJZ9EsaJ5j1rXTVR55arHMikJxSSUioGcrbNdNWzKzsuexqfrsmG6vB4KSAiCBxEBrkwhGqpbGVzjA2",
  "key2": "2xj8uZ7dPVtMavjQJgS2oXjTWJVwh8B63S52RJd5P8bqt9WkLMgcHptrnv7XY8Jvbs68voQNqQCAfoyF77umSmGT",
  "key3": "5SX7vkCr6T6dWfqsoaXsAgMmXjJfuFxjnX9nbm5pnFyvBwbshWz8NwN97E2nifBjccMZXhHuHjxMTNNztTBynxfa",
  "key4": "3hhWMVdfBc7vPEMpGQaGn8ovSfQpe1JVaRHeM6ZU6QnR94AfDite67fkYMSs75B6NNaLtSxujZ7rJPXELrhzAtzu",
  "key5": "4nRpJoDqKqMo3hngSRLaWuLBZr4BqKxTjSpJQaPEhCqnd86pnMGL6vybcAzVUU2FrEw9ZhYiZZRJAjCRbrRYaGtn",
  "key6": "4iWsvhrUzzwwQ542upeHPXqUswmDjnDrLXQtfhB6D86vhB2i4YL6YLwnsXqGqc9zN9kPukoFhdPLz84QkPRgpfur",
  "key7": "48rgS83X5pgaPKXsjiQHuUMhd9kL5rQz488G8nXuaEAMreisJYeKqcZkAfkGaZr1MB2fYaab785gPqv5qJDpEJfV",
  "key8": "3QNa7PFwrFT8akM2P37jW87YMAorqz4NGkvbZitENaPubBUQ4EDHxAk8hbahZPuMEWhKHk9wnTUMqUCwDJV6g8gJ",
  "key9": "3aruo8Xv2USoxNwyV4X5142nbfLjSi3aYKzSZLT2upcTBxAVrLJLeNHhyVHKX7pQt3VjamYfqLuxzRfKDXGNYJ2H",
  "key10": "5fWdjHvHFmg8hsbu6P7MuF11BLcpArP2nZo12oHvT18DNGpUojfmuTcwkvPv9HeSoUdYVsR34q6c4gxdPaFYPKNy",
  "key11": "2A8qXUF4V76Shw61TdbxCwAgvytiwp94An3xoFy5pPv44Tm9BFPFoH3RYcw8PfBYdTjQ4CmzDGqevocCvSCR27Mv",
  "key12": "2pMyZ1671iQBKJNjapJ3D3KzxA2nCTazPgwMihnodamVcEY3AN1dGbGBsK687997SS8hDf1msikCAChq9VvskQ9",
  "key13": "2s7ftyJNpt7abDdr9akz69fU5Uv51BeKcnSFHFG6o8ZCJEJkRNCxks8ThwdMx6sN5thBSEX1AXoiHiNyE7bgVh8x",
  "key14": "26LAbqQDRrTFtt3pohuQTawNK2vYXswxNKrd7UQut6UBw1SEfMaYcis7rW78iiXGyTLtPFuiCtBLBT1vosTz5yy1",
  "key15": "5ax9VrTMD62EYjiwTQT2k5FZsEQGrbmNwKxQb1pR4WhnikMdzJn3UKaceKpEdyuEg9UArtceRJbMoYgK3oWDUagQ",
  "key16": "5UCJwHDeyC26Ph8jQeh8myjs8GJaMoPxi9eL2dAbuHYSZq1RNPiYuS1dHa6Nk2pVPN1NLBEgV6PymV1xrTwD9pi8",
  "key17": "2HDGYuBrTZeLPhW7qm3xP3jodBYvrWzxL81pJyrZywYW8CGLREfJJJFSTge7snT4qAXU6b46QPDvUtF1vougVDu6",
  "key18": "GoLtbLaGBwxsVqWCnF23iH3wACVgKpK6HR3fw1tyZqaZq2PDvunaD3uZ6VAgpirczCSpedbHw3vYoYMapQ4zdDX",
  "key19": "3dxVkBoV8U5S8uQDSfSWT9xCQ5c7mPvqS8KcNwu9KehJBDYVYv4Paif1KmzMA7KaAuzTMuUakEq4Qv5Mr24Ri7uE",
  "key20": "3KMv5g9LUkL4qU4EgxPdJm89wktiCpbcdc2NzWk3jodxW3mhRawsbsUATBv6vDsxrZ5f4RA6x5a2Z3sUcdYgyyR6",
  "key21": "64QPRwfxCA6Ss7FeCLpFoUNckQ3zzfNsP9UCsf4L4U7KzQcmkfELZnZCDMgbn5117GS81PBVKtUYgD2bviT4wx1",
  "key22": "3ApfwdGpqUumA3UtY4zWvoXxUpwJEUuxibR9SnQaEYwBUwzAtvR6CtTYTQxbzguhwqReeYM8kz1W5HsUgwKEmMa9",
  "key23": "2DfdDH326K4K64JbAZg4UX8Xa6x4tMv6xvsP7AwJx3zdh58i2RTShdjy8ucPv8cDEjzf2j98X6hhixHWuDmixzPE",
  "key24": "5J8SU3cyHeZwbNrrdtrdL5jTpcXEUi6e3G1uydMP6HeiaAJuZ6NB9uRmB6RXMP38qs2XRfteshnL6mc1AwTwxGpT",
  "key25": "5VsaCSrJhGs91JMcE34u4HyXgT1JQoBnUNcX6UfPPQqafbihXXXavDQFtP6Qd34G8pPjvpLWdHScLD2DcBTTck6B",
  "key26": "3Dfti7ngQdZ46uYNM4Q9Zgyfj9FPyc7TraL1KeGdL1JfRx3TJ81GckCcDbpjapVsii85ENj6mmY2Mh3aH34aH3Y5",
  "key27": "4Ft3821oKJKf7peXDDTwJGaxfLaNhq7BrawM23NSP7z7UCG7FosC5r6jQVnd8HnuV1HFrFzNpJSZUM5MzQHudrNv",
  "key28": "4NUHBq4ntd8Zmq8P3cSFsum2vnSr5VTVCQxBzdef7penmnw2Y5kkVjXjq3tYjnheq1EMzmnBE69Z17EgJQYFMrSR",
  "key29": "2Vp55yi2YRqPga8ng6EqwGLnRRz7dBnMcMnDYX534oytEWDjpiydat2bmt4JUuHigEEMQ9JtHgyAAGJHEAL77gYg",
  "key30": "QDEeR618JpXQL3cNHzrCGr5xn2JnCwpNneA9Sg5u3LB264e7fHFR7pUVCkM9WkTqEGts5BDThCXm5HSqCehu1kX",
  "key31": "2g4CWa8qgYyWbEc74LGrwnX1XkUpqaei1jEF2FCobf6fgRiMNHsG1BBFaS1dHawRNLDofhQ9HUsqV9MQjwQ2TJxG",
  "key32": "64AiYcCSHGs7ymnTuGVGF4c74Srjw7bAPUbFx961tRU4mUryRQv6csCA92sSKsG9V2zjk2hmPmTJ9oTLFzy8u8CU",
  "key33": "5QY1pJFVfMzywhxKiMPXn4E6VhJxer3zuke2RuXwoVrHL2hrkjBYbDgXgVMNfAPizyDBTTRKe6RRuN2Gcg2wG2kk",
  "key34": "4F4BzopHCb9M3cEgnVNF4tTL7ge2sjmXP1VkhNJ8tg7Qq14KCfUv6U8F6Wjjcs8jnJeLCxYJJr6RVfhsHW1ETCNP",
  "key35": "4j9qqh5pzKbBDqTFJmNqz8ubL7iRLwUACe547tqkwpFnQ948irjFPR3JC9sA59DawtJ3YoVfZTATYtFwJsCpNzKj",
  "key36": "3svBwXbwn7VBWj3SfVfbpCy8ENKwY8iu34HQ6o8LGzDUz8dtyKRfg2Nc2re11XtZ27KtoCCE8w6oumYJL7rSucZN",
  "key37": "EGybgSwwk2pR11waEFtjmF4U15Ji6ysj82JyF3y8aR1nd75MfkHZDDgqFRnmuQK6VB9Uno8bpsDZkMDZksKdDt2",
  "key38": "2BkvehBUadUAAqic9EMfb6NySrHvaUbbSPjQVVtp6sb8LwQ68GPTASnRYvCB493uKNCJxbi7gCqa54EbDvfjnfXa",
  "key39": "4JZdm5LiF6X77uRQv5STeyMjWKrtXzsoSiiozzuhQhCJv3aowXgKxigqNyFP84NmmRdZEP4LWKfkgtQ5CZShuc1Y",
  "key40": "4pjWnmkF18tuGbSapd2gEsTrcoXyH8EzprcFZCQKWsg5YLTHDWKtq7gh4ZU334X3v239eVq3egJ6k28MytagV65V",
  "key41": "5jpRcp74vpH5pZzAWHJunBXswkurjLrAfnJiuQL2uJ7Msj4aswpSTNBWPTTPNhSyL3o44Mjmsw2eJ5RsL3u9AuF5",
  "key42": "2NinugnwRaURktHEA4Gquo1RASgQmpTSZ4kaZrFVpYmfx5HqzFkjHgas4jPXtuiYKMJS2hUf5GKZnWbyNix2jqDZ",
  "key43": "3GnoYBgf1SouAF1udXnpSWvCmwvbAdnQBnGPtfwhfG1Zwro82efCW1wjoed889nC7ok5MmzMwwJJxZEL9Y9cpNBt",
  "key44": "51WXLSGcr3ixYA1m1K1r3byJa2LJXmWq9sDBqPSdVnfZTTXDSrBN9J7g5aYps1atFMaEVMztLvpCuHiSpmHuqwK1",
  "key45": "2DwFbCh79TKgrcxVRXWCbA1vpwVbSNFomwai8b45ijfz7jpuJZR8MP65aoevWzgttKAyxUn4RWpM7xcQ5cVCB8qu",
  "key46": "2nHJDidHKasm2ZeE5bwf6zPnuWBpjFe8bV9KmUsW1VMoMZ8REZ8H1EmCnSGpkckxmeHVB7JvdrsQe2mZoHmxnerZ",
  "key47": "5S22ZNddWiXQDHtsoAdBd81PMqC8vdZLAdgrPicvp1bkREkwm3i3y93qPnYw8gTDmctAm9nfL5iUDo5d72Pk1bvQ",
  "key48": "3qEFgUQoiM2G39kMh14vKiZPAUJ7PUYEjPAwx8oaJyD5q6uz1kyeRJipUXqpduybEPmzvNpgC9qsuEtYKGzmy6VV"
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
