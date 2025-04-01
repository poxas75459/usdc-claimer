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
    "41uCQL5giDpcCD8DLPZu8JdncQS85q8886uXQksFX8qwW1YasUNgeA3Wyr8cUTZKrzcMq3WxiapmoqGjYRqR9he4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U7qMhtz47rAJWYafvQ9yuLv4Kpi5FLvJSSBVLHXsxXrAcqiYofkhRw153dEz8iQwD6m4wQTpoGZy29YirJDrZaX",
  "key1": "2FecgsyYivFbnN2ZzDoFtWcokQDjt3YwhJRRixfoCqAKhtcRCmHiMebd1ziDWayMvMeqEMnn2fHxVnLfEiqHkikN",
  "key2": "1i3JiPdZxr6xJsVi49iTPmEmMjhWrjVuJgnQJp5S1c1tfk4we2uiyKWQYywsuaWyTJagxzeYZP8iMfPYLZFbMP7",
  "key3": "5uDmuDQLG122m1txf38Zb4fN3rg7PGTqg7nQErmScBqtWdFqeDDmdQV3Xn33wv7injx93ccfZvSboJ62Eucxz4KA",
  "key4": "1QsZGZrAjnfu83sUshxzSbx5Y1eeELpCRvN9mG83SZFTCoB2h8DUuqKVSCFcUHE5TEcjfhVzL7TbVPzeDMFU96N",
  "key5": "vanENq938hfU2rkX93njEc6NMbAcef2339KXxpeou2y7dyrSz9ogSuvAWqpJWBaiovsVH9TWK9upqniUTfx79mW",
  "key6": "9zv9vBVpYintw9sbCixquPKEFshm9G92tsjJqHP5hizTbLmHqcFpiiqZca84nGjoKruwicCuVtTxWaSJmiNmoL6",
  "key7": "1fR6dhKrhBohrTrRBctUeKPSaeYg2pf9D4tbUCYAhkdJSFb6dgnpQeUHjEvTKATVMaAa5AY9N5Bg3K3c5gqL3qe",
  "key8": "ZYpj4RCoR4G4BSN3MAz1iksNVZcDEkwjNZpfzExFUMLNrUtYURX8VQDb5ffvfi5LQR4Xs7dnq8NBTNdAWEe8xPh",
  "key9": "64gbZVMH5Fq1DJYFcJWCihmLTKvxy2Mu7adsqqFHZB2ZFCjLF1oJVApSYXiZHWif17KzocH1UP2uQZ6LgvJBKXZz",
  "key10": "bH28XfPdr4BBVcRRmYSMWmGRDM2iqFtGjrsQwAMY8JUoZpY6A57pXRT2KEhUs5DptVCiNQznh6ZVkcKXgD7tWE3",
  "key11": "4QYyfUMBMYogiWhJwEJBprENrgEkxB1o5U2P9QEwVYdv3M1hYQfBpAP6mja69ekYiJtDTgr6h53NKtgrATNV6exb",
  "key12": "63kkn3MMEyTEAHV8HgTJaNQXGgvxBZ7G3QfrD4iQhmymrqdQmsirv1M7ZAAz5UiMWm6hKg4FK66MGzoTRh1nLiX4",
  "key13": "2WfPcDFQvk8vzp2Zwb9ZxidFv9GrQFqTxSL2mQXtHD3qXof1AR2nZ57b8kM7XATF8V6J26BEFe6mjGiLFKKx62A1",
  "key14": "4KkNCE5BaioZf5ttyaXtoSwSsDAFXYT6K8iKRRw7G8Vk4KtSvVbHSxV65MtEtDSDwmwXyUWJ3qxRNz49Gi83EzEP",
  "key15": "2V996EStqg6Lq8ttg9tA9UXfA193TETF4LNNpZwX3VEXx2Nr9GPSGpZ12QV2m4cVdmeaGuHeC6Jqh3aE73vwsxro",
  "key16": "2XytNTJ6WscQ8zYdBc9iHzh1ZtWCLiuDw5a6Tisan2LcBXGVDjq3dRAwiyWTeJgActg96vp6R3LqGGnyAruuugX7",
  "key17": "4DjtNnXkbZzuDMDWn77bTu2NTFpxYAwMXdLyUMXFNZjWgr9MbeK19UkaeLszSh83j8PcRNtZqAKJQjUjk3yoPrWG",
  "key18": "zmZ2i1iRq4C5J4W7EochDYukLauahu6ikqipTS9kShRA5KCitJEVWVXP3Qq9Gq1THBxmmcZJuehW5h5sQY1VNTn",
  "key19": "2seU6s57S39rGFTmM32gzij4c45gL4ALquQnSXi1Y3SPumApv6K5euWujCGF1efvHqFjshckGGquLhPPdq1n6tJb",
  "key20": "wZLLasuiLA1tePu2ZhmFTcUyzcdmVvfQqmvVtyLmbf7DX554W1b5zGqfvJ1Pbzf7xRwyRXjk3Gfaq2yFftF9ASu",
  "key21": "2Xcg4VPaeKqL8qspr5byjDS2jdPncfkomaUmqpP4NNK8ezESCr3sD3QFzFMSXqdL526osLPykricx5rTHbH9fZVp",
  "key22": "6xv5TaP8B4qHcEVkGz2rarX6zAaehdwaV5QCbdB7Mx5HvoV5X5wynJThjDxao5SPXwfkhAotAQFp4S11tbKDx5X",
  "key23": "A2p7xVdjRFGDZmmamGdrEY4JQoWn2LoSFAxaWUDhWC68EbPaVdCT8XzD1jQgMzYEHdh7zzuiz6ohnPdVAk7Bg8r",
  "key24": "2C1gVSUU8gdPYq4GKG7y4GWLCcnZiH7LXtzLqzDKvtKm7NXxPYeZPuAjmfNku6JAcAu4inBwADNYzYhivXMXnfLi",
  "key25": "2kUxu98HMtugdMfm9w7mghxRHfGHxEMx2FK4pfXfqBwEouWzCnCuDhFoQVdeSMttyf9zzQs6SmdPZP6jToKGbkzC",
  "key26": "3bicPALQ1JHCVcWUkBdtS66N2HUtfdkhSNYtUb3PhdyT85nVs9QxFWHKMu1n5ndVadp1KNJdBUJRyyytnLsdua1M",
  "key27": "5vb89jQZndAD23NWUackhGkV7vkYVfY8F5AWATiRRh5Q5i9E4RgCgS2TRfY7izPnzR9RiVHN6k5yfaP6ynWEHa6U",
  "key28": "2voDR8Z7N9P1EXgbXDSgjjbJVwEykbQ9i1aPraiJnSGdpvAUsSKqxtFfsUrjKpByrb624Vk55sV3u5s7LvUyAKmo",
  "key29": "2w7dLGYSpTCiXcfxeHLjZGsMXvN8eReXhPn2iBeKmLXTYQTgC8MgjHYw23APRDhZBrbNhvt8WLKWT5QSL5odhVjD",
  "key30": "4DiGtqy3ydLstGEyVsr6gVJUEnji3jrWVSaLmo6HFu1ouXqt6vzkcqLzvgj56e7ZuNt4tqij51BvhwYHoSWZD1nP",
  "key31": "3QYPjqRGBjGnXKJeREes7ws67dtU7ttPB7mE8UTYgoMiwekmNp9pJuZSnpAq2RnwoNhKz5R9xEjhvnbFSPEzzKWa",
  "key32": "5AVgsHpTgjjDoqjWcFRgjYEBGxpHHssAsGaTXaKoeP9LV8tbSgF7MpLFL2zgbezeQMvbA9agHdQcLukyvxSrYbBL",
  "key33": "hRSUWcDCoyY7BxjMLE8aRQkhDzLUW2nffhRLJFqummp4xDDaatQS49MRqhBZH9bN2JuciBWzTCa3RRj9d7h47YV",
  "key34": "5RdHj4SFaymo8fCh5Lt2EuHNHQkvAAtbzuXFVuwe4G3b4Y8CJNyhS3cATjuzSqL28Jcxd9GVTijhNd3AvTsbc2nj",
  "key35": "5nbZ2PcMU2Uvny647ve8qAgHsoCerTY7Nk2u1TWygo6jYVWuGESm3smGRjHx5nb34LqdpVbvopu6cYdxTtB6m6BF"
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
