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
    "3NMzteCccaEkCrzAmhxrbriHJUhRxsDZ71kmsd42q8VDqCZAd1sR3yCyYgFZGn3GtLVBBTRiVke7QFnRYSN3wDxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DYyZfvoK5iQA5nCXyNjmigGZK5ogqHEZx4qTTrceTrr8f53e3Py4vq9G93AjYV2BtW8A1VVHmMPJC555LMCsRuo",
  "key1": "66Jv3Zhd5CB3SjomDceTpH76Ng5EyCLCsw9idvtaww3x4FadeT4RDQUYG5gg3G1xhNZyFXXtXVMUoQkaXaj86Z6Q",
  "key2": "5F6LCYoEmkFKRqXzWgaAnhUZ19M8nJyM9AEdwoJHTkTy9dpJa28Kip1YJfRJYUCxkdbNVkQdANSpkXfJGAyVToBR",
  "key3": "5PSoDuLZAK79vP5D8TwTgBB8ivPqNqbRvGHsGb4W6NJ4mfUE47pmsTRx7brcLjJuC7VqFyA64wkUtraXHibqQRyW",
  "key4": "3ePHJmbDM3nfWmCLe1dqCZkLMWsao5uaExnXzbEa4zwY3v5HSNH6CQpD9GJ1agTanXHVzTAk132EmE9nBAD23Ukt",
  "key5": "4sMvvsY2RxgipYv2XnsnCQpzjoYMSSFJ9CiV3nFmjAcSrDPZVcdzjdtZxhiS1tCqSBAKBLUbzapQGL7sPxvBapkb",
  "key6": "2613XRwvNzUqiKzg6Jzozit8p2ch4D6FZugZ7D6ALYuKsNq2r58256Qc4UHTmAcUtVeCkb8kbZEnaE7M6VS6FeWs",
  "key7": "P5yx2ZZGnReF4doSM9WQmemft2msxnH4uY9iq6vcswGx3uX5S8UAejWUSgRsAzkAAV8FAL9b4zBSBSB2e2nmhhE",
  "key8": "2UKS3TC3KamfF5YbFx3VxFXK1SMYEJQpR86yYKgCCcom53sodY1CRwAxUk6N3QVTP238SmvvbH2qzvwzUhyJcp6z",
  "key9": "24xQ6puf96kJaqzbhFWNueoFgAbbDtwaWUnzMMkzQrMhBJA7VptbxtmQntTNv7MEqffiFir2NEY1iBBjejKS4Jv1",
  "key10": "mdgP9BQHBZYhFqTiSCNYtKyuX8ZFoeKHxV94qBLVyWvAdXg7mvUysYfc9sgox1gRrimFVwZaCFjDcnxEM32qwnJ",
  "key11": "22YMU2QKitZzBaaWuaqDKkjprtquM4hFRXVAStWg5jHqyJK8Zfiw9MofT6S7wNQSwJbNt7wViHgf5j52g674KKSd",
  "key12": "2dUWqZ6XKTMfHFMcZFqp1njq1EecbhmUxiHgzNY3MooTqt5h3EFNnHyxWRmrTeQ2BDXmrMWwy2zrMvn69Z7qH42c",
  "key13": "5H5eDwyKqtJWJvShcKmLHvVc2Hx7VTRu7jTrHzLaw1ewzf93btfEHfJGNwNpeYkCAUFcLRGUUNuozPMfCd32LBNP",
  "key14": "imfVx6HZHs4VQRCXVtHQycmkHHQQc7jCPGfogh4o6Ke9fWAjhMp7t5WmAGjfBPe3LTqX2rTwveNqAF62jfSXGhp",
  "key15": "29cx1twkUWdk9Le88y6vGY4e6KbMen6jz6g9Q3V43SkDCFN1uzwNZ8QqoymjfMVGrw45VNtTLhuagTXYRqKH45Tk",
  "key16": "4QLTd1kLJAsdDDGnWj2P9ho6WLHMCuS4cuotD8dgZVTkaTrtMD4Zxc3wCUzb7pfoW9Y31U6EanqmGz1uYbGRCqHg",
  "key17": "JBnfEbWC9korXxiffexVFFtjbqR7JZyZqCxExruJtLoMJ8vku8wo19aUWUHXGNtzYFHKPLpxFgHAVtcVR2DQ2VV",
  "key18": "vPPHeyAZ5DG2EtPJVojCfxEwVXe3JCgbvum7Z6TkNzVQnDB2q1dBEVFvt2DossryfvkzZnxL1B8RyymfQwqsWDv",
  "key19": "43fGdauLqG3CBzHbZrQeAKVr5CkychZGNMTaHy2X9Ldhc1wdKknxERP4qEkgBozGMDwKbpaV1jQDHVBkh59LYGVN",
  "key20": "HhrsmGtSyApArG3UxxgCgsEph8t821A3GZEsUqM2JgejvXbab8jTFQE7jMeSxeBQbsvJChFRbMa3NpCuEJzJXcF",
  "key21": "hG2ewrF8zzPu1pEN88bZ7xsDWtHi5GeMzk1hNo16HYZFetLwtD7EXmzvFNBtteFBMpoj8YRaunyDaJ9zJuN7NQu",
  "key22": "5QmsbsDn3WzVCRyFx59P2PwWSeHeCopeveTuWwB4jYxAtEhfNZ1YC6prmQhh3abxDoviVZMq1UpcvHZECwPanpe2",
  "key23": "Hwjb3FCm3fjsMf8k7TdrzPfcWXmh2gHGCZx4zjknVUthND5JNYWJ2f21GAia54NPEWeiZ6MCwcAMZeH7cvJsYic",
  "key24": "2Z2Gxhpt5xHgBfhgarVVLpCJrQ62FU1orHm5LJJhTEioVvwpicKAp1qk5tMMsgCG6dEN2KruByyc4isMFm8YrdEp",
  "key25": "2E5EZAQjwZhxmrnC3ngrTyr4sMdTHrrDJf9zFd76B6Va4YJ7WvwAovRYnQKSeZAR6tb6rvjri1cfVtmH3jhaL4G7",
  "key26": "3jdyDji1re9XnmeGMPHADL9u4LvjFQNpq42hGPP7KMYLXCpfdLNwctHNMHJXLQxJAgqL84BQWPib7NxvsyNRDDKj",
  "key27": "21pUgJBVAd2z5eb38i4qxZwmi9uGffsyyGdfTmAmhNHCRisD9J6yVb3WYiu5VUZh8xwTygP4UwMJWVuwnNQiWd1o",
  "key28": "2R9bEFWJXqj92K4Z7bXpxAQN6kwXWLgHJtpcFbGDKZbsQnVxB38ptmzvLTrd9tk9YotGTAmsC9KMAjVMoVxUCgZF",
  "key29": "4zTYDr5Wkmuyxpkq4fdr5dx1YuRrq2r99XtWo3YZuysJQEQbQm2oSGci9DB1m6S4QwTLPyNgWtS6aji8V3LdHusL",
  "key30": "31otLEENBp9C6VUvjnjqbNpgPhE6mSh2HzZSfSYa9rLjuEPqsyaYxZKiyGgUP9ZAVbC9yytAUFcehnDGUdxakfbj",
  "key31": "31Hc8PAxr2nbXYNHU396rPMkW3UoE3A5Fyvm21xZERiC4QEnxU7r5t5Xx5rPUFaZz8crxrXZ5NarRBJiFo4pEDsF",
  "key32": "3Q2RK3WAPo5VuwJT11phHHM4PMk12rKR2GP3ru9ovnk11ub99CpV4q8Pwf8iSf1Ujn4fPXNGJ61BtvHp2jKa8omK",
  "key33": "21mRqr9W5pnkoNCHXo7Y6L6xpQzTVyH1usMBx82pAkN9BVqxYQ66R1HgFAD1UH7Dc5KFHsvfpKixXrf2K8WyshjH",
  "key34": "LQqYM3syeLEUQN8PhrkARzBnpY1auDtqXzhrYWP6Hozr4MaFDjABNkyysULfLJqmcndQLR4ukqqwFcXTVnukrBj",
  "key35": "X7jCBtX9BqXzZZN4dZhcNNhjXcB3Qex1dXX5Kg8MyPkjkA2Jq6RMZaKY8eoiqUMRzaA9CZhDNPjWoCTPvJdx2Hc",
  "key36": "4gdbTzjtEacaxETyJ14aBKkaheZhYLjUaiNHLBNfSzkR6vRMHYUANovRiZVQphSjzrL8SK4E4pGPy9VaG2rHmFSo",
  "key37": "2Cq8G6q9Ta3zR2JAHSqdeiyVg2JUpW1teZAizosuKQe4oL2FQt5dpETPmFfqvWdzHPM45aN285LYNBf2NbbqZhXn",
  "key38": "2ZrgQuH72tfE6byVbjQVecANBfeNnWAXbYDgif7q4t5fyRjT4GN6Bqx8WUCohXEuyGnP1cWe3rikiBtevDLrhnWc",
  "key39": "3vY1UEBTAZgm6zztsEuVyb853CNG2VeZ1YjitVVL62BniXBDfuVGDWWzJHk4JwkmhR816ogSbNrBmufMBorMaEXA",
  "key40": "38RWtBzuTRwLf1MBo1Ev1WtzStDCiGh3FpTRuurKTjAiEPyQwguhqNDwWJLMWTKWDSEAqDxxGERahwJSb2mPoUdS",
  "key41": "2KKK9xnWz7hzdqjLkxmAmDQgqbQAeP68eZXrEU33VMbcjpfoVZLnBueT5DuK9WJtzSaiZLwW2BvVmhNoNJAN3vHV",
  "key42": "2fmA6BaPwKrePUAzmcDcDDGTUjQvrDuYLZKdnW1tq1t6Kx2h21ExJsvyV7MCDe4BRByrvtky3QWAhar5nx6ZboLZ",
  "key43": "523t11iJnvjsGRMW4Nm9nzp58GdFAh7Jt8wKmxqPSpVRUtPrKWe64aYTNNzhkECrrB5j5bodwYWbYUCKmCmD1qoC",
  "key44": "4opVQuypwJxvFyfR2CPLBzfoBm8zB8uGgQfUpbzkrzuiERrPLgpT55aF87vo6RCdZDqv1yycYjaS32ygmtAKquM2",
  "key45": "4FZsUt1sovcvKGqvpbfWnaxUWFte3BeSKYpBzxmS3Z7qnMdoCZYQGqYpdw6KZc9EsHyDbgAuxE4NQoQhov3gwhdQ",
  "key46": "5AX9wqHe3vtPC2CLNyKETWkui8EXVaTD9uBzzFpoz916GtTDaNmMRQr1279uk5VUGP8pqnoW7tTQPifqZs8YGyDh",
  "key47": "2Kb6fvM7Ye981UkaFiZAiKdgNnWQu3mLynF6LTUBATNWCrZ1Y3seh32gGAfjx5E5M4Nm32kKKXJte1x7rBmmp7gg",
  "key48": "5bw6LBncPSo8txN9fZbpk1ZgbK7UX6oVJGbeRfkziqVEyNH8K9MxmSJ3E5sz11xYRKrod1PpsatnqNXC4tqtZdy7",
  "key49": "2fKidf2rGizUyWZChTVpyRPknUGorMnvRLtaEf2QEZzWNAWLDS5ek1sAtFB6xY4UX4RNQTLbvTmdX5CUB1NedUHq"
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
