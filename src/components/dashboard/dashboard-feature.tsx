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
    "43FSUPVj57am7KHUAcmmFzMwKqitcy28ywbtkLxKtCTuZnZ4V75m1ieMnxswV8nFFFpXvWkUs3bkWzvNoa681Spn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhvMniz2KYRSjofWmKkPr5KeL8MGK3kEayQQpSSthUV5vr3KHJBsXsQEVzijfJev2iMFJXwm5cuBtVF5jejpvx3",
  "key1": "2MaUEZSRLVvMsaCrgZJ18zyhaa6AdDnBanAEF5b4orUqz4HkEhiUqNJL59KKELWnRg2PPtgwrTMqCHvdhPCQsSFa",
  "key2": "8HSMUCyw7rZQKjbzydwMCDqkus2LDjkkCMwhNiVStRTGjuXgrgLvfaqfqKQzN8drBxSv5HyvmmhuHALA135EsCP",
  "key3": "3wYBX2KcSC9YhBDzczJzXZh6zZp7Nz9RVBDYfY1KYPSo7ms7UgvVJtkRPKvW9DYwLd3zfNqnVgkYsdLNzKerhatv",
  "key4": "2Ay81aNiJ24xFnQ4NWqLQBeSvAD56i3AwR2L8Rh5tEJsSYniqBX7gEGgVpzFWjEMF7eKcgr8xMNPTm6vuDBAn5fF",
  "key5": "3uZAQ8Tzzj4hWbsjepx8DCqMXBjNHfWgWa7MrucpTLgmw4MxVxzv33q8phCtveZo3s9fj4J8zKu3yyDZEHR6dTiJ",
  "key6": "5tNJCDXq6zDug76x4Zd7VikAZPxgyszFk1135drzxYzhamXtDaUYYdiTrfxE1TtQjkchaSFkR8eZPTnc3gHQZRAo",
  "key7": "CruX7xtuTzwjFpo4kNdRLbupChHAzSQWMeqfC7MWi7vNau9JwCHUvjS2PVchp2RaYwUaECZa9gS153yXV5M68N3",
  "key8": "58okePcxontL2hsK7HiE5s2mRfQ7hTyoG7DMooX9Fz4bQtgYU1mAK1zzZdQEFC5Q7YsfTGXEtETcs5gQMiKQqukN",
  "key9": "3iT3vwEmjZh9PVh3YDRAxzhbXZtGDHwRt7LNEZWgRZ6L9hGLjsMTy3joStwJN3TEy28xUXwvxwWmp7DmWK3t4vgX",
  "key10": "5J447cXg8d8KdGuUNZXmK66JgTDR2si4WGYMzBizNLQew9raMDqhJK4jMbQxfBH9akJepcSusSGpcdooqbgJpLG8",
  "key11": "2KXS71oUK7Sq5DYH1UsrSWsjNhULutaz66kgE5kS6hUCvgWE6ZYEWR1rzgioKLkeQLXtVUsH5sy99eKKDox3gN5f",
  "key12": "3gKXauURtRKLrkzWHgBikmMn4EMeu8Nt2McxHNbsmmvGzzmx734njhbzFpvRPSPUyUnXM8xiSwp26hFibUYXPY5c",
  "key13": "227paTjpWVscixgSvVZLRA1eqKwjQY3EGWy83byY9UbexJWSj1PCroXhFcQz2h8xbnijk2uZZTsD7BURjMBjQZDK",
  "key14": "2Hys6aMv2y1koyg4TL3HZB5dY7MbjnhiQGJRxogLFFvfLtwRWfXzV6n8fiLXd2Yw5b27g6vk3ZsutDgrVh1LXrm8",
  "key15": "3rSgWtUtQ4ApbiKYuchhPmFAdSZF7GTRuWunNx66Zhq38W6HkoieBcMRVh2K9uLKweyKjwLkYNUwk2EFmWGV3syB",
  "key16": "3z4So82uK1wwLom14AmVFyAfEKRTPkgpwXx4aHEnovFmF2GaPbgtX7fTRCaJnKrijnYhJzaPhGmneSz4yieDYCy5",
  "key17": "2TgA3n2TrnDL7Z75Ag9Ln8ii699Hr2BrCQKwH5aMRrmxwEN2Sg6WU5rQHJTYZq2gfzT5Z6bRweVkzWxJibezq6qB",
  "key18": "2xYpLDfRg4cd71U7n51DJBAYPWCJ8GoEJ2dwCtoMN6Zbph5XWJhUrqwMcRgjmmHKgQeWuEZjJMHf24e1UPCYA6Rv",
  "key19": "3DxsvABxT2kQKnKbVfeNkETpbyEn2XBsQ3suzMqkwJ7WxNE3MiHpBC8HaW8Gf6kFrjn978wNSJ82Z63FnDjvYaqU",
  "key20": "3KFr1sh2FjYdjA4ka2ucezKzZm6NnM8BEWuSiFu9VaViwRzSNLsjP4ZBTVCREnq7HogyM7tiGetJLRU1USYivi2e",
  "key21": "5Z8chqdKSYxE4QNsVyEUXBSR5MyYfAF57eKMgS3UHDndHaKELDabqx362i5Q4ewokoXp1NNYnPH2rrzD1X7DJTYZ",
  "key22": "2x7fpmsRB7MmtjBu2fqnTjsNfMLfnWN3JnxFLZdmcb7rXzqHpwb4PWbnacAUEsBZGEhUhCSZQvm7nCvwjxoQJcuq",
  "key23": "BCVSog8if2vsJqifEjrvamM8vwUHtziVHijY8jKcsp615BR2PbCHxHW6RVuYgcVhQuEFY5MsPouasLSmbjLbckA",
  "key24": "Q9XihKsNmDTDUjibE1JZ6jJbesFTE5W2HJspfchra1FuqbmNydzoZ6VxN5cuN9U2NYRqEnJjH4hueUaEPpJyJVH",
  "key25": "2fczPDip8nu4KVvAVm7BdFRRwcwFouEWVMiGTjFZCupFnWwg847r3LaJYmgZoRjZeKNitoXqijZbBGpDa6Kez2Nu",
  "key26": "4JsVqUctFqJV5paDBPeipBe38RLvBeagnzH4yi8CYpiqKJsSuX2awaaRY3Di6PM13KZTPMGjsc5w7us2gZEkWTrj",
  "key27": "2SL2BDxgcgdrfQd8BXExB7rjkPWE1CLSTdyKV34gJ1mMGK7EGmH6JxDdfiCyHiNqQiH99Sc32gUMMRtqrGWzfZhd",
  "key28": "5FoHVWU15esMRc9mA15a3oSJZPcccTMHqMFRr61kAVtwpn87bUbw5KFjmeefPYtjiknik7G6r3jSmgj2qtphu4fL",
  "key29": "26GPuE9ETiFuD1o6UyiE7GXqCVJ4WyXveSnT8M5nMGeHbPzkAobYazwJqEv33dMm3EjCQn4VYkZQhGQCVAHPXqHd",
  "key30": "3XCmV7EqYDUMrLrRfZw9Y2bVadecDX7to5K1eCWfsnWCS4cqbwu9aSk6FRMBsLCQA1D4vu26qX29LGPtUk2ruGC4",
  "key31": "2hJ2HP43UkExAmhahiFMRNkDExx5QUQ6ywmpAy6Az8HyMZaQ8hHncXG8nSihwhLR8mrSd2MjQY2cgdqKg4j8Fjq6",
  "key32": "DjBa6nnj29qcJixyjiz2vRJ7WuUhq74UXQhN5TBnKTdhmim3c2AnVxGPxUJ6YfnwoEsgjLWJQXrD3bFMCq1usoy",
  "key33": "2BBh2r4AF1h7CqBUShafETY46bt1FZViiEfZpyXAchMcitL5P2bofFmPUYfdWDr2jgd3L5iThuapku6QfZ4bbYi8",
  "key34": "2fU9VJvmNiojgVJw8Q5fX8oocmpfCJ1UVjQkYWLmcTpeespCPqtmYyzQPAStiWvHgQ5JnWpiTTsTNWAWCh5GpJWV",
  "key35": "2oBNGVo3ZQDt8FptmKMSELw51qLp1WPpco7o7mdRLKkc2eU8ziQe8kDdy9XFDy6LKn4GcL3ZMQYYFP3VigMRgzBA",
  "key36": "2cPC9ZVh158BnawhhuCPponxgXAyLVzkscSymfhAebVjXpdcyrb2AEqhHqqFhqyrmPUasUmGhAPimJRt2vAu9ETo",
  "key37": "wFF2es7DvYU7Yo276XxqrMdnFHgs8tDbP5VB8oo6qsNkghXdZXDRtZs4H1YdZ1o3qSAA2TrdCTcKyAodic2CAJe",
  "key38": "4PwF4hCG78hzKv8e7xUa2XqWu2iD2Drhf2ugqQ5wgKzBzqV5vzh1HdvqppyPptzngf37o39APE8YewaREMv9H8s9",
  "key39": "2ysTrf67JDbzbmFJuWu1iSttE4VhDuR7gNQUMUCCueMGV6kJNNxkQSsKhNRdyKGg6eTtRTJBy6xzbWyFD7WjP3kn",
  "key40": "5W3errpKjHgutyPSswrFnMj2Age7fYpZuf89KYzXM2zJtpmC3y1d1RhTfDEb5i7iW8e1ytR6UpMFuUjKqjL2WMQH",
  "key41": "4MumTs3Hxgy1sfw6HheLRUA4gsPi1eZuDRaweMQ13TGmXRKSvWCjAYXjL6zkbM9qcxaSbib54QR8qjuhRpht2gKD",
  "key42": "jB56xvqKq5MAYAMQPuJKjVMcksiMFWNL9kcNeNq3whp2ZTCq5RNXmdKYKuVmyRiyigMFjjTtoXwh31RKXR7sDDi",
  "key43": "32dZ9xXph3g8nCN7a8idyqqofJMFfStXmoa4efTP2F4Exe8FCmQDE2n21m8Yo5WBoq8i3WkJzyEnTHTwdWWPoq1x"
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
