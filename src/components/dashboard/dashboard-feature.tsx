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
    "5kMd3SQFfJSaoSNwb825bP3xArH5wBH7kUxZ5HPaLd8ipDY9fsrEsHofRewiH8cx1ub1v1rAyK9fkMjGnXJmRMXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZSg7pHpcPhTzd9yJRoKk3QZ5Mq5YvXpVADWsFhWe4UEa7WtA77Wkx7jxR8BDqe2JHvNvDdAckb8bxwtZPN7SCQ",
  "key1": "2CmQarP6NggPYCjcjEPH6Pxqa4Y76Dx234pgdHm2rUaqZZSd9NJoZ1ZYTnzheGpcuWsio5QGQpFaRjjqqpFTCeCU",
  "key2": "2VoivVg5A1ZDxrEe9XBrMNfGY1bubwmk6MaDBGfCwqXwJZhZzdUaWFh4KszQkTBt5EXdrR8vELsEMJTA6P6d5CxD",
  "key3": "2J3FYBPsku2cTJLV9aGHVkPk7aDuZ6tiVmUr9pAsddi1VFg72B81JyWaLtpodC9PAkmWcKrH9hdxMioaZJtWXETK",
  "key4": "3awt5a27rnng2HeJDCCB3MFugR5Fp2HUcEt8cyPR52bFXjX3HPw3yaY5PSLoNbfs4jqtSKJ5x7Q8f3TVgJnuYFdu",
  "key5": "28H1yicgkJQFCUxzsZ5TmKGAWTxc49Cn4xhCVq9ChNPTTWj7jHTbpDHKcPbMRzfNuBvP7o397A478eodcugyEte2",
  "key6": "2NFaUU5wAAf3JD3bZoo2Z4isxC1m8jxrotUU8K9iLzNMkduMmNcbHUJHxFQQ4rGcywuCxb2ezcVmAPfWamVFA9pY",
  "key7": "35k5b2hBZsU34GN5quajpMpS2K5KQJhZjrkYCVQow97g4rJF2UmEzYopxdnohfHGGrseA48HW7JErkcnxTSm9Efm",
  "key8": "2wFLNTiiCb8Xq9JP4kNvFr2UobhgdAm9YsdXM411soTo16zXNcVwBYLVCnRmCSGWPNPXmRkebcE5EZkZppxt8gG2",
  "key9": "42PRqQaU82dvTkGvmHTS9iKrR9i7xmc1wCKpH34Gm2vBw5x6eJmEmSJpHsFCq47Cqf2YnZoUQkNeaUnWzHjRUrZ9",
  "key10": "4tyFjJEBiXKHZS8wgDXitTvj6mmhL9drYfdnkae3WiJbwWTTeyJp58vFJFVfhQ4N4cN6PiqjQhBHMcMJfSveQkZB",
  "key11": "QUvd3V225f5nhpUjDeNaPyq7PLHwMT5dmtVACv5iSwDqaeqNVgUqjsVP5JaVo9Y99uwSTAwkCdLLSg74nxVngXx",
  "key12": "3zSq6ohnUXRCvn2Ag4SW3gYvuhAxeyFoutf5J9bDBveu4LVWpGtB4wXoWYH5Lx9BEBb9MAxHrX6rfqJVuKyL3H7Q",
  "key13": "5NbAYRAVqqGwcwVPgj6P26r7ibT2oqfzU7AjcWEcfDva7AFfmBr39drkMi3vRYJ1MeN83tnguaraVkaQXHpew6TK",
  "key14": "2yUMNFZP45GK2z6RuS15m1bk1xRNG872H7uQpgURcbgb8Lz4bVUcCXuri3kZgqAHpWDwjZ1XgvKuVqeCD6PnoAgi",
  "key15": "ZkcjwvJD6ZzDMnvmJesFwXPgvrxLMsQu1RkfoxrBeFypKFXWL83yzu7vePt5idh8XxLRDne4iEzyqavCkDif8Dg",
  "key16": "jMfACv9yEqGQT488f7i75K5siaMTA1tcaBwuUcMMJ5ACfMgZxG5mRRiJgWMg34i7iDNrFvHYmRfRs9K55rBCNay",
  "key17": "avqhj3mycw4rdJNTzMSDf51ySEf7Ed9MjMUnaT96pWwHA38XbaQMYixgjcuwP5s2QSztijGun6Us2Rev4z54CWn",
  "key18": "5vp1Mvq8haLeivoxnX19tux2WREHwi4wNStEK5i1wR17ryYg3sRANuhNNNkxqCTnFr8CWWpNN3bPZ2WH8xhBU2Li",
  "key19": "5vVN7gM8Ac1fKH816LsQdohwxrnr4zsy2L5eyaR1MvdFtYvgrH52gK1YXpZdQAbJbDM4wL9DLmCpSYqNYYf3vYe5",
  "key20": "37dGCePDoDZ4KEprz1FkiZcXCBYPGr7Fs5vQtdrHzQhQ19VBAXuwcaAB4cDC9bJWeeMST8D96woRLY3bQwfahqkZ",
  "key21": "sBvPT8E6iS75XeAe4hVbdu1m4ZVtj6Savo4yBXjrkHGFRTnjiEc8AQcg4bYP1GufZffcZL8CF18qZC1QPFKijFF",
  "key22": "38x1hdaxbaQvDHU5eQ9Tn1FbpwXFmi63DzpFhVzYbyhUVTyX8HbEdFWp6NyW3J72Zb64SjQRiwt1Z8uQi7z1mrMn",
  "key23": "2MgCZS3WUnEvWA28gHQbaDeoDiRkVHUaqD6zLYrjbZpwpNAxN8Vd7iNZGDkfKSQupLN72pbhhyatoVaRCPEokay4",
  "key24": "2fzrA6PseHTRupNo68EQMHU6PCRgkEe9uMVCHwLaezgbv7zE55yksp4hjVjuU4EQ46cZRcBWE9PMLQMNSmVZ7krh",
  "key25": "3RXmJjuuCq9omcRxrnynv8JoAR1cyg7yozyhU6sXBe2RrsvrgLPGnFW27dC6X8pEiCdCPPjuGNELUaT31P5WLBnL",
  "key26": "4S9ta3do2hpWvkPHm3hDwegN2CDgvmRykMgSUjAL5b8TTwwNy4ryAp3cD1XjepW5ExsyVsXoJEBSP92xGwcrgypz",
  "key27": "3HXdZwX3PrifDgHFUwV6zmQUcATjwbHNTLBWhazQuSvauXevB9oQBfFTXxnEpiXqmyXuQnT6nQvFxoSDS7v8pwor",
  "key28": "4dny4PFKqJnoctMptGzNFT8xkfutSwontBSJdHs8hwfMsGS6qtpoBPkEz3ou742MVxkHeTEHwAmbjsTapBnZbVu",
  "key29": "26VW6RPk71z8ebJJWWKym8qpuWc8aNGZYfP5vkXw6yt9KH84u66R5rFExngZLtgdQ8Tj1naGXsm37FyhdzEg3raR",
  "key30": "LeYkESsR3jn7xsoDJ2n9mw6g7AVLEUwMrvDksXuzPDcqh1LRPATsd4W7cVHi4Mf3jBhEfPCNhJd77mK3rqXawBz",
  "key31": "mGVZj2Gz3ncMC9MLbGLg2efFzQg7FeKzxRe7RW9HpXNE12Zv849nbqvHSyvFjE7KVcXXVCFoDF8xoRUzN5h47UF",
  "key32": "5FAdaSYcrhnjCMBN9PPdQHYHQmHaVVk6p2RQaTF3S2TPFwPfzZaWU3XbSJ4cjhRJDUrVXGna2uHfJLCq3x2TBMFq",
  "key33": "2L1QTjE87arCbSr1Kyg4N6CQ1mkdnK6YgdZCue6AEUTFQSxJYxrankNyWc5y2nSk4CeZj5H8PscCUxdARzJxihee",
  "key34": "QKatD6jhXRMMMuKbCHfTMEW7U9Sfx4rPE4maT6nAnFSuiRzY14ka4M9G8KLjxgGnsNaPoDJYUpXdrQjzqJ4Xqet",
  "key35": "JiH3WoXjwzLF87ey5yEJqtpR2cfCWAAE3sbRzGMpGxKMTiM5XmDSKW12XSyzp8cyDdkvutC6C6WojR4WkBj3LaA",
  "key36": "4fWASE3rT8hZp4WBZrNDaypJho6Kmnyt4nReCFFUCdfGfC6Ywzr8BwoxD6CJvBG2kthkarFSJe4h18GSZeiCsDNb",
  "key37": "4yZA5do7bKLHyCBZbCq8Q1JBYiEWaeYSbXUY7UxHGPAFTAFxZmMz2yRroYKEeLAps3EPAJw8qBJogRe7E8aGUJ4w",
  "key38": "5onmLn4z8j8aVYmUngu83cKWqxUx8CoGjKwiLhk9FN17Zo4a72tnRnt5PzyYbascqqZx4TTeZSf4c65tZpjEBkkp",
  "key39": "5woSg3pfF7YRMkZzxxnXAbTY61hJGDqD3zBzvcvNsGs9VrKocBMyf2VyvhUCjamfjjmeedY3xiBhS9ch7SWtmzjB",
  "key40": "26aFsrZzbWs8zMzAioeWwsCqXgZxPFbj447jxcTYFuvCyP3pdZC7CrpdPYMfSzJCZ8BFwcyKPnnQmTewkCVJuEwQ",
  "key41": "65e5Mfr9pddy4JPFDUYM9tBLydmrVQB5evjTZCpXTUbEDEMuTW6UXrcaWDjnGmRwoiKjS4x1BFAVVwjvziZhpBNS",
  "key42": "4eoHUk4KQ67X2Pmkt6gqbUX43pNZ5DHCMijkEyzwoVhVxKibk1qmdqiFC8CBokRYwzbKuNK4FQu42vNZoxV6uRv",
  "key43": "5CZQxxzrVGGehLhs8APfsYAaDy74x9F51Tm5urj1xRvRuXkg9mqvtVmPmeEq5FidZGU8PuaSx4mT8D8yP6dGWhoj",
  "key44": "3upXCWuoJq5EoQ4BMQBjSWx5u7T1vwoNSrivg2mFpoFP4cCr8DCPAVPPizrAt57ncxNbUpxM2zVza8xM8Zv8uHvE"
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
