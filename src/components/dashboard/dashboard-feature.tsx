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
    "5Yt8PGnMaxBkX2XtsNg38KSBE6TbCG4uexkDkNptxVvNGQgfbucWMWy6fvYWEnEEYAhzCDATj9psMd3ty2UYex5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KpSwBDTpgVDTFFz24iXbvXxFbbmKMhxH9GQZ4DUxsbAWhpaR37FSmFDbUpPPcKUvSHxGmM8ZYmqoEJ5NvnQdPE",
  "key1": "528gkQpRYbwRDJeRj5m44sgseDgjd2iSspU3UvdqKXUwcicdzp7K7Wz4hDvSUPtzLq9mwG8baFESqXqWy5FJWpgd",
  "key2": "3hCEaWAgRzkuwmkrX2a8CsiGqsUnEqKeNvV2tQJ4Tx2dXdMYD3T5YiqaKsH1XFCPurmUKn9KUzexf6VeoC4qWPGj",
  "key3": "2vFUvzUUMC2tcV24ZFdydjwqmm8mgEZy4e976NHC6PQBUSkKpA63k6b3DucoY9Fg4BBD8KQhkkkNBeNWeE9Yxi5v",
  "key4": "4kdtnemwhQKJc9A9xxWwRWwcBjFAqDB1QzSULggsW2faHYexnF7NQ9Y7BUjrxsQ1ZXv2aSuNML5jLSvkn23EWvaR",
  "key5": "5ZhGKZ1FrMUYad33mKRkuVJWW2ziteKSt2GMtFc9P7sbWRaVTpfFVGmifRSX4PaabceXQKvg823Z32hgkKyxAKLF",
  "key6": "2YCvxXfutjxgGAE9bpiHGE51ms2pX7EFNRYjjr5rKQRuoYuftVW4Q6FxSUKunAWXCvhHGpyFP8Gav3TyQViLGYHi",
  "key7": "3y4xA8jT39yVS45xfrotpGQ5yFyJUwvzr6e1AbXQwVbFbrebYpLxDtbdyXf9yqDVm9BUxNFdSMNfAru382mcZ8pV",
  "key8": "5QQ6Lw2i9v147iQa2xpbBR62nUX6LV6Fq9M4sgaAgnPwY7pZ1evAw8YrPtQLHHDukfSkH8PkCY5g2qbBQUXaq2zC",
  "key9": "5m6Q5H76geKwS6mgJ7Me6EiYcpx2TyuxnJ5vkm7BNyGjRj7cTHGnEGbeEx7avJ6Xpbmm9TYWWgP544QAyEhDeges",
  "key10": "zw5iDacuJAsCXsC2n8RNXkY2kA9L8cjV4gWvZEVaCbKb5UcEm7MUoLvcpiWFq2ikFkVHiGQH6i2dk84RCqckaRe",
  "key11": "Zd6L1oNpT8eDzLAVC8nSq9z4XjtpDUpz7ACm3cjBp3hALBh1H3oCh5RpL882mcwEJoWoaivasXo2QdSRKTjwLbV",
  "key12": "3i6uAbeFjgvkbwE8gnkrPQZdAzhMA5SptVw1r2dcBtFedgnYtAZuHULZUq5zrBYn9ruxHQ2aQ3kSHvohQ8qsh6Bq",
  "key13": "29e8WtMutomsMrYA9veRMCGCehB6m18oNX7y3wFPyQCNZuwzBeyV4jGs32ryw9dvNZUVYE7ouYAZ7H5yAXdYUkCh",
  "key14": "yU4i1T45rJcPcZ4uPzmwDZtDa62YjgDLgb2g8Q92g2SEvyMBajvch96qAF3wbosQMTuW3cZLVzWh4VwYvbXTAbb",
  "key15": "32wL6qepdoonur1BwE7iDfeFzeJVR52RrT3kdg51ChnvfDJyE6VvENsPsXVgLRihLzTFJ7YNqfTjzhG2tG9KjAti",
  "key16": "2zRUCRktzVkEyJE3DsSJvxuScprhS6mSpCYqGvrLGV7Tr49X6pCcH4rB66RNqNR3YiDGTyUH4LFEkuyw7Q4RYE62",
  "key17": "3XvzHEqACorRDrFtaSkpeHRJqjVW7RH2W8egDFom4uMRYwXpF75st81XgeU2Lhsjq7XsCMoxbBJ6H9W6a6keYuZC",
  "key18": "4Vy4DVpwjshZzEhP1Fx2K2JdyWdpxJiLyjxTZZBk7KtkuUXbjtsTHuaKGUWyydSAiKsbWSWwCWj6mwkrHY2ov1kb",
  "key19": "YFMreJCVvoLUzumHgXbXj2Jeaw2NmXJo1EZ9D72jg57tjd8VKdqN8RebojjVxSXbkjQo6C4j88igJubLHtVCjus",
  "key20": "4SgDzitMpN7iNZMPz3ZZr8H8tu8KD6kF4bMN1XeTc9np2HB6esFzUKr5xABEdGqs3zM5ewufRxCJPMShKjr7yUhb",
  "key21": "2gCCAaBcm1wjNd4B4Zoz2UbeH7XsiWN9R6yYBjVr8A8v4sZSsaeDcmWDpSPQFXvHL6wdKvLRoeAU7ZrYDHBbJq3B",
  "key22": "42ig6haL6vJrBdUvfMPdZDxNnSgCNXH71p8jLjgJ7RTUmymiUKEK8Apmb4BW4gusGMfHWkkX9VyZiMz4vbwcC8dJ",
  "key23": "2VJsK1y8q2kyLEpy873GJT6MK4VHamAawNo4Pr6zCcy1492ArxwD1x7FbfQx62qXzLPsTbueKTUKnB19tCvrVU37",
  "key24": "51nX2De1UQkZoCRtwpVhL2AMtNGgFN7T6yTBgTFNPVqr479VkaDxCZQVWuKmnV6DzLkDA8FQvMv75v8N7RfWpGc4",
  "key25": "28DQHUgS8sTkkf5UKSxvY8SkqocnzW8qmsxEF2oNuDYTVf4F4MbxGZbjfiymo6c7MhzogbSzL6UYMkiMUK2zzKny",
  "key26": "24UcteWyQRuU43EwqtLMpBjMzj7f4mxicipJfLqwqgHGT6gdQLTzSkX4X9QMQYBcYBZmUr2xR7jccSVx8NPCmTez",
  "key27": "43383B63GLBeqksLGBWdknD4MzNjm4tPYTBF2uLiXyWpSNenuZwTaU34tAmr7SPtYmNGgBdxkfuzyY23sPArffM7",
  "key28": "L7behA7rMHLPgFVtqWxui2B4E3t8b7zwFo9AaUBf56ScU7hUwoL4sgyUkFMgZMsxj9wyCzws6P7VjUjdRauQPuV",
  "key29": "4e5SGDNPmncrMDwN6JG1sEdsrL2fh2CtEiK5QdCRZKMZZB2askQjqmMaPy51oZSpzszkhp3Z38W5FMRhYiseZuZU",
  "key30": "5AyRPSkUj8ZBPoAWqN7Nfy1UnVqWs3ZzKskHWqKUid3b3QTGevUriskVdvZzww6dvPz8gbMm7ip3JmkPVwTStkH7",
  "key31": "4VsRR7dsyrEHgvirnRbEUYisdgjCa6mW8vgRR2xpxEN2udTngBPqfyWnZQAnmiDx4FdgZDbpfSy8cyya41y8F7Cr",
  "key32": "2t6GtBjwnfKuC3H4jKxCrzLdozqkXxxsQU2kgGz3zrEyW8d7EGxMtNGdsr9irwfBZRSf9Dqj65RnvatPAHkpnSsR",
  "key33": "29H1KqKeebxQ4FpCWRsY1y8PoMwNNh8wDyaWRAb7zvGojLS8aMFdshj5BsuTBjPjxJTfsQZo7ej3D5NNG8kM1vdo",
  "key34": "22di9tFrXr3KdCxYPYy6fpNj3nS557SD4Zga6s6B4g1oYwqie5Pssc97825dsnFztHrxG4G19AycgueAUpBNEFqk",
  "key35": "4zE3vZSvduoBMhDjgyxopjCA34ChhPFN6aPzCgbf9Q5AWRTeCcReKBu1ty1bckAeDjZAMPDrMGgU1WcExfzPjBAd",
  "key36": "5WQd94GsCy839xZrCJQkMitNyCjU588X58xWtSay88qp2nz87dGqAE5zV3dBj8yXj1SLDWgoqroykboCNtHBedrn"
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
