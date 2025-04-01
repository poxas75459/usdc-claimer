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
    "5gWLUCpdgCMRB3BLtXZzj2yy3Kmn3HExHDtBp5PXfewa86Q95FbTM5NJ62Lj4K1MMNk8ZtsfFXuRsZmGwCexyLoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXbtZZ35mwRDB2fjNeUkQTnauxQRvfgrZ86MB94FBqDcnjSdmjkVkxbUeDCBHYQEPixcFVGGEPuBK8Tg5cgz6Zx",
  "key1": "63h92wjLTUEGBSg3yXHoGtaT4qrm8XC7rP12wVXasmGagzi3J1Ciyed4Veg5YsSY4nD8pzGRmuzPSEZsaCgwyDYS",
  "key2": "2Y8F3sS8N317haP5N1VD9Kb2yguk2iquvToNaqnA1Ws4igyNExoBYj5ogfHMTCCqvX82wZrsayDFh4WCwUDK9WCo",
  "key3": "2M1Ff5Q9KyuE1Asb6XSiQ7CznjySz5SpiZ1JY3TQ3wcbxrukCFafTsAZpoKuqZMS4kAo9wKorTrzDuKHFVsRPnaP",
  "key4": "3MTmmMkxPu6yokYPN2NSGdqHrDoqkZqEeqKvBW1AwjyPU1NtmreayYaz4bpcYSZ2tmYEC97Hggueaoh5n5QF7dwC",
  "key5": "5gc1FLg5iLQRMn6wBombrpURwyBuJXJ6zLnA3zrn7qmEvyY7FYEBBbsYVAVk6Uwi89mSy22jPa6QED7sDBfMVRec",
  "key6": "5SfjsMm43h8r49ZhV7W4ty7tBJmHMa4ffSZu7zvavVE7TmSRDWFcnQPp1CLrpGyNVQBmapqwcninHMgKgepadrTd",
  "key7": "2RSqhnHdnVMBMHieeTmQRvKAyBknYneCrSFz1uoy2HoYwi5BibaDTQzBFVW3biwF6eaaDWJMHjuaxiTkU2LPLLXY",
  "key8": "2Wrwev4T2UZXcBoeKpE7S5t4ReKaQDxXHhzHbYKgYLxZhEyDKcjZhpXwZPxW12b9VhgGKudRA2NGV2hdqbLa3D81",
  "key9": "E6vf2ks23QVhGpUu922BpeTrZxwtbvTwuedmo4RA7fAeEw3aazuq7z7KTRnNPygTiny4YKaw76ZLuVfvEWf17q8",
  "key10": "2Wa5rGsVysB71eLoxi3tLwpKJ8q5GqvAz2wtLjyHXGbvDC6qrvE34EfZKuY3TeiwTf7jthsA4xQnTt2F5NUgjU1V",
  "key11": "3wRfqiosSdb8kZX9NzdLDvzyChKa5ZghLvBBw25S4nkyLB1YyLHvLySsGnEeZb1Nrg9L1dvdDpLvATQpc6RtoAB5",
  "key12": "3tmH7SuyTHFAqKo5Y8eZ99MDo4ixb3cgm47zP8vcwJjsQTDgizx2zrxC1m42ZbiLMaKp7SUXZ7dt3cBZjbAgtD8w",
  "key13": "2VyQVaVWYdsRxmhpA7AEr9dBBcs1BAVUoLiMRjeTz7X1f9wmy5W3WTWtsBKr5fC2evuPnYVMiRadLm1Fbp8A5sum",
  "key14": "4S2m6YymhrMQQqbGMxaGNaS7ABrTRcC8nZK1RezGoBCnoiQKwa1wPVjeWmQrWs6iGK2gPWcEYDghri8UssVAptSL",
  "key15": "4GzTUjyTTpU1xoD1yEyQQrYWWgT5uGXer1HmaD1eLCx6S5b1PVbwNEpNGEsktK5hmuGshR6UR8AKsG5sq8SPpdU7",
  "key16": "3oJ5G5vJGcT1SioBg7WQ31VrrCAvtW2YXNpvNkJngDQQpBpYkZ6wYTBq7xLeKawjHEF3LCPU9KDRudU793DYPJ9j",
  "key17": "5DLSEhLnQWWeuuC2VGeLEVwYud33PHjS1DKYE5B5CT2LR2mXCe97CJqReRqhwHCdXF1azJgLu5LTLZhTnAoNeeUc",
  "key18": "3drPHSvxcvZi5v1Rfpi5TbhMRB9ZhQPrDiDTZ5HEiRcqWZsdBpiQJqsqZcca8SpHgegR4W85LrP3DPfq5hUGBSNu",
  "key19": "59nTnYRxqmCRQDyriUo6PahJYnbiDsVBB2xer4exEQ9QBF7GWWs7jkoXsweSqDrjKZj2Lk1fPpFWGBxXdPPiwgqM",
  "key20": "2AAWK39mbnmfL4eVBnq7GEADUGNsmo1o5wDKyvSbe8kGeJf2ECCAXEuCpxYFTqBDzABieds8PEDM5Nsbdrmd3Pr3",
  "key21": "3LyvrbWZzed11nH6LyPpvw3WTA63rhLxADfB2CuLafjYeZcanKzPjhLFt4H4kE9GQNBvb6MvYFJtUZi5b1UXycKH",
  "key22": "5Atdq3FAkm3kshsyQogf5w6MVgVw12PGon4rN1wvVM7k1uAYxe4fBvDKbae3dyqQv5xHg676SkWdZaShBBcJzxwq",
  "key23": "4mQnvJsuENnki3eU44D3ygBBXXusgDQCTdiE6HgjtshRj7nhN8urxPncSRnCd1bf48cve1YQqk5o3PEAQQ2YYjth",
  "key24": "uLgWVgcFsDsew7GtnrLKByU9Q6Nu92Mm9Coc5tn4MyxSHHPd2NWugWXJhM6d6goyCv7Une2pPin34ftsNRUj9CB",
  "key25": "4iRqHGsEBNSu1om7qT2mV9T4tHfdXudsdEDwk3mgzFfBL3SXSH8eJKMu1KG9LQc3CW7E3oynwdS3ScGRjgzSjvSw",
  "key26": "y7LJR7pJnFTENt9UJijk8TNNt1X1aue1qowv9TWWXRaDScCxPSLJXvzRzmM7fx1gQV2HFoD5vNSuWvHSJBTaneD",
  "key27": "2hALfZZhBFPdnwpTYXWrCnpBQikZCdCT5wD35rzsWqXFynnrL7xoFN6w3s5w14ANfbSYFjdcN1ZkpndL2r54TZ2r",
  "key28": "4BSYjk6gmiQ2jURFvXQPW6vzYqFABAfo5DGsXPDtHumaMnv23RvnsaUydGBmUDyaAPWt4NoJYAsL7T1DoR6wTdFJ",
  "key29": "2MRbYdjbLUfMrRqmAWXoz8GUipFP7L41JUChDi3foogYPFpmGbssm4gR5Hp7Dt7rW3HCutobzd9kMZyrP1JzD9Ww",
  "key30": "4xtsQHyitDyyAzbFBXPu5pGiXBae222Tf1itAaC8H4uxjqoYrQV4oF7nKb5uz8a6dQS4CrpggfTG82UfDUigZpa7",
  "key31": "5G3JaQ2vcim7ADcJJnQMT5wyvBVbo9KmWKbjFzMB4ZHTiQ3DKGq7VQ1gGFn6ukuJpBuuanZTyQgEJfEcctMYrhYi",
  "key32": "45MNiFjye8vXPMh7ZxsfhnVF5v2Hot9JMPShzSo9HWaupezritfNniXsX3CEzvsADYYXCBrgSpgqaxums6LUDpgb",
  "key33": "2SE4EmuVneGBXvhR4DTQNED7Wibd7obNQuY7D2D9MG2vLzaAAVjwNnSAkhKS5Bkt2kQg8EnMXz2hZiw2BQH8yBvC",
  "key34": "4g5L9ZsPLy8DoDzL6sp92xBL5JksKL4WzYG9M3LurfncKxcs6qiMzXrVfiqZGAY3DyneRi8H1K1EZB5g8pK8qGLY",
  "key35": "4x999cc88hfXrA1kxevBDb222GT1PyMnA3vxCnnWddAyV3rhcs6A77A1n5RHsFx5BRiFnxy6XcRMGGvfMPyvxHo6",
  "key36": "4LQP6iDNUiYwU5WHmUZcVwjceKNcchffw6hsDyhipBd2b6vXox4M4C7RKnHsUw3kDVA3QM2KcdmhgLmumn8tjhFo",
  "key37": "nbLZujUzfj6i9pGdJY7rzRMhskWpgut8dGAUJV84MFz9jSLLEKWG73Fik9nBembd2GtdTr262VoQNK5Z8JpWLBs",
  "key38": "2c2K9SWRAEPW84XeNBhjDhvWfxmyrZVn3NXTZ3Bf3EgX9bHihHjQrbLZf3daxK4jr5zyoUYrzrGVJk7rdGzf3rw7",
  "key39": "3BNryK2sM4BP92mSGUdKAcdvDQahmRdrQ2wGDCM2ALrFnsNVCsCjT8b3ntxESXxLJmBoMyHgRnaEC1QKdMPEAAsd"
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
