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
    "5Tw2j8PRvtRfciLftBAP1GPyV1AhDsT4AVppTqmhLDh6tsxxdMqsqXyjmwNu4gEepzMy8yRyXQUkmiU1NuGfg5bM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGRiGyJzULBnqpbY7wedB7yXWkbEtY6amne5AFTsz6AtYuyLKjoXf9tKiXL8Hq3t4zXtJjq9WgksAQ7JertQeBC",
  "key1": "3kDPjmti3o9VHHQP2V96ZBKfQfpXdM3PUQey9jym6thRa1uRzncsphYPwuv2eFwkYHLU8qZyjuUHLQgdmgSFD7iD",
  "key2": "4Z8kTgt8v1DDEe2HjxzpNSC8YtR7x32Mdkja3i1LcbK9qwAg5UCFz7t6JcbiTaqF7jUxnGJDPVdJ38DPwZrjFKrL",
  "key3": "5YCCMC4cANNL6qkbjvDWEETuaPLBMTKhjvb4sEki8Dt3WKthDuke2g9PoE72pMMSpPTq2Q8SDhH9WRc7hU4Nfjt7",
  "key4": "49KzuKuUmxVNYiMURHCizsTQALxgbcNADHFH6KfWS53mQDam5hZhP9a8wNzCP8FgsbrfuiScNGNUMfBHAJ65q3gi",
  "key5": "3NWUyjpPmqYiauw2yjgwMKFAjXwSuXZHm6tRKnDuhC17Lkxq8oLLuFYoMHYRixjK9QALUbyzuuNAHNreZaD9WhPb",
  "key6": "2B5Xso2ueQJEhqqdrWriouixW655iQTVVKbUiuDN5eYKEXj5xpegJui8eix5M4Q31wqD7c6K8C8YPYfZmJXfhJm1",
  "key7": "2sBrskXq9PiyfwF6Kur3Xy6oCAJKUB5kuM2R9dwbHbqFA3LxnXGnxZxVWZwwxr23bLVYY4MLawkeVozNrP8mJ3r6",
  "key8": "53XLRfUfXhBi2SWyYR2cUwKhLnDiMRWVYXw6FNh7omKxGTXHyLzxbppjkAneAY67Fyveuu5Gz6DAgHXkYXiXigDb",
  "key9": "4fW9rvbFYmK4FkrKansta3skD4rLZjtjxUALDRNvpbVcfZLNsxbnKAnFcpAvomjyXwe4d8jcC2TJXJPznyo2pGdj",
  "key10": "UwRGgrKGjCd7nYkgH2ZfbtCJ69y6kHHnUtVuxH6Y8mtum8jNMuTB9Yn3YJubdLy1Zv7Mq6j3maJ5TyQCt2ocMMu",
  "key11": "3BFKDkTR9yAa2gSTe7yEWxm8VFcCFGQvLzTeUPqkHJDkAx9h3YFywgkszUJ5k7L1JLBjbhH8ZFr9S9k1PfhpPhjC",
  "key12": "2cpZiQtG5g36c99ixpEuy7n87vX9ZFfvbQNRhwief4yYpq5UvCswgHq8y9A1qC3g8CCK7n6cbaUY5dujjHqvapik",
  "key13": "21W6hgC7vacGWTmWdJTL7dfC3qZDQfp7rJaAitUyN5E6JUWxhTfhAkeJuaYPPw3UAX3HcwKpFNQpJL6CstK4C54T",
  "key14": "GLYCKs7EZkx5PYU53MXV93yXFxsVGWdpYqftNeMNuvPrX7BgWr2s4qxnUUc1KauUDY2Xqyac9c5t7UcrNDMevdv",
  "key15": "2nrvs9wAnoAvL7MPcuRCPPQJs7ooijX37ZUbPC8THfRr5ncoxza8P458z1cnaC51XwPWrciZemK3miYtt9WvV3EH",
  "key16": "54a6m6mxUJ2shKjBV8piMAcUjDnGQuEgAV8jNDwWtgQttrboizrryHY5ovNrz4yMoCcLpakCK1SeCKbxStVtJEya",
  "key17": "BjFW7UqtHSXL7JDhm5zTbbpVvRWZTpFYPxm1gHNm5SgNM3wxfSvP2gF8RCwwgP6FszCXXG6yTo174C8SnnC2TbY",
  "key18": "3hfoRt2U3dzuA6MWkRUqe8Vw2eYSnFaiZB5ws9GaAqxM7vJNCWrxCtjoxTcTH2nhnZ9fqsPLC1TjSK4nkn7qNuPX",
  "key19": "3aXfXTh7K9Jzqt5CRnesztvpjMRn94PN8mTgjAD8L99kduozaAVV8UL2XWzVrGKp7EbJDu4vBP6EzNFCGDEGxCmF",
  "key20": "5ZP3Yikv4JERG5vbLs6ceirvzxtD4tD855jTrLM6B88KNsFrbW3WN33HKCLdHz7uBWat66uPCFuNNqYzZmLKshGj",
  "key21": "5k9AJeGWy3vV5s23v6F3CfWFaVs7cft8tHJnMRNy3Nu5Q87oL5jGiHjt22nyM6mZy2JoH4iCsgzjZ9QLQpj3NdjP",
  "key22": "4WCLzeYfZ7mqtw5qAuAQKUkMaFUMnkxL11CjqUFFS8beff364H4Fo8ZrM2PELSoMdoZjaXKGGsqU4g1rxzeoB3wU",
  "key23": "WrjdpqdfcHBcmwiS5GDEevhKB5bxWu5V3vsztbEW6Hu9gYinVLam2PQCxx55bgXUsx2mcVNhRqQqVdgH9T84sx2",
  "key24": "3a7RrUGmC38TWuxd1Yj8TgVxCtEsM4kiyg2cByiqiLFq8Ehd9cho5unHGMoBcfWAcVevkVLisQN2bKcWbF3NrABi",
  "key25": "5TrPuLLmHpumvKov4ZRNEVLY8gU1fSYuDK7nxB2EN1b6T6KJ1ZyP7Si1MBYXgEB6jDsJEU7Pfhdrfb4sTPUD4aDQ",
  "key26": "3NWTNcmeumdSfPbZr6Bs3mXkAk3UQw8enx7eeVsdfcnDJJXNXAdDrkJgXxrf4RMM6AZdcYi1XtdPmLSZL2FUS5nd",
  "key27": "4FKZyf6VqVgyYSGoeTavkr8WeusxMzR3cb8mhtHJm63S7qrd4Z9JhxNy2T7r2xFUDfB1VbarcbduUE3g1ZNDGB8E",
  "key28": "5Ri9fdkuuAsGTx4ZbLR8FQUJgwEJpq7nxBgHVhyUuhdxy8Qv11sje9tRsCLwYYrdczEgfweE8gPKConPvCxZVQQ7",
  "key29": "4TWQgeMxUVmEtXue7BEd3ARGPACNmRdLxtbRwcuZPXnyGYqQ7uvJrpMBuj2bBAVk5o4q8wTQQhH4AC3aUxq4ekyW",
  "key30": "48MeQFPC6G39gamURwvSirQg9R6BJcPoeNbRYSnjyrAVSQEJchJdUfSvHc2YP72zcP6VXXkXaixpfZSTnrD9p159",
  "key31": "2EVjCXYFaYnsyPknTxngU9jZK4jkzAZetxR1etYYBUBhay2CDPqo2qmky6UpUzz6d42m7QNdh2rbpwfEuDVjBcM4",
  "key32": "5KCu7ysXKisEL2YeVQw8YSNw5Qt7DgTHTaSi3LrgtefRvSo6EBiFD1mMiBDXLoqQeRYijxmd1YMsGsjK8zTnf9i5",
  "key33": "CmdMZh5TzZqWuyYKgrWG2fSyAAKzZJ1dLKpCKdcVMG35wBV6BUMToXfgrpTuNPN9xPEEDKoq5W6kRhB2REKJ8e1",
  "key34": "5Zgh9mu48qKnyc91Grw8Mk3BVKrVA2RAbW23rzMMVcpypgPrp3ctK5nFrjXuvWUhkrwqHu2aUSCzmeY226NvXm8A",
  "key35": "3sosrTKu5o4ZgPFwEqVyiY7hmf7hAeEZVHqKnnmCZgCoaNKANFbUatxTeJvyMF6xisYEtxRRVvy8UbtopF8tjk7k",
  "key36": "4Zv1S1zYis2EEbyAChe1huUdVVk42V8dCiWR9VvJKdJcqXzZAxAkB1sQRf9gcKdj3DFcJLoA2Tn2zeE3XdNVEYru",
  "key37": "2V1HDSpHp1UUf6qpGifmQx7Ho5YqjkHCNpxbrFpyzxACQhxgosJ7LD6MQcfGN7Ga4NRYTqePRDtg5LyASNgLu4QS"
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
