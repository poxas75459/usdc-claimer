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
    "37zf7T8izCm4YcqgRpoaPfcHNmJUtRmCc6NR9n2cqMD8wyKsE6j8WWYiKN8jsGqNnAHGhzEmJvA9igSGwa8QhzpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RozsLBD8pF6Vq2Zz6qP5oyffgS4CMAXMDvqv2uPDdAfuGfbhHz1paeVP64b5AKMDPniUocN2XfHQSJ8VUumBAew",
  "key1": "3nUiZod4LwSsrk9Jik9sa7mkd3KhFdhP7nL6UZ85igetCS3x9M1aR64qCsiZn8fukVrE8sseda2Ci847HKjQSUBL",
  "key2": "5doxgC9fjeUCG5jsCxVseU3WZ7ZYsSVQ3JafQuC17iB3RWJ4ktywGntAWSnGWbMMzpueMss3TbGHxPKfKusyaTmm",
  "key3": "2qp5RCgiLGMkfnNMxu38Sy8ShvWhxMbnDmZPfLNMgPmNBjWBYYcPPyZtEK1VYnKM2Ptut6x63Re8HrNVJ3Dy4JYk",
  "key4": "3G6SK1RgSqzfHPpshHGPJhSQ1gvtZ6kY1eD9U9cFsQT4JVAQ5hpnqM1M4MGddHrcqFGX7zuB1J9LUomAP1JN8zBm",
  "key5": "3xkgHrFgdZVm55hWEfn5i2xgRdVeEagqaT7obQdRWPRKKuQQazED7Zz1MFyxKnUqbo4qUmQR1kqbHdRmw6fQiF69",
  "key6": "61KpM6VT2XWJMjVu5eAHu5AmhijzCSX2HtoAQ8C2Xqj2F8gB1EZVPafZuqhSzk5UafoXxNXfRSMmttqi2fsBjzrn",
  "key7": "5EjNP9QhjxadHRFpf188Drwwavz9NkfsQ2wVKGokKoxDxT9NdDu6CFaVmY4tohVidxjK9bU8Av2FHJyaCo9s7PXR",
  "key8": "2yRwSkcBXiMgYpjP38s4FJN4QzLXzsGRVcYxg8aibybstWs1i2DEG3gE7coE4STxMbwzNQ7wpcXd1gsUsKCGb28a",
  "key9": "2PfJ8MGiM8c6WkgyWLP6XTVRd237bqaasbzTWWvob15wvc9YWBekmxPHMREazKBG7wTvUb6BTtGLaHHFNT1AhjE",
  "key10": "2xoeicoViqfJXubAxjJYa4aLofc7PqFkzQUL4qenSofXXHoFVS58U6uA5BFiXcGrKovmHsbUrbESwhGXMPYhnP8M",
  "key11": "4vuMfVbSPDzscQ7jN2VWQ8P9Km79XSkDMFDYRUVBWiqMTgnkV6uGGjge92hSVKtwJAcdV89xZ73em7b3qcVTSbsJ",
  "key12": "5SsFs2iRtDX8C3xqq7pHAdcbNDUHXEd25TSZmC2BMaca8Nx2oxbSbbWeTdjTjbtdyQDrE64EhPkNkwWjDdAnvnED",
  "key13": "ke5isp5LpdEqzBrFKXmfpEPBZDAmsoBck6rWmiyUMLqDFFoDm4b9Q2JtRveq4Vtrm4kjX9ZcKFia9LmdFZsZ4W3",
  "key14": "2Y1SuEtnGG6zunbvU2KhCpSbM2us8bdJw6aKKnoji4DaL5XkpSXWaGdL7nFCt17U1UsBFQL64nRWV9G2AkzxwqW6",
  "key15": "62Vd7WDTxNQgwfGC9tw2vkGqJhyruQfC9HdWqMowLH1HzDQT3frGDYMh9cxuevFu1J23aPnGKqo6LDYpcJCUCuiM",
  "key16": "2Atysp2vqZE3ew6sWCoSiM2DoR5v3uavX6pCzZg3eXpPDpTWXpkRvB9aM8JAXaViPK9q3yBSm6z22e2gTaFYwnTd",
  "key17": "QpuRmH6o1BPCkxX7e96dsqbYAr3vKsqi43bh6bYz5uYUUxa5qFPCUaRpTyZZzjJURYc2TX8Zw5gsiqupSAXRtaA",
  "key18": "CATPvoXWoPb7wemrmV4oTdq7hA7wbaE7cVXkRMsYiPReuQwjQKxoq4smuTiEP7psAPWfTRY2AwNs8c3Ub3zicRJ",
  "key19": "5veJeMx9AppBdHfyis2UkorjuKYSHDwacXBub32zQJhbtoooH3W7gioP22N4zB16fDShGkwnRyodZSbiC7yDwULF",
  "key20": "2mUjuwhaF8yvjciTH9ZitspEsox6D5P1W5zEjHUb3d5U5Juybuha6aWBgazQkFCFAYGCzSaBFeEre8RsnUkiS8t8",
  "key21": "5Ckmq6XzMxudNBCvv6JHWYy62sANSnRmQACq7EYdKSLor5hPdw9HsBmkdwKCLmwpjy9FLZgpAyXHjWSFRxiacq7W",
  "key22": "3FQZV7Ba7FiQsiEyRnrL8Y6H54dwjghJreEM8wHcuypp4WHDbUPEZdj6U1V4m3kKgWbgkTmzeiYrBWW957xvbAgV",
  "key23": "pUSDrfLptqcAKKkH7WDSK1SYkU45QB6fEoYzWqCjBUQpe2Y2reXDAxGRtXsTXnqJkJhaWwnpPH2eJzUXjFWKRBC",
  "key24": "2KBk3bv7GxTsV5FD5fVVk78VAny62JFBf9Lhs6WdX9ziZzpGUEwpL85285kG5XXTix3xXxrkKsbwHpWHM2RCzoNt",
  "key25": "319MaTNFVuzuZxgqD7tHJavubSmHRcKwWhfETBwTDMUGXKvpjcBeM8mz5exY22rheSWA97u5tCKpBqPMpekqP61b",
  "key26": "4VwnYZ1BSFZ2NZHj1ogZ1xArsUEPuaVXM2iCYAnDAogerr7ofNyPxSsEm2US4prCdMTT2tQg9tjYFJRhNou5ndGJ",
  "key27": "5utGTzC79ffT43Zdqt4TqjUvtqKkYhKouAUFDBsEj28hwegqfo8sQ6f82W1aPBae5LkYKXvACcYk8xYfyCbRCrt7",
  "key28": "3CxZfP75jj3gVmXCgsXBJCgC2Jwdpq4iYP6LkBQoMN9LvDGZMrRvUGnfBgJ7n6VBwKx6WLZnca545E4LYsRVthTC",
  "key29": "4GkUakiZQuhspjRmhwSaTWHRvWj1PDpaGUyQrpEnQadGvA1cCb8Uv425wdp5325oLUAsdaYs36EMY8qZiL9pkq3P",
  "key30": "2m1Szq9bzf5qNXiEJbASJw6LDpSnUV4TjHVmPwzGeRcT2LPJyg6P4rE4iQXwZobL5tic35hss7s8EV1sTMVVdMqL",
  "key31": "121cmN28G6h9rjDdQGGbkdt9hk8VF1gy8wa4Uj6GJxYVan1WzU1YJukEXfechuzTbtCSseXMeQc9VG71dRrMzbsr",
  "key32": "5szsNXpsfC92bodfVfHs7irCWQacyYTDJ9N4CPYuJkUJqo6R77LKe8GY2Y67atnFPWNmW84uo6EcaBjom19RREaB",
  "key33": "3uFWhRvRP8daf69nZWgi5sf1cSAYn45sGqV5LVPe9SbCedF7FJnwzThsL4fVL9vok1pYS1h1WTH1r2zUgHpaksQP",
  "key34": "3Zb5feQc2B9xYHBWQwENfubwB7DLiBBJ9YWKGyC4i7WZ1r6W63rhmTuC1MD3QFxe5UDgVVYYSeMNnPznVyJN9ouo",
  "key35": "3tjmupWuJ7kBSs8vEFf6Y67dvWfoBdtY9VnH7Whp6yhK5eD5ZW5u8jjRiRhTj4YHCxtVimLmdCiEGrMWDAnMfYVv",
  "key36": "5RVY5CzTM4ebqEoCJyB73nGa3hkk716D1F8Mr2cNne7R8TuHhxvmwymXE4kLzqtDQFvA2oE13CszQQqRcbSAZin9"
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
