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
    "2bu8NLrk99dXa6CvyqcGqimipRYTi3XUVBbpFteNv8sTFvxugsWYvmNaEjQUj42nLrkriSEJTVoJD59D8rDfKBDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nf1NeWo2kmArd1sQnMV1q5kmKSc8oykidUkG9kx6TebyrvKn7GY5XNmdRD5xGM6k222SkKtQQ2tGjJBM9oZvCeG",
  "key1": "2HxpJEo8X6Z5GzQMBYhq9icGMMeixAyNh3HoZ1xuKFM7tNcYxJujVMaFbJoXMmx6kRm4taVeQ8RGgxUz2nVrnpQ5",
  "key2": "5EUyTHyhKJHRcU73WLEKyh5AxAnsu5LJVZ5zHVNqQwkBWqyoWnctNtixAEqHYe2qKpKWXQ4227gfxgYtrnt28qHo",
  "key3": "5rrXVcAnC1xKAQiwNrkHnDf6BQNjCszD6FEP8vSSY28fUK8Cco8Ze4cMLz8KzidnhoSDasimwjMBMe8BDN4uBfEL",
  "key4": "3ish5mZT49JtzgSrCrVZwrRQdBszJhhJbMcJp1QCdzZcAXRetGed3Wmi4qzF7nAYVosZ8BmNV58Y5C5gLvUNwsC7",
  "key5": "3tuLGLpGYkyxwoat3tnjSnErgZf8qXAHAtEtxDVFsgXJHwLynydcFZ2n9TQ6jTnq72DnngW5rKqEzqTXFkFiCQt2",
  "key6": "EzKVWKiG4tDQMjBZzSMQCXD9YUP2kTZHwWD7gq76bkcnq4EJcXRBL2Vzr5Xxnj8DvTxhRQ3n9Q3ysMh4P8fqF44",
  "key7": "67QWK7YGSLrY1N422u83HsHNz18R8dfzNrgzQ2YgfbXmfRAFJt7dVUskRsYpzygdCf7TsoAVUB8hTJKgywD2fFcq",
  "key8": "5jy87Nsq4wChnmRPUnCE9EyoTRj4oCxj7CbfnjNC2jz88tvLi6grrhKzKHVFTXJF6PHgdgKAsVCN2QBpPaNUYnLN",
  "key9": "4yxmAAU5vu8txj24vQrWEUCbXacJpJVo28gBLsp9Ge37BzMUzaTZDTCg5uoyAw2hX3YrwHwurMHM5LXVAXskzQJg",
  "key10": "2o39WPko3oh5BQWMF6P3hbumR88yHG8LboRzDSPYzfJKtUJYwpRum7S2csaFfovSKxqnYgFZU2QRqbYPesP6HX4B",
  "key11": "KifNwP8vTCgbqndBLxGTbtmqduGdyaAuomFY6ZnryW9Pp2iASbeZ3rfrz79icHMAoYvETXrREkis11P2icNMffM",
  "key12": "3gG71rkWxDSy6DqgRQVf5wtcgsmbg7WtSuxrT3qK56dDASheZVg1iLfNErvEACDzyYvpsCFVwav9jM6LHQpRTUv8",
  "key13": "5KbNPb8wJzytowthhx9Acp4N919Wui2umQTs4ZjJaioyQwvv5xXizR7Uer8JH52BjtfNQR2788NdpUUwZJJsC2vr",
  "key14": "2d8KrUJydbp6wMiDPDNcUJV1LNo3yiaMKHvBJwp8JrV7rbd8B76iXzFGTK254yBhKvyWgB9sEnPy19GUV86mWARe",
  "key15": "Kk1LHjH6gmvNbN5vnQEFf3GY1PXKiMSnMYk6hgHwpfgA5yXEWZxLrorPLaWC8sCGrwqgUmhygSGQJkvGAmzdMy7",
  "key16": "XngQRiPi49cyuSDPFhQybAbMgbQ4H2fhiA92Bi6G9xfZ14cYd5GoAmzA9cg3rqCU3ZsS1ZpT5svsFkyS4scnKjp",
  "key17": "5BnoPDYyLKFw2a8Z1S3MNXoLHqFHBtGs7asypjiCS8KYTw1JSDMHoHLk8mB9Jov8WBa4pZe53wuw8jCLHvdjV5e3",
  "key18": "5XreRmLu99g9odPMRX56Dr4oi9VxpzBPSZUrDwvJR4puhtunyBxkknEP9NQZuhjJiHHzdqhUuJjfq7VWHyriVJUi",
  "key19": "5dG7XDJj1uEiknQxudtYnVu9GAgEwsczTrDhzt56iLgBNcjNNjsyfYKMuiavumq7na4kYm6ZEhjJoY4yUqRhF8xW",
  "key20": "4QCSXT8uyA2YZ3p3cPcqqXhoPG6uBaZAeWbxMRT92Us26AC9cdWxgV8hLny7kejGUHgmJibuwfvWBkKPSQj6g7QN",
  "key21": "3Ak6dbSv7MQygbiY6vzFFgFdFjxyR3NWwhJrkdhZ7TeLbY4vN1ZPocz2NWP6Z2j1AHDfd75KvtFjJVQdG3TUFJ9L",
  "key22": "54V2DPW4XAouEPqqszoU3cfbzDiZjKp1avoagbZ6TJMuEQAHcUXdyZHiHz5oMBFVC9yxVBaSf9zJMaBDMjMx5Tt5",
  "key23": "3F79MFGokiZ9Wh1eAkPGMsyi1keFM353RcY7JobhzeiejYk3hanDK1EmcKU4QbMpkDMHByYrrJ3fgcNPb7oAnfHb",
  "key24": "C7pVmzrW2Zd4t35L9kTzepgrxqkgTJ7BthPu5stghsUk8bPKcGAwKrgs4m5jGcAVS2A3MBzzn5MoswopUn1oReT",
  "key25": "4YToxXHTdtkGcHKk9Pf5dtwZ3XzmPFKn4Fp2FBoE2foQbma7ibshnaW6FS8DKKHg3LGFi538a9Rbf46CZuqE6PtB",
  "key26": "5mgv43muAun2iLk21TpNbdFpPQFRVeRfhFDp24SGDkgAmdf29dC1F1AgqjumGCma3MptXksU2V8yayjX4PfTW9Wd",
  "key27": "3ZMzV25sCFZkQPp2BHL2Pdn3hcTiosySrSRvj2jq63RtzkA6Ks8ftTn76JejQeSLiCqxDemVR2HP81sfzXvCd5CY",
  "key28": "4w77kqMNftYxjL2eDoLHptcK2ZiVQkPwxtJukrjJdToLEL3qv12ZQBTdehmZyqMP36zwJvP8TMhM7PK4aAHdGoos",
  "key29": "5LoCXC7bzpXCxGgLYKaizQ72or7od7nU39BNrppRfpxJ3PWvnEk9B7N4fGyTyCgiXqioanrMRQ59Q2c9Gk7vhUrt",
  "key30": "5qDV76pQEU99KK9DdGo3SQhGoHQtzxtEKbQ4P5nXHaqytgPviUxCvpjr5REX8ygv4eByTrinVwq3vhwfWufFctH7",
  "key31": "2oZiCn9pNyadv9ukVAiUhSjG6Zzj8HXymKEndXgYRxBZP7UgGjQbA11pq3zFnH183hwY3h5zEpRp6YZUiTTtSxpH",
  "key32": "5drfgaG55bztNJGDdYBZAGN19zZkCFdeVJBo4Agj7FdtFsk4qsRAGiQFFg3whWQhvkqTWiUoAowJFX8rgv3SWSVo",
  "key33": "3GMoeMZ3CH5vVxBMbrKVJPiccrTZvfWGAdMJxVxJ6T7FVrAzyVbcH4uPc7tTv1DKC1pQ3VWfkwYADmUcTZKngXqW",
  "key34": "4CVu2pwLip5rFfYp6BhCM712BHgPsgPsuku5wM4A5zdTvrVyh5nYDGMK5WBGryi1ZHS5hLZe23uTLCY2MzKnfbA",
  "key35": "ZeHWEBQRR7Fsaxu33kPnHy9b6eKt8J6mnNnJkuUKZiPFZEFxB5MFyWF48C1fxuMdqRScEbm44PvyzQU3LTMQFth",
  "key36": "HHN9VzEaup33HqrEvvHU7xy3je2yXZtkG5xj5pfghGjsqEFzTekuFpD4fNV6SwBghoxfRqQ4cA7j2JmKARL3BKF",
  "key37": "kQoqdsD26E22myjmR2NnkM9LbcvQyKvTSmfeqUoRpCJ33utqAB7Y2WQ7AjJEfNNmsdaMVDEL8NEQQz4qaDjiizP",
  "key38": "SYWnFxNrxUeAK5QB5djNiHP6V9QWr4bXDxZA2LFV8XSLUfP6rcSSmwQHK3E7nNuCzN9ZLicidLgp8kaPk2kXweR",
  "key39": "3kKdBhTeQgut2392ibtb7c3r6scEZ7hwB7i3QH5gFnjUwYG4NAPuYbFCu7XvUufbjBGNJLZLfPVDHreJ97zCzX2p",
  "key40": "3RTKdHBkH5GUys5awMnFkynvyTpbCmVnFP6WRa5UyqbJnBrdURs6fwiryht5HbsrgCJKcrxuRewsVGCkw2YYASEZ",
  "key41": "34cAvGD185YbmtKf3pXGMag2TGrKy6DtBYZ3FoRZMDkBM4Fj5jyA61haMhwsBbJV5j3BFJoUiY5Nip3WGwrQJf8d",
  "key42": "54tU5MG5zzXQtKQfkNRi5j2Uku1Q1PU6zHwLCTGAjCwx8ydWgp8AY2o2qcsVeCn1B4z4xPznQEmhcvW1v1nQx7mk"
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
