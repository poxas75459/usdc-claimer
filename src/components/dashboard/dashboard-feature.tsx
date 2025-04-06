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
    "2759UmkGG7CHe4Eu7KRzGtQGj9RdHZitiPR4Y6sC8TS1Fmt8tys2qSE6T1CQNkyir7AJ1o8qDrXC3AFDzzTeF31V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uiUDk2pUxiGwx5CWFHBBvrfEyZyWwgfyMVY1eyA83ksgRvEcBhf7xt8sxZvGHK4Df6PAXcDf3fF8qHSJPJehjTG",
  "key1": "2D24Hqv19WaDV7Mzq36tCsSoZ5oa4dmSZNkZLvFiGXvtdAzdzAxhSJgWmLY6Gv5xduDBZrNW2NDB6REffPpS74a",
  "key2": "3xk5TUcVe7UJaY85yxLxpisJMg2rNcuXLhnpyjP3XE7YmcRCt1TUs5K7fECkgmYQoFcK4kZcZUNkBEVoHP3oDXGt",
  "key3": "51yRiLkCVZisGQKAia3SEVFqDt6HNjLUX62JnjZq1CG9mkor6jXfbovVPcUGJGGgQznPskemt1kaHo6Ba4mQs5gv",
  "key4": "25Lzz92dMS1sKaSxvyPKBEd6fBAZotsNZAEru3nsQXwaMqQLo9qyxzhbYkyyuAQuNutbjP8vXNFbbiPSqKVgGdkN",
  "key5": "UHPUJe2eb1ygeGysBCexXekrBYeo8Yk8Z2DC93Grs1xvXhjS86HjCb763LvxtP77edGUPWfamEnHYmoQw4X2BcL",
  "key6": "RMtKVB4qtP1YjL9GD45Mo4Rr5LE6n7kCnwUXDygcDawNqdEZR5wqenW2Q7YDb2fWuE98TNnQXbqi8V9gaoYAHCV",
  "key7": "2dh5dbMkYbP7Tb1MXynD7Fxe6DoT8LsejJSdifFh76Cm2TGJpmzr22rvSoktHFHAz86B9fyPcxpqcchJKTEQek4K",
  "key8": "4hsYJvRMR6qjszjjWc68aNi6dsbqPz9GnRPBxKRHK2qgWd2wgxS35tJzLfb6oNHuKMFsXaA2Hj7UHzmydBW3ukMU",
  "key9": "3hfk1gu61by2n5Q32ER1bHs3zePQRJqYZ8qCyPW54c5WabM5t1Q9BrsabpYsdPt9KmWezBksQTC7Ue5aXzBGAESU",
  "key10": "2qxrECUsNBV97QJUvD83S9GCaDNFjLoeaxk9Za6LDakeRxoHgyGanRc1ovLUWsx27XsaZbbjv7vuybN1Us8dzY5D",
  "key11": "471RNNReCjb81hWDGaqm4kySBrjZas1ZbjYNjtdQkvqqLFyhBuELjAQ3b4mtN435qy9k7BuTcetHQmDv7S6dv2SK",
  "key12": "5ZubTa51bDkE8UmCi8b2x4n5Gy8GEaeBnPMHYFjf9TamHqCzVJQAnXQhPuhgBoXapR7NPFsNw2hKfXUiVCBJ9Hn9",
  "key13": "3r2h3vdWTocLD74U8TE2GFRevt2J6nH94LWNWpSsBTMkAPBhkvQuT46biEB4vCxhxm5R3NX7pBVgX7MzD57EFVqX",
  "key14": "2VMBNWbVREXCADLKGh77WGXis4YNrhCxWpjhxMyLwVL28iC66Z5YERCpfJnPosdSR7BfzNoeGftydZPeE6zfS6N2",
  "key15": "4cnus8JPf3sMAmur3rciqQeubEedRAhUTgaXToUu6zKbqmtsnz1ycHY1KRfB3KUYu8SL1oB9F8CngQf1WyCTjQ1E",
  "key16": "4YK2q7ikn21B4XuN7YRpg4eNSZULVxTQSpPR7RedgPKpjdYxJN5jYssAKBDULLEoUPUBsNjdnxhQC4Pk31q8GMVL",
  "key17": "2gA5NwKUkkmA3cUQ9c6Xf4HbsYUxMAQu8mueAD8ND1nu2DkCZ2tgNLTzohQU6enTTeTvC8yqaUeapfMgJk8cgfxn",
  "key18": "3rUxaia36L9w7wXtDpNhaqd7PPBJaKYPsML1JkscBxRL9vgAhV8UFt88Y6jJLvo9kmetnUu9z8XwTwThJkkk8QdS",
  "key19": "3Tx3gzwn2d937znpyDE4wmdVjwRxzDuzFF9micYN8PJrdEP7Lvc92SMtxrbDAsLsQUwynfADaU9qf8f2fPrvZxmz",
  "key20": "4sVJRdtwHmQVqGahPfU1HrPeu8fJYZ624LWRwqGByKnEFHwhEzDMM77E1Ee9i5jZPoZmV7gmLvFaGQeaiVhgmkd2",
  "key21": "61mtZn7TGCtTUTCZDK2XcHbsbKtADXMfS1WKfuzCtPaDxxW2ANrF6F7QJDvQ43oDYnDws8FkERGdUu3kTnzutZuD",
  "key22": "25271m2LCYt5mHYwuTw7dcLdb4ftXTPkmwNu97sBx47XM7UNrAVmggugvaL434UoD7fzEqYgBEz62CVhFuWGtsis",
  "key23": "2gUeMXgWmDawyJCfrMDAmaafPnrpgU1vZWg6ycmQCTswVJStYAVyQu8rQkrXadJCW13Qcupyxt5MLqsJisuojU59",
  "key24": "5s9F2HoCEfBf1poQbrpaoaovCaf7UbRwQ2MLo3zoVMEY7gcNpCVVzTwTonvWPR5BfvE9X5UhGrNAuW6As1s7fcw7",
  "key25": "41w6FaW54hZ27eKE2YijNFU7cJorc83LjUvQ3YUryP1dbchN4RyUFvjMi2TS8571rtrqohiwGbmb6wVXtpPrfN16"
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
