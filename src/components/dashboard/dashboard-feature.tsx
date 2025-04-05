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
    "tVfcYQtyayXMRGWByGHnmrGYx6R1D9i1ZuihQZKesoCm2pqKPCYXtMRbdDzP6J5rsJwnubwHVZ1iqVPvishL3bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHCwJG9SRRb69EHZm7eJH2nwGNj4rfnK1pu7AWAppBZk4kv1M8gkCzBoGBV8bTTW3uyXP76SnWYjpT7i8LWgEsY",
  "key1": "sREajuVK8sD3teiF7msKDwgDyFwdX4RZfEoCzJ7B47GFyxLd3vVddv3cvge7uquaj3TNXuZE9ntfvEszYFDsYxs",
  "key2": "2dabps9tP732k1VaeZwRhxbgNKzAwGbiVBLm4QNkMmPZjhWspFS39A91DnC7nGJgSJA7oBW7PzVtdRsw3UXH4LR2",
  "key3": "5QkkHyVALAJjn4iReog5kHL6GrhcSK9mCWWPQrWoD62ivtXjakcm5xUvsaYVgfLtKJs9FK4qFMBozVfbV6hj9FgN",
  "key4": "2uvsF6GMTXX3kFxXYVS8e8Zm2hC4nEuV7yc2ycjDif8FDm5rxhYw4MFQdcGvVY6JD9UjByqcZfoHPwur1qaT6MSW",
  "key5": "eF7nYtAwoe3oYpLYrbV4ZUpGtDUf1zCZnMKwvEEnN9oDvjJu6pPCW5tCKbBpEzbLUHdhaf93vamNwRwYgMuMBpQ",
  "key6": "2LBMPChEThJJBs6VqLAWnVMyf71ygZvzUFCqztcKT1td2Jg7cTkgzYUa8s8EFvNhkUBNvsdg8Qhga9sZu3CiEfBj",
  "key7": "2oykrawys2tABFVY6ZJWVewP5eYcksNu1She7fiuiFwKmWbA11oG7bcw6aPZyrHEVDtthsjbEBFQuf4srVMmTWi4",
  "key8": "2otaWMXsJSc9rvTNtFt6bxJKjkaVWFE2mZbWUjJYgfgbS5kLuvHtueiKFnJaFfAEfsLftVGVCwctdwEWBDRTsuJM",
  "key9": "3Z9UKNqjNEsa5GfL7rYTUudcnXo92jrQ5PHCRDTA1CffYEGZz32vAdrUXAz3NhHAMc3MeJH15jDUb7U8K6taAbN2",
  "key10": "nrBTvX8s47Jpa9i6jcjgUwgWqRvXkjJ7jN3hkrXG1kUmW6MoaMDdXZB7DZJDHkHpRCzxWoh9gCE6RhEzRnVZubN",
  "key11": "VThpyGA2wrwWVFYJwnqqSDwGXEpzU15MNvAWaANoMeUFYpxBfzjXyrVfhC2iz3ZLx3pWU8k4jsWrmcf41kZYguu",
  "key12": "3qWHCPkxtHLcZuLkeqZMKJ97dJ5uedKW7wpvH1aGgRNbT8ubuKcmftuvfXr1YXVY7BrDK5Gsarozs4BobLEAfn8b",
  "key13": "cCQ6YMo5jrdwf1ny4tFPdc5qeKCTeJ9w2YLfPM7hrr6KoV9nimSd4daTzVnKdPB2q5KogLNjc56H733xQqRmeVY",
  "key14": "5x8G4YGZya3U4CD2jxbxhSC5rVrstmASpECbRsGfbkB3rB6JyXSKPcrFUhbtHQQx4bpczR62d5egiAH4fnumxoVg",
  "key15": "59Eurd1V6Uhznbo5pjVoWVj9az3kziiF5qCbcPeL7peFYZ22TzE7MkYZyKYk4WMHzBHGL4JkkP9ZUHBGd55Fn5hT",
  "key16": "3uwB5A3H2p3XsoHrzgqESkZSLhPngts7eza1JUgY5S4GTQepqbgW25goUxr4RKhJve6n4MXGK3gjiZ7fqepKG8eA",
  "key17": "2En4xA4c3heaCnRKLP5QX6jPXEDxutusUht4X1ubM26azqKdsPzzJUPKyFtGUkXLBk8y2SHDCGNQbDs4YgdM56he",
  "key18": "4otqWjpCRPJorm9amgjPff9echyyMGzimAVSws5vaivks6wYNpQg4GXH2zYFLPFAXt9za913wggtAjUfC45FYXZP",
  "key19": "28K7SsPLie6xyrWFbYezAsBuTkSYQpkTAjWDUVRaSTQEghAEB6uWdeCkk3ZH7wg6hHsajQkaUd1Wt2CYqMMBFaEf",
  "key20": "3zq9iMDEj96FF5j8SQ9KP8NsyQizwVkDWUkyozbyoYCZ8Dc4C9Fv4DxXCdzJz5WFNxcMp42BXqmArGxdK61mQgUE",
  "key21": "nGS39CW6qEBdLSE4E61axiDSt5fubUh7Bqg68erqY3JdD75986CvKbFHZqb9CLtUCGJ8NfDyc6HmDtBLKxKTvXD",
  "key22": "5X54b29qF2p2h9zWV1oA1DeHqpxjkcT5SB9Qv3R82ZZ3Ao3H7YMC2LiBAmCuWjrgvYHErExpzppkU6i3hS1pD9qb",
  "key23": "59MMHSwqtXwjbT1exkV5mnqyD579gE2kXEXS3HTxdQuM7ZcCTi5RdzbhfmBesPb9HJJQvQUU36FM4rNxUm6YKqa8",
  "key24": "31yZQgAn1WYg3LALu9cuCKtCcUJh5FGN7mdPbNTZN34436fdH2MMxF2owMSDWo15zSGUM1pXRja3Aj7bh11P6Gtv",
  "key25": "sX1F6p6Ve2JHXdQD86o2jqvKsxUbf1w7662yfrT1XmKqWCGAejhT15rGqjU9sf8uAB9C3uQ5RqS9RJAFQnFgBkF",
  "key26": "2k8Wm1Keaz4XXHGfGemBhqSpBJZavc2SiEq7XKgr9UcSNbVkUsAkjSXjXGKBUoCZ6Wg23girJTabJhcanR6fn6mE",
  "key27": "2xTELReCMFV4kmRiBgisxUfEo2WHSV5xG5FXrpPb6ohFExSzhnurRjXVrTHt22vQi4Jsv1K3EjaazNgi48oGpmeD",
  "key28": "5dhJVvhkdUpx4eJit2RjtFyvpjhdJECyNG7pfw3K521PLy4BrPKipBAa3qLAeumaMzbLEZghW5LF3Qq7aA8zJL7b",
  "key29": "3F6Q3H2gT9iCVCwX3atVfbrTUQsD2kVZwNFh71xeEhukzgFyNPFN21eU27rWJegR7LS1uDTWs5ckBaGvK1YuZjUA",
  "key30": "4hopXLyg6234xo7LCnLNGCzuU13JeH1RNW8NtPbGpdW6npUhpcqECE97SJnqYX1AYgtt51BikKYjTKoTYGfdJ8Hd",
  "key31": "UJZsQ2suuXhCHX2K5GgfgJWYJXE1pXxnmivjB8QQmojgHBXG3mr4359AMQx8dPXMrrsnGbCw3MhacuRErzbWP5f",
  "key32": "2BHHT9d7RVpDAZPiZZampAW9zHSXJ71vMKhPYA8WAexm2VYZp3whUzh9Drw2XXuvkZHGBgxfRX1SArAcxkW5wULf",
  "key33": "4DJ9GbeLMcfiprqRsoeF4vunVkdzH7zF5yCEcvauPWUifLzpef18BD2xFYHsLWMaqRnUxe6RkT8e41XpbtJGMaaX",
  "key34": "EUckt3xZga3hxZApd2B1CVAfLDrF7V3VSxkH7Zn7p1hoSkmG6McpjcfWAPJEGBRQ1PAjV8ZGPUn1ZWpU7bGeiiM",
  "key35": "2auYbq3wSLhdHve5UircrcjJB2rrJSDs39WC5yR9x61uYRVNMGrZPCZGRk2XN2FpwrL9PjnRVAGzgKceYA4MBXeE",
  "key36": "3VE1QzGyPc9EJEDxvH8yf2QEYDgL5EDxbv6E8pfXSrjMJCpb4vnsR55v1T9oWo8hwwvNF9NtXo4QzyjagrYPRXTP",
  "key37": "4A4gJ7pjkisTsDmB8wN88BiXavBr68r9skcuydJTqm9Tz9eXGvpmxrApCk8qKjS7AZPxbaisQCy5X4a4xbbojLz4",
  "key38": "3yBy7oC6EXfvrRpn1cW16khFCytLaiXpAUPnXtLbzaJBdhDwUPc4rSzyeugLg2WQUkkUqzccCY6FTmbAn9gFpspM",
  "key39": "2GYWASCCBobxNoqYVPDxqN8Xc4eRW4EvAX7bfN3vXLHBwL91k48CvC656bm3TU1VA5TukApXRY4o6QttmUL2sCKZ",
  "key40": "3R8U2h1zJPdadNV4H7EhN2iKtdHNHCjHSeGp1G5uYR1LrdkSD8yTd4FFKuwNmT5TfzS8uuXWDACqm1kdVtvQ6JdQ",
  "key41": "2QfcTQZVksd5YSWPCd2Ucfnv3WQCr7G6oMcHhE8VizeKbbqraHReczB5bgDy64GjzN1UkvwTESuxgF5ZjW67WMeF",
  "key42": "5J68FMzR1pwLyTyVLmD7VFTpgf3FxBPFdMf3qBbe3HqehymYuJKJJNft145YCQcUQuTenRZ53ERUKCsN7LV7SFk9",
  "key43": "Gzxu45LVMzWvA9fcov2mHxQXooX9cexcamksEn6c5p1n2HjuBJUdpcr9AM5YSiedtgFwudexWbzmD2qtswPWYKy"
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
