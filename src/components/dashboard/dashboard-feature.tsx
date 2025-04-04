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
    "wMogZZhSBKBJ5nGj5auGS33KgGPcNMt9tKMZcyqaT6cuTZex8XmkVRho9WV4X5C9jN1kvFM6shDn92VNwW5q26G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hd9qarfc1oSwdkmNmP9DAJQtZPGt3KKxkiXkgKqp1Q1xkSyxpYsYN2DzeWLo7aenfBuPohBntooDvcJ3wHCzRHn",
  "key1": "VAFZFZWiTxwjD8JhcQQNKrxKCCwZ5knjoRfAEdgbShd5BgJkmY3NXK18UtoRyGU3uByWoSDNcSJ54CX716NuyiR",
  "key2": "4NMbja1ygqYqouq9Pui5trz9QHyiAG5Vg4cEjc4czFQav5Dgg6fo527pGCYhw3VFCkASuWXWoPeUxmkygpwx7Apm",
  "key3": "3jhwahbctgfVfGwN2YLxpbMsc3mfdABgE9NYp7SQt3JrVerh4to4CHd4Zoir5azmhUraS7pkNUfm4pL32NbPCBeE",
  "key4": "5qMwUPStHtYfKFuGrxVhzWub6XBvGBP7j7bZJqJUbFLRX6n1X62UhtGjVMCYP1DD1uhnqoVw5Xubd2pfrFkFrvZd",
  "key5": "3hvS8c4FjXCS65BdSZJ9keboVPB2dTXfbbBCiv6mGLVHKeE7jiu6YoiobQVFT9kaENMcgD1BQKZUgXbpjghfDFHw",
  "key6": "2dQtvqcRUQeLotC7JnuJtHXrDX9EH9jodn8axmv3ypxL9YQHXvnMjEnmjHhxE8NYxZU7JijxcPFAM79B7PHZccqQ",
  "key7": "5wgHyAXAit9oCkG5bhgs3XbqB8rjfySPZMrSh9HhkJEDBRK4b3dGR4K8BWVzeGdFRWXaosbH6kJMViWaKqCymF6Z",
  "key8": "2zcjafQBP3tU5nvh5CRZRbtaArA94duTFEes5pSc2Pz3a3Rxm1w38cuVCoLDmytqkAozWT3aYkFuzJwBaUKwwx1V",
  "key9": "37zxZVAPPsU9JUd2NwSK5Y5DCsvw6DYxJjmHwYewczEFSYTvADi2QtAYnvbKQYQ5s8VFU1oKLvkir8GV2UZ9i5sL",
  "key10": "itbQQrS1JjMMzto21w9FtegseAi13ZxFwPaCdVBc79c2EqQKfxn6XcwAGTs8gPNcg8kdr3eYmBcP7SW5vAaR2ts",
  "key11": "HZbhsjhYwUmjVu9KR8evi3VjwpCJLaFXmXLuYGxHtYfZoeH6QLiyccP4xA5qfCLgbDztZyQ4NG2to9y3vAXBWVk",
  "key12": "4cbUHXDbwuSZnVSkeLkuRpFd1eZE168kcY6dtwvxUeKpYjnVZVnKCHtahyVq4jYc8o2WZG84CzAacNEdL5Pwqqn4",
  "key13": "4W42JJ6EUob6aTXob8y7zzj8wQgiMv84DQBZtUfb3SCrKzV3KmH6wo6UoedCCAtVzn3kKSjgDewMt1pePuMb5Tgk",
  "key14": "5dVs1XJmETwyMhk7SUWjmtghja3oenpXT4q5BCDHZp1PBC77cYUKJqFVGkRhqJgHNoUnop2m6yDuH7hrHp9uhrpX",
  "key15": "4RFLwoLPa9tU7ZEKATCfaJ4ajjKiCQ4HkYeW16pjVJgTfn8GtQMjKWL7wk1zhRq1mB3WssaSBBkgwdkDcb6AfnpL",
  "key16": "6ewMVXivRbxHg8bXYhfg1z4UhZeCUvUw1FVf37wcg4bGkhzPE2chjNFjG7bf1RgbZk3pqFqmaDzWMJHEgmhni9r",
  "key17": "55qoE2T9PgF6eiodRqrCfkKBhXpxPPJ7qv99EckSo5kUFNwkz7UynUoForNukgbTWEXp5GmEnReqHX5bAGK8EH64",
  "key18": "52YHnpY1AFKXUb5M6geamdPDCAuSVVDyBzswyqU73Z3GBZxMDoBS1hqpG2XzsR59BGTrPP3FJENgHaX36Nso51vZ",
  "key19": "5LKdMCqyqFgZxYuiiux1MhMaczWzjBYYLpJDnbx7vooxazQNRCtBULMm4pfbagNizyeUpchDDE5H6u7UU2VEUjVv",
  "key20": "26sWKE7vd3xoPgyofmUXWGiZXEv1nnDvvES2hccafHSDxCmLHSZrqwQLCeysFuws7dk4cpLGeDp6Z6GtkRbfeXPD",
  "key21": "3DeQVtPzyAsq52UMGGMLEkijd6u9PmLVUxh8EyAHbMkKzR7FZxnmCuPcAgAZpVtbB8HUkhjU1G2YV8ywwJByHTQ2",
  "key22": "4DLd7vG1zZKYdb2s7bhqw5yzjD7pog4tBZSsz7iygER3tyQsH4UVMj572pcgaxCuBEnduYXoN5PCEj4yh98X12dA",
  "key23": "433u5vai1K98tFMA93ro273W23SMWewxEfbQDqqgGvMRqStdSBUaRCy3dqDeRxHpR77ZdXR3dFNwwMfQZXpasbD1",
  "key24": "5QNk8dbU2wwXFm5pAeUPjym7zgTVPc5hW8m2bMzq9sz8pQakRpUStbBrkSEfADQRHGQtV9Kk6w5pnxBGCMwTiSUd",
  "key25": "5FJTjTUiDzRYPtCDhqMEMa6Y9k5UBbuu2d7EiL1t8EeRDwqww8WjjSxAaRYLMadjgx6VAYx4T9qcTU4t2ZnQ2V5a",
  "key26": "5yrSvRvdgzvZAo5XeCNu66bHSV1sTGxop9tuPsNPZ3ceTLNxSfqjJg8669i161BLq2rbpBQ75d1ZcLSLgL75DrBE",
  "key27": "9ca44YbPYzkUpzHyiMik81j2FdXaeeVT2MgzR7oQaKSGghHE8c9YaWT4MYxGS4vh6JFGQ6EF66KTLUyd5usGLKE",
  "key28": "3fQqiAm5m48qetuVEhrGU8sqG13DaGfttkG2x3aZJgau4DsmCZkfiN5Wm9jH3LNNA4iM8Ruho97ugpnvzKGqbFmf",
  "key29": "4uZUVBV3uTkwuDNBkejKRyyAkj8BnRPjNYL5Vm41DRhYu2KMNcrUSite8wkH4whdpovjjrg7KaFGgteefkuMZ4sr",
  "key30": "5cTzsNSeEvM1DSv2ADgtnfnpvj9WEBPGDcL8dTQfUkpZvBmwGg5tPfWTBf22JTKzAxLDohxHWieB14MS4saNhuXD",
  "key31": "5T1W8wDU7JroKv2ZQAnax6k2fBBCDgia6YyEj3sx9pThPMCery8ERF3Bo6mnRNw3Yq66xXwPRkxH5KyggbMgqcDT",
  "key32": "doU1kPgbsG6ygwTtAS7aa4rR4eWptimXhwKazxTRgFc5wP96av58t36cMu4Luh5LPHCbLVYrEeg1swe82GpCmsX",
  "key33": "5H1ekDmj3mLGYjZ1CBMDv7AQ6okEZLMGrMwH4FNpTgBXopip7A2TzBmqhzbAtyVTX3Ev54Y8Rvv4o7Hve9Dmn1s9",
  "key34": "4Dc7Qr6rwZ7GbnbA4kz7v1DNk8VQgYMnnmu9LSeFDXGWXWZUqCuhfNwRCPF1eNijgCCSoL3E68F56v5ZruvUSNkV",
  "key35": "2RNGauqWvAjdDQ3SmceuLpo6SgFGR3AUyGC1w1Mo11B4tpabaK3ioQQfC4a3CCiXEMDibRxapvwubVkAbF24XXpe",
  "key36": "2VdWaDCnBBXmXCm4RZWbSR8EYt2YUDAawKExzHvwjj2D4zE4VixnWjUBcTeRggmebMJvpd4joUaGQTVfTW3UPFJa",
  "key37": "4yibDg1ZrtJHnGKvX2FctJB5mMv9XpjRg27Rf2fyCncUCbAmDVMvsZN9EntZaZTG8L2Zsc5c698encKL5nSvffC8",
  "key38": "3yPJdPz6awHjbpfnEgyAmxxTeiU8mrcStFJiyaZMaaJuLJVykN866i11N3ExHp9hRPqQMnaxvbefnVijAEXsj5bf",
  "key39": "2xw7bmLGbSsipmENaNCSGT6zkmBkaDC3bKZ3G6N1yJd72tN5tMHdY3J2o9exkRv9Zz6Hdq7d2CyqrmCESdFzxFbD",
  "key40": "4QUjtsz73tMYpP5FZuWG5b6nsqoAiL76QaJkYkRuEpgUu2FmLkHsJUkNhs3qUGnak47Pf6Go3tXTermrj8Y4TBez",
  "key41": "63CXYuVKSytiCVd3jPj4UGQp8AjWarXNyczAC68S21fxpH6KQiQR1Lj9AUy3CGeppozF89XY2L3ewGebKDKaRPf5",
  "key42": "DJZa8nqBfQ5xpz1AcSgJzAeSL4o6nBkT4WsU16HJuR3HqAoMw57PMtVcyrVUanjLrR4KgNu7YjQRpgtaxBUkdb8",
  "key43": "62pW3SHhz8MdcJ1fkMi8ULv4qKr8oGNi4BYkPsDV8Bg9qC4D9QZGridGFuTcsmTxSnoAmDUxh4HWrM78ZPmf5Jq2",
  "key44": "2zALtW4sHmHaucKEUGpbDpYSZgwwmNiZCLdP3Jjts6EgmTwpKbzBtwwv2R6XrM5p8eUudpBpGa2wMwtSVKnit3d5",
  "key45": "476omjnmwAYyon9WEH7zQ6DPK65NUiZZk7Q3odvhqAA19xbK4Pm1gvL8CtwmCz1NCY7XboSLNFA2Y9GrEMrcMTMH",
  "key46": "4EpzwACpGGjiFbdRthjfZZydTp2k9S9RHTdzx9NGAnxrwtzhNfKDCtXccfrEDygrvkNVqE2GhmtB2HVZMtUNYgcW",
  "key47": "oB2eN6bPd7MctC1RqsytFYvYxTUF61yXWq4LxEZe4h2PWqoybbgZZgsmS1WLP9kweKPBHDbpQeXVbe29b4BipiS"
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
