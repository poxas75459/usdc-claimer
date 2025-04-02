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
    "2PwNFXpQYxtd9uKoDBUawqsmN54DXEHt95kMtGCnCAtf6g59nsTribFQ1h6zu2LvnGkmzcEdwt53SwBxapANUy1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmQBsVSQg4sngiKsYutz5qhvV8Sx46nNaj9YZg9Ktdh73AzetgMUu9TgKhCazypUmL7gqXYQpJQQxZPCc5FGmkg",
  "key1": "4owxwXxQAHG4bfNzQ6oG25Ez26XTMeD7L2SUDCjGfc9ZB8zoXMEkzY83pzJtwDL9SjbT5u8c7vz9RJkfw6PwgNR8",
  "key2": "55rQq6YX7L5jsdgtWEkYx9vu1DBUqvcMtGmKptPxY3UERJGBYgXhjZTnHfSwX97GVYy7Jd3hsmSh8JSic233qbLL",
  "key3": "2fVDz3CcdQtmQmEAhvqZfFctVP9eHBrWSLMepDiiof7r1N354VbQzi88h4zNPnUtsBoUi3GNurM6M9RCybvJGKWA",
  "key4": "aMuCLdantaMADMfJViyshRxU34zQNQJfaKJmpQN8z4RTWDFqYyiUPef4r4Fdk8EGSnHYnfWt2Sb1p9Serf36Vqu",
  "key5": "5oULEVaPBwfgCfz4Nmiumeo6A6fmDQYteUjYfJYe3JAndnczEPNgnksJiJWue8wZiruuB6x1JFW4NU6gtzSeyj7f",
  "key6": "3iYiKUi2mRqrEVGp1Pyit9VDvvBASfgtGJf4jVQqM6v4Xhe3y3HsKcUHzao12HZyWLNyDN2oq361DjSgwCUyTMvE",
  "key7": "5uHrRcRD3gcKATeMLVw4E6bAKzWaVewbeLC3i1sEWGdzate7XsHbTnC8VQ9rBod5wugiEYQJNabBQ9RZPWT4QjWS",
  "key8": "5hAWzGJ9LyHkhfJPULqJYyJdL3u812ibbB4E8HmBmJ16u3UgfchtGyzQvGPhqmQ1nApCLyRuCAUJyKRk2c5tX731",
  "key9": "Tq4Evswb4wQaa5nq9i8mug9DJRRbtACgtXp8aVQ4za14RZkQSfYX7A4sioLJz1FZoRL9cajqwzNpJdQADWtxnym",
  "key10": "5sL5oQiCYm5QivpT5Mm3a4sCRjgPeqqNBiKXj8HcvE5tg6YTuicRXJoiwTfwKQDtFwdtcG44MJmg1JEtNkvHbXnE",
  "key11": "9QMSN9R4jziwDMCQcV1rUSnYThpUPfcS9gDLXD77w91Awu2EWUubK1QeAQ3ySEzyL3fqpFz6hg4RcwEphVLp1Ee",
  "key12": "4ijcWXvzMebugrdJV7ryb6TrkTwXsgJZNJVtszp3i1eH3u4crmJ6SWGC4jMkGXoUn1nnuTd9kjBC6kRPKopGur88",
  "key13": "3c6c8hCzSpYjnUoJo1TnkN8KYs3w6ymaUKttDrXFmNiy7RJfkKbhhSxw9nnPFRJTiTnvjs5T1rerhKu5LXkwV7Bh",
  "key14": "8tiR9ba99Tyh7qttsmSCbBSCmfYNufRJVjBhZf7vJYcJWeYEgPEGxQcqz1Sw3s8ifavb4Aep54EQYBD1AgWnY2f",
  "key15": "2nP9Kf82AWtswY4fe8Gi7AXTyQHR6JEQNEHS7fbJXT2GrxxqB5o2ERuJuZNHFCT2iKQLTFmWx9g2tHFtLHpCP41M",
  "key16": "3engSHj5469X31BLV7fwUGzKw4Xjrpyy54ZnEEE4JwQrGM5PprXWTd8YjhXd6e2bM22u5skgL8LP1QJi1Hpw9VmU",
  "key17": "39ZANs1WDKdcqw9MHvwgE3WQB3QguVojmQna25AA5BCrsC8939SV1XT5oNf9srgAUxkHxmh4qYRceVh92PWHoJHF",
  "key18": "5tE3fo9bhgXj9e1edRYCxth2RHn95yeVTMeYEoHwv1cY4MJGSztsQMbGkzrAqLHV53evFAJw2WoB1RceqSdozQTe",
  "key19": "31ErSoX6kPuUiWizFd8hDCgLTQXxXV8BvoDhcKDa3R1RtzZixoiJWoDUx9HF5u8cgZoeVETiygW9ydTTgJasYCUN",
  "key20": "2qaPeKxh1tMTsyyiLY5Waitezbg7oEszQHTLyJaPXz7wT8SBmZfZAT1eceSdAekoLNyPsTpg2TsGvptPowZAaE5h",
  "key21": "LmSWLa81zSkHKqeQJVnKCiBEracPFhpmShqM6N2qVkZ3TmqemLP3XNFqB4zVsNu2qRxYJnEsty7qq9TW1Sr9RuF",
  "key22": "5gJJEMTuULCQQPt9NJMsdqHJeMtDMo2WYh2xKH7DBrEwNMC1Ycq3ism7kmAFRgzio8Zgp7bBbLdg4RUWwYpG9VA5",
  "key23": "4dUvJepJRdmPWTFUS2V8TVzmCLFrf8JZJ35VPUsMZrASgRC2PveUzTxaPVUUVmKhn5tNWjwfjz23w2E5v9yWXQX9",
  "key24": "v1UHg7YSPsQJsn7za3RmyjmquXAY9rxFh1r2SnuNoAT93Xcb4kpnvCEhFrY8Yzx1sgMZdLSgqYAkDpBJLVRMCbW",
  "key25": "2pBNz5bQV4VAZ7DiFXZffsah3QCpEoR31WckComGN8gdLLuYFNc42qCu7qDQyWoQboYdZbdXm9UzdWzgc8iPrEjr",
  "key26": "5BBb8BoFHNiFNEEBtd9kmoRdv524cudLfJEHbKtfCi9wtLxyDsYE5U2gjneBHbwYsgsvt81U193UJX1Xa3Pk2K7w",
  "key27": "49d9MgSnhUiA9iWdPHtfefhU1W2PDhKyz9sqHTLg88TQXtkEs3KrWHyMXnYGbrWWBqyMfoNyJQWrhnVL3KJBrWi5",
  "key28": "59pvaGxhpVGsoy7hLR9UV6S1iGfddZVDFyETnrfH9fMH1uix3Q5FKhqSj72vRQzU4GZ4AaeddMHMhBTEWTT9kK7n",
  "key29": "5BBfHFuD8YYjJNeLEiUpNTGdwLag9cqf79mpKZnx8o3biRogQXS6rBY5As6TnhcMskKRw7J7EfGBuTJyo9wLMdBL",
  "key30": "36SFjerygoRVqu8989NnGzZfzLpPdG9nV1gRTVgdX3z7w1efrDxXDXkQyu8r1dGujvpK9w9hSedwqw2ghaoX4CLS",
  "key31": "2fLCDdNe8a71Y1TLCzHiPdm2FgmpLv92csKKR9TPjV1XC9mm3LQSHa8qt77vt458Ab2zEXvxVEoAmGSzqLZxYUgp",
  "key32": "5kVL54mWLRDZHBqHU5vqaMnPDiVw59PEvSuHuUDfYHCsUp374p3gbR7oirSYxddkjgnL61Crx9hBct7TaeeDW6Gi",
  "key33": "BMXF1ckWUTq5x8KAWDGZ6mvrvYKdxznGxTSkS65mM52bG1N5eF8aDZPCw9Zj2SoSVTfxrKwkaqJTax7dXfiQcJb",
  "key34": "hGNZrZy2MVN9CUv7HC7d29FiZW7zXdQitGkVvaKB7C8p9Btm9UXN64gRPd2v21kmwWmMmaKdJJMT71yjurPiCSp",
  "key35": "4azuqDMothKgSn2ghHbgoJiWfBpR8vtDTFKLfdksvkCEN5Ra7uXWiEXpVb5BSAnRyjKFHbgeeReJ2GkoQypSuuoU",
  "key36": "3dzWQ64amhskSRGtHUt9UBSAHtkpKXPuQydTNGxQCzuRbwUGnunmU75dTJ6DdH5UbjQgsUvWricp86G5bcgVj4Ui",
  "key37": "3tGKHNs5hqDarh28XpmGtURFnp1XD8EedEe12Hm4X1nJgFDmxET3LM4JQ4HPoZDPRoSmNzN6diQnhNKUMYLnQJAp",
  "key38": "51XZiDc9MPAhQWyKBg7Jddo1DZhb3v7XYwpD6NnutzPib9txAC84itaCJkxdfnVkhRoTD46cuuaCZSN9GCD1QdrV",
  "key39": "FyoxXiaanjKT3wcfmCWoahQsPM1YXxgU7iNUHZprCr9ydtqmCGVUgH127XMgBCtiHuXPoQ4fJ48jiBc5wvziv96",
  "key40": "GoDoRbLtza9TarZvYeDAbZwaiST5JYFLvjc5mkgc221mWpWqyH3GxzoHF1a8yxNX3zNoLZ8Ec9CUuSewG7m2Szn",
  "key41": "Eg5vSjLcieddcRwwfwDamJMEh6ALQXVpEpM5j12cknPV6cMT56HmGuRNbFwv6kTQjNDS9NtDMyBVKzM8XYvBbpg",
  "key42": "3NZqZwcgvPqLaXKfngB4Hxp1qCXJhDd8beK7Ap62koed5ETPcYWbP4SGirR5ftCj84Hg7kMt9TFHvkpS27SY297h",
  "key43": "3bT2hrVXD6RGDywNgBJmnrXsHY1qY2X7afFv4nT59VKzikdVxbVqgvyNxSkX542NRENrhaTpWkcpNFPwmZRVxDGR",
  "key44": "4wKcixv79r7Zbo7Rr9FnbGHLr891TkiwTqkzyjTjYLx8pU7yozt1mAc5FfdnrpRNWfUY8PEtKRbkF8PXPqscvNmv",
  "key45": "2iEtsvnXBRxfvwZDogdN8LHDfWYycCvxxwmWZCY1bwJNKNnQq76YFJnYozeovHGsjwgP2E5bm55YLe9JwxyK8p4w",
  "key46": "3UF1XDD2URcq7tvPKUUsn1WQWZWy7QAwsBkaetnW5UvEETj2pfTA71mYr3UQSnZyUKzd3wwsqLbDDe7t2EH2LiTD"
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
