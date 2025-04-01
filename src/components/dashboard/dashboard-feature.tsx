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
    "3iymL1V4mWUjnfY4xf5Y3Ci48i8pMJy5Uqme3W2U6g7LrazPFY7annsoZChcXdyzpdRaXihg1cjZNrtpCHuTZFvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwB5dVWuwkHocHPvdTv2TBaMNadWERfBvmSkU3vSiGsXxF55GLe3WkHZAwX2UqpuMKP3CjnhVunwvGKCqtfVaaL",
  "key1": "28NtZtHec2KuK5qcDyKLJnvVi7J7nJFdbrhtASumamaDYGcEGYUbjKhgYxDYQMPihTjmidoEJuLcCJt3opqyEUSi",
  "key2": "4Ji7KM7qEvoyS1F4ayau4et75weEnGTXGQrg69LLSo6guTkdDcWetQLdmH6ryH4h1duaQAngXUUVRNBjRMsxYAXm",
  "key3": "3UjZMmMtmqp1JQSwqxVpNbWK71t7jt62rLSTnoWSEj4pQGdy4eS8LdzR9SK6ieuGNDMQDhWBC4VWncDD5J995LAM",
  "key4": "3posCzw8JwYPvR3PJ27FegWBj5H2oXbY6iY6vc3YUiqGNsSxxkYovZZ6SknMZFbquAv87SgGW5a3xgKQfL9AKF2T",
  "key5": "ZhA8qyBb4jEohyYTmBWPM4WGrXw1i3DMR6FQbHS3XXjCzPpPP8RYeyfir6DjnXJfMbCWeaNXouYPSKic3i8ebBp",
  "key6": "2LBC6Re6HbDAuL59ZWJ6N4b9M7kyzc7TSxQtYvdsbNSJUqdGFQaYHUniBNYvhmwvac5rTf3rZ7xxsyfM6Eoi2FKg",
  "key7": "FQxjizxcSH3pq3R4JLjQvQLAjtJUBv4QiozYL89ZfjeCwEtU8LeC3iRanBq5hck4QRknfocZsSs2q1gCNgDTXtc",
  "key8": "66eXrAfh6mvmdhCzapmBg2CaCw7mge8sAuj4UWYq2tCch63PhqAqsafkycBKeaiF6WcoRC1H1oo1DsJLqhwD9D3j",
  "key9": "2GWYE7y6qKcHReLrx29wPTQrEHujb79jkPZU1QrX5tCjcJ8bx4fy7oinHESg5bfiecmXhTDXMc4tTtT7QUKH1hjS",
  "key10": "8ewsYoiniHbKD1tbwiRDz8vXCi2buMqihfinEBo7gLnnBQuwoYi5jptYqt2qQN3Cp8gUytZQC4t3gTEwJ9Garu9",
  "key11": "3XvhqU9ND96ZpQXvKBEepkHoWTaVwrvU187E4XBN9yavs9Q49iKvcasZyEmxwqLJtAdtvTpEdxzBUxVxL3nfY3BF",
  "key12": "4cDsdjvN5mjwVJcV9mC9NwLVt32YsP5QgTeAPS6oSncVD9S16jgcTnBVCi8JcwR5KbNJQsY9LKLyEu3MfpWhoZku",
  "key13": "2YjDkNk9SC5EQ5rko2DfH6uB1RSq7fQ7LmGkBn2LFwSAuhXKSN681Ve4XLggGAfquNhdE6ZQDzDiynuTwYHSrRB7",
  "key14": "PLepcqeRvGszQCjuC6CioMKZwtPDvRVxkpLoLNrTG7Zn6eQJ55pLwf4guUa5vPGVi1zdVzGVxYi9YcGPVi7q1D8",
  "key15": "3UmxG2vRvxJXMGXoxabYYxQxVYEtGSzJ2y1yU8CDcDqDpz56Mxa79zF7Qt7MWPpJsud3aqmPqPCZfa2hkFxB4JEv",
  "key16": "HksLabc2GJwyFVxQp14kVQ7nRW6qviq9vBZLZzRpxuca3Vg1wNxdhXS7tE389QAS9GitkEPK3Bx8iMkbaut4qmQ",
  "key17": "5Ec2RwJEq45H9gqvQWmwLkMPEm8guLCg24yabFoYyiqR2N9hZ3g2PnKnMB33G53VLM5jpdoYqF3qPLuubpVmYVwZ",
  "key18": "4i6MsXTZcW3FzLZFb2FgZoMDjgfB9TNdMpLPzVutG84TeszA2qp8UfmsmSAFynY7KSAohKUCN4m1QrMxdE1DX1gN",
  "key19": "5MPM35TxToFiNVX9Fd8vwz51u1YXCtcmX3ehjkqcYtVsJCz7eQ8G7u7h1rkxgdWewen1cTh6GyytRF4g9g9vZp67",
  "key20": "5tZpBeUt92yux6Jfbcyk19Gc8PYmMK4GD3DdFXXVLSZYBh3vahgPcpBYCz4PA3EGkxNCGMEiwyK9Bd9pcEDfR2DW",
  "key21": "44Cb3UEEQ8KAdRFxrWhLEx5KLHUXYYxXytvKtZMS5coX3hmeshuUKnsQQvRENFrF7JRzkze9rZF8dqg8CB7ikHVF",
  "key22": "3SS1gnGfcKntgurZ9rpDZ2cm5xLeEWJjtbBTrsyCE15K6ktbYAJd3mL3y1PewpvFLkUXfZmS66csVyhdvWpmfK88",
  "key23": "4smPcnyJ9MWhPFwrhBhriFrZFxysJerFKrWGDhWJ6c5ejLkE1y4Dc7pKBaA5yF99coMXFC7E2F6yNCXYMVDJtFNL",
  "key24": "ZDiRy3ds8Gu7FmuyYST3Ldc2uNKvbmfjQpH65FiCZMGuZ7h98aCLAFJtXCtP7LSyhPkbQkYBRAsEZtvTfwp5W7N",
  "key25": "4Sju6GDsRrQHrbz79mTrBArYyu3uPPmQoY1DenRFsXfAwb7nMjcbski7AAsTisuYKNCHrK9ETZJgTdv3o5Xc3ZiP",
  "key26": "LUXoRjt91Yg8aTDyDgXsLRx2eGrvwwED9J8M75uBaoqseNaBkpMezEDdJSAJomoWUNgVB4vdFFomhbLv1CtrVX7",
  "key27": "4r3iLyVPQitXnDB8YpTxPxNdyE9r7EBVsWDdVr6oCJan5GN58ixcErPhUugUe5QMnj13Zo5BKfCu9qTHrwdLH1Ey",
  "key28": "4Cf9it2oCpHduJxt6eyDbtpUZ6iC6abKuh1AZb5dLe6uEFmBGSP67fy44iYHAAFScrkFMzyut3uD3zJmrxgmWGUQ",
  "key29": "5P7hydDgi2vWFerCzEwiZnyg2XW6zNjmBhyyMJRJEYg4yimk4UDwpcRr2czGQ8PBxdvYXU3Ki41umaUgZRD4Z5ye",
  "key30": "zxYwgiamZQJVyL8j49Jqwr9eCHHfjmin1WJRtR2EFkiYa9myoCaej5xCAvmG7dubYcrfwTnTWRGHUWypVhWNKZU"
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
