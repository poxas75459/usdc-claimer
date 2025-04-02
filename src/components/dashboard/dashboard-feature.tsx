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
    "33MP9VAPisanXs1U4SpHLLgz29wyV8VX8n6L1qrbyx4ce2k14wi6kpwvn9WiJCD85EfRufe8awdZfsnYsCuZ8HoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwpdyPA4VAUxHDQz3zV7TrQ31Qr7ck11YVNuRoxu1ouWHRex2hAUfwNsqtJcjHUAfoLGEDrHrpP4mFsLEEzV91M",
  "key1": "3jez1G6PuQjGEEQX8hcuF2DW4mRvFfERdF3yRRfbDaLEERG2qUG9usjEbAJ3nCoCyYrVfrjvMRnX4M46Qk5XBfLw",
  "key2": "3YJeF2KEvMNEBFDp7jueVp5CGfKHktWEvr6gdJtkfVX5eZiwuMXrMxQ5C6d1ueZKzKqJVuisVgiTn5bKT76uxU2f",
  "key3": "4oCWgE6uWB69ATy9duTTbZQLMdcdWorkjRGsoog3HwVQDG1tApgiBYRcTvQyZ3jZ3C6FiddJnMx1LrWtMUwxK6hg",
  "key4": "4Ysv5uMReDvR2pccSePhJqSsa6e2pVyPNdEc5My564JuchX5fKbY8M21zX9UFUBcodrfNLRET43PRa2yX5nDGfFG",
  "key5": "2zWy2WHt7rAPSHNPtJfMUDMXin4CCzCKesWffZMwK2xNYv7r1RxD7FbFWUfmSk9NXtcNQg9XZ8hrr9Siv5evn94L",
  "key6": "5e2vv5zQTfDXddWQfNpgfz9dxmi9xU2fFRKiFgQfZCwxtbcf3NECmStMjZCjQvwqEmG11hTn1vXzp67pdYQBahY2",
  "key7": "ax9Dr25XtHXGo2bNoagtDyZR37MpFgzRPo6Hgk8sByHKdS36vmviFdewShFK9m3A14CPCSzRPtVJw4QraBD2LoF",
  "key8": "2HENmWn8NPpnMwBDXe9BwXWRj54n6EnKHqHKKjkFshrTY6QxaBFkwAr6WjoSzPX3fajrKzNNxgCQ9YCZHaFnJxfg",
  "key9": "2nXm6QCpqkkCKhJ2fNh27KoTiFyTu27szoaFa6yTZLsdyvhU9fPiBkmLJoCdxZTCoRsrij9heH8NXhAEwbqsi3VN",
  "key10": "67DvobgmHthJjmup5YSa4M123S4hexRmk4ij5hyMSzhXfRpYFEwkNxhXMb2k1VdR7qLvk719xWY9LrKkJQ1txDR6",
  "key11": "3CQMcDUMcKbvTLZAmzmoRx2AaAW2YSQzCG3HohF4SuHSsJv76Qruff7ntMsFQiKzip11DMfA9yVkjLejmCvShZhY",
  "key12": "3QYqMjb5Z4UQTUjtMASrewZNQJ2NdBYc5y8cuhCzmQGMShP3p3wX3hugxjkdRgmXRWgXYxeFjQPybFRKcMBEngYf",
  "key13": "5vAxn5QWPjYKZinehZM2L4RphJAwhhzAQSNn7oGujn81BWeDph3SJX6AcKChsdEat4ojHFtkXg5bojxHNY5gXu8N",
  "key14": "4aF2i5EwpvkcZuoTrTcGq4d9hDx3yz5aSp5ngDdyYDbUyVru7N8exXuEkqxQU3tuBRFLn2RuMydNgG8E9zP1WjcQ",
  "key15": "sLcetatAtg8sEz7hk9sENCRa3ngpEFs1gEyWE939MR65snCbmWxzDuySNmo91L4pi9uABpBC1h8jyoYLpe4WfAc",
  "key16": "2RK74Kr8SUzbRhe6zRPEx93tt39HHx3c3dmDgScRZpvP8MvPcUa4LNAg1ah3YVPNsfi7Ngmh4uZJUpquKNUSt4Qb",
  "key17": "yD2XG8ZFQzZmKZx5yeaPmBKqP4nCMjSZxMMBy2uTrmaRtusyJdpvdviy97L36ce4wJ8iVmxcLwx2JcQxYBeq7GZ",
  "key18": "2VMH2XvAAqKqJ13pHVJfHHmBbVgWgW7Re2ctGFPiJr8q7D3WVhaMPoybyJaJyLMDiSq8P9uLXHwJa2nNxNbLZSH6",
  "key19": "5USqpaGbox4jj9vaQECttN7GQMHJYccaqSYtcjPbHGb5Fb5YgwaJg1fYKg6bXAcUygo4YoUGze32aznmZGdez6jU",
  "key20": "44JhZ4MgFfRCXR55nJafyk5VYxxTkjWLFNbK4X5A2grHWSsCihdaa6hPrLgfAjf96WUbPA4J9PRjyJEeuP7N5wCA",
  "key21": "4nM1TSYkhBCzUt4fyH5SggaqL29Uf6VLeUcqCnJRDvfLAL3ytQ4EEvQuijpiY3hLuNCCfz2GCxEzGnnxcqLkQTxc",
  "key22": "3bAnTtQJikf47gswS9vqUaozBXifFv51w4gNjsJxVUpnFzWJjsb92noU4sF7YPpPrCkr57g3nk98pDPzs49kLZC9",
  "key23": "2uq8h3JShxAfHQmX9tzrnFKSAx4VVb11VEY4BHP2YdSpKSjycZENcE2oFdVbho3GjzSX4NV4Pvg71ach1Dkre1hS",
  "key24": "9fW4stwc3cDDP2nidARvsvtmpdTRggZR6aKHMeACgiTGVgiG81ftrebvaW8wab6k4PR7SuR4Drnq97uf3tkTotV",
  "key25": "4NmyucTDwBDSjwfbm4u7T6JiUTWQEgL8bZcc8nyiuJVqVTLfhARMtqEM75k6ULKvJbmTBbDGxrvrF8x7AA6hcWD4",
  "key26": "2FYiUBRPsTJ5BQeXNeLe9yN3oDwmXeCcsBTioe15RyvftwUbV4iwL6sLyDrhrxsfFpMtTQxAhwBgXzNdgP3V9kWp",
  "key27": "TzL3WG3EsF93o84fV4Sddj6UsLiJWKi2PQEHyJRYoeCUqpP1oFz6iqUan1f9QKToUShzG5KNgnfuSgrieyD2W1V"
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
