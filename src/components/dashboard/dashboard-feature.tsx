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
    "2Jtx3TQeKvce2k9w3HGK47UnviAgKiqZBSToW2JFqK22t64CHhtJrkomdXpYWzfzM5zLx487cY8SXm2wBPjdbcck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xQvbW2pfNm1cqx52GHz9eCbm3JUHLEEYgosBYsY5tVcGqgLApv7CwP15LoN4Mh8CczcVR2LjPMtx2UDoZWsc3B",
  "key1": "2EFLY4bVbyHDCvJJDgrUoLMqNMpx6rjCztMNWNE5qwBk5HqVqcdhmYDCxJJtYSMG7DN7u37pgdCdF6sN78EojpU9",
  "key2": "qru6NEeWyQtvAgKsmCEevoxdmddeT6LobdYdc76iYWdS7mzu4LcsK16Eo3aqfwVwk4UQDmfxuBVo1wffLoVVbMR",
  "key3": "59CYQ7RujJUww3Hs4SeCqHKXodw1WNrBxdiPa6F26PxufYpaUDm35w2iJ4z7QpkmyTZnFJAyYJrPrk5tQvfkPFDq",
  "key4": "qEMKCoZ3nvxhYHVt6oehfJgp9V43pY9ZCSJgY2r3Cz9f7WSJfzJFDcbbLxYhXq9ya5NQH3ieLzkncoBNomtzwr3",
  "key5": "5iV39s9LXrsd9G9g4RiXdv76qJkeKRhdvBdZpGnWSqTnNJyjLruuPmDFWXozqYDD5nmGv5bcqJLHHKTi14MwqXHv",
  "key6": "3tHV41XmgPAW3x9uUuJA7kJA6hhdrKSE45MtTj87GjSMKPhvsaZPvJkySCypjXkCE7JBpTucQQyf9FQDLCr2K3Gn",
  "key7": "A4EL2xMxk8CZQsxjqs4YSC3TJ5pPaCvLDGiURsxx3LHXYKULuuCJzqHWn86jayH8QJ63fWQfjqwHkxvB1A336fQ",
  "key8": "4tgcuiRA6Ryd7fJkqu54LJeqbhCiSXpg1t5ET1JXYCE1SiNP29QHwqd5XtVYuW4vksVYvPEq3hxgcBQbhBgdeR8k",
  "key9": "tnHKLPj7YXzNRxtWU8wu3waSmFs3FJQb9PZu6GRRupyHvRp7qoJ3YEMR3qemQkmVg8hd4heDLeETsSo2S4yCFwv",
  "key10": "5ptdRxHw4MBuPPPc4znv6roCzxqqn93tFWcxRmpRuuepHxc2osQv2X9f1nduSnbCquM8JFtr7cRcBy8SGaM1aiYY",
  "key11": "2k9PmMves8ar2DQSE7zwtT9cvFPYs53DMxyauLe1LArk2N9539B4kECBz1pjSKhJ6WBsR9BcvoV15byki4gjR1FS",
  "key12": "55YqMNGGv5gEocJ224FEd5oJHAeha4BSPpfB5m1ZL9R8sePhcLVzAQCXTcxTQCWFWqNypYiCJyucdSf5YJQVYgG7",
  "key13": "63Asr5YUNfgRA2QSmnYXUZ7rYvBoXkdeJdUzEcfz5diKHRhemU2we8QN3oV3w75BYePr3msvYF9pGRaLTYVET8Jm",
  "key14": "2ZmxLGNYo2akupmqPHfFbrZjBRZTP1sRxWy9W1ZeNJ82XmQH57i4HpgXAkV2fCPmeSj9BxSidRQZtzQetgQhKwBY",
  "key15": "2wbDkCZ18yYHW8yQt4ohZccSLun4V9jLoYSNPDn3c96NbW2JrQdgqdT37yEdm5TGNL2uqTgtzSwRQxrpGYfRSyFW",
  "key16": "DRsxbG4HGAbykqkxG2vX3Byb3S1LskC3hQNciFWzqr2XBGewZKc1D2qdSU4ipeTsPGvMKoVmA935D82mLT8ziLV",
  "key17": "3TNjM6HcKZn4io24oeH3wyhAdZJadUn7sDm48hFGtiKXfZmKW2RXc6JbPz9MLZcVBf1MfMb4GsoUuGmjNfMzxM3B",
  "key18": "4wjHjRzVU3E9cQgtz2kWjzSW2iz6kX5NQiUKEa2Yn222osMBzDXm35cnXVwym6bKyktY4zUXRuov169EURJokFqr",
  "key19": "65TANkM9ERRHED5xkKx7KRTH9jstgQXXEqoQEZEDbY9AhMGntrUtFoXMaY6rbK5Aq4UodSuGFbk1Va8JAeLHPAwt",
  "key20": "3E53Ejged3byQQjzNTrJJfiVBhBLdaTdRCgjf56T7TRz5A8QK7iKFsKjogJ4Kt7iFqo2AszLTtgz1BVXv4oAaXVU",
  "key21": "4WEgmgB7gp4AA48qBU69KGszTrpdmPSJve1Wizpdd68diBc9FEeNEB7XtYsApnxjAksEg7E6Bq7tFFzToGkc3CXJ",
  "key22": "Tk63aqxiXFyvjfoXbfAyhFMQXVuNDEUvjPRLoos7neGAK5Mx5C9Z7JkfdgpafgivbELVvR5s8hoFrqZ5bejrofL",
  "key23": "4SVzBP2vB7D88sMUPtxav64VFg8rwWeGvsrsX2XxHwtYZLazih81Tb2qLZVq8hrercnF6nHfWRcY3psFaNuJm1fq",
  "key24": "3LtjsdggQnJyCyWjHTubbN5h5AW9msnDNsiYCqnnxL1oqL6Gt37TtAjXTX459EpPY7oByZC7LgeRmAmqxjad31cP",
  "key25": "2tZz7aMWdi5nz9qQd8KPVhPVunM8bgLn45iqPxQEeSQh33rWrrT6BbGH18Myc4fhX3fUm6vHTDL5j1SsRRxs2Fm8",
  "key26": "4MCvqa8bohFBC43XBGiAZEtgSXca6ZM4AjHUyuuHDBDvoQiZsoga5tUzov6iWbR87bgFtzP63oxibemFDtEoPCVL",
  "key27": "4RdRUuV7x48XHJVpoki7QkRTMs5pmzJNHU6vVfeZACgGmyDrXCKkZgY5sufoVcNJwUqArd9ejjUvhFMvhpGHd5Dk",
  "key28": "3UdV6YywArnscgXp5wHobeUx8Cxwme9oQj6ZoyYMCzR7fbTwX2srdqq5UNMeRayGEkcvoFrz7H7nnwwNewMwc8B",
  "key29": "31zmGm6VcCYcQ8otvEAXRQXDiRFWrevn6acWXyUzNxTCmjbuADff6veXbK6ohHkF6DsmDQYSvzPeuiQYa5fhaH5Y",
  "key30": "22TCN28J4ANse7HCcprevSpCM9X3hDKV76wzDZTZRY7zWRXQZs6qGN1qkdhChJqh4MJLznHeDx1qkTFMf4Td95hT",
  "key31": "3c9pzidZXK2hg2AR2NPjW99Txsdc3a8x5Bjqdq671rUFqeQcgvui3HHneBXTbsRvUT3pnyNpmWAi7XNqb1eiZcqV",
  "key32": "2zvx5oGz811R5w7W9DTAKgi5u5Ns5nbdMZRhfWm9F2xLXuC1jq8jBz9uG2UoMNHez31nV138XaPk7MFAPva198CW",
  "key33": "38WfCC8ALxMk8oVGMwAG3vydiiNWBP96Dx6w7Hs5WoNgARMusznQAgBPw8KnfogQyYyMv6jPFaGtWpYPgfZXnJHX",
  "key34": "a9DMoKnNJt4iNdkVXhcPqSxDZ3Q8ZPa9nibkbNmTsKvFGJNKT24DT5mAvs3GKZXWCZNFAfc5hCLnLLihmZFSzNp",
  "key35": "4UDm9taWdnni2agrGV8b1Auru4e4ffvcLxztLpDo941SzRnNj4p8AtJChj1ZRigMJJSB2wW5qy4FEfYPyHKXAJmv",
  "key36": "43T9k5hh85SzSKLUEeLwNpLiYtqCd5Y4nkMYZy1GX6kvEcYZGJ7U5kVrnPM1imCrQaUWcxWw3YGp9t5VibL5U8AP",
  "key37": "28sgErYQV8L5hzZSb8UVLTghy8MDtVuMvn6Lp6i6h66ZFCXfR9oW43SRFa2u9BJFKGA6wcoiewBQ6XvqboAukM5u",
  "key38": "2HWjpSLtAikQZUUdfBYS54Q7uomqQMtPnC7899gQFQBmvdV5j9cdP9NLAJNNMABNLz7xbHWCreeWezntuGzfym9o"
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
