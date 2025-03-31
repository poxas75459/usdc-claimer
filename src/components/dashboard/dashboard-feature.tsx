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
    "5MfFwTUCk4PxmbhkrCuNrZ8Zv4vgcvMCirv5GuCpnEkk67YnA1awgZBsRcndxVe7ehyT6V3V53utd1T1xfC4zc5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HbqJghVG9sFvq7d3YTd5QkYje4bXMLBmUR5oTDzzSyawUXmnHwzHoJoYV5LuTov3jz8dbQsnpHmQEVowFoC9NFE",
  "key1": "2JaJ2xAN5JT2u8on7QKB4DHWePTvDFsRnWQRxY8bNxUjwtVGEieRWpcSRAfkL7W1g4qSYY3XTXZgvV4a4dGXUqKu",
  "key2": "bELbfTe1VnkMdPxMJeqQHTuPLB9XRDVCfX5X9W6x95mzYsLGuPAKStnSeRhwgCgZwTtimRBCQDDrqFZbueQaw9H",
  "key3": "5aGGMX9VdRHbAduL8Tm71euUZEWUeWZBNYqFKxu64nBa6jGthHJRJ4MRPbSbJm4MhGk9p1hTPvhqcyPXUrEN2VLu",
  "key4": "5U4T3Xr6uA7CDrcoEXtg8goSu4d2LeuZx8VExida6rg4t9T3LH5S95mjC2fF3HrnNGJXLCoZ1cKm7HD1AbmZH39R",
  "key5": "43nGCxqtjRiBJXCgCz44srNLuVDmSBNhWauqPXqK5uf6aJv23skN7p1u9F7scjVRCsXT9F4sWgbmkzR68Xr4b4Yz",
  "key6": "41avTmkD8Ddoj8FAE8KQYqaKKYLMfYB9ou7A4HXLs9Bjs8eJb1YtWobfiBiz97QgnrrPMUcm1MeSJ3XjHBqBsdC2",
  "key7": "5ntDpB6GEbPG1LGnRDsb8P2pAon6BCpbHKFXQu4oqF2kAi8eEaPdWMeC38qmwmK5ocyuDJLa4XPyqnsBQm5Pz5Zf",
  "key8": "4RFVMJWvm3eDHTNWbcuwSDvs5GPQC1mX4QdXCVB5PAGhZFZbX7ifkM4Wb7S6hQ7JoFRYVSCHY7jyKnHb54oJn5Hi",
  "key9": "4qnVsMgZgqd2P3mYzjB4r7bbXkcztiWzRBsnhxNuHYTzNt7gPqScfRUQ4vkk6aGwVpYikm8Uq9A8CxgPiTZsnYH6",
  "key10": "BYJsTZmrTbUTso2MMz8XYQsqLadQjoxCqj3seRGeEyQ52RENKpg6xwcVRF2sWR2LwXLqoqConLnzTwA6Rqzi3EE",
  "key11": "2Sb57U4Sf5HqNukjkMZeYNZei1abvf9BKDRwqQkXDijpTn97gteAoAuEjQsDYPYLfpa7QvckdjBE6pE6VaC8ndNa",
  "key12": "5ovpQ9EfshPciL1WQ6WuLVju86g96FsnBQMcgXWa2CvPT1u2Sp81y6dB2KFMxcZjF7h7daWAyx3UStU5TPupJEmM",
  "key13": "4tw4Djk4SinKrVjycSmNmM94aiJhVEenNc9F9wFoaFd4ntySBLQ2DFzfANT27wBDTsyaKny1aKVHwnWJLgCm2UZR",
  "key14": "5tw3PpW8q8UzDMg21qiTVJurbfAZYqq3Lvb3xSH2wqXbkbZNf4fD1b26BkMBvtemLY7jAfgL5TCdQQPvwaW7e6Nv",
  "key15": "3Ze7C1FnPraD35M935YqQa1NSxb2TST2xZ2pJCTcZGYqjSnDMnZyRBtGT6EFPNnqGGvEuHGLKoZ7c6EdLtwQ1LrC",
  "key16": "fkqUE7BeG71syWUueWcBV6Z7kQuQ3NoK3bse66JzS55JAPvhGgntPZ8WfFxJiiBiVVZ7xHBtG8h6APKyhXYX3bz",
  "key17": "astq72BaCnAbq5VSSV7WQPc11PxTkQQRoCyPcpoK6BwGm8hg6oMvz5v4gKzFVzRcwZKQD4xBpsAMJn5p14Bx5f3",
  "key18": "2VLCtjGzKBXT68dafDCV1i7DbZKEgRRCiPDjUjf4PbA6kTvogxQZADQ3zz4apxgQ6KkitHmpsoS7SDCJm7j2xF44",
  "key19": "2M8HwYBHZcnMG7LsiLL2Q2K2ob4wpJqaKvquQDyXsZtJ5bLPGNdyy3Jcy4ngrXHQQ7HkA2eGDohUahrHNhqBKsby",
  "key20": "54UWvMsGY3rUZTCSoa8wYbcoKqcHtTVUahhTza8LXeq5L5ZwdkkfigQJH1ZLFSGBm1iibp7szNFXAeteVp2smW7Q",
  "key21": "49iXJYfqPeGjvofeuZk72khNJV92ERiR8xURkf9TVezixUcKbqjkcCHtHu5jBXxkMQWfXMkPrE3yv1CETZQrGgm5",
  "key22": "2Rmkyj5Eag2UB4TzFmBQSKGPf2HmXDhjpgTb3FgrfFGc6vhNA5yvPmcPDqjvFjwTjAsqrn8JAvEZEGnSHh4NMrH1",
  "key23": "4K4RNF2fZrVne4KQK4TYsoCKCuZd6mdKXV1vXeRV1WHF9hcKHJQdvREwumLjG5zYewE38HQUyipdX9Vz9v3hbnav",
  "key24": "448nHZCkYgNZg7w6B7PN51kBXtxVkZ66M6VsUjftDnyRJrhc3UCtBjDf7a3tY1mgJSHtVLCwwX3WAnTU8qXwqZ9",
  "key25": "5WijwVHpLonhNPZA4zyX9NgdfnfkZJUBYxkVJcodfErvfsfrnmRPiWEjJYqjm5rS9AfcLTGvGRdmJ39N5YmiYFuY",
  "key26": "5ntEaF5SBQVSvfEAFLdCzPp2g1NfLjf3br3paYiUnVB58UpJ7Tq78hV5jT6x7ndnK1PPYUj3ofbGmoJZB9N1yLB",
  "key27": "3bCs9S5nYFsjS8bzAqN6vrJjEefTSY2NLp2dmQqTkJCYuF8XKXqivJLGg31AJEUHLeXdBaDncBtRvbo2RRYQs8j1",
  "key28": "5RYg26q1UggTEzk7PzrVGjT2z14Rh8SDHtvqfUjE9tHFfKjRhZLLKrTtqvDCtpTECfjWbP2pBUwaR7EoHCXHeetq",
  "key29": "4PY2Gdf2yHx4RzXezxyFt32BVXF8yjuAaN6EPjiT6gcaxVWzGyDSNor9pQwK4j3pxxot5bF9ayuiMFHXzPhuFEoy",
  "key30": "5mQKW8X7oJFJL8bJAcg1b2SUXhmLWToryviZZS3SjRQyQJ8kzC12sp7nS2prsxHPFHG2BNHZZpJVKXfqy1Yw5B83",
  "key31": "QBjJXnZyVMV8gWFAHa1SfC5PyJLZQC5JJWJ1jPPGDQbAkMByC1S5HRr4SCNZwSYoXc3ozGJZVKciLFMaEGso1Af",
  "key32": "cuyvXqBWxiaBPcVnfUVoZT1DgF9ijDuhcKSPDZAxCDQZNybaKxiMsRNjdXGYe5RELVqRfcNTHaeHKD9WsT7ssUU",
  "key33": "5fppXUE711ZYvhL3FgbN2ryv83YYtupUU6qNZSQmgoAU3wK9A9p2kXrKkXfVTJwCBxcDmA7qCGshhSuCcuZ2iBsa",
  "key34": "4fJrzyS7mxaVTmFXfFxMLwP2u41YWZCEYugeweY3c8zESeyrYkaf2LyXkPKyXAhzGspqzhHkAbzZyKYnP5JDrkp2",
  "key35": "66SiHmPHKLrVh328jt2XdeXoDzXnYtHYfHJzydjswnbNSdThGmRnB8NLZgBJasX7uoZeqkjLxdJN5D2DmfXSAFnd",
  "key36": "3MaE4RyqHhUysiqAkyjkFhmDsUZi7x6PtU2mckCkMCpVVjzhVpwwMg3XCwctE9eGWNMtnCKZxRc5t8zJwd62Be9C",
  "key37": "3LXfcE7pfhATbWBvAPpHP8nDen95Hbf2ejbXcc3xGqq8KV98vynxYgU5Pivwo8CD7yxcP2HumkgGtjopsoiCSEne",
  "key38": "E1FNbARC25yAs69gePrd2XQDYhBAJec5XqZMrSMV741gw3mgfny523RYBgsgf33RDakqaXzBDZdXLPE4tPKqifk",
  "key39": "3zjQDSrdHo3GguTnbs4L2366LKducim6MBjvAnm42sKYx6aNQtGuo3KfWKwzdrVQVgmGDagqeXuJKgNbiD59KY6g",
  "key40": "3fmpY5eHvGnuwq7qQ4FvN8fjh5pVZfKowE7FkqSxdKJ8y7s4jLdR9Le8QiEuUChBMgeUkSAD7q3NypDsYxKLeSwK",
  "key41": "3czwN8nUzPBB8EE6oj7xG3gj8HsWGZn1ZMRgEvT9hctr4M56UTxojkkiV1fBT5dCJe31Kj5tcgSvbGZFBzuNbFvo"
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
