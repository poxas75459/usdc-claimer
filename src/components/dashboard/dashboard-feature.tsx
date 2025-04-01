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
    "Yd5CeYYW5YH1XzoMzdihXDhXXjUdzviaVXF4e2K8eqTSPf6UV5vrjvpz4Fh6ANnRnymU7Bd1ixeeu76KqtbowUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFwnusLdk22o4nMYeve8BfHS5fRKFMqez5L8Nvbg1zbzSZSNACRz4yymG35Ms4GDNtzRKZ3tKQQXqkFrat1w5iN",
  "key1": "5C2GBVmdxsMZjekfgjGwhfH9gcF48UGuBNqkcxjbXTYEdbEG9b3y2jnRbazA7cGm1PrkHWBs4dRdvj8yqgdSwHoS",
  "key2": "2cZBuPzhMLps9gS4Gwv64Hsno3t5HgFnsHGLdFcKcqUE7hH72HvY4VvTCTris8GaMRxR431ZnpToboPWtYWeWZkz",
  "key3": "5P2L8EBaeTZUYq2X9ndtMn1RSiAsPn7648gCMBPTM21zbtcCWvm3qG3dujonp8Zg8VV55emG13SNtR8xQXpYV11P",
  "key4": "3NCSdaMom7YyLVPkMTxNPN41E442ynPmXU42rmpknD56tRSNpohWrsurSXiYj2mSHiZThm9wx4jZMuRkF8oy88xE",
  "key5": "48S65vkm1JbgnAFswdh9vQmFgtzSb3ypeWBd4pJJ1FyVKcrY4R5FLs9H2qbvndAGTqG4fqB9xt7evfhEcnMRTUBa",
  "key6": "4KgCucUradwwtx58tkvwPJ4w5xsJyXSPGyhb13dsqLa26v66F7VrqncRgoqDAUQ2Pr7TcrcWYxHBcgQkrR6ZULsd",
  "key7": "24xEbuJGw9A82mntnE5TQaGmYaWmomkCAzQmrZ8nYEwuux2Kd2XQ4JdWxuGQGJZGAgeCt8zVxFmgweu5DgqTANnz",
  "key8": "2oSj1mfZLL1hVF2Wb3jnNkxiwC8zZETX39a2okH88B4CyKbSmnNkhdkDbykxFBX4W9PcRRqt7ES5hHGCctGxQvmh",
  "key9": "63por43KkwCa64nRbBaXmaiR3eBcUQf3pwHH46DUWAQCMJFHdphD4VDZeNscyHrVciHaE1eTukRwhmB3mgKxBA4G",
  "key10": "2SsTSv43bSE8HpqCdAagDFxsyQ7MxrHQv7hArwj785jTQurgZg6EbzoUiz7SAhcUAoQemKzqjHxPvBuouUpyJse1",
  "key11": "398h4SU7vEdhhw4FrJApP3kH3MMSBy6jo59bNkb8d8C1toE2LDstDHGMwENKVDSa1TDQ7EXFxL1jaLss9o8THbrg",
  "key12": "2ca7XuB7BNUxHvxLpuqQCgp4WYmyMRBgWPdPpBWUED6DqiLGaN2ELP1oeMg9yp5QQHoKoHKe2ZbXPDB9FQhV9trA",
  "key13": "4aLRabE7hoJSNv55e4mkR3YHNCtrMb9LzC6zBn4vGnGqGAq9LqKnDaXB8qvCyu29RV4x8LbVQAWzMeKBr9GmSA26",
  "key14": "2zpLFE9q8nQjjid7ZtfkwZBzAaBvcRmWQGjQqSLewDskUggBktqPR1AUJJ9tvnDUSFuVR8rkbU513qiGHMoxiVzD",
  "key15": "gaBgXEAKeYDrEnd6iT3vzv6iH3eUs8zhyGpZ5ceMNhPr73pogktfxyjGfh6PWx7hetz5W98Hw6xg3i3bwP1S9NT",
  "key16": "2quqbpGif8ECHV2sqT5CYgjR6JE17MzhW5QV76ohqAgaT2uYPyGZSutRPU9HPDkr5yvrhHxFkGj3JD8xjYS8Kdj4",
  "key17": "5Vcm11EQMyzr1Vr5fxDu4F3PsoUMuALUGydQNZn5GfoKwuiS95mx7ZNjviqY72AuE1Q5XNiWWrBqMk6b8RYNk78v",
  "key18": "vzYsaRqeFAfP5zFvre5ZAeuyBgj7BFM5Wfn7LrxQaZ8rbj4SgzNVpQkTHuHL62UykPsG3mZoMgrrJv1y8vuqsJj",
  "key19": "5UavfbF6XGQek97LLjypPLjBVyTws7wWVTYK77aF8JNKHJhPB3V2oNPuKAdpepudjrcmAfsgHZVBxCGiesP9pqry",
  "key20": "5dtSpehC8Jjssn8fkiy1RkknHjtPVbYGkD6iD6mYWUxtZogzLqTRW4jfoaCXQvtTny1Ek1iMdJ8ioU7crmC7bfqe",
  "key21": "26Gxk6PdyXWP9KFA3mkPNDwTeeEqXKN5b3QeUSSPww9hdsYmsUBUuQzfmVyyN9uNR6m19VHNYFrTsRd2euzKtUxN",
  "key22": "3ez3fNJ7QZYGsQMkgVUPwdP7razb88o9jEKHu36DopU8d8sTYRFxiM1h8vk2MubAXF9kE5T89bn1PMaG9rz5UdXv",
  "key23": "647bUVTtECJMfWki1BGUXp6FpXh2syv3gX8eLmDNGxbW64dgpWagRwF2ehSJkntsfzSjwHsMCsgYUpAFFPWoM8kS",
  "key24": "5whwaFhbTqnzhdjwiHcehMfDKQ3YbzseVgkZk7RULUSUFGs91ULzVXiDz35dY1fv25ZWKcneXLvPJ6u4kvQvbMTS",
  "key25": "hVvDBzsNGGwUpdNLEVXwbbb1tfyhe6ngpeRLeS1sbgk83CSRnNkYAwvh88Ghgn3pPBzDoDW2zrnoYwHBBmgTZd8",
  "key26": "4bWy9runYizGA9EsYWxQWmbK3qagSowGfJhzSsuFgcgG8QpaXgwJRaJtCJ67xwQEMJ372C8mSG3A6R2GEQoLJdrQ",
  "key27": "daFf2BvaVTCUgFcbkqwDzkFhEbmZvGDjfEH2Neyb5G7LGTFBbKtE8iihKvA5YS35edRb8Vz3Bi7bgMybNWcsvm9",
  "key28": "3eY9ZKLT9roCyuPTCe2fS48cmRKvJiGoYTyzSYq25X68BXd6ieFrrJDVnKi2Nw9RV9hcVrfHhB8ZCx8SPauoJ69G",
  "key29": "HxZERsTMaPM4a9bD52Wec1kJHjRqqSCME4i1Zh7PU1jAZYmDQEhe86b72DQisLpN1GiQBifyCHSuqjwdgQbA1A2",
  "key30": "4ZGbG4M4J9AYZdbQn1GXY4LDZUg48vXHT3CHu3AdmeZQCN4NGuMbtWqku4erTGvhhjqFPsBYru2BZEqqPnJNxi7a"
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
