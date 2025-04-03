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
    "3bEfd5ijz8tjxjh3XtFRDd6mdC3mQuZKruKyZJDEASVfQMJnxgMsUuoCGP4TRtMkzU9yRhC52svwk4eaoNsPmfMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMSYqSc3okZZRaQLAoGdYdP93C7dCgurGJZzjn8hQUx6TQuVkzV6YaL4hRb9TfH6XqJpBVAA34SB5W5f1jAHrKX",
  "key1": "3vi1YcqgkMjeJdtbxLUXUNNRzGxwChAaGregSZdoaSwSFBdAsjKuX7h24f9TNZxKT1XVVrJCQik1ja4pYGuDF8yQ",
  "key2": "4xLpuC9Uirb9oVQPeW46fBwJTwsNtoahM3AvEbaXCrJCan5pu5r9nBTvZN8i79CqyWNsm327UT9smkZH8eqZbuco",
  "key3": "SrWtVhtRAQ5eRLENfS8PN8m3aFn7UYH7Y9dW46Fet23pKP47qSXgGo8FqhgzsWHTuWVtLTgS6cQmjoEJzi1aBem",
  "key4": "4W72WWMftoF9ykTb98gT6jxfG2YjrCMUJXHKXtEghLF6P9h2JykU2Tv9V9ZkgytCgft9AXLa1DoExHtNE7MiHEsV",
  "key5": "3a65V1sFJGgRSpFpFEF9de9fyNu6UphHG6oogvBDj7oNdNoYktjjyYWK8eJxaHswcgSr6ue7PytrupDXASDHLRbB",
  "key6": "51XCvdJ7sVFyuuSY6qhrxp7Xh9fsBE4z9jEinYbcr59zyNtv6jEU8PWaF2PUU837ZDWg4hXh8UkGY1uopmaCquv3",
  "key7": "3QWvWqnfiKQPmNLkMtRfWCfo3xf5yR4N76dQcsN7g6RhANp22aKgdoiVnGefdvcrLnAj3KGbmg9aj1w9hfKAYujb",
  "key8": "4Ny4gMs3AvacSFftWyWWnzLRnRirY1MXDnVtJCfKsHaftNU8L6dBNttZyppmhnmnyao7NEifEn4toTUPn1VvhFqU",
  "key9": "4aig3tt5dHuqwjRvL4PnFEhYFHPMQQTQ5uvbHpZPegfe7FsbgqeLfhf23QFVKRuXC5kFcTRaJgKfRVSxRYfp1rna",
  "key10": "57BoT1VvS2YYrncF42eYdpesNhzmo53Y8hSJji2b7v9ytFiV8BXtENG7VpHkHQjKKMPeKxFtuo5gijVwor7kc5em",
  "key11": "52EqZYXkeTgRNfLcSx3wMDq1uQG8aQPzmrCvcn6pxtVA19TGaFktWR5qpHFcDBmVJfPpp4LB9YfYvRpHFe38RW7V",
  "key12": "37GyH7uja6UZqTRPNXhpWAcoDQDo3q3vQ48n675NUcmHFxrk6iN4aBjzbuEHKUfdg6v7b7QmA3zo9TJPTyv753T",
  "key13": "43uMhgSAxTumeej8Y28iRvDvUGZEhagTG4Zi51hiiuSmwnZL1ag1FQTYKZ9GmwuVMpa2vPzfjUNzRnRs3ABBfrA7",
  "key14": "4ZZD6AwkXU3znsL1BWuFqQb3JhMRuiCMSucFpfPNfFLdJHbzbjQ6cLYn1oUiaZTvzxxhgLfp44sxLSpMUYCr41TQ",
  "key15": "rasXNpmUfDkH5mD3VKLAhjAY66jQngqfPCBk7uJNomCsmYrSCymugxBYxnjkyGBKXkMdLnCnG1XRSmwwSE6goCd",
  "key16": "H5DXcHk5Jq4hwA331TsH83xHHNiKkxGy7npHCpTfpTXJ4rbVtQLL6y76bNkkaKZwsitoVChyxpjnywZiTPu4zhP",
  "key17": "4MbbEz8d1psSxu15bSNQDwFyBdhF36kSp9o9W1Zxe9XKomyRELM4KsujafhCZ1XZGu8Xzx7njVfYGG2iobrCAASR",
  "key18": "3tPUUnHUiQcuo8gppiDAgnwqHTJYMSNnWM49D59okFMqXpvnDh94LBMCPFhKdbA7VfHeFQ1n9nM4gNYV4V4qEf4z",
  "key19": "4QZoJfXDiUVquy6PvwRJfT3gjPZ6kaTrFkmjs4nHoUKr7ANCUjbppb1Q7xCoUTdt9M3nLXUs6pnzV3EAaxx3BzZY",
  "key20": "5JGZdSTnciE82tE6ZCVaXQdGKis79apPoFfwUxF7WiYc7gGdYJKaZsBDH7LVbF2i4iJNAfXUQpfsJcZ7iuF2YiJc",
  "key21": "3FaSkwgivuXdRuvyEdFg4cVbSiqK39F4FT14R9xSR97pbbUeDmAVEqMkcDbcYi49TvfvvWADRtt8nj3UFQvvcZMp",
  "key22": "65BG3xHepW5WaA1BvAok88o2FzLSxYrDpC97nB1AALFCDZtDc1HXRRoA8KnPUeC3B1k6tZUzsqgK24MDSu3m64Mk",
  "key23": "64zKJ72XsM1aw76VtweSZ33PLuddDgbU1kTsnqbDF88VSLXE9rpD9ZeSWpdpFrvsqge8Dwkb1SvFjtpeCsnbW3X2",
  "key24": "ZgNn7ou2QCwmV41xDg3WKEDawDZs6ZHiZFfp7ycS7p9LeUkw829Ub2gEhU61Hy423cw97MfmCwMk5RydcPFGGry",
  "key25": "3BtRePjA4Mp7n2ieuiZzUHyqt1kWjRYFeuHc6ssXM7sovAfDqKqXyfoCMFM2piqg57rQaDEKHQyD1t5AHqkWu7xd",
  "key26": "2W88Rdqm3zh3NqFaYVJa4ua6gvrNMxKnAjLCieLXsa33PyN5JxUSkkAuqJtSho1NeZ6imcdUfsmJAcoBDg7DyXGi",
  "key27": "3iv6PuVghwNKp3ApNXd34Q19qpTti35hfdkfjN8syVEmTJry3HovJYF3QFdKKfheWdEWEzvihM2nY4jFQ5utvZf",
  "key28": "5SMEGxmLeiEsBSbLysCKXyub2Q69GtGFokUffGuG8Aw2847KoE2pzAd7Ccq47iemvaX9uJWfeY4fexdsNwkThuPd",
  "key29": "3yfgN2ViKsXFGSgmJTJrbrysthfs9Jy1gpmg6dGjZixrJBLB1JmDvVx9jmKEn8qHGhesE1XkQ8vgrjHZ39EJCd7s",
  "key30": "ZcNf8a8dknphssHki8VcmPrZvHA3aFhSmEGLe4y2nFa5C72Nn8PHGiRH6msiGwbUVCRERVdGotrD7UzyuJVmCKP",
  "key31": "2TfQFQ5uKhTTPpvPvtALxYhtnfqNLVUr35UQzpjVCBLNp55Ad81VuNUbzGerNT14r35ubpZLaB6MQ9RWL9zAYnom",
  "key32": "DWgXB7NuN9wEj2eg1n2MDKHZNFm6H8UDCbpDBtNTYQLqu7Q98tRa3kdt3QGspP2xrY6bvZEzxKjbhr61kFEqx86",
  "key33": "3DPoycYNL9nTkFWRugo3CoXhoniw6H2U2tXqbw6zqadCGprZdx8CYMZpbiAT7TsoMUedZRvkNUhbdPrf5r4bTwi6",
  "key34": "VsZ6pmt645n27Fsc73f3CsazFcgENPrWGt8XxKPTFK3bsT4D94bwKcTftf8Dkyj64eB7Lk1UpyNUZ6jY9d3jRhX",
  "key35": "2ws79hNAWKbmugM2W7H1Jgfg3xV88veL9h74u1pYw2mzBm6hBr4EdtaoS8qxqBPnSZVpJEq3VT2nXzw3e63VAoWC"
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
