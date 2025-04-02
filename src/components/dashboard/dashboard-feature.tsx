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
    "WXGgtKWxhVewLrsn7f3PuUtJ8vPQRx8Nq8sHBe5qvLztzCirQLYuUVHQxqWKTjxtqsb9QfLxrkH7mSowYVfbXQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZ3CmUGdzRQ5ExsccvbDo1pnEThCATFcRf81w6qez24vtCH1GCkipuTdyLVKzCBDvmJA6aGdMzNudXHFejESqGX",
  "key1": "A7q1H71pSQ8b5JxAhsCHpmNjhymQUDUFE6B6NdU5iLR4XduinhgmmaWgqvR2rRK9ZEpt4e3yBZF6Uu3jq4w4WLf",
  "key2": "4SzCaZoRHSsMENT74BL618A5W1JwAWsZ8ausvMnSA81oRGrBgh3jALPk5eRZp5xA18T92PWrDyrYau1c5V2bRznk",
  "key3": "QggsALv5GW5Ff6V354rKF4LXRB3uQME7HFML3NV7yXdipwkyAJKqGcXpWjgdr3MQgB9LcxvHhg282ter4XqgyDC",
  "key4": "3UKnn8jyVkJCoocKXrxJJhW2QtyJafgXEqNJXNn8Y1PiAHqqr8FG8gqjerRmCnH1gsZ2WPek2wNGGcgsRqe9tMNW",
  "key5": "2LcUcCdxDL4keKnaBP8kM6pPhriym1Kgy2jffVznXJCvMZHYQrqMvcdqTypfdpHhabnTWawjD847hEZnVr2Vw6Mw",
  "key6": "5N5qVXypmhp1Jp99KhJVhCAQzzNB9dtNtaRKW6KNNAoa2FnYPTUifvMtxsedLDMw5QprAwaWa3HnDvzJtLHrEq7d",
  "key7": "2ujtrNwhpxLQPkxzzJPAyZBBBP6XcJsSwDTScoNmvuaM5LJyvWyZ2M86HBWhQte91Ntbh4dyvyv99KqNen2byyb2",
  "key8": "2HFBFyRWZpkiQHwfeByPAQTp54Tyg8YiApWmif6XWRdk1TPajm6sLn6etU6EWMSe2fzMvZaAMv7pkzdp1MbJgDrh",
  "key9": "4HbZKLj9qoRpxnnMm13L7fNdLXxBUF6ci6RRgX91FMhYwe6SD18YhwX1EXoFKhLzbEB6n91qgNNXiuYkgnV9kDWd",
  "key10": "4vNPLZRj9g2gpEg8rbyrrmgZpBvLxzK59DEBLrHMnoqhapeRpkcvvSuWC17mAUkiu5BgqvZEDZx2kZimecUKuUki",
  "key11": "4uBwMDqzJvmC8c6KHMBga8aNxdydcjZHsQYVW2iiTmgwTVZCGoJEsvNRxvfq5JiwELQQEqVDx2QYHVkhemsMbTVh",
  "key12": "3UKHa6YyYnYnyTF3DUCsberyavcXtCFjnGXkeQJXKHJh6ri1TFCeXdgUJ3NBMba9zEA16kS4gdHKFs7bJyDCUZWh",
  "key13": "3hqJPzoKZoyMKnBKu7STTTD72MiWsxYX3fEzW5mWh9mAJFfZuFEgeUJQW66at3kknf4xR1ESTwTSUjM2XpCUabPQ",
  "key14": "64LtM65q1KXGU7KarVFCeKzGhG6ZysFyRkESqr7itSsp5hPQzcU1ddQrKQt9D8r8D3BuupKkcQPw4QmHDyEVLN6h",
  "key15": "5kjGzjgT4zi8FK6WQkgkwjR5u1FXnaA8rLU6F8a1tR3MaJfGfTC3i9HcVuvNJQ29fVDofnbA2SX3WoNFcbVjKzpy",
  "key16": "5C8m7QZspKsAosKDPu5mJ23VAhm75tQpGXCeQaJkbwVyTc7f7Z94qfMBpDyi2oFeh1c4DAoT63kEup7eTA7oXsJV",
  "key17": "5m8GtWJqphr6TbDZtRaQGCywvDbprqmvavWVRon2HcHf7xSiMsoA83WK8VGFDGZyPiJyo2zyGbAM8iX9rLiTzgWq",
  "key18": "4wfXQKyTZP8jTKdR4PCaZHywgJB9Uqs1NaPsMffbhS87Ezyod5rPd6PEkqmMEYmiHPoLyMXvaHUNzV1xA7d733zJ",
  "key19": "dmkrZcJJhCopJDWuuYkVs1wvMJRBPPA3WTuK9tnmRba2qQ38Z5a2QjLonSBzo7p5MYhG9T7Qv3QHixEQBshNJf5",
  "key20": "3t3gA1VDsK5xbKki6pjVCS11PJNGVrdKEG5BGBejJJAuLcK1nFRaiGzmXXWEmEVCc98GRdAdebXB79rs6597xuF",
  "key21": "37RFv4z8NG4hGFHaoNWcCD8P63ESS7sfBkF8H4JXcoYBSjvSy6Ri79mqdMstbe7nKP4LhSfMJEd6FbcJnpCLvfc6",
  "key22": "2zKY4vR7XpRK6Y473ZSwxKLdG5wz8UMrDZKpXm7PMnomfn9kd2XaLX1hKUfywB9AmVmdk1cShRuN2ibXsSxthHMC",
  "key23": "3ikMBbhtr5YaYataNyFupAdCUjPUojfc8bwVgWnjEX7Wr7JEH5RgwViRx57HqxvMktX2cHcbsrGUwxYWW5xAfKmn",
  "key24": "2yZSqBAe2ncstV5QZXxcQhSrCk4ZGyEHgQaBdaBntJqM1Fswc5dTpc5SGYtZaodMQrEw3KCLT3RphBY1Hgd81RBr",
  "key25": "2cPWTqi5zqrTFDeh3oi3wwFyLwoz3eF3XjBwGuw99ox1tZNYi6yGdeXmDKchgK1C6jEL8mcpjMSxCEMZ3DizEY9Q",
  "key26": "2Xbg3X2dXnaBfobRNxjjL1BGdNDp9tP8ddKDxd5s21PaGNmnHc8nF4vcV36ErTNQUDWTTp42MoUBepAnqyzv519P",
  "key27": "47qquFZSjthDn4iWEjhRGEspk3sPFwQ8vrsYUJBJtMq8eEwzh4p4Y32AiNmyTcFYuYfuqmjyUFz7mWGHrPotWVHs",
  "key28": "5DhVLBUejghahSkTp5zXqV8Nk7oAjDecPRwoRFYYUT4LF8pwrmbHM1Lk5aCASx1z6816Mxm2ucewNibp7ifUu8SC",
  "key29": "5SRKsZ9BL4mhXfQZLjfsYQtZqyk7vT6hG4gyETP9YtQnLxL2xUWeFc4Rpufnqie7RuenTk7HMJLzwuwsB141dH7u",
  "key30": "3DZtgajWmxJ5cBYb8YXYZKAQapdKAhpiQraNqHVgxjCJpscXnuYfH6aZ7XgpKCSNArGKDH8MP6kakpEHHes1gBFi",
  "key31": "3mjiryvkuJqthzQpkLLB8nhs5kfAEzLtUz3seup4BYXHqns4myxZiPenu4aW32xSGycxKWxQXVj5d4BbjTxTGae4",
  "key32": "4AeMwKyMZXHeJn9QUxHywtivuc8z3q5LcmMdkzSojoGSmUBcEhe5CcvAmyLvpaLkH5tzZW6o6LeVRwmhyYRYjrx",
  "key33": "2jHgdQhWT56NFtQzDpZANpYmeBZe6ptKmjJDWTK6wabt1tbiXPgikpu7yhbSPYmnqVSdq6vhAsstmAaBy1LKpE6r",
  "key34": "342wZF2pxGvQi7rAGYrc4UVR75aaWD3iR5hwkmQ1XfXsBUbmdxzeHKinH2TYc4kD3tFAqyaoRoWwz5Wmp8npyF9H",
  "key35": "22pxmtrw6mgEd7FvpCSqW416eLVY5LriyLkVDM6G7q2qq5QnMzudUt17rudutjfZo35kBXBsEMLumWLpF3pC7iUF",
  "key36": "2h7RPrG7CV5UqFEtejcxTY4xHaYdv6WuLmAjStFUifBkreqRa8xxQ5g27yc1gxDgNReoU65UKR5Xcmx62tmU37v",
  "key37": "5SHkGc241TKdz2jsKSmZuzKBktsNuMqZ3hVkFYAKkAB3z2bK8DEhfm9Q8BACDDFf4BxHxajCyFBinUoK9t897XNi",
  "key38": "uZfNAeN4M15Za4PwKSGAJEB5Ks1Fe9soiSsenbYgRnt4sK4tLyDqEzdhnpN8FYsd9uFg7Zwi5qYMHc3Rgn4SfLA",
  "key39": "Zd5pDxWjc8zeVXxrrKQx6VQ8QEFHW6MtmrNYHxHy7g3vnoR9ctRk5s2d2Byr2UXmjMmHbinSWfZ4dS6GAjrhweM",
  "key40": "vT7KUVfeW8uWxdpYwmw5GfceCXP7WnGDHwSL2iVe4kVgHqxx1ZrwsqWXT7j3fHqGunbWhzRENxdoTrrmWSXesEL",
  "key41": "5cveVYjctmwETzCjpKxbwPg4aBJp2Jk7KsYQguNR4oCtnvgDW4fPtU7JmhyVBEuJUchMiAYBpCkdxkpLU8a3DB1",
  "key42": "2miZjgeURHsGaXWPweAqRJkHGqKKicxP8kHKNupgJiWL4qQ91cbqXKW5BbUu6rEbX28GDjh2nhJPURvTfa9nXPoJ",
  "key43": "2p4R1BmnX11Q6WNTwjs4yhnxrHr9ufCmB4BqtPVBN1jKY4q9d7FFZF5iasJDMmLZYJ96K3ASBo9FVGPJjyVQbCaD",
  "key44": "5jLenjsLqVsNaK8PtuKkQG5aPpmSzXi1MWF5CkZkrY7UxQzygxtPEFRXiakBfaz7aNY5RSSzJTvNW1z8sFLZFCTT",
  "key45": "3iNFBQRo5w46HkM3bN4yZ7f4LMiiF6X4kYP2viGAUy72KS5rAKSw1m9229W8Tstm8USHA4S3ETjqZP6GXsYnJyVq",
  "key46": "59W94gSRzwN4Jq21oB2JLXrT9JzxQgCQ3LSgNwGRPcxBxRvriHZ6nWh9Y6kxV3zvQMstwyYqUMfCgaTFxvQ7wUVJ",
  "key47": "5UHszuELdR7XLoRPsNenRrpApgkNaKd74d1yVEbWGBBzi6BHLm5Ruwj9MfiiC9DSzDKHy9mmtH8ymi4hErY3W9ua",
  "key48": "4GHNp8yKQ6JtggcvwuuNxKqu6YE3Fer424WgfFTUSsLdGQ5yhwthG2RzkhUeNQ1UKa3HYpxsMwkz3V9zyUXbgPFc",
  "key49": "4tPAHbrzgfpLy9ShRa4DVRbtmyqrXbd5aE12A4BXWer4UDKzGbAd2Lvw9a6cPy3K7EKbSVFbw74XqEU7Gf66zSSE"
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
