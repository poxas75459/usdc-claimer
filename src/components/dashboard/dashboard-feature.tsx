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
    "JzBpxbXXkfNGhx5rJ9jps3i8oo3TdtSD6M7851SFNfw4M7UmReV5NKsaBfH7RoVPzUXGN3CCHuLzaPCU4SeAj3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "or1coSS5aLZKhzBTUA6pByRyndg5jmk5f34PxPxvArDcre7M8qrnRrvq1GkU4uyRCPbrJCrsrGNCDacCUP8uJQi",
  "key1": "GaktfeTXGCLaiZQ1rFmgdSDVVpP8uTGrH9Lf5fiy2drSrQoV18iHGQcE4DHaBsR3r3TffL5ZwkViDmGxuqMBwGY",
  "key2": "3pBQX46rbeKeaXiG1a2vwDiWV8Y5Wfq3W9bv6dkyZEyGKgd57ALi8ms4J7q1DyTRJs5tnpZ5xNJa8nvHtb1Np7o",
  "key3": "52kqteMYmWBMwKukvppdsbTP3Nb4zn8FBaL1BGQgDsU9147nHBScmjtVEgdTcCC2SBuyVTgSnRqr4cf2Cdc3eJ8v",
  "key4": "638CNWVvYiL4ef5y37cXMoPCdEsUttNYdvWiqYAJGKdgc78pZMXJPUgR3cSH53xtzvjZTY4gV8R9x3w7Wji3oZwG",
  "key5": "3MWxotdoJUv17hSMbte9vGiEDqrQGrJX4iWVT7W8W6Qc4fJDwW1A7X1LYtDQappG6qYnqrcRCTFrjrxLkoTahmeJ",
  "key6": "41ttK95we7Tx2ELJYT2HyuvTJB6PTYP22KdD4Vhp6xBzYfYiLS1MCsE4p1EyHksMnhmkvR5dCCNN8D5VoJBGX2oH",
  "key7": "5rWcUuhKmV1L8jaQUZ427q7eeVhrPeappdLLDAKFoCdwtq2RfbgKaBq5GEBcMwoNZ1V4j2sCcbE5M9SduRuE7unf",
  "key8": "2VgsLGZiQyZT9T8AoHXpCYyGceLmEANC8cgbFozqZ8L9i744tka8geYoM7xbku7RPwBGczHRFW6EiszyrNuHqUne",
  "key9": "5E6WMy3Kfc6wzELDjWKE8tj4j3jfE8mpWXUE1UKaRuqmXF5Ceha9LA4dnX3Ds9gTcJCBWngXqmizbwR9tQynD4f3",
  "key10": "4nucespYrrzaQiF79mXQHunFVkanbf4tKGNqV4yfssySdoeUz5qw4HW2wSTj8JsCKe5mM3apS8P5FGEPe9G3pteh",
  "key11": "NP858W2BqqXR9J6rAHwF3bekLzgCpaiMGDeT1g2iChwSneqb7bBAZG1RPhfrQFNyxQWq3LFiFbPFFhzhEPiSgam",
  "key12": "3fW3bjZb463q1ECLXNJKmhak3wwCLvHwTCt9oSkTZn4ZNNhYHTEWLRFT9j5vBndEUsyYKFcu3E4yRyCokF2SS7db",
  "key13": "67NNA32EeFf3qTiYuDXwk55FERR7VECfVtN8c9rzCNW6bVtbzZZpyH9ADLSTHFYbTpgfd7zMXREFChGAQMTN86nC",
  "key14": "5jG4zjrtwZ6VtGA3wAE47dpYz8dt1Tcr5JF4ZFusddSfwywt6vAoyYBRthusfo372rZFi8oZsWsG5Dqwi1PPBMK",
  "key15": "45xoXdwFnLu9nVSK8q2jJpLBxwCQHsafn4YcbqiN1Zk2xwG7iJF9GY369zNmLUjUNpvEjivufmMxFEob9cE1jrLH",
  "key16": "5hQEeQ9vqJqiVfTnUMbKYS3m5xFUFiLFFZre5oZfqQvXkvUdSJ6GpkFHfvDacEVPmG72v82r9WGTCHg6RcGdfb74",
  "key17": "3E2JbbY5ozRCvr89cCtNoDTpXn4grHt7Z3JjU8zBmBtdkSexEnnRPdkmWC9tb1Szh7iX1n64bYUYQ9WAvVYjHK3X",
  "key18": "Sn8M2Q2QSyXGGMjQnqQN6fMZ3t9wTSesA86idfvL2tAnYsh1U1RwxKoh6Kx2c9PYzuiaF49Hv6h1XnVAfNCmdTU",
  "key19": "J6j4iSuD6XDtwho4XYzCTUgtDZwBVaKobsgCMxCVuEMJzofm6AVesMU31ZbCohdYVYRE5Ghqyo22TLhbfE5grCx",
  "key20": "4aufcPh3vu4JRrJu5oL2LkLVXv2CawLUv9ohfu7MPXWPRCMLUDmEEXTbK7qyHd6XLwQA4Cks6k39rt6HC9c4iM3V",
  "key21": "3rLfD5hjPseBGRcukhiK1oUK1jnWvQ4UDvEY23hmCe1wsKZBTjdtcCaLwFjhPXXaDZpQgCnYdd3zKU7U6jsvgsJh",
  "key22": "3nTnaL6ejkGBofixA2SiJCXVRXqKyLkkXU5qGmhK2zjSjpxwGQGkf4Dh4qYEH88g9ML4Qehy4ksqdGgG5iWJwxdZ",
  "key23": "iuRzJ25UyK2gMSoLx92ruR2mQpomzrseqXHxp89ieUGpsXLjCeC8wET15GKb4uzjbYq1DhQ6JjiopN3UV843Vqe",
  "key24": "4KNCB6NAGHD9EBjZShUCRMLfAZQ8pwr2ySmd1XEHbdJtCmrd4ryQksZNrrsTWxmnsRrddfNpvarR1TPbU8Z1cHDN",
  "key25": "67SDw3Rqim39UUoCYoySqK9TeJcgTpXRDR3qotARTys8Byr1SrT1fq6SJiSd6PkNrcDHTvroQwS6A25GpetKycrG",
  "key26": "ZRfSrzePQKxAubLYRTXd5JKjrt2UeT3YHqzt9K1BrQwYa54EWUyVKV14jG9veyYVdAgvxFej7GYPbXb6JamuJVS",
  "key27": "21M39WAqNJPn11NWjrM4MtCoi7kTtyfEiLojyWWBNPbHLYZQL9yChAM21Qj9pPctBdurwQqDiYNpxN9uusPw6Du4",
  "key28": "3CEtnXz9i5KhbG59EnZAbE4HQb6nCBhMS1m5RuLDCnYjhReEqM7yysnGJc31wM8bauRXcBC7Zd6FdDybkmyBYfbB",
  "key29": "4qUC7jfYTAzpZXCuGi4E7XW8xm1kHX78EReuL8KrYhPZo67SG6UgEVhmjQzQWU3xgoYq1cn3trnxtFv1wtsY51M2",
  "key30": "27HphnEZhTer92tZ4RShcS6RvKGbm8jB5nSrhjRmj8mQXsarRHnF9TrpkQoZuotBTzVBsyw2yUF8GXSoeXMsiPub",
  "key31": "5mZKUJStHwASrgU7rass16Leu9qC9UBdmcwGLrwSgfYq7XvBS71JovHXkYFdcg7gPwkxQJ3FKnH8BivRFdPHZj2X",
  "key32": "2awKEJ5k2dhrZ78ocXjvTqxAScwQNSfaeNi7LYk6yUoUQN2XJxTKFftzn9ZreD21XmgnxFC7S3bMCh6AHndgREPR",
  "key33": "SW4rmNhFUdE6fhmHBXHN8Yz7XB8hqD4uHVgjwVZVnTCbcEe9prsHXiVhnvVnf68pGVZBNvvkYvcqbZ7eU4zFdWp",
  "key34": "3f3v2VLX2qDigk7YVaq1xWXVUg8SNhJXRzDnkHeFbydAukjhc3g9762HamyibckhYtWFgDrQbt4RKQSzodERLhEz",
  "key35": "4HPgfraKfiPv8sZjKdfyYCkvBictgnWXdse2HQZovEBqaT2RZZaidcL4kLM8qDHfdbaDzR8h4ETrKx8keAbewHAe",
  "key36": "5TjxQ2jXk4xVXzJp3RZ1CtapXBnELA17RD4x22SYREENKNWeqLnhkQNNEQD7T8eewEUS8AbVZBP38wRNpHU7rYN2",
  "key37": "5N7zgsdQNJasD3kV6tQP95RkXfn1u1sTitYSMWnAyteWsQm8qbPcvcrdofV2FoEUZeZqK6znLS4JpCPXfsPYcgmw",
  "key38": "3TFhAfwhPxt6CBCcvhNFhBH36MP2fm16gQZ94HTpoSYtChdAFwYVpTyhabWs4p3g6cDaoYRjn8KGMz43S4nTyX5e",
  "key39": "2FGLbsFf87MZQkCAjSDNH7CtCnqGhtfKQFgGch8vfLJKv9GZATW23xDxpNh9M7UMoLv6H7F4vCBD3styAnBSiNoQ",
  "key40": "2w7KBwHHRfty8zfmDLGxxZ68wfQVosqWWm82M6cZ4rwrBE9L9VsCq61Jir329UnWJU4kiYGuHig5SxHoSnqZmXQq",
  "key41": "3xx85DB3k6ZMSuXTqEhEXusebVisE4h8dsXsj2v2JxjRrfUa1tvvmXZFjKw83CrEsbd3V6bh6CqEcw8aBdheJLmm",
  "key42": "3sjjW6amZQcrfwcro71NaQbV3RSutLCd53fzbfoKvTozrNSBqX8XkZWHkMoxu1nAYaX6c8t5vtJcftBedogma59b",
  "key43": "3LJcfC7XPrYuoUA4yx67TUuuims1q98LLfqwMzxiqHfACwwxRELGJcnQ5eMEzqzyD5TizR2twKpoi7Ctigjez3mu",
  "key44": "3YmMKsWcN6FuJZ9p4FS2x6NnAkob8Tcux4Lma5Vts5iozMDMN1EgokFNAwhEzbAN6116wm54bVRKSiC5tpKwu8Vt",
  "key45": "jWf3bX4TCzSvw51Xe1aZrwegXSWwFDs6ZWkgqAf1y27gfe8DfKSUusVe3cVDX3dXAYTt5KC2y75kTy4LrNZKdZ2",
  "key46": "YGBEA6NUi3NV8K9ni655fCNXwbdH5FZurT9ypyk3K5PwK2zxfM2rpg74GkPEb82NzjHvveqaogfKmKrFKTHKtyb"
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
