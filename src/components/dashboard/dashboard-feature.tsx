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
    "4FUuHTneX41epR6eNFaNn9NzzwrX2HLkEgWmFKuf9B4TA5FTfKeRbXtSMcGDMSRMWzPk1NpHesAZgGNHM2gemk9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joVQ4STj5NNr4bvt4rvwyaUHcCwuBseW56DPFaXLqyAavCyRyW4s9Fi7DVEMCLBr9Uu7eP2xRyvHxwLug8T4Cpe",
  "key1": "2gLukQ8tkgt5dUz7143M2PzKdkcSPmfsYTruu1Eeqs4uAcHvMegzYfMxrnKcnoJCXGZnUdxLCuWoqCdM6zBnpenn",
  "key2": "4pJLwFpM9S1UwNVYBtVJxri1X315jiCtGEqVQ5vHH7Nj3kzyBjXoFkwakhDtsT675nHPHQEb9SGpuhDRuL1kW8Mr",
  "key3": "2NjzSZp12UwLzhpR2QPAvVvzSpjvRm2Xmzqo2eBgXFnkkSMq8kPXSaVAHyDVsCkH7HLTPZzHEy9RYZvhCxbvVgDG",
  "key4": "4RtGTg6vTU34DtJ1F2GEhTuAijrpEZWHVfXupUoJ6kECcPSMJPsEU6MRYiqn4Fv7ZzfVXFcAjnd6Qa4pXgxA6m3H",
  "key5": "eNp6VKhaKCoSTLHVtEreWrD8G1uLDNxphCgbuZ2y2G2CkRZTgA2QMiwYrPq7uspXMeCnxqa8cAX5LE7ExeUPn5H",
  "key6": "4qTUvNk47ee7UQ7fy8pfRSo9rJTs3iGAB6hrfAH6c1bRQgFnzK65Ud4KH5wWvWbaJsAmV1hNcNzEnHiZLUqmWRvL",
  "key7": "5F5gduGebR7TD2HzbjkdWNvJ8cPBBqo9DNuundhmEzpHjyiozeN9gRqWtTzAQhpCbBi1HPAG78FXM8iZcvX8MkkG",
  "key8": "5Q1f7vL4n8eGtt7McFvLeV4br35EsJMG7Lq6ejo5tXQqdH7QwjGrisLdHjD72xs6BDBTarcW2y1HGuGmiPiR4cez",
  "key9": "3MYXwEgLcnSiJ6WQ5d3C7MP15iYaoBm8whfRmZfQx4UQDina7wiw3thB5e8npZNB2ZS1xErrXdhPPkP6tbJdN1xa",
  "key10": "2z4PRtZq3usmikeYtQEBu8iCCGRzghidpBzUQJN4pAi2rPg2rHmJjG6TiEDt4usL4mHpPJatE7P9kD2ASkx6MRVC",
  "key11": "4mDk2Dm8duY8zThHcB8urjWtehevT78YtLXJBLZWCPaHVs75HLsvsuqTGARSMUhKeWqxYTioW7WqdDQVDBrdjewN",
  "key12": "3E3b1juiWgDPrLPuWML5pipR7ZkbHynnK4pTgJ9BkGJJjGva3jKHX48j3UR6ctUega1MuLYKtN9mpdqAUu1uFkNy",
  "key13": "56gjnhYa8jiqqwhz6847xbBgc2WjiYqCKkzj7EZKmsUxuE8T9uCee5TiDfcP2TPetspdFPX3ZEQs1uf7ChgnLvqC",
  "key14": "66YE7bsAQmUrqD8rx1YPqjUqfCxRwv8NjUsfr8UzLEM275b5CJRvxzbn3Ga6FZZdGWEnZhUNr6kXk4uNhqDzLoTf",
  "key15": "55Giv1dkPQ31c2RT1ukxGweG5XWKcikRCyuAGpeNzuzA3z2bAw3q3RwDUQQh5uhkcnV9cbuhPvxDDwQTxRNqmmmx",
  "key16": "5dPPXspcwWjazLyKScZ57k2dzMtYDhLKi7dxoBucDTrKy1aqJsSgE3NJwUWAMoJYLzKiMjJK6991S1AV8U262PPh",
  "key17": "5Ek81HzzoMA9QXtoCKkfwrYdtVmX647kPQM2zgR8cZerEFmJArwjWBfQUhPCZE4ewuusdhDvLVENBiucXKMM9Q7H",
  "key18": "JFrjJoazo9vSbMygwaVeRZByGXjWkFsgxHjukNR9kvQJz1kKnXPR2KDQtaDxQBE4YQ5MN4euMzXYHAZ5dSPFTfA",
  "key19": "3226Yi1jDpc44t4kVaJpnMTWXUxANgiqbiJzbauQxsFn9rnnDZMkxugxT343LqJR9zzrqGwpfyQQcrQNxrp6Kdiz",
  "key20": "3X6RXJ31L8gxhHw1GAQY9t5bxosB5u4zbZndiipYLnjCiCtF5iVprkiL4cqEmn6jZEXhDLHukzZfHXKA8msyRdyZ",
  "key21": "iLUP2jqBk2WADoNjdRbW31SNRLjjMEzmZv6ad7raBb8x6TdGPH4DQ6qmcFCPzvcbh8Lw29hQgtCqqtA8mbgN6qA",
  "key22": "brYCG3F57SM8Q5ZWTdWF3Fd3mRkcsabcAwiiAeLJbzrUmyM5LRX2De2hfYuedF65Vs87QKdVGd7hDkbmJGkt2Eq",
  "key23": "53EFbNinvpmoWgnqtR9y2iwMBFFAj57Qu5Gzu7LMYsVQbdxHjSSyDBDStjbWcKK6VHcXCcqmrqegNFhixveKDHAq",
  "key24": "5PpDbbcYr5yTXuNH2Nbxn4LsR7imeTK78bCJYdPUe8ypNSTWeca6EQ8WA48JyQfZRyMLzeiNouKFke4cS3rS6kSA",
  "key25": "VDht7PPxCyk352cbcFAAb1toiRfutmHAZC3JwDa6iQJi2p1f3pqKBsGrjELs78DiFuEMyLi72ggaQxUezEe4y3p",
  "key26": "4cgZPtSTqmdjNNAbHTwSuaBQ4z9ncARioQ7XnXbp2Mi69ubRAVcwVniiopwkT9kcJD3vosq14E3gy6FETe99jmLj",
  "key27": "JeqTvjAGkmWYxRitfn4ffdSf9co13APTnwzSkCahmS73RyTJbW853Td746uZAJQzoDqeBe7xC9Fm7dbmPfrMkSp",
  "key28": "b7RU6KxhdqnLaCPh2KAn8zqwRs5rNe2gokmSo5UDmituAbjb4tmdVzmd1bPJAyKL1BcH58qyoLLPpG3WoJYqMr2",
  "key29": "3QnjidE3Uqnd8mskrZLJio7CNWUkeuKgyEVc8rhWBUKSdDA8vZKoeqoxYzeGGGCBas2nUQ8XoguQyTUioesU9B2M",
  "key30": "hppMDkERHWPvCXTz6TJWL3cUKv9Z2hSxhcfJXgVk6NSWzKGhVrpswc255cK5x4WrZQxrmkPRssa9mg1Z1dxwn9p",
  "key31": "2PyGwiMSh7UUC1ygC5FgeLfDXWU1PAwjKZ9bvhBLeXrtXoMLybqUk5FkVNb5gC2LuEwCzfdpgqo4vAQ6X1AgZ5qi",
  "key32": "4huxC6ebaJfA4M7Bobzf6YKA8rrYy1Bzvr48rW8skt9gsk64PvNxK59sdErrZvQ4eL7VkPZfJ5i6gfryi8YqbAek",
  "key33": "4g3K2pmKi6aFYRgosiSeDntQjj41nce9pr3BJeZAaC8i7bysCSD2dH82152aWiwtW5cnpzUod4CN8uCDf9Pa2D8M",
  "key34": "45wGDDUSvPgzwCvgHZH2rx9q6dURFqFoxTonis87FF7LSUNuCb1DsxEHThaV9LgySfdF6oTGAeCkjMKhat2HscMh",
  "key35": "2QXVtb4AQzCFyiqUvxMazzktSLw21htdczXoTp2cvVWwu7Gk7mwk9cEmuVgPdAszcCYY6iXLCbz1GLLd1irMEtK",
  "key36": "52gTbcPb3xb2TBKXWeXYhD364vBX2q5mx8S8h8x2ZEy6uiTgPFXbwLfysPP1enoSZnYzzyQo7nx1xxxL8WfT8hfX",
  "key37": "4RAJmuhXdLAzV69MVHmSWuYysy1ajaof2oorS39RdSj3uAuMBWug4pDXojWeNSRYFC4DRdi6JyedTtK4RCgFa5kU"
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
