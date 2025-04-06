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
    "S2S2Cb7geagreLez7tjreYE5DSFMGXJ9T4RojUBQg7d2EkjciRpqzqx1Au2NC6YqkaYFQo4eshdjp3cS6m347i1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLWnJXfmkKXnnZWwhM9pLMa8rrg7kNfBegt6ox4mcT6bzGJPGsBJpsaauSmx4jfGzqQ2awc2d6tNVUnUdT31EXT",
  "key1": "2YhLybV8dzDdDGZfT36ZV4VrK9tQjd3xYc7a268p4fUdc2b2JLr8dGrE5HyZcqUqbxfTBhtMNrYrNktVtRnB1YHP",
  "key2": "khwhTL7wrVtZQZ2FBE4H9dye4pYZope7cfYsvVf8KBfMdkRzPydA26Mw66rTXKkcuNd7mW88B6E1bz4FACioQyM",
  "key3": "5KtMb1mXqYUAWM8LfE5Eo1BQCeibigVLKthzHAofkTFTPhz543uP2fRBGL2dM94k1YWwANikis75NyUtqpmkAAmb",
  "key4": "4okXJfEBskU6iyTUEvoVXzQ4wT6FZhB8dsszK5S5AccHqNTWM1763AQvfgRHrGjSLDGektNxPqJq6WqURs3iUkb4",
  "key5": "5QHgBQQ8R2FEm8NaKyYsR4sGLH85vewHvz4QKLTcapEZRVvabpbz6K64nEvLGiQhYdSkVGWU34G3dG1GAFXxjSNn",
  "key6": "3w4WCbgUmoD4q8pWvEZvHxVCTmC3EMD8KCgtt2J2o8WqUBmhh9pgCSn51zL7WaReVukauDsQr3izdkzzycTRdxwd",
  "key7": "2nQA3LGMF22r75oYgYZt3tcRFFQ1b76r6dH1bkwerTwoSNo5AHhWzLNEvVTTTGZCcMPK9w6k9wA2wwwtg8RpwfW6",
  "key8": "5kF6rJnEdunWDE2tP57mg7vXML1C13qkcNfb2H7Ee93354A7gAaDiqvjWqcGsZRV9HikUmfqK9pNx9iYH6fJK5cv",
  "key9": "2NaoJKptYkfzWfWbdTbhJeWeJ92Jis76eu8zsV4jN7pzRa2diLVornLQhoyUdp1UrpzFvwQrQkK817iEdQeCF3rP",
  "key10": "4WVkMmZGFz7jPwLpL4HCFpHfj6CgZH9sCKJnrRcnwob3DTZTo1oPQSgUq2a3iX8J23ZK5zm3jqxd1Ksnf4efs5GA",
  "key11": "5TvkT9QhtmSQ15vAu3A69D8k3ZETfxqBWGqZSPduzCzGVQMBPh5xJGanbmFXEPjnaxTeUgEEaubwRXLQz2LSA2hW",
  "key12": "632o4EC7jW7tUFfj8Tpio2LYkg8nRL4Nk1RTQhRci6DMtKkmnWX1jifbdtfJBxLdiZKXyTfydU6q9Sctv4nktBrM",
  "key13": "ZnHh21bHA1HAsUvSDNEruxQzYa69Dep8AntCmvUYf7bgS53NLBMgAvqZXQhhjMxNfVGfDHBQy3LWdhNyC59kG6S",
  "key14": "Jj5ZS5nG8fzy9hWmadmawHsPyz5SzWaWB19GXANNZDfcbw9UBHk7LCAxTSPYvP8RXbnf3m5nQ9figdEEPmGvVEH",
  "key15": "2Ff6HXqqtg9Lwj7Vr7ReV6JWqJa3bzMb9kRgnVE9UvXhJCanhXaiqH1Drz9jojLVCvPH8Uy89GSxJgipryCFUFjS",
  "key16": "5HLCQzzFzY2NGEhYa4F7FuiE8c1VArSv7PSZumEApD4GCbvZVxuCj16nuDrzDShdoch1cDSmcaHbZHmhftaRwZp8",
  "key17": "3CHMJMSNCFiMB3h8fV5EG8th3PzBSh674hnuAdoXNHgX7hvSiR7V5Mx5CUr6V8P2NbdnpJ9aodsbQSDDPSbKwbzj",
  "key18": "5gtTaiHtXvDoC4MXRewnJPK5BrPxkU48qqB3gozcWjcTDEb2CutR3C7jMDWjoQAvsT2VX4E6yvssmBHbXtcn5acz",
  "key19": "2etc1zmYnaYLkwBboPYg3GU92S2CtyYtRLcVKUvfEX1xYNZP2LEy4YTZH4zq2g4JGTj98uQiAZ5Z6qFpg1UZcXNX",
  "key20": "22SswDnJkT6mPd46skBmyGvNmumbCEzBe4YjBk4Xh4hdPaRAVaCRcgj7MG1JV4YX5cJUaP7VDT7dYMtYSSQSe6of",
  "key21": "4vror3xm2gdw1h7NRfjCrzHgaU8jcQWRMFqXHdZySemB9mKtKMTUNbFDwbku2q9iGHEs235tVjTyJZsBxmTUvpM",
  "key22": "3WddsWHBLkosv5N6xAPLYz62iQ7VoScNjaxehLLcKb4Ky1ZiZjFsw1UKUWDaqVemtUvkNmBHgGaUSVjeA1n3MHfz",
  "key23": "4Fbs693mYkSxPDgSWyrAnp3kTQrCLaVNuqJRuwJkhaSW2PVenRwViLYnwhjsRnATDo5DCCu4z1rjaCaM17bEmsZC",
  "key24": "VQEDjfdC4YX9XnJSR554mfhuq3td6QHtba7ecbDTPABHCaRuA5ySF1UYGSSb6UEPVJwL8sZx8mT72GqJrvk5BRD",
  "key25": "4maR9tjkg3N8Trsha157Y1EkGdLKJTkM3J53UxjPKc2btHz4Xcwp9Z6x6KuPsPWzb5vXokPFZz1z9JZMFDDds8CQ",
  "key26": "4RommvYsUq93DWBRtCsvX6SkRxqUkfddGkyToXpj1awNwuCdxq1HyfPwix9A9r1L9dSBu7CzaTJDUxYd1KBbvsB5",
  "key27": "2c1AxmvkoUhh6tZF85QqqkjxqeRQCWHLTnfoWeYNryoBAZPGqH1N4sQ9UzJwHCPNzpn9gMcFzcbL2LceFWUsZ3jB",
  "key28": "jj37PYakAS9N62MCDRnLahKCfVK4tLKqYWDAMKKwHe6dg178L9coxWDncS37DsKeMbV3BfjxryGMVj3Aj4fXUS7",
  "key29": "oMzXwVQNSkwauvT84Kmwyhkk88YEgFzJFqHL1kkG7ED3RyaRR1puN57tMuSBfKZdAK1gsd53iubUoNr2GbJpy57",
  "key30": "5fAP5bBR5R8PwPmPfJdWbHfGXzschLj9kxco3XDNy4uoEnpiWJGVq2LgevVRAqDv3L7wqycAok73xFeDJrefrbep",
  "key31": "4iUgKuruau7NxMQwFNBYM6ZPhUQMKvisANnJAwG9FgU3NbF1fjXFC9bye7ZxjffUYoDCnusDVqbx39YZRzaJa9rU",
  "key32": "4hq4nQhRBvUqo75r9NGLFs1Z5nEUABMpmwBocQFzvFUAjEVkTrHyd5sYvHPhWJ8oZhu2SwSaCwEdYVuS1NVRHwpi",
  "key33": "5HH16M1qFVr5t319QtxWX2TMEJnjHTRmxtwAF6ZokNfVaboP8wPAHmQiP21VBVH7ToNRxD6HbXoiyk6TY1mvyRZ2",
  "key34": "BwM1G2D39p6RfeAzLN3CGYpvKysrqm782PqYGoa7W2MKaY59GbbcdgaPzmox8ZY11HLkt6aHe8JuyN3Eq8NkCsk",
  "key35": "4nKvwKbYCfxFtYXKcSSCkfVnhndZbYof1JvYjUc4rRE56eWGKfc7cPc6JAQHZb2dhUxUCE6k6qTKFgRsLcjvQDsS",
  "key36": "2YQ1V25y9JE5roX25NA2GSfqszb7fS6YGaU5fJLXqADXvtSXnmyCY4rusCoUTwAhQQVGc1RT5VEZd9as5TSs2h9L",
  "key37": "2dcEU6smgNCxzFwuC4KMpcM5FHMe8x44GRhmdNtBdY39cuB89svDxHcmT7ivnHPCtffR6h6comjH3pJpkhDc4BV"
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
