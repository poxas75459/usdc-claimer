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
    "2tqMVUfc5g7nNA5hkw18kxUBzBCWmSXoq1mhFtA3Xbh8tq3FURcb9fmD2kdhtZrmhUB7DxR9zhXYU1jwofWtsGHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iB9KNnfAcn17SMKPprLkA3fUxB7KSRjMEULkdhDMyf1iXLE5rsDmWqLgPaHYqVxGqSzxZ5rVCL9gAdRicmezgtX",
  "key1": "4R4YR7Lr51u1H3DVTGTnqoFngVzUiiSHZxt9r9VCBkQsNjnYZisak6mPEhVhmwoukpsK9ek546mhF2gjPo8AZtu4",
  "key2": "28ewxbty8pHjx7MgEno8F8F3diHyBqMmx4urm1tLHJ2dHhrvjyL3W4d8mtd4sdsJyhEKXzJJmpGHe5kQf8ZmFghj",
  "key3": "33qNgMYkEvv7d62kmndbpS683MJqwSWnywSFetqc7jBQQ8LS3H7bQLp7qWPL1nNxhSNWxEFn1EKsnBVFuL7EnJmj",
  "key4": "53NvWDPaq6jEfsbAptsuf6PmSrBuLhNbhX59FV5pLEcwmdyGqx6cpyEGWjfEZvVL9S6MmGGR1v6LEN4rQhAqxiw2",
  "key5": "CevtGeg3SFitn5eeehBYkqtWFEE8dHaF8nA8NmnJczbDmxiivYL5ErmypcsRbGadBKuQ7LvsYCcirbUsinTNSVZ",
  "key6": "2R6g28cj6uwqVUBMa5WWFTkkpMTzPCwckbLJ4CkpeFaTnLh3RWaTSFheHdjVvYYArBPZEfegC1iNrjBBHqAUN84t",
  "key7": "53914PR4aquuiTrchmzq4YCbQRvLpM1YsZXwG5gzaUNxB9XCDgnHxzpT3QfimMTPtx5po2AKnRG679BXXxo13vxL",
  "key8": "5PLmQQJCMLvMUUX51oF8tUwFiYcD4vnVK9yuJAM951ADaznoaTAQbeqywMJbMQogRG7zGk4cupRRz8ZL3R9ShnPR",
  "key9": "4YgXyZJNynhdAPfii4Yd6nrtJkNEWhKnZVu1fJhYNgG9zLLknZSBFJXwzukFmJcEie16Qmd9kzgRHDoD6rpT9xek",
  "key10": "4v1dL4Aze28dJ7z9cXbu2JrNqoygS6ijaCDSoAwtnMKeK5ut8JFQHizfXFqHoBgoTg5y9nFFgv7xKKyWte1FApD3",
  "key11": "2FveE4ZdJ8tjM16ybfFTqUFeTi1oarh38P9gVTeWtR4XyKKtFWf5e4S9VAJiEcxBNpud1zRjggoFSz5rRBrtwcro",
  "key12": "LLVnavyTkU8v1zwfQHxjwuTzZQ2ZJGavwjb77BGJW3YFo4koeGztKH4goMobL3KP5zHpXqryUP591DDrmxi2UzB",
  "key13": "CobH265EF6QXzywxyzmefv5YcNcDb4X6VD1SjBsSQrxoEjZejYkiZ3uniLvHYBU6ZoZEfRkcuGX7JxYFw3RVn1Z",
  "key14": "3UCQ9L24PWWxucjhop9gAqGReMJ2ChAdHQz9Ax5xtd8x95XuTk2mAbucW2h37JR1jDfh8ZLD5vsorGbfP15XP5if",
  "key15": "436LSPA3UJqb4podjDMLz2sZYbjLR9hhMb37wmyYnmsdfwLgXguQFvHcEEKmFZhR7vjo7cFCkpq8CWrRkEa7zU23",
  "key16": "vFq1c98sLs3h7wStQonM4FCRJPR8CqDNUPQ6H9VyLhPaJfYFMWziorkhCctriggM6YrwBmU8MnuTGppNLzufy6C",
  "key17": "3BVQaX9MmciM2nNom5crL47MM4fChRseV1yird2Ndutx71J7uA38gg2pZu5eM9A1hp2PnTeb7d92AQroK3DVD2QB",
  "key18": "4kTD9ncNxLcS4LTTQad5HAGnKGRudvDSnwa2DbuW1MowR4pe8LY5QiTk2C6JerLojbrnaR98t6MgbJzVjzPkm2bA",
  "key19": "58q7ntTz4xW4L99N9xNudvfGmuabrreJgXAJVfpQX2eJfwRLvLp99fqafA3QTSaRLBLLFzvfWibkSr7AqqCrF41j",
  "key20": "3P4LU29RCbDoGLwPdGvdRAMWWirfShAVJ7ic8BsBpkJ9x5Uiq5AGMCHAcYdDYxVYTFiF5gfdtg7qbAZdVL7tKGiv",
  "key21": "tRWieFppXsf6DWJ7cuRWUHpeioqJwzuiiX1WMSKwK1J5YRFamyDDJegJ6vCYomiQACh4s94de2BZCjvKavhjLEQ",
  "key22": "49rrviXmVrvUVRfuC6XJFe8FANWgbBmqrAWoZy8brvpAm5XoQVDyp1KxZHwkdX51ucqPTGo3was5xaKgNPyALT3z",
  "key23": "5ZLFVy1AuZjmkkjx293i3j8qYbbSYFZc6PutVWbVw5FGKNmyxQbPmKidFSs4wZMqMJXNuYGgN9PhMFb7xk6ymcMK",
  "key24": "3QQzjz29bKBFHgEY6ZSyuaCojyVQZdReHb7DpHZ4d9BM2kFR4Ev2NRK5b5DkUZvoyCwxoaw1bqDyZCULEqGUBP7K",
  "key25": "2DQQ6XsrmFH6V79rfAVBXUWajX1vp6RhktvenXyYQLvvVbj1HLr4GwWjhAFREMRBpC1iUJH1cqnXR2zstaJsywES",
  "key26": "jLTPKJpCng2TmAhvG32quWABN8BBaQNNmBmDFuNCPFVB3D6smmWvu6yTbPgaJot2bK2y2sjVQaYwK83NLTZN6C6",
  "key27": "2KksXJFVXrLYZprUxPANJWWUEbm33XvUX3WcJCSchMoqzMjEnqbb8eRuG4fAYxZUr1TMzjifv4n7xSXiRRMAxy31",
  "key28": "33mqBx4dqgoUUYzvVeuFSTrWJosFCTimwYK7SBQ1aop2ziJe3yqR22Gnsfx5GzT8hkyFo4E1WHDAQ85rreuExrEo",
  "key29": "3SDzuuPfMgwTYprksABUTFD178bcMYAYtAEkNRWFffKkJ8Mmf36zYpDmnNWp7WLPjA3KGfKmCmii3RrxmgMHBZwr",
  "key30": "GF7NTCc6gTjXGoYnoKvDV7C18Jtvg2cGqMogWovh7s7xnyvZ4ubshswhAYZarjhbRncE72u8nZieNUDCi3TkEdD",
  "key31": "5vmorEW2ZAdM5D8qGcofadXqTEVK1q6KnisQnWpNXXYTrKmMbRCa3osv7c4vRLLTpY6T5VsLSCrw692TrwHfTPLh",
  "key32": "4hbJqDgWbX7HZEe65FRueFrSsnBKMtDBNUTJ97LYPpaDdJ9qgz6qqAMoZmRNHGf1ZfnrQHP6dfFz4HJAwR4o6euN",
  "key33": "3Jv2yMkhm1v6zHYWv6ChghgvdNnnHYYSZc5bWSzrjKfRU3gjqE7yCPUuzhcTNCqotSSU13RMLftSRr2rRqoZBi4J",
  "key34": "2VJ16na23fPxXGA7uMjBxFSJkk5Ki837CSv7hx9ssK1we4L2zJcNVu4dpfShKLF6avurDtMc4sFPFqhmyhCRFwhF",
  "key35": "385qGrAJRJirwakRrpHRCg5wtmAL8h2VeJjiHaRcCngYYeuvFT2LZC49SDpxdnWYEseYjXTeFJ7Hk7QYbk2WTCw5",
  "key36": "5n1AtXGNh8MeoxWr3arcxRATqkR8D8pMg3ZD3VCeSmtDag76XHzFH2ND1jYrZvkasjqvLqFjubgjuM3yt2rHcxk1",
  "key37": "2xuAEZvGyZSQbb79bgXKaZm7t8bK2qqejDWDmF8a75UbagaRVmgnzeZDYPFdgzQ9vQ9MxkLiggKLD5vDFatFV8S4",
  "key38": "nWUHYWd7yuQX4ECJyhkxRwykQREvR27pseT6hQzsy95V8EJDGcsdiQW67UkdyCX6omh17bUaH3ArZzHwF86xpZC",
  "key39": "45zsc3ubfb9zpQFuP2grfxL8T36w3qJdyvzMJGDju6BfKUrvaKJuDshddfGx3aMaFzoKYsjFo2zZ8sQcjzGPQqma",
  "key40": "46yMSxvG3m52fnPUGSbLcuAofh4qPpTSMTdV3wS3uAk1YXZCGLMVmAsQz1V7QRNrPVsSA58aSd1LiYdxxesCWgpe",
  "key41": "5cVUNuQtFBRXaPrwShVh7wLcXYx74nfSNBatawPi1mrBTxhDTXkED2w7CJ9HQ6jczkXBLfhdtEFJPjqMvHKQDmfM",
  "key42": "4uuCqMCg7kRZ91GcxushzL659RCmJkRzSfDE6aGNVoXpdoAiDVtNFthNjuMXkyqwVfTuWdHK1EZc9fmwEBETLRkd",
  "key43": "uEjcXNMhDcDhfvSM4Ec1GXueoCUv6EQJgEBCp9fUvQkK3hyhfw8NAbbUww5pQVsCWDqyVcLpbgAywNk53bhoTsf",
  "key44": "5MCCsdNRKfovKDnTH5BgDKZauBMcwsQq4C5BnJ3nxdvG5v4EcNek3RoZFyDW9Mx6Pif19o66NFZB6UihHHYqPd76"
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
