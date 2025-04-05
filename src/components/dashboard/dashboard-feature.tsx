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
    "2j5Z66YnMvMsujSKGHufMn9iEmcFXyTVnUTokxNsJSGV9rBXTqDdiiHzVbUgHZfiyNV1imnaqbU4ZW3xz2hHrb9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Zsmf6pBwjPMGgXvGAYoqdZjyaBhMWfRh1VnqsMPqpS9yMM1bexxFq4KgV8WwzESDq5k8rDDkJGcnpDfGsQrNzg",
  "key1": "bzDfBpbxJnjViZHXhBrnZTd9gzaWzhc2wGxSqfrbNz7kGG1XkP6jJmR1tJufVh5rnCePpo1MAy48myEsJJGb8L7",
  "key2": "2enkSbQDvk7mkuyauDRT1BFR2xpj6MqRdNqVwFh5NDtEjEfTnMyH3Z8tVSgmKE8T111ScUp2P8QfDHAPnk2agWqt",
  "key3": "V98d82eT6ghTRrZeD81Fq4iof4k1KWjYq4Fqz6z2BQUw9ZdDkoHRWkGnidize8gy6aNRfxnUDWWzDS4L9gVx1fG",
  "key4": "2bzz63Uz2PzVEzWePkYa1kGavjNAeyktYw3VXsbw29wN4LDdFMLi4Myb6RnLTz33kiHnRwHAXHqirxgUAS21zwTh",
  "key5": "2HQ7bzvuwZGzB6kFPm5pBVKyr5uS5y73V9dnzyeRFn5PJfvRbjbfy8pn1VdoT9eZAQSxqPYZaBHKrSxpQn4kHvm1",
  "key6": "3tneT98r6tU8Kp6JTiPFcsC57D2Pt9ggVgDHcNZNomPA7PKnks6YEEQMxPFboHerYrjdMPCdnA7ykXXuxAJBbgVB",
  "key7": "3YxcXggH47mURp6seTivvugoYsWuz2rJk26hTc9LXDTNAtAzQbokSeYVQxvjnu3ofEySQsYzaFNs6MHwqLBffEG9",
  "key8": "5DsJn8QzfGC9gR85kyU8CV9jJvDWbyVF6qr1mnGPz6WEdBoUvwos5yguVLJCt6px2FL3UwZuA7HwrDxYdo9uaBq1",
  "key9": "2SLvB1vMgFY3ZCNWoSR1bG414VUREfPAGWVx7k3tDAs9SQbeDqaH1Yz3H7pQnWmeTSk6ACoAoCr4WAUJ9hRKTJgD",
  "key10": "XXb2gP7RQqd1WeoP2PSTFTSjDhxMbgthoHiAdDsU5cHwKQyWkCy9e4qRfRRGBjzbjTjLEPtKsFWzFuiAEEPWLRi",
  "key11": "2Qu44jvwYAjGskYAM75tZaBfcuCu1RABcwFTP8erKuiNJjYKFxHhGCJbH3hKimbzefN3235ZdF3gY9SiqDcu4Tak",
  "key12": "3LbVdCXWAvduXFqzZt9kF92AAqu1SrhDF26uwjDovVF2GVyG1FL6GxRTbEbYZCgsBCuihY9S9bwtK1Jm1exWLs2J",
  "key13": "4CfWSAK3mBih7LFiE7Lyu2HfbWu4d3ZuRDVnWUvq5zAkCpNbiigRnTmrVRrMjGsBmpDugHVTiaa5v1y7Ds9KGjwc",
  "key14": "5gTjN1qq6eqFJNjxhZFVaY24ciKc5JyzfqEMf6HRncUVuesGvGBZQQtLGQhLY9mf1uRxABDhsANeWfXAjGdo5e1G",
  "key15": "3gKJjhB1nFPrYC97AZX1KNYEfJoYmrV5thPKoWPDJ4APTdzrCwwWra7Snc59jJDnKaPTeYHQohiSJcGFTcu4jLeA",
  "key16": "2f6W5fgyn3KEnGPjUiqghPBMVd6hg3TVWAeHe5wHfNQ1nS1dvynBwYWoopg2Zr9LcTnoiqbRem4e1Ujbs8DmmWxt",
  "key17": "27CoxTfENCaEHJnirsrwicvcRvDMafCJAWTyqhWh92Y3Tvn4kH3j81coMQE8JuEaibUgg2MLPDsdGQpqJk1fZnMv",
  "key18": "3A4VsqtvuUNMUXxmiGhYTrFDJ8Y27BoJWryqzH3ni9xwYP7Ri7w8yocoyCrJPrUHQ6ZkfKnJ6T3BRPze1Zoc3cEV",
  "key19": "5ouYaPWK9Bq8feYWkqKprHNpV3D7f7q9HUt71zjrkpwQ5JUpnvT8LUx6UMkz4L8gWkLJRAguNCPZ9CDqPP4yGzkS",
  "key20": "5wiMXRwVAQxzqPaJnX4LKwA74V7xbhWpP3bHBh21kNbWzRuqKK4F4kDtxDxZMjzwffFfehQZMoo4a9Umqs7TTcPG",
  "key21": "49WVmF4jrV7o3ypFPeW1AQ4t9s7xmD2TAwswPVeMDbDopDPpU1gAHq25Khur3PPKTcgLRwCmYrf7bVUE7TgXit3d",
  "key22": "58t34m28KAoDWe4EkkaFiAw43H9BbbjoPXvwPRdd77VUi8VFUVqx2Q7YLcWNADkP9dTpYojs79cLWc4rVsqkwUZ2",
  "key23": "G2a6iXDn29FP7gqi4df5KMyrKQqbngD1tUtWw82XM2VApK7W7L3JwPESFNBSBHKehbTfhMAMUTSwPgNz8hZ8isP",
  "key24": "PCZHAPLsMmorQKRkz5WPaPPithKfhdqpNtExtu2g1LnraLETFfK9zdwLppoVwsBRAV89ciXvzEcHQNNsjEL5RWX",
  "key25": "612fQHtTwiTXL7RxNzwwWVyLWdrSWQHm5eCnucc5GpVAkNE5N4Wpy4yhYqETwb5g5v9vXy7pp5fnADgAuqCRCMud",
  "key26": "2rSvywuJRWWpaDwiBVMgoTYXM9C54v7zEUcowDSKczdvnLtHcD4LjjGaLgGPT7vrprTF8m3TPXyFph6EWawgxyMc",
  "key27": "4F8EzfZVtTVymdxNPdHuKczsLFTP2J3hyyCfnEkVUTUyRURZZ9Rwtrphkrs3Mvt8kuXLJ9ncVUKp3Dij94UqmQmg",
  "key28": "FeLc6WC31h6Z9uLTTB2vK3dm63Gd4xMTu9N9TC8deKintHqQ9CB4hjeRHwnCsTcw74PXngpFYmhrLvcqtc4bQoT",
  "key29": "2FasLARSkZfADg3ad6iaw6UAqLRitZuhuAsDrzz5mZ4TrJWvsGa1ty2YPU6ftdrUdRaA99sXdcKpiSDe6FNf9LVF",
  "key30": "2cA79tE4Vc2Ka8sbGfem79oYE65ohLBXmdsFEb1NQWSm7zNBiMr7m5VwnthgLfMAAhW8iJ4XjGMZUePDPqQwvig8",
  "key31": "4LpEdXm2EzfuXtWcLxWXWHbXbcV1GoRcJJiG23XUStPeocjXup1pWtrcGE4Fe9zamFkgGd2r41FeiJ5UyhoK4Ufn",
  "key32": "35HmKViU6DTbBu3hma837V2QWwuDHM11Bw3E3hVMwMdvgWKoosGuhE1BMwZ2i3vvvQAZBxsEuLS3biNuzyR5MhU7",
  "key33": "3yGqMjYvGVPeUskXqwovzFn8XqQ8CrhHvwihMiWRr2rFdn53vktvRVFfFJ4TDJGmLnZkccKwZ7r7g5H6BNzRH42B",
  "key34": "KhHi2yn9y43RTaTkkWe6FzpkVc8H3kdW2CxgtKAekaY8awzJX2oP9rivwqprR7VupAgj524gHNSmEBwGX94skdF",
  "key35": "2A3otQJTEB17kqSXpaNSeVthfUF8pBgZgg4ZsVAtZp8wZeyMvF4LJAPFxGtaAoE2iYnz5vdcySiSJNQxijknoG7i"
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
