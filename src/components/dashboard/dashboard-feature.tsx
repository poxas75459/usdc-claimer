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
    "Gn5aw9zsuPhJgsWMyQPpFjkiZshDVWXRHn4PsUUm6CEz3jrBas4y6wBR4tPKqEvasJSZcnXxLq7dcb1UaQArwZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7Nr2hhQdYVTd1vwk58euwM4QwKMuF4PNm7XMgaHygn5aAbX8hAbYfTe5wCbu2oWy9zCMf2Zhd8krKPe6zoV1vj",
  "key1": "2gtvHkszi7PfXUrC5QhAqKHCzWf3PSoGsZ2Z6EdUmX6tkK2hhNkkiXMApCmDUdRttfieMyTr1wAGpuy17niqEHUh",
  "key2": "4Y21skwPTAeSbQF9HaX1Vvbx8LhfzxkAmyVcrQLEKx74SYdMySmxNdsNQqBHTSRCyJbfRXCYHMqaYnWEQbwhC3mg",
  "key3": "59DCr6LqzwTqjT1BpuEYsGyW44m5bNe7YvEmwcQTGTvUjVU5C9CmJAjUMXHPp5VV1yVv6Vxk5rsNPW2L8nDnmSMn",
  "key4": "4TGHuAMqCVfBeZcaN2AS8my5JCBftxAcmho73GEXBY3BfxoTganMtqw2X1QN7jknivWHX4ybv9tL29ZFBqz3HkBE",
  "key5": "537dbw87PskxU14R1qJ92oVTRLwvxm48FTQppq5DmSdhMSnui19jPkD91PcubRfpPHHUehTGWAocetPn57pAD5tL",
  "key6": "3MU6CvBsdenQWSnsZPMvQAGs3JFHtw114gcRWnTYR89fHFP3fkiroC3QtqBgVL4cKv2Xv5cD5zWELnu2HjGh9P6u",
  "key7": "5owiUSfy1oXXgTjDbkBbFBg7mbzrfoqE2n52BQEwZq9eWEzPETNJNCpfjG99jr9VHVLwvrxnUutHMGQVUx3utzXf",
  "key8": "fQA2NJZDeFcbBHr8jYbt981rHHZZYzjq5oRcfDCHM1ZvUhz3bjgYi3aF3TgNzSiJvNLcJ2V86FoaeCNQ7ZZTcvt",
  "key9": "3Dhd4JH12c6iFjaisdVFxVBFP8b9LzfHhX52DQopc2e7Aw3JXwnhVnx1XoMzMh7e2ersvanBSXz91VN5a9knSM7F",
  "key10": "2z924jVJex7PZTNhShdvVZt9wFvRqnswaWRAhccAbR3F8V2c6kSBbF6jmxo3nzMdbBGRgQQX6NLeLLeVGfh8zBPf",
  "key11": "UL22PU5nUHbBh3rm6mF3rvyTDzuqm93T8g3dWn1YbD3AYsHBfdE5wHp86PcfMas1qRA5P1yPyfhf24k8Nh4oFqk",
  "key12": "5abv3ZJeiwgtzaj26Ts4vxzNzfaBAthR2LUr4TXw1oyLgk73G4HMiVQbcBo7XfwRBNmuWJayyLe5ty2ccgJaj3m6",
  "key13": "5Ym2aZ6XGYQKs5rRqZrKKMawEasLHyGnbNyN4rfB5v3g7SZd8WPGsrLUaS4VUJUQUgwQFxhTJ9NrVSJB7KMDDpTP",
  "key14": "Y5hpsb3KrPrj5UErvTb3R1qeSMebrpF5H21BrY1uQeGXh6hguVPPftueZ4GjapSoKg4hsxeJJam3gamitbVy3ZY",
  "key15": "2tAAdPtMxeMBA8xprYMQZ7w3bTYQ9xA98hQSkuWsBQNYVV4oSjUKsHCcjSjPt7SZVCWuPr14gx2iWgMBnWWmZ26M",
  "key16": "4NuEQivsyHWpjgEiHqvjvEMaXY5ZUZ494Lzt9SZCgfiUmLehvAdA1AUicdUHmRUd27rSQUZmon4Mc3xJXnZEDewR",
  "key17": "29UusS5NkmQFnYFKMb543Gd8CQthUieSy4QpHbuNR8CWGfp6puCTenwDuXz7QTtEJMDjCCuSwLLmfvQy4jf1iN4r",
  "key18": "oe9RMwHX8PjMuLy2xLJQkZppYfFvrxHpUw4ndvj8pcYvrFra78iEQjJqAnQ5nuWJPeMydWLGWpuJTqk36pxHJoY",
  "key19": "4uFguG4FevMPnJkmWFFjkaCCwxaNBWwmaUi9uQNZJwqcxz81zYDRNqaxjdU5DP86w4ssKS997h6QGpxqdVqqLggX",
  "key20": "2TQomGk63SJoNqEg4d99fNtb5daXtYWme2RVMjFDx5dqhS7dZfBKsMeX3JJvDbndWXHi6bbuD53xRAXxAh8aqfQL",
  "key21": "2rXiyuY47GW9pUA83WEfW9FwFFLh8xsVn4NyXgFZ3HNWH6phXcthbJqMScZ6S88DJqEmLbXsy8rSzzbqUNadZKQD",
  "key22": "2Fz6Sutvg2pSfR9boUzFzFoy5sAbnC3UfBVTSP1ZPx7b9TgTUvbgr13tH8JBKHzT7WVU6z3Z9hRQDZiCCXUTiJT4",
  "key23": "5BWjoSBmMgNzEGjFTyVV5iyigPgyoAhR8Fzqe4eT5aCm31ZaJ1bYUR26srLzcVErTixA5gSxKpBGwVg8yqXXphon",
  "key24": "3THMF35cRS9pDuUi9F35SBKQKbu17BjAvvvhVgrtbHk6gyNPVypTtSxTCCXZBzxmm9wa9Qk6p1yZwvsSdAJdj2R5",
  "key25": "4ZDRNkJ5RTdcAgeizTPbta7RXgc6pRYjmTv29Zo3S6yFSL7oVoMjijXUSUFhMzbQDAvBZ6k2JBRSCZwmR7zVXPXu",
  "key26": "42F6f8KijMUDJVkmri2PyXFWy6Dt4RWpiKsAaK8x3w3muP8p6wWFwfF8AgRfXGFPxrStgiEEPrtpqQWw1i4Ypyc7",
  "key27": "4RKyP43kYiSnoNMBQJqSGai9Ra96vGkmHYVWEPE1JAGMTpM6PooE8NPBJHbZsUERK8NNtB5wbNnCAARaevpCuz6G",
  "key28": "32C3hLQ8X5yT4kmQprGKu4xNVwtqhUcNgGEUdU4TemY6rf1m5PdcEweUssiC5bDBGcGs9RGMRjUFF5yLf1vZYHoL",
  "key29": "2MHLpVDkQsmqSUXccJaJLcycCpEwoCh582ZGEGLLMWJ9wKmj37mSrXiSxyZd2fqMwhm9C2zpR2RoFBd2tqidNwhB",
  "key30": "2hLErDj9H7P8HaADrh98ppsdmYDDwgpf7EqqzSdXSH2niCNK3N2yKwxfkXnLMMcQBWdt3FXm63huGz9FFbyS1XpB",
  "key31": "3cLrpfKyvkda2osvutjA5xhWQh2F75G3DmaNbUyVHVoHLxkmAtyEJb73FLPaANRat4PCuHHwtinrfmzW9y2nHSEk",
  "key32": "57FwTiqvHGYzittntZEJjsfdBwemFevNatxBmDSBv4mxwXzA7u1xPuFCr5ZcJV3JwyYWqRNWK5T6BJbdxfQaLz8c",
  "key33": "5yDwuZyZdKiXTvzeiT6gQuEcioDJDoUSPhTRZ7em4zYinnLnAJiuCzz6Dj584Pe1fqjmgjUFHUtPgZwo7mXvRU1w",
  "key34": "3Y67NNN6MG1Ts8NjiSBD5da2wrtTkefsGEJaj84EwZdThjLxUhvRhQWyfM4cTko7tiz4DTzMNBW1ThnzbKecwdxJ",
  "key35": "2NzMfJgPoyLfsfBmdWe9hNM7qJQH4WwcW8ZF9xjZP3oQV7PGjo8iqiVQn1fFUYY5Y1CEz5r8qCtYJ1KLXaWPx73v",
  "key36": "dHTnq5FtBoNYrCNsZU5uH6WeZoDLS9MmdbnbN4kZRH6wfx9J7oexLsLSrRk5obtgFgSG7g4n99P9WGrLSPiVq8N",
  "key37": "2fAVtcFRihDKfSgGpCVs8899HL9ba73FE1e6Dg5YmHftPMsY8Z5P1VVBgygJCwhsomyoDsCcrF9c12FjeUB3UnHo",
  "key38": "2ABQpgbYVCqmkG1BSnfd85tBnWieEuU1ksoZdKCWkm8ZKWuF1PSRUniQCKiyCTGjD9qXCn1uWDhLmeufjX2XCr2v",
  "key39": "cSYJaxFuUwGjAVVNKAbb5xrnWPbPxfxxfjNcZQLopQjGpjpfPeX5xiau8xzXxBepPE8YmVSNrWzcDvDXMqmcnD9",
  "key40": "2j6pHY5a4qUzsCjzMG37PeH8atd9UJe934R1UbSfyrkyoVEX1qZHncbXPRWpU4WAffz5aHvPG9EmFG52qmh6Q1Co",
  "key41": "3AgMk5gpSXPcHkuRyGG5Rqwf1ot71iCbwswnQXnfzuHNZDAUhdMfqKFDokoMxk3poiBCTKHSZuEupG7DfuQ2cZ9c",
  "key42": "4bw8KYUM6YaSrkgyuwdwkeicrSKgTeaRWkbntep6UN17V9zpJvxxPVXnjYNfwFfPhPfYs1HgN7yoZctNvgj1HLbe",
  "key43": "2cWu9p1V663g17Tmmbx3if4TTXDRFXH2s6nW8nGdie9zun3szppqJBxkL2DxH8eufuKtffemEjmNULSWLehR1Nnr",
  "key44": "49tTajajpFHHvVWcSzo4dUfy91eLyqRAZC6qaRRQZ5jw1A8nfUwFB388LeUhZwj5jGudNvN41b2Dw382u7ua8chu",
  "key45": "2Zd5QmV7W6WNDDtLusKEUaJAPgYqNdZZbD4f3HAG4x3oeNnei8LRHy38F3JwN5av4KLcJcroaqppKx4dRKAvFi1V",
  "key46": "4wpVx58hTR6wLBAGMmqL9fuVjBTSU7hgzQwBcTN5jQ6Azr4ZKDMaAMYzU3HAq9sJUQ3EkhxkQodmoESFSgpKj2R7",
  "key47": "5AGvwKrdo8Ghn18kLbtmms9NvLzaosLhhZz8QCQJ4YQKZ9NmrCzkNF3yBhPwQG6RNx1Tiza4gWdLBFUwjkatjyjS",
  "key48": "5y7NPwHWDAD3NCsMaPV412gCMjmSh4sqKVrSWWkFizZLDno3Ep3AXKKm6bMJD3bEh2LpLSvg3gS4R6pKBYrTmR1W"
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
