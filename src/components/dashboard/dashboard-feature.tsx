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
    "29yzs5J1zK3CmpMi7uj2YzT4Q9TmLgq7ecmcwnXkHp66wnKG2EkN7pEQ8EXCoPjkZvrydGrhkJySRZLFfbhJw1Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hdHojhWwsv6QzmZ9arYcPs25UmQ9tUGR85XXMaF6BF1GSWk83EF8tTkKjcbV3wSk5TpDc8Eg7fE81V3XYNCuV25",
  "key1": "3HQkCyirtUMhRJ5okUVJcgSNsfhbLf4VKwwkwprSRUuMMHfBAzXipzTeZStXjFv7rWztNA9zbNAgpMmLX3NccqtE",
  "key2": "5nCMByRoKsp3S5rWbQXBt5sNCs4z29AxBzRqjmnB7mBoWvHdoNy87HEzGH8AqNAWpd7kRusvtbgJSiDA2bHMBzzJ",
  "key3": "ehkDgiK6Zr7Ja1cgBUpcMAb5nHWCfTekAsPgQokm8MKuszAMWpjFYZvjF9CbKeo4SAxSvGuiQDpxj8g8q1AN2wN",
  "key4": "3sMznqsUHBQiThdvJvdD5jHdTU5rvbUGCe7SdokYKEJtgZ2JK5kDCtaEHYfPsDL6oWbcstA6R1Xi5BS9gPEmTurF",
  "key5": "DYbqdrqW9jShehVKQAQHLU3g9fQ5aiLNt2QdkNce1R664ZZXmXTQzzVHgoA9zLRE4hXK2Mut8rsDkpaCzqduqoN",
  "key6": "3QsKzNQXqJK8dU6YfgoXD9f2KvQC9eD39Bgrgr7qUZMkLLpGGwtkVBRiHr8rkakAzvCHY8fQJHshp7A8oP9wCv5H",
  "key7": "49DYCANNzV72oDwAEpsan3CgpzPAxufZafjfaEZkZrNCvM8MP67LAidwakhrk5hfiJ9hEGaFMZGjF9VJvMY7PzgW",
  "key8": "5A5pRyJYSAS8DXzX6BWuJrBUDXjvGN6gnc4FQVP21r8aTHM58s88REWikmotorqrCZC5sDaDiLTiwt17NhB5y68R",
  "key9": "37cu5KKMThbXV3Hc1QfUchfH7DYnkEMiFcWwSaBYrrxYqonwZkVMUx72d4drGFM36rdZmuvToTSfmJaXRkHZBo5d",
  "key10": "5fztNTvLiZgXK7khm5UXhLJkGTAaXyi5WRvq2TRoWwx99fsjGcEkFKtE9cLF8e2qgfXiYwZgqqbrcND3QWkoWumS",
  "key11": "2ovYcep2jmvLTu2Hain7rk7C5HZc9Lty31wEVN2K41VKBfzjnmX7nKdJ7wgXtmaZ3JeU6L1251ScUvF8X6kNS57",
  "key12": "Upw5XBPU4rM9iwCJwbcVZ6d4R6X1j2VKn8vukSMTffJs5C1FWdEAKCVDQWRpDufdvh78LkuLSENbJuSq1hF31sG",
  "key13": "2Ce3rS71oiC6ZCCh2rMohwZZfT9rwuFZKPodmExz6m2fEEDEbqVD1gda9v5xySy8yHz71ukswryQbJ4K7HZQ4JkP",
  "key14": "22yyGsGHtpeXLH7mkotWPbH4UattesgndQxC77nyxggH8wpYs8DZP5VbjKwaSJYNBwrjBwES9dgQcyKZ8ZUcwWsr",
  "key15": "5Hergba8jXGHuaxeY6UicR5xQzo4cZ2NruJbStTxGadkizTwCwc5GLrQCBJAc99iUqMDUquKnWQp1QDS7cn46Niq",
  "key16": "2BruDU3zwUvNCxUFmmQ49tt7WZPE8AUj6vvDt76UkWHxexPisXvexZBiK7pA2sVzEge6zayB9d1CtiG8em8UiSJb",
  "key17": "2rVC2Vcwrf9CDVgaWJxXgPAqPb947UxHLjF6y2B3mZo6syiYLDbwsYrBYQPK6mk27k9q1MuTaiQ4soAVg9atadr6",
  "key18": "3MHojQD22TgjiXHRnvozChLkEZN35qBChFpGSMvDcRMvFLV4ECMm3jdYAy4PhQvsGD9a1A8DVb7UJPEqfu3ZVxRt",
  "key19": "5T66PYjFzuMVf8nwbpJkL9jw66ZUGZSfkay5xekFziXL9jEw4fhqNRjJy5ot2G1tuLLyA9qNgMnhDuahkrwHLmMh",
  "key20": "5TV2E6DtrMFWNaFizu27QLvvTfTvEwVwzNa2xYT5mvohg3PLtRGhT3YBCuqVUwPrdSxeBhc8YMjmHPqZppLyU5xw",
  "key21": "3rixhpnneA368ohTjcWX64C1YvJrVguTpjD6ZScmAXxCEsZBpzEp22LzqfLVRKyrtPBjxUDpnPhYVY4PsnDn4VxY",
  "key22": "2ekgM8Y4YfKUYFm6XFLwwST5bMU38MTbsjpncPMiQ8gke994Wpwa4uUkB8RF7h9fEfDtPAxQZ9WsKAvQbMdKSXYs",
  "key23": "38yQmhDijD857p2L4rmfG8iDnEJUQMBcEpzzEF5iMKmPdkjD1JhvLuyZAgKjaZbTZerucV6Rv2sU2P3tXgfiZbTC",
  "key24": "4ktrYjzeoNT8r74xWNAYgLKyEdNXXfRoT6hmJMToLwVLsBsFXmoouasEz2wJLifDYWZp2tQMoK61p3mNxiK3gLrL",
  "key25": "5xQTQNW7gHmgVkVixw6tXj4VqAqm8VWbTom2W7N27ECbosXhWx3GY5TQG2TfQRKtLGhYwf1ict2vf5NgtXQS6RRf",
  "key26": "4R93Ztvkcryx16moRBMUzLAnPJpuy4evxMypV1k1J1oqcp5BvqGh45Ey8Y7TFxTMjYrbHwF91VMErQJTGbuecWir",
  "key27": "wLSh8byiaTaFwTfhgiuaXw7MEJsbfDBYTEgr92oZTV98jjwVzvjL5RmMEqqCDYnfFDGvTMhQLAkYWu4Y2bqyBMi",
  "key28": "3TQ8MRrWkivdk8Vem2p852UmDh3PV9ihDnFcwkXZPhrtMwvcKpYAGRd2Wkwmy62VLUxcw3cr9jkfrHywGSQ8FCy3",
  "key29": "3un1GpkrczZ9uqQJUS7VrHTMTQMUKfZMK7p9mb2iuMCZBtUQmSq4vgEMWK4Nq7oSCERSkJXUU363TXMMAnpjRBpr",
  "key30": "4dMJbArGS8WnYRNbyBeoz53apP5zJgnHsp5nBgE7FkpqAaBc3GGtZyw9cyTgZqePAgoq4R4to75LNMAonDowiV2M",
  "key31": "4XRJzRXdKXd9BBSwUowFPsmEcX2FVKPsgeCrodQVGxkjwrM89urEJSranP6HdFXHJyLtyvcbxjd3E4xn83MkfPZv",
  "key32": "5ZstQSGQP1qyQmtWVtjM5ZKUbegC9YLjbf8qvTronjicsjJpmxPnqr4xpaaQgJYiRgfPyeamRKbobvbwcm9A83nj",
  "key33": "5XHZgWBobJwYfTTMXSmzqBRq5d2Ffi4csoockvaj7ijiZXWKgKhKGVT11nJ8tSvjDXPt98aNCVyiGwSF2WhnLnaY",
  "key34": "XWeM1Vb2xadT3Vqz3ZiCpiysRLpeYFS6dgGHY7aAx5hzRkQWb8chARaV1JckXfBihBd1ZNFypW65u8GtHENUkY5",
  "key35": "48qvXu5Kq8fvQVxUQJXdWLFTDM1TFur3GkmQeJK18yvxGQpc85A4MnRPm8WjmSuLqVJ1D2sJh7mMdybpREgYGpFi",
  "key36": "58EBfr7iZe6K5cFFPvRuUQp8qyRLVCE9EXiHb8rraTWTAF2CojbAYviTb1YHnjrYBYMXRs1Jk6AW8D9dYLnxJYt3",
  "key37": "3hoJgfoEq3hRDSDuECyxKY3J1wAmoirWW1WZPufDiAKcAJC8Kjcfyt2SVuW8zx5cEz6fMDgG1TXX3eNH9GidzwsE",
  "key38": "2kqZxVG8EaQb7ue1LSLqfFBYeLaMWvcR4zKSaAztC4f7oeZ94CUc1SHxcra1BQZJBxLD55bkH7JWgtFpbnMEAc1S",
  "key39": "5wqaSbn9YhqLZ2dWe9T3WSRgitNrQTWa1gDkrvFc9ckrQLnPYbzQscgM358AXqKkpp6YR5z7woYNHJd7vgRUeWrh",
  "key40": "3JP7LMrzvxHRGhC2J3MvHqCKfU64hkTBsxE7gTt3aMYAEW8SDY6bH7swgw5zbq9ryPspd3txrMdZKoycW5ntH8i",
  "key41": "43XG6Mj9C4sBxrCHMFAdwDTGxUa7tnxvkA2EfKkj5SVLYgzGhSHM7jz6u3bkHTdqq4N76obYENg7aVLAcdxjRVek",
  "key42": "48pJbL1gqJ66Jh21jDE1Stqasz1htw2eZTUaMTYrFfZZgQCfKpE4JZQseLArZVFoscRZC3BMVkBtwz5Tf37L6AVg",
  "key43": "2KXaJZbqStCAW482E3CgHFLJwaLMrJS76UUpN9iuhwq14hzfQrUUd162YLSnthBQ5QXTEVdcNGiXzM5SKoG5kbYu"
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
