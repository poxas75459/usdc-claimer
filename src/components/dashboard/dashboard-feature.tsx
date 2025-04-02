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
    "63XuFUvaFc3BXoLMtcb2G11cxCbz5CtXtZfG7PMLJMT1bwYGU7a3sNvDsGnyS4Y7hqtfE6T4NpVRd8Mv1swNwDYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399WVSgwEajLSwcF8Brn9GHurVksJGb6W9cf8HRSV5otNkBW9jsUmskmkSPxYvYUCFEaZzcYeYzJrg2oCuAD2pKC",
  "key1": "3QEqUWgdRdxa7TQ5uDne95wyth9whCeqcHR67UHKdJDEje96A53TQpmdD6DBDhXbZ5U9L6WLoT9n7698tsaSvyYt",
  "key2": "5rKNPL4L4PAcBq2BHHUSNoD6woQ2jS4M6s2Nbrg2CK7FCUXK96F6H2fdJL63ZB5K8hUfWFF6xCDSm3oGa12k7YEc",
  "key3": "CArRNnRApVcmdNvsZ3N5BmdbHKZEb1QtEsrNaBn3nBooXw793JzeFJBBkUPFkGGUMhVk49jyDreen2jd2mHRXrS",
  "key4": "4eT7VDnJoxrciUtHCXxVZnNnqVKXFuKC2pSwt9vz6FdcYHEsJsmEzB6p6vHpVAvpPAz5ofD7cxCaGY54UuGdB1XQ",
  "key5": "3p7mNbeZNj3gkE4vPjYEWMrKHJYRJjkaZRjQGEW8LBV5tPR5Z2efNbJvWxKeXf4nY7mqjrS9Xxc16fgrrbgc9h8q",
  "key6": "5uAyeW17J723piusnyWwEFbZGx84Viou9N88vU7DM84WH7iBVkf1k3fA1aKXBxkCwYPY655VQAe8PjbwzMRkspFX",
  "key7": "3ZMvimuiKjYDKitj4UdEU6geS9LEHXNAVnsX2uTbLnK6W2FgithVGTTZFCU4DuaWGYTckBRJAiLR76KwftBZ8QfD",
  "key8": "4PF1fGSe38pSJQCsYQSNoVVWuHpuEmbgYqgBmeb4pkxPhq82Sv7gqvbWZczQHLJkjGHebSMDTzXWDecpvzoFk11R",
  "key9": "2DhicJ9y9FMc5ty32PeNSd95nSGtcpXZX7hoocZZheXW8PTirAVwuvGgCQosFnDgbA4Bv5JSzhXysm1intZQYHKi",
  "key10": "2FM6HqbSfHsYS71KTnbh76KAGVM4SFF38N3CSfLAXsKj6Cjf1rUMdXSwwL7iRHnTDdGdQ3qS4FS7AvuwVTCeTErP",
  "key11": "QhhRZfy1481947Sd5HkphaSPr2PNqYt6C6xVCgUC5e2nuSSNqtHj7BQrchAtBbActiqKLBhmEu8pV2eCQR9oRLn",
  "key12": "3bJXA5wq7caEXcQ3cCEPJh67KMX9uXsNgYedFamdfMqTG4KAZLmwKFYFCbWKCikE7CXmuQyQ5SeSiJUaGyLF7LoB",
  "key13": "5Dmx54yEMKEghpiWW85CUXVvhWp2tUhUtvytkeJruiQ4ruJZYt6E8nHhTVrXFxLyWp6f1XAupbEz7fd3bBZseyuX",
  "key14": "2YjSJfRpZZ8s8ehRrgao5N5dKHqevijG95pLxfNGAywzJvHxNpU8RqWwip3qpzmEktvd4VTqDtoCMCr7a9RxsoQ5",
  "key15": "55wX99M3sef5vzHgdMLHigaLPTs6XhJXfzHJAU9wKbeHKa8Kw1toeBG6tLaMuwHbwir8QpG5TvEreuXYRFE3Fr9H",
  "key16": "5VkPbGuS9b8Mr4cwB2fZb2Qq6YNCZuBxD3FX4TXxbtXe8cEaidg3XhWF47fqCMpMtwSHeD44ba9wxsNtaomTUavY",
  "key17": "4UmtTLfTCa58ET6UVMxAw8FjyE8ba4GmjburewzjZb3975k45eYgAKdPvZBZWgMmSnsGepSwzqMPs71Dh1nPWqTM",
  "key18": "3VgMxzyMoY6JqQH96S34XzhUJsHnZrQgwyDn1fhi5yB4WejR4Rf13sKJ7VV95k4SWL9iZrfTPjHK6iX7C4MBP98h",
  "key19": "3vcLefKaBHZFu18tzpR23mzAR9tgd3nJ44YKa39QpNdnTLNqNF85Mvno4qtLoSgPiDFeZXMQ3H3y13TTKMEnuWAJ",
  "key20": "65x8PMgL9tsVjPn7UeYaW4nD5EDveSt6bREUjxPbVUTtmr9a7YCaL3EzPCue7y2jwZkDf3SMVVridZF3jiDXGofm",
  "key21": "5XeRN2UVQr13gT8SgCm4sTJA2KoUGM2G8EhiS5tmnuvG67NuiwtiYzDYYzo4fzYNdtTtyuxPaQdgCdiQoNecGSwG",
  "key22": "23oiLZDdkykz5t85dF94dnMqtUUiVunCuYZfoVd8KVJUnJM8QurkFy4uhy6Vzpgppx9npMVAmdBL2z6kz5jAbYjS",
  "key23": "3jGHjJ2ZFV5xgZ3GDHnp1nYrqoKdVXQKBc6LY5yCA6cz4cMuX3LhANAzd4d68x1QgLtxU38gJRyr2Kf63r2TsGs9",
  "key24": "4QExMhekgkUVe4e5Brv7RCZa2ryjZpSfdF99eQdDT5H8WqfoUuEgaKxXVcou65gCqP5rSnpRWTVLMHWbmbwKbVha",
  "key25": "2ATrbPpj8RjZYqENKc1jPSdVwTqFSaq5LZqomGZKE897QyvYa5bS8mWSHoR5SBXJVWdQPiPnY1ECPKV1ogE5kBt2",
  "key26": "5n5JSeBo7rXRHPBAm1JKuNmyGvKxmQXagxb4y5rjHf6zyitvDbQLc6SuRdkhBRtaSYnxaHiawwKKrCyicreMseh1",
  "key27": "5yiPkKA4nYd9XGbWYaJSnE5pfdQJdb8TvpdH7i282whhdHEDqh7WfbSk8HyPGhoraUq7tumdkYybmJ8BJDEtehUg",
  "key28": "5QdkQDLB7T8M2ZwSr3YWTJs4Ev9BLpzNVFbaNwcBpEP2dFPbm8fWHUUSD5YALT4dkegvcZVZWnfVXfEXPbTy8LLc",
  "key29": "3Cb1KGa3PpSkDgJD3zdCuW1qvr2gQHa6GoD2MYoQcV3fTxXUXjrtg5gyMUHHhG4HQbm5XmdqqpQ8JoswwX2acWGm",
  "key30": "nxB6enhUE5p916A4cPUJHgcQmfqHCvFhEyQzugYoAPuLzZDaoBNEeZGYF368tUmMmLAD6R8pvLG5WyBU6kukxAa",
  "key31": "5418TFekk7QJf7dHeT4pToHWLR4Fsit9JXoNyaVkdRGYq7NjGyLcjkxA5EPLJnBuWxCEPCuusPHFUugQ3TbuyfS9",
  "key32": "3v1RTm73Udkb1JoWehAF4LcqJqDQmpP7wRDmwfBZzvU4BZoPBTrAAazhVWR6wkWzCkRLbHSSgP8n2zLrVREFFbdq",
  "key33": "51ugZyZwk9b37TNkQ9nJ9TeBYbz4rQ9Uk3x9ZxkNfg5ZXKMWbaEEkhj3FczzdmgpXNVfUEW7zQXCDroSEQDvvPvy",
  "key34": "4yvgkRuRkp5V3SBQuK6ZF7zxv2VHauSQ57WdwVVTUWJEMSpvZfHgmFCMxDYuRNFkWqGUuKh4m2m6vEw8ugg3FtVP",
  "key35": "4B9kDbrpRB16JSEym2tum9N4Bo5ZeLUwtZZnHAvgy4Ygij4aog9t2WVKxAUFemD8Kc9Ckcbyu4netSJPu9GxCR88",
  "key36": "imYW7EPyR6Wd9NQ4wk3ZJeE1Mv5YFzWpAXqrJVyDy2rRCkAqoAAwzioxiAcTEJQQHhvi2s4BbYPwsJT76eduEdH",
  "key37": "3FokuwhLLx2mD8ZAaTqMstA6yFMrqPQxwqjUWs2CQZGpQKsZwgA1SD5dEuTWPhV7hzLo8noSQRrdudiSHPQFRk3c",
  "key38": "3bqU17DvP6jMNaAty7jBP15SngG3Wa2FeUdC19CAGtVTU5rdDpFEyQvsjpkvE8DgqKZzeoESrRyuhFjkNj9NV3Ng",
  "key39": "5kdLs5wH1HWA9psQSGy5Bxxaw7cPRnJLPqU1NRfiN31XLRg5TMYLoW9tsQRUDg1JQbR9HpZ7XK7uZfVB3hTBNuh1",
  "key40": "4o7sX85H8QRmaxrBs3G6BXwwzn7eTWvc4qdNFXie8VANyHHamYndF6SY5dYgxTKG75ToAd739hH2mDQX6xyyFtPz",
  "key41": "3VT1kjpvLBDGeSTyPBaXaKwsf8FJVmgJy2DLB3tkfgnwTqTcfz2cBfjFRNginGWkVCJXdqYMc6dwNfZDqU4SUXS5",
  "key42": "22EzneZETfnQRRmF5wuRp4ey4USVPq1m9pPSXt9TnszZ4ZoFjzkekywwnzSQVYVReFP49nteQDNqUkfVVKCnuZ5d",
  "key43": "3weBTqBnn76zn9mAptadiGjcwLPnNnfWmLt6xEDLxZWoURX3j4Y5w4ibWiJuubu6tVexRZ9Ugk1DMtN45GmtNYjV",
  "key44": "4EGncX5wzswyrH9JuSovt1JNcpDnuiZUYhgWoKBm3WxSwpYZYukPS3Vjie9TnEgkEfGtmr3oywxmz3bP8qY5BHXN",
  "key45": "5d4ykzMmdiam424AA7eirfK4TgJhHGsZy7siMvMW9kYTvBo1TNL5qTFKQRqSfSrx3QU75ncroqGqutozWbcNDEBf",
  "key46": "3YmzGwYy7e31oo4h6tPz2ew6HDCwUMuRtNVumtrmUz7CFbqWxeUciE23zyTSESsHw7JMbCeUoSHBGbsVX9h3yjpe",
  "key47": "3VDBTZCc6gpGkR51CM6W79spsYQxsfmQb77L6WnYg32vyRR3gwjy6z2QyspCAhz9S3kW2juhgYFZZwpWUoZrFdq",
  "key48": "qv7vEvEwgPqYXMScZfhgxR8G8cU5RfkAAabyJqC9FNWKnf5Ge4zduZ21knLWYvR7oV7Fooebjm1Lm9m44VpB1MF",
  "key49": "4CdVKZGZaSpAwLZBaEaJtBprjzLzg8Ew5wSCgQDyEAQ6a2BXbbea7rBZEdXEUGzsrDUhvGDgovmPmEujcJnVksuv"
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
