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
    "3aLGURBrvbKWtXqLm54nyNpzgnKyeTpSz211tvbZ14wpXornnmJ7TZjfDhuHwqQW97aUtCseZmPBUHp4n7g2ug4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhjyTbdmurY9udwq3LaVExw96pXGc2qCS5RjqmiodwFW4ruHi68ac5WbcFbyeYDEw5NvxUj4TQooeufXFCq5Hyn",
  "key1": "5e1i77ywBijovY1pn2vfZNcBCxRTBwfDuqhFwvVgVGTbjLLoiaip6fsECH7oZq22NHhPRNPZtRUkL4qaAGoJFimD",
  "key2": "3e1JAbNzS8heU2Rmgr35sJVzDXWv45YDdePMkBnw7L9a2gAumGjMTJuB6fQewSY6ZDRE79UsxwfXiXSeWrson2RZ",
  "key3": "2HbCWuitqVSuRs5DsdqtcGGoHqFCb1Bg6Wxw3d52qcQB5NtUn4jtbqtEWEB3QVvWtHMQmtKMZf3K8riUKWtzLDT6",
  "key4": "5ET2afEcNJaMKTFw33UarKf28vSmgQf7SoparA2XxVyQ5X1Prq4qAA5WXZhPZZXnAmZErxS8yWqPW8fZY9VjgfAU",
  "key5": "pCu8dSuco5Nop4Czs6HCv8xUTho1LAer7VrPqMLDhoMVDqDzBEXAJMLZLRQn6L9UPaL4czBu6x9M2kVsHjCkAjz",
  "key6": "3VrwpuXdgXBA4L82gGADvsxUpimWqYhxaRMjat9U7YAeCTJUQJebkp3s4c6c1udd5M3AKULyuqjQxHKNJMV6nbDc",
  "key7": "5vxTQnGYzZ5orjHg1E8GFViuzAsdx1MiP7KokZ2tHrcmZX7AsfCALSeCsJ4XsY9w9ozZfGjdMeftqftbtQeK4t9c",
  "key8": "2gjVVY5RymXFAFxJz7gCsvpvQ6F7GAobdC1JNwDKKyDAZkv9CQ5cbBvE5AgESdQVQB3miT632CmwHPLWwuysb8J2",
  "key9": "4VRTBqjg4dx5htXB6qyZbDVYaxkBDevHwekfFXEJoWRGvxPiYgJcNBjRE2t4enzAiDpZkAfXNpvNeGnWQocrEScq",
  "key10": "2bK9tUXF6s3ZBYEVDSjVXVBs2BpiNQx8zMrJkJDTZBfFPXFnk9PWxUjsBQetaLKvabNgcACUhmETbnXE4q1rFwEa",
  "key11": "66YuZpArDiYrp5WaSAwpYsKAEFWDUXriZoxiSRMijhYJzwm4uDFmfHXJzakR7mVmpN27SiT9myrpdq7wSTuh9w8P",
  "key12": "4raJ4DC9XB4u4gEfGbwxbP4eY1PXUfpaScaqBYzbH16aMH4LgQ3Mzf3CESCYRnXbVqkLAZbZhPJX6E1NxvexGjLg",
  "key13": "3wBTduwJsemdbKG3DmqBRCqMnFPGevKXyyzmm7kTFAFgNgDqANqq2GcCyyMFZ2GrX59LM7bynPWaA3s2yoTJSD78",
  "key14": "4v84zQPURuvrRYQ3KLLrZtKmyyWgrteBfgR4XnsTKRV28F7oJyYy1QVunBSmMwRRF14Eou2pAq7fuScuAGsQCuMH",
  "key15": "2GmF7BWGEi5jyisQGqD6aV51yQvzHQXUQkw6FrC9d1xezQN24uXujnoRnUDTL1mBbEjLkdugPNjqErm2URvuFNhJ",
  "key16": "37gFiu3uPQdp222Fu8FUBetcAvTHAiXizTrc2iYR6ATWzfx4eHRZytCNoHRCw2je4wLJiHXGC9DbmYQCDd3bnpHV",
  "key17": "kUrywxE9nwHYJ5eidcu8qsxjPb4jHYHKxhTGWJ1SgTLqCS5NHR3JUz5ZgA2XB1DhXNAxqccdGv4bJxhJ3FT8DRV",
  "key18": "4xQ7zHYNMrqMUPJDBmhi1EAuRczTA9Vj4NTAdNYmtsmkqH52FY5nMsigixMsLrHXcmhyzZU1KFtWdXBJYGDBUn1y",
  "key19": "3ywQk3a4iyu9P1oXRPwLMYfijKE4yDTkNZoRFSXgM7D9P1hLr6bR4F7hu1dMtVvLA6rjAYYTDHZhSC83CfPYbpfH",
  "key20": "39KUZmnLN8ZT4AqAKJs2AFKvpRy6Xsf8rXAki3VwWQ1CtpdW7qkYiXotcRRQGLVTJx6RZD4GCKk1Kf9StNSfLx2j",
  "key21": "51rSeuw4rhQQeHaUGvD6ShbxZz63S9VLdmieGbtBnNdgvSR5Q8wLLPEtWvjo8PcP1i2KrrTYXr9rmBa3xHkt63aG",
  "key22": "3tHKFbUfSer4mzr1oEaYv4hg3fusk85GYFYuJmDUtuvAF3SWNtYpzYbAXAon7D4pWT4LqJCR7R47RrKmWFVGd7e4",
  "key23": "c85ueXvPaCu6xohdatMKvrg8fAJtMo5zvavvyYjGFe7HM8mihquS7dYQnMz8WjA17dJuPJgpxzVZr5kuC6iaAqT",
  "key24": "2bTymA3woV2W3RR646H5G58Fda12kXpArBHwxEv4vikZwMhfjA9KB3aM1yrKwpv3zbxTANgtP5FprHVGoRUWMxA7",
  "key25": "4V1XgetjYwDMrYbXU6JuE19jCyRjDf6sknU14nTRpd5JE1zZafGwoNMhKMiVoyzzCeXw7vRRkdN5C7ggJLjaPzxN",
  "key26": "5exxCeYX3ekTVJVWnfqM3w6mwUQHsGe3Kcw2Dm6DMvVUENctNwQ4ghta7PC4tKdFvAypQ9Vj2kNFXK1H7qcr8hgf",
  "key27": "2CfuQqp2HE5w3FuFXtDmiZSwJhRTGjBkF8xS6eWyzKW86qFPMLh9F4rXhmRWdCR3LYoj5qJPwUVJZzXKMUCUr6pY",
  "key28": "9vwLjzGDuKXj1yZATnKmhpnRdnbb9xKbEapnYvJQZPprAnQ74NCZfhxucfRaQJwaXDExyvDBpnTPpViBBG2KPsX",
  "key29": "5gsWYhiN9mxog25ie6xTeXJR7nb5DGA3KyEJv2kgtegUfcE7yacYj9XQcpK8koB9YiXfTd3cs3BNKYbrPXXiWez9",
  "key30": "2BqTbUfp43uY9Tch9mhh55NJmn9HkXhj7cRZjuXqHN7J4yfoRjHBGJHedze3DPHijrEDuvVKRb76BDv8ZcmfhYhw",
  "key31": "2kfB4VZ7MMBHmKLnfPVZda8ag2f9PZbizVxibWqdarb99dK4rMTy6pChsVjZATCD3XKSYoZJP56DE8a1xQYYZ7RS",
  "key32": "7eYjoAC6gLmW2oHPCWQqoBqqgaoZJG1DCsG6T6iykY3tb5VcQEQGkY2V1jNjjG713hoGJ95KkSwHQwZP54zqFYG",
  "key33": "3UVGhAR8SkHi35YRRzYDNoGAEEfFb1QrQ3P6CaD1rQA8LCqtUAA36BNXgo8Rgic4TKhsnSDtde7xfdW4BZnndvvc",
  "key34": "54zh8vbveP7P2WVmci7xR6AMVSe8w41J8Kvm5qWtvqGpTasDjZY1cRWvRdqQhE73Fa4R9xAgN1sjEgeLwZoAEMyN",
  "key35": "5iZaXFQi7M3Nh4aV6tkJuy7B4fCg3nprATxvaR7GHXu5CuSTmBzmMYgzxCGDNptNm5LMnLChqhoNjhsNCqXL6FKC",
  "key36": "3RMhGN7DwYqiJ7fpVErYU66DowNJD3q71qAkZjsZPG9NSij6x51twdhzKaGYrfNpqvKPNjdVC6S6HhyD38ZX8mNq",
  "key37": "5KTBbEnkvAmzKXvWW7DKDvDLpm5cJrf4Vt7UidjA7CcwjADg8knUFoQeQCXCnq2yXcwyxeYM6R9b6sb6gLuprzqs"
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
