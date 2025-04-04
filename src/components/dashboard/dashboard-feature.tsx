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
    "iK4hTSSNfDijz6AV7tvCUhpdpAvHucBcPR2eHQ461xfszkhiJaGVihT2zFFBYZ4rWo9wJfAsd9rQKxN4dcxtvif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Swwos4VH7rEY3ai2WyNwPPMq6V9DjBnDhcaQj2XPg8u26wVi6XSz5rgZUZUaEHqthz6zGjmcFUi17UcDyDmMVy",
  "key1": "615ymDHGcw25ccZ4hd98HQLU35tnPqfFzy4LeMk8RrZiwbyyufM6BkwtVauofc7V8LnWQatsZeL52Kox1TE3RRQ5",
  "key2": "5BaUFLbz4htrZ51e37bqhmtmDiWG7ptfdWumJzDhkeBVFCyQhL2Cjs32aEoufaCa4wZEJZCwdUmAmCCXD8edfYBN",
  "key3": "5NnfbJVQoh5FnR8UooWUiJXXTtRP7dZcb5dcBd38n4zET2WxhU8M8ycfQSMbMkwobciqgxwiAayCrYMmmXo3fzzQ",
  "key4": "T8jKaWfKmudSuhi5HvDbSQuW14YZTexvEFYEFa8V6jYgowPNmcDRddMVjbzyqXBcbPBAcAr1cq2szXJYJAGVdhP",
  "key5": "2B772jff1aCf1ePVVsgKPjUBmqkPVckE1M4Wq72EQVJ72qJZUTi1SJaZmnmLNPsgiGBv8GrUEFRUXDHzKm13HjAw",
  "key6": "591dStWbhBoV354Wd1n9mYg42HVMBZW25r1gcVyp9aWNa3QJ83FceYQMEFpME1V7FyX5D6D9B3MiuSkFBiftdqy4",
  "key7": "4W3Sqd4guqdLbvQbyqiZdpJvW9LqiMRZ4BsDMgSigoo14pvjbEWULDwKoz2twTLQRHBKVKatLrjNfQGaWoXRTZcJ",
  "key8": "THZ85kYdXj9KTccXm6jrUXcF66Ag4hZoFb5PgWLLiDG9U5U6UHzGFJZGFC6zuVgzk9VrRSEyVk56xThpC7Ji83x",
  "key9": "2iRXLVnRivu4Zkg8XY5xGg95pTYos7eRawvV9MnHKe18eQKkon4kwrJ38iZQgb19zD4wq8cdTc65fB9mkvNi24tq",
  "key10": "jTWjLSbtDeWjtaP1htSyfN8PfbUNijWK8uTTCNqGZUWzJgnnXtgAemJ1PCJHs6SRsuu5WiPc4ozBcSsPY59gX3D",
  "key11": "3xSLzJe39gFhxjDcS95twFFKr9ow3faV2jdyh8KcV1rB4U4W1zqEFqVgj1UoDdrjJYeSkHp1UEp4ajozssQZYgtr",
  "key12": "3sh9baghuS6kEiNPMpzFJvkp1WpYWpA5WXaSptMwxiAdQJaYdEM8PfyxgGmQkaSUqiZL9xP3m4Vf55ebGuqKkwg5",
  "key13": "4APju6b2HhWEQUxwM9vNtUEUkvbqqDCP9sXCvSQ34bKHKjRSSii8wHXLoewPyoJ8oAXRUQESBaNhQcMG4sE1DU4u",
  "key14": "57WkiQhx1uLH18ioDrbNFVfDP3ddtjHcjpRG9x5h2pJfgU7fxgxJHfDyE2saiFew7453JMCvyiMxb9ohYZiqtkpB",
  "key15": "5V5EhcG6mqV66nATjKvY4Kzky44hUimTMbuCU7fyYLphLDPi3m9HGJSyCFyRs5k3SDohaSHAchBmaFh7PeLkdq3b",
  "key16": "2RNfzamfXEcn4D68FhfPTrdKR2tx2V1q1JmhYBL6r32TtdkXK6rHK7HuW9wJLtpQ4AKAqzXbgebDqbDionKw77YC",
  "key17": "4z6C1CvKsxD5fHfTs2ZRv55rmBsZK1jTsojex4cdFmnDgp7r2sMEWTJFSCfHH8c4agwtn8jmg1UJcfkjr8o8ZGpU",
  "key18": "2jqnwtW4v8Z46witPHTmFxW5uuhw5DQkzozeucPPeHETDE4QdgoU4wai6RGsooweTNrX6Leo7AZT9uoG1KvSRcWr",
  "key19": "5GWUNPvv9BVaAHLSxpCiHFuXs1rKhmNCWzKaKBBRY4szqzpu2Pn5hMBtW586u5azLw53VJjYs6MvaeTxHJCvwDKu",
  "key20": "45g4rcoGa21TKzZihKRVop7fdd4ygr212epimJ4GzxMmYeJLn5itykHNrV2kw1a3L8HdhEYpW9oHvNxret1QPAqf",
  "key21": "4HUr3Vh8RcUsjZ5Yokn6DVQXLnKCu4vkU4rNoRcgqWqQC3BJ3ybyTeL6gxLyMrjcPtDvL5zUZeSn8upP2RJtMtHv",
  "key22": "3r5Lz6GFy2TigDsxmE5y1JT4dKC7NkQP6dg6PZuiL7bHiW6hViZHSdr4q6RmQNQWpa2EdonMveQgaxeioiq5Bik8",
  "key23": "63bNXGdqNqja3QnLA44VibDdTjFKSW19EmhvsYG8NNp6y4g36JbJ6tUu34c27PknBXe2BNVbfuUEhtkmoeF2eMUf",
  "key24": "6YPbfWfBAiqJTLgqpK6wEchocpb69M8gyv9YZUGB4dJ7y2GBkwsNGW2SpUHdiTXQoSYb7QMtTmNCGhLSeuhS5uA",
  "key25": "vR7QbUBDuoNtexqw5PTe7SWHnsdKxCcsvB4t5KWEvKANaZskxahxJtaQDq6WmLhZWboLLq1JvTmnrg5aVTp775s",
  "key26": "5iMTtLnM6uoAL45QmC8tkXvad87XXXU8tPknjmim2eHgAWxKE8xteUye8zUE8dxGR4V7ywpnUbowv9YEYN86wS4P",
  "key27": "5x2yhjGeCuKgBS177RYRUSrervvasequ9VXVYi57XyT29Au2HWXY63qk4V9fLhAiP8gmuYUjiMmd4BQow1s719ym",
  "key28": "43aX3gGSQG78qwzbRyLozphLXuX1MicUMe2cRjw6h82cAmLnReTjbjRE8tC6iH6ynG9QGYpoVyLGonoSTUZAFehv",
  "key29": "3ENgtkfBepXtRaWfZkMh19C7F1GwnVPf2PPPwmWQnadZyatzkjvi8kMTWbEbW1Tb8XC7JAPs9vGCpWoRX5Uhg5iT",
  "key30": "3nEWRAXcPBGcgUW7ncZvmqKJoaccmtJUXNBwBy39D5xkghfyUQsJ72dFihViuZvLy3gEpcjUR5bmWCJzb65goRbc",
  "key31": "26npRziekrge8GbtXvnb4kW388LwkXkXgy9HETSa2JoVHx7HyL4yARX6qbzS6NhgADfu9epGXzvHPfnckQCQ5Wz3",
  "key32": "5cfx8RjPi6JKGXSwZ4zMY4FVVQjw1Hk1wynk88MBhYBp7xfj1TeNTF5RHJgJZC4UFykVdUAN8jLzZfAcx4ZZ8LLK",
  "key33": "2p6VJmDcKjn1w49aU7C9ozgqXhWJffdsS86NgKSpaU65uwGoq4JyWqvisuqXcEWnfZpgMRnQkPSztoWi1tKqGMv4",
  "key34": "WUgn2UGFkDJ35mZ5kLneSXtri4Fcs6LXyM8nGGzvRFaexE2KndCp4Fy8JLqnbATK6r71uz9RDj31fgY69d8hQhi"
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
