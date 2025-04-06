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
    "5oTxknjV72DiLfpMox4KYx7Ghz4qR9L1naGChS9ZxGkTqT59bGE7wTizmuWhEg9M4NukBz64ZgzeY9A1VuwbU2mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1eXAQMVBabphvSf5brmQj2HAakXPet6ZcdGLyvRB7V7SkJHzGA8e9Ervrdpw4jRtp5BjZqfPuwGyEq2JENiTbv",
  "key1": "BsrKUSej4J2ejvczpAwE3wEwZQEtK6NEVp6dUTM2aMtjoGuPeoh9hG8PHxW8FEmcXmHjW3j9hMhYcFNZogwK7JB",
  "key2": "5xdQF7b4QinsbyMsLBZof6bpHzVudndt8akEV3uE3nazqFqzKKPpS46GuSSfSfyrgzewmBo8qGwbDfuTV5GfUHz9",
  "key3": "2AoUNDsnHQvot43TxS5GR7fKHBGQTHvkub5GA4gftYzwfq6ZDVvf2E4QqxKZRKHHUN1Urh2FuaWsyBJxttoxy2cS",
  "key4": "5QQZ8oVJqemz19aPXJHpPjojaWRgfyXGTkxcUR9fQMMBfBEZ26w6Q8KKDeKuP9qgHLmDpa9ewadYRCDAkW9vYfEV",
  "key5": "2xfpyxD7M1D26zwubQJhHSRzTrQfZ2SwBHXZnZYFnBvnEfSR5V4EDJ4KEKgYTBZ9X6135VUoLeJCcCHuB1yNx95",
  "key6": "4vPkBpEqEhbmLK3y4tZk1QcdDgzD2WY6L6HVce9LJNPu3k2KBUSNYXYzK4MT4wWoKuVfxxgwehp3GSz5F4yREUfD",
  "key7": "2Ej2ooQ2Ef1Y7v33HZJSFgxb7Uxyr4js3eDbbYxZiYK1bEmfybAXrBf9MrYAMiMKkZ9U8DjFNvwG5UXWTzmpkfR3",
  "key8": "3dikZpRPbCpP3EEDTWYQsNQ1NMLm7d6QTEzR9VHVfFgqH4SN7LcF6HUgm7f6QemRY4nYXoppahqQp7FjctSRY2FZ",
  "key9": "AnRu1Zyku7RA3BGUjTrz4fyfx7SJxQtjQtj7pDgh6q8TPjgGuNnx9nAW3NBfV6AtL7ZeJPSgeZNnwxnd5uDVuEY",
  "key10": "3oapxLfcEwNb92t3j3DpapJN4UQPg4ALi7ZpxQc1RpC1b6mCbwHej37QM741WxZkXFo8RQcP3BqmoTUahb7UhKQz",
  "key11": "3Tq3dF4zuDvbBsp7bX9m2jwyynJqSy2jttaRwwebTekt4sGNnct5fbAJoj9KQaskC3hfaY1ahhfpVQAiVDHKJKuW",
  "key12": "3B8P9xdmzPwoocmsshjaZSpNXwbJUoLmKhVqSD5S7fJ2Jk1bVFisH1K4NqqnrMsrsb2SNnkJwYXgJGXx4Q46wJf",
  "key13": "Wr4Zqmpab7tccVNvcYbh2yPnTtH5Jd7nDkhgySY6RwUf45maACHFfKb9g189crQvtWKTVdyzt6Pc3UTYDkvRPS2",
  "key14": "1wikNZ5SZKAd9E4RQn4S4qtP5knyoYiZcDnu3mPLV54hroH5XhouohRfG7pLwxP7jbdC7P1UcaQAxCeYVcP2ttK",
  "key15": "4kfBXATeS2TCHiQdFVK1MmZ1nP4zQ4sL9AnbkKWnqHKupdUwxiyHKo4Kvq3JHL8zkGX6xQx6kjKjapSGrons3WAo",
  "key16": "4TMpabmh2CRgDkkHAUyFAr4crjTmq9veZ5taQW4k4xCJPXvyVUpKbt44KeoChymN5L9T3duzuXHLosrFbohYee7g",
  "key17": "Ms4q3M9v9TsAU1Pi1vgZ8jnH7zbsctyGEnKNvyjTFCVQjTuUZPeYbcALyJTe2RkrsdKCN6kDHdiYJZ4HwhBu7MX",
  "key18": "4pCfJS87rbwKjypNh5bpHBh6qhuWsQncfujyEMJQKXA54pXvkbWUzMbEYjqLsgsPLpskdg2BdCeBSvfPqjWEz2mN",
  "key19": "4xBgUSYQuGXfC2FLKKxZ9JpG2o2SjauR79mFqL9uzDkP6idgXoSGmFCncGxw11Vxgsb5VY3Ar3synUMySXEPcqC7",
  "key20": "2C1eYD668MLQhAYNK1Zk6RBRBBTGk6ngnWm8kW3N7gCfZWKQAc8DsdqSCat1asDFffbbRVtkFqri5Agz1qYYDps2",
  "key21": "2fjgzjsuv3a4bLmywxQydNxNboutPbg2BxeS8d57XUSXvgU9V75zx666U8MdpQH2f2rwLwkZ7XskXaKRBzKUbgbk",
  "key22": "3HqQ1EJ2MFUtuqTXPiqjZEEgTDxbGY8v29ZapzUYmkdKoC6UaYhtwMcLCFtVPZcQbNGdQAg1ARxfkWJ7jCdVypsm",
  "key23": "3Q71A6BsPjsTJQD9H8iTWGFo1a9cffKzfm3fkf6rtSSU5MNovi76GFhajAGGUj5rPwKTcWMdLxaFMJcFcoC9M9Js",
  "key24": "4ajoLkGBHcjwJPMpcjXFg77eFaJV2fAFpjVJX3B6efjA6GamXtc937LDmXCFRKKUR2kmkh5Thkn7GVBjwoL1YLt",
  "key25": "2KRyAkLz3PXTKWdPJiBD2oZrEPSUcPTh7Bu84ZTNxsSzoi7GckFQxcSD5fQz5hWsdNZiSLXTGrDiBcYDjnXBDeyY",
  "key26": "2iWfPmGH6xiDnEwiRWTxA8qPnL3cQbW2mesQWC6Y7V4kA89gp9PcXoJKvvWFVpQipjBaT9DfzD5ZWRmh8Lfi8uT1",
  "key27": "5wrDZsejJktXzGVnYxJb1fe9my5NaDp7fddjyVX8MLqSNKmzgLn81NjsmmmLJnG2GNZuCVAaWCjpjiYN7MMcd3k3",
  "key28": "7Q9nbCgv8jQFrLKkQjBoX71p44sqkKLGeq2F765P5kSMyULsJ7Hp3QeNynporrRVtz3nahcaXb9ZhbX3vJFCbQj",
  "key29": "y7zad3YjTy6kUDyq3K1jdHoRZazn1fmyQRFpXmhqPfB8rnb2tEWYuUBL2MntRm5f8Kg9b2AZJ65qzqraboJjwW6",
  "key30": "67NPG5nmkZHtf3A5DuVCiiZLjJMvPDs3gGUoRVg158W5K8QfntAabhT4N4MoXzRgPGh2omCNY3TbR2yBZ9o4Wonx",
  "key31": "5ynuoPZG8RYVNHe3yQp2o9EJYeaiGZ7uqU549nFBi6dUVc9GaPnY4v12Q8m3CXe126zX8nMGGjNwavkGa6unFBMg",
  "key32": "2QEMAommEkioj7Kt3PshhZ9MB8hrx858Kyi3RLdRQ3AQiopekWKuFAzADhFSCakJeFBmSnS7Ei7mU9eabdaqPyLh",
  "key33": "56CWmHpKFQ5FvYHkMhsUuH8YjaHLWheWF8tgtaYW4pR4cT4k51zyMpbzhQCPz4kD1yHLUXZNPwis1sJVm5gT9Nx6",
  "key34": "3WDXwhPBA7hKe9E9hPBjPTRDgYYDCbKcfuWSi9GkBZ53GJXxtcuFFAYttnxqHASb9ERapcdMp27ycESDayeF9wvp",
  "key35": "3B87PUEDQVr5m2qWmoLU1RJKkbqVwFDjRYMz85245A7HKvwSjRkFCHrc9EmUDWJik56Q3XdwLMuvB2oPVWNLdBvo",
  "key36": "Hag4HJ8UAA5Kqe5hxCAE9hDPLWNNx9wgSDBtugETaxPKH3uTVUicNzMwNSSkdtE4tssLba8v1DFvq6URHXD3z7M",
  "key37": "5WjKFzMZBAkxe94UvDxEG6MtwZCrk3oxtNVwQooF5o9kscCMckDFLDt829QdaATuYn3fqccwTHaQabM7JqSCBRpm",
  "key38": "3dELNx1BAN4gv3eQnEneZqiXfHrmsU5dHywVqKLkCecJmgfvpwCckKoE6VAgLcnqkxUS4MG2P85VWBwiL4hC9XfE",
  "key39": "5mbsv88XBq27K9e33fhQMh7N9M1FBuSMDMMR7c1CUmZ5tuj4S78z6evhA7VYsmZgAqKA6ZCy2HvQJHhPPctjQR3Y",
  "key40": "s1crm6jRVMR279A1euMyKWJnfhKvFhwaRRmhcrMnRN1r5JJvLYE7UKHG3Qsa9wizkpi459rV93oxFe13qU1uB9E",
  "key41": "4jbgwi5Cnm3Z8ChFEsvgnsPmkfSoDLFbTkRMPv9kZKUiSfzxP699rVqGDAsebsi8kYh9EN6dyHyD2m5vqGtQgzU1",
  "key42": "776TgAir6APe97AsMdUEw72TZeVCuasBzUvJhAeDFs6wjcGR1bbgQAKNRAFPw9f5mCNGZspRX46w3L1fR2QBs49",
  "key43": "4vxixWr9SiUjsfPRELmfn3SV6KzmEWDT6coJh74WZT5LSztM3mBQi5BBc2gcrQY4fYict5gFxNcbKANCgYJpj3et",
  "key44": "5pqn4YhEoF35eF9tHyLYCtL5CWMK4Uw277cbv6hZVVs3UAvNH7BRwCCoueTKsqoJ9LiqeLPDhBCpPzj1SJTihj6g",
  "key45": "2gpqBpftRpNZ62Stu47sVA96cyx3PLUcKztnmaH3CwfyuHTqwsqMVQPSDyJbeERfR3RMyMDamqZKqmarhyvzxARc",
  "key46": "32naWjB1o6h9JJcfWxfvsaGJYpFFmnYotAsPjwhrBv6vFks5XJCCAYAihLRe3VVrYwksPcemuJXDKWtyNd9SvJPy",
  "key47": "5atCah8X6ZRQqDt7KrzdMcLH53htsNrFL49znubyeTqQoEjkTo9MA9x11JJRQDs3qXqGfDLngPMxFfDRxpmK3G8j",
  "key48": "3kVhUYUyP9EcivB5u6zdvNyyRunu5zuYDHQrSf4o4R91GadLvnpHx5zA5nPpvtWBnyurzanZXVmNgAoL8KmKaiGt"
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
