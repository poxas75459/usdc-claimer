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
    "4xKUETXLAXhJW2du93vPH3gxPyXkeib58Edmk4Yfk9x3UBvf4afZwgaAPrKFJ6XxBtK4tJx4uH72hXhorqQyimRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49gxj2vajsvL4SJUpm5DBhxgzEzitodtcACheKTehJzgDhUrEEZJfxRxAGMW73MadipkCQ4EBWPBxYvcKWr54xvC",
  "key1": "zVvzqTsiZgXbhM4ZyFrXeM8R4c6fckjguaDU7VXFfYsa3jHBeq1qqtw1qvfp7Wbz9hU6aDGG9WiWKcuUhupnnuG",
  "key2": "2c6arkWiT1Ci3puMc3xRsoa1uWvALC7RWjgTyLM8uvVYd8X8h4d8WHLbRytKH4BQkD7ZzQFdaqBqDJE4tBJ16fFk",
  "key3": "4QSJHbmuNJY6Gf2Lb1LAtoiPmdce1FA15yaKszegM1aCzfMbPqc6nDRwx7jb8yAjBwnWCe2JEVrFpu6qNJXkHvdZ",
  "key4": "4j49jSm9LycgcEVhQ1eZ4Vr72DFd1EwZ5Y7mq6QFy3zEJRQomzKHXSfB3bG6ZozYa7tRQLvb3j6fsQLwqGYoAaUx",
  "key5": "35FcP1QvGejgGTHSmFnCme8K6B6MaVfFSbW28XFvjiVBPCaTA4Vn1DMbAUH73TVk8vQTEc2wzCaSedX3U6tV7Y8i",
  "key6": "iy2MVjfYCRDNxKHJNNvv9Dx6ztZoRRW6FGAGU1BiUjwQeqad9XKqSbNhbenY9WvEowRr55AytEdQA3VNRrK8gM8",
  "key7": "5Uy7fh4GJdKQZnXLMbDFS8zssbr47QpPTbqGLp7LQbax8rZXDJ3yQJWHMUoKRMYg7GDFE4B99VBAa9wEs7Vh1z3r",
  "key8": "p72jd73xd5H1f6byw1cPwANwNbgd9aYctMDqEz2aGzw3u9Yuv6BxLHVW5Li14erhttRPGBkpfARCzZkSbzmTZGD",
  "key9": "3H3Gcf2KoZF9oELDRHtzo4BMRiU9J2LxgrxMX2J7UXQJuhkdT78HoPaxKrS72KJwNmtGktKFuJ9mJ3RZxMLyML9m",
  "key10": "3vpbfNGqZTnYTgAfpw9sZoxX51XNPAjwdAZ9YMXxfV64Cy2wT96uQgTF7w7dovdmRoEX1EgDQDVcAfjF2ZTDRuYv",
  "key11": "26hHeBxGY6DSZFachMaLso7LZEsLq8wrzmdHdSmCxsRo6yFrdt1cSsBBmJHNyZfUECczpvejihKobsfBgNrEMSzb",
  "key12": "4K7xY2kmQELTT5xtCpoLYS63UG9XAAeVmXUCsdYCVkkbuVrXABFXNePyBWVy4iN4zAHPH1sLNz2FPBhQtmyGTEGw",
  "key13": "2Ga8Tu8pHz8wA7WEtgZo6gmdfNcFJv6KaVXEHe5W8xa7vC8e7HarCJbLLCDDmQanoZJnqVX24S26ySA5N6Wn8Vxw",
  "key14": "3KZw1w7mwv75LdycYwVUP4jJiq4bAwWyLH7C21ffGNE5bNEa6NQ112SYkAj1PsDRHRQMYVDFaX7XSh5riAgDRkpn",
  "key15": "4BZk9z9ekWpVfEtju4gv2wE2A8d2quhRYhrXUSgZBYrbnLfgpkeKag6y7tdadfhaLHS4duJBxFMRuUb8BPvs9sUC",
  "key16": "59PCwriuSbrNDGS66GFyQmzn2msKLh3gcrijvmiT61Huf6maDPKuZQq8EuKgDPznzTEb9KtkWTZVHXvPHxZnM86d",
  "key17": "f55k5E613P1MKi3kjpRcnbsezN6EET2JewHZDqmb6oQQaGiQGZYgFfTi8rJ7BykgXMsDyeg6M4qEtMwUw9tnnj6",
  "key18": "26xLjq64UgEMH9VUKSsp83MttXu6ktBTinzEUp8WFRd7Yo4Nojv7o7n6Wcj2iRDYhtcK68shnqd5ZSqstbiPSKUn",
  "key19": "5by2WUyJePMNWmLA5pQHUPVjhCVVwEeuvNiy24zmUCNwPaE4xjQEb8RnbWveSmQ33iaBd9wFPeQ2FQgmifVNZgpw",
  "key20": "67Cq49LhpqumaJ97NbfydKtFaG7qX9Dq4dA49af7VCacWZTVf3uhd1SzJcU29rTufZLYrGv4AcfJikjk3CEMVnwn",
  "key21": "3XcqCsiZZoVEuyEyJBPZmnmP82kC9zV9K6hnp4reBWMdBvD83MARgKj1epSatsqYukatiPmG1GAp4oP9jnERR4wf",
  "key22": "4nzFhExDprKxoS1CNTMZCHwCChzimADyQYXLP3X4TZF9N7VUS8WV7mNdFqPNtMJV1TzMNZU2mRtZR4CgF7WHzX1f",
  "key23": "2QY9pd3VzjYnP7CW4uNunk9M2CkkJ4sYgbKp7L1DNRNxWzQquVwAz9JhuehdW1tZWFZXrPTThsd9ugCqyaS8XSYu",
  "key24": "5WuoskC2XffznQzSLdyeYUBDWMkva52qTMEisTANwEKgTLCaveVRPS2NoV5whpnU5e6G2s9GUFNYD3kgMEssvwPG",
  "key25": "WYHMwdGtcTfb7Cr3DTYsZUPUS1VyPhb4kcAxhi5m2GzqezzWHme5Khb8VNR15T1VFzfa8rrK8JV7RQjyCEXGg7o",
  "key26": "22gFLgnTERavmtWu1QAtGMhjU3tMgzBbaKVVWvCttEamKqN1QiF1HzYiuyF4QCPuhV18Ss2xQ5zjswLQcTfcWyWp",
  "key27": "71kra6urcsvJ2ffsCsF5s9L15SduP7RuxmB8cSsCKw1gDMG2MpodPceGUUxAxvAJ7GGPRMLLQD4JYEKCBn8D2sx",
  "key28": "ehCsPWBvyoQzZduWtSWskUrQjJJeumL9mWyZZAQY5eZs5zsxQaDQtsoMkk9zcppKT1anaCnoxAS1NsKzqqVV224",
  "key29": "5aH5ddG3cxh5ECmoSqW7CTgMVHsCHACxQNvHHSDVxyoVRF4twiJMHQMMQRPo5ESTF6mYr3Vbak14takdPMDo98nT",
  "key30": "7h7mBmqERzoFbkS5GALWZK7PVmEk8BwTUkT1YsSoGm1A1jMm6vLSBu9UemQbBZAzcskRMX59pq7xz57LLfMzr1m",
  "key31": "26mJ4AZf75jYQ8mA2qXDoFByMPyxgJmRaBfAVVGRAvTatQbFsKGvimEn7ybK69AvgefjQL5pJBPbHtQ9tDVB7DzN",
  "key32": "38d9qj5NciPcm2eE54vhQydzZXopomHc7SQFsEM1HCUrfzHwaMQHHVrARVvCecV57PftgZv7jzc3Fmu2MTJ6NMqn",
  "key33": "4Pf3Fde6c2GJtHo9A2yeNqRzKqf5cKUfRBGypgYLa2VCo9K1KFw2eBGz2bTEz1hU36SRqzHCu6LUJCUV6VbF736M",
  "key34": "33stsVYzR7dEN9KrTHqXhNCEDzJd5UtgiCzcEVZMc2hXk4V3XpBU8cr1LSbtdWw4BJcBdaVaHL15tWoJWJ8pkZxw"
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
