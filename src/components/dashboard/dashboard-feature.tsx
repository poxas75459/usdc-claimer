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
    "4dQoBD86ruSNUkYLdarFJ6oz1xGSmT8zcSV6YbHhX8xLf3pWnyFpq2qxY2DBMuQzo16K6THQWCzXgTStZQxUKruM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhGmXi2RBbnwohb5p8YHi4DjN3rk4RtPPGCh1QEnYYksfbwkJdbGQE4K1gVsvyaTAaLp4rGKb7zECGkHuikXvxt",
  "key1": "3e96JwqvfmWyuKhygign1pkUfztQBjFLzURNVLukSgGNK9UKqaS9Xn4GBGURUQe9xxtnawrxn2wAX7bSpwuA1aPT",
  "key2": "5wES34dSEtrgZjhWoJwj9SqznR9Hg38iaQJwgt6jVsCMe1NCYSvftYn33bb9j95fZHvu3YeJJ67JvF2QtUvmMRpt",
  "key3": "8DtNFT9a3WeHDjGkET6f8tuucGE96w4rNiRhR7g9nbmV8YZ632mXmK766KmD7D6igeknS5HBadHDwx8cFPo99ZX",
  "key4": "TKSPAdAQRAg3CDj2wXeFSZMDEhdhoiWV8zJVww2ACVscTszQ2ceJcVaqMS3GqsxSFpSuMBLHxjGkJtx3LEFj2G7",
  "key5": "5NKGaZa3FsW8U5ydGNGhx5PYvW3FaRbFnF7f5X7NuxocCtwEDo12WFzRPo4btximxCoghVuLknKXU2pwejTYMsDP",
  "key6": "3a7KYPhDkMFASrfW32CJHVz1LYDxG1ytrHuca24kzQvM5hNDWekEsvTPJSvRKXH4TizkFCDAmouinMq4JueHxqHY",
  "key7": "4KRSHdbhfHJ3STt4YYwSKheKTn6AhKdztNjqAgfSKcLEnmrVGxPmAfuiPAB2CxEQviwVynMeAB9JADBuPXA4fkpm",
  "key8": "4s4TCwJpB4vhwn3FVNGVeFbU62u1MedKbx7nnAk92YYamvAJQ2NJnESkKME1SCUomzbU7PnF4b3wvjwvJAYcwN9x",
  "key9": "5jiXoeFvS84YVW8SxCDe7KJGnsk4NCKsSMrZpziJ233YmxdMPosmwotA1c9JfD8DMPYzwg6ueHViZ5yATcVSkEc2",
  "key10": "1FrmCd4YVdV6MaCxQ6ottF8Z2RXsZQpGGPYSKcRUuB7YX9mZ9xMPx3EWTjnmKnMELnoPmt9fsQkSkK5pNnmWvHV",
  "key11": "6r5vEs2Nb8EKosu4YeYPTMQ9AptnEmd9ayiioZrjQUMwtMomb57u1sscuExm4rRdnuQvmuH7UmM5getuQEkyJoQ",
  "key12": "2SgaGfqbRt6YnxEq4kvCmKkLxBR7bHMuc4N2bpFF5CG3oH6QtbUnVkRpD2UL8UGrSUToSvUGqnV5sEhvFFYiC7cY",
  "key13": "2YXTCN6MzyRA8JPkdaVX9nPYrEuJhZCVsFanFizsetdUpD2hV1HMrMftPzD4s8LuNxaa1SUBmxVKknm1XTgg1LW",
  "key14": "nkpaVRZWWWmr6bjhwe1rVXbzUFGa2T67L5wG8RTxVQdeZ5Fpevt8dEaGvd12qs6c6wp3DgvTi4fBXZT9qX51qBr",
  "key15": "55ABuGyDFQbF4wRsU5rQ8vdzCMvbFDMH91YfJoU5cBGjmMjtwHrpEc4i4Aomea8zUKbP2wwhCvxyWQo1VA3Fm5gU",
  "key16": "4WBcs7bFgNEJ4Bdr9284aZa8tBeimbDbxzt5pcKetJAU7qSZBdeVnPNBxDiEikJRNgRzYGcJ7iDFoHdBU85B4tdv",
  "key17": "vfi5Ki689v5nQZ8VZYgT7EBh3dciWuYG7qVG3f2kR9ip52wWYgfj9JBCz6QLKJqQ5WBpcgTVHAFewfaKQVY2eLN",
  "key18": "5GQWAb8Sfnv9dFNPHWjRueiGn9MBFDALcGjTT74rYSvVat9Z7Jfaaswyj8EEZZGt8MKVTLxv8cZ6XCNPzp5RqgMc",
  "key19": "5zHPCY8s3hLFDzBNyHamKQYG8e8XEz6yHnU7CUyK1f7uB3a8e8VpxRbV6SSYkwaVN7Q8fVqqFZXs3fGGX9BpEy2h",
  "key20": "zLL33qCuBe2HJQRHQsLH7ktZVae5gfEkF6A9pMLqv6tTMawwSc53uG8giQjjVM8ZTQdRGz946Zg4XfWgoBvHahS",
  "key21": "5cN1e7irAnBP8AU57ZRYJm71p8J3VAFBSicfPKUqrZvULdiFz6CTJhaMFSBe7ne4sVSa77bd6nTfZiAaTRS7iqr2",
  "key22": "5DpotWCCeSqPkbneG8ocCafm7s7nuGn5VdJQa1d87JVED6paC4APMkppgGqG63tapGxHYSSUVPFH5pXcPHBpj2Af",
  "key23": "63LFppLmRrgW8zxMi1UVJ4Xv2NH8dMFN6nRYa39wiWdRaoNdf6VmiwZ1nC6igYwPDzwFkcQnAgYXZbSqjE9r1EBf",
  "key24": "3G6kSBVS172Mdji4hUzygokxHwAVZ2abAkSv5ziMnvYazYzwQ8nYcVXMj3s15Rz2GhB7YKeyyh8AKtbC1JCwQHJo",
  "key25": "4UGcxWFcjXXKJaTTTGU5Ua8oGCu3WoeVqZsjsZpPYjUUFCSqpSyQZbw7eYSmyXZjUWKcKAvF4L972G4RkdZBnUre",
  "key26": "qSuNqYhxsSLNMJrGkgMDx366o9aRMckaMP4jgRm9s6ZMdX6qbFeWXq2NPy1AZ2HAriN92jn4bC5X777zpvZYjmZ",
  "key27": "4EktYAM2atqmev8TkUjziRCxGhfbihqD1cyM1pGfVWu2GE1AGxietzVBfkGn1XvUJHydpjMRkZMipwnNLvwo5pxm",
  "key28": "4kuqN9d1UTUntYQJAqY45q4H8SyHUFX3LxMttmD4HqotiYf8ounrLwCu7zYLLjwtLtK5uBdfUjZprQe79vWwyL82",
  "key29": "2n2n4SazXhSaep6nYbFw3wxf8WuP25cjojdeycV3t6vnrSEPky17toEts74Ji4j2x2RUjHoUJvTkC2JQY9G7gCYB",
  "key30": "3gc1L6T2HxwWvP2CSiCw74y3j5xzrHff9Fn81AtX5JyoSEjtjFXvxiBc2jmotpSRt5a9mnUJ2MKsTqw7P6AkghNF",
  "key31": "bvfCFDbQ34WnvL1P2nGBuAdVynPV1qon1itnm1A9qpHJp2HAdCP1BUwrcSffkiSZdpyAU8jx8NEAkhSVztSAizk",
  "key32": "63e7YzCxQ9LAaZB1k3true6VUpqYXAfnBCi18og1AEWWAsy1dSWE2NiZfuHBqD1rVGvUq3J1LsLq6a5VV8vMETP8",
  "key33": "2cY6hiBwiNs3fuZBuRN7MwTnZKMu9tdq4eKjjGkz2jXd2Dph61tmERGQyVvCsFLMFwerbr9Lk7r5LvEzqv58QtbS",
  "key34": "4ncxabHKFtfdASiujLZaL7SwCAe3hD5V1h26T5jdZXefBkVFjjte7R1qTYZxyX58hdDsCNwVFKVBQ1srarTFL5wr",
  "key35": "2KMCJ5tU1ZBe4XL4KUigLoazQnS9C65H5pzUGcGLEG6arh7bANXcymvmCkW1SvKZ88rEsfd2H63f2aJNcbQEpRj7",
  "key36": "4fsie4StFULJHZUYD788Pvrj5BaUp7GHwHWVKWoNAdchyvRJn2GLqhcK5GWvgp38JjgHdWtAHhXtydo68D7ZHjkP",
  "key37": "4CatzBxwvfqZvrdGtyTWU46idmddVuG3kt8HgskSZpCRe5eKTjB81cUY1obThxnFFPjQ73TXjjFpjR2ACuqWbzg2",
  "key38": "5bJopf64D7C4EMzDrC17x3cPFuMXGJQYLQVBoaja9imGHGaLi1ijVnMmTRCdnP6ydpBpVm6eGnZLwGM6yhUmszkh",
  "key39": "59xtUc4qSLAu2YyhwSyRhq7pZRvAeXgmJQnddPmxdTS6CEu2Rzdsdw2KUgoeE8rfj1bPTJt5gmjisUUArN3N4W4J",
  "key40": "4FnNojUz2vEkKLVMCKmBjQcYSNcZttrPKVqSH8tgWmKgHsVGQWdYhtRzbmG2pLjxY8C8EwtmQgJVoed3fyTnoyqx",
  "key41": "nzCogaEpfCSWJ2Vn282hn6jNmp99yTQTjfJimd29z1MqpZcyb5hUwddFzgwewTNhQeqv7uX54oniTfQxGwZmV3a",
  "key42": "4CUeEkTvDeH2JSwwgab9nSdMC2ZvsnExPCuayu1Q6hLhPdTQHmBf4wLZBGJY7kPZw5EmcbjcD4FxdDByUca54jw7",
  "key43": "2igBaqfuggAF7kuYWphbsgyXBP49tgTxi3PtTjSt8uVehV7bhjuxQ4fCJpyEdKniYrr4x3Pqbvbr4wLkRD47rNhj"
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
