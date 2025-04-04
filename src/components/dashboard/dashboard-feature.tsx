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
    "5qXxqk4ZcQ8zWy3BKsKz167jmu1CNcCdnHBJAzUtq2bcSHUpJWQ6dwbS4aER9S9vLeXkwLjAdJVLwTsGz6gUZq8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqukqCSRyrZeNNMcn6PSV1YfBaCdhAsWJC7CVNqPeeCqKJ681648Y9twxWqj9AX64M6fWAaGgYXmjoysn2qycer",
  "key1": "2tHpB7cbcS1NSHZtnzdVPJkk4tSWdTXDzM8armPABTXxYSzm6MK16RTBuEhxeH5px8oi8NxaCSFR6DKGCEKZ6qEi",
  "key2": "CdJC9jV2v3CuaiTNC9iRMG1yMV1Fvor3oEEPe5gkjjpBcBJzAvV1A4RwkooMEeS5fVGC5Z46QHLDsMmkBBi5tiY",
  "key3": "5ies6Fd1L2mgwZQLs9WB81rAD5zgTRkLNRmAkXadZn3ozTopNvdSxXT6borKFRQ1FULTtHxxSp17LyY12TsQvHec",
  "key4": "33mt3fPc3DC9DqHKeSXQ4Vqp9E3Qfn2ju4Y4sNBWAewqqzP7hFEpxEGNvpEL6417jPiEbX11tSWEgmvbpKXrV8gn",
  "key5": "5vXiyn3RU4t4o95trmS4Hu1DkbPgQ9ndmj8sUSoftmLwzzW8tJsye427scxcPN8UDgptKkCF15UtoArSzvJuceBg",
  "key6": "5naRae5r9XQjCV5yLhVW2VsTB9i9PS3RGsPtU6pNc5eR4WCWf9ovLrWgawv8dnQLLpS4crkwJqEgD8q9MHxuDCdg",
  "key7": "3UX1rUxPjkHa8Wi3Kh1h7zkXh1ERFu6FtVEf525M65wpUwNxnMxYXGE2miCd8zGzMhzFDBYCrwBWXUnqpPcooTH7",
  "key8": "4QfWASbAAWJ5zoxC69f4q4TmdznKzesmsfFao8RbE6wX7xFugDNRpC5L289enqEwGa2XM21ahWjLfH1HziYa7pP5",
  "key9": "5jxdrBMXMb1dUB8U37Fgr7mgbTqWYAz2X9dVsoamciG3thU1hWUxhn9ZT2YqKVQnzoehHVAkWHjTvLog9MBEvx1e",
  "key10": "5FVcs3VMGk7p1kbjuKokQcyFARa4ju7iJeML553BmdFsMGq2yxq31XDsqS1v1cchCQLPFEWCjZfMxVfYXQux715G",
  "key11": "hmVtW1S6NfgXU57BHhCYB5JTZb7vF4RvsLhpSQ4L8Bh6nDZXzF69EF8E3bG4o38CsBYQa6mDwUH465M81SqsjJs",
  "key12": "jSVKYbuj3Ae3rA5BMujnkoijTxSpHXR3aD5Z46KsinxVnXtenPTanWcPQohZwwDg9fDwtNYauq19CHp68UHiEUN",
  "key13": "CjfMpfoTfYjNuD3Tns26Cz6HNr58FdGikVhxCBEpkwA4bkW7hgBYpWDN3sV6EiGYV4wraQh9vNgJicfYuLErYkD",
  "key14": "5VziUmyAMsg7ToxNsyS7zBVKiSoMLX2FBT1tQUSVmb54c8R7k7xqedX1EhPaKAoSaiuJs6ygTKew26pQmmH6U2vE",
  "key15": "31ZG873Z3B2Ubr3GxNK6GiY8dQHwiWCaLJpCLCgfRMTiPdopfk8bmGhxKhnbyjwzrxBFAxJL4cFk1nC1ogErSuwH",
  "key16": "2ni4AZHFWUZKxBYiA2EJRHMQ1Tn5J7HHXf5MFPF8iuWz8MZR4myvJsW4NtsjLBZVaoT3sqRZZzYxuGfjk4V1ztd1",
  "key17": "5G6vagF8k5Qhz6ySqy7d37jf7bkE4xqeCLpEd9Hz4kLS4es8WfbzU4qq2use4BCfhUhBNEeTjYrzWKFb5oCB2X1b",
  "key18": "3NJFvk6ceHM2HBofj7so1u8wiFvjN7PvXaHJ7aRy7Uj48FK9M1Nog56mMYSm4fVRgumZ9xoeeGQNJqRRaP6RVLnv",
  "key19": "3dfp7rJ1hgXzu18uRzg1VoTjZFzUbBPNHRhrUrLqwBtynZStHt8vtkgPHi3kiGZY7xQn5wEyNBHpmCoJtmrHAwKf",
  "key20": "Tn1oa5Ed3RWepGt62HzjxE3sg429uCEoSdT36GepLr98AqgtiWMnMT4EuKHvEBo1EJWKfvnXY64Mqup6zcvVkCo",
  "key21": "2s7SQVaDGSVeQLX56Eg1VZgQmruFwAT9upGWQ3CZs3zVnMZ8mV63Cp3wDwtcrvq7rNFDdx54LsL6qvs31M4GnhfQ",
  "key22": "4Chr4sRHHTGf1uj1P1kQhMqXEvcUoENvRxGQf715acB4sZ3tWgX3d9hXE8LyjJRRu9enkGwduDx641Uendhi6rtN",
  "key23": "2N2LxeMJaZtpQpjYM7oEVdeZqEAxpwD6RGyZKT1A6FE4gNgYBxUF7zABAhXew7kkajRxFncwyYPEeL4wfe1Qc1BX",
  "key24": "3fLbwNLwWcwZT4aqwhziX3espCaeuzD2RRaYicS1wrzRvCpH5fZnLCmtjyFVq4smovnCZp9mmwrwDMzo7SaEeze3",
  "key25": "2x5cHQPb4o2qqXLVmAnUE3MjdqXfESUNGcQ4G9f2vEAPsMqHVTpkXaRukhJUyobVczR1mNFPy1uYYq95cgJ6gPbR",
  "key26": "TrD3nazBBUCyU57QFRbZ9MWi4mwvbN71BUV57znQYkP8wMmzLwX69nmKK8o6UELjbfaAexq4FSPBZukeaJEhhvT",
  "key27": "25ANKgLUaERTqGejrXVHP3Srh4JQkdqt5gsVAHFJGK2VURTa9SBUAtAuD1MRJvzpcG3v2gGySbPt5e2cvcWDu474",
  "key28": "38Hz4h6czU7HRbcqPDLhSL5BcLGXrD25RituxkmvNgutDc58PZivWQZJq4Q3zsqiSsC3BbYwoWXrA3Ccft9czgez",
  "key29": "QThpEeySs5rcihBvdZwaLmehT6mGTXYzscNVGd5TLKop7PTW7G4P7GUeniuusyDsUskk7b3ZVsu7FGEs2De8ko3",
  "key30": "2VNf6qPCuVVaabQNj3Zrfg2xh56pWtHK9uKz6Q8WS6oBGRqM3D7miSEPEEcf78p4RxxUFmyfkz9RgNVGCnUmarMN",
  "key31": "2qKHFX5G7zBRoSg6zZ3LuwpBqpffLmTF8atjxyLM7Gk4j1TRP58uRENXSXnBPB7CVxfGhwjTp1EAc7TjdK3Uxnwo",
  "key32": "3NxiMc3iY5hFnXSikVe6bvKZvWWMjAsV9eZmfgC33mGpqRwQyfpeEN6hf6bP2rmNJh25gVB6iNCYPXAUnc5891tN",
  "key33": "3UPZCW1p3Z5AKtmn2rS3nQgKi53nq4rMG3ERZjJU1tfctCxu4THEcciUvCaH2bXvXBJ5hkrBjJaGRRyTqe7appTo",
  "key34": "67b7Np9iHN94ZzpmG5X1QaRZjm3LELXF2x9Un9MGKeEDmvcdXysjLmnrsKRGVsEYT9gk6bm83nsjcA3jLYUzig6R",
  "key35": "5kM5pBi2FB4FYuy7cNbuKfCZa7Nf4ocULi3rc15T7GuXGGt3kCyTh1VHvSFS7zd7321rbdAEtqatKz53dWVxMNiK",
  "key36": "ERqLvwVXiXPMphZQfHBLGECKAS5dAi6ZdH8bvtWFjHa9UMZEv8q1c2GyncbjRHtHgJ2t6trtykjdohrgwDeNDaa",
  "key37": "3oRgXpBru62ataEugXduWKeBBZUw339PrpUfzcLsrE2HbDkTnfnLYbohxztZajC6Nse88TF1QntbuBYYANDZ42Vb",
  "key38": "3J9thmLNyC2sQ9XsrbLNVrqiawBrsT2aqbAGXNiQ1Tm6SN8VBiibSUTx9XBD81Wb2BkUbsryX3p3gsRQEt8siKTr",
  "key39": "5RFLTJKu1eb7gbrBQakPaEdm6ZfTjQwvx6esq4nLNBhenyk9FUURm1zxxJ92gEJuND8AfebUkx56Wrj3KQKXHo4V",
  "key40": "DmkEvEcEBkhpf9hYRaeptwHuwJHfwMit1VDgrnRJvfq59T6JVuMQfM9yGP1pp3Pt5MqWQLQFJYaGURPkQ7JZ42t",
  "key41": "21w8EVY5szUSdmRNYY44ZqCuQN4jVXfh1KJ8USkakNRDr9rPGsxDMrS3fXfWgznMpaa6Z4f3ytESZf9AkEQerYS4",
  "key42": "59eyd4x31eyyh85cXeB5tzTwYyGsEpoP59hhrtH7hYi88maB9Z35AAPY3kma5Mks2fU7u8ZrRr4WB9vhg1LCrk3r",
  "key43": "2knA4rDw67TmMG4dF2PDGAanFCPsYWTJ2zmVtg7XshZrpoUpS6DnSKVdGig617VzXpRccfKoziG3oUNM3qCPfANR",
  "key44": "4Wc4Grct5n672AzQL26eLNkUP2qULcXqifRensXYWMaGHPWBwkiwKaGNHhUC53j9j4QcSBjoe1wxir2g18xJ4QJF",
  "key45": "5UnPNGbi9vZowdr4aeeiXmdZrqViHcRqrTWv8M3Afzkxpo7sHNBG3fWhUUy76RwodWLMzerfEs9xV4bw8paWBaCr",
  "key46": "3i4cw7N1Z8BVbwfrV3N73zjhRxWjmZnbbLsMBxL3X8EW9aUP9XEmWxoqEqGuKcxPnaBGnhZzXng4pGStfrVbcJoe",
  "key47": "3Mi4qFnsPsoaCyirVXB5Jy3t1RwDfv7qwL1v2oktZgH1pfMZB6wx2M2M87CCg8nRe6gcQhyYxCucqX6U5uygcLYp",
  "key48": "5zckoSZ4L1AADdBAYaTEcFu1FDvXx8PX89iZJ9JJ5DsvGTq3QDytTKVksePB8caj22aSSHj95euSNhWy74mLuUQP"
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
