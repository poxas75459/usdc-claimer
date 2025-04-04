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
    "5hBZEdf983WcSYPPXef8svfe64NZygSM1hNARrh8uQDQEA2vPsneikmb9ksFGHy57M4shM12nb6UqRyX6zQRGwTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Yb3PHgi8ARmTX9FjLyVUJgpF53wNiQpGMSnPESX1hLknrHbSbKt96LKptt91WauAydvoUjXJEhNVDhnPXimDTw",
  "key1": "RbUeXHurbbUKC6dwZdURTjZ6XhnwW5vTGyHJYwDMAPGj6GeX7kFML46J9xESTm8cZmdVGS6sLNeLRa6A3Xwg4Hm",
  "key2": "AiMrqtm8nRT68SxCCwxubC9FNXGwvBpDfcbdgaXtt6fA2NHXaA4yskP7tGUV5s176qrdVMH9zd9ZPwQigVmQ6KC",
  "key3": "5qALSQqxGVYxcxAopHMSkDthBXD9rnQNSA3Ust9NJ3uXHT2PJXJqMY9VeKWzDaY7aE1Jv6vikb8e4urQrJGnhesj",
  "key4": "2g2LJWzZ6CjBxstwB9XKeWzYnCNbaK4PEv7nqC9CxvjdL21xMhcLoQpZZhPmT8W6BuEnYzMWebPk9Xht2s2Rc5pp",
  "key5": "4Unfcp8AUGQt18p81D3kgg53u35EY3LkqhebXHFfNKMWGTvsmNr9HJiSv6X2qUvBrqP9XvfzJYbBkVUrSvSqRuKM",
  "key6": "3CxkWzNYZZAwoNF74PEkRGRa4MWdHjgq1k5Zck3mSF84P1m6rnzvq6EMJ7GkJuJr9v5oCrqHKtuNcrPSPHqDArU7",
  "key7": "r43JUwqXZiJud17PaJCfCsjRj6J7XWcFyE73Yk4kacKhvxWNc6mmV7h3ja5qVxMnfEbng4kHYF9CSKdqEgsSTdV",
  "key8": "4Dur7WmNijqRoKrahhgraH7ovEVHrJTD8TAw1yuoE7MfaADK9R6wZkDQS9vncRdeCFyGtQJPpfXvmFgyMMovVnif",
  "key9": "2GdN1LobMHpuF5negFUWD5FXXrMKf6YdYfipSNaVAD1TFWABpmC7jPbVnXV7cC3sLMZ3KM92isjeYPpyguJQFpBQ",
  "key10": "5CSBDdsZv7vTFsUm4V75UzFNFpjZWUvWXJVKhsyoS8VisdEKyFig3xinJubP5yoJMvkDxN4qRJzC8kUELKvAHiip",
  "key11": "4Vi1vKC48JTPS1dZrHMrnh6E7zQsvQuAkZbMSc6XNzmeZTBMr5hCVhqVHyMVcFX2Xg1RLohnNfeCK4RhdGMn83GW",
  "key12": "7brAyQc97Xi2KiHP4gKtnZpQCqFsyTH8dfQ2YqYZrLHW4SN5aC9uDwcFxH7G6TEZKLGsDUT4msVqN8hZ9Gxp2KB",
  "key13": "2Ra9yamENiSX9s6QZnJ1gta1WDeCA1DEBN3A7LKH49bLRbmrNcQxWXSGRKG4JkEDBGxzRtxjtnuVAJr2fisUUopD",
  "key14": "yRovbv87XEFGhtkTvVngHMdRUZ1H7iy8bVWcnPoJL33Db94xVWb3vWh7nXhCgARUkzkpoFB5QATq4Bw3m3haUv2",
  "key15": "a8Wrgu4zV8hMruhuijNwrJBZf3FnTnjDjMCRxYDuUkdheN9jM5LymAuXCggVY5uAMA2AFaprjr9499fKEkZafLY",
  "key16": "5Wv46qdHBkvMpj68UuegJbwesKrQNDghRtcs9AssiLyqMtJVRNE8vTeqXK5kwgTtVHmofDoqrN6qwNZbr3odw3MP",
  "key17": "3zq66injCNCCSR4a9jxD5aUvrB7ENJbR4cdnbeiia78Ce745RpAs5DggRND9vvkWmXmoF1QaPgYrKJcbDb18t3Eb",
  "key18": "61M6MeUEq6ZuqJaxNeXwyBk5uAzFia9Nj8v2wwGPcdGLrTcWGaE6KJhDzCecqL4Qg3ThdSsntkAPeEG2Mxx3Hu58",
  "key19": "24eHLeDj5rJ4ptmugvvw7nVudzRArs6pJknJxUuSyHdgo2Tcx4utkEHte2GqaSC3XhRvRVd5ittmdYZjZHxQVLkS",
  "key20": "Gg8biQkq7TjeCp668HzwZ7ekUUCfpbm1TcAjDHmAfvxRno3fmH2rN5BGzUnDsz4DtViFAQNmrmuzpKqGtX1XbSM",
  "key21": "2tWRWwymW5DqGHka7PqtMbcdafz46WCZT8EBNXaKtR8hzP7nPE3F2PFFqFAiDZ4VZWzEHpwEYL9ZvfdgJxdXwxmj",
  "key22": "5RbW986Y11LfEmLZbkY3wrdWpb5fV6AWDYyyzv2K4auG4X8yy24XMhNKfonXxP9Tb6eQh91MY6rMtgTthVvApnr7",
  "key23": "2D81VvyaLiNnNmtU4m8RoZayhEXRE8zy76ZEmJLYk8CVg8k2t1QN2ev3uRXvKYRjXDisr2m9r1nYGmGUdqywjeTW",
  "key24": "27yWumhaEohD4PMbYDZaVPtETkzmnM9z6BMk9Bvn7X6y2f6Stj1MYvEbMFLVFSbxDbG6Jb8AWCw7ALVZjuTrvNAn",
  "key25": "5AeB6BKvx5jnxDjv5kZDwLvxLqqreDjbvVNPZBxjgSVvCqjVq9yh5UbMGg9wShPraSpKZSh2fxrsjonF2QgPHwN9",
  "key26": "4hVT2iFU5CEiRdVC83zK4PM96XPNVFPQyZ8x1GBm3Uekjo6eYonhopPZbSo3f44LL3j1d4X8WQea9MQy7CVyjsDY",
  "key27": "2jixRMgPi5uJAz2B1pZ6gWzZ5avRJm4KJ6SD7tXdfeYvLARikJEJ9U9J4z4uj4cfxRNxxfKRkD6Z39uSdbXini9b",
  "key28": "2PgAUZ56md1MVNJi3ZBMGnYi5XRY7R6kyhppmpgbm36WVUZy2e4uo9G2ViMPWvYFervsS8qZr4czzi7E9h5B5qNN",
  "key29": "2yzNRp2NuP8BrdsyviJfJfVncWqhMTNeyw4RzExzXjBPq34q6cDmCvdKoNCr6mFr1UvYrhrNBQ7o4cKB2GVcGu8M",
  "key30": "3YZwpVM6HMH5mkVazkp8H11xQR9zqzzhmxusysEnAJVVaLdEjf3tt4WZ4h4Akv9WhWNrPmTiqLYB2GpGFfPmFt8i",
  "key31": "4TP7KZt8emk455jHqjwKNopCbZBFbBVeXbSzxoRnKV86hq4zLdrsU2JFVStdPn6Vy1nqDGWRC13cuksNCE2MKjXG",
  "key32": "2vxu6geTXL4V5fAsXLUiC8SbQjEZ4smncChJuQb7Vtifv24GCwZtivJEvdZ9iQEGqQodgG1LaAekDDiy4yN2AQLz",
  "key33": "3WH3tjfdygz8ZTYK8EC2eLRDCuSR43X6RvavjSX2V1ceqd1g51wXMGQ6dDWzPKNUYAbX8bsXu1SPY8DyYJZbihg9",
  "key34": "5P3t6G36w7aMzDhNGa43XDKegqVhhGKm8kvw5azPnTDHF8XQyq25x3Xsv6px8oMShEvePdheDVz8Gf7u75DT9dSh",
  "key35": "3VmLA7ZQe8pMgUhWBGJYdwSMgPag3GbmiaVGLoi62CeDwDbf7C9AC5JbjnqKFUtJ7ZinfXsb6EnQoPfw1NKjftFf",
  "key36": "Q26j54YrsaMp9q2J661Bbv4R4JkFVCSirhdZAQYgFwCBu1niaQTWjFWMQQrFNqv776b4mKX4pe68sfneY4ANU7K",
  "key37": "2oSLyPjNTnHhq73kYEYrV6rfuEb5exkdeLvnQfV79txDS3gaEDJpBgzH9L9QJqCrcAR9BvG11icjAeKLp4Cg5sRJ",
  "key38": "kKPoAj5NTtXuPBynoNGpDLhg9pGfXyueaNMSa2N6ixN26XEpG9vJwoCwkFp9X45oewTsCtBd4JPPrpMTJsueFk4",
  "key39": "2DJMgbpbqVMQSYYE9spb5RSoXSsPwUkAYu4Sx9JvgEpMBH1Eu3P75ow6Ej19qyetuPhWxSAMjGvddWspSqGdP1tH",
  "key40": "3aVjDp8AK9nACm8X8ueuSdviRDHSc4ScmK1Byr7Az8dgUZgWGM6LbfaK2zo3JVmPHN3N1PfAybZgNyyWKqxGoD5D",
  "key41": "4dbQWno2qwyx4rsw92NpC411C2J2EauTEz1fZb1xhPXNAKhA93uifL4y8gbEZBBxQvEYCtMZXDHJjSGxzVLfoeAa",
  "key42": "5kC6uRFtiUsnwJaRi117P1kX2TqJZrdRxBwedE1tANosd8fSe6aMiiCRcSimdL4FhqioadQHJKQ6F4UyksC4V1fs",
  "key43": "2Zeb1q47fHY9qxJzba6eXXM22zo2e9opwdazQKx6kRekGVt7PYDHu6cMcesMraZEGeeQr6PeUNAP73aZ8mXN3ytY",
  "key44": "4Po7DymEYzUaBLu7SwZvfvVG2fRf5XD72qGvyPuk4avaXo5sgewKuJ33NDW7PbxQU8jQx1HfMtvwkN91Zox5r2uc",
  "key45": "2gEJodGod8MSF6s8eJwPPVB3kJTjrXCHpspSBDiK66azFgsNz6cExdsrkAE91JQTQseLXF854ryGxCHjYRmVyHPb",
  "key46": "2G3uQVf7jXFMW8A7KxaC6zu4q5RLuWE5CBvgkeh8oRorkR2tBkqniRFux5PjaZ6cFKdmUrgMZ3976EVLx7VE1yFf",
  "key47": "4LKSJFdPNcbEVw2bZnH92D8hqvWcqFbw8hFaggSQFJJGtmicBANR6PEps81L1zCBcrJbnG6jxZmKEHsfBvZAUZb3",
  "key48": "3RSbkVSHUvkSmXhWLHQ45Y5fzXCod8cwGRARV3pcBmRw9qQeUNaermz1J7sCQ1WgcoUBgacDRw6vFY4HUM8iPKBB",
  "key49": "5PWty6NMCMjtMcfdY32ZcUSfoF8cbxQLGGwTmEU2KrHP5p4vrvRscCN4gyBXWo57vni5eT6qrGgQ8uHdKkHbSqnL"
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
