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
    "3ccAPmYNPw4VwvYh1VKwhnNRkZ5hGVGgzdGvWHXgF74fsKjS5KtwBKvjwht89WWaZHBJAQSW6VrkTiYaZb2NJGvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pj2ua8SmqLExg5J1mFxnXiKKrRh5DFGRtXjWWhRs7UcWhKCvPBZ1HUdpxmMTeAvLCe85jSdWoa2uuHZTYyi99aa",
  "key1": "51wZ1yuAw5tyuHS2qddsU3mEF6AiZceGFNizvJvdVedviCaVAvA9K4oCu1uos2v4QWRDvp48UfHgCgaFSxNmAiZz",
  "key2": "2N4qS9yASJd8ysJnBe5N1ZyLxNFpXWGFFsjkKSUiCJ2ihK4CUFYUgMxJfCGHF4Pp7SjnvgiFSPmRRMaUoSCMqdfb",
  "key3": "3gAvaMX5SPPeCn5KHWW4p6XtSoT7FuWscxXdwbqwKCR1jxYk8vxAcZEjcJkHHtYdV1ksWJD9TxVce3DDvmQLFBv9",
  "key4": "4nAJpDtsWNyiJpoRPAxZZybBUv8bgsRsgHguHJs5KebS8JFmNJ73dpSdTWvVN37eNAMhVs9KkbU8a93MW6R3UwpJ",
  "key5": "22ghdiNGbVhR5zGCGULDjmhccyzBHnn8UMBZGQhicTZyqD4TnqUieZRLFKs9vbiLkfZPWbR1qpYjjP43ZXFgg3bA",
  "key6": "5bVMnmUbqguEfNgonfUUnWmUb7ZtjkGhKRtrLTYMPXQtvRrn71BuMdhWPkg4WaRYhvsMhPUgUUieTPh6UWE1X7H4",
  "key7": "3X6Ku8pTmEra7Kpm6nvQJSek5tcKcxdjDocgqvq8zNtvq4rRuTxwMt4ZKM4RDHfHbMTNEwQUgiZ6tg45YyBvpbVX",
  "key8": "j9t2WqSRP55ag1ewU1PSMSiDvWnqejyxJGbsidfaTxYMo7v3n9yJTBRKQGHhMhxaWPBscKTXyLLg19GgSDMM2Se",
  "key9": "4QuigeSyzbVppMi1iZA3Qht4fjPj5T4mVbAK2sCWCVTXXehx3kQGKTY6QF1yBsukM6me964yBdQG2NKGRyNMAMoo",
  "key10": "4rETpojhVKgwJZt4rEwAyQPFKVKtEDDhiiRmqyiomPXVGtUsUpAJ4oVH6HBdweZPRAjb4km1x4yPTyPr6cBPmCi7",
  "key11": "4uCfNH9YKCQZ9UG6AY9ey2A7myjyaHoVRRoancSLdboSceXQNEwWQ9fcLiVqwfRUPU6xt5sqAPNaofG9Lvatqo2u",
  "key12": "22bpybXQEdemgeEXMQg1QnmUzDx9jZ97PFMVVAF8AN4PujqMTnDWFxViSwwqFJiR6y8qvzEe5rtce6paRgs4G7cj",
  "key13": "48mA8eHuj3zF8fKTm4hrpitgA1Ac6Vrufmt3awmt4fEhs3Mim2qkGH4zV5Hi3EsKC7XXcSW6JfB3aVeRAKpJMCWf",
  "key14": "3n74o9GvtXAS3FXWBGxLPsqtDHu9D1K1nYB2MvU7ekFNqqwprK1ZVaE9MumCZe44UJbUCxxGRpiwnt3aQG73Lgmk",
  "key15": "2DkkMbFHKVJgq7sC2EMzd6A4ZczRF2Q6Vavss3CSHarjpKHNE9nyu4DSTjMxBDbuZaGgttMbfVqr2RRWYwW2vE5T",
  "key16": "5reMWbBy7jgu4MZxKXUmYpkKcCYLhZawtMbGccgdH5CGBUjYW6t9fghdBdZriRLzCVbzq5tcbvtKiViu4ANW7qwF",
  "key17": "37WSggmrmT9ooPxtm9i5WjsGs7ZsDhVwu4x6gACotRbACbWrxSAqRHzeW2rXto6S1DruayU7mP1GaXdQMAGpDDLL",
  "key18": "3f4fFsjCVSQaAw7Ma2X4vBMZ4pj2iPdUbb4vxbFi3D92BNhWr7mqC6kaPvGXZc9maZoLNZUG8qtKDYT5w2PPvWYo",
  "key19": "2P5uo6C1nGkSfHctH47w5RtN5uHdDhp4C5NSeFCAUG8uVovmAoNvgXZofXurhtYatsff2T67DjMhj1XRKNmKseMD",
  "key20": "3iqgfVULEMb25h3KeEacyFeXzzVKmBjFiZFefvaotiyADiJZr98eSCbfxTiiw21TwwMYyCtbiAfbmGmAkE1fBbMp",
  "key21": "4C4XSXcVHtrA3sB3KQaJbshb2eJyJuWQBZgRWTwCtwUAbP3nKSJymERAXhFDSiWeNNru2avHVFMdo6nsX2vE6bLU",
  "key22": "m2g5KGb3KUN1cHq33SEDgde3Pea8LUZQa52DEGzCKrrGcdQCnBfYuy75Fuznu8bMkhEPd2KakLjJAzCbSowe5uS",
  "key23": "4Jx6fBDXdharccJPkvxMzH32nXva2zkGrFtSNioEWBKR2mATdVe3wXW2SneJjUL5k6zjx9iUUDo6LRG8RRuo3T47",
  "key24": "hFqhyPigijC6qKwRz1VziJYUsKFBr5Xs9FmZ16E4jt5uVVmptMz9oYn34yPFipn4pNRuSKC6T3TagTVZ1Mvzzof",
  "key25": "2gBmm3E3LRU1KVcNZ7EFvF4fxzBBuxUzxoTAg29KqbAxWwoTXL9vD6ehnwAKLa8rULmjgcisK7eH9BqL6vppK6AN",
  "key26": "5zVJxAobjRB3g5o9hCyYb5nCXzmnCZNygayxG43GB98niZEDiWjpmaxwW5c8PvxShwKs2czBbjej2HfYBP2NcjKc",
  "key27": "39Bt6kdG8mBBnCR1KiadWfpkxhcSt1sq9ogubGq3y1MbWAA5KnnaTmBpet212cUnwjkwKRmTTyNtYcNaYaeJ2Hyf",
  "key28": "2wrkHfVFto4VoA5uW3maiyce9Wdz8PoSsHLdDb1L8nQucJPm1ys9ChTBSYm44GZWsS9Kf7jhKHbbaosH7TFa7EsX",
  "key29": "39bTzQwm4x7SxH8HAm16pkW4vtcb9Juqxysts2hMtiShCFBjJhWy4pdCaYsckwbiea81XqHV7QmQid5EFkTu4fU3",
  "key30": "27EWQFKRbBeC8h835nv73WwFooLQzXSAxGiNnLEaLjsfzsy9p9VJhQHNTvws2cXmM7CyJQBRPE1JdKQWZAYAM4Yz",
  "key31": "3PPDBv8qkrmsn3SfFvQSMP67pZhoo2ysBzpuM7G8im9vU8H5zNYWpxnJVu8Ur9gFFBDXGFWSd4GhvmPVoRrTV7tZ"
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
