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
    "4jgmcr5JkovvSVCFEMNbzrRFdC2miSe8SCog1W1iy7UiSM9FMRvVby1LgDWTZ8C6xXfSootQH85Wwv2ZYB7iofrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YU9NhQ3YfUzAr9HR3gBYJJY6GBBRP8YcPLtdDRFNr9cfw5CtFVSydqrkrDwR4mhRzAeYfe2zQTtdEeDCrLyYg4W",
  "key1": "5AJp6NLG249f52aUUA6QJY9tEXXLUgk9q785iiv4MYZ3xYb3UnKhHr64oC1Shw3NQNaLY2tpAkz3AUrx2BNJYasu",
  "key2": "eKV5nMKkH6GvzGHE2ReukGd7M4HpLMjVcDNJt6Qq7DfByanjKQsezsqx4PLDWc2PbEsJNyoVtygf8qPCoizg3yP",
  "key3": "5ybSwkvSaibNmgQ3oodf4RVvwJhCdaa3Mq94dSJQ4WsnmCjmyK6JRjdTCNQd5sVA44cARSJMAALz5VeGAVQkoxdY",
  "key4": "741E7qTHRFArC6phWTmp7pccB7fVsUzoPczcf7Qp2ZGK9DUz1byaPucnn4v2sGNhiG1PDfqtz3EZ5noK2MSfjv9",
  "key5": "5Cw74TBzZfV89UBeymj9zhGXiY7HRyEQ6PxjsGBH2ZRRD7WLXWKYaWh9zdzfGD2RoMLvNhcvYwHeU3ddeHRw5Rf4",
  "key6": "5LdQ7saZ6u1Vxu9ToGKmDMagqDcNJ13hQ3ea3TZyijsQPb4VZYHENpAPDij2Y9w5YzQLxc83kMRaNUCrPRXfGXy6",
  "key7": "4FKDKd23eB2ePTM8eH6t9yTUBXw4Wdk9RjypSfQC2YT3MSctpboJJeGuSyufAoFKBR1eZFwFsn4eu8DCKBP9SNPN",
  "key8": "4WXPmGuKoAnfGujRfzN6pwjK8xzSDo2y6ydn43kEX4AZbAqdUL5GeH7etsb4AGeXu9o4XJBQnaHmHmVyBbVafpsx",
  "key9": "3PGs5k2sSmvSH5StZyHKQA8dbXh4RjSSdRvbvMMWAKhg6JtBH92aocF2DDkJUFJ3CBEX2JswKysiVpohGZ15KhLb",
  "key10": "5zc6ZasAU85mT82RJ4CHg2hJUEJBHKeaaWnq1Jz4iWKpNMHzmDiCdNRfjv8M3JDDe8YWPGmD979HjwCtnqth9c7K",
  "key11": "8z31y9BsjJHxZsfKJc9mRFEBrtUjx8ZsZSXCf8juUZfgEbBxqRkHEojhjp1qwCfZX8mhvccqJeEuGEkKAKArV9W",
  "key12": "23Be2SUNpVz9s2HTpuNjBFFjuTXeoFW3qTVumYvCWm2ihhfXv7AHCfvyeHMLLxPQSKnfWRYJW5kyS9eBcKwvGn9W",
  "key13": "3FSe5eLpv37aaNZwfdRqEnmup2yx48UB2H8hBPR7v3X12GbmSNHv6fsBELJSa383eeHdJjeEzpZWEyqyA5UTFUhw",
  "key14": "5ntjFsRrx9xfDLSMoVZy4y7NTAMK1cpo76a3STwyh9wE9jXojnJURixA4na1tcarf8CdtGJdtwUJSeBNQSrBuswq",
  "key15": "2jULboGPDPyvQxbCKNUvi21LyAbepMe9PjeURXC14zV8ZgydsN6hseFhH4hyNSYYmCsbXcK8K2zk4wAAK5qEdLfW",
  "key16": "H6zcKpXz5kSfDMtU2QgCCzvYHMgvYy85ooX6AkteFpBc552H4VaA1DhwLyaaWLaXy7ginTb9P7VzNKnKpVZ2J93",
  "key17": "2Nhz26NBzNPBWTwWWd3cYJFKEawRm3iBMQb3EVojHNSyNVdqzDVD8eWx719btTXM5tjFoypSsBZM26owWUqLBfmP",
  "key18": "5WgRLSF2iTeQKzsMkQ1YTCLbQaUuyD96kq4CSpo6BYYkhSHSz76g6xiyx3G4s5J6LsVUNK6DkkCHHFFe9XmrN6n9",
  "key19": "4jKT2wcwLCeV4ZY53j2D4yYK5hQU8FZfye4sEa3B1hN3EJoG7Gosy3oPKAQv5dtPTwTgfcBw1im7TzL4cPUUWRL",
  "key20": "55KfxaWQj7afcwLM3ohqXDwaUf8dp46f3x5dbiyVTg4PdgT9Xt4iDGaa975kKQfoEQR42QkncnCeyicBEzpAkNgt",
  "key21": "4bgTJpsBM8iNBhNyMXTPkQP4CuDsjh8q11N697ureFXkbPUHNYvNFNrhSNUWLaVBPKJPgZeDZT6okeD8jdNkQLGP",
  "key22": "2vU2QRZzh7sNDJSBFx7gevJRRFmXXFYVNyH1LzSqkMxUEb7gQNzHpLWD1bKyTpaRbBayfdPUvHzFryqBJ1yGpGrg",
  "key23": "4jojT2vWTfyepRhWwof49fzPdzK4n4MV8Vq6bGaow8ejxofi7txCaxMHLy5Hua8Eaj3ggUKsx577HJAxzyUGnkpZ",
  "key24": "RtuuxrimVcSucTRBXER1AJaRNVaNjiqurxc6TNA5HG2Rxs74b7kK4S2DrJS6DVHbNS9haoLkw3yu5zwxff7ZAp8",
  "key25": "38DX53MJf8GYRKPT426Z6b9pSa7MzrRLfRFGmN8XBKK6Kixgiy4sdab9SisGszAqcFMDgL8aQzwUsHGJGBhWcrTY",
  "key26": "5fWpEF8kBFNQALQs4mS8yN3WjDjFgyAqZm51zbRsLtdfSwiGUZAnvuXgibPZsZehhHv3BeCGBCgM5WUDfFjgLmm2",
  "key27": "44ufJ9PQ8HRvGLrSnhV1oUSAc1TzwuatnZE1paFmfrbEvmHCQtghp6QDgKeUDss5ofxwsXtPHT6DV2Bpw383dxiJ",
  "key28": "5Nrt8Dknj2po7y7JachZLYYn2d25817wqar7LiRyLu2EUfZDkHxZuGQA1bQwBeDxSoaQu4zUoKuX1dJMEHA7qQNQ",
  "key29": "5hi5oSeTu2DEXzKZMticeqpW5ZJ4cC1mtdGf26xEzpBcukt5xBx8jEcMujxGdK5LsgXQ5rACe28Q2KEkjBiKyaot",
  "key30": "4aHLYqC5GHB7pvAkHpYmzeEaRyf1RFKzCckfSmU5P8jYLfNiAqQ8r9i26tXnesRwS98q7Ai8GZexsSNbJRAVShYR",
  "key31": "qGqzqVHgXWT1Qw865ZJd94ErQtGLbD6QXcGUqRCZtootzobzbnLZkgpJMPzJFMh69baH5dUVZi2L1diHAzobFSH",
  "key32": "5ot7L9KMTF4NVWJpez3Pg3osBkWc16J8NQWtu83AwKdJrK31nBkpf56pLJs9kVTULct5e74Du4qAhC4oJQdWcYDm",
  "key33": "61UQMTvFosHgjKyDczHdyMbDGoy81LPMBY8TFnSM85rUQUAvxRXqyAqTzsiC3pp9TtLm2CcedmS28oEaNGgGY8bj",
  "key34": "3jq23JebgeBTuoMyJYBqKKVdH3yG4NA1NaJaZKxZEB1XRN73VEnFSHkduR5Vkkj7VLw1ewJVeBQjFhNc6CUWfSpU",
  "key35": "wRUHN5zJfX5Vp946RqgxJX7gfagVcgfF8GLqTHCJX4AaDxzbUWchMfZNxG8Ww1mzzUpAeNXotePDXcn4LKAh3B7",
  "key36": "26v5p5vQxVKegcB9hH7zKwdeEMmidmndHyCzZAYDjMnCRr1KVHsdHc6UpDcoKbBMPnWtv3hpUsWXawpiyKhdDJ9D",
  "key37": "24VJTocNdoAEhJitM2nzfNc9HNHYxUhAKdbByFHrE1PTBHFmg3Ed5vuHdaKmhxiHUzm3EpNSjBaXZ7rKexR2brh7",
  "key38": "5gQjyUTmPgNvHnXexyE5cA4zfU6Fm12B96RQcHa3asG1YxsASDRNbKRD8RB2Ra2x9RwnfwttXdRBTuWRXqD3g6gn",
  "key39": "faeMbu4U1kwwhNGLorb5x45GQjbHENUrLabQ4WDnV96p8Bc5X4rsQtys4gDPpJR3RiG79yKM8ywkVLLVoRjQuvP"
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
