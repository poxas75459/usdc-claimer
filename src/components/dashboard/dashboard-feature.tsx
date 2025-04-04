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
    "4hKGEW5DvcLpMYmjMMcQ8PcGeSBZ4K9dPhE4U6pZYgCtJsX5sk6Gx4yVSsfqBrvjmpSSCT3smdo4UidAvstRuSQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xiKf8KWdZXLyP4AMN7tJymB76xjv49NY6SXGBSqg14crJatiVfu4Uu2Ndh3Av9XJSm1gQDwfRmQkjNndtCwpvhn",
  "key1": "67my4arFiZBmN8wjnqfpbJqiJBBnTx78H9EeTFcR8Eki4tXL5gBUCkckdwHkieNgdmZwi5gFVnawQMkgFSgJnBHT",
  "key2": "PN8sdLXgr5KPws16QDeRz3935bjjVy1CFmiN96c2es315JZ9W6JZ2NfmayfDm26QCvgJqFmj2HTMXnYxdbVc7Ma",
  "key3": "afwfnFUYdHKwgdKy5NbT5axPCQddFTRRJW8qj188PCHWRMEQneYkRmxNkYRHjYmJomX3im4YqKMdY3iGNJPgoUF",
  "key4": "4m8izqUasUKG4iHDY9VRvsfK74NYj9fkiPkomJkGGupeSdPW1awdC3Yeag7J23mdTcfPkJg9V6QooGnV6oZ2d7Nq",
  "key5": "2UexJpChwvB96DLeVQJQtM4XanN1Z5dHioLhRLjFmYnNQqYWdjF4VLdpwFDJGgV8xFr9QuudRDMEiEfQqP1Vf3Kp",
  "key6": "4vN6XDMMnsNbEkzyB7tajC3tNVNbWQo3gbUnqEqDgXVx3WjLCj392DMC7LkBSiZijGRpaqa9u1V8ZwWWsjDh1yUK",
  "key7": "33uAYYf7U3yVWNHVikXwUEB7PxAP7GnTHnUF97H4bPLv8zC4HU1Yr1hifdjFBdzJTZNzcZt7k1xBX8TawxUij6Q4",
  "key8": "kgEgCSowi3qoFC14rMEbEpPGLJgPfoS23hSmoyjS1zy9g9B2BtBtsWDcFzcPwo93xpy9SJLWQHbmBwEqt5ZyqhJ",
  "key9": "3oAJEq3fdyGo7Vx1UDYRsvpH7QMq78UNpurzQwUP3CSyYGhcpGxQuirdvcfqMwws8sRzrAmcZfxaAArRQR3GUrGh",
  "key10": "3nCR78LG4R4z2ifMQNFCQJHqCKm6o24kpz2YGcsKhTgrs5gwnozBQdobVPms8F8cYu1qs8oqA6JNih2d7PYjoMew",
  "key11": "4aWxZqMbg66LYTsuqeWXs78ySpBSbuCgGCGWLXoFr31h57iXwVaPHk4Cu39AR5umMD9yN1qHF8HKS1GAMpopgX2q",
  "key12": "43kFimTiU3ftUr43xvtcMn9AFCxvEkZJDixFnk8fZ7QbNWzjj3aJMX8vHrV8CgiG852Ausy2ttP1BfRbfJZ9BLb7",
  "key13": "HZKo8bEsQqhkAkJkQHHjZdpikbMCWQeeziepWpSPnC1w9RxSPQKhSyAQiCwDDXnnxd4kbcrhnFhLHAS2wwTGkDw",
  "key14": "52rUDCxzvSuDcaTFcgVNN98q986AZNJYGVhon45yGTmA6agrdpG5gGFJGDG5zqEwPWZrvaQZYjMqcCSXPDP8HNYn",
  "key15": "kUsB7cnBV3fgfCXR1RGpdHgkBHaQwt5DK82ZUAwBASF5iNaRGvoFpSu1Q6WQmfCN5JMipXww6q76yYpc2yQhnqC",
  "key16": "3koBiYhAupea7i39cGgpo1uUcDeAZy9aggsh4kmiUwphdm12FVKyogJfTyDqJUJCRXXvDkFF1RkBnv77k745SJB5",
  "key17": "2KNSYVwcQxRq6dPaSq2ZQCHq96W8aoFv1esdT55HsKDnNRZuQov17xL4fYzCjcVLSZXHVTGh179eCv7AuGaxGwZd",
  "key18": "2EWSdrb564SdjbXxhiKFV4s9ZxkidT46XEnjeMUAh7xHP131XzMARuEcsdhCdEonc4d85jmavgs7CGAd2PgP1C4t",
  "key19": "2Src29kUAfLLSYfTL6eus5LMJ9xGzNx758JkdzYVLsUhDVEyLa2s2HLvqwB9qf8wsbAUcyP1khZgf7bvCAd3TD88",
  "key20": "3s2NxgwTgZmMzT799p4dMkbHAncL6MG8rBrNQzMc8ZpsPNtYVH4c14eXSPD5ZNzWNkPoVavufuurMY5HB8tSZbVV",
  "key21": "62mpHhPZ7i5C3kpEKJazFky1zxqEN7uuaikzJeZp7AzTEvdg1kBXGUiV7d1UYi2yjkqN4jr5BMFBBjYcTPXK8XNF",
  "key22": "3mapvceA17GUfE4qASXGXEeH3xN5jifD4ZSgfHC3cvACUoDyVoyAC1sfdYasrXuZ5Msx9Kjg6NXMdX2wJsXE3Prm",
  "key23": "3SnE15ALwG6Gu92v4B3Sd6c5XMMxHXggQDjRAS6zU55HVjmroVkVZ66p4t4yAAx9U4kKt36Ce8UXPQHMDotrBxp1",
  "key24": "3MyCkS9efJPVfDrkhpTWFjygq42BsEEvsWiHyf1VwfChm1JYCFLAZH5vEaJGKWuXM7sUroHkeV3a5AebBv3mXyU7",
  "key25": "3rRf74Nzubg4hJHZCStXqLvVtTyXCKqmZVXfdR9JegQCvkWqaxdBtLQYLpQLE5e3rsxHtWULgiYYGsaX8Rg5zHRg",
  "key26": "3cSHa9LrfYC9nkp6ZgA4aWaAVvNaRudtsXEzgLrcgYaB2hnBCje2eoyeEHysbwFT3G8YjwEEmDik1m4PX2zoj1Jt",
  "key27": "3NmYvGFRGNUxHpTV2T7ffvjKxHLNENKxygAj7PrwF5Nija6rajXkbUVG3zHcar7nfqbdLU7oAc8H7C4Ad9QC2KYd",
  "key28": "479FPC2UbHLwK5ahKRs5uyrFhkMyhD241mb71DveCmGGecwDcJoJRFpnHJZMfvjnyQS34iyn9AGto5uoQn5QGowH",
  "key29": "4o7tk4m59KEByerWJ4rmBLs2kmnZw1GfpqRj84NbGusq7Ru4gGeWdTVH1TJU9k1eTVvsa8Us4AgJ4UWxEBkubfDH",
  "key30": "3nuRe2tzhLqiRrGG2ZRoHkUyci1JNZbd3BwKcZjLAiqkNsQQNx3iDtmb4yfnWqJrxt9UKpzzoKSqC1hicByRonTe",
  "key31": "2p9p6dYYBigQ1RydFC76Dm42UK9Ln2XpB2uffwCeXhf2WtwzKtrDMx48SptMB22ivLeX2bDRD773zeBUuXSBv4f2",
  "key32": "3CL1gDyM7Vo8UC4R4hhMeDa7jYPs88YXwxQFha65rVKXBiSv3Nf59zrWFjsj1sn3vEpSSDRZZkQi7Ha7fTEctu7V",
  "key33": "3nDxTUuKALFNXNAGfJ9yEscJvLM5cC3Mzqd2NBwwv8yN3LMctxAJSsbnFQFhZTbQBzRW6xXhNkJY899FqZTcyHgK",
  "key34": "NcFD8rUsuEjTcrGX6U2faibAL75rBwVctph6pdw4CNFWygaoawH3wT2np8TSsi8FZCTuCDDzGqgakdrDHKBP4eR",
  "key35": "gCvBgPRppNMe6cGsXgaBCMh6BMGDm9Ug785mWPyppZbSiPoHWDvb6CjuhQgDic5CtgzMjckNfoqHbz2B4xSY9yX",
  "key36": "zH15WWLUM57sERvHKRLpeyNGqVTKm26ZDdr59RZG8knh3qys4SmWbab1DsaMM5A73vdyX2ha2t6gLGtTD8cD9T2",
  "key37": "2KnzsxMpNgurksypWCvdcoBZqBhVeXaNe7ykLgqCnWKGLf9cGVW8pHiYiCk5adaenHYABRR82nPT4opMa8zzgJXE",
  "key38": "3gm8khS77NpETNFCvH5FAkoudMHwFuu8diysJQn535ip8zC3xu3hLhCKYY3Njf8E1ZKZtZpyL9EoEhpEKFLsR6Bz",
  "key39": "3gt28ZimebN62RvzYEtMMKNPSYAJJQcdj6m1TAepi4oH9Ee7fu2YxLFDv7HeYkMkWhjUwHnmChZWABwXYubzXY3v",
  "key40": "4w28j7oY6sjqcS8hgBMHoqL5o4yCAR1DSnv4kfKwUJygk5DSPfLXPa7RZpzSoH7b9TxWM6eBvuo7zKn9fG7pR24B",
  "key41": "42hsNsQXVasdUrpihXXbs79Zosx3QR7jdUh3EdVh2mYCd526KedSddC8uBmvhDWUP46YNuf2a9G32326SvUiBGE9"
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
