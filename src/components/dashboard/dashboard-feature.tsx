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
    "5rEyaHnbWRFUfjbr5HyMuSmcXen7nrUbU9Tx6e6CaULCjZWiovXafHMjF1XJUEkAbXEasvAA5Ta8KAkURpavec7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3weGMJWNwq73e2zoRWAQoNbyAMDYKKqwUYxXYA8Zhs5AFxgRsAQfMHqaV2ejXiH1Ss6fuLJ4sVqz7ndmUbcsNRgW",
  "key1": "sB6k1WGxR2JdLYoY8mCz1zMdZdTPLwihELKiramZ1DzT6TkuQjX1G9X3sAantBhdQRcGqK2AefiJREtGLsf3wDz",
  "key2": "4TF9KTpEkey5PPjPsnqf9z2ypnsXi4PAqUTwoyeswpkzmbAYc3djm8NNdvFDFX1F4wTNt1gYvbeTeuzzu5SHTUkE",
  "key3": "46GC6bKUEHCYCDSSw2Fx8zEF7paRi9ifJSks1dS587jSYUtG73k9QJGgmKLeBHH6ZJPY5vWsAJtacwQhVUN9fRW",
  "key4": "4qm5pjMt2yqLi5c5BNRVo6AMhtfFAFM2USgyqyj2VNnfVJdEgV2NnnTugQJAZhAza6d1TcpdwynQjrwb2VV6ZcYJ",
  "key5": "34szN6gKbFiPRkiuNXUms2GMhAyacFgFSQdGT9AHkry6QUhv8MyM7raAcADRFPXJv74wdgisEzWsSiqcfyeSQ1HQ",
  "key6": "34U9npjtvepdia6JMsfuBLwNksj2YSLYh42RVDm53oETWkg1eHAJhFtsRFPRecBpAML4vSyWCWsY8Wp8xAudUChS",
  "key7": "473YX1MwqvKwSKC5ZqLTQ8fGV3mxcRukFXbKFbmLb5XUijv2iy1tn9XngyQeBK7bQUgHcA5UyfC3U32Z53xLtCe8",
  "key8": "61vjVBCybWJQLKAJaL2Eeu3Z1oWNiGjt4w4FH8JrFmRvQJELmrZBJpbpUvSjqvLYLufzhYtxf5qyzdi1iyp6yfbJ",
  "key9": "5xjo6GYpfgSAhEq3APdbqajoy7QZecgKZnXuDiuCfb978StYM5Z2GyLGtQnHeaY5tayLTnSHmfSTRmAvPf1ZwgJJ",
  "key10": "4NuKjhX9NdwiqorC3a7kjAQagSyeQNPcrnJuMXAAD9ZcecHzQyRCPKNpxeKKzb5z8RtxryJfsMFgmE6rqpiRwFTM",
  "key11": "2qTt99VTN12hzjEj9MN484A7BTR9fE1CkJD796gUfKJeHL4mMU27BTBWVy9eTsKWAEKJ69jPQJWKKKBVYUwtWssM",
  "key12": "LtPjJ5xCn5r5TwttoSPMgUeYAQ52aur2Xcb8mL3U1g4CdM49QRji9iCUqjZk54hUSQjasFE4bMPwsZhrdWW9389",
  "key13": "3MhZ17NphX2zhZGLzoLKXWPJ6XgJ6YC2NhUZN2z6wkR9vto9voWeHboiUm3dw9ymuCTELun1dsPddxDWjGH6LsEy",
  "key14": "2kPXstxPZU3Uz4aavLbkJUrS2m9MExzFq8jzpnH5CKqkHviDFnPdkVWDh5kUb8HNF9ayURy5gZD8pMfoWDozGYZU",
  "key15": "53Lks1HY7H2GUcBSYtmZVyXxX6iadcWBxMC64FpwBcncRM45UviZnvysmpbho6BT31vf4SsTYKrmkPQ85EmNVHAs",
  "key16": "2DXbi42PruSn3ZgiwioHABijR2zZ1U4uiH7okrhdBAnmHjE2L4847DuYrRKkY5eNPGaHA3yX8CvZXRRnrnoWTnJt",
  "key17": "3TLzuqdC2MfWWF7PRHwXLXLdU4mucr9WN6yfSThUCubkx1gTGqVUDGUoPU3ma823FdmK2Z2iXJvensFj6YnfGi5p",
  "key18": "47Y6yztCzhrRZLcnRrWBCr9pGEc1fXeVSefweMExYdUhUMTn3iSCaTDYKUKF6kuejgfmombSF8rSyS2oYm5vF9at",
  "key19": "5mBsN5MDs338g9sG2MDYjzMBnwsP8rDPEbw9dQgTd4R14DNXzWZ2aV3de8NPNeWjd3zyjRR3JjraXiu4FGJDNn9k",
  "key20": "43E8R1wTV5ckLTChRHgjTkH3shuApLuaTrENft9aVwKYHn8dmhH2BLh9qRgkFoWgrTYXXr3XjiHXukjC5k2XpmfL",
  "key21": "2FxvqPCH3mYqtUpvhFqqfEe4iBNXiZ4Rhf19zPyhvBvdvGFZZ5Z5zUq7Gn3AeaKpP2nyq6wsFcGubJubcdJUFC6j",
  "key22": "54DcQJYGWzGULdYphRaV8m25c6AGWN66cPpB4goBQMdZKsXSpRFJToy8uPJonMRidfMWxkeY7csRjq8zBJ5jHzqs",
  "key23": "xv2i35aFRmU6SYZ121e4U2JTgRmwTieCVLh29faAvKsRUdKsm9omXR3xPf8an9oi9H1maJhLzXx3gCMQwAfuxfa",
  "key24": "3NyDsByLzrBxrdeVTY9FQCKhPJSz1PzqB75S2JVvf6kzMN9vB6f3wWdXuN4dp5pxQuoxFdVN9dJzQXjajt1NSfTc",
  "key25": "4rtDdW7YPTVoUKnhJAVLruweZNmHskYvR3hgGoKcaNzkWUDVWv9oHcoZCqRx2KcQTLkcaTchpQaDqF3phPhw3XKo",
  "key26": "Dwokv5ye1pibz8VhQZ7zZnoRy4mPvrDL93MYzgq9deiyoo36ThMZKMkL3wM3QPHJiqAbung3QW4XGcZ8gncjzXE",
  "key27": "5GXqSxgJSQVKQzLPtcm7qVVAZrNwS5ek6KE15MS1CQBtK59oxkLb1yc21aZW1RHW5RwCDWRGBDc1ZL6uz4NChmJQ",
  "key28": "47mgKLASM2ZympAsqomdg5UcwYUuCUiyTyatTMy3cKWJQ3BeemdwT7GmTLSUQkN2Cig611G9mXJ4bSfKYhcoBr61",
  "key29": "2F54CJPfriFUPJWjJiSgo71CPhrnTbwg3fFjB8RLuzS3tD5DE49XSCem4LUjfLaY81wDgJTxKXiTQPwQkMYdC8Gv",
  "key30": "2j1eKRzxsiEF6FRSVFQtFLsmYW7HcNTH7MZecoRPMAxc1KoHnvY8vysoAvarfeYbnEUDPiNezm9EDyQQ61nHNmit",
  "key31": "2HJeLCPUc83YQHCyoWpxxqeUXrWwS1BJBDapu4qnidZFiRt3QDWfdT7SS9p3TjczhkAUBHWMotYEXa2FbrBKPyrq",
  "key32": "47CPPuTnN6Wkhxe1xMNyrwNJaWF8QJpMMG87tNXeGyH99oimuPZyN1KaCPWNrNd1pZYRSD9wEHt1HdHFkV8fJ34d",
  "key33": "67QVK3WZX3igawEmz7NdV2N7z5vA35g5qajgsiRDuoVNw3JeApe5RGGE4g6uQ48Ni5bdJVhaEk4PmikhEj9CMNuP",
  "key34": "3oWvvA2sLMNLpTcuBTfPPpCpRGCFSvZKBezuhNVHtu48fFDwZ5ExgguDXPHxsfxqw2KJcnyw3687oX3GWqsgEvHG",
  "key35": "5Z3TvWVCUrfFqafSjWCyiQjKrE3pc633rVSpxrkEMKjm1Cmw4h3hfg7sGAUU1HGtyZ5PdFZYZGnHkbDuRe6yPXKN",
  "key36": "2P5bBd5iXA17bu7cHRJ761rnofDwt5kMxNoZ7iJLfaRS4bxcTgUFx4wZATMM7feieTUsJHqBxBqr7v37WGX44kNS",
  "key37": "2P1yHrQ8xBztG4CsaL2gZR4Pnc8CYDuoHPCQMb4BpDVZad9dwk6KfeDJ77wJdv7jSRb6ajP91aMWhscJb5nfEf2c",
  "key38": "DJVeZf4ymKzWYHVUnLH6GyfvUM5MtVTFoDhbSMGcVwRu4h7fnkuK1pB9HoR3xbvJgj87Mpa6uJnLDX5e7Co6wXg",
  "key39": "5URaJtg1q7Q1di7NJB4Qp144yLEdneA12nwXnnsDbxtEJ37sTo6Rzjh3KXYju3Y5PLnf2XzFyRDL4yfCmvZHxenL",
  "key40": "2KutdB6Bw18KaFvRdZmDNaXMxkEce4HwfJZjQTNB1cyMnwnXE2orBsS96x97RuqkpE96cT6Co9gvqX1MjLizgAew"
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
