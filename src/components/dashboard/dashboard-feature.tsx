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
    "4g9AaCMmcTnBi8wRWoX2w5Cb9V11sKzH2GKqHbesLLhB7gdbdtnWejgfynYxBFNCw66x4EAA4EeP39y3pogpWBwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbodqGcDL3FyLZ7A3BVRQNRWPcoqtvttkLMHWVER1gWN8ToPmXEagRmaXKAyG467i4fYTDqFXNsAX6qGpt3siVC",
  "key1": "3c5UKNQTptzjqujsJNk3izc1HWXC12JDforGBQNxA2WbvJCkFq2oSYJs3JG2niSPS5GW5bEB2eaa9axt5QU5yCDi",
  "key2": "5sRfDUgCywPUpiQBviPyQhz4w1GNAphvoCzmMcbHbBnNx8LbFNMa2AcYEcuyp1MgqDkG1cf2owN4V3HPRhK2MGCH",
  "key3": "3rT15owhMdw3ozFekLUknNHyNrfEZQaUvqaTJd6DkDRFuPH4gKaP6FuCbvm1bFG8GXC4pUWpVQgEhEUYwX7m8ZL4",
  "key4": "3i3vmTKJw6P3zSAekZu7uBPB1WviQrP4XA4ryd2RvV89jtufUnFiw9syrmWWebD3ULsDD2L3Qnx58b7VkXFKsuTe",
  "key5": "2aJeqPwg5D527wmkv5Uc8FZbnCyxSjUdHjtV1pPMtEWNb5FnK4qzHrdSXuPZZueRkSKUZGo4s43uoNGTu9q9GW3g",
  "key6": "4Xvbdt3sBTd1SYUhFfNZitx4LQgUJWUMveQsFy8H5xteWkQ7Tcg9JWWC1LwKtqkMrb6aEFbvWokfy6nLjNJRRmbJ",
  "key7": "5y1eajA6x3yHjgwDiw4ohQeK97n6MriUwvw18t7EuuUpik6NWGCkPRBgf5HrmVzXUo7PTtyQEBADzihiyWxewbN9",
  "key8": "4SSWqPzoMTdZuAwLjCFKdt5BsWXjuyYiWHRA4M48Q7uCConYJFtrTYwvrpo3UpCZWYCLUGc5HvxHTNhxzD5WGRAB",
  "key9": "2zSoNf2z9m3oXqVFYittHboL2oZFHtMWV17wQHAB2YgZf3JuznnPmyvsbBPda1KLUNha9WybjNM4ipABufv2oAAt",
  "key10": "4owHHQhdox4qcecUquL3BEfE9vKXJbYjxv58wxVE9eWztdKibjsPy1nsXtYptgZNzXcNdvUy8XvnkPJUGtgLjLUW",
  "key11": "34JcQCHP4jxZvoJYAQb5ZYsXg3A6tG49SUP2uxioLUXZdbk81HAnRU2z7F26AVCU2v7vaUT3yzQJ75QpbqXY67Tf",
  "key12": "4KG59f518ymoiSxmuxo1qo2LdG87u5ap7EEEnNaioYdvqwKyBNgWsuR67k8rjwah8bktd2wTtoBZ1L9WPMQ7sjAk",
  "key13": "iosUHwf5rgSf4EXiLrpsXgKXvx6kCz6nYb1vF5m73ZpDSzVaU3b7KqfbQg3FVRnDNZSwsS3WeNVDAuy4wJ8D9y8",
  "key14": "66E91mXWDWVsCsTvcFkZ5tCD6Vbu1oMXjRTu8dQMWufQAfaf6zoifgr2XAkUJziWGMjWJ7PS2tUaJYMeNubMcv5p",
  "key15": "4VRdWeEgXvt1a9jT4PmekVuecFfBGFB4HqWt78ZDKbL4fk5hp8scCC37gi9Y27aJuAHm7J4HXgwbV9FkyHedH6po",
  "key16": "5bJhFLfJgoeDscxCGiYFWji9RTFft66xSVWykxvfcgAHgiMqQ13GaubztMKaXV9u6gH6uZw3WFheoiwKW7Uur8nS",
  "key17": "5FSuiGdrVsUwWHbVEoNxpAsMzupvReqoieSLTDgWfyTHLExC8PdTU9NuUAxABj6K1tdNWEHvvnrCXyL3mgG9faS8",
  "key18": "52V6rrPAftcGeWsB2qUkCWgq5zvMLLpWfY1zCB5KTNak9KdEjWJJu5RG5LzPbqWEJfzLahuY3vvkqEiie4meD4jb",
  "key19": "5yoGaYVi4w1JASSbBLvEDEmUeYSai7D7ie8EYHbZMuyHErTD5mAFMkBf7nxPS2peUwDYkh4R4a6u18Fr5MA2mwcV",
  "key20": "pNuVmKpakc1bbPu2mR1r94bdZ1ueEBZK61P12AiyNtPmspq5h292iypJsq6wDoSVJppBNv6itMprTsinhd2sjGv",
  "key21": "5wCqgw6uhPNtet9RjpSF4yhaeGSGDNE5ku3CNY5JtUvno7tcRstW89Jznybrr5doeg2QK8SfegLEzk9VAP1zLou9",
  "key22": "2zrVp4RB1PiZKcRkhbvv7jfqVrH69XHkEAHVestAcrkMoB232Pin7ZsByCo8zS9CpcpH28vzWrEkotZDXhRSrkMq",
  "key23": "TT569g2vpy9DkJrcRJ7mqWowMHzMQqXNrAiXhKrCMnwAABKrx66CnWCVBgGmPNTPhDTRGTe1rwdfGTvnrB5gNTE",
  "key24": "39pKbWbC5uYxiWL32h6kR15jfgtbNayAVFqC8TDiaaxwh6qJswhPof3AgU1nkoW8jJvyvFj3ybMj984FCUuQKVSj",
  "key25": "s1kmcbMpJtkiPv8p4NFoEDXxvcRwaa8Hjayc2D3C2irHZvENnN2PoiSkZRQeGC3N8Sqa8Vvopx6am7Enf6VSpWG",
  "key26": "hNPAKJZc4833X3GXQx7zSW7rxNdgN2VjQ3tiGPuW5an3ZLfYRGu9bSJSZVKGMuqwcF46giLHv5uSZxqyGYGznH1",
  "key27": "RzJVMBAQM3JC4vUy632hmkRZf6GzYWNWAj6uh5Lfnwd89SfZB1T7iKRGR4dpgWk2ZQTX3TR7hygwFb47SPamwvi",
  "key28": "3Q3QsP2yWH25upDZgiW1HkxJQPgyUzRgoHNoUsRLUeADS9tU5UGUbL7fGgH4FhHgPs4uDvhxMCsiW6BiDGBW695e",
  "key29": "2D5nr4rN4Hi4w3fsHirVUs5edq9HAwr9Pi3ks9Cu8Ewgk5QQeUtmVpqFwKanu4NynBBejyq5uGMNHmca7x98q1zj",
  "key30": "2wiHi2dott2iP7daHGNbhJWfcWfcuGGSFCrcQVuWTDRNUja15TAkJN8xunZUym685PNGZb9FrMimvNAKLX6h1dCh",
  "key31": "3boJc3zQzR618Sd1UG8SYZfybpc3b6KSDxL68zJAnbnWxEdnUHjHWPNk1njgfRvEHDavtxWo59uEnqt1kukV9kwh",
  "key32": "5bYFhvFHdNmmWfRmiDyjS2VWB1Z5h2mr1it4ZoJsq4dyDefAi7obQVUkHFJNyWkE569ATinMQFsnrkqck3faMfzr",
  "key33": "4ucSFkFjsdAPia3GBy8WELdQF75rfpyUyoA4XCQeH5TBB8HNeZAWz98RGyKi6qexkgWEyYt1LHqcMutRZkZYwrxg",
  "key34": "3fS3xkRmgYzrqhmcZ5LYVJAbkpXqT6CmQrB5fTwCS37uLxyiCPCXvJAZqqNU8eAkix1Pkuv31Bs8xSZbJrQ8SUC7",
  "key35": "4W5qECYWuN8YR1v3WCtoBkgLNvTKuPMCVUrPqBtqgi9Xzygexm3uyjUsu6A3VyEvgKQjqmL2GGUhBGLdWSYTHFVT",
  "key36": "4qsh6cJrEf88DnKaGtkdNFrtRgMpJMLwbVt77tUgfmTfF7SaaVSx3GTva6WG1qeKsU2y5CzCV34CYjTLju8Fqqsq",
  "key37": "5hzWUWx6Mdf3sJZB9HQJ6wregBEPeX7ekb5hu9EGsrGm6XikytenEKnDKtQVbeyNZSmzYXa1pdhSGyLC3WBSrPLo",
  "key38": "2aVzPku3nX4LgT4yszftuj7Co3hrLX9HfVsnW2Jm1pyAmCpnvYMpdErMTPRVgB1QSJx4WnSE4gHo8pRee4SNBeGR",
  "key39": "4j8QyjSrWtyW3oRuL2tm6ob39C84sqCWwJfHA8wc74jEGQ12SQJAvdmeoHoep4iSGxnQnm6UGu7rbEZginPxqbam",
  "key40": "3RvRM1Ku3VWcX4qF5AGZgtQawjunsFsApA3ad33HH5bzVToXz4CXuuzEGReU9qWAyEuusgp77JwuJ8uhvsnCGEvq",
  "key41": "4sqgqRfKoBLk5vYUi6dWP4kyv7B9eYGBGSVsJe4vMBEGymCtC13asP7bHdpGPNjiDv2sCqUEEmBY5Zm9d6JB1shV",
  "key42": "NnrcJ31Z5JtVvRjyuDhSMBRmWaT6fs12VsdVBtiHr8WLEeZRaathqdD6YYBD7qBPatYbtmCi4kqWjE27Yjp2bHW"
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
