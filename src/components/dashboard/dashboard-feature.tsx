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
    "3wMZYYku7Z5aoKu5Z9E8qab3xDcHf4w8eT4Kn4Bw8NPpdDuxPYtqVcMheCxea1kPALJRyia6tjDirhG7Vze6iuzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ibJQxHFZ6oNXfP9pLZfsVbQ5iL1MQ3dTChKy1SJe2eKRH4AUUt9sFPPgAPvg42K7eZapsCB2FZhkYw899HGqKdH",
  "key1": "EQWiGfVNAmCgzkdACUBHrX3tEGyM87SPB8CTxAyqqmeNEm7L8vfFZnWBfHaCPwTCtibKVqkec7KrvSujLPXPCyN",
  "key2": "3zHZHuXfJ6Q43wnVBcwEzUpLeGmCVHK1CqjJhvKDwc12z3htufyTfWWHWWHxeeGx9N3zYzfi8bs1K9rYDx6Kg6VE",
  "key3": "5WDXfFMdb28ymdqd3eX1wvUKrwKM23TA7rvNmU6osGiQRm3C2UUmhtupLuddSS8DQM5UzbsScrZzh71ek8Q2b1WW",
  "key4": "2XekX6YuvR5oTnkfjeTryyGjZ8RtQSR3g3XaE8WzG3DYXU5BoPMZ8fNeg13aRzBREXqaxSKQRcwfSojMz3eMUPL1",
  "key5": "5zK2E41g5mwZVigGayek2E3YT1jbRj1vBF7uaN6JGgMUtjy1vfJVqTnQHDpsWPX7kAXVfx1a8c14NWrEGUcLemtp",
  "key6": "3TTxK857Pve2w6kpusxhT69KWhHvrJBLKJcpUZf3E8qZvyTFciFHXjXSiFWiZiPdSHSszbGUkyvoN28WmkVjKS9g",
  "key7": "4hmMbgjjRkwC9XqoVjwddNMwa5Go1UVdrvi9HhFBwMeS3ZTxdqcKn8c2Nn4GeE2pFLtVxf7BooHRDo2Q1mcU84r2",
  "key8": "3YccFCzACbpdC4QneG8d1kVk4vvK8DD2NcRgzgCwsiuJLfRUQAsQfk9FJ4LZvVwECt2Mk44r8anEBEkCY5NuuyFi",
  "key9": "uScwoQnVPbLdz7GdfDwfBV69eNAh376cFz9GXocDwEo7LU6DvQ54K1gKB1nx9hEegWrGwbHgnUJ7qjjSFqeg9ED",
  "key10": "XvR5hAUTgTpz117QRFU73yo2H4AWBhSzg4GhtbHDQTTS9Ak5CrtZDWrGmXvd5VsBGyMy1gUZHLXCP2gxabzzbht",
  "key11": "56j4HomsfQ3haiSBMzA4Vx84gkFA4LNFhLywgaWio9iv5XgHYCVBsswsjH8KgbKHmzTv43Kz7aWE7ypsCPngRrRH",
  "key12": "4vYNQN6Z9GuqbYStoLvF9G8CF7X2z7k3mdFw3ywrQbqak5pfVqhRmr8W7SwC6kz7hvpxHg3xkGw6xMniCqH62Fy7",
  "key13": "2jRCZvL4f9VfbAK4EXwCHQKeZxpFERqUugavKio98p7wcGocMzgcCiB9UGxQtJHpYdFVyiZziH8GMbYqmq4aw7eR",
  "key14": "536semuKn2p5dniHhghXyRD2iuNAnvqxxrZeAdrbWjQ4zaALVXKSJTXMW2gyPmzEDP2FMapwFe3BB8U897eFKFiC",
  "key15": "262Vx3wb79B7PjJVMyckGecFvcBkZT51V4jtaTcJSkcGDhM5pZGiQtQspEiBKAJw5T669ociVhVMKxX6Gzp42nKv",
  "key16": "4q9pBUTeTCsTJ1teJ66AcPHsd9PtnND4JTC1qETQirejmCQPpPQLFrjFYBaRx44rRc6FNk9DRAqy4keX87CGS5Pu",
  "key17": "4FjadF7URBGgCjeTb9Vsxgp1JxSFbzugar7i5Hj9F98Aab8Ak6oqGLk79yGL5kxx7QcdYQztTGhSd42WLw7N76Y",
  "key18": "4wUapWFyFPHZTzZAZFLdKAwrMjrD6SH7bLMooQUSuLv8H3US2ZurXzdK2FnCbeomQ5oAvPKYTTq1ZL1c4uHrKuxL",
  "key19": "4CYt6hTT4RDGsXv3JkZa5an9GegFV1LX7ckBANAcWa4Db1q2J84LNM4frFEPG9STzBgnQQVoHVCjxiFEoZifXr87",
  "key20": "3MCsqydZYrLFwqNketWYudkdLw3QL3JpRCddByhejT5xVEheoJnHgsSVwLDJz8tGxnKBqX8hgwfXtobBW1kx31wQ",
  "key21": "2gvoyqnRffJ49Q1J55aEpWtcDReUmxP2BtWS4AJiX7mgLaU9scCm9FitMftHeB6Px3SL3dNfaNivr5SpQrk419LR",
  "key22": "3XjriHM93GjEuqHufvcXBMixcWBtSjdd3AqZcgYuBWSYdreijRhSHz3t9h847JhmZhCYzeZ3rswB68iS6qhAA2yz",
  "key23": "hhaXbr8VvDswXEYMXXVyHkXL82cHLVYwV5zQ6QnpyvhPV1kPLSsGFcWyshYSAqA34CSYLdigZvVQ3mubWwiqeUv",
  "key24": "2zT2a2saH8ipyEBHys3vkaWB23fKop5aQrEcoDn92guNQFjNDFynr7RFuqJSXbwdEjd8CnnpwmU74mwg3LmpvrtL",
  "key25": "3WZFCpfjA78qcATTfxZwsHu3nyZQum9noPkndQ88cZd2bgWZZ87sV3HvRupjw9vsAYgKVQXdtwYVSnvZEE3nHZAy",
  "key26": "R3BoyWPw2kk1m3gMR2ndTPu6NNe59EZ6jbDSnwzkaQq1BVyFRJ52X1k6ExZoezS2LXvUFhLu1PFyLDHhdjmnVkm"
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
