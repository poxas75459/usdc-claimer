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
    "fnoLRdEoUWhCvjM23bap67a6fBfGdJw3QAARQ9nWtjE2xGsv8feJtdazp81hopRmnhhfHqVsBddzEEKfbxZbDty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1RakuS21fkWStQS7kcoqD35n2S2ziU7hhTB8zaBojiJzFJgLpkJvwYcF3W1TjY8JMVDYoUsPEeiVKMSmEQawCK",
  "key1": "61K2o3e2aoP1yzJBZGA4GPNYHK7gBXdLa3B6jab6JwYwWVX1cSKkzgSqUkLyN7xWRpX9BTrkAfmZHTvUKR5MYanx",
  "key2": "4oMtvrBPxH4o4a2z4d7134NHcPWmuQum6qa9VWrSpUz1zcAUpqrWFb7asEm2NDDJSHoxxF6icPpc7AorDYB1aMk2",
  "key3": "2tJUbhpBDsWP1YWzGsMGMABSFzw89RnAS4tMsZGduRTGxhEL2AWp83gPf2sk25Rpj3D77J44ePUVWWJeHoB7qKiG",
  "key4": "4W5mdfiQ1pp2YzhmUPxfUCn7TaCfXZZ4jnW5H7NdpR2mKb4ZDz92YA5R78fGePNLU47pqSt6c6LkhSnBuYhKZzW9",
  "key5": "5F17jqsVfdBAhtPPQgUKXnuoNPD7N3TxuKo3gUiNa4TcEuSLbGtyEL2SyeiSzyjSJdBrp9ogjWChSpKbQ7ARpJ4X",
  "key6": "2obaZrm78niBoXQBpTg3myfLHdn5jDy6TQUdWzZNDohX8qZMvVnYtNd8Wu7napoF2j8oQWvHsxFjeKiq9FYUQUjs",
  "key7": "2CrtCS9uVKzBoa7HDCJscAsHT8ErfdS9bhWGvsF9KXWF28vGC1Ln2NGmXNGer6Y99VGLHJijdg36nXU9cacihzHf",
  "key8": "w8nCCLpW8csHV65ugF7E9gaW8VBLB5inJnD2ZzKSLL1JBW2wiuEsVC6R4pfvrVJ1QqM6ZVLFeCBfoCYkSXVHz61",
  "key9": "2hqVtu33kswYrFKvbEQmqfWY8ajwzR4U3t4yRWZAaJZ1wkFxoP269iRWcwDNSFPKp99wcu2mWyAVrEQ7gezYMTw7",
  "key10": "5cbBRCTaUuxzqy3xSvFqAedn8LbESXmfBWQVsAGn55fpZ66DyKK65vEXLpAhoxCKHAvZ5ZVngZERwRtRE52Gu37a",
  "key11": "3kAM26veTzxp17LgrpzfQvbAWvKAo1RSQoQuM74Qsin83bX5dLHKPqSWSB6VMSncX1WUyc2JFnogPtAxHYVYqY3Y",
  "key12": "3fZpHmzzVrGnoZdZF1zsWmwxJZBgfP2xUUtndTzNBtYoFM7334U5MZxSxpPNA2kNx5mHXUjaFoMUY9y1Xp7MtkpC",
  "key13": "PXEBaYR6TxNH5GoF7ANcXGnkCMrWAi9fnJvdyiKHzoqG9yoh5wWfthyewgjRQNfA4KCTML7ES7DERWYvC5xemaG",
  "key14": "5upgjs7uEkRi5gCHeE7iWqDUoL1e7yja6n35KtGneZfUf81D49KoZhR1J7hg7EkTdxLs8o9bGGi7d5uXwDnxoBBx",
  "key15": "4FVWjs9YQ4njiDUVsRm6SdNMhhahkFqWk9up1pBFefx4DSXrmjUjHnkeZaFqawezeawSpjL5bQKjofsMUhumk586",
  "key16": "nBCg7MSdMvBbfmmLjT6nMuW3CfGG7jGXhkeMqNRCv91hPT5qwvHGoTdKuydF4aWM3ETsBbSXGgx48dhsQCpKHcR",
  "key17": "4pcGzCKDhT2YZWDfKwdxpXct77xjSKPptk1BKGbqQnJZmQiWuKB5BqeurPUVngU9FaFm5r9nbGhWmv7CgZCRvsVn",
  "key18": "2s5GSpCnhaU4frqfySj7RVBuBH68no5ZkGFTvRF1xBtQ3dofbGGNNcCH27fPVjPMPAEziQ3hc9cGM9jK1xowoohm",
  "key19": "dLKU8LgtjuVh9NHhEtjrpRotT7VK22LPwJkDJURuDSpFpd7YeKDfofGd7VpzxZm1qN7bmibwHzM3GxiDZSCBJNY",
  "key20": "2L77N9HVdhZCzMWQ8VKrz1XhYvgGZT1ML3zqCyMCL85nkNSuASmgjd9yEA8qVKcbTGxMgKA28DrRzh35rBGBcUGp",
  "key21": "27WfU4y7wzj2jWAfJpvgPgWhhHx2cEG2WQBpc81unAYHz2rhMCZH8pQ3RK2jErD686Rsf6vvAf1y451UdSoPrzGz",
  "key22": "2wdqMxrEjctFjo2NhLK8nvqFKyzo39DYRDWFaeCmYT3SAbHwqDLXQV7KzwsFJ4FswdaNp9ejBkms68CtsMyy5aHs",
  "key23": "4ika4n66iou8pERfoKxSaHnTcp9tyf9GHxSdz3E4GuHAnufSyN9wUf6xPgF3LeHrjcxtGqrFwVSV8e3NSYpzVdbM",
  "key24": "tkiLqnPh49D55BMNd7hkiQdcpQm4ZWZ7gwh8ku5LNcBAMzYBFiSVRpud7s2fnstRQjW7wC1FCxzKE1nbvxiycBu",
  "key25": "3xoNPfQWXQ358ByLnwk2SeqqX4SMmAU36NpezgEHChF6jcU4WSgHa6vXsnpL2h99U9PHCA1mN2Bt3EaDCzmPisUz",
  "key26": "2ZtHZLwDsUjfSUyog3pYzAiNttTnkHF2vk5LrHeH1oa5JwReesFGbFzqXHZsP7mpoSFAfXKbPQSPkXv3zR12hZvE",
  "key27": "dqf9k3MaY2SwbBXYs8a9od7XUkAByjc1WpAftrsLQ8MfGCb82W25HpTBorCXFRzBVq6Q8ukYUcshnfNVV22obzd",
  "key28": "52SqLqV4rJ1k9BqLzsfRCKKwJAJzGeidnnKsvDHUAi82x53Bspb3qRV4VrR2GUxDHp97S4DKK9K7CCpkiR7KxxMm",
  "key29": "aTwy43hUhstRFTEVXcVrji8ybqhzHNk8KUyPot4JLVnExPoqYGALRkvVwAfkB6wxqrrL3DwcwRy3sHWKZLrX53H",
  "key30": "ETQMQBufWTkCz9oR6Djx3EdWehW8KqV2HQmBQJ72oe6WcLdVX5abi8XpTxhYbSJsvYLkg3DyHvhKCX3KmFbn85S",
  "key31": "4668NCEdPzcD1V2XpnQgPomB3iy84d6w2t1MNUdiqBZC3REfBaK8DzjqUt2uPjExFstynykfzatedWwpL7gv5hm6",
  "key32": "4cvEAi8NTnfnnjeaHwHb4VixK47zshVY2G1gp8C8cSb2WVGUBrH2arCW5eAU3Em1YrWAnJgdQeUz81qnL6JBMC67",
  "key33": "zpxJdwVdpoAZUshpmu6XgUELkp2cjC7vf1qCkUV3aV1R1ahs6RCN9AGkCQ18ahvsZ8bLNteGibf4FJ76bmGYeNV",
  "key34": "2fh1rqVsetqqYhANc9mbR4H3M55RmhyGtAUvPdPvyGxUP6SFLVtBuqv7zWvwpVzKHurdXtoZLuXuKNnxXARPSQ9L",
  "key35": "6VhDeJhupjGm3EAtr6AKzu6SCqQyQsykHvFe4Y875fHg5FDfUcKWWsprvr5ztKyKsYAoqh5Vg1RaC3JoffSgcoy",
  "key36": "A4pe51fd82F6Fx1frfexJUtpDoL1UnhohBfzT6cERPmiWWxhTckAykYprcAYGp725ZxSSrckhE5j6rFP4KSADqR",
  "key37": "krfexc8ft8hcGn7VTxSYT9Z8MH4GrqYGBCEDq4KGAqJBRzW5jn1kWPD51RdswoemWrMDJLB1HHvWcvN5i9xSyyf",
  "key38": "4CuGMZkdJTxdmEZ6YMRoQ4omjUV5Ucd5ZCkfmD3RpSru6dzmeiHQFoTcWrBtUhkT6kiJCNQ2KPUZMjWqgZiftKzU",
  "key39": "3mKfQwT4ajkr8vpdtpqxKSt6EMUaZAWXuwocP1QcqdKvsKWbHespEMsqGNxz8HpP1ihe7iwwa1gfqbD92KztWQGh",
  "key40": "2bC3ZWeCTu8PpPBLtxjiPThCaLPom1UXQffjQmuX55WZpNwvL2rg7qEwnnh68n1FhUMtfep4yApjC8UGiTUy24MS",
  "key41": "5Z61Va3RfphYYC4oYsJPsnhSYdsy3y5k178vvrAQoVZH7vqCHGrbVDbiYUEDMmm9S9saYwXqJeuqoiR7uw2hY8BZ",
  "key42": "LZft9CKTt3GUY8WVR2kKQgDyEuuuA9pqCR4AgDqy8VyzQMfthMCZbGC2BJ8xXUwy3349ty56TWQRqHY4QGyEx3f",
  "key43": "44JZVMeNmEkMN6GPUR8Vd1LMHNfBCbeVC2BY2XqpWfF4NxEGSbpaUSGgmr9YyWsyEk9p8ryCiKoNJFHuTK7SbYzY",
  "key44": "KQEdBxj81wbrZ8EW6DXJHD9A6wqnDCRKPmoXEb7vvzS9BGKVgdhPtBfsX12iy2YJ5SejUUpEyfQLCsg6aQjrcdH",
  "key45": "4AkqnBahuiJBeyiipuej3MiuKaWuYScC2MLAjwT2VUx7DGrcLhrFKWhqJLg8acAUn4zRfe2RQERJfyDmQatMLssC",
  "key46": "3jvDpcCZw8KbRE4wCZD5dB4vEUYLg8bRsqT59UhdbPaAcGun5e8YEigcFy3ZzA9G4nPYDmiyAdMYKZ2Q5L3jWcUK",
  "key47": "4eeT3AGqRHD2xCj18Eu77LAkatUQD2GqdAe6eNKBBQpnBd5upyNfBFvXTkTQRZvCfhNHvnJiwyvysAQ6MJhMx5PX",
  "key48": "25U6SNRDC7S9LUaGfiWey3JJFWedqzVwTtpgk4ZdbMsyiMhhWRhGkTmSzPrUHHum5HkyAXuFufp15Hj2Smb3Vxmd",
  "key49": "5v2TwBKBcmH229phKdM64VT5bPHWbu9RVKo3uEowXUeP1nMTpm2gBBYs6wHN1AQGj2KAyuTgvpAaJBWDEQW1yXw2"
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
