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
    "3dUQhboQ2kSLUSDAd6HwgsgFPSUQNP8Ua6wN9reWi6ASnEaiPUGx1yVKMmTwfnAibx9FgtBuVPAByPP1WduhhndH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhBkAyxTSwZ3oCpSaZt2go23LRvT6h9dUNJs5yioH2eoWithnCR1vzFH3HaftsMULidANYNJ7V7tZPPWjHBg6M7",
  "key1": "UmX3BHCeWuKiZefApSCY7hxM1tb9Cm1saEmk3tFkUUQ64ncjV8aiAcHxF3AhLpou9yct5rFMds6xhbCBmytG8Xp",
  "key2": "3u9XDAMbA1n29v3oNJeqqTVvVjEVXp9wmwLChDk2VgAwCqovfoerjGrZcywJCMexfQHtvw9sqXrNe4wcEuYsVN3m",
  "key3": "4Dvz3JPhfXvYxJLr9YnJ7ZijBdsCBmAfwr1djFCvtKyQNDzRtui7S93GyRV68WmpHXTJdxxRoCSAxSDPFtRYq3MQ",
  "key4": "3YEcBfvkqC9Dkip32d683ZetHbhxb1hDu2cydT7ZrrsbfwyYiDNtjWniWPGSakYEgADpSCWekYcg7Qfiggt6zQXb",
  "key5": "52t8G88Lqy7SkMnK5HMwmJhbiTJkkgmVjsEpYmYJVELUXZXDaMjTrWeinhNXEQmgVj6HVrdTDsadCHHTZWTD8FXR",
  "key6": "3HTUcwUJe6ahJ2X2vc2Nnmae1yQXwi2w9ucdp1v7JWUTqgjGwz6tPLgscHcoBUp9CJoCuQtbg891BaQ1MDGCzZMy",
  "key7": "3CXDr6Aq7XnJS2daoTX5KDLMcRdXE6pUhC74mDn83AcdgCU7FeRHUNaAB9XKtVFtN2S8HFRw9CTU54KH3EJLmd4L",
  "key8": "2SfRoWGYgyP6VZCzvEDBvPwh5sxjRDkm3x4sjG8iMi4b3DQbPKTs4y3nHgcwgEzW38qjU7RzGi7Uc2vYWnTF9Hak",
  "key9": "3k1YSy1RmHtAATzq4xtCzZhzeTu5QcPNH9FyRjqiwdSK6fHPvLjXPgJaE7m25A4NwFuyoWdhbjszqP825haH6oms",
  "key10": "3jGZvLP4rCC6WYNxDSMy5ukA8sbKoHjVSmSNfdRLSbxHzQ6JxvR931ofFcRdEXXeHsxJHTCwJbrGmDVZqQinAAMp",
  "key11": "4fnvVyLXHFHcpMQhWG3aRBzXzCzqe3N24SJ86AsMi7Aymc6HF6uEwqVeqDJqYrSo2GV9hu2FG5n4aZ3hiLbsYJCU",
  "key12": "2sYt1nuCMS2k9FzP5ZYYLCh1yZh9VA744te1egRjAY94i4ufS5mHMHZYuzwepVuib6S83SL8MgxSoEqvPm5Xc9p4",
  "key13": "5k3k5DjFAVzZPSY6CCwNcXVxcSHFNHbot9qMfZ6xUJwQ7XNQfExNzLcNthtsCLLw8WvHuNhBzmX2AJgsme2vs2jW",
  "key14": "2YbTbTgxmckYzpuv3rspqkvyHKwqV3y57PkKxznq1eGf7PQc4MFKWyvxBW7swFniuLBWghYckMECzBTxMguNtS2F",
  "key15": "Z2RvUyjf5kmkYpgoieXdghHakBSmgvdtZEaq4MXw8Cy2puwk6jeguP2nYYC7HYzpKct3wTahhhtHG6ejoP8wb1j",
  "key16": "4s7jvBHHmDNzp2Un6MwQcZPq6r5Mi5GxutVNEMouDotPS8U8eSCHnCKWxz2HV4DCRAc3ruyBF1ayQPTVRgqESrht",
  "key17": "2wknjutsjTW4QV7VsXpabG5CgiXtduR71n3WUfFh2oF2Ubrb31J14CvHtK1gThWeXHb8g3M7vo3yHWe1eQyCysQh",
  "key18": "2PUb17aJ3f4BSq4mDo2TgzFRF1kTSDY2YwjY77LTnd3vLcx8hujHV6kYKoNoTLGDSf7TFS39XaVzxihbCPRd3QiD",
  "key19": "4eK3DVg7vzzP8B57aB9hHtf3TNFiHRKqdhtxMnoPAu4BEPjbSH32e17vf2yfs9BEYiiau3UBiKJbyy2rgyfPZtjU",
  "key20": "4TMau2EWU65eHkwKfUXhCynZAnf4iK5nRro26PyGGSJThrVxauSUgAmKuwqf62yAacheCuDCcp4gKedrauFQwoGY",
  "key21": "QWBtD1MbrzxozZr9Au691egUdZnwNp14kJv78UQx8qmwVFqkUR4fvEZGYgJb2kgB2QcVdsxeZ59cAqNYgc19xBt",
  "key22": "439Urqb8ifoWuQ9ectYVdmB4CX9oJHgATrmGtZ7T3zTiTvcwYFvKbPDX5upMgWmxu9ksyh9JqRFJbtKJcdabS6nT",
  "key23": "5BJptw8xmgG7QEAyfabicD8ySXg8bhU6Ani452Xf2KsL9wzf5fJYGe9bUq9NzQ4cW2zLr42b9tviVtwWXjExL1xc",
  "key24": "2usyT2Q2Fmhw2dp9LAYZxzHr1hnbqMF5NhFio5Eg8dmWJm4XWL5gWfzKntt1urToCEF3NgL1cBceAz54dFBWpqES",
  "key25": "4q4jZ3y5crGCAdXtfKMp7JiEz2akUCTnbiU7y3pUZ4e4A3KmcjGhenqcMhmp2kJ2AgSSZGtZHksgrf3dDH46J2Nd",
  "key26": "5vYsQTxBwaRyuqWoXJNTsjyxC8vn7NawedADb66TQDsNUxKbpbdQrbncGq4UpZPj7Vkj6AizgMpoEAPiQcBAhfRw",
  "key27": "4i5z4gmZZ2CMZSyb4C2TLkieVuthsAaeTNxLWmckVtoJ4NNwtdFBopsUU1SKaZgwkxJUdgnTNM9zuJySAcgcPpWG",
  "key28": "3csQ5WdfYVmKvE19wXy5XZDVF12YGQmkPTgAocDsmCbHS5LurWotuQUWVzE2YgmX1bxKSfVEVysTXrhWJw17tcCu",
  "key29": "473zLVLLHeh4GuR5wKiB3DdXdwsBnZgVgu3dHxEe7MT8p376KraAjKLRCSKhfd4aSbxfLndvYvDKUHPsbXmqryFt",
  "key30": "3CmMggHK39Cd3LiPRUELL51keFjuWXskzmK87DSVTd2hVeg4Vmf63py3Y3SRy8k7GLS6GFykKoP6acGyWzD7EyNW",
  "key31": "3kbwyYuoVuNkbTx7m5PUCogYxjs5wkKvkPFZqRwQcucPbNYa9BNhwnh5muuxmQXuRKRTVkWkxR8xJqdU8K49bUxM",
  "key32": "LZrbausdnPr7qohgiUFTRqzsCt3s3UrXNCqkVixw5qwF87byUyBpm68HXoqhcZjzY653L1j37Nahhnkjj5pWZ2s",
  "key33": "4Vd3YHVqHaNqDy9eWW4ySDVQQVeZxqAgLyoRTUtuda4WTHGUAeG72DTMXarC9Ei6Axqkz6pA7YZ9JFPNoLi8Hd6U",
  "key34": "2obj7qTHWX4dYsoec5dVLEr8Gexf4Nqfz7SqfDjrasmAzh89s3XymVwrLt8v58xrYg5xQxWnyt5V6fJBCQsZhBR2",
  "key35": "6239Vz5k2J3FnFXYCR1gVrH8JP2kePi8Yjm18zM85yuipVvzy79N6KtRgTS2XbAgCqieDpj7Me56cXJQcS9Lrg55",
  "key36": "2MgGuMVYTMxmvE165RjWoYMHtcRoksdxKTpt8wGkMC5Ge1zLVdrPMdPE57RBouPfajK2528u5USarjMUFdstt5sv",
  "key37": "2eS9xEM2PVVrmzKr9MsS8Z2UQCivE62BiKtmqbwTogvTfR8FrNrbCYdNB7J3kEzAkagE2w547RkCGDDdrprkWegA",
  "key38": "4pNLpKHKZzYkGkZB6G8QPnz8okqaWmxx7RAU2BKpTNadPYAyMkr6hsdP6Kf8K4QUhMFNrnvPqT6hntCVhsBhkZUj",
  "key39": "2Cw7EbiWGJAnhwHbCvN8a8d6qXkYmUzW8cHFBFMKnYnXSUetu4owMX3EyjCpsYZhTA6wWUPDdMyJL1Qhiw54suzm",
  "key40": "1zWcH1oaXbEWgqhuHE5JRC3RurPPC1oWkyp25ta1HaWde965gxjh6SkR5WucSCsZvEMrtNX9p5pLJbGLvVLk6Vw",
  "key41": "5gk7eGpdpozHXwtmM4Mg1KmUiSvzYLjuBFi335a2anp3WYspbZhJa4FiiGvhePFpqRAgSSAEJXS2KPE3taX94hNa"
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
