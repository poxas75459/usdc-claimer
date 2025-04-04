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
    "2o4XQSSUR6W2xKtPT4W9JuNrGevgTp8pyNa3nPA5dDeb6Vsj1imtBpZuUPCJ28XqUHTP6QB69HjaN1HQdDBJwiEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRyDXg7CqXoqQmmmd1MQZbZYWfhpNV7V7UK3oEaqjd6zxmsFoafSkFq3usPGu1jD5RPw1JT2SL5m9zLVmee6Jjd",
  "key1": "42PRo63b2pN5ZFPmmbdpHmhemixSGfZ6e5jvFVgnJdoKJrsDmJPnEpAYEEd4UjotUi5vvgL7ntNxhmRfQ36ygF8r",
  "key2": "3hLa35SBXYPjRUoNo8uDNUydTGFXi1bo6rnqoMxkoThKToqsUVeFCm6PcUcHHtjyzbiy1PGkPCZtbic4R3uaVZge",
  "key3": "342Bec3Jg7TZvpVA4JGxK1v9oBx2KkhsWCNcw4wDLYkj35Vg1zMQcM11zMCszepHWAJptgHoGuL36mGzND4RtpT2",
  "key4": "4SJJq5p9GpaqxdXNg7QUmB1qAGLkEBiz3CDwomt2qHeRbi8mAn2Tj5ob9hhBi3793jaxzkrM7Jyj8Vm4dfgnRjiy",
  "key5": "56nRW58NPC7pvaYvnhmBL9LfxFb25YgPZjt6U6QYkTU4z6H7VBiDpZhDLBGa5pfrTVgbtWqct1QMiPhtMPCCByW3",
  "key6": "4R6T85xDrQJvt2PxwvEbWH5wtqC8z3C2uLk5KVi2RLMFmhNDVCJo93KeqLb2a4Qi5H8Awq6be9Fr8xhrigWHCkg1",
  "key7": "5bp3o3mq81brmbuqsuh3xt6LZcpbPDNEFRJwBbY1zafLRCEsJazqf73XUCPixT7awBTj6ftwsqvdKP62xGHr2ASA",
  "key8": "2BM8aRsRkwQYxaRAf6H7PV8zuCW1F1f6y3wiJeqe8DxAg23PLZ1FzUcK1QCuVdVkHGLgn9F32HWuCTrCiEyF4wVN",
  "key9": "59fVZNCbisMuieHjzFN53uuksdir9DQxJZXRoegvZhxGsFmoBQU8NzEk8ngHR8ZVoLEi7qYcTa7sTWMFYgTcTGCa",
  "key10": "aKMxndnG5BE8Reiy3L97pPn2XMMpjgR2VARcjNEYjKPFj1KtVaxsVcaFnXFBKe85N6xXctprGVUdetYDsSVrNha",
  "key11": "2GVWZSWXjoPfarr9R1PBwHTNmuXeW59nazf5BKpsEaKvvFvBZQgG63csz7qH6B7GQgytxfKAboXRPwHMZJP9NfSU",
  "key12": "21Mp4mqioaiPWGwqVU9csDgj65zxrVHioQzdXGzM8Wo47m2uhekMGtJ253jZLwQ5DiaP61y7qHVgWe6ty3dfN1QZ",
  "key13": "2bKKEs2bwV235PCKDu2gy2gZBtjwhPtfJowRyHxnfitC6RC7gkaySoVkJtS4AaoE846j96XAxSyUtN7pZtwTNomg",
  "key14": "2Xm86EABy76m3ZUWhJidcuXp1rgA6PCp3JawBAcDAGPv6MdPUfAkzmqRj83pmcpgMU55psarWLisAV3poCRt9uyU",
  "key15": "27gsKQ7Ex3fpd2HDamu68hb15hSV1u83pAfwktrwJMGSDsbteUDNTXD6KPC9M8fhU3MwXkYzhBuL7LLJX8GCSMu1",
  "key16": "5Z3WAvN8zB81zNaTVqFcu2DwohL9nWcbi2RgPb5unE3x6K5RuWGSCFGN1jhnZSMRRrotJxQTVjpsqK8J849TGYzY",
  "key17": "61dJDxMunfcrBpHAf4VHLHSLEFZuJatHh7hNVyQ6dnATXEY8Eg1JGqpZdQ3vHD94SmPGGFqpBSrQZmRqv5Qgv2nM",
  "key18": "56SG66uzTimLVkEijusrtU3mz18nWEGAB5sXp5p1vjWWDCsof6HfZcD2y5YrQ9Qer2aoxPEYvi3XKQcC9Yc2hWbb",
  "key19": "4dbLchebK7cvRPKc64xDniEWzPQt1Q6LZDjm5dsrAxjMimiaFiXmmBMWGF8GEBDwsMRMFpBCNybeQDiTrDdy5yfP",
  "key20": "2hSNdwk9J1qrWh64rjE6zKwD9ojQx7uguTTWdYD7mAfDW8H3bFekQtP7FECf2UW2oByApCzDYjhcQTjfRL955hw6",
  "key21": "4AoE5CZBs2TkLHByKWd1Z53rpFaNTdU25ErR5XNrBb18DUmeCNqEeZNSJTfAk7Rskjgo6XEE2b3xeNXGc8bYwJHd",
  "key22": "FMeHTT8icwScbGgwAX2SngWT9op3nBAcyGWQUwS6BTKtwNzRYtjUJdxWVzHWmvGgD5Bk9W3AjecXNC2kJC38mFC",
  "key23": "3CRpevPJ4rrumnVoxYPPgPZ3nQraW4ehTAu1RTfzQFqgxnd9xzxQgJW7ccRcokwsMM54VHLpC6ZWPkPAZZxFRDW2",
  "key24": "37sMGxaHaJwfFoxvt5YPZRH5TskHrXAzD3JknjUruSus4DvJxqHRvi3TkianCu7GCRz9aSxdPxfzPYrBtisbtKZp",
  "key25": "62xASTeoWqFe8e1fTYb7jqH7Ut6p4YNF9SH6LLeAY7ifaRX5SAzcTr8RGQoibPkyVNXkDBd7MGArnzJ8NZMH5hwe",
  "key26": "5E5U6huocboBxV2i46gm15dtXiASevR6CSJY34gcxAknK2KPdLUiXYdMXRpAEMG1px1E8NNq3fy1idrDnvKHsFcn",
  "key27": "2Gar3E1nZvLgoy6TbdKaFQcTknTUcskJ2oqjMbvw8M8HiSzLyiK3GcvN47DRdDAiWqwtZ7kpfEC3JVZH5gU3uKBN",
  "key28": "56tMX6pKTuHgLNNypsZiKhVLihtKx5WAv2x9nkQaVeozS54GxnpBrR3sfZfRXgep2eMGjEEay79GN9CD5c4mYWXB",
  "key29": "4yKR32gr486vg7nyLBaapv3H7FsC5ufGbnE3TETrhkc6kkLaVX6VcWqqQhiPzRzdcMUPfZTi2nYyApwZAJxPojpU",
  "key30": "61StPH5zHxLmNmutw3cFECNmqs8nFYhaKhsmg3vjavNreZf8oLAtsbVac2q6VXNS555GAQKSdPaE8BpEG2ntbbwv",
  "key31": "263cvUW7GLx7xQGUHrZNDzRMao2dn5w1gHgcvHFcAz8KnBFWLtqKbD3Vn33KRRDC495XhSzM6D8Hv6P3rzRw1EWw",
  "key32": "41Cye8ZRSMRWPdCZ2AV5wAF6PfRHg4woiNMQRRAP92VKgZngNzsa6DNQtJrZxQHgLyteNNoioXxnzirTupuP8Fd3",
  "key33": "3srt6UXrEdNAzGniYqcV2o7ovHxhBsDeHM4DqVLW1MkiN6M97Kaz9kJuHAa4cuf3FUkvtu8oHTMQJMAFWKnHPhkZ",
  "key34": "9zwHkPaqxRuPLveUbY1UTPBFWxp6T1LUfRg4esPP9BonpUfCEMZpjRuJSPsEjE5ggXUXAg24wxPunWe3UtrS652",
  "key35": "3CEzvyzgt6fwtx5PTPkNLDna5dA5vbKtGfVQCV2ZgWNtQwB4YgNGkZ23iy6CkAjCMFdrQmiVDYrJ3b1bod7C4Kga",
  "key36": "7RoH7DJ5romZe2yJUQ6XpUU38mAPrdpzhHYViUawq6MwMEAEoDpw1Y32gY1rTgyHJ5VwtrUimEkXtsj81QQiPhh",
  "key37": "5pWGNrShVjKguGKV1PcUw71VbDwtnnMfXwTyDV4mCpqAUtWPsgEoJcGXpGRZ5xNNkZNW66iK8BnDugoQqmFVMDMf",
  "key38": "5oFLgy1NRLJ5N4QfipZ6yFdU6SC1btmUGHT2fZKagM5cHs33jinFytXqXaGm6EJTzADa9nrN2sKntH3Vu7BfWd4p",
  "key39": "2apCJj6s3pztQcruiCjJZUqV1M27Mws2HGwfsRe63UtEshhnbiFecwk9dJvpw1iwM3mMST9LZ2Z6iJrcEVkoeuEU",
  "key40": "4hq6YeqXj3w8i2zCR4chduFwGfUCVDSDXVcmux7pJaP12LTWSdSG1RitMEd3sHhiV2g7FaotLaDDDszufbCde22T",
  "key41": "5h3iFukmqDHzF4NTYbUqEHiyZLTCST5ZA17sZv8i4HSqdaZ2jNgqWmfizEhSMNmx2HjkAkPazHwFbdGTrWZkmQHE",
  "key42": "3ffvHC4oYb99wu7TjgCRJ4TCHjwSQaCBx8qoxKWBsq4AZ6CwoAFTBEpXhPfEBK2pzFFjZqoN6ct44eXcQGeyNNra",
  "key43": "5dwNCtmKcWCqQGG6qKjqwfXXLvv7kVEVdQ6bfcdUZwjMzouFVUGbe4QrFPvbVkL2QSa4ErAVMTqF6fxjtoW7tgLz",
  "key44": "5LviFAQiUqKbq3wbeJdjYVCLhN9wmw4YCcyFYiWGGvnbixGnutQFwocbFrgZvnmqmCZErfa3wCVLNem5uaXxCKXC",
  "key45": "3X9nNAV5sWbsjCfw5t1uBBqfrEiv1CXpMtasTkNHp3WoCcryVhuEMMhCyWPsFzgcXvh4zDyxm6QTMxRgSfyBnXh7",
  "key46": "4RUSqeMRB1fpGV6mNCjGg7CkvH7AfVLUAc72XTgDCK5WGaU5CkoRHFWETGcesaPimp5kBSi7XmTb8vSshSadKJ4Y",
  "key47": "8kiNWCoREaQvZ49Y2YNvHeBLfZMNduzMRPzZXmJ4MBUD7uwNZCXjxmPCFB8rdLmg53EcJmkfdYLC7AaZ4upnnbn"
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
