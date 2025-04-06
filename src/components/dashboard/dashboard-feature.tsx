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
    "4FJ5QUVeANxUYPJGoQ5r23BvDvXrQdh4fYWejNLtZmjx1wPB9XmjiBPEc8bATB9Cf43z1dfz6uin9fL3ojx5c8gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2d4G5hgUDzyX8DMaVDHRzRXnqciLUGNCbDeiMFSQ6c9mifPYs49yq6aqgZoH7kpyDY8CyRtRbSxDzzJgcjNZQT",
  "key1": "24DgotB4BGFJ5JL9yYf6WNmnPGoN5CwL45dce385eKqLuBN9SDP2haTCzsXYomdcSPwvZ25t9Ao9QcapYh52j2Hw",
  "key2": "2nkRysm9QXW2w62LeaTnKhEYoAbfjyRcZBz2XNoFVn9hQnomUwSEamLjNRvDEM8TBEmiWHcJFBaZeEvL9CQEoDGu",
  "key3": "3jDKJ2zM3hruYteu9kEd4VCFyCzc7d4DwwqZomj7kA3X1TRVi4LggoAgWhFGskxi6LxkeNJwdZ68M9F8dXNz3XYn",
  "key4": "5kVUfXk9Tdk44DjT8Ywc6BF3k1HeJFZsaEDVebh5o7wpLQMm8RFqejGZxbLK5ZcnwU8B8Tm5sNBZ3i1NdVVWjFEX",
  "key5": "3eYeq3xVYHdtKLYQKbJNbXyphvCkK6VmkZZPeK8Xu1qR3ZrEQrKZcSJeUHmq6qqRNcmrvLZcyuYJJKhHsjn99hgL",
  "key6": "3KjYGzzBWNuqMbDtTnW2XBPSXZQiHYkWcVYqCzXkaWGTJdtfkBgfUXnpeGtixbQJkdzexprruZHVwSwZt9zR8CGJ",
  "key7": "2UQaBtLGsnSNYVVUEzBF2kSbbjZobGxF2vZ8sSjnLjbokXxcTzaRnRdYooxmW6kBnmb1h8hxtBDfZHKCrv7LfXyM",
  "key8": "q5tGYZKV2xyvzk3uq5Q8kFEgCZx1cuXD5CVK4xa3KDWjmzVzMsZHkuvP1kV6okcxy7GCk65EkKDd8Cdf1MuP2rx",
  "key9": "5478GQeZBSm3EjpgNhH5TBi2CL4ugDvyPbkjWmMtQjHkWprUj4Qd9wpRZcJM4tDg4CiQ7ZYyodcKB6DkwyAKh2KE",
  "key10": "2V5QFwnou4zRSCzZmr3dsTozYmtNFwQBu8mkRMfcxeSBRhHdBuDfkuPE3zedY1dejCmat7imwMKP3GfMVwKP4fKN",
  "key11": "35WYhMm2CUWNSPr6N1injmxGQj4Qae7xaUMtezAVQgKp9NmV1WkE9tG7eReUsoMrtPEuPZZ9D1nkxLZCFQ1RNYS4",
  "key12": "V3btiCzB3XMZPHPZ9Mh7rJ8pKU2Lt5uzjWJ3TFg9BpkJJprFQSwwiVaXfk8j7Fe5tvCbKrwUiMeLsFzP8MCBU1J",
  "key13": "Q6gaaVEFaxsNY1yd2aTjnY7rFyur6kJTUoJyJz9fFuJsQEthWHknUW6VufMTMwHbzVFNeswgxKbVTpg7axW2qz2",
  "key14": "4j26QS6S9TjxJmbrtcshY3S9zFzz6nPgoUmMEVV6nLsoSxzbhPLBSWGU8FGkctVLECvceFyqAwidjkcJ5weQ2sJX",
  "key15": "4WvpWcG5Xv5hwLu8nVdX2Y8cQvts9tPwahFNEzzeShhjJqvPgvjh3HSMnZf1bHJxY3NMyT4XUnCBmmfvAxdyh5UZ",
  "key16": "2ofe4JnQALHeTYcHuqKskp2zJ6zi9K66uBtUAvnBL5GmvwepPZS5ZCDzkHeif6AXkpJMbTc7vm71Txh1X9Yy8aWz",
  "key17": "2a5oVwSdpx9N3jBDu1Wbm6AV75qEToK4HAm8vcAGeY4sQWTRcHVjbCeATx66E5JQvM4L1HYGvHzphesGQUbpqWxG",
  "key18": "5apsE7EZYrq4kiyX6XkZYtq9i8XyERgynqttwQ5VeH2qbQm63YxwmZCTWv6s5YZUg36MyBX4h6b6CjfrK471t4Vt",
  "key19": "gtUw6ET8jCzuFeXBxKTcatZRWhhazT8GNmAJrLY7U9GPAE8hnbcf5ZSJVt1RSCkv1rhHzLNy2m1ksqbnMpRrksn",
  "key20": "26dYp7N6GmLFnEm58gKnDGVsS3W1LvPRHKYosyDbbdMkautSGAfREYM5RyWieKyUdabrKUZwiKgT6yKkzHnC3iph",
  "key21": "5KdHX6zMPPwZeDfbJx4eJ8YoL2BCgQThN3ngzZvPyzZ65k4fmFYixygR83r5Dr6keNeKjpdKAh38n9iESQGFytha",
  "key22": "4rNnRtC2A79BggjbwnAeacyAptcDCHVzhUWBb58hiemvhTstcsRRq88oZ3L4rpeatS7sxpvBCiB9ezpmMwN3jb95",
  "key23": "4aTfpjYSwmCeSDTzTusYAKQxQWoxwNpN4tzmR8cnXvNmKwCeGaTyzXvLVdPZhkS1U1DYhPzZvyvSvLjBq4Pc9Dmb",
  "key24": "5YPBNC4oT4mZJ8pUpsNCieBijPGcBNab2xMtrNJDZXW9PnXHaX8bpEvektGqmcFf1B8iDwCzC26qozwdjSHTt9SZ",
  "key25": "51UT82ng7txRQF89KNf5wLgtSJd5ziKbLDpfHoozBvChFZb7xwpnbpq6hi4rtDRq2yjygoouxzWHgahSVMTbm9yc",
  "key26": "z2FTNb8ywPg5V9RTfd95BHoG59NpawBqaYywNXzwYB4im3jCrjRoGVhEscjM4RSXzmhVHzAhXYjrtwQSKRfboyf",
  "key27": "48JZJctA18x9dWg9YNtxexTygGL966c82TneDfraqzL6tZE8agWYvFGsgmhrK53AVKq6bezycTTHHUDi6dN4mEqe",
  "key28": "3CG5MdcRYy1qu8LpHeD1q3fZmPphg7UxXh2Zs7WFZNauM1NvAZ4eHWwxjZHhwYXBHEWFvrx93AzY5yaexzrgwCqS",
  "key29": "5XVv4LTrcRtySBohpSu4K4LVcQ3pK5W9derabzizYE8pQkLxnPqw3EBpjRsPheTpg3ZUtFXZVv2EupBjJ57yWSCL",
  "key30": "5RtyvKP8MxcmzCouNXonZ5A3HcAY7zoYgKkkGZuokBydxGp2NKqEHVh53XJYCAaBYyMkYuRgWhY9HSX4AfSpBcFt",
  "key31": "Hvrnqre4t4CPTD8LjUf8YRQVSDaTSzbPutMMbbhuShaZYhFKf9Wbxhe7sgNPwyrzBciJ8Wo19e8Hzwr9hbp8oUv",
  "key32": "5ewkjnAuT5EN2JMk9Q7GyG3g4uR5HP89LsCUyfvKoqwtEXGg1o4UyrUARxXWhUoEpyHi4bW7TmzeQLFcVBdcm3ne",
  "key33": "4hiiKcgo6HJT7NMcGtRniEjBuE5MgpsenHkXfJzPYydfSmhFMim9v5aDuMtTeHZLXsmyYeduMmAer9sbtnHvsVbE",
  "key34": "2dCfmBCt2QW9JiCrdhMiNg8hqNUQs7XaRt7izv5jLBbwYz6GsHx8efUKyVdYBuhrefyDHrDspK9pTTMiyUYfLBNZ",
  "key35": "5z5kieNRAC5c8VGBLb7qi2cJ3NL4A7Lt3BiNojwgxqto8oVbiq7VH1jYDaxcY9CKytWkzRmtW1t7mnnvU4gMRmEU",
  "key36": "2hmt94PHfgttYZ1KZUWF55aft9ZCrquejS7nmxBeAt9RLvrGNLA11BjCZszPDxD4L1xR3rng1ZYnhPxMvUi7eA89",
  "key37": "4WBLgSupe8jrfecuaoNZdEeEwhBi5RZrqL7RGhWJRP2VZoDW9cGdywVDqEVAVkRFgym9mEvyf1FcXbGBfbUrUUY9",
  "key38": "5NjnYj1p16r4UBshK7r6RHmrjzmkddBHigZe2U8k8EfsXMyTG3TXJLBxgMCVzrnz7sY24tWCVWARMoXYG2TP5Nx8",
  "key39": "NDq2s4iFiZE3gGQb9dHW83HNJQWyosejnf3stG9onTAszs6VvDYHnTYXDU5vBg5QgNioxgaZpmQEqQCxcDhxU7k",
  "key40": "48zs2GRi6HKX3W62aTtv3n9od76d4ZcXkzNnwhRuoaJaYk6vGpTyhuuURYzKoux1tn2Nb8i66WvK4pTPXkU2wfmT",
  "key41": "43Z24KueNYRdAg1iYVF1ykqRWggMmBromKy5iwVANYCA55sfBJUNFMKMRQwdmLFV2g9AvxfP9QVNQx8ctzMUbAfs",
  "key42": "3LREQXSHbKPKZHJyAV1HF25e8GZe8A53nGKajgSetDxpv4m263ZZxSuJiF9vT5jE1vHPQVP1yCDaTqCCeiqQik4H",
  "key43": "NYxUfjcGARoGCV9emSBn2L5qsgKuatM3qNEtBMhC5FVhWafyVdBBpBu4yiBVaxWXoRg4qwJ4A1pUUatwj3En78b",
  "key44": "SqJUNmFLsJq277Mr39tCbpoqDmHGwm9LZxaaoxivHVgFHfESWd9Qk1USQvMSh7FAEZ1e6EMHkDykjh7PLUPa4Zn",
  "key45": "4ccaB7boiqDDwEKh6ThjKnJkvobBArttCcZgS8XCfeYvejvdSGExbX7oPvz99SjFEVm9qYSBSAC7gkH3HwLwdbRc",
  "key46": "4sTSkPVX8r5FmYyhPGK7PuL144Wvh8WRYhfuEDnn3K2kmiPwWzd4HqNFa2k2xgm1BXPKeanpD87yeBZwkYmsZTQU"
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
