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
    "4J8xWiB8JxcKTHH8tJBtaygEG4oiZDzHUAvdWoyPUzhGe3oj71gsTDVxsQp87VzgrcLYuYjG8iHjqDpSC2Piee39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFtv5h9Q9uXCRTXZBJc416YeNSZi9nL9eoxhGBDo6QvyY66XeXanUBtqoDotRKWrD1v2d1i6EJEN1qJnscnHCTa",
  "key1": "pnJynieqHmXeK9RQvZZQp5vcawp9TcXCGAJ1Yd5tMzh7aYnoLzasTihyRxsGGxxu94Gg8BDZGvUN7rgmF7qDh3A",
  "key2": "4L5Ekgxnwq6fhRYC7JxVLXFUPNiSm73QrJJS6BPwrR7cDGM7rand6zBahypSfgvTnp3gqaxJhBn4xYqMgHY6WKr3",
  "key3": "2rgYvVGUKG6YnVgiKwxjoFVbrQdqmrgCR7ZwBwEwBw7chTQnxpeSDiaFPk9bqF66oPB8q1U76EyG9Rv76PrN7Fwt",
  "key4": "2LHBZBdytPSquU3K5FBuJDay7rzAw2Rn9EmPYcGhjaM9eWNs86yKTXJKNKLAxwG3f3rRjYRFQktwxWpxvfX6Y9GV",
  "key5": "5wXuFeEY8YMHs6UHmPuU1sGWdU5iTPgYzaaq7oAKNRJMhAWE3YMUyKF84BsyDSD1SwaDw4eMjM6cjPRAdkNvceYN",
  "key6": "419emEkuUkmwWHhMaaBbAjViHpQvQm975VkCARNpWPhu9YxHhcFRKiBacoGfvaNHTpw2ZDjinKCXabQ8S9XqHoHQ",
  "key7": "3AzGmCYP3QxWut2RAhzyY5KFZ7AW5XJQ1pAgNNcQtRqAhACkDRDn1avGnGiEFKXnWUEbPHjQx5KmfEJNfJtcPnub",
  "key8": "646jwdxi1GD2FcvX8pAQstz1xRKRhnF5RPHGKH33Z68miARWZojCh6Uv9DTMWvgghEN3Fvz5d1ndnUoZKS37tyeR",
  "key9": "3mUBLnV2quxhVZwpr67uDCM7dCkDtq1EZQ572HVnUQfVySpKZCmvwxYJB5cikcEeKHXF4qbaMoawawTBTfRjqD3n",
  "key10": "4FzeDaKmnHKBaCrGbSZ5vFHDoVtnkQqFGRCxt9iU8SAnW4jt7xwyEP6sU4ugpgkeyQtV7TpokwSdkoVuGXVXWDez",
  "key11": "4pkoT95dUvj28ZzcYV1DsyP9GjxEJCtiyz1xbGidXXZ6LKSetVALGYbxJGfd8MY9zHMAbPHP8mN1VxViqq7dycEp",
  "key12": "2eeANhGzRGYuUAawR8zrPmvjrVG9accBodg7wEsDfj1DNxXK2gVEsMqUep6TD21yjtgkbLnGMMukUBjdCpokfPpL",
  "key13": "4isAfdcaNPowYesJihS9ET4McDT97geisk69tpwexfYsmJxiD8srMByjUezoAkL2FJmY39Jc2NvnkPzoUvb5h7GE",
  "key14": "4Kqd49CXGh61hNvAebcewTiuj82YEbeufYa1aGCCxKGqo3yXk1m5cYjMdT5CsspXvHyBWtWFa4i8kns8QbVtZenE",
  "key15": "4eRayDMWH13DziqPaW9zUTY9sKoWNqRWc8fKV6gDDKN7XjR1GDCfjyDQsPeyNJFkccyPPBybkLYgWLJMmZnSn54W",
  "key16": "5wbtmJfNVYrf3MjnfWraZF1njbccHSPVb58m9zzkSDKHaRbttUXuo2dRcKy6Nqfmw4kuQGUDhzgzaHhrmGrLeHob",
  "key17": "4VsAJsioRsJX7haXv9uLy3QXjuaDDAKgAjU2nZ93bDSyxAq6xMMUZYsxD38W89tN4fm6vQGpFf9y8SnFGwP7V8NA",
  "key18": "cgGMiKTSDtDsm83VsX1sLU34WustwKVXHXJh61BG8yxAEHYFhmLsQPNWsmqhDyHtgfS8xwp1poTXAfxictzUpDZ",
  "key19": "2kFAw2CnCpcpxVNjEqYehzdLJMgJvjivNNYvw5aw2DQJJNnRTPXqSUohK5H3rRczDXJd48ZcRUaDEdwco87GHNhK",
  "key20": "WE45F4cnw4EwxhhSyGB43bKSkBG3rEqvc82QdqY3L1SoLejGoePCvNVkhGS9EFavkt8doH3a5QjuqhkkycTCbk6",
  "key21": "3hBKuquZZvZRHphQ1tSwCWNsHhakTJQnekHifjPiSLVm631jQr9wnMEm7wrmd7523MQD4SVdLocnzg98ssFjY65X",
  "key22": "52amM85cC5KoB1Z8uC5nQT8ZpsyoyEgrKJh3VTQSyKijFkqrvAWVsBRMVjD5ptzJ2ZEBHfrWic9MpL2RY4m62oGL",
  "key23": "3kfd9vphjawZTYkTEv4V2Dg6yFkbuwQU5rKXYuKcULvvBhk2fwy2ayTo1dJY9i6Jv93mmeg4G8mesViDe48HRUqn",
  "key24": "29kF5P4ErS1ySCQgf5S3qo8B56W66isTRVUznniwcFYUXbkcLAXWABoD3qFNLEP6JkrsrXDWLgWB8Be6cYcVmTgy",
  "key25": "4p6kjm1PigA2JYgxTRsBfit6dqkAtvgrdhrkTwnkhrAUDL9ex1NByAP1uwvSD6WXBPR5qKXN5mSkUm9NZuYFk8fJ",
  "key26": "mUaetiWbf4crKj2LSZDwwdme2nCzxjQZ5xobx8mBLmddrBpqFbnsh8mHjMEMSnb6utrx7sNBVUxyhnpiXU72QtW",
  "key27": "FrqJ27GLyk4QyN7Peqvz6viozrNhFts3ZuY4JCijge1s8xReQyuDeFdZccBHuBu7Q8MoKF4yi7jjNPCZ15BQ8Zb",
  "key28": "2z2qBsChAR8Sc2E4yySWvaMCNHuLyK54oyx2BsPaGsKPrmiKYyQubT7snBrQfHRAeNKTFWQdiCtRcsGANHcJ3ziS",
  "key29": "2CXVMp6yTAXnUVm49xQBQJfpqZ9QsA6h8TEqFbGNhad6ojnhhsWL77KadQxuBD88228d3Ds8v4oLd8XKgzNymPK9",
  "key30": "RRuoYfs3KXnEmQhemX6rZs7MePNQNPedLJhwMg2FXQeW5D92qdxitfNxvCSGRt4zi4xAcMqRDeeKswJtpihtoXd",
  "key31": "2Xra5Y4qAvxLhMfqm3wXeRo6D29QSnDGyhmaDvvmm1W6N5oy5LhoiJKEedKpmkCZHNSTcjzTVhSMhsroapvwi1Mj",
  "key32": "2onzj9KKZfmVVYi1bgtiSmDT4SBBa33j9h135qPqjNYawFwe6ZPv72B4sZavgqxTAaEFiJa8WrqQz7ERNDAvkgob",
  "key33": "REyKriYyA3yXghfcrVAsMmESFnGhZ2XvKLUZZ5H4J9vxb5ty2G7Wy8HLgzNsLQnKSbQQRmAhHDZTUkt9Qij9um3",
  "key34": "2TRwsezK8i36sx63FEEuFNaXgxA28Dt2m15mom2gy8qBwr76pQU8vxqj3vCYRyo9L2LjzgPfCaVqwxG964hWBFFQ",
  "key35": "3Yp3NC1KaWL72PKsPyEXQ1iCVKTBngYvDBqoCKEuzjfYQhSLqUsWXjNHdDmapMKY6rcYQdnxaq3bARMyCgkfoHZq",
  "key36": "3Gp6TvfwmnAU5WfTGX5GxnKaH4pJKRbZWFJUyW4qiAHDSKccxUYFovrTJcvCAp8uftJHNpSSqmUHv3ic9tNXhaBs",
  "key37": "333ftzhw6VisbWjMx7osirKsD5cd5xk6ShsPunyAU4FSzKfbPTKMe6qKiiq24UppXYq8Z9nLtqPgCPUvRvkMYLEg"
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
