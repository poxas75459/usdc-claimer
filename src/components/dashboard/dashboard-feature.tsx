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
    "21Lmu2aGfo3BpnKwuNYt2KvsyH8QZgz2DiVB9DJFHrmsqytC37eCdaxkpZzKnnay3tXhKTmKEn7Dteopwndye6Qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtPJeNhTcazkCEGf7y27Fnwtfx9ZBqtVfZECrmi7wuZeyrwmiHQnhwKRrCwB5kPFScr7Na8XJDb6uSS1TrM9Nqa",
  "key1": "3aibyLLifpfy1kEfx4tp5nLLKmyLWCCrXsSwdZzMBgS4ZmT4R55Evjw9fWgmNFoVzPWWUwFsPb7K1N4kJyDrKU6M",
  "key2": "2E9zLzo4Liv391SoDyoWPT1KqxzVjD8kubfK9bDC43Uhni63qS54nAdD2KiZD9g98JgJQMmXTzsAQ8JWAP91CG5H",
  "key3": "3wYVVbbFq5NcR9iSPE4y38Rgo5TZtjn3A6KzvG7nwhAteLR4mWZtvEXY5UpbF99yMhtoyMxdPvUsdbkJDrS4petq",
  "key4": "wvEo52gQ6HLXsocq3mww7xPeaF9vZwD2AMwe4bwN8YuroEQucEuvYajYFuHPFBmVvYS4DANx4nPuJ14cwdHor3p",
  "key5": "2gJf4aA7j9PUcnG9gyKuyqmQhJqMmAtcvuSkDjXkt29mcFfCyAnvrEDhGeSAhndBvZNPzpRACei226zWV99CCbRF",
  "key6": "5h4NmfcM2s2jy11R4DkZsEn6f8kQQZSRqGRDryKCYujjZd9hZNp5Cb3aqMvYRb5cztWrE8Qqq64Nfs4NaZGzyLkm",
  "key7": "5Uapp4HJdq2ibxQdwRhwWyvjKrdSxbxzGk44S1ABTDfU9ysoYTVkPU9JZ5cjRwf38YDcGCMUP4GbLJeWJyfZdCW2",
  "key8": "3FU1m4V8WgAFSo6LkWE6H25HdjNSumPavXn8okzFnbAV2NJQopDFvtTZ2R6dktBVytLWiEdYf8eoArzn7JrQjMDC",
  "key9": "3PYR7sNJHfGVU9n68WcZjhWkEr3meQrXhwFXATTNpChs9jYam45RJ7bJuuLSaYNRGdDGrgou6xtL4mpTN5LvgH3T",
  "key10": "2g9iYQKy7S2udmsBZGPoAd3nzP21KnGUgW8ias7HzEF8LHXAF1D4ZM4YarNrHvPSzcg72vSKoiHyLePhidq1qH2i",
  "key11": "4pqggyEq622U28mLacXRw7YFo28uLiBSNjs6KdWP17gWNn9seKSTjU3wBhaDSrebj3nbW6gBWW7LQ1FXbTCockZR",
  "key12": "fwrCfkVfHkL7LY7kfk3JTGJzGk9nxXKmgrJAKLasYdhk181Ey4bRur2LvdVtuEibUhsNmVJ1LK3voxxzUK4LUqT",
  "key13": "gMcSwqXVvBPimhjxtRRNjhg7ruqxGQLHG1Qka2NAp3YnZFuYskLf6P9n9QsPnfr5chDL6UHaHbbpr4adhQoymkv",
  "key14": "3fpuEKwAEVBcwZuFAc7BgUxPAtvhmnCefhzQxNnEbR7nvovLfPSemZtg2oC5Kv83eMGZA7ZsHMWHygUYp832VzhJ",
  "key15": "9jcwEAJFX51Gth2EtAGQugHxPkafpDeFtfQzGCAPhxkXNCAwcwZPMeycrUQCCMveCWo5xyss4QjBCN7QsTaY66V",
  "key16": "4FouFbnMdagPgdx5shkHfTWrFGZo6ZxBCHLnMVNXVhVTfsu8PKfzJE6M1YzS2ZEZ9VcK9FVZBUJGKdDNwBnt6Pwo",
  "key17": "21DZB9R4XK7NzuQsgwvXDse6FUawaysi61DBWh2DQmtpgmCbh4q42QXFMEQgAb9ud2AghhdHDY6kRfFrTy1WwE9M",
  "key18": "4KdYmEoZh1NhYzMbk2xBK343HjxyhtqN9TFErcGtMJmon3GxS3DgiXxkeMjXexwYKCGLrpkimk6fZ5ktG74ZZFRx",
  "key19": "4Df7GK5uFh6AyMb9F46poAG7xNE5aZQwqQj4iJmnUR7bkCe4XZwBcafMZcKjDbQVuz2rTKNSzLjiTNwS1FiyQRV3",
  "key20": "5uLxvNcLBfaHZd33QgQoFuY71iguxEhdxtb87aowBS9heQN7rUSHLUj4mXVDR7TduaExzukLxCnPzMxQCCq9cvXt",
  "key21": "pJx5cJRv32FdFAzEQJA6eL5s3TpduvGBdJcr2xVKBAtSJ6JM5YXEr6Lf173np1KvWHHUCcw8WLfKbmBuJBiZFk4",
  "key22": "3Qjy2p5HzpNUBj4nyexQQuJ3ThoRuBvurj4TXKJg1B92VSdm8NwKLEb7qRS1mQqgvghM6zERtwh8SgiVUek6wxBo",
  "key23": "3wvQenDKVsaYwUHrHy7okZHf5THwLoofNw6b5bAkeX2yGznycDdg3LkkhbhMCuwJs9HeSXSx7cqUkcrSGvpWh4NL",
  "key24": "3EjH6F99K3icN43bi375wgBKTzn83d1VRaKwLZTUcvLYkfqYRCpuJeZaaqQbaoqWNXh18V7n6d5kyDeYtLJ7W6xg",
  "key25": "mCP2ySTCq7VtgRZL6ZzWA11oaEquodMXYzktBQWrWk9eiwuKA36QwLcycq9GHP9EJwi96xSqGTDqfMxR7zDoaFG",
  "key26": "2mcaCfjbykBQg6d19oJ3Y34TmqxAYrspZVvymGZtgcqFGnx49mC8Fvk9bvU7EZFFqmYCLnCQME7wZYHvkhhZXhgp",
  "key27": "5Mr1USLamirSjCcdCPKH6AN959smSJ1WSgZPizX6z1bGrLJVJ2zk13fv6D31QhFnYcY2X8weLDiUNhMKbtKV6Phe",
  "key28": "53pt5HQBrLuCMBzfoNjHPCaU5pZZTJAtrBbU5pwMUkc4Swttt1c7Nhn5TLhor6RprJFqnCcXSJRUnf9KNZimRgoB",
  "key29": "5vok4YELg5MaGYWgxudZbMmVHCvKw8FgDD7PPQ8dkeK47bYBr5HMGH4V7WigMd7n7QdfBU61Fu8E6XFWKMBGNeXh",
  "key30": "5CA5uwoicsojHhDAWScweaWCHQ5hvr8VmTPouTuur7mBKr7VcCXVt2Bf4ZHhvW3iPJybXwFkVtbdyidJQw1FqbNT",
  "key31": "FkgzXQSSWVumfetnCxdjF8jrhsUgGBTsx4dfiMZatyTdCfk9J9aDSX3PWAx78gyhCCqzzUj64NEgrWxPP87EZDC",
  "key32": "3s74isDRQ9jobMD3pbmsHu43344Zaf1y6zm5Aq5ft5jN1Rot3zMw8twhk4nXscu3NLFLXvhTvoSc9JAquMnkSZCx",
  "key33": "8ukw95RX8Ge8B2VpfGRiVd6WaJ82vJirjW9uKFm8mtSSdWoBQ1bXHeQdybtuSZyAjgLE4eVfS9JVY4D4y5orvCs",
  "key34": "4XQ1p6iqb3CF1vKHMKWoFSMTYyFpCpRpQa3cCUNTT9zNDdL7mQhE4XWuTfHxpbzKJK3iJ6qoPvDvnrxUCKrrToHB",
  "key35": "47N58eZyjmGMMcZLbEdcfrYQGRmYQXW6RLBVE7rrb1DBMocfEFjMreUy4vytp3rDgFFsngdRcg5ptHfqRviBhKRM",
  "key36": "2fzZnwNnF8ArhL4rm5o2JGMYrAu7YEhR1RAaPJK48JNjjxw1M8gGy7etQE5L4ot4DeDyv26CB6wVPdkhFosraDqg",
  "key37": "4nm3a2SsTzqHEJEi4zvEWw5cQ5kmyveGTitMFFcCwVozZFXB5Ukq65kBzkjmnYVudQwEpZN9F9M9YtkPTjVNRMf9",
  "key38": "563Yo5RUNYGPNsBY4zqwjG7RY6BzDPoA7oMfENmUcCkNZRjRAD2n4bCNaWXW1GudjeLDJhC8sQXPXNwggkemYQnM",
  "key39": "UbnLcW4caazQttji76KV2tcgNk7HpG3oHx9yAAyanG3eCTvAQKZQUzHrwXUYPs3yYEgkogj3U4K1Rqk3VrMZWk3",
  "key40": "3Kg12HWDVvKLYkAVeGCv5erV1LoKRvXoH3VHrinHuB98soTSTEsFucwomzAk9qQ7G9oqEN2yBFd3L15Q1stjHAM6",
  "key41": "2GqQN7emD795YJBbUMRz9A7DMGEjuQcjiTR2YnfHz9EmfEFWMHtsuBNQjjhoyGGSpR6LWeif5xcVRpFogAjaVzqJ",
  "key42": "2u8texbfy9LKQ6oMuf7Fem5kr8e6mo71bd4Wt9TnKrsHFskp59mGnhfNesxfiuGCBZDwpwxSujiZv9gqsHydLTe4",
  "key43": "2abKrHCDLEnB3GaTxtDTMSycwRQojDe6CUPDy5mJc9zwxYD3vSqzw6Fmb1ar9qDnmmTnb5LpFdxFk67xatzxkf6A",
  "key44": "53jCPkDWwSJn5NhGVWFiYN9CrgP44SwCd6jqwgpw7pBCwTLgj2LGGddyrmsueLQaAbGyZFfk6UFeuc9QeJ2VcrNX"
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
