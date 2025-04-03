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
    "41u4w2airS8wDqPqBrhcnittsFZZRG97oHLUphFa5sHCmi4ipYoY4VFjp6h4kq6Em9TtcrkLPSLM42cHMeVdA1Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52XfXj2A7SPrM5wCmg9rVi4Sw5XNVeMYHdGhmpzhZfwUS3GG9dtkEthtwTdcBBn8XhS1CdMeBCdoHMeEgMU9BLiW",
  "key1": "SGTCuc652spVvhQt7HZhaRkfts7M1KFy1YHx1eApAb2bY93jYaHDEMiR8HMY4LbRVmoiNZhEEGoF9cvGriU26LQ",
  "key2": "2Rkeoq4B7qcM6rRoRx9UWdpqArUbqtkZzr5GZYoU1c44jqToQ5bvdfHnyZdgBCqEEDroKsintCFCxuCT5wYjEgkx",
  "key3": "2iW8RzoCHDSro68bk7LPfbj6PPUb7XXW7BGMiDeoCFMZ1qQWLSW8WeUXMbueogr4Qq84VsbtaSzCNrHpkGNXLL5M",
  "key4": "3cWRKBNqeKsGKKbJezCTY9eDj95nK6yDuuZuNy3RR1yqd4UBVRqjAKFAhgrFGz63Dmk1Dwvd6TYHzK8i2sxB4aqk",
  "key5": "dgigxJvtjwEmwB2F6KWhtjS35xbWyk7PvG2FapHy5aUSDFZnChep8BWtLDvPgJ9SuNrDUsHqdojtJbfvkAyK6S5",
  "key6": "3cysUvWAe3ey4S46darrpW36G3HMR7fF9k9SpnzBTvdGoUW8rj3gao1eFz3RF4mQXnjuVyFjQoKTvubu4oWSXtrB",
  "key7": "KtZcJkLMpijWLfj6d5fWU33FPXCZpqSdo9GwjC5W11Y8ggM83Mh3jSimmz8dqZ4WJFTSMbfathaxzWLuq6vvkd1",
  "key8": "3ybFMAZ5Day9UiHJicNwNRrY4VrSp6dXt4D3czbYQvacPMMccHAhLDcDpJUN4jkKPnjSKf9SteSmPthaaNBD8hge",
  "key9": "2eWKuPWU1FK8yGyYiarFPtHa1BTmsunc3qc4tBhj6WCfZCeDAL4gVpGJbY3vZ9mZPBZv43oJ6RVhVRkWWyoo93Mm",
  "key10": "JQTTb6zDPNRgaq5EVFsP2WqgH2QeFLsrAEaKY2Zj4mcPx1opioufRDpat9EVzX9T9mA4nzp7ARDUrgFkECJy9FB",
  "key11": "2pMJG4rgisEMPR8hbNK6wivziKoJQxAsPbTbMkq52nkWdFa6s6fP2EJtYJ1v3oaqqfc57fHmUVRV4QRxCRkShj6T",
  "key12": "4DadDETc4RkJ1GSVvGPLMkNNt7j9ECvybtYQEDCnUSVBhPAmLb4sFszzt79LqyB6SffnTZMcFhPdZDojtAvRYxDi",
  "key13": "3LvZdYVPo1iPifSgCo2UmJ9RRcSyyHCL38hsXLvUwKRYVds4xmFjQU1nVURsFFm5v8n9GRLP8KZqfQbtg4y1GytN",
  "key14": "3abap68LCpQJMyQM5AoHx3Qe3qGnttyfE2vYDQ3KUgEXhBUHZQhK64nu2oDU8iE7NVa68MKCad2iZZXKhzo4W4FW",
  "key15": "3rvFWRBBhyPHiu9zAgUMfTLt79XpbRD52N3aB24bxRSuM1Zt2nov6xdxABSbuM6ia6yAthZjN9fFGfUiPQSbVLkH",
  "key16": "3CV8TPXe9GAfVWPkKixAbKYDmBnVLsNPQzVXB88avP4BecWQHHaekLj45ik33d2xWPVsNc3bM8rwjqcmihMh35KC",
  "key17": "4GZ2FXZupQMaaxD3WH2rZwhawb8YdhXZNJtpiVE7wzetHEZ5xrev3961N1okQP55wGAtxzxm2r7pDTj5ySqBo9U5",
  "key18": "3KURSpVGscPpca2FJhuCjghGkJAexD7gUT51bDhVx32MGepGmBzY26zx4WMRfsTz9pdHNHy2h5egG6Y3MF5eSzkq",
  "key19": "2ys8kEPmPfpdYnFo49ETGSPShVcboCLpdbF2axKjjFTJusti74kmT4oByKrh4mSiQzXUWZJCj2fCWQRvgsYZTj6P",
  "key20": "4XXoYXqRyfbbdWkyxkyHfb2bwhVM99484qiy6JUBTpgYRwfFjZyVAMk1FPbcyCc2NpoNC7Qm21XbrrsB61ibqmkr",
  "key21": "5avM8ZWv2h6WrXxhzjirZcVisshQajHFKQEGkSinM4UXmCyqJniwiBxYES34WXWsLB9gcKhHhV5yT9yFtvUUdzsw",
  "key22": "5tzFfASU7gDK9fsyjehXhdewQxQqFx9LUtfEA3X5rxFdEcynQgxfTywQCHMWN8t85nWGBd6BwWztRYZEwGrKMViy",
  "key23": "3am9rMHJPdG5NPD8s5tGG1pa22Xgsp1mxb7m9V4Vxg9MUmkkRHYgECRYC8Kce9Yr1ALF5gYYaFwtGdDJ1jVj8vQA",
  "key24": "63Z5yxRmCapXuyMBTZBuWFgFKVqoCMAYXBLyyTqRjtuh1ftGGacNFW2UTRo7dCwi7yMEnPRjoSSijDbKXsgzffT6",
  "key25": "26p69po6zc5sHpJ6Q6vx2UURSqdivJUcD2rf9kqTZnUk8bPuqaqE4dTtW3j9PgBaCaDieK2VAHaHaXfdnPxudbRi",
  "key26": "43BzvkmAdtw9GzkEusiXU8B1mwtekmwgm2jBKSfWyUJiqMmrQ5BvWYUyzHwsfMEiUhCN9GWDEvPkE4sZt1Runpq2",
  "key27": "2aU3XX5ViZxSQFnoX88KStNj8LERJoYcmRA69BmZWaAq4WXpaCjxcfunK3FWaZCBnz5nX6h6xCnQrk2MMkgSsTiZ",
  "key28": "5WZQNYtZr45jLZFvVVDPEG8oTdXvasptMYYuGkuQMn4UQ8suK4KEnshRMCNYankcQUkHJHpFrjsvyUxme2YoE7YP",
  "key29": "2NLiDSFYCaxxWTHNa8s8k4PfrYq4kGaD4w4dq2emfDF4jHrJ5AcHA1BwCq4n9Rnv6KjQZbg4ow2ThnmHcP14r8Un",
  "key30": "5TibZ65XUVQziRjSEcLFRKGnpbVN1A3AdnU8LqPmJdr5qxQyMPhcBXh8dFk8kQnTyK2rBLt6DXU5piKkNQEki1Py",
  "key31": "SSccvjoqy1MVUsU4QZNFey7k8D7SXNGrS11qKV2WjNfLhYjAWrZsiHoVvsFxcy6HxYECQ3TLFcnNGyWYx9g5yBu",
  "key32": "2vWV4BjevmyZG7kVoWvMKjT8ZpwvoA6fU5wLrefi9ki2GzGZyTpSSJEpnP6Xz6CpFPVQxqXPYi8j9n557gfrtj6G",
  "key33": "5BLt9kHHeVDUaHmveagCSjh7x8BxbFkvMKyVAuDf2DQZoxT1m8AjkxtXYiNE2jGq3jzj9m3Qywx8dMUNHzSuNsoZ",
  "key34": "ztAuk8PXFVV4QZSQEeeN5pYRhzoBwg7DiMfdmTGuGhQEeNtNQ7GpKyGLhUiJc6jv3eWqGzVPiibp3Nqc1JQ6HDk",
  "key35": "5j1ySvAMbVtDGBwWckZAPCve6FXmNphGCSyXqMb4cRLBajPk6TJ2w1xzBjgDWA1insJPvtqVZ64tf4k22obqc3JW",
  "key36": "5iMJGBhmULsXX8daNpj2iehcub83WChTRJpGEcn1ksFJ1pRXyiPvMakBz24n86Gt3xYj5nA4sR65EyNYxCUjiq8g",
  "key37": "5TUtDCseHmdCsYwMG1RWp5qdoVLvU4UHznbKVGsXNdNnbq1gn6EFtD569ncXbiA1U1cf7sZHyzvEZJMW562jcy9r",
  "key38": "4vKqYkT5n9JbMcGEX7EPh7Jtyd5gvhF7rmRGyRd3TmQXn4Re557dn3KoWNAdf78w2cCzdHUR5SXS2AzWBDHmH9bt",
  "key39": "67QDS8UH3y89wJsWgDhbKsAcf8vfJeGX73QsSoUCzYuawXerNFKPr7wMwvYHJmJ9XfX2hZDV275m9kQKuaVpi4Me",
  "key40": "2QApSzCud9u2USTtcChfV7CAG14CqufxzohZiepn5yJDnVgjed53ehWPmVTLgkQk1DSYZ2uhgfFiiZ7mKoRxUivh",
  "key41": "yCnGmt7Q1NrcV8r5ZRj5zUnx52ScJn42RNyBEJS3CPnLQTDiXXGZmzDAxWjykyXzsfnA7DAuxJjiUF9e8k9SzQk",
  "key42": "2zRAEuZFtj4gAf7e6SWpmoShKYPuKpp37uMzNxqMXua1UvV7MrdtEkXzVafeSS8tSfSKnGBJhU5k7AZcVK7m2Dui",
  "key43": "4j8tX4knE2BSG8QrQs4x2z54tpGpbPnvQMMhPtRmYXcwkTXTW25mH52A8SnZ6w3TZTH5KYj8UJUvf1Cj2Saj7jkN",
  "key44": "5fUAPcjvrJhHcGanS63Xmg9iYbk7BnxvauXrhodcNirEf8RD2tywchUnEbJUgJdW2eSbvG12oE21mb1uDx2XRjW8",
  "key45": "36qqCZWRKc5eSb78KrE2USVy1ayfc56cThnfXQwCv7TW2mSm9bJCVEDUK9Q3cbajJEX7mUyg1PqimDPx5aXPqm34",
  "key46": "3ZXjVYvLpEgfHmhsRgKGWqEgwjhuGkXn8zGKBqnqMYLtBGnv3ehjAd9n1QxjVxUPJhNyPuFDw7MrpBesPjvJhojp"
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
