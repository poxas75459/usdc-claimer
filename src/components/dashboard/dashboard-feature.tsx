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
    "23TEz3LppDCgPrWuyu27tPdffkeP3Q51GUDAxBWnZUpTT3Zte2k9rnj9d4wgnii7cN2zADwodVSVvuRgjFZrQgfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkmbFzid25PujdMaawa2wJX1RyuWEajzML7yxhLD4YcR92mtwhZfTZkH8LgUvPWuwkBUqqffEQHkJgbLk8aQQb5",
  "key1": "3nooCHbEUxAL6DxnmKEpN376W24vsVs8kVHVxtpKgTgD76iE1RoZFAk78WjotM35aT9h2tGHLgTMkgzstEWJVTZC",
  "key2": "36L17TCDPv1DmiCvGVyRH7gPWMg6n8JEns3QmEQ39cdRAEMGQqPPvAteeAEaVdQcckHq1FXv6o4ZETi8QihGqsXv",
  "key3": "4f2GTWbndbE8JPjeY5A5zmTq3As2DZMNscKRFf2DThzygQiwYmoxH66M8FuPedq9Z5bkCJo9CW83op4BpUpz112b",
  "key4": "3LZXXk614eVgqPuVoSGqCKq4nJXwLND5FGEheaZYB4ztZGqymPgTBDKgCQw8DSqWhXTW9kKHfKXS8qYNMHYPposW",
  "key5": "497AhzWeFBDu6WZ1vZqaoEufaXKYsYfpHaJjwYSDh2Aahu86HsPZtdXB78VLChT8tmxvpp6ZudaAcCV28zZYPFc8",
  "key6": "3w7MjPvwjSNLmagHc1h8EQW1JuvbrmfznSC48YzWHNMBWSRP114FKh2KMtediZM199ZxA44qQEQF23AcbDnMkVz",
  "key7": "51UUzMVrB1WfbD8Sp5mLtLQwLBG1nNWVSx7vFbfJW4WcYwpMrcJk3G3XQyPkc2RacaXbkQAdJboHZRGWxqtvkt6g",
  "key8": "5MHGp4Krvtvou3NkwPiszyyxjpdvhQVaTHqvyR7Dx6dQ7yKsQNn27tiqLZxHi9LWRtAceoFhsaKM9nCDaTqJLvS7",
  "key9": "2CyAfbnttMUo7sFwJjCQKg5MvN2j9xsszee2sRxrdKAB8RmTpJ3XxCf7WFjxtEytYgjEh8XYsrfHT1vUob8rGiZh",
  "key10": "3eyegfSvqMibX1KwEdQ948tZAxUZDcquhUXZ29oZdFLxtmgPhKcsoBEGgS55EW2pP3eYPGVUJ5UX2f8exadm22xN",
  "key11": "3yzXizAoqKvS5D91aFKN7cSPiMtH59vfqnntRq7uVWWdh21giuJVHuHkGK44WJgcDPdWrZyvbSZiQpu93DDwiZnE",
  "key12": "5XivD9DXMy21Jr7JhJha7FiVCaZvjPNSjnA3Sz78MPocNVmiazEMdBu3rPBFnrSeNJvou3mLcDHw8FR5HYkYX1UK",
  "key13": "3iv1TJvAv7twvyJk2DEFZWp9isL6sbqdoJJwSRxkhR8CVMsXZzQaZk5vPvyopEXXGuL1M2r9eTMHoJDcmJu4b2nL",
  "key14": "2wf8aGgX4hUfK6AwNi5meiN93CSSagcuKDzYdiv4VYECwycEcTF3m8JuCFc6UxKJSBd32idsPDm1idqDJ5fFf12R",
  "key15": "9nC966NwUy3TMARXLLpm5qMCmL8KAwfKdY3bHgXJnCi7G3WXeDKCsHP4e7TrvtJpeiQ2i6YopJFErL1rsEmACnC",
  "key16": "5EsmVq8yiobCp6VyiXuAYYymikhAkTurkYxp7ZY9FRAtWT6CTi57WyGy1MrCTwnxESLvX3ebTfMHoMoS9iBJbp5h",
  "key17": "3hE9WPkdEvaetgsK7xHtLyWCLb272169AaJEAJPaG4vC3feUCwRq3fRWsNCgXk1E3e7VmkX6fsSnmgwPtEMyjLH1",
  "key18": "47zrFZk4hY1QmmShi2iVev1AyUScyu4MJ4LAxtDWdYvXVJEaRqEAUizBQjBYRjHbH3nzoHhPDNGA6XWyDjddSH3k",
  "key19": "5mS71pE89f8C3cdyvRh5GwUSpBHywPue8Y9YXeL2XBWTHpszzFY6PaiQCfFXXEkB52Sgkt2U52LadzfhrjvPWUYp",
  "key20": "4D7y6rRnXZ6mrtBYbAvaKxMSr8t2paJ4kB9wCaVJsL7VGhygCFP5rtvYGEoDM5LkfMaYtV4YvtqEtePfdqjAVrGA",
  "key21": "nvs7vBF7hXmkMqhfCJR92FAx2fAXjGudpzkCqD7FKcYhoWGyadwcCobCD2xHXFP8tVwKWEHWxwAV2ViQtwF1x7U",
  "key22": "8g6weFaxSoefv1kxfshpsVAF6AHFxqRKquHkZeD2JaDrvzHnxM2kbW2VJaX4hHHrnVmQtXnai1CS76XQg36NrnR",
  "key23": "238RZDaPdhVtsdJctjDpLc1sJJE2qdjSdkXWSbjuDsQKWBr5F47PEYAbPHbEKEkfvCCMg2Jzu2KTt1uZ69iQqrbo",
  "key24": "QsKMDUbDrRKkUmicX3MBE95vJmnSPRQCvbHE9szFSVH7nLRXmjxB54tBZxgWawmpPGRYNyhoCnQ89kvBUuvyLqv",
  "key25": "3QnJN5FjEHeXJdJH8cdwfjzxdzj41RU4auHw3V8camTxra9i3Cy7bkGSRcQ1yshSUZYJUuecfAtQgVixD9eNNFWA",
  "key26": "2mouxWpEcPeGFzWtKFQjxsm1gLithd8gQvQx9PucqZMdzaGvJvLgm7CSnuwsMFi4Xyb57s3DYPuyJuMr3V58RLqF",
  "key27": "2LfNGALuTuGdeRPaXhdQWocoLjk2H8FZzcr4esZ7ZwztbBFoE6Uyzmas1nLjeuo7vYyiuCiXb6Mx7KbuuenfS8Hw",
  "key28": "5ioworhaw2bBNFTvbTRWArRcVPqKfArZ98aJG3aXVGwFBiQhtKpaKrKC2thrqofsWi1jxvBqZXQhH3knvMBK6zhe",
  "key29": "4bCsUxup9KV6815ttYf5ngs2UJXDaNV7rHFYxpVypyoKLWLDJuy1pBQci1BzghTZLkHrz6cov6LnoktGpHvef2bD",
  "key30": "6359V4vy8qqhtFCmCE9ZN5qsx8qNJwSuMYGoFQWQRq6tdPGXd9nm79JcqokQC3yPDir47rqDNt8m87QLJ33hzf6c",
  "key31": "3eWux6y56jnJ4WGccSp7zCETT6KHHRxzKCWEjEuvi4Nyk4raa7R8QwaxzVPmGSrrDGBgoZpRN3tb7dCo2Wx1gcKh",
  "key32": "4ovRjDZ7QvxSxPxwLmMuRhZzBCAw7DWVwDuHFxQHj3jGEKyijMF7bAkhABmumwWu6KqHxM5Me5HTw4e3kT8QfCcw",
  "key33": "4rBnQpkEkyQajNMLzsrXzJoBNVWmkV451EgczbsHhMidkYDEYzFA7zeTVgtnESHmBMM5Uyjbq4MJLykuMsAx46MH",
  "key34": "4UtriuuCfEvrEch3PNKdU1LvJ8XwVo4D4uPUySPGCHbvQbtBd41v14my1HsBMQDVNPKXomYMEkVweZcdFDLwqj3C",
  "key35": "5eNyaamuqHNHR2FD9K1HaM6opWnwT95VtzLFH9weQZqgEuxgucchfZSt4BPHMvrXN9CoPFsFvSBa4yBnNoPdv4Tf",
  "key36": "54iSe4ho865Avh7nm4MP7TudqJ6QAgbXWzf5gijkA1CAegpptYSrcAm4xywHsJ6yfuHH3s6xxM5MWHZvqhyyBmt",
  "key37": "5295HkPbYmYrUZDmmeD6HN6CQ1k8nznRudaMR3EfCP4JBxWRtU5Xs5ZQVKh7kmHnJvpWXDJ8hCYFjFVEwWwak53R",
  "key38": "3KSnZMJmAQ5dchvNXVnHoEbKwHCAfnW1Eh3dTTuEKG8QbZdmSwgPVQtP7PcsWa7vL4fqtRFFzDKwKmS7412vGsEc",
  "key39": "5RVbyDjYLeAe6RVHCYcej6J2QEzKFe6BnWSGqWL8BL47kNHEcFJaKN4ki6sXxit7UtMBmR3YzUXQVqiVtPipSGf6",
  "key40": "4swJnzTqxm3ic1AxvDVgKEC7YDgFamF5CbPvELGR1nixdu5fCuAYHbauFCUmSLYxLiCTFQYNetfG5qtNWe4tWEWu",
  "key41": "2PoLQbBby2bkqCpXzBQwpPguvwR552PBDXzMpwKoBB8Arwe8q2wkG5uV5hnkyQetrtv3fJyUwDDeLG1y1Lz27bFP",
  "key42": "3tPTS89A8LCcz7MwdnvWERKPUQDVbWgxfHakijDcfLhXNHk64NxGAAGopuh3LZ9MZrxPb47kRhaJQxkyXuaMv3aX",
  "key43": "4h92wajzAW5rgBZRdDNBrGtkG9r3iDaLCXbQ8me3kTJY9tXFz5CtehQmMEXRUmbubrWWiPDPVEnPJYaurn98VbaG",
  "key44": "4F9Y3c3gqzerb4PNwh9S2jAjHKQPsiZWvZeGCVJfP8gDoREwkTUtAjoasXBGhFuyCKfRc4Wd1ircTD3eaMVv2JvE",
  "key45": "5Dpn4LjpeXnC4oMDMvP47cSc31hq5eU1w2E312MGCUkYAWH9oFaPB5CQVmYsatqVNWoqyuCNbyWTLokUr2PzJ8Ji",
  "key46": "oYDHvppMwYAQnh9JkvYqN95sMoEEat5SBiebswYAixPtjuF3VYYBDSkACgjMtmvtvpKTFpR8fVkA7VkQjaYafHs",
  "key47": "5QdkfGFaPhT25VyLZKG6gwqUax3mTYJEfkePWqXvVS2nhGjkrSPZnmDJCPZqLgqJnv6JdZHgfcKBSUYUwmQzn5sz",
  "key48": "4asYq8oTfagMUDJ3oJjc8TacwFxkVbQTxBRQfGaYkhiNCuopYfktzFVyZz1Ar1pt6iPjiXkb7Ni3V3TmeK6UnvRe",
  "key49": "2wkDEDj2B9KqjKnh3NfbzHdZyRWpceSuPbeMWzxxdDNRJkx1MTyoVbGswtrKz3Mwas8rg8sMShdnuQ9WKupA42sF"
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
