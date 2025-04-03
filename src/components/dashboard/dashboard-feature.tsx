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
    "4dyAQxgV2YmFNnDETwSdJyK1S8jbGKLEzy9iv1oquhuuF5db5T1RyNPbnQw4BfLd9GT82CW8SReH7B8Pyc6p3A1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gwVkqDdjdnA8DUJb3CBxjWpT92jLN9W9uHpnEMyfXeeXk2rR6U6nNNACsapAX9Wqm1oi3GkiyGcms22MFfj29uQ",
  "key1": "23AjVKv8ZT2PbrvkqZLodZxZzF8geiMNm8iEdRjwb6TGRdVzYKm2wsE31vbuH1dpXmpc9k5QXrpky23219sCookC",
  "key2": "5YxcGoBd8U8ZhYrKvy3cD9CsMp3vovtK15gfhkZQdMXg6qZGr5AnjRzsgkAPMkWAGsc9MmBXoYShsxZfED43X9H3",
  "key3": "3Y3gsDNFFLj7fdhWYhjhXsiFPwxxHDy2CMbx1Z776LNUwrYvBsSwKMSEY8WBt8wFeE9hV6s55FC6khJxWonRDkFx",
  "key4": "3Ro7oJBpJZgGk8kJMwQqWrujWQutYzBhudgStbvU5tVWbHWuSAc3TFkGaidjcJyfhPzis1S9tHFTzKVJjF297xvG",
  "key5": "3GqCeYdBkrU9KLjhZdDNPBnb7pWXNsXhRLQavXBv5nLN2mm7CLG77dKkbsPW8RRjoMsbxcRL1M1Z2ptEa5ypeCSV",
  "key6": "2N9N4FaTa7QVQzBAmTPjg6zCfjgSSKbgHU1hMUpZtspEYoK4ApwMkSWDBDdBkF5yiP5QvoE14fjfP9c9JqhBg2e8",
  "key7": "5f5aQ7cXxJRSUHxg51N5u72N1r7rfaxbfMK5SVf7nxEvs17zvhJhTn8JFr5tyVbqPMET7YeEZvJrcBX5eF4X5MzS",
  "key8": "33i3KAdde6HXCWZjZQXrfWT1w5DkySbLbtMY6kyccXHXXRZHbQLaYfW9CVJ8EoLYaeWcS4U56QWGUg3kUa7ZoRpT",
  "key9": "n9Y9PREJBXiycTnoKX38BF9SWfnpmrMfRAbdWXxMjABazq54PpHXFS3VfKvTKJ4aHYPDKu3BZojcCRgJp2dVECe",
  "key10": "4nNyJj7UkYhnjqkCWj3Ce5VA7aGWHLdfE7gDfnBt5DEEKUVLN52aC1sk9MyPnW7rK2TndsYyGZe6VwMJ2NfPbphh",
  "key11": "5UFUrz28JwiTVN92hydbUwPwVqsk1q7R1V6eWR38aKsiU4C6Egb5V9o3SNjWkyA7B9hYRXzBaTGRC6TwvNe4UigD",
  "key12": "5YNboVhSidkLoa71JGkLaGFRsdqewpq9o4J7FiMmBbj5gXvafa1TAUtpB8b7bCkQSK3mUuzLdAaVtm9ETFimqg6f",
  "key13": "4i6pFna2kLdiuNSSaQwTLSqWugok9PVdEeMvx17Um6qvMFRJ88YvjWffnuBb3Ck5eWeUXhGXQtT2RWawicHJeN8r",
  "key14": "5FDy86ynP9bgwL7u8gNU2Aq7TPQqgs8FJRboequ4WYAc6faoNCs49D5Z9m5Rf8gRdo86in8Qym4ZACVzcUDodueN",
  "key15": "4f1Y7TgphDF1xe9pwUgdwzyQKn9qHirFKpcf4jVNk48wwDTQVtXwkFrnDBxqnTVEV3mKHyYpZdFQzUMcYVRZMTfd",
  "key16": "3pY6JZZtUqdJTzBRzmfg75rW9EXp6xSiN59EKTejZsysyKQCYiNrs2N1DBTd156p6DC634axCF9j8E2GfRQ8WBJ3",
  "key17": "3hg6NWWu6pCJ9wxzUWcy3GUwuMwXUk6nmPagpvVp6TG9TCyXsz2qgfWyYo8qvVpitWZEdxn1vw9k9gbn8399fGb8",
  "key18": "3eTkomC9jvLJUzqbm4rYoHNrQcp64KW6aMjXyckiB1jb1FugNQKRbr7zM9eLwcEe36WVBqb1D6fR9QSHUG3bxgQM",
  "key19": "4KTcyyXGCFfJh8q7dXpLxset4ihSb4Uib6otEVDfXeSGKbcMkfL4rvuJDMC9gEJfuvFVFD42wRNRXomDQYZCtxCW",
  "key20": "uzqLBcUUH6f9Nn9tEZWvsKfNFHoUoZ29Gcaij2AS6ZD563VcpGxZBwFBNqVgFy5xu1TVH6oBHihfSDyV35Bzsrr",
  "key21": "4q3CKdX9sLSGg22maAaKcFUbunBRf8vnDZ8eDKar5LMYqhFVmh2QHGVa4taZjFJHw47MtLrNse3yQNNKws172cg6",
  "key22": "3D6JAfUr6Ety4w2ct7ZbcvqAMHhXmh5u7bafrPCsE5bzuZw8W7VYWnXErnDsLNqjDMn9aAay5WJN6mT1KxiVLSHC",
  "key23": "25U5BytiBdh13gqHN15iiHVLUDRAVAkDn3yDq3hKXDDf8t2KiWNy4PmnLormneRmKfgsc1ATofi3SaFkeHjpgtBN",
  "key24": "43GaoCbS8P9osMCMLMzm9uauyg3QzFMh8ctdQmjE4n85RpSKhoXQMTNnaHtVLadjVZVnd4esRU9pPYfsHcXxnboy",
  "key25": "3VEi9euwHYxbPAyMHayhBomCMn8uk1F1cYa9JNa81zoaQYN4vjpYN7gfZxM4E2jwcpT5eKpjZayrPvXTctwmnki6",
  "key26": "2wPC5i8RrFFxwRqHPWpCuQgrU3Tu3SmxMKVddYVeLHdgetXb1z5djkKg6kSaxZcepb4oTNnVHyZrJCuEG7b7TL6V",
  "key27": "21PuJuNuiiBsSKfGEkwFVeB1vyTttAUWNKbPNifLb8yZSdvL8yRPw492UFx9ZXxDA351VX1zLL6cswFvq23wz4zD",
  "key28": "4EzxXnx5TWFxr9vwJbkmhZ5niMevqjiCDw1Pf1Usn9seYMqv3MV4QuAMmarQwEtNGJHHWPHT8pTfgGWk9V5Qy22b",
  "key29": "51oPnADDvKmc4V2krSBwX4V2sMQEXHn5KboC9bFPrCAQ28jcEFHQVBj91184fFaj5KUUvxQRgoUoLuAspuR1vypB",
  "key30": "3i72tPxNTEyAmc8Qg4P3fBtJrBQJhVR39fjbgjPYrEqQ4wG2WRFxJGoG9cArXg7RPrAhDvwRtkPaA8qMqkc9UqXN",
  "key31": "45WEqK27dEkKXtK6DWVwjGstQcBC9TVhEewaWw99cSa4yTF4hyFrv6P55dxNjWDR5LMtBcAUYvvAuF4oWyoLtw7h",
  "key32": "57wM5zi35sD6uWNXUCv2tCEy8uLNFGFbKn5XRNWyjuwGgLBkHpTgWspzqouR9E1wkMty5fAtdHM54NR1nu1VvDVg",
  "key33": "sqcjmF1D63uDa2dC4ot6Mw7Fzx5hpbRs9bs4NxgiqXHxapSWSowX6pCiUk7nFajMPsxWxxtT7nArQKzVMhxk37S",
  "key34": "5XhZ1Q5xy1hctCu1ygzqxGc9jB5mR8aWnMRoJMQRyebtSRg3SUdjELU2ko3BD52WRT847MVRhDCp8LfwTc2DHSFZ",
  "key35": "QbLqR1xDEhobJZXiL3ZcVmEz11PoxGYiBzTG2NNKim5ciEqmA39ooCEvBj9rs3nnuDA4QE1fyuHpLmCNZRRh6iG",
  "key36": "6m7nqK8R9wBFF7Afz5rFh4KkB8Yyv8h51HE8bPLSJZjGmvBknTi7GPJRR89BuSwUZiXcENM3aEEfub4sX3UWLEc",
  "key37": "cQ4MHZ6TYM2mgFruxqfdNDozDmNVaHF4nLN1UmKzjpWZDgwGzrofKGKWB9qVAadNbDdLxco8BP3qKv6GUMrR4wZ",
  "key38": "5bpLPtCnJAF3DtKkFA82CvBFwCKtMpXW5tCqCCRd3PVWF6mJLeaxinJuDSpPy9r9sgbgxCFEJ15gTtbQfs7idPbV",
  "key39": "4gr68adWZKw5BJ328s85Cv1PboztzWpPBBjQAcPm2pqvRDc8CfTKoqD2kursTiLFALkdRUkno8YJmRyRR3PgEkhE",
  "key40": "2Mr6TsM2rqVVb3rZNiK6n8TjZ5mnkaFH4HGtRHho9xfRnjdr6KArvv4yWqemcVjMWCQ7KzrvrLHLsiXWFE5RJij9",
  "key41": "2YLUoC3UjQ1kgPW6YC7Bp8Ubv6fwQ7iXSr899G8ug7YVvj7eo9pifj2QxDzNBKFi8Vco976oW1B2qtW5GiutMmc8",
  "key42": "5o2ziUDbWnXjkrd9aSHJAacDL3dh4c33RiuK3hPkxD9UFGpwVNpqd5qjf5Rd7pKqTZa5K6L3k7oKVz6yLi5DcM86",
  "key43": "5D3V4H6YZVWCgaWG6u3H5hKc73fSXyZXpNPwf1gzhkUBkjLXn2gxNVWcFDjXEQJQ4RBxZ6uK3jHGXgHsmXCAfjsU",
  "key44": "4q1LtNCGdR3U8pc6nJixeMbVpLNoGJiGYGaZ3PhFpN83anQW1DHF7Psiq3KRURgctjp2eGh6C7Se56jckmML5EKV",
  "key45": "55mURZQVGAg4pihf8tKKxX73HmpGf9XarSGEc7WgQbcib2TZpZF7TEARv17TFXTunz5tV7zoArgoSiyCet2173U9"
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
