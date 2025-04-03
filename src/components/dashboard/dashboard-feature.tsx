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
    "Bvc1FWydDTNYcj43JwuXgQnjACX9rff9Z4CHB2YbZ8sQZchYvWDMr5U22a1QsVvaj28rt6iV3PwciLyMNCm38rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47txGM8HumzJkSmBrhWkteQ6ctiURRo4ouE3jzzVVeTUd76mYVxkN11vw8R8ZppENkDWxtE2Cjih3DWRZaJBokfQ",
  "key1": "ijFYwNCRo5Yvn9fD355qrE8aFbv28wdeCfA317DNN7Di4evmc1dikutQn4gzyafy3jwmKdZcekU7RDhcof1m7i1",
  "key2": "fH8uRbikfxqcKZC5g2zj7ePALL1NhNQp8c29miRjgCwbbjqDnyqeTNo5nHZqr5JoxtboDGpEHq9rCRY3cTENm1s",
  "key3": "jnCdjwoZetZeeFatfKNLz4dQFrf8a7mrix8cFm8jnQxFgL8F8xVHeZAjP6pD53ttxdkPEURiUeAg52Rng1uFuvK",
  "key4": "5vTzNCsrLCweQk94qaE3Z2pqvijXUHc38C58B81sGzb8yeF9WeasVy2SBr2eninTwDDZFfJVUcb4PJWBQ4qQKWp4",
  "key5": "2Xi3F4ATaLm5haGVbTPhjFNB14e1u7ovX5A23TkH1SscEy7wVnxCd54pggbvVEqakxVirheQiy6oP54fT1WkXavr",
  "key6": "WaGZBfAbumqPz1fu5obMXkYdgiY5FAWXYXkkNps3sZ5DccQLgPGTgUxZkEb7zGhWB2251MpyNMNMbELMi7krbVN",
  "key7": "4UxwQdbREN9MoEDweEYhZmxgKegf9Dx9mNzbp3hi1H6ZpWHHV6ZqDjMxhWZvBBfxWSR7JyuokCjoAbk72YXREoaW",
  "key8": "4sttwRFLkfUJpnv7TFLqNe4FxrVdg2ruxinFZxXm9NH873FNkDH3yg8JPaJVEfJmpTgD4BymKAafhGxru4yUHWCG",
  "key9": "GidaTvnwv3evJ1N5rs56N8H2qVz6erFyJ3VXfhMFHmRSNXKFcnU9zZsr8RiiTBrL3aC2GPYJzdjozqrsSKYwsk9",
  "key10": "2jXetBGwXrNeRkojauq9iUnKffcESSUkaXthE5mriNNoPpqWAkgDsVgntHfF1ua7iuCqMdxwdQWMfzh4cdR5fF5W",
  "key11": "VUowouF228eyaaCUpSnegXAuHjBLVC7MLrb56TnQsuVL4sQnrbu8wzHX35HKQmp9Cy3YfpHFhVRCGLZwT75nF45",
  "key12": "2a8SM8ZtTLRBsJQSNCQrpKrB9em8qceR8PHMJhvgpNQpaMCgMXa3xpKXg1B5wo7WuKxPGcEu2zfaeAkjuzuGL4r",
  "key13": "3ULfUAYccKwyfNDZfsWshPvLz6bNZjZagoajej5CLgBRcBxxYkfZ7ViJXVeA2onxyNED2zjyC8bEQj3pbEoTA5tc",
  "key14": "5D6Zy5V2qR7QvFijR7Kiq6CrWHqEUgqawyrbABeE8soV9hLPdKYQupkKTbWiiAWC1KiHijRnnv2gERcxiqNiGTjG",
  "key15": "2cg2vyJ5F7pwntzHapz878uHR5VVwaiREXeH6uBdQYtfV2NUD6xewpubvEi9vpWDB5deqVPkvfJZDQNMXxQSt4jw",
  "key16": "4GddW6Xen7cqeQqPySZyQXMNdaKv9Pg8racLvDitr4GThJqunPwpu82tz1JgueTovLfzbMgQ4cNUr92coAxCPsSS",
  "key17": "4EVCFB2iGbSs8dDZm87pzsygyVZrcfri4dArvXqPiHjduFaGPZ5Q7G3dA4njyqrCsNYAKbYd2H5DwYavXgPSefX3",
  "key18": "5kjNJecwybGnmhTbUDSRH5wmn6ioiht9cUceoaPmNBuZKYKrHGb166YaCTDwtxgRvcDcLWCQjwP5MkSGmmL4T71m",
  "key19": "6Jz8vmePX4vccwTzNBaZegdk7mxi1sMTGR9D7MWiYpay7dydEEJZZdk93XZ6PRxkz2wpvg36zHyaJpTabHdcQti",
  "key20": "vAmxcHSQQ8aqi3MQoHWywfLztYvMMn6zqm1AhTokCGw4NYt4BPnTSt1Zwv5rQe3W4HRevuwpzwwhmNPxJYFJaz7",
  "key21": "58sxdmmzbEFwaFdN8ZUU1mefnxoCxwAVwx9saDnvJ7N2QDcCWaPWSioWunTdmwWmEmPKk4dPG4xJzAqLW74gvrcD",
  "key22": "5ChFf14dUNVGEAy4PkkbkSFV7MNpMAN6AfEDbSxwjLoaKSf6HeCB2SJcfvpMEpjXRRSqY224A9A8zjFFJ1zsRcAT",
  "key23": "RxjW6XMzsBUi2A6em2ANnL2DMr5JkPX8E5AXatzhoh1x6rLQw2kC5TMJhpQUoAFgtKDsGuBXmt6BuUn6tbaHeDA",
  "key24": "3ndziaGnzjDXNo8besedK9Uxo9ZGKCaRdijjuLp1NtkSoGfx5ZXP9BotHSWHJZ9SSUJdN8bDFhYuvKwsuNVxpQZN",
  "key25": "4gLh3akWLPEreUu6nEQK64kM7uJVQQuAcb8F8WdUgugM86etQp8fSZfXDV4BrNRXK5SVaeKTbkzRW4mNRbkkwWFT",
  "key26": "53aQwio6NEAPEvhZAcWNUczg9HPDAPyHCg1bdzNeuLFwRYtev2tiNbLS229QJox8XgR9LKVM8WPB6cHH5DEWbWDk",
  "key27": "5zPcA9LzFA9edDUB2inX2HrLHdDPGRi45AJd3wxZTQXpuNX1E1JGTj2gCXQy2LJJgw6FW7n5vQho8ksctkCibTaR",
  "key28": "59Z8Mw1c1gtV31Xd9Phj4MDQWzpda9Zqk3de73sKqaRPjYLsHPfsEvd86GhYFEk3XarFMEWoBojCRsWX59C5oT1c",
  "key29": "XnbG4aphZPr2Jj2JjF6zZrdkjPrgvE2uuMCWr6GqDnRRXRsUjTNpu7wGtg4tGSqEw4S36jn4RKcbc5wt1LDhVzz",
  "key30": "HPchEJUT1c2v5MJby6A7dLBMqYbFNXV27r7uk16TYrk4STkJZ13ghVZPwXCb8Mrxf5zoudYxb7Hc8kocNRbF6hi",
  "key31": "3ARwn4Mx6u5HkDfZsiYEXnCxsaTtXcZyJsx4f9FWJ4ryPBu5CurtTJJRtKAMta55Mh3eN74RPc564SmQ1qDi7Yri",
  "key32": "5QXLLTUPoApJHSJxMPjK2uSifs9WNQbLoTeq4QmzFxkqcY8dr4DrTcfNB1JsUyjdvATQqkYFAWiByLUGUX9NCTHX",
  "key33": "U1YdaznCejtoAFbgSxJtGroCpaDb6G7JXdXoGwtQahiR1mEtFyHeoodBTFK5cLZF4obBw1Y3kFWv55YGAxpdRKu",
  "key34": "4PP6pojgwQ1H4ArpbVFNH3VZSRPDKCpYU4SXfcLNR2pdT62iEfeZbw6VMbthafbQJ4oDKo4m66uKKMuEN9VJNs6c",
  "key35": "3cmQ6ffd1RvxQG18PrsjXRnpuHXm7zE73hE41VjUmQFv7228tWGPFFkgyK8zFRU7awmSiVYGfrftWJwfeMyagTGu",
  "key36": "5L6Sn91mSWNAL6H52nB9RAvzMfoW7FqTAMfSxpPvuZKjwuCu7ct8QTopzFoahDQAENwEodvs2XpD9etFkFNDzbXC",
  "key37": "3TdH5dPygVGyFWnutssxUoa1xzD6QuBTKM2uCspnf3a6MU5UXdgvJDApAowhVKcYQeffds3yxFax4epJ9SkQCZi3",
  "key38": "2TZYgxBeaVFBAQzk4hZNKF79uKYkoFx1WVDPfXvcY3qyMFaMHpyJLHV6V67FiT1Ci3GojwVretiaUkK7aDTaVzG7",
  "key39": "2tM1yQFTazgrE744eLWqJVGqV1yZjvDcwzURpYC9jeouMsL8NAiYXSpLXAF1gRb7Z4rnuNbzpsxpWTRNb1R4ofdZ",
  "key40": "3SawR9dPetpfJRYoBw5mtP9jeD9ePYn74m7vH8QSLUqqmARiRGUvD2h51RB5RS5a8gQCvUNpTfB65v5VsY5xH3Fz",
  "key41": "zJVFJSYY7xYczQaTBLaNKU8JPvFmZPFcwQ4HMKbn2QZk54cJ9MM4LitXvTij1CNYku2PgoenReWNTLN2d16WcVB",
  "key42": "4j2Di8qPRgpesYxeVzTXgKi1PXPiVgzzQGVCcp1JPtDGWjTWmXS6iZmFdQi4HFS5pEbG9musHHoH2b9o5cme63Z7",
  "key43": "3BAnZSndnSYXbpSVP5eze6nangqFimyU5xQ5AjWsMnoDm2otLgHN13vmxQEQiMDVkjrnjorW3h43zCazoukNtdnb",
  "key44": "2X2EX5sNKSCdmARaE2SdxYCqrQfHWvfUgoFzdjg8BoY5KQCVCmFTgHWyBmotmt5cWJ5bAFusS4nYCSgkDz8CaBpf",
  "key45": "mt1mWkjgVBgMphngN8BCFUjQ7EzfZ9tzV567ShDhSvw6Zq4oAjqERda5fHSCpDf1JZRJT5cJ5bLKvJr8cNVomhG",
  "key46": "3rwBJEwEgrasT25fNTBCFZDWiJHQAuSM3dDUJbyBQ1MXMnxXSAP1yrcmktTQF8qKMkymhkpn5QmB1oVt78HQuysr",
  "key47": "4jqwFvsf6abQsNsD2nGTF15as3FzZeEk1wWjTKaTx4AgSMCWKPCY757bVDQwLDo7HrxmA7tpZd3Y9DEhrPYfQk9N"
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
