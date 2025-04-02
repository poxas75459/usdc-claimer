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
    "d4CmmhdEZtrmfPU27K8rHAVxuCBbj4HG2AUoKYTKVu1YrWwbbJ8XuW4NBtmawiEy8DffZdPSeLoVYs5ZyQ1wD6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5ujDsCmKLh5cKmowzwKr82gpYHyhZes2qJvJuD8RCtFQWzuVEGjzXYVhqeaPfs9xsiPA8vSzKa3NudkAwRc2BD",
  "key1": "2hgoQcwrmrJrPudNxmXmHxk4cCv4H4mpHvfmvGZN87S6yFaiKzUuAXaiLen5WE3bV8DxTRXiviML3r54HR1Kknpx",
  "key2": "dirWAdfqhU17v6iKBgHrM3XMQSr6djLJpEWfMG7ugyBUNZyxSTVwresapziBDGaxZDozcnHUDMnCNHzz8BkjSA6",
  "key3": "3wBUkfyCEqW6H7Xfdu8ZKh7TdrET5oZvuZkhPeLxaWyMVS2Z7tMzeZc9MW9VTdW2c778BMNrarfM7W9aqpxvKTVa",
  "key4": "4dTazQTZCmJmrEZMmvc7tSzvWf5BXfdkMJLAYbLtraEH6yhyPdg2kUY5Wp9v84i97rt8CbFkZkfV9aUxwvem1Y7Z",
  "key5": "43nzPMNdJs34jkMzNfV5Up5D9zdWGg28QZujo3PioAPVwvFi56LByKMhEKbANbyZ4cp4RZ3QBWvHZtv4RH8wyo9G",
  "key6": "65jcuh3c3ExoeXQDVUjAt6cjzxrMtQTP65rY4uzLwDxLpJEFXuEYosd9T1cyBo1RV8W9XAAg55C2zhE3tBqUq1Pr",
  "key7": "4Qy3V9qJ2RcQViQpzVWeuvzFNTv3NTgyTFQFNxKaXhE71PL7ho45LhKNcjsQVwXfHe26pRFipwQ1VNduFGbtrAZ3",
  "key8": "2bkXY5QfzYHGRYmTUVAtR1PgS9jjN4VyyrBso2ji51vsVnbhuPmihSnaonz8GYDq9UeYtFm8d4CpQ4qLtbeEQsn5",
  "key9": "c5xkCfXwUA28TVavK3tEtFmtuvALvnT5hR8RAuWswy9svsun1auwKvPnC7tqWireEg7cUUPkTHpVjBXVxDLkFbW",
  "key10": "2zQxk7QzB54n5Uz3PqF7mzV4eJtxavoAPj9hFEFKDqQFGh78i3S76eGE3qhfwDjccq3QhZVUysAdHkmJRS7MVAk7",
  "key11": "5GFjKJK4hT3F5vZ7uVBCe7DapmzBJspTeGbBLUZSpQXixJJvQhWC4GbiHDpfgLYWikT9sLSyV3rEy1oRts4CZv1a",
  "key12": "4upwGgnL8eButr2d6N89veGzeKmRGEuNMJEJr6zSq6hTG79YuFtb1UEZL3A3wJ3qtSxFLcMZgzW3mCePqreSW9K7",
  "key13": "EhUSJ1H28mqT4TQ2LFoiLmWru7JgTaqRvtqyAgNQMmxixPLGaFhsEiNBBsB6kmK5Xhdr31jmn2Yu29CbhQAz46X",
  "key14": "3FrRR3hBByrYBC45Kx967qEpPzQaVdjB4LiTaMPuVjNF2cQhNJZc46DnvPXJ6k1p8znukpeZ5tnFuzwyfTndfoNr",
  "key15": "Kr5h2chwqUjYPB2fFD7uKhg2J5jzk3792nzYjgXPC4AgpCfuZFrdsLG1Bn98RrtKZjrn8CvBLdfy4wLBVWUT87q",
  "key16": "2cvNsphHT91soEDNYjMUADcCLWGUxuxuMdLvFmfgWabhXWeXBU7Paak5eyKH6wEaKVc2NBKpQU36p8qPcb1ZVmrf",
  "key17": "2s4dFbRb4pnVUoWX5ktTW5AdewdvQ5DHRv1e5WhiVTvXinkwKjokLnLyZwhDgNGX32KwnQDtUARYfq6mM4DyYjJ9",
  "key18": "3vHqivnV5zFbzGgrFPbTv2v9MAJrqwnwXehxCE3C6o3wycNzKv9tZw49y56WmfsRHZYCtiqRNa8T1epo93DZHbgp",
  "key19": "4ZexVjWD8rsuVKYphmYCGh41jnUUpEGkYKeVNdNRm7v9MWG7ZBLJvoeat4srdrQHP96sPPZA7L3U7VXqe3Vw6egs",
  "key20": "2TS8wk5vpnFVUAvBUFtor9Kpy8P8Vcx1gex6ZRvZ4iRKcXxRdo6J2QMWVLJ6d56MbWffwFujL3Q1xfpY3nGY9fwb",
  "key21": "4xGGXd5CZYaFEW3ugayF9GGTaZRC9hmhYts9ySd4qqZBG47wvAg6XvcuyueKNqp2WzYHFdCxfsGVv91AehiNPZQU",
  "key22": "4FbSjtPggMN76K4t2vX6PatcZjHL9V6GdyKmaX2wVdUpSg5xGU2G8Br1yxLUUowwaaAuvFhuGD2SmiKENojsfE21",
  "key23": "3hhmMrzAeXqRNgE7XnxxyB58912kv7WPyhUykduJT3w7g9W9iLzrZ75HiMySBXRJLT8jAy4825VgGumvhbfgerKM",
  "key24": "37MGvtxCRKxT7fMrAFsNszh9icyAajME34M73Z9uwowgSkf6AjHdjTvouCTg4f6Fxx2xGBisSA1oXUHxQxLNWduS",
  "key25": "LPhGf9VWeQiMNfN3HV2vretLdopCYEbJ6gjMb88kM6Lm5pN6qMdv4fVmYRQYpMHYx21rXgUxFbJRbZJbtHPXgzM",
  "key26": "22Dp2nDFoSNFkjoaLL1b3ASvCrMiDSUdEyvgArZEnyjEjENhAr4TGtwvNhfs6Fmb74wKWsSBhfJE6aZDd9iBzaft",
  "key27": "2SrF4qZc11QgB29oTmWKBnYrqu5hAKxFYiEsy3RT11LmF2dbZR4b2EvAJSAcuTRK1cSA4iaVEXEWVePBW4DLdhLo",
  "key28": "2vLxxZdV3U5ULMCWBzgCXkJgxbwgsLQhemnGJrcg4n2SJjaze7jqvNjJa1uR3inYAKgJQYYtxXoXV6YfDj5mGcQe",
  "key29": "4JSuHY49YRBKyfrMFroQz3ZwAAeptDDexQTfFFk3TLnPhQ7Nu8LTXxUWnjNgtj6Fu7RmFP8DPzoEuvxhUYLen1uK",
  "key30": "65jVQCNT4BA5gmdULamHP3LuYKsLfQERWuoHM66CApyVawMbfyyAXCvjMtFrv7Yonnh7WytyeGGq1nQppyCQAqpa",
  "key31": "Gzn9jyi88JJevyBUBJ64FZGdwdggxtiEYbLT573biZKoR9FsyzkZSJyboezcvbqyJWCzP2KF2HP4rbgSDFFwwqM",
  "key32": "uspLL5oxF5ktsuADkXBSW29nRWEWAgQzJBkV4s2FcYGaYkMgNLpRE8fMZ3CPJ57A3wi9snr9CC6PTJqYDDtkuqu",
  "key33": "RXdgZdA13e4fzbimfxmJokMZSAgrEyDoKtUy1PLbqpRUyoXRiULnGzV2YntDvEA5J33wqDiZQAzWxMHdNearVf5",
  "key34": "5PUCgwWAjiLzAfpzSNwMpZCbCFjLznQ633Cyb945SEdvX8Q4SCRH4xfaPAXiubEmy1SuuqgPSeCGFxb8YZxyA361",
  "key35": "5suyJLyHb16NyHcCvzbg4bDjDNQo1eanS1ny6SkvdYC6BSBj3QqPNux4b6F1i5Di2h1Wowa7z1F1tkSKCxPt6QBy",
  "key36": "2RKgShHgsW5txcSdn5Dvs37rJFHfhUsLvY45xMjxsEUGJ7NaPMxp6FqxH3M5QDZpomVcAS8pnqTtWrVFwRDkScJy",
  "key37": "3aH6Xxh9nL7Kf1qnTGSxCWQGQ1Aiy8Vh3Y1Z1sCkeJZCWQP4MkM7cQ1t1Rkf6MTXURx5YTK9fC31VcUUPBSzDvq",
  "key38": "xCXgdHzYmcpMPTzsvTY8bctTRubWdGXZT23hzsUwkF5HMAMWbZEmfSW7znYuAnXtGeUg3wwWVzw43rEd88dvLDJ",
  "key39": "JJ4stgp64H8giibTmZxDkioMfFcA2inh8RnMpdpa19DvsxfeHt3L6DXQFKZvqwySkkf2Zq6Phegmicdop9FqxJT",
  "key40": "25jrpfxPwhrQCy6rcsZ4xmWWip2VG2P9ZL2QadDwF6GWLmy8PFKadMGLHvcZQGpDQtEjDSQKfqG7xXvmqgXpeXST",
  "key41": "2AxZdUDQgLL5KkaU5eWShNzWEZ2pzbduSYFHwR5LnuTmQSKXx7foxMebSWCvNmptEBcdMxSiLkS1eJBGvEeDQWpB",
  "key42": "4pmt7UjhWq84Q7XonWXZRTxyMmaq5irahRnRR1TU9fSCfAr8hxeKE8LiCFjVLuydW4GQ67MYRFVGDjyZ5jxyon7U",
  "key43": "53VWYUnHDEwVjHfeiesHJ6WBQ5Y77CTAomsQFR9Pf8GsREfAYkhXiVpHSvpNgJhLKwv7fF21kitdzwGMUK815egt",
  "key44": "37DpFBg8FENgB4HkFQsanU3x7HwhsfHvW6jhZ8o26hGKUmHvhshVXN89Ut2mAJE66Ltw5AKJXkVJnBD4bs4RYenF",
  "key45": "5kcScMcopVDQBfjUAbEwrckj7u8bFhGQixHyXsyapkKeHy5s29rYYdpPwkGCyRuxgvRK5nimfzSsthEcd1arUf2P",
  "key46": "63Ydekg149wSQvuamscMKycvKrYMUcVSy74QRVbqop8kWRvKwEXJRbrVAUxznUYtdFPMbBDkNhVLdxmDcWcKZbr6",
  "key47": "45a5zc31KybR3nwzuAbfXKDsU6SdYHNoYqvKfgDCpBjumGzBAsoauKXuYvfVPU2qa1QQwNSKMzM9pqJUxhQ9LTN3"
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
