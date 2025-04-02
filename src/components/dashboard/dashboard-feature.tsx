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
    "QZvkYoSaDAkN6U9ogu2vBSsw66MLQVCRQWAxZ7JEgha3HgfEZpseMY6wucwdgkHtuoTCvtRp6Dk2B6kRaMJGAyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTfQPfvuxntDPZ1q9q6Z6zztg4RrbN5bBzfjwCy1TpATPs1qXCYsr4E8mJ9PVpPWgCTTaJQGUMbCu5V3mLrvmxB",
  "key1": "5zSXCefVFXrsdrh47TZghLqx93Bg7sp6T19ZEtZYB7MJ59SHYockrLVBgV6kipuSTyjZAUqXYqsxZ2nRgLgn7KH",
  "key2": "2YB7gwpsYKydFF4nMFV2ZHUXtD5qW7kZmnTiwwYMTgL1UUYEeY3a8bmsE3pZ2APvayfYuoNvF6j3Hb88xhbXTFG6",
  "key3": "6i1VKa1Qcby9bsyK6tarRNMKjj1vpbnLN5mGLnz1f3rNQM7x8idCDXrGg5DmyTH8ehTN1kzXQ4ZUbLSmxeizN7k",
  "key4": "JTvcTjiuVWEsScEv34NMmENUNDodTh5t75UMXNa6fEBXyViHCdAiHGdjPnoAYFkcMSfdnxdxVaN6TenrBfSLGUL",
  "key5": "4VxTZsWewPCmLqRKnNhQr5SVUeXPiztNRUJnnyrzsUXo9TuxvW4wDzHzMDHMsgqvRoMYua6TsrkTUB1cQ8bEmfxq",
  "key6": "32hhwfzawsMYukfkHZHdXSHyUCzdXW93fjVo9t3kYxdDM7LAPwMdK6LDGsr5hNTmUQPShbQEATzWw2EZz82wwUeK",
  "key7": "2VPUEGR8P6ney4k3jMJhXv6go3tTjUyvPiuUKeKHByKfxiDEFvRdG2qt8w7qG3Esu4k1vCHNapw4oGKPXyRi4qst",
  "key8": "44MdLvGesZK7FTp569pAG1AWPNJq6DsZon1evzS4uppwmkiCzs3kgd5PUgzq9Nj6UNjzvK4MFGYe7QWkj1br39sV",
  "key9": "4rZD21d8iUv7yyaC7Zssqtm8bwMck8B2bQG6JhdpKMmGcSkASrUx7ZBSRyKJmkEVYWwfaNKuwhobyoPb779MFZns",
  "key10": "5HS2oKQJqcXheSjT6qyYoKNTqPaCfTSXZmAomdC4CtgkeRWD7BTaAbzrk5n3bMUtrMFUCg5Lsin3sQWFC9D72q4o",
  "key11": "t5YRCFB6MGnxfPN34DtPo6Xwyk667tqoXvcXpNsWTpE9b9Esf9wWnrffktbeyxKzXhRGveCxPeqJtrw3ME3Lzts",
  "key12": "4vA4Wzg7dHREFBn6QMGZ6tHbhebsQxi66pADSRcc38EMvS2XEz8Hn9C6KsVT8ygdrH3E1qP9nA1gtvBw3RknkPmF",
  "key13": "4rwysMAq5h7ZPZCcm9FmJkTV758pfVrstkzD7xHgL4VeCwemhWgMrMzYKoFxKTYY3sgcgnqMH2iszrzYMyj6gcAv",
  "key14": "51ZYeTbqSPgUZkUEGF7o38YDMEfRYxee5FskFo63Vw5FuqSKJcc8onLjrkZWT482egaTVKJ2uY7Pt1t7P1wDi5PC",
  "key15": "qHo2vsdS1hMnr8JspkrH7JJSGDm1Ry9rSMHvRxuiEGdeT4PRZkYtNVxzDWyhpVTuobnkd2uotPRG6ktdAUV5ZXv",
  "key16": "5nr1SqhvzD9U9ENtupPAv61HfvuoJfTUy9fZznmbrTCHhyerVCphHc7xBCbRmUEqyt6zRDamBZqCLEb96Pd2F11a",
  "key17": "25Qmx59Lf6VfMqFvzA9ToMNofLgCW4yPCTKDyEmX6e2qfmyaM7TVRkW82xWvFPg5AP3DxBr7CuTt7eahVvJfLdZZ",
  "key18": "39HBb63QmJPTZwV3GE1vqBXdn7467WpWEXh1U2VDg1c7K8AFviMacLnZHkiW6w7ekFLwMUycTZmYEX96gEt8cxyD",
  "key19": "zN46dQwVK7HEYqH7suaVFLyehGrfsw9bMTjbzFYNEuudwMiJg4VFNePRmYr7cJtUFgLQEZFdcT1hWuLgSAA8SzG",
  "key20": "3YbAmV1PEi4j2iWQNzRm41JyNAsQpmQEvv3ShEYy89DBBetZ3KZbNcsjkc6CoLEPSUTf9H52wiSES2CtyKotDbmE",
  "key21": "3t4AbaVtnqwDczVqbeWxqM4axiwrh7fbCNmCTXN39AA9SRpWR85yj3A2r7LG9Pmkjg8t13xbhzEhD4Yrmg5BZcRB",
  "key22": "5pDg8xeXFTsWosDLSNzAuqyCZF9u2zSrsB3GFFtHSVUtbshiFYpNoAMBNWkrWQWYdFCYZJ3owfXQ7J4KG5mb7kzX",
  "key23": "3xjh2JyA2e8FiqYGiU7wZC9aU1AFjv8t8oH1ZuGZGa9vGq7S97WUNVjgjczitaabodLBWp2wSTFW4kuHnNr1QQU7",
  "key24": "4zRXLgym8qJNnNZV2cy1fWjC7kUBZ2j1WNEhcNtRG36NwxpeSeqzoDMxKsVpbU6xvQ1kfsnqDm9nLtJjg22FBMTH",
  "key25": "24ynfUzSkzKK5y1Gxyb4CjmshUZ7BKVaJXpQiDAibSP7aB1B4aKfZuFrtGASZgbc13Wm9HmjHrP82ReSX9PrrRDv",
  "key26": "2NyPDUmWv2QCjRn5jd296Cjd1WGcg1wi4nPjiEkjtoRjTSM9J4Hg6djq9p5zBDaNX6bKLUBJU9SS4tbU7t7WN4nV",
  "key27": "5mmuvZzyefTGCx6PgaRbMm13P75HY5rsEjMuctEjQuYNhHCQf6EuhsggftCoz4uxEV1quK6ZgqZ1SK8fi1Hc861U",
  "key28": "htHWcyE6vciw53s2NzZBx4t1rDJ9yeayqmLC2jJj3tW6QwakD6xNJFinyntvz2wSY2M3eQNhMgSRwdaSjwUHqjP",
  "key29": "5cBRE3nBdRWyMmVRGj9pNNu9XTyCBgrxgYXGERcsqb5DEouXQABbHanL81DHggGviLrp8Uay7Vu6QS52s22jBiq9",
  "key30": "4NVfVakgXtShooLnNhHQrUM5yGcGKXNXKAz94Pv8VXTLvBD2Pe3K67UiYzocZVeDkt73FaeCeEF4RSR1bpSjYGww",
  "key31": "ZNyj7ZVWPqTtgLEDv4jsZgnd1p6fCmvPGBVUoU83RbkZp4K7bPVVDzkrrFHZydm3J2rLvWeqxjm7RCwjKbEuD4S",
  "key32": "4LabGajbrnAnyZNiZvVsfTzAPM2feo6yaBKJXpzixU7DicQBvrny2b7Hyy9GWw2H7JXzPhsuVdnwDbG3nuPmQP27",
  "key33": "DDsYLGDsn89EZnuCimUoHj7oHKcc8BW4Q8Xszv26ZisXyyPyho2pfYpirxvEDTp7CBtE3tcT7nVeXGyUvTBhkyn",
  "key34": "5g5JNuHCd4UrKuX5d2JMj7pGi5fGquvqMUVBAkX32tS4FURQPzYnbpGq6WdWiV65H6ZJaQVFBNHzBKGeyWFEtMMm",
  "key35": "2rDTCaKEtRH9UhV7K8y1odRWazmtDW8SR6Qo27BzVjCMB2ubjYZNnQTgxGVZgTcaFVD3FbCiW4mvB6uCS9SNzXrB",
  "key36": "2SpmpXevtKfzvEpDWB8ihvCTZfDMuEVc2XmxCZBPNY1XZY2jSLoKBaFNdfZ8wEKzKtgAsuy8jzNEat2ArS67GewB",
  "key37": "5BPcFpukRv6ApNFHhrk9jT2ngQ2FeruCJMBhnWGbjPwUWAK9SqVHba92UQMUrReDmHwuabda8S6jPrZ9u4dQky5z",
  "key38": "5dscnDdShhCcTQCRKuqqzk1KLZXxCP2wHwkLKfGaroW6AyBqvbhwVZRy5v1ge1cGmsjTFs5szbPNebtXnqRTWBbx",
  "key39": "3Vvine1Vsj9hMHmzay7tw2ybtRx8zBMzRzH31ep7bvopjiYPXbBruWD7ESGpdVHM85o7zts9YTUUDtHW2KUfrwVe",
  "key40": "628iHZQFkeCGFCND7KoRGd2z3pBMbWTdZW3vhvgi7GLjKR9Tn4owZV9bVDniS7EffJbgkijbx8Gs5ehLM4gf7E2p",
  "key41": "7FPUDc8MsxTk51hKa8hzNdXSsFuafbbcvjHZQTJWgKWYyUChLoinNbMmfxfDT11ieXK2BQ3bnNwCwejpE8QrgLP",
  "key42": "5wqVqdeueemmKS6aEARFNSS2YUTSXFEEDaJjrGEK8GtxES8FhySJ2BEyYh2F88CK2bf3kCmQUdSYifauwjwnoBcU",
  "key43": "3NwxisHASN9TzeKh8cvuJNq6e5YCsUqd9nGBwfGxNH6qPLShCvUVZJ8PYxvYVWudDw5EDkkBpqfvQodwysuxRYbP",
  "key44": "4yT6iWhnjVoBXCWwcyLsT6G92c5EdFvDa1M9o36x5BhHcJuZrbPhKgHD9Lo81RjLAkhbPYx5B8urKXH11xTqz7eb",
  "key45": "4CdSCvhc2QnyYQPRV5DP2faDuSpQ22RTzpVPrwhrwwybnQkuFjG5AYou676mJUZnZWYM5cxq6NZzemV8YErKSruD"
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
