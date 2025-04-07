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
    "2p7TZ8XLJ2THTA8Mmhx5yfwac3eAxBVMg4hsB1u6E9bgjV1954Sj28yaeqkTYhJDZyy8aTxWefj4fYGSVhdVfbfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Ae2yADsB6wcZnAjDHtF2VkhLc85y5S5EKMfbaaeD3XmwZBPqtuDy6snXPd4RpNRASErB8pHxfBURK2Fyxz9tzZ",
  "key1": "4HnzctiytaVnbw2yjhLQm6z6h6poiNF5f5nHi3r8DqSApHk5tXKMomYeKRqJDPiwQGrXoJ3VcFxoRqbc6wFK4iHB",
  "key2": "5MHXaAbuiqHxrLaydBYHrD3HVEoRQwdWfqfa9r472bjfgSm5mqwyh47vwdMxsrGccY4wBcX6jWZ3aExyHVwufgyq",
  "key3": "4yHqxokCvY9DuGr5jeU86XYruoGvhXf8AWr52E1SDs9Tdt7aoLvv2j8pvwQk7tHGqTSLWuV2DuEWQq9fxj1gFFZE",
  "key4": "492GuUpwmknFLG2PnP3oTeFe1H49m1aFsuGcjwBQX2fRXynMsvQBMUjWptnKwTtfZUiQbPURUkV7rNJqkhMpgGrC",
  "key5": "5JZ8XF1nuKDDacrWkRBANtmHVSpkkcCXfcerMoEQAJV1d7pCnP85u6NJBTTvPpMwEfbekpwh9piVPPWiScnMiFtX",
  "key6": "3pUrimVUS3mdEwqpAx2dNaLynDfT5j2pXB6UCXCSJXd8n6Q7b5WoAv1mMX9NzNQEabZWpbvE4GzeRfn6f56uG3Af",
  "key7": "4KhKGpyoGHdqPb6aqhrZGqmDbQPAimELfxiHs7RQuoDFBtguwwVxGUCHMHcYpsA1bmH2c4XbjAwX6Ferb4NZUR1o",
  "key8": "4j1e43u9dLRpFQVQfMvUPUjbA1tvDLMT4ofumLDYwZMRrffW3iHKX7RbRFzUCVJsGcXxb5vWmNPRqa9EK6tJ9jgv",
  "key9": "3ZgmCK4oEuCzfMNAJBanyCwyph3nmSTdEVrKumg9EgXV749W3knMx5kwssFbtHMMT64hay79UtW2mLX2ZUvhdigG",
  "key10": "5gnV15BM8hvZaAKbRywidBuTAuScgXcLRVqDt2PzitnXd2FLkKPnav72fJu6VaA3qK89WCMeoq63NewxbVHcmuzn",
  "key11": "49FeaMsWgy5PeE1StggrDC3PTHDYyqGsQHDPERuYxNdMHDQMaFiXZdNXeS61KmMAd76vhXyHsbdNwcurADqzb9Y1",
  "key12": "4CKAbjFknMoR8LCXgcTuD7AuBqxBzzWYU2SAS2phNdx1BZP267ZZoEFkJ8FRGSSbdH8Ux6mbJcew55i4TRMakta1",
  "key13": "cRuMbXTz6ADFASxGsRDHt8zWiNqr4uUD86jhaygNisnXczui2K7a9czWBs6rna5GNbztdJWF1wbZ2HGeZPrgm9F",
  "key14": "Ff5aocNp2Y8HsPbW4K5dTxf7kdJ1Av2J6WGt8DWZidm8AftsPPh1LGcDoUb3GGmZFFEMMJhfKQwtjSG4bJxC5mD",
  "key15": "Lt2eBAaMXHtsLeCn2nFSmg3cXjZ3EguULWcWuunuErJnHGEsUHogTaP6nWMNdCfdZUv2MTGyiCoETX5y3LBwvC4",
  "key16": "4MEo9VHGa3f1iQqKEdz2TXe1XXW5SccMAdfNT3xJ4Eo7WhNXVfs1d78GGsTcVUcGREEehaXWVJS3r1fNFjSeXb5a",
  "key17": "2V7Yhtcauqg497YsLGgUidpZqTRfeJNcxxr2JTFtBKcb1cCNqJxVPfAqYkhWtMuDHd7LnxvHdm9nXJJCEzJwjLEa",
  "key18": "3BuvF4RbgrAfMUzeRmZvE69eEt293HwzU2rqMqScWCeENZNRAe9gfVRY1CEvWWqcSmYpigohMe99baGTkfn8D6rc",
  "key19": "3koEdxv1qM5LQipt8zrVEMK3DWQ3FVPvnVzpai8sqniU4YDtbtVvdzU3xsr8TJDs7hYsLXiwoVPbmqeBV4UqTvpa",
  "key20": "4buDngHGtB1zMonUXMnLcvuozP9k4oZLyN67cgU8QuAABiKFEvk3VaDb7CTpkDZijyf2YRdYdJEovzXNL6e4mVmT",
  "key21": "2hXqhoiR2NxNtoMwKC4VQ6XkmAvjgzk8XaCQyMoH8mmzX2G4rGjL9wVujmorp3G3KspsPDasGNGV67nKGj82q8gn",
  "key22": "g51Zmu7BnE4YiEUWY5utRxjMceJ2Cn3nQJj52KmddPPT9gqKmkqt3U2tduidk656K3eioVRbuo4jvFzEa2cUSEL",
  "key23": "5Bt5wPPVGJbzEjvRWiXG5Gi1N5JYc9Hmbjjq8TGnhZQ38ZMuU96Qfkx6ZhuEtpANrfWi5G1kce8aRGezQYJ65ePp",
  "key24": "QokeyNG7h8omCc42omTgWSEqrQyXWabQBei65ahopTmJR9BCNU7ewW4Nv8a979WDvJaUqm3KkAy6zBZjcVTdoZp",
  "key25": "32375BBQw5jUVBUBZhpryAJ6LxgQq3MxPR7PiJqBqBKpbCRebRrEi9AExf145D7UPga7jTtguFPXdt8AGjPCCP2G",
  "key26": "2McrqqPVHhuV1ByV2q3Ny6v1xeemT5tBGQVirhZfrZ35d7oSnwWdYyTCPEwxmHqVd1Svvj3XncLkgp11HpWEeXW6",
  "key27": "5vpVMvH7kJoDH544qDYmPHy86UhpBuEZSeP2i3R745ydRgpwDAQXreUNMLUDUc8ZGEK613MdLVV451VWUKBeVE6X",
  "key28": "58YR6LJtf4BqQef84WQjqedcHdp1HxE6EodUTG22s4MkxAyxxD5mVA5ehXWcPWN2mzsmjGt6pNGzKDWpYpastbgh",
  "key29": "4zJAQFJP2XuFYBJz7FYqG6pSmrSCiX1h7DoBjwyKm9FVSpKF9VzEkGYK2grNxXYJLNHcw13XddwM7aQqDFZdZ7VJ",
  "key30": "3famb34UmRe7kHJgtC8XpaCiFRSTYYrhaecMbLD9WAgCQJ82KpVZvJ9t8gotZec6BnUvCXRx1Z1MyQ9K1N9BCbfK",
  "key31": "55jmXNkPFkBtdWLTKDmosyqq5ujZcuotkwm5yGYFCu2p812UrrcrvJY6dDewUAufWFhz9UBjSAeRnfKTbhon24JB",
  "key32": "5a1ebMKoy6hRY41bo5fQgKQgVfXYYorKdpsa93QKZTXcLy4mdgzgCCcJgmErcVX9XKcoeuHejm94EM76SYgRm3sB",
  "key33": "Z2sLdokTgkrk43xJBVdtf2PpcUyNeaducY25CHsEciaNrxyUR3NGUn9dQJd698sbNasU5xW6VaTBQYDY8fzdRup",
  "key34": "2uGrYTWAKxzoCmZm7RL9tVhwCHYfTSTovWJqem5pFKvNeiMyvCvHq3sJ1imX4zFGsjYmVQvx7gQBXhyautLXwpps",
  "key35": "5ZjyoaeraQJP8FqeetGtPzstBwj6Upzd26xfbCNgtGxojQcabzQ8hcmxKCJ8wWkxvngXVhGjJvwWwWQjM2aNP5jv",
  "key36": "676gdAEkd3TvZaP3hNoRqZzyMrYbQc1ncMc8cGvXF8cqe4RkcNUFjfSDgvhnFf3s5nLfe2GscMqceNgNc1sAMMnr",
  "key37": "4kX368CNkfgzzvrwcRKU2qmoVsWMbBuRehVRiYrrcvZhuE1q5xnLjFtw297RF2PrNo3UgxpYz98p3ah6VqjoVCyC",
  "key38": "5aN3Qkpn7kdY5H3uWtE7TGw3yH7Lhi31kqiq9MV7BwKnRvTc4sCGdbnn3re91W2v7maufKxjTgsPg2CCZMZum5zz",
  "key39": "BiEbTkK6qXBXpPfw7cfrnE6jCNixR4StVrX5Jw9BLew2vhuqoh6ntGriBcgoDSvk75ViduvsWxF9Tm6nPhTqBZT"
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
