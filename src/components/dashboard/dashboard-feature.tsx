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
    "259w4d5JLXZa9Sm1intfMSjb1jj6nvrfSvzGRoagMcLFHidirqeXsNyGu1xMWGFubqwd3dSg2gCpiuLUy7tWusj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjwqyUhEMNa8z7FDV42g6qUcDCFDnrvC64Xw7Gc7wgHJhLDEQAn3Cp4Q7HL63JBvKo3QohxSV8nJdmdBTryMVYE",
  "key1": "R7NTgvGxMVQcD4pdQV45Svrci5YofNxN66XqbK5C6vNqTMufv63GTPGUeA78aG4FoTsSQphKiDtdib7yaqh7wAo",
  "key2": "42XeomZzaYPrdXYGALUrkZUnE1yrcmU78sdhzxVpSMKvnC9NviPm8wty2viwJaHENxJU9V5nTn5EdBoAw2E7JBGj",
  "key3": "4z5fC6Ay7KBy9aWXoNHR4Zrqh5E32w9bRvmJrEoUecG2xu3PJKTuFMk41g58bXYDesLBTqdxYLzn7nDv4Exa7Azs",
  "key4": "3meQGfS4S9MjCzRi1BHU6MfdYYhFdjFottGtGEaMtXrzqfEG7577z8txvdS2YRpKUqCtoQacr6JHy8NvPDQki4WB",
  "key5": "2AeJALRnWQWK8DTcvGmePsYC94PT9LrGTD7qtesshV7R5JvkzKbGUQmGUE6JgXHfTNQXGFkzyJCTzREdusCsToke",
  "key6": "4xHCzFX9kYhfkmLm3EWtZhrSTZRbhJb1gqXQiUq4VTwtJjvrJggCPtnQCgGz2YxQTaLCCzWCvH7Jh8MBzEAX7dfk",
  "key7": "2NnziurToANbMaeJoQPTRjDcdQgzWLsNhoj95ov4w5BGuJxZPwMVt1Dnpo45mSpTQYDFL1my3ock84zAXV2Y3Waq",
  "key8": "3GzGumPCn4nQcREjuJfcAaa8nCf2maY3NNJWfrDvuhgGMLgbuN2YFV4p3mGqjqpd2rhNm4QRdCV8U3fAvp1aGxYm",
  "key9": "5iRe8D181Yc7YS3AWyH8YqWVNPYq43vw8GLGc3Y53t5x7xsb65ccNMJBjXocr8Nncs4HUfmYHWmkHdZMcY98K72X",
  "key10": "1eQRG5CGoY7AFpxgTwa8a6jGknXzegsQVqfpFfnLnTKTYbc8s8jGCwJ6j6rroXEevKVr2qSt2EWBfM1exfUcqug",
  "key11": "6oKJ8orgWgri4pVkFk5YpFxMjjaVDh9YmNocaMsCPQaefhS4VqR2eVy68hP4JKn6Mk7mBQ9JPdZ3BLFYMKbTFQp",
  "key12": "4RtD1at84pYis5mWmc2kdA8qMk1HYxeTPNfF6dJp1ftuLsCjCmeuz7pf7Px9nVqXD1j5dcuMsd9LZVUBKtAa4jP",
  "key13": "52FAAUy5UxTQEbWCVFZ5b51XQn2mui1wJm9rV3qCdvLAZH9K45RoMnEVdBhJHuAv3PrrM3o8FhG35cmLUKY2E1ge",
  "key14": "5mbVonmM48BvKvbonMKmD7xPjfHTLKpuLaTNVzhCDsJBCv2276dALtPMGwStsYhzq3RdjanYzQYCQvjEGbufcWwX",
  "key15": "5axR8KtfHAsb9TDWi61YNfBf6EbcawMp7ejqVuGxTyzpoN5qBqYdTm8Noq5YHzf2Z7RMzRS9Y4W6jyjy5eVrgbTx",
  "key16": "4j3uUXNzu7STRCJUK8J5qgczQEoFUY6MEDH446MBQpLgWqMJtufqVJUwTWVBPRpwbcw111J7BkNm9aw4rFCPtSXW",
  "key17": "56nUxT1oMUFcYDuenwz3PLXH3HW5Jx6QbdmPkU4YL9hhkxPgmGFSMSPqmzxh2LiM8yy2xbd2VDVSrX9ToEDxwQyf",
  "key18": "47jn8uwzagt4RF4eNpgFf214bTykHvN3ScK2r13ErNoXpVBbK359Gw9chH7hsKKFBkZrMNwEYWc7PCetScbbpVZE",
  "key19": "29tUhx2RGfzZbJrrfi81GMviVWR9Msf2uKqm9EFZGJ1nqHj9h94yMBiuQg6hKeE5kWnzf3qs8Ux2BECi2dguxNYz",
  "key20": "2hgynRX6bdhD1kzQmuAwiMQQQkxEWbhXNyPrvsxTp9VS5iZotf3DVt95Urybjo9nVw1Pkkqsfqe75LCSz116Poup",
  "key21": "5RXiP3ToVU8LS1jbL3H48FHdqoW7VN6zg2TaYqMuFPd5XNTHpZ9BfSB4iLCaeVXwg6V3Lb4PRKqj4qS7XELijCsg",
  "key22": "TyWRwjXbmoj376obuFrperJJ4358TKEthZyAwZFKTEtzDL77ct8qu2Zx2dPgyGvzbGjfEpnhoYfVjwjZJkYwLoU",
  "key23": "r2SZVT7ecU3wqtCLnWjWS6ghBiwAUMFYKb9VEixyJM2LyWfUnBZyUSXeZEPwTRCvnnDzegYHoCzvdaQcNxSy7qN",
  "key24": "3b6foo4boRe2WZ6W9W69d5W2VApXeYSwsBJUqr1oi5oiJofEcj3AJPfEedyHf542BNwK9eVD5vCVbBM4g933KsTa",
  "key25": "67BXtHCythxUsTRyyvpkg1Dmc6YSqC3PCpgmFEDx75PZXjrVmp6XbDwrihprozMfQd9RFcthErF9dGc13yzEHaT2",
  "key26": "28baRHsa9ybCAB9Km7rbGVnjyA8Nnv1xP9cFAGBZNEXmiWxvurcEoq2pajGkuYknaG7rogiSsmiKyctrQ4wc3Ebq",
  "key27": "2Q7ePgjAFKB69v4G1TdY1jNGBnWif2vfEN2zGm2ESFpFzgHfiRXky5x6qrWrcEwTWaDFJdqNCm5nZRhUT7g9pfRm",
  "key28": "2oyw4UajuSRzX8sWwTM2xJfskxyKUpiMHvheCZtGWkx28czebRwzfHW8W6RoSPexJorLHQtngHNx7SYUqhQLXkah",
  "key29": "39Uz4j4sxcTS24sr51wVVdnbcn5DEcgt71b2AGcS7VMV5xLppHP73Jagf8QXBq3mtaZZZdZE8qTsz3KSonGJAtX1",
  "key30": "29caWtHfi4eukwjfUYLbSmVBncV65wN14n4ch5hKcQfzxyzdebUxJe3FmZf7hRwFdMxvi5YJbC3yQEsXmnb7RuV5",
  "key31": "4w5ohh57Dk8SvAnyCHmfWMd1NVYJSahcYMAUn2564ZcqxptghCtbUPvzSA7dQBnwnSo467ygEdwifu7UiuG1zJV",
  "key32": "53nMja8PvDxHCYsZ8ySR235NRiy2rawppzc83hX1JVxXv7LG3kym6kDnTwWBzydRVNrYXvyDX2s1Dnb7vE43JqKT",
  "key33": "4JXfgGkyhv57vbbSb3bf72vVevsWgVZNcsiANyqyRqQVgG6EDg2p8wBfh3kfpzaXHAsKGEkrcj4UEMmzDmvmYYex",
  "key34": "337iS94PUr3HM83kh8nYiZqfVMKXP19PSsYXfWab3otfkBVN9WqnuwoRpA1hup6yb4aL2rwQsFwn62VE4yL65RW",
  "key35": "cTLRc1yYUN7ZubRhbwdbH1WKqSHLoaPzJPeesFjPoPu5KkbWYBTPwhFJFcoaMZiPo9STY1WchtzKSywQNkPh6wE",
  "key36": "5DZGhDSVPVHtVNQXkA75PPPw5wbtbhGxDWbX2VwWR3mmTdRMdwWNwniKVhzSyza29jY3JpPFDjW5q8GQyCJTdaVE",
  "key37": "2QH6UP94b5bLFDunD1pwtBQu7pT51Yqpi5rC4Wn4AtiScZ1CipSx39Vt2piLTbWUK7ZyEKske7qvkrwgW42zH8XZ"
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
