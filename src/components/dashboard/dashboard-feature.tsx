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
    "5hYbx38bUurYXaLjjUVUWDzbCTDQr2LvUBSZwDbhxQdhzZqud9HaA1BVJSQa4uitK7cDutmzkv9G7bKoE9Ceztuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqjTHNTHMoZ4Mk2kzhLtCDDM5HmgrB7jBpoPBvczviGEiJWYqwaEcnSLhQVd8CB8zTE6f9qEt6dAk4TtxsJbMM8",
  "key1": "5PL78WTiYjC6vGTY5VUFduFvRppVFSe7fztqw83LrGygRixuT37WqFdSAevAVoYpQBTZz6BGgesyFyQ48E1EibTe",
  "key2": "23SbokSyeNKbDYaS8daoJKyDUAc1ibVg7LrCXsJxp4VTJQv8H7tRUszBPEt7w3BCF6BtbqwrrmJw892P94CoznHg",
  "key3": "5bVcX4Hibtib8rPFUhEAqdoejjbfNkzG5YoM3v8HXT7W7pX6ZERcE9h95rFZF3hMttif6khb1SP47JW2VnQjSEf2",
  "key4": "4fcgjpa7QKzeqzGkR6NEJjgH2WFcucuxx2CrbTxjdDwnCrYe9A6aM3ZWZBcgPkahECj3jk3wvieMsDCpJEXyrLLU",
  "key5": "65sHmVgm5g6DHsPnCovTqXRBybFqWgrM3w6GWNwJR6GPh36e7M3gcBTu88vAAGhbFpWDBy8QTunVuCMSaQFhErmT",
  "key6": "2dSAxbrqf8idz5pVLdFkEWcovC4nzofYXjsu4oe4FZ4vqRz8UzLp1khnEarrvWp1VNTg9NSd9XmvgnskTobdLQR6",
  "key7": "2gavvt2BoaHABKEySUFSbihU1BSEeF6Ns4gsRWNgdtNYmLZy57qeYLPmJJ6M9NyENUsmxe26pXvpBz1vEhmZDR8Q",
  "key8": "4T3xPFiPTCq6Vbyt3B9dPhEyeuUwufEpp9mR23JeJrCJCN16vjo1o1TWLM1SvjEr8VKseghrrKGLpujG9Za3tSK8",
  "key9": "4uovBqBZ4pPCdxxoA9kT99wq8ssAxdpuMQLBzw7LnpK4Po486exVtK68vndntYiK7rvPE2DhREHJqBZXAhp4QPSA",
  "key10": "stGYeFNDhsQEcbXgdewaDFjXti6jgoEe9ZC7XUkyjTgfhcFFEwGSqHaVmpqU7DW2MW9Ri6M9inPDcxPJyKBJ1NE",
  "key11": "4ExYPGG6NgCGfFJJfaMTo8zFPKUo9YykWn14Y5AL4oSWFkcy3oNqVK2x9hCmUnGRQDyzHvXKjdAqXvpFMrPs7Dnq",
  "key12": "5C1TgbaxfwBvzap5uyhQS5SKx2bGvcAqzh67rx4rXeMsPBnqjdqwkpwQv7h62B2mtcwVWFZzXDUVFZJNmNH4KMXr",
  "key13": "5ZQe8e61D8YK7iPsfYWsESDLBVe5nLg2PKZdMHtk7aQbqDhyPfiSmUi87CLPEnPJ8icDKa6v4JBggpcN724944Lx",
  "key14": "33foABGkQ1rycBw5Wk9GJSXvJCZNhjqDnYDvsk5EPArtfbBCn14YQsvRXxVWjdgWR1mzG42kygjXc4Wxiw7CDufb",
  "key15": "6u55eirBP5H9DXZRDQFd8G2SikJNhYWEdeZj6N1mmm8XsW4vt7mhrNJ5uwhx5JStCGvpfUzVMvUXijyUN72qk2d",
  "key16": "4arXcnKJ3tzfc4LyTpzVaqAu7T7J1w2ymGCpJ56W5DvdTzdSBJnm1USHqtyZ44BdqhK4SDQfUDpNYCwnTSTQFMrW",
  "key17": "266siA2fwCxtvx52AdGe6iiZN7MVMCPYuipCXUNFphpGJJ6c4Fjo7498wk8L4Dep3MztqFJxCgeE7wwaNGBFSm2n",
  "key18": "ivqEND23VAhAPBHe2yhWmE9TSxuPKC1tvkkvfXx2eYZj24wKFJ6i9d5m63qdz3ouFonrYxbpf8c8GAYcAHG1v1k",
  "key19": "37onJ1zTreE4dwNhiosxZzMJ7aP9ozdJsy376uuK1jSeDHm1c2ePa3WcVj6THs7sgnkKKFJhrcY9c6679tTsNZ5m",
  "key20": "4cdGKgGvo7Hn6pCwSaG1BLgjLyou9TU2yQR7dQqSvG6S8MWj4RGekRL847WoiYz5BLbLXHtuWSH7i8c6MBwHzzDh",
  "key21": "337BaomPq2aCadMx3LyJH268ANG3GssWChLQFjPmmmiT11JWyn7Nk6fB3VoVXzS9ETNFjjcBzCVmrYWaQyDDpPTd",
  "key22": "2SWVvsDTdGsXygWhoHunhC16rKd7pCWHV9w3pvuGNJ28KHUeBGxkHTZWXc9D59CEL6EooZGan7A1JXyjYNaTcq9N",
  "key23": "UTbD5V5ePx9wh7sggH7oL4e1acjhAvhTRHSvuafzK8GdiWfCQ7gEEttjQneshnhN9Usze8Z3FvabPyYW1LJGFih",
  "key24": "2b1WVsL62vjDNBLuYRY2Hdz5s2dTEmnc1UjBE14jHqE5Yu6LGpoY954g4KdBz5RgHLu8dSn3DNmXYtZ8eHt2FK3R",
  "key25": "61Uj1rkUe8AFuAMJAAJs9VV7qAois4m6UCX2jwR1V3Hg97BxhSxKvZuy1b9XKxHT1T4pDTiESe8Bpsa1LMwUjde4",
  "key26": "4ix6qTtu9Zxfh6NTqWEYUeCjLtqLRpGCRs2AYbD2uSo6PDfDKiHDaiE1jfLK5G3J8gJdXNhYpREQGRcHdRQghXPG",
  "key27": "4W9qXr1kGjDjgxAm1Tjb7WMwGNM7SyCcAHWm3A6hJjCmcHkaHtYxwQiBpPSKiFozRMSYEwHNTJXXtszaZTsqf8WH",
  "key28": "4fKMuxru8PLCWnnhAzmfqX9w794oLteoZNHcwsVKXw62gcxzJtVxkAk7Su72BZLiSBeDD3w8f7VgDoeqqT9i6tq8",
  "key29": "3SavALhvDSJ1j1Yt9cJq9VZokHpdvpYL34Hs9DH1Z1FizJfdPMNG6WgrdMENUJZvnvHNqo8gBJyaiYfqD7XHfiC1",
  "key30": "3J6rgW7nQMm1XV127scNJFvH1Yg1qgwqmjsipNNo1wfpdtpXmYWNYsnUyxyakY5M9G6K5zEWtXFS3iYCupL2MakK",
  "key31": "2bHhdG6aoSdjnCwsZ5EbRpkb2v4nThoveXiJTwLBGdjRwYKrMczkdtdtycRJgMxGWBvQshYeD9st67CK1oU7E8Ee",
  "key32": "3daRXTiqYknTSs2Uve5HgQTKZFw3WR6SLYAagHBV4NKsbArMWez1Rtz5nZKpbWEJMkjVM2UCZHZfMgHgGH3c5JnQ",
  "key33": "3AEkgWkFT6Kix6XvKjgpJXVccRd5uu71iVHkS2LnfFMf81PuTU7f7xdBZZtL8UHBgP9ywVF4C7tkFCn3K6HcgVv9",
  "key34": "2L5gSSkUntqHmedbrESKhVTSZHQ59Y9HQ7uBDj7TcoAG3MSFdUEkoL2NKgGJNuxPajSuU8UU3m2Jmd1PDh8d41e5",
  "key35": "21H3bQA2pdHj2b4jtjFpe2RzjsPfwkyCbqPKCyYPh5tyTe8PFYKZD9yoW8tuUTKPoCrYATpwH1qXb6LQhHapUdL8",
  "key36": "3E8gmhv3shzVdePbAzsMCYfCUsyGR21iUrHS2zJz551cQyLpQbsZsFzHaccGc9C2rqJfAQa2zVuYAWMkq6hYDHLY",
  "key37": "4QacLoq58SkXEfSBSo3dHFNwMmkM2NdP3FzD7oHQWKJh3oB2QXRhAaN5zzEPE2LUvdgMsnoQ5MBWZyqdvVw7NPKd",
  "key38": "54bt2j4R94i9mjAFA2P9mheDw4bUNSSv5cAusmnvzR1bo6brMTRo8JpK1Yws6QSkbDQfrMuKRrPN1Fi3PnSfF2Kq",
  "key39": "3p97dgJfgDsb6vMGC97yPqdgNHzvavggigVAYm1FrDs3PdBr4zWrFKedSQ1JcqWq2shWXTQDZRKHtsyAdT2ix9Rs",
  "key40": "2BoWxATVdgxCYU7bXWPdAiZoa8BAENhNVhjUkusN9s7o6aMLTRQHum6XyQV5WmtfWHYboBcqbcxkivDMmfb8f39V"
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
