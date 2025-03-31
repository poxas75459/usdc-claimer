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
    "5wB3bhM16AE3iuGf8PZxpyqQ3vAWnwH9yKaKhp7orgmuMrcYAm8Xc5h26Pd1UNjPe7KytGDDaz9Q2juZd3HeVvCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnS3jQ3Bh7oYigaTREshEKdU8efgSme2aeNbcC2WsHHHxXDwsZNGJxYGGiETJatEmXwvnmDmsahwbXZWjetpc2D",
  "key1": "4uEWCuoMcNK6qqG8SjAcxpPgLtMhUhFC19RtYEiFZQUk23PnAHuygRx91y8ZyuR2BWqWQa3hhFE8ixxLLjxmJDQ5",
  "key2": "54wjUf2gANZRU2biANHD6fX5JR9sgL7dxy3g1TtpjpkZ935geog7PjrxRu1eh656PMKNKN5pR3xnPExckXJAwsET",
  "key3": "49CSDqw9Ysb3gScL93ecn3Z6szdZgLrGUmWtUaRRacV8iB1SSfdqNkcpCdEQ45eVAikepXcMinqN4oCyHdE2xURP",
  "key4": "3oEskUGZFxd1YvPLPbLnMHHSQ6MJXNRyqnCT7nu6RZBFcaf1EhatosyHD9qNtBqzizuJzCKMHfwsgJT1Zbcw15b7",
  "key5": "5oXYxjw1bN4Et5vfjxFf55KFCj69VzGMhSzGnjPSYeYTiTADrkKuJHAMxbSDC7XLBjm2Xegs41iKEtdxVAJN4Amq",
  "key6": "2PubBQ4yQb4UWp75MznDyf77QxMdVCnppucbdN6Wp7PFEoNcfdUtaQrdR5x7kKbfy4TPobUduj7j6qmTmSWJpCSc",
  "key7": "9MyvFEw5BVqByLx4YWfLAMpwrXq727ivzWkaG3dFZqrC7chTkJf7cRiYgWqzvstkM7Voyo1urS2avPdieZjRQci",
  "key8": "xN6tQCXL19uAPWnbtwPGMUwzxV2MeKQARiDvh6gcGnoJVuSSgqMniZ96Fo7Azyst1xHjB68xcERSfxoXX5aUhEr",
  "key9": "3rRfQgYZCRqZXqFGLUPqwXmhCCBmrwXkA5MgfxRLt6buP95seNkG9vBmf5GhnMhau1pV74ucWj7YCw8b27Go6Gux",
  "key10": "3iwk2qHnyvGVCFEPH7K9prukoNvfwvdwFqCbd63bNEbCfvo5QTsZsKZsVgWytbjgAQNBZfkUBTFmiByVXv1P1rMQ",
  "key11": "5UXqRUDfQxvUEFDQcyqrdTwqom8yeZ2i2BtBKc7RVFt51r5uecnUeN72rRU18UjxbafTBbg58UJYBfUDo9gBEAoc",
  "key12": "3svHm9wCGCRFXLesptNCYnMtza8ow1rJPekUx3rifTCsrH14hbGGZWyC2fvg8KY6eNxRXBEu62h6qEHGfqi2ZGdK",
  "key13": "5adARHvFQ6rp4AvX7JnnTg7TpTfWFDa65PvGsSL9zgFUDQLr9iFmRPUq2NR5vXUsXRTAVbNgqzF3jdp6s6neEHdz",
  "key14": "KrVb6VQYLQewtchj94MHZ4XEfm9Sj5ZanVBtVTWQ9SNW5CTUKAWcRjkQi8nyCynrkNQYCBAdyQDHLg4Y6H2q2MK",
  "key15": "4jWio8yEV2P7s4vgkkHHYVm3ndsbwNubKwcVY67SNp5C2pSuKr4WqK4zoDjj315e85oFgZ2n2c7D9goJY8HMMySG",
  "key16": "CNLXfmAQ3tWafTJxnkFMTWCC9NTstTmma3zCh8hAEokfFvXbxv8pYENaLCNHCut3UgKftAXReeXMCrVj4EZqARm",
  "key17": "1WuXoo59kEdmhU5zgvqXq22tK6pWyMacV5QHuv9j1z5x6Ji2DT7dRoevLiyWfCEY8stQxhv15vVg8VYygteyTgA",
  "key18": "2ak771mYvph6Zjtrt9U8mUu8wFzcNUMHeg1ePBvNLfhu9d3U7tYoaWZLzd7H77HeNhG9rVcz3e9RZxrBFndLHBF3",
  "key19": "38A1pXzxMkbEJUvKUUjA5hdftWeVEr48YurJhsRMkpp1AVBDyjFJ8kjmrxJeXsgP6mJkGrkEZHKgyMzTpLTeFpC7",
  "key20": "PDr6Vv1jEDJ7ZXeb9dcPFPZrM7cNzjL1zQLzh57o89jdJF7F4Xj7YcYiTJVot5DbpMBrJZn1jd4Hje6TzwkXg62",
  "key21": "4hReKkJwLXZ9z8LTf1HCYs431BkvU2LXwqZHgH1vbsae1hjmSU2ETzJetEvbsZvNe5kAyYSGSY6HRzk1GLDNAEcP",
  "key22": "67fYLYusQprEx7hGTwRn27CHyh7TA9DzhjwqMFkBRVEC68VnoYHSbGuj9wEnoVkuSKAm4AXVutFyKwFAHVjZr9ge",
  "key23": "3huQxJUKrfxQDMzjytuURqpK2VQ41HrZWBkpctSxmXKSLKtSyTjv4K7zKWKx6GuooN7fbuLPQUPWh4uvPWNCqsk",
  "key24": "4DRpXJqdRmpnpGzV2AwRPJZMJmEyzECYL5Nft5b3zBfndLdGLVN9costuifboqoYjsS19bWKRjTcodiw4ghNpwnu",
  "key25": "534S2jF4j7zoytMng3QVdR2ZaK2X4Fj2jbRkvyygJUu2N6j38aFFFixME4XjMAzQdaKUpxx2V1M1wsrxtpipACEM",
  "key26": "4Tbna5A3MD2FL9W1UYnoaGX66T68TmXUqcDxJeh3ZVgkkRhUaXaxK4QAvjznEQ4SRVu9z2Rtujmv9DZUaQav2y2",
  "key27": "42mgUosB4awyfPJQsqqwNjfSwuSH1Y1NNxjBdZ2cWMALVXDAMMTNhr3A9524XemKAaN1CUmqhrtU8kxW8zYphQUX",
  "key28": "5jWQXe9nSKs54qsy8DU19TTeYu41mCmZt5cUj3hW1LtkhqTPr4mhhJ5EGCXijNFMtY4sYNStYkmwHieEme4KKJ8j",
  "key29": "4YjiANGdUeQanA8eF6wRb29HLsHtjBhzLkLFaDq6cLe8pfL6CJgmj2PvSAubLi821DAy3Nc2ohV1CgFJtqR34sv9",
  "key30": "3dXbKzniC719oeXCmmafGo5mdZCo5v9TKp3PChZboMfbjz1WyhFh6KqdPkiHCLY7n9xUryU59VmDNZQU1ZuNqq9h",
  "key31": "3LPkYBPJedmfRrnSbp7cWpbbEeJ5GX6qnSAmzR5UzuqNyShnHTT8uM6WXFmQQ3MAYPrmpv4vgZdE4D9aCb3jD6Q9",
  "key32": "3JBEeJMnzYhPF844zqN7JzhaTafgvkBkCKaahTPR2vqkeVFFLeggYLpVJp56Zr3kEt5STRrJMtznFk4xccGhM3X",
  "key33": "2LLqmCAHHEU7VanGReNVgqaGsPJSaqFxU6wKLZ925oXkAuhbyJQuFE4D52c244BFDm2VzX15bx94xyiAhXEcgkVT",
  "key34": "4xPq1i5eYBa6jL8aURRhMX3q8w6DLU2uyAyPABwf3yQabR86LdR4gpqpm9pRQKsKFJU2dFebywiseAXUgj72tGih",
  "key35": "37PvK9F9BA2tKsDfT77DUKmsYG5e95J8r9EpCgC4wW3AbqMhJoraAPDxTQK8SSNywD6MxWXRVrygQJGXaHN8pr6M",
  "key36": "2tFVs1uCTRSvbgu7HAoRyUB29sHHHstK5b6T813JEfAsqVRk6YMMfMDdh8ioc5R5wcinmAgkN2kKcFoDVvVC9xJs",
  "key37": "3dWP3tRavw2MRXWseDUnMXUGqTg91gUkSvSzGSBTyWrtWuKiuos5nM8s3wppGAmXLd2W5BW22eLNTV1gL18fNuN6",
  "key38": "45Huk6EA93MHS8WNd8EUF4Q5r43JS7GXJbqFdAfUU3LQWVrGtYjgnU4ebCwY2vXtu9tEbgqUYHX7B2LVhA5wWqtP",
  "key39": "mStW1kTq6p4NPGQphEhN23DCVMaqLhySvyzFct4VcxRN7Kg4qugnSqWrmxMnj1Y2JBYf5ujwdF7wwTnq3ELaFN5",
  "key40": "EukY4UFyDmbPDkgfrSNJoiVowrqts3XwBLiEPyaB1VnntKjra5KA536dV1B1FcW3rBJdFZZeEnw2meaPVVq6niy",
  "key41": "4uTMR83DrQJUDfmsfkYm9cjD2oyGz8kknHXGv1MV96FHvGzFtqToo3rFxJWYdUpDXH2J4TLDF2RYHtdHZYZpQkYZ",
  "key42": "2xhiabRyLWWwDgDkqBQpvBwwxYnWEGnvR8iyQ42Lm2PKM6tQqzLGyXSMfJCQjfzsBYYMx5LZJiKTntcVMarrABRN",
  "key43": "2U77HwbVzEHavNC3ZZ7Y1512wEmi5JD9bsVa3wJBnLwooZGHevTiNr5kkBsLFXmnuTEV7nQuujoJBzuv6grPdZNJ",
  "key44": "z9iYtyTu5kp7UQ2HCTaJ9YovoLe19MkQ84BLF9MXgCwyvMo2GNHiEWDNT6KVcaPZG8Ztk5TD6NNx9VCNY2PWVvU",
  "key45": "3cQGKMXueNpcyJixUmg17t1xyPrDs6gywA7QiK4vwajM489h331cduLQQwqWkexfybduEeohuCH8Eyw3DN6vM8dK",
  "key46": "2xdNRj7iGVHQGpJKCcxCHMtzsiUihDw4kSjcMprSEgGTFM75er6bpEUPR8yBgYYHiUaowr3z35kGzxrFmKDK3Zrs",
  "key47": "4uMrC8kwCWoPCGYqY5v77xJkWZYbScF3Xr7BAVhXv81LHHWJcv25ArJJdG16Ld1NW6nZpbpFo1xR1MfUoSA3Ncff"
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
