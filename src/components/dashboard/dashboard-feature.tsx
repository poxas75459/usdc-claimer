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
    "54f1yX7AL5HsbkDCEuxKsyG3HgiHVHj89sz8QjV9ezBNsz9yXH1i4DsrA6hQ2LiEAm5CdnSVG8WP7RWaiwa6Ey1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mELiygFykEW6gpnKEuNeW7eKMNs6GVWHuxUY8rW4PrjraMNVmyAB5jAHmeegXPaPH3uYy55k6Xubv8LBYLvuUhM",
  "key1": "557bXiK13WhZMykrjkcT5YPkKGrtF7nXMpxM9Gsz2X1RJStQSxqtrrB4Z5vtoqbo8mGjbdZyVix3p2eC1LSuqXGj",
  "key2": "2USQxcS5KjUAaxzQXRaL2b11aNVJHUvBTDmvU16W1zQqtFX2qaE1HemEnLUyHStEPbE6Ls8dywGog3pHzKzY2Lch",
  "key3": "28rwYmKb6XdYZsH32zfuPeyVooULTs3TXdzbGJXP9bTnmLfnTzp8LmivwHCizWeAbgJ2pAMkQBBVhe5ZUjShtrFq",
  "key4": "u4jSWFmD8tqsMckQRkbbxo5YsbcW3jrAHyhjrVegFA8rLhKm8jNUnT8KW2SDrdUagJ9gJAgXeZVeBL6uZf4sw3Y",
  "key5": "3NiNbEJQYSt75S7vpd2ip4cSoVW51niNbBr99ArGwQv49MrUobR1SX7UZ67BGsDxEWusZACAa7W9HMRSAxwXTcjN",
  "key6": "3hDQfCr8nd1LuuZvrDn7SQWcDCzf4U8V9DKWPtjDjJcStes1Np5M89NnQdz7Bw9bTAkgDH8cHybRef8pcU28rQAG",
  "key7": "Q68xpeoD27rrMatNofeaZj4pSS1yNUrKNnxNfxbjeY64TZaW7VkGW7jwppfx46UZLJWXjvDLrGVyKZcuNcfHst7",
  "key8": "4Dce4vtaeJCtonmubyHn1QynQRUrxBiGq5NVZErPdTtFzuMZmLBDVHfMiWyzDUBEM5XoMQHx2m7wNBNb9FATzLHg",
  "key9": "3tsdU7L459zuh1mAXrYtEbXMLZJYXyLRZSzfsNNFVAHzZahZSXr3SiyqZZbQaoaTMWLps9UNHfEdgha4zwNRTnKA",
  "key10": "4jMiXXABPHKP5NtUmmm6Y29LnJ3VgY1SLJdXp2yTdnipW8VQrMZKpH72mtRkkAb8tnkzhoVn6LM9SWSAQaJ69TSw",
  "key11": "2ETNfvMuWPCja3EbJqAFXgKwTzsTPdqDHeFq1i5QLVDVQmVQ6QeSpp6qNKK3Vp99Bx5ahT8MASYsubySYqP4mXHv",
  "key12": "5PA7SUPgbZtYkXNzNS6NXKgXtMrB8N84GEqFQ5raZmgXWFenNXzX4gKJWimVngdH9sA4vogHn37HucX9WdZ99Faq",
  "key13": "JHDwDXeNc9T2SvzpbWTQZmiiw8JvEqjkRJMeeaSsyULKgKdejqkP9SKKZHrPNmcQuzkZRB562i1NGmdUkW3Fp32",
  "key14": "4ySQrCAFgvnVrYtcMuEfLoPRTU4ojkm4NXkBCttvQrrSvhXMfp5aFgNqLjHm6ovgrMyKdfeiLhy5WfVNMxed9SJ8",
  "key15": "5SwfxKBvbW8uait2s5FXm8v5e1q345UPTCkG69EpheRErVEhsRWVhySjNLB2pFYu5euCqT5YRAKa1gNQdgtAdpCy",
  "key16": "5duBmJdEnvgospGjAuck7hLnPk9tGzszaYWMJVWypkJh3BGqRAYfJqfRtK2BsHGFMi2WFu7dzvrndDy7P2Jdoiwq",
  "key17": "2xo8Kt4iRd598RciJJcXCN5Vc3MVL5bqNowNMS6B41aTea18UHLFgehD9pwKnVXL8GTjTnjx4ztxQfPJSjQJoco1",
  "key18": "JKHEDcYc9ZvsDeMzX1RgmwVt9Hb84X8c7FqbQCfPhCme2dQAMzDkHuo2LYpuhUzr9GKbZCQ3agtL5zL7BnyGrqR",
  "key19": "38Bupu8Hsfr5xZfhWwV6dpTgm1mKfAdxxmjCtkQZZ9fDvPRhRFK5HV9QRenDzsNESTAQFtWyxXp86GwD1Y1t7zdF",
  "key20": "2oK59d2mz8oUfAKLDy2Zn86WxfaSp9zA8teSfNdYt6CSZjUjfPiowew5xvwZ3K7HExU8zEAZKWmbLLWb2fyCrq3K",
  "key21": "5dDAJhkp6g5vQacZxhBJp9y5SNKcTNPC7DGvipH8uE5Dm7QKLyKHkqxNJ8fZKj7zoRpq6CQUvKnVuuxqiiPdBHCi",
  "key22": "4pwBWwCNKvDtYU6yHEyD5uh6w4qbeCjd2zVwKQYLZ2uneDV7sptjWL5wRm3HM6CYcAjkK4tdtJya7HoUJfb7rXsJ",
  "key23": "5Ymz3UPxtFNwNpEBZ2iwS2dDqGVhNivfhk8P5iZtup3fhCgF7pRAH4UpF7UABcoSq9Rj76uHPSwwcAwZqpyw8gW3",
  "key24": "4FKez977gYCT2eY9AsYxo13T1fo4CsEnn5RwwaSg4f8XBWGEHbe15d1CwstnqGPUfKGGkE4oNC47er1hP1ErsHwQ",
  "key25": "2KeWw1v1cTN3R7wcWofdWsxobX4ekgYw7NKst5h1nAyCJr1dUhwsHXGn5o7FJzFbwJveP31qk2SgmsPQ9SMUyWaG",
  "key26": "3Q4HK5UjoEX2m7dt4e2wSb8tNU7xmMekmkr9idtCA8izAqwuFk9J6avwWez7cZzdM6hsF5drpv8snKH1iiiRdkxs",
  "key27": "2sNz28LtaQQmbrZzZBUx8jwWH7Gj3YisJysUNW4oJRSTjsS3cdgqABCHiyyvFZg1qQy4zbEeTr5EgePzbxoDUeNR",
  "key28": "XdhProwLYVUxiPaf2H4hEAQhEibrvYx2JHcQpz28PtfTAmENQ1AYztZfNipGTuSGkDrFD1XbjWBpCWpGJB3U4JJ",
  "key29": "bC5r1XogFzBoGjb3XAwSpeQSCSWH7mQubvnLtEt44ENXmxgaAuFZDQVcwYhY3kPrcpG3mKPjfF5dAZkCCYS14dT",
  "key30": "5D6evsLVYbo8NeJ8KzVGkU5f88vfKTut8F9gfkRdbLBiR3Wfv1DzftbAm4q7mqxUdcVxV1TgTbqLnfipcKHNZeN5",
  "key31": "2vSPm7mn2qSxMhMHiGfaKKVBRNRAr7u488VvNDqm1GEvuBYxNjLjSWwsjmpetj3SyxdG5bGfTqHTxik1Dmt1E4mn",
  "key32": "3jXQFhoD7BvD8wZ4Ttm5Ud2eCByvtQcegvpHbR6VNUjenKHYkiy9SaBip7g7htWgr8oUhgksc9EuxnLSh5bxLL6X",
  "key33": "3tFtWppD2oUzXYkWjP1n5AgZVih5nHqjAGKk1VHT8RLHuanekXXG5Vaiy3LczpE1KEkDBMFPMh81QZTgxEDMvvD",
  "key34": "5d8gcp3ucZaZZXmhe4k2Wwd3KbdRjD7xCdeMAiCXFAEGtuLFUJGwY3wsLGteDowRKNBiEEkD1fo8AvNPXLkJCgDM",
  "key35": "5k2DoHVJpmGFxXRVvZ2ymBBk9CsvPrzdBeR59NRqSdGKVzYYZ28AJeN1EutZzPu9zAVWvQWeCo2ppEx6pTvgtu5y",
  "key36": "5EJGhRn9uV4YSXQFj6uQ2oRRpKfKCcgkrzFZtG3cbUraBRTu9xvwWNjwhjdfhEqjZdnMgNybQg9cpz6pyrnEQxq8",
  "key37": "5qcJn6QaguhvEuZChBBTEQWpqFtRsrGWVzSiCvhzDju1fPyFMQaciEaRSgimZTpYx9itdCWvQSKjQgs8DsovkdHP",
  "key38": "5Hi4dSpsyAkeVYrvaH32EduM9u9t7SzkLwPJUpjVRbSpmofsrwxjxrqKU4nZf6NBXeHrSinhL2mLoar8UfRMgbNA",
  "key39": "3Re9VkWFCR3Q9aYTnUdmdBwTae26VNLhUqHyKcp4LecsWFKSV1SBpzkdXZG5AK4qFMGysvzETEMyqkGYkTZ9x4ba"
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
