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
    "4yiFgzj8aFR2WeJVVVGJ1cWUsb9SXb2aqk767huXMFGx1ged3MSkmmgQfyyo957HcRXwFJtdDoGEzp3g4amye9GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593Hd9DAbZNQ1taoUb8kd57mjsP6BJFkYWUTaSGwh5FGpmWMUx7dhkkk6J6jwYrCvfFks3AMNFesLdcCVcTb9F1v",
  "key1": "fsAwKGjfAFiQRViDGyPzwET83NAZsTfyTxfyhG9S5CqXW8e7wBNhTFa9imEvC3Jy912NwjQh28wf9L5h2LzLdpS",
  "key2": "E1tbJxu5p4b89GNgyz4RGZVtjFdoFQtSHUpv6a5R7MgGf8HxRBjK1buVRQgnSiGh235eSNr2N71Eusj25KrHFAe",
  "key3": "5D4YWgNKKDHjaH432ZbuDVT6qUwoGzRTB72Rpj5QUnLTvVJQTTkhJ76H4Q4kKGVZKMQ7WJM1Tz6rASaxzCPuKRRZ",
  "key4": "57x5BbaBti9WgXj11PRhHe9zH2cBbt6HUW3vgghAofByZH7CSwwyUboskv6CY4jscnW6936pLbprYbjjmPpTJKg5",
  "key5": "2o5abt5wM7fBzFYcVrsb6NXqfDzMTUREgCmyPGcZ6GDGCvmw4gazQA4JzZRGhSGUpMNJnefcZsDLhy7ZZgeokKn2",
  "key6": "GHv5Xyp131kLoGhU267Lyg9WnSU7bnPGXnQHzbq86zaSz7vXwoso8DpdhCopamGzutfpcDsHHGLMY8Mxb6FUPNy",
  "key7": "4pv4my5wEtpD6tb4dgdngGAgrNM66e68FGHGQAoE9bvFXtoBdYCd3ufozm35xpBbQLUumwbkvVcG6RCpn2fshVna",
  "key8": "5WchZ3naq2HvX8BzjuXPjJ8xneZ9x4CsgUJJJtii5tHgHMmNrUWMiyRDsYjvbAuL1TZmhran2s8jRCRVbajPbP6W",
  "key9": "3kRgCmgiup6VjwPGoK84pYJFeZu4h9TGrSLHdqB99YefmJERTcpj5h4XMFza9vXqSgjP4iTNdeqBYAQt1fLKz4wr",
  "key10": "2iJQXpQ8NwttrpuAHweQrdyML4wiajJq2o5fEVWPMroY15xAdHqqzdYPW1ZrRyfdf4xGp8iZyk5QaGqtYYGHyd2B",
  "key11": "4ks3beWECUmxCCSCjxULECdAm4L6w5FZQUmTxmgh12JJvCdZ5eUVxJgLRn7skyxx1YQTwpKpNctyM631eaaWorn8",
  "key12": "2TPXmWamVdYCkFjYeWXP87dGDZ9BQZQQbbRZEwJqU5GX5CGEbrqGcGJ5couh6reFpagyETMLAUQhyVkpnEpVfoD6",
  "key13": "5FQVSBTEoErqTRZzcva6SMC6N4YSyq9ZussfdNKLoU2SS9jEnsNdM4NTNCqWE8g71yWATmmdgRjrCwtbMsdjim6j",
  "key14": "2CfAKY9SMGM89CHaYmR3Qvv8sEtZvs3yFKgRNTiwXYqc76peWu39sFHYbpSfvmmVMMjj1fmTJs1GirAAxFM7NVyH",
  "key15": "5k2x4XmL11dLjpf5G4WRCFM4WrCxNxBLke6oyzud8JQNhEvtw7WbAauaz5xdpjD3AaW8xVnzKQHnxJqngKV2Wc57",
  "key16": "2TrVaNnYRqWdF2aeivpWfZpdNnH4LhAU6GDBzq6cGkvxpDko2SvRq5zpCBiB2jqHXnD1HToYFJJCuWWYRwkUmMa4",
  "key17": "5MzeiRnrPRwEgguTc5pv4JS9Y9nxYrpL5uVor9DmqCZGS5JhJttx5Qhio2SsLu7XSy5Cw9XPcfgrNMj7jsXgbAV3",
  "key18": "M3Pfn1UyGx1K9Yx7aH4D9WzEcJR3eZHf5oJVoNanR8ZdHv7m4uidTVFuENCwdV6rjuiKuG5YUHWnr1gKrt8WugR",
  "key19": "3iKGsEUPQZ2p7YdgqoLNogbiqGZPuWUMYGmPTxnQvrWHkXM9G1zha3XZgCRapBL6K2s7DCEyjoxLbzVtQNybYYCz",
  "key20": "4kAnyv4J5UvhkfoiXAd71Cvd7BtKoovTSbTX42RQu9f8j8Gv6x3XoM5ya87a8BCXgz5LrA83boT5rHddRJasCmDR",
  "key21": "5ggcXR4CZMbVbWrLdkYokRzc4a96VyDma5NhVzu2q76MEzusjmFUZ5Hh5ejbaxqy3ZxkgQ3g9S62gru4FMdqos1g",
  "key22": "3N94JLqqfBFgMguagU1252S4HTYXpDSxzPBDgpFBkBRphAruss875vcuNFG5eSKyDkhdNwrzgMvpPRJSU96fDVDT",
  "key23": "62foKPM2oDcJ6thfMG5hGtuiPvnFgqPXL8gCKTbW9atQ5qb194Chn9jeTGEAEVPi4bD8Jx24vL7MmHQAfvZ9EUJ9",
  "key24": "2NUtJDZuGxmVB1gxKNSVBdFx7HwWFa1eg8bgWjoYKnNrPbfehiVYpbtawqZpRjYyty2vHTgJfeGdE7jh52Ptwb7L",
  "key25": "38HhLxvFQUC9EnWvx5ykfnkG1yp2uZvvAKm8PYF3ontAUZtdJq1azCxazKT1HZPUaguDYeqpNkuXqKsyJWkP2YmN",
  "key26": "HamiD1Pj4hizABCQtve7w3iEg5TEoybW96qCPthJoRPTqsjn2P2f6t45YBeDRGm1PLQV2JdTxqDUE3o5Mu4355r",
  "key27": "4WYiwVgoNx6SyANWGhxVHnVkRD97fE922zoj7rCPjRwS2kckjA6aY8qqTU2BGxfgfiZ6Bdc6tcyQw4kKSt3eUKhX",
  "key28": "4Kx8XtCqTaqnZD6DXuyV2YZg1drgxKr2T29zpKpmzDZrqxbj2JPXXrgskp51aBZ4RSWQg6WDKHRsVv2ZMzeavh6w",
  "key29": "5c2Vk7rMjQX11QXxLKB3LEb8cdF2BLvpH5pf1dJBjQxVo3LHkGwnkWWybKf6tfkZL5vR6zFJ9Z7YQTP1ToARGnSL",
  "key30": "5qaYkr8RpYCvKQFVQoumuWjgioF2vqUWu7QyXnf3Tk8kiMZYAxj64cekBQaW9Yu8q1k148JMRretNwwbGCPmnUVi",
  "key31": "2s4xkVKDKLaZnvKT8Df1Srb65Pg8oTSs8wLihcf7J2o5oKZ32yyPpTuXAP9cD391ByAbrshWtfBwitUsKJxf5fPk",
  "key32": "safLf2H6nGUMhLK6GDTLRDrjQgCi8s4u23w4dMYZSLRyxWGAbfhC1R112Z8REQfjiC2wFdS89oNkydbWacL1CGe",
  "key33": "5QhpwkCaiBbMdvuDKoMbu5rM5EyFsKf2d4juzEjMLecKD8yaon4uTFUS5R6FrZt7dVjoUvAS6cgnJp28nWphxhfU",
  "key34": "ZcZ3oFWzmnSv6WRZ2awh4vUkMiycELcd76FfXZsz8gxZ9Zfis6wod7MBe7ouZi1aUVqZv8ZYVo82Uux16m8ZF5G",
  "key35": "4PWR23GHjEFacsWd43gQyX9Lk57fs8GJ3fx2tFL9DwLQvTEEyXv5FneendeMvG14ou3R9G72VgrCVam1S5auiaSx",
  "key36": "2Hdvkco5XPnCzDN3am2shxhzwiMRCacr5iRPZsBT57hoW7AXPyTuV3j5PbaHvNPiWesFaSR8cWUrQ2Bjqs9GF3sK",
  "key37": "3TX5ppg47JQVTLtte2vkKUnmSpDqJKDeYuc8ELTL9KsUmFFziTowBSJBjGfBeXT3nzch29JBRf75URotLJLBQpLm",
  "key38": "5Tr8UUtY4vjqojDrhbAMoaNqKRpnWDm3dnZ3erMnNkCjResv6X6SoPdptpk7HeDFSeavLu3r6dphLNFAsgQozh4J",
  "key39": "5YD5KHHKP6kGd4zaFoCgGgE7pSLjBh6Tu96kFtr4MMhpzeQbnt5Zenagq1ZGAN2HzKNW8mSgjXFW694JBiZSZHLN",
  "key40": "3NWUAQCLaJF8FxSL2EiNcY7QRzNw5r7ptLQgh1ASRJuqNLWkYrMKiv1cW4tpdxkLRuqQh4T148GHL1asDia47LS4"
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
