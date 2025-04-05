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
    "2XRg8VMpREbhfghdCWgjgvJ8CZZk6onyEwLfpLRd7i77hZH98u4NjaEKYUjS6VoYxU3if1J3jLqETbfsEeZZkq3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvekG9UxiZTxYii34yuCNAgc1kB7WMeU93Wf5TX8bXmL8ZNbxb1Ka42wRtWbGEd5YNLhThPtqgv9vk9TdQgES2M",
  "key1": "5GuUc1KG9o386WPPbh8pzhpZzpQYrXPvZcU8esj4BP2kUfRa4n3b9tYUw4iNxruvaXtAkdfwCSaS9B7ZnfW6yv66",
  "key2": "13MWDvEpAbCY54gDGQBvAVNGtzQhXGyw9z6XvXrciHESRcYnUEESnMhGQVJyWqwUWLHC4miAjgR2aAnpnsPsBTW",
  "key3": "3G96UJVfRkdKPXCxNuAtewUgMVv6ZkYNj9d9fNnHcKcB43zP4qmJvgd5rV1Jjk6rtP3acRmRziCh5k51LgPiL5kq",
  "key4": "tUvbzNPkBW3zpZM6PJBi7jybLySpQwiXtuoRhmNC4jEPr2SYydv8J9DJpcsXJrwAauW9Ez7GHP3MQxPZZf1oRHU",
  "key5": "4jET84BdqENsGLmZmo4QeVMeavsmPaDLawAafMryvhK1VBCkJ3Q5qD2Ft7eoJMfjipcX67xRHnm6Uz8PQChW3Zew",
  "key6": "5UP47SFYc8bwXP3hC6nmZpyPryaxrhHo2SL2Kz9LvtoyNrbeZgb3SY88yrm2e8vKcw2D1ZiYuK7W5Pf9vMjJcC1d",
  "key7": "3bR7uEws4WhHFNpe4FjxaQUK743eYEkD5uNkRq23jiA2VfGxXYaTB3aGevnu3x6BnaWGwpEfJ2hcecHzBse4ug6o",
  "key8": "63H1EGbtEYGuAw6vmpt72u2arZDwS1PET3DQjhBGmccHYPbhaUpM8yKWoGU6yBkHezjZ2fgYS7eMf4Kqs2aoMjaV",
  "key9": "2QSD3Wtafd25jyKG8sBtGhYByfXdCm9uxMHQWmMjqPSLGuZnpVJmk4k9WgVqGtTa4n2GzP1dtKRKU3pXMAiajiA9",
  "key10": "2WRKQdpUV7vBBSpspEUKPm4xBDcsUzY4QqeE2h7XFqy6kfLGXMfMjLMuPBFVucy7miTt9bLoqdBtxKbKgF6YN9v",
  "key11": "5N512qNbzRg82kxsqtBjiYaDVRB4CzqU2vTjLLVzVsFU6cdR1mJ13kNKz39g4xi5uST5bDjmsBCpASuuTu5TmqPS",
  "key12": "2QBjh9kbnaEYMsPHpAoJyYWKdbmcinqf3Nec2TkJjbkWWgx6k2gBP2WLLDcYcw7uubVkaBBja28Ku1JNTkiBLZPV",
  "key13": "49XKAHrbBitWYRNdeC7XyT1uHwUorun6TDXFFLK8ZqLVG1W2i9y7awcmPAhmtatXUc3NBnZVBrZ8npwsiQ8BvA5N",
  "key14": "46KoWdaHGSPrbrj2idUvo4zpETeLusHCsFdgmW6Wy82eeiSJM49LoVVPV8JCWN1cpmRjpDyg17JQKz1matckSoEK",
  "key15": "4d8YVsHK7Q5PBQ1cUMErL8MtKrysMjmcAamJQe6P3DnZkKNVeED7odraSuEHHgXiU1ZRqvUAp4P2nFfzwyzeCk33",
  "key16": "XYBm6GFo4Ry5FSVQtGn9qynPYVpcQCANtGa7VxU37qi25LJ8VWLNL7s8jfCnPRoXKrhbF1C4U6zqPfKVFoKvZ9d",
  "key17": "2J39QngnN4euEdx5D4J4jn5pLGpxUfyB6FveyFw15Nxao3wEAwUgumL92RY5RVFXqG9SpLinEASaJoJPPta25phQ",
  "key18": "4Tms9xJAWshomjBccRAG91c4KKPzbMDQ6Aea5BnvZcaZUCtj4AiSuFXd1YK5HmtgyYwHQA4kbWG9jwsJoBPyhCrb",
  "key19": "3FtMhbFwZ5zrqBHAhXj85uENZvW4TAJvqGZxTZ8x1xYZA8AazhUWN9auCRh14UsTTchcWX5A482xTJxtA1SZdhMK",
  "key20": "3jVicGGJAD6Tuvy7qrE8jHQt2x3j58XvvjPaSD3K2PHokdMrZetNcQMrsYfjZWxJv2V9cPNhgW4UhKTURzbo1H8B",
  "key21": "4yBZ6bgV6JCH9qfWRzAMQwghpexyoqPtYnf89qdC6ciDd5EFCiwJWEMGxuxE8EhJhohNAUdtCvn3BVECA2YZQkD2",
  "key22": "2eqRBfX5jdU1aotNZKit3ZQGdfZxoCupcVPY6swNwT47CVzjQHBFoZe6fK4uQQ1GsTtgw1FNN8ZgvBwJhFM57oDL",
  "key23": "26tMwr3ZoDzkGeTjjxA8ZYaxUFRapkeKHT3VfDmB278BeLTWwM5ydfNWvoY2xWzNWBbKVoJECmjRdVhTYvTHLhcB",
  "key24": "3wn4mcqnAu23DJJJQRcMduY8dax9ES91EBAVyeukdUzLL3kT9mJKK2VxDQu8BVewvr2RKxQMMyVATXQ3jAM2VVYp",
  "key25": "y6DtFhbRhi7Hdm2vL4bjbNDMhf2cJa2XcyK7QYtAoJsST8BPhPgV4UZ1C8H3Nu8mahtnqtjwQtT5JgbhvpQjVS5",
  "key26": "2nTioBuW4oEgeKezE6t3rapmevYgXLWDTaVgAttw4oFv2S9Uz6LYhWbJ94WD7tuf11KJapjJjL9Niof9vWBDyyDy",
  "key27": "qzUK8gmq1swBggBoWvQgByxmn9JJfmu7NVGy5UyivjcEwUrfFjNExSh2PXY6auKEUr2eBdmsERNnz4mqSWMmSBC",
  "key28": "4FggAhHc9AMbsaLZmUbF8Zw1YueTsK4UCQrPWRCCUReTak1iaviqhcwAq9NjD8GWHkn6DUjuXFsxgBwDNvvZZWkV",
  "key29": "28UjDFyX4CUcYkG1H6hMt7xYUa5vpjNsCnKpLmUGoZbFE6rpgVFGAXZgN8ySXY4D2EzEtZd5E5bHeoyYe71jfyUV",
  "key30": "9DgVfSrxFUjPBV5f1Zm2vZP4oRuyCjZuXvVixCQAhyagVAM4DwF3Ww7sNnZH6CPrtvaUPon328DbnxQyPCHLabn",
  "key31": "2P23eMZ5R6tRKsvUaRN9mu4Khd5WeE3UsFED89TXkhshjFmmxFv9cvntLiikdAuRJYbr2XdAcmS72JJo4fzAQoGb",
  "key32": "379PEwKieMCjURgtjSMqBErAP6AKtDUi69VN2dTF9saxNPgasNM44ryqj7sSF2txfR1amkW4Uug43VkDNb1ue2LR",
  "key33": "424yJXoFweY89DR7iMVtnUYfKeum5Vt4wJbPMuDRUTh9WTAP3qnaNko7AKLtXrrq4CjhbrzmPZqDg3FkKFXFkuKX",
  "key34": "3YZbfjtak5y5S7SNTKohK2j8MCWQybHTizW44sxdwzitNP8nemdqQ5RasQAwUkdDqvMqxvvLJzrBsWYVAe85uEZ",
  "key35": "4Zwk3RjD3nJU734aG5FBx2SWTSepiE1EdPvnakb4oJPervuTAwyjzvsdE6KPCz2ktX5ZxHbkX5kw53wpDX9JjaU3",
  "key36": "2DAJb9GqmwSSi1dhLreZWYLystAm4qAEQTB3rgbSpmmWGPzCjSTGZpKcst5JyvRA7iUjzH466KNJibaXnKDDEJfn",
  "key37": "2cF3mN118k9qJ2QHPhLQeqRZxKVkwMLQUfAGdpCDKmp5rg3bsydoo1QWR9eSgAnrnWJUuAUfjTcp1oUyeHogzfmS",
  "key38": "57XiZmXED2aBJbTN36CnY8347AahPyKRZDJ92WdyxTjfz7ch6gy5g6DDgCcmY11368TQsCqsdFDK6fypnPiCpJE7",
  "key39": "23wMsfScunkRWRwiCVuh6aQqXEWjqWCxSonuJdY6hPfQT6ML5XJ6AZf1UbkcthdHcLqQaQTTTrrDJcrEJ4sTHoF3",
  "key40": "55NPRTGCpkSXcYH2t4qFh6TsqT2nPrVCooZfmyg9gDg4UypHituj9nqmMU12ZspGasWyaMc6DHQcrXkwNXHfpHJz",
  "key41": "2bekniRpypGMQdt6LLvQFMQAZ6avaCsiA8AnoDndKpcsisjKQLsEbxGgFBHMuSeKcGf8EWfPekDQuChTS3tv7QU3"
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
